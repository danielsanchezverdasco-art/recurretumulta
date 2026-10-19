// E-E-A-T 17/10/2026: fechas de publicación y actualización de cada ficha
// → src/lib/fichas-fechas-eeat/<inicial>.json  { id: [publicado, actualizado] } (AAAA-MM-DD, Europe/Madrid)
// - publicado: primer commit que añadió el `id` en src/lib/comparador-*.ts. Las fichas que ya
//   venían en el commit raíz ("v2 original", 12/10/2026) son anteriores y su fecha real no está
//   registrada: publicado = null (no se inventa) y solo se muestra la fecha de actualización.
//   Una vez guardada no cambia nunca.
// - actualizado: la más reciente entre la publicación y scripts/fichas-actualizadas.json.
// - Fichas nuevas sin commit: hoy. En un clon superficial (shallow) no se consulta git y se
//   conservan las fechas ya guardadas (así el build del deploy no las altera).
// Se ejecuta en `npm run build`.
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const LIB = join(ROOT, "src", "lib");
const OUT = join(LIB, "fichas-fechas-eeat");
const dia = (d) => new Intl.DateTimeFormat("sv-SE", { timeZone: "Europe/Madrid" }).format(d);
const HOY = dia(new Date());

const ids = new Set();
for (const f of readdirSync(LIB).filter((x) => /^comparador-(coches|motos|patinetes|caravanas)-.*\.ts$/.test(x) && !/-data\.ts$/.test(x))) {
  for (const m of readFileSync(join(LIB, f), "utf-8").matchAll(/\bid:\s*"([^"]+)"/g)) ids.add(m[1]);
}

const prev = {};
if (existsSync(OUT)) for (const f of readdirSync(OUT)) if (f.endsWith(".json")) Object.assign(prev, JSON.parse(readFileSync(join(OUT, f), "utf-8")));

let git = {};
let shallow = true;
try { shallow = execFileSync("git", ["rev-parse", "--is-shallow-repository"], { cwd: ROOT }).toString().trim() === "true"; } catch { /* sin git */ }
if (!shallow) {
  const raiz = new Set(execFileSync("git", ["rev-list", "--max-parents=0", "HEAD"], { cwd: ROOT }).toString().trim().split("\n"));
  const log = execFileSync("git", ["log", "--reverse", "--format=@@C %H %cI", "-p", "--unified=0", "--", "src/lib/comparador-*.ts"], { cwd: ROOT, maxBuffer: 1 << 30 }).toString();
  let fecha = "", enRaiz = false;
  for (const l of log.split("\n")) {
    if (l.startsWith("@@C ")) { const [h, f] = l.slice(4).split(" "); fecha = dia(new Date(f)); enRaiz = raiz.has(h); continue; }
    const m = /^\+\s*"?id"?:\s*"([^"]+)"/.exec(l);
    if (m && !(m[1] in git)) git[m[1]] = enRaiz ? { pub: null, desde: fecha } : { pub: fecha, desde: fecha };
  }
}
if (shallow && !Object.keys(prev).length) {
  console.error("gen-fechas-eeat: clon superficial y sin fechas guardadas; ejecuta en un clon completo (git fetch --unshallow).");
  process.exit(1);
}
const ACT = existsSync(join(ROOT, "scripts", "fichas-actualizadas.json"))
  ? JSON.parse(readFileSync(join(ROOT, "scripts", "fichas-actualizadas.json"), "utf-8"))
  : {};

const buckets = {};
for (const id of [...ids].sort()) {
  const pub = id in prev ? prev[id][0] : id in git ? git[id].pub : HOY;
  const cands = [pub, git[id]?.desde, prev[id]?.[1], ACT[id] ? dia(new Date(ACT[id])) : null].filter(Boolean).sort();
  const mod = cands[cands.length - 1];
  const b = /^[a-z0-9]/.test(id) ? id[0] : "_";
  (buckets[b] ||= {})[id] = [pub, mod];
}
mkdirSync(OUT, { recursive: true });
for (const [b, o] of Object.entries(buckets)) writeFileSync(join(OUT, `${b}.json`), JSON.stringify(o));
console.log(`fechas E-E-A-T: ${ids.size} fichas en ${Object.keys(buckets).length} trozos${shallow ? " (clon superficial: sin git, se conservan las guardadas)" : ""}`);
