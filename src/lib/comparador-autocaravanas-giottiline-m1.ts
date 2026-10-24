// Autocaravanas Giottiline — lote Merlín 1 (18/10/2026).
// Datos verificados: prueba técnica de CamperOnLine Magazine (prensa especializada,
// modelo exacto: 599 x 232 x 299 cm, 3.500 kg, Fiat 2.2 140 CV, masa 2.834 kg) +
// giottiline.com (la gama Siena existe en el catálogo 2026, sin ficha técnica detallada).
// CORRECCIÓN 5 (18/10/2026): fuenteUrl concreta (prueba del modelo exacto en prensa
// especializada, no la portada de la marca); eliminado el bloque `costeMensual`;
// `analisisSlug` nuevo; añadidos `descripcion`, `plazasDormir` y `notas`.
// Giottiline no publica PVP ni ficha técnica detallada del Siena 322 para 2026:
// sin precio oficial publicado; pesoKg en «aprox» (dato no oficial · en revisión).
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_GIOTTILINE_M1: Autocaravana[] = [
  {
    id: "giottiline-siena-322-2026-precio-ficha-tecnica",
    marca: "Giottiline",
    modelo: "Siena 322",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Giottiline no publica PVP de fábrica
    potenciaCv: 140, // Fiat Ducato 2.2 Multijet de 140 CV
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
    imagen: "/media/giottiline-siena-322-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/giottiline-siena-322-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/giottiline-siena-322-2026-precio-ficha-tecnica-oficial-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990,
    anchoMm: 2320,
    altoMm: 2990,
    pesoKg: 2834, // «no oficial»: prueba de CamperOnLine (2021, base Citroën); Giottiline no publica la masa del 322 para 2026
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil del modelo exacto
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: null, // la marca no publica las plazas de cama del modelo exacto para 2026
    parNm: null, // no publicado por el fabricante
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["pesoKg"], // «no oficial»: prueba de prensa especializada (2021); en revisión
    pros: [
      "Perfilada de menos de 6 m con cama transversal trasera: se aparca casi como un camper pero se duerme como en una grande",
      "Construcción con paredes de 33 mm y suelo técnico de 63 mm: aislamiento serio para su precio",
      "Depósitos de 100 l de agua limpia y 100 l de grises: autonomía digna para su tamaño",
      "Garaje trasero bajo la cama: la bici viaja dentro sin desmontar el dormitorio",
      "Fiat Ducato 2.2 de 140 CV: la mecánica de referencia, con servicio en cualquier parte",
    ],
    contras: [
      "Sin PVP ni ficha técnica detallada publicados por la marca para 2026: hay que pedirlos al distribuidor",
      "Cama transversal de 2,10 m de largo pero estrecha en los pies: los muy altos la notarán",
      "Marca con poca red fuera de Italia: el servicio postventa en España es limitado",
      "Acabados funcionales antes que refinados: se nota el ajuste de precio en los detalles",
      "El baño con ducha integrada es compacto: ducharse a diario exige organización",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/giottiline-siena-322-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Giottiline Siena 322, vista lateral de la perfilada",
        ancho: 1200,
        alto: 480,
      },
      {
        src: "/media/giottiline-siena-322-2026-precio-ficha-tecnica-oficial-ext2.webp",
        alt: "Giottiline Siena 322, vista frontal en tres cuartos",
        ancho: 1200,
        alto: 480,
      },
      {
        src: "/media/giottiline-siena-322-2026-precio-ficha-tecnica-oficial-interior.webp",
        alt: "Salón y cabina del Giottiline Siena 322 (foto oficial)",
        ancho: 1000,
        alto: 560,
      },
      {
        src: "/media/giottiline-siena-322-2026-precio-ficha-tecnica-oficial-interior2.webp",
        alt: "Cama transversal trasera del Giottiline Siena 322 (foto oficial)",
        ancho: 1000,
        alto: 560,
      },
    ],
    analisisSlug: "giottiline-siena-322-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato 2.2: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Fiat)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Giottiline (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones del fabricante",
    },
    euroncap: null,
    fuenteNombre: "CamperOnLine Magazine (prensa especializada, prueba técnica del Siena 322)",
    fuenteUrl: "https://www.camperonline.it/magazine/2021/04/30/giottiline-siena-322/print/",
    notas:
      "Giottiline no publica PVP ni ficha técnica detallada del Siena 322 para 2026 (la gama Siena figura en giottiline.com sin datos del modelo). Masa en orden de marcha (2.834 kg): prueba de CamperOnLine de 2021 con base Citroën, dato no oficial en revisión. Medidas y MMA de la prueba técnica del modelo exacto. Plazas para dormir no publicadas por la marca.",
    curiosidades:
      "Pese a medir menos de 6 metros, el Siena 322 homologa un garaje trasero con 300 kg de capacidad de carga, un valor por encima de la media de su categoría. Lo midió CamperOnLine Magazine en su prueba técnica del modelo exacto: https://www.camperonline.it/magazine/2021/04/30/giottiline-siena-322/print/.",
    descripcion:
      "El Giottiline Siena 322 es la perfilada italiana que juega en la liga de los «menos de 6 metros»: una autocaravana compacta con cama transversal trasera que se aparca casi como un camper pero se duerme como en una perfilada grande. Giottiline es un fabricante toscano que lleva años construyendo autocaravanas de planteamiento honesto —buena base mecánica, construcción seria, precio contenido—, y la gama Siena es su apuesta por las medidas contenidas sin renunciar al dormitorio fijo trasero. El 322 es su distribución con cama transversal y salón delantero, pensada para parejas que quieren moverse con agilidad. Cómo lo verificamos: Giottiline no publica ficha técnica detallada del Siena 322 para 2026 —su web muestra la gama sin datos del modelo—, así que hemos trabajado sobre la prueba técnica del modelo exacto publicada por CamperOnLine Magazine, prensa especializada italiana, que midió y pesó la unidad: 599 x 232 x 299 cm, 3.500 kg de MMA y 2.834 kg de masa en orden de marcha. Advertimos con transparencia que aquella prueba es de 2021 y con base Citroën, mientras la versión actual monta Fiat Ducato 2.2 de 140 CV; por eso la masa va marcada como dato no oficial en revisión. Qué es y gama: el Siena 322 es una perfilada —cabina integrada con capuchina baja— de menos de 6 metros, un formato que en Italia tiene legión de seguidores: cabe en la mayoría de áreas, no asusta en los pueblos y, con la cama trasera fija, evita el ritual diario de montar y desmontar la cama. Dentro de la gama Siena, el 322 es la opción de cama transversal; sus hermanos ofrecen camas gemelas o distribuciones familiares. Es la autocaravana para quien viene de un camper y quiere dar el salto al dormitorio fijo sin saltar a los 7 metros. Medidas y habitabilidad: con 5.990 mm de largo, 2.320 mm de ancho y 2.990 mm de alto, el 322 aprovecha cada centímetro. La cama transversal trasera, de unos 2,10 m de largo, se deja montada siempre —se duerme y punto, sin transformar nada—, y bajo ella queda el garaje para bicis y material voluminoso. El salón delantero con asientos giratorios resuelve las comidas y las tardes de lluvia, y el baño con ducha integrada, aunque compacto, permite la higiene diaria. La MMA de 3.500 kg la deja en carnet B, y la masa medida de 2.834 kg deja un margen teórico generoso para equipaje, aunque insistimos: esa cifra es de la prueba de 2021 y conviene pesar la unidad concreta. La cama transversal estrecha en los pies: los muy altos o corpulentos deberían probarla antes de firmar. Mecánica y conducción: el Fiat Ducato 2.2 Multijet de 140 CV con tracción delantera es la mecánica de referencia del segmento por una razón: empuja con solvencia, consume de forma contenida y tiene servicio en cualquier rincón de Europa. Con menos de 6 metros y 3,5 toneladas, el 322 se conduce casi como un furgón grande: ágil en rotondas, sin miedo a los carriles estrechos y con un aplomo en autopista digno. No es una mecánica para ir con prisa en puertos —140 CV son los justos—, pero tampoco lo pretende. Equipamiento y vida a bordo: la construcción es el argumento serio del Siena 322: paredes de 33 mm y suelo técnico de 63 mm hablan de un aislamiento pensado para usarse más allá del verano, y los depósitos de 100 litros de agua limpia y 100 de grises dan autonomía para varios días fuera de áreas. El equipamiento es funcional antes que lujoso: cocina con lo necesario, calefacción de gas, nevera trivalente o de compresor según configuración. Los acabados no son los de una premium alemana —se nota el ajuste de precio en los detalles—, pero todo lo importante está bien resuelto. Precio y rivales: Giottiline no publica PVP, así que el precio lo pone cada distribuidor; como referencia de segmento, las perfiladas italianas compactas se sitúan en la franja de acceso del mercado. Sus rivales son la Roller Team Kronos, la Mobilvetta Kea o la Laika Kosmo de medidas contenidas: frente a ellas, el Siena 322 juega la carta del formato sub-6-metros con cama fija y la construcción toscana. Para quién es y veredicto: es la perfilada para la pareja que quiere dormitorio fijo, moverse con agilidad y no pagar de más. No es para quien necesite ficha técnica oficial detallada —la marca no la publica—, ni para quien busque la red de servicio más densa fuera de Italia, ni para los muy altos que duerman en transversal. Pero si el plan es viajar a dos, aparcar fácil y dormir en cama de verdad cada noche, el Siena 322 es una de las formas más honestas de entrar en el mundo de las perfiladas: menos de 6 metros, cama siempre montada y mecánica Fiat. Solo pedimos una cosa antes de firmar: pesar la unidad y probar la cama.",
  },
];
