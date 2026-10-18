// Autocaravanas Knaus — lote Merlín 1 (18/10/2026).
// Datos verificados: knaus.com (web oficial; BOXLIFE PLATINUM SELECTION: calefacción
// diésel de serie, 599/205/258 cm, batalla 403 cm; SKY TI 650 MEG: página oficial del modelo)
// + fichas de catálogo 2026 de la red oficial Knaus reproducidas por concesionarios (8+ anuncios coincidentes).
// Precio "desde" no publicado por el fabricante ni para el 600 MQ ni para el Sky TI 650 MEG → null (no inventar);
// el portal alpacacamping.de indica un precio de entrada orientativo de ~81.000 € en Alemania para el Sky TI.
// CORRECCIÓN 4 (18/10/2026, solo BoxLife 600 MQ): datos knaus.com confirmados; peso y carga
// útil proceden de fichas de catálogo 2026 de la red oficial reproducidas por concesionarios
// → marcados «no oficial» en "aprox".
// NOTA Sky TI 650 MEG: la ficha corresponde al año modelo 2026 sobre Fiat Ducato 140 CV
// (la generación 2027 cambia al chasis VW Crafter, según knaus.com).
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
// CORRECCIÓN 4 (18/10/2026, Sky TI 650 MEG): peso y carga útil proceden de fichas de
// catálogo 2026 de la red oficial reproducidas por concesionarios → marcados «no oficial»
// en "aprox" (mismo criterio aplicado al BoxLife 600 MQ en la tanda 2).
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_KNAUS_M1: Autocaravana[] = [
  {
    id: "knaus-boxlife-600-mq-2026-precio-ficha-tecnica",
    marca: "Knaus",
    modelo: "BoxLife 600 MQ",
    tipo: "camper",
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
    pesoKg: 2967, // «no oficial»: ficha de catálogo 2026 de la red oficial Knaus reproducida por concesionarios; el PDF técnico oficial Knaus lo expresa como horquilla 2.693-2.976 kg con tolerancia ±5%
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: 533, // «no oficial»: calculada desde peso de catálogo de red (3.500 - 2.967)
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["pesoKg", "cargaUtilKg"], // «no oficial»: peso de ficha de catálogo de red, no de knaus.com
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
  {
    id: "knaus-sky-ti-650-meg-2026-precio-ficha-tecnica",
    marca: "Knaus",
    modelo: "Sky TI 650 MEG",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Knaus no publica PVP oficial (solo configurador); alpacacamping.de indica entrada orientativa ~81.000 € en Alemania
    potenciaCv: 140, // Fiat Ducato 2.2 Multijet (103 kW), Euro 6e; cambio manual de 6v de serie, automático de 8v disponible
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
    imagen: "/media/knaus-sky-ti-650-meg-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/knaus-sky-ti-650-meg-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/knaus-sky-ti-650-meg-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6960,
    anchoMm: 2320,
    altoMm: 2790,
    pesoKg: 2990, // «no oficial»: ficha de catálogo 2026 de la red oficial Knaus reproducida por concesionarios (no knaus.com); 3.119 kg en orden de marcha según la misma ficha
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: 381, // «no oficial»: calculada desde peso de catálogo de red (3.500 − 2.990)
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas de circulación; 2 camas gemelas fijas + plazas opcionales
    parNm: null, // no publicado en la documentación oficial consultada
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["pesoKg", "cargaUtilKg"], // «no oficial»: peso de ficha de catálogo de red, no de knaus.com
    pros: [
      "Trasera FoldXpand con portón plegable: casi 10 cm más de espacio interior sin sumar un milímetro por fuera",
      "ServiceBox en la zaga: llaves de paso, conexiones y válvulas accesibles desde fuera sin entrar en la célula",
      "Camas gemelas traseras que se unen en una superficie doble: el dormitorio se adapta a la pareja sin desmontar nada",
      "Carrocería de 2,32 m de ancho con techo GFK antizariz granizo y bastidor perimetral Pro.tec: construcción pensada para durar",
      "Fiat Ducato de 140 CV con cambio automático de 8 velocidades disponible: la perfilada familiar sin pelearse con el embrague en ciudad",
    ],
    contras: [
      "Knaus no publica precio oficial: cada concesionario configura y el 'desde' real ronda los 81.000 € en Alemania",
      "Carga útil de 381 kg en orden de marcha: con 4 personas y equipamiento hay que hacer números antes de cargar",
      "Es la última generación sobre Fiat Ducato: en 2027 el Sky TI pasa al chasis VW Crafter, así que se compra la plataforma saliente",
      "Solo 2 camas fijas de serie: dormir 4 exige el salón convertible o la cama abatible opcional",
      "Con 2,79 m de alto y 6,96 m de largo, los parkings subterráneos y muchos cascos históricos quedan descartados",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 16.8,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 650,
      seguroAmpliadoAnual: 1200,
      mantenimientoAnual: 600,
      costeMensualTotal: 320,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~10,5 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/knaus-sky-ti-650-meg-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Knaus Sky TI 650 MEG, vista tres cuartos delantera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/knaus-sky-ti-650-meg-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Knaus Sky TI 650 MEG, salón y camas gemelas",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "knaus-sky-ti-650-meg-2026-precio-ficha-tecnica",
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
    fuenteUrl: "https://www.knaus.com/en-uk/motorhomes/sky-ti/layouts-data/650-meg/packages/",
  },
];
