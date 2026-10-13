// Regenera public/sitemap.xml con las URLs reales.
// ÚNICA FUENTE DE VERDAD DE RUTAS: scripts/routes.json (diseño 11/10/2026).
// Estáticas + /multas/{provincia} + /comunidades/{ccaa} + slugFiles,
// menos las rutas de sitemapExclude (legales con noindex).
// Uso: node scripts/gen-sitemap.mjs
import { writeFileSync, readFileSync } from "node:fs";
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
const routes = [
  ...(ROUTES_CFG.staticRoutes || []),
  ...(ROUTES_CFG.provinceSlugs || []).map((p) => `/multas/${p}`),
  ...(ROUTES_CFG.communitySlugs || []).map((c) => `/comunidades/${c}`),
  ...(ROUTES_CFG.slugFiles || []).flatMap((sf) =>
    readSlugs(sf.file).map((s) => `${sf.prefix}${s}`)
  ),
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
