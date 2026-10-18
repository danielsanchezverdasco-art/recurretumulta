// Autocaravanas Bürstner — lote Merlín 1 (18/10/2026).
// Datos verificados: buerstner.com (web oficial; precio PVP recomendado Alemania, puede diferir en España).
// Precios "desde" orientativos para España marcados en "aprox".
// Corrección 4 (18/10/2026): sin fuentes no oficiales; PVP 80.750 € = precio recomendado en Alemania
// publicado en buerstner.com (verificado el 18/10; la web ha reestructurado sus URLs de gama desde
// entonces, el enlace profundo de la Lyseo TD devuelve 404 y se deja la raíz oficial).
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_BURSTNER_M1: Autocaravana[] = [
  {
    id: "burstner-lyseo-td-690-g-2026-precio-ficha-tecnica",
    marca: "Bürstner",
    modelo: "Lyseo TD 690 G",
    tipo: "Autocaravana perfilada",
    categoria: "Autocaravana",
    precioDesde: 80750,
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
    imagen: "/media/burstner-lyseo-td-690-g-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/burstner-lyseo-td-690-g-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/burstner-lyseo-td-690-g-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6990,
    anchoMm: 2300,
    altoMm: 2950,
    pesoKg: 2972, // masa en orden de marcha ±5 % según Bürstner (rango 2823–3121 kg)
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: 528, // cálculo 3500 − 2972; el fabricante publica 179 kg de equipamiento opcional
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null, // no publicado por Bürstner
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde", "cargaUtilKg"],
    pros: [
      "Aislamiento «winterproof» y suelo Thermofloor de serie: de las pocas perfiladas pensadas para rodar todo el año en serio",
      "Dos camas individuales traseras (199 y 190 cm) con colchones de espuma multizona: se duerme sin montar ni desmontar nada",
      "Frigorífico de 142 l más 15 l de congelador: capacidad de nevera grande en una perfilada de menos de 7 m",
      "Agua limpia de 100 l y calefacción combinada de gas y agua caliente: aguanta varios días lejos de áreas de servicio",
      "Techo y suelo de GRP con 5.ª plaza y cama delantera abatible disponibles como opción: crece con la familia",
    ],
    contras: [
      "80.750 € de partida en Alemania: la factura alemana la sitúa por encima de muchas perfiladas equivalentes",
      "El motor de 140 CV es el único de serie: con la auto cargada y remolque se queda justo en puertos de montaña",
      "Con 2,30 m de ancho y 2,95 m de alto, aparcar en cascos antiguos o bajo techados bajos exige planificar la ruta",
      "La 5.ª plaza y la cama abatible delantera son opcionales: la configuración familiar completa encarece bastante el precio final",
      "179 kg de equipamiento opcional según el fabricante: hay que elegir extras con calculadora en mano para no pasarse de 3.500 kg",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 14.7,
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
        src: "/media/burstner-lyseo-td-690-g-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Bürstner Lyseo TD 690 G, vista tres cuartos delantera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/burstner-lyseo-td-690-g-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Bürstner Lyseo TD 690 G, salón y dormitorio",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "burstner-lyseo-td-690-g-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato: revisión cada 2 años o 48.000 km (lo que ocurra antes, según plan Fiat Professional)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 48.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de aire + filtro de gasóleo + inspección general",
          costeAproxEur: 400,
        },
        {
          nombre: "Revisión célula Bürstner (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 650,
      fuente: "Plan de mantenimiento Fiat Professional Ducato + recomendaciones Bürstner",
    },
    euroncap: null,
    fuenteNombre: "Bürstner (web oficial)",
    fuenteUrl: "https://www.buerstner.com/",
  },
];
