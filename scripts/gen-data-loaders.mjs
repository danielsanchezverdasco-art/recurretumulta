// Genera los loaders de import() dinámico para partir los datos por página.
// - src/lib/data-loaders.generated.ts: mapas clave -> () => import(modulo)
// - src/lib/blog-lite-cat/*.generated.ts: metadatos lite por categoría
// - src/lib/comparador-lite.generated.ts: COCHES_LITE para listados/componentes
// Ejecutar antes de cada build: node scripts/gen-data-loaders.mjs
import { readFileSync, readdirSync, writeFileSync, mkdirSync, unlinkSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const LIB = join(ROOT, "src", "lib");

const files = (re) => readdirSync(LIB).filter((f) => re.test(f)).sort();

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

// ── 1. Blog: slug -> módulo ──────────────────────────────────────────────
const BLOG_LOADERS = new Map();
const BLOG_DUP_WARNED = new Set();
const blogFiles = [...files(/^blog-posts-.*\.ts$/), "blog-data.ts"];
for (const f of blogFiles) {
  const text = readFileSync(join(LIB, f), "utf-8");
  const slugRe = /"?(slug)"?:\s*"([^"]+)"/g;
  let m;
  const slugs = [];
  while ((m = slugRe.exec(text)) !== null) slugs.push({ slug: m[2], index: m.index });
  for (let i = 0; i < slugs.length; i++) {
    const start = text.lastIndexOf("{", slugs[i].index);
    const end = i + 1 < slugs.length ? text.lastIndexOf("{", slugs[i + 1].index) : text.length;
    const block = text.slice(start, end);
    // Solo cuenta si el bloque parece un post (tiene title y content)
    if (/"?(title|content)"?:/.test(block)) {
      if (BLOG_LOADERS.has(slugs[i].slug)) {
        if (!BLOG_DUP_WARNED.has(slugs[i].slug)) {
          BLOG_DUP_WARNED.add(slugs[i].slug);
          console.warn(`  ⚠ slug duplicado "${slugs[i].slug}": ya definido en ${BLOG_LOADERS.get(slugs[i].slug)}, ignorado en ${f}`);
        }
      } else {
        BLOG_LOADERS.set(slugs[i].slug, f);
      }
    }
  }
}

// ── 2. Comparador: id -> fichero de marca ────────────────────────────────
function scanIds(pattern, exclude) {
  const map = new Map();
  for (const f of files(pattern)) {
    if (exclude.test(f)) continue;
    const text = readFileSync(join(LIB, f), "utf-8");
    const re = /\bid:\s*"([^"]+)"/g;
    let m;
    while ((m = re.exec(text)) !== null) {
      if (!map.has(m[1])) map.set(m[1], f);
    }
  }
  return map;
}
const CAMPER_LOADERS_TMP = scanIds(/^comparador-campers-.*\.ts$/, /^$/);
const COCHE_LOADERS = scanIds(/^comparador-coches-.*\.ts$/, /^comparador-coches-data\.ts$/);
for (const [k, v] of CAMPER_LOADERS_TMP) { if (!COCHE_LOADERS.has(k)) COCHE_LOADERS.set(k, v); }
const MOTO_LOADERS = scanIds(/^comparador-motos-.*\.ts$/, /^comparador-motos-data\.ts$/);
const PATINETE_LOADERS = scanIds(/^comparador-patinetes-.*\.ts$/, /^comparador-patinetes-data\.ts$/);
const CAMPER_LOADERS = CAMPER_LOADERS_TMP; // alias para el reporte
// 19/10/2026 (router 5/6): dominio "autocaravana" para las fichas de
// comparador-autocaravanas-*.ts (mismo patrón que campers/coches/motos).
const AUTOCARAVANA_LOADERS = scanIds(/^comparador-autocaravanas-.*\.ts$/, /^comparador-autocaravanas-data\.ts$/);
// 20/10/2026 (merlin-caravanas-rutas-v4): dominio "caravana" para las fichas de
// comparador-caravanas-*.ts (mismo patrón que autocaravanas/campers).
const CARAVANA_LOADERS = scanIds(/^comparador-caravanas-.*\.ts$/, /^$/);

