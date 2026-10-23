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
// Fuentes:
// - Coches: COCHES_COMPARADOR EXCLUYENDO categoria "Camper"/"Autocaravana".
// - Campers: AUTOCARAVANAS_COMPARADOR con tipo === "camper" (furgonetas camper).
// - Autocaravanas: AUTOCARAVANAS_COMPARADOR con tipo !== "camper"
//   (perfiladas, integrales, capuchinas).
// - Caravanas: CARAVANAS_COMPARADOR (punto de integración: a esta base aún no
//   han llegado los datos de Niky —ver src/lib/comparador-caravanas-data.ts—;
//   la pestaña se oculta sola mientras el array esté vacío: nunca página vacía).
// - Motos / Patinetes: sus catálogos propios, sin mezcla (verificado).
import { COCHES_COMPARADOR } from "./comparador-coches-data.ts";
import { MOTOS_PUBLICADAS } from "./comparador-motos-data.ts";
import { PATINETES_PUBLICADOS } from "./comparador-patinetes-data.ts";
import { AUTOCARAVANAS_COMPARADOR } from "./comparador-autocaravanas-data.ts";
import { CARAVANAS_COMPARADOR } from "./comparador-caravanas-data.ts";

export type TabFichas =
  | "coche"
  | "moto"
  | "patinete"
  | "camper"
  | "autocaravana"
  | "caravana";

// ── Predicados de categoría (la única verdad sobre qué es cada fila) ─────────
/** Fila de COCHES_COMPARADOR que en realidad es una camper (no es un coche). */
export const esCamperEnCoches = (c: { categoria?: string | null }) =>
  c.categoria === "Camper";
/** Fila de COCHES_COMPARADOR que en realidad es una autocaravana. */
export const esAutocaravanaEnCoches = (c: { categoria?: string | null }) =>
  c.categoria === "Autocaravana";
/** Coches de verdad: todo COCHES_COMPARADOR menos campers y autocaravanas. */
export const esCocheReal = (c: { categoria?: string | null }) =>
  !esCamperEnCoches(c) && !esAutocaravanaEnCoches(c);

// ── Datasets por pestaña (cada pestaña posee EXACTAMENTE uno) ────────────────
export const COCHES_FICHAS = COCHES_COMPARADOR.filter(esCocheReal);
export const MOTOS_FICHAS = MOTOS_PUBLICADAS;
export const PATINETES_FICHAS = PATINETES_PUBLICADOS;
export const CAMPERS_FICHAS = AUTOCARAVANAS_COMPARADOR.filter(
  (a) => a.tipo === "camper"
);
export const AUTOCARAVANAS_FICHAS = AUTOCARAVANAS_COMPARADOR.filter(
  (a) => a.tipo !== "camper"
);
export const CARAVANAS_FICHAS = CARAVANAS_COMPARADOR;

/** Contadores calculados de los arrays de datos: NUNCA literales. */
export const CONTEOS_FICHAS: Record<TabFichas, number> = {
  coche: COCHES_FICHAS.length,
  moto: MOTOS_FICHAS.length,
  patinete: PATINETES_FICHAS.length,
  camper: CAMPERS_FICHAS.length,
  autocaravana: AUTOCARAVANAS_FICHAS.length,
  caravana: CARAVANAS_FICHAS.length,
};
