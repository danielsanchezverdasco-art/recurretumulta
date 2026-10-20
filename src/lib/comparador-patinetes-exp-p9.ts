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
    marca: "Gotrax",
    modelo: "Eclipse",
    precioEur: null,
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
        src: "/media/patinetes/gotrax-eclipse-2.webp",
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
    marca: "Smartgyro",
    modelo: "Raptor Black",
    precioEur: null,
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
    marca: "Smartgyro",
    modelo: "Z-One",
    precioEur: null,
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
    precioEur: null,

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 30,
    aprox: ["autonomiaRealKm"],
    pros: [
      "Menos de 14 kg: de los más ligeros con 461 Wh",
      "Doble freno de tambor, bajo mantenimiento",
      "Diseño Inokim premium",
    ],
    contras: [
      "34 km/h: por encima del límite VMP",
      "Ruedas de 8,5\": menos confort en baches",
      "Precio premium",
    ],
    veredicto:
      "El Light 2 Max es el urbano ligero de Inokim: menos de 14 kg con 461 Wh y acabados premium. Ideal si lo subes a diario, aunque sus 34 km/h superan el límite VMP.",
    fuenteNombre: "Electric Kicks",
    fuenteUrl: "https://www.electrickicks.com.au/products/inokim-light-2-2023-electric-scooter",
    mantenimientoDIY: {
      actualizacionFirmware: "No documentada por el fabricante",
      trucos: ["Los frenos de tambor no necesitan ajuste: duran miles de km sin mantenimiento"],
    },
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
    precioEur: null,

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 35,
    aprox: ["autonomiaRealKm"],
    pros: [
      "25 km/h: dentro del límite VMP",
      "676 Wh con ~35 km reales",
      "Frenos de tambor F+R + IP54",
      "Ruedas de 10\"",
    ],
    contras: [
      "21,5 kg de peso",
      "Precio premium Inokim",
      "Carga lenta para 676 Wh",
    ],
    veredicto:
      "El Quick 4 Hero es el Inokim más rutero: 676 Wh, 25 km/h legales e IP54. Pesa 21,5 kg, pero a cambio ofrece autonomía y acabados de gama alta.",
    fuenteNombre: "Inokim (manual oficial)",
    fuenteUrl: "https://dosya.epey.com/713210/inokim-quick-4-7054.pdf",
    mantenimientoDIY: {
      actualizacionFirmware: "No documentada por el fabricante",
      trucos: ["Presión recomendada 40-50 PSI en los 10\": clave para llegar a los 50 km declarados"],
    },
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
    precioEur: null,

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
      "Precio sin confirmar",
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
    marca: "E-TWOW",
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
    precioEur: null,

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 20,
    aprox: ["autonomiaRealKm"],
    pros: [
      "11,5 kg: ultraligero",
      "500 W en formato bolsillo",
      "Plegado compacto",
    ],
    contras: [
      "Autonomía real de ~20 km",
      "30 km/h: por encima del límite VMP",
      "Ruedas pequeñas, poco confort",
    ],
    veredicto:
      "El Booster Plus S es el E-TWOW clásico: 500 W y 11,5 kg para llevarlo a todas partes. Autonomía justa (~20 km reales), pero imbatible en portabilidad.",
    fuenteNombre: "Electric Scooter Shop NZ",
    fuenteUrl: "https://www.electricscootershop.co.nz/products/e-twow-booster-plus-s-electric-scooter",
    mantenimientoDIY: {
      actualizacionFirmware: "No documentada por el fabricante",
      trucos: ["Las ruedas macizas de 8\" no pinchan: cero mantenimiento de neumáticos"],
    },
  },
  {
    id: "etwow-s2-booster-plus",
    marca: "E-TWOW",
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
    precioEur: null,

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
    marca: "E-TWOW",
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
    precioEur: null,

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 22,
    aprox: ["autonomiaRealKm"],
    pros: [
      "10,9 kg con 378 Wh",
      "Pantalla LCD a color",
      "650 W de pico",
    ],
    contras: [
      "40 km/h: muy por encima del límite VMP",
      "Autonomía real de ~22 km",
      "Precio alto para su tamaño",
    ],
    veredicto:
      "El Booster Sport es el E-TWOW más radical: 650 W de pico y 40 km/h en 10,9 kg. Diversión pura, pero fuera de cualquier marco VMP español.",
    fuenteNombre: "Electric Scooter Guides",
    fuenteUrl: "https://www.electricscooterguides.com/reviews/e-twow-booster-sport",
    mantenimientoDIY: {
      actualizacionFirmware: "No documentada por el fabricante",
      trucos: ["El control de crucero ahorra batería en tramos largos y llanos"],
    },
  },
  {
    id: "gotrax-rival",
    marca: "Gotrax",
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
      { src: "/media/patinetes/gotrax-rival-2.webp", alt: "Gotrax Rival plegado en una oficina", ancho: 1200, alto: 800 },
    ],
    precioEur: null,

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 14,
    aprox: ["autonomiaRealKm"],
    pros: [
      "12 kg: ligero y manejable",
      "25 km/h: dentro del límite VMP",
      "Certificación UL2272",
      "Disco trasero + EABS",
    ],
    contras: [
      "187 Wh: autonomía real de ~14 km",
      "250 W justos en cuestas",
      "Ruedas de 8,5\"",
    ],
    veredicto:
      "El Rival es el Gotrax de entrada perfecto: 12 kg, 25 km/h y UL2272. Autonomía corta (~14 km), pero ideal como primer patinete o para trayectos cortos.",
    fuenteNombre: "Plettro (ficha de producto)",
    fuenteUrl: "https://plettro.com/products/gotrax-rival-adult-commuting-electric-scooters-max-load-220lbs-foldable-electric-scooter",
    mantenimientoDIY: {
      actualizacionFirmware: "No documentada por el fabricante",
      trucos: ["Neumáticos de aire: mantenerlos a 50 PSI (340 kPa) según el fabricante para no perder autonomía"],
    },
  },
  {
    id: "gotrax-g5",
    marca: "Gotrax",
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
      { src: "/media/patinetes/gotrax-g5-2.webp", alt: "Gotrax G5 con suspensión delantera", ancho: 1200, alto: 800 },
    ],
    precioEur: null,

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 30,
    aprox: ["autonomiaRealKm"],
    pros: [
      "461 Wh con ~30 km reales",
      "Doble tambor + freno electromagnético",
      "Suspensión delantera e IP54",
    ],
    contras: [
      "32 km/h: por encima del límite VMP",
      "20 kg de peso",
      "Sin app conectada",
    ],
    veredicto:
      "El G5 es el Gotrax equilibrado: 461 Wh, triple frenada y suspensión delantera. Sus 32 km/h lo dejan fuera del marco VMP, pero como rutero es sólido.",
    fuenteNombre: "Tensela (ficha técnica Gotrax G5)",
    fuenteUrl: "https://tensela.tech/gotrax-g5-electric-scooter-review/",
    mantenimientoDIY: {
      actualizacionFirmware: "No documentada por el fabricante",
      trucos: ["Revisar los aprietes de la suspensión delantera tras las primeras salidas", "El control de crucero ahorra batería en tramos llanos"],
    },
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
    precioEur: null,

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 20,
    aprox: ["autonomiaRealKm"],
    pros: [
      "13,5 kg con ruedas de 10\" de aire",
      "Motor trasero de 350 W",
      "IP54",
    ],
    contras: [
      "32 km/h: supera el límite VMP",
      "Autonomía real de ~20 km",
      "Sin suspensión",
    ],
    veredicto:
      "El M10 combina ligereza (13,5 kg) con ruedas de aire de 10\": confort sin suspensión. Sus 32 km/h superan el límite VMP, pero en comodidad gana a sus rivales.",
    fuenteNombre: "Electric Wheelers (review TurboAnt M10)",
    fuenteUrl: "https://electricwheelers.com/turboant-m10-review/",
    mantenimientoDIY: {
      actualizacionFirmware: "No documentada por el fabricante",
      trucos: ["Motor trasero: mejor aceleración que sus hermanos de motor delantero", "Neumáticos de 10\" con cámara: llevar kit antipinchazos en ruta"],
    },
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
    precioEur: null,

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 17,
    aprox: ["autonomiaRealKm"],
    pros: [
      "Batería extraíble de 230 Wh",
      "Soporta 125 kg de carga",
      "Triple sistema de freno",
      "Plegado compacto",
    ],
    contras: [
      "Autonomía real de ~17 km",
      "30 km/h: por encima del límite VMP",
      "Batería pequeña",
    ],
    veredicto:
      "El X7 destaca por su batería extraíble y sus 125 kg de carga máxima. Autonomía justa (~17 km), pero la batería de repuesto duplica el alcance.",
    fuenteNombre: "Make Tech Easier (review TurboAnt X7)",
    fuenteUrl: "https://maketecheasier.com/turboant-x7-escooter-review/",
    mantenimientoDIY: {
      actualizacionFirmware: "No documentada por el fabricante",
      trucos: ["La batería extraíble del mástil se carga fuera del patinete: ideal si no tienes enchufe en el garaje", "Neumáticos tubeless a 50 PSI según el fabricante"],
    },
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
    precioEur: null,

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 9,
    aprox: ["autonomiaRealKm"],
    pros: [
      "9,8 kg: ultraligero",
      "24 km/h: dentro del límite VMP",
      "Plegado antitraqueteo",
      "Ruedas macizas: cero pinchazos",
    ],
    contras: [
      "Autonomía real de ~9 km",
      "250 W y ruedas de 8\": básico",
      "Sin pantalla avanzada",
    ],
    veredicto:
      "El E-Prime es el Razor esencial: 9,8 kg y plegado sin traqueteos para el último kilómetro. Autonomía mínima (~9 km), pero portabilidad máxima.",
    fuenteNombre: "Jansonic (ficha Razor E Prime)",
    fuenteUrl: "https://jansonic.com/products/razor-e-prime-electric-scooter",
    mantenimientoDIY: {
      actualizacionFirmware: "No documentada por el fabricante",
      trucos: ["Arranque por impulso (kick-to-start): hay que empujar con el pie antes de acelerar", "Ruedas macizas: cero pinchazos pero menos confort en adoquines"],
    },
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
    precioEur: null,

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 11,
    aprox: ["autonomiaRealKm"],
    pros: [
      "9,9 kg: ultraligero",
      "Rueda delantera de aire: más confort",
      "24 km/h: dentro del límite VMP",
    ],
    contras: [
      "118 Wh: ~11 km reales",
      "Rueda trasera maciza",
      "Básico en equipamiento",
    ],
    veredicto:
      "El E-Prime Air añade la rueda delantera de aire al ultraligero de Razor: 9,9 kg con más confort. Sigue siendo un urbano de trayectos muy cortos.",
    fuenteNombre: "Canadian Tire (ficha Razor E Prime Air)",
    fuenteUrl: "https://www.canadiantire.ca/en/pdp/razor-e-prime-air-electric-scooter-24km-h-black-1840425p.html",
    mantenimientoDIY: {
      actualizacionFirmware: "No documentada por el fabricante",
      trucos: ["La rueda delantera de aire absorbe baches: mantenerla bien hinchada", "Manillar regulable en altura: ajustarlo a la cadera para ir cómodo"],
    },
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
    precioEur: null,

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 18,
    aprox: ["autonomiaRealKm"],
    pros: [
      "13,5 kg con app conectada",
      "Ruedas macizas: cero pinchazos",
      "IPX4",
    ],
    contras: [
      "30 km/h: supera el límite VMP",
      "Autonomía real de ~18 km",
      "Sin suspensión",
    ],
    veredicto:
      "El Nex3 es el Hiboy urbano conectado: 13,5 kg, app y ruedas macizas sin mantenimiento. Sus 30 km/h superan el límite VMP, pero como commuter es práctico.",
    fuenteNombre: "Manual oficial Hiboy NEX3 (PDF)",
    fuenteUrl: "https://manuals.plus/hiboy/nex3-electric-scooter-8-5-inch-solid-tires-manual",
    mantenimientoDIY: {
      actualizacionFirmware: "App Hiboy: bloqueo y ajustes de velocidad",
      trucos: ["Con 13,5 kg se sube a pulso al metro: agarrar por el mástil", "Ruedas macizas: cero mantenimiento de pinchazos"],
    },
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
    precioEur: null,

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 35,
    aprox: ["autonomiaRealKm"],
    pros: [
      "Doble batería extraíble: 540 Wh y ~35 km reales",
      "Doble suspensión trasera",
      "App con bloqueo",
    ],
    contras: [
      "18,6 kg de peso",
      "30 km/h: por encima del límite VMP",
      "Carga de dos baterías",
    ],
    veredicto:
      "El Nex5 dobla la apuesta: dos baterías extraíbles de 270 Wh y suspensión trasera doble. 18,6 kg a cambio de ~35 km reales y cero pinchazos.",
    fuenteNombre: "Electric Scooter Adults (ficha Hiboy NEX5)",
    fuenteUrl: "https://electricscooteradults.com/hiboy_nex5_electric_scooter_19_mph_34_miles_long_range.html",
    mantenimientoDIY: {
      actualizacionFirmware: "App Hiboy NEX5: estado, bloqueo y ajustes",
      trucos: ["Se puede circular con una sola batería para aligerar peso en trayectos cortos", "Carga independiente de cada batería: 8-10 h las dos en paralelo"],
    },
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
    precioEur: null,

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 38,
    aprox: ["autonomiaRealKm"],
    pros: [
      "25 km/h en versión UE: dentro del límite VMP",
      "720 Wh con ~38 km reales",
      "Doble suspensión e IP54",
      "App con funciones avanzadas",
    ],
    contras: [
      "24,45 kg: pesado",
      "Carga lenta para 720 Wh",
      "Sin certificado DGT verificado",
    ],
    veredicto:
      "El i10 Pro es el rutero UE de iScooter: 720 Wh, doble suspensión y 25 km/h legales. Pesa 24,45 kg, pero ofrece autonomía seria con velocidad en regla.",
    fuenteNombre: "Manual oficial iScooter i10 Pro UE (PDF)",
    fuenteUrl: "https://manuals.plus/m/cb42a8de03aeee8997c504c18f9964aeafed009509b4763039b89588a70c1933.pdf",
    mantenimientoDIY: {
      actualizacionFirmware: "App iScooter: modos, crucero, bloqueo y luces",
      trucos: ["La autonomía oficial se mide a 15 km/h: a 25 km/h reales espera bastante menos", "Doble suspensión: revisar aprietes tras las primeras salidas"],
    },
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
    precioEur: null,

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 20,
    aprox: ["autonomiaRealKm"],
    pros: [
      "11 kg: ultraligero",
      "Ruedas de panal de 8\": cero pinchazos",
      "IP54",
    ],
    contras: [
      "30 km/h: supera el límite VMP",
      "Autonomía real de ~20 km",
      "Ruedas pequeñas",
    ],
    veredicto:
      "El S1 Pro es el Kugoo minimalista: 11 kg y ruedas de panal sin mantenimiento. Perfecto para llevarlo en la mano, con autonomía justa (~20 km).",
    fuenteNombre: "Electric Scooter Guides (review Kugoo S1 Pro)",
    fuenteUrl: "https://www.electricscooterguides.com/reviews/kugoo-s1-pro",
    mantenimientoDIY: {
      actualizacionFirmware: "No documentada por el fabricante",
      trucos: ["Manillar regulable en 3 alturas: ajustarlo para no ir encorvado", "Ruedas de panal: sin pinchazos pero vigilar el desgaste en asfalto rugoso"],
    },
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
    precioEur: null,

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 27,
    aprox: ["autonomiaRealKm"],
    pros: [
      "360 Wh con ~27 km reales",
      "Ruedas de aire de 10\": confort",
      "13,5 kg, ligero",
    ],
    contras: [
      "35 km/h: por encima del límite VMP",
      "Sin suspensión",
      "Sin certificado DGT verificado",
    ],
    veredicto:
      "El S4 equilibra peso y autonomía: 13,5 kg, 360 Wh y ruedas de aire de 10\". Sus 35 km/h superan el límite VMP, pero el confort es superior.",
    fuenteNombre: "Electric Scooter Guides (review Kugoo Kirin S4)",
    fuenteUrl: "https://www.electricscooterguides.com/reviews/kugoo-kirin-s4",
    mantenimientoDIY: {
      actualizacionFirmware: "No documentada por el fabricante",
      trucos: ["Neumáticos de aire de 10\": revisar presión cada dos semanas", "El sistema de recuperación de energía alarga algo la autonomía en ciudad"],
    },
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
    precioEur: null,

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
    marca: "Gotrax",
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
      { src: "/media/patinetes/gotrax-fusion-2.webp", alt: "Gotrax Fusion con asiento plegable", ancho: 1200, alto: 800 },
    ],
    precioEur: null,

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 15,
    aprox: ["autonomiaRealKm"],
    pros: [
      "Asiento plegable opcional",
      "Plegado en un toque",
      "Certificación UL2272",
      "14 kg, manejable",
    ],
    contras: [
      "28 km/h: supera el límite VMP",
      "209 Wh: ~15 km reales",
      "Batería pequeña",
    ],
    veredicto:
      "El Fusion es el Gotrax versátil: versión con asiento plegable para alternar de pie y sentado. 209 Wh justos (~15 km), pero único en su concepto.",
    fuenteNombre: "Gotrax (ficha oficial Fusion)",
    fuenteUrl: "https://gotrax.com/products/fusion-electric-scooter",
    mantenimientoDIY: {
      actualizacionFirmware: "No documentada por el fabricante",
      trucos: ["Existe versión con asiento plegable: útil para repartidores o trayectos largos", "Plegado en un toque: practicar el mecanismo antes de usarlo a diario"],
    },
  },
  {
    id: "gotrax-xr-elite",
    marca: "Gotrax",
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
      { src: "/media/patinetes/gotrax-xr-elite-2.webp", alt: "Gotrax XR Elite en ciudad", ancho: 1200, alto: 800 },
    ],
    precioEur: null,

    certificadoDgt: null,
    videoId: null,
    videoCanal: null,


    autonomiaRealKm: 18,
    aprox: ["autonomiaRealKm"],
    pros: [
      "25 km/h: dentro del límite VMP",
      "Plataforma ancha y cómoda",
      "IP54 y buenos frenos",
      "Precio de entrada",
    ],
    contras: [
      "Autonomía real de ~18 km",
      "Sin suspensión",
      "300 W justos en cuestas",
    ],
    veredicto:
      "El XR Elite es el superventas de entrada de Gotrax: 25 km/h legales, plataforma ancha e IP54. Sin suspensión y con ~18 km reales, pero difícil de batir por precio.",
    fuenteNombre: "eScooter Insider (review Gotrax XR Elite)",
    fuenteUrl: "https://escooterinsider.com/gotrax-xr-elite-review/",
    mantenimientoDIY: {
      actualizacionFirmware: "No documentada por el fabricante",
      trucos: ["Plataforma ancha y antideslizante: cómoda para pies grandes", "Neumáticos de aire: mantener 50 PSI (340 kPa)"],
    },
  },
  {
    id: "hiboy-s2r",
    videoId: null,
    videoCanal: null,
    marca: "Hiboy",
    modelo: "S2R",
    precioEur: null,
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
    precioEur: null,
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
    pros: [
      "468 Wh con ~30 km reales estimados",
      "Desbloqueo NFC + candado de cable integrado",
      "IPX5: resiste lluvia",
      "Suspensión delantera",
    ],
    contras: [
      "40 km/h: por encima del límite VMP",
      "22 kg de peso",
      "Rueda trasera maciza: menos confort",
      "Sin certificado DGT verificado",
    ],
    veredicto:
      "El Kirin M3 es el Kugoo urbano con extra de seguridad: NFC, candado integrado e IPX5 con 468 Wh. Sus 40 km/h lo sacan del marco VMP, pero como paquete es muy completo.",
    fuenteNombre: "Electric Scooter Guides (review Kugoo Kirin M3)",
    fuenteUrl: "https://www.electricscooterguides.com/reviews/kugoo-kirin-m3",
    mantenimientoDIY: {
      actualizacionFirmware: "No documentada por el fabricante",
      trucos: ["El candado de cable integrado evita llevar uno aparte", "Delantera de aire: mantener 50 PSI (340 kPa)"],
    },
  },
  {
    id: "inokim-quick-3",
    videoId: null,
    videoCanal: null,
    marca: "Inokim",
    modelo: "Quick 3",
    precioEur: null,
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
    pros: [
      "624 Wh LG con ~30 km reales",
      "16,5 kg: ligero para su batería",
      "Batería LG de celdas de calidad",
      "Acabados Inokim premium",
    ],
    contras: [
      "31 km/h: por encima del límite VMP",
      "Sin suspensión",
      "Precio premium",
      "Sin certificado DGT verificado",
    ],
    veredicto:
      "El Quick 3 es el Inokim equilibrado: 624 Wh LG en 16,5 kg con acabados premium. Sin suspensión y con 31 km/h, pero la calidad de construcción justifica su fama.",
    fuenteNombre: "Electric Scooter Insider (review INOKIM Quick 3)",
    fuenteUrl: "https://www.electricscooterinsider.com/electric-scooters/reviews/inokim-quick-3-review/",
    mantenimientoDIY: {
      actualizacionFirmware: "No documentada por el fabricante",
      trucos: ["Celdas LG: evitar descargas completas para alargar su vida", "Neumáticos 10x2.5\": 45-50 PSI recomendados"],
    },
  },
  {
    id: "smartgyro-xtreme",
    videoId: null,
    videoCanal: null,
    marca: "Smartgyro",
    modelo: "Xtreme",
    precioEur: 239,
    potenciaNominalW: 250,
    potenciaPicoW: null,
    bateriaWh: null,
    autonomiaKm: 15,
    autonomiaRealKm: 11,
    velocidadMaxKmh: 24,
    pesoKg: 10,
    cargaMaxKg: 100,
    tiempoCargaH: 4,
    frenos: "Freno eléctrico delantero",
    neumaticos: 'Ruedas sólidas de 8"',
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
    pros: [
      "10 kg: de los más ligeros del mercado",
      "239 €: precio de entrada",
      "24 km/h: dentro del límite VMP",
      "Ruedas sólidas: cero pinchazos",
    ],
    contras: [
      "Autonomía real de ~11 km",
      "250 W básicos",
      "Ruedas de 8\": poco confort",
      "Sin certificado DGT verificado",
    ],
    veredicto:
      "El Xtreme es el Smartgyro esencial: 10 kg, 24 km/h y 239 €. Autonomía mínima (~11 km), pero como primer patinete o para el último kilómetro cumple.",
    fuenteNombre: "Habitium (ficha SmartGyro Xtreme)",
    fuenteUrl: "https://habitium.com/ie/electric-scooters/481710-electric-scooter-blue-250-w-up-to-100-kg-smartgyro-xtreme.html",
    mantenimientoDIY: {
      actualizacionFirmware: "No documentada por el fabricante",
      trucos: ["Ruedas sólidas: revisar desgaste, no hay presión que controlar", "Display integrado: muestra velocidad, distancia y batería"],
    },
  },
  {
    id: "segway-ninebot-d38e",
    videoId: null,
    videoCanal: null,
    marca: "Segway",
    modelo: "Ninebot KickScooter D38E",
    precioEur: null,
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
    pros: [
      "25 km/h: dentro del límite VMP",
      "367 Wh con ~26 km reales",
      "IPX5 y app Segway-Ninebot",
      "Dashboard LED a color",
    ],
    contras: [
      "16,3 kg de peso",
      "Carga de 6,5 horas",
      "Sin suspensión",
      "Sin certificado DGT verificado",
    ],
    veredicto:
      "El D38E es el Segway medio de la serie D: 367 Wh, 25 km/h legales e IPX5. Sin suspensión pero con tubeless de 10\" y app completa: un urbano fiable.",
    fuenteNombre: "Tech Advisor (review Ninebot D38E)",
    fuenteUrl: "https://www.techadvisor.com/article/796668/ninebot-kickscooter-d38e-review.html",
    mantenimientoDIY: {
      actualizacionFirmware: "App Segway-Ninebot: actualiza firmware por Bluetooth",
      trucos: ["Tubeless de 10\": sellante antipinchazos recomendado", "Modo Walk (5 km/h): útil para empujarlo en zonas peatonales"],
    },
  },
  {
    id: "segway-ninebot-d28e",
    videoId: null,
    videoCanal: null,
    marca: "Segway",
    modelo: "Ninebot KickScooter D28E",
    precioEur: null,
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
    pros: [
      "25 km/h: dentro del límite VMP",
      "15,3 kg: ligero para un Segway",
      "IPX5 y app Segway-Ninebot",
      "Chasis triangular de doble tubo",
    ],
    contras: [
      "Autonomía real de ~19 km",
      "300 W justos en cuestas del 15%",
      "Sin suspensión",
      "Sin certificado DGT verificado",
    ],
    veredicto:
      "El D28E es la puerta de entrada a la serie D de Segway: 275 Wh, 25 km/h legales y 15,3 kg. Autonomía justa (~19 km), pero construcción y app de primera.",
    fuenteNombre: "Digitec (ficha Ninebot D28E)",
    fuenteUrl: "https://www.digitec.ch/en/s1/product/segway-ninebot-ninebot-d28e-25-kmh-28-km-300-w-e-scooters-standing-22722927",
    mantenimientoDIY: {
      actualizacionFirmware: "App Segway-Ninebot: actualiza firmware por Bluetooth",
      trucos: ["Neumáticos de aire: 40-45 PSI según manual", "Reflectores E-MARK de serie: no quitarlos"],
    },
  },
  {
    id: "gotrax-g-pro",
    videoId: null,
    videoCanal: null,
    marca: "Gotrax",
    modelo: "G Pro",
    precioEur: null,
    potenciaNominalW: 350,
    potenciaPicoW: null,
    bateriaWh: 378,
    autonomiaKm: 39,
    autonomiaRealKm: 26,
    velocidadMaxKmh: 25,
    pesoKg: 23.6,
    cargaMaxKg: 100,
    tiempoCargaH: null,
    frenos: "EABS",
    neumaticos: 'Delantera 10" + traseras 8.5" de aire',
    certificadoDgt: null,
    foto: "/media/patinetes/gotrax-g-pro-1.webp",
    galeria: [
      {
        src: "/media/patinetes/gotrax-g-pro-2.webp",
        alt: "Gotrax G Pro de tres ruedas",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm"],
    pros: [
      "Tres ruedas: estabilidad única",
      "378 Wh LG con ~26 km reales",
      "Doble suspensión trasera",
      "Doble bloqueo antirrobo",
    ],
    contras: [
      "23,6 kg: muy pesado",
      "Tres ruedas: no es un VMP al uso",
      "Voluminoso para guardar",
      "Sin certificado DGT verificado",
    ],
    veredicto:
      "El G Pro es el Gotrax de tres ruedas: estabilidad total, 378 Wh LG y doble suspensión trasera. Pesa 23,6 kg y no encaja como VMP clásico, pero para quien busca no caerse es único.",
    fuenteNombre: "ValueWalk (review Gotrax G Pro)",
    fuenteUrl: "https://www.valuewalk.com/gotrax-g-pro-this-3-wheel-electric-scooter-can-prove-your-primary-transportation-mode/",
    mantenimientoDIY: {
      actualizacionFirmware: "No documentada por el fabricante",
      trucos: ["Tres ruedas: revisar la alineación trasera cada pocos meses", "Batería LG: carga completa antes de guardarlo un tiempo"],
    },
  },
  {
    id: "gotrax-xr-ultra",
    videoId: null,
    videoCanal: null,
    marca: "Gotrax",
    modelo: "XR Ultra",
    precioEur: null,
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
        src: "/media/patinetes/gotrax-xr-ultra-2.webp",
        alt: "Gotrax XR Ultra con asiento opcional",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm", "tiempoCargaH"],
    pros: [
      "12 kg: ligero",
      "25 km/h: dentro del límite VMP",
      "Batería LG de 252 Wh",
      "IP54 y asiento opcional",
    ],
    contras: [
      "Autonomía real de ~17 km",
      "300 W justos en cuestas",
      "Sin luz trasera de freno (según Tom's Guide)",
      "Sin certificado DGT verificado",
    ],
    veredicto:
      "El XR Ultra es el Gotrax clásico asequible: 12 kg, 25 km/h legales y batería LG. Básico pero honesto, con ~17 km reales y opción de asiento.",
    fuenteNombre: "Tom's Guide (review GoTrax XR Ultra)",
    fuenteUrl: "https://www.tomsguide.com/reviews/gotrax-xr-ultra",
    mantenimientoDIY: {
      actualizacionFirmware: "No documentada por el fabricante",
      trucos: ["Batería LG: evitar calor extremo al cargarla", "Asiento opcional disponible para trayectos largos"],
    },
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
    frenos: "E-ABS delantero + disco trasero",
    neumaticos: 'Neumáticos autoreparables de 10"',
    certificadoDgt: null,
    foto: "/media/patinetes/segway-ninebot-f30-1.webp",
    galeria: [
      {
        src: "/media/patinetes/segway-ninebot-f30-2.webp",
        alt: "Segway Ninebot F30 con plataforma cerrada",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm"],
    pros: [
      "25 km/h: dentro del límite VMP",
      "15,1 kg: ligero",
      "Neumáticos autoreparables de 10\"",
      "IPX5 y app Segway-Ninebot",
    ],
    contras: [
      "Autonomía real de ~20 km",
      "Sin suspensión",
      "300 W justos en cuestas",
      "Sin certificado DGT verificado",
    ],
    veredicto:
      "El F30 es el Segway urbano clásico: 275 Wh, 15,1 kg y neumáticos autoreparables. Básico y fiable, con ~20 km reales para el día a día.",
    fuenteNombre: "Manual oficial Segway (F30/F40)",
    fuenteUrl: "https://manuals.plus/segway/f30-ninebot-kickscooter-manual",
    mantenimientoDIY: {
      actualizacionFirmware: "App Segway-Ninebot: actualiza firmware por Bluetooth",
      trucos: ["Autoreparables: el sellante interno tapa pinchazos pequeños", "Plataforma cerrada: menos vibraciones en los pies"],
    },
  },
  {
    id: "segway-ninebot-e22e",
    videoId: null,
    videoCanal: null,
    marca: "Segway",
    modelo: "Ninebot KickScooter E22E",
    precioEur: null,
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
    pros: [
      "13,5 kg: muy ligero",
      "Batería en el mástil: diseño compacto",
      "Segunda batería opcional",
      "Carga en 3,5 horas",
    ],
    contras: [
      "20 km/h: limitado",
      "Autonomía real de ~15 km",
      "Ruedas de 9\": poco confort",
      "Sin certificado DGT verificado",
    ],
    veredicto:
      "El E22E es el Segway europeo compacto: 13,5 kg, batería en el mástil y 20 km/h. Para el último kilómetro es perfecto; para más, la segunda batería ayuda.",
    fuenteNombre: "Manual oficial Segway (E22E)",
    fuenteUrl: "https://manuals.plus/segway/e22e-ninebot-kickscooter-manual",
    mantenimientoDIY: {
      actualizacionFirmware: "App Segway-Ninebot: actualiza firmware por Bluetooth",
      trucos: ["Batería en el mástil: centro de gravedad alto, cuidado en curvas", "Segunda batería opcional: duplica la autonomía"],
    },
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
    pros: [
      "25 km/h en versión UE: dentro del límite VMP",
      "608 Wh con ~40 km reales",
      "Suspensión hidráulica de doble tubo",
      "Intermitentes e IP55",
    ],
    contras: [
      "22,1 kg de peso",
      "Carga de 6 horas",
      "Precio premium NIU",
      "Sin certificado DGT verificado",
    ],
    veredicto:
      "El KQi 300X es el NIU todoterreno urbano: suspensión hidráulica, 608 Wh e intermitentes con 25 km/h legales. Pesa 22,1 kg, pero el confort no tiene rival.",
    fuenteNombre: "NIU EU (ficha oficial KQi 300X)",
    fuenteUrl: "https://shopeu.niu.com/products/niu-kqi-300x-electric-scooter",
    mantenimientoDIY: {
      actualizacionFirmware: "App NIU: actualizaciones OTA",
      trucos: ["Suspensión hidráulica: revisar retenes una vez al año", "Intermitentes: comprobar su funcionamiento cada mes"],
    },
  },
  {
    id: "navee-n65",
    videoId: null,
    videoCanal: null,
    marca: "Navee",
    modelo: "N65",
    precioEur: null,
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
    pros: [
      "25 km/h: dentro del límite VMP",
      "600 Wh con ~43 km reales",
      "UL2272 y app Navee",
      "Ruedas anchas 10x3\"",
    ],
    contras: [
      "23,5 kg de peso",
      "Carga de 7-8 horas",
      "Sin suspensión",
      "Sin certificado DGT verificado",
    ],
    veredicto:
      "El N65 es el Ninebot-Max killer de Navee: 600 Wh, 25 km/h legales y construcción robusta. Pesa 23,5 kg, pero la autonomía (~43 km reales) lo compensa.",
    fuenteNombre: "Manual oficial Navee (N65)",
    fuenteUrl: "https://manuals.plus/m/33edc5b5099b5d74ab48437eed3536fe89befbe942d406be4eda4a67bd1bf194.pdf",
    mantenimientoDIY: {
      actualizacionFirmware: "App Navee: actualiza firmware por Bluetooth",
      trucos: ["10x3\" anchas: 30 PSI (210 kPa) según manual", "Plegado de doble rotación: no forzar el mecanismo"],
    },
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
    aprox: ["autonomiaRealKm", "tiempoCargaH"],
    pros: [
      "832 Wh: la mayor batería de la gama Quick",
      "Doble suspensión de goma",
      "Acabados Inokim premium",
      "Manillar ajustable",
    ],
    contras: [
      "38 km/h: muy por encima del límite VMP",
      "20,7 kg de peso",
      "Carga de 8 horas",
      "Precio premium",
    ],
    veredicto:
      "El Quick 4 Super es el Inokim americano: 832 Wh y 38 km/h con doble suspensión de goma. Frente al Hero europeo (25 km/h), es la versión desatada.",
    fuenteNombre: "Aurgi + ScooterXtreme (tienda oficial Inokim)",
    fuenteUrl: "https://www.scooterxtreme.es/accessories/descatalogados/patinete-electrico-inokim-quick-4-super",
    mantenimientoDIY: {
      actualizacionFirmware: "No documentada por el fabricante",
      trucos: ["832 Wh: no dejarlo meses descargado", "Suspensión de goma: sin mantenimiento, revisar tacos"],
    },
  },
  {
    id: "yadea-ks5-pro",
    videoId: null,
    videoCanal: null,
    marca: "Yadea",
    modelo: "KS5 Pro",
    precioEur: null,
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
    pros: [
      "562 Wh con ~40 km reales",
      "17,2 kg: ligero para su batería",
      "Horquilla delantera",
      "Triple freno e IP54",
    ],
    contras: [
      "35 km/h: por encima del límite VMP",
      "Carga de 8 horas",
      "Ruedas macizas: menos confort",
      "Sin certificado DGT verificado",
    ],
    veredicto:
      "El KS5 Pro es el Yadea rutero: 562 Wh en 17,2 kg con horquilla y triple freno. Del mayor fabricante mundial de dos ruedas eléctricas, con ~40 km reales.",
    fuenteNombre: "Yadea (ficha oficial KS5 Pro)",
    fuenteUrl: "https://yadea.co.ma/electric-kick-scooter/yadea-ks5-pro-electric-kick-scooter",
    mantenimientoDIY: {
      actualizacionFirmware: "App Yadea: control y actualizaciones OTA",
      trucos: ["Ruedas macizas de 10\": revisar desgaste irregular", "Horquilla delantera: limpiar barras tras lluvia"],
    },
  },
  {
    id: "okai-neon-pro",
    videoId: null,
    videoCanal: null,
    marca: "Okai",
    modelo: "Neon Pro",
    precioEur: null,
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
    precioEur: null,
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
    aprox: ["autonomiaRealKm", "tiempoCargaH"],
    pros: [
      "Triple suspensión (delantera, trasera y deck)",
      "17,7 kg: muy ligero para 624 Wh",
      "Carga máxima de 140 kg",
      "Manillar plegable compacto",
    ],
    contras: [
      "40 km/h: muy por encima del límite VMP",
      "Ruedas de 8\": pequeñas para baches",
      "Sin certificado DGT verificado",
      "Marca de EE. UU., soporte en Europa limitado",
    ],
    veredicto:
      "El EMOVE Touring es el commuter americano: 624 Wh, 17,7 kg y triple suspensión con manillar plegable. La batería LG de 48V 13Ah lo convierte en un rutero de bolsillo.",
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
    precioEur: null,
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
    pros: [
      "936 Wh: hasta 70 km declarados",
      "1000 W (1600 W de pico)",
      "Doble disco delantero y trasero",
      "Suspensión delantera y trasera",
    ],
    contras: [
      "48 km/h: muy por encima del límite VMP",
      "24 kg de peso",
      "Sin certificado DGT verificado",
      "Marca sin red oficial en Europa",
    ],
    veredicto:
      "El Zero 10 es el clásico rutero australiano: 936 Wh, 1000 W y 70 km declarados. Un bestseller global que en Europa solo llega por importadores.",
    fuenteNombre: "ZERO Electric Scooters (ficha oficial)",
    fuenteUrl: "https://zeroelectricscooter.com/products/zero-10-electric-scooter",
    mantenimientoDIY: {
      actualizacionFirmware: "No documentada por el fabricante",
      trucos: ["52V 18Ah: cargador lento mejor para la batería", "Doble disco: revisar pastillas cada 2.000 km"],
    },
  },
  {
    id: "zero-9",
    videoId: null,
    videoCanal: null,
    marca: "Zero",
    modelo: "9",
    precioEur: null,
    potenciaNominalW: 600,
    potenciaPicoW: 1200,
    bateriaWh: 624,
    autonomiaKm: 45,
    autonomiaRealKm: 32,
    velocidadMaxKmh: 45,
    pesoKg: 18.5,
    cargaMaxKg: 120,
    tiempoCargaH: 8,
    frenos: "Disco delantero + tambor trasero",
    neumaticos: 'Neumáticos de aire de 9"',
    certificadoDgt: null,
    foto: "/media/patinetes/zero-9-1.webp",
    galeria: [
      {
        src: "/media/patinetes/zero-9-2.webp",
        alt: "Zero 9 con manillar plegable",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm", "tiempoCargaH"],
    pros: [
      "624 Wh LG en 18,5 kg",
      "Suspensión trasera de doble amortiguador de aire",
      "Manillar plegable y tija telescópica",
      "45 km declarados",
    ],
    contras: [
      "45 km/h: muy por encima del límite VMP",
      "Carga de 8 horas",
      "Ruedas de 9\": a medio camino",
      "Sin certificado DGT verificado",
    ],
    veredicto:
      "El Zero 9 es el todo-terreno urbano de la marca: 600 W, 624 Wh LG y suspensión de aire trasera en 18,5 kg. El hermano pequeño del Zero 10 con la misma filosofía.",
    fuenteNombre: "FalconGo (distribuidor oficial Zero)",
    fuenteUrl: "https://www.falcongo.co.th/products/zero-9",
    mantenimientoDIY: {
      actualizacionFirmware: "No documentada por el fabricante",
      trucos: ["Trasera de aire: revisar presión de los amortiguadores", "Manillar plegable: reapretar tras rutas largas"],
    },
  },
  {
    id: "gotrax-g3",
    videoId: null,
    videoCanal: null,
    marca: "Gotrax",
    modelo: "G3",
    precioEur: null,
    potenciaNominalW: 300,
    potenciaPicoW: 430,
    bateriaWh: 281,
    autonomiaKm: 29,
    autonomiaRealKm: 20,
    velocidadMaxKmh: 29,
    pesoKg: 16.3,
    cargaMaxKg: 100,
    tiempoCargaH: 5,
    frenos: "Regenerativo + disco trasero",
    neumaticos: 'Neumáticos de aire de 8.5"',
    certificadoDgt: null,
    foto: "/media/patinetes/gotrax-g3-1.webp",
    galeria: [
      {
        src: "/media/patinetes/gotrax-g3-2.webp",
        alt: "Gotrax G3 con bloqueo digital",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm"],
    pros: [
      "IPX6: uno de los más estancos",
      "Bloqueo digital integrado",
      "16,3 kg: muy ligero",
      "Precio asequible",
    ],
    contras: [
      "29 km/h: por encima del límite VMP",
      "Solo 281 Wh: ~20 km reales",
      "Motor de 300 W",
      "Sin certificado DGT verificado",
    ],
    veredicto:
      "El Gotrax G3 es el urbano barato y estanco: IPX6, bloqueo digital y 16,3 kg. Con 281 Wh es para trayectos cortos, pero a ese precio pocos dan más.",
    fuenteNombre: "Manual oficial Gotrax G3 (Manuals.plus)",
    fuenteUrl: "https://manuals.plus/m/e0bd500835e2b997f9b5be710276cc5356ae5925f4d98233364d66306ef9c55f",
    mantenimientoDIY: {
      actualizacionFirmware: "No documentada por el fabricante",
      trucos: ["8.5\" de aire: revisar presión semanalmente", "Bloqueo digital: anotar el PIN en lugar seguro"],
    },
  },
  {
    id: "turboant-thunder-t1",
    videoId: null,
    videoCanal: null,
    marca: "TurboAnt",
    modelo: "Thunder T1",
    precioEur: null,
    potenciaNominalW: 500,
    potenciaPicoW: null,
    bateriaWh: 632,
    autonomiaKm: 34,
    autonomiaRealKm: 26,
    velocidadMaxKmh: 42,
    pesoKg: 17.3,
    cargaMaxKg: null,
    tiempoCargaH: null,
    frenos: "Disco trasero",
    neumaticos: 'Neumáticos de aire de 10"',
    certificadoDgt: null,
    foto: "/media/patinetes/turboant-thunder-t1-1.webp",
    galeria: [
      {
        src: "/media/patinetes/turboant-thunder-t1-2.webp",
        alt: "TurboAnt Thunder T1 con doble suspensión",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm"],
    pros: [
      "632 Wh con 34 km declarados",
      "Doble suspensión",
      "IP54",
      "17,3 kg: ligero para su batería",
    ],
    contras: [
      "42 km/h: muy por encima del límite VMP",
      "Solo freno de disco trasero",
      "Sin certificado DGT verificado",
      "Marca de EE. UU., sin red en Europa",
    ],
    veredicto:
      "El Thunder T1 es el off-road ligero de TurboAnt: 632 Wh, doble suspensión e IP54 en 17,3 kg. Un mini-todoterreno americano por ~699 $.",
    fuenteNombre: "Electric Scooter Guides (comparativa TurboAnt Thunder T1)",
    fuenteUrl: "https://www.electricscooterguides.com/reviews/turboant-thunder-t1",
    mantenimientoDIY: {
      actualizacionFirmware: "No documentada por el fabricante",
      trucos: ["10\" de aire: presión alta para asfalto, baja para tierra", "Doble suspensión: limpiar muelles tras barro"],
    },
  },
  {
    id: "xiaomi-electric-scooter-4-pro-plus",
    videoId: null,
    videoCanal: null,
    marca: "Xiaomi",
    modelo: "Electric Scooter 4 Pro Plus",
    precioEur: null,
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
    potenciaPicoW: 700,
    bateriaWh: 367,
    autonomiaKm: 40,
    autonomiaRealKm: 27,
    velocidadMaxKmh: 25,
    pesoKg: 17.1,
    cargaMaxKg: 120,
    tiempoCargaH: 6.5,
    frenos: "Tambor delantero + regenerativo trasero",
    neumaticos: 'Neumáticos tubeless de 10"',
    certificadoDgt: null,
    foto: "/media/patinetes/segway-ninebot-f40e-1.webp",
    galeria: [
      {
        src: "/media/patinetes/segway-ninebot-f40e-2.webp",
        alt: "Segway Ninebot F40E con soporte para placa",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm"],
    pros: [
      "25 km/h: legal como VMP",
      "17,1 kg: muy ligero",
      "IPX5",
      "Soporte para placa de seguro",
    ],
    contras: [
      "Solo 367 Wh: ~27 km reales",
      "Sin suspensión",
      "Motor de 350 W",
      "Sin certificado DGT verificado",
    ],
    veredicto:
      "El F40E es la versión europea del clásico F40: 25 km/h, 17,1 kg e IPX5 con soporte para placa. El Ninebot urbano ligero para trayectos cortos.",
    fuenteNombre: "Manual oficial Segway Ninebot F40E (Manuals.plus)",
    fuenteUrl: "https://manuals.plus/m/3f89266b8eb24bcc73bc0dead2a0a97751eb93adf38e98f4b1d43ae72c2cb8e6.pdf",
    mantenimientoDIY: {
      actualizacionFirmware: "Segway-Ninebot App: actualizaciones OTA por Bluetooth",
      trucos: ["Tubeless 10\": capa de gel antipinchazos de serie", "Soporte de placa: útil para el seguro obligatorio"],
    },
  },
  {
    id: "smartgyro-dual-max-2",
    videoId: null,
    videoCanal: null,
    marca: "Smartgyro",
    modelo: "Dual Max 2",
    precioEur: null,
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
      "El Dual Max 2 es el buque insignia dual de Smartgyro: dos motores 48V, 720 Wh y 60 km declarados con triple frenada. La bestia española para riders exigentes.",
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
    potenciaPicoW: 700,
    bateriaWh: 215,
    autonomiaKm: 25,
    autonomiaRealKm: 18,
    velocidadMaxKmh: 25,
    pesoKg: 14.4,
    cargaMaxKg: 100,
    tiempoCargaH: 4,
    frenos: "Eléctrico delantero + mecánico trasero",
    neumaticos: 'Neumáticos macizos de 9"',
    certificadoDgt: null,
    foto: "/media/patinetes/segway-ninebot-e25e-1.webp",
    galeria: [
      {
        src: "/media/patinetes/segway-ninebot-e25e-2.webp",
        alt: "Segway Ninebot E25E con luz ambiental",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm"],
    pros: [
      "25 km/h: legal como VMP",
      "14,4 kg: muy ligero",
      "Batería externa opcional (E45E)",
      "App Segway-Ninebot",
    ],
    contras: [
      "Solo 215 Wh: ~18 km reales",
      "Ruedas macizas de 9\"",
      "Sin certificado DGT verificado",
      "Modelo veterano (2020)",
    ],
    veredicto:
      "El E25E es el clásico europeo de Ninebot: 25 km/h, 14,4 kg y batería ampliable a E45E. Veterano pero vigente para ciudad.",
    fuenteNombre: "Manual oficial Ninebot E25E (Manuals.plus)",
    fuenteUrl: "https://manuals.plus/ninebot/kickscooter-e22e25e45-manual",
    mantenimientoDIY: {
      actualizacionFirmware: "Segway-Ninebot App: actualizaciones OTA",
      trucos: ["9\" macizos: revisar desgaste irregular", "Batería externa: duplica autonomía a 45 km"],
    },
  },
  {
    id: "okai-neon",
    videoId: null,
    videoCanal: null,
    marca: "Okai",
    modelo: "Neon",
    precioEur: null,
    potenciaNominalW: 250,
    potenciaPicoW: 500,
    bateriaWh: 350,
    autonomiaKm: 40,
    autonomiaRealKm: 25,
    velocidadMaxKmh: 25,
    pesoKg: 17.6,
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
    pros: [
      "25 km/h: legal como VMP",
      "IPX5",
      "Diseño premiado con LED",
      "App con actualizaciones OTA",
    ],
    contras: [
      "Solo 350 Wh: ~25 km reales",
      "Trasera maciza: menos confort",
      "Carga no publicada",
      "Sin certificado DGT verificado",
    ],
    veredicto:
      "El Neon es el diseño de Okai: 350 Wh, IPX5 y luces LED integradas en un chasis blanco premiado. El urbano con estilo, hermano pequeño del Neon Pro.",
    fuenteNombre: "Electrek (review Okai Neon)",
    fuenteUrl: "https://electrek.co/2022/01/17/okai-neon-beautiful-connected-clean-electric-scooter-video/",
    mantenimientoDIY: {
      actualizacionFirmware: "Okai Global App: actualizaciones OTA",
      trucos: ["Delantera 8.5\" de aire: presión semanal", "Trasera maciza: revisar desgaste"],
    },
  },
];