// ── 3. Historia: id -> fichero ───────────────────────────────────────────
const HISTORIA_LOADERS = new Map();
for (const f of files(/^historia-.*\.ts$/)) {
  const text = readFileSync(join(LIB, f), "utf-8");
  // Indentación tolerante: antes exigía exactamente 2 espacios y las entradas
  // con otra indentación se perdían en silencio (-> loader ausente -> 404).
  const re = /^\s*"([^"]+)"\s*:\s*\{/gm;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (!HISTORIA_LOADERS.has(m[1])) HISTORIA_LOADERS.set(m[1], f);
  }
}

// ── 4. EuroNCAP: fichaId -> fichero ──────────────────────────────────────
const EURONCAP_LOADERS = new Map();
for (const f of files(/^(seguridad-euroncap|euroncap-.*)\.ts$/)) {
  const text = readFileSync(join(LIB, f), "utf-8");
  const re = /\bfichaId:\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (!EURONCAP_LOADERS.has(m[1])) EURONCAP_LOADERS.set(m[1], f);
  }
}

// ── 5. Galerías: slug -> galerias-coches.ts ──────────────────────────────
const GALERIA_LOADERS = new Map();
{
  const text = readFileSync(join(LIB, "galerias-coches.ts"), "utf-8");
  // Indentación tolerante (ver §3).
  const re = /^\s*"([^"]+)"\s*:\s*\[/gm;
  let m;
  while ((m = re.exec(text)) !== null) GALERIA_LOADERS.set(m[1], "galerias-coches.ts");
}

// ── 6. Blog lite por categoría ───────────────────────────────────────────
function desescaparComillas(s) {
  // Igual que en gen-blog-lite.mjs: los posts JSON guardan alt=\"...\" (y
  // algunos alt=\\\"...\\\"); sin desescapar, el alt salía con \" literales.
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
  const altM = tag.match(/alt=("[^"]*"|'[^']*'|[^>]+)/i);
  const alt = altM ? altM[1].replace(/^["']|["']$/g, "").replace(/\s*\/?$/, "").trim() : "";
  return { src, alt };
}
const byCategory = new Map();
for (const f of blogFiles) {
  const text = readFileSync(join(LIB, f), "utf-8");
  const slugRe = /"?(slug)"?:\s*"([^"]+)"/g;
  let m;
  const slugs = [];
  while ((m = slugRe.exec(text)) !== null) slugs.push({ slug: m[2], index: m.index });
  for (let i = 0; i < slugs.length; i++) {
    const start = text.lastIndexOf("{", slugs[i].index);
    const end = i + 1 < slugs.length ? text.lastIndexOf("{", slugs[i + 1].index) : text.length;
    const block = text.slice(start, end);
    const get = (re) => {
      const mm = block.match(re);
      return mm ? mm[2] : "";
    };
    if (!/"?(title|content)"?:/.test(block)) continue;
    const title = get(/"?(title)"?:\s*"((?:[^"\\]|\\.)*)"/).replace(/\\"/g, '"');
    const excerpt = get(/"?(excerpt)"?:\s*"((?:[^"\\]|\\.)*)"/).replace(/\\"/g, '"').slice(0, 200);
    const category = get(/"?(category)"?:\s*"([^"]*)"/) || "Actualidad";
    const date = get(/"?(date)"?:\s*"([^"]*)"/);
    const localeM = block.match(/"?(locale)"?:\s*"([^"]*)"/);
    const kwM = block.match(/"?(keywords)"?:\s*\[([\s\S]*?)\]/);
    const keywords = kwM
      ? [...kwM[2].matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((x) => x[1].replace(/\\"/g, '"'))
      : [];
    const contentTpl = block.match(/"?(content)"?:\s*`([\s\S]*?)`\s*[,}]/);
    // Sin esto, los posts con content en string (no plantilla) salían sin
    // hero en las tarjetas por categoría, a diferencia del lite principal.
    // El desescape de \" lo hace postHeroImage (desescaparComillas).
    const contentStr = contentTpl ? null : block.match(/"?(content)"?:\s*"((?:[^"\\]|\\.)*)"/);
    const hero = postHeroImage(contentTpl ? contentTpl[2] : contentStr ? contentStr[2] : "");
    const words = contentTpl ? contentTpl[2].split(/\s+/).length : 0;
    const readTime = Math.max(1, Math.round(words / 200));
    const arr = byCategory.get(category) ?? [];
    arr.push({
      slug: slugs[i].slug, title, excerpt, category, date,
      locale: localeM ? localeM[2] : "es",
      heroSrc: hero ? hero.src : "", heroAlt: hero ? hero.alt : "",
      keywords, readTime,
    });
    byCategory.set(category, arr);
  }
}
const slugify = (s) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const CAT_DIR = join(LIB, "blog-lite-cat");
mkdirSync(CAT_DIR, { recursive: true });
const CAT_LOADERS = new Map();
const catNames = new Set();
for (const [cat, posts] of [...byCategory.entries()].sort()) {
  const name = `cat-${slugify(cat)}.generated.ts`;
  catNames.add(name);
  const out = `// Generado por scripts/gen-data-loaders.mjs — NO EDITAR.\n// Metadatos lite de la categoría ${JSON.stringify(cat)} (${posts.length} posts).\nimport type { BlogLitePost } from "../blog-lite.generated.ts";\nexport const BLOG_LITE_CAT: BlogLitePost[] = ${JSON.stringify(posts)};\n`;
  writeFileSync(join(CAT_DIR, name), out);
  CAT_LOADERS.set(cat, `blog-lite-cat/${name}`);
}
// Limpia ficheros de categorías obsoletas (renombradas/eliminadas)
for (const f of readdirSync(CAT_DIR)) {
  if (f.endsWith(".generated.ts") && !catNames.has(f)) {
    unlinkSync(join(CAT_DIR, f));
  }
}

