#!/usr/bin/env node
/**
 * Validador obligatorio para NUEVOS artículos de coche/marca.
 * Orden de Daniel 04/10/2026: ningún blog de coche se publica sin pasar esto.
 * Uso: node scripts/validar-blog-coche.mjs <slug>
 * Exit 0 = OK. Exit 1 = FALLO (lista lo que falta). Los crons NO deben publicar si falla.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = "/home/hatch/workspace/recurretumulta-v2";
const slug = process.argv[2];
if (!slug) { console.error("Uso: validar-blog-coche.mjs <slug>"); process.exit(2); }

const errores = [];
const avisos = [];

// 1. Localizar el post y delimitar SU objeto (no una ventana fija de 32KB:
// antes abarcaba artículos vecinos y los fallos/avisos eran del artículo
// equivocado). Busca el "{" de apertura y recorre hasta su "}" de cierre.
function delimitarObjeto(t, i) {
  const apertura = t.lastIndexOf("\n  {\n", i);
  if (apertura < 0) return null;
  let j = t.indexOf("{", apertura);
  let depth = 0, inStr = null, esc = false;
  for (; j < t.length; j++) {
    const ch = t[j];
    if (inStr) {
      if (esc) esc = false;
      else if (ch === "\\") esc = true;
      else if (ch === inStr) inStr = null;
    } else {
      if (ch === '"' || ch === "'") inStr = ch;
      else if (ch === "{") depth++;
      else if (ch === "}") {
        depth--;
        if (depth === 0) return [apertura + 1, j + 1];
      }
    }
  }
  return null;
}

const libDir = path.join(ROOT, "src/lib");
const files = fs.readdirSync(libDir).filter(f => f.startsWith("blog-posts-") && f.endsWith(".ts"));
let postFile = null, postSeg = null;
for (const f of files) {
  const t = fs.readFileSync(path.join(libDir, f), "utf8");
  const i = t.indexOf(`"${slug}"`);
  if (i >= 0) {
    postFile = f;
    const lim = delimitarObjeto(t, i);
    postSeg = lim ? t.slice(lim[0], lim[1]) : t.slice(Math.max(0, i - 2000), i + 30000); // fallback legacy
    break;
  }
}
if (!postFile) { console.error(`FALLO: slug "${slug}" no encontrado en blog-posts-*.ts`); process.exit(1); }

// 2. Title ≤60 (formato "title": "..." o title: "...")
const titleM = postSeg.match(/"title":\s*"([^"]+)"|title:\s*"([^"]+)"/);
const title = titleM ? (titleM[1] || titleM[2]) : null;
if (!title) errores.push("sin title");
else if (title.length > 60) errores.push(`title ${title.length} car. (>60): "${title.slice(0, 40)}..."`);

// 3. Description ≤155 (excerpt o description)
const descM = postSeg.match(/"?(excerpt|description)"?:\s*"([^"]+)"/);
const desc = descM ? descM[2] : null;
if (!desc) errores.push("sin excerpt/description");
else if (desc.length > 155) errores.push(`description ${desc.length} car. (>155)`);

// 4. Mínimo 2 fotos IA que EXISTAN en disco
const fotos = [...new Set([...postSeg.matchAll(/\/media\/([a-z0-9\-\/]+\.(?:webp|jpg|jpeg|png))/g)].map(m => m[1]))];
if (fotos.length < 2) errores.push(`solo ${fotos.length} foto(s), mínimo 2`);
const fotosFaltantes = fotos.filter(f => !fs.existsSync(path.join(ROOT, "public/media", f)));
if (fotosFaltantes.length) errores.push(`fotos referenciadas que NO existen: ${fotosFaltantes.join(", ")}`);

// 5. Tablas (al menos 1)
if (!/\|.*\|.*\|/.test(postSeg)) errores.push("sin tablas");

// 6. FAQ 5-6 preguntas (el contenido usa \n literales: normalizar antes de contar)
const faqM = postSeg.match(/preguntas frecuentes/i);
const faqLineas = postSeg.replace(/\\n/g, "\n").split("\n");
const preguntas = faqLineas.filter(l => /^### .*¿.*\?/.test(l)).length;
if (!faqM) errores.push("sin sección FAQ");
else if (preguntas < 5) avisos.push(`FAQ con ~${preguntas} preguntas (ideal 5-6)`);

// 7. Enlaces internos + fuentes oficiales
if (!/href=\/?(blog|coches|motos|herramientas)/.test(postSeg)) errores.push("sin enlaces internos");
if (!/(dgt\.es|boe\.es)/.test(postSeg)) avisos.push("sin fuentes oficiales dgt.es/boe.es (valorar si aplican al tema)");

// 8. CTA al analizador
if (!/recurretumulta\.online|#analizador/.test(postSeg)) errores.push("sin CTA al analizador");

// 9. FICHA TÉCNICA OBLIGATORIA (vehículo) — el template (blog/[slug].tsx) muestra
// la FichaDestacada con el PRIMER enlace /coches/<id> o /motos/<id> del contenido.
// Se exige que ese enlace exista y que el id exista en el comparador.
const compFiles = fs.readdirSync(libDir).filter(f => f.startsWith("comparador-coches-") && f.endsWith(".ts"));
const compAll = compFiles.map(f => fs.readFileSync(path.join(libDir, f), "utf8")).join("\n");
const motoFiles = fs.readdirSync(libDir).filter(f => f.startsWith("comparador-motos-") && f.endsWith(".ts"));
const motoAll = motoFiles.map(f => fs.readFileSync(path.join(libDir, f), "utf8")).join("\n");
const fichaMatch = postSeg.match(/href=(?:https:\/\/recurretumulta\.online)?\/(coches|motos)\/([a-z0-9-]+)/);
const fichaTipo = fichaMatch ? fichaMatch[1] : null;
const fichaId = fichaMatch ? fichaMatch[2] : null;
const fichaDb = fichaTipo === "motos" ? motoAll : compAll;
if (!fichaId) {
  errores.push(`SIN FICHA: el artículo no enlaza a ninguna ficha /coches/<id> o /motos/<id> → la ficha técnica animada NO aparecerá`);
} else if (!fichaDb.includes(`id: "${fichaId}"`)) {
  errores.push(`SIN FICHA: el artículo enlaza a /${fichaTipo}/${fichaId} pero no existe ese id en el comparador → la ficha técnica animada NO aparecerá`);
}

// 10. Vídeo (aviso si no hay)
if (!/youtube\.com|youtu\.be|\.mp4/.test(postSeg)) avisos.push("sin vídeo");

console.log(`\n=== Validación blog coche: ${slug} (${postFile}) ===`);
console.log(`Fotos: ${fotos.length} | Title: ${title ? title.length + " car." : "?"} | Desc: ${desc ? desc.length + " car." : "?"}`);
if (avisos.length) { console.log("\nAVISOS:"); avisos.forEach(a => console.log("  ⚠️ " + a)); }
if (errores.length) {
  console.log("\n❌ FALLOS BLOQUEANTES:");
  errores.forEach(e => console.log("  ✖ " + e));
  console.log("\nNO PUBLICAR hasta corregir.\n");
  process.exit(1);
}
console.log("\n✅ TODO OK — apto para publicar.\n");
