#!/usr/bin/env node
// Retoque tanda 2026-10-05: 2ª foto (reutiliza imagen oficial de la ficha del mismo
// modelo, ya existente en public/media) + enlace a dgt.es donde el validador lo exige.
import fs from "node:fs";
const ROOT = "/home/hatch/workspace/recurretumulta-v2";

function entryBounds(t, slugIdx) {
  const start = t.lastIndexOf("{", slugIdx);
  let depth = 0, inStr = false, q = "", esc = false;
  for (let k = start; k < t.length; k++) {
    const c = t[k];
    if (inStr) { if (esc) esc = false; else if (c === "\\") esc = true; else if (c === q) inStr = false; }
    else {
      if (c === '"' || c === "'") { inStr = true; q = c; }
      else if (c === "{") depth++;
      else if (c === "}") { depth--; if (depth === 0) return [start, k + 1]; }
    }
  }
  throw new Error("entry no cerrada");
}
function getContentRaw(entry) {
  const m = entry.match(/"content":\s*"/);
  let i = m.index + m[0].length, esc = false;
  for (; i < entry.length; i++) {
    const c = entry[i];
    if (esc) esc = false; else if (c === "\\") esc = true; else if (c === '"') break;
  }
  return entry.slice(m.index + m[0].length, i);
}
function setContentRaw(entry, newRaw) {
  const m = entry.match(/"content":\s*"/);
  let i = m.index + m[0].length, esc = false;
  for (; i < entry.length; i++) {
    const c = entry[i];
    if (esc) esc = false; else if (c === "\\") esc = true; else if (c === '"') break;
  }
  return entry.slice(0, m.index + m[0].length) + newRaw + entry.slice(i);
}

const IMGS = {
  "citroen-e-c3-aircross-baja-precio-octubre-2026":
    ["citroen-e-c3-aircross-electrico-precio-ficha-tecnica-interior-oficial.webp", "Salpicadero del Citroën e-C3 Aircross con pantalla central"],
  "silence-s01-plus-baja-precio-octubre-2026":
    ["silence-s01-ficha-tecnica-precio-oficial-2.webp", "Silence S01+ eléctrico circulando por ciudad"],
  "opel-frontera-electric-baja-precio-octubre-2026":
    ["opel-frontera-electric-precio-ficha-tecnica-interior-oficial.webp", "Interior del Opel Frontera Electric"],
  "cupra-tavascan-baja-precio-octubre-2026":
    ["cupra-tavascan-2024-precio-ficha-tecnica-interior-oficial.webp", "Interior del Cupra Tavascan"],
  "nissan-qashqai-baja-precio-octubre-2026":
    ["nissan-qashqai-mhev-158-2026-precio-ficha-tecnica-interior.webp", "Interior del Nissan Qashqai MHEV 2026"],
  "kia-ev3-baja-precio-octubre-2026":
    ["kia-ev3-air-2025-precio-ficha-tecnica-interior-oficial.webp", "Interior del Kia EV3"],
};
const DGT_BULLET = "\\n- **Fuente oficial:** <a href=https://www.dgt.es/nuestros-servicios/tu-vehiculo/tus-vehiculos/distintivo-ambiental/>distintivo ambiental de la DGT</a> para tu matrícula.";
const NEED_DGT = new Set([
  "silence-s01-plus-baja-precio-octubre-2026",
  "cupra-tavascan-baja-precio-octubre-2026",
  "nissan-qashqai-baja-precio-octubre-2026",
]);

const f = `${ROOT}/src/lib/blog-posts-flash-2026.ts`;
let t = fs.readFileSync(f, "utf8");
for (const [slug, [img, alt]] of Object.entries(IMGS)) {
  if (!fs.existsSync(`${ROOT}/public/media/${img}`)) throw new Error("falta imagen: " + img);
  const idx = t.indexOf(`"${slug}"`);
  const [a, b] = entryBounds(t, idx);
  let entry = t.slice(a, b);
  let raw = getContentRaw(entry);
  const h2 = "## Nuestra recomendación honesta";
  if (!raw.includes(h2)) throw new Error("sin h2 recomendación: " + slug);
  const tag = `<img src=/media/${img} alt=${alt}>\\n\\n`;
  if (raw.includes(`/media/${img}`)) throw new Error("imagen ya insertada: " + slug);
  raw = raw.split(h2).join(tag + h2);
  if (NEED_DGT.has(slug)) {
    const anchor = "calculadora de etiqueta DGT</a>.";
    if (!raw.includes(DGT_BULLET)) {
      const pos = raw.indexOf(anchor);
      if (pos < 0) throw new Error("anchor etiqueta no encontrado: " + slug);
      raw = raw.slice(0, pos + anchor.length) + DGT_BULLET + raw.slice(pos + anchor.length);
    }
  }
  entry = setContentRaw(entry, raw);
  t = t.slice(0, a) + entry + t.slice(b);
  console.log("OK:", slug);
}
fs.writeFileSync(f, t);
console.log("Hecho.");
