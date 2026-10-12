// Datos del Glosario del coche eléctrico (/glosario y /glosario/:termino).
// Cifras de ejemplo tomadas SOLO de src/lib/comparador-coches-data.ts y de los
// artículos del blog: no inventar cifras. CocheId = id del comparador/blog.
export interface EjemploTermino {
  texto: string;
  cocheId: string; // slug del comparador (/coches/{id})
  cocheNombre: string;
}

export interface TerminoMotor {
  slug: string;
  nombre: string; // nombre legible, ej. "Par motor"
  definicion: string[]; // párrafos, 2-4 frases en total
  ejemplo: EjemploTermino;
  ejemplo2?: EjemploTermino;
  porQueImporta: string; // 1 frase
  relacionados: string[]; // slugs de otros términos
}

export const TERMINOS: TerminoMotor[] = [
  {
    slug: "par-motor",
    nombre: "Par motor",
    definicion: [
      "El par motor es la fuerza de giro que entrega el motor a las ruedas, y se mide en Newton-metro (Nm).",
      "En un coche eléctrico, el par está disponible al instante, desde parado: por eso hasta un utilitario eléctrico sale con una contundencia que un gasolina no iguala.",
      "No lo confundas con la potencia (CV): la potencia dice lo rápido que puedes ir, el par dice lo fuerte que empuja el coche al acelerar o adelantar.",
    ],
    ejemplo: {
      texto:
        "El Alpine A390 homologa 650 Nm de par: acelera de 0 a 100 km/h en 4,8 segundos pese a ser un SUV.",
      cocheId: "alpine-a390-precio-ficha-tecnica",
      cocheNombre: "Alpine A390",
    },
    ejemplo2: {
      texto:
        "El BYD Atto 2, mucho más modesto, entrega 290 Nm, suficiente para un uso diario ágil.",
      cocheId: "byd-atto-2-precio-ficha-tecnica",
      cocheNombre: "BYD Atto 2",
    },
    porQueImporta:
      "A igualdad de potencia, el coche con más par es el que empuja con más fuerza en adelantamientos y subidas.",
    relacionados: ["kwh", "wltp"],
  },
  {
    slug: "wltp",
    nombre: "WLTP",
    definicion: [
      "WLTP (Worldwide Harmonised Light Vehicles Test Procedure) es el protocolo oficial de homologación que se usa en Europa para medir el consumo y la autonomía de los coches.",
      "Se realiza en laboratorio con un ciclo de conducción estándar, así que permite comparar marcas entre sí, pero no es lo que gastarás de verdad: en la práctica, la autonomía real suele ser entre un 15 % y un 30 % inferior según la velocidad, el frío y tu conducción.",
    ],
    ejemplo: {
      texto:
        "El Peugeot E-5008 anuncia 499 km de autonomía WLTP: tómalo como el mejor de los casos y calcula que en autopista en invierno hará bastante menos.",
      cocheId: "peugeot-e-5008-electrico-7-plazas-precio",
      cocheNombre: "Peugeot E-5008",
    },
    porQueImporta:
      "Es la única cifra oficial que permite comparar la autonomía de dos modelos en igualdad de condiciones.",
    relacionados: ["cltc", "kwh", "carga-rapida-dc"],
  },
  {
    slug: "cltc",
    nombre: "CLTC",
    definicion: [
      "CLTC (China Light-Duty Vehicle Test Cycle) es el protocolo de homologación que se usa en China para medir consumo y autonomía.",
      "Su ciclo de conducción es más benévolo que el WLTP europeo (velocidades medias más bajas y más paradas), así que las cifras CLTC siempre son más altas que las WLTP para el mismo coche.",
      "Por eso, cuando un fabricante chino anuncia la autonomía de un modelo que aún no ha llegado a Europa, la cifra suele venir en CLTC y no es comparable con los WLTP de sus rivales.",
    ],
    ejemplo: {
      texto:
        "El Xiaomi YU7, aún sin homologación europea, anuncia hasta 835 km en ciclo CLTC en su versión china: espera una cifra WLTP sensiblemente inferior cuando llegue aquí.",
      cocheId: "xiaomi-yu7-suv-electrico-llegada-europa",
      cocheNombre: "Xiaomi YU7",
    },
    porQueImporta:
      "Si comparas una autonomía en CLTC con otra en WLTP, la china siempre parecerá mejor aunque sea el mismo coche.",
    relacionados: ["wltp", "kwh"],
  },
  {
    slug: "kwh",
    nombre: "kWh",
    definicion: [
      "El kilovatio-hora (kWh) es la unidad de energía: en un eléctrico, indica cuánta energía almacena la batería, igual que los litros indican el tamaño del depósito en un gasolina.",
      "No lo confundas con el kW (kilovatio), que mide potencia: kWh es la energía que guarda la batería, kW es lo rápido que puede entregarla o cargarse.",
      "Más kWh no siempre es mejor: una batería más grande pesa más y encarece el coche, así que la autonomía real depende también del consumo (kWh/100 km).",
    ],
    ejemplo: {
      texto:
        "El BYD Atto 2 lleva una batería de 45,1 kWh y con ella homologa 312 km WLTP, con un consumo de 16 kWh cada 100 km.",
      cocheId: "byd-atto-2-precio-ficha-tecnica",
      cocheNombre: "BYD Atto 2",
    },
    porQueImporta:
      "Es el dato que te dice el «tamaño del depósito» del eléctrico: con la capacidad y el consumo puedes estimar su autonomía real.",
    relacionados: ["wltp", "carga-rapida-dc"],
  },
  {
    slug: "carga-rapida-dc",
    nombre: "Carga rápida DC",
    definicion: [
      "La carga rápida DC (corriente continua) es la que se hace en los cargadores de autopista y electrolineras: la corriente llega directa a la batería sin pasar por el cargador interno del coche.",
      "Se mide en kW y dice lo rápido que el coche puede recargar: a más kW, menos tiempo parado. Lo habitual es hablar del tiempo de carga del 10 % al 80 %.",
      "Ojo: el coche solo acepta la potencia máxima durante parte de la carga; en frío o con la batería muy llena, la velocidad baja por protección.",
    ],
    ejemplo: {
      texto:
        "El Smart #5 admite hasta 400 kW de carga rápida DC, entre las cifras más altas de su segmento.",
      cocheId: "smart-5-electrico-ficha-tecnica-precio",
      cocheNombre: "Smart #5",
    },
    ejemplo2: {
      texto:
        "El Zeekr 9X carga a 330 kW en continua y recupera del 10 % al 80 % en solo 9,5 minutos.",
      cocheId: "zeekr-9x-2026-precio-ficha-tecnica",
      cocheNombre: "Zeekr 9X",
    },
    porQueImporta:
      "En viajes largos, una buena carga rápida importa más que unos kilómetros extra de autonomía: es lo que reduce las paradas a la mitad.",
    relacionados: ["kwh", "wltp"],
  },
  {
    slug: "etiqueta-dgt",
    nombre: "Etiqueta DGT",
    definicion: [
      "La etiqueta ambiental de la DGT clasifica los vehículos según sus emisiones: 0 (CERO), ECO, B y C.",
      "Todos los eléctricos puros llevan la etiqueta CERO, y también los híbridos enchufables con suficiente autonomía eléctrica homologada.",
      "La etiqueta no es decorativa: determina si puedes entrar en las Zonas de Bajas Emisiones, aparcar con descuento y, en el caso del CERO, acceder a las ayudas a la compra como el Plan Auto+.",
    ],
    ejemplo: {
      texto:
        "El Skoda Peaq, eléctrico puro, tiene etiqueta CERO, igual que todos los eléctricos del comparador.",
      cocheId: "skoda-peaq-suv-electrico-7-plazas-precio",
      cocheNombre: "Skoda Peaq",
    },
    ejemplo2: {
      texto:
        "El Dacia Bigster Hybrid 155, híbrido no enchufable, se queda en etiqueta ECO: la CERO está reservada a los enchufables y eléctricos.",
      cocheId: "dacia-bigster-hybrid-precio-espana",
      cocheNombre: "Dacia Bigster Hybrid 155",
    },
    porQueImporta:
      "Sin etiqueta CERO no puedes optar a las ayudas del Plan Auto+ ni circular libremente por todas las ZBE.",
    relacionados: ["hibrido-enchufable-phev", "autonomia-extendida-erev"],
  },
  {
    slug: "bomba-de-calor",
    nombre: "Bomba de calor",
    definicion: [
      "La bomba de calor es un sistema de climatización que calienta el habitáculo aprovechando el calor del aire exterior, en lugar de usar resistencias eléctricas como una estufa.",
      "Consume mucha menos energía de la batería que la calefacción por resistencia, así que en invierno el coche pierde menos autonomía: es uno de los equipamientos que más se notan cuando hace frío.",
      "Si usas el eléctrico todo el año y vives en una zona fría, comprueba si la incluye o si es un extra que merece la pena pagar.",
    ],
    ejemplo: {
      texto:
        "En la ficha del Peugeot E-5008 puedes ver su autonomía oficial de 499 km WLTP: con bomba de calor, la cifra de invierno se acerca más a ese valor.",
      cocheId: "peugeot-e-5008-electrico-7-plazas-precio",
      cocheNombre: "Peugeot E-5008",
    },
    porQueImporta:
      "En invierno, la calefacción es el mayor ladrón de autonomía después de la velocidad: la bomba de calor lo reduce.",
    relacionados: ["wltp", "kwh"],
  },
  {
    slug: "v2l",
    nombre: "V2L (Vehicle to Load)",
    definicion: [
      "V2L (Vehicle to Load) es la función que permite usar la batería del coche como un enchufe gigante: alimenta portátiles, cafeteras, herramientas o incluso electrodomésticos de camping.",
      "Se conecta a través de un adaptador o un enchufe específico del coche, y entrega una potencia limitada (unos miles de vatios), más que suficiente para usos ocasionales.",
      "No todos los eléctricos la traen: es un equipamiento que conviene buscar si haces escapadas, acampadas o trabajas con herramientas fuera de casa.",
    ],
    ejemplo: {
      texto:
        "El Renault Twingo E-Tech ofrece V2L de hasta 3.700 W: puedes conectar un portátil, una nevera de camping o una cafetera sin problema.",
      cocheId: "renault-twingo-e-tech-2026-precio-ficha-tecnica",
      cocheNombre: "Renault Twingo E-Tech",
    },
    ejemplo2: {
      texto:
        "El Lepas L8, híbrido enchufable, también incluye V2L entre su equipamiento.",
      cocheId: "lepas-l8-chery-hibrido-enchufable-precio-espana",
      cocheNombre: "Lepas L8",
    },
    porQueImporta:
      "Convierte tu coche en una fuente de energía portátil: en una acampada o un apagón, vale más que cualquier extra estético.",
    relacionados: ["kwh", "carga-rapida-dc"],
  },
  {
    slug: "autonomia-extendida-erev",
    nombre: "Autonomía extendida (EREV)",
    definicion: [
      "Un EREV (Extended Range Electric Vehicle) es un vehículo que siempre se mueve con el motor eléctrico, pero lleva un pequeño motor de gasolina que actúa solo como generador: recarga la batería en marcha sin mover nunca las ruedas.",
      "Es la diferencia con un híbrido enchufable convencional: en el EREV no hay conexión mecánica entre el gasolina y las ruedas, así que la conducción es 100 % eléctrica siempre.",
      "Resultado: la autonomía eléctrica diaria de un eléctrico (para ir al trabajo sin gastar gasolina) más la autonomía total de un térmico para viajes largos.",
    ],
    ejemplo: {
      texto:
        "El Zeekr 9X homologa 179 km en modo cero emisiones y 737 km de autonomía total combinando batería y generador.",
      cocheId: "zeekr-9x-2026-precio-ficha-tecnica",
      cocheNombre: "Zeekr 9X",
    },
    ejemplo2: {
      texto:
        "El Li Auto L6, también de autonomía extendida, ofrece 212 km eléctricos según su ficha.",
      cocheId: "li-auto-l6-ficha-tecnica-precio",
      cocheNombre: "Li Auto L6",
    },
    porQueImporta:
      "Es la solución para quien quiere conducción eléctrica diaria pero no se fía de hacer 800 km de viaje solo con batería.",
    relacionados: ["hibrido-enchufable-phev", "wltp", "etiqueta-dgt"],
  },
  {
    slug: "hibrido-enchufable-phev",
    nombre: "Híbrido enchufable (PHEV)",
    definicion: [
      "Un híbrido enchufable (PHEV, Plug-in Hybrid Electric Vehicle) combina un motor de gasolina con uno eléctrico y una batería que se puede cargar enchufándolo a la red.",
      "En modo eléctrico recorre entre 50 y 150 km sin gastar una gota; cuando se agota la batería, el gasolina toma el relevo como en un híbrido normal.",
      "Truco y trampa: solo ahorra si lo enchufas a diario. Un PHEV que nunca se carga es un gasolina pesado que consume más que un híbrido normal.",
    ],
    ejemplo: {
      texto:
        "El Omoda 9 SHS es un PHEV con 145 km de autonomía eléctrica, batería de 34,46 kWh y 537 CV combinados.",
      cocheId: "omoda-9-shs-precio-ficha-tecnica",
      cocheNombre: "Omoda 9 SHS",
    },
    ejemplo2: {
      texto:
        "El Lepas L8 ofrece 90 km eléctricos, suficientes para el día a día sin encender el gasolina.",
      cocheId: "lepas-l8-chery-hibrido-enchufable-precio-espana",
      cocheNombre: "Lepas L8",
    },
    porQueImporta:
      "Es el punto medio perfecto si tienes dónde enchufar cada noche: entre semana no gastas gasolina y en viaje largo no dependes de cargadores.",
    relacionados: ["autonomia-extendida-erev", "etiqueta-dgt", "carga-rapida-dc"],
  },
];
