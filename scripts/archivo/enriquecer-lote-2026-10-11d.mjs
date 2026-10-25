#!/usr/bin/env node
// Tanda 6d (2026-10-11): fuente oficial dgt.es en las 3 motos (etiqueta ambiental).
import fs from "node:fs";

const M4 = "/home/hatch/workspace/recurretumulta-v2/src/lib/blog-posts-nuevos-m4.ts";
const DGT = "https://www.dgt.es/nuestros-servicios/tu-vehiculo/tus-vehiculos/distintivo-ambiental/";
let fails = 0;

function apply(slug, oldS, newS) {
  let t = fs.readFileSync(M4, "utf8");
  const i0 = t.indexOf(`"slug": "${slug}"`);
  if (i0 < 0) { console.log(`SKIP ${slug}`); fails++; return; }
  const i1 = t.indexOf('"slug": "', i0 + 10);
  const end = i1 < 0 ? t.length : i1;
  const seg = t.slice(i0, end);
  const n = seg.split(oldS).length - 1;
  if (n !== 1) { console.log(`  ⚠ ${n} ocurrencias: ${slug}`); fails++; return; }
  fs.writeFileSync(M4, t.slice(0, i0) + seg.replace(oldS, newS) + t.slice(end));
  console.log(`  OK: ${slug}`);
}

for (const slug of [
  "royal-enfield-meteor-350-2026-precio",
  "suzuki-gsx-r125-2026-precio",
  "keeway-superlight-125v-2025-precio",
]) {
  apply(
    slug,
    "| **Etiqueta DGT** | C |",
    `| **Etiqueta DGT** | <a href=${DGT}>C</a> |`
  );
}
console.log(fails === 0 ? "\nTANDA 6d OK" : `\n⚠ ${fails} incidencias`);
process.exit(fails === 0 ? 0 : 1);
