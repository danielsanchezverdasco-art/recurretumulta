// Agregador de los lotes de enriquecimiento (slug de ficha → bloque de datos con fuente).
import type { EnriquecimientoFicha, MapaEnriquecimiento } from "./tipos";
import { LOTE_01 } from "./lote-01";

const TODOS: MapaEnriquecimiento = { ...LOTE_01 };

export function getEnriquecimiento(slug: string): EnriquecimientoFicha | null {
  return TODOS[slug] ?? null;
}
