// Genera src/lib/blog-posts-db.ts con los posts PUBLICADOS de Convex
// y actualiza scripts/blog-slugs.txt con sus slugs.
// Uso: node scripts/export-blog-static.mjs
// Motivo: el prerender build-time no puede usar WebSocket (Convex client)
// en este entorno, así que los artículos se incrustan estáticos en el bundle.
// La página sigue prefiriendo la BD en cliente cuando la query resuelve.
import { writeFileSync, readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const CONVEX_URL = process.env.VITE_CONVEX_URL || "https://handsome-rhinoceros-259.eu-west-1.convex.cloud";

// Capturar el contenido PREVIO del fichero generado (puede tener correcciones
// locales aún no subidas a Convex) antes de sobrescribirlo.
const DB_PATH = join(ROOT, "src", "lib", "blog-posts-db.ts");
let prevTs = "";
let prev = [];
if (existsSync(DB_PATH)) {
  prevTs = readFileSync(DB_PATH, "utf8");
  const m = prevTs.match(/export const DB_POSTS[^=]*=\s*(\[[\s\S]*\]);?\s*$/);
  if (m) { try { prev = JSON.parse(m[1]); } catch { prev = []; } }
}

const res = await fetch(`${CONVEX_URL}/api/query`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ path: "blog:listPublished", args: {}, format: "json" }),
});
if (!res.ok) throw new Error(`Convex query falló: ${res.status}`);
const data = await res.json();
const posts = data.value ?? data;
if (!Array.isArray(posts)) throw new Error("Respuesta inesperada de Convex");

const clean = posts.map((p) => ({
  slug: p.slug,
  title: p.title,
  excerpt: p.excerpt,
  category: p.category,
  date: p.date,
  readTime: p.readTime,
  keywords: p.keywords,
  content: p.content,
}));

// JSON válido = literal TS válido. Escapar </script por seguridad en el bundle.
const literal = JSON.stringify(clean, null, 2).replace(/<\/script/gi, "<\\/script");

const ts = `// ⚠️ ARCHIVO GENERADO — no editar a mano.
// Generado por scripts/export-blog-static.mjs desde Convex (posts publicados).
// Regenerar tras publicar/despublicar artículos y antes de cada despliegue.
import type { BlogPost } from "./blog-data.ts";

export const DB_POSTS: BlogPost[] = ${literal};
`;

writeFileSync(join(ROOT, "src", "lib", "blog-posts-db.ts"), ts);
writeFileSync(join(ROOT, "scripts", "blog-slugs.txt"), clean.map((p) => p.slug).join("\n") + "\n");
console.log(`OK: ${clean.length} posts publicados → src/lib/blog-posts-db.ts + scripts/blog-slugs.txt`);

// ── Guarda anti-pérdida (05/10/2026) ─────────────────────────────────────
// Si el fichero local contenía correcciones que Convex aún no tiene, el
// export las habría borrado. Se deja un backup con timestamp para poder
// recuperarlas y se avisa por stderr.
// (Las 49 correcciones del 04/10/2026 siguen pendientes de subir a Convex;
//  ver hidden_files/blog-sync-2026-10-05/ del goal daily-blog-publishing.)
if (prev.length) {
  const lost = [];
  for (const p of prev) {
    const cur = clean.find((c) => c.slug === p.slug);
    if (!cur) { lost.push(p.slug + " (post eliminado del export)"); continue; }
    for (const f of ["title", "excerpt", "content", "keywords", "date", "readTime", "category"]) {
      if (JSON.stringify(p[f]) !== JSON.stringify(cur[f])) { lost.push(p.slug + "." + f); break; }
    }
  }
  if (lost.length) {
    const bak = join(ROOT, "src", "lib", `blog-posts-db.BAK-${Date.now()}.ts`);
    writeFileSync(bak, "// Backup pre-export con correcciones locales no sincronizadas a Convex.\n" + prevTs);
    console.error(`\n⚠️  AVISO: el export ha SOBRESCRITO ${lost.length} correcciones locales no presentes en Convex.`);
    console.error(`   Backup guardado en ${bak}. NO se han perdido: súbelas a Convex y re-exporta.`);
    console.error(`   Afectados: ${lost.slice(0, 10).join(", ")}${lost.length > 10 ? "…" : ""}\n`);
  }
}
