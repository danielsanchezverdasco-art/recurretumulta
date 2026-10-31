// Agregador de los lotes de enriquecimiento (slug de ficha → bloque de datos con fuente).
import type { EnriquecimientoFicha, MapaEnriquecimiento } from "./tipos";
import { LOTE_01 } from "./lote-01";
import { LOTE_02 } from "./lote-02";
import { LOTE_03 } from "./lote-03";
import { LOTE_04 } from "./lote-04";
import { LOTE_05 } from "./lote-05";
import { LOTE_06 } from "./lote-06";
import { LOTE_07 } from "./lote-07";
import { LOTE_08 } from "./lote-08";
import { LOTE_09 } from "./lote-09";
import { LOTE_10 } from "./lote-10";
import { LOTE_11 } from "./lote-11";
import { LOTE_12 } from "./lote-12";
import { LOTE_13 } from "./lote-13";
import { LOTE_14 } from "./lote-14";
import { LOTE_15 } from "./lote-15";
import { LOTE_16 } from "./lote-16";
import { LOTE_17 } from "./lote-17";
import { LOTE_18 } from "./lote-18";
import { LOTE_19 } from "./lote-19";
import { LOTE_20 } from "./lote-20";

const TODOS: MapaEnriquecimiento = { ...LOTE_01, ...LOTE_02, ...LOTE_03, ...LOTE_04, ...LOTE_05, ...LOTE_06, ...LOTE_07, ...LOTE_08, ...LOTE_09, ...LOTE_10, ...LOTE_11, ...LOTE_12, ...LOTE_13, ...LOTE_14, ...LOTE_15, ...LOTE_16, ...LOTE_17, ...LOTE_18, ...LOTE_19, ...LOTE_20 };

export function getEnriquecimiento(slug: string): EnriquecimientoFicha | null {
  return TODOS[slug] ?? null;
}
