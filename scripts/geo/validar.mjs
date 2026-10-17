// Valida la «respuesta rápida» GEO y el Product/Offer de TODAS las fichas sin navegador:
// empaqueta src/lib/geo-ficha.ts + schema-ficha.ts + los módulos de datos con esbuild y
// aplica las mismas funciones que la web. Escribe el CSV de fichas problemáticas.
// Uso: node scripts/geo/validar.mjs [salida.csv]
import { build } from "esbuild";
import { readdirSync, readFileSync, writeFileSync, mkdtempSync } from "node:fs";
import { join, dirname } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const LIB = join(ROOT, "src", "lib");
const files = readdirSync(LIB).filter((f) => /^comparador-(coches|motos|patinetes)-.*\.ts$/.test(f) && !/-data\.ts$/.test(f)).sort();
const entry =
  `export * from "./src/lib/geo-ficha.ts";\nexport * from "./src/lib/schema-ficha.ts";\nexport * from "./src/lib/seo-titulo-ficha.ts";\n` +
  files.map((f, i) => `import * as m${i} from "./src/lib/${f}";`).join("\n") +
  `\nexport const MODULOS = {${files.map((f, i) => `${JSON.stringify(f)}: m${i}`).join(",")}};\n`;
const out = join(mkdtempSync(join(tmpdir(), "geo-")), "v.mjs");
await build({ stdin: { contents: entry, resolveDir: ROOT, loader: "ts" }, bundle: true, platform: "node", format: "esm", outfile: out, logLevel: "error",
  alias: { "@": join(ROOT, "src") }, loader: { ".webp": "empty", ".jpg": "empty", ".png": "empty" } });
const L = await import(pathToFileURL(out).href);

const hist = {};
for (const f of readdirSync(join(LIB, "historial-precios-gen"))) Object.assign(hist, JSON.parse(readFileSync(join(LIB, "historial-precios-gen", f), "utf-8")));
const revisar = JSON.parse(readFileSync(join(ROOT, "src", "data", "historial-precios.json"), "utf-8"))._revisar ?? {};

// Primera aparición de cada id (como el loader) + detección de duplicados con datos distintos.
const fichas = { coches: new Map(), motos: new Map(), patinetes: new Map() };
const dup = {};
for (const f of files) {
  const sec = f.split("-")[1];
  for (const v of Object.values(L.MODULOS[f])) {
    if (!Array.isArray(v)) continue;
    for (const it of v) {
      if (!it || typeof it !== "object" || typeof it.id !== "string" || !("marca" in it)) continue;
      const m = fichas[sec];
      if (m.has(it.id)) {
        const a = m.get(it.id), pa = a.precioDesde ?? a.precioEur, pb = it.precioDesde ?? it.precioEur;
        if (pa !== pb || a.potenciaCv !== it.potenciaCv) (dup[sec + "/" + it.id] ??= new Set([`${a.__f}: ${pa ?? "sin precio"} € / ${a.potenciaCv ?? "–"} CV`])).add(`${f}: ${pb ?? "sin precio"} € / ${it.potenciaCv ?? "–"} CV`);
      } else m.set(it.id, { ...it, __f: f });
    }
  }
}
const slugsDe = (s) => new Set(readFileSync(join(ROOT, "scripts", `${s}-slugs.txt`), "utf-8").split("\n").map((x) => x.trim()).filter(Boolean));

