// 18/10/2026 (rediseño fichas): rivales de cada ficha (coches, motos, patinetes).
// Mismo segmento (categoría) y misma franja de precio (±25 %, ampliando a ±40 %).
// Si existe docs/seo/rivales.csv (id,rival1,rival2,...) esos rivales van primero.
// También marca si existe el análisis del blog de cada ficha (b:1), para que las fichas
// no tengan que cargar blog-lite entero (2,4 MB) solo para comprobarlo.
// Salida: src/lib/ficha-extra-gen/<c|m|p>-<2 primeras letras>.json
//   { id: { r?: [[id, nombre, precio, foto], ...], b?: 1 } }
import { build } from "esbuild";
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { tmpdir } from "node:os";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "src/lib/ficha-extra-gen");
const tmp = join(tmpdir(), `rivales-${process.pid}.mjs`);
const entry = `
export { COCHES_COMPARADOR } from "@/lib/comparador-coches-data.ts";
export { COCHES_NUEVOS_C5 } from "@/lib/comparador-coches-nuevos-c5.ts";
export { MOTOS_COMPARADOR } from "@/lib/comparador-motos-data.ts";
export { PATINETES_COMPARADOR } from "@/lib/comparador-patinetes-data.ts";
export { BLOG_LITE } from "@/lib/blog-lite.generated.ts";
export { ANALISIS_COCHES, ANALISIS_MOTOS, ANALISIS_PATINETES } from "@/lib/analisis-slugs.generated";
`;
await build({
  stdin: { contents: entry, resolveDir: ROOT, loader: "ts" },
  bundle: true, platform: "node", format: "esm", outfile: tmp, logLevel: "error",
  alias: { "@": join(ROOT, "src") },
  external: ["react", "convex", "convex/*"],
});
const D = await import(pathToFileURL(tmp).href);
rmSync(tmp);

const manual = new Map();
const csv = join(ROOT, "docs/seo/rivales.csv");
if (existsSync(csv)) {
  for (const l of readFileSync(csv, "utf-8").split(/\r?\n/).slice(1)) {
    const [id, ...r] = l.split(",").map((s) => s.trim()).filter(Boolean);
    if (id) manual.set(id, r);
  }
}

// 31/10/2026 (auditoría A7): no enlazar como rival una ficha cuyo slug es origen 301 en public/_redirects (enlace interno a redirección).
const REDIR_VIEJOS = new Set();
for (const l of readFileSync(join(ROOT, "public/_redirects"), "utf-8").split(/\r?\n/)) {
  const m = l.trim().match(/^\/(coches|motos|patinetes)\/([^/\s*:]+)\/?\s+\/(?:coches|motos|patinetes)\/[^\s]+\s+301/);
  if (m) REDIR_VIEJOS.add(`${m[1]}/${m[2]}`);
}
// 31/10/2026: no usar como foto de «rivales» una imagen mala (404 o placeholder «Foto real próximamente»): lista de fotos-malas.generated.ts
const MALAS = new Set((readFileSync(join(ROOT, "src/lib/fotos-malas.generated.ts"), "utf-8").match(/FOTOS_MALAS_TXT = "(.*)";/)?.[1] || "").split("\\n"));
const enDisco = (src) => !!src && !MALAS.has(src);
const primeraFoto = (...xs) => xs.find(enDisco) || "";
function rivales(items, { id, nombre, precio, foto, seg, extra, afin, blog }, pref) {
  const byId = new Map(items.map((x) => [id(x), x]));
  const norm = (x) => nombre(x).toLowerCase().replace(/\s+20\d\d.*$/, "").trim();
  const out = {};
  const TIPO = { c: "coches", m: "motos", p: "patinetes" }[pref];
  for (const x of items) {
    const p = precio(x);
    const vistos = new Set([norm(x)]);
    const res = [];
    const add = (y) => {
      if (!y || id(y) === id(x) || REDIR_VIEJOS.has(`${TIPO}/${id(y)}`) || vistos.has(norm(y)) || res.length >= 6) return;
      vistos.add(norm(y));
      res.push([id(y), nombre(y), precio(y), foto(y) || ""]);
    };
    for (const r of manual.get(id(x)) ?? []) add(byId.get(r));
    if (p != null) {
      for (const banda of [0.25, 0.4]) {
        const cand = items
          .filter((y) => precio(y) != null && Math.abs(precio(y) - p) <= p * banda && (seg ? seg(y) === seg(x) : true) && (extra ? extra(x, y) : true))
          .sort((a, b) => (afin ? (afin(x, b) ? 1 : 0) - (afin(x, a) ? 1 : 0) : 0) || (foto(b) ? 1 : 0) - (foto(a) ? 1 : 0) || Math.abs(precio(a) - p) - Math.abs(precio(b) - p));
        cand.forEach(add);
        if (res.length >= 4) break;
      }
    }
    const e = {};
    if (res.length) e.r = res;
    if (blog(x)) e.b = 1;
    if (Object.keys(e).length) out[id(x)] = e;
  }
  // trocear por las 2 primeras letras (trozos pequeños: se cargan antes de pintar la ficha)
  const trozos = {};
  for (const [k, v] of Object.entries(out)) {
    const ini = /^[a-z0-9]{2}/.test(k) ? k.slice(0, 2) : "__";
    (trozos[ini] ??= {})[k] = v;
  }
  for (const [ini, t] of Object.entries(trozos)) writeFileSync(join(OUT, `${pref}-${ini}.json`), JSON.stringify(t));
  return Object.keys(out).length;
}

