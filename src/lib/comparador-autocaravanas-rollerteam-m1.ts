// Autocaravanas Roller Team — lote Merlín 1 (18/10/2026).
// Datos verificados: caravanclub.co.uk (Motorhome Design Awards: 3.500 kg, 2.935 kg en orden de
// marcha, 6 plazas, Truma Combi 6E), bridgendleisurevehicles.co.uk (7,47/2,35/3,20 m),
// camplify.co.uk (chasis Ford Transit actual).
// Precio en España no verificado: precioDesde en null (no inventar).
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const AUTOCARAVANAS_ROLLERTEAM_M1: CocheComparador[] = [
  {
    id: "roller-team-auto-roller-746-2026-precio-ficha-tecnica",
    marca: "Roller Team",
    modelo: "Auto-Roller 746",
    tipo: "Autocaravana capuchina",
    categoria: "Autocaravana",
    precioDesde: null, // precio en España no verificado; no inventar
    potenciaCv: null, // motorización según mercado (Ford Transit actual); sin dato único verificado
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
    imagen: "/media/roller-team-auto-roller-746-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/roller-team-auto-roller-746-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/roller-team-auto-roller-746-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7470,
    anchoMm: 2350,
    altoMm: 3200,
    pesoKg: 2935, // masa en orden de marcha según Caravan Club
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 6,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Capuchina para 6 con salón trasero en U convertible: el estar más grande de su clase",
      "Cama de capuchina de 2,10 x 1,55 m + cama basculante: 6 plazas sin montar el salón",
      "2.935 kg en orden de marcha: ~565 kg de carga útil, de lo mejor entre las capuchinas",
      "Cocina central y baño central separan estar y dormir: intimidad con niños",
      "Roller Team (grupo Trigano): buena relación equipamiento/precio en capuchinas familiares",
    ],
    contras: [
      "7,47 m de largo y 3,20 m de alto: la más voluminosa del lote; consumo y peajes lo notan",
      "La capuchina penaliza la aerodinámica: en autopista gasta más que una perfilada",
      "Solo 5 cinturones para 6 plazas: el sexto viaja... no viaja; ojo al homologar plazas",
      "El salón trasero en U obliga a pasar por la cocina para ir al baño de noche",
      "Precio en España no publicado: comparar exige pedir oferta a varios concesionarios",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 15.3,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 700,
      seguroAmpliadoAnual: 1300,
      mantenimientoAnual: 650,
      costeMensualTotal: 460,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~11 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/roller-team-auto-roller-746-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Roller Team Auto-Roller 746, vista lateral con capuchina",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/roller-team-auto-roller-746-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Roller Team Auto-Roller 746, salón trasero en U",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "roller-team-auto-roller-746-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Ford Transit: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Ford)",
      revisiones: [
        {
          nombre: "Revisión Ford Transit (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Roller Team (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Ford Transit + recomendaciones Roller Team",
    },
    euroncap: null,
    fuenteNombre: "Caravan Club (Design Awards) + Bridgend Leisure + Camplify",
    fuenteUrl:
      "https://www.caravanclub.co.uk/whats-on/awards/motorhome-design-awards/Roller-Team/",
  },
];