// Títulos/metas finales: titulos.csv (apply-seo.mjs) o, si falta, el de la plantilla.
const seoCsv = new Map();
{
  const t = readFileSync(join(ROOT, "src", "content", "seo", "titulos.csv"), "utf-8");
  const rows = []; let row = [], f = "", q = false;
  for (let i = 0; i < t.length; i++) { const c = t[i];
    if (q) { if (c === '"' && t[i + 1] === '"') { f += '"'; i++; } else if (c === '"') q = false; else f += c; }
    else if (c === '"') q = true; else if (c === ",") { row.push(f); f = ""; } else if (c === "\n") { row.push(f); rows.push(row); row = []; f = ""; } else if (c !== "\r") f += c; }
  for (const r of rows.slice(1)) if (r[0]) seoCsv.set(r[0], { t: (r[1] ?? "").trim(), m: (r[2] ?? "").trim() });
}
const seoFinal = [];
const MALO = /undefined|NaN|null|\[object|\(\s*\)|\s{2,}|\s[.,;]|,,|^\s*$|€\s*€|\b0 (€|CV|km)\b/;
const res = { coches: {}, motos: {}, patinetes: {} };
const problemas = [];
const ejemplos = {};
let total = 0, completo = 0, parcial = 0, malos = 0, conOffer = 0, sinOffer = 0, aproxDesc = 0;
const P = (sec, id, problema, detalle) => problemas.push([sec, id, `https://recurretumulta.online/${sec}/${id}/`, problema, detalle]);
const esElectricaMoto = (m) => /cero/i.test(m.etiquetaDgt ?? "") || m.bateriaKwh != null || m.autonomiaKm != null;

for (const sec of Object.keys(fichas)) {
  const slugs = slugsDe(sec);
  const r = (res[sec] = { fichas: 0, completo: 0, parcial: 0, malos: 0, offer: 0 });
  for (const [id, x] of fichas[sec]) {
    if (!slugs.has(id)) continue; // solo fichas publicadas (con ruta)
    total++; r.fichas++;
    const nombre = sec === "motos" ? `${x.marca} ${x.modelo}`.replace(/:+$/, "").trim() : `${x.marca} ${x.modelo}`;
    const h = hist[id] ?? null;
    const d = sec === "coches" ? L.datosGeoCoche(x, nombre, h, L.PRECIO_ORIGEN[id] ?? null)
      : sec === "motos" ? L.datosGeoMoto({ ...x, electrica: esElectricaMoto(x) }, nombre, h)
      : L.datosGeoPatinete(x, nombre, h);
    const g = L.frasesGeo(d);
    const txt = g.frases.join(" ");
    const precio = sec === "patinetes" ? x.precioEur : x.precioDesde;
    const aprox = (x.aprox ?? []).includes(sec === "patinetes" ? "precioEur" : "precioDesde");
    const prod = L.productoFicha({ nombre, marca: x.marca, modelo: x.modelo, slug: id, image: x.foto ?? x.imagen ?? x.imagenUrl ?? undefined, url: `https://recurretumulta.online/${sec}/${id}/`, descripcion: txt, precio, precioAprox: aprox, precioOrigen: sec === "coches" ? L.PRECIO_ORIGEN[id] ?? null : null, historial: h });
    const ld = JSON.stringify(prod);
    {
      const url = `https://recurretumulta.online/${sec}/${id}/`, c = seoCsv.get(url);
      const tCode = sec === "coches" ? L.tituloFichaCoche(nombre, x) : sec === "motos" ? L.tituloFichaMoto(nombre, x) : L.tituloFichaPatinete(nombre, x);
      const mCode = L.metaGeo({ ...d, historial: null }, `Ficha técnica, ${sec === "coches" ? "etiqueta DGT" : sec === "motos" ? "carnet" : "certificado DGT"}, pros y contras.`, L.anioModelo(id));
      seoFinal.push({ sec, id, url, t: c?.t || tCode, tOrigen: c?.t ? "csv" : "plantilla", m: c?.m || mCode, mOrigen: c?.m ? "csv" : "plantilla" });
    }
    const bad = !txt || g.frases.length < 1 || g.frases.some((f) => MALO.test(f)) || (g.faqPrecio && MALO.test(g.faqPrecio)) || /undefined|NaN|null/.test(ld) || !prod.name || !prod.brand?.name;
    if (bad) { malos++; r.malos++; P(sec, id, "texto_invalido", txt); }
    if (g.conPrecio && g.frases.length >= 3) { completo++; r.completo++; } else { parcial++; r.parcial++; }
    if (prod.offers) { conOffer++; r.offer++; } else sinOffer++;
    if (aprox && g.conPrecio) aproxDesc++;
    // Ejemplos
    const cambio = g.frases.find((f) => /ha (bajado|subido)/.test(f));
    if (sec === "coches" && cambio && !ejemplos.cambio) ejemplos.cambio = { id, txt, faq: g.faqPrecio, prod };
    if (sec === "coches" && !cambio && g.conPrecio && !aprox && !ejemplos.sin && x.potenciaCv && /léctrico$/.test(x.tipo)) ejemplos.sin = { id, txt, faq: g.faqPrecio, prod };
    // Problemas (no se inventa nada: se listan)
    if (precio == null) P(sec, id, "sin_precio", "La ficha no tiene precio: la respuesta rápida omite la frase de precio y el schema no lleva Offer.");
    else if (aprox) P(sec, id, "precio_estimado", `Precio aproximado (${precio} €): va en el texto con «aprox.», fuera del Offer.`);
    const faltan = [];
    if (sec === "coches") {
      if (!d.queEs) faltan.push("tipo/categoría");
      if (x.potenciaCv == null) faltan.push("potenciaCv");
      if (/eléctric|enchufable|autonomía extendida/i.test(x.tipo ?? "") && x.autonomiaKm == null) faltan.push("autonomiaKm");
      if (x.tipo && !/^un coche (eléctrico|de |diésel|híbrido)/.test(d.queEs ?? "")) faltan.push(`tipo no reconocido («${x.tipo}»)`);
    } else if (sec === "motos") {
      if (x.potenciaCv == null && x.potenciaKw == null) faltan.push("potencia");
      if (!esElectricaMoto(x) && x.cilindradaCc == null) faltan.push("cilindradaCc");
      if (esElectricaMoto(x) && x.autonomiaKm == null) faltan.push("autonomiaKm");
      if (!x.carnet) faltan.push("carnet");
    } else {
      if (x.autonomiaKm == null) faltan.push("autonomiaKm");
      if (x.velocidadMaxKmh == null) faltan.push("velocidadMaxKmh");
    }
    if (faltan.length) P(sec, id, "faltan_datos_clave", faltan.join("; "));
    if (x.modelo && x.marca && x.modelo.toLowerCase().startsWith(x.marca.toLowerCase() + " ")) P(sec, id, "nombre_repite_marca", `El modelo («${x.modelo}») ya incluye la marca: el H1 y la respuesta rápida dicen «${nombre}».`);
    if (h && precio != null) {
      const u = h[h.length - 1];
      if (u.p !== precio || (u.m ?? "EUR") !== "EUR") P(sec, id, "conflicto_historial", `Último punto del historial ${u.p} ${u.m ?? "EUR"} (${u.f}) ≠ precio de la ficha ${precio} €: no se cita el historial.`);
    }
    if (dup[sec + "/" + id]) P(sec, id, "conflicto_datos_duplicados", [...dup[sec + "/" + id]].join(" | "));
    if (revisar[id]) P(sec, id, "conflicto_radar", "Entrada en _revisar de src/data/historial-precios.json: " + JSON.stringify(revisar[id]).slice(0, 200));
  }
  for (const s of slugs) if (!fichas[sec].has(s)) P(sec, s, "sin_datos", "Slug con ruta publicada pero sin ficha en src/lib/comparador-*.ts");
}

const cnt = (k) => { const m = new Map(); for (const r of seoFinal) m.set(r[k].toLowerCase(), (m.get(r[k].toLowerCase()) ?? 0) + 1); return m; };
const ct = cnt("t"), cm = cnt("m");
const seo = {
  titulosDuplicados: seoFinal.filter((r) => ct.get(r.t.toLowerCase()) > 1).map((r) => `${r.url} | ${r.t} | ${r.tOrigen}`),
  metasDuplicadas: seoFinal.filter((r) => cm.get(r.m.toLowerCase()) > 1).map((r) => `${r.url} | ${r.m} | ${r.mOrigen}`),
  vacios: seoFinal.filter((r) => r.t.length < 15 || r.m.length < 50 || MALO.test(r.t) || /undefined|NaN|null/.test(r.m)).map((r) => `${r.url} | ${r.t} | ${r.m}`),
  metaPlantilla: seoFinal.filter((r) => r.mOrigen === "plantilla").length,
  tituloPlantilla: seoFinal.filter((r) => r.tOrigen === "plantilla").length,
};
writeFileSync(join(tmpdir(), "geo-seo.json"), JSON.stringify({ seo, seoFinal }, null, 1));
// Precio del título/meta de titulos.csv distinto del de la ficha (texto SEO desactualizado).
for (const r of seoFinal) {
  const x = fichas[r.sec].get(r.id), precio = x.precioDesde ?? x.precioEur;
  if (precio == null) continue;
  for (const [campo, txt, origen] of [["título", r.t, r.tOrigen], ["meta", r.m, r.mOrigen]]) {
    if (origen !== "csv") continue;
    const m = /desde\s+~?\s*([\d.]+(?:,\d+)?)\s*€/i.exec(txt);
    if (!m) continue;
    const v = Number(m[1].replace(/\./g, "").replace(",", "."));
    if (v && v !== precio && v !== L.PRECIO_ORIGEN[r.id]?.price) P(r.sec, r.id, "seo_precio_desactualizado", `El ${campo} de titulos.csv dice «desde ${m[1]} €» y la ficha ${precio} €: «${txt}»`);
  }
}
// Misma ficha publicada en dos URLs (mismo nombre y año de modelo en la sección).
{
  const g = new Map();
  for (const r of seoFinal) {
    const x = fichas[r.sec].get(r.id);
    const k = r.sec + "|" + `${x.marca} ${x.modelo}`.toLowerCase().replace(/[^a-z0-9]+/g, "") + "|" + (L.anioModelo(r.id) ?? "");
    (g.get(k) ?? g.set(k, []).get(k)).push([r, x]);
  }
  for (const grupo of g.values()) {
    if (grupo.length < 2) continue;
    const precios = new Set(grupo.map(([, x]) => x.precioDesde ?? x.precioEur ?? "sin precio"));
    for (const [r] of grupo) P(r.sec, r.id, precios.size > 1 ? "mismo_nombre_datos_distintos" : "mismo_nombre_varias_urls",
      `Mismo nombre visible (H1 y respuesta rápida) en ${grupo.length} URLs: ${grupo.map(([o, x]) => { const v = x.precioDesde ?? x.precioEur; return `${o.id} (${v == null ? "sin precio" : v + " €"})`; }).join(" | ")}. Título SEO idéntico: ${ct.get(r.t.toLowerCase()) > 1 ? "sí" : "no"}. ${precios.size > 1 ? "Si es la misma versión, hay datos en conflicto; si son versiones distintas, falta distinguirlas en marca/modelo." : "Parece la misma ficha publicada dos veces: propuesta 301 a una sola (decide Daniel)."}`);
  }
}
const csv = (v) => (/[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v));
const salida = process.argv[2] ?? join(ROOT, "fichas-problematicas-geo.csv");
writeFileSync(salida, ["seccion,slug,url,problema,detalle", ...problemas.map((r) => r.map(csv).join(","))].join("\n") + "\n");
const porTipo = {};
for (const p of problemas) porTipo[p[3]] = (porTipo[p[3]] ?? 0) + 1;
const fichasProb = new Set(problemas.filter((p) => p[3] !== "precio_estimado").map((p) => p[0] + "/" + p[1])).size;
if (process.env.GEO_MUESTRA) { const all=[]; for (const sec of Object.keys(fichas)) for (const [id,x] of fichas[sec]) all.push([sec,id,x]); for (const k of process.env.GEO_MUESTRA.split(",")) { const e=all.find(a=>a[1]===k); if(!e) continue; const [sec,id,x]=e; const nombre=sec==="motos"?`${x.marca} ${x.modelo}`.replace(/:+$/,"").trim():`${x.marca} ${x.modelo}`; const h=hist[id]??null; const d=sec==="coches"?L.datosGeoCoche(x,nombre,h,L.PRECIO_ORIGEN[id]??null):sec==="motos"?L.datosGeoMoto({...x,electrica:esElectricaMoto(x)},nombre,h):L.datosGeoPatinete(x,nombre,h); console.error(id+" → "+L.frasesGeo(d).frases.join(" ")); } }
console.log(JSON.stringify({ total, completo, parcial, malos, conOffer, sinOffer, aproxDesc, porSeccion: res, problemas: porTipo, fichasProblematicas: fichasProb, seo: { ...seo, metasDuplicadas: seo.metasDuplicadas.length, ejMetasDup: seo.metasDuplicadas }, ejemplos }, null, 2));
