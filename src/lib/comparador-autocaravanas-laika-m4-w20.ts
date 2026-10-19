// Autocaravanas Laika — lote Merlín 4 (19/10/2026).
// Fuentes: ficha técnica del Laika Kosmo 509 en el exposé de caraworld.de (cotas, motor,
// pesos, camas, calefacción, frigorífico, agua), anuncio vigente en mobile.de (FR 2026,
// 0 km, 140 CV) y finn.no (fotos), nota «Born to be a Laika» sobre la nueva generación Kosmo
// (caravantrends.com) y outandaboutlive.co.uk (colaboración Laika–GFG Style).
// Verificado el 19/10/2026.
// Notas honestas: Laika NO publica PVP oficial (precioDesde = null); los ~74.900 € de un
// anuncio alemán (Tageszulassung) son orientativos. La MMA de 3.650 kg corresponde a la
// opción de auflastung (la base es 3.500 kg); con 3.650 kg se requiere carnet C1. Las fotos
// no son oficiales: proceden del anuncio de finn.no (item 478302981), sin marcas de agua ni
// rótulos; se usan bajo la regla relajada de 19/10/2026 (modelo y marca exactos). La marca no
// publica la carga útil como cifra (cargaUtilKg = null; prohibido calcularla). Consumo, par y
// emisiones: no publicados.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_LAIKA_M4: Autocaravana[] = [
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
      "Cotas (741/233/294 cm), motor Fiat Ducato 2.2 MultiJet 140 CV, MRO 3.116 kg, MMA 3.650 kg con auflastung (base 3.500 kg), 4 plazas, camas gemelas + basculante eléctrica, calefacción Combi 6E, frigorífico 140 l y agua limpia 110 l: exposé de caraworld.de (verificado 19/10/2026). Anuncio vigente en mobile.de: FR 2026, 0 km, 140 CV. Laika no publica PVP oficial (precioDesde = null); los ~74.900 € de un anuncio alemán son orientativos. Fotos no oficiales (anuncio finn.no 478302981, sin marcas de agua). Carga útil, consumo, par y emisiones: no publicados; quedan en null.",
    curiosidades:
      "La nueva generación del Kosmo —la gama a la que pertenece el 509— es fruto de una colaboración entre Laika y GFG Style, el estudio fundado por Giorgetto Giugiaro y su hijo Fabrizio, dos leyendas vivas del diseño automovilístico italiano. El resultado se nota fuera y dentro: trasera rediseñada con el logo Laika en grande, interiores con paleta de grises, piedra, verde y blanco brillo, y aislamiento XPS de alta densidad de serie. Fuente: Out & About Live, «Laika launches the all-new Kosmo range for 2024» (https://www.outandaboutlive.co.uk/motorhomes/news/laika-launch-kosmo-range-for-2024).",
    descripcion: `El Laika Kosmo 509 es la perfilada italiana que ha decidido no parecerse a ninguna otra: con 7,41 metros de largo, camas gemelas traseras y una cama basculante eléctrica, pertenece a la nueva generación del Kosmo, la gama que Laika rediseñó de arriba abajo en colaboración con GFG Style —el estudio de Giorgetto Giugiaro y su hijo Fabrizio—. Cuando el hombre que dibujó algunos de los coches más bellos del siglo XX se pone a diseñar una autocaravana, el resultado no es un ejercicio de estilo vacío: es una perfilada que se reconoce a cien metros y que por dentro apuesta por materiales y contrastes de color poco habituales en el segmento.

    En medidas y habitabilidad, el Kosmo 509 ofrece 741 cm de largo, 233 cm de ancho y 294 cm de alto, con una masa en orden de marcha de 3.116 kg y una MMA de 3.650 kg gracias a la auflastung opcional (la MMA de serie es de 3.500 kg). Es una perfilada grande, pensada para viajar con espacio de verdad: la anchura de 2,33 m permite un salón generoso y una cocina con superficie de trabajo real, y la altura de 2,94 m deja una sensación de amplitud que las perfiladas estrechas no pueden ofrecer. La distribución con camas gemelas traseras es la favorita de las parejas que viajan mucho: cada uno tiene su cama, no hay que trepar por encima del otro para levantarse de noche, y el hueco entre ambas camas admite un colchón auxiliar para convertirlas en una gran cama doble cuando apetece. Debajo de las camas, el garaje trasero traga el equipamiento voluminoso de la vida al aire libre.

    En tecnología y equipamiento, el 509 viene de la escuela italiana del «viajar bien»: calefacción Truma Combi 6E —el sistema combinado de calefacción y agua caliente más extendido y fiable del sector—, frigorífico de 140 litros, depósito de agua limpia de 110 litros y la cama basculante eléctrica sobre el salón, que baja con solo pulsar un botón y desaparece en el techo durante el día. El aislamiento es de XPS de alta densidad, la puerta de célula es la Hartal Premium XL integrada en el cierre centralizado, y los detalles de diseño firmados por GFG Style se notan en cada estancia: contrastes de color entre el gris, la piedra, el verde y el blanco brillo, y una trasera completamente nueva donde el logo Laika cobra un protagonismo inédito. Es equipamiento de gama media-alta con presentación de gama alta.

    En camas y plazas, el Kosmo 509 homologa 4 plazas para viajar y 4 para dormir: las camas gemelas traseras para dos y la cama basculante eléctrica para otros dos. Es la configuración ideal para dos parejas amigas que viajan juntas o para una familia con dos hijos adolescentes: cada pareja —o cada generación— tiene su territorio, y durante el día la basculante recogida deja el salón completamente libre. La cama basculante eléctrica, a diferencia de las manuales, no exige fuerza ni maña: un botón y lista. Y las camas gemelas, con sus somieres y colchones independientes, son las que mejor descanso ofrecen en ruta según la mayoría de los caravanistas experimentados.

    En mecánica, la base es el Fiat Ducato con el 2.2 MultiJet de 140 CV, el motor que mueve a media Europa caravanista: suficiente para los 3.650 kg de MMA máxima, con un consumo razonable para el tamaño y una red de talleres que cubre hasta el último rincón del continente. La tracción delantera y el chasis Camping-Car Special rebajado de Fiat proporcionan un comportamiento estable y un acceso a la célula con un escalón menos. Con la auflastung a 3.650 kg hay que tener en cuenta un detalle administrativo importante: se sale del límite del carnet B y se necesita el C1, de modo que quien solo tenga el B deberá conformarse con la MMA de serie de 3.500 kg y vigilar la carga.

    En precio y red comercial en España, Laika no publica una tarifa oficial de PVP; como referencia orientativa —no oficial—, unidades nuevas del Kosmo 509 con primera matriculación de 2026 y 0 km se han anunciado en Alemania en torno a los 74.900 euros (Tageszulassung). Laika, marca toscana del grupo Erwin Hymer, cuenta con distribuidores oficiales en España, donde el Kosmo se posiciona como la perfilada italiana de diseño diferenciado: compite con las alemanas en equipamiento y con las francesas en precio, y gana a casi todas en personalidad estética.

    Cómo lo verificamos: las cotas (741 x 233 x 294 cm), el motor Fiat Ducato 2.2 MultiJet de 140 CV, la MRO (3.116 kg), la MMA (3.650 kg con auflastung, 3.500 kg de base), las 4 plazas, las camas gemelas con basculante eléctrica, la calefacción Combi 6E, el frigorífico de 140 l y el agua limpia de 110 l proceden del exposé técnico de caraworld.de, verificado el 19 de octubre de 2026. La vigencia del modelo en 2026 (FR 2026, 0 km) se comprobó en un anuncio activo de mobile.de. La colaboración entre Laika y GFG Style (Giorgetto y Fabrizio Giugiaro) para la nueva generación Kosmo procede de Out & About Live y de la nota «Born to be a Laika» (caravantrends.com). Los datos no publicados (PVP, carga útil, consumo, par, emisiones) quedan en null.

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
