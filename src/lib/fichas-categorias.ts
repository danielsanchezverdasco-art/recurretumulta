// Categorías reales de /fichas-tecnicas/ (orden Grok 23/10/2026 21:55 punto 2 +
// EXTRA (a) 22:10): cada pestaña muestra SOLO su categoría y los contadores
// salen de los DATOS REALES (nunca literales).
//
// Causa raíz del bug: COCHES_COMPARADOR mezcla filas de campers
// (categoria "Camper", p. ej. Volkswagen California) y de autocaravanas
// (categoria "Autocaravana", p. ej. Benimar Mileo) entre los coches. Cualquier
// pestaña que filtre solo por "de qué array viene" muestra categorías
// mezcladas y contadores inflados. Aquí cada categoría se define por un
// predicado sobre los datos, no por el array de origen.
//
// Merge integ-r24 + merlin-borrador-v455 (24/10/2026): se mantiene esta
// arquitectura (un dataset por pestaña, contadores de los datos) pero con los
// catálogos completos que ya están en vivo desde v455:
// - Coches: COCHES_COMPARADOR sin campers ni autocaravanas.
// - Campers: AUTOCARAVANAS (índice src/lib/autocaravanas, 140 módulos) con
//   tipo === "camper" + las filas "Camper" de COCHES_COMPARADOR que no tienen
//   ficha gemela en AUTOCARAVANAS (si la tienen, manda la de /campers/).
// - Autocaravanas: AUTOCARAVANAS con tipo !== "camper" (perfiladas,
//   integrales, capuchinas) + las filas "Autocaravana" de COCHES_COMPARADOR.
//   Dos fichas marcadas "Camper" en coches son perfiladas (corrección v455 del
//   21/10/2026): McLouis Menfys y Adria Matrix Supreme 670 SL.
// - Caravanas: CARAVANAS (índice src/lib/caravanas, 72 fichas).
// - Motos / Patinetes: sus catálogos propios, sin mezcla (verificado).
// Cada dataset se deduplica por id (COCHES_COMPARADOR trae
// buerstner-campeo-c-600 dos veces) para que contador = tarjetas reales.
import { COCHES_COMPARADOR, type CocheComparador } from "./comparador-coches-data.ts";
import { MOTOS_PUBLICADAS } from "./comparador-motos-data.ts";
import { PATINETES_PUBLICADOS } from "./comparador-patinetes-data.ts";
import { AUTOCARAVANAS } from "./autocaravanas/index.ts";
import { CARAVANAS } from "./caravanas/index.ts";
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export type TabFichas =
  | "coche"
  | "moto"
  | "patinete"
  | "camper"
  | "autocaravana"
  | "caravana";

const unicosPorId = <T extends { id: string }>(arr: readonly T[]): T[] => {
  const vistos = new Set<string>();
  return arr.filter((x) => (vistos.has(x.id) ? false : (vistos.add(x.id), true)));
};

// Perfiladas que en COCHES_COMPARADOR figuran como "Camper" (v455, 21/10/2026).
const AUTOCARAVANAS_MARCADAS_CAMPER = new Set<string>([
  "mclouis-menfys-2026",
  "adria-matrix-supreme-670-sl-2026-precio-ficha-tecnica",
]);

// ── Predicados de categoría (la única verdad sobre qué es cada fila) ─────────
/** Fila de COCHES_COMPARADOR que en realidad es una autocaravana. */
export const esAutocaravanaEnCoches = (c: { id?: string; categoria?: string | null }) =>
  c.categoria === "Autocaravana" ||
  (c.categoria === "Camper" && c.id != null && AUTOCARAVANAS_MARCADAS_CAMPER.has(c.id));
/** Fila de COCHES_COMPARADOR que en realidad es una camper (no es un coche). */
export const esCamperEnCoches = (c: { id?: string; categoria?: string | null }) =>
  c.categoria === "Camper" && !esAutocaravanaEnCoches(c);
/** Coches de verdad: todo COCHES_COMPARADOR menos campers y autocaravanas. */
export const esCocheReal = (c: { id?: string; categoria?: string | null }) =>
  !esCamperEnCoches(c) && !esAutocaravanaEnCoches(c);

/** Ficha de vivienda sobre ruedas: de su vertical o heredada del catálogo de coches. */
export type FichaRv =
  | { origen: "autocaravanas"; ficha: Autocaravana }
  | { origen: "coches"; ficha: CocheComparador };

const IDS_VERTICAL_RV = new Set(AUTOCARAVANAS.map((a) => a.id));
const rvDeVertical = (pred: (a: Autocaravana) => boolean): FichaRv[] =>
  unicosPorId(AUTOCARAVANAS.filter(pred)).map((ficha) => ({ origen: "autocaravanas", ficha }));
const rvDeCoches = (pred: (c: CocheComparador) => boolean): FichaRv[] =>
  unicosPorId(COCHES_COMPARADOR.filter((c) => pred(c) && !IDS_VERTICAL_RV.has(c.id))).map(
    (ficha) => ({ origen: "coches", ficha })
  );

// ── Datasets por pestaña (cada pestaña posee EXACTAMENTE uno) ────────────────
export const COCHES_FICHAS = unicosPorId(COCHES_COMPARADOR.filter(esCocheReal));
export const MOTOS_FICHAS = unicosPorId(MOTOS_PUBLICADAS);
export const PATINETES_FICHAS = unicosPorId(PATINETES_PUBLICADOS);
export const CAMPERS_FICHAS: FichaRv[] = [
  ...rvDeVertical((a) => a.tipo === "camper"),
  ...rvDeCoches(esCamperEnCoches),
];
export const AUTOCARAVANAS_FICHAS: FichaRv[] = [
  ...rvDeVertical((a) => a.tipo !== "camper"),
  ...rvDeCoches(esAutocaravanaEnCoches),
];
export const CARAVANAS_FICHAS = unicosPorId(CARAVANAS);

/** Contadores calculados de los arrays de datos: NUNCA literales. */
export const CONTEOS_FICHAS: Record<TabFichas, number> = {
  coche: COCHES_FICHAS.length,
  moto: MOTOS_FICHAS.length,
  patinete: PATINETES_FICHAS.length,
  camper: CAMPERS_FICHAS.length,
  autocaravana: AUTOCARAVANAS_FICHAS.length,
  caravana: CARAVANAS_FICHAS.length,
};
