// COCHES LOTE 6 (11/10/2026): 49 fichas nuevas verificadas — Mobilize, Nissan, Silence,
// Abarth, Invicta, VW, Skoda, Seat, Cupra, Audi, Lexus, Hyundai, Toyota, BMW, Mercedes-Benz,
// Porsche, MINI, Land Rover, EVO, SWM, DR y Morgan (modelos 2024-2026 no presentes en la web).
// Datos verificados el 11/10/2026 (km77, webs oficiales de las marcas en España, euroncap.com,
// auto-data.net, prensa española). Precios PVP España con IVA donde están publicados.
// Regla dura: dato no verificado = null (o se omite). Nunca inventar cifras.
// EuroNCAP: estrellas=null + nota honesta cuando no hay prueba verificada.
// ~70 candidatos descartados: ya cubiertos en la web, no vendidos en España,
// sin foto oficial de prensa del modelo exacto, o sin datos verificables suficientes.
// Fotos: oficiales de prensa (exterior + interior), WebP <300KB, verificadas visualmente.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const COCHES_NUEVOS_C6: CocheComparador[] = [
  {
    altoMm: 1460,
    analisisSlug: null,
    anchoMm: 1300,
    aprox: [
      "potenciaCv"
    ],
    autonomiaKm: 161,
    bateriaKwh: 10.3,
    cargaRapidaKw: null,
    categoria: "Microcar",
    ceroCien: null,
    consumo: null,
    consumoUnidad: null,
    contras: [
      "Limitado a 45 km/h: no puede circular por autovías ni vías rápidas interurbanas",
      "Solo dos plazas en tándem y sin maletero aprovechable para la compra semanal",
      "Carga únicamente en corriente alterna (del 20 al 80 % en 3 h 50 min), sin carga rápida en continua",
      "Los cuadriciclos no pasan las pruebas Euro NCAP, así que no hay calificación oficial de seguridad",
      "Venta limitada a la red de concesionarios Renault y futuro incierto tras la reestructuración de Mobilize",
      "Por 9.990 € compite con coches usados convencionales mucho más versátiles y rápidos"
    ],
    emisionesCo2: 0,
    etiquetaDgt: "Cero",
    euroncap: {
      ano: null,
      estrellas: null,
      nota: "Sin datos EuroNCAP: modelo no probado",
      url: null
    },
    fuenteNombre: "coches.net",
    fuenteUrl: "https://www.coches.net/noticias/nuevo-mobilize-duo-y-bento",
    galeria: [
      {
        alt: "Mobilize Duo 45 2025, vista exterior del cuadriciclo eléctrico",
        alto: 960,
        ancho: 1280,
        src: "/media/mobilize-duo-45-2025-precio-ficha-tecnica-oficial.webp"
      },
      {
        alt: "Interior del Mobilize Duo 45 2025 con volante y salpicadero",
        alto: 1067,
        ancho: 1600,
        src: "/media/mobilize-duo-45-2025-precio-ficha-tecnica-interior-oficial.webp"
      },
      { src: "/media/mobilize-duo-45-2025-precio-ficha-tecnica-hunt1.webp", alt: "Duo 45 2025 (foto: Mobilize / Renault Group (prensa oficial) vía Infomotori, licencia desconocida)", ancho: 853, alto: 1280 },
      { src: "/media/mobilize-duo-45-2025-precio-ficha-tecnica-hunt2.webp", alt: "Duo 45 2025 (foto: Mobilize / Renault Group (prensa oficial) vía Infomotori, licencia desconocida)", ancho: 1280, alto: 974 },
      { src: "/media/mobilize-duo-45-2025-precio-ficha-tecnica-hunt3.webp", alt: "Duo 45 2025 (foto: Mobilize / Renault Group (prensa oficial) vía Infomotori, licencia desconocida)", ancho: 1280, alto: 853 },
    ],
    garantiaBateriaAnos: null,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: null,
    id: "mobilize-duo-45-2025-precio-ficha-tecnica",
    imagen: "/media/mobilize-duo-45-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/mobilize-duo-45-2025-precio-ficha-tecnica-interior-oficial.webp",
    imagenOficial: "/media/mobilize-duo-45-2025-precio-ficha-tecnica-oficial.webp",
    largoMm: 2430,
    maleteroL: null,
    marca: "Mobilize",
    modelo: "Duo 45 2025",
    parNm: null,
    pesoKg: null,
    planMantenimiento: null,
    plazas: 2,
    potenciaCv: 8,
    precioDesde: 9990,
    pros: [
      "Se conduce desde los 15 años con el carnet AM al ser un cuadriciclo ligero (L6e) limitado a 45 km/h",
      "Airbag de conductor de serie, una primicia absoluta en el segmento de los cuadriciclos",
      "Precio de lanzamiento desde 9.990 € con la oferta de 1 € al día con seguro incluido vía Mobilize Financial Services",
      "161 km de autonomía WMTC con la batería de 10,3 kWh, de sobra para el uso urbano diario",
      "Solo 2,43 m de largo y 6,8 m de radio de giro: aparca en perpendicular donde un turismo no cabe",
      "Más del 40 % de materiales reciclados en su construcción y 95 % reciclable al final de su vida"
    ],
    tipo: "Eléctrico",
    traccion: "Trasera",
    velocidadMax: 45,
    videoCanal: null,
    videoId: null
  },
  {
    altoMm: 1460,
    analisisSlug: null,
    anchoMm: 1300,
    aprox: [
      "potenciaCv"
    ],
    autonomiaKm: 161,
    bateriaKwh: 10.3,
    cargaRapidaKw: null,
    categoria: "Microcar",
    ceroCien: null,
    consumo: null,
    consumoUnidad: null,
    contras: [
      "Al ser cuadriciclo pesado (L7e) exige el carnet B, a diferencia del Duo 45",
      "Solo dos plazas en tándem y espacio de carga mínimo para el día a día",
      "Sin carga rápida en continua: la recarga completa exige varias horas en alterna",
      "16 kW (22 CV) se quedan justos en cuestas pronunciadas o con pasajero y carga",
      "No existe evaluación Euro NCAP para este tipo de vehículos",
      "Por 12.990 € un Dacia Spring ofrece un coche eléctrico convencional con cuatro plazas y maletero"
    ],
    emisionesCo2: 0,
    etiquetaDgt: "Cero",
    euroncap: {
      ano: null,
      estrellas: null,
      nota: "Sin datos EuroNCAP: modelo no probado",
      url: null
    },
    fuenteNombre: "coches.net",
    fuenteUrl: "https://www.coches.net/noticias/nuevo-mobilize-duo-y-bento",
    galeria: [
      {
        alt: "Mobilize Duo 80 2025, vista exterior del cuadriciclo eléctrico",
        alto: 960,
        ancho: 1280,
        src: "/media/mobilize-duo-80-2025-precio-ficha-tecnica-oficial.webp"
      },
      {
        alt: "Interior del Mobilize Duo 80 2025 con volante y salpicadero",
        alto: 1067,
        ancho: 1600,
        src: "/media/mobilize-duo-80-2025-precio-ficha-tecnica-interior-oficial.webp"
      },
      { src: "/media/mobilize-duo-80-2025-precio-ficha-tecnica-hunt1.webp", alt: "Duo 80 2025 (foto: Autozine (fotos de la prueba del Mobilize Duo 80 Pro), licencia desconocida)", ancho: 728, alto: 468 },
      { src: "/media/mobilize-duo-80-2025-precio-ficha-tecnica-hunt2.webp", alt: "Duo 80 2025 (foto: Autozine (fotos de la prueba del Mobilize Duo 80 Pro), licencia desconocida)", ancho: 728, alto: 484 },
      { src: "/media/mobilize-duo-80-2025-precio-ficha-tecnica-hunt3.webp", alt: "Duo 80 2025 (foto: Autozine (fotos de la prueba del Mobilize Duo 80 Pro), licencia desconocida)", ancho: 728, alto: 482 },
    ],
    garantiaBateriaAnos: null,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: null,
    id: "mobilize-duo-80-2025-precio-ficha-tecnica",
    imagen: "/media/mobilize-duo-80-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/mobilize-duo-80-2025-precio-ficha-tecnica-interior-oficial.webp",
    imagenOficial: "/media/mobilize-duo-80-2025-precio-ficha-tecnica-oficial.webp",
    largoMm: 2430,
    maleteroL: null,
    marca: "Mobilize",
    modelo: "Duo 80 2025",
    parNm: null,
    pesoKg: null,
    planMantenimiento: null,
    plazas: 2,
    potenciaCv: 22,
    precioDesde: 12990,
    pros: [
      "Alcanza 80 km/h, así que puede circular por rondas y carreteras interurbanas, no solo por ciudad",
      "Airbag de serie, aire acondicionado y asientos calefactados: equipamiento inédito en cuadriciclos",
      "161 km de autonomía con una batería de 10,3 kWh que es un módulo del pack del Renault 5 E-Tech",
      "2,43 m de largo y 6,8 m de radio de giro: agilidad total en el tráfico urbano",
      "Desde 12.990 € con posibilidad de anticipo del Plan MOVES de hasta 2.000 €",
      "Puertas de apertura en tijera que facilitan entrar y salir en plazas de aparcamiento estrechas"
    ],
    tipo: "Eléctrico",
    traccion: "Trasera",
    velocidadMax: 80,
    videoCanal: null,
    videoId: "PkMw6XR4m_g"
  },
  {
    altoMm: null,
    analisisSlug: null,
    anchoMm: 1300,
    aprox: [
      "potenciaCv"
    ],
    autonomiaKm: 149,
    bateriaKwh: 10.3,
    cargaRapidaKw: null,
    categoria: "Microcar",
    ceroCien: null,
    consumo: null,
    consumoUnidad: null,
    contras: [
      "Una sola plaza: el conductor siempre viaja solo, sin posibilidad de acompañante",
      "Carga útil limitada a unos 80 kg según la prensa especializada",
      "Velocidad máxima de 80 km/h y carnet B obligatorio al ser un cuadriciclo pesado",
      "Precio oficial en España no publicado; el lanzamiento se orientó a flotas y alquiler a largo plazo",
      "Sin carga rápida en continua y sin evaluación Euro NCAP",
      "La caja de carga fija penaliza la visibilidad trasera respecto al Duo"
    ],
    emisionesCo2: 0,
    etiquetaDgt: "Cero",
    euroncap: {
      ano: null,
      estrellas: null,
      nota: "Sin datos EuroNCAP: modelo no probado",
      url: null
    },
    fuenteNombre: "Europa Press",
    fuenteUrl: "https://www.ancove.es/noticias/mobilize-renault-lanza-duo-y-bento-dos-nuevos-el23/61732",
    galeria: [
      {
        alt: "Mobilize Bento 2025, vista exterior con caja de carga trasera",
        alto: 880,
        ancho: 1320,
        src: "/media/mobilize-bento-2025-precio-ficha-tecnica-oficial.webp"
      },
      {
        alt: "Interior del Mobilize Bento 2025, cabina delantera idéntica a la del Duo",
        alto: 1067,
        ancho: 1600,
        src: "/media/mobilize-bento-2025-precio-ficha-tecnica-interior-oficial.webp"
      },
      { src: "/media/mobilize-bento-2025-precio-ficha-tecnica-hunt1.webp", alt: "Bento 2025 (foto: Mobilize / Renault Group (serie de prensa oficial, vía Van Reviewer), licencia desconocida (prensa oficial Mobilize/Renault Group))", ancho: 1024, alto: 576 },
      { src: "/media/mobilize-bento-2025-precio-ficha-tecnica-hunt2.webp", alt: "Bento 2025 (foto: Mobilize / Renault Group (serie de prensa oficial, vía Van Reviewer), licencia desconocida (prensa oficial Mobilize/Renault Group))", ancho: 1024, alto: 576 },
      { src: "/media/mobilize-bento-2025-precio-ficha-tecnica-hunt3.webp", alt: "Bento 2025 (foto: Mobilize / Renault Group (serie de prensa oficial, vía Van Reviewer), licencia desconocida (prensa oficial Mobilize/Renault Group))", ancho: 1024, alto: 576 },
    ],
    garantiaBateriaAnos: null,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: null,
    id: "mobilize-bento-2025-precio-ficha-tecnica",
    imagen: "/media/mobilize-bento-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/mobilize-bento-2025-precio-ficha-tecnica-interior-oficial.webp",
    imagenOficial: "/media/mobilize-bento-2025-precio-ficha-tecnica-oficial.webp",
    largoMm: 2540,
    maleteroL: 649,
    marca: "Mobilize",
    modelo: "Bento 2025",
    parNm: null,
    pesoKg: null,
    planMantenimiento: null,
    plazas: 1,
    potenciaCv: 22,
    precioDesde: null, // Sin tarifa oficial publicada en España (Mobilize/renault Pro no publica precio del Bento como texto accesible)
    pros: [
      "Caja de carga cerrada de 649 litros con puertas asimétricas: reparto urbano de última milla sin emisiones",
      "149 km de autonomía, suficiente para una jornada completa de reparto en ciudad",
      "Solo 2,54 m de largo: accede a calles y zonas donde una furgoneta convencional no entra",
      "Airbag de conductor de serie y más del 40 % de materiales reciclados",
      "Recarga en enchufe doméstico o toma Tipo 2 (del 20 al 80 % en unas 3 h 30 min)",
      "Trampilla lateral que permite transportar objetos largos junto al conductor"
    ],
    tipo: "Eléctrico",
    traccion: "Trasera",
    velocidadMax: 80,
    videoCanal: null,
    videoId: null
  },
  {
    altoMm: 1660,
    analisisSlug: null,
    anchoMm: 1850,
    aprox: [],
    autonomiaKm: 535,
    bateriaKwh: 87,
    cargaRapidaKw: 130,
    categoria: "SUV",
    ceroCien: 7.6,
    consumo: 18.1,
    consumoUnidad: "kWh/100 km",
    contras: [
      "2.119 kg de peso que se notan en el consumo real, lejos de los 18,1 kWh/100 km homologados",
      "Los 130 kW de carga quedan por debajo de rivales coreanos que superan los 200 kW",
      "Solo disponible con tracción delantera; el e-4ORCE total cuesta bastante más",
      "Ventas testimoniales en España (147 unidades en 2026): valor de reventa e infraestructura inciertos",
      "A igualdad de precio, la competencia china ofrece más autonomía por euro",
      "El sistema multimedia y los mandos táctiles están un paso por detrás de los mejores del segmento"
    ],
    emisionesCo2: 0,
    etiquetaDgt: "Cero",
    euroncap: {
      ano: 2022,
      estrellas: 5,
      nota: "5 estrellas Euro NCAP (2022)",
      url: "https://www.euroncap.com/press-media/manufacturers-have-euro-ncap-s-vision-2030-in-sight-as-fifteen-cars-score-the-maximum-star-rating/"
    },
    fuenteNombre: "km77.com",
    fuenteUrl: "https://www.km77.com/coches/nissan/ariya/2022/estandar/estandar/ariya-engage-178-kw-242-cv-87-kwh-4x2/datos",
    galeria: [
      {
        alt: "Nissan Ariya 87 kWh 242 2026, vista lateral exterior",
        alto: 865,
        ancho: 1538,
        src: "/media/nissan-ariya-87kwh-242-2026-precio-ficha-tecnica-oficial.webp"
      },
      {
        alt: "Interior del Nissan Ariya 87 kWh 242 2026 con doble pantalla",
        alto: 675,
        ancho: 1200,
        src: "/media/nissan-ariya-87kwh-242-2026-precio-ficha-tecnica-interior-oficial.webp"
      },
      { src: "/media/nissan-ariya-87kwh-242-2026-precio-ficha-tecnica-hunt1.webp", alt: "Ariya 87 kWh 242 2026 (foto: Auto10 (prueba propia), licencia desconocida)", ancho: 1200, alto: 800 },
      { src: "/media/nissan-ariya-87kwh-242-2026-precio-ficha-tecnica-hunt2.webp", alt: "Ariya 87 kWh 242 2026 (foto: Auto10 (prueba propia), licencia desconocida)", ancho: 1200, alto: 800 },
      { src: "/media/nissan-ariya-87kwh-242-2026-precio-ficha-tecnica-hunt3.webp", alt: "Ariya 87 kWh 242 2026 (foto: Auto10 (prueba propia), licencia desconocida)", ancho: 1200, alto: 800 },
    ],
    garantiaBateriaAnos: 8,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: null,
    id: "nissan-ariya-87kwh-242-2026-precio-ficha-tecnica",
    imagen: "/media/nissan-ariya-87kwh-242-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/nissan-ariya-87kwh-242-2026-precio-ficha-tecnica-interior-oficial.webp",
    imagenOficial: "/media/nissan-ariya-87kwh-242-2026-precio-ficha-tecnica-oficial.webp",
    largoMm: 4595,
    maleteroL: 468,
    marca: "Nissan",
    modelo: "Ariya 87 kWh 242 2026",
    parNm: 300,
    pesoKg: 2119,
    planMantenimiento: null,
    plazas: 5,
    potenciaCv: 242,
    precioDesde: 44250,
    pros: [
      "535 km de autonomía WLTP: la versión de mayor alcance de toda la gama Ariya",
      "5 estrellas Euro NCAP (2022) con un 93 % en asistentes de seguridad",
      "242 CV y 300 Nm con tracción delantera: el equilibrio más sensato entre prestaciones y eficiencia",
      "Carga rápida en continua de hasta 130 kW",
      "Maletero de 468 litros y suelo completamente plano gracias a la plataforma CMF-EV",
      "Desde 44.250 € es la forma más accesible de tener el Ariya con la batería grande de 87 kWh"
    ],
    tipo: "Eléctrico",
    traccion: "Delantera",
    velocidadMax: 160,
    videoCanal: null,
    videoId: null
  },
  {
    altoMm: null,
    analisisSlug: null,
    anchoMm: null,
    aprox: [
      "consumo"
    ],
    autonomiaKm: 445,
    bateriaKwh: 52,
    cargaRapidaKw: 105,
    categoria: "SUV",
    ceroCien: 8.6,
    consumo: 13.8,
    consumoUnidad: "kWh/100 km",
    contras: [
      "Carga rápida limitada a 105 kW, frente a los 150 kW de la versión de 75 kWh",
      "La nueva generación aún no ha sido evaluada por Euro NCAP",
      "Maletero de 437 litros, por debajo del Kia EV3 (460 L) o el Skoda Elroq (470 L)",
      "Batería pequeña para viajar: en autopista real los 445 km WLTP se quedan cortos",
      "Precio de partida elevado frente a rivales como el VW ID.3 o el Citroën ë-C4",
      "Sin maletero delantero (frunk) para los cables de carga"
    ],
    emisionesCo2: 0,
    etiquetaDgt: "Cero",
    euroncap: {
      ano: null,
      estrellas: null,
      nota: "Sin datos EuroNCAP: modelo no probado",
      url: null
    },
    fuenteNombre: "km77.com",
    fuenteUrl: "https://www.km77.com/coches/nissan/leaf/informacion",
    galeria: [
      {
        alt: "Nissan Leaf 52 kWh 2026, vista lateral exterior",
        alto: 800,
        ancho: 1200,
        src: "/media/nissan-leaf-2026-52-kwh-precio-ficha-tecnica-oficial.webp"
      },
      {
        alt: "Interior del Nissan Leaf 52 kWh 2026 con doble pantalla",
        alto: 800,
        ancho: 1200,
        src: "/media/nissan-leaf-2026-52-kwh-precio-ficha-tecnica-interior-oficial.webp"
      },
      { src: "/media/nissan-leaf-2026-52-kwh-precio-ficha-tecnica-hunt1.webp", alt: "Leaf 52 kWh 2026 (foto: Nissan (foto oficial), licencia desconocida)", ancho: 1024, alto: 552 },
      { src: "/media/nissan-leaf-2026-52-kwh-precio-ficha-tecnica-hunt2.webp", alt: "Leaf 52 kWh 2026 (foto: Nissan (foto oficial de estudio), licencia desconocida)", ancho: 738, alto: 492 },
      { src: "/media/nissan-leaf-2026-52-kwh-precio-ficha-tecnica-hunt3.webp", alt: "Leaf 52 kWh 2026 (foto: Nissan (foto oficial) vía Autoblog, licencia desconocida)", ancho: 1920, alto: 1080 },
    ],
    garantiaBateriaAnos: 8,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: 160000,
    id: "nissan-leaf-2026-52-kwh-precio-ficha-tecnica",
    imagen: "/media/nissan-leaf-2026-52-kwh-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/nissan-leaf-2026-52-kwh-precio-ficha-tecnica-interior-oficial.webp",
    imagenOficial: "/media/nissan-leaf-2026-52-kwh-precio-ficha-tecnica-oficial.webp",
    largoMm: 4350,
    maleteroL: 437,
    marca: "Nissan",
    modelo: "Leaf 52 kWh 2026",
    parNm: 345,
    pesoKg: null,
    planMantenimiento: null,
    plazas: 5,
    potenciaCv: 177,
    precioDesde: 37080,
    pros: [
      "Desde 37.080 € es la puerta de acceso al nuevo Leaf 2026, ahora con formato crossover",
      "445 km WLTP con solo 52 kWh: eficiencia desde 13,8 kWh/100 km, de las mejores del segmento",
      "Cx de 0,25, el coeficiente aerodinámico más bajo entre sus rivales directos",
      "177 CV y 345 Nm con un 0-100 en 8,6 s: más que suficiente para todo uso",
      "Plataforma CMF-EV compartida con el Ariya y los Renault Megane y Scenic E-Tech",
      "Garantía de la batería de 8 años o 160.000 km según la web oficial de Nissan España"
    ],
    tipo: "Eléctrico",
    traccion: "Delantera",
    velocidadMax: null,
    videoCanal: null,
    videoId: "UAcjGuRL-dw"
  },
  {
    altoMm: null,
    analisisSlug: null,
    anchoMm: null,
    aprox: [
      "consumo"
    ],
    autonomiaKm: 622,
    bateriaKwh: 75,
    cargaRapidaKw: 150,
    categoria: "SUV",
    ceroCien: 7.6,
    consumo: 13.8,
    consumoUnidad: "kWh/100 km",
    contras: [
      "Desde 42.080 €: el salto de precio respecto al 52 kWh es notable",
      "La nueva generación aún no ha pasado las pruebas Euro NCAP",
      "1.956 kg de peso que penalizan la agilidad en tramos revirados",
      "Maletero de 437 litros, justo para un crossover familiar de 4,35 m",
      "Sin maletero delantero para guardar los cables de carga",
      "Los acabados altos (Advance, Evolve) pierden hasta 38 km de autonomía respecto al Engage"
    ],
    emisionesCo2: 0,
    etiquetaDgt: "Cero",
    euroncap: {
      ano: null,
      estrellas: null,
      nota: "Sin datos EuroNCAP: modelo no probado",
      url: null
    },
    fuenteNombre: "km77.com",
    fuenteUrl: "https://www.km77.com/coches/nissan/leaf/informacion",
    galeria: [
      {
        alt: "Nissan Leaf 75 kWh 2026, vista lateral exterior",
        alto: 800,
        ancho: 1200,
        src: "/media/nissan-leaf-2026-75-kwh-precio-ficha-tecnica-oficial.webp"
      },
      {
        alt: "Interior del Nissan Leaf 75 kWh 2026 con doble pantalla",
        alto: 800,
        ancho: 1200,
        src: "/media/nissan-leaf-2026-75-kwh-precio-ficha-tecnica-interior-oficial.webp"
      },
      { src: "/media/nissan-leaf-2026-75-kwh-precio-ficha-tecnica-hunt1.webp", alt: "Leaf 75 kWh 2026 (foto: Nissan (foto oficial de prensa, vía km77), licencia desconocida)", ancho: 1200, alto: 800 },
      { src: "/media/nissan-leaf-2026-75-kwh-precio-ficha-tecnica-hunt2.webp", alt: "Leaf 75 kWh 2026 (foto: Nissan (foto oficial de prensa, vía Conceptcarz), licencia desconocida)", ancho: 1280, alto: 853 },
      { src: "/media/nissan-leaf-2026-75-kwh-precio-ficha-tecnica-hunt3.webp", alt: "Leaf 75 kWh 2026 (foto: Nissan (foto oficial de prensa, vía Autocar), licencia desconocida)", ancho: 1200, alto: 795 },
    ],
    garantiaBateriaAnos: 8,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: 160000,
    id: "nissan-leaf-2026-75-kwh-precio-ficha-tecnica",
    imagen: "/media/nissan-leaf-2026-75-kwh-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/nissan-leaf-2026-75-kwh-precio-ficha-tecnica-interior-oficial.webp",
    imagenOficial: "/media/nissan-leaf-2026-75-kwh-precio-ficha-tecnica-oficial.webp",
    largoMm: 4350,
    maleteroL: 437,
    marca: "Nissan",
    modelo: "Leaf 75 kWh 2026",
    parNm: 355,
    pesoKg: 1956,
    planMantenimiento: null,
    plazas: 5,
    potenciaCv: 218,
    precioDesde: 42080,
    pros: [
      "622 km de autonomía WLTP: la mayor de su segmento, por delante del Kia EV3 y el Skoda Elroq",
      "218 CV, 355 Nm y un 0-100 en 7,6 s con respuesta inmediata",
      "Carga rápida de 150 kW: recupera hasta 420 km en unos 30 minutos",
      "Eficiencia de referencia, desde 13,8 kWh/100 km gracias al Cx de 0,25",
      "Gestión térmica de la batería mejorada para evitar los problemas de degradación de generaciones anteriores",
      "Cuesta solo 5.000 € más que el 52 kWh Engage y ofrece 177 km extra de autonomía"
    ],
    tipo: "Eléctrico",
    traccion: "Delantera",
    velocidadMax: null,
    videoCanal: null,
    videoId: "UAcjGuRL-dw"
  },
  {
    altoMm: null,
    analisisSlug: null,
    anchoMm: 1560,
    aprox: [
      "precioDesde",
      "altoMm",
      "pesoKg"
    ],
    autonomiaKm: 175,
    bateriaKwh: 11.2,
    cargaRapidaKw: null,
    categoria: "Microcar",
    ceroCien: null,
    consumo: null,
    consumoUnidad: null,
    contras: [
      "El precio 'desde' no incluye la batería: en propiedad suma 5.120 € y se acerca al Dacia Spring.",
      "Velocidad máxima de 45 km/h: solo sirve para ciudad, imposible salir a autovía.",
      "Sin prueba Euro NCAP y con carrocería mínima: protección limitada frente a turismos.",
      "Maletero testimonial y solo 2 plazas: no vale como único coche familiar.",
      "La red de estaciones de intercambio de baterías aún es escasa fuera de las grandes ciudades.",
      "Con una sola batería la autonomía ronda los 70 km: muy justa sin contratar la segunda."
    ],
    emisionesCo2: 0,
    etiquetaDgt: "Cero",
    euroncap: {
      ano: null,
      estrellas: null,
      nota: "Sin datos EuroNCAP: modelo no probado",
      url: null
    },
    fuenteNombre: "hibridosyelectricos.com",
    fuenteUrl: "https://www.hibridosyelectricos.com/coches/cuesta-8800-se-fabrica-en-espana-pero-es-nissan-quien-vende-este-rival-citroen-ami-en-europa_80508_102.html",
    galeria: [
      {
        alt: "Silence S04 circulando por Barcelona, vista frontal del nanocar eléctrico español",
        alto: 768,
        ancho: 1152,
        src: "/media/silence-s04-l6e-2025-precio-ficha-tecnica-oficial.webp"
      },
      {
        alt: "Interior del Silence S04 con volante multifunción y salpicadero",
        alto: 532,
        ancho: 945,
        src: "/media/silence-s04-l6e-2025-precio-ficha-tecnica-interior-oficial.webp"
      },
      { src: "/media/silence-s04-l6e-2025-precio-ficha-tecnica-hunt1.webp", alt: "S04 L6e 2025 (foto: Silence / Autoflotte, licencia desconocida)", ancho: 945, alto: 532 },
      { src: "/media/silence-s04-l6e-2025-precio-ficha-tecnica-hunt2.webp", alt: "S04 L6e 2025 (foto: Silence / Kleinwagenblog, licencia desconocida)", ancho: 1475, alto: 983 },
      { src: "/media/silence-s04-l6e-2025-precio-ficha-tecnica-hunt3.webp", alt: "S04 L6e 2025 (foto: HWUpgrade, licencia desconocida)", ancho: 1200, alto: 900 },
    ],
    garantiaBateriaAnos: null,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: null,
    id: "silence-s04-l6e-2025-precio-ficha-tecnica",
    imagen: "/media/silence-s04-l6e-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/silence-s04-l6e-2025-precio-ficha-tecnica-interior-oficial.webp",
    imagenOficial: "/media/silence-s04-l6e-2025-precio-ficha-tecnica-oficial.webp",
    largoMm: 2330,
    maleteroL: null,
    marca: "Silence",
    modelo: "S04 L6e 2025",
    parNm: null,
    pesoKg: null,
    planMantenimiento: null,
    plazas: 2,
    potenciaCv: 8,
    precioDesde: 8800,
    pros: [
      "Se conduce desde los 15 años con el carnet AM: ideal como primer vehículo para adolescentes.",
      "Baterías extraíbles tipo trolley que se intercambian en 30 segundos en las estaciones Silence, sin esperar cargas.",
      "Fabricado en España (Barcelona) y distribuido en Europa a través de la red de Nissan.",
      "Aire acondicionado y calefacción de serie, algo muy raro en un cuadriciclo.",
      "Mide solo 2,33 m: aparca en huecos de moto y entra en cualquier ZBE con etiqueta Cero.",
      "Desde 8.800 € con batería en alquiler (39,90 €/mes): el nanocar eléctrico más barato hecho en España."
    ],
    tipo: "Eléctrico",
    traccion: "Trasera",
    velocidadMax: 45,
    videoCanal: "Javier Costas",
    videoId: "roFd2gAjkVo"
  },
  {
    altoMm: null,
    analisisSlug: null,
    anchoMm: 1560,
    aprox: [
      "precioDesde",
      "velocidadMax",
      "altoMm",
      "pesoKg"
    ],
    autonomiaKm: 149,
    bateriaKwh: 11.2,
    cargaRapidaKw: null,
    categoria: "Microcar",
    ceroCien: null,
    consumo: null,
    consumoUnidad: null,
    contras: [
      "Con baterías en propiedad roza los 16.800 €: ya es territorio de turismos eléctricos completos.",
      "Sin datos Euro NCAP: la seguridad pasiva es la propia de un cuadriciclo pesado.",
      "Solo 2 plazas y maletero mínimo: segundo coche urbano, nunca coche único.",
      "El alquiler de batería (desde 39,90 €/mes) encarece el coste total si se usa a diario.",
      "A 85 km/h la rumorosidad y la suspensión firme se hacen notar.",
      "Red de intercambio de baterías aún en expansión: fuera de Madrid y Barcelona toca cargar en casa (6-9 h)."
    ],
    emisionesCo2: 0,
    etiquetaDgt: "Cero",
    euroncap: {
      ano: null,
      estrellas: null,
      nota: "Sin datos EuroNCAP: modelo no probado",
      url: null
    },
    fuenteNombre: "hibridosyelectricos.com",
    fuenteUrl: "https://www.hibridosyelectricos.com/coches/cuesta-8800-se-fabrica-en-espana-pero-es-nissan-quien-vende-este-rival-citroen-ami-en-europa_80508_102.html",
    galeria: [
      {
        alt: "Silence S04 L7e circulando por Barcelona, vista frontal del nanocar eléctrico",
        alto: 768,
        ancho: 1152,
        src: "/media/silence-s04-l7e-2025-precio-ficha-tecnica-oficial.webp"
      },
      {
        alt: "Interior del Silence S04 L7e con volante multifunción Silence",
        alto: 532,
        ancho: 945,
        src: "/media/silence-s04-l7e-2025-precio-ficha-tecnica-interior-oficial.webp"
      },
      { src: "/media/silence-s04-l7e-2025-precio-ficha-tecnica-hunt1.webp", alt: "S04 L7e 2025 (foto: Autonotizen, licencia desconocida)", ancho: 1200, alto: 900 },
      { src: "/media/silence-s04-l7e-2025-precio-ficha-tecnica-hunt2.webp", alt: "S04 L7e 2025 (foto: Autoservicepraxis / Autohaus (prensa del lanzamiento del S04 L7e), licencia desconocida)", ancho: 1200, alto: 675 },
      { src: "/media/silence-s04-l7e-2025-precio-ficha-tecnica-hunt3.webp", alt: "S04 L7e 2025 (foto: Autocar, licencia desconocida)", ancho: 1200, alto: 795 },
    ],
    garantiaBateriaAnos: null,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: null,
    id: "silence-s04-l7e-2025-precio-ficha-tecnica",
    imagen: "/media/silence-s04-l7e-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/silence-s04-l7e-2025-precio-ficha-tecnica-interior-oficial.webp",
    imagenOficial: "/media/silence-s04-l7e-2025-precio-ficha-tecnica-oficial.webp",
    largoMm: 2330,
    maleteroL: null,
    marca: "Silence",
    modelo: "S04 L7e 2025",
    parNm: null,
    pesoKg: null,
    planMantenimiento: null,
    plazas: 2,
    potenciaCv: 19,
    precioDesde: 9800,
    pros: [
      "Alcanza 85 km/h: suficiente para rondas y desplazamientos interurbanos cortos.",
      "Mismo sistema de baterías extraíbles con 149 km de autonomía homologada con dos baterías.",
      "Etiqueta Cero de la DGT: acceso libre a las ZBE de todas las ciudades españolas.",
      "Interior sorprendentemente equipado: pantalla TFT de 7 pulgadas, Bluetooth y mandos en el volante.",
      "Se conduce con el carnet B y cuesta menos de 10.000 € con la batería en alquiler.",
      "Asientos asimétricos que aprovechan al máximo el habitáculo de solo 2,33 metros."
    ],
    tipo: "Eléctrico",
    traccion: "Trasera",
    velocidadMax: 85,
    videoCanal: "Javier Costas",
    videoId: "roFd2gAjkVo"
  },
  {
    altoMm: 1505,
    analisisSlug: null,
    anchoMm: 1808,
    aprox: [],
    autonomiaKm: 321,
    bateriaKwh: 54,
    cargaRapidaKw: 100,
    categoria: "SUV",
    ceroCien: 5.9,
    consumo: 18.7,
    consumoUnidad: "kWh/100 km",
    contras: [
      "Sin prueba Euro NCAP: ni el Abarth 600e ni el Fiat 600e base han sido evaluados.",
      "280 CV solo al eje delantero: en aceleraciones fuertes puede perder motricidad pese al Torsen.",
      "Autonomía WLTP de 321 km, justa para un coche de 49.000 €.",
      "Suspensión firme y 1.625 kg: en ciudad con firme bacheado resulta incómodo.",
      "Maletero de 360 litros, correcto pero sin alardes para un SUV de 4,19 metros.",
      "La potencia máxima solo se desbloquea en el modo Scorpion Track; en Turismo se limita a 190 CV."
    ],
    emisionesCo2: 0,
    etiquetaDgt: "Cero",
    euroncap: {
      ano: null,
      estrellas: null,
      nota: "Sin datos EuroNCAP: modelo no probado",
      url: null
    },
    fuenteNombre: "km77.com",
    fuenteUrl: "https://www.km77.com/coches/abarth/600/2025/estandar/e/600e-scorpionissima-207-kw-280-cv/datos",
    galeria: [
      {
        alt: "Abarth 600e Scorpionissima en color Hypnotic Purple, vista frontal",
        alto: 726,
        ancho: 1600,
        src: "/media/abarth-600e-scorpionissima-2025-precio-ficha-tecnica-oficial.webp"
      },
      {
        alt: "Interior del Abarth 600e Scorpionissima con volante deportivo y pantalla táctil",
        alto: 675,
        ancho: 1200,
        src: "/media/abarth-600e-scorpionissima-2025-precio-ficha-tecnica-interior-oficial.webp"
      },
      { src: "/media/abarth-600e-scorpionissima-2025-precio-ficha-tecnica-hunt1.webp", alt: "600e Scorpionissima 2025 (foto: Abarth (foto oficial de prensa) vía HeadLight Magazine, licencia desconocida)", ancho: 800, alto: 420 },
      { src: "/media/abarth-600e-scorpionissima-2025-precio-ficha-tecnica-hunt2.webp", alt: "600e Scorpionissima 2025 (foto: Auto Republika (foto real de prueba), licencia desconocida)", ancho: 1024, alto: 496 },
      { src: "/media/abarth-600e-scorpionissima-2025-precio-ficha-tecnica-hunt3.webp", alt: "600e Scorpionissima 2025 (foto: Abarth (foto oficial) vía Carscoops, licencia desconocida)", ancho: 2048, alto: 1366 },
    ],
    garantiaBateriaAnos: null,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: null,
    id: "abarth-600e-scorpionissima-2025-precio-ficha-tecnica",
    imagen: "/media/abarth-600e-scorpionissima-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/abarth-600e-scorpionissima-2025-precio-ficha-tecnica-interior-oficial.webp",
    imagenOficial: "/media/abarth-600e-scorpionissima-2025-precio-ficha-tecnica-oficial.webp",
    largoMm: 4189,
    maleteroL: 360,
    marca: "Abarth",
    modelo: "600e Scorpionissima 2025",
    parNm: 345,
    pesoKg: 1625,
    planMantenimiento: null,
    plazas: 5,
    potenciaCv: 281,
    precioDesde: 49000,
    pros: [
      "El Abarth más potente de la historia: 280 CV con diferencial autoblocante Torsen en el eje delantero.",
      "Edición limitada a 1.949 unidades (año de fundación de Abarth): futura pieza de coleccionista.",
      "Frenos Alcon con pinzas monobloque de 4 pistones y discos delanteros de 380 mm, herencia de competición.",
      "Tres modos de conducción (Turismo, Scorpion Street, Scorpion Track) con hasta 200 km/h de punta.",
      "Generador de sonido exterior que emula el rugido Abarth sin emitir CO2.",
      "Carga rápida de 100 kW en corriente continua: del 10 al 80 % en unos 27 minutos."
    ],
    tipo: "Eléctrico",
    traccion: "Delantera",
    velocidadMax: 200,
    videoCanal: null,
    videoId: null
  },
  {
    altoMm: 1515,
    analisisSlug: null,
    anchoMm: 1500,
    aprox: [
      "precioDesde",
      "bateriaKwh",
      "maleteroL",
      "parNm"
    ],
    autonomiaKm: 150,
    bateriaKwh: 9.2,
    cargaRapidaKw: null,
    categoria: "Microcar",
    ceroCien: null,
    consumo: null,
    consumoUnidad: null,
    contras: [
      "El precio 'desde' se apoya en el Programa Auto+; sin ayudas la tarifa es muy superior.",
      "Sin carga rápida: entre 6 y 8 horas en enchufe doméstico para una carga completa.",
      "Solo 2 plazas y maletero limitado: carga y practicidad justas.",
      "Sin prueba Euro NCAP ni ayudas a la conducción avanzadas.",
      "Prestaciones modestas (14 CV): los 90 km/h se alcanzan con paciencia y sin margen.",
      "Red de servicio pequeña frente a marcas generalistas: postventa concentrada en grandes ciudades."
    ],
    emisionesCo2: 0,
    etiquetaDgt: "Cero",
    euroncap: {
      ano: null,
      estrellas: null,
      nota: "Sin datos EuroNCAP: modelo no probado",
      url: null
    },
    fuenteNombre: "invictaelectric.es",
    fuenteUrl: "https://invictaelectric.es/tienda/pocco/",
    galeria: [
      {
        alt: "Invicta Electric Pocco rojo, vista delantera del cuadriciclo eléctrico",
        alto: 1152,
        ancho: 1153,
        src: "/media/invicta-pocco-2025-precio-ficha-tecnica-oficial.webp"
      },
      {
        alt: "Interior del Invicta Pocco con salpicadero bicolor y pantalla táctil",
        alto: 626,
        ancho: 626,
        src: "/media/invicta-pocco-2025-precio-ficha-tecnica-interior-oficial.webp"
      },
      { src: "/media/invicta-pocco-2025-precio-ficha-tecnica-hunt1.webp", alt: "Pocco 2025 (foto: Invicta Electric vía QuéCocheMeCompro (galería del Pocco), licencia desconocida)", ancho: 1200, alto: 800 },
      { src: "/media/invicta-pocco-2025-precio-ficha-tecnica-hunt2.webp", alt: "Pocco 2025 (foto: Invicta Electric vía QuéCocheMeCompro (galería del Pocco), licencia desconocida)", ancho: 506, alto: 800 },
      { src: "/media/invicta-pocco-2025-precio-ficha-tecnica-hunt3.webp", alt: "Pocco 2025 (foto: Invicta Electric vía QuéCocheMeCompro (galería del Pocco), licencia desconocida)", ancho: 1200, alto: 800 },
    ],
    garantiaBateriaAnos: null,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: null,
    id: "invicta-pocco-2025-precio-ficha-tecnica",
    imagen: "/media/invicta-pocco-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/invicta-pocco-2025-precio-ficha-tecnica-interior-oficial.webp",
    imagenOficial: "/media/invicta-pocco-2025-precio-ficha-tecnica-oficial.webp",
    largoMm: 3020,
    maleteroL: 766,
    marca: "Invicta Electric",
    modelo: "Pocco 2025",
    parNm: 100,
    pesoKg: null,
    planMantenimiento: null,
    plazas: 2,
    potenciaCv: 14,
    precioDesde: 8870,
    pros: [
      "Precio oficial desde 8.870 €: el cuadriciclo pesado L7e más barato del mercado español.",
      "150 km de autonomía homologada con solo 9,2 kWh útiles: eficiencia destacable.",
      "Llega a 90 km/h: puede salir de la ciudad por rondas y carreteras secundarias.",
      "Equipamiento impropio del segmento: ABS, cámara trasera, pantalla táctil y climatizador.",
      "Radio de giro inferior a 8 metros y 17 cm de altura libre: aparca en cualquier hueco.",
      "Marca española (Grupo Invicta) con red de tiendas y compra online en invictaelectric.es."
    ],
    tipo: "Eléctrico",
    traccion: null,
    velocidadMax: 90,
    videoCanal: null,
    videoId: null
  },
  {
    altoMm: 1585,
    analisisSlug: null,
    anchoMm: 1481,
    aprox: [
      "precioDesde"
    ],
    autonomiaKm: 170,
    bateriaKwh: 13.7,
    cargaRapidaKw: null,
    categoria: "Microcar",
    ceroCien: null,
    consumo: null,
    consumoUnidad: null,
    contras: [
      "El precio de 8.870 € depende del Programa Auto+; sin ayudas la tarifa ronda los 17.000 €.",
      "Marca y red comercial minoritarias: repuestos y servicio con plazos inciertos.",
      "Sin prueba Euro NCAP y estructura ligera de unos 600 kg con conductor.",
      "Sin carga rápida: entre 6 y 8 horas para recuperar los 170 km de autonomía.",
      "Solo 2 plazas: no sirve como coche familiar ni para más de un acompañante.",
      "Frenos traseros de tambor y chasis sencillo: tacto menos refinado que un turismo."
    ],
    emisionesCo2: 0,
    etiquetaDgt: "Cero",
    euroncap: {
      ano: null,
      estrellas: null,
      nota: "Sin datos EuroNCAP: modelo no probado",
      url: null
    },
    fuenteNombre: "invictaelectric.es",
    fuenteUrl: "https://invictaelectric.es/tienda/pony/",
    galeria: [
      {
        alt: "Invicta Electric Pony en color menta, vista delantera del cuadriciclo",
        alto: 800,
        ancho: 800,
        src: "/media/invicta-pony-2025-precio-ficha-tecnica-oficial.webp"
      },
      {
        alt: "Detalle del interior del Invicta Pony con pantalla multimedia y salpicadero bitono",
        alto: 800,
        ancho: 800,
        src: "/media/invicta-pony-2025-precio-ficha-tecnica-interior-oficial.webp"
      },
      { src: "/media/invicta-pony-2025-precio-ficha-tecnica-hunt1.webp", alt: "Pony 2025 (foto: Invicta Electric (web oficial, tienda Pony), licencia desconocida)", ancho: 800, alto: 800 },
      { src: "/media/invicta-pony-2025-precio-ficha-tecnica-hunt2.webp", alt: "Pony 2025 (foto: Auto10 (prueba del Invicta Pony), licencia desconocida)", ancho: 1200, alto: 800 },
      { src: "/media/invicta-pony-2025-precio-ficha-tecnica-hunt3.webp", alt: "Pony 2025 (foto: Invicta Electric (web oficial), licencia desconocida)", ancho: 1000, alto: 499 },
    ],
    garantiaBateriaAnos: null,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: null,
    id: "invicta-pony-2025-precio-ficha-tecnica",
    imagen: "/media/invicta-pony-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/invicta-pony-2025-precio-ficha-tecnica-interior-oficial.webp",
    imagenOficial: "/media/invicta-pony-2025-precio-ficha-tecnica-oficial.webp",
    largoMm: 3060,
    maleteroL: null,
    marca: "Invicta Electric",
    modelo: "Pony 2025",
    parNm: null,
    pesoKg: null,
    planMantenimiento: null,
    plazas: 2,
    potenciaCv: 27,
    precioDesde: 8870,
    pros: [
      "El cuadriciclo español con más autonomía por euro: 170 km desde 8.870 €.",
      "Velocidad máxima de 100 km/h: el único microcar de este precio que no teme a la vía rápida urbana.",
      "Cámara panorámica de 360º de serie, inédita en cuadriciclos de este segmento.",
      "Pantalla táctil de 10,25 pulgadas, aire acondicionado y dirección asistida incluidos.",
      "Cuatro colores de carrocería (incluido Rosa Flamingo) y 3 tapizados interiores a elegir.",
      "Premiado como 'Mejor solución de movilidad 2025' por la revista Mujer Hoy."
    ],
    tipo: "Eléctrico",
    traccion: null,
    velocidadMax: 100,
    videoCanal: null,
    videoId: null
  },
  {
    altoMm: 1950,
    analisisSlug: null,
    anchoMm: 1730,
    aprox: [
      "precioDesde",
      "bateriaKwh"
    ],
    autonomiaKm: 262,
    bateriaKwh: 63,
    cargaRapidaKw: null,
    categoria: "Todoterreno",
    ceroCien: null,
    consumo: 25.4,
    consumoUnidad: "kWh/100 km",
    contras: [
      "Precio de 58.302 €: cuesta como un todoterreno premium pese a su interior espartano.",
      "Homologado como N1: ITV más frecuente y velocidad limitada a 90 km/h en autovía.",
      "Interior rudo sin lujos: plásticos duros y equipamiento mínimo para ese precio.",
      "Pesa 2.040 kg y su aerodinámica es la de un ladrillo: consume 25,4 kWh/100 km.",
      "Sin prueba Euro NCAP y sin apenas ayudas a la conducción.",
      "Maletero pequeño para sus 4,05 metros y red comercial muy limitada en España."
    ],
    emisionesCo2: 0,
    etiquetaDgt: "Cero",
    euroncap: {
      ano: null,
      estrellas: null,
      nota: "Sin datos EuroNCAP: modelo no probado",
      url: null
    },
    fuenteNombre: "km77.com",
    fuenteUrl: "https://www.km77.com/coches/invicta-electric/spartan/2022/estandar/estandar/spartan-ev/datos",
    galeria: [
      {
        alt: "Invicta Spartan EV 4x4 eléctrico vadeando un río, vista trasera",
        alto: 667,
        ancho: 1000,
        src: "/media/invicta-spartan-ev-2025-precio-ficha-tecnica-oficial.webp"
      },
      {
        alt: "Interior espartano del Invicta Spartan EV con instrumentación digital",
        alto: 371,
        ancho: 659,
        src: "/media/invicta-spartan-ev-2025-precio-ficha-tecnica-interior-oficial.webp"
      },
      { src: "/media/invicta-spartan-ev-2025-precio-ficha-tecnica-hunt1.webp", alt: "Spartan EV 2025 (foto: Híbridos y Eléctricos, licencia desconocida)", ancho: 659, alto: 371 },
      { src: "/media/invicta-spartan-ev-2025-precio-ficha-tecnica-hunt2.webp", alt: "Spartan EV 2025 (foto: Híbridos y Eléctricos, licencia desconocida)", ancho: 659, alto: 371 },
      { src: "/media/invicta-spartan-ev-2025-precio-ficha-tecnica-hunt3.webp", alt: "Spartan EV 2025 (foto: Híbridos y Eléctricos, licencia desconocida)", ancho: 659, alto: 371 },
    ],
    garantiaBateriaAnos: 5,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: null,
    id: "invicta-spartan-ev-2025-precio-ficha-tecnica",
    imagen: "/media/invicta-spartan-ev-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/invicta-spartan-ev-2025-precio-ficha-tecnica-interior-oficial.webp",
    imagenOficial: "/media/invicta-spartan-ev-2025-precio-ficha-tecnica-oficial.webp",
    largoMm: 4050,
    maleteroL: null,
    marca: "Invicta Electric",
    modelo: "Spartan EV 2025",
    parNm: 600,
    pesoKg: 2040,
    planMantenimiento: null,
    plazas: 5,
    potenciaCv: 163,
    precioDesde: 58302,
    pros: [
      "El único 4x4 puro 100 % eléctrico a la venta en España: reductora conectable y 600 Nm de par.",
      "262 km de autonomía WLTP con batería de 63 kWh y etiqueta Cero para circular por el campo sin emisiones.",
      "Vadea hasta 50 cm de agua y remolca 2.500 kg: herramienta de trabajo real, no un SUV de postureo.",
      "Recupera el 80 % de la batería en aproximadamente 1 hora en corriente continua.",
      "Mecánica sencilla derivada del UAZ Hunter: fácil y barato de reparar en entornos rurales.",
      "Garantía de 5 años para las baterías, por encima de la media del segmento."
    ],
    tipo: "Eléctrico",
    traccion: "Total",
    velocidadMax: 130,
    videoCanal: null,
    videoId: null
  },
  {
    altoMm: 1550,
    analisisSlug: null,
    anchoMm: 1490,
    aprox: [
      "pesoKg",
      "largoMm",
      "altoMm"
    ],
    autonomiaKm: 250,
    bateriaKwh: 27,
    cargaRapidaKw: null,
    categoria: "Urbano",
    ceroCien: null,
    consumo: null,
    consumoUnidad: null,
    contras: [
      "La versión básica (17 kWh, 85 km/h) se queda corta; la recomendable es la de 27 kWh.",
      "Sin carga rápida: entre 6 y 8 horas en enchufe doméstico para una carga completa.",
      "Interior sencillo con plásticos duros y equipamiento básico.",
      "Sin prueba Euro NCAP: turismo ligero sin evaluación independiente de seguridad.",
      "Solo 2 plazas y maletero justo: coche urbano y nada más.",
      "Marca minoritaria: depreciación y reventa inciertas frente a Dacia o Citroën."
    ],
    emisionesCo2: 0,
    etiquetaDgt: "Cero",
    euroncap: {
      ano: null,
      estrellas: null,
      nota: "Sin datos EuroNCAP: modelo no probado",
      url: null
    },
    fuenteNombre: "invictaelectric.es",
    fuenteUrl: "https://invictaelectric.es/tienda/",
    galeria: [
      {
        alt: "Invicta Electric D2S azul, vista delantera del turismo eléctrico urbano",
        alto: 651,
        ancho: 1200,
        src: "/media/invicta-d2s-2025-precio-ficha-tecnica-oficial.webp"
      },
      {
        alt: "Interior del Invicta D2S con tapicería bitono marrón y beige",
        alto: 497,
        ancho: 768,
        src: "/media/invicta-d2s-2025-precio-ficha-tecnica-interior-oficial.webp"
      },
      { src: "/media/invicta-d2s-2025-precio-ficha-tecnica-hunt1.webp", alt: "D2S 27 kW 2025 (foto: Invicta Electric (tienda oficial, producto D2S 27kW), licencia desconocida)", ancho: 1153, alto: 1152 },
      { src: "/media/invicta-d2s-2025-precio-ficha-tecnica-hunt2.webp", alt: "D2S 27 kW 2025 (foto: Invicta Electric vía Gamarra Korean Cars (galería del D2S), licencia desconocida)", ancho: 950, alto: 515 },
      { src: "/media/invicta-d2s-2025-precio-ficha-tecnica-hunt3.webp", alt: "D2S 27 kW 2025 (foto: Invicta Electric (tienda oficial, producto D2S 27kW), licencia desconocida)", ancho: 873, alto: 665 },
    ],
    garantiaBateriaAnos: 5,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: 100000,
    id: "invicta-d2s-2025-precio-ficha-tecnica",
    imagen: "/media/invicta-d2s-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/invicta-d2s-2025-precio-ficha-tecnica-interior-oficial.webp",
    imagenOficial: "/media/invicta-d2s-2025-precio-ficha-tecnica-oficial.webp",
    largoMm: 2800,
    maleteroL: null,
    marca: "Invicta Electric",
    modelo: "D2S 27 kW 2025",
    parNm: null,
    pesoKg: 865,
    planMantenimiento: null,
    plazas: 2,
    potenciaCv: 49,
    precioDesde: 13620,
    pros: [
      "El turismo eléctrico más barato de España: 13.620 € con 250 km de autonomía.",
      "La versión de 27 kWh alcanza 105 km/h: ya no es un simple cuadriciclo urbano.",
      "Mide 2,80 m, como un Smart Fortwo: aparca en la mitad de una plaza normal.",
      "Batería garantizada 5 años o 100.000 km por la marca.",
      "Cinco colores a elegir y compra online con entrega en toda España.",
      "Etiqueta Cero: acceso a todas las ZBE y aparcamiento bonificado en muchas ciudades."
    ],
    tipo: "Eléctrico",
    traccion: "Delantera",
    velocidadMax: 105,
    videoCanal: null,
    videoId: null
  },
  {
    altoMm: 1518,
    analisisSlug: null,
    anchoMm: 1757,
    aprox: [],
    autonomiaKm: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    categoria: "SUV",
    ceroCien: 9.9,
    consumo: 5.4,
    consumoUnidad: "l/100 km",
    contras: [
      "Plazas traseras con altura al techo limitada por la caída coupé del techo",
      "Motor tricilíndrico con vibraciones perceptibles a ralentí",
      "Etiqueta C de la DGT, sin hibridación ni opción ECO",
      "Suspensión trasera de eje torsional, menos refinada que multibrazo",
      "Precio superior al T-Cross equivalente sin aportar más espacio interior"
    ],
    emisionesCo2: 123,
    etiquetaDgt: "C",
    euroncap: {
      ano: null,
      estrellas: null,
      nota: "Sin datos EuroNCAP verificados en esta investigación",
      url: null
    },
    fuenteNombre: "km77",
    fuenteUrl: null,
    galeria: [
      {
        alt: "Volkswagen Taigo 1.0 TSI 115 Más, vista frontal exterior",
        alto: 1080,
        ancho: 1920,
        src: "/media/volkswagen-taigo-10-tsi-2026-precio-ficha-tecnica-oficial.webp"
      },
      {
        alt: "Interior del Volkswagen Taigo, salpicadero y volante",
        alto: 683,
        ancho: 1024,
        src: "/media/volkswagen-taigo-10-tsi-2026-precio-ficha-tecnica-interior-oficial.webp"
      },
      { src: "/media/volkswagen-taigo-10-tsi-2026-precio-ficha-tecnica-hunt1.webp", alt: "Taigo 1.0 TSI 115 Más (foto: Volkswagen (foto de prensa) vía CarChecker, licencia desconocida)", ancho: 1280, alto: 720 },
      { src: "/media/volkswagen-taigo-10-tsi-2026-precio-ficha-tecnica-hunt2.webp", alt: "Taigo 1.0 TSI 115 Más (foto: Volkswagen AG (foto de prensa oficial, EXIF Volkswagen AG) vía Motorvisión, licencia desconocida)", ancho: 1024, alto: 682 },
      { src: "/media/volkswagen-taigo-10-tsi-2026-precio-ficha-tecnica-hunt3.webp", alt: "Taigo 1.0 TSI 115 Más (foto: Volkswagen (foto de prensa) vía ByMyCar, licencia desconocida)", ancho: 1536, alto: 1152 },
    ],
    garantiaBateriaAnos: null,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: null,
    id: "volkswagen-taigo-10-tsi-2026-precio-ficha-tecnica",
    imagen: "/media/volkswagen-taigo-10-tsi-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/volkswagen-taigo-10-tsi-2026-precio-ficha-tecnica-interior-oficial.webp",
    imagenOficial: "/media/volkswagen-taigo-10-tsi-2026-precio-ficha-tecnica-oficial.webp",
    largoMm: 4266,
    maleteroL: 440,
    marca: "Volkswagen",
    modelo: "Taigo 1.0 TSI 115 Más",
    parNm: 200,
    pesoKg: 1318,
    planMantenimiento: null,
    plazas: 5,
    potenciaCv: 116,
    precioDesde: 27595,
    pros: [
      "SUV coupé con diseño distintivo y caída de techo pronunciada que lo diferencia del T-Cross",
      "Maletero de 440 litros, superior a la mayoría de SUV urbanos del segmento B",
      "Motor 1.0 TSI de 116 CV con consumos contenidos (5,4 l/100 km WLTP)",
      "Interior con Digital Cockpit y pantalla táctil de 8 pulgadas de serie en acabado Más",
      "Buena altura libre al suelo para un coupé, apto para pistas ocasionales"
    ],
    tipo: "Gasolina",
    traccion: "Delantera",
    velocidadMax: 196,
    videoCanal: null,
    videoId: null
  },
  {
    altoMm: 1573,
    analisisSlug: null,
    anchoMm: 1760,
    aprox: [],
    autonomiaKm: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    categoria: "SUV",
    ceroCien: 10.1,
    consumo: 5.5,
    consumoUnidad: "l/100 km",
    contras: [
      "Maletero de 385 litros, justo para el segmento",
      "Materiales interiores con plásticos duros en la mayoría de superficies",
      "Aceleración de 0-100 en 10,1 s, prestaciones modestas",
      "Etiqueta C sin opción híbrida en la gama",
      "Dirección poco comunicativa, enfoque claramente urbano"
    ],
    emisionesCo2: 126,
    etiquetaDgt: "C",
    euroncap: {
      ano: null,
      estrellas: null,
      nota: "Sin datos EuroNCAP verificados en esta investigación",
      url: null
    },
    fuenteNombre: "motorgiga",
    fuenteUrl: null,
    galeria: [
      {
        alt: "Volkswagen T-Cross 1.0 TSI 115 Más, vista exterior",
        alto: 356,
        ancho: 630,
        src: "/media/volkswagen-t-cross-10-tsi-2026-precio-ficha-tecnica-oficial.webp"
      },
      {
        alt: "Interior del Volkswagen T-Cross, puesto de conducción",
        alto: 900,
        ancho: 1600,
        src: "/media/volkswagen-t-cross-10-tsi-2026-precio-ficha-tecnica-interior-oficial.webp"
      },
      { src: "/media/volkswagen-t-cross-10-tsi-2026-precio-ficha-tecnica-hunt1.webp", alt: "T-Cross 1.0 TSI 115 Más (foto: Volkswagen (prensa) vía Cars.co.za, licencia desconocida)", ancho: 800, alto: 600 },
      { src: "/media/volkswagen-t-cross-10-tsi-2026-precio-ficha-tecnica-hunt2.webp", alt: "T-Cross 1.0 TSI 115 Más (foto: Volkswagen (prensa) vía Cars.co.za, licencia desconocida)", ancho: 768, alto: 576 },
      { src: "/media/volkswagen-t-cross-10-tsi-2026-precio-ficha-tecnica-hunt3.webp", alt: "T-Cross 1.0 TSI 115 Más (foto: Volkswagen (prensa) vía Cars.co.za, licencia desconocida)", ancho: 800, alto: 600 },
    ],
    garantiaBateriaAnos: null,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: null,
    id: "volkswagen-t-cross-10-tsi-2026-precio-ficha-tecnica",
    imagen: "/media/volkswagen-t-cross-10-tsi-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/volkswagen-t-cross-10-tsi-2026-precio-ficha-tecnica-interior-oficial.webp",
    imagenOficial: "/media/volkswagen-t-cross-10-tsi-2026-precio-ficha-tecnica-oficial.webp",
    largoMm: 4127,
    maleteroL: 385,
    marca: "Volkswagen",
    modelo: "T-Cross 1.0 TSI 115 Más",
    parNm: 200,
    pesoKg: 1360,
    planMantenimiento: null,
    plazas: 5,
    potenciaCv: 116,
    precioDesde: 28585,
    pros: [
      "SUV urbano compacto (4,13 m) ideal para ciudad y aparcamientos estrechos",
      "Asientos traseros deslizantes que permiten priorizar maletero o espacio para piernas",
      "Posición de conducción elevada con buena visibilidad",
      "Motor 1.0 TSI probado y fiable, con cadena de distribución",
      "Consumo moderado de 5,5 l/100 km para un SUV de gasolina"
    ],
    tipo: "Gasolina",
    traccion: "Delantera",
    velocidadMax: 193,
    videoCanal: null,
    videoId: null
  },
  {
    altoMm: 1907,
    analisisSlug: null,
    anchoMm: 1941,
    aprox: [],
    autonomiaKm: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    categoria: "Monovolumen",
    ceroCien: 11.6,
    consumo: 6.6,
    consumoUnidad: "l/100 km",
    contras: [
      "Precio de 68.230 €, en territorio de premium alemán",
      "Peso de 2.153 kg que penaliza consumos y agilidad",
      "Longitud de casi 5 metros, complicada para aparcar en ciudad",
      "Etiqueta C del diésel, con restricciones en ZBE",
      "Aceleración de 11,6 s, claramente orientada al confort no a prestaciones"
    ],
    emisionesCo2: 172,
    etiquetaDgt: "C",
    euroncap: {
      ano: null,
      estrellas: null,
      nota: "Sin datos EuroNCAP: modelo no probado",
      url: null
    },
    fuenteNombre: "km77",
    fuenteUrl: null,
    galeria: [
      {
        alt: "Volkswagen Multivan T7 2.0 TDI, vista exterior lateral",
        alto: 442,
        ancho: 664,
        src: "/media/volkswagen-multivan-20-tdi-2026-precio-ficha-tecnica-oficial.webp"
      },
      {
        alt: "Interior del Volkswagen Multivan, salpicadero",
        alto: 602,
        ancho: 1068,
        src: "/media/volkswagen-multivan-20-tdi-2026-precio-ficha-tecnica-interior-oficial.webp"
      },
      { src: "/media/volkswagen-multivan-20-tdi-2026-precio-ficha-tecnica-hunt1.webp", alt: "Multivan 2.0 TDI 150 Life DSG (foto: Autohaus Moll vía mobile.de (anuncio Multivan Life 2.0 TDI DSG), licencia desconocida)", ancho: 1600, alto: 1200 },
      { src: "/media/volkswagen-multivan-20-tdi-2026-precio-ficha-tecnica-hunt2.webp", alt: "Multivan 2.0 TDI 150 Life DSG (foto: Vendedor vía AutoUncle (anuncio VW Multivan T7 Life Lang TDI DSG), licencia desconocida)", ancho: 800, alto: 600 },
      { src: "/media/volkswagen-multivan-20-tdi-2026-precio-ficha-tecnica-hunt3.webp", alt: "Multivan 2.0 TDI 150 Life DSG (foto: Volkswagen (prensa oficial) vía eManualOnline, licencia desconocida)", ancho: 1200, alto: 800 },
    ],
    garantiaBateriaAnos: null,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: null,
    id: "volkswagen-multivan-20-tdi-2026-precio-ficha-tecnica",
    imagen: "/media/volkswagen-multivan-20-tdi-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/volkswagen-multivan-20-tdi-2026-precio-ficha-tecnica-interior-oficial.webp",
    imagenOficial: "/media/volkswagen-multivan-20-tdi-2026-precio-ficha-tecnica-oficial.webp",
    largoMm: 4973,
    maleteroL: 509,
    marca: "Volkswagen",
    modelo: "Multivan 2.0 TDI 150 Life DSG",
    parNm: 360,
    pesoKg: 2153,
    planMantenimiento: null,
    plazas: 7,
    potenciaCv: 150,
    precioDesde: 68230,
    pros: [
      "Siete plazas reales con asientos individuales deslizantes y extraíbles",
      "Maletero de 509 litros incluso con las 7 plazas en uso",
      "Motor 2.0 TDI de 150 CV con 360 Nm, ideal para viajar cargado",
      "Mesa plegable central y rieles en el suelo para máxima modularidad",
      "Calidad de rodadura y silencio a nivel de turismo premium"
    ],
    tipo: "Diésel",
    traccion: "Delantera",
    velocidadMax: 190,
    videoCanal: null,
    videoId: null
  },
  {
    altoMm: 1603,
    analisisSlug: null,
    anchoMm: 1841,
    aprox: [],
    autonomiaKm: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    categoria: "SUV",
    ceroCien: 8.8,
    consumo: 4.9,
    consumoUnidad: "l/100 km",
    contras: [
      "Diseño conservador que pasa desapercibido",
      "Etiqueta C del diésel en un mercado que migra a electrificados",
      "Suspensión firme que transmite baches en ciudad",
      "Sistema de infoentretenimiento menos intuitivo que la competencia",
      "Sin tracción total en esta versión diésel 150 CV"
    ],
    emisionesCo2: 129,
    etiquetaDgt: "C",
    euroncap: {
      ano: null,
      estrellas: null,
      nota: "Sin datos EuroNCAP verificados en esta investigación",
      url: null
    },
    fuenteNombre: "motorgiga",
    fuenteUrl: null,
    galeria: [
      {
        alt: "Skoda Karoq Selection 2.0 TDI, vista exterior",
        alto: 244,
        ancho: 390,
        src: "/media/skoda-karoq-20-tdi-150-2026-precio-ficha-tecnica-oficial.webp"
      },
      {
        alt: "Interior del Skoda Karoq, salpicadero",
        alto: 579,
        ancho: 821,
        src: "/media/skoda-karoq-20-tdi-150-2026-precio-ficha-tecnica-interior-oficial.webp"
      },
      { src: "/media/skoda-karoq-20-tdi-150-2026-precio-ficha-tecnica-hunt1.webp", alt: "Karoq Selection 2.0 TDI 150 DSG (foto: Skoda Auto / Skoda Storyboard (prensa oficial), licencia desconocida)", ancho: 1920, alto: 1281 },
      { src: "/media/skoda-karoq-20-tdi-150-2026-precio-ficha-tecnica-hunt2.webp", alt: "Karoq Selection 2.0 TDI 150 DSG (foto: Skoda Auto (prensa oficial) / CarExpert, licencia desconocida)", ancho: 960, alto: 640 },
      { src: "/media/skoda-karoq-20-tdi-150-2026-precio-ficha-tecnica-hunt3.webp", alt: "Karoq Selection 2.0 TDI 150 DSG (foto: Skoda Auto (prensa oficial) / CarExpert, licencia desconocida)", ancho: 960, alto: 640 },
    ],
    garantiaBateriaAnos: null,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: null,
    id: "skoda-karoq-20-tdi-150-2026-precio-ficha-tecnica",
    imagen: "/media/skoda-karoq-20-tdi-150-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/skoda-karoq-20-tdi-150-2026-precio-ficha-tecnica-interior-oficial.webp",
    imagenOficial: "/media/skoda-karoq-20-tdi-150-2026-precio-ficha-tecnica-oficial.webp",
    largoMm: 4389,
    maleteroL: 521,
    marca: "Skoda",
    modelo: "Karoq Selection 2.0 TDI 150 DSG",
    parNm: 360,
    pesoKg: 1511,
    planMantenimiento: null,
    plazas: 5,
    potenciaCv: 150,
    precioDesde: 35795,
    pros: [
      "Motor 2.0 TDI de 150 CV con consumo real de solo 4,9 l/100 km",
      "Maletero de 521 litros ampliable a 1.630 con asientos abatidos",
      "Cambio DSG de 7 velocidades suave y rápido",
      "Asientos VarioFlex opcionales para máxima modularidad",
      "Relación equipamiento-precio superior a sus primos de VW"
    ],
    tipo: "Diésel",
    traccion: "Delantera",
    velocidadMax: 208,
    videoCanal: null,
    videoId: null
  },
  {
    altoMm: 1552,
    analisisSlug: null,
    anchoMm: 1780,
    aprox: [],
    autonomiaKm: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    categoria: "SUV",
    ceroCien: 10.0,
    consumo: 5.3,
    consumoUnidad: "l/100 km",
    contras: [
      "Prestaciones modestas: 10 s de 0-100 km/h",
      "Plásticos duros en el interior pese al acabado FR",
      "Sin opción de cambio automático en esta versión manual",
      "Etiqueta C, sin hibridación disponible",
      "Plazas traseras justas para adultos altos"
    ],
    emisionesCo2: 121,
    etiquetaDgt: "C",
    euroncap: {
      ano: null,
      estrellas: null,
      nota: "Sin datos EuroNCAP verificados en esta investigación",
      url: null
    },
    fuenteNombre: "km77",
    fuenteUrl: null,
    galeria: [
      {
        alt: "SEAT Arona FR 1.0 TSI 115, vista exterior",
        alto: 244,
        ancho: 390,
        src: "/media/seat-arona-fr-10-tsi-115-2026-precio-ficha-tecnica-oficial.webp"
      },
      {
        alt: "Interior del SEAT Arona FR, salpicadero",
        alto: 947,
        ancho: 1600,
        src: "/media/seat-arona-fr-10-tsi-115-2026-precio-ficha-tecnica-interior-oficial.webp"
      },
      { src: "/media/seat-arona-fr-10-tsi-115-2026-precio-ficha-tecnica-hunt1.webp", alt: "Arona FR 1.0 TSI 115 (foto: Wheels Alive (ensayo del SEAT Arona FR Black Edition 1.0 TSI 115), licencia desconocida)", ancho: 1400, alto: 1028 },
      { src: "/media/seat-arona-fr-10-tsi-115-2026-precio-ficha-tecnica-hunt2.webp", alt: "Arona FR 1.0 TSI 115 (foto: Wheels Alive (ensayo del SEAT Arona FR Black Edition 1.0 TSI 115), licencia desconocida)", ancho: 1400, alto: 1127 },
      { src: "/media/seat-arona-fr-10-tsi-115-2026-precio-ficha-tecnica-hunt3.webp", alt: "Arona FR 1.0 TSI 115 (foto: Wheels Alive (ensayo del SEAT Arona FR Black Edition 1.0 TSI 115), licencia desconocida)", ancho: 1400, alto: 867 },
    ],
    garantiaBateriaAnos: null,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: null,
    id: "seat-arona-fr-10-tsi-115-2026-precio-ficha-tecnica",
    imagen: "/media/seat-arona-fr-10-tsi-115-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/seat-arona-fr-10-tsi-115-2026-precio-ficha-tecnica-interior-oficial.webp",
    imagenOficial: "/media/seat-arona-fr-10-tsi-115-2026-precio-ficha-tecnica-oficial.webp",
    largoMm: 4138,
    maleteroL: 400,
    marca: "SEAT",
    modelo: "Arona FR 1.0 TSI 115",
    parNm: 200,
    pesoKg: 1213,
    planMantenimiento: null,
    plazas: 5,
    potenciaCv: 116,
    precioDesde: 28250,
    pros: [
      "Acabado FR con estética deportiva y detalles en rojo sin sobreprecio excesivo",
      "Peso contenido de 1.213 kg que favorece agilidad y consumos",
      "Motor 1.0 TSI de 116 CV con 200 Nm, suficiente para el día a día",
      "Maletero de 400 litros con doble fondo práctico",
      "Cambio manual de 6 velocidades preciso y agradable"
    ],
    tipo: "Gasolina",
    traccion: "Delantera",
    velocidadMax: 193,
    videoCanal: null,
    videoId: null
  },
  {
    altoMm: 1438,
    analisisSlug: null,
    anchoMm: 1799,
    aprox: [],
    autonomiaKm: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    categoria: "Familiar",
    ceroCien: 9.2,
    consumo: 5.9,
    consumoUnidad: "l/100 km",
    contras: [
      "Precio de 36.872 € elevado para un compacto familiar",
      "Suspensión firme que puede resultar incómoda en ciudad",
      "Visibilidad trasera limitada por la caída del portón",
      "Etiqueta C sin opción electrificada en esta versión",
      "Costes de mantenimiento superiores a un SEAT León equivalente"
    ],
    emisionesCo2: 133,
    etiquetaDgt: "C",
    euroncap: {
      ano: null,
      estrellas: null,
      nota: "Sin datos EuroNCAP verificados en esta investigación",
      url: null
    },
    fuenteNombre: "motorgiga",
    fuenteUrl: null,
    galeria: [
      {
        alt: "Cupra León Sportstourer 1.5 TSI 150, vista exterior",
        alto: 244,
        ancho: 390,
        src: "/media/cupra-leon-sportstourer-15-tsi-150-2026-precio-ficha-tecnica-oficial.webp"
      },
      {
        alt: "Interior del Cupra León Sportstourer, asientos deportivos",
        alto: 1071,
        ancho: 1600,
        src: "/media/cupra-leon-sportstourer-15-tsi-150-2026-precio-ficha-tecnica-interior-oficial.webp"
      },
      { src: "/media/cupra-leon-sportstourer-15-tsi-150-2026-precio-ficha-tecnica-hunt1.webp", alt: "León Sportstourer 1.5 TSI 150 (foto: Cupra (CGI oficial del fabricante) vía Autohaus Habinghorst, oferta León Sportstourer 1.5 TSI, licencia desconocida)", ancho: 1920, alto: 1440 },
      { src: "/media/cupra-leon-sportstourer-15-tsi-150-2026-precio-ficha-tecnica-hunt2.webp", alt: "León Sportstourer 1.5 TSI 150 (foto: Foto real de anuncio Mobile.de: Cupra León Sportstourer 1.5 TSI (Friedberg), licencia desconocida)", ancho: 1200, alto: 900 },
      { src: "/media/cupra-leon-sportstourer-15-tsi-150-2026-precio-ficha-tecnica-hunt3.webp", alt: "León Sportstourer 1.5 TSI 150 (foto: Cupra (prensa oficial) vía PlanetCarsZ, licencia desconocida)", ancho: 1280, alto: 925 },
    ],
    garantiaBateriaAnos: null,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: null,
    id: "cupra-leon-sportstourer-15-tsi-150-2026-precio-ficha-tecnica",
    imagen: "/media/cupra-leon-sportstourer-15-tsi-150-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/cupra-leon-sportstourer-15-tsi-150-2026-precio-ficha-tecnica-interior-oficial.webp",
    imagenOficial: "/media/cupra-leon-sportstourer-15-tsi-150-2026-precio-ficha-tecnica-oficial.webp",
    largoMm: 4657,
    maleteroL: 620,
    marca: "Cupra",
    modelo: "León Sportstourer 1.5 TSI 150",
    parNm: 250,
    pesoKg: 1419,
    planMantenimiento: null,
    plazas: 5,
    potenciaCv: 150,
    precioDesde: 36872,
    pros: [
      "Maletero de 620 litros, el más grande de su categoría",
      "Diseño Cupra agresivo con detalles en cobre que lo distinguen",
      "Motor 1.5 TSI de 150 CV con desconexión de cilindros para ahorrar",
      "Comportamiento dinámico superior a la media de familiares",
      "Asientos deportivos de serie con buena sujeción"
    ],
    tipo: "Gasolina",
    traccion: "Delantera",
    velocidadMax: 216,
    videoCanal: null,
    videoId: null
  },
  {
    altoMm: 1459,
    analisisSlug: null,
    anchoMm: 1780,
    aprox: [],
    autonomiaKm: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    categoria: "Urbano",
    ceroCien: 10.7,
    consumo: 4.9,
    consumoUnidad: "l/100 km",
    contras: [
      "Motor de 95 CV con prestaciones justas (10,7 s de 0-100)",
      "Cambio manual de 5 velocidades, sin opción automática",
      "Equipamiento Selection básico, sin pantalla grande",
      "Insonorización mejorable a velocidad de autopista",
      "Etiqueta C, sin versión híbrida o ECO"
    ],
    emisionesCo2: 112,
    etiquetaDgt: "C",
    euroncap: {
      ano: null,
      estrellas: null,
      nota: "Sin datos EuroNCAP verificados en esta investigación",
      url: null
    },
    fuenteNombre: "motorgiga",
    fuenteUrl: null,
    galeria: [
      {
        alt: "Skoda Fabia Selection 1.0 TSI 95, vista exterior",
        alto: 276,
        ancho: 600,
        src: "/media/skoda-fabia-10-tsi-95-2026-precio-ficha-tecnica-oficial.webp"
      },
      {
        alt: "Interior del Skoda Fabia, salpicadero",
        alto: 785,
        ancho: 1088,
        src: "/media/skoda-fabia-10-tsi-95-2026-precio-ficha-tecnica-interior-oficial.webp"
      },
      { src: "/media/skoda-fabia-10-tsi-95-2026-precio-ficha-tecnica-hunt1.webp", alt: "Fabia Selection 1.0 TSI 95 (foto: CarExpert, licencia desconocida)", ancho: 1600, alto: 1067 },
      { src: "/media/skoda-fabia-10-tsi-95-2026-precio-ficha-tecnica-hunt2.webp", alt: "Fabia Selection 1.0 TSI 95 (foto: CarExpert, licencia desconocida)", ancho: 1600, alto: 1067 },
      { src: "/media/skoda-fabia-10-tsi-95-2026-precio-ficha-tecnica-hunt3.webp", alt: "Fabia Selection 1.0 TSI 95 (foto: CarExpert, licencia desconocida)", ancho: 1600, alto: 1067 },
    ],
    garantiaBateriaAnos: null,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: null,
    id: "skoda-fabia-10-tsi-95-2026-precio-ficha-tecnica",
    imagen: "/media/skoda-fabia-10-tsi-95-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/skoda-fabia-10-tsi-95-2026-precio-ficha-tecnica-interior-oficial.webp",
    imagenOficial: "/media/skoda-fabia-10-tsi-95-2026-precio-ficha-tecnica-oficial.webp",
    largoMm: 4108,
    maleteroL: 380,
    marca: "Skoda",
    modelo: "Fabia Selection 1.0 TSI 95",
    parNm: 175,
    pesoKg: 1159,
    planMantenimiento: null,
    plazas: 5,
    potenciaCv: 95,
    precioDesde: 22590,
    pros: [
      "Precio de acceso de 22.590 €, de los más asequibles del segmento",
      "Consumo de solo 4,9 l/100 km, ideal para uso urbano",
      "Maletero de 380 litros, grande para un utilitario",
      "Interior espacioso con buena habitabilidad trasera",
      "Dirección ligera y radio de giro corto, perfecta para ciudad"
    ],
    tipo: "Gasolina",
    traccion: "Delantera",
    velocidadMax: 190,
    videoCanal: null,
    videoId: null
  },
  {
    altoMm: 1625,
    analisisSlug: null,
    anchoMm: 1900,
    aprox: [],
    autonomiaKm: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    categoria: "SUV",
    ceroCien: 7.4,
    consumo: 5.9,
    consumoUnidad: "l/100 km",
    contras: [
      "Precio de 66.700 €, en la parte alta del segmento",
      "Peso de 2.030 kg que se nota en conducción dinámica",
      "Costes de mantenimiento y repuestos premium",
      "Consumo real superior a los 5,9 l/100 km homologados",
      "Sistema mild-hybrid con aporte eléctrico muy limitado"
    ],
    emisionesCo2: 155,
    etiquetaDgt: "ECO",
    euroncap: {
      ano: null,
      estrellas: null,
      nota: "Sin datos EuroNCAP verificados en esta investigación",
      url: null
    },
    fuenteNombre: "km77",
    fuenteUrl: null,
    galeria: [
      {
        alt: "Audi Q5 2.0 TDI quattro, vista exterior lateral",
        alto: 900,
        ancho: 1600,
        src: "/media/audi-q5-20-tdi-2026-precio-ficha-tecnica-oficial.webp"
      },
      {
        alt: "Interior del Audi Q5, salpicadero digital",
        alto: 900,
        ancho: 1500,
        src: "/media/audi-q5-20-tdi-2026-precio-ficha-tecnica-interior-oficial.webp"
      },
      { src: "/media/audi-q5-20-tdi-2026-precio-ficha-tecnica-hunt1.webp", alt: "Q5 Advanced 2.0 TDI 204 quattro S tronic (foto: CompleteCar.ie / Audi (foto de prensa del Q5 TDI, matrícula IN Q 5311), licencia desconocida)", ancho: 1500, alto: 1000 },
      { src: "/media/audi-q5-20-tdi-2026-precio-ficha-tecnica-hunt2.webp", alt: "Q5 Advanced 2.0 TDI 204 quattro S tronic (foto: CompleteCar.ie / Audi (foto de prensa del Q5 TDI, matrícula IN Q 5311), licencia desconocida)", ancho: 1500, alto: 1000 },
      { src: "/media/audi-q5-20-tdi-2026-precio-ficha-tecnica-hunt3.webp", alt: "Q5 Advanced 2.0 TDI 204 quattro S tronic (foto: CompleteCar.ie / Audi (foto del Q5 TDI de la prueba), licencia desconocida)", ancho: 1500, alto: 1000 },
    ],
    garantiaBateriaAnos: null,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: null,
    id: "audi-q5-20-tdi-2026-precio-ficha-tecnica",
    imagen: "/media/audi-q5-20-tdi-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/audi-q5-20-tdi-2026-precio-ficha-tecnica-interior-oficial.webp",
    imagenOficial: "/media/audi-q5-20-tdi-2026-precio-ficha-tecnica-oficial.webp",
    largoMm: 4717,
    maleteroL: 520,
    marca: "Audi",
    modelo: "Q5 Advanced 2.0 TDI 204 quattro S tronic",
    parNm: 400,
    pesoKg: 2030,
    planMantenimiento: null,
    plazas: 5,
    potenciaCv: 204,
    precioDesde: 66700,
    pros: [
      "Etiqueta ECO gracias al sistema mild-hybrid de 48V",
      "Tracción quattro con reparto inteligente del par",
      "Motor 2.0 TDI de 204 CV con 400 Nm, excelente para viajar",
      "Interior premium con materiales de alta calidad",
      "Maletero de 520 litros con portón eléctrico de serie"
    ],
    tipo: "Híbrido ligero",
    traccion: "Total",
    velocidadMax: 226,
    videoCanal: null,
    videoId: null
  },
  {
    altoMm: 1520,
    analisisSlug: null,
    anchoMm: 1840,
    aprox: [
      "emisionesCo2"
    ],
    autonomiaKm: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    categoria: "SUV",
    ceroCien: 8.1,
    consumo: 5.0,
    consumoUnidad: "l/100 km",
    contras: [
      "Maletero de 315 litros por debajo de rivales como el Toyota RAV4",
      "Precio desde 41.750 € superior a alternativas generalistas híbridas",
      "Plazas traseras justas para adultos altos en viajes largos",
      "Sistema multimedia menos intuitivo que el de competidores alemanes",
      "Par motor combinado no publicado por la marca"
    ],
    emisionesCo2: 113,
    etiquetaDgt: "ECO",
    euroncap: {
      ano: 2019,
      estrellas: 5,
      nota: "5 estrellas EuroNCAP 2019: 96% ocupante adulto, 85% infantil, 82% peatón, 77% asistencias",
      url: "https://www.euroncap.com/es/results/lexus/ux/35875"
    },
    fuenteNombre: "prensa.lexusauto.es / km77.com",
    fuenteUrl: "https://prensa.lexusauto.es/",
    galeria: [
      {
        alt: "Lexus UX 300h 2026 vista exterior lateral",
        alto: 986,
        ancho: 1600,
        src: "/media/lexus-ux-300h-2026-precio-ficha-tecnica-oficial.webp"
      },
      {
        alt: "Interior del Lexus UX 300h 2026 con salpicadero y pantalla",
        alto: 1066,
        ancho: 1600,
        src: "/media/lexus-ux-300h-2026-precio-ficha-tecnica-interior-oficial.webp"
      },
      { src: "/media/lexus-ux-300h-2026-precio-ficha-tecnica-hunt1.webp", alt: "Revisión anual (foto: Lexus (pressroom oficial USA), licencia desconocida)", ancho: 1024, alto: 594 },
      { src: "/media/lexus-ux-300h-2026-precio-ficha-tecnica-hunt2.webp", alt: "Revisión anual (foto: Autocar, licencia desconocida)", ancho: 1599, alto: 1066 },
      { src: "/media/lexus-ux-300h-2026-precio-ficha-tecnica-hunt3.webp", alt: "Revisión anual (foto: Wheelz.me / Lexus (prensa), licencia desconocida)", ancho: 1500, alto: 865 },
    ],
    garantiaBateriaAnos: null,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: null,
    id: "lexus-ux-300h-2026-precio-ficha-tecnica",
    imagen: "/media/lexus-ux-300h-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/lexus-ux-300h-2026-precio-ficha-tecnica-interior-oficial.webp",
    imagenOficial: "/media/lexus-ux-300h-2026-precio-ficha-tecnica-oficial.webp",
    largoMm: 4495,
    maleteroL: 315,
    marca: "Lexus",
    modelo: "UX 300h",
    parNm: null,
    pesoKg: 1575,
    planMantenimiento: {
      fuente: "Lexus España: intervalo oficial 15.000 km o 1 año; costes no publicados por la marca",
      intervalo: "Cada 15.000 km o 1 año",
      revisiones: [
        {
          costeAproxEur: null,
          nombre: "Revisión anual",
          queSeCambia: "Aceite, filtro aceite, inspección general"
        }
      ]
    },
    plazas: 5,
    potenciaCv: 199,
    precioDesde: 41750,
    pros: [
      "Sistema híbrido de 199 CV con consumo real contenido de 5,0 l/100 km",
      "Etiqueta ECO de la DGT con acceso a Zonas de Bajas Emisiones",
      "Calidad de acabados premium típica de Lexus con materiales cuidados",
      "Programa Lexus Relax: garantía extendible hasta 15 años con mantenimiento oficial",
      "Maletero de 315 litros suficiente para el uso diario urbano"
    ],
    tipo: "Híbrido",
    traccion: "Delantera",
    velocidadMax: 177,
    videoCanal: "Loading Cars",
    videoId: "qZSnZCwy4_M"
  },
  {
    altoMm: 1580,
    analisisSlug: null,
    anchoMm: 1825,
    aprox: [
      "autonomiaKm"
    ],
    autonomiaKm: 508,
    bateriaKwh: 65.4,
    cargaRapidaKw: 100,
    categoria: "SUV",
    ceroCien: 8.1,
    consumo: 16.8,
    consumoUnidad: "kWh/100 km",
    contras: [
      "EuroNCAP 2023: solo 4 estrellas para la segunda generación del Kona",
      "Precio desde 42.450 € elevado frente a rivales chinos eléctricos",
      "En EE.UU. se pausa la venta del Kona EV 2026 por estrategia de gama",
      "Peso de 1.773 kg penaliza agilidad en carreteras reviradas",
      "Autonomía real en autopista inferior a los 508 km WLTP anunciados"
    ],
    emisionesCo2: 0,
    etiquetaDgt: "Cero",
    euroncap: {
      ano: 2023,
      estrellas: 4,
      nota: "4 estrellas EuroNCAP 2023 para la segunda generación (80% adulto, 83% infantil); la marca no publica URL directa del informe",
      url: null
    },
    fuenteNombre: "hyundai.news / carnovo.com / motorgiga.com",
    fuenteUrl: "https://www.hyundai.news/eu/models/suv/kona/press-kit.html",
    galeria: [
      {
        alt: "Hyundai Kona Eléctrico 2026 vista exterior",
        alto: 666,
        ancho: 1600,
        src: "/media/hyundai-kona-electrico-65-kwh-2026-precio-ficha-tecnica-oficial.webp"
      },
      {
        alt: "Interior del Hyundai Kona Eléctrico 2026 con doble pantalla de 12,3 pulgadas",
        alto: 1066,
        ancho: 1600,
        src: "/media/hyundai-kona-electrico-65-kwh-2026-precio-ficha-tecnica-interior-oficial.webp"
      },
      { src: "/media/hyundai-kona-electrico-65-kwh-2026-precio-ficha-tecnica-hunt1.webp", alt: "Revisión anual (foto: Carwow España (foto real de prueba, matrícula española 7873 MKT), licencia desconocida)", ancho: 3200, alto: 1800 },
      { src: "/media/hyundai-kona-electrico-65-kwh-2026-precio-ficha-tecnica-hunt2.webp", alt: "Revisión anual (foto: Hyundai Motor (foto oficial de prensa del Kona Electric; el cuadro muestra 490 km de autonomía), licencia desconocida)", ancho: 1500, alto: 1021 },
      { src: "/media/hyundai-kona-electrico-65-kwh-2026-precio-ficha-tecnica-hunt3.webp", alt: "Revisión anual (foto: Hyundai Motor (foto oficial de presentación del Kona Electric), licencia desconocida)", ancho: 1920, alto: 1200 },
    ],
    garantiaBateriaAnos: 8,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: 160000,
    id: "hyundai-kona-electrico-65-kwh-2026-precio-ficha-tecnica",
    imagen: "/media/hyundai-kona-electrico-65-kwh-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/hyundai-kona-electrico-65-kwh-2026-precio-ficha-tecnica-interior-oficial.webp",
    imagenOficial: "/media/hyundai-kona-electrico-65-kwh-2026-precio-ficha-tecnica-oficial.webp",
    largoMm: 4355,
    maleteroL: 466,
    marca: "Hyundai",
    modelo: "Kona Eléctrico 65 kWh",
    parNm: 255,
    pesoKg: 1773,
    planMantenimiento: {
      fuente: "hyundai.com/es: intervalo oficial cada año o 15.000 km; costes no publicados",
      intervalo: "Cada 1 año o 15.000 km",
      revisiones: [
        {
          costeAproxEur: null,
          nombre: "Revisión anual",
          queSeCambia: "Inspección general, filtro habitáculo, líquido frenos según plan"
        }
      ]
    },
    plazas: 5,
    potenciaCv: 204,
    precioDesde: 42450,
    pros: [
      "Autonomía WLTP de hasta 508 km con batería de 65,4 kWh útiles",
      "Carga rápida DC de 100 kW y carga AC trifásica de 11 kW",
      "Maletero de 466 litros más 27 litros de frunk delantero",
      "Etiqueta Cero con acceso total a ZBE y aparcamiento bonificado",
      "Garantía de batería de 8 años o 160.000 km oficial Hyundai"
    ],
    tipo: "Eléctrico",
    traccion: "Delantera",
    velocidadMax: 172,
    videoCanal: null,
    videoId: null
  },
  {
    altoMm: 1500,
    analisisSlug: null,
    anchoMm: 1745,
    aprox: [
      "emisionesCo2",
      "consumo"
    ],
    autonomiaKm: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    categoria: "Urbano",
    ceroCien: 9.2,
    consumo: 4.2,
    consumoUnidad: "l/100 km",
    contras: [
      "Maletero de 286 litros justo para familias con carrito de bebé",
      "Plazas traseras estrechas para tres adultos",
      "Prestaciones modestas: 9,2 s de 0 a 100 km/h",
      "Acabados interiores con plásticos duros en zonas visibles",
      "Depósito de 36 litros limita la autonomía en viajes largos"
    ],
    emisionesCo2: 96,
    etiquetaDgt: "ECO",
    euroncap: {
      ano: 2020,
      estrellas: 5,
      nota: "5 estrellas EuroNCAP 2020 para la cuarta generación del Yaris; la marca no publica URL directa del informe",
      url: null
    },
    fuenteNombre: "prensa.toyota.es / km77.com",
    fuenteUrl: "https://prensa.toyota.es/",
    galeria: [
      {
        alt: "Toyota Yaris Hybrid 130 2026 vista exterior",
        alto: 899,
        ancho: 1600,
        src: "/media/toyota-yaris-130h-2026-precio-ficha-tecnica-oficial.webp"
      },
      {
        alt: "Interior del Toyota Yaris 2026 con salpicadero",
        alto: 1200,
        ancho: 1600,
        src: "/media/toyota-yaris-130h-2026-precio-ficha-tecnica-interior-oficial.webp"
      },
      { src: "/media/toyota-yaris-130h-2026-precio-ficha-tecnica-hunt1.webp", alt: "Revisión anual (foto: Toyota (prensa oficial, vía CarExpert), licencia desconocida)", ancho: 1200, alto: 800 },
      { src: "/media/toyota-yaris-130h-2026-precio-ficha-tecnica-hunt2.webp", alt: "Revisión anual (foto: Toyota Europe Newsroom (prensa oficial Toyota), licencia desconocida)", ancho: 1600, alto: 1200 },
      { src: "/media/toyota-yaris-130h-2026-precio-ficha-tecnica-hunt3.webp", alt: "Revisión anual (foto: Autotijd (ensayo Toyota Yaris Hybrid 130 2025), licencia desconocida)", ancho: 1200, alto: 800 },
    ],
    garantiaBateriaAnos: null,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: null,
    id: "toyota-yaris-130h-2026-precio-ficha-tecnica",
    imagen: "/media/toyota-yaris-130h-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/toyota-yaris-130h-2026-precio-ficha-tecnica-interior-oficial.webp",
    imagenOficial: "/media/toyota-yaris-130h-2026-precio-ficha-tecnica-oficial.webp",
    largoMm: 3940,
    maleteroL: 286,
    marca: "Toyota",
    modelo: "Yaris 130H",
    parNm: 185,
    pesoKg: 1265,
    planMantenimiento: {
      fuente: "Toyota España: intervalo oficial 15.000 km o 1 año; costes no publicados",
      intervalo: "Cada 15.000 km o 1 año",
      revisiones: [
        {
          costeAproxEur: null,
          nombre: "Revisión anual",
          queSeCambia: "Aceite, filtro aceite, inspección híbrida"
        }
      ]
    },
    plazas: 5,
    potenciaCv: 130,
    precioDesde: 24500,
    pros: [
      "Híbrido de 130 CV con consumo homologado de solo 4,2 l/100 km",
      "Etiqueta ECO ideal para circular por el centro de Madrid y Barcelona",
      "Tamaño compacto de 3,94 m perfecto para aparcar en ciudad",
      "Fiabilidad legendaria del sistema híbrido Toyota e-CVT",
      "Precio desde 24.500 € competitivo en el segmento híbrido urbano"
    ],
    tipo: "Híbrido",
    traccion: "Delantera",
    velocidadMax: 175,
    videoCanal: null,
    videoId: null
  },
  {
    altoMm: 1560,
    analisisSlug: null,
    anchoMm: 1820,
    aprox: [
      "pesoKg"
    ],
    autonomiaKm: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    categoria: "SUV",
    ceroCien: null,
    consumo: 4.7,
    consumoUnidad: "l/100 km",
    contras: [
      "Maletero no publicado y habitabilidad trasera justa",
      "Prestaciones modestas para un premium: 0-100 no oficial",
      "Precio de versiones altas (47.000 €) cerca del UX mayor",
      "Motor 1.5 de 3 cilindros con sonoridad mejorable a alta carga",
      "Sin opción de tracción total en la gama 2026 española"
    ],
    emisionesCo2: 107,
    etiquetaDgt: "ECO",
    euroncap: {
      ano: 2024,
      estrellas: 5,
      nota: "5 estrellas EuroNCAP diciembre 2024: 82% adulto, 83% infantil, 79% peatón, 76% asistencias; URL del informe no publicada por la marca",
      url: null
    },
    fuenteNombre: "prensa.lexusauto.es",
    fuenteUrl: "https://prensa.lexusauto.es/lbx-2026-lexus-transforma-su-gama-con-un-enfoque-sencillo-y-elegante/",
    galeria: [
      {
        alt: "Lexus LBX 2026 vista exterior trasera en color rojo",
        alto: 1066,
        ancho: 1600,
        src: "/media/lexus-lbx-2026-precio-ficha-tecnica-oficial.webp"
      },
      {
        alt: "Interior del Lexus LBX 2026 Vibrant Edition",
        alto: 1066,
        ancho: 1600,
        src: "/media/lexus-lbx-2026-precio-ficha-tecnica-interior-oficial.webp"
      },
      { src: "/media/lexus-lbx-2026-precio-ficha-tecnica-hunt1.webp", alt: "Revisión anual (foto: Lexus (foto de prensa, vía GoAuto), licencia desconocida)", ancho: 1024, alto: 768 },
      { src: "/media/lexus-lbx-2026-precio-ficha-tecnica-hunt2.webp", alt: "Revisión anual (foto: Lexus (foto de prensa, vía MotorDream), licencia desconocida)", ancho: 1600, alto: 1062 },
      { src: "/media/lexus-lbx-2026-precio-ficha-tecnica-hunt3.webp", alt: "Revisión anual (foto: Carsales Australia (interior Lexus LBX Sports Luxury), licencia desconocida)", ancho: 1023, alto: 682 },
    ],
    garantiaBateriaAnos: null,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: null,
    id: "lexus-lbx-2026-precio-ficha-tecnica",
    imagen: "/media/lexus-lbx-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/lexus-lbx-2026-precio-ficha-tecnica-interior-oficial.webp",
    imagenOficial: "/media/lexus-lbx-2026-precio-ficha-tecnica-oficial.webp",
    largoMm: 4190,
    maleteroL: null,
    marca: "Lexus",
    modelo: "LBX",
    parNm: null,
    pesoKg: 1265,
    planMantenimiento: {
      fuente: "Lexus España: intervalo oficial 15.000 km o 1 año; costes no publicados",
      intervalo: "Cada 15.000 km o 1 año",
      revisiones: [
        {
          costeAproxEur: null,
          nombre: "Revisión anual",
          queSeCambia: "Aceite, filtro aceite, inspección general"
        }
      ]
    },
    plazas: 5,
    potenciaCv: 136,
    precioDesde: 33900,
    pros: [
      "El Lexus más accesible desde 33.900 € con calidad premium real",
      "Híbrido de 136 CV con consumo de 4,7 l/100 km y etiqueta ECO",
      "5 estrellas EuroNCAP 2024 con 82% en protección de adultos",
      "Plataforma GA-B con comportamiento ágil en ciudad",
      "Gama 2026 simplificada en 7 estilos bien diferenciados"
    ],
    tipo: "Híbrido",
    traccion: "Delantera",
    velocidadMax: null,
    videoCanal: "Revista del Motor",
    videoId: "xriwvmJhBvM"
  },
  {
    altoMm: null,
    analisisSlug: null,
    anchoMm: null,
    aprox: [
      "ceroCien",
      "consumo",
      "emisionesCo2"
    ],
    autonomiaKm: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    categoria: "Compacto",
    ceroCien: 9.3,
    consumo: 4.6,
    consumoUnidad: "l/100 km",
    contras: [
      "Dimensiones y maletero del 5 puertas no publicados en la nota oficial",
      "Prestaciones discretas: 9,3 s de 0 a 100 km/h",
      "Octavo año de la generación actual sin cambio de plataforma",
      "Pantalla multimedia mejorable frente a rivales coreanos",
      "Versión 140H menos prestacional que la 200H disponible en Touring Sports"
    ],
    emisionesCo2: 104,
    etiquetaDgt: "ECO",
    galeria: [
      {
        alt: "Toyota Corolla 5 puertas 2026 60 Aniversario vista exterior",
        alto: 1600,
        ancho: 1600,
        src: "/media/toyota-corolla-5p-140h-2026-precio-ficha-tecnica-oficial.webp"
      },
      {
        alt: "Interior del Toyota Corolla 2026 con pantalla táctil",
        alto: 1189,
        ancho: 1600,
        src: "/media/toyota-corolla-5p-140h-2026-precio-ficha-tecnica-interior-oficial.webp"
      },
      { src: "/media/toyota-corolla-5p-140h-2026-precio-ficha-tecnica-hunt1.webp", alt: "Revisión anual (foto: Toyota / Kobe Motor (concesionario oficial Toyota), licencia desconocida)", ancho: 1884, alto: 852 },
      { src: "/media/toyota-corolla-5p-140h-2026-precio-ficha-tecnica-hunt2.webp", alt: "Revisión anual (foto: Toyota Ourense (Grupo Compostela), licencia desconocida)", ancho: 1440, alto: 1080 },
      { src: "/media/toyota-corolla-5p-140h-2026-precio-ficha-tecnica-hunt3.webp", alt: "Revisión anual (foto: Toyota (prensa) vía Actualidad Motor, licencia desconocida)", ancho: 1500, alto: 900 },
    ],
    garantiaBateriaAnos: null,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: null,
    id: "toyota-corolla-5p-140h-2026-precio-ficha-tecnica",
    imagen: "/media/toyota-corolla-5p-140h-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/toyota-corolla-5p-140h-2026-precio-ficha-tecnica-interior-oficial.webp",
    imagenOficial: "/media/toyota-corolla-5p-140h-2026-precio-ficha-tecnica-oficial.webp",
    largoMm: 4370,
    maleteroL: 361,
    marca: "Toyota",
    modelo: "Corolla 5p 140H",
    parNm: 185,
    pesoKg: 1420,
    planMantenimiento: {
      fuente: "Toyota España: intervalo oficial 15.000 km o 1 año; costes no publicados",
      intervalo: "Cada 15.000 km o 1 año",
      revisiones: [
        {
          costeAproxEur: null,
          nombre: "Revisión anual",
          queSeCambia: "Aceite, filtro aceite, inspección híbrida"
        }
      ]
    },
    euroncap: {
      ano: 2019,
      estrellas: 5,
      nota: "5 estrellas en la prueba Euro NCAP de 2019 (misma generación TNGA-C)",
      url: null
    },
    fuenteNombre: "Toyota España (prensa)",
    fuenteUrl: "https://prensa.toyota.es/download/3cef88a2-fe7c-4c07-9b61-222a9ea8ca2e/toyotacorolla-5-puertas-2025.pdf",
    plazas: 5,
    potenciaCv: 140,
    precioDesde: 25450,
    pros: [
      "Híbrido 140H de 140 CV con consumo de 4,6 l/100 km",
      "Edición 60 Aniversario con equipamiento exclusivo y color bitono",
      "Regreso del acabado Style con detector de ángulo muerto de serie",
      "Etiqueta ECO y fiabilidad probada del sistema híbrido Toyota",
      "Precio desde 25.450 € muy competitivo en el segmento C"
    ],
    tipo: "Híbrido",
    traccion: "Delantera",
    velocidadMax: 180,
    videoCanal: null,
    videoId: null
  },
  {
    altoMm: 1455,
    analisisSlug: null,
    anchoMm: 1795,
    aprox: [],
    autonomiaKm: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    categoria: "Compacto",
    ceroCien: 9.6,
    consumo: 5.9,
    consumoUnidad: "l/100 km",
    contras: [
      "Consumo de 5,9 l/100 km superior al de híbridos completos",
      "Cambio manual en versión base; automático encarece la gama",
      "Emisiones de 130 g/km en el límite alto para etiqueta ECO",
      "0-100 en 9,6 s discreto para 140 CV",
      "Diseño del i30 con varios años sin renovación profunda"
    ],
    emisionesCo2: 130,
    etiquetaDgt: "ECO",
    euroncap: {
      ano: null,
      estrellas: null,
      nota: "Sin datos EuroNCAP: modelo no probado",
      url: null
    },
    fuenteNombre: "hyundai.news / km77.com",
    fuenteUrl: "http://www.hyundai.news/eu/models/i-range/i30/press-kit.html",
    galeria: [
      {
        alt: "Hyundai i30 2026 vista exterior frontal",
        alto: 900,
        ancho: 1600,
        src: "/media/hyundai-i30-15-tgdi-2026-precio-ficha-tecnica-oficial.webp"
      },
      {
        alt: "Interior del Hyundai i30 N Line 2026",
        alto: 900,
        ancho: 1600,
        src: "/media/hyundai-i30-15-tgdi-2026-precio-ficha-tecnica-interior-oficial.webp"
      },
      { src: "/media/hyundai-i30-15-tgdi-2026-precio-ficha-tecnica-hunt1.webp", alt: "Revisión anual (foto: Hyundai Motor (prensa oficial, vía Moniteur Automobile), licencia desconocida)", ancho: 1200, alto: 800 },
      { src: "/media/hyundai-i30-15-tgdi-2026-precio-ficha-tecnica-hunt2.webp", alt: "Revisión anual (foto: Hyundai Motor (prensa oficial, vía AutoExpress), licencia desconocida)", ancho: 1260, alto: 710 },
      { src: "/media/hyundai-i30-15-tgdi-2026-precio-ficha-tecnica-hunt3.webp", alt: "Revisión anual (foto: Hyundai Motor (prensa oficial, vía Wheelz.me), licencia desconocida)", ancho: 1500, alto: 822 },
    ],
    garantiaBateriaAnos: null,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: null,
    id: "hyundai-i30-15-tgdi-2026-precio-ficha-tecnica",
    imagen: "/media/hyundai-i30-15-tgdi-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/hyundai-i30-15-tgdi-2026-precio-ficha-tecnica-interior-oficial.webp",
    imagenOficial: "/media/hyundai-i30-15-tgdi-2026-precio-ficha-tecnica-oficial.webp",
    largoMm: 4340,
    maleteroL: 395,
    marca: "Hyundai",
    modelo: "i30 1.5 TGDI",
    parNm: 253,
    pesoKg: 1355,
    planMantenimiento: {
      fuente: "hyundai.com/es: intervalo oficial cada año o 15.000 km; costes no publicados",
      intervalo: "Cada 1 año o 15.000 km",
      revisiones: [
        {
          costeAproxEur: null,
          nombre: "Revisión anual",
          queSeCambia: "Aceite, filtro aceite, inspección general"
        }
      ]
    },
    plazas: 5,
    potenciaCv: 140,
    precioDesde: 30550,
    pros: [
      "Motor 1.5 TGDI de 140 CV con hibridación ligera 48V y etiqueta ECO",
      "Velocidad máxima de 197 km/h destacable en el segmento",
      "Maletero de 395 litros correcto para un compacto",
      "Par de 253 Nm con buena respuesta a medio régimen",
      "Precio desde 30.550 € con equipamiento Klass completo"
    ],
    tipo: "Híbrido ligero",
    traccion: "Delantera",
    velocidadMax: 197,
    videoCanal: null,
    videoId: null
  },
  {
    altoMm: 1500,
    analisisSlug: null,
    anchoMm: 1775,
    aprox: [],
    autonomiaKm: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    categoria: "SUV",
    ceroCien: 11.3,
    consumo: 5.2,
    consumoUnidad: "l/100 km",
    contras: [
      "Motor 1.0 de 100 CV justo: 11,3 s de 0 a 100 km/h",
      "Solo tracción delantera sin opción 4x4",
      "Prestaciones limitadas en autopista con carga completa",
      "Acabados interiores sencillos en versión de acceso Klass",
      "Sin versión híbrida completa ni eléctrica en la gama"
    ],
    emisionesCo2: 119,
    etiquetaDgt: "ECO",
    euroncap: {
      ano: 2021,
      estrellas: 4,
      nota: "4 estrellas EuroNCAP 2021 para el Hyundai Bayon; URL del informe no publicada por la marca",
      url: null
    },
    fuenteNombre: "hyundai.news / km77.com",
    fuenteUrl: "https://www.hyundai.news/eu/models/suv/bayon/press-kit.html",
    galeria: [
      {
        alt: "Hyundai Bayon 2026 vista exterior frontal en azul",
        alto: 900,
        ancho: 1600,
        src: "/media/hyundai-bayon-10-tgdi-2026-precio-ficha-tecnica-oficial.webp"
      },
      {
        alt: "Interior del Hyundai Bayon 2026 con pantalla táctil",
        alto: 900,
        ancho: 1600,
        src: "/media/hyundai-bayon-10-tgdi-2026-precio-ficha-tecnica-interior-oficial.webp"
      },
      { src: "/media/hyundai-bayon-10-tgdi-2026-precio-ficha-tecnica-hunt1.webp", alt: "Revisión anual (foto: Alexander-93 / Wikimedia Commons, licencia desconocida (Wikimedia Commons; la página del archivo devolvió 403 al intentar verificar autor/licencia en esta sesión — el patrón habitual de este autor en Commons es CC BY-SA 4.0, confirmar antes de publicar))", ancho: 1280, alto: 680 },
      { src: "/media/hyundai-bayon-10-tgdi-2026-precio-ficha-tecnica-hunt2.webp", alt: "Revisión anual (foto: Alexander-93 / Wikimedia Commons, licencia desconocida (Wikimedia Commons; la página del archivo devolvió 403 al intentar verificar autor/licencia en esta sesión — el patrón habitual de este autor en Commons es CC BY-SA 4.0, confirmar antes de publicar))", ancho: 1280, alto: 697 },
      { src: "/media/hyundai-bayon-10-tgdi-2026-precio-ficha-tecnica-hunt3.webp", alt: "Revisión anual (foto: Hyundai Motor (prensa oficial, kit de prensa del Bayon 2024) vía WionDrive, licencia desconocida)", ancho: 1170, alto: 658 },
    ],
    garantiaBateriaAnos: null,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: null,
    id: "hyundai-bayon-10-tgdi-2026-precio-ficha-tecnica",
    imagen: "/media/hyundai-bayon-10-tgdi-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/hyundai-bayon-10-tgdi-2026-precio-ficha-tecnica-interior-oficial.webp",
    imagenOficial: "/media/hyundai-bayon-10-tgdi-2026-precio-ficha-tecnica-oficial.webp",
    largoMm: 4180,
    maleteroL: 411,
    marca: "Hyundai",
    modelo: "Bayon 1.0 TGDI",
    parNm: 172,
    pesoKg: 1195,
    planMantenimiento: {
      fuente: "hyundai.com/es: intervalo oficial cada año o 15.000 km; costes no publicados",
      intervalo: "Cada 1 año o 15.000 km",
      revisiones: [
        {
          costeAproxEur: null,
          nombre: "Revisión anual",
          queSeCambia: "Aceite, filtro aceite, inspección general"
        }
      ]
    },
    plazas: 5,
    potenciaCv: 100,
    precioDesde: 26005,
    pros: [
      "SUV urbano desde 26.005 € con etiqueta ECO por hibridación 48V",
      "Maletero de 411 litros líder entre los B-SUV urbanos",
      "Consumo contenido de 5,2 l/100 km en uso mixto",
      "Diseño renovado 2024 con firma luminosa delantera distintiva",
      "Peso ligero de 1.195 kg que favorece agilidad y consumos"
    ],
    tipo: "Híbrido ligero",
    traccion: "Delantera",
    velocidadMax: 179,
    videoCanal: null,
    videoId: null
  },
  {
    id: "bmw-i4-m60-xdrive-2025-precio-ficha-tecnica",
    marca: "BMW",
    modelo: "i4 M60 xDrive",
    tipo: "Eléctrico",
    categoria: "Berlina",
    precioDesde: 80550,
    potenciaCv: 601,
    autonomiaKm: 543,
    maleteroL: 470,
    ceroCien: 3.7,
    velocidadMax: 225,
    bateriaKwh: 83.9,
    cargaRapidaKw: 210,
    etiquetaDgt: "Cero",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: 70,
    largoMm: null,
    anchoMm: null,
    altoMm: null,
    pesoKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 5,
    parNm: 795,
    traccion: "Total",
    emisionesCo2: 0,
    aprox: [],
    pros: ["Suma 57 CV al M50 al que reemplaza: sus dos motores entregan 601 CV y 795 Nm, recortan el 0 a 100 hasta 3,7 segundos y dejan atrás incluso al M3 Competition de gasolina en aceleración pura.", "Homologa 543 km WLTP con la batería grande de 83,9 kWh: solo cede unos 70 km frente al eDrive40 de 340 CV, pese a moverse en cifras de deportivo serio.", "En un cargador rápido pasa del 10 al 80 % en unos 30 minutos y recupera del orden de 185 km en 10 minutos, así que viajar con él no exige planificar cada parada como una expedición.", "A diferencia del Tesla Model 3 Performance, su rival más directo, es un Gran Coupé de cinco puertas: el portón da acceso a 470 litros ampliables a 1.290 abatiendo los respaldos.", "La batería queda cubierta durante 8 años o 160.000 km con un mínimo garantizado del 70 % de capacidad, un respaldo relevante en un coche que costará mantener como lo que es: un M Performance."],
    contras: ["Parte de 80.550 euros, justo 15.000 euros por encima del i4 eDrive40 español: el salto al M60 se paga como un coche entero de acceso, y un Model 3 Performance ofrece prestaciones cercanas por bastante menos.", "En Euro NCAP se quedó en cuatro estrellas en 2022, con un 64 % en asistentes de seguridad: varios rivales generalistas lograron las cinco, y en un coche de este precio ese dato pesa.", "Mover 2.285 kg con conductor tiene coste dinámico: frena y gira con solvencia, pero en apoyos enlazados la masa manda y el consumo WLTP sube hasta 20,9 kWh/100 km en la configuración menos favorable.", "La segunda fila penaliza a los adultos altos: la caída coupé del techo roba altura libre y, sin maletero delantero donde guardar ni los cables, todo el equipaje compite por los mismos 470 litros traseros.", "Su pico de carga, 205 kW según la documentación del modelo, ya no marca la referencia: propuestas de 800 voltios como el nuevo Mercedes CLA eléctrico cargan bastante más rápido con baterías similares."],
    imagen: "/media/bmw-i4-m60-xdrive-2025-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/bmw-i4-m60-xdrive-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/bmw-i4-m60-xdrive-2025-precio-ficha-tecnica-interior-oficial.webp",
    analisisSlug: null,
    videoId: "BHr4mDo2Q2c",
    videoCanal: "Motormouth",
    galeria: [
      {
        src: "/media/bmw-i4-m60-xdrive-2025-precio-ficha-tecnica-oficial.webp",
        alt: "BMW i4 M60 xDrive 2025, vista exterior delantera tres cuartos",
        ancho: 1600,
        alto: 1067
      },
      {
        src: "/media/bmw-i4-m60-xdrive-2025-precio-ficha-tecnica-interior-oficial.webp",
        alt: "Interior del BMW i4 M60 xDrive 2025 con pantalla curva",
        ancho: 700,
        alto: 464
      },
      { src: "/media/bmw-i4-m60-xdrive-2025-precio-ficha-tecnica-hunt1.webp", alt: "Revisión bienal (foto: BMW Group (prensa) vía Carz Automedia Malaysia, licencia desconocida)", ancho: 1100, alto: 619 },
      { src: "/media/bmw-i4-m60-xdrive-2025-precio-ficha-tecnica-hunt2.webp", alt: "Revisión bienal (foto: BMW Group (prensa) vía Carz Automedia Malaysia, licencia desconocida)", ancho: 1100, alto: 619 },
      { src: "/media/bmw-i4-m60-xdrive-2025-precio-ficha-tecnica-hunt3.webp", alt: "Revisión bienal (foto: BMW Group (prensa) vía Carz Automedia Malaysia, licencia desconocida)", ancho: 1100, alto: 619 },
    ],
    euroncap: {
      estrellas: 4,
      ano: 2022,
      url: "https://www.euroncap.com/assessments/bmw/i4/0958/",
      nota: "Prueba realizada en 2022 sobre la generación actual del i4."
    },
    planMantenimiento: {
      intervalo: "Cada 2 años (vehículos eléctricos BMW)",
      revisiones: [
        {
          nombre: "Revisión bienal",
          queSeCambia: "Inspección general, microfiltro del habitáculo, control de la batería de alto voltaje y de los frenos",
          costeAproxEur: null
        },
        {
          nombre: "Líquido de frenos",
          queSeCambia: "Sustitución del líquido de frenos cada 2 años",
          costeAproxEur: null
        }
      ],
      fuente: "BMW España: intervalo oficial para eléctricos; la marca no publica precios de revisiones"
    },
    fuenteNombre: "BMW España",
    fuenteUrl: "https://www.bmw.es"
  },
  {
    id: "mercedes-cla-350-4matic-2025-precio-ficha-tecnica",
    marca: "Mercedes-Benz",
    modelo: "CLA 350 4MATIC",
    tipo: "Eléctrico",
    categoria: "Compacto",
    precioDesde: 59325,
    potenciaCv: 354,
    autonomiaKm: 769,
    maleteroL: 405,
    ceroCien: 4.9,
    velocidadMax: 210,
    bateriaKwh: 85,
    cargaRapidaKw: 320,
    etiquetaDgt: "Cero",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: 70,
    largoMm: 4723,
    anchoMm: null,
    altoMm: null,
    pesoKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 5,
    parNm: 515,
    traccion: "Total",
    emisionesCo2: 0,
    aprox: [],
    pros: [
      "Sus 769 km de autonomía WLTP son récord en el segmento de las berlinas eléctricas compactas.",
      "La arquitectura de 800 V con carga de hasta 320 kW recupera 300 km en 10 minutos.",
      "El Cx de 0,21 es uno de los mejores del mundo y clave de su eficiencia.",
      "El cambio de 2 velocidades en el eje trasero optimiza el consumo en autopista.",
      "El MBUX de nueva generación con IA de Google y Microsoft es de lo más avanzado del mercado.",
      "Con 354 CV y 4,9 s de 0 a 100, combina prestaciones con un consumo muy bajo."
    ],
    contras: [
      "El maletero de 405 litros es pequeño para una berlina de 4,72 m.",
      "Las plazas traseras son estrechas y con poco espacio para la cabeza.",
      "Muchos equipamientos (pantalla del acompañante, techo electrocrómico) son opcionales caros.",
      "La carga a 320 kW exige cargadores de última generación, aún escasos.",
      "El precio de 59.325 € lo aleja del comprador joven al que apunta su imagen.",
      "La mecánica con eje delantero desconectable añade complejidad al sistema."
    ],
    imagen: "/media/mercedes-cla-350-4matic-2025-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/mercedes-cla-350-4matic-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/mercedes-cla-350-4matic-2025-precio-ficha-tecnica-interior-oficial.webp",
    analisisSlug: null,
    videoId: "NFi84g4-HaU",
    videoCanal: "meinandersTV",
    galeria: [
      {
        src: "/media/mercedes-cla-350-4matic-2025-precio-ficha-tecnica-oficial.webp",
        alt: "Mercedes CLA 350 4MATIC 2025, vista exterior lateral",
        ancho: 1500,
        alto: 1000
      },
      {
        src: "/media/mercedes-cla-350-4matic-2025-precio-ficha-tecnica-interior-oficial.webp",
        alt: "Interior del Mercedes CLA 350 4MATIC 2025 con MBUX Superscreen",
        ancho: 1600,
        alto: 1066
      },
      { src: "/media/mercedes-cla-350-4matic-2025-precio-ficha-tecnica-hunt1.webp", alt: "Service A (foto: Mercedes-Benz (foto de prensa vía CompleteCar.ie), licencia desconocida)", ancho: 1500, alto: 1000 },
      { src: "/media/mercedes-cla-350-4matic-2025-precio-ficha-tecnica-hunt2.webp", alt: "Service A (foto: Mercedes-Benz (foto de prensa vía CompleteCar.ie), licencia desconocida)", ancho: 1500, alto: 1000 },
      { src: "/media/mercedes-cla-350-4matic-2025-precio-ficha-tecnica-hunt3.webp", alt: "Service A (foto: Mercedes-Benz (foto de prensa vía PassionAndCar), licencia desconocida)", ancho: 1200, alto: 799 },
    ],
    euroncap: {
      estrellas: 5,
      ano: 2025,
      url: "https://euroncap.blob.core.windows.net/media/94759/euroncap-2025-mercedes-benz-cla-datasheet.pdf",
      nota: "Mejor resultado de su categoría en 2025 (Best Performer)."
    },
    planMantenimiento: {
      intervalo: "Cada 15.000 km o 1 año (Service A y Service B alternos)",
      revisiones: [
        {
          nombre: "Service A",
          queSeCambia: "Inspección de seguridad, microfiltro del habitáculo y control de la batería de alto voltaje",
          costeAproxEur: null
        },
        {
          nombre: "Service B",
          queSeCambia: "Todo lo del Service A más líquido de frenos y revisión completa de sistemas eléctricos",
          costeAproxEur: null
        }
      ],
      fuente: "Mercedes-Benz España: intervalo oficial 15.000 km/1 año; precios de revisiones no publicados por la marca"
    },
    fuenteNombre: "Mercedes-Benz España",
    fuenteUrl: "https://www.mercedes-benz.es"
  },
  {
    id: "mini-countryman-c-2025-precio-ficha-tecnica",
    marca: "MINI",
    modelo: "Countryman C",
    tipo: "Híbrido ligero",
    categoria: "SUV",
    precioDesde: 36030,
    potenciaCv: 170,
    autonomiaKm: null,
    maleteroL: 450,
    ceroCien: 8.3,
    velocidadMax: 212,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "ECO",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    largoMm: 4447,
    anchoMm: 1843,
    altoMm: 1645,
    pesoKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 5,
    parNm: 280,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: [],
    pros: [
      "El motor 1.5 de 170 CV con microhibridación de 48 V le da la etiqueta ECO sin renunciar a la gasolina.",
      "Con 4.447 mm es el MINI más grande de la historia: el maletero crece hasta 450 litros.",
      "La pantalla circular OLED de 9,4 pulgadas con MINI OS 9 es única en el segmento.",
      "El interior abandona el cuero y el cromo por materiales textiles reciclados con buen tacto.",
      "Mantiene el tacto de conducción ágil típico de MINI pese a su mayor tamaño.",
      "Se fabrica sobre la plataforma del BMW X1, con calidad de rodadura premium."
    ],
    contras: [
      "Los 170 CV saben a poco para un SUV de este precio; el 0-100 se va a 8,3 s.",
      "Con llantas de 19 pulgadas el confort se resiente en firmes rotos.",
      "El sistema multimedia, aunque vistoso, puede ir con retardo en algunas funciones.",
      "Ha perdido parte del carácter juguetón de los MINI pequeños: es un SUV familiar más.",
      "Los acabados altos (Favoured) disparan el precio por encima de 45.000 €.",
      "La banqueta trasera, aunque amplia, no es deslizante en todas las versiones."
    ],
    imagen: "/media/mini-countryman-c-2025-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/mini-countryman-c-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/mini-countryman-c-2025-precio-ficha-tecnica-interior-oficial.webp",
    analisisSlug: null,
    videoId: "BIZtAYNbB7Q",
    videoCanal: "Marek Drives",
    galeria: [
      {
        src: "/media/mini-countryman-c-2025-precio-ficha-tecnica-oficial.webp",
        alt: "MINI Countryman C 2025, vista exterior delantera",
        ancho: 1200,
        alto: 800
      },
      {
        src: "/media/mini-countryman-c-2025-precio-ficha-tecnica-interior-oficial.webp",
        alt: "Interior del MINI Countryman C 2025 con pantalla circular OLED",
        ancho: 1600,
        alto: 900
      },
      { src: "/media/mini-countryman-c-2025-precio-ficha-tecnica-hunt1.webp", alt: "Cambio de aceite y filtro (foto: BMW Group PressClub / MINI, licencia desconocida)", ancho: 999, alto: 1499 },
      { src: "/media/mini-countryman-c-2025-precio-ficha-tecnica-hunt2.webp", alt: "Cambio de aceite y filtro (foto: BMW Group PressClub / MINI, licencia desconocida)", ancho: 999, alto: 1500 },
      { src: "/media/mini-countryman-c-2025-precio-ficha-tecnica-hunt3.webp", alt: "Cambio de aceite y filtro (foto: BMW Group PressClub / MINI, licencia desconocida)", ancho: 1000, alto: 1500 },
    ],
    euroncap: {
      estrellas: 5,
      ano: 2024,
      url: "https://www.euroncap.com/en/results/mini/countryman/53414",
      nota: "Prueba realizada en diciembre de 2024 sobre la generación U25."
    },
    planMantenimiento: {
      intervalo: "CBS (servicio basado en condición): orientativo cada 2 años o 25.000-30.000 km; el vehículo avisa en el cuadro",
      revisiones: [
        {
          nombre: "Cambio de aceite y filtro",
          queSeCambia: "Aceite de motor, filtro de aceite y microfiltro del habitáculo; inspección de niveles y frenos",
          costeAproxEur: null
        }
      ],
      fuente: "MINI España: intervalo CBS oficial; precios de revisiones no publicados por la marca"
    },
    fuenteNombre: "MINI España",
    fuenteUrl: "https://www.mini.es"
  },
  {
    id: "mini-countryman-d-2025-precio-ficha-tecnica",
    marca: "MINI",
    modelo: "Countryman D",
    tipo: "Diésel",
    categoria: "SUV",
    precioDesde: null, // Tarifa oficial solo en el configurador de mini.es; sin precio público de esta versión como texto indexado
    potenciaCv: 163,
    autonomiaKm: null,
    maleteroL: 450,
    ceroCien: 8.5,
    velocidadMax: 208,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "ECO",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    largoMm: 4447,
    anchoMm: 1843,
    altoMm: 1645,
    pesoKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 5,
    parNm: 360,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: [],
    pros: [
      "El diésel 2.0 de 163 CV con 48 V es la opción lógica para quien hace muchos kilómetros: bajo consumo en autopista.",
      "Sus 360 Nm de par dan una capacidad de recuperación excelente con el coche cargado.",
      "La etiqueta ECO del sistema mild-hybrid abre las puertas de las ZBE.",
      "Comparte plataforma, pantalla OLED y calidad interior con el resto de la gama U25.",
      "El depósito grande más el bajo consumo permiten autonomías reales superiores a 900 km.",
      "El cambio Steptronic de 7 velocidades de doble embrague es rápido y suave."
    ],
    contras: [
      "El diésel tiene los días contados en Europa y su valor residual es una incógnita.",
      "El 0-100 en 8,5 s no transmite sensaciones deportivas.",
      "A bajas vueltas se aprecia el traqueteo típico del diésel en un coche premium.",
      "El precio se acerca peligrosamente al del Countryman S de gasolina, más prestacional.",
      "El AdBlue añade un mantenimiento extra frente a las versiones de gasolina.",
      "La oferta de versiones diésel se reduce cada año y hay menos unidades en stock."
    ],
    imagen: "/media/mini-countryman-d-2025-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/mini-countryman-d-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/mini-countryman-d-2025-precio-ficha-tecnica-interior-oficial.webp",
    analisisSlug: null,
    videoId: null,
    videoCanal: null,
    galeria: [
      {
        src: "/media/mini-countryman-d-2025-precio-ficha-tecnica-oficial.webp",
        alt: "MINI Countryman D 2025, vista exterior lateral",
        ancho: 999,
        alto: 1500
      },
      {
        src: "/media/mini-countryman-d-2025-precio-ficha-tecnica-interior-oficial.webp",
        alt: "Interior del MINI Countryman D 2025, igual que la gama U25",
        ancho: 1600,
        alto: 900
      },
      { src: "/media/mini-countryman-d-2025-precio-ficha-tecnica-hunt1.webp", alt: "Cambio de aceite y filtro (foto: Michael Blumenstein / Auto Service Praxis (foto de prueba del Countryman D U25), licencia desconocida)", ancho: 1200, alto: 675 },
      { src: "/media/mini-countryman-d-2025-precio-ficha-tecnica-hunt2.webp", alt: "Cambio de aceite y filtro (foto: Michael Blumenstein / Auto Service Praxis (foto de prueba del Countryman D U25), licencia desconocida)", ancho: 1200, alto: 675 },
      { src: "/media/mini-countryman-d-2025-precio-ficha-tecnica-hunt3.webp", alt: "Cambio de aceite y filtro (foto: Michael Blumenstein / Auto Service Praxis (foto de prueba del Countryman D U25), licencia desconocida)", ancho: 1200, alto: 675 },
    ],
    euroncap: {
      estrellas: 5,
      ano: 2024,
      url: "https://www.euroncap.com/en/results/mini/countryman/53414",
      nota: "Prueba realizada en diciembre de 2024 sobre la generación U25."
    },
    planMantenimiento: {
      intervalo: "CBS (servicio basado en condición): orientativo cada 2 años o 25.000-30.000 km; el vehículo avisa en el cuadro",
      revisiones: [
        {
          nombre: "Cambio de aceite y filtro",
          queSeCambia: "Aceite de motor, filtro de aceite, filtro de combustible y microfiltro del habitáculo",
          costeAproxEur: null
        }
      ],
      fuente: "MINI España: intervalo CBS oficial; precios de revisiones no publicados por la marca"
    },
    fuenteNombre: "MINI España",
    fuenteUrl: "https://www.mini.es"
  },
  {
    id: "bmw-serie-1-m135-2025-precio-ficha-tecnica",
    marca: "BMW",
    modelo: "Serie 1 M135 xDrive",
    tipo: "Gasolina",
    categoria: "Compacto",
    precioDesde: 62850,
    potenciaCv: 300,
    autonomiaKm: null,
    maleteroL: 380,
    ceroCien: 4.9,
    velocidadMax: 250,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    largoMm: 4370,
    anchoMm: 1800,
    altoMm: 1450,
    pesoKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 5,
    parNm: 400,
    traccion: "Total",
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Los 300 CV y 400 Nm con tracción total xDrive lo convierten en el compacto deportivo más equilibrado de BMW.",
      "El nuevo cambio de doble embrague de 7 velocidades es más rápido que el antiguo convertidor de par.",
      "El diferencial Torsen delantero y el Launch Control permiten un 0-100 en 4,9 s.",
      "Los cuatro escapes reales y la parrilla de lamas horizontales le dan una imagen muy M.",
      "El maletero de 380 litros supera al del Golf R, su rival directo.",
      "En modo Comfort es un compacto refinado y apto para el día a día."
    ],
    contras: [
      "Ha perdido 50 Nm de par respecto al anterior M135i por las normas de emisiones.",
      "La suspensión M adaptativa resulta firme en exceso sobre asfalto roto.",
      "El sonido del motor en modo Sport es sintetizado por los altavoces.",
      "Las plazas traseras son justas para adultos en viajes largos.",
      "A 62.850 € compite con el Audi S3 y el Golf R, ambos con más tradición deportiva.",
      "Solo obtuvo 4 estrellas Euro NCAP en 2025, por debajo de lo esperado en un premium."
    ],
    imagen: "/media/bmw-serie-1-m135-2025-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/bmw-serie-1-m135-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/bmw-serie-1-m135-2025-precio-ficha-tecnica-interior-oficial.webp",
    analisisSlug: null,
    videoId: "EeWQgwV8Ufg",
    videoCanal: "carwow",
    galeria: [
      {
        src: "/media/bmw-serie-1-m135-2025-precio-ficha-tecnica-oficial.webp",
        alt: "BMW M135 xDrive 2025, vista trasera en carretera",
        ancho: 1600,
        alto: 1066
      },
      {
        src: "/media/bmw-serie-1-m135-2025-precio-ficha-tecnica-interior-oficial.webp",
        alt: "Interior del BMW M135 xDrive 2025, puesto de conducción",
        ancho: 1600,
        alto: 1066
      },
      { src: "/media/bmw-serie-1-m135-2025-precio-ficha-tecnica-hunt1.webp", alt: "Cambio de aceite y filtro (foto: BMW Group / Autocosmos, licencia desconocida)", ancho: 1024, alto: 576 },
      { src: "/media/bmw-serie-1-m135-2025-precio-ficha-tecnica-hunt2.webp", alt: "Cambio de aceite y filtro (foto: BMW Group / Autocosmos, licencia desconocida)", ancho: 1024, alto: 576 },
      { src: "/media/bmw-serie-1-m135-2025-precio-ficha-tecnica-hunt3.webp", alt: "Cambio de aceite y filtro (foto: BMW Group / Quatro Rodas, licencia desconocida)", ancho: 1170, alto: 706 },
    ],
    euroncap: {
      estrellas: 4,
      ano: 2025,
      url: "https://cdn.euroncap.com/media/89321/euroncap-2025-bmw-1-series-datasheet.pdf",
      nota: "Prueba de septiembre de 2025: 78/84/85/80 % en las cuatro áreas."
    },
    planMantenimiento: {
      intervalo: "CBS (servicio basado en condición): orientativo cada 2 años o 25.000-30.000 km; el vehículo avisa en el cuadro",
      revisiones: [
        {
          nombre: "Cambio de aceite y filtro",
          queSeCambia: "Aceite de motor, filtro de aceite y microfiltro del habitáculo; inspección visual de niveles y frenos",
          costeAproxEur: null
        },
        {
          nombre: "Inspección CBS",
          queSeCambia: "Revisión de puntos de control (frenos, neumáticos, líquidos, iluminación) según indicador del vehículo",
          costeAproxEur: null
        }
      ],
      fuente: "BMW España: intervalo CBS oficial; la marca no publica precios de revisiones"
    },
    fuenteNombre: "BMW España",
    fuenteUrl: "https://www.bmw.es"
  },
  {
    id: "bmw-x1-m35i-2025-precio-ficha-tecnica",
    marca: "BMW",
    modelo: "X1 M35i xDrive",
    tipo: "Gasolina",
    categoria: "SUV",
    precioDesde: 73750,
    potenciaCv: 300,
    autonomiaKm: null,
    maleteroL: 540,
    ceroCien: 5.4,
    velocidadMax: 250,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    largoMm: 4505,
    anchoMm: 1845,
    altoMm: 1622,
    pesoKg: 1740,
    consumo: 7.8,
    consumoUnidad: "l/100 km",
    plazas: 5,
    parNm: 400,
    traccion: "Total",
    emisionesCo2: 177,
    aprox: ["consumo", "emisionesCo2"],
    pros: [
      "Es el primer X1 con apellido M: 300 CV y chasis específico M con suspensión adaptativa.",
      "El maletero de 540 litros es de los más grandes entre los SUV compactos deportivos.",
      "El 0-100 en 5,4 s y los 250 km/h lo ponen a la altura de deportivos de hace una década.",
      "Los frenos M Compound y la dirección deportiva le dan un tacto muy directo.",
      "Mantiene la practicidad familiar: 5 plazas reales y portón eléctrico.",
      "El consumo homologado de 8,0-8,5 l/100 km es razonable para 300 CV."
    ],
    contras: [
      "En conducción real y exigente el consumo se dispara por encima de 12 l/100 km.",
      "La suspensión deportiva castiga el confort en ciudad.",
      "El precio ronda los 70.000 €, territorio del X3.",
      "El cambio de doble embrague puede resultar brusco a baja velocidad.",
      "No hay versión híbrida enchufable del M35i para quien busque etiqueta Cero.",
      "El X2 M35i ofrece la misma mecánica con una imagen más personal por precio similar."
    ],
    imagen: "/media/bmw-x1-m35i-2025-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/bmw-x1-m35i-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/bmw-x1-m35i-2025-precio-ficha-tecnica-interior-oficial.webp",
    analisisSlug: null,
    videoId: "xIbU5S-gqy4",
    videoCanal: "Joe Black",
    galeria: [
      {
        src: "/media/bmw-x1-m35i-2025-precio-ficha-tecnica-oficial.webp",
        alt: "BMW X1 M35i xDrive 2025, vista exterior delantera",
        ancho: 1600,
        alto: 900
      },
      {
        src: "/media/bmw-x1-m35i-2025-precio-ficha-tecnica-interior-oficial.webp",
        alt: "Interior del BMW X1 M35i xDrive 2025",
        ancho: 1600,
        alto: 900
      },
      { src: "/media/bmw-x1-m35i-2025-precio-ficha-tecnica-hunt1.webp", alt: "Cambio de aceite y filtro (foto: BMW AG (foto de prensa oficial del X1 M35i, Frozen Pure Grey) vía MotorTrend, licencia desconocida)", ancho: 1600, alto: 900 },
      { src: "/media/bmw-x1-m35i-2025-precio-ficha-tecnica-hunt2.webp", alt: "Cambio de aceite y filtro (foto: CarExpert (foto de prensa del BMW X1 M35i MY24, matrícula australiana V AY-173), licencia desconocida)", ancho: 1600, alto: 1067 },
      { src: "/media/bmw-x1-m35i-2025-precio-ficha-tecnica-hunt3.webp", alt: "Cambio de aceite y filtro (foto: BMW AG (foto de prensa oficial, código P90509804) vía CarExpert, licencia desconocida)", ancho: 1600, alto: 1067 },
    ],
    euroncap: {
      estrellas: 5,
      ano: 2022,
      url: null,
      nota: "Prueba Euro NCAP 5 estrellas (2022) sobre la generación U11; URL del resultado oficial no recuperada."
    },
    planMantenimiento: {
      intervalo: "CBS (servicio basado en condición): orientativo cada 2 años o 25.000-30.000 km; el vehículo avisa en el cuadro",
      revisiones: [
        {
          nombre: "Cambio de aceite y filtro",
          queSeCambia: "Aceite de motor, filtro de aceite y microfiltro del habitáculo; inspección visual de niveles y frenos",
          costeAproxEur: null
        },
        {
          nombre: "Inspección CBS",
          queSeCambia: "Revisión de puntos de control (frenos, neumáticos, líquidos, iluminación) según indicador del vehículo",
          costeAproxEur: null
        }
      ],
      fuente: "BMW España: intervalo CBS oficial; la marca no publica precios de revisiones"
    },
    fuenteNombre: "BMW España",
    fuenteUrl: "https://www.bmw.es/es/coches-bmw/m/x1-m35i/bmw-x1-m35i-xdrive.html"
  },
  {
    id: "bmw-x2-m35i-2025-precio-ficha-tecnica",
    marca: "BMW",
    modelo: "X2 M35i xDrive",
    tipo: "Gasolina",
    categoria: "SUV",
    precioDesde: 75250,
    potenciaCv: 300,
    autonomiaKm: null,
    maleteroL: 560,
    ceroCien: 5.4,
    velocidadMax: 250,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    largoMm: 4567,
    anchoMm: 1845,
    altoMm: 1575,
    pesoKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 5,
    parNm: 400,
    traccion: "Total",
    emisionesCo2: null,
    aprox: [],
    pros: [
      "La silueta de SUV coupé lo hace el más distintivo de la familia X, con 300 CV bajo el capó.",
      "El maletero de 560 litros es sorprendentemente grande para un coupé.",
      "Comparte motor, cambio y tracción total con el X1 M35i: 5,4 s de 0 a 100.",
      "La parrilla iluminada Iconic Glow le da presencia nocturna única.",
      "El puesto de conducción con pantalla curva es moderno y bien resuelto.",
      "A 75.250 € parte por debajo de rivales como el Mercedes GLA 35 AMG."
    ],
    contras: [
      "La caída del techo penaliza la habitabilidad trasera y la visibilidad.",
      "Es más caro que el X1 M35i con la misma mecánica.",
      "El diseño polariza: la zaga con el corte vertical no gusta a todo el mundo.",
      "El peso de 1.770 kg se nota en los apoyos fuertes.",
      "Las llantas de 21 pulgadas empeoran el confort y encarecen los neumáticos.",
      "El consumo real en uso deportivo supera con facilidad los 11 l/100 km."
    ],
    imagen: "/media/bmw-x2-m35i-2025-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/bmw-x2-m35i-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/bmw-x2-m35i-2025-precio-ficha-tecnica-interior-oficial.webp",
    analisisSlug: null,
    videoId: "dbBKYNrWht4",
    videoCanal: "CarVisualsTV",
    galeria: [
      {
        src: "/media/bmw-x2-m35i-2025-precio-ficha-tecnica-oficial.webp",
        alt: "BMW X2 M35i xDrive 2025, vista exterior lateral",
        ancho: 1600,
        alto: 1066
      },
      {
        src: "/media/bmw-x2-m35i-2025-precio-ficha-tecnica-interior-oficial.webp",
        alt: "Interior del BMW X2 M35i xDrive 2025",
        ancho: 1600,
        alto: 1067
      },
      { src: "/media/bmw-x2-m35i-2025-precio-ficha-tecnica-hunt1.webp", alt: "Cambio de aceite y filtro (foto: BMW Group PressClub, licencia desconocida)", ancho: 1600, alto: 1067 },
      { src: "/media/bmw-x2-m35i-2025-precio-ficha-tecnica-hunt2.webp", alt: "Cambio de aceite y filtro (foto: BMW Group PressClub, licencia desconocida)", ancho: 1600, alto: 1067 },
      { src: "/media/bmw-x2-m35i-2025-precio-ficha-tecnica-hunt3.webp", alt: "Cambio de aceite y filtro (foto: BMW Group / Actualidad Motor, licencia desconocida)", ancho: 1024, alto: 614 },
    ],
    euroncap: {
      estrellas: 5,
      ano: 2022,
      url: "https://news.euroncap.com/safercars/bmw-x2---euro-ncap-2022-results---5-stars/s/556dcb0b-9131-43c9-b08b-f2ffe422eb74",
      nota: "Resultado publicado el 09/07/2024 sobre la base del X1 (misma plataforma)."
    },
    planMantenimiento: {
      intervalo: "CBS (servicio basado en condición): orientativo cada 2 años o 25.000-30.000 km; el vehículo avisa en el cuadro",
      revisiones: [
        {
          nombre: "Cambio de aceite y filtro",
          queSeCambia: "Aceite de motor, filtro de aceite y microfiltro del habitáculo; inspección visual de niveles y frenos",
          costeAproxEur: null
        },
        {
          nombre: "Inspección CBS",
          queSeCambia: "Revisión de puntos de control (frenos, neumáticos, líquidos, iluminación) según indicador del vehículo",
          costeAproxEur: null
        }
      ],
      fuente: "BMW España: intervalo CBS oficial; la marca no publica precios de revisiones"
    },
    fuenteNombre: "BMW España",
    fuenteUrl: "https://www.bmw.es"
  },
  {
    id: "bmw-x3-30e-xdrive-2025-precio-ficha-tecnica",
    marca: "BMW",
    modelo: "X3 30e xDrive",
    tipo: "Híbrido enchufable",
    categoria: "SUV",
    precioDesde: 66750,
    potenciaCv: 299,
    autonomiaKm: 88,
    maleteroL: 460,
    ceroCien: 6.2,
    velocidadMax: 215,
    bateriaKwh: 22.7,
    cargaRapidaKw: null,
    etiquetaDgt: "Cero",
    garantiaBateriaAnos: 6,
    garantiaBateriaKm: 100000,
    garantiaBateriaDegradacionPct: null,
    largoMm: 4755,
    anchoMm: null,
    altoMm: null,
    pesoKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 5,
    parNm: 450,
    traccion: "Total",
    emisionesCo2: 76,
    aprox: [
      "autonomiaKm"
    ],
    pros: [
      "Los 80-88 km de autonomía eléctrica cubren el commuting diario sin gastar gasolina.",
      "La batería ha doblado su capacidad (22,7 kWh) respecto a la generación anterior.",
      "Con 299 CV combinados y 6,2 s de 0 a 100, no es un híbrido aburrido.",
      "La etiqueta Cero permite entrar en todas las ZBE y aparcar gratis en muchas ciudades.",
      "El maletero de 460 litros sigue siendo familiar pese a la batería.",
      "La carga en alterna a 11 kW recarga la batería en unas 2 horas y media."
    ],
    contras: [
      "No admite carga rápida en continua: en viaje hay que tirar de gasolina.",
      "El peso de 2.140 kg lastra la agilidad frente al X3 de combustión.",
      "Si no se carga a diario, el consumo real se dispara y pierde todo el sentido.",
      "El maletero pierde 110 litros respecto al X3 convencional.",
      "El precio de 66.750 € es notablemente superior al X3 20 xDrive.",
      "El motor 2.0 de 197 CV se queda corto cuando la batería se agota en autopista."
    ],
    imagen: "/media/bmw-x3-30e-xdrive-2025-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/bmw-x3-30e-xdrive-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/bmw-x3-30e-xdrive-2025-precio-ficha-tecnica-interior-oficial.webp",
    analisisSlug: null,
    videoId: "Pzy4bl8fVic",
    videoCanal: "The Right Car",
    galeria: [
      {
        src: "/media/bmw-x3-30e-xdrive-2025-precio-ficha-tecnica-oficial.webp",
        alt: "BMW X3 30e xDrive 2025, vista exterior delantera",
        ancho: 1600,
        alto: 1066
      },
      {
        src: "/media/bmw-x3-30e-xdrive-2025-precio-ficha-tecnica-interior-oficial.webp",
        alt: "Interior del BMW X3 30e xDrive 2025",
        ancho: 1600,
        alto: 1200
      },
      { src: "/media/bmw-x3-30e-xdrive-2025-precio-ficha-tecnica-hunt1.webp", alt: "Cambio de aceite y filtro (foto: BMW (foto de prensa) vía Paul Tan, licencia desconocida)", ancho: 1200, alto: 800 },
      { src: "/media/bmw-x3-30e-xdrive-2025-precio-ficha-tecnica-hunt2.webp", alt: "Cambio de aceite y filtro (foto: Autoblog.nl (prueba del BMW X3 30e xDrive G45), licencia desconocida)", ancho: 970, alto: 545 },
      { src: "/media/bmw-x3-30e-xdrive-2025-precio-ficha-tecnica-hunt3.webp", alt: "Cambio de aceite y filtro (foto: BMW Sudáfrica (foto de prensa) vía DailyRevs, licencia desconocida)", ancho: 1600, alto: 1024 },
    ],
    euroncap: {
      estrellas: 5,
      ano: 2025,
      url: null,
      nota: "Prueba Euro NCAP 5 estrellas (2025) sobre la generación G45; URL del resultado oficial no recuperada."
    },
    planMantenimiento: {
      intervalo: "CBS (servicio basado en condición): orientativo cada 2 años o 25.000-30.000 km; el vehículo avisa en el cuadro",
      revisiones: [
        {
          nombre: "Cambio de aceite y filtro",
          queSeCambia: "Aceite de motor, filtro de aceite y microfiltro del habitáculo; inspección de niveles y frenos",
          costeAproxEur: null
        },
        {
          nombre: "Revisión del sistema híbrido",
          queSeCambia: "Control de la batería de alto voltaje, del sistema de carga y del circuito de refrigeración",
          costeAproxEur: null
        }
      ],
      fuente: "BMW España: intervalo CBS oficial; la marca no publica precios de revisiones"
    },
    fuenteNombre: "BMW España",
    fuenteUrl: "https://www.bmw.es"
  },
  {
    id: "mercedes-amg-glc-43-2026-precio-ficha-tecnica",
    marca: "Mercedes-Benz",
    modelo: "AMG GLC 43 4MATIC",
    tipo: "Híbrido ligero",
    categoria: "SUV",
    precioDesde: null, // Sustituido en la gama vigente: la lista de precios oficial del GLC (mercedes-benz.es) solo incluye el Mercedes-AMG GLC 53; sin tarifa del GLC 43
    potenciaCv: 421,
    autonomiaKm: null,
    maleteroL: 620,
    ceroCien: 4.8,
    velocidadMax: 250,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "ECO",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    largoMm: null,
    anchoMm: null,
    altoMm: null,
    pesoKg: null,
    consumo: 9.8,
    consumoUnidad: "l/100 km",
    plazas: 5,
    parNm: 500,
    traccion: "Total",
    emisionesCo2: 223,
    aprox: [],
    pros: [
      "El 2.0 con turbocompresor eléctrico asistido elimina el lag: respuesta inmediata.",
      "Con 421 CV y 500 Nm es uno de los 4 cilindros de producción más potentes del mundo.",
      "La dirección trasera activa le da una agilidad impropia de un SUV de casi 2 toneladas.",
      "El maletero de 620 litros no penaliza la practicidad familiar.",
      "El sistema de 48 V le otorga la etiqueta ECO.",
      "El interior con MBUX y asientos deportivos AMG es de referencia en el segmento."
    ],
    contras: [
      "El sonido del 4 cilindros no tiene el carácter del antiguo V6 biturbo.",
      "El consumo real ronda los 10 l/100 km si se aprovecha la potencia.",
      "El precio parte de unos 89.900 € y con opciones supera los 105.000 €.",
      "La complejidad del turbo eléctrico y el sistema de 48 V preocupa a largo plazo.",
      "Las suspensiones deportivas penalizan el confort en firmes degradados.",
      "Pesa casi 2 toneladas: la agilidad tiene un límite físico."
    ],
    imagen: "/media/mercedes-amg-glc-43-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/mercedes-amg-glc-43-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/mercedes-amg-glc-43-2026-precio-ficha-tecnica-interior-oficial.webp",
    analisisSlug: null,
    videoId: "3CbrVX6sy0w",
    videoCanal: "Redline Reviews",
    galeria: [
      {
        src: "/media/mercedes-amg-glc-43-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Mercedes-AMG GLC 43 2026, vista exterior delantera",
        ancho: 800,
        alto: 1200
      },
      {
        src: "/media/mercedes-amg-glc-43-2026-precio-ficha-tecnica-interior-oficial.webp",
        alt: "Interior del Mercedes-AMG GLC 43 2026",
        ancho: 1600,
        alto: 900
      },
      { src: "/media/mercedes-amg-glc-43-2026-precio-ficha-tecnica-hunt1.webp", alt: "Service A (foto: Alexander-93 / Wikimedia Commons, licencia CC BY-SA 4.0)", ancho: 1600, alto: 1185 },
      { src: "/media/mercedes-amg-glc-43-2026-precio-ficha-tecnica-hunt2.webp", alt: "Service A (foto: Alexander-93 / Wikimedia Commons, licencia CC BY-SA 4.0)", ancho: 1920, alto: 1278 },
      { src: "/media/mercedes-amg-glc-43-2026-precio-ficha-tecnica-hunt3.webp", alt: "Service A (foto: © M 93 / Wikimedia Commons, licencia CC BY-SA 3.0 de)", ancho: 1920, alto: 972 },
    ],
    euroncap: {
      estrellas: 5,
      ano: 2022,
      url: "https://www.euroncap.com/sv/results/mercedes-benz/glc/48755",
      nota: "Prueba realizada en 2022 sobre la generación X254."
    },
    planMantenimiento: {
      intervalo: "Cada 15.000 km o 1 año (Service A y Service B alternos)",
      revisiones: [
        {
          nombre: "Service A",
          queSeCambia: "Aceite de motor, filtro de aceite, microfiltro, inspección de seguridad y niveles",
          costeAproxEur: null
        },
        {
          nombre: "Service B",
          queSeCambia: "Todo lo del Service A más filtro de aire, bujías y líquido de frenos según plan",
          costeAproxEur: null
        }
      ],
      fuente: "Mercedes-Benz España: intervalo oficial 15.000 km/1 año; precios de revisiones no publicados por la marca"
    },
    fuenteNombre: "Mercedes-Benz España",
    fuenteUrl: "https://www.mercedes-benz.es"
  },
  {
    id: "porsche-cayenne-turbo-gt-2025-precio-ficha-tecnica",
    marca: "Porsche",
    modelo: "Cayenne Turbo GT",
    tipo: "Gasolina",
    categoria: "SUV",
    precioDesde: 226000,
    potenciaCv: 659,
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: 3.3,
    velocidadMax: 305,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    largoMm: null,
    anchoMm: null,
    altoMm: null,
    pesoKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: null,
    parNm: 850,
    traccion: "Total",
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Los 659 CV del V8 biturbo lo convierten en el Cayenne más potente sin hibridación.",
      "El 0-100 en 3,3 s y los 305 km/h son cifras de superdeportivo en un SUV.",
      "El escape de titanio con salidas centrales tiene un sonido inconfundible.",
      "El chasis con suspensión neumática, PDCC y eje trasero direccional es de referencia.",
      "Su tiempo en Nürburgring está al nivel de deportivos de hace una década.",
      "Los frenos carbocerámicos PCCB de serie aguantan un uso intensivo en circuito."
    ],
    contras: [
      "A 226.000 € es uno de los SUV más caros del mercado.",
      "No se vende en varios mercados europeos por emisiones; su futuro es incierto.",
      "El consumo real supera los 16 l/100 km en conducción animada.",
      "Solo está disponible con carrocería Coupé: menos práctico que el Cayenne normal.",
      "La etiqueta C limita su acceso a las ZBE más restrictivas del futuro.",
      "El maletero y las plazas traseras son más justos que en el Cayenne convencional."
    ],
    imagen: "/media/porsche-cayenne-turbo-gt-2025-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/porsche-cayenne-turbo-gt-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/porsche-cayenne-turbo-gt-2025-precio-ficha-tecnica-interior-oficial.webp",
    analisisSlug: null,
    videoId: "y_Xr-oPVjAA",
    videoCanal: "TheSmokingTire",
    galeria: [
      {
        src: "/media/porsche-cayenne-turbo-gt-2025-precio-ficha-tecnica-oficial.webp",
        alt: "Porsche Cayenne Turbo GT 2025, vista exterior delantera",
        ancho: 1600,
        alto: 900
      },
      {
        src: "/media/porsche-cayenne-turbo-gt-2025-precio-ficha-tecnica-interior-oficial.webp",
        alt: "Interior del Porsche Cayenne Turbo GT 2025",
        ancho: 1600,
        alto: 900
      },
      { src: "/media/porsche-cayenne-turbo-gt-2025-precio-ficha-tecnica-hunt1.webp", alt: "Mantenimiento intermedio (foto: Porsche (foto de prensa oficial) vía The Supercar Blog, licencia desconocida)", ancho: 1280, alto: 720 },
      { src: "/media/porsche-cayenne-turbo-gt-2025-precio-ficha-tecnica-hunt2.webp", alt: "Mantenimiento intermedio (foto: Porsche (foto de prensa oficial) vía Sellatease, licencia desconocida)", ancho: 840, alto: 480 },
      { src: "/media/porsche-cayenne-turbo-gt-2025-precio-ficha-tecnica-hunt3.webp", alt: "Mantenimiento intermedio (foto: Porsche (foto de prensa oficial) vía The Torque Report, licencia desconocida)", ancho: 1580, alto: 1055 },
    ],
    euroncap: {
      estrellas: 5,
      ano: 2025,
      url: null,
      nota: "Prueba Euro NCAP 5 estrellas (ronda de 2025) sobre el Cayenne; URL del resultado oficial no recuperada."
    },
    planMantenimiento: {
      intervalo: "Cada 2 años o 30.000 km (lo que ocurra primero)",
      revisiones: [
        {
          nombre: "Mantenimiento intermedio",
          queSeCambia: "Aceite de motor, filtro de aceite, microfiltro, inspección de puntos de control Porsche",
          costeAproxEur: null
        },
        {
          nombre: "Mantenimiento mayor",
          queSeCambia: "Todo lo anterior más filtro de aire, bujías y líquido de frenos según antigüedad",
          costeAproxEur: null
        }
      ],
      fuente: "Porsche: intervalo oficial; precios de revisiones no publicados por la marca"
    },
    fuenteNombre: "Porsche España",
    fuenteUrl: "https://www.porsche.com/spain"
  },
  {
    id: "porsche-panamera-turbo-s-e-hybrid-2025-precio-ficha-tecnica",
    marca: "Porsche",
    modelo: "Panamera Turbo S E-Hybrid",
    tipo: "Híbrido enchufable",
    categoria: "Berlina",
    precioDesde: 249117,
    potenciaCv: 782,
    autonomiaKm: 84,
    maleteroL: 420,
    ceroCien: 2.9,
    velocidadMax: null,
    bateriaKwh: 21.8,
    cargaRapidaKw: null,
    etiquetaDgt: "Cero",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    largoMm: null,
    anchoMm: null,
    altoMm: null,
    pesoKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: null,
    parNm: 1000,
    traccion: "Total",
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Con 782 CV es el Panamera más potente de la historia y acelera en 2,9 s.",
      "El Porsche Active Ride elimina balanceos y cabeceos: va plano en curva.",
      "Los 84 km de autonomía eléctrica permiten el día a día en modo cero emisiones.",
      "Marcó 7:24 en Nürburgring, récord de berlina de lujo.",
      "El interior con detalles en Turbonite y Race-Tex es de una calidad excepcional.",
      "La batería se carga en unas 2 h 40 min a 11 kW en alterna."
    ],
    contras: [
      "A 249.117 € compite con deportivos puros de dos plazas.",
      "Pesa más de 2,3 toneladas: la física no perdona en carreteras reviradas.",
      "El maletero de 420 litros es escaso para una berlina de 5,05 m.",
      "Las opciones (Active Ride, Burmester, cerámicos) disparan el precio final.",
      "El sistema híbrido añade complejidad y coste de mantenimiento a largo plazo.",
      "Sin prueba Euro NCAP: no hay calificación oficial de seguridad."
    ],
    imagen: "/media/porsche-panamera-turbo-s-e-hybrid-2025-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/porsche-panamera-turbo-s-e-hybrid-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/porsche-panamera-turbo-s-e-hybrid-2025-precio-ficha-tecnica-interior-oficial.webp",
    analisisSlug: null,
    videoId: "i6yKJw1aI_M",
    videoCanal: "Doug DeMuro",
    galeria: [
      {
        src: "/media/porsche-panamera-turbo-s-e-hybrid-2025-precio-ficha-tecnica-oficial.webp",
        alt: "Porsche Panamera Turbo S E-Hybrid 2025, vista exterior delantera",
        ancho: 1600,
        alto: 1066
      },
      {
        src: "/media/porsche-panamera-turbo-s-e-hybrid-2025-precio-ficha-tecnica-interior-oficial.webp",
        alt: "Interior del Porsche Panamera Turbo S E-Hybrid 2025",
        ancho: 800,
        alto: 500
      },
      { src: "/media/porsche-panamera-turbo-s-e-hybrid-2025-precio-ficha-tecnica-hunt1.webp", alt: "Mantenimiento intermedio (foto: Porsche AG / Porsche Danmark, licencia desconocida)", ancho: 1120, alto: 630 },
      { src: "/media/porsche-panamera-turbo-s-e-hybrid-2025-precio-ficha-tecnica-hunt2.webp", alt: "Mantenimiento intermedio (foto: Porsche AG / Porsche Danmark, licencia desconocida)", ancho: 1120, alto: 630 },
      { src: "/media/porsche-panamera-turbo-s-e-hybrid-2025-precio-ficha-tecnica-hunt3.webp", alt: "Mantenimiento intermedio (foto: Porsche AG / Porsche Danmark, licencia desconocida)", ancho: 1120, alto: 630 },
    ],
    euroncap: {
      estrellas: null,
      ano: null,
      url: null,
      nota: "Sin datos EuroNCAP: modelo no probado"
    },
    planMantenimiento: {
      intervalo: "Cada 2 años o 30.000 km (lo que ocurra primero)",
      revisiones: [
        {
          nombre: "Mantenimiento intermedio",
          queSeCambia: "Aceite de motor, filtro de aceite, microfiltro, inspección de puntos de control Porsche y del sistema híbrido",
          costeAproxEur: null
        },
        {
          nombre: "Mantenimiento mayor",
          queSeCambia: "Todo lo anterior más filtro de aire, bujías y líquido de frenos según antigüedad",
          costeAproxEur: null
        }
      ],
      fuente: "Porsche: intervalo oficial; precios de revisiones no publicados por la marca"
    },
    fuenteNombre: "Porsche España",
    fuenteUrl: "https://www.porsche.com/spain"
  },
  {
    id: "bmw-serie-5-520i-2025-precio-ficha-tecnica",
    marca: "BMW",
    modelo: "Serie 5 520i",
    tipo: "Híbrido ligero",
    categoria: "Berlina",
    precioDesde: 63515,
    potenciaCv: 208,
    autonomiaKm: null,
    maleteroL: 520,
    ceroCien: 7.5,
    velocidadMax: 230,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "ECO",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    largoMm: 5060,
    anchoMm: 1900,
    altoMm: 1515,
    pesoKg: 1800,
    consumo: 5.8,
    consumoUnidad: "l/100 km",
    plazas: 5,
    parNm: 330,
    traccion: "Trasera",
    emisionesCo2: 149,
    aprox: ["emisionesCo2"],
    pros: [
      "El 2.0 de 208 CV con 48 V es suficiente y refinado para una berlina ejecutiva.",
      "La etiqueta ECO abre todas las ZBE sin el sobreprecio de un híbrido enchufable.",
      "El maletero de 520 litros y el amplio espacio trasero lo hacen muy familiar.",
      "La calidad de rodadura y el aislamiento son de los mejores del segmento.",
      "El iDrive 8.5 con pantalla curva y head-up display es muy completo.",
      "A 63.515 € es la puerta de acceso más razonable al Serie 5."
    ],
    contras: [
      "Los 208 CV saben a poco para una berlina de 1,7 toneladas y aspiraciones premium.",
      "La suspensión M Sport de serie resulta seca en firmes rotos.",
      "Muchos asistentes de conducción avanzada son opcionales.",
      "El diseño exterior es continuista y menos atrevido que el del i5.",
      "El cambio automático de 8 velocidades prima la suavidad sobre la rapidez.",
      "En equipamiento básico echa en falta cámara 360 y detector de ángulo muerto."
    ],
    imagen: "/media/bmw-serie-5-520i-2025-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/bmw-serie-5-520i-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/bmw-serie-5-520i-2025-precio-ficha-tecnica-interior-oficial.webp",
    analisisSlug: null,
    videoId: "NjPpghCGBdA",
    videoCanal: "OTO Drive",
    galeria: [
      {
        src: "/media/bmw-serie-5-520i-2025-precio-ficha-tecnica-oficial.webp",
        alt: "BMW Serie 5 520i 2025, vista exterior lateral",
        ancho: 800,
        alto: 545
      },
      {
        src: "/media/bmw-serie-5-520i-2025-precio-ficha-tecnica-interior-oficial.webp",
        alt: "Interior del BMW Serie 5 520i 2025",
        ancho: 1600,
        alto: 1066
      },
      { src: "/media/bmw-serie-5-520i-2025-precio-ficha-tecnica-hunt1.webp", alt: "Cambio de aceite y filtro (foto: CarExpert (Australia), coche de prensa BMW 520i, licencia desconocida)", ancho: 1600, alto: 1066 },
      { src: "/media/bmw-serie-5-520i-2025-precio-ficha-tecnica-hunt2.webp", alt: "Cambio de aceite y filtro (foto: CarExpert (Australia), coche de prensa BMW 520i, licencia desconocida)", ancho: 1600, alto: 1066 },
      { src: "/media/bmw-serie-5-520i-2025-precio-ficha-tecnica-hunt3.webp", alt: "Cambio de aceite y filtro (foto: BMW Tang (concesionario, entrega de un G60 520i), licencia desconocida)", ancho: 1600, alto: 1200 },
    ],
    euroncap: {
      estrellas: 5,
      ano: 2024,
      url: null,
      nota: "Prueba Euro NCAP 5 estrellas (enero de 2024) confirmada por comunicado oficial de BMW; URL del resultado no recuperada."
    },
    planMantenimiento: {
      intervalo: "CBS (servicio basado en condición): orientativo cada 2 años o 25.000-30.000 km; el vehículo avisa en el cuadro",
      revisiones: [
        {
          nombre: "Cambio de aceite y filtro",
          queSeCambia: "Aceite de motor, filtro de aceite y microfiltro del habitáculo; inspección visual de niveles y frenos",
          costeAproxEur: null
        },
        {
          nombre: "Inspección CBS",
          queSeCambia: "Revisión de puntos de control (frenos, neumáticos, líquidos, iluminación) según indicador del vehículo",
          costeAproxEur: null
        }
      ],
      fuente: "BMW España: intervalo CBS oficial; la marca no publica precios de revisiones"
    },
    fuenteNombre: "coches.net",
    fuenteUrl: "https://www.coches.net/fichas_tecnicas/bmw/serie_5/berlina/4-puertas/520i_208cv_hibrido/473/785069820251101/"
  },
  {
    id: "bmw-ix-m70-2025-precio-ficha-tecnica",
    marca: "BMW",
    modelo: "iX M70 xDrive",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: 132500,
    potenciaCv: 659,
    autonomiaKm: 600,
    maleteroL: 500,
    ceroCien: 3.8,
    velocidadMax: 250,
    bateriaKwh: 108.9,
    cargaRapidaKw: 195,
    etiquetaDgt: "Cero",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: 70,
    largoMm: 4950,
    anchoMm: null,
    altoMm: null,
    pesoKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 5,
    parNm: 1100,
    traccion: "Total",
    emisionesCo2: 0,
    aprox: [
      "largoMm"
    ],
    pros: [
      "Con 659 CV y 3,8 s de 0 a 100 es el SUV eléctrico más prestacional de BMW.",
      "Los 600 km de autonomía WLTP con batería de 108,9 kWh están entre lo mejor del segmento.",
      "La carga a 195 kW recupera del 10 al 80 % en 35 minutos.",
      "La suspensión neumática, el eje trasero direccional y el control antivuelco le dan un dinamismo sorprendente.",
      "El interior es un salón rodante: materiales nobles y un silencio de marcha excepcional.",
      "La parrilla iluminada y las llantas de hasta 23 pulgadas le dan una presencia única."
    ],
    contras: [
      "A 132.500 € es mucho más caro que un Tesla Model X o un Kia EV9 GT.",
      "El diseño exterior sigue siendo polémico y no deja indiferente.",
      "Pesa cerca de 2,7 toneladas: los neumáticos y frenos sufren.",
      "El maletero de 500 litros es justo para un SUV de casi 5 metros.",
      "La eficiencia real (~23 kWh/100 km) está lejos de la de rivales más modernos.",
      "El iX3 de nueva generación ofrece más autonomía y carga más rápida por menos dinero."
    ],
    imagen: "/media/bmw-ix-m70-2025-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/bmw-ix-m70-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/bmw-ix-m70-2025-precio-ficha-tecnica-interior-oficial.webp",
    analisisSlug: null,
    videoId: "74tNxveASxY",
    videoCanal: "Motor1 Italia",
    galeria: [
      {
        src: "/media/bmw-ix-m70-2025-precio-ficha-tecnica-oficial.webp",
        alt: "BMW iX M70 xDrive 2025, vista exterior delantera",
        ancho: 1600,
        alto: 1066
      },
      {
        src: "/media/bmw-ix-m70-2025-precio-ficha-tecnica-interior-oficial.webp",
        alt: "Interior del BMW iX M70 xDrive 2025",
        ancho: 1500,
        alto: 900
      },
      { src: "/media/bmw-ix-m70-2025-precio-ficha-tecnica-hunt1.webp", alt: "Revisión bienal (foto: BMW Group Press, licencia desconocida)", ancho: 1600, alto: 1067 },
      { src: "/media/bmw-ix-m70-2025-precio-ficha-tecnica-hunt2.webp", alt: "Revisión bienal (foto: BMW Group Press / DailyRevs, licencia desconocida)", ancho: 1600, alto: 1066 },
      { src: "/media/bmw-ix-m70-2025-precio-ficha-tecnica-hunt3.webp", alt: "Revisión bienal (foto: BMW Group Press, licencia desconocida)", ancho: 1600, alto: 1200 },
    ],
    euroncap: {
      estrellas: 5,
      ano: 2021,
      url: null,
      nota: "Prueba Euro NCAP 5 estrellas (2021) sobre el iX; URL del resultado oficial no recuperada."
    },
    planMantenimiento: {
      intervalo: "Cada 2 años (vehículos eléctricos BMW)",
      revisiones: [
        {
          nombre: "Revisión bienal",
          queSeCambia: "Inspección general, microfiltro del habitáculo, control de la batería de alto voltaje y de los frenos",
          costeAproxEur: null
        },
        {
          nombre: "Líquido de frenos",
          queSeCambia: "Sustitución del líquido de frenos cada 2 años",
          costeAproxEur: null
        }
      ],
      fuente: "BMW España: intervalo oficial para eléctricos; la marca no publica precios de revisiones"
    },
    fuenteNombre: "BMW España",
    fuenteUrl: "https://www.bmw.es"
  },
  {
    id: "porsche-911-carrera-4-gts-2026-precio-ficha-tecnica",
    marca: "Porsche",
    modelo: "911 Carrera 4 GTS",
    tipo: "Híbrido",
    categoria: "Deportivo",
    precioDesde: 214689,
    potenciaCv: 541,
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: 3.0,
    velocidadMax: 312,
    bateriaKwh: 1.9,
    cargaRapidaKw: null,
    etiquetaDgt: "ECO",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    largoMm: null,
    anchoMm: null,
    altoMm: null,
    pesoKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: 610,
    traccion: "Total",
    emisionesCo2: null,
    aprox: [],
    pros: [
      "El T-Hybrid con eTurbo elimina el lag: la respuesta del 3.6 es inmediata.",
      "Con 541 CV y 3,0 s de 0 a 100, es el GTS más rápido de la historia.",
      "Solo añade 50 kg respecto al anterior: la hibridación no lastra el peso.",
      "La tracción total le da una motricidad total en cualquier condición.",
      "La etiqueta ECO es inédita en un 911 y abre las ZBE.",
      "El chasis con eje trasero direccional mantiene la agilidad legendaria del 911."
    ],
    contras: [
      "Desaparece el cambio manual: solo PDK de 8 velocidades.",
      "A 213.021 € roza el precio del 911 Turbo de la generación anterior.",
      "El sistema híbrido no permite circular en modo eléctrico: no ahorra en ciudad.",
      "El consumo y las emisiones son similares a los del GTS anterior no híbrido.",
      "La complejidad del eTurbo y la batería de 1,9 kWh preocupan fuera de garantía.",
      "Sin prueba Euro NCAP: no hay calificación oficial de seguridad."
    ],
    imagen: "/media/porsche-911-carrera-4-gts-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/porsche-911-carrera-4-gts-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/porsche-911-carrera-4-gts-2026-precio-ficha-tecnica-interior-oficial.webp",
    analisisSlug: null,
    videoId: "s3mY5byUYm4",
    videoCanal: "MotorWeek",
    galeria: [
      {
        src: "/media/porsche-911-carrera-4-gts-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Porsche 911 Carrera 4 GTS 2026, vista exterior delantera",
        ancho: 1500,
        alto: 1000
      },
      {
        src: "/media/porsche-911-carrera-4-gts-2026-precio-ficha-tecnica-interior-oficial.webp",
        alt: "Interior del Porsche 911 Carrera 4 GTS 2026",
        ancho: 1500,
        alto: 1000
      },
      { src: "/media/porsche-911-carrera-4-gts-2026-precio-ficha-tecnica-hunt1.webp", alt: "Mantenimiento intermedio (foto: Porsche AG (foto de prensa) vía StuttCars, licencia desconocida)", ancho: 1920, alto: 1080 },
      { src: "/media/porsche-911-carrera-4-gts-2026-precio-ficha-tecnica-hunt2.webp", alt: "Mantenimiento intermedio (foto: Porsche AG (foto de prensa) vía StuttCars, licencia desconocida)", ancho: 1920, alto: 1080 },
      { src: "/media/porsche-911-carrera-4-gts-2026-precio-ficha-tecnica-hunt3.webp", alt: "Mantenimiento intermedio (foto: Porsche AG (foto de prensa) vía StuttCars, licencia desconocida)", ancho: 1920, alto: 1080 },
    ],
    euroncap: {
      estrellas: null,
      ano: null,
      url: null,
      nota: "Sin datos EuroNCAP: modelo no probado"
    },
    planMantenimiento: {
      intervalo: "Cada 2 años o 30.000 km (lo que ocurra primero)",
      revisiones: [
        {
          nombre: "Mantenimiento intermedio",
          queSeCambia: "Aceite de motor, filtro de aceite, microfiltro, inspección de puntos de control Porsche y del sistema T-Hybrid",
          costeAproxEur: null
        },
        {
          nombre: "Mantenimiento mayor",
          queSeCambia: "Todo lo anterior más filtro de aire, bujías y líquido de frenos según antigüedad",
          costeAproxEur: null
        }
      ],
      fuente: "Porsche: intervalo oficial; precios de revisiones no publicados por la marca"
    },
    fuenteNombre: "Porsche España",
    fuenteUrl: "https://www.porsche.com/spain"
  },
  {
    id: "land-rover-range-rover-electrico-2026-precio-ficha-tecnica",
    marca: "Land Rover",
    modelo: "Range Rover Eléctrico",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: 163250,
    potenciaCv: 550,
    autonomiaKm: 600,
    maleteroL: null,
    ceroCien: 4.5,
    velocidadMax: null,
    bateriaKwh: 118.5,
    cargaRapidaKw: 350,
    etiquetaDgt: "Cero",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: null,
    largoMm: null,
    anchoMm: null,
    altoMm: null,
    pesoKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 5,
    parNm: 850,
    traccion: "Total",
    emisionesCo2: 0,
    aprox: [],
    pros: [
      "Los 600 km WLTP con 118,5 kWh útiles lo ponen a la altura de los mejores SUV eléctricos.",
      "La arquitectura de 800 V carga a 350 kW: del 10 al 80 % en 22 minutos.",
      "Mantiene el vadeo de 900 mm y la tracción total: es un Range Rover de verdad.",
      "Con 550 CV y 850 Nm ofrece prestaciones de V8 con refinamiento eléctrico.",
      "El habitáculo es notablemente más silencioso: el más refinado de su clase.",
      "La garantía de la batería de 8 años o 160.000 km da confianza."
    ],
    contras: [
      "A 163.250 € es el SUV eléctrico de lujo más caro del mercado.",
      "Pesa 2,6 toneladas: la autonomía real en uso exigente baja de los 535 km.",
      "La red de carga a 350 kW aún es escasa fuera de las grandes rutas.",
      "No hay frunk: el espacio delantero lo ocupa la electrónica de potencia.",
      "La lista de espera supera las 60.000 reservas: los plazos son largos.",
      "Sin prueba Euro NCAP: no hay calificación oficial de seguridad."
    ],
    imagen: "/media/land-rover-range-rover-electrico-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/land-rover-range-rover-electrico-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/land-rover-range-rover-electrico-2026-precio-ficha-tecnica-interior-oficial.webp",
    analisisSlug: null,
    videoId: "S1FCQoZ4tTM",
    videoCanal: "carwow",
    galeria: [
      {
        src: "/media/land-rover-range-rover-electrico-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Range Rover Eléctrico 2026, vista exterior lateral",
        ancho: 1200,
        alto: 800
      },
      {
        src: "/media/land-rover-range-rover-electrico-2026-precio-ficha-tecnica-interior-oficial.webp",
        alt: "Interior del Range Rover Eléctrico 2026",
        ancho: 1200,
        alto: 675
      },
      { src: "/media/land-rover-range-rover-electrico-2026-precio-ficha-tecnica-hunt1.webp", alt: "Revisión programada (foto: JLR / Land Rover (imagen oficial de presentación del Range Rover Electric) vía Fleet News, licencia desconocida)", ancho: 1400, alto: 934 },
      { src: "/media/land-rover-range-rover-electrico-2026-precio-ficha-tecnica-hunt2.webp", alt: "Revisión programada (foto: JLR / Land Rover (foto oficial del Range Rover Electric vadeando) vía Wonderful World of EVs, licencia desconocida)", ancho: 1600, alto: 1067 },
      { src: "/media/land-rover-range-rover-electrico-2026-precio-ficha-tecnica-hunt3.webp", alt: "Revisión programada (foto: JLR / Land Rover (imagen oficial RANGE ROVER ELECTRIC INTERIOR 03) vía EVtrend, licencia desconocida)", ancho: 1600, alto: 935 },
    ],
    euroncap: {
      estrellas: null,
      ano: null,
      url: null,
      nota: "Sin datos EuroNCAP: modelo no probado"
    },
    planMantenimiento: {
      intervalo: "Cada 2 años o 34.000 km (lo que ocurra primero)",
      revisiones: [
        {
          nombre: "Revisión programada",
          queSeCambia: "Inspección general, microfiltro del habitáculo, control de la batería de alto voltaje y del sistema de refrigeración",
          costeAproxEur: null
        }
      ],
      fuente: "Land Rover España: intervalo oficial; precios de revisiones no publicados por la marca"
    },
    fuenteNombre: "Land Rover España",
    fuenteUrl: "https://www.landrover.es"
  },
  {
    id: "land-rover-range-rover-sport-electrico-2026-precio-ficha-tecnica",
    marca: "Land Rover",
    modelo: "Range Rover Sport Eléctrico",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: 152200,
    potenciaCv: 550,
    autonomiaKm: 609,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: 118.5,
    cargaRapidaKw: 350,
    etiquetaDgt: "Cero",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: null,
    largoMm: null,
    anchoMm: null,
    altoMm: null,
    pesoKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 5,
    parNm: 850,
    traccion: "Total",
    emisionesCo2: 0,
    aprox: [],
    pros: [
      "Los 609 km WLTP son la mejor autonomía de la gama eléctrica de JLR.",
      "Comparte la plataforma de 800 V y 350 kW del Range Rover Electric.",
      "El eARC aplica hasta 1.400 Nm por eje: un control de balanceo excepcional.",
      "La dirección trasera activa le da una agilidad inédita en un Sport.",
      "El diseño sonoro específico refuerza el carácter deportivo en modo eléctrico.",
      "A 152.200 € cuesta 11.000 € menos que el Range Rover Electric equivalente."
    ],
    contras: [
      "Llega a finales de 2026: aún no hay unidades en concesionarios.",
      "El maletero y la habitabilidad son menores que en el Range Rover Electric.",
      "Sin datos oficiales de 0-100 ni velocidad máxima publicados.",
      "La autonomía real dependerá mucho del uso del climatizador y la orografía.",
      "El peso elevado penaliza el consumo en conducción dinámica.",
      "Sin prueba Euro NCAP: no hay calificación oficial de seguridad."
    ],
    imagen: "/media/land-rover-range-rover-sport-electrico-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/land-rover-range-rover-sport-electrico-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/land-rover-range-rover-sport-electrico-2026-precio-ficha-tecnica-interior-oficial.webp",
    analisisSlug: null,
    videoId: "PWmeLUS3DpE",
    videoCanal: "Electrifying",
    galeria: [
      {
        src: "/media/land-rover-range-rover-sport-electrico-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Range Rover Sport Eléctrico 2026, imagen oficial de JLR",
        ancho: 500,
        alto: 357
      },
      {
        src: "/media/land-rover-range-rover-sport-electrico-2026-precio-ficha-tecnica-interior-oficial.webp",
        alt: "Interior del Range Rover Sport Eléctrico 2026",
        ancho: 500,
        alto: 357
      },
      { src: "/media/land-rover-range-rover-sport-electrico-2026-precio-ficha-tecnica-hunt1.webp", alt: "Revisión programada (foto: JLR / Land Rover (media oficial), licencia desconocida)", ancho: 750, alto: 422 },
      { src: "/media/land-rover-range-rover-sport-electrico-2026-precio-ficha-tecnica-hunt2.webp", alt: "Revisión programada (foto: JLR (prensa oficial, vía Carscoops), licencia desconocida)", ancho: 780, alto: 438 },
      { src: "/media/land-rover-range-rover-sport-electrico-2026-precio-ficha-tecnica-hunt3.webp", alt: "Revisión programada (foto: JLR (prensa oficial, vía AllAboutEVs), licencia desconocida)", ancho: 1200, alto: 675 },
    ],
    euroncap: {
      estrellas: null,
      ano: null,
      url: null,
      nota: "Sin datos EuroNCAP: modelo no probado"
    },
    planMantenimiento: {
      intervalo: "Cada 2 años o 34.000 km (lo que ocurra primero)",
      revisiones: [
        {
          nombre: "Revisión programada",
          queSeCambia: "Inspección general, microfiltro del habitáculo, control de la batería de alto voltaje y del sistema de refrigeración",
          costeAproxEur: null
        }
      ],
      fuente: "Land Rover España: intervalo oficial; precios de revisiones no publicados por la marca"
    },
    fuenteNombre: "Land Rover España",
    fuenteUrl: "https://www.landrover.es"
  },
  {
    altoMm: 1715,
    analisisSlug: null,
    anchoMm: 1900,
    aprox: [],
    autonomiaKm: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    categoria: "SUV",
    ceroCien: null,
    consumo: 7.7,
    consumoUnidad: "l/100 km",
    contras: [
      "Consumo elevado en gasolina: 7,7 l/100 km WLTP, alto para un SUV familiar moderno.",
      "Emisiones de 175 g/km de CO2 en gasolina, lo que le deja con etiqueta C y fuera de las ayudas a la electrificación.",
      "Velocidad máxima limitada a 180 km/h y sin datos oficiales de aceleración publicados.",
      "Sin prueba Euro NCAP: la seguridad en choque no está evaluada por un organismo independiente.",
      "Red comercial y de posventa limitada en España al ser una marca de reciente implantación.",
      "Plataforma y tecnología heredadas de su base china, con materiales y ajustes por debajo de los rivales europeos."
    ],
    emisionesCo2: 175,
    etiquetaDgt: "C",
    euroncap: {
      ano: null,
      estrellas: null,
      nota: "Sin datos EuroNCAP: modelo no probado",
      url: null
    },
    fuenteNombre: "EVO / Europa Press",
    fuenteUrl: "https://www.actualidadmotor.com/wp-content/uploads/2026/07/Ficha-tecnica-Evo-Spazio-2026-Espana.pdf",
    galeria: [
      {
        alt: "EVO Spazio 2026, vista exterior del SUV de 7 plazas",
        alto: 480,
        ancho: 640,
        src: "/media/evo-spazio-2026-precio-ficha-tecnica-oficial.webp"
      },
      {
        alt: "Interior del EVO Spazio 2026 con pantalla táctil y 7 plazas",
        alto: 600,
        ancho: 800,
        src: "/media/evo-spazio-2026-precio-ficha-tecnica-interior-oficial.webp"
      },
      { src: "/media/evo-spazio-2026-precio-ficha-tecnica-hunt1.webp", alt: "Spazio (foto: EVO España (landing oficial), licencia desconocida)", ancho: 1200, alto: 800 },
      { src: "/media/evo-spazio-2026-precio-ficha-tecnica-hunt2.webp", alt: "Spazio (foto: PassionAndCar / foto de prensa EVO, licencia desconocida)", ancho: 1200, alto: 675 },
      { src: "/media/evo-spazio-2026-precio-ficha-tecnica-hunt3.webp", alt: "Spazio (foto: PassionAndCar / foto de prensa EVO, licencia desconocida)", ancho: 1200, alto: 800 },
    ],
    garantiaBateriaAnos: null,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: null,
    id: "evo-spazio-2026-precio-ficha-tecnica",
    imagen: "/media/evo-spazio-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/evo-spazio-2026-precio-ficha-tecnica-interior-oficial.webp",
    imagenOficial: "/media/evo-spazio-2026-precio-ficha-tecnica-oficial.webp",
    largoMm: 4850,
    maleteroL: 234,
    marca: "EVO",
    modelo: "Spazio",
    parNm: 260,
    pesoKg: 1742,
    planMantenimiento: null,
    plazas: 7,
    potenciaCv: 176,
    precioDesde: 33400,
    pros: [
      "SUV de 7 plazas reales (configuración 2+2+3) por 33.400 €, muy por debajo de cualquier rival europeo de tamaño similar.",
      "Versión bifuel gasolina/GLP con etiqueta ECO de la DGT por 35.900 €, ideal para circular sin restricciones por las ZBE.",
      "Maletero modulable de 234 a 2.032 litros según la disposición de los asientos, líder en versatilidad de carga.",
      "Equipamiento de serie muy completo: llantas de 18 pulgadas, techo panorámico, cuadro digital de 12 pulgadas, cámara de 360 grados y portón trasero eléctrico.",
      "Cambio automático de doble embrague (DCT) de 7 velocidades y tracción delantera de serie en ambas versiones.",
      "Garantía oficial de 5 años o 100.000 km, superior a la media de las marcas generalistas."
    ],
    tipo: "Gasolina",
    traccion: "Delantera",
    velocidadMax: 180,
    videoCanal: null,
    videoId: null
  },
  {
    altoMm: 1680,
    analisisSlug: null,
    anchoMm: 1860,
    aprox: [],
    autonomiaKm: null,
    bateriaKwh: 2,
    cargaRapidaKw: null,
    categoria: "SUV",
    ceroCien: null,
    consumo: 6.1,
    consumoUnidad: "l/100 km",
    contras: [
      "Precio al contado de 33.900 €, 4.000 € más que el precio financiado anunciado.",
      "Sin prueba Euro NCAP: la seguridad en choque no está evaluada de forma independiente.",
      "Batería pequeña (2 kWh): no permite circular en modo eléctrico puro distancias relevantes.",
      "Peso elevado (1.775 kg) que penaliza la agilidad y el consumo en uso real.",
      "Marca con red comercial limitada en España y valor de reventa incierto.",
      "Sin datos oficiales de aceleración 0-100 km/h ni de capacidad de maletero publicados."
    ],
    emisionesCo2: null,
    etiquetaDgt: "ECO",
    euroncap: {
      ano: null,
      estrellas: null,
      nota: "Sin datos EuroNCAP: modelo no probado",
      url: null
    },
    fuenteNombre: "coches.net",
    fuenteUrl: "https://www.coches.net/noticias/nuevo-evo-6-hev",
    galeria: [
      {
        alt: "EVO 6 HEV 2026, vista exterior del SUV híbrido",
        alto: 840,
        ancho: 1232,
        src: "/media/evo-6-hev-2026-precio-ficha-tecnica-oficial.webp"
      },
      {
        alt: "Interior del EVO 6 HEV 2026 con doble pantalla digital",
        alto: 599,
        ancho: 899,
        src: "/media/evo-6-hev-2026-precio-ficha-tecnica-interior-oficial.webp"
      },
      { src: "/media/evo-6-hev-2026-precio-ficha-tecnica-hunt1.webp", alt: "6 HEV (foto: EVO Auto España (landing oficial de la marca en España), licencia desconocida)", ancho: 1200, alto: 800 },
      { src: "/media/evo-6-hev-2026-precio-ficha-tecnica-hunt2.webp", alt: "6 HEV (foto: Auto EVO (importador oficial EVO, página del modelo 6 HEV), licencia desconocida)", ancho: 1232, alto: 840 },
      { src: "/media/evo-6-hev-2026-precio-ficha-tecnica-hunt3.webp", alt: "6 HEV (foto: Auto EVO (importador oficial EVO, página del modelo 6 HEV), licencia desconocida)", ancho: 800, alto: 450 },
    ],
    garantiaBateriaAnos: null,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: null,
    id: "evo-6-hev-2026-precio-ficha-tecnica",
    imagen: "/media/evo-6-hev-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/evo-6-hev-2026-precio-ficha-tecnica-interior-oficial.webp",
    imagenOficial: "/media/evo-6-hev-2026-precio-ficha-tecnica-oficial.webp",
    largoMm: 4590,
    maleteroL: null,
    marca: "EVO",
    modelo: "6 HEV",
    parNm: null,
    pesoKg: 1775,
    planMantenimiento: null,
    plazas: 5,
    potenciaCv: 245,
    precioDesde: 33900,
    pros: [
      "Primer híbrido autorrecargable de EVO: 245 CV combinados con etiqueta ECO desde 29.900 € financiado.",
      "Consumo homologado de solo 6,1 l/100 km para un SUV de 4,59 metros y 1.775 kg.",
      "Gama cerrada con un único acabado Full Opt muy equipado: llantas de 19 pulgadas, cámara de 360 grados, asientos calefactables y portón eléctrico.",
      "Doble pantalla digital de 10,5 pulgadas y tapicería de ecopiel de serie, sin listas de opciones.",
      "Paquete ADAS completo: control de crucero adaptativo, detector de ángulo muerto, frenada automática de emergencia y asistente en atascos.",
      "Sistema híbrido con batería de polímero de litio y transmisión DHT, sin necesidad de enchufar."
    ],
    tipo: "Híbrido",
    traccion: "Delantera",
    velocidadMax: 180,
    videoCanal: null,
    videoId: null
  },
  {
    altoMm: 1825,
    analisisSlug: null,
    anchoMm: 1815,
    aprox: [
      "consumo"
    ],
    autonomiaKm: 46,
    bateriaKwh: 8.83,
    cargaRapidaKw: null,
    categoria: "SUV",
    ceroCien: 10.0,
    consumo: 2.06,
    consumoUnidad: "l/100 km",
    contras: [
      "Potencia modesta: 110 CV para un 7 plazas, con un 0-100 km/h de 10 segundos.",
      "Batería pequeña (8,83 kWh): la autonomía eléctrica real será inferior a 46 km en uso exigente.",
      "Sin carga rápida DC confirmada: la recarga completa tarda unas 3,5 horas en corriente alterna.",
      "Sin prueba Euro NCAP y marca con presencia testimonial en España.",
      "Interior con materiales sencillos y tecnología básica frente a rivales más modernos.",
      "Consumo real con la batería descargada sensiblemente superior al homologado."
    ],
    emisionesCo2: null,
    etiquetaDgt: "Cero",
    euroncap: {
      ano: null,
      estrellas: null,
      nota: "Sin datos EuroNCAP: modelo no probado",
      url: null
    },
    fuenteNombre: "coches.net",
    fuenteUrl: "https://www.coches.net/fichas_tecnicas/swm/g03f/4x4/5-puertas/15t_edi_7str_110cv_hibrido_enchufable/115652/849888420250901/",
    galeria: [
      {
        alt: "SWM G03 EDI 2026, vista exterior del SUV híbrido enchufable de 7 plazas",
        alto: 817,
        ancho: 1100,
        src: "/media/swm-g03-edi-phev-2026-precio-ficha-tecnica-oficial.webp"
      },
      {
        alt: "Interior del SWM G03 EDI 2026",
        alto: 666,
        ancho: 1600,
        src: "/media/swm-g03-edi-phev-2026-precio-ficha-tecnica-interior-oficial.webp"
      },
      { src: "/media/swm-g03-edi-phev-2026-precio-ficha-tecnica-hunt1.webp", alt: "G03 EDI (foto: SWM Motors Madrid (concesionario oficial SWM), licencia desconocida)", ancho: 2560, alto: 1706 },
      { src: "/media/swm-g03-edi-phev-2026-precio-ficha-tecnica-hunt2.webp", alt: "G03 EDI (foto: SWM / Autonoción, licencia desconocida)", ancho: 1100, alto: 815 },
      { src: "/media/swm-g03-edi-phev-2026-precio-ficha-tecnica-hunt3.webp", alt: "G03 EDI (foto: SWM / Autonoción, licencia desconocida)", ancho: 1100, alto: 734 },
    ],
    garantiaBateriaAnos: null,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: null,
    id: "swm-g03-edi-phev-2026-precio-ficha-tecnica",
    imagen: "/media/swm-g03-edi-phev-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/swm-g03-edi-phev-2026-precio-ficha-tecnica-interior-oficial.webp",
    imagenOficial: "/media/swm-g03-edi-phev-2026-precio-ficha-tecnica-oficial.webp",
    largoMm: 4605,
    maleteroL: null,
    marca: "SWM",
    modelo: "G03 EDI",
    parNm: null,
    pesoKg: null,
    planMantenimiento: null,
    plazas: 7,
    potenciaCv: 110,
    precioDesde: 23990,
    pros: [
      "SUV híbrido enchufable de 7 plazas con etiqueta CERO por 23.990 €, el más barato de su categoría.",
      "Sistema de autonomía extendida (EREV): el motor eléctrico mueve las ruedas y el 1.5 de gasolina actúa como generador.",
      "46 km de autonomía eléctrica WLTC para los desplazamientos diarios sin gastar gasolina.",
      "Autonomía total de hasta 1.000 km combinando batería y depósito de combustible.",
      "Batería LFP de 8,83 kWh, una química duradera y sin cobalto.",
      "Garantía de 5 años y cambio automático de serie."
    ],
    tipo: "Híbrido enchufable",
    traccion: "Delantera",
    velocidadMax: 180,
    videoCanal: null,
    videoId: "Jwl_ix0XUjc"
  },
  {
    altoMm: null,
    analisisSlug: null,
    anchoMm: null,
    aprox: [
      "largoMm"
    ],
    autonomiaKm: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    categoria: "SUV",
    ceroCien: 10.0,
    consumo: 7.6,
    consumoUnidad: "l/100 km",
    contras: [
      "Etiqueta C en gasolina: sin acceso a ayudas y con restricciones futuras en las ZBE.",
      "Consumo de 7,6 l/100 km y 177 g/km de CO2, elevados para el segmento.",
      "La prensa especializada advierte de notables lagunas en seguridad frente a la normativa UE obligatoria.",
      "Sin prueba Euro NCAP del nuevo modelo.",
      "Aceleración discreta: 10 segundos de 0 a 100 km/h.",
      "Marca italiana de nicho con red de talleres limitada y depreciación elevada."
    ],
    emisionesCo2: 177,
    etiquetaDgt: "C",
    euroncap: {
      ano: null,
      estrellas: null,
      nota: "Sin datos EuroNCAP: modelo no probado",
      url: null
    },
    fuenteNombre: "Autonoción",
    fuenteUrl: "https://www.autonocion.com/motornocion/dr-5-20-000-euros-lagunas-seguridad-obligatorias-ue/",
    galeria: [
      {
        alt: "DR 5 Stilnovo 2026, vista frontal del nuevo SUV",
        alto: 893,
        ancho: 1600,
        src: "/media/dr-5-stilnovo-2026-precio-ficha-tecnica-oficial.webp"
      },
      {
        alt: "Interior del DR 5 Stilnovo 2026",
        alto: 960,
        ancho: 1280,
        src: "/media/dr-5-stilnovo-2026-precio-ficha-tecnica-interior-oficial.webp"
      },
      { src: "/media/dr-5-stilnovo-2026-precio-ficha-tecnica-hunt1.webp", alt: "5 Stilnovo (foto: Motorbox, licencia desconocida)", ancho: 1920, alto: 1080 },
      { src: "/media/dr-5-stilnovo-2026-precio-ficha-tecnica-hunt2.webp", alt: "5 Stilnovo (foto: Motorbox, licencia desconocida)", ancho: 1920, alto: 1080 },
      { src: "/media/dr-5-stilnovo-2026-precio-ficha-tecnica-hunt3.webp", alt: "5 Stilnovo (foto: Motorbox, licencia desconocida)", ancho: 1920, alto: 1080 },
    ],
    garantiaBateriaAnos: null,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: null,
    id: "dr-5-stilnovo-2026-precio-ficha-tecnica",
    imagen: "/media/dr-5-stilnovo-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/dr-5-stilnovo-2026-precio-ficha-tecnica-interior-oficial.webp",
    imagenOficial: "/media/dr-5-stilnovo-2026-precio-ficha-tecnica-oficial.webp",
    largoMm: 4320,
    maleteroL: null,
    marca: "DR",
    modelo: "5 Stilnovo",
    parNm: 255,
    pesoKg: null,
    planMantenimiento: null,
    plazas: 5,
    potenciaCv: 158,
    precioDesde: 23900,
    pros: [
      "Nueva generación del DR 5 sobre base Changan: 158 CV turbo con cambio DCT de 7 velocidades por 23.900 € (19.900 € con promoción).",
      "Versión bifuel GLP con etiqueta ECO por 2.000 € más, ideal para circular por las ZBE.",
      "Motor 1.4 TGDI moderno de 255 Nm, muy superior al antiguo 1.5 atmosférico del DR 5.0.",
      "Equipamiento completo de serie: llantas de 18 pulgadas, techo solar panorámico, cámara de 360 grados y cuadro digital.",
      "Precio rompedor frente a rivales chinos del segmento C-SUV.",
      "Diseño renovado con techo bicolor opcional y pack Sport con llantas de 19 pulgadas."
    ],
    tipo: "Gasolina",
    traccion: "Delantera",
    velocidadMax: 188,
    videoCanal: null,
    videoId: null
  },
  {
    altoMm: null,
    analisisSlug: null,
    anchoMm: null,
    aprox: [],
    autonomiaKm: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    categoria: "Deportivo",
    ceroCien: 3.9,
    consumo: null,
    consumoUnidad: null,
    contras: [
      "Precio en España no publicado: en Reino Unido parte de 102.000 libras, un importe de superdeportivo.",
      "Sin prueba Euro NCAP, habitual en fabricantes artesanales de bajo volumen.",
      "Habitabilidad mínima: biplaza estricto sin apenas maletero ni huecos portaobjetos.",
      "Confort limitado para uso diario: capota manual y aislamiento acústico testimonial.",
      "Emisiones de 175 g/km de CO2: etiqueta C y fiscalidad desfavorable en España.",
      "Red de servicio mínima en España y plazos largos al fabricarse bajo pedido."
    ],
    emisionesCo2: 175,
    etiquetaDgt: "C",
    euroncap: {
      ano: null,
      estrellas: null,
      nota: "Sin datos EuroNCAP: modelo no probado",
      url: null
    },
    fuenteNombre: "Autocar / Quantum Gallery",
    fuenteUrl: "https://quantumgallery.cl/modelos/morgan-supersport/",
    galeria: [
      {
        alt: "Morgan Supersport 2025, vista exterior del deportivo británico",
        alto: 675,
        ancho: 900,
        src: "/media/morgan-supersport-2025-precio-ficha-tecnica-oficial.webp"
      },
      {
        alt: "Interior artesanal del Morgan Supersport 2025",
        alto: 900,
        ancho: 1600,
        src: "/media/morgan-supersport-2025-precio-ficha-tecnica-interior-oficial.webp"
      },
      { src: "/media/morgan-supersport-2025-precio-ficha-tecnica-hunt1.webp", alt: "Supersport (foto: Morgan Motor Company (prensa oficial) vía The Zenith Magazine, licencia desconocida)", ancho: 1024, alto: 768 },
      { src: "/media/morgan-supersport-2025-precio-ficha-tecnica-hunt2.webp", alt: "Supersport (foto: Morgan Motor Company (prensa oficial) vía Autonoción, licencia desconocida)", ancho: 1130, alto: 848 },
      { src: "/media/morgan-supersport-2025-precio-ficha-tecnica-hunt3.webp", alt: "Supersport (foto: Morgan Motor Company (prensa oficial) vía Carsales, licencia desconocida)", ancho: 1023, alto: 682 },
    ],
    garantiaBateriaAnos: null,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: null,
    id: "morgan-supersport-2025-precio-ficha-tecnica",
    imagen: "/media/morgan-supersport-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/morgan-supersport-2025-precio-ficha-tecnica-interior-oficial.webp",
    imagenOficial: "/media/morgan-supersport-2025-precio-ficha-tecnica-oficial.webp",
    largoMm: null,
    maleteroL: null,
    marca: "Morgan",
    modelo: "Supersport",
    parNm: 500,
    pesoKg: 1170,
    planMantenimiento: null,
    plazas: 2,
    potenciaCv: 335,
    precioDesde: null, // Sin precio oficial en EUR verificado el 21/10/2026: PVP desde oficial Reino Unido: 102.000 GBP (versión con capota de lona; 105.000 GBP con techo duro), precio anunciado por Morgan en el lanzamiento ofi.
    pros: [
      "Sustituto del Plus Six con chasis de aluminio encolado revisado, nueva dirección y nuevos subchasis: el Morgan más dinámico de la historia.",
      "Motor BMW B58 3.0 biturbo de 335 CV y 500 Nm con cambio automático ZF de 8 velocidades: 0-100 km/h en 3,9 segundos.",
      "Peso en vacío de solo 1.170 kg, una cifra imposible para un deportivo moderno.",
      "Fabricación artesanal bajo pedido en Malvern (Reino Unido), totalmente personalizable.",
      "Diseño neoclásico con carrocería de aluminio sobre estructura de madera de fresno, fiel a más de un siglo de tradición.",
      "Disponible en España a través de Tayre, importador oficial de Morgan."
    ],
    tipo: "Gasolina",
    traccion: "Trasera",
    velocidadMax: 267,
    videoCanal: "Autocar",
    videoId: "7Zb_JY4UhaU"
  }
];
