// Agregador de los lotes de enriquecimiento (slug de ficha → bloque de datos con fuente).
import type { EnriquecimientoFicha, MapaEnriquecimiento } from "./tipos";
import { LOTE_01 } from "./lote-01";
import { LOTE_02 } from "./lote-02";
import { LOTE_03 } from "./lote-03";
import { LOTE_04 } from "./lote-04";
import { LOTE_05 } from "./lote-05";

const TODOS: MapaEnriquecimiento = { ...LOTE_01, ...LOTE_02, ...LOTE_03, ...LOTE_04, ...LOTE_05 };

export function getEnriquecimiento(slug: string): EnriquecimientoFicha | null {
  return TODOS[slug] ?? null;
}
