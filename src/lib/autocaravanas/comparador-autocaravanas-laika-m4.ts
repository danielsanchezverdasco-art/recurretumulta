// Autocaravanas Laika — lote Merlín 4 (19/10/2026).
// Fuentes: findmyleisurevehicle.co.uk (catálogo NEC 2026), exposé de caraworld.de,
// anuncio de annonces-caravaning.com, ficha de alfacaravan.it, camperlife.it. Verificado el 19/10/2026.
// Notas honestas: Laika publica sus precios en su documento oficial de precios públicos 2026
// (edición francesa; sin tarifa para España): precioDesde = 115.918 € (marcado en «aprox»). La marca no publica
// carga útil (cargaUtilKg: null). Solo se localizaron 2 fotos verificables del H 4109 exacto
// (exterior + cocina); no hay interiores verificables del H 4109 no-DS, por eso imagenInteriorOficial queda vacía.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_LAIKA_M4: Autocaravana[] = [
  {
    id: "laika-ecovip-h-4109-2026-precio-ficha-tecnica",
    marca: "Laika",
    modelo: "Ecovip H 4109",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: 115918, // Precios públicos oficiales Laika 2026 (ed. francesa).
    potenciaCv: 140, // Fiat Ducato 2.2 MultiJet 140 CV (exposé caraworld.de)
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/laika-ecovip-h-4109-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/laika-ecovip-h-4109-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "", // sin interiores verificables del H 4109 no-DS
    videoId: null,
    videoCanal: null,
    largoMm: 7400, // exposé caraworld.de
    anchoMm: 2250, // exposé caraworld.de
    altoMm: 2960, // exposé caraworld.de (altura interior 205 cm)
    pesoKg: null, // masa en orden de marcha 3.344 kg según exposé caraworld.de; no es carga útil y la marca no publica carga útil de catálogo
    mmaKg: 4400, // exposé caraworld.de (existe variante de 3.500 kg)
    carnetNecesario: "C1", // MMA 4.400 kg
    cargaUtilKg: null, // la marca no publica carga útil
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 cinturones (exposé caraworld.de)
    plazasDormir: 4, // camas individuales + abatible (exposé caraworld.de)
    parNm: null,
    traccion: "delantera", // base Fiat Ducato de tracción delantera (ficha de distribuidor alfacaravan.it del H4109)
    emisionesCo2: null,
    aprox: ["precioDesde"],
    notas:
      "Dimensiones (7.400×2.250×2.960 mm), MRO 3.344 kg, MMA 4.400 kg, 4 cinturones, camas (individuales 206×82 y 202×82 + abatible 190×145), Truma Combi 6 E, frigorífico 153 l, agua 100 l / grises 100 l: exposé de caraworld.de. Motor Fiat Ducato 2.2 MultiJet 140 CV y cambio automático: exposé de caraworld.de. Variante de 3.500 kg de PTAC con vacío de 3.004 kg y carnet B: anuncio de annonces-caravaning.com (unidad nueva 2025). Doble suelo pasante y 4/4 plazas: ficha de alfacaravan.it. Precio de referencia £107.300, 3 plazas de viaje y 4 camas: catálogo NEC 2026 de findmyleisurevehicle.co.uk. Precio oficial en España: no publicado por Laika (null). Carga útil: la marca no la publica (null). Fotos: 2 verificables del H 4109 exacto (exterior y cocina); no se localizaron interiores verificables del H 4109 no-DS. Precio: precio público del documento oficial de precios públicos y datos técnicos de Laika 2026 (válido desde 01/08/2025), Ecovip H 4109 = 115.918 €; no hay tarifa oficial para España.",
    curiosidades:
      "Los Ecovip están pensados para el invierno: llevan calefacción canalizada de 6 kW con caldera que llega hasta la cabina, doble suelo, depósitos y garaje, y la instalación de agua va en posición anticongelante dentro del doble suelo calefactado (fuente: https://camperlife.it/notizie/laika-ecovip-un-nome-che-racchiude-tutta-lesperienza-di-laika-nei-camper.html).",
    descripcion: `La Laika Ecovip H 4109 es la integral de referencia de la casa toscana para quien quiere una autocaravana de clase A sin saltar a los tamaños y precios de las gamas altas. Laika, con fábrica en San Casciano in Val di Pesa, lleva décadas construyendo su reputación sobre dos pilares: el diseño italiano y una construcción pensada para usarse todo el año, incluido el invierno. El H 4109 encarna esa filosofía en un formato de 7,40 metros que sigue siendo manejable en carretera y en la mayoría de áreas de servicio europeas.

    Con 7.400 mm de largo, 2.250 mm de ancho y 2.960 mm de alto, el H 4109 se sitúa en el punto dulce de las integrales: lo bastante grande para un dormitorio trasero de verdad y un salón delantero digno de ese nombre, lo bastante compacta para no convertirse en un problema cada vez que hay que aparcar o girar en un pueblo. Al ser una integral pura (clase A), no hay cabina de furgoneta separada: el parabrisas panorámico forma parte del salón, lo que multiplica la sensación de espacio y la luminosidad cuando se está parado. La altura interior de 205 cm permite moverse con comodidad a personas altas.

    La distribución es la clásica que mejor funciona en este tamaño: salón delantero con asientos giratorios de cabina integrados, cocina lateral en el centro, cuarto de baño separado y dormitorio trasero con camas individuales (206×82 cm y 202×82 cm). Sobre el salón, una cama abatible de 190×145 cm completa las cuatro plazas para dormir. Es una configuración pensada para dos personas que viajan con desahogo y pueden recibir a dos invitados —o a dos niños— sin tener que montar y desmontar el salón cada noche, porque las camas traseras quedan siempre hechas. Los cuatro cinturones de seguridad permiten viajar a cuatro ocupantes legalmente.

    Donde el Ecovip H 4109 se distancia de muchas rivales es en la construcción invernal. Laika equipa la gama con calefacción canalizada de 6 kW (Truma Combi 6 E en las unidades documentadas) cuya caldera llega hasta la cabina, doble suelo técnico, depósitos y garaje calefactados, e instalación de agua en posición anticongelante dentro del doble suelo. Traducido a uso real: es una autocaravana con la que se puede plantear una semana de esquí o una ruta por el norte de Europa en febrero sin miedo a que se congelen las tuberías. El frigorífico de 153 litros, los depósitos de 100 litros de agua limpia y 100 litros de grises, y el garaje trasero completan una célula pensada para la autonomía.

    En mecánica, la unidad documentada monta el Fiat Ducato 2.2 MultiJet de 140 CV con cambio automático, la combinación más demandada hoy en el segmento. La masa en orden de marcha declarada es de 3.344 kg y la MMA de 4.400 kg, lo que exige carnet C1. Ojo, porque existe variante homologada en 3.500 kg (un anuncio francés de una unidad nueva de 2025 declara PTAC de 3.500 kg y vacío de 3.004 kg), que sí se puede conducir con el carnet B; conviene confirmar con el concesionario qué homologación trae la unidad concreta, porque cambia el carnet necesario y la carga útil disponible.

    En precio, Laika no publica tarifa oficial para España: se aplica el precio de su documento oficial de precios públicos 2026, edición francesa (115.918 €, «aprox»). Como referencia orientativa, el catálogo británico del NEC 2026 lista el Ecovip H 4109 desde 107.300 libras. Es una referencia útil para situarlo —integral italiana de 7,4 m con 140 CV y automático—, pero no es un precio de venta en España: el precio final dependerá del concesionario, del equipamiento y de la homologación de peso elegida. Laika cuenta con red oficial de distribuidores en España, donde se puede configurar y pedir presupuesto cerrado.

    Cómo lo verificamos: las dimensiones, pesos, plazas, camas y equipamiento (Truma Combi 6 E, frigo 153 l, depósitos 100/100 l) proceden del exposé técnico de caraworld.de; el motor Fiat Ducato 2.2 de 140 CV y el cambio automático, de la misma fuente; la variante de 3.500 kg con carnet B, de un anuncio de unidad nueva en annonces-caravaning.com; el doble suelo pasante, de la ficha de alfacaravan.it; y el precio de referencia británico, del catálogo NEC 2026 publicado en findmyleisurevehicle.co.uk. Todo verificado el 19/10/2026. La curiosidad invernal procede de camperlife.it.

    Para quién es: para parejas que viajan mucho y quieren una integral de verdad —con su parabrisas panorámico y su habitabilidad— en un tamaño razonable, y que valoran poder usarla en invierno sin limitaciones. También para quien busca camas individuales traseras siempre hechas y un garaje serio. Para quién no es: para quien solo tenga carnet B y no quiera oír hablar del C1 (deberá buscar expresamente la versión de 3.500 kg y vigilar la carga útil), para quien busque el precio más bajo del segmento —una integral italiana de este nivel no lo es— y para quien necesite cinco o seis plazas: aquí son cuatro y cuatro.`,
    pros: [
      "Integral (clase A) de 7,40 m: parabrisas panorámico y gran sensación de espacio en parado",
      "Construcción pensada para el invierno: calefacción canalizada de 6 kW, doble suelo calefactado e instalación de agua anticongelante",
      "Camas individuales traseras (206×82 y 202×82 cm) siempre hechas + abatible de 190×145: 4 plazas reales para dormir",
      "Fiat Ducato 2.2 MultiJet 140 CV con cambio automático, la mecánica más demandada del segmento",
      "Garaje trasero y depósitos de 100+100 l: buena autonomía para viajar sin depender de áreas",
    ],
    contras: [
      "Laika no publica PVP oficial en España: imposible comparar precio de partida sin pedir presupuesto",
      "Con MMA de 4.400 kg exige carnet C1; la versión de 3.500 kg (carnet B) hay que buscarla expresamente",
      "2.250 mm de ancho y 2,96 m de alto: en ciudad y en carreteras estrechas se nota frente a un camper",
      "Solo 4 cinturones y 4 camas: no sirve para familias numerosas",
      "MRO de 3.344 kg: con la versión de 3.500 kg la carga útil real hay que calcularla con lupa antes de cargar",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/laika-ecovip-h-4109-2026-precio-ficha-tecnica-oficial.webp", alt: "Laika Ecovip H 4109, vista exterior", ancho: 728, alto: 530 },
      { src: "/media/laika-ecovip-h-4109-2026-precio-ficha-tecnica-detalle.webp", alt: "Laika Ecovip H 4109, cocina", ancho: 728, alto: 546 },
    ],
    analisisSlug: "laika-ecovip-h-4109-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Laika (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
  {
    id: "laika-kosmo-509-2026-precio-ficha-tecnica",
    marca: "Laika",
    modelo: "Kosmo 509",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Laika no publica PVP oficial; ~74.900 € en anuncio alemán (Tageszulassung), orientativo
    potenciaCv: 140, // Fiat Ducato 2.2 MultiJet de 140 CV (caraworld.de, mobile.de)
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
    imagen: "/media/laika-kosmo-509-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/laika-kosmo-509-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/laika-kosmo-509-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7410, // caraworld.de: 741 cm
    anchoMm: 2330, // caraworld.de: 233 cm
    altoMm: 2940, // caraworld.de: 294 cm
    pesoKg: 3116, // masa en orden de marcha (caraworld.de)
    mmaKg: 3650, // con auflastung opcional; la base es 3.500 kg (caraworld.de)
    carnetNecesario: "B", // MMA de serie 3.500 kg; con la auflastung a 3.650 kg se requiere C1
    cargaUtilKg: null, // la marca no publica la carga útil; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas para viajar
    plazasDormir: 4, // camas gemelas traseras + cama basculante eléctrica
    parNm: null,
    traccion: "delantera", // base Fiat Ducato de tracción delantera
    emisionesCo2: null,
    aprox: [],
    notas:
      "Cotas (741/233/294 cm), motor Fiat Ducato 2.2 MultiJet 140 CV, MRO 3.116 kg, MMA 3.650 kg con auflastung (base 3.500 kg), 4 plazas, camas gemelas + basculante eléctrica, calefacción Combi 6E, frigorífico 140 l y agua limpia 110 l: exposé de caraworld.de (verificado 19/10/2026). Anuncio vigente en mobile.de: FR 2026, 0 km, 140 CV. Laika no publica PVP oficial; los ~74.900 € de un anuncio alemán son orientativos. Fotos no oficiales (anuncio finn.no 478302981, sin marcas de agua), verificadas visualmente como Kosmo 509 exacto (insignia trasera «KOSMO 509», interiores coherentes). Laika no publica fotos oficiales del Kosmo 509 en laika.it (verificado 19/10/2026: la gama Kosmo actual en la web oficial solo incluye el campervan CV60). Carga útil, consumo, par y emisiones: no publicados; quedan sin dato. Precio: se deja sin dato porque no existe un «Kosmo 509» en la gama ni en el documento oficial de precios públicos de Laika 2026 (la gama Kosmo se designa H 1319/H 1409 y L 105/209/319/409); sin tarifa oficial verificable para esta designación.",
    curiosidades:
      "La nueva generación del Kosmo —la gama a la que pertenece el 509— es fruto de una colaboración entre Laika y GFG Style, el estudio fundado por Giorgetto Giugiaro y su hijo Fabrizio, dos leyendas vivas del diseño automovilístico italiano. El resultado se nota fuera y dentro: trasera rediseñada con el logo Laika en grande, interiores con paleta de grises, piedra, verde y blanco brillo, y aislamiento XPS de alta densidad de serie. Fuente: Out & About Live, «Laika launches the all-new Kosmo range for 2024» (https://www.outandaboutlive.co.uk/motorhomes/news/laika-launch-kosmo-range-for-2024).",
    descripcion: `El Laika Kosmo 509 es la perfilada italiana que ha decidido no parecerse a ninguna otra: con 7,41 metros de largo, camas gemelas traseras y una cama basculante eléctrica, pertenece a la nueva generación del Kosmo, la gama que Laika rediseñó de arriba abajo en colaboración con GFG Style —el estudio de Giorgetto Giugiaro y su hijo Fabrizio—. Cuando el hombre que dibujó algunos de los coches más bellos del siglo XX se pone a diseñar una autocaravana, el resultado no es un ejercicio de estilo vacío: es una perfilada que se reconoce a cien metros y que por dentro apuesta por materiales y contrastes de color poco habituales en el segmento.

    En medidas y habitabilidad, el Kosmo 509 ofrece 741 cm de largo, 233 cm de ancho y 294 cm de alto, con una masa en orden de marcha de 3.116 kg y una MMA de 3.650 kg gracias a la auflastung opcional (la MMA de serie es de 3.500 kg). Es una perfilada grande, pensada para viajar con espacio de verdad: la anchura de 2,33 m permite un salón generoso y una cocina con superficie de trabajo real, y la altura de 2,94 m deja una sensación de amplitud que las perfiladas estrechas no pueden ofrecer. La distribución con camas gemelas traseras es la favorita de las parejas que viajan mucho: cada uno tiene su cama, no hay que trepar por encima del otro para levantarse de noche, y el hueco entre ambas camas admite un colchón auxiliar para convertirlas en una gran cama doble cuando apetece. Debajo de las camas, el garaje trasero traga el equipamiento voluminoso de la vida al aire libre.

    En tecnología y equipamiento, el 509 viene de la escuela italiana del «viajar bien»: calefacción Truma Combi 6E —el sistema combinado de calefacción y agua caliente más extendido y fiable del sector—, frigorífico de 140 litros, depósito de agua limpia de 110 litros y la cama basculante eléctrica sobre el salón, que baja con solo pulsar un botón y desaparece en el techo durante el día. El aislamiento es de XPS de alta densidad, la puerta de célula es la Hartal Premium XL integrada en el cierre centralizado, y los detalles de diseño firmados por GFG Style se notan en cada estancia: contrastes de color entre el gris, la piedra, el verde y el blanco brillo, y una trasera completamente nueva donde el logo Laika cobra un protagonismo inédito. Es equipamiento de gama media-alta con presentación de gama alta.

    En camas y plazas, el Kosmo 509 homologa 4 plazas para viajar y 4 para dormir: las camas gemelas traseras para dos y la cama basculante eléctrica para otros dos. Es la configuración ideal para dos parejas amigas que viajan juntas o para una familia con dos hijos adolescentes: cada pareja —o cada generación— tiene su territorio, y durante el día la basculante recogida deja el salón completamente libre. La cama basculante eléctrica, a diferencia de las manuales, no exige fuerza ni maña: un botón y lista. Y las camas gemelas, con sus somieres y colchones independientes, son las que mejor descanso ofrecen en ruta según la mayoría de los caravanistas experimentados.

    En mecánica, la base es el Fiat Ducato con el 2.2 MultiJet de 140 CV, el motor que mueve a media Europa caravanista: suficiente para los 3.650 kg de MMA máxima, con un consumo razonable para el tamaño y una red de talleres que cubre hasta el último rincón del continente. La tracción delantera y el chasis Camping-Car Special rebajado de Fiat proporcionan un comportamiento estable y un acceso a la célula con un escalón menos. Con la auflastung a 3.650 kg hay que tener en cuenta un detalle administrativo importante: se sale del límite del carnet B y se necesita el C1, de modo que quien solo tenga el B deberá conformarse con la MMA de serie de 3.500 kg y vigilar la carga.

    En precio y red comercial en España, Laika no publica una tarifa oficial de PVP; como referencia orientativa —no oficial—, unidades nuevas del Kosmo 509 con primera matriculación de 2026 y 0 km se han anunciado en Alemania en torno a los 74.900 euros (Tageszulassung). Laika, marca toscana del grupo Erwin Hymer, cuenta con distribuidores oficiales en España, donde el Kosmo se posiciona como la perfilada italiana de diseño diferenciado: compite con las alemanas en equipamiento y con las francesas en precio, y gana a casi todas en personalidad estética.

    Cómo lo verificamos: las cotas (741 x 233 x 294 cm), el motor Fiat Ducato 2.2 MultiJet de 140 CV, la MRO (3.116 kg), la MMA (3.650 kg con auflastung, 3.500 kg de base), las 4 plazas, las camas gemelas con basculante eléctrica, la calefacción Combi 6E, el frigorífico de 140 l y el agua limpia de 110 l proceden del exposé técnico de caraworld.de, verificado el 19 de octubre de 2026. La vigencia del modelo en 2026 (FR 2026, 0 km) se comprobó en un anuncio activo de mobile.de. La colaboración entre Laika y GFG Style (Giorgetto y Fabrizio Giugiaro) para la nueva generación Kosmo procede de Out & About Live y de la nota «Born to be a Laika» (caravantrends.com). Los datos no publicados (PVP, carga útil, consumo, par, emisiones) quedan sin dato.

    Para quién es: el Kosmo 509 encaja con parejas viajeras que hacen muchos kilómetros y quieren dormir bien de verdad —las camas gemelas son su argumento definitivo—, con familias con hijos mayores que necesitan cuatro camas reales, y con compradores a los que el diseño les importa tanto como la ficha técnica: esta es la perfilada para quien no quiere «una más». No es para quien solo tenga el carnet B y quiera apurar la auflastung (necesitará el C1), para quien busque la perfilada más barata del segmento —el diseño italiano se paga—, ni para quien priorice la compacidad: 7,41 metros son 7,41 metros.`,
    pros: [
      "Diseño firmado por GFG Style (Giugiaro): la perfilada con más personalidad estética de su segmento",
      "Camas gemelas traseras + basculante eléctrica: 4 camas reales para dormir bien de verdad",
      "Calefacción Truma Combi 6E, frigo de 140 l y puerta Hartal Premium XL: equipamiento de gama alta",
      "Aislamiento XPS de alta densidad y acabados italianos cuidados en cada detalle",
      "Base Fiat Ducato 140 CV: mecánica probada con servicio en toda Europa",
    ],
    contras: [
      "Laika no publica PVP oficial: el precio se negocia con cada distribuidor",
      "La auflastung a 3.650 kg exige carnet C1: con solo el B hay que quedarse en 3.500 kg",
      "7,41 m de largo y 2,94 m de alto: volumen considerable para pueblos y áreas pequeñas",
      "El diseño italiano se paga: no es la opción más barata entre las perfiladas de 4 camas",
      "Red de distribuidores en España más pequeña que la de las marcas alemanas y francesas",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/laika-kosmo-509-2026-precio-ficha-tecnica-oficial.webp", alt: "Laika Kosmo 509, vista exterior trasera", ancho: 1280, alto: 853 },
      { src: "/media/laika-kosmo-509-2026-precio-ficha-tecnica-interior1.webp", alt: "Laika Kosmo 509, salón y cabina", ancho: 1280, alto: 853 },
      { src: "/media/laika-kosmo-509-2026-precio-ficha-tecnica-interior2.webp", alt: "Laika Kosmo 509, camas gemelas traseras", ancho: 1066, alto: 1600 },
      { src: "/media/laika-kosmo-509-2026-precio-ficha-tecnica-detalle.webp", alt: "Laika Kosmo 509, zona de cocina", ancho: 1066, alto: 1600 },
    ],
    analisisSlug: "laika-kosmo-509-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 48.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Laika (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 260 },
      ],
    },
  },
];
