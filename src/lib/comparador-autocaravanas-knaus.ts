// Autocaravanas Knaus — ficha 1 (lote caravanas 1, 17/10/2026).
// Datos verificados: datos de catálogo Knaus vía red oficial (múltiples
// distribuidores, cifras coincidentes: 5.990 x 2.050 x 2.580 mm, 3.500 kg,
// Fiat Ducato 2.2 140 CV). Precio orientativo (catálogo 77.355 € versión
// Street 60 Years; marcado en "aprox").
// Fotos: reales del modelo exacto, verificadas visualmente. Hero de prensa;
// interiores y vista recortada de unidad real/concesionario (no prensa oficial).
import type { CocheComparador } from "./comparador-coches-data.ts";

export const AUTOCARAVANAS_KNAUS: CocheComparador[] = [
  {
    id: "knaus-boxstar-600-dq-2026-precio-ficha-tecnica",
    marca: "Knaus",
    modelo: "BoxStar 600 DQ",
    tipo: "Camper",
    categoria: "Autocaravana",
    precioDesde: 77000,
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
    imagen:
      "/media/knaus-boxstar-600-dq-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/knaus-boxstar-600-dq-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/knaus-boxstar-600-dq-2026-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990,
    anchoMm: 2050,
    altoMm: 2580,
    pesoKg: 2921,
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: 579,
    consumo: null,
    consumoUnidad: null,
    plazas: 2,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde", "pesoKg"],
    pros: [
      "Camper de 5,99 m: aparca como una furgoneta y viaja como una autocaravana",
      "Cama doble transversal trasera de 194x145 cm siempre hecha",
      "Fiat Ducato 2.2 140 CV con opción de automático y 180 CV",
      "Baño separado con ducha: raro en campers de este tamaño",
      "Knaus ofrece techo elevable opcional para 4 plazas en total",
    ],
    contras: [
      "2 plazas de serie: con niños hay que pedir el techo elevable",
      "El precio con opcionales se acerca al de perfiladas más espaciosas",
      "La cama transversal es justa para personas muy altas",
      "Menos espacio de almacenaje que una perfilada equivalente",
      "La cocina es compacta: para cocinar a diario se queda corta",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 12,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 600,
      seguroAmpliadoAnual: 1100,
      mantenimientoAnual: 550,
      costeMensualTotal: 400,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~9 l/100 km de gasóleo y seguro a todo riesgo.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/knaus-boxstar-600-dq-2026-2.webp",
        alt: "Knaus BoxStar 600 DQ, vista lateral tres cuartos",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/knaus-boxstar-600-dq-2026-interior.webp",
        alt: "Interior de la Knaus BoxStar 600 DQ, zona de estar",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/knaus-boxstar-600-dq-2026-interior-2.webp",
        alt: "Cama transversal trasera de la Knaus BoxStar 600 DQ",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "knaus-boxstar-600-dq-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato: revisión cada 2 años o 48.000 km según plan Fiat Professional",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 48.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 380,
        },
        {
          nombre: "Revisión célula Knaus (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 620,
      fuente: "Plan de mantenimiento Fiat Professional + recomendaciones Knaus",
    },
    euroncap: null,
    fuenteNombre: "Knaus (web oficial; BoxStar descatalogada, sucesora BOXLIFE)",
    fuenteUrl: "https://www.knaus.com/en-gb/",
  },
  {
    id: "knaus-sky-wave-650-meg-2026-precio-ficha-tecnica",
    marca: "Knaus",
    modelo: "Sky Wave 650 MEG",
    tipo: "Autocaravana perfilada",
    categoria: "Autocaravana",
    precioDesde: 75000,
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
    imagen:
      "/media/knaus-sky-wave-650-meg-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/knaus-sky-wave-650-meg-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/knaus-sky-wave-650-meg-2026-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6940,
    anchoMm: 2320,
    altoMm: 2940,
    pesoKg: 3074,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde"],
    pros: [
      "Camas gemelas traseras (195 x 80 cm) + cama abatible delantera (194 x 123 cm): 4 plazas reales, 5 con el salón convertible",
      "MMA de 3.500 kg: se conduce con carnet B",
      "Fiat Ducato 2.2 de 140 CV Euro 6e-bis: la base más extendida y con más talleres",
      "6,94 m compactos para una 4 plazas con dos zonas de cama independientes",
      "Carga útil de 426 kg, correcta para su tamaño",
    ],
    contras: [
      "Precio orientativo desde ~75.000 €: la edición Black Selection con automático supera los 81.000 €",
      "140 CV es la única mecánica habitual en las ediciones: justos a plena carga en puertos",
      "La cama abatible resta altura libre en el salón cuando está bajada",
      "Sin opción 4x4 ni motorizaciones superiores en la gama",
      "Las ediciones interesantes (Black/Platinum Selection) encarecen mucho la tarifa",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 14,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 700,
      seguroAmpliadoAnual: 1300,
      mantenimientoAnual: 600,
      costeMensualTotal: 480,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~10,5 l/100 km de gasóleo y seguro a todo riesgo.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/knaus-sky-wave-650-meg-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Knaus Sky Wave 650 MEG, vista frontal tres cuartos",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/knaus-sky-wave-650-meg-2026-interior-oficial.webp",
        alt: "Interior de la Knaus Sky Wave 650 MEG, salón con cinturones",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/knaus-sky-wave-650-meg-2026-interior-oficial-2.webp",
        alt: "Salón y zona de descanso de la Knaus Sky Wave 650 MEG",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "knaus-sky-wave-650-meg-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato: revisión cada 2 años o 48.000 km según plan del fabricante",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato",
          queSeCambia: "Aceite + filtros + inspección general",
          costeAproxEur: 400,
        },
        {
          nombre: "Revisión célula Knaus (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Professional + recomendaciones Knaus",
    },
    euroncap: null,
    fuenteNombre: "Knaus (red oficial de distribuidores)",
    fuenteUrl:
      "https://www.caravan24.ch/chde/wohnmobile/knaus/knaus-sky-wave-650-meg/detail/114843/",
  },
];
