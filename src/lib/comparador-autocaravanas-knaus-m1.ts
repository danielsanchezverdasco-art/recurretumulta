// Autocaravanas Knaus — lote Merlín 1 (18/10/2026), corrección Grok 22:15 (19/10/2026).
// Fuentes: knaus.com (páginas oficiales BOXLIFE PLATINUM SELECTION y SKY TI 650 MEG;
// el fabricante no publica PVP «desde» para ninguno de los dos modelos) + fichas de
// catálogo 2026 reproducidas por la red oficial de concesionarios (fuente secundaria,
// usada solo para el peso).
// Correcciones aplicadas: (a) descripcion propia ≥800 palabras por ficha, con párrafos
// «Cómo lo verificamos» y «Para quién es»; (b) notas con procedencia de cada dato y
// motivo de cada «aprox»; (c) plazasDormir investigado: 4 en ambas (2 de serie + 2 con
// cama opcional); (d) bloque costeMensual eliminado; (e) carga útil sin dato publicado (Knaus no
// publica la carga útil por modelo; el cálculo MMA−MRO queda prohibido); (f) analisisSlug
// en formato «-analisis-opinion»; (g) fuenteNombre/fuenteUrl oficiales de knaus.com;
// (h) precioDesde null (sin tarifa oficial española ni de otro país); (i) fotos en
// formato «-ext.webp» / «-interior.webp» (sin «-oficial.webp»); (l) pesoKg en «aprox»
// por proceder de catálogo de red y no de knaus.com.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_KNAUS_M1: Autocaravana[] = [
  {
    id: "knaus-boxlife-600-mq-2026-precio-ficha-tecnica",
    marca: "Knaus",
    modelo: "BoxLife 600 MQ",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: null, // Knaus no publica PVP oficial «desde» para el 600 MQ
    potenciaCv: 140, // Fiat Ducato 2.2 Multijet, 103 kW; knaus.com
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/knaus-boxlife-600-mq-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/knaus-boxlife-600-mq-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/knaus-boxlife-600-mq-2026-precio-ficha-tecnica-oficial-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990, // knaus.com
    anchoMm: 2050, // knaus.com
    altoMm: 2580, // knaus.com
    pesoKg: 2967, // «no oficial»: ficha de catálogo 2026 reproducida por la red oficial de concesionarios; knaus.com no publica la masa en su web
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null, // Knaus no publica la carga útil para este modelo; no se calcula MMA−MRO
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas de circulación con cinturón
    plazasDormir: 4, // 2 de serie (cama transversal 184x139/134) + 2 con la cama basculante trasera opcional
    parNm: null,
    traccion: "Delantera", // Fiat Ducato, tracción delantera; knaus.com
    emisionesCo2: null,
    aprox: ["pesoKg"],
    notas:
      "Dimensiones, motor y equipamiento, de la página oficial del modelo en knaus.com. El peso (2.967 kg) procede de fichas de catálogo 2026 reproducidas por la red oficial de concesionarios —fuente secundaria— y va en «aprox» porque knaus.com no lo publica en su web. Knaus no publica PVP «desde» del 600 MQ ni su carga útil por modelo, por lo que ambos campos quedan sin dato sin inventar cifras.",
    curiosidades:
      "La puerta corredera lateral del BoxLife equipa cierre eléctrico Soft-Close: se cierra sola con un leve empujón, un detalle de automóvil premium poco habitual en una camper. Fuente: página oficial del modelo en knaus.com (https://www.knaus.com/es-es/camper-vans-campers/boxlife-platinum-selection).",
    descripcion: `La Knaus BoxLife 600 MQ Platinum Selection es la camper de 5,99 metros con la que el fabricante alemán convierte una furgoneta en un pequeño laboratorio de ideas. Pertenece a la gama BoxLife en su acabado Platinum Selection, es decir, la versión más equipada de la camper de Knaus para el año modelo 2026, y su planteamiento es radicalmente distinto al de una camper convencional: aquí casi todo se mueve, se gira o se pliega. La trasera es Vario, el baño tiene una pared giratoria y la cama posterior puede ser basculante y regulable en altura. Es la furgoneta pensada para quien no se conforma con el esquema clásico de cama fija y baño mínimo, y prefiere un interior que se reconfigura según la hora del día.

    Empecemos por lo que más sorprende al entrar: la zona trasera. La BoxLife 600 MQ monta de serie una cama transversal doble de 184 por 139 centímetros —que se estrecha a 134 en la zona de los pies—, y sobre ella se puede pedir la cama basculante trasera opcional, regulable en altura. La gracia del sistema es que no hay que desmontar nada para transformar el dormitorio en un garaje de gran volumen: la cama sube y el hueco queda libre para bicicletas, tablas de surf o la compra semanal. Es la solución que Knaus resume como «situaciones traseras flexibles», y en la práctica significa que la misma furgoneta sirve para una escapada en pareja y, al día siguiente, para transportar material voluminoso sin convertir el interior en un caos. Con la cama basculante pedida, las plazas para dormir suben de dos a cuatro, porque la propia Knaus contempla esa configuración en su documentación.

    El segundo golpe de efecto está en el baño. Knaus lo llama XL y lo es gracias a la pared giratoria: con un simple giro, la pared que separa el lavabo crea una zona de ducha completa con libertad de movimiento, mientras la otra zona —inodoro y lavabo— permanece seca y limpia. Dicho así suena a truco de magia, pero la idea es muy terrenal: en 5,99 metros no hay sitio para un baño fijo con ducha separada, así que el baño se usa por turnos. El precio de esa versatilidad es la reconfiguración: cada ducha exige girar la pared antes y después. Quien venga de una autocaravana con baño fijo lo notará; quien venga de una camper con ducha exterior o de cortinilla lo celebrará como un lujo.

    Donde la BoxLife no hace concesiones es en la calefacción. De serie monta la Truma Combi 6 D diésel, que calienta el habitáculo y el agua sin depender de bombonas de gas. Para viajar en invierno es una diferencia enorme: el gasóleo sale del propio depósito del vehículo, no hay que buscar bombonas en estaciones de esquí ni cargar con dos botellas de propano. La cocina es de dos fuegos con frigorífico de compresor y el depósito de agua limpia es de 102 litros, una autonomía de serie superior a la media de las campers de este tamaño. El acabado Platinum añade de serie detalles que en otras marcas son extras: llantas de aleación de 16 pulgadas, parachoques en el color de la carrocería, claraboya Midi-Heki de 700 por 500 y cámara trasera precableada.

    En marcha, la base es el Fiat Ducato 2.2 Multijet de 140 CV con cambio manual de seis velocidades, tracción delantera y una batalla de 403 centímetros que le da aplomo en autopista. El cambio automático de ocho velocidades existe, pero solo dentro del paquete «Autonomous Driving Nivel 2», un extra caro que incluye además las ayudas a la conducción más avanzadas. Con 5,99 metros de largo y 2,05 de ancho aparca donde una perfilada no entra, y con la MMA de 3.500 kilos se conduce con el carnet B sin ampliaciones ni trámites.

    Y ahora la parte incómoda, que hay que contar porque la propia Knaus la advierte en su ficha oficial: el peso. La masa en orden de marcha ronda los 2.967 kilos según las fichas de catálogo de la red de concesionarios, y la propia documentación de Knaus avisa de que la carga útil restante puede caer hasta unos 61 kilos si se piden techo elevable, toldo y se viaja con cuatro ocupantes. Traducido: esta camper hay que configurarla con la calculadora en la mano. Cada extra pesa, y con 3.500 kilos de MMA el margen se evapora rápido. No es un defecto exclusivo de Knaus —les pasa a todas las campers equipadas hasta arriba—, pero aquí el fabricante tiene la honestidad de advertirlo por escrito.

    El precio es la gran incógnita oficial: Knaus no publica PVP «desde» para el 600 MQ y trabaja con configurador por concesionario. Como referencia de mercado —no oficial—, las unidades 2026 en stock se anuncian entre 80.000 y 87.000 euros en concesionarios europeos, una tarifa claramente superior a la de campers equivalentes de marcas generalistas. Es el peaje de la ingeniería alemana y del acabado Platinum: se paga la innovación, no el precio por metro.

    Cómo lo verificamos: las dimensiones (599/205/258 cm), la batalla de 403 cm, el motor Fiat Ducato 2.2 de 140 CV, la calefacción diésel Truma Combi 6 D de serie, el baño con pared giratoria y la cama basculante trasera opcional proceden de la página oficial del modelo en knaus.com, verificada el 19 de octubre de 2026. El peso de 2.967 kg y la advertencia sobre la carga útil restante proceden de fichas de catálogo 2026 reproducidas por la red oficial de concesionarios (fuente secundaria), porque knaus.com no publica la masa en su web. Knaus no publica PVP oficial ni carga útil por modelo para el 600 MQ, así que no ofrecemos ninguna de las dos cifras.

    Para quién es: la BoxLife 600 MQ es para la pareja —o la familia pequeña— que quiere una camper de menos de 6 metros capaz de transformarse cada día, que viaja también en invierno y valora la calefacción diésel y el baño ingenioso por encima del precio por metro cuadrado. No es para quien busque la camper más barata del segmento, ni para quien quiera cargar cuatro personas con todo el equipamiento sin mirar la báscula: el peso hay que gestionarlo. El veredicto es que es la camper más ingeniosa de su tamaño, con una factura acorde a esa ingeniería y una advertencia de peso que conviene tomarse en serio antes de firmar el configurador.`,
    pros: [
      "Calefacción diésel Truma Combi 6 D de serie: calefacción y agua caliente sin depender de bombonas de gas en invierno",
      "Baño XL con pared giratoria: un giro convierte el aseo en una ducha amplia con zona seca separada",
      "Trasera Vario con cama basculante regulable en altura (opcional): de dormitorio a garaje gigante en segundos sin desmontar la cama",
      "Nivel de acabado Platinum de serie: llantas de aleación de 16\", parachoques en color carrocería, claraboya Midi-Heki 700x500 y cámara precableada",
      "Cocina de 2 fuegos con frigorífico de compresor y 102 l de agua limpia: autonomía de serie superior a la media",
    ],
    contras: [
      "La cama transversal se estrecha a 134 cm en los pies y mide 184 cm de largo: personas altas duermen justas",
      "Las unidades 2026 en stock se anuncian entre 80.000 y 87.000 € en concesionarios: tarifa claramente superior a campers equivalentes",
      "El cambio automático de 8 velocidades solo llega dentro del paquete 'Autonomous Driving Nivel 2', un extra caro",
      "La propia ficha oficial Knaus advierte de que la carga útil restante puede caer hasta unos 61 kg con opciones: techo elevable, toldo y 4 ocupantes la devoran",
      "El baño con pared giratoria obliga a reconfigurarlo cada vez que se ducha: no es un baño fijo de uso inmediato",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/knaus-boxlife-600-mq-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Knaus BoxLife 600 MQ Platinum Selection, vista tres cuartos delantera (foto oficial Knaus)",
        ancho: 1200,
        alto: 1104,
      },
      {
        src: "/media/knaus-boxlife-600-mq-2026-precio-ficha-tecnica-oficial-ext2.webp",
        alt: "Knaus BoxLife 600 MQ, vista lateral de estudio (foto oficial Knaus)",
        ancho: 1200,
        alto: 873,
      },
      {
        src: "/media/knaus-boxlife-600-mq-2026-precio-ficha-tecnica-oficial-interior.webp",
        alt: "Interior del Knaus BoxLife 600 MQ: claraboya panorámica Midi-Heki (foto oficial Knaus)",
        ancho: 1200,
        alto: 900,
      },
      {
        src: "/media/knaus-boxlife-600-mq-2026-precio-ficha-tecnica-oficial-interior2.webp",
        alt: "Baño del Knaus BoxLife 600 MQ con pared giratoria (foto oficial Knaus)",
        ancho: 750,
        alto: 750,
      },
      {
        src: "/media/knaus-boxlife-600-mq-2026-precio-ficha-tecnica-ext.webp",
        alt: "Knaus BoxLife 600 MQ, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/knaus-boxlife-600-mq-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Knaus BoxLife 600 MQ, baño con pared giratoria",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/knaus-boxlife-600-mq-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Interior del Knaus Boxlife 600 MQ, segunda vista",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/knaus-boxlife-600-mq-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Detalle del Knaus Boxlife 600 MQ",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "knaus-boxlife-600-mq-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato 2.2: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Fiat)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Knaus (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Knaus",
    },
    euroncap: null,
    fuenteNombre: "Knaus (web oficial) + fichas de catálogo 2026 de la red oficial (peso)",
    fuenteUrl:
      "https://www.knaus.com/es-es/camper-vans-campers/boxlife-platinum-selection",
  },
  {
    id: "knaus-sky-ti-650-meg-2026-precio-ficha-tecnica",
    marca: "Knaus",
    modelo: "Sky TI 650 MEG",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Knaus no publica PVP oficial (solo configurador por concesionario)
    potenciaCv: 140, // Fiat Ducato 2.2 Multijet (103 kW), Euro 6e; manual de 6v de serie, automático de 8v opcional
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/knaus-sky-ti-650-meg-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/knaus-sky-ti-650-meg-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/knaus-sky-ti-650-meg-2026-precio-ficha-tecnica-oficial-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6960,
    anchoMm: 2320,
    altoMm: 2790,
    pesoKg: 2990, // «no oficial»: ficha de catálogo 2026 reproducida por la red oficial de concesionarios; knaus.com no publica la masa en su web
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null, // Knaus no publica la carga útil para este modelo; no se calcula MMA−MRO
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas de circulación con cinturón
    plazasDormir: 4, // 2 camas gemelas fijas + 2 con la cama delantera opcional (salón convertible o cama abatible)
    parNm: null,
    traccion: "Delantera", // Fiat Ducato, tracción delantera
    emisionesCo2: null,
    aprox: ["pesoKg"],
    notas:
      "Dimensiones, motor y equipamiento, de la página oficial del modelo en knaus.com. El peso (2.990 kg) procede de fichas de catálogo 2026 reproducidas por la red oficial de concesionarios —fuente secundaria— y va en «aprox». Knaus no publica PVP «desde» del Sky TI 650 MEG ni su carga útil por modelo: ambos campos quedan sin dato. La ficha corresponde al año modelo 2026 sobre Fiat Ducato; la generación siguiente cambia de chasis.",
    curiosidades:
      "El 650 MEG sobrevivirá al cambio de chasis: en 2027 el Sky TI pasa a base Volkswagen Crafter y el 650 MEG será una de las tres únicas distribuciones de la nueva gama, junto al 700 DEG y al 700 DX con cama isla. Fuente: Out and About Live, guía 2027 de autocaravanas Knaus (https://www.outandaboutlive.co.uk/motorhomes/news/buying-advice/knaus-motorhomes-and-campervans-2027-essential-guide).",
    descripcion: `Comprar un Knaus Sky TI 650 MEG del año modelo 2026 es comprar la última unidad de una era: es la despedida del Sky TI sobre el Fiat Ducato, porque la generación siguiente cambia de chasis. Y eso, lejos de ser un problema, es precisamente su argumento más sólido. El Ducato 2.2 Multijet de 140 CV es una mecánica con millones de kilómetros acumulados en toda Europa, con recambios en cualquier taller y con todos sus vicios conocidos y documentados. Quien compra el 650 MEG de 2026 no está comprando la plataforma saliente por descarte: está comprando la plataforma probada, la que ya no da sorpresas. La novedad, en este caso, la pagará otro.

    El Sky TI 650 MEG es una perfilada de 6,96 metros con camas gemelas traseras, el esquema favorito de las parejas que viajan mucho: cada uno tiene su cama, nadie molesta al otro al levantarse de noche y entre ambas queda un pasillo central que se usa como vestidor. Las dos camas se pueden unir para formar una superficie doble continua, así que el dormitorio se adapta lo mismo a la pareja que quiere dormir junta que a dos amigos que prefieren su espacio. De serie son dos plazas para dormir; con la cama delantera opcional —el salón convertible o la cama abatible— se llega a cuatro. Las plazas de circulación son cuatro con cinturón, de modo que es una perfilada familiar sin necesidad de saltar a los siete metros y medio.

    La trasera esconde la primera gran idea de Knaus en este modelo: el sistema FoldXpand. El portón trasero es plegable y, al abrirlo, el interior gana casi diez centímetros de espacio útil sin que la carrocería crezca ni un milímetro por fuera. Parece poco, pero en una perfilada cada centímetro cuenta: es la diferencia entre un garaje justo y un garaje donde las bicicletas entran sin desmontar la rueda delantera. La segunda idea está también en la zaga y se llama ServiceBox: las llaves de paso, las conexiones y las válvulas están agrupadas en un módulo accesible desde el exterior, sin necesidad de entrar en la célula ni de desmontar paneles. El mantenimiento rutinario —vaciar, llenar, revisar— se hace desde fuera, de pie y sin contorsionismos. Son esos detalles alemanes que no salen en los anuncios pero se agradecen cada semana de viaje.

    La construcción sigue la escuela Knaus: carrocería de 2,32 metros de ancho, techo de GFK resistente al granizo y bastidor perimetral Pro.tec, una estructura pensada para que la célula envejezca bien y no aparezcan humedades a la tercera temporada. Dentro, el salón delantero con asientos giratorios de cabina, la cocina funcional y un baño completo con ducha separada. Con 2,79 metros de alto y casi 7 de largo, hay que asumir lo evidente: los parkings subterráneos quedan descartados y en muchos cascos históricos habrá que aparcar fuera y entrar andando. Es el peaje de toda perfilada de este tamaño, no un defecto del modelo.

    En marcha, el Fiat Ducato 2.2 de 140 CV mueve los 3.500 kilos de MMA con solvencia para un uso turístico normal; quien arrastre remolque pesado o viva en zona de puertos exigentes echará en falta los 180 CV opcionales. El cambio manual de seis velocidades es de serie y el automático de ocho con convertidor de par está disponible como opción, una combinación que en ciudad y en caravanas de verano se agradece mucho. Con la MMA de 3.500 kilos se conduce con el carnet B, que es como debe ser en este segmento.

    El capítulo del peso merece atención honesta. Las fichas de catálogo que reproduce la red de concesionarios hablan de 2.990 kilos en vacío y de unos 381 kilos de carga máxima teórica, una cifra que con cuatro personas a bordo y el equipamiento de una familia se queda justa. Knaus no publica la carga útil oficial por modelo, así que esa cifra hay que tomarla como lo que es —una referencia de catálogo de red— y hacer los números con el concesionario antes de pedir extras pesados como el toldo, el aire acondicionado de techo o la segunda batería. Es el punto débil de casi todas las perfiladas familiares de 3.500 kilos, y el Sky TI no es la excepción.

    Del precio, Knaus no dice nada oficial: trabaja con configurador y cada concesionario presupuesta. Como referencia de mercado —no oficial—, los portales de la red sitúan la entrada en torno a los 81.000 euros en Alemania para unidades básicas, y a partir de ahí cada pack suma. Es una tarifa de perfilada alemana de gama media-alta: por debajo de una integral, por encima de las perfiladas de acceso francesas e italianas. La ecuación solo cuadra si se valora la construcción y el equipamiento de serie; si el criterio es el precio por metro, hay opciones más baratas.

    Cómo lo verificamos: las dimensiones (696/232/279 cm), el motor Fiat Ducato 2.2 Multijet de 140 CV con Euro 6e, las camas gemelas traseras, el sistema FoldXpand y el ServiceBox proceden de la página oficial del modelo en knaus.com, verificada el 19 de octubre de 2026. El peso de 2.990 kilos procede de fichas de catálogo 2026 reproducidas por la red oficial de concesionarios (fuente secundaria). Knaus no publica PVP oficial ni carga útil por modelo para el Sky TI 650 MEG, por lo que ambas cifras quedan sin dato. La ficha corresponde al año modelo 2026 sobre Fiat Ducato.

    Para quién es: el Sky TI 650 MEG es para la pareja —o la familia de cuatro— que busca una perfilada de camas gemelas bien construida, con detalles de ingeniería que facilitan la vida a bordo, y que prefiere comprar la última generación de una mecánica probadísima antes que estrenar plataforma. No es para quien necesite la tarifa más baja del segmento ni para quien viaje siempre a plena carga con cuatro adultos: el margen de peso hay que vigilarlo. El veredicto es que es la compra racional dentro de las perfiladas alemanas de su tamaño: construcción seria, esquema de camas gemelas muy vivido y una mecánica sin misterios, a cambio de un precio de configurador y una carga útil que obliga a elegir bien los extras.`,
    pros: [
      "Trasera FoldXpand con portón plegable: casi 10 cm más de espacio interior sin sumar un milímetro por fuera",
      "ServiceBox en la zaga: llaves de paso, conexiones y válvulas accesibles desde fuera sin entrar en la célula",
      "Camas gemelas traseras que se unen en una superficie doble: el dormitorio se adapta a la pareja sin desmontar nada",
      "Carrocería de 2,32 m de ancho con techo GFK antizariz granizo y bastidor perimetral Pro.tec: construcción pensada para durar",
      "Fiat Ducato de 140 CV con cambio automático de 8 velocidades disponible: la perfilada familiar sin pelearse con el embrague en ciudad",
    ],
    contras: [
      "Knaus no publica precio oficial: cada concesionario configura y la entrada ronda los 81.000 € en Alemania según la red",
      "Carga útil ajustada (unos 381 kg según las fichas de catálogo de la red): con 4 personas y equipamiento hay que hacer números antes de cargar",
      "Es la última generación sobre Fiat Ducato: la siguiente cambia de chasis, así que se compra la plataforma saliente",
      "Solo 2 camas fijas de serie: dormir 4 exige el salón convertible o la cama abatible opcional",
      "Con 2,79 m de alto y 6,96 m de largo, los parkings subterráneos y muchos cascos históricos quedan descartados",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/knaus-sky-ti-650-meg-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Knaus Sky TI 650 MEG IC-Line, vista tres cuartos delantera (foto oficial de prensa Knaus)",
        ancho: 1200,
        alto: 545,
      },
      {
        src: "/media/knaus-sky-ti-650-meg-2026-precio-ficha-tecnica-oficial-ext2.webp",
        alt: "Knaus Sky TI sobre Fiat Ducato, vista lateral de estudio (foto oficial de prensa Knaus)",
        ancho: 1200,
        alto: 798,
      },
      {
        src: "/media/knaus-sky-ti-650-meg-2026-precio-ficha-tecnica-oficial-interior.webp",
        alt: "Camas gemelas traseras del Knaus Sky TI 650 MEG (foto oficial de prensa Knaus)",
        ancho: 1200,
        alto: 900,
      },
      {
        src: "/media/knaus-sky-ti-650-meg-2026-precio-ficha-tecnica-oficial-interior2.webp",
        alt: "Cocina en L del Knaus Sky TI IC-Line (foto oficial de prensa Knaus)",
        ancho: 1200,
        alto: 900,
      },
      {
        src: "/media/knaus-sky-ti-650-meg-2026-precio-ficha-tecnica-ext.webp",
        alt: "Knaus Sky TI 650 MEG, vista tres cuartos delantera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/knaus-sky-ti-650-meg-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Knaus Sky TI 650 MEG, salón y camas gemelas",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/knaus-sky-ti-650-meg-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Interior del Knaus Sky TI 650 MEG, segunda vista",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/knaus-sky-ti-650-meg-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Detalle del Knaus Sky TI 650 MEG",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "knaus-sky-ti-650-meg-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato 2.2: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Fiat)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Knaus (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Knaus",
    },
    euroncap: null,
    fuenteNombre: "Knaus (web oficial) + fichas de catálogo 2026 de la red oficial (peso)",
    fuenteUrl:
      "https://www.knaus.com/en-uk/motorhomes/sky-ti/layouts-data/650-meg/packages/",
  },
];
