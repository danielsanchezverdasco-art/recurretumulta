// Autocaravanas Weinsberg — lote Merlín 2 (19/10/2026).
// Datos técnicos de las páginas oficiales de layout de WEINSBERG
// (weinsberg.com) y de documentos oficiales de configuración 2026 del
// fabricante (vía concesionarios). Precios: Weinsberg España no publica PVP;
// se indica la cifra documentada en Alemania con nota en `aprox`.
// Fotos: 4 webp por ficha, inspeccionadas visualmente (sin marcas de agua ni
// rótulos), del modelo exacto. Curiosidad con fuente en `curiosidades`.
// noindex lo gestiona Grok al integrar.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_WEINSBERG_M2: Autocaravana[] = [
  {
    id: "weinsberg-caratour-600-mq-2026-precio-ficha-tecnica",
    marca: "Weinsberg",
    modelo: "CaraTour 600 MQ",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: 53100, // guía de precios en Alemania (desde 53.100 €); Weinsberg España no publica PVP
    potenciaCv: 140, // Fiat Ducato 2.2 Multijet de 140 CV (103 kW), de serie
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
    imagen:
      "/media/weinsberg-caratour-600-mq-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial:
      "/media/weinsberg-caratour-600-mq-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/weinsberg-caratour-600-mq-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990, // página oficial del layout 600 MQ (5,99 m)
    anchoMm: 2050, // página oficial del layout 600 MQ (2,05 m)
    altoMm: 2580, // página oficial del layout 600 MQ (2,58 m)
    pesoKg: 2750, // masa en orden de marcha oficial del layout 600 MQ
    mmaKg: 3500, // página oficial del layout 600 MQ
    carnetNecesario: "B",
    cargaUtilKg: 241, // "Maximum payload" publicado por la marca en la página oficial del layout 600 MQ
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // página oficial del layout 600 MQ: 4 personas en marcha
    plazasDormir: 4, // cama trasera transversal + conversión del salón (máx. 4 camas según ficha oficial)
    parNm: 350, // Fiat Ducato 2.2 Multijet 140: 350 Nm (dato oficial Fiat)
    traccion: "Delantera", // Fiat Ducato, tracción delantera
    emisionesCo2: null,
    aprox: [
      "Precio orientativo «desde» en Alemania: 53.100 € (guía de precios alpacacamping.de); Weinsberg España no publica PVP y cada concesionario fija el suyo",
    ],
    notas:
      "Los datos técnicos (5,99 x 2,05 x 2,58 m, 140 CV, 3.500 kg de MMA, cama trasera de 194 x 152/140 cm, Truma Combi 4, frigorífico de 95 l, agua 102/90 l) proceden de la página oficial de WEINSBERG para el layout 600 MQ, que la CaraTour comparte con la gama camper de la marca. El precio «desde 53.100 €» es una referencia de la guía de precios alemana alpacacamping.de; Weinsberg España no publica PVP. Las fotos corresponden a un Weinsberg CaraTour 600 MQ real.",
    descripcion: `El Weinsberg CaraTour 600 MQ es la camper de 5,99 metros con la que la marca alemana —parte del grupo Knaus Tabbert— defiende su territorio en el segmento más competido del caravaning europeo: el furgón camper polivalente que sirve para el día a día y para escaparse el fin de semana sin cambiar de vehículo. La denominación 600 MQ resume su propuesta: 6,00 metros de largo y cama trasera transversal (MQ = Querbett, cama transversal en alemán), la distribución que mejor aprovecha cada centímetro en un furgón de este tamaño.

La base es el Fiat Ducato 2.2 Multijet de 140 CV (103 kW) con cambio manual de 6 velocidades, tracción delantera y homologación Euro 6e-bis, el motor que Weinsberg monta de serie en toda su gama camper sobre Fiat. Con 350 Nm de par mueve con soltura los 3.500 kg de MMA, y el equipamiento de seguridad de la cabina es generoso para un camper de este precio: ESP, Hill Holder, Traction Plus con ayuda al descenso, control de crucero, asistente de frenada de emergencia, asistente de carril, detección de fatiga, control de presión de neumáticos y cámara trasera. Los asientos de cabina son los Captainchair originales de Fiat, giratorios y con reposabrazos, que al girarse se integran en el salón y amplían la zona de estar sin ocupar ni un centímetro extra.

Por dentro, el 600 MQ apuesta por lo esencial bien resuelto. La cama trasera transversal mide 194 x 152/140 cm —una de las superficies de descanso más generosas de su categoría— y bajo ella queda un gran espacio de carga variable accesible desde las puertas traseras, con ojos de amarre en el suelo para fijar bicicletas o el equipo deportivo. Delante, el salón con mesa giratoria y banco extensible acoge a cuatro personas, y la banqueta se convierte en una cama de invitados de 180 x 70 cm para sumar hasta cuatro plazas para dormir. La cocina combina fregadero y cocina de dos fuegos con encendido eléctrico bajo una tapa de cristal dividida, y el frigorífico de compresor de 95 litros (con compartimento de congelación de 12,8 l) funciona con la batería de 95 Ah sin depender del gas en marcha, una ventaja real frente a los trivalentes de absorción en viajes de verano.

El bloque sanitario trasero es compacto pero completo: WC Thetford giratorio con cassette, plato de ducha y lavabo, con ventilación propia y claraboya. La calefacción es la Truma Combi 4 con panel digital CP-Plus, suficiente para alargar la temporada hasta bien entrado el otoño, y la instalación de agua —102 litros de limpias y 90 de grises— está dimensionada para una autonomía de varios días. Los detalles de la célula hablan el idioma de Weinsberg: aislamiento optimizado contra puentes térmicos, paredes laterales con revestimiento transpirable, suelo intermedio atemperado en la zona del salón, ventanas de doble acristalamiento tintadas con mosquitera y oscurecedor, puerta con mosquitera y escalón eléctrico de 70 cm. Y un argumento de tranquilidad poco común en este precio: 10 años de garantía de estanqueidad de la carrocería.

Con 5,99 m de largo, 2,05 m de ancho y 2,58 m de alto, el CaraTour 600 MQ se conduce casi como un turismo grande: cabe en una plaza de aparcamiento estándar de longitud y no necesita retrovisores especiales ni precauciones de gálibo en la mayoría de parkings. Los 3.500 kg de MMA lo dejan en el carnet B, y la carga útil oficial de 241 kg obliga a ser razonable con el equipamiento opcional —el techo elevable, el toldo o la segunda batería restan kilos—, pero es la cifra honesta que publica la marca para el modelo base.

Del precio en España no hay cifra oficial: Weinsberg no publica PVP y cada concesionario fija el suyo, como es habitual en el sector. Como referencia de posicionamiento, la guía de precios alemana lo sitúa desde unos 53.100 €, lo que lo coloca en la franja de acceso de los campers sobre Ducato, por debajo de las ediciones especiales equipadas (Edition Fire) y de sus hermanos mayores de 6,36 m. Sus rivales naturales son el Pössl Summit 600, el Adria Twin 600 SPB y el Benimar Benivan 120 en la misma talla: el Weinsberg se defiende con la garantía de estanqueidad de 10 años, el frigorífico de compresor y una de las camas traseras más grandes de la categoría.

Verificación de fuentes: medidas (5,99 x 2,05 x 2,58 m), masas (2.750 kg en orden de marcha, 3.500 kg de MMA, 241 kg de carga útil), plazas (4 en marcha, hasta 4 camas), cama trasera (194 x 152/140 cm), motorización Fiat Ducato 140 CV Euro 6e-bis y equipamiento proceden de la página oficial de WEINSBERG para el layout 600 MQ (weinsberg.com), que la CaraTour comparte con la gama camper de la marca sobre Fiat. El precio «desde 53.100 €» es la referencia de la guía de precios alemana alpacacamping.de; Weinsberg España no publica PVP. Las fotos corresponden a un Weinsberg CaraTour 600 MQ real.

Perfil de comprador: el CaraTour 600 MQ encaja con parejas o familias pequeñas que buscan su primera camper —o su camper definitiva— para uso mixto diario y de ocio, valoran una cama trasera grande de verdad y prefieren la red de servicio del grupo Knaus Tabbert con la garantía de estanqueidad de 10 años. No encaja con quien necesite cuatro camas fijas ni con quien busque techo elevable de serie. Balance: el camper honesto y bien equipado de Weinsberg en la talla de 6 metros, con la mejor relación cama/euro de su segmento y la única pega habitual de la marca, la opacidad de precios en España.`,
    pros: [
      "Cama trasera transversal de 194 x 152/140 cm: de las más grandes entre los campers de 6 m",
      "Fiat Ducato 2.2 de 140 CV con 350 Nm y arsenal de ayudas a la conducción de serie",
      "Frigorífico de compresor de 95 l: funciona en marcha sin depender del gas",
      "Garantía de estanqueidad de la carrocería de 10 años, poco habitual en este precio",
      "5,99 m y 3.500 kg: se aparca como un turismo grande y se conduce con el carnet B",
    ],
    contras: [
      "Sin PVP oficial en España: cada concesionario fija su precio y comparar cuesta",
      "Carga útil oficial de 241 kg: hay que vigilarla al añadir techo elevable, toldo o segunda batería",
      "El baño es compacto: ducha y WC comparten el mismo espacio reducido",
      "El cambio automático de 8 velocidades y el motor de 180 CV son opcionales con sobreprecio",
      "La cuarta plaza para dormir exige convertir el salón cada noche",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/weinsberg-caratour-600-mq-2026-precio-ficha-tecnica-ext.webp",
        alt: "Weinsberg CaraTour 600 MQ, vista delantera tres cuartos",
        ancho: 768,
        alto: 1024,
      },
      {
        src: "/media/weinsberg-caratour-600-mq-2026-precio-ficha-tecnica-ext-2.webp",
        alt: "Weinsberg CaraTour 600 MQ, vista trasera tres cuartos",
        ancho: 768,
        alto: 518,
      },
      {
        src: "/media/weinsberg-caratour-600-mq-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Weinsberg CaraTour 600 MQ, cama trasera transversal vista desde las puertas traseras",
        ancho: 1600,
        alto: 1067,
      },
      {
        src: "/media/weinsberg-caratour-600-mq-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Zona de descanso del Weinsberg CaraTour 600 MQ con la cama trasera hecha",
        ancho: 762,
        alto: 456,
      },
    ],
    creditoInteriorFoto:
      "Fotos de interior: anuncios de concesionarios (wohnmobilpark.com, caravanbacci.com); uso editorial con crédito a la fuente.",
    analisisSlug: "weinsberg-caratour-600-mq-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato 2.2: revisión cada 2 años o 48.000 km (lo que ocurra antes, según plan Fiat)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 48.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Weinsberg (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Weinsberg",
    },
    euroncap: null,
    curiosidades:
      "Para la temporada 2026 Weinsberg lanzó la edición especial Outlaw, una camper de cinco plazas de aire aventurero desarrollada sobre la base del CaraTour 630 MEG (y del CaraBus 630 MEG), el hermano mayor del 600 MQ. Fuente: guía de campervans Weinsberg (https://www.outandaboutlive.co.uk/campervans/manufacturers/weinsberg).",
    fuenteNombre: "WEINSBERG — página oficial del layout 600 MQ (gama camper Fiat)",
    fuenteUrl:
      "https://weinsberg.com/en-uk/camper-vans/grey-edition-fire/layout-plans/600-mq/",
  },
  {
    id: "weinsberg-carahome-600-dkg-2026-precio-ficha-tecnica",
    marca: "Weinsberg",
    modelo: "CaraHome 600 DKG",
    tipo: "capuchina",
    categoria: "Autocaravana",
    precioDesde: 80003, // precio de lista en Alemania de una unidad nueva 2026 con extras; Weinsberg España no publica PVP
    potenciaCv: 140, // Fiat Ducato 2.2 Multijet de 140 CV (103 kW), de serie
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
    imagen:
      "/media/weinsberg-carahome-600-dkg-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial:
      "/media/weinsberg-carahome-600-dkg-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/weinsberg-carahome-600-dkg-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6450, // ficha técnica del 600 DKG (6,45 m)
    anchoMm: 2300, // ficha técnica del 600 DKG (2,30 m)
    altoMm: 3200, // ficha técnica del 600 DKG (3,20 m)
    pesoKg: 3031, // masa en orden de marcha según fabricante (dato de concesionario)
    mmaKg: 3500, // ficha técnica del 600 DKG
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil de esta versión en su web
    consumo: null,
    consumoUnidad: null,
    plazas: 6, // ficha técnica: 6 plazas de viaje
    plazasDormir: 6, // capuchina + literas traseras + conversión del salón
    parNm: 350, // Fiat Ducato 2.2 Multijet 140: 350 Nm (dato oficial Fiat)
    traccion: "Delantera", // Fiat Ducato, tracción delantera
    emisionesCo2: null,
    aprox: [
      "Precio de lista en Alemania de una unidad nueva 2026 con extras: 80.003 € (concesionario, vía TruckScout24); Weinsberg España no publica PVP y el precio final lo fija cada concesionario",
    ],
    notas:
      "Medidas (6,45 x 2,30 x 3,20 m), masas (3.031 kg en orden de marcha, 3.500 kg de MMA), plazas (6/6), camas (literas 211 x 74 y 194 x 76 cm, capuchina 210 x 140 cm), agua (124/101 l) y equipamiento proceden de la ficha técnica del CaraHome 600 DKG publicada por concesionarios con datos oficiales del fabricante; el garaje de 2,26 m³ lo confirma la página oficial de WEINSBERG de la gama CaraHome. El precio (80.003 €) es el precio de lista en Alemania de una unidad nueva 2026 con extras; Weinsberg España no publica PVP. Las fotos corresponden a un Weinsberg CaraHome 600 DKG real.",
    descripcion: `El Weinsberg CaraHome 600 DKG es la capuchina familiar de referencia del catálogo de Weinsberg: 6,45 metros de autocaravana clásica con cama capuchina sobre la cabina, pensada para que viajen y duerman hasta seis personas sin pedir prestado ni un centímetro al salón. En un mercado donde las capuchinas pierden terreno frente a las perfiladas, la 600 DKG resiste como una de las pocas que sigue vendiéndose por una razón sencilla: es la forma más barata de meter seis plazas reales en 3.500 kg.

La base es el Fiat Ducato 2.2 Multijet de 140 CV (103 kW) con cambio manual de 6 velocidades, tracción delantera y homologación Euro 6e, el motor de serie de la gama. No es una base prestacional, pero es la que mejor cuadra con la filosofía del modelo: 350 Nm de par para mover los 3.500 kg de MMA con la célula llena de familia y equipaje, y un arsenal de ayudas —ESP, Hill Holder, Traction Plus, control de crucero, asistente de frenada y de carril— que hace la conducción tan poco exigente como cabe esperar de un vehículo de este tamaño. Los asientos de cabina, giratorios y con reposabrazos, se integran en el salón al aparcar.

La distribución DKG es la que ha convertido a este modelo en un clásico: delante, la cama capuchina de 210 x 140 cm —en las unidades 2026, abatible para ganar altura libre en marcha—; en el centro, el salón en L con mesa extensible para seis comensales; y detrás, las literas de 211 x 74 y 194 x 76 cm, lo bastante grandes para que duerman adultos sin pedir disculpas. La dinette se convierte además en una cama doble de 184 x 100 cm, con lo que las seis plazas para dormir son seis de verdad, no un ejercicio de marketing. Cada zona de descanso tiene su intimidad: los niños atrás en las literas, los padres arriba en la capuchina, y el salón libre por la mañana sin tener que deshacer camas.

El garaje trasero, con 2,26 m³ de volumen útil según la ficha oficial de la marca, es otro de los argumentos de la 600 DKG: accesible por la trampilla exterior y desde el interior, con toma de 230 V, traga bicicletas, sillas, la mesa de camping y los juguetes de los niños sin pelearse con las cinchas. La cocina, con tres fuegos, fregadero y frigorífico de 177 litros, está dimensionada para cocinar de verdad para seis bocas, y el baño con ducha separada —el de las fotos de esta ficha— permite una higiene digna incluso con la autocaravana llena. La calefacción Truma Combi 4 de serie (Combi 6 en las unidades equipadas de 2026) y los depósitos de 124 litros de agua limpia y 101 de grises dan autonomía para varios días fuera de áreas.

Con 6,45 m de largo, 2,30 m de ancho y 3,20 m de alto, la 600 DKG es una autocaravana de presencia seria: necesita sus metros en el área y algo de oficio en rotondas estrechas, pero a cambio ofrece un interior que ninguna perfilada de su precio iguala en plazas. Los 3.500 kg de MMA la dejan en el carnet B, aunque con seis ocupantes y el depósito lleno conviene vigilar la carga útil real: la marca no publica la cifra de esta versión, así que el pesaje en báscula antes del primer gran viaje es casi obligatorio. Weinsberg ofrece la homologación a 3.650 kg para quien necesite margen.

Del precio en España no hay cifra oficial: Weinsberg no publica PVP. Como referencia, una unidad nueva 2026 con extras (paquetes Smart I, Media y Styling I, calefacción Combi 6, toldo, portabicis para cuatro y navegación) tiene un precio de lista en Alemania de 80.003 €, lo que sitúa a la 600 DKG como una de las capuchinas familiares más asequibles del mercado europeo. Sus rivales naturales son la Dethleffs Alpa, la Bürstner Lyseo y la Benimar Tessoro en versiones familiares: la Weinsberg se defiende con el precio, el garaje de 2,26 m³ y una red de servicio del grupo Knaus Tabbert que en España es de las más densas.

Verificación de fuentes: medidas (6,45 x 2,30 x 3,20 m), masas (3.031 kg en orden de marcha, 3.500 kg de MMA), plazas (6 de viaje / 6 para dormir), camas (literas 211 x 74 y 194 x 76 cm, capuchina 210 x 140 cm, conversión 184 x 100 cm), agua (124/101 l), calefacción Truma y equipamiento proceden de la ficha técnica del CaraHome 600 DKG con datos oficiales del fabricante publicada por concesionarios; el garaje de 2,26 m³ lo confirma la página oficial de WEINSBERG de la gama CaraHome. El precio (80.003 €) es el precio de lista en Alemania de una unidad nueva 2026 con extras publicado por un concesionario; Weinsberg España no publica PVP. Las fotos corresponden a un Weinsberg CaraHome 600 DKG real.

Perfil de comprador: la CaraHome 600 DKG encaja con familias de 4 a 6 miembros que necesitan seis plazas reales para dormir en 3.500 kg, valoran las literas traseras para los niños y la cama capuchina siempre hecha, y buscan la capuchina más asequible con garaje de verdad. No encaja con parejas que viajen solas —es mucha autocaravana para dos— ni con quien tema conducir 6,45 m de alto. Balance: la capuchina familiar honesta de Weinsberg, imbatible en plazas por euro, con la única pega de la carga útil que hay que vigilar con seis a bordo.`,
    pros: [
      "Seis plazas reales para dormir: capuchina de 210 x 140 cm + literas traseras + conversión del salón",
      "Literas traseras de tamaño adulto (211 x 74 y 194 x 76 cm), ideales para niños y adolescentes",
      "Garaje de 2,26 m³ con doble acceso y toma de 230 V, confirmado por la marca",
      "Fiat Ducato 2.2 de 140 CV con 350 Nm y ayudas a la conducción completas de serie",
      "Una de las capuchinas familiares más asequibles del mercado europeo",
    ],
    contras: [
      "Sin PVP oficial en España: cada concesionario fija su precio y comparar cuesta",
      "La marca no publica la carga útil de esta versión: con seis ocupantes hay que pesarla",
      "6,45 m de largo y 3,20 m de alto: exige oficio en pueblos y áreas pequeñas",
      "El cambio automático y el motor de 180 CV son opcionales con sobreprecio",
      "Diseño de capuchina clásica: menos aerodinámica y más sensible al viento lateral que una perfilada",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/weinsberg-carahome-600-dkg-2026-precio-ficha-tecnica-ext.webp",
        alt: "Weinsberg CaraHome 600 DKG, vista lateral tres cuartos",
        ancho: 1600,
        alto: 1066,
      },
      {
        src: "/media/weinsberg-carahome-600-dkg-2026-precio-ficha-tecnica-ext-2.webp",
        alt: "Weinsberg CaraHome 600 DKG, vista frontal",
        ancho: 487,
        alto: 521,
      },
      {
        src: "/media/weinsberg-carahome-600-dkg-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Weinsberg CaraHome 600 DKG, salón con la cama capuchina al fondo",
        ancho: 1200,
        alto: 1807,
      },
      {
        src: "/media/weinsberg-carahome-600-dkg-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Baño del Weinsberg CaraHome 600 DKG con ducha separada",
        ancho: 1152,
        alto: 1536,
      },
    ],
    creditoInteriorFoto:
      "Fotos de interior: portal encaravana.com y portal de alquiler fairmietportal.de; uso editorial con crédito a la fuente.",
    analisisSlug: "weinsberg-carahome-600-dkg-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato 2.2: revisión cada 2 años o 48.000 km (lo que ocurra antes, según plan Fiat)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 48.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Weinsberg (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Weinsberg",
    },
    euroncap: null,
    curiosidades:
      "La 600 DKG es la capuchina familiar más longeva del catálogo de Weinsberg: el operador europeo eurocampingcars la describió como la autocaravana familiar más popular de su flota de alquiler, con más unidades vendidas a familias que ningún otro modelo de su gama. Fuente: eurocampingcars (https://www.eurocampingcars.com/blog/astounding-price-drop-for-the-best-of-family-motorhomes-makes-it-an-incredible-bargain/).",
    fuenteNombre: "WEINSBERG — ficha de gama CaraHome (weinsberg.com) y datos técnicos oficiales del 600 DKG (vía concesionario)",
    fuenteUrl:
      "https://m.caravaning-markt.ch/wca-wAssets/img/entries/occasionsmarkt/Wf8SDw1/doc1-Wf8SDw1.pdf",
  },
  {
    id: "weinsberg-caracompact-600-meg-2026-precio-ficha-tecnica",
    marca: "Weinsberg",
    modelo: "CaraCompact 600 MEG",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 69290, // precio de lista en Alemania de una unidad nueva 2026 Edition Pepper con extras; Weinsberg España no publica PVP
    potenciaCv: 140, // Fiat Ducato 2.2 Multijet de 140 CV (103 kW), de serie
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
    imagen:
      "/media/weinsberg-caracompact-600-meg-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial:
      "/media/weinsberg-caracompact-600-meg-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/weinsberg-caracompact-600-meg-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6750, // documento oficial de configuración 2026 (6,75 m)
    anchoMm: 2200, // documento oficial de configuración 2026 (2,20 m)
    altoMm: 2800, // documento oficial de configuración 2026 (2,80 m)
    pesoKg: 2780, // masa en orden de marcha oficial (2.780 kg)
    mmaKg: 3500, // documento oficial de configuración 2026
    carnetNecesario: "B",
    cargaUtilKg: 229, // "Maximum payload" publicado por la marca en el documento oficial de configuración
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // documento oficial: 4 personas en marcha
    plazasDormir: 2, // camas gemelas traseras
    parNm: 350, // Fiat Ducato 2.2 Multijet 140: 350 Nm (dato oficial Fiat)
    traccion: "Delantera", // Fiat Ducato, tracción delantera
    emisionesCo2: null,
    aprox: [
      "Precio de lista en Alemania de una unidad nueva 2026 Edition Pepper con extras: 69.290 € (concesionario, vía TruckScout24); Weinsberg España no publica PVP y el precio final lo fija cada concesionario",
    ],
    notas:
      "Medidas (6,75 x 2,20 x 2,80 m), masas (2.780 kg en orden de marcha, 3.500 kg de MMA, 229 kg de carga útil), plazas (4 en marcha), camas gemelas (2 x 200 x 82 cm), motorización Fiat Ducato 140 CV, calefacción Truma Combi 6, frigorífico de 142 l y agua (110/95 l) proceden del documento oficial de configuración WEINSBERG del CaraCompact 600 MEG Edition Pepper 2026. El precio (69.290 €) es el precio de lista en Alemania de una unidad nueva 2026 con extras; Weinsberg España no publica PVP. Las fotos corresponden a un Weinsberg CaraCompact 600 MEG (versión Edition Pepper) real.",
    descripcion: `El Weinsberg CaraCompact 600 MEG es la perfilada compacta con la que Weinsberg lleva años demostrando que no hacen falta 7,5 metros para tener camas gemelas fijas, garaje y un baño digno: con 6,75 m de largo y solo 2,20 m de ancho —10 cm menos que la mayoría de perfiladas—, es la opción para quienes quieren la comodidad de una semi-integral sin renunciar a moverse con soltura por carreteras secundarias y pueblos. La sigla MEG resume la distribución: camas gemelas (Einzelbetten) traseras sobre garaje (Garage).

La base es el Fiat Ducato 2.2 Multijet de 140 CV (103 kW) con cambio manual de 6 velocidades de serie —y automático de 8 relaciones en opción—, tracción delantera y homologación Euro 6, el conjunto que Weinsberg monta en toda su gama semi-integral. Con 350 Nm de par y 3.500 kg de MMA, el 140 CV es el equilibrio razonable entre prestaciones y precio; quien haga mucha autopista o puertos cargados puede optar al 180 CV. El equipamiento de seguridad de la cabina es completo: ESP, Hill Holder, Traction Plus con ayuda al descenso, control de crucero, asistente de frenada de emergencia, asistente de viento lateral y cámara trasera, además de asientos de cabina giratorios con regulación en altura que se integran en el salón.

El interior es donde el 600 MEG justifica su fama. Las camas gemelas traseras, de 2 x 200 x 82 cm, llevan colchones EvoPore HRC sobre somieres de láminas —el mismo estándar de confort que Weinsberg monta en gamas superiores— y se unen con un cojín central para formar una gran superficie de descanso cuando apetece. Debajo, el garaje trasero con 150 kg de carga máxima admite bicicletas y equipo voluminoso sin desmontar nada. El baño, sorprendentemente completo para 6,75 m, separa la ducha con puerta fija del WC giratorio, y el lavabo se desliza sobre la ducha para dejar paso libre: un truco de diseño que los probadores británicos destacaron como uno de los mejores del segmento. La cocina, junto a la puerta de entrada, ofrece tres fuegos con tapa de cristal, fregadero de acero encastrado, frigorífico de 142 litros con selección automática de energía y —en la Edition Pepper— horno con grill, un lujo poco común en esta talla.

La calefacción Truma Combi 6 (6E con apoyo eléctrico en la Pepper) y los depósitos de 110 litros de agua limpia y 95 de grises permiten escapadas de varios días con autonomía real, y el paquete de invierno con el depósito de grises aislado y calefactado alarga la temporada. Por dentro respira el diseño actual de Weinsberg: muebles en decoración Tiberino, iluminación ambiental LED, tapicería Malabar y suelo de la zona de estar alfombrado en la edición especial. La Edition Pepper 2026, que es la versión que muestran las fotos de esta ficha, se renovó por completo para la nueva temporada con más equipamiento de serie —navegación todo en uno, toldo de 405 x 250 cm, puerta premium, TV de 24" y antena LTE/WLAN— manteniendo, según la marca, un precio aún más atractivo.

Con 6,75 m de largo y 2,20 m de ancho, el CaraCompact 600 MEG se mueve en la franja más manejable de las perfiladas con camas gemelas: entra donde una de 2,32 m ya duda, y los 3.500 kg de MMA lo dejan en el carnet B. La carga útil oficial de 229 kg es la cifra honesta del modelo base y obliga a elegir bien los opcionales —el cambio automático, el toldo y la antena restan kilos—, así que conviene configurar con la calculadora de pesos del concesionario en la mano.

Del precio en España no hay cifra oficial: Weinsberg no publica PVP. Como referencia, una unidad nueva 2026 Edition Pepper con extras tiene un precio de lista en Alemania de 69.290 €, lo que lo sitúa en la gama media de las perfiladas compactas, por debajo de las Knaus y Dethleffs equivalentes y muy por debajo de las premium. Sus rivales naturales son la Dethleffs Trend 6717, la Bürstner Lyseo TD 594 y la Adria Matrix Axess 600 SL: la Weinsberg se defiende con las camas gemelas de 2 metros, el baño con ducha separada y la renovación 2026 de la Pepper.

Verificación de fuentes: medidas (6,75 x 2,20 x 2,80 m), masas (2.780 kg en orden de marcha, 3.500 kg de MMA, 229 kg de carga útil), plazas (4 en marcha), camas (2 x 200 x 82 cm), motorización Fiat Ducato 140 CV y equipamiento proceden del documento oficial de configuración WEINSBERG del CaraCompact 600 MEG Edition Pepper 2026 (datos del configurador del fabricante). El precio (69.290 €) es el precio de lista en Alemania de una unidad nueva 2026 con extras publicado por un concesionario; Weinsberg España no publica PVP. Las fotos corresponden a un Weinsberg CaraCompact 600 MEG (versión Edition Pepper) real.

Perfil de comprador: el CaraCompact 600 MEG encaja con parejas que buscan su primera perfilada —o una segunda más manejable—, valoran las camas gemelas fijas de 2 metros y un baño con ducha separada, y prefieren una anchura contenida de 2,20 m para viajar sin estrés. No encaja con familias que necesiten más de dos plazas para dormir ni con quien busque una integral de gran volumen. Balance: la perfilada compacta más redonda de Weinsberg, con la Edition Pepper 2026 como la compra inteligente de la gama, lastrada solo por la carga útil ajustada si se abusa de los opcionales.`,
    pros: [
      "Camas gemelas traseras de 2 x 200 x 82 cm con colchones EvoPore: confort de gama alta en 6,75 m",
      "Solo 2,20 m de ancho: más manejable que la mayoría de perfiladas sin perder las camas fijas",
      "Baño con ducha separada y lavabo deslizante: el mejor aprovechamiento del segmento",
      "Edition Pepper 2026 renovada con más equipamiento de serie (navegación, toldo, TV, antena LTE)",
      "Fiat Ducato 2.2 de 140 CV con 350 Nm y ayudas a la conducción completas; 3.500 kg con carnet B",
    ],
    contras: [
      "Sin PVP oficial en España: cada concesionario fija su precio y comparar cuesta",
      "Carga útil oficial de 229 kg: el automático, el toldo y los extras la reducen rápido",
      "Solo dos plazas para dormir: no sirve para familias",
      "El motor de 180 CV y el cambio automático de 8 velocidades son opcionales con sobreprecio",
      "Con 6,75 m el garaje admite 150 kg: suficiente, pero menos que en perfiladas mayores",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/weinsberg-caracompact-600-meg-2026-precio-ficha-tecnica-ext.webp",
        alt: "Weinsberg CaraCompact 600 MEG Edition Pepper, vista delantera tres cuartos",
        ancho: 1024,
        alto: 768,
      },
      {
        src: "/media/weinsberg-caracompact-600-meg-2026-precio-ficha-tecnica-ext-2.webp",
        alt: "Weinsberg CaraCompact 600 MEG, vista trasera tres cuartos",
        ancho: 650,
        alto: 487,
      },
      {
        src: "/media/weinsberg-caracompact-600-meg-2026-precio-ficha-tecnica-interior.webp",
        alt: "Salón del Weinsberg CaraCompact 600 MEG con la mesa y los asientos de cabina girados",
        ancho: 728,
        alto: 546,
      },
      {
        src: "/media/weinsberg-caracompact-600-meg-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Salón del Weinsberg CaraCompact 600 MEG visto desde la zona de descanso",
        ancho: 728,
        alto: 410,
      },
    ],
    creditoInteriorFoto:
      "Fotos de interior: anuncios de concesionarios en caraworld.de; uso editorial con crédito a la fuente.",
    analisisSlug: "weinsberg-caracompact-600-meg-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato 2.2: revisión cada 2 años o 48.000 km (lo que ocurra antes, según plan Fiat)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 48.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Weinsberg (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Weinsberg",
    },
    euroncap: null,
    curiosidades:
      "Para la temporada 2026 la Edition Pepper del CaraCompact se renovó por completo, con niveles de equipamiento mejorados y —según la propia Weinsberg— 'un precio aún más atractivo', manteniendo las camas gemelas y el garaje que la hicieron famosa. Fuente: novedades Weinsberg 2026 (https://www.outandaboutlive.co.uk/motorhomes/news/weinsberg-reveals-2026-season-highlights).",
    fuenteNombre: "WEINSBERG — documento oficial de configuración del CaraCompact 600 MEG Edition Pepper 2026",
    fuenteUrl:
      "https://www.premiummotorhomes.com/wp-content/uploads/2025/11/WEINSBERG-CaraCompact-600-MEG-2026-EDITION-PEPPER-WDU3WTH.pdf",
  },
];
