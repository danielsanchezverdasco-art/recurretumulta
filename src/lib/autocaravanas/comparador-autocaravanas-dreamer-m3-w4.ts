// Autocaravanas Dreamer — lote Merlín 3 (19/10/2026).
// Fuentes: web oficial dreamer-van.es (gama y ficha D68 UP), catálogo oficial Dreamer
//   Colección 2026 (vía distribuidor reisemobile-staudt.de), ficha de expositor Etrusco/Dreamer
//   en findmyleisurevehicle.co.uk (NEC 2026), comparativa CamperOnLine (2020), ficha de
//   distribuidor Vanomobil (Bélgica). Verificado el 19/10/2026.
// Notas honestas: el modelo asignado «D62 UP» NO existe en la gama oficial Dreamer
//   (la web oficial solo lista D43/D43 UP, D55/D55 UP y D68/D68 UP); se sustituye por el
//   Dreamer D62 Select, modelo real de la colección 2026 con cama a la francesa.
//   Dreamer no publica PVP oficial en España: precioDesde queda sin dato y solo se citan
//   tarifas extranjeras como referencia contextual. La web oficial ya muestra la gama
//   2027, por lo que el D68 UP figura como novedad 2027. No se pudieron descargar fotos
//   del D62 Select: el servicio de lectura de páginas y el buscador de imágenes fallaron
//   de forma reiterada el 19/10/2026; las 4 fotos del D68 UP sí son oficiales.
import type { Autocaravana } from "./tipos.ts";

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
    imagen: "/media/dreamer-d62-select-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/dreamer-d62-select-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/dreamer-d62-select-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6360, // Vanomobil (ficha 2026) y comparativa CamperOnLine: 636 cm
    anchoMm: 2050,
    altoMm: 2590, // catálogo oficial Dreamer Colección 2026: 2,59 m de serie (+45 mm con chasis HEAVY o llantas 16" = 2.635 m; Vanomobil indica 2,65 m)
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
      "Dimensiones 6360x2050x2590 mm: catálogo oficial Dreamer Colección 2026 (2,59 m de serie; +45 mm con chasis HEAVY). " +
      "Motor base Fiat Ducato 2.2 MultiJet 140 CV: CamperOnLine 2020 (opcionales 160/180 CV entonces). " +
      "Nevera 146 L, agua 110 L, grises 85 L, Truma Combi 4: catálogo oficial Dreamer Colección 2026. " +
      "Plazas 4 y camas 2+1: catálogo 2026 y CamperOnLine. " +
      "como contexto, la tarifa italiana 2020 partía de 55.300 € (CamperOnLine) y Vanomobil anuncia «desde 70.369 €» (distribuidor belga, 2026)." +
      "Fotos: la marca no publica galería oficial del D62 Select en su web (solo el catálogo oficial, con imágenes de baja resolución); " +
      "sin tarifa oficial abierta verificable." +
      "de la prueba de Reisemobil International (2019), del modelo exacto, sin marcas de agua.",
    curiosidades:
      "En 2026 Dreamer celebra su 20.º aniversario y lanza la edición especial «Select 20 Jahre»: el D62 Select puede pedirse en esa versión conmemorativa, con tapicería a elegir y el logo del aniversario como firma en la carrocería (fuente: catálogo oficial Dreamer Colección 2026, https://www.reisemobile-staudt.de/wp-content/uploads/2025/08/DREAMER_CATA_2026_EXPORT_BD_ALL.pdf; y ficha Vanomobil https://ct.vanomobil.be/api/products/181/pdf/en?start=&end=).",
    descripcion: `El Dreamer D62 Select es la propuesta más refinada de la marca francesa para viajar en pareja sin renunciar a la sensación de espacio de una autocaravana grande. Dreamer, marca del grupo Rapido fabricada en Mayenne (Francia), lleva desde 2006 —celebra su vigésimo aniversario en 2026— reinterpretando el furgón camper con soluciones que no se ven en la competencia generalista, y el D62 Select es probablemente el mejor ejemplo de esa filosofía: un 6,36 metros con cama a la francesa, baño trasero de generosas dimensiones y un techo panorámico Skyview que inunda de luz la zona de día.

En medidas, el D62 Select declara 6.360 mm de largo, 2.050 mm de ancho y 2.590 mm de alto según el catálogo oficial Dreamer Colección 2026 (2,65 m con chasis HEAVY o llantas de 16", según la ficha del distribuidor Vanomobil). Son las cotas clásicas del Ducato L4H2, el formato que mejor equilibra maniobrabilidad y habitabilidad: cabe en la mayoría de áreas de autocaravanas, no sufre en carreteras secundarias y aun así ofrece una célula con pasillo real y baño separado. La masa máxima autorizada es de 3.500 kg, de modo que basta el carnet B.

La distribución es la que ha convertido al D62 en un superventas silencioso: salón delantero con banqueta lateral y asientos de cabina giratorios, cocina central bien iluminada, y en la parte trasera una cama a la francesa —es decir, colocada en diagonal/esquinada contra la pared— que deja libre un cuarto de baño completo al fondo, con ducha separada y espacio para vestirse con comodidad. Es la implantación favorita de las parejas que viajan mucho porque la cama queda siempre hecha y el baño no es un apaño. El catálogo oficial de la colección 2026 describe además armarios roperos de gran capacidad y un mueble de TV integrado que optimiza el almacenaje, además del techo Skyview que aporta la sensación de amplitud que la prensa italiana destacó en su prueba («parece un semintegral compacto por dentro»). Las plazas homologadas son cuatro y las plazas para dormir tres (2+1): la cama francesa más la cama que se forma en el salón.

En tecnología y equipamiento, el acabado Select es el escalón alto de Dreamer: el catálogo 2026 contempla cinco conceptos de interior, tres acabados de mobiliario y varias tapicerías, además de paquetes de opciones oficiales (Komfort+, Smart, Vision+, LED Assist y Lounge, según mercado). De serie en la colección 2026 figuran la calefacción Truma Combi 4 con panel CP, nevera de 146 litros, depósito de aguas limpias de 110 litros y de grises de 85 litros. Todo el mobiliario se fabrica en la planta de Mayenne (Francia), sede de la marca.

En camas y plazas, el punto fuerte es la cama a la francesa trasera, de generosas dimensiones para dos adultos, con somier de láminas y acceso por ambos lados gracias a su posición esquinada. La tercera plaza se obtiene del salón, válida para un niño o un adulto de estatura media en escapadas. Los cuatro asientos con cinturón permiten llevar a los nietos o a otra pareja de forma legal y segura.

En mecánica, la base es el Fiat Ducato 2.2 MultiJet con 140 CV de serie, el motor que la prensa especializada documentó como motorización base del D62 (con opcionales de 160 y 180 CV en su momento). Para 2026 la oferta mecánica sigue articulada sobre el 2.2 diésel Euro 6, con cambio manual de serie y automática opcional según mercado. Es un conjunto probadísimo: millones de Ducato circulan por Europa y cualquier taller lo conoce, lo que abarata el mantenimiento fuera de garantía.

En precio y red comercial en España, Dreamer no publica tarifa oficial —por eso el precio de esta ficha queda sin dato—, y el precio final lo fija cada distribuidor según packs y promociones. Como referencia contextual: la tarifa italiana de 2020 partía de 55.300 € (CamperOnLine) y un distribuidor belga anuncia en 2026 el D62 «desde 70.369 €». En España la marca se vende a través de la red de distribuidores del grupo Rapido; conviene pedir presupuesto en al menos dos concesionarios porque los packs (Assist, confort, multimedia) mueven el precio varios miles de euros.

Cómo lo verificamos: consultamos la web oficial dreamer-van.es (gama 2027, verificada el 19/10/2026, donde constatamos que el «D62 UP» no existe y que el modelo vigente de la familia es el D62 Select de la colección 2026), el catálogo oficial Dreamer Colección 2026 (distribuido por el concesionario alemán Reisemobile Staudt), la ficha del distribuidor belga Vanomobil para el D62 2026, la ficha de expositor de Dreamer en la feria NEC 2026 (findmyleisurevehicle.co.uk) y la prueba comparativa de CamperOnLine (2020). No se inventó ningún dato: lo no publicado por la marca queda sin dato y declarado en las notas.

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
    galeria: [
      { src: "/media/dreamer-d62-select-2026-precio-ficha-tecnica-oficial.webp", alt: "Dreamer D62 Select, vista exterior 3/4", ancho: 1200, alto: 840 },
      { src: "/media/dreamer-d62-select-2026-precio-ficha-tecnica-interior1.webp", alt: "Dreamer D62 Select, salón", ancho: 1200, alto: 800 },
      { src: "/media/dreamer-d62-select-2026-precio-ficha-tecnica-interior2.webp", alt: "Dreamer D62 Select, cama a la francesa", ancho: 1200, alto: 1800 },
      { src: "/media/dreamer-d62-select-2026-precio-ficha-tecnica-detalle.webp", alt: "Dreamer D62 Select, exterior frontal", ancho: 1200, alto: 800 },
    ],
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
      "Modelo contrastado en la web oficial dreamer-van.es (ficha del D68 UP, gama 2027, consultada el 19/10/2026). " +
      "Medidas oficiales: 6,36 m de largo, 2,05 m de ancho y 2,76 m de alto; 4 plazas de viaje y 2+2 para dormir. " +
      "Según la ficha oficial: nevera de 84 L con acceso interior y exterior, calefacción Webasto diésel de 4 kW, depósitos de 110 L de limpias y 85 L de grises. " +
      "Camas gemelas atrás y dos plazas más en el techo elevable (2.000 x 1.300 mm): ficha oficial. " +
      "El distribuidor documenta el D68 UP con el Fiat Ducato 2.2 MultiJet de 103 kW/140 CV, con automática disponible. " +
      "Precio sin dato: Dreamer no publica tarifa oficial en España.  sin tarifa oficial abierta verificable." +
      "Las 4 imágenes son oficiales de dreamer-van.es (galería del modelo).",
    curiosidades:
      "El D68 UP llega con la gama Dreamer 2027: un furgón familiar de 6,36 m con camas gemelas y techo elevable de serie cuya cama doble mide 2.000 x 1.300 mm, así que cuatro personas duermen con las camas siempre hechas (fuente: web oficial https://www.dreamer-van.es/fourgon-dreamer-d68-up.php, verificada el 19/10/2026).",
    descripcion: `Hay una pregunta que se repite entre las familias camperistas: cómo dormir cuatro con camas de verdad en 6,36 metros sin montar la dinette cada noche. Dreamer, la marca francesa del grupo Rapido, responde con dos letras: UP. El D68 UP parte del D68 de camas gemelas y le suma un techo de fuelle con cama doble de 2.000 x 1.300 mm: los padres abajo en las gemelas, los niños arriba, cada uno en su rincón. Novedad de la gama 2027 y una de las implantaciones con más sentido del momento.

