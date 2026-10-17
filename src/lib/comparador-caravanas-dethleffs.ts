// Caravanas Dethleffs — ficha 1 (lote caravanas 2D, 17/10/2026).
// Datos verificados: dethleffs.es (página oficial del modelo 560 FMK,
// precio oficial España en el JSON-LD de la página). Medidas oficiales:
// 818/250/282 cm. Hasta 6 plazas para dormir (oficial).
// Fotos: reales del modelo exacto (prueba ACSI FreeLife + anuncios de
// distribuidores), verificadas visualmente.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const CARAVANAS_DETHLEFFS: CocheComparador[] = [
  {
    id: "dethleffs-camper-560-fmk-2026-precio-ficha-tecnica",
    marca: "Dethleffs",
    modelo: "Camper 560 FMK",
    tipo: "Caravana",
    categoria: "Caravana",
    precioDesde: 36790,
    potenciaCv: null,
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: null,
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen:
      "/media/dethleffs-camper-560-fmk-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/dethleffs-camper-560-fmk-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/dethleffs-camper-560-fmk-2026-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 8180,
    anchoMm: 2500,
    altoMm: 2820,
    pesoKg: 2000,
    consumo: null,
    consumoUnidad: null,
    plazas: 6,
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: [],
    pros: [
      "La familiar más popular de la gama Camper: hasta 6 plazas para dormir con la tercera litera opcional",
      "Precio oficial publicado para España: 36.790 €",
      "2,50 m de anchura y 1,98 m de altura interior: la más amplia de su clase",
      "2.000 kg de MMA con un solo eje: carga útil generosa para 6 personas",
      "Calefacción Truma S 5004, nevera trivalente de 137 l y puerta de 65 cm con cierre Safelock de serie",
    ],
    contras: [
      "8,18 m totales y 2,50 m de ancho: exige experiencia remolcando y coche tractor grande",
      "Con 1.598 kg en orden de marcha, el carnet B se queda justo según el coche",
      "La tercera litera es opcional: de serie duermen 4",
      "2,50 m de ancho pagan peaje de categoría superior en algunas autopistas",
      "El avance y el mover se presupuestan aparte",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 0,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 150,
      seguroAmpliadoAnual: 300,
      mantenimientoAnual: 200,
      costeMensualTotal: 120,
      notas:
        "Estimación: seguro de caravana + revisión anual de estanqueidad y gas. Sin motor propio.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/dethleffs-camper-560-fmk-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Dethleffs Camper 560 FMK, vista trasera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/dethleffs-camper-560-fmk-2026-precio-ficha-tecnica-interior-oficial.webp",
        alt: "Interior oficial de la Dethleffs Camper 560 FMK",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/dethleffs-camper-560-fmk-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Dethleffs Camper 560 FMK, vista frontal",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "dethleffs-camper-560-fmk-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Revisión anual recomendada: estanqueidad, gas, electricidad y frenos",
      revisiones: [
        {
          nombre: "Revisión anual de la caravana",
          queSeCambia:
            "Estanqueidad, instalación de gas, electricidad y estado de frenos y neumáticos",
          costeAproxEur: 200,
        },
      ],
      costeAnualAproxEur: 200,
      fuente: "Recomendaciones Dethleffs + red de distribuidores",
    },
    euroncap: null,
    fuenteNombre: "Dethleffs España (datos y precio oficiales)",
    fuenteUrl: "https://www.dethleffs.es/caravanas/camper/560-fmk",
  },
];
