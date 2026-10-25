// Campers Pilote — lote eu2 (19/10/2026).
// Datos verificados: Pilote (web oficial) https://www.pilote.fr/fourgon/v630j-pilote/ y gama Vega https://www.pilote.fr/panelvans/.
// Fotos: oficiales de prensa del modelo exacto (verificadas visualmente).
// NOTA: "Pilote Foxy Van (2026)" no existe como modelo oficial 2026 (Foxy Van fue la gama de fourgons Pilote 2015-2021).
// Se sustituye por el Pilote V630J, sucesor directo del Foxy Van 630J (6,36 m, lits jumeaux).
import type { CocheComparador } from "./comparador-coches-data.ts";

export const CAMPERS_PILOTE: CocheComparador[] = [
  {
    id: "pilote-v630j-2026-precio-ficha-tecnica",
    marca: "Pilote",
    modelo: "V630J",
    tipo: "Diésel",
    categoria: "Camper",
    precioDesde: 63900, // Tarifa oficial Pilote Francia MY2026 (pilote.fr), verificada 21/10/2026,
    potenciaCv: 140,
    autonomiaKm: null, maleteroL: null, ceroCien: null, velocidadMax: null,
    bateriaKwh: null, cargaRapidaKw: null,
    etiquetaDgt: "C",
    garantiaBateriaAnos: null, garantiaBateriaKm: null, garantiaBateriaDegradacionPct: null,
    imagen: "/media/pilote-v630j-2026-precio-ficha-tecnica.webp",
    imagenOficial: "/media/pilote-v630j-2026-precio-ficha-tecnica.webp",
    imagenInteriorOficial: "/media/pilote-v630j-2026-precio-ficha-tecnica-interior.webp",
    videoId: null, videoCanal: null,
    largoMm: 6360, anchoMm: 2050, altoMm: 2670,
    pesoKg: null,
    consumo: null, consumoUnidad: null,
    plazas: 4, parNm: null, traccion: "Delantera", emisionesCo2: null,
    aprox: [],
    pros: [
      "Lits jumeaux de 77 × 200 cm que se convierten en cama doble de 190 cm o en cama-garaje",
      "Gran soute modulable bajo las camas, capaz de alojar dos bicicletas",
      "Cuarto de baño 3 en 1 de 79 × 86 cm con WC Thetford sobre guías y lavabo escamoteable",
      "Cocina optimizada con 4 cajones con freno y cubo de basura integrado",
      "Aislamiento probado en cámara fría: de −15° a +20° en menos de 4 h (norma EN-1646-1)",
      "Cada unidad pasa 150 puntos de control y un test de estanqueidad en fábrica",
      "Se conduce con el carnet B de coche, sin permisos especiales",
    ],
    contras: [
      "Solo 2 plazas para dormir de serie (las camas gemelas)",
      "Altura de 2,67 m: ojo con parkings cubiertos y peajes con límite",
      "Longitud de 6,36 m: menos ágil que un van compacto en ciudad",
      "Sin precio de tarifa oficial publicado en la web (consultar red de concesionarios)",
      "El cuarto de baño 3 en 1 exige organización para usar ducha y WC con comodidad",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/pilote-v630j-2026-precio-ficha-tecnica-2.webp", alt: "Pilote V630J Evidence, vista lateral del fourgon", ancho: 746, alto: 1024 },
      { src: "/media/pilote-v630j-2026-precio-ficha-tecnica-interior.webp", alt: "Interior del Pilote V630J: salón con banqueta y cocina, decoración Pyla", ancho: 1024, alto: 683 },
      { src: "/media/pilote-v630j-2026-precio-ficha-tecnica-interior-2.webp", alt: "Dormitorio del Pilote V630J con cama y armarios altos", ancho: 1024, alto: 677 },
    ],
    analisisSlug: "pilote-v630j-2026-precio-ficha-tecnica-analisis-opinion",
    planMantenimiento: {
      intervalo: "Revisión anual recomendada: motor según plan Fiat + estanqueidad célula",
      revisiones: [{ nombre: "Revisión anual", queSeCambia: "Aceite y filtros del motor, estanqueidad de la célula, gas y electricidad", costeAproxEur: 350 }],
      costeAnualAproxEur: 350,
      fuente: "Plan oficial Fiat Ducato + recomendaciones Pilote",
    },
    euroncap: null,
    curiosidad: { texto: "La gama Vega de Pilote se prueba en cámara fría: pasa de −15° a +20° en menos de 4 horas según la norma EN-1646-1, con calefacción TRUMA 4.", fuenteNombre: "Pilote (web oficial)", fuenteUrl: "https://www.pilote.fr/panelvans/" },
    fuenteUrl: "https://www.pilote.fr/fourgon/v630j-pilote/",
  },
];
