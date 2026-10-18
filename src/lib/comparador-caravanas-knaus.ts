// Caravanas Knaus — lote 4 (18/10/2026).
// Knaus Südwind 500 FU 2026.
// Datos: Knaus (web oficial, gama Südwind 2026) + anuncios de distribuidores
// oficiales del modelo (distribución FU: cama francesa delantera + salón
// trasero convertible, 4 plazas). Pesos y precio orientativos: marcados en
// "aprox" (dato no oficial · en revisión) hasta cotejar con la lista oficial
// Knaus 2026.
// Fotos: reales del modelo en concesionario (verificadas visualmente);
// NO son de prensa oficial (origen: anuncios de distribuidores).
import type { CocheComparador } from "./comparador-coches-data.ts";

export const CARAVANAS_KNAUS: CocheComparador[] = [
  {
    id: "knaus-suedwind-500-fu-2026-precio-ficha-tecnica",
    marca: "Knaus",
    modelo: "Südwind 500 FU",
    tipo: "Caravana",
    categoria: "Caravana",
    precioDesde: 34000,
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
      "/media/knaus-suedwind-500-fu-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/knaus-suedwind-500-fu-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/knaus-suedwind-500-fu-2026-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7300,
    anchoMm: 2320,
    altoMm: 2570,
    pesoKg: 1200,
    mmaKg: 1700,
    carnetNecesario: "B",
    cargaUtilKg: 500,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: [
      "precioDesde",
      "largoMm",
      "anchoMm",
      "altoMm",
      "pesoKg",
      "mmaKg",
      "cargaUtilKg",
    ],
    pros: [
      "La clásica familiar alemana: cama francesa delantera + salón trasero convertible",
      "7,30 m y un solo eje: manejable para una 4 plazas de este nivel",
      "1.700 kg de MMA (ampliable a 1.800 kg): carnet B con el coche adecuado",
      "Techo de GFK anti-granizo y 10 años de garantía de estanqueidad Knaus",
      "Cocina completa con horno y nevera grande: equipamiento de gama media-alta",
    ],
    contras: [
      "Precio orientativo (~34.000 €): confirmar en concesionario, sin PVP oficial publicado",
      "La cama francesa es justa para personas muy altas (198 x 138 cm)",
      "El salón trasero hay que montarlo cada noche para la 3.ª y 4.ª plaza",
      "7,30 m exigen experiencia remolcando y sitio donde guardarla",
      "El avance y el mover se presupuestan aparte",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 0,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 160,
      seguroAmpliadoAnual: 320,
      mantenimientoAnual: 200,
      costeMensualTotal: 130,
      notas:
        "Estimación: seguro de caravana + revisión anual de estanqueidad y gas. Sin motor propio.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/knaus-suedwind-500-fu-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Knaus Südwind 500 FU en campa de concesionario, vista delantera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/knaus-suedwind-500-fu-2026-precio-ficha-tecnica-interior-oficial.webp",
        alt: "Interior de la Knaus Südwind 500 FU, cocina",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/knaus-suedwind-500-fu-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Knaus Südwind 500 FU en exposición, vista trasera",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "knaus-suedwind-500-fu-2026-precio-ficha-tecnica",
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
      fuente: "Recomendaciones Knaus + red de distribuidores",
    },
    euroncap: null,
    fuenteNombre: "Knaus (web oficial) + red de distribuidores oficiales",
    fuenteUrl: "https://www.knaus.com/",
  },
];
