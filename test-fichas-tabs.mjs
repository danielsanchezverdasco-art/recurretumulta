// Test de las pestañas de /fichas-tecnicas/ (orden Grok 23/10/2026 punto 2 + EXTRA a).
// Verifica con los DATOS REALES:
//  1. Cada dataset de pestaña contiene solo su categoría (sin mezclas).
//  2. Los contadores salen de los arrays de datos (nunca literales).
//  3. Los datasets de las 6 pestañas son disjuntos por id.
//  4. El componente asigna el `kind` correcto y los contadores desde CONTEOS_FICHAS.
// Uso: node --experimental-strip-types test-fichas-tabs.mjs
// (los módulos de motos/patinetes no cargan bajo strip-types por sus imports
//  JSON sin atributos —Vite sí los acepta—; se verifican por análisis estático).
import { readFileSync } from "node:fs";

let fallos = 0;
const ok = (cond, msg) => {
  console.log(`${cond ? "OK  " : "FAIL"} ${msg}`);
  if (!cond) fallos++;
};

// ── 1. Carga los predicados REALES desde src/lib/fichas-categorias.ts ─────────
const catSrc = readFileSync("src/lib/fichas-categorias.ts", "utf8");
for (const fn of ["esCamperEnCoches", "esAutocaravanaEnCoches", "esCocheReal"]) {
  ok(new RegExp(`export const ${fn} = `).test(catSrc), `predicado ${fn} existe en fichas-categorias.ts`);
}
// Extrae y evalúa los predicados tal cual están en el fichero (no copias).
const extrae = (fn) => {
  const m = catSrc.match(new RegExp(`export const ${fn} = \\(([^)]*)\\) =>\\s*\\n?\\s*([^;]+);`));
  if (!m) throw new Error(`no se pudo extraer ${fn}`);
  // Quita las anotaciones de tipo TS del parámetro para poder evaluarlo en JS.
  const params = m[1].replace(/:\s*\{[^}]*\}/g, "").replace(/:\s*[A-Za-z_][\w<>\[\]| ]*/g, "").trim();
  return eval(`(${params}) => ${m[2].trim()}`);
};
const esCamperEnCoches = extrae("esCamperEnCoches");
const esAutocaravanaEnCoches = extrae("esAutocaravanaEnCoches");
const esCocheReal = extrae("esCocheReal");
const tipoCamper = (a) => a.tipo === "camper"; // mismo predicado que CAMPERS_FICHAS
const tipoNoCamper = (a) => a.tipo !== "camper";

// ── 2. Datos reales ───────────────────────────────────────────────────────────
const { COCHES_COMPARADOR } = await import("./src/lib/comparador-coches-data.ts");
const { AUTOCARAVANAS_COMPARADOR } = await import("./src/lib/comparador-autocaravanas-data.ts");
const { CARAVANAS_COMPARADOR } = await import("./src/lib/comparador-caravanas-data.ts");

const COCHES_FICHAS = COCHES_COMPARADOR.filter(esCocheReal);
const CAMPERS_FICHAS = AUTOCARAVANAS_COMPARADOR.filter(tipoCamper);
const AUTOCARAVANAS_FICHAS = AUTOCARAVANAS_COMPARADOR.filter(tipoNoCamper);
const CARAVANAS_FICHAS = CARAVANAS_COMPARADOR;

// ── 3. Aserciones de categoría ────────────────────────────────────────────────
const nCamperEnCoches = COCHES_COMPARADOR.filter(esCamperEnCoches).length;
const nAutoEnCoches = COCHES_COMPARADOR.filter(esAutocaravanaEnCoches).length;
ok(nCamperEnCoches > 0 && nAutoEnCoches > 0,
  `polución detectada en origen: ${nCamperEnCoches} campers + ${nAutoEnCoches} autocaravanas dentro de COCHES_COMPARADOR (${COCHES_COMPARADOR.length})`);
ok(COCHES_FICHAS.length === COCHES_COMPARADOR.length - nCamperEnCoches - nAutoEnCoches,
  `Coches = total − campers − autocaravanas: ${COCHES_FICHAS.length} = ${COCHES_COMPARADOR.length} − ${nCamperEnCoches} − ${nAutoEnCoches}`);
ok(COCHES_FICHAS.every((c) => !esCamperEnCoches(c) && !esAutocaravanaEnCoches(c)),
  "ningún coche filtrado tiene categoria Camper/Autocaravana");
ok(CAMPERS_FICHAS.length > 0 && CAMPERS_FICHAS.every((a) => a.tipo === "camper"),
  `Campers: ${CAMPERS_FICHAS.length}, todos con tipo "camper"`);
ok(AUTOCARAVANAS_FICHAS.every((a) => a.tipo !== "camper"),
  `Autocaravanas: ${AUTOCARAVANAS_FICHAS.length}, ninguna con tipo "camper"`);
