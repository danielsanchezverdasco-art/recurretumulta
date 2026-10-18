// Autocaravanas CI (Caravans International) — lote Merlín 4 (18/10/2026).
// Datos verificados: web oficial CI (grupo Trigano) + ficha técnica de concesionario
// (CI no publica PVP: precioDesde en null).
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_CI_M1: Autocaravana[] = [
  {
    id: "ci-horon-84-xt-2026-precio-ficha-tecnica",
    marca: "CI",
    modelo: "Horon 84 XT",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // CI no publica PVP oficial; no inventar
    potenciaCv: 165,
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
    imagen: "/media/ci-horon-84-xt-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/ci-horon-84-xt-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/ci-horon-84-xt-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7450,
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
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: [],
    pros: [
      "7,45 m con lits jumeaux traseros convertibles en cama king size: dormitorio de hotel",
      "Maxi garaje bajo las camas gemelas: cabe todo el equipo sin hacer tetris",
      "Ford Transit 2.0 EcoBlue de 165 CV: el chasis más potente de esta tanda",
      "5 plazas de viaje y 5 de cama: la familiar grande de verdad, sin convertibles",
      "Gran salón delantero para días de lluvia con niños",
    ],
    contras: [
      "7,45 m de eslora: necesita áreas grandes y conductor acostumbrado al tamaño",
      "Con 5 ocupantes y equipaje hay que vigilar la MMA de 3.500 kg: la carga útil se agota rápido",
      "Consumo y peajes de vehículo grande: viajar cuesta más que en una camper",
      "Sin PVP oficial publicado por CI",
      "Estética italiana clásica: si buscas diseño nórdico, mira otra gama",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 14.4,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 700,
      seguroAmpliadoAnual: 1300,
      mantenimientoAnual: 650,
      costeMensualTotal: 470,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~11 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/ci-horon-84-xt-2026-precio-ficha-tecnica-oficial.webp",
        alt: "CI Horon 84 XT, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/ci-horon-84-xt-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del CI Horon 84 XT, salón delantero",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "ci-horon-84-xt-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Ford Transit 2.0: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Ford)",
      revisiones: [
        {
          nombre: "Revisión Ford Transit (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 380,
        },
        {
          nombre: "Revisión célula CI (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 650,
      fuente: "Plan de mantenimiento Ford Transit + recomendaciones del sector",
    },
    euroncap: null,
    fuenteNombre: "CI Caravans International (web oficial, grupo Trigano)",
    fuenteUrl: "https://www.caravansinternational.it/fr/gamma/horon-fit/",
  },
];
