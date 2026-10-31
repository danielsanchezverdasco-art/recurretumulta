// Agregador de los lotes de enriquecimiento (slug de ficha → bloque de datos con fuente).
import type { EnriquecimientoFicha, MapaEnriquecimiento } from "./tipos";
import { LOTE_01 } from "./lote-01";
import { LOTE_02 } from "./lote-02";
import { LOTE_03 } from "./lote-03";

const TODOS: MapaEnriquecimiento = { ...LOTE_01, ...LOTE_02, ...LOTE_03 };

export function getEnriquecimiento(slug: string): EnriquecimientoFicha | null {
  return TODOS[slug] ?? null;
}
