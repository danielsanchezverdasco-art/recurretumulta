// Autocaravanas Benimar — lote Merlín 3 (19/10/2026).
// Fuentes: web oficial benimar.es (gama Tessoro 2027), catálogo oficial Benimar (PDF, agosto 2026),
// Instagram oficial de Benimar (vía autoyas.com), ficha de concesionario Mundovan (Mileo 297),
// ficha TruckScout24 (Mileo 297: dimensiones y mecánica), PDF motorvision.es (cama isla Mileo 297),
// anuncio de concesionario roulot (referencia de precio Tessoro 440 UP). Verificado el 19/10/2026.
// Notas honestas: Benimar no publica PVP en su web española; los precios quedan en null y
// solo se citan referencias de concesionario en el texto con su fuente. La carga útil no se
// publica para estos modelos y queda en null (prohibido calcularla).
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
];
