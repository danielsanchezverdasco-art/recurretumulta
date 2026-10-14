// Lote prioritario 14/10/2026 (integración en src, sin publicar).
// Fang Cheng Bao Ti 9: ficha + blog (el blog vive en blog-posts-prioridad-20261014.ts).
// Fusión Ti 9 / Tai 9: UNA sola página, nombre principal Ti 9, «Tai 9» como alias.
// Regla dura: dato no verificado = null o «a verificar», nunca inventado.
//  - Precio: A CONFIRMAR (BYD no ha publicado precios) → precioDesde: null.
//  - Potencia combinada del sistema: NO publicada → potenciaCv: null.
//    544 CV es la SUMA de los dos motores eléctricos, no la potencia del sistema.
//  - Ciclo de autonomía en conflicto (CLTC según unas fuentes, WLTC según otras;
//    total alternativo >1.600 km) → autonomiaKm: 310 en aprox (cifra declarada).
//  - Par, 0–100, consumo, maletero, kW de carga, garantía, mantenimiento: a verificar.
//  - EuroNCAP: sin prueba → estrellas null + nota.
//  - planMantenimiento: ausente (sin dato oficial del modelo). La ficha no muestra
//    sección de mantenimiento; el blog declara el dato como pendiente.
// Fuentes: Híbridos y Eléctricos (13/10/2026), CarNewsChina (11/08, 21/08, 09/10/2026),
// CnEVPost (03/08/2026), FreshMotors, Wikipedia (Fangchengbao Ti9), NewAtlas.
// Fotos: prensa de la marca distribuida por Híbridos y Eléctricos (licencia desconocida),
// verificadas visualmente 13–14/10/2026. Nunca presentadas como oficiales.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const COCHES_PRIORIDAD_20261014: CocheComparador[] = [
  {
    id: "fangchengbao-ti-9-2026",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/fangchengbao-ti-9-2026-oficial.webp",
    imagenInteriorOficial: "/media/fangchengbao-ti-9-2026-interior.webp",
    videoId: null,
    videoCanal: null,
    marca: "Fangchengbao",
    modelo: "Ti 9",
    tipo: "Híbrido enchufable",
    categoria: "SUV",
    precioDesde: null,
    potenciaCv: null,
    autonomiaKm: 310,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: 220,
    bateriaKwh: 66.5,
    cargaRapidaKw: null,
    etiquetaDgt: null,
    pros: [
      "Hasta 310 km solo con electricidad (cifra declarada, ciclo a verificar)",
      "Hasta 2.300 km de autonomía total declarada combinando batería y depósito",
      "Recarga del 10 al 97% en unos 9 minutos con Flash Charging (declarado por BYD)",
      "6 plazas (2+2+2, configuración principal; la homologación cita variantes de 5, 6 y 7, pendiente de confirmación) con pantalla central flotante de 30 pulgadas",
      "Sensor LiDAR en el techo; suspensión DiSus-P Ultra esperada según CnEVPost, sin confirmar",
    ],
    contras: [
      "Precio a confirmar: BYD no ha publicado precios oficiales del Ti 9",
      "Potencia combinada del sistema no publicada (544 CV es solo la suma de los dos motores eléctricos)",
      "Ciclo de homologación de la autonomía en conflicto (CLTC vs WLTC), a verificar",
      "No se vende en España ni en Europa: sin confirmación de exportación",
      "Mantenimiento y garantía a verificar (sin dato oficial del modelo)",
      "Sin datos EuroNCAP",
      "Peso 2.865–2.965 kg según variante (MIIT)",
      "Sin etiqueta DGT asignada (no se vende en España; por su autonomía eléctrica equivaldría a Cero)",
    ],
    largoMm: 5270,
    anchoMm: 1999,
    altoMm: 1850,
    pesoKg: 2865,
    consumo: null,
    consumoUnidad: null,
    plazas: 6,
    parNm: null,
    traccion: "Total",
    emisionesCo2: null,
    aprox: ["autonomiaKm", "altoMm", "pesoKg", "plazas"],
    imagen: "/media/fangchengbao-ti-9-2026-hero.webp",
    analisisSlug: "fangchengbao-ti-9-2026-precio-ficha-tecnica",
    opiniones: [],
    costeMensual: null,
    galeria: [
      {
        src: "/media/fangchengbao-ti-9-2026-hero.webp",
        alt: "Fang Cheng Bao Ti 9, SUV híbrido de 5,27 m, lateral con las puertas abiertas",
        ancho: 659,
        alto: 371,
      },
      {
        src: "/media/fangchengbao-ti-9-2026-oficial.webp",
        alt: "Fang Cheng Bao Ti 9, trasera tres cuartos con piloto vertical en forma de T",
        ancho: 659,
        alto: 371,
      },
      {
        src: "/media/fangchengbao-ti-9-2026-interior.webp",
        alt: "Interior del Fang Cheng Bao Ti 9 con pantalla panorámica de 30 pulgadas",
        ancho: 659,
        alto: 371,
      },
    ],
    euroncap: {
      estrellas: null,
      ano: null,
      url: null,
      nota: "Sin datos EuroNCAP: no hay prueba publicada para el Ti 9.",
    },
  },
];
