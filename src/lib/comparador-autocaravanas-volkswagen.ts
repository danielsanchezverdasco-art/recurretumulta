// Campers Volkswagen — ficha 1 (lote caravanas 1, 17/10/2026).
// Datos verificados: concesionario oficial VW (Comatrasa: precio y ficha),
// km77 (datos técnicos). Precio con impuestos incluidos según stock de
// concesionario (marcado en "aprox").
// Fotos: reales del modelo exacto, verificadas visualmente.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const AUTOCARAVANAS_VOLKSWAGEN: CocheComparador[] = [
  {
    id: "volkswagen-california-ocean-2026-precio-ficha-tecnica",
    marca: "Volkswagen",
    modelo: "California Ocean",
    tipo: "Camper",
    categoria: "Autocaravana",
    precioDesde: 75493,
    potenciaCv: 150,
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: 188,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen:
      "/media/volkswagen-california-ocean-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/volkswagen-california-ocean-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/volkswagen-california-ocean-2026-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5173,
    anchoMm: 1941,
    altoMm: 1972,
    pesoKg: 2415,
    consumo: 6.8,
    consumoUnidad: "l/100 km",
    plazas: 4,
    parNm: 360,
    traccion: "Delantera",
    emisionesCo2: 178,
    aprox: ["precioDesde"],
    pros: [
      "La camper original: icono con la mejor reventa del segmento",
      "Techo elevable electrohidráulico + banco convertible: 4 plazas en 5,17 m",
      "Cocina completa con nevera y calefacción estacionaria de serie",
      "2.0 TDI 150 CV con DSG: el conjunto más refinado entre las campers",
      "Garantía oficial Volkswagen de 36 meses",
    ],
    contras: [
      "Precio elevado: desde ~75.000 € con impuestos, la camper más cara de su tamaño",
      "El espacio interior es justo para 4 adultos en viajes largos",
      "Sin baño: el WC es químico portátil y la ducha es exterior",
      "La batalla larga es la única opción del Ocean: menos ágil que la corta",
      "Los opcionales VW (4Motion, extras) disparan el precio rápidamente",
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
        "Estimación con 12.000 km/año, consumo medio ~7,5 l/100 km de gasóleo y seguro a todo riesgo.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/volkswagen-california-ocean-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Volkswagen California Ocean T7, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/volkswagen-california-ocean-2026-interior-oficial.webp",
        alt: "Interior del Volkswagen California Ocean T7, cama del techo (km77)",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/volkswagen-california-ocean-2026-precio-ficha-tecnica-oficial-3.webp",
        alt: "Volkswagen California Ocean T7, vista tres cuartos",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "volkswagen-california-ocean-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Volkswagen: servicio según indicador (LongLife, hasta 2 años o 30.000 km)",
      revisiones: [
        {
          nombre: "Servicio VW LongLife",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula California (anual recomendada)",
          queSeCambia:
            "Techo elevable, gas, electricidad y estanqueidad",
          costeAproxEur: 200,
        },
      ],
      costeAnualAproxEur: 550,
      fuente: "Plan de mantenimiento Volkswagen + recomendaciones California",
    },
    euroncap: null,
    fuenteNombre: "Volkswagen (concesionario oficial) + km77",
    fuenteUrl:
      "https://comatrasa.es/venta-vehiculos/volkswagen-california-ocean-150-cv-tdi-dsg-bl-4-pza/",
  },
];
