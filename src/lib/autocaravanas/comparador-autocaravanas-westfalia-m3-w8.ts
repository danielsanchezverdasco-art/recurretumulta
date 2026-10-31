// Autocaravanas Westfalia — lote Merlín 3 (19/10/2026).
// Fuentes: westfalia-mobil.com (web OFICIAL: catálogo James Cook 2026, gama Columbus,
// galería oficial de ambos modelos), caraworld.com (exposé técnico del James Cook AD 190),
// alpacacamping.de (datos técnicos James Cook y Columbus 640 E), spaceroofs.co.uk
// (AD = Aufstelldach/techo elevable), outandaboutlive.co.uk (slide-out trasero del James Cook,
// novedades gama Westfalia 2026), vanlifemag.de y travel-cars.ru (catálogo Columbus 2026),
// mobile.de (precios de mercado DE del James Cook AD).
// Verificado el 19/10/2026.
// Notas honestas: Westfalia publica listas de precios oficiales en Europa; se aplicó la lista
// oficial de Francia 2026 al Columbus 640 E (70.276 €). El James Cook AD 190 queda sin dato por ser
// designación de la generación anterior. El modelo asignado "Columbus 641 E" se SUSTITUYE por el
// "Columbus 640 E": la denominación 641 E es de 2015 y la gama oficial 2026 usa 540 D /
// 600 D / 600 E / 640 E (se anota en manifest.json). Altura del James Cook AD: 2,92 m según
// exposé de la variante; el catálogo 2026 da varias alturas según versión (se anota).
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_WESTFALIA_M3: Autocaravana[] = [
  {
    id: "westfalia-james-cook-ad-190-2026-precio-ficha-tecnica",
    marca: "Westfalia",
    modelo: "James Cook AD 190",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: null, // la designación «James Cook AD» no figura en la lista oficial vigente (ver notas); Westfalia sí publica listas de precios en Europa
    potenciaCv: 190, // Mercedes Sprinter 2.0 de 140 kW / 190 CV (catálogo oficial 2026)
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
    imagen: "/media/westfalia-james-cook-ad-190-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/westfalia-james-cook-ad-190-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/westfalia-james-cook-ad-190-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5932, // 5.932 mm (catálogo oficial Westfalia 2026)
    anchoMm: 2050, // 2.050 mm (catálogo oficial 2026)
    altoMm: 2920, // 292 cm según exposé técnico de la variante AD 190 (caraworld.com)
    pesoKg: 2930, // masa en orden de marcha, versión Premium (catálogo oficial 2026)
    mmaKg: 4100, // MTPLM versión Premium con 4x4 (el Premium 190 CV incluye 4x4 y automática; catálogo oficial James Cook 2026: 4,1 t con tracción total)
    carnetNecesario: "C1", // 4.100 kg > 3.500 kg (el Premium 190 CV incluye el 4x4)
    cargaUtilKg: null, // la marca no la publica; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 cinturones (caraworld.com, exposé AD 190)
    plazasDormir: 4, // cama doble + cama de techo elevable (caraworld.com)
    parNm: null,
    traccion: "trasera", // tracción trasera de serie; 4x4 opcional (alpacacamping.de)
    emisionesCo2: null,
    aprox: [],
    notas:
      "Medidas 5.932 x 2.050 mm, motor 2.0 de 110 kW (150 CV, versión Classic, manual 6v) o 140 kW (190 CV, versión Premium, automática 9G con 4x4 opcional), masa en orden de marcha 3.075 kg (Classic) / 2.930 kg (Premium), MTPLM 3.500 kg (Classic) / 4.100 kg (Premium con 4x4 incluido de serie en el 190 CV): catálogo oficial Westfalia James Cook 2026 (westfalia-mobil.com) y lista oficial de precios Suecia 2026 (el Premium 190 CV incluye All-Wheel Drive y cambio automático). AD = Aufstelldach (techo elevable): spaceroofs.co.uk; la variante AD 190 combina el techo elevable con el motor de 190 CV. Exposé técnico de la variante AD 190 (caraworld.com, modelo 2024): 593 cm de largo, 205 cm de ancho, 292 cm de alto, 3.609 kg en orden de marcha con equipamiento offroad, 4.100 kg MTPLM, 4 cinturones, 4 camas (doble de 170/142x207 cm + techo elevable de 115x210 cm), batalla de 367 cm, calefacción diésel de agua caliente, frigorífico de 90 l, agua 100 l, residuales 78 l, batería de 95 Ah. Cocina con frigorífico compresor de 90 l (catálogo 2021, readkong.com). Precio: sin PVP oficial vigente para esta variante (generación anterior); en Alemania las unidades AD nuevas de 2026 se anuncian entre ~99.990 y ~149.900 € según equipamiento (mobile.de), precios de mercado, no oficiales. Sin dato publicado: precio, carga útil (la marca no la da; no se calcula), consumo, par, emisiones. corresponde a la generación anterior con techo elevable, ya descatalogada, y no se asignan precios de generaciones anteriores.",
    curiosidades:
      "Las camas de la zaga del James Cook alcanzan sus 2 metros de largo gracias a un ingenioso slide-out: toda la parte trasera es una carrocería de fibra de vidrio cuya mitad superior se desliza hacia fuera, alargando el dormitorio sin alargar el vehículo. Fuente: https://www.outandaboutlive.co.uk/motorhomes/news/westfalia-releases-details-of-all-new-james-cook-campervan",
    descripcion: `El Westfalia James Cook AD 190 es la versión con techo elevable y motor grande del camper más legendario de Europa sobre base Mercedes Sprinter. Las siglas lo dicen todo: AD significa Aufstelldach, techo elevable en alemán, y 190 son los caballos del 2.0 diésel de 140 kW con cambio automático de 9 velocidades. Es el James Cook para quien quiere las prestaciones del Premium —190 CV, automática, tracción 4x4 opcional— y, además, cuatro camas gracias a la cama del techo elevable, todo ello en 5,93 metros de largo que se aparcan casi como un turismo grande. Westfalia lleva más de 60 años perfeccionando este concepto y se nota en cada detalle.

El James Cook actual juega en una liga propia dentro de los campers: no es una simple furgoneta con muebles, sino una transformación profunda del Sprinter. La zaga entera se sustituye por una carrocería de fibra de vidrio con un sistema slide-out patentado: la mitad superior se desliza hacia atrás y las camas traseras alcanzan así sus dos metros de largo útil, algo imposible en una furgoneta de 5,93 metros sin este truco. Delante, el salón con banqueta ergonómica —de serie con función lounge reclinable— y asientos de cabina giratorios forma un estar para cuatro; la cocina lateral, heredada en concepto del Sven Hedin pero mejorada, lleva placa de dos fuegos, fregadero generoso y frigorífico compresor de 90 litros de apertura frontal, más práctico que los de tapa superior. El baño, más grande de lo habitual en un camper de este tamaño, combina lavabo abatible sobre el inodoro y ducha de altura completa.

Dormir es el capítulo donde el AD 190 brilla: abajo, la cama doble trasera de 170/142x207 centímetros con somier de muelles multidimensional y colchón de espuma adaptado; arriba, la cama del techo elevable de 115x210 para dos más. Cuatro adultos duermen con dignidad, y de día el techo se cierra y el vehículo recupera una altura contenida. La calefacción es un sistema diésel de agua caliente, silencioso y eficaz, que funciona con el propio gasóleo del depósito —ideal para el invierno sin depender de bombonas—, y la dotación eléctrica parte de una batería de 95 Ah ampliable con los packs.

En marcha, el Sprinter 2.0 de 190 CV con la automática 9G-Tronic es una de las mejores bases del mercado: suave, potente y con un chasis que admite la tracción trasera de serie y la 4x4 opcional (con el paquete offroad, que eleva la altura y añade protecciones). Con el 4x4, eso sí, la MMA sube a 4.100 kilos, lo que obliga al carnet C1 y a asumir un vehículo más pesado: la masa en orden de marcha de la versión Premium es de 2.930 kilos en configuración base, pero una unidad equipada con offroad, packs y depósito lleno se acerca a los 3.600. Es el precio de ir a por todo. Sin el 4x4 y en versión Classic de 150 CV y cambio manual, la MMA se queda en 3.500 kilos y basta el B, pero entonces no es el AD 190.

El equipamiento opcional es extensísimo y conviene estudiarlo con calma: pack de invierno con suelo radiante y depósito de residuales calefactado, pack Westfalia Plus con iluminación ambiental LED y ducha exterior, techo solar, Distronic, cámara de 360 grados, Westfalia Connect para controlar la calefacción en remoto (novedad 2026) y asientos traseros calefactados opcionales. Cada pack suma peso y precio, así que la configuración ideal es la que se ajusta al uso real: un viajero de invierno necesita el pack de invierno; un urbanita que lo usa a diario, la compacidad del techo cerrado.

En precio, la honestidad obliga: Westfalia no publica PVP oficial y cada unidad se configura a medida. En el mercado alemán, las unidades AD nuevas de 2026 se anuncian entre unos 99.990 y unos 149.900 euros según equipamiento (mobile.de), una horquilla enorme que refleja lo configurable que es el modelo. En España hay red de concesionarios Westfalia, pero los plazos y el precio final hay que negociarlos caso por caso. Es un vehículo premium y se paga como tal; a cambio, la calidad de construcción y el valor de reventa están entre los mejores del segmento camper.

Cómo lo verificamos: las medidas, motores, pesos y MMA proceden del catálogo oficial Westfalia James Cook 2026 (westfalia-mobil.com); el significado de AD como techo elevable, de spaceroofs.co.uk; los datos específicos de la variante AD 190 (altura, camas, capacidades, batería), del exposé técnico de caraworld.com; el slide-out trasero, de outandaboutlive.co.uk; los precios de mercado alemán, de mobile.de. Verificado el 19/10/2026. Faltan en origen: precio oficial, carga útil (no publicada), consumo, par y emisiones.

Para quién es: para quien quiere el mejor camper de 5,93 metros con cuatro camas reales, motor de 190 CV y la opción del 4x4, y valora la ingeniería alemana por encima del precio. Para quién no es: para quien necesite conducir con el carnet B sin excepciones (el AD 190 con su MMA de 4.100 kg pide el C1), para presupuestos ajustados —la horquilla de precios asusta— ni para quien busque una autocaravana con garaje y gran volumen interior: esto es un camper, y su virtud es la compacidad, no los metros cúbicos.`,
    pros: [
      "Techo elevable AD + motor de 190 CV con automática 9G: cuatro camas y prestaciones de turismo grande",
      "Slide-out trasero de fibra: las camas alcanzan 2 m de largo en solo 5,93 m de vehículo",
      "Calefacción diésel de agua caliente: invierno sin depender de bombonas de gas",
      "Tracción 4x4 opcional con paquete offroad: el camper más capaz fuera de asfalto de su clase",
      "Calidad de construcción Westfalia y valor de reventa entre los mejores del segmento",
    ],
    contras: [
      "MMA de 4.100 kg: exige carnet C1, no basta el B",
      "Sin PVP oficial: la horquilla en Alemania va de ~100.000 a ~150.000 € según equipamiento",
      "Una unidad equipada se acerca a 3.600 kg en orden de marcha: el margen de carga se estrecha",
      "Es un camper: sin garaje y con menos volumen interior que una perfilada equivalente",
      "Los packs (invierno, Plus, Connect) son casi imprescindibles y encarecen mucho la unidad",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/westfalia-james-cook-ad-190-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Westfalia James Cook AD 190, exterior con techo elevable abierto",
        ancho: 1440,
        alto: 1057,
      },
      {
        src: "/media/westfalia-james-cook-ad-190-2026-precio-ficha-tecnica-interior1.webp",
        alt: "Westfalia James Cook AD 190, cocina con frigorífico de 90 litros",
        ancho: 1600,
        alto: 1200,
      },
      {
        src: "/media/westfalia-james-cook-ad-190-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Westfalia James Cook AD 190, cama doble trasera",
        ancho: 1600,
        alto: 1200,
      },
      {
        src: "/media/westfalia-james-cook-ad-190-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Westfalia James Cook AD 190, detalle de la encimera de cocina",
        ancho: 1600,
        alto: 1200,
      },
    ],
    analisisSlug: "westfalia-james-cook-ad-190-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Base Mercedes Sprinter: revisión según plan del fabricante (consultar manual; orientativo cada 2 años o 40.000 km)",
      revisiones: [
        {
          nombre: "Revisión base Mercedes Sprinter",
          queSeCambia: "Aceite + filtros + inspección general",
          costeAproxEur: 400,
        },
        {
          nombre: "Revisión célula Westfalia (anual recomendada)",
          queSeCambia: "Estanqueidad, gas, electricidad, humedades",
          costeAproxEur: 250,
        },
      ],
    },
  },
  {
    id: "westfalia-columbus-640-e-2026-precio-ficha-tecnica",
    marca: "Westfalia",
    modelo: "Columbus 640 E",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: 70276, // PVP oficial Westfalia Francia (lista de precios oficial 2026)
    potenciaCv: 120, // Fiat Ducato 2.2 MultiJet3 de 88 kW / 120 CV de serie (oficial)
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
    imagen: "/media/westfalia-columbus-640-e-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/westfalia-columbus-640-e-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/westfalia-columbus-640-e-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6363, // 6,363 m (catálogo oficial Westfalia Columbus 2026)
    anchoMm: 2050, // 2,05 m (alpacacamping.de)
    altoMm: 2600, // 2,60 m (alpacacamping.de)
    pesoKg: 3030, // masa en orden de marcha 3.030 kg / MTPLM 3.500 kg (catálogo oficial Westfalia Columbus 2026)
    mmaKg: 3500, // MTPLM 3.500 kg
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no la publica; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas homologadas (oficial)
    plazasDormir: 2, // camas gemelas; +2 opcionales con techo elevable (oficial)
    parNm: null,
    traccion: null, // no declarada por la marca en la documentación consultada
    emisionesCo2: null,
    aprox: ["precioDesde"],
    notas:
      "El 'Columbus 641 E' no existe en la gama oficial 2026 (la denominación 641 E es de 2015); esta ficha cubre el 'Columbus 640 E', el equivalente actual con camas gemelas, el más largo de la gama (gama oficial 2026: 540 D / 600 D / 600 E / 640 E, westfalia-mobil.com). Dimensiones 6,40 x 2,05 x 2,60 m, batalla 4,05 m, masa en orden de marcha 3.000 kg (alpacacamping.de, datos técnicos). Motor Fiat Ducato 2.2 MultiJet3 de 88 kW / 120 CV de serie con manual de 6 velocidades; automática de 9 velocidades opcional (westfalia-mobil.com); 140 CV según alpacacamping.de. Camas gemelas traseras de 1,96/1,80 x 1,95 m; cama de banco patentada de 1,80x0,90 m opcional; cama de techo elevable de 200x135 cm opcional (oficial). Frigorífico compresor Dometic de 90 l con doble puerta; calefacción combinada diésel Eberspächer de 5 kW con doble zona; unidad de control Westfalia/Dometic de 4,3''; baño con ducha, inodoro extraíble y ventana (oficial). Agua limpia 100 l / residuales 100 l; bombona de 6-8 kg (oficial). Sin dato publicado de carga útil (la marca no la publica y no la calculamos), consumo, par ni tracción. Precio: la web oficial de Westfalia muestra el 640 E «desde 69.690 €» (mercado europeo) para España; el PVP aplicado (70.276 €) es el de su lista de precios oficial Columbus 2026 para Francia. Precio: PVP oficial de Francia según la lista de precios oficial Columbus 2026 de Westfalia Mobil (westfalia-mobil.com): Columbus 640 E con motor 2.2 Multijet3 de 140 CV y cambio manual, 70.276 € IVA francesa incluida; no hay tarifa oficial para España.",
    curiosidades:
      "El banco trasero del Columbus, con su función lounge patentada por Westfalia, se despliega en una cama de 1,80 x 0,90 metros en dos segundos, sin piezas sueltas ni montajes: un gesto y listo. Fuente: https://westfalia-mobil.com/en/motorhomes/columbus-600-e/ (página oficial de la gama Columbus)",
    descripcion: `El Westfalia Columbus 640 E es el mayor de los campers de la gama Columbus: 6,40 metros de furgón Fiat Ducato con camas gemelas traseras, baño con ducha separada de verdad y la ingeniería de detalle que ha hecho famosa a la marca alemana. La "E" indica su distribución —camas gemelas longitudinales atrás— y el "640", su longitud: es el buque insignia de una gama que empieza en el compacto 540 D y que en 2026 se ofrece en cuatro versiones (540 D, 600 D, 600 E y 640 E). Si el 600 E es el equilibrado, el 640 E es el que elige quien quiere el máximo espacio interior sin salir del formato furgón ni del carnet B.

Con 6,40 metros de largo, 2,05 de ancho y 2,60 de alto, el 640 E aprovecha esos 40 centímetros extra respecto al 600 E donde más se notan: en la zona trasera. Las camas gemelas miden 1,96 y 1,80 metros de largo por 1,95 de ancho conjunto, con somier de muelles direccionales que Westfalia destaca como uno de sus argumentos de confort nocturno, y entre ellas queda un pasillo que permite levantarse sin molestar al compañero —la gran ventaja de las gemelas frente a la doble transversal—. Bajo las camas, el espacio de carga modular es generoso para un camper y admite bicicletas desmontadas, sillas y todo el equipo de una pareja viajera.

El salón delantero combina la banqueta trasera —con la función lounge patentada por Westfalia, que bascula el respaldo para una postura de relax— y los asientos de cabina giratorios, formando un estar para cuatro. Y aquí aparece uno de los trucos mejor pensados del modelo: esa misma banqueta se despliega en una cama de 1,80 x 0,90 metros en dos segundos, sin piezas sueltas. No es una cama para todas las noches, pero convierte al 640 E en un 2+1 real para cuando viene un invitado. Quien necesite dos camas más de verdad puede optar por el techo elevable, que añade una cama de 200x135 centímetros y eleva la capacidad a cuatro.

La cocina es nueva en esta generación: bloque compacto con fregadero y fuegos al mismo nivel de la encimera, frigorífico compresor Dometic de 90 litros con puerta de doble apertura —se abre desde dentro y desde fuera, un detalle muy camper— y mucho almacenamiento. El baño es "genuino", en palabras de la marca: ducha separada con plato, inodoro extraíble con ventana y lavabo, sin el apaño de ducharse sobre el váter. La calefacción es una combinada diésel Eberspächer de 5 kW con doble zona (estar y baño), que calienta agua y habitáculo con el gasóleo del depósito, y se gobierna desde la nueva unidad de control Westfalia/Dometic con pantalla de 4,3 pulgadas. Agua limpia de 100 litros, residuales de 100 y bombona de 6-8 kilos completan la autonomía.

En mecánica, la base es el Fiat Ducato 2.2 MultiJet3 de 120 CV con cambio manual de 6 velocidades de serie, con la automática de 9 velocidades en opción. Son 120 caballos honestos para 3.000 kilos en orden de marcha y 3.500 de MMA: no es un misil, pero el Ducato es la base más vendida de Europa por algo —fiabilidad, red de servicio y recambios en cualquier pueblo—. Con 3.500 kilos de MMA se conduce con el carnet B y queda un margen de carga razonable, aunque como en todo camper conviene no pasarse con los extras. Para 2026, la gama recibe además techo elevable en más versiones y aire acondicionado de techo Dometic opcional.

En precio, Westfalia publica listas de precios oficiales en Europa (la de Francia fija el Columbus 640 E desde 70.276 €), pero no tarifa para España: conviene pedir oferta en la red de concesionarios. Como referencia de posicionamiento, es un premium alemán: compite con los campers de gama alta y su precio está por encima de las transformaciones generalistas, a cambio de una calidad de acabado, un valor de reventa y una red de servicio que pocos igualan. La garantía y la reputación de la marca, que desde 2011 forma parte del grupo Rapido, respaldan la inversión.

Cómo lo verificamos: la gama 2026 (540 D / 600 D / 600 E / 640 E), las camas gemelas de 1,96/1,80 x 1,95 m, el frigorífico Dometic de 90 l, la calefacción Eberspächer de 5 kW con doble zona, la unidad de control de 4,3'', el baño con ducha e inodoro extraíble y las camas opcionales (banco de 1,80x0,90 m y techo de 200x135 cm) proceden de la web oficial westfalia-mobil.com; las dimensiones (6,40 x 2,05 x 2,60 m), la batalla (4,05 m) y la masa en orden de marcha (3.000 kg), de los datos técnicos de alpacacamping.de; las novedades 2026 (techo elevable extendido, aire Dometic), de outandaboutlive.co.uk. Comprobado el 19/10/2026. Sin publicar: precio oficial, carga útil (sin dato), consumo, par y tracción.

Para quién es: para parejas que quieren el camper más espacioso sin salir del carnet B ni del formato furgón, que duermen en camas gemelas y valoran un baño con ducha separada de verdad y la calidad alemana. Para quién no es: para familias que necesiten cuatro camas fijas (aquí la tercera y cuarta son opcionales y de compromiso), para quien busque el precio más bajo —es un premium y se paga— ni para quien necesite garaje grande: el espacio bajo las gemelas da para mucho, pero no es el maletero de una perfilada.`,
    pros: [
      "Camas gemelas de 1,96/1,80 x 1,95 m con somier de muelles: cada uno se levanta sin molestar al otro",
      "El camper más largo de la gama (6,40 m) sin salir del carnet B ni del formato furgón",
      "Banco trasero con función lounge patentada: se hace cama de 1,80x0,90 m en dos segundos",
      "Baño genuino con ducha separada, inodoro extraíble y ventana: raro en un furgón",
      "Calefacción diésel Eberspächer de 5 kW con doble zona y control por pantalla de 4,3''",
    ],
    contras: [
      "Sin PVP oficial: el precio se negocia por configuración en el concesionario",
      "Motor de 120 CV de serie: honesto pero justo con 3.500 kg a plena carga; la automática es opción",
      "Solo 2 camas fijas: la tercera (banco) y cuarta (techo) son opcionales y de compromiso",
      "Es un premium alemán: su precio está por encima de las transformaciones generalistas",
      "Sin garaje de perfilada: el hueco bajo las gemelas da para mucho, pero no para todo",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/westfalia-columbus-640-e-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Westfalia Columbus 640 E, vista exterior del camper",
        ancho: 1024,
        alto: 683,
      },
      {
        src: "/media/westfalia-columbus-640-e-2026-precio-ficha-tecnica-interior1.webp",
        alt: "Westfalia Columbus 640 E, salón y cocina (foto oficial Westfalia)",
        ancho: 1600,
        alto: 1066,
      },
      {
        src: "/media/westfalia-columbus-640-e-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Westfalia Columbus 640 E, camas gemelas traseras (foto oficial Westfalia)",
        ancho: 1600,
        alto: 1066,
      },
      {
        src: "/media/westfalia-columbus-640-e-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Westfalia Columbus 640 E, cocina con frigorífico abierto (foto oficial Westfalia)",
        ancho: 1080,
        alto: 1620,
      },
    ],
    analisisSlug: "westfalia-columbus-640-e-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Base Fiat Ducato: revisión según plan del fabricante (consultar manual; orientativo cada 2 años o 48.000 km)",
      revisiones: [
        {
          nombre: "Revisión base Fiat Ducato",
          queSeCambia: "Aceite + filtros + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Westfalia (anual recomendada)",
          queSeCambia: "Estanqueidad, gas, electricidad, humedades",
          costeAproxEur: 250,
        },
      ],
    },
  },
];
