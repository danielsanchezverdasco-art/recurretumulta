// Genera src/lib/radares-por-provincia.generated.ts desde docs/radares/*.csv.
//
// POR QUÉ: las páginas de provincia (/multas/<slug>/) incorporan la sección
// «Radares en <provincia>» con los radares oficiales de esa provincia, cada
// uno enlazando a su ficha /radares/<id_unico>/ (mapa 2D + Street View).
// La fuente de verdad sigue siendo los CSV por comunidad de docs/radares/
// (listado DGT DATEX II + organismos autonómicos); este script solo los
// reordena por provincia. NO inventa radares: provincia sin filas en los CSV
// queda con 0 radares y la página lo declara.
//
// MAPEO provincia (CSV) → slug de /multas/: la página de cada provincia en
// src/lib/provincias-data.ts. En las comunidades uniprovinciales la app usa
// la página de la capital (Oviedo/Asturias, Santander/Cantabria,
// Logroño/La Rioja, Pamplona/Navarra, Palma/Illes Balears), tal como la
// propia provincias-data.ts declara en su campo `ccaa`. El script valida
// que cada slug destino existe en provincias-data.ts y aborta si no.
//
// Uso: node scripts/gen-radares-provincias.mjs
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIR_CSV = join(ROOT, "docs", "radares");
const SALIDA = join(ROOT, "src", "lib", "radares-por-provincia.generated.ts");

const PROVINCIA_A_SLUG = {
  "A Coruña": "a-coruna",
  Albacete: "albacete",
  Alicante: "alicante",
  Asturias: "oviedo",
  Cantabria: "santander",
  "Castellón": "castellon",
  "Ciudad Real": "ciudad-real",
  Cuenca: "cuenca",
  "Cáceres": "caceres",
  Guadalajara: "guadalajara",
  Huesca: "huesca",
  "Illes Balears": "palma-mallorca",
  "La Rioja": "logrono",
  "Las Palmas": "las-palmas",
  "León": "leon",
  Lugo: "lugo",
  Murcia: "murcia",
  Navarra: "pamplona",
  Ourense: "ourense",
  Palencia: "palencia",
  Pontevedra: "pontevedra",
  Salamanca: "salamanca",
  "Santa Cruz de Tenerife": "santa-cruz-tenerife",
  Segovia: "segovia",
  Soria: "soria",
  Teruel: "teruel",
  Toledo: "toledo",
  Valencia: "valencia",
  Valladolid: "valladolid",
  Zamora: "zamora",
  Zaragoza: "zaragoza",
  Madrid: "madrid",
  Almería: "almeria",
  Cádiz: "cadiz",
  Córdoba: "cordoba",
  Granada: "granada",
  Huelva: "huelva",
  Jaén: "jaen",
  Málaga: "malaga",
  Sevilla: "sevilla",
  Ávila: "avila",
  Burgos: "burgos",
  Badajoz: "badajoz",
  Barcelona: "barcelona",
  Girona: "girona",
  Lleida: "lleida",
  Tarragona: "tarragona",
  Álava: "vitoria",
  Bizkaia: "bilbao",
  Gipuzkoa: "san-sebastian",
};

// Parser CSV mínimo con soporte de comillas (las notas pueden llevar comas).
function parseCsv(texto) {
  const filas = [];
  let fila = [], campo = "", enComillas = false;
  const s = texto.replace(/\r\n/g, "\n");
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (enComillas) {
      if (c === '"') {
        if (s[i + 1] === '"') { campo += '"'; i++; }
        else enComillas = false;
      } else campo += c;
    } else if (c === '"') enComillas = true;
    else if (c === ",") { fila.push(campo); campo = ""; }
    else if (c === "\n") { fila.push(campo); filas.push(fila); fila = []; campo = ""; }
    else campo += c;
  }
  if (campo !== "" || fila.length) { fila.push(campo); filas.push(fila); }
  return filas.filter((f) => f.length > 1 || (f.length === 1 && f[0].trim() !== ""));
}

