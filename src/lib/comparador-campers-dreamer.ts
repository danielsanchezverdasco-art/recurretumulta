// Campers Dreamer — lote eu2 (19/10/2026).
// Datos verificados: Dreamer (web oficial) https://www.dreamer-van.be/fr/fourgon-dreamer-d55.php
// y distribuidor oficial Vanomobil https://ct.vanomobil.be/api/products/178/pdf/en
// (gama FUN 2026: 5,99 × 2,05 × 2,59 m; Fiat Ducato 35L 140).
// Fotos: oficiales de prensa del modelo exacto (verificadas visualmente).
import type { CocheComparador } from "./comparador-coches-data.ts";

export const CAMPERS_DREAMER: CocheComparador[] = [
  {
    id: "dreamer-d55-2026-precio-ficha-tecnica",
    marca: "Dreamer",
    modelo: "D55",
    tipo: "Diésel",
    categoria: "Camper",
    precioDesde: 69850,
    potenciaCv: 140,
    autonomiaKm: null, maleteroL: null, ceroCien: null, velocidadMax: null,
    bateriaKwh: null, cargaRapidaKw: null,
    etiquetaDgt: "C",
    garantiaBateriaAnos: null, garantiaBateriaKm: null, garantiaBateriaDegradacionPct: null,
    imagen: "/media/dreamer-d55-2026-precio-ficha-tecnica.webp",
    imagenOficial: "/media/dreamer-d55-2026-precio-ficha-tecnica.webp",
    imagenInteriorOficial: "/media/dreamer-d55-2026-precio-ficha-tecnica-interior.webp",
    videoId: null, videoCanal: null,
    largoMm: 5990, anchoMm: 2050, altoMm: 2590,
    pesoKg: null,
    consumo: null, consumoUnidad: null,
    plazas: 4, parNm: null, traccion: "Delantera", emisionesCo2: null,
    aprox: ["precioDesde"],
    pros: [
      "Cama transversal de 192 × 132 cm y ducha separada del WC en solo 5,99 m",
      "Calefacción Webasto diésel de 4 kW de serie: autonomía sin depender del gas",
      "Pack FUN+ con colores de carrocería, 4 tapicerías y segunda batería de célula",
      "En 2026 Dreamer cumple 20 años, con edición limitada de aniversario",
      "Maletero modulable para skis, tablas de surf o dos bicicletas",
      "Se conduce con el carnet B de coche (MMA 3.500 kg)",
    ],
    contras: [
      "Tarifa oficial española no publicada: los 69.850 € son el precio base en Bélgica",
      "Marca de acceso del grupo Rapido: acabados más sencillos que en un Rapido",
      "Solo 3 plazas de noche de serie (la tercera, en la dinette)",
      "Cocina compacta con poco plano de trabajo",
      "Red de concesionarios más pequeña, en concreto, que la de las grandes marcas",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/dreamer-d55-2026-precio-ficha-tecnica-2.webp", alt: "Dreamer D55, vista exterior del furgón camper", ancho: 800, alto: 450 },
      { src: "/media/dreamer-d55-2026-precio-ficha-tecnica-interior.webp", alt: "Dreamer D55, salón con dinette y asientos giratorios de cabina", ancho: 1200, alto: 740 },
      { src: "/media/dreamer-d55-2026-precio-ficha-tecnica-interior-2.webp", alt: "Dreamer D55, cama transversal y armario MODUL'SPACE", ancho: 1280, alto: 720 },
    ],
    analisisSlug: "dreamer-d55-2026-precio-ficha-tecnica-analisis-opinion",
    planMantenimiento: {
      intervalo: "Revisión anual recomendada: motor según plan Fiat + estanqueidad célula",
      revisiones: [{ nombre: "Revisión anual", queSeCambia: "Aceite y filtros del motor, estanqueidad de la célula, gas y electricidad", costeAproxEur: 350 }],
      costeAnualAproxEur: 350,
      fuente: "Plan oficial Fiat Ducato + recomendaciones Dreamer",
    },
    euroncap: null,
    curiosidad: { texto: "En 2026 Dreamer celebra su 20.º aniversario y lo festeja con una edición limitada de jubileo: la marca nació como la gama de acceso del grupo Rapido y hoy ofrece 14 implantaciones entre 5,40 y 6,40 m.", fuenteNombre: "Vanomobil (distribuidor oficial Dreamer)", fuenteUrl: "https://ct.vanomobil.be/api/products/178/pdf/en" },
    fuenteUrl: "https://www.dreamer-van.be/fr/fourgon-dreamer-d55.php",
  },
];
