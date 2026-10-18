// HISTORIA LOTE-E-C — hitos de los modelos nuevos del lote E grupo C (coches, 18/10/2026).
// Hitos mínimos honestos: año de lanzamiento + foto verificada del modelo exacto.
import type { HistoriaModelo } from "./historia-modelos.ts";

export const HISTORIA_LOTE_E_C: Record<string, HistoriaModelo> = {
  "mg3-hybrid-2026-precio-ficha-tecnica": {
    lanzamiento: 2024,
    hitos: [
      { anio: 2024, tipo: "lanzamiento", cambio: null, foto: "/media/mg3-hybrid-2026-precio-ficha-tecnica-2.webp" },
      { anio: 2026, tipo: "restyling", cambio: "actualización MY 26,5: sistema Hybrid+ revisado (más potencia continua, menos ruido) y nuevas tapicerías", foto: "/media/mg3-hybrid-2026-precio-ficha-tecnica-hero.webp" },
    ],
  },
  "mitsubishi-colt-2026-precio-ficha-tecnica": {
    lanzamiento: 2023,
    hitos: [
      { anio: 2023, tipo: "lanzamiento", cambio: null, foto: "/media/mitsubishi-colt-2026-precio-ficha-tecnica-2.webp" },
    ],
  },
};
