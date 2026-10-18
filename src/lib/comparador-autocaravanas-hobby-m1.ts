// Autocaravanas Hobby — lote Merlín 1 (18/10/2026).
// Datos verificados: hobby-caravan.de (web oficial; la ficha técnica 2026 vive en su configurador web),
// red de concesionarios oficiales Hobby (unidades año modelo 2026) y alpacacamping.de (prensa especializada).
// Hobby no publica PVP oficial del modelo: precioDesde queda en null, sin inventar.
// Precios "desde" orientativos para España marcados en "aprox".
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const AUTOCARAVANAS_HOBBY_M1: CocheComparador[] = [
  {
    id: "hobby-optima-ontour-edition-f-v65-ge-2026-precio-ficha-tecnica",
    marca: "Hobby",
    modelo: "Optima OnTour Edition F V65 GE",
    tipo: "Autocaravana perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Hobby no publica PVP oficial del modelo
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
    imagen: "/media/hobby-optima-ontour-edition-f-v65-ge-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/hobby-optima-ontour-edition-f-v65-ge-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/hobby-optima-ontour-edition-f-v65-ge-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6780,
    anchoMm: 2230,
    altoMm: 2900,
    pesoKg: null, // masa en orden de marcha no publicada para la versión Fiat 2026
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null, // no publicada para 2026
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null, // no publicado por Hobby
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Pack ALL-INCLUSIVE de serie (toldo, navegación, cámara trasera, antena SAT/TV): llega equipada sin pasar por la lista de extras",
      "Depósito de aguas grises calefactado y aislado: pensada para rodar en invierno sin miedo a que se congele el desagüe",
      "Garaje trasero calefactado y aislado bajo las camas: las bicis y el material viajan protegidos del frío",
      "Con 6,78 m de largo es de las perfiladas más compactas de su categoría: se mueve mejor por carreteras secundarias",
      "Camas traseras unibles en una gran superficie de descanso: vale para parejas y, con la dinette convertible, duermen hasta 4",
    ],
    contras: [
      "El fabricante no publica PVP oficial: el precio real lo fija cada concesionario y es difícil comparar ofertas",
      "Ficha técnica 2026 solo disponible en el configurador web: hay que fiarse de lo que publique cada distribuidor",
      "Nevera de 133 l: algo justa si se viaja a cuatro y se cocina dentro a diario",
      "Motor Fiat de 140 CV sin alternativa superior publicada: no hay versión más potente para quien remolque a menudo",
      "Red de marca con menos presencia en España que en Alemania: las piezas específicas de célula pueden tardar en llegar",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 14.7,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 650,
      seguroAmpliadoAnual: 1200,
      mantenimientoAnual: 600,
      costeMensualTotal: 430,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~10,5 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/hobby-optima-ontour-edition-f-v65-ge-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Hobby Optima OnTour Edition F V65 GE, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/hobby-optima-ontour-edition-f-v65-ge-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Hobby Optima OnTour Edition F V65 GE, salón delantero",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "hobby-optima-ontour-edition-f-v65-ge-2026-precio-ficha-tecnica",
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
          nombre: "Revisión célula Hobby (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 650,
      fuente: "Plan de mantenimiento Fiat Professional Ducato + recomendaciones Hobby",
    },
    euroncap: null,
    fuenteNombre: "Hobby (web oficial) + red de concesionarios + alpacacamping.de",
    fuenteUrl: "https://www.hobby-caravan.de/int_en/",
  },
];
