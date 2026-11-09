#!/usr/bin/env node
// maextro-registro.mjs — Alta/baja de páginas Maextro V800 en el registro.
// (11/10/2026) El registro (src/data/maextro/registro.ts) mapea cada slug a su
// import() perezoso; las páginas genéricas src/pages/MaextroFichaPage.tsx y
// src/pages/MaextroBlogPage.tsx lo usan para servir la plantilla nueva, y
// delegan en la página existente si el slug no está (cero rotura).
//
// Uso:
//   node scripts/maextro-registro.mjs add-ficha <slug>   # src/data/maextro/fichas/<slug>.ts debe existir
//   node scripts/maextro-registro.mjs add-blog <slug>    # src/data/maextro/blogs/<slug>.ts debe existir
//   node scripts/maextro-registro.mjs remove <slug>      # da de baja el slug (ficha o blog)
//   node scripts/maextro-registro.mjs list               # slugs registrados
//   node scripts/maextro-registro.mjs --help
//
// Flujo típico (tras --check en verde):
//   node scripts/scaffold-ficha.mjs --emit-ts drafts/<slug>.ficha.json --const ficha \
//     > src/data/maextro/fichas/<slug>.ts
//   node scripts/maextro-registro.mjs add-ficha <slug>
//   npx tsc -b   # exit 0

import fs from "node:fs";
import {
  REPO_ROOT,
  FICHAS_DIR,
  BLOGS_DIR,
  registrarEnRegistro,
  quitarDelRegistro,
  listarRegistro,
} from "./maextro-lib.mjs";
import path from "node:path";

const AYUDA = `
maextro-registro.mjs — alta/baja de páginas Maextro V800 en el registro

  node scripts/maextro-registro.mjs add-ficha <slug>   Da de alta la ficha
  node scripts/maextro-registro.mjs add-blog <slug>    Da de alta el artículo
  node scripts/maextro-registro.mjs remove <slug>     Da de baja el slug
  node scripts/maextro-registro.mjs list              Lista los slugs registrados
  node scripts/maextro-registro.mjs --help            Esta ayuda

  add-ficha exige que exista src/data/maextro/fichas/<slug>.ts
  (se genera con: scaffold-ficha.mjs --emit-ts drafts/<slug>.ficha.json
   --const ficha > src/data/maextro/fichas/<slug>.ts).
  Idem add-blog con blogs/<slug>.ts y --const articulo.
`.trim();

const [cmd, slug] = process.argv.slice(2);

if (!cmd || cmd === "--help" || cmd === "-h") {
  console.log(AYUDA);
  process.exit(0);
}

if (cmd === "list") {
  const { fichas, blogs } = listarRegistro();
  console.log(`Fichas (${fichas.length}):`);
  fichas.forEach((s) => console.log(`  /coches|motos|patinetes/${s}`));
  console.log(`Blogs (${blogs.length}):`);
  blogs.forEach((s) => console.log(`  /blog/${s}`));
  process.exit(0);
}

if (cmd === "remove") {
  if (!slug) { console.error("Error: falta el <slug>."); process.exit(1); }
  const r = quitarDelRegistro(slug);
  console.log(r.mensaje);
  process.exit(r.ok ? 0 : 1);
}

if (cmd === "add-ficha" || cmd === "add-blog") {
  if (!slug) { console.error("Error: falta el <slug>."); process.exit(1); }
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
    console.error("Error: slug con formato inválido (minúsculas, números y guiones).");
    process.exit(1);
  }
  const esFicha = cmd === "add-ficha";
  const esperado = path.join(esFicha ? FICHAS_DIR : BLOGS_DIR, `${slug}.ts`);
  if (!fs.existsSync(esperado)) {
    console.error(`Error: no existe ${path.relative(REPO_ROOT, esperado)}`);
    console.error(esFicha
      ? "Primero: node scripts/scaffold-ficha.mjs --emit-ts drafts/<slug>.ficha.json --const ficha > " + path.relative(REPO_ROOT, esperado)
      : "Primero: node scripts/scaffold-blog.mjs --emit-ts drafts/<slug>.blog.json --const articulo > " + path.relative(REPO_ROOT, esperado));
    process.exit(1);
  }
  const r = registrarEnRegistro(slug, esFicha ? "ficha" : "blog");
  console.log(r.mensaje);
  process.exit(r.ok ? 0 : 1);
}

console.error(`Comando desconocido: ${cmd}. Ver --help.`);
process.exit(1);
