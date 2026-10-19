// Prerender por lotes de 80 con reintentos. Uso: node scripts/prerender-lotes-final.mjs [desde_lote]
// Genera la lista de rutas en el mismo orden que scripts/prerender.mjs y ejecuta
// PRERENDER_ONLY por lotes con PRERENDER_CONCURRENCY=2. Reintenta cada lote hasta 3 veces.
// Log: /tmp/prerender-lotes-final.log
import { readFileSync, appendFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync, spawnSync } from "node:child_process";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const LOG = "/tmp/prerender-lotes-final.log";
const BATCH = 80;
const log = (m) => { const l = `[${new Date().toISOString()}] ${m}\n`; appendFileSync(LOG, l); console.log(m); };

// --- Replicar orden de rutas de scripts/prerender.mjs ---
const src = readFileSync(join(ROOT, "scripts", "prerender.mjs"), "utf8");
const arrOf = (name) => {
  const m = src.match(new RegExp(`const ${name} = \\[([\\s\\S]*?)\\];`));
  return [...m[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]);
};
const STATIC_ROUTES = arrOf("STATIC_ROUTES");
const PROVINCIAS = arrOf("PROVINCIAS");
const COMUNIDADES = arrOf("COMUNIDADES");
const readSlugs = (f) => readFileSync(join(ROOT, "scripts", f), "utf8").split("\n").map((s) => s.trim()).filter(Boolean);
const ROUTES = [
  ...STATIC_ROUTES,
  ...PROVINCIAS.map((p) => `/multas/${p}`),
  ...COMUNIDADES.map((c) => `/comunidades/${c}`),
  ...readSlugs("blog-slugs.txt").map((s) => `/blog/${s}`),
  ...readSlugs("coches-slugs.txt").map((s) => `/coches/${s}`),
  ...readSlugs("motos-slugs.txt").map((s) => `/motos/${s}`),
  ...readSlugs("patinetes-slugs.txt").map((s) => `/patinetes/${s}`),
  ...readSlugs("rankings-slugs.txt").map((s) => `/rankings/${s}`),
  ...readSlugs("glosario-slugs.txt").map((s) => `/glosario/${s}`),
];
log(`Total rutas: ${ROUTES.length}`);
const NB = Math.ceil(ROUTES.length / BATCH);
log(`Lotes de ${BATCH}: ${NB}`);

const desde = Number(process.argv[2] || 0);

function killZombies() {
  try {
    const out = execSync("ss -tlnp 2>/dev/null | grep 4317 || true").toString();
    if (out.trim()) {
      log("Zombi en puerto 4317 detectado, matando...");
      execSync("fuser -k 4317/tcp 2>/dev/null || true");
    }
  } catch {}
}

let failed = [];
for (let b = desde; b < NB; b++) {
  const rutas = ROUTES.slice(b * BATCH, (b + 1) * BATCH);
  let ok = false;
  for (let intento = 1; intento <= 3 && !ok; intento++) {
    killZombies();
    log(`Lote ${b + 1}/${NB} (rutas ${b * BATCH + 1}-${Math.min((b + 1) * BATCH, ROUTES.length)}), intento ${intento}`);
    const r = spawnSync("node", ["scripts/prerender.mjs"], {
      cwd: ROOT,
      env: { ...process.env, PRERENDER_CONCURRENCY: "2", PRERENDER_ONLY: rutas.join(",") },
      encoding: "utf8",
      timeout: 30 * 60 * 1000,
    });
    appendFileSync(LOG, `--- lote ${b + 1} intento ${intento} exit=${r.status} ---\n${(r.stdout || "").slice(-2000)}\n${(r.stderr || "").slice(-2000)}\n`);
    if (r.status === 0) { ok = true; log(`Lote ${b + 1}/${NB} OK`); }
    else { log(`Lote ${b + 1}/${NB} FALLO intento ${intento} (exit ${r.status})`); }
  }
  if (!ok) { failed.push(b + 1); log(`Lote ${b + 1} IRRECUPERABLE tras 3 intentos`); }
}

if (failed.length) { log(`FALLOS FINALES en lotes: ${failed.join(",")}`); process.exit(1); }
log("TODOS LOS LOTES OK");
