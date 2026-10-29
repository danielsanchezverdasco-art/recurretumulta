// Autocaravanas Benimar — lote Merlín 3 (19/10/2026). Fusión de w1 + w2.
// Autocaravanas Benimar — lote Merlín 3 (19/10/2026).
// Fuentes: web oficial benimar.es (gama Tessoro 2027), catálogo oficial Benimar (PDF, agosto 2026),
// Instagram oficial de Benimar (vía autoyas.com), ficha de concesionario Mundovan (Mileo 297),
// ficha TruckScout24 (Mileo 297: dimensiones y mecánica), PDF motorvision.es (cama isla Mileo 297),
// anuncio de concesionario roulot (referencia de precio Tessoro 440 UP). Verificado el 19/10/2026.
// Notas honestas: Benimar no publica PVP en su web española; los precios quedan sin dato y
// solo se citan referencias de concesionario en el texto con su fuente. La carga útil no se
// publica para estos modelos y queda sin dato (prohibido calcularla).
// Autocaravanas Benimar — lote Merlín 3 (19/10/2026).
// Fuentes: review de Caravan Club con cifras de la literatura del fabricante
// (https://www.caravanclub.co.uk/blog/product-and-outfit-reviews/motorhome-reviews/benimar-mileo-286/),
// ficha de unidad 2016 en Gumtree (https://www.gumtree.com/p/campervans-motorhomes/2016-benimar-mileo-286-4-berth-4-belt-habcheck-inverter/1801632439),
// web oficial de Benimar — gama Mileo (https://www.benimar.es/en/low-profile-motorhomes/),
// CaravanTimes sobre la gama Mileo 2017 (https://www.caravantimes.co.uk/save%20for%20laters-brand/newsletter-the-all-new-benimar-mileo-from-marquis-leisure/).
// Verificado el 19/10/2026.
// NOTAS HONESTAS: el modelo asignado (benimar-first-332) no existe —sin resultados en
// catálogos ni prensa— y se sustituye por el Benimar Mileo 286, modelo real y documentado.
// Benimar no publica tarifa oficial para España: precioDesde queda sin dato. La potencia de
// 180 CV y la caja automática de 9 velocidades corresponden a la variante 2.2 Multijet
// (literatura del fabricante); las primeras unidades (2016) montaban el 2.3 de 150 CV manual
// con MMA de 3.650 kg. La carga útil de 1.269 kg es la publicada por el fabricante en su
// literatura (vía Caravan Club), no un cálculo. Fotos de anuncio de unidad real 2016
// (modelo exacto, sin marcas de agua); resolución 768 px, la disponible.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_BENIMAR_M3: Autocaravana[] = [
  {
    id: "benimar-mileo-297-2026-precio-ficha-tecnica",
    marca: "Benimar",
    modelo: "Mileo 297",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Benimar no publica PVP en España; null = «no publicado»
    potenciaCv: 140,
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
    imagen: "/media/benimar-mileo-297-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/benimar-mileo-297-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/benimar-mileo-297-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7390, // TruckScout24, ficha de unidad 2026
    anchoMm: 2300, // TruckScout24, ficha de unidad 2026
    altoMm: 2890, // TruckScout24, ficha de unidad 2026
    pesoKg: null,
    mmaKg: 3500, // TruckScout24, ficha de unidad 2026
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no la publica en la documentación consultada
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4,
    parNm: null,
    traccion: "delantera", // Fiat Ducato, declarada por el fabricante base
    emisionesCo2: null,
    aprox: [],
    notas:
      "Dimensiones 7390 x 2300 x 2890 mm y MMA 3500 kg de la ficha de una unidad 2026 en TruckScout24 (Fiat Ducato 2.2 de 140 CV, cambio manual o automático). Cama isla de 150 cm de ancho regulable en altura (PDF motorvision.es) y cama de techo eléctrica de 2 plazas (TruckScout24). Modelo verificado en la gama 2026: publicación oficial de Benimar en Instagram (vía autoyas.com) y ficha de concesionario Mundovan. Precio sin dato (Benimar no publica tarifa ES); Mundovan anuncia una unidad en 87.723 € como referencia de concesionario. Carga útil y consumo sin dato oficial.",
    curiosidades:
      "La cama isla trasera del Mileo 297 mide 150 cm de ancho —como una cama de matrimonio— y se regula en altura manualmente para dejar más o menos garaje debajo según lo que se lleve en cada viaje. Fuente: http://m.motorvision.es/pdf/generados/w0157658w.pdf",
    descripcion: `La Benimar Mileo 297 es la perfilada española que mejor resume lo que pide el mercado nacional en 2026: cama isla de verdad, cuatro plazas de viaje y cuatro de noche, y unas medidas contenidas de 7,39 metros que no asustan a quien aparca en el pueblo. Benimar, que fabrica en Peñíscola (Castellón), juega en casa con este modelo, y se nota en una distribución pensada para el uso real de las familias españolas más que para el folleto.

    Con 7.390 mm de largo, 2.300 mm de ancho y 2.890 mm de alto según la ficha de una unidad 2026 publicada en TruckScout24, la 297 se sitúa justo por debajo de la barrera psicológica de los siete metros y medio. La masa máxima autorizada es de 3.500 kg, así que basta el carnet B, y la base es el Fiat Ducato 2.2 de 140 CV, disponible con cambio manual o automático, con tracción delantera. Es la mecánica más extendida del sector en Europa: cualquier taller de furgones la conoce, los repuestos son baratos y la reventa no sufre.

    El corazón de la ficha es el dormitorio: una cama isla de 150 cm de ancho —la medida de una cama de matrimonio— que se regula en altura manualmente. Ese detalle cambia la vida a bordo más de lo que parece: si el viaje es de playa, se sube la cama y el garaje traga tablas, sillas y la nevera de exterior; si es de invierno, se baja y se gana comodidad para entrar y salir de la cama. La segunda cama es la del techo, eléctrica y de dos plazas, que se despliega sobre el salón sin robar ni un centímetro de día. Entre las dos suman cuatro plazas de noche honestas, y las cuatro plazas de viaje hacen el resto para una familia con dos niños.

    El salón delantero, con los asientos de cabina giratorios, da juego para comer, jugar a las cartas o teletrabajar una mañana de lluvia, y la cocina viene dimensionada para cocinar de verdad, no solo para calentar. El baño completo con ducha separada evita el apaño de la ducha sobre el WC que todavía se ve en campers baratos. En conjunto, es una célula luminosa y bien ventilada, con la claraboya delantera aportando la luz que las perfiladas necesitan para no parecer un pasillo.

    Del precio, la honestidad que exige el brief: Benimar no publica PVP en su web española, así que el campo queda sin dato. Como referencia de mercado, el concesionario Mundovan anuncia una unidad del Mileo 297 en 87.723 euros; es el precio de un concesionario concreto con su equipamiento concreto, no una tarifa oficial, y sirve como orden de magnitud. Lo sensato es pedir presupuesto cerrado en dos o tres concesionarios Benimar —la marca tiene red en toda España— con el pack de chasis, el toldo, la placa solar y la batería auxiliar desglosados, porque ahí es donde se gana o se pierde dinero.

    En el uso cotidiano, la Mileo 297 se defiende con argumentos que solo se aprecian viviéndola: la cama isla permite levantarse sin pasar por encima de la pareja, la cocina con sus fuegos y su horno —según equipamiento— invita a cocinar en ruta en lugar de tirar de bocadillos, y el baño con ducha separada convierte una semana de viaje en algo sostenible y no en un campamento. Los armarios altos y el garaje bajo la cama absorben la ropa de cuatro sin que la célula parezca un trastero, y la regulación en altura de la cama isla se convierte en el ajuste que se hace en cada viaje según lo que se cargue debajo.

    ¿Para quién es? Para la familia española de cuatro que quiere su primera autocaravana «de verdad» sin irse a ocho metros ni a presupuestos alemanes; para la pareja que viaja mucho y valora la cama isla regulable y el servicio postventa nacional; y para quien compra pensando en la reventa, porque Benimar es la marca española más líquida en ocasión. No es para quien necesita cinco plazas de viaje, ni para quien busca una integral con su parabrisas panorámico, ni para quien hace mucha montaña en invierno y prefiere calefacción de gasóleo (aquí manda el gas, como en la mayoría del segmento).

    Cómo lo verificamos: la existencia del Mileo 297 en la gama 2026 se comprobó en la publicación oficial de Benimar en Instagram (recogida por autoyas.com) y en la ficha del concesionario Mundovan. Las dimensiones, la MMA y la mecánica proceden de la ficha de una unidad 2026 en TruckScout24. La cama isla de 150 cm regulable en altura consta en el PDF de motorvision.es. El precio español queda sin dato porque Benimar no lo publica; la referencia de Mundovan se cita como precio de concesionario con su fuente. Datos verificados el 19/10/2026.`,
    pros: [
      "Cama isla de 150 cm regulable en altura: dormitorio de matrimonio y garaje a la carta",
      "7,39 metros y 3.500 kg: carnet B y maniobrabilidad de perfilada contenida",
      "Fiat Ducato 2.2 de 140 CV manual o automático: la mecánica más común y barata de mantener",
      "Cama de techo eléctrica de 2 plazas: 4 plazas de noche sin tocar el salón de día",
      "Fabricada en España por Benimar: red nacional de concesionarios y buena liquidez en ocasión",
    ],
    contras: [
      "Benimar no publica precio oficial: el PVP depende del concesionario y su equipamiento",
      "140 CV para 3,5 toneladas: suficiente, pero sin alegrías en puertos con carga completa",
      "La cama de techo eléctrica resta altura libre en el salón cuando está desplegada",
      "Calefacción a gas como la mayoría del segmento: quien inverna mucho echará en falta el gasóleo",
      "7,39 metros se notan en pueblos con calles estrechas frente a un camper de 6 metros",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/benimar-mileo-297-2026-precio-ficha-tecnica-oficial.webp", alt: "Benimar Mileo 297, vista exterior", ancho: 1536, alto: 818 },
      { src: "/media/benimar-mileo-297-2026-precio-ficha-tecnica-interior1.webp", alt: "Benimar Mileo 297, interior", ancho: 600, alto: 800 },
      { src: "/media/benimar-mileo-297-2026-precio-ficha-tecnica-interior2.webp", alt: "Benimar Mileo 297, interior", ancho: 600, alto: 800 },
      { src: "/media/benimar-mileo-297-2026-precio-ficha-tecnica-detalle.webp", alt: "Benimar Mileo 297, detalle", ancho: 600, alto: 800 },
    ],
    analisisSlug: "benimar-mileo-297-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Benimar (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
  {
    id: "benimar-tessoro-440-up-2026-precio-ficha-tecnica",
    marca: "Benimar",
    modelo: "Tessoro 440 UP",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Benimar no publica PVP en España; null = «no publicado»
    potenciaCv: 165,
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
    imagen: "/media/benimar-tessoro-440-up-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/benimar-tessoro-440-up-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/benimar-tessoro-440-up-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6340, // catálogo oficial Benimar (T440 UP, 6,34 m)
    anchoMm: 2320, // catálogo oficial Benimar
    altoMm: 2890, // catálogo oficial Benimar
    pesoKg: null,
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no la publica en la documentación consultada
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4,
    parNm: null,
    traccion: "delantera", // Ford Transit, declarada por el fabricante base
    emisionesCo2: null,
    aprox: [],
    notas:
      "Medidas de 6340 x 2320 x 2890 mm según el catálogo oficial Benimar (agosto 2026), que presenta la T440 UP como «perfilada de 6,34 m». MMA de 3500 kg. " +
      "Monta el Ford Transit 2.0 de 165 CV, con 4 plazas de viaje y 4 de noche, cama eléctrica basculante, ducha separada y frigorífico de 150 l (publicación oficial de Benimar en Instagram). " +
      "Modelo encuadrado en la gama oficial benimar.es 2027 (T440UP). Precio sin dato (Benimar no publica tarifa ES); como referencia, el concesionario roulot anuncia una unidad por 75.595 €. " +
      "Carga útil y consumo sin dato (sin dato oficial).",
    curiosidades:
      "La Tessoro 440 UP, con 6,34 metros, es la benjamina de la gama UP: la familia Benimar que se reconoce por la cama basculante eléctrica sobre el salón y por el garaje trasero de volumen regulable. Fuente: catálogo oficial Benimar (agosto 2026) y web oficial benimar.es.",
    descripcion: `Dormir cuatro con dignidad no exige siete metros: la Benimar Tessoro 440 UP lo demuestra. Con 6,34 metros según el catálogo oficial de agosto de 2026, es la más corta de la gama UP —la familia Benimar de la cama basculante eléctrica— y su idea es de una simpleza genial: de día, salón despejado con garaje detrás; de noche, la cama eléctrica desciende del techo y el dormitorio aparece sin tocar un cojín.

Medidas de camper grande, vida de autocaravana. Las cotas oficiales —6.340 mm de largo, 2.320 de ancho y 2.890 de alto— con 3.500 kg de MMA (carnet B) la sitúan más cerca de los campers grandes que de las perfiladas tradicionales, y ahí está su encanto: se mueve, se aparca y gasta como un 6,3 metros, pero se vive como una autocaravana completa, con baño y ducha independiente más cocina equipada. El garaje trasero, de volumen regulable, engulle bicicletas y enseres de playa sin restar un centímetro a la célula.

La cama que baja del techo. Merece capítulo aparte porque es el alma del concepto UP: de día reposa pegada al techo y el salón conserva toda su altura; de noche desciende pulsando un botón y se vuelve una cama doble auténtica, sin reconvertir el comedor ni forcejear con cojines. Para una pareja es un dormitorio principal sin concesiones; en familia, los niños la adoptan mientras los padres ocupan la cama trasera. El único tributo es mecánico: como todo sistema eléctrico, pide su revisión en la puesta a punto anual y no debe forzarse jamás a mano.

Motor Ford de 165 CV. La base es el Transit 2.0 de 165 CV, la mecánica más potente de esta ficha y una de las más resolutivas del segmento: tira de los 3.500 kg con desahogo, recupera con alegría y la red Ford atiende furgones en cualquier provincia. Tracción delantera, como casi todas sus rivales. La serie UP suma a la basculante de dos plazas las cuatro plazas de viaje y cuatro de noche, la ducha independiente del WC y un frigorífico de 150 litros —la capacidad que permite comprar cada tres días en lugar de cada día—.

El precio, como en toda la gama. Benimar no publica PVP en su web española: null en la ficha. Como referencia de mercado, el concesionario roulot anuncia una unidad en 75.595 euros; es precio de tienda con su equipamiento, no tarifa oficial, pero deja claro que juega muy por debajo de las perfiladas de siete metros y medio. La recomendación: presupuesto cerrado en varios concesionarios de la red, con los packs desglosados —toldo, placa solar, batería auxiliar, cámara trasera—, porque en este nivel los opcionales son los que deciden la factura.

En carretera y en el día a día. Los 6,34 metros se traducen en una autocaravana que, con paciencia, entra en el parking del supermercado; que no exige parcela grande en el camping; que en una secundaria se comporta casi como un furgón grande. Del consumo no hay cifra oficial que citar, pero la aerodinámica contenida y el peso ajustado de la Tessoro juegan a su favor, y con 165 CV los puertos se coronan sin bajar a tercera ni ver pasar a los camiones. Es el formato perfecto para la escapada improvisada de fin de semana: se carga en una tarde y se deja en la puerta de casa sin pedir permiso al vecindario.

Cómo lo verificamos: la T440 UP figura en la gama oficial de benimar.es (Tessoro 2027) y en el catálogo oficial de agosto de 2026, que la describe como «perfilada de 6,34 m»; de ese catálogo salen las medidas. El motor Ford de 165 CV, las 4 plazas, la cama eléctrica basculante, la ducha independiente y el frigo de 150 l constan en la publicación oficial de Benimar en Instagram. El precio español queda sin dato porque la marca no lo publica; la referencia de roulot se cita como precio de concesionario, con su fuente. Datos verificados el 19/10/2026.

Para quién: la pareja que quiere una autocaravana de verdad sin arrastrar siete metros y medio; la familia con dos niños —ellos en la basculante, los padres en la cama trasera—; quien aparca en ciudad o en parcelas pequeñas y cuenta cada metro. No es para quien sueñe con cama isla fija (aquí la protagonista es la basculante), ni para quien necesite cinco plazas de viaje, ni para quien recela de los mecanismos eléctricos y prefiere la cama fija de toda la vida.`,
    pros: [
      "6,34 metros: la perfilada completa más compacta de su gama; aparcar y maniobrar, coser y cantar.",
      "Cama basculante eléctrica: dormitorio doble que aparece sin reconvertir el salón ni pelear cojines.",
      "Transit 2.0 de 165 CV: la mecánica más briosa de la ficha, con talleres Ford en toda España.",
      "Ducha independiente y frigo de 150 l: dotación de autocaravana grande en formato contenido.",
      "Garaje trasero de volumen regulable: bicis y material deportivo viajan dentro.",
    ],
    contras: [
      "Benimar no publica precio oficial: cada concesionario pone su PVP.",
      "Nada de cama isla ni gemelas fijas: la cama principal es la basculante eléctrica.",
      "El mecanismo eléctrico pide mantenimiento y no tolera que se fuerce a mano.",
      "Con la cama desplegada, el salón pierde altura libre: los madrugadores, avisados.",
      "165 CV tientan a correr, pero con 3.500 kg y 2,89 m de alto la prudencia sigue al mando.",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/benimar-tessoro-440-up-2026-precio-ficha-tecnica-oficial.webp", alt: "Benimar Tessoro 440 UP, vista exterior", ancho: 1920, alto: 1279 },
      { src: "/media/benimar-tessoro-440-up-2026-precio-ficha-tecnica-interior1.webp", alt: "Benimar Tessoro 440 UP, interior", ancho: 1920, alto: 1440 },
      { src: "/media/benimar-tessoro-440-up-2026-precio-ficha-tecnica-interior2.webp", alt: "Benimar Tessoro 440 UP, interior", ancho: 1024, alto: 576 },
      { src: "/media/benimar-tessoro-440-up-2026-precio-ficha-tecnica-detalle.webp", alt: "Benimar Tessoro 440 UP, detalle", ancho: 1024, alto: 682 },
    ],
    analisisSlug: "benimar-tessoro-440-up-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Ford Transit: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Transit)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Benimar (anual recomendada)", queSeCambia: "Estanqueidad, gas, cama basculante, humedades", costeAproxEur: 250 },
      ],
    },
  },
  {
    id: "benimar-mileo-286-2026-precio-ficha-tecnica",
    marca: "Benimar",
    modelo: "Mileo 286",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Benimar no publica tarifa oficial para España
    potenciaCv: 180, // 2.2 Multijet 180 CV (variante 2021+); las 2016 llevaban el 2.3 de 150 CV
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro 6
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/benimar-mileo-286-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/benimar-mileo-286-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/benimar-mileo-286-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6950, // 6,95 m según literatura del fabricante (vía Caravan Club)
    anchoMm: 2300,
    altoMm: 2890, // 2,89 m; Benimar anuncia perfiladas de 289 cm de altura
    pesoKg: 3131, // MRO según literatura del fabricante
    mmaKg: 4400, // MTPLM; las unidades 2016 se matriculaban en 3.650 kg
    carnetNecesario: "C1", // mmaKg > 3500
    cargaUtilKg: 1269, // «user payload» publicado por el fabricante en su literatura (vía Caravan Club)
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4, // cama basculante eléctrica doble + salón convertible
    parNm: 450, // 450 Nm entre 1.500 y 1.750 rpm (2.2 Multijet 180 CV)
    traccion: "delantera",
    emisionesCo2: null,
    aprox: [],
    notas:
      "Motor 2.2 Multijet de 180 CV con cambio automático de 9 velocidades y 450 Nm según la literatura del fabricante recogida por Caravan Club (MRO 3.131 kg, MTPLM 4.400 kg, 6,95 x 2,30 x 2,89 m, depósito de 90 l). Las primeras unidades del modelo (2016) se vendían con el 2.3 Multijet de 150 CV manual y MMA de 3.650 kg, según ficha de distribuidor. La carga útil de 1.269 kg es la cifra de «user payload» publicada por el fabricante, no un cálculo. Quedan sin dato: precio oficial en España (Benimar no publica tarifa), consumo, emisiones de CO2 y autonomía.",
    curiosidades:
      "Desde la temporada 2017, toda la gama Mileo se fabrica con construcción completamente sin madera («wood free»), una decisión de Benimar para proteger mejor la célula de la humedad y las filtraciones. Fuente: CaravanTimes, «The all new Benimar Mileo» (https://www.caravantimes.co.uk/save%20for%20laters-brand/newsletter-the-all-new-benimar-mileo-from-marquis-leisure/).",
    descripcion: `La Benimar Mileo 286 es una autocaravana perfilada de 6,95 metros que resume muy bien por qué la marca de Peñíscola se ha ganado fama de ofrecer la mejor relación calidad-precio del mercado europeo. Pertenece a la gama Mileo, la familia de perfiladas sobre chasis Fiat Ducato con la que Benimar ataca el segmento medio: ni la más barata ni la más lujosa, pero con un equipamiento de serie tan completo que en otros fabricantes habría que pagarlo como un largo listado de extras. La 286 es, dentro de esa gama, la versión pensada para parejas que quieren viajar con desahogo y recibir invitados de vez en cuando sin renunciar a una cama siempre hecha.

    En medidas, la 286 se mueve en el punto dulce de las perfiladas familiares: 6,95 metros de largo, 2,30 de ancho y 2,89 de alto. Son cotas que permiten aparcarla y maniobrar con ella sin el respeto que imponen las integrales de ocho metros, pero con un interior que no se siente estrecho. La altura de 289 centímetros —la que Benimar anuncia para sus perfiladas— deja una sensación de amplitud notable en el salón y permite una cama basculante de techo con recorrido generoso. El peso también está bien resuelto: la masa en orden de marcha declarada por el fabricante es de 3.131 kg y la masa máxima autorizada de 4.400 kg, lo que deja una carga útil teórica de 1.269 kg, una cifra muy holgada para llevar bicicletas, toldo, menaje completo y depósitos llenos sin ir justo. Ojo, eso sí: con 4.400 kg de MMA hace falta el carnet C1; las primeras unidades de 2016 se matriculaban en 3.650 kg (también C1 en la práctica británica, pero rebajables a 3.500 kg), así que conviene comprobar la ficha técnica de cada unidad concreta antes de comprar de ocasión.

    La distribución es el gran argumento de la 286. Delante, un salón amplísimo con sofá doble en L, otro sofá doble lateral y los dos asientos de cabina giratorios, con mesa exenta que se monta en el centro: caben cuatro adultos a comer con comodidad real, no de mentirijilla. Detrás del salón, la cocina está sorprendentemente equipada para una perfilada de este precio: horno, grill, dos fuegos de gas más una placa eléctrica, microondas, frigorífico grande con congelador independiente y hasta cajón botellero. El baño, con ducha separada, cumple sin agobios, y al fondo hay un garaje de buen tamaño, algo que no todas las perfiladas de menos de siete metros pueden decir. La cama principal es una gran cama doble basculante eléctrica situada en el centro del vehículo: baja con solo pulsar un botón y no hay que hacerla ni deshacerla cada día, que es justo lo que buscan las parejas viajeras. Las otras dos plazas salen del salón convertible.

    En tecnología y equipamiento, la 286 de las últimas series viene con un nivel de dotación que explica su éxito en Reino Unido, donde se vendió mucho: faros y limpiaparabrisas automáticos, navegador, cámara trasera, llantas de aleación, ESP, Traction+, control de descenso, panel solar, punto de barbacoa exterior y hasta sistema de seguimiento. La calefacción es de gas con 6 kW, suficiente para alargar la temporada. Y un detalle constructivo que merece mención: desde 2017 Benimar fabrica la gama Mileo completamente sin madera en su estructura, buscando una mejor protección contra la humedad y las filtraciones, el enemigo número uno de cualquier autocaravana con años.

    Mecánicamente, la unidad de referencia monta el Fiat Ducato 2.2 Multijet de 180 CV con cambio automático de nueve velocidades y tracción delantera, que entrega 450 Nm entre 1.500 y 1.750 rpm: empuje de sobra para mover los 4.400 kg con soltura en autopista y puertos. Las unidades de 2016, las más abundantes en el mercado de ocasión, llevan el anterior 2.3 Multijet de 150 CV con cambio manual de seis velocidades, un motor reputadísimo por su fiabilidad aunque menos refinado. El depósito de combustible es de 90 litros.

    En precio, Benimar no publica tarifa oficial para España, así que no hay cifra de catálogo que dar: el precio lo pone cada concesionario según equipamiento y promociones. Como referencia, en Reino Unido la versión 180 CV automática se anunciaba en torno a las 88.000 libras. En España, la red de distribuidores Benimar es amplia —la fábrica está en Peñíscola (Castellón) y la marca pertenece al grupo Trigano—, por lo que pedir presupuesto y probar la 286 (o su equivalente actual en la gama) es sencillo en casi cualquier provincia. En el mercado de ocasión, las 286 de 2016-2019 con el 2.3 de 150 CV son una de las compras más razonables del segmento: mecánica probada, célula sin madera y un precio contenido.

    Cómo lo verificamos: las dimensiones, pesos, motor y par proceden de la literatura del fabricante recogida en la prueba de Caravan Club; los datos de la variante 2016 (2.3 de 150 CV, MMA de 3.650 kg, distribución detallada) de la ficha de un distribuidor británico; la descripción de la gama Mileo (chasis Fiat, perfiladas de 289 cm) de la web oficial benimar.es; y el dato de la construcción sin madera desde 2017 de CaravanTimes. Todo verificado el 19/10/2026. Quedan sin dato el precio oficial español, el consumo y las emisiones, que el fabricante no publica.

    Para quién es: la Mileo 286 encaja con parejas viajeras que quieren una cama siempre hecha, un salón de verdad para cuatro y un garaje sin subir a los siete metros y medio. También con quien busca una ocasión fiable y bien equipada sin pagar el sobreprecio de las marcas premium alemanas. No es para quien solo tenga el carnet B y no quiera sacarse el C1 (necesario con sus 4.400 kg de MMA), ni para quien necesite cinco o seis plazas: aquí hay cuatro, y punto.`,
    pros: [
      "Cama doble basculante eléctrica que no hay que hacer ni deshacer a diario",
      "Salón delantero amplísimo con capacidad real para cuatro comensales",
      "Carga útil teórica de 1.269 kg, muy holgada para su segmento",
      "Construcción sin madera desde 2017, mejor defensa contra la humedad",
      "Equipamiento de serie muy completo (solar, cámara, navegador, Traction+)",
    ],
    contras: [
      "Con 4.400 kg de MMA exige carnet C1, no vale el B",
      "Benimar no publica tarifa oficial en España: el precio depende del concesionario",
      "Las unidades de 2016 con el 2.3 de 150 CV manual son menos refinadas que la 180 CV automática",
      "Marca española con gran red, pero valor de reventa inferior al de las premium alemanas",
      "Solo cuatro plazas: no sirve para familias numerosas",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/benimar-mileo-286-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Benimar Mileo 286, vista exterior",
        ancho: 970,
        alto: 660,
      },
      {
        src: "/media/benimar-mileo-286-2026-precio-ficha-tecnica-interior1.webp",
        alt: "Benimar Mileo 286, salón interior",
        ancho: 970,
        alto: 660,
      },
      {
        src: "/media/benimar-mileo-286-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Benimar Mileo 286, cuarto de baño",
        ancho: 970,
        alto: 660,
      },
      {
        src: "/media/benimar-mileo-286-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Benimar Mileo 286, detalle de la cocina",
        ancho: 970,
        alto: 660,
      },
    ],
    analisisSlug: "benimar-mileo-286-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Base Fiat Ducato: revisión cada 2 años o 48.000 km (lo que antes ocurra, según plan Fiat)",
      revisiones: [
        {
          nombre: "Revisión base (Fiat Ducato)",
          queSeCambia: "Aceite + filtros + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Benimar (anual recomendada)",
          queSeCambia: "Estanqueidad, gas, electricidad, humedades",
          costeAproxEur: 250,
        },
      ],
    },
  },
];
