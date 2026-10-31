// Lote P9 — expansión comparador patinetes (50 modelos verificados 2026-10-05).
// Solo datos verificados en webs oficiales y retailers España/Europa; dato no verificado = null.
// Inokim, E-Twow, Smartgyro, Cecotec, Kugoo, iScooter, Hiboy, Evercross, Bogist,
// Gotrax, Turboant, Razor, Pure. Modelos reales 2024+.
// El coordinador fusiona PATINETES_EXP_P9 en el comparador.
import type { PatineteComparador } from "./comparador-patinetes-data.ts";

export const PATINETES_EXP_P9: PatineteComparador[] = [
  {
    id: "gotrax-eclipse",
    videoId: null,
    videoCanal: null,
    marca: "GOTRAX",
    modelo: "Eclipse",
    precioEur: null, // la marca no publica tarifa oficial en su tienda oficial (verificado 20/10/2026)
    potenciaNominalW: 500,
    potenciaPicoW: 650,
    autonomiaKm: 45,
    autonomiaRealKm: 30,
    velocidadMaxKmh: 25,
    pesoKg: 20.9,
    cargaMaxKg: 120,
    tiempoCargaH: 6,
    bateriaWh: 432,
    frenos: "Doble tambor + E-ABS",
    neumaticos: 'Sólidas de 10"',
    certificadoDgt: null,
    foto: "/media/patinetes/gotrax-eclipse-1.webp",
    galeria: [
      {
        src: "/media/fotos-reales/gotrax-eclipse/gotrax-eclipse-real-0.webp",
        alt: "Detalle del manillar y pantalla LED del Gotrax Eclipse",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm"],
    pros: [
      "Batería de 432 Wh con 45 km declarados, de las más generosas de Gotrax",
      "Bloqueo por código digital desde la pantalla, antirrobo sin candado",
      "Neumáticos sólidos de 10\": cero pinchazos",
      "Suspensión delantera y plegado con un toque",
      "Doble freno de tambor + E-ABS, frenada fiable y de bajo mantenimiento",
    ],
    contras: [
      "Pesa 20,9 kg: no es el más ligero para subirlo a un piso",
      "Neumáticos sólidos: más duros que los neumáticos en asfalto roto",
      "Sin precio oficial en España verificado",
      "Sin certificado DGT verificado",
      "Carga de 6 horas, sin opción de carga rápida",
    ],
    veredicto:
      "El Eclipse es el Gotrax más completo para commuting: 432 Wh, bloqueo digital y cero pinchazos por unos 700 $ en EE. UU. Si llega a España a precio competitivo, es una alternativa seria a los Xiaomi de gama media, aunque los neumáticos sólidos se notan en calles rotas.",
    fuenteNombre: "Gotrax",
    fuenteUrl: "https://gotrax.com/products/eclipse-electric-scooter",
    mantenimientoDIY: {
      actualizacionFirmware: "Sin app oficial: los ajustes se hacen desde la pantalla LED",
      trucos: ["Los neumáticos sólidos no necesitan control de presión: revísalos por desgaste"],
    },
  },
  {
    id: "smartgyro-raptor-black",
    videoId: null,
    videoCanal: null,
    marca: "SmartGyro",
    modelo: "Raptor Black",
    precioEur: null, // SmartGyro no publica tarifa oficial; solo precios de distribuidor (verificado 20/10/2026)
    potenciaNominalW: 1000,
    potenciaPicoW: 1300,
    autonomiaKm: 45,
    autonomiaRealKm: 30,
    velocidadMaxKmh: 25,
    pesoKg: 27,
    cargaMaxKg: 120,
    tiempoCargaH: 7,
    bateriaWh: 624,
    frenos: "Disco delantero + disco trasero (EABS hidráulico)",
    neumaticos: 'Neumáticos allroad de 10"',
    certificadoDgt: null,
    foto: "/media/patinetes/smartgyro-raptor-black-1.webp",
    galeria: [
      {
        src: "/media/patinetes/smartgyro-raptor-black-2.webp",
        alt: "Smartgyro Raptor Black con doble suspensión",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm", "tiempoCargaH"],
    pros: [
      "Motor de 1000 W nominales (1300 W de pico): el Smartgyro más potente",
      "Batería de 624 Wh (48V 13Ah) con 40-50 km declarados",
      "Doble suspensión con brazos delantero y trasero para baches",
      "Frenos de disco con EABS hidráulico, pastillas que duran más",
      "Intermitentes, app con antirrobo y LEDs en la base",
    ],
    contras: [
      "Pesa 27 kg: imposible llevarlo a pulso con comodidad",
      "Sin precio oficial verificado",
      "Sin certificado DGT verificado en la ficha consultada",
      "Carga lenta: 6-8 horas",
      "Potencia pensada para modo deslimitado; limitado a 25 km/h pierde gracia",
    ],
    veredicto:
      "El Raptor Black es el Smartgyro más bestia: 1000 W, 624 Wh y doble suspensión con brazos. Es un patinete para quien quiere potencia y presencia, no ligereza. Verifica el certificado DGT antes de comprarlo si vas a circular por vía pública.",
    fuenteNombre: "TransporTECO",
    fuenteUrl: "https://transporteco.es/en/patinete-el-ctrico-smartgyro-raptor-black-transporteco",
    mantenimientoDIY: {
      actualizacionFirmware: "A través de la app oficial smartGyro (iOS/Android)",
      trucos: ["Con 27 kg, comprueba el apriete de la tija del manillar cada mes"],
    },
  },
  {
    id: "smartgyro-z-one",
    videoId: null,
    videoCanal: null,
    marca: "SmartGyro",
    modelo: "Z-One",
    precioEur: null, // SmartGyro no publica tarifa oficial; solo precios de distribuidor (verificado 20/10/2026)
    potenciaNominalW: 350,
    potenciaPicoW: 400,
    autonomiaKm: 28,
    autonomiaRealKm: 19,
    velocidadMaxKmh: 25,
    pesoKg: 17,
    cargaMaxKg: 100,
    tiempoCargaH: 3,
    bateriaWh: 288,
    frenos: "Eléctrico delantero + disco trasero",
    neumaticos: 'Neumáticos de 10"',
    certificadoDgt: true,
    foto: "/media/patinetes/smartgyro-z-one-1.webp",
    galeria: [
      {
        src: "/media/patinetes/smartgyro-z-one-2.webp",
        alt: "Smartgyro Z-One gris en ciudad",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm", "tiempoCargaH"],
    pros: [
      "Certificado DGT verificado: circula legal por vía pública",
      "Solo 17 kg, ligero para llevarlo a pulso o en transporte público",
      "Intermitentes delanteros y traseros de serie",
      "Carga rápida: 2-4 horas",
      "App smartGyro con bloqueo remoto antirrobo",
    ],
    contras: [
      "Autonomía real de ~19 km: solo para trayectos cortos",
      "Carga máxima de 100 kg",
      "Motor de 350 W: las cuestas pronunciadas le cuestan",
      "Sin suspensión",
      "Sin precio de nuevo verificado en España",
    ],
    veredicto:
      "El Z-One es el Smartgyro urbano por excelencia: 17 kg, certificado DGT, intermitentes y carga en 2-4 horas. Su autonomía de ~19 km reales lo limita al commuting corto, pero como patinete ligero y legal es una compra redonda.",
    fuenteNombre: "TransporTECO",
    fuenteUrl: "https://transporteco.es/en/patinete-el-ctrico-smartgyro-z-one-red-certificado-gris-transporteco",
    mantenimientoDIY: {
      actualizacionFirmware: "A través de la app oficial smartGyro (iOS/Android)",
      trucos: ["Revisa la presión de los neumáticos de 10\" cada dos semanas: con 17 kg se nota mucho si van blandos"],
    },
  },



  {
    id: "inokim-light-2-max",
    marca: "Inokim",
    modelo: "Light 2 Max",
    potenciaNominalW: 350,
    potenciaPicoW: 650,
    bateriaWh: 461,

    autonomiaKm: 40,
    velocidadMaxKmh: 34,
    pesoKg: 14,
    cargaMaxKg: 100,
    tiempoCargaH: 5,
    frenos: "Tambor delantero y trasero",
    neumaticos: 'Neumáticos 8.5"',






    foto: "/media/patinetes/inokim-light-2-max-1.webp",
    galeria: [
      { src: "/media/patinetes/inokim-light-2-max-2.webp", alt: "Inokim Light 2 Max plegado en una oficina", ancho: 1200, alto: 800 },
    ],
    precioEur: 1100, // 1.195 $ (tarifa oficial EE. UU.) ÷ 1,1225 (BCE 19/10/2026), redondeado a la centena

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 30,
    aprox: ["autonomiaRealKm", "precioEur"],
    pros: ["14 kg en la báscula con una batería de 461 Wh (36 V y 12,8 Ah): es la combinación que permite subirlo a un piso sin ascensor sin que el tramo a pie se convierta en lo peor del día", "Plegado queda en 95 × 25 × 36 cm y suma mástil telescópico y puños plegables, así que cabe bajo un escritorio o pegado a la pared del recibidor", "Freno de tambor en las dos ruedas y corte del motor al frenar: se frena con las dos manetas y sin discos expuestos a golpes contra bordillos o al meterlo en el maletero", "Unos 30 km reales por carga frente a los 40 km declarados dejan margen para una ida y vuelta de 12-15 km sin enchufarlo en destino, y la recarga completa pide 5 horas"],
    contras: ["Declara 34 km/h, es decir 9 km/h por encima del tope de 25 km/h de un VMP en España, y en su ficha no consta certificado DGT: tal cual viene, no encaja en la normativa vigente", "Sin suspensión y con ruedas neumáticas de 8,5 pulgadas, los adoquines y las juntas de dilatación se notan en pies y muñecas mucho más que en un patinete con rueda de 10 pulgadas", "La carga máxima se para en 100 kg y el motor de 350 W nominales —650 W de pico— va justo en rampas largas si el conductor se acerca a ese límite de peso", "Su protección frente al agua es IPX4, pensada para salpicaduras y no para aguaceros, y su posicionamiento es premium frente a urbanos de 350 W bastante más baratos"],
    veredicto:
      "El Light 2 Max apuesta todo a llevarse bien con las escaleras: 14 kg, batería de 461 Wh y unos 30 km reales para un motor de 350 W que declara 34 km/h. Es para quien combina el patinete con tren o autobús y lo guarda en casa o en la oficina cada día. No es para quien necesite un VMP legal en España sin limitarlo —supera el tope de 25 km/h y en la ficha no consta certificado DGT—, ni para rutas con baches constantes, donde sus ruedas de 8,5 pulgadas sin suspensión pasan factura.",
    fuenteNombre: "Electric Kicks",
    fuenteUrl: "https://www.electrickicks.com.au/products/inokim-light-2-2023-electric-scooter",
    mantenimientoDIY: {"actualizacionFirmware": "No documentada por el fabricante", "trucos": ["Mantén los neumáticos de 8,5 pulgadas entre 3 y 3,5 bares, el rango que indica Inokim en España: rodar bajo de presión es, según la propia marca, la primera causa de pinchazos en sus modelos", "Para cambiar una cámara no hay que desmontar la llanta entera: tanto la rueda delantera con tambor como la trasera con el motor se abren en dos mitades soltando sus tornillos, como describe el manual del Light 2", "Antes de salir, gira las ruedas con la mano y comprueba que ruedan libres sin que el tambor roce, y acciona el seguro del mecanismo de plegado: si una rueda se frena sola al girarla, el tambor está demasiado tenso"]},
  },
  {
    id: "inokim-quick-4-hero",
    marca: "Inokim",
    modelo: "Quick 4 Hero",
    potenciaNominalW: 600,
    potenciaPicoW: 1100,
    bateriaWh: 676,

    autonomiaKm: 50,
    velocidadMaxKmh: 25,
    pesoKg: 21.5,
    cargaMaxKg: 120,
    tiempoCargaH: 7,
    frenos: "Tambor delantero y trasero",
    neumaticos: 'Neumáticos 10"/2.5',






    foto: "/media/patinetes/inokim-quick-4-hero-1.webp",
    galeria: [
      { src: "/media/patinetes/inokim-quick-4-hero-2.webp", alt: "Inokim Quick 4 Hero en calle urbana", ancho: 1200, alto: 800 },
    ],
    precioEur: null, // la marca no publica tarifa oficial en su tienda oficial (verificado 20/10/2026)

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 35,
    aprox: ["autonomiaRealKm"],
    pros: ["Con 676 Wh en formato 52 V y 13 Ah rinde unos 35 km reales: dos o tres días de desplazamientos cortos sin depender del enchufe cada noche", "Admite 120 kg de carga máxima, un colchón poco común en patinetes de rueda de 10 pulgadas pensado para pilotos altos o con mochila pesada", "El doble freno de tambor, delantero y trasero, va sellado frente a la suciedad de la calle y evita el ritual de cambiar pastillas de disco cada pocos meses", "Plegado deja un bulto de 110 x 55 x 25 cm según su manual, así que cabe tumbado en un maletero o bajo una mesa pese a no ser un modelo ligero"],
    contras: ["Sus 21,5 kg se pagan en cada tramo de escaleras: plegado no equivale a portátil si tu ruta mezcla cercanías, metro y un tercer piso sin ascensor", "Recargar los 676 Wh lleva 7 horas con su cargador, sin opción rápida que salve una batería vacía a mitad de jornada", "Entre los 50 km de catálogo y los 35 km reales hay un 30 % de recorte, y rodando siempre a 25 km/h o cerca de los 120 kg de carga ese margen se estrecha más", "Antes de comprarlo de ocasión en España toca exigir el certificado DGT en papel, porque no figura acreditado en su ficha y de él depende su futuro en la vía pública"],
    veredicto:
      "El Hero se queda con la batería pequeña de la familia Quick 4 —676 Wh frente a los 832 Wh del Super— y aun así firma unos 35 km reales sobre 50 km declarados, con un motor de 600 W y picos de 1.100 W para pilotos de hasta 120 kg a 25 km/h. Encaja si haces trayectos urbanos medios, valoras los tambores cerrados y el chasis de aluminio 6061 T6 y lo guardas en planta baja o con ascensor. No encaja si lo vas a subir a pulso a trenes y escaleras a diario —son 21,5 kg— ni si necesitas recuperar carga en un par de horas, porque una recarga completa pide 7 horas.",
    fuenteNombre: "Inokim (manual oficial)",
    fuenteUrl: "https://dosya.epey.com/713210/inokim-quick-4-7054.pdf",
    mantenimientoDIY: {"actualizacionFirmware": "No documentada por el fabricante", "trucos": ["Deja las cubiertas 10\"/2,5 a unos 45 PSI —dentro del margen de 40 a 50 PSI del manual— y míralas antes de salir: con presión baja el Hero se aleja de sus 35 km reales y el flanco trabaja forzado en cada bordillo", "Si va a dormir más de dos meses, guárdalo a media carga, entre 15 y 25 °C, y hazle una carga completa al mes; el propio manual desaconseja dejarlo enchufado ya cargado o almacenado al 100 % durante meses", "Cada semana aprieta tornillería y comprueba que el cierre rojo de seguridad del plegado bloquea sin holgura; y cada seis meses, revisión en servicio técnico abriendo la tapa de la batería para revisar los sellados, como marca la guía del Quick 4"]},
  },
  {
    id: "inokim-light-3",
    marca: "Inokim",
    modelo: "Light 3",
    potenciaNominalW: null,
    potenciaPicoW: null,
    bateriaWh: null,

    autonomiaKm: null,
    autonomiaRealKm: null,
    velocidadMaxKmh: null,
    pesoKg: null,
    cargaMaxKg: null,
    tiempoCargaH: null,
    frenos: null,
    neumaticos: null,






    foto: "/media/patinetes/inokim-light-3-1.webp",
    galeria: [
      { src: "/media/patinetes/inokim-light-3-2.webp", alt: "Inokim Light 3 2026 con pantalla inteligente", ancho: 1200, alto: 800 },
    ],
    precioEur: null, // Inokim no publica tarifa oficial para este modelo (verificado 20/10/2026)

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    aprox: [],
    pros: [
      "Pantalla conectada con GPS integrado",
      "Sistema antirrobo Ghost Shield",
      "Certificación UL2272",
      "Novedad 2026 de Inokim",
    ],
    contras: [
      "Especificaciones técnicas aún no publicadas",
      "Sin precio oficial: Inokim no publica tarifa para este modelo",
      "Sin certificado DGT verificado",
    ],
    veredicto:
      "El Light 3 es la apuesta conectada de Inokim para 2026: GPS, pantalla inteligente y UL2272. Aún sin specs oficiales, apunta a redefinir el urbano premium.",
    fuenteNombre: "INOKIM (nota de prensa 29/04/2026)",
    fuenteUrl: "https://cop.einnews.com/pr_news/908726105/inokim-launches-the-world-s-first-electric-scooters-and-e-bikes-with-built-in-smart-connected-display",
    mantenimientoDIY: {
      actualizacionFirmware: "A través de la pantalla inteligente conectada",
      trucos: ["Modelo recién presentado: especificaciones pendientes de publicación oficial"],
    },
  },
  {
    id: "etwow-booster-plus-s",
    marca: "E-Twow",
    modelo: "Booster Plus S",
    potenciaNominalW: 500,
    potenciaPicoW: null,
    bateriaWh: 281,

    autonomiaKm: 40,
    velocidadMaxKmh: 30,
    pesoKg: 11.5,
    cargaMaxKg: 120,
    tiempoCargaH: 5,
    frenos: "KERS (freno eléctrico) + freno de pie",
    neumaticos: 'Neumáticos 8" macizos',






    foto: "/media/patinetes/etwow-booster-plus-s-1.webp",
    galeria: [
      { src: "/media/patinetes/etwow-booster-plus-s-2.webp", alt: "E-TWOW Booster Plus S plegado en el metro", ancho: 1200, alto: 800 },
    ],
    precioEur: null, // E-TWOW no publica tarifa oficial en su tienda para este modelo (verificado 20/10/2026)

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 20,
    aprox: ["autonomiaRealKm"],
    pros: ["Solo 11,5 kg con chasis de aluminio 6061 T6: se sube a pulso al tren o al maletero sin pedir ayuda", "Motor brushless de 500 W en la rueda delantera, pensado en la gama S2 para atacar cuestas urbanas de hasta 25 grados", "Plegado de 970 × 330 × 145 mm: queda plano contra la pared del recibidor o bajo un asiento del metro"],
    contras: ["Con 281 Wh, los 40 km anunciados se quedan en unos 20 km reales: da para una ida y vuelta corta, no para enlazar recados todo el día sin cargar", "Su punta de 30 km/h supera los 25 km/h permitidos a un VMP en España, así que para circular legal toca limitarlo y asumir que no es un patinete certificado tal cual viene", "Neumáticos macizos de 8 pulgadas: nunca pinchan, pero transmiten cada junta y cada adoquín pese a llevar suspensión delantera y trasera"],
    veredicto:
      "El Booster Plus S resume la obsesión con la que nació E-TWOW en Rumanía en 2013: hacer el patinete eléctrico más llevable posible. Hereda de la gama S2 el freno regenerativo KERS, las ruedas macizas de 8 pulgadas y el plegado rápido, y lo envuelve todo en 11,5 kg con 500 W. No busca autonomía —con unos 20 km útiles se queda corto fuera de la ciudad—, busca desaparecer plegado en el vagón y reaparecer justo en la puerta de la oficina.",
    fuenteNombre: "Electric Scooter Shop NZ",
    fuenteUrl: "https://www.electricscootershop.co.nz/products/e-twow-booster-plus-s-electric-scooter",
    mantenimientoDIY: {"actualizacionFirmware": "No documentada por el fabricante", "trucos": ["Las ruedas macizas de 8 pulgadas no llevan cámara: olvídate de pinchazos y de hinchar, a cambio de revisar su desgaste en la banda de rodadura", "Según el manual, cada mes toca lubricar los elementos móviles con spray de vaselina siliconada y comprobar que ningún tornillo se ha aflojado", "Si lo dejas parado, el manual pide cargar la batería al menos cada tres meses y guardarlo limpio y seco para no acortar su vida útil"]},
  },
  {
    id: "etwow-s2-booster-plus",
    marca: "E-Twow",
    modelo: "S2 Booster Plus",
    potenciaNominalW: 500,
    potenciaPicoW: null,
    bateriaWh: 270,

    autonomiaKm: 32,
    velocidadMaxKmh: 30,
    pesoKg: 10.9,
    cargaMaxKg: 100,
    tiempoCargaH: 2,
    frenos: "Eléctrico + mecánico",
    neumaticos: 'Neumáticos 8" macizos',






    foto: "/media/patinetes/etwow-s2-booster-plus-1.webp",
    galeria: [
      { src: "/media/patinetes/etwow-s2-booster-plus-2.webp", alt: "E-TWOW S2 Booster Plus en la calle", ancho: 1200, alto: 800 },
    ],
    precioEur: null, // E-TWOW no publica tarifa oficial en su tienda para este modelo (verificado 20/10/2026)

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 20,
    aprox: ["autonomiaRealKm"],
    pros: [
      "10,9 kg: de los más ligeros del mercado",
      "Carga rápida en 1,5-2 h",
      "500 W con buena aceleración",
    ],
    contras: [
      "~20 km de autonomía real",
      "30 km/h: supera el límite VMP",
      "Sin suspensión",
    ],
    veredicto:
      "El S2 Booster Plus es pura portabilidad: 10,9 kg y carga en menos de 2 horas. Para trayectos cortos y multimodales no tiene rival en ligereza.",
    fuenteNombre: "AliTools (ficha AliExpress)",
    fuenteUrl: "https://alitools.io/en/showcase/original-e-twow-s2-booster-plus-s-36v-7-5ah-battery-electric-scooter-500w-kick-scooter-2045091540",
    mantenimientoDIY: {
      actualizacionFirmware: "No documentada por el fabricante",
      trucos: ["Con 10,9 kg es de los pocos que se suben al bus sin esfuerzo: aprovecha el plegado en 3 puntos"],
    },
  },
  {
    id: "etwow-booster-sport",
    marca: "E-Twow",
    modelo: "Booster Sport",
    potenciaNominalW: 500,
    potenciaPicoW: 650,
    bateriaWh: 378,

    autonomiaKm: 32,
    velocidadMaxKmh: 40,
    pesoKg: 10.9,
    cargaMaxKg: 100,
    tiempoCargaH: 2,
    frenos: "Regenerativo delantero + freno de emergencia trasero",
    neumaticos: 'Neumáticos 8" macizos',






    foto: "/media/patinetes/etwow-booster-sport-1.webp",
    galeria: [
      { src: "/media/patinetes/etwow-booster-sport-2.webp", alt: "E-TWOW Booster Sport con pantalla LCD", ancho: 1200, alto: 800 },
    ],
    precioEur: null, // E-TWOW no publica tarifa oficial en su tienda para este modelo (verificado 20/10/2026)

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 22,
    aprox: ["autonomiaRealKm"],
    pros: ["Solo 10,9 kg para una batería de 378 Wh: se sube a un piso o a un tren sin convertirlo en un suplicio", "650 W de pico en la rueda delantera para arrancar con brío pese a admitir como máximo 100 kg de carga", "Pantalla LCD a color de 30 × 26 mm con velocidad, batería, distancia y temperatura ambiente"],
    contras: ["Sus 40 km/h de punta impiden usarlo como VMP en España y en la ficha no consta certificado DGT", "La autonomía útil se queda en unos 22 km, diez menos que los 32 km declarados en la ficha técnica", "Los neumáticos macizos de 8 pulgadas evitan pinchazos, pero transmiten cada junta y adoquín al manillar"],
    veredicto:
      "El Booster Sport es la lectura deportiva de la fórmula E-TWOW: chasis plegable de aluminio, menos de 11 kg y empuje de sobra para el último tramo urbano, a cambio de renunciar a circular encajado en la categoría VMP española.",
    fuenteNombre: "Electric Scooter Guides",
    fuenteUrl: "https://www.electricscooterguides.com/reviews/e-twow-booster-sport",
    mantenimientoDIY: {"actualizacionFirmware": "No documentada por el fabricante", "trucos": ["El crucero se activa manteniendo la misma velocidad durante 5 segundos: úsalo en rectas llanas y el freno regenerativo delantero hará el resto en las bajadas suaves"]},
  },
  {
    id: "gotrax-rival",
    marca: "GOTRAX",
    modelo: "Rival",
    potenciaNominalW: 250,
    potenciaPicoW: null,
    bateriaWh: 187,

    autonomiaKm: 20,
    velocidadMaxKmh: 25,
    pesoKg: 12,
    cargaMaxKg: 100,
    tiempoCargaH: 6.5,
    frenos: "Disco trasero + EABS",
    neumaticos: 'Neumáticos 8.5" de aire',






    foto: "/media/patinetes/gotrax-rival-1.webp",
    galeria: [
      { src: "/media/fotos-reales/gotrax-rival/gotrax-rival-real-0.webp", alt: "Gotrax Rival plegado en una oficina", ancho: 1200, alto: 800 },
    ],
    precioEur: null, // la marca no publica tarifa oficial en su tienda oficial (verificado 20/10/2026)

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 14,
    aprox: ["autonomiaRealKm"],
    pros: ["Solo 12 kg en orden de marcha: se pliega y se sube a pulso a un piso, a la oficina o al maletero sin que el último tramo se haga cuesta arriba", "Las ruedas neumáticas de 8,5 pulgadas filtran juntas, tapas y firme irregular mejor que las macizas que montan muchos rivales de acceso", "Doble frenada con disco trasero y EABS electrónico, una combinación más completa que el único freno que suele verse en patinetes de 250 W baratos", "Velocidad contenida a 25 km/h y batería de 187 Wh con certificación UL2272, pensada para un uso urbano VMP sin disparar el peso"],
    contras: ["Los 187 Wh se traducen en unos 14 km reales frente a los 20 km anunciados: una ida y vuelta de más de 7 km por sentido ya exige cargar en destino", "El motor nominal de 250 W pierde empuje en rampas y con conductores que se acercan al límite de 100 kg de carga máxima", "La recarga completa tarda 6,5 horas, así que quedarse sin batería por la mañana no se resuelve con una pausa corta", "Sin suspensión declarada y con rueda de 8,5 pulgadas, sufre más en baches, rejillas y asfalto roto que un modelo con neumáticos de 10 pulgadas"],
    veredicto:
      "Con 12 kg, motor de 250 W y batería de 187 Wh, el Rival cubre unos 14 km reales a 25 km/h: suficiente para un trayecto corto y plano o para enlazar con metro y bus sin cargar con un patinete pesado. Es para quien empieza o hace pocos kilómetros al día; no es para quien tenga cuestas serias, haga ida y vuelta largas sin poder cargar 6,5 horas en destino o supere con holgura los 100 kg de carga máxima.",
    fuenteNombre: "Plettro (ficha de producto)",
    fuenteUrl: "https://plettro.com/products/gotrax-rival-adult-commuting-electric-scooters-max-load-220lbs-foldable-electric-scooter",
    mantenimientoDIY: {"actualizacionFirmware": "No documentada por el fabricante", "trucos": ["Mantén las dos ruedas neumáticas de 8,5 pulgadas a 50 PSI (340 kPa) y revísalas cada mes: con presión baja el Rival pierde parte de sus ya justos 14 km reales y aumenta el riesgo de pinchazo", "Usa solo el cargador de 42 V y 1,5 A previsto para el Rival y su gemelo GXL V2, no el de 2 A de un XR Ultra o un G4: un cargador equivocado puede dañar la batería de 36 V y 5,2 Ah", "No lo dejes descargado a cero ni enchufado días enteros tras las 6,5 horas de carga: cárgalo tras trayectos largos y guárdalo en interior seco para cuidar la batería de 187 Wh"]},
  },
  {
    id: "gotrax-g5",
    marca: "GOTRAX",
    modelo: "G5",
    potenciaNominalW: 500,
    potenciaPicoW: null,
    bateriaWh: 461,

    autonomiaKm: 45,
    velocidadMaxKmh: 32,
    pesoKg: 20,
    cargaMaxKg: 120,
    tiempoCargaH: 5.5,
    frenos: "Doble tambor + freno electromagnético",
    neumaticos: 'Neumáticos 10" de aire',






    foto: "/media/patinetes/gotrax-g5-1.webp",
    galeria: [
      { src: "/media/fotos-reales/gotrax-g5/gotrax-g5-real-0.webp", alt: "Gotrax G5 con suspensión delantera", ancho: 1200, alto: 800 },
    ],
    precioEur: 500, // 525 $ (tarifa oficial EE. UU.) ÷ 1,1225 (BCE 19/10/2026), redondeado a la centena

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 30,
    aprox: ["autonomiaRealKm", "precioEur"],
    pros: ["Batería de 461 Wh que en uso real se queda en unos 30 km, suficiente para no cargar cada noche si tu trayecto total ronda los 15 km", "Suspensión delantera combinada con neumáticos de aire de 10\" que absorben juntas y adoquines que en su hermano sin suspensión se notan en las muñecas", "Frenada con doble tambor más freno electromagnético: tienes freno mecánico en ambas ruedas y retención del motor al soltar", "Motor de 500 W y carga máxima de 120 kg que lo hacen viable para conductores corpulentos que en modelos de 350 W se quedan cortos en rampas"],
    contras: ["Sus 32 km/h superan el límite de 25 km/h para VMP en España y la ficha figura sin certificado DGT, así que tal cual viene no encaja en la normativa vigente", "Los 20 kg se notan en cuanto hay un tramo de escaleras o un andén alto: plegado sigue siendo un bulto pesado de llevar a una mano", "Recargar la batería de 461 Wh lleva 5,5 horas, por lo que una carga olvidada por la noche no se resuelve en una pausa corta antes de salir", "Sin app conectada ni suspensión trasera: dependes de la pantalla LED del manillar para todo y los baches secos llegan íntegros a la rueda posterior"],
    veredicto:
      "Con 500 W, 461 Wh y unos 30 km reales frente a los 45 km anunciados, el G5 encaja si tu ida y vuelta diaria se queda en 15-20 km y quieres suspensión delantera en un Gotrax de ruedas de 10 pulgadas. No es para ti si necesitas circular como VMP legal en España —declara 32 km/h y la ficha no aporta certificado DGT— ni si vas a subirlo a pulso a diario, porque pesa 20 kg.",
    fuenteNombre: "Tensela (ficha técnica Gotrax G5)",
    fuenteUrl: "https://tensela.tech/gotrax-g5-electric-scooter-review/",
    mantenimientoDIY: {"actualizacionFirmware": "No documentada por el fabricante", "trucos": ["Activa el control de crucero del G5 manteniendo pulsado el acelerador derecho durante 8 segundos; se cancela tocando de nuevo el acelerador o la maneta de freno, como indica su manual", "Antes de plegarlo, apágalo, libera el cierre del mástil y engancha el gancho de la dirección a la hebilla del guardabarros trasero: es el punto que evita que se abra al transportarlo con sus 20 kg", "Controla la presión de los neumáticos de aire de 10\" con el medidor que Gotrax incluye en la caja del G5; rodar bajo de presión recorta los ya ajustados 30 km reales y desgasta antes la banda de rodadura"]},
  },
  {
    id: "turboant-m10",
    marca: "TurboAnt",
    modelo: "M10",
    potenciaNominalW: 350,
    potenciaPicoW: null,
    bateriaWh: 270,

    autonomiaKm: 29,
    velocidadMaxKmh: 32,
    pesoKg: 13.5,
    cargaMaxKg: 100,
    tiempoCargaH: 5,
    frenos: "Disco trasero + freno electrónico",
    neumaticos: 'Neumáticos 10" de aire con cámara',






    foto: "/media/patinetes/turboant-m10-1.webp",
    galeria: [
      { src: "/media/patinetes/turboant-m10-2.webp", alt: "TurboAnt M10 en un carril bici", ancho: 1200, alto: 800 },
    ],
    precioEur: 400, // 449,98 $ (tarifa oficial EE. UU.) ÷ 1,1225 (BCE 19/10/2026), redondeado a la centena

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 20,
    aprox: ["autonomiaRealKm", "precioEur"],
    pros: ["Pesa 13,5 kg y plegado queda en 107 x 45 x 39,3 cm: se sube por las escaleras de un piso sin ascensor y cabe en un maletero pequeño, sin la pelea diaria de los urbanos de 18-20 kg", "Las ruedas neumaticas de 10 x 2,125 pulgadas con camara absorben juntas y adoquin ligero sin llevar suspension, justo lo contrario que las macizas de 8,5 pulgadas habituales en esta gama, que transmiten cada golpe al manillar", "El motor trasero de 350 W empuja en vez de tirar: Electric Wheelers mide 5,4 segundos de 0 a 15 mph, frente a los 7,3 segundos del X7 Pro con el que comparte motor, y la bateria en la plataforma baja el centro de gravedad al maniobrar", "Manteniendo el gatillo en la misma posicion 6 segundos entra el control de crucero, un detalle raro en un patinete de 270 Wh que descansa la mano en avenidas largas; los modos Eco, intermedio y Sport se eligen desde la pantalla LED"],
    contras: ["Declara 32 km/h cuando un VMP en España esta limitado a 25 km/h y en su ficha no consta certificado DGT: tal cual sale de la caja no es la compra para moverte en regla", "La autonomia util se queda en unos 20 km frente a los 29 km anunciados, la bateria de 270 Wh no se puede extraer para cargarla en casa y reponerla entera lleva 5 horas de enchufe", "Sin suspension y con camara en las ruedas: en firme roto todo el trabajo lo hace el aire del neumatico de 10 pulgadas, y un clavo o un cristal se convierte en pinchazo y desmontaje en ruta", "Frena con un unico disco trasero de pinza pequeña mas el freno electronico y en subidas el motor de 350 W pierde velocidad hasta obligar a ayudar con el pie en las pruebas publicadas; con carga maxima de 100 kg, un conductor corpulento con mochila ya va al limite"],
    veredicto:
      "Con 13,5 kg, motor trasero de 350 W y bateria de 270 Wh, el TurboAnt M10 es un patinete de ultima milla para trayectos llanos de hasta sus 20 km reales, apoyado en ruedas neumaticas de 10 pulgadas que hacen de suspension. Es para quien lo sube a un piso sin ascensor o lo pliega en el maletero a diario; no es para circular en regla como VMP en España -declara 32 km/h y sin certificado DGT en su ficha- ni para barrios con cuestas, donde ese motor se queda sin fuelle.",
    fuenteNombre: "Electric Wheelers (review TurboAnt M10)",
    fuenteUrl: "https://electricwheelers.com/turboant-m10-review/",
    mantenimientoDIY: {"actualizacionFirmware": "TurboAnt no documenta actualizacion de firmware ni app oficial para el M10 en su manual: los 3 modos de velocidad y el control de crucero se gestionan desde la pantalla LED y el gatillo del manillar, sin emparejamiento con el movil", "trucos": ["Manten las ruedas de 10 pulgadas entre 34 y 36 psi (234-248 kPa), la presion que fija el manual del M10: por debajo, el motor de 350 W pierde empuje, la autonomia cae por debajo de los 20 km reales y crece el riesgo de pellizcar la camara", "Tras cada carga cierra bien la tapa del puerto lateral izquierdo de la plataforma antes de rodar: queda expuesto a salpicaduras y es la via de entrada de agua y suciedad hacia la bateria integrada y no extraible de 270 Wh", "Si aparece holgura en la direccion, para y reaprieta los tornillos de la palanca de plegado del mastil con la llave Allen incluida: el manual lo marca como ajuste periodico y ese punto soporta los 13,5 kg en cada porte; ademas, el arranque es con impulso, hay que empujar con el pie hasta 3 km/h para que el motor enganche"]},
  },
  {
    id: "turboant-x7",
    marca: "TurboAnt",
    modelo: "X7",
    potenciaNominalW: 350,
    potenciaPicoW: null,
    bateriaWh: 230,

    autonomiaKm: 25,
    velocidadMaxKmh: 30,
    pesoKg: null,
    cargaMaxKg: 125,
    tiempoCargaH: 5,
    frenos: "Disco + freno de pie trasero + electrónico",
    neumaticos: 'Neumáticos 8.5" tubeless de aire',






    foto: "/media/patinetes/turboant-x7-1.webp",
    galeria: [
      { src: "/media/patinetes/turboant-x7-2.webp", alt: "TurboAnt X7 con batería extraíble", ancho: 1200, alto: 800 },
    ],
    precioEur: 400, // 449,99 $ (tarifa oficial EE. UU.) ÷ 1,1225 (BCE 19/10/2026), redondeado a la centena

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 17,
    aprox: ["autonomiaRealKm", "precioEur"],
    pros: ["La batería de 36 V y 6,4 Ah (230 Wh) va alojada en el mástil y sale hacia arriba sin desmontar la base: la cargas separada del patinete y una segunda unidad, de apenas 1,5 kg según Rider Guide, cabe en la mochila como reserva", "Admite 125 kg de carga máxima, 25 kg más que los 100 kg de un Xiaomi Mi Scooter Pro 2, así que no se queda corto con conductores corpulentos o con mochila cargada", "Suma tres vías de detención que se respaldan entre sí: disco mecánico trasero, freno de pie pisando el guardabarros y freno electrónico regenerativo en la rueda delantera", "Sus neumáticos de 8,5 pulgadas son neumáticos tubeless, sin cámara que pellizcar, y son lo único que filtra las irregularidades en un chasis sin suspensión"],
    contras: ["Con una sola batería se queda en unos 17 km reales frente a los 25 km oficiales: para ida y vuelta larga toca llevar la batería de repuesto o cargar 5 horas entre trayectos", "Su velocidad máxima de 30 km/h supera el límite de 25 km/h de los VMP en España y en la ficha no consta certificado DGT, así que no es un modelo listo para circular aquí sin más", "No tiene suspensión delante ni detrás: en adoquines, rejillas y baches todo el golpe llega a las muñecas y solo lo suavizan los neumáticos de 8,5 pulgadas", "La batería extraíble no tiene cerradura, como señaló Electrek: si lo dejas atado en la calle hay que llevársela encima, porque es la pieza más cara y la más fácil de sustraer"],
    veredicto:
      "Con motor de 350 W, batería extraíble de 230 Wh y unos 17 km reales frente a los 25 km anunciados, el X7 original es un patinete de última milla para quien no tiene enchufe en el garaje y prefiere subir solo la batería a cargarla a casa o a la oficina. Encaja en trayectos cortos y llanos, también si pesas más de lo habitual, porque admite hasta 125 kg. No encaja si buscas un VMP para circular en España tal cual —su punta es de 30 km/h y en la ficha no consta certificado DGT—, si haces más de 17 km sin recargar o si tu ruta tiene firme roto, porque no lleva suspensión.",
    fuenteNombre: "Make Tech Easier (review TurboAnt X7)",
    fuenteUrl: "https://maketecheasier.com/turboant-x7-escooter-review/",
    mantenimientoDIY: {"actualizacionFirmware": "Sin actualizaciones de firmware documentadas por TurboAnt para el X7 original; los ajustes disponibles se hacen desde la propia pantalla con los parámetros P0 (mph/km/h), P1 (control de crucero) y P2 (arranque a patada)", "trucos": ["Mantén los tubeless de 8,5 pulgadas a 50 PSI (3,4 bar), la presión indicada para el X7 original: por debajo de eso la autonomía de los 230 Wh cae y aumenta el riesgo de llantazo, y no uses la presión de 32-35 PSI de los X7 Pro y Max, que montan otra rueda", "No agotes la batería del mástil hasta el final si quieres que dure: cárgala extraída en interior entre 10 y 35 °C y, si vas a guardarla una temporada, déjala cargada, porque su tiempo de almacenamiento declarado tras una carga completa es de 3 meses", "El control de crucero viene activado y entra solo tras mantener el acelerador 6 segundos: desactívalo en el parámetro P1 si haces trayectos con paradas constantes, porque en ciudad puede sorprenderte al soltar y volver a dar gas"]},
  },
  {
    id: "razor-e-prime",
    marca: "Razor",
    modelo: "E Prime",
    potenciaNominalW: 250,
    potenciaPicoW: null,
    bateriaWh: null,

    autonomiaKm: 12,
    velocidadMaxKmh: 24,
    pesoKg: 9.8,
    cargaMaxKg: 80,
    tiempoCargaH: 3.5,
    frenos: "Electrónico de pulgar + freno de pie trasero",
    neumaticos: 'Neumáticos 8" macizos antipinchazos',






    foto: "/media/patinetes/razor-e-prime-1.webp",
    galeria: [
      { src: "/media/patinetes/razor-e-prime-2.webp", alt: "Razor E Prime plegado", ancho: 1200, alto: 800 },
    ],
    precioEur: null, // Razor no publica tarifa oficial vigente para este modelo (verificado 20/10/2026)

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 9,
    aprox: ["autonomiaRealKm"],
    pros: ["Sus 9,8 kg con estructura de aluminio se notan al subirlo a pulso a un vagón, guardarlo bajo una mesa o meterlo en un maletero pequeño", "El cierre de plegado con rosca anti-traqueteo evita las holguras y los ruidos metálicos típicos al rodar con otros plegables ligeros", "Las ruedas macizas de 8 pulgadas eliminan pinchazos y controles de presión: es montar, empujar y salir, sin kit antipinchazos en la mochila", "Recarga completa en 3,5 horas, así que una mañana en la oficina o una tarde en casa basta para dejarlo listo para el trayecto siguiente"],
    contras: ["Entre los 12 km anunciados y los 9 km reales queda solo margen para un último kilómetro: una ida larga ya obliga a llevar el cargador encima", "La carga máxima de 80 kg deja fuera a muchos adultos, y el motor de 250 W se queda muy justo en rampas de garaje o calles con pendiente", "Rueda maciza de 8 pulgadas y ninguna suspensión: en adoquines, juntas de dilatación y asfalto roto transmite cada golpe a tobillos y muñecas", "No hay velocímetro ni luz delantera de serie: la información se reduce a un indicador LED de batería de cinco niveles en el tubo de dirección"],
    veredicto:
      "Con 9,8 kg, 24 km/h y una autonomía real de unos 9 km, el E Prime está pensado para una sola cosa: bajar del tren o del autobús y cubrir a pulso el último tramo sin cargar con un patinete pesado. Encaja si pesas menos de 80 kg, circulas por llano y tu trayecto útil cabe en esos 9 km; no encaja si necesitas ida y vuelta sin recargar, subes cuestas a diario o buscas equipamiento y confort de patinete grande.",
    fuenteNombre: "Jansonic (ficha Razor E Prime)",
    fuenteUrl: "https://jansonic.com/products/razor-e-prime-electric-scooter",
    mantenimientoDIY: {"actualizacionFirmware": "Razor no documenta actualización de firmware ni aplicación móvil para el E Prime en su manual de usuario", "trucos": ["Arranque obligatorio a patada: el motor solo entra si ya ruedas a 5 km/h o más al pulsar el acelerador de pulgar; si aceleras desde parado, no responderá y parecerá una avería", "Si aparece traqueteo en la dirección, no fuerces el plegado: gira la rosca anti-traqueteo en sentido antihorario para plegar y apriétala bien tras desplegar, que es el ajuste que el manual señala para ese ruido", "Lee el LED de cinco niveles antes de salir: con solo amarillo y rojo el manual pide cargar cuanto antes, y con solo el rojo, parar y cargar de inmediato en vez de apurar la batería de 36 V"]},
  },
  {
    id: "razor-e-prime-air",
    marca: "Razor",
    modelo: "E Prime Air",
    potenciaNominalW: 250,
    potenciaPicoW: null,
    bateriaWh: 118,

    autonomiaKm: 16,
    velocidadMaxKmh: 24,
    pesoKg: 9.9,
    cargaMaxKg: 80,
    tiempoCargaH: null,
    frenos: "Eléctrico + freno de pie trasero",
    neumaticos: 'Delantero 8" de aire + trasero macizo',






    foto: "/media/patinetes/razor-e-prime-air-1.webp",
    galeria: [
      { src: "/media/patinetes/razor-e-prime-air-2.webp", alt: "Razor E Prime Air en un parque", ancho: 1200, alto: 800 },
    ],
    precioEur: null, // Razor no publica tarifa oficial vigente para este modelo (verificado 20/10/2026)

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 11,
    aprox: ["autonomiaRealKm"],
    pros: ["Con 9,9 kg pesa menos que la mayoría de bicicletas plegables: se sube a hombro por las escaleras del metro y cabe de pie junto a la mesa sin estorbar", "La rueda delantera neumática de 8 pulgadas, la que da nombre a la versión Air, filtra juntas y adoquines que el E Prime original, con rueda maciza, transmitía directos a las muñecas", "Su velocidad punta de 24 km/h aprovecha casi todo lo permitido a un VMP en España sin pasarse del límite, algo poco habitual en patinetes de menos de 10 kg", "El motor brushless de 250 W va integrado en la rueda trasera y el chasis de aluminio se pliega con mecanismo antitraqueteo: sin cadena que engrasar y con mantenimiento mecánico mínimo"],
    contras: ["La batería de 118 Wh se queda en unos 11 km reales frente a los 16 km declarados: si tu trayecto de ida supera los 5 km, vivirás pendiente del cargador", "El límite de 80 kg para rendir al máximo deja fuera a buena parte de los adultos; con más peso, la autonomía y la respuesta del motor de 250 W caen aún más", "Detrás manda una rueda maciza de 8 pulgadas y no hay suspensión: en aceras rugosas, el confort que se gana delante se pierde en los talones", "Llega sin luz, timbre ni reflectantes de serie, así que rodar al anochecer exige comprar e instalar accesorios que otros patinetes urbanos ya traen montados"],
    veredicto:
      "El E Prime Air es un patinete de último tramo en estado puro: 250 W, 24 km/h y solo 9,9 kg a cambio de unos 11 km reales por carga. Encaja si vives a menos de 5 km del trabajo o lo combinas con el metro y necesitas cargarlo a pulso a diario. Si pesas más de 80 kg, tu ruta tiene cuestas o buscas autonomía para todo el día, se te quedará corto desde la primera semana.",
    fuenteNombre: "Canadian Tire (ficha Razor E Prime Air)",
    fuenteUrl: "https://www.canadiantire.ca/en/pdp/razor-e-prime-air-electric-scooter-24km-h-black-1840425p.html",
    mantenimientoDIY: {"actualizacionFirmware": "No documentada por el fabricante: Razor no publica app ni actualizaciones de firmware para el E Prime Air; el estado de la batería se lee en el indicador LED de 5 niveles del tubo de dirección", "trucos": ["Rueda delantera neumática de 8 pulgadas a 60 PSI, el valor grabado en el flanco e indicado en el manual: revísala con manómetro cada pocas salidas, porque con la presión baja el propio manual advierte de un menor tiempo de uso y se pierde el confort que distingue a la versión Air; la trasera es maciza y no se hincha", "Arranque por impulso: el motor de 250 W no actúa desde parado, hay que empujar con el pie hasta coger velocidad antes de accionar la palanca de pulgar; insistir en parado solo descarga la pequeña batería de 118 Wh", "Antes de cada salida, reaprieta la abrazadera del manillar con la llave Allen incluida y comprueba el freno de pie trasero sobre el guardabarros: son, junto a la presión delantera, los controles que el manual oficial pide verificar antes de rodar"]},
  },
  {
    id: "hiboy-nex3",
    marca: "Hiboy",
    modelo: "NEX3",
    potenciaNominalW: 350,
    potenciaPicoW: null,
    bateriaWh: 270,

    autonomiaKm: 27,
    velocidadMaxKmh: 30,
    pesoKg: 13.5,
    cargaMaxKg: 100,
    tiempoCargaH: 6.5,
    frenos: "Electrónico ABS + disco trasero",
    neumaticos: 'Neumáticos 8.5" macizos',






    foto: "/media/patinetes/hiboy-nex3-1.webp",
    galeria: [
      { src: "/media/patinetes/hiboy-nex3-2.webp", alt: "Hiboy NEX3 en la calle", ancho: 1200, alto: 800 },
    ],
    precioEur: null, // Hiboy ya no comercializa este modelo en su tienda oficial (verificado 20/10/2026)

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 18,
    aprox: ["autonomiaRealKm"],
    pros: ["Sus 13,5 kg lo sitúan como el Hiboy más ligero de la gama: plegado mide unos 110 × 49,5 × 41 cm y se puede llevar con una mano en un transbordo sin que el brazo acabe muerto", "Las ruedas macizas de 8,5 pulgadas eliminan pinchazos, cámara y comprobaciones de presión, el mantenimiento que más tiempo quita en un urbano con neumáticos de aire", "Frena con dos sistemas independientes, E-ABS electrónico delante y disco trasero, cada uno con su propia maneta, una redundancia poco habitual en patinetes de 270 Wh", "La app de Hiboy permite bloquearlo, tocar los ajustes de velocidad y recibir actualizaciones, algo que rivales de su época como el Turboant M10 no ofrecían de serie"],
    contras: ["Declara 30 km/h, por encima del límite de 25 km/h de un VMP en España, y en su ficha no consta certificado DGT, así que tal cual no es la compra para circular en regla", "La autonomía anunciada de 27 km se queda en unos 18 km reales según esta ficha, y reponer los 270 Wh lleva 6,5 horas: mucho enchufe para tan poca batería", "Sin suspensión y con ruedas macizas, cada junta de dilatación y cada adoquín llega directo al manillar; las pruebas del modelo coinciden en que la calidad de marcha es su punto más flojo", "El motor de 350 W acelera con calma y en pendientes de más del 10 % pierde ritmo y devora batería, y su carga máxima de 100 kg deja poco margen a conductores corpulentos con mochila"],
    veredicto:
      "Para trayectos urbanos cortos que quepan en sus 18 km reales, el NEX3 convence por sus 13,5 kg, su motor de 350 W y unas ruedas macizas de 8,5 pulgadas que te quitan los pinchazos de la cabeza. Es para quien combina patinete con metro o tren y circula por asfalto liso; no es para quien necesite un VMP en regla en España —declara 30 km/h y no consta certificado DGT en su ficha— ni para rutas con cuestas o firme roto, donde la ausencia de suspensión se paga en las muñecas.",
    fuenteNombre: "Manual oficial Hiboy NEX3 (PDF)",
    fuenteUrl: "https://manuals.plus/hiboy/nex3-electric-scooter-8-5-inch-solid-tires-manual",
    mantenimientoDIY: {"actualizacionFirmware": "Desde la app de Hiboy se empareja el NEX3 para bloquearlo y desbloquearlo, ajustar los parámetros de velocidad y aplicar las actualizaciones de firmware que la marca publique para el modelo", "trucos": ["Si el manillar o el mástil cogen holgura en marcha, reaprieta los tornillos del mecanismo de plegado como indica su manual: es el punto que soporta los 13,5 kg cada vez que lo llevas colgado del mástil en el metro", "Ajusta el disco trasero con la llave Allen desde la pinza, acortando el cable si frena flojo y alargándolo si va demasiado tenso; el freno electrónico delantero rinde según el nivel de batería, así que deja siempre la maneta del disco localizada", "Cuida la batería de 270 Wh cargándola tras cada uso y, si el NEX3 va a estar parado, recárgala al menos cada dos meses y guárdalo en un sitio seco entre 14 y 40 °C, como prescribe su manual, para no acortar su vida útil"]},
  },
  {
    id: "hiboy-nex5",
    marca: "Hiboy",
    modelo: "NEX5",
    potenciaNominalW: 350,
    potenciaPicoW: null,
    bateriaWh: 540,

    autonomiaKm: 55,
    velocidadMaxKmh: 30,
    pesoKg: 18.6,
    cargaMaxKg: 100,
    tiempoCargaH: 9,
    frenos: "Electrónico + disco trasero",
    neumaticos: 'Neumáticos 8.5" macizos',






    foto: "/media/patinetes/hiboy-nex5-1.webp",
    galeria: [
      { src: "/media/patinetes/hiboy-nex5-2.webp", alt: "Hiboy NEX5 con doble batería", ancho: 1200, alto: 800 },
    ],
    precioEur: null, // Hiboy ya no comercializa este modelo en su tienda oficial (verificado 20/10/2026)

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 35,
    aprox: ["autonomiaRealKm"],
    pros: ["Las dos baterías extraíbles de 270 Wh se pueden sacar y cargar por separado fuera del patinete, así no hace falta subir los 18,6 kg completos hasta un enchufe", "Con las dos montadas reúne 540 Wh y se queda en torno a 35 km reales, margen que un urbano de batería única de 270-360 Wh no alcanza sin recargar a mitad de jornada", "Las ruedas macizas de 8,5 pulgadas eliminan el pinchazo como avería posible, y la doble suspensión trasera absorbe parte de la sequedad propia de ese tipo de neumático", "Desde la app de Hiboy se consulta el nivel de cada batería y se bloquea el NEX5, un extra útil cuando las baterías van sueltas y el patinete queda aparcado en la calle"],
    contras: ["Declara 30 km/h, por encima del tope de 25 km/h de un VMP en España, y en la ficha no consta certificado DGT, así que tal cual viene no resuelve la circulación legal aquí", "Pesa 18,6 kg para llevar ruedas de solo 8,5 pulgadas y admite 100 kg como máximo: plegarlo no lo convierte en ligero para escaleras, andenes o maleteros pequeños", "Reponer las dos baterías pide unas 9 horas —entre 8 y 10 horas según la guía de Levy Electric—, el doble de gestión que un modelo que se enchufa y se olvida", "El neumático macizo transmite juntas, rejillas y bordillos al manillar pese a la suspensión trasera, y en mojado ofrece menos agarre que una rueda neumática de su tamaño"],
    veredicto:
      "Con dos módulos de 270 Wh que suman 540 Wh y unos 35 km útiles frente a los 55 km anunciados, el NEX5 estira el trayecto diario sin recurrir a una batería fija enorme, a cambio de cargar con 18,6 kg y un motor de 350 W justo. Encaja para quien puede cargar las baterías sueltas en casa o en el trabajo y hace rutas urbanas largas en llano; no encaja para quien necesite circular como VMP legal en España —marca 30 km/h y en la ficha no consta certificado DGT— ni para quien lo suba a pulso a un piso sin ascensor.",
    fuenteNombre: "Electric Scooter Adults (ficha Hiboy NEX5)",
    fuenteUrl: "https://electricscooteradults.com/hiboy_nex5_electric_scooter_19_mph_34_miles_long_range.html",
    mantenimientoDIY: {"actualizacionFirmware": "App Hiboy para NEX5: nivel de las dos baterías, bloqueo, estadísticas de ruta y ajustes de conducción; sin actualizaciones de firmware descargables documentadas por separado", "trucos": ["Para un recado corto deja una batería en casa y rueda solo con una de 270 Wh: pierdes autonomía pero quitas peso de la plataforma y el conjunto se nota menos torpe al plegarlo", "Carga cada batería por su cuenta fuera del chasis y alterna cuál va delante en cada salida: repartes ciclos entre los dos módulos de 270 Wh en vez de castigar siempre el mismo", "Comprueba que cada batería entra y sale sin forzar el raíl antes de un trayecto largo: en las reseñas del NEX5 se repite la queja de baterías que se quedan atascadas, y forzarla en la calle puede dejarte sin la segunda mitad de los 540 Wh"]},
  },
  {
    id: "iscooter-i10-pro",
    marca: "iScooter",
    modelo: "i10 Pro",
    potenciaNominalW: 600,
    potenciaPicoW: 800,
    bateriaWh: 720,

    autonomiaKm: 55,
    velocidadMaxKmh: 25,
    pesoKg: 24.45,
    cargaMaxKg: 120,
    tiempoCargaH: 7,
    frenos: "E-ABS + tambor trasero",
    neumaticos: 'Neumáticos 10" de aire',






    foto: "/media/patinetes/iscooter-i10-pro-1.webp",
    galeria: [
      { src: "/media/patinetes/iscooter-i10-pro-2.webp", alt: "iScooter i10 Pro con doble suspensión", ancho: 1200, alto: 800 },
    ],
    precioEur: null, // sin tarifa oficial publicada en ningún mercado (verificado 20/10/2026)

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 38,
    aprox: ["autonomiaRealKm"],
    pros: ["Su batería de 48 V y 15 Ah suma 720 Wh y deja unos 38 km reales, margen de sobra para ir y volver del trabajo sin buscar un enchufe a mitad de jornada", "Los 600 W nominales, con picos de 800 W, mueven con solvencia a conductores de hasta 120 kg, el máximo que admite este i10 Pro", "Los amortiguadores de muelle delante y detrás, junto a las ruedas neumáticas de 10 pulgadas, digieren bordillos rebajados y adoquín mucho mejor que un chasis rígido", "La versión europea viene limitada a 25 km/h y sellada IP54, así que no tienes que caparlo por tu cuenta para rodar como VMP"],
    contras: ["Sus 24,45 kg se notan de verdad al subirlo a un piso sin ascensor o al meterlo y sacarlo del maletero cada día", "Reponer los 720 Wh lleva unas 7 horas con su cargador de 2 A: si olvidas enchufarlo por la noche, al día siguiente te quedas sin patinete", "En la ficha no consta certificado DGT verificado, un documento que conviene exigir al vendedor antes de cerrar la compra en España", "Los 55 km anunciados se midieron a 15 km/h; manteniendo los 25 km/h la autonomía útil se queda en esos aproximadamente 38 km"],
    veredicto:
      "El i10 Pro encaja si tu recorrido diario ronda los 15-20 km por sentido y quieres llegar sin vibraciones en las muñecas: 720 Wh, unos 38 km útiles y doble suspensión rodando a 25 km/h. No encaja si tienes que cargarlo en brazos a diario —24,45 kg y unas 7 horas de enchufe— ni si solo necesitas algo ligero para enlazar 3 km con el metro.",
    fuenteNombre: "Manual oficial iScooter i10 Pro UE (PDF)",
    fuenteUrl: "https://manuals.plus/m/cb42a8de03aeee8997c504c18f9964aeafed009509b4763039b89588a70c1933.pdf",
    mantenimientoDIY: {"actualizacionFirmware": "Empareja el i10 Pro por Bluetooth con la app oficial iScooter y acepta desde ahí las actualizaciones de firmware que ofrezca; la misma app sirve para cambiar de modo, activar el control de crucero, bloquear el patinete y manejar las luces", "trucos": ["Vigila la presión de las dos ruedas neumáticas de 10 pulgadas guiándote por lo grabado en el flanco: el manual del i10 Pro advierte de que rodar bajo de presión recorta velocidad y autonomía", "Si la maneta pierde mordiente, tensa primero el cable del freno de tambor y comprueba su desgaste antes de culpar al E-ABS, que es justo el orden de revisión que indica el manual", "Si lo dejas parado varias semanas, guárdalo cargado y vuelve a enchufarlo cada 30-60 días como pide su manual, y límpialo solo con un paño húmedo, sin chorro a presión pese al IP54"]},
  },
  {
    id: "kugoo-kirin-s1-pro",
    marca: "Kugoo",
    modelo: "Kirin S1 Pro",
    potenciaNominalW: 350,
    potenciaPicoW: null,
    bateriaWh: 270,

    autonomiaKm: 30,
    velocidadMaxKmh: 30,
    pesoKg: 11,
    cargaMaxKg: 120,
    tiempoCargaH: 4,
    frenos: "Eléctrico + freno de pie",
    neumaticos: 'Neumáticos 8" macizos tipo panal',






    foto: "/media/patinetes/kugoo-kirin-s1-pro-1.webp",
    galeria: [
      { src: "/media/patinetes/kugoo-kirin-s1-pro-2.webp", alt: "Kugoo Kirin S1 Pro plegado", ancho: 1200, alto: 800 },
    ],
    precioEur: null, // Kugoo no publica tarifa oficial; solo venta vía distribuidores y marketplaces (verificado 20/10/2026)

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 20,
    aprox: ["autonomiaRealKm"],
    pros: ["Solo 11 kg para un motor de 350 W: cargarlo con una mano por escaleras o meterlo en un maletero es asumible a diario, algo que un Xiaomi M365 de su época no facilitaba tanto", "Las ruedas macizas de panal de 8 pulgadas eliminan los pinchazos, el talón de Aquiles del M365, y te ahorran cámara, parches y revisión de presiones", "Admite hasta 120 kg de carga pese a su peso pluma y declara capacidad para pendientes de 15°, cifras altas para un patinete de 270 Wh pensado para llanear en ciudad", "Se recarga en unas 4 horas y el manillar se regula en 3 alturas, así que entre trayectos cortos puedes dejarlo listo sin tenerlo toda la noche enchufado"],
    contras: ["Su velocidad máxima de 30 km/h rebasa el límite de 25 km/h de un VMP en España y en la ficha no consta certificado DGT, por lo que tal cual no es la opción para circular tranquilo y en regla", "Los 30 km anunciados se quedan en unos 20 km reales en esta ficha: una ida y vuelta de más de 10 km por trayecto ya obliga a cargar casi a diario", "La rueda maciza de 8 pulgadas transmite cada junta y cada adoquín a las muñecas; en asfalto rugoso se nota mucho más que en un modelo con neumático hinchable de 8,5 o 10 pulgadas", "Frena con freno eléctrico y con el pie sobre el guardabarros trasero, sin freno de disco: la detención es menos progresiva y exige anticiparse, sobre todo en mojado o en bajada"],
    veredicto:
      "Con 350 W, 270 Wh y solo 11 kg, el Kirin S1 Pro encaja si tu recorrido diario se queda en unos 20 km reales y tienes que subirlo a pulso a un piso o a un tren. No encaja si lo quieres como VMP legal en España —declara 30 km/h y en su ficha no consta certificado DGT— ni si tu ruta suma adoquines o cuestas largas, donde la rueda de 8 pulgadas y la batería pequeña penalizan.",
    fuenteNombre: "Electric Scooter Guides (review Kugoo S1 Pro)",
    fuenteUrl: "https://www.electricscooterguides.com/reviews/kugoo-s1-pro",
    mantenimientoDIY: {"actualizacionFirmware": "Sin actualización de firmware documentada por Kugoo para el Kirin S1 Pro; tampoco consta app oficial vinculada para este modelo, así que no hay ajuste de parámetros desde el móvil", "trucos": ["Antes de salir, comprueba que el gancho de plegado engancha en el tornillo del guardabarros trasero y que la palanca del mástil queda bloqueada: es el punto que soporta todo el conjunto de 11 kg cuando lo llevas colgado", "Cuida la batería de 270 Wh cargándola tras cada salida con su cargador original —luz roja cargando, verde llena— y, si lo dejas parado, recárgala al menos cada tres meses para no acortar su vida útil", "Inspecciona el dibujo del panal de las ruedas de 8 pulgadas en asfalto rugoso: no se pinchan, pero cuando las celdas se aplanan se pierde agarre y hay que plantear el recambio aunque no haya pinchazo"]},
  },
  {
    id: "kugoo-kirin-s4",
    marca: "Kugoo",
    modelo: "Kirin S4",
    potenciaNominalW: 350,
    potenciaPicoW: null,
    bateriaWh: 360,

    autonomiaKm: 40,
    velocidadMaxKmh: 35,
    pesoKg: 13.5,
    cargaMaxKg: null,
    tiempoCargaH: null,
    frenos: null,
    neumaticos: 'Neumáticos 10" de aire',






    foto: "/media/patinetes/kugoo-kirin-s4-1.webp",
    galeria: [
      { src: "/media/patinetes/kugoo-kirin-s4-2.webp", alt: "Kugoo Kirin S4 en ciudad", ancho: 1200, alto: 800 },
    ],
    precioEur: null, // Kugoo no publica tarifa oficial; solo venta vía distribuidores y marketplaces (verificado 20/10/2026)

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 27,
    aprox: ["autonomiaRealKm"],
    pros: ["Solo 13,5 kg pese a montar ruedas de 10 pulgadas de aire, una combinación poco habitual: los Kirin de 10 pulgadas más potentes como el M4 rondan los 23 kg", "Los 360 Wh se traducen en unos 27 km reales, suficientes para una ida y vuelta urbana de 10-12 km por sentido sin tener que cargar cada noche", "El motor de 350 W con punta de 35 km/h deja algo de margen en llano frente a los patinetes limitados de serie a 25 km/h", "El neumático neumático de 10 pulgadas filtra adoquines, juntas y baches ligeros mucho mejor que una rueda maciza de 8,5 pulgadas"],
    contras: ["Declara 35 km/h y en la ficha no consta certificado DGT verificado, así que tal cual viene no encaja con el límite de 25 km/h exigido a los VMP en España", "Carece de suspensión: la rueda de aire ayuda, pero bordillos, raíces y firme muy roto llegan directos a tobillos y manillar", "Con 350 W va justo en rampas y con conductores pesados, y ahí la autonomía se aleja de los 40 km anunciados y baja de los 27 km estimados en llano", "La frenada documentada en las pruebas se apoya en el freno electrónico E-ABS, sin un conjunto de disco contundente que dé margen extra en bajadas o con suelo mojado"],
    veredicto:
      "Con 13,5 kg, batería de 360 Wh y unos 27 km reales, el Kirin S4 es un patinete para trayectos urbanos cortos en llano que se pueda subir a un piso o a un tren sin pelearse con el peso. No es para quien necesite circular con certificado DGT en España —declara 35 km/h, por encima del límite de 25 km/h para VMP— ni para rutas con cuestas serias, donde sus 350 W se quedan cortos.",
    fuenteNombre: "Electric Scooter Guides (review Kugoo Kirin S4)",
    fuenteUrl: "https://www.electricscooterguides.com/reviews/kugoo-kirin-s4",
    mantenimientoDIY: {"actualizacionFirmware": "No documentada por el fabricante", "trucos": ["Con neumáticos de aire de 10 pulgadas, comprueba la presión cada dos semanas y antes de un trayecto largo: rodar bajo de presión en el S4 dispara el consumo de los 360 Wh, recorta los 27 km reales y multiplica el riesgo de llantazo, al no llevar suspensión que absorba el golpe", "Revisa la holgura del mecanismo de plegado y reaprieta la tornillería del mástil cada mes: sin suspensión, las vibraciones del firme urbano aflojan el cierre y aparece el juego en la dirección, el fallo más molesto en este chasis ligero de 13,5 kg", "No apures la batería hasta el corte ni lo guardes semanas al 0%: con un pack pequeño de 360 Wh cada descarga profunda se nota antes en autonomía; déjalo sobre la mitad de carga si no lo vas a usar y recarga tras trayectos cortos sin dejarlo enchufado toda la noche"]},
  },
  {
    id: "evercross-a1",
    marca: "Evercross",
    modelo: "A1",
    potenciaNominalW: 500,
    potenciaPicoW: 800,
    bateriaWh: 672,

    autonomiaKm: 50,
    velocidadMaxKmh: 25,
    pesoKg: 26.85,
    cargaMaxKg: 120,
    tiempoCargaH: 7.5,
    frenos: "E-ABS + disco + tambor delantero",
    neumaticos: 'Neumáticos 10x2.75" macizos tipo panal',






    foto: "/media/patinetes/evercross-a1-1.webp",
    galeria: [
      { src: "/media/patinetes/evercross-a1-2.webp", alt: "Evercross A1 con doble suspensión", ancho: 1200, alto: 800 },
    ],
    precioEur: null, // sin tarifa oficial publicada en ningún mercado (verificado 20/10/2026)

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 33,
    aprox: ["autonomiaRealKm"],
    pros: [
      "672 Wh: gran batería para su precio",
      "Triple sistema de freno",
      "Doble suspensión + IP54",
      "App con bloqueo Bluetooth",
    ],
    contras: [
      "26,85 kg: pesado",
      "Carga lenta (7-8 h)",
      "Autonomía oficial medida a 15 km/h",
      "Sin precio oficial en España: la marca no publica tarifa oficial para este modelo",
    ],
    veredicto:
      "El A1 es el rutero honesto de Evercross: 672 Wh, triple freno y doble suspensión. Pesa 26,85 kg, pero la relación batería/precio es difícil de batir.",
    fuenteNombre: "Evercross EU (ficha oficial A1)",
    fuenteUrl: "https://eu.evercross.eu/products/evercross-a1-faltbarer-elektroroller",
    mantenimientoDIY: {
      actualizacionFirmware: "App Evercross: bloqueo/desbloqueo y datos de marcha",
      trucos: ["Ruedas de panal anchas (2.75\"): estables pero vigilar desgaste irregular", "El modo Sport (45 km/h) no es legal en vía pública española"],
    },
  },
  {
    id: "gotrax-fusion",
    marca: "GOTRAX",
    modelo: "Fusion",
    potenciaNominalW: 300,
    potenciaPicoW: null,
    bateriaWh: 209,

    autonomiaKm: 22,
    velocidadMaxKmh: 28,
    pesoKg: 14,
    cargaMaxKg: 100,
    tiempoCargaH: 4,
    frenos: "EABS + disco trasero",
    neumaticos: 'Neumáticos 8.5" (aire o macizos según versión)',






    foto: "/media/patinetes/gotrax-fusion-1.webp",
    galeria: [
      { src: "/media/fotos-reales/gotrax-fusion/gotrax-fusion-real-0.webp", alt: "Gotrax Fusion con asiento plegable", ancho: 1200, alto: 800 },
    ],
    precioEur: null, // la marca no publica tarifa oficial en su tienda oficial (verificado 20/10/2026)

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 15,
    aprox: ["autonomiaRealKm"],
    pros: ["Variante Fusion w/Seat con sillín atornillable: en el catálogo oficial de Gotrax es la versión con asiento del modelo (370 $ frente a 349 $ sin él) y permite alternar la postura en trayectos que de pie se hacen largos", "Doble suspensión trasera sobre ruedas de 8,5 pulgadas, un extra de confort poco habitual en un Gotrax ligero de este tamaño y precio", "Plegado en un toque y unos 14 kg en la versión sin asiento: se pliega por la mitad y cabe en un maletero o bajo un escritorio sin pelearse con el cierre", "Pantalla digital con velocidad, nivel de batería y distancia, faro LED delantero y seguridad eléctrica certificada UL 2272 según la ficha oficial de Gotrax"],
    contras: ["Sus 28 km/h (18 mph en la ficha oficial) rebasan el límite de 25 km/h de los VMP en España y no consta certificado DGT, así que tal cual se vende en EE. UU. no es un patinete pensado para la vía pública española", "La batería de 36 V y 5,8 Ah (209 Wh) se queda en unos 15 km reales: cubre un desplazamiento corto de ida y vuelta, pero obliga a cargar a diario en cuanto el trayecto se alarga", "Pensado para el mercado estadounidense: Gotrax lo vende en dólares, sin precio oficial en euros para España, y la variante con asiento sube el conjunto a unas 36 libras según su manual, lejos de los 14 kg de la versión básica"],
    veredicto:
      "El Fusion es el Gotrax de los trayectos cortos con truco: un commuter ligero de 300 W y 209 Wh que, por su variante con sillín atornillable y su doble suspensión trasera, se puede usar sentado cuando el recorrido cansa de pie. No engaña en lo demás: unos 15 km reales, 28 km/h que lo dejan fuera de la normativa española de VMP y venta oficial solo en dólares. Encaja como patinete sencillo para recados y desplazamientos breves donde su configuración sea legal; para un commuting diario más largo, el XR Elite de la propia marca da más batería con la misma potencia.",
    fuenteNombre: "Gotrax (ficha oficial Fusion)",
    fuenteUrl: "https://gotrax.com/products/fusion-electric-scooter",
    mantenimientoDIY: {"actualizacionFirmware": "No documentada por el fabricante", "trucos": ["Si lo guardas una temporada, el manual de la versión con asiento pide dejar la batería entre el 50 % y el 70 % y recargarla cada 30-60 días, no guardarla agotada", "Revisa periódicamente tornillos, pernos y conexiones, y ajusta la tensión del cable del disco trasero si la frenada se alarga: son las comprobaciones que el manual del Fusion Seat repite", "Al montar el sillín de la variante w/Seat, comprueba su apriete antes de salir: es una pieza atornillada sobre la plataforma, no una parte fija del chasis"]},
  },
  {
    id: "gotrax-xr-elite",
    marca: "GOTRAX",
    modelo: "XR Elite",
    potenciaNominalW: 300,
    potenciaPicoW: 400,
    bateriaWh: 281,

    autonomiaKm: 26,
    velocidadMaxKmh: 25,
    pesoKg: 14.4,
    cargaMaxKg: 100,
    tiempoCargaH: 4,
    frenos: "Disco trasero + freno eléctrico delantero",
    neumaticos: 'Neumáticos 8.5" de aire',






    foto: "/media/patinetes/gotrax-xr-elite-1.webp",
    galeria: [
      { src: "/media/fotos-reales/gotrax-xr-elite/gotrax-xr-elite-real-0.webp", alt: "Gotrax XR Elite en ciudad", ancho: 1200, alto: 800 },
    ],
    precioEur: null, // la marca no publica tarifa oficial en su tienda oficial (verificado 20/10/2026)

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 18,
    aprox: ["autonomiaRealKm"],
    pros: ["Su batería de 281 Wh deja unos 18 km reales, suficientes para una ida y vuelta urbana corta sin recargar a mitad de jornada, y la carga completa pide solo 4 horas.", "Con 14,4 kg resulta llevadero para subir un tramo de escaleras o meterlo en el maletero, pese a admitir pilotos de hasta 100 kg.", "Combina disco trasero con freno eléctrico delantero, una pareja más contundente que el freno único de tambor o de pie de otros modelos básicos.", "Los neumáticos de aire de 8,5\" filtran mejor las juntas y el asfalto roto que una rueda maciza, justo donde un patinete sin suspensión más lo necesita."],
    contras: ["La autonomía se queda en unos 18 km reales frente a los 26 km declarados: si tu recorrido diario supera esa cifra entre cargas, te dejará justo.", "Los 300 W nominales —400 W de pico— se quedan cortos en rampas y con pilotos cercanos al límite de 100 kg, donde la velocidad cae de forma clara.", "Sin suspensión delante ni detrás, los baches, adoquines y bordillos llegan directos a los pies y a las manos a través de unas ruedas pequeñas de 8,5\".", "Esas ruedas de aire que dan comodidad también pinchan y exigen vigilar la presión: rodar por debajo de los 50 PSI recomendados penaliza autonomía y velocidad."],
    veredicto:
      "Con 281 Wh, unos 18 km reales y 25 km/h, el XR Elite cubre el trayecto corto urbano sin cargar con un patinete pesado: pesa 14,4 kg y se recarga en 4 horas. Es para quien hace desplazamientos llanos y predecibles; no es para quien viva en una zona con cuestas serias ni necesite encadenar varios trayectos largos en el mismo día, porque sus 300 W nominales y la ausencia de suspensión se notan enseguida.",
    fuenteNombre: "eScooter Insider (review Gotrax XR Elite)",
    fuenteUrl: "https://escooterinsider.com/gotrax-xr-elite-review/",
    mantenimientoDIY: {"actualizacionFirmware": "Gotrax no publica actualizaciones de firmware para el XR Elite: ni la guía oficial del modelo ni su manual mencionan actualización OTA ni por cable.", "trucos": ["Mantén los neumáticos de 8,5\" a los 50 PSI que indica el manual en el flanco: con presión baja el XR Elite pierde velocidad y autonomía, y es la primera comprobación que el propio manual recomienda ante ese síntoma.", "Si el disco trasero frena flojo o roza, ajústalo con una llave Allen de 4 mm: afloja los tornillos de la pinza, tensa o destensa el cable según el caso y vuelve a apretar, tal como describe el manual del modelo.", "Si la columna de dirección baila, abre la tapa de plástico y reaprieta sus tornillos con la llave Allen; y límpialo solo con un paño húmedo, sin hidrolavadora ni disolventes, para no dañar la electrónica pese a su protección frente a salpicaduras."]},
  },
  {
    id: "hiboy-s2r",
    videoId: null,
    videoCanal: null,
    marca: "Hiboy",
    modelo: "S2R",
    precioEur: null, // Hiboy ya no comercializa este modelo en su tienda oficial (verificado 20/10/2026)
    potenciaNominalW: 350,
    potenciaPicoW: null,
    bateriaWh: 270,
    autonomiaKm: 27,
    autonomiaRealKm: 19,
    velocidadMaxKmh: 30,
    pesoKg: 14,
    cargaMaxKg: 100,
    tiempoCargaH: 5,
    frenos: "Disco trasero + EABS regenerativo",
    neumaticos: 'Neumáticos macizos de 8.5"',
    certificadoDgt: null,
    foto: "/media/patinetes/hiboy-s2r-1.webp",
    galeria: [
      {
        src: "/media/patinetes/hiboy-s2r-2.webp",
        alt: "Hiboy S2R con batería extraíble",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm", "tiempoCargaH"],
    pros: [
      "Batería extraíble en 3 segundos: se carga en la oficina",
      "Segunda batería opcional: hasta 54 km teóricos",
      "App Hiboy S2 con control de crucero",
      "Neumáticos macizos: cero pinchazos",
    ],
    contras: [
      "Descatalogado: lo sustituye el S2R Plus",
      "30 km/h: por encima del límite VMP",
      "Autonomía real de ~19 km con una batería",
      "Sin suspensión",
    ],
    veredicto:
      "El S2R es el Hiboy de la batería extraíble: 350 W, 270 Wh que se sacan en 3 segundos y app con crucero. Descatalogado en favor del S2R Plus, pero una opción sólida de segunda mano para commuters.",
    fuenteNombre: "The Gadgeteer (review Hiboy S2R)",
    fuenteUrl: "https://the-gadgeteer.com/2022/11/02/hiboy-s2r-electric-scooter-review-a-solid-commuter-scooter/",
    mantenimientoDIY: {
      actualizacionFirmware: "App Hiboy S2: personaliza velocidad y crucero",
      trucos: ["Batería extraíble en 3 segundos: ideal cargar en la oficina", "Neumáticos macizos: sin pinchazos ni presión que vigilar"],
    },
  },
  {
    id: "kugoo-kirin-m3",
    videoId: null,
    videoCanal: null,
    marca: "Kugoo",
    modelo: "Kirin M3",
    precioEur: null, // Kugoo no publica tarifa oficial; solo venta vía distribuidores y marketplaces (verificado 20/10/2026)
    potenciaNominalW: 500,
    potenciaPicoW: null,
    bateriaWh: 468,
    autonomiaKm: 45,
    autonomiaRealKm: 30,
    velocidadMaxKmh: 40,
    pesoKg: 22,
    cargaMaxKg: 120,
    tiempoCargaH: 4.5,
    frenos: "Tambor delantero + freno eléctrico trasero",
    neumaticos: 'Delantera neumática 10" + trasera panal',
    certificadoDgt: null,
    foto: "/media/patinetes/kugoo-kirin-m3-1.webp",
    galeria: [
      {
        src: "/media/patinetes/kugoo-kirin-m3-2.webp",
        alt: "Kugoo Kirin M3 con desbloqueo NFC",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm", "tiempoCargaH"],
    pros: ["Batería de 468 Wh (36 V y 13 Ah) con unos 30 km reales estimados: cubre una ida y vuelta urbana de 20-25 km sin recargar a mitad de jornada", "Doble antirrobo de fábrica que no traen sus rivales directos: desbloqueo por tarjeta NFC y candado de cable retráctil integrado en el propio patinete", "Certificación IPX5 y suspensión delantera: puedes seguir rodando si te pilla la lluvia de camino a casa sin temer por la electrónica", "Motor de 500 W con carga máxima de 120 kg y recarga completa en unas 4,5 h: lo dejas enchufado tras cenar y amanece listo"],
    contras: ["Sus 40 km/h quedan por encima del límite de 25 km/h de los VMP en España y la ficha no acredita certificado DGT verificado: tal cual viene, no es un patinete legal para vía pública aquí", "Pesa 22 kg: plegado se puede mover, pero subirlo por escaleras o meterlo en el metro en hora punta se hace pesado muy pronto", "El confort es asimétrico: delante lleva neumático de aire de 10 pulgadas y detrás una rueda de panal maciza que no pincha, pero transmite cada junta y adoquín a la plataforma", "La autonomía real estimada, unos 30 km, cae un tercio frente a los 45 km teóricos: si tu trayecto diario roza esa cifra, dependerás del cargador en destino"],
    veredicto:
      "Con 468 Wh, unos 30 km reales y carga en 4,5 h, el Kirin M3 encaja en trayectos diarios de 10-15 km por trayecto sin ir justo de batería, y suma un antirrobo que casi ningún rival trae de serie: tarjeta NFC más candado de cable integrado. Es para quien aparca en la calle o en un portal compartido y valora esa seguridad; no es para quien necesite circular como VMP legal en España, porque sus 40 km/h superan el límite de 25 km/h y la ficha no acredita certificado DGT, ni para quien vaya a cargarlo a pulso a diario con sus 22 kg.",
    fuenteNombre: "Electric Scooter Guides (review Kugoo Kirin M3)",
    fuenteUrl: "https://www.electricscooterguides.com/reviews/kugoo-kirin-m3",
    mantenimientoDIY: {"actualizacionFirmware": "No documentada por el fabricante", "trucos": ["Solo la rueda delantera es neumática: mantenla a 50 PSI (340 kPa) y no pierdas tiempo buscando válvula detrás, porque la trasera de panal es maciza y no se infla ni se pincha", "Si aparcas el M3 una temporada, el manual manda recargar su batería de 36 V cada 15-30 días y evitar dejarla descargada del todo: así proteges los 468 Wh que dan los 30 km reales", "Aprovecha el candado de cable integrado para paradas cortas y guarda la tarjeta NFC separada del patinete: sin ella no se desbloquea, así que una copia localizada vale más que un candado aparte olvidado en casa"]},
  },
  {
    id: "inokim-quick-3",
    videoId: null,
    videoCanal: null,
    marca: "Inokim",
    modelo: "Quick 3",
    precioEur: null, // la marca no publica tarifa oficial en su tienda oficial (verificado 20/10/2026)
    potenciaNominalW: 450,
    potenciaPicoW: 1000,
    bateriaWh: 624,
    autonomiaKm: 45,
    autonomiaRealKm: 30,
    velocidadMaxKmh: 31,
    pesoKg: 16.5,
    cargaMaxKg: 100,
    tiempoCargaH: null,
    frenos: "V-brake delantero + disco trasero",
    neumaticos: 'Neumáticos 10x2.5" de aire',
    certificadoDgt: null,
    foto: "/media/patinetes/inokim-quick-3-1.webp",
    galeria: [
      {
        src: "/media/patinetes/inokim-quick-3-2.webp",
        alt: "Inokim Quick 3 en ciudad",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm"],
    pros: ["Sus 624 Wh —48 V y 13 Ah de celdas LG— dejan unos 30 km utilizables por carga frente a los 45 km anunciados: da para dos o tres días de trayectos urbanos cortos sin pasar por el enchufe", "Pesa 16,5 kg pese a llevar esa batería grande, así que subirlo plegado a un tren o a un piso sin ascensor entra dentro de lo razonable para un adulto", "El motor trasero entrega 450 W nominales con picos de 1.000 W: empuje de sobra para arrancar en semáforos y subir rampas urbanas llevando conductores de hasta los 100 kg de carga máxima", "Frena con V-brake delante y disco detrás, y al accionar el freno de disco trasero el motor se corta solo, un detalle que evita estar empujando y frenando a la vez"],
    contras: ["Declara 31 km/h, por encima de los 25 km/h de un VMP en España, y la ficha no aporta certificado DGT verificado: tal cual viene, no es el patinete para circular tranquilo en cuanto a papeles", "No lleva suspensión en ningún eje: todo el filtrado recae en los neumáticos de aire de 10x2,5\", que sufren en adoquín, rejillas y asfalto roto", "La autonomía real se queda en unos 30 km frente a los 45 km del papel, un tercio menos que te obliga a cargar antes si tu ruta diaria suma más de 20 km", "Su carga máxima es de solo 100 kg: entre conductor, mochila y ropa de invierno queda poco margen, y con el peso cerca del límite los 450 W pierden alegría en las cuestas"],
    veredicto:
      "Con 624 Wh, unos 30 km reales y 16,5 kg, el Quick 3 es un urbano presentado en 2016 pensado para quien pliega a diario —tren, oficina o maletero— y valora las celdas LG y el acabado por encima de tener suspensión. Encaja si tus rutas son llanas, bien asfaltadas y quedan por debajo de 25 km entre cargas. No encaja si necesitas un VMP con certificado DGT verificado y tope de 25 km/h en España, porque declara 31 km/h, ni si tu firme habitual es adoquín o asfalto roto.",
    fuenteNombre: "Electric Scooter Insider (review INOKIM Quick 3)",
    fuenteUrl: "https://www.electricscooterinsider.com/electric-scooters/reviews/inokim-quick-3-review/",
    mantenimientoDIY: {"actualizacionFirmware": "El manual del Quick 3 anuncia compatibilidad con la app de INOKIM para el móvil, pero no describe ningún procedimiento de actualización de firmware que pueda hacer el usuario", "trucos": ["Mantén los neumáticos de 10\" entre 40 y 50 PSI, el rango que fija su manual: por debajo, la batería de 624 Wh rinde menos kilómetros y el pinchazo en la rueda motriz trasera se vuelve mucho más probable", "Antes de cada salida comprueba que el botón «M» del plegado ha entrado del todo en el puente central y que los anillos rojos laterales bloquean los semimanillares: es el seguro que impide que la dirección se cierre en marcha", "Si lo dejas parado, no lo guardes más de dos meses con la batería llena ni lo dejes descargado del todo: su manual pide descargar y cargar por completo de forma periódica para mantener sanas las celdas LG de 48 V"]},
  },
  {
    id: "smartgyro-xtreme",
    videoId: null,
    videoCanal: null,
    marca: "SmartGyro",
    modelo: "Xtreme",
    precioEur: 239,
    potenciaNominalW: 250,
    potenciaPicoW: null,
    bateriaWh: 154,
    autonomiaKm: 15,
    autonomiaRealKm: 11,
    velocidadMaxKmh: 25,
    pesoKg: 10,
    cargaMaxKg: 100,
    tiempoCargaH: 4,
    frenos: "Freno eléctrico trasero",
    neumaticos: 'Delantera 8" neumática / trasera 8" maciza',
    certificadoDgt: null,
    foto: "/media/patinetes/smartgyro-xtreme-1.webp",
    galeria: [
      {
        src: "/media/patinetes/smartgyro-xtreme-2.webp",
        alt: "Smartgyro Xtreme plegado",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm"],
    pros: ["Solo 10 kg soportando hasta 100 kg de carga: se sube con una mano a un piso sin ascensor o al maletero, donde un patinete de 15-20 kg ya se hace pesado", "239 € por un motor brushless de 250 W que llega a 25 km/h, el tope de velocidad de un VMP, sin pagar el sobreprecio de gamas con app y ruedas grandes", "La trasera maciza de 8 pulgadas no se pincha, y la delantera neumática filtra algo mejor las juntas: para trayectos cortos por barrio el mantenimiento es mínimo", "Plegado queda en 102×40×15 cm y lleva display integrado: cabe tras una puerta o bajo un escritorio y ves velocidad y batería sin depender de ninguna app"],
    contras: ["Unos 11 km reales frente a los 15 km anunciados: cualquier ida y vuelta que supere los 5 km por trayecto ya te deja sin margen de batería", "El único freno que recoge la ficha es el eléctrico trasero, sin disco ni tambor de apoyo: en bajadas largas toda la retención depende de la electrónica", "Con solo 8 pulgadas y la trasera maciza, las ruedas transmiten cada junta, tapa y adoquín; en asfalto roto el trayecto se vuelve seco frente a un modelo neumático de 10 pulgadas", "Sin certificado DGT verificado en la ficha y con una carga completa de 4 horas para tan pocos kilómetros: antes de comprarlo, y más de segunda mano, toca comprobar su situación documental"],
    veredicto:
      "Con 239 €, 10 kg y unos 11 km reales por carga, el Smartgyro Xtreme encaja en el último kilómetro, los recados cortos en llano y en quien necesita plegarlo y cargarlo a pulso en cada transbordo. No encaja en quien haga a diario más de 10 km entre ida y vuelta, viva entre cuestas o busque la comodidad de unas ruedas neumáticas de 10 pulgadas.",
    fuenteNombre: "Habitium (ficha SmartGyro Xtreme)",
    fuenteUrl: "https://habitium.com/ie/electric-scooters/481710-electric-scooter-blue-250-w-up-to-100-kg-smartgyro-xtreme.html",
    mantenimientoDIY: {"actualizacionFirmware": "No documentada por el fabricante", "trucos": ["Vigila la presión de la delantera neumática de 8 pulgadas y, en la trasera maciza, el desgaste y las grietas de la goma, porque cuando la banda queda plana empeora el agarre, sobre todo en mojado", "Comprueba a menudo la palanca y la abrazadera del plegado: al reducirse a 102×40×15 cm lo normal es plegarlo a diario para tren, maletero o trastero, y la holgura aparece primero en la unión del mástil", "No lo dejes días seguidos a cero: su batería de litio de 6.400 mAh da solo unos 11 km reales y tarda unas 4 horas en cargarse, así que enchúfalo tras cada salida larga y comprueba el nivel en el display integrado antes de salir"]},
  },
  {
    id: "segway-ninebot-d38e",
    videoId: null,
    videoCanal: null,
    marca: "Segway",
    modelo: "Ninebot KickScooter D38E",
    precioEur: null, // modelo descatalogado; Segway ya no publica tarifa oficial (verificado 20/10/2026)
    potenciaNominalW: 350,
    potenciaPicoW: 500,
    bateriaWh: 367,
    autonomiaKm: 38,
    autonomiaRealKm: 26,
    velocidadMaxKmh: 25,
    pesoKg: 16.3,
    cargaMaxKg: 120,
    tiempoCargaH: 6.5,
    frenos: "Electrónico delantero + tambor trasero",
    neumaticos: 'Neumáticos tubeless de 10"',
    certificadoDgt: null,
    foto: "/media/patinetes/segway-ninebot-d38e-1.webp",
    galeria: [
      {
        src: "/media/patinetes/segway-ninebot-d38e-2.webp",
        alt: "Segway Ninebot D38E con dashboard a color",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm", "tiempoCargaH"],
    pros: ["Motor de 350 W nominales y 500 W de pico que supera pendientes del 20 %, el doble que el D18E de la misma familia", "Batería de 367 Wh y 10,2 Ah con unos 26 km útiles, suficiente para no cargar entre la ida y la vuelta en ciudad", "Freno electrónico E-ABS delante y tambor detrás, con faro LED de 2,1 W y reflectores E-MARK laterales, delanteros y traseros", "Ruedas neumáticas de 10 pulgadas sobre un chasis de doble tubo triangular que admite hasta 120 kg de carga y se pliega en dos pasos con una mano"],
    contras: ["Pesa 16,3 kg plegado: llevarlo por escaleras del metro o a un piso sin ascensor se nota en el hombro desde el primer día", "La carga completa pide 6,5 horas con su cargador de 70 W, así que un olvido por la noche te deja sin patinete por la mañana", "Sin ningún tipo de suspensión, solo el balón de la rueda de 10 pulgadas filtra; en adoquín y juntas de dilatación transmite todo al manillar", "En la ficha no consta certificado DGT verificado, un punto a exigir a la tienda antes de comprarlo para circular más allá de enero de 2027"],
    veredicto:
      "El D38E es el tope de la Serie D de 2022: sus 367 Wh se traducen en unos 26 km reales y su motor de 350 W ataca rampas del 20 %, algo que ni el D18E ni el D28E igualan. Encaja si tu rutina es un trayecto urbano diario ida y vuelta a 25 km/h y duerme enchufado, porque necesita 6,5 horas para llenarse. No encaja si lo vas a subir a pulso varios pisos cada día con sus 16,3 kg ni si buscas comodidad sobre adoquín, ya que no lleva suspensión.",
    fuenteNombre: "Tech Advisor (review Ninebot D38E)",
    fuenteUrl: "https://www.techadvisor.com/article/796668/ninebot-kickscooter-d38e-review.html",
    mantenimientoDIY: {"actualizacionFirmware": "Desde la app Segway-Ninebot, enlaza el D38E por Bluetooth y aplica las actualizaciones de firmware que ofrezca la app; hazlo con batería cargada y el patinete parado, porque también ajusta modos, bloqueo y lectura del BMS de los 367 Wh.", "trucos": ["Mantén las ruedas de 10 pulgadas entre 40 y 45 psi como marca el manual: por debajo de eso el D38E pierde autonomía de los 26 km reales y aumenta el riesgo de llantazo, por encima rebota más al no tener suspensión.", "Activa el modo Walk desde Ajustes de la app Segway-Ninebot: limita a 5 km/h y deja faro y piloto parpadeando, pensado para empujarlo entre peatones sin tener que apagarlo y volver a encenderlo.", "Cambia de modo con una doble pulsación del botón del dashboard: baja a ECO, limitado a 15 km/h, cuando veas la última barra de batería y necesites estirar la carga hasta casa en vez de seguir en Sport a 25 km/h."]},
  },
  {
    id: "segway-ninebot-d28e",
    videoId: null,
    videoCanal: null,
    marca: "Segway",
    modelo: "Ninebot KickScooter D28E",
    precioEur: null, // modelo descatalogado; Segway ya no publica tarifa oficial (verificado 20/10/2026)
    potenciaNominalW: 300,
    potenciaPicoW: null,
    bateriaWh: 275,
    autonomiaKm: 28,
    autonomiaRealKm: 19,
    velocidadMaxKmh: 25,
    pesoKg: 15.3,
    cargaMaxKg: 120,
    tiempoCargaH: 5,
    frenos: "Electrónico delantero + tambor trasero",
    neumaticos: 'Neumáticos de aire de 10"',
    certificadoDgt: null,
    foto: "/media/patinetes/segway-ninebot-d28e-1.webp",
    galeria: [
      {
        src: "/media/patinetes/segway-ninebot-d28e-2.webp",
        alt: "Segway Ninebot D28E en rojo y negro",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm"],
    pros: ["Es el equilibrio de su familia: 275 Wh y 7.650 mAh frente a los 184 Wh del D18E y los 367 Wh del D38E, sin pagar el kilo extra que pesa el mayor", "Admite 120 kg de carga, 20 kg más que el D18E, pero se queda en 15,3 kg propios: todavía se puede meter plegado en un maletero o bajo una mesa de oficina", "La frenada reparte el trabajo entre el electrónico E-ABS delantero y el tambor trasero, con faro LED de 2,1 W y reflectores E-MARK delanteros, laterales y traseros para el trayecto de vuelta de noche", "Sus neumáticos de aire de 10 pulgadas son su única amortiguación y cumplen ese papel mejor que las ruedas de 8,5 pulgadas de los urbanos más básicos, sobre juntas y asfalto parcheado"],
    contras: ["Entre los 28 km de catálogo y los 19 km reales hay 9 km de diferencia: una ida y vuelta de 10 km por sentido ya te obliga a cargar en destino", "Los 300 W rinden para el 15 % que promete Segway, pero con un conductor cerca de los 120 kg de carga máxima la tracción delantera pierde ritmo en cuanto la rampa se alarga", "La Serie D declara sin control de crucero en la página oficial y este D28E tampoco lo suple por la app: en avenidas largas toca mantener el acelerador pulsado todo el camino", "En la ficha no consta certificado DGT verificado, así que antes de comprarlo hay que exigir a la tienda la documentación concreta de esta unidad"],
    veredicto:
      "El D28E es el término medio de la Serie D de 2022: con 275 Wh declara 28 km pero en uso real se queda en unos 19 km, y su motor de 300 W sube rampas del 15 % a un máximo legal de 25 km/h. Encaja si tu ida y vuelta urbana cabe en esos 19 km y valoras que solo pese 15,3 kg admitiendo hasta 120 kg de carga. No encaja si necesitas margen para encadenar recados sin cargar 5 horas entre usos, si tus cuestas superan ese 15 % o si buscas el confort de una suspensión que este modelo no lleva.",
    fuenteNombre: "Digitec (ficha Ninebot D28E)",
    fuenteUrl: "https://www.digitec.ch/en/s1/product/segway-ninebot-ninebot-d28e-25-kmh-28-km-300-w-e-scooters-standing-22722927",
    mantenimientoDIY: {"actualizacionFirmware": "Instala la app Segway-Ninebot, activa el D28E y enlázalo por Bluetooth: el propio manual de la Serie D indica que hay que hacerlo así para obtener las últimas actualizaciones de firmware e instrucciones de seguridad, y las versiones nuevas se consultan también en segway.com.", "trucos": ["Deja las dos ruedas de 10 pulgadas entre 40 y 45 psi, la presión que fija el manual del D28E: por debajo, los 19 km reales se recortan aún más y crece el riesgo de llantazo al subir un bordillo.", "Activa el modo Walk desde la app, en el menú lateral > Ajustes > Modo peatonal: queda limitado a 5 km/h con faro y piloto parpadeando sin poder apagarse, útil para cruzarlo a pie entre peatones sin empujarlo a pulso.", "Cambia de modo con doble pulsación del botón del panel: si te queda una sola barra de batería, baja a ECO, topado a 15 km/h, en vez de seguir en Sport a 25 km/h y arriesgarte a quedarte tirado a unas manzanas de casa."]},
  },
  {
    id: "gotrax-g-pro",
    videoId: null,
    videoCanal: null,
    marca: "GOTRAX",
    modelo: "G Pro",
    precioEur: null,
    potenciaNominalW: 300,
    bateriaWh: 378,
    autonomiaKm: 39,
    autonomiaRealKm: 27,
    velocidadMaxKmh: 25,
    pesoKg: 23.8,
    cargaMaxKg: 120,
    tiempoCargaH: 5.5,
    frenos: "Doble freno, delantero y trasero",
    neumaticos: "Neumático delantero de 10\" y dos traseros de 8,5\"",
    certificadoDgt: null,
    foto: "/media/patinetes/gotrax-g-pro-oficial.webp",
    galeria: [],
    aprox: [
      "autonomiaRealKm"
    ],
    pros: [
      "Tres ruedas (10\" delante y un par de 8,5\" detrás) y GOTRAX destaca su estabilidad mejorada",
      "Suspensión trasera doble y plegado de un toque",
      "Batería de 36 V 10,5 Ah (378 Wh), con 24 millas (39 km) máximas declaradas",
      "Carga máxima de 265 libras (120 kg) y 23,8 kg de peso",
      "Cumple UL 2272 según la ficha y 2 años de garantía en el texto de la web"
    ],
    contras: [
      "Agotado en la web de GOTRAX EE. UU. (619 $ con un precio de lista de 899 $)",
      "Solo 300 W: es un motor modesto para 23,8 kg más el conductor",
      "La web da 15,5 mph (25 km/h) en la cabecera y 20 mph (32 km/h) en la tabla completa: la velocidad real no está clara",
      "Sin certificado DGT ni marcado CE en la ficha; el UL 2272 es una norma estadounidense",
      "GOTRAX indica 1 año de garantía limitada en la tabla técnica y 2 años en el texto de la web",
      "Es un patinete fácil de llevar, pero la ley española pide casco y 15 años (artículos 118.3 y 155.3)"
    ],
    veredicto: "El G Pro es una rareza: un patinete de tres ruedas que busca estabilidad para quien no se siente seguro sobre dos. Pero está agotado, es de EE. UU. y sus 300 W y 378 Wh son modestos y la web no aclara si la velocidad máxima es de 15,5 o de 20 mph; en España habría que comprobar si el vendedor ofrece certificado de características.",
    fuenteNombre: "GOTRAX (ficha oficial del G Pro de 3 ruedas)",
    fuenteUrl: "https://gotrax.com/products/g-pro-3-wheel-electric-scooter",
    mantenimientoDIY: {
      actualizacionFirmware: "No documentada por el fabricante",
      trucos: [
        "Mantén las tres ruedas a 50 PSI como indica el manual: con la trasera baja el tren basculante trabaja torcido y la autonomía de los 378 Wh cae en picado",
        "Revisa por separado las pastillas y la tensión de cable de los frenos de disco traseros: al ser dos ruedas independientes, un desgaste desigual hace que tire hacia un lado al frenar",
        "Si lo guardas semanas, deja la batería LG entre el 50 y el 70 % y recárgala cada 30-60 días; cambia además el código digital por defecto 000 y el del cable antes de dejarlo atado en la calle"
      ]
    },
    potenciaPicoW: null
  },
  {
    id: "gotrax-xr-ultra",
    videoId: null,
    videoCanal: null,
    marca: "GOTRAX",
    modelo: "XR Ultra",
    precioEur: 200, // 249 $ (tarifa oficial EE. UU.) ÷ 1,1225 (BCE 19/10/2026), redondeado a la centena
    potenciaNominalW: 300,
    potenciaPicoW: 430,
    bateriaWh: 252,
    autonomiaKm: 26,
    autonomiaRealKm: 17,
    velocidadMaxKmh: 25,
    pesoKg: 12,
    cargaMaxKg: 100,
    tiempoCargaH: 4,
    frenos: "Electromagnético delantero + disco trasero",
    neumaticos: 'Neumáticos 8.5" de aire',
    certificadoDgt: null,
    foto: "/media/patinetes/gotrax-xr-ultra-1.webp",
    galeria: [
      {
        src: "/media/fotos-reales/gotrax-xr-ultra/gotrax-xr-ultra-real-0.webp",
        alt: "Gotrax XR Ultra con asiento opcional",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm", "tiempoCargaH", "precioEur"],
    pros: ["Solo 12 kg con la batería alojada en el mástil: se carga a pulso en escaleras y transporte público sin el castigo de rivales urbanos de 14-15 kg", "Batería LG de 36 V y 7,0 Ah (252 Wh) en plena gama básica: celdas de marca frente a las genéricas habituales a este nivel, con recarga completa en unas 4 h", "Freno electromagnético delantero combinado con disco mecánico trasero: a 25 km/h tienes dos sistemas independientes, no solo el freno electrónico o el de pie", "Neumáticos de aire de 8,5 pulgadas como única amortiguación del conjunto: ese balón marca la diferencia en bordillos y firme roto, y la ficha admite asiento opcional para ir sentado"],
    contras: ["Los 26 km anunciados se quedan en unos 17 km reales en esta ficha: una ida y vuelta diaria más larga te obliga a cargar en destino o a quedarte tirado", "Sus 300 W nominales y 430 W de pico se quedan cortos en rampas sostenidas: en llano va suelto, pero una cuesta seria con un conductor pesado lo pone a caminar", "Sin luz trasera de freno, solo reflector en el guardabarros según Tom's Guide y Rider Guide: circular de noche sin añadir una luz roja con clip es una imprudencia", "Sin certificado DGT verificado en la ficha: es un modelo pensado para EE. UU., así que comprarlo de importación para usarlo en España exige comprobar papeles antes, no después"],
    veredicto:
      "Con 12 kg, batería LG de 252 Wh y 25 km/h, el XR Ultra encaja en trayectos llanos y cortos —piensa en unos 17 km reales por carga— que terminen plegándolo y subiéndolo a pulso a un tren o a casa. No es para ti si vives entre cuestas, te acercas a sus 100 kg de carga máxima o necesitas en España un patinete con certificado DGT verificado y luz trasera de freno: ahí se le notan los recortes de un modelo estadounidense de 2020.",
    fuenteNombre: "Tom's Guide (review GoTrax XR Ultra)",
    fuenteUrl: "https://www.tomsguide.com/reviews/gotrax-xr-ultra",
    mantenimientoDIY: {"actualizacionFirmware": "Sin app ni actualizaciones de firmware documentadas por Gotrax para el XR Ultra: la consola LED se maneja con un único botón, que también enciende el faro y alterna entre sus dos modos de velocidad", "trucos": ["Hincha las dos ruedas de 8,5\" a 50 PSI (340 kPa) y revísa la presión cada dos semanas: con la presión baja cae aún más la autonomía real y crece el riesgo de llantazo, porque no hay suspensión que absorba el golpe", "Impúlsate con el pie hasta superar unos 3 km/h antes de accionar el acelerador, que no actúa desde parado; en llano, mantén el acelerador unos 10 segundos si quieres que entre el control de crucero y descansar el pulgar", "Al desplegarlo, comprueba que el pasador y el botón rojo de seguridad del mástil quedan bloqueados: son el seguro que impide que la dirección se pliegue en marcha, y al cerrarlo vigila que el cable del freno trasero no quede enganchado"]},
  },
  {
    id: "segway-ninebot-f30",
    videoId: null,
    videoCanal: null,
    marca: "Segway",
    modelo: "Ninebot KickScooter F30",
    precioEur: null,
    potenciaNominalW: 300,
    potenciaPicoW: null,
    bateriaWh: 275,
    autonomiaKm: 30,
    autonomiaRealKm: 20,
    velocidadMaxKmh: 25,
    pesoKg: 15.1,
    cargaMaxKg: 120,
    tiempoCargaH: 5,
    frenos: "Freno eléctrico regenerativo delante + disco trasero",
    neumaticos: "Neumáticos de aire de 10\" (el F30E europeo lleva capa de gel interior)",
    certificadoDgt: null,
    foto: "/media/patinetes/segway-ninebot-f30-oficial.webp",
    galeria: [],
    aprox: [
      "autonomiaRealKm"
    ],
    pros: [
      "Motor de 300 W, 25 km/h de punta y 15 % de pendiente, según el manual",
      "15,1 kg según el manual de Segway",
      "Freno eléctrico regenerativo delante y disco trasero, con IPX5 y carga en unas 5 horas",
      "Tres modos de conducción (energía, estándar y sport) y modo caminar a 5 km/h en el F30E",
      "Aplicación Segway-Ninebot por Bluetooth y luz delantera, luz de freno y reflectores"
    ],
    contras: [
      "Sin suspensión declarada: solo amortiguan los neumáticos de 10 pulgadas",
      "Los 30 km son un rango «típico» de la marca, no una garantía",
      "El F30 de este manual lleva 275 Wh; el F30E vendido en Europa lleva 367 Wh y pesa 16,4 kg, así que conviene mirar la referencia exacta",
      "Segway España no lo lista en su catálogo a 31/10/2026, así que no hay precio de marca",
      "El manual de Segway habla de 14 años, pero el RD 518/2026 fija 15 en España y exige casco"
    ],
    veredicto: "El F30 es un Ninebot de 300 W y 25 km/h pensado para trayectos urbanos llanos. Si lo compras en Europa, comprueba si es el F30E, con 367 Wh y 16,4 kg, porque la batería cambia respecto del manual.",
    fuenteNombre: "Segway: manual oficial de la serie F y web del F30E",
    fuenteUrl: "https://support.segway.com/product_files/20230721050652_Ninebot-eKickScooter-F-Series-Product%20Manual.pdf",
    mantenimientoDIY: {
      actualizacionFirmware: "Desde la app Segway-Ninebot, enlaza el F30 por Bluetooth y aplica la actualización de firmware con el patinete parado; la propia app muestra también los códigos de error cuando el patinete detecta un fallo",
      trucos: [
        "Mantén los neumáticos de 10 pulgadas entre 40 y 45 psi, como indica el manual del F30: con la presión baja pierdes parte de los ya ajustados 20 km reales y el motor de 300 W trabaja forzado",
        "Aprovecha la capa de gel autorreparable para pinchazos pequeños, pero revisa la rueda después: si el objeto sigue clavado o la pérdida es grande, el sellado no sustituye a la reparación",
        "Carga solo entre 0 y 40 °C con su cargador de 41 V y 1,7 A, y no lo dejes semanas descargado si quieres que la batería de 275 Wh conserve su autonomía"
      ]
    }
  },
  {
    id: "segway-ninebot-e22e",
    videoId: null,
    videoCanal: null,
    marca: "Segway",
    modelo: "Ninebot KickScooter E22E",
    precioEur: null, // modelo descatalogado; Segway ya no publica tarifa oficial (verificado 20/10/2026)
    potenciaNominalW: 300,
    potenciaPicoW: 700,
    bateriaWh: 184,
    autonomiaKm: 22,
    autonomiaRealKm: 15,
    velocidadMaxKmh: 20,
    pesoKg: 13.5,
    cargaMaxKg: 100,
    tiempoCargaH: 3.5,
    frenos: "Electrónico delantero + freno de pie trasero",
    neumaticos: 'Neumáticos de doble densidad 9"',
    certificadoDgt: null,
    foto: "/media/patinetes/segway-ninebot-e22e-1.webp",
    galeria: [
      {
        src: "/media/patinetes/segway-ninebot-e22e-2.webp",
        alt: "Segway Ninebot E22E compacto",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm", "tiempoCargaH"],
    pros: ["Con 13,5 kg y plegado en un solo gesto con el pie, es de los pocos con 22 km de autonomía declarada que se sube a un Cercanías o se mete en un maletero sin necesitar ayudante", "Su batería de 184 Wh va dentro del mástil, así la base queda despejada y el conjunto plegado se queda en 114 × 42 × 36 cm", "Acepta la segunda batería NEB1002-H1 montada sobre el mástil: es la vía oficial para pasar de los 22 km declarados a unos 45 km sin cambiar de patinete", "Recarga completa en 3,5 horas y neumáticos de 9 pulgadas de doble densidad antipinchazos: no hay cámaras de aire que vigilar entre semana"],
    contras: ["Los 22 km oficiales se quedan en unos 15 km reales según la ficha: una ida y vuelta con más de 7 km por trayecto ya obliga a cargarlo a diario", "Su techo de 20 km/h está 5 km/h por debajo del límite habitual de 25 km/h de un VMP y, en modo Sport, la batería de 184 Wh se agota visiblemente antes", "Rueda maciza de 9 pulgadas y sin suspensión: en adoquín, juntas de dilatación o asfalto roto, el E22E transmite las irregularidades directamente al manillar", "En la ficha no consta certificado DGT verificado y la protección es solo IPX4, así que queda en posición débil de cara a 2027 y no es un patinete para rodar bajo lluvia intensa"],
    veredicto:
      "Si tu trayecto diario cabe en unos 15 km reales y priorizas subir 13,5 kg al tren o a un piso sin ascensor, el E22E encaja: motor de 300 W, recarga en 3,5 horas y opción de segunda batería si un día necesitas ir más lejos. Si haces más kilómetros, vives en una zona con rampas por encima del 15 % o quieres circular a 25 km/h, mira directamente un modelo con una batería mayor.",
    fuenteNombre: "Manual oficial Segway (E22E)",
    fuenteUrl: "https://manuals.plus/segway/e22e-ninebot-kickscooter-manual",
    mantenimientoDIY: {"actualizacionFirmware": "Desde la app Segway-Ninebot, con el E22E encendido y enlazado por Bluetooth (icono fijo en la pantalla LED), busca la actualización en el apartado del vehículo y no lo apagues hasta que termine; si no activas el patinete en la app la primera vez, queda con velocidad muy limitada y pitando.", "trucos": ["Cambia de modo con una doble pulsación en el botón del manillar: sin «S» es el modo limitado que más ahorra, «S» blanca es Estándar y «S» roja es Sport, el que recorta autonomía a cambio de alcanzar los 20 km/h.", "La segunda batería específica de la serie E22 es la NEB1002-H1 y se monta sobre un raíl atornillado al mástil, junto al puerto de carga; no uses la NEB1002-U1, que es la de la serie E25.", "Con la batería dentro del mástil el peso va alto: en curvas cerradas y al bajar bordillos, retrasa el cuerpo y anticipa la frenada con el freno electrónico, porque el trasero exige pisar el guardabarros con el pie."]},
  },
  {
    id: "niu-kqi-300x",
    videoId: null,
    videoCanal: null,
    marca: "NIU",
    modelo: "KQi 300X",
    precioEur: 559,
    potenciaNominalW: 500,
    potenciaPicoW: 1000,
    bateriaWh: 608,
    autonomiaKm: 60,
    autonomiaRealKm: 40,
    velocidadMaxKmh: 25,
    pesoKg: 22.1,
    cargaMaxKg: 120,
    tiempoCargaH: 6,
    frenos: "Doble disco + regenerativo",
    neumaticos: 'Tubeless autoreparables 10.5"',
    certificadoDgt: null,
    foto: "/media/patinetes/niu-kqi-300x-1.webp",
    galeria: [
      {
        src: "/media/patinetes/niu-kqi-300x-2.webp",
        alt: "NIU KQi 300X con suspensión hidráulica",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm", "precioEur"],
    pros: ["Horquilla hidráulica de doble tubo con 45 mm de recorrido, útil de verdad sobre adoquín, juntas de dilatación y asfalto parcheado", "Empuje de 500 W con picos de 1.000 W y subida declarada del 25 %, con margen para rampas de garaje y cuestas urbanas llevando hasta 120 kg", "Batería de 608,4 Wh a 48 V: unos 40 km útiles por carga frente a rivales de menor batería que obligan a cargar casi a diario", "Intermitentes en los extremos del manillar, doble disco con frenada regenerativa y ruedas tubeless autoreparables de 10,5 pulgadas en el mismo equipamiento"],
    contras: ["Los 22,1 kg se notan al subir escaleras, levantarlo al maletero o plegarlo en un andén concurrido", "Recargar la batería completa lleva 6 horas, así que un olvido nocturno deja poco margen para improvisar al día siguiente", "La autonomía real de unos 40 km queda un tercio por debajo de los 60 km de catálogo, sobre todo en modo Sport y con pendientes", "En la ficha no consta certificado DGT verificado, un extremo a confirmar antes de comprarlo para circular en España"],
    veredicto:
      "Con 500 W nominales, 1.000 W de pico y capacidad para rampas del 25 %, el KQi 300X está pensado para quien hace trayectos urbanos largos y con firme irregular sin renunciar a los 25 km/h de la versión europea. Sus 608 Wh se traducen en unos 40 km reales, no en los 60 km declarados, y sus 22,1 kg penalizan a quien tenga que subirlo a pulso cada día. Encaja como patinete principal de diario; no encaja como modelo ligero de último kilómetro para combinar a todas horas con transporte público.",
    fuenteNombre: "NIU EU (ficha oficial KQi 300X)",
    fuenteUrl: "https://shopeu.niu.com/products/niu-kqi-300x-electric-scooter",
    mantenimientoDIY: {"actualizacionFirmware": "Desde la app de NIU, vinculada por Bluetooth, aceptando las actualizaciones OTA cuando las ofrezca; la misma app permite bloquear y desbloquear el patinete, ver estadísticas de ruta y fijar el límite de carga", "trucos": ["Mantén las ruedas tubeless autoreparables de 10,5 pulgadas entre 45 y 50 psi, presión indicada en la guía de instalación de la serie KQi 300, y revisa el inflado cada tres meses; un corte grande puede no sellar aunque el neumático sea autoreparable", "Fija en la app un límite de carga por debajo del 100 % para el uso diario de la batería de 608,4 Wh y reserva la carga completa para los días de trayecto largo", "Tras una ruta por firme roto, comprueba que la suspensión delantera de 45 mm recupera sin ruidos ni holgura y que ambos discos frenan recto: ese conjunto es el que más sufre en este modelo"]},
  },
  {
    id: "navee-n65",
    videoId: null,
    videoCanal: null,
    marca: "NAVEE",
    modelo: "N65",
    precioEur: null, // NAVEE no publica tarifa oficial para este modelo en su tienda europea (verificado 20/10/2026)
    potenciaNominalW: 500,
    potenciaPicoW: 900,
    bateriaWh: 600,
    autonomiaKm: 65,
    autonomiaRealKm: 43,
    velocidadMaxKmh: 25,
    pesoKg: 23.5,
    cargaMaxKg: 120,
    tiempoCargaH: 7.5,
    frenos: "E-ABS delantero + disco trasero",
    neumaticos: 'Neumáticos 10x3" de aire',
    certificadoDgt: null,
    foto: "/media/patinetes/navee-n65-1.webp",
    galeria: [
      {
        src: "/media/patinetes/navee-n65-2.webp",
        alt: "Navee N65 el Ninebot-Max killer",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm", "tiempoCargaH"],
    pros: ["Batería de 600 Wh con unos 43 km reales por carga: con recorridos de unos 10 km al día permite espaciar las recargas de una diaria a una semanal", "Motor de 500 W nominales y 900 W de pico con capacidad declarada para rampas del 25 % y carga máxima de 120 kg, por encima del tope de 100 kg habitual en patinetes urbanos", "Cubiertas neumáticas de 10x3 pulgadas y plataforma de 17 cm en aleación de magnesio que aportan estabilidad y espacio para los dos pies sin recurrir a ruedas macizas", "Frenada combinada E-ABS delantera y disco trasero, con control de crucero y recuperación de energía ajustables desde la aplicación de Navee"],
    contras: ["23,5 kg de peso real: cargarlo hasta un piso sin ascensor o subirlo al tren cada día se hace pesado, no es un patinete de último kilómetro ligero", "Recarga completa de unas 7,5 horas: si agotas la batería por la tarde, no vuelve a estar disponible hasta la mañana siguiente", "Carece de suspensión delantera y trasera, así que en adoquín, rejillas y bordillos todo el filtrado depende del balón de las cubiertas de aire", "Sin certificado DGT verificado en la ficha y limitado a 25 km/h pese a los 900 W de pico, queda por detrás de rivales directos ya certificados en España"],
    veredicto:
      "El N65 apuesta todo a la batería: 600 Wh, unos 43 km reales y un motor de 500 W con 900 W de pico para mover sin apuros a conductores de hasta 120 kg a 25 km/h. Es para quien hace trayectos largos en llano o con rampas y puede cargarlo toda la noche en casa. No es para quien sube escaleras a diario con el patinete a cuestas —pesa 23,5 kg— ni para quien necesite el certificado DGT ya verificado.",
    fuenteNombre: "Manual oficial Navee (N65)",
    fuenteUrl: "https://manuals.plus/m/33edc5b5099b5d74ab48437eed3536fe89befbe942d406be4eda4a67bd1bf194.pdf",
    mantenimientoDIY: {"actualizacionFirmware": "Desde la app Go Navee / Navee, con el N65 vinculado por Bluetooth: comprueba la versión en el panel del patinete, actualiza solo con batería holgada y sin interrumpir el emparejamiento hasta que la app confirme el reinicio.", "trucos": ["Presión mensual a 35 psi en las cubiertas 10x3\": es el valor recomendado en el manual del N65; por debajo de eso la autonomía real de 43 km cae y aumenta el riesgo de llantazo, por encima el patinete rebota al no llevar suspensión.", "Plegado de doble rotación sin forzar: engrasa ligeramente la zona plegable cada 6 meses y revisa la tornillería cada 3 meses, como indica el manual; si el cierre coge holgura, aprieta antes de que el manillar baile en marcha.", "Si lo guardas semanas, deja la batería de 600 Wh cargada y vuelve a cargarla al menos cada 3 meses; guardarlo descargado degrada las celdas y recorta la autonomía real."]},
  },
  {
    id: "inokim-quick-4-super",
    videoId: null,
    videoCanal: null,
    marca: "Inokim",
    modelo: "Quick 4 Super",
    precioEur: 1699,
    potenciaNominalW: 600,
    potenciaPicoW: 1100,
    bateriaWh: 832,
    autonomiaKm: 70,
    autonomiaRealKm: 47,
    velocidadMaxKmh: 38,
    pesoKg: 21.5,
    cargaMaxKg: 120,
    tiempoCargaH: 8,
    frenos: "Tambor delantero y trasero",
    neumaticos: 'Neumáticos 10" de aire',
    certificadoDgt: null,
    foto: "/media/patinetes/inokim-quick-4-super-1.webp",
    galeria: [
      {
        src: "/media/patinetes/inokim-quick-4-super-2.webp",
        alt: "Inokim Quick 4 Super con doble suspensión de goma",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm", "tiempoCargaH", "precioEur"],
    pros: ["Su batería de 832 Wh supera a la del Quick 4 Hero de 676 Wh y sostiene su autonomía declarada de 40 km", "El motor de 600 W mueve con margen su carga máxima de 120 kg, por encima de lo habitual en patinetes de 10 pulgadas", "La doble suspensión de goma, unida a neumáticos neumáticos de 10\", filtra bordillos y firme irregular sin muelles que ajustar", "Los frenos de tambor delantero y trasero son cerrados y piden menos atención que unos de disco expuestos a la suciedad urbana"],
    contras: ["Los 38 km/h de punta chocan con el tope legal de 25 km/h para VMP, así que tal cual no encaja para circular por vía pública en España", "De los 40 km anunciados a los 27 km reales hay una caída notable si ruedas rápido o con un piloto cercano a los 120 kg", "Sus 20,7 kg se notan al subirlo a un tren, a un piso sin ascensor o al maletero tras cada trayecto", "Recargar los 832 Wh lleva unas 8 horas: si te quedas tirado a mediodía, no lo recuperas para la vuelta de la tarde"],
    veredicto:
      "Con 832 Wh y 600 W, el Quick 4 Super declara 40 km pero en uso real se queda en unos 27 km, y sus 38 km/h lo dejan fuera del límite de 25 km/h para VMP en España. Es para quien prioriza batería grande, doble suspensión de goma y carga de 120 kg en trayectos privados o con el patinete limitado; no es para quien busque algo ligero —pesa 20,7 kg— ni para cargar y salir rápido, porque necesita 8 horas enchufado.",
    fuenteNombre: "Aurgi + ScooterXtreme (tienda oficial Inokim)",
    fuenteUrl: "https://www.scooterxtreme.es/accessories/descatalogados/patinete-electrico-inokim-quick-4-super",
    mantenimientoDIY: {"actualizacionFirmware": "No documentada por el fabricante", "trucos": ["No aprietes en exceso el tornillo de la T ajustable del manillar: el aviso de seguridad australiano de 2021 advirtió de fisuras en la potencia si se sobreaprieta o se rueda por terreno roto, bordillos y badenes", "Con 832 Wh de batería Samsung de 52 V y 16 Ah, déjalo guardado con carga parcial y recárgalo cada pocas semanas si no lo usas; meses a cero acortan su vida útil", "Revisa la presión de los neumáticos neumáticos de 10\" y el tacto de los tambores delantero y trasero: con tambor cerrado no verás el desgaste, lo notarás en una frenada más larga"]},
  },
  {
    id: "yadea-ks5-pro",
    videoId: null,
    videoCanal: null,
    marca: "Yadea",
    modelo: "KS5 Pro",
    precioEur: null, // Yadea no publica tarifa oficial para España (verificado 20/10/2026)
    potenciaNominalW: 500,
    potenciaPicoW: 700,
    bateriaWh: 562,
    autonomiaKm: 60,
    autonomiaRealKm: 40,
    velocidadMaxKmh: 35,
    pesoKg: 17.2,
    cargaMaxKg: 110,
    tiempoCargaH: 8,
    frenos: "Tambor delantero + disco y eléctrico traseros",
    neumaticos: 'Neumáticos macizos de 10"',
    certificadoDgt: null,
    foto: "/media/patinetes/yadea-ks5-pro-1.webp",
    galeria: [
      {
        src: "/media/patinetes/yadea-ks5-pro-2.webp",
        alt: "Yadea KS5 Pro con horquilla delantera",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm", "tiempoCargaH"],
    pros: ["562 Wh —36 V y 15,6 Ah— para unos 40 km reales: ida y vuelta diaria sin cargar cada noche, cuando el KS5 estándar se anuncia con 40 km en total", "500 W nominales y 700 W de pico contenidos en 17,2 kg: empuje para cuestas urbanas sin cargar con el peso de un patinete de batería mayor", "Triple freno ECBS con tambor delantero y disco más freno eléctrico traseros, con regeneración que devuelve parte de la energía a la batería al frenar", "Horquilla delantera y ruedas macizas de 10 pulgadas con IP54: se olvida de los pinchazos y de revisar presiones antes de salir"],
    contras: ["Los 35 km/h de la ficha superan el límite de 25 km/h de un VMP en España y la propia ficha no acredita certificado DGT, así que su encaje legal aquí queda en duda", "Recarga completa de unas 8 horas: si agotas la batería en un día largo no estará listo tras la comida, toca dejarlo enchufado toda la noche", "La rueda maciza de 10 pulgadas elimina pinchazos pero deja pasar más los adoquines y las juntas que una neumática, y la horquilla delantera solo lo compensa en parte", "Carga máxima justa de 110 kg: un conductor corpulento con mochila ya roza el límite y verá recortados empuje y autonomía reales"],
    veredicto:
      "Con 562 Wh, unos 40 km reales y 500 W nominales —700 W de pico— en 17,2 kg, el KS5 Pro encaja a quien hace trayectos diarios medios y quiere olvidarse de pinchar y de cargar cada noche. No encaja a quien necesite circular en España con certificado DGT acreditado o una recarga rápida: tarda unas 8 horas y los 35 km/h de su ficha superan el tope de un VMP.",
    fuenteNombre: "Yadea (ficha oficial KS5 Pro)",
    fuenteUrl: "https://yadea.co.ma/electric-kick-scooter/yadea-ks5-pro-electric-kick-scooter",
    mantenimientoDIY: {"actualizacionFirmware": "Desde la app oficial Yadea, por Bluetooth: vincula el KS5 Pro para consultar su estado, bloquearlo y aplicar las actualizaciones OTA de firmware; también ajusta modos de velocidad y el nivel de recuperación de energía en tres niveles", "trucos": ["Guarda la batería de 562 Wh entre el 50 % y el 70 % si no vas a usarlo durante semanas y recárgala al menos una vez cada tres meses, como indica el manual del KS5", "Revisa las ruedas macizas de 10 pulgadas buscando desgaste irregular y restos clavados en la banda: no pinchan, pero un corte profundo sí obliga a cambiar la cubierta", "Comprueba la tensión de los cables del tambor delantero y del disco trasero y limpia las barras de la horquilla tras la lluvia: el freno eléctrico regenerativo alivia las pastillas, no las sustituye"]},
  },
  {
    id: "okai-neon-pro",
    videoId: null,
    videoCanal: null,
    marca: "Okai",
    modelo: "Neon Pro",
    precioEur: null, // OKAI no publica tarifa oficial de venta al público en su tienda (verificado 20/10/2026)
    potenciaNominalW: 350,
    potenciaPicoW: 700,
    bateriaWh: 706,
    autonomiaKm: 43,
    autonomiaRealKm: 29,
    velocidadMaxKmh: 33,
    pesoKg: 21,
    cargaMaxKg: 122,
    tiempoCargaH: 6,
    frenos: "Electrónico delantero (ABS) + disco trasero",
    neumaticos: 'Neumáticos tubeless de 10"',
    certificadoDgt: null,
    foto: "/media/patinetes/okai-neon-pro-1.webp",
    galeria: [
      {
        src: "/media/patinetes/okai-neon-pro-2.webp",
        alt: "Okai Neon Pro con barras de luz personalizables",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm", "tiempoCargaH"],
    pros: [
      "706 Wh con celdas Samsung 21700",
      "IP55: uno de los más estancos",
      "Barras de luz personalizables",
      "App con control total",
    ],
    contras: [
      "Sin suspensión",
      "33 km/h: por encima del límite VMP",
      "Carga de 6-8 horas",
      "Sin certificado DGT verificado",
    ],
    veredicto:
      "El Neon Pro es el Okai rutero: 706 Wh con celdas Samsung e IP55. Okai fabrica patinetes compartidos para medio mundo, y eso se nota en la construcción.",
    fuenteNombre: "OC Pro Scooters (ficha técnica Okai Neon Pro)",
    fuenteUrl: "https://ocproscooters.com/okai-neon-pro-electric-scooter/?setCurrencyId=1&sku=ES30",
    mantenimientoDIY: {
      actualizacionFirmware: "App Okai: temas de pantalla y actualizaciones OTA",
      trucos: ["Tubeless 10x2.5\": sellante antipinchazos recomendado", "IP55: secar conexiones de carga tras lluvia"],
    },
  },
  {
    id: "emove-touring",
    videoId: null,
    videoCanal: null,
    marca: "EMOVE",
    modelo: "Touring",
    precioEur: 700, // 799 $ (tarifa oficial EE. UU.) ÷ 1,1225 (BCE 19/10/2026), redondeado a la centena
    potenciaNominalW: 500,
    potenciaPicoW: 750,
    bateriaWh: 624,
    autonomiaKm: 51,
    autonomiaRealKm: 40,
    velocidadMaxKmh: 40,
    pesoKg: 17.7,
    cargaMaxKg: 140,
    tiempoCargaH: 6,
    frenos: "Tambor delantero + electrónico trasero",
    neumaticos: 'Delantero 8" neumático, trasero 8" macizo',
    certificadoDgt: null,
    foto: "/media/patinetes/emove-touring-1.webp",
    galeria: [
      {
        src: "/media/patinetes/emove-touring-2.webp",
        alt: "EMOVE Touring con triple suspensión",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm", "tiempoCargaH", "precioEur"],
    pros: ["Triple suspensión con doble muelle delante y detrás y un tercer muelle en la dirección, una combinación rara en un patinete de 17,7 kg", "Plataforma de 22 por 7 pulgadas, la más amplia de la comparativa oficial de Voro frente a Splach Twin, Fluid Horizon y Fluid Mosquito", "Batería LG de 48 V y 13 Ah —624 Wh en total— para una autonomía declarada de 51 km sin disparar el peso como en sus rivales más pesados", "Mástil telescópico regulable y manillar que se pliega sobre sí mismo, para guardarlo en un maletero o apoyarlo junto a una mesa"],
    contras: ["Sale de Voro con motor trasero de 500 W y punta de 25 mph —unos 40 km/h—, una configuración estadounidense que no encaja con el tope exigido a los VMP en España", "Delante lleva neumático de 8 pulgadas con cámara y detrás uno macizo también de 8, así que bordillos y adoquines se notan pese a trabajar los tres muelles", "No consta certificado de circulación de la DGT para este Touring: en las fuentes oficiales consultadas solo figura como producto de Voro Motors para Estados Unidos", "La posventa pasa por Voro en California: garantía, diagnosis y envío de repuestos se tramitan desde allí, sin importador oficial en España localizado"],
    veredicto:
      "El Touring es el commuter de EMOVE pensado para ir cómodo sin irse a ruedas grandes: plataforma ancha, triple muelle y 624 Wh de LG en 17,7 kg. Frente a un Fluid Mosquito gana en superficie para los pies y en carga admisible —140 kg—, pero nace para el mercado estadounidense, con 40 km/h de punta y sin certificado DGT acreditado.",
    fuenteNombre: "Voro Motors (fabricante EMOVE)",
    fuenteUrl: "https://www.voromotors.com/blogs/news/emove-touring-electric-scooter-maintenance-guide",
    mantenimientoDIY: {
      actualizacionFirmware: "No documentada por el fabricante",
      trucos: ["Delantera 8\" con cámara: llevar kit antipinchazos", "Suspensión trasera de aire: revisar presión del amortiguador"],
    },
  },
  {
    id: "zero-10",
    videoId: null,
    videoCanal: null,
    marca: "Zero",
    modelo: "10",
    precioEur: null, // sin tarifa oficial del fabricante; solo distribuidores (verificado 20/10/2026)
    potenciaNominalW: 1000,
    potenciaPicoW: 1600,
    bateriaWh: 936,
    autonomiaKm: 70,
    autonomiaRealKm: 47,
    velocidadMaxKmh: 48,
    pesoKg: 24,
    cargaMaxKg: 120,
    tiempoCargaH: 7,
    frenos: "Disco delantero y trasero",
    neumaticos: 'Neumáticos de aire 10x2.5"',
    certificadoDgt: null,
    foto: "/media/patinetes/zero-10-1.webp",
    galeria: [
      {
        src: "/media/patinetes/zero-10-2.webp",
        alt: "Zero 10 con doble disco y suspensión delantera",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm", "tiempoCargaH"],
    pros: ["Su batería internacional de 52 V y 18 Ah suma 936 Wh y sostiene unos 47 km reales, cifra que permite enlazar ida y vuelta sin cargar a mitad de jornada", "El motor único trasero de 1.000 W nominales y 1.600 W de pico empuja con solvencia a un conductor de hasta 120 kg, sin la complejidad de un sistema de doble motor", "Las ruedas neumáticas de 10 x 2,5 pulgadas, unidas a la suspensión delantera y al doble amortiguador trasero, filtran mejor las juntas y los adoquines en rutas largas", "Lleva disco delante y detrás, un conjunto acorde con la velocidad y el peso de un patinete capaz de alcanzar 48 km/h"],
    contras: ["En España no puede tratarse como un VMP corriente: 48 km/h y 1.000 W superan el marco de 25 km/h y en la ficha no consta certificado de circulación de la DGT verificado", "Pesa 24 kg en la versión internacional, así que subirlo a un piso sin ascensor o meterlo en un maletero se convierte en parte del trayecto", "Recargar los 936 Wh lleva unas 7 horas, por lo que una descarga completa por la noche te deja sin margen si lo necesitas a primera hora", "La garantía limitada que publica la propia marca es de solo 6 meses y en España la compra depende de importadores, sin una red propia a la que acudir como con Xiaomi o Segway"],
    veredicto:
      "Con 936 Wh, unos 47 km reales frente a los 70 km anunciados y un único motor trasero de 1.000 W nominales, el Zero 10 está pensado para trayectos largos y cómodos sin recurrir al doble motor del 10X. Encaja si buscas autonomía y aplomo con ruedas de 10 pulgadas en recintos o vías donde puedas usarlo legalmente; no encaja como VMP urbano en España, porque sus 48 km/h quedan muy lejos del límite de 25 km/h y no consta certificado DGT verificado.",
    fuenteNombre: "ZERO Electric Scooters (ficha oficial)",
    fuenteUrl: "https://zeroelectricscooter.com/products/zero-10-electric-scooter",
    mantenimientoDIY: {"actualizacionFirmware": "No documentada por el fabricante", "trucos": ["Antes de salir, aprieta con la mano el cierre de plegado y revisa tornillería, presión de los neumáticos de 10 x 2,5 pulgadas y respuesta de ambos discos: es la comprobación que exige el manual de la serie Zero y en este modelo es crítica a 48 km/h", "No cargues su batería de 52 V y 18 Ah por debajo de 5 °C ni por encima de 40 °C, intervalos que el manual marca como límite, y deja el puerto de carga cerrado y seco tras las 7 horas de recarga", "Vigila el desgaste de las pastillas de los dos frenos de disco y el juego del doble amortiguador trasero: con 24 kg y carga máxima de 120 kg son las dos piezas que antes acusan los trayectos largos"]},
  },
  {
    id: "zero-9",
    videoId: null,
    videoCanal: null,
    marca: "Zero",
    modelo: "9",
    precioEur: null,
    potenciaNominalW: 600,
    bateriaWh: 624,
    autonomiaKm: 45,
    autonomiaRealKm: 31,
    velocidadMaxKmh: 47,
    pesoKg: 18,
    cargaMaxKg: 100,
    tiempoCargaH: null,
    frenos: "Disco delantero y tambor trasero",
    neumaticos: "Neumáticos de aire de 9\"",
    certificadoDgt: null,
    foto: "/media/patinetes/zero-9-oficial.webp",
    galeria: [],
    aprox: [
      "autonomiaRealKm"
    ],
    pros: [
      "18 kg y plegado de 100 × 20 × 39 cm",
      "Motor de 600 W, 48 V y 13 Ah de batería (624 Wh) y unos 45 km declarados",
      "Muelles de suspensión delante y detrás",
      "Freno de disco delante y de tambor detrás",
      "La ficha indica una versión limitada a 25 km/h, la conforme en Singapur"
    ],
    contras: [
      "La versión internacional llega a 47 km/h, casi el doble del límite español de 25 km/h",
      "Soporta como mucho 100 kg, menos que bastantes rivales",
      "Garantía de 6 meses, según la ficha",
      "Sin precio en euros ni certificado DGT en la ficha oficial",
      "La ficha no indica tiempo de carga",
      "Quien conduzca un Zero 9 en España necesita casco homologado y 15 años; el RD 518/2026 no admite excepciones"
    ],
    veredicto: "El Zero 9 es un patinete ligero (18 kg) con 600 W y 624 Wh, que la marca presenta como un Zero 8 con más potencia. En España habría que buscar la versión limitada a 25 km/h y el certificado de características: los 47 km/h de la versión internacional no se pueden usar en vía pública.",
    fuenteNombre: "Zero Electric Scooter (ficha oficial del Zero 9)",
    fuenteUrl: "https://zeroelectricscooter.com/products/zero-9",
    mantenimientoDIY: {
      actualizacionFirmware: "No documentada por el fabricante",
      trucos: [
        "Trasera de aire: revisar presión de los amortiguadores",
        "Manillar plegable: reapretar tras rutas largas"
      ]
    },
    potenciaPicoW: null
  },
  {
    id: "gotrax-g3",
    videoId: null,
    videoCanal: null,
    marca: "GOTRAX",
    modelo: "G3",
    precioEur: null, // la marca no publica tarifa oficial en su tienda oficial (verificado 20/10/2026)
    potenciaNominalW: 300,
    potenciaPicoW: 430,
    bateriaWh: 281,
    autonomiaKm: 29,
    autonomiaRealKm: 20,
    velocidadMaxKmh: 29,
    pesoKg: 16.5,
    cargaMaxKg: 100,
    tiempoCargaH: 5,
    frenos: "Regenerativo + disco trasero",
    neumaticos: 'Neumáticos de aire de 8.5"',
    certificadoDgt: null,
    foto: "/media/patinetes/gotrax-g3-1.webp",
    galeria: [
      {
        src: "/media/fotos-reales/gotrax-g3/gotrax-g3-real-0.webp",
        alt: "Gotrax G3 con bloqueo digital",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm"],
    pros: ["Con 16,5 kg y ruedas de 8,5 pulgadas es de los que todavía se pueden subir un piso por la escalera o meter en un maletero pequeño sin dejarte la espalda, algo que los modelos de 19-20 kg ya no permiten", "El bloqueo digital integrado te deja hacer una parada breve en una tienda sin cargar con un candado aparte: sin el código, el motor no responde", "Ruedas con cámara y suspensión trasera: un confort poco habitual en urbanos de su precio", "Combina freno regenerativo delante en la práctica de uso con disco trasero mecánico, así tienes retención al soltar el acelerador y una frenada de verdad cuando aprietas la maneta"],
    contras: ["Los 29 km/h declarados superan el tope de 25 km/h de un VMP en España y, sin certificado DGT verificado en la ficha, no puedes dar por hecho que sea matriculable como tal", "Entre los 29 km anunciados y los 20 km reales hay un tercio menos: si tu ida y vuelta supera esa cifra, llegarás empujando, y reponer la carga lleva 5 horas completas", "El motor de 300 W nominales, con 430 W de pico, va pensado para llanear en ciudad; con un conductor cercano a los 100 kg de carga máxima, cualquier rampa sostenida lo obliga a bajar mucho el ritmo", "Las ruedas neumáticas de 8,5 pulgadas absorben menos que las de 10 pulgadas de su versión Plus y, al ser de aire, exigen vigilar la presión y asumen el riesgo de pinchazo que una rueda maciza no tiene"],
    veredicto:
      "Si tu recorrido diario cabe en los 20 km reales que dan sus 281 Wh y buscas algo de 16,5 kg que puedas plegar y guardar sin pelearte con el peso, el G3 cumple con su motor de 300 W nominales y 430 W de pico. No te sirve si necesitas un VMP legal en España tal cual sale de la caja —declara 29 km/h y no consta certificado DGT verificado— ni si pesas cerca de su límite de 100 kg y vives en una zona con rampas, donde ese motor se quedará justo.",
    fuenteNombre: "Manual oficial Gotrax G3 (Manuals.plus)",
    fuenteUrl: "https://manuals.plus/m/e0bd500835e2b997f9b5be710276cc5356ae5925f4d98233364d66306ef9c55f",
    mantenimientoDIY: {"actualizacionFirmware": "No documentada por el fabricante", "trucos": ["Mantén las ruedas de 8,5\" a los 50 PSI que marca el flanco y recoge su manual: con presión baja, el G3 pierde parte de sus 20 km reales y el riesgo de llantazo al pillar un bordillo sube mucho", "Si el disco trasero roza o frena flojo, ajústalo con la llave Allen de 4 mm acortando o alargando el cable desde la pinza, como describe su manual, y prueba la maneta antes de salir", "Cuando el mástil empiece a coger holgura, abre la tapa del mecanismo de plegado y reaprieta sus tornillos con la Allen: es el juego típico de este modelo tras meses de abrirlo y cerrarlo a diario"]},
  },
  {
    id: "turboant-thunder-t1",
    videoId: null,
    videoCanal: null,
    marca: "TurboAnt",
    modelo: "Thunder T1",
    // 24/10/2026 (Grok decisión 2): NO es un patinete: es una bicicleta eléctrica fat.
    // Aviso arriba de la ficha + fuera del comparador/listados de patinetes, noindex y fuera del sitemap.
    avisoCategoria: "Bicicleta eléctrica fat: no es un patinete ni un VMP",
    fueraDeComparador: true,
    precioEur: null, // modelo descatalogado; TurboAnt ya no publica tarifa oficial (verificado 20/10/2026)
    potenciaNominalW: 750,
    potenciaPicoW: null,
    bateriaWh: 672,
    autonomiaKm: 97,
    autonomiaRealKm: 26,
    velocidadMaxKmh: 45,
    pesoKg: 33,
    cargaMaxKg: 120,
    tiempoCargaH: 7,
    frenos: "Disco Tektro Aries 180 mm",
    neumaticos: '26 x 4,0" fat (Kenda)',
    certificadoDgt: null,
    foto: "/media/patinetes/turboant-thunder-t1-1.webp",
    galeria: [
      {
        src: "/media/patinetes/turboant-thunder-t1-2.webp",
        alt: "TurboAnt Thunder T1 con horquilla delantera hidráulica",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm", "tiempoCargaH"],
    pros: [
      "672 Wh con hasta 97 km de autonomía asistida (1.699 $ en EE. UU.)",
      "Horquilla delantera hidráulica RST ajustable",
      "IP54",
      "33 kg: una e-bike fat, no un patinete ligero",
    ],
    contras: [
      "45 km/h y 33 kg: no es un VMP; en España, solo fuera de la vía pública",
      "Bicicleta eléctrica mal clasificada como patinete en muchos sitios",
      "Sin certificado DGT verificado",
      "Marca de EE. UU., sin red en Europa",
    ],
    veredicto:
      "El Thunder T1 no es un patinete: es una bicicleta eléctrica fat con motor de 750 W, batería extraíble de 672 Wh y ruedas de 26 x 4 pulgadas. Por 1.699 $ en EE. UU. era una e-bike redonda; en España, su uso legal es fuera de la vía pública.",
    fuenteNombre: "Electric Scooter Guides (comparativa TurboAnt Thunder T1)",
    fuenteUrl: "https://www.electricscooterguides.com/reviews/turboant-thunder-t1",
    mantenimientoDIY: {
      actualizacionFirmware: "No documentada por el fabricante",
      trucos: ["Neumáticos fat de 26 x 4\": presión más alta para asfalto y más baja para tierra, dentro del rango del flanco", "Horquilla hidráulica delantera: limpiar las barras tras rodar con barro"],
    },
  },
  {
    id: "xiaomi-electric-scooter-4-pro-plus",
    videoId: null,
    videoCanal: null,
    marca: "Xiaomi",
    modelo: "Electric Scooter 4 Pro Plus",
    precioEur: null, // Xiaomi no ha anunciado precio oficial en España para este modelo (verificado 20/10/2026)
    potenciaNominalW: 350,
    potenciaPicoW: 960,
    bateriaWh: 490,
    autonomiaKm: 60,
    autonomiaRealKm: 42,
    velocidadMaxKmh: 25,
    pesoKg: 19.5,
    cargaMaxKg: 120,
    tiempoCargaH: 9,
    frenos: "E-ABS + tambor",
    neumaticos: 'Neumáticos run-flat de 10"',
    certificadoDgt: null,
    foto: "/media/patinetes/xiaomi-electric-scooter-4-pro-plus-1.webp",
    galeria: [
      {
        src: "/media/patinetes/xiaomi-electric-scooter-4-pro-plus-2.webp",
        alt: "Xiaomi Electric Scooter 4 Pro Plus con intermitentes",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm"],
    pros: [
      "960 W de pico con tracción trasera",
      "60 km declarados con 490 Wh",
      "Intermitentes integrados",
      "Neumáticos run-flat antipinchazos",
    ],
    contras: [
      "Carga de 9 h (3 h con cargador rápido aparte)",
      "IPX4: solo salpicaduras",
      "19,5 kg sin suspensión",
      "Precio sin PVP España verificado",
    ],
    veredicto:
      "El 4 Pro Plus es el Xiaomi tope de gama urbano: 960 W de pico, 60 km declarados e intermitentes. El Pro definitivo para quien quiere el máximo Xiaomi legal.",
    fuenteNombre: "Xiaomi (ficha oficial 4 Pro Plus)",
    fuenteUrl: "http://www.mi.com/global/product/xiaomi-electric-scooter-4-pro-plus/specs/",
    mantenimientoDIY: {
      actualizacionFirmware: "Xiaomi Home App: actualizaciones OTA por Bluetooth",
      trucos: ["Run-flat 10\": seguir rodando con pinchazo leve", "Cargador rápido oficial: 3 h en vez de 9 h"],
    },
  },
  {
    id: "segway-ninebot-f40e",
    videoId: null,
    videoCanal: null,
    marca: "Segway",
    modelo: "Ninebot F40E",
    precioEur: null,
    potenciaNominalW: 350,
    potenciaPicoW: null,
    bateriaWh: 367,
    autonomiaKm: 40,
    autonomiaRealKm: 27,
    velocidadMaxKmh: 25,
    pesoKg: 17.1,
    cargaMaxKg: 120,
    tiempoCargaH: 6.5,
    frenos: "Freno eléctrico regenerativo delante + disco trasero",
    neumaticos: "Tubeless de 10\" con capa interior de gel",
    certificadoDgt: null,
    foto: "/media/patinetes/segway-ninebot-f40e-oficial.webp",
    galeria: [],
    aprox: [
      "autonomiaRealKm"
    ],
    pros: [
      "Motor de 350 W, 20 % de pendiente y 25 km/h, según la web oficial",
      "Batería de 367 Wh con 40 km declarados y carga en 6,5 horas",
      "Neumáticos sin cámara de 10\" con capa de gel interior para reducir el riesgo de pinchazo",
      "Frenado con freno eléctrico regenerativo delante y disco trasero",
      "Marco de acero estructural, plegado en dos pasos con una mano y pantalla LED con Bluetooth"
    ],
    contras: [
      "Sin suspensión declarada: solo amortiguan los neumáticos",
      "El peso de 17,1 kg procede de una presentación de la serie alojada fuera de segway.com (dato orientativo, no oficial)",
      "El catálogo de la tienda de Segway en España (31/10/2026) no lo incluye ni da precio de marca",
      "El rango de 40 km depende de la carga, la pendiente y el modo; nuestra cifra real es una estimación",
      "La carga completa tarda 6,5 horas",
      "Segway admite a partir de los 14, mientras que en España mandan los 15 años cumplidos y el casco del RD 518/2026"
    ],
    veredicto: "El F40E es el F de más batería de la gama europea: 350 W, 367 Wh y 40 km declarados. Es una opción sencilla para trayectos urbanos, pero no figura ya en la tienda oficial española y su peso procede de un dato no oficial.",
    fuenteNombre: "Segway: web oficial del Ninebot F40E",
    fuenteUrl: "https://eg-en.segway.com/ekickscooter/products/f40e.html",
    mantenimientoDIY: {
      actualizacionFirmware: "Desde la app Segway-Ninebot por Bluetooth: conecta el F40E, busca la actualización de firmware en la app y no lo uses mientras se instala; la pantalla a color también avisa de mantenimiento y la app muestra los códigos de error.",
      trucos: [
        "Mantén las tubeless de 10 pulgadas entre 50 y 55 psi, la presión indicada en el manual del F40E, y vuelve a roscar el tapón de la válvula tras hincharlas: por debajo de ese rango se resienten el consumo y los 27 km reales.",
        "La capa de gel interna sella pinchazos pequeños, pero no sustituye la inspección: gira ambas ruedas y busca cortes, deformación o desgaste acusado antes de que deje de sellar.",
        "Después de rodar con lluvia, pese al IPX5, seca el disco trasero y comprueba que la luz de freno responde al accionar la maneta, porque ese disco complementa al freno electrónico delantero."
      ]
    }
  },
  {
    id: "smartgyro-dual-max-2",
    videoId: null,
    videoCanal: null,
    marca: "SmartGyro",
    modelo: "Dual Max 2",
    precioEur: null, // SmartGyro no publica tarifa oficial; solo precios de distribuidor (verificado 20/10/2026)
    potenciaNominalW: null,
    potenciaPicoW: 1000,
    bateriaWh: 720,
    autonomiaKm: 60,
    autonomiaRealKm: 40,
    velocidadMaxKmh: null,
    pesoKg: null,
    cargaMaxKg: null,
    tiempoCargaH: null,
    frenos: "Triple frenada",
    neumaticos: 'Ruedas Dual Grip de 10"',
    certificadoDgt: null,
    foto: "/media/patinetes/smartgyro-dual-max-2-1.webp",
    galeria: [
      {
        src: "/media/patinetes/smartgyro-dual-max-2-2.webp",
        alt: "Smartgyro Dual Max 2 con doble motor",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm"],
    pros: [
      "Doble motor 48V",
      "720 Wh con 60 km declarados",
      "Triple frenada",
      "Smart Core con app",
    ],
    contras: [
      "Sin certificado DGT verificado",
      "Peso no publicado",
      "Precio sin PVP España verificado",
      "Doble motor: consumo alto en modo sport",
    ],
    veredicto:
      "El Dual Max 2 es el buque insignia dual de Smartgyro: dos motores 48V, 720 Wh y 60 km declarados con triple frenada. La bestia española para riders exigentes, siempre que los papeles cuadren: peso, velocidad máxima, precio y certificado DGT no figuran en la presentación oficial.",
    fuenteNombre: "Smartgyro (canal oficial YouTube)",
    fuenteUrl: "https://www.youtube.com/watch?v=paAcxsjhrts",
    mantenimientoDIY: {
      actualizacionFirmware: "App SmartGyro CORE: actualizaciones OTA",
      trucos: ["Doble motor: alternar tracción para ahorrar batería", "Dual Grip 10\": revisar desgaste de ambos ejes"],
    },
  },
  {
    id: "segway-ninebot-e25e",
    videoId: null,
    videoCanal: null,
    marca: "Segway",
    modelo: "Ninebot E25E",
    precioEur: null,
    potenciaNominalW: 300,
    potenciaPicoW: 600,
    bateriaWh: 215,
    autonomiaKm: 25,
    autonomiaRealKm: 18,
    velocidadMaxKmh: 25,
    pesoKg: 14.3,
    cargaMaxKg: 100,
    tiempoCargaH: 4,
    frenos: "Freno eléctrico y regenerativo delante, freno de pie y magnético detrás",
    neumaticos: "Neumáticos antipinchazos de 9\" (doble densidad)",
    certificadoDgt: null,
    foto: "/media/patinetes/segway-ninebot-e25e-oficial.webp",
    galeria: [],
    aprox: [
      "autonomiaRealKm"
    ],
    pros: [
      "25 km/h con motor delantero de 300 W (600 W máx.) y 15 % de pendiente",
      "14,3 kg según Segway Italia",
      "Neumáticos de 9\" antipinchazos de doble densidad, sin mantenimiento",
      "Tres frenos: eléctrico y regenerativo delante, magnético y de pie detrás",
      "Control de crucero, luces ambientales personalizables y luz delantera de 2,5 W",
      "Se puede ampliar a 45 km con una batería externa opcional (20 % de pendiente)"
    ],
    contras: [
      "215 Wh: 25 km declarados y sin batería externa, que se vende aparte",
      "IPX4: solo resiste salpicaduras, según la propia web",
      "Carga máxima de 100 kg y sin intermitentes",
      "Falta en la tienda española de Segway a fecha 31/10/2026",
      "Usarlo como primer patinete exige casco y 15 años cumplidos, no los 14 del manual de Segway"
    ],
    veredicto: "El E25E es un patinete ligero y de 25 km/h para trayectos cortos, con ruedas sin pinchazos y batería ampliable. Su batería de 215 Wh limita el rango a unos 25 km y ya no figura en la tienda oficial de Segway España.",
    fuenteNombre: "Segway Italia: web oficial del Ninebot E25E",
    fuenteUrl: "https://it-it.segway.com/ekickscooter/products/e25e.html",
    mantenimientoDIY: {
      actualizacionFirmware: "Desde la app Segway-Ninebot, con el E25E encendido y enlazado por Bluetooth, entra en la ficha del vehículo y aplica las actualizaciones OTA que ofrezca; no lo pliegues ni lo apagues durante el proceso y comprueba después en la misma app los códigos de error y el estado de la batería de 215 Wh.",
      trucos: [
        "Usa solo la batería externa NEB1002-U1, la específica de la serie E25: la NEB1002-H1 es de las series ES y E22 y no es la suya. Al montarla sobre el mástil la autonomía declarada pasa a 45 km y la pendiente al 20 %, pero la velocidad del E25E se mantiene en 25 km/h.",
        "Revisa el desgaste de las ruedas macizas de 9 pulgadas por zonas planas o brillos desiguales y limpia la espuma y la suciedad del amortiguador delantero: sin cámara de aire no hay pinchazo, pero una rueda deformada se nota en vibraciones constantes al manillar.",
        "Guárdalo plegado con la batería del mástil a media carga si va a estar parado semanas y recárgalo antes de volver a usarlo; dejar los 215 Wh a cero durante mucho tiempo es la forma más rápida de que esos 18 km reales se queden en bastante menos."
      ]
    }
  },
  {
    id: "okai-neon",
    videoId: null,
    videoCanal: null,
    marca: "Okai",
    modelo: "Neon",
    precioEur: null, // OKAI no publica tarifa oficial de venta al público en su tienda (verificado 20/10/2026)
    potenciaNominalW: 300,
    potenciaPicoW: 600,
    bateriaWh: 353,
    autonomiaKm: 40,
    autonomiaRealKm: 25,
    velocidadMaxKmh: 25,
    pesoKg: 16,
    cargaMaxKg: 100,
    tiempoCargaH: null,
    frenos: "E-ABS + disco",
    neumaticos: 'Delantero 8.5" aire / trasero 8.5" macizo',
    certificadoDgt: null,
    foto: "/media/patinetes/okai-neon-1.webp",
    galeria: [
      {
        src: "/media/patinetes/okai-neon-2.webp",
        alt: "Okai Neon blanco con luces LED",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm"],
    pros: ["La iluminación no es un adorno fijo: lleva bandas LED de amplio espectro en la columna y bajo la plataforma, configurables desde la app de Okai entre miles de colores, y fue presentado como el primer patinete con iluminación neón totalmente personalizable", "Se desbloquea con tarjeta NFC o con el móvil emparejado, y desde la app de Okai puedes bloquearlo, ver historial de rutas, ejecutar diagnósticos y ajustar modos de conducción y temas de la pantalla circular", "Mezcla rueda delantera neumática de 8,5\" para filtrar adoquines con trasera maciza de 8,5\" antipinchazos, compensada por una suspensión trasera oculta que rivales de rueda maciza sin suspensión no ofrecen", "El conjunto de freno electrónico E-ABS delantero y disco trasero, junto al motor capaz de superar rampas del 20 %, encaja con un uso urbano con paradas frecuentes y cuestas cortas sin salirte de los 25 km/h"],
    contras: ["Los 353 Wh se quedan en unos 25 km reales frente a los 40 km anunciados: si tu ida y vuelta supera esa cifra, tocará cargar casi a diario y la recarga completa ronda las 5,5-6 horas según el manual", "La rueda trasera maciza elimina pinchazos pero transmite más vibración en juntas y badenes que una trasera neumática, pese al trabajo de la suspensión oculta", "Pesa 16 kg con carga máxima de solo 100 kg: plegado con un clic sí, ligero para subir escaleras o cargar en el metro no, y a usuarios de más peso se les quedará justo de motor", "En la ficha no consta certificado DGT verificado y la luz delantera de serie se queda justa para rodar de noche fuera de calles bien iluminadas, según las pruebas del ES20"],
    veredicto:
      "El Okai Neon ES20 es un urbano de diseño antes que de cifras: 353 Wh para unos 25 km reales, 300 W nominales con 600 W de pico y 25 km/h, pensado para trayectos cortos donde importa llegar visible y con un patinete distinto. Es para quien valora la firma LED personalizable, el desbloqueo por NFC y el IPX5 en desplazamientos diarios cortos. No es para quien necesite más de 20-25 km sin cargar, suba a diario varios pisos con sus 16 kg a cuestas o busque un certificado DGT verificado en la ficha.",
    fuenteNombre: "Electrek (review Okai Neon)",
    fuenteUrl: "https://electrek.co/2022/01/17/okai-neon-beautiful-connected-clean-electric-scooter-video/",
    mantenimientoDIY: {"actualizacionFirmware": "Mediante la app oficial de Okai en iOS y Android: empareja el Neon por Bluetooth, comprueba desde la app el estado de batería y los diagnósticos y aplica las actualizaciones que la propia app proponga para el ES20", "trucos": ["Vigila cada semana la presión de la delantera neumática de 8,5\": es la única rueda con aire del Neon, y rodar baja de presión dispara el consumo de los 353 Wh y deja todo el golpe en la llanta en los bordillos", "Configura las bandas LED de columna y plataforma solo desde la app antes de salir: sin el móvil no se apagan ni se cambia el color, y de noche conviene dejar un color fijo bien visible en vez de efectos que distraigan", "Guarda la tarjeta NFC del Neon separada del patinete y deja el móvil ya emparejado como segunda llave: si pierdes la tarjeta, el desbloqueo pasa por la app, y revisa de paso el cierre de plegado de un clic y su correa de seguridad antes de cargarlo plegado"]},
  },
];
