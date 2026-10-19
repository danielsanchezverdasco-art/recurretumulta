#!/usr/bin/env node
// check-fotos — 19/10/2026. PROHIBIDAS las imágenes IA en fichas/blog.
// Falla (exit 1) si:
//  1. Algún crédito/alt/texto de imagen menciona IA ("generada por IA", "ilustrativa", "AI generated", "render IA"...).
//  2. Algún nombre de fichero de imagen viene de rutas/nombres típicos de generación (grok-imagine, krea, dall-e, midjourney, flux, sdxl, /generated/, -ia.webp, -ai.webp, file_XXXX.png).
//  3. Una imagen referenciada en src/lib (fichas/galerías) NO tiene fuente registrada en
//     public/media-creditos.md  ó  public/media/fotos-reales/<slug>/fuentes.csv (URL de origen + autor),
//     salvo que esté en la lista heredada scripts/check-fotos-baseline.json (deuda conocida, solo puede DISMINUIR).
//  4. (si existe public/media) un .webp de 1920x1280 sin fuente registrada (firma del generador IA usado en v2).
// Uso: node scripts/check-fotos.mjs [--update-baseline] [--json]
import fs from "node:fs"; import path from "node:path";
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const rd = (p) => fs.readFileSync(path.join(ROOT, p), "utf8");
const exists = (p) => fs.existsSync(path.join(ROOT, p));
const errores = []; const err = (tipo, msg) => errores.push({ tipo, msg });

