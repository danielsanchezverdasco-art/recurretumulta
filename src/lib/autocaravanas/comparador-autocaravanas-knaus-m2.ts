// Autocaravanas Knaus — lote Merlín 2 (19/10/2026).
// BoxStar 600 MQ: datos de anuncios documentados de concesionario (Alemania,
// modelo 2025, última serie BoxStar antes del relevo por BoxTime en 2026):
// fuenteNombre/fuenteUrl con la URL exacta del anuncio. Precio: UVP alemán
// (87.758 €, unidad documentada Street 180 CV automática), marcado en `aprox`;
// Knaus España no publica PVP.
// Sky TI 650 MF: ficha de gama (alpacacamping.de, datos del catálogo Knaus
// 2026): 6.950 x 2.300 x 2.800 mm, 2.950 kg, desde 81.000 € en Alemania.
// Van TI 650 MEG Vansation: ficha técnica oficial Knaus 2026 generada por el
// configurador de knaus.com (PDF vía Premium Motorhomes): 6.960 x 2.200 x
// 2.870 mm, batalla 380 cm, masa en orden de marcha 2.875 kg, MMA 3.500 kg,
// 4 plazas / 3 camas, Fiat 140 CV. Precio: precio de lista alemán 77.890 €
// con extras (anuncio de concesionario, Augsburg).
// Sky Wave 650 MEG (asignado) SUSTITUIDO por Sky TI 650 MF: no existe ningún
// Sky Wave 650 MEG en el catálogo Knaus 2025/2026 (el Sky Wave histórico solo
// tuvo el 650 MF; la gama actual es Live Wave / Sky TI).
// Fotos: 12 webp de anuncios reales del modelo exacto, inspeccionadas
// visualmente (sin marcas de agua, sin campa, sin rótulos, sin pegatinas de
// precio). Curiosidad con fuente en `curiosidades`. noindex lo gestiona Grok.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_KNAUS_M2: Autocaravana[] = [
  {
    id: "knaus-boxstar-600-mq-2026-precio-ficha-tecnica",
    marca: "Knaus",
    modelo: "BoxStar 600 MQ",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: 87758, // UVP alemán (87.758 €) de una unidad documentada Street 180 CV automática; Knaus España no publica PVP
    potenciaCv: 140, // Fiat Ducato 2.2 Multijet de 140 CV (103 kW) de serie; 180 CV con cambio automático de 8v como opción
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
    imagen: "/media/knaus-boxstar-600-mq-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial:
      "/media/knaus-boxstar-600-mq-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/knaus-boxstar-600-mq-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990, // anuncio documentado de concesionario: 5.990 mm
    anchoMm: 2050, // anuncio documentado de concesionario: 2.050 mm
    altoMm: 2580, // anuncio documentado de concesionario: 2.580 mm
    pesoKg: null, // la masa en orden de marcha de la versión concreta no está publicada
    mmaKg: 3500, // anuncio documentado de concesionario
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil de esta versión
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // anuncio documentado: 4 plazas de viaje
    plazasDormir: 2, // cama doble transversal trasera; 4 con el techo elevable opcional
    parNm: 350, // Fiat Ducato 2.2 Multijet 140: 350 Nm (dato oficial Fiat)
    traccion: "Delantera", // Fiat Ducato, tracción delantera
    emisionesCo2: null,
    aprox: [
      "Precio de lista (UVP) en Alemania: 87.758 € (unidad documentada Street, 180 CV automática con extras; el precio base varía por configuración)",
    ],
    notas:
      "El BoxStar 600 MQ corresponde a la edición Street del camper BoxStar de Knaus (modelo 2025), la última serie de la gama antes de que Knaus la sustituyera por la nueva gama BoxTime en 2026. El precio (87.758 €) es el UVP —precio de lista recomendado— en Alemania de una unidad documentada con el motor de 180 CV y cambio automático de 8 velocidades; Knaus España no publica PVP y el precio final lo fija cada concesionario. Las medidas (5,99 x 2,05 x 2,58 m), el MMA (3.500 kg) y el equipamiento proceden de anuncios reales de concesionario de unidades del modelo. La masa en orden de marcha y la carga útil de esta versión no están publicadas: quedan sin dato y no se calculan.",
    descripcion: `El Knaus BoxStar 600 MQ es el camper grande de Knaus en su configuración más equilibrada: 5,99 metros de largo sobre base Fiat Ducato, cama doble transversal trasera, baño central y media dinette delantera. Es el modelo con el que Knaus lleva años peleando la liga de los campers premium de menos de 6 metros: no es el más barato de la familia —ese papel lo juega el BoxLife—, pero sí el que más equipamiento trae de serie y el que mejor resuelve el eterno dilema del camper, que es hacer caber una vivienda completa en el hueco de una furgoneta sin que parezca una furgoneta.

La distribución MQ es la clásica que nunca falla en este segmento: atrás, la cama doble transversal elevada, con armarios altos en todo su perímetro y ventanas practicables en las puertas traseras para ventilar y mirar; en el centro, la cocina junto a la puerta corredera y el baño enfrente; delante, la media dinette con mesa y los asientos de cabina giratorios. Lo que distingue al BoxStar dentro de esta receta tan trillada son los detalles: en lugar de la banqueta trasera informe de otros campers, aquí hay dos butacas individuales con aspecto muy automovilístico, con reposacabezas integrados, reposabrazos abatibles y, lo más importante, homologación TÜV para viajar con niños con total garantía. Se deslizan hacia delante para reclinarse y se pueden separar para ganar espacio para los codos, un detalle que se agradece en viajes largos con cuatro ocupantes.

La cocina es otro de los puntos donde el BoxStar se desmarca: donde muchos rivales montan dos fuegos justos, aquí hay tres quemadores en línea con un sólido soporte de hierro fundido, fregadero profundo y una superficie de trabajo abatible en el extremo delantero. Los cajones son abundantes y accesibles sin tener que arrodillarse, y el frigorífico de compresor de 90 litros va a altura de cintura, sin agacharse para coger la leche. El baño, convencional pero bien resuelto, combina lavabo fijo con encimera plana y ducha con la ingeniosa cortina de tira hinchable que Knaus diseñó para que no se pegue al cuerpo al ducharse. La calefacción es la Truma Combi 6 de gasóleo —el camper no depende del gas para calentarse—, con panel digital CP-Plus, y el pack Funline añade el escalón de entrada eléctrico, el toldo y el sistema de filtración de agua Bluuwater.

La base es el Fiat Ducato 2.2 Multijet de 140 CV (103 kW) con cambio manual de 6 velocidades y tracción delantera, homologado Euro 6e. La unidad documentada monta la opción del 180 CV con el cambio automático de 8 velocidades por convertidor de par, una combinación que transforma el carácter del vehículo en autopista y que explica buena parte de su precio. De serie, el Ducato trae el arsenal habitual de ayudas: ABS, ESP, control de tracción Traction Plus con ayuda al arranque en pendiente, control de crucero, airbags y cámara trasera. La edición Street añade el toque estético que le da nombre: parrilla negra, paragolpes en color carrocería, faros con marco negro, iluminación full LED y llantas de aleación de 16 pulgadas, con la pintura Lanzarote Grey y la tapicería Active Rock que se ven en las fotos.

Con 5,99 m de largo, 2,05 m de ancho y 2,58 m de alto, el BoxStar 600 MQ cabe en casi cualquier plaza de aparcamiento y en la mayoría de los parkings subterráneos con límite de 2,60 m, lo que lo convierte en un verdadero coche de diario para quien se atreva. Los 3.500 kg de MMA lo dejan en el carnet B, aunque con cuatro ocupantes y el depósito de agua lleno conviene vigilar la carga útil, como en todo camper de este tamaño. El depósito de combustible de 90 litros da una autonomía generosa incluso con el consumo algo más alto del 180 CV automático.

Del precio en España no hay cifra oficial: Knaus no publica PVP y cada concesionario fija el suyo. Como referencia de posicionamiento, el UVP alemán de una unidad documentada Street con el 180 CV automático y extras es de 87.758 €, lo que sitúa al BoxStar claramente por encima del BoxLife y a la altura de los campers premium de Hymer o Westfalia en configuración equivalente. Sus rivales naturales son el Adria Twin, el Pössl Summit 600 y el HymerCar Grand Canyon en distribución de cama transversal: el Knaus se defiende con las butacas traseras TÜV, los tres fuegos y el equipamiento de serie de la edición Street.

Verificación de fuentes: medidas (5,99 x 2,05 x 2,58 m), MMA (3.500 kg), plazas (4 de viaje / 2 para dormir), motorizaciones Fiat 140 CV de serie y 180 CV automática opcional, y equipamiento (Truma Combi 6, DuoControl CS, packs Funline y Styling Black, tapicería Active Rock) proceden de anuncios reales de concesionario alemán de unidades del BoxStar 600 Street (modelo 2025) y de la prueba publicada por Out & About Live. El precio de 87.758 € es el UVP alemán de la unidad documentada; Knaus España no publica PVP. La marca no publica la masa en orden de marcha ni la carga útil de esta versión: esos campos quedan sin dato y no se calculan. La sustitución de la gama BoxStar por la BoxTime en 2026 está documentada en la presentación de la gama 2026 de Knaus Tabbert. Las fotos corresponden a un Knaus BoxStar 600 Street real.

Perfil de comprador: el BoxStar 600 MQ encaja con parejas o familias pequeñas que buscan un camper de menos de 6 metros para usar a diario y en escapadas largas, valoran el acabado premium y las butacas traseras homologadas TÜV, y prefieren la calefacción de gasóleo para no depender del gas. No encaja con quien busque el camper más barato del segmento —para eso está el BoxLife— ni con quien necesite cuatro camas fijas sin techo elevable. Balance: el camper premium de Knaus en su mejor momento de madurez, con el argumento diferencial de las plazas traseras individuales y los tres fuegos, lastrado por un precio que ya roza el de las perfiladas de acceso y por ser una gama descatalogada en 2026, lo que obliga a buscar unidades de stock o de ocasión.`,
    pros: [
      "Distribución MQ probadísima: cama transversal trasera + baño central + media dinette en 5,99 m",
      "Butacas traseras individuales con homologación TÜV, deslizables y reclinables",
      "Cocina de 3 fuegos en línea y frigorífico de compresor de 90 l a altura de cintura",
      "Calefacción Truma Combi 6 de gasóleo: no depende del gas para calentar",
      "Edición Street con full LED, llantas de 16 pulgadas y 3.500 kg: carnet B",
    ],
    contras: [
      "Sin PVP oficial en España: cada concesionario fija su precio",
      "El UVP alemán documentado (87.758 €) ya roza el precio de una perfilada de acceso",
      "Gama descatalogada en 2026 (sustituida por la BoxTime): solo stock u ocasión",
      "Solo 2 camas fijas de serie; la cuarta y quinta plaza piden el techo elevable opcional",
      "El 180 CV automático, el más recomendable, es una opción con sobreprecio",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/knaus-boxstar-600-mq-2026-precio-ficha-tecnica-ext.webp",
        alt: "Knaus BoxStar 600 MQ, vista lateral del camper",
        ancho: 1500,
        alto: 1000,
      },
      {
        src: "/media/knaus-boxstar-600-mq-2026-precio-ficha-tecnica-ext-2.webp",
        alt: "Knaus BoxStar 600 MQ, vista delantera tres cuartos",
        ancho: 872,
        alto: 472,
      },
      {
        src: "/media/knaus-boxstar-600-mq-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Knaus BoxStar 600 MQ, salón con butacas y cabina",
        ancho: 2560,
        alto: 1920,
      },
      {
        src: "/media/knaus-boxstar-600-mq-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Interior del Knaus BoxStar 600 MQ, cocina y cama transversal trasera",
        ancho: 1500,
        alto: 1000,
      },
    ],
    analisisSlug: "knaus-boxstar-600-mq-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato 2.2: revisión cada 2 años o 48.000 km (lo que ocurra antes, según plan Fiat)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 48.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Knaus (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Knaus",
    },
    euroncap: null,
    curiosidades:
      "El BoxStar fue durante años el camper premium de Knaus, pero para la temporada 2026 la marca lo ha jubilado: su sustituto es la gama BoxTime, presentada como «la camper del futuro», con un sistema de molduras interiores que ahorra hasta 60 kg de peso y mejora el aislamiento térmico y acústico. Quien busque un BoxStar nuevo tendrá que conformarse con las últimas unidades de stock de la serie 2025. Fuente: presentación de la gama Knaus 2026 (https://www.outandaboutlive.co.uk/motorhomes/news/knaus-reveals-2026-line-after-difficult-year).",
    fuenteNombre: "Concesionario (TruckScout24, DE) + prueba Out & About Live",
    fuenteUrl:
      "https://www.truckscout24.es/main/search/index?search-word=knaus+box+star+street+600+mq",
  },
  {
    id: "knaus-sky-ti-650-mf-2026-precio-ficha-tecnica",
    marca: "Knaus",
    modelo: "Sky TI 650 MF",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 81000, // tarifa alemana "desde 81.000 €" para el 650 MF según ficha de gama; Knaus España no publica PVP
    potenciaCv: 120, // Fiat Ducato 2.2 Multijet de 120 CV (88 kW) de serie, manual 6v; 140 CV opcional
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
    imagen: "/media/knaus-sky-ti-650-mf-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial:
      "/media/knaus-sky-ti-650-mf-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/knaus-sky-ti-650-mf-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6950, // ficha de gama Knaus Sky TI: 6,95 m
    anchoMm: 2300, // ficha de gama Knaus Sky TI: 2,30 m
    altoMm: 2800, // ficha de gama Knaus Sky TI: 2,80 m
    pesoKg: 2950, // ficha de gama: 2.950 kg en vacío
    mmaKg: 3500, // 3.500 kg, carnet B
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil de esta versión
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas de viaje
    plazasDormir: 3, // cama francesa trasera + cama basculante sobre el salón
    parNm: 320, // Fiat Ducato 2.2 Multijet 120: 320 Nm (dato oficial Fiat)
    traccion: "Delantera", // Fiat Ducato, tracción delantera
    emisionesCo2: null,
    aprox: ["Precio de tarifa en Alemania: desde 81.000 €"],
    notas:
      "El precio (desde 81.000 €) es la tarifa alemana de partida del Sky TI 650 MF según la ficha de gama; Knaus España no publica PVP y el precio final lo fija cada concesionario. Las medidas (6,95 x 2,30 x 2,80 m), el peso en vacío (2.950 kg) y el equipamiento de serie proceden de la ficha de gama Knaus Sky TI. La carga útil de esta versión no está publicada: queda sin dato y no se calcula. Las versiones Platinum Selection añaden equipamiento y diseño exclusivos con sobreprecio.",
    descripcion: `El Knaus Sky TI 650 MF es la perfilada ancha de Knaus para quienes quieren espacio de integral sin pagar una integral: 6,95 metros de largo y 2,30 de ancho sobre Fiat Ducato, con la distribución MF de cama francesa trasera que es la favorita de las parejas que viajan con un invitado ocasional o con un niño. El 650 MF no es el Sky TI más vendido —ese honor se lo lleva el 650 MEG de camas gemelas—, pero es el más inteligente para dos personas que quieren una cama grande siempre hecha y una tercera plaza digna sin renunciar al garaje.

La cama francesa es la protagonista: una cama doble esquinada en la parte trasera, accesible por un lado, con el baño justo al lado y un armario ropero generoso. No es tan cómoda para dos personas altas como las camas gemelas del MEG —el de la pared tiene que trepar por encima del otro—, pero a cambio libera un pasillo lateral más amplio y deja sitio para un garaje trasero de buen tamaño bajo la cama, accesible desde fuera. Sobre el salón delantero va la cama basculante, la tercera plaza para dormir, que se baja por la noche y desaparece de día sin robar ni un centímetro al salón. Es la solución clásica de Knaus para convertir una perfilada de dos en una de tres sin alargarla.

El salón delantero es amplio gracias a los 2,30 m de anchura: dinette en L con mesa extensible y asientos de cabina giratorios, con la cocina en el centro del vehículo y el frigorífico de gran capacidad. La calefacción es la Truma Combi 6 de gas, con el panel digital CP-Plus, y la dotación eléctrica incluye una batería de habitáculo de 80 Ah ampliable y preinstalación para una segunda. El depósito de aguas grises, de unos 95 litros, está en la media del segmento. Los acabados son los típicos de Knaus en esta franja: muebles en roble moderno, tapicerías textiles cuidadas y la iluminación LED indirecta que la marca lleva años refinando. La edición Platinum Selection, muy vista en los anuncios, añade el look exterior bitono, llantas de aleación, paragolpes pintados y un pack multimedia con Smart TV.

La base es el Fiat Ducato 2.2 Multijet de 120 CV (88 kW) con cambio manual de 6 velocidades, la motorización de acceso de la gama. Para una perfilada de 3.500 kg que rara vez viaja llena, es suficiente, aunque quien haga mucha autopista o puertos agradecerá la opción del 140 CV, que además puede combinarse con el cambio automático de 8 velocidades. La tracción es delantera, como en todo Ducato, y la homologación Euro 6e le da la etiqueta C de la DGT. De serie trae el paquete de seguridad de Fiat: ESP, control de tracción, ayuda al arranque en pendiente, control de crucero y airbags.

Con 6,95 m de largo y 2,30 m de ancho, el Sky TI 650 MF se mueve en la franja media-alta de las perfiladas: necesita sus metros en el área de servicio, pero a cambio ofrece un interior que se siente como un apartamento pequeño. Los 2.950 kg en vacío dejan un margen teórico de 550 kg hasta los 3.500 kg del carnet B, aunque una vez equipado con toldo, portabicicletas, aire acondicionado de techo y el depósito de agua lleno, ese margen se estrecha rápido: conviene pesar la unidad equipada antes de firmar. Knaus ofrece la homologación a pesos superiores para quien necesite más margen, con el correspondiente cambio de carnet.

Del precio en España no hay cifra oficial: Knaus no publica PVP. Como referencia, la tarifa alemana parte de 81.000 € para el 650 MF, lo que lo sitúa en la zona media de las perfiladas anchas, por encima del Sun TI de acceso y por debajo de las integrales Live. Sus rivales naturales son el Dethleffs Trend, el Bürstner Lyseo TD y el Weinsberg CaraCore en distribuciones equivalentes: el Knaus se defiende con la amplitud de sus 2,30 m y una de las redes de servicio más densas de Europa.

Verificación de fuentes: medidas (6,95 x 2,30 x 2,80 m), peso en vacío (2.950 kg), motorización Fiat 120 CV de serie con opción a 140 CV, batería de 80 Ah, aguas grises de 95 l y calefacción Truma Combi 6 proceden de la ficha de gama Knaus Sky TI y de anuncios documentados de unidades del 650 MF. La tarifa «desde 81.000 €» es la alemana; Knaus España no publica PVP. La carga útil de esta versión no está publicada: queda sin dato y no se calcula. Las fotos corresponden a un Knaus Sky TI 650 MF real.

Perfil de comprador: el Sky TI 650 MF encaja con parejas que viajan con un tercer ocupante ocasional, quieren la cama siempre hecha y valoran el garaje trasero y los 2,30 m de anchura interior. No encaja con quien necesite cuatro camas fijas ni con quien busque la perfilada más barata del mercado. Balance: la perfilada ancha más racional del catálogo Knaus para dos más uno, con el argumento de la cama francesa y el precio contenido de la gama, lastrada por la motorización de acceso algo justa para los 3.500 kg y por la opacidad de precios habitual en la marca.`,
    pros: [
      "Cama francesa trasera siempre hecha + cama basculante: 3 plazas para dormir en 6,95 m",
      "2,30 m de anchura: salón y pasillos más amplios que en una perfilada estrecha",
      "Garaje trasero de buen tamaño bajo la cama, accesible desde el exterior",
      "Edición Platinum Selection con look bitono y pack multimedia disponible",
      "3.500 kg de MMA: se conduce con el carnet B",
    ],
    contras: [
      "Sin PVP oficial en España: cada concesionario fija su precio",
      "El 120 CV de serie va justo con la célula cargada; el 140 CV es opcional",
      "La cama francesa obliga a trepar al ocupante de la pared",
      "Con toldo, portabicis y agua llena, el margen hasta los 3.500 kg se estrecha",
      "La marca no publica la carga útil de esta versión",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/knaus-sky-ti-650-mf-2026-precio-ficha-tecnica-ext.webp",
        alt: "Knaus Sky TI 650 MF, vista delantera tres cuartos",
        ancho: 1200,
        alto: 900,
      },
      {
        src: "/media/knaus-sky-ti-650-mf-2026-precio-ficha-tecnica-ext-2.webp",
        alt: "Knaus Sky TI 650 MF, vista trasera tres cuartos",
        ancho: 1200,
        alto: 900,
      },
      {
        src: "/media/knaus-sky-ti-650-mf-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Knaus Sky TI 650 MF, salón con vistas a la cama",
        ancho: 1600,
        alto: 1200,
      },
      {
        src: "/media/knaus-sky-ti-650-mf-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Interior del Knaus Sky TI 650 MF, cocina y salón",
        ancho: 1200,
        alto: 900,
      },
    ],
    analisisSlug: "knaus-sky-ti-650-mf-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato 2.2: revisión cada 2 años o 48.000 km (lo que ocurra antes, según plan Fiat)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 48.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Knaus (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Knaus",
    },
    euroncap: null,
    curiosidades:
      "El Sky TI tiene los días contados sobre base Fiat: para la temporada 2027 Knaus lo reinventa por completo sobre el Volkswagen Crafter, con vía más ancha, nueva batalla y cambio automático de serie, en tres distribuciones (650 MEG, 700 DEG y 700 DX). El 650 MF actual, por tanto, es la última oportunidad de comprar un Sky TI «clásico» sobre Ducato. Fuente: guía de novedades Knaus 2027 (https://www.outandaboutlive.co.uk/motorhomes/news/buying-advice/knaus-motorhomes-and-campervans-2027-essential-guide).",
    fuenteNombre: "Knaus — ficha de gama Sky TI (vía alpacacamping.de)",
    fuenteUrl: "https://www.alpacacamping.de/fahrzeuge/en/model/knaus-sky-ti/",
  },
  {
    id: "knaus-van-ti-650-meg-2026-precio-ficha-tecnica",
    marca: "Knaus",
    modelo: "Van TI 650 MEG",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 77890, // precio de lista en Alemania (77.890 €) de una unidad Vansation 650 MEG MY2026 con extras; Knaus España no publica PVP
    potenciaCv: 140, // Fiat Ducato 2.2 Multijet de 140 CV (103 kW); la unidad documentada lleva el cambio automático de 8v
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
    imagen: "/media/knaus-van-ti-650-meg-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial:
      "/media/knaus-van-ti-650-meg-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/knaus-van-ti-650-meg-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6960, // ficha técnica oficial Knaus 2026: 696 cm
    anchoMm: 2200, // ficha técnica oficial Knaus 2026: 220 cm
    altoMm: 2870, // ficha técnica oficial Knaus 2026: 287 cm
    pesoKg: 2875, // ficha técnica oficial Knaus 2026: masa en orden de marcha 2.875 kg (2.732–3.019 kg)
    mmaKg: 3500, // ficha técnica oficial Knaus 2026: 3.500 kg
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil de esta versión
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // ficha técnica oficial: 4 plazas de viaje
    plazasDormir: 3, // ficha técnica oficial: 3 camas (gemelas traseras + basculante)
    parNm: 350, // Fiat Ducato 2.2 Multijet 140: 350 Nm (dato oficial Fiat)
    traccion: "Delantera", // Fiat Ducato, tracción delantera
    emisionesCo2: null,
    aprox: [
      "Precio de lista en Alemania: 77.890 € (Vansation 650 MEG MY2026 con extras; el precio base sin extras es menor)",
    ],
    notas:
      "El precio (77.890 €) es el precio de lista en Alemania de una unidad documentada Vansation 650 MEG del año modelo 2026 con extras (cambio automático, paquete Energy Plus, pintura Lanzarote Grey); Knaus España no publica PVP y el precio final lo fija cada concesionario. Las medidas (6,96 x 2,20 x 2,87 m), la batalla (380 cm), la masa en orden de marcha (2.875 kg), el MMA (3.500 kg), las plazas (4/3) y la motorización Fiat 140 CV proceden de la ficha técnica oficial de Knaus para 2026 generada por su configurador. La carga útil de esta versión no está publicada: queda sin dato y no se calcula. La edición Vansation incluye de serie la puerta de garaje adicional, la puerta mosquitera y la decoración específica.",
    descripcion: `El Knaus Van TI 650 MEG Vansation es la demostración de que una perfilada estrecha no tiene por qué sentirse estrecha: con solo 2,20 metros de ancho —diez centímetros menos que una perfilada convencional—, el Van TI ofrece el interior de un 6,96 metros con camas gemelas traseras, cocina longitudinal de verdad y baño con pared giratoria. Es la apuesta de Knaus para quien viene de un camper y quiere dar el salto a la célula sin perder la agilidad en carreteras secundarias y pueblos. La edición Vansation, además, lo viste con un equipamiento cerrado a precio de derribo que lo convierte en uno de los semintegrales con mejor relación equipamiento-precio del mercado alemán.

Las camas gemelas traseras son el corazón de la distribución MEG: dos camas individuales longitudinales sobre un garaje de doble acceso, convertibles en una gran superficie de descanso con el somier extensible de serie. Dormir separado sin renunciar a dormir juntos, dicen los que las prueban, y además cada uno tiene su mesilla, su lectura y su ventana. El garaje bajo las camas, calefactado y con 150 kg de carga máxima, traga las bicicletas sin desmontar nada. Delante, el salón en L con mesa telescópica acoge a cuatro comensales, y la cocina longitudinal —larga y estrecha, como mandan los 2,20 m— monta tres fuegos, fregadero y un frigorífico de 142 litros con congelador separado, la medida generosa que los campers echan de menos. El baño usa la pared giratoria: se pliega para revelar el lavabo y se despliega para crear una ducha separada estanca, el truco que permite un baño completo en 2,20 m de ancho.

Un detalle técnico distingue al 650 MEG de sus hermanos de gama: mientras el 550 MF y el 640 MEG usan la Truma Combi 6 de gas, el 650 MEG monta de serie la Truma Combi 6D de gasóleo. En la práctica significa calentar la célula y el agua con el mismo depósito del motor, sin bombonas de gas que buscar en domingo por la tarde en Noruega, y con la autonomía que da un depósito de 90 litros. El panel digital CP-Plus gobierna la calefacción, y la edición Vansation añade de serie la puerta de garaje adicional de 80 x 110 cm en el lado izquierdo, la puerta mosquitera de una pieza, las pegatinas específicas y los emblemas en negro, además de los faros antiniebla con luz de giro y el paragolpes delantero en color carrocería.

La base es el Fiat Ducato 2.2 Multijet de 140 CV (103 kW) con 350 Nm de par, Euro 6e, con cambio manual de 6 velocidades de serie y el automático de 8 velocidades por convertidor de par como opción —la unidad documentada lo lleva—. La batalla larga de 380 cm, la mayor de la gama Van TI, le da una estabilidad en autopista que los 550 y 640 no tienen. El paquete de seguridad incluye ESP, control de tracción, ayuda al arranque en pendiente, control de crucero adaptativo en las versiones con paquete Care-Drive y cámara trasera. Con 3.500 kg de MMA se conduce con el carnet B, y los 2.875 kg de masa en orden de marcha dejan un margen honesto para equipar sin sustos, aunque con cuatro ocupantes conviene hacer números.

Con 6,96 m de largo y solo 2,20 m de ancho, el Van TI 650 MEG es notablemente más manejable que una perfilada ancha en carreteras de montaña y aparcamientos ajustados, a costa de unos pasillos más estrechos que se notan con cuatro personas dentro. La altura de 2,87 m lo mantiene por debajo de muchas barreras de 3 metros. El remolque de hasta 2.000 kg permite llevar un pequeño remolque o un portamotos de bola sin dramas.

Del precio en España no hay cifra oficial: Knaus no publica PVP. Como referencia, el precio de lista en Alemania de una unidad Vansation 650 MEG del año modelo 2026 con extras es de 77.890 €, y el precio base sin extras es menor, lo que lo coloca como una de las perfiladas de camas gemelas más asequibles de su tamaño. Sus rivales naturales son el Weinsberg CaraCore 650 MEG —su primo de grupo—, el Sunlight T 68 y el Carado T 447 en distribuciones equivalentes: el Knaus se defiende con la calefacción de gasóleo de serie, la batalla larga y el equipamiento cerrado de la edición Vansation.

Verificación de fuentes: medidas (6,96 x 2,20 x 2,87 m), batalla (380 cm), masa en orden de marcha (2.875 kg), MMA (3.500 kg), plazas (4 de viaje / 3 para dormir), motorización Fiat 140 CV y carga de remolque (2.000 kg) proceden de la ficha técnica oficial de Knaus para 2026 generada por su configurador. El precio de lista de 77.890 € con extras procede del anuncio de un concesionario alemán de una unidad Vansation 650 MEG MY2026. La calefacción diésel de serie en el 650 MEG frente al gas en sus hermanos está documentada en la ficha de gama. La carga útil no está publicada: queda sin dato y no se calcula. Las fotos corresponden a un Knaus Van TI 650 MEG Vansation real.

Perfil de comprador: el Van TI 650 MEG Vansation encaja con parejas que suben de un camper a su primera perfilada, quieren camas gemelas y calefacción de gasóleo para viajar todo el año, y valoran la manejabilidad de los 2,20 m de ancho. No encaja con quien necesite una cama doble isla ni con quien busque una perfilada ancha de 2,30 m con más pasillo. Balance: la perfilada estrecha más completa del catálogo Knaus, con el argumento diferencial de la Truma diésel de serie y la edición Vansation a precio cerrado, lastrada únicamente por la opacidad de precios en España y unos pasillos justos con cuatro ocupantes dentro.`,
    pros: [
      "Camas gemelas traseras convertibles en gran cama doble + garaje calefactado de doble acceso",
      "Truma Combi 6D de gasóleo de serie: calefacción sin depender de las bombonas",
      "Solo 2,20 m de ancho con interior de 6,96 m: agilidad de camper, espacio de perfilada",
      "Edición Vansation con equipamiento cerrado (puerta de garaje extra, mosquitera, decoración)",
      "Batalla larga de 380 cm: estabilidad superior en autopista; 3.500 kg con carnet B",
    ],
    contras: [
      "Sin PVP oficial en España: cada concesionario fija su precio",
      "Los 2,20 m de ancho se notan en los pasillos con cuatro personas dentro",
      "El cambio automático de 8 velocidades, muy recomendable, es una opción cara",
      "La marca no publica la carga útil de esta versión",
      "Altura de 2,87 m: hay que vigilar barreras y parkings con límite de 3 m",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/knaus-van-ti-650-meg-2026-precio-ficha-tecnica-ext.webp",
        alt: "Knaus Van TI 650 MEG Vansation, vista trasera tres cuartos",
        ancho: 4032,
        alto: 3024,
      },
      {
        src: "/media/knaus-van-ti-650-meg-2026-precio-ficha-tecnica-ext-2.webp",
        alt: "Knaus Van TI 650 MEG Vansation, vista trasera con puerta de garaje",
        ancho: 1024,
        alto: 768,
      },
      {
        src: "/media/knaus-van-ti-650-meg-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Knaus Van TI 650 MEG, cocina y puerta de célula",
        ancho: 1600,
        alto: 1200,
      },
      {
        src: "/media/knaus-van-ti-650-meg-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Interior del Knaus Van TI 650 MEG Vansation, camas gemelas traseras",
        ancho: 1428,
        alto: 1071,
      },
    ],
    analisisSlug: "knaus-van-ti-650-meg-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato 2.2: revisión cada 2 años o 48.000 km (lo que ocurra antes, según plan Fiat)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 48.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Knaus (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Knaus",
    },
    euroncap: null,
    curiosidades:
      "Vansation no es un acabado más: es la edición especial con la que Knaus empaqueta el equipamiento más pedido —puerta de garaje adicional de 80 x 110 cm, puerta mosquitera, pegatinas específicas, emblemas negros, faros antiniebla con luz de giro— a un precio cerrado inferior a la suma de las opciones por separado. En el 650 MEG, además, la calefacción de gasóleo Truma Combi 6D viene de serie, mientras que sus hermanos 550 MF y 640 MEG usan la versión de gas. Fuente: anuncio de concesionario con el desglose de la edición (https://www.truckscout24.es/main/search/index?search-word=knaus+van+ti+550+mf+vansation+%2Amodell+2026%2Atv-paket%2A) y ficha de gama (https://www.alpacacamping.de/fahrzeuge/en/model/knaus-van-ti/).",
    fuenteNombre: "Knaus — ficha técnica oficial 2026 (vía configurador knaus.com)",
    fuenteUrl:
      "https://www.premiummotorhomes.com/wp-content/uploads/2025/10/KNAUS-VAN-TI-650-MEG-2026-VANSATION-KDDEKQT.pdf",
  },
];
