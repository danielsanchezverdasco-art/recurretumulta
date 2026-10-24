// XPeng — gama real 2024+ vendida en España/Europa (3 fichas nuevas).
// Fecha de verificación: 05/10/2026.
// Fuentes: soloauto.net, pruebatucoche.es, coches.net (noticias y renting),
// movilidadelectrica.com, testcoches.es, forococheselectricos.com,
// autocasion.com, somoselectricos.com, hibridosyelectricos.com,
// carwow.es, driveduel.de, evkx.net, DGT.
// Las 2 fichas XPeng ya existentes viven en comparador-coches-data.ts
// (G6 2026 restyling) y comparador-coches-nuevos.ts (P7+: el id dice
// "p7-electrico" pero el contenido es el P7+, con blog e imágenes propios);
// aquí solo los 3 modelos nuevos: G9 2026, X9 y P7 clásico.
// Modelos descartados por no venderse en Europa (sin precio verificable):
// P5 (solo China), Mona M03 (lanzamiento europeo anunciado pero sin fecha
// ni precios), G7 (solo China), G9L (presentado, aún no a la venta).
import type { CocheComparador } from "./comparador-coches-data.ts";

export const COCHES_XPENG: CocheComparador[] = [
  {
    id: "xpeng-g9-2026-restyling-precio-espana",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/xpeng-g9-2026-restyling-precio-espana-oficial.webp",
    imagenInteriorOficial: "",
    videoId: "FuSBoE9yENk",
    videoCanal: "PruebaTuCoche",
    marca: "XPeng",
    modelo: "G9 2026",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: 58590, // Precio «desde» en oferta del dealer Caetano, 21/10/2026 (sin condiciones detalladas); tarifa oficial sin cambios: 59.990 €,
    potenciaCv: 351,
    autonomiaKm: 502,
    maleteroL: 660,
    ceroCien: 6.6,
    velocidadMax: 200,
    bateriaKwh: 79,
    cargaRapidaKw: 525,
    etiquetaDgt: "Cero",
    pros: [
      "El G9 2026 carga a 525 kW, del 10 % al 80 % en 12 minutos: el eléctrico que más rápido carga de Europa.",
      "Toda la gama monta baterías LFP, más baratas, estables y duraderas que las NCM.",
      "La versión Long Range anuncia hasta 585 km WLTP combinados, 756 km en ciudad.",
      "El interior es premium, con pantalla de 14,96 pulgadas, masaje Shiatsu de 10 puntos y techo panorámico.",
      "Tiene 5 estrellas Euro NCAP, etiqueta Cero y garantía de 5 años o 120.000 km.",
    ],
    contras: [
      "Desde 58.590 euros, sale más caro que un Tesla Model Y o un Kia EV9 de acceso.",
      "La marca sigue siendo poco conocida en España, con una red de concesionarios en crecimiento.",
      "El software, con asistentes, llave digital y climatización, recibe críticas de propietarios.",
      "Sus 2.210 kg hacen que el consumo real en autopista se dispare hasta 22 o 23,5 kWh cada 100 km.",
      "Para aprovechar los 525 kW hace falta un cargador de más de 500 kW, que casi no existe en España.",
    ],
    largoMm: 4891,
    anchoMm: 1937,
    altoMm: 1680,
    pesoKg: 2210,
    consumo: 18.4,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: null,
    traccion: "Trasera",
    emisionesCo2: null,
    aprox: [],
    imagen: "/media/xpeng-g9-2026-restyling-precio-espana-hero.webp",
    opiniones: [
      {
        texto: "el hardware del G9 está a un nivel excelente, mientras que el software todavía tiene camino por recorrer",
        usuario: "Propietario (venía de un BMW iX3), citado por forococheselectricos.com",
        fuente: "forococheselectricos.com",
        url: "https://forococheselectricos.com/noticias/xpeng-g9-opiniones-propietarios-precio-espana-20260831-41950.html"
      },
      {
        texto: "con más de 16.000 kilómetros, sin problemas técnicos ni de software y sin ruidos o crujidos en el habitáculo",
        usuario: "Propietario con 16.000 km, citado por forococheselectricos.com",
        fuente: "forococheselectricos.com",
        url: "https://forococheselectricos.com/noticias/xpeng-g9-opiniones-propietarios-precio-espana-20260831-41950.html"
      },
      {
        texto: "el control de crucero adaptativo no siempre interpreta correctamente las señales de velocidad de las carreteras",
        usuario: "Propietario en Países Bajos, citado por forococheselectricos.com",
        fuente: "forococheselectricos.com",
        url: "https://forococheselectricos.com/noticias/xpeng-g9-opiniones-propietarios-precio-espana-20260831-41950.html"
      }
    ],
    costeMensual: {
      costeEnergia100km: 3.31,
      seguroTercerosAnual: 700,
      seguroAmpliadoAnual: 1300,
      mantenimientoAnual: 450,
      costeMensualTotal: 187,
      precioKwh: 0.18,
      precioGasolinaL: 1.85,
      notas: "consumo WLTP 18,4 kWh/100 km; 15.000 km/año; seguro estimado para SUV de 60.000 €; eléctrico sin revisiones de aceite",
      estimado: true
    },
    galeria: [
      
      {
        src: "/media/xpeng-g9-2026-restyling-precio-espana-oficial.webp",
        alt: "XPeng G9 2026, vista lateral en carretera de montaña",
        ancho: 1920,
        alto: 1280
      },
      
    ],
  },
  {
    id: "xpeng-p7-2024-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/xpeng-p7-2024-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: null,
    videoCanal: null,
    marca: "XPeng",
    modelo: "P7",
    tipo: "Eléctrico",
    categoria: "Berlina",
    precioDesde: 51990,
    potenciaCv: 276,
    autonomiaKm: 576,
    maleteroL: null,
    ceroCien: 6.7,
    velocidadMax: null,
    bateriaKwh: 86.2,
    cargaRapidaKw: 175,
    etiquetaDgt: "Cero",
    pros: [
      "El P7 2024 anuncia 576 km WLTP en la versión RWD Long Range, de las mejores autonomías de su época.",
      "Su interior minimalista combina doble pantalla, de 10,25 y 14,96 pulgadas, con techo panorámico.",
      "La versión Wing Edition abre sus puertas como alas de gaviota, un detalle que lo hace inconfundible.",
      "Tiene 5 estrellas Euro NCAP y etiqueta Cero de la DGT.",
      "En el mercado de ocasión baja de 40.000 euros, así que es mucho coche por el dinero.",
    ],
    contras: [
      "Quedó sustituido por el P7+, con arquitectura de 400 V frente a los 800 V del nuevo.",
      "Carga a 175 kW, del 10 % al 80 % en 29 minutos: la mitad de rápido que el P7+.",
      "La marca todavía es poco conocida y su red de servicio está en crecimiento.",
      "Apenas tiene botones físicos, así que todo pasa por la pantalla.",
      "Su valor de reventa sufrirá con la llegada del P7+.",
    ],
    largoMm: null,
    anchoMm: null,
    altoMm: null,
    pesoKg: null,
    consumo: 16.8,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: 440,
    traccion: "Trasera",
    emisionesCo2: null,
    aprox: [],
    imagen: "/media/xpeng-p7-2024-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 3.02,
      seguroTercerosAnual: 650,
      seguroAmpliadoAnual: 1150,
      mantenimientoAnual: 400,
      costeMensualTotal: 167,
      precioKwh: 0.18,
      precioGasolinaL: 1.85,
      notas: "consumo WLTP 16,8 kWh/100 km (RWD Long Range); 15.000 km/año; modelo 2024-2026, ahora sustituido por el P7+",
      estimado: true
    },
    galeria: [
      
      {
        src: "/media/xpeng-p7-2024-precio-ficha-tecnica-oficial.webp",
        alt: "XPeng P7, vista lateral en carretera costera",
        ancho: 1920,
        alto: 1280
      },
      
    ],
  },
  {
    id: "xpeng-x9-2026-precio-europa",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/xpeng-x9-2026-precio-europa-oficial.webp",
    imagenInteriorOficial: "",
    videoId: null,
    videoCanal: null,
    marca: "XPeng",
    modelo: "X9",
    tipo: "Eléctrico",
    categoria: "Monovolumen",
    precioDesde: 77600,
    potenciaCv: 320,
    autonomiaKm: 535,
    maleteroL: 720,
    ceroCien: 8.2,
    velocidadMax: 200,
    bateriaKwh: 98.4,
    cargaRapidaKw: 500,
    etiquetaDgt: "Cero",
    pros: [
      "7 plazas reales (2+2+3) con asientos Zero Gravity con masaje en la segunda fila",
      "615 km WLTP y 10-80 % en 12 min: ganó el El Prix 2026 noruego en autonomía y carga",
      "Maletero de 720 L con las 7 plazas (2.554 L abatiendo la tercera fila)",
      "Dirección en las 4 ruedas y suspensión neumática de serie: gira como un compacto",
      "Cx de 0,227, récord en un monovolumen: clave para su eficiencia",
    ],
    contras: [
      "77.600 € en Alemania: el XPeng más caro del catálogo europeo",
      "En España aún no se vende: de momento solo en 7 países europeos",
      "5,32 m de largo: aparcar en ciudad es todo un desafío",
      "Casi 2.700 kg de peso: el consumo real ronda los 21-25 kWh/100 km",
      "El formato monovolumen sigue siendo minoritario en Europa: reventa incierta",
    ],
    largoMm: 5320,
    anchoMm: 1988,
    altoMm: 1710,
    pesoKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 7,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: [],
    imagen: "/media/xpeng-x9-2026-precio-europa-hero.webp",
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 3.78,
      seguroTercerosAnual: 800,
      seguroAmpliadoAnual: 1500,
      mantenimientoAnual: 500,
      costeMensualTotal: 214,
      precioKwh: 0.18,
      precioGasolinaL: 1.85,
      notas: "sin consumo WLTP publicado por versión; estimado ~21 kWh/100 km por peso y segmento; precio de Alemania (en España aún no se vende); 15.000 km/año",
      estimado: true
    },
    galeria: [
      
      {
        src: "/media/xpeng-x9-2026-precio-europa-oficial.webp",
        alt: "XPeng X9, vista lateral con puerta corredera abierta",
        ancho: 1920,
        alto: 1280
      },
      
    ],
  },
  {
    id: "xpeng-g6-2025-precio-espana",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/xpeng-g6-2025-precio-espana-oficial.webp",
    imagenInteriorOficial: "",
    videoId: null,
    videoCanal: null,
    marca: "XPeng",
    modelo: "G6",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: 42559,
    potenciaCv: 258,
    autonomiaKm: 435,
    maleteroL: 571,
    ceroCien: null,
    velocidadMax: 200,
    bateriaKwh: 66,
    cargaRapidaKw: 280,
    etiquetaDgt: "Cero",
    pros: [
      "El G6 2025 carga a 280 kW, del 10 % al 80 % en menos de 20 minutos, entre las cargas más rápidas de 2025.",
      "Su arquitectura de 800 V viene de serie en todas las versiones, sin excepciones.",
      "La batería LFP de 66 kWh se puede cargar al 100 % a diario sin castigarla.",
      "Es un SUV coupé de 4,75 metros con maletero de 571 litros y 5 estrellas Euro NCAP.",
      "Desde 42.559 euros, es la alternativa china al Model Y con equipamiento premium.",
    ],
    contras: [
      "La versión de acceso anuncia 435 km WLTP, justos para viajes largos.",
      "Quedó sustituido por el G6 2026, con más carga, más autonomía y un precio de 43.083 euros.",
      "La marca todavía es poco conocida y su red de concesionarios está en crecimiento.",
      "No hay datos de 0 a 100 km/h publicados para la versión base.",
      "El software y las calidades interiores generan quejas puntuales de propietarios.",
    ],
    largoMm: 4753,
    anchoMm: 1920,
    altoMm: 1650,
    pesoKg: null,
    consumo: null,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: 440,
    traccion: "Trasera",
    emisionesCo2: null,
    aprox: ["anchoMm"],
    imagen: "/media/xpeng-g6-2025-precio-espana-hero.webp",
    opiniones: [
      {
        "texto": "Soy reciente propietario de un XPENG G6 long range 2025. Flipo con como pueden variar los precios según el cargador, también con algunos con muy poca potencia.",
        "usuario": "Propietario en foroev.com (alias no visible en la versión de texto)",
        "fuente": "foroev.com",
        "url": "https://foroev.com/index.php?topic=19224.0"
      },
      {
        "texto": "G6 owners are engaged and passionate but report recurring quality and software issues. The vehicle's core attributes — range, space, value — receive praise",
        "usuario": "Comunidad de propietarios XPeng DACH (xpeng-fahrer.de; cita en inglés, literal)",
        "fuente": "xpeng-fahrer.de",
        "url": "http://xpeng-fahrer.de/uploads/short-url/61xhI275fDdnT4mZBSF4PhtW3ut.pdf"
      },
    ],
    costeMensual: {
      "costeEnergia100km": 3.42,
      "seguroTercerosAnual": 450,
      "seguroAmpliadoAnual": 900,
      "mantenimientoAnual": 350,
      "costeMensualTotal": 147,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "Cifras estimadas para 15.000 km al año: consumo cercano a 19 kWh cada 100 km, sin WLTP oficial publicado por versión, con la luz doméstica a 0,18 euros el kWh; seguro y mantenimiento calculados por segmento",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/xpeng-g6-2025-precio-espana-hero.webp",
        "alt": "XPeng G6 gris oscuro en carretera costera al atardecer",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/xpeng-g6-2025-precio-espana-oficial.webp",
        "alt": "XPeng G6 plateado de perfil en autopista europea",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del XPeng G6 con doble pantalla y techo panorámico",
        "ancho": 1200,
        "alto": 800
      }
    ],
  },
  {
    id: "xpeng-g9-2024-precio-espana",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/xpeng-g9-2024-precio-espana-oficial.webp",
    imagenInteriorOficial: "",
    videoId: null,
    videoCanal: null,
    marca: "XPeng",
    modelo: "G9",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: 59990,
    potenciaCv: 313,
    autonomiaKm: 460,
    maleteroL: 660,
    ceroCien: 6.4,
    velocidadMax: 200,
    bateriaKwh: 75.8,
    cargaRapidaKw: 260,
    etiquetaDgt: "Cero",
    pros: [
      "El G9 2024 es un SUV eléctrico grande, de 4,89 metros, desde 59.990 euros: mucho más barato que un EQE SUV o un iX.",
      "Carga rápido a 260 kW gracias a su arquitectura de 800 V.",
      "Su maletero de 660 litros está entre los más grandes de su segmento.",
      "La batería LFP de 75,8 kWh útiles se puede cargar al 100 % sin miedo.",
      "La versión AWD Performance, de 551 CV y 3,9 segundos, cuesta 73.990 euros.",
    ],
    contras: [
      "La versión base anuncia 460 km WLTP, la autonomía más justa del segmento premium.",
      "Quedó sustituido por el G9 2026, con 800 V mejorados, 525 kW y más autonomía.",
      "Sus 2.235 kg se notan en consumo y agilidad.",
      "La marca sigue siendo poco conocida, con una red de servicio en crecimiento.",
      "Apenas tiene botones físicos: todo pasa por las pantallas.",
    ],
    largoMm: 4891,
    anchoMm: 1937,
    altoMm: 1680,
    pesoKg: 2235,
    consumo: null,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: null,
    traccion: "Trasera",
    emisionesCo2: null,
    aprox: ["autonomiaKm"],
    imagen: "/media/xpeng-g9-2024-precio-espana-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 3.78,
      "seguroTercerosAnual": 450,
      "seguroAmpliadoAnual": 900,
      "mantenimientoAnual": 350,
      "costeMensualTotal": 151,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "Cifras estimadas para 15.000 km al año: consumo cercano a 21 kWh cada 100 km, sin WLTP oficial publicado para esta versión, con la luz doméstica a 0,18 euros el kWh; seguro y mantenimiento calculados por segmento",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/xpeng-g9-2024-precio-espana-hero.webp",
        "alt": "XPeng G9 plateado en carretera de montaña",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/xpeng-g9-2024-precio-espana-oficial.webp",
        "alt": "XPeng G9 negro cargando en un punto ultrarrápido",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior premium del XPeng G9 con doble pantalla y asientos de cuero",
        "ancho": 1200,
        "alto": 800
      }
    ],
  },
  {
    // Radar 16/10/2026 18:58 CEST — XPeng L03 PowerX Long Range (REEV).
    // Pedidos abiertos en España el 15-16/10/2026; primeras entregas diciembre 2026.
    // Precio oficial anunciado: desde 37.500 € con campañas, financiación y
    // adelanto de 1.800 € del Plan Auto+ (sin gastos de matriculación/entrega).
    // Fuentes: autonocion.com, somoselectricos.com, elperiodicodelaenergia.com,
    // hibridosyelectricos.com, periodismodelmotor.com, apmc.cat, veomotor.com.
    // Cero cifras inventadas: lo no publicado (velocidad máx., peso, consumo
    // WLTP, par, EuroNCAP, plan de mantenimiento) queda sin dato/omitido.
    id: "xpeng-l03-2026-precio-espana",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/xpeng-l03-2026-precio-espana-oficial.webp",
    imagenInteriorOficial: "/media/xpeng-l03-2026-precio-espana-interior.webp",
    videoId: null,
    videoCanal: null,
    marca: "XPeng",
    modelo: "L03 PowerX",
    tipo: "Eléctrico de autonomía extendida",
    categoria: "SUV",
    precioDesde: 37500,
    potenciaCv: 242,
    autonomiaKm: 215,
    maleteroL: 367,
    ceroCien: 6.8,
    velocidadMax: null,
    bateriaKwh: 37.25,
    cargaRapidaKw: 123,
    etiquetaDgt: "Cero",
    pros: [
      "El L03 PowerX anuncia 1.017 km de autonomía combinada WLTP: 215 km en modo eléctrico más un extensor de gasolina 1.5.",
      "Su batería LFP de 37,25 kWh carga rápido a 123 kW, del 10 % al 80 % en unos 20 minutos.",
      "Entrega 242 CV, 178 kW, con tracción trasera y un 0 a 100 km/h en 6,8 segundos.",
      "El diseño es del español JuanMa López, exjefe de diseño de Ferrari, con un Cx de solo 0,228.",
      "Desde 37.500 euros con campañas, ofrece una autonomía de más de 1.000 km por el precio de un SUV eléctrico medio.",
    ],
    contras: [
      "Los 37.500 euros exigen financiación, campañas y el adelanto de 1.800 euros del Plan Auto+, y no incluyen la matriculación.",
      "El motor 1.5 de gasolina solo genera electricidad, y el consumo real en viajes largos todavía no está publicado.",
      "El maletero de 367 litros se queda justo para un SUV de 4,65 metros.",
      "No tiene prueba Euro NCAP publicada y no hay unidades entregadas: las primeras llegan en diciembre de 2026.",
      "La marca todavía es poco conocida en España, con una red comercial y de servicio en crecimiento.",
    ],
    largoMm: 4650,
    anchoMm: 1920,
    altoMm: 1600,
    pesoKg: null,
    consumo: null,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: null,
    traccion: "Trasera",
    emisionesCo2: null,
    aprox: [],
    imagen: "/media/xpeng-l03-2026-precio-espana-hero.webp",
    opiniones: [],
    galeria: [
      {
        src: "/media/xpeng-l03-2026-precio-espana-oficial.webp",
        alt: "XPeng L03 PowerX morado, SUV coupé, vista tres cuartos delantera (foto: sparneuwagen.de, licencia desconocida)",
        ancho: 1500,
        alto: 1500
      },
      {
        src: "/media/xpeng-l03-2026-precio-espana-hero.webp",
        alt: "XPeng L03 PowerX morado en la playa, vista lateral delantera (foto: actualidadmotor.com, licencia desconocida)",
        ancho: 1500,
        alto: 900
      },
      {
        src: "/media/xpeng-l03-2026-precio-espana-interior.webp",
        alt: "Interior del XPeng L03: volante con logo XPeng, pantalla central de 15,6 pulgadas y cuadro digital (foto: headlightmag.com, licencia desconocida)",
        ancho: 900,
        alto: 613
      }
    ],
  },
];
