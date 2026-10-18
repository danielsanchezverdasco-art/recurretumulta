// Caravanas Hobby — ficha 1 (lote caravanas 1, 17/10/2026; corregida 18/10/2026).
// Datos verificados: Hobby (web oficial) + exposé oficial del modelo 2026
// (1.475 kg en orden de marcha, MMA 1.800 kg con Auflastung opcional,
// carga útil 325 kg). Precio orientativo de lista de distribuidor
// (marcado en "aprox"). Hobby no publica PVP oficial en EUR: la web oficial
// suiza (hobby-caravan.de/ch_de) lista 27.220 CHF (~29.400 € al cambio del
// 18/10/2026); los 34.500 € son precio orientativo de lista de distribuidor
// en Alemania. Las caravanas no llevan etiqueta DGT.
// Fotos: reales del modelo exacto, verificadas visualmente; son de
// distribuidores, NO del press kit oficial (sin "-oficial").
// Hobby Prestige 560 UL — precio: sin PVP oficial publicado. Hobby no publica
// precios en EUR (la web oficial suiza es la única con precios y este modelo
// no se verificó allí; el portal de prensa mediaportal.hobby-caravan.de no
// publica precios y las listas de distribuidores no son fuente oficial).
// precioDesde: null — precio no mostrado hasta disponer de fuente oficial o
// de importador oficial.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const CARAVANAS_HOBBY: CocheComparador[] = [
  {
    id: "hobby-de-luxe-540-ul-2026-precio-ficha-tecnica",
    marca: "Hobby",
    modelo: "De Luxe 540 UL",
    tipo: "Caravana",
    categoria: "Caravana",
    precioDesde: 34500,
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
      "/media/hobby-de-luxe-540-ul-2026-precio-ficha-tecnica.webp",
    imagenOficial:
      "/media/hobby-de-luxe-540-ul-2026-precio-ficha-tecnica.webp",
    imagenInteriorOficial:
      "/media/hobby-de-luxe-540-ul-2026-precio-ficha-tecnica-2.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7300,
    anchoMm: 2300,
    altoMm: 2640,
    pesoKg: 1475,
    mmaKg: 1800,
    carnetNecesario: "B96",
    cargaUtilKg: 325,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    // MMA 1.800 kg con Auflastung opcional (exposé de distribuidor); carnet
    // B96 (B solo con coches de MMA ≤1.700 kg). Carga útil 325 kg
    // (1.800 − 1.475 kg).
    aprox: ["precioDesde", "pesoKg"],
    pros: [
      "De una de las marcas de caravanas más vendidas de Europa: red de servicio y repuestos imbatible",
      "Camas individuales traseras + salón convertible: 4 plazas sin literas",
      "1.800 kg de MMA (con aumento de carga opcional) en un solo eje: carnet B96 (B solo con coches de MMA ≤1.700 kg)",
      "Altura interior de 1,95 m y gran sensación de espacio",
      "Garantía de estanqueidad de 5 años",
    ],
    contras: [
      "Con 7,30 m totales exige experiencia remolcando y plaza de parking",
      "El precio orientativo (~34.500 €) es alto frente a la competencia",
      "Con 1.475 kg en orden de marcha y 325 kg de carga útil, hay que repartir bien el equipaje",
      "Sin mover eléctrico, maniobrar 7,3 m a mano es duro",
      "El avance no viene de serie: hay que presupuestarlo aparte",
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
        src: "/media/hobby-de-luxe-540-ul-2026-precio-ficha-tecnica-2.webp",
        alt: "Hobby De Luxe 540 UL, imagen del modelo",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/hobby-de-luxe-540-ul-2026-precio-ficha-tecnica-3.webp",
        alt: "Hobby De Luxe 540 UL, vista lateral real",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/hobby-de-luxe-540-ul-2026-precio-ficha-tecnica-4.webp",
        alt: "Hobby De Luxe 540 UL, vista tres cuartos",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "hobby-de-luxe-540-ul-2026-precio-ficha-tecnica",
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
      fuente: "Recomendaciones Hobby + red de distribuidores",
    },
    euroncap: null,
    fuenteNombre: "Hobby (web oficial, ed. Suiza: 27.220 CHF) + exposé de distribuidor del modelo 2026",
    fuenteUrl: "https://www.hobby-caravan.de/ch_de/wohnwagen/de-luxe/540-ul/",
  },

  {
    id: "hobby-prestige-560-ul-2026-precio-ficha-tecnica",
    marca: "Hobby",
    modelo: "Prestige 560 UL",
    tipo: "Caravana",
    categoria: "Caravana",
    precioDesde: null,
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
      "/media/hobby-prestige-560-ul-2026-precio-ficha-tecnica-tecnica.webp",
    imagenOficial:
      "/media/hobby-prestige-560-ul-2026-precio-ficha-tecnica-tecnica.webp",
    imagenInteriorOficial:
      "/media/hobby-prestige-560-ul-2026-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7570,
    anchoMm: 2500,
    altoMm: 2650,
    pesoKg: 1508,
    mmaKg: 2000,
    carnetNecesario: "B96",
    cargaUtilKg: 492,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: ["pesoKg"],
    pros: [
      "Camas individuales traseras de 194x85 cm: cada uno duerme a su aire, sin molestar al otro",
      "Truma Combi 6 y nevera de 157 L: equipamiento de gama alta de serie",
      "Baño trasero con ducha separada: privacidad total en una caravana de un eje",
      "Garantía de estanqueidad de 5 años: la mejor del segmento",
      "2.000 kg de MMA con un solo eje: carnet B96 (B solo con coches de MMA ≤1.500 kg)",
    ],
    contras: [
      "7,57 m de largo total: exige experiencia remolcando y sitio para guardarla",
      "Sin PVP oficial publicado: Hobby no publica precio en EUR por modelo, hay que pedir presupuesto al distribuidor",
      "Con 1.508 kg en orden de marcha, la carga útil con 4 ocupantes es justa",
      "Sin mover eléctrico de serie: maniobrar 7,5 m a mano es duro",
      "El avance y los extras habituales suben la factura final",
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
        src: "/media/hobby-prestige-560-ul-2026-precio-ficha-tecnica-tecnica-2.webp",
        alt: "Hobby Prestige 560 UL, vista frontal",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/hobby-prestige-560-ul-2026-precio-ficha-tecnica-oficial-4.webp",
        alt: "Hobby Prestige 560 UL, interior del frigorífico",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/hobby-prestige-560-ul-2026-precio-ficha-tecnica-interior-oficial.webp",
        alt: "Hobby Prestige 560 UL, camas individuales, foto oficial",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "hobby-prestige-560-ul-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo: "Revisión anual recomendada (estanqueidad + gas + frenos)",
      revisiones: [
        {
          nombre: "Revisión anual de la célula",
          queSeCambia:
            "Estanqueidad, instalación de gas, frenos, neumáticos y humedades",
          costeAproxEur: 200,
        },
      ],
      costeAnualAproxEur: 200,
      fuente: "Recomendaciones Hobby + red de concesionarios",
    },
    euroncap: null,
    fuenteNombre: "Hobby (portal de prensa oficial)",
    fuenteUrl:
      "https://mediaportal.hobby-caravan.de/pressebilder-2025/wohnwagen/prestige/innenaufnahmen/",
  },

  // Precio 21.980 €: Hobby no publica lista oficial de precios; cifra
  // orientativa de distribuidores (marcada en "aprox").
  {
    id: "hobby-ontour-390-sf-2026-precio-ficha-tecnica",
    marca: "Hobby",
    modelo: "OnTour 390 SF",
    tipo: "Caravana",
    categoria: "Caravana",
    precioDesde: 21980,
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
      "/media/hobby-ontour-390-sf-2026-precio-ficha-tecnica-tecnica.webp",
    imagenOficial:
      "/media/hobby-ontour-390-sf-2026-precio-ficha-tecnica-tecnica.webp",
    imagenInteriorOficial:
      "/media/hobby-ontour-390-sf-2026-precio-ficha-tecnica-oficial-3.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5800,
    anchoMm: 2200,
    altoMm: 2575,
    pesoKg: 1200,
    mmaKg: 1350,
    carnetNecesario: "B",
    cargaUtilKg: 150,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: ["precioDesde", "altoMm", "cargaUtilKg"],
    pros: [
      "La más vendida para empezar: nº 1 en la encuesta promobil 2026 de su clase",
      "Solo 5,80 m y 1.200 kg: carnet B si el conjunto no supera 3.500 kg de MMA",
      "Precio de acceso a Hobby nueva: desde ~21.980 € con todo incluido",
      "Paquete HOBBYKOMPLETT de serie: estabilizador, toldo, HOBBYCONNECT",
      "2,20 m de ancho: cabe en plazas y caminos donde las grandes no entran",
    ],
    contras: [
      "Carga útil justa (150 kg): hay que vigilar el peso con 4 personas",
      "Compacta por dentro: baño y cocina de tamaño contenido",
      "Las 3.ª y 4.ª plazas salen del salón convertible",
      "Sin mover de serie: maniobrarla a mano en cuesta cuesta",
      "El avance se presupuesta aparte",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 0,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 140,
      seguroAmpliadoAnual: 280,
      mantenimientoAnual: 180,
      costeMensualTotal: 120,
      notas:
        "Estimación: seguro de caravana + revisión anual de estanqueidad y gas. Sin motor propio.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/hobby-ontour-390-sf-2026-precio-ficha-tecnica-tecnica-2.webp",
        alt: "Hobby OnTour 390 SF 2026 en concesionario, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/hobby-ontour-390-sf-2026-precio-ficha-tecnica-oficial-3.webp",
        alt: "Interior de la Hobby OnTour 390 SF, cocina y cama",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/hobby-ontour-390-sf-2026-precio-ficha-tecnica-tecnica.webp",
        alt: "Hobby OnTour 390 SF 2026 en campa, vista trasera",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "hobby-ontour-390-sf-2026-precio-ficha-tecnica",
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
      fuente: "Recomendaciones Hobby + red de distribuidores",
    },
    euroncap: null,
    fuenteNombre: "Hobby (prensa oficial) + red de distribuidores oficiales",
    fuenteUrl:
      "https://mediaportal.hobby-caravan.de/en/press-release/all-hobby-innovations-for-the-2025-caravan-and-motorhome-season-at-a-glance/",
  },
];
