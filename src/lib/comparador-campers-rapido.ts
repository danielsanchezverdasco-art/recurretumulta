// Campers Rapido — lote eu2 (19/10/2026).
// Datos verificados: Rapido (web oficial / red oficial) https://www.rapido-camping-car.fr/inc/rapido_nouveautes_les-fourgons_camping-car-serie-vans.phtml
// y ficha técnica del V55 2026 (Peugeot Boxer 2.2 140 CV): https://ypocamp.fr/sites/default/files/node/annonce/field_pdf_vehicule/vf3ylf8v6tg003676.pdf
// NOTA: el V55 2026 se construye sobre Peugeot Boxer (no Fiat Ducato).
// Fotos: oficiales de prensa del modelo exacto (verificadas visualmente).
import type { CocheComparador } from "./comparador-coches-data.ts";

export const CAMPERS_RAPIDO: CocheComparador[] = [
  {
    id: "rapido-v55-2026-precio-ficha-tecnica",
    marca: "Rapido",
    modelo: "V55",
    tipo: "Diésel",
    categoria: "Camper",
    precioDesde: 63350,
    potenciaCv: 140,
    autonomiaKm: null, maleteroL: null, ceroCien: null, velocidadMax: null,
    bateriaKwh: null, cargaRapidaKw: null,
    etiquetaDgt: "C",
    garantiaBateriaAnos: null, garantiaBateriaKm: null, garantiaBateriaDegradacionPct: null,
    imagen: "/media/rapido-v55-2026-precio-ficha-tecnica.webp",
    imagenOficial: "/media/rapido-v55-2026-precio-ficha-tecnica.webp",
    imagenInteriorOficial: "/media/rapido-v55-2026-precio-ficha-tecnica-interior.webp",
    videoId: null, videoCanal: null,
    largoMm: 5990, anchoMm: 2050, altoMm: 2590,
    pesoKg: null,
    mmaKg: 3500,
    carnetNecesario: "B",
    consumo: null, consumoUnidad: null,
    plazas: 4, parNm: null, traccion: "Delantera", emisionesCo2: null,
    aprox: ["precioDesde", "mmaKg"],
    pros: [
      "Cama transversal trasera de 195 × 132 cm sobre un maletero que admite dos bicicletas",
      "Ducha y WC separados gracias al armario pivotante patentado MODUL'SPACE",
      "Serie especial OPTIMUM LINE 2026: muy equipado de serie (Pack Rapido Van)",
      "Peugeot Boxer 2.2 de 140 CV: ágil y sobrio en solo 5,99 metros",
      "Nevera por compresor de 149 L y calefacción Truma para usarlo todo el año",
      "Se conduce con el carnet B de coche (MMA 3.500 kg)",
    ],
    contras: [
      "Tarifa oficial española no publicada: los 63.350 € son el precio base en Francia",
      "Solo 3 plazas de noche (la tercera es la dinette convertible)",
      "Altura de 2,59 m: ojo con parkings cubiertos y barreras",
      "El sistema MODUL'SPACE obliga a mover el armario cada día",
      "Gama de colores y ambientes más limitada que en un integral",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/rapido-v55-2026-precio-ficha-tecnica-2.webp", alt: "Rapido V55 2026, salón y cocina del furgón camper", ancho: 1200, alto: 800 },
      { src: "/media/rapido-v55-2026-precio-ficha-tecnica-interior.webp", alt: "Rapido V55 2026, armario pivotante MODUL'SPACE y ducha separada", ancho: 1200, alto: 800 },
      { src: "/media/rapido-v55-2026-precio-ficha-tecnica-interior-2.webp", alt: "Rapido V55 2026, cama transversal trasera sobre el maletero", ancho: 1200, alto: 800 },
    ],
    analisisSlug: "rapido-v55-2026-precio-ficha-tecnica-analisis-opinion",
    planMantenimiento: {
      intervalo: "Revisión anual recomendada: motor según plan Peugeot + estanqueidad célula",
      revisiones: [{ nombre: "Revisión anual", queSeCambia: "Aceite y filtros del motor, estanqueidad de la célula, gas y electricidad", costeAproxEur: 350 }],
      costeAnualAproxEur: 350,
      fuente: "Plan oficial Peugeot Boxer + recomendaciones Rapido",
    },
    euroncap: null,
    curiosidad: { texto: "El V55 esconde una innovación patentada por Rapido: el armario MODUL'SPACE pivota 180° y se escamotea sobre la cama para liberar una ducha separada en un furgón de menos de 6 metros.", fuenteNombre: "Rapido (web oficial)", fuenteUrl: "https://www.rapido-camping-car.fr/inc/rapido_nouveautes_les-fourgons_camping-car-serie-vans.phtml" },
    fuenteUrl: "https://www.rapido-camping-car.fr/inc/rapido_nouveautes_les-fourgons_camping-car-serie-vans.phtml",
  },
];
