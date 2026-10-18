// Autocaravanas Carthago — lote Merlín 1 (18/10/2026).
// Datos verificados: carthago.com (catálogo oficial integrado "A Class 2024", última gama con el
// I 148 LE; web oficial). ATENCIÓN AÑO MODELO: el I 148 LE es de la gama 2024, no 2026 (en 2025 la
// gama pasó a C1-tourer y en 2026 a C2-tourer); pendiente de decisión de Grok si se renombra el id.
// Corrección 4 (18/10/2026): eliminada la fuente camprest.com (ficha de concesionario Dandis).
// Largo corregido a 7.390 mm: el catálogo oficial da 739 cm para la versión Fiat Ducato (752 cm
// es la versión Mercedes-Benz Sprinter). Alto, MMA, plazas y motor 140 CV, del concesionario,
// marcados «no oficial» en "aprox". "LE" = camas gemelas longitudinales (oficial), no cama en isla.
// Precio en España no verificado: precioDesde en null (no inventar).
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_CARTHAGO_M1: Autocaravana[] = [
  {
    id: "carthago-c-tourer-i-148-le-2026-precio-ficha-tecnica",
    marca: "Carthago",
    modelo: "C-Tourer I 148 LE",
    tipo: "Autocaravana integral",
    categoria: "Autocaravana",
    precioDesde: null, // precio en España no verificado; no inventar
    potenciaCv: 140, // «no oficial»: motorización según concesionario; base Fiat confirmada en catálogo oficial
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
    imagen: "/media/carthago-c-tourer-i-148-le-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/carthago-c-tourer-i-148-le-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/carthago-c-tourer-i-148-le-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7390, // catálogo oficial Carthago A Class 2024: 739 cm (versión Fiat Ducato); 752 cm = versión Mercedes
    anchoMm: 2270,
    altoMm: 2950, // «no oficial»: solo en ficha de concesionario (Dandis)
    pesoKg: null, // masa en orden de marcha no publicada de forma única para esta versión
    mmaKg: 3500, // «no oficial»: chasis f35 light según concesionario; sin confirmación del fabricante
    carnetNecesario: "B",
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // «no oficial»: 2+2 con cama basculante opcional según catálogo; 4 según concesionario
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["altoMm", "mmaKg", "plazas", "potenciaCv"], // «no oficial»: ver nota en cabecera
    pros: [
      "Integral premium de 7,39 m (versión Fiat) con solo 2,27 m de ancho: ágil para ser una clase A",
      "Camas gemelas de 200 cm con armario de gran altura debajo: dormir y guardar sin renuncias",
      "Doble suelo con 220 mm de bodega: instalaciones protegidas del frío y mucho almacenaje",
      "Calefacción Truma Combi 6E y depósitos de 150/140 l: pensada para viajar todo el año",
      "Carthago fabrica con aluminio y aislamiento RTM: calidad de construcción de referencia",
    ],
    contras: [
      "Precio no publicado y claramente premium: hay que pedir oferta y preparar la cartera",
      "El motor Fiat 2.2 de 140 CV es el básico: el 180 CV automático encarece mucho",
      "Con 7,52 m de largo, no es la integral más manejable en pueblos y carreteras de montaña",
      "La cama basculante opcional resta altura al salón cuando se usa",
      "MMA de 3.500 kg: el equipamiento premium pesa y la carga útil se estrecha",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 14.4,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 700,
      seguroAmpliadoAnual: 1300,
      mantenimientoAnual: 650,
      costeMensualTotal: 450,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~10,5 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/carthago-c-tourer-i-148-le-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Carthago C-Tourer I 148 LE, vista frontal integral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/carthago-c-tourer-i-148-le-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Carthago C-Tourer I 148 LE, camas gemelas",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "carthago-c-tourer-i-148-le-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato 2.2: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Fiat)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Carthago (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Carthago",
    },
    euroncap: null,
    fuenteNombre: "Carthago (catálogo oficial A Class 2024)",
    fuenteUrl: "https://www.carthago.com/en/motorhomes/a-class-motorhomes/",
  },
];
