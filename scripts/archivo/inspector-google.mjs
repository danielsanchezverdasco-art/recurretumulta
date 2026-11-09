// Inspector Google — revisión final pre-publicación página por página.
// Uso: node scripts/inspector-google.mjs [distDir]
// Revisa el HTML prerenderizado (lo que vería Googlebot) y falla si alguna
// página no es apta. Orden de Daniel 04/10/2026: antes de publicar, pasar
// este inspector por TODAS las páginas; la que no pase se completa.
import { readFileSync, readdirSync, statSync, existsSync } from "fs";
import { join, relative } from "path";

const dist = process.argv[2] || "dist";
const HOME_TITLE_HINTS = ["RecurreTuMulta", "recurretumulta.online"];

function* walk(dir) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    const s = statSync(p);
    if (s.isDirectory()) yield* walk(p);
    else if (e === "index.html") yield p;
  }
}

function getTag(html, re) {
  const m = html.match(re);
  return m ? m[1].trim() : null;
}

const failures = [];
let total = 0;
let homeTitle = null;

const pages = [...walk(dist)];
// Detectar el título de la portada para cazar duplicados (bug del prerender)
const homePath = join(dist, "index.html");
if (existsSync(homePath)) {
  homeTitle = getTag(readFileSync(homePath, "utf8"), /<title>([^<]*)<\/title>/i);
}

for (const file of pages) {
  const rel = "/" + relative(dist, file).replace(/\/index\.html$/, "").replace(/\\/g, "/");
  const html = readFileSync(file, "utf8");
  total++;
  const errs = [];
  const isVehicle = /^\/(coches|motos|patinetes)\//.test(rel);
  const isBlog = /^\/blog\//.test(rel);

  const title = getTag(html, /<title>([^<]*)<\/title>/i);
  if (!title) errs.push("sin <title>");
  else {
    if (title.length > 60) errs.push(`title ${title.length} car. (>60)`);
    if (homeTitle && title === homeTitle && rel !== "/") errs.push("title DUPLICADO de la portada (prerender roto)");
  }
  const desc = getTag(html, /<meta\s+name="description"\s+content="([^"]*)"/i) ||
               getTag(html, /<meta\s+content="([^"]*)"\s+name="description"/i);
  if (!desc) errs.push("sin meta description");
  else if (desc.length > 155) errs.push(`description ${desc.length} car. (>155)`);

  const canon = getTag(html, /<link\s+rel="canonical"\s+href="([^"]*)"/i) ||
                getTag(html, /<link\s+href="([^"]*)"\s+rel="canonical"/i);
  if (!canon) errs.push("sin canonical");
  else if (rel !== "/" && !canon.includes(rel.replace(/^\//, ""))) errs.push(`canonical no coincide: ${canon}`);

  const og = getTag(html, /<meta\s+property="og:image"\s+content="([^"]*)"/i);
  if (!og) errs.push("sin og:image");
  else if (/logo|default|placeholder/i.test(og) && (isVehicle || isBlog)) errs.push(`og:image genérica: ${og}`);

  const h1s = (html.match(/<h1[\s>]/gi) || []).length;
  if (h1s === 0) errs.push("sin H1");
  else if (h1s > 1) errs.push(`${h1s} H1 (debe ser 1)`);

  const imgsSinAlt = (html.match(/<img(?![^>]*\salt=)[^>]*>/gi) || []).length;
  if (imgsSinAlt > 0) errs.push(`${imgsSinAlt} <img> sin alt`);

  if (!/application\/ld\+json/i.test(html)) errs.push("sin JSON-LD");

  // Ficha técnica animada obligatoria en vehículos (04/10/2026, regla dura)
  if (isVehicle && !/ficha-t[eé]cnica/i.test(html)) errs.push("sin ficha técnica visible");

  if (errs.length) failures.push({ page: rel || "/", errs });
}

console.log(`Inspector Google: ${total} páginas revisadas, ${failures.length} NO aptas.`);
for (const f of failures.slice(0, 200)) {
  console.log(`\n❌ ${f.page}`);
  for (const e of f.errs) console.log(`   - ${e}`);
}
if (failures.length > 200) console.log(`\n... y ${failures.length - 200} más.`);
process.exit(failures.length ? 1 : 0);
