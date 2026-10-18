// Autocaravanas Fleurette — lote Merlín 4 (18/10/2026).
// Datos verificados: catálogo oficial Fleurette 2022-DE (fleurette-florium.fr)
// (Fleurette no publica PVP: precioDesde en null).
// Nota: el "Florium Wincup 70" no existe en los catálogos oficiales; se documenta
// el modelo oficial más próximo de la gama estrecha, el Baxter 68 LMC.
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_FLEURETTE_M1: Autocaravana[] = [
  {
    id: "fleurette-baxter-68-lmc-2026-precio-ficha-tecnica",
    marca: "Fleurette",
    modelo: "Baxter 68 LMC",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Fleurette no publica PVP oficial; no inventar
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
    imagen: "/media/fleurette-baxter-68-lmc-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/fleurette-baxter-68-lmc-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/fleurette-baxter-68-lmc-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6850,
    anchoMm: 2230,
    altoMm: 2700,
    pesoKg: null,
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: null, // plazas de cama no publicadas en el catálogo consultado; confirmar con concesionario
    parNm: null,
    traccion: null, // no publicada por el fabricante
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Solo 2,23 m de ancho: la perfilada que pasa por donde otras no caben",
      "6,85 m de largo: formato manejable para viajar en pareja",
      "MMA de 3.500 kg con mecánica sencilla Fiat Ducato 2.2 de 120 CV",
      "Marca francesa especialista en formatos compactos desde hace décadas",
      "Consumo contenido por tamaño y peso",
    ],
    contras: [
      "120 CV: la menos potente de la tanda; ritmo tranquilo en autopista",
      "Interior estrecho: el salón se nota frente a una perfilada de 2,35 m",
      "Plazas de cama no publicadas en el catálogo consultado: confirmar con el concesionario",
      "Sin PVP oficial publicado por Fleurette",
      "Acabados funcionales más que lujosos: aquí se paga la compacidad, no el diseño",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 12.8,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 620,
      seguroAmpliadoAnual: 1150,
      mantenimientoAnual: 580,
      costeMensualTotal: 400,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~9,5 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/fleurette-baxter-68-lmc-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Fleurette Baxter 68 LMC, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/fleurette-baxter-68-lmc-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Fleurette Baxter 68 LMC, salón delantero",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "fleurette-baxter-68-lmc-2026-precio-ficha-tecnica",
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
          nombre: "Revisión célula Fleurette (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 580,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones del sector",
    },
    euroncap: null,
    fuenteNombre: "Fleurette (catálogo oficial 2022, fleurette-florium.fr)",
    fuenteUrl: "https://fleurette-florium.fr",
  },
];
