// Autocaravanas Benimar — lote Merlín 3 (19/10/2026). Fusión de w1 + w2.
// Autocaravanas Benimar — lote Merlín 3 (19/10/2026).
// Fuentes: web oficial benimar.es (gama Tessoro 2027), catálogo oficial Benimar (PDF, agosto 2026),
// Instagram oficial de Benimar (vía autoyas.com), ficha de concesionario Mundovan (Mileo 297),
// ficha TruckScout24 (Mileo 297: dimensiones y mecánica), PDF motorvision.es (cama isla Mileo 297),
// anuncio de concesionario roulot (referencia de precio Tessoro 440 UP). Verificado el 19/10/2026.
// Notas honestas: Benimar no publica PVP en su web española; los precios quedan en null y
// solo se citan referencias de concesionario en el texto con su fuente. La carga útil no se
// publica para estos modelos y queda en null (prohibido calcularla).
// Autocaravanas Benimar — lote Merlín 3 (19/10/2026).
// Fuentes: review de Caravan Club con cifras de la literatura del fabricante
// (https://www.caravanclub.co.uk/blog/product-and-outfit-reviews/motorhome-reviews/benimar-mileo-286/),
// ficha de unidad 2016 en Gumtree (https://www.gumtree.com/p/campervans-motorhomes/2016-benimar-mileo-286-4-berth-4-belt-habcheck-inverter/1801632439),
// web oficial de Benimar — gama Mileo (https://www.benimar.es/en/low-profile-motorhomes/),
// CaravanTimes sobre la gama Mileo 2017 (https://www.caravantimes.co.uk/save%20for%20laters-brand/newsletter-the-all-new-benimar-mileo-from-marquis-leisure/).
// Verificado el 19/10/2026.
// NOTAS HONESTAS: el modelo asignado (benimar-first-332) no existe —sin resultados en
// catálogos ni prensa— y se sustituye por el Benimar Mileo 286, modelo real y documentado.
// Benimar no publica tarifa oficial para España: precioDesde queda en null. La potencia de
// 180 CV y la caja automática de 9 velocidades corresponden a la variante 2.2 Multijet
// (literatura del fabricante); las primeras unidades (2016) montaban el 2.3 de 150 CV manual
// con MMA de 3.650 kg. La carga útil de 1.269 kg es la publicada por el fabricante en su
// literatura (vía Caravan Club), no un cálculo. Fotos de anuncio de unidad real 2016
// (modelo exacto, sin marcas de agua); resolución 768 px, la disponible.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

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
      "Dimensiones 7390 x 2300 x 2890 mm y MMA 3500 kg de la ficha de una unidad 2026 en TruckScout24 (Fiat Ducato 2.2 de 140 CV, cambio manual o automático). Cama isla de 150 cm de ancho regulable en altura (PDF motorvision.es) y cama de techo eléctrica de 2 plazas (TruckScout24). Modelo verificado en la gama 2026: publicación oficial de Benimar en Instagram (vía autoyas.com) y ficha de concesionario Mundovan. Precio: null (Benimar no publica tarifa ES); Mundovan anuncia una unidad en 87.723 € como referencia de concesionario. Carga útil y consumo: null (sin dato oficial).",
    curiosidades:
      "La cama isla trasera del Mileo 297 mide 150 cm de ancho —como una cama de matrimonio— y se regula en altura manualmente para dejar más o menos garaje debajo según lo que se lleve en cada viaje. Fuente: http://m.motorvision.es/pdf/generados/w0157658w.pdf",
    descripcion: `La Benimar Mileo 297 es la perfilada española que mejor resume lo que pide el mercado nacional en 2026: cama isla de verdad, cuatro plazas de viaje y cuatro de noche, y unas medidas contenidas de 7,39 metros que no asustan a quien aparca en el pueblo. Benimar, que fabrica en Peñíscola (Castellón), juega en casa con este modelo, y se nota en una distribución pensada para el uso real de las familias españolas más que para el folleto.

    Con 7.390 mm de largo, 2.300 mm de ancho y 2.890 mm de alto según la ficha de una unidad 2026 publicada en TruckScout24, la 297 se sitúa justo por debajo de la barrera psicológica de los siete metros y medio. La masa máxima autorizada es de 3.500 kg, así que basta el carnet B, y la base es el Fiat Ducato 2.2 de 140 CV, disponible con cambio manual o automático, con tracción delantera. Es la mecánica más extendida del sector en Europa: cualquier taller de furgones la conoce, los repuestos son baratos y la reventa no sufre.

    El corazón de la ficha es el dormitorio: una cama isla de 150 cm de ancho —la medida de una cama de matrimonio— que se regula en altura manualmente. Ese detalle cambia la vida a bordo más de lo que parece: si el viaje es de playa, se sube la cama y el garaje traga tablas, sillas y la nevera de exterior; si es de invierno, se baja y se gana comodidad para entrar y salir de la cama. La segunda cama es la del techo, eléctrica y de dos plazas, que se despliega sobre el salón sin robar ni un centímetro de día. Entre las dos suman cuatro plazas de noche honestas, y las cuatro plazas de viaje hacen el resto para una familia con dos niños.

    El salón delantero, con los asientos de cabina giratorios, da juego para comer, jugar a las cartas o teletrabajar una mañana de lluvia, y la cocina viene dimensionada para cocinar de verdad, no solo para calentar. El baño completo con ducha separada evita el apaño de la ducha sobre el WC que todavía se ve en campers baratos. En conjunto, es una célula luminosa y bien ventilada, con la claraboya delantera aportando la luz que las perfiladas necesitan para no parecer un pasillo.

    Del precio, la honestidad que exige el brief: Benimar no publica PVP en su web española, así que el campo queda en null. Como referencia de mercado, el concesionario Mundovan anuncia una unidad del Mileo 297 en 87.723 euros; es el precio de un concesionario concreto con su equipamiento concreto, no una tarifa oficial, y sirve como orden de magnitud. Lo sensato es pedir presupuesto cerrado en dos o tres concesionarios Benimar —la marca tiene red en toda España— con el pack de chasis, el toldo, la placa solar y la batería auxiliar desglosados, porque ahí es donde se gana o se pierde dinero.

    En el uso cotidiano, la Mileo 297 se defiende con argumentos que solo se aprecian viviéndola: la cama isla permite levantarse sin pasar por encima de la pareja, la cocina con sus fuegos y su horno —según equipamiento— invita a cocinar en ruta en lugar de tirar de bocadillos, y el baño con ducha separada convierte una semana de viaje en algo sostenible y no en un campamento. Los armarios altos y el garaje bajo la cama absorben la ropa de cuatro sin que la célula parezca un trastero, y la regulación en altura de la cama isla se convierte en el ajuste que se hace en cada viaje según lo que se cargue debajo.

    ¿Para quién es? Para la familia española de cuatro que quiere su primera autocaravana «de verdad» sin irse a ocho metros ni a presupuestos alemanes; para la pareja que viaja mucho y valora la cama isla regulable y el servicio postventa nacional; y para quien compra pensando en la reventa, porque Benimar es la marca española más líquida en ocasión. No es para quien necesita cinco plazas de viaje, ni para quien busca una integral con su parabrisas panorámico, ni para quien hace mucha montaña en invierno y prefiere calefacción de gasóleo (aquí manda el gas, como en la mayoría del segmento).

    Cómo lo verificamos: la existencia del Mileo 297 en la gama 2026 se comprobó en la publicación oficial de Benimar en Instagram (recogida por autoyas.com) y en la ficha del concesionario Mundovan. Las dimensiones, la MMA y la mecánica proceden de la ficha de una unidad 2026 en TruckScout24. La cama isla de 150 cm regulable en altura consta en el PDF de motorvision.es. El precio español queda en null porque Benimar no lo publica; la referencia de Mundovan se cita como precio de concesionario con su fuente. Datos verificados el 19/10/2026.`,
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
      "Dimensiones 6340 x 2320 x 2890 mm del catálogo oficial Benimar (agosto 2026): la T440 UP es una «perfilada de 6,34 m». MMA 3500 kg. Motor Ford Transit 2.0 de 165 CV, 4 plazas de viaje y 4 de noche, cama eléctrica basculante, ducha independiente y frigorífico de 150 l (publicación oficial de Benimar en Instagram). Modelo verificado en la gama oficial benimar.es 2027 (T440UP). Precio: null (Benimar no publica tarifa ES); el concesionario roulot anuncia una unidad en 75.595 € como referencia. Carga útil y consumo: null (sin dato oficial).",
    curiosidades:
      "Con sus 6,34 metros, la Tessoro 440 UP es la más corta de la gama UP, la familia de Benimar caracterizada por la cama basculante eléctrica sobre el salón y el garaje trasero de volumen regulable. Fuente: catálogo oficial Benimar (agosto 2026) y web oficial benimar.es.",
    descripcion: `La Benimar Tessoro 440 UP es la prueba de que una perfilada no necesita siete metros para dormir a cuatro personas con dignidad. Con 6,34 metros de largo según el catálogo oficial Benimar de agosto de 2026, es la más corta de la gama UP —la familia de la marca definida por la cama basculante eléctrica—, y su truco es tan simple como eficaz: de día es un salón amplio con garaje trasero, de noche la cama eléctrica baja del techo y el dormitorio aparece sin mover un solo cojín.

    Las medidas oficiales son 6.340 mm de largo, 2.320 mm de ancho y 2.890 mm de alto, con una MMA de 3.500 kg que permite conducirla con el carnet B. Son cifras que la colocan en el territorio de los campers grandes más que en el de las perfiladas clásicas, y esa es precisamente su gracia: maniobra, aparca y consume como un vehículo de 6,3 metros, pero por dentro vive como una autocaravana de verdad, con baño con ducha independiente y cocina completa. El garaje trasero, de volumen regulable, traga las bicicletas y el material de playa sin invadir la célula.

    La base es el Ford Transit 2.0 de 165 CV, la opción más potente de esta ficha y una de las mecánicas más agradecidas del segmento: empuja con solvencia los 3.500 kg, recupera bien en carretera y la red de Ford atiende furgones en cualquier provincia. La tracción es delantera, como en casi todo el segmento. El equipamiento de la serie UP incluye la cama basculante eléctrica de dos plazas sobre el salón, cuatro plazas de viaje y cuatro de noche, ducha independiente del WC y un frigorífico de 150 litros, la capacidad que marca la diferencia entre hacer la compra cada día o cada tres.

    La cama basculante merece un párrafo propio porque es el corazón del concepto UP: durante el día descansa pegada al techo y el salón respira con toda su altura libre; por la noche baja con un botón y se convierte en una cama doble de verdad, sin transformar el comedor ni pelearse con cojines. Para una pareja es el dormitorio principal sin renuncias; para una familia, la plaza de los niños mientras los padres usan la cama trasera. El único peaje es mecánico: como todo sistema eléctrico, conviene revisarlo en la puesta a punto anual y no forzarlo nunca a mano.

    Del precio, lo mismo que en toda la gama Benimar: la marca no publica PVP en su web española y el campo queda en null. Como referencia de mercado, el concesionario roulot anuncia una unidad de la Tessoro 440 UP en 75.595 euros; es un precio de concesionario con su equipamiento, no una tarifa oficial, pero sitúa el modelo claramente por debajo de las perfiladas de siete metros y medio. La recomendación es pedir presupuesto cerrado en varios concesionarios de la red Benimar con los packs desglosados —toldo, placa solar, batería auxiliar, cámara trasera—, porque en este escalón de precio los opcionales deciden la factura final.

    En la práctica, los 6,34 metros se traducen en una autocaravana que entra en parkings de supermercado con paciencia, que no obliga a reservar parcela grande en los campings y que en carretera secundaria se comporta casi como un furgón grande. El consumo, sin dato oficial que citar, se beneficia de la aerodinámica contenida y del peso ajustado de la gama Tessoro, y los 165 CV del Transit hacen que los puertos se suban sin reducir a tercera ni ver cómo te adelantan los camiones. Es el formato ideal para escapadas de fin de semana improvisadas: se carga en una tarde y se aparca en la puerta de casa sin pedir permiso al barrio.

    ¿Para quién es? Para la pareja que quiere una autocaravana completa sin cargar con siete metros y medio; para la familia con dos niños que duermen en la basculante mientras los padres disfrutan de la cama trasera; y para quien aparca en ciudad o en parcelas pequeñas y cada metro cuenta. No es para quien exige cama isla fija (aquí la cama principal es la basculante), ni para quien necesita cinco plazas de viaje, ni para quien desconfía de los mecanismos eléctricos y prefiere la simplicidad de una cama fija.

    Cómo lo verificamos: la existencia de la T440 UP en la gama oficial se comprobó en benimar.es (gama Tessoro 2027) y en el catálogo oficial Benimar de agosto de 2026, que la describe como «perfilada de 6,34 m». Las dimensiones proceden de ese catálogo. El motor Ford de 165 CV, las 4 plazas, la cama eléctrica basculante, la ducha independiente y el frigorífico de 150 l constan en la publicación oficial de Benimar en Instagram. El precio español queda en null porque Benimar no lo publica; la referencia de roulot se cita como precio de concesionario con su fuente. Datos verificados el 19/10/2026.`,
    pros: [
      "6,34 metros: la perfilada completa más corta de su gama, fácil de aparcar y maniobrar",
      "Cama basculante eléctrica: dormitorio doble sin transformar el salón ni mover cojines",
      "Ford Transit 2.0 de 165 CV: la mecánica más potente de la ficha, con red de talleres en toda España",
      "Baño con ducha independiente y frigo de 150 l: equipamiento de autocaravana grande en formato compacto",
      "Garaje trasero de volumen regulable para bicis y material deportivo",
    ],
    contras: [
      "Benimar no publica precio oficial: el PVP lo pone cada concesionario",
      "Sin cama isla ni camas gemelas fijas: la cama principal es la basculante eléctrica",
      "El mecanismo de la cama eléctrica exige mantenimiento y no admite forzarla a mano",
      "Con la cama bajada, la altura libre del salón se reduce: madrugadores, avisados",
      "165 CV invitan a correr, pero con 3.500 kg y 2,89 m de alto la prudencia sigue mandando",
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
      "Motor 2.2 Multijet de 180 CV con cambio automático de 9 velocidades y 450 Nm según la literatura del fabricante recogida por Caravan Club (MRO 3.131 kg, MTPLM 4.400 kg, 6,95 x 2,30 x 2,89 m, depósito de 90 l). Las primeras unidades del modelo (2016) se vendían con el 2.3 Multijet de 150 CV manual y MMA de 3.650 kg, según ficha de distribuidor. La carga útil de 1.269 kg es la cifra de «user payload» publicada por el fabricante, no un cálculo. Quedan en null: precio oficial en España (Benimar no publica tarifa), consumo, emisiones de CO2 y autonomía.",
    curiosidades:
      "Desde la temporada 2017, toda la gama Mileo se fabrica con construcción completamente sin madera («wood free»), una decisión de Benimar para proteger mejor la célula de la humedad y las filtraciones. Fuente: CaravanTimes, «The all new Benimar Mileo» (https://www.caravantimes.co.uk/save%20for%20laters-brand/newsletter-the-all-new-benimar-mileo-from-marquis-leisure/).",
    descripcion: `La Benimar Mileo 286 es una autocaravana perfilada de 6,95 metros que resume muy bien por qué la marca de Peñíscola se ha ganado fama de ofrecer la mejor relación calidad-precio del mercado europeo. Pertenece a la gama Mileo, la familia de perfiladas sobre chasis Fiat Ducato con la que Benimar ataca el segmento medio: ni la más barata ni la más lujosa, pero con un equipamiento de serie tan completo que en otros fabricantes habría que pagarlo como un largo listado de extras. La 286 es, dentro de esa gama, la versión pensada para parejas que quieren viajar con desahogo y recibir invitados de vez en cuando sin renunciar a una cama siempre hecha.

    En medidas, la 286 se mueve en el punto dulce de las perfiladas familiares: 6,95 metros de largo, 2,30 de ancho y 2,89 de alto. Son cotas que permiten aparcarla y maniobrar con ella sin el respeto que imponen las integrales de ocho metros, pero con un interior que no se siente estrecho. La altura de 289 centímetros —la que Benimar anuncia para sus perfiladas— deja una sensación de amplitud notable en el salón y permite una cama basculante de techo con recorrido generoso. El peso también está bien resuelto: la masa en orden de marcha declarada por el fabricante es de 3.131 kg y la masa máxima autorizada de 4.400 kg, lo que deja una carga útil teórica de 1.269 kg, una cifra muy holgada para llevar bicicletas, toldo, menaje completo y depósitos llenos sin ir justo. Ojo, eso sí: con 4.400 kg de MMA hace falta el carnet C1; las primeras unidades de 2016 se matriculaban en 3.650 kg (también C1 en la práctica británica, pero rebajables a 3.500 kg), así que conviene comprobar la ficha técnica de cada unidad concreta antes de comprar de ocasión.

    La distribución es el gran argumento de la 286. Delante, un salón amplísimo con sofá doble en L, otro sofá doble lateral y los dos asientos de cabina giratorios, con mesa exenta que se monta en el centro: caben cuatro adultos a comer con comodidad real, no de mentirijilla. Detrás del salón, la cocina está sorprendentemente equipada para una perfilada de este precio: horno, grill, dos fuegos de gas más una placa eléctrica, microondas, frigorífico grande con congelador independiente y hasta cajón botellero. El baño, con ducha separada, cumple sin agobios, y al fondo hay un garaje de buen tamaño, algo que no todas las perfiladas de menos de siete metros pueden decir. La cama principal es una gran cama doble basculante eléctrica situada en el centro del vehículo: baja con solo pulsar un botón y no hay que hacerla ni deshacerla cada día, que es justo lo que buscan las parejas viajeras. Las otras dos plazas salen del salón convertible.

    En tecnología y equipamiento, la 286 de las últimas series viene con un nivel de dotación que explica su éxito en Reino Unido, donde se vendió mucho: faros y limpiaparabrisas automáticos, navegador, cámara trasera, llantas de aleación, ESP, Traction+, control de descenso, panel solar, punto de barbacoa exterior y hasta sistema de seguimiento. La calefacción es de gas con 6 kW, suficiente para alargar la temporada. Y un detalle constructivo que merece mención: desde 2017 Benimar fabrica la gama Mileo completamente sin madera en su estructura, buscando una mejor protección contra la humedad y las filtraciones, el enemigo número uno de cualquier autocaravana con años.

    Mecánicamente, la unidad de referencia monta el Fiat Ducato 2.2 Multijet de 180 CV con cambio automático de nueve velocidades y tracción delantera, que entrega 450 Nm entre 1.500 y 1.750 rpm: empuje de sobra para mover los 4.400 kg con soltura en autopista y puertos. Las unidades de 2016, las más abundantes en el mercado de ocasión, llevan el anterior 2.3 Multijet de 150 CV con cambio manual de seis velocidades, un motor reputadísimo por su fiabilidad aunque menos refinado. El depósito de combustible es de 90 litros.

    En precio, Benimar no publica tarifa oficial para España, así que no hay cifra de catálogo que dar: el precio lo pone cada concesionario según equipamiento y promociones. Como referencia, en Reino Unido la versión 180 CV automática se anunciaba en torno a las 88.000 libras. En España, la red de distribuidores Benimar es amplia —la fábrica está en Peñíscola (Castellón) y la marca pertenece al grupo Trigano—, por lo que pedir presupuesto y probar la 286 (o su equivalente actual en la gama) es sencillo en casi cualquier provincia. En el mercado de ocasión, las 286 de 2016-2019 con el 2.3 de 150 CV son una de las compras más razonables del segmento: mecánica probada, célula sin madera y un precio contenido.

    Cómo lo verificamos: las dimensiones, pesos, motor y par proceden de la literatura del fabricante recogida en la prueba de Caravan Club; los datos de la variante 2016 (2.3 de 150 CV, MMA de 3.650 kg, distribución detallada) de la ficha de un distribuidor británico; la descripción de la gama Mileo (chasis Fiat, perfiladas de 289 cm) de la web oficial benimar.es; y el dato de la construcción sin madera desde 2017 de CaravanTimes. Todo verificado el 19/10/2026. Quedan en null el precio oficial español, el consumo y las emisiones, que el fabricante no publica.

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
        ancho: 768,
        alto: 608,
      },
      {
        src: "/media/benimar-mileo-286-2026-precio-ficha-tecnica-interior1.webp",
        alt: "Benimar Mileo 286, salón interior",
        ancho: 768,
        alto: 576,
      },
      {
        src: "/media/benimar-mileo-286-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Benimar Mileo 286, cuarto de baño",
        ancho: 768,
        alto: 576,
      },
      {
        src: "/media/benimar-mileo-286-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Benimar Mileo 286, detalle de la cocina",
        ancho: 768,
        alto: 576,
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
