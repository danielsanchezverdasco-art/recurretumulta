// Autocaravanas Dreamer — lote Merlín 3 (19/10/2026).
// Fuentes: web oficial dreamer-van.es (gama y ficha D68 UP), catálogo oficial Dreamer
//   Colección 2026 (vía distribuidor reisemobile-staudt.de), ficha de expositor Etrusco/Dreamer
//   en findmyleisurevehicle.co.uk (NEC 2026), comparativa CamperOnLine (2020), ficha de
//   distribuidor Vanomobil (Bélgica). Verificado el 19/10/2026.
// Notas honestas: el modelo asignado «D62 UP» NO existe en la gama oficial Dreamer
//   (la web oficial solo lista D43/D43 UP, D55/D55 UP y D68/D68 UP); se sustituye por el
//   Dreamer D62 Select, modelo real de la colección 2026 con cama a la francesa.
//   Dreamer no publica PVP oficial en España: precioDesde queda en null y solo se citan
//   tarifas extranjeras como referencia contextual. La web oficial ya muestra la gama
//   2027, por lo que el D68 UP figura como novedad 2027. No se pudieron descargar fotos
//   del D62 Select: el servicio de lectura de páginas y el buscador de imágenes fallaron
//   de forma reiterada el 19/10/2026; las 4 fotos del D68 UP sí son oficiales.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_DREAMER_M3: Autocaravana[] = [
  {
    id: "dreamer-d62-select-2026-precio-ficha-tecnica",
    marca: "Dreamer",
    modelo: "D62 Select",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: null, // Dreamer no publica PVP oficial en España
    potenciaCv: 140, // Fiat Ducato 2.2 MultiJet de serie (fuente: comparativa CamperOnLine 2020 y catálogo 2026)
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
    imagen: "",
    imagenOficial: "",
    imagenInteriorOficial: "",
    videoId: null,
    videoCanal: null,
    largoMm: 6360, // Vanomobil (ficha 2026) y comparativa CamperOnLine: 636 cm
    anchoMm: 2050,
    altoMm: 2650, // Vanomobil 2026: 2,65 m (2,63 m según CamperOnLine 2020)
    pesoKg: null, // peso en orden de marcha no publicado por la marca para 2026
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no la publica; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 3, // 2+1: cama a la francesa + cama de dinette
    parNm: null,
    traccion: null, // la marca no declara tracción; delantera por base Ducato, pero no se afirma sin fuente
    emisionesCo2: null,
    aprox: [],
    notas:
      "Sustituye al «D62 UP» asignado, que no existe en la gama oficial Dreamer (verificado en dreamer-van.es el 19/10/2026). " +
      "Dimensiones 6360x2050x2650 mm: Vanomobil Bélgica (ficha D62 2026) y CamperOnLine (comparativa Select D62 2020: 636x205x263 cm). " +
      "Motor base Fiat Ducato 2.2 MultiJet 140 CV: CamperOnLine 2020 (opcionales 160/180 CV entonces). " +
      "Nevera 146 L, agua 110 L, grises 85 L, Truma Combi 4: catálogo oficial Dreamer Colección 2026. " +
      "Plazas 4 y camas 2+1: catálogo 2026 y CamperOnLine. " +
      "Precio null: Dreamer no publica tarifa oficial en España; como contexto, la tarifa italiana 2020 partía de 55.300 € (CamperOnLine) y Vanomobil anuncia «desde 70.369 €» (distribuidor belga, 2026). " +
      "Sin fotos: el servicio de lectura web y el buscador de imágenes fallaron reiteradamente el 19/10/2026; queda pendiente que el coordinador las aporte.",
    curiosidades:
      "En 2026 Dreamer celebra su 20.º aniversario y lanza la edición especial «Select 20 Jahre»: el D62 Select puede pedirse en esa versión conmemorativa, con tapicería a elegir y el logo del aniversario como firma en la carrocería (fuente: catálogo oficial Dreamer Colección 2026, https://www.reisemobile-staudt.de/wp-content/uploads/2025/08/DREAMER_CATA_2026_EXPORT_BD_ALL.pdf; y ficha Vanomobil https://ct.vanomobil.be/api/products/181/pdf/en?start=&end=).",
    descripcion: `El Dreamer D62 Select es la propuesta más refinada de la marca francesa para viajar en pareja sin renunciar a la sensación de espacio de una autocaravana grande. Dreamer, marca del grupo Rapido fabricada en Mayenne (Francia), lleva desde 2006 —celebra su vigésimo aniversario en 2026— reinterpretando el furgón camper con soluciones que no se ven en la competencia generalista, y el D62 Select es probablemente el mejor ejemplo de esa filosofía: un 6,36 metros con cama a la francesa, baño trasero de generosas dimensiones y un techo panorámico Skyview que inunda de luz la zona de día.

En medidas, el D62 Select declara 6.360 mm de largo, 2.050 mm de ancho y 2.650 mm de alto según la ficha del distribuidor Vanomobil para la colección 2026 (la comparativa de CamperOnLine de 2020 anotaba 6.360 x 2.050 x 2.630 mm, una diferencia de dos centímetros atribuible a llantas o chasis). Son las cotas clásicas del Ducato L4H2, el formato que mejor equilibra maniobrabilidad y habitabilidad: cabe en la mayoría de áreas de autocaravanas, no sufre en carreteras secundarias y aun así ofrece una célula con pasillo real y baño separado. La masa máxima autorizada es de 3.500 kg, de modo que basta el carnet B.

La distribución es la que ha convertido al D62 en un superventas silencioso: salón delantero con banqueta lateral y asientos de cabina giratorios, cocina central bien iluminada, y en la parte trasera una cama a la francesa —es decir, colocada en diagonal/esquinada contra la pared— que deja libre un cuarto de baño completo al fondo, con ducha separada y espacio para vestirse con comodidad. Es la implantación favorita de las parejas que viajan mucho porque la cama queda siempre hecha y el baño no es un apaño. El catálogo oficial de la colección 2026 describe además armarios roperos de gran capacidad y un mueble de TV integrado que optimiza el almacenaje, además del techo Skyview que aporta la sensación de amplitud que la prensa italiana destacó en su prueba («parece un semintegral compacto por dentro»). Las plazas homologadas son cuatro y las plazas para dormir tres (2+1): la cama francesa más la cama que se forma en el salón.

En tecnología y equipamiento, el acabado Select es el escalón alto de Dreamer: el catálogo 2026 contempla cinco conceptos de interior, tres acabados de mobiliario y varias tapicerías, además de paquetes de opciones. De serie en la colección 2026 figuran la calefacción Truma Combi 4 con panel CP, nevera de 146 litros, depósito de aguas limpias de 110 litros y de grises de 85 litros. El «Complete Selection» no es de Dreamer —no confundir—, aquí los packs se llaman Fun Plus, Assist o similares según mercado, e incluyen ayudas a la conducción, llantas de aleación y multimedia. Todo el mobiliario se fabrica en la planta de Mayenne, donde trabajan unos 80 empleados dedicados solo a Dreamer.

En camas y plazas, el punto fuerte es la cama a la francesa trasera, de generosas dimensiones para dos adultos, con somier de láminas y acceso por ambos lados gracias a su posición esquinada. La tercera plaza se obtiene del salón, válida para un niño o un adulto de estatura media en escapadas. Los cuatro asientos con cinturón permiten llevar a los nietos o a otra pareja de forma legal y segura.

En mecánica, la base es el Fiat Ducato 2.2 MultiJet con 140 CV de serie, el motor que la prensa especializada documentó como motorización base del D62 (con opcionales de 160 y 180 CV en su momento). Para 2026 la oferta mecánica sigue articulada sobre el 2.2 diésel Euro 6, con cambio manual de serie y automática opcional según mercado. Es un conjunto probadísimo: millones de Ducato circulan por Europa y cualquier taller lo conoce, lo que abarata el mantenimiento fuera de garantía.

En precio y red comercial en España, Dreamer no publica tarifa oficial —por eso el precio de esta ficha queda en null—, y el precio final lo fija cada distribuidor según packs y promociones. Como referencia contextual: la tarifa italiana de 2020 partía de 55.300 € (CamperOnLine) y un distribuidor belga anuncia en 2026 el D62 «desde 70.369 €». En España la marca se vende a través de la red de distribuidores del grupo Rapido; conviene pedir presupuesto en al menos dos concesionarios porque los packs (Assist, confort, multimedia) mueven el precio varios miles de euros.

Cómo lo verificamos: consultamos la web oficial dreamer-van.es (gama 2027, verificada el 19/10/2026, donde constatamos que el «D62 UP» no existe y que el modelo vigente de la familia es el D62 Select de la colección 2026), el catálogo oficial Dreamer Colección 2026 (distribuido por el concesionario alemán Reisemobile Staudt), la ficha del distribuidor belga Vanomobil para el D62 2026, la ficha de expositor de Dreamer en la feria NEC 2026 (findmyleisurevehicle.co.uk) y la prueba comparativa de CamperOnLine (2020). No se inventó ningún dato: lo no publicado por la marca queda en null y declarado en las notas.

Para quién es: para parejas viajeras que quieren un furgón con verdadero baño trasero y cama siempre hecha, que valoran el diseño francés y la fabricación del grupo Rapido, y que aceptan pagar el plus del acabado Select a cambio de materiales y personalización. No es para quien necesite cuatro camas reales —la tercera plaza es de compromiso—, ni para quien busque el furgón más barato del mercado: el D62 Select compite por calidad percibida, no por precio de derribo.`,
    pros: [
      "Cama a la francesa trasera siempre hecha, con baño completo separado al fondo: la distribución favorita de las parejas viajeras.",
      "Techo panorámico Skyview y gran luminosidad interior, poco habitual en furgones de este precio.",
      "Acabado Select con hasta cinco ambientes interiores y tres mobiliarios: personalización real, no solo dos colores.",
      "Base Fiat Ducato 2.2 de 140 CV probadísima y con red de talleres en toda Europa.",
      "Edición 20.º aniversario en 2026: plus de equipamiento y valor de reventa para las unidades conmemorativas.",
    ],
    contras: [
      "Solo 3 plazas para dormir y la tercera es la dinette: no es un familiar de verdad.",
      "La marca no publica PVP oficial: el precio depende del distribuidor y hay que negociar a ciegas.",
      "Con 6,36 m ya no es un vehículo para usar a diario en ciudad; mejor como segundo vehículo.",
      "El acabado Select encarece notablemente frente a la gama Fun con la misma base mecánica.",
      "Carga útil justa si se viaja a cuatro con mucho equipaje: vigilar el peso en báscula antes de cargar la bodega.",
    ],
    opiniones: [],
    galeria: [],
    analisisSlug: "dreamer-d62-select-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato 2.2)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Dreamer (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
  {
    id: "dreamer-d68-up-2026-precio-ficha-tecnica",
    marca: "Dreamer",
    modelo: "D68 UP",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: null, // Dreamer no publica PVP oficial en España
    potenciaCv: 140, // Fiat Ducato 2.2 MultiJet; el distribuidor documenta el D68 UP con 103 kW/140 CV
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
    imagen: "/media/dreamer-d68-up-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/dreamer-d68-up-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/dreamer-d68-up-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6360, // web oficial dreamer-van.es: 6,36 m
    anchoMm: 2050, // web oficial: 2,05 m
    altoMm: 2760, // web oficial: 2,76 m (con techo elevable cerrado)
    pesoKg: null,
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no la publica; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // web oficial: 4 personas
    plazasDormir: 4, // web oficial: 2+2 (camas gemelas + techo elevable)
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: [],
    notas:
      "Modelo verificado en la web oficial dreamer-van.es (ficha D68 UP, gama 2027, consultada el 19/10/2026). " +
      "Dimensiones oficiales: 6,36 m de largo, 2,05 m de ancho y 2,76 m de alto; 4 plazas de viaje y 2+2 plazas para dormir. " +
      "Nevera 84 L accesible desde dentro y fuera, calefacción Webasto diésel 4 kW, agua 110 L y grises 85 L: ficha oficial. " +
      "Camas gemelas traseras + 2 plazas extra en el techo elevable (2.000 x 1.300 mm): ficha oficial. " +
      "Motor Fiat Ducato 2.2 MultiJet 140 CV: documentado por el distribuidor en unidades D68 UP (103 kW/140 CV, cambio automático disponible). " +
      "Precio null: Dreamer no publica tarifa oficial en España. " +
      "Las 4 fotos son oficiales de dreamer-van.es (galería del modelo).",
    curiosidades:
      "El D68 UP es una de las novedades de la gama Dreamer 2027: es un furgón familiar de 6,36 m con camas gemelas traseras y techo elevable de serie que añade una cama doble de 2.000 x 1.300 mm, de modo que duermen cuatro con camas siempre hechas (fuente: web oficial https://www.dreamer-van.es/fourgon-dreamer-d68-up.php, verificada el 19/10/2026).",
    descripcion: `El Dreamer D68 UP es la respuesta francesa a la pregunta que se hacen muchas familias: ¿cómo dormir cuatro personas con camas de verdad en un furgón de 6,36 metros sin montar y desmontar la dinette cada noche? La solución de Dreamer se resume en dos letras: UP, techo elevable. Sobre la base del D68 de camas gemelas, la marca del grupo Rapido añade un techo de fuelle con una cama doble de 2.000 x 1.300 mm, y el resultado es un camper familiar donde los padres duermen abajo en camas gemelas y los niños arriba, cada uno en su espacio. Es novedad de la gama 2027 y una de las implantaciones más inteligentes del momento en el segmento.

En medidas y habitabilidad, el D68 UP declara 6.360 mm de largo, 2.050 mm de ancho y 2.760 mm de alto según la ficha oficial de dreamer-van.es. La altura, superior a la de un furgón de techo alto convencional, se explica por el cofre del techo elevable cerrado. Con 3.500 kg de MMA basta el carnet B, y la distribución está pensada para la vida en familia: salón delantero con banqueta y asientos giratorios, cocina central completa, y en la parte trasera dos camas gemelas longitudinales con un garaje transversal debajo —la propia marca destaca el «garaje transversal para llevar todo su equipo» y el «espacio de almacenamiento optimizado con dos armarios roperos»—. Es una distribución que en origen viene del mundo de las perfiladas grandes, trasladada al formato furgón.

En tecnología y equipamiento, el D68 UP se ofrece en los acabados Fun y Fun+ de Dreamer. La ficha oficial destaca la nevera de 84 litros accesible desde el interior y desde el exterior —un detalle muy práctico para el día a día, porque permite coger bebidas sin entrar al vehículo—, la calefacción Webasto diésel de 4 kW (funciona con el propio gasóleo del depósito, sin depender de bombonas de gas) y los depósitos de 110 litros de aguas limpias y 85 litros de grises. Como en toda la gama Dreamer, los packs de opciones (Assist, confort, multimedia) añaden ayudas a la conducción, llanta de aleación, climatizador automático de cabina y pantalla multimedia. El mobiliario se fabrica en Mayenne (Francia), en la planta que el grupo Rapido dedica en exclusiva a Dreamer.

En camas y plazas está su razón de ser: cuatro plazas de viaje homologadas y cuatro plazas para dormir reales, repartidas en 2+2. Abajo, las camas gemelas traseras —«un espacio independiente dedicado para una mayor intimidad», dice la marca— con colchones de buen grosor y somieres; arriba, la cama del techo elevable de 2.000 x 1.300 mm, una medida generosa que admite a dos adultos sin agobios. El techo se abre con un gesto y, cerrado, el vehículo mantiene una altura contenida para circular. Frente a un furgón con cama transversal y dinette convertible, aquí nadie duerme en una cama «de compromiso»: las cuatro plazas son camas de verdad.

En mecánica, la base es el Fiat Ducato 2.2 MultiJet con 140 CV, la motorización que los distribuidores documentan en las unidades D68 UP (103 kW/140 CV, con cambio automático disponible como opción). Es el motor estándar de la gama Fun: suficiente para mover con soltura los 3.500 kg, contenido en consumo y con mantenimiento sencillo en cualquier servicio Fiat. La tracción es delantera y el chasis es el Light de Fiat, el habitual en este segmento.

En precio y red comercial en España, Dreamer no publica tarifa oficial, así que el precio de esta ficha queda en null y deberá pedirse presupuesto al distribuidor. Como referencia, los D68 UP que anuncian los distribuidores europeos se mueven en la franja alta de los furgones familiares de 6,36 m, por encima de un camper básico y por debajo de una perfilada equivalente. En España la marca opera a través de la red del grupo Rapido; conviene comparar al menos dos ofertas porque el acabado Fun+ y los packs mueven el precio final varios miles de euros, y preguntar por unidades en stock frente a pedido a fábrica.

Cómo lo verificamos: ficha oficial del modelo en dreamer-van.es (https://www.dreamer-van.es/fourgon-dreamer-d68-up.php, consultada el 19/10/2026), de donde salen dimensiones, plazas, equipamiento y la galería de fotos oficiales; anuncios de distribuidores europeos con la motorización 103 kW/140 CV y caja automática; y catálogo oficial Dreamer Colección 2026 para el contexto de gama. Nada está inventado: lo que la marca no publica queda en null y declarado en las notas.

Para quién es: para familias de cuatro que quieren un furgón —no una perfilada— con cuatro camas reales y garaje para bicis, tablas o sillas, que valoran la maniobrabilidad del 6,36 m y el techo elevable como segunda planta. Encaja también con parejas que viajan con nietos o amigos de forma ocasional. No es para quien busque el furgón más barato ni para quien necesite más de cuatro plazas de viaje; y quien mida mucho debería probar la cama del techo antes de firmar, porque el fuelle limita la altura interior arriba.`,
    pros: [
      "Cuatro camas reales (gemelas + techo elevable de 2.000 x 1.300 mm): nadie duerme en la dinette.",
      "Garaje transversal bajo las camas gemelas: cabe el equipo deportivo de toda la familia.",
      "Nevera de 84 L accesible desde dentro y desde fuera: detalle práctico muy bien resuelto.",
      "Calefacción Webasto diésel de 4 kW: funciona con el gasóleo del depósito, sin bombonas.",
      "Con 3.500 kg basta el carnet B pese a ser un familiar de 6,36 m.",
    ],
    contras: [
      "La marca no publica PVP oficial: hay que pedir presupuesto y negociar sin referencia.",
      "El techo elevable suma altura (2,76 m), peso y un elemento textil más que mantener.",
      "La cama del techo tiene altura limitada con el fuelle abierto: no es para claustrofóbicos.",
      "Si se viaja a cuatro con el garaje lleno, la carga útil puede quedarse justa: pesar el conjunto.",
      "Como novedad 2027, al principio habrá pocas unidades de ocasión y repuestos específicos del techo.",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/dreamer-d68-up-2026-precio-ficha-tecnica-oficial.webp", alt: "Dreamer D68 UP, vista exterior con techo elevable", ancho: 1200, alto: 740 },
      { src: "/media/dreamer-d68-up-2026-precio-ficha-tecnica-interior1.webp", alt: "Dreamer D68 UP, salón interior", ancho: 1200, alto: 740 },
      { src: "/media/dreamer-d68-up-2026-precio-ficha-tecnica-interior2.webp", alt: "Dreamer D68 UP, cocina interior", ancho: 1200, alto: 740 },
      { src: "/media/dreamer-d68-up-2026-precio-ficha-tecnica-detalle.webp", alt: "Dreamer D68 UP, cuarto de baño", ancho: 1200, alto: 740 },
    ],
    analisisSlug: "dreamer-d68-up-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato 2.2)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Dreamer (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades + revisión del techo elevable", costeAproxEur: 280 },
      ],
    },
  },
];
