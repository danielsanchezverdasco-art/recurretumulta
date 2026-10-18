// Caravanas Fendt — ficha 1 (lote caravanas 2D, 17/10/2026).
// NOTA: el modelo "Bianco Activ 515 SD" no existe en la gama oficial Fendt
// (verificado en fendt-caravan.com: la gama Activ 515 ofrece SGD, SGE y SKF).
// Se ficha el modelo real equivalente: Bianco Activ 550 SD (2026).
// Fuente oficial: página oficial Fendt-Caravan de la gama Bianco — confirma
// el Activ 550 SD (ducha separada, Slim-Tower, baño trasero, cama francesa,
// 4 plazas, 772/232 cm): https://www.fendt-caravan.com/en/bianco.html
// Medidas/pesos detallados (266 cm de alto, 1.505 kg en orden de marcha,
// 1.700 kg de MMA de serie con ampliación opcional a 2.000 kg) y precio
// orientativo (~32.500 €) proceden de exposés de distribuidores oficiales
// (la URL anterior a cdn.caraworld.com se ha eliminado: dominio no admitido).
// Fendt no publica PVP oficial por modelo: altoMm, pesoKg, mmaKg, cargaUtilKg
// y precioDesde quedan en "aprox" como «dato no oficial · en revisión».
// Fotos: reales del modelo exacto, verificadas visualmente; son fotos de
// distribuidor (no prensa del fabricante).
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
    imagen: "/media/fendt-bianco-activ-550-sd-2026-precio-ficha-tecnica.webp",
    imagenOficial:
      "/media/fendt-bianco-activ-550-sd-2026-precio-ficha-tecnica.webp",
    imagenInteriorOficial:
      "/media/fendt-bianco-activ-550-sd-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7720,
    anchoMm: 2320,
    altoMm: 2660,
    pesoKg: 1500,
    mmaKg: 1700,
    carnetNecesario: "B96",
    cargaUtilKg: 200,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: ["precioDesde", "altoMm", "pesoKg", "mmaKg", "cargaUtilKg"],
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
        src: "/media/fendt-bianco-activ-550-sd-2026-precio-ficha-tecnica-2.webp",
        alt: "Fendt Bianco Activ 550 SD, vista frontal (foto de distribuidor)",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/fendt-bianco-activ-550-sd-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Fendt Bianco Activ 550 SD (foto de distribuidor)",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/fendt-bianco-activ-550-sd-2026-precio-ficha-tecnica.webp",
        alt: "Fendt Bianco Activ 550 SD, vista lateral (foto de distribuidor)",
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
    fuenteNombre: "Fendt-Caravan (página oficial de la gama Bianco)",
    fuenteUrl: "https://www.fendt-caravan.com/en/bianco.html",
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
    carnetNecesario: "B96",
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
      "1.700 kg de MMA: carnet B96 con un SUV medio (2.200-2.500 kg de MMA del coche)",
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
  },
];
