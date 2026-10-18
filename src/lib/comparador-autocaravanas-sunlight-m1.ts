// Autocaravanas Sunlight — lote Merlín 1 (18/10/2026).
// Datos verificados: sunlight.de (web oficial; T 68: 741/232/293 cm, 3.007 kg en orden de marcha,
// Fiat Ducato 2.2 140 CV), alpacacamping.de (gama capuchina A: A 70 desde ~66.799 €, Citroën Jumper),
// outandaboutlive.co.uk (prensa especializada).
// Precio del A 70 marcado en "aprox" (Alemania); precio del T 68 en España no verificado (null).
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const AUTOCARAVANAS_SUNLIGHT_M1: CocheComparador[] = [
  {
    id: "sunlight-t-68-2026-precio-ficha-tecnica",
    marca: "Sunlight",
    modelo: "T 68",
    tipo: "Autocaravana perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // precio en España no verificado; no inventar
    potenciaCv: 140,
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
    imagen: "/media/sunlight-t-68-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/sunlight-t-68-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/sunlight-t-68-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7410,
    anchoMm: 2320,
    altoMm: 2930,
    pesoKg: 3007, // masa en orden de marcha según sunlight.de (horquilla 2.857-3.157)
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
      "Camas gemelas traseras de 2,15 m sobre garaje gigante: la distribución favorita de las parejas viajeras",
      "Cama basculante eléctrica sobre el salón + cama del salón: hasta 5 plazas en 7,41 m",
      "Carga útil de ~549 kg: de las perfiladas que más permiten cargar sin pasar de 3.500 kg",
      "Fiat Ducato 2.2 de 140 CV con chasis de 3.500 kg (ampliable a 3.650 kg): mecánica sencilla y barata",
      "Sunlight es la marca de acceso del grupo Erwin Hymer: precio contenido con respaldo de gran grupo",
    ],
    contras: [
      "Con 7,41 m es de las perfiladas más largas: maniobrar en campings pequeños exige práctica",
      "Acabados sencillos y plásticos duros: se nota que es la gama de entrada del grupo",
      "La quinta plaza es el salón convertible: menos cómoda que las camas fijas para uso diario",
      "Aislamiento y calefacción justos para invierno serio: mejor de marzo a noviembre",
      "Precio en España no publicado: hay que pedir oferta para comparar con rivales",
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
        src: "/media/sunlight-t-68-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Sunlight T 68, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/sunlight-t-68-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Sunlight T 68, camas gemelas",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "sunlight-t-68-2026-precio-ficha-tecnica",
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
          nombre: "Revisión célula Sunlight (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Sunlight",
    },
    euroncap: null,
    fuenteNombre: "Sunlight (web oficial) + Out & About Live",
    fuenteUrl:
      "https://www.sunlight.de/en-int/models/motorhomes/low-profile-motorhomes-adventure/t-68-adventure/",
  },
  {
    id: "sunlight-a-70-2026-precio-ficha-tecnica",
    marca: "Sunlight",
    modelo: "A 70",
    tipo: "Autocaravana capuchina",
    categoria: "Autocaravana",
    precioDesde: 66799,
    potenciaCv: 140,
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
    imagen: "/media/sunlight-a-70-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/sunlight-a-70-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/sunlight-a-70-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7260,
    anchoMm: 2320,
    altoMm: 3140,
    pesoKg: null, // masa en orden de marcha no publicada de forma única para esta versión
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 6,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde"],
    pros: [
      "Capuchina familiar de 7,26 m para 6: cama sobre cabina + basculante + salón convertible",
      "La capuchina más barata del grupo Erwin Hymer (desde ~66.799 €): 6 plazas sin arruinarse",
      "Citroën Jumper 2.2/2.3 de ~140 CV: mecánica común, recambios baratos en toda Europa",
      "Cama de capuchina siempre hecha: los niños duermen arriba sin montar nada cada noche",
      "Salón amplio para 6 comensales: la distribución que mejor aprovecha el metro cuadrado",
    ],
    contras: [
      "3,14 m de alto: peor aerodinámica, más consumo y ojo con ramas y parkings cubiertos",
      "La capuchina penaliza el consumo en autopista frente a una perfilada equivalente",
      "Acabados básicos: es la puerta de entrada, no una premium",
      "Con 6 ocupantes y 3.500 kg de MMA, la carga útil obliga a viajar ligero",
      "El precio orientativo es alemán: en España el PVP final lo pone el concesionario",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 14.4,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 650,
      seguroAmpliadoAnual: 1200,
      mantenimientoAnual: 600,
      costeMensualTotal: 430,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~10,5 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/sunlight-a-70-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Sunlight A 70, vista frontal con capuchina",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/sunlight-a-70-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Sunlight A 70, salón familiar",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "sunlight-a-70-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Citroën Jumper: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Citroën)",
      revisiones: [
        {
          nombre: "Revisión Citroën Jumper (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Sunlight (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Citroën Jumper + recomendaciones Sunlight",
    },
    euroncap: null,
    fuenteNombre: "Sunlight (web oficial) + AlpacaCamping",
    fuenteUrl: "https://www.alpacacamping.de/fahrzeuge/en/model/sunlight-alkoven-a/",
  },
];
