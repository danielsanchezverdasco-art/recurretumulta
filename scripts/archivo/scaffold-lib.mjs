// scaffold-lib.mjs — utilidades compartidas de los scaffolds Maextro V800.
// (11/10/2026) Plantilla obligatoria de fichas y blogs (MANDATOS-PERMANENTES.md §1).
import fs from "node:fs";
import path from "node:path";

export const REPO = path.resolve(import.meta.dirname, "..");
export const PUBLIC_MEDIA = path.join(REPO, "public", "media");

/** true si el valor es un placeholder sin rellenar. */
export function esPlaceholder(v) {
  if (v == null) return true;
  if (typeof v === "number") return false;
  const t = String(v).trim();
  return t === "" || /^todo\b/i.test(t) || /\[rellenar/i.test(t);
}

export function esFotoEnDisco(src) {
  if (esPlaceholder(src)) return false;
  const rel = String(src).replace(/^\//, "");
  return fs.existsSync(path.join(REPO, "public", rel));
}

/** Parseo mínimo de argv: --clave valor | --flag. */
export function parseArgs(argv) {
  const args = {};
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith("--")) continue;
    const eq = a.indexOf("=");
    if (eq > 0) { args[a.slice(2, eq)] = a.slice(eq + 1); continue; }
    const key = a.slice(2);
    const next = argv[i + 1];
    if (next && !next.startsWith("--")) { args[key] = next; i++; }
    else args[key] = true;
  }
  return args;
}

/** Imprime el informe de validación; devuelve exit code (0 = ok). */
export function informar(nombre, errores, avisos) {
  console.log(`\n=== ${nombre} ===`);
  if (avisos.length) {
    console.log("\nAvisos:");
    for (const a of avisos) console.log(`  ⚠  ${a}`);
  }
  if (errores.length) {
    console.log("\nErrores (BLOQUEAN la publicación):");
    for (const e of errores) console.log(`  ✗  ${e}`);
    console.log(`\nResultado: ${errores.length} error(es), ${avisos.length} aviso(s) → NO PUBLICABLE`);
    return 1;
  }
  console.log(`\nResultado: 0 errores, ${avisos.length} aviso(s) → LISTO para el workflow`);
  return 0;
}

/** Emite el draft como módulo TS (para que una página lo importe directo).
 *  Quita los metadatos __tipo/__plantilla: no existen en MaextroFichaData/
 *  MaextroBlogData y tsc los rechazaría (excess property check). */
export function emitirTs(draft, constName) {
  const limpio = { ...draft };
  delete limpio.__tipo;
  delete limpio.__plantilla;
  const json = JSON.stringify(limpio, null, 2);
  return `// Generado por scripts/scaffold-*.mjs — plantilla Maextro V800 (11/10/2026).\n// Revisar cada campo antes de publicar; ningún TODO puede llegar a producción.\nimport type { ${draft.__tipo} } from "@/components/maextro/tipos.ts";\n\nexport const ${constName}: ${draft.__tipo} = ${json.replace(/^/gm, "")};\n`;
}

/** Valida las FAQs (5-6, sin placeholders, respuestas útiles). */
export function validarFaqs(faqs, errores, avisos) {
  if (!Array.isArray(faqs)) { errores.push("faqs: debe ser un array"); return; }
  if (faqs.length < 5 || faqs.length > 6) errores.push(`faqs: debe tener 5-6 preguntas (tiene ${faqs.length})`);
  faqs.forEach((f, i) => {
    if (esPlaceholder(f.pregunta)) errores.push(`faqs[${i}].pregunta: sin rellenar`);
    if (esPlaceholder(f.respuesta)) errores.push(`faqs[${i}].respuesta: sin rellenar`);
    else if (String(f.respuesta).replace(/<[^>]+>/g, "").trim().length < 60)
      avisos.push(`faqs[${i}]: respuesta muy corta (<60 car.) — ¿es útil de verdad?`);
  });
}

/** Valida que las fotos existan en disco y sean del modelo (filtro 9). */
export function validarFotos(imagenes, campo, errores, avisos) {
  if (!Array.isArray(imagenes)) { errores.push(`${campo}: debe ser un array`); return; }
  imagenes.forEach((src, i) => {
    if (esPlaceholder(src)) errores.push(`${campo}[${i}]: sin rellenar`);
    else if (!esFotoEnDisco(src)) errores.push(`${campo}[${i}]: no existe en disco → ${src}`);
  });
}

export function checkTitle(title, campo, errores) {
  if (esPlaceholder(title)) { errores.push(`${campo}: sin rellenar`); return; }
  if (title.length > 60) errores.push(`${campo}: ${title.length} car. > 60 → "${title}"`);
}

export function checkDescription(desc, errores) {
  if (esPlaceholder(desc)) { errores.push("description: sin rellenar"); return; }
  if (desc.length > 155) errores.push(`description: ${desc.length} car. > 155`);
}

export function leerJson(ruta) {
  const abs = path.resolve(ruta);
  if (!fs.existsSync(abs)) { console.error(`No existe: ${ruta}`); process.exit(2); }
  return JSON.parse(fs.readFileSync(abs, "utf8"));
}
