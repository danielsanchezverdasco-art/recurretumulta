// Lectura/escritura de src/data/historial-precios.json e importación del CSV de
// cambios de precio (docs/precios/cambios-precio.csv). Ver docs/HISTORIAL-PRECIOS.md.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { ROOT } from "./fichas.mjs";

export const DATA_FILE = join(ROOT, "src", "data", "historial-precios.json");
export const CSV_FILE = join(ROOT, "docs", "precios", "cambios-precio.csv");
export const MONEDAS = new Set(["EUR", "CNY", "USD", "GBP", "JPY", "CHF"]);

export function cargar() {
  return JSON.parse(readFileSync(DATA_FILE, "utf-8"));
}

const linea = (p) => {
  const o = { fecha: p.fecha, precio: p.precio, moneda: p.moneda || "EUR", fuente: p.fuente };
  if (p.aprox) o.aprox = true;
  if (p.nota) o.nota = p.nota;
  return JSON.stringify(o).replace(/,"/g, ', "').replace(/":/g, '": ');
};

/** Serializa con un punto por línea para que los diffs y las ediciones a mano sean legibles. */
export function guardar(data) {
  const bloque = (obj) =>
    Object.keys(obj).sort().map((slug) =>
      `    ${JSON.stringify(slug)}: [\n${obj[slug].map((p) => "      " + linea(p)).join(",\n")}\n    ]`).join(",\n");
  let s = "{\n";
  s += `  "_leeme": ${JSON.stringify(data._leeme)},\n`;
  s += `  "fichas": {\n${bloque(data.fichas)}\n  }`;
  if (data._revisar && Object.keys(data._revisar).length) {
    s += `,\n  "_revisar_nota": ${JSON.stringify(data._revisar_nota || "")},\n  "_revisar": {\n${bloque(data._revisar)}\n  }`;
  }
  s += "\n}\n";
  writeFileSync(DATA_FILE, s);
}

const normFecha = (f) => {
  f = String(f || "").trim();
  let m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(f);
  if (m) return f;
  m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(f);
  if (m) return `${m[3]}-${m[2].padStart(2, "0")}-${m[1].padStart(2, "0")}`;
  return null;
};
const normPrecio = (v) => {
  v = String(v ?? "").trim().replace(/[€\s]/g, "");
  if (!v) return null;
  // 27.490 / 27490 / 27490,00 / 27490.5
  if (/^\d{1,3}(\.\d{3})+(,\d+)?$/.test(v)) v = v.replace(/\./g, "").replace(",", ".");
  else v = v.replace(",", ".");
  const n = Number(v);
  return Number.isFinite(n) && n > 0 ? Math.round(n * 100) / 100 : null;
};

/** CSV sencillo con comillas opcionales. */
export function parseCsv(text) {
  const filas = [];
  for (const raw of text.replace(/^\uFEFF/, "").split(/\r?\n/)) {
    if (!raw.trim() || raw.trim().startsWith("#")) continue;
    const celdas = [];
    let cur = "", q = false;
    for (let i = 0; i < raw.length; i++) {
      const c = raw[i];
      if (q) {
        if (c === '"' && raw[i + 1] === '"') { cur += '"'; i++; }
        else if (c === '"') q = false;
        else cur += c;
      } else if (c === '"') q = true;
      else if (c === "," ) { celdas.push(cur); cur = ""; }
      else cur += c;
    }
    celdas.push(cur);
    filas.push(celdas.map((x) => x.trim()));
  }
  if (!filas.length) return [];
  const cab = filas[0].map((h) => h.toLowerCase());
  return filas.slice(1).map((f, i) => {
    const o = { _linea: i + 2 };
    cab.forEach((h, j) => (o[h] = f[j] ?? ""));
    return o;
  });
}

/**
 * Mezcla las filas del CSV en data.fichas (en memoria). Deduplica:
 * - misma ficha + misma fecha + mismo precio → se ignora;
 * - misma ficha + misma fecha + precio distinto → gana el CSV (corrección) y se avisa;
 * - precio_nuevo igual al último precio anterior a esa fecha → no es un cambio, se ignora.
 * No inventa nada: precio_anterior solo sirve para comprobar coherencia.
 */
export function mezclarCsv(data, filas, fichas) {
  const avisos = [];
  let nuevos = 0;
  // Misma ficha + misma fecha repetida en el CSV: vale la ÚLTIMA fila (corrección).
  const ultimas = new Map();
  for (const r of filas) ultimas.set(`${(r.slug || "").trim()}|${normFecha(r.fecha) ?? r._linea}`, r);
  for (const r of ultimas.values()) {
    const donde = `CSV línea ${r._linea}`;
    const slug = (r.slug || "").trim().replace(/^\/?(coches|motos|patinetes|caravanas)\//, "").replace(/\/$/, "");
    const fecha = normFecha(r.fecha);
    const precio = normPrecio(r.precio_nuevo);
    const anterior = normPrecio(r.precio_anterior);
    const moneda = (r.moneda || "EUR").trim().toUpperCase().replace("€", "EUR");
    const fuente = (r.fuente_url || "").trim();
    if (!slug || !fecha || precio == null) { avisos.push(`${donde}: falta slug, fecha (AAAA-MM-DD) o precio_nuevo válido → ignorada`); continue; }
    if (fichas && !fichas.has(slug)) { avisos.push(`${donde}: «${slug}» no es el id de ninguna ficha → ignorada`); continue; }
    if (!MONEDAS.has(moneda)) { avisos.push(`${donde}: moneda «${moneda}» no reconocida → ignorada`); continue; }
    if (!/^https?:\/\//.test(fuente)) { avisos.push(`${donde}: fuente_url vacía o no es una URL → ignorada (sin fuente no se publica)`); continue; }
    const hoy = new Date().toISOString().slice(0, 10);
    if (fecha > hoy) { avisos.push(`${donde}: fecha ${fecha} en el futuro → ignorada`); continue; }
    const lista = (data.fichas[slug] ||= []);
    lista.sort((a, b) => (a.fecha < b.fecha ? -1 : a.fecha > b.fecha ? 1 : 0));
    const mismaFecha = lista.find((p) => p.fecha === fecha);
    if (mismaFecha) {
      if (mismaFecha.precio === precio && (mismaFecha.moneda || "EUR") === moneda) continue;
      avisos.push(`${donde}: ${slug} ya tenía ${mismaFecha.precio} ${mismaFecha.moneda} el ${fecha}; se sustituye por ${precio} ${moneda}`);
      Object.assign(mismaFecha, { precio, moneda, fuente });
      delete mismaFecha.aprox;
      nuevos++;
      continue;
    }
    const previo = [...lista].reverse().find((p) => p.fecha < fecha);
    if (previo && previo.precio === precio && (previo.moneda || "EUR") === moneda) continue;
    if (previo && anterior != null && previo.precio !== anterior) {
      avisos.push(`${donde}: ${slug}: precio_anterior ${anterior} no coincide con el último registrado (${previo.precio} el ${previo.fecha}); se añade igualmente el nuevo`);
    }
    lista.push({ fecha, precio, moneda, fuente });
    lista.sort((a, b) => (a.fecha < b.fecha ? -1 : 1));
    nuevos++;
  }
  return { nuevos, avisos };
}

export function leerCsvSiExiste(ruta = CSV_FILE) {
  return existsSync(ruta) ? parseCsv(readFileSync(ruta, "utf-8")) : [];
}
