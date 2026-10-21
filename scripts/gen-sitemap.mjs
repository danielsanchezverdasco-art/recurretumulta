// Regenera public/sitemap.xml con las URLs reales.
// ÚNICA FUENTE DE VERDAD DE RUTAS: scripts/routes.json (diseño 11/10/2026).
// Estáticas + /multas/{provincia} + /comunidades/{ccaa} + slugFiles,
// menos las rutas de sitemapExclude (legales con noindex).
// Uso: node scripts/gen-sitemap.mjs
import { writeFileSync, readFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const ROUTES_CFG = JSON.parse(
  readFileSync(join(ROOT, "scripts", "routes.json"), "utf8")
);
const DOMAIN = ROUTES_CFG.canonicalBase || "https://recurretumulta.online";
const today = new Date().toISOString().slice(0, 10);

const readSlugs = (f) =>
  readFileSync(join(ROOT, f), "utf8")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);

const excluded = new Set(ROUTES_CFG.sitemapExclude || []);

// ── Cruce con los datos reales (21/10/2026) ─────────────────────────────────
// Las listas scripts/*-slugs.txt se mantenían a mano y derivaban de los
// datos: el sitemap publicado dejaba fuera 265 posts y 51 fichas que sí
// existen en src/lib y metía 3 URLs /coches/ sin ficha (Maserati Grecale
// Folgore/Modena V6/Trofeo 2027: existen como post, no como ficha).
// La app sirve el contenido desde los ficheros de datos (mismo escaneo que
// scripts/gen-data-loaders.mjs), así que cada lista con fuente de datos se
// cruza contra ella: fuera los slugs sin datos, dentro los que faltan.
// Las listas se pueden regenerar con scripts/gen-slugs.mjs; este cruce es
// la red de seguridad para que el sitemap nunca vuelva a derivar.
const LIB_DIR = join(ROOT, "src", "lib");
const libFiles = (re) => readdirSync(LIB_DIR).filter((f) => re.test(f)).sort();

function scanBlogSlugs() {
  const set = new Set();
  for (const f of [...libFiles(/^blog-posts-.*\.ts$/), "blog-data.ts"]) {
    const text = readFileSync(join(LIB_DIR, f), "utf8");
    const slugRe = /"?(slug)"?:\s*"([^"]+)"/g;
    const slugs = [];
    let m;
    while ((m = slugRe.exec(text)) !== null) slugs.push({ slug: m[2], index: m.index });
    for (let i = 0; i < slugs.length; i++) {
      const start = text.lastIndexOf("{", slugs[i].index);
      const end = i + 1 < slugs.length ? text.lastIndexOf("{", slugs[i + 1].index) : text.length;
      if (/"?(title|content)"?:/.test(text.slice(start, end))) set.add(slugs[i].slug);
    }
  }
  return set;
}

function scanFichaIds(pattern, exclude) {
  const set = new Set();
  for (const f of libFiles(pattern)) {
    if (exclude && exclude.test(f)) continue;
    const text = readFileSync(join(LIB_DIR, f), "utf8");
    const re = /\bid:\s*"([^"]+)"/g;
    let m;
    while ((m = re.exec(text)) !== null) set.add(m[1]);
  }
  return set;
}

const DATA_SCAN_BY_FILE = {
  "scripts/blog-slugs.txt": () => scanBlogSlugs(),
  "scripts/coches-slugs.txt": () => scanFichaIds(/^comparador-coches-.*\.ts$/, /comparador-coches-data\.ts$/),
  "scripts/campers-slugs.txt": () => scanFichaIds(/^comparador-campers-.*\.ts$/, null),
  "scripts/motos-slugs.txt": () => scanFichaIds(/^comparador-motos-.*\.ts$/, /comparador-motos-data\.ts$/),
  "scripts/patinetes-slugs.txt": () => scanFichaIds(/^comparador-patinetes-.*\.ts$/, /comparador-patinetes-data\.ts$/),
};

const routes = [
  ...(ROUTES_CFG.staticRoutes || []),
  ...(ROUTES_CFG.provinceSlugs || []).map((p) => `/multas/${p}`),
  ...(ROUTES_CFG.communitySlugs || []).map((c) => `/comunidades/${c}`),
  ...(ROUTES_CFG.slugFiles || []).flatMap((sf) => {
    const lista = readSlugs(sf.file);
    const scan = DATA_SCAN_BY_FILE[sf.file];
    if (!scan) return lista.map((s) => `${sf.prefix}${s}`);
    const datos = scan();
    const enDatos = lista.filter((s) => datos.has(s));
    const listaSet = new Set(lista);
    const faltan = [...datos].filter((s) => !listaSet.has(s));
    const fuera = lista.length - enDatos.length;
    if (fuera || faltan.length) {
      console.warn(
        `  ⚠ ${sf.file}: lista ${lista.length} vs datos ${datos.size} — ${fuera} sin datos fuera, ${faltan.length} de datos añadidos (regenera las listas con scripts/gen-slugs.mjs)`
      );
    }
    return [...enDatos, ...faltan].map((s) => `${sf.prefix}${s}`);
  }),
]
  .filter((r) => !excluded.has(r))
  .filter((r, i, a) => a.indexOf(r) === i);

const withSlash = (u) => (u === "/" || u.endsWith("/") ? u : `${u}/`);
// 13/10/2026: fuera del sitemap las URLs con 301 forzado en public/_redirects (dedupe SEO).
const redirigidas = new Set(
  readFileSync(join(ROOT, "public", "_redirects"), "utf8")
    .split("\n")
    .map((l) => l.trim().split(/\s+/))
    .filter((p) => p.length >= 3 && p[2] === "301!" && !p[0].startsWith("#"))
    .map((p) => (p[0].endsWith("/") ? p[0] : p[0] + "/")),
);
const urls = routes.map(withSlash).filter((u) => !redirigidas.has(u));

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map((u) => {
    const prio = u === "/" ? "1.0" : u.startsWith("/blog/") ? "0.7" : u.startsWith("/multas/") ? "0.8" : "0.9";
    const freq = u === "/" ? "daily" : u.startsWith("/blog/") ? "weekly" : "monthly";
    return `  <url>\n    <loc>${DOMAIN}${u}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${freq}</changefreq>\n    <priority>${prio}</priority>\n  </url>`;
  }).join("\n") + `\n</urlset>\n`;

writeFileSync(join(ROOT, "public", "sitemap.xml"), xml);
console.log(`OK: sitemap.xml con ${urls.length} URLs (desde scripts/routes.json)`);
