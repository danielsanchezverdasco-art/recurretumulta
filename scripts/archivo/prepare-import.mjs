// Prepara el snapshot de Hércules para importar en el nuevo Convex:
// 1) extrae snapshot.zip
// 2) reescribe las URLs hercules-cdn.com → /media/... en todos los documents.jsonl
// 3) reempaqueta como snapshot-import.zip listo para `npx convex import`
// Uso: node scripts/prepare-import.mjs
import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync, mkdirSync, rmSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const HOME = process.env.HOME;
const SRC_ZIP = join(HOME, "workspace/migracion-export/snapshot/snapshot.zip");
const WORK = join(HOME, "workspace/migracion-export/import-work");
const OUT_ZIP = join(HOME, "workspace/migracion-export/snapshot-import.zip");
const MAP = JSON.parse(readFileSync(join(HOME, "workspace/migracion-export/media-migrada/media-map.json"), "utf8"));

rmSync(WORK, { recursive: true, force: true });
mkdirSync(WORK, { recursive: true });
execFileSync("unzip", ["-q", "-o", SRC_ZIP, "-d", WORK]);

let totalRewrites = 0;
const counts = {};
for (const table of readdirSync(WORK)) {
  const docFile = join(WORK, table, "documents.jsonl");
  if (!existsSync(docFile)) continue;
  const lines = readFileSync(docFile, "utf8").split("\n");
  counts[table] = lines.filter((l) => l.trim()).length;
  let content = readFileSync(docFile, "utf8");
  for (const [old, fn] of Object.entries(MAP)) {
    if (content.includes(old)) {
      content = content.split(old).join(`/media/${fn}`);
      totalRewrites++;
    }
  }
  writeFileSync(docFile, content);
}

if (existsSync(OUT_ZIP)) rmSync(OUT_ZIP);
execFileSync("bash", ["-c", `cd ${WORK} && zip -q -r ${OUT_ZIP} .`]);

console.log("Tablas:", JSON.stringify(counts));
console.log(`Reescrituras de URLs: ${totalRewrites}`);
console.log(`Listo: ${OUT_ZIP}`);
console.log("Importar con: npx convex import --yes", OUT_ZIP);
