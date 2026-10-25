// Genera los placements deterministas de la "Caza de monos" (05/10/2026).
// - Lee las mismas fuentes de rutas que gen-sitemap.mjs (estáticas + provincias
//   + comunidades + ficheros de slugs).
// - Ordena las rutas por hash FNV-1a y toma las N primeras: 1 mono por página.
//   N = 500 en la Temporada 1 (octubre 2026). Cada temporada regenera el fichero.
// - Cada placement lleva un token aleatorio (no adivinable) que forma parte del
//   ID del mono: la verificación del premio es manual por WhatsApp.
// - La posición (lado / % vertical / offset) también deriva del hash: estable.
// - Los monos FIJOS (fáciles) también reciben token aquí.
//
// Uso: node scripts/gen-caza-monos.mjs
// Salida: src/components/caza-monos/placements.generated.ts (NO editar a mano).
import { writeFileSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { randomBytes, createHash } from "node:crypto";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const STATIC = [
  "/", "/multas", "/blog",
  "/sobre-nosotros", "/comparativa", "/empresas", "/reportar-carretera",
  "/herramientas", "/herramientas/contrato-compraventa-vehiculo", "/herramientas/precio-itv", "/buscador-codigo-multa", "/senales-trafico", "/mejor-coche-por-presupuesto", "/comparador-coches", "/comparador-patinetes", "/glosario-multa", "/metodologia", "/calculadora-kw-a-cv", "/calculadora-consumo-camper",
  "/equivalencia-neumaticos-itv", "/valor-venal-vehiculo",
  "/guias/radares", "/guias/patinetes-electricos", "/guias/zbe", "/guias/prescripcion",
  "/guias/vicios-forma", "/guias/alcohol-drogas", "/guias/itv-documentacion",
  "/guias/ayudas-compra-coche-electrico-2026", "/guias/comprar-coche-electrico-segunda-mano",
  "/calculadora-autonomia-real", "/calculadora-etiqueta-dgt", "/calculadora-alcoholemia",
  "/glosario", "/calendario-lanzamientos-2026-2027", "/comparador-motos", "/fichas-tecnicas",
  "/comparador-garantia-bateria", "/rankings", "/comparador/mas-vendidos",
  "/el-dato-del-dia", "/la-pregunta-del-dia", "/tal-dia-como-hoy-motor", "/newsletter",
];

const PROVINCIAS = [
  "madrid","barcelona","valencia","sevilla","malaga","zaragoza","bilbao","alicante",
  "cordoba","valladolid","granada","murcia","palma-mallorca","las-palmas","santa-cruz-tenerife",
  "pamplona","san-sebastian","vitoria","logrono","santander","oviedo","a-coruna",
  "santiago-compostela","vigo","cadiz","huelva","jaen","almeria","toledo","ciudad-real",
  "cuenca","guadalajara","albacete","burgos","leon","salamanca","zamora","segovia","soria",
  "palencia","avila","badajoz","caceres","lleida","tarragona","girona","castellon","teruel",
  "huesca","pontevedra","lugo","ourense","ceuta","melilla",
];

const COMUNIDADES = [
  "andalucia","aragon","asturias","baleares","canarias","cantabria",
  "castilla-la-mancha","castilla-y-leon","cataluna","extremadura","galicia",
  "madrid","murcia","navarra","pais-vasco","la-rioja","comunidad-valenciana",
  "ceuta","melilla",
];

const readSlugs = (f) => readFileSync(join(ROOT, "scripts", f), "utf8")
  .split("\n").map((s) => s.trim()).filter(Boolean);

const withSlash = (u) => (u === "/" || u.endsWith("/") ? u : `${u}/`);

const rutas = new Set(
  [
    ...STATIC,
    ...PROVINCIAS.map((p) => `/multas/${p}`),
    ...COMUNIDADES.map((c) => `/comunidades/${c}`),
    ...readSlugs("blog-slugs.txt").map((s) => `/blog/${s}`),
    ...readSlugs("coches-slugs.txt").map((s) => `/coches/${s}`),
    ...readSlugs("motos-slugs.txt").map((s) => `/motos/${s}`),
    ...readSlugs("patinetes-slugs.txt").map((s) => `/patinetes/${s}`),
    ...readSlugs("rankings-slugs.txt").map((s) => `/rankings/${s}`),
    ...readSlugs("glosario-slugs.txt").map((s) => `/glosario/${s}`),
  ]
    .map(withSlash)
    // Las páginas del propio juego no llevan mono aleatorio (tienen fijo propio)
    .filter((u) => !u.startsWith("/juego-monos"))
);

// FNV-1a 32 bits: hash determinista para ordenar y posicionar.
function fnv1a(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

// Temporada 1 (octubre 2026): 250 monos = 237 aleatorios + 13 fijos.
// El legendario dorado está ENTRE los 250 (decisión de Daniel): cuenta igual.
// Cada mes, nueva temporada con más monos: cambiar TOTAL_ALEATORIOS y regenerar.
const TOTAL_ALEATORIOS = 237;
const ordenadas = [...rutas].sort((a, b) => fnv1a(a) - fnv1a(b));
const elegidas = ordenadas.slice(0, TOTAL_ALEATORIOS);
console.log(`Rutas candidatas: ${rutas.size} → placements: ${elegidas.length}`);

const token = () => randomBytes(5).toString("hex"); // 10 hex chars

// Mono LEGENDARIO dorado (05/10/2026): 1 solo, en una página profunda (el
// artículo de blog con el slug más largo que no salió en los 237). No huye,
// tiene frase épica dorada y cuenta para el objetivo (está entre los 250).
const blogSlugs = readSlugs("blog-slugs.txt");
const elegidasSet = new Set(elegidas);
const legendarioRuta = withSlash(
  "/blog/" +
    blogSlugs
      .filter((s) => !elegidasSet.has(withSlash(`/blog/${s}`)))
      .sort((a, b) => b.length - a.length)[0]
);
const legendario = {
  ruta: legendarioRuta,
  token: token(),
  lado: "der",
  topPct: 62,
  offsetPx: 10,
  legendario: true,
};

const placements = elegidas.map((ruta) => {
  const h = fnv1a("pos:" + ruta);
  const h2 = fnv1a("pos2:" + ruta);
  return {
    ruta,
    token: token(),
    lado: h % 2 === 0 ? "izq" : "der",
    topPct: 8 + (h % 84), // 8–92 % de la altura de la página
    offsetPx: 6 + (h2 % 30), // 6–36 px desde el borde
  };
});
placements.push(legendario); // el legendario está entre los 250: cuenta igual

// Monos FIJOS fáciles (IDs únicos f:<nombre>:<token>). También cuentan para el objetivo.
const FIJOS = [
  "menu-desplegable",
  "footer",
  "blog-final",
  "ficha-coche",
  "ficha-moto",
  "ficha-patinete",
  "portada-hero",
  "portada-tras-analizador",
  "sobre-nosotros",
  "comparador-coches",
  "juego-monos",
  "pagina-404",
  "herramientas",
  "cookies-banner", // galleta: banner de consentimiento de cookies
  "cookies-pagina", // galleta: página de política de cookies (/cookies)
];
// Tokens deterministas (hash del nombre + sal): estables entre regeneraciones.
// Están en el JS del cliente igualmente; la verificación del premio es manual.
const tokenFijo = (nombre) => createHash("sha256").update("caza-monos-fijo:" + nombre).digest("hex").slice(0, 16);
const tokensFijos = Object.fromEntries(FIJOS.map((n) => [n, tokenFijo(n)]));

const ts = `// Generado por scripts/gen-caza-monos.mjs el ${new Date().toISOString()} — NO EDITAR A MANO.
// ${elegidas.length} placements aleatorios deterministas (1 mono por página)
// + 1 legendario dorado (entre los 250: cuenta igual, no huye)
// + ${FIJOS.length} monos fijos. Temporada 1: ${elegidas.length} + 1 + ${FIJOS.length} = ${elegidas.length + 1 + FIJOS.length} colocados (objetivo: 250).
// Los tokens forman parte del ID de cada mono y se verifican manualmente al reclamar.
// (Fijos: deterministas por nombre; aleatorios: generados una vez por el script.)

export interface PlacementMono {
  ruta: string; // ruta normalizada con barra final, p. ej. "/coches/dacia-sandero/"
  token: string;
  lado: "izq" | "der";
  topPct: number; // 8–92 % de la altura de la página
  offsetPx: number; // px desde el borde lateral
  legendario?: boolean; // el mono dorado (1 por temporada, no huye)
}

export const PLACEMENTS: PlacementMono[] = ${JSON.stringify(placements)};

export const TOKENS_FIJOS: Record<string, string> = ${JSON.stringify(tokensFijos, null, 2)};

export const TOTAL_MONOS_ALEATORIOS = ${placements.length};
export const TOTAL_MONOS_FIJOS = ${FIJOS.length};
`;

writeFileSync(join(ROOT, "src", "components", "caza-monos", "placements.generated.ts"), ts);
console.log("Escrito src/components/caza-monos/placements.generated.ts");
