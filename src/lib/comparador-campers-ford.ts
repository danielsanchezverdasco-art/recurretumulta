// Campers Ford Nugget — lote niky-campers (19/10/2026).
// Nugget Trail y Nugget Active. (Nugget estándar y Plus ya existen en main.)
// Camperización oficial Ford por Westfalia. Base: Ford Transit Custom.
// Datos: Ford España / Westfalia. NO inventar.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const CAMPERS_FORD: CocheComparador[] = [
  {
    id: "ford-nugget-active-2026-precio-ficha-tecnica",
    marca: "Ford",
    modelo: "Nugget Active",
    tipo: "Diésel",
    categoria: "Camper",
    precioDesde: 71988,
    potenciaCv: 170,
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
    imagen: "/media/ford-nugget-active-2026-oficial-ext.webp",
    imagenOficial: "/media/ford-nugget-active-2026-oficial-ext.webp",
    imagenInteriorOficial: "/media/ford-nugget-active-2026-oficial-int1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5050,
    anchoMm: 2032,
    altoMm: 2060,
    pesoKg: null,
    carnetNecesario: "B",
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: "l/100 km",
    plazas: 4,
    parNm: 405,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["largoMm", "anchoMm", "altoMm", "parNm"],
    pros: [
      "Acabado Active con detalles exclusivos: la Nugget más equipada de la gama",
      "Motor 2.0 EcoBlue de 170 CV: el más potente de la gama Nugget",
      "Techo elevable con cama doble y banco trasero convertible: 4 plazas",
      "Camperización Westfalia con cocina y nevera de compresor",
      "5,05 m: cabe en una plaza de aparcamiento estándar",
    ],
    contras: [
      "Precio no publicado por Ford España: pedir presupuesto en concesionario",
      "El acabado Active encarece frente a la Titanium",
      "Baño de compromiso: ducha exterior o pack opcional",
      "4 plazas: justa para 2 adultos + 2 niños en viajes largos",
      "Disponibilidad limitada en concesionarios españoles",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/ford-nugget-active-2026-oficial-ext.webp",
        alt: "Ford Nugget Active, vista exterior",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/ford-nugget-active-2026-oficial-int1.webp",
        alt: "Interior del Ford Nugget Active",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/ford-nugget-active-2026-oficial-int2.webp",
        alt: "Cocina del Ford Nugget Active",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "ford-nugget-active-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Cada 12 meses o 30.000 km (mecánica Transit Custom)",
      revisiones: [
        {
          nombre: "Revisión mecánica anual / 30.000 km",
          queSeCambia: "Aceite + filtros + inspección general (base Ford Transit Custom)",
          costeAproxEur: 280,
        },
      ],
      costeAnualAproxEur: 280,
      fuente: "Programa de mantenimiento Ford (red oficial)",
    },
    euroncap: {
      estrellas: null,
      ano: null,
      url: null,
      nota: "Sin datos EuroNCAP: la Nugget Active no ha sido probada de forma independiente.",
    },
    fuenteUrl: "https://www.ford.es/turismos/nugget",
        mmaKg: null,
    curiosidad: {
      texto:
        "El acabado Active nació en los turismos Ford (Fiesta, Focus) y llegó a la Nugget para darle un aire más aventurero sin el sobrecoste de la versión Trail.",
      fuenteNombre: "Ford",
      fuenteUrl: "https://www.ford.es/turismos/nugget",
    },
  },
];
