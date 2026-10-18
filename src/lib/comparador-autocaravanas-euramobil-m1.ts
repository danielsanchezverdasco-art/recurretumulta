// Autocaravanas Eura Mobil — lote Merlín 1 (18/10/2026).
// Datos verificados: euramobil.de (web oficial) + prensa especializada (outandaboutlive.co.uk,
// What Motorhome) y exposés de concesionarios oficiales alemanes con datos de fábrica.
// NOTA DE NOMENCLATURA: el «726 EB» no existe en la gama Integra Line GT (el EB es de la Profila T);
// el integral de camas gemelas oficial 2026 es el IL 726 EF, que es el que se ficha aquí.
// Eura Mobil no publica PVP de fábrica: precioDesde en null, sin inventar.
// Precios "desde" orientativos para España marcados en "aprox".
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_EURAMOBIL_M1: Autocaravana[] = [
  {
    id: "euramobil-integra-line-gt-il-726-ef-2026-precio-ficha-tecnica",
    marca: "Eura Mobil",
    modelo: "Integra Line GT IL 726 EF",
    tipo: "Autocaravana integral",
    categoria: "Autocaravana",
    precioDesde: null, // Eura Mobil no publica PVP de fábrica
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
    imagen: "/media/euramobil-integra-line-gt-il-726-ef-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/euramobil-integra-line-gt-il-726-ef-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/euramobil-integra-line-gt-il-726-ef-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7471,
    anchoMm: 2322,
    altoMm: 2980,
    pesoKg: null, // sin cifra única de fábrica; exposés de concesionarios: 3464–3620 kg según equipamiento
    mmaKg: 4500,
    carnetNecesario: "C1",
    cargaUtilKg: 1054, // especificación Reino Unido (What Motorhome); varía según equipamiento
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null, // no publicado por el fabricante
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["cargaUtilKg"],
    pros: [
      "Calefacción central de agua caliente Alde de serie: calor uniforme y silencioso, el sistema que montan las gamas altas",
      "Doble suelo calefactado de 30 cm: las instalaciones viajan protegidas del frío y suma almacenaje accesible",
      "Certificada para invierno según la norma EN 1646-2: homologada para usarse con temperaturas bajo cero",
      "Depósito de 150 l de agua limpia, aislado y calefactado: autonomía real fuera de temporada",
      "Chasis Mercedes Sprinter con cambio automático 9G-Tronic: refinamiento de turismo en una integral de 7,5 m",
    ],
    contras: [
      "MMA de 4.500 kg: exige carnet C1 y cambia peajes, ITV y limitaciones de circulación frente a una de 3.500 kg",
      "Sin PVP oficial de fábrica: los precios de concesionario bailan entre ~140.000 y ~177.000 €",
      "Masa en orden de marcha de hasta 3.620 kg según equipamiento: hay que vigilar qué extras se piden",
      "Con 7,47 m de largo y 2,98 m de alto, el acceso a pueblos y áreas pequeñas se complica",
      "El tercer y cuarto ocupante duermen en la cama delantera abatible: hay que recogerla cada mañana si se usa a diario",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 16.1,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 700,
      seguroAmpliadoAnual: 1300,
      mantenimientoAnual: 650,
      costeMensualTotal: 460,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~11,5 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/euramobil-integra-line-gt-il-726-ef-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Eura Mobil Integra Line GT IL 726 EF, vista frontal integral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/euramobil-integra-line-gt-il-726-ef-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Eura Mobil Integra Line GT IL 726 EF, salón cara a cara",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "euramobil-integra-line-gt-il-726-ef-2026-precio-ficha-tecnica",
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
          nombre: "Revisión célula Eura Mobil (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 700,
      fuente: "Plan de mantenimiento Mercedes-Benz Sprinter + recomendaciones Eura Mobil",
    },
    euroncap: null,
    fuenteNombre: "Eura Mobil (web oficial) + What Motorhome + outandaboutlive.co.uk",
    fuenteUrl: "https://www.euramobil.de/",
  },
];
