// Puerta de fotos (orden 03/10/2026): cada artículo nuevo/modificado debe tener >=2 <img
// en su contenido. Uso: node scripts/puerta-fotos-lote.mjs <fichero-ts> <slug1> <slug2> ...
import fs from "node:fs";

const [file, ...slugs] = process.argv.slice(2);
const text = fs.readFileSync(file, "utf8");
let fail = 0;
for (const slug of slugs) {
  const si = text.indexOf(`"slug": "${slug}"`) !== -1 ? text.indexOf(`"slug": "${slug}"`) : text.indexOf(`slug: "${slug}"`);
  if (si === -1) { console.log(`✗ ${slug}: slug NO encontrado en ${file}`); fail = 1; continue; }
  const start = text.lastIndexOf("{", si);
  // encontrar cierre del objeto: heurística por líneas balanceadas
  let depth = 0, end = start;
  for (let i = start; i < text.length; i++) {
    if (text[i] === "{") depth++;
    else if (text[i] === "}") { depth--; if (depth === 0) { end = i; break; } }
  }
  const block = text.slice(start, end);
  const imgs = (block.match(/<img[\s>]/g) || []).length;
  const video = (block.match(/<video[\s>]/g) || []).length;
  const ok = imgs >= 2;
  console.log(`${ok ? "✓" : "✗"} ${slug}: ${imgs} <img, ${video} <video`);
  if (!ok) fail = 1;
}
process.exit(fail);
