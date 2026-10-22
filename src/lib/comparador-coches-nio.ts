// NIO — gama real 2024+ (8 fichas nuevas).
// Fecha de verificación: 05/10/2026.
// Fuentes: nio.com/de_DE (web oficial Alemania), nio.com/ec7, auto-data.net,
// ultimatespecs.com, evspecs.org, arenaev.com, cnevpost.com, electrek.co,
// carnewschina.com, electrive.com, soymotor.com, berrocar.com, vision-mobility.de,
// it-boltwise.de, driveduel.de, springerprofessional.de, auto-motor-und-sport.
// Las 2 fichas NIO ya existentes (Firefly y ES9) viven en comparador-coches-data.ts
// y comparador-coches-chinos-2026.ts; aquí solo los 8 modelos nuevos.
// Precios: Alemania con batería incluida (lista oficial de precios NIO) salvo
// EC6/EC7, que no se venden en Europa (precio null) — solo China (yuanes).
// Garantía de batería: no publicada de forma verificable por NIO Europa → null.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const COCHES_NIO: CocheComparador[] = [
  {
    id: "nio-et5-2025-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/nio-et5-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/nio-et5-2025-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    marca: "Nio",
    modelo: "ET5",
    tipo: "Eléctrico",
    categoria: "Berlina",
    precioDesde: 68500, // Alemania, con batería de 100 kWh (lista oficial NIO; 59.500 € con 75 kWh)
    potenciaCv: 490,
    autonomiaKm: 590, // WLTP (batería 100 kWh; nio.com/de_DE)
    maleteroL: 475,
    ceroCien: 4.0,
    velocidadMax: 200,
    bateriaKwh: 100,
    cargaRapidaKw: null,
    etiquetaDgt: "Cero",
    pros: [
      "Su mejor argumento se nota al salir de un semáforo. Con tracción a las cuatro ruedas, 490 CV y 700 Nm, esta berlina necesita 4,0 segundos para llegar a 100 km/h y sigue empujando hasta 200 km/h.",
      "El alcance homologado se queda en 590 km. Esa cifra procede del pack de 100 kWh, el grande de la gama, y cambia el uso diario: varios días urbanos caben entre recarga y recarga.",
      "El acumulador no tiene por qué comprarse junto con el coche. Si se paga una cuota mensual por él —la fórmula BaaS de la marca—, el ET5 puede entrar en una cabina automatizada, dejar el pack agotado y marcharse con uno cargado sin conectar ningún cable.",
      "Por dentro no imita a una berlina alemana clásica. Preside el salpicadero una AMOLED de 12,8 pulgadas, el audio reparte 23 altavoces en esquema 7.1.4 y los asientos ofrecen masaje, un equipamiento más propio de un segmento superior.",
      "En las pruebas de Euro NCAP obtuvo la nota máxima de cinco estrellas. Aparte queda el lidar, incluido de fábrica, que vigila lo que ocurre por delante del coche y alimenta sus asistentes de conducción."
    ],
    contras: [
      "El precio alemán de esta versión, 68.500 €, desmonta cualquier expectativa de ganga oriental. Por ese dinero el comprador ya compara contra berlinas eléctricas europeas y norteamericanas muy asentadas, no contra coches baratos.",
      "Para quien vive en España, adquirirlo aún exige salir del país. Portugal es el destino más cercano de un mapa comercial reducido que se completa, hacia el norte, con Dinamarca, Suecia, Noruega, Países Bajos y Alemania.",
      "Las cabinas automatizadas para dejar un pack y recoger otro siguen siendo una rareza en suelo europeo. Así que, mientras no haya una cerca, la rutina real del propietario español será la de siempre: enchufe en casa o cargador público.",
      "Recuperar energía en corriente continua no es su punto fuerte. Le falta el plus de velocidad que dan las arquitecturas de 800 voltios, y eso se traduce en esperas menos competitivas cuando el viaje depende de una parada breve.",
      "Los 475 litros del maletero engañan menos por volumen que por forma. Al ser una berlina de tres volúmenes no hay portón amplio: entran maletas sin problema, pero un bulto rígido y alto se negocia peor que en su variante familiar Touring o en un SUV."
    ],
    largoMm: 4790,
    anchoMm: 1960,
    altoMm: 1499,
    pesoKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 5,
    parNm: 700,
    traccion: "Total",
    emisionesCo2: null,
    aprox: [],
    imagen: "/media/nio-et5-2025-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 3.5,
      "seguroTercerosAnual": 450,
      "seguroAmpliadoAnual": 850,
      "mantenimientoAnual": 250,
      "costeMensualTotal": 111,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "consumo combinado oficial WLTP 18,6-20,8 kWh/100 km (nio.com/de_DE); recarga domestica aprox 0,18 EUR/kWh; 1.500 km/mes",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/nio-et5-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "Nio ET5 2025, berlina eléctrica, vista lateral",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "/media/nio-et5-2025-precio-ficha-tecnica-interior-oficial.webp",
        "alt": "Interior del Nio ET5 2025, salpicadero minimalista",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "/media/nio-et5-2025-precio-ficha-tecnica-hero.webp",
        "alt": "Nio ET5 2025, vista tres cuartos delantera",
        "ancho": 1920,
        "alto": 1280
      }
    ],
  
    planMantenimiento: {
      "intervalo": "Sin revisión anual única fijada en el manual europeo: NIO prescribe operaciones por componente según tiempo o kilometraje, a realizar en un NIO Service Center",
      "revisiones": [
        {
          "costeAproxEur": null,
          "nombre": "Líquido de frenos",
          "queSeCambia": "Sustitución completa del líquido de frenos cada 3 años"
        },
        {
          "costeAproxEur": null,
          "nombre": "Refrigerante del sistema de propulsión",
          "queSeCambia": "Comprobación como máximo al 5.º año o a los 100.000 km, lo primero que ocurra, y sustitución solo si no cumple el estándar técnico de NIO; si no se sustituye, nueva comprobación cada 2 años o 40.000 km"
        },
        {
          "costeAproxEur": null,
          "nombre": "Pastillas de freno",
          "queSeCambia": "Comprobación de desgaste como máximo al 5.º año o a los 100.000 km, lo primero que ocurra, y sustitución solo si es necesaria; si no se sustituyen, nueva comprobación cada 2 años o 40.000 km"
        },
        {
          "costeAproxEur": null,
          "nombre": "Discos de freno",
          "queSeCambia": "Comprobación de desgaste como máximo al 10.º año o a los 200.000 km, lo primero que ocurra, y sustitución solo si es necesaria; si no se sustituyen, nueva comprobación cada 2 años o 40.000 km"
        },
        {
          "costeAproxEur": null,
          "nombre": "Aceite de la caja de cambios",
          "queSeCambia": "Sustitución cada 200.000 km"
        }
      ]
    },
  
    planMantenimiento: {
      "intervalo": "Sin revisión anual única fijada en el manual europeo: NIO prescribe operaciones por componente según tiempo o kilometraje, a realizar en un NIO Service Center",
      "revisiones": [
        {
          "costeAproxEur": null,
          "nombre": "Líquido de frenos",
          "queSeCambia": "Sustitución completa del líquido de frenos cada 3 años"
        },
        {
          "costeAproxEur": null,
          "nombre": "Refrigerante del sistema de propulsión",
          "queSeCambia": "Comprobación como máximo al 5.º año o a los 100.000 km, lo primero que ocurra, y sustitución solo si no cumple el estándar técnico de NIO; si no se sustituye, nueva comprobación cada 2 años o 40.000 km"
        },
        {
          "costeAproxEur": null,
          "nombre": "Pastillas de freno",
          "queSeCambia": "Comprobación de desgaste como máximo al 5.º año o a los 100.000 km, lo primero que ocurra, y sustitución solo si es necesaria; si no se sustituyen, nueva comprobación cada 2 años o 40.000 km"
        },
        {
          "costeAproxEur": null,
          "nombre": "Discos de freno",
          "queSeCambia": "Comprobación de desgaste como máximo al 10.º año o a los 200.000 km, lo primero que ocurra, y sustitución solo si es necesaria; si no se sustituyen, nueva comprobación cada 2 años o 40.000 km"
        },
        {
          "costeAproxEur": null,
          "nombre": "Aceite de la caja de cambios",
          "queSeCambia": "Sustitución cada 200.000 km"
        }
      ]
    },
  
    planMantenimiento: {
      "intervalo": "Sin revisión anual única fijada en el manual europeo: NIO prescribe operaciones por componente según tiempo o kilometraje, a realizar en un NIO Service Center",
      "revisiones": [
        {
          "costeAproxEur": null,
          "nombre": "Líquido de frenos",
          "queSeCambia": "Sustitución completa del líquido de frenos cada 3 años"
        },
        {
          "costeAproxEur": null,
          "nombre": "Refrigerante del sistema de propulsión",
          "queSeCambia": "Comprobación como máximo al 5.º año o a los 100.000 km, lo primero que ocurra, y sustitución solo si no cumple el estándar técnico de NIO; si no se sustituye, nueva comprobación cada 2 años o 40.000 km"
        },
        {
          "costeAproxEur": null,
          "nombre": "Pastillas de freno",
          "queSeCambia": "Comprobación de desgaste como máximo al 5.º año o a los 100.000 km, lo primero que ocurra, y sustitución solo si es necesaria; si no se sustituyen, nueva comprobación cada 2 años o 40.000 km"
        },
        {
          "costeAproxEur": null,
          "nombre": "Discos de freno",
          "queSeCambia": "Comprobación de desgaste como máximo al 10.º año o a los 200.000 km, lo primero que ocurra, y sustitución solo si es necesaria; si no se sustituyen, nueva comprobación cada 2 años o 40.000 km"
        },
        {
          "costeAproxEur": null,
          "nombre": "Aceite de la caja de cambios",
          "queSeCambia": "Sustitución cada 200.000 km"
        }
      ]
    },
  
    planMantenimiento: {
      "intervalo": "Sin revisión anual única fijada en el manual europeo: NIO prescribe operaciones por componente según tiempo o kilometraje, a realizar en un NIO Service Center",
      "revisiones": [
        {
          "costeAproxEur": null,
          "nombre": "Líquido de frenos",
          "queSeCambia": "Sustitución completa del líquido de frenos cada 3 años"
        },
        {
          "costeAproxEur": null,
          "nombre": "Refrigerante del sistema de propulsión",
          "queSeCambia": "Comprobación como máximo al 5.º año o a los 100.000 km, lo primero que ocurra, y sustitución solo si no cumple el estándar técnico de NIO; si no se sustituye, nueva comprobación cada 2 años o 40.000 km"
        },
        {
          "costeAproxEur": null,
          "nombre": "Pastillas de freno",
          "queSeCambia": "Comprobación de desgaste como máximo al 5.º año o a los 100.000 km, lo primero que ocurra, y sustitución solo si es necesaria; si no se sustituyen, nueva comprobación cada 2 años o 40.000 km"
        },
        {
          "costeAproxEur": null,
          "nombre": "Discos de freno",
          "queSeCambia": "Comprobación de desgaste como máximo al 10.º año o a los 200.000 km, lo primero que ocurra, y sustitución solo si es necesaria; si no se sustituyen, nueva comprobación cada 2 años o 40.000 km"
        },
        {
          "costeAproxEur": null,
          "nombre": "Aceite de la caja de cambios",
          "queSeCambia": "Sustitución cada 200.000 km"
        }
      ]
    },
  },
  {
    id: "nio-et5-touring-2025-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/nio-et5-touring-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/nio-et5-touring-2025-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    marca: "Nio",
    modelo: "ET5 Touring",
    tipo: "Eléctrico",
    categoria: "Familiar",
    precioDesde: 68500, // Alemania, con batería de 100 kWh (lista oficial NIO; 59.500 € con 75 kWh)
    potenciaCv: 490,
    autonomiaKm: 560, // WLTP (batería 100 kWh; nio.com/de_DE/et5-touring)
    maleteroL: 450,
    ceroCien: 4.0,
    velocidadMax: 200,
    bateriaKwh: 100,
    cargaRapidaKw: null,
    etiquetaDgt: "Cero",
    pros: [
      "El portón posterior es lo que lo distingue de la berlina. Con cinco plazas en uso, el maletero ofrece 450 litros. Al abatir la fila trasera, el espacio sube a 1.300 litros. Añade un enganche capaz de arrastrar 1.400 kilos, útil para llevar una caravana pequeña en vacaciones",
      "La batería de mayor capacidad llega a 100 kWh. La autonomía se anuncia en 560 kilómetros. El techo panorámico suma 1,35 metros cuadrados de cristal sobre el habitáculo",
      "La mecánica eléctrica suma 490 CV entre sus dos motores. El par llega a 700 Nm y se reparte entre ambos ejes. Con ese empuje, el sprint hasta 100 km/h se cierra en 4 segundos",
      "La batería no tiene por qué ser tuya en propiedad. Con la suscripción BaaS, el coche entra en una cabina automatizada de la marca, se le retira el paquete descargado y sale con otro ya listo. La operación ronda los cinco minutos y evita depender de una recarga en ruta",
      "Euro NCAP le concedió cinco estrellas. Por otro lado, el sistema de percepción incorpora lidar de serie. El asistente NOMI Halo también forma parte del equipamiento inicial"
    ],
    contras: [
      "En Alemania, el precio de partida se sitúa en 68.500 euros. Por ese dinero ya entras en el territorio de un BMW i4. La diferencia es que el alemán no se ofrece con esta silueta familiar",
      "De momento, sus mercados europeos se limitan a Portugal, Dinamarca, Suecia, Noruega, Países Bajos y Alemania. España queda fuera de esa lista. Para un comprador español, eso complica tanto la entrega como cualquier gestión posterior",
      "Elegir la carrocería abierta por detrás tiene un coste en eficiencia. Respecto a la berlina, se pierden 30 kilómetros de autonomía. Y la factura, además, también resulta más alta en el Touring",
      "La posventa todavía tiene una presencia muy reducida en Europa. Las cabinas para sustituir la batería tampoco abundan fuera de unos pocos enclaves. Si vives lejos de esos puntos, cada intervención puede convertirse en un desplazamiento serio",
      "Su valor futuro es hoy una incógnita difícil de despejar. La marca apenas tiene recorrido entre compradores europeos. Eso añade riesgo a la hora de venderlo de segunda mano frente a rivales asentados"
    ],
    largoMm: 4790,
    anchoMm: 1960,
    altoMm: 1499,
    pesoKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 5,
    parNm: 700,
    traccion: "Total",
    emisionesCo2: null,
    aprox: [],
    imagen: "/media/nio-et5-touring-2025-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 3.6,
      "seguroTercerosAnual": 450,
      "seguroAmpliadoAnual": 850,
      "mantenimientoAnual": 250,
      "costeMensualTotal": 112,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "consumo combinado oficial WLTP 19,3-21,9 kWh/100 km (nio.com/de_DE/et5-touring); recarga domestica aprox 0,18 EUR/kWh; 1.500 km/mes",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/nio-et5-touring-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "Nio ET5 Touring 2025, familiar eléctrico, vista trasera",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "/media/nio-et5-touring-2025-precio-ficha-tecnica-interior-oficial.webp",
        "alt": "Interior del Nio ET5 Touring 2025",
        "ancho": 1792,
        "alto": 1184
      },
      {
        "src": "/media/nio-et5-touring-2025-precio-ficha-tecnica-hero.webp",
        "alt": "Nio ET5 Touring 2025, vista tres cuartos delantera",
        "ancho": 1920,
        "alto": 1280
      }
    ],
  
    planMantenimiento: {
      "intervalo": "Según el manual oficial del ET5 Touring, en condiciones normales de uso: líquido de frenos cada 3 años y aceite de la caja de cambios cada 200.000 km; refrigerante, pastillas y discos se comprueban por años o kilómetros y se sustituyen solo si es necesario. El manual no publica costes, por eso costeAproxEur es null en todas las revisiones.",
      "revisiones": [
        {
          "costeAproxEur": null,
          "nombre": "Líquido de frenos",
          "queSeCambia": "Sustitución del líquido de frenos cada 3 años"
        },
        {
          "costeAproxEur": null,
          "nombre": "Aceite de la caja de cambios",
          "queSeCambia": "Sustitución del aceite de la caja de cambios cada 200.000 km"
        },
        {
          "costeAproxEur": null,
          "nombre": "Refrigerante",
          "queSeCambia": "Comprobación a más tardar en el 5.º año o a los 100.000 km, lo que ocurra antes, y sustitución solo si es necesario; si no se sustituye, nueva comprobación cada 2 años o 40.000 km"
        },
        {
          "costeAproxEur": null,
          "nombre": "Pastillas de freno",
          "queSeCambia": "Comprobación del desgaste a más tardar en el 5.º año o a los 100.000 km y sustitución solo si es necesario; si no se sustituyen, nueva comprobación cada 2 años o 40.000 km"
        },
        {
          "costeAproxEur": null,
          "nombre": "Discos de freno",
          "queSeCambia": "Comprobación del desgaste a más tardar en el 10.º año o a los 200.000 km y sustitución solo si es necesario; si no se sustituyen, nueva comprobación cada 2 años o 40.000 km"
        }
      ]
    },
  
    planMantenimiento: {
      "intervalo": "Según el manual oficial del ET5 Touring, en condiciones normales de uso: líquido de frenos cada 3 años y aceite de la caja de cambios cada 200.000 km; refrigerante, pastillas y discos se comprueban por años o kilómetros y se sustituyen solo si es necesario. El manual no publica costes, por eso costeAproxEur es null en todas las revisiones.",
      "revisiones": [
        {
          "costeAproxEur": null,
          "nombre": "Líquido de frenos",
          "queSeCambia": "Sustitución del líquido de frenos cada 3 años"
        },
        {
          "costeAproxEur": null,
          "nombre": "Aceite de la caja de cambios",
          "queSeCambia": "Sustitución del aceite de la caja de cambios cada 200.000 km"
        },
        {
          "costeAproxEur": null,
          "nombre": "Refrigerante",
          "queSeCambia": "Comprobación a más tardar en el 5.º año o a los 100.000 km, lo que ocurra antes, y sustitución solo si es necesario; si no se sustituye, nueva comprobación cada 2 años o 40.000 km"
        },
        {
          "costeAproxEur": null,
          "nombre": "Pastillas de freno",
          "queSeCambia": "Comprobación del desgaste a más tardar en el 5.º año o a los 100.000 km y sustitución solo si es necesario; si no se sustituyen, nueva comprobación cada 2 años o 40.000 km"
        },
        {
          "costeAproxEur": null,
          "nombre": "Discos de freno",
          "queSeCambia": "Comprobación del desgaste a más tardar en el 10.º año o a los 200.000 km y sustitución solo si es necesario; si no se sustituyen, nueva comprobación cada 2 años o 40.000 km"
        }
      ]
    },
  
    planMantenimiento: {
      "intervalo": "Según el manual oficial del ET5 Touring, en condiciones normales de uso: líquido de frenos cada 3 años y aceite de la caja de cambios cada 200.000 km; refrigerante, pastillas y discos se comprueban por años o kilómetros y se sustituyen solo si es necesario. El manual no publica costes, por eso costeAproxEur es null en todas las revisiones.",
      "revisiones": [
        {
          "costeAproxEur": null,
          "nombre": "Líquido de frenos",
          "queSeCambia": "Sustitución del líquido de frenos cada 3 años"
        },
        {
          "costeAproxEur": null,
          "nombre": "Aceite de la caja de cambios",
          "queSeCambia": "Sustitución del aceite de la caja de cambios cada 200.000 km"
        },
        {
          "costeAproxEur": null,
          "nombre": "Refrigerante",
          "queSeCambia": "Comprobación a más tardar en el 5.º año o a los 100.000 km, lo que ocurra antes, y sustitución solo si es necesario; si no se sustituye, nueva comprobación cada 2 años o 40.000 km"
        },
        {
          "costeAproxEur": null,
          "nombre": "Pastillas de freno",
          "queSeCambia": "Comprobación del desgaste a más tardar en el 5.º año o a los 100.000 km y sustitución solo si es necesario; si no se sustituyen, nueva comprobación cada 2 años o 40.000 km"
        },
        {
          "costeAproxEur": null,
          "nombre": "Discos de freno",
          "queSeCambia": "Comprobación del desgaste a más tardar en el 10.º año o a los 200.000 km y sustitución solo si es necesario; si no se sustituyen, nueva comprobación cada 2 años o 40.000 km"
        }
      ]
    },
  },
  {
    id: "nio-et7-2024-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/nio-et7-2024-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/nio-et7-2024-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    marca: "Nio",
    modelo: "ET7",
    tipo: "Eléctrico",
    categoria: "Berlina",
    precioDesde: 90900, // Alemania, con batería de 100 kWh (lista oficial NIO; 81.900 € con 75 kWh)
    potenciaCv: 653,
    autonomiaKm: 580, // WLTP (batería 100 kWh, 505-580 km según lista oficial NIO)
    maleteroL: null,
    ceroCien: 3.8,
    velocidadMax: 200,
    bateriaKwh: 100,
    cargaRapidaKw: 126, // oficial NIO (lista de precios DE): 140 kW con 75 kWh, 126 kW con 100 kWh
    etiquetaDgt: "Cero",
    pros: [
      "653 CV y 850 Nm: la berlina eléctrica china que planta cara al Tesla Model S",
      "580 km WLTP con la batería de 100 kWh (y hasta ~1.000 km NEDC con la de 150 kWh)",
      "Suspensión neumática inteligente, CDC y Cx de 0,208: confort de berlina de representación",
      "LiDAR, 33 sensores y 4 Nvidia Drive Orin: el arsenal de conducción asistida más completo",
      "Interior de lujo con 23 altavoces, asientos con masaje y NOMI, el asistente con cara",
    ],
    contras: [
      "90.900 € en Alemania con la batería de 100 kWh: precio de alemán premium",
      "Nio aún no vende en España: solo Alemania, Países Bajos, Noruega, Suecia, Dinamarca y Portugal",
      "La batería de 150 kWh (la de los 1.000 km) apenas se ofrece y carga a solo 90 kW de pico",
      "Red de servicio mínima en Europa y reventa incierta",
      "5,10 m de largo: aparcarlo en ciudad es un deporte de riesgo",
    ],
    largoMm: 5101,
    anchoMm: 1987,
    altoMm: 1509,
    pesoKg: 2379,
    consumo: null,
    consumoUnidad: null,
    plazas: 5,
    parNm: 850,
    traccion: "Total",
    emisionesCo2: null,
    aprox: [],
    imagen: "/media/nio-et7-2024-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 3.6,
      "seguroTercerosAnual": 550,
      "seguroAmpliadoAnual": 1000,
      "mantenimientoAnual": 300,
      "costeMensualTotal": 125,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "consumo medio WLTP aprox 20 kWh/100 km; recarga domestica aprox 0,18 EUR/kWh; 1.500 km/mes",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/nio-et7-2024-precio-ficha-tecnica-oficial.webp",
        "alt": "Nio ET7, berlina insignia eléctrica, vista frontal",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "/media/nio-et7-2024-precio-ficha-tecnica-interior-oficial.webp",
        "alt": "Interior del Nio ET7, lujo minimalista",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "/media/nio-et7-2024-precio-ficha-tecnica-hero.webp",
        "alt": "Nio ET7, vista tres cuartos delantera",
        "ancho": 1920,
        "alto": 1280
      }
    ],
  },
  {
    id: "nio-el6-2024-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/nio-el6-2024-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/nio-el6-2024-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    marca: "Nio",
    modelo: "EL6",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: 74500, // Alemania, con batería de 100 kWh (soymotor.com; 65.500 € con 75 kWh)
    potenciaCv: 490,
    autonomiaKm: 529, // WLTP (batería 100 kWh; nio.com/de_DE/el6)
    maleteroL: 579,
    ceroCien: 4.5,
    velocidadMax: 200,
    bateriaKwh: 100,
    cargaRapidaKw: 130,
    etiquetaDgt: "Cero",
    pros: [
      "Empuje de gran turismo en formato familiar: 490 CV, 700 Nm y tracción total para firmar 4,5 segundos hasta 100 km/h",
      "Pensado para escapadas largas, combina 529 km WLTP con 579 litros tras el portón, sin renunciar a cinco plazas reales",
      "El confort manda a bordo: asientos Ultra-Fit con función de masaje shiatsu y una posición lounge muy reclinada para descansar entre cargas",
      "Su carrocería esconde un LiDAR junto a una amplia red de sensores, y Euro NCAP le otorgó la máxima nota posible",
      "Si eliges BaaS, puedes cambiar el pack agotado por otro ya cargado en una Power Swap Station en cuestión de minutos"
    ],
    contras: [
      "La factura alemana arranca en 74.500 euros con el pack grande, por encima de lo que pide un Tesla Model Y Performance",
      "Comprarlo desde España resulta, por ahora, imposible: Nio no opera comercialmente aquí y concentra sus mercados europeos en unos pocos países del norte, además de Portugal",
      "El cambio de denominación tras el litigio con Audi —ES6 en su país de origen, EL6 aquí— complica buscar información, accesorios y comparativas",
      "La posventa europea sigue siendo pequeña, así que una avería puede alargarse más de lo deseable y el valor futuro como usado genera dudas razonables",
      "Su eficiencia queda por detrás de rivales más ligeros y la carga rápida se detiene en 130 kW, cifra discreta para un SUV de este precio"
    ],
    largoMm: 4854,
    anchoMm: 1995,
    altoMm: 1703,
    pesoKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 5,
    parNm: 700,
    traccion: "Total",
    emisionesCo2: null,
    aprox: [],
    imagen: "/media/nio-el6-2024-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 3.7,
      "seguroTercerosAnual": 550,
      "seguroAmpliadoAnual": 1000,
      "mantenimientoAnual": 300,
      "costeMensualTotal": 126,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "consumo combinado oficial WLTP 20,4-22,3 kWh/100 km (nio.com/de_DE/el6); recarga domestica aprox 0,18 EUR/kWh; 1.500 km/mes",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/nio-el6-2024-precio-ficha-tecnica-oficial.webp",
        "alt": "Nio EL6, SUV eléctrico, vista lateral",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "/media/nio-el6-2024-precio-ficha-tecnica-interior-oficial.webp",
        "alt": "Interior del Nio EL6, salpicadero minimalista",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "/media/nio-el6-2024-precio-ficha-tecnica-hero.webp",
        "alt": "Nio EL6, vista tres cuartos delantera",
        "ancho": 1920,
        "alto": 1280
      }
    ],
  
    planMantenimiento: {
      "intervalo": "Según el manual oficial del EL6, no hay una revisión única anual: cada elemento sigue su propio plazo en el NIO Service Center (líquido de frenos cada 3 años; aceite de la caja de cambios cada 200.000 km; controles de refrigerante, pastillas y discos por años o kilometraje, lo que ocurra antes).",
      "revisiones": [
        {
          "costeAproxEur": null,
          "nombre": "Líquido de frenos",
          "queSeCambia": "Sustitución del líquido de frenos cada 3 años, según el manual oficial del EL6."
        },
        {
          "costeAproxEur": null,
          "nombre": "Aceite de la caja de cambios",
          "queSeCambia": "Sustitución del aceite de la caja de cambios cada 200.000 km, según el manual oficial del EL6."
        },
        {
          "costeAproxEur": null,
          "nombre": "Refrigerante",
          "queSeCambia": "Comprobación a más tardar en el 5.º año o a los 100.000 km, lo que ocurra antes, y sustitución si es necesario; si no se sustituye, nueva comprobación cada 2 años o 40.000 km."
        },
        {
          "costeAproxEur": null,
          "nombre": "Pastillas de freno",
          "queSeCambia": "Comprobación de desgaste a más tardar en el 5.º año o a los 100.000 km, lo que ocurra antes, y sustitución si es necesario; si no se sustituyen, nueva comprobación cada 2 años o 40.000 km."
        },
        {
          "costeAproxEur": null,
          "nombre": "Discos de freno",
          "queSeCambia": "Comprobación de desgaste a más tardar en el 10.º año o a los 200.000 km, lo que ocurra antes, y sustitución si es necesario; si no se sustituyen, nueva comprobación cada 2 años o 40.000 km."
        }
      ]
    },
  },
  {
    id: "nio-el7-2024-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/nio-el7-2024-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/nio-el7-2024-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    marca: "Nio",
    modelo: "EL7",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: 94900, // Alemania, con batería de 100 kWh (arenaev.com; 85.900 € con 75 kWh)
    potenciaCv: 653,
    autonomiaKm: 513, // WLTP (batería 100 kWh; evspecs.org / berrocar.com)
    maleteroL: 658,
    ceroCien: 3.9,
    velocidadMax: 200,
    bateriaKwh: 100,
    cargaRapidaKw: null, // 125-130 kW según fuente; sin dato oficial único
    etiquetaDgt: "Cero",
    pros: [
      "Dos motores, uno por eje, suman 653 CV y 850 Nm: con tracción a las cuatro ruedas despacha el 0 a 100 en 3,9 segundos y no se detiene hasta los 200 km/h",
      "La homologación WLTP le atribuye 513 km de alcance máximo, una cifra que reduce la dependencia del enchufe en trayectos largos con un SUV de este tamaño",
      "El acumulador, de 100 kWh, no tiene por qué comprarse incorporado al coche: bajo la modalidad BaaS queda en alquiler y, llegado el momento de reponer carga, una instalación automatizada retira el conjunto exhausto y monta otro listo para circular",
      "Detrás de la segunda fila quedan 658 litros para cargar; con cinco plazas y 4.912 mm de longitud, está pensado para viajar en familia sin renunciar a un SUV grande",
      "Las pruebas europeas de choque le otorgaron la valoración más alta posible, las cinco estrellas. Al margen de ese resultado, el apartado de sensores incorpora un lidar, y la dotación de retención incluye siete airbags. A ello se suma una suspensión neumática con amortiguación CDC y una capacidad de remolque de 2.000 kg"
    ],
    contras: [
      "La tarifa alemana parte de 94.900 euros: pagas precio de marca premium consolidada sin disponer, a cambio, de una red comercial comparable en extensión",
      "Quien lo quiera hoy tiene que mirar hacia el norte y el centro de Europa —además de Portugal—, donde NIO sí ha abierto ventas; el mercado español, en cambio, sigue sin canal oficial para adquirirlo",
      "La báscula marca 2.500 kg, un lastre que exige más de los frenos, castiga los neumáticos y aleja cualquier pretensión de agilidad en carreteras de curvas",
      "En su país de origen se comercializa como ES7; la sigla europea EL7 responde al litigio mantenido con Audi, una dualidad que complica seguir su trayectoria y comparar versiones entre mercados",
      "Al tratarse de un fabricante con escasa trayectoria en el lujo europeo, nadie puede anticipar con datos cómo cotizará un EL7 usado dentro de unos años"
    ],
    largoMm: 4912,
    anchoMm: 1987,
    altoMm: 1720,
    pesoKg: 2500,
    consumo: null,
    consumoUnidad: null,
    plazas: 5,
    parNm: 850,
    traccion: "Total",
    emisionesCo2: null,
    aprox: [],
    imagen: "/media/nio-el7-2024-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 3.8,
      "seguroTercerosAnual": 600,
      "seguroAmpliadoAnual": 1100,
      "mantenimientoAnual": 350,
      "costeMensualTotal": 136,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "consumo WLTP 18,5 kWh/100 km (TEL, evspecs.org); recarga domestica aprox 0,18 EUR/kWh; 1.500 km/mes",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/nio-el7-2024-precio-ficha-tecnica-oficial.webp",
        "alt": "Nio EL7, SUV eléctrico de lujo, vista lateral",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "/media/nio-el7-2024-precio-ficha-tecnica-interior-oficial.webp",
        "alt": "Interior del Nio EL7, lujo minimalista",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "/media/nio-el7-2024-precio-ficha-tecnica-hero.webp",
        "alt": "Nio EL7, vista tres cuartos delantera",
        "ancho": 1920,
        "alto": 1280
      }
    ],
  
    planMantenimiento: {
      "intervalo": "Según el manual oficial del EL7: líquido de frenos cada 3 años; comprobación de refrigerante y de pastillas a más tardar al 5.º año o a los 100.000 km; comprobación de discos al 10.º año o a los 200.000 km; aceite de la caja de cambios cada 200.000 km",
      "revisiones": [
        {
          "costeAproxEur": null,
          "nombre": "Líquido de frenos",
          "queSeCambia": "Sustitución del líquido de frenos cada 3 años, según el manual oficial del EL7"
        },
        {
          "costeAproxEur": null,
          "nombre": "Refrigerante",
          "queSeCambia": "Comprobación a más tardar al 5.º año o a los 100.000 km, lo que llegue antes, y sustitución solo si no cumple el estándar de Nio; si no se cambia, nueva comprobación cada 2 años o 40.000 km"
        },
        {
          "costeAproxEur": null,
          "nombre": "Pastillas de freno",
          "queSeCambia": "Comprobación de desgaste a más tardar al 5.º año o a los 100.000 km, lo que llegue antes, y sustitución solo si es necesaria; si no se cambian, nueva comprobación cada 2 años o 40.000 km"
        },
        {
          "costeAproxEur": null,
          "nombre": "Discos de freno",
          "queSeCambia": "Comprobación de desgaste a más tardar al 10.º año o a los 200.000 km, lo que llegue antes, y sustitución solo si es necesaria; si no se cambian, nueva comprobación cada 2 años o 40.000 km"
        },
        {
          "costeAproxEur": null,
          "nombre": "Aceite de la caja de cambios",
          "queSeCambia": "Sustitución del aceite de la caja de cambios cada 200.000 km, según el manual oficial del EL7"
        }
      ]
    },
  
    planMantenimiento: {
      "intervalo": "Según el manual oficial del EL7: líquido de frenos cada 3 años; comprobación de refrigerante y de pastillas a más tardar al 5.º año o a los 100.000 km; comprobación de discos al 10.º año o a los 200.000 km; aceite de la caja de cambios cada 200.000 km",
      "revisiones": [
        {
          "costeAproxEur": null,
          "nombre": "Líquido de frenos",
          "queSeCambia": "Sustitución del líquido de frenos cada 3 años, según el manual oficial del EL7"
        },
        {
          "costeAproxEur": null,
          "nombre": "Refrigerante",
          "queSeCambia": "Comprobación a más tardar al 5.º año o a los 100.000 km, lo que llegue antes, y sustitución solo si no cumple el estándar de Nio; si no se cambia, nueva comprobación cada 2 años o 40.000 km"
        },
        {
          "costeAproxEur": null,
          "nombre": "Pastillas de freno",
          "queSeCambia": "Comprobación de desgaste a más tardar al 5.º año o a los 100.000 km, lo que llegue antes, y sustitución solo si es necesaria; si no se cambian, nueva comprobación cada 2 años o 40.000 km"
        },
        {
          "costeAproxEur": null,
          "nombre": "Discos de freno",
          "queSeCambia": "Comprobación de desgaste a más tardar al 10.º año o a los 200.000 km, lo que llegue antes, y sustitución solo si es necesaria; si no se cambian, nueva comprobación cada 2 años o 40.000 km"
        },
        {
          "costeAproxEur": null,
          "nombre": "Aceite de la caja de cambios",
          "queSeCambia": "Sustitución del aceite de la caja de cambios cada 200.000 km, según el manual oficial del EL7"
        }
      ]
    },
  
    planMantenimiento: {
      "intervalo": "Según el manual oficial del EL7: líquido de frenos cada 3 años; comprobación de refrigerante y de pastillas a más tardar al 5.º año o a los 100.000 km; comprobación de discos al 10.º año o a los 200.000 km; aceite de la caja de cambios cada 200.000 km",
      "revisiones": [
        {
          "costeAproxEur": null,
          "nombre": "Líquido de frenos",
          "queSeCambia": "Sustitución del líquido de frenos cada 3 años, según el manual oficial del EL7"
        },
        {
          "costeAproxEur": null,
          "nombre": "Refrigerante",
          "queSeCambia": "Comprobación a más tardar al 5.º año o a los 100.000 km, lo que llegue antes, y sustitución solo si no cumple el estándar de Nio; si no se cambia, nueva comprobación cada 2 años o 40.000 km"
        },
        {
          "costeAproxEur": null,
          "nombre": "Pastillas de freno",
          "queSeCambia": "Comprobación de desgaste a más tardar al 5.º año o a los 100.000 km, lo que llegue antes, y sustitución solo si es necesaria; si no se cambian, nueva comprobación cada 2 años o 40.000 km"
        },
        {
          "costeAproxEur": null,
          "nombre": "Discos de freno",
          "queSeCambia": "Comprobación de desgaste a más tardar al 10.º año o a los 200.000 km, lo que llegue antes, y sustitución solo si es necesaria; si no se cambian, nueva comprobación cada 2 años o 40.000 km"
        },
        {
          "costeAproxEur": null,
          "nombre": "Aceite de la caja de cambios",
          "queSeCambia": "Sustitución del aceite de la caja de cambios cada 200.000 km, según el manual oficial del EL7"
        }
      ]
    },
  },
  {
    id: "nio-el8-2024-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/nio-el8-2024-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/nio-el8-2024-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    marca: "Nio",
    modelo: "EL8",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: 82900, // Alemania (configurador oficial nio.com; driveduel.de)
    potenciaCv: 653,
    autonomiaKm: 510, // WLTP (batería 90 kWh; auto-data.net / driveduel.de)
    maleteroL: 265,
    ceroCien: 4.1,
    velocidadMax: 200,
    bateriaKwh: 90,
    cargaRapidaKw: null,
    etiquetaDgt: "Cero",
    pros: [
      "El buque insignia de Nio en Europa: 5,10 m, 6 plazas y 653 CV",
      "510 km WLTP con la batería de 90 kWh y asientos Ottoman con frigorífico",
      "Suspensión neumática de doble cámara y CDC de serie: confort de limusina",
      "LiDAR, 33 sensores y NOMI: la tecnología más avanzada del segmento",
      "Batería intercambiable en 5 minutos en las Power Swap Stations (solo con BaaS)",
    ],
    contras: [
      "Desde 82.900 € en Alemania (más batería según versión): el Nio más caro de Europa",
      "Nio aún no vende en España: solo Alemania, Países Bajos, Noruega, Suecia, Dinamarca y Portugal",
      "2.633 kg de peso: un coloso poco ágil y con consumo elevado",
      "Maletero de solo 265 L con las 6 plazas en uso",
      "Marca poco conocida en el lujo europeo: la reventa es una incógnita",
    ],
    largoMm: 5099,
    anchoMm: 1989,
    altoMm: 1750,
    pesoKg: 2633,
    consumo: null,
    consumoUnidad: null,
    plazas: 6,
    parNm: 850,
    traccion: "Total",
    emisionesCo2: null,
    aprox: [],
    imagen: "/media/nio-el8-2024-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 3.9,
      "seguroTercerosAnual": 650,
      "seguroAmpliadoAnual": 1200,
      "mantenimientoAnual": 350,
      "costeMensualTotal": 142,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "consumo combinado aprox 21,2-22 kWh/100 km (driveduel.de); recarga domestica aprox 0,18 EUR/kWh; 1.500 km/mes",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/nio-el8-2024-precio-ficha-tecnica-oficial.webp",
        "alt": "Nio EL8, SUV insignia de 6 plazas, vista trasera",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "/media/nio-el8-2024-precio-ficha-tecnica-interior-oficial.webp",
        "alt": "Interior del Nio EL8, cabina de 6 plazas",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "/media/nio-el8-2024-precio-ficha-tecnica-hero.webp",
        "alt": "Nio EL8, vista tres cuartos delantera",
        "ancho": 1920,
        "alto": 1280
      }
    ],
  },
  {
    id: "nio-ec6-2024-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/nio-ec6-2024-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/nio-ec6-2024-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    marca: "Nio",
    modelo: "EC6",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: 46000, // no se vende en Europa; en China desde 358.000 yuanes (75 kWh, batería incluida)
    potenciaCv: 490,
    autonomiaKm: 630, // CLTC China (batería 100 kWh); sin dato WLTP publicado
    maleteroL: null,
    ceroCien: 4.4,
    velocidadMax: 200,
    bateriaKwh: 100,
    cargaRapidaKw: null,
    etiquetaDgt: "Cero",
    pros: [
      "El SUV coupé de Nio sobre la plataforma NT 2.0: 490 CV y Cx de 0,24",
      "630 km CLTC con la batería de 100 kWh (505 km con la de 75 kWh)",
      "Asiento 'Queen' de copiloto reclinable y techo panorámico de 1,77 m²",
      "LiDAR y Nvidia Orin de serie: el mismo arsenal tecnológico que sus hermanos",
      "En China cuesta desde 358.000 yuanes: el Nio NT 2.0 más asequible",
    ],
    contras: [
      "No se vende en Europa: solo China (Nio no ha anunciado su llegada)",
      "La autonomía es CLTC (ciclo chino, optimista): sin dato WLTP publicado",
      "Es el hermano 'de nicho' del EL6/ES6: menos práctico y más caro que él",
      "Sin red de servicio ni Power Swap fuera de China",
      "Importarlo por tu cuenta: homologación, garantía y recambios imposibles",
    ],
    largoMm: 4849,
    anchoMm: 1995,
    altoMm: 1697,
    pesoKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 5,
    parNm: 700,
    traccion: "Total",
    emisionesCo2: null,
    aprox: ["precioDesde"],
    imagen: "/media/nio-ec6-2024-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 3.7,
      "seguroTercerosAnual": 550,
      "seguroAmpliadoAnual": 1000,
      "mantenimientoAnual": 300,
      "costeMensualTotal": 126,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "modelo no vendido en Europa; coste hipotético con precios de energía españoles; 1.500 km/mes",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/nio-ec6-2024-precio-ficha-tecnica-oficial.webp",
        "alt": "Nio EC6 2024, SUV coupé eléctrico, vista lateral",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "/media/nio-ec6-2024-precio-ficha-tecnica-interior-oficial.webp",
        "alt": "Interior del Nio EC6 2024",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "/media/nio-ec6-2024-precio-ficha-tecnica-hero.webp",
        "alt": "Nio EC6 2024, vista tres cuartos delantera",
        "ancho": 1920,
        "alto": 1280
      }
    ],
  },
  {
    id: "nio-ec7-2024-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/nio-ec7-2024-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/nio-ec7-2024-precio-ficha-tecnica-interior-oficial.webp",
    videoId: "2RbYhsezeOw",
    videoCanal: null,
    marca: "Nio",
    modelo: "EC7",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: 59100, // no se vende en Europa; en China desde 488.000 yuanes (75 kWh, batería incluida)
    potenciaCv: 653,
    autonomiaKm: 635, // CLTC China (batería 100 kWh); sin dato WLTP publicado
    maleteroL: null,
    ceroCien: 3.8,
    velocidadMax: 200,
    bateriaKwh: 100,
    cargaRapidaKw: null,
    etiquetaDgt: "Cero",
    pros: [
      "El SUV de producción más aerodinámico del mundo: Cx de 0,23 con alerón activo",
      "653 CV, 850 Nm y 0-100 en 3,8 s: el Nio más rápido entre los SUV",
      "635 km CLTC con la batería de 100 kWh (490 km con la de 75 kWh)",
      "Techo de cristal electrocrómico, suspensión neumática y NOMI con IA",
      "En China parte de 488.000 yuanes con batería: flagship coupé a precio contenido",
    ],
    contras: [
      "No se vende en Europa: solo China (Nio estudia traerlo, sin fecha)",
      "La autonomía es CLTC (ciclo chino, optimista): sin dato WLTP publicado",
      "Techo coupé: menos altura trasera y menos maletero que el EL7",
      "Sin red de servicio ni Power Swap fuera de China",
      "Importarlo por tu cuenta: homologación, garantía y recambios imposibles",
    ],
    largoMm: 4968,
    anchoMm: 1974,
    altoMm: 1714,
    pesoKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 5,
    parNm: 850,
    traccion: "Total",
    emisionesCo2: null,
    aprox: ["precioDesde"],
    imagen: "/media/nio-ec7-2024-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 3.9,
      "seguroTercerosAnual": 600,
      "seguroAmpliadoAnual": 1100,
      "mantenimientoAnual": 350,
      "costeMensualTotal": 136,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "modelo no vendido en Europa; coste hipotético con precios de energía españoles; 1.500 km/mes",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/nio-ec7-2024-precio-ficha-tecnica-oficial.webp",
        "alt": "Nio EC7, SUV coupé insignia, vista lateral",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "/media/nio-ec7-2024-precio-ficha-tecnica-interior-oficial.webp",
        "alt": "Interior del Nio EC7, lujo minimalista",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "/media/nio-ec7-2024-precio-ficha-tecnica-hero.webp",
        "alt": "Nio EC7, vista tres cuartos delantera",
        "ancho": 1920,
        "alto": 1280
      }
    ],
  },
  {
    id: "nio-et5-75-kwh-2026-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/nio-et5-75-kwh-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/nio-et5-75-kwh-2026-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    marca: "Nio",
    modelo: "ET5 Standard Range",
    tipo: "Eléctrico",
    categoria: "Berlina",
    precioDesde: 59500,
    potenciaCv: 490,
    autonomiaKm: 456,
    maleteroL: 475,
    ceroCien: 4.0,
    velocidadMax: 200,
    bateriaKwh: 75,
    cargaRapidaKw: 140,
    etiquetaDgt: "Cero",
    pros: [
      "490 CV y 700 Nm: berlina deportiva por 59.500 € con batería incluida",
      "456 km WLTP con 75 kWh: la versión de acceso más equilibrada",
      "4,0 s de 0 a 100: prestaciones de deportivo alemán",
      "Batería intercambiable en 3 minutos en las Power Swap Stations",
      "140 kW de carga rápida y 11 kW en alterna"
    ],
    contras: [
      "456 km: menos que la versión de 100 kWh (590 km)",
      "17,9 kWh/100 km: consumo mejorable para su tamaño",
      "Red de servicio NIO aún pequeña en España",
      "El maletero de 475 litros no tiene portón práctico",
      "Depreciación incierta de una marca joven en Europa"
    ],
    largoMm: 4790,
    anchoMm: 1960,
    altoMm: 1499,
    pesoKg: null,
    consumo: 17.9,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: 700,
    traccion: "Total",
    emisionesCo2: 0,
    aprox: [],
    imagen: "/media/nio-et5-75-kwh-2026-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 3.22,
      "seguroTercerosAnual": 480,
      "seguroAmpliadoAnual": 920,
      "mantenimientoAnual": 280,
      "costeMensualTotal": 175,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "estimación con 15.000 km/año, consumo WLTP 17,9 kWh/100 km y recarga doméstica a 0,18 €/kWh; seguro y mantenimiento orientativos",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/nio-et5-75-kwh-2026-precio-ficha-tecnica-oficial.webp",
        "alt": "NIO ET5 Standard Range 75 kWh, vista lateral",
        "ancho": 1200,
        "alto": 676
      },
      {
        "src": "/media/nio-et5-75-kwh-2026-precio-ficha-tecnica-interior-oficial.webp",
        "alt": "Interior del NIO ET5 Standard Range",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/nio-et5-75-kwh-2026-precio-ficha-tecnica-hero.webp",
        "alt": "NIO ET5 Standard Range 75 kWh, tres cuartos delantero",
        "ancho": 1200,
        "alto": 676
      }
    ],
    fuenteNombre: "vision-mobility.de",
    fuenteUrl: null,
  },
  {
    id: "nio-et5-touring-75-kwh-2026-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/nio-et5-touring-75-kwh-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/nio-et5-touring-75-kwh-2026-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    marca: "Nio",
    modelo: "ET5 Touring Standard Range",
    tipo: "Eléctrico",
    categoria: "Familiar",
    precioDesde: 59500,
    potenciaCv: 490,
    autonomiaKm: 435,
    maleteroL: 450,
    ceroCien: 4.0,
    velocidadMax: 200,
    bateriaKwh: 75,
    cargaRapidaKw: 140,
    etiquetaDgt: "Cero",
    pros: [
      "El familiar eléctrico de 490 CV por 59.500 €",
      "435 km WLTP: el touring pierde poco frente a la berlina",
      "Maletero familiar con portón práctico",
      "Batería intercambiable y 140 kW de carga rápida",
      "Tracción total y 700 Nm: familiar con alma deportiva"
    ],
    contras: [
      "435 km: menos autonomía que la berlina equivalente",
      "18,4 kWh/100 km: el familiar gasta algo más",
      "Red NIO en España aún en expansión",
      "Precio alto frente a familiares térmicos",
      "Sin bola de remolque de serie en todas las versiones"
    ],
    largoMm: 4790,
    anchoMm: 1960,
    altoMm: 1499,
    pesoKg: null,
    consumo: 18.4,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: 700,
    traccion: "Total",
    emisionesCo2: 0,
    aprox: [],
    imagen: "/media/nio-et5-touring-75-kwh-2026-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 3.31,
      "seguroTercerosAnual": 480,
      "seguroAmpliadoAnual": 920,
      "mantenimientoAnual": 280,
      "costeMensualTotal": 176,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "estimación con 15.000 km/año, consumo WLTP 18,4 kWh/100 km y recarga doméstica a 0,18 €/kWh; seguro y mantenimiento orientativos",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/nio-et5-touring-75-kwh-2026-precio-ficha-tecnica-oficial.webp",
        "alt": "NIO ET5 Touring Standard Range, vista lateral",
        "ancho": 1200,
        "alto": 676
      },
      {
        "src": "/media/nio-et5-touring-75-kwh-2026-precio-ficha-tecnica-interior-oficial.webp",
        "alt": "Interior del NIO ET5 Touring",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/nio-et5-touring-75-kwh-2026-precio-ficha-tecnica-hero.webp",
        "alt": "NIO ET5 Touring Standard Range, tres cuartos delantero",
        "ancho": 1200,
        "alto": 676
      }
    ],
    fuenteNombre: "vision-mobility.de",
    fuenteUrl: null,
  },
  {
    id: "nio-et7-75-kwh-2025-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/nio-et7-75-kwh-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/nio-et7-75-kwh-2025-precio-ficha-tecnica-interior-oficial.webp",
    videoId: "d3i8QcUydOA",
    videoCanal: "Auto Sensación",
    marca: "Nio",
    modelo: "ET7 Standard Range",
    tipo: "Eléctrico",
    categoria: "Berlina",
    precioDesde: 81900,
    potenciaCv: 653,
    autonomiaKm: 445,
    maleteroL: null,
    ceroCien: 3.8,
    velocidadMax: 200,
    bateriaKwh: 75,
    cargaRapidaKw: 140,
    etiquetaDgt: "Cero",
    pros: [
      "653 CV y 850 Nm: la berlina insignia por 81.900 €",
      "445 km WLTP con la batería de 75 kWh",
      "3,8 s de 0 a 100: prestaciones de superdeportivo",
      "Interior de lujo con 5,10 m de longitud: rival del Clase S eléctrico",
      "Batería intercambiable en las Swap Stations"
    ],
    contras: [
      "445 km: la versión de 100 kWh llega a 580 km",
      "81.900 €: precio de premium alemán consolidado",
      "5,10 m: difícil de aparcar en ciudad",
      "Red de servicio limitada en Europa",
      "Sin maletero delantero aprovechable como en rivales"
    ],
    largoMm: 5101,
    anchoMm: 1987,
    altoMm: 1509,
    pesoKg: null,
    consumo: 17.7,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: 850,
    traccion: "Total",
    emisionesCo2: 0,
    aprox: [],
    imagen: "/media/nio-et7-75-kwh-2025-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 3.19,
      "seguroTercerosAnual": 550,
      "seguroAmpliadoAnual": 1050,
      "mantenimientoAnual": 300,
      "costeMensualTotal": 200,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "estimación con 15.000 km/año, consumo WLTP 17,7 kWh/100 km y recarga doméstica a 0,18 €/kWh; seguro y mantenimiento orientativos",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/nio-et7-75-kwh-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "NIO ET7 Standard Range 75 kWh, vista lateral",
        "ancho": 1200,
        "alto": 676
      },
      {
        "src": "/media/nio-et7-75-kwh-2025-precio-ficha-tecnica-interior-oficial.webp",
        "alt": "Interior del NIO ET7 Standard Range",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/nio-et7-75-kwh-2025-precio-ficha-tecnica-hero.webp",
        "alt": "NIO ET7 Standard Range 75 kWh, tres cuartos delantero",
        "ancho": 1200,
        "alto": 676
      }
    ],
    fuenteNombre: "vision-mobility.de",
    fuenteUrl: "https://vision-mobility.de/elektroauto/oberklasse/nio-et7-standard-range-voll-elektrisch-81900-euro-reichweite-415-km-653-ps-bestellbar-232197.html?page=8",
  },
  {
    id: "nio-el6-75-kwh-2025-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/nio-el6-75-kwh-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/nio-el6-75-kwh-2025-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    marca: "Nio",
    modelo: "EL6 Standard Range",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: 65500,
    potenciaCv: 490,
    autonomiaKm: 406,
    maleteroL: 579,
    ceroCien: 4.5,
    velocidadMax: 200,
    bateriaKwh: 75,
    cargaRapidaKw: 140,
    etiquetaDgt: "Cero",
    pros: [
      "490 CV por 65.500 €: el SUV premium eléctrico más barato de NIO",
      "406 km WLTP: suficiente para el uso familiar",
      "Maletero de 579 litros (1.430 abatido)",
      "140 kW de carga rápida: 10-80% en 30 minutos",
      "Batería intercambiable en 3 minutos"
    ],
    contras: [
      "406 km: corto frente a la versión de 100 kWh (529 km)",
      "20,1 kWh/100 km: consumo alto por peso y tamaño",
      "65.500 €: sigue siendo precio premium",
      "Red de talleres NIO pequeña en España",
      "Sin 7 plazas como algunos rivales"
    ],
    largoMm: 4854,
    anchoMm: 1995,
    altoMm: 1703,
    pesoKg: null,
    consumo: 20.1,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: 700,
    traccion: "Total",
    emisionesCo2: 0,
    aprox: [],
    imagen: "/media/nio-el6-75-kwh-2025-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 3.62,
      "seguroTercerosAnual": 520,
      "seguroAmpliadoAnual": 980,
      "mantenimientoAnual": 300,
      "costeMensualTotal": 196,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "estimación con 15.000 km/año, consumo WLTP 20,1 kWh/100 km y recarga doméstica a 0,18 €/kWh; seguro y mantenimiento orientativos",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/nio-el6-75-kwh-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "NIO EL6 Standard Range 75 kWh, vista lateral",
        "ancho": 1200,
        "alto": 676
      },
      {
        "src": "/media/nio-el6-75-kwh-2025-precio-ficha-tecnica-interior-oficial.webp",
        "alt": "Interior del NIO EL6 Standard Range",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/nio-el6-75-kwh-2025-precio-ficha-tecnica-hero.webp",
        "alt": "NIO EL6 Standard Range 75 kWh, tres cuartos delantero",
        "ancho": 1200,
        "alto": 676
      }
    ],
    fuenteNombre: "NIO Deutschland Preisliste",
    fuenteUrl: "https://www-cdn.eu.nio.com/officialsite/files/2023-07-06/NIO_EL6_DE_Preisliste_202306.pdf",
  },
  {
    id: "nio-el7-75-kwh-2025-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/nio-el7-75-kwh-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/nio-el7-75-kwh-2025-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    marca: "Nio",
    modelo: "EL7 Standard Range",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: 85900,
    potenciaCv: 653,
    autonomiaKm: 391,
    maleteroL: 658,
    ceroCien: 3.9,
    velocidadMax: 200,
    bateriaKwh: 75,
    cargaRapidaKw: 140,
    etiquetaDgt: "Cero",
    pros: [
      "653 CV y 850 Nm: el SUV más potente de NIO por 85.900 €",
      "Maletero de 658 litros (1.545 abatido): el más grande de la gama",
      "3,9 s de 0 a 100 pese a sus 2,4 toneladas",
      "Interior de lujo con masaje y 23 altavoces",
      "140 kW de carga rápida y batería intercambiable"
    ],
    contras: [
      "391 km WLTP: la autonomía más corta de la gama NIO",
      "22,6 kWh/100 km aprox.: el que más gasta",
      "85.900 €: precio de X5/Q7 sin su red de servicio",
      "2,4 toneladas: se notan en consumo y agilidad",
      "Tamaño XXL: 4,91 m complican el día a día urbano"
    ],
    largoMm: 4912,
    anchoMm: 1987,
    altoMm: 1720,
    pesoKg: null,
    consumo: 22.6,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: 850,
    traccion: "Total",
    emisionesCo2: 0,
    aprox: ["consumo"],
    imagen: "/media/nio-el7-75-kwh-2025-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 4.07,
      "seguroTercerosAnual": 560,
      "seguroAmpliadoAnual": 1060,
      "mantenimientoAnual": 320,
      "costeMensualTotal": 210,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "estimación con 15.000 km/año, consumo aprox. 22,6 kWh/100 km (rango oficial 21,6-23,5) y recarga doméstica a 0,18 €/kWh; seguro y mantenimiento orientativos",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/nio-el7-75-kwh-2025-precio-ficha-tecnica-oficial.webp",
        "alt": "NIO EL7 Standard Range 75 kWh, vista lateral",
        "ancho": 1200,
        "alto": 676
      },
      {
        "src": "/media/nio-el7-75-kwh-2025-precio-ficha-tecnica-interior-oficial.webp",
        "alt": "Interior del NIO EL7 Standard Range",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/nio-el7-75-kwh-2025-precio-ficha-tecnica-hero.webp",
        "alt": "NIO EL7 Standard Range 75 kWh, tres cuartos delantero",
        "ancho": 1200,
        "alto": 676
      }
    ],
    fuenteNombre: "NIO Deutschland Preisliste",
    fuenteUrl: "https://www-cdn.eu.nio.com/officialsite/files/2023-06-20/Price%20list%20pdf-0620/Germany/NIO_EL7_DE_Preisliste_202306.pdf",
  },
  {
    id: "nio-et9-2026-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/nio-et9-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/nio-et9-2026-precio-ficha-tecnica-interior-oficial.webp",
    videoId: "0iDJiLBlrPU",
    videoCanal: "Autogefühl",
    marca: "Nio",
    modelo: "ET9",
    tipo: "Eléctrico",
    categoria: "Berlina",
    precioDesde: 95400,
    potenciaCv: 697,
    autonomiaKm: null,
    maleteroL: 540,
    ceroCien: 4.3,
    velocidadMax: null,
    bateriaKwh: 102,
    cargaRapidaKw: 600,
    etiquetaDgt: "Cero",
    pros: [
      "697 CV y 700 Nm: la berlina insignia absoluta de NIO",
      "Arquitectura de 925 V y hasta 600 kW de carga: 255 km en 5 minutos",
      "650 km CLTC con batería de 102 kWh intercambiable",
      "Solo 4 plazas: lujo de jet privado con masaje de 16 puntos",
      "Dirección by-wire y eje trasero direccional"
    ],
    contras: [
      "No se vende en Europa: solo China (desde 768.000 yuanes)",
      "Sin dato WLTP publicado: autonomía real en Europa desconocida",
      "5,33 m y 2,7 toneladas: solo para chófer",
      "Precio de Maybach sin red de servicio fuera de China",
      "Tecnología tan nueva que su fiabilidad está por demostrar"
    ],
    largoMm: 5325,
    anchoMm: 2017,
    altoMm: 1621,
    pesoKg: null,
    consumo: null,
    consumoUnidad: "kWh/100 km",
    plazas: 4,
    parNm: 700,
    traccion: "Total",
    emisionesCo2: 0,
    aprox: ["maleteroL", "cargaRapidaKw", "autonomiaKm", "precioDesde"],
    imagen: "/media/nio-et9-2026-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 4.5,
      "seguroTercerosAnual": 700,
      "seguroAmpliadoAnual": 1300,
      "mantenimientoAnual": 400,
      "costeMensualTotal": 268,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "estimación orientativa con 15.000 km/año y recarga a 0,18 €/kWh; sin precio europeo oficial, el coste real puede variar mucho",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/nio-et9-2026-precio-ficha-tecnica-oficial.webp",
        "alt": "NIO ET9, berlina insignia eléctrica, vista lateral",
        "ancho": 1200,
        "alto": 676
      },
      {
        "src": "/media/nio-et9-2026-precio-ficha-tecnica-interior-oficial.webp",
        "alt": "Interior de lujo del NIO ET9 con 4 plazas",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/nio-et9-2026-precio-ficha-tecnica-hero.webp",
        "alt": "NIO ET9, tres cuartos delantero",
        "ancho": 1200,
        "alto": 676
      }
    ],
    fuenteNombre: "cnevpost.com",
    fuenteUrl: null,
  },
];
