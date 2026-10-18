// Autocaravanas Hymer — lote Merlín 1 (18/10/2026).
// Datos verificados: hymer.com (web oficial; precios PVP recomendado Alemania, pueden diferir en España),
// outandaboutlive.co.uk (prensa especializada), fichas de catálogo 2026 de la red oficial.
// Precios "desde" orientativos para España marcados en "aprox".
// Corrección 4 (18/10/2026): precios confirmados en hymer.com (oficiales); eliminada la mención a
// alpacacamping.de (concesionario). NOTA B-MC I 600: los 139.900 € son el "desde" de la GAMA B-MC I en
// Alemania (corresponde a la variante I 580); el I 600 no tiene PVP específico publicado por Hymer.
// NOTA ML-T 580 4x4: la tracción total exige la variante de peso de 4.100 kg (opcional 4.430 kg),
// por lo que esta versión necesita carnet C1 (la ML-T 580 de tracción simple sí va con B).
// En el año modelo 2026 Hymer ofrece la versión 4x4 también como edición especial «ML-T 580 CrossTrail»
// (desde 165.900 € en Alemania, hymer.com): el precio "desde" de la ficha se toma de esa edición,
// único PVP oficial publicado por Hymer para el ML-T 580 4x4 en MY2026.
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_HYMER_M1: Autocaravana[] = [
  {
    id: "hymer-grand-canyon-s-2026-precio-ficha-tecnica",
    marca: "Hymer",
    modelo: "Grand Canyon S",
    tipo: "Camper (furgoneta camper)",
    categoria: "Autocaravana",
    precioDesde: 98200,
    potenciaCv: 150,
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
    imagen: "/media/hymer-grand-canyon-s-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/hymer-grand-canyon-s-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/hymer-grand-canyon-s-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5930,
    anchoMm: 2060,
    altoMm: 2760,
    pesoKg: null, // masa en orden de marcha no publicada por Hymer para esta versión
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: "Trasera (4x4 opcional)",
    emisionesCo2: null,
    aprox: ["precioDesde"],
    pros: [
      "Camper de menos de 6 m (5,93 m) sobre Mercedes Sprinter: se conduce y aparca como una furgoneta grande",
      "Versión 4x4 disponible: la camper de Hymer pensada para pistas y escapadas fuera del asfalto",
      "Camas gemelas traseras con colchones de muelles enrollables: se pliegan para ganar maletero",
      "Batería de litio LiFePO4 de 80 Ah de serie (ampliable): buena autonomía fuera de la red",
      "Techo elevable opcional: 4 plazas para dormir en 5,93 m sin renunciar al garaje trasero",
    ],
    contras: [
      "Precio de partida alto (~98.200 € en Alemania): de las campers más caras de su tamaño",
      "Con 2,06 m de ancho, el pasillo y el baño son justos para dos personas a la vez",
      "Cocina compacta de dos quemadores con frigorífico de 90 l: justa para cocinar a diario dentro",
      "El 4x4 y los packs (Xperience, etc.) disparan el precio por encima de los 120.000 €",
      "MMA de 3.500 kg: con 4 ocupantes y equipamiento 4x4 hay que vigilar la carga útil",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 12.6,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 600,
      seguroAmpliadoAnual: 1100,
      mantenimientoAnual: 550,
      costeMensualTotal: 390,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~9 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/hymer-grand-canyon-s-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Hymer Grand Canyon S, vista tres cuartos delantera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/hymer-grand-canyon-s-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Hymer Grand Canyon S, salón y cocina",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "hymer-grand-canyon-s-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Mercedes Sprinter: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Mercedes-Benz)",
      revisiones: [
        {
          nombre: "Revisión Mercedes Sprinter (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de aire + inspección general",
          costeAproxEur: 450,
        },
        {
          nombre: "Revisión célula Hymer (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 700,
      fuente: "Plan de mantenimiento Mercedes-Benz Sprinter + recomendaciones Hymer",
    },
    euroncap: null,
    fuenteNombre: "Hymer (web oficial) + Out & About Live",
    fuenteUrl: "http://www.hymer.com/de/en/camper-vans-class-b",
  },
  {
    id: "hymer-b-mc-i-600-2026-precio-ficha-tecnica",
    marca: "Hymer",
    modelo: "B-MC I 600",
    tipo: "Autocaravana integral",
    categoria: "Autocaravana",
    precioDesde: 139900, // "desde" de la gama B-MC I en Alemania (variante I 580); sin PVP específico del I 600
    potenciaCv: 150,
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
    imagen: "/media/hymer-b-mc-i-600-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/hymer-b-mc-i-600-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/hymer-b-mc-i-600-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7190,
    anchoMm: 2290,
    altoMm: 2980,
    pesoKg: null, // masa en orden de marcha no publicada por Hymer para esta versión
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde"],
    pros: [
      "Integral de 7,19 m sobre chasis SLC de Mercedes: ligera y estable, se conduce con carnet B",
      "Carrocería integral sin cabina de furgoneta: parabrisas panorámico y salón con mucha luz",
      "Cama basculante eléctrica sobre el salón + camas traseras: 4 plazas sin capuchina",
      "Depósitos grandes (180 l agua limpia / 150 l grises): autonomía para varios días fuera de camping",
      "Hymer Smart Connect de serie: control de la célula desde el móvil",
    ],
    contras: [
      "Desde ~139.900 € en Alemania: precio de acceso muy alto para una integral de 7,2 m",
      "Con 2,98 m de alto y 7,19 m de largo, ni entra en parkings ni pasa desapercibida en pueblos",
      "El motor base de 150 CV se queda corto con la integral cargada y el remolque",
      "La cama basculante obliga a recoger el salón cada noche si se usa a diario",
      "MMA de 3.500 kg justos: los packs de equipamiento comen carga útil rápidamente",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 14.4,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 700,
      seguroAmpliadoAnual: 1300,
      mantenimientoAnual: 650,
      costeMensualTotal: 450,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~10,5 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/hymer-b-mc-i-600-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Hymer B-MC I 600, vista frontal integral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/hymer-b-mc-i-600-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Hymer B-MC I 600, salón en L",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "hymer-b-mc-i-600-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Mercedes Sprinter: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Mercedes-Benz)",
      revisiones: [
        {
          nombre: "Revisión Mercedes Sprinter (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de aire + inspección general",
          costeAproxEur: 450,
        },
        {
          nombre: "Revisión célula Hymer (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 700,
      fuente: "Plan de mantenimiento Mercedes-Benz Sprinter + recomendaciones Hymer",
    },
    euroncap: null,
    fuenteNombre: "Hymer (web oficial)",
    fuenteUrl: "https://www.hymer.com/de/en/motorhomes/class-a-motorhomes",
  },
  {
    id: "hymer-ml-t-580-4x4-2026-precio-ficha-tecnica",
    marca: "Hymer",
    modelo: "ML-T 580 4x4",
    tipo: "Autocaravana perfilada",
    categoria: "Autocaravana",
    precioDesde: 165900, // PVP base Alemania de la edición ML-T 580 CrossTrail (MY2026), único precio oficial publicado para la versión 4x4; en España puede diferir
    potenciaCv: 190, // Mercedes Sprinter 419 CDI (140 kW); también disponible 417 CDI de 170 CV
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
    imagen: "/media/hymer-ml-t-580-4x4-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/hymer-ml-t-580-4x4-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/hymer-ml-t-580-4x4-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6980,
    anchoMm: 2220,
    altoMm: 2920,
    pesoKg: null, // masa en orden de marcha no publicada por Hymer para esta versión
    mmaKg: 4100, // la tracción 4x4 exige la variante de peso de 4.100 kg (opcional 4.430 kg)
    carnetNecesario: "C1",
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 3, // 2 plazas de serie (camas gemelas); 3 con cama abatible delantera opcional
    parNm: null, // no publicado en la documentación oficial consultada
    traccion: "Total (4x4)",
    emisionesCo2: null,
    aprox: ["precioDesde"],
    pros: [
      "Tracción total permanente Torque-on-Demand con control de descenso: de las pocas perfiladas premium que se meten en pista sin complejos",
      "Mercedes Sprinter 419 CDI de 190 CV con cambio automático 9G-Tronic: empuja con solvencia los 4.100 kg del conjunto",
      "Variante de peso de 4.100 kg de serie en el 4x4 (ampliable a 4.430 kg): la carga útil no se evapora con el equipamiento off-road",
      "Camas gemelas traseras convertibles en doble + cama abatible delantera opcional: 3 plazas para dormir con el garaje intacto",
      "Edición CrossTrail (MY2026): 320 Ah de litio, inversor de 1.800 W, doble panel solar de 95 W, calefacción diésel de 6 kW y router 5G para viajar autosuficiente",
    ],
    contras: [
      "165.900 € de partida en Alemania (edición CrossTrail): el 4x4 cuesta del orden de 48.000 € más que una ML-T de tracción simple",
      "Con 4.100 kg de MMA exige el carnet C1: adiós al permiso B que basta para la ML-T 580 normal",
      "2,92 m de alto y neumáticos All-Terrain de 16\": ni garajes ni buena parte de los parkings subterráneos son opción",
      "El 4x4, el peso y los neumáticos de tacos elevan el consumo frente a la ML-T de tracción simple: hay que planificar repostajes en rutas largas",
      "Mantenimiento del 4x4 en la red Mercedes y recambios de célula Hymer: fuera de Alemania cualquier reparación tarda más",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 19.2,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 700,
      seguroAmpliadoAnual: 1300,
      mantenimientoAnual: 650,
      costeMensualTotal: 355,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~12 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/hymer-ml-t-580-4x4-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Hymer ML-T 580 4x4, vista tres cuartos delantera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/hymer-ml-t-580-4x4-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Hymer ML-T 580 4x4, salón y camas gemelas",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "hymer-ml-t-580-4x4-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Mercedes Sprinter: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Mercedes-Benz)",
      revisiones: [
        {
          nombre: "Revisión Mercedes Sprinter (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de aire + inspección general",
          costeAproxEur: 450,
        },
        {
          nombre: "Revisión célula Hymer (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 700,
      fuente: "Plan de mantenimiento Mercedes-Benz Sprinter + recomendaciones Hymer",
    },
    euroncap: null,
    fuenteNombre: "Hymer (web oficial) + fichas de catálogo 2026 de la red oficial",
    fuenteUrl: "https://www.hymer.com/de/en/home/hymer-ml-t-580-crosstrail/p/3594259",
  },
];
