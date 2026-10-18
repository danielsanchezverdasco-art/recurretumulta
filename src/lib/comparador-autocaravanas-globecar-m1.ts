// Autocaravanas Globecar — lote Merlín 1 (18/10/2026).
// IMPORTANTE / TRANSPARENCIA: el GlobeScout Plus está DESCATALOGADO. El dominio oficial
// globecar.de redirige hoy a la web de Roadcar: la marca Globecar (Dethleffs / Erwin Hymer
// Group) fue absorbida y el fabricante NO publica ficha técnica ni precio de este modelo.
// Los datos que siguen son la ÚLTIMA FICHA OFICIAL PUBLICADA (catálogo de época de
// producción), corroborada por fichas de concesionarios que reproducen la ficha de fábrica.
// NO presentarlo como novedad 2026. Solo unidades de ocasión (2016-2021).
// CORRECCIÓN 4 (18/10/2026): no existe fuente oficial utilizable (globecar.de redirige a
// Roadcar). Las medidas del último catálogo oficial publicado se mantienen marcadas
// «no oficial» en "aprox". Precio oficial inexistente → null (no inventar).
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_GLOBECAR_M1: Autocaravana[] = [
  {
    id: "globecar-globescout-plus-2026-precio-ficha-tecnica",
    marca: "Globecar",
    modelo: "GlobeScout Plus (modelo descatalogado: última ficha oficial publicada)",
    tipo: "Camper (furgoneta camper)",
    categoria: "Autocaravana",
    precioDesde: null, // sin precio oficial en ningún mercado; modelo fuera de producción
    potenciaCv: null, // la horquilla histórica del catálogo era 120-180 CV según año; sin ficha 2026
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
    imagen: "/media/globecar-globescout-plus-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/globecar-globescout-plus-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/globecar-globescout-plus-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5998, // «no oficial»: último catálogo oficial publicado; modelo descatalogado
    anchoMm: 2050, // «no oficial»: último catálogo oficial publicado
    altoMm: 2650, // «no oficial»: último catálogo oficial publicado
    pesoKg: null, // sin cifra única oficial; las fichas de la época situaban ~2.800 kg en orden de marcha
    mmaKg: 3500, // «no oficial»: último catálogo oficial publicado
    carnetNecesario: "B",
    cargaUtilKg: null, // teórica ~700 kg según datos de catálogo; sin cifra oficial única
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // «no oficial»: último catálogo oficial publicado
    parNm: null,
    traccion: "Delantera", // «no oficial»: portador Citroën Jumper (tracción delantera según catálogo de época)
    emisionesCo2: null,
    aprox: ["largoMm", "anchoMm", "altoMm", "mmaKg", "plazas", "traccion"], // «no oficial»: modelo descatalogado, sin fuente oficial en vigor
    pros: [
      "Gran garaje trasero bajo la cama transversal fija: la cama se deja montada siempre y aun así caben bicis o una moto",
      "Carga útil teórica de unos 700 kg según el último catálogo: margen generoso para el segmento de 6 m",
      "Cuarto de baño con ducha integrada y WC cassette Thetford: más completo que el WC-banco plegable de algunos rivales de 6 m",
      "Calefacción Truma Combi 4 de gas con Duo Control y hueco para 2 bombonas: conmutación automática de botella, estándar alemán fiable",
      "Acabado exterior cuidado para su época: tiradores pintados en color carrocería y ventanas enrasadas",
    ],
    contras: [
      "Modelo y marca descatalogados: sin red oficial propia, la reventa y las piezas específicas del mueble quedan en manos de la red Dethleffs/Hymer sin garantía de continuidad",
      "El Citroën Jumper de serie no ofrecía cambio automático: quien lo quería debía saltar a base Fiat y pagar la diferencia",
      "Cama transversal de unos 140 cm de ancho: justa para dos adultos corpulentos",
      "Solo 2 plazas de noche de serie: la tercera exige el techo elevable o transformar la dinette cada noche",
      "Calefacción de gas, no diésel: depende de bombonas y de encontrar recambio de GLP en ruta",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 12.6,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 600,
      seguroAmpliadoAnual: 1100,
      mantenimientoAnual: 550,
      costeMensualTotal: 390,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~9 l/100 km de gasóleo y seguro a todo riesgo. Solo aplica a unidades de ocasión. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/globecar-globescout-plus-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Globecar GlobeScout Plus, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/globecar-globescout-plus-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Globecar GlobeScout Plus, cama transversal",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "globecar-globescout-plus-2026-precio-ficha-tecnica",
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
          nombre: "Revisión célula (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Citroën Jumper + recomendaciones del grupo",
    },
    euroncap: null,
    fuenteNombre:
      "Globecar (último catálogo oficial publicado; la marca fue absorbida por Roadcar, «no oficial»: la web oficial ya no publica ficha del modelo) + prensa especializada",
    fuenteUrl: "https://globecar.de/",
  },
];
