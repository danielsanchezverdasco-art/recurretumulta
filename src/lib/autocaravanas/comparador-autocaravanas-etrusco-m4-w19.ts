// Autocaravanas Etrusco — lote Merlín 4 (19/10/2026).
// Fuentes: catálogo oficial Etrusco 2021, página 27 (V 5.9 DB): 595/214/271 cm,
// altura interior 195 cm, 2,3 L MJet 88 kW (120 ch), Fiat Ducato, masa en vacío
// 2.550 kg, carga útil 950 kg, PTAC 3.500 kg (3.650 kg opcional), 4 plazas,
// 2 plazas para dormir (3 en opción), cama trasera 194×140/130, frigo 89/11 L,
// aguas 116(20)/92 L, batería 95/18 Ah, Combi 4; tarifa Etrusco 2022 (54.100 €).
// Verificado el 19/10/2026.
// Notas honestas: el V 5.9 DB es un modelo de la colección 2021, descatalogado en la
// gama actual; el precio indicado (54.100 €) es el de la tarifa 2022, última localizada,
// no una tarifa vigente para España (el catálogo 2021 anunciaba 41.890 €). El consumo y
// la etiqueta DGT no los publica la marca (null).
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_ETRUSCO_M4: Autocaravana[] = [
  {
    id: "etrusco-van-5-9-db-2026-precio-ficha-tecnica",
    marca: "Etrusco",
    modelo: "V 5.9 DB",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: 54100, // tarifa Etrusco 2022, última localizada; el catálogo 2021 anunciaba 41.890 €
    potenciaCv: 120, // 2,3 L MJet 88 kW (120 ch), Fiat Ducato (catálogo oficial 2021)
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: null, // no publicada por la marca
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/etrusco-van-5-9-db-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/etrusco-van-5-9-db-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/etrusco-van-5-9-db-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5950, // catálogo oficial 2021: 595 cm
    anchoMm: 2140, // catálogo oficial 2021: 214 cm
    altoMm: 2710, // catálogo oficial 2021: 271 cm
    pesoKg: 2550, // masa en vacío (catálogo oficial)
    mmaKg: 3500, // PTAC 3.500 kg (3.650 kg opcional), catálogo oficial
    carnetNecesario: "B", // mmaKg <= 3500
    cargaUtilKg: 950, // publicada por la marca en el catálogo oficial 2021
    consumo: null, // no publicado por la marca
    consumoUnidad: null,
    plazas: 4, // catálogo oficial: 4 plazas
    plazasDormir: 2, // 2 plazas de serie (3 en opción), catálogo oficial
    parNm: null,
    traccion: null, // la marca no lo declara en la ficha técnica
    emisionesCo2: null,
    aprox: [],
    notas:
      "Dimensiones (595/214/271 cm, altura interior 195 cm), motor (2,3 L MJet 88 kW/120 ch, Fiat Ducato), masa en vacío (2.550 kg), carga útil (950 kg), PTAC (3.500 kg, 3.650 kg opcional), plazas (4), camas (2 de serie, 3 en opción), cama trasera (194×140/130 cm), frigorífico (89/11 L), aguas (116(20)/92 L), batería (95/18 Ah) y calefacción (Combi 4) del catálogo oficial Etrusco 2021, página 27. Precio: 54.100 € de la tarifa 2022 (última localizada; el catálogo 2021 anunciaba 41.890 €); no hay tarifa vigente al estar descatalogado.",
    curiosidades:
      "Con solo 2,14 metros de ancho, el catálogo oficial de Etrusco presentaba la gama Van como «le camping-car le plus maniable», el camping-car más manejable: cabe donde una autocaravana convencional no pasa. Etrusco es la marca de acceso del grupo Erwin Hymer y fabrica sus vehículos en la Toscana italiana.",
    descripcion: `La Etrusco V 5.9 DB es una furgoneta camper de 5,95 metros que resume la propuesta de la marca italiana: lo esencial, bien resuelto y a precio contenido. Pertenece a la colección 2021 y hoy está descatalogada, pero define un formato que sigue vigente —la camper sobre Fiat Ducato con cama transversal trasera— y es una de las opciones más interesantes del mercado de ocasión para quien empieza en el caravaning sin querer una autocaravana grande.

Su gran argumento es la manejabilidad: con 2,14 metros de ancho y 5,95 de largo, se conduce como una furgoneta grande, aparca en una plaza de turismo alargada y entra en pueblos y caminos donde una perfilada de 2,30 metros sufre. El catálogo oficial la presentaba como «le camping-car le plus maniable», y no era eslogan vacío: esa estrechez, unida a la altura interior de 1,95 metros, la hace habitable sin penalizar la conducción. El motor 2,3 litros MJet de 88 kW (120 CV) sobre base Fiat Ducato mueve con soltura sus 2.550 kg en vacío, y la carga útil publicada por la marca —950 kg, una cifra excelente— deja margen de sobra para cuatro ocupantes, agua y equipaje sin acercarse al PTAC de 3.500 kg (ampliable a 3.650 kg en opción). Se conduce con el carnet B.

La distribución DB es la clásica de las campers de este tamaño: salón delantero con banquetas y mesa, cocina central con dos fuegos y frigorífico de 89 litros (más 11 de congelador), cuarto de baño compacto con ducha y WC de casete, y cama transversal trasera de 194 × 140/130 cm. Duermen dos personas de serie, con opción a una tercera plaza, y viajan cuatro homologadas. Los depósitos —116 litros de agua limpia (20 en marcha) y 92 de grises— dan autonomía para varios días, la batería de 95 Ah (más 18 Ah de apoyo) cubre el consumo básico y la calefacción Combi 4 permite alargar la temporada más allá del verano.

Etrusco es la marca de acceso del grupo Erwin Hymer, el gigante europeo del caravaning, y fabrica en San Casciano, en la Toscana. Eso se traduce en una industrialización seria a precio ajustado: materiales sencillos pero bien montados, y una red de servicio que comparte con el resto del grupo. La tarifa de 2022 la situaba en 54.100 € (el catálogo de 2021 anunciaba 41.890 €), cifras que hoy solo sirven como referencia histórica porque el modelo está descatalogado; en ocasión, su cotización depende del estado y el kilometraje.

En España, la red de distribuidores de Etrusco cubre las principales zonas, y el mantenimiento es el de cualquier Ducato camper: plan Fiat para la base y revisión anual de la célula. Al ser un vehículo sencillo, sin techo elevable ni sistemas complejos, los costes de mantenimiento y las averías potenciales son menores que en campers más sofisticadas.

La gama Van de Etrusco se articulaba en varias longitudes, y la 5.9 era la más equilibrada: la 5.9 DB con cama transversal trasera frente a la 5.9 DF con cama doble francesa, cada una con su público. Esa claridad de oferta —pocas versiones, bien definidas— es parte del secreto de su precio: menos combinaciones significan costes industriales menores, y el ahorro llega al cliente. En el mercado de ocasión, una V 5.9 DB bien mantenida es una compra sensata siempre que se verifiquen los puntos habituales de cualquier camper de su edad: estanqueidad del techo y las claraboyas, estado de la batería auxiliar, funcionamiento de la Combi 4 y ausencia de humedades en los bajos del baño.

A la hora de comparar con sus rivales de ocasión —las campers de entrada de otros grupos—, la Etrusco juega la carta del respaldo: pertenecer al grupo Erwin Hymer significa repuestos disponibles y una red de servicio que no depende de un importador pequeño. No es la camper más equipada ni la más refinada, pero es de las que menos sustos dan, y eso, en un primer vehículo de ocio, vale mucho.

Cómo lo verificamos: todas las cifras —dimensiones, motor, masas, carga útil, plazas, cama, frigorífico, aguas, batería y calefacción— proceden del catálogo oficial Etrusco 2021, página 27 (modelo V 5.9 DB), consultado el 19/10/2026. El precio de 54.100 € es el de la tarifa Etrusco 2022, última localizada. Lo que Etrusco no ofrece —consumo, etiqueta DGT, tarifa vigente— se deja sin cifra y se detalla en las notas del modelo.

Para quién es: encaja con quienes se inician en el caravaning y quieren una camper manejable, con baño y ducha, sin gastarse lo que cuesta una autocaravana; con parejas que viajan ligeras y valoran aparcar en cualquier sitio; y con compradores de ocasión que buscan la fiabilidad del grupo Hymer a precio contenido. Es ideal como primer vehículo de ocio y como segunda camper para escapadas. No encaja con familias de más de dos o tres miembros —las plazas para dormir son justas—, con quien necesite mucho almacenaje (no hay garaje), ni con quien busque el máximo equipamiento: la V 5.9 DB apuesta por lo esencial, y los lujos hay que buscarlos en gamas superiores.`,
    pros: [
      "Solo 2,14 m de ancho: la camper más manejable de su época según el catálogo oficial",
      "Carga útil de 950 kg publicada por la marca, excelente para una camper de 3,5 t",
      "Baño con ducha y WC de casete más cocina completa en menos de 6 metros",
      "Marca del grupo Erwin Hymer con fabricación en Italia: respaldo industrial a precio ajustado",
      "Sencillez mecánica: sin techo elevable ni sistemas complejos, mantenimiento contenido",
    ],
    contras: [
      "Modelo descatalogado (colección 2021): solo disponible de ocasión, sin tarifa vigente",
      "Solo 2 plazas para dormir de serie (3 en opción): justa para más de una pareja",
      "Sin garaje: el material voluminoso viaja en el habitáculo",
      "Motor de 120 CV suficiente pero sin reservas para puertos cargados",
      "Acabados sencillos acordes a su precio: no es una camper premium",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/etrusco-van-5-9-db-2026-precio-ficha-tecnica-oficial.webp", alt: "Etrusco V 5.9 DB, vista exterior", ancho: 1200, alto: 800 },
      { src: "/media/etrusco-van-5-9-db-2026-precio-ficha-tecnica-interior1.webp", alt: "Etrusco V 5.9 DB, salón interior", ancho: 1200, alto: 800 },
      { src: "/media/etrusco-van-5-9-db-2026-precio-ficha-tecnica-interior2.webp", alt: "Etrusco V 5.9 DB, cocina y cama", ancho: 1200, alto: 800 },
      { src: "/media/etrusco-van-5-9-db-2026-precio-ficha-tecnica-detalle.webp", alt: "Etrusco V 5.9 DB, detalle de cocina", ancho: 640, alto: 800 },
    ],
    analisisSlug: "etrusco-van-5-9-db-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Etrusco (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
