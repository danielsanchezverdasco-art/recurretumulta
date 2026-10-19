// Autocaravanas Dethleffs — lote Merlín 3 (19/10/2026).
// Fuentes: lista oficial de precios Dethleffs 01/2026 (PDF: de-pl-just-go-2026.pdf,
// datos completos del Just Go T 7055 DBL), web oficial dethleffs.de/wohnmobile/trend
// (gama Trend), exposés y anuncios (Trend I 7017 EB), accio.com (precios de
// referencia no oficiales del I 7017 EB).
// Verificado el 19/10/2026.
// Notas honestas: el Trend I 7017 EB pertenece a la gama Trend 2020–2025 aprox. y
// el configurador oficial 2026 ya no lo lista (sucesor: I 7057 EB); se mantiene
// con nota de linaje honesta. No hay PVP oficial del I 7017 EB → null. Las
// dimensiones del I 7017 EB (7.410 mm de largo, 2.325 mm de ancho) proceden de
// exposés del mismo floor plan (la célula es idéntica a la del T 7017 EB); la
// altura de la versión integral no está publicada de forma verificable → null.
// Del Just Go T 7055 DBL todos los datos son oficiales de la lista de precios
// 01/2026, incluido el PVP de 66.999 € con IVA.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_DETHLEFFS_M3: Autocaravana[] = [
  {
    id: "dethleffs-trend-i-7017-eb-2026-precio-ficha-tecnica",
    marca: "Dethleffs",
    modelo: "Trend I 7017 EB",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: null, // la marca no publica PVP oficial del I 7017 EB (fuera de la gama 2026)
    potenciaCv: 140, // Fiat Ducato 2.2 MultiJet de 140 CV (103 kW) en las últimas unidades; las de 2020 montaban el 2.3 Multijet de 140 CV
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro 6; criterio general DGT para este tipo de vehículo
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/dethleffs-trend-i-7017-eb-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/dethleffs-trend-i-7017-eb-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/dethleffs-trend-i-7017-eb-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7410, // 7,41 m (exposés del floor plan 7017 EB; la célula es idéntica en la versión integral)
    anchoMm: 2325, // 2.325 mm (exposés del floor plan 7017 EB)
    altoMm: null, // altura de la versión integral no publicada de forma verificable
    pesoKg: null, // no publicado de forma verificable para la versión integral
    mmaKg: 3499, // 3.499 kg (exposés del 7017 EB)
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no la publica; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas en circulación (exposés)
    plazasDormir: 5, // camas gemelas + cama abatible eléctrica sobre cabina + transformación del salón (exposés)
    parNm: null,
    traccion: null, // la marca no la declara de forma verificable
    emisionesCo2: null,
    aprox: [],
    notas:
      "Procedencia de los datos: el I 7017 EB es la versión integral del floor " +
      "plan 7017 EB de la gama Trend (2020–2025 aprox.); el configurador oficial " +
      "2026 de dethleffs.de ya no lo lista (sucesor: I 7057 EB). Largo 7.410 mm, " +
      "ancho 2.325 mm, MMA 3.499 kg, motor Fiat Ducato 2.3 Multijet de 140 CV " +
      "(unidades 2020) / 2.2 MultiJet de 140 CV (últimas unidades), 4 plazas en " +
      "circulación, camas gemelas de 195x80/75 cm, cama abatible eléctrica sobre " +
      "cabina de serie en los integrales, agua limpia 125 L y grises 90 L " +
      "proceden de exposés y anuncios de unidades del 7017 EB (la célula es " +
      "idéntica entre la versión T semi-integral y la I integral). Precio de " +
      "referencia no oficial: 88.999 € para el I 7017 EB según accio.com " +
      "(agregador, no tarifa oficial). Las fotos son oficiales de la marca " +
      "(dethleffs.de, gama Trend). En null: precioDesde (sin PVP oficial), " +
      "altura, peso en vacío, consumo, par, tracción y emisiones.",
    curiosidades:
      "En los integrales de la gama Trend, la cama abatible eléctrica sobre la " +
      "cabina viene de serie: no es un opcional, sino parte de la dotación base " +
      "del modelo, lo que eleva la capacidad a 5 plazas para dormir sin pedir " +
      "nada extra. Fuente: web oficial https://www.dethleffs.de/wohnmobile/trend " +
      "(dotación de la gama Trend).",
    descripcion: `La Dethleffs Trend I 7017 EB es una integral alemana de la vieja escuela: camas gemelas longitudinales, baño trasero completo, salón en L y, como manda la tradición de los integrales Dethleffs, una cama abatible eléctrica sobre la cabina que viene de serie. Pertenece a la gama Trend tal como se vendió entre 2020 y 2025 aproximadamente —el configurador oficial 2026 ya la ha sustituido por la I 7057 EB—, así que hoy es un modelo de ocasión y de stock, pero su planteamiento sigue siendo uno de los más racionales para parejas que quieren dormir separadas sin renunciar a la comodidad de una integral.

    Las medidas la sitúan en el corazón del segmento: 7,41 metros de largo y 2,325 de ancho, con un MMA de 3.499 kg que la mantiene en el carnet B. Es una integral contenida, sin los excesos de las grandes de ocho metros, lo que se agradece en carreteras de montaña y en áreas con parcelas justas. La altura de la versión integral no está publicada de forma verificable en las fuentes consultadas, así que la dejamos en null antes que copiar la de la semi-integral: la cabina integral añade centímetros y lo honesto es no mezclar. El peso en vacío tampoco está documentado de forma oficial para esta versión, de modo que el consejo habitual cobra más fuerza: pesar la unidad real, cargada como se viaja, antes de planificar grandes rutas.

    La habitabilidad es clásica Dethleffs y funciona. Detrás, las camas gemelas longitudinales de 195 x 80/75 cm con el pasillo central: cada uno tiene su cama, se accede sin molestar al otro y el hueco bajo las camas esconde un generoso espacio de almacenaje accesible desde el interior y desde el garaje. El baño trasero es completo, con WC de cassette y ducha separada con tarima de madera, una configuración que las parejas que viajan mucho agradecen cada día. El salón en L con mesa exenta y asientos de cabina giratorios crea una zona de estar cómoda para cuatro, y la cocina en ángulo equipa placa de tres fuegos, fregadero y un frigorífico Thetford de buen tamaño. Los muebles en decoración Topaz con tapicería coordinada y la iluminación LED le dan un ambiente cálido sin estridencias, muy en la línea de la marca.

    En tecnología y equipamiento, la Trend I 7017 EB de las unidades documentadas viene con un nivel serio: chasis Fiat con pack de chasis, llantas de aleación de 16 pulgadas, ABS, ESP con ASR y asistente de arranque en pendiente, climatización, techo Heki y mini-Heki, oscurecedores y mosquiteras combinados en todas las ventanas, puerta de célula XL con ventana panorámica, calefacción Truma Combi 6 con agua caliente, y preinstalaciones para placa solar y cámara trasera. Muchas unidades de ocasión añaden antena parabólica automática con TV, placas solares y toldo Omnistor, así que el mercado de segunda mano ofrece ejemplares muy equipados. El depósito de agua limpia es de 125 litros y el de grises de 90 litros aislado, cifras correctas para viajar con autonomía de varios días.

    Las camas y plazas definen su público: cuatro plazas en circulación con cinturón y cinco para dormir. Las dos gemelas traseras son las camas principales, siempre hechas y siempre accesibles; la tercera vía es la cama abatible eléctrica sobre la cabina, de serie en los integrales Trend, que baja con solo pulsar un botón y ofrece dos plazas más sin tocar el salón; y el salón en L puede transformarse en una quinta plaza ocasional. Es una configuración ideal para dos adultos que viajan solos la mayor parte del año y reciben nietos o invitados de vez en cuando: de día, una integral espaciosa para dos; de noche, capacidad para cinco sin dramas.

    La mecánica es el Fiat Ducato, el caballo de batalla del caravaning europeo. Las unidades de 2020 montan el 2.3 Multijet de 140 CV y las últimas el 2.2 MultiJet también de 140 CV (103 kW), ambos con cambio manual en las versiones documentadas. Son 140 CV honestos para 3.499 kg: suficientes para autopista y puertos sin prisas, con la ventaja de una red de servicio Fiat Professional enorme en toda Europa y recambios asequibles. El consumo no está publicado de forma verificable; en uso real, una integral de este tamaño con 140 CV se mueve en torno a los valores habituales del segmento cuando se viaja a ritmos legales.

    Del precio hay que hablar con la misma honestidad que del resto: Dethleffs no publica PVP oficial del I 7017 EB porque ya no está en gama. Como referencia no oficial, el agregador accio.com situaba el I 7017 EB (integral) en 88.999 € frente a los 73.199 € del T 7017 EB (semi-integral) en 2023, lo que ilustra el sobrecoste típico de la cabina integral. Hoy el modelo solo se encuentra en ocasión y stock, donde el precio depende del año, los kilómetros y el equipamiento. En España, la red de concesionarios Dethleffs mantiene el servicio postventa de la célula y la base Fiat se atiende en cualquier servicio oficial. Si buscas una, prioriza unidades con historial de revisiones de estanqueidad: en una integral con años, el techo y las uniones de la cabina son los puntos a revisar con un profesional.

    Cómo lo verificamos (19/10/2026): la existencia del modelo y su posición en la gama (2020–2025, sucesor I 7057 EB en 2026) se comprobó en la web oficial dethleffs.de; las dimensiones de la célula (7.410 x 2.325 mm), el MMA de 3.499 kg, el motor Fiat Ducato de 140 CV, las 4 plazas en circulación, las camas gemelas de 195x80/75 cm, la cama abatible eléctrica de serie y las capacidades de agua (125/90 L) proceden de exposés y anuncios detallados de unidades del 7017 EB, cuya célula es idéntica entre las versiones T e I. Lo no publicado queda en null y así se declara.

    Para quién es: la Trend I 7017 EB encaja con parejas que quieren una integral con camas gemelas de verdad —dormir separados sin litera ni transformaciones— y una quinta plaza ocasional gracias a la cama abatible de serie. No es para familias de seis (se queda corta), ni para quien busca una integral nueva con garantía de fábrica, ni para conductores que exijan cambio automático: aquí todo es manual y mecánicamente sencillo. Si las gemelas te han conquistado, túmbate en ambas en el concesionario y comprueba el acceso al pasillo central: es el gesto que repetirás cada noche.`,
    pros: [
      "Camas gemelas longitudinales de 195 cm: dormir separados con acceso independiente y gran almacenaje debajo",
      "Cama abatible eléctrica sobre la cabina de serie: cinco plazas para dormir sin pagar opcionales",
      "Baño trasero completo con ducha separada y tarima de madera, poco habitual en 7,41 m",
      "Mecánica Fiat Ducato de 140 CV con red de servicio inmensa y recambios asequibles en toda Europa",
      "Integral contenida (7,41 m, 3.499 kg, carnet B): más ágil que las grandes integrales de 8 metros",
    ],
    contras: [
      "Modelo fuera de gama 2026 (sucesor: I 7057 EB): solo ocasión y stock, sin precio oficial",
      "Solo 4 plazas en circulación: insuficiente para familias numerosas",
      "Altura y peso en vacío de la versión integral no publicados de forma verificable: hay que pesar la unidad real",
      "Cambio manual y 140 CV: mecánicamente sencillo, pero sin la soltura de las versiones de 160-180 CV",
      "El sobrecoste de la cabina integral frente a la semi-integral se nota en el mercado de ocasión",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/dethleffs-trend-i-7017-eb-2026-precio-ficha-tecnica-oficial.webp", alt: "Dethleffs Trend I 7017 EB, vista exterior", ancho: 1920, alto: 1080 },
      { src: "/media/dethleffs-trend-i-7017-eb-2026-precio-ficha-tecnica-interior1.webp", alt: "Dethleffs Trend I 7017 EB, salón", ancho: 1400, alto: 933 },
      { src: "/media/dethleffs-trend-i-7017-eb-2026-precio-ficha-tecnica-interior2.webp", alt: "Dethleffs Trend I 7017 EB, dormitorio", ancho: 1400, alto: 933 },
      { src: "/media/dethleffs-trend-i-7017-eb-2026-precio-ficha-tecnica-detalle.webp", alt: "Dethleffs Trend I 7017 EB, baño", ancho: 1400, alto: 933 },
    ],
    analisisSlug: "dethleffs-trend-i-7017-eb-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Dethleffs (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
  {
    id: "dethleffs-just-go-t-7055-dbl-2026-precio-ficha-tecnica",
    marca: "Dethleffs",
    modelo: "Just Go T 7055 DBL",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 66999, // PVP oficial con IVA, lista de precios Dethleffs 01/2026
    potenciaCv: 130, // Ford Transit 2.0l TDCi EcoBlue de 96 kW (130 CV), Euro 6e-bis (lista oficial 01/2026)
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro 6e-bis; criterio general DGT para este tipo de vehículo
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/dethleffs-just-go-t-7055-dbl-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/dethleffs-just-go-t-7055-dbl-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/dethleffs-just-go-t-7055-dbl-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7350, // 735 cm (lista oficial de precios 01/2026)
    anchoMm: 2320, // 232 cm (lista oficial de precios 01/2026)
    altoMm: 2990, // 299 cm (lista oficial de precios 01/2026)
    pesoKg: 2880, // masa en orden de marcha 2.880 kg (lista oficial de precios 01/2026)
    mmaKg: 3500, // MMA 3.500 kg (lista oficial de precios 01/2026)
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no la publica como tal; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas en circulación (lista oficial de precios 01/2026)
    plazasDormir: 5, // 2/5 plazas para dormir: delantera 200x140, central 210x105-80, trasera doble 190x150 (lista oficial)
    parNm: null,
    traccion: null, // la marca no la declara de forma verificable
    emisionesCo2: null,
    aprox: [],
    notas:
      "Procedencia de los datos: TODOS los datos técnicos de esta ficha proceden " +
      "de la lista oficial de precios Dethleffs de enero de 2026 " +
      "(de-pl-just-go-2026.pdf): PVP 66.999 € con IVA, chasis Ford Transit " +
      "Tiefrahmen con motor 2.0l TDCi EcoBlue de 96 kW (130 CV) Euro 6e-bis, " +
      "dimensiones 735 x 232 x 299 cm, altura interior 213 cm, batalla 3.954 mm, " +
      "masa en orden de marcha 2.880 kg, MMA 3.500 kg, 4 plazas en circulación, " +
      "camas delantera 200x140 cm / central 210x105-80 cm / trasera doble 190x150 " +
      "cm (2/5 plazas para dormir), frigorífico 137 L, aguas grises 95 L y limpia " +
      "115/20 L, puertas de garaje de 95x95 y 93x115 cm, capacidad de remolque " +
      "2.000/750 kg. Pack Active T 7055 DBL (6.000 €): motor Ford de 121 kW " +
      "(165 CV), cambio automático de 8 velocidades y +77,8 kg de peso. En null: " +
      "consumo, par, tracción y emisiones (no publicados de forma verificable).",
    curiosidades:
      "El pack Active del Just Go T 7055 DBL (6.000 €) sustituye el motor de " +
      "130 CV por el Ford de 165 CV con cambio automático de 8 velocidades y " +
      "solo añade 77,8 kg al peso: es la forma oficial de convertir la perfilada " +
      "de acceso en una viajera desahogada. Fuente: lista oficial de precios " +
      "Dethleffs 01/2026 (https://www.dethleffs.de/dethleffs/01_DE/02_pdfs/00_mj26/" +
      "02_wohnmobile/preisliste/de-pl-just-go-2026.pdf).",
    descripcion: `La Dethleffs Just Go T 7055 DBL es la perfilada con la que la marca alemana dice exactamente lo que promete su nombre: just go, simplemente sal. Es la gama de acceso de Dethleffs, pensada para quien quiere una autocaravana nueva, bien equipada y sin sustos en la factura, y la versión T 7055 DBL es su propuesta familiar con cama doble trasera. Lo mejor de esta ficha es que todos los datos que vas a leer son oficiales de la lista de precios de enero de 2026: no hay estimaciones ni cifras de folletos antiguos.

    Las medidas la colocan en el segmento medio de las perfiladas familiares: 7,35 metros de largo, 2,32 de ancho y 2,99 de alto, con una altura interior de 213 cm que se nota en la sensación de espacio. La batalla es de 3.954 mm, generosa para su longitud, lo que ayuda a la estabilidad en marcha. La masa en orden de marcha declarada es de 2.880 kg para un MMA de 3.500 kg, así que viaja con carnet B y deja un margen teórico de 620 kg para ocupantes, agua, equipaje y opcionales. Como la marca no publica la carga útil como tal, no la incluimos: el margen real depende de cada unidad y su equipamiento, y lo sensato es pesarlo. Las puertas del garaje, de 95 x 95 y 93 x 115 cm, son amplias de verdad: entra una bicicleta sin desmontar la rueda y sobra hueco para sillas y mesa de exterior.

    La habitabilidad responde al esquema familiar clásico bien ejecutado. Detrás, la cama doble de 190 x 150 cm (las siglas DBL lo indican: double bed) es una cama de verdad para dos adultos, siempre hecha y con acceso por ambos lados según configuración. En el centro, la zona de día se completa con una cama central de 210 x 105-80 cm, y delante, la cama abatible de 200 x 140 cm sobre el salón. En total, la lista oficial habla de 2/5 plazas para dormir: dos fijas traseras más tres eventuales. Es una distribución que funciona para dos adultos que viajan solos —con la cama trasera como dormitorio permanente y todo lo demás como espacio de día— y que se estira hasta cinco cuando vienen los nietos o los amigos. La cocina equipa lo necesario para cocinar en serio, el frigorífico es de 137 litros y el baño resuelve el aseo diario sin pretensiones pero con dignidad. Los 115 litros de agua limpia (más 20 de reserva) y 95 de grises dan autonomía para varios días sin repostar.

    En tecnología y equipamiento, la filosofía Just Go es ofrecer mucho de serie a precio cerrado. La lista de 2026 detalla una dotación completa para viajar desde el primer día, y el pack Active (6.000 €) es la vía oficial para subir de nivel: motor Ford de 121 kW (165 CV), cambio automático de ocho velocidades y apenas 77,8 kg de sobrepeso. Es un pack que merece su párrafo porque transforma el carácter del vehículo: pasar de 130 CV manuales a 165 CV automáticos en una perfilada de 3.500 kg se nota en cada puerto, en cada incorporación y en cada atasco. La capacidad de remolque es de 2.000 kg frenados (750 sin freno), útil si se quiere llevar un remolque con motos o material deportivo.

    Las camas y plazas, con lupa: cuatro plazas en circulación con cinturón y hasta cinco para dormir. La cama trasera doble de 190 x 150 cm es el argumento principal frente a las perfiladas de camas gemelas: a muchas parejas les compensa dormir juntas aunque la cama sea algo menos ancha que dos gemelas separadas. La cama central de 210 cm de largo sirve para una persona alta sin problemas, y la delantera abatible de 200 x 140 cm es una doble completa, no un apaño. El matiz de siempre en las familiares: con cinco ocupantes y el equipaje correspondiente, el margen hasta los 3.500 kg se estrecha, así que conviene hacer números antes de cargar la bodega.

    La mecánica es el Ford Transit Tiefrahmen (chasis rebajado) con el 2.0l TDCi EcoBlue de 96 kW (130 CV) y normativa Euro 6e-bis. Es un motor moderno y eficiente, con la red de talleres Ford detrás, y mueve con corrección los 3.500 kg del conjunto. Quien quiera más alegría tiene la vía oficial del pack Active con 165 CV y automático, que por 6.000 € y menos de 80 kg extra es una de las subidas de gama más razonables del mercado. El consumo no lo publica la marca de forma verificable, así que no lo incluimos; en uso real dependerá del ritmo, la carga y, mucho, de si se elige el manual de 130 o el automático de 165.

    El precio es oficial y con IVA: 66.999 € según la lista de enero de 2026. Es una cifra muy competitiva para una perfilada familiar nueva de 7,35 m con cama doble trasera y este nivel de dotación, y explica el posicionamiento de la gama Just Go: el acceso a Dethleffs sin pagar el peaje de las gamas altas. En España, los concesionarios aplican la tarifa con sus campañas y matriculación, así que el precio final puede variar ligeramente; lo importante es que la base de 66.999 € es un dato oficial, no una estimación. Comparada con sus rivales francesas de precio similar, la T 7055 DBL juega la baza de la cama doble trasera y del equipamiento cerrado.

    Cómo lo verificamos (19/10/2026): todos los datos técnicos —precio, motor, dimensiones, pesos, plazas, camas, capacidades y pack Active— proceden de la lista oficial de precios Dethleffs de enero de 2026 (PDF de-pl-just-go-2026.pdf, 8 páginas), y las fotos son oficiales de la marca (dethleffs.de, gama Just Go 2026). Es la ficha con la trazabilidad más completa del lote. Lo no publicado queda en null y así se declara.

    Para quién es: la Just Go T 7055 DBL encaja con parejas y familias que buscan una perfilada nueva con cama doble trasera, precio oficial contenido y equipamiento cerrado sin sorpresas, y que valoran la red Dethleffs en España. El pack Active la hace aún más recomendable para quien viaja mucho por montaña o con carga. No es para quien necesita camas gemelas separadas (aquí la trasera es doble), ni para quien busca una integral o un acabado premium con materiales nobles: la gama Just Go es honesta en su posicionamiento de acceso. Si la cama doble trasera te ha convencido, túmbate en ella con tu pareja en el concesionario: 190 x 150 cm es generoso, pero cada pareja tiene su medida.`,
    pros: [
      "Precio oficial con IVA de 66.999 € (lista 01/2026): muy competitivo para una perfilada familiar nueva",
      "Cama doble trasera de 190 x 150 cm siempre hecha, más camas central y delantera: hasta 5 plazas para dormir",
      "Pack Active oficial (6.000 €): 165 CV y cambio automático de 8 velocidades por solo 77,8 kg extra",
      "Puertas de garaje de 95x95 y 93x115 cm: entra una bici sin desmontar y sobra hueco de carga",
      "Todos los datos de la ficha son oficiales de la lista de precios 01/2026: trazabilidad total",
    ],
    contras: [
      "Cama trasera doble (no gemelas): quien duerme mejor separado deberá mirar otras distribuciones",
      "Motor base de 130 CV con cambio manual: correcto pero justo para 3.500 kg en puertos con carga",
      "Gama de acceso: materiales y acabados honestos, sin el refinamiento de las gamas altas Dethleffs",
      "Con 5 ocupantes el margen hasta los 3.500 kg se estrecha: hay que vigilar el peso real",
      "El precio final en España depende de la tarifa del concesionario, matriculación y campañas",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/dethleffs-just-go-t-7055-dbl-2026-precio-ficha-tecnica-oficial.webp", alt: "Dethleffs Just Go T 7055 DBL, vista exterior", ancho: 1920, alto: 1080 },
      { src: "/media/dethleffs-just-go-t-7055-dbl-2026-precio-ficha-tecnica-interior1.webp", alt: "Dethleffs Just Go T 7055 DBL, salón", ancho: 1400, alto: 933 },
      { src: "/media/dethleffs-just-go-t-7055-dbl-2026-precio-ficha-tecnica-interior2.webp", alt: "Dethleffs Just Go T 7055 DBL, dormitorio", ancho: 1400, alto: 933 },
      { src: "/media/dethleffs-just-go-t-7055-dbl-2026-precio-ficha-tecnica-detalle.webp", alt: "Dethleffs Just Go T 7055 DBL, baño", ancho: 1400, alto: 933 },
    ],
    analisisSlug: "dethleffs-just-go-t-7055-dbl-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Ford Transit: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Ford Transit)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Dethleffs (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
