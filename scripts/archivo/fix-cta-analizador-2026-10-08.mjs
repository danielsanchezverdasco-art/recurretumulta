#!/usr/bin/env node
// Fix tanda 4/4b (+2 restos de la tanda 3): el CTA al analizador debe ser
// <a href=/#analizador> (relativo + deep-link; el validador exige
// recurretumulta.online o #analizador en el segmento).
// Idempotente por segmento; falla si el patrón no casa exactamente 1 vez.
import fs from "node:fs";

const ROOT = "/home/hatch/workspace/recurretumulta-v2";

const targets = [
  ["src/lib/blog-posts-solkuno-a.ts", [
    ["byd-tang-l-2026-precio-ficha-tecnica", `<a href=/>Analízala gratis`],
    ["nio-es9-2026-precio-ficha-tecnica", `<a href=/>Analízala gratis`],
    ["lotus-eletre-r-plus-2026-precio-ficha-tecnica", `<a href=/>analiza la multa gratis`],
  ]],
  ["src/lib/blog-posts-solkuno-b.ts", [
    ["stelato-s9-huawei-2026-precio-ficha-tecnica", `<a href=/>analízala gratis`],
    ["luxeed-r7-huawei-2026-precio-ficha-tecnica", `<a href=/>analízala gratis`],
    ["denza-n9-byd-2026-precio-ficha-tecnica", `<a href=https://recurretumulta.online/>analízala gratis`],
    ["onvo-l90-nio-2026-precio-ficha-tecnica", `<a href=https://recurretumulta.online/>analízala gratis`],
  ]],
  ["src/lib/blog-posts-solkuno-c.ts", [
    ["aito-m8-huawei-2026-precio-ficha-tecnica", `<a href=/>analízala gratis`],
    ["deepal-s09-2026-precio-ficha-tecnica", `<a href=/>analízala gratis`],
    ["im-ls9-2026-precio-ficha-tecnica", `<a href=/>analízala gratis`],
  ]],
];

for (const [file, pairs] of targets) {
  const p = `${ROOT}/${file}`;
  let t = fs.readFileSync(p, "utf8");
  for (const [slug, oldPrefix] of pairs) {
    const i = t.indexOf(`"${slug}"`);
    if (i < 0) throw new Error(`slug no encontrado: ${slug}`);
    const start = t.lastIndexOf("{", i);
    const j = t.indexOf('"slug":', i + slug.length + 10);
    const end = j > 0 ? j : i + 60000;
    let seg = t.slice(start, end);
    const c = seg.split(oldPrefix).length - 1;
    if (c !== 1) throw new Error(`[${slug}] "${oldPrefix}" aparece ${c} veces (esperado 1)`);
    const newPrefix = oldPrefix.replace(/href=[^ ]*/, "href=/#analizador");
    seg = seg.split(oldPrefix).join(newPrefix);
    t = t.slice(0, start) + seg + t.slice(end);
  }
  fs.writeFileSync(p, t);
  console.log(`OK ${file}: ${pairs.length} CTAs -> /#analizador`);
}
console.log("Fix CTA completo.");