ok(CAMPERS_FICHAS.length + AUTOCARAVANAS_FICHAS.length === AUTOCARAVANAS_COMPARADOR.length,
  `campers + autocaravanas = total RV (${AUTOCARAVANAS_COMPARADOR.length})`);
const tiposRV = AUTOCARAVANAS_COMPARADOR.reduce((m, a) => (m[a.tipo] = (m[a.tipo] || 0) + 1, m), {});
console.log(`     tipos RV: ${JSON.stringify(tiposRV)}`);

// ── 4. Disjuntos por id (ninguna ficha en dos pestañas) ──────────────────────
const ids = new Map();
let colisiones = 0;
for (const [tab, arr] of [["coche", COCHES_FICHAS], ["camper", CAMPERS_FICHAS],
    ["autocaravana", AUTOCARAVANAS_FICHAS], ["caravana", CARAVANAS_FICHAS]]) {
  for (const f of arr) {
    if (ids.has(f.id)) { colisiones++; console.log(`     colisión: ${f.id} en ${ids.get(f.id)} y ${tab}`); }
    else ids.set(f.id, tab);
  }
}
ok(colisiones === 0, "datasets de pestañas disjuntos por id");

// ── 5. El componente: sin literales, kinds y contadores desde los datos ──────
const tsx = readFileSync("src/pages/FichasTecnicas.tsx", "utf8");
ok(!/\b(2415|89)\b/.test(tsx.replace(/CONTEOS_FICHAS|fichas-categorias/g, "")),
  "sin contadores literales en el componente");
ok(/const TABS_VISIBLES = TABS\.filter\(\(t\) => \(CONTEOS_FICHAS\[t\.id\] \?\? 0\) > 0\)/.test(tsx),
  "TABS_VISIBLES se calcula desde CONTEOS_FICHAS (pestaña vacía = oculta)");
ok(/\{TABS_VISIBLES\.map\(\(t\) => \{\s*\n\s*const n = CONTEOS_FICHAS\[t\.id\];/.test(tsx),
  "el contador de cada pestaña es CONTEOS_FICHAS[t.id]");
for (const [arr, kind] of [["COCHES_FICHAS", "coche"], ["MOTOS_FICHAS", "moto"],
    ["PATINETES_FICHAS", "patinete"], ["CAMPERS_FICHAS", "camper"],
    ["AUTOCARAVANAS_FICHAS", "autocaravana"], ["CARAVANAS_FICHAS", "caravana"]]) {
  ok(tsx.includes(`...${arr}.map(`), `TODAS incluye ${arr}`);
}
ok(/kind,\n    id: r\.id,/.test(tsx) && (tsx.match(/rvACard\(a, "camper"\)/g) || []).length === 1
  && (tsx.match(/rvACard\(a, "autocaravana"\)/g) || []).length === 1
  && (tsx.match(/rvACard\(c, "caravana"\)/g) || []).length === 1,
  "rvACard asigna kind camper/autocaravana/caravana desde el dataset propio");
ok(/ruta: `\/\$\{RV_RUTA\[kind\]\}\/\$\{r\.id\}\/`/.test(tsx) || tsx.includes("ruta: `/${RV_RUTA[kind]}/${r.id}/`"),
  "las tarjetas RV enlazan a /campers/, /autocaravanas/ y /caravanas/");
// Motos/patinetes: sin mezcla RV en sus catálogos (análisis estático)
for (const [f, nombre] of [["src/lib/comparador-motos-base.ts", "motos"],
    ["src/lib/comparador-motos-exp-m1.ts", "motos"], ["src/lib/comparador-motos-exp-m10.ts", "motos"]]) {
  const src = readFileSync(f, "utf8");
  ok(!/categoria: "(Camper|Caravana|Autocaravana)"/.test(src), `${nombre}: sin categorias RV en ${f.split("/").pop()}`);
}

// ── 6. Tabla antes/después ────────────────────────────────────────────────────
console.log("\n── Antes / después por pestaña (datos reales de esta base) ──");
console.log("pestaña        antes (bug)              después");
console.log(`coches         ${COCHES_COMPARADOR.length} (incluye ${nCamperEnCoches} campers + ${nAutoEnCoches} autocaravanas)   ${COCHES_FICHAS.length} (solo coches)`);
console.log(`campers        0 (sin pestaña)          ${CAMPERS_FICHAS.length} (solo tipo camper)`);
console.log(`autocaravanas  0 (sin pestaña)          ${AUTOCARAVANAS_FICHAS.length} (perfilada/integral/capuchina)`);
console.log(`caravanas      0 (sin pestaña)          ${CARAVANAS_FICHAS.length} (oculta: sin datos en esta base)`);
console.log("motos/patinetes  sin cambios (catálogos propios, sin mezcla)");

console.log(fallos === 0 ? "\nTODOS LOS TESTS PASAN" : `\n${fallos} FALLOS`);
process.exit(fallos === 0 ? 0 : 1);
