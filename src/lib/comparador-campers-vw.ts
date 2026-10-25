// Fichas camper VW California 2026 (Beach, Coast, Ocean) — T7 (Multivan), batalla larga.
// Rama niky-campers. Datos: solo fuente oficial VW / concesionario oficial VW / prensa.
// La tarifa española oficial 2026 solo existe para el Beach (72.790 €); Coast y Ocean
// llevan precio aproximado (tarifa oficial Francia, marcada en `aprox`).
// Las fotos son del kit de prensa oficial de Volkswagen Vehículos Comerciales (T7 exacto),
// verificadas visualmente. NO registrar en COCHES_COMPARADOR (lo hace el coordinador).
import type { CocheComparador } from "./comparador-coches-data.ts";

export interface CamperVW extends CocheComparador {
  /** Descripción larga propia (≥800 palabras). */
  descripcion: string;
}

export const CAMPERS_VW: CamperVW[] = [];