// ── 7. COCHES_LITE ──────────────────────────────────────────────────────
const LITE_FIELDS = ["id", "marca", "modelo", "tipo", "categoria", "precioDesde", "potenciaCv", "autonomiaKm", "maleteroL", "cargaRapidaKw", "imagen", "imagenOficial", "etiquetaDgt"];
function strVal(block, key) {
  const m = block.match(new RegExp(`\\b${key}:\\s*"((?:[^"\\\\]|\\\\.)*)"`));
  return m ? m[1].replace(/\\"/g, '"') : null;
}
function numVal(block, key) {
  const m = block.match(new RegExp(`\\b${key}:\\s*(-?[0-9]+(?:\\.[0-9]+)?|null)`));
  return m ? (m[1] === "null" ? null : Number(m[1])) : null;
}
const cochesLite = [];
for (const f of files(/^comparador-coches-.*\.ts$/)) {
  if (/^comparador-coches-data\.ts$/.test(f)) continue;
  const text = readFileSync(join(LIB, f), "utf-8");
  const idRe = /\bid:\s*"([^"]+)"/g;
  let m;
  const ids = [];
  while ((m = idRe.exec(text)) !== null) ids.push({ id: m[1], index: m.index });
  for (let i = 0; i < ids.length; i++) {
    const start = text.lastIndexOf("{", ids[i].index);
    const end = i + 1 < ids.length ? text.lastIndexOf("{", ids[i + 1].index) : text.length;
    const block = text.slice(start, end);
    const entry = { id: ids[i].id };
    for (const k of ["marca", "modelo", "tipo", "categoria", "imagen", "imagenOficial", "etiquetaDgt"]) entry[k] = strVal(block, k);
    for (const k of ["precioDesde", "potenciaCv", "autonomiaKm", "maleteroL", "cargaRapidaKw"]) entry[k] = numVal(block, k);
    cochesLite.push(entry);
  }
}

