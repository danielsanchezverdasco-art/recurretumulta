// Copia las imágenes migradas a public/media/ para que Vite las incluya en dist/.
// Se ejecuta automáticamente como parte de `pnpm build`.
import { mkdirSync, copyFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(process.env.HOME, "workspace/migracion-export/media-migrada");
const DEST = join(ROOT, "public", "media");

mkdirSync(DEST, { recursive: true });
if (!existsSync(SRC)) { console.log('[copy-media] sin carpeta origen; public/media ya es la fuente'); process.exit(0); }
let n = 0;
for (const f of readdirSync(SRC)) {
  if (!/\.(webp|png|jpe?g|gif)$/i.test(f)) continue;
  const target = join(DEST, f);
  if (!existsSync(target)) {
    copyFileSync(join(SRC, f), target);
    n++;
  }
}
console.log(`[copy-media] ${n} archivos nuevos en public/media/`);
