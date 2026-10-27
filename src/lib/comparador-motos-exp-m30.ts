// Lote M30 (2026-10-12) — 2 novedades Ducati: Desmo450 EDS (primera enduro
// moderna de Ducati, precio oficial España 12.990 €, en concesionarios desde
// julio 2026) y Desmo450 SM (supermotard derivada, 63,5 CV, 13.990 € España,
// llegada a Europa diciembre 2026). Datos verificados en la ficha técnica
// oficial de ducati.com (EDS), moteo.es, soymotero.net y lamoto.com.ar.
// Cero cifras inventadas: lo no verificado va como null; lo aproximado en `aprox`.
// Fotos oficiales pendientes (ducati.com bloquea la descarga directa, 403):
// imagen null + galería vacía hasta conseguirlas del press room.
import type { MotoComparador } from "./comparador-motos-data.ts";

export const MOTOS_EXP_M30: MotoComparador[] = [
  // ── DUCATI Desmo450 EDS ──
  {
    id: "ducati-desmo450-eds-2026-precio-ficha-tecnica",
    marca: "Ducati",
    modelo: "Desmo450 EDS",
    version: "2026",
    categoria: "Trail",
    precioDesde: 12990,
    potenciaKw: 31,
    potenciaCv: 42,
    cilindradaCc: 449.6,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 119.9,
    plazas: 1,
    carnet: "A",
    carga: null,
    etiquetaDgt: "C",
    aprox: [],
    pros: [
      "Primera enduro moderna de Ducati: 449,6 cc desmodrómico con 6 marchas y Quick Shift",
      "119,9 kg en orden de marcha: agilidad de 250 con motor de 450",
      "Electrónica de moto grande: DTC, control de freno motor, Power Launch y Ducati Fall Detection",
      "Mantenimiento de enduro civilizada: aceite cada 2.500 km, válvulas cada 5.000 km",
      "12.990 €: precio oficial en España, en línea con las 450 europeas",
    ],
    contras: [
      "Garantía de solo 12 meses (u 80 horas): es una enduro de verdad, no una trail rutera",
      "Un solo asiento y depósito de 8,5 l: autonomía limitada en salidas largas",
      "Asiento a 970 mm: no apta para pilotos de talla baja",
      "42 CV: entrega suave de enduro, no la patada de una 450 de cross (la MX da 63,5 CV)",
      "Red de concesionarios pequeña frente a KTM o Honda en el segmento enduro",
    ],
    curiosidades: [
      "EDS significa Enduro Desmo Single: el primer monocilíndrico desmodrómico de calle de Ducati",
      "El motor deriva del de la Desmo450 MX de motocross, pero con árboles de levas y compresión específicos para el enduro",
      "Lleva horquilla Showa de 49 mm con tratamiento Kashima, la misma escuela que las japonesas de competición",
    ],
    imagen: "/media/ducati-desmo450-eds-2026-precio-ficha-tecnica-oficial.webp",
    galeria: [
      {
        src: "/media/ducati-desmo450-eds-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Ducati Desmo450 EDS 2026, vista lateral en foto oficial de Ducati",
        ancho: 1500,
        alto: 1000,
      },
      {
        src: "/media/fotos-reales/ducati-desmo450-eds-2026-precio-ficha-tecnica/ducati-desmo450-eds-2026-precio-ficha-tecnica-real-1.webp",
        alt: "Ducati Desmo450 EDS 2026, vista tres cuartos delantera en foto oficial",
        ancho: 1500,
        alto: 1000,
      },
      {
        src: "/media/fotos-reales/ducati-desmo450-eds-2026-precio-ficha-tecnica/ducati-desmo450-eds-2026-precio-ficha-tecnica-real-2.webp",
        alt: "Ducati Desmo450 EDS 2026 en acción en un sendero, foto oficial",
        ancho: 1920,
        alto: 1280,
      },
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "Ducati",
    fuenteUrl: "https://www.ducati.com/mx/es/motocicletas/offroad/desmo450-eds/insights",
    analisisSlug: "ducati-desmo450-eds-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo: "Aceite y filtro cada 2.500 km; holgura de válvulas cada 5.000 km; servicio principal del motor cada 11.500 km",
      revisiones: [
        {
          nombre: "Servicio de aceite y filtro / 2.500 km",
          queSeCambia: "Aceite + filtro de aceite + inspección general",
          costeAproxEur: null,
        },
        {
          nombre: "Control de holgura de válvulas / 5.000 km",
          queSeCambia: "Comprobación y reglaje de válvulas del sistema desmodrómico",
          costeAproxEur: null,
        },
        {
          nombre: "Servicio principal del motor / 11.500 km",
          queSeCambia: "Revisión completa del motor según manual oficial",
          costeAproxEur: null,
        },
      ],
      costeAnualAproxEur: null,
      fuente: "Ficha técnica oficial Ducati (ducati.com)",
    },
  },
  // ── DUCATI Desmo450 SM ──
  {
    id: "ducati-desmo450-sm-2026-precio-ficha-tecnica",
    marca: "Ducati",
    modelo: "Desmo450 SM",
    version: "2026",
    categoria: "Supermotard",
    precioDesde: 13990,
    potenciaKw: 46.7,
    potenciaCv: 63.5,
    cilindradaCc: 449.6,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 109,
    plazas: null,
    carnet: "A",
    carga: null,
    etiquetaDgt: "C",
    aprox: ["pesoKg"],
    pros: [
      "63,5 CV a 9.400 rpm con 53,5 Nm: el monocilíndrico más rabioso del segmento supermotard",
      "Chasis de aluminio de doble viga y basculante de fundición: base de competición",
      "Frenada seria: bomba radial Brembo PR15x19 con pinza Stylema y disco Galfer de 310 mm",
      "Embrague antirrebote Suter con puesta a punto específica para la SM",
      "Electrónica completa: DTC con 4 niveles, Launch Control, EBC y Quick Shift",
    ],
    contras: [
      "Mantenimiento de competición: aceite cada 15 horas, pistón y válvulas cada 45",
      "13.990 € por una 450 de una sola plaza: capricho, no moto racional",
      "Depósito de 7,2 l: autonomía justa incluso para uso urbano deportivo",
      "Llantas de 16,5\" delante: neumáticos específicos y caros",
      "Llega en diciembre de 2026: habrá que esperar para probarla",
    ],
    curiosidades: [
      "Es la primera supermotard de Ducati en décadas: la marca no tenía una SM de serie desde la Hypermotard original",
      "El motor es el mismo Desmo450 de la MX y la EDS, pero con puesta a punto específica para asfalto",
      "Ducati desarrolló un sistema de mantenimiento predictivo (módulo Com-Link opcional) que controla el desgaste del motor según el uso",
    ],
    imagen: "/media/ducati-desmo450-sm-2026-precio-ficha-tecnica-oficial.webp",
    galeria: [
      {
        src: "/media/ducati-desmo450-sm-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Ducati Desmo450 SM 2026 en circuito, foto oficial de Ducati",
        ancho: 1920,
        alto: 1080,
      },
      {
        src: "/media/fotos-reales/ducati-desmo450-sm-2026-precio-ficha-tecnica/ducati-desmo450-sm-2026-precio-ficha-tecnica-real-1.webp",
        alt: "Ducati Desmo450 SM 2026 tumbando en curva, foto oficial",
        ancho: 1600,
        alto: 2000,
      },
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "SoyMotero",
    fuenteUrl: "https://soymotero.net/noticia/ducati-desmo450-sm-supermotard-lanzamiento/",
    analisisSlug: "ducati-desmo450-sm-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo: "Aceite cada 15 horas; holgura de válvulas y sustitución del pistón cada 45 horas; revisión completa del motor cada 90 horas",
      revisiones: [
        {
          nombre: "Cambio de aceite / 15 horas",
          queSeCambia: "Aceite + inspección general (uso de competición)",
          costeAproxEur: null,
        },
        {
          nombre: "Válvulas y pistón / 45 horas",
          queSeCambia: "Comprobación de holgura de válvulas + sustitución del pistón",
          costeAproxEur: null,
        },
        {
          nombre: "Revisión completa del motor / 90 horas",
          queSeCambia: "Servicio principal del motor según manual oficial",
          costeAproxEur: null,
        },
      ],
      costeAnualAproxEur: null,
      fuente: "SoyMotero / La Moto (datos del lanzamiento oficial)",
    },
  },
];
