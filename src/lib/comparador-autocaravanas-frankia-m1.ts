// Autocaravanas Frankia — lote Merlín 1 (18/10/2026).
// Datos verificados: folleto oficial Frankia NEO (temporada 2027, impreso en 2026, FRANKIA-GP GmbH).
// Corrección 4 (18/10/2026): eliminada la mención a la red de concesionarios como fuente; la ficha
// cita solo el folleto oficial. El precio indicativo de ~142.000 € de un concesionario alemán queda
// como nota «no oficial» y precioDesde en null (Frankia no publica PVP).
// NOTA DE NOMENCLATURA: el «Neo 680 ED» no existe oficialmente; el integral sobre Mercedes Sprinter
// de la gama Neo para 2026 es el Neo I 7 GDK, que es el que se ficha aquí.
// Frankia no publica PVP: precioDesde en null, sin inventar.
// Precios "desde" orientativos para España marcados en "aprox".
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_FRANKIA_M1: Autocaravana[] = [
  {
    id: "frankia-neo-i-7-gdk-2026-precio-ficha-tecnica",
    marca: "Frankia",
    modelo: "Neo I 7 GDK",
    tipo: "Autocaravana integral",
    categoria: "Autocaravana",
    precioDesde: null, // Frankia no publica PVP (indicativo en concesionario alemán: ~142.000 €)
    potenciaCv: 150, // 170 CV opcional
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
    imagen: "/media/frankia-neo-i-7-gdk-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/frankia-neo-i-7-gdk-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/frankia-neo-i-7-gdk-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7050,
    anchoMm: 2240,
    altoMm: 2960,
    pesoKg: null, // no publicado por variante; el folleto da 2950 kg como ejemplo genérico
    mmaKg: 3500, // opción de chasis de 4.500 kg
    carnetNecesario: "B",
    cargaUtilKg: null, // no publicada por variante; el ejemplo del folleto da 171,5 kg
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null, // no publicado por el fabricante
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Doble suelo calefactado integral con tecnología AL-KO específica de Frankia: referente alemán en construcción de invierno",
      "Garantía de estanqueidad de 7 años: el fabricante respalda la carrocería por encima de la media del sector",
      "Garaje trasero de 1,20 m de altura interior con concepto Easy-Load: se carga sin agacharse",
      "Camas individuales traseras convertibles en doble de 1,60 m: flexibilidad para dormir solo o en pareja a lo ancho",
      "Estructura ThermoProtect de aluminio y GFRP: ligera y bien aislada para una integral de 7 metros",
    ],
    contras: [
      "Frankia no publica PVP: el precio se negocia con el concesionario y ronda los ~142.000 € según anuncios",
      "Masa en orden de marcha no publicada por variante: comprar sin conocer el peso real es ir a ciegas con la carga útil",
      "El folleto oficial da 171,5 kg de «pay-mass» en su ejemplo: poquísimo margen si se equipan extras",
      "Motor base de 150 CV: para 7 m de integral, el salto al de 170 CV es casi obligado",
      "Sistema multimedia MBUX de 10,25\" solo como opción: la pantalla moderna de Mercedes se paga aparte",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 15.4,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 700,
      seguroAmpliadoAnual: 1300,
      mantenimientoAnual: 650,
      costeMensualTotal: 455,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~11 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/frankia-neo-i-7-gdk-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Frankia Neo I 7 GDK, vista frontal integral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/frankia-neo-i-7-gdk-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Frankia Neo I 7 GDK, salón en L y dormitorio",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "frankia-neo-i-7-gdk-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Mercedes Sprinter: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Mercedes-Benz)",
      revisiones: [
        {
          nombre: "Revisión Mercedes Sprinter (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de aire + inspección general",
          costeAproxEur: 450,
        },
        {
          nombre: "Revisión célula Frankia (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 700,
      fuente: "Plan de mantenimiento Mercedes-Benz Sprinter + recomendaciones Frankia",
    },
    euroncap: null,
    fuenteNombre: "Frankia (folleto oficial NEO 2027)",
    fuenteUrl: "https://www.frankia.com/fileadmin/user_upload/infomaterial/neo_2027_englisch.pdf",
  },
];
