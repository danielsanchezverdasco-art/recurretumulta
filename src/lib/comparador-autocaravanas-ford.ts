// Campers Ford — ficha 1 (lote caravanas 1, 17/10/2026; corregida 18/10/2026).
// Datos verificados: Ford España (web oficial) + Westfalia (datos técnicos),
// precios orientativos España 2025 según prensa especializada (marcado en
// "aprox"). MMA 3.300 kg según unidades 2026 (Tourneo Custom L2).
// Fotos: reales del modelo exacto (Tourneo Custom Westfalia), verificadas
// visualmente; son de concesionario, NO del press kit oficial (sin "-oficial").
import type { CocheComparador } from "./comparador-coches-data.ts";

export const AUTOCARAVANAS_FORD: CocheComparador[] = [
  {
    id: "ford-nugget-plus-2026-precio-ficha-tecnica",
    marca: "Ford",
    modelo: "Nugget Plus",
    tipo: "Camper",
    categoria: "Autocaravana",
    precioDesde: 75000,
    potenciaCv: 136,
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
    imagen:
      "/media/ford-nugget-plus-2026-precio-ficha-tecnica.webp",
    imagenOficial:
      "/media/ford-nugget-plus-2026-precio-ficha-tecnica.webp",
    imagenInteriorOficial:
      "/media/ford-nugget-plus-2026-precio-ficha-tecnica-3.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5450,
    anchoMm: 2032,
    altoMm: 2065,
    pesoKg: 2450,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    // MMA 3.300 kg (unidades 2026 Tourneo Custom L2); carnet B (≤3.500 kg).
    mmaKg: 3300,
    carnetNecesario: "B",
    cargaUtilKg: 850, // 3.300 − 2.450 kg en orden de marcha (aprox.)
    aprox: ["precioDesde", "pesoKg"],
    pros: [
      "Conversión Westfalia de fábrica: calidad alemana con garantía Ford",
      "Versión PHEV de 233 CV con 50 km eléctricos: única camper híbrida enchufable",
      "Techo elevable + baño con WC y ducha: más equipada que la California",
      "5,45 m de largo: ágil para el día a día (con 2,06 m de alto, ojo con los parkings subterráneos)",
      "Precio desde ~75.000 €: más barata que la California Ocean",
    ],
    contras: [
      "La versión PHEV supera los 80.000 €: el precio se dispara con opciones",
      "El interior Westfalia es más funcional que premium",
      "Red de talleres camper Ford menor que la de Volkswagen",
      "Con 4 ocupantes el espacio es justo para viajes largos",
      "El techo elevable manual exige algo de práctica",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 11,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 550,
      seguroAmpliadoAnual: 1000,
      mantenimientoAnual: 450,
      costeMensualTotal: 380,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~8 l/100 km de gasóleo y seguro a todo riesgo.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/ford-nugget-plus-2026-precio-ficha-tecnica-2.webp",
        alt: "Ford Nugget Plus, vista tres cuartos",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/ford-nugget-plus-2026-precio-ficha-tecnica-3.webp",
        alt: "Ford Nugget Plus, vista lateral",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "ford-nugget-plus-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Ford: revisión según indicador (hasta 2 años o 30.000 km en diésel)",
      revisiones: [
        {
          nombre: "Revisión Ford",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Westfalia (anual recomendada)",
          queSeCambia:
            "Techo elevable, gas, electricidad y estanqueidad",
          costeAproxEur: 200,
        },
      ],
      costeAnualAproxEur: 550,
      fuente: "Plan de mantenimiento Ford + recomendaciones Westfalia",
    },
    euroncap: null,
    fuenteNombre: "Ford España (oficial) + Westfalia + prensa especializada",
    fuenteUrl:
      "https://www.ford.es/furgonetas-pick-up/nueva-transit-custom-nugget",
  },
];
