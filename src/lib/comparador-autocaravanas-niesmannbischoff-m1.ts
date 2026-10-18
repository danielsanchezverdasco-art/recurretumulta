// Autocaravanas Niesmann+Bischoff — lote Merlín 4 (18/10/2026).
// Datos verificados: web oficial niesmann-bischoff.com + fichas técnicas de
// distribuidores coincidentes (el fabricante no publica plazas ni PVP: precioDesde en null;
// precio base de prensa alemana ~114.850 € en Alemania MY2026, no oficial).
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_NIESMANNBISCHOFF_M1: Autocaravana[] = [
  {
    id: "niesmann-bischoff-ismove-69-e-2026-precio-ficha-tecnica",
    marca: "Niesmann+Bischoff",
    modelo: "iSmove 6.9 E",
    tipo: "Autocaravana perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // N+B no publica PVP oficial; no inventar
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
    imagen: "/media/niesmann-bischoff-ismove-69-e-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/niesmann-bischoff-ismove-69-e-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/niesmann-bischoff-ismove-69-e-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6995,
    anchoMm: 2278,
    altoMm: 2835,
    pesoKg: null,
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // consenso de distribuidores; el fabricante no lo publica en su web
    parNm: null,
    traccion: null, // no publicada por el fabricante
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Menos de 7 m y menos de 3,5 t con 7 soluciones patentadas: la premium compacta",
      "Cocina extensible y ducha corredera que duplica el baño: ingeniería alemana de verdad",
      "Cama basculante que desaparece en el techo: salón despejado durante el día",
      "Chasis AL-KO rebajado: centro de gravedad bajo y mejor comportamiento en carretera",
      "180 CV con cambio automático de 8 marchas: la más potente y refinada de la tanda",
    ],
    contras: [
      "Precio base de prensa ~114.850 € en Alemania: la más cara con diferencia",
      "Número de plazas no publicado por el fabricante: dato de distribuidores",
      "Mantenimiento premium: cada revisión cuesta más que en una generalista",
      "Sin PVP oficial en la web del fabricante",
      "Exclusividad con poca red: menos talleres familiarizados con sus sistemas",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 13.5,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 700,
      seguroAmpliadoAnual: 1400,
      mantenimientoAnual: 800,
      costeMensualTotal: 480,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~10 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/niesmann-bischoff-ismove-69-e-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Niesmann+Bischoff iSmove 6.9 E, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/niesmann-bischoff-ismove-69-e-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Niesmann+Bischoff iSmove 6.9 E, salón delantero",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "niesmann-bischoff-ismove-69-e-2026-precio-ficha-tecnica",
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
          nombre: "Revisión célula Niesmann+Bischoff (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 400,
        },
      ],
      costeAnualAproxEur: 800,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones del sector",
    },
    euroncap: null,
    fuenteNombre: "Niesmann+Bischoff (web oficial) + fichas de distribuidores",
    fuenteUrl: "https://www.niesmann-bischoff.com/en/models/ismove/",
  },
];
