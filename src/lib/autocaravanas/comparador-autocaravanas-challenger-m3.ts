// Autocaravanas Challenger — lote Merlín 3 (19/10/2026).
// Fusión de comparador-autocaravanas-challenger-m3-w2.ts (modelo 328) y
// comparador-autocaravanas-challenger-m3-w3.ts (modelo 396) en un único fichero
// canónico con un solo export AUTOCARAVANAS_CHALLENGER_M3. Sin duplicados.
// --- Fuentes y notas del modelo 328 (w2) ---
// Autocaravanas Challenger — lote Merlín 3 (19/10/2026).
// Fuentes: ficha oficial de Challenger Suiza (PDF)
// (https://ch.challenger-motorhomes.com/pdf/7/328/de),
// página oficial del modelo (https://ch.challenger-motorhomes.com/modell/328/),
// anuncio de unidad 2026 en TruckScout24
// (https://www.truckscout24.fr/main/search/index?search-word=challenger+p+328+etape+arctic+paket+%2F+solaranlage+%2F+4%2C1t),
// ficha técnica de Groupe Jean (https://groupejean-auto.fr/fiche-technique-challenger-328/),
// NOTA FOTOS 328 (verificación 19/10/2026): las 4 fotos actuales no son oficiales
// (exterior: anuncio de concesionario caravanmarkt24.de de una unidad 328 Graphite
// Premium; interiores: anuncio de alquiler Yescapa de un 328 Graphite Ultimate con
// cama central 160x190 + cama abatible 140x190, distribución coincidente). La marca
// publica galería oficial del 328 en su web, pero no se pudieron extraer las URLs
// directas con las herramientas disponibles — pendiente pase con navegador.
// artículo de Camprest sobre la gama (http://camprest.com/en/blog/motorhome-caravan-news/challenger-closer-than-you-think).
// Verificado el 19/10/2026.
// NOTAS HONESTAS: Challenger (grupo Trigano) no publica tarifa oficial para España:
// precioDesde queda sin dato. La potencia indicada (130 CV) es la de la versión base Break
// con cambio manual según la ficha oficial; la versión Etape monta el 2.0 de 165 CV con
// automático de 8 velocidades. Aguas: la ficha PDF oficial indicaba 150 l de agua
// limpia, pero la página oficial del modelo (octubre 2026) da 105 l de agua limpia y
// 100 l de grises — se usa la cifra de la página oficial, discrepancia anotada.
// La carga útil no la publica la marca: queda sin dato (prohibido calcularla). Fotos de
// anuncios de unidades reales del modelo exacto (sin marcas de agua), ≥1600 px.

// --- Fuentes y notas del modelo 396 (w3) ---
// Autocaravanas Challenger — lote Merlín 3 (19/10/2026).
// Fuentes: catálogo oficial Challenger 2019 (vía camperonline.it), ficha técnica
// groupejean-auto.fr, anuncio Yescapa (unidad 2021), sitemap oficial
// challenger-camping-cars.fr (verifica que el 396 ya no está en la gama 2026).
// Verificado el 19/10/2026.
// Notas honestas: el Challenger 396 pertenece a la era Genesis (2018–2024 aprox.) y NO
// figura en el catálogo 2026 de la marca (comprobado en su sitemap oficial de modelos).
// No hay precio oficial actual: queda sin dato. La cifra de 50.490 € citada en la ficha
// corresponde al PVP de lanzamiento en 2018 (fuente: groupejean-auto.fr) y es solo
// histórica. Las fotos interiores proceden del catálogo oficial 2019 (páginas del
// sistema Duo Bed, específicas del 396); la foto exterior es una captura del vídeo
// de presentación del modelo en feria (miniatura de YouTube, modelo exacto).


