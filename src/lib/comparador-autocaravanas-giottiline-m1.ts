// Autocaravanas Giottiline — lote Merlín 1 (18/10/2026).
// Datos verificados: giottiline.com (web oficial, gama 2026; ficha técnica detallada no publicada
// para 2026) + CamperOnLine Magazine (prensa especializada, prueba técnica del modelo,
// datos coherentes con anuncios 2025-2026).
// Giottiline no publica listino vigente ni PVP: precioDesde en null, sin inventar.
// Corrección 4 (18/10/2026): CamperOnLine etiquetado como prensa especializada; la masa en orden
// de marcha (2.834 kg, prueba de 2021 con base Citroën) queda marcada «no oficial» en "aprox"
// porque la cifra con base Fiat 2026 no está publicada.
// Precios "desde" orientativos para España marcados en "aprox".
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_GIOTTILINE_M1: Autocaravana[] = [
  {
    id: "giottiline-siena-322-2026-precio-ficha-tecnica",
    marca: "Giottiline",
    modelo: "Siena 322",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Giottiline no publica listino vigente ni PVP
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
    imagen: "/media/giottiline-siena-322-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/giottiline-siena-322-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/giottiline-siena-322-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990,
    anchoMm: 2320,
    altoMm: 2990,
    pesoKg: 2834, // prueba CamperOnLine 2021, versión base (entonces sobre Citroën Jumper); cifra Fiat 2026 no publicada
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null, // no publicada para 2026
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null, // no publicado por el fabricante
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["pesoKg"],
    pros: [
      "Carrocería 100 % fibra de vidrio con paredes de 33 mm: construcción sin madera, amiga de la humedad",
      "Suelo FPS Fibroplast de 63 mm de grosor: nivel de suelo de gama superior en una perfilada de acceso",
      "Gavón trasero comunicante de 220 × 117 cm con 300 kg de carga útil: garaje de verdad en 5,99 m",
      "Pack Siena de serie (clima de cabina, ESP, Traction+, depósito de grises calefactado): equipamiento invernal incluido",
      "Depósitos de 100 l de agua limpia y 100 l de grises, aislados y calefactados: equilibrio hídrico poco común en este segmento",
    ],
    contras: [
      "Giottiline no publica listino vigente ni PVP: el precio hay que pedirlo en cada concesionario",
      "Solo 3 plazas de cama de serie: la cuarta exige convertir la dinette cada noche",
      "Marca italiana de volumen medio con poca red en España: el servicio posventa fuera de Italia es limitado",
      "La masa en orden de marcha procede de una prueba de 2021 con base Citroën: la cifra Fiat 2026 no está publicada",
      "La cama doble trasera, colocada a lo ancho, mide 194 cm: justa para quien pase del 1,85 m",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 13.0,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 625,
      seguroAmpliadoAnual: 1150,
      mantenimientoAnual: 575,
      costeMensualTotal: 410,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~9,5 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/giottiline-siena-322-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Giottiline Siena 322, vista tres cuartos delantera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/giottiline-siena-322-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Giottiline Siena 322, salón y dormitorio trasero",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "giottiline-siena-322-2026-precio-ficha-tecnica",
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
          nombre: "Revisión célula Giottiline (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 650,
      fuente: "Plan de mantenimiento Fiat Professional Ducato + recomendaciones Giottiline",
    },
    euroncap: null,
    fuenteNombre: "Giottiline (web oficial) + CamperOnLine (prensa especializada)",
    fuenteUrl: "https://www.giottiline.com/",
  },
];
