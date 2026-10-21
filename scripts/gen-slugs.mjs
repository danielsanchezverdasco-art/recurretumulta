// Regenera las listas scripts/*-slugs.txt desde los ficheros de datos.
// Las listas se mantenían a mano y derivaban de los datos: posts/fichas
// nuevos entraban en src/lib pero no en la lista (fuera del sitemap y del
// prerender) y slugs retirados quedaban como URLs fantasma en el sitemap.
// La fuente de verdad es la misma que usa la app para servir el contenido:
// el escaneo de scripts/gen-data-loaders.mjs (blog: slug con title/content;
// fichas: campo id en comparador-*.ts). Uso: node scripts/gen-slugs.mjs
// Conserva el orden actual de cada lista, retira los slugs sin datos y
// añade al final (ordenados) los que están en datos y faltaban.
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const LIB = join(ROOT, "src", "lib");

const files = (re) => readdirSync(LIB).filter((f) => re.test(f)).sort();

// ── Blog: mismo criterio que gen-data-loaders.mjs ────────────────────────────
function scanBlog() {
  const set = new Map();
  for (const f of [...files(/^blog-posts-.*\.ts$/), "blog-data.ts"]) {
    const text = readFileSync(join(LIB, f), "utf-8");
    const slugRe = /"?(slug)"?:\s*"([^"]+)"/g;
    const slugs = [];
    let m;
    while ((m = slugRe.exec(text)) !== null) slugs.push({ slug: m[2], index: m.index });
    for (let i = 0; i < slugs.length; i++) {
      const start = text.lastIndexOf("{", slugs[i].index);
      const end = i + 1 < slugs.length ? text.lastIndexOf("{", slugs[i + 1].index) : text.length;
      if (/"?(title|content)"?:/.test(text.slice(start, end)) && !set.has(slugs[i].slug)) {
        set.set(slugs[i].slug, f);
      }
    }
  }
  return set;
}

// ── Fichas: campo id en los comparador-*.ts (sin los agregadores *-data.ts) ──
function scanIds(pattern, exclude) {
  const set = new Map();
  for (const f of files(pattern)) {
    if (exclude && exclude.test(f)) continue;
    const text = readFileSync(join(LIB, f), "utf-8");
    const re = /\bid:\s*"([^"]+)"/g;
    let m;
    while ((m = re.exec(text)) !== null) if (!set.has(m[1])) set.set(m[1], f);
  }
  return set;
}

const LISTAS = [
  { file: "scripts/blog-slugs.txt", datos: () => scanBlog() },
  { file: "scripts/coches-slugs.txt", datos: () => scanIds(/^comparador-coches-.*\.ts$/, /comparador-coches-data\.ts$/) },
  { file: "scripts/campers-slugs.txt", datos: () => scanIds(/^comparador-campers-.*\.ts$/, null) },
  { file: "scripts/motos-slugs.txt", datos: () => scanIds(/^comparador-motos-.*\.ts$/, /comparador-motos-data\.ts$/) },
  { file: "scripts/patinetes-slugs.txt", datos: () => scanIds(/^comparador-patinetes-.*\.ts$/, /comparador-patinetes-data\.ts$/) },
];

for (const { file, datos } of LISTAS) {
  const data = datos();
  const path = join(ROOT, file);
  const actuales = readFileSync(path, "utf8").split("\n").map((s) => s.trim()).filter(Boolean);
  const vigentes = actuales.filter((s) => data.has(s));
  const fantasmas = actuales.filter((s) => !data.has(s));
  const enLista = new Set(vigentes);
  const nuevos = [...data.keys()].filter((s) => !enLista.has(s)).sort();
  const salida = [...vigentes, ...nuevos];
  writeFileSync(path, salida.join("\n") + "\n");
  console.log(
    `${file}: ${actuales.length} -> ${salida.length} (datos: ${data.size}, retirados sin datos: ${fantasmas.length}, añadidos: ${nuevos.length})`
  );
  if (fantasmas.length) console.log(`  retirados: ${fantasmas.join(", ")}`);
}
console.log("OK: listas regeneradas desde los datos.");
