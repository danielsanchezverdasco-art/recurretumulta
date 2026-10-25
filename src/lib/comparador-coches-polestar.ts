// Fichas técnicas Polestar (04/10/2026) — equipo POLESTAR.
// Modelos REALES de la gama 2024+ vendidos en Europa/España: 2, 3, 4 SUV y 5.
// El Polestar 4 coupé ya existe en comparador-coches-nuevos.ts (id "polestar-4-precio-ficha-tecnica").
// Polestar 6 (roadster) y Polestar 7 (SUV compacto, 2028) NO están a la venta en 2026: no se incluyen.
// Datos verificados el 04/10/2026: polestar.com/es (oficial), km77.com, coches.net,
// autonocion.com, actualidadmotor.com, quecochemecompro.com. Dato no verificado → null.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const COCHES_POLESTAR: CocheComparador[] = [
  {
    id: "polestar-2-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: 70,
    imagenOficial: "/media/polestar-2-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: "gZ5szegzEOA",
    videoCanal: "carwow España (JF Calero)",
    marca: "Polestar",
    modelo: "2",
    tipo: "Eléctrico",
    categoria: "Berlina",
    precioDesde: 41900, // en oferta en España (08/2026); tarifa sin oferta desde ~46.990 €
    potenciaCv: 272,
    autonomiaKm: 554, // Standard Range Single Motor (WLTP); Long Range llega a 659 km
    maleteroL: 446,
    ceroCien: 6.4,
    velocidadMax: 205,
    bateriaKwh: 70,
    cargaRapidaKw: 180, // 10-80 % en 25 min
    etiquetaDgt: "Cero",
    pros: [
      "554 km WLTP con la batería de 70 kWh: de las mejores autonomías de su segmento",
      "Desde 41.900 € en oferta: el Polestar más asequible y el más probado de la gama",
      "Tracción trasera y chasis afinado: el más divertido de conducir de su clase",
      "Android Automotive con Google integrado: el mejor sistema multimedia del segmento",
      "Carga rápida de 180 kW (10-80 % en 25 min) y maletero de 446 L",
    ],
    contras: [
      "El Tesla Model 3 sigue siendo más barato y carga más rápido",
      "Diseño casi sin cambios desde 2020: se nota la edad frente a rivales nuevos",
      "La segunda generación llega en 2027: es el modelo saliente de la gama",
      "Red comercial mínima en España (venta online; Spaces solo en Madrid y Barcelona)",
      "Plazas traseras justas para adultos altos por la caída del techo",
    ],
    largoMm: 4606,
    anchoMm: 1859,
    altoMm: 1479,
    pesoKg: 1944,
    consumo: 14.9,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: null,
    traccion: "Trasera",
    emisionesCo2: 0,
    aprox: [],
    imagen: "/media/polestar-2-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    fuenteNombre: "coches.net",
    fuenteUrl: "https://www.coches.net/fichas_tecnicas/polestar/2/berlina/5-puertas/stand_range_single_motor_rwd_70kwh_prime_272cv_electrico/114160/846784920250321/",
    costeMensual: {
      "costeEnergia100km": 2.7,
      "seguroTercerosAnual": 450,
      "seguroAmpliadoAnual": 850,
      "mantenimientoAnual": 250,
      "costeMensualTotal": 125,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "15000 km/año; consumo WLTP 14,9 kWh/100 km a 0,18 €/kWh; seguro y mantenimiento estimados por segmento premium",
      "estimado": true
    },
    galeria: [
      {
        "src": "",
        "alt": "Polestar 2, berlina eléctrica, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Polestar 2, vista lateral",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del Polestar 2, salpicadero con pantalla vertical",
        "ancho": 1200,
        "alto": 800
      }
    ],
  },
  {
    id: "polestar-3-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: 70,
    imagenOficial: "/media/polestar-3-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: "z70J32S30SU",
    videoCanal: "The Polestar Vlog",
    marca: "Polestar",
    modelo: "3",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: 81900, // Rear Motor 333 CV (MY2026, arquitectura 800 V)
    potenciaCv: 333,
    autonomiaKm: 604, // Rear Motor (WLTP); el Dual Motor 544 CV llega a 635 km
    maleteroL: 484,
    ceroCien: 6.5,
    velocidadMax: 210,
    bateriaKwh: 92, // CATL (MY2026); 106 kWh en Dual Motor y Performance
    cargaRapidaKw: 350, // 800 V; 10-80 % en 22 min
    etiquetaDgt: "Cero",
    pros: ["Su salto a los 800 V se nota donde más viajaba el Single Motor anterior: cargar del 10 al 80 % baja de unos 30 a 22 minutos, pese a que la batería pasa de 111 a 92 kWh.", "El motor trasero único sube de 299 a 333 CV y el 0 a 100 cae de 7,8 a 6,5 segundos: ya no es la versión lenta de la gama, solo la de un motor.", "Con un solo motor y tracción trasera homologa 604 km WLTP y etiqueta Cero de la DGT, sin cargar con el peso ni el consumo extra del segundo motor delantero del Dual Motor.", "En Euro NCAP 2025 sacó un 93 % en protección infantil, la nota más alta de un turismo en nueve años según el organismo: si viajas con sillas infantiles, es su argumento más serio.", "Android Automotive va nativo en la pantalla de 14,5 pulgadas, con Google Maps y las actualizaciones OTA que Polestar ha ido soltando desde las primeras entregas de 2024."],
    contras: ["81.900 € de partida en España por un coche de un solo motor y tracción trasera: el ahorro frente al Dual Motor existe, pero la factura sigue siendo de segmento alto.", "El maletero se queda en 484 litros en un SUV de 4,90 metros: para el equipaje de una familia en vacaciones largas toca jugar al tetris o montar cofre.", "La ganancia de carga rápida se paga con alcance: 604 km WLTP frente a los 650 km del Single Motor saliente, que llevaba una batería mayor de 111 kWh.", "Casi no hay botones físicos en el salpicadero: climatización, espejos y hasta la guantera se gobiernan desde la pantalla central, con la distracción que eso supone en marcha."],
    largoMm: 4900,
    anchoMm: 1968,
    altoMm: 1614,
    pesoKg: null,
    consumo: null,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: null,
    traccion: "Trasera",
    emisionesCo2: 0,
    aprox: [],
    imagen: "/media/polestar-3-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    fuenteNombre: "actualidadmotor.com",
    fuenteUrl: "https://www.actualidadmotor.com/polestar-3-my2026-salto-a-800-v-mas-potencia-y-carga-ultrarrapida/",
    costeMensual: {
      "costeEnergia100km": 3.4,
      "seguroTercerosAnual": 550,
      "seguroAmpliadoAnual": 1050,
      "mantenimientoAnual": 350,
      "costeMensualTotal": 159,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "15000 km/año; consumo estimado ~19 kWh/100 km a 0,18 €/kWh (sin dato WLTP publicado para la base MY2026); seguro y mantenimiento estimados por segmento premium",
      "estimado": true
    },
    galeria: [
      {
        "src": "",
        "alt": "Polestar 3, SUV eléctrico grande, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Polestar 3, vista lateral",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del Polestar 3, pantalla vertical de 14,5 pulgadas",
        "ancho": 1200,
        "alto": 800
      }
    ],
    planMantenimiento: {"intervalo": "Plan de mantenimiento del fabricante (detalle en las revisiones)", "revisiones": [{"nombre": "Plan de mantenimiento del fabricante", "queSeCambia": "Según la página oficial española del Polestar 3, como norma general no requiere mantenimiento hasta los 2 años o los 30.000 km, lo que antes ocurra. Los diagnósticos a bordo avisan si hace falta un servicio adicional y las actualizaciones inalámbricas mantienen al día el sistema. Polestar no publica un precio cerrado de revisión para España, así que el coste concreto hay que pedirlo en el punto de servicio autorizado.", "costeAproxEur": null}], "costeAnualAproxEur": null, "fuente": "https://www.polestar.com/es/polestar-3/specifications"},
  },
  {
    id: "polestar-4-suv-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: 70,
    imagenOficial: "/media/polestar-4-suv-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: null,
    videoCanal: null,
    marca: "Polestar",
    modelo: "4 SUV",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: 54390, // según polestar.com/es (10/2026); pedidos ya abiertos
    potenciaCv: null, // versión base Rear Motor: potencia sin confirmar oficialmente
    autonomiaKm: 630, // Rear Motor (WLTP), según polestar.com/es
    maleteroL: 530, // 655 L hasta el techo; 1.665 L con asientos abatidos
    ceroCien: null, // 3,9 s corresponde al Dual Motor (400 kW), no a la base
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: 200, // arquitectura 400 V
    etiquetaDgt: "Cero",
    pros: [
      "630 km WLTP desde 54.390 €: el SUV eléctrico premium con mejor binomio autonomía/precio",
      "Maletero de 530 L ampliable a 1.665 L: por fin un Polestar 4 práctico de verdad",
      "Luneta trasera de cristal (el coupé no la tiene) más retrovisor digital",
      "Carga rápida de 200 kW y barras de techo para 100 kg extra",
      "Google y Gemini integrados, techo panorámico electrocrómico y Harman Kardon de 1.400 W",
    ],
    contras: [
      "Presentado en octubre de 2026: aún sin pruebas independientes",
      "Potencia, batería y medidas de la versión base sin confirmar oficialmente",
      "Es un Polestar 4 coupé con techo más alto: no es un SUV puro",
      "Red comercial mínima en España (venta online y Spaces)",
      "El Dual Motor de 400 kW se irá muy por encima de los 60.000 €",
    ],
    largoMm: null,
    anchoMm: null,
    altoMm: null,
    pesoKg: null,
    consumo: null,
    consumoUnidad: "kWh/100 km",
    plazas: null,
    parNm: null,
    traccion: "Trasera", // versión base Rear Motor
    emisionesCo2: 0,
    aprox: [],
    imagen: "/media/polestar-4-suv-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    fuenteNombre: "polestar.com",
    fuenteUrl: "https://www.polestar.com/es/polestar-4-models/polestar-4-suv/",
    costeMensual: {
      "costeEnergia100km": 3.2,
      "seguroTercerosAnual": 500,
      "seguroAmpliadoAnual": 950,
      "mantenimientoAnual": 300,
      "costeMensualTotal": 144,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "15000 km/año; consumo estimado ~18 kWh/100 km a 0,18 €/kWh (oficial solo para el Dual Motor: 19,0-21,6); seguro y mantenimiento estimados por segmento premium",
      "estimado": true
    },
    galeria: [
      {
        "src": "",
        "alt": "Polestar 4 SUV, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Polestar 4 SUV, vista trasera con luneta de cristal",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del Polestar 4 SUV, iluminación ambiental",
        "ancho": 1200,
        "alto": 800
      }
    ],
  },
  {
    id: "polestar-5-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: 70,
    imagenOficial: "/media/polestar-5-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: null, // sin review española con canal verificado a 04/10/2026
    videoCanal: null,
    marca: "Polestar",
    modelo: "5",
    tipo: "Eléctrico",
    categoria: "Berlina", // GT de 4 puertas
    precioDesde: 121900, // Dual Motor Launch Edition (polestar.com/es)
    potenciaCv: 748, // Dual Motor (550 kW); Performance: 884 CV (650 kW)
    autonomiaKm: 678, // Dual Motor (WLTP), según polestar.com/es
    maleteroL: 427, // 365 L trasero + 62 L delantero
    ceroCien: 3.9, // Dual Motor; Performance: 3,2 s
    velocidadMax: 250,
    bateriaKwh: 112, // bruta; 106 kWh útiles
    cargaRapidaKw: 350, // 800 V; 10-80 % en 22 min
    etiquetaDgt: "Cero",
    pros: ["La Dual Motor es la lógica de la gama: 678 km WLTP frente a 558 km del Performance, con un consumo oficial de 17,8-18,3 kWh/100 km frente a 21,2, sobre llantas Aero de 20 pulgadas pensadas para no castigar la autonomía en autovía.", "No recorta en carga por ser la estándar: batería NMC de 112 kWh sobre arquitectura de 800 V, pico de 350 kW en continua y paso del 10 al 80 % en 22 minutos, con 11 kW en alterna para la carga nocturna completa en unas 11 horas.", "Con 748 CV, 812 Nm y 3,9 segundos hasta 100 km/h no se queda corta en ningún adelantamiento, y cuesta 23.400 euros menos que el Performance: 121.900 frente a 145.300 euros en España, compartiendo velocidad punta limitada a 250 km/h.", "Estrena la plataforma propia Polestar Performance Architecture de aluminio encolado, con motor trasero de desarrollo interno, frenos Brembo de cuatro pistones con discos de dos piezas y una batalla de 3.054 mm que se traduce en plazas traseras de GT, no de compromiso.", "Su chasis pasivo avanzado, con amortiguadores de alta capacidad y topes de rebote hidráulicos, evita depender de la electrónica MagneRide del Performance para viajar rápido y cómodo; las primeras pruebas destacan precisamente cómo absorbe los baches sin rebotes secos."],
    contras: ["121.900 euros siguen siendo 121.900 euros: por ese dinero Porsche vende Taycan y Audi su e-tron GT, con una red, una imagen y un valor residual que Polestar, todavía minoritaria en España, aún no puede igualar.", "Pesa 2.500 kg según la homologación oficial y mide 5.087 mm de largo con un radio de giro de 12,33 m: en un garaje estrecho o callejeando entre coches aparcados se maneja como lo que es, un GT grande, no como una berlina ágil de ciudad.", "El maletero trasero se queda en 365 litros —427 litros solo si sumas los 62 del delantero— para un coche de más de cinco metros: una maleta grande por pasajero y poco más, por mucho que el portón eléctrico ayude a cargar.", "No hay luneta trasera: mirar hacia atrás depende del retrovisor digital de 8,9 pulgadas alimentado por una cámara en el techo. Funciona, pero exige acostumbrarse a una imagen sin profundidad real y a fiarte de la electrónica en maniobras cerradas."],
    largoMm: 5090,
    anchoMm: null, // 2,06 m con retrovisores; anchura de carrocería sin verificar
    altoMm: 1420,
    pesoKg: 2503,
    consumo: 20.9,
    consumoUnidad: "kWh/100 km",
    plazas: 4,
    parNm: 812, // Dual Motor
    traccion: "Total",
    emisionesCo2: 0,
    aprox: ["consumo"], // dato de prueba independiente, no WLTP oficial
    imagen: "/media/polestar-5-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    fuenteNombre: "polestar.com",
    fuenteUrl: "https://www.polestar.com/es/polestar-5/",
    costeMensual: {
      "costeEnergia100km": 3.8,
      "seguroTercerosAnual": 700,
      "seguroAmpliadoAnual": 1400,
      "mantenimientoAnual": 450,
      "costeMensualTotal": 202,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "15000 km/año; consumo ~20,9 kWh/100 km a 0,18 €/kWh (dato de prueba); seguro y mantenimiento estimados por segmento superdeportivo eléctrico",
      "estimado": true
    },
    galeria: [
      {
        "src": "",
        "alt": "Polestar 5, GT eléctrico de 4 puertas, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Polestar 5, vista lateral, silueta de gran turismo",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del Polestar 5, asientos Recaro",
        "ancho": 1200,
        "alto": 800
      }
    ],
    euroncap: {"estrellas": null, "ano": null, "url": null, "nota": "Sin evaluación Euro NCAP publicada para el Polestar 5 a fecha de esta revisión: CarExpert, Complete Car y Auto Express coinciden en que permanece sin probar por Euro NCAP. Que el Polestar 2, el 3 y el 4 hayan logrado cinco estrellas no permite trasladar esa nota a este modelo, por mucho que la marca lo haya desarrollado con ese objetivo."},
    planMantenimiento: {"intervalo": "Plan de mantenimiento del fabricante (detalle en las revisiones)", "revisiones": [{"nombre": "Plan de mantenimiento del fabricante", "queSeCambia": "Según Polestar, el Polestar 5 no requiere mantenimiento en general durante hasta 2 años o 30.000 km. El diagnóstico de a bordo avisa si hace falta alguna intervención adicional y las actualizaciones over-the-air mantienen al día el sistema operativo, las aplicaciones y los sistemas del coche. El servicio se apoya en la red de Volvo Cars, con cientos de puntos en Europa a una distancia media de 11 km, y todo Polestar 5 nuevo incluye 3 años de asistencia en carretera gratuita 24/7.", "costeAproxEur": null}], "costeAnualAproxEur": null, "fuente": "https://www.polestar.com/es/polestar-5/specifications/"},
  },
  {
    id: "polestar-2-long-range-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: 70,
    imagenOficial: "/media/polestar-2-long-range-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: "gZ5szegzEOA",
    videoCanal: "carwow España (JF Calero)",
    marca: "Polestar",
    modelo: "2 Long Range",
    tipo: "Eléctrico",
    categoria: "Berlina",
    precioDesde: 50140, // Long Range Single Motor (km77, 2026)
    potenciaCv: 299,
    autonomiaKm: 659, // WLTP
    maleteroL: 446,
    ceroCien: 6.2,
    velocidadMax: 205,
    bateriaKwh: 82, // 79 kWh útiles
    cargaRapidaKw: 205, // 10-80 % en 28 min
    etiquetaDgt: "Cero",
    pros: [
      "659 km WLTP: la mayor autonomía de un Polestar 2",
      "299 CV traseros y 490 Nm: equilibrio perfecto entre eficiencia y diversión",
      "Carga de 205 kW (10-80 % en 28 min), de lo mejor del segmento",
      "Android Automotive con Google: el mejor multimedia de su clase",
      "Desde 50.140 €: el eléctrico premium con más km por euro",
    ],
    contras: [
      "8.000 € más que el Standard Range por 105 km extra",
      "El Tesla Model 3 Gran Autonomía cuesta menos",
      "Diseño sin cambios desde 2020",
      "La segunda generación llega en 2027",
      "Red comercial mínima en España",
    ],
    largoMm: 4606,
    anchoMm: 1859,
    altoMm: 1479,
    pesoKg: 2084,
    consumo: 14.8,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: 490,
    traccion: "Trasera",
    emisionesCo2: 0,
    aprox: [],
    imagen: "/media/polestar-2-long-range-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    fuenteNombre: "coches.net",
    fuenteUrl: "https://www.coches.net/fichas_tecnicas/polestar/2/berlina/5-puertas/long_range_single_motor_rwd_82kwh_prime_299cv_electrico/114161/846785120250311/",
    costeMensual: {
      "costeEnergia100km": 2.7,
      "seguroTercerosAnual": 450,
      "seguroAmpliadoAnual": 850,
      "mantenimientoAnual": 250,
      "costeMensualTotal": 126,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "15000 km/año; consumo WLTP 14,8 kWh/100 km a 0,18 €/kWh; seguro y mantenimiento estimados por segmento premium",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/polestar-2-long-range-precio-ficha-tecnica-oficial.webp",
        "alt": "Polestar 2 Long Range, berlina eléctrica, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del Polestar 2 Long Range",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/polestar-2-long-range-precio-ficha-tecnica-hero.webp",
        "alt": "Polestar 2 Long Range en carretera",
        "ancho": 1200,
        "alto": 800
      }
    ],
  },
  {
    id: "polestar-2-long-range-dual-motor-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: 70,
    imagenOficial: "/media/polestar-2-long-range-dual-motor-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: "gZ5szegzEOA",
    videoCanal: "carwow España (JF Calero)",
    marca: "Polestar",
    modelo: "2 Long Range Dual Motor",
    tipo: "Eléctrico",
    categoria: "Berlina",
    precioDesde: 53940, // km77, 2026
    potenciaCv: 421,
    autonomiaKm: 596, // WLTP
    maleteroL: 446,
    ceroCien: 4.5,
    velocidadMax: 205,
    bateriaKwh: 82,
    cargaRapidaKw: 205,
    etiquetaDgt: "Cero",
    pros: [
      "421 CV y 4,5 s de 0-100: el Polestar 2 más equilibrado en prestaciones",
      "Tracción total para todo el año sin renunciar a 596 km WLTP",
      "Carga de 205 kW y chasis afinado por ingenieros de Volvo",
      "Android Automotive con Google integrado",
      "Más barato que un BMW i4 o un Tesla Model 3 Performance equivalente",
    ],
    contras: [
      "El Performance de 476 CV cuesta solo 10.000 € más",
      "Consumo de 15,9 kWh/100 km: el más tragón de la gama 2",
      "Diseño que acusa los años frente a rivales nuevos",
      "Relevo generacional en 2027: depreciación a la vista",
      "Red comercial mínima en España",
    ],
    largoMm: 4606,
    anchoMm: 1859,
    altoMm: 1479,
    pesoKg: null,
    consumo: 15.9,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: null,
    traccion: "Total",
    emisionesCo2: 0,
    aprox: [],
    imagen: "/media/polestar-2-long-range-dual-motor-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    fuenteNombre: "km77.com",
    fuenteUrl: "https://www.km77.com/coches/polestar/2/2024/estandar?amp=1",
    costeMensual: {
      "costeEnergia100km": 2.9,
      "seguroTercerosAnual": 500,
      "seguroAmpliadoAnual": 950,
      "mantenimientoAnual": 300,
      "costeMensualTotal": 139,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "15000 km/año; consumo WLTP 15,9 kWh/100 km a 0,18 €/kWh; seguro y mantenimiento estimados por segmento premium",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/polestar-2-long-range-dual-motor-precio-ficha-tecnica-oficial.webp",
        "alt": "Polestar 2 Long Range Dual Motor, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del Polestar 2 Long Range Dual Motor",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/polestar-2-long-range-dual-motor-precio-ficha-tecnica-hero.webp",
        "alt": "Polestar 2 Long Range Dual Motor en una carretera de curvas",
        "ancho": 1200,
        "alto": 800
      }
    ],
  },
  {
    id: "polestar-2-performance-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: 70,
    imagenOficial: "/media/polestar-2-performance-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: "gZ5szegzEOA",
    videoCanal: "carwow España (JF Calero)",
    marca: "Polestar",
    modelo: "2 Performance",
    tipo: "Eléctrico",
    categoria: "Berlina",
    precioDesde: 63650, // Long Range Dual Motor Performance Pack (km77, 2026)
    potenciaCv: 476,
    autonomiaKm: 568, // WLTP
    maleteroL: 446,
    ceroCien: 4.2,
    velocidadMax: 205,
    bateriaKwh: 82,
    cargaRapidaKw: 205,
    etiquetaDgt: "Cero",
    pros: [
      "476 CV y amortiguadores Öhlins ajustables: el Polestar 2 definitivo",
      "0-100 en 4,2 s manteniendo 568 km de autonomía WLTP",
      "Frenos Brembo y llantas forjadas de 20\" de serie",
      "Eléctrico deportivo con tacto de coche de carreras",
      "Carga de 205 kW: 10-80 % en 28 minutos",
    ],
    contras: [
      "63.650 €: territorio BMW i4 M50 y Tesla Model 3 Performance",
      "Suspensión Öhlins firme: incómoda en ciudad",
      "Consumo de 16,8 kWh/100 km",
      "La segunda generación llega en 2027",
      "Solo para apasionados: el Dual Motor normal ya va sobrado",
    ],
    largoMm: 4606,
    anchoMm: 1859,
    altoMm: 1479,
    pesoKg: null,
    consumo: 16.8,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: null,
    traccion: "Total",
    emisionesCo2: 0,
    aprox: [],
    imagen: "/media/polestar-2-performance-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    fuenteNombre: "km77.com",
    fuenteUrl: "https://www.km77.com/coches/polestar/2/2024/estandar?amp=1",
    costeMensual: {
      "costeEnergia100km": 3.0,
      "seguroTercerosAnual": 550,
      "seguroAmpliadoAnual": 1050,
      "mantenimientoAnual": 350,
      "costeMensualTotal": 154,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "15000 km/año; consumo WLTP 16,8 kWh/100 km a 0,18 €/kWh; seguro y mantenimiento estimados por segmento premium deportivo",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/polestar-2-performance-precio-ficha-tecnica-oficial.webp",
        "alt": "Polestar 2 Performance, berlina eléctrica deportiva, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del Polestar 2 Performance",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/polestar-2-performance-precio-ficha-tecnica-hero.webp",
        "alt": "Polestar 2 Performance en circuito",
        "ancho": 1200,
        "alto": 800
      }
    ],
  },
  {
    id: "polestar-3-dual-motor-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: 70,
    imagenOficial: "/media/polestar-3-dual-motor-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: "Sbw04eT8-8Y",
    videoCanal: "SoyMotor",
    marca: "Polestar",
    modelo: "3 Dual Motor",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: 91900, // MY2026 (quecochemecompro.com)
    potenciaCv: 544,
    autonomiaKm: 635, // WLTP
    maleteroL: 484,
    ceroCien: 4.7,
    velocidadMax: 210,
    bateriaKwh: 106, // CATL
    cargaRapidaKw: 350, // 800 V; 10-80 % en 22 min
    etiquetaDgt: "Cero",
    pros: ["544 CV entre los dos motores y 0 a 100 km/h en 4,7 s: el Dual Motor empuja como un deportivo, pero sin renunciar a 635 km WLTP, más que los 593 km del Performance.", "Con la arquitectura de 800 V del Model Year 2026 carga a 350 kW y pasa del 10 al 80 % en 22 minutos; en viaje largo la parada dura lo que un café, no media hora.", "El motor trasero es de desarrollo propio de Polestar y el delantero, asíncrono, se desconecta cuando no hace falta: tracción total cuando la pides y eficiencia de tracción trasera circulando tranquilo.", "Cinco estrellas Euro NCAP en 2025 con un 93 % en protección infantil, la nota más alta de un turismo en nueve años, y premio al coche ejecutivo más seguro de su clase ese año.", "Suspensión neumática y reparto de par con sesgo trasero: en un SUV de 4,90 m se nota más ágil de lo que sugiere su tamaño al enlazar curvas."],
    contras: ["91.900 € de partida: son 10.000 € más que el Rear Motor de 81.900 €, y la diferencia solo se amortiza si de verdad vas a usar la tracción total y los 544 CV.", "484 litros de maletero trasero resultan justos para un SUV de 4,90 m pensado para viajar en familia; el hueco delantero ayuda, pero no compensa del todo.", "Prácticamente todo se maneja desde la pantalla central de 14,5 pulgadas, sin mandos físicos para funciones básicas: obliga a apartar la vista más de lo deseable.", "La red comercial y de servicio de Polestar en España sigue siendo mínima comparada con la de BMW, Mercedes o Audi, algo a tener en cuenta lejos de las grandes ciudades."],
    largoMm: 4900,
    anchoMm: 1968,
    altoMm: 1614,
    pesoKg: null,
    consumo: null,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: null,
    traccion: "Total",
    emisionesCo2: 0,
    aprox: [],
    imagen: "/media/polestar-3-dual-motor-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    fuenteNombre: "quecochemecompro.com",
    fuenteUrl: "https://www.quecochemecompro.com/precios/polestar-3/",
    costeMensual: {
      "costeEnergia100km": 3.3,
      "seguroTercerosAnual": 600,
      "seguroAmpliadoAnual": 1150,
      "mantenimientoAnual": 350,
      "costeMensualTotal": 166,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "15000 km/año; consumo estimado ~18,5 kWh/100 km a 0,18 €/kWh (sin dato WLTP publicado para el Dual Motor MY2026); seguro y mantenimiento estimados por segmento premium",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/polestar-3-dual-motor-precio-ficha-tecnica-oficial.webp",
        "alt": "Polestar 3 Dual Motor, SUV eléctrico, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del Polestar 3 Dual Motor",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/polestar-3-dual-motor-precio-ficha-tecnica-hero.webp",
        "alt": "Polestar 3 Dual Motor en una carretera de montaña",
        "ancho": 1200,
        "alto": 800
      }
    ],
    euroncap: {"estrellas": 5, "ano": 2025, "url": "https://www.euroncap.com/press-media/polestar-3-suv-sets-the-standard-for-child-safety/", "nota": "Resultado Euro NCAP verificado para este modelo."},
    planMantenimiento: {"intervalo": "Plan de mantenimiento del fabricante (detalle en las revisiones)", "revisiones": [{"nombre": "Plan de mantenimiento del fabricante", "queSeCambia": "Polestar programa el servicio recomendado cada 24 meses o 30.000 km, lo que antes se cumpla, según su documentación de Estado y Garantía; el propio coche avisa en la pantalla del conductor cuando toca. La operación incluye la sustitución del filtro de aire del habitáculo y las comprobaciones de estado y funcionamiento del programa, y debe hacerse en un punto de servicio autorizado Polestar: es requisito para mantener la garantía y el único cauce válido para intervenir en los componentes de alta tensión. No hay aceite de motor que cambiar, pero frenos, neumáticos y refrigeración de la batería siguen necesitando esa revisión bienal.", "costeAproxEur": null}], "costeAnualAproxEur": null, "fuente": "Polestar, manual del Polestar 3 2025 (Mantenimiento y reparaciones / Programa de servicio recomendado) y documentos Estado y Garantía de Polestar: https://www.polestar.com/es/manual/polestar-3/2025/article/47d2c97fd33effd3c0a8cc3718c999b7-78dc049ace167626c0a8b04a76a3614f-8664b2fa77a7e089c0a8296870d1a409/"},
  },
  {
    id: "polestar-3-performance-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: 70,
    imagenOficial: "/media/polestar-3-performance-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: "Sbw04eT8-8Y",
    videoCanal: "SoyMotor",
    marca: "Polestar",
    modelo: "3 Performance",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: 110300, // MY2026 (quecochemecompro.com)
    potenciaCv: 680,
    autonomiaKm: 593, // WLTP
    maleteroL: 484,
    ceroCien: 3.9,
    velocidadMax: 210,
    bateriaKwh: 106, // CATL
    cargaRapidaKw: 350, // 800 V; 10-80 % en 22 min
    etiquetaDgt: "Cero",
    pros: [
      "680 CV y 3,9 s de 0-100: el SUV eléctrico sueco más rápido",
      "800 V y 350 kW: 10-80 % en 22 minutos",
      "593 km WLTP pese a la potencia: eficiencia notable",
      "Chasis con diferencial trasero y frenos Brembo",
      "Interior de diseño escandinavo con Bowers & Wilkins",
    ],
    contras: [
      "110.300 €: territorio Porsche Cayenne eléctrico",
      "El Dual Motor de 544 CV ya es rapidísimo por 18.000 € menos",
      "Consumo real por encima de 22 kWh/100 km si se le pisa",
      "2,7 toneladas: se notan en curva",
      "Red comercial mínima en España",
    ],
    largoMm: 4900,
    anchoMm: 1968,
    altoMm: 1614,
    pesoKg: null,
    consumo: null,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: null,
    traccion: "Total",
    emisionesCo2: 0,
    aprox: [],
    imagen: "/media/polestar-3-performance-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    fuenteNombre: "quecochemecompro.com",
    fuenteUrl: "https://www.quecochemecompro.com/precios/polestar-3/",
    costeMensual: {
      "costeEnergia100km": 3.6,
      "seguroTercerosAnual": 650,
      "seguroAmpliadoAnual": 1250,
      "mantenimientoAnual": 400,
      "costeMensualTotal": 182,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "15000 km/año; consumo estimado ~20 kWh/100 km a 0,18 €/kWh (sin dato WLTP publicado para el Performance MY2026); seguro y mantenimiento estimados por segmento premium",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/polestar-3-performance-precio-ficha-tecnica-oficial.webp",
        "alt": "Polestar 3 Performance, SUV eléctrico deportivo, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del Polestar 3 Performance",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/polestar-3-performance-precio-ficha-tecnica-hero.webp",
        "alt": "Polestar 3 Performance en carretera",
        "ancho": 1200,
        "alto": 800
      }
    ],
  },
  {
    id: "polestar-4-suv-dual-motor-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: 70,
    imagenOficial: "/media/polestar-4-suv-dual-motor-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: "0xc14rGySkM",
    videoCanal: "Motorpasión",
    marca: "Polestar",
    modelo: "4 SUV Dual Motor",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: 58600, // Dual Motor (autonomiacocheselectricos.es, 2026)
    potenciaCv: 544,
    autonomiaKm: 600, // WLTP
    maleteroL: 530,
    ceroCien: 3.9,
    velocidadMax: null,
    bateriaKwh: 100,
    cargaRapidaKw: 200, // arquitectura 400 V
    etiquetaDgt: "Cero",
    pros: [
      "544 CV, 686 Nm y 3,9 s: el Polestar 4 SUV más rápido",
      "600 km WLTP pese a la tracción total",
      "Maletero de 530-1.665 l con luneta trasera de cristal",
      "Carga de 200 kW y 22 kW en alterna",
      "Performance Pack disponible desde 66.900 € (ZF, Brembo, 22\")",
    ],
    contras: [
      "Recién lanzado: sin pruebas independientes de la versión Dual",
      "4.200 € más que el Rear Motor por 30 km menos de autonomía",
      "400 V, no 800: carga más lenta que los nuevos 3 y 5",
      "Red comercial mínima en España",
      "El retrovisor digital exige acostumbrarse",
    ],
    largoMm: null,
    anchoMm: null,
    altoMm: null,
    pesoKg: null,
    consumo: null,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: 686,
    traccion: "Total",
    emisionesCo2: 0,
    aprox: [],
    imagen: "/media/polestar-4-suv-dual-motor-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    fuenteNombre: "autonocion.com",
    fuenteUrl: "https://www.autonocion.com/motornocion/polestar-4-suv-llega-a-espana-electricos-premium/",
    costeMensual: {
      "costeEnergia100km": 3.4,
      "seguroTercerosAnual": 550,
      "seguroAmpliadoAnual": 1050,
      "mantenimientoAnual": 300,
      "costeMensualTotal": 155,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "15000 km/año; consumo estimado ~19 kWh/100 km a 0,18 €/kWh; seguro y mantenimiento estimados por segmento premium",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/polestar-4-suv-dual-motor-precio-ficha-tecnica-oficial.webp",
        "alt": "Polestar 4 SUV Dual Motor, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del Polestar 4 SUV Dual Motor",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/polestar-4-suv-dual-motor-precio-ficha-tecnica-hero.webp",
        "alt": "Polestar 4 SUV Dual Motor en carretera",
        "ancho": 1200,
        "alto": 800
      }
    ],
  },
  {
    id: "polestar-5-performance-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: 70,
    imagenOficial: "/media/polestar-5-performance-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: "7bQrfaUAq3A",
    videoCanal: "AutoEV",
    marca: "Polestar",
    modelo: "5 Performance",
    tipo: "Eléctrico",
    categoria: "Berlina",
    precioDesde: 145300, // Performance Launch Edition (polestar.com/es)
    potenciaCv: 884,
    autonomiaKm: 565, // WLTP
    maleteroL: 427,
    ceroCien: 3.2,
    velocidadMax: 250,
    bateriaKwh: 112, // 106 kWh útiles
    cargaRapidaKw: 350, // 800 V; 10-80 % en 22 min
    etiquetaDgt: "Cero",
    pros: ["Con 884 CV y 1.015 Nm es el Polestar de serie más potente: el motor trasero es desarrollo propio y empuja a este GT de cuatro puertas hasta los 100 km/h en 3,2 segundos", "La batería de 112 kWh sobre arquitectura de 800 V admite 350 kW en continua y pasa del 10 al 80 % en 22 minutos, una parada corta para un coche de 565 km WLTP", "Amortiguadores MagneRide semiactivos específicos de esta versión, frente a la suspensión pasiva del Dual Motor, para contener una carrocería de 5,09 metros sin renunciar al viaje largo", "Plataforma PPA de aluminio encolado creada solo para el 5, no compartida con otros modelos del grupo, con los asientos delanteros desarrollados junto a Recaro", "Equipo Bowers & Wilkins de 21 altavoces de serie en el Performance, un extra que en el Dual Motor se paga aparte"],
    contras: ["145.300 € en España: son 23.400 € más que el Dual Motor de 121.900 € y, a cambio, la autonomía WLTP baja de 678 a 565 km", "2.503 kg declarados en ficha: por mucha MagneRide que lleve, ese peso se nota en frenadas repetidas y en cambios de apoyo cerrados", "427 litros de maletero en total para una berlina de 5,09 metros resultan justos si se viaja con cuatro adultos y su equipaje", "No hay luneta trasera: mirar hacia atrás depende siempre de la cámara y del retrovisor digital, algo que no convence a todo el mundo al aparcar"],
    largoMm: 5090,
    anchoMm: null,
    altoMm: 1420,
    pesoKg: 2503,
    consumo: 20.9,
    consumoUnidad: "kWh/100 km",
    plazas: 4,
    parNm: 1015,
    traccion: "Total",
    emisionesCo2: 0,
    aprox: ["consumo"], // dato de prueba independiente, no WLTP oficial
    imagen: "/media/polestar-5-performance-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    fuenteNombre: "polestar.com",
    fuenteUrl: "https://www.polestar.com/es/polestar-5/",
    costeMensual: {
      "costeEnergia100km": 3.8,
      "seguroTercerosAnual": 750,
      "seguroAmpliadoAnual": 1500,
      "mantenimientoAnual": 500,
      "costeMensualTotal": 215,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "15000 km/año; consumo ~20,9 kWh/100 km a 0,18 €/kWh (dato de prueba); seguro y mantenimiento estimados por segmento superdeportivo eléctrico",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/polestar-5-performance-precio-ficha-tecnica-oficial.webp",
        "alt": "Polestar 5 Performance, GT eléctrico, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del Polestar 5 Performance con asientos Recaro",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/polestar-5-performance-precio-ficha-tecnica-hero.webp",
        "alt": "Polestar 5 Performance en una carretera de costa",
        "ancho": 1200,
        "alto": 800
      }
    ],
    euroncap: {"estrellas": null, "ano": null, "url": null, "nota": "Sin ensayo publicado de Euro NCAP para el Polestar 5 a fecha de esta revisión: las pruebas consultadas lo dejan como no evaluado también en ANCAP y señalan que la marca lo desarrolló con objetivo de cinco estrellas, pero eso no es una nota obtenida y no se le asigna ninguna."},
    planMantenimiento: {"intervalo": "Plan de mantenimiento del fabricante (detalle en las revisiones)", "revisiones": [{"nombre": "Plan de mantenimiento del fabricante", "queSeCambia": "Según el documento Estado y Garantía del Polestar 5, el servicio recomendado por la marca se hace cada 24 meses o 30.000 km, lo que ocurra antes. Incluye la sustitución del filtro de aire del habitáculo y las comprobaciones de estado y funcionamiento del programa de mantenimiento, y el coche avisa del vencimiento con un recordatorio en pantalla. No consta un precio cerrado de ese servicio en la documentación consultada.", "costeAproxEur": null}], "costeAnualAproxEur": null, "fuente": "https://www.polestar.com/dato-assets/11286/1777368868-26w17-ps5-swb-6-es_es.pdf"},
  },
];
