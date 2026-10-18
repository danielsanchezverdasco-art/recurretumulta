// Autocaravanas Dethleffs — lote Merlín 1 (18/10/2026).
// Datos verificados: caravanguard.co.uk (factfile del modelo), truckscout24.si (ficha de unidad),
// dethleffs.co.uk (gama Trend actual).
// Precio en España no verificado: precioDesde en null (no inventar).
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const AUTOCARAVANAS_DETHLEFFS_M1: CocheComparador[] = [
  {
    id: "dethleffs-trend-t-6717-eb-2026-precio-ficha-tecnica",
    marca: "Dethleffs",
    modelo: "Trend T 6717 EB",
    tipo: "Autocaravana perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // precio en España no verificado; no inventar
    potenciaCv: null, // motorización según configuración; sin dato único verificado
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
    imagen: "/media/dethleffs-trend-t-6717-eb-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/dethleffs-trend-t-6717-eb-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/dethleffs-trend-t-6717-eb-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6960,
    anchoMm: 2330,
    altoMm: 2940,
    pesoKg: null, // masa en orden de marcha no publicada de forma única para esta versión
    mmaKg: 3499,
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
      "Perfilada de 6,96 m con camas gemelas traseras: la distribución más demandada en pareja",
      "Carrocería Lifetime-Smart sin madera y techo de GRP: 10 años de garantía antihumedad",
      "Garaje trasero alto con doble puerta y toma de 230 V: bicis y equipo bien guardados",
      "Paquete de asistentes completo (frenada de emergencia, ángulo muerto, crucero): viaja segura",
      "Colchones EvoPore de 150 mm y somieres ergonómicos: se duerme de verdad, no 'de camping'",
    ],
    contras: [
      "Sin cama fija delantera de serie: la cuarta plaza depende de la basculante opcional",
      "El salón cara a cara es justo para 4 comensales con las camas gemelas detrás",
      "Los packs (Chassis, Design, invierno) son casi obligatorios y encarecen mucho la factura",
      "MMA de 3.499 kg: con 4 ocupantes y el garaje lleno, la carga útil (~480 kg) se queda corta",
      "Precio en España no publicado: hay que pedir oferta a concesionario para comparar",
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
        src: "/media/dethleffs-trend-t-6717-eb-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Dethleffs Trend T 6717 EB, vista tres cuartos",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/dethleffs-trend-t-6717-eb-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Dethleffs Trend T 6717 EB, camas gemelas",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "dethleffs-trend-t-6717-eb-2026-precio-ficha-tecnica",
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
          nombre: "Revisión célula Dethleffs (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Dethleffs",
    },
    euroncap: null,
    fuenteNombre: "Dethleffs (gama Trend) + CaravanGuard + TruckScout24",
    fuenteUrl: "https://www.dethleffs.co.uk/motorhomes/trend-active",
  },
];
