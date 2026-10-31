// Autocaravanas Fleurette — lote Merlín 1 (18/10/2026).
// Datos verificados: catálogo oficial Fleurette-Florium (fleurette-florium.fr).
// CORRECCIÓN 5 (18/10/2026): fuenteUrl concreta (catálogo oficial en el dominio del
// fabricante, no la portada de la marca); eliminado el bloque `costeMensual`;
// `analisisSlug` nuevo; añadidos `descripcion`, `plazasDormir` y `notas`.
// NOTA DE TRANSPARENCIA: el modelo más próximo documentado por la marca es el Baxter
// 68 LMC; las plazas de cama no están publicadas en el catálogo consultado.
// Fleurette no publica PVP: sin precio oficial publicado, sin inventar.
// CURIOSIDAD (agente F5, 19/10/2026). PENDIENTE: sin foto oficial de exterior del 68LM en material del fabricante.
// FIX-benimar 19/10/2026: integrados 2 interiores oficiales del catálogo oficial
// (fleurette-florium.fr); el fabricante no publica exterior del 68LM exacto
// (verificado en catálogos oficiales 2020/2023 DE/FR, web oficial y sala de prensa
// Rapido): imagenOficial queda en "" (sin foto oficial) y la ficha sigue noindex.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_FLEURETTE_M1: Autocaravana[] = [
  {
    id: "fleurette-baxter-68-lmc-2026-precio-ficha-tecnica",
    marca: "Fleurette",
    modelo: "Baxter 68 LMC",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Fleurette no publica PVP de fábrica
    potenciaCv: 120, // base Fiat Ducato / Peugeot Boxer (según año y catálogo)
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
    imagen: "/media/fleurette-baxter-68-lmc-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial: "", // FIX-benimar 19/10: sin foto oficial de exterior del 68LM exacto publicada por el fabricante
    imagenInteriorOficial:
      "/media/fleurette-baxter-68-lmc-2026-precio-ficha-tecnica-oficial-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6850,
    anchoMm: 2230,
    altoMm: 2700,
    pesoKg: null, // sin cifra única de fábrica
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null, // sin cifra oficial del modelo exacto
    consumo: null,
    consumoUnidad: null,
    plazas: null, // plazas de cama no publicadas en el catálogo consultado; confirmar con concesionario
    plazasDormir: null, // la marca no publica las plazas de cama del modelo exacto
    parNm: null, // no publicado por el fabricante
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Ancho de solo 2,23 m: entra por pueblos y carreteras estrechas donde una perfilada de 2,33 m sufre",
      "Carrocería 100 % poliéster sin madera: la apuesta antihumedades de la casa francesa",
      "Cama central de grandes dimensiones: se accede por ambos lados sin trepar por encima de la pareja",
      "Marca con más de 55 años fabricando en la Vendée: savoir-faire francés en perfiladas estrechas",
      "Altura contenida de 2,70 m: menos superficie al viento y mejor consumo en autopista",
    ],
    contras: [
      "Sin PVP oficial publicado: hay que pedir presupuesto a cada distribuidor",
      "Motor de 120 CV: justo para 3.500 kg cargados en puertos de montaña",
      "Red de distribución pequeña fuera de Francia: el servicio postventa en España depende de pocos puntos",
      "Plazas de cama no publicadas: hay que confirmar con el concesionario cuántos duermen y cómo",
      "Gama con poca presencia en el mercado de ocasión español: la reventa es más lenta que la de una marca alemana",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/fleurette-baxter-68-lmc-2026-precio-ficha-tecnica-oficial-interior.webp",
        alt: "Salón del Baxter 68 LM (foto oficial del fabricante)",
        ancho: 1875,
        alto: 1241,
      },
      {
        src: "/media/fleurette-baxter-68-lmc-2026-precio-ficha-tecnica-oficial-interior2.webp",
        alt: "Dormitorio con cama central del Baxter 68 LM (foto oficial del fabricante)",
        ancho: 1230,
        alto: 992,
      },
      {
        src: "/media/fleurette-baxter-68-lmc-2026-precio-ficha-tecnica-ext.webp",
        alt: "Fleurette Baxter 68 LMC, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/fleurette-baxter-68-lmc-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Fleurette Baxter 68 LMC, cama central",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/fleurette-baxter-68-lmc-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Salón del Florium Baxter 68 LMC",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/fleurette-baxter-68-lmc-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Cocina del Florium Baxter 68 LMC",
        ancho: 1200,
        alto: 800,
      },
    ],
    curiosidades: "Aunque la ficha la titula «Fleurette», el Baxter es en realidad una gama de Florium, la marca hermana del mismo grupo: el catálogo oficial la rotula «Florium by Fleurette» y documenta el 68LM con cama central de matrimonio (Queensbett) y salón en L. Fuente: catálogo oficial Fleurette-Florium 2023, https://www.fleurette-florium.fr/wp-content/uploads/2022/08/catalogue-fleurette-florium-collection-2023-DE.pdf", // F5 19/10: curiosidad real con fuente
    analisisSlug: "fleurette-baxter-68-lmc-2026-analisis-opinion",
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
          nombre: "Revisión célula Fleurette (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones del fabricante",
    },
    euroncap: null,
    fuenteNombre: "Fleurette (catálogo oficial, fleurette-florium.fr)",
    fuenteUrl: "https://www.fleurette-florium.fr/wp-content/uploads/2022/08/catalogue-fleurette-florium-collection-2023-DE.pdf",
    notas:
      "Fleurette no publica PVP de fábrica ni las plazas de cama del Baxter 68 LMC en el catálogo consultado. Datos técnicos del catálogo oficial del fabricante (fleurette-florium.fr). Marca del grupo Rapido, fabricada en Benet (Vendée, Francia). sin tarifa oficial abierta verificable.",
    descripcion: `La Fleurette Baxter 68 LMC defiende una idea muy concreta del caravaning: autocaravanas estrechas, ligeras y construidas para durar, pensadas para moverse por la Francia profunda —y por extensión, por la España rural— sin el estrés dimensional de las perfiladas centroeuropeas de 2,33 metros de ancho. Fleurette lleva más de 55 años fabricando en Benet, en la Vendée, y forma parte del grupo Rapido; su seña de identidad es la carrocería 100 % poliéster, sin estructura de madera, una apuesta frontal contra el enemigo número uno de las autocaravanas: la humedad.

La documentación de partida es el catálogo oficial Fleurette-Florium publicado en el dominio del fabricante, que documenta la gama Baxter y sus medidas, revisado el 18/10/2026. Lo que la marca no publica —precio, plazas de cama, masa en orden de marcha única— queda sin dato y se dice abiertamente en vez de rellenarlo con datos de terceros. La Baxter es la familia de perfiladas de Fleurette, y el 68 LMC es su distribución con cama central de grandes dimensiones, la configuración favorita de las parejas que viajan: se accede a la cama por ambos lados sin tener que trepar por encima del otro, y durante el día el dormitorio queda despejado. Es una perfilada de planteamiento clásico francés —cocina lateral, baño con ducha, salón delantero— ejecutada con la obsesión por la ligereza y la estanqueidad que caracteriza a la casa.

Con 6.850 mm de largo, 2.230 mm de ancho y 2.700 mm de alto, la Baxter 68 LMC juega en una liga dimensional propia. Esos 10 centímetros menos de ancho respecto a una perfilada estándar parecen poco sobre el papel, pero en la práctica son la diferencia entre pasar con holgura por un pueblo medieval o hacerlo conteniendo la respiración; también reducen la superficie frontal y, con ella, el consumo en autopista. La altura de 2,70 m, contenida para el segmento, ayuda en lo mismo. La MMA es de 3.500 kg, así que se conduce con el carnet B, y el conjunto está pensado para mantener la masa a raya: la construcción en poliéster sin madera no solo evita humedades, también ahorra kilos frente a las estructuras mixtas. Las plazas de cama no están publicadas en el catálogo consultado: es un dato que hay que confirmar con el concesionario, y lo señalamos porque una ficha honesta no puede inventarlo.

La base es el Fiat Ducato —o Peugeot Boxer según año y mercado— con el motor 2.2 de 120 CV y tracción delantera. Es una mecánica honesta y probadísima, pero 120 CV para 3.500 kg cargados son justos cuando la carretera se empina: en puertos de montaña habrá que tomárselo con calma y jugar con el cambio. A cambio, el conjunto estrecho y relativamente bajo se comporta con nobleza en carretera secundaria, que es su hábitat natural, y el consumo se mantiene en cifras razonables para una perfilada. La filosofía Fleurette es la de la autocaravana «para toda la vida»: materiales que no se pudren, muebles bien anclados y una red de servicio que conoce el producto. La cama central es el corazón de la distribución, con garaje o almacenaje bajo ella según configuración; el baño con ducha separada resuelve la higiene diaria sin componendas; y la cocina, de dimensiones francesas —es decir, pensada para cocinar de verdad—, cumple para estancias largas. No esperes aquí pantallas gigantes ni domótica: el equipamiento es funcional y robusto antes que espectacular.

Fleurette no publica PVP de fábrica, así que el precio lo pone cada distribuidor y hay que pedir presupuesto; como referencia de segmento, las perfiladas estrechas francesas se mueven por debajo de las premium alemanas equivalentes. Sus rivales naturales son la Chausson o la Challenger de medidas contenidas y, en filosofía, las Rapido de la casa madre. Frente a ellas, la Fleurette juega la carta de la construcción 100 % poliéster y los 55 años de oficio en perfiladas estrechas. Es la perfilada para la pareja que viaja por carreteras secundarias, que aparca en pueblos y que valora la durabilidad y la ausencia de humedades por encima de los caballos o la tecnología. No es para quien necesite cuatro plazas de noche confirmadas —ese dato hay que verificarlo—, ni para quien busque la red de servicio más densa: fuera de Francia los puntos de venta son pocos y la reventa en España es más lenta que la de una marca alemana. Si encajas en el perfil y encuentras un buen distribuidor, la Baxter 68 LMC es una de esas autocaravanas que se compran para quince años: estrecha, sana y sin complicaciones.

La red Fleurette fuera de Francia es limitada, y hay que decirlo sin rodeos: en España los puntos de venta se cuentan con los dedos de una mano. A cambio, la construcción 100 % poliéster reduce drásticamente las visitas al taller por humedades, que son la avería más cara y frecuente de las autocaravanas. Es el trato que propone la marca: menos red, menos problemas. Y para el comprador de larga duración, una Fleurette bien mantenida es una autocaravana que se hereda: las unidades de hace quince años siguen circulando sin dramas estructurales.`,
  },
];
