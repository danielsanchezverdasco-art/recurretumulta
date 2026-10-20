// Historia de modelos — tanda de enriquecimiento T1 (Toyota, 20/10/2026).
// Solo hitos verificables (presentaciones oficiales Toyota / prensa):
// - Yaris Cross: presentado en 2020 y a la venta desde 2021; actualización 2024 con la motorización Hybrid 130.
// - Corolla Cross: debut mundial en 2020 (Tailandia) y llegada a Europa en 2022; restyling presentado en 2025
//   por Toyota Europe (frontal renovado y nueva versión GR Sport).
// foto: null siempre en esta tanda.
import type { HistoriaModelo } from "./historia-modelos.ts";

export const HISTORIA_ENRIQUECER_T1: Record<string, HistoriaModelo> = {
  "toyota-yaris-cross-2026-precio-ficha-tecnica": {
    lanzamiento: 2021,
    hitos: [
      { anio: 2021, tipo: "lanzamiento", cambio: null, foto: null },
      { anio: 2024, tipo: "restyling", cambio: "Actualización: nueva motorización Hybrid 130 y mejoras de equipamiento y de Toyota Safety Sense", foto: null },
    ],
  },
  "toyota-corolla-cross-2026": {
    lanzamiento: 2020,
    hitos: [
      { anio: 2020, tipo: "lanzamiento", cambio: null, foto: null },
      { anio: 2025, tipo: "restyling", cambio: "Restyling: frontal renovado y nueva versión GR Sport", foto: null },
    ],
  },
};
