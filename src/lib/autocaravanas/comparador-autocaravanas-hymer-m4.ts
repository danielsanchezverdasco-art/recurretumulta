// Autocaravanas Hymer — lote Merlín 4 (19/10/2026). FUSIONADO: w14 + w15 + w20.
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

// Fuentes: nota de prensa oficial Hymer «Setting new standards: the compact Hymer ML-T 570»
// (hymer.com), comunicado de novedades Caravan Salon Düsseldorf 2026 (outandaboutlive.co.uk),
// fichas de concesionarios oficiales con datos de catálogo (TruckScout24, Schaffer-Mobil),
// ficha técnica FindMyLeisureVehicle (PDF de catálogo). Verificado el 19/10/2026.
// Notas honestas: Hymer no publica PVP oficial para España → precioDesde = Listino oficial Hymer
// Italia 2026 (111.900 €, marcado en «aprox»; se cita como referencia secundaria el precio UK
// £109.370 de catálogo). La tara exacta depende del equipamiento
// → pesoKg null; la carga útil publicada por la marca no se localizó → cargaUtilKg null.
// Consumo, emisiones y par no publicados por la marca para este conjunto → null.


// Fuentes: datos técnicos oficiales de hymer.com para el Tramp S 585 (precio base 109.900 €
// en Alemania, Sprinter 315 CDI 110 kW/150 CV Euro VI-E, cotas 709/229/298 cm, MRO 2.991 kg,
// MMA 3.500 kg, 4-5 plazas, 2-5 camas), nota de prensa oficial de Hymer del 18/08/2021 sobre
// el nuevo layout Tramp S 585, artículo de campingcarlesite.com (08/2021) con fotos oficiales
// de prensa de Hymer GmbH und Co. KG.
// Verificado el 19/10/2026.
// Notas honestas: el precio de 109.900 € es el PVP base oficial para Alemania (Hymer no
// publica tarifa oficial para España). Las 4 fotos SON oficiales: fotos de prensa de Hymer
// cedidas a campingcarlesite.com. La marca no publica la carga útil como cifra
// (cargaUtilKg = null; prohibido calcularla). Consumo, par motor y emisiones: no publicados.

