// Historia de modelos — tanda de enriquecimiento T9 (Hyundai + Toyota, 20/10/2026).
// Solo hitos verificables (presentaciones oficiales de la marca / prensa de marca):
// - Hyundai Bayon: presentado en 2021; restyling presentado por Hyundai en enero de 2024
//   (frontal con luz diurna LED Seamless Horizon e interior renovado).
// - Hyundai Elantra N: presentación mundial en 2021; su actualización (The New Elantra N)
//   se presentó en el Salón del Automóvil de Shanghái de 2023.
// - Hyundai i20 N: presentado en 2020 y a la venta desde 2021.
// - Hyundai i30 Fastback N: presentado en el Salón de París de 2018 y a la venta desde 2019;
//   actualización de la gama i30 N presentada en 2020 (280 CV y cambio N DCT de 8 velocidades).
// - Hyundai Kona N: presentación mundial en 2021 (Hyundai N Day) y a la venta ese mismo año.
// - Toyota bZ5 (FAW Toyota, China): presentado en el Salón de Shanghái de 2025 y a la venta
//   en China desde junio de 2025.
// - Toyota bZ4X: a la venta desde 2022; actualización presentada por Toyota en 2025 (nuevas
//   baterías de 57,7 y 73,1 kWh y motores eAxle más eficientes y potentes).
// - Toyota Land Cruiser 250: presentación mundial en agosto de 2023.
// foto: null siempre en esta tanda.
import type { HistoriaModelo } from "./historia-modelos.ts";

export const HISTORIA_ENRIQUECER_T9: Record<string, HistoriaModelo> = {
  "hyundai-bayon-10-tgdi-2026-precio-ficha-tecnica": {
    lanzamiento: 2021,
    hitos: [
      { anio: 2021, tipo: "lanzamiento", cambio: null, foto: null },
      { anio: 2024, tipo: "restyling", cambio: "Restyling: frontal renovado con luz diurna LED Seamless Horizon e interior actualizado", foto: null },
    ],
  },
  "hyundai-elantra-n-2024": {
    lanzamiento: 2021,
    hitos: [
      { anio: 2021, tipo: "lanzamiento", cambio: null, foto: null },
      { anio: 2023, tipo: "restyling", cambio: "The New Elantra N: frontal rediseñado, presentado en el Salón del Automóvil de Shanghái 2023", foto: null },
    ],
  },
  "hyundai-i20-n-2024": {
    lanzamiento: 2021,
    hitos: [
      { anio: 2021, tipo: "lanzamiento", cambio: null, foto: null },
    ],
  },
  "hyundai-i30-fastback-n-2024": {
    lanzamiento: 2019,
    hitos: [
      { anio: 2019, tipo: "lanzamiento", cambio: null, foto: null },
      { anio: 2020, tipo: "restyling", cambio: "Actualización de la gama i30 N: motor 2.0 T-GDi de 280 CV y nuevo cambio automático N DCT de 8 velocidades", foto: null },
    ],
  },
  "hyundai-kona-n-2023": {
    lanzamiento: 2021,
    hitos: [
      { anio: 2021, tipo: "lanzamiento", cambio: null, foto: null },
    ],
  },
  "toyota-bz5-2026-precio-ficha-tecnica": {
    lanzamiento: 2025,
    hitos: [
      { anio: 2025, tipo: "lanzamiento", cambio: null, foto: null },
    ],
  },
  "toyota-bz4x-2026-precio-ficha-tecnica": {
    lanzamiento: 2022,
    hitos: [
      { anio: 2022, tipo: "lanzamiento", cambio: null, foto: null },
      { anio: 2025, tipo: "restyling", cambio: "Actualización del bZ4X: nuevas baterías de 57,7 y 73,1 kWh y motores eAxle más eficientes y potentes", foto: null },
    ],
  },
  "toyota-land-cruiser-250-2025-precio-ficha-tecnica": {
    lanzamiento: 2023,
    hitos: [
      { anio: 2023, tipo: "lanzamiento", cambio: null, foto: null },
    ],
  },
};
