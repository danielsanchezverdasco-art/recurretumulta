// Sync local corrections → Convex via blog:adminUpsertBySlug (token-protected).
// Usage: node scripts/sync-blog-correcciones.mjs
// Reads payloads from the prepared hidden_files dir + the local-only post.
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const CONVEX_URL = process.env.VITE_CONVEX_URL || "https://handsome-rhinoceros-259.eu-west-1.convex.cloud";
const TOKEN = readFileSync("/home/hatch/.convex-admin-token-tmp", "utf8").trim();

const payloads = JSON.parse(readFileSync(
  "/home/hatch/workspace/goals/recurretumulta-online-daily-blog-publishing/hidden_files/blog-sync-2026-10-05/payloads.json", "utf8"));

// The local-only post (full data lives in the generated file).
const dbTs = readFileSync(join(ROOT, "src", "lib", "blog-posts-db.ts"), "utf8");
const m = dbTs.match(/export const DB_POSTS[^=]*=\s*(\[[\s\S]*\]);?\s*$/);
// El exportador deja trailing comma (válido en TS, no en JSON): quitarla.
const dbPosts = m ? JSON.parse(m[1].replace(/,\s*\]$/, "]")) : [];
const localOnly = dbPosts.find((p) => p.slug === "deca-digital-obligatorio-5-octubre-2026");

const jobs = payloads.map((p) => ({ slug: p.slug, fields: p.fields }));
if (localOnly) {
  const { slug, title, excerpt, category, date, readTime, keywords, content } = localOnly;
  jobs.push({ slug, fields: { title, excerpt, category, date, readTime, keywords, content, published: true } });
}

let ok = 0, fail = 0;
const failures = [];
for (const job of jobs) {
  const body = JSON.stringify({ path: "blog:adminUpsertBySlug", args: { token: TOKEN, slug: job.slug, ...job.fields }, format: "json" });
  try {
    const res = await fetch(`${CONVEX_URL}/api/mutation`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });
    const data = await res.json();
    if (data.status === "success") { ok++; }
    else { fail++; failures.push(`${job.slug}: ${JSON.stringify(data).slice(0, 160)}`); }
  } catch (e) { fail++; failures.push(`${job.slug}: ${String(e).slice(0, 120)}`); }
}
console.log(`SYNC DONE: ${ok} ok, ${fail} fallos de ${jobs.length}`);
for (const f of failures) console.log("FALLO:", f);
process.exit(fail ? 1 : 0);
