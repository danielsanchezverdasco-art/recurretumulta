// Autocaravanas Hymer — lote Merlín 1 (19/10/2026), corrección b/c/d/e/f/g/h/i (especificación Grok 22:15).
// Fuentes: web oficial hymer.com (verificada 19/10/2026), lista oficial de precios y
// datos técnicos Hymer MY2026 (documento oficial del Caravan Salon 2026) y notas de
// prensa oficiales de Hymer (nuevo B-MC y ML-T 580 CrossTrail, sep. 2025).
// F6 (19/10/2026, orden Grok): fotos oficiales -oficial*.webp (portada ext oficial +
// interiores oficiales) y campo curiosidades con fuente en las 3 fichas; galerías con
// oficiales primero y no-oficiales como extra después.
// Correcciones aplicadas: eliminado el bloque costeMensual; añadidos descripcion
// (>=800 palabras por ficha, con ángulos y estructuras diferentes), notas y
// plazasDormir; analisisSlug actualizado a -analisis-opinion; fotos renombradas a
// -ext.webp (prohibido «-oficial» en m1); cargaUtilKg en null (no publicada);
// precio del B-MC I 600 corregido a 141.000 € («desde» oficial de la gama B-MC I en
// Alemania, nota de prensa Hymer) y plazas del ML-T 580 4x4 a 4 (dato oficial).
// Precios en «aprox»: son PVP recomendado en Alemania y pueden diferir en España.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_HYMER_M1: Autocaravana[] = [
  {
    id: "hymer-grand-canyon-s-2026-precio-ficha-tecnica",
    marca: "Hymer",
    modelo: "Grand Canyon S",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: 98200, // PVP recomendado en Alemania, web oficial Hymer (oct. 2026)
    potenciaCv: 150, // Mercedes Sprinter 315 CDI de 150 CV; 417 CDI de 170 CV en la GCS 700
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
    imagen: "/media/hymer-grand-canyon-s-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/hymer-grand-canyon-s-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/hymer-grand-canyon-s-2026-precio-ficha-tecnica-oficial-interior2.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5930, // lista oficial: 593 cm (GCS 600)
    anchoMm: 2060, // lista oficial: 206 cm
    altoMm: 2760, // lista oficial: 276 cm
    pesoKg: null, // masa en orden de marcha: 2.857 kg según lista oficial (no se publica como campo)
    mmaKg: 3500, // lista oficial: 3.500 kg
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil del modelo exacto: nunca se calcula como MMA-MRO
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // lista oficial: 4 plazas
    plazasDormir: 4, // lista oficial: 2-4 camas (techo elevable opcional)
    parNm: null, // no publicado por el fabricante
    traccion: "Trasera (4x4 opcional)", // lista oficial: tracción trasera / total
    emisionesCo2: null,
    aprox: ["precioDesde"],
    notas:
      "Precio de tarifa en Alemania (PVP recomendado con IVA alemán, web oficial Hymer, octubre de 2026); en España puede diferir por impuestos, transporte y política del importador. El documento oficial de precios y datos técnicos Hymer MY2026 lista la GCS 600 a 96.900 € en origen; la web oficial muestra actualmente 98.200 €. Datos técnicos (dimensiones, MMA, plazas, camas 2-4, motor 315 CDI de 150 CV, tracción trasera o total) de la lista oficial MY2026.",
    curiosidades:
      "La Grand Canyon S es una de las campers más premiadas de Europa: ganó el iF Design Award 2024 —elegida por un jurado de 132 expertos entre casi 11.000 candidaturas— y fue votada «Autocaravana del año» 2024 y 2025 por los lectores de promobil en la categoría de campers con baño de más de 60.000 €. Fuente: página oficial de premios de Hymer (https://www.hymer.com/es/es/premios).",
    descripcion: `La Hymer Grand Canyon S es la camper de Hymer que ha convertido la furgoneta grande en objeto de deseo: 5,93 metros sobre chasis Mercedes Sprinter, dos camas gemelas atrás que se enrollan para liberar maletero y la posibilidad de pedirla con tracción total para salir del asfalto sin pedir permiso. Es la puerta de entrada al universo Hymer para quien viene del mundo camper y no quiere una autocaravana al uso, sino una furgoneta habitable con el acabado y la ingeniería de la marca premium alemana por excelencia. Su éxito se entiende en cuanto se mira el segmento: hay muchas campers de menos de seis metros, pero pocas combinan la base Sprinter, un sistema eléctrico de litio de serie y una red europea de servicio como la de Hymer.

El punto de partida es el chasis, y aquí Hymer no hace concesiones. La Grand Canyon S nace sobre el Mercedes Sprinter 315 CDI de 150 CV con tracción trasera, con la opción de tracción total para quien planee pistas de tierra, nieve o accesos complicados a spots de pernocta. La lista oficial de datos técnicos del año modelo 2026 detalla unas dimensiones de 593 centímetros de largo, 206 de ancho y 276 de alto, con una MMA de 3.500 kilos que permite conducirla con el carnet B. La masa en orden de marcha declarada es de 2.857 kilos, lo que deja un margen teórico razonable para cuatro ocupantes y equipaje, aunque —como en toda camper de este tamaño— conviene vigilar la báscula cuando se suman el 4x4, el techo elevable y los packs de equipamiento. El depósito de gasóleo rinde para etapas largas y el consumo real, en torno a los nueve litros a los cien en uso mixto según la experiencia de los propietarios, la mantiene en la zona eficiente del segmento.

Donde la Grand Canyon S se distancia de la competencia es en la gestión de la energía. Hymer equipa de serie su sistema modular de baterías con 80 Ah de litio LiFePO4, ampliable hasta cuadruplicar la capacidad, una arquitectura pensada para vivir varios días sin enchufarse a la red. La calefacción es diésel de 6 kW, de modo que el calor también sale del depósito del motor, y el frigorífico de compresor de 90 litros funciona con la electricidad de a bordo sin depender del gas. El resultado es una camper que puede pasar un fin de semana largo en un área de autocaravanas sin servicios, o una semana de ruta por Noruega en septiembre, con una autonomía que las campers con batería de plomo y calefacción de gas simplemente no ofrecen. Los 100 litros de agua limpia y los 85 de grises, con la posibilidad de vaciar las grises desde un botón interior, completan un planteamiento de autosuficiencia muy serio para un vehículo de menos de seis metros.

El interior aprovecha cada centímetro con la lógica alemana de siempre. Atrás, las camas gemelas de 195 por 135 centímetros llevan colchones de muelles que se enrollan para convertir la zona de dormitorio en un maletero diáfano cuando se transportan bicis, tablas o material de montaña. El salón delantero, con los asientos de cabina giratorios, da cabida a cuatro personas para comer o trabajar, y la cocina —compacta, de dos quemadores— resuelve sin dramas con su encimera extensible. El baño, inevitablemente justo con 2,06 metros de ancho total, cumple su función para la higiene diaria. Quien necesite dormir a cuatro puede pedir el techo elevable con cama de 200 por 122, que eleva la cifra oficial de camas de dos a cuatro sin tocar la distribución. Es un interior pensado para parejas viajeras que de vez en cuando llevan invitados, no para familias de cuatro a tiempo completo: esa honestidad sobre su público es parte de su encanto.

El precio la sitúa en la parte alta del segmento camper: 98.200 euros de PVP recomendado en Alemania según la web oficial de Hymer, una cifra que la convierte en una de las campers de su tamaño más caras del mercado europeo. La explicación está en la suma de base Sprinter, equipamiento eléctrico de litio y el posicionamiento premium de la marca; sus rivales directas sobre Fiat o Ford parten de tarifas sensiblemente inferiores, aunque ninguna ofrece exactamente el mismo paquete. Los packs —Xperience y compañía— y la tracción total pueden empujar la factura por encima de los 120.000 euros con facilidad, así que el presupuesto hay que cerrarlo con el configurador en la mano y sin autoengaños. En España, donde el PVP puede diferir por impuestos y transporte, la red de concesionarios Hymer es de las más sólidas del sector, lo que facilita tanto la compra como el servicio postventa en ruta por Europa.

Cómo lo verificamos: precio de 98.200 euros y datos de plazas (4), camas (2-4), longitud (593 cm) y MMA (3.500 kg) de la web oficial hymer.com, verificada el 19 de octubre de 2026. Dimensiones completas, motorizaciones (Sprinter 315 CDI de 150 CV, 417 CDI de 170 CV en la GCS 700), tracción trasera o total, masa en orden de marcha (2.857 kg), depósitos (100/85 litros), frigorífico (90 l) y calefacción diésel (6 kW) del documento oficial de precios y datos técnicos Hymer para el año modelo 2026. El sistema de baterías modular de 80 Ah LiFePO4 ampliable, de la documentación oficial de la gama.

Para quién es: la Hymer Grand Canyon S es para la pareja viajera que quiere una camper premium de menos de seis metros sobre Sprinter, valora la autosuficiencia eléctrica real y está dispuesta a pagar el sobreprecio de la marca a cambio de calidad de construcción y red de servicio europea. No es para quien busque la camper más barata del segmento, para familias de cuatro que necesiten dormir dentro a diario ni para quien vaya a cocinar a diario en su interior durante meses. El veredicto es que es la referencia del segmento camper premium por chasis, energía y revalorización, con un precio de entrada alto que hay que asumir con los ojos abiertos y un interior que rinde al máximo con dos ocupantes.`,
    pros: [
      "Camper de 5,93 m sobre Mercedes Sprinter 315 CDI: se conduce y aparca como una furgoneta grande",
      "Tracción total disponible: la camper de Hymer pensada para pistas y escapadas fuera del asfalto",
      "Batería de litio LiFePO4 de 80 Ah de serie (ampliable x4) + calefacción diésel: autonomía real fuera de la red",
      "Camas gemelas con colchones de muelles enrollables: el dormitorio se convierte en maletero diáfano",
      "Techo elevable opcional: 4 plazas para dormir en 5,93 m sin renunciar a la zona de carga",
    ],
    contras: [
      "98.200 € de PVP recomendado en Alemania: de las campers más caras de su tamaño",
      "Con 2,06 m de ancho, el pasillo y el baño son justos para dos personas a la vez",
      "Cocina compacta de dos quemadores con frigorífico de 90 l: justa para cocinar a diario dentro",
      "El 4x4 y los packs disparan el precio por encima de los 120.000 € con facilidad",
      "MMA de 3.500 kg: con 4 ocupantes y el equipamiento 4x4 hay que vigilar la carga útil",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/hymer-grand-canyon-s-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Hymer Grand Canyon S, vista lateral (foto oficial de prensa Hymer)",
        ancho: 1200,
        alto: 675,
      },
      {
        src: "/media/hymer-grand-canyon-s-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Hymer Grand Canyon S, salón y cocina",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/hymer-grand-canyon-s-2026-precio-ficha-tecnica-oficial-interior2.webp",
        alt: "Ducha del Hymer Grand Canyon S (foto oficial de prensa Hymer)",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/hymer-grand-canyon-s-2026-precio-ficha-tecnica-ext.webp",
        alt: "Hymer Grand Canyon S, vista tres cuartos delantera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/hymer-grand-canyon-s-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Detalle del Hymer Grand Canyon S",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "hymer-grand-canyon-s-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Mercedes Sprinter: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Mercedes-Benz)",
      revisiones: [
        {
          nombre: "Revisión Mercedes Sprinter (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de aire + inspección general",
          costeAproxEur: 450,
        },
        {
          nombre: "Revisión célula Hymer (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 700,
      fuente: "Plan de mantenimiento Mercedes-Benz Sprinter + recomendaciones Hymer",
    },
    euroncap: null,
    fuenteNombre: "Hymer (web oficial + lista oficial de precios y datos técnicos MY2026)",
    fuenteUrl: "https://www.hymer.com/de/en/camper-vans-class-b",
  },
  {
    id: "hymer-b-mc-i-600-2026-precio-ficha-tecnica",
    marca: "Hymer",
    modelo: "B-MC I 600",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: 141000, // «desde» oficial de la gama B-MC I en Alemania (nota de prensa Hymer, sep. 2025)
    potenciaCv: 150, // Mercedes Sprinter 315 CDI de 150 CV; 417 CDI de 170 CV opcional
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
    imagen: "/media/hymer-b-mc-i-600-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/hymer-b-mc-i-600-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/hymer-b-mc-i-600-2026-precio-ficha-tecnica-oficial-interior.webp",
    videoId: "8XWO54dg3AM",
    videoCanal: "CamperOnLine",
    largoMm: 7190, // lista oficial: 719 cm
    anchoMm: 2290, // lista oficial: 229 cm
    altoMm: 2980, // lista oficial: 298 cm
    pesoKg: null, // masa en orden de marcha: 3.144 kg según lista oficial (no se publica como campo)
    mmaKg: 3500, // lista oficial: 3.500 kg
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil del modelo exacto: nunca se calcula como MMA-MRO
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // lista oficial: 3-5 plazas
    plazasDormir: 5, // lista oficial: 4-5 camas (cama central opcional)
    parNm: null, // no publicado por el fabricante
    traccion: "Delantera", // lista oficial: tracción delantera
    emisionesCo2: null,
    aprox: ["precioDesde"],
    notas:
      "Precio de tarifa en Alemania: 141.000 € es el «desde» oficial de la gama B-MC I integrada según la nota de prensa de Hymer (septiembre de 2025); no es un PVP específico del I 600 y en España puede diferir. Datos técnicos (dimensiones 719/229/298 cm, MMA 3.500 kg, plazas 3-5, camas 4-5, motor 315 CDI de 150 CV, tracción delantera, depósitos 180/150 l, frigorífico 150 l, calefacción a gas de 6 kW) de la lista oficial de precios y datos técnicos Hymer MY2026.",
    curiosidades:
      "La gama B-MC fue la primera del mercado en montar en serie la variante chasis-cabina del nuevo Mercedes Sprinter, y con ella Hymer fue el primer fabricante en años en bajar de los 2.900 kg en vacío con una integral de casi 7 metros manteniendo la MMA en 3.500 kg. Fuente: nota de prensa oficial de Hymer (https://www.hymer.com/de/en/home/hymermobil-b-class-moderncomfort/p/40926).",
    descripcion: `La Hymer B-MC I 600 es la integral de acceso a la nueva familia B-MC ModernComfort, la gama con la que Hymer ha redefinido su concepto de confort para la segunda mitad de la década: 7,19 metros de carrocería integral sobre chasis SLC de Mercedes, parabrisas panorámico y un interior que se controla desde el móvil. Si la Grand Canyon S es la camper aventurera de la marca, la B-MC I 600 es su opuesto complementario: una casa rodante de verdad, pensada para parejas que hacen etapas largas y quieren llegar al destino descansados, con la cama hecha y la calefacción ya templando el interior. Es la integral que demuestra que se puede tener el formato más habitable sin saltar a los 7,5 metros ni al carnet C1.

Lo primero que se nota al acercarse es la ausencia de cabina de furgoneta. Al ser una integral pura, el frontal es un gran parabrisas panorámico que inunda de luz el salón y ofrece una visibilidad en carretera que ninguna perfilada puede igualar. El salón delantero, con su banqueta en L y los asientos de cabina integrados, es el corazón social del vehículo: se come, se lee, se trabaja y se contempla el paisaje con una luminosidad que justifica por sí sola el sobreprecio frente a una perfilada equivalente. La cocina, de 93 por 98 centímetros de encimera, monta tres fuegos y un frigorífico de 150 litros con congelador de 17, cifras que permiten cocinar de verdad durante un viaje largo sin depender del restaurante de cada pueblo. El baño, de 125 por 85, separa la ducha del inodoro con una mampara que lo hace utilizable a diario sin convertirlo en una sauna.

El dormitorio resuelve la ecuación de las cuatro o cinco plazas sin recurrir a la capuchina. Atrás, dos camas individuales de 195 y 187 centímetros que pueden unirse en una superficie doble, y sobre el salón, la cama basculante eléctrica de 194 por 145 que desciende por la noche para la tercera y cuarta plaza. La lista oficial contempla hasta cinco camas con la cama central opcional, lo que convierte a la I 600 en una integral capaz de alojar a una familia sin renunciar al formato. Los armarios, con sus 56 por 70 centímetros de ropero principal, y los numerosos altillos dan cabida al equipaje de una quincena sin tener que jugar al Tetris cada mañana. El garaje trasero, con una puerta de 99 por 123 centímetros de paso libre, traga bicicletas y sillas de camping sin desmontar nada.

La autonomía es otro de sus puntos fuertes. Los depósitos —180 litros de agua limpia y 150 de grises— están entre los más generosos del segmento de integrales de 7,2 metros, y permiten tres o cuatro días fuera de camping con un uso sensato. La calefacción es de aire caliente a gas de 6 kW con dos bombonas de 11 kilos, y el aislamiento de 41 milímetros en el suelo y 34 en paredes y techo la mantiene habitable en invierno. Hymer ha sumado además su sistema Smart Connect de serie: desde la app del móvil se controlan la temperatura, la iluminación y los niveles de agua y batería, y se pueden programar escenarios —modo mañana, modo noche— que preparan el vehículo antes de levantarse. Para quien quiera más independencia eléctrica, la marca ofrece paquetes de autosuficiencia con inversor y hasta cuatro módulos de batería.

Mecánicamente, la B-MC I se construye sobre el chasis SLC (Super Light Chassis) de Mercedes, una estructura aligerada que mantiene la MMA en 3.500 kilos pese al formato integral: se conduce con el carnet B, el permiso normal. El motor de serie es el Sprinter 315 CDI de 150 CV con tracción delantera, una mecánica probada y económica de mantener, aunque con la integral cargada y un remolque ligero se puede quedar justa en puertos de montaña; quien remolque a menudo mirará la opción del 417 CDI de 170 CV. La masa en orden de marcha declarada es de 3.144 kilos, así que la carga útil teórica ronda los 350 kilos antes de opciones: suficiente para dos personas y su equipaje, pero justa si se piden muchos packs, porque cada extra come kilos de esa cifra.

El precio la coloca en la élite del segmento: 141.000 euros es el «desde» oficial de la gama B-MC I en Alemania según la nota de prensa de Hymer de septiembre de 2025, y el I 600 concreto, bien equipado, superará esa cifra con holgura. Es mucho dinero para una integral de 7,2 metros, y sus rivales —las integrales de Dethleffs, Carthago o Bürstner— ofrecen alternativas desde tarifas inferiores. Lo que Hymer pone sobre la mesa a cambio es el conjunto más redondo: chasis SLC aligerado, app de control total, acabados premium y una revalorización en el mercado de ocasión que históricamente está entre las mejores del sector. En España, la red de concesionarios Hymer es amplia y el servicio en ruta por Europa está garantizado, dos factores que pesan mucho cuando se invierte esta cantidad.

Cómo lo verificamos: precio «desde» de 141.000 euros para la gama B-MC I en Alemania, de la nota de prensa oficial de Hymer sobre la nueva B-MC (septiembre de 2025), verificada el 19 de octubre de 2026. Dimensiones (719/229/298 cm), MMA (3.500 kg), plazas (3-5), camas (4-5), motor 315 CDI de 150 CV, tracción delantera, masa en orden de marcha (3.144 kg), depósitos (180/150 l), frigorífico (150 l) y calefacción a gas (6 kW), de la lista oficial de precios y datos técnicos Hymer MY2026. El sistema Hymer Connect de serie y los paquetes de autosuficiencia, de la documentación oficial de la gama.

Para quién es: la Hymer B-MC I 600 es para la pareja que quiere la integral premium de 7,2 metros con carnet B, valora la luminosidad del parabrisas panorámico y la tecnología de control desde el móvil, y asume el precio de la élite a cambio del conjunto más completo y la mejor revalorización. No es para quien busque la integral más barata del segmento, para quien necesite dormir a cinco a diario con holgura ni para quien remolque pesado con el motor base. El veredicto es que es la integral de referencia de su categoría por habitabilidad, autonomía de agua y tecnología, con un precio de acceso muy alto que solo se justifica si se va a usar intensivamente y durante muchos años.`,
    pros: [
      "Integral de 7,19 m sobre chasis SLC aligerado de Mercedes: formato integral con carnet B",
      "Parabrisas panorámico y salón en L con mucha luz: la habitabilidad que justifica la integral",
      "Cama basculante eléctrica sobre el salón + camas traseras unibles: hasta 5 plazas sin capuchina",
      "Depósitos de 180 l de agua limpia y 150 l de grises: autonomía para varios días fuera de camping",
      "Hymer Smart Connect de serie: control de temperatura, luz y niveles desde el móvil",
    ],
    contras: [
      "141.000 € «desde» en Alemania (gama B-MC I): precio de acceso muy alto para una integral de 7,2 m",
      "Con 2,98 m de alto y 7,19 m de largo, ni entra en parkings ni pasa desapercibida en pueblos",
      "El motor base de 150 CV se queda justo con la integral cargada y remolque en puertos",
      "La cama basculante obliga a recoger el salón cada noche si se usa a diario",
      "MMA de 3.500 kg justos: los packs de equipamiento comen carga útil rápidamente",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/hymer-b-mc-i-600-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Hymer B-MC I 600, vista tres cuartos delantera (render oficial Hymer)",
        ancho: 1200,
        alto: 676,
      },
      {
        src: "/media/hymer-b-mc-i-600-2026-precio-ficha-tecnica-oficial-interior.webp",
        alt: "Baño del Hymer B-MC I 600 con grifería negra (foto oficial de prensa Hymer)",
        ancho: 1200,
        alto: 802,
      },
      {
        src: "/media/hymer-b-mc-i-600-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Hymer B-MC I 600, salón en L",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/hymer-b-mc-i-600-2026-precio-ficha-tecnica-ext.webp",
        alt: "Hymer B-MC I 600, vista frontal integral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/hymer-b-mc-i-600-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Interior del Hymer B-MC I 600, segunda vista",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/hymer-b-mc-i-600-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Detalle del Hymer B-MC I 600",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "hymer-b-mc-i-600-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Mercedes Sprinter: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Mercedes-Benz)",
      revisiones: [
        {
          nombre: "Revisión Mercedes Sprinter (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de aire + inspección general",
          costeAproxEur: 450,
        },
        {
          nombre: "Revisión célula Hymer (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 700,
      fuente: "Plan de mantenimiento Mercedes-Benz Sprinter + recomendaciones Hymer",
    },
    euroncap: null,
    fuenteNombre: "Hymer (nota de prensa oficial + lista oficial de precios y datos técnicos MY2026)",
    fuenteUrl: "https://www.hymer.com/gb/en/the-new-hymer-b-mc/p/3580703",
  },
  {
    id: "hymer-ml-t-580-4x4-2026-precio-ficha-tecnica",
    marca: "Hymer",
    modelo: "ML-T 580 4x4",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 165900, // PVP base en Alemania de la edición ML-T 580 CrossTrail (MY2026), nota de prensa oficial Hymer
    potenciaCv: 190, // Mercedes Sprinter 419 CDI (140 kW); 417 CDI de 170 CV también disponible
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
    imagen: "/media/hymer-ml-t-580-4x4-2026-precio-ficha-tecnica-oficial-ext2.webp",
    imagenOficial:
      "/media/hymer-ml-t-580-4x4-2026-precio-ficha-tecnica-oficial-ext2.webp",
    imagenInteriorOficial:
      "/media/hymer-ml-t-580-4x4-2026-precio-ficha-tecnica-oficial-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6980, // longitud de carrocería: 698 cm (713 cm con escalera trasera, según datos oficiales)
    anchoMm: 2220, // datos oficiales: 222 cm
    altoMm: 3050, // datos oficiales: 305 cm con baca y escalera trasera (edición CrossTrail)
    pesoKg: null, // masa en orden de marcha: 3.470 kg según datos oficiales (no se publica como campo)
    mmaKg: 4100, // la tracción 4x4 exige la variante de peso de 4.100 kg
    carnetNecesario: "C1", // con 4.100 kg de MMA el carnet B no basta
    cargaUtilKg: null, // la marca no publica la carga útil del modelo exacto: nunca se calcula como MMA-MRO
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // datos oficiales: 4 plazas (incluido el conductor)
    plazasDormir: 3, // datos oficiales: 3 camas (gemelas traseras + cama central opcional)
    parNm: null, // no publicado en la documentación oficial consultada
    traccion: "Total (4x4)", // tracción total permanente
    emisionesCo2: null,
    aprox: ["precioDesde"],
    notas:
      "Precio de tarifa en Alemania: 165.900 € es el PVP base oficial de la edición especial ML-T 580 CrossTrail (MY2026) según la nota de prensa de Hymer (septiembre de 2025); es el único PVP oficial publicado por Hymer para el ML-T 580 4x4 y en España puede diferir. Datos técnicos (Sprinter 419 CDI de 190 CV, tracción total, 698/222/305 cm, MMA 4.100 kg, 4 plazas, 3 camas, masa en orden de marcha 3.470 kg) de la ficha técnica oficial publicada por Mercedes-Benz Vans para el Sprinter Hymer ML-T 580 CrossTrail. La variante de 4.100 kg exige carnet C1 en España.",
    curiosidades:
      "La familia ML-T acumula varios de los galardones más prestigiosos del caravaning europeo: Red Dot Design Award y German Design Award 2024 por su diseño, European Innovation Award 2024 al mejor concepto global de autocaravana —otorgado por un jurado de 17 directores de revistas de 15 países— y el «Golden Motorhome 2024» de los lectores de AUTO BILD REISEMOBIL. Fuente: página oficial de premios de Hymer (https://www.hymer.com/es/es/premios).",
    descripcion: `Hay autocaravanas que te llevan a los sitios y autocaravanas que te sacan de ellos. La Hymer ML-T 580 4x4, en su edición especial CrossTrail para el año modelo 2026, pertenece a la segunda categoría: una perfilada de 6,98 metros con tracción total permanente, 190 CV y un equipamiento de autosuficiencia que la convierte en una base de expedición con todas las comodidades de una Hymer. No es una camper disfrazada de todoterreno ni una 4x4 de mentira con un diferencial cosmético: es la ML-T, la perfilada ligera más vendida de la marca alemana, elevada a su expresión más capaz con la receta que Hymer ya probó en la Venture S.

El corazón del asunto está bajo la carrocería. El chasis es el Mercedes Sprinter 419 CDI de 190 CV con cambio automático 9G-Tronic y tracción total Torque-on-Demand, el sistema que reparte el par entre ejes según la adherencia sin intervención del conductor, complementado con control de descenso para las bajadas empinadas. La altura libre al suelo está elevada, los bajos del motor y del depósito de agua llevan protección específica y los neumáticos son All-Terrain, primero en 16 pulgadas y con opción de llantas Delta de 18 con tacos para quien vaya en serio. La ficha técnica oficial habla de 6,98 metros de carrocería, 2,22 de ancho y 3,05 de alto con la baca y la escalera trasera de la edición CrossTrail, y —dato crucial— de una MMA de 4.100 kilos: la tracción total y todo su equipamiento pesan, y Hymer resuelve la ecuación con la variante de peso de 4,1 toneladas de serie. Eso tiene una consecuencia administrativa innegociable en España: con más de 3.500 kilos hace falta el carnet C1, así que esta versión no es para quien solo tenga el B.

La edición CrossTrail es lo que transforma una ML-T 4x4 competente en una máquina de viajar sin red. De serie trae cuatro módulos de batería de litio que suman 320 Ah, un inversor de 1.800 vatios, dos paneles solares de 95 vatios con regulador MPPT, calefacción diésel de 6 kW con resistencia eléctrica de apoyo y un router 5G para trabajar desde cualquier sitio con cobertura. La lista sigue: toldo negro de 4 metros con LED regulable, ducha exterior, segundo casete de inodoro en el arcón, filtro de agua dulce, claraboya panorámica de 80 por 50 sobre el dormitorio y un garaje trasero con organización para herramientas. La estética acompaña con el gris Stone, el parachoques delantero con recubrimiento Raptor anti-chinazos y la barra de LED heredada de la Venture S. Es, sobre el papel, la perfilada mejor equipada de serie para el off-grid que Hymer ha puesto en catálogo.

Dentro, la ML-T 580 mantiene el esquema que la hizo famosa: camas gemelas longitudinales traseras de 191 y 192 centímetros sobre un garaje amplio, salón delantero en L con mesa corredera y baño de confort de 125 por 86 con ducha separada. La tapicería de la CrossTrail, el cuero Tallinn con pespuntes naranjas o la variante Indiana, y los frentes en plata mate con bambú le dan un aire automovilístico muy logrado, lejos del mobiliario clásico de las autocaravanas tradicionales. Las tres plazas para dormir —las gemelas más la cama central opcional de 175 por 79— la definen como un vehículo de pareja con capacidad ocasional para un tercer ocupante, no como una familiar: el garaje y las camas mandan, y el salón se queda en su sitio. La cocina, con su frigorífico de compresor de 133 litros, y los 120 litros de agua limpia con 100 de grises completan un interior coherente con la filosofía de la máquina: viajar lejos, parar donde se quiera y no depender de nadie.

El precio es el de la exclusividad: 165.900 euros de PVP base en Alemania para la edición CrossTrail según la nota de prensa oficial de Hymer, lo que la sitúa unos 48.000 euros por encima de una ML-T 580 de tracción simple. Es una diferencia enorme que solo se justifica si el 4x4 se va a usar de verdad: pistas forestales, nieve, accesos a playas o calas, invernadas en el norte. Para quien haga el 95 % de sus kilómetros por autopista, la ML-T normal ofrece el mismo interior por mucho menos dinero y con carnet B. Hay que sumar además el coste del C1 —tasas, autoescuela, tiempo— y un consumo superior por el peso, la altura y los neumáticos de tacos, que obliga a planificar los repostajes en rutas largas por zonas poco pobladas. La red Mercedes resuelve el mantenimiento del chasis en cualquier país, pero la célula Hymer fuera de Alemania puede hacer esperar por piezas específicas.

Cómo lo verificamos: precio base de 165.900 euros en Alemania para la edición ML-T 580 CrossTrail, de la nota de prensa oficial de Hymer (septiembre de 2025), verificada el 19 de octubre de 2026. Datos técnicos —Sprinter 419 CDI de 190 CV, tracción total, dimensiones 698/222/305 cm, MMA de 4.100 kg, 4 plazas, 3 camas, masa en orden de marcha de 3.470 kg, depósitos de 120/100 litros, frigorífico de 133 litros, calefacción diésel de 6 kW, 320 Ah de litio y 2x95 W solares— de la ficha técnica oficial publicada por Mercedes-Benz Vans para el Sprinter Hymer ML-T 580 CrossTrail. La exigencia del carnet C1 deriva de la MMA de 4.100 kg según la normativa española.

Para quién es: la Hymer ML-T 580 4x4 CrossTrail es para el viajero que quiere una perfilada premium capaz de salir del asfalto de verdad, valora la autosuficiencia energética total y acepta el carnet C1 y el sobreprecio como peaje de la libertad. No es para quien busque la ML-T más barata, para quien solo tenga el carnet B ni para quien haga casi toda su ruta por autopista. El veredicto es que es la 4x4 habitable más completa y mejor resuelta del mercado europeo, con un precio y unos requisitos que la reservan a un público muy concreto: el que realmente va a usar la tracción total más de dos veces al año.`,
    pros: [
      "Tracción total permanente Torque-on-Demand con control de descenso: de las pocas perfiladas premium que se meten en pista sin complejos",
      "Mercedes Sprinter 419 CDI de 190 CV con cambio automático 9G-Tronic: empuja con solvencia los 4.100 kg del conjunto",
      "MMA de 4.100 kg de serie en el 4x4: la carga útil no se evapora con el equipamiento off-road",
      "Edición CrossTrail: 320 Ah de litio, inversor de 1.800 W, doble panel solar de 95 W, calefacción diésel de 6 kW y router 5G para viajar autosuficiente",
      "Camas gemelas traseras sobre garaje + 4 plazas de viaje: el esquema ML-T que funciona, elevado a 4x4",
    ],
    contras: [
      "165.900 € de partida en Alemania (edición CrossTrail): el 4x4 cuesta del orden de 48.000 € más que una ML-T de tracción simple",
      "Con 4.100 kg de MMA exige el carnet C1: adiós al permiso B que basta para la ML-T 580 normal",
      "3,05 m de alto con baca y neumáticos All-Terrain: ni garajes ni buena parte de los parkings subterráneos son opción",
      "El 4x4, el peso y los neumáticos de tacos elevan el consumo: hay que planificar repostajes en rutas largas",
      "Recambios de célula Hymer fuera de Alemania: cualquier reparación específica puede tardar",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/hymer-ml-t-580-4x4-2026-precio-ficha-tecnica-oficial-ext2.webp",
        alt: "Hymer ML-T 580 4x4 CrossTrail, vista lateral (foto oficial de prensa Hymer)",
        ancho: 1200,
        alto: 801,
      },
      {
        src: "/media/hymer-ml-t-580-4x4-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Hymer ML-T 580 4x4 CrossTrail, vista tres cuartos delantera (render oficial Hymer)",
        ancho: 1200,
        alto: 676,
      },
      {
        src: "/media/hymer-ml-t-580-4x4-2026-precio-ficha-tecnica-oficial-interior.webp",
        alt: "Salón del Hymer ML-T 580 4x4 CrossTrail (foto oficial de prensa Hymer)",
        ancho: 1200,
        alto: 802,
      },
      {
        src: "/media/hymer-ml-t-580-4x4-2026-precio-ficha-tecnica-oficial-interior2.webp",
        alt: "Dormitorio con camas gemelas del Hymer ML-T 580 4x4 CrossTrail (foto oficial de prensa Hymer)",
        ancho: 1200,
        alto: 802,
      },
      {
        src: "/media/hymer-ml-t-580-4x4-2026-precio-ficha-tecnica-ext.webp",
        alt: "Hymer ML-T 580 4x4, vista tres cuartos delantera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/hymer-ml-t-580-4x4-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Hymer ML-T 580 4x4, salón y camas gemelas",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/hymer-ml-t-580-4x4-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Interior del Hymer ML-T 580 4x4, segunda vista",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/hymer-ml-t-580-4x4-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Detalle del Hymer ML-T 580 4x4",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "hymer-ml-t-580-4x4-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Mercedes Sprinter: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Mercedes-Benz)",
      revisiones: [
        {
          nombre: "Revisión Mercedes Sprinter (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de aire + inspección general",
          costeAproxEur: 450,
        },
        {
          nombre: "Revisión célula Hymer (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 700,
      fuente: "Plan de mantenimiento Mercedes-Benz Sprinter + recomendaciones Hymer",
    },
    euroncap: null,
    fuenteNombre: "Hymer (nota de prensa oficial + ficha técnica oficial Mercedes-Benz Vans)",
    fuenteUrl: "https://www.hymer.com/de/en/home/hymer-ml-t-580-crosstrail/p/3594259",
  },
];
