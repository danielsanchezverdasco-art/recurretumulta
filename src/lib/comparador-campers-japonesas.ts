// Campers japonesas — Nissan NV200 Camper (18/10/2026, rama niky-campers).
// Camper oficial de Nissan Iberia: presentada en el Salón del Automóvil de
// Madrid (mayo 2018), transformación de BRAM Technologies, venta en la red
// oficial con homologación incluida. Versiones Weekender y Pacific.
// Datos base del folleto oficial Nissan NV200 (1.5 dCi Euro 6) y de la nota
// de prensa oficial de Nissan Europa (19/09/2018).
// Sin tarifa oficial publicada por Nissan -> precioDesde: null y CERO cifras
// de precio en los textos (regla 3 del TEMPLATE-CAMPERS.md).
// Fuentes:
// - https://europe.nissannews.com/en-GB/releases/release-426233194 (Nissan oficial)
// - https://www.hibridosyelectricos.com/furgonetas/nissan-presenta-version-camper-nueva-furgoneta-electrica-nv200_19539_102.html
// - https://www.todotransporte.com/texto-diario/mostrar/3275740/nissan-refuerza-gama-comerciales-nv250-version-xl-e-nv200
// - https://newatlas.com/nissan-nv-electric-camper-van/54957/
// - Folleto oficial Nissan NV200 (especificaciones técnicas, junio 2015)
import type { CocheComparador } from "./comparador-coches-data.ts";

export const CAMPERS_JAPONESAS: CocheComparador[] = [
  {
    id: "nissan-nv200-camper-2026-precio-ficha-tecnica",
    marca: "Nissan",
    modelo: "NV200 Camper",
    tipo: "Camper",
    categoria: "Camper",
    precioDesde: null, // Sin precio oficial en EUR verificado el 21/10/2026: No existe: no hay NV200 Camper 2026.
    potenciaCv: 110,
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: 169,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/nissan-nv200-camper-2026-precio-ficha-tecnica.webp",
    imagenOficial: "/media/nissan-nv200-camper-2026-precio-ficha-tecnica.webp",
    imagenInteriorOficial: "/media/nissan-nv200-camper-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 4400,
    anchoMm: 1695,
    altoMm: 1860,
    pesoKg: 1286,
    mmaKg: 2000,
    carnetNecesario: "B",
    cargaUtilKg: null,
    consumo: 5.0,
    consumoUnidad: "l/100 km",
    plazas: 2,
    parNm: 240,
    traccion: "Delantera",
    emisionesCo2: 130,
    aprox: [],
    pros: [
      "Camper oficial Nissan: se vendía en la red de concesionarios, con la transformación de BRAM Technologies y la homologación incluidas",
      "Techo elevable de serie: permite estar de pie en el interior y suma una cama en el techo",
      "Cocina completa en la versión Pacific: fregadero, fogón de gas, nevera de 40 litros y depósitos de agua limpia y gris",
      "Garantía Nissan de 5 años o 160.000 km, más 2 años de BRAM en los elementos de la transformación",
      "Solo 4,4 metros de largo: se conduce y se aparca como un turismo en el día a día",
    ],
    contras: [
      "Nissan nunca publicó una tarifa oficial: cada unidad se configuraba a medida en el concesionario",
      "Duermen dos personas: la segunda cama doble del techo elevado era exclusiva de la NV300",
      "El diésel 1.5 dCi lleva etiqueta C de la DGT, sin acceso libre a todas las zonas de bajas emisiones",
      "Gama descatalogada: la NV200 dejó de fabricarse y la relevó la Townstar",
      "La versión eléctrica e-NV200 Camper ofrecía 200 km de autonomía WLTP, justa para viajar lejos",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/nissan-nv200-camper-2026-precio-ficha-tecnica-2.webp", alt: "Nissan NV200 Camper, vista lateral con el vinilado bicolor oficial", ancho: 1200, alto: 800 },
      { src: "/media/nissan-nv200-camper-2026-precio-ficha-tecnica.webp", alt: "Nissan NV200 Camper circulando, camper oficial de Nissan y BRAM Technologies", ancho: 1200, alto: 800 },
      { src: "/media/nissan-nv200-camper-2026-precio-ficha-tecnica-interior.webp", alt: "Interior de la Nissan NV200 Camper: cama del techo elevable", ancho: 1200, alto: 800 },
      { src: "/media/nissan-nv200-camper-2026-precio-ficha-tecnica-interior-2.webp", alt: "Interior de la Nissan NV200 Camper: cama trasera convertible", ancho: 1200, alto: 800 },
    ],
    analisisSlug: "nissan-nv200-camper-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Según plan oficial Nissan: revisión anual o por kilometraje",
      revisiones: [
        {
          nombre: "Mantenimiento anual",
          queSeCambia: "Aceite, filtros e inspección según el plan de mantenimiento de Nissan",
          costeAproxEur: null,
        },
      ],
      costeAnualAproxEur: null,
      fuente: "Nissan (oficial)",
    },
    euroncap: {
      estrellas: null,
      ano: null,
      url: null,
      nota: "Sin datos EuroNCAP: la NV200 no ha sido probada por EuroNCAP",
    },
    curiosidad: {
      texto:
        "Las NV200 camper partían de furgonetas fabricadas en la planta de Nissan en Barcelona, que fue el único centro del mundo donde se produjo la e-NV200",
      fuenteNombre: "cochesyconcesionarios.com",
      fuenteUrl:
        "https://www.cochesyconcesionarios.com/novedades/noticias/nissan/12-2019-35979.html",
    },
    fuenteUrl: "https://europe.nissannews.com/en-GB/releases/release-426233194",
  },
];
