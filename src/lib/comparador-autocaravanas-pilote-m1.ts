// Autocaravanas Pilote — lote Merlín 1 (18/10/2026).
// Datos verificados: pilote.fr (web oficial: ficha del modelo V600G + catálogo oficial
// de la colección 2027, válida desde 01/07/2026; la base técnica coincide con las
// unidades 2026: Fiat Ducato 2.2 140 CV, 5,99 m).
// NOTA DE COLECCIÓN: las unidades 2026 montan calefacción Truma Combi 4; la colección
// 2027 incorpora de serie la Truma Combi D4 diésel. Precio no publicado → null.
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const AUTOCARAVANAS_PILOTE_M1: CocheComparador[] = [
  {
    id: "pilote-v600g-2026-precio-ficha-tecnica",
    marca: "Pilote",
    modelo: "V600G",
    tipo: "Camper (furgoneta camper)",
    categoria: "Autocaravana",
    precioDesde: null, // Pilote no publica precios en su web ni en su catálogo; la compra es solo vía red de concesionarios
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
    imagen: "/media/pilote-v600g-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/pilote-v600g-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/pilote-v600g-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990,
    anchoMm: 2050,
    altoMm: 2670,
    pesoKg: null, // Pilote no publica masa en orden de marcha; sí publica "carga útil: 630 kg"
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: 630, // cifra oficial publicada por Pilote
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Cama transversal trasera fija siempre hecha (hasta 150x194 cm con somier de plots Froli): no se monta ni se desmonta nada a diario",
      "Gran soute bajo la cama con acceso directo al compartimento de gas y al depósito de agua limpia: admite bicis y bultos voluminosos sin plegar la cama",
      "Baño 3-en-1 con tabique pivotante (novedad 2027) que separa WC/lavabo de la ducha: ducha real separada en solo 5,99 m, algo raro en este formato",
      "Nevera de compresor a elegir entre 90 l y 138 l sin rejillas exteriores: mejor aislamiento y rendimiento con calor exterior que una trivalente de absorción",
      "Salón para 4 con mesa sobre raíles que se desplaza y se puede montar fuera: comedor interior y exterior flexible sin piezas sueltas que guardar",
    ],
    contras: [
      "Solo 2 plazas para dormir de serie; la tercera es una opción en el salón que hay que montar cada noche: justo para más de una pareja o con niños",
      "Pilote no publica ningún precio oficial: imposible comparar la tarifa base sin pasar por concesionario",
      "Caja manual de serie; el cambio automático (140, 160 o 180 CV) es una opción de pago en un segmento donde el automático ya es estándar en rivales",
      "Altura total de 2,67 m con cama transversal de 194 cm de largo útil: personas muy altas pueden ir justas tanto en cama como en la ducha (790x860)",
      "Dotación base contenida para su posicionamiento: llantas de acero de 15\", climatización manual y nevera pequeña (90 l) si no se paga la de 138 l",
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
        src: "/media/pilote-v600g-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Pilote V600G, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/pilote-v600g-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Pilote V600G, baño 3-en-1",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "pilote-v600g-2026-precio-ficha-tecnica",
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
          nombre: "Revisión célula Pilote (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Pilote",
    },
    euroncap: null,
    fuenteNombre: "Pilote (web oficial + catálogo colección 2027)",
    fuenteUrl: "https://www.pilote.fr/fourgon/v600g-pilote/",
  },
];
