// Autocaravanas Roller Team — lote Merlín 2 (19/10/2026).
// Datos de las fichas oficiales de Roller Team (PDF de rollerteam.it y
// rollerteam.fr): fuenteNombre/fuenteUrl con la URL exacta de cada PDF.
// Zefiro 285 TL: ficha oficial (versión Fiat Ducato 140 CV); las unidades del
// año modelo 2026 se venden sobre Ford Transit 2.0 de 165 CV con cambio
// automático de 8 velocidades (anuncios de concesionarios europeos).
// Kronos 265 TL: ficha oficial (Ford Transit 130 CV); las unidades 2025/2026
// montan el Ford Transit 2.0 de 165 CV automático (MasQueCamper, Urbano).
// Precios: Roller Team España no publica tarifa oficial. Zefiro 285 TL: sin
// fuente de precio → null. Kronos 265 TL: precio de venta de una unidad nueva
// en España (MasQueCamper, Logroño), marcado en `aprox`. 4 fotos webp por
// ficha (≥1200 px) inspeccionadas visualmente: modelo y marca exactos,
// sin marcas de agua. Curiosidades con fuente en `curiosidades`.
// noindex lo gestiona Grok al integrar.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_ROLLERTEAM_M2: Autocaravana[] = [
  {
    id: "roller-team-zefiro-285-tl-2026-precio-ficha-tecnica",
    marca: "Roller Team",
    modelo: "Zefiro 285 TL",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Roller Team España no publica tarifa oficial y no hay tarifa de otro país para este modelo exacto
    potenciaCv: 165, // Ford Transit 2.0 Euro 6e de 165 CV (121 kW), unidades del año modelo 2026
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
      "/media/roller-team-zefiro-285-tl-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial:
      "/media/roller-team-zefiro-285-tl-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/roller-team-zefiro-285-tl-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6990, // ficha oficial Roller Team: 6.990 mm
    anchoMm: 2350, // ficha oficial Roller Team: 2,35 m
    altoMm: 2950, // ficha oficial Roller Team: 2.950 mm (2.040 mm interior)
    pesoKg: null, // masa en orden de marcha no publicada para esta versión
    mmaKg: 3500, // 3.500 kg (chasis Heavy homologado a 4.100 kg en el COC, rebajado)
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil de esta versión
    consumo: null,
    consumoUnidad: null,
    plazas: 5, // ficha oficial: 5 plazas homologadas
    plazasDormir: 5, // ficha oficial: camas gemelas + cama basculante + transformación del salón
    parNm: 395, // Ford Transit 2.0 de 165 CV: 395 Nm (dato de la ficha del pack Ford Zefiro)
    traccion: "Delantera", // Ford Transit, tracción delantera
    emisionesCo2: null,
    aprox: ["Sin tarifa oficial publicada por Roller Team España; el precio lo fija cada concesionario"],
    notas:
      "Medidas, plazas, camas (gemelas de 200x81 y 199x81 cm, convertibles en 165x215 cm), cama basculante de 203x135 cm, frigorífico de compresor de 158 l, cocina de 2 fuegos, calefacción Truma Combi gas de 6 kW y garaje (puertas de 120x90 cm, 121 cm de altura interior) proceden de la ficha oficial de Roller Team para el Zefiro 285 TL. La ficha oficial corresponde a la versión sobre Fiat Ducato 2.2 de 140 CV; las unidades del año modelo 2026 que anuncian los concesionarios europeos montan el Ford Transit 2.0 Euro 6e de 165 CV con cambio automático de 8 velocidades. Las fotos son de unidades reales del Zefiro 285 TL. sin PVP oficial verificable.",
    descripcion: `La Roller Team Zefiro 285 TL es la perfilada que sostiene las ventas de la gama Zefiro, y el motivo está en su planteamiento: una semiintegrada de 6,99 metros que duerme a cinco personas sin pasar de los siete metros. Es el formato que más familias buscan en Europa —lo bastante compacto para moverse con soltura y aparcar en casi cualquier área, lo bastante grande para que cinco personas viajen y duerman con dignidad—. La distribución 285 TL lo resuelve con camas gemelas traseras sobre un garaje XL, baño vario central, cocina completa y un salón delantero coronado por la cama basculante eléctrica. Cinco plazas de viaje homologadas y cinco para dormir en menos de siete metros: esa es su carta de presentación.

La base de las unidades del año modelo 2026 es el Ford Transit 2.0 Euro 6e de 165 CV (121 kW) con 395 Nm de par y cambio automático de 8 velocidades, montado sobre el chasis especial Camping-Car con eje trasero de vía ancha. Roller Team lo pide en versión Heavy: homologado a 4.100 kg en el certificado de conformidad y rebajado a 3.500 kg, lo que deja la puerta abierta a rehomologar más MMA si algún día hace falta carga útil extra. El equipamiento de conducción de estas unidades no tiene nada que envidiar a un turismo moderno: ESP con asistente de arranque en pendiente, control de tracción, crucero adaptativo con función stop & go, asistente pre-colisión, mantenimiento de carril, reconocimiento de señales, parabrisas calefactado, faros antiniebla con luz de curva, climatizador automático, cámara trasera y el sistema SYNC 4 con pantalla táctil de 12 pulgadas y cuadro semidigital de 8. La cabina, además, es de las más espaciosas de su clase, algo que agradecen los conductores altos.

Por dentro, el dormitorio trasero es de camas gemelas de 200x81 y 199x81 cm que, con el suplemento central, se convierten en una gran cama doble de 165x215 cm: la misma anchura que una cama de matrimonio doméstica. Debajo, el garaje XL admite 300 kg de carga, con 121 cm de altura interior y doble puerta de acceso de 120x90 cm; lleva toma de 220 V, ducha exterior y toma de gas externa de serie. La cocina monta dos fuegos con tapa de cristal, fregadero con tabla de corte y un frigorífico de compresor de 158 litros, generoso para una perfilada de este tamaño. El baño es uno de los argumentos de venta del modelo: un baño vario con ducha pivotante y triple separación de puertas hacia delante y hacia atrás, que los concesionarios presentan como el más grande de su categoría. El salón delantero, con dinette y asientos de cabina giratorios, se transforma en la quinta cama, y sobre él desciende la cama basculante eléctrica doble de 203x135 cm.

La calefacción de serie es la Truma Combi 6 de gas (en las unidades 2026, versión gas/eléctrica), gestionada desde el panel iNetX con aplicación móvil. La dotación eléctrica incluye booster de carga y panel solar de 200 W con regulador MPPT, y la puerta de la célula es la XL con doble punto de cierre, ventana y cierre centralizado con mando. Las ventanas son Seitz con marco, y la claraboya panorámica Open Sky inunda de luz el salón. La construcción sigue el sistema ExPS Evo de Roller Team —estructura sin madera con aislamiento de espuma—, con 10 años de garantía contra infiltraciones y depósito de aguas grises aislado y calefactado para usarla en las cuatro estaciones.

Con 6,99 m de largo, 2,35 m de ancho y 2,95 m de alto (2,04 m de altura interior), la 285 TL se mueve en la franja más ágil de las perfiladas familiares: entra en parkings y áreas donde una 7,45 m ya lo pasa mal, y con 3.500 kg de MMA se conduce con el carnet B. Eso sí, con cinco ocupantes y el garaje lleno, la carga útil real hay que vigilarla: la marca no publica la masa en orden de marcha de esta versión, así que conviene pesar la unidad equipada antes de cargarla hasta arriba.

Del precio en España no hay cifra oficial: Roller Team no publica tarifa y cada concesionario fija la suya, así que el margen de negociación forma parte de la compra. Sus rivales naturales son su hermana de gama, la Kronos 285 TL —misma filosofía con otro acabado—, la Dethleffs Trend y la Adria Matrix Axess en distribuciones equivalentes de camas gemelas. Frente a ellas, la Zefiro juega la baza del equipamiento Ford de serie (cambio automático, ayudas a la conducción, Sync 4) y de una de las mejores relaciones entre precio y dotación del segmento.

Verificación de fuentes: medidas (6,99 x 2,35 x 2,95 m), plazas (5 de viaje / 5 para dormir), camas (gemelas de 200x81 y 199x81 cm, basculante de 203x135 cm, auxiliar en dinette de 216x85 cm), frigorífico de compresor de 158 l, cocina de 2 fuegos, calefacción Truma Combi gas de 6 kW y dimensiones del garaje proceden de la ficha oficial de Roller Team para el Zefiro 285 TL. La motorización Ford Transit 2.0 de 165 CV con cambio automático de 8 velocidades, el chasis Heavy de 4.100 kg rebajado a 3.500 kg y el equipamiento de las unidades del año modelo 2026 proceden de anuncios de concesionarios europeos de unidades nuevas. La marca no publica la masa en orden de marcha ni la carga útil de esta versión: esos campos quedan sin dato y no se calculan. Las fotos corresponden a unidades reales del Zefiro 285 TL.

Perfil de comprador: la Zefiro 285 TL encaja con familias de 4 o 5 miembros que buscan una perfilada de menos de 7 metros para usarla todo el año, valoran las camas gemelas traseras y el garaje grande, y prefieren el cambio automático y las ayudas a la conducción del Ford Transit moderno. No encaja con quien busque cama isla trasera, con quien necesite una sexta plaza para dormir ni con quien quiera un PVP cerrado de fábrica para comparar sin negociar. Balance: la perfilada familiar más redonda del catálogo Roller Team por habitabilidad en 6,99 metros, con el equipamiento de conducción más completo de su franja de precio y la única pega habitual de la marca —la opacidad de precios—.`,
    pros: [
      "Distribución 285 TL probadísima: camas gemelas traseras + cama basculante eléctrica = 5 plazas para dormir en 6,99 m",
      "Ford Transit 2.0 de 165 CV con cambio automático de 8 velocidades y arsenal de ayudas a la conducción de serie",
      "Garaje XL de 300 kg con 121 cm de altura, toma de 220 V, ducha exterior y toma de gas",
      "Baño vario con ducha pivotante y triple separación de puertas, el más grande de su categoría",
      "3.500 kg de MMA: se conduce con el carnet B, con chasis Heavy de 4.100 kg rehomologable",
    ],
    contras: [
      "Sin tarifa oficial en España: cada concesionario fija su precio y comparar cuesta",
      "La marca no publica la masa en orden de marcha ni la carga útil de esta versión",
      "Con cinco ocupantes y el garaje lleno, la carga útil real hay que vigilarla de cerca",
      "Las camas gemelas son de 81 cm de ancho cada una: justas para personas corpulentas",
      "El frigorífico de compresor de 158 l rinde menos con calor extremo que un trivalente a gas",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/roller-team-zefiro-285-tl-2026-precio-ficha-tecnica-ext.webp",
        alt: "Roller Team Zefiro 285 TL, vista delantera tres cuartos con la inscripción 285 TL en la cabina",
        ancho: 1920,
        alto: 1001,
      },
      {
        src: "/media/roller-team-zefiro-285-tl-2026-precio-ficha-tecnica-ext-2.webp",
        alt: "Roller Team Zefiro 285 TL Selekt, vista lateral con el toldo y la serigrafía Zefiro",
        ancho: 1280,
        alto: 960,
      },
      {
        src: "/media/roller-team-zefiro-285-tl-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Roller Team Zefiro 285 TL, salón comedor con vistas al dormitorio",
        ancho: 1300,
        alto: 867,
      },
      {
        src: "/media/roller-team-zefiro-285-tl-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Salón del Roller Team Zefiro 285 TL con la claraboya panorámica y la cabina Ford",
        ancho: 1300,
        alto: 867,
      },
    ],
    analisisSlug: "roller-team-zefiro-285-tl-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Ford Transit 2.0: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Ford)",
      revisiones: [
        {
          nombre: "Revisión Ford Transit (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Roller Team (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Ford Transit + recomendaciones Roller Team",
    },
    euroncap: null,
    curiosidades:
      "Las camas gemelas traseras del 285 TL (200x81 y 199x81 cm) se unen con un suplemento central para formar una cama doble de 165x215 cm, la misma anchura que una cama de matrimonio doméstica: dos distribuciones en una sin mover un mueble. Fuente: ficha oficial de Roller Team para el Zefiro 285 TL (https://www.rollerteam.it/wp-content/uploads/sites/2/2024/05/ZEFIRO-FIAT-285-TL-ita.pdf).",
    fuenteNombre: "Roller Team — ficha oficial del Zefiro 285 TL (PDF)",
    fuenteUrl:
      "https://www.rollerteam.it/wp-content/uploads/sites/2/2024/05/ZEFIRO-FIAT-285-TL-ita.pdf",
  },
  {
    id: "roller-team-kronos-265-tl-2026-precio-ficha-tecnica",
    marca: "Roller Team",
    modelo: "Kronos 265 TL",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 71000, // precio de venta de una unidad nueva en España (MasQueCamper, Logroño); Roller Team no publica tarifa oficial
    potenciaCv: 165, // Ford Transit 2.0 de 165 CV (121 kW), unidades 2025/2026 con pack Matic/Selekt
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
      "/media/roller-team-kronos-265-tl-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial:
      "/media/roller-team-kronos-265-tl-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/roller-team-kronos-265-tl-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7450, // ficha oficial Roller Team: 7.450 mm
    anchoMm: 2350, // ficha oficial Roller Team: 2,35 m
    altoMm: 2850, // ficha oficial Roller Team: 2.850 mm (2.040 mm interior)
    pesoKg: null, // masa en orden de marcha no publicada para esta versión
    mmaKg: 3500, // 3.500 kg, carnet B (homologable a 4.100 kg en versión Heavy)
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil de esta versión
    consumo: null,
    consumoUnidad: null,
    plazas: 5, // ficha oficial: 5 plazas homologadas
    plazasDormir: 5, // ficha oficial: cama isla + cama basculante + auxiliar en dinette
    parNm: 395, // Ford Transit 2.0 de 165 CV: 395 Nm
    traccion: "Delantera", // Ford Transit, tracción delantera
    emisionesCo2: null,
    aprox: ["Precio de venta en España: 71.000 € (unidad nueva en MasQueCamper, Logroño, IVA incluido; Roller Team no publica tarifa oficial)"],
    notas:
      "Medidas, plazas, camas (isla trasera de 190x150 cm, basculante de 203x135 cm, auxiliar en dinette de 216x50 cm), garaje (puertas de 120x90 cm, 117 cm de altura interior), cocina de 2 fuegos, frigorífico trivalente automático de 137 l, calefacción Combi gas de 4 kW, depósitos (20/100 l de limpias en marcha/parada, 100 l de grises) y arcón de gas de 20 kg proceden de la ficha oficial de Roller Team para el Kronos 265 TL. La ficha oficial corresponde a la versión sobre Ford Transit 2.0 de 130 CV; las unidades 2025/2026 con pack Matic/Selekt que anuncian los concesionarios montan el Ford Transit 2.0 de 165 CV con cambio automático de 8 velocidades, con variantes de equipamiento (frigorífico de compresor de 150-152 l, Truma Combi 6E, cama isla regulable eléctricamente en altura). Las fotos son de unidades reales del Kronos 265 TL.",
    descripcion: `El Roller Team Kronos 265 TL es la demostración de que una cama isla no es patrimonio exclusivo de las integrales de 80.000 euros: esta perfilada de 7,45 metros coloca una auténtica cama central trasera de 190x150 cm en un formato que se conduce con el carnet B. Es uno de los modelos más veteranos y constantes del catálogo Kronos —lleva años en la gama sin cambiar su planteamiento— y el restyling de 2026 lo ha puesto al día por dentro y por fuera sin tocar lo esencial: dormir como en casa, ducha separada del WC y cinco plazas reales para viajar y para dormir.

La mecánica de las unidades actuales es el Ford Transit 2.0 de 165 CV (121 kW) con 395 Nm y cambio automático de 8 velocidades, dentro del pack Matic/Selekt que incluye además el chasis Heavy Duty. Es un salto notable respecto a la ficha oficial original, que homologaba el 130 CV manual: el 165 automático mueve con mucha más soltura los 3.500 kg de MMA en autopista y puertos, y el convertidor de par del cambio de 8 marchas hace la conducción notablemente más relajada. El equipamiento de serie de estas versiones incluye lo que hace dos años era opcional: SYNC 4 con pantalla táctil de 12 pulgadas, cuadro semidigital de 8, cámara trasera Ford, crucero adaptativo con stop & go, pre-colisión 2.2, mantenimiento de carril, reconocimiento de señales, parabrisas calefactado, sensores de aparcamiento delanteros, TPMS y freno de mano eléctrico. Todo gestionado con la lógica de un turismo moderno, no con la de un camión.

La distribución es el corazón del modelo. La cama isla trasera, accesible por ambos lados, mide 190x150 cm según la ficha oficial; en las versiones Selekt/Performance es regulable eléctricamente en altura, de modo que se puede elevar para ganar espacio en el garaje que queda debajo —con 117 cm de altura interior y doble puerta de 120x90 cm— o bajarla para acostarse sin escalones. Es el detalle que más valoran sus propietarios: el garaje se adapta a lo que toque llevar, desde bicicletas hasta una moto pequeña. Por delante de la cama, el baño con ducha separada del WC permite usar ambos a la vez, y la cocina en L monta tres fuegos triangulares con tapa de cristal en las versiones Selekt (dos en la ficha base), fregadero con tabla de corte y un frigorífico que según la versión es trivalente automático de 137 litros o de compresor de 150-152 litros. El salón delantero combina la dinette con los asientos giratorios de cabina, y sobre él desciende la cama basculante doble de 203x135 cm; la quinta plaza para dormir sale de la transformación del comedor (216x50 cm).

En la célula, la calefacción de la ficha base es la Combi gas de 4 kW, mientras que las unidades Selekt/Performance montan la Truma Combi 6E (gas + eléctrica), siempre con el panel CP Plus y, en las 2026, la gestión iNetX con app. La dotación eléctrica incluye panel solar de 200 W con regulador MPPT e instalación preparada para litio. Los depósitos son de 100 litros de limpias en parado (20 en marcha) y 100 de grises, con el de grises aislado y calefactado en el pack de invierno, y el arcón admite dos bombonas hasta 20 kg. Puerta XL con doble cierre, ventanas Seitz con marco, claraboya panorámica Open Sky y la garantía de 10 años contra infiltraciones de la construcción ExPS sin madera completan una célula pensada para el uso en las cuatro estaciones.

Con 7,45 m de largo, 2,35 m de ancho y 2,85 m de alto (2,04 m interior), el 265 TL es una perfilada grande pero manejable: más ágil que una integral equivalente y con un interior que no le envidia nada. Los 3.500 kg de MMA lo dejan en el carnet B, con la opción Heavy de 4.100 kg para quien necesite más margen de carga. Como en toda perfilada de 5 plazas, conviene vigilar el peso real una vez equipada: la marca no publica la masa en orden de marcha de esta versión.

En precio, la referencia española es una unidad nueva vendida en 71.000 € IVA incluido por el concesionario MasQueCamper de Logroño; en Bélgica, el mismo modelo en versión Performance se anuncia desde 73.299 €. Roller Team no publica tarifa oficial para España, así que cada compra se negocia con el concesionario. Sus rivales con cama isla en perfilada son escasos —la mayoría obliga a subir a integrales o a 7,5 metros—, y ahí el 265 TL juega casi solo: la Zefiro 285 TL de la propia casa apuesta por camas gemelas en 6,99 m, y fuera de Roller Team hay que mirar a la Dethleffs Globetrail o a la Chausson 640 con cama central para encontrar algo parecido.

Verificación de fuentes: medidas (7,45 x 2,35 x 2,85 m), plazas (5 de viaje / 5 para dormir), camas (isla de 190x150 cm, basculante de 203x135 cm, auxiliar en dinette de 216x50 cm), garaje (puertas de 120x90 cm, 117 cm de altura), cocina de 2 fuegos, frigorífico trivalente de 137 l, calefacción Combi gas de 4 kW, depósitos (20/100/100 l) y arcón de gas de 20 kg proceden de la ficha oficial de Roller Team para el Kronos 265 TL. La motorización Ford Transit de 165 CV con cambio automático, el precio de 71.000 € en España y las variantes de equipamiento (cama isla regulable eléctricamente, Truma Combi 6E, frigorífico de compresor) proceden de anuncios de concesionarios de unidades 2025/2026. La marca no publica la masa en orden de marcha ni la carga útil de esta versión: esos campos quedan sin dato y no se calculan. Las fotos corresponden a unidades reales del Kronos 265 TL.

Perfil de comprador: el Kronos 265 TL encaja con parejas o familias que quieren dormir en una cama isla de verdad sin pasar a una integral ni a 7,5 metros, valoran el garaje adaptable con la cama regulable en altura y prefieren el cambio automático del Transit moderno. No encaja con quien busque una perfilada compacta de menos de 7 metros, con quien necesite camas gemelas separadas ni con quien quiera un PVP cerrado de fábrica. Balance: la perfilada con cama isla más accesible del mercado, con la mecánica y el equipamiento puestos al día en 2026, lastrada solo por la opacidad de precios habitual en la marca.`,
    pros: [
      "Cama isla trasera de 190x150 cm en una perfilada de 7,45 m: dormir como en casa sin subir a una integral",
      "En versiones Selekt/Performance, la cama isla es regulable eléctricamente en altura para ampliar el garaje",
      "Ford Transit 2.0 de 165 CV con cambio automático de 8 velocidades y SYNC 4 con pantalla de 12 pulgadas",
      "Baño con ducha separada del WC y cocina en L con tres fuegos triangulares (versiones Selekt)",
      "3.500 kg de MMA: se conduce con el carnet B, con opción Heavy de 4.100 kg",
    ],
    contras: [
      "Sin tarifa oficial en España: el precio se negocia con cada concesionario",
      "La marca no publica la masa en orden de marcha ni la carga útil de esta versión",
      "7,45 m de largo: no es la perfilada más manejable en pueblos y áreas pequeñas",
      "La ficha oficial base es de 130 CV manual: el 165 automático deseable va en packs con sobreprecio",
      "El frigorífico trivalente base de 137 l se queda justo para cinco personas en verano",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/roller-team-kronos-265-tl-2026-precio-ficha-tecnica-ext.webp",
        alt: "Roller Team Kronos 265 TL Selekt, vista delantera tres cuartos con la inscripción 265 TL en la cabina",
        ancho: 1600,
        alto: 1200,
      },
      {
        src: "/media/roller-team-kronos-265-tl-2026-precio-ficha-tecnica-ext-2.webp",
        alt: "Roller Team Kronos 265 TL Selekt, vista delantera tres cuartos en el concesionario",
        ancho: 1600,
        alto: 1200,
      },
      {
        src: "/media/roller-team-kronos-265-tl-2026-precio-ficha-tecnica-interior.webp",
        alt: "Dormitorio del Roller Team Kronos 265 TL con la cama isla central",
        ancho: 1920,
        alto: 1280,
      },
      {
        src: "/media/roller-team-kronos-265-tl-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Salón y cocina del Roller Team Kronos 265 TL con los asientos de cabina giratorios",
        ancho: 1920,
        alto: 1381,
      },
    ],
    analisisSlug: "roller-team-kronos-265-tl-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Ford Transit 2.0: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Ford)",
      revisiones: [
        {
          nombre: "Revisión Ford Transit (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Roller Team (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Ford Transit + recomendaciones Roller Team",
    },
    euroncap: null,
    curiosidades:
      "En las versiones Selekt/Performance del Kronos 265 TL, la cama isla trasera es regulable eléctricamente en altura: se eleva para ganar espacio en el garaje que queda debajo (117 cm de altura interior según la ficha oficial) o se baja para acostarse sin escalones. Fuente: concesionario Urbano, Bélgica (https://www.urbano.be/shop/rolbf-392-roller-team-kronos-performance-265-tl-165-pk-cv-aut-71871).",
    fuenteNombre: "Roller Team — ficha oficial del Kronos 265 TL (PDF, rollerteam.fr)",
    fuenteUrl:
      "https://www.rollerteam.fr/wp-content/uploads/sites/3/2024/05/KRONOS-265-TL-1.pdf",
  },
];
