// Caravanas Adria — fichas 1 y 2 (lote caravanas 2B, 17/10/2026).
// Datos verificados: Adria Mobil (datos técnicos oficiales), red de
// distribuidores oficiales (medidas, pesos y precios de lista).
// Precios orientativos (Adria no publica PVP oficial en España;
// marcados en "aprox"). Las caravanas no llevan etiqueta DGT.
// Fotos: reales del modelo exacto, verificadas visualmente.
// Caravanas Adria — lote 4 (18/10/2026).
// Adria Altea 542 PK 2026.
// Datos verificados: representante oficial Adria (MMA 1.500 kg,
// 7.434 mm, 6 plazas, 23.000 € + IVA) + catálogo oficial Adria
// (carrocería 6.120 mm, 2.296 mm, 6+1 plazas). Peso en vacío y carga útil
// orientativos: marcados en "aprox" (dato no oficial · en revisión).
// Fotos: 1 real del modelo en concesionario + 2 oficiales de prensa Adria
// (gama Altea); las oficiales se marcan como tales.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const CARAVANAS_ADRIA: CocheComparador[] = [
  {
    id: "adria-aviva-522-pt-2026-precio-ficha-tecnica",
    marca: "Adria",
    modelo: "Aviva 522 PT",
    tipo: "Caravana",
    categoria: "Caravana",
    precioDesde: 23500,
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
    imagen: "/media/adria-aviva-522-pt-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/adria-aviva-522-pt-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/adria-aviva-522-pt-2026-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7060,
    anchoMm: 2300,
    altoMm: 2580,
    pesoKg: 1030,
    mmaKg: 1350,
    carnetNecesario: "B",
    cargaUtilKg: 320,
    consumo: null,
    consumoUnidad: null,
    plazas: 6,
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: ["precioDesde", "pesoKg", "mmaKg", "cargaUtilKg"],
    pros: [
      "Duerme hasta 6: cama matrimonial, literas y el comedor que se transforma",
      "MMA de 1.350 kg (opción a 1.500): entra en el permiso B con un SUV medio",
      "Puerta de servicio junto a las literas que da acceso directo al garaje",
      "Frigorífico trivalente de 140 l y calefacción Truma dentro de un precio contenido",
      "Es la familiar más económica de Adria, respaldada por 10 años de garantía anti-humedad",
    ],
    contras: [
      "Sus 7,06 m de largo total reclaman práctica al remolcar y dónde aparcarla",
      "Las literas quedan cortas para adolescentes altos",
      "El nivel de acabado Aviva queda un peldaño por debajo de la gama Altea",
      "Sin mover eléctrico, empujar 7 metros a mano se hace cuesta arriba",
      "El toldo lateral y el climatizador se cotizan aparte",
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
        src: "/media/adria-aviva-522-pt-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Adria Aviva 522 PT, vista trasera tres cuartos",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/adria-aviva-522-pt-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Adria Aviva 522 PT, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/adria-aviva-522-pt-2026-precio-ficha-tecnica-interior-oficial.webp",
        alt: "Interior de la Adria Aviva 522 PT, cocina y salón",
        ancho: 1200,
        alto: 800,
      },
      { src: "/media/fotos-reales/adria-aviva-522-pt-2026-precio-ficha-tecnica/adria-aviva-522-pt-2026-precio-ficha-tecnica-int-1.webp", alt: "Interior de la Aviva 522 PT, cocina y comedor", ancho: 1024, alto: 768 },
    ],
    analisisSlug: "adria-aviva-522-pt-2026-precio-ficha-tecnica",
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
      fuente: "Recomendaciones Adria + red de distribuidores",
    },
    euroncap: null,
    fuenteNombre: "Adria Mobil + L'Alba Caravaning (distribuidor oficial) | Pesos: Adria Mobil (configurador oficial 2026: MRO 1.030 kg, MMA 1.350 kg)",
    fuenteUrl: "https://www.lalbacaravaning.com/caravanes-en-estoc/?lang=es",
  },
  {
    id: "adria-action-361-lh-2026-precio-ficha-tecnica",
    marca: "Adria",
    modelo: "Action 361 LH",
    tipo: "Caravana",
    categoria: "Caravana",
    precioDesde: 23000,
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
    imagen: "/media/adria-action-361-lh-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/adria-action-361-lh-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/adria-action-361-lh-2026-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5194,
    anchoMm: 2196,
    altoMm: 2545,
    pesoKg: 1000,
    mmaKg: 1300,
    carnetNecesario: "B",
    cargaUtilKg: 300,
    consumo: null,
    consumoUnidad: null,
    plazas: 2,
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: ["precioDesde", "pesoKg", "mmaKg", "cargaUtilKg"],
    pros: [
      "Un clásico desde 2004: su silueta aerodinámica sigue resultando actual",
      "Con 5,19 m y 1.300 kg de MMA la arrastra casi cualquier turismo con el permiso B",
      "Monocasco de poliéster con aislante XPS: estructura sin madera y peso contenido",
      "Baño con ducha, cocina con horno, televisor de 19 pulgadas y altavoces Bluetooth de serie",
      "Climatizador Truma Saphir y caldera de 14 l incluidos: lista para las cuatro estaciones",
    ],
    contras: [
      "Capacidad estricta para 2 personas: no es una familiar",
      "La cama se arma cada noche abatiendo la dinette: no lleva cama fija",
      "El depósito de limpias es de 50 l: ajustado para más de un finde sin servicios",
      "Precio orientativo elevado para su talla: el diseño se factura",
      "El maletero interior es limitado: hay que equipar ligero",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 0,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 140,
      seguroAmpliadoAnual: 280,
      mantenimientoAnual: 180,
      costeMensualTotal: 110,
      notas:
        "Estimación: seguro de caravana + revisión anual de estanqueidad y gas. Sin motor propio.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/adria-action-361-lh-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Adria Action 361 LH, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/adria-action-361-lh-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Adria Action 361 LH, vista tres cuartos delantera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/adria-action-361-lh-2026-precio-ficha-tecnica-interior-oficial.webp",
        alt: "Interior de la Adria Action 361 LH, salón convertible",
        ancho: 1200,
        alto: 800,
      },
      { src: "/media/fotos-reales/adria-action-361-lh-2026-precio-ficha-tecnica/adria-action-361-lh-2026-precio-ficha-tecnica-int-1.webp", alt: "Interior de la Action 361 LH, comedor", ancho: 1024, alto: 768 },
    ],
    analisisSlug: "adria-action-361-lh-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Revisión anual recomendada: estanqueidad, gas, electricidad y frenos",
      revisiones: [
        {
          nombre: "Revisión anual de la caravana",
          queSeCambia:
            "Estanqueidad, instalación de gas, electricidad y estado de frenos y neumáticos",
          costeAproxEur: 180,
        },
      ],
      costeAnualAproxEur: 180,
      fuente: "Recomendaciones Adria + red de distribuidores",
    },
    euroncap: null,
    fuenteNombre: "Adria Mobil (oficial) | Pesos: Adria Mobil (datos 2026: MMA 1.300 kg, MRO ~1.000 kg)",
    fuenteUrl: "https://www.adria-mobil.com/caravans/",
  },
  {
    id: "adria-altea-542-pk-2026-precio-ficha-tecnica",
    marca: "Adria",
    modelo: "Altea 542 PK",
    tipo: "Caravana",
    categoria: "Caravana",
    precioDesde: 23000,
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
      "/media/adria-altea-542-pk-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/adria-altea-542-pk-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/adria-altea-542-pk-2026-precio-ficha-tecnica-oficial-2.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7434,
    anchoMm: 2296,
    altoMm: 2580,
    pesoKg: 1180,
    mmaKg: 1500,
    carnetNecesario: "B",
    cargaUtilKg: 320,
    consumo: null,
    consumoUnidad: null,
    plazas: 6,
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: ["precioDesde", "pesoKg", "cargaUtilKg"],
    pros: [
      "6 plazas reales rondando los 23.000 €: difícil dar más metros por euro",
      "Bastidor AL-KO con posibilidad de 1.500/1.700 kg: peso contenido y buen aplomo",
      "La Altea estrena generación: habitáculo luminoso y líneas actuales",
      "Cocina completa con horno y frigorífico de 140 l",
      "Baño con ducha independiente en una 6 plazas de este escalón de precio",
    ],
    contras: [
      "El PVP no incluye IVA (23.000 € + IVA): conviene pedir el total al concesionario",
      "El peso en vacío es orientativo: la carga útil final depende del equipamiento",
      "Con 7,43 m hace falta soltura remolcando",
      "Las literas quedan justas para chavales altos",
      "El avance se cotiza por separado",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 0,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 150,
      seguroAmpliadoAnual: 300,
      mantenimientoAnual: 200,
      costeMensualTotal: 125,
      notas:
        "Estimación: seguro de caravana + revisión anual de estanqueidad y gas. Sin motor propio.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/adria-altea-542-pk-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Interior oficial de la gama Adria Altea, salón familiar",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/adria-altea-542-pk-2026-precio-ficha-tecnica-oficial-3.webp",
        alt: "Interior oficial de la gama Adria Altea",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/adria-altea-542-pk-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Adria Altea en concesionario, vista trasera",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "adria-altea-542-pk-2026-precio-ficha-tecnica",
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
      fuente: "Recomendaciones Adria + red de distribuidores",
    },
    euroncap: null,
    fuenteNombre: "Adria (representante oficial) + catálogo oficial Adria",
    fuenteUrl:
      "https://www.kemperiai365.lt/en/camper-vans-for-purchase/adria-altea-542-pk/",
  }
];
