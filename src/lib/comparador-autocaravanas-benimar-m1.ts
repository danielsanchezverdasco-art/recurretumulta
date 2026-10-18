// Autocaravanas Benimar — lote Merlín 1 (18/10/2026).
// Datos verificados: benimar.es (web oficial; Benimar no publica PVP: precioDesde en null),
// dinmoreleisure.co.uk y outandaboutlive.co.uk (fichas técnicas del modelo).
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const AUTOCARAVANAS_BENIMAR_M1: CocheComparador[] = [
  {
    id: "benimar-mileo-243-2026-precio-ficha-tecnica",
    marca: "Benimar",
    modelo: "Mileo 243",
    tipo: "Autocaravana perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Benimar no publica PVP oficial; no inventar
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
    imagen: "/media/benimar-mileo-243-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/benimar-mileo-243-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/benimar-mileo-243-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6990,
    anchoMm: 2300,
    altoMm: 2890,
    pesoKg: null, // masa en orden de marcha no publicada por Benimar para esta versión
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Perfilada de 6,99 m sobre Fiat Ducato 2.2 de 140 CV: mecánica probada y barata de mantener",
      "Solo 2,89 m de alto: de las perfiladas más bajas y aerodinámicas de su tamaño",
      "Cama basculante eléctrica sobre el salón + cama trasera: 4 plazas sin capuchina",
      "Benimar fabrica en España: red de servicio y recambios en todo el país",
      "Garaje trasero amplio con doble acceso: cabe el equipo deportivo sin desmontar",
    ],
    contras: [
      "Benimar no publica precio oficial: imposible comparar sin pedir oferta a cada concesionario",
      "La cama basculante obliga a recoger el salón cada noche si viajan 4",
      "Con 6,99 m de largo, aparcar en ciudad o en pueblos pequeños es complicado",
      "El motor de 140 CV va justo con la autocaravana cargada a tope y puerto de montaña",
      "MMA de 3.500 kg: con 4 ocupantes y equipaje, hay que vigilar la carga útil",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 13.5,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 650,
      seguroAmpliadoAnual: 1200,
      mantenimientoAnual: 600,
      costeMensualTotal: 420,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~10 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/benimar-mileo-243-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Benimar Mileo 243, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/benimar-mileo-243-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Benimar Mileo 243, salón delantero",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "benimar-mileo-243-2026-precio-ficha-tecnica",
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
          nombre: "Revisión célula Benimar (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Benimar",
    },
    euroncap: null,
    fuenteNombre: "Benimar (web oficial) + Dinmore Leisure + Out & About Live",
    fuenteUrl: "https://www.benimar.es/en/low-profile-motorhomes/",
  },
];
