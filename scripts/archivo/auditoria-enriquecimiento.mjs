#!/usr/bin/env node
// Auditoría por lotes: encuentra los artículos más delgados para enriquecer.
// Uso: node scripts/auditoria-enriquecimiento.mjs [--limit N]
import fs from "node:fs";
import path from "node:path";

const ROOT = "/home/hatch/workspace/recurretumulta-v2";
const libDir = path.join(ROOT, "src/lib");
const files = fs.readdirSync(libDir).filter(f => f.startsWith("blog-posts-") && f.endsWith(".ts"));

const results = [];
for (const f of files) {
  const t = fs.readFileSync(path.join(libDir, f), "utf8");
  // Encontrar todos los slugs del fichero
  const slugRe = /"slug":\s*"([^"]+)"/g;
  const matches = [...t.matchAll(slugRe)];
  for (let k = 0; k < matches.length; k++) {
    const slug = matches[k][1];
    const start = t.lastIndexOf("{", matches[k].index);
    const end = k + 1 < matches.length ? matches[k + 1].index : matches[k].index + 60000;
    const seg = t.slice(start, Math.min(end, matches[k].index + 60000));
    const norm = seg.replace(/\\n/g, "\n");
    const words = norm.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
    const tables = (norm.match(/\|.*\|.*\|/g) || []).length;
    const faq = /preguntas frecuentes/i.test(norm);
    const internalLinks = (norm.match(/<a href=\/(blog|coches|guias|herramientas|multas)/g) || []).length;
    const imgs = (norm.match(/<img /g) || []).length;
    const titleM = seg.match(/"title":\s*"([^"]+)"/);
    const title = titleM ? titleM[1] : "";
    const localeM = seg.match(/"locale":\s*"([^"]+)"/);
    const locale = localeM ? localeM[1] : "es";
    const catM = seg.match(/"category":\s*"([^"]+)"/);
    const category = catM ? catM[1] : "";
    // score de delgadez (más alto = más delgado)
    let score = 0;
    if (words < 800) score += 3; else if (words < 1500) score += 1;
    if (!faq) score += 2;
    if (tables < 3) score += 2;
    if (internalLinks < 2) score += 1;
    if (imgs < 2) score += 1;
    results.push({ file: f, slug, title: title.slice(0, 70), words, tables, faq, internalLinks, imgs, locale, category, score });
  }
}
const limit = parseInt((process.argv.find(a => a.startsWith("--limit")) || "--limit=25").split("=")[1], 10);
results.sort((a, b) => b.score - a.score || a.words - b.words);
console.log(`Total artículos: ${results.length}`);
for (const r of results.slice(0, limit)) {
  console.log([r.score, r.words + "w", "tbl" + r.tables, r.faq ? "faq" : "NOFAQ", "links" + r.internalLinks, "img" + r.imgs, r.locale, r.file, r.slug].join(" | "));
}
