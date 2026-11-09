// Convierte los pilares HTML estáticos (~/workspace/pilares-recurretumulta/)
// en páginas React siguiendo el patrón de src/pages/guias/radares.tsx.
// Uso: node scripts/convert-pillars.mjs
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(process.env.HOME, "workspace/pilares-recurretumulta");
const DEST = join(ROOT, "src/pages/guias");

function fileToComponentName(slug) {
  return slug.split("/").pop().split("-").map((p) => p[0].toUpperCase() + p.slice(1)).join("");
}

for (const file of readdirSync(SRC)) {
  if (!file.startsWith("guias-") || file === "guias-radares.html") continue;
  const html = readFileSync(join(SRC, file), "utf8");

  const slug = (html.match(/<!-- SLUG: ([^ ]+) -->/) || [])[1];
  const title = (html.match(/<!-- TITLE: ([^-]+?)(?: -->|$)/m) || [])[1]?.trim();
  const meta = (html.match(/<!-- META: (.+?) -->/) || [])[1]?.trim();
  if (!slug || !title) { console.error(`Faltan metadatos en ${file}`); continue; }

  const jsonLd = (html.match(/<script type="application\/ld\+json">\s*(\{[\s\S]*?\})\s*<\/script>/) || [])[1] || "{}";
  let body = (html.match(/<body[^>]*>([\s\S]*)<\/body>/) || [])[1] || "";

  // HTML -> JSX
  body = body
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/ class="/g, ' className="')
    .replace(/<(img|br|hr|input|meta|link)([^>]*?)>/g, "<$1$2 />")
    .replace(/&(gt|lt|amp|quot|nbsp);/g, (m) => m) // las entidades HTML valen en JSX
    .trim();

  const name = `Guia${fileToComponentName(slug)}Page`;
  const outFile = `${slug.split("/").pop()}.tsx`;

  const tsx = `import { useSeo } from "@/hooks/use-seo.ts";

const FAQ_SCHEMA = ${jsonLd};

export default function ${name}() {
  useSeo({
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(meta)},
    canonical: ${JSON.stringify(slug)},
    schema: FAQ_SCHEMA,
  });

  return (
    <div
      className="bg-slate-50 text-slate-900 antialiased min-h-screen"
      style={{ fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,sans-serif' }}
    >
${body
  .split("\n")
  .map((l) => "      " + l)
  .join("\n")}
    </div>
  );
}
`;
  writeFileSync(join(DEST, outFile), tsx);
  console.log(`✓ ${outFile} (${slug})`);
}
console.log("Añade las rutas en src/App.tsx y scripts/prerender.mjs");
