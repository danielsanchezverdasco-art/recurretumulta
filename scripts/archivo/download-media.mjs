// Descarga todas las imágenes referenciadas en hercules-cdn.com para
// servirlas como assets estáticos propios (/media/...) en Cloudflare Pages.
// Uso: node scripts/download-media.mjs
// Genera: ~/workspace/migracion-export/media-migrada/ + media-map.json
import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync, existsSync, readFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(process.env.HOME, "workspace/migracion-export/media-migrada");
mkdirSync(OUT, { recursive: true });

function collectFromSnapshot() {
  const zip = join(process.env.HOME, "workspace/migracion-export/snapshot/snapshot.zip");
  const raw = execFileSync("unzip", ["-p", zip, "blogPosts/documents.jsonl"], { maxBuffer: 64 * 1024 * 1024 }).toString();
  const urls = new Set();
  for (const m of raw.matchAll(/https:\/\/hercules-cdn\.com\/(file_[A-Za-z0-9]+)/g)) urls.add(m[0]);
  return urls;
}

function collectFromCode() {
  const urls = new Set();
  const files = execFileSync("grep", ["-rIl", "hercules-cdn.com", "src", "convex"], { cwd: ROOT }).toString().trim().split("\n").filter(Boolean);
  for (const f of files) {
    const content = readFileSync(join(ROOT, f), "utf8");
    for (const m of content.matchAll(/https:\/\/hercules-cdn\.com\/(file_[A-Za-z0-9]+)/g)) urls.add(m[0]);
  }
  return urls;
}

const urls = new Set([...collectFromSnapshot(), ...collectFromCode()]);
console.log(`${urls.size} URLs únicas.`);

const map = existsSync(join(OUT, "media-map.json"))
  ? JSON.parse(readFileSync(join(OUT, "media-map.json"), "utf8"))
  : {};

let done = 0, failed = 0;
for (const url of urls) {
  const id = url.split("/").pop();
  if (map[url] && existsSync(join(OUT, map[url]))) { done++; continue; }
  try {
    // Detectar extensión vía HEAD
    const head = execFileSync("curl", ["-sI", "-L", "--max-time", "20", url]).toString();
    const ct = (head.match(/content-type:\s*([^\r\n;]+)/i) || [])[1] || "";
    const ext = ct.includes("webp") ? "webp" : ct.includes("png") ? "png" : ct.includes("jpeg") || ct.includes("jpg") ? "jpg" : ct.includes("gif") ? "gif" : "bin";
    const filename = `${id}.${ext}`;
    execFileSync("curl", ["-sL", "--max-time", "60", "-o", join(OUT, filename), url]);
    map[url] = filename;
    done++;
  } catch (err) {
    failed++;
    console.error(`  ✗ ${url}: ${err.message.split("\n")[0]}`);
  }
}

writeFileSync(join(OUT, "media-map.json"), JSON.stringify(map, null, 2));
console.log(`Descargadas: ${done}, fallos: ${failed}. Mapa en ${OUT}/media-map.json`);