// Slugs válidos según la propia app.
const provinciasTs = readFileSync(join(ROOT, "src", "lib", "provincias-data.ts"), "utf8");
const slugsValidos = new Set([...provinciasTs.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]));
for (const [prov, slug] of Object.entries(PROVINCIA_A_SLUG)) {
  if (!slugsValidos.has(slug)) {
    console.error(`[gen-radares-provincias] slug destino inexistente en provincias-data.ts: ${prov} -> ${slug}`);
    process.exit(1);
  }
}

const porSlug = new Map();
let total = 0;
const ficheros = readdirSync(DIR_CSV).filter((f) => f.endsWith(".csv")).sort();
for (const f of ficheros) {
  const filas = parseCsv(readFileSync(join(DIR_CSV, f), "utf8"));
  if (filas.length < 2) continue; // CSV solo con cabecera (p. ej. País Vasco)
  const cab = filas[0].map((h) => h.trim());
  const idx = Object.fromEntries(cab.map((h, i) => [h, i]));
  for (const fila of filas.slice(1)) {
    const g = (k) => (fila[idx[k]] ?? "").trim();
    const provincia = g("provincia");
    const slug = PROVINCIA_A_SLUG[provincia];
    if (!slug) {
      console.error(`[gen-radares-provincias] provincia sin mapeo: "${provincia}" (${f})`);
      process.exit(1);
    }
    const lim = g("velocidad_limite");
    const radar = {
      id: g("id_unico"),
      carretera: g("carretera"),
      pk: g("pk"),
      sentido: g("sentido") || null,
      tipo: g("tipo") || null,
      limite: lim === "" ? null : Number(lim),
      municipio: g("municipio") || null,
      lat: g("lat") === "" ? null : Number(g("lat")),
      lon: g("lon") === "" ? null : Number(g("lon")),
    };
    if (!radar.id) { console.error(`[gen-radares-provincias] fila sin id_unico en ${f}`); process.exit(1); }
    if (!porSlug.has(slug)) porSlug.set(slug, []);
    porSlug.get(slug).push(radar);
    total++;
  }
}

for (const lista of porSlug.values()) {
  lista.sort((a, b) =>
    a.carretera.localeCompare(b.carretera, "es") || (parseFloat(a.pk) || 0) - (parseFloat(b.pk) || 0)
  );
}

const cuerpo = [...porSlug.entries()]
  .sort((a, b) => a[0].localeCompare(b[0], "es"))
  .map(([slug, lista]) => `  "${slug}": ${JSON.stringify(lista)},`)
  .join("\n");

const salida = `// GENERADO por scripts/gen-radares-provincias.mjs desde docs/radares/*.csv.
// NO editar a mano: regenerar con \`node scripts/gen-radares-provincias.mjs\`.
// Fuente: listado oficial de radares (DGT DATEX II + organismos autonómicos).
// Solo provincias con radares en el dataset; el resto queda a 0 y la página
// de provincia lo declara (no se inventan radares).

export type RadarDeProvincia = {
  id: string;
  carretera: string;
  pk: string;
  sentido: string | null;
  tipo: string | null;
  limite: number | null;
  municipio: string | null;
  lat: number | null;
  lon: number | null;
};

export const RADARES_POR_PROVINCIA: Record<string, RadarDeProvincia[]> = {
${cuerpo}
};

export const TOTAL_RADARES = ${total};
`;

writeFileSync(SALIDA, salida);

// Auditoría de cobertura.
const conRadares = [...porSlug.entries()].sort((a, b) => b[1].length - a[1].length);
const sinRadares = [...slugsValidos].filter((s) => !porSlug.has(s)).sort();
console.log(`[gen-radares-provincias] ${total} radares en ${porSlug.size} páginas de provincia -> ${SALIDA}`);
for (const [slug, lista] of conRadares) console.log(`  ${slug}: ${lista.length}`);
console.log(`  SIN radares (${sinRadares.length}): ${sinRadares.join(", ")}`);
