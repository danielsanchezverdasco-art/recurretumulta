import type { CocheComparador } from "./comparador-coches-data.ts";

/**
 * Fichas McLaren — equipo McLaren, 04/10/2026.
 * Modelos REALES de la gama europea 2024+ vendidos en España/Europa (verificados
 * con km77, coches.net, autonocion.com, motoradictos.com y soymotor.com):
 * - 750S Coupé y 750S Spider (Super Series, 750 CV)
 * - Artura y Artura Spider MY2025 (híbridos enchufables, 700 CV)
 * - GTS (gran turismo, 635 CV)
 * - W1 (hypercar híbrido, 1.275 CV, 399 unidades, todas vendidas)
 * Excluidos tras verificación: 720S (fin de producción en 2023), 765LT (2021),
 * GT (sustituido por el GTS en 2024), 600LT (2019) y las ediciones limitadas
 * agotadas (Senna, Speedtail, Elva). Sin mantenimientoDIY: lo rellena otro equipo.
 */
export const COCHES_MCLAREN: CocheComparador[] = [
  {
    id: "mclaren-750s-2025-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/mclaren-750s-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: null,
    videoCanal: null,
    marca: "McLaren",
    modelo: "750S",
    tipo: "Gasolina",
    categoria: "Deportivo",
    precioDesde: 322400,
    potenciaCv: 750,
    autonomiaKm: null,
    maleteroL: 210,
    ceroCien: 2.8,
    velocidadMax: 332,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C",
    pros: [
      "750 CV y 800 Nm con 1.464 kg: la mejor relación peso/potencia de su segmento",
      "0-100 en 2,8 s y 332 km/h de punta: cifras de hiperdeportivo",
      "V8 biturbo de 4.0 sin hibridación: sonido y respuesta puros, con escape deportivo central de serie",
      "Dirección electrohidráulica y monocasco de carbono MonoCage II: comunicación total con el asfalto",
      "El McLaren de serie más ligero: 30 kg menos que el 720S al que sustituye",
    ],
    contras: [
      "322.400 € en España: solo para bolsillos muy profundos",
      "Maletero de 210 + 150 l: justo para viajar en pareja",
      "12,2 l/100 km y 276 g/km de CO2: etiqueta C y consumo de superdeportivo",
      "Mantenimiento de superdeportivo: cada revisión y cada juego de neumáticos pican",
      "Acceso complicado por las puertas diédricas y visibilidad trasera limitada",
    ],
    largoMm: 4569,
    anchoMm: 1930,
    altoMm: 1196,
    pesoKg: 1464,
    consumo: 12.2,
    consumoUnidad: "l/100 km",
    plazas: 2,
    parNm: 800,
    traccion: "Trasera",
    emisionesCo2: 276,
    aprox: [],
    imagen: "/media/mclaren-750s-2025-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 22.57,
      "seguroTercerosAnual": 2200,
      "seguroAmpliadoAnual": 4800,
      "mantenimientoAnual": 2400,
      "costeMensualTotal": 882,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "Estimación orientativa: 15.000 km/año, consumo WLTP 12,2 l/100 km (km77) a 1,85 €/l; seguro y mantenimiento típicos de superdeportivo en España. Todo aproximado.",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/mclaren-750s-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "McLaren 750S, vista lateral en estudio",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "/media/mclaren-750s-2025-precio-ficha-tecnica-hero.webp",
        "alt": "McLaren 750S en carretera de montaña",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "",
        "alt": "Interior del McLaren 750S, puesto de conducción",
        "ancho": 1920,
        "alto": 1280
      }
    ],
  },
  {
    id: "mclaren-750s-spider-2025-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/mclaren-750s-spider-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: "WlgDyvktJEI",
    videoCanal: "AutoBild España",
    marca: "McLaren",
    modelo: "750S Spider",
    tipo: "Gasolina",
    categoria: "Deportivo",
    precioDesde: 354700,
    potenciaCv: 750,
    autonomiaKm: null,
    maleteroL: 58,
    ceroCien: 2.8,
    velocidadMax: 332,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C",
    pros: ["El V8 M840T rinde aquí los mismos 750 CV y 800 Nm que en el cerrado, y el 0 a 100 km/h se queda en idénticos 2,8 segundos", "Ocho motores eléctricos mueven su techo rígido de una sola pieza: completa el ciclo en 11 segundos y admite hacerlo circulando hasta 50 km/h", "Pesa 1.513 kg en orden de marcha europeo, apenas 49 kg más que el coupé de 1.464 kg pese a todo el mecanismo del techo", "Su monocasco específico MonoCage II-S no necesita refuerzos adicionales para descapotar, así que la rigidez estructural no se resiente", "Mantiene los 332 km/h de velocidad punta del coupé y solo cede una décima en el 0 a 200 km/h: 7,3 segundos frente a 7,2"],
    contras: ["Abrir el cielo cuesta 32.300 €: parte de 354.700 € frente a los 322.400 € que McLaren pide por el 750S cerrado", "El hueco trasero se queda en 58 litros, frente a los 210 del coupé; sumando el delantero de 150 litros, viajar ligero es obligatorio", "Etiqueta C de la DGT y nada que la alivie: sin ninguna hibridación, homologa 276 gramos de CO2 por kilómetro y bebe 12,2 litros cada cien", "Descapotado a alta velocidad el habitáculo queda expuesto de lleno al viento: ni el parabrisas bajo ni los contrafuertes vidriados convierten los 300 km/h en un paseo tranquilo", "Pasados los tres años de mantenimiento incluido, cada revisión anual de este V8 con frenos carbocerámicos y Pirelli traseros 305/30 R20 se paga a precio de superdeportivo"],
    largoMm: 4569,
    anchoMm: 1930,
    altoMm: 1196,
    pesoKg: 1513,
    consumo: 12.2,
    consumoUnidad: "l/100 km",
    plazas: 2,
    parNm: 800,
    traccion: "Trasera",
    emisionesCo2: 276,
    aprox: [],
    imagen: "/media/mclaren-750s-spider-2025-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {"costeEnergia100km": 22.57, "costeMensualTotal": 899, "estimado": true, "mantenimientoAnual": 2400, "notas": "Cálculo hecho solo para este Spider: con 15.000 km al año y el consumo homologado de 12,2 litros, quemar gasolina a 1,85 € el litro deja el gasto en 22,57 € por cada 100 km. El seguro ampliado estimado en 5.000 € anuales y los 2.400 € de mantenimiento son orientativos para un descapotable de 354.700 €; McLaren incluía de serie las revisiones de los tres primeros años, con paso por taller al cumplir un año o 15.000 km.", "precioGasolinaL": 1.85, "precioKwh": 0.18, "seguroAmpliadoAnual": 5000, "seguroTercerosAnual": 2300},
    galeria: [
      {
        "src": "/media/mclaren-750s-spider-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "McLaren 750S Spider, vista trasera en estudio",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "/media/mclaren-750s-spider-2025-precio-ficha-tecnica-hero.webp",
        "alt": "McLaren 750S Spider descapotado en carretera de costa",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "",
        "alt": "Interior del McLaren 750S Spider descapotado",
        "ancho": 1920,
        "alto": 1280
      }
    ],
    euroncap: {"ano": null, "estrellas": null, "nota": "Sin datos EuroNCAP: modelo no probado", "url": null},
    planMantenimiento: {"costeAnualAproxEur": null, "fuente": "Nota de prensa oficial de McLaren Automotive del 750S (abril de 2023): plan de mantenimiento incluido de tres años e intervalo de un año o 15.000 km; contenido de las revisiones según el programa de mantenimiento programado publicado por McLaren Palm Beach, concesionario oficial de la marca", "intervalo": "Un año o 15.000 km recorridos, lo primero que se cumpla; el 750S incluía de serie un plan de mantenimiento programado de tres años", "revisiones": [{"costeAproxEur": null, "nombre": "Revisión de los 12 meses / 15.000 km", "queSeCambia": "Aceite sintético y filtro de aceite del V8 M840T de 4,0 litros, filtro de aire del motor nuevo e inspección multipunto de dirección, articulaciones de suspensión, radiadores, frenos, niveles de líquidos, conexiones eléctricas, ruedas y kit reparapinchazos"}, {"costeAproxEur": null, "nombre": "Revisión de los 24 meses / 30.000 km", "queSeCambia": "Se repiten aceite, filtro e inspección multipunto, con comprobación detallada adicional de la dirección electrohidráulica, la suspensión Proactive Chassis Control III, los radiadores y los discos carbocerámicos de 390 mm delante y 380 mm detrás"}]},
  },
  {
    id: "mclaren-artura-2025-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/mclaren-artura-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: "kPrs-wejcFM",
    videoCanal: "Autoproyecto",
    marca: "McLaren",
    modelo: "Artura",
    tipo: "Híbrido enchufable",
    categoria: "Deportivo",
    precioDesde: 234100,
    potenciaCv: 700,
    autonomiaKm: 33, // eléctrica WLTP (MY2025)
    maleteroL: 150,
    ceroCien: 3.0,
    velocidadMax: 330,
    bateriaKwh: 7.4,
    cargaRapidaKw: null, // sin carga en continua: solo en alterna
    etiquetaDgt: "ECO",
    pros: [
      "700 CV híbridos con solo 1.498 kg: el híbrido enchufable más ligero de su clase",
      "33 km eléctricos WLTP: etiqueta ECO y ciudad en silencio",
      "0-100 en 3,0 s y 330 km/h: prestaciones de Super Series por 234.100 €",
      "V6 biturbo de 3.0 a 120° + motor eléctrico de flujo axial: tecnología de la F1",
      "El McLaren de acceso: el más barato de la gama actual",
    ],
    contras: [
      "33 km eléctricos no dan para la etiqueta Cero (el límite son 40 km)",
      "Su lanzamiento tuvo retrasos y problemas de calidad que McLaren tardó años en resolver",
      "Maletero de 150 l: el más justo de la gama",
      "Sin carga rápida en continua: la batería de 7,4 kWh solo carga en alterna",
      "McLaren ya planea su sustituto hacia 2028: depreciación incierta",
    ],
    largoMm: 4539,
    anchoMm: 1913,
    altoMm: 1193,
    pesoKg: 1498,
    consumo: null, // sin consumo WLTP publicado para el coupé MY2025
    consumoUnidad: null,
    plazas: 2,
    parNm: 720,
    traccion: "Trasera",
    emisionesCo2: null, // sin dato WLTP publicado para el coupé MY2025
    aprox: [],
    imagen: "/media/mclaren-artura-2025-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 6.2,
      "seguroTercerosAnual": 1900,
      "seguroAmpliadoAnual": 4200,
      "mantenimientoAnual": 2000,
      "costeMensualTotal": 595,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "Estimación orientativa PHEV: 50 % de km en eléctrico (~20 kWh/100 km a 0,18 €/kWh) y 50 % en gasolina (~4,8 l/100 km a 1,85 €/l), 15.000 km/año; sin consumo WLTP publicado para el coupé MY2025. Seguro y mantenimiento de superdeportivo híbrido. Todo aproximado.",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/mclaren-artura-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "McLaren Artura, vista lateral en estudio",
        "ancho": 2240,
        "alto": 1120
      },
      {
        "src": "/media/mclaren-artura-2025-precio-ficha-tecnica-hero.webp",
        "alt": "McLaren Artura en circuito al amanecer",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "",
        "alt": "Interior del McLaren Artura, puesto de conducción",
        "ancho": 1920,
        "alto": 1280
      }
    ],
  },
  {
    id: "mclaren-artura-spider-2025-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/mclaren-artura-spider-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: "ZO_h9sNI4m0",
    videoCanal: "AutoScout24 España",
    marca: "McLaren",
    modelo: "Artura Spider",
    tipo: "Híbrido enchufable",
    categoria: "Deportivo",
    precioDesde: 273800,
    potenciaCv: 700,
    autonomiaKm: 33, // eléctrica WLTP
    maleteroL: 124,
    ceroCien: 3.0,
    velocidadMax: 330,
    bateriaKwh: 7.4,
    cargaRapidaKw: null, // sin carga en continua: solo en alterna
    etiquetaDgt: "ECO",
    pros: [
      "700 CV a cielo abierto: el primer descapotable híbrido de McLaren",
      "Techo rígido en 11 s y solo 62 kg extra sobre el coupé",
      "33 km eléctricos y etiqueta ECO: el spider híbrido más eficiente",
      "0-100 en 3,0 s y 330 km/h de punta",
      "Chasis de carbono sin pérdida de rigidez al quitar el techo",
    ],
    contras: [
      "273.800 €: 39.700 € más que el coupé cerrado",
      "Maletero de 124 l: casi testimonial",
      "33 km eléctricos no bastan para la etiqueta Cero (límite: 40 km)",
      "1.635 kg: el más pesado de los Artura",
      "Red de concesionarios mínima en España (McLaren Barcelona)",
    ],
    largoMm: 4539,
    anchoMm: 1913,
    altoMm: 1193,
    pesoKg: 1635,
    consumo: 4.8,
    consumoUnidad: "l/100 km",
    plazas: 2,
    parNm: 720,
    traccion: "Trasera",
    emisionesCo2: 108,
    aprox: [],
    imagen: "/media/mclaren-artura-spider-2025-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 6.2,
      "seguroTercerosAnual": 2000,
      "seguroAmpliadoAnual": 4400,
      "mantenimientoAnual": 2000,
      "costeMensualTotal": 612,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "Estimación orientativa PHEV: 50 % de km en eléctrico (~20 kWh/100 km a 0,18 €/kWh) y 50 % en gasolina (4,8 l/100 km WLTP, km77, a 1,85 €/l), 15.000 km/año. Seguro y mantenimiento de superdeportivo híbrido descapotable. Todo aproximado.",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/mclaren-artura-spider-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "McLaren Artura Spider, vista trasera en estudio",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "/media/mclaren-artura-spider-2025-precio-ficha-tecnica-hero.webp",
        "alt": "McLaren Artura Spider descapotado en puerto de montaña",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "",
        "alt": "Interior del McLaren Artura Spider descapotado",
        "ancho": 1920,
        "alto": 1280
      }
    ],
  },
  {
    id: "mclaren-gts-2025-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/mclaren-gts-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: null,
    videoCanal: null,
    marca: "McLaren",
    modelo: "GTS",
    tipo: "Gasolina",
    categoria: "Deportivo",
    precioDesde: 298650,
    potenciaCv: 635,
    autonomiaKm: null,
    maleteroL: 420,
    ceroCien: 3.2,
    velocidadMax: 326,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C",
    pros: [
      "635 CV con 570 l de maletero total: el McLaren más práctico",
      "0-100 en 3,2 s y 326 km/h con confort de gran turismo",
      "Monocasco de carbono MonoCell II-T: solo 1.595 kg",
      "Modos Comfort, Sport y Track: del viaje largo al circuito",
      "Techo panorámico de cristal electrocrómico opcional",
    ],
    contras: [
      "298.650 € en España: gran turismo a precio de superdeportivo",
      "11,9 l/100 km y 270 g/km de CO2: etiqueta C",
      "Sin Apple CarPlay ni Android Auto de serie",
      "Solo dos plazas: práctico para ser un McLaren, no para ser un GT",
      "McLaren prevé su fin de producción en 2027",
    ],
    largoMm: 4683,
    anchoMm: 2045,
    altoMm: 1213,
    pesoKg: 1595,
    consumo: 11.9,
    consumoUnidad: "l/100 km",
    plazas: 2,
    parNm: 630,
    traccion: "Trasera",
    emisionesCo2: 270,
    aprox: [],
    imagen: "/media/mclaren-gts-2025-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 22.0,
      "seguroTercerosAnual": 2100,
      "seguroAmpliadoAnual": 4600,
      "mantenimientoAnual": 2200,
      "costeMensualTotal": 841,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "Estimación orientativa: 15.000 km/año, consumo WLTP 11,9 l/100 km (km77) a 1,85 €/l; seguro y mantenimiento típicos de gran turismo de altas prestaciones en España. Todo aproximado.",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/mclaren-gts-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "McLaren GTS, vista lateral en estudio",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "/media/mclaren-gts-2025-precio-ficha-tecnica-hero.webp",
        "alt": "McLaren GTS en autopista al atardecer",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "",
        "alt": "Interior del McLaren GTS, cuero Nappa",
        "ancho": 1920,
        "alto": 1280
      }
    ],
  },
  {
    id: "mclaren-w1-2026-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/mclaren-w1-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: "V-lCMYl2quY",
    videoCanal: "Supercars All Day",
    marca: "McLaren",
    modelo: "W1",
    tipo: "Híbrido",
    categoria: "Deportivo",
    precioDesde: 2400000,
    potenciaCv: 1275,
    autonomiaKm: null, // 2 km eléctricos: sin uso práctico
    maleteroL: 118,
    ceroCien: 2.7,
    velocidadMax: 350,
    bateriaKwh: 1.4,
    cargaRapidaKw: null, // híbrido no enchufable: sin carga externa
    etiquetaDgt: "ECO",
    pros: [
      "1.275 CV y 1.340 Nm: el McLaren de calle más potente de la historia",
      "Tracción trasera pura con 1.275 CV: una rareza en la era de la tracción total",
      "0-200 en 5,8 s y 350 km/h de punta: cifras de Fórmula 1",
      "Aerodinámica activa con 1.000 kg de carga: tecnología directa de la F1",
      "Solo 399 unidades, todas vendidas: pieza de colección instantánea",
    ],
    contras: [
      "2,4 millones de euros: el McLaren más caro jamás vendido",
      "Las 399 unidades ya tienen dueño: imposible comprarlo nuevo",
      "Batería de 1,4 kWh sin autonomía eléctrica útil: el híbrido solo sirve para rendir",
      "Maletero de 118 l y puertas de ala de gaviota: cero practicidad",
      "Seguro y mantenimiento de hiperdeportivo: cifras de otro planeta",
    ],
    largoMm: 4635,
    anchoMm: 2074,
    altoMm: 1182,
    pesoKg: 1399,
    consumo: 13.6,
    consumoUnidad: "l/100 km",
    plazas: 2,
    parNm: 1340,
    traccion: "Trasera",
    emisionesCo2: null, // sin dato WLTP verificado con 2 fuentes
    aprox: [],
    imagen: "/media/mclaren-w1-2026-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 25.2,
      "seguroTercerosAnual": 6000,
      "seguroAmpliadoAnual": 15000,
      "mantenimientoAnual": 5000,
      "costeMensualTotal": 1982,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "Estimación orientativa: 15.000 km/año, consumo 13,6 l/100 km (km77) a 1,85 €/l; seguro y mantenimiento estimados por tramo de hiperdeportivo de colección (2,4 M€, 399 unidades). Todo aproximado.",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/mclaren-w1-2026-precio-ficha-tecnica-oficial.webp",
        "alt": "McLaren W1, vista lateral en estudio",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "/media/mclaren-w1-2026-precio-ficha-tecnica-hero.webp",
        "alt": "McLaren W1 en circuito",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "",
        "alt": "Interior del McLaren W1, cockpit",
        "ancho": 1920,
        "alto": 1280
      }
    ],
  },
{
    id: "mclaren-750s-le-mans-2025-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/mclaren-750s-le-mans-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/mclaren-750s-le-mans-2025-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    marca: "McLaren",
    modelo: "750S Le Mans",
    tipo: "Gasolina",
    categoria: "Deportivo",
    precioDesde: 350000,
    potenciaCv: 750,
    autonomiaKm: null,
    maleteroL: 150,
    ceroCien: 2.8,
    velocidadMax: 332,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C",
    pros: [
      "Homenaje al F1 GTR ganador de Le Mans 1995, 30.º aniversario",
      "50 unidades MSO con paquete High Downforce Kit",
      "Techo con snorkel y alerón como el F1 GTR",
      "750 CV y 332 km/h: el 750S más especial",
      "Pieza de colección instantánea"
    ],
    contras: [
      "~350.000 € y las 50 unidades asignadas",
      "Misma mecánica que el 750S estándar",
      "El HDK añade carga pero resta discreción",
      "Etiqueta C",
      "Imposible de comprar nuevo"
    ],
    largoMm: 4569,
    anchoMm: 1930,
    altoMm: 1196,
    pesoKg: 1389,
    consumo: 12.2,
    consumoUnidad: "l/100 km",
    plazas: 2,
    parNm: 800,
    traccion: "Trasera",
    emisionesCo2: 276,
    aprox: ["precioDesde", "consumo"],
    imagen: "/media/mclaren-750s-le-mans-2025-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 22.57,
      "seguroTercerosAnual": 3000,
      "seguroAmpliadoAnual": 5500,
      "mantenimientoAnual": 4000,
      "costeMensualTotal": 1318,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "cifras orientativas para 1.000 km/mes; edición limitada MSO de 50 unidades sobre la base del 750S",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/mclaren-750s-le-mans-2025-precio-ficha-tecnica-hero.webp",
        "alt": "McLaren 750S Le Mans con alerón HDK en circuito",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/mclaren-750s-le-mans-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "McLaren 750S Le Mans, vista lateral con techo snorkel",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/mclaren-750s-le-mans-2025-precio-ficha-tecnica-interior-oficial.webp",
        "alt": "Interior del 750S Le Mans con detalles MSO",
        "ancho": 1200,
        "alto": 800
      }
    ]
  },
  {
    id: "mclaren-788hs-2026-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/mclaren-788hs-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/mclaren-788hs-2026-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    marca: "McLaren",
    modelo: "788HS",
    tipo: "Gasolina",
    categoria: "Deportivo",
    precioDesde: 420000,
    potenciaCv: 788,
    autonomiaKm: null,
    maleteroL: 150,
    ceroCien: 2.7,
    velocidadMax: 330,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C",
    pros: [
      "El McLaren de producción más potente sin hibridar: 788 CV",
      "Serie HS: High Sport, la saga más radical de Woking",
      "100 Coupé + 100 Spider: producción limitada",
      "V8 biturbo llevado al límite con aerodinámica activa",
      "Sucesor espiritual del 688HS y el 765LT"
    ],
    contras: [
      "~420.000 € de partida",
      "200 unidades con listas de espera",
      "Radicalidad de uso: poco confort diario",
      "Etiqueta C",
      "El W1 híbrido lo eclipsa en titulares"
    ],
    largoMm: 4569,
    anchoMm: 1960,
    altoMm: 1196,
    pesoKg: 1390,
    consumo: 12.5,
    consumoUnidad: "l/100 km",
    plazas: 2,
    parNm: 800,
    traccion: "Trasera",
    emisionesCo2: 280,
    aprox: ["precioDesde", "ceroCien", "consumo", "pesoKg"],
    imagen: "/media/mclaren-788hs-2026-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 23.13,
      "seguroTercerosAnual": 3400,
      "seguroAmpliadoAnual": 6200,
      "mantenimientoAnual": 4500,
      "costeMensualTotal": 1425,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "cifras orientativas para 1.000 km/mes; serie limitada High Sport de 200 unidades; consumo estimado ~12,5 l/100 km",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/mclaren-788hs-2026-precio-ficha-tecnica-hero.webp",
        "alt": "McLaren 788HS en circuito con aerodinámica activa",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/mclaren-788hs-2026-precio-ficha-tecnica-oficial.webp",
        "alt": "McLaren 788HS, vista lateral",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/mclaren-788hs-2026-precio-ficha-tecnica-interior-oficial.webp",
        "alt": "Interior minimalista del 788HS",
        "ancho": 1200,
        "alto": 800
      }
    ]
  },
  {
    id: "mclaren-gt-2024-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/mclaren-gt-2024-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/mclaren-gt-2024-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    marca: "McLaren",
    modelo: "GT",
    tipo: "Gasolina",
    categoria: "Deportivo",
    precioDesde: 200000,
    potenciaCv: 620,
    autonomiaKm: null,
    maleteroL: 570,
    ceroCien: 3.2,
    velocidadMax: 326,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C",
    pros: [
      "El McLaren más cómodo: gran turismo de verdad",
      "570 litros de maletero: récord en la marca",
      "V8 de 620 CV, 3,2 s y 326 km/h",
      "Suspensión blanda y acceso fácil: usable a diario",
      "El McLaren de ocasión más asequible"
    ],
    contras: [
      "Descatalogado en 2024: solo ocasión",
      "Menos emocionante que un 720S",
      "Interior menos especial que el exterior",
      "Etiqueta C",
      "El GTS lo sustituye mejorado"
    ],
    largoMm: 4683,
    anchoMm: 2095,
    altoMm: 1213,
    pesoKg: 1530,
    consumo: 11.9,
    consumoUnidad: "l/100 km",
    plazas: 2,
    parNm: 630,
    traccion: "Trasera",
    emisionesCo2: 270,
    aprox: ["precioDesde", "consumo"],
    imagen: "/media/mclaren-gt-2024-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 22.02,
      "seguroTercerosAnual": 2200,
      "seguroAmpliadoAnual": 4000,
      "mantenimientoAnual": 3000,
      "costeMensualTotal": 1037,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "cifras orientativas para 1.000 km/mes; gran turismo descatalogado en 2024; solo mercado de ocasión",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/mclaren-gt-2024-precio-ficha-tecnica-hero.webp",
        "alt": "McLaren GT en gran ruta por carretera",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/mclaren-gt-2024-precio-ficha-tecnica-oficial.webp",
        "alt": "McLaren GT, vista lateral del gran turismo",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/mclaren-gt-2024-precio-ficha-tecnica-interior-oficial.webp",
        "alt": "Interior confortable del McLaren GT",
        "ancho": 1200,
        "alto": 800
      }
    ]
  },
  {
    id: "mclaren-artura-1000gp-2026-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/mclaren-artura-1000gp-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/mclaren-artura-1000gp-2026-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    marca: "McLaren",
    modelo: "Artura 1000GP by MSO",
    tipo: "Híbrido enchufable",
    categoria: "Deportivo",
    precioDesde: 320000,
    potenciaCv: 700,
    autonomiaKm: 33,
    maleteroL: 160,
    ceroCien: 3.0,
    velocidadMax: 330,
    bateriaKwh: 7.4,
    cargaRapidaKw: null,
    etiquetaDgt: "Cero",
    pros: [
      "Homenaje MSO al Gran Premio de Mónaco: 10 unidades",
      "700 CV híbridos enchufables con etiqueta Cero",
      "Librea papaya con detalles del circuito de Mónaco",
      "El Artura más exclusivo jamás creado",
      "33 km eléctricos para la ciudad"
    ],
    contras: [
      "~320.000 € por un Artura con cosmética",
      "Solo 10 unidades, todas asignadas",
      "Sin mejoras mecánicas frente al Artura",
      "33 km eléctricos testimoniales",
      "Imposible de comprar nuevo"
    ],
    largoMm: 4539,
    anchoMm: 1913,
    altoMm: 1193,
    pesoKg: 1498,
    consumo: 4.6,
    consumoUnidad: "l/100 km",
    plazas: 2,
    parNm: 720,
    traccion: "Trasera",
    emisionesCo2: 104,
    aprox: ["precioDesde"],
    imagen: "/media/mclaren-artura-1000gp-2026-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 12.55,
      "seguroTercerosAnual": 2800,
      "seguroAmpliadoAnual": 5000,
      "mantenimientoAnual": 3600,
      "costeMensualTotal": 1176,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "cifras orientativas para 1.000 km/mes; edición MSO de 10 unidades; consumo mixto ponderado WLTP del híbrido enchufable",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/mclaren-artura-1000gp-2026-precio-ficha-tecnica-hero.webp",
        "alt": "McLaren Artura 1000GP by MSO en papaya en Mónaco",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/mclaren-artura-1000gp-2026-precio-ficha-tecnica-oficial.webp",
        "alt": "Artura 1000GP, vista lateral con librea del GP de Mónaco",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/mclaren-artura-1000gp-2026-precio-ficha-tecnica-interior-oficial.webp",
        "alt": "Interior del Artura 1000GP con detalles MSO",
        "ancho": 1200,
        "alto": 800
      }
    ]
  },
  {
    id: "mclaren-750s-mcl38-celebration-2025-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/mclaren-750s-mcl38-celebration-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: null,
    videoCanal: null,
    marca: "McLaren",
    modelo: "750S MCL38 Celebration Edition",
    tipo: "Gasolina",
    categoria: "Deportivo",
    precioDesde: 330000,
    potenciaCv: 750,
    autonomiaKm: null,
    maleteroL: 150,
    ceroCien: 2.8,
    velocidadMax: 332,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C",
    pros: [
      "Homenaje al 9.º título de constructores F1 de McLaren (2024)",
      "Solo 9 unidades con librea MSO Papaya/Anthracite",
      "Placa con fibra de carbono real del MCL38 de F1",
      "Firmas de Lando Norris y Oscar Piastri en el interior",
      "750 CV y 332 km/h con pedigrí de campeón"
    ],
    contras: [
      "~330.000 € y las 9 unidades asignadas",
      "Sin cambios mecánicos frente al 750S",
      "Solo 9 afortunados en el mundo",
      "Etiqueta C",
      "Imposible de comprar nuevo"
    ],
    largoMm: 4569,
    anchoMm: 1930,
    altoMm: 1196,
    pesoKg: 1389,
    consumo: 12.2,
    consumoUnidad: "l/100 km",
    plazas: 2,
    parNm: 800,
    traccion: "Trasera",
    emisionesCo2: 276,
    aprox: ["precioDesde", "consumo"],
    imagen: "/media/mclaren-750s-mcl38-celebration-2025-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 22.57,
      "seguroTercerosAnual": 2900,
      "seguroAmpliadoAnual": 5200,
      "mantenimientoAnual": 3800,
      "costeMensualTotal": 1274,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "cifras orientativas para 1.000 km/mes; edición conmemorativa F1 de 9 unidades sobre la base del 750S",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/mclaren-750s-mcl38-celebration-2025-precio-ficha-tecnica-hero.webp",
        "alt": "McLaren 750S MCL38 Celebration Edition en papaya en circuito",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/mclaren-750s-mcl38-celebration-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "750S MCL38 Celebration Edition, vista lateral con librea de campeón",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del MCL38 Celebration Edition con firmas de Norris y Piastri",
        "ancho": 1200,
        "alto": 800
      }
    ]
  },
];
