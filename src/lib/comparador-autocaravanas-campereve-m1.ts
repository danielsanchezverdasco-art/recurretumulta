// Autocaravanas Campérêve — lote Merlín 4 (18/10/2026).
// Datos verificados: fichas de concesionarios y prensa especializada
// (Campérêve no localizó ficha oficial completa del modelo; el fabricante no publica
// PVP: precioDesde en null).
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_CAMPEREVE_M1: Autocaravana[] = [
  {
    id: "campereve-magellan-643-2026-precio-ficha-tecnica",
    marca: "Campérêve",
    modelo: "Magellan 643",
    tipo: "Camper / furgón",
    categoria: "Autocaravana",
    precioDesde: null, // Campérêve no publica PVP oficial; no inventar
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
    imagen: "/media/campereve-magellan-643-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/campereve-magellan-643-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/campereve-magellan-643-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990,
    anchoMm: 2050,
    altoMm: 2560,
    pesoKg: null,
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: null, // no publicada oficialmente
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Sistema Modul'Space patentado: el armario pivota y crea una ducha privada independiente",
      "Lit transversal trasero de 192×132 cm: cama fija de matrimonio en solo 6 metros",
      "Base L3H2 de 2,56 m de alto: entra en más sitios que un big van de techo alto",
      "Marca del grupo Rapido: red de servicio amplia en Francia y creciente en España",
      "Versión Saphir disponible para quien quiera más equipamiento de serie",
    ],
    contras: [
      "Solo 3 plazas de cama de serie: la cuarta duerme en el salón convertible opcional",
      "Ficha oficial del fabricante no localizada: datos verificados solo en concesionarios y prensa",
      "Baño con ducha integrada en el módulo: menos cómodo que la ducha separada de la competencia",
      "Sin PVP oficial publicado por Campérêve",
      "Gama Magellan con muchas versiones: comparar el 643 con el Saphir exige leer la letra pequeña",
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
        src: "/media/campereve-magellan-643-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Campérêve Magellan 643, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/campereve-magellan-643-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Campérêve Magellan 643, salón delantero",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "campereve-magellan-643-2026-precio-ficha-tecnica",
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
          nombre: "Revisión célula Campérêve (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones del sector",
    },
    euroncap: null,
    fuenteNombre: "Campérêve: fichas de concesionarios + prensa especializada (ficha oficial no localizada)",
    fuenteUrl: "https://www.campereve.fr/",
  },
];
