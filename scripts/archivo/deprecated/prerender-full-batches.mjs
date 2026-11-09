#!/usr/bin/env node
/**
 * Prerender completo por lotes de 80 rutas (lección 04/10/2026: Chromium muere
 * con lotes grandes; con 80 y concurrencia 2 pasa sin fallos).
 * Uso: node scripts/prerender-full-batches.mjs
 * Progreso en /tmp/prerender-batches.log
 */
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { spawnSync } from "child_process";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const LOG = "/tmp/prerender-batches.log";
const BATCH = 80;

const log = (m) => {
  const line = `[${new Date().toISOString()}] ${m}\n`;
  process.stdout.write(line);
  writeFileSync(LOG, line, { flag: "a" });
};

const readLines = (f) =>
  readFileSync(join(ROOT, "scripts", f), "utf8").split("\n").map((s) => s.trim()).filter(Boolean);

const STATIC_ROUTES = [
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
  "/juego-monos/bases",
];
const PROVINCIAS = ["madrid","barcelona","valencia","sevilla","malaga","zaragoza","bilbao","alicante","cordoba","valladolid","granada","murcia","palma-mallorca","las-palmas","santa-cruz-tenerife","pamplona","san-sebastian","vitoria","logrono","santander","oviedo","a-coruna","santiago-compostela","vigo","cadiz","huelva","jaen","almeria","toledo","ciudad-real","cuenca","guadalajara","albacete","burgos","leon","salamanca","zamora","segovia","soria","palencia","avila","badajoz","caceres","lleida","tarragona","girona","castellon","teruel","huesca","pontevedra","lugo","ourense","ceuta","melilla"];
const COMUNIDADES = ["andalucia","aragon","asturias","baleares","canarias","cantabria","castilla-la-mancha","castilla-y-leon","cataluna","extremadura","galicia","madrid","murcia","navarra","pais-vasco","la-rioja","comunidad-valenciana","ceuta","melilla"];

const ROUTES = [
  ...STATIC_ROUTES,
  ...PROVINCIAS.map((p) => `/multas/${p}`),
  ...COMUNIDADES.map((c) => `/comunidades/${c}`),
  ...readLines("blog-slugs.txt").map((s) => `/blog/${s}`),
  ...readLines("coches-slugs.txt").map((s) => `/coches/${s}`),
  ...readLines("motos-slugs.txt").map((s) => `/motos/${s}`),
  ...readLines("patinetes-slugs.txt").map((s) => `/patinetes/${s}`),
  ...readLines("rankings-slugs.txt").map((s) => `/rankings/${s}`),
  ...readLines("glosario-slugs.txt").map((s) => `/glosario/${s}`),
];

log(`Total rutas: ${ROUTES.length}`);
const batches = [];
for (let i = 0; i < ROUTES.length; i += BATCH) batches.push(ROUTES.slice(i, i + BATCH));
log(`Lotes de ${BATCH}: ${batches.length}`);

mkdirSync("/tmp/prerender-batches", { recursive: true });
const failed = [];
batches.forEach((routes, idx) => {
  const batchFile = `/tmp/prerender-batches/batch-${String(idx).padStart(3, "0")}.txt`;
  writeFileSync(batchFile, routes.join("\n"));
  let ok = false;
  for (let attempt = 1; attempt <= 3 && !ok; attempt++) {
    log(`Lote ${idx + 1}/${batches.length} (intento ${attempt})`);
    const r = spawnSync("node", ["scripts/prerender.mjs"], {
      cwd: ROOT,
      env: { ...process.env, PRERENDER_ONLY_FILE: batchFile, PRERENDER_PORT: "4318" },
      encoding: "utf8",
      timeout: 25 * 60 * 1000,
    });
    if (r.status === 0) { ok = true; log(`Lote ${idx + 1} OK`); }
    else {
      log(`Lote ${idx + 1} FALLO intento ${attempt}: ${(r.stderr || "").split("\n").slice(-3).join(" ")}`);
    }
  }
  if (!ok) { failed.push(idx + 1); log(`Lote ${idx + 1} FALLIDO tras 3 intentos`); }
});

if (failed.length > 0) {
  log(`TERMINADO CON FALLOS en lotes: ${failed.join(",")}`);
  process.exit(1);
}
log("PRERENDER COMPLETO: todos los lotes OK");
