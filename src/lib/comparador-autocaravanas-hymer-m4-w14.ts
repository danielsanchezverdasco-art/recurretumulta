// Autocaravanas Hymer — lote Merlín 4 (19/10/2026).
// Fuentes: ficha técnica oficial reproducida por el distribuidor kemperiai365.lt
// (datos de catálogo Hymer: 699/222/283 cm, batalla 3.800 mm, 3.065 kg en orden de marcha,
// MMA 3.500 kg, Fiat Ducato 2.2 MultiJet 140 CV, Truma 6 kW, agua 120/90 l, frigorífico 142 l),
// review "Hymer Exsis I 580 Pure" (camperonline.it, 04/01/2021: 699x222x277 cm, MMA 3.500 kg,
// 3.011 kg en orden de marcha, 4+4 plazas, camas gemelas, precio base Italia 77.990 € con IVA),
// artículo autoevolution.com (datos 6,99 m, 2,22 m, 2,83 m, motor 140 CV, MMA 3.500 kg).
// Verificado el 19/10/2026.
// Notas honestas: Hymer no publica tarifa oficial para España; el precio base de 77.990 €
// es de Italia 2021 y no se usa como precio ES. La carga útil no la publica la marca (null).
// Foto oficial: 1 (hymer.com, kit de prensa); resto, fotos de prensa y de concesionario
// del modelo exacto.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_HYMER_M4: Autocaravana[] = [
  {
    id: "hymer-exsis-i-580-pure-2026-precio-ficha-tecnica",
    marca: "Hymer",
    modelo: "Exsis-i 580 Pure",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: null, // Hymer no publica tarifa oficial para España
    potenciaCv: 140, // Fiat Ducato 2.2 MultiJet 140 CV de serie; 180 CV en opción (Hymer/kemperiai365.lt)
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro 6E
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/hymer-exsis-i-580-pure-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/hymer-exsis-i-580-pure-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/hymer-exsis-i-580-pure-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6990, // 699 cm (Hymer vía kemperiai365.lt; camperonline.it; autoevolution.com)
    anchoMm: 2220, // 222 cm (Hymer vía kemperiai365.lt; camperonline.it; autoevolution.com)
    altoMm: 2830, // 283 cm (Hymer vía kemperiai365.lt; autoevolution.com); la review camperonline.it de 2021 declara 277 cm
    pesoKg: 3065, // masa en orden de marcha -/+5 % (Hymer vía kemperiai365.lt); camperonline.it declara 3.011 kg en 2021
    mmaKg: 3500, // 3.500 kg (Hymer vía kemperiai365.lt; camperonline.it)
    carnetNecesario: "B",
    cargaUtilKg: null, // no la publica la marca; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas homologadas (Hymer vía kemperiai365.lt; camperonline.it)
    plazasDormir: 4, // camas gemelas traseras + cama basculante 188x150 (kemperiai365.lt; camperonline.it: "letti gemelli")
    parNm: null,
    traccion: "delantera", // "Front-wheel drive" en la ficha de catálogo Hymer (kemperiai365.lt)
    emisionesCo2: null,
    aprox: [],
    notas:
      "Medidas 699/222/283 cm, batalla 3.800 mm, masa en orden de marcha 3.065 kg (-/+5 %), MMA 3.500 kg, remolque máx. 2.000 kg, " +
      "Fiat Ducato 2.2 MultiJet 140 CV (180 CV opcional) Euro 6E, tracción delantera, 4 plazas, calefacción Truma 6 kW a gas, " +
      "agua limpia 120 l / grises 90 l, frigorífico 142 l, batería de célula 95 Ah AGM, aislamiento suelo/pared/techo 41/34/34 mm, " +
      "cama basculante 188x150 cm y puertas de garaje 85x109 / 75x85 cm: ficha de catálogo Hymer reproducida por el distribuidor kemperiai365.lt. " +
      "Review camperonline.it (04/01/2021): 699x222x277 cm, MMA 3.500 kg, 3.011 kg en orden de marcha, 4 plazas para viajar y 4 para dormir, " +
      "camas gemelas traseras, garaje pasante y precio base en Italia de 77.990 € con IVA (dato italiano, no válido como precio ES). " +
      "Autoevolution.com confirma 6,99 m de largo, 2,22 m de ancho, 2,83 m de alto, motor 140 CV y MMA 3.500 kg. " +
      "En null: precio oficial ES (Hymer no publica tarifa para España), consumo, par y carga útil.",
    curiosidades:
      "El apellido 'Pure' no es un acabado más: Hymer lanzó el Exsis-i 580 Pure como una serie especial 'todo equipado' con precio cerrado, " +
      "pensada para quien quiere la integral estrecha sin pasar por la lista de opcionales. La prensa italiana lo presentó así en enero de 2021: " +
      "'si chiama Exsis I 580, proposto nella versione speciale denominata Pure', destacando sus camas gemelas, el garaje pasante y unas " +
      "dimensiones exteriores contenidas poco habituales en una integral. Lo publicó camperonline.it en 'Hymer Exsis I 580 Pure': " +
      "https://www.camperonline.it/magazine/2021/01/04/hymer-exsis-i-580-pure/print/",
    descripcion: `La Hymer Exsis-i 580 Pure es la integral estrecha de Hymer: 6,99 metros de largo, solo 2,22 metros de ancho y 3.500 kg de MMA para el carné B. La familia Exsis nació con una idea clara dentro del catálogo de la marca alemana —la integral para quienes encuentran demasiado anchas las de 2,32-2,35 metros— y la versión Pure la convirtió en una propuesta "llave en mano": una serie especial con equipamiento completo y precio cerrado, sin la habitual lista de opcionales que encarece las integrales alemanas. Construida con la tecnología PUAL de Hymer (espuma de poliuretano en paredes, techo y suelo, con 41/34/34 mm de aislamiento), promete la solidez y el aislamiento de sus hermanas mayores en un formato más ágil.

La distribución aprovecha cada centímetro de los 2,22 metros de anchura. Atrás, dos camas gemelas longitudinales sobre un garaje pasante de buen tamaño —con puertas de 85x109 y 75x85 cm—, la configuración favorita de las parejas que duermen mejor por separado o que quieren convertirlas en una gran superficie. Delante, el salón en L con los asientos de cabina giratorios y la cocina en línea con fregadero, cocina de tres fuegos y una torre de frigorífico de 142 litros con congelador, más propia de una integral grande que de una compacta. El baño es una pieza única seca, con ducha de fibra de una sola pieza, WC y lavabo con mueble, una solución compacta pero completa que deja más metros para la cocina. La cuarta plaza para dormir la aporta la cama basculante de 188x150 cm sobre el salón, de accionamiento manual. Con 1,98 metros de altura interior en la zona de estar se camina erguido sin problemas.

La base es el Fiat Ducato de chasis bajo para camping-car con batalla de 3.800 mm y el 2.2 MultiJet de 140 CV con cambio manual de seis marchas (180 CV y automático en opción), depósito de 90 litros y depósito de AdBlue de 19 litros. La dotación de la serie Pure incluye faros Hymer con LED diurno, llantas de aleación de 16 pulgadas, neumáticos M+S, retrovisores eléctricos y calefactados del color de la carrocería, airbags de conductor y acompañante, volante y pomo de cuero, y calefacción Truma de 6 kW a gas con hueco para dos bombonas de 11 kg. Los depósitos son de 120 litros de agua limpia y 90 de grises, y la batería de la célula es una AGM de 95 Ah, con tomas de 230 V, 12 V y USB repartidas por la célula.

En carretera, la Exsis-i se distingue de las integrales grandes desde el primer kilómetro: los 2,22 metros de ancho y la batalla de 3,8 metros la hacen dócil en rotondas y cambios de carril, y el parabrisas panorámico da una visibilidad que ninguna perfilada iguala. El Ducato de 140 CV mueve los 3.500 kg con solvencia en llano y se defiende en puertos; quien viaje siempre muy cargado o por alta montaña tiene la opción del 180 CV con cambio automático de nueve marchas. La altura de 2,83 metros exige atención en ramas bajas y parkings con gálibo, pero a cambio el interior respira con sus casi dos metros de altura libre. Es una autocaravana para hacer kilómetros sin cansarse, no para correr.

Cómo lo verificamos. Las medidas (699/222/283 cm), la batalla (3.800 mm), la masa en orden de marcha (3.065 kg), la MMA (3.500 kg), el motor (Fiat Ducato 2.2 MultiJet 140 CV, 180 CV opcional), la tracción delantera, las 4 plazas, la calefacción Truma de 6 kW, los depósitos (120/90 l), el frigorífico (142 l), la batería (95 Ah AGM), el aislamiento (41/34/34 mm), la cama basculante (188x150 cm) y las puertas del garaje figuran en la ficha de catálogo Hymer reproducida por el distribuidor kemperiai365.lt. La review de camperonline.it (4 de enero de 2021) confirma 699x222x277 cm, MMA de 3.500 kg, 3.011 kg en orden de marcha, 4+4 plazas y camas gemelas con garaje, y autoevolution.com corrobora las cotas y la mecánica. Todo se contrastó el 19 de octubre de 2026. Hymer no publica tarifa oficial para España, así que el precio queda en null: los 77.990 € citados por camperonline.it son el precio base en Italia en 2021 y no son trasladables.

Para quién es. La Exsis-i 580 Pure encaja con parejas viajeras que quieren una integral de verdad —parabrisas panorámico, garaje pasante, cocina seria— pero encuentran demasiado voluminosas las integrales de 2,35 m de ancho: esos 10-13 cm de menos se notan en pueblos, áreas y carreteras de montaña. La serie Pure, además, es para quien prefiere comprar equipada de fábrica antes que pelear con opcionales. Las camas gemelas traseras la hacen ideal para dormir cómodos dos adultos con independencia total. No es para familias de cuatro que viajen siempre juntas: la cama basculante es perfecta de forma ocasional, pero el día a día de cuatro con un solo baño compacto se hace largo. Tampoco para quien busque el precio más bajo del segmento: Hymer se paga, y la red oficial en España, aunque existente, es menos densa que la de las marcas francesas. Y como en toda integral de 3.500 kg tan equipada, la carga útil real de cada unidad hay que comprobarla en su ficha antes de firmar.`,
    pros: [
      "Solo 2,22 m de ancho: la integral más ágil en pueblos y carreteras estrechas",
      "Camas gemelas traseras sobre garaje pasante con puertas de 85x109 cm",
      "Serie especial Pure: equipamiento completo de fábrica sin lista de opcionales",
      "Torre de frigorífico de 142 l con congelador y cocina de tres fuegos",
      "Construcción PUAL con aislamiento 41/34/34 mm, la solidez típica de Hymer",
    ],
    contras: [
      "Sin tarifa oficial para España: el precio real lo fija cada distribuidor",
      "La anchura contenida se paga con un baño compacto y pasillos justos",
      "La cuarta plaza (cama basculante) es ocasional, no para uso diario de cuatro",
      "Carga útil a comprobar en la ficha de cada unidad: mucho equipamiento en 3.500 kg",
      "Red oficial en España menos densa que la de las marcas francesas generalistas",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/hymer-exsis-i-580-pure-2026-precio-ficha-tecnica-oficial.webp", alt: "Hymer Exsis-i 580 Pure, vista exterior", ancho: 1600, alto: 1200 },
      { src: "/media/hymer-exsis-i-580-pure-2026-precio-ficha-tecnica-interior1.webp", alt: "Hymer Exsis-i 580 Pure, dormitorio con camas gemelas", ancho: 1600, alto: 1067 },
      { src: "/media/hymer-exsis-i-580-pure-2026-precio-ficha-tecnica-interior2.webp", alt: "Hymer Exsis-i 580 Pure, camas gemelas traseras", ancho: 1600, alto: 1067 },
      { src: "/media/hymer-exsis-i-580-pure-2026-precio-ficha-tecnica-detalle.webp", alt: "Hymer Exsis-i 580 Pure, detalle de las camas gemelas", ancho: 1000, alto: 674 },
    ],
    analisisSlug: "hymer-exsis-i-580-pure-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 48.000 km según plan del fabricante",
      revisiones: [
        { nombre: "Revisión base (Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Hymer (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 280 },
      ],
    },
  },
];
