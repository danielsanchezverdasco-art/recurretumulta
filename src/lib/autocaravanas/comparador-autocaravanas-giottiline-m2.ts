// Autocaravanas Giottiline — lote Merlín 2 (19/10/2026).
// Sustituciones sobre la asignación original:
//  - "Tosco 60" NO existe: Giottiline no tiene ninguna gama ni modelo "Tosco"
//    (la gama real se llama "Toscan"). Sustituido por el Giottiline Compact CX60,
//    modelo real del catálogo 2025/2026 (web oficial giottiline.com).
//  - "Therry T37" es un modelo real pero descatalogado: no figura en el catálogo
//    2025/2026 ni en la web oficial de Giottiline (la gama Therry desapareció del
//    catálogo actual). Sustituido por el Giottiline Toscan 69GC, modelo real del
//    catálogo 2025/2026 (gama Toscan, web oficial giottiline.com).
// Datos de la ficha técnica oficial del fabricante del Toscan 69GC (PDF oficial
// Giottiline "Tehnicheskij pasport", vía Travel Cars) y del catálogo oficial
// Giottiline "Collezione 2025" para el Compact C60/CX60 (vía Caravan Salon 2026).
// Precio 69GC: tarifa oficial en Italia (desde 71.400 €), marcada en `aprox`;
// Giottiline no publica PVP para España: el Listino oficial de Italia 2025/2026 fija el
// Compact CX60 en 71.400 € (marcado en «aprox»).
// 8 fotos webp (4 por ficha) de unidades reales/anuncios del modelo exacto,
// inspeccionadas visualmente (sin marcas de agua, sin campa, sin rótulos).
// Curiosidades con fuente en `curiosidades`. noindex lo gestiona Grok al integrar.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_GIOTTILINE_M2: Autocaravana[] = [
  {
    id: "giottiline-toscan-69gc-2026-precio-ficha-tecnica",
    marca: "Giottiline",
    modelo: "Toscan 69GC",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 71400, // tarifa oficial en Italia (desde 71.400 €); Giottiline España no publica PVP
    potenciaCv: 140, // 2.2 de 140 CV de serie (Fiat Ducato / Citroën Jumper / Peugeot Boxer)
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
    imagen:
      "/media/giottiline-toscan-69gc-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial:
      "/media/giottiline-toscan-69gc-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/giottiline-toscan-69gc-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6990, // ficha técnica oficial Giottiline del Toscan 69GC (6,99 m)
    anchoMm: 2320, // ficha técnica oficial Giottiline del Toscan 69GC (2,32 m)
    altoMm: 2920, // ficha técnica oficial Giottiline del Toscan 69GC (2,92 m)
    pesoKg: 3054, // masa en orden de marcha publicada por Giottiline para el 69GC
    mmaKg: 3500, // ficha técnica oficial Giottiline
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil del 69GC; no se calcula
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // ficha técnica oficial: 4 plazas de viaje (5 opcionales)
    plazasDormir: 3, // ficha técnica oficial: 2+1 camas traseras de serie (basculante y dinette opcionales)
    parNm: 350, // 2.2 de 140 CV: 350 Nm (dato oficial Fiat para el Multijet 140)
    traccion: "Delantera", // bases Stellantis, tracción delantera
    emisionesCo2: null,
    aprox: ["Precio de tarifa en Italia: desde 71.400 €"],
    notas:
      "El precio (71.400 €) es la tarifa oficial «desde» en Italia que publica la prensa especializada para el Toscan 69GC 2026 en versión estándar (75.400 € la Premiere Edition); Giottiline España no publica PVP, así que el precio final en España lo fija cada concesionario. Medidas, pesos, plazas, camas y equipamiento proceden de la ficha técnica oficial del fabricante para el 69GC. La carga útil no está publicada para este modelo: queda sin dato y no se calcula.",
    descripcion: `El Giottiline Toscan 69GC es el compacto de la gama Toscan, la serie con la que el fabricante toscano —integrado en el grupo francés Rapido— ataca el corazón del mercado europeo de las perfiladas. Con 6,99 metros de largo, el 69GC se queda justo por debajo de la barrera psicológica de los siete metros, y eso no es un detalle menor: en muchos ferris, peajes y áreas de servicio, bajar de los siete metros supone pagar menos y aparcar mejor. Es la propuesta de Giottiline para quien quiere una perfilada de verdad —con su cúpula de fibra sobre la cabina, su garaje trasero y su baño pasante— sin resignarse a mover un armatoste de siete metros y medio cada vez que sale de viaje.

La distribución GC es la clásica de camas gemelas traseras, la que nunca falla entre las parejas viajeras. En el 69GC esas camas gemelas son unificables y algo más cortas que en sus hermanos mayores, el precio a pagar por meterlo todo en 699 centímetros. Delante, una dinette en L con mesa de libro que se transforma en comedor para cinco: los asientos de la cabina giran hacia la mesa y el divanetto enfrentado completa un salón sorprendentemente social para un vehículo de este tamaño. Entre medias, el baño pasante —más contenido que el de los 74, pero completo— con ducha con columna retroiluminada y WC separado por una doble puerta que permite aislar la zona de noche. Tres plazas para dormir de serie (2+1 en la zona trasera), ampliables con la cama basculante delantera opcional de dos plazas y la cama de la dinette, también opcional.

La base mecánica es la del grupo Stellantis, a elegir entre Fiat Ducato, Citroën Jumper y Peugeot Boxer —el Ducato cuesta 1.000 euros más en tarifa—, siempre con el 2.2 Euro 6 de 140 CV sobre chasis 35 Light y cambio manual de seis velocidades de serie. La Premiere Edition añade el cambio automático de ocho marchas. De serie el 69GC ya viene bien armado para viajar: climatizador, retrovisores eléctricos, control de crucero, neumáticos de cuatro estaciones y ballesta trasera bilama reforzada. La radio no viene montada, pero todo está precableado. El Pack Privilege concentra los extras que de verdad se notan —llantas de aleación de 16 pulgadas, volante de cuero con mandos, radio con pantalla táctil, cámara trasera, cortinas plisadas, ventanilla eléctrica en la puerta de entrada, maxi claraboya trasera y caldera de gas de 6 kW—, y la Premiere Edition lo incluye de serie junto con pantalla de 9 pulgadas con Apple CarPlay y Android Auto, tapicería exclusiva «Elsa» y sistema Duocontrol para la gestión automática de la reserva de gas.

Donde el Toscan 69GC marca la diferencia respecto a la competencia de su precio es en la construcción de la célula. Giottiline eliminó la madera del perímetro del sándwich de los paneles y la sustituyó por fibroplast, un material sintético estable e insensible a la humedad, manteniendo listones de madera solo donde hace falta rigidez y anclaje de muebles. El resultado: 10 años de garantía contra infiltraciones, una cifra que pocos fabricantes de este segmento se atreven a firmar. Los paneles son de 63 mm en el suelo y 33/30 mm en paredes y techo, con revestimiento de fibra de vidrio por ambas caras. La puerta de entrada, de 60 cm, lleva cierre centralizado de dos puntos, mosquitera y oscurecedor, y con el Pack Privilege o la Premiere su ventanilla se abre eléctricamente: aire y luz sin tener que dejar la puerta abierta donde no está permitido.

Por dentro, la calefacción es la Truma Combi de 4 kW de serie (la de 6 kW, en gas, diésel o mixta gas-eléctrica, es opcional), el frigorífico es trivalente automático de 142 litros, la placa es de cristal de dos fuegos con encendido piezoeléctrico y hay campana extractora de serie. El depósito de aguas limpias es de 100 litros y el de grises, calefactado, también de 100 litros con el Pack Toscan. Las ventanas van a ras de la carrocería, la iluminación es full LED con luz indirecta sobre los armarios altos y hay tomas USB delante y detrás, además de precableado para TV y soporte. El garaje, con puertas de 84x111 y 55x111 cm y 119 cm de altura interior, está pensado para cargar hasta un scooter: soporta 300 kg y en las versiones equipadas lleva barra con anillas de amarre.

Con 6,99 m de largo, 2,32 m de ancho y 2,92 m de alto, y 3.054 kg de masa en orden de marcha para 3.500 kg de MMA, el 69GC se conduce con el carnet B y se mueve con agilidad impropia de una perfilada con garaje. La altura interior roza los 2,10 metros, notable en este formato. Sus rivales naturales son las perfiladas compactas de camas gemelas del segmento medio —la gama de acceso de los grandes grupos alemanes y franceses— frente a las que el Toscan juega la carta del precio contenido sin renunciar a detalles de construcción serios.

Del precio en España no hay cifra oficial: Giottiline no publica PVP y cada concesionario fija el suyo. Como referencia de posicionamiento, la tarifa oficial en Italia parte de 71.400 € en versión estándar y llega a 75.400 € en Premiere Edition, lo que lo sitúa en la franja media-baja de las perfiladas de su tamaño, claramente por debajo de las premium alemanas.

Verificación de fuentes: medidas (6,99 x 2,32 x 2,92 m), pesos (3.054 kg en orden de marcha / 3.500 kg MMA), plazas (4 de viaje, 5 opcionales), camas (2+1 traseras de serie, basculante y dinette opcionales), motorización 2.2 de 140 CV sobre chasis 35 Light con batalla de 3.800 mm y equipamiento proceden de la ficha técnica oficial del fabricante para el Toscan 69GC. Los precios son la tarifa oficial en Italia recogida por la prensa especializada; Giottiline España no publica PVP. La carga útil no está publicada para este modelo: queda sin dato y no se calcula. Las fotos corresponden a un Giottiline Toscan 69GC real.

Perfil de comprador: el Toscan 69GC encaja con parejas que buscan su primera perfilada —o la definitiva— sin saltar a los siete metros y medio, valoran las camas gemelas traseras, el garaje con capacidad para scooter y una garantía anti-infiltraciones de 10 años poco común en su precio. No encaja con quien necesite seis plazas para dormir de serie ni con quien busque una integral o un formato inferior a 6,5 metros. Balance: la perfilada compacta honesta del catálogo Giottiline, con argumentos de construcción por encima de su precio y el único lunar de la opacidad de precios en España.`,
    pros: [
      "6,99 m de largo: baja de los 7 metros con las ventajas que eso supone en ferris, peajes y aparcamiento",
      "Camas gemelas traseras unificables + dinette en L para cinco + baño pasante en menos de 7 metros",
      "Construcción seria: perímetro de paneles en fibroplast (sin madera) y 10 años de garantía anti-infiltraciones",
      "Base Stellantis 2.2 de 140 CV a elegir entre Ducato, Jumper y Boxer, con automático de 8 marchas en Premiere",
      "3.500 kg de MMA: se conduce con el carnet B; garaje apto para scooter (300 kg)",
    ],
    contras: [
      "Sin PVP oficial en España: cada concesionario fija su precio y comparar cuesta",
      "Las camas gemelas son algo más cortas que las de sus hermanos mayores de la gama",
      "Solo 3 plazas para dormir de serie: la basculante y la cama de dinette son opcionales",
      "La radio no viene montada de serie (aunque va precableada)",
      "La marca no publica la carga útil de este modelo",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/giottiline-toscan-69gc-2026-precio-ficha-tecnica-ext.webp",
        alt: "Giottiline Toscan 69GC, vista lateral tres cuartos (cabina Fiat)",
        ancho: 1536,
        alto: 992,
      },
      {
        src: "/media/giottiline-toscan-69gc-2026-precio-ficha-tecnica-ext-2.webp",
        alt: "Giottiline Toscan 69GC, vista lateral tres cuartos (cabina Citroën)",
        ancho: 1600,
        alto: 640,
      },
      {
        src: "/media/giottiline-toscan-69gc-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Giottiline Toscan 69GC: cama basculante sobre la dinette",
        ancho: 1600,
        alto: 1068,
      },
      {
        src: "/media/giottiline-toscan-69gc-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Interior del Giottiline Toscan 69GC: dinette en L con mesa puesta",
        ancho: 1499,
        alto: 1000,
      },
    ],
    analisisSlug: "giottiline-toscan-69gc-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Base Fiat Ducato 2.2: revisión cada 2 años o 48.000 km (lo que ocurra antes, según plan Fiat); en bases Citroën Jumper/Peugeot Boxer, seguir el plan Stellantis (2 años, según manual del propietario)",
      revisiones: [
        {
          nombre: "Revisión base mecánica (2 años / 48.000 km en Ducato)",
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
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Giottiline",
    },
    euroncap: null,
    curiosidades:
      "El Toscan presume de una solución constructiva poco común en su segmento: Giottiline eliminó la madera del perímetro del sándwich de los paneles de la célula y la sustituyó por fibroplast, un material sintético estable e insensible a la humedad, lo que le permite ofrecer 10 años de garantía contra infiltraciones. Fuente: Vita in Camper, «I magnifici tre: alla scoperta della gamma Giottiline Toscan» (https://www.vitaincamper.it/mercato/camper-e-caravan/i-magnifici-tre-alla-scoperta-della-gamma-giottiline-toscan/).",
    fuenteNombre: "Giottiline — ficha técnica oficial del Toscan 69GC (vía Travel Cars)",
    fuenteUrl:
      "https://travel-cars.ru/wp-content/uploads/2024/04/Tehnicheskij-pasport-Giotti-Toscan-69GC.pdf",
  },
  {
    id: "giottiline-compact-cx60-2026-precio-ficha-tecnica",
    marca: "Giottiline",
    modelo: "Compact CX60",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 71400, // Listino oficial Giottiline, IVA incl.
    potenciaCv: 140, // 2.2 de 140 CV (Citroën Jumper / Peugeot Boxer / Fiat Ducato, según mercado)
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
    imagen:
      "/media/giottiline-compact-cx60-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial:
      "/media/giottiline-compact-cx60-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/giottiline-compact-cx60-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990, // catálogo oficial Giottiline Collezione 2025: C60 de 5,99 m
    anchoMm: 2150, // catálogo oficial Giottiline Collezione 2025: 2,15 m de ancho
    altoMm: 2800, // catálogo oficial Giottiline Collezione 2025: 2,80 m de alto
    pesoKg: 2554, // masa en orden de marcha publicada por Giottiline para el C60
    mmaKg: 3500, // catálogo oficial Giottiline
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil del CX60; no se calcula
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // catálogo oficial: 4 plazas de viaje
    plazasDormir: 3, // catálogo oficial: 2 camas traseras + 1 en dinette (basculante delantera opcional)
    parNm: 350, // 2.2 de 140 CV: 350 Nm (dato oficial Fiat para el Multijet 140)
    traccion: "Delantera", // bases Stellantis, tracción delantera
    emisionesCo2: null,
    aprox: ["precioDesde"],
    notas:
      "Giottiline no publica PVP en España: el precio aplicado es el del Listino oficial de Italia 2025/2026 (71.400 €); el precio final en España lo fija cada concesionario. En el Reino Unido, la prensa especializada sitúa una unidad equipada con extras y Pack Privilege por debajo de las 66.000 libras. Medidas, pesos, plazas y camas proceden del catálogo oficial Giottiline Collezione 2025 (modelo C60, renombrado CX60 en la gama 2026). La carga útil no está publicada: queda sin dato y no se calcula. Precio: PVP de Italia del Listino oficial Giottiline 2025/2026 (septiembre 2025) (precios en euros, IVA incl., franco fábrica), Compact CX60 140 CV (acabado Standard) = 71.400 €; no hay tarifa oficial para España.",
    descripcion: `El Giottiline Compact CX60 es la respuesta italiana a una pregunta que cada vez se hacen más camperistas: ¿y si una perfilada pudiera ser tan manejable como un furgón? Con 5,99 metros de largo y solo 2,15 metros de ancho, el CX60 es un híbrido entre un furgonato y una perfilada clásica del que toma lo mejor de cada mundo: la scocca de verdad —con su aislamiento y su confort térmico superiores a los de un van— y unas dimensiones que se acercan mucho a las de un furgón, con todo lo que eso supone en agilidad, aparcamiento y peajes. No es casualidad que en 2026 se haya llevado el premio a la mejor autocaravana compacta en los galardones británicos del sector: es, a día de hoy, una de las perfiladas con cama fija más pequeñas que se pueden comprar en Europa.

La distribución es la que manda en este formato: cama doble transversal fija en la parte trasera, sobre un garaje de buen tamaño, y delante una media dinette con los asientos de cabina giratorios. Es el esquema que mejor aprovecha cada centímetro cuando no llegas a los seis metros: la cama siempre hecha, el garaje tragando bicis y sillas, y un salón suficiente para comer cuatro sin agobios. De serie duermen tres —dos en la cama trasera y uno en la dinette—, y la cama basculante eléctrica delantera opcional añade dos plazas más para quien viaje con niños o nietos. La cama de la dinette mide 185x100/65 cm según la ficha oficial.

La base mecánica, según el mercado, puede ser Citroën Jumper, Peugeot Boxer o Fiat Ducato, siempre con el 2.2 de 140 CV. En la unidad de referencia británica la cabina es Fiat con cambio automático, llantas de aleación de 16 pulgadas y start-stop, pero el catálogo contempla las tres bases Stellantis. El equipamiento de serie va más allá de lo básico: depósito de aguas grises calefactado, ventanas a ras de la carrocería, ISOFIX en la dinette, alfombrillas desenfundables y cortinas plisadas en la cabina. El Pack Privilege —de serie en las unidades Premiere— añade el parachoques en color de la carrocería con antinieblas integrados, radio con pantalla de 9 pulgadas con Apple CarPlay y Android Auto y mandos en el volante, cámara trasera HD, puerta de entrada ancha con ventana y cierre centralizado, maxi claraboya Skyview, fundas a juego para los asientos de cabina y pilotos traseros LED. Entre los opcionales que de verdad cambian la vida a bordo: la cama basculante eléctrica individual sobre el salón, el kit para convertir la dinette en cama, el horno y la calefacción Truma diésel-eléctrica.

Por dentro, el CX60 respira el diseño que Giottiline ha ido afinando en los últimos años: muebles altos con tiradores discretos, iluminación LED, cocina con fregadero y placa de dos fuegos con tapa de cristal, y un baño compacto pero completo con ducha. La cama trasera transversal, elevada sobre el garaje, se accede con una escalerilla plegable y ventila por la ventana trasera y la claraboya. Todo está pensado para dos personas que viajan ligeras: es una perfilada de pareja, y no pretende ser otra cosa. Los 2.554 kg de masa en orden de marcha para 3.500 kg de MMA dejan un margen generoso incluso con el depósito lleno y el garaje cargado, y el carnet B basta para conducirla.

Con 5,99 m de largo, 2,15 m de ancho y 2,80 m de alto, el CX60 juega en una liga casi sin rivales directos: las perfiladas compactas de verdad —por debajo de 6 metros y de 2,20 de ancho— se cuentan con los dedos de una mano. Sus alternativas naturales son los furgones gran volumen bien equipados y alguna capuchina compacta, frente a los que el Giottiline ofrece una célula de verdad con mejor aislamiento y una cama fija que ningún van puede igualar a igualdad de longitud.

Del precio en España no hay cifra oficial: Giottiline no publica PVP. Como referencia, en el Reino Unido una unidad de exposición con extras —cama basculante eléctrica, kit de dinette, horno, calefacción Truma diésel-eléctrica— y Pack Privilege se quedaba por debajo de las 66.000 libras, un precio que la prensa británica calificó de casi increíble para lo que ofrece. En España el precio lo fija cada concesionario.

Verificación de fuentes: medidas (5,99 x 2,15 x 2,80 m), plazas (4 de viaje), camas (2 traseras + 1 en dinette de serie), pesos (2.554 kg en orden de marcha / 3.500 kg MMA), paneles de 52/33/30 mm en fibra de vidrio y bases disponibles (Jumper/Boxer/Ducato) proceden del catálogo oficial Giottiline Collezione 2025 para el C60, renombrado CX60 en la gama 2026 según la web oficial de la marca. El equipamiento detallado y el premio 2026 proceden de la prueba de la prensa británica especializada. Giottiline no publica PVP en España: el precio de referencia es el del Listino oficial de Italia (71.400 €). La carga útil no está publicada para este modelo: queda sin dato y no se calcula. Las fotos corresponden a un Giottiline Compact C60 real (unidad Privilege).

Perfil de comprador: el Compact CX60 encaja con parejas que vienen del mundo furgoneta y quieren dar el salto a una célula de verdad sin perder manejabilidad, o con quienes aparcan en ciudad y hacen escapadas de fin de semana donde cada centímetro cuenta. No encaja con familias que necesiten cuatro camas fijas ni con quien busque un salón grande para invitar a amigos. Balance: la perfilada compacta más lógica del mercado europeo, premiada en 2026 y con un precio contenido, lastrada únicamente por la falta de tarifa oficial en España.`,
    pros: [
      "5,99 m de largo y 2,15 m de ancho: tan manejable como un furgón con célula de verdad",
      "Cama doble transversal fija sobre garaje: la cama siempre hecha en menos de 6 metros",
      "Premio a la mejor autocaravana compacta 2026 (prensa británica especializada)",
      "Equipada de serie por encima de lo esperado: grises calefactado, ISOFIX, ventanas a ras",
      "3.500 kg de MMA con 2.554 kg en orden de marcha: margen de carga generoso con carnet B",
    ],
    contras: [
      "Sin PVP oficial en España: el precio lo fija cada concesionario",
      "Solo 3 plazas para dormir de serie: la basculante delantera es opcional",
      "El baño y la dinette son compactos: es una perfilada de pareja, sin más",
      "La marca no publica la carga útil de este modelo",
      "Red comercial limitada en España frente a las grandes marcas alemanas",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/giottiline-compact-cx60-2026-precio-ficha-tecnica-ext.webp",
        alt: "Giottiline Compact CX60, vista delantera tres cuartos",
        ancho: 2560,
        alto: 1920,
      },
      {
        src: "/media/giottiline-compact-cx60-2026-precio-ficha-tecnica-ext-2.webp",
        alt: "Giottiline Compact CX60, vista trasera tres cuartos",
        ancho: 2560,
        alto: 1920,
      },
      {
        src: "/media/giottiline-compact-cx60-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Giottiline Compact CX60: cocina y cama trasera",
        ancho: 2560,
        alto: 1920,
      },
      {
        src: "/media/giottiline-compact-cx60-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Interior del Giottiline Compact CX60: dinette y cabina",
        ancho: 2560,
        alto: 1920,
      },
    ],
    analisisSlug: "giottiline-compact-cx60-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Base Fiat Ducato 2.2: revisión cada 2 años o 48.000 km (lo que ocurra antes, según plan Fiat); en bases Citroën Jumper/Peugeot Boxer, seguir el plan Stellantis (2 años, según manual del propietario)",
      revisiones: [
        {
          nombre: "Revisión base mecánica (2 años / 48.000 km en Ducato)",
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
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Giottiline",
    },
    euroncap: null,
    curiosidades:
      "El Compact CX60 ganó el premio a la mejor autocaravana compacta en los galardones 2026 de la prensa británica del sector (Out & About Live / What Motorhome), que destacó su precio —una unidad de exposición con extras y Pack Privilege se quedaba por debajo de las 66.000 libras— como «casi un error de imprenta» para lo que ofrece. Fuente: https://www.outandaboutlive.co.uk/motorhomes/awards/best-compact-motorhome.",
    fuenteNombre: "Giottiline — catálogo oficial Collezione 2025 (vía Caravan Salon 2026)",
    fuenteUrl:
      "https://www.caravan-salon.de/vis-content/event-caravan2026/exh-caravan2026.3070379/CARAVAN-SALON-2026-Giottiline-Company-S.P.A-Product-caravan2026.3070379-YoUm13fDSOKMfwHqaO1rXA.pdf",
  },
];
