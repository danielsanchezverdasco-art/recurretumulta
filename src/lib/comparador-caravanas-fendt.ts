// Caravanas Fendt — ficha 1 (lote caravanas 2D, 17/10/2026).
// NOTA: el modelo "Bianco Activ 515 SD" no existe en la gama oficial Fendt
// (verificado en fendt-caravan.com: la gama Activ 515 ofrece SGD, SGE y SKF).
// Se ficha el modelo real equivalente: Bianco Activ 550 SD (2026).
// Datos verificados: exposés de distribuidores oficiales Fendt (medidas,
// pesos y equipamiento del modelo 2026) + página oficial Bianco.
// Fotos: reales del modelo exacto, verificadas visualmente.
// Caravanas Fendt — lote-2 G4 (19/10/2026).
// Datos oficiales de fendt-caravan.com (páginas de modelo, precios base Alemania
// en JSON-LD): Bianco Activ 560 SKM (7.720/2.500/2.660 mm, 1.495 kg, MMA 1.800,
// 5 plazas, 36.090 €), Bianco Activ 465 SGE (7.030/2.320/2.660, 1.326 kg,
// MMA 1.600, 2 plazas, 30.870 €), Tendenza 560 SFDW (7.720/2.500/2.660,
// 1.545 kg, MMA 1.800, 4 plazas, ALDE de serie, 44.470 €) y Diamant 650 GDW
// (8.600/2.500/2.650, 1.900 kg, MMA 2.200, doble eje, 4 plazas, 59.370 €).
// Carga útil ("Load approx.") publicada por la marca → incluida.
// Fotos: reales del modelo exacto, verificadas visualmente (prensa: CamperStyle
// en la Tendenza; resto, fotos de distribuidores del modelo exacto, no oficiales).
// Caravanas Fendt — lote 4 (18/10/2026).
// Fendt Bianco Selection 515 SG 2026.
// Datos verificados: Fendt-Caravan (web oficial: 751 cm, 232 cm, 4 plazas,
// camas individuales, línea Selection, Truma S 3004/S 5004, Slim-Tower).
// Pesos y precio orientativos de la red de distribuidores: marcados en
// "aprox" (dato no oficial · en revisión).
// Fotos: oficiales de prensa Fendt-Caravan (gama Bianco; la foto de camas
// individuales corresponde a la distribución de camas separadas de la 515).
import type { CocheComparador } from "./comparador-coches-data.ts";

