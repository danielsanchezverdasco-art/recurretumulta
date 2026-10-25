import type { CocheComparador } from "./comparador-coches-data.ts";

/**
 * Deepal (Changan) — 05/10/2026.
 * Modelos reales a la venta en España/Europa (verificado con búsqueda web).
 * Ya existían S07 y S09 en otros ficheros (no duplicar).
 * Datos del S05: catálogo oficial changaneurope.com (PVPR España),
 * hibridosyelectricos.com, universomotor.com, revistacar.es, autocasion.com,
 * soymotor.com y pruebas de testcoches.es. null = no publicado/verificado.
 */
export const COCHES_DEEPAL: CocheComparador[] = [
  {
    id: "deepal-s05-2026-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 200000,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/deepal-s05-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: "3RL03XWPaFQ",
    videoCanal: "SoyMotor",
    marca: "Deepal",
    modelo: "S05",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: 37390,
    potenciaCv: 272,
    autonomiaKm: 485,
    maleteroL: 492,
    ceroCien: 7.5,
    velocidadMax: 180,
    bateriaKwh: 68.8,
    cargaRapidaKw: 200,
    etiquetaDgt: "Cero",
    pros: [
      "272 CV y 485 km WLTP por 37.390 €: de los eléctricos con mejor relación precio-autonomía del segmento",
      "Carga rápida de 200 kW: del 30 al 80 % en 15 minutos, lo más rápido de su precio",
      "Dos maleteros: 492 L detrás + frunk delantero de 152 L",
      "5 estrellas Euro NCAP y etiqueta Cero de la DGT",
      "Remolca hasta 1.600 kg, un dato rarísimo en su categoría",
    ],
    contras: [
      "Marca recién llegada a España: red en crecimiento y valor de reventa incierto",
      "Los 485 km WLTP se quedan en unos 300 km reales en autopista a 120 km/h",
      "El PVP oficial convive con ofertas de lanzamiento: el precio real depende de la campaña vigente",
      "Todo pasa por la pantalla de 15,4 pulgadas: sin botones físicos",
      "Sin versión de acceso más barata: la gama eléctrica empieza en 37.390 €",
    ],
    largoMm: 4598,
    anchoMm: 1900,
    altoMm: 1600,
    pesoKg: null,
    consumo: 15.9,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: 290,
    traccion: "Trasera",
    emisionesCo2: 0,
    aprox: [],
    imagen: "/media/deepal-s05-2026-precio-ficha-tecnica-hero.webp",
    opiniones: [
      {
        "texto": "la versión de propulsión trasera se planta sin dificultad en tiradas de unos 300 kilómetros reales en autopista",
        "usuario": "Carlos Glez (testcoches.es, prueba del S05)",
        "fuente": "testcoches.es",
        "url": "https://testcoches.es/pruebas/probe-el-deepal-s05-buscandole-defectos-a-proposito-y-solo-le-he-encontrado-tres/"
      },
      {
        "texto": "su verdadero as en la manga a la hora de viajar no es la autonomía, sino lo rápido que recupera",
        "usuario": "Carlos Glez (testcoches.es, prueba del S05)",
        "fuente": "testcoches.es",
        "url": "https://testcoches.es/pruebas/probe-el-deepal-s05-buscandole-defectos-a-proposito-y-solo-le-he-encontrado-tres/"
      }
    ],
    costeMensual: {
      "costeEnergia100km": 2.9,
      "seguroTercerosAnual": 450,
      "seguroAmpliadoAnual": 850,
      "mantenimientoAnual": 350,
      "costeMensualTotal": 136,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "consumo WLTP oficial 15,9 kWh/100 km; coste energético con 0,18 €/kWh (carga en casa); 15.000 km/año; seguro y mantenimiento estimados por segmento; estimado",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/deepal-s05-2026-precio-ficha-tecnica-oficial.webp",
        "alt": "Deepal S05 eléctrico, vista lateral",
        "ancho": 2240,
        "alto": 1120
      },
      {
        "src": "",
        "alt": "Deepal S05 eléctrico, vista trasera",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "",
        "alt": "Interior del Deepal S05 con pantalla giratoria",
        "ancho": 1920,
        "alto": 1280
      }
    ],
  },
  {
    id: "deepal-s05-awd-2026-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 200000,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/deepal-s05-awd-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: "CUr2UtrYtzc",
    videoCanal: "testcoches (Carlos Glez)",
    marca: "Deepal",
    modelo: "S05 AWD",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: 43390,
    potenciaCv: 435,
    autonomiaKm: 445,
    maleteroL: 492,
    ceroCien: 5.5,
    velocidadMax: 180,
    bateriaKwh: 68.8,
    cargaRapidaKw: 200,
    etiquetaDgt: "Cero",
    pros: [
      "435 CV y 502 Nm: el SUV eléctrico compacto más potente por menos de 45.000 €",
      "0-100 km/h en 5,5 s: prestaciones de deportivo",
      "Tracción total para lluvia y nieve por solo unos 3.000 € más que el RWD",
      "Misma batería de 68,8 kWh y carga de 200 kW que el RWD",
      "5 estrellas Euro NCAP y etiqueta Cero de la DGT",
    ],
    contras: [
      "La autonomía cae a 445 km WLTP frente a los 485 km del RWD",
      "17,5 kWh/100 km de consumo: cargar sale más caro que con el RWD",
      "Marca recién llegada a España: valor de reventa incierto",
      "Solo acabado Max: sin opción intermedia",
      "El RWD ya acelera en 7,5 s y cuesta menos: ¿merece la pena el salto?",
    ],
    largoMm: 4598,
    anchoMm: 1900,
    altoMm: 1600,
    pesoKg: null,
    consumo: 17.5,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: 502,
    traccion: "Total",
    emisionesCo2: 0,
    aprox: [],
    imagen: "/media/deepal-s05-awd-2026-precio-ficha-tecnica-hero.webp",
    opiniones: [
      {
        "texto": "probé el Deepal S05 buscándole defectos a propósito y solo le he encontrado tres",
        "usuario": "Carlos Glez (testcoches.es, prueba del S05 AWD)",
        "fuente": "testcoches.es",
        "url": "https://testcoches.es/pruebas/probe-el-deepal-s05-buscandole-defectos-a-proposito-y-solo-le-he-encontrado-tres/"
      },
      {
        "texto": "me han mandado la versión de tracción total, que evidentemente consume más y no es la que va a comprar la mayoría de la gente",
        "usuario": "Carlos Glez (testcoches.es, prueba del S05 AWD)",
        "fuente": "testcoches.es",
        "url": "https://testcoches.es/pruebas/probe-el-deepal-s05-buscandole-defectos-a-proposito-y-solo-le-he-encontrado-tres/"
      }
    ],
    costeMensual: {
      "costeEnergia100km": 3.2,
      "seguroTercerosAnual": 475,
      "seguroAmpliadoAnual": 900,
      "mantenimientoAnual": 350,
      "costeMensualTotal": 144,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "consumo WLTP oficial 17,5 kWh/100 km; coste energético con 0,18 €/kWh (carga en casa); 15.000 km/año; seguro y mantenimiento estimados por segmento; estimado",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/deepal-s05-awd-2026-precio-ficha-tecnica-oficial.webp",
        "alt": "Deepal S05 AWD, vista lateral",
        "ancho": 2240,
        "alto": 1120
      },
      {
        "src": "",
        "alt": "Deepal S05 AWD, vista trasera en carretera",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "",
        "alt": "Interior del Deepal S05 AWD con HUD",
        "ancho": 1920,
        "alto": 1280
      }
    ],
  },
  {
    id: "deepal-s05-phev-2026-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 200000,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/deepal-s05-phev-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: "6ONt5gNo2Yk",
    videoCanal: "TOP DRIVERS",
    marca: "Deepal",
    modelo: "S05 PHEV",
    tipo: "Híbrido enchufable",
    categoria: "SUV",
    precioDesde: 33990,
    potenciaCv: 258,
    autonomiaKm: 100,
    maleteroL: 552,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: 18.4,
    cargaRapidaKw: null,
    etiquetaDgt: "Cero",
    pros: [
      "Más de 100 km en modo eléctrico: el día a día sin gastar una gota de gasolina",
      "Más de 1.000 km de autonomía combinada: viajar sin planificar cargas",
      "Desde 33.990 € PVPR: más barato que el S05 eléctrico puro",
      "Etiqueta Cero de la DGT con más de 40 km de autonomía eléctrica",
      "Maletero de 552 L: el más grande de la gama S05",
    ],
    contras: [
      "El 1.5 atmosférico de 86 CV actúa como generador: si agotas la batería, el consumo sube",
      "234 CV eléctricos frente a los 272 del BEV: menos chispa",
      "Depósito de 51 L y batería de 18,4 kWh: en modo híbrido gasta más que el eléctrico en kWh",
      "Versión nueva en España: la red de recambios aún está creciendo",
      "Carga rápida en continua no confirmada por la marca para el PHEV",
    ],
    largoMm: 4598,
    anchoMm: 1900,
    altoMm: 1600,
    pesoKg: 1850,
    consumo: null,
    consumoUnidad: null,
    plazas: 5,
    parNm: 290,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["autonomiaKm"],
    imagen: "/media/deepal-s05-phev-2026-precio-ficha-tecnica-hero.webp",
    opiniones: [
      {
        "texto": "un SUV compacto que llega a España con un único objetivo: reventar el mercado por relación calidad-precio y habitabilidad",
        "usuario": "TOP DRIVERS (YouTube, prueba del S05 PHEV)",
        "fuente": "youtube.com",
        "url": "https://www.youtube.com/watch?v=6ONt5gNo2Yk"
      }
    ],
    costeMensual: {
      "costeEnergia100km": 3.3,
      "seguroTercerosAnual": 450,
      "seguroAmpliadoAnual": 850,
      "mantenimientoAnual": 450,
      "costeMensualTotal": 150,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "híbrido enchufable: coste calculado en modo eléctrico con carga en casa (0,18 €/kWh); en modo híbrido el coste depende del precio de la gasolina (1,85 €/l); 15.000 km/año; estimado",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/deepal-s05-phev-2026-precio-ficha-tecnica-oficial.webp",
        "alt": "Deepal S05 PHEV, vista lateral",
        "ancho": 2240,
        "alto": 1120
      },
      {
        "src": "",
        "alt": "Deepal S05 PHEV, vista trasera con portón abierto",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "",
        "alt": "Interior del Deepal S05 PHEV, plazas traseras",
        "ancho": 1920,
        "alto": 1280
      }
    ],
  },
];