// ── Emite data-loaders/<letra>.ts ───────────────────────────────────────
// El mapa slug->import() de 8.156 entradas pesaba 880KB y lo cargaba CUALQUIER
// página que usara un loader. Partido por primera letra del slug: cada página
// carga solo el chunk de su letra (~30KB raw, ~8KB gzip).
const DOMAINS = {
  blog: BLOG_LOADERS,
  coche: COCHE_LOADERS,
  moto: MOTO_LOADERS,
  patinete: PATINETE_LOADERS,
  camper: CAMPER_LOADERS,
  autocaravana: AUTOCARAVANA_LOADERS,
  caravana: CARAVANA_LOADERS,
  historia: HISTORIA_LOADERS,
  euroncap: EURONCAP_LOADERS,
  galeria: GALERIA_LOADERS,
  cat: CAT_LOADERS,
};
const bucketOf = (k) => {
  const c = (k[0] || "_").toLowerCase();
  return /[0-9a-z]/.test(c) ? c : "_";
};
const buckets = new Map();
for (const [domain, map] of Object.entries(DOMAINS)) {
  for (const [key, file] of map) {
    const b = bucketOf(key);
    if (!buckets.has(b)) buckets.set(b, {});
    const entry = buckets.get(b);
    if (!entry[domain]) entry[domain] = [];
    entry[domain].push([key, file]);
  }
}
const DL_DIR = join(LIB, "data-loaders");
mkdirSync(DL_DIR, { recursive: true });
for (const [b, entry] of [...buckets.entries()].sort()) {
  const parts = [];
  for (const [domain, pairs] of Object.entries(entry)) {
    const lines = pairs
      .sort((x, y) => x[0].localeCompare(y[0]))
      .map(([k, f]) => `    ${JSON.stringify(k)}: () => import("../${esc(f)}"),`);
    parts.push(`  ${domain}: {\n${lines.join("\n")}\n  }`);
  }
  const out = `// Generado por scripts/gen-data-loaders.mjs — NO EDITAR A MANO.
// Loaders de import() dinámico para slugs que empiezan por "${b}".
export const LOADERS: Record<string, Record<string, () => Promise<unknown>>> = {
${parts.join(",\n")}
};
`;
  writeFileSync(join(DL_DIR, `${b}.ts`), out);
}
// Limpia letras obsoletas de generaciones anteriores
for (const f of readdirSync(DL_DIR)) {
  if (/^[0-9a-z_]\.ts$/.test(f) && !buckets.has(f.slice(0, -3))) {
    unlinkSync(join(DL_DIR, f));
  }
}
console.log("data-loaders: letras", buckets.size);

const liteOut = `// Generado por scripts/gen-data-loaders.mjs — NO EDITAR A MANO.
// Subconjunto ligero de COCHES_COMPARADOR para listados y componentes
// (portada, blog). Las fichas cargan el modelo completo vía COCHE_LOADERS.
export type CocheLite = {
  id: string;
  marca: string | null;
  modelo: string | null;
  tipo: string | null;
  categoria: string | null;
  precioDesde: number | null;
  potenciaCv: number | null;
  autonomiaKm: number | null;
  maleteroL: number | null;
  cargaRapidaKw: number | null;
  imagen: string | null;
  imagenOficial: string | null;
  etiquetaDgt: string | null;
};
export const COCHES_LITE: CocheLite[] = ${JSON.stringify(cochesLite)};
`;
writeFileSync(join(LIB, "comparador-lite.generated.ts"), liteOut);

