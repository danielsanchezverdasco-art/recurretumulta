// Autocaravanas Dethleffs — ficha 1 (lote caravanas 1, 17/10/2026).
// Datos verificados: documento oficial de datos técnicos Dethleffs 2027
// (dethleffs.es, válido desde 01/08/2026). Precio orientativo (Dethleffs no
// publica PVP oficial en España; marcado en "aprox").
// Fotos: reales del modelo exacto, verificadas visualmente.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const AUTOCARAVANAS_DETHLEFFS: CocheComparador[] = [
  {
    id: "dethleffs-trend-t-7057-eb-2026-precio-ficha-tecnica",
    marca: "Dethleffs",
    modelo: "Trend T 7057 EB",
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
      "/media/dethleffs-trend-t-7057-eb-2026-precio-ficha-tecnica.webp",
    imagenOficial:
      "/media/dethleffs-trend-t-7057-eb-2026-precio-ficha-tecnica.webp",
    imagenInteriorOficial:
      "/media/dethleffs-trend-t-7057-eb-2026-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7410,
    anchoMm: 2330,
    altoMm: 3000,
    pesoKg: 2955,
    mmaKg: 3499,
    carnetNecesario: "B",
    cargaUtilKg: 544, // 3499 − 2955 kg (datos oficiales Dethleffs 2027)
    consumo: null,
    consumoUnidad: null,
    plazas: 5,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde"],
    pros: [
      "Tecnología Lifetime Smart: suelo sin costillaje de madera, a prueba de corrosión",
      "Camas gemelas traseras de 214x80 cm convertibles en cama doble de 211x201",
      "Masa en orden de marcha oficial de 2.955 kg: buena carga útil hasta los 3.499 kg",
      "Calefacción Truma Combi 6 y frigorífico de 137 l de serie",
      "Marca alemana con fama de durabilidad: aguanta bien el paso de los años",
    ],
    contras: [
      "Precio orientativo superior al de la Benimar Tessoro equivalente",
      "El motor base de 140 CV es suficiente pero no sobrado con carga máxima",
      "Diseño interior más sobrio que el de Adria o Bürstner",
      "La quinta plaza depende de la cama delantera opcional",
      "Red de concesionarios Dethleffs más pequeña que la de Benimar en España",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 14,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 700,
      seguroAmpliadoAnual: 1300,
      mantenimientoAnual: 600,
      costeMensualTotal: 450,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~10,5 l/100 km de gasóleo y seguro a todo riesgo.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/dethleffs-trend-t-7057-eb-2026-precio-ficha-tecnica.webp",
        alt: "Dethleffs Trend T 7057, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/dethleffs-trend-t-7057-eb-2026-interior.webp",
        alt: "Salón comedor de la Dethleffs Trend T 7057",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/dethleffs-trend-t-7057-eb-2026-extra.webp",
        alt: "Interior de la Dethleffs Trend, zona de estar con cocina",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "dethleffs-trend-t-7057-eb-2026-precio-ficha-tecnica",
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
          nombre: "Revisión célula Dethleffs (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 620,
      fuente: "Plan de mantenimiento Fiat Professional + recomendaciones Dethleffs",
    },
    euroncap: null,
    fuenteNombre: "Dethleffs (datos técnicos oficiales 2027)",
    fuenteUrl:
      "https://www.dethleffs.es/dethleffs/07_ES/02_pdfs/mj26/02_motorcaravan/preisliste_motorcaravans_01-2026_es_spanisch.pdf",
  },
  {
    id: "dethleffs-globebus-t-6-2026-precio-ficha-tecnica",
    marca: "Dethleffs",
    modelo: "Globebus T 6",
    tipo: "Autocaravana perfilada",
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
      "/media/dethleffs-globebus-t-6-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/dethleffs-globebus-t-6-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/dethleffs-globebus-t-6-2026-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6980,
    anchoMm: 2190,
    altoMm: 2810,
    pesoKg: 2948,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde"],
    pros: [
      "La perfilada compacta alemana por excelencia: 6,98 m y solo 2,19 m de ancho, ágil en ciudad y puertos",
      "Camas gemelas traseras de 194x80 y 192x75 convertibles en maxi-doble",
      "Masa en orden de marcha oficial de 2.948 kg: carga útil honesta hasta los 3.500 kg",
      "Construcción Lifetime Smart sin pudrición y techo de GRP anti-granizo",
      "Cocina de 3 fuegos y frigorífico AES de 142 l: equipamiento serio en formato compacto",
    ],
    contras: [
      "3 plazas para dormir de serie: la cuarta depende de la cama central opcional",
      "El motor base de 140 CV es suficiente pero no sobrado en puertos con carga",
      "Baño central compacto: funcional pero sin lujos",
      "Precio orientativo alto para una 7 metros: la compacidad se paga",
      "Red de concesionarios Dethleffs más pequeña que la de Benimar en España",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 13,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 680,
      seguroAmpliadoAnual: 1250,
      mantenimientoAnual: 600,
      costeMensualTotal: 430,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~10 l/100 km de gasóleo y seguro a todo riesgo.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/dethleffs-globebus-t-6-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Dethleffs Globebus T 6, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/dethleffs-globebus-t-6-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Dethleffs Globebus T 6, vista trasera tres cuartos",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/dethleffs-globebus-t-6-2026-precio-ficha-tecnica-interior-oficial.webp",
        alt: "Interior de la Dethleffs Globebus T 6, cocina y salón",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "dethleffs-globebus-t-6-2026-precio-ficha-tecnica",
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
          nombre: "Revisión célula Dethleffs (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 620,
      fuente: "Plan de mantenimiento Fiat Professional + recomendaciones Dethleffs",
    },
    euroncap: null,
    fuenteNombre: "Dethleffs (datos técnicos oficiales) + CamperLife",
    fuenteUrl:
      "https://camperlife.it/notizie/dethleffs-globebus-t6-gt-i-test-di-camperlife.html",
  },
];