El techo que lo cambia todo. La cama superior, de 2.000 x 1.300 mm, es generosa de verdad: caben dos adultos sin estrecheces. Se despliega con un gesto y, plegado, el vehículo conserva una altura contenida para circular. Frente al furgón clásico de transversal más dinette convertible, aquí las cuatro plazas son camas auténticas, sin «camas de compromiso». Eso sí: con el fuelle abierto la altura interior arriba es limitada, así que quien sea muy alto debería probarla antes de firmar; no es un dormitorio para claustrofóbicos.

Medidas de furgón grande. La ficha oficial de dreamer-van.es declara 6.360 mm de largo, 2.050 mm de ancho y 2.760 mm de alto. Esa altura, por encima de un techo alto convencional, la explica el cofre del elevable cerrado. La MMA es de 3.500 kg: vale el carnet B. La planta interior —salón delantero con banqueta y asientos giratorios, cocina central completa y, al fondo, dos camas gemelas longitudinales con garaje transversal debajo— viene directamente del mundo de las perfiladas grandes, adaptada al formato furgón. La propia marca presume del «garaje transversal para llevar todo su equipo» y del «almacenaje optimizado con dos armarios roperos».

Equipamiento: lo útil, de serie. El D68 UP se vende en los acabados Fun y Fun+ de Dreamer. La ficha oficial subraya la nevera de 84 litros accesible por dentro y por fuera —coger una bebida sin entrar al vehículo se agradece cada día—, la calefacción Webasto diésel de 4 kW, que tira del gasóleo del depósito y libera de las bombonas de gas, y los depósitos de 110 litros de aguas limpias y 85 de grises. Los packs de la casa (Assist, confort, multimedia) completan ayudas a la conducción, llanta de aleación, climatizador automático de cabina y pantalla multimedia. El mobiliario sale de Mayenne (Francia), de la planta que el grupo Rapido reserva en exclusiva para Dreamer.

