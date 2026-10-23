// Ficha camper: Westfalia Sven Hedin sobre MAN TGE (2026).
// Rama niky-campers. Verificación de datos: 19/10/2026.
// Westfalia: datos y fotos oficiales de westfalia-mobil.com + ficha técnica oficial de MAN (man.eu).
// Nota: la ficha Ford Transit Custom Nugget se eliminó de este fichero por colisión de slug
// con comparador-campers-niky.ts (otro equipo, misma rama); sobrevive la versión de ese fichero.
// Sven Hedin: tarifa oficial Westfalia con aprox.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const CAMPERS_MAN_FORD: CocheComparador[] = [
  {
    id: "westfalia-sven-hedin-man-tge-2026-precio-ficha-tecnica",
    marca: "Westfalia",
    modelo: "Sven Hedin",
    tipo: "Camper",
    categoria: "Camper",
    precioDesde: 77900,
    potenciaCv: 163,
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
    imagen: "/media/westfalia-sven-hedin-man-tge-2026-precio-ficha-tecnica.webp",
    imagenOficial: "/media/westfalia-sven-hedin-man-tge-2026-precio-ficha-tecnica.webp",
    imagenInteriorOficial:
      "/media/westfalia-sven-hedin-man-tge-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5980,
    anchoMm: 2040,
    altoMm: 2590,
    pesoKg: 2900,
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: 498,
    consumo: null,
    consumoUnidad: "l/100 km",
    plazas: 4,
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: ["precioDesde"],
    pros: [
      "Cama de 2,00 x 1,30 m gracias al Pop-Out patentado por Westfalia",
      "MAN TGE de 163 CV con cambio automático de 8 marchas",
      "Solo 5,98 m de largo: maniobrable como una furgoneta grande",
      "Carga útil de 498 kg según MAN, de las mejores del segmento",
      "Baño completo con ducha y nevera de compresor de 90 L",
    ],
    contras: [
      "Desde 77.900 €: precio de camper premium",
      "Solo 2 plazas para dormir de serie (4 con techo elevable opcional)",
      "Etiqueta C: el diésel, sin pegatina ECO",
      "2,59 m de alto: no entra en parkings limitados a 2 metros",
      "Red de servicio Westfalia más pequeña que la de Ford o Volkswagen",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/westfalia-sven-hedin-man-tge-2026-precio-ficha-tecnica-2.webp",
        alt: "Westfalia Sven Hedin 2026 sobre MAN TGE, vista exterior",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/westfalia-sven-hedin-man-tge-2026-precio-ficha-tecnica.webp",
        alt: "Westfalia Sven Hedin 2026, camper sobre base MAN TGE con techo elevable",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/westfalia-sven-hedin-man-tge-2026-precio-ficha-tecnica-interior.webp",
        alt: "Westfalia Sven Hedin 2026, salón comedor interior",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/westfalia-sven-hedin-man-tge-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Westfalia Sven Hedin 2026, cama trasera con sistema Pop-Out",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "westfalia-sven-hedin-man-tge-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Según plan oficial Westfalia/MAN: revisión anual o por kilometraje",
      revisiones: [
        {
          nombre: "Mantenimiento anual",
          queSeCambia: "Aceite, filtros e inspección según plan de la marca",
          costeAproxEur: null,
        },
      ],
      costeAnualAproxEur: null,
      fuente: "Westfalia (oficial)",
    },
    euroncap: {
      estrellas: null,
      ano: null,
      url: null,
      nota:
        "Sin datos EuroNCAP: el Westfalia Sven Hedin no ha sido probado de forma independiente.",
    },
    curiosidad: {
      texto:
        "El Sven Hedin monta el sistema «Pop-Out» patentado por Westfalia: el lateral trasero se extiende con control eléctrico y la cama crece hasta 2,00 x 1,30 m sin alargar la furgoneta.",
      fuenteNombre: "Westfalia",
      fuenteUrl: "https://westfalia-mobil.com/en/motorhomes/sven-hedin/",
    },
    fuenteUrl: "https://westfalia-mobil.com/en/motorhomes/sven-hedin/",
  },
];
