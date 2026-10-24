// Autocaravanas Pilote — lote Merlín 1 (18/10/2026). Corrección (b)(c)(d) 22:15 — textos lote 3.
// Datos verificados: pilote.fr (web oficial: ficha del modelo V600G —«Places couchage, 2»,
// «Charge utile, 630 kg»— + catálogo oficial de la colección 2027, válida desde 01/07/2026;
// ficha oficial del G740FGJ ÉVIDENCE —«Places couchage, 4», «Charge utile, 376 kg»—).
// NOTA DE COLECCIÓN: las unidades 2026 montan calefacción Truma Combi 4; la colección 2027
// incorpora de serie la Truma Combi D4 diésel. Precio no publicado → null.
// NOTA DE NOMENCLATURA: «G740LJ Evidence» no existe en el catálogo oficial; la ficha corresponde
// al modelo oficial G740FGJ ÉVIDENCE (integral de camas gemelas, colección 2027).
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_PILOTE_M1: Autocaravana[] = [
  {
    id: "pilote-v600g-2026-precio-ficha-tecnica",
    marca: "Pilote",
    modelo: "V600G",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: null, // Pilote no publica precios en su web ni en su catálogo; la compra es solo vía red de concesionarios
    potenciaCv: 140,
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
    imagen: "/media/pilote-v600g-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/pilote-v600g-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/pilote-v600g-2026-precio-ficha-tecnica-oficial-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990,
    anchoMm: 2050,
    altoMm: 2670,
    pesoKg: null, // Pilote no publica masa en orden de marcha; sí publica "carga útil: 630 kg"
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: 630, // cifra oficial publicada por Pilote («Charge utile, 630 kg»)
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // oficial («Places assise, 4»)
    plazasDormir: 2, // oficial («Places couchage, 2»)
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["etiquetaDgt"],
    pros: [
      "Cama transversal trasera fija siempre hecha (hasta 150x194 cm con somier de plots Froli): no se monta ni se desmonta nada a diario",
      "Gran soute bajo la cama con acceso directo al compartimento de gas y al depósito de agua limpia: admite bicis y bultos voluminosos sin plegar la cama",
      "Baño 3-en-1 con tabique pivotante (novedad 2027) que separa WC/lavabo de la ducha: ducha real separada en solo 5,99 m, algo raro en este formato",
      "Nevera de compresor a elegir entre 90 l y 138 l sin rejillas exteriores: mejor aislamiento y rendimiento con calor exterior que una trivalente de absorción",
      "Salón para 4 con mesa sobre raíles que se desplaza y se puede montar fuera: comedor interior y exterior flexible sin piezas sueltas que guardar",
    ],
    contras: [
      "Solo 2 plazas para dormir de serie; la tercera es una opción en el salón que hay que montar cada noche: justo para más de una pareja o con niños",
      "Pilote no publica ningún precio oficial: imposible comparar la tarifa base sin pasar por concesionario",
      "Caja manual de serie; el cambio automático (140, 160 o 180 CV) es una opción de pago en un segmento donde el automático ya es estándar en rivales",
      "Altura total de 2,67 m con cama transversal de 194 cm de largo útil: personas muy altas pueden ir justas tanto en cama como en la ducha (790x860)",
      "Dotación base contenida para su posicionamiento: llantas de acero de 15\", climatización manual y nevera pequeña (90 l) si no se paga la de 138 l",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/pilote-v600g-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Pilote V600G, vista lateral (foto oficial)",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/pilote-v600g-2026-precio-ficha-tecnica-oficial-ext2.webp",
        alt: "Pilote V600G con techo elevable (foto oficial)",
        ancho: 750,
        alto: 609,
      },
      {
        src: "/media/pilote-v600g-2026-precio-ficha-tecnica-oficial-interior.webp",
        alt: "Salón del Pilote V600G (foto oficial)",
        ancho: 750,
        alto: 500,
      },
      {
        src: "/media/pilote-v600g-2026-precio-ficha-tecnica-oficial-interior2.webp",
        alt: "Salón y cabina del Pilote V600G (foto oficial)",
        ancho: 768,
        alto: 512,
      },
    ],
    descripcion: "El Pilote V600G es uno de esos campers que se entienden mejor con una cifra que con un párrafo: 630 kilos. Esa es la carga útil oficial que publica Pilote para este furgón de 5,99 metros, y es la más generosa que vas a encontrar en un camper de este tamaño sin subir de MMA. En un segmento donde la báscula suele ser el enemigo silencioso —cuatro ocupantes, agua llena, bicis y toldo, y de pronto te has comido el margen—, el V600G juega con una ventaja estructural que condiciona todo lo demás: aquí se puede cargar sin hacer cuentas de cabeza. Es el best-seller de la gama de furgones de Pilote, la marca francesa del grupo Pilote, y se entiende por qué: 5,99 m de largo, 2,05 m de ancho y 2,67 m de alto sobre Fiat Ducato 2.2 de 140 CV, un formato que se conduce como un furgón grande y se aparca sin dramas donde una autocaravana de 7 metros ya empieza a pedir sitio de más. La distribución es la clásica que funciona: cama transversal trasera fija sobre un garaje enorme, salón delantero para cuatro con mesa sobre raíles y baño compacto. Pero Pilote mete varios detalles que la elevan por encima de la media del segmento. La cama, de hasta 143 × 194 cm según la ficha oficial, lleva colchón de espuma de alta resiliencia sobre somier de láminas y está siempre hecha: no hay ritual nocturno de montar y desmontar, que es exactamente lo que separa un camper para viajar de un camper para sufrir. Debajo, la soute es de las grandes de verdad, con acceso directo al compartimento de gas y al depósito de agua limpia, pensada para bicis y bultos voluminosos. El baño es un 3-en-1 de 790 × 860 mm con WC Thetford sobre guías y lavabo escamoteable que libera una ducha amplia, y en la colección 2027 estrena un tabique pivotante que separa la zona de WC y lavabo de la ducha: una ducha separada de verdad en menos de seis metros es una rareza que hay que valorar en su justa medida. La cocina apuesta por lo práctico: cuatro cajones con freno, placa de dos fuegos con encendido piezo y nevera de compresor a elegir entre 90 y 138 litros, sin rejillas exteriores, lo que mejora el aislamiento y el rendimiento cuando aprieta el calor. La calefacción merece un apunte de calendario: las unidades 2026 montan la Truma Combi 4, mientras que la colección 2027, vigente desde el 1 de julio de 2026, incorpora de serie la Truma Combi D4 diésel, que tira del depósito de gasóleo y libera de la tiranía de las bombonas en invierno. En marcha, el Ducato 2.2 de 140 CV con cambio manual de serie es una mecánica honesta y probada; el cambio automático —disponible en 140, 160 o 180 CV— es opción de pago, y aquí Pilote va un paso por detrás de rivales que ya lo ofrecen de serie. Con 3.500 kg de MMA basta el carnet B y la tracción es delantera, lo esperable en el segmento. La vida a bordo tiene detalles pensados: la mesa del salón se desplaza sobre raíles y puede montarse fuera para comer al aire libre, el techo lleva una claraboya panorámica de 62 × 42 cm con oscurecimiento y mosquitera, y hay tomas USB y de 230 V al alcance. Los peros son los de su posicionamiento: la dotación de serie es contenida —llantas de acero de 15 pulgadas, climatización manual, nevera pequeña si no se paga la grande— y las dos plazas para dormir oficiales lo definen como un vehículo de pareja, porque la tercera plaza es una opción en el salón que obliga al montaje nocturno. En precio, Pilote no publica PVP ni en web ni en catálogo: la compra es solo vía red de concesionarios, así que comparar exige pedir oferta y no hay cifra oficial que dar. Sus rivales son los campers franceses y alemanes de 6 metros con cama transversal —Chausson, Adria, Knaus—, frente a los que el V600G esgrime su carga útil oficial de 630 kg como argumento diferencial. Es para parejas viajeras que quieren un camper de uso intensivo, que cargan bicis y material sin mirar la báscula y que valoran la cama siempre hecha por encima de la última pantalla táctil. No es para familias: con dos plazas para dormir de serie, los niños no caben en la ecuación sin pasar por la opción del salón cada noche. Cómo lo verificamos: medidas (5,99 × 2,05 × 2,67 m), 4 plazas de viaje, 2 plazas para dormir y carga útil de 630 kg proceden de la ficha oficial del modelo en pilote.fr, revisada el 18/10/2026; la novedad de la Truma Combi D4 diésel y el tabique pivotante del baño corresponden a la colección 2027 del catálogo oficial; Pilote no publica precios, por eso la ficha no incluye PVP.",
    analisisSlug: "pilote-v600g-2026-analisis-opinion",
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
          nombre: "Revisión célula Pilote (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Pilote",
    },
    euroncap: null,
    notas:
      "La etiqueta ambiental DGT «C» es una inferencia editorial (diésel Euro 6), no un dato publicado por el fabricante: dato no oficial · en revisión. Precio: se deja sin dato porque Groupe Pilote no publica tarifas/PVP en abierto en sus webs oficiales (Pilote, Bavaria, Le Voyageur, Mooveo, Font Vendôme): los precios se facilitan a través de su red de concesionarios; sin PVP oficial verificable.",
    curiosidades:
      "Pilote nació en 1962, cuando André Padiou construyó su primera caravana en el taller de ebanistería de su padre en La Limouzinière (Loira Atlántico); su primer camping-car, la capuchina R430 (1976-78), iba a llamarse «Rally» y a última hora se bautizó «Pilote». Fuente: Pilote (web oficial, «Notre histoire»): https://www.pilote.fr/notre-histoire/",
    fuenteNombre: "Pilote (web oficial + catálogo colección 2027)",
    fuenteUrl: "https://www.pilote.fr/fourgon/v600g-pilote/",
  },
  {
    id: "pilote-g740fgj-evidence-2026-precio-ficha-tecnica",
    marca: "Pilote",
    modelo: "G740FGJ ÉVIDENCE",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: null, // Pilote no publica ningún precio oficial; la compra es solo vía red de concesionarios
    potenciaCv: 160, // 180 CV en opción
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
    imagen: "/media/pilote-g740fgj-evidence-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/pilote-g740fgj-evidence-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/pilote-g740fgj-evidence-2026-precio-ficha-tecnica-oficial-interior2.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7560,
    anchoMm: 2300,
    altoMm: 2850,
    pesoKg: null, // Pilote no publica masa en orden de marcha; sí publica "carga útil: 376 kg"
    mmaKg: 3500, // chasis Fiat de 3,5 t
    carnetNecesario: "B",
    cargaUtilKg: 376, // cifra oficial publicada por Pilote («Charge utile, 376 kg»)
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // oficial («Places assise, 4»)
    plazasDormir: 4, // oficial («Places couchage, 4»)
    parNm: null, // no publicado por el fabricante
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["etiquetaDgt"],
    pros: [
      "Serie especial Evidence «lista para partir»: batería de litio de 200 Ah, panel solar TOPCon de 210 W y convertidor de 2.000 W de serie; autonomía eléctrica sin enganche ni grupo electrógeno",
      "Calefacción híbrida Truma D6E de 6.000 W (diésel + eléctrica a 230 V): invierno real sin quemar bombonas de gas, porque tira del depósito de gasóleo",
      "160 CV con caja automática de serie en el Fiat Ducato 2,2 (180 CV en opción): el automático ya no es un extra de pago en esta integral de 7,56 m",
      "Camas gemelas traseras con rallonge de serie: se unen en una cama doble king size; y existe la versión «lits bas» para quien no quiera subir por escalera",
      "Ducha independiente del WC y frigorífico de compresor eléctrico sin rejillas exteriores: mejor aislamiento y rendimiento con calor que una trivalente de absorción",
    ],
    contras: [
      "Carga útil de solo 376 kg: la más ajustada entre las integrales de su tamaño; con cuatro viajeros y el depósito lleno, cada kilo cuenta",
      "Camas gemelas elevadas sobre un garaje alto: se accede por escalera (salvo la versión lits bas) y cargar bultos pesados queda a altura incómoda",
      "Cofre de gas de una sola bombona de 2,75 kg con toma exterior: coherente con una autocaravana pensada para no usar gas, pero limita si se quiere cocinar solo con bombona",
      "Pilote no publica ningún precio oficial de la Evidence: sin PVP es imposible situarla frente a sus rivales sin pedir oferta en concesionario",
      "Carrocería integral de 2,85 m de alto con gran parabrisas panorámico: más superficie acristalada que calentar o refrigerar y mayor sensibilidad al viento lateral que una perfilada",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/pilote-g740fgj-evidence-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Pilote G740FGJ ÉVIDENCE, vista tres cuartos (foto oficial)",
        ancho: 768,
        alto: 467,
      },
      {
        src: "/media/pilote-g740fgj-evidence-2026-precio-ficha-tecnica-oficial-ext2.webp",
        alt: "Integral Pilote ÉVIDENCE en ruta (foto oficial)",
        ancho: 1200,
        alto: 621,
      },
      {
        src: "/media/pilote-g740fgj-evidence-2026-precio-ficha-tecnica-oficial-ext3.webp",
        alt: "Integral Pilote ÉVIDENCE con toldo desplegado (foto oficial)",
        ancho: 1024,
        alto: 1024,
      },
      {
        src: "/media/pilote-g740fgj-evidence-2026-precio-ficha-tecnica-oficial-interior.webp",
        alt: "Dormitorio de camas gemelas de la integral Pilote ÉVIDENCE (foto oficial de la serie)",
        ancho: 1024,
        alto: 683,
      },
      {
        src: "/media/pilote-g740fgj-evidence-2026-precio-ficha-tecnica-oficial-interior2.webp",
        alt: "Salón face-face del Pilote G740FGJ ÉVIDENCE (foto oficial)",
        ancho: 768,
        alto: 512,
      },
      {
        src: "/media/pilote-g740fgj-evidence-2026-precio-ficha-tecnica-oficial-interior3.webp",
        alt: "Dormitorio de camas gemelas del Pilote G740FGJ ÉVIDENCE (foto oficial)",
        ancho: 735,
        alto: 512,
      },
    ],
    descripcion: `La serie Evidence de Pilote nace de una observación tan simple como acertada: la mayoría de los compradores de una integral acaba pidiendo los mismos extras —batería de litio grande, panel solar, inversor potente, calefacción diésel—, así que la marca francesa los ha metido todos de serie en una edición «lista para partir» y se ha ahorrado al cliente la peregrinación por la lista de opcionales. El G740FGJ Evidence es la materialización de esa idea en formato integral de 7,56 metros: un vehículo que sale del concesionario preparado para la autonomía real, no para volver al taller a equiparlo. Y es una integral de verdad, con frontal de una sola pieza y parabrisas panorámico, no una perfilada disfrazada.

Las medidas son las de una gran rutera europea: 7,56 m de largo, 2,30 m de ancho y 2,85 m de alto, con cuatro plazas de viaje y cuatro para dormir según la ficha oficial de Pilote. La distribución apuesta por las camas gemelas traseras, el formato favorito de las parejas que viajan mucho: cada uno tiene su cama, su mesilla y su acceso sin molestar al otro, y con la rallonge de serie ambas se unen en una cama doble de tamaño king size para las noches en que apetece dormir juntos. Existe además la versión «lits bas», con las camas a menor altura, pensada para quien no quiere subir por escalera cada noche —un detalle de accesibilidad que las marcas generalistas no suelen ofrecer—. Debajo de las camas, el garaje es alto y pasante, con portones a ambos lados y cerraduras de compresión de doble junta: admite bicis y material voluminoso, aunque cargar bultos pesados a esa altura pide brazos.

El salón cara a cara con mesa plegable para cinco comensales, la cocina con frigorífico de compresor eléctrico y la ducha independiente del WC —separados ambos de la zona de noche y del salón por tabiques correderos— completan una célula pensada para la vida a bordo prolongada, no para el fin de semana. El equipamiento de serie de la Evidence es su argumento de venta: batería de litio de 200 Ah, panel solar TOPCon de 210 W y convertidor de 2.000 W, una combinación que permite varios días de autonomía eléctrica sin enganche ni grupo electrógeno; y la calefacción híbrida Truma D6E de 6.000 W, que funciona con diésel del depósito y con electricidad a 230 V, para inviernos de verdad sin depender de las bombonas —el cofre de gas, de hecho, solo admite una bombona de 2,75 kg, porque esta autocaravana está pensada para no usar gas—.

En marcha, el Fiat Ducato 2.2 rinde 160 CV con cambio automático de serie, con opción de 180 CV: que el automático venga incluido en una integral de este tamaño es una declaración de intenciones, porque en este segmento el cambio manual ya es una antigualla. La tracción es delantera y con 3.500 kg de MMA basta el carnet B. Y aquí llega el pero que hay que contar sin paños calientes: la carga útil oficial es de solo 376 kg, la más ajustada entre las integrales de su tamaño. Con cuatro viajeros, el depósito de agua lleno y el garaje cargado, cada kilo cuenta, y este es el dato que el comprador debe sopesar con frialdad antes de enamorarse del equipamiento: una Evidence cargada hasta arriba viaja al límite de la báscula.

En precio, Pilote no publica PVP oficial de la Evidence —ni de ningún modelo—, así que situarla frente a sus rivales exige pedir oferta en concesionario; no hay cifra de fábrica que dar y no la vamos a inventar. Sus competidoras naturales son las integrales europeas de 7,4 a 7,6 m con camas gemelas, donde la Evidence se diferencia por venir «llena» de serie mientras las demás cobran cada extra por separado. Es para parejas viajeras experimentadas que hacen tiradas largas, que pernoctan fuera de camping y que quieren salir del concesionario sin una lista de opcionales pendiente. No es para quien viaja cargado hasta las trancas —esos 376 kg de carga útil son un techo bajo— ni para conductores que se estrenan con un vehículo de 7,56 m y 2,85 m de alto.

Origen de los datos: las medidas (7,56 × 2,30 × 2,85 m), las 4 plazas de viaje, las 4 para dormir y la carga útil de 376 kg proceden de la ficha oficial del modelo en pilote.fr, revisada el 18/10/2026; el equipamiento de la serie Evidence —litio de 200 Ah, solar de 210 W, inversor de 2.000 W, Truma D6E y camas gemelas con rallonge— sale de la misma página oficial; Pilote no publica precios, por eso la ficha no incluye PVP. Valoración final: la Evidence es la integral «llave en mano» más completa de su tamaño —autonomía eléctrica y calefacción diésel de serie—, a cambio de una carga útil de 376 kg que obliga a viajar ligero y a contar cada kilo antes de enamorarse del equipamiento.`,
    analisisSlug: "pilote-g740fgj-evidence-2026-analisis-opinion",
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
          nombre: "Revisión célula Pilote (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Pilote",
    },
    euroncap: null,
    notas:
      "La etiqueta ambiental DGT «C» es una inferencia editorial (diésel Euro 6), no un dato publicado por el fabricante: dato no oficial · en revisión. Precio: se deja sin dato porque Groupe Pilote no publica tarifas/PVP en abierto en sus webs oficiales (Pilote, Bavaria, Le Voyageur, Mooveo, Font Vendôme): los precios se facilitan a través de su red de concesionarios; sin PVP oficial verificable.",
    curiosidades:
      "En 1981 Pilote inventó el concepto de la autocaravana perfilada, un formato hoy omnipresente que entonces no existía en el mercado. Fuente: catálogo oficial Pilote 2024: https://docs.campingcar-infos.com/docs/Pilote/Pilote%202024%20Catalogue.pdf",
    fuenteNombre: "Pilote (web oficial, colección 2027)",
    fuenteUrl: "https://www.pilote.fr/integral/g740fgj-evidence/",
  },
];