// ── 7b. AUTOCARAVANAS_LITE ─────────────────────────────────────────────
// Subconjunto ligero de AUTOCARAVANAS_COMPARADOR para el hub /autocaravanas/.
// Las fichas cargan el modelo completo vía el dominio "autocaravana" (§2).
// 27/10/2026 (Cosa, ORD-20261027-0613 p2): el hub solo leía los módulos de
// src/lib/ y dejaba fuera las fichas de src/lib/autocaravanas/ (lotes Merlín),
// p. ej. la Adria Sonic 700 SL. Ahora lee ambas carpetas sin duplicar ids.
const autocaravanasLite = [];
const autocaravanasLiteIds = new Set();
// Fichas camper movidas a /campers/ con 301! en public/_redirects: la tarjeta
// enlaza directamente al destino final para no enlazar a una redirección.
const AUTOC_A_CAMPERS = new Set();
try {
  const red = readFileSync(join(ROOT, "public", "_redirects"), "utf-8");
  const reRed = /^\/autocaravanas\/([^\s/]+)\/\s+\/campers\/\1\/\s+301!?\s*$/gm;
  let mr;
  while ((mr = reRed.exec(red)) !== null) AUTOC_A_CAMPERS.add(mr[1]);
} catch {
  /* sin _redirects: todas las tarjetas apuntan a /autocaravanas/ */
}
const AUTOC_SUB = join(LIB, "autocaravanas");
const autocaravanasLiteFiles = [
  ...files(/^comparador-autocaravanas-.*\.ts$/).map((f) => join(LIB, f)),
  ...readdirSync(AUTOC_SUB)
    .filter((f) => /^comparador-autocaravanas-.*\.ts$/.test(f))
    .sort()
    .map((f) => join(AUTOC_SUB, f)),
];
for (const fp of autocaravanasLiteFiles) {
  if (/comparador-autocaravanas-data\.ts$/.test(fp)) continue;
  const text = readFileSync(fp, "utf-8");
  const idRe = /\bid:\s*"([^"]+)"/g;
  let m;
  const ids = [];
  while ((m = idRe.exec(text)) !== null) ids.push({ id: m[1], index: m.index });
  for (let i = 0; i < ids.length; i++) {
    const start = text.lastIndexOf("{", ids[i].index);
    const end = i + 1 < ids.length ? text.lastIndexOf("{", ids[i + 1].index) : text.length;
    const block = text.slice(start, end);
    const entry = { id: ids[i].id };
    for (const k of ["marca", "modelo", "tipo", "imagen", "imagenOficial"]) entry[k] = strVal(block, k);
    for (const k of ["plazas", "precioDesde"]) entry[k] = numVal(block, k);
    entry.ruta = AUTOC_A_CAMPERS.has(entry.id) ? `/campers/${entry.id}/` : `/autocaravanas/${entry.id}/`;
    if (autocaravanasLiteIds.has(entry.id)) continue;
    autocaravanasLiteIds.add(entry.id);
    autocaravanasLite.push(entry);
  }
}
const autocaravanasLiteOut = `// Generado por scripts/gen-data-loaders.mjs — NO EDITAR A MANO.
// Subconjunto ligero de AUTOCARAVANAS_COMPARADOR para el hub /autocaravanas/.
// Las fichas cargan el modelo completo vía el dominio "autocaravana".
export type AutocaravanaLite = {
  id: string;
  marca: string | null;
  modelo: string | null;
  tipo: string | null;
  plazas: number | null;
  precioDesde: number | null;
  imagen: string | null;
  imagenOficial: string | null;
  ruta: string;
};
export const AUTOCARAVANAS_LITE: AutocaravanaLite[] = ${JSON.stringify(autocaravanasLite)};
`;
writeFileSync(join(LIB, "autocaravanas-lite.generated.ts"), autocaravanasLiteOut);

console.log("data-loaders:", {
  blog: BLOG_LOADERS.size,
  coches: COCHE_LOADERS.size,
  motos: MOTO_LOADERS.size,
  patinetes: PATINETE_LOADERS.size,
  campers: CAMPER_LOADERS.size,
  autocaravanas: AUTOCARAVANA_LOADERS.size,
  caravanas: CARAVANA_LOADERS.size,
  historia: HISTORIA_LOADERS.size,
  euroncap: EURONCAP_LOADERS.size,
  galerias: GALERIA_LOADERS.size,
  categorias: CAT_LOADERS.size,
  cochesLite: cochesLite.length,
});

// ── 8. Chequeo cruzado: todo slug de scripts/*-slugs.txt debe tener loader ──
// Un slug listado sin datos genera una ruta que el prerender no puede
// resolver -> soft 404 en producción (incidente 12/10/2026: 2 slugs de
// artículos eliminados seguían en blog-slugs.txt). Aviso ruidoso; no se
// aborta el build porque safe-publish-v2.sh + verify-dist.py son las puertas.
{
  const txtSlugs = (f) =>
    readFileSync(join(ROOT, f), "utf-8").split("\n").map((s) => s.trim()).filter(Boolean);
  const checks = [
    ["scripts/blog-slugs.txt", BLOG_LOADERS],
    ["scripts/coches-slugs.txt", COCHE_LOADERS],
    ["scripts/motos-slugs.txt", MOTO_LOADERS],
    ["scripts/patinetes-slugs.txt", PATINETE_LOADERS],
    ["scripts/campers-slugs.txt", CAMPER_LOADERS],
    ["scripts/caravanas-slugs.txt", CARAVANA_LOADERS],
  ];
  let missing = 0;
  for (const [file, map] of checks) {
    try {
      for (const s of txtSlugs(file)) {
        if (!map.has(s)) {
          missing++;
          console.warn(`  ⚠ ${file}: slug "${s}" SIN loader (sin datos en src/lib) -> soft 404 si se publica`);
        }
      }
    } catch {}
  }
  if (missing === 0) console.log("chequeo slugs<->loaders: OK, 0 slugs huérfanos");
  else console.warn(`  ⚠ total slugs huérfanos: ${missing} (eliminarlos de *-slugs.txt o restaurar sus datos)`);
}