// Fuentes registradas
const fuentes = new Map();
if (exists("public/media-creditos.md")) {
  for (const m of rd("public/media-creditos.md").matchAll(/\|\s*(\/media\/[^\s|]+)\s*\|\s*(https?:\/\/[^\s|]+)\s*\|\s*([^|]*)\|/g)) fuentes.set(m[1], m[2]);
}
const dirReales = "public/media/fotos-reales";
if (exists(dirReales)) {
  for (const slug of fs.readdirSync(path.join(ROOT, dirReales))) {
    const csv = path.join(dirReales, slug, "fuentes.csv");
    if (!exists(csv)) { err("sin-fuentes-csv", `${csv} no existe`); continue; }
    const lineas = rd(csv).split(/\r?\n/).filter(Boolean); const cab = lineas.shift().toLowerCase().split(",");
    const iA = cab.findIndex((c) => c.includes("archivo")), iU = cab.findIndex((c) => c.includes("url")), iAu = cab.findIndex((c) => c.includes("autor"));
    for (const l of lineas) {
      const c = l.split(","); const arch = (c[iA] || "").trim(); const url = (c[iU] || "").trim();
      if (!/^https?:\/\//.test(url)) err("fuente-sin-url", `${csv}: ${arch} sin URL de origen`);
      if (iAu < 0 || !(c[iAu] || "").trim()) err("fuente-sin-autor", `${csv}: ${arch} sin autor/propietario`);
      const ruta = arch.startsWith("/") ? arch : `/media/fotos-reales/${slug}/${arch}`;
      fuentes.set(ruta, url);
    }
  }
}

// Escaneo de src/lib y src/pages
const RE_IA = /(generad[ao]s?\s+(con|por)\s+(la\s+)?IA|ilustrativa|imagen\s+IA|render\s+IA|AI[- ]generated|midjourney|dall[- ]?e|stable diffusion)/i;
const RE_NOMBRE = /(grok[-_]?imagine|krea|dall[-_]?e|midjourney|flux|sdxl|\/generated\/|[-_](ia|ai)\.(webp|png|jpe?g)$|\/file_[A-Za-z0-9]{20,}\.png$)/i;
const refs = new Map(); // src -> fichero:linea
function walk(dir) {
  for (const f of fs.readdirSync(path.join(ROOT, dir), { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) walk(p);
    else if (/\.(ts|tsx|json)$/.test(f.name)) {
      const t = rd(p); const lineas = t.split("\n");
      lineas.forEach((l, n) => {
        for (const m of l.matchAll(/["'](\/media\/[^"'\s]+\.(?:webp|png|jpe?g))["']/g)) {
          if (!refs.has(m[1])) refs.set(m[1], `${p}:${n + 1}`);
          if (RE_NOMBRE.test(m[1])) err("nombre-ia", `${p}:${n + 1} ${m[1]}`);
        }
        if (/\/media\//.test(l) && RE_IA.test(l)) err("credito-ia", `${p}:${n + 1} ${l.trim().slice(0, 160)}`);
      });
    }
  }
}
for (const d of ["src/lib", "src/pages"]) if (exists(d)) walk(d);

// Fichas: solo imágenes de producto (coches/motos/patinetes/campers): slugs con ficha-tecnica / precio / -oficial / -hero / -interior
const esProducto = (s) => /(ficha-tecnica|precio|-oficial|-hero|-interior|-galeria|fotos-reales)/.test(s) && !/(cosa-|mono|logo|og-|avatar|hero-jungla)/.test(s);
const baseP = path.join(ROOT, "scripts/check-fotos-baseline.json");
const baseline = new Set(fs.existsSync(baseP) ? JSON.parse(fs.readFileSync(baseP, "utf8")) : []);
const sinFuente = [...refs.keys()].filter((s) => esProducto(s) && !fuentes.has(s)).sort();
const nuevosSinFuente = sinFuente.filter((s) => !baseline.has(s));
for (const s of nuevosSinFuente) err("sin-fuente", `${refs.get(s)} ${s} (falta URL de origen real del modelo exacto)`);

// Firma 1920x1280 en public/media (si están los binarios)
function dimsWebp(p) {
  const b = fs.readFileSync(p); if (b.toString("ascii", 0, 4) !== "RIFF") return null;
  const t = b.toString("ascii", 12, 16);
  if (t === "VP8X") return [1 + b.readUIntLE(24, 3), 1 + b.readUIntLE(27, 3)];
  if (t === "VP8 ") return [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff];
  if (t === "VP8L") { const v = b.readUInt32LE(21); return [(v & 0x3fff) + 1, ((v >> 14) & 0x3fff) + 1]; }
  return null;
}
if (exists("public/media")) {
  for (const f of fs.readdirSync(path.join(ROOT, "public/media"))) {
    if (!f.endsWith(".webp")) continue; const s = "/media/" + f;
    if (fuentes.has(s) || baseline.has(s)) continue;
    const d = dimsWebp(path.join(ROOT, "public/media", f));
    if (d && d[0] === 1920 && d[1] === 1280 && esProducto(s)) err("firma-ia-1920x1280", `${s} 1920x1280 sin fuente registrada`);
  }
}

if (process.argv.includes("--update-baseline")) {
  const nuevo = sinFuente.filter((s) => baseline.size === 0 || baseline.has(s));
  fs.writeFileSync(baseP, JSON.stringify(nuevo, null, 0).replace(/","/g, '",\n"') + "\n");
  console.log(`baseline: ${nuevo.length} imágenes heredadas sin fuente (solo puede disminuir)`);
}
const porTipo = errores.reduce((a, e) => ((a[e.tipo] = (a[e.tipo] || 0) + 1), a), {});
if (process.argv.includes("--json")) console.log(JSON.stringify({ errores: errores.length, porTipo, refs: refs.size, conFuente: [...refs.keys()].filter((s) => fuentes.has(s)).length, heredadasSinFuente: sinFuente.length - nuevosSinFuente.length }, null, 1));
else {
  for (const e of errores.slice(0, 200)) console.log(`✗ [${e.tipo}] ${e.msg}`);
  if (errores.length > 200) console.log(`… y ${errores.length - 200} más`);
  console.log(`\ncheck-fotos: ${errores.length} errores ${JSON.stringify(porTipo)} | refs ${refs.size} | heredadas sin fuente ${sinFuente.length - nuevosSinFuente.length}`);
}
process.exit(errores.length ? 1 : 0);
