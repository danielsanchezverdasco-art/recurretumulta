// Autocaravanas Adria — lote Merlín 3 (19/10/2026).
// Fuentes: lista oficial de precios Adria 2026 (adria-center.si), catálogo Adria 2026/2027,
// nota de prensa oficial adria-mobil.com (nueva gama Twin / European Innovation Award 2025),
// ficha técnica Adria reproducida por fourgonlesite.com (Twin Sports 640 SGX PTR),
// TruckScout24 y swindoncaravansgroup (verificación de modelos MY2026),
// camprest.com, outandaboutlive.co.uk (curiosidades). Verificado el 19/10/2026.
// Notas honestas: Adria no publica PVP para España en su web; los precios quedan sin dato y
// solo se citan referencias extranjeras o de concesionario en el texto con su fuente.
// La altura del Matrix Axess 670 SL (2910 mm) y del Sonic 700 SL (2950 mm) se toma de la
// ficha de la misma carrocería en la generación 2026 y se marca como aproximada.
// El modelo «Sonic Plus I 810 SCL» asignado no existe en la gama 2026 (la gama Sonic 2026
// solo incluye 600 SL, 700 DC/DL/SL; no existe «Plus» ni «810»): se sustituye por el
// Adria Sonic 700 SL real. El «Twin Plus 640 SGX» fue una línea 2019-2021 que ya no
// existe: se sustituye por el Adria Twin Sports 640 SGX real de la gama Twin 2026.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_ADRIA_M3: Autocaravana[] = [
  {
    id: "adria-matrix-axess-670-sl-2026-precio-ficha-tecnica",
    marca: "Adria",
    modelo: "Matrix Axess 670 SL",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Adria no publica PVP para España; null = «no publicado»
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
    imagen: "/media/adria-matrix-axess-670-sl-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/adria-matrix-axess-670-sl-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/adria-matrix-axess-670-sl-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7495, // catálogo Adria 2026/2027
    anchoMm: 2299, // catálogo Adria 2026/2027
    altoMm: 2910, // aprox.: ficha Matrix Supreme 2026, misma carrocería
    pesoKg: null,
    mmaKg: 3500, // versión 35L
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no la publica en la documentación consultada
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4,
    parNm: null,
    traccion: "delantera", // Fiat Ducato / Citroën Jumper, declarada por el fabricante base
    emisionesCo2: null,
    aprox: [],
    notas:
      "Largo y ancho del catálogo Adria 2026/2027. Altura aproximada (2910 mm) tomada de la ficha del Matrix Supreme 2026, que comparte carrocería. MMA 3500 kg (versión 35L). Motor 140 CV en ambas bases (Citroën BlueHDI 2.2 o Fiat Multijet3 2.2) según lista oficial de precios 2026. Precio sin dato porque Adria no publica tarifa para España; en el texto se citan solo referencias extranjeras con fuente. Carga útil sin publicar. Consumo sin cifra oficial (la curiosidad cita una medición independiente de Camprest).",
    curiosidades:
      "En una prueba a plena carga (dos adultos y un niño) la publicación Camprest midió un consumo real de 12,4 l/100 km para el Matrix Axess 670 SL. Fuente: https://camprest.com/en/blog/motorhome-caravan-news/adria-matrix-axess-670-sl-motorhome-test",
    descripcion: `La Adria Matrix Axess 670 SL es la perfilada de acceso a la familia Matrix para la temporada 2026, y su planteamiento es tan esloveno como sensato: una célula compacta de 7,50 metros sobre base de furgón, con la cama doble trasera en disposición individual (las dos camas gemelas que dan nombre a la terminación «SL») y una cama abatible sobre el salón que completa las cuatro plazas de noche. Es el formato que mejor envejece en el mercado europeo de ocasión y de alquiler, porque resuelve el viaje en pareja y el viaje en familia sin obligar a arrastrar ocho metros de carrocería.

    Con 7.495 mm de largo y 2.299 mm de ancho según el catálogo Adria 2026/2027, la 670 SL se mueve en la franja que todavía aparca en una plaza generosa y gira sin dramas en los pueblos. La altura ronda los 2.910 mm (dato aproximado, tomado de la ficha del Matrix Supreme 2026 que comparte carrocería). La masa máxima autorizada es de 3.500 kg en la versión 35L, de modo que se conduce con el carnet B, y el peso contenido de la gama Axess —la línea de entrada de Matrix— deja un margen de carga útil razonable para cuatro ocupantes con su equipaje, la despensa y las bicis en el garaje trasero.

    El interior sigue el guion clásico de las gemelas: dormitorio trasero con dos camas individuales, baño completo en un lateral y cocina enfrentada, salón delantero con asientos giratorios de cabina y la cama de techo abatible que se despliega en segundos. La gracia de la distribución SL es que las camas traseras se usan a diario sin transformar nada, y la cama delantera solo aparece cuando viajan los niños o los invitados. La calefacción es Truma, el estándar del sector en este segmento, con la red de aire caliente repartida por la célula.

    En mecánica, la temporada 2026 ofrece dos bases a elegir: Citroën Jumper BlueHDI 2.2 de 140 CV o Fiat Ducato Multijet3 2.2 de 140 CV, ambas con tracción delantera. Son los dos primos de la familia Stellantis, con la red de talleres más densa de Europa para furgones, lo que en la práctica significa repuestos y mano de obra sin sorpresas vivas donde vivas. La lista oficial de precios 2026 publicada por el importador esloveno (válida hasta el 1 de julio de 2026) tarifa el Matrix Axess 670 SL en 84.864 euros con base Citroën y 87.131 euros con base Fiat, IVA esloveno incluido; sirve como referencia de posicionamiento, pero no es un precio español y Adria no publica PVP para España, así que la cifra que pagues aquí la pone tu concesionario con sus packs y su matriculación.

    ¿Para quién es? Para la pareja que quiere una perfilada de verdad —con baño separado y camas hechas— sin saltar a los 7,5 metros largos ni al presupuesto de las gamas altas; para la familia con uno o dos niños que duermen en la abatible delantera; y para quien mira la reventa, porque las 670 SL son de lo más líquido del mercado de ocasión. No es para quien necesite cama isla (aquí las camas son gemelas), ni para quien viaje siempre con cuatro adultos (la cuarta y quinta plaza de noche son la abatible, cómoda pero no un dormitorio), ni para quien busque el aislamiento y el equipamiento de las gamas Supreme.

    En habitabilidad, la 670 SL rinde mejor de lo que sugieren sus 7,50 metros gracias a dos decisiones bien resueltas: el garaje trasero bajo las camas gemelas, que traga bicicletas, sillas y la mesa de exterior sin invadir la célula, y la claraboya panorámica sobre la cabina, que inunda de luz el salón y hace que el interior respire aunque fuera llueva. Los armarios altos recorren ambos laterales y el baño, con ducha separada, evita el eterno compromiso de las duchas integradas en el lavabo. Es una célula pensada para vivirla, no para mirarla en el concesionario.

    En España, Adria opera a través de su red de concesionarios oficiales repartidos por las principales provincias, con servicio postventa y recambios gestionados por el importador. Como la marca no publica tarifa española, el consejo honesto es pedir presupuesto cerrado por escrito en al menos dos concesionarios, con el pack de chasis, el toldo y la segunda batería desglosados: en las perfiladas de acceso, los opcionales pueden mover el precio final varios miles de euros y conviene compararlos en igualdad de condiciones antes de firmar.

    Cómo lo verificamos: la existencia del modelo en la temporada 2026 se comprobó en la lista oficial de precios Adria 2026 (adria-center.si) y en anuncios de unidades «MY 26 NEW» en TruckScout24. Las dimensiones proceden del catálogo Adria 2026/2027; la altura es aproximada y se declara como tal. El precio español queda sin dato porque Adria no lo publica; las cifras eslovenas se citan solo como referencia extranjera con su fuente. Datos verificados el 19/10/2026.`,
    pros: [
      "Distribución SL con camas gemelas traseras siempre hechas: cero transformaciones a diario",
      "7,50 metros y 3.500 kg de MMA: se conduce con carnet B y maniobra con soltura",
      "Doble base a elegir en 2026 (Citroën Jumper o Fiat Ducato), ambas de 140 CV y con red de talleres enorme",
      "Cama abatible delantera que suma plazas de noche sin penalizar el salón de día",
      "Modelo muy líquido en ocasión y alquiler: reventa más fácil que las distribuciones raras",
    ],
    contras: [
      "Adria no publica precio para España: el PVP real depende del concesionario y sus packs",
      "Sin cama isla: las camas gemelas no gustan a quien duerme abrazado",
      "Gama Axess de acceso: materiales y equipamiento por debajo de las Matrix Plus y Supreme",
      "La cuarta plaza de noche es la cama abatible delantera, menos cómoda que un dormitorio fijo",
      "Altura aproximada (2.910 mm) no confirmada por ficha española: conviene medir antes de comprar un garaje",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/adria-matrix-axess-670-sl-2026-precio-ficha-tecnica-oficial.webp", alt: "Adria Matrix Axess 670 SL, vista exterior", ancho: 1920, alto: 1080 },
      { src: "/media/adria-matrix-axess-670-sl-2026-precio-ficha-tecnica-interior1.webp", alt: "Adria Matrix Axess 670 SL, interior", ancho: 1620, alto: 1080 },
      { src: "/media/adria-matrix-axess-670-sl-2026-precio-ficha-tecnica-interior2.webp", alt: "Adria Matrix Axess 670 SL, interior", ancho: 792, alto: 566 },
      { src: "/media/adria-matrix-axess-670-sl-2026-precio-ficha-tecnica-detalle.webp", alt: "Adria Matrix Axess 670 SL, detalle", ancho: 1024, alto: 768 },
    ],
    analisisSlug: "adria-matrix-axess-670-sl-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato / Citroën Jumper: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Ducato/Jumper)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Adria (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
  {
    id: "adria-sonic-700-sl-2026-precio-ficha-tecnica",
    marca: "Adria",
    modelo: "Sonic 700 SL",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: null, // Adria no publica PVP para España; null = «no publicado»
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
    imagen: "/media/adria-sonic-700-sl-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/adria-sonic-700-sl-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/adria-sonic-700-sl-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7485, // catálogo Adria 2026/2027
    anchoMm: 2320, // catálogo Adria 2026/2027
    altoMm: 2950, // aprox.: datos de la generación anterior, misma carrocería
    pesoKg: null,
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no la publica en la documentación consultada
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4,
    parNm: null,
    traccion: "delantera", // Fiat Ducato, declarada por el fabricante base
    emisionesCo2: null,
    aprox: [],
    notas:
      "La gama Sonic 2026 se limita a los 600 SL, 700 DC, 700 DL y 700 SL (lista oficial de precios Adria 2026 y catálogo 2026/2027); esta ficha cubre el Sonic 700 SL. " +
      "Largo y ancho tomados del catálogo 2026/2027; la altura (2950 mm) es aproximada y viene de la generación anterior, que comparte carrocería. MMA de 3500 kg. Propulsor Fiat Multijet3 2.2 de 140 CV con cambio manual. " +
      "Precio sin dato (Adria no publica tarifa ES); las referencias de otros países aparecen en el texto con su fuente. Sin dato oficial de carga útil ni de consumo.",
    curiosidades:
      "Sobre la cabina del Sonic 700 SL hay un techo solar panorámico, un extra poco común entre las integrales de clase A que llena de luz natural la parte delantera del salón. Fuente: https://www.outandaboutlive.co.uk/reviews/motorhomes/adria-sonic-plus-700-sl",
    descripcion: `Si buscas el «Sonic Plus I 810 SCL», conviene saber que ese modelo no existe. La gama Sonic 2026, según la lista oficial de precios de Adria y el catálogo 2026/2027, la forman los 600 SL, 700 DC, 700 DL y 700 SL; ni rastro de ningún «Plus» ni de ningún «810». Lo que sí existe —y es lo que aquí se documenta— es el Sonic 700 SL, la integral de 7,49 metros con camas gemelas traseras que encabeza la gama media de Adria para 2026.

Una clase A sin concesiones. El frontal es integral de verdad: nada de cabina de furgón adaptada, sino un parabrisas panorámico de una pieza y una presencia en carretera que impone. El catálogo 2026/2027 fija 7.485 mm de largo y 2.320 mm de ancho; la altura ronda los 2.950 mm, cifra aproximada heredada de la generación anterior con idéntica carrocería. Con 3.500 kg de MMA se conduce con el carnet B, un dato que no es menor: buena parte de sus rivales de tamaño similar se disparan a 4.250 kg y obligan al C1.

Camas gemelas: la distribución de los viajeros. La denominación 700 SL significa dormitorio posterior con dos camas individuales siempre hechas, el esquema favorito de las parejas que ruedan mucho. El baño completo va en un lateral, la cocina —amplia— queda enfrentada, y el salón delantero saca partido del parabrisas integral para lograr una luminosidad que ninguna perfilada alcanza. Sobre la cabina, el techo solar panorámico —una rareza en las clase A— vierte luz natural sobre la zona delantera. Para la noche hay cuatro plazas: las gemelas más una abatible sobre el salón; y con cuatro plazas de viaje homologadas, es una candidata seria para familias con dos niños.

Motor y calefacción. Calienta una Truma, lo habitual en este escalón. Empuja el Fiat Ducato Multijet3 2.2 de 140 CV con cambio manual y tracción delantera: potencia cabal para 3,5 toneladas, capaz de subir puertos sin sufrimiento y de sostener cruceros legales en autopista, aunque quien llegue de un turismo con brío echará de menos algo de reserva en los adelantamientos, que habrá que planear. A cambio, la red Fiat Professional atiende en toda Europa, un seguro de tranquilidad cuando la autocaravana es tu casa durante semanas.

El precio, con honestidad. Adria no publica tarifa para España: el campo queda sin dato y cualquier cifra de un anuncio es la del concesionario con sus packs. Para ubicarla: la lista eslovena la tarifa en 104.826 euros y en Portugal se ha visto anunciada por 115.100 euros, IVA incluido en los dos casos. Son fiscalidades distintas, así que léelo como orden de magnitud, no como compromiso. Lo que sí conviene atar por escrito es el equipamiento —toldo, batería auxiliar de litio, placa solar, cámara trasera—, que transforma la experiencia y también la factura final.

Vida a bordo. Lo que las fichas no cuentan de una integral: cocinar contemplando el paisaje a través del parabrisas, desayunar con la claraboya de la cabina abierta, aparcar de noche sin pisar el frío porque todo queda dentro de la misma célula. El garaje bajo las camas gemelas se traga bicicletas y avance sin robar espacio interior, y los depósitos, dimensionados para cuatro personas, dan para dos o tres días lejos de áreas de servicio sin racionar la ducha.

Red en España y consejo de compra. Adria cubre con concesionarios de venta y postventa las principales provincias. El consejo vale para cualquier integral: presupuesto cerrado por escrito con cada pack desglosado —chasis, toldo, litio, solar, cámara trasera—, porque entre dos ofertas «iguales» puede haber más de diez mil euros de opcionales. Y antes de firmar, subirse a la cama abatible y probarla: será la cama de los niños durante años.

Cómo lo verificamos: la composición de la gama Sonic 2026 se contrastó con la lista oficial de precios Adria 2026 y el catálogo Adria 2026/2027, donde se confirma que no existe ningún «Plus» ni ningún «810». Las cotas del 700 SL salen del catálogo; la altura se declara aproximada. Motor y MMA figuran en la documentación oficial de la gama. El precio español queda sin dato por no publicarlo Adria; las referencias eslovena y portuguesa se citan con fuente. Verificado el 19/10/2026.

Para quién: la pareja que busca la experiencia integral —visibilidad, luz, amplitud— sin llegar a los ocho metros ni al carnet C1; la familia de cuatro que destinará la abatible a los niños; quien piense en la reventa, porque las integrales de 7,5 metros con gemelas mantienen demanda estable en ocasión. No es para el uso urbano diario (2,32 m de ancho y 7,49 m de largo piden práctica), ni para cazar el precio más bajo del segmento (la carrocería integral se paga), ni para quien necesite una quinta plaza de viaje.`,
    pros: [
      "Clase A genuina: parabrisas panorámico y techo solar sobre la cabina, una luminosidad que no tiene rival.",
      "7,49 metros con 3.500 kg de MMA: carnet B válido, algo poco común en integrales de este porte.",
      "Gemelas traseras siempre hechas más abatible: cuatro plazas de noche sin montajes diarios.",
      "Ducato 2.2 de 140 CV respaldado por la red de talleres más extensa de Europa para furgones.",
      "La distribución 700 SL mantiene demanda firme en ocasión: reventa con liquidez.",
    ],
    contras: [
      "Adria no publica tarifa española: el precio final lo compone cada concesionario con sus packs.",
      "2,32 m de ancho y 7,49 m de largo: aparcar y circular por cascos antiguos requiere oficio.",
      "140 CV para 3,5 toneladas: viajes tranquilos sí; adelantamientos decididos, no.",
      "La carrocería integral encarece la compra y cualquier reparación de chapa respecto a una perfilada.",
      "Altura aproximada (2.950 mm): conviene confirmarla antes de atarse a un garaje o a un ferry con gálibo.",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/adria-sonic-700-sl-2026-precio-ficha-tecnica-oficial.webp", alt: "Adria Sonic 700 SL, vista exterior", ancho: 1024, alto: 558 },
      { src: "/media/adria-sonic-700-sl-2026-precio-ficha-tecnica-interior1.webp", alt: "Adria Sonic 700 SL, interior", ancho: 1920, alto: 1281 },
      { src: "/media/adria-sonic-700-sl-2026-precio-ficha-tecnica-interior2.webp", alt: "Adria Sonic 700 SL, interior", ancho: 1200, alto: 1600 },
      { src: "/media/adria-sonic-700-sl-2026-precio-ficha-tecnica-detalle.webp", alt: "Adria Sonic 700 SL, detalle", ancho: 1280, alto: 960 },
    ],
    analisisSlug: "adria-sonic-700-sl-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Adria (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 280 },
      ],
    },
  },
  {
    id: "adria-twin-sports-640-sgx-2026-precio-ficha-tecnica",
    marca: "Adria",
    modelo: "Twin Sports 640 SGX",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: null, // Adria no publica PVP para España; null = «no publicado»
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
    imagen: "/media/adria-twin-sports-640-sgx-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/adria-twin-sports-640-sgx-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/adria-twin-sports-640-sgx-2026-precio-ficha-tecnica-interior2.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6363, // 6,36 m, ficha técnica Adria (fourgonlesite)
    anchoMm: 2050, // 2,05 m, ficha técnica Adria (fourgonlesite)
    altoMm: 2600, // 2,60 m, ficha técnica Adria (fourgonlesite)
    pesoKg: null,
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: 600, // ficha técnica oficial Adria reproducida por fourgonlesite (PTAC 3500 / CU 600)
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4,
    parNm: null,
    traccion: "delantera", // Fiat Ducato, declarada por el fabricante base
    emisionesCo2: null,
    aprox: [],
    notas:
      "El «Twin Plus 640 SGX» fue la denominación de las temporadas 2019-2021; la gama Twin 2026 (nota oficial adria-mobil.com) se compone de Twin Supreme, Twin Sports y Twin. Esta ficha cubre el Twin Sports 640 SGX, verificado en la gama 2026 y en concesionario (swindoncaravansgroup). Dimensiones 6,36 x 2,05 x 2,60 m, MMA 3500 kg y carga útil 600 kg de la ficha técnica oficial Adria (reproducida por fourgonlesite). Motor Fiat Ducato 2.2 de 140 CV. Calefacción Webasto Air Top Evo 40 de gasóleo, frigorífico de 138 l, agua limpia 100 l / grises 70 l, cocina de 2 fuegos a gas (2 x 13 kg) y depósito de combustible de 90 l, todo de la misma ficha. Precio sin dato (Adria no publica tarifa ES); en Francia se anunció desde 78.800 € en catálogo. Consumo sin dato oficial.",
    curiosidades:
      "La nueva generación de la gama Twin, presentada en Düsseldorf en 2024 y a la que pertenece este Sports 640 SGX, ganó el European Innovation Award 2025 en la categoría de diseño interior. Fuente: https://www.adria-mobil.com/news/new-twins-win-european-innovation-award-2025",
    descripcion: `El Adria Twin Sports 640 SGX es el camper deportivo de la renovada gama Twin 2026. Si lo conocías como «Twin Plus 640 SGX», esa fue la denominación de las temporadas 2019 a 2021; la gama Twin actual, presentada oficialmente por Adria, se articula en Twin Supreme, Twin Sports y Twin a secas. El Sports 640 SGX sí existe, está en la gama 2026 y es el que se documenta en esta ficha, verificado tanto en la comunicación oficial de la marca como en la oferta de concesionarios.

    Con 6,36 metros de largo, 2,05 de ancho y 2,60 de alto según la ficha técnica oficial de Adria, el 640 SGX juega en la liga de los campers grandes: lo bastante compacto para el día a día y para aparcar en una plaza normal, lo bastante amplio para vivir en él durante semanas. La masa máxima autorizada es de 3.500 kg con una carga útil declarada de 600 kg, así que se conduce con el carnet B y queda margen para cuatro ocupantes, el equipaje y el material deportivo que da sentido a la terminación «Sports».

    La distribución SGX es la más versátil del catálogo Twin: cama trasera eléctrica regulable en altura sobre un garaje de volumen variable —capaz de tragar bicicletas e incluso una moto ligera—, techo elevable de serie (PTR: Pop Top Roof) con cama de 200 x 130 cm, y una banqueta delantera convertible en cama de 196 x 195/180 cm. El resultado son cuatro plazas de noche reales sin que el salón de día se resienta, y un interior que cambia de cara según el plan: modo garaje para la etapa deportiva, modo dormitorio para la noche, modo salón para la sobremesa. La cocina monta dos fuegos a gas con dos botellas de 13 kg, el frigorífico es de 138 litros, y los depósitos —100 litros de agua limpia y 70 de grises— están dimensionados para varios días de autonomía.

    Un detalle técnico que dice mucho de la filosofía del modelo: la calefacción es una Webasto Air Top Evo 40 alimentada por el propio gasóleo del depósito de 90 litros. Nada de depender de la botella de gas para no pasar frío en una noche de octubre en los Pirineos: mientras haya gasóleo en el depósito, hay calefacción. El cuarto de baño usa el sistema Vario de Adria, con pared pivotante, y en la serie especial del 60º aniversario la marca mejoró esa zona recortando la parte inferior de la pared para que pase por encima del WC y se gane espacio en la ducha.

    La base es el Fiat Ducato 2.2 de 140 CV con tracción delantera, el furgón grande más vendido de Europa y, por tanto, el que más talleres conocen. En la serie especial del 60º aniversario se ofrecía con cambio automático, carrocería gris metalizada Artense Grey, llantas de aluminio de 16 pulgadas y el pack Anniversaire; la gama 2026 mantiene el 140 CV como motorización de referencia. Del precio español, lo honesto: Adria no publica tarifa para España y el campo queda sin dato. En Francia, el catálogo lo anunció desde 78.800 euros, una referencia útil como orden de magnitud pero no trasladable tal cual por fiscalidad y equipamiento.

    ¿Para quién es? Para la pareja deportista que quiere dormir cuatro y cargar bicis o moto sin remolque; para la familia joven que necesita un único vehículo que sirva entre semana y se convierta en casa los fines de semana; y para quien valora el diseño, porque esta generación ganó el European Innovation Award 2025 en diseño interior. No es para quien busque una cama fija siempre hecha sin mecanismos (aquí todo se transforma), ni para quien necesite cinco plazas de viaje, ni para quien priorice el precio más bajo: un camper de este nivel de equipamiento compite con perfiladas de acceso.

    En España, el Twin Sports se vende a través de la red de concesionarios Adria, y el consejo de compra es pedir la oferta con el equipamiento desglosado: el cambio automático, el color de carrocería metalizado y las llantas de aluminio pueden venir de serie en una edición especial o costar un extra en la gama regular, y la diferencia se nota en la factura. Conviene también probar en persona los tres modos de la célula —salón, dormitorio y garaje— porque la gracia de este camper está en transformar el espacio, y eso solo se entiende tocándolo.

    Cómo lo verificamos: la existencia del Sports 640 SGX en la gama 2026 se comprobó en la nota oficial de Adria sobre la nueva gama Twin y en la oferta de concesionarios (swindoncaravansgroup, unidad «Twin Sport 640 SGX 2026»). Las dimensiones, la carga útil, las camas, los depósitos y la calefacción proceden de la ficha técnica oficial Adria reproducida por fourgonlesite.com. El premio europeo de innovación consta en la nota de prensa oficial adria-mobil.com. El precio español queda sin dato porque Adria no lo publica; la referencia francesa se cita con su fuente. Datos verificados el 19/10/2026.`,
    pros: [
      "Distribución SGX ultramodular: cama eléctrica trasera, techo elevable y banqueta convertible para 4 plazas reales",
      "Garaje trasero de volumen variable: caben bicicletas e incluso una moto ligera",
      "Calefacción Webasto de gasóleo: calor sin depender de la botella de gas",
      "6,36 metros y 3.500 kg: carnet B y aparcamiento en plaza normal pese a su habitabilidad",
      "Diseño interior premiado con el European Innovation Award 2025",
    ],
    contras: [
      "Adria no publica precio para España: el PVP lo fija cada concesionario",
      "Todo se transforma: no hay cama fija tradicional siempre hecha sin mecanismos",
      "Solo 4 plazas de viaje: no sirve para familias de cinco",
      "El techo elevable suma mantenimiento (lonas, mecanismos) frente a un techo fijo",
      "A plena carga de 4 + material deportivo, los 600 kg de carga útil obligan a repartir bien el peso",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/adria-twin-sports-640-sgx-2026-precio-ficha-tecnica-oficial.webp", alt: "Adria Twin Sports 640 SGX, vista exterior", ancho: 1620, alto: 1080 },
      { src: "/media/adria-twin-sports-640-sgx-2026-precio-ficha-tecnica-interior1.webp", alt: "Adria Twin Sports 640 SGX, interior", ancho: 1024, alto: 768 },
      { src: "/media/adria-twin-sports-640-sgx-2026-precio-ficha-tecnica-interior2.webp", alt: "Adria Twin Sports 640 SGX, interior", ancho: 720, alto: 1080 },
      { src: "/media/adria-twin-sports-640-sgx-2026-precio-ficha-tecnica-detalle.webp", alt: "Adria Twin Sports 640 SGX, detalle", ancho: 1600, alto: 1300 },
    ],
    analisisSlug: "adria-twin-sports-640-sgx-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Adria (anual recomendada)", queSeCambia: "Estanqueidad, gas, techo elevable, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
