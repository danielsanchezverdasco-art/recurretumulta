// Autocaravanas XGO — lote Merlín 4 (18/10/2026).
// Datos verificados: página oficial XVAN de xgomove.it + catálogo oficial XGO 25/26
// (XGO no publica PVP ni tracción en su web: precioDesde en null).
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_XGO_M1: Autocaravana[] = [
  {
    id: "xgo-x-van-104-2026-precio-ficha-tecnica",
    marca: "XGO",
    modelo: "X Van 104",
    tipo: "Camper / furgón",
    categoria: "Autocaravana",
    precioDesde: null, // XGO no publica PVP oficial; no inventar
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
    imagen: "/media/xgo-x-van-104-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/xgo-x-van-104-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/xgo-x-van-104-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6363,
    anchoMm: 2050,
    altoMm: 2659,
    pesoKg: null,
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: null, // no publicada por el fabricante
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Sistema energético MEB-300 controlable por app: gestionas batería y consumos desde el móvil",
      "Portón trasero panorámico: el salón se abre al paisaje cuando aparcas",
      "6,36 m sobre Fiat Ducato: maniobrable para lo habitable que es",
      "4 plazas homologadas y 3 camas: formato familiar en furgón",
      "Marca italiana con catálogo claro de 4 furgonetas: fácil comparar sin perderse",
    ],
    contras: [
      "Solo 2 camas fijas: la tercera es componible y hay que montarla cada noche",
      "Altura de 2,66 m: ducha y armarios más bajos que en un big van",
      "Tracción no publicada por el fabricante",
      "Sin PVP oficial publicado por XGO",
      "Red de concesionarios en España más limitada que las marcas francesas",
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
        src: "/media/xgo-x-van-104-2026-precio-ficha-tecnica-oficial.webp",
        alt: "XGO X Van 104, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/xgo-x-van-104-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del XGO X Van 104, salón delantero",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "xgo-x-van-104-2026-precio-ficha-tecnica",
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
          nombre: "Revisión célula XGO (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones del sector",
    },
    euroncap: null,
    fuenteNombre: "XGO (web oficial + catálogo oficial 25/26)",
    fuenteUrl: "https://www.xgomove.it/",
  },
];