Motor. La base es el Fiat Ducato 2.2 MultiJet de 140 CV —103 kW según documentan los distribuidores en las unidades D68 UP—, con cambio automático en opción. Es la motorización estándar de la gama Fun: mueve con soltura los 3.500 kg, gasta contenido y se mantiene en cualquier servicio Fiat. Tracción delantera y chasis Light, lo habitual en el segmento.

Precio. Dreamer no publica tarifa oficial en España: figura como sin dato en la ficha y presupuesto a pedir al distribuidor. Como orientación, los D68 UP que anuncian los distribuidores europeos se sitúan en la franja alta de los furgones familiares de 6,36 m —por encima de un camper básico, por debajo de una perfilada equivalente—. En España la marca se vende en la red del grupo Rapido; merece la pena comparar al menos dos ofertas, porque el acabado Fun+ y los packs mueven el precio varios miles de euros, y preguntar por unidades en stock frente a pedido a fábrica.

Cómo lo verificamos: ficha oficial del modelo en dreamer-van.es (https://www.dreamer-van.es/fourgon-dreamer-d68-up.php, consultada el 19/10/2026), origen de medidas, plazas, equipamiento y de las fotos oficiales de la galería; anuncios de distribuidores europeos con la motorización de 103 kW/140 CV y la automática; y el catálogo oficial Dreamer Colección 2026 para el marco de gama. Nada inventado: lo que la marca no publica queda sin dato y así se declara en las notas.

Para quién: familias de cuatro que quieren furgón —no perfilada— con cuatro camas reales y garaje para bicis, tablas o sillas; que aprovechan la agilidad del 6,36 m y ven el techo como una segunda planta. También sirve a parejas que viajan con nietos o amigos de vez en cuando. No es el furgón más barato del mercado ni admite una quinta plaza de viaje; y, como se dijo, las personas muy altas deben probar la cama del techo antes de decidir.`,
    pros: [
      "Cuatro camas de verdad —gemelas abajo y elevable de 2.000 x 1.300 mm arriba—: la dinette no se toca.",
      "Garaje transversal bajo las gemelas: el material deportivo de toda la familia cabe dentro.",
      "Nevera de 84 L con acceso doble, interior y exterior: un acierto de uso diario.",
      "Webasto diésel de 4 kW: calefacción con el gasóleo del depósito, adiós bombonas.",
      "Familiar de 6,36 m con 3.500 kg de MMA: carnet B suficiente.",
    ],
    contras: [
      "Sin PVP oficial publicado: toca pedir presupuesto y negociar a ciegas.",
      "El elevable añade altura (2,76 m), kilos y una lona que mantener.",
      "La cama del techo, con el fuelle abierto, queda justa de altura libre.",
      "A cuatro ocupantes y con el garaje lleno, la carga útil puede ir justa: conviene pesar el conjunto.",
      "Al ser novedad 2027, al principio escasearán las unidades de ocasión y los repuestos del techo.",
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
