// Autocaravanas Rapido — ficha 1 (lote caravanas 2B, 17/10/2026).
// Datos verificados: Rapido (web oficial), blog Ypocamp (ficha técnica
// 666F edición 65 años: 7,49 m, 140 CV, 76.500 €) y anuncio de
// distribuidor (2.910 kg en vacío, 3.500 kg MMA). Precio orientativo
// (Rapido no publica PVP oficial en España; marcado en "aprox").
// Fotos: reales del modelo exacto, verificadas visualmente.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const AUTOCARAVANAS_RAPIDO: CocheComparador[] = [
  {
    id: "rapido-666f-2026-precio-ficha-tecnica",
    marca: "Rapido",
    modelo: "666F",
    tipo: "Autocaravana perfilada",
    categoria: "Autocaravana",
    precioDesde: 76500,
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
    imagen: "/media/rapido-666f-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/rapido-666f-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/rapido-666f-2026-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7490,
    anchoMm: 2350,
    altoMm: 2900,
    pesoKg: 2910,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde"],
    pros: [
      "Camas gemelas traseras sobre garaje de doble acceso: la distribución rutera perfecta",
      "Techo panorámico SKYVIEW de serie: luminosidad única en su segmento",
      "Carrocería 100 % poliéster antichoque con aislamiento Styrofoam",
      "Calefacción Truma Combi 4 con mandos CP Plus y garaje calefactado",
      "Marca francesa premium con acabados por encima de las generalistas",
    ],
    contras: [
      "Precio orientativo alto: la edición 65 años parte de 76.500 €",
      "4 plazas justas: la cama abatible opcional es casi obligatoria para familias",
      "Con 7,49 m no es la más ágil en pueblos y áreas pequeñas",
      "Red de servicio Rapido en España limitada frente a Benimar o Adria",
      "El motor de 140 CV pide el automático (opcional) para viajar cómodo",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 14,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 700,
      seguroAmpliadoAnual: 1300,
      mantenimientoAnual: 600,
      costeMensualTotal: 450,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~10,5 l/100 km de gasóleo y seguro a todo riesgo.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/rapido-666f-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Rapido 666F edición 65 años, vista tres cuartos",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/rapido-666f-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Rapido 666F, perfilada sobre Fiat Ducato",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/rapido-666f-2026-precio-ficha-tecnica-interior-oficial.webp",
        alt: "Interior del Rapido 666F, salón con techo SKYVIEW",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "rapido-666f-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato: revisión cada 2 años o 48.000 km según plan Fiat Professional",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 48.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 380,
        },
        {
          nombre: "Revisión célula Rapido (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 620,
      fuente: "Plan de mantenimiento Fiat Professional + recomendaciones Rapido",
    },
    euroncap: null,
    fuenteNombre: "Rapido (oficial) + Ypocamp",
    fuenteUrl:
      "https://blog.ypocamp.fr/achat/quel-camping-car-profile-choisir-en-2026",
  },
];
