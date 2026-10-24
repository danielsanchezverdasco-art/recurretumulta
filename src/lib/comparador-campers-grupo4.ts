import type { CocheComparador } from "./comparador-coches-data.ts";

/**
 * Campers grupo 4 — 19/10/2026 (rama niky-campers).
 * 4 furgonetas camper europeas: Pössl Summit 600, Dethleffs Globetrail 600 DS,
 * Knaus Boxstar 600 Street y Weinsberg CaraBus 600 MQ.
 * Datos verificados en webs oficiales / prensa especializada. Sin dato → null.
 */
export const CAMPERS_GRUPO4: CocheComparador[] = [
  {
    id: "possl-summit-600-2026-precio-ficha-tecnica",
    marca: "Pössl",
    modelo: "Summit 600",
    tipo: "Diésel",
    categoria: "Camper",
    precioDesde: null,
    aprox: [],
    potenciaCv: 140,
    velocidadMax: null,
    etiquetaDgt: "C",
    largoMm: 5990,
    anchoMm: 2050,
    altoMm: 2580,
    pesoKg: 2862,
    mmaKg: 3500,
    carnetNecesario: "B",
    plazas: 2,
    consumo: null,
    consumoUnidad: null,
    parNm: 340,
    traccion: "Delantera",
    emisionesCo2: null,
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    pros: [
      "Baño giratorio Schwenkbad, muy práctico en 6 metros",
      "Base Citroën Jumper 2.2 de 140 CV, probada y fiable",
      "Cama transversal trasera para dos personas",
      "MMA de 3.500 kg: el carnet B es suficiente",
      "Marca alemana con gran red de servicio en Europa",
    ],
    contras: [
      "Sin precio oficial publicado para España",
      "Solo 2 plazas para dormir de serie",
      "La web de la marca es difícil de localizar (poessl.de no es el fabricante)",
      "Equipamiento de serie más justo que algunos rivales",
      "Plazas traseras de viaje según configuración",
    ],
    imagen: "/media/possl-summit-600-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/possl-summit-600-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/possl-summit-600-2026-precio-ficha-tecnica-oficial-interior.webp",
    creditoInteriorFoto: "Exterior: render oficial del configurador Pössl (vía Syscara). Interiores: fotos de prensa del modelo exacto (Buscamper.nl, distribuidor Pössl).",
    analisisSlug: "possl-summit-600-2026-precio-ficha-tecnica-analisis-opinion",
    videoId: null,
    videoCanal: null,
    galeria: [
      { src: "/media/possl-summit-600-2026-precio-ficha-tecnica-oficial.webp", alt: "Pössl Summit 600: exterior (render oficial)", ancho: 1200, alto: 800 },
      { src: "/media/possl-summit-600-2026-precio-ficha-tecnica-oficial-2.webp", alt: "Pössl Summit 600 Plus: vista exterior", ancho: 1200, alto: 800 },
      { src: "/media/possl-summit-600-2026-precio-ficha-tecnica-oficial-interior.webp", alt: "Pössl Summit 600: salón interior", ancho: 1200, alto: 800 },
      { src: "/media/possl-summit-600-2026-precio-ficha-tecnica-oficial-interior-2.webp", alt: "Pössl Summit 600: cocina", ancho: 1200, alto: 800 },
    ],
    euroncap: { estrellas: null, ano: null, url: null, nota: "Sin test EuroNCAP" },
    fuenteUrl: "https://www.campervans.de/news-termine/neuheiten/laengsbett-poessl-summit-600-l/",
        cargaUtilKg: null,
    curiosidad: {
      texto: "Pössl presentó para 2026 el Summit 600 L, hermano del Summit 600 con camas longitudinales en vez de transversal, como nuevo modelo de acceso a la gama desde 53.999 € en Alemania.",
      fuenteNombre: "CamperVans Magazin",
      fuenteUrl: "https://www.campervans.de/news-termine/neuheiten/laengsbett-poessl-summit-600-l/",
    },
  }
];
