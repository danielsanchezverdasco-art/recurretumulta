// Autocaravanas Rimor — lote Merlín 1 (18/10/2026).
// Datos verificados: rimor.it (web oficial) + lista oficial de precios Rimor 2026-2027
// (PVP Alemania con IVA incluido, franco fábrica) + ficha de datos Rimor para Reino Unido.
// Precios "desde" orientativos para España marcados en "aprox".
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_RIMOR_M1: Autocaravana[] = [
  {
    id: "rimor-superbrig-687-tc-2026-precio-ficha-tecnica",
    marca: "Rimor",
    modelo: "SuperBrig 687 TC",
    tipo: "Autocaravana capuchina",
    categoria: "Autocaravana",
    precioDesde: 70840,
    potenciaCv: 130, // 165 CV opcional con cambio automático
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
    imagen: "/media/rimor-superbrig-687-tc-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/rimor-superbrig-687-tc-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/rimor-superbrig-687-tc-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6968,
    anchoMm: 2340,
    altoMm: 3080,
    pesoKg: 3018, // lista oficial alemana; ficha Reino Unido: 2944 kg (manual) / 2959 kg (automática)
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: 556, // 556 kg manual / 541 kg automática a 3.500 kg (ficha Reino Unido)
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null, // no publicado por el fabricante
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde", "cargaUtilKg"],
    pros: [
      "PVP oficial publicado de 70.840 €: de las capuchinas con precio de fábrica transparente",
      "Cama de capuchina más cama doble trasera: 4 plazas para dormir siempre hechas, sin transformar el salón",
      "Sistema MEB-300 Smart Energy con control por app: gestión eléctrica moderna de serie en la temporada 2026",
      "Techo Vetroskin de nueva construcción: el techo se renueva en esta temporada",
      "Base Ford Transit con 130 CV y opción de 165 CV con automática: hay alternativa potente para quien remolque",
    ],
    contras: [
      "Capuchina de 3,08 m de alto: el nicho delantero penaliza aerodinámica y consumo frente a una perfilada",
      "La cama de la capuchina se calienta en verano y se accede por escalera: no es para todos los públicos",
      "Masa en orden de marcha de 3.018 kg: con 4 personas y equipaje la carga útil se queda en torno a 480 kg",
      "La automática suma 1.685,83 € al PVP: el cambio que casi todos quieren no sale barato",
      "Depósitos de agua no publicados por el fabricante: imposible comparar su autonomía con la competencia",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 15.4,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 650,
      seguroAmpliadoAnual: 1200,
      mantenimientoAnual: 600,
      costeMensualTotal: 440,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~11 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/rimor-superbrig-687-tc-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Rimor SuperBrig 687 TC, vista tres cuartos con capuchina",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/rimor-superbrig-687-tc-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Rimor SuperBrig 687 TC, salón y cocina en L",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "rimor-superbrig-687-tc-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Ford Transit: revisión cada 2 años o 60.000 km (lo que ocurra antes, según plan Ford)",
      revisiones: [
        {
          nombre: "Revisión Ford Transit (2 años / 60.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de aire + filtro de gasóleo + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Rimor (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Ford Transit + recomendaciones Rimor",
    },
    euroncap: null,
    fuenteNombre: "Rimor (web oficial + lista oficial de precios 2026-2027)",
    fuenteUrl: "https://www.rimor.it/at/de/gamma/super-brig/modello/687-tc",
  },
];
