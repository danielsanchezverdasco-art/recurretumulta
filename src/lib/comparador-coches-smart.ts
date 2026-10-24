// smart — lote A (04/10/2026): smart #2, smart #3 y smart #3 Brabus.
// Datos verificados con prensa española (autonocion.com, hibridosyelectricos.com,
// somoselectricos.com, hackercar.com, coches.net, quecochemecompro.com, drivek.es)
// y prensa oficial de smart (ECA / Concept #2). Regla dura: dato no verificado = null.
// Ya existentes (no duplicar): smart-1-precio-ficha-tecnica, smart-5-electrico-ficha-tecnica-precio.
// El #6 EHD es híbrido solo para China: fuera de gama europea.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const COCHES_SMART: CocheComparador[] = [
  {
    // smart #2 — ACTUALIZADO 14/10/2026 (lote prioritario): datos verificados de la
    // presentación de París (12–13/10/2026) y garantía oficial smart España.
    // La ficha YA existía con datos del Concept #2 (precio null, largo 2.792,
    // maletero null) e imágenes IA que NO existían en disco: se actualiza EN EL
    // MISMO id (el blog ya enlaza a esta URL; NO crear una segunda ficha).
    // Fotos: prensa distribuida por Somos Eléctricos (licencia desconocida),
    // verificadas visualmente 13–14/10/2026. La foto hero y la oficial son el
    // mismo archivo (byte a byte idénticos): solo hay 2 fotos distintas
    // (exterior + interior). La galería muestra solo el interior para no
    // repetir el hero. Mantenimiento: A VERIFICAR (smart aún no
    // publica el programa del #2) → costeMensual: null, sin cifras inventadas.
    // ACTUALIZADO 23/10/2026 (radar noticias): lanzamiento confirmado el
    // 5/11/2026 en China (410 km CLTC), pedidos ya abiertos en España desde
    // 19.990 € (Pure), Europa en primavera de 2027 con 290 km WLTP
    // (provisional). Galería ampliada con 3 fotos reales verificadas del
    // modelo de producción (Wikimedia Commons Y.Leclercq CC BY-SA 4.0 +
    // nota de prensa oficial smart).
    id: "smart-2-2026-precio-autonomia-paris",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 200000,
    garantiaBateriaDegradacionPct: 70,
    imagenOficial: "/media/smart-2-2026-precio-autonomia-paris-oficial.webp",
    imagenInteriorOficial: "/media/smart-2-2026-precio-autonomia-paris-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    marca: "Smart",
    modelo: "#2",
    tipo: "Eléctrico",
    categoria: "Urbano",
    precioDesde: 19990,
    versiones: [
      { nombre: "Pure", precio: 19990 },
      { nombre: "Pure+", precio: 20990 },
      { nombre: "Premium", precio: 24490 },
      { nombre: "Couture Edition (999 uds. en Europa)", precio: 25690 },
    ],
    potenciaCv: 82,
    autonomiaKm: 290,
    maleteroL: 305,
    ceroCien: 11.6,
    velocidadMax: 140,
    bateriaKwh: 35.8,
    cargaRapidaKw: 65,
    etiquetaDgt: "Cero",
    pros: [
      "El biplaza urbano de siempre: 2,75 m de largo y radio de giro de 6,95 m para la ciudad",
      "Batería LFP CATL de 35,8 kWh con 290 km WLTP (cifra provisional, pendiente de homologación)",
      "Carga rápida del 10 al 80 % en unos 20 minutos con cargador de 65 kW",
      "Célula Tridion Cell Evo con acero de 1.800 MPa y 7 airbags: seguridad de coche grande",
      "Tracción trasera, reparto de pesos 50:50 y suspensión multibrazo: diversión de kart",
      "Maletero de 305 litros (527 litros con el asiento del acompañante abatido)",
      "Precio desde 19.990 € (Pure), sin gastos de transporte y matriculación",
    ],
    contras: [
      "Dos plazas y dos puertas: cero flexibilidad para viajar en familia",
      "82 CV: de sobra en ciudad, justos en autopista",
      "Autonomía WLTP provisional, pendiente de homologación definitiva",
      "Mantenimiento: intervalos y costes aún no publicados por smart (a verificar)",
      "Red smart pequeña en España frente a generalistas",
      "Sin datos EuroNCAP",
    ],
    largoMm: 2746,
    anchoMm: 1760,
    altoMm: 1555,
    pesoKg: 1140,
    consumo: 13.6,
    consumoUnidad: "kWh/100 km",
    plazas: 2,
    parNm: 130,
    traccion: "Trasera",
    emisionesCo2: 0,
    aprox: ["autonomiaKm"],
    imagen: "/media/smart-2-2026-precio-autonomia-paris-hero.webp",
    analisisSlug: "smart-2-2026-precio-autonomia-paris",
    opiniones: [],
    costeMensual: null,
    galeria: [
      {
        "src": "/media/smart-2-2026-precio-autonomia-paris-interior-oficial.webp",
        "alt": "Interior del smart #2 con volante smart, pantalla de 10,1 pulgadas y aireadores de turbina",
        "ancho": 1280,
        "alto": 720
      },
      {
        "src": "/media/smart-2-2026-precio-autonomia-paris-galeria-delantera.webp",
        "alt": "Smart #2 de producción, vista delantera de tres cuartos (Salón de París 2026)",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/smart-2-2026-precio-autonomia-paris-galeria-trasera.webp",
        "alt": "Smart #2 de producción, vista trasera de tres cuartos",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/smart-2-2026-precio-autonomia-paris-galeria-interior2.webp",
        "alt": "Interior del smart #2 de producción, salpicadero con doble pantalla",
        "ancho": 1200,
        "alto": 800
      }
    ],
    euroncap: {
      estrellas: null,
      ano: null,
      url: null,
      nota: "Sin datos EuroNCAP: no hay prueba publicada para el smart #2.",
    },
  },
  {
    id: "smart-3-2026-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/smart-3-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: "ckVx0oR_Vs8",
    videoCanal: "ElectroExamen",
    marca: "Smart",
    modelo: "#3",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: 41760,
    potenciaCv: 272,
    autonomiaKm: 455,
    maleteroL: 370,
    ceroCien: 5.8,
    velocidadMax: 180,
    bateriaKwh: 66,
    cargaRapidaKw: 150,
    etiquetaDgt: "Cero",
    pros: [
      "Diseño SUV coupé firmado por Mercedes: el smart más bonito de la gama",
      "Hasta 455 km WLTP y carga de 150 kW (10-80 % en menos de 30 minutos)",
      "272 CV con tracción trasera y 0-100 en 5,8 s: diversión seria",
      "Cargador de 22 kW en alterna y bomba de calor: carga rápida también en casa",
      "Maletero de 370 L + 15 L delanteros: el más práctico de los smart compactos",
    ],
    contras: [
      "Desde 41.760 €: muy lejos del smart barato de antes",
      "1.780 kg en vacío: se nota en consumo real (18,8 kWh/100 km en autopista según prueba)",
      "El planificador de ruta a veces no reconoce cargadores hasta iniciar el trayecto",
      "La marca aún arrastra la imagen del microcoche urbano: pesa en la reventa",
      "Red smart pequeña en España frente a generalistas",
    ],
    largoMm: 4440,
    anchoMm: 1844,
    altoMm: 1556,
    pesoKg: 1780,
    consumo: 17.6,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: 343,
    traccion: "Trasera",
    emisionesCo2: 0,
    aprox: ["consumo"],
    imagen: "/media/smart-3-2026-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 3.2,
      "seguroTercerosAnual": 550,
      "seguroAmpliadoAnual": 1000,
      "mantenimientoAnual": 300,
      "costeMensualTotal": 140,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "consumo WLTP medio del rango (17,6-16,3 kWh/100 km según drivek.es); recarga doméstica aprox 0,18 EUR/kWh",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/smart-3-2026-precio-ficha-tecnica-oficial.webp",
        "alt": "smart #3, SUV coupé eléctrico, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del smart #3 con pantalla central flotante",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/smart-3-2026-precio-ficha-tecnica-hero.webp",
        "alt": "smart #3 circulando por una carretera de montaña al atardecer",
        "ancho": 1200,
        "alto": 800
      }
    ],
  },
  {
    id: "smart-3-brabus-2026-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/smart-3-brabus-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: null,
    videoCanal: null,
    marca: "Smart",
    modelo: "#3 Brabus",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: 55120,
    potenciaCv: 428,
    autonomiaKm: 415,
    maleteroL: 370,
    ceroCien: 3.7,
    velocidadMax: 180,
    bateriaKwh: 66,
    cargaRapidaKw: 150,
    etiquetaDgt: "Cero",
    pros: [
      "428 CV y 543 Nm con tracción total: 0-100 en 3,7 s, el smart más rápido de la historia",
      "415 km WLTP y carga de 150 kW: prestaciones sin renunciar al uso diario",
      "Chasis específico Brabus: suspensiones firmes, dirección deportiva y Cx de 0,27",
      "Equipamiento cerrado de serie: bomba de calor, head-up display y sonido deportivo simulado",
      "Capacidad de remolque de 1.600 kg: rara en un SUV compacto eléctrico",
    ],
    contras: [
      "55.120 €: territorio premium, lejos de la filosofía smart original",
      "1.910 kg: 130 kg más que la versión básica, se nota en consumo",
      "Velocidad limitada a 180 km/h: las prestaciones se quedan en la aceleración",
      "Llantas de 20\" y neumáticos de 245 mm: suben el confort duro y el coste de reposición",
      "Autonomía real en conducción deportiva muy por debajo de los 415 km WLTP",
    ],
    largoMm: 4440,
    anchoMm: 1840,
    altoMm: 1550,
    pesoKg: 1910,
    consumo: null,
    consumoUnidad: null,
    plazas: 5,
    parNm: 543,
    traccion: "Total",
    emisionesCo2: 0,
    aprox: [],
    imagen: "/media/smart-3-brabus-2026-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 4.0,
      "seguroTercerosAnual": 600,
      "seguroAmpliadoAnual": 1100,
      "mantenimientoAnual": 320,
      "costeMensualTotal": 152,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "consumo real estimado aprox 22 kWh/100 km por mayor peso y potencia (sin dato WLTP publicado); recarga doméstica aprox 0,18 EUR/kWh",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/smart-3-brabus-2026-precio-ficha-tecnica-oficial.webp",
        "alt": "smart #3 Brabus, tres cuartos delantero con llantas de 20 pulgadas",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior deportivo del smart #3 Brabus con detalles en rojo",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/smart-3-brabus-2026-precio-ficha-tecnica-hero.webp",
        "alt": "smart #3 Brabus acelerando en una carretera secundaria",
        "ancho": 1200,
        "alto": 800
      }
    ],
  },
  {
    id: "smart-1-pure-2025-precio-ficha-tecnica",
    "marca": "smart",
    "modelo": "#1 Pure",
    "tipo": "Eléctrico",
    "categoria": "SUV",
    "precioDesde": 31400,
    "potenciaCv": 272,
    "autonomiaKm": 310,
    "maleteroL": 288,
    "ceroCien": 6.7,
    "velocidadMax": 180,
    "bateriaKwh": 49,
    "cargaRapidaKw": 150,
    "etiquetaDgt": "Cero",
    "garantiaBateriaAnos": 8,
    "garantiaBateriaKm": 160000,
    "garantiaBateriaDegradacionPct": null,
    "largoMm": 4270,
    "anchoMm": 1822,
    "altoMm": 1636,
    "pesoKg": null,
    "consumo": null,
    "consumoUnidad": null,
    "plazas": 5,
    "parNm": 343,
    "traccion": "Trasera",
    "emisionesCo2": 0,
    "aprox": [],
    "pros": [
      "31.400 €: el smart eléctrico más barato, 7.000 € menos que el anterior acceso",
      "272 CV y 343 Nm con tracción trasera: potencia de sobra para un B-SUV",
      "Batería LFP de 49 kWh: química más duradera y sin cobalto",
      "310 km WLTP y carga del 10 al 80 % en 30 minutos (150 kW DC)",
      "5 estrellas Euro NCAP y ADAS de serie (smart Pilot Assist)"
    ],
    "contras": [
      "Tapicería de tela y sin techo panorámico: se nota el recorte de equipamiento",
      "310 km WLTP: justo para viajar, pensado para ciudad y cercanías",
      "Llantas de 18\" y techo duro: pierde parte del aire premium del #1",
      "Maletero de 288 L: correcto, pero no generoso",
      "Red smart pequeña en España frente a generalistas"
    ],
    "imagen": "/media/smart-1-pure-2025-precio-ficha-tecnica-hero.webp",
    "imagenOficial": "/media/smart-1-pure-2025-precio-ficha-tecnica-oficial.webp",
    "imagenInteriorOficial": "",
    "videoId": null,
    "videoCanal": null,
    "opiniones": [],
    "costeMensual": {
      "costeEnergia100km": 2.9,
      "seguroTercerosAnual": 450,
      "seguroAmpliadoAnual": 850,
      "mantenimientoAnual": 280,
      "costeMensualTotal": 130,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.65,
      "notas": "consumo estimado aprox 16 kWh/100 km por versión de acceso; recarga doméstica aprox 0,18 EUR/kWh",
      "estimado": true
    },
    "galeria": [
      {
        "src": "/media/smart-1-pure-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "smart #1 Pure, SUV eléctrico compacto, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del smart #1 Pure con tapicería de tela y pantalla central",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/smart-1-pure-2025-precio-ficha-tecnica-hero.webp",
        "alt": "smart #1 Pure circulando por una avenida urbana",
        "ancho": 1200,
        "alto": 800
      }
    ]
  },
  {
    id: "smart-1-pure-plus-2025-precio-ficha-tecnica",
    "marca": "smart",
    "modelo": "#1 Pure+",
    "tipo": "Eléctrico",
    "categoria": "SUV",
    "precioDesde": 35600,
    "potenciaCv": 272,
    "autonomiaKm": 420,
    "maleteroL": 288,
    "ceroCien": 6.7,
    "velocidadMax": 180,
    "bateriaKwh": 66,
    "cargaRapidaKw": 150,
    "etiquetaDgt": "Cero",
    "garantiaBateriaAnos": 8,
    "garantiaBateriaKm": 160000,
    "garantiaBateriaDegradacionPct": null,
    "largoMm": 4270,
    "anchoMm": 1822,
    "altoMm": 1636,
    "pesoKg": null,
    "consumo": null,
    "consumoUnidad": null,
    "plazas": 5,
    "parNm": 343,
    "traccion": "Trasera",
    "emisionesCo2": 0,
    "aprox": [],
    "pros": [
      "35.600 €: 7.800 € menos que el Pro+ con la misma batería de 66 kWh",
      "420 km WLTP: 110 km más que el Pure por solo 4.200 € más",
      "Bomba de calor de serie: menos consumo en invierno",
      "272 CV con tracción trasera y 0-100 en 6,7 s",
      "Carga de 150 kW DC: del 10 al 80 % en 30 minutos"
    ],
    "contras": [
      "Mismo equipamiento recortado que el Pure (tela, sin techo panorámico)",
      "20 km menos de autonomía que el Premium con la misma batería",
      "Batería NMC: conviene no cargarla al 100 % a diario",
      "Maletero de 288 L: no es su punto fuerte",
      "Por 5.100 € más está el Premium, mucho mejor equipado"
    ],
    "imagen": "/media/smart-1-pure-plus-2025-precio-ficha-tecnica-hero.webp",
    "imagenOficial": "/media/smart-1-pure-plus-2025-precio-ficha-tecnica-oficial.webp",
    "imagenInteriorOficial": "",
    "videoId": null,
    "videoCanal": null,
    "opiniones": [],
    "costeMensual": {
      "costeEnergia100km": 3,
      "seguroTercerosAnual": 470,
      "seguroAmpliadoAnual": 880,
      "mantenimientoAnual": 290,
      "costeMensualTotal": 135,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.65,
      "notas": "consumo estimado aprox 16,5 kWh/100 km; recarga doméstica aprox 0,18 EUR/kWh",
      "estimado": true
    },
    "galeria": [
      {
        "src": "/media/smart-1-pure-plus-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "smart #1 Pure+, SUV eléctrico, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del smart #1 Pure+ con pantalla central de 12,8 pulgadas",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/smart-1-pure-plus-2025-precio-ficha-tecnica-hero.webp",
        "alt": "smart #1 Pure+ en una carretera secundaria al atardecer",
        "ancho": 1200,
        "alto": 800
      }
    ]
  },
  {
    id: "smart-1-pro-2025-precio-ficha-tecnica",
    "marca": "smart",
    "modelo": "#1 Pro",
    "tipo": "Eléctrico",
    "categoria": "SUV",
    "precioDesde": null, // Tarifa oficial solo en el configurador de smart España (es.smart.com); sin precio público de esta versión como texto indexado
    "potenciaCv": 272,
    "autonomiaKm": 310,
    "maleteroL": 288,
    "ceroCien": 6.7,
    "velocidadMax": 180,
    "bateriaKwh": 49,
    "cargaRapidaKw": 150,
    "etiquetaDgt": "Cero",
    "garantiaBateriaAnos": 8,
    "garantiaBateriaKm": 160000,
    "garantiaBateriaDegradacionPct": null,
    "largoMm": 4270,
    "anchoMm": 1822,
    "altoMm": 1636,
    "pesoKg": null,
    "consumo": null,
    "consumoUnidad": null,
    "plazas": 5,
    "parNm": 343,
    "traccion": "Trasera",
    "emisionesCo2": 0,
    "aprox": [],
    "pros": [
      "Batería LFP de 49 kWh: admite cargas al 100 % sin degradar como la NMC",
      "272 CV y tracción trasera: el #1 más divertido de los de un motor",
      "310 km WLTP con 150 kW de carga rápida",
      "Techo panorámico Halo y acabados superiores al Pure",
      "5 estrellas Euro NCAP con 96 % en ocupante adulto"
    ],
    "contras": [
      "El Pure ofrece lo mismo por menos dinero",
      "310 km: la autonomía más corta de la gama junto al Pure",
      "Sin bomba de calor (reservada a versiones superiores)",
      "Maletero de 288 L",
      "Precio actual sin confirmar en tarifa"
    ],
    "imagen": "/media/smart-1-pro-2025-precio-ficha-tecnica-hero.webp",
    "imagenOficial": "/media/smart-1-pro-2025-precio-ficha-tecnica-oficial.webp",
    "imagenInteriorOficial": "",
    "videoId": null,
    "videoCanal": null,
    "opiniones": [],
    "costeMensual": {
      "costeEnergia100km": 2.9,
      "seguroTercerosAnual": 460,
      "seguroAmpliadoAnual": 870,
      "mantenimientoAnual": 290,
      "costeMensualTotal": 133,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.65,
      "notas": "consumo estimado aprox 16 kWh/100 km; recarga doméstica aprox 0,18 EUR/kWh; precio de compra sin confirmar",
      "estimado": true
    },
    "galeria": [
      {
        "src": "/media/smart-1-pro-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "smart #1 Pro, SUV eléctrico compacto, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del smart #1 Pro con techo panorámico Halo",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/smart-1-pro-2025-precio-ficha-tecnica-hero.webp",
        "alt": "smart #1 Pro aparcado en una calle del centro",
        "ancho": 1200,
        "alto": 800
      }
    ]
  },
  {
    id: "smart-1-pro-plus-2025-precio-ficha-tecnica",
    "marca": "smart",
    "modelo": "#1 Pro+",
    "tipo": "Eléctrico",
    "categoria": "SUV",
    "precioDesde": 43400, // media.smart.com oficial 09/2023: smart #1 Pro+ desde 43.400 € en España
    "potenciaCv": 272,
    "autonomiaKm": 420,
    "maleteroL": 288,
    "ceroCien": 6.7,
    "velocidadMax": 180,
    "bateriaKwh": 66,
    "cargaRapidaKw": 150,
    "etiquetaDgt": "Cero",
    "garantiaBateriaAnos": 8,
    "garantiaBateriaKm": 160000,
    "garantiaBateriaDegradacionPct": null,
    "largoMm": 4270,
    "anchoMm": 1822,
    "altoMm": 1636,
    "pesoKg": null,
    "consumo": null,
    "consumoUnidad": null,
    "plazas": 5,
    "parNm": 343,
    "traccion": "Trasera",
    "emisionesCo2": 0,
    "aprox": [],
    "pros": ["Nacido de la alianza entre Mercedes-Benz y Geely sobre la plataforma SEA, reinventa a smart como SUV urbano premium en solo 4,27 metros", "Con 420 km homologados y recarga en continua de hasta 150 kW, su batería grande permite afrontar la semana laboral sin vivir pendiente del enchufe", "El propulsor trasero entrega 272 CV y empuja con 343 Nm, firmando el salto hasta cien en 6,7 segundos con un tacto inusual entre eléctricos ciudadanos", "El techo panorámico Halo y una dotación generosa ya en este acabado lo alejan del planteamiento espartano de algunos eléctricos urbanos de corte premium", "En los ensayos europeos de choque logró la calificación máxima, un aval importante para un modelo pensado para llevar a cinco ocupantes a diario"],
    "contras": ["Dentro de la propia gama existe un escalón más barato que comparte batería y alcance, dejando a esta variante en una posición incómoda para justificar el sobreprecio", "Sorprende que la bomba de calor no figure en su equipamiento cuando sí aparece en el peldaño inferior, algo que penaliza el consumo durante los meses fríos", "Su química NMC aconseja reservar las cargas completas para viajes largos, lo que en la práctica recorta el uso cotidiano de la autonomía máxima homologada", "Un maletero de apenas 288 litros se queda corto para carrito y maletas, por debajo de lo que una familia espera frente a un MINI Aceman", "La tarifa española sigue sin confirmarse en esta ficha, un vacío que impide compararlo con cifras cerradas frente a un Volvo EX30 o un DS 3 E-Tense"],
    "imagen": "/media/smart-1-pro-plus-2025-precio-ficha-tecnica-hero.webp",
    "imagenOficial": "/media/smart-1-pro-plus-2025-precio-ficha-tecnica-oficial.webp",
    "imagenInteriorOficial": "",
    "videoId": "OF7vPd_vQ6w",
    "videoCanal": "Motorelegance",
    "opiniones": [],
    "costeMensual": {
      "costeEnergia100km": 3,
      "seguroTercerosAnual": 470,
      "seguroAmpliadoAnual": 900,
      "mantenimientoAnual": 300,
      "costeMensualTotal": 138,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.65,
      "notas": "consumo estimado aprox 16,5 kWh/100 km; recarga doméstica aprox 0,18 EUR/kWh",
      "estimado": true
    },
    "galeria": [
      {
        "src": "/media/smart-1-pro-plus-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "smart #1 Pro+, SUV eléctrico, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del smart #1 Pro+ con pantalla de 12,8 pulgadas",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/smart-1-pro-plus-2025-precio-ficha-tecnica-hero.webp",
        "alt": "smart #1 Pro+ en carretera de montaña",
        "ancho": 1200,
        "alto": 800
      }
    ],
    planMantenimiento: {"intervalo": "Mantenimiento principal cada 30.000 km o 24 meses, lo que ocurra antes", "revisiones": [{"costeAproxEur": null, "nombre": "Revisión principal (30.000 km / 24 meses)", "queSeCambia": "Operaciones e inspecciones previstas en el plan de mantenimiento principal del fabricante para el smart #1 eléctrico"}]},
  },
  {
    id: "smart-1-premium-2025-precio-ficha-tecnica",
    "marca": "smart",
    "modelo": "#1 Premium",
    "tipo": "Eléctrico",
    "categoria": "SUV",
    "precioDesde": 40700,
    "potenciaCv": 272,
    "autonomiaKm": 440,
    "maleteroL": 288,
    "ceroCien": 6.7,
    "velocidadMax": 180,
    "bateriaKwh": 66,
    "cargaRapidaKw": 150,
    "etiquetaDgt": "Cero",
    "garantiaBateriaAnos": 8,
    "garantiaBateriaKm": 160000,
    "garantiaBateriaDegradacionPct": null,
    "largoMm": 4270,
    "anchoMm": 1822,
    "altoMm": 1636,
    "pesoKg": 1788,
    "consumo": 16.7,
    "consumoUnidad": "kWh/100 km",
    "plazas": 5,
    "parNm": 343,
    "traccion": "Trasera",
    "emisionesCo2": 0,
    "aprox": [],
    "pros": [
      "440 km WLTP: la mayor autonomía de los #1 de un motor",
      "40.700 € (km77, tarifa 08/2026): el tope de gama racional",
      "Bomba de calor, 22 kW en alterna y 150 kW en continua",
      "Interior premium con pantalla de 12,8\" y techo Halo",
      "16,7 kWh/100 km WLTP: el más eficiente de la gama"
    ],
    "contras": [
      "5.100 € más que el Pure+ por 20 km y equipamiento",
      "El Pulse añade la tracción total por solo 466 € más",
      "Batería NMC: mejor no cargarla al 100 % a diario",
      "Maletero de 288 L",
      "1.788 kg: se nota en consumos reales"
    ],
    "imagen": "/media/smart-1-premium-2025-precio-ficha-tecnica-hero.webp",
    "imagenOficial": "/media/smart-1-premium-2025-precio-ficha-tecnica-oficial.webp",
    "imagenInteriorOficial": "",
    "videoId": "OF7vPd_vQ6w",
    "videoCanal": "Motorelegance",
    "opiniones": [],
    "costeMensual": {
      "costeEnergia100km": 3,
      "seguroTercerosAnual": 480,
      "seguroAmpliadoAnual": 920,
      "mantenimientoAnual": 300,
      "costeMensualTotal": 139,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.65,
      "notas": "consumo WLTP 16,7 kWh/100 km; recarga doméstica aprox 0,18 EUR/kWh",
      "estimado": true
    },
    "galeria": [
      {
        "src": "/media/smart-1-premium-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "smart #1 Premium, SUV eléctrico, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior premium del smart #1 Premium con pantalla de 12,8 pulgadas",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/smart-1-premium-2025-precio-ficha-tecnica-hero.webp",
        "alt": "smart #1 Premium en color cobre al atardecer",
        "ancho": 1200,
        "alto": 800
      }
    ]
  },
  {
    id: "smart-1-pulse-2025-precio-ficha-tecnica",
    "marca": "smart",
    "modelo": "#1 Pulse",
    "tipo": "Eléctrico",
    "categoria": "SUV",
    "precioDesde": 41166,
    "potenciaCv": 428,
    "autonomiaKm": 400,
    "maleteroL": 288,
    "ceroCien": null,
    "velocidadMax": 180,
    "bateriaKwh": 66,
    "cargaRapidaKw": 150,
    "etiquetaDgt": "Cero",
    "garantiaBateriaAnos": 8,
    "garantiaBateriaKm": 160000,
    "garantiaBateriaDegradacionPct": null,
    "largoMm": 4270,
    "anchoMm": 1822,
    "altoMm": 1636,
    "pesoKg": null,
    "consumo": null,
    "consumoUnidad": null,
    "plazas": 5,
    "parNm": 543,
    "traccion": "Total",
    "emisionesCo2": 0,
    "aprox": [
      "autonomiaKm"
    ],
    "pros": ["Es el salto a los dos motores sin pagar el Brabus: 428 CV y el 0 a 100 en 4,5 segundos dentro de un B-SUV de solo 4,27 metros", "41.166 € según km77 (tarifa 12/2025): por 466 € más que el Premium cambia el motor trasero único por tracción a las cuatro ruedas", "Enchufa como los grandes de la casa: 150 kW en continua para recuperar del 10 al 80 % en media hora escasa y cargador de 22 kW en alterna", "También trabaja remolcando: admite hasta 1.600 kg con freno, una cifra rara en un eléctrico compacto de este tamaño", "Su carrocería firmó un 96 % en protección de adultos en Euro NCAP 2022, por encima del Tesla Model S probado aquel mismo año"],
    "contras": ["Sus 400 km WLTP se quedan 40 por debajo del Premium de un solo motor, que anuncia 440 llevando idéntica batería de 66 kWh", "El Brabus comparte motores y batería y baja hasta 3,9 segundos: el Pulse ahorra 5.044 €, pero renuncia a su chasis específico y a su imagen", "Homologa 18,2 kWh/100 km según JATO: en autopista el segundo motor se cobra su peaje en consumo y en paradas de carga", "El maletero de 288 litros que recoge esta ficha se queda corto para cinco ocupantes en un viaje largo con equipaje", "Ronda las 1,9 toneladas con conductor según JATO: frenos y neumáticos trabajarán como los de un SUV de un segmento superior"],
    "imagen": "/media/smart-1-pulse-2025-precio-ficha-tecnica-hero.webp",
    "imagenOficial": "/media/smart-1-pulse-2025-precio-ficha-tecnica-oficial.webp",
    "imagenInteriorOficial": "",
    "videoId": null,
    "videoCanal": null,
    "opiniones": [],
    "costeMensual": {"costeEnergia100km": 3.2, "costeMensualTotal": 150, "estimado": true, "mantenimientoAnual": 320, "notas": "Nota pensada solo para el Pulse: JATO le homologa 18,2 kWh cada cien kilómetros, empatado con el Brabus como el gasto mayor de la gama #1; la tabla parte de unos 18 y, enchufando en el garaje a 0,18 euros el kWh, deja la energía en 3,2 euros por cada 100 km recorridos", "precioGasolinaL": 1.65, "precioKwh": 0.18, "seguroAmpliadoAnual": 1000, "seguroTercerosAnual": 500},
    "galeria": [
      {
        "src": "/media/smart-1-pulse-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "smart #1 Pulse, SUV eléctrico deportivo, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del smart #1 Pulse con detalles deportivos",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/smart-1-pulse-2025-precio-ficha-tecnica-hero.webp",
        "alt": "smart #1 Pulse en una carretera de curvas",
        "ancho": 1200,
        "alto": 800
      }
    ],
    euroncap: {"ano": 2022, "estrellas": 5, "nota": "Cinco estrellas en la prueba de 2022 de la gama #1: 96 % en ocupante adulto, 89 % en infantil, 71 % en usuarios vulnerables y 88 % en asistentes. La unidad ensayada fue la de un solo motor trasero con la batería de 66 kWh y la calificación cubre toda la gama, incluido este Pulse de dos motores", "url": "https://www.euroncap.com/en/results/smart/%231/48000"},
    planMantenimiento: {"costeAnualAproxEur": null, "fuente": "Intervalo: datos JATO de la gama smart #1 publicados por quecochemecompro (mantenimiento principal cada 30.000 km y 24 meses para el #1 eléctrico). smart no publica precio cerrado de la revisión en España: costes sin dato", "intervalo": "Mantenimiento principal cada 30.000 km o 24 meses, lo que ocurra antes", "revisiones": [{"costeAproxEur": null, "nombre": "Revisión principal de los 30.000 km o 2 años", "queSeCambia": "En el taller revisan ambos propulsores eléctricos y el pack NMC de 66 kWh, miran pastillas, discos y gomas, comprueban el circuito de refrigeración y la electrónica de potencia y renuevan el filtro de polen; el líquido de frenos se sustituye cuando lo marque el programa de la marca. Aceite de motor no hay que cambiar: el Pulse es eléctrico puro y esa partida desaparece"}]},
  },
  {
    id: "smart-1-brabus-2025-precio-ficha-tecnica",
    "marca": "smart",
    "modelo": "#1 Brabus",
    "tipo": "Eléctrico",
    "categoria": "SUV",
    "precioDesde": 46210,
    "potenciaCv": 428,
    "autonomiaKm": 400,
    "maleteroL": 313,
    "ceroCien": 3.9,
    "velocidadMax": 180,
    "bateriaKwh": 66,
    "cargaRapidaKw": 150,
    "etiquetaDgt": "Cero",
    "garantiaBateriaAnos": 8,
    "garantiaBateriaKm": 160000,
    "garantiaBateriaDegradacionPct": null,
    "largoMm": 4300,
    "anchoMm": 1822,
    "altoMm": 1636,
    "pesoKg": 1900,
    "consumo": 18.2,
    "consumoUnidad": "kWh/100 km",
    "plazas": 5,
    "parNm": 543,
    "traccion": "Total",
    "emisionesCo2": 0,
    "aprox": [],
    "pros": [
      "428 CV y 543 Nm: 0-100 en 3,9 s, el #1 más rápido",
      "46.210 € (km77): el Brabus más asequible de la historia",
      "Chasis específico Brabus con puesta a punto deportiva",
      "400 km WLTP y 150 kW de carga (10-80 % en 30 min)",
      "Estética Brabus con detalles en rojo y llantas de 19\""
    ],
    "contras": [
      "5.044 € más que el Pulse con el mismo tren motriz",
      "18,2 kWh/100 km WLTP: en autopista supera los 22",
      "1.900 kg: se nota en consumo y agilidad",
      "Maletero de 313 L: mejorable",
      "Autonomía real en conducción deportiva, muy lejos de 400 km"
    ],
    "imagen": "/media/smart-1-brabus-2025-precio-ficha-tecnica-hero.webp",
    "imagenOficial": "/media/smart-1-brabus-2025-precio-ficha-tecnica-oficial.webp",
    "imagenInteriorOficial": "",
    "videoId": null,
    "videoCanal": null,
    "opiniones": [],
    "costeMensual": {
      "costeEnergia100km": 3.3,
      "seguroTercerosAnual": 520,
      "seguroAmpliadoAnual": 1050,
      "mantenimientoAnual": 320,
      "costeMensualTotal": 155,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.65,
      "notas": "consumo WLTP 18,2 kWh/100 km; recarga doméstica aprox 0,18 EUR/kWh",
      "estimado": true
    },
    "galeria": [
      {
        "src": "/media/smart-1-brabus-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "smart #1 Brabus, tres cuartos delantero con detalles en rojo",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del smart #1 Brabus con costuras en rojo",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/smart-1-brabus-2025-precio-ficha-tecnica-hero.webp",
        "alt": "smart #1 Brabus acelerando en circuito",
        "ancho": 1200,
        "alto": 800
      }
    ]
  },
  {
    id: "smart-3-pro-2025-precio-ficha-tecnica",
    "marca": "smart",
    "modelo": "#3 Pro",
    "tipo": "Eléctrico",
    "categoria": "SUV",
    "precioDesde": 36600, // media.smart.com oficial: #3 Pro desde 36.600 € sin MOVES
    "potenciaCv": 272,
    "autonomiaKm": 325,
    "maleteroL": 370,
    "ceroCien": 6.5,
    "velocidadMax": 180,
    "bateriaKwh": 49,
    "cargaRapidaKw": 130,
    "etiquetaDgt": "Cero",
    "garantiaBateriaAnos": 8,
    "garantiaBateriaKm": 160000,
    "garantiaBateriaDegradacionPct": null,
    "largoMm": 4440,
    "anchoMm": 1844,
    "altoMm": 1556,
    "pesoKg": null,
    "consumo": null,
    "consumoUnidad": null,
    "plazas": 5,
    "parNm": 343,
    "traccion": "Trasera",
    "emisionesCo2": 0,
    "aprox": [],
    "pros": [
      "SUV coupé con 272 CV y tracción trasera: el #3 más divertido de acceso",
      "Batería LFP de 49 kWh: admite el 100 % diario sin degradar",
      "325 km WLTP, 15 más que el #1 con la misma batería",
      "Diseño coupé con Cx de 0,27: el más aerodinámico de smart",
      "Maletero de 370 L + 15 L delantero: más práctico que el #1"
    ],
    "contras": [
      "El #3 base ya ofrece 455 km por 38.950 €: compite en casa",
      "325 km: corto para un coche de 4,44 m",
      "Carga rápida de 130 kW, menos que los 150 del #1",
      "La caída del techo penaliza las plazas traseras altas",
      "Precio actual sin confirmar en tarifa"
    ],
    "imagen": "/media/smart-3-pro-2025-precio-ficha-tecnica-hero.webp",
    "imagenOficial": "/media/smart-3-pro-2025-precio-ficha-tecnica-oficial.webp",
    "imagenInteriorOficial": "",
    "videoId": "ckVx0oR_Vs8",
    "videoCanal": "ElectroExamen",
    "opiniones": [],
    "costeMensual": {
      "costeEnergia100km": 3,
      "seguroTercerosAnual": 460,
      "seguroAmpliadoAnual": 880,
      "mantenimientoAnual": 290,
      "costeMensualTotal": 135,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.65,
      "notas": "consumo estimado aprox 16,5 kWh/100 km; recarga doméstica aprox 0,18 EUR/kWh",
      "estimado": true
    },
    "galeria": [
      {
        "src": "/media/smart-3-pro-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "smart #3 Pro, SUV coupé eléctrico, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del smart #3 Pro con pantalla central",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/smart-3-pro-2025-precio-ficha-tecnica-hero.webp",
        "alt": "smart #3 Pro en una carretera costera",
        "ancho": 1200,
        "alto": 800
      }
    ]
  },
  {
    id: "smart-3-pro-plus-2025-precio-ficha-tecnica",
    "marca": "smart",
    "modelo": "#3 Pro+",
    "tipo": "Eléctrico",
    "categoria": "SUV",
    "precioDesde": null, // Tarifa oficial solo en el configurador de smart España (es.smart.com); sin precio público de esta versión como texto indexado
    "potenciaCv": 272,
    "autonomiaKm": 435,
    "maleteroL": 370,
    "ceroCien": 6.5,
    "velocidadMax": 180,
    "bateriaKwh": 66,
    "cargaRapidaKw": 150,
    "etiquetaDgt": "Cero",
    "garantiaBateriaAnos": 8,
    "garantiaBateriaKm": 160000,
    "garantiaBateriaDegradacionPct": null,
    "largoMm": 4440,
    "anchoMm": 1844,
    "altoMm": 1556,
    "pesoKg": null,
    "consumo": null,
    "consumoUnidad": null,
    "plazas": 5,
    "parNm": 343,
    "traccion": "Trasera",
    "emisionesCo2": 0,
    "aprox": [],
    "pros": ["Sus 435 km homologados dan margen de sobra para el día a día y para escapadas de fin de semana sin vivir pendiente del cargador", "El motor trasero entrega 272 CV y 343 Nm sobre la plataforma SEA de Geely, firma el sprint hasta 100 en 6,5 segundos y se nota inmediato al salir de cada rotonda", "La batería de 66 kWh admite carga rápida de 150 kW, así que las paradas en ruta se resuelven en una pausa breve de café", "Frente al #1, más urbano y vertical, aquí la silueta coupé y los 4.440 mm de largo le dan una presencia más viajera y deportiva", "Los 370 litros de maletero y las cinco plazas lo postulan frente al Volvo EX30 como coche único para una familia pequeña"],
    "contras": ["Quien busque el máximo alcance dentro de la gama tendrá que subir al acabado Premium, porque este Pro+ se queda como escalón intermedio", "No existe opción de tracción total en esta versión; esa configuración queda reservada a la variante Brabus, más radical y costosa", "Para cuidar la batería en el uso diario conviene evitar dejarla habitualmente al máximo de carga, algo que exige cierta disciplina al propietario", "La caída del techo penaliza la altura libre de los pasajeros adultos que viajen en la segunda fila en trayectos largos", "La tarifa vigente en España no figura confirmada en la ficha, así que toca contrastar el importe final con la red comercial antes de decidir frente a un Renault Scénic E-Tech o un Peugeot E-3008"],
    "imagen": "/media/smart-3-pro-plus-2025-precio-ficha-tecnica-hero.webp",
    "imagenOficial": "/media/smart-3-pro-plus-2025-precio-ficha-tecnica-oficial.webp",
    "imagenInteriorOficial": "",
    "videoId": "ckVx0oR_Vs8",
    "videoCanal": "ElectroExamen",
    "opiniones": [],
    "costeMensual": {
      "costeEnergia100km": 3,
      "seguroTercerosAnual": 470,
      "seguroAmpliadoAnual": 900,
      "mantenimientoAnual": 300,
      "costeMensualTotal": 138,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.65,
      "notas": "consumo estimado aprox 16,5 kWh/100 km; recarga doméstica aprox 0,18 EUR/kWh",
      "estimado": true
    },
    "galeria": [
      {
        "src": "/media/smart-3-pro-plus-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "smart #3 Pro+, SUV coupé eléctrico, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del smart #3 Pro+ con acabados premium",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/smart-3-pro-plus-2025-precio-ficha-tecnica-hero.webp",
        "alt": "smart #3 Pro+ en una autopista al amanecer",
        "ancho": 1200,
        "alto": 800
      }
    ]
  },
  {
    id: "smart-5-pro-2025-precio-ficha-tecnica",
    "marca": "smart",
    "modelo": "#5 Pro",
    "tipo": "Eléctrico",
    "categoria": "SUV",
    "precioDesde": 48000,
    "potenciaCv": 340,
    "autonomiaKm": 465,
    "maleteroL": 630,
    "ceroCien": null,
    "velocidadMax": 200,
    "bateriaKwh": 76,
    "cargaRapidaKw": 400,
    "etiquetaDgt": "Cero",
    "garantiaBateriaAnos": 8,
    "garantiaBateriaKm": 160000,
    "garantiaBateriaDegradacionPct": null,
    "largoMm": 4710,
    "anchoMm": 1920,
    "altoMm": 1710,
    "pesoKg": null,
    "consumo": null,
    "consumoUnidad": null,
    "plazas": 5,
    "parNm": 373,
    "traccion": "Trasera",
    "emisionesCo2": 0,
    "aprox": [
      "autonomiaKm",
      "ceroCien"
    ],
    "pros": [
      "48.000 €: el #5 más asequible, 5.000 € menos que el Pro+",
      "Batería LFP de 76 kWh: la mayor LFP de smart, admite el 100 % diario",
      "340 CV con tracción trasera",
      "Arquitectura de 800 V: cargas ultrarrápidas",
      "Maletero de 630 L, el más grande de smart"
    ],
    "contras": [
      "Autonomía aprox 465 km: 125 menos que el Pro+",
      "Sin la batería de 100 kWh ni los 590 km del Pro+",
      "Tamaño XL (4,71 m): aparcar en ciudad cuesta",
      "0-100 sin dato oficial publicado",
      "Red smart pequeña para un coche de este precio"
    ],
    "imagen": "/media/smart-5-pro-2025-precio-ficha-tecnica-hero.webp",
    "imagenOficial": "/media/smart-5-pro-2025-precio-ficha-tecnica-oficial.webp",
    "imagenInteriorOficial": "",
    "videoId": null,
    "videoCanal": null,
    "opiniones": [],
    "costeMensual": {
      "costeEnergia100km": 3.4,
      "seguroTercerosAnual": 520,
      "seguroAmpliadoAnual": 1000,
      "mantenimientoAnual": 320,
      "costeMensualTotal": 153,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.65,
      "notas": "consumo estimado aprox 19 kWh/100 km; recarga doméstica aprox 0,18 EUR/kWh; autonomía aprox 465 km",
      "estimado": true
    },
    "galeria": [
      {
        "src": "/media/smart-5-pro-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "smart #5 Pro, SUV eléctrico grande, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del smart #5 Pro con triple pantalla",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/smart-5-pro-2025-precio-ficha-tecnica-hero.webp",
        "alt": "smart #5 Pro en una carretera de montaña",
        "ancho": 1200,
        "alto": 800
      }
    ]
  },
  {
    id: "smart-5-pro-plus-2025-precio-ficha-tecnica",
    "marca": "smart",
    "modelo": "#5 Pro+",
    "tipo": "Eléctrico",
    "categoria": "SUV",
    "precioDesde": 53000,
    "potenciaCv": 363,
    "autonomiaKm": 590,
    "maleteroL": 630,
    "ceroCien": 6.5,
    "velocidadMax": 200,
    "bateriaKwh": 100,
    "cargaRapidaKw": 400,
    "etiquetaDgt": "Cero",
    "garantiaBateriaAnos": 8,
    "garantiaBateriaKm": 160000,
    "garantiaBateriaDegradacionPct": null,
    "largoMm": 4710,
    "anchoMm": 1920,
    "altoMm": 1710,
    "pesoKg": null,
    "consumo": null,
    "consumoUnidad": null,
    "plazas": 5,
    "parNm": 373,
    "traccion": "Trasera",
    "emisionesCo2": 0,
    "aprox": [
      "cargaRapidaKw"
    ],
    "pros": [
      "590 km WLTP: la mayor autonomía de todo smart",
      "53.000 €: 5.000 € menos que el Premium con lo esencial",
      "363 CV con tracción trasera y 0-100 en 6,5 s",
      "Batería de 100 kWh con arquitectura de 800 V",
      "Maletero de 630 L y batalla de 2,9 m: habitabilidad XL"
    ],
    "contras": [
      "Batería NMC: mejor no cargarla al 100 % a diario",
      "Sin el equipamiento top del Premium (misma batería)",
      "4,71 m de largo: no es un coche de ciudad",
      "Carga DC de hasta 400 kW (dato aprox., según versión)",
      "A este precio, el Tesla Model Y compite duro"
    ],
    "imagen": "/media/smart-5-pro-plus-2025-precio-ficha-tecnica-hero.webp",
    "imagenOficial": "/media/smart-5-pro-plus-2025-precio-ficha-tecnica-oficial.webp",
    "imagenInteriorOficial": "",
    "videoId": "Lrlr3Fx3Crk",
    "videoCanal": "PureGrip",
    "opiniones": [],
    "costeMensual": {
      "costeEnergia100km": 3.3,
      "seguroTercerosAnual": 540,
      "seguroAmpliadoAnual": 1050,
      "mantenimientoAnual": 340,
      "costeMensualTotal": 157,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.65,
      "notas": "consumo estimado aprox 18,5 kWh/100 km; recarga doméstica aprox 0,18 EUR/kWh; carga DC aprox 400 kW",
      "estimado": true
    },
    "galeria": [
      {
        "src": "/media/smart-5-pro-plus-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "smart #5 Pro+, SUV eléctrico grande, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del smart #5 Pro+ con triple pantalla",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/smart-5-pro-plus-2025-precio-ficha-tecnica-hero.webp",
        "alt": "smart #5 Pro+ en una autopista europea",
        "ancho": 1200,
        "alto": 800
      }
    ]
  },
  {
    id: "smart-5-premium-2025-precio-ficha-tecnica",
    "marca": "smart",
    "modelo": "#5 Premium",
    "tipo": "Eléctrico",
    "categoria": "SUV",
    "precioDesde": 57500,
    "potenciaCv": 363,
    "autonomiaKm": 590,
    "maleteroL": 630,
    "ceroCien": 6.5,
    "velocidadMax": 200,
    "bateriaKwh": 100,
    "cargaRapidaKw": 400,
    "etiquetaDgt": "Cero",
    "garantiaBateriaAnos": 8,
    "garantiaBateriaKm": 160000,
    "garantiaBateriaDegradacionPct": null,
    "largoMm": 4710,
    "anchoMm": 1920,
    "altoMm": 1710,
    "pesoKg": null,
    "consumo": null,
    "consumoUnidad": null,
    "plazas": 5,
    "parNm": 373,
    "traccion": "Trasera",
    "emisionesCo2": 0,
    "aprox": [
      "cargaRapidaKw"
    ],
    "pros": ["Autonomía homologada de 590 kilómetros que permite afrontar viajes largos sin encadenar paradas constantes", "Empuje de 363 CV enviado al eje posterior, con salida hasta cien en 6,5 segundos", "Admite recargas de hasta 400 kW apoyándose en su plataforma de ochocientos voltios y acumulador de 100 kWh", "Cabina planteada como salón rodante, con tres pantallas seguidas y butacas especialmente mullidas en trayectos largos", "Ningún smart anterior fue tan grande: sus 630 litros de maletero resumen el salto de la etapa Geely"],
    "contras": ["Pagar 57.500 euros duele cuando el Pro+ recurre al mismo conjunto propulsor y resulta claramente más asequible", "Por idéntica tarifa, el Pulse incorpora tracción integral, dejando a este Premium en una posición comercial incómoda", "La química NMC desaconseja abusar de cargas completas si pretendes preservar la salud del acumulador con los años", "Moverse a diario entre garajes estrechos se complica con 1,92 metros de anchura y 4,71 de longitud", "En este escalón ya acechan Tesla Model Y, Hyundai Ioniq 5, Kia EV6 y alternativas alemanas con red consolidada"],
    "imagen": "/media/smart-5-premium-2025-precio-ficha-tecnica-hero.webp",
    "imagenOficial": "/media/smart-5-premium-2025-precio-ficha-tecnica-oficial.webp",
    "imagenInteriorOficial": "",
    "videoId": null,
    "videoCanal": null,
    "opiniones": [],
    "costeMensual": {
      "costeEnergia100km": 3.3,
      "seguroTercerosAnual": 550,
      "seguroAmpliadoAnual": 1080,
      "mantenimientoAnual": 340,
      "costeMensualTotal": 160,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.65,
      "notas": "consumo estimado aprox 18,5 kWh/100 km; recarga doméstica aprox 0,18 EUR/kWh; carga DC aprox 400 kW",
      "estimado": true
    },
    "galeria": [
      {
        "src": "/media/smart-5-premium-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "smart #5 Premium, SUV eléctrico grande, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior lounge del smart #5 Premium con triple pantalla",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/smart-5-premium-2025-precio-ficha-tecnica-hero.webp",
        "alt": "smart #5 Premium en un entorno urbano premium",
        "ancho": 1200,
        "alto": 800
      }
    ]
  },
  {
    id: "smart-5-pulse-2025-precio-ficha-tecnica",
    "marca": "smart",
    "modelo": "#5 Pulse",
    "tipo": "Eléctrico",
    "categoria": "SUV",
    "precioDesde": 57500,
    "potenciaCv": 587,
    "autonomiaKm": 540,
    "maleteroL": 630,
    "ceroCien": null,
    "velocidadMax": 210,
    "bateriaKwh": 100,
    "cargaRapidaKw": 400,
    "etiquetaDgt": "Cero",
    "garantiaBateriaAnos": 8,
    "garantiaBateriaKm": 160000,
    "garantiaBateriaDegradacionPct": null,
    "largoMm": 4710,
    "anchoMm": 1920,
    "altoMm": 1710,
    "pesoKg": null,
    "consumo": null,
    "consumoUnidad": null,
    "plazas": 5,
    "parNm": null,
    "traccion": "Total",
    "emisionesCo2": 0,
    "aprox": [
      "potenciaCv",
      "autonomiaKm",
      "cargaRapidaKw"
    ],
    "pros": ["Es la puerta de entrada a la tracción total en el #5: dos motores, uno por eje, que suman 587 CV y dejan el sprint hasta 100 km/h en 4,9 segundos", "Cuesta lo mismo que el Premium, 57.500 euros, pero juega a otra cosa: cambia el salón rodante de tracción trasera por un segundo motor, tracción integral inteligente y 224 CV extra", "Su cabina se reconoce por la doble pantalla central OLED en formato extra ancho, y suma bomba de calor para que el invierno no se coma la autonomía", "Llega con el sello de SUV grande mejor puntuado por Euro NCAP en 2025: 93 % en protección infantil y 92 % en asistentes, las notas más altas de su año en ambas áreas", "También trabaja cargando: 630 litros de maletero trasero, otros 47 en el delantero y hasta 1.600 kg de remolque con freno si se equipa el enganche"],
    "contras": ["Su consumo homologado de 19,9 kWh/100 km empata con el del Brabus como el más alto de la gama: por eso se queda en 540 km mientras las versiones de un solo motor anuncian 590", "Pesa 2.345 kg en vacío y calza neumáticos 255/45 R20: el gasto en gomas y frenos será el de un SUV grande, no el de los smart urbanos de antes", "El pack NMC de 94 kWh útiles pide mesura al enchufar cada noche: reservar la carga completa para los días de viaje largo ayuda a cuidar su degradación", "Quien busque lo máximo de la casa lo tiene a 6.160 euros de distancia: el Brabus suma 59 CV y un chasis con su firma, y deja al Pulse en un punto intermedio incómodo", "Mide 4,71 metros de largo y es el smart más familiar y menos urbano de la historia de la marca: en un garaje estrecho se nota cada centímetro de más"],
    "imagen": "/media/smart-5-pulse-2025-precio-ficha-tecnica-hero.webp",
    "imagenOficial": "/media/smart-5-pulse-2025-precio-ficha-tecnica-oficial.webp",
    "imagenInteriorOficial": "",
    "videoId": null,
    "videoCanal": null,
    "opiniones": [],
    "costeMensual": {"costeEnergia100km": 3.8, "seguroTercerosAnual": 560, "seguroAmpliadoAnual": 1150, "mantenimientoAnual": 360, "costeMensualTotal": 173, "precioKwh": 0.18, "precioGasolinaL": 1.65, "notas": "Cálculo pensado solo para el Pulse: se toma su consumo homologado con dos motores, 19,9 kWh/100 km, y se eleva hasta unos 21 para acercarlo al gasto real con tracción total; cargando en casa a 0,18 euros el kWh salen los 3,8 euros por cada 100 km que recoge la tabla", "estimado": true},
    "galeria": [
      {
        "src": "/media/smart-5-pulse-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "smart #5 Pulse, SUV eléctrico deportivo, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del smart #5 Pulse con detalles deportivos",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/smart-5-pulse-2025-precio-ficha-tecnica-hero.webp",
        "alt": "smart #5 Pulse en una carretera de montaña",
        "ancho": 1200,
        "alto": 800
      }
    ],
    euroncap: {"estrellas": 5, "ano": 2025, "url": "https://www.euroncap.com/press-media/euro-ncap-names-best-in-class-cars-tested-in-2025/", "nota": "Cinco estrellas Euro NCAP en 2025 y premio Best in Class entre los SUV grandes del año: 88 % en ocupante adulto, 93 % en infantil, 84 % en usuarios vulnerables y 92 % en asistentes. La unidad evaluada fue un #5 Pro y la calificación es la de la gama #5"},
    planMantenimiento: {"intervalo": "Mantenimiento principal cada 30.000 km o 24 meses, lo que ocurra antes", "revisiones": [{"nombre": "Revisión principal de los 30.000 km o 2 años", "queSeCambia": "Inspección completa del tren eléctrico de dos motores y de la batería NMC de alta tensión, con control de frenos, neumáticos, refrigeración y electrónica, y sustitución del filtro del habitáculo y del líquido de frenos cuando lo marque el programa de la marca; no hay aceite de motor que cambiar porque es un eléctrico puro", "costeAproxEur": null}], "costeAnualAproxEur": null, "fuente": "Intervalo: datos JATO de la gama smart #5 publicados por quecochemecompro para los acabados Premium y Brabus (mismo programa de mantenimiento principal para el #5). smart no publica precio cerrado de la revisión en España: costes sin dato"},
  },
  {
    id: "smart-5-summit-edition-2025-precio-ficha-tecnica",
    "marca": "smart",
    "modelo": "#5 Summit Edition",
    "tipo": "Eléctrico",
    "categoria": "SUV",
    "precioDesde": 59000,
    "potenciaCv": 587,
    "autonomiaKm": 540,
    "maleteroL": 630,
    "ceroCien": null,
    "velocidadMax": 210,
    "bateriaKwh": 100,
    "cargaRapidaKw": 400,
    "etiquetaDgt": "Cero",
    "garantiaBateriaAnos": 8,
    "garantiaBateriaKm": 160000,
    "garantiaBateriaDegradacionPct": null,
    "largoMm": 4710,
    "anchoMm": 1920,
    "altoMm": 1710,
    "pesoKg": null,
    "consumo": null,
    "consumoUnidad": null,
    "plazas": 5,
    "parNm": null,
    "traccion": "Total",
    "emisionesCo2": 0,
    "aprox": [
      "potenciaCv",
      "autonomiaKm",
      "cargaRapidaKw"
    ],
    "pros": [
      "Edición aventurera con pack off-road: baca, escalera y protecciones",
      "587 CV con tracción total (dato aprox.) y 540 km",
      "59.000 €: el #5 más exclusivo sin llegar al Brabus",
      "Batería de 100 kWh con arquitectura de 800 V",
      "Maletero de 630 L más accesorios de expedición"
    ],
    "contras": [
      "El pack aventurero penaliza aerodinámica y consumo",
      "1.500 € más que el Pulse con la misma base mecánica",
      "Batería NMC: mejor no cargarla al 100 % a diario",
      "Edición limitada: disponibilidad reducida",
      "No es un todoterreno de verdad (sin reductora)"
    ],
    "imagen": "/media/smart-5-summit-edition-2025-precio-ficha-tecnica-hero.webp",
    "imagenOficial": "/media/smart-5-summit-edition-2025-precio-ficha-tecnica-oficial.webp",
    "imagenInteriorOficial": "",
    "videoId": "4tPvOgv5uyc",
    "videoCanal": null,
    "opiniones": [],
    "costeMensual": {
      "costeEnergia100km": 3.8,
      "seguroTercerosAnual": 560,
      "seguroAmpliadoAnual": 1150,
      "mantenimientoAnual": 360,
      "costeMensualTotal": 173,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.65,
      "notas": "consumo estimado aprox 21 kWh/100 km; recarga doméstica aprox 0,18 EUR/kWh; potencia y autonomía aproximadas",
      "estimado": true
    },
    "galeria": [
      {
        "src": "/media/smart-5-summit-edition-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "smart #5 Summit Edition con baca y accesorios de expedición",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del smart #5 Summit Edition",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/smart-5-summit-edition-2025-precio-ficha-tecnica-hero.webp",
        "alt": "smart #5 Summit Edition en una pista de tierra",
        "ancho": 1200,
        "alto": 800
      }
    ]
  },
  {
    id: "smart-5-brabus-2025-precio-ficha-tecnica",
    "marca": "smart",
    "modelo": "#5 Brabus",
    "tipo": "Eléctrico",
    "categoria": "SUV",
    "precioDesde": 63850, // tarifa oficial España (verificado 20/10/2026)
    "potenciaCv": 646,
    "autonomiaKm": 540,
    "maleteroL": 630,
    "ceroCien": 3.8,
    "velocidadMax": 210,
    "bateriaKwh": 100,
    "cargaRapidaKw": 400,
    "etiquetaDgt": "Cero",
    "garantiaBateriaAnos": 8,
    "garantiaBateriaKm": 160000,
    "garantiaBateriaDegradacionPct": null,
    "largoMm": 4710,
    "anchoMm": 1920,
    "altoMm": 1710,
    "pesoKg": null,
    "consumo": null,
    "consumoUnidad": null,
    "plazas": 5,
    "parNm": null,
    "traccion": "Total",
    "emisionesCo2": 0,
    "aprox": [
      "autonomiaKm",
      "cargaRapidaKw"
    ],
    "pros": [
      "646 CV: el smart más potente de la historia, 0-100 en 3,8 s",
      "63.660 € aprox.: prestaciones de superdeportivo en SUV familiar",
      "Chasis específico Brabus",
      "Batería de 100 kWh con arquitectura de 800 V",
      "≈540 km de autonomía (dato aproximado)"
    ],
    "contras": [
      "6.160 € más que el Pulse por 59 CV y el chasis",
      "Consumo real muy alto si se usa la potencia",
      "Batería NMC: mejor no cargarla al 100 % a diario",
      "4,71 m y más de 2,2 t estimadas: física implacable",
      "Precio de tarifa oficial en España (63.850 €): territorio premium para un smart"
    ],
    "imagen": "/media/smart-5-brabus-2025-precio-ficha-tecnica-hero.webp",
    "imagenOficial": "/media/smart-5-brabus-2025-precio-ficha-tecnica-oficial.webp",
    "imagenInteriorOficial": "",
    "videoId": null,
    "videoCanal": null,
    "opiniones": [],
    "costeMensual": {
      "costeEnergia100km": 4,
      "seguroTercerosAnual": 580,
      "seguroAmpliadoAnual": 1250,
      "mantenimientoAnual": 380,
      "costeMensualTotal": 186,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.65,
      "notas": "consumo estimado aprox 22 kWh/100 km; recarga doméstica aprox 0,18 EUR/kWh; precio y autonomía aproximados",
      "estimado": true
    },
    "galeria": [
      {
        "src": "/media/smart-5-brabus-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "smart #5 Brabus, tres cuartos delantero con llantas Brabus",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del smart #5 Brabus con detalles en rojo",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/smart-5-brabus-2025-precio-ficha-tecnica-hero.webp",
        "alt": "smart #5 Brabus en circuito",
        "ancho": 1200,
        "alto": 800
      }
    ]
  }
];
