// Caravanas Knaus — ficha 1 (lote caravanas 1, 17/10/2026).
// Datos verificados: red oficial Knaus (datos técnicos) + PVP de
// distribuidor oficial (marcado en "aprox").
// Fotos: reales del modelo exacto en concesionario (verificadas visualmente);
// NO son de prensa oficial: una llevaba marca de agua del concesionario y se ha
// eliminado. Sin foto interior disponible.
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
    imagenInteriorOficial: "/media/fotos-reales/knaus-sport-500-qdk-2026-precio-ficha-tecnica/knaus-sport-500-qdk-2026-precio-ficha-tecnica-int-1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7320,
    anchoMm: 2320,
    altoMm: 2570,
    pesoKg: 1166,
    mmaKg: 1600,
    carnetNecesario: "B",
    cargaUtilKg: 434,
    // MMA 1.800 kg; carnet B con el coche adecuado. Carga útil 634 kg.
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: ["precioDesde", "mmaKg", "cargaUtilKg"],
    pros: [
      "La familiar por excelencia: litera doble trasera y cama transversal delantera",
      "PVP desde unos 31.000 €: importe contenido para una familiar alemana de cuatro",
      "1.800 kg de PTMA en un solo eje con un peso disponible generoso",
      "Techo de GFK resistente al granizo y chapa de aluminio martilleado",
      "Frigorífico de 142 l y cocina de 3 fuegos: dotación seria incluida",
    ],
    contras: [
      "7,32 m totales: reclaman soltura al remolcar",
      "La litera es para niños o adultos no muy altos",
      "Terminaciones más sencillas que las de la Hobby De Luxe",
      "Sin mover eléctrico de serie: colocarla a mano se hace duro",
      "El avance se cotiza aparte",
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
      { src: "/media/fotos-reales/knaus-sport-500-qdk-2026-precio-ficha-tecnica/knaus-sport-500-qdk-2026-precio-ficha-tecnica-int-1.webp", alt: "Interior de la Knaus Sport 500 QDK, cocina y comedor", ancho: 768, alto: 1024 },
      { src: "/media/fotos-reales/knaus-sport-500-qdk-2026-precio-ficha-tecnica/knaus-sport-500-qdk-2026-precio-ficha-tecnica-int-2.webp", alt: "Interior de la Knaus Sport 500 QDK, dormitorio, comedor y cocina", ancho: 1270, alto: 850 },
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
    fuenteNombre: "Knaus (web oficial) | Pesos: Caraworld (expose Sport 500 QDK 2026: MMA 1.600 kg)",
    fuenteUrl: "https://www.caraworld.de/bilder/e/027/428/656/cw27428656-de-DE1-expose.pdf",
  },
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
    pesoKg: 1079,
    mmaKg: 1400,
    carnetNecesario: "B",
    cargaUtilKg: 321,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: ["precioDesde", "pesoKg", "mmaKg", "cargaUtilKg"],
    pros: [
      "La compacta familiar: 6,72 m con cama francesa y dinette para cuatro en poco espacio",
      "Importe orientativo desde unos 25.000 €: la alemana más asequible de su talla",
      "Apenas 1.056 kg de tara: la tira un SUV compacto y gasta menos",
      "1.800 kg de masa máxima con el aumento de carga: más de 700 kg de margen",
      "Techo de GFK anti-granizo y 10 años de cobertura anti-humedad",
    ],
    contras: [
      "6,72 m con cuatro ocupantes: el aseo y la zona de cocina quedan compactos",
      "La dinette trasera hay que armarla cada noche para la 3.ª y 4.ª plaza",
      "Importe orientativo: en España puede variar según el distribuidor",
      "Sin mover eléctrico, llevarla a mano cuesta",
      "El avance se presupuesta por separado",
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
      { src: "/media/fotos-reales/knaus-sport-450-fu-2026-precio-ficha-tecnica/knaus-sport-450-fu-2026-precio-ficha-tecnica-int-2.webp", alt: "Interior de la Knaus Sport 450 FU, cocina y comedor", ancho: 1920, alto: 1440 },
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
    fuenteNombre: "Knaus (red de distribuidores) | Pesos: Caraworld (expose Sport 450 FU 2026: MRO 1.079 kg, MMA 1.400 kg)",
    fuenteUrl: "https://www.caraworld.de/",
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
    pesoKg: 1312,
    mmaKg: 1700,
    carnetNecesario: "B96",
    cargaUtilKg: 388,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: ["precioDesde", "largoMm", "anchoMm", "altoMm", "pesoKg", "mmaKg", "cargaUtilKg"],
    pros: [
      "La clásica familiar alemana: cama francesa delantera y salón trasero abatible",
      "7,30 m en un solo eje: manejable para una 4 plazas de este nivel",
      "1.700 kg de MMA (ampliables a 1.800): el carné B vale con el coche adecuado",
      "Techo de GFK anti-granizo y 10 años de garantía de estanqueidad de Knaus",
      "Cocina completa con horno y frigorífico grande: equipamiento de gama media-alta",
    ],
    contras: [
      "Precio orientativo (unos 34.000 €): a confirmar en concesionario, sin PVP oficial publicado",
      "La cama francesa queda justa para personas muy altas (198 x 138 cm)",
      "El salón trasero hay que montarlo cada noche para la 3.ª y 4.ª plaza",
      "7,30 m exigen práctica al remolcar y dónde guardarla",
      "El avance y el mover se abonan por separado",
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
      { src: "/media/fotos-reales/knaus-suedwind-500-fu-2026-precio-ficha-tecnica/knaus-suedwind-500-fu-2026-precio-ficha-tecnica-int-2.webp", alt: "Interior de la Knaus Südwind 500 FU, cocina y comedor (Südwind 60 Years)", ancho: 1920, alto: 1440 },
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
    fuenteNombre: "Knaus (web oficial) + red de distribuidores oficiales | Pesos: TruckScout24 (anuncio unidad 2026: MRO 1.312 kg, MMA 1.700 kg)",
    fuenteUrl: "https://www.truckscout24.fr/",
  }
];
