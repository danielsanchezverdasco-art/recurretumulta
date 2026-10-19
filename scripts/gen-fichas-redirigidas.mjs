// Fichas con 301 forzado en public/_redirects (18/10/2026): "coches/<id>" -> "coches/<destino>".
// La tarjeta de ficha del blog y "Más fichas de la marca" usan el destino final, nunca
// una URL que redirige. Ejecutar antes de cada build: node scripts/gen-fichas-redirigidas.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const R = {};
const ficha = (u) => {
  const m = u.replace(/^https:\/\/recurretumulta\.online/, "").match(/^\/(coches|motos|patinetes)\/([a-z0-9-]+)\/?$/);
  return m ? `${m[1]}/${m[2]}` : null;
};
for (const l of readFileSync(join(ROOT, "public", "_redirects"), "utf8").split("\n")) {
  const p = l.trim().split(/\s+/);
  if (p.length < 3 || p[0].startsWith("#") || !/^30[12]!$/.test(p[2])) continue;
  const a = ficha(p[0]);
  if (a) R[a] = ficha(p[1]) ?? "";
}
// Cadenas a un salto.
for (const k of Object.keys(R)) {
  let d = R[k], n = 0;
  while (d && R[d] !== undefined && n++ < 10) d = R[d];
  R[k] = d === k ? "" : d;
}
writeFileSync(join(ROOT, "src", "lib", "fichas-redirigidas.generated.json"), JSON.stringify(R, Object.keys(R).sort()) + "\n");
console.log(`OK: ${Object.keys(R).length} fichas redirigidas`);
