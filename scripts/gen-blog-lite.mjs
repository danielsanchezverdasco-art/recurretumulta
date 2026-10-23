// Genera src/lib/blog-lite.generated.ts con solo los metadatos necesarios para la portada.
// La portada solo necesita: slug, title, excerpt, category, date, locale, heroSrc, heroAlt.
// Esto evita que el bundle de la portada incluya los 1.3MB del contenido completo de los artículos.
// Ejecutar antes de cada build: node scripts/gen-blog-lite.mjs
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, "..", "src", "lib");

// Importar los posts usando tsx o compilación directa. Como los ficheros son .ts con
// tipos simples, los leemos y extraemos los metadatos con regex (más rápido y sin dependencias).
import { readFileSync, readdirSync } from "fs";

// Los posts en formato JSON guardan el contenido como string TS con las
// comillas escapadas (alt=\"...\") y algunos con doble escape (alt=\\\"...\\\").
// Sin desescapar, el alt de la tarjeta salía con \" literales (informe Niky 20/10/2026).
function desescaparComillas(s) {
  let out = s;
  for (let i = 0; i < 3 && out.includes('\\"'); i++) out = out.replace(/\\"/g, '"');
  return out;
}

function postHeroImage(content) {
  const heroTag = content.match(/<img[^>]*>/i);
  if (!heroTag) return null;
  const tag = desescaparComillas(heroTag[0]);
  const srcM = tag.match(/src=("[^"]*"|'[^']*'|[^\s>]+)/i);
  if (!srcM) return null;
  const src = srcM[1].replace(/^["']|["']$/g, "");
  if (!src) return null;
  const altM = tag.match(/alt=("[^"]*"|'[^']*'|[^>]+)/i);
  const alt = altM
    ? altM[1].replace(/^["']|["']$/g, "").replace(/\s*\/?$/, "").trim()
    : "";
  return { src, alt };
}

function extractPostsFromFile(filePath) {
  const text = readFileSync(filePath, "utf-8");
  const posts = [];
  // Soporta tanto `slug: "..."` como `"slug": "..."` (estilo JSON del db generado)
  const slugRe = /"?(slug)"?:\s*"([^"]+)"/g;
  let m;
  const slugs = [];
  while ((m = slugRe.exec(text)) !== null) {
    slugs.push({ slug: m[2], index: m.index });
  }
  for (let i = 0; i < slugs.length; i++) {
    // El bloque del post empieza en la llave de apertura anterior al slug
    // (en algunos ficheros "title" va ANTES que "slug").
    const start = text.lastIndexOf("{", slugs[i].index);
    const end = i + 1 < slugs.length ? text.lastIndexOf("{", slugs[i + 1].index) : text.length;
    const block = text.slice(start, end);
    const get = (re) => {
      const mm = block.match(re);
      return mm ? mm[2] : "";
    };
    const title = get(/"?(title)"?:\s*"((?:[^"\\]|\\.)*)"/);
    const excerpt = get(/"?(excerpt)"?:\s*"((?:[^"\\]|\\.)*)"/).replace(/\\"/g, '"').slice(0, 200);
    const category = get(/"?(category)"?:\s*"([^"]*)"/);
    const date = get(/"?(date)"?:\s*"([^"]*)"/);
    const localeM = block.match(/"?(locale)"?:\s*"([^"]*)"/);
    // content puede ser template string o string normal (con claves entrecomilladas o no)
    let content = "";
    const contentTpl = block.match(/"?(content)"?:\s*`([\s\S]*?)`\s*[,}]/);
    if (contentTpl) {
      content = contentTpl[2];
    } else {
      const contentStr = block.match(/"?(content)"?:\s*"((?:[^"\\]|\\.)*)"/);
      if (contentStr) content = contentStr[2];
    }
    // El generador lee el TEXTO CRUDO del .ts: si content es un string JS
    // normal, la <img> llega con comillas escapadas (alt=\"…\") y postHeroImage
    // se quedaba con las \" literales en heroAlt (y algún heroSrc roto).
    // title/excerpt/keywords ya desescapaban \" en este mismo fichero; la
    // imagen hero no. Se desescapa content igual que haría el parser de JS.
    const hero = postHeroImage(content.replace(/\\"/g, '"'));
    const words = content ? content.split(/\s+/).length : 0;
    const readTime = Math.max(1, Math.round(words / 200));
    const kwM = block.match(/"?(keywords)"?:\s*\[([\s\S]*?)\]/);
    const keywords = kwM
      ? [...kwM[2].matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((x) => x[1].replace(/\\"/g, '"'))
      : [];
    posts.push({
      slug: slugs[i].slug,
      title: title.replace(/\\"/g, '"'),
      excerpt,
      category,
      date,
      locale: localeM ? localeM[2] : "es",
      heroSrc: hero ? hero.src : "",
      heroAlt: hero ? hero.alt : "",
      keywords,
      readTime,
    });
  }
  return posts;
}

// Recorrer todos los ficheros blog-posts-*.ts y blog-data.ts
const files = readdirSync(SRC).filter((f) => f.startsWith("blog-posts-") && f.endsWith(".ts"));
const seen = new Set();
const all = [];
for (const f of files.sort()) {
  try {
    const posts = extractPostsFromFile(join(SRC, f));
    for (const p of posts) {
      if (!seen.has(p.slug) && p.title) {
        seen.add(p.slug);
        all.push(p);
      }
    }
  } catch (e) {
    console.error(`Error en ${f}: ${e.message}`);
  }
}
// También blog-data.ts por si tiene posts directos
try {
  const posts = extractPostsFromFile(join(SRC, "blog-data.ts"));
  for (const p of posts) {
    if (!seen.has(p.slug) && p.title) {
      seen.add(p.slug);
      all.push(p);
    }
  }
} catch (e) {}

const out = `// Generado automáticamente por scripts/gen-blog-lite.mjs — NO EDITAR A MANO.
// Solo metadatos para la portada (sin el contenido completo de los artículos).
export type BlogLitePost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  locale: string;
  heroSrc: string;
  heroAlt: string;
  keywords: string[];
  readTime: number;
};
export const BLOG_LITE: BlogLitePost[] = ${JSON.stringify(all, null, 2)};
`;

writeFileSync(join(SRC, "blog-lite.generated.ts"), out);
console.log(`Generados ${all.length} posts lite en blog-lite.generated.ts`);

// 05/10/2026 (rendimiento): la portada solo necesita los 30 más recientes
// (muestra 6) + el contador. Evita cargar 1.5MB en la home.
// 13/10/2026: mismo criterio que /blog: fecha descendente y, a igual fecha,
// lo que aparece después en los arrays (publicado después) va primero.
const home = all
  .map((p, i) => ({ p, i }))
  .sort((a, b) => new Date(b.p.date).getTime() - new Date(a.p.date).getTime() || b.i - a.i)
  .map((x) => x.p)
  .slice(0, 30);
const homeOut = `// Generado automáticamente por scripts/gen-blog-lite.mjs — NO EDITAR A MANO.
// Subconjunto para la portada: 30 posts más recientes + contador total.
import type { BlogLitePost } from "./blog-lite.generated.ts";
export const BLOG_LITE_HOME: BlogLitePost[] = ${JSON.stringify(home)};
export const BLOG_COUNT = ${all.length};
`;
writeFileSync(join(SRC, "blog-lite-home.generated.ts"), homeOut);
