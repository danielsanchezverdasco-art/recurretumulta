// Autocaravanas Dethleffs — lote Merlín 1 (18/10/2026).
// Datos verificados: caravanguard.co.uk (factfile del modelo, prensa especializada),
// dethleffs.co.uk / dethleffs.com (gama Trend actual, web oficial).
// Corrección 4 (18/10/2026): el Trend T 6717 EB está DESCATALOGADO (sustituido por el T 6617 EB
// en la lista oficial 2026); Dethleffs no publica ficha oficial de este modelo. Eliminada la fuente
// truckscout24.si (portal de anuncios). Dimensiones, MMA y plazas, de concesionarios y prensa,
// quedan marcadas «no oficial» en "aprox".
// Precio en España no verificado: precioDesde en null (no inventar).
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_DETHLEFFS_M1: Autocaravana[] = [
  {
    id: "dethleffs-trend-t-6717-eb-2026-precio-ficha-tecnica",
    marca: "Dethleffs",
    modelo: "Trend T 6717 EB",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // precio en España no verificado; no inventar
    potenciaCv: null, // motorización según configuración; sin dato único verificado
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
    imagen: "/media/dethleffs-trend-t-6717-eb-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/dethleffs-trend-t-6717-eb-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/dethleffs-trend-t-6717-eb-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6960, // «no oficial»: modelo descatalogado; 6,96 m según concesionarios y prensa
    anchoMm: 2330, // «no oficial»: sin ficha oficial del modelo (coincide con la gama actual)
    altoMm: 2940, // «no oficial»: 2,94 m según prensa (CaravanGuard)
    pesoKg: null, // masa en orden de marcha no publicada de forma única para esta versión
    mmaKg: 3499, // «no oficial»: sin cifra oficial del modelo (3.499 kg en gama actual y prensa)
    carnetNecesario: "B",
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // «no oficial»: 4 plazas según prensa y concesionarios
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["largoMm", "anchoMm", "altoMm", "mmaKg", "plazas"], // «no oficial»: ver cabecera
    pros: [
      "Marca alemana con fábrica propia en Isny (Allgäu): integración vertical y control de calidad total",
      "Garantía de 10 años contra infiltraciones de agua: la más larga entre las perfiladas generalistas",
      "Puerta de acceso XXL de 70 cm con entrada coupé rebajada: se entra sin agacharse ni tropezar",
      "Ventilación AirPlus en los armarios altos: adiós a la condensación en la ropa de invierno",
      "Garaje con puertas de apertura con una mano, luz y enchufe de 230 V: cargar de noche sin linterna",
    ],
    contras: [
      "Las camas gemelas traseras son cómodas, pero el paso entre ellas es estrecho para vestirse",
      "Sin techo elevable ni capuchina: si vienen nietos, la única cama extra es el salón",
      "La lista de opcionales (paquete chasis, diseño, invierno) alarga el presupuesto un 20 % fácil",
      "2,33 m de anchura: más presencia en carretera que las perfiladas estrechas de 2,20 m",
      "El precio español no figura en ningún catálogo público: toca negociar a ciegas con el conce",
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
        src: "/media/dethleffs-trend-t-6717-eb-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Dethleffs Trend T 6717 EB, vista tres cuartos",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/dethleffs-trend-t-6717-eb-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Dethleffs Trend T 6717 EB, camas gemelas",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "dethleffs-trend-t-6717-eb-2026-precio-ficha-tecnica",
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
          nombre: "Revisión célula Dethleffs (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Dethleffs",
    },
    euroncap: null,
    fuenteNombre: "Dethleffs (web oficial, gama Trend) + CaravanGuard (prensa especializada)",
    fuenteUrl: "https://www.dethleffs.com/motorhomes/trend", // gama Trend oficial (el T 6717 EB está descatalogado)
  },
];
