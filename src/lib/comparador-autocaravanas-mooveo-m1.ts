// Autocaravanas Mooveo — lote Merlín 4 (18/10/2026).
// Datos verificados: catálogo oficial Mooveo TEI 2026 (grupo Rapido) + exposés de
// concesionarios para el TEI-60FB (descatalogado de la gama 2026, sustituido por el TEI-62DH).
// El fabricante no publica PVP: precioDesde en null.
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_MOOVEO_M1: Autocaravana[] = [
  {
    id: "mooveo-tei-60fb-2026-precio-ficha-tecnica",
    marca: "Mooveo",
    modelo: "TEI-60FB",
    tipo: "Autocaravana perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Mooveo no publica PVP oficial; no inventar
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
    imagen: "/media/mooveo-tei-60fb-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/mooveo-tei-60fb-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/mooveo-tei-60fb-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990,
    anchoMm: 2300,
    altoMm: 2930,
    pesoKg: null,
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
      "Menos de 6 m con baño trasero completo separado: el formato más difícil de encontrar",
      "Gran garaje accesible desde dentro y desde fuera: bicis y material sin pelearte",
      "MMA de 3.500 kg con opción a 3.650 kg: margen de carga realista para viajar cargado",
      "Citroën Jumper 2.2 de 140 CV (también disponible sobre Fiat Ducato): eliges tu mecánica",
      "Perfilada corta que aparca donde una integral no entra: ideal como vehículo de uso frecuente",
    ],
    contras: [
      "Modelo descatalogado de la gama 2026 (sustituido por el TEI-62DH): solo ocasión o stock",
      "Cama trasera de 140×200 cm: justa para parejas altas",
      "Tres plazas de cama: el cuarto ocupante viaja pero no duerme",
      "Sin PVP oficial de nueva: el precio lo marca el mercado de ocasión",
      "Marca del grupo Rapido menos conocida en España: menos concesionarios que Chausson",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 13.5,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 650,
      seguroAmpliadoAnual: 1200,
      mantenimientoAnual: 600,
      costeMensualTotal: 420,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~10 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/mooveo-tei-60fb-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Mooveo TEI-60FB, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/mooveo-tei-60fb-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Mooveo TEI-60FB, salón delantero",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "mooveo-tei-60fb-2026-precio-ficha-tecnica",
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
          nombre: "Revisión célula Mooveo (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Citroën Jumper + recomendaciones del sector",
    },
    euroncap: null,
    fuenteNombre: "Mooveo (catálogo oficial TEI 2026) + exposés de concesionarios",
    fuenteUrl: "https://www.mooveo.fr/",
  },
];
