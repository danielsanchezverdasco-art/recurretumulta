// Autocaravanas Challenger — lote Merlín 1 (18/10/2026).
// Datos verificados: ficha técnica oficial del fabricante (challenger-motorhomes.com,
// dominio oficial de la marca, grupo Trigano).
// NOTA DE NOMBRE IMPORTANTE: en la gama 2026 oficial NO existe la edición "Start
// Edition" (era la denominación de entrada en 2024-2025); el equivalente 2026 es la
// edición "Road Edition". Se mantiene el identificador del lote 1 y la ficha describe
// el V114 2026 en su versión de entrada Road Edition. Precio no publicado → null.
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_CHALLENGER_M1: Autocaravana[] = [
  {
    id: "challenger-v114-start-edition-2026-precio-ficha-tecnica",
    marca: "Challenger",
    modelo: "V114 Road Edition",
    tipo: "Camper (furgoneta camper)",
    categoria: "Autocaravana",
    precioDesde: null, // el fabricante no publica precios; solo existen tarifas orientativas de concesionarios
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
    imagen: "/media/challenger-v114-start-edition-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/challenger-v114-start-edition-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/challenger-v114-start-edition-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990,
    anchoMm: 2050,
    altoMm: 2650,
    pesoKg: null, // el fabricante no publica cifra única oficial; sí publica "335 kg de carga útil restante para opciones"
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Gran sala de baño con ventana en un furgón de menos de 6 m: el punto fuerte destacado por el propio fabricante",
      "Cama doble trasera amovible de 149x186: al retirarla se libera un enorme espacio de carga bajo la cama",
      "Dotación de serie inusualmente completa para la versión de entrada: Traction+, Hill Descent, Isofix, preinstalación solar MPPT y de batería de litio",
      "Doble oferta de portador: Citroën Jumper de 120 CV en Road Edition y Fiat Ducato de 140 CV en ediciones superiores; automática de 8 marchas disponible",
      "Transparencia de pesos: la ficha oficial indica 335 kg de carga útil restante para opciones, dato útil para no sobrecargar",
    ],
    contras: [
      "Solo 2 camas de serie más 1 opcional en la dinette para 4 plazas homologadas: no duermen 4 sin la opción",
      "Nevera de solo 84 l: pequeña frente a los 149 l del Dreamer D55 UP",
      "Calefacción de 4.000 W (gas en Road Edition, diésel en Road Sport): justa para invierno riguroso; los 5.500 W solo llegan con el pack Arctic opcional",
      "Confusión comercial: la 'Start Edition' solicitada ya no existe en 2026 (ahora Road, Break y Premium), lo que complica comparar ofertas",
      "Techo alto fijo de 2,65 m sin opción de techo elevable: más altura permanente y sin la versatilidad del techo de fuelle del Dreamer",
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
        src: "/media/challenger-v114-start-edition-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Challenger V114 Road Edition, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/challenger-v114-start-edition-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Challenger V114 Road Edition, salón",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "challenger-v114-start-edition-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Citroën Jumper 2.2: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Citroën)",
      revisiones: [
        {
          nombre: "Revisión Citroën Jumper (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Challenger (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Citroën Jumper + recomendaciones Challenger",
    },
    euroncap: null,
    fuenteNombre: "Challenger (ficha técnica oficial 2026)",
    fuenteUrl: "https://ch.challenger-motorhomes.com/pdf/11/v114/fr",
  },
];