export const CARAVANAS_FENDT: CocheComparador[] = [
  {
    id: "fendt-bianco-activ-550-sd-2026-precio-ficha-tecnica",
    marca: "Fendt",
    modelo: "Bianco Activ 550 SD",
    tipo: "Caravana",
    categoria: "Caravana",
    precioDesde: 32500,
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
      "/media/fendt-bianco-activ-550-sd-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/fendt-bianco-activ-550-sd-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/fendt-bianco-activ-550-sd-2026-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7720,
    anchoMm: 2320,
    altoMm: 2660,
    pesoKg: 2000,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: ["precioDesde"],
    pros: [
      "El premium alemán de verdad: calidad de construcción Fendt, la referencia del segmento",
      "Ducha separada + baño trasero completo: el mejor cuarto de baño de su tamaño",
      "Cama francesa de 140x210 + cama trasera de 140x200: 4 plazas cómodas de verdad",
      "Calefacción Truma Combi 6 y nevera de 157 l de serie: lista para todo el año",
      "1.700 kg de serie ampliables a 2.000 kg: carga útil de sobra",
    ],
    contras: [
      "Precio orientativo desde ~32.500 €: de las más caras de su tamaño",
      "7,72 m totales: no es para remolcar por primera vez",
      "Con 1.500 kg en orden de marcha necesita un SUV o berlina grande",
      "Los extras (llantas, toldo, mover) disparan el precio final",
      "El blanco liso exige limpieza frecuente para lucir",
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
        src: "/media/fendt-bianco-activ-550-sd-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Fendt Bianco Activ 550 SD, vista frontal",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/fendt-bianco-activ-550-sd-2026-precio-ficha-tecnica-interior-oficial.webp",
        alt: "Interior oficial de la Fendt Bianco Activ 550 SD",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/fendt-bianco-activ-550-sd-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Fendt Bianco Activ 550 SD, vista lateral",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "fendt-bianco-activ-550-sd-2026-precio-ficha-tecnica",
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
      fuente: "Recomendaciones Fendt + red de distribuidores",
    },
    euroncap: null,
    fuenteNombre: "Fendt-Caravan (oficial) + red de distribuidores",
    fuenteUrl:
      "https://www.fendt-caravan.com/en/bianco.html?caravan360=465+SGE&cHash=48e88ce43a18ba84b2662f7674a73077",
  },
  {
    id: "fendt-bianco-activ-560-skm-2026-precio-ficha-tecnica",
    marca: "Fendt",
    modelo: "Bianco Activ 560 SKM",
    tipo: "Caravana",
    categoria: "Caravana",
    precioDesde: 36090,
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
      "/media/fendt-bianco-activ-560-skm-2026-precio-ficha-tecnica.webp",
    imagenOficial:
      "/media/fendt-bianco-activ-560-skm-2026-precio-ficha-tecnica.webp",
    imagenInteriorOficial:
      "/media/fendt-bianco-activ-560-skm-2026-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7720,
    anchoMm: 2500,
    altoMm: 2660,
    pesoKg: 1495,
    mmaKg: 1800,
    carnetNecesario: "B",
    cargaUtilKg: 305,
    consumo: null,
    consumoUnidad: null,
    plazas: 5,
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: [],
    pros: [
      "5 plazas reales: cama doble delantera, salón en U convertible y dos literas traseras",
      "Carnet B con la mayoría de turismos: 1.800 kg de MMA entran en el conjunto de 3.500 kg",
      "Carga útil oficial de 305 kg: de las mejores de su tamaño",
      "2,50 m de ancho con solo 1.495 kg en orden de marcha: espacio sin engordar el peso",
      "Precio oficial desde 36.090 €: la familiar de 5 plazas más equilibrada de Fendt",
    ],
    contras: [
      "Con 7,72 m totales, aparcar y maniobrar exige práctica y un buen coche tractor",
      "Las literas traseras tienen el techo bajo: son para niños o adolescentes",
      "La cama doble delantera es de 142x200: justa para parejas altas",
      "El equipamiento opcional (mover, aire acondicionado) sube rápido la factura",
      "Con el coche cargado al límite, ojo con no superar los 3.500 kg del conjunto",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/fendt-bianco-activ-560-skm-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Fendt Bianco Activ 560 SKM, vista frontal",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/fendt-bianco-activ-560-skm-2026-precio-ficha-tecnica-oficial-3.webp",
        alt: "Fendt Bianco Activ 560 SKM, vista trasera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/fendt-bianco-activ-560-skm-2026-precio-ficha-tecnica.webp",
        alt: "Fendt Bianco Activ 560 SKM, vista lateral",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug:
      "fendt-bianco-activ-560-skm-2026-precio-ficha-tecnica-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Revisión anual recomendada: estanqueidad, gas, electricidad, frenos y neumáticos",
      revisiones: [
        {
          nombre: "Revisión anual de la caravana",
          queSeCambia:
            "Estanqueidad, instalación de gas, electricidad, frenos y neumáticos",
          costeAproxEur: 200,
        },
      ],
      costeAnualAproxEur: 200,
      fuente: "Recomendaciones Fendt + red de distribuidores",
    },
    euroncap: null,
    fuenteNombre: "Fendt (web oficial, precio base Alemania)",
    fuenteUrl: "https://www.fendt-caravan.com/en/bianco/activ-560-skm.html",
  },
  {
    id: "fendt-bianco-activ-465-sge-2026-precio-ficha-tecnica",
    marca: "Fendt",
    modelo: "Bianco Activ 465 SGE",
    tipo: "Caravana",
    categoria: "Caravana",
    precioDesde: 30870,
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
      "/media/fendt-bianco-activ-465-sge-2026-precio-ficha-tecnica.webp",
    imagenOficial:
      "/media/fendt-bianco-activ-465-sge-2026-precio-ficha-tecnica.webp",
    imagenInteriorOficial:
      "/media/fendt-bianco-activ-465-sge-2026-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7030,
    anchoMm: 2320,
    altoMm: 2660,
    pesoKg: 1326,
    mmaKg: 1600,
    carnetNecesario: "B",
    cargaUtilKg: 274,
    consumo: null,
    consumoUnidad: null,
    plazas: 2,
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Pensada para parejas: dos camas individuales de 85x200 cm que no hay que deshacer",
      "Solo 1.326 kg en orden de marcha: la remolca casi cualquier turismo medio",
      "Carnet B sin problemas: 1.600 kg de MMA con margen de sobra en el conjunto",
      "7,03 m totales: se aparca y maniobra mucho mejor que las de 7,5 m",
      "Precio oficial desde 30.870 €: la Bianco Activ más accesible con camas separadas",
    ],
    contras: [
      "Solo 2 plazas: ni una tercera plaza ocasional sin convertir el salón",
      "2,32 m de ancho: algo más estrecha que las grandes de 2,50 m",
      "Cocina compacta para estancias largas de dos personas",
      "Sin baño separado con ducha fija: aseo compacto",
      "Las camas de 85 cm son estrechas para quien duerme muy movido",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/fendt-bianco-activ-465-sge-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Fendt Bianco Activ 465 SGE, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/fendt-bianco-activ-465-sge-2026-precio-ficha-tecnica-oficial-3.webp",
        alt: "Fendt Bianco Activ 465 SGE, vista trasera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/fendt-bianco-activ-465-sge-2026-precio-ficha-tecnica.webp",
        alt: "Fendt Bianco Activ 465 SGE, vista trasera lateral",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug:
      "fendt-bianco-activ-465-sge-2026-precio-ficha-tecnica-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Revisión anual recomendada: estanqueidad, gas, electricidad, frenos y neumáticos",
      revisiones: [
        {
          nombre: "Revisión anual de la caravana",
          queSeCambia:
            "Estanqueidad, instalación de gas, electricidad, frenos y neumáticos",
          costeAproxEur: 200,
        },
      ],
      costeAnualAproxEur: 200,
      fuente: "Recomendaciones Fendt + red de distribuidores",
    },
    euroncap: null,
    fuenteNombre: "Fendt (web oficial, precio base Alemania)",
    fuenteUrl: "https://www.fendt-caravan.com/en/bianco/activ-465-sge.html",
  },
  {
    id: "fendt-tendenza-560-sfdw-2026-precio-ficha-tecnica",
    marca: "Fendt",
    modelo: "Tendenza 560 SFDW",
    tipo: "Caravana",
    categoria: "Caravana",
    precioDesde: 44470,
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
      "/media/fendt-tendenza-560-sfdw-2026-precio-ficha-tecnica.webp",
    imagenOficial:
      "/media/fendt-tendenza-560-sfdw-2026-precio-ficha-tecnica.webp",
    imagenInteriorOficial:
      "/media/fendt-tendenza-560-sfdw-2026-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7720,
    anchoMm: 2500,
    altoMm: 2660,
    pesoKg: 1545,
    mmaKg: 1800,
    carnetNecesario: "B",
    cargaUtilKg: 255,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Calefacción por agua caliente ALDE de serie: la única de su precio con este equipamiento",
      "Cama francesa trasera de 150x190 y salón delantero convertible: 4 plazas cómodas",
      "2,50 m de ancho y 1,98 m de altura interior: sensación de apartamento",
      "Chasis AL-KO con estabilizador AKS 3004 y homologación para 100 km/h",
      "Carnet B: 1.800 kg de MMA con un turismo medio no supera los 3.500 kg del conjunto",
    ],
    contras: [
      "44.470 € de partida: entra en el segmento premium por precio",
      "Carga útil oficial de 255 kg: justa si se carga para todo el año",
      "7,72 m y 2,50 m de ancho: en carreteras estrechas se hace notar",
      "El sistema ALDE encarece el mantenimiento frente a la calefacción por aire",
      "Con equipamiento opcional el MMA de 1.800 kg se queda corto: conviene la ampliación a 2.000 kg",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/fendt-tendenza-560-sfdw-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Fendt Tendenza 560 SFDW, vista frontal",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/fendt-tendenza-560-sfdw-2026-precio-ficha-tecnica-oficial-3.webp",
        alt: "Fendt Tendenza 560 SFDW, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/fendt-tendenza-560-sfdw-2026-precio-ficha-tecnica.webp",
        alt: "Fendt Tendenza 560 SFDW, vista delantera (prensa)",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug:
      "fendt-tendenza-560-sfdw-2026-precio-ficha-tecnica-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Revisión anual recomendada: estanqueidad, gas, electricidad, frenos, neumáticos y circuito ALDE",
      revisiones: [
        {
          nombre: "Revisión anual de la caravana",
          queSeCambia:
            "Estanqueidad, instalación de gas, electricidad, frenos, neumáticos y revisión del circuito de agua caliente ALDE",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 250,
      fuente: "Recomendaciones Fendt + red de distribuidores",
    },
    euroncap: null,
    fuenteNombre: "Fendt (web oficial, precio base Alemania)",
    fuenteUrl: "https://www.fendt-caravan.com/en/tendenza/560-sfdw.html",
  },
  {
    id: "fendt-diamant-650-gdw-2026-precio-ficha-tecnica",
    marca: "Fendt",
    modelo: "Diamant 650 GDW",
    tipo: "Caravana",
    categoria: "Caravana",
    precioDesde: 59370,
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
      "/media/fendt-diamant-650-gdw-2026-precio-ficha-tecnica.webp",
    imagenOficial:
      "/media/fendt-diamant-650-gdw-2026-precio-ficha-tecnica.webp",
    imagenInteriorOficial:
      "/media/fendt-diamant-650-gdw-2026-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 8600,
    anchoMm: 2500,
    altoMm: 2650,
    pesoKg: 1900,
    mmaKg: 2200,
    carnetNecesario: "B96",
    cargaUtilKg: 300,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: [],
    pros: [
      "El buque insignia de Fendt: doble eje, 8,60 m y acabados de autocaravana premium",
      "Calefacción por agua caliente ALDE y techo panorámico Skylight de serie",
      "MMA de 2.200 kg ampliable hasta 2.800 kg: margen de carga para viajar equipado",
      "Carga útil oficial de 300 kg con la ampliación disponible",
      "Estabilidad de marcha del doble eje: la más aplomada de la gama en autopista",
    ],
    contras: [
      "Carnet B96 o B+E: con 2.200 kg de MMA el B normal no basta",
      "59.370 € de partida: precio de autocaravana para una caravana",
      "1.900 kg en orden de marcha: exige un coche tractor potente (SUV o berlina grande)",
      "8,60 m totales: ni campings pequeños ni parcelas justas",
      "El consumo del conjunto se dispara: hay que contar con 4-5 l/100 km extra",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/fendt-diamant-650-gdw-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Fendt Diamant 650 GDW, vista frontal",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/fendt-diamant-650-gdw-2026-precio-ficha-tecnica-interior-oficial.webp",
        alt: "Interior de la Fendt Diamant 650 GDW",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/fendt-diamant-650-gdw-2026-precio-ficha-tecnica.webp",
        alt: "Fendt Diamant 650 GDW, vista trasera",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug:
      "fendt-diamant-650-gdw-2026-precio-ficha-tecnica-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Revisión anual recomendada: estanqueidad, gas, electricidad, frenos (doble eje), neumáticos y circuito ALDE",
      revisiones: [
        {
          nombre: "Revisión anual de la caravana",
          queSeCambia:
            "Estanqueidad, instalación de gas, electricidad, frenos de los dos ejes, neumáticos y revisión del circuito de agua caliente ALDE",
          costeAproxEur: 300,
        },
      ],
      costeAnualAproxEur: 300,
      fuente: "Recomendaciones Fendt + red de distribuidores",
    },
    euroncap: null,
    fuenteNombre: "Fendt (web oficial, precio base Alemania)",
    fuenteUrl: "https://www.fendt-caravan.com/en/diamant/650-gdw.html",
  },
  {
    id: "fendt-bianco-selection-515-sg-2026-precio-ficha-tecnica",
    marca: "Fendt",
    modelo: "Bianco Selection 515 SG",
    tipo: "Caravana",
    categoria: "Caravana",
    precioDesde: 32000,
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
      "/media/fendt-bianco-selection-515-sg-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/fendt-bianco-selection-515-sg-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/fendt-bianco-selection-515-sg-2026-precio-ficha-tecnica-oficial-2.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7510,
    anchoMm: 2320,
    altoMm: 2570,
    pesoKg: 1420,
    mmaKg: 1700,
    carnetNecesario: "B",
    cargaUtilKg: 280,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: ["precioDesde", "altoMm", "pesoKg", "cargaUtilKg"],
    pros: [
      "Camas individuales: el dormitorio más cómodo y demandado del segmento",
      "7,51 m con 4 plazas reales: salón convertible + camas fijas",
      "Línea Selection: la Fendt más equilibrada en precio-equipamiento",
      "Nevera Slim-Tower y cocina de 3 fuegos con fregadero de acero",
      "1.700 kg de MMA: carnet B con un SUV medio",
    ],
    contras: [
      "Precio orientativo (~32.000 €): Fendt no publica PVP por modelo en España",
      "Las camas individuales restan salón frente a una cama francesa",
      "7,51 m exigen experiencia remolcando",
      "El equipamiento Activ (Truma Combi) se paga aparte",
      "Peso en vacío contenido pero carga útil justa si se equipa mucho",
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
        src: "/media/fendt-bianco-selection-515-sg-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Camas individuales de la Fendt Bianco Selection 515 SG, foto oficial",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/fendt-bianco-selection-515-sg-2026-precio-ficha-tecnica-oficial-3.webp",
        alt: "Cocina de la Fendt Bianco Selection 515 SG, foto oficial",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/fendt-bianco-selection-515-sg-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Salón de la Fendt Bianco Selection 515 SG, foto oficial",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "fendt-bianco-selection-515-sg-2026-precio-ficha-tecnica",
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
      fuente: "Recomendaciones Fendt-Caravan + red de distribuidores",
    },
    euroncap: null,
    fuenteNombre: "Fendt-Caravan (web oficial)",
    fuenteUrl: "https://www.fendt-caravan.com/en/bianco.html",
  }
];
