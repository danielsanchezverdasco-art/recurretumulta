// Índice de campers (furgonetas camper) — rama merlin-rutas-cableadas.
// Integra el lote niky-campers (19/10/2026) con dedup aplicado:
// - 3 fichas descartadas por existir versión más completa en autocaravanas/
//   (font-vendome-mondea, pilote-v630j, rapido-v55).
// - Pössl Campster/Vanster: se conserva la versión de comparador-campers-possl.ts
//   (61 campos) frente a la de comparador-campers-niky.ts.
import type { CocheComparador } from "../comparador-coches-data.ts";
import { CAMPERS_ADRIA } from "./comparador-campers-adria.ts";
import { CAMPERS_BUERSTNER } from "./comparador-campers-buerstner.ts";
import { CAMPERS_CAMPEREVE } from "./comparador-campers-campereve.ts";
import { CAMPERS_CHAUSSON } from "./comparador-campers-chausson.ts";
import { CAMPERS_DREAMER } from "./comparador-campers-dreamer.ts";
import { CAMPERS_FORD } from "./comparador-campers-ford.ts";
import { CAMPERS_GRUPO4 } from "./comparador-campers-grupo4.ts";
import { CAMPERS_NIKY_ESPANOLAS } from "./comparador-campers-niky.ts";
import { CAMPERS_POSSL } from "./comparador-campers-possl.ts";
import { CAMPERS_VW } from "./comparador-campers-vw.ts";
import { CAMPERS_WESTFALIA } from "./comparador-campers-westfalia.ts";

/** Todas las fichas de campers consolidadas. */
export const CAMPERS: CocheComparador[] = [
  ...CAMPERS_ADRIA,
  ...CAMPERS_BUERSTNER,
  ...CAMPERS_CAMPEREVE,
  ...CAMPERS_CHAUSSON,
  ...CAMPERS_DREAMER,
  ...CAMPERS_FORD,
  ...CAMPERS_GRUPO4,
  ...CAMPERS_NIKY_ESPANOLAS,
  ...CAMPERS_POSSL,
  ...CAMPERS_VW,
  ...CAMPERS_WESTFALIA,
];
