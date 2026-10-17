// Campers Ford — ficha 1 (lote caravanas 1, 17/10/2026).
// Datos verificados: Ford + Westfalia (datos técnicos), rango de precios
// 2026 según prensa especializada (marcado en "aprox").
// Fotos: reales del modelo exacto (Tourneo Custom actual), verificadas
// visualmente.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const AUTOCARAVANAS_FORD: CocheComparador[] = [
  {
    id: "ford-nugget-plus-2026-precio-ficha-tecnica",
    marca: "Ford",
    modelo: "Nugget Plus",
    tipo: "Camper",
    categoria: "Autocaravana",
    precioDesde: 63400,
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
      "/media/ford-nugget-plus-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/ford-nugget-plus-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/ford-nugget-plus-2026-precio-ficha-tecnica-oficial-3.webp",
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
    aprox: ["precioDesde", "pesoKg"],
    pros: [
      "Conversión Westfalia de fábrica: calidad alemana con garantía Ford",
      "Versión PHEV de 233 CV con 50 km eléctricos: única camper híbrida enchufable",
      "Techo elevable + baño con WC y ducha: más equipada que la California",
      "5,45 m y 2,06 m de alto: entra en parkings y se usa a diario",
      "Precio desde ~63.400 €: más barata que la California Ocean",
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
        src: "/media/ford-nugget-plus-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Ford Nugget Plus, vista tres cuartos",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/ford-nugget-plus-2026-precio-ficha-tecnica-oficial-3.webp",
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
    fuenteNombre: "Ford / Westfalia + prensa especializada",
    fuenteUrl:
      "https://autotest.com.ar/transportes/233-cv-y-muy-buena-relacion-precio-equipamiento-ford-renovo-su-furgoneta-lider/",
  },
];
