// Autocaravanas Bavaria — lote Merlín 4 (18/10/2026).
// Datos verificados: web oficial bavaria-camping-car.com (grupo Pilote)
// (Bavaria no publica PVP: precioDesde en null).
// Nota: el "I 740 TG" no existe en los catálogos oficiales; se documenta el modelo
// oficial más próximo, el I740FGJ Nomade.
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const AUTOCARAVANAS_BAVARIA_M1: CocheComparador[] = [
  {
    id: "bavaria-i740fgj-nomade-2026-precio-ficha-tecnica",
    marca: "Bavaria",
    modelo: "I740FGJ Nomade",
    tipo: "Autocaravana integral",
    categoria: "Autocaravana",
    precioDesde: null, // Bavaria no publica PVP oficial; no inventar
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
    imagen: "/media/bavaria-i740fgj-nomade-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/bavaria-i740fgj-nomade-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/bavaria-i740fgj-nomade-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7560,
    anchoMm: 2300,
    altoMm: 2850,
    pesoKg: null,
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: null, // no publicada por el fabricante
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Integral con lits jumeaux sobre gran soute: dos camas individuales que se unen en king size",
      "Caja automática en la versión Nomade: conducir 7,56 m sin estrés",
      "Grupo Pilote: fabricación francesa con red de servicio consolidada",
      "4 plazas de viaje y 4 de cama: sin salones convertibles que montar cada noche",
      "Gran soute bajo las camas: garaje de verdad en una integral",
    ],
    contras: [
      "7,56 m de eslora: la más larga de esta tanda; pide áreas y aparcamientos grandes",
      "140 CV para 3.500 kg: justa en puertos de montaña con la célula cargada",
      "Sin PVP oficial publicado por Bavaria",
      "Consumo de integral grande: el presupuesto de gasóleo sube",
      "Anchura de 2,30 m: en carreteras secundarias estrechas hay que ir con calma",
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
        src: "/media/bavaria-i740fgj-nomade-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Bavaria I740FGJ Nomade, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/bavaria-i740fgj-nomade-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Bavaria I740FGJ Nomade, salón delantero",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "bavaria-i740fgj-nomade-2026-precio-ficha-tecnica",
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
          nombre: "Revisión célula Bavaria (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 650,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones del sector",
    },
    euroncap: null,
    fuenteNombre: "Bavaria (web oficial, grupo Pilote)",
    fuenteUrl: "https://www.bavaria-camping-car.com/integral/i740fgj-nomade/",
  },
];
