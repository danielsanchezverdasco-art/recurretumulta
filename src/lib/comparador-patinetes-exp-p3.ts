// Fichas de patinetes eléctricos — Lote P3 (2026-10-05).
// Marcas: Nami, Teverun, Inmotion, Hiboy, iScooter, Kukirin, Joyor.
// Datos verificados el 2026-10-04 en webs oficiales de las marcas y retailers
// europeos verificados. Dato no verificado = null. autonomiaRealKm es
// estimación propia conservadora (~65-70 % de la declarada en ciudad).
import type { PatineteComparador } from "./comparador-patinetes-data.ts";

export const PATINETES_EXP_P3: PatineteComparador[] = [
  // ─────────────────────────── NAMI (6) ───────────────────────────
  {
    id: "nami-burn-e-3-max",
    videoId: "FBREPmvGoQM",
    videoCanal: "Max Blinker",
    marca: "Nami",
    modelo: "Burn-e 3 Max",
    precioEur: 4449,
    potenciaNominalW: 3000,
    potenciaPicoW: 8400,
    autonomiaKm: 135,
    autonomiaRealKm: 90,
    velocidadMaxKmh: 105,
    pesoKg: 47.5,
    cargaMaxKg: null,
    tiempoCargaH: null,
    bateriaWh: 2880,
    frenos: null,
    neumaticos: null,
    certificadoDgt: null,
    foto: "/media/patinetes/nami-burn-e-3-max-1.webp",
    galeria: [
      {
        src: "/media/fotos-reales/nami-burn-e-3-max/nami-burn-e-3-max-real-0.webp",
        alt: "Detalle del manillar y la pantalla del Nami Burn-e 3 Max",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/fotos-reales/nami-burn-e-3-max/nami-burn-e-3-max-real-1.webp",
        alt: "Nami Burn-e 3 Max circulando por ciudad",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaKm", "autonomiaRealKm", "velocidadMaxKmh", "pesoKg"],
    pros: [
      "8.400 W de potencia pico: aceleración de otro planeta",
      "Batería de 2.880 Wh (72V 40Ah): 120-150 km declarados",
      "Calidad de construcción de referencia: chasis de aluminio tratado y basculante de carbono",
      "Suspensión ajustable de largo recorrido, digna de moto",
      "Pantalla TFT a color con NFC y modos de conducción configurables",
    ],
    contras: [
      "4.449 €: precio de moto de verdad",
      "47,5 kg: imposible subirlo por escaleras o meterlo en un maletero normal",
      "No es un VMP legal para circular por España a esa velocidad (limitado a 25 km/h en Europa)",
      "Neumáticos y pastillas de freno de 11 pulgadas: recambios caros y poco comunes",
      "El seguro y la responsabilidad en caso de accidente son un tema serio a estas potencias",
    ],
    veredicto:
      "El hiperpatinete por excelencia: si buscas lo máximo en potencia y autonomía y el precio no es un problema, no hay rival. Para todo lo demás, es excesivo.",
    fuenteNombre: "AutoEvolution / Nami Electric",
    fuenteUrl:
      "https://www.autoevolution.com/news/burn-e3-max-e-scooter-can-hit-scary-top-speeds-and-costs-as-much-as-a-used-motorcycle-or-car-266165.html",
    mantenimientoDIY: {
      presionNeumaticos:
        "50 PSI (3,4 bar) como máximo en ambas ruedas según el manual oficial",
      ajusteFrenosPasos: [
        "Comprobar que el disco de freno esté bien equilibrado y que las pastillas tengan espesor suficiente",
        "Ajustar la posición de las pastillas con los dos tornillos de la pinza",
      ],
      aprieteTornilleria:
        "Cualquier reparación debe hacerla un profesional o un distribuidor oficial Nami (manual oficial)",
      trucos: [
        "Precarga de la suspensión: girar la contratuerca bajo el muelle (más dura al apretar); el rebote se regula con el anillo rojo: S más duro, F más blando",
        "No hacer mantenimiento con la batería encendida ni cargando",
        "Limpiar solo con paño húmedo: nada de alcohol, gasolina, queroseno ni agua a presión",
      ],
    },
  },
  {
    id: "nami-burn-e-3",
    videoId: null,
    videoCanal: null,
    marca: "Nami",
    modelo: "Burn-e 3",
    precioEur: 4099,
    potenciaNominalW: 2000,
    potenciaPicoW: 5040,
    autonomiaKm: 105,
    autonomiaRealKm: 70,
    velocidadMaxKmh: 72,
    pesoKg: 47,
    cargaMaxKg: null,
    tiempoCargaH: null,
    bateriaWh: 2160,
    frenos: null,
    neumaticos: null,
    certificadoDgt: null,
    foto: "/media/patinetes/nami-burn-e-3-1.webp",
    galeria: [
      {
        src: "/media/fotos-reales/nami-burn-e-3/nami-burn-e-3-real-0.webp",
        alt: "Detalle de la rueda delantera del Nami Burn-e 3",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/fotos-reales/nami-burn-e-3/nami-burn-e-3-real-1.webp",
        alt: "Nami Burn-e 3 en carretera abierta",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaKm", "autonomiaRealKm", "velocidadMaxKmh", "pesoKg"],
    pros: [
      "Doble motor de 1.000 W (5.040 W de pico): sobra potencia para cualquier cuesta",
      "Batería de 2.160 Wh (72V 30Ah): 100-110 km declarados",
      "Misma plataforma y acabados del Max, algo más contenido en precio",
      "Estabilidad a alta velocidad muy superior a la media",
      "Iluminación completa para rodar de noche con seguridad",
    ],
    contras: [
      "4.099 €: sigue siendo un desembolso enorme",
      "47 kg: traslúcido como trasto urbano diario",
      "En España solo legal limitado a 25 km/h: pagas potencia que no puedes usar en vía pública",
      "Mantenimiento de gama alta: no es un patinete para cualquier taller",
      "La batería tarda muchas horas en cargar al 100 %",
    ],
    veredicto:
      "La puerta de entrada al universo Burn-e: casi todo lo bueno del Max por algo menos de dinero. Sigue siendo un juguete para entusiastas, no un commuter.",
    fuenteNombre: "Nami Electric (distribuidores UE)",
    fuenteUrl: "https://bikescootercity.com.au/products/nami-klima-electric-scooter",
    mantenimientoDIY: {
      presionNeumaticos:
        "50 PSI (3,4 bar) como máximo en ambas ruedas según el manual oficial",
      ajusteFrenosPasos: [
        "Comprobar que el disco de freno esté bien equilibrado y que las pastillas tengan espesor suficiente",
        "Ajustar la posición de las pastillas con los dos tornillos de la pinza",
      ],
      aprieteTornilleria:
        "Cualquier reparación debe hacerla un profesional o un distribuidor oficial Nami (manual oficial)",
      trucos: [
        "Precarga de la suspensión: girar la contratuerca bajo el muelle (más dura al apretar); el rebote se regula con el anillo rojo: S más duro, F más blando",
        "No hacer mantenimiento con la batería encendida ni cargando",
        "Limpiar solo con paño húmedo: nada de alcohol, gasolina, queroseno ni agua a presión",
      ],
    },
  },
  {
    id: "nami-klima",
    videoId: "MBw6Pwt84IQ",
    videoCanal: "Electric Scooter Insider",
    marca: "Nami",
    modelo: "Klima",
    precioEur: 4449,
    potenciaNominalW: 2000,
    potenciaPicoW: 5360,
    autonomiaKm: 65,
    autonomiaRealKm: 44,
    velocidadMaxKmh: 65,
    pesoKg: 38,
    cargaMaxKg: null,
    tiempoCargaH: null,
    bateriaWh: 1500,
    frenos: null,
    neumaticos: null,
    certificadoDgt: null,
    foto: "/media/patinetes/nami-klima-1.webp",
    galeria: [
      {
        src: "/media/fotos-reales/nami-klima/nami-klima-real-0.webp",
        alt: "Detalle del manillar del Nami Klima",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/fotos-reales/nami-klima/nami-klima-real-1.webp",
        alt: "Nami Klima circulando por la ciudad",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["precioEur", "autonomiaKm", "autonomiaRealKm", "pesoKg"],
    pros: [
      "Lo mejor del Burn-e en formato compacto: 38 kg frente a 47 del grande",
      "5.360 W de pico: prestaciones serias con mejor manejabilidad",
      "Batería de 1.500 Wh (60V 25Ah) con buena autonomía real",
      "Suspensión hidráulica ajustable heredada de la gama alta",
      "Más práctico para el día a día que sus hermanos mayores",
    ],
    contras: [
      "Sin precio oficial: NAMI no publica una tarifa oficial verificable del Klima",
      "Precio en Europa sin confirmar de forma estable: varía mucho por importador",
      "38 kg siguen siendo muchos para cargarlo a diario",
      "No homologado como VMP para circular a su velocidad máxima en España",
      "Red de servicio técnico limitada fuera de grandes ciudades",
      "Los recambios específicos de Nami tardan en llegar",
    ],
    veredicto:
      "El Nami más equilibrado: prestaciones de hyper-scooter en un chasis más manejable. Ideal si vienes de un Burn-e y quieres algo menos bestia.",
    fuenteNombre: "Nami Electric (distribuidores UE)",
    fuenteUrl: "https://bikescootercity.com.au/products/nami-klima-electric-scooter",
  },
  {
    id: "nami-klima-max",
    videoId: "Ub7xNn_tfZM",
    videoCanal: "Escooter Ninja",
    marca: "Nami",
    modelo: "Klima Max",
    precioEur: 2449,
    potenciaNominalW: 2000,
    potenciaPicoW: 5360,
    autonomiaKm: 87,
    autonomiaRealKm: 59,
    velocidadMaxKmh: 70,
    pesoKg: 38,
    cargaMaxKg: null,
    tiempoCargaH: null,
    bateriaWh: 1800,
    frenos: null,
    neumaticos: null,
    certificadoDgt: null,
    foto: "/media/patinetes/nami-klima-max-1.webp",
    galeria: [
      {
        src: "/media/fotos-reales/nami-klima-max/nami-klima-max-real-0.webp",
        alt: "Detalle de la batería y la plataforma del Nami Klima Max",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/fotos-reales/nami-klima-max/nami-klima-max-real-1.webp",
        alt: "Nami Klima Max en uso urbano",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaKm", "autonomiaRealKm", "velocidadMaxKmh", "pesoKg"],
    pros: [
      "Batería LG de 1.800 Wh (60V 30Ah): 85-90 km declarados",
      "Mismo chasis ágil del Klima con mucha más autonomía",
      "2.449 €: precio razonable para lo que ofrece en su segmento",
      "Celdas LG: mejor reputación de durabilidad que genéricas",
      "Buen compromiso entre potencia, peso y alcance",
    ],
    contras: [
      "38 kg: no es un patinete para llevar en transporte público",
      "Sin homologación DGT como VMP: en España circula limitado a 25 km/h",
      "El cargador estándar tarda muchas horas; el rápido se paga aparte",
      "Postventa y repuestos dependen del importador",
      "Para ciudad pura hay opciones más ligeras y baratas",
    ],
    veredicto:
      "El Klima con la batería que debería llevar de serie: si te gusta la plataforma, el Max es la compra lógica por su autonomía real.",
    fuenteNombre: "Nami Electric (distribuidores UE)",
    fuenteUrl: "https://bikescootercity.com.au/products/nami-klima-electric-scooter",
  },
  {
    id: "nami-blast",
    videoId: "w7OsaNb_W6c",
    videoCanal: "NAMI Electric",
    marca: "Nami",
    modelo: "Blast",
    precioEur: 2299,
    potenciaNominalW: 2000,
    potenciaPicoW: null,
    autonomiaKm: 60,
    autonomiaRealKm: 40,
    velocidadMaxKmh: 70,
    pesoKg: 46,
    cargaMaxKg: null,
    tiempoCargaH: null,
    bateriaWh: 1680,
    frenos: null,
    neumaticos: null,
    certificadoDgt: null,
    foto: "/media/patinetes/nami-blast-1.webp",
    galeria: [
      {
        src: "/media/fotos-reales/nami-blast/nami-blast-real-0.webp",
        alt: "Detalle del frontal del Nami Blast",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/fotos-reales/nami-blast/nami-blast-real-1.webp",
        alt: "Nami Blast rodando por ciudad",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaKm", "autonomiaRealKm", "pesoKg"],
    pros: [
      "Doble motor de 1.000 W: tracción total con muy buena respuesta",
      "Batería de 1.680 Wh (60V 28Ah): 60 km declarados",
      "2.299 €: el Nami de doble motor más asequible",
      "Chasis robusto pensado para durar",
      "Buena estabilidad gracias a su peso y batalla larga",
    ],
    contras: [
      "46 kg: muy pesado para un uso urbano diario",
      "Autonomía contenida para su batería: el doble motor gasta",
      "No homologado DGT: en vía pública española, limitado a 25 km/h",
      "Sin red de talleres amplia en España",
      "El Blast Max ofrece mucho más por un salto de precio moderado",
    ],
    veredicto:
      "Tracción total Nami al precio más bajo de la marca, pero el peso y la autonomía lo dejan en tierra de nadie frente al Klima.",
    fuenteNombre: "Nami Electric (distribuidores UE)",
    fuenteUrl: "https://bikescootercity.com.au/products/nami-klima-electric-scooter",
  },
  {
    id: "nami-blast-max",
    videoId: "JKdv9FmZU10",
    videoCanal: "Scoota Gang",
    marca: "Nami",
    modelo: "Blast Max",
    precioEur: 4099,
    potenciaNominalW: 3000,
    potenciaPicoW: 8400,
    autonomiaKm: 100,
    autonomiaRealKm: 67,
    velocidadMaxKmh: 80,
    pesoKg: 45,
    cargaMaxKg: null,
    tiempoCargaH: null,
    bateriaWh: 2400,
    frenos: null,
    neumaticos: null,
    certificadoDgt: null,
    foto: "/media/patinetes/nami-blast-max-1.webp",
    galeria: [
      {
        src: "/media/fotos-reales/nami-blast-max/nami-blast-max-real-0.webp",
        alt: "Detalle de la doble suspensión del Nami Blast Max",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/fotos-reales/nami-blast-max/nami-blast-max-real-1.webp",
        alt: "Nami Blast Max en carretera",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["precioEur", "autonomiaKm", "autonomiaRealKm", "pesoKg"],
    pros: [
      "Doble motor de 1.500 W (8.400 W de pico): potencia de Burn-e en chasis Blast",
      "Batería de 2.400 Wh (60V 40Ah): 100 km declarados",
      "80 km/h de velocidad máxima declarada",
      "45 kg: algo más ligero que el Burn-e 3",
      "Ideal para quien quiere potencia sin subir al segmento Burn-e",
    ],
    contras: [
      "Sin precio oficial: NAMI no publica una tarifa oficial verificable del Blast Max",
      "Precio en Europa no publicado de forma oficial",
      "45 kg: sigue sin ser portable",
      "No es un VMP legal a su velocidad máxima en España",
      "Consume mucho a ritmo alto: la autonomía real cae en modo sport",
      "Repuestos y servicio técnico limitados",
    ],
    veredicto:
      "Un Burn-e con otro nombre en la práctica: potencia y batería enormes. Si lo encuentras a buen precio en un importador europeo, es una bestia.",
    fuenteNombre: "Nami Electric (distribuidores UE)",
    fuenteUrl: "https://bikescootercity.com.au/products/nami-klima-electric-scooter",
  },
  // ────────────────────────── TEVERUN (7) ──────────────────────────
  {
    id: "teverun-fighter-11",
    videoId: "bGbw2BTJGWc",
    videoCanal: "Energie Boost",
    marca: "Teverun",
    modelo: "Fighter 11",
    precioEur: 2250,
    potenciaNominalW: 2400,
    potenciaPicoW: 5000,
    autonomiaKm: 80,
    autonomiaRealKm: 54,
    velocidadMaxKmh: 85,
    pesoKg: 35,
    cargaMaxKg: 150,
    tiempoCargaH: null,
    bateriaWh: 1500,
    frenos: "Disco hidráulico Zoom delantero y trasero",
    neumaticos: '11" tubeless',
    certificadoDgt: false,
    foto: "/media/patinetes/teverun-fighter-11-1.webp",
    galeria: [
      {
        src: "/media/patinetes/teverun-fighter-11-2.webp",
        alt: "Detalle de la pantalla TFT del Teverun Fighter 11",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/patinetes/teverun-fighter-11-3.webp",
        alt: "Teverun Fighter 11 en circuito privado",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm"],
    pros: [
      "Doble motor de 1.200 W (5.000 W de pico): empuja muy fuerte",
      "Batería LG de 1.500 Wh (60V 25Ah): celdas de primeras marcas",
      "Frenos de disco hidráulicos Zoom: frenada seria para 85 km/h",
      "Pantalla TFT de 3,5 pulgadas con NFC",
      "35 kg: contenido para su categoría de potencia",
    ],
    contras: [
      "2.250 € y sin homologación DGT: en España solo legal a 25 km/h",
      "La batería tarda muchas horas con el cargador de serie",
      "El manillar, alto y ancho, no es ideal entre el tráfico denso",
      "Los neumáticos tubeless de 11\" pinchan menos, pero cambiarlos cuesta",
      "Teverun actualiza la gama cada poco: se devalúa rápido",
    ],
    veredicto:
      "El superventas de Teverun por méritos propios: potencia, batería LG y frenos hidráulicos por 2.250 €. Eso sí, en España es un capricho para circuito.",
    fuenteNombre: "Maz Rider (distribuidor UE)",
    fuenteUrl:
      "https://mazrider.com/en/products/electric-scooter-teverun-fighter-eleven-60-v-26-ah",
    mantenimientoDIY: {
      actualizacionFirmware:
        "App oficial Teverun por Bluetooth: modos de conducción, ajustes del TFT y bloqueo NFC",
      aprieteTornilleria:
        "Revisar periódicamente el apriete de todos los tornillos y tuercas (manual oficial)",
      intervaloRevision:
        "Revisar periódicamente la presión de los neumáticos y el sistema de frenos hidráulicos",
      trucos: [
        "Para guardarlo mucho tiempo, dejar la batería al 50-70 % y recargarla cada 1-2 meses",
        "Limpiar con paño húmedo, sin agua a presión sobre la electrónica",
      ],
    },
  },
  {
    id: "teverun-fighter-11-plus",
    videoId: "1o62UMK-Kiw",
    videoCanal: "Electric Vehicles Space",
    marca: "Teverun",
    modelo: "Fighter 11+",
    precioEur: 2159,
    potenciaNominalW: 3200,
    potenciaPicoW: null,
    autonomiaKm: 110,
    autonomiaRealKm: 74,
    velocidadMaxKmh: 85,
    pesoKg: null,
    cargaMaxKg: null,
    tiempoCargaH: null,
    bateriaWh: 2100,
    frenos: "Disco hidráulico de 4 pistones delantero y trasero",
    neumaticos: '11" tubeless',
    certificadoDgt: null,
    foto: "/media/patinetes/teverun-fighter-11-plus-1.webp",
    galeria: [
      {
        src: "/media/patinetes/teverun-fighter-11-plus-2.webp",
        alt: "Detalle de los frenos de 4 pistones del Teverun Fighter 11+",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/patinetes/teverun-fighter-11-plus-3.webp",
        alt: "Teverun Fighter 11+ V2026 en carretera",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaKm", "autonomiaRealKm"],
    pros: [
      "Versión V2026: pantalla TFT de 4 pulgadas con NFC y GPS integrado",
      "Frenos hidráulicos de 4 pistones: lo mejor de su segmento",
      "Amortiguador de dirección y suspensión hidráulica regulable",
      "Batería de 2.100 Wh: 100-120 km declarados según modo",
      "Cargador rápido incluido en la versión 2026",
    ],
    contras: [
      "2.159 €: el Fighter 11 normal ofrece casi lo mismo por menos",
      "Peso no publicado y previsiblemente por encima de 40 kg",
      "Disponibilidad por reserva: hay que esperar",
      "Sin homologación DGT como VMP en España",
      "El GPS integrado implica app y cuenta: más telemetría de tus rutas",
    ],
    veredicto:
      "El Fighter 11 llevado al extremo: si quieres lo último de Teverun con GPS y frenos de 4 pistones, este es. Si buscas valor, el 11 normal basta.",
    fuenteNombre: "Green220 (distribuidor UE)",
    fuenteUrl:
      "https://www.green220.com/en/e-scooters/463-electric-scooter-teverun-fighter-11plus-60-v-35-ah-3701522001434.html",
    mantenimientoDIY: {
      actualizacionFirmware:
        "App oficial Teverun por Bluetooth: modos de conducción, ajustes del TFT y bloqueo NFC",
    },
  },
  {
    id: "teverun-fighter-supreme",
    videoId: "ATG4_SNh5PI",
    videoCanal: "Electric Scooter Guide",
    marca: "Teverun",
    modelo: "Fighter Supreme 7260R",
    precioEur: 4500,
    potenciaNominalW: 5000,
    potenciaPicoW: 10000,
    autonomiaKm: 200,
    autonomiaRealKm: 135,
    velocidadMaxKmh: 120,
    pesoKg: null,
    cargaMaxKg: null,
    tiempoCargaH: null,
    bateriaWh: 4320,
    frenos: null,
    neumaticos: '13" tubeless',
    certificadoDgt: null,
    foto: "/media/patinetes/teverun-fighter-supreme-1.webp",
    galeria: [
      {
        src: "/media/patinetes/teverun-fighter-supreme-2.webp",
        alt: "Detalle de la rueda de 13 pulgadas del Teverun Fighter Supreme",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/patinetes/teverun-fighter-supreme-3.webp",
        alt: "Teverun Fighter Supreme 7260R en circuito",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaKm", "autonomiaRealKm"],
    pros: [
      "10.000 W de pico: el patinete de serie más potente del mercado",
      "Batería de 4.320 Wh (72V 60Ah): 200 km declarados",
      "Ruedas de 13 pulgadas: estabilidad de moto a alta velocidad",
      "120 km/h de velocidad máxima declarada",
      "App Teverun con BMS inteligente y telemetría completa",
    ],
    contras: [
      "4.500 €: territorio de moto eléctrica con matrícula",
      "Pesa una barbaridad: olvídate de subirlo a casa",
      "Ilegal en vía pública en España: solo circuito privado",
      "A 120 km/h necesitas equipación de moto, no de patinete",
      "El seguro para algo así es complicado y caro",
    ],
    veredicto:
      "Una moto sin carenado: el Supreme es un ejercicio de exceso con 10 kW. Impresionante como máquina, absurdo como transporte.",
    fuenteNombre: "Evolt (distribuidor UE)",
    fuenteUrl:
      "https://www.evolt.eu/products/electric-scooter-teverun-fighter-supreme-7260-ultra/",
    mantenimientoDIY: {
      actualizacionFirmware:
        "App oficial Teverun por Bluetooth: modos de conducción, BMS inteligente y bloqueo NFC",
    },
  },
  {
    id: "teverun-blade-gt-2",
    videoId: "yUx6o4jkNo8",
    videoCanal: "ELECTRICTOST",
    marca: "Teverun",
    modelo: "Blade GT II",
    precioEur: 2449,
    potenciaNominalW: 3200,
    potenciaPicoW: 5000,
    autonomiaKm: 110,
    autonomiaRealKm: 74,
    velocidadMaxKmh: 85,
    pesoKg: null,
    cargaMaxKg: null,
    tiempoCargaH: null,
    bateriaWh: 2100,
    frenos: null,
    neumaticos: null,
    certificadoDgt: null,
    foto: "/media/patinetes/teverun-blade-gt-2-1.webp",
    galeria: [
      {
        src: "/media/patinetes/teverun-blade-gt-2-2.webp",
        alt: "Detalle del chasis del Teverun Blade GT II",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/patinetes/teverun-blade-gt-2-3.webp",
        alt: "Teverun Blade GT II en uso",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["precioEur", "autonomiaKm", "autonomiaRealKm", "bateriaWh"],
    pros: [
      "Doble motor de 1.600 W (5.000 W de pico) con tres capacidades de batería",
      "Hasta 2.100 Wh (60V 35Ah): 80-140 km declarados según versión",
      "Chasis más ligero y ágil que la gama Fighter",
      "Buena relación peso/potencia para su segmento",
      "Pantalla TFT con NFC",
    ],
    contras: [
      "Sin precio oficial: Teverun no publica una tarifa oficial verificable del Blade GT II",
      "Precio en Europa variable según importador y versión de batería",
      "La versión de 26Ah se queda corta para el motor que lleva",
      "Sin homologación DGT: en España, limitado a 25 km/h",
      "La gama Blade se renueva constantemente: el tuyo envejece rápido",
      "Repuestos específicos que tardan en llegar desde el importador",
    ],
    veredicto:
      "El término medio de Teverun: potencia seria sin llegar a la locura del Supreme. Elige la batería de 35Ah o no merece la pena.",
    fuenteNombre: "Teverun (teverun.com)",
    fuenteUrl: "https://www.teverun.com/",
    mantenimientoDIY: {
      actualizacionFirmware:
        "App oficial Teverun por Bluetooth: modos de conducción, ajustes del TFT y bloqueo NFC",
      aprieteTornilleria:
        "Revisar periódicamente el apriete de todos los tornillos y tuercas (manual oficial)",
      intervaloRevision:
        "Revisar periódicamente la presión de los neumáticos y el sistema de frenos hidráulicos",
      trucos: [
        "Para guardarlo mucho tiempo, dejar la batería al 50-70 % y recargarla cada 1-2 meses",
        "Limpiar con paño húmedo, sin agua a presión sobre la electrónica",
      ],
    },
  },
  {
    id: "teverun-blade-gt-plus",
    videoId: "c1Wb_jKI_QA",
    videoCanal: "CruisingWheel",
    marca: "Teverun",
    modelo: "Blade GT+ II",
    precioEur: 2349,
    potenciaNominalW: 3000,
    potenciaPicoW: 4800,
    autonomiaKm: 100,
    autonomiaRealKm: 67,
    velocidadMaxKmh: 85,
    pesoKg: 35,
    cargaMaxKg: null,
    tiempoCargaH: null,
    bateriaWh: 2100,
    frenos: null,
    neumaticos: null,
    certificadoDgt: null,
    foto: "/media/patinetes/teverun-blade-gt-plus-1.webp",
    galeria: [
      {
        src: "/media/patinetes/teverun-blade-gt-plus-2.webp",
        alt: "Detalle del manillar del Teverun Blade GT+ II",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/patinetes/teverun-blade-gt-plus-3.webp",
        alt: "Teverun Blade GT+ II circulando",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm"],
    pros: [
      "Doble motor de 1.500 W (4.800 W máx.): empuje contundente",
      "Batería de 2.100 Wh (60V 35Ah): 100 km declarados",
      "35 kg: ligero para su potencia",
      "2.349 € con buena dotación de serie",
      "Comportamiento más dócil que la gama Fighter en ciudad",
    ],
    contras: [
      "Por 100 € menos el Fighter 11 ofrece batería LG y más nombre",
      "Sin homologación DGT como VMP en España",
      "La autonomía real en modo dual cae muy por debajo de los 100 km",
      "El display TFT se ve regular a pleno sol según usuarios",
      "Teverun saca versiones nuevas cada año: reventa complicada",
    ],
    veredicto:
      "Un gran doble motor disfrazado de gama media: si el Fighter te parece demasiado radical, el Blade GT+ II es su hermano sensato.",
    fuenteNombre: "Teverun (teverun.com)",
    fuenteUrl: "https://www.teverun.com/",
    mantenimientoDIY: {
      actualizacionFirmware:
        "App oficial Teverun por Bluetooth: modos de conducción, ajustes del TFT y bloqueo NFC",
      aprieteTornilleria:
        "Revisar periódicamente el apriete de todos los tornillos y tuercas (manual oficial)",
      intervaloRevision:
        "Revisar periódicamente la presión de los neumáticos y el sistema de frenos hidráulicos",
      trucos: [
        "Para guardarlo mucho tiempo, dejar la batería al 50-70 % y recargarla cada 1-2 meses",
        "Limpiar con paño húmedo, sin agua a presión sobre la electrónica",
      ],
    },
  },
  {
    id: "teverun-blade-q",
    videoId: null,
    videoCanal: null,
    marca: "Teverun",
    modelo: "Blade Q",
    precioEur: null,
    potenciaNominalW: null,
    potenciaPicoW: 670,
    autonomiaKm: 30,
    velocidadMaxKmh: 33,
    pesoKg: 20,
    cargaMaxKg: 120,
    tiempoCargaH: null,
    bateriaWh: 360,
    frenos: "Freno de tambor",
    neumaticos: null,
    certificadoDgt: null,
    foto: "/media/patinetes/teverun-blade-q-1.webp",
    galeria: [
      {
        "src": "/media/patinetes/teverun-blade-q-2.webp",
        "alt": "Detalle del Teverun Blade Q plegado",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/patinetes/teverun-blade-q-3.webp",
        "alt": "Teverun Blade Q en la ciudad",
        "ancho": 1200,
        "alto": 800
      }
    ],
    aprox: [
      "potenciaPicoW",
      "autonomiaKm",
      "velocidadMaxKmh",
      "pesoKg",
      "bateriaWh",
      "frenos"
    ],
    pros: [
      "Es el Blade Q básico de un solo motor, más ligero (20 kg según el distribuidor) que el Blade Q Pro",
      "Suspensión de muelles delante y detrás",
      "Plegado compacto, pensado como segundo patinete o para llevar en el maletero",
      "Los 120 kg de carga máxima coinciden con la ficha del Blade Q Pro"
    ],
    contras: [
      "Teverun no lo vende hoy como modelo propio: sus tiendas oficiales solo ofrecen el Blade Q Pro, así que no hay precio oficial en euros",
      "Las cifras de esta ficha proceden de un distribuidor: Dato orientativo, no oficial: puede contener errores",
      "30 km declarados con una batería de unos 360 Wh: queda corto para trayectos largos",
      "33 km/h no es legal en vía pública española sin limitar a 25 km/h"
    ],
    veredicto: "Antes de comprar un Blade Q conviene confirmar con el vendedor qué versión es, porque Teverun solo documenta oficialmente el Blade Q Pro (doble motor, 540 Wh, 639 €). Si te interesa la gama, mira primero la ficha del Blade Q Pro, que sí tiene datos del fabricante.",
    fuenteNombre: "Wilson eBikes (distribuidor; sin ficha oficial del fabricante)",
    fuenteUrl: "https://www.wilsonebikes.com/product/teverun-blade-q-electric-scooter/",
    mantenimientoDIY: {
      "actualizacionFirmware": "App oficial Teverun por Bluetooth: modos de conducción, ajustes del TFT y bloqueo NFC",
      "aprieteTornilleria": "Revisar periódicamente el apriete de todos los tornillos y tuercas (manual oficial)",
      "intervaloRevision": "Revisar periódicamente la presión de los neumáticos y el sistema de frenos hidráulicos",
      "trucos": [
        "Para guardarlo mucho tiempo, dejar la batería al 50-70 % y recargarla cada 1-2 meses",
        "Limpiar con paño húmedo, sin agua a presión sobre la electrónica"
      ]
    },
    fuentesExtra: [
      {
        "nombre": "Wilson eBikes (distribuidor): Blade Q de un motor, 36 V 10 Ah, 670 W máximos, 33 km/h, 30 km, 20 kg, freno de tambor. Dato orientativo, no oficial: puede contener errores",
        "url": "https://www.wilsonebikes.com/product/teverun-blade-q-electric-scooter/",
        "fecha": "2026-10-31"
      },
      {
        "nombre": "Teverun Alemania: el modelo que vende como Blade Q Pro (2×350 W, 540 Wh, 639 €)",
        "url": "https://teverun-official.de/produkt/teverun-blade-q-pro-36-v-15-ah-2x350-w-1-848-w/",
        "fecha": "2026-10-31"
      },
      {
        "nombre": "BOE: Real Decreto 518/2026 (casco y edad mínima de 15 años en VMP)",
        "url": "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-13889",
        "fecha": "2026-06-26"
      }
    ],
    datosVerificadosEl: "2026-10-31",
    rivalesTabla: [
      {
        "id": "teverun-blade-q-pro",
        "nombre": "Teverun Blade Q Pro",
        "precioEur": 639,
        "autonomiaKm": 40,
        "potenciaW": 700,
        "pesoKg": 26,
        "nota": "Teverun Alemania (oficial)"
      },
      {
        "id": "navee-gt3",
        "nombre": "NAVEE GT3",
        "precioEur": 600,
        "autonomiaKm": 50,
        "potenciaW": 500,
        "pesoKg": 21,
        "nota": "Nota de prensa oficial de Navee"
      },
      {
        "id": "smartgyro-k2-pro",
        "nombre": "SmartGyro K2 Pro",
        "precioEur": 799,
        "autonomiaKm": 60,
        "potenciaW": 900,
        "pesoKg": 22,
        "nota": "SmartGyro / MediaMarkt"
      }
    ],
    faqExtra: [
      {
        "q": "¿Qué diferencia hay entre el Teverun Blade Q y el Blade Q Pro?",
        "a": "En las tiendas oficiales de Teverun (Alemania y Chequia) solo encontramos a la venta el Blade Q Pro, con dos motores de 350 W y batería de 36 V 15 Ah (540 Wh). El Blade Q de un motor, con batería de 36 V 10 Ah, aparece en distribuidores como Wilson eBikes. Los datos de esta ficha son de ese distribuidor y no están confirmados por el fabricante."
      },
      {
        "q": "¿Por qué esta ficha no muestra precio?",
        "a": "Teverun no publica un precio oficial en euros del Blade Q de un motor. El importe de 2.449 € que figuraba antes no se puede sostener con ninguna fuente y lo hemos retirado. Para el Blade Q Pro, Teverun Alemania indica 639 €."
      },
      {
        "q": "¿Puede circular el Blade Q por la ciudad?",
        "a": "Solo si la velocidad está limitada a 25 km/h (Reglamento General de Vehículos, modificado por el Real Decreto 970/2020) y dispones de certificado de características. Los 33 km/h que anuncia el distribuidor solo valen en terreno privado. Casco homologado o certificado y abrochado (artículo 118.3 del Reglamento General de Circulación) y 15 años cumplidos (artículo 155.3), según el Real Decreto 518/2026 en vigor desde el 1 de octubre de 2026."
      }
    ],
    autonomiaRealKm: null
  },
  {
    id: "teverun-blade-q-pro",
    videoId: "7SZcDbWBpsc",
    videoCanal: "Lando Cycle",
    marca: "Teverun",
    modelo: "Blade Q Pro",
    precioEur: 639,
    potenciaNominalW: 700,
    potenciaPicoW: 1848,
    autonomiaKm: 40,
    autonomiaRealKm: 27,
    velocidadMaxKmh: 25,
    pesoKg: 26,
    cargaMaxKg: 120,
    tiempoCargaH: null,
    bateriaWh: 540,
    frenos: "Discos mecánicos",
    neumaticos: "Tubeless de 8,5\"",
    certificadoDgt: null,
    foto: "/media/patinetes/teverun-blade-q-pro-oficial.webp",
    galeria: [
      {
        "src": "/media/patinetes/teverun-blade-q-pro-2.webp",
        "alt": "Detalle de la plataforma del Teverun Blade Q Pro",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/patinetes/teverun-blade-q-pro-3.webp",
        "alt": "Teverun Blade Q Pro en ruta urbana",
        "ancho": 1200,
        "alto": 800
      }
    ],
    aprox: [
      "autonomiaRealKm"
    ],
    pros: [
      "Dos motores de 350 W (hasta 1.848 W de pico según Teverun) en un patinete de 26 kg",
      "Selector SINGLE/DUAL: se puede rodar solo con el motor trasero para estirar la batería",
      "Frenos de disco mecánicos y neumáticos tubeless de 8,5 pulgadas con suspensión de muelles",
      "639 € en la tienda oficial alemana: tracción total a precio de gama media",
      "Garantía oficial de 2 años en el patinete y en la batería"
    ],
    contras: [
      "Batería de 36 V 15 Ah (540 Wh): los 40 km son el máximo declarado, no el uso real",
      "Teverun lo vende para uso privado fuera de vías públicas; a 25 km/h limitado necesita su certificado para circular",
      "Versiones de 48 V 15 Ah que venden otras tiendas no coinciden con la ficha oficial europea",
      "Tienda oficial sin stock en la consulta del 31/10/2026",
      "Peso: 26 kg en la web alemana y 24 kg en otras tiendas, sin cifra única oficial"
    ],
    veredicto: "Por 639 € ofrece doble motor, discos y suspensión en un formato compacto. Es un patinete para trayectos cortos: la batería de 540 Wh y el límite de 25 km/h marcan su alcance, y antes de usarlo en la calle hay que comprobar su certificado DGT, que la marca no menciona.",
    fuenteNombre: "Teverun Alemania (tienda oficial)",
    fuenteUrl: "https://teverun-official.de/produkt/teverun-blade-q-pro-36-v-15-ah-2x350-w-1-848-w/",
    mantenimientoDIY: {
      "actualizacionFirmware": "App oficial Teverun por Bluetooth: modos de conducción, ajustes del TFT y bloqueo NFC",
      "aprieteTornilleria": "Revisar periódicamente el apriete de todos los tornillos y tuercas (manual oficial)",
      "intervaloRevision": "Revisar periódicamente la presión de los neumáticos y el sistema de frenos hidráulicos",
      "trucos": [
        "Para guardarlo mucho tiempo, dejar la batería al 50-70 % y recargarla cada 1-2 meses",
        "Limpiar con paño húmedo, sin agua a presión sobre la electrónica"
      ]
    },
    fuentesExtra: [
      {
        "nombre": "Teverun Alemania: ficha oficial del Blade Q Pro (2×350 W, 36 V 15 Ah / 540 Wh, 25 km/h limitado, 639 €; en la consulta figuraba agotado)",
        "url": "https://teverun-official.de/produkt/teverun-blade-q-pro-36-v-15-ah-2x350-w-1-848-w/",
        "fecha": "2026-10-31"
      },
      {
        "nombre": "Teverun: manual oficial del Blade Q (selector ECO/TURBO y SINGLE/DUAL, 120 kg)",
        "url": "https://teverun.cz/manual/cz_BLADE-Q-manual.pdf"
      },
      {
        "nombre": "BOE: Real Decreto 518/2026 (casco y edad mínima de 15 años en VMP)",
        "url": "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-13889",
        "fecha": "2026-06-26"
      }
    ],
    datosVerificadosEl: "2026-10-31",
    rivalesTabla: [
      {
        "id": "teverun-blade-mini-pro",
        "nombre": "Teverun Blade Mini Pro",
        "precioEur": 990,
        "autonomiaKm": 55,
        "potenciaW": 1000,
        "pesoKg": 29,
        "nota": "Liontec"
      },
      {
        "id": "kukirin-g2-max",
        "nombre": "KuKirin G2 Max",
        "precioEur": 684,
        "autonomiaKm": 80,
        "potenciaW": 1000,
        "pesoKg": 31,
        "nota": "KuKirin EU"
      },
      {
        "id": "smartgyro-k2-pro",
        "nombre": "SmartGyro K2 Pro",
        "precioEur": 799,
        "autonomiaKm": 60,
        "potenciaW": 900,
        "pesoKg": 22,
        "nota": "SmartGyro / MediaMarkt"
      }
    ],
    faqExtra: [
      {
        "q": "¿Cuánto cuesta el Teverun Blade Q Pro?",
        "a": "Teverun Alemania lo anuncia a 639 € (consulta del 31/10/2026, con el producto agotado en ese momento). Otras tiendas fuera de la UE lo venden con batería de 48 V, así que compara siempre que el modelo sea la versión europea de 36 V 15 Ah."
      },
      {
        "q": "¿Es el Blade Q Pro un patinete para circular por la calle en España?",
        "a": "Teverun lo describe como «para uso privado fuera de las vías públicas» y limita de fábrica la velocidad a 25 km/h, que es el límite de construcción de un VMP (Reglamento General de Vehículos, modificado por el Real Decreto 970/2020). El modo de 40 km/h tras desbloquear solo vale en terreno privado. La marca no publica certificado de la DGT."
      },
      {
        "q": "¿Qué hace el interruptor SINGLE/DUAL?",
        "a": "Según el manual oficial, SINGLE mueve el patinete solo con el motor trasero y DUAL activa los dos motores. Teverun recomienda usar los dos con regularidad para repartir la carga eléctrica."
      },
      {
        "q": "¿Qué exige la ley para usarlo?",
        "a": "Casco homologado o certificado y abrochado (artículo 118.3 del Reglamento General de Circulación) y 15 años cumplidos (artículo 155.3), según el Real Decreto 518/2026 en vigor desde el 1 de octubre de 2026."
      }
    ]
  },
  // ────────────────────────── INMOTION (6) ─────────────────────────
  {
    id: "inmotion-air",
    videoId: null,
    videoCanal: null,
    marca: "Inmotion",
    modelo: "Air",
    precioEur: 2250,
    potenciaNominalW: 350,
    potenciaPicoW: 720,
    autonomiaKm: 35,
    autonomiaRealKm: 23,
    velocidadMaxKmh: 25,
    pesoKg: 15.6,
    cargaMaxKg: 120,
    tiempoCargaH: 4.5,
    bateriaWh: 270,
    frenos: "Tambor delantero + freno electrónico trasero",
    neumaticos: '10" neumáticos',
    certificadoDgt: null,
    foto: "/media/patinetes/inmotion-air-1.webp",
    galeria: [
      {
        src: "/media/patinetes/inmotion-air-2.webp",
        alt: "Detalle del manillar y display del InMotion Air",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/patinetes/inmotion-air-3.webp",
        alt: "InMotion Air plegado junto a una mochila",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["precioEur", "autonomiaRealKm"],
    pros: [
      "Con 15,6 kg, está entre los más ligeros que montan ruedas de 10 pulgadas",
      "Sus 720 W de pico le permiten subir pendientes del 18 % sin apuros",
      "Chasis con IP55 y batería con IP67, así que soporta lluvia intensa sin problemas",
      "La app de InMotion añade bloqueo, modos de conducción y estadísticas",
      "Se pliega con un solo clic, perfecto para combinarlo con el transporte público",
    ],
    contras: [
      "La marca no publica una tarifa oficial verificable para el Air en Europa",
      "35 km declarados, justos si tu trayecto supera los 10 km",
      "Sin suspensión, los baches se notan",
      "El freno de tambor delantero exige más mantenimiento que el disco",
      "En España no hay un precio publicado de forma estable",
      "En modo Sport, la autonomía real baja de 25 km",
    ],
    veredicto:
      "El urbano ligero bien hecho: pesa poco, está bien construido y la app suma. Perfecto para últimos kilómetros, no para grandes distancias.",
    fuenteNombre: "InMotion France",
    fuenteUrl: "https://www.inmotion-france.fr/en/inmotion-air-pro-electric-scooter",
    mantenimientoDIY: {
      presionNeumaticos: "3,5 bar (50 PSI) máximo según el manual",
      actualizacionFirmware:
        "App oficial InMotion por Bluetooth: modos D/S, bloqueo y estadísticas de ruta",
    },
  },
  {
    id: "inmotion-air-pro",
    videoId: "0wytremL-uE",
    videoCanal: "T-Dot Wheels",
    marca: "Inmotion",
    modelo: "Air Pro",
    precioEur: 2250,
    potenciaNominalW: 400,
    potenciaPicoW: 750,
    autonomiaKm: 48,
    autonomiaRealKm: 32,
    velocidadMaxKmh: 35,
    pesoKg: 17.7,
    cargaMaxKg: 120,
    tiempoCargaH: 8.5,
    bateriaWh: 438,
    frenos: "Tambor delantero + freno electrónico trasero",
    neumaticos: '10" delantero neumático, trasero macizo',
    certificadoDgt: null,
    foto: "/media/patinetes/inmotion-air-pro-1.webp",
    galeria: [
      {
        src: "/media/patinetes/inmotion-air-pro-2.webp",
        alt: "Detalle de la rueda trasera del InMotion Air Pro",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/patinetes/inmotion-air-pro-3.webp",
        alt: "InMotion Air Pro en un carril bici",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm"],
    pros: [
      "Sus 438 Wh dan 48 km declarados, de lo mejor para su peso",
      "Los 750 W de pico y el 20 % de pendiente máxima resuelven cuestas serias",
      "Con 17,7 kg sigue siendo portable para subirlo a casa o al transporte",
      "El sellado IP55/IP67 contra el agua está por encima de la media",
      "La rueda trasera maciza elimina los pinchazos atrás",
    ],
    contras: [
      "Las 8,5 horas de carga obligan a cargarlo toda la noche",
      "La rueda trasera maciza transmite más vibración que una hinchable",
      "Sus 35 km/h no son legales en vía pública española",
      "No trae suspensión ni intermitentes",
      "Sus 2.250 € lo sitúan entre los patinetes urbanos más caros",
    ],
    veredicto:
      "El Air que por fin tiene autonomía: si 35 km se te quedan cortos, el Pro responde. Solo la carga lenta empaña el conjunto.",
    fuenteNombre: "InMotion France",
    fuenteUrl: "https://www.inmotion-france.fr/en/inmotion-air-pro-electric-scooter",
    mantenimientoDIY: {
      presionNeumaticos: "3,5 bar (50 PSI) máximo en la rueda delantera",
      actualizacionFirmware:
        "App oficial InMotion por Bluetooth: modos D/S, bloqueo y estadísticas de ruta",
    },
  },
  {
    id: "inmotion-rs-lite",
    videoId: "VIVI64xmjUw",
    videoCanal: "Scoota Gang",
    marca: "Inmotion",
    modelo: "RS Lite",
    precioEur: 2492.63, // tarifa oficial Europa (tienda oficial Inmotion Francia) (verificado 20/10/2026),
    potenciaNominalW: 3000,
    potenciaPicoW: 6000,
    autonomiaKm: 120,
    autonomiaRealKm: 80,
    velocidadMaxKmh: 90,
    pesoKg: 52.6,
    cargaMaxKg: null,
    tiempoCargaH: null,
    bateriaWh: 2160,
    frenos: null,
    neumaticos: null,
    certificadoDgt: null,
    foto: "/media/patinetes/inmotion-rs-lite-1.webp",
    galeria: [
      {
        src: "/media/patinetes/inmotion-rs-lite-2.webp",
        alt: "Detalle del frontal del InMotion RS Lite",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/patinetes/inmotion-rs-lite-3.webp",
        alt: "InMotion RS Lite en circuito",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["velocidadMaxKmh", "autonomiaRealKm"],
    pros: [
      "Doble motor de 1.500 W (6.000 W de pico): prestaciones de hyper-scooter",
      "Batería de 2.160 Wh (72V 30Ah): 120 km declarados",
      "La versión 'contenida' del RS: algo más civilizada",
      "Chasis RS con fama de muy buena estabilidad",
      "Pantalla y electrónica de nivel alto",
    ],
    contras: [
      "52,6 kg: un mueble con ruedas",
      "Ilegal en vía pública española a su velocidad máxima",
      "El RS normal ofrece más por poco más",
      "Mantenimiento y recambios de nicho",
    ],
    veredicto:
      "El RS para quien no necesita el Midnight: sigue siendo excesivo para el 99 % de los mortales, pero algo menos que su hermano mayor.",
    fuenteNombre: "InMotion (voromotors.com)",
    fuenteUrl: "https://www.voromotors.com/",
    mantenimientoDIY: {
      presionNeumaticos:
        "2,5 a 3,5 bar (rango ideal según el manual oficial)",
      actualizacionFirmware:
        "App oficial INMOTION por Bluetooth (iOS/Android)",
      trucos: [
        "Revisar la presión antes de cada salida: más presión da más autonomía, menos presión da más confort en baches",
        "Si no se usa en mucho tiempo, cargarlo una vez cada 3 meses",
        "Usar siempre el cargador original y tapar bien el puerto tras cargar",
      ],
    },
  },
  {
    id: "inmotion-rs-midnight",
    videoId: "ZQPKyk4vZAs",
    videoCanal: "Ginger On Wheels",
    marca: "Inmotion",
    modelo: "RS Midnight",
    precioEur: 3600, // 3.999 $ (tarifa oficial EE. UU.) ÷ 1,1225 (BCE 19/10/2026), redondeado a la centena,
    potenciaNominalW: 4000,
    potenciaPicoW: 8400,
    autonomiaKm: 96,
    autonomiaRealKm: 64,
    velocidadMaxKmh: 96,
    pesoKg: 58,
    cargaMaxKg: null,
    tiempoCargaH: null,
    bateriaWh: 2880,
    frenos: null,
    neumaticos: null,
    certificadoDgt: null,
    foto: "/media/patinetes/inmotion-rs-midnight-1.webp",
    galeria: [
      {
        src: "/media/patinetes/inmotion-rs-midnight-2.webp",
        alt: "Detalle del InMotion RS Midnight de noche",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/patinetes/inmotion-rs-midnight-3.webp",
        alt: "InMotion RS Midnight en recta de circuito",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["precioEur", "autonomiaRealKm"],
    pros: [
      "Doble motor de 2.000 W (8.400 W de pico): aceleración brutal",
      "Batería de 2.880 Wh (72V 40Ah)",
      "96 km/h declarados: entre los más rápidos del mundo",
      "Acabado Midnight: el RS más espectacular visualmente",
      "Electrónica InMotion, de las más fiables del segmento",
    ],
    contras: [
      "El precio es una estimación: conversión de la tarifa oficial de EE. UU. (3.999 $); Inmotion no vende el RS Midnight oficialmente en España",
      "En España solo tiene sentido en circuito privado",
      "El seguro y la responsabilidad a 96 km/h son un problema real",
      "Cargar 2.880 Wh lleva una eternidad sin cargador rápido",
      "Si se estropea algo, pocos talleres lo tocan",
    ],
    veredicto:
      "El capricho definitivo: 8,4 kW en un patinete. Como máquina impresiona; como compra sensata, no hay por dónde cogerlo.",
    fuenteNombre: "InMotion (voromotors.com)",
    fuenteUrl: "https://www.voromotors.com/",
    mantenimientoDIY: {
      presionNeumaticos:
        "2,5 a 3,5 bar (rango ideal según el manual oficial)",
      actualizacionFirmware:
        "App oficial INMOTION por Bluetooth (iOS/Android)",
      trucos: [
        "Revisar la presión antes de cada salida: más presión da más autonomía, menos presión da más confort en baches",
        "Si no se usa en mucho tiempo, cargarlo una vez cada 3 meses",
        "Usar siempre el cargador original y tapar bien el puerto tras cargar",
      ],
    },
  },
  {
    id: "inmotion-s1f",
    videoId: "HsBDMnQd2bg",
    videoCanal: "T-Dot Wheels",
    marca: "Inmotion",
    modelo: "S1F",
    precioEur: 625,
    potenciaNominalW: 500,
    potenciaPicoW: 1000,
    autonomiaKm: 87,
    autonomiaRealKm: 59,
    velocidadMaxKmh: 40,
    pesoKg: 24,
    cargaMaxKg: null,
    tiempoCargaH: null,
    bateriaWh: 675,
    frenos: null,
    neumaticos: null,
    certificadoDgt: null,
    foto: "/media/patinetes/inmotion-s1f-1.webp",
    galeria: [
      {
        src: "/media/patinetes/inmotion-s1f-2.webp",
        alt: "Detalle del display del InMotion S1F",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/patinetes/inmotion-s1f-3.webp",
        alt: "InMotion S1F en ciudad",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaKm", "autonomiaRealKm", "velocidadMaxKmh"],
    pros: [
      "675 Wh (54V 12,5Ah): 80-95 km declarados, autonomía de largo recorrido",
      "625 €: precio muy competitivo para esa batería",
      "500 W nominales (1.000 W de pico): solvente en cuestas",
      "24 kg: peso razonable para su autonomía",
      "InMotion: marca con buena fama de fiabilidad electrónica",
    ],
    contras: [
      "A 40 km/h no es un VMP legal en España sin limitar a 25",
      "Diseño algo genérico frente a la competencia",
      "La autonomía real en modo rápido cae bastante",
      "Red de distribución en España mejorable",
      "Sin muchos extras: es un patinete honesto y punto",
    ],
    veredicto:
      "Autonomía de 90 km por 625 €: el S1F es de los reyes del coste por kilómetro. Si haces muchos kilómetros, míralo en serio.",
    fuenteNombre: "InMotion (iroll.co.za)",
    fuenteUrl: "https://www.iroll.co.za/",
    mantenimientoDIY: {
      actualizacionFirmware:
        "App oficial INMOTION por Bluetooth (iOS/Android)",
      trucos: [
        "Revisar la presión de los neumáticos antes de cada salida (manual oficial)",
      ],
    },
  },
  {
    id: "inmotion-l9",
    videoId: "RtzjfPhNYDs",
    videoCanal: "INMOTION Global",
    marca: "Inmotion",
    modelo: "L9",
    precioEur: 2349,
    potenciaNominalW: 500,
    potenciaPicoW: 1000,
    autonomiaKm: 95,
    autonomiaRealKm: 64,
    velocidadMaxKmh: 30,
    pesoKg: 23.9,
    cargaMaxKg: null,
    tiempoCargaH: null,
    bateriaWh: 675,
    frenos: null,
    neumaticos: null,
    certificadoDgt: null,
    foto: "/media/patinetes/inmotion-l9-1.webp",
    galeria: [
      {
        src: "/media/patinetes/inmotion-l9-2.webp",
        alt: "Detalle del InMotion L9",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/patinetes/inmotion-l9-3.webp",
        alt: "InMotion L9 en ruta",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["precioEur", "autonomiaRealKm", "velocidadMaxKmh"],
    pros: [
      "675 Wh: 95 km declarados, autonomía top en su clase",
      "500 W (1.000 W de pico): bien resuelto en ciudad",
      "23,9 kg: ligero para la batería que lleva",
      "Velocidad contenida (25-30 km/h): uso urbano legal sin líos",
      "Buena eficiencia: muchos km por cada carga",
    ],
    contras: [
      "Sin precio oficial: Inmotion no publica una tarifa oficial vigente verificable del L9",
      "Precio en euros no publicado: solo referencia en dólares",
      "Estética conservadora",
      "Sin suspensión delantera de nivel",
      "La marca lo promociona poco en Europa",
      "A 30 km/h se queda corto si buscas diversión",
    ],
    veredicto:
      "Un commuter de larga autonomía sin estridencias: si priorizas kilómetros por carga sobre velocidad, el L9 cumple.",
    fuenteNombre: "InMotion (levyelectric.com)",
    fuenteUrl: "https://www.levyelectric.com/",
    mantenimientoDIY: {
      actualizacionFirmware:
        "App oficial INMOTION por Bluetooth (iOS/Android)",
      trucos: [
        "Revisar la presión de los neumáticos antes de cada salida (manual oficial)",
      ],
    },
  },
  // ─────────────────────────── HIBOY (7) ──────────────────────────
  {
    id: "hiboy-s2-lite",
    videoId: "5ybfduXMqiM",
    videoCanal: "Top Tech ChoiX",
    marca: "Hiboy",
    modelo: "S2 Lite",
    precioEur: 200, // 269,99 $ (tarifa oficial EE. UU.) ÷ 1,1225 (BCE 19/10/2026), redondeado a la centena,
    potenciaNominalW: 250,
    potenciaPicoW: 400,
    autonomiaKm: 17,
    autonomiaRealKm: 11,
    velocidadMaxKmh: 21,
    pesoKg: 9.9,
    cargaMaxKg: null,
    tiempoCargaH: null,
    bateriaWh: 180,
    frenos: null,
    neumaticos: null,
    certificadoDgt: null,
    foto: "/media/patinetes/hiboy-s2-lite-1.webp",
    galeria: [
      {
        src: "/media/patinetes/hiboy-s2-lite-2.webp",
        alt: "Detalle del Hiboy S2 Lite plegado",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/patinetes/hiboy-s2-lite-3.webp",
        alt: "Hiboy S2 Lite en el metro",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["precioEur", "autonomiaRealKm"],
    pros: [
      "9,9 kg: lo subes por escaleras sin enterarte",
      "Ideal como patinete de último kilómetro",
      "Precio de acceso a la marca Hiboy",
      "Plegado rápido y compacto",
      "Suficiente para trayectos cortos y llanos",
    ],
    contras: [
      "El precio es una estimación: conversión de la tarifa oficial de EE. UU. (269,99 $); Hiboy no vende oficialmente en España",
      "17 km declarados: autonomía muy justa",
      "250 W: las cuestas se le atragantan",
      "Batería de 180 Wh: pequeña hasta para su segmento",
      "Sin extras: display básico y acabados simples",
      "A poco que peses más de 80 kg, sufre",
    ],
    veredicto:
      "Un patinete pluma para distancias cortas: si lo quieres para 3-4 km llanos al día, perfecto. Para más, mira el S2 normal.",
    fuenteNombre: "Hiboy (hiboy.com)",
    fuenteUrl: "https://www.hiboy.com/",
    mantenimientoDIY: {
      actualizacionFirmware:
        "App oficial Hiboy por Bluetooth: estadísticas, bloqueo, control de crucero y autodiagnóstico",
      aprieteTornilleria:
        "Comprobar antes de cada salida que tornillos, tuercas y fijaciones estén seguros (manual oficial Hiboy)",
      trucos: [
        "Limpiar con paño húmedo: nada de agua a presión ni productos agresivos",
        "Revisar periódicamente el desgaste de frenos y pastillas",
      ],
    },
  },
  {
    id: "hiboy-max-pro",
    videoId: "wAA8I7mAK9A",
    videoCanal: "RK9 Rides",
    marca: "Hiboy",
    modelo: "Max Pro",
    precioEur: 600, // 656,98 $ (tarifa oficial EE. UU.) ÷ 1,1225 (BCE 19/10/2026), redondeado a la centena,
    potenciaNominalW: 500,
    potenciaPicoW: 650,
    autonomiaKm: 75,
    autonomiaRealKm: 50,
    velocidadMaxKmh: 35,
    pesoKg: 23.4,
    cargaMaxKg: null,
    tiempoCargaH: null,
    bateriaWh: 720,
    frenos: null,
    neumaticos: null,
    certificadoDgt: null,
    foto: "/media/patinetes/hiboy-max-pro-1.webp",
    galeria: [
      {
        src: "/media/patinetes/hiboy-max-pro-2.webp",
        alt: "Detalle de la batería del Hiboy Max Pro",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/patinetes/hiboy-max-pro-3.webp",
        alt: "Hiboy Max Pro en carril bici",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["precioEur", "autonomiaRealKm"],
    pros: [
      "720 Wh (48V 15Ah): 75 km declarados",
      "500 W (650 W de pico): buen empuje urbano",
      "23,4 kg: peso contenido para su batería",
      "35 km/h: alegre en vías privadas",
      "Hiboy tiene buena disponibilidad de repuestos en EE. UU. y UE",
    ],
    contras: [
      "El precio es una estimación: conversión de la tarifa oficial de EE. UU. (656,98 $); Hiboy no vende oficialmente en España",
      "A 35 km/h no es legal en vía pública española",
      "La autonomía real ronda los 50 km en uso mixto",
      "El asiento no está incluido de serie",
      "Acabados correctos sin lujos",
      "La app Hiboy es mejorable según usuarios",
    ],
    veredicto:
      "Mucho patinete por su precio habitual: batería grande y motor solvente. Un superventas lógico para commuters exigentes.",
    fuenteNombre: "Hiboy (hiboy.com)",
    fuenteUrl: "https://www.hiboy.com/",
    mantenimientoDIY: {
      actualizacionFirmware:
        "App oficial Hiboy por Bluetooth: estadísticas, bloqueo, control de crucero y autodiagnóstico",
      aprieteTornilleria:
        "Comprobar antes de cada salida que tornillos, tuercas y fijaciones estén seguros (manual oficial Hiboy)",
      trucos: [
        "Limpiar con paño húmedo: nada de agua a presión ni productos agresivos",
        "Revisar periódicamente el desgaste de frenos y pastillas",
      ],
    },
  },
  {
    id: "hiboy-titan",
    videoId: "uH63fBKp9kQ",
    videoCanal: "Pete's Promise",
    marca: "Hiboy",
    modelo: "Titan",
    precioEur: 625,
    potenciaNominalW: 750,
    potenciaPicoW: 1200,
    autonomiaKm: 74,
    autonomiaRealKm: 50,
    velocidadMaxKmh: 45,
    pesoKg: 35,
    cargaMaxKg: null,
    tiempoCargaH: null,
    bateriaWh: 864,
    frenos: null,
    neumaticos: null,
    certificadoDgt: null,
    foto: "/media/patinetes/hiboy-titan-1.webp",
    galeria: [
      {
        src: "/media/patinetes/hiboy-titan-2.webp",
        alt: "Detalle del motor Bosch del Hiboy Titan",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/patinetes/hiboy-titan-3.webp",
        alt: "Hiboy Titan 2026 en carretera",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["precioEur", "autonomiaRealKm"],
    pros: [
      "Motor Bosch de 750 W (1.200 W de pico): sello de calidad alemán",
      "864 Wh (48V 18Ah): 74 km declarados",
      "45 km/h: prestaciones serias",
      "Bosch implica mejor soporte y fiabilidad que motores genéricos",
      "Chasis robusto pensado para uso intensivo",
    ],
    contras: [
      "Sin precio oficial: no se ha verificado tarifa oficial vigente de Hiboy para el Titan",
      "35 kg: pesado para moverlo a mano",
      "A 45 km/h no es un VMP legal en España",
      "Precio superior a la media de Hiboy",
      "Los recambios Bosch son más caros",
      "Para ciudad a 25 km/h, tanta potencia sobra",
    ],
    veredicto:
      "El Hiboy con motor Bosch: si valoras la fiabilidad del motor por encima de todo, el Titan es su apuesta más seria.",
    fuenteNombre: "Hiboy (hiboy.com)",
    fuenteUrl: "https://www.hiboy.com/",
    mantenimientoDIY: {
      actualizacionFirmware:
        "App oficial Hiboy por Bluetooth: estadísticas, bloqueo, control de crucero y autodiagnóstico",
      aprieteTornilleria:
        "Comprobar antes de cada salida que tornillos, tuercas y fijaciones estén seguros (manual oficial Hiboy)",
      trucos: [
        "Limpiar con paño húmedo: nada de agua a presión ni productos agresivos",
        "Revisar periódicamente el desgaste de frenos y pastillas",
      ],
    },
  },
  {
    id: "hiboy-ecom-14",
    videoId: "jinWIpJxhaM",
    videoCanal: "Hiboy official",
    marca: "Hiboy",
    modelo: "ECOM 14",
    precioEur: 625,
    potenciaNominalW: 350,
    potenciaPicoW: 450,
    autonomiaKm: 50,
    autonomiaRealKm: 34,
    velocidadMaxKmh: 35,
    pesoKg: 26.5,
    cargaMaxKg: null,
    tiempoCargaH: null,
    bateriaWh: 480,
    frenos: null,
    neumaticos: '14"',
    certificadoDgt: null,
    foto: "/media/patinetes/hiboy-ecom-14-1.webp",
    galeria: [
      {
        src: "/media/patinetes/hiboy-ecom-14-2.webp",
        alt: "Detalle del sillín y la cesta del Hiboy ECOM 14",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/patinetes/hiboy-ecom-14-3.webp",
        alt: "Hiboy ECOM 14 con cesta haciendo la compra",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["precioEur", "autonomiaRealKm"],
    pros: [
      "Sillín y cesta incluidos: pensado para recados y compra",
      "Ruedas de 14 pulgadas: más estables y cómodas que las de 10",
      "480 Wh (48V 10Ah): 50 km declarados",
      "Postura sentada: ideal si no quieres ir de pie",
      "Concepto distinto: casi una mini-bici eléctrica",
    ],
    contras: [
      "Sin precio oficial: Hiboy no publica una tarifa oficial verificable del Ecom 14",
      "26,5 kg con sillín: no es para subirlo a casa a diario",
      "350 W: justito con pasajero o cuestas fuertes",
      "A 35 km/h no es legal en vía pública española",
      "La cesta limita el plegado compacto",
      "Es un nicho: la reventa es complicada",
    ],
    veredicto:
      "El patinete-todoterreno urbano con sillín: si haces recados y odias ir de pie, el ECOM 14 tiene todo el sentido.",
    fuenteNombre: "Hiboy (hiboy.com)",
    fuenteUrl: "https://www.hiboy.com/",
    mantenimientoDIY: {
      intervaloRevision:
        "Antes de cada salida, comprobar que tuercas, tornillos y elementos de fijación estén bien seguros (manual oficial)",
      aprieteTornilleria:
        "Comprobar antes de cada salida tuercas, tornillos y fijaciones; no debe haber ruidos extraños por piezas sueltas",
      ajusteFrenosPasos: [
        "Al apretar la maneta, el freno debe morder con seguridad y no rozar al soltarla",
        "Al frenar con el acelerador activado, el interruptor de corte debe detener el motor",
      ],
      trucos: [
        "El LED del cargador pasa de rojo a verde al completar la carga; no dejarlo cargando más tiempo del necesario",
        "No conectar el cargador con el puerto húmedo y cubrir el puerto cuando no se usa",
        "Limpiar con paño húmedo: nada de agua a presión",
      ],
    },
  },
  {
    id: "hiboy-ve1-pro",
    videoId: null,
    videoCanal: null,
    marca: "Hiboy",
    modelo: "VE1 Pro",
    precioEur: null,
    potenciaNominalW: 350,
    potenciaPicoW: 500,
    autonomiaKm: 50,
    autonomiaRealKm: 34,
    velocidadMaxKmh: 37,
    pesoKg: 22.2,
    cargaMaxKg: 100,
    tiempoCargaH: 6,
    bateriaWh: 480,
    frenos: "Frenos de disco",
    neumaticos: "Neumáticos de aire de 16\" (cámara)",
    certificadoDgt: null,
    foto: "/media/patinetes/hiboy-ve1-pro-oficial.webp",
    galeria: [],
    aprox: [
      "autonomiaRealKm"
    ],
    pros: [
      "Ruedas de 16 pulgadas: el patinete se mueve más estable que uno de 8,5 o 10 pulgadas",
      "Batería de 48 V 10 Ah (480 Wh) con 31 millas (50 km) de autonomía máxima declarada",
      "350 W nominales y 500 W de pico con pendiente máxima de 15°",
      "Frenos de disco y una cubierta de 16,7 × 9,1 pulgadas",
      "22,2 kg para una rueda tan grande"
    ],
    contras: [
      "Hiboy lo vende en dólares para EE. UU.: la ficha actual es la reacondicionada, a 419,99 $ y agotada; no consta venta oficial en España",
      "Sin certificado de la DGT ni marcado europeo en la ficha",
      "Los 23 mph (37 km/h) superan el límite de 25 km/h de un VMP",
      "Sin suspensión: las ruedas neumáticas de 16 pulgadas hacen casi todo el trabajo",
      "Hiboy recomienda su uso entre 16 y 50 años y hasta 100 kg"
    ],
    veredicto: "El VE1 Pro es un patinete poco habitual por sus ruedas de 16 pulgadas, que dan estabilidad a bajo coste. Pero Hiboy lo vende para EE. UU., a 37 km/h y sin certificado europeo: en España solo podría ser un VMP si se limita a 25 km/h y se homologa.",
    fuenteNombre: "Hiboy (ficha oficial del VE1 Pro)",
    fuenteUrl: "https://www.hiboy.com/products/hiboy-ve1-pro-refurbished-electric-scooter",
    mantenimientoDIY: {
      "actualizacionFirmware": "App oficial Hiboy por Bluetooth: estadísticas, bloqueo, control de crucero y autodiagnóstico",
      "aprieteTornilleria": "Comprobar antes de cada salida que tornillos, tuercas y fijaciones estén seguros (manual oficial Hiboy)",
      "trucos": [
        "Limpiar con paño húmedo: nada de agua a presión ni productos agresivos",
        "Revisar periódicamente el desgaste de frenos y pastillas"
      ]
    },
    fuentesExtra: [
      {
        "nombre": "Hiboy: ficha oficial del VE1 Pro (versión reacondicionada: 350 W nominales y 500 W de pico, 48 V 10 Ah, 23 mph, 31 millas, 22,2 kg, 419,99 $, agotada)",
        "url": "https://www.hiboy.com/products/hiboy-ve1-pro-refurbished-electric-scooter",
        "fecha": "2026-10-31"
      },
      {
        "nombre": "BOE: Real Decreto 518/2026 (casco y edad mínima de 15 años en VMP)",
        "url": "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-13889",
        "fecha": "2026-06-26"
      }
    ],
    datosVerificadosEl: "2026-10-31",
    rivalesTabla: [
      {
        "id": "hiboy-u2-pro",
        "nombre": "Hiboy U2 Pro",
        "precioEur": null,
        "autonomiaKm": 55,
        "potenciaW": 750,
        "pesoKg": 36.6,
        "nota": "Hiboy (hiboy.com)"
      },
      {
        "id": "segway-ninebot-f3",
        "nombre": "Segway Ninebot F3",
        "precioEur": 549,
        "autonomiaKm": 70,
        "potenciaW": 450,
        "pesoKg": 19,
        "nota": "PcComponentes"
      },
      {
        "id": "navee-v50",
        "nombre": "NAVEE V50",
        "precioEur": 549,
        "autonomiaKm": 50,
        "potenciaW": 350,
        "pesoKg": 17,
        "nota": "EZBikes"
      }
    ],
    faqExtra: [
      {
        "q": "¿Cuánto cuesta el Hiboy VE1 Pro?",
        "a": "La única ficha activa en la web de Hiboy EE. UU. es la versión reacondicionada: 419,99 $ con un precio de lista de 999,99 $, y figura como agotada (consulta del 31/10/2026). No hemos encontrado precio oficial en euros, por eso la ficha no muestra uno."
      },
      {
        "q": "¿Qué ventaja tienen sus ruedas de 16 pulgadas?",
        "a": "Según Hiboy, los neumáticos de 16 pulgadas dan más tracción y absorben mejor los golpes que los de un patinete pequeño. El VE1 Pro no lleva suspensión."
      },
      {
        "q": "¿Qué velocidad alcanza?",
        "a": "23 mph, unos 37 km/h, según Hiboy. En vía pública española el límite es de 25 km/h."
      },
      {
        "q": "¿Qué exige la ley para usarlo en España?",
        "a": "Casco homologado o certificado y abrochado (artículo 118.3 del Reglamento General de Circulación) y 15 años cumplidos (artículo 155.3), según el Real Decreto 518/2026 en vigor desde el 1 de octubre de 2026. Está prohibido circular por aceras (artículo 152.1)."
      }
    ]
  },
  {
    id: "hiboy-u2-pro",
    videoId: "nrpbqeFGHlk",
    videoCanal: "Stonnie Dennis",
    marca: "Hiboy",
    modelo: "U2 Pro",
    precioEur: null,
    potenciaNominalW: 750,
    potenciaPicoW: 810,
    autonomiaKm: 55,
    autonomiaRealKm: 37,
    velocidadMaxKmh: 40,
    pesoKg: 36.6,
    cargaMaxKg: 120,
    tiempoCargaH: 7,
    bateriaWh: 624,
    frenos: "Discos delantero y trasero de 160 mm",
    neumaticos: "Neumáticos de aire de 16×4\" todoterreno, con suspensión trasera",
    certificadoDgt: null,
    foto: "/media/patinetes/hiboy-u2-pro-oficial.webp",
    galeria: [],
    aprox: [
      "autonomiaRealKm"
    ],
    pros: [
      "Sillín de espuma con memoria de 3,5 pulgadas, cesta trasera desmontable y cubierta de 17,3 × 10,2 pulgadas",
      "Motor de 750 W nominales y 810 W de pico, con subida declarada del 20 %",
      "Neumáticos todoterreno de 16×4 pulgadas y suspensión trasera de 125 mm",
      "Batería de 48 V 13 Ah (624 Wh) y 34 millas (55 km) de autonomía máxima declarada",
      "Doble freno de disco de 160 mm y faro LED de 70 lux con luz trasera activada con el freno"
    ],
    contras: [
      "36,6 kg: es un vehículo para guardar en planta baja, no para subir escaleras",
      "Se vende en dólares en EE. UU. (1.059,99 $ en la consulta); sin precio oficial en euros",
      "Sin certificado DGT en la ficha de Hiboy",
      "Con sillín no encaja en la imagen habitual de un VMP: consulta con el vendedor y la DGT antes de circular"
    ],
    veredicto: "El U2 Pro es un patinete con sillín, cesta y ruedas anchas pensado para llevar peso y recorrer distancias cortas con comodidad. Es un producto de EE. UU. a 40 km/h: en España no encaja como VMP sin limitar y certificar, y su peso lo hace poco práctico en vivienda sin ascensor.",
    fuenteNombre: "Hiboy (ficha oficial del U2 Pro)",
    fuenteUrl: "https://www.hiboy.com/products/hiboy-u2-pro-electric-scooter-with-16-inch-fat-tires",
    mantenimientoDIY: {
      "actualizacionFirmware": "App oficial Hiboy por Bluetooth: estadísticas, bloqueo, control de crucero y autodiagnóstico",
      "aprieteTornilleria": "Comprobar antes de cada salida que tornillos, tuercas y fijaciones estén seguros (manual oficial Hiboy)",
      "trucos": [
        "Limpiar con paño húmedo: nada de agua a presión ni productos agresivos",
        "Revisar periódicamente el desgaste de frenos y pastillas"
      ]
    },
    fuentesExtra: [
      {
        "nombre": "Hiboy: ficha oficial del U2 Pro (750 W nominales, 810 W de pico, 48 V 13 Ah, 25 mph, 34 millas, 36,6 kg, 1.059,99 $ en la consulta)",
        "url": "https://www.hiboy.com/products/hiboy-u2-pro-electric-scooter-with-16-inch-fat-tires",
        "fecha": "2026-10-31"
      },
      {
        "nombre": "BOE: Real Decreto 518/2026 (casco y edad mínima de 15 años en VMP)",
        "url": "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-13889",
        "fecha": "2026-06-26"
      }
    ],
    datosVerificadosEl: "2026-10-31",
    rivalesTabla: [
      {
        "id": "hiboy-ve1-pro",
        "nombre": "Hiboy VE1 Pro",
        "precioEur": null,
        "autonomiaKm": 50,
        "potenciaW": 350,
        "pesoKg": 22.2,
        "nota": "Hiboy (hiboy.com)"
      },
      {
        "id": "gotrax-g-pro",
        "nombre": "GOTRAX G Pro",
        "precioEur": null,
        "autonomiaKm": 39,
        "potenciaW": 350,
        "pesoKg": 23.6,
        "nota": "ValueWalk (review Gotrax G Pro)"
      },
      {
        "id": "segway-ninebot-max-g2",
        "nombre": "Segway-Ninebot Max G2 E",
        "precioEur": 399,
        "autonomiaKm": 70,
        "potenciaW": 450,
        "pesoKg": 24.3,
        "nota": "Segway-Ninebot (segway.com)"
      }
    ],
    faqExtra: [
      {
        "q": "¿Cuánto cuesta el Hiboy U2 Pro?",
        "a": "En Hiboy EE. UU. figuraba a 1.059,99 $ (precio tachado de 1.499,98 $), consulta del 31/10/2026. No hemos encontrado precio oficial en euros."
      },
      {
        "q": "¿Qué velocidad alcanza?",
        "a": "25 mph, unos 40 km/h, según la ficha de Hiboy EE. UU. Para circular en vía pública española, el límite de un VMP es de 25 km/h."
      },
      {
        "q": "¿Qué lleva de serie además del sillín?",
        "a": "Una cesta trasera desmontable, una pantalla de 7 pulgadas y un faro LED de 70 lux, según Hiboy. Hiboy recomienda su uso entre 16 y 60 años."
      },
      {
        "q": "¿Se puede usar en vía pública en España?",
        "a": "Como patinete de pie, solo si se limita a 25 km/h y tiene certificado de características. Con sillín y esos pesos, consulta antes con el vendedor y la DGT. Casco homologado o certificado y abrochado (artículo 118.3 del Reglamento General de Circulación) y 15 años cumplidos (artículo 155.3), según el Real Decreto 518/2026 en vigor desde el 1 de octubre de 2026. Está prohibido circular por aceras (artículo 152.1)."
      }
    ]
  },
  {
    id: "hiboy-ks4",
    videoId: "eaF5dHQ7gVM",
    videoCanal: "Tim's Electric",
    marca: "Hiboy",
    modelo: "KS4",
    precioEur: null, // Sin precio oficial en EUR verificado el 21/10/2026: Descatalogado en la tienda oficial: hiboy.com solo lista actualmente el KS4 Pro (MSRP 950 USD, en oferta 399,99 USD); el KS4 base ya no tiene ficha ni.
    potenciaNominalW: 350,
    potenciaPicoW: null,
    autonomiaKm: 27,
    autonomiaRealKm: 18,
    velocidadMaxKmh: 31,
    pesoKg: 14.8,
    cargaMaxKg: 100,
    tiempoCargaH: 5,
    bateriaWh: 270,
    frenos: "Electrónico delantero + disco trasero",
    neumaticos: '10" honeycomb macizo',
    certificadoDgt: null,
    foto: "/media/patinetes/hiboy-ks4-1.webp",
    galeria: [
      {
        src: "/media/patinetes/hiboy-ks4-2.webp",
        alt: "Detalle de las ruedas macizas del Hiboy KS4",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/patinetes/hiboy-ks4-3.webp",
        alt: "Hiboy KS4 en un campus universitario",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaKm", "autonomiaRealKm", "tiempoCargaH", "neumaticos"],
    pros: [
      "14,8 kg: pluma para su categoría",
      "Ruedas macizas de 10\": cero pinchazos y cero mantenimiento",
      "App Hiboy con bloqueo, crucero y autodiagnóstico",
      "350 W: suficiente para ciudad llana",
      "IPX4: aguanta lluvia ligera",
    ],
    contras: [
      "Sin precio oficial: no se ha verificado tarifa oficial vigente de Hiboy para el KS4",
      "27 km declarados: autonomía justa",
      "Las ruedas macizas transmiten todos los baches",
      "100 kg de carga máxima: justito para riders pesados",
      "El KS4 Pro ofrece mucho más por poco más dinero",
      "A 31 km/h hay que limitarlo a 25 para circular legal en España",
    ],
    veredicto:
      "El commuter ligero y sin mantenimiento de Hiboy: perfecto si odias los pinchazos y tus rutas son cortas. Si no, el KS4 Pro compensa.",
    fuenteNombre: "Hiboy / Levy Electric",
    fuenteUrl: "https://www.levyelectric.com/resources/hiboy-electric-scooter-complete-guide",
    mantenimientoDIY: {
      actualizacionFirmware:
        "App oficial Hiboy por Bluetooth: estadísticas, bloqueo, control de crucero y autodiagnóstico",
      aprieteTornilleria:
        "Revisar periódicamente los 6 tornillos del manillar (llave Allen incluida)",
    },
  },
  // ────────────────────────── ISCOOTER (6) ─────────────────────────
  {
    id: "iscooter-i8",
    videoId: "7ONtETM8nPc",
    videoCanal: "racka and roll",
    marca: "iScooter",
    modelo: "i8",
    precioEur: null,
    potenciaNominalW: 350,
    potenciaPicoW: null,
    autonomiaKm: 20,
    autonomiaRealKm: 13,
    velocidadMaxKmh: 30,
    pesoKg: 12,
    cargaMaxKg: 100,
    tiempoCargaH: 5.5,
    bateriaWh: 187,
    frenos: "Freno electrónico delantero y freno trasero (de buje en la web británica, de disco en la global)",
    neumaticos: "Neumáticos de aire de 8,5\"",
    certificadoDgt: null,
    foto: "/media/patinetes/iscooter-i8-oficial.webp",
    galeria: [],
    aprox: [
      "autonomiaRealKm"
    ],
    pros: [
      "10,4 kg de peso de producto en iScooter UK y 12 kg (26,4 libras) en la web global",
      "Neumáticos de aire de 8,5 pulgadas y plegado de 105 × 45 × 49 cm",
      "Tres modos de 6, 15 y 25 km/h antes de desbloquear, y control de crucero",
      "Precio de entrada: 188,99 £ en iScooter UK y 229,99 $ en la web global",
      "Freno electrónico delantero y freno trasero, con palanca"
    ],
    contras: [
      "Batería de 187 Wh (36 V 5,2 Ah): los 20 km declarados son el máximo",
      "Sin suspensión: no se indica ninguna en la ficha",
      "Pendiente máxima declarada de 15° con motor delantero de 350 W",
      "La web global da 29 km/h y la británica, 30 km/h tras desbloquear",
      "iScooter recomienda una edad de 12 años, por debajo de los 15 que exige la ley en España"
    ],
    veredicto: "El i8 es un patinete de poco más de 10 kg con una batería pequeña: sirve para tramos de 3 o 4 km y para llevarlo a pulso. No tiene suspensión ni app, y la carga máxima de 100 kg lo limita para adultos pesados.",
    fuenteNombre: "iScooter (ficha oficial del i8)",
    fuenteUrl: "https://www.iscooterglobal.com/products/i8-electric-scooter-350w-for-adults-and-teens",
    mantenimientoDIY: {
      "presionNeumaticos": "La presión recomendada viene indicada en el flanco del neumático (manual oficial)",
      "actualizacionFirmware": "App oficial iScooter por Bluetooth (iOS/Android): permite actualizaciones de firmware y ajustes",
      "aprieteTornilleria": "Revisar el apriete de todos los tornillos antes de cada salida (manual oficial)",
      "ajusteFrenosPasos": [
        "Revisar periódicamente manetas, cables y pastillas de freno",
        "Si el freno se nota flojo o demasiado tenso, ajustar la tensión del cable o consultar a un técnico"
      ],
      "trucos": [
        "Para guardarlo mucho tiempo, dejar la batería al 50-70 % y recargarla cada 30-60 días",
        "Limpiar con paño húmedo: nada de agua a presión ni sumergirlo",
        "Usar siempre el cargador original"
      ]
    },
    fuentesExtra: [
      {
        "nombre": "iScooter: ficha oficial del i8 (350 W, 36 V 5,2 Ah, 18 mph / 29 km/h, 12 millas / 20 km, 26,4 libras, 229,99 $ en la consulta)",
        "url": "https://www.iscooterglobal.com/products/i8-electric-scooter-350w-for-adults-and-teens",
        "fecha": "2026-10-31"
      },
      {
        "nombre": "iScooter UK: ficha del i8 (187 Wh, 10,4 kg, 188,99 £, EBAS delante y freno de buje detrás, 30 km/h tras desbloquear)",
        "url": "https://www.iscooterglobal.co.uk/pages/i8",
        "fecha": "2026-10-31"
      },
      {
        "nombre": "BOE: Real Decreto 518/2026 (casco y edad mínima de 15 años en VMP)",
        "url": "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-13889",
        "fecha": "2026-06-26"
      }
    ],
    datosVerificadosEl: "2026-10-31",
    rivalesTabla: [
      {
        "id": "segway-ninebot-e2-ii",
        "nombre": "Segway Ninebot E2 II",
        "precioEur": null,
        "autonomiaKm": 25,
        "potenciaW": 250,
        "pesoKg": 16.2,
        "nota": "Manual oficial Segway-Ninebot (manuals.plus)"
      },
      {
        "id": "xiaomi-electric-scooter-4-lite",
        "nombre": "Xiaomi Electric Scooter 4 Lite (2.ª Gen)",
        "precioEur": 299.99,
        "autonomiaKm": 25,
        "potenciaW": 300,
        "pesoKg": 16.2,
        "nota": "PcComponentes"
      },
      {
        "id": "cecotec-bongo-serie-a",
        "nombre": "Cecotec Bongo Serie A",
        "precioEur": 299,
        "autonomiaKm": 25,
        "potenciaW": 350,
        "pesoKg": 13.5,
        "nota": "Cecotec (cecotec.es)"
      }
    ],
    faqExtra: [
      {
        "q": "¿Cuánto cuesta el iScooter i8?",
        "a": "229,99 $ en la web global de iScooter y 188,99 £ en la británica (consultas del 31/10/2026). No hemos encontrado precio oficial en euros."
      },
      {
        "q": "¿Cuánto pesa realmente?",
        "a": "La web global de iScooter indica 26,4 libras (12 kg); la británica, 10,4 kg de peso del producto y 12,85 kg de peso bruto con embalaje."
      },
      {
        "q": "¿Qué velocidades tiene?",
        "a": "Según iScooter UK, 6, 15 y 25 km/h antes de desbloquear y 10, 20 y 30 km/h después. En vía pública española, 25 km/h como máximo."
      },
      {
        "q": "¿Qué exige la ley para usarlo en España?",
        "a": "Casco homologado o certificado y abrochado (artículo 118.3 del Reglamento General de Circulación) y 15 años cumplidos (artículo 155.3), según el Real Decreto 518/2026 en vigor desde el 1 de octubre de 2026. Está prohibido circular por aceras (artículo 152.1)."
      }
    ]
  },
  {
    id: "iscooter-i10-plus",
    videoId: "DqXKgzviRbo",
    videoCanal: "BizdustryEV",
    marca: "iScooter",
    modelo: "i10 Plus",
    precioEur: null,
    potenciaNominalW: 800,
    potenciaPicoW: null,
    autonomiaKm: 50,
    autonomiaRealKm: 34,
    velocidadMaxKmh: 40,
    pesoKg: 20,
    cargaMaxKg: null,
    tiempoCargaH: null,
    bateriaWh: 630,
    frenos: null,
    neumaticos: null,
    certificadoDgt: null,
    foto: "/media/patinetes/iscooter-i10-plus-1.webp",
    galeria: [
      {
        src: "/media/patinetes/iscooter-i10-plus-2.webp",
        alt: "Detalle del display del iScooter i10 Plus",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/patinetes/iscooter-i10-plus-3.webp",
        alt: "iScooter i10 Plus en ciudad",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm"],
    pros: [
      "800 W: potencia seria por ~379 £",
      "630 Wh (36V 17,5Ah): 50 km declarados",
      "20 kg: peso razonable",
      "Buen equilibrio precio/prestaciones",
      "Marca con distribución europea consolidada",
    ],
    contras: [
      "Sin precio oficial: iScooter no publica una tarifa oficial verificable del i10 Plus",
      "La potencia pico no está publicada",
      "A 40 km/h no es VMP legal en España",
      "Los frenos de serie son mejorables según usuarios",
      "App con funciones limitadas",
      "El iX4 ofrece más por poco más",
    ],
    veredicto:
      "El punto dulce de iScooter: 800 W y 50 km por un precio contenido. Una de sus compras más lógicas.",
    fuenteNombre: "iScooter UK (iscooterglobal.co.uk)",
    fuenteUrl: "https://www.iscooterglobal.co.uk/",
    mantenimientoDIY: {
      presionNeumaticos:
        "La presión recomendada viene indicada en el flanco del neumático (manual oficial)",
      actualizacionFirmware:
        "App oficial iScooter por Bluetooth (iOS/Android): permite actualizaciones de firmware y ajustes",
      aprieteTornilleria:
        "Revisar el apriete de todos los tornillos antes de cada salida (manual oficial)",
      ajusteFrenosPasos: [
        "Revisar periódicamente manetas, cables y pastillas de freno",
        "Si el freno se nota flojo o demasiado tenso, ajustar la tensión del cable o consultar a un técnico",
      ],
      trucos: [
        "Para guardarlo mucho tiempo, dejar la batería al 50-70 % y recargarla cada 30-60 días",
        "Limpiar con paño húmedo: nada de agua a presión ni sumergirlo",
        "Usar siempre el cargador original",
      ],
    },
  },
  {
    id: "iscooter-ix4",
    videoId: "UQF0VM5Ardw",
    videoCanal: "BizdustryEV",
    marca: "iScooter",
    modelo: "iX4",
    precioEur: 486,
    potenciaNominalW: 800,
    potenciaPicoW: null,
    autonomiaKm: 42,
    autonomiaRealKm: 28,
    velocidadMaxKmh: 45,
    pesoKg: null,
    cargaMaxKg: null,
    tiempoCargaH: null,
    bateriaWh: 720,
    frenos: null,
    neumaticos: null,
    certificadoDgt: null,
    foto: "/media/patinetes/iscooter-ix4-1.webp",
    galeria: [
      {
        src: "/media/patinetes/iscooter-ix4-2.webp",
        alt: "Detalle del iScooter iX4",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/patinetes/iscooter-ix4-3.webp",
        alt: "iScooter iX4 en camino de tierra",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["precioEur", "autonomiaKm", "autonomiaRealKm"],
    pros: [
      "800 W con enfoque off-road",
      "720 Wh (48V 15Ah): buena batería para su precio (~449 £)",
      "45 km/h: ritmo alto",
      "Neumáticos mixtos para salir del asfalto",
      "Chasis reforzado",
    ],
    contras: [
      "Sin precio oficial: iScooter no publica una tarifa oficial verificable del iX4",
      "Peso no publicado: se nota pesado en mano",
      "A 45 km/h no es legal en vía pública española",
      "La autonomía real off-road cae mucho",
      "Suspensión básica para lo que promete",
      "Poca información oficial detallada",
    ],
    veredicto:
      "El iScooter aventurero de acceso: si quieres salir del asfalto sin gastar mucho, el iX4 es su propuesta.",
    fuenteNombre: "iScooter UK (iscooterglobal.co.uk)",
    fuenteUrl: "https://www.iscooterglobal.co.uk/",
    mantenimientoDIY: {
      presionNeumaticos:
        "La presión recomendada viene indicada en el flanco del neumático (manual oficial)",
      actualizacionFirmware:
        "App oficial iScooter por Bluetooth (iOS/Android): permite actualizaciones de firmware y ajustes",
      aprieteTornilleria:
        "Revisar el apriete de todos los tornillos antes de cada salida (manual oficial)",
      ajusteFrenosPasos: [
        "Revisar periódicamente manetas, cables y pastillas de freno",
        "Si el freno se nota flojo o demasiado tenso, ajustar la tensión del cable o consultar a un técnico",
      ],
      trucos: [
        "Para guardarlo mucho tiempo, dejar la batería al 50-70 % y recargarla cada 30-60 días",
        "Limpiar con paño húmedo: nada de agua a presión ni sumergirlo",
        "Usar siempre el cargador original",
      ],
    },
  },
  {
    id: "iscooter-ix5s",
    videoId: "tmP9ZAsrqXw",
    videoCanal: "Vapor Trail Channel",
    marca: "iScooter",
    modelo: "iX5S",
    precioEur: 486,
    potenciaNominalW: 1000,
    potenciaPicoW: 1000,
    autonomiaKm: 64,
    autonomiaRealKm: 43,
    velocidadMaxKmh: 45,
    pesoKg: 27,
    cargaMaxKg: 150,
    tiempoCargaH: null,
    bateriaWh: 720,
    frenos: "Disco delantero y trasero + freno electrónico",
    neumaticos: '11" off-road neumáticos',
    certificadoDgt: null,
    foto: "/media/patinetes/iscooter-ix5s-1.webp",
    galeria: [
      {
        src: "/media/patinetes/iscooter-ix5s-2.webp",
        alt: "Detalle de la suspensión del iScooter iX5S",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/patinetes/iscooter-ix5s-3.webp",
        alt: "iScooter iX5S en pista forestal",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm"],
    pros: [
      "1.000 W: potencia de sobra por 486 €",
      "720 Wh (48V 15Ah): 64 km declarados",
      "150 kg de carga máxima: de los más capaces",
      "Doble suspensión delantera + amortiguador central trasero",
      "Ruedas de 11\" off-road: comodidad real",
    ],
    contras: [
      "27 kg: pesado para el día a día urbano",
      "A 45 km/h no es VMP legal en España",
      "El plegado con tanta suspensión es aparatoso",
      "La marca no publica el tiempo de carga",
      "Para ciudad pura hay opciones más ligeras",
    ],
    veredicto:
      "Potencia y robustez por menos de 500 €: el iX5S es el caballo de batalla de iScooter. Ideal si priorizas fuerza sobre ligereza.",
    fuenteNombre: "iScooter EU",
    fuenteUrl: "https://www.iscooterglobal.eu/products/iscooter-ix8-2400w-off-road-electric-scooter",
    mantenimientoDIY: {
      presionNeumaticos:
        "La presión recomendada viene indicada en el flanco del neumático (manual oficial)",
      actualizacionFirmware:
        "App oficial iScooter por Bluetooth (iOS/Android): permite actualizaciones de firmware y ajustes",
      aprieteTornilleria:
        "Revisar el apriete de todos los tornillos antes de cada salida (manual oficial)",
      ajusteFrenosPasos: [
        "Revisar periódicamente manetas, cables y pastillas de freno",
        "Si el freno se nota flojo o demasiado tenso, ajustar la tensión del cable o consultar a un técnico",
      ],
      trucos: [
        "Para guardarlo mucho tiempo, dejar la batería al 50-70 % y recargarla cada 30-60 días",
        "Limpiar con paño húmedo: nada de agua a presión ni sumergirlo",
        "Usar siempre el cargador original",
      ],
    },
  },
  {
    id: "iscooter-ix7-pro",
    videoId: "x2V6uKuWscA",
    videoCanal: "Budget Cars And Bikes",
    marca: "iScooter",
    modelo: "iX7 Pro",
    precioEur: 486,
    potenciaNominalW: 2000,
    potenciaPicoW: 2000,
    autonomiaKm: 80,
    autonomiaRealKm: 54,
    velocidadMaxKmh: 60,
    pesoKg: 30,
    cargaMaxKg: null,
    tiempoCargaH: null,
    bateriaWh: 720,
    frenos: null,
    neumaticos: null,
    certificadoDgt: null,
    foto: "/media/patinetes/iscooter-ix7-pro-1.webp",
    galeria: [
      {
        src: "/media/patinetes/iscooter-ix7-pro-2.webp",
        alt: "Detalle del doble motor del iScooter iX7 Pro",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/patinetes/iscooter-ix7-pro-3.webp",
        alt: "iScooter iX7 Pro en acción",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["precioEur", "pesoKg", "bateriaWh", "autonomiaRealKm"],
    pros: [
      "Doble motor de 1.000 W: tracción total por ~709 £",
      "80 km declarados: autonomía generosa",
      "60 km/h: prestaciones altas",
      "Buena dotación de iluminación",
      "El doble motor más barato del catálogo europeo",
    ],
    contras: [
      "Sin precio oficial: iScooter no publica una tarifa oficial verificable del iX7 Pro",
      "~30 kg: no es para llevarlo en brazos",
      "Batería de 48V 15-17,5Ah según versión: conviene confirmar cuál compras",
      "A 60 km/h, ilegal en vía pública española",
      "Los acabados no están al nivel de marcas premium",
      "El servicio técnico depende del vendedor",
    ],
    veredicto:
      "Tracción total al precio más bajo de Europa: el iX7 Pro democratiza el doble motor. Con sus lógicas limitaciones de acabado.",
    fuenteNombre: "iScooter UK (iscooterglobal.co.uk)",
    fuenteUrl: "https://www.iscooterglobal.co.uk/",
    mantenimientoDIY: {
      presionNeumaticos:
        "La presión recomendada viene indicada en el flanco del neumático (manual oficial)",
      actualizacionFirmware:
        "App oficial iScooter por Bluetooth (iOS/Android): permite actualizaciones de firmware y ajustes",
      aprieteTornilleria:
        "Revisar el apriete de todos los tornillos antes de cada salida (manual oficial)",
      ajusteFrenosPasos: [
        "Revisar periódicamente manetas, cables y pastillas de freno",
        "Si el freno se nota flojo o demasiado tenso, ajustar la tensión del cable o consultar a un técnico",
      ],
      trucos: [
        "Para guardarlo mucho tiempo, dejar la batería al 50-70 % y recargarla cada 30-60 días",
        "Limpiar con paño húmedo: nada de agua a presión ni sumergirlo",
        "Usar siempre el cargador original",
      ],
    },
  },
  {
    id: "iscooter-ix8",
    videoId: "wq_HyiPQwlw",
    videoCanal: "DHTV",
    marca: "iScooter",
    modelo: "iX8",
    precioEur: 770,
    potenciaNominalW: 2400,
    potenciaPicoW: 2400,
    autonomiaKm: 67,
    autonomiaRealKm: 45,
    velocidadMaxKmh: 60,
    pesoKg: 35,
    cargaMaxKg: 150,
    tiempoCargaH: 9,
    bateriaWh: 960,
    frenos: "Disco hidráulico delantero y trasero + E-ABS",
    neumaticos: '12" off-road neumáticos',
    certificadoDgt: null,
    foto: "/media/patinetes/iscooter-ix8-1.webp",
    galeria: [
      {
        src: "/media/patinetes/iscooter-ix8-2.webp",
        alt: "Detalle de los frenos hidráulicos del iScooter iX8",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/patinetes/iscooter-ix8-3.webp",
        alt: "iScooter iX8 con sus ruedas de 12 pulgadas en el campo",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaKm", "autonomiaRealKm", "tiempoCargaH"],
    pros: [
      "Doble motor de 1.200 W (2.400 W): el tope de gama de iScooter",
      "960 Wh (48V 20Ah): 65-70 km declarados",
      "Ruedas de 12\" off-road: las más grandes de su clase",
      "Frenos hidráulicos + E-ABS e intermitentes",
      "150 kg de carga máxima y doble suspensión",
    ],
    contras: [
      "35 kg y 770 €: ya compite con marcas más prestigiosas",
      "9 horas de carga con el cargador de serie",
      "A 60 km/h no es un VMP legal en España",
      "Enormes ruedas de 12\": plegado voluminoso",
      "La marca tiene menos red de talleres que Xiaomi o Segway",
    ],
    veredicto:
      "El iScooter definitivo: doble motor, ruedas de 12\" y frenos hidráulicos por 770 €. Si buscas el máximo de la marca, es este.",
    fuenteNombre: "iScooter EU (iscooterglobal.eu)",
    fuenteUrl: "https://www.iscooterglobal.eu/products/iscooter-ix8-2400w-off-road-electric-scooter",
    mantenimientoDIY: {
      presionNeumaticos:
        "La presión recomendada viene indicada en el flanco del neumático (manual oficial)",
      actualizacionFirmware:
        "App oficial iScooter por Bluetooth (iOS/Android): permite actualizaciones de firmware y ajustes",
      aprieteTornilleria:
        "Revisar el apriete de todos los tornillos antes de cada salida (manual oficial)",
      ajusteFrenosPasos: [
        "Revisar periódicamente manetas, cables y pastillas de freno",
        "Si el freno se nota flojo o demasiado tenso, ajustar la tensión del cable o consultar a un técnico",
      ],
      trucos: [
        "Para guardarlo mucho tiempo, dejar la batería al 50-70 % y recargarla cada 30-60 días",
        "Limpiar con paño húmedo: nada de agua a presión ni sumergirlo",
        "Usar siempre el cargador original",
      ],
    },
  },
  // ────────────────────────── KUKIRIN (7) ─────────────────────────
  {
    id: "kukirin-g2-max",
    videoId: "XqPkwr142QE",
    videoCanal: "Noblex Tech",
    marca: "KuKirin",
    modelo: "G2 Max",
    precioEur: 684,
    potenciaNominalW: 1000,
    potenciaPicoW: null,
    autonomiaKm: 80,
    autonomiaRealKm: 54,
    velocidadMaxKmh: 55,
    pesoKg: 31,
    cargaMaxKg: null,
    tiempoCargaH: null,
    bateriaWh: 960,
    frenos: null,
    neumaticos: null,
    certificadoDgt: null,
    foto: "/media/patinetes/kukirin-g2-max-1.webp",
    galeria: [
      {
        src: "/media/patinetes/kukirin-g2-max-2.webp",
        alt: "Detalle del manillar del KuKirin G2 Max",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/patinetes/kukirin-g2-max-3.webp",
        alt: "KuKirin G2 Max en carretera secundaria",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm"],
    pros: [
      "1.000 W: el clásico superventas de KuKirin",
      "960 Wh (48V 20Ah): 80 km declarados",
      "684 €: precio muy competitivo en la UE",
      "55 km/h: ritmo más que suficiente",
      "Amplia comunidad de usuarios y recambios fáciles de encontrar",
    ],
    contras: [
      "31 kg: pesado para subirlo a casa",
      "A 55 km/h no es VMP legal en España",
      "La calidad de los plásticos es mejorable",
      "El cargador de serie es lento",
      "La app deja que desear según usuarios",
    ],
    veredicto:
      "El KuKirin de referencia: 1.000 W y 80 km por menos de 700 €. La compra segura de la marca si no necesitas doble motor.",
    fuenteNombre: "KuKirin EU (eu-kukirin.com)",
    fuenteUrl: "https://eu-kukirin.com/",
    mantenimientoDIY: {
      presionNeumaticos:
        "Mantener la presión indicada en el flanco del neumático (según el manual oficial KuKirin)",
      aprieteTornilleria:
        "Revisar periódicamente que todos los tornillos estén apretados (manual oficial)",
      trucos: [
        "Limpiar con paño húmedo: nada de agua a presión ni sumergirlo",
        "Para guardarlo mucho tiempo, dejar la batería al 50-70 % y recargarla cada 30-60 días",
        "Revisar periódicamente pastillas y cables de freno",
      ],
    },
  },
  {
    id: "kukirin-g4",
    videoId: "pUYmWhjBAzY",
    videoCanal: "Pat Outdoors",
    marca: "KuKirin",
    modelo: "G4",
    precioEur: 859,
    potenciaNominalW: 2000,
    potenciaPicoW: 2400,
    autonomiaKm: 75,
    autonomiaRealKm: 50,
    velocidadMaxKmh: 70,
    pesoKg: 34.5,
    cargaMaxKg: null,
    tiempoCargaH: null,
    bateriaWh: 1200,
    frenos: null,
    neumaticos: null,
    certificadoDgt: null,
    foto: "/media/patinetes/kukirin-g4-1.webp",
    galeria: [
      {
        src: "/media/patinetes/kukirin-g4-2.webp",
        alt: "Detalle de la rueda del KuKirin G4",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/patinetes/kukirin-g4-3.webp",
        alt: "KuKirin G4 en pista",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm"],
    pros: [
      "2.000 W (2.400 W de pico): una bestia por 859 €",
      "1.200 Wh (60V 20Ah): 75 km declarados",
      "70 km/h: prestaciones de gama alta",
      "Suspensión delantera y trasera de largo recorrido",
      "Muy popular: tutoriales y repuestos por todas partes",
    ],
    contras: [
      "34,5 kg: un trasto serio",
      "A 70 km/h, ilegal en vía pública española",
      "El consumo a fondo es alto: la autonomía real cae",
      "Frenos de serie justos para tanta potencia según usuarios",
      "Vibraciones a alta velocidad si no está bien ajustado",
    ],
    veredicto:
      "Potencia bruta a precio de risa: el G4 es el favorito de los que quieren correr sin gastarse 2.000 €. Con cabeza, por favor.",
    fuenteNombre: "KuKirin EU (eu-kukirin.com)",
    fuenteUrl: "https://eu-kukirin.com/",
    mantenimientoDIY: {
      presionNeumaticos: "3,5 bar (50 PSI) según el manual oficial",
    },
  },
  {
    id: "kukirin-m4-max",
    videoId: "0_SNYbbdS0w",
    videoCanal: "GSMaholic",
    marca: "KuKirin",
    modelo: "M4 Max",
    precioEur: 479,
    potenciaNominalW: 800,
    autonomiaKm: 64,
    autonomiaRealKm: 45,
    velocidadMaxKmh: 45,
    pesoKg: 24,
    cargaMaxKg: 120,
    tiempoCargaH: null,
    bateriaWh: 874,
    frenos: "Freno de disco y freno electrónico",
    neumaticos: "Neumáticos de 10 pulgadas",
    certificadoDgt: null,
    foto: "/media/patinetes/kukirin-m4-max-oficial.webp",
    galeria: [],
    aprox: [
      "autonomiaRealKm"
    ],
    pros: [
      "Tres niveles de velocidad limitada de 15, 20 y 25 km/h que KuKirin anuncia como «límite de velocidad»",
      "Batería de 48 V 18,2 Ah (874 Wh) y 64 km de autonomía declarada",
      "Suspensión delantera de doble horquilla y trasera de doble resorte",
      "Pedal de 450 × 175 mm y plegado con una sola tecla",
      "Certificado CE indicado en la ficha, 479 € frente a un precio habitual de 689 €"
    ],
    contras: [
      "Ficha en modo reserva: KuKirin prevé el envío para mediados de noviembre, sujeto a su llegada al almacén",
      "Sin modo limitado, KuKirin da niveles de 15, 25 y 45 km/h con 65 kg de carga: 45 km/h no es legal en vía pública",
      "La ficha no dice cuánto tarda en cargar ni qué protección IP tiene",
      "Los 64 km se declaran sin indicar la velocidad ni el peso del conductor",
      "La ficha no menciona certificado de características de la DGT; el CE no lo sustituye"
    ],
    veredicto: "El M4 Max es un patinete de 800 W y 874 Wh por 479 €, con modos que se pueden limitar a 25 km/h. Es una oferta con letra pequeña: el envío es de reserva, los 45 km/h no se pueden usar en vía pública y hay que mirar el certificado de la DGT.",
    fuenteNombre: "KuKirin España (tienda oficial)",
    fuenteUrl: "https://kukirin.com.es/products/kukirin-m4-max-electric-scooter",
    mantenimientoDIY: {
      "aprieteTornilleria": "Revisar regularmente el apriete de todos los tornillos y tuercas (manual oficial)",
      "ajusteFrenosPasos": [
        "Si el freno va demasiado tenso: aflojar la tuerca del brazo de freno con una llave, alargar ligeramente el cable y volver a apretar",
        "Si la frenada es débil: aflojar la tuerca, alargar más el cable y probar el freno"
      ],
      "trucos": [
        "Revisar la presión de los neumáticos regularmente (manual oficial)",
        "Para guardarlo mucho tiempo, mantener la batería por encima del 50 % y cargarla al menos cada 3 meses",
        "Limpiar con paño húmedo y suave: prohibido alcohol, gasolina o agua a presión",
        "Cargar siempre con el cargador original y con el patinete apagado"
      ]
    },
    fuentesExtra: [
      {
        "nombre": "KuKirin España: ficha del M4 Max (479 € con precio habitual de 689 €, 800 W, 48 V 18,2 Ah, 64 km, 45 km/h, 24 kg, 120 kg, certificado CE)",
        "url": "https://kukirin.com.es/products/kukirin-m4-max-electric-scooter",
        "fecha": "2026-10-31"
      },
      {
        "nombre": "BOE: Real Decreto 518/2026 (casco y edad mínima de 15 años en VMP)",
        "url": "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-13889",
        "fecha": "2026-06-26"
      }
    ],
    datosVerificadosEl: "2026-10-31",
    rivalesTabla: [
      {
        "id": "kaabo-mantis-8-eco-800",
        "nombre": "Kaabo Mantis 8 Eco 800",
        "precioEur": null,
        "autonomiaKm": 60,
        "potenciaW": 800,
        "pesoKg": 23,
        "nota": "Ecoscooter"
      },
      {
        "id": "kukirin-m5-pro",
        "nombre": "KuKirin M5 Pro",
        "precioEur": 799,
        "autonomiaKm": 70,
        "potenciaW": 1000,
        "pesoKg": 36.2,
        "nota": "KuKirin.es (tienda oficial en España)"
      },
      {
        "id": "kukirin-g2-max",
        "nombre": "KuKirin G2 Max",
        "precioEur": 684,
        "autonomiaKm": 80,
        "potenciaW": 1000,
        "pesoKg": 31,
        "nota": "KuKirin EU (eu-kukirin.com)"
      }
    ],
    faqExtra: [
      {
        "q": "¿Cuánto cuesta el KuKirin M4 Max?",
        "a": "479 € en la tienda de KuKirin España, con un precio habitual tachado de 689 €. La ficha indica que es una reserva con envío previsto a mediados de noviembre (consulta del 31/10/2026)."
      },
      {
        "q": "¿Se puede limitar a 25 km/h?",
        "a": "KuKirin indica tres niveles de «límite de velocidad» de 15, 20 y 25 km/h. Sin límite y con 65 kg de carga, los niveles son de 15, 25 y 45 km/h."
      },
      {
        "q": "¿Tiene suspensión?",
        "a": "Sí: doble horquilla delante y doble resorte rojo detrás, según la ficha de KuKirin."
      },
      {
        "q": "¿Qué exige la ley para circular con él?",
        "a": "Casco homologado o certificado y abrochado (artículo 118.3 del Reglamento General de Circulación) y 15 años cumplidos (artículo 155.3), según el Real Decreto 518/2026 en vigor desde el 1 de octubre de 2026. Está prohibido circular por aceras (artículo 152.1)."
      }
    ],
    potenciaPicoW: null
  },
  {
    id: "kukirin-a1",
    videoId: "kKFJA1ugG8I",
    videoCanal: "GSMaholic",
    marca: "KuKirin",
    modelo: "A1",
    precioEur: null, // sin tarifa oficial verificable (verificado 20/10/2026),
    potenciaNominalW: 800,
    potenciaPicoW: null,
    autonomiaKm: 45,
    autonomiaRealKm: 30,
    velocidadMaxKmh: 45,
    pesoKg: 25.5,
    cargaMaxKg: null,
    tiempoCargaH: null,
    bateriaWh: 624,
    frenos: null,
    neumaticos: null,
    certificadoDgt: null,
    foto: "/media/patinetes/kukirin-a1-1.webp",
    galeria: [
      {
        src: "/media/patinetes/kukirin-a1-2.webp",
        alt: "Detalle del KuKirin A1",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/patinetes/kukirin-a1-3.webp",
        alt: "KuKirin A1 en uso diario",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm"],
    pros: [
      "800 W por ~439 €: potencia barata",
      "624 Wh (48V 13Ah): 45 km declarados",
      "25,5 kg: manejable",
      "Diseño compacto y moderno",
      "Buena opción como primer patinete potente",
    ],
    contras: [
      "Sin precio oficial: KuKirin no publica una tarifa oficial verificable del A1",
      "A 45 km/h no es legal en vía pública española",
      "45 km declarados se quedan cortos para commuters",
      "Componentes básicos",
      "Poca presencia en tiendas físicas europeas",
      "La batería de 13Ah limita la autonomía real",
    ],
    veredicto:
      "Potencia low-cost: el A1 es para quien quiere 800 W gastando poco. Para más autonomía, sube al M4 Max.",
    fuenteNombre: "KuKirin EU (eu-kukirin.com)",
    fuenteUrl: "https://eu-kukirin.com/",
    mantenimientoDIY: {
      presionNeumaticos:
        "Mantener la presión indicada en el flanco del neumático (según el manual oficial KuKirin)",
      aprieteTornilleria:
        "Revisar periódicamente que todos los tornillos estén apretados (manual oficial)",
      trucos: [
        "Limpiar con paño húmedo: nada de agua a presión ni sumergirlo",
        "Para guardarlo mucho tiempo, dejar la batería al 50-70 % y recargarla cada 30-60 días",
        "Revisar periódicamente pastillas y cables de freno",
      ],
    },
  },
  {
    id: "kukirin-s1-max",
    videoId: "2bSBpoBbfkM",
    videoCanal: "Zerorider - la chaîne de la trottinette électrique",
    marca: "KuKirin",
    modelo: "S1 Max",
    precioEur: null, // sin tarifa oficial verificable (verificado 20/10/2026),
    potenciaNominalW: 350,
    potenciaPicoW: 500,
    autonomiaKm: 39,
    autonomiaRealKm: 26,
    velocidadMaxKmh: 25,
    pesoKg: 16,
    cargaMaxKg: 100,
    tiempoCargaH: 7.5,
    bateriaWh: 374,
    frenos: "Freno electrónico + freno de pie",
    neumaticos: '8" honeycomb',
    certificadoDgt: null,
    foto: "/media/patinetes/kukirin-s1-max-1.webp",
    galeria: [
      {
        src: "/media/patinetes/kukirin-s1-max-2.webp",
        alt: "Detalle del KuKirin S1 Max plegado",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/patinetes/kukirin-s1-max-3.webp",
        alt: "KuKirin S1 Max en el transporte público",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["tiempoCargaH", "autonomiaRealKm"],
    pros: [
      "16 kg y ~294 €: el KuKirin más barato y ligero",
      "25 km/h: legal como VMP en España",
      "Ruedas macizas de 8\": cero pinchazos",
      "374 Wh (36V 10,4Ah): 39 km declarados",
      "Perfecto para estudiantes y trayectos cortos",
    ],
    contras: [
      "Sin precio oficial: KuKirin no publica una tarifa oficial verificable del S1 Max",
      "Ruedas de 8\" macizas: incómodo en firmes malos",
      "100 kg de carga máxima: justo",
      "7-8 horas de carga",
      "350 W: las cuestas cuestan",
      "El freno de pie trasero es poco progresivo",
    ],
    veredicto:
      "El KuKirin urbano y legal: barato, ligero y a 25 km/h. Si tus rutas son cortas y llanas, es imbatible por precio.",
    fuenteNombre: "KuKirin EU (eu-kukirin.com)",
    fuenteUrl: "https://eu-kukirin.com/",
    mantenimientoDIY: {
      presionNeumaticos:
        "Mantener la presión indicada en el flanco del neumático (según el manual oficial KuKirin)",
      aprieteTornilleria:
        "Revisar periódicamente que todos los tornillos estén apretados (manual oficial)",
      trucos: [
        "Limpiar con paño húmedo: nada de agua a presión ni sumergirlo",
        "Para guardarlo mucho tiempo, dejar la batería al 50-70 % y recargarla cada 30-60 días",
        "Revisar periódicamente pastillas y cables de freno",
      ],
    },
  },
  {
    id: "kukirin-g2-ultra",
    videoId: "5_9tLLKq6Vg",
    videoCanal: "Le Vélo Urbain",
    marca: "KuKirin",
    modelo: "G2 Ultra",
    precioEur: null, // sin tarifa oficial verificable (verificado 20/10/2026),
    potenciaNominalW: 1600,
    potenciaPicoW: 2000,
    autonomiaKm: 55,
    autonomiaRealKm: 37,
    velocidadMaxKmh: 50,
    pesoKg: 31,
    cargaMaxKg: 120,
    tiempoCargaH: 9,
    bateriaWh: 864,
    frenos: "Disco delantero y trasero + freno electrónico",
    neumaticos: '10" tubeless',
    certificadoDgt: null,
    foto: "/media/patinetes/kukirin-g2-ultra-1.webp",
    galeria: [
      {
        src: "/media/patinetes/kukirin-g2-ultra-2.webp",
        alt: "Detalle de la pantalla táctil del KuKirin G2 Ultra",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/patinetes/kukirin-g2-ultra-3.webp",
        alt: "KuKirin G2 Ultra de noche en la ciudad",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["pesoKg", "tiempoCargaH", "autonomiaRealKm"],
    pros: [
      "Doble motor de 800 W (2.000 W de pico): tracción total contenida",
      "Pantalla táctil inteligente: la más avanzada de KuKirin",
      "864 Wh (48V 18Ah): 55 km declarados",
      "120 kg de carga máxima",
      "50 km/h: rápido sin llegar a la locura del G4",
    ],
    contras: [
      "Sin precio oficial: KuKirin no publica una tarifa oficial verificable del G2 Ultra",
      "9 horas de carga",
      "31 kg: pesado",
      "A 50 km/h no es VMP legal en España",
      "La pantalla táctil con guantes es un engorro",
    ],
    veredicto:
      "El G2 con tracción total y pantalla táctil: más tecnológico que el G2 Max, pero con menos autonomía. Para gadget-lovers.",
    fuenteNombre: "KuKirin EU (eu-kukirin.com)",
    fuenteUrl: "https://eu-kukirin.com/",
    mantenimientoDIY: {
      presionNeumaticos: "2,2-2,3 bar (220-230 kPa) según el manual",
    },
  },
  {
    id: "kukirin-m5-pro",
    videoId: "oBHQ40GSTu4",
    videoCanal: "Movelectrics",
    marca: "KuKirin",
    modelo: "M5 Pro",
    precioEur: 799,
    potenciaNominalW: 1000,
    potenciaPicoW: 1200,
    autonomiaKm: 70,
    autonomiaRealKm: 47,
    velocidadMaxKmh: 52,
    pesoKg: 36.2,
    cargaMaxKg: 120,
    tiempoCargaH: 8.5,
    bateriaWh: 960,
    frenos: "Disco de 140 mm delantero y trasero",
    neumaticos: "11\" delantero / 10\" trasero neumáticos",
    certificadoDgt: null,
    foto: "/media/patinetes/kukirin-m5-pro-oficial.webp",
    galeria: [
      {
        "src": "/media/patinetes/kukirin-m5-pro-2.webp",
        "alt": "Detalle del sillín del KuKirin M5 Pro",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/patinetes/kukirin-m5-pro-3.webp",
        "alt": "KuKirin M5 Pro con sillín en ruta",
        "ancho": 1200,
        "alto": 800
      }
    ],
    aprox: [
      "tiempoCargaH",
      "autonomiaRealKm"
    ],
    pros: [
      "1.000 W (1.200 W de pico) con sillín incluido",
      "960 Wh (48V 20Ah): 70 km declarados",
      "Suspensión de cuatro brazos: muy cómodo",
      "120 kg de carga máxima",
      "52 km/h: buen ritmo para su concepto"
    ],
    contras: [
      "36,2 kg: el más pesado de esta lista de KuKirin",
      "8-9 horas de carga",
      "Con sillín no es para todos los gustos ni usos",
      "A 52 km/h no es VMP legal en España",
      "El plegado con sillín es voluminoso"
    ],
    veredicto: "El KuKirin rutero con sillín: cómodo y con autonomía para ir sentado a todas partes. Si te gusta el concepto, no tiene rival en precio.",
    fuenteNombre: "KuKirin.es (tienda oficial en España)",
    fuenteUrl: "https://kukirin.es/producto/patinete-electrico-kukirin-m5-pro/",
    mantenimientoDIY: {
      "presionNeumaticos": "Mantener la presión indicada en el flanco del neumático (según el manual oficial KuKirin)",
      "aprieteTornilleria": "Revisar periódicamente que todos los tornillos estén apretados (manual oficial)",
      "trucos": [
        "Limpiar con paño húmedo: nada de agua a presión ni sumergirlo",
        "Para guardarlo mucho tiempo, dejar la batería al 50-70 % y recargarla cada 30-60 días",
        "Revisar periódicamente pastillas y cables de freno"
      ]
    },
    fuentesExtra: [
      {
        "nombre": "KuKirin.es: ficha del M5 Pro (799 €, antes 999 €; 1.000 W, 48 V 20 Ah, hasta 70 km, IP54, 120 kg)",
        "url": "https://kukirin.es/producto/patinete-electrico-kukirin-m5-pro/",
        "fecha": "2026-10-31"
      },
      {
        "nombre": "BOE: Real Decreto 518/2026 (casco y edad mínima de 15 años en VMP)",
        "url": "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-13889",
        "fecha": "2026-06-26"
      }
    ],
    datosVerificadosEl: "2026-10-31",
    rivalesTabla: [
      {
        "id": "kukirin-g3",
        "nombre": "KuKirin G3",
        "precioEur": 699,
        "autonomiaKm": 70,
        "potenciaW": 1200,
        "pesoKg": 31,
        "nota": "Sin sillín; Alphascootz.eu"
      },
      {
        "id": "kukirin-g2-master",
        "nombre": "KuKirin G2 Master",
        "precioEur": 849,
        "autonomiaKm": 70,
        "potenciaW": 2000,
        "pesoKg": 33.1,
        "nota": "EZ Bikes"
      },
      {
        "id": "kukirin-g4",
        "nombre": "KuKirin G4",
        "precioEur": 859,
        "autonomiaKm": 75,
        "potenciaW": 2000,
        "pesoKg": 34.5,
        "nota": "KuKirin EU"
      }
    ],
    faqExtra: [
      {
        "q": "¿Cuánto cuesta el KuKirin M5 Pro en la tienda española?",
        "a": "KuKirin.es lo anuncia a 799 € con impuestos incluidos, rebajado desde 999 €, y estima la entrega en 3-5 días laborables. Precio consultado el 31/10/2026; en la misma consulta la web mostraba la etiqueta «Sold out», así que confirma el stock antes de pagar."
      },
      {
        "q": "¿Se puede limitar el M5 Pro a 25 km/h?",
        "a": "Sí: la tienda indica que alcanza hasta 52 km/h y que se puede limitar a 25 km/h. Un VMP legal tiene una velocidad máxima de construcción de 25 km/h (Reglamento General de Vehículos, modificado por el Real Decreto 970/2020). Sin el limitador, a 52 km/h no es un VMP y no puede circular por vías urbanas como tal. Además, la web no menciona certificado DGT para este modelo."
      },
      {
        "q": "¿Para qué sirve el baúl trasero del M5 Pro?",
        "a": "KuKirin lo describe como un anclaje trasero desmontable con un pequeño baúl, pensado como base para bolsa o maleta de reparto. Con sillín y baúl el patinete pesa 36,2 kg según nuestra ficha, algo a tener en cuenta si hay que subirlo a pulso."
      },
      {
        "q": "¿Qué exige la ley para usarlo en la ciudad?",
        "a": "Casco homologado o certificado y abrochado (artículo 118.3 del Reglamento General de Circulación) y 15 años cumplidos (artículo 155.3), según el Real Decreto 518/2026 en vigor desde el 1 de octubre de 2026."
      }
    ]
  },
  // ─────────────────────────── JOYOR (6) ──────────────────────────
  {
    id: "joyor-lr8",
    videoId: null,
    videoCanal: null,
    marca: "Joyor",
    modelo: "LR8",
    precioEur: 770,
    potenciaNominalW: 500,
    potenciaPicoW: null,
    autonomiaKm: 72,
    autonomiaRealKm: 50,
    velocidadMaxKmh: 45,
    pesoKg: 38.1,
    cargaMaxKg: 118,
    tiempoCargaH: null,
    bateriaWh: 1253,
    frenos: "Tambor",
    neumaticos: '14" neumáticos',
    certificadoDgt: null,
    foto: "/media/patinetes/joyor-lr8-1.webp",
    galeria: [
      {
        src: "/media/patinetes/joyor-lr8-2.webp",
        alt: "Detalle de la rueda de 14 pulgadas del Joyor LR8",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/patinetes/joyor-lr8-3.webp",
        alt: "Joyor LR8 en carretera",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["precioEur", "pesoKg", "bateriaWh", "autonomiaRealKm"],
    pros: [
      "Batería enorme (1.253 Wh): 72 km declarados",
      "Ruedas de 14\": las más grandes de su rango, muy cómodas",
      "500 W con buena respuesta en llano",
      "8/10 en reviews especializadas: fiable a largo plazo",
      "118 kg de carga máxima",
    ],
    contras: [
      "Sin precio oficial: Joyor no publica una tarifa oficial verificable del LR8",
      "38,1 kg: muy pesado para su potencia",
      "Frenos de tambor: menos mordiente que el disco",
      "A 45 km/h no es VMP legal en España",
      "Diseño algo tosco",
      "La marca Joyor tiene postventa irregular en Europa",
    ],
    veredicto:
      "Autonomía bruta con ruedas gigantes: el LR8 es para quien prioriza kilómetros y comodidad sobre agilidad. Un camello con ruedas.",
    fuenteNombre: "Electric Scooter Guides",
    fuenteUrl: "https://www.electricscooterguides.com/reviews/joyor-lr8",
    mantenimientoDIY: {
      intervaloRevision:
        "Inspeccionar el patinete y los neumáticos cada mes, comprobando el apriete de los tornillos (manual oficial)",
      aprieteTornilleria:
        "Comprobar cada mes que los tornillos estén bien apretados; si están flojos, apretarlos (manual oficial)",
      ajusteFrenosPasos: [
        "Frenar en condiciones normales con la maneta trasera; la delantera o el pie solo en emergencias (manual oficial)",
        "Un frenazo brusco puede bloquear las ruedas y dañar el neumático",
      ],
      trucos: [
        "El control de crucero se activa manteniendo el acelerador a la misma presión durante 3 segundos",
        "Arranque seguro: el motor solo arranca con el patinete en movimiento, dando una patada primero",
        "Batería de polímero de litio con unos 1.000 ciclos de vida media: cargarla a tope antes del primer uso",
        "Neumáticos desgastados o pinchados: sustituirlos en el distribuidor oficial",
      ],
    },
  },
  {
    id: "joyor-lr10",
    videoId: null,
    videoCanal: null,
    marca: "Joyor",
    modelo: "LR10",
    precioEur: 684,
    potenciaNominalW: 2000,
    potenciaPicoW: null,
    autonomiaKm: 92,
    autonomiaRealKm: 62,
    velocidadMaxKmh: 64,
    pesoKg: null,
    cargaMaxKg: null,
    tiempoCargaH: null,
    bateriaWh: 1080,
    frenos: null,
    neumaticos: '10" off-road',
    certificadoDgt: null,
    foto: "/media/patinetes/joyor-lr10-1.webp",
    galeria: [
      {
        src: "/media/patinetes/joyor-lr10-2.webp",
        alt: "Detalle del chasis del Joyor LR10",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/patinetes/joyor-lr10-3.webp",
        alt: "Joyor LR10 en pista de tierra",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["precioEur", "autonomiaRealKm"],
    pros: [
      "Doble motor de 1.000 W: tracción total",
      "1.080 Wh (60V 18Ah): 92 km declarados",
      "64 km/h: prestaciones altas",
      "Neumáticos off-road de 10\": vale para campo",
      "Chasis de aluminio aeroespacial con plegado en 3 pasos",
    ],
    contras: [
      "Sin precio oficial: Joyor no publica una tarifa oficial verificable del LR10",
      "Precio en Europa no publicado de forma estable",
      "Peso no publicado: se espera por encima de 30 kg",
      "A 64 km/h, ilegal en vía pública española",
      "La autonomía real con doble motor cae mucho",
      "Joyor: red de servicio limitada",
    ],
    veredicto:
      "El doble motor asequible de Joyor: si buscas tracción total sin pagar 2.000 €, el LR10 es candidato. Verifica el vendedor.",
    fuenteNombre: "Electric Scooter Guides",
    fuenteUrl: "https://www.electricscooterguides.com/reviews/joyor-lr10",
    mantenimientoDIY: {
      intervaloRevision:
        "Inspeccionar el patinete y los neumáticos cada mes, comprobando el apriete de los tornillos (manual oficial)",
      aprieteTornilleria:
        "Comprobar cada mes que los tornillos estén bien apretados; si están flojos, apretarlos (manual oficial)",
      ajusteFrenosPasos: [
        "Frenar en condiciones normales con la maneta trasera; la delantera o el pie solo en emergencias (manual oficial)",
        "Un frenazo brusco puede bloquear las ruedas y dañar el neumático",
      ],
      trucos: [
        "El control de crucero se activa manteniendo el acelerador a la misma presión durante 3 segundos",
        "Arranque seguro: el motor solo arranca con el patinete en movimiento, dando una patada primero",
        "Batería de polímero de litio con unos 1.000 ciclos de vida media: cargarla a tope antes del primer uso",
        "Neumáticos desgastados o pinchados: sustituirlos en el distribuidor oficial",
      ],
    },
  },
  {
    id: "joyor-s5-pro",
    videoId: "w0KF7Dht9K0",
    videoCanal: "Wicka Wille",
    marca: "Joyor",
    modelo: "S5 Pro",
    precioEur: 529,
    potenciaNominalW: 500,
    potenciaPicoW: null,
    autonomiaKm: 90,
    autonomiaRealKm: 61,
    velocidadMaxKmh: 20,
    pesoKg: 22.1,
    cargaMaxKg: 120,
    tiempoCargaH: null,
    bateriaWh: 1248,
    frenos: "Disco delantero y trasero",
    neumaticos: '10" neumáticos',
    certificadoDgt: null,
    foto: "/media/patinetes/joyor-s5-pro-1.webp",
    galeria: [
      {
        src: "/media/patinetes/joyor-s5-pro-2.webp",
        alt: "Detalle del Joyor S5 Pro",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/patinetes/joyor-s5-pro-3.webp",
        alt: "Joyor S5 Pro en Berlín",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaRealKm"],
    pros: [
      "La certificación ABE alemana lo hace legal en Alemania",
      "Sus 1.248 Wh, con 48 V y 26 Ah, dan 90 km declarados",
      "Por 529 € es muy buen precio para una batería así",
      "Con 22,1 kg es ligero para la autonomía que ofrece",
      "La doble suspensión usa una patente propia de Joyor",
    ],
    contras: [
      "El tope de 20 km/h de la norma alemana lo hace lento para España",
      "La ABE alemana no sustituye al certificado DGT español",
      "Los 500 W son justos para cuestas con 120 kg encima",
      "La pantalla es pequeña",
      "La postventa europea es irregular",
    ],
    veredicto:
      "Un patinete pensado para Alemania que en España interesa por precio y batería: si el tope de 20 km/h no te importa, tienes un chollo con 90 km.",
    fuenteNombre: "Joyor (joyor.com)",
    fuenteUrl: "https://joyor.com/",
    mantenimientoDIY: {
      intervaloRevision:
        "Inspeccionar el patinete y los neumáticos cada mes, comprobando el apriete de los tornillos (manual oficial)",
      aprieteTornilleria:
        "Comprobar cada mes que los tornillos estén bien apretados; si están flojos, apretarlos (manual oficial)",
      ajusteFrenosPasos: [
        "Frenar en condiciones normales con la maneta trasera; la delantera o el pie solo en emergencias (manual oficial)",
        "Un frenazo brusco puede bloquear las ruedas y dañar el neumático",
      ],
      trucos: [
        "El control de crucero se activa manteniendo el acelerador a la misma presión durante 3 segundos",
        "Arranque seguro: el motor solo arranca con el patinete en movimiento, dando una patada primero",
        "Batería de polímero de litio con unos 1.000 ciclos de vida media: cargarla a tope antes del primer uso",
        "Neumáticos desgastados o pinchados: sustituirlos en el distribuidor oficial",
      ],
    },
  },
  {
    id: "joyor-t10",
    videoId: "3kMYdgS49pY",
    videoCanal: "Luca Canella - Nasellone Nazionale",
    marca: "Joyor",
    modelo: "T10",
    precioEur: 669,
    potenciaNominalW: 2000,
    potenciaPicoW: null,
    autonomiaKm: 75,
    autonomiaRealKm: 50,
    velocidadMaxKmh: 65,
    pesoKg: 29.6,
    cargaMaxKg: 120,
    tiempoCargaH: null,
    bateriaWh: 1080,
    frenos: "Disco hidráulico Zoom 120 mm delantero y trasero",
    neumaticos: '10" off-road neumáticos',
    certificadoDgt: null,
    foto: "/media/patinetes/joyor-t10-1.webp",
    galeria: [
      {
        src: "/media/patinetes/joyor-t10-2.webp",
        alt: "Detalle de los frenos hidráulicos del Joyor T10",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/patinetes/joyor-t10-3.webp",
        alt: "Joyor T10 en camino rural",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["autonomiaKm", "velocidadMaxKmh", "autonomiaRealKm"],
    pros: [
      "Doble motor de 1.000 W por 669 €: el más barato de su clase",
      "Frenos hidráulicos Zoom de 120 mm: frenada seria",
      "Suspensión hidráulica delantera y trasera",
      "1.080 Wh (60V 18Ah): hasta 75 km declarados",
      "29,6 kg: contenido para un doble motor",
    ],
    contras: [
      "Desbloqueado llega a 65 km/h: ilegal en vía pública española",
      "La potencia pico no está publicada",
      "Acabados mejorables para el trato duro",
      "La autonomía real en modo dual ronda los 40-50 km",
      "Servicio técnico limitado en España",
    ],
    veredicto:
      "El doble motor más barato de Europa: por 669 € no hay rival en potencia y frenos. Eso sí, úsalo con cabeza y donde sea legal.",
    fuenteNombre: "Joyor (joyor.com)",
    fuenteUrl: "https://joyor.com/",
    mantenimientoDIY: {
      intervaloRevision:
        "Inspeccionar el patinete y los neumáticos cada mes, comprobando el apriete de los tornillos (manual oficial)",
      aprieteTornilleria:
        "Comprobar cada mes que los tornillos estén bien apretados; si están flojos, apretarlos (manual oficial)",
      ajusteFrenosPasos: [
        "Frenar en condiciones normales con la maneta trasera; la delantera o el pie solo en emergencias (manual oficial)",
        "Un frenazo brusco puede bloquear las ruedas y dañar el neumático",
      ],
      trucos: [
        "El control de crucero se activa manteniendo el acelerador a la misma presión durante 3 segundos",
        "Arranque seguro: el motor solo arranca con el patinete en movimiento, dando una patada primero",
        "Batería de polímero de litio con unos 1.000 ciclos de vida media: cargarla a tope antes del primer uso",
        "Neumáticos desgastados o pinchados: sustituirlos en el distribuidor oficial",
      ],
    },
  },
  {
    id: "joyor-s10-s-z",
    videoId: "SmSiY1L3Mfk",
    videoCanal: "e-VRC",
    marca: "Joyor",
    modelo: "S10-S-Z",
    precioEur: 609,
    potenciaNominalW: 2000,
    potenciaPicoW: null,
    autonomiaKm: 75,
    autonomiaRealKm: 50,
    velocidadMaxKmh: 60,
    pesoKg: 27,
    cargaMaxKg: 120,
    tiempoCargaH: 11,
    bateriaWh: 1080,
    frenos: "Disco hidráulico delantero y trasero",
    neumaticos: '10" off-road neumáticos',
    certificadoDgt: null,
    foto: "/media/patinetes/joyor-s10-s-z-1.webp",
    galeria: [
      {
        src: "/media/patinetes/joyor-s10-s-z-2.webp",
        alt: "Detalle del Joyor S10-S-Z",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/patinetes/joyor-s10-s-z-3.webp",
        alt: "Joyor S10-S-Z en la ciudad",
        ancho: 1200,
        alto: 800,
      },
    ],
    aprox: ["tiempoCargaH", "autonomiaRealKm"],
    pros: [
      "Doble motor de 1.000 W por 609 €: aún más barato que el T10",
      "Frenos hidráulicos delanteros y traseros",
      "1.080 Wh (60V 18Ah): 75 km declarados",
      "Intermitentes y claxon: bien equipado",
      "27 kg: ligero para ser doble motor",
    ],
    contras: [
      "10-12 horas de carga: una noche entera",
      "A 60 km/h no es VMP legal en España",
      "La potencia pico no está publicada",
      "Suspensión menos elaborada que la del T10",
      "La gama Joyor se solapa: T10 y S10-S-Z compiten entre sí",
    ],
    veredicto:
      "El hermano barato del T10: casi lo mismo por 60 € menos, pero con peor suspensión y carga eterna. Por poco más, el T10 compensa.",
    fuenteNombre: "Joyor (joyor.com)",
    fuenteUrl: "https://joyor.com/products/joyor-s10-s-z-electric-scooter",
    mantenimientoDIY: {
      intervaloRevision:
        "Inspeccionar el patinete y los neumáticos cada mes, comprobando el apriete de los tornillos (manual oficial)",
      aprieteTornilleria:
        "Comprobar cada mes que los tornillos estén bien apretados; si están flojos, apretarlos (manual oficial)",
      ajusteFrenosPasos: [
        "Frenar en condiciones normales con la maneta trasera; la delantera o el pie solo en emergencias (manual oficial)",
        "Un frenazo brusco puede bloquear las ruedas y dañar el neumático",
      ],
      trucos: [
        "El control de crucero se activa manteniendo el acelerador a la misma presión durante 3 segundos",
        "Arranque seguro: el motor solo arranca con el patinete en movimiento, dando una patada primero",
        "Batería de polímero de litio con unos 1.000 ciclos de vida media: cargarla a tope antes del primer uso",
        "Neumáticos desgastados o pinchados: sustituirlos en el distribuidor oficial",
      ],
    },
  },
];
