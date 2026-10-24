// Autocaravanas Hobby — lote Merlín 3 (19/10/2026).
// Fuentes: hoja oficial de especificaciones Hobby 2020 (hobbycaravan.de) para el
// Optima De Luxe T70 GE
// (https://www.cannenburg.nl/wp-content/uploads/2019/11/2020-hobby-optima-de-luxe-t70-ge-specificaties.pdf),
// anuncios de concesionarios con equipamiento de serie del modelo 2024
// (TruckScout24), exposé ADAC/caraworld para el Vantana De Luxe K60 FT
// (https://cdn.caraworld.com/bilder/e/023/420/782/cw23420782-de-ADAC-expose.pdf).
// Verificado el 19/10/2026.
// Notas honestas: Hobby no publica PVP oficial para España en su web
// (precioDesde = null en ambos). El Optima De Luxe T70 GE sigue vigente en el
// catálogo 2024-2026 con motor Fiat 2.2 de 140 CV; las cotas citadas son las de
// la hoja oficial 2020 y pueden variar ligeramente según año-modelo. El Vantana
// K60 FT pertenece a la gama camper histórica de Hobby; sus datos proceden de
// exposés de concesionario (no hay hoja oficial pública actual).
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_HOBBY_M3: Autocaravana[] = [
  {
    id: "hobby-optima-de-luxe-t70-ge-2026-precio-ficha-tecnica",
    marca: "Hobby",
    modelo: "Optima De Luxe T70 GE",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Hobby no publica PVP oficial para España
    potenciaCv: 140, // Fiat Ducato 2.3 l 140 MultiJet (103 kW/140 CV), hoja oficial Hobby 2020; versiones 2024+ montan el 2.2 de 140 CV
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro 6 sobre Fiat Ducato
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/hobby-optima-de-luxe-t70-ge-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/hobby-optima-de-luxe-t70-ge-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/hobby-optima-de-luxe-t70-ge-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7415, // hoja oficial Hobby 2020
    anchoMm: 2330, // hoja oficial Hobby 2020
    altoMm: 2775, // hoja oficial Hobby 2020
    pesoKg: 3075, // masa en orden de marcha, hoja oficial 2020
    mmaKg: 3500, // hoja oficial Hobby 2020
    carnetNecesario: "B", // mmaKg <= 3500
    cargaUtilKg: 425, // «Bijlading 425 kg» publicada por la marca en la hoja oficial 2020
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 3, // 2 camas individuales + 1 plaza opcional por transformación del salón
    parNm: null,
    traccion: "delantera", // Fiat Ducato, tracción delantera de serie en la plataforma
    emisionesCo2: null,
    aprox: [],
    notas:
      "Cotas, pesos y distribución de la hoja oficial de especificaciones Hobby 2020 (hobbycaravan.de). Carga útil de 425 kg publicada por la marca en dicha hoja. Motor: la hoja 2020 indica el Fiat Ducato 2.3 l 140 MultiJet (103 kW/140 CV); los anuncios de concesionario del modelo 2024 muestran el Fiat Ducato 2.2 de 140 CV con cambio automático opcional. Precio: Hobby no publica PVP oficial para España; queda sin dato (un concesionario alemán anunciaba un precio de tarifa de 92.857 € para una unidad 2024 equipada, sin validez para España). Consumo, autonomía, par motor y emisiones: no publicados por el fabricante; quedan sin dato. Precio: se deja sin dato porque las gamas Optima y Vantana ya no figuran en la gama oficial vigente de Hobby (hobby-caravan.de: Ontour, Prestige y Maxia); fueron renombradas y no se asignan precios de modelos renombrados.",
    curiosidades:
      "El Optima De Luxe T70 GE equipa de serie el frigorífico «Super Slim Tower» de Hobby: una nevera torre ultrafina que aprovecha toda la altura del mueble de cocina para ofrecer gran capacidad sin robar ni un centímetro al pasillo, una solución que Hobby introdujo en esta gama para competir con las cocinas de las perfiladas premium. Fuente: hoja oficial de especificaciones Hobby 2020 (https://www.cannenburg.nl/wp-content/uploads/2019/11/2020-hobby-optima-de-luxe-t70-ge-specificaties.pdf).",
    descripcion: `El Hobby Optima De Luxe T70 GE es la perfilada con la que la marca alemana Hobby —el mayor fabricante europeo de caravanas— demuestra que el segmento medio puede vestirse de gala sin pedir el carnet C1. Con 7.415 mm de longitud, 2.330 mm de anchura y 2.775 mm de altura sobre el Fiat Ducato, se mantiene dentro de los 3.500 kg de MMA, lo que significa que se conduce con el carnet B de toda la vida. Esa es su primera gran baza comercial: todo el empaque de una perfilada grande, cero papeleo extra.

    La distribución interior del T70 GE gira en torno a las camas individuales traseras (GE es el código interno de esta configuración), la más demandada por las parejas de más de cincuenta años que forman el grueso del mercado europeo de autocaravanas. Las dos camas miden 1.936 x 830 mm y 2.000 x 830 mm respectivamente, con colchones de muelles —un detalle que Hobby subraya en su documentación— y dejan entre ellas un pasillo que facilita el acceso al baño trasero. La altura interior de 1.984 mm permite moverse erguido sin agacharse, algo que no todas las perfiladas de 2,77 metros de altura exterior consiguen. El salón delantero, con grupo en L y mesa de columna elevable giratoria 360°, se transforma en una tercera plaza de 2.120 x 1.010/730 mm, útil para un nieto o para invitados ocasionales, aunque con la advertencia honesta de que dormir tres adultos aquí de forma habitual sería forzar la convivencia.

    Uno de los puntos fuertes del T70 GE es el garaje trasero: 1.100 mm de largo por 2.180 mm de ancho y 1.100 mm de alto, con puertas a ambos lados de 930 x 1.010 mm. Son cifras que admiten dos bicicletas eléctricas, la mesa y las sillas de exterior y aún dejan sitio para el resto del equipaje, y las dos puertas laterales evitan el clásico tetris de tener que vaciar medio garaje para sacar lo del fondo. El depósito de agua limpia es de 100 litros (10 litros en posición de marcha, como exige la normativa de pesos) y el de grises de 96 litros, capacidades correctas para una autonomía de dos o tres días sin repostar.

    La denominación «De Luxe» se gana en la dotación de serie: la hoja oficial de 2020 lista llantas de aluminio de 16 pulgadas, ventanas encastradas, toldo Thule, techo y suelo de GFK (fibra de vidrio, más resistente al granizo y a la humedad que el aluminio), control de crucero, cámara de marcha atrás en color y centro multimedia Pioneer de doble DIN con wifi, Apple CarPlay y Android Auto. La calefacción es la Truma Combi 6 (con opción a la Combi 6E en los anuncios de 2024), el estándar de facto del sector, y el frigorífico es el ya citado Super Slim Tower. Los acabados interiores incluyen cortinas térmicas con aislamiento para la zona de los pies, preinstalación para aire acondicionado de techo y ducha exterior de agua fría, detalles que hablan de un vehículo pensado para usarse de verdad y no solo para el salón de exposición.

    En mecánica, la hoja oficial de 2020 homologa el Fiat Ducato 2.3 l 140 MultiJet de 2.287 cm³ (103 kW/140 CV), mientras que las unidades del modelo 2024 que anuncian los concesionarios montan el Fiat Ducato 2.2 de 140 CV (103 kW) Euro 6d-Final con Start/Stop y Eco-Pack, disponible con cambio manual de seis velocidades o automático. Con 3.075 kg en orden de marcha y 425 kg de carga útil publicada por la marca, el T70 GE deja un margen de carga honesto para dos personas con equipaje completo, toldo y bicicletas, siempre que no se abuse de los opcionales pesados. La tracción es delantera, como en todo Ducato, y el depósito de gasóleo es de 75 litros con 19 litros de AdBlue.

    En precio y red comercial en España, Hobby no publica una tarifa oficial para nuestro mercado, así que no damos cifra de partida. Como referencia orientativa —no contractual—, un concesionario alemán anunciaba para una unidad nueva del modelo 2024 con cambio automático y paquete de opcionales un precio de tarifa de 92.857 euros. Hobby cuenta con una red de distribuidores oficiales en España donde se puede pedir presupuesto con la configuración deseada; dado que el precio final depende mucho de los paquetes (calefacción Combi 6E, climatizador automático, extensión de cama), conviene comparar varias ofertas.

    Cómo lo verificamos: las cotas (7.415/2.330/2.775 mm), los pesos (3.039 kg en vacío, 3.075 kg en orden de marcha, 3.500 kg de MMA, 425 kg de carga útil), las plazas y el equipamiento de serie proceden de la hoja oficial de especificaciones de Hobby para el modelo 2020, publicada en hobbycaravan.de. El motor 2.2 de 140 CV y el equipamiento de las unidades 2024 (Truma Combi 6E, climatizador automático, mesa giratoria 360°) proceden de anuncios de concesionarios oficiales alemanes. Todo verificado el 19 de octubre de 2026. Los datos no publicados por el fabricante (precio oficial en España, consumo, par, emisiones) quedan sin dato y se declaran como tales.

    Para quién es: el Optima De Luxe T70 GE encaja con parejas que quieren una perfilada espaciosa con camas gemelas y gran garaje sin sacarse el C1, y que valoran el equipamiento de serie generoso frente a las listas de opcionales interminables de otras marcas. Es una compra sensata para quien viaja dos o tres meses al año y quiere fiabilidad probada —el binomio Ducato-Truma lo conocen todos los talleres de Europa—. No es para familias de cuatro que necesiten cuatro camas fijas (la tercera plaza es de compromiso), ni para quien busque el último grito en diseño interior: el estilo Hobby es clásico y funcional, no vanguardista.`,
    pros: [
      "MMA de 3.500 kg: se conduce con el carnet B pese a sus 7,41 metros.",
      "Camas individuales traseras con colchones de muelles y gran garaje de doble acceso (1.100 x 2.180 x 1.100 mm).",
      "Carga útil de 425 kg publicada por la marca: margen honesto para dos personas bien equipadas.",
      "Equipamiento de serie generoso: llantas de 16\", toldo Thule, GFK en techo y suelo, multimedia Pioneer, cámara trasera.",
      "Frigorífico Super Slim Tower y Truma Combi 6: cocina y calefacción de nivel premium en segmento medio.",
    ],
    contras: [
      "Hobby no publica PVP oficial para España: el precio solo se conoce pidiendo presupuesto.",
      "La tercera plaza para dormir es una transformación del salón: válida para uso ocasional, no para diario.",
      "El motor base de 130 CV (2020) se queda justo con el vehículo a plena carga; el 140 CV es preferible.",
      "Estética interior clásica: quien busque diseño vanguardista mirará a otras marcas.",
      "Con 2,33 m de ancho y 7,41 m de largo, no es la perfilada más ágil en pueblos con calles estrechas.",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/hobby-optima-de-luxe-t70-ge-2026-precio-ficha-tecnica-oficial.webp", alt: "Hobby Optima De Luxe T70 GE, vista exterior", ancho: 728, alto: 546 },
      { src: "/media/hobby-optima-de-luxe-t70-ge-2026-precio-ficha-tecnica-interior1.webp", alt: "Hobby Optima De Luxe T70 GE, interior", ancho: 1024, alto: 768 },
      { src: "/media/hobby-optima-de-luxe-t70-ge-2026-precio-ficha-tecnica-interior2.webp", alt: "Hobby Optima De Luxe T70 GE, interior", ancho: 1280, alto: 853 },
      { src: "/media/hobby-optima-de-luxe-t70-ge-2026-precio-ficha-tecnica-detalle.webp", alt: "Hobby Optima De Luxe T70 GE, detalle", ancho: 728, alto: 546 },
    ],
    analisisSlug: "hobby-optima-de-luxe-t70-ge-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 48.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Hobby (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
  {
    id: "hobby-vantana-k60-ft-2026-precio-ficha-tecnica",
    marca: "Hobby",
    modelo: "Vantana K60 FT",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: null, // Hobby no publica PVP oficial para España
    potenciaCv: 140, // Fiat Ducato 2.2 de 140 CV según exposé de concesionario (existe variante de 180 CV)
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro 6 sobre Fiat Ducato
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/hobby-vantana-k60-ft-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/hobby-vantana-k60-ft-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/hobby-vantana-k60-ft-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5998, // exposés de concesionario (mobile.de / TruckScout24)
    anchoMm: 2050, // exposés de concesionario
    altoMm: 2600, // exposés de concesionario
    pesoKg: null, // la marca no publica la masa en orden de marcha de esta versión
    mmaKg: 3500, // exposés de concesionario
    carnetNecesario: "B", // mmaKg <= 3500
    cargaUtilKg: null, // la marca no publica una cifra de carga útil para esta versión
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 cinturones de tres puntos según exposé
    plazasDormir: 4, // cama francesa trasera + cama extraíble del techo alto
    parNm: null,
    traccion: "delantera", // Fiat Ducato, tracción delantera de serie en la plataforma
    emisionesCo2: null,
    aprox: [],
    notas:
      "El Vantana K60 FT pertenece a la gama camper histórica de Hobby (actualmente la marca impulsa otras líneas van). No existe hoja oficial pública actual con sus datos completos; las cotas (5.998/2.050/2.600 mm), la MMA de 3.500 kg, las 4 plazas con cinturón y el motor Fiat Ducato 2.2 de 140 CV proceden de exposés de concesionarios (caraworld/ADAC, TruckScout24, mobile.de). Un exposé ADAC de una unidad De Luxe 2024 indica 132 kW/180 CV, por lo que la potencia puede variar según versión. La masa en orden de marcha y la carga útil no están publicadas; quedan sin dato. Precio: Hobby no publica PVP oficial para España; queda sin dato. Precio: se deja sin dato porque las gamas Optima y Vantana ya no figuran en la gama oficial vigente de Hobby (hobby-caravan.de: Ontour, Prestige y Maxia); fueron renombradas y no se asignan precios de modelos renombrados.",
    curiosidades:
      "El Vantana K60 FT esconde su truco en el techo: el techo alto de la camper integra una cama extraíble de 215 x 170 cm, de modo que una furgoneta de menos de 6 metros ofrece dos zonas de dormitorio independientes —la cama francesa trasera y la cama del techo— sin renunciar al baño completo con ducha. Fuente: exposé ADAC/caraworld del Hobby Vantana De Luxe K60 FT (https://cdn.caraworld.com/bilder/e/023/420/782/cw23420782-de-ADAC-expose.pdf).",
    descripcion: `El Hobby Vantana K60 FT es una camper de 5.998 mm construida sobre el Fiat Ducato que demuestra hasta dónde se puede estirar el concepto de furgoneta camperizada cuando se diseña con ambición. Menos de seis metros de longitud, 3.500 kg de MMA y carnet B: sobre el papel es la camper manejable de todos los días, la que aparca en una plaza de ciudad y entra en los parkings con límite de altura holgado. Pero su distribución FT —cama francesa trasera— y el techo alto con cama extraíble la convierten en una cuatro plazas reales, algo poco habitual en este tamaño.

    En medidas y habitabilidad, el K60 FT juega en la liga de las campers «talla L»: la base es un Ducato de 6 metros, pero el techo alto transforma por completo la sensación interior. La cama francesa trasera, con su característica esquina recortada, deja paso libre hacia el baño posterior completo —con ducha separada, inodoro giratorio Thetford y ventana—, mientras que la cama extraíble del techo, de 215 x 170 cm, añade un dormitorio en altura al que se accede por escalera. Es una solución que las familias con dos niños agradecen: los padres abajo, los niños arriba, cada uno con su territorio. La cocina central equipa dos fuegos con piezo, fregadero con tapas de cristal, cajones de extracción total con cierre suave y frigorífico de compresor Dometic con congelador integrado, un nivel de equipamiento que hace unos años solo se veía en autocaravanas.

    El salón delantero, con banqueta doble enfrentada y mesa del salón, se completa con los asientos giratorios de cabina para formar la zona de día. Los cuatro cinturones de tres puntos permiten viajar a cuatro personas legalmente, y el exposé de la versión De Luxe detalla comodidades como asientos de piloto regulables en giro, inclinación y altura, espejos eléctricos calefactados y plegables, volante multifunción de cuero, cuadro digital y climatizador automático en cabina. La puerta de la célula con ventana grande, cierre centralizado y función softclose, más el escalón eléctrico y la mosquitera, redondean un acceso a la zona vivienda cuidado.

    En tecnología y equipamiento, la versión De Luxe del K60 FT que documentan los concesionarios incluye llantas de aleación de 16 pulgadas, faros LED diurnos, ventanas de marco, toldo Dometic de 3 metros en antracita, calefacción Truma Combi de gas con panel INet X, preinstalación de aire acondicionado de techo, control de la tecnología de a bordo por panel Hobby o por bluetooth con la app Hobby Connect, iluminación ambiental, detector de humo y tomas USB en la zona de noche. El paquete de seguridad del Ducato aporta asistente de mantenimiento de carril, asistente de ángulo muerto, control de descenso, Traction Plus y sensores de presión de neumáticos. No es la camper espartana de antaño: es una pequeña autocaravana con carrocería de furgoneta.

    En mecánica, el Fiat Ducato 2.2 diésel se ofrece en torno a los 140 CV con cambio manual de seis velocidades en la configuración documentada, con una variante de 180 CV (132 kW) que aparece en el exposé ADAC de una unidad De Luxe de 2024. La tracción es delantera y la MMA se queda en los 3.500 kg justos, por lo que conviene vigilar el peso si se viaja a cuatro con equipaje completo, bicicletas y toldo: las campers de 6 metros con techo alto y baño completo no son ligeras, y el margen de carga real dependerá de lo que pese la unidad en orden de marcha, un dato que la marca no publica para esta versión.

    En precio y red comercial en España, Hobby no publica tarifa oficial, así que no ofrecemos cifra de partida. Como referencia, los portales alemanes muestran unidades del Vantana De Luxe K60 FT nuevas y seminuevas en una horquilla amplia según año y equipamiento; el mercado de ocasión español también las lista con frecuencia, lo que facilita comparar. Hobby mantiene red de distribuidores oficiales en España para presupuestos de unidades nuevas de sus gamas camper actuales y para el servicio postventa, algo importante en una camper con techo alto y sus mecanismos.

    Cómo lo verificamos: las cotas, la MMA, las plazas, el motor y el equipamiento proceden de exposés de concesionarios europeos (caraworld/ADAC, TruckScout24, mobile.de) que documentan unidades reales del Vantana K60 FT y del Vantana De Luxe K60 FT. No existe una hoja oficial pública actual de Hobby con la ficha completa de este modelo —la gama Vantana es histórica dentro del catálogo—, por lo que los datos de peso en orden de marcha, carga útil, consumo y precio quedan sin dato y se declaran como tales. Todo verificado el 19 de octubre de 2026.

    Para quién es: el Vantana K60 FT encaja con parejas o familias jóvenes que quieren una camper de menos de 6 metros para usar a diario y escapar los fines de semana, pero sin renunciar a dormir cuatro ni al baño con ducha separada. El techo alto con cama extraíble es su argumento diferencial frente a las campers de techo elevable. No es para quien busque una camper ligera y minimalista de fin de semana (hay opciones más sencillas y baratas), ni para quien necesite mucha carga útil declarada: aquí conviene pesar la unidad antes de cargarla hasta arriba.`,
    pros: [
      "Menos de 6 metros y carnet B: se aparca y se conduce como una furgoneta grande.",
      "Techo alto con cama extraíble de 215 x 170 cm: cuatro plazas reales en formato camper.",
      "Baño trasero completo con ducha separada e inodoro giratorio, poco habitual en 6 metros.",
      "Equipamiento De Luxe generoso: Truma Combi con INet X, toldo Dometic, Hobby Connect, asistentes del Ducato.",
      "Cocina completa con cajones de extracción total y frigorífico de compresor Dometic.",
    ],
    contras: [
      "Sin datos oficiales de peso en orden de marcha ni carga útil: hay que pesar la unidad antes de cargarla.",
      "Gama histórica de Hobby: la información técnica oficial pública es limitada frente a las gamas actuales.",
      "El motor de 140 CV puede quedarse justo a plena carga con cuatro ocupantes; la versión de 180 CV es preferible.",
      "El techo alto penaliza el consumo en autopista frente a una camper de techo bajo.",
      "Hobby no publica PVP oficial para España: el precio solo se conoce en concesionario o en ocasión.",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/hobby-vantana-k60-ft-2026-precio-ficha-tecnica-oficial.webp", alt: "Hobby Vantana K60 FT, vista exterior", ancho: 1600, alto: 1200 },
      { src: "/media/hobby-vantana-k60-ft-2026-precio-ficha-tecnica-interior1.webp", alt: "Hobby Vantana K60 FT, interior", ancho: 1280, alto: 960 },
      { src: "/media/hobby-vantana-k60-ft-2026-precio-ficha-tecnica-interior2.webp", alt: "Hobby Vantana K60 FT, interior", ancho: 1920, alto: 1280 },
      { src: "/media/hobby-vantana-k60-ft-2026-precio-ficha-tecnica-detalle.webp", alt: "Hobby Vantana K60 FT, detalle", ancho: 1200, alto: 900 },
    ],
    analisisSlug: "hobby-vantana-k60-ft-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 48.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Hobby (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
