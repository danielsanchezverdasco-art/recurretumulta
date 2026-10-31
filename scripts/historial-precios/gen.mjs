// Paso de build: genera src/lib/historial-precios-gen/<inicial>.json a partir de
// src/data/historial-precios.json (+ docs/precios/cambios-precio.csv si existe, en
// memoria; para guardarlo en el JSON usa importar-csv.mjs). Cada ficha carga solo
// el trozo de su inicial (~15 KB) en vez del fichero entero.
// Fichas con precio que aún no estén en el historial salen con 1 punto (precio de
// la ficha, fecha de hoy) para que ninguna ficha nueva se quede sin bloque.
import { mkdirSync, readdirSync, unlinkSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { ROOT, leerFichas } from "./fichas.mjs";
import { cargar, leerCsvSiExiste, mezclarCsv } from "./datos.mjs";

const OUT = join(ROOT, "src", "lib", "historial-precios-gen");
const data = cargar();
const fichas = leerFichas();
const { nuevos, avisos } = mezclarCsv(data, leerCsvSiExiste(), fichas);
for (const a of avisos) console.warn("  ⚠ historial-precios:", a);
const hoy = new Intl.DateTimeFormat("sv-SE", { timeZone: "Europe/Madrid" }).format(new Date());
let auto = 0, desajuste = 0, alineados = 0;
for (const x of fichas.values()) {
  if (x.precio == null) continue;
  const l = data.fichas[x.slug];
  if (!l || !l.length) {
    data.fichas[x.slug] = [{ fecha: hoy, precio: x.precio, moneda: "EUR", fuente: "ficha", ...(x.aprox ? { aprox: true } : {}) }];
    auto++;
  } else if (l[l.length - 1].precio !== x.precio && (l[l.length - 1].moneda || "EUR") === "EUR") {
    // 31/10/2026: el último punto sembrado desde la ficha (fuente «ficha») sigue el precio de la ficha; si la ficha cambió
    // después, el bloque «Historial de precios» mostraba otro precio actual que «Precio desde» de la misma página.
    // Se alinea ese punto con la ficha (sin añadir punto nuevo: no es un cambio de precio real). Los puntos con
    // fuente real (CSV, radar, web oficial) no se tocan y siguen contando como desajuste.
    const u = l[l.length - 1];
    if (!u.fuente || u.fuente === "ficha") {
      u.precio = x.precio; if (x.aprox) u.aprox = true; else delete u.aprox;
      alineados++;
      continue;
    }
    desajuste++;
    if (desajuste <= 20) console.warn(`  ⚠ historial-precios: ${x.slug}: la ficha dice ${x.precio} € y el último punto del historial ${l[l.length - 1].precio} € (${l[l.length - 1].fecha})`);
  }
}
const buckets = {};
for (const [slug, pts] of Object.entries(data.fichas)) {
  if (!fichas.has(slug) || !pts.length) continue;
  const b = /^[a-z0-9]/.test(slug[0]) ? slug[0] : "_";
  (buckets[b] ||= {})[slug] = [...pts]
    .sort((a, c) => (a.fecha < c.fecha ? -1 : 1))
    .map((p) => {
      const o = { f: p.fecha, p: p.precio };
      if ((p.moneda || "EUR") !== "EUR") o.m = p.moneda;
      if (p.fuente && p.fuente !== "ficha") o.s = p.fuente;
      if (p.aprox) o.a = 1;
      return o;
    });
}
mkdirSync(OUT, { recursive: true });
for (const f of readdirSync(OUT)) if (f.endsWith(".json")) unlinkSync(join(OUT, f));
for (const [b, obj] of Object.entries(buckets)) {
  const ord = Object.fromEntries(Object.keys(obj).sort().map((k) => [k, obj[k]]));
  writeFileSync(join(OUT, `${b}.json`), JSON.stringify(ord));
}
const total = Object.values(buckets).reduce((s, o) => s + Object.keys(o).length, 0);
console.log(`historial de precios: ${total} fichas (${auto} sembradas hoy, ${nuevos} cambios del CSV, ${alineados} alineados con la ficha, ${desajuste} desajustes) en ${Object.keys(buckets).length} trozos`);
