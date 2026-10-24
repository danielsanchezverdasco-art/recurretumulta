// Campers Volkswagen — Grand California 600 y 680 (MY2026).
// Datos verificados 19/10/2026 en el catálogo oficial VW Vehículos Comerciales España
// (Grand California MY2026, octubre 2025) y notas de prensa oficiales.
// Motor MY2026: 2.0 TDI 120 kW (163 CV) automático de 8 velocidades (ya no el 177 CV).
import type { CocheComparador } from "./comparador-coches-data.ts";

const FUENTE_NOMBRE = "Volkswagen Vehículos Comerciales (oficial)";
const FUENTE_URL =
  "https://www.vwcomerciales.com/idhub/content/dam/onehub_nfz/importers/ic/cat%C3%A1logos-2026/VWC_Cat_GrandCalifornia_MY2026_Oct2025_WEB.pdf";
const EURONCAP_CRAFTER =
  "https://euroncap.blob.core.windows.net/media/62033/euro-ncap-commercial-van-safety-2021-volkswagen-crafter-datasheet.pdf";

export const CAMPERS_VOLKSWAGEN: CocheComparador[] = [
  {
    id: "volkswagen-grand-california-600-2026-precio-ficha-tecnica",
    marca: "Volkswagen",
    modelo: "Grand California 600",
    tipo: "Camper",
    categoria: "Camper",
    precioDesde: 91720,
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
    imagen: "/media/volkswagen-grand-california-600-2026-precio-ficha-tecnica.webp",
    imagenOficial: "/media/volkswagen-grand-california-600-2026-precio-ficha-tecnica.webp",
    imagenInteriorOficial:
      "/media/volkswagen-grand-california-600-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5986,
    anchoMm: 2040,
    altoMm: 2970,
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
      "La única camper de su categoría que sale 100 % terminada de la fábrica de Volkswagen, sin carroceros ni transformadores externos",
      "Baño completo de serie con ducha, inodoro y lavabo, algo que casi ninguna camper de 6 metros ofrece",
      "Se conduce con el carnet B: 3.500 kg de MMA y 4 plazas de viaje",
      "Motor 2.0 TDI de 163 CV con cambio automático de 8 velocidades y tracción total 4MOTION opcional",
      "Cama trasera transversal de 1,95 x 1,40 m más cama elevada opcional sobre la dinette (2+2 plazas para dormir)",
    ],
    contras: [
      "Precio desde 91.720 €, entre los más altos de su segmento",
      "En 2026 solo se ofrece con motor diésel: no hay versión híbrida ni eléctrica",
      "Con 2,97 m de altura no entra en la mayoría de los garajes",
      "De serie solo duermen 2 personas; la cama elevada para la tercera y cuarta plaza es opcional",
      "El baño (80 x 84 cm) resulta justo para personas de gran estatura",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/volkswagen-grand-california-600-2026-precio-ficha-tecnica-2.webp",
        alt: "Volkswagen Grand California 600 en acampada con el toldo extendido",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/volkswagen-grand-california-600-2026-precio-ficha-tecnica.webp",
        alt: "Volkswagen Grand California 600, exterior en ruta",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/volkswagen-grand-california-600-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Grand California 600 con la cama trasera transversal",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/volkswagen-grand-california-600-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Cocina y comedor del Grand California 600 con decoración Atami Bamboo",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "volkswagen-grand-california-600-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Según el plan oficial de Volkswagen: revisión anual o por kilometraje",
      revisiones: [
        {
          nombre: "Mantenimiento anual",
          queSeCambia: "Aceite, filtros e inspección según el plan de mantenimiento oficial de la marca",
          costeAproxEur: null,
        },
      ],
      costeAnualAproxEur: null,
      fuente: "Volkswagen (oficial)",
    },
    euroncap: {
      estrellas: null,
      ano: 2021,
      url: EURONCAP_CRAFTER,
      nota: "Sin prueba de estrellas para el Grand California. Su base, el Volkswagen Crafter, obtuvo la medalla de plata en el test Euro NCAP Commercial Van Safety 2021.",
    },
    curiosidad: {
      texto:
        "Es la única camper de su categoría que sale 100 % terminada de la fábrica de Volkswagen Vehículos Comerciales (Września, Polonia) y llega directa al cliente, sin pasar por carroceros ni transformadores externos.",
      fuenteNombre: "Volkswagen Vehículos Comerciales (oficial)",
      fuenteUrl:
        "https://www.volkswagen-comerciales.es/comunicacion/dossier/un-gran-camper-para-grandes-viajes-el-nuevo-grand-california-coge-velocidad/",
    },
    versiones: [
      {
        nombre: "Grand California 600 2.0 TDI 163 CV Aut. 8 vel.",
        precio: 91720,
        potenciaCv: 163,
      },
      {
        nombre: "Grand California 600 2.0 TDI 163 CV Aut. 8 vel. 4MOTION",
        precio: 97340,
        potenciaCv: 163,
      },
    ],
    fuenteUrl: FUENTE_URL,
  },
  {
    id: "volkswagen-grand-california-680-2026-precio-ficha-tecnica",
    marca: "Volkswagen",
    modelo: "Grand California 680",
    tipo: "Camper",
    categoria: "Camper",
    precioDesde: 91520,
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
    imagen: "/media/volkswagen-grand-california-680-2026-precio-ficha-tecnica.webp",
    imagenOficial: "/media/volkswagen-grand-california-680-2026-precio-ficha-tecnica.webp",
    imagenInteriorOficial:
      "/media/volkswagen-grand-california-680-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6800,
    anchoMm: 2040,
    altoMm: 2840,
    pesoKg: null,
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 2,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Cama trasera longitudinal de hasta 2,00 x 1,67 m, la más grande de la familia California",
      "Cocina más larga que la del 600, con más encimera y más armarios de almacenamiento",
      "800 litros de espacio de almacenamiento en la parte trasera más 180 litros bajo la cama",
      "La única camper de su categoría 100 % terminada en fábrica Volkswagen, sin transformadores externos",
      "Se conduce con el carnet B pese a sus 6,8 metros: 3.500 kg de MMA",
    ],
    contras: [
      "Precio desde 91.520 €; la versión 4MOTION sube a 97.120 €",
      "De serie solo tiene 2 asientos de viaje; la banqueta para 4 plazas es opcional",
      "Con 6,80 m de largo aparcar en ciudad o en parkings se complica mucho",
      "En 2026 solo se ofrece con motor diésel: no hay versión híbrida ni eléctrica",
      "El baño (80 x 84 cm) resulta justo para personas de gran estatura",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/volkswagen-grand-california-680-2026-precio-ficha-tecnica-2.webp",
        alt: "Volkswagen Grand California 680, trasera con el toldo lateral extendido",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/volkswagen-grand-california-680-2026-precio-ficha-tecnica.webp",
        alt: "Volkswagen Grand California 680, exterior en ruta",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/volkswagen-grand-california-680-2026-precio-ficha-tecnica-interior.webp",
        alt: "Baño con ducha del Grand California",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/volkswagen-grand-california-680-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Cabina del conductor del Grand California con Digital Cockpit",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "volkswagen-grand-california-680-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Según el plan oficial de Volkswagen: revisión anual o por kilometraje",
      revisiones: [
        {
          nombre: "Mantenimiento anual",
          queSeCambia: "Aceite, filtros e inspección según el plan de mantenimiento oficial de la marca",
          costeAproxEur: null,
        },
      ],
      costeAnualAproxEur: null,
      fuente: "Volkswagen (oficial)",
    },
    euroncap: {
      estrellas: null,
      ano: 2021,
      url: EURONCAP_CRAFTER,
      nota: "Sin prueba de estrellas para el Grand California. Su base, el Volkswagen Crafter, obtuvo la medalla de plata en el test Euro NCAP Commercial Van Safety 2021.",
    },
    curiosidad: {
      texto:
        "Es la única camper de su categoría que sale 100 % terminada de la fábrica de Volkswagen Vehículos Comerciales (Września, Polonia) y llega directa al cliente, sin pasar por carroceros ni transformadores externos.",
      fuenteNombre: "Volkswagen Vehículos Comerciales (oficial)",
      fuenteUrl:
        "https://www.volkswagen-comerciales.es/comunicacion/dossier/un-gran-camper-para-grandes-viajes-el-nuevo-grand-california-coge-velocidad/",
    },
    versiones: [
      {
        nombre: "Grand California 680 2.0 TDI 163 CV Aut. 8 vel.",
        precio: 91520,
        potenciaCv: 163,
      },
      {
        nombre: "Grand California 680 2.0 TDI 163 CV Aut. 8 vel. 4MOTION",
        precio: 97120,
        potenciaCv: 163,
      },
    ],
    fuenteUrl: FUENTE_URL,
  },
];
