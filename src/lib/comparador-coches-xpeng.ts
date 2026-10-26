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
    imagenInteriorOficial: "/media/xpeng-g9-2026-restyling-precio-espana-interior.webp",
    videoId: "FuSBoE9yENk",
    videoCanal: "PruebaTuCoche",
    marca: "XPeng",
    modelo: "G9 2026",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: 59010,
    potenciaCv: 351,
    autonomiaKm: 502,
    maleteroL: 660,
    ceroCien: 6.6,
    velocidadMax: 200,
    bateriaKwh: 79,
    cargaRapidaKw: 525,
    etiquetaDgt: "Cero",
    pros: [
      "525 kW de carga (10-80 % en 12 min): el eléctrico que más rápido carga de Europa",
      "Baterías LFP en toda la gama: más baratas, estables y duraderas que las NCM",
      "Hasta 585 km WLTP combinados (756 km en ciudad) en el Long Range",
      "Interior premium con pantalla de 14,96 pulgadas, masaje Shiatsu de 10 puntos y techo panorámico",
      "5 estrellas Euro NCAP, etiqueta Cero y garantía de 5 años o 120.000 km",
    ],
    contras: [
      "Desde 59.990 €: más caro que un Tesla Model Y o un Kia EV9 de acceso",
      "Marca aún poco conocida en España; red de concesionarios en crecimiento",
      "El software (asistentes, llave digital, climatización) recibe críticas de propietarios",
      "2.210 kg de peso: el consumo real en autopista se dispara (22-23,5 kWh/100 km)",
      "Para aprovechar los 525 kW hace falta un cargador de 500+ kW; casi no existen en España",
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
        src: "/media/xpeng-g9-2026-restyling-precio-espana-oficial-2.webp",
        alt: "XPeng G9 2026, tres cuartos trasero cargando en un cargador ultrarrápido",
        ancho: 1920,
        alto: 1280
      },
      {
        src: "/media/xpeng-g9-2026-restyling-precio-espana-oficial.webp",
        alt: "XPeng G9 2026, vista lateral en carretera de montaña",
        ancho: 1920,
        alto: 1280
      },
      {
        src: "/media/xpeng-g9-2026-restyling-precio-espana-interior.webp",
        alt: "Interior del XPeng G9 2026, salpicadero con doble pantalla",
        ancho: 1920,
        alto: 1280
      }
    ],
  },
  {
    id: "xpeng-p7-2024-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/xpeng-p7-2024-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/xpeng-p7-2024-precio-ficha-tecnica-interior.webp",
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
      "576 km WLTP en la versión RWD Long Range: de las mejores autonomías de su época",
      "Interior minimalista con doble pantalla (10,25\" + 14,96\") y techo panorámico",
      "Versión Wing Edition con puertas de apertura tipo alas de gaviota",
      "5 estrellas Euro NCAP y etiqueta Cero de la DGT",
      "En el mercado de ocasión baja de 40.000 €: mucho coche por el dinero",
    ],
    contras: [
      "Sustituido por el P7+: arquitectura de 400 V frente a los 800 V del nuevo",
      "Carga de 175 kW (10-80 % en 29 min): la mitad de rápido que el P7+",
      "Marca aún poco conocida; red de servicio en crecimiento",
      "Sin apenas botones físicos: todo pasa por la pantalla",
      "El valor de reventa sufrirá con la llegada del P7+",
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
        src: "/media/xpeng-p7-2024-precio-ficha-tecnica-oficial-2.webp",
        alt: "XPeng P7, tres cuartos trasero nocturno con banda LED",
        ancho: 1920,
        alto: 1280
      },
      {
        src: "/media/xpeng-p7-2024-precio-ficha-tecnica-oficial.webp",
        alt: "XPeng P7, vista lateral en carretera costera",
        ancho: 1920,
        alto: 1280
      },
      {
        src: "/media/xpeng-p7-2024-precio-ficha-tecnica-interior.webp",
        alt: "Interior del XPeng P7, doble pantalla y salpicadero minimalista",
        ancho: 1920,
        alto: 1280
      }
    ],
  },
  {
    id: "xpeng-x9-2026-precio-europa",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/xpeng-x9-2026-precio-europa-oficial.webp",
    imagenInteriorOficial: "/media/xpeng-x9-2026-precio-europa-interior.webp",
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
        src: "/media/xpeng-x9-2026-precio-europa-oficial-2.webp",
        alt: "XPeng X9, tres cuartos delantero en carretera costera",
        ancho: 1920,
        alto: 1280
      },
      {
        src: "/media/xpeng-x9-2026-precio-europa-oficial.webp",
        alt: "XPeng X9, vista lateral con puerta corredera abierta",
        ancho: 1920,
        alto: 1280
      },
      {
        src: "/media/xpeng-x9-2026-precio-europa-interior.webp",
        alt: "Interior del XPeng X9, asientos Zero Gravity de la segunda fila",
        ancho: 1920,
        alto: 1280
      }
    ],
  },
  {
    id: "xpeng-g6-2025-precio-espana",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/xpeng-g6-2025-precio-espana-oficial.webp",
    imagenInteriorOficial: "/media/xpeng-g6-2025-precio-espana-interior-oficial.webp",
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
      "280 kW de carga (10-80 % en menos de 20 min): de las más rápidas de 2025",
      "Arquitectura de 800 V de serie en todas las versiones",
      "Batería LFP de 66 kWh: se puede cargar al 100 % a diario",
      "SUV coupé de 4,75 m con maletero de 571 L y 5 estrellas Euro NCAP",
      "Desde 42.559 €: alternativa china al Model Y con equipamiento premium",
    ],
    contras: [
      "435 km WLTP en la versión de acceso: justos para viajes largos",
      "Sustituido por el G6 2026 (más carga, más autonomía, 43.083 €)",
      "Marca aún poco conocida; red de concesionarios en crecimiento",
      "Sin datos de 0-100 km/h publicados para la versión base",
      "El software y las calidades interiores generan quejas puntuales de propietarios",
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
      "notas": "consumo estimado ~19 kWh/100 km (sin dato WLTP publicado por versión); 15.000 km/año; recarga doméstica a 0,18 €/kWh; seguro y mantenimiento estimados por segmento",
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
        "src": "/media/xpeng-g6-2025-precio-espana-interior-oficial.webp",
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
    imagenInteriorOficial: "/media/xpeng-g9-2024-precio-espana-interior-oficial.webp",
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
      "SUV eléctrico grande (4,89 m) desde 59.990 €: mucho más barato que un EQE SUV o un iX",
      "260 kW de carga rápida con arquitectura de 800 V",
      "Maletero de 660 L: de los más grandes del segmento",
      "Batería LFP de 75,8 kWh útiles: carga al 100 % sin miedo",
      "Versión AWD Performance de 551 CV y 3,9 s por 73.990 €",
    ],
    contras: [
      "460 km WLTP en la versión base: la autonomía más justa del segmento premium",
      "Sustituido por el G9 2026 (800 V mejorados, 525 kW, más autonomía)",
      "2.235 kg: el peso se nota en consumo y agilidad",
      "Marca aún poco conocida; red de servicio en crecimiento",
      "Sin apenas botones físicos: todo pasa por las pantallas",
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
      "notas": "consumo estimado ~21 kWh/100 km (sin dato WLTP publicado para esta versión); 15.000 km/año; recarga doméstica a 0,18 €/kWh; seguro y mantenimiento estimados por segmento",
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
        "src": "/media/xpeng-g9-2024-precio-espana-interior-oficial.webp",
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
    // WLTP, par, EuroNCAP, plan de mantenimiento) queda en null/omitido.
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
      "1.017 km de autonomía combinada WLTP: 215 km en modo eléctrico + extensor de gasolina 1.5 L",
      "Batería LFP de 37,25 kWh con carga rápida de 123 kW (10-80 % en unos 20 minutos)",
      "242 CV (178 kW) con tracción trasera y 0-100 km/h en 6,8 segundos",
      "Diseño del español JuanMa López (ex-jefe de diseño de Ferrari), con Cx de solo 0,228",
      "Desde 37.500 € con campañas: autonomía de 1.000+ km por precio de SUV eléctrico medio"
    ],
    contras: [
      "Los 37.500 € exigen financiación, campañas y el adelanto de 1.800 € del Plan Auto+; no incluye matriculación",
      "El motor 1.5 de gasolina solo genera electricidad: el consumo real en viajes largos aún no está publicado",
      "367 litros de maletero: justo para un SUV de 4,65 metros",
      "Sin prueba EuroNCAP publicada y sin unidades entregadas (primeras en diciembre de 2026)",
      "Marca aún poco conocida en España, con red comercial y de servicio en crecimiento"
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

  {
    // Radar 26/10/2026 12:58 CEST — XPeng Mona L05 (modelo nuevo).
    // Envíos globales anunciados por XPeng en Weibo el 26/10/2026 (CnEVPost),
    // lanzamiento en China el 29/10/2026; preventa en China desde el 15/10.
    // Precio en euros: conversión aproximada del precio chino (169.800 yuanes),
    // sin precio ni fecha para Europa/España. Autonomía CLTC, no WLTP.
    // EuroNCAP: sin prueba publicada (solo objetivo de desarrollo a 5 estrellas).
    // Fuentes: CnEVPost 26/10/2026 y 15/10/2026, CarNewsChina 15/10/2026 y
    // 23/10/2026 (prueba real EREV 1.194 km), TechNode 16/10/2026.
    id: "xpeng-mona-l05-2026-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/xpeng-mona-l05-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/xpeng-mona-l05-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    marca: "XPeng",
    modelo: "Mona L05",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: 21500,
    potenciaCv: 249,
    autonomiaKm: 635,
    maleteroL: 702,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: 71.1,
    cargaRapidaKw: null,
    etiquetaDgt: null,
    pros: [
      "249 CV con hasta 635 km CLTC y batería LFP de 71,1 kWh",
      "Versión de autonomía extendida con 1.310 km combinados al mismo precio de partida",
      "Maletero de 702 litros (1.913 litros abatido) más 102 litros delanteros",
      "Envíos globales a 65 países antes del lanzamiento chino del 29/10",
      "Pantalla central de 17,3 pulgadas y HUD de 26,8 pulgadas",
    ],
    contras: [
      "Sin precio ni fecha para Europa o España: el precio en euros es aproximado (China)",
      "Autonomía en ciclo chino CLTC, no WLTP",
      "Sin prueba EuroNCAP publicada",
      "Sin datos de carga rápida, aceleración ni consumo WLTP publicados",
      "Red comercial y de servicio en España aún en crecimiento para la gama Mona",
    ],
    largoMm: 4870,
    anchoMm: 1930,
    altoMm: 1636,
    pesoKg: null,
    consumo: null,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: null,
    traccion: "Trasera",
    emisionesCo2: null,
    aprox: ["precioDesde", "autonomiaKm"],
    imagen: "/media/xpeng-mona-l05-2026-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    galeria: [
      {
        src: "/media/xpeng-mona-l05-2026-precio-ficha-tecnica-hero.webp",
        alt: "XPeng Mona L05 plateado, SUV de cinco plazas, vista lateral (foto: XPeng, licencia desconocida)",
        ancho: 1600,
        alto: 900,
      },
      {
        src: "/media/xpeng-mona-l05-2026-precio-ficha-tecnica-oficial.webp",
        alt: "XPeng Mona L05 morado, vista delantera de tres cuartos con placa L05 (foto: XPeng, licencia desconocida)",
        ancho: 660,
        alto: 495,
      },
      {
        src: "/media/xpeng-mona-l05-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del XPeng Mona L05: volante con logo XPeng, pantalla central y asientos claros (foto: XPeng, licencia desconocida)",
        ancho: 660,
        alto: 495,
      },
    ],
    analisisSlug: "xpeng-mona-l05-envios-globales-65-paises",
    euroncap: {
      estrellas: null,
      ano: null,
      url: null,
      nota: "Sin datos EuroNCAP: modelo no probado (desarrollado para 5 estrellas, sin prueba publicada)",
    },
  },
];
