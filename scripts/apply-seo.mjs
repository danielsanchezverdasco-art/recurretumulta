// Aplica los títulos/meta SEO finales al HTML prerenderizado.
// Fuente ÚNICA de títulos: src/content/seo/titulos.csv (url,titulo_nuevo,meta_nueva…).
// Uso (después del prerender): node scripts/apply-seo.mjs [dist]
// Marca cada página con <meta name="rtm-seo" data-path="…"> para que useSeo no
// pise el título en el cliente (ver src/hooks/use-seo.ts).
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
const DIST = process.argv[2] || "dist";
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
function parseCsv(txt) {
  const rows = []; let row = [], f = "", q = false;
  for (let i = 0; i < txt.length; i++) {
    const c = txt[i];
    if (q) { if (c === '"' && txt[i + 1] === '"') { f += '"'; i++; } else if (c === '"') q = false; else f += c; }
    else if (c === '"') q = true; else if (c === ",") { row.push(f); f = ""; }
    else if (c === "\n") { row.push(f); rows.push(row); row = []; f = ""; } else if (c !== "\r") f += c;
  }
  if (f || row.length) { row.push(f); rows.push(row); }
  return rows;
}
const [head, ...rows] = parseCsv(readFileSync("src/content/seo/titulos.csv", "utf8"));
const iu = head.indexOf("url"), it = head.indexOf("titulo_nuevo"), im = head.indexOf("meta_nueva");
let ok = 0, falta = 0;
const vistos = new Set();
for (const r of rows) {
  const url = r[iu]; const t = (r[it] || "").trim(); const m = (r[im] || "").trim();
  if (!url || !t) continue;
  if (vistos.has(t)) throw new Error(`Título duplicado en titulos.csv: ${t}`);
  vistos.add(t);
  const path = new URL(url).pathname.replace(/\/$/, "");
  const file = join(DIST, path, "index.html");
  if (!existsSync(file)) { falta++; continue; }
  let h = readFileSync(file, "utf8");
  h = h.replace(/<title>[^<]*<\/title>/, `<title>${esc(t)}</title>`);
  const setAttr = (re, val) => { h = h.replace(re, (tag) => tag.replace(/content="[^"]*"/, `content="${esc(val)}"`)); };
  setAttr(/<meta[^>]*property="og:title"[^>]*>/, t);
  setAttr(/<meta[^>]*name="twitter:title"[^>]*>/, t);
  if (m) {
    setAttr(/<meta[^>]*name="description"[^>]*>/, m);
    setAttr(/<meta[^>]*property="og:description"[^>]*>/, m);
    setAttr(/<meta[^>]*name="twitter:description"[^>]*>/, m);
  }
  // 18/10/2026: quitar también el salto de línea que deja la pasada anterior (antes sumaba una línea en blanco por pasada).
  h = h.replace(/<meta name="rtm-seo"[^>]*>\n?/g, "").replace(/\n{2,}<\/head>/, "\n</head>");
  h = h.replace("</head>", `<meta name="rtm-seo" data-path="${esc(path + "/")}">\n</head>`);
  writeFileSync(file, h); ok++;
}
console.log(`[apply-seo] ${ok} páginas con título final; ${falta} URLs del CSV sin HTML en ${DIST}`);
