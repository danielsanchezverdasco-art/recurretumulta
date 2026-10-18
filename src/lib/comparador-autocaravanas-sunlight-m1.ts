// Autocaravanas Sunlight — lote Merlín 1 (18/10/2026).
// Datos verificados: sunlight.de (web oficial; T 68: 741/232/293 cm, Fiat Ducato 2.2 140 CV;
// A 70: PVP oficial Alemania 66.799 €, 726/232/314 cm, Citroën Jumper 2.2 140 CV),
// outandaboutlive.co.uk (prensa especializada).
// Corrección 4 (18/10/2026): precio del A 70 confirmado en sunlight.de (oficial); eliminada la
// fuente alpacacamping.de (concesionario). Precio del A 70 en "aprox" (PVP Alemania, no España).
// T 68: peso actualizado a 2.992 kg (dato oficial vigente en sunlight.de).
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_SUNLIGHT_M1: Autocaravana[] = [
  {
    id: "sunlight-t-68-2026-precio-ficha-tecnica",
    marca: "Sunlight",
    modelo: "T 68",
    tipo: "perfilada",
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
    pesoKg: 2992, // masa en orden de marcha según sunlight.de (horquilla oficial 2.842-3.142)
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
      "Distribución de camas gemelas sobre un garaje pasante altísimo: el dormitorio trasero más práctico del segmento",
      "Versión Adventure Edition con estética negra y llantas de aleación: la perfilada con más carácter joven",
      "Carga útil de medio tonelada larga con el chasis ligero: se carga sin mirar la báscula",
      "Cama basculante eléctrica sobre el salón de 1,95 x 1,40 m: quinta plaza digna, no un apaño",
      "Zona de cocina con horno y frigorífico grande con congelador aparte: nivel de integral",
    ],
    contras: [
      "Mide 7,41 m: en campings de parcela pequeña y en pueblos con encanto se sufre",
      "El acabado Adventure es vistoso por fuera, pero dentro los materiales son los más sencillos del grupo Hymer",
      "Aislamiento pensado para tres estaciones: en invierno de verdad se echa en falta más calefacción",
      "La ducha separada es cómoda, pero el WC queda al otro lado del pasillo: de noche, paseo obligado",
      "Sin tarifa oficial para España: el importe final depende de cada punto de venta",
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
    tipo: "capuchina",
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
    pesoKg: 3008, // masa en orden de marcha según sunlight.de (horquilla oficial 2.858-3.158)
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
      "Dormir seis por el precio de una perfilada media: la fórmula familiar más económica del catálogo",
      "La cama sobre la cabina no se recoge nunca: los niños la dejan hecha toda la semana",
      "Mesa de comedor para toda la familia: desayunos sin turnos ni taburetes plegables",
      "Mecánica Citroën Jumper emparentada con la Ducato: mantenimiento en cualquier taller",
      "Dos quemadores y frío trivalente en la cocina (oficial Sunlight): menús completos lejos del camping",
    ],
    contras: [
      "La chepa aerodinámica se paga en el surtidor: gasta más que una perfilada equivalente",
      "Tres metros catorce de altura total: ojo con ramas bajas, puentes y techados",
      "Duermen seis pero los cinturones son menos: no todos los ocupantes pueden viajar",
      "Llena de gente, el peso máximo obliga a elegir bien qué se sube a bordo",
      "La tarifa base es de Alemania: el importador español suma portes, matriculación e impuestos",
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
    fuenteNombre: "Sunlight (web oficial)",
    fuenteUrl: "https://www.sunlight.de/modelle/reisemobile/alkoven/a-70/",
  },
  {
    id: "sunlight-cliff-640-2026-precio-ficha-tecnica",
    marca: "Sunlight",
    modelo: "Cliff 640 Adventure",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: 60990, // precio oficial publicado por Sunlight para España
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
    imagen: "/media/sunlight-cliff-640-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/sunlight-cliff-640-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/sunlight-cliff-640-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6360,
    anchoMm: 2050,
    altoMm: 2610, // 2.810 mm con el techo elevable opcional
    pesoKg: 2928, // masa en orden de marcha según sunlight.de (horquilla oficial 2.782-3.074 kg según equipamiento)
    mmaKg: 3500, // ampliable opcionalmente a 4.250 kg de fábrica
    carnetNecesario: "B",
    cargaUtilKg: 572, // calculada: 3.500 - 2.928 (MMA menos peso en orden de marcha)
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Camas gemelas traseras de 192x108 y 184x86 cm con acceso individual: no hay que hacer ni deshacer la cama cada día, ventaja real frente a las transversales",
      "Garaje trasero de gran volumen con 4 anillas de sujeción: admite bicis y material deportivo (pack Adventure)",
      "MMA ampliable a 4.250 kg como opción de fábrica: resuelve el problema de carga útil que tienen casi todos los camper de 6,36 m en 3,5 t",
      "Calefacción diésel opcional Combi 4 además de la de gas de serie: permite acampar en invierno sin depender de bombonas",
      "Precio de partida oficial publicado (60.990 € en España): poco común y competitivo para un camper alemán de 6,36 m con 4 plazas",
    ],
    contras: [
      "Solo 2 camas de serie (2+2): para dormir 4 hay que pagar la cama central opcional o el techo elevable, que además eleva la altura a 2,81 m",
      "El peso en orden de marcha ya parte de 2.928 kg (hasta 3.074 con opciones): con la MMA de 3.500 kg queda poca carga útil real sin la ampliación a 4.250 kg",
      "Baño compacto con ducha integrada en la misma cabina del inodoro cassette: no hay ducha separada como en rivales franceses",
      "Cambio manual de 6 marchas de serie y automático no publicado en la ficha oficial española, frente a competidores que lo ofrecen de fábrica",
      "Nevera de compresor de 84 l algo justa para 4 personas en viajes largos; la cocina es de solo 2 fuegos a gas",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 13.1,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 600,
      seguroAmpliadoAnual: 1100,
      mantenimientoAnual: 550,
      costeMensualTotal: 400,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~9,5 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/sunlight-cliff-640-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Sunlight Cliff 640 Adventure, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/sunlight-cliff-640-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Sunlight Cliff 640 Adventure, camas gemelas",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "sunlight-cliff-640-2026-precio-ficha-tecnica",
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
    fuenteNombre: "Sunlight (web oficial)",
    fuenteUrl:
      "https://www.sunlight.de/es/modelos/camper-vans/cliff-adventure/cliff-640-adventure/",
  },
];
