// Campers Font Vendôme — lote eu2 (19/10/2026).
// Datos verificados: catálogo oficial 2026 "BIG VANS 2026 / MONDÉA"
// (https://docs.campingcar-infos.com/docs/Font-Vendome%20(vans)/FontVendome%202026%20Mondea.pdf,
// documento oficial de Font Vendôme, www.fontvendome.fr).
// Fotos: oficiales de prensa del modelo exacto (verificadas visualmente).
// NOTA TÉCNICA: el tipo CocheComparador no incluye los campos mmaKg,
// carnetNecesario ni cargaUtilKg; el carnet B se indica en los pros y en el blog.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const CAMPERS_FONT_VENDOME: CocheComparador[] = [
  {
    id: "font-vendome-mondea-2026-precio-ficha-tecnica",
    marca: "Font Vendôme",
    modelo: "Mondéa",
    tipo: "Diésel",
    categoria: "Camper",
    precioDesde: null,
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
    imagen: "/media/font-vendome-mondea-2026-precio-ficha-tecnica.webp",
    imagenOficial: "/media/font-vendome-mondea-2026-precio-ficha-tecnica.webp",
    imagenInteriorOficial: "/media/font-vendome-mondea-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990,
    anchoMm: 2050,
    altoMm: 2890,
    pesoKg: 3088,
    mmaKg: 3500,
    carnetNecesario: "B",
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Cama de techo eléctrica de 197 x 132 cm: la habitación desaparece en marcha y libera el salón",
      "Baño transversal con ducha separada, un lujo muy raro en un furgón de 5,99 m",
      "Nevera por compresor de 150 L, batería de litio de 120 Ah y paneles solares: autonomía real",
      "Fiat Ducato 2.2 de 140 CV con Pack Safety: frenada automática, alerta de carril y lector de señales",
      "Se conduce con el carnet B: MMA de 3.500 kg y fabricación artesanal 100 % francesa",
    ],
    contras: [
      "2,89 m de altura: olvídate de parkings cubiertos y de algunas barreras",
      "La cama de la dinette (188 x 121 cm) es una opción de pago, no viene de serie",
      "MMA de 3.500 kg justos: con 4 pasajeros y equipaje hay que vigilar la carga",
      "La cama de techo se alcanza con escalera: no es para quien busque una cama fija baja",
      "Tarifa oficial no publicada en la web: el precio hay que pedirlo al concesionario",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/font-vendome-mondea-2026-precio-ficha-tecnica-2.webp",
        alt: "Font Vendôme Mondéa 2026, furgón camper sobre Fiat Ducato en vista exterior",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/font-vendome-mondea-2026-precio-ficha-tecnica-interior.webp",
        alt: "Font Vendôme Mondéa 2026, salón camper con 4 plazas de comedor",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/font-vendome-mondea-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Font Vendôme Mondéa 2026, cocina equipada con doble plano de trabajo",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "font-vendome-mondea-2026-precio-ficha-tecnica-analisis-opinion",
    planMantenimiento: {
      intervalo: "Revisión anual recomendada: motor según plan Fiat + control de estanqueidad de la célula",
      revisiones: [
        {
          nombre: "Revisión anual",
          queSeCambia: "Aceite y filtros del motor, estanqueidad de la célula, gas y electricidad",
          costeAproxEur: null,
        },
      ],
      costeAnualAproxEur: null,
      fuente: "Plan oficial Fiat Ducato + recomendaciones Font Vendôme",
    },
    euroncap: null,
    curiosidad: {
      texto: "El Mondéa se distingue por una auténtica sala de baño con ducha separada que ocupa todo el ancho del furgón, algo que el propio catálogo oficial destaca como raro en su categoría de 5,99 metros.",
      fuenteNombre: "Font Vendôme (catálogo oficial 2026)",
      fuenteUrl: "https://docs.campingcar-infos.com/docs/Font-Vendome%20(vans)/FontVendome%202026%20Mondea.pdf",
    },
    fuenteUrl: "https://docs.campingcar-infos.com/docs/Font-Vendome%20(vans)/FontVendome%202026%20Mondea.pdf",
  },
];
