// Generador OLEADA I — Lote B14 (kia + mg + toyota).
// Lee scripts/b14-data-5.mjs (que encadena 1..5), genera las entradas TS
// y las AÑADE (append) a los 6 ficheros de datos. Uso: node scripts/gen-b14.mjs
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { MODELS } from "./b14-data-5.mjs";

const ROOT = new URL("..", import.meta.url).pathname;

const TARGETS = {
  kia: {
    ficha: "src/lib/comparador-coches-kia.ts",
    blog: "src/lib/blog-posts-kia-a.ts",
  },
  mg: {
    ficha: "src/lib/comparador-coches-mg.ts",
    blog: "src/lib/blog-posts-mg-a.ts",
  },
  toyota: {
    ficha: "src/lib/comparador-coches-toyota.ts",
    blog: "src/lib/blog-posts-toyota-a.ts",
  },
};

// JSON con indentación de 2 espacios, como los ficheros existentes.
const dump = (obj, unquoteKeys = false) => {
  let s = JSON.stringify(obj, null, 2)
    .split("\n")
    .map((l) => "  " + l)
    .join("\n");
  // Las fichas usan keys sin comillas (estilo del repo: id: "...");
  // los blogs usan keys con comillas ("title": "...").
  if (unquoteKeys) s = s.replace(/^(\s*)"([A-Za-z_$][A-Za-z0-9_$]*)":/gm, "$1$2:");
  return s;
};

function makeBlog(m) {
  return {
    title: m.blog.title,
    slug: m.ficha.id,
    excerpt: m.blog.excerpt,
    category: "Novedades Motor",
    date: "2026-10-05",
    readTime: m.blog.readTime,
    locale: "all",
    keywords: m.blog.keywords,
    content: m.blog.lines.join("\n"),
  };
}

// Validaciones rápidas antes de tocar los ficheros.
for (const m of MODELS) {
  if (!m.brand || !m.ficha || !m.blog) throw new Error("Modelo incompleto: " + JSON.stringify(m).slice(0, 120));
  if (m.blog.title.length > 60) throw new Error("title >60: " + m.ficha.id);
  if (m.blog.excerpt.length > 155) throw new Error("excerpt >155: " + m.ficha.id);
  if (m.ficha.galeria.length !== 3) throw new Error("galeria != 3: " + m.ficha.id);
}

const byBrand = { kia: [], mg: [], toyota: [] };
for (const m of MODELS) byBrand[m.brand].push(m);

for (const brand of Object.keys(byBrand)) {
  const list = byBrand[brand];
  // 1. Fichas
  const fichaPath = ROOT + TARGETS[brand].ficha;
  let fichaText = readFileSync(fichaPath, "utf8");
  const fichaIdx = fichaText.lastIndexOf("];");
  if (fichaIdx < 0) throw new Error("No hay cierre ]; en " + fichaPath);
  let fichaBody = fichaText.slice(0, fichaIdx).replace(/\s+$/, "");
  if (!fichaBody.endsWith(",")) fichaBody += ",";
  const fichaEntries = list.map((m) => dump(m.ficha, true) + ",").join("\n");
  writeFileSync(fichaPath, fichaBody + "\n" + fichaEntries + "\n];\n");
  console.log(`OK ${TARGETS[brand].ficha}: +${list.length} fichas`);

  // 2. Blogs
  const blogPath = ROOT + TARGETS[brand].blog;
  let blogText = readFileSync(blogPath, "utf8");
  const blogIdx = blogText.lastIndexOf("];");
  if (blogIdx < 0) throw new Error("No hay cierre ]; en " + blogPath);
  let blogBody = blogText.slice(0, blogIdx).replace(/\s+$/, "");
  if (!blogBody.endsWith(",")) blogBody += ",";
  const blogEntries = list.map((m) => dump(makeBlog(m)) + ",").join("\n");
  writeFileSync(blogPath, blogBody + "\n" + blogEntries + "\n];\n");
  console.log(`OK ${TARGETS[brand].blog}: +${list.length} artículos`);
}

// 3. slugs-B14.txt
mkdirSync("/tmp/oleada-I", { recursive: true });
writeFileSync("/tmp/oleada-I/slugs-B14.txt", MODELS.map((m) => m.ficha.id).join("\n") + "\n");
console.log("OK /tmp/oleada-I/slugs-B14.txt");

// 4. galerias-B14.txt (formato galerias-coches.ts, crédito IA)
const gal = MODELS.map((m) => {
  const g = m.ficha.galeria;
  const rows = g
    .map(
      (p) =>
        `    { src: "${p.src}", alt: "${p.alt.replace(/"/g, '\\"')}", credito: "Imagen ilustrativa generada por IA" },`
    )
    .join("\n");
  return `  "${m.ficha.id}": [\n${rows}\n  ],`;
}).join("\n");
writeFileSync("/tmp/oleada-I/galerias-B14.txt", gal + "\n");
console.log("OK /tmp/oleada-I/galerias-B14.txt");

console.log(`TOTAL: ${MODELS.length} modelos (kia ${byBrand.kia.length}, mg ${byBrand.mg.length}, toyota ${byBrand.toyota.length})`);