const BLOG = new Set(D.BLOG_LITE.map((p) => p.slug));
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
// 23/10/2026 (cierre v4.5.5): el lote C5 está EXCLUDED del agregado
// COCHES_COMPARADOR pero sus 14 fichas SÍ se sirven (data-loaders) y tienen
// artículo: sin esto salían sin rivales y sin botón al análisis (extra vacío).
const nc = rivales([...D.COCHES_COMPARADOR, ...D.COCHES_NUEVOS_C5], {
  id: (c) => c.id, nombre: (c) => `${c.marca} ${c.modelo}`, precio: (c) => c.precioDesde,
  foto: (c) => primeraFoto(c.imagenOficial, c.imagen), seg: (c) => (c.categoria || "").toLowerCase(),
  afin: (a, b) => (a.tipo || "") === (b.tipo || ""),
  // 20/10/2026: igual que en motos, se respeta c.analisisSlug; sin esto, fichas
  // cuyo artículo tiene otro slug (Adria Matrix Supreme) salían sin botón al blog.
  blog: (c) => BLOG.has(D.ANALISIS_COCHES[c.id] ?? c.analisisSlug ?? c.id),
}, "c");
const nm = rivales(D.MOTOS_COMPARADOR, {
  id: (m) => m.id, nombre: (m) => `${m.marca} ${m.modelo}`.replace(/:+$/, "").trim(), precio: (m) => m.precioDesde,
  foto: (m) => primeraFoto(m.imagen), seg: (m) => (m.categoria || "").toLowerCase(),
  extra: (a, b) => (a.carnet || "").split(" ")[0] === (b.carnet || "").split(" ")[0],
  blog: (m) => BLOG.has(D.ANALISIS_MOTOS[m.id] ?? m.analisisSlug ?? m.id),
}, "m");
const np = rivales(D.PATINETES_COMPARADOR, {
  id: (p) => p.id, nombre: (p) => `${p.marca} ${p.modelo}`, precio: (p) => p.precioEur,
  foto: (p) => (p.fotoPendiente ? "" : primeraFoto(p.foto)), seg: null,
  blog: (p) => BLOG.has(D.ANALISIS_PATINETES[p.id] ?? p.id),
}, "p");
console.log(`ficha-extra (rivales + análisis): ${nc} coches, ${nm} motos, ${np} patinetes${manual.size ? ` (+${manual.size} manuales de rivales.csv)` : ""}`);
