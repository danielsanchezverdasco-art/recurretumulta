// Autocaravanas Adria — ficha 1 (lote caravanas 1, 17/10/2026).
// Datos verificados: Adria Mobil (datos técnicos oficiales), Caravaning K2
// (concesionario oficial Adria Madrid: medidas y plazas). Precio orientativo
// (Adria no publica PVP oficial en España; marcado en "aprox").
// Fotos: reales del modelo exacto, verificadas visualmente.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const AUTOCARAVANAS_ADRIA: CocheComparador[] = [
  {
    id: "adria-matrix-plus-670-sl-2026-precio-ficha-tecnica",
    marca: "Adria",
    modelo: "Matrix Plus 670 SL",
    tipo: "Autocaravana perfilada",
    categoria: "Autocaravana",
    precioDesde: 79000,
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
      "/media/adria-matrix-plus-670-sl-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/adria-matrix-plus-670-sl-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/adria-matrix-plus-670-sl-2026-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7490,
    anchoMm: 2299,
    altoMm: 2810,
    pesoKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde"],
    pros: [
      "Interior de diseño moderno con cocina en L y baño separado de concepto doméstico",
      "Camas gemelas traseras extensibles a king size + cama abatible eléctrica",
      "Chasis Fiat Ducato 2.2 con opción de 180 CV y cambio automático",
      "La perfilada más vendida de Adria en Europa: reventa sólida",
      "Adria MACH: control de funciones del vehículo desde el móvil",
    ],
    contras: [
      "4 plazas para dormir: familias de 5 necesitan mirar la 670 SC o la Coral",
      "Precio orientativo alto frente a la Benimar Tessoro equivalente",
      "La cama abatible resta altura libre en el salón cuando está bajada",
      "Red de servicio oficial menor que Benimar en España",
      "Con 7,49 m y su anchura, aparcar en ciudad exige planificación",
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
        src: "/media/adria-matrix-plus-670-sl-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Adria Matrix Plus 670 SL, vista lateral con gráficos Matrix Plus",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/adria-matrix-plus-670-sl-2026-precio-ficha-tecnica-oficial-3.webp",
        alt: "Adria Matrix Plus 670 SL, vista tres cuartos trasera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/adria-matrix-plus-670-sl-2026-interior-oficial.webp",
        alt: "Interior de la Adria Matrix Plus 670 SL, salón y cocina",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "adria-matrix-plus-670-sl-2026-precio-ficha-tecnica",
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
          nombre: "Revisión célula Adria (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 620,
      fuente: "Plan de mantenimiento Fiat Professional + recomendaciones Adria",
    },
    euroncap: null,
    fuenteNombre: "Adria Mobil + Caravaning K2 (concesionario oficial)",
    fuenteUrl: "https://www.adria.co.uk/motorhomes/matrix",
  },
  {
    id: "adria-coral-xl-670-dk-2026-precio-ficha-tecnica",
    marca: "Adria",
    modelo: "Coral XL 670 DK",
    tipo: "Autocaravana capuchina",
    categoria: "Autocaravana",
    precioDesde: 85000,
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
      "/media/adria-coral-xl-670-dk-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/adria-coral-xl-670-dk-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/adria-coral-xl-670-dk-2026-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7790,
    anchoMm: 2350,
    altoMm: 3100,
    pesoKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 7,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde"],
    pros: [
      "Capuchina para 7: cama sobre cabina 210x140 + literas traseras + cama convertible, la familiar grande de Adria",
      "Chasis Fiat Ducato 2.2 de 140 CV con opción de MMA ampliada a 4.500 kg para viajar cargado legal",
      "Construcción Comprex de Adria con 10 años de garantía de estanqueidad",
      "Calefacción Truma Combi 6E y frigorífico de 167 l: apta para las cuatro estaciones",
      "La capuchina con mejor valor de reventa de su segmento en Europa",
    ],
    contras: [
      "Con 7,79 m y 3,10 m de alto, es la menos ágil de las Adria: exige planificación en ciudad",
      "Precio orientativo alto: la capuchina familiar siempre cuesta más que la perfilada equivalente",
      "El motor base de 140 CV es justo con 7 plazas y equipaje a tope",
      "Las literas traseras son perfectas para niños, justas para adolescentes altos",
      "Red de servicio Adria en España menor que la de Benimar",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 15,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 750,
      seguroAmpliadoAnual: 1400,
      mantenimientoAnual: 650,
      costeMensualTotal: 490,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~11 l/100 km de gasóleo y seguro a todo riesgo.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/adria-coral-xl-670-dk-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Adria Coral XL 670 DK, vista oficial tres cuartos",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/adria-coral-xl-670-dk-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Adria Coral XL 670 DK, capuchina sobre Fiat Ducato",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/adria-coral-xl-670-dk-2026-precio-ficha-tecnica-interior-oficial.webp",
        alt: "Interior de la Adria Coral XL 670 DK, salón y cocina",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "adria-coral-xl-670-dk-2026-precio-ficha-tecnica",
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
          nombre: "Revisión célula Adria (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 630,
      fuente: "Plan de mantenimiento Fiat Professional + recomendaciones Adria",
    },
    euroncap: null,
    fuenteNombre: "Adria Mobil + red oficial de concesionarios",
    fuenteUrl: "https://www.adria-mobil.com/motorhomes/",
  },
];
