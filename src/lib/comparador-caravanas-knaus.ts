// Caravanas Knaus — ficha 1 (lote caravanas 1, 17/10/2026).
// Datos verificados: red oficial Knaus (datos técnicos) + PVP de
// distribuidor oficial (marcado en "aprox").
// Fotos: reales del modelo exacto en concesionario (verificadas visualmente);
// NO son de prensa oficial: una llevaba marca de agua del concesionario y se ha
// eliminado. Sin foto interior disponible.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const CARAVANAS_KNAUS: CocheComparador[] = [
  {
    id: "knaus-sport-500-qdk-2026-precio-ficha-tecnica",
    marca: "Knaus",
    modelo: "Sport 500 QDK",
    tipo: "Caravana",
    categoria: "Caravana",
    precioDesde: 31000,
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
    imagen: "/media/knaus-sport-500-qdk-2026.webp",
    imagenOficial: "/media/knaus-sport-500-qdk-2026.webp",
    imagenInteriorOficial: "",
    videoId: null,
    videoCanal: null,
    largoMm: 7320,
    anchoMm: 2320,
    altoMm: 2570,
    pesoKg: 1166,
    // MMA 1.800 kg; carnet B con el coche adecuado. Carga útil 634 kg.
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: ["precioDesde"],
    pros: [
      "La familiar por excelencia: litera doble trasera + cama transversal delantera",
      "PVP desde ~31.000 €: precio contenido para una familiar alemana de 4 plazas",
      "1.800 kg de MMA con un solo eje y gran carga útil",
      "Techo de GFK resistente al granizo y chapa de aluminio martilleado",
      "Nevera de 142 L y cocina de 3 fuegos: equipamiento serio de serie",
    ],
    contras: [
      "7,32 m totales: exige experiencia remolcando",
      "La litera es para niños o adultos no muy altos",
      "Acabados más sencillos que la Hobby De Luxe",
      "Sin mover eléctrico de serie: maniobrar a mano es duro",
      "El avance se presupuesta aparte",
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
        src: "/media/knaus-sport-500-qdk-2026-2.webp",
        alt: "Knaus Sport 500 QDK en campa de concesionario, vista trasera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/knaus-sport-500-qdk-2026-3.webp",
        alt: "Knaus Sport 500 QDK en exposición de concesionario, vista lateral",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "knaus-sport-500-qdk-2026-precio-ficha-tecnica",
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
    fuenteNombre: "Knaus (web oficial)",
    fuenteUrl: "https://www.knaus.com/en/caravans/sport",
  },
  // Caravana 2 (lote caravanas 2D, 17/10/2026).
  // Datos verificados: anuncios de distribuidores oficiales Knaus del modelo
  // 2026 (6.720/2.320/2.570 mm, 1.056 kg en vacío, MMA 1.800 kg con
  // Auflastung, 4 plazas: cama francesa delantera + dinette trasera).
  // Precio orientativo según anuncios de distribuidores (25.040–27.377 €).
  // Fotos: reales del modelo exacto, verificadas visualmente.,
  {
    id: "knaus-sport-450-fu-2026-precio-ficha-tecnica",
    marca: "Knaus",
    modelo: "Sport 450 FU",
    tipo: "Caravana",
    categoria: "Caravana",
    precioDesde: 25000,
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
      "/media/knaus-sport-450-fu-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/knaus-sport-450-fu-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/knaus-sport-450-fu-2026-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6720,
    anchoMm: 2320,
    altoMm: 2570,
    pesoKg: 1800,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: ["precioDesde"],
    pros: [
      "La compacta familiar: 6,72 m con cama francesa y dinette para 4 en poco espacio",
      "Precio orientativo desde ~25.000 €: la alemana más asequible de su tamaño",
      "Solo 1.056 kg en vacío: la remolca un SUV compacto y gasta menos",
      "1.800 kg de MMA con el aumento de carga: más de 700 kg de carga útil",
      "Techo de GFK anti-granizo y 10 años de garantía de estanqueidad",
    ],
    contras: [
      "6,72 m con 4 plazas: el baño y la cocina son compactos",
      "La dinette trasera hay que montarla cada noche para la 3.ª y 4.ª plaza",
      "Precio orientativo: en España puede variar según el distribuidor",
      "Sin mover eléctrico, maniobrarla a mano cuesta",
      "El avance se presupuesta aparte",
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
        src: "/media/knaus-sport-450-fu-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Knaus Sport 450 FU, vista frontal",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/knaus-sport-450-fu-2026-precio-ficha-tecnica-interior-oficial.webp",
        alt: "Interior oficial de la Knaus Sport 450 FU",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/knaus-sport-450-fu-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Knaus Sport 450 FU, vista lateral",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "knaus-sport-450-fu-2026-precio-ficha-tecnica",
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
    fuenteNombre: "Knaus (red de distribuidores)",
    fuenteUrl:
      "https://www.careiwo.de/fahrzeug/knaus-sport-450-fu-1800kgduschausbau-6v6dzt/",
  },

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
