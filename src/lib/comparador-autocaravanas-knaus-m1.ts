// Autocaravanas Knaus — lote Merlín 1 (18/10/2026).
// Datos verificados: knaus.com (web oficial; BOXLIFE PLATINUM SELECTION: calefacción
// diésel de serie, 599/205/258 cm, batalla 403 cm) + fichas de catálogo 2026 de la red
// oficial Knaus reproducidas por concesionarios (8+ anuncios coincidentes).
// Precio "desde" no publicado por el fabricante para el 600 MQ → null (no inventar).
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const AUTOCARAVANAS_KNAUS_M1: CocheComparador[] = [
  {
    id: "knaus-boxlife-600-mq-2026-precio-ficha-tecnica",
    marca: "Knaus",
    modelo: "BoxLife 600 MQ",
    tipo: "Camper (furgoneta camper)",
    categoria: "Autocaravana",
    precioDesde: null, // el fabricante publica "desde" de otros modelos, pero no del 600 MQ
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
    imagen: "/media/knaus-boxlife-600-mq-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/knaus-boxlife-600-mq-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/knaus-boxlife-600-mq-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990,
    anchoMm: 2050,
    altoMm: 2580,
    pesoKg: 2967, // ficha de catálogo 2026 (red oficial); el PDF técnico oficial Knaus lo expresa como horquilla 2.693-2.976 kg con tolerancia ±5%
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: 533, // calculada: 3.500 - 2.967 (MMA menos peso en orden de marcha)
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Calefacción diésel Truma Combi 6 D de serie: calefacción y agua caliente sin depender de bombonas de gas en invierno",
      "Baño XL con pared giratoria: un giro convierte el aseo en una ducha amplia con zona seca separada",
      "Trasera Vario con cama basculante regulable en altura (opcional): de dormitorio a garaje gigante en segundos sin desmontar la cama",
      "Nivel de acabado Platinum de serie: llantas de aleación de 16\", parachoques en color carrocería, claraboya Midi-Heki 700x500 y cámara precableada",
      "Cocina de 2 fuegos con frigorífico de compresor de 95 l y 102 l de agua limpia: autonomía de serie superior a la media",
    ],
    contras: [
      "La cama transversal se estrecha a 134 cm en los pies y mide 184 cm de largo: personas altas duermen justas",
      "Las unidades 2026 en stock listan 80.000-87.000 € en concesionarios: tarifa claramente superior a campers equivalentes",
      "El cambio automático de 8 velocidades solo llega dentro del paquete 'Autonomous Driving Nivel 2', un extra caro",
      "La propia ficha oficial Knaus advierte de que la carga útil restante puede caer hasta unos 61 kg con opciones: techo elevable, toldo y 4 ocupantes la devoran",
      "El baño con pared giratoria obliga a reconfigurarlo cada vez que se ducha: no es un baño fijo de uso inmediato",
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
        src: "/media/knaus-boxlife-600-mq-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Knaus BoxLife 600 MQ, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/knaus-boxlife-600-mq-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Knaus BoxLife 600 MQ, baño con pared giratoria",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "knaus-boxlife-600-mq-2026-precio-ficha-tecnica",
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
          nombre: "Revisión célula Knaus (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Knaus",
    },
    euroncap: null,
    fuenteNombre: "Knaus (web oficial) + fichas de catálogo 2026 de la red oficial",
    fuenteUrl: "https://www.knaus.com/es-es/camper-vans-campers/boxlife-platinum-selection",
  },
];
