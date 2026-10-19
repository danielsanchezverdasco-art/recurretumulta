// Historia de modelos — lote M10 (4 variantes nuevas).
// Lanzamiento + hitos con 1 foto de época generada para el hito principal.
// foto: null si no hay imagen válida.
import type { HistoriaModelo } from "./historia-modelos.ts";

export const HISTORIA_M10: Record<string, HistoriaModelo> = {
  "yamaha-mt-09-y-amt-2025-ficha-tecnica-precio": {
    lanzamiento: 2013,
    hitos: [
      { anio: 2013, tipo: "lanzamiento", cambio: "Nace la MT-09 con el tricilíndrico CP3 de 847 cc", foto: "/media/historia-yamaha-mt-09-y-amt-2025-ficha-tecnica-precio-2013.webp" },
      { anio: 2017, tipo: "restyling", cambio: "restyling: nuevo frontal y electrónica mejorada", foto: null },
      { anio: 2021, tipo: "restyling", cambio: "tercera generación: 890 cc, 119 CV y chasis Deltabox nuevo", foto: null },
      { anio: 2024, tipo: "restyling", cambio: "debut del cambio automatizado Y-AMT", foto: null },
    ],
  },
  "yamaha-tracer-9-gt-plus-2025-ficha-tecnica-precio": {
    lanzamiento: 2015,
    hitos: [
      { anio: 2015, tipo: "lanzamiento", cambio: "Nace la MT-09 Tracer, la sport-turismo del tricilíndrico CP3", foto: "/media/historia-yamaha-tracer-9-gt-plus-2025-ficha-tecnica-precio-2015.webp" },
      { anio: 2021, tipo: "restyling", cambio: "se renombra Tracer 9 con el motor de 890 cc", foto: null },
      { anio: 2023, tipo: "restyling", cambio: "llega la GT+: radar con crucero adaptativo y suspensión electrónica", foto: null },
    ],
  },
  "ducati-multistrada-v4-rs-2026-ficha-tecnica-precio": {
    lanzamiento: 2023,
    hitos: [
      { anio: 2003, tipo: "lanzamiento", cambio: "nace la familia Multistrada con la 1000 DS", foto: null },
      { anio: 2020, tipo: "restyling", cambio: "Multistrada V4 con motor Granturismo y radar", foto: null },
      { anio: 2023, tipo: "lanzamiento", cambio: "debut de la V4 RS con el V4 Desmosedici Stradale de 180 CV", foto: "/media/historia-ducati-multistrada-v4-rs-2026-ficha-tecnica-precio-2023.webp" },
    ],
  },
  "ducati-monster-sp-2025-ficha-tecnica-precio": {
    lanzamiento: 2022,
    hitos: [
      { anio: 1993, tipo: "lanzamiento", cambio: "nace la Monster 900, la naked que salvó a Ducati", foto: "/media/historia-ducati-monster-sp-2025-ficha-tecnica-precio-1993.webp" },
      { anio: 2021, tipo: "restyling", cambio: "nueva Monster con el Testastretta 11° de 937 cc", foto: null },
      { anio: 2022, tipo: "lanzamiento", cambio: "debut de la Monster SP con Öhlins, Stylema y Termignoni", foto: null },
    ],
  },
};
