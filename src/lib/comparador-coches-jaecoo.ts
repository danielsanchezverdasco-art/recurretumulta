import type { CocheComparador } from "./comparador-coches-data.ts";

/**
 * Fichas Jaecoo — equipo Jaecoo, 05/10/2026.
 * Modelos REALES de la gama Jaecoo en España 2024+ verificados con prensa española.
 * NO duplicar: jaecoo-5 (gasolina) y jaecoo-7-shs-hibrido-enchufable (PHEV) los cubre
 * otro equipo (comparador-coches-data.ts y comparador-coches-nuevos.ts).
 *
 * Fichas incluidas aquí:
 * - 7 gasolina 1.6 TGDI 147 CV (2026): el SUV que abrió la marca en España.
 * - 7 SHS híbrido 224 CV (2026): híbrido no enchufable con etiqueta ECO.
 * - 5 SHS híbrido 224 CV (2026): hermano pequeño del 7 SHS, etiqueta ECO.
 * - 5 EV 211 CV (2026): eléctrico con 402 km WLTP y etiqueta Cero.
 * - 8 SHS híbrido enchufable 428 CV (2026): buque insignia, 5 o 7 plazas, etiqueta Cero.
 * Excluidos tras verificación: el Jaecoo 6/J6 (sin venta en España) y el Omoda 9 SHS
 * (marca Omoda, otro equipo). El Jaecoo 8 solo se vende como SHS PHEV: una sola ficha.
 *
 * Fuentes: Europa Press, hibridosyelectricos.com, soymotor.com, coches.net, km77,
 * periodismodelmotor.com, autonocion.com, autohebdosport.com, revistacar.es,
 * movilidadelectrica.com, motorgiga.com, clasicosalvolante.com, driveris.es,
 * gruporoyb.com, flexicar.es, actualidadmotor.com, autoscout24.es, dgt.es (etiquetas).
 */
