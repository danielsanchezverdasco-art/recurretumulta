// Autocaravanas McLouis — lote Merlín 4 (19/10/2026).
// Fuentes: ficha oficial de mclouis.com (PDF Mc4-373-2026), listino oficial Italia 2026 Rev.1
// (vía camperonline.it), derbymotorhomes.com, caravanclub.co.uk, findmyleisurevehicle.co.uk.
// Verificado el 19/10/2026.
// Notas honestas: el modelo asignado "mclouis-mc4-261" NO existe en la gama 2026 (la Serie 300
// es 321/360/365/373/379/381); se sustituye por el McLouis MC4 373 real. McLouis no publica
// carga útil (cargaUtilKg: null, corrección aplicada por orden de proyecto). Precio oficial ES
// del MC4 373: no publicado; se aplica el Listino oficial McLouis Italia 2026 (67.490 €, «aprox»). Precio del Fusion 367: no
// publicado para 2026 (null). Fotos del Fusion 367: ninguna oficial disponible; 4 de
// concesionarios británicos verificadas como modelo exacto.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_MCLOUIS_M4: Autocaravana[] = [
  {
    id: "mclouis-mc4-373-2026-precio-ficha-tecnica",
    marca: "McLouis",
    modelo: "MC4 373",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 67490, // Listino oficial McLouis Italia 2026, IVA incl.
    potenciaCv: 140, // Fiat Ducato 2.2 MultiJet 140 CV (ficha oficial; opción Ford 130 CV)
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
    imagen: "/media/mclouis-mc4-373-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/mclouis-mc4-373-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/mclouis-mc4-373-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7450, // ficha oficial mclouis.com
    anchoMm: 2350, // ficha oficial mclouis.com
    altoMm: 2950, // ficha oficial mclouis.com (altura interior 208 cm)
    pesoKg: null, // la ficha oficial no declara MRO
    mmaKg: 3500, // ficha oficial mclouis.com
    carnetNecesario: "B", // MMA 3.500 kg
    cargaUtilKg: null, // la marca no publica carga útil
    consumo: null,
    consumoUnidad: null,
    plazas: 5, // ficha oficial mclouis.com
    plazasDormir: 5, // ficha oficial mclouis.com
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: ["precioDesde"],
    notas:
      "Modelo SUSTITUTO: el 'mclouis-mc4-261' asignado no existe (gama MC4 Serie 300 2026: 321, 360, 365, 373, 379 y 381). Largo 7.450 mm, ancho 2.350 mm, alto 2.950/2.080 mm, 5 homologados y 5 plazas de cama, MMA 3.500 kg: ficha oficial https://www.mclouis.com/italia/wp-content/uploads/sites/2/2024/06/Mc4-373-2026.pdf. Motores: Fiat Ducato 2.2 MJ 140 CV o Ford Transit 2.0 EcoBlue 130 CV (misma ficha oficial). Paso 3.954 mm, carrocería EXPS y PVP Italia 67.490 €: listino oficial Italia 2026 Rev.1 (camperonline.it, consultado 19/10/2026). Fotos: 3 oficiales de mclouis.com (interiores) + 1 exterior limpio del MC4 373 exacto (insignia «MC4 373» visible, sin marcas de agua ni rótulos, verificado 19/10/2026). La marca no publica exterior oficial del 373: en su biblioteca oficial (mclouis.com) solo hay interiores y la imagen principal de la ficha oficial es un plano de implantación (verificado 19/10/2026). Precio: PVP de Italia del Listino oficial McLouis Italia 2026 (precios recomendados, IVA 22% incl., válido desde 01/09/2025), Serie 300: MC4 373 = 67.490 €; no hay tarifa oficial para España.",
    curiosidades:
      "El MC4 373 se ofrece con dos mecánicas distintas a elegir: Fiat Ducato 2.2 MultiJet de 140 CV o Ford Transit 2.0 EcoBlue de 130 CV, algo poco habitual en una misma ficha de modelo (fuente: ficha oficial https://www.mclouis.com/italia/wp-content/uploads/sites/2/2024/06/Mc4-373-2026.pdf).",
    descripcion: `El McLouis MC4 373 es la perfilada familiar por excelencia de la Serie 300: 7,45 metros, cinco plazas de viaje y cinco camas, pensada para que una familia de cuatro o cinco personas viaje y duerma sin tener que convertir el salón cada noche. McLouis, marca italiana del grupo Trigano, lleva años afinando esta receta —mucho espacio por euro invertido— y el 373 es uno de sus superventas precisamente por eso.

    Antes de entrar en materia, una aclaración necesaria: el modelo que figuraba en la asignación inicial, el "MC4 261", no existe en la gama 2026. La Serie 300 de perfiladas McLouis para 2026 se compone de los modelos 321, 360, 365, 373, 379 y 381 (más las integrales 860 a 881), según el listino oficial italiano 2026 Rev.1. El 373 es el sustituto natural: misma marca, misma serie, modelo real y con ficha oficial completa. Todo lo que sigue está verificado contra la ficha oficial de mclouis.com.

    Las medidas oficiales son 7.450 mm de largo, 2.350 mm de ancho y 2.950 mm de alto exterior (2.080 mm de altura interior), con un paso de 3.954 mm. Es una perfilada grande, de las que se notan en carretera, pero a cambio ofrece una célula con distribución familiar clásica y muy probada: salón delantero en L con asientos de cabina giratorios, cocina central, baño y dormitorio trasero. Las cinco plazas homologadas para viajar y las cinco plazas para dormir la colocan entre las más capaces de su tamaño sin subir a MMA superiores: con 3.500 kg de MMA se conduce con el carnet B, lo que la hace accesible a cualquier conductor.

    La carrocería utiliza el sistema EXPS, con el que McLouis promete máxima impermeabilidad y aislamiento acústico. Es un argumento relevante porque en este rango de precios la calidad de la célula —estanqueidad, aislamiento, acabados— es donde se gana o se pierde la partida a largo plazo. El interior, que se puede ver en las fotos oficiales, apuesta por maderas claras, tapicerías en dos tonos y mucha luz cenital, un estilo contemporáneo que envejece mejor que los interiores recargados.

    En mecánica, el 373 tiene una particularidad poco común: se ofrece con dos bases distintas, el Fiat Ducato 2.2 MultiJet de 140 CV o el Ford Transit 2.0 EcoBlue de 130 CV. Poder elegir entre Fiat y Ford en un mismo modelo es raro y tiene implicaciones prácticas: red de talleres, precio de repuestos, preferencias personales sobre el puesto de conducción. Con 140 CV y 7,45 metros hay potencia suficiente para viajar cargado sin agobios, aunque con cinco ocupantes y el garaje lleno conviene ser realista sobre las prestaciones en puertos de montaña.

    En precio, McLouis no publica tarifa oficial para España, así que se aplica el listino oficial italiano 2026 Rev.1: 67.490 € en Italia («aprox»). Sirve para situar el modelo —perfilada familiar grande por debajo de los 70.000 € en su mercado de origen—, pero el precio en España lo fija cada concesionario con su equipamiento y sus promociones, y puede variar de forma significativa. McLouis tiene red de distribuidores en España donde pedir presupuesto cerrado; es el único camino para conocer el precio real de partida.

    En carretera, el paso de 3.954 mm da aplomo en autopista, aunque el voladizo trasero —inevitable en una perfilada de este largo— obliga a vigilar los bordillos al girar cerrado. El puesto de conducción, sea Fiat o Ford, es el de un gran furgón: posición alta, buena visibilidad y ayudas a la conducción modernas. Merece la pena detenerse en la elección de mecánica porque no es trivial: el Ducato 2.2 de 140 CV es el motor más extendido del caravaning europeo, con recambios en cualquier rincón, mientras que el Transit 2.0 de 130 CV tiene sus defensores por tacto y por la capilaridad de la red Ford. Probar ambos antes de firmar es el mejor consejo que se puede dar.

    Cómo lo verificamos: dimensiones, plazas (5+5), MMA de 3.500 kg y las dos motorizaciones proceden de la ficha oficial en PDF de mclouis.com; el paso de 3.954 mm, la carrocería EXPS y el PVP italiano de 67.490 €, del listino oficial Italia 2026 Rev.1 consultado el 19/10/2026. La inexistencia del "MC4 261" se comprobó contra ese mismo listino y contra la web oficial. Todo verificado el 19/10/2026.

    Para quién es: para familias de 4-5 miembros que necesitan plazas de verdad —cinco cinturones y cinco camas— sin pasar de los 3.500 kg ni del carnet B, y que priorizan el espacio interior por encima de la compacidad. Para quién no es: para parejas que viajan solas (hay 7,45 metros de más), para quien aparca en ciudad a diario y para quien busque una mecánica concreta sin alternativas: aquí hay que elegir entre Fiat y Ford, con lo bueno y lo malo que eso conlleva.`,
    pros: [
      "5 plazas de viaje y 5 plazas para dormir con solo 3.500 kg de MMA: se conduce con carnet B",
      "7,45 m con dormitorio trasero y salón en L: espacio familiar de verdad por debajo de 70.000 € (ref. Italia)",
      "Doble mecánica a elegir: Fiat Ducato 2.2 140 CV o Ford Transit 2.0 EcoBlue 130 CV",
      "Carrocería EXPS con máxima impermeabilidad y aislamiento acústico según el fabricante",
      "Interior luminoso de estilo contemporáneo, con fotos oficiales que permiten juzgar acabados",
    ],
    contras: [
      "Sin PVP oficial en España: el precio real solo se conoce pidiendo presupuesto al concesionario",
      "7,45 m de largo: maniobrar y aparcar exige planificación, no es una autocaravana para el día a día urbano",
      "La marca no publica la carga útil: con 5 ocupantes hay que vigilar el peso con lupa",
      "Elegir entre Fiat y Ford complica la decisión (talleres, repuestos, valor de reventa)",
      "Es mucha autocaravana para una pareja: el formato familiar penaliza si no se llenan las plazas",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/mclouis-mc4-373-2026-precio-ficha-tecnica-oficial.webp", alt: "McLouis MC4 373, vista exterior", ancho: 1600, alto: 1070 },
      { src: "/media/mclouis-mc4-373-2026-precio-ficha-tecnica-interior1.webp", alt: "McLouis MC4 373, salón", ancho: 1536, alto: 1024 },
      { src: "/media/mclouis-mc4-373-2026-precio-ficha-tecnica-interior2.webp", alt: "McLouis MC4 373, interior", ancho: 1024, alto: 683 },
      { src: "/media/mclouis-mc4-373-2026-precio-ficha-tecnica-detalle.webp", alt: "McLouis MC4 373, detalle del interior", ancho: 1536, alto: 1024 },
    ],
    analisisSlug: "mclouis-mc4-373-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula McLouis (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
  {
    id: "mclouis-fusion-367-2026-precio-ficha-tecnica",
    marca: "McLouis",
    modelo: "Fusion 367",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // sin precio 2026 publicado para el 367
    potenciaCv: 140, // Fiat 2.2 140 CV Euro 6D (derbymotorhomes.com)
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
    imagen: "/media/mclouis-fusion-367-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/mclouis-fusion-367-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/mclouis-fusion-367-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6990, // menos de 7 m (derbymotorhomes.com)
    anchoMm: 2330, // derbymotorhomes.com
    altoMm: 2950, // derbymotorhomes.com
    pesoKg: null,
    mmaKg: 3500, // MTPLM 3.500 kg ampliable (derbymotorhomes.com)
    carnetNecesario: "B", // MMA 3.500 kg
    cargaUtilKg: null, // la marca no publica carga útil
    consumo: null,
    consumoUnidad: null,
    plazas: 5, // 5 cinturones (derbymotorhomes.com)
    plazasDormir: 4, // fija trasera + abatible eléctrica (derbymotorhomes.com)
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: [],
    notas:
      "Modelo de la gama Fusion, exclusiva del Reino Unido (construida por McLouis en Italia para Auto-Sleepers, empresa hermana del grupo Trigano): caravanclub.co.uk. Largo inferior a 7 m (6,99 m), 2,33 m de ancho, 2,95 m de alto, Fiat 2.2 140 CV Euro 6D, 5 cinturones, 4 camas (fija trasera + abatible eléctrica), MTPLM 3.500 kg ampliable, garaje hasta 300 kg, construcción WPS sin madera: derbymotorhomes.com. referencias de hermanos de gama 2026: 360 desde £77.495 y 373 desde £79.495 (findmyleisurevehicle.co.uk). Test del Caravan and Motorhome Club: 78 % y Lux Pack de serie destacado: caravanclub.co.uk. Precio oficial en España: no existe (modelo exclusivo UK). Fotos: 4 verificadas visualmente como Fusion 367 exacto (insignias «Fusion»/«367» visibles, sin marcas de agua ni rótulos). McLouis no publica fotos oficiales del Fusion 367: mclouis.com no cubre la gama Fusion y la web oficial Fusion (mclouisfusion.co.uk) solo lista los 330/360/373/379 (verificado 19/10/2026). sin tarifa oficial vigente verificable para este modelo.",
    curiosidades:
      "La gama Fusion la construye McLouis en Italia en exclusiva para Auto-Sleepers —empresa hermana dentro del grupo Trigano— y solo se vende en el Reino Unido; el test del Caravan and Motorhome Club le dio un 78 % y destacó el Lux Pack incluido de serie (fuente: https://www.caravanclub.co.uk/blog/product-and-outfit-reviews/motorhome-reviews/mclouis-fusion-367/).",
    descripcion: `El McLouis Fusion 367 es una rareza interesante: una perfilada italiana que no se puede comprar en Italia —ni en España—. La gama Fusion la fabrica McLouis en su planta italiana en exclusiva para Auto-Sleepers, su empresa hermana dentro del grupo Trigano, y se comercializa únicamente en el Reino Unido. El resultado es un producto híbrido: ingeniería y construcción italianas con especificación pensada para el cliente británico, famoso por ser exigente con el equipamiento de serie.

    Con 6,99 metros de largo, el 367 se queda justo por debajo de la barrera psicológica (y práctica) de los 7 metros. Esa cifra importa: muchas áreas, ferris y parkings ponen el límite ahí, y una perfilada sub-7-m con cama fija trasera es una combinación que no abunda. El ancho es de 2,33 m y el alto de 2,95 m, medidas contenidas que la hacen más llevadera que las perfiladas de 7,45 m tanto en carretera como al aparcar.

    La distribución apuesta por lo probado: salón delantero, cocina, baño y cama fija trasera, más una cama abatible eléctrica sobre el salón para completar las cuatro plazas para dormir. Cinco cinturones permiten viajar a cinco ocupantes. La cama fija trasera es el gran argumento frente a las perfiladas que obligan a montar el salón cada noche: se deja hecha y el día a día es mucho más cómodo, sobre todo en viajes largos. El garaje, con capacidad de hasta 300 kg según el distribuidor, admite bicicletas eléctricas y material voluminoso sin dramas.

    La construcción utiliza el sistema WPS (sin madera), la respuesta de McLouis al eterno problema de las humedades: al eliminar la madera estructural de paredes y techo se reduce el riesgo de podredumbre si alguna vez entra agua. Es un argumento de durabilidad a largo plazo que pesa mucho en el mercado británico, donde la lluvia no es una hipótesis sino una certeza estadística.

    En mecánica monta el Fiat Ducato 2.2 de 140 CV Euro 6D, con MTPLM de 3.500 kg ampliable. El "ampliable" merece una explicación: de serie se queda en el límite del carnet B británico (equivalente al nuestro), pero se puede rehomologar a mayor MMA si se necesita más carga útil, a costa de exigir otro permiso. Es una flexibilidad útil para quien viaja muy cargado.

    El test del Caravan and Motorhome Club —la institución de referencia para el caravaning británico— le otorgó un 78 %, una nota sólida, y destacó especialmente el Lux Pack incluido de serie. Ese es precisamente el posicionamiento de la gama Fusion: equipamiento que en otras marcas sería opcional viene incluido, de modo que el precio de partida se acerca mucho al precio final. Para el comprador británico, harto de listas de extras interminables, es un argumento de venta poderoso.

    En precio no hay cifra 2026 publicada para el 367, así que el campo queda sin dato. Como referencia, sus hermanos de gama de 2026 parten de 77.495 libras (360) y 79.495 libras (373) según findmyleisurevehicle.co.uk. Y una advertencia importante para el lector español: al ser un modelo exclusivo del Reino Unido, no hay red comercial ni precio oficial en España; esta ficha tiene valor informativo y comparativo, no de compra.

    La relación entre McLouis y Auto-Sleepers merece una explicación porque aclara qué se está comprando. Ambas pertenecen al grupo Trigano, el gigante europeo del caravaning, y la gama Fusion es el fruto de esa sinergia: McLouis aporta la plataforma industrial italiana y su experiencia en perfiladas de gran volumen, mientras Auto-Sleepers —marca británica con décadas de historia— define la especificación que su mercado demanda: calefacción potente, aislamiento reforzado, cocina pensada para el "full English" y ese Lux Pack de serie que la prensa británica destacó. No es un McLouis continental con el volante cambiado de lado; es un producto desarrollado para el Reino Unido desde el inicio.

    Cómo lo verificamos: la exclusividad británica y el 78 % del test proceden del blog del Caravan and Motorhome Club; las dimensiones, motor, plazas, camas, MTPLM ampliable, garaje de 300 kg y construcción WPS, de la ficha del distribuidor derbymotorhomes.com; los precios de referencia de la gama 2026, de findmyleisurevehicle.co.uk. Todo verificado el 19/10/2026. Las cuatro fotos proceden de concesionarios británicos y se verificaron visualmente como Fusion 367 exacto (insignias "367" y "Fusion" visibles); la marca no publica galería oficial del modelo.

    Para quién es: para el lector que compara el mercado europeo y quiere saber qué se vende al otro lado del Canal, o para un residente en Reino Unido que busque una sub-7-m con cama fija y mucho equipamiento de serie. Para quién no es: para quien quiera comprarla en España —no se vende aquí—, para quien necesite 5 camas (son 4) y para quien busque la perfilada más barata: el posicionamiento con Lux Pack de serie la sitúa por encima de las gamas de acceso.`,
    pros: [
      "Sub-7-metros (6,99 m) con cama fija trasera: combinación poco común y muy práctica",
      "Exclusiva del Reino Unido con especificación británica: Lux Pack de serie destacado por el Caravan and Motorhome Club (78 % en su test)",
      "Construcción WPS sin madera: menos riesgo de daños estructurales por humedades a largo plazo",
      "Garaje con capacidad de hasta 300 kg: bicis eléctricas y material voluminoso sin problemas",
      "MTPLM de 3.500 kg ampliable: flexibilidad para rehomologar si se necesita más carga útil",
    ],
    contras: [
      "Solo se vende en el Reino Unido: sin red comercial ni precio oficial en España",
      "Sin precio 2026 publicado para el 367: solo hay referencias de sus hermanos de gama",
      "4 plazas para dormir pese a sus 5 cinturones: el quinto ocupante duerme fuera o no duerme",
      "La marca no publica la carga útil de serie",
      "Sin galería oficial de la marca: toda la documentación visual depende de concesionarios",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/mclouis-fusion-367-2026-precio-ficha-tecnica-oficial.webp", alt: "McLouis Fusion 367, vista exterior", ancho: 1600, alto: 1200 },
      { src: "/media/mclouis-fusion-367-2026-precio-ficha-tecnica-interior1.webp", alt: "McLouis Fusion 367, comedor", ancho: 1000, alto: 750 },
      { src: "/media/mclouis-fusion-367-2026-precio-ficha-tecnica-interior2.webp", alt: "McLouis Fusion 367, cocina y cama", ancho: 1000, alto: 750 },
      { src: "/media/mclouis-fusion-367-2026-precio-ficha-tecnica-detalle.webp", alt: "McLouis Fusion 367, baño", ancho: 1000, alto: 750 },
    ],
    analisisSlug: "mclouis-fusion-367-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula McLouis (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
