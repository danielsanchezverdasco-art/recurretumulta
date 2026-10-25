// Copia los datos de radares (docs/radares/) a public/docs/radares/ para que
// Vite los incluya en dist/. RadarPage y RadaresIndex los cargan por fetch en
// cliente desde /docs/radares/ (indice.json + contenido/<id_unico>.md).
// Sin esta copia, /docs/radares/indice.json devuelve 404 y TODAS las páginas
// de radares muestran «datos no disponibles» (hallazgo auditoría 20/10/2026).
// Se ejecuta como primer paso de `npm run build`, igual que copy-media.mjs.
import { mkdirSync, copyFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(ROOT, "docs", "radares");
const DEST = join(ROOT, "public", "docs", "radares");

if (!existsSync(SRC)) {
  console.log("[copy-radares] sin carpeta origen docs/radares; se omite");
  process.exit(0);
}
mkdirSync(join(DEST, "contenido"), { recursive: true });
let n = 0;
for (const f of readdirSync(SRC)) {
  const src = join(SRC, f);
  if (f === "contenido") {
    for (const md of readdirSync(src)) {
      copyFileSync(join(src, md), join(DEST, "contenido", md));
      n++;
    }
  } else if (/\.(json|csv)$/i.test(f)) {
    copyFileSync(src, join(DEST, f));
    n++;
  }
}
console.log(`[copy-radares] ${n} ficheros de datos de radares en public/docs/radares/`);
