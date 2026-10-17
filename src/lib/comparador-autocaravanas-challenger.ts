// Autocaravanas Challenger — ficha 1 (lote caravanas 2A, 17/10/2026).
// Datos verificados: red de concesionarios Challenger (Cap Passion, Caraworld),
// prensa especializada. Precio: orientativo en Europa (Challenger no publica PVP
// oficial por modelo; marcado en "aprox").
// NOTA: el Challenger V 217 es una furgoneta camper (van) sobre Fiat Ducato,
// no una perfilada: se documenta el modelo real bajo el slug asignado.
// Fotos: reales del modelo exacto, verificadas visualmente.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const AUTOCARAVANAS_CHALLENGER: CocheComparador[] = [
  {
    id: "challenger-v-217-2026-precio-ficha-tecnica",
    marca: "Challenger",
    modelo: "V 217",
    tipo: "Furgoneta camper",
    categoria: "Autocaravana",
    precioDesde: 64990,
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
    imagen:
      "/media/challenger-v-217-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/challenger-v-217-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/challenger-v-217-2026-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6360,
    anchoMm: 2050,
    altoMm: 2650,
    pesoKg: 3500,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde"],
    pros: [
      "Furgoneta camper de 6,36 m: se aparca casi como un coche y pasa por parkings de 2,65 m",
      "Camas individuales traseras de 195/187x186 cm: dos camas siempre hechas, sin montar nada",
      "Fiat Ducato 2.2 de 140 CV (180 CV opcional): la mecánica más extendida y barata de mantener del sector",
      "Pack Connect y Pack Arctic disponibles: equipamiento de serie por encima de su precio",
      "Solo 2,05 m de ancho: maniobrable en pueblos, parkings y carreteras estrechas",
    ],
    contras: [
      "2 camas fijas de serie: para dormir 4 hay que convertir el salón lateral",
      "Baño compacto de furgoneta: la ducha es justa para personas altas",
      "Aislamiento térmico inferior al de una perfilada: peor comportamiento en invierno",
      "El precio orientativo (~65.000 €) compite con perfiladas básicas más espaciosas",
      "Maletero limitado: las camas gemelas ocupan toda la trasera",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 12.6,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 600,
      seguroAmpliadoAnual: 1100,
      mantenimientoAnual: 550,
      costeMensualTotal: 390,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~9,5 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/challenger-v-217-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Challenger V 217 Sport Edition, vista tres cuartos",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/challenger-v-217-2026-precio-ficha-tecnica-oficial-4.webp",
        alt: "Challenger V 217 Cross Edition, vista delantera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/challenger-v-217-2026-precio-ficha-tecnica-interior-oficial.webp",
        alt: "Interior del Challenger V 217, camas individuales traseras",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "challenger-v-217-2026-precio-ficha-tecnica",
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
          nombre: "Revisión célula Challenger (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 200,
        },
      ],
      costeAnualAproxEur: 550,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Challenger",
    },
    euroncap: null,
    fuenteNombre: "Challenger (red de concesionarios: Cap Passion, Caraworld)",
    fuenteUrl: "https://www.cap-passion.fr/annonce.php?id=386488",
  },
];
