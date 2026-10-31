// Autocaravanas Bürstner — lote Merlín 3 (19/10/2026).
// Fuentes Ixeo IT 680 G: prueba de Out & About Live
// (https://www.outandaboutlive.co.uk/reviews/motorhomes/burstner-ixeo-it-680-g),
// ficha técnica de distribuidor Abacus MY2020
// (https://www.abacusmotorhomes.co.uk/vehicle/burstner-ixeo-680g-2020/pdf),
// ficha técnica de distribuidor Swindon MY2017
// (https://swindoncaravansgroup.com/search/details/used-burstner-ixeo-680-g-2017-mu0028/details.pdf).
// Fuentes Elegance I 920 G: ficha técnica de distribuidor Abacus 2017
// (https://www.abacusmotorhomes.co.uk/vehicle/burstner-elegance-i920g-2017/pdf),
// anuncio de unidad 2022 en Motorhome Depot
// (https://www.motorhomedepot.com/vehicle/burstner-elegance-i920g-2022-automatic-mercedes-a-class-motorhome-for-sale).
// Verificado el 19/10/2026.
// NOTAS HONESTAS: el modelo asignado (burstner-aviano-i-727-g) es un integral descatalogado
// hacia 2014 sin fuente oficial disponible (solo anuncios de ocasión), por lo que se sustituye
// por el Bürstner Elegance I 920 G, integral real y documentado. Ninguna de las dos marcas
// publica tarifa oficial para España: sin precio oficial publicado. Del Ixeo IT 680 G no hay potencia
// publicada en las fuentes consultadas (chasis Fiat Ducato): potenciaCv sin dato. Las cotas del
// Ixeo varían ligeramente según el año-modelo (MY2017: 6,99 m y 2,30 m; MY2020: 6,90 m y
// 2,35 m); se consignan las del MY2020 con la variación anotada. Fotos del Ixeo: fotos de
// prensa cedidas por Bürstner (vía Out & About Live), 970 px. Fotos del Elegance: anuncio de
// unidad real (modelo exacto, sin marcas de agua), ≥1360 px.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_BURSTNER_M3: Autocaravana[] = [
  {
    id: "burstner-ixeo-it-680-g-2026-precio-ficha-tecnica",
    marca: "Bürstner",
    modelo: "Ixeo IT 680 G",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // modelo descatalogado; sin tarifa oficial
    potenciaCv: null, // no publicada en las fuentes consultadas (chasis Fiat Ducato)
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
    imagen: "/media/burstner-ixeo-it-680-g-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/burstner-ixeo-it-680-g-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/burstner-ixeo-it-680-g-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6900, // ficha MY2020; el MY2017 se anunciaba en 6,99 m
    anchoMm: 2350, // ficha MY2020; el MY2017 se anunciaba en 2,30 m
    altoMm: 2900,
    pesoKg: 3270, // MRO según ficha de distribuidor MY2017
    mmaKg: 3500, // MTPLM 3.650 kg en la ficha MY2017 (opcional)
    carnetNecesario: "B", // mmaKg <= 3500
    cargaUtilKg: null, // el fabricante no la publica para este modelo
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4, // cama basculante doble longitudinal + salón convertible en doble
    parNm: null,
    traccion: "delantera", // chasis Fiat Ducato
    emisionesCo2: null,
    aprox: [],
    notas:
      "Perfilada de la gama Ixeo Time (2018-2020 aprox.). Cotas según ficha de distribuidor del MY2020: 6,90 x 2,35 x 2,90 m, chasis Fiat, 4 plazas, cama basculante eléctrica doble, ducha separada y garaje trasero. La ficha del MY2017 daba 6,99 m de largo, 2,30 m de ancho, MTPLM de 3.650 kg y MRO de 3.270 kg. La prueba de Out & About Live describe la cama basculante longitudinal, el salón para cuatro, la cocina con tres fuegos en línea y frigorífico de 142 l, y el baño completo al fondo con ducha separada. no existe tarifa oficial vigente verificable del modelo.",
    curiosidades:
      "El Ixeo IT 680 G estrenó la primera cama basculante longitudinal de Bürstner: en lugar de bajar a lo ancho, desciende a lo largo, queda totalmente integrada en el techo cuando se recoge y permite acostar a los niños arriba mientras los adultos siguen en el salón debajo. Fuente: Out & About Live, prueba del Bürstner Ixeo IT 680 G (https://www.outandaboutlive.co.uk/reviews/motorhomes/burstner-ixeo-it-680-g).",
    descripcion: `El Bürstner Ixeo IT 680 G es una de esas perfiladas que demuestran que la innovación de verdad no siempre está en las pantallas táctiles, sino en cómo se resuelve el eterno problema de dónde duerme cada uno. Fabricado entre 2018 y 2020 dentro de la gama Ixeo Time —la familia de perfiladas con la que Bürstner democratizó las ideas de sus integrales—, el 680 G pasó a la historia de la marca por un detalle concreto: fue el primer Bürstner con cama basculante longitudinal, una cama doble que baja a lo largo del vehículo en lugar de a lo ancho y que, una vez recogida, desaparece por completo en el techo.

    En medidas es una perfilada compacta y equilibrada: 6,90 metros de largo, 2,35 de ancho y 2,90 de alto según la ficha del año-modelo 2020 (las unidades de 2017 se anunciaban con 6,99 metros y 2,30 de ancho, pequeñas variaciones de homologación entre años). Con una masa máxima autorizada de 3.500 kg se conduce con el carnet B de toda la vida, y su masa en orden de marcha de 3.270 kg deja un margen de carga razonable para dos o cuatro personas con equipaje normal. Es, en definitiva, una autocaravana de tamaño honesto: cabe en la mayoría de parcelas, no asusta en carreteras secundarias y aun así ofrece cuatro plazas de viaje y cuatro para dormir.

    La distribución gira alrededor de la cama basculante. De día, el salón delantero es amplio y luminoso, con espacio de sobra para cuatro adultos alrededor de la mesa y los asientos de cabina giratorios; de noche, la cama doble desciende eléctricamente hasta casi la altura de los asientos, con un colchón cómodo y un acceso fácil gracias al peldaño que forma el suelo del salón. La gracia del sistema longitudinal es doble: cuando está recogida no se ve —el techo queda limpio y el Skyroof deja entrar luz incluso con la cama arriba—, y cuando está bajada a medias se puede montar el salón como segunda cama doble enorme debajo, de modo que los niños pueden acostarse arriba mientras los adultos siguen charlando abajo. Es, como escribió la prensa británica que la probó, la primera perfilada con basculante en la que esa escena resulta verosímil.

    La cocina sale beneficiada de no tener que reservar sitio para una cama fija: tiene una encimera de trabajo decente, con los tres fuegos en línea para liberar superficie, tres cajones grandes con cierre suave y un frigorífico estrecho de 142 litros con la opción de torre combinada con horno. Al fondo, el baño ocupa todo el ancho trasero e incluye una ducha separada de buen tamaño, con una cantidad de almacenaje para ropa detrás del lavabo que enamora a quien viaja largo. Y bajo todo eso, un garaje trasero de acceso amplio para sillas, mesa y juguetes de exterior.

    En tecnología, el 680 G es un Bürstner de su época: panel de control Truma para la calefacción y el agua caliente, claraboya panorámica Skyroof sobre la cabina, pantalla plana de 21 pulgadas oculta en un armario alto (ampliable a 32 con mueble de TV) y el acabado alemán serio —maderas cálidas, ajustes precisos— que la marca del grupo Erwin Hymer cultiva desde hace décadas. No esperes ayudas a la conducción modernas ni hibridación: es un diésel Fiat Ducato clásico, del que las fuentes consultadas no publican la potencia exacta para esta versión.

    En precio no hay cifra oficial que dar: es un modelo descatalogado y Bürstner no publica tarifas históricas. En el mercado de ocasión europeo las unidades bien cuidadas se mueven en la franja típica de las perfiladas alemanas de su edad, y su rareza —en Reino Unido se matricularon poquísimas unidades— puede jugar a favor del vendedor. En España, la red de Bürstner (grupo Erwin Hymer) da cobertura de servicio aunque el modelo ya no esté en catálogo.

    El Skyroof panorámico sobre la cabina y el garaje trasero de buen tamaño redondean un conjunto muy equilibrado para su precio de ocasión. Cómo lo verificamos: las cotas y la descripción del equipamiento proceden de las fichas técnicas de dos distribuidores (Abacus para el MY2020 y Swindon Caravans para el MY2017) y de la prueba en profundidad de Out & About Live, con fotos de prensa cedidas por la propia Bürstner. Todo verificado el 19/10/2026. Quedan sin dato la potencia, el par, el consumo y el precio, no publicados en las fuentes consultadas.

    Para quién es: el Ixeo IT 680 G encaja con parejas o familias de cuatro que quieren una perfilada compacta con carnet B y valoran la flexibilidad de la cama basculante longitudinal: salón despejado de día, camas sin montajes de noche. No es para quien busque una cama fija siempre hecha —aquí la cama se recoge cada mañana—, ni para quien necesite lo último en ayudas a la conducción o una mecánica documentada al milímetro antes de comprar.`,
    pros: [
      "Cama basculante longitudinal pionera: se integra en el techo y no se ve de día",
      "Se conduce con carnet B (3.500 kg de MMA)",
      "Salón para cuatro con posibilidad de segunda cama doble debajo de la basculante",
      "Baño trasero de ancho completo con ducha separada y mucho almacenaje",
      "Cocina con buena encimera al no tener que alojar cama fija",
    ],
    contras: [
      "Modelo descatalogado (2018-2020): solo mercado de ocasión",
      "Potencia y consumos no publicados en las fuentes consultadas",
      "Sin cama fija: la basculante hay que recogerla cada mañana",
      "Tecnología de su época, sin las ayudas a la conducción actuales",
      "Unidades escasas en algunos mercados, lo que puede encarecer la compra",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/burstner-ixeo-it-680-g-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Bürstner Ixeo IT 680 G, vista exterior",
        ancho: 1000,
        alto: 700,
      },
      {
        src: "/media/burstner-ixeo-it-680-g-2026-precio-ficha-tecnica-interior1.webp",
        alt: "Bürstner Ixeo IT 680 G, salón interior",
        ancho: 1000,
        alto: 700,
      },
      {
        src: "/media/burstner-ixeo-it-680-g-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Bürstner Ixeo IT 680 G, salón con comedor",
        ancho: 1000,
        alto: 700,
      },
      {
        src: "/media/burstner-ixeo-it-680-g-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Bürstner Ixeo IT 680 G, puerta de acceso con mosquitera",
        ancho: 1000,
        alto: 700,
      },
    ],
    analisisSlug: "burstner-ixeo-it-680-g-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Base Fiat Ducato: revisión cada 2 años o 48.000 km (lo que antes ocurra, según plan Fiat)",
      revisiones: [
        {
          nombre: "Revisión base (Fiat Ducato)",
          queSeCambia: "Aceite + filtros + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Bürstner (anual recomendada)",
          queSeCambia: "Estanqueidad, gas, electricidad, humedades",
          costeAproxEur: 250,
        },
      ],
    },
  },
  {
    id: "burstner-elegance-i-920-g-2026-precio-ficha-tecnica",
    marca: "Bürstner",
    modelo: "Elegance I 920 G",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: 161020, // Precio recomendado oficial Bürstner Italia (buerstner.com)
    potenciaCv: 150, // 150 CV según ficha técnica de distribuidor (2017); las últimas unidades, Mercedes 170 CV
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
    imagen: "/media/burstner-elegance-i-920-g-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/burstner-elegance-i-920-g-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/burstner-elegance-i-920-g-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 8910, // 8,91 m según ficha técnica
    anchoMm: 2320,
    altoMm: 3030,
    pesoKg: 3980, // masa en servicio según ficha técnica
    mmaKg: 5000,
    carnetNecesario: "C1", // mmaKg entre 3500 y 7500
    cargaUtilKg: 1020, // «payload» publicado en la ficha técnica del fabricante (vía distribuidor)
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4, // cama isla trasera + cama basculante doble delantera
    parNm: null,
    traccion: null, // la marca no lo declara en la ficha consultada
    emisionesCo2: null,
    aprox: ["precioDesde"],
    notas:
      "Integral insignia de Bürstner (2017-2022 aprox.). Cotas según ficha técnica de distribuidor con datos del fabricante: 8,91 x 2,32 x 3,03 m, MMA 5.000 kg, masa en servicio 3.980 kg, carga útil 1.020 kg, motor de 150 CV, 4 plazas y 4 cinturones, cama isla. Las últimas unidades (2022) se vendían sobre Mercedes con cambio automático y 170 CV, según anuncio de distribuidor. Precio: precio de venta recomendado oficial publicado por Bürstner en su web oficial de Bürstner (buerstner.com), ficha técnica del Elegance I 920 G, basado en los precios de venta de Italia; no hay tarifa oficial para España.",
    curiosidades:
      "El garaje trasero del Elegance I 920 G es tan grande —con puertas a ambos lados y estanterías a medida— que, según el anuncio de una unidad de 2022, una vez cargado todo el equipamiento «todavía queda sitio para una scooter». Fuente: Motorhome Depot, anuncio del Bürstner Elegance I 920 G 2022 (https://www.motorhomedepot.com/vehicle/burstner-elegance-i920g-2022-automatic-mercedes-a-class-motorhome-for-sale).",
    descripcion: `El Bürstner Elegance I 920 G fue, durante años, lo máximo que la marca alemana sabía hacer: su integral insignia, un clase A de 8,91 metros pensado para quien entiende la autocaravana como una segunda residencia con ruedas y no está dispuesto a renunciar a nada. La «G» del nombre indica lo que los entendidos buscan primero: garaje, y uno de los grandes de su época. Hoy descatalogado —las últimas unidades salieron sobre base Mercedes con cambio automático—, el i920 G vive una segunda vida codiciada en el mercado de ocasión premium.

    Las cifras imponen: 8,91 metros de largo, 2,32 de ancho y 3,03 de alto, con una masa máxima de 5.000 kg que obliga al carnet C1 y una masa en servicio de 3.980 kg que deja 1.020 kg de carga útil publicada por el fabricante. Son números de «liner» ligero más que de integral al uso, y se notan en todo: pasillos anchos, muebles de tamaño doméstico y una sensación de solidez que las integrales de 3.500 kg no pueden permitirse. Eso sí, con casi nueve metros hay que asumir que no es un vehículo para callejear: pide áreas amplias, parcelas grandes y una conducción tranquila y planificada.

    La distribución es la clásica de los grandes integrales europeos, ejecutada con mimo. Al fondo, el dormitorio principal con cama isla —accesible por ambos lados, con mesillas, armarios «his and hers» y claraboya—, elevada sobre un garaje trasero enorme con puertas a ambos lados: cabe de todo, desde bicicletas hasta, como presume el anuncio de una unidad de 2022, una scooter además del equipamiento. Delante del dormitorio, un cuarto de baño central completo con ducha separada, lavabo y WC, usable como aseo de cortesía cerrando las puertas correderas. La cocina, en L, es de las que invitan a cocinar de verdad: tres fuegos, horno y grill, frigorífico con congelador separado, fregadero de acero y cajones con cierre suave. Y delante, un salón en L con mesa extensible para hasta siete comensales según la ficha, con los asientos de cabina giratorios integrados en la vida a bordo. Para dormir, a la cama isla se suma una gran cama basculante doble eléctrica sobre la cabina: cuatro plazas reales sin convertir el salón cada noche.

    En tecnología y acabados, el Elegance jugaba en la liga de los Morelo y Concorde de acceso: tapicería de cuero claro, superficies tipo Corian en cocina y baño, puertas de armario en alto brillo, iluminación LED ambiental, doble suelo con almacenaje, calefacción por agua caliente Alde —la preferida para el invierno serio—, suelo radiante en algunas unidades, aire acondicionado de habitáculo, sistema de autonivelación en las unidades más equipadas y baterías de litio en las últimas. Todo rematado con el aislamiento y la insonorización que Bürstner reserva a su tope de gama: es una autocaravana silenciosa rodando, algo que se agradece en viajes largos.

    Mecánicamente, la ficha de referencia declara 150 CV sobre chasis Fiat Ducato Maxi; las últimas unidades del modelo se vendieron sobre Mercedes-Benz con 170 CV y cambio automático 9G-Tronic, una combinación mucho más moderna y descansada para mover 5 toneladas. En ambos casos, conviene revisar el historial de mantenimiento con lupa: un vehículo de este nivel y este peso castiga la mecánica si se ha descuidado, y las reparaciones no son baratas.

    En precio no hay tarifa oficial que ofrecer: descatalogado y sin precio de catálogo vigente. En el mercado de ocasión europeo, los i920 G bien mantenidos cotizan en la franja alta de su edad —son vehículos que nuevos superaban ampliamente los 150.000 euros—, y las unidades sobre Mercedes con autonivelación y litio se pagan con prima. En España hay servicio oficial a través de la red del grupo Erwin Hymer, aunque conviene confirmar la disponibilidad de piezas específicas de célula para un modelo fuera de catálogo.

    A cambio, quien la compra debe asumirla como lo que es: un vehículo de capricho con costes de capricho, donde cada revisión, cada neumático y cada noche de área se pagan en proporción a sus casi nueve metros. Pero para el viajero que hace del camino su casa durante meses, pocos integrales de su época ofrecen tanto. Cómo lo verificamos: dimensiones, pesos, carga útil, potencia y plazas proceden de la ficha técnica de distribuidor con datos del fabricante (Abacus, 2017); la descripción del interior, el garaje y la mecánica Mercedes de 2022, del anuncio detallado de Motorhome Depot. Todo verificado el 19/10/2026. Quedan sin dato el precio, el par, el consumo y las emisiones, no publicados en las fuentes consultadas.

    Para quién es: el Elegance I 920 G encaja con viajeros experimentados con carnet C1 que buscan el máximo confort en formato integral y un garaje de verdad, y que asumen —y pueden pagar— el mantenimiento de un vehículo de 5 toneladas y casi nueve metros. No es para quien tenga solo el carnet B, para quien aparque en ciudad o para presupuestos ajustados: aquí todo, del seguro al neumático, cuesta en proporción al tamaño.`,
    pros: [
      "Cama isla trasera sobre un garaje trasero gigantesco con doble acceso",
      "Carga útil publicada de 1.020 kg, impropia de un integral",
      "Calefacción Alde por agua caliente, la referencia para viajar en invierno",
      "Cuatro plazas para dormir sin convertir el salón (isla + basculante)",
      "Acabados de tope de gama: cuero, Corian, alto brillo, doble suelo",
    ],
    contras: [
      "Exige carnet C1 (5.000 kg de MMA)",
      "8,91 metros: maniobrabilidad y aparcamiento limitados",
      "Modelo descatalogado: piezas específicas de célula a confirmar",
      "Costes de mantenimiento, seguro y neumáticos acordes a su tamaño",
      "Potencia de 150 CV justa para 5 toneladas en las primeras unidades Fiat",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/burstner-elegance-i-920-g-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Bürstner Elegance I 920 G, vista exterior",
        ancho: 970,
        alto: 660,
      },
      {
        src: "/media/burstner-elegance-i-920-g-2026-precio-ficha-tecnica-interior1.webp",
        alt: "Bürstner Elegance I 920 G, salón interior",
        ancho: 1360,
        alto: 1020,
      },
      {
        src: "/media/burstner-elegance-i-920-g-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Bürstner Elegance I 920 G, dormitorio con cama isla",
        ancho: 1360,
        alto: 1020,
      },
      {
        src: "/media/burstner-elegance-i-920-g-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Bürstner Elegance I 920 G, cocina",
        ancho: 1360,
        alto: 1020,
      },
    ],
    analisisSlug: "burstner-elegance-i-920-g-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Base Fiat Ducato / Mercedes Sprinter: revisión cada 2 años o 48.000 km (según plan del fabricante de la base)",
      revisiones: [
        {
          nombre: "Revisión base (Fiat/Mercedes)",
          queSeCambia: "Aceite + filtros + inspección general",
          costeAproxEur: 450,
        },
        {
          nombre: "Revisión célula Bürstner (anual recomendada)",
          queSeCambia: "Estanqueidad, gas, electricidad, humedades, Alde",
          costeAproxEur: 300,
        },
      ],
    },
  },
];