import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_CHALLENGER_M3: Autocaravana[] = [
  {
    id: "challenger-328-2026-precio-ficha-tecnica",
    marca: "Challenger",
    modelo: "328",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 69990, // PVP oficial Francia (challenger-camping-cars.fr, JSON-LD)
    potenciaCv: 130, // Ford Transit 2.0 de 130 CV manual (versión Break); la Etape monta 165 CV automático
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro 6e
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/challenger-328-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/challenger-328-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/challenger-328-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7190, // 7,19 m según ficha oficial
    anchoMm: 2350,
    altoMm: 2920,
    pesoKg: 3069, // 3.069 kg según ficha PDF oficial; la página oficial del modelo indica 2.994 kg en orden de marcha (±5 %)
    mmaKg: 3500, // PTAC; ampliable a 4.100 kg en opción
    carnetNecesario: "B", // mmaKg <= 3500
    cargaUtilKg: null, // la marca no publica la carga útil
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4, // cama central 160x190 + cama abatible eléctrica 140x190
    parNm: null,
    traccion: "delantera", // Ford Transit (tracción delantera)
    emisionesCo2: null,
    aprox: ["precioDesde"],
    notas:
      "Perfilada sobre Ford Transit 2.0 (130 CV manual en versión Break, 165 CV automático de 8 velocidades en versión Etape), según ficha oficial de Challenger Suiza: 7,19 x 2,35 x 2,92 m, 3.069/3.500 kg, 4 plazas, cama central de 160x190 y cama abatible de 140x190 (opcional), calefacción Truma Combi de 4.000 W (6.000 W diésel en opción), agua limpia de 105 l y grises de 100 l según la página oficial del modelo (ch.challenger-motorhomes.com/modell/328/); la ficha PDF oficial indicaba 150 l de agua limpia (discrepancia entre fuentes oficiales, anotada). Cocina con 2 fuegos y frigorífico compresor de 140 l, ducha independiente y garaje, según ficha de distribuidor. Precio de referencia: 67.490 CHF en Suiza (web oficial, octubre 2026) — referencia extranjera; Challenger no publica tarifa oficial para España. Precio: PVP oficial en Francia, tomado de la página oficial del modelo (challenger-camping-cars.fr, datos estructurados JSON-LD); no hay tarifa oficial para España.",
    curiosidades:
      "Challenger bautiza sus perfiladas solo con números, y cada número identifica una distribución: el 328 es la variante con cama central trasera y cama abatible eléctrica en 7,19 metros. Fuente: Camprest, «Challenger - closer than you think» (http://camprest.com/en/blog/motorhome-caravan-news/challenger-closer-than-you-think).",
    descripcion: `La Challenger 328 es la perfilada francesa que mejor resume la filosofía de la marca del grupo Trigano: mucho espacio útil, mecánica Ford probada y un precio que pone las cosas difíciles a las alemanas. Con 7,19 metros de largo, es la variante con cama central trasera de la gama de perfiladas Challenger, un formato que muchos viajeros consideran el ideal cuando se viaja en pareja: cada uno se levanta sin pasar por encima del otro y la cama está siempre hecha.

    En medidas, la 328 se sitúa en la zona media-alta de las perfiladas: 7,19 metros de largo, 2,35 de ancho y 2,92 de alto, con una masa en vacío de 3.069 kg y una MMA de 3.500 kg que permite conducirla con el carnet B. Son cotas generosas pero sin excesos: se nota el espacio dentro y no se sufre en exceso fuera, aunque aparcarla en ciudad sigue siendo una aventura que conviene evitar. Existe la opción de ampliar la MMA a 4.100 kg para quien necesite más carga útil, a costa de pasar al carnet C1.

    La distribución es su gran baza. Al fondo, una cama central de 160x190 cm —medida casi de cama de matrimonio doméstica— accesible por ambos lados y con armarios alrededor. Encima del salón, una cama abatible eléctrica de 140x190 cm que baja con solo pulsar un botón y que durante el día desaparece en el techo, dejando el salón despejado. El salón, con los asientos de cabina giratorios, acoge a cuatro personas para comer, y la cocina cumple con dos fuegos y un frigorífico de 141 litros con congelador. El baño, con ducha independiente, está bien resuelto para una perfilada de este precio, y el garaje trasero traga sillas, mesa y el equipamiento de exterior. Es, en suma, una cuatro plazas de verdad: cuatro para viajar y cuatro para dormir sin convertir nada cada noche, salvo que se quiera usar la dinette como cama supletoria.

    En tecnología y equipamiento, la 328 juega con las cartas de la gama 2026 de Challenger: estructura IRP de poliéster (suelo, paredes y techo) con 64 mm de grosor en el suelo, ventanas de doble acristalamiento con oscurecedores combinados, calefacción diésel de aire pulsado utilizable en marcha (4.000 W de serie, 6.000 W en opción), calentador de agua a gas de 10 litros, preinstalación solar y de cámara trasera, y los packs que caracterizan a la marca: Connect (radio Ford Sync con pantalla táctil, cámara trasera, FordPass), Safety (alerta de colisión, mantenimiento de carril, reconocimiento de señales) y, para los más frioleros, el Arctic con depósito de grises aislado y calefactado, calefacción reforzada y suelo radiante eléctrico. La versión Etape añade el cambio automático de 8 velocidades y los 165 CV, además de llantas negras y un acabado más cuidado.

    Mecánicamente, la base es el Ford Transit 2.0 diésel: 130 CV con cambio manual en la versión Break de acceso y 165 CV con automático de 8 relaciones en la Etape. Es una mecánica conocida, con repuestos en cualquier rincón de Europa y un comportamiento rutero sano, aunque con 3,5 toneladas y 130 CV no hay que esperar brío en los puertos: la Etape de 165 CV se agradece si se viaja cargado o por montaña. La tracción es delantera, como en todo Transit.

    En precio, Challenger no publica tarifa oficial para España, así que no hay cifra de catálogo: el precio lo fija cada concesionario. Como referencia, en Francia una unidad 328 Graphite Ultimate de 2024 con el 170 CV automático se anunciaba en torno a los 60.000 €, y las unidades nuevas 2026 Etape con packs rondan los 80.000 € de precio de catálogo alemán. En España, la red de Challenger —marca del gigante Trigano, con fábrica en Tournon-sur-Rhône— tiene presencia a través de distribuidores multimarca, por lo que conviene pedir presupuesto en varios y comparar el equipamiento incluido: los packs marcan mucha diferencia en el precio final.

    Cómo lo verificamos: dimensiones, pesos, potencias, camas y calefacción proceden de la ficha oficial de Challenger Suiza en PDF; el detalle del equipamiento de la versión Etape 2026 (packs, aguas, ampliación a 4,1 t), del anuncio de un distribuidor alemán en TruckScout24; la cocina, el frigorífico y el precio de referencia francés, de la ficha de Groupe Jean. Todo verificado el 19/10/2026. Quedan sin dato el precio oficial español, la carga útil, el par, el consumo y las emisiones, no publicados por la marca. La discrepancia en el depósito de agua limpia (150 l oficial frente a 105 l en anuncios 2026) queda anotada.

    Para quién es: la Challenger 328 encaja con parejas que quieren cama central siempre hecha, cuatro plazas reales y carnet B, con un presupuesto más ajustado que el de las premium alemanas. La versión Etape con Arctic es además una candidata seria para viajar todo el año. No es para quien necesite cinco o seis plazas, para quien busque una mecánica con mucho brío en la versión básica de 130 CV ni para quien quiera moverse con agilidad por ciudad: 7,19 metros mandan.`,
    pros: [
      "Cama central de 160x190 siempre hecha, accesible por ambos lados",
      "Cuatro plazas para dormir sin convertir el salón (central + abatible eléctrica)",
      "Se conduce con carnet B (3.500 kg de MMA)",
      "Estructura IRP de poliéster y packs de equipamiento muy completos",
      "Versión Etape con 165 CV, automático de 8 velocidades y pack Arctic invernal",
    ],
    contras: [
      "La versión básica de 130 CV puede quedarse justa con carga y en puertos",
      "Challenger no publica tarifa en España: precio a negociar con cada distribuidor",
      "7,19 metros limitan el aparcamiento urbano y las parcelas pequeñas",
      "Discrepancia sin aclarar en el depósito de agua limpia (150 l oficial / 105 l en anuncios)",
      "Acabados correctos pero un escalón por debajo de las premium alemanas",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/challenger-328-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Challenger 328, vista exterior",
        ancho: 4000,
        alto: 2252,
      },
      {
        src: "/media/challenger-328-2026-precio-ficha-tecnica-interior1.webp",
        alt: "Challenger 328, salón con cama abatible",
        ancho: 1600,
        alto: 1201,
      },
      {
        src: "/media/challenger-328-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Challenger 328, dormitorio con cama central",
        ancho: 1600,
        alto: 2133,
      },
      {
        src: "/media/challenger-328-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Challenger 328, vista trasera",
        ancho: 4000,
        alto: 2252,
      },
    ],
    analisisSlug: "challenger-328-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Base Ford Transit: revisión cada 2 años o 40.000 km (lo que antes ocurra, según plan Ford)",
      revisiones: [
        {
          nombre: "Revisión base (Ford Transit)",
          queSeCambia: "Aceite + filtros + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Challenger (anual recomendada)",
          queSeCambia: "Estanqueidad, gas, electricidad, humedades",
          costeAproxEur: 250,
        },
      ],
    },
  },
  {
    id: "challenger-396-2026-precio-ficha-tecnica",
    marca: "Challenger",
    modelo: "396",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // la marca no publica PVP actual; el 396 no está en la gama 2026
    potenciaCv: 140, // Fiat Ducato 2.3 Multijet 140 en unidades recientes (2021); las de 2018 montaban Ford Transit 2.0 de 130 CV
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro 6; criterio general DGT para este tipo de vehículo
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/challenger-396-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/challenger-396-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/challenger-396-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7460, // anuncio Yescapa de una unidad 2021 (7,46 m)
    anchoMm: 2350, // anuncio Yescapa de una unidad 2021 (2,35 m)
    altoMm: 2890, // anuncio Yescapa de una unidad 2021 (2,89 m)
    pesoKg: null, // la marca no publica el peso en orden de marcha de forma verificable
    mmaKg: 3500, // PTAC 3.500 kg (anuncio Yescapa, unidad 2021)
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no la publica; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas en circulación (anuncio Yescapa, unidad 2021)
    plazasDormir: 4, // cama abatible delantera 190x140 + literas traseras modulables (anuncio Yescapa)
    parNm: null,
    traccion: null, // la marca no la declara de forma verificable
    emisionesCo2: null,
    aprox: [],
    notas:
      "sin tarifa oficial vigente verificable." +
      "motor Fiat Ducato 2.3 Multijet de 140 CV, 4 plazas en circulación y 4 en " +
      "couchage proceden del anuncio de una unidad de 2021 en Yescapa " +
      "(yescapa.co.uk/campers/101199); el chasis Ford Transit 2.0 de 130 CV de las " +
      "primeras unidades (2018) y el PVP histórico de 50.490 € proceden de la ficha " +
      "de groupejean-auto.fr; el sistema Duo Bed y el premio europeo de innovación " +
      "proceden del catálogo oficial Challenger 2019 (camperonline.it/magazine/" +
      "cataloghi/2019-challenger-catalogo.pdf, págs. 13-15). El sitemap oficial de " +
      "modelos de challenger-camping-cars.fr confirma que el 396 no está en la gama " +
      "2026. Sin dato publicado: precio (sin PVP oficial actual), peso, consumo, par, " +
      "tracción y emisiones (no publicados de forma verificable).",
    curiosidades:
      "El Challenger 396 ganó el Premio Europeo de la Innovación 2018 gracias a su " +
      "sistema Duo Bed: dos camas abatibles superpuestas que de día desaparecen en " +
      "el techo y de noche bajan con un interruptor, liberando la dinette infantil " +
      "trasera. Fuente: catálogo oficial Challenger 2019, págs. 14-15 " +
      "(https://camperonline.it/magazine/cataloghi/2019-challenger-catalogo.pdf).",
    descripcion: `La Challenger 396 es una perfilada familiar de la gama Genesis que marcó un antes y un después en el aprovechamiento del espacio: fue el modelo con el que la marca francesa demostró que una autocaravana de menos de siete metros y medio podía dormir a cuatro personas sin renunciar a un salón digno de día. Hoy ya no figura en el catálogo 2026 de Challenger —lo comprobamos en el sitemap oficial de modelos de la marca—, pero su concepto sigue siendo una referencia para quien busca una familiar de ocasión con una idea brillante: el sistema Duo Bed, premiado a nivel europeo.

    Empecemos por las medidas, porque aquí está la primera clave de su éxito. Con 7,46 metros de largo, 2,35 de ancho y 2,89 de alto, la 396 se mueve en el segmento medio-alto de las perfiladas familiares sin llegar a los excesos de las grandes de ocho metros. Es una longitud que permite circular con comodidad por carreteras secundarias y entrar en la mayoría de áreas de servicio, aunque aparcar en ciudad sigue siendo una misión solo para conductores con experiencia. El PTAC es de 3.500 kg, así que se conduce con el carnet B de toda la vida, un detalle que para muchas familias es la línea roja entre comprar o no comprar. El peso en orden de marcha no lo publica la marca de forma verificable, así que no lo incluimos: lo honesto es decir que no lo sabemos, no inventarlo.

    La habitabilidad es donde la 396 se distancia de sus rivales de la época. Delante, un maxi salón panorámico con dinette crea el espacio de convivencia familiar: mesa amplia, banquetas enfrentadas y mucha luz natural gracias al parabrisas panorámico de la cabina, que con los asientos giratorios se integra en el salón. Detrás, la zona infantil combina una pequeña dinette con el sistema Duo Bed, dos camas abatibles superpuestas que de día se pliegan contra el techo —dejando libre el espacio para jugar o comer— y de noche descienden a la altura de uso con solo pulsar un interruptor. Es un planteamiento distinto al de las literas fijas: aquí las camas literalmente desaparecen. La cocina está bien equipada para una familiar de este tamaño, con placa de tres fuegos, fregadero y un frigorífico de 167 litros, una capacidad generosa que permite hacer la compra semanal sin dramas. Los sanitarios son otro punto fuerte poco habitual en su categoría: ducha independiente separada del resto del baño, WC químico de cassette y un cuarto de aseo bien distribuido. El dormitorio principal se resuelve con una cama abatible delantera de 190 x 140 cm, ancha y aireada, que de día se recoge en el techo del salón.

    En tecnología y equipamiento, la 396 de las últimas unidades (2021) que hemos documentado incluye climatización en cabina y calefacción a gasóleo para la célula, una combinación sensata para viajar todo el año. La construcción sigue el estándar de la gama Genesis de Challenger: paredes con aislamiento, ventanas de doble acristalamiento con oscurecedores y mosquiteras, e iluminación LED en toda la célula. No es una autocaravana de lujo ostentoso, sino una familiar bien pensada donde cada euro del precio original se notaba en soluciones prácticas más que en cromados.

    Hablemos de camas y plazas con precisión, porque aquí hay matices. La homologación es de 4 plazas en circulación, todas con cinturón, y 4 plazas para dormir: la cama abatible delantera de 190 x 140 cm más las dos camas del sistema Duo Bed en la zona trasera. Es una configuración pensada para dos adultos y dos niños, con la ventaja de que los niños tienen su propio rincón trasero con dinette, algo que los padres que viajan con hijos pequeños valoran muchísimo: los mayores pueden seguir de sobremesa en el salón delantero mientras los pequeños duermen detrás, separados por la zona de la cocina y el baño.

    La mecánica depende del año de la unidad, y esto es importante si buscas una de ocasión. Las primeras 396 (2018) se construyeron sobre chasis Ford Transit con el motor 2.0 TDCi de 130 CV, mientras que las unidades más recientes, como la de 2021 que hemos documentado, montan el Fiat Ducato con el 2.3 Multijet de 140 CV. Ambos son motores probados y con amplia red de talleres, y los 140 CV del Fiat mueven con solvencia los 3.500 kg del conjunto en autopista y puertos de montaña. El cambio es manual en las versiones documentadas. Como siempre con vehículos de ocasión, el estado del mantenimiento pesa más que la ficha técnica: revisa el historial de la base mecánica igual que el de la célula.

    Del precio hay que hablar con honestidad. Challenger no publica PVP actual del 396 porque el modelo ya no está en gama. La única cifra oficial que existe es histórica: 50.490 € era su precio de lanzamiento en 2018 según la ficha técnica de la época. Hoy la 396 solo se encuentra en el mercado de ocasión, donde su cotización depende del año, los kilómetros y el equipamiento. En España, la red de concesionarios Challenger —integrada en el grupo Trigano— sigue dando servicio a estos modelos para repuestos y mantenimiento de la célula, y cualquier taller multimarca puede ocuparse de la base Fiat o Ford. Si te interesa una, busca unidades a partir de 2020 y exige el libro de mantenimiento de la célula: la estanqueidad es el punto crítico en cualquier autocaravana con años.

    Cómo lo verificamos (19/10/2026): las dimensiones, el PTAC, el motor Fiat Ducato 2.3 Multijet de 140 CV, las 4 plazas en circulación y las 4 de couchage proceden del anuncio detallado de una unidad de 2021 en Yescapa; el chasis Ford de las primeras unidades y el precio histórico de 2018 proceden de la ficha de groupejean-auto.fr; el sistema Duo Bed, sus medidas y el Premio Europeo de la Innovación 2018 proceden del catálogo oficial Challenger 2019 (páginas 13 a 15); y la ausencia del modelo en la gama actual se comprobó en el sitemap oficial de modelos de challenger-camping-cars.fr. Los datos sin fuente verificable quedan sin dato y así se declara.

    Para quién es: la Challenger 396 encaja con familias de dos adultos y dos niños que buscan una perfilada de ocasión con una idea de espacio realmente distinta y no quieren una litera fija que se coma medio salón. No es para quien necesita cinco plazas homologadas, para quien busca un modelo nuevo con garantía de fábrica, ni para parejas sin hijos: hay perfiladas de dos camas más racionales y baratas para ese uso. Si el Duo Bed te ha conquistado, verifica en persona que el mecanismo eléctrico funciona suave y sin ruidos: es su seña de identidad y debe estar impecable.`,
    pros: [
      "Sistema Duo Bed premiado: dos camas abatibles que desaparecen en el techo de día y liberan la zona infantil",
      "Ducha independiente separada del resto del baño, un lujo poco habitual en perfiladas familiares de 7,46 m",
      "Cama abatible delantera de 190 x 140 cm, ancha y aireada, que de día deja libre todo el salón",
      "PTAC de 3.500 kg: se conduce con carnet B y mantiene la agilidad de una perfilada media",
      "Motores probados y con amplia red de talleres (Ford Transit 2.0 130 CV o Fiat Ducato 2.3 140 CV según año)",
    ],
    contras: [
      "Modelo descatalogado: ya no está en la gama 2026 y solo se encuentra en el mercado de ocasión",
      "Solo 4 plazas homologadas en circulación: insuficiente para familias de cinco",
      "El mecanismo eléctrico del Duo Bed es su seña de identidad y también su punto a revisar con lupa en unidades usadas",
      "Sin precio oficial actual: la cotización de ocasión varía mucho y exige comparar bien",
      "Con 7,46 m de largo, aparcar en ciudad o en pueblos con calles estrechas requiere experiencia",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/challenger-396-2026-precio-ficha-tecnica-oficial.webp", alt: "Challenger 396, vista exterior en feria", ancho: 1280, alto: 720 },
      { src: "/media/challenger-396-2026-precio-ficha-tecnica-interior1.webp", alt: "Challenger 396, dinette trasera con camas Duo Bed recogidas", ancho: 980, alto: 1300 },
      { src: "/media/challenger-396-2026-precio-ficha-tecnica-interior2.webp", alt: "Challenger 396, sistema Duo Bed con las dos camas desplegadas", ancho: 970, alto: 1310 },
      { src: "/media/challenger-396-2026-precio-ficha-tecnica-detalle.webp", alt: "Challenger 396, detalle de la escalera y el mecanismo Duo Bed", ancho: 370, alto: 1280 },
    ],
    analisisSlug: "challenger-396-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato / Ford Transit: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato / Ford Transit)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Challenger (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades y mecanismo Duo Bed", costeAproxEur: 250 },
      ],
    },
  },
];
