import type { CocheComparador } from "./comparador-coches-data.ts";

/**
 * Fichas Lynk & Co — equipo Lynk & Co, 04/10/2026; ampliación global Lote B2, 05/10/2026.
 * Modelos REALES de la gama 2024+ (verificados con prensa y fichas oficiales):
 * - Gama europea: 01 y 08 (híbridos enchufables). El 02 y el 07 GT los cubre otro equipo
 *   (comparador-coches-nuevos.ts): no duplicar.
 * - Modelos globales (China/Latinoamérica): 03, 03+, 05 EM-P, 06 EM-P, 07 EM-P (berlina),
 *   09 MHEV y Z10. En estos, precioDesde y etiquetaDgt son null (sin venta en España).
 * El Z20 no se incluye: es el 02 europeo ya fichado.
 * Fuentes: hibridosyelectricos.com, soymotor.com, coches.net, auto-data.net, Europa Press,
 * ficha oficial lynkco.com, foroclub.es (opiniones de propietarios), DGT (etiqueta Cero).
 */
export const COCHES_LYNK_CO: CocheComparador[] = [
  {
    id: "lynk-co-01-phev-2025-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/lynk-co-01-phev-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: "4sbQLurHBxk",
    videoCanal: "SoyMotor",
    marca: "Lynk & Co",
    modelo: "01",
    tipo: "Híbrido enchufable",
    categoria: "SUV",
    precioDesde: 40995,
    potenciaCv: 276,
    autonomiaKm: 75, // eléctrica WLTP
    maleteroL: 349,
    ceroCien: 7.7,
    velocidadMax: 200,
    bateriaKwh: 17.7,
    cargaRapidaKw: null, // sin carga en continua: solo 7 kW en alterna
    etiquetaDgt: "Cero",
    pros: ["El salto de esta versión está en el empuje: 535 Nm, 110 Nm más que el 01 original, con 276 CV según la ficha y el 0 a 100 km/h en 7,7 segundos, sin perder los 75 km eléctricos ni la etiqueta Cero", "La pantalla crece de 12,7 a 15,4 pulgadas y estrena procesador Qualcomm Snapdragon 8155: era el punto flojo del primer 01 y en esta renovación el sistema multimedia por fin responde sin esperas", "Gasta menos ofreciendo más: homologa 0,9 l/100 km y 20 g/km de CO₂ frente al litro y los 24 g/km del modelo anterior, siempre que se enchufe a diario para exprimir la batería de 17,7 kWh", "Gama de solo dos acabados y sin lista de opciones laberíntica: el Core ya trae llantas de 19 pulgadas y tapicería ECONYL, y el More suma llantas de 20, equipo Infinity de 10 altavoces y techo panorámico", "El propietario puede dar de alta su propio 01 en la plataforma de coche compartido de la marca y alquilarlo desde la app, con apertura y arranque desde el móvil, para rebajar el coste de tenerlo parado"],
    contras: ["Nada de carga rápida en continua: el cargador de a bordo admite 6,6 kW en alterna, así que una carga completa roza las tres horas y en viajes largos el peso lo lleva el motor de gasolina", "El maletero que declara esta ficha, 349 litros, se queda corto para un SUV de 4,54 metros que pretende ser el único coche familiar de la casa", "Las ayudas a la conducción pitan y corrigen más de la cuenta, y desconectarlas obliga a bucear por los menús de la pantalla en cada arranque, porque casi no quedan botones físicos para lo habitual", "La suscripción sin permanencia que lo hizo famoso ya no se ofrece con el 01 renovado, solo con el modelo anterior: quien lo estrena en 2025 pasa por la compra convencional de toda la vida"],
    largoMm: 4541,
    anchoMm: 1857,
    altoMm: 1686,
    pesoKg: 1879,
    consumo: 0.9,
    consumoUnidad: "l/100 km",
    plazas: 5,
    parNm: 535,
    traccion: "Delantera",
    emisionesCo2: 20,
    aprox: [],
    imagen: "/media/lynk-co-01-phev-2025-precio-ficha-tecnica-hero.webp",
    opiniones: [
      {
        "texto": "He visto el informe de Euro NCAP en PDF, 18 páginas. Te doy la razón: TENEMOS UN TANQUE.",
        "usuario": "tabaibabaja (propietario de un Lynk & Co 01)",
        "fuente": "foroclub.es",
        "url": "https://www.foroclub.es/lynk-co/viewtopic.php?t=102"
      },
      {
        "texto": "El sonido me gusta bastante. Y al tener en el maletero la cortinilla quitada, el sub del maletero se notará un poco más.",
        "usuario": "Scapa (propietario de un 01, Madrid)",
        "fuente": "foroclub.es",
        "url": "https://www.foroclub.es/lynk-co/viewtopic.php?t=102"
      }
    ],
    costeMensual: {
      "costeEnergia100km": 4.2,
      "seguroTercerosAnual": 450,
      "seguroAmpliadoAnual": 850,
      "mantenimientoAnual": 400,
      "costeMensualTotal": 157,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "estimado: 15.000 km/año, 60 % de los km en modo eléctrico; seguro y mantenimiento orientativos del segmento C-SUV; sin contar ayudas",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/lynk-co-01-phev-2025-precio-ficha-tecnica-oficial-2.webp",
        "alt": "Lynk & Co 01 PHEV, vista trasera tres cuartos",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del Lynk & Co 01, salpicadero con pantalla de 15,4 pulgadas",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/lynk-co-01-phev-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "Lynk & Co 01 PHEV, vista tres cuartos delantera",
        "ancho": 1200,
        "alto": 800
      }
    ],
    planMantenimiento: {"intervalo": "Plan de mantenimiento del fabricante (detalle en las revisiones)", "revisiones": [{"nombre": "Plan de mantenimiento del fabricante", "queSeCambia": "Las condiciones oficiales de Lynk & Co en España fijan el mantenimiento programado cada 24 meses o 30.000 km, lo que ocurra antes, en un taller contratado por la marca. La revisión incluye comprobaciones de funcionamiento, seguridad y desgaste, revisión de niveles de líquidos, actualización del software y sustitución de filtros de motor y de habitáculo, bujías y correas según el intervalo que toque. La marca no publica una tarifa cerrada para el comprador particular, así que no se da ningún coste de revisión.", "costeAproxEur": null}], "costeAnualAproxEur": null, "fuente": "https://www.lynkco.com/es-es/terms-and-policies/business-month-to-month-20230723"},
  },
  {
    id: "lynk-co-08-phev-2025-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/lynk-co-08-phev-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: "B1Y_US1HA-s",
    videoCanal: "Motor1 España",
    marca: "Lynk & Co",
    modelo: "08",
    tipo: "Híbrido enchufable",
    categoria: "SUV",
    precioDesde: 52995,
    potenciaCv: 345,
    autonomiaKm: 200, // eléctrica WLTP
    maleteroL: 545,
    ceroCien: 6.8,
    velocidadMax: 185,
    bateriaKwh: 39.6,
    cargaRapidaKw: 85,
    etiquetaDgt: "Cero",
    pros: [
      "200 km eléctricos WLTP: récord entre los PHEV del segmento D",
      "Carga rápida de 85 kW en continua (10-80 % en ~33 min), rara en un PHEV",
      "345 CV, 0-100 en 6,8 s y 5 estrellas Euro NCAP (2025)",
      "Maletero de 545 l y 4,82 m: auténtico SUV familiar",
      "Desde 52.995 €: muy por debajo de un X3 o GLC PHEV equivalentes",
    ],
    contras: ["2.112 kg de peso: se notan en consumo y agilidad", "La autonomía eléctrica real ronda los 160 km, no los 200 WLTP", "Red española todavía corta frente a BMW o Mercedes: Lynk & Co está sumando concesionarios para el 08 y gran parte de la compra y la gestión pasa por su web y sus Clubs", "Velocidad máxima limitada a 185 km/h", "Solo tracción delantera y dos acabados cerrados (Core/More)"],
    largoMm: 4820,
    anchoMm: 1915,
    altoMm: 1685,
    pesoKg: 2112,
    consumo: 1.9,
    consumoUnidad: "l/100 km",
    plazas: 5,
    parNm: 615,
    traccion: "Delantera",
    emisionesCo2: 23,
    aprox: [],
    imagen: "/media/lynk-co-08-phev-2025-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {"costeEnergia100km": 5, "costeMensualTotal": 179, "estimado": true, "mantenimientoAnual": 450, "notas": "Cálculo pensado para este 08 concreto: recorrer 15.000 km al año apoyándose en su batería de 39,6 kWh y en sus 200 km eléctricos WLTP, de forma que seis de cada diez kilómetros salgan del enchufe y no del depósito. Los importes de póliza y de taller son referencias orientativas para un SUV D enchufable de 345 CV y 2.112 kg, sin ayudas descontadas", "precioGasolinaL": 1.85, "precioKwh": 0.18, "seguroAmpliadoAnual": 950, "seguroTercerosAnual": 500},
    galeria: [
      {
        "src": "",
        "alt": "Lynk & Co 08 PHEV, vista trasera tres cuartos",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del Lynk & Co 08, salpicadero con pantalla flotante de 15,4 pulgadas",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/lynk-co-08-phev-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "Lynk & Co 08 PHEV, vista tres cuartos delantera",
        "ancho": 1200,
        "alto": 800
      }
    ],
    euroncap: {"ano": 2025, "estrellas": 5, "nota": "Calificación publicada el 08/09/2025, aplicable a los PHEV Core y More 4x2 de esta ficha: 90 % en ocupante adulto, 87 % en ocupante infantil, 78 % en usuarios vulnerables y 81 % en ayudas a la conducción", "url": "https://www.euroncap.com/en/results/lynk+%26+co/08/56198"},
    planMantenimiento: {"costeAnualAproxEur": null, "fuente": "Lynk & Co, dossier de prensa oficial del 08 (Press Kit 08): visitas programadas bienales o a los 30.000 km, adelantadas a los 20.000 km cuando predomina el motor térmico; sin coste publicado para España", "intervalo": "Al cumplirse dos años o al llegar a los 30.000 km, lo primero que se alcance; si el uso principal es con el motor de combustión, la visita se adelanta a los 20.000 km", "revisiones": [{"costeAproxEur": null, "nombre": "Revisión programada del 08 / 24 meses o 30.000 km", "queSeCambia": "Visita de mantenimiento programado prevista en el dossier oficial del modelo para su gasolina 1.5 y su sistema EM-P de 39,6 kWh; Lynk & Co no publica en abierto el desglose de operaciones de esa visita ni un precio cerrado para España, así que no se le asigna coste"}]},
  },
  {
    id: "lynk-co-03-2025-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/lynk-co-03-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: null, // sin videoprueba verificada en español a 05/10/2026
    videoCanal: null,
    marca: "Lynk & Co",
    modelo: "03",
    tipo: "Gasolina",
    categoria: "Berlina",
    precioDesde: 15500, // solo China: sin precio oficial en España/Europa
    potenciaCv: 254,
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: 6.9,
    velocidadMax: 215,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: null, // no se vende en España: sin etiqueta DGT asignada
    pros: [
      "254 CV y 350 Nm: la berlina compacta más potente de su precio en China",
      "0-100 en 6,9 s con cambio de doble embrague de 7 velocidades",
      "Plataforma CMA de Volvo: chasis y seguridad de origen sueco",
      "Consumo real medido de 6,3 l/100 km en ciclo combinado (BitAuto)",
      "Prueba del alce a 82,2 km/h: de lo mejor de su segmento",
    ],
    contras: [
      "Solo se vende en China: imposible comprarlo en España",
      "Sin versión híbrida enchufable en la gama 2.0T",
      "Interior con pantallas pero ergonomía mejorable",
      "Marca poco conocida fuera de China y Europa",
      "Reventa y recambios inexistentes en el mercado español",
    ],
    largoMm: 4684,
    anchoMm: 1843,
    altoMm: 1460,
    pesoKg: 1560,
    consumo: 6.8,
    consumoUnidad: "l/100 km",
    plazas: 5,
    parNm: 350,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde"],
    imagen: "/media/lynk-co-03-2025-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    fuenteNombre: "wikipedia.org",
    fuenteUrl: "https://es.wikipedia.org/wiki/Lynk_%26_Co_03",
    costeMensual: {
      "costeEnergia100km": 12.6,
      "seguroTercerosAnual": 400,
      "seguroAmpliadoAnual": 750,
      "mantenimientoAnual": 350,
      "costeMensualTotal": 218,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "estimado: 15.000 km/año con consumo WLTP 6,8 l/100 km a 1,85 €/l; seguro y mantenimiento orientativos del segmento; el modelo no se vende en España",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/lynk-co-03-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "Lynk & Co 03, berlina deportiva, vista tres cuartos delantera",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del Lynk & Co 03, salpicadero con pantalla central",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/lynk-co-03-2025-precio-ficha-tecnica-hero.webp",
        "alt": "Lynk & Co 03 circulando por una carretera de montaña",
        "ancho": 1200,
        "alto": 800
      }
    ],
  },
  {
    id: "lynk-co-03-plus-2025-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/lynk-co-03-plus-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/lynk-co-03-plus-2025-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null, // sin videoprueba verificada en español a 05/10/2026
    videoCanal: null,
    marca: "Lynk & Co",
    modelo: "03+",
    tipo: "Gasolina",
    categoria: "Berlina",
    precioDesde: null, // solo China: sin precio oficial en España/Europa
    potenciaCv: 265,
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: 5.9,
    velocidadMax: 250,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: null, // no se vende en España: sin etiqueta DGT asignada
    pros: [
      "265 CV, 380 Nm y tracción total: el Lynk & Co de calle más radical",
      "0-100 en 5,9 s y 250 km/h de punta con cambio automático de 8 marchas",
      "ADN del equipo campeón del WTCR: chasis puesto a punto en circuito",
      "Frenos, baquets y estética deportiva de serie",
      "Récord de vuelta en Ningbo con el 03+ TCR Cyan: 2:02.415",
    ],
    contras: [
      "Solo se vende en China: imposible comprarlo en España",
      "Consumo elevado para un compacto (7,4 l/100 km)",
      "Suspensión firme: incómodo en ciudad",
      "Sin etiqueta ECO ni Cero: vetado en futuras ZBE europeas",
      "Seguro y mantenimiento caros para su segmento",
    ],
    largoMm: 4697,
    anchoMm: 1843,
    altoMm: 1448,
    pesoKg: 1645,
    consumo: 7.4,
    consumoUnidad: "l/100 km",
    plazas: 5,
    parNm: 380,
    traccion: "Total",
    emisionesCo2: null,
    aprox: ["consumo"], // dato NEDC de la versión 2020, sin WLTP publicado
    imagen: "/media/lynk-co-03-plus-2025-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    fuenteNombre: "wikipedia.org",
    fuenteUrl: "https://es.wikipedia.org/wiki/Lynk_%26_Co_03",
    costeMensual: {
      "costeEnergia100km": 13.7,
      "seguroTercerosAnual": 450,
      "seguroAmpliadoAnual": 850,
      "mantenimientoAnual": 400,
      "costeMensualTotal": 247,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "estimado: 15.000 km/año con consumo 7,4 l/100 km a 1,85 €/l; seguro y mantenimiento orientativos del segmento deportivo; el modelo no se vende en España",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/lynk-co-03-plus-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "Lynk & Co 03+, berlina deportiva, vista tres cuartos delantera",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/lynk-co-03-plus-2025-precio-ficha-tecnica-interior-oficial.webp",
        "alt": "Interior del Lynk & Co 03+ con asientos deportivos",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/lynk-co-03-plus-2025-precio-ficha-tecnica-hero.webp",
        "alt": "Lynk & Co 03+ en circuito",
        "ancho": 1200,
        "alto": 800
      }
    ],
  },
  {
    id: "lynk-co-05-emp-2025-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/lynk-co-05-emp-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/lynk-co-05-emp-2025-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null, // sin videoprueba verificada del EM-P en español a 05/10/2026
    videoCanal: null,
    marca: "Lynk & Co",
    modelo: "05 EM-P",
    tipo: "Híbrido enchufable",
    categoria: "SUV",
    precioDesde: null, // solo China: sin precio oficial en España/Europa
    potenciaCv: 245,
    autonomiaKm: 71, // eléctrica
    maleteroL: 336,
    ceroCien: null,
    velocidadMax: 210,
    bateriaKwh: null, // capacidad no publicada en fuentes verificadas
    cargaRapidaKw: null,
    etiquetaDgt: null, // no se vende en España: sin etiqueta DGT asignada
    pros: [
      "245 CV y 545 Nm: el SUV coupé enchufable de la marca",
      "71 km de autonomía eléctrica para el día a día urbano",
      "1,43 l/100 km de consumo ponderado si se carga a diario",
      "Carrocería coupé con plataforma CMA de Volvo",
      "Maletero de 336 a 1.070 l con asientos abatidos",
    ],
    contras: [
      "Solo se vende en China: imposible comprarlo en España",
      "Sin carga rápida en continua verificada",
      "Maletero de 336 l, justo para un SUV coupé",
      "71 km eléctricos: por debajo de los PHEV europeos actuales",
      "Peso de 1.901 kg: se nota en agilidad",
    ],
    largoMm: 4592,
    anchoMm: 1879,
    altoMm: 1628,
    pesoKg: 1901,
    consumo: 1.43,
    consumoUnidad: "l/100 km",
    plazas: 5,
    parNm: 545,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: [],
    imagen: "/media/lynk-co-05-emp-2025-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    fuenteNombre: "auto-data.net",
    fuenteUrl: "https://www.auto-data.net/es/lynk-co-05-facelift-2023-em-p-1.5td-245hp-plug-in-hybrid-dht-pro-51485",
    costeMensual: {
      "costeEnergia100km": 4.0,
      "seguroTercerosAnual": 420,
      "seguroAmpliadoAnual": 800,
      "mantenimientoAnual": 400,
      "costeMensualTotal": 150,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "estimado: 15.000 km/año, 60 % de los km en modo eléctrico; seguro y mantenimiento orientativos del segmento C-SUV; el modelo no se vende en España",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/lynk-co-05-emp-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "Lynk & Co 05 EM-P, SUV coupé híbrido enchufable, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/lynk-co-05-emp-2025-precio-ficha-tecnica-interior-oficial.webp",
        "alt": "Interior del Lynk & Co 05 EM-P",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/lynk-co-05-emp-2025-precio-ficha-tecnica-hero.webp",
        "alt": "Lynk & Co 05 EM-P en una carretera de costa",
        "ancho": 1200,
        "alto": 800
      }
    ],
  },
  {
    id: "lynk-co-06-emp-2025-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 200000,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/lynk-co-06-emp-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: null, // sin videoprueba verificada del EM-P en español a 05/10/2026
    videoCanal: null,
    marca: "Lynk & Co",
    modelo: "06 EM-P",
    tipo: "Híbrido enchufable",
    categoria: "SUV",
    precioDesde: null, // China y Latinoamérica: sin precio oficial en España/Europa
    potenciaCv: 299,
    autonomiaKm: 126, // eléctrica (WLTC)
    maleteroL: 280,
    ceroCien: 5.9,
    velocidadMax: null,
    bateriaKwh: 19.09,
    cargaRapidaKw: null, // 6,6 kW en alterna (30-80 % en 28 min)
    etiquetaDgt: null, // no se vende en España: sin etiqueta DGT asignada
    pros: [
      "299 CV y 0-100 en 5,9 s: el PHEV urbano más divertido de la marca",
      "126 km eléctricos y 1.280 km de autonomía combinada",
      "Batería LFP de 19,09 kWh con garantía de 8 años o 200.000 km",
      "1,1 l/100 km de consumo ponderado si se carga a diario",
      "Se vende ya en Latinoamérica (Argentina, desde 32.800 $)",
    ],
    contras: [
      "Sin planes de venta en Europa: imposible comprarlo en España",
      "Maletero de 280 l, muy justo para un SUV",
      "Sin carga rápida en continua: solo 6,6 kW en alterna",
      "126 km eléctricos en ciclo WLTC, menos en WLTP",
      "Pantalla de 12,3\" pequeña frente a sus hermanos mayores",
    ],
    largoMm: 4350,
    anchoMm: 1820,
    altoMm: 1625,
    pesoKg: 1440,
    consumo: 1.1,
    consumoUnidad: "l/100 km",
    plazas: 5,
    parNm: 578,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["par"], // 578 Nm según prensa latina; otra fuente indica 445 Nm
    imagen: "/media/lynk-co-06-emp-2025-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    fuenteNombre: "autoplusdigital.com.ar",
    fuenteUrl: "https://autoplusdigital.com.ar/lynk-co-06-phev-argentina-precio-ficha-tecnica/",
    costeMensual: {
      "costeEnergia100km": 4.5,
      "seguroTercerosAnual": 400,
      "seguroAmpliadoAnual": 750,
      "mantenimientoAnual": 350,
      "costeMensualTotal": 148,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "estimado: 15.000 km/año, 60 % de los km en modo eléctrico; seguro y mantenimiento orientativos del segmento B-SUV; el modelo no se vende en España",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/lynk-co-06-emp-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "Lynk & Co 06 EM-P, SUV compacto híbrido enchufable, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del Lynk & Co 06 EM-P con pantalla de 14,6 pulgadas",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/lynk-co-06-emp-2025-precio-ficha-tecnica-hero.webp",
        "alt": "Lynk & Co 06 EM-P en una calle urbana",
        "ancho": 1200,
        "alto": 800
      }
    ],
  },
  {
    id: "lynk-co-07-emp-2025-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/lynk-co-07-emp-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: "mWAOhSm6lY0",
    videoCanal: "Borderless Car",
    marca: "Lynk & Co",
    modelo: "07 EM-P",
    tipo: "Híbrido enchufable",
    categoria: "Berlina",
    precioDesde: 19800, // solo China: sin precio oficial en España/Europa
    potenciaCv: 381,
    autonomiaKm: 126, // eléctrica (CLTC)
    maleteroL: null,
    ceroCien: 6.5,
    velocidadMax: null,
    bateriaKwh: 18.99,
    cargaRapidaKw: null, // 30-80 % en 27 min en continua
    etiquetaDgt: null, // no se vende en España: sin etiqueta DGT asignada
    pros: [
      "381 CV con 1.5T y motor eléctrico de 160 kW: berlina PHEV muy rápida",
      "126 km eléctricos (CLTC) con batería LFP de 18,99 kWh",
      "Radar LiDAR de serie y conducción inteligente Haohan",
      "Pantalla central de 15,4\" 2,5K con sistema Flyme Auto",
      "Distancia entre ejes de 2.843 mm: habitabilidad de segmento D",
    ],
    contras: [
      "La berlina no llegará a Europa: solo el familiar 07 GT (otro equipo)",
      "126 km CLTC equivalen a unos 100 km en WLTP",
      "Peso de 1.915 kg: lastra la agilidad",
      "Sin precio ni red de servicio fuera de China",
      "Pantalla enorme pero casi sin botones físicos",
    ],
    largoMm: 4827,
    anchoMm: 1900,
    altoMm: 1480,
    pesoKg: 1915,
    consumo: null,
    consumoUnidad: "l/100 km",
    plazas: 5,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["autonomiaKm", "precioDesde"], // 126 km en ciclo chino CLTC, no WLTP
    imagen: "/media/lynk-co-07-emp-2025-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    fuenteNombre: "hibridosyelectricos.com",
    fuenteUrl: "https://www.hibridosyelectricos.com/coches/este-volvo-phev-chino-tiene-mas-1000-kilometros-autonomia-pero-cuesta-menos-17000-euros_82541_102.html",
    costeMensual: {
      "costeEnergia100km": 5.0,
      "seguroTercerosAnual": 450,
      "seguroAmpliadoAnual": 850,
      "mantenimientoAnual": 400,
      "costeMensualTotal": 166,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "estimado: 15.000 km/año, 60 % de los km en modo eléctrico; seguro y mantenimiento orientativos del segmento D; el modelo no se vende en España",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/lynk-co-07-emp-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "Lynk & Co 07 EM-P, berlina híbrida enchufable, tres cuartos delantera",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del Lynk & Co 07 EM-P con pantalla de 15,4 pulgadas",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/lynk-co-07-emp-2025-precio-ficha-tecnica-hero.webp",
        "alt": "Lynk & Co 07 EM-P en una autopista",
        "ancho": 1200,
        "alto": 800
      }
    ],
  },
  {
    id: "lynk-co-09-mhev-2025-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/lynk-co-09-mhev-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: "SQ-sVUOyG9Y",
    videoCanal: "Autos Full",
    marca: "Lynk & Co",
    modelo: "09",
    tipo: "Híbrido",
    categoria: "SUV",
    precioDesde: 28900, // Latinoamérica: sin precio oficial en España/Europa
    potenciaCv: 254,
    autonomiaKm: null,
    maleteroL: 269,
    ceroCien: 8.0,
    velocidadMax: 215,
    bateriaKwh: null, // MHEV 48V: batería de 0,18 kWh
    cargaRapidaKw: null,
    etiquetaDgt: null, // no se vende en España: sin etiqueta DGT asignada
    pros: [
      "7 plazas reales en 5,04 m: el Lynk & Co más grande antes del 900",
      "Plataforma SPA del Volvo XC90: seguridad y aplomo suecos",
      "Tracción total y 8 modos de conducción, incluidos 4 off-road",
      "Maletero de hasta 1.522 l con dos filas abatidas",
      "Se vende en México, Chile y Argentina con red oficial",
    ],
    contras: [
      "La marca confirmó que el 09 no vendrá a Europa",
      "2.120 kg y 254 CV: prestaciones justas (8 s de 0-100)",
      "Consumo de 7,9 l/100 km: alto para un mild-hybrid",
      "Maletero de 269 l con las 7 plazas en uso",
      "Sin versión enchufable en Latinoamérica",
    ],
    largoMm: 5042,
    anchoMm: 1977,
    altoMm: 1780,
    pesoKg: 2120,
    consumo: 7.9,
    consumoUnidad: "l/100 km",
    plazas: 7,
    parNm: 350,
    traccion: "Total",
    emisionesCo2: null,
    aprox: ["consumo", "precioDesde"], // 12,6 km/l según ficha oficial mexicana
    imagen: "/media/lynk-co-09-mhev-2025-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    fuenteNombre: "lynkco.com",
    fuenteUrl: "https://www.lynkco.com/-/media/mx/fichatecnica09.pdf",
    costeMensual: {
      "costeEnergia100km": 14.6,
      "seguroTercerosAnual": 500,
      "seguroAmpliadoAnual": 950,
      "mantenimientoAnual": 450,
      "costeMensualTotal": 299,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "estimado: 15.000 km/año con consumo 7,9 l/100 km a 1,85 €/l; seguro y mantenimiento orientativos del segmento E-SUV; el modelo no se vende en España",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/lynk-co-09-mhev-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "Lynk & Co 09, SUV de 7 plazas, vista tres cuartos delantera",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del Lynk & Co 09 con 7 plazas",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/lynk-co-09-mhev-2025-precio-ficha-tecnica-hero.webp",
        "alt": "Lynk & Co 09 en una pista de tierra",
        "ancho": 1200,
        "alto": 800
      }
    ],
  },
  {
    id: "lynk-co-900-emp-2025-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/lynk-co-900-emp-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/lynk-co-900-emp-2025-precio-ficha-tecnica-interior-oficial.webp",
    videoId: "pX5PDKBb-Dw",
    videoCanal: "Sensor Automotriz",
    marca: "Lynk & Co",
    modelo: "900 EM-P",
    tipo: "Híbrido enchufable",
    categoria: "SUV",
    precioDesde: 37500, // solo China: sin precio oficial en España/Europa
    potenciaCv: 884,
    autonomiaKm: 210, // eléctrica
    maleteroL: 281,
    ceroCien: 4.3,
    velocidadMax: 240,
    bateriaKwh: 52.38,
    cargaRapidaKw: null, // 20-80 % en ~17 min en continua
    etiquetaDgt: null, // no se vende en España: sin etiqueta DGT asignada
    pros: [
      "884 CV y 1.248 Nm: el Lynk & Co más potente de la historia",
      "210 km eléctricos y 0-100 en 4,3 s con 6 plazas",
      "Plataforma SPA Evo compartida con el Volvo XC90",
      "Asientos traseros giratorios y nevera a bordo",
      "Pruebas de choque de tercera fila superadas con nota (CAERI)",
    ],
    contras: [
      "Solo se vende en China: sin planes confirmados para Europa",
      "2.820 kg: un peso que se nota en consumos y frenada",
      "5,24 m de largo: imposible de aparcar en ciudad",
      "Precio en China desde unos 37.500 €; en Europa costaría mucho más",
      "Triple motor eléctrico: complejidad mecánica máxima",
    ],
    largoMm: 5240,
    anchoMm: 1999,
    altoMm: 1810,
    pesoKg: 2820,
    consumo: 0.65,
    consumoUnidad: "l/100 km",
    plazas: 6,
    parNm: 1248,
    traccion: "Total",
    emisionesCo2: null,
    aprox: ["consumo", "precioDesde"], // consumo ponderado con batería cargada
    imagen: "/media/lynk-co-900-emp-2025-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    fuenteNombre: "auto-data.net",
    fuenteUrl: "https://www.auto-data.net/es/lynk-co-900-em-p-2.0t-884hp-plug-in-hybrid-awd-dht-pro-54750",
    costeMensual: {
      "costeEnergia100km": 6.0,
      "seguroTercerosAnual": 600,
      "seguroAmpliadoAnual": 1200,
      "mantenimientoAnual": 550,
      "costeMensualTotal": 221,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "estimado: 15.000 km/año, 60 % de los km en modo eléctrico; seguro y mantenimiento orientativos del segmento F-SUV; el modelo no se vende en España",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/lynk-co-900-emp-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "Lynk & Co 900 EM-P, SUV insignia de 6 plazas, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/lynk-co-900-emp-2025-precio-ficha-tecnica-interior-oficial.webp",
        "alt": "Interior del Lynk & Co 900 EM-P con asientos giratorios",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/lynk-co-900-emp-2025-precio-ficha-tecnica-hero.webp",
        "alt": "Lynk & Co 900 EM-P en una carretera",
        "ancho": 1200,
        "alto": 800
      }
    ],
  },
  {
    id: "lynk-co-z10-electrico-2025-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/lynk-co-z10-electrico-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/lynk-co-z10-electrico-2025-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null, // sin videoprueba verificada en español a 05/10/2026
    videoCanal: null,
    marca: "Lynk & Co",
    modelo: "Z10",
    tipo: "Eléctrico",
    categoria: "Berlina",
    precioDesde: 27000, // solo China: sin precio oficial en España/Europa
    potenciaCv: 272,
    autonomiaKm: 766, // CLTC
    maleteroL: 616,
    ceroCien: 6.8,
    velocidadMax: 210,
    bateriaKwh: 95,
    cargaRapidaKw: null, // 800 V: 10-80 % en 15 min (versiones 800 V)
    etiquetaDgt: null, // no se vende en España: sin etiqueta DGT asignada
    pros: [
      "Hasta 806 km CLTC y 789 CV en la versión 4WD: cifras de récord",
      "Arquitectura de 800 V con 10-80 % en 15 minutos",
      "Cx de 0,198: de los más aerodinámicos del mercado",
      "5,03 m y maletero de 616 l: berlina ejecutiva de verdad",
      "LiDAR y conducción inteligente con doble chip Orin X",
    ],
    contras: [
      "Sin lanzamiento global confirmado: solo China por ahora",
      "766 km CLTC equivalen a bastante menos en WLTP",
      "2.275 kg en la versión de 95 kWh",
      "Toda la gama con baterías LFP, sin NCM",
      "La versión 4WD de 789 CV roza el precio de un premium europeo",
    ],
    largoMm: 5028,
    anchoMm: 1966,
    altoMm: 1468,
    pesoKg: 2275,
    consumo: 14.3,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: 343,
    traccion: "Trasera",
    emisionesCo2: 0,
    aprox: ["autonomiaKm", "consumo", "precioDesde"], // cifras en ciclo chino CLTC, no WLTP
    imagen: "/media/lynk-co-z10-electrico-2025-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    fuenteNombre: "auto-data.net",
    fuenteUrl: "https://www.auto-data.net/es/lynk-co-z10-95-kwh-272hp-54743",
    costeMensual: {
      "costeEnergia100km": 2.6,
      "seguroTercerosAnual": 500,
      "seguroAmpliadoAnual": 950,
      "mantenimientoAnual": 300,
      "costeMensualTotal": 137,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "estimado: 15.000 km/año con consumo 14,3 kWh/100 km a 0,18 €/kWh; seguro y mantenimiento orientativos del segmento E eléctrico; el modelo no se vende en España",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/lynk-co-z10-electrico-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "Lynk & Co Z10, berlina eléctrica, vista tres cuartos delantera",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/lynk-co-z10-electrico-2025-precio-ficha-tecnica-interior-oficial.webp",
        "alt": "Interior del Lynk & Co Z10",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/lynk-co-z10-electrico-2025-precio-ficha-tecnica-hero.webp",
        "alt": "Lynk & Co Z10 circulando de noche por la ciudad",
        "ancho": 1200,
        "alto": 800
      }
    ],
  },
];
