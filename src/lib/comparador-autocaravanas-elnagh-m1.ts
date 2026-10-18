// Autocaravanas Elnagh — lote Merlín 4 (18/10/2026).
// Datos verificados: catálogos oficiales Elnagh 2022 y 2025 + web oficial elnagh.com
// (Elnagh no publica PVP: precioDesde en null; 120 CV en catálogo 2022, 140 CV en versiones recientes).
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_ELNAGH_M1: Autocaravana[] = [
  {
    id: "elnagh-baron-565-2026-precio-ficha-tecnica",
    marca: "Elnagh",
    modelo: "Baron 565",
    tipo: "Autocaravana perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Elnagh no publica PVP oficial; no inventar
    potenciaCv: 120,
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/elnagh-baron-565-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/elnagh-baron-565-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/elnagh-baron-565-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6990,
    anchoMm: 2350,
    altoMm: 2950,
    pesoKg: null,
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 5,
    parNm: null,
    traccion: null, // no publicada por el fabricante
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Camas gemelas traseras sobre maxi-garage + letto basculante eléctrico de serie: duermen 4 sin montar nada",
      "Calefacción Truma Combi 4 diésel de serie: calor sin depender del gas",
      "Garantía de carrocería de 10 años: la más larga de esta tanda",
      "5 plazas homologadas: viaja la familia al completo",
      "Puerta XL e ISOFIX: detalles pensados para el uso familiar real",
    ],
    contras: [
      "120 CV en el catálogo 2022 (140 CV en versiones recientes): verificar la mecánica de la unidad",
      "6,99 m de eslora: roza los 7 m y se nota al aparcar",
      "Elnagh no publica PVP: solo referencias de distribuidores",
      "Marca italiana con menos presencia en España que las francesas",
      "Diseño interior clásico: no esperes el minimalismo de las premium alemanas",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 13.5,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 650,
      seguroAmpliadoAnual: 1200,
      mantenimientoAnual: 600,
      costeMensualTotal: 420,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~10 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/elnagh-baron-565-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Elnagh Baron 565, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/elnagh-baron-565-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Elnagh Baron 565, salón delantero",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "elnagh-baron-565-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato 2.2: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Fiat)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Elnagh (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones del sector",
    },
    euroncap: null,
    fuenteNombre: "Elnagh (catálogos oficiales 2022 y 2025 + web oficial)",
    fuenteUrl: "https://www.elnagh.com/en/gamma/baron-en/",
  },
];
