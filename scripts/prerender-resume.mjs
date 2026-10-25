#!/usr/bin/env node
/**
 * Resume del prerender completo: solo procesa las rutas cuyo dist/.../index.html
 * falte o esté incompleto. Idempotente y seguro ante reinicios de la VM.
 * Uso: node scripts/prerender-resume.mjs
 * Log persistente: scripts/.safe-publish/prerender-resume.log (NUNCA /tmp: se borra al reiniciar)
 * Respeta PREVIEW_DIR (mismo outDir que prerender.mjs).
 *
 * isComplete UNIFICADO (contrato §3.7 ARQUITECTURA-PUBLISH.md, misma semántica que
 * verify-dist.py): página completa solo si
 *   existe && bytes > 2000 && incluye "</html>" && canonical == canonical_esperado_exacto(ruta),
 * donde canonical_esperado_exacto(ruta) = canonicalBase + "/" para "/",
 * canonicalBase + ruta + "/" en otro caso (misma normalización que src/hooks/use-seo.ts).
 * El shell de un `npm run build` limpio (21.987 bytes, sin canonical) ya NO se da por bueno.
 *
 * Rutas: lee scripts/routes.json si existe (única fuente de verdad, dueño PIPELINE).
 * Si aún no existe, fallback a las listas hardcodeadas de este fichero.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { spawnSync } from "child_process";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SAFE_DIR = join(ROOT, "scripts", ".safe-publish");
const LOG = join(SAFE_DIR, "prerender-resume.log");
const BATCHDIR = join(SAFE_DIR, "prerender-batches-resume");
const BATCH = 80;
const _previewDir = (process.env.PREVIEW_DIR || "").trim();
const DIST_DIR = _previewDir
  ? (_previewDir.startsWith("/") ? _previewDir : join(ROOT, _previewDir))
  : join(ROOT, "dist");

mkdirSync(SAFE_DIR, { recursive: true });

const log = (m) => {
  const line = `[${new Date().toISOString()}] ${m}\n`;
  process.stdout.write(line);
  writeFileSync(LOG, line, { flag: "a" });
};

const readLinesFile = (f) =>
  readFileSync(f, "utf8").split("\n").map((s) => s.trim()).filter(Boolean);

// Normalización de ruta (misma que verify-dist.py y src/hooks/use-seo.ts):
// "/" queda "/"; el resto sin barras inicial/final duplicadas -> "/ruta".
const normRoute = (route) => (route === "/" ? "/" : `/${String(route).replace(/^\/+|\/+$/g, "")}`);

// ---------- Fuente de rutas: routes.json si existe, fallback a listas locales ----------
const STATIC_ROUTES_FALLBACK = [
  "/", "/blog", "/multas", "/privacidad", "/terminos", "/cookies", "/contacto",
  "/sobre-nosotros", "/comparativa", "/aviso-legal", "/empresas", "/reportar-carretera",
  "/reportar-carretera/gracias", "/herramientas", "/herramientas/contrato-compraventa-vehiculo",
  "/herramientas/precio-itv", "/buscador-codigo-multa", "/senales-trafico",
  "/mejor-coche-por-presupuesto", "/comparador-coches", "/comparador-patinetes",
  "/comparador-motos", "/fichas-tecnicas", "/comparador/mas-vendidos", "/glosario-multa",
  "/metodologia", "/calculadora-kw-a-cv", "/calculadora-consumo-camper",
  "/equivalencia-neumaticos-itv", "/valor-venal-vehiculo", "/guias/radares",
  "/guias/patinetes-electricos", "/guias/zbe", "/guias/prescripcion", "/guias/vicios-forma",
  "/guias/alcohol-drogas", "/guias/itv-documentacion", "/guias/ayudas-compra-coche-electrico-2026",
  "/guias/comprar-coche-electrico-segunda-mano", "/calculadora-autonomia-real",
  "/calculadora-etiqueta-dgt", "/calculadora-alcoholemia", "/glosario",
  "/calendario-lanzamientos-2026-2027", "/newsletter/baja", "/alertas/baja",
  "/comparador-motos", "/comparador-garantia-bateria", "/rankings", "/el-dato-del-dia",
  "/la-pregunta-del-dia", "/tal-dia-como-hoy-motor", "/newsletter", "/juego-monos",
  "/juego-monos/bases", "/buscador-coches",
];
const PROVINCIAS_FALLBACK = ["madrid","barcelona","valencia","sevilla","malaga","zaragoza","bilbao","alicante","cordoba","valladolid","granada","murcia","palma-mallorca","las-palmas","santa-cruz-tenerife","pamplona","san-sebastian","vitoria","logrono","santander","oviedo","a-coruna","santiago-compostela","vigo","cadiz","huelva","jaen","almeria","toledo","ciudad-real","cuenca","guadalajara","albacete","burgos","leon","salamanca","zamora","segovia","soria","palencia","avila","badajoz","caceres","lleida","tarragona","girona","castellon","teruel","huesca","pontevedra","lugo","ourense","ceuta","melilla"];
const COMUNIDADES_FALLBACK = ["andalucia","aragon","asturias","baleares","canarias","cantabria","castilla-la-mancha","castilla-y-leon","cataluna","extremadura","galicia","madrid","murcia","navarra","pais-vasco","la-rioja","comunidad-valenciana","ceuta","melilla"];
const SLUGFILES_FALLBACK = [
  ["blog-slugs.txt", "/blog/"],
  ["coches-slugs.txt", "/coches/"],
  ["motos-slugs.txt", "/motos/"],
  ["patinetes-slugs.txt", "/patinetes/"],
  ["rankings-slugs.txt", "/rankings/"],
  ["glosario-slugs.txt", "/glosario/"],
];

let CANONICAL_BASE = "https://recurretumulta.online";
let ROUTES = null;

const ROUTES_JSON = join(ROOT, "scripts", "routes.json");
if (existsSync(ROUTES_JSON)) {
  try {
    const rj = JSON.parse(readFileSync(ROUTES_JSON, "utf8"));
    CANONICAL_BASE = (rj.canonicalBase || CANONICAL_BASE).replace(/\/+$/, "");
    const seen = new Set();
    const out = [];
    const push = (r) => { r = normRoute(r); if (!seen.has(r)) { seen.add(r); out.push(r); } };
    for (const r of rj.staticRoutes || []) push(r);
    for (const p of rj.provinceSlugs || []) push(`/multas/${p}`);
    for (const c of rj.communitySlugs || []) push(`/comunidades/${c}`);
    for (const sf of rj.slugFiles || []) {
      const file = sf.file.startsWith("scripts/") ? join(ROOT, sf.file) : join(ROOT, "scripts", sf.file);
      if (existsSync(file)) for (const s of readLinesFile(file)) push(`${sf.prefix}${s}`);
      else log(`AVISO: slugFile no encontrado: ${file} (se omite)`);
    }
    ROUTES = out;
    log(`Rutas desde scripts/routes.json: ${ROUTES.length}`);
  } catch (e) {
    log(`AVISO: routes.json ilegible (${e.message}); usando listas de fallback`);
  }
}
if (!ROUTES) {
  const out = [...STATIC_ROUTES_FALLBACK];
  for (const p of PROVINCIAS_FALLBACK) out.push(`/multas/${p}`);
  for (const c of COMUNIDADES_FALLBACK) out.push(`/comunidades/${c}`);
  for (const [f, prefix] of SLUGFILES_FALLBACK) {
    const file = join(ROOT, "scripts", f);
    if (existsSync(file)) for (const s of readLinesFile(file)) out.push(`${prefix}${s}`);
  }
  ROUTES = out;
  log(`Rutas desde listas de fallback (routes.json no existe): ${ROUTES.length}`);
}

// ---------- Completitud unificada ----------
// Misma normalización que verify-dist.py::expected_canonical y src/hooks/use-seo.ts:
// "/" -> base + "/"; resto -> base + ruta_normalizada + "/".
const expectedCanonical = (route) => {
  const r = normRoute(route);
  return r === "/" ? `${CANONICAL_BASE}/` : `${CANONICAL_BASE}${r}/`;
};

const getCanonical = (html) => {
  const m = html.match(/rel="canonical"\s+href="([^"]+)"/);
  return m ? m[1] : null;
};

const distIndex = (route) => {
  const r = normRoute(route);
  return r === "/" ? join(DIST_DIR, "index.html") : join(DIST_DIR, r, "index.html");
};

const isComplete = (route) => {
  const f = distIndex(route);
  if (!existsSync(f)) return false;
  try {
    const c = readFileSync(f, "utf8");
    return c.length > 2000 && c.includes("</html>") && getCanonical(c) === expectedCanonical(route);
  } catch { return false; }
};

// ---------- Bucle de lotes (idempotente, 3 intentos) ----------
const missing = ROUTES.filter((r) => !isComplete(r));
log(`Total rutas: ${ROUTES.length}, completas: ${ROUTES.length - missing.length}, pendientes: ${missing.length}, dist: ${DIST_DIR}`);
if (missing.length === 0) { log("NADA PENDIENTE"); process.exit(0); }

mkdirSync(BATCHDIR, { recursive: true });
const batches = [];
for (let i = 0; i < missing.length; i += BATCH) batches.push(missing.slice(i, i + BATCH));
log(`Lotes pendientes de ${BATCH}: ${batches.length}`);

const failed = [];
batches.forEach((routes, idx) => {
  const batchFile = join(BATCHDIR, `batch-${String(idx).padStart(3, "0")}.txt`);
  writeFileSync(batchFile, routes.join("\n"));
  let ok = false;
  for (let attempt = 1; attempt <= 3 && !ok; attempt++) {
    log(`Lote ${idx + 1}/${batches.length} (intento ${attempt}, ${routes.length} rutas)`);
    const r = spawnSync("node", ["scripts/prerender.mjs"], {
      cwd: ROOT,
      env: { ...process.env, PRERENDER_ONLY_FILE: batchFile, PRERENDER_PORT: "4318" },
      encoding: "utf8",
      timeout: 25 * 60 * 1000,
    });
    if (r.status === 0) { ok = true; log(`Lote ${idx + 1} OK`); }
    else log(`Lote ${idx + 1} FALLO intento ${attempt}: ${(r.stderr || "").split("\n").slice(-3).join(" ")}`);
  }
  if (!ok) { failed.push(idx + 1); log(`Lote ${idx + 1} FALLIDO tras 3 intentos`); }
});

if (failed.length > 0) { log(`TERMINADO CON FALLOS en lotes: ${failed.join(",")}`); process.exit(1); }
log("PRERENDER RESUME COMPLETO: todos los lotes OK");
