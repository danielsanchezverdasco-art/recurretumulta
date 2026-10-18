// Autocaravanas Mobilvetta — lote Merlín 1 (18/10/2026).
// Datos verificados: mobilvetta.it (web oficial del modelo) + red de concesionarios europeos
// (anuncios de unidades año modelo 2026, coherentes entre sí; la web oficial aún muestra la temporada anterior).
// Mobilvetta no publica PVP: precioDesde en null, sin inventar.
// Precios "desde" orientativos para España marcados en "aprox".
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_MOBILVETTA_M1: Autocaravana[] = [
  {
    id: "mobilvetta-k-yacht-tekno-line-86-2026-precio-ficha-tecnica",
    marca: "Mobilvetta",
    modelo: "K-Yacht Tekno Line 86",
    tipo: "Autocaravana integral",
    categoria: "Autocaravana",
    precioDesde: null, // Mobilvetta no publica PVP (anuncios 2026: 109.888–121.050 € según equipamiento)
    potenciaCv: 180,
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
    imagen: "/media/mobilvetta-k-yacht-tekno-line-86-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/mobilvetta-k-yacht-tekno-line-86-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/mobilvetta-k-yacht-tekno-line-86-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7500,
    anchoMm: 2350,
    altoMm: 2980,
    pesoKg: null, // masa en orden de marcha no publicada
    mmaKg: 3500, // opcional chasis pesado AL-KO de 4.500 kg
    carnetNecesario: "B",
    cargaUtilKg: null, // no publicada
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null, // no publicado por el fabricante
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Motor Fiat de 180 CV con cambio automático de 8 velocidades: la integral más potente del lote sobre Ducato",
      "Techo panorámico SkyDome de 100 × 80 cm de serie: luz cenital en el salón sin pagar extra",
      "Frigorífico de compresor de 174 l: enfría rápido y rinde bien con calor, ideal para el sur de Europa",
      "Sistema Truma iNetX con app: control de clima y niveles de la célula desde el móvil",
      "Garantía de estanqueidad de 10 años: la más larga de las fichas publicadas hasta ahora",
    ],
    contras: [
      "7,50 m de largo y 2,98 m de alto: la más grande del lote, solo para conductores acostumbrados",
      "Masa en orden de marcha no publicada: con 3.500 kg de MMA y ese tamaño, la carga útil es una incógnita",
      "Mobilvetta no publica PVP: los anuncios 2026 se mueven entre ~110.000 y ~121.000 €",
      "Chasis pesado AL-KO de 4.500 kg como opción: tienta, pero obliga a sacarse el carnet C1",
      "Tekni-Box y electrónica embarcada: más sistemas que pueden fallar lejos del servicio oficial",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 16.1,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 700,
      seguroAmpliadoAnual: 1300,
      mantenimientoAnual: 650,
      costeMensualTotal: 465,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~11,5 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/mobilvetta-k-yacht-tekno-line-86-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Mobilvetta K-Yacht Tekno Line 86, vista frontal integral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/mobilvetta-k-yacht-tekno-line-86-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Mobilvetta K-Yacht Tekno Line 86, salón face-to-face",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "mobilvetta-k-yacht-tekno-line-86-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato: revisión cada 2 años o 48.000 km (lo que ocurra antes, según plan Fiat Professional)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 48.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de aire + filtro de gasóleo + inspección general",
          costeAproxEur: 400,
        },
        {
          nombre: "Revisión célula Mobilvetta (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 650,
      fuente: "Plan de mantenimiento Fiat Professional Ducato + recomendaciones Mobilvetta",
    },
    euroncap: null,
    fuenteNombre: "Mobilvetta (web oficial) + red de concesionarios europeos",
    fuenteUrl: "https://mobilvetta.it/en/tipologia/a-class/k-yacht-tekno-line-86/",
  },
];