import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_HYMER_M4: Autocaravana[] = [
  {
    id: "hymer-exsis-i-580-pure-2026-precio-ficha-tecnica",
    marca: "Hymer",
    modelo: "Exsis-i 580 Pure",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: 111900, // Listino oficial Hymer Italia 2026 (PDF del fabricante)
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
    aprox: ["precioDesde"],
    notas:
      "Medidas 699/222/283 cm, batalla 3.800 mm, masa en orden de marcha 3.065 kg (-/+5 %), MMA 3.500 kg, remolque máx. 2.000 kg, " +
      "Fiat Ducato 2.2 MultiJet 140 CV (180 CV opcional) Euro 6E, tracción delantera, 4 plazas, calefacción Truma 6 kW a gas, " +
      "agua limpia 120 l / grises 90 l, frigorífico 142 l, batería de célula 95 Ah AGM, aislamiento suelo/pared/techo 41/34/34 mm, " +
      "cama basculante 188x150 cm y puertas de garaje 85x109 / 75x85 cm: ficha de catálogo Hymer reproducida por el distribuidor kemperiai365.lt. " +
      "Review camperonline.it (04/01/2021): 699x222x277 cm, MMA 3.500 kg, 3.011 kg en orden de marcha, 4 plazas para viajar y 4 para dormir, " +
      "camas gemelas traseras, garaje pasante y precio base en Italia de 77.990 € con IVA (dato italiano, no válido como precio ES). " +
      "Autoevolution.com confirma 6,99 m de largo, 2,22 m de ancho, 2,83 m de alto, motor 140 CV y MMA 3.500 kg.  Precio: precio del Exsis-i 580 Pure en el listino oficial de Hymer 2026 para Italia (PDF de precios del fabricante, 111.900 €); no hay tarifa oficial para España y el modelo sale de la lista 2027." +
      "Sin dato publicado: precio oficial ES (Hymer no publica tarifa para España), consumo, par y carga útil.",
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

Cómo lo verificamos. Las medidas (699/222/283 cm), la batalla (3.800 mm), la masa en orden de marcha (3.065 kg), la MMA (3.500 kg), el motor (Fiat Ducato 2.2 MultiJet 140 CV, 180 CV opcional), la tracción delantera, las 4 plazas, la calefacción Truma de 6 kW, los depósitos (120/90 l), el frigorífico (142 l), la batería (95 Ah AGM), el aislamiento (41/34/34 mm), la cama basculante (188x150 cm) y las puertas del garaje figuran en la ficha de catálogo Hymer reproducida por el distribuidor kemperiai365.lt. La review de camperonline.it (4 de enero de 2021) confirma 699x222x277 cm, MMA de 3.500 kg, 3.011 kg en orden de marcha, 4+4 plazas y camas gemelas con garaje, y autoevolution.com corrobora las cotas y la mecánica. Todo se contrastó el 19 de octubre de 2026. Hymer no publica tarifa oficial para España: el precio aplicado es el del Listino oficial Hymer Italia 2026 (111.900 €, «aprox»); los 77.990 € citados por camperonline.it son el precio base en Italia en 2021 y no son trasladables.

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
      { src: "/media/hymer-exsis-i-580-pure-2026-precio-ficha-tecnica-oficial.webp", alt: "Hymer Exsis-i 580 Pure, vista exterior", ancho: 1920, alto: 1080 },
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
  {
    id: "hymer-ml-t-570-xperience-2026-precio-ficha-tecnica",
    marca: "Hymer",
    modelo: "ML-T 570 Xperience",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 117490, // PVP oficial España (web y lista oficial Hymer España 2027)
    potenciaCv: 170,
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
    imagen: "/media/hymer-ml-t-570-xperience-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/hymer-ml-t-570-xperience-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/hymer-ml-t-570-xperience-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6740,
    anchoMm: 2220,
    altoMm: 2920,
    pesoKg: null, // la tara varía según equipamiento; la marca no publica una cifra única
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica carga útil para esta versión; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 3,
    parNm: null,
    traccion: "trasera", // base Mercedes Sprinter 417 CDI de tracción trasera (fichas de catálogo)
    emisionesCo2: null,
    aprox: [],
    notas:
      "Procedencia de los datos: dimensiones 6.740 x 2.220 x 2.920 mm, batalla 3.660 mm, MMA 3.500 kg, " +
      "motor Mercedes Sprinter 417 CDI 2.0 l de 125 kW/170 CV con cambio 9G-TRONIC y 4 plazas de viaje " +
      "proceden de la nota de prensa oficial de Hymer y de las fichas de catálogo 2026 de concesionarios " +
      "(TruckScout24, Schaffer-Mobil). Camas gemelas traseras de 190 y 186 cm, nevera de compresor de 154 l, " +
      "agua limpia 120 l y grises 100 l, según ficha técnica de catálogo (FindMyLeisureVehicle). " +
      "Sin dato publicado: precio ES (Hymer no publica tarifa oficial en España), tara exacta, carga útil, consumo,  Precio: PVP oficial España del ML-T 570: la web oficial de Hymer en España publica la gama ML-T «desde 117.490 €» (precio basado en los precios de venta españoles) y la lista oficial de precios Hymer España 2027 (válida desde 01/07/2026) incluye el ML-T 570; la edición Xperience suma su pack homónimo (10.170 € según esa misma lista)." +
      "emisiones de CO2 y par motor (la marca no los publica para este conjunto).",
    curiosidades:
      "La edición Xperience del ML-T 570 se presentó en el Caravan Salon de Düsseldorf 2026 con acabado " +
      "exterior Stone Grey y trae de serie el cambio automático 9G-TRONIC, el paquete de asistencia a la " +
      "conducción de Mercedes y el sistema multimedia MBUX — https://www.outandaboutlive.co.uk/motorhomes/news/hymer-unveil-new-b-ml-flagship-caravan-salon",
    descripcion: `La Hymer ML-T 570 Xperience es la versión de edición especial de la perfilada compacta
más vendida de la marca alemana, construida sobre el chasis de la Mercedes-Benz Sprinter 417 CDI. Con
6,74 metros de longitud es 28 centímetros más corta que su hermana mayor, la ML-T 580, una diferencia
que se nota en cada rotonda, en cada aparcamiento de pueblo y en cada carretera de montaña: es una
autocaravana pensada para moverse con agilidad sin renunciar a la sensación de estar en una Hymer de
verdad. La edición Xperience, renovada para la temporada 2026 y presentada en el Caravan Salon de
Düsseldorf, añade un acabado exterior en gris Stone Grey y un nivel de equipamiento de serie que en
otras gamas habría que pagar aparte.

En medidas, hablamos de 6.740 mm de largo, 2.220 mm de ancho y 2.920 mm de alto, con una batalla de
3.660 mm y una altura interior que supera los 1,91 m. La masa máxima autorizada es de 3.500 kg, de modo
que se conduce con el carnet B. La distribución interior apuesta por las camas gemelas traseras —de 190
y 186 cm respectivamente, esta última 7 cm más larga que en generaciones anteriores—, un salón en L con
cuatro plazas de viaje, cocina con tres fogones y nevera de compresor de 154 litros con compartimento
congelador, y un baño compacto con ducha separada. El garaje trasero admite hasta 350 kg de carga, con
450 kg en opción, suficiente para dos bicicletas eléctricas o una moto ligera.

En tecnología y equipamiento, la Xperience se distingue por el sistema Hymer Connect, que permite
controlar los componentes del habitáculo desde el móvil, el Smart Battery System 2.0 para la gestión
inteligente de la energía, iluminación LED ambiental con temperatura de color regulable de forma
individual, claraboya panorámica en el salón y dos paneles solares de 95 W en opción. El aislamiento
está cuidado al detalle: 41 mm en el suelo y 34 mm en paredes y techo con construcción sándwich PUAL,
lo que la hace apta para viajar todo el año. En cabina, Mercedes aporta el volante multifunción en
cuero, el cuadro de instrumentos digital, la cámara de visión trasera y el paquete de asistencia a la
conducción con control de crucero adaptativo.

En camas y plazas, la configuración de serie ofrece dos plazas para dormir en las camas gemelas
traseras, ampliables a tres con la conversión del salón. Las cuatro plazas de viaje con cinturones de
tres puntos la hacen válida para una pareja que viaja con dos niños o con invitados ocasionales. Los
depósitos —120 litros de agua limpia y 100 de grises— y la calefacción diésel de 6 kW con dos baterías
de litio de 80 Ah en opción permiten una autonomía real de varios días sin conexión a red.

En mecánica, el Sprinter 417 CDI entrega 170 CV (125 kW) con la caja automática 9G-TRONIC de nueve
velocidades, una combinación que Hymer reserva para esta edición de serie. La tracción es trasera, lo
que mejora el comportamiento con carga en el eje posterior, y la normativa de emisiones es Euro VI-E.
El depósito de gasóleo y el equipo multimedia original Mercedes con Android Auto y Apple CarPlay
completan un conjunto pensado para devorar kilómetros por autopista con el aplomo de una berlina
alemana.

En precio y red comercial en España, Hymer no publica una tarifa oficial para nuestro mercado, por lo
que no es posible dar una cifra de partida verificada: el precio se negocia en cada concesionario y
depende del equipamiento elegido. Como referencia, en el Reino Unido el catálogo 2026 parte de unas
£109.370. En España la marca cuenta con una red de concesionarios oficiales repartidos por las
principales provincias, con servicio postventa y recambios garantizados por el grupo Erwin Hymer. Es
recomendable pedir presupuesto cerrado por escrito incluyendo toldo, portabicicletas y pack solar, que
son los extras más demandados.

Cómo lo verificamos: los datos de dimensiones, motor, cambio, plazas y MMA proceden de la nota de
prensa oficial de Hymer «Setting new standards: the compact Hymer ML-T 570» (hymer.com) y del
comunicado de novedades del Caravan Salon de Düsseldorf 2026 publicado por Out & About Live; las
cifras de camas, nevera, depósitos y aislamiento, de las fichas técnicas de catálogo 2026
distribuidas por la red de concesionarios (TruckScout24, Schaffer-Mobil, FindMyLeisureVehicle).
Todo verificado el 19/10/2026. Lo que la marca no publica —precio oficial en España, tara exacta,
carga útil, consumo y emisiones— queda declarado sin dato y en las notas de esta ficha.

Para quién es: es la autocaravana ideal para una pareja viajera que quiere la calidad de
construcción Hymer y la mecánica Mercedes en un formato ágil de menos de 6,8 metros, con
autonomía suficiente para escapadas largas y viajes por Europa. No es para quien necesite cuatro
camas fijas ni para familias numerosas: las dos camas gemelas y la tercera plaza opcional marcan su
límite, y quien busque tracción total deberá mirar a la versión CrossOver en lugar de la Xperience.`,
    pros: [
      "Edición Xperience con 9G-TRONIC, paquete de asistencia Mercedes y MBUX de serie",
      "Solo 6,74 m de largo: agilidad real en pueblos, rotondas y carreteras de montaña",
      "Camas gemelas traseras de 190 y 186 cm con garaje de hasta 350 kg debajo",
      "Aislamiento PUAL de 41/34 mm y calefacción diésel: apta para viajar todo el año",
      "Mecánica Mercedes Sprinter 417 CDI de 170 CV con red de servicio en toda Europa",
    ],
    contras: [
      "Hymer no publica precio oficial en España: hay que negociar cada unidad en concesionario",
      "Solo 2-3 plazas para dormir: insuficiente para familias de cuatro o más",
      "La tracción es trasera; quien quiera 4x4 debe ir a la versión CrossOver, más cara",
      "Con 3.500 kg de MMA, el margen de carga se estrecha si se equipan muchos extras",
      "La anchura de 2,22 m y la altura de 2,92 m la hacen menos discreta que un camper",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/hymer-ml-t-570-xperience-2026-precio-ficha-tecnica-oficial.webp", alt: "Hymer ML-T 570 Xperience, vista exterior", ancho: 1024, alto: 683 },
      { src: "/media/hymer-ml-t-570-xperience-2026-precio-ficha-tecnica-interior1.webp", alt: "Hymer ML-T 570, salón comedor (foto oficial Hymer)", ancho: 1750, alto: 2621 },
      { src: "/media/hymer-ml-t-570-xperience-2026-precio-ficha-tecnica-interior2.webp", alt: "Hymer ML-T 570, camas gemelas (foto oficial Hymer)", ancho: 2768, alto: 1848 },
      { src: "/media/hymer-ml-t-570-xperience-2026-precio-ficha-tecnica-detalle.webp", alt: "Hymer ML-T 570, cocina (foto oficial Hymer)", ancho: 4240, alto: 2832 },
    ],
    analisisSlug: "hymer-ml-t-570-xperience-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Mercedes Sprinter: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Mercedes Sprinter)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 380 },
        { nombre: "Revisión célula Hymer (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
  {
    id: "hymer-tramp-s-585-2026-precio-ficha-tecnica",
    marca: "Hymer",
    modelo: "Tramp S 585",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 109900, // PVP base oficial Hymer Alemania (hymer.com); no hay tarifa oficial ES
    potenciaCv: 150, // Mercedes Sprinter 315 CDI, 110 kW/150 CV, Euro VI-E (hymer.com)
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro VI-E sobre Mercedes Sprinter
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/hymer-tramp-s-585-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/hymer-tramp-s-585-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/hymer-tramp-s-585-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7090, // hymer.com: 709 cm
    anchoMm: 2290, // hymer.com: 229 cm
    altoMm: 2980, // hymer.com: 298 cm
    pesoKg: 2991, // masa en orden de marcha oficial (hymer.com)
    mmaKg: 3500, // hymer.com
    carnetNecesario: "B", // mmaKg <= 3500
    cargaUtilKg: null, // Hymer no publica la carga útil; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4-5 plazas según configuración; 4 de serie
    plazasDormir: 4, // 2-5 camas según configuración: gemelas + basculante opcional + transformación del salón
    parNm: null,
    traccion: "trasera", // base Mercedes Sprinter de tracción trasera
    emisionesCo2: null,
    aprox: ["precioDesde"], // precio oficial Alemania; en España puede diferir
    notas:
      "Cotas (709/229/298 cm), motor Mercedes Sprinter 315 CDI 110 kW/150 CV Euro VI-E, MRO 2.991 kg, MMA 3.500 kg, 4-5 plazas y 2-5 camas: datos técnicos oficiales de hymer.com (verificados 19/10/2026). Precio base 109.900 €: PVP oficial para Alemania; Hymer no publica tarifa oficial para España. Las 4 fotos son oficiales (prensa de Hymer GmbH und Co. KG vía campingcarlesite.com). Carga útil, consumo, par motor y emisiones: no publicados; quedan sin dato.",
    curiosidades:
      "Cuando Hymer presentó el Tramp S 585 en agosto de 2021, la novedad que más destacó la prensa no fue el chasis Mercedes ni las camas gemelas, sino el baño: el 585 renuncia a la ducha independiente para montar el «baño vario» con tabique pivotante, un sistema ya probado en otros modelos de la marca pero completamente rediseñado para esta distribución, que permite conservar un salón face-to-face amplio en solo 7,09 metros. Fuente: campingcarlesite.com, «HYMER Tramp S 585 : un nouveau modèle pour la gamme d'accès sur Mercedes» (https://www.campingcarlesite.com/camping-car-neuf/50197-hymer-tramp-s-585-un-nouveau-modele-pour-la-gamme-dacces-sur-mercedes), con fotos oficiales de Hymer.",
    descripcion: `El Hymer Tramp S 585 es la perfilada con la que Hymer —la marca que inventó la autocaravana moderna— democratiza el acceso a su mundo sobre base Mercedes: 7,09 metros de largo, camas gemelas traseras y el prestigio de la estrella en el morro, con un precio base oficial en Alemania de 109.900 euros que lo sitúa como la puerta de entrada a las perfiladas Hymer sobre Sprinter. Presentado en agosto de 2021 como gran novedad de la gama de acceso, el 585 lleva ya varias temporadas demostrando que «acceso» en Hymer no significa «básico».

    En medidas y habitabilidad, el Tramp S 585 ofrece 709 cm de largo, 229 cm de ancho y 298 cm de alto, con una masa en orden de marcha de 2.991 kg para una MMA de 3.500 kg: queda dentro del carnet B con un margen de carga razonable para su categoría. La distribución es la clásica ganadora del segmento: salón delantero face-to-face junto a la cabina del Sprinter, cocina central bien equipada, baño vario con tabique pivotante y, al fondo, las camas gemelas longitudinales. Es el esquema que más parejas eligen cuando quieren una autocaravana «para siempre»: cada uno duerme en su cama sin molestar al otro, el salón face-to-face es el más cómodo para comer y conversar, y la cocina central queda a mano tanto desde el salón como desde las camas. La decisión más comentada del 585 es el baño: en lugar de una ducha independiente que habría robado medio metro al salón, Hymer monta su «baño vario» con tabique pivotante, completamente rediseñado para este modelo, que ofrece WC y ducha en un espacio compacto sin sacrificar la amplitud de la zona de día.

    En tecnología y equipamiento, el Tramp S 585 juega con las cartas de la base Mercedes: el Sprinter aporta su chasis de largueros, una cabina de turismo con los sistemas de asistencia de la estrella y una imagen que impone respeto en cualquier camping. La célula Hymer suma su construcción PUAL —espuma de poliuretano entre aluminios, sin madera estructural—, mobiliario de diseño contemporáneo con superficies de alto brillo combinadas con maderas nobles, iluminación LED ambiental y los detalles que distinguen a la marca: armarios con cierre suave, claraboyas panorámicas y una cocina con frigorífico, fregadero y fuegos dimensionados para cocinar de verdad. La cama basculante eléctrica opcional sobre el salón y la transformación del face-to-face en cama permiten escalar la capacidad nocturna hasta las cinco plazas cuando la familia crece o los amigos se apuntan.

    En camas y plazas, el 585 homologa 4-5 plazas para viajar y 2-5 para dormir según la configuración: de serie, las camas gemelas traseras para dos; con la cama basculante eléctrica opcional, dos más; y con la transformación del salón, la quinta. Es una escalabilidad inteligente: se compra como el perfecto «dos plazas con todo hecho» —las gemelas son las camas que mejor descanso dan en ruta— y se adapta a las necesidades cambiantes sin cambiar de vehículo. Las gemelas, además, dejan entre ellas el paso al garaje trasero, accesible desde dentro y desde fuera, para el material voluminoso.

    En mecánica, el Mercedes Sprinter 315 CDI con 110 kW (150 CV) Euro VI-E es la motorización de acceso a la gama Tramp S sobre Mercedes: un cuatro cilindros moderno, silencioso y con par suficiente para mover con soltura los 3.500 kg de MMA. La tracción trasera del Sprinter —la configuración noble para un vehículo de este peso— proporciona una motricidad y una estabilidad en curva superiores a las de las bases de tracción delantera, especialmente apreciables con el vehículo cargado o con remolque. El cambio, la dirección y los asistentes son los del Sprinter de última generación: control de crucero adaptativo, asistente de viento lateral y frenada de emergencia forman parte del arsenal de serie u opcional según el acabado. Hymer no publica el consumo, pero el 150 CV es el equilibrio razonable entre prestaciones y eficiencia para este conjunto.

    En precio y red comercial en España, el PVP base oficial en Alemania parte de 109.900 euros; Hymer no publica una tarifa oficial para España, por lo que el precio final se configura con el distribuidor —y en este segmento, la configuración importa mucho: cambio automático 9G-Tronic, paquetes de asistencia, toldo, paneles solares y la cama basculante suman rápidamente—. La red de concesionarios oficiales Hymer en España es amplia y la marca mantiene un valor de reventa de los más altos del mercado: un Tramp S de ocasión con pocos años se vende solo. Es el segmento donde la compra se plantea también como inversión en tranquilidad.

    Cómo lo verificamos: las cotas (709 x 229 x 298 cm), el motor Sprinter 315 CDI de 110 kW/150 CV Euro VI-E, la MRO (2.991 kg), la MMA (3.500 kg), las plazas (4-5) y las camas (2-5) proceden de los datos técnicos oficiales publicados por Hymer en hymer.com, verificados el 19 de octubre de 2026. El precio base de 109.900 € es el PVP oficial para Alemania publicado por la marca. La presentación del modelo en agosto de 2021 y el baño vario con tabique pivotante rediseñado proceden del artículo de campingcarlesite.com, que reproduce fotos oficiales de prensa de Hymer GmbH und Co. KG. Los datos no publicados (carga útil, consumo, par, emisiones) quedan sin dato.

    Para quién es: el Tramp S 585 encaja con parejas que quieren estrenar Hymer sobre Mercedes sin saltar a los 130.000 euros: viajeros de larga distancia que valoran la fiabilidad del Sprinter, el descanso de las camas gemelas y el valor de reventa de la marca. Es ideal como autocaravana «definitiva» para dos, con capacidad ocasional para más. No es para quien necesite cinco camas de forma permanente (hay distribuciones familiares más adecuadas), para quien busque el precio más bajo del segmento —la estrella se paga—, ni para quien quiera una ducha independiente separada: el baño vario es una solución inteligente, pero es lo que es.`,
    pros: [
      "Base Mercedes Sprinter 315 CDI con tracción trasera: la referencia en chasis del segmento",
      "Camas gemelas traseras + basculante opcional: de 2 a 5 camas según la etapa de la vida",
      "Baño vario con tabique pivotante rediseñado: ducha y WC sin robar medio metro al salón",
      "Salón face-to-face: el más cómodo para comer y conversar en 7,09 metros",
      "Valor de reventa de los más altos del mercado: la marca Hymer se vende sola de ocasión",
    ],
    contras: [
      "Precio base de 109.900 € en Alemania y sin tarifa oficial para España: la configuración encarece rápido",
      "Motor de acceso de 150 CV: suficiente, pero los más exigentes querrán el 170 CV",
      "Sin ducha independiente: el baño vario obliga a plegar y proteger antes de ducharse",
      "MMA de 3.500 kg justos: con 4-5 ocupantes y opcionales hay que vigilar la carga útil",
      "7,09 m y 2,98 m de alto: ni discreto ni apto para todos los parkings",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/hymer-tramp-s-585-2026-precio-ficha-tecnica-oficial.webp", alt: "Hymer Tramp S 585, vista exterior sobre Mercedes Sprinter", ancho: 1000, alto: 667 },
      { src: "/media/hymer-tramp-s-585-2026-precio-ficha-tecnica-interior1.webp", alt: "Hymer Tramp S 585, camas gemelas traseras", ancho: 1000, alto: 667 },
      { src: "/media/hymer-tramp-s-585-2026-precio-ficha-tecnica-interior2.webp", alt: "Hymer Tramp S 585, cocina", ancho: 1000, alto: 667 },
      { src: "/media/hymer-tramp-s-585-2026-precio-ficha-tecnica-detalle.webp", alt: "Hymer Tramp S 585, armario ropero", ancho: 667, alto: 1000 },
    ],
    analisisSlug: "hymer-tramp-s-585-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Mercedes Sprinter: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Mercedes Sprinter)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 450 },
        { nombre: "Revisión célula Hymer (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 280 },
      ],
    },
  },
];
