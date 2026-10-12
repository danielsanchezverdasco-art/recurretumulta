#!/usr/bin/env node
// Barredor GLOBAL de enlaces internos rotos en blog-posts-*.ts
// Uso: node scripts/sweep-enlaces-rotos.mjs [--fix-list]
// Sin argumentos: informa. Con --fix-list: emite JSON con los rotos para su revisión.
//
// Comprueba:
//   /blog/<slug>    -> existe en los slugs de blog-posts-*.ts
//   /coches/<id>    -> existe en comparador-coches-*.ts (campo id: "...")
//   /motos/<id>     -> existe en comparador-motos-*.ts
//   /patinetes/<id> -> existe en comparador-patinetes-*.ts
//   /guias/<x>, /herramientas/<x>, /multas/<x> -> existe como <Route path="..."> en src/App.tsx
import fs from "node:fs";
import path from "node:path";

const ROOT = "/home/hatch/workspace/recurretumulta-v2";
const libDir = path.join(ROOT, "src/lib");
const files = fs.readdirSync(libDir).filter(f => f.startsWith("blog-posts-") && f.endsWith(".ts"));

function collectSlugs() {
  const s = new Set();
  for (const f of files) {
    const t = fs.readFileSync(path.join(libDir, f), "utf8");
    for (const m of t.matchAll(/"slug":\s*"([^"]+)"/g)) s.add(m[1]);
    // ficheros con clave sin comillas: slug: "..." (30 ficheros, 301 slugs)
    for (const m of t.matchAll(/(?<![\w"])slug:\s*"([^"]+)"/g)) s.add(m[1]);
  }
  return s;
}
function collectIds(prefix) {
  const s = new Set();
  const fs2 = fs.readdirSync(libDir).filter(f => f.startsWith(prefix) && f.endsWith(".ts"));
  for (const f of fs2) {
    const t = fs.readFileSync(path.join(libDir, f), "utf8");
    for (const m of t.matchAll(/^\s*id:\s*"([^"]+)"/gm)) s.add(m[1]);
  }
  return s;
}
function collectRoutes() {
  const app = fs.readFileSync(path.join(ROOT, "src/App.tsx"), "utf8");
  const s = new Set();
  for (const m of app.matchAll(/<Route\s+path="([^"]+)"/g)) s.add(m[1].replace(/^\/+/, ""));
  return s;
}

const blogSlugs = collectSlugs();
const cocheIds = collectIds("comparador-coches-");
const motoIds = collectIds("comparador-motos-");
const patineteIds = collectIds("comparador-patinetes-");
const routes = collectRoutes();

console.error(`slugs: ${blogSlugs.size} | coches: ${cocheIds.size} | motos: ${motoIds.size} | patinetes: ${patineteIds.size} | rutas: ${routes.size}`);

function normalize(href) {
  let h = href.replace(/^https?:\/\/recurretumulta\.online/i, "");
  h = h.split("#")[0].split("?")[0];
  return h;
}

// Sugerencia: slugs que comparten tokens con el objetivo
function suggest(target, pool, n = 3) {
  const toks = target.toLowerCase().split(/[-_]+/).filter(t => t.length > 2 && !/^(20\d\d|precio|ficha|tecnica)$/.test(t));
  const scored = [];
  for (const s of pool) {
    let score = 0;
    for (const t of toks) if (s.includes(t)) score++;
    if (score > 0) scored.push([score, s]);
  }
  scored.sort((a, b) => b[0] - a[0]);
  return scored.slice(0, n).map(x => x[1]);
}

const broken = [];
for (const f of files) {
  const t = fs.readFileSync(path.join(libDir, f), "utf8");
  const lines = t.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trimStart().startsWith("//")) continue; // comentarios: p. ej. <a href=/coches/<data-id> en la cabecera
    for (const m of line.matchAll(/<a\s+href=(?:"([^"]+)"|'([^']+)'|([^\s>]+))/g)) {
      const raw = m[1] ?? m[2] ?? m[3];
      const h = normalize(raw);
      const mm = h.match(/^\/(blog|coches|motos|patinetes|guias|herramientas|multas)\/([^/\s>]+)/);
      if (!mm) continue;
      const [, kind, key] = mm;
      let ok = false, pool = null, routeKey = null;
      if (kind === "blog") { ok = blogSlugs.has(key); pool = blogSlugs; }
      else if (kind === "coches") { ok = cocheIds.has(key); pool = cocheIds; }
      else if (kind === "motos") { ok = motoIds.has(key); pool = motoIds; }
      else if (kind === "patinetes") { ok = patineteIds.has(key); pool = patineteIds; }
      else {
        routeKey = `${kind}/${key}`;
        // rutas dinámicas tipo multas/:provincia -> cualquier segmento vale
        const dynamic = routes.has(`${kind}/:provincia`) || routes.has(`${kind}/:slug`) || routes.has(`${kind}/:ccaa`) || routes.has(`${kind}/:termino`);
        ok = routes.has(routeKey) || dynamic;
      }
      if (!ok) {
        broken.push({
          file: f, line: i + 1, href: raw, kind, key,
          sugerencias: pool ? suggest(key, pool) : []
        });
      }
    }
  }
}

if (process.argv.includes("--fix-list")) {
  console.log(JSON.stringify(broken, null, 1));
} else {
  console.log(`\nENLACES ROTOS: ${broken.length}\n`);
  for (const b of broken) {
    console.log(`${b.file}:${b.line}  ${b.href}`);
    if (b.sugerencias.length) console.log(`    -> sugerencias: ${b.sugerencias.join(" | ")}`);
  }
}
