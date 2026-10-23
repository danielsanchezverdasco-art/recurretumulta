// Índice consolidado de caravanas — rama merlin-caravanas-rutas-v4.
// Agrega los 15 módulos src/lib/comparador-caravanas-*.ts (72 fichas) en
// un único array CARAVANAS, con el mismo patrón que
// src/lib/autocaravanas/index.ts y src/lib/campers/index.ts.
// Antes de esta rama las fichas existían en datos pero ninguna ruta
// /caravanas/<slug> las servía (los posts del blog enlazaban a 404).
import type { CocheComparador } from "../comparador-coches-data.ts";
import type { Caravana } from "./tipos.ts";
import { CARAVANAS_ADRIA } from "../comparador-caravanas-adria.ts";
import { CARAVANAS_BAILEY } from "../comparador-caravanas-bailey.ts";
import { CARAVANAS_BURSTNER } from "../comparador-caravanas-burstner.ts";
import { CARAVANAS_CARAVELAIR } from "../comparador-caravanas-caravelair.ts";
import { CARAVANAS_DETHLEFFS } from "../comparador-caravanas-dethleffs.ts";
import { CARAVANAS_ERIBA } from "../comparador-caravanas-eriba.ts";
import { CARAVANAS_FENDT } from "../comparador-caravanas-fendt.ts";
import { CARAVANAS_HOBBY } from "../comparador-caravanas-hobby.ts";
import { CARAVANAS_KABE } from "../comparador-caravanas-kabe.ts";
import { CARAVANAS_KNAUS } from "../comparador-caravanas-knaus.ts";
import { CARAVANAS_LMC } from "../comparador-caravanas-lmc.ts";
import { CARAVANAS_STERCKEMAN } from "../comparador-caravanas-sterckeman.ts";
import { CARAVANAS_SWIFT } from "../comparador-caravanas-swift.ts";
import { CARAVANAS_TABBERT } from "../comparador-caravanas-tabbert.ts";
import { CARAVANAS_WEINSBERG } from "../comparador-caravanas-weinsberg.ts";

const CARAVANAS_SIN_DEDUP: CocheComparador[] = [
  ...CARAVANAS_ADRIA,
  ...CARAVANAS_BAILEY,
  ...CARAVANAS_BURSTNER,
  ...CARAVANAS_CARAVELAIR,
  ...CARAVANAS_DETHLEFFS,
  ...CARAVANAS_ERIBA,
  ...CARAVANAS_FENDT,
  ...CARAVANAS_HOBBY,
  ...CARAVANAS_KABE,
  ...CARAVANAS_KNAUS,
  ...CARAVANAS_LMC,
  ...CARAVANAS_STERCKEMAN,
  ...CARAVANAS_SWIFT,
  ...CARAVANAS_TABBERT,
  ...CARAVANAS_WEINSBERG,
];

// Deduplicación por id (gana la primera ocurrencia), mismo criterio que
// src/lib/autocaravanas/index.ts. La aserción a Caravana[] es segura:
// las 72 fichas traen mmaKg y carnetNecesario (verificado 20/10/2026;
// ver tipos.ts).
const _idsVistos = new Set<string>();
export const CARAVANAS: Caravana[] = (CARAVANAS_SIN_DEDUP as Caravana[]).filter(
  (a) => {
    if (_idsVistos.has(a.id)) return false;
    _idsVistos.add(a.id);
    return true;
  }
);
