// Autocaravanas Hymer — lote Merlín 4 (19/10/2026).
// Fuentes: datos técnicos oficiales de hymer.com para el Tramp S 585 (precio base 109.900 €
// en Alemania, Sprinter 315 CDI 110 kW/150 CV Euro VI-E, cotas 709/229/298 cm, MRO 2.991 kg,
// MMA 3.500 kg, 4-5 plazas, 2-5 camas), nota de prensa oficial de Hymer del 18/08/2021 sobre
// el nuevo layout Tramp S 585, artículo de campingcarlesite.com (08/2021) con fotos oficiales
// de prensa de Hymer GmbH und Co. KG.
// Verificado el 19/10/2026.
// Notas honestas: el precio de 109.900 € es el PVP base oficial para Alemania (Hymer no
// publica tarifa oficial para España). Las 4 fotos SON oficiales: fotos de prensa de Hymer
// cedidas a campingcarlesite.com. La marca no publica la carga útil como cifra
// (cargaUtilKg = null; prohibido calcularla). Consumo, par motor y emisiones: no publicados.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_HYMER_M4: Autocaravana[] = [
  {
    id: "hymer-tramp-s-585-2026-precio-ficha-tecnica",
    marca: "Hymer",
    modelo: "Tramp S 585",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 109900, // PVP base oficial Hymer Alemania (hymer.com); no hay tarifa oficial ES
    potenciaCv: 150, // Mercedes Sprinter 315 CDI, 110 kW/150 CV, Euro VI-E (hymer.com)
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro VI-E sobre Mercedes Sprinter
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/hymer-tramp-s-585-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/hymer-tramp-s-585-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/hymer-tramp-s-585-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7090, // hymer.com: 709 cm
    anchoMm: 2290, // hymer.com: 229 cm
    altoMm: 2980, // hymer.com: 298 cm
    pesoKg: 2991, // masa en orden de marcha oficial (hymer.com)
    mmaKg: 3500, // hymer.com
    carnetNecesario: "B", // mmaKg <= 3500
    cargaUtilKg: null, // Hymer no publica la carga útil; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4-5 plazas según configuración; 4 de serie
    plazasDormir: 4, // 2-5 camas según configuración: gemelas + basculante opcional + transformación del salón
    parNm: null,
    traccion: "trasera", // base Mercedes Sprinter de tracción trasera
    emisionesCo2: null,
    aprox: ["precioDesde"], // precio oficial Alemania; en España puede diferir
    notas:
      "Cotas (709/229/298 cm), motor Mercedes Sprinter 315 CDI 110 kW/150 CV Euro VI-E, MRO 2.991 kg, MMA 3.500 kg, 4-5 plazas y 2-5 camas: datos técnicos oficiales de hymer.com (verificados 19/10/2026). Precio base 109.900 €: PVP oficial para Alemania; Hymer no publica tarifa oficial para España. Las 4 fotos son oficiales (prensa de Hymer GmbH und Co. KG vía campingcarlesite.com). Carga útil, consumo, par motor y emisiones: no publicados; quedan en null.",
    curiosidades:
      "Cuando Hymer presentó el Tramp S 585 en agosto de 2021, la novedad que más destacó la prensa no fue el chasis Mercedes ni las camas gemelas, sino el baño: el 585 renuncia a la ducha independiente para montar el «baño vario» con tabique pivotante, un sistema ya probado en otros modelos de la marca pero completamente rediseñado para esta distribución, que permite conservar un salón face-to-face amplio en solo 7,09 metros. Fuente: campingcarlesite.com, «HYMER Tramp S 585 : un nouveau modèle pour la gamme d'accès sur Mercedes» (https://www.campingcarlesite.com/camping-car-neuf/50197-hymer-tramp-s-585-un-nouveau-modele-pour-la-gamme-dacces-sur-mercedes), con fotos oficiales de Hymer.",
    descripcion: `El Hymer Tramp S 585 es la perfilada con la que Hymer —la marca que inventó la autocaravana moderna— democratiza el acceso a su mundo sobre base Mercedes: 7,09 metros de largo, camas gemelas traseras y el prestigio de la estrella en el morro, con un precio base oficial en Alemania de 109.900 euros que lo sitúa como la puerta de entrada a las perfiladas Hymer sobre Sprinter. Presentado en agosto de 2021 como gran novedad de la gama de acceso, el 585 lleva ya varias temporadas demostrando que «acceso» en Hymer no significa «básico».

    En medidas y habitabilidad, el Tramp S 585 ofrece 709 cm de largo, 229 cm de ancho y 298 cm de alto, con una masa en orden de marcha de 2.991 kg para una MMA de 3.500 kg: queda dentro del carnet B con un margen de carga razonable para su categoría. La distribución es la clásica ganadora del segmento: salón delantero face-to-face junto a la cabina del Sprinter, cocina central bien equipada, baño vario con tabique pivotante y, al fondo, las camas gemelas longitudinales. Es el esquema que más parejas eligen cuando quieren una autocaravana «para siempre»: cada uno duerme en su cama sin molestar al otro, el salón face-to-face es el más cómodo para comer y conversar, y la cocina central queda a mano tanto desde el salón como desde las camas. La decisión más comentada del 585 es el baño: en lugar de una ducha independiente que habría robado medio metro al salón, Hymer monta su «baño vario» con tabique pivotante, completamente rediseñado para este modelo, que ofrece WC y ducha en un espacio compacto sin sacrificar la amplitud de la zona de día.

    En tecnología y equipamiento, el Tramp S 585 juega con las cartas de la base Mercedes: el Sprinter aporta su chasis de largueros, una cabina de turismo con los sistemas de asistencia de la estrella y una imagen que impone respeto en cualquier camping. La célula Hymer suma su construcción PUAL —espuma de poliuretano entre aluminios, sin madera estructural—, mobiliario de diseño contemporáneo con superficies de alto brillo combinadas con maderas nobles, iluminación LED ambiental y los detalles que distinguen a la marca: armarios con cierre suave, claraboyas panorámicas y una cocina con frigorífico, fregadero y fuegos dimensionados para cocinar de verdad. La cama basculante eléctrica opcional sobre el salón y la transformación del face-to-face en cama permiten escalar la capacidad nocturna hasta las cinco plazas cuando la familia crece o los amigos se apuntan.

    En camas y plazas, el 585 homologa 4-5 plazas para viajar y 2-5 para dormir según la configuración: de serie, las camas gemelas traseras para dos; con la cama basculante eléctrica opcional, dos más; y con la transformación del salón, la quinta. Es una escalabilidad inteligente: se compra como el perfecto «dos plazas con todo hecho» —las gemelas son las camas que mejor descanso dan en ruta— y se adapta a las necesidades cambiantes sin cambiar de vehículo. Las gemelas, además, dejan entre ellas el paso al garaje trasero, accesible desde dentro y desde fuera, para el material voluminoso.

    En mecánica, el Mercedes Sprinter 315 CDI con 110 kW (150 CV) Euro VI-E es la motorización de acceso a la gama Tramp S sobre Mercedes: un cuatro cilindros moderno, silencioso y con par suficiente para mover con soltura los 3.500 kg de MMA. La tracción trasera del Sprinter —la configuración noble para un vehículo de este peso— proporciona una motricidad y una estabilidad en curva superiores a las de las bases de tracción delantera, especialmente apreciables con el vehículo cargado o con remolque. El cambio, la dirección y los asistentes son los del Sprinter de última generación: control de crucero adaptativo, asistente de viento lateral y frenada de emergencia forman parte del arsenal de serie u opcional según el acabado. Hymer no publica el consumo, pero el 150 CV es el equilibrio razonable entre prestaciones y eficiencia para este conjunto.

    En precio y red comercial en España, el PVP base oficial en Alemania parte de 109.900 euros; Hymer no publica una tarifa oficial para España, por lo que el precio final se configura con el distribuidor —y en este segmento, la configuración importa mucho: cambio automático 9G-Tronic, paquetes de asistencia, toldo, paneles solares y la cama basculante suman rápidamente—. La red de concesionarios oficiales Hymer en España es amplia y la marca mantiene un valor de reventa de los más altos del mercado: un Tramp S de ocasión con pocos años se vende solo. Es el segmento donde la compra se plantea también como inversión en tranquilidad.

    Cómo lo verificamos: las cotas (709 x 229 x 298 cm), el motor Sprinter 315 CDI de 110 kW/150 CV Euro VI-E, la MRO (2.991 kg), la MMA (3.500 kg), las plazas (4-5) y las camas (2-5) proceden de los datos técnicos oficiales publicados por Hymer en hymer.com, verificados el 19 de octubre de 2026. El precio base de 109.900 € es el PVP oficial para Alemania publicado por la marca. La presentación del modelo en agosto de 2021 y el baño vario con tabique pivotante rediseñado proceden del artículo de campingcarlesite.com, que reproduce fotos oficiales de prensa de Hymer GmbH und Co. KG. Los datos no publicados (carga útil, consumo, par, emisiones) quedan en null.

    Para quién es: el Tramp S 585 encaja con parejas que quieren estrenar Hymer sobre Mercedes sin saltar a los 130.000 euros: viajeros de larga distancia que valoran la fiabilidad del Sprinter, el descanso de las camas gemelas y el valor de reventa de la marca. Es ideal como autocaravana «definitiva» para dos, con capacidad ocasional para más. No es para quien necesite cinco camas de forma permanente (hay distribuciones familiares más adecuadas), para quien busque el precio más bajo del segmento —la estrella se paga—, ni para quien quiera una ducha independiente separada: el baño vario es una solución inteligente, pero es lo que es.`,
    pros: [
      "Base Mercedes Sprinter 315 CDI con tracción trasera: la referencia en chasis del segmento",
      "Camas gemelas traseras + basculante opcional: de 2 a 5 camas según la etapa de la vida",
      "Baño vario con tabique pivotante rediseñado: ducha y WC sin robar medio metro al salón",
      "Salón face-to-face: el más cómodo para comer y conversar en 7,09 metros",
      "Valor de reventa de los más altos del mercado: la marca Hymer se vende sola de ocasión",
    ],
    contras: [
      "Precio base de 109.900 € en Alemania y sin tarifa oficial para España: la configuración encarece rápido",
      "Motor de acceso de 150 CV: suficiente, pero los más exigentes querrán el 170 CV",
      "Sin ducha independiente: el baño vario obliga a plegar y proteger antes de ducharse",
      "MMA de 3.500 kg justos: con 4-5 ocupantes y opcionales hay que vigilar la carga útil",
      "7,09 m y 2,98 m de alto: ni discreto ni apto para todos los parkings",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/hymer-tramp-s-585-2026-precio-ficha-tecnica-oficial.webp", alt: "Hymer Tramp S 585, vista exterior sobre Mercedes Sprinter", ancho: 1000, alto: 667 },
      { src: "/media/hymer-tramp-s-585-2026-precio-ficha-tecnica-interior1.webp", alt: "Hymer Tramp S 585, camas gemelas traseras", ancho: 1000, alto: 667 },
      { src: "/media/hymer-tramp-s-585-2026-precio-ficha-tecnica-interior2.webp", alt: "Hymer Tramp S 585, cocina", ancho: 1000, alto: 667 },
      { src: "/media/hymer-tramp-s-585-2026-precio-ficha-tecnica-detalle.webp", alt: "Hymer Tramp S 585, armario ropero", ancho: 667, alto: 1000 },
    ],
    analisisSlug: "hymer-tramp-s-585-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Mercedes Sprinter: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Mercedes Sprinter)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 450 },
        { nombre: "Revisión célula Hymer (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 280 },
      ],
    },
  },
];