export const COCHES_JAECOO: CocheComparador[] = [
  {
    id: "jaecoo-7-gasolina-2026-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/jaecoo-7-gasolina-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: "uW_o8mkQKw4",
    videoCanal: "SoyMotor",
    marca: "Jaecoo",
    modelo: "7",
    tipo: "Gasolina",
    categoria: "SUV",
    precioDesde: 31900,
    potenciaCv: 147,
    autonomiaKm: null,
    maleteroL: 424,
    ceroCien: 10.8,
    velocidadMax: 180,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C",
    pros: [
      "Desde 31.900 € de tarifa: el SUV de 4,5 m con más equipamiento por precio",
      "Tracción 4x4 disponible con modos arena, barro, nieve y todoterreno",
      "Equipamiento de serie generoso: pantallas de 10,3 y 14,8\", techo solar, cámara 360º",
      "Diseño con aires de Range Rover Evoque que no pasa desapercibido",
      "Garantía de 7 años o 150.000 km, por encima de la media del segmento",
    ],
    contras: [
      "Consumo de 7,5 l/100 km (8,0 en el 4x4): el más sediento de la gama Jaecoo",
      "Etiqueta C: sin acceso libre a las ZBE en episodios de contaminación",
      "10,8 s en el 0-100: prestaciones justas para 147 CV",
      "Maletero de 424 L: correcto, pero no destaca en el segmento",
      "El 7 SHS híbrido gasta 2 l/100 km menos y lleva ECO desde 34.400 €",
    ],
    largoMm: 4500,
    anchoMm: 1865,
    altoMm: 1670,
    pesoKg: 1599,
    consumo: 7.5,
    consumoUnidad: "l/100 km",
    plazas: 5,
    parNm: 275,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: [],
    imagen: "/media/jaecoo-7-gasolina-2026-precio-ficha-tecnica-hero.webp",
    opiniones: [
      {
        "texto": "En las pruebas de aceleración, el Jaecoo 7 ha registrado un 0 a 100 km/h en 10,23 segundos. Su peso es de 1724 kg.",
        "usuario": "Dani Cuadrado (prueba AutoScout24, versión 4x4)",
        "fuente": "autoscout24.es",
        "url": "https://www.autoscout24.es/informacion/prueba/jaecoo/j7/jaecoo-7-2025/"
      },
      {
        "texto": "El Jaecoo 7 de gasolina acelera de 0 a 100 km/h en 10,9 segundos en su versión 4x2. Los consumos homologados tampoco son motivo de entusiasmo, pues marcan promedios de 7,5 l/100 km y 8,0 litros respectivamente.",
        "usuario": "coches.net (presentación y primera prueba)",
        "fuente": "coches.net",
        "url": "https://www.coches.net/videos/jaecoo-7-presentacion-prueba"
      }
    ],
    costeMensual: {
      "costeEnergia100km": 13.9,
      "seguroTercerosAnual": 450,
      "seguroAmpliadoAnual": 850,
      "mantenimientoAnual": 450,
      "costeMensualTotal": 317,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "consumo WLTP 7,5 l/100 km (FWD; el 4x4 homologa 8,0); gasolina 95 aprox 1,85 EUR/l; 15.000 km/año",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/jaecoo-7-gasolina-2026-precio-ficha-tecnica-oficial.webp",
        "alt": "Jaecoo 7 gasolina, tres cuartos delantero",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "",
        "alt": "Jaecoo 7 gasolina, vista lateral en carretera",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "",
        "alt": "Interior del Jaecoo 7 gasolina",
        "ancho": 1920,
        "alto": 1280
      }
    ],
  },
  {
    id: "jaecoo-7-shs-hibrido-2026-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/jaecoo-7-shs-hibrido-2026-precio-ficha-tecnica-hero.webp",
    imagenInteriorOficial: "",
    videoId: null,
    videoCanal: null,
    marca: "Jaecoo",
    modelo: "7 SHS",
    tipo: "Híbrido",
    categoria: "SUV",
    precioDesde: 34400,
    potenciaCv: 224,
    autonomiaKm: 90,
    maleteroL: 340,
    ceroCien: 8.3,
    velocidadMax: 180,
    bateriaKwh: 1.83,
    cargaRapidaKw: null,
    etiquetaDgt: "ECO",
    pros: [
      "224 CV con 5,5 l/100 km: etiqueta ECO y más de 900 km de autonomía real",
      "Desde 34.400 € (Pure), con campañas que lo dejan en 26.800 €",
      "Maletero de 340 L y 2,67 m de batalla: auténtico SUV familiar",
      "Pantalla de 14,8\", head-up display y 19 ADAS desde el acabado base",
      "Garantía de 7 años (coche) y 8 años/160.000 km (alta tensión)",
    ],
    contras: [
      "El 7 SHS enchufable da 90 km eléctricos y etiqueta Cero desde 38.900 €",
      "Maletero de 340 L: pequeño para un SUV de 4,5 m",
      "Ayudas a la conducción algo intrusivas, hay que domesticarlas",
      "1.715 kg: el peso se nota en puertos y conducción animada",
      "Red de posventa aún en crecimiento frente a Toyota o Hyundai",
    ],
    largoMm: 4500,
    anchoMm: 1865,
    altoMm: 1670,
    pesoKg: 1715,
    consumo: 5.5,
    consumoUnidad: "l/100 km",
    plazas: 5,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: 125,
    aprox: [],
    imagen: "",
    opiniones: [
      {
        "texto": "Por un lado, la velocidad máxima es de 180 km/h, con una aceleración de 0 a 100 km/h en 8,3 segundos. Por otro lado, el consumo medio homologado es de 5,3 litros cada 100 km.",
        "usuario": "HackerCar (prueba del Jaecoo 7 SHS)",
        "fuente": "hackercar.com",
        "url": "https://hackercar.com/jaecoo-7-shs-hibrido/"
      },
      {
        "texto": "El 7 SHS híbrido no enchufable disfruta de la misma mecánica que tiempo atrás estrenaron hermanos de Omoda y Ebro, con etiqueta ECO, consumos homologados inferiores a 5,5 litros y potencias de 224 caballos.",
        "usuario": "Europa Press (lanzamiento en España)",
        "fuente": "ant-co.in",
        "url": "https://ant-co.in/news/economiamotor-jaecoo-lanza-en-espana-los-nuevos-5-shs-y-7-shs-hibridos-con-hasta-224-cv-900-km-de-autonomia-20260514a377b94d3541d.html"
      }
    ],
    costeMensual: {
      "costeEnergia100km": 10.2,
      "seguroTercerosAnual": 450,
      "seguroAmpliadoAnual": 800,
      "mantenimientoAnual": 400,
      "costeMensualTotal": 253,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "consumo WLTP 5,5 l/100 km; gasolina 95 aprox 1,85 EUR/l; 15.000 km/año",
      "estimado": true
    },
    galeria: [
      {
        "src": "",
        "alt": "Jaecoo 7 SHS híbrido, tres cuartos delantero",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "",
        "alt": "Jaecoo 7 SHS híbrido, vista trasera en costa",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "",
        "alt": "Interior del Jaecoo 7 SHS híbrido",
        "ancho": 1920,
        "alto": 1280
      }
    ],
  },
  {
    id: "jaecoo-5-shs-hibrido-2026-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/jaecoo-5-shs-hibrido-2026-precio-ficha-tecnica-hero.webp",
    imagenInteriorOficial: "",
    videoId: "mrAvlRIU-VE",
    videoCanal: "Periodismo del Motor",
    marca: "Jaecoo",
    modelo: "5 SHS",
    tipo: "Híbrido",
    categoria: "SUV",
    precioDesde: 30000,
    potenciaCv: 224,
    autonomiaKm: null,
    maleteroL: 410,
    ceroCien: 7.9,
    velocidadMax: 175,
    bateriaKwh: 1.83,
    cargaRapidaKw: null,
    etiquetaDgt: "ECO",
    pros: [
      "224 CV y etiqueta ECO desde 30.000 € (22.500 € con campañas): el híbrido barato",
      "7,9 s en el 0-100 con 5,3 l/100 km: prestaciones de compacto deportivo",
      "Consumo real de 5,5-5,7 l/100 km en prueba independiente",
      "Calidad de montaje y ajustes superiores a rivales europeos de precio similar",
      "Batería LFP de 1,83 kWh con garantía de 8 años o 160.000 km",
    ],
    contras: [
      "Dirección artificial y poco comunicativa (5,5/10 en prueba)",
      "Maletero de 410 L: en la media del segmento, sin brillar",
      "El 5 EV da 402 km eléctricos y etiqueta Cero por 5.500 € más",
      "Marca aún en consolidación: red de talleres pequeña",
      "Algunos plásticos duros en zonas bajas del habitáculo",
    ],
    largoMm: 4380,
    anchoMm: 1860,
    altoMm: 1650,
    pesoKg: null,
    consumo: 5.3,
    consumoUnidad: "l/100 km",
    plazas: 5,
    parNm: 295,
    traccion: "Delantera",
    emisionesCo2: 120,
    aprox: [],
    imagen: "",
    opiniones: [
      {
        "texto": "El JAECOO 5 SHS es, sin duda, uno de los híbridos más interesantes del segmento C en 2026. Su sistema Super Hybrid System de 224 CV funciona de forma suave y refinada, con un consumo real muy cercano al homologado (5,5-5,7 l/100 km).",
        "usuario": "Autonoción (prueba, nota 7,7/10)",
        "fuente": "autonocion.com",
        "url": "https://www.autonocion.com/prueba-jaecoo-5-shs/"
      },
      {
        "texto": "Si alguien tiene todavía una opinión negativa de los coches chinos, este Jaecoo 5 SHS Exclusive que probamos es el mejor antídoto. Es difícil encontrar en el mercado un SUV de este tamaño que ofrezca todo lo que ofrece a cambio de una tarifa muy competitiva.",
        "usuario": "Periodismo del Motor (prueba en vídeo)",
        "fuente": "periodismodelmotor.com",
        "url": "https://periodismodelmotor.com/prueba-en-video-jeacoo-5-shs-exclusive/423700/"
      }
    ],
    costeMensual: {
      "costeEnergia100km": 9.8,
      "seguroTercerosAnual": 420,
      "seguroAmpliadoAnual": 750,
      "mantenimientoAnual": 380,
      "costeMensualTotal": 241,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "consumo WLTP 5,3 l/100 km; gasolina 95 aprox 1,85 EUR/l; 15.000 km/año",
      "estimado": true
    },
    galeria: [
      {
        "src": "",
        "alt": "Jaecoo 5 SHS híbrido, tres cuartos delantero",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "",
        "alt": "Jaecoo 5 SHS híbrido, vista lateral en ciudad",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "",
        "alt": "Interior del Jaecoo 5 SHS híbrido",
        "ancho": 1920,
        "alto": 1280
      }
    ],
  },
  {
    id: "jaecoo-5-ev-2026-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/jaecoo-5-ev-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: null,
    videoCanal: null,
    marca: "Jaecoo",
    modelo: "5 EV",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: 35500,
    potenciaCv: 211,
    autonomiaKm: 402,
    maleteroL: null,
    ceroCien: 7.7,
    velocidadMax: 175,
    bateriaKwh: 60.9,
    cargaRapidaKw: 130,
    etiquetaDgt: "Cero",
    pros: ["Su batería LFP de 60,9 kWh homologa 402 kilómetros WLTP, suficientes para cubrir una semana de trayectos urbanos sin enchufarlo a diario.", "Recupera del 30 al 80 por ciento en 28 minutos gracias a sus 130 kW en continua, un pico superior al de otros mercados, donde se queda en 80 kW.", "Con 211 CV y 288 Nm empuja con decisión: firma el 0 a 100 en 7,7 segundos y adelanta sin titubeos en carreteras de doble sentido.", "La función V2L permite alimentar herramientas, una nevera portátil o material de camping directamente desde el puerto de carga del coche.", "El distintivo Cero de la DGT abre las zonas de bajas emisiones españolas y la bomba de calor protege la autonomía cuando aprieta el invierno."],
    contras: ["Frente al MG S5 eléctrico pierde la partida en viaje: su rival anuncia hasta 480 km WLTP y admite 139 kW, nueve más que este Jaecoo.", "Sus 1.785 kilos condicionan el paso por rotondas y enlaces: la carrocería inclina y los frenos trabajan más que en el gasolina equivalente.", "El gasto homologado de 16,5 kWh cada 100 km queda por encima de lo que firman eléctricos compactos más ligeros y aerodinámicos.", "La punta se detiene en 175 km/h y en incorporaciones largas a autopista el empuje inicial se va diluyendo poco a poco.", "Todavía carece de veredicto Euro NCAP propio: ni el 5 ni su variante E5 británica han pasado por el laboratorio europeo de choques."],
    largoMm: 4380,
    anchoMm: 1860,
    altoMm: 1650,
    pesoKg: 1785,
    consumo: 16.5,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: 288,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: [],
    imagen: "/media/jaecoo-5-ev-2026-precio-ficha-tecnica-hero.webp",
    opiniones: [
      {
        "texto": "El Jaecoo 5 EV apuesta por una batería de 60,9 kWh, 211 CV de potencia y una autonomía de 402 km. Admite recarga rápida a 130 kW (del 30 al 80 % en unos 28 minutos) y dispone de función V2L.",
        "usuario": "AutoHebdo Sport (primera toma de contacto)",
        "fuente": "autohebdosport.com",
        "url": "https://autohebdosport.com/coches/noticias/al-volante-jaecoo-5-entrena-tu-dragoncito"
      },
      {
        "texto": "Equipa un motor eléctrico en el eje delantero que desarrolla 155 kW (211 CV) de potencia y 288 Nm de par máximo. Así, le vale para acelerar de 0 a 100 km/h en 7,7 segundos y alcanza una velocidad máxima de 175 km/h.",
        "usuario": "Movilidad Eléctrica (comparativa Jaecoo 5 EV vs MG S5)",
        "fuente": "movilidadelectrica.com",
        "url": "https://movilidadelectrica.com/comparativa-jaecoo-5-ev-vs-mg-s5/"
      }
    ],
    costeMensual: {
      "costeEnergia100km": 3.0,
      "seguroTercerosAnual": 400,
      "seguroAmpliadoAnual": 700,
      "mantenimientoAnual": 250,
      "costeMensualTotal": 124,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "consumo WLTP 16,5 kWh/100 km a 0,18 EUR/kWh (carga en casa); 15.000 km/año",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/jaecoo-5-ev-2026-precio-ficha-tecnica-oficial.webp",
        "alt": "Jaecoo 5 EV, tres cuartos delantero",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "",
        "alt": "Jaecoo 5 EV, vista lateral en Madrid",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "",
        "alt": "Interior del Jaecoo 5 EV",
        "ancho": 1920,
        "alto": 1280
      }
    ],
    planMantenimiento: {"costeAnualAproxEur": null, "fuente": "Omoda & Jaecoo España (omodajaecoo.es) cita en sus promociones vigentes el plan de mantenimiento oficial del vehículo, con plazos y kilometrajes, e incluye los tres primeros mantenimientos en campaña, pero no publica el intervalo concreto del Jaecoo 5 EV ni tarifas de revisión (verificado el 22/10/2026)", "intervalo": "Sin intervalo publicado en abierto por Jaecoo España para el 5 EV (verificado el 22/10/2026): la marca confirma que existe un plan oficial con plazos y kilometrajes, pero no detalla ese intervalo en su web española", "revisiones": [{"costeAproxEur": null, "nombre": "Revisión programada en Servicio Oficial Omoda & Jaecoo", "queSeCambia": "Inspección general del eléctrico: batería de alta tensión y su circuito de refrigeración, frenos, filtro del habitáculo, batería auxiliar de 12 V y actualización de software; sin cambio de aceite porque no hay motor térmico"}]},
    euroncap: {"ano": null, "estrellas": null, "nota": "Sin datos EuroNCAP: el Jaecoo 5, incluida esta versión EV (vendida como E5 en Reino Unido), no ha sido sometido a las pruebas de Euro NCAP; las cinco estrellas del Jaecoo 7 y del Omoda 5 no son transferibles a este modelo (verificado el 22/10/2026).", "url": null},
  },
  {
    id: "jaecoo-8-shs-2026-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/jaecoo-8-shs-2026-precio-ficha-tecnica-hero.webp",
    imagenInteriorOficial: "",
    videoId: "et30-pnlgr0",
    videoCanal: "SoyMotor",
    marca: "Jaecoo",
    modelo: "8 SHS",
    tipo: "Híbrido enchufable",
    categoria: "SUV",
    precioDesde: 54900,
    potenciaCv: 428,
    autonomiaKm: 134,
    maleteroL: 738,
    ceroCien: 5.8,
    velocidadMax: 180,
    bateriaKwh: 34.46,
    cargaRapidaKw: 70,
    etiquetaDgt: "Cero",
    pros: ["Sus 134 km en modo eléctrico WLTP dejan atrás a cualquier otro enchufable de su tamaño y de su precio", "Acepta 70 kW en continua y pasa del 30 al 80 % en unos 19 minutos durante una parada en ruta, algo casi inédito entre los híbridos enchufables", "5 o 7 plazas con maletero de 738 L: auténtico SUV familiar", "Suspensión electromagnética CDC y tracción total con modos off-road", "Desde 54.900 €: muy por debajo de un X5 o GLE PHEV equivalentes"],
    contras: ["En corriente alterna solo admite 6,6 kW: llenar en casa la batería de 34,46 kWh lleva más de cinco horas y no aprovecha una instalación trifásica", "Su punta se queda en 180 km/h, corta para un conjunto de 428 CV", "Marca aún poco conocida en el segmento premium", "Con las 7 plazas desplegadas el maletero baja a 200 L", "Depreciación incierta en un segmento donde la marca pesa mucho"],
    largoMm: 4820,
    anchoMm: 1930,
    altoMm: 1710,
    pesoKg: 2304,
    consumo: 2.1,
    consumoUnidad: "l/100 km",
    plazas: 7,
    parNm: 580,
    traccion: "Total",
    emisionesCo2: 47,
    aprox: [],
    imagen: "",
    opiniones: [
      {
        "texto": "Por tamaño, por acabados, por rendimiento y por algunas cosas más está por encima de la media. Y desde luego que se revela como una opción muy a tener en cuenta para aquellos que quieran dar un salto hacia adelante sin tener que afrontar los precios de los fabricantes alemanes.",
        "usuario": "SoyMotor (primera prueba)",
        "fuente": "soymotor.com",
        "url": "https://soymotor.com/coches/jaecoo/primera-prueba-jaecoo-8-shs"
      },
      {
        "texto": "Un SUV híbrido enchufable de origen chino que destaca por una excelente relación entre calidad y precio. La calidad general es muy elevada, como su equipamiento tecnológico y espacio.",
        "usuario": "Periodismo del Motor (prueba en vídeo)",
        "fuente": "periodismodelmotor.com",
        "url": "https://periodismodelmotor.com/prueba-en-video-del-jaecoo-8-shs/422141/"
      }
    ],
    costeMensual: {"costeEnergia100km": 5.7, "costeMensualTotal": 211, "estimado": true, "mantenimientoAnual": 500, "notas": "Escenario propio de esta ficha: 15.000 km anuales con tarifa doméstica de 0,18 €/kWh para las recargas y el dato WLTP de 2,1 l/100 km cuando trabaja el motor térmico; sin cargar la batería de 34,46 kWh, el gasto real sube con claridad", "precioGasolinaL": 1.85, "precioKwh": 0.18, "seguroAmpliadoAnual": 1000, "seguroTercerosAnual": 550},
    galeria: [
      {
        "src": "",
        "alt": "Jaecoo 8 SHS, tres cuartos delantero",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "",
        "alt": "Jaecoo 8 SHS, vista trasera al atardecer",
        "ancho": 1920,
        "alto": 1280
      }
    ],
    euroncap: {"ano": null, "estrellas": null, "nota": "Sin datos EuroNCAP: modelo no probado (21/10/2026)", "url": null},
    planMantenimiento: {"costeAnualAproxEur": null, "fuente": "Datos CAP del Jaecoo 8 SHS publicados por Carwow Leasey (intervalo de 12 meses / 10.000 millas) y operaciones del mantenimiento programado de OMODA & JAECOO España (omodajaecoo.es); sin precio cerrado de revisión publicado para España", "intervalo": "Cada 12 meses o 16.000 km, lo que ocurra antes (10.000 millas en los datos CAP británicos del Jaecoo 8 SHS)", "revisiones": [{"costeAproxEur": null, "nombre": "Revisión anual / 16.000 km", "queSeCambia": "Cambio de aceite y de filtros, revisión de frenos y comprobación general del vehículo, las operaciones programadas que OMODA & JAECOO España incluye en sus mantenimientos"}]},
  },
  {
    id: "jaecoo-6-ev-2026-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/jaecoo-6-ev-2026-precio-ficha-tecnica-1.webp",
    imagenInteriorOficial: "/media/jaecoo-6-ev-2026-precio-ficha-tecnica-interior.webp",
    videoId: "iwc5mIbG_1s",
    videoCanal: "Wheelsboy",
    marca: "Jaecoo",
    modelo: "6 EV",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: 14000,
    potenciaCv: 184,
    autonomiaKm: 400,
    cicloAutonomia: "WLTP",
    maleteroL: 450,
    ceroCien: 10.5,
    velocidadMax: 150,
    bateriaKwh: 65.69,
    cargaRapidaKw: 80,
    etiquetaDgt: "Cero",
    pros: ["Un solo motor, y detrás: 184 CV y 220 Nm empujando desde el eje trasero, sin el motor delantero ni el peso extra de la versión de tracción total", "Batería LFP de 65,69 kWh, una química elegida por durabilidad en este modelo concreto, con garantía de batería publicada de 8 años o 160.000 km", "Carga rápida de 80 kW que pasa del 30 al 80 % en unos 30 minutos y función V2L de 3,3 kW para alimentar aparatos externos desde el coche", "Formato caja muy aprovechado: solo 4.342 mm de largo en esta versión trasera, 1.910 mm de ancho y aun así 450 litros de maletero para cinco ocupantes", "Pantalla central de 15,6 pulgadas con procesador Qualcomm Snapdragon 8155, un hardware concreto que se nota en la rapidez del sistema frente a chips más modestos"],
    contras: ["10,5 segundos de 0 a 100 km/h y 150 km/h de punta: es, con diferencia, la versión lenta del 6 EV, porque la de tracción total anuncia 6,5 segundos", "En España no se puede comprar: no hay precio oficial en euros ni red que lo venda aquí, y la cifra de esta ficha es una conversión desde los 109.800 yuanes de China", "La carga en alterna se queda en 6,6 kW, poco para una batería de 65,69 kWh si dependes de un wallbox, y la silueta cuadrada castiga el consumo en autopista", "Sin prueba EuroNCAP: no existe una nota de estrellas que respalde su seguridad, solo el equipamiento declarado por la marca en cada mercado"],
    largoMm: 4342,
    anchoMm: 1910,
    altoMm: 1715,
    pesoKg: 1775,
    consumo: null,
    consumoUnidad: null,
    plazas: 5,
    parNm: 220,
    traccion: "Trasera",
    emisionesCo2: 0,
    aprox: ["precioDesde", "autonomiaKm", "bateriaKwh", "pesoKg"],
    imagen: "/media/jaecoo-6-ev-2026-precio-ficha-tecnica-1.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 3.35,
      "seguroTercerosAnual": 500,
      "seguroAmpliadoAnual": 900,
      "mantenimientoAnual": 350,
      "costeMensualTotal": 146,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.58,
      "notas": "estimación proxy: el Jaecoo 6 EV no se vende en España; recarga doméstica a 0,18 €/kWh y consumo estimado de 18,6 kWh/100 km (65,69 kWh para 354 km WLTP según el distribuidor de Singapur)",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/jaecoo-6-ev-2026-precio-ficha-tecnica-2.webp",
        "alt": "Jaecoo 6 EV, SUV eléctrico de diseño caja en vista frontal",
        "ancho": 800,
        "alto": 533
      },
      {
        "src": "/media/jaecoo-6-ev-2026-precio-ficha-tecnica-3.webp",
        "alt": "Jaecoo 6 EV, lateral del todocamino eléctrico",
        "ancho": 800,
        "alto": 533
      },
      {
        "src": "/media/jaecoo-6-ev-2026-precio-ficha-tecnica-4.webp",
        "alt": "Jaecoo 6 EV, detalle del frontal tipo Defender",
        "ancho": 800,
        "alto": 450
      },
      {
        "src": "/media/jaecoo-6-ev-2026-precio-ficha-tecnica-foto2.webp",
        "alt": "Jaecoo 6 EV, SUV eléctrico de diseño caja en vista de estudio",
        "ancho": 1024,
        "alto": 1024
      },
      {
        "src": "/media/jaecoo-6-ev-2026-precio-ficha-tecnica-hero.webp",
        "alt": "Jaecoo 6 EV en pista de tierra",
        "ancho": 800,
        "alto": 450
      }
    ],
    analisisSlug: "jaecoo-6-ev-2026-precio-ficha-tecnica",
    euroncap: {"estrellas": null, "ano": null, "url": null, "nota": "Sin datos EuroNCAP: el Jaecoo 6 EV / J6 no consta como modelo probado por EuroNCAP; la nota de cinco estrellas que circula de la marca corresponde al Jaecoo J7 SHS, un modelo distinto, y no es trasladable a este coche."},
    planMantenimiento: null,
    fuenteNombre: "Jaecoo Tailandia (ficha oficial) + SGCarMart / Omoda&Jaecoo Singapur",
    fuenteUrl: "https://imgcdn.zigwheels.co.th/brochures/116/3843/jaecoo-6-ev-754122.pdf",
  },
  {
    id: "jaecoo-6-ev-awd-2026-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/jaecoo-6-ev-awd-2026-precio-ficha-tecnica-hero.webp",
    imagenInteriorOficial: "/media/jaecoo-6-ev-awd-2026-precio-ficha-tecnica-interior.webp",
    videoId: "fxy23OXbrLE",
    videoCanal: "CarShowcase",
    marca: "Jaecoo",
    modelo: "6 EV AWD",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: 17700,
    potenciaCv: 279,
    autonomiaKm: 342,
    cicloAutonomia: "WLTP",
    maleteroL: 450,
    ceroCien: 6.5,
    velocidadMax: 150,
    bateriaKwh: 69.77,
    cargaRapidaKw: 80,
    etiquetaDgt: "Cero",
    pros: ["No es un motor con un extra delante: el delantero aporta 95 CV y 165 Nm y el trasero, 184 CV y 220 Nm; juntos dan los 279 CV y 385 Nm de la ficha y el 0-100 km/h en 6,5 s, algo que la versión de tracción simple no puede firmar.", "La batería de 69,77 kWh es la grande de la gama y en China solo se ofrecía con tracción total: con ella la ficha homologa 342 km WLTP, frente a los 501 km CLTC que el iCAR 03 AWD declaraba en su mercado de origen.", "Pensado para salir del asfalto sin ser un todoterreno puro: nueve modos de conducción, cámara de 540° con chasis transparente y función V2L de 3,3 kW para alimentar equipo en una escapada.", "El maletero se queda en 450 litros pese a llevar motor también delante, y suma el cofre exterior trasero: en un coche de solo 4.406 mm de largo, ese aprovechamiento se nota en uso real.", "La batería LFP tiene garantía publicada de 8 años o 160.000 km, un dato comprobable en la ficha y especialmente relevante en un modelo que solo podrás traer de mercados lejanos."],
    contras: ["En España no se vende: Jaecoo lo destina a Asia, Latinoamérica y Oceanía, y el precio de la ficha es una conversión desde los 139.800 yuanes del iCAR 03 4WD chino, no un PVP español con red y posventa detrás.", "Su silueta de caja cobra peaje: 23,7 kWh/100 km de consumo declarado, velocidad punta limitada a 150 km/h y una autonomía de autopista que caerá claramente por debajo de los 342 km WLTP.", "Cargar no es su fuerte para ser un eléctrico de 2026: 80 kW en continua, con el 30-80 % en 30 minutos, y solo 6,6 kW en alterna según la especificación de Singapur, unas 10,5 horas para una carga completa.", "Pesa 1.875 kg y, como comprobó Asphalt SG en pista de tierra, le falta articulación de ruedas para un fuera de pista serio: los nueve modos ayudan a traccionar, pero no lo convierten en un Defender eléctrico, y Euro NCAP nunca lo ha probado."],
    largoMm: 4406,
    anchoMm: 1910,
    altoMm: 1715,
    pesoKg: 1875,
    consumo: 23.7,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: 385,
    traccion: "Total",
    emisionesCo2: 0,
    aprox: ["precioDesde", "pesoKg"],
    imagen: "/media/jaecoo-6-ev-awd-2026-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 4.27,
      "seguroTercerosAnual": 550,
      "seguroAmpliadoAnual": 950,
      "mantenimientoAnual": 350,
      "costeMensualTotal": 162,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.58,
      "notas": "estimación proxy: el Jaecoo 6 EV AWD no se vende en España; recarga doméstica a 0,18 €/kWh y consumo declarado de 23,7 kWh/100 km (Asphalt SG)",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/jaecoo-6-ev-awd-2026-precio-ficha-tecnica-hero.webp",
        "alt": "Jaecoo 6 EV AWD en pista de tierra, tres cuartos delantero",
        "ancho": 1280,
        "alto": 853
      },
      {
        "src": "/media/jaecoo-6-ev-awd-2026-precio-ficha-tecnica-foto2.webp",
        "alt": "Jaecoo 6 EV AWD, vista lateral en camino rural",
        "ancho": 1280,
        "alto": 853
      },
      {
        "src": "/media/jaecoo-6-ev-awd-2026-precio-ficha-tecnica-interior.webp",
        "alt": "Interior del Jaecoo 6 EV AWD con pantalla de 15,6 pulgadas",
        "ancho": 1400,
        "alto": 933
      }
    ],
    analisisSlug: "jaecoo-6-ev-awd-2026-precio-ficha-tecnica",
    euroncap: {"estrellas": null, "ano": null, "url": null, "nota": "Sin prueba Euro NCAP localizada para el Jaecoo J6 / iCAR 03 a 21/10/2026: en euroncap.com solo consta el Jaecoo 7 PHEV, un modelo distinto. No trasladar sus estrellas a esta versión AWD."},
    planMantenimiento: null,
    fuenteNombre: "Asphalt SG / Motorist SG + Jaecoo Tailandia (ficha oficial)",
    fuenteUrl: "https://asphaltsg.com/2025-jaecoo-j6-electric-awd-69-77kwh-review-jewel-in-a-box/",
  },
];
