#!/usr/bin/env node
/**
 * Validador obligatorio para artículos GENERALES (noticias DGT, novedades, guías).
 * Orden de Daniel 04/10/2026: mismo estándar que coches MENOS ficha técnica,
 * MÁS tablas útiles. Solo info útil, cero relleno.
 * Uso: node scripts/validar-blog-general.mjs <slug>
 * Exit 0 = OK. Exit 1 = FALLO.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = "/home/hatch/workspace/recurretumulta-v2";
const slug = process.argv[2];
if (!slug) { console.error("Uso: validar-blog-general.mjs <slug>"); process.exit(2); }

const errores = [];
const avisos = [];

const libDir = path.join(ROOT, "src/lib");
const files = fs.readdirSync(libDir).filter(f => f.startsWith("blog-posts-") && f.endsWith(".ts"));
let postFile = null, postSeg = null;
for (const f of files) {
  const t = fs.readFileSync(path.join(libDir, f), "utf8");
  const i = t.indexOf(`"${slug}"`);
  if (i >= 0) { postFile = f; postSeg = t.slice(Math.max(0, i - 2000), i + 30000); break; }
}
// Normalizar los \n literales del string TS a saltos reales para contar filas/preguntas:
// el contenido va en una sola línea física y los regex por línea fallarían.
const norm = postSeg.replace(/\\n/g, "\n");

// 1. Title ≤60
const titleM = postSeg.match(/"title":\s*"([^"]+)"|title:\s*"([^"]+)"/);
const title = titleM ? (titleM[1] || titleM[2]) : null;
if (!title) errores.push("sin title");
else if (title.length > 60) errores.push(`title ${title.length} car. (>60)`);

// 2. Description ≤155
const descM = postSeg.match(/"(excerpt|description)":\s*"([^"]+)"/);
const desc = descM ? descM[2] : null;
if (!desc) errores.push("sin excerpt/description");
else if (desc.length > 155) errores.push(`description ${desc.length} car. (>155)`);

// 3. Mínimo 2 fotos que EXISTAN (acepta /media/, /media/motos/ y /media/patinetes/)
const fotos = [...new Set([...postSeg.matchAll(/\/media\/(?:(motos|patinetes)\/)?([a-z0-9-]+\.webp)/g)].map(m => (m[1] ? m[1] + "/" : "") + m[2]))];
if (fotos.length < 2) errores.push(`solo ${fotos.length} foto(s), mínimo 2`);
const faltantes = fotos.filter(f => !fs.existsSync(path.join(ROOT, "public/media", f)));
if (faltantes.length) errores.push(`fotos inexistentes: ${faltantes.join(", ")}`);

// 4. TABLAS ÚTILES (obligatorias en noticias: importes, plazos, puntos, etc.)
const tablas = (norm.match(/\|.*\|.*\|/g) || []).length;
if (tablas < 3) errores.push(`tablas insuficientes (${tablas} filas, mínimo 3 filas de tabla útil)`);

// 5. FAQ 5-6
const faqM = norm.match(/preguntas frecuentes/i);
const preguntas = (norm.match(/### .*¿[^#\n]+\?/g) || []).length;
if (!faqM) errores.push("sin sección FAQ");
else if (preguntas < 5) avisos.push(`FAQ con ~${preguntas} preguntas (ideal 5-6)`);

// 6. Fuentes oficiales (OBLIGATORIO en noticias DGT: dgt.es o boe.es)
if (!/(dgt\.es|boe\.es)/.test(postSeg)) errores.push("noticia sin fuente oficial (dgt.es/boe.es obligatorio)");

// 7. Enlaces internos
if (!/href=\/?(blog|coches|motos|patinetes|herramientas|multas)/.test(postSeg)) errores.push("sin enlaces internos");

// 8. CTA al analizador
if (!/recurretumulta\.online|#analizador/.test(postSeg)) errores.push("sin CTA al analizador");

// 9. Cero relleno: longitud mínima de contenido útil
const textoLimpio = postSeg.replace(/<[^>]+>/g, "").replace(/\|/g, "");
if (textoLimpio.length < 3000) avisos.push(`contenido corto (~${textoLimpio.length} car. sin HTML): ¿aporta suficiente valor?`);

// 10. Vídeo (aviso)
if (!/youtube\.com|youtu\.be|\.mp4/.test(postSeg)) avisos.push("sin vídeo");

console.log(`\n=== Validación blog general: ${slug} (${postFile}) ===`);
console.log(`Fotos: ${fotos.length} | Filas tabla: ${tablas} | Title: ${title ? title.length + " car." : "?"} | FAQ: ~${preguntas}`);
if (avisos.length) { console.log("\nAVISOS:"); avisos.forEach(a => console.log("  ⚠️ " + a)); }
if (errores.length) {
  console.log("\n❌ FALLOS BLOQUEANTES:");
  errores.forEach(e => console.log("  ✖ " + e));
  console.log("\nNO PUBLICAR hasta corregir.\n");
  process.exit(1);
}
console.log("\n✅ TODO OK — apto para publicar.\n");
