// Lote M1 — 25 motos eléctricas urbanas (scooters, ciclomotores y urbanas).
// Modelos vendidos en España 2024-2026. Datos verificados el 2026-10-08
// en webs oficiales, motofichas.com, motorbikemag.es, motos.net y prensa del motor.
// Cero cifras inventadas: lo no verificado va como null.
import type { MotoComparador } from "./comparador-motos-data.ts";

export const MOTOS_NUEVOS_M1: MotoComparador[] = [
  {
    id: "seat-mo-50-2025-ficha-tecnica-precio",
    marca: "SEAT",
    modelo: "MÓ 50",
    version: "MÓ 50 2025",
    categoria: "Scooter",
    precioDesde: 5650,
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: 172,
    autonomiaCiclo: "Declarada",
    bateriaKwh: null,
    velocidadMax: 45,
    ceroCincuenta: null,
    pesoKg: null,
    plazas: 2,
    carnet: "AM",
    carga: "6-8 h en enchufe doméstico",
    etiquetaDgt: "Cero",
    aprox: [],
    pros: [
      "Hasta 172 km de autonomía declarada: de las cifras más altas entre los ciclomotores eléctricos", 
      "Batería extraíble con sistema trolley: se carga en cualquier enchufe doméstico", 
      "Hueco bajo el asiento con capacidad para dos cascos", 
      "Tres modos de conducción, marcha atrás y función eBOOST para estirar la autonomía", 
      "Etiqueta Cero DGT: acceso libre a las ZBE y aparcamiento bonificado en muchas ciudades"
    ],
    contras: [
      "Precio de 5.650 €: está entre los ciclomotores eléctricos más caros del mercado", 
      "Velocidad limitada a 45 km/h: su hábitat es exclusivamente la ciudad", 
      "Carga completa lenta, entre 6 y 8 horas", 
      "La marca no publica la potencia del motor en su web española", 
      "Red de venta y postventa más pequeña que la de Silence o NIU"
    ],
    curiosidades: [
      "Es la hermana pequeña del SEAT MÓ 125, desarrollado sobre la base tecnológica del Silence S01", 
      "SEAT MÓ nació como la marca de movilidad urbana del grupo Volkswagen en España", 
      "Se puede conducir desde los 15 años con la licencia AM"
    ],
    imagen: "/media/motos/seat-mo-50-2025-ficha-tecnica-precio-oficial.webp",
    galeria: [
      {
        src: "/media/motos/seat-mo-50-2025-ficha-tecnica-precio-oficial-2.webp",
        alt: "SEAT MÓ 50, detalle del frontal y faro LED",
        ancho: 1200,
        alto: 831,
      },
      {
        src: "/media/motos/seat-mo-50-2025-ficha-tecnica-precio-oficial-3.webp",
        alt: "SEAT MÓ 50 circulando por calle urbana",
        ancho: 1200,
        alto: 601,
      }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "SEAT España",
    fuenteUrl: "https://www.seat.es",
    analisisSlug: "seat-mo-50-2025-ficha-tecnica-precio",
    planMantenimiento: {
      intervalo: "12 meses o 5.000 km",
      revisiones: [
        {
          nombre: "Revisión anual",
          queSeCambia: "Inspección de frenos, neumáticos, aprietes, electrónica y estado de salud de la batería",
          costeAproxEur: null,
        },
        {
          nombre: "Frenos y neumáticos",
          queSeCambia: "Pastillas y neumáticos según desgaste (el uso urbano los gasta antes)",
          costeAproxEur: null,
        }
      ],
      costeAnualAproxEur: null,
      fuente: "Red oficial Seat España (plan de revisiones de la gama eléctrica)",
    },
  },
  {
    id: "segway-e125s-2025-ficha-tecnica-precio",
    marca: "Segway",
    modelo: "E125S",
    version: "E125S 2025",
    categoria: "Scooter",
    precioDesde: 2999,
    potenciaKw: 1.0,
    potenciaCv: null,
    autonomiaKm: 140,
    autonomiaCiclo: "Declarada",
    bateriaKwh: 2.88,
    velocidadMax: 45,
    ceroCincuenta: null,
    pesoKg: 113,
    plazas: 2,
    carnet: "AM",
    carga: "4 h (80% en 2,4 h)",
    etiquetaDgt: "Cero",
    aprox: [],
    pros: [
      "Dos baterías extraíbles de 2.880 Wh en total: hasta 140 km de autonomía declarada", 
      "Motor de 1.000 W nominales con picos de 3.000 W: sale con alegría de los semáforos", 
      "ABS en la frenada y chasis de 113 kg muy estable para un ciclomotor", 
      "27 litros bajo el asiento y conectividad con la app de Segway", 
      "Precio de 2.999 € muy competitivo para su nivel de equipamiento"
    ],
    contras: [
      "La autonomía WMTC realista es de 81 km, lejos de los 140 km máximos declarados", 
      "Con las dos baterías puestas el hueco bajo el asiento se reduce", 
      "113 kg en orden de marcha: pesado para moverlo en parado", 
      "La app y algunas funciones conectadas requieren suscripción o móvil compatible", 
      "Estética sobria: no enamora como una Vespa o un Silence"
    ],
    curiosidades: [
      "El motor QS, desarrollado por Segway, entrega un par máximo de 120 Nm", 
      "Las baterías tienen certificación IPX7: aguantan inmersión temporal", 
      "El cuadro muestra hasta la presión de los neumáticos"
    ],
    imagen: "/media/motos/segway-e125s-2025-ficha-tecnica-precio-oficial.webp",
    galeria: [
      {
        src: "/media/motos/segway-e125s-2025-ficha-tecnica-precio-oficial-2.webp",
        alt: "Segway E125S, detalle del cuadro digital y manillar",
        ancho: 1200,
        alto: 771,
      },
      {
        src: "/media/motos/segway-e125s-2025-ficha-tecnica-precio-oficial-3.webp",
        alt: "Segway E125S en ciudad, vista lateral",
        ancho: 1080,
        alto: 1080,
      }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "Segway España",
    fuenteUrl: "https://www.segway.com",
    analisisSlug: "segway-e125s-2025-ficha-tecnica-precio",
    planMantenimiento: {
      intervalo: "12 meses o 5.000 km",
      revisiones: [
        {
          nombre: "Revisión anual",
          queSeCambia: "Inspección de frenos, neumáticos, aprietes, electrónica y estado de salud de la batería",
          costeAproxEur: null,
        },
        {
          nombre: "Frenos y neumáticos",
          queSeCambia: "Pastillas y neumáticos según desgaste (el uso urbano los gasta antes)",
          costeAproxEur: null,
        }
      ],
      costeAnualAproxEur: null,
      fuente: "Red oficial Segway España (plan de revisiones de la gama eléctrica)",
    },
  },
  {
    id: "segway-e110s-2025-ficha-tecnica-precio",
    marca: "Segway",
    modelo: "E110S",
    version: "E110S 2025",
    categoria: "Scooter",
    precioDesde: 2399,
    potenciaKw: 1.5,
    potenciaCv: null,
    autonomiaKm: 75,
    autonomiaCiclo: "Declarada",
    bateriaKwh: 1.44,
    velocidadMax: 45,
    ceroCincuenta: null,
    pesoKg: 91,
    plazas: 2,
    carnet: "AM",
    carga: "4 h (80% en 3 h)",
    etiquetaDgt: "Cero",
    aprox: [],
    pros: [
      "Precio de 2.399 €: de los ciclomotores eléctricos conectados más baratos", 
      "Suelo plano y batería bajo el piso: hueco para dos cascos jet bajo el asiento", 
      "Antirrobo AHRS con GPS y SIM 4G integrada", 
      "Airlock: se bloquea y desbloquea solo al acercarte o alejarte con el móvil", 
      "91 kg: ligero y fácil de mover en parado y en el garaje"
    ],
    contras: [
      "Autonomía WMTC de solo 40 km a 45 km/h: justa para usos intensivos", 
      "Una sola batería de 1.440 Wh, sin opción de segunda unidad", 
      "Motor de 1,5 kW nominales: suficiente en llano, justo en cuestas con pasajero", 
      "Sin ABS (frenada combinada con discos hidráulicos)", 
      "Algunas funciones de la app dependen de la conectividad 4G"
    ],
    curiosidades: [
      "El sistema RideyGo! impide arrancar si el caballete está puesto o no estás bien sentado", 
      "El faro Matrix LED es el mismo concepto que monta su hermano mayor, el E125S", 
      "Pesa 22 kg menos que el E125S con las dos baterías"
    ],
    imagen: "/media/motos/segway-e110s-2025-ficha-tecnica-precio-oficial.webp",
    galeria: [
      {
        src: "/media/motos/segway-e110s-2025-ficha-tecnica-precio-oficial-2.webp",
        alt: "Segway E110S, detalle del faro Matrix LED",
        ancho: 800,
        alto: 800,
      },
      {
        src: "/media/motos/segway-e110s-2025-ficha-tecnica-precio-oficial-3.webp",
        alt: "Segway E110S aparcado en calle urbana",
        ancho: 1024,
        alto: 576,
      }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "Segway España",
    fuenteUrl: "https://www.segway.com",
    analisisSlug: "segway-e110s-2025-ficha-tecnica-precio",
    planMantenimiento: {
      intervalo: "12 meses o 5.000 km",
      revisiones: [
        {
          nombre: "Revisión anual",
          queSeCambia: "Inspección de frenos, neumáticos, aprietes, electrónica y estado de salud de la batería",
          costeAproxEur: null,
        },
        {
          nombre: "Frenos y neumáticos",
          queSeCambia: "Pastillas y neumáticos según desgaste (el uso urbano los gasta antes)",
          costeAproxEur: null,
        }
      ],
      costeAnualAproxEur: null,
      fuente: "Red oficial Segway España (plan de revisiones de la gama eléctrica)",
    },
  },
  {
    id: "segway-e150s-2025-ficha-tecnica-precio",
    marca: "Segway",
    modelo: "E150S",
    version: "E150S 2025",
    categoria: "Scooter",
    precioDesde: null,
    potenciaKw: 2.2,
    potenciaCv: null,
    autonomiaKm: 171,
    autonomiaCiclo: "Declarada",
    bateriaKwh: 6.0,
    velocidadMax: 45,
    ceroCincuenta: null,
    pesoKg: null,
    plazas: 2,
    carnet: "AM",
    carga: "~2,5 h por batería",
    etiquetaDgt: "Cero",
    aprox: [],
    pros: [
      "Hasta 3 baterías de 2.000 Wh: 171 km de autonomía declarada, récord en ciclomotores", 
      "Motor de 2,2 kW nominales (3,6 kW pico) con control de tracción TCS", 
      "ABS de doble canal, algo inédito en un ciclomotor de 45 km/h", 
      "34 litros bajo el asiento y 780 mm de altura: práctico y accesible", 
      "Caja negra con SOS, GPS y actualizaciones OTA: el más tecnológico del segmento"
    ],
    contras: [
      "Precio aún no publicado en España: su posicionamiento es una incógnita", 
      "Para pasar de 171 km hay que comprar 2 baterías extra (sobrecoste importante)", 
      "Con 3 baterías el hueco bajo el asiento se reduce de 34 a 14 litros", 
      "Sigue limitado a 45 km/h: tanta tecnología para solo ciudad", 
      "Peso no publicado; con 3 baterías no será ligero"
    ],
    curiosidades: [
      "Acelera de 0 a 50 km/h en 5,2 segundos según Segway, cifra de scooter 125", 
      "La caja negra registra los trayectos y puede enviar un SOS automático", 
      "Cada batería pesa 13 kg y es extraíble"
    ],
    imagen: "/media/motos/segway-e150s-2025-ficha-tecnica-precio-oficial.webp",
    galeria: [
      {
        src: "/media/motos/segway-e150s-2025-ficha-tecnica-precio-oficial-2.webp",
        alt: "Segway E150S, detalle del frontal con faro LED",
        ancho: 951,
        alto: 900,
      },
      {
        src: "/media/motos/segway-e150s-2025-ficha-tecnica-precio-oficial-3.webp",
        alt: "Segway E150S en entorno urbano",
        ancho: 1200,
        alto: 1200,
      }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "Segway España",
    fuenteUrl: "https://www.segway.com",
    analisisSlug: "segway-e150s-2025-ficha-tecnica-precio",
    planMantenimiento: {
      intervalo: "12 meses o 5.000 km",
      revisiones: [
        {
          nombre: "Revisión anual",
          queSeCambia: "Inspección de frenos, neumáticos, aprietes, electrónica y estado de salud de la batería",
          costeAproxEur: null,
        },
        {
          nombre: "Frenos y neumáticos",
          queSeCambia: "Pastillas y neumáticos según desgaste (el uso urbano los gasta antes)",
          costeAproxEur: null,
        }
      ],
      costeAnualAproxEur: null,
      fuente: "Red oficial Segway España (plan de revisiones de la gama eléctrica)",
    },
  },
  {
    id: "velca-calima-s-2025-ficha-tecnica-precio",
    marca: "Velca",
    modelo: "Calima S",
    version: "Calima S 2025",
    categoria: "Scooter",
    precioDesde: 3690,
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: 130,
    autonomiaCiclo: "Declarada",
    bateriaKwh: 4.32,
    velocidadMax: 95,
    ceroCincuenta: null,
    pesoKg: null,
    plazas: 2,
    carnet: "A1",
    carga: "Enchufe doméstico (batería extraíble)",
    etiquetaDgt: "Cero",
    aprox: [],
    pros: [
      "Único de su segmento con ABS en ambas ruedas", 
      "95 km/h de velocidad máxima: vale para ciudad y circunvalación", 
      "130 km de autonomía con batería CATL de 4,32 kWh extraíble", 
      "Precio de lanzamiento de 3.690 €: rompe el mercado", 
      "Arranque keyless, control de crucero y pantalla a color de serie"
    ],
    contras: [
      "La batería va bajo el asiento: no cabe un casco en el hueco", 
      "Marca joven (2020): red de talleres en crecimiento, con 350 asociados", 
      "El precio subirá a 4.490 € tras la promoción de lanzamiento", 
      "Sin control de tracción ni conectividad avanzada de serie", 
      "El diseño divide opiniones: o te encanta o no"
    ],
    curiosidades: [
      "Velca es una marca española fundada en 2020 con la mayor comunidad europea de moto eléctrica", 
      "Su modelo One fue elegido mejor moto eléctrica del año en España en 2023 y 2024", 
      "El basculante trasero es de aluminio, raro en este rango de precios"
    ],
    imagen: "/media/motos/velca-calima-s-2025-ficha-tecnica-precio-oficial.webp",
    galeria: [
      {
        src: "/media/motos/velca-calima-s-2025-ficha-tecnica-precio-oficial-2.webp",
        alt: "Velca Calima S, detalle del frontal y pantalla",
        ancho: 1200,
        alto: 900,
      },
      {
        src: "/media/motos/velca-calima-s-2025-ficha-tecnica-precio-oficial-3.webp",
        alt: "Velca Calima S circulando por ciudad",
        ancho: 1200,
        alto: 800,
      }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "Velca",
    fuenteUrl: "https://www.velcamotor.com/velca-calima-s",
    analisisSlug: "velca-calima-s-2025-ficha-tecnica-precio",
    planMantenimiento: {
      intervalo: "12 meses o 5.000 km",
      revisiones: [
        {
          nombre: "Revisión anual",
          queSeCambia: "Inspección de frenos, neumáticos, aprietes, electrónica y estado de salud de la batería",
          costeAproxEur: null,
        },
        {
          nombre: "Frenos y neumáticos",
          queSeCambia: "Pastillas y neumáticos según desgaste (el uso urbano los gasta antes)",
          costeAproxEur: null,
        }
      ],
      costeAnualAproxEur: null,
      fuente: "Red oficial Velca España (plan de revisiones de la gama eléctrica)",
    },
  },
  {
    id: "velca-tramontana-s-2025-ficha-tecnica-precio",
    marca: "Velca",
    modelo: "Tramontana S",
    version: "Tramontana S 2025",
    categoria: "Scooter",
    precioDesde: 3790, // tarifa oficial España (verificado 20/10/2026)
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: 90,
    autonomiaCiclo: "Declarada",
    bateriaKwh: null,
    velocidadMax: 90,
    ceroCincuenta: null,
    pesoKg: null,
    plazas: 2,
    carnet: "A1",
    carga: "Enchufe doméstico (baterías extraíbles)",
    etiquetaDgt: "Cero",
    aprox: [],
    pros: [
      "90 km/h de velocidad máxima con carnet A1: sirve para ciudad y rondas", 
      "Diseño clásico de scooter italiano con encanto retro", 
      "Baterías extraíbles: carga en casa sin depender del garaje", 
      "Asiento para dos plazas y guantera trasera", 
      "Marca española con red de postventa en crecimiento"
    ],
    contras: [
      "Precio de 3.790 €: entre los scooters eléctricos 125 más caros", 
      "90 km de autonomía declarada: justa si haces mucha ronda diaria", 
      "Ficha técnica poco detallada en la web de la marca", 
      "Sin ABS confirmado: frenada convencional", 
      "Menos autonomía y velocidad que su hermana Calima S"
    ],
    curiosidades: [
      "Comparte catálogo con la Tramontana básica, un ciclomotor de 45 km/h", 
      "El nombre homenajea al viento del norte del Mediterráneo, como la Calima al del sur", 
      "Velca opera ya en España, Portugal, Francia y Suiza"
    ],
    imagen: "/media/motos/velca-tramontana-s-2025-ficha-tecnica-precio-oficial.webp",
    galeria: [
      {
        src: "/media/motos/velca-tramontana-s-2025-ficha-tecnica-precio-oficial-2.webp",
        alt: "Velca Tramontana S, detalle del escudo frontal",
        ancho: 1024,
        alto: 683,
      },
      {
        src: "/media/motos/velca-tramontana-s-2025-ficha-tecnica-precio-oficial-3.webp",
        alt: "Velca Tramontana S en calle urbana",
        ancho: 1024,
        alto: 768,
      }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "Velca",
    fuenteUrl: "https://www.velcamotor.com",
    analisisSlug: "velca-tramontana-s-2025-ficha-tecnica-precio",
    planMantenimiento: {
      intervalo: "12 meses o 5.000 km",
      revisiones: [
        {
          nombre: "Revisión anual",
          queSeCambia: "Inspección de frenos, neumáticos, aprietes, electrónica y estado de salud de la batería",
          costeAproxEur: null,
        },
        {
          nombre: "Frenos y neumáticos",
          queSeCambia: "Pastillas y neumáticos según desgaste (el uso urbano los gasta antes)",
          costeAproxEur: null,
        }
      ],
      costeAnualAproxEur: null,
      fuente: "Red oficial Velca España (plan de revisiones de la gama eléctrica)",
    },
  },
  {
    id: "niu-mqi-plus-sport-2025-ficha-tecnica-precio",
    marca: "NIU",
    modelo: "MQi+ Sport",
    version: "MQi+ Sport 2025",
    categoria: "Scooter",
    precioDesde: 2299,
    potenciaKw: 1.2,
    potenciaCv: null,
    autonomiaKm: 65,
    autonomiaCiclo: "Declarada",
    bateriaKwh: 1.5,
    velocidadMax: 45,
    ceroCincuenta: null,
    pesoKg: null,
    plazas: 2,
    carnet: "AM",
    carga: "Enchufe doméstico",
    etiquetaDgt: "Cero",
    aprox: [],
    pros: [
      "Motor Bosch de 1.200 W con controlador FOC: aceleración suave e inmediata", 
      "Precio de 2.299 €: de los NIU más asequibles", 
      "Batería extendida opcional: de 45 a 65 km de autonomía", 
      "Frenada regenerativa EBS que recupera hasta el 6% de la energía", 
      "App de NIU con más de 200 puntos de datos del scooter por minuto"
    ],
    contras: [
      "45 km de autonomía con la batería estándar: justa para usos intensivos", 
      "Suspensiones duras: los baches se notan", 
      "En cuestas pronunciadas el pequeño motor sufre", 
      "Diseño compacto: a duo se va justo de espacio", 
      "La batería extendida es un sobrecoste a sumar"
    ],
    curiosidades: [
      "El controlador FOC analiza el scooter en tiempo real mientras circulas", 
      "NIU es el líder europeo de scooters eléctricos, con cerca de 10.000 unidades vendidas en 2026", 
      "El MQi+ Sport tiene control de crucero, raro en un ciclomotor"
    ],
    imagen: "/media/motos/niu-mqi-plus-sport-2025-ficha-tecnica-precio-oficial.webp",
    galeria: [
      {
        src: "/media/motos/niu-mqi-plus-sport-2025-ficha-tecnica-precio-oficial-2.webp",
        alt: "NIU MQi+ Sport, detalle del cuadro LCD",
        ancho: 1077,
        alto: 800,
      },
      {
        src: "/media/motos/niu-mqi-plus-sport-2025-ficha-tecnica-precio-oficial-3.webp",
        alt: "NIU MQi+ Sport en ciudad",
        ancho: 1029,
        alto: 708,
      }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "NIU",
    fuenteUrl: "https://www.niu.com",
    analisisSlug: "niu-mqi-plus-sport-2025-ficha-tecnica-precio",
    planMantenimiento: {
      intervalo: "12 meses o 5.000 km",
      revisiones: [
        {
          nombre: "Revisión anual",
          queSeCambia: "Inspección de frenos, neumáticos, aprietes, electrónica y estado de salud de la batería",
          costeAproxEur: null,
        },
        {
          nombre: "Frenos y neumáticos",
          queSeCambia: "Pastillas y neumáticos según desgaste (el uso urbano los gasta antes)",
          costeAproxEur: null,
        }
      ],
      costeAnualAproxEur: null,
      fuente: "Red oficial NIU España (plan de revisiones de la gama eléctrica)",
    },
  },
  {
    id: "niu-fqix-150-2026-ficha-tecnica-precio",
    marca: "NIU",
    modelo: "FQiX 150",
    version: "FQiX 150 2026",
    categoria: "Scooter",
    precioDesde: 2499,
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: null,
    plazas: 2,
    carnet: "AM",
    carga: "Enchufe doméstico (batería extraíble)",
    etiquetaDgt: "Cero",
    aprox: [],
    pros: [
      "Novedad 2026 dentro de la renovada gama NIU: última tecnología de la marca", 
      "Precio de 2.499 €: acceso asequible a la nueva generación", 
      "Hereda la conectividad total de la gama: NIU Link Crown y navegación integrada", 
      "Baterías de nueva generación a 72V", 
      "Red de 25 puntos de venta en España y Portugal"
    ],
    contras: [
      "Ficha técnica completa aún no publicada por NIU España", 
      "Al ser novedad, habrá que esperar a las primeras pruebas reales", 
      "La gama 2026 sube el listón tecnológico: conviene comparar con el NQiX 150", 
      "Disponibilidad inicial limitada a concesionarios de la red", 
      "Precio sin ayudas: conviene gestionar el Plan MOVES"
    ],
    curiosidades: [
      "La gama 2026 de NIU introduce el mando NIU Link Crown, que se maneja con el pulgar", 
      "NIU matriculó cerca de 300 unidades a particulares en España y Portugal hasta septiembre de 2026", 
      "La marca ya es líder del mercado europeo de scooters eléctricos"
    ],
    imagen: "/media/motos/niu-fqix-150-2026-ficha-tecnica-precio-oficial.webp",
    galeria: [
      {
        src: "/media/motos/niu-fqix-150-2026-ficha-tecnica-precio-oficial-2.webp",
        alt: "NIU FQiX 150, detalle del frontal",
        ancho: 1024,
        alto: 944,
      },
      {
        src: "/media/motos/niu-fqix-150-2026-ficha-tecnica-precio-oficial-3.webp",
        alt: "NIU FQiX 150 en entorno urbano",
        ancho: 1024,
        alto: 768,
      }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "NIU",
    fuenteUrl: "https://www.niu.com",
    analisisSlug: "niu-fqix-150-2026-ficha-tecnica-precio",
    planMantenimiento: {
      intervalo: "12 meses o 5.000 km",
      revisiones: [
        {
          nombre: "Revisión anual",
          queSeCambia: "Inspección de frenos, neumáticos, aprietes, electrónica y estado de salud de la batería",
          costeAproxEur: null,
        },
        {
          nombre: "Frenos y neumáticos",
          queSeCambia: "Pastillas y neumáticos según desgaste (el uso urbano los gasta antes)",
          costeAproxEur: null,
        }
      ],
      costeAnualAproxEur: null,
      fuente: "Red oficial NIU España (plan de revisiones de la gama eléctrica)",
    },
  },
  {
    id: "vmoto-vs2-2025-ficha-tecnica-precio",
    marca: "Vmoto",
    modelo: "VS2",
    version: "VS2 2025",
    categoria: "Scooter",
    precioDesde: null,
    potenciaKw: 2.0,
    potenciaCv: null,
    autonomiaKm: 80,
    autonomiaCiclo: "Declarada",
    bateriaKwh: 2.7,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 101,
    plazas: 2,
    carnet: "AM",
    carga: "3,5 h",
    etiquetaDgt: "Cero",
    aprox: [],
    pros: [
      "Rueda alta (16\" delante, 14\" detrás): más estable y cómoda que un scooter de rueda pequeña", 
      "Batería de 60V y 45Ah (2,7 kWh) con 80 km de autonomía declarada", 
      "Carga completa en solo 3,5 horas", 
      "101 kg en orden de marcha: ligero para su tamaño", 
      "Altura de asiento de 780 mm, accesible"
    ],
    contras: [
      "Precio no publicado en España: difícil valorar su competitividad", 
      "Velocidad máxima no declarada en las fichas disponibles", 
      "Diseño discreto, sin el carisma de un Super Soco o una Vespa", 
      "Red de distribución en España más limitada que NIU o Silence", 
      "2 kW de potencia: justo para cuestas con pasajero"
    ],
    curiosidades: [
      "Vmoto es la marca que está absorbiendo progresivamente a Super Soco", 
      "El VS2 comparte filosofía de rueda alta con el CPx, el superventas de la marca", 
      "Su chasis es tubular de acero, robusto y sencillo de mantener"
    ],
    imagen: "/media/motos/vmoto-vs2-2025-ficha-tecnica-precio-oficial.webp",
    galeria: [
      {
        src: "/media/motos/vmoto-vs2-2025-ficha-tecnica-precio-oficial-2.webp",
        alt: "Vmoto VS2, detalle lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/motos/vmoto-vs2-2025-ficha-tecnica-precio-oficial-3.webp",
        alt: "Vmoto VS2 en ciudad",
        ancho: 720,
        alto: 635,
      }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "Vmoto",
    fuenteUrl: "https://www.vmoto.com",
    analisisSlug: "vmoto-vs2-2025-ficha-tecnica-precio",
    planMantenimiento: {
      intervalo: "12 meses o 5.000 km",
      revisiones: [
        {
          nombre: "Revisión anual",
          queSeCambia: "Inspección de frenos, neumáticos, aprietes, electrónica y estado de salud de la batería",
          costeAproxEur: null,
        },
        {
          nombre: "Frenos y neumáticos",
          queSeCambia: "Pastillas y neumáticos según desgaste (el uso urbano los gasta antes)",
          costeAproxEur: null,
        }
      ],
      costeAnualAproxEur: null,
      fuente: "Red oficial Vmoto España (plan de revisiones de la gama eléctrica)",
    },
  },
  {
    id: "vmoto-cpx-explorer-2025-ficha-tecnica-precio",
    marca: "Vmoto",
    modelo: "CPx Explorer",
    version: "CPx Explorer 2025",
    categoria: "Scooter",
    precioDesde: null,
    potenciaKw: 8.0,
    potenciaCv: 10.9,
    autonomiaKm: 100,
    autonomiaCiclo: "Declarada",
    bateriaKwh: 5.4,
    velocidadMax: 105,
    ceroCincuenta: null,
    pesoKg: null,
    plazas: 2,
    carnet: "A1",
    carga: "~3,5 h",
    etiquetaDgt: "Cero",
    aprox: [],
    pros: [
      "8 kW y 105 km/h: prestaciones de 125 con aceleración eléctrica inmediata", 
      "Diseño renovado por C-Creative con faro en forma de sonrisa y pantalla a color", 
      "Dos baterías extraíbles de 5,4 kWh en total: 100 km de autonomía", 
      "Rueda alta (16\" delante, 14\" detrás): aplomo de scooter grande", 
      "Hereda la base del CPx Pro, con récord Guinness de distancia en 24 h"
    ],
    contras: [
      "Precio en España aún no publicado", 
      "El motor en el buje trasero lastra algo el comportamiento dinámico", 
      "Diseño polarizante: el frontal no gusta a todo el mundo", 
      "Vmoto aún está construyendo su red en España", 
      "100 km de autonomía justos para un uso interurbano intensivo"
    ],
    curiosidades: [
      "Un CPx Pro recorrió 1.931 km en 24 horas, récord Guinness de distancia en scooter eléctrico", 
      "El diseño es un guiño al Honda X-ADV, con estética aventurera", 
      "Vmoto reemplazará progresivamente a todos los modelos lanzados como Super Soco"
    ],
    imagen: "/media/motos/vmoto-cpx-explorer-2025-ficha-tecnica-precio-oficial.webp",
    galeria: [
      {
        src: "/media/motos/vmoto-cpx-explorer-2025-ficha-tecnica-precio-oficial-2.webp",
        alt: "Vmoto CPx Explorer, detalle del frontal con faro en U",
        ancho: 1200,
        alto: 900,
      },
      {
        src: "/media/motos/vmoto-cpx-explorer-2025-ficha-tecnica-precio-oficial-3.webp",
        alt: "Vmoto CPx Explorer en carretera",
        ancho: 1200,
        alto: 900,
      }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "Vmoto",
    fuenteUrl: "https://www.vmoto.com",
    analisisSlug: "vmoto-cpx-explorer-2025-ficha-tecnica-precio",
    planMantenimiento: {
      intervalo: "12 meses o 5.000 km",
      revisiones: [
        {
          nombre: "Revisión anual",
          queSeCambia: "Inspección de frenos, neumáticos, aprietes, electrónica y estado de salud de la batería",
          costeAproxEur: null,
        },
        {
          nombre: "Frenos y neumáticos",
          queSeCambia: "Pastillas y neumáticos según desgaste (el uso urbano los gasta antes)",
          costeAproxEur: null,
        }
      ],
      costeAnualAproxEur: null,
      fuente: "Red oficial Vmoto España (plan de revisiones de la gama eléctrica)",
    },
  },
  {
    id: "super-soco-tsx-50-2025-ficha-tecnica-precio",
    marca: "Super Soco",
    modelo: "TSx 50",
    version: "TSx 50 2025",
    categoria: "Urbana",
    precioDesde: 2889,
    potenciaKw: 1.9,
    potenciaCv: 2.5,
    autonomiaKm: 100,
    autonomiaCiclo: "Declarada",
    bateriaKwh: 1.8,
    velocidadMax: 45,
    ceroCincuenta: null,
    pesoKg: 72,
    plazas: 2,
    carnet: "AM",
    carga: "3,5 h",
    etiquetaDgt: "Cero",
    aprox: [],
    pros: [
      "Estética naked con rueda de 17\": parece una moto grande siendo un ciclomotor", 
      "Motor Bosch de 1,9 kW con 150 Nm de par: sale con fuerza de los semáforos", 
      "Batería extraíble de solo 10,7 kg y opción de segunda unidad (100 km)", 
      "Solo 72 kg: muy ágil y fácil de manejar", 
      "Precio de 2.889 € con seguro gratuito promocional"
    ],
    contras: [
      "48 km de autonomía con una batería: la segunda es casi obligatoria", 
      "Sin ABS: frenada combinada CBS", 
      "Postura naked: menos protección que un scooter", 
      "Sin hueco bajo el asiento para el casco", 
      "La marca está migrando a Vmoto: futuro del servicio a vigilar"
    ],
    curiosidades: [
      "El chasis combina estructura rígida con bastidor de carbono", 
      "Las celdas de la batería son ATL, el mismo proveedor de gigantes tecnológicos", 
      "Existe la versión TSx 125 (2.989 €) con la misma estética para el carnet A1"
    ],
    imagen: "/media/motos/super-soco-tsx-50-2025-ficha-tecnica-precio-oficial.webp",
    galeria: [
      {
        src: "/media/motos/super-soco-tsx-50-2025-ficha-tecnica-precio-oficial-2.webp",
        alt: "Super Soco TSx 50, detalle del faro y horquilla",
        ancho: 1200,
        alto: 765,
      },
      {
        src: "/media/motos/super-soco-tsx-50-2025-ficha-tecnica-precio-oficial-3.webp",
        alt: "Super Soco TSx 50 en ciudad",
        ancho: 1024,
        alto: 788,
      }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "Super Soco",
    fuenteUrl: "https://www.supersoco.com",
    analisisSlug: "super-soco-tsx-50-2025-ficha-tecnica-precio",
    planMantenimiento: {
      intervalo: "12 meses o 5.000 km",
      revisiones: [
        {
          nombre: "Revisión anual",
          queSeCambia: "Inspección de frenos, neumáticos, aprietes, electrónica y estado de salud de la batería",
          costeAproxEur: null,
        },
        {
          nombre: "Frenos y neumáticos",
          queSeCambia: "Pastillas y neumáticos según desgaste (el uso urbano los gasta antes)",
          costeAproxEur: null,
        }
      ],
      costeAnualAproxEur: null,
      fuente: "Red oficial Super Soco España (plan de revisiones de la gama eléctrica)",
    },
  },
  {
    id: "zeeho-ae8-s-plus-2025-ficha-tecnica-precio",
    marca: "Zeeho",
    modelo: "AE8 S+",
    version: "AE8 S+ 2025",
    categoria: "Scooter",
    precioDesde: null,
    potenciaKw: 12.5,
    potenciaCv: 16.8,
    autonomiaKm: 120,
    autonomiaCiclo: "Declarada",
    bateriaKwh: 3.7,
    velocidadMax: 100,
    ceroCincuenta: 2.6,
    pesoKg: 120,
    plazas: 2,
    carnet: "A1",
    carga: "5 h (80%), 2,5 h con carga rápida",
    etiquetaDgt: "Cero",
    aprox: ["bateriaKwh"],
    pros: [
      "12,5 kW de pico y 218 Nm: acelera de 0 a 50 en 2,6 s, como una 250", 
      "ABS Bosch de doble canal y pinza Brembo delante", 
      "120 km de autonomía con dos baterías extraíbles", 
      "Chasis multitubular de acero con basculante de aluminio", 
      "Tres modos de conducción (Eco, Street, Sport)"
    ],
    contras: [
      "Precio en España no publicado: la gran incógnita", 
      "120 kg en vacío: pesada para un scooter urbano", 
      "Marca joven en Europa: red de servicio en despliegue", 
      "Carga completa lenta (5 h) sin el cargador rápido opcional", 
      "Estética agresiva que no es para todos los gustos"
    ],
    curiosidades: [
      "Zeeho es la marca eléctrica de CFMoto, uno de los gigantes chinos", 
      "Sus 218 Nm de par superan a muchas motos de gran cilindrada", 
      "El motor va en el chasis (no en la rueda) con transmisión por correa dentada"
    ],
    imagen: "/media/motos/zeeho-ae8-s-plus-2025-ficha-tecnica-precio-oficial.webp",
    galeria: [
      {
        src: "/media/motos/zeeho-ae8-s-plus-2025-ficha-tecnica-precio-oficial-2.webp",
        alt: "Zeeho AE8 S+, detalle del frontal agresivo",
        ancho: 600,
        alto: 400,
      },
      {
        src: "/media/motos/zeeho-ae8-s-plus-2025-ficha-tecnica-precio-oficial-3.webp",
        alt: "Zeeho AE8 S+ en marcha",
        ancho: 1200,
        alto: 960,
      }
    ],
    videoId: "2_ntqxTPQng",
    videoCanal: "FoxERider",
    fuenteNombre: "Zeeho",
    fuenteUrl: "https://www.zeeho.com",
    analisisSlug: "zeeho-ae8-s-plus-2025-ficha-tecnica-precio",
    planMantenimiento: {
      intervalo: "12 meses o 5.000 km",
      revisiones: [
        {
          nombre: "Revisión anual",
          queSeCambia: "Inspección de frenos, neumáticos, aprietes, electrónica y estado de salud de la batería",
          costeAproxEur: null,
        },
        {
          nombre: "Frenos y neumáticos",
          queSeCambia: "Pastillas y neumáticos según desgaste (el uso urbano los gasta antes)",
          costeAproxEur: null,
        }
      ],
      costeAnualAproxEur: null,
      fuente: "Red oficial Zeeho España (plan de revisiones de la gama eléctrica)",
    },
  },
  {
    id: "yadea-e8s-pro-2025-ficha-tecnica-precio",
    marca: "Yadea",
    modelo: "E8S Pro",
    version: "E8S Pro 2025",
    categoria: "Scooter",
    precioDesde: 3590, // tarifa oficial España (verificado 20/10/2026)
    potenciaKw: 2.0,
    potenciaCv: 2.7,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: 60,
    ceroCincuenta: null,
    pesoKg: 135,
    plazas: 2,
    carnet: "A1",
    carga: "Enchufe doméstico",
    etiquetaDgt: "Cero",
    aprox: [],
    pros: [
      "140 Nm de par: empuje contundente para un scooter urbano", 
      "60 km/h de velocidad máxima: más que un ciclomotor", 
      "Yadea es el mayor fabricante mundial de vehículos eléctricos de dos ruedas", 
      "Ruedas de 12\" con frenos de disco en ambos ejes", 
      "Asiento a solo 740 mm: muy accesible"
    ],
    contras: [
      "135 kg en seco: pesado para su potencia", 
      "Autonomía no publicada en las fichas disponibles", 
      "2 kW se quedan justos para los 60 km/h con pasajero y cuestas", 
      "Diseño convencional, sin el carisma de rivales italianos", 
      "Precio de 3.590 € elevado frente a su potencia"
    ],
    curiosidades: [
      "Yadea vende decenas de millones de vehículos eléctricos al año en todo el mundo", 
      "El E8S Pro se presentó en España junto a la primera gama de la marca en 2022", 
      "Su distancia entre ejes de 1.280 mm lo hace muy estable"
    ],
    imagen: "/media/motos/yadea-e8s-pro-2025-ficha-tecnica-precio-oficial.webp",
    galeria: [
      {
        src: "/media/motos/yadea-e8s-pro-2025-ficha-tecnica-precio-oficial-2.webp",
        alt: "Yadea E8S Pro, detalle del lateral",
        ancho: 800,
        alto: 800,
      },
      {
        src: "/media/motos/yadea-e8s-pro-2025-ficha-tecnica-precio-oficial-3.webp",
        alt: "Yadea E8S Pro en ciudad",
        ancho: 458,
        alto: 458,
      }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "Yadea España",
    fuenteUrl: "https://www.yadea.es",
    analisisSlug: "yadea-e8s-pro-2025-ficha-tecnica-precio",
    planMantenimiento: {
      intervalo: "12 meses o 5.000 km",
      revisiones: [
        {
          nombre: "Revisión anual",
          queSeCambia: "Inspección de frenos, neumáticos, aprietes, electrónica y estado de salud de la batería",
          costeAproxEur: null,
        },
        {
          nombre: "Frenos y neumáticos",
          queSeCambia: "Pastillas y neumáticos según desgaste (el uso urbano los gasta antes)",
          costeAproxEur: null,
        }
      ],
      costeAnualAproxEur: null,
      fuente: "Red oficial Yadea España (plan de revisiones de la gama eléctrica)",
    },
  },
  {
    id: "nerva-exe-ii-2026-ficha-tecnica-precio",
    marca: "Nerva",
    modelo: "Exe II",
    version: "Exe II 2026",
    categoria: "Scooter",
    precioDesde: 7290,
    potenciaKw: 11.0,
    potenciaCv: 15.0,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 230,
    plazas: 2,
    carnet: "A1",
    carga: "Enchufe doméstico / carga rápida",
    etiquetaDgt: "Cero",
    aprox: ["potenciaKw"],
    pros: [
      "15 CV: el maxiscooter eléctrico español más potente de su gama", 
      "Marca española con baterías LFP de BYD y 5 años de garantía en baterías", 
      "Diseño GT con gran presencia y acabados cuidados", 
      "App Nerva City con conectividad, GPS y actualizaciones OTA", 
      "Posibilidad de renting de baterías para abaratar la compra"
    ],
    contras: [
      "230 kg: un peso muy elevado que se nota en parado y en ciudad", 
      "7.290 €: precio de maxiscooter premium", 
      "Autonomía y velocidad oficiales aún no publicadas para el Exe II", 
      "Tamaño grande: no es el más ágil entre el tráfico denso", 
      "Red comercial en expansión, aún lejos de las grandes marcas"
    ],
    curiosidades: [
      "Nerva es una marca española que ensambla sus vehículos con el gigante BYD", 
      "Sus baterías LFP están pensadas para una segunda vida como almacenamiento energético", 
      "El Exe original fue el primer maxiscooter eléctrico español"
    ],
    imagen: "/media/motos/nerva-exe-ii-2026-ficha-tecnica-precio-oficial.webp",
    galeria: [
      {
        src: "/media/motos/nerva-exe-ii-2026-ficha-tecnica-precio-oficial-2.webp",
        alt: "Nerva Exe II, detalle del frontal GT",
        ancho: 745,
        alto: 497,
      },
      {
        src: "/media/motos/nerva-exe-ii-2026-ficha-tecnica-precio-oficial-3.webp",
        alt: "Nerva Exe II en carretera",
        ancho: 1200,
        alto: 800,
      }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "Nerva",
    fuenteUrl: "https://www.nerva.eco",
    analisisSlug: "nerva-exe-ii-2026-ficha-tecnica-precio",
    planMantenimiento: {
      intervalo: "12 meses o 5.000 km",
      revisiones: [
        {
          nombre: "Revisión anual",
          queSeCambia: "Inspección de frenos, neumáticos, aprietes, electrónica y estado de salud de la batería",
          costeAproxEur: null,
        },
        {
          nombre: "Frenos y neumáticos",
          queSeCambia: "Pastillas y neumáticos según desgaste (el uso urbano los gasta antes)",
          costeAproxEur: null,
        }
      ],
      costeAnualAproxEur: null,
      fuente: "Red oficial Nerva España (plan de revisiones de la gama eléctrica)",
    },
  },
  {
    id: "nerva-lift-2026-ficha-tecnica-precio",
    marca: "Nerva",
    modelo: "Lift",
    version: "Lift 2026",
    categoria: "Scooter",
    precioDesde: 4690,
    potenciaKw: 5.9,
    potenciaCv: 8.05,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 170,
    plazas: 2,
    carnet: "A1",
    carga: "Enchufe doméstico",
    etiquetaDgt: "Cero",
    aprox: ["potenciaKw"],
    pros: [
      "8 CV por 4.690 €: acceso asequible a la marca española", 
      "170 kg: mucho más ligero y manejable que el Exe II", 
      "Baterías LFP de BYD con 5 años de garantía", 
      "App Nerva City con conectividad y actualizaciones OTA", 
      "Diseño urbano compacto, ideal para la ciudad"
    ],
    contras: [
      "Autonomía y velocidad aún no publicadas oficialmente", 
      "Menos presencia y equipamiento que el Exe II", 
      "Marca joven con red comercial en crecimiento", 
      "8 CV justos para salir a rondas con pasajero", 
      "El mercado de segunda mano aún no existe"
    ],
    curiosidades: [
      "El Lift es el modelo de acceso a la gama Nerva, por debajo del Exe II", 
      "Comparte la tecnología de baterías LFP de BYD con sus hermanos mayores", 
      "Nerva presentó en 2026 los Spark L1e y L3e, aún más pequeños"
    ],
    imagen: "/media/motos/nerva-lift-2026-ficha-tecnica-precio-oficial.webp",
    galeria: [
      {
        src: "/media/motos/nerva-lift-2026-ficha-tecnica-precio-oficial-2.webp",
        alt: "Nerva Lift, detalle del diseño",
        ancho: 533,
        alto: 477,
      },
      {
        src: "/media/motos/nerva-lift-2026-ficha-tecnica-precio-oficial-3.webp",
        alt: "Nerva Lift en ciudad",
        ancho: 974,
        alto: 536,
      }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "Nerva",
    fuenteUrl: "https://www.nerva.eco",
    analisisSlug: "nerva-lift-2026-ficha-tecnica-precio",
    planMantenimiento: {
      intervalo: "12 meses o 5.000 km",
      revisiones: [
        {
          nombre: "Revisión anual",
          queSeCambia: "Inspección de frenos, neumáticos, aprietes, electrónica y estado de salud de la batería",
          costeAproxEur: null,
        },
        {
          nombre: "Frenos y neumáticos",
          queSeCambia: "Pastillas y neumáticos según desgaste (el uso urbano los gasta antes)",
          costeAproxEur: null,
        }
      ],
      costeAnualAproxEur: null,
      fuente: "Red oficial Nerva España (plan de revisiones de la gama eléctrica)",
    },
  },
  {
    id: "piaggio-1-active-2025-ficha-tecnica-precio",
    marca: "Piaggio",
    modelo: "1 Active",
    version: "1 Active 2025",
    categoria: "Scooter",
    precioDesde: 3700,
    potenciaKw: 2.0,
    potenciaCv: 2.7,
    autonomiaKm: 85,
    autonomiaCiclo: "Declarada",
    bateriaKwh: 2.3,
    velocidadMax: 60,
    ceroCincuenta: null,
    pesoKg: null,
    plazas: 2,
    carnet: "A1",
    carga: "~6 h",
    etiquetaDgt: "Cero",
    aprox: [],
    pros: [
      "Diseño italiano inconfundible: el eléctrico con más estilo del segmento", 
      "60 km/h y 85 km de autonomía: el más capaz de la familia Piaggio 1", 
      "Batería extraíble de 2,3 kWh: carga en cualquier enchufe", 
      "Red Piaggio/Vespa: servicio postventa en toda España", 
      "Ligero y compacto, ideal para la ciudad"
    ],
    contras: [
      "3.700 €: caro frente a chinos con más potencia y autonomía", 
      "2 kW se quedan justos en cuestas y con pasajero", 
      "Carga lenta: unas 6 horas", 
      "Sin ABS ni conectividad avanzada", 
      "La autonomía real en modo Sport baja a 66 km"
    ],
    curiosidades: [
      "La familia Piaggio 1 tiene tres versiones: 1, 1+ y 1 Active", 
      "El motor es Bosch, como en muchos de sus rivales chinos", 
      "El diseño juega con motivos hexagonales en todo el carenado"
    ],
    imagen: "/media/motos/piaggio-1-active-2025-ficha-tecnica-precio-oficial.webp",
    galeria: [
      {
        src: "/media/motos/piaggio-1-active-2025-ficha-tecnica-precio-oficial-2.webp",
        alt: "Piaggio 1 Active, detalle del escudo frontal",
        ancho: 800,
        alto: 800,
      },
      {
        src: "/media/motos/piaggio-1-active-2025-ficha-tecnica-precio-oficial-3.webp",
        alt: "Piaggio 1 Active en ciudad",
        ancho: 920,
        alto: 566,
      }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "Piaggio España",
    fuenteUrl: "https://www.piaggio.com",
    analisisSlug: "piaggio-1-active-2025-ficha-tecnica-precio",
    planMantenimiento: {
      intervalo: "12 meses o 5.000 km",
      revisiones: [
        {
          nombre: "Revisión anual",
          queSeCambia: "Inspección de frenos, neumáticos, aprietes, electrónica y estado de salud de la batería",
          costeAproxEur: null,
        },
        {
          nombre: "Frenos y neumáticos",
          queSeCambia: "Pastillas y neumáticos según desgaste (el uso urbano los gasta antes)",
          costeAproxEur: null,
        }
      ],
      costeAnualAproxEur: null,
      fuente: "Red oficial Piaggio España (plan de revisiones de la gama eléctrica)",
    },
  },
  {
    id: "vespa-elettrica-70-2025-ficha-tecnica-precio",
    marca: "Vespa",
    modelo: "Elettrica 70",
    version: "Elettrica 70 km/h 2025",
    categoria: "Scooter",
    precioDesde: 6790.0,
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: 100,
    autonomiaCiclo: "Declarada",
    bateriaKwh: null,
    velocidadMax: 70,
    ceroCincuenta: null,
    pesoKg: null,
    plazas: 2,
    carnet: "A1",
    carga: "~4 h",
    etiquetaDgt: "Cero",
    aprox: [],
    pros: [
      "El icono Vespa en versión eléctrica: diseño atemporal único", 
      "70 km/h: la Elettrica capaz de seguir el tráfico extraurbano", 
      "100 km de autonomía declarada", 
      "Silenciosa, suave y con el encanto de una Vespa de verdad", 
      "Red Vespa: servicio y reventa garantizados"
    ],
    contras: [
      "Precio no publicado para la versión 70: la gama parte de 6.790 €", 
      "Es la eléctrica urbana más cara por prestación", 
      "Ficha técnica poco detallada por la marca", 
      "70 km/h justos para vías rápidas", 
      "El encanto se paga: rivales chinos ofrecen más por menos"
    ],
    curiosidades: [
      "La Elettrica se ofrece en dos versiones: 45 km/h (ciclomotor) y 70 km/h (equivalente a 125)", 
      "Es la primera Vespa 100% eléctrica de la historia de la marca", 
      "Mantiene el monocasco de acero típico de Vespa"
    ],
    imagen: "/media/motos/vespa-elettrica-70-2025-ficha-tecnica-precio-oficial.webp",
    galeria: [
      {
        src: "/media/motos/vespa-elettrica-70-2025-ficha-tecnica-precio-oficial-2.webp",
        alt: "Vespa Elettrica 70, detalle del escudo clásico",
        ancho: 735,
        alto: 525,
      },
      {
        src: "/media/motos/vespa-elettrica-70-2025-ficha-tecnica-precio-oficial-3.webp",
        alt: "Vespa Elettrica 70 en ciudad",
        ancho: 560,
        alto: 350,
      }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "Vespa España",
    fuenteUrl: "https://www.vespa.com",
    analisisSlug: "vespa-elettrica-70-2025-ficha-tecnica-precio",
    planMantenimiento: {
      intervalo: "12 meses o 5.000 km",
      revisiones: [
        {
          nombre: "Revisión anual",
          queSeCambia: "Inspección de frenos, neumáticos, aprietes, electrónica y estado de salud de la batería",
          costeAproxEur: null,
        },
        {
          nombre: "Frenos y neumáticos",
          queSeCambia: "Pastillas y neumáticos según desgaste (el uso urbano los gasta antes)",
          costeAproxEur: null,
        }
      ],
      costeAnualAproxEur: null,
      fuente: "Red oficial Vespa España (plan de revisiones de la gama eléctrica)",
    },
  },
  {
    id: "ebroh-veracruz-2025-ficha-tecnica-precio",
    marca: "Ebroh",
    modelo: "Veracruz",
    version: "Veracruz 2025",
    categoria: "Scooter",
    precioDesde: 3890,
    potenciaKw: 4.7,
    potenciaCv: 6.4,
    autonomiaKm: 80,
    autonomiaCiclo: "Declarada",
    bateriaKwh: null,
    velocidadMax: 80,
    ceroCincuenta: null,
    pesoKg: null,
    plazas: 2,
    carnet: "A1",
    carga: "Enchufe doméstico (baterías extraíbles)",
    etiquetaDgt: "Cero",
    aprox: ["potenciaCv"],
    pros: [
      "Motor Bosch de 4,7 kW: fiabilidad alemana en un scooter español", 
      "80 km/h de velocidad máxima por 3.890 €: muy buena relación precio/prestaciones", 
      "Dos baterías extraíbles de 20Ah: carga flexible en casa o en el trabajo", 
      "Estética clásica italiana con asiento de símil cuero marrón", 
      "Marca de Zaragoza especializada en scooters eléctricos"
    ],
    contras: [
      "80 km de autonomía: justa para un uso intensivo", 
      "Marca pequeña: red de distribución limitada fuera de Aragón", 
      "Sin ABS confirmado ni electrónica avanzada", 
      "El diseño clásico no es para quien busque deportividad", 
      "Capacidad de las baterías (2x20Ah) modesta"
    ],
    curiosidades: [
      "Ebroh es una firma de Zaragoza especializada en scooters eléctricos", 
      "La Veracruz supuso el salto de la marca por encima de los 45 km/h", 
      "Su estética se inspira en los scooters italianos de los años 60"
    ],
    imagen: "/media/motos/ebroh-veracruz-2025-ficha-tecnica-precio-oficial.webp",
    galeria: [
      {
        src: "/media/motos/ebroh-veracruz-2025-ficha-tecnica-precio-oficial-2.webp",
        alt: "Ebroh Veracruz, detalle del asiento de símil cuero",
        ancho: 768,
        alto: 808,
      },
      {
        src: "/media/motos/ebroh-veracruz-2025-ficha-tecnica-precio-oficial-3.webp",
        alt: "Ebroh Veracruz en ciudad",
        ancho: 1024,
        alto: 800,
      }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "Ebroh",
    fuenteUrl: "https://www.ebroh.com",
    analisisSlug: "ebroh-veracruz-2025-ficha-tecnica-precio",
    planMantenimiento: {
      intervalo: "12 meses o 5.000 km",
      revisiones: [
        {
          nombre: "Revisión anual",
          queSeCambia: "Inspección de frenos, neumáticos, aprietes, electrónica y estado de salud de la batería",
          costeAproxEur: null,
        },
        {
          nombre: "Frenos y neumáticos",
          queSeCambia: "Pastillas y neumáticos según desgaste (el uso urbano los gasta antes)",
          costeAproxEur: null,
        }
      ],
      costeAnualAproxEur: null,
      fuente: "Red oficial Ebroh España (plan de revisiones de la gama eléctrica)",
    },
  },
  {
    id: "ebroh-bravo-cr-2025-ficha-tecnica-precio",
    marca: "Ebroh",
    modelo: "Bravo CR",
    version: "Bravo CR 2025",
    categoria: "Urbana",
    precioDesde: 5990,
    potenciaKw: 5.0,
    potenciaCv: null,
    autonomiaKm: 100,
    autonomiaCiclo: "Declarada",
    bateriaKwh: 7.2,
    velocidadMax: 115,
    ceroCincuenta: null,
    pesoKg: null,
    plazas: 2,
    carnet: "A1",
    carga: "~5 h",
    etiquetaDgt: "Cero",
    aprox: [],
    pros: [
      "115 km/h de velocidad máxima: la eléctrica urbana española más rápida", 
      "Batería de 72V y 100Ah (7,2 kWh): 100 km de autonomía", 
      "Estética naked deportiva con semimanillares: parece una moto grande", 
      "Doble disco delantero y frenada CBS", 
      "Desarrollada y homologada en España, con 3 años de garantía"
    ],
    contras: [
      "5.990 €: precio elevado para el segmento", 
      "Carga completa en unas 5 horas", 
      "Postura deportiva con semimanillares: menos cómoda que un scooter", 
      "Marca pequeña: servicio postventa concentrado", 
      "Sin ABS: frenada CBS con doble disco"
    ],
    curiosidades: [
      "La Bravo CR monta semimanillares en lugar de manillar, como las deportivas", 
      "Su instrumentación LCD incluye selector giratorio de modos, marcha atrás y punto muerto", 
      "Ebroh la define como una deportiva con alma touring"
    ],
    imagen: "/media/motos/ebroh-bravo-cr-2025-ficha-tecnica-precio-oficial.webp",
    galeria: [
      {
        src: "/media/motos/ebroh-bravo-cr-2025-ficha-tecnica-precio-oficial-2.webp",
        alt: "Ebroh Bravo CR, detalle del frontal con doble óptica LED",
        ancho: 600,
        alto: 600,
      },
      {
        src: "/media/motos/ebroh-bravo-cr-2025-ficha-tecnica-precio-oficial-3.webp",
        alt: "Ebroh Bravo CR en carretera",
        ancho: 655,
        alto: 655,
      }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "Ebroh",
    fuenteUrl: "https://www.ebroh.com",
    analisisSlug: "ebroh-bravo-cr-2025-ficha-tecnica-precio",
    planMantenimiento: {
      intervalo: "12 meses o 5.000 km",
      revisiones: [
        {
          nombre: "Revisión anual",
          queSeCambia: "Inspección de frenos, neumáticos, aprietes, electrónica y estado de salud de la batería",
          costeAproxEur: null,
        },
        {
          nombre: "Frenos y neumáticos",
          queSeCambia: "Pastillas y neumáticos según desgaste (el uso urbano los gasta antes)",
          costeAproxEur: null,
        }
      ],
      costeAnualAproxEur: null,
      fuente: "Red oficial Ebroh España (plan de revisiones de la gama eléctrica)",
    },
  },
  {
    id: "askoll-es3-2025-ficha-tecnica-precio",
    marca: "Askoll",
    modelo: "eS3",
    version: "eS3 2025",
    categoria: "Scooter",
    precioDesde: null,
    potenciaKw: 3.0,
    potenciaCv: 4.0,
    autonomiaKm: 96,
    autonomiaCiclo: "Declarada",
    bateriaKwh: null,
    velocidadMax: 66,
    ceroCincuenta: null,
    pesoKg: null,
    plazas: 2,
    carnet: "A1",
    carga: "5 h por batería",
    etiquetaDgt: "Cero",
    aprox: [],
    pros: [
      "Fue la moto eléctrica más vendida en España en su segmento: éxito probado", 
      "96 km de autonomía con dos baterías extraíbles", 
      "Marca italiana con ingeniería propia (Askoll fabrica sus motores)", 
      "66 km/h: más que un ciclomotor, sin llegar a 125", 
      "Silenciosa, ligera y muy fácil de conducir en ciudad"
    ],
    contras: [
      "Precio actual no publicado en España", 
      "Freno trasero de tambor, mejorable", 
      "Diseño funcional sin pretensiones estéticas", 
      "66 km/h se quedan cortos en rondas rápidas", 
      "Cada batería tarda 5 horas en cargarse"
    ],
    curiosidades: [
      "Askoll empezó fabricando motores eléctricos para terceros antes de hacer motos", 
      "La eS3 fue la eléctrica más vendida en España en 2021 en su categoría", 
      "La distancia entre ejes de 1.245 mm la hace muy estable"
    ],
    imagen: "/media/motos/askoll-es3-2025-ficha-tecnica-precio-oficial.webp",
    galeria: [
      {
        src: "/media/motos/askoll-es3-2025-ficha-tecnica-precio-oficial-2.webp",
        alt: "Askoll eS3, detalle del diseño funcional",
        ancho: 1200,
        alto: 1200,
      },
      {
        src: "/media/motos/askoll-es3-2025-ficha-tecnica-precio-oficial-3.webp",
        alt: "Askoll eS3 en ciudad",
        ancho: 1200,
        alto: 913,
      }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "Askoll",
    fuenteUrl: "https://www.askoll.com",
    analisisSlug: "askoll-es3-2025-ficha-tecnica-precio",
    planMantenimiento: {
      intervalo: "12 meses o 5.000 km",
      revisiones: [
        {
          nombre: "Revisión anual",
          queSeCambia: "Inspección de frenos, neumáticos, aprietes, electrónica y estado de salud de la batería",
          costeAproxEur: null,
        },
        {
          nombre: "Frenos y neumáticos",
          queSeCambia: "Pastillas y neumáticos según desgaste (el uso urbano los gasta antes)",
          costeAproxEur: null,
        }
      ],
      costeAnualAproxEur: null,
      fuente: "Red oficial Askoll España (plan de revisiones de la gama eléctrica)",
    },
  },
  {
    id: "blueshark-r80-lite-hs-2025-ficha-tecnica-precio",
    marca: "Blueshark",
    modelo: "R80 Lite HS",
    version: "R80 Lite HS 2025",
    categoria: "Urbana",
    precioDesde: 3190,
    potenciaKw: 3.0,
    potenciaCv: null,
    autonomiaKm: 80,
    autonomiaCiclo: "Declarada",
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: null,
    plazas: 2,
    carnet: "A1",
    carga: "Enchufe doméstico",
    etiquetaDgt: "Cero",
    aprox: [],
    pros: [
      "3.000 W y 80 km de autonomía por 3.190 €: muy buena relación precio/prestaciones", 
      "Capacidad para dos baterías: autonomía ampliable", 
      "Tres versiones en la gama (R80 Lite HS, R80 HS, R1 Lite LS) para elegir", 
      "Estética moderna de moto urbana", 
      "Distribución en España con servicio postventa"
    ],
    contras: [
      "Velocidad máxima no publicada en las fichas disponibles", 
      "Marca poco conocida en España: reventa incierta", 
      "Ficha técnica poco detallada", 
      "Sin ABS confirmado", 
      "La competencia china (NIU, Segway) tiene mejor red"
    ],
    curiosidades: [
      "Blueshark ofrece tres motorizaciones con la misma base de 3.000 W", 
      "La versión R80 HS sube a 3.690 € con más equipamiento", 
      "Es una de las marcas que más crece en el segmento de flotas urbanas"
    ],
    imagen: "/media/motos/blueshark-r80-lite-hs-2025-ficha-tecnica-precio-oficial.webp",
    galeria: [
      {
        src: "/media/motos/blueshark-r80-lite-hs-2025-ficha-tecnica-precio-oficial-2.webp",
        alt: "Blueshark R80 Lite HS, detalle del diseño",
        ancho: 800,
        alto: 607,
      },
      {
        src: "/media/motos/blueshark-r80-lite-hs-2025-ficha-tecnica-precio-oficial-3.webp",
        alt: "Blueshark R80 Lite HS en ciudad",
        ancho: 600,
        alto: 600,
      }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "Blueshark",
    fuenteUrl: "https://www.blueshark.com",
    analisisSlug: "blueshark-r80-lite-hs-2025-ficha-tecnica-precio",
    planMantenimiento: {
      intervalo: "12 meses o 5.000 km",
      revisiones: [
        {
          nombre: "Revisión anual",
          queSeCambia: "Inspección de frenos, neumáticos, aprietes, electrónica y estado de salud de la batería",
          costeAproxEur: null,
        },
        {
          nombre: "Frenos y neumáticos",
          queSeCambia: "Pastillas y neumáticos según desgaste (el uso urbano los gasta antes)",
          costeAproxEur: null,
        }
      ],
      costeAnualAproxEur: null,
      fuente: "Red oficial Blueshark España (plan de revisiones de la gama eléctrica)",
    },
  },
  {
    id: "efun-tiger-my25-2025-ficha-tecnica-precio",
    marca: "Efun",
    modelo: "Tiger MY25",
    version: "Tiger MY25 2025",
    categoria: "Scooter",
    precioDesde: 6590,
    potenciaKw: 7.0,
    potenciaCv: null,
    autonomiaKm: 250,
    autonomiaCiclo: "Declarada",
    bateriaKwh: 10.8,
    velocidadMax: 125,
    ceroCincuenta: null,
    pesoKg: null,
    plazas: 2,
    carnet: "A1",
    carga: "6 h (0-100%), 4 h (0-85%)",
    etiquetaDgt: "Cero",
    aprox: [],
    pros: [
      "250 km de autonomía declarada: la mayor de todos los scooters eléctricos urbanos", 
      "Batería CATL de 72V y 150Ah (10,8 kWh): celdas del líder mundial", 
      "125 km/h de velocidad máxima con 7 kW: prestaciones de 125 de verdad", 
      "ABS, Apple CarPlay y Android Auto en el display", 
      "5 años de garantía en la batería, ampliables a 8"
    ],
    contras: [
      "6.590 €: precio de scooter premium", 
      "Batería enorme: peso elevado (no publicado, pero considerable)", 
      "6 horas para la carga completa", 
      "Marca china con red en despliegue en España", 
      "Tanta autonomía es innecesaria para un uso urbano normal"
    ],
    curiosidades: [
      "Su batería CATL de 10,8 kWh es de las mayores montadas en un scooter", 
      "En pruebas independientes ha superado los 200 km de autonomía real", 
      "El display integra Apple CarPlay y Android Auto, raro en motos"
    ],
    imagen: "/media/motos/efun-tiger-my25-2025-ficha-tecnica-precio-oficial.webp",
    galeria: [
      {
        src: "/media/motos/efun-tiger-my25-2025-ficha-tecnica-precio-oficial-2.webp",
        alt: "Efun Tiger MY25, detalle del frontal",
        ancho: 1000,
        alto: 1000,
      },
      {
        src: "/media/motos/efun-tiger-my25-2025-ficha-tecnica-precio-oficial-3.webp",
        alt: "Efun Tiger MY25 en carretera",
        ancho: 1200,
        alto: 675,
      }
    ],
    videoId: "2jxyW-CtXWU",
    videoCanal: "El Rincón Práctico",
    fuenteNombre: "Efun",
    fuenteUrl: "https://www.efunmotos.com",
    analisisSlug: "efun-tiger-my25-2025-ficha-tecnica-precio",
    planMantenimiento: {
      intervalo: "12 meses o 5.000 km",
      revisiones: [
        {
          nombre: "Revisión anual",
          queSeCambia: "Inspección de frenos, neumáticos, aprietes, electrónica y estado de salud de la batería",
          costeAproxEur: null,
        },
        {
          nombre: "Frenos y neumáticos",
          queSeCambia: "Pastillas y neumáticos según desgaste (el uso urbano los gasta antes)",
          costeAproxEur: null,
        }
      ],
      costeAnualAproxEur: null,
      fuente: "Red oficial Efun España (plan de revisiones de la gama eléctrica)",
    },
  },
  {
    id: "sunra-hawk-49e-2025-ficha-tecnica-precio",
    marca: "Sunra",
    modelo: "Hawk 49e",
    version: "Hawk 49e 2025",
    categoria: "Scooter",
    precioDesde: null,
    potenciaKw: 1.8,
    potenciaCv: 2.4,
    autonomiaKm: 130,
    autonomiaCiclo: "Declarada",
    bateriaKwh: 1.44,
    velocidadMax: 45,
    ceroCincuenta: null,
    pesoKg: 83,
    plazas: 2,
    carnet: "AM",
    carga: "4 h",
    etiquetaDgt: "Cero",
    aprox: ["potenciaCv"],
    pros: [
      "130 km de autonomía declarada (con batería de 40Ah): récord en ciclomotores", 
      "Batería extraíble de solo 10,7 kg equivalente: fácil de transportar", 
      "Equipamiento insólito: radio FM, Bluetooth, crucero y USB de serie", 
      "83 kg: ligero y manejable", 
      "Doble amortiguador trasero regulable en 4 posiciones"
    ],
    contras: [
      "Precio no publicado en España", 
      "1.800 W justos para cuestas con pasajero", 
      "Freno trasero de tambor", 
      "Diseño deportivo que no es para todos", 
      "Marca china con red de servicio limitada"
    ],
    curiosidades: [
      "Sunra ha vendido más de 30 millones de motos eléctricas en todo el mundo", 
      "El Hawk 49e incluye radio FM con Bluetooth, algo único en su segmento", 
      "Deriva del Anger 125e, su hermano mayor para el carnet A1"
    ],
    imagen: "/media/motos/sunra-hawk-49e-2025-ficha-tecnica-precio-oficial.webp",
    galeria: [
      {
        src: "/media/motos/sunra-hawk-49e-2025-ficha-tecnica-precio-oficial-2.webp",
        alt: "Sunra Hawk 49e, detalle del frontal deportivo",
        ancho: 800,
        alto: 600,
      },
      {
        src: "/media/motos/sunra-hawk-49e-2025-ficha-tecnica-precio-oficial-3.webp",
        alt: "Sunra Hawk 49e en ciudad",
        ancho: 1024,
        alto: 1022,
      }
    ],
    videoId: "lIhscDPxZD4",
    videoCanal: null,
    fuenteNombre: "Sunra",
    fuenteUrl: "https://www.sunra.com",
    analisisSlug: "sunra-hawk-49e-2025-ficha-tecnica-precio",
    planMantenimiento: {
      intervalo: "12 meses o 5.000 km",
      revisiones: [
        {
          nombre: "Revisión anual",
          queSeCambia: "Inspección de frenos, neumáticos, aprietes, electrónica y estado de salud de la batería",
          costeAproxEur: null,
        },
        {
          nombre: "Frenos y neumáticos",
          queSeCambia: "Pastillas y neumáticos según desgaste (el uso urbano los gasta antes)",
          costeAproxEur: null,
        }
      ],
      costeAnualAproxEur: null,
      fuente: "Red oficial Sunra España (plan de revisiones de la gama eléctrica)",
    },
  },
  {
    id: "sunra-anger-125e-2025-ficha-tecnica-precio",
    marca: "Sunra",
    modelo: "Anger 125e",
    version: "Anger 125e 2025",
    categoria: "Scooter",
    precioDesde: null,
    potenciaKw: 3.0,
    potenciaCv: 4.0,
    autonomiaKm: 130,
    autonomiaCiclo: "Declarada",
    bateriaKwh: null,
    velocidadMax: 80,
    ceroCincuenta: null,
    pesoKg: null,
    plazas: 2,
    carnet: "A1",
    carga: "Enchufe doméstico",
    etiquetaDgt: "Cero",
    aprox: [],
    pros: [
      "130 km de autonomía con doble batería: de las mejores del segmento 125", 
      "80 km/h de velocidad máxima: vale para rondas", 
      "Arranque por huella dactilar: seguridad sin llave", 
      "3 kW con motor en la rueda trasera: sencillo y fiable", 
      "Fue uno de los eléctricos más vendidos en España en 2021"
    ],
    contras: [
      "Precio actual no publicado en España", 
      "Diseño sencillo y funcional, sin pretensiones", 
      "80 km/h justos para vías rápidas", 
      "Ficha técnica poco detallada", 
      "Marca con red de servicio limitada en España"
    ],
    curiosidades: [
      "El Anger 125e es la versión 125 del Hawk 49e", 
      "En 2021 fue de las motos eléctricas más vendidas en España, con 158 unidades", 
      "El arranque por huella dactilar es único en su rango de precios"
    ],
    imagen: "/media/motos/sunra-anger-125e-2025-ficha-tecnica-precio-oficial.webp",
    galeria: [
      {
        src: "/media/motos/sunra-anger-125e-2025-ficha-tecnica-precio-oficial-2.webp",
        alt: "Sunra Anger 125e, detalle del diseño",
        ancho: 600,
        alto: 600,
      },
      {
        src: "/media/motos/sunra-anger-125e-2025-ficha-tecnica-precio-oficial-3.webp",
        alt: "Sunra Anger 125e en ciudad",
        ancho: 1080,
        alto: 953,
      }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "Sunra",
    fuenteUrl: "https://www.sunra.com",
    analisisSlug: "sunra-anger-125e-2025-ficha-tecnica-precio",
    planMantenimiento: {
      intervalo: "12 meses o 5.000 km",
      revisiones: [
        {
          nombre: "Revisión anual",
          queSeCambia: "Inspección de frenos, neumáticos, aprietes, electrónica y estado de salud de la batería",
          costeAproxEur: null,
        },
        {
          nombre: "Frenos y neumáticos",
          queSeCambia: "Pastillas y neumáticos según desgaste (el uso urbano los gasta antes)",
          costeAproxEur: null,
        }
      ],
      costeAnualAproxEur: null,
      fuente: "Red oficial Sunra España (plan de revisiones de la gama eléctrica)",
    },
  },
  {
    id: "e-zi-miniscooter-2025-ficha-tecnica-precio",
    marca: "E-Zi",
    modelo: "Miniscooter",
    version: "Miniscooter 2025",
    categoria: "Scooter",
    precioDesde: 1499,
    potenciaKw: null,
    potenciaCv: null,
    autonomiaKm: 50,
    autonomiaCiclo: "Declarada",
    bateriaKwh: null,
    velocidadMax: 45,
    ceroCincuenta: null,
    pesoKg: null,
    plazas: 2,
    carnet: "AM",
    carga: "Enchufe doméstico (batería extraíble)",
    etiquetaDgt: "Cero",
    aprox: [],
    pros: [
      "1.499 €: de los scooters eléctricos matriculables más baratos de España", 
      "Batería extraíble: se carga en casa sin garaje", 
      "Ligero, práctico y manejable: ideal para la ciudad", 
      "Dos plazas y dos modos de potencia (Eco 25 km/h y normal 45 km/h)", 
      "Fabricado por QJiang (grupo Geely): respaldo industrial"
    ],
    contras: [
      "50 km de autonomía: solo para usos urbanos cortos", 
      "Potencia no publicada: prestaciones básicas", 
      "Acabados sencillos, acordes al precio", 
      "Red de distribución limitada en España", 
      "Sin conectividad ni equipamiento avanzado"
    ],
    curiosidades: [
      "E-Zi es la marca eléctrica vinculada a Keeway, del grupo Geely (Volvo, Lotus)", 
      "El modo Eco limitado a 25 km/h estira la autonomía al máximo", 
      "Su hermano mayor, el Ezi City, ofrece 3.600 W con dos motores"
    ],
    imagen: "/media/motos/e-zi-miniscooter-2025-ficha-tecnica-precio-oficial.webp",
    galeria: [
      {
        src: "/media/motos/e-zi-miniscooter-2025-ficha-tecnica-precio-oficial-2.webp",
        alt: "E-Zi Miniscooter, detalle del diseño compacto",
        ancho: 1200,
        alto: 924,
      },
      {
        src: "/media/motos/e-zi-miniscooter-2025-ficha-tecnica-precio-oficial-3.webp",
        alt: "E-Zi Miniscooter en ciudad",
        ancho: 960,
        alto: 989,
      }
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "E-Zi / Keeway",
    fuenteUrl: "https://www.keeway.com",
    analisisSlug: "e-zi-miniscooter-2025-ficha-tecnica-precio",
    planMantenimiento: {
      intervalo: "12 meses o 5.000 km",
      revisiones: [
        {
          nombre: "Revisión anual",
          queSeCambia: "Inspección de frenos, neumáticos, aprietes, electrónica y estado de salud de la batería",
          costeAproxEur: null,
        },
        {
          nombre: "Frenos y neumáticos",
          queSeCambia: "Pastillas y neumáticos según desgaste (el uso urbano los gasta antes)",
          costeAproxEur: null,
        }
      ],
      costeAnualAproxEur: null,
      fuente: "Red oficial E-Zi España (plan de revisiones de la gama eléctrica)",
    },
  },
];
