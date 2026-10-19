// Autocaravanas Adria — lote Merlín 3 (19/10/2026).
// Fuentes: lista oficial de precios Adria 2026 (adria-center.si), catálogo Adria 2026/2027,
// nota de prensa oficial adria-mobil.com (nueva gama Twin / European Innovation Award 2025),
// ficha técnica Adria reproducida por fourgonlesite.com (Twin Sports 640 SGX PTR),
// TruckScout24 y swindoncaravansgroup (verificación de modelos MY2026),
// camprest.com, outandaboutlive.co.uk (curiosidades). Verificado el 19/10/2026.
// Notas honestas: Adria no publica PVP para España en su web; los precios quedan en null y
// solo se citan referencias extranjeras o de concesionario en el texto con su fuente.
// La altura del Matrix Axess 670 SL (2910 mm) y del Sonic 700 SL (2950 mm) se toma de la
// ficha de la misma carrocería en la generación 2026 y se marca como aproximada.
// El modelo «Sonic Plus I 810 SCL» asignado no existe en la gama 2026 (la gama Sonic 2026
// solo incluye 600 SL, 700 DC/DL/SL; no existe «Plus» ni «810»): se sustituye por el
// Adria Sonic 700 SL real. El «Twin Plus 640 SGX» fue una línea 2019-2021 que ya no
// existe: se sustituye por el Adria Twin Sports 640 SGX real de la gama Twin 2026.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

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
      "Largo y ancho del catálogo Adria 2026/2027. Altura aproximada (2910 mm) tomada de la ficha del Matrix Supreme 2026, que comparte carrocería. MMA 3500 kg (versión 35L). Motor 140 CV en ambas bases (Citroën BlueHDI 2.2 o Fiat Multijet3 2.2) según lista oficial de precios 2026. Precio: null porque Adria no publica tarifa para España; en el texto se citan solo referencias extranjeras con fuente. Carga útil: null (no publicada). Consumo: null (no hay cifra oficial; la curiosidad cita una medición independiente de Camprest).",
    curiosidades:
      "En una prueba a plena carga (dos adultos y un niño) la publicación Camprest midió un consumo real de 12,4 l/100 km para el Matrix Axess 670 SL. Fuente: https://camprest.com/en/blog/motorhome-caravan-news/adria-matrix-axess-670-sl-motorhome-test",
    descripcion: `La Adria Matrix Axess 670 SL es la perfilada de acceso a la familia Matrix para la temporada 2026, y su planteamiento es tan esloveno como sensato: una célula compacta de 7,50 metros sobre base de furgón, con la cama doble trasera en disposición individual (las dos camas gemelas que dan nombre a la terminación «SL») y una cama abatible sobre el salón que completa las cuatro plazas de noche. Es el formato que mejor envejece en el mercado europeo de ocasión y de alquiler, porque resuelve el viaje en pareja y el viaje en familia sin obligar a arrastrar ocho metros de carrocería.

    Con 7.495 mm de largo y 2.299 mm de ancho según el catálogo Adria 2026/2027, la 670 SL se mueve en la franja que todavía aparca en una plaza generosa y gira sin dramas en los pueblos. La altura ronda los 2.910 mm (dato aproximado, tomado de la ficha del Matrix Supreme 2026 que comparte carrocería). La masa máxima autorizada es de 3.500 kg en la versión 35L, de modo que se conduce con el carnet B, y el peso contenido de la gama Axess —la línea de entrada de Matrix— deja un margen de carga útil razonable para cuatro ocupantes con su equipaje, la despensa y las bicis en el garaje trasero.

    El interior sigue el guion clásico de las gemelas: dormitorio trasero con dos camas individuales, baño completo en un lateral y cocina enfrentada, salón delantero con asientos giratorios de cabina y la cama de techo abatible que se despliega en segundos. La gracia de la distribución SL es que las camas traseras se usan a diario sin transformar nada, y la cama delantera solo aparece cuando viajan los niños o los invitados. La calefacción es Truma, el estándar del sector en este segmento, con la red de aire caliente repartida por la célula.

    En mecánica, la temporada 2026 ofrece dos bases a elegir: Citroën Jumper BlueHDI 2.2 de 140 CV o Fiat Ducato Multijet3 2.2 de 140 CV, ambas con tracción delantera. Son los dos primos de la familia Stellantis, con la red de talleres más densa de Europa para furgones, lo que en la práctica significa repuestos y mano de obra sin sorpresas vivas donde vivas. La lista oficial de precios 2026 publicada por el importador esloveno (válida hasta el 1 de julio de 2026) tarifa el Matrix Axess 670 SL en 84.864 euros con base Citroën y 87.131 euros con base Fiat, IVA esloveno incluido; sirve como referencia de posicionamiento, pero no es un precio español y Adria no publica PVP para España, así que la cifra que pagues aquí la pone tu concesionario con sus packs y su matriculación.

    ¿Para quién es? Para la pareja que quiere una perfilada de verdad —con baño separado y camas hechas— sin saltar a los 7,5 metros largos ni al presupuesto de las gamas altas; para la familia con uno o dos niños que duermen en la abatible delantera; y para quien mira la reventa, porque las 670 SL son de lo más líquido del mercado de ocasión. No es para quien necesite cama isla (aquí las camas son gemelas), ni para quien viaje siempre con cuatro adultos (la cuarta y quinta plaza de noche son la abatible, cómoda pero no un dormitorio), ni para quien busque el aislamiento y el equipamiento de las gamas Supreme.

    En habitabilidad, la 670 SL rinde mejor de lo que sugieren sus 7,50 metros gracias a dos decisiones bien resueltas: el garaje trasero bajo las camas gemelas, que traga bicicletas, sillas y la mesa de exterior sin invadir la célula, y la claraboya panorámica sobre la cabina, que inunda de luz el salón y hace que el interior respire aunque fuera llueva. Los armarios altos recorren ambos laterales y el baño, con ducha separada, evita el eterno compromiso de las duchas integradas en el lavabo. Es una célula pensada para vivirla, no para mirarla en el concesionario.

    En España, Adria opera a través de su red de concesionarios oficiales repartidos por las principales provincias, con servicio postventa y recambios gestionados por el importador. Como la marca no publica tarifa española, el consejo honesto es pedir presupuesto cerrado por escrito en al menos dos concesionarios, con el pack de chasis, el toldo y la segunda batería desglosados: en las perfiladas de acceso, los opcionales pueden mover el precio final varios miles de euros y conviene compararlos en igualdad de condiciones antes de firmar.

    Cómo lo verificamos: la existencia del modelo en la temporada 2026 se comprobó en la lista oficial de precios Adria 2026 (adria-center.si) y en anuncios de unidades «MY 26 NEW» en TruckScout24. Las dimensiones proceden del catálogo Adria 2026/2027; la altura es aproximada y se declara como tal. El precio español queda en null porque Adria no lo publica; las cifras eslovenas se citan solo como referencia extranjera con su fuente. Datos verificados el 19/10/2026.`,
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
      { src: "/media/adria-matrix-axess-670-sl-2026-precio-ficha-tecnica-interior1.webp", alt: "Adria Matrix Axess 670 SL, interior", ancho: 792, alto: 466 },
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
      "Modelo SUSTITUIDO: el «Sonic Plus I 810 SCL» asignado no existe; la gama Sonic 2026 solo incluye los 600 SL, 700 DC, 700 DL y 700 SL (lista oficial de precios Adria 2026 y catálogo 2026/2027). Se documenta el Sonic 700 SL real. Largo y ancho del catálogo 2026/2027; altura aproximada (2950 mm) de la generación anterior con idéntica carrocería. MMA 3500 kg. Motor Fiat Multijet3 2.2 de 140 CV con cambio manual. Precio: null (Adria no publica tarifa ES); referencias extranjeras citadas en el texto con fuente. Carga útil y consumo: null (sin dato oficial).",
    curiosidades:
      "El Sonic 700 SL monta un techo solar panorámico sobre la cabina, un detalle poco habitual en las integrales de clase A, que inunda de luz natural la zona delantera del salón. Fuente: https://www.outandaboutlive.co.uk/reviews/motorhomes/adria-sonic-plus-700-sl",
    descripcion: `El Adria Sonic 700 SL es la integral de referencia de la gama media de Adria para 2026, y conviene empezar por una aclaración honesta: el modelo que aquí se documenta sustituye al «Sonic Plus I 810 SCL» de la asignación original, que no existe. La gama Sonic 2026, según la lista oficial de precios de Adria y su catálogo 2026/2027, se compone de los 600 SL, 700 DC, 700 DL y 700 SL; no hay ningún «Plus» ni ningún «810» en la oferta. El Sonic 700 SL sí existe, es la integral de 7,49 metros con camas gemelas traseras, y es el que merece la ficha.

    Dicho esto, estamos ante una clase A de las de verdad: frontal integral sin cabina de furgón, parabrisas panorámico y una presencia en carretera que no deja indiferente. Mide 7.485 mm de largo y 2.320 mm de ancho según el catálogo 2026/2027, con una altura que ronda los 2.950 mm (dato aproximado, heredado de la generación anterior con la misma carrocería). La masa máxima autorizada es de 3.500 kg, así que se conduce con el carnet B, algo que no todas las integrales de este tamaño pueden decir: muchas compañeras de segmento se van a los 4.250 kg y exigen el C1.

    La distribución 700 SL es la de camas gemelas traseras, la favorita de las parejas viajeras: dos camas individuales siempre hechas en el dormitorio posterior, baño completo en el lateral, cocina amplia enfrentada y un salón delantero generoso que aprovecha el parabrisas integral para crear un ambiente luminoso que ninguna perfilada iguala. Sobre la cabina, el techo solar panorámico —raro en las clase A— baña de luz natural la zona delantera. Las cuatro plazas de noche se completan con la cama abatible sobre el salón, y las cuatro plazas de viaje hacen de esta Sonic una opción real para familias con dos niños.

    La calefacción es Truma, el estándar del segmento, y la mecánica corre a cargo del Fiat Ducato Multijet3 2.2 de 140 CV con cambio manual y tracción delantera. Es una potencia honesta para 3,5 toneladas: suficiente para cruzar puertos sin agonía y para mantener cruceros legales en autopista, aunque quien venga de turismos potentes notará que los adelantamientos hay que planificarlos. La red de servicio de Fiat Professional cubre toda Europa, un argumento de peso cuando la casa rodante es también tu casa durante semanas.

    Del precio hay que hablar con franqueza: Adria no publica tarifa para España, así que el campo queda en null y cualquier cifra que veas en un anuncio es la del concesionario con sus packs. Como referencia de posicionamiento, la lista eslovena tarifa el Sonic 700 SL en 104.826 euros y en Portugal se ha anunciado en 115.100 euros, IVA incluido en ambos casos; son mercados distintos con fiscalidades distintas, así que tómalo como orden de magnitud, no como promesa. Lo que sí conviene negociar por escrito es el equipamiento: toldo, batería auxiliar de litio, placa solar y cámara trasera cambian mucho la experiencia y el precio final.

    ¿Para quién es? Para la pareja que quiere la experiencia integral —visibilidad, luminosidad, sensación de espacio— sin saltar a las 8 metros ni al carnet C1; para la familia de cuatro que usa la abatible delantera para los niños; y para quien valora la reventa, porque las integrales de 7,5 metros con camas gemelas tienen demanda constante en ocasión. No es para quien aparca en ciudad a diario (2,32 m de ancho y 7,49 m de largo se notan), ni para quien busca el precio más bajo del segmento (la carrocería integral se paga), ni para quien necesita cinco plazas de viaje.

    En el día a día, la vida a bordo de una integral se nota en detalles que las fichas no cuentan: cocinar mirando al paisaje a través del parabrisas, desayunar con la claraboya abierta sobre la cabina y aparcar de noche sin salir al frío para nada, porque todo está dentro de la misma célula. El garaje trasero, bajo las camas gemelas, admite las bicicletas y el avance sin comerse el interior, y los depósitos dimensionados para cuatro personas permiten dos o tres días de autonomía fuera de áreas de servicio sin racionar la ducha.

    En España, la red de concesionarios Adria cubre las principales provincias con venta y postventa, y el consejo práctico es el mismo que para cualquier integral: pedir el presupuesto cerrado por escrito con todos los packs desglosados —paquete chasis, toldo, batería de litio, placa solar, cámara trasera—, porque en este segmento los opcionales pueden suponer más de diez mil euros de diferencia entre dos ofertas aparentemente iguales. Y probar la cama abatible antes de firmar: es la plaza que usarán los niños durante años.

    Cómo lo verificamos: la composición de la gama Sonic 2026 se comprobó en la lista oficial de precios Adria 2026 y en el catálogo Adria 2026/2027, donde consta que no existe ningún «Plus» ni ningún «810». Las dimensiones del 700 SL proceden del catálogo; la altura es aproximada y se declara como tal. El motor y la MMA figuran en la documentación oficial de la gama. El precio español queda en null porque Adria no lo publica; las referencias eslovena y portuguesa se citan con su fuente. Datos verificados el 19/10/2026.`,
    pros: [
      "Integral de verdad con parabrisas panorámico y techo solar sobre cabina: luminosidad inigualable",
      "7,49 metros con MMA de 3.500 kg: se conduce con carnet B, algo raro en integrales de este tamaño",
      "Camas gemelas traseras siempre hechas más abatible delantera: 4 plazas de noche sin transformar nada a diario",
      "Fiat Ducato 2.2 de 140 CV con la red de talleres más densa de Europa para furgones",
      "Distribución 700 SL con demanda constante en ocasión: buena liquidez de reventa",
    ],
    contras: [
      "Adria no publica precio para España: el PVP final lo fija cada concesionario con sus packs",
      "2,32 m de ancho y 7,49 m de largo: aparcar y callejear exigen práctica",
      "140 CV para 3,5 toneladas: cruceros tranquilos sí, adelantamientos fulgurantes no",
      "La carrocería integral encarece la compra y cualquier reparación de chapa frente a una perfilada",
      "Altura aproximada (2.950 mm): verificar antes de comprometerse con un garaje o un ferry con límite",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/adria-sonic-700-sl-2026-precio-ficha-tecnica-oficial.webp", alt: "Adria Sonic 700 SL, vista exterior", ancho: 1024, alto: 558 },
      { src: "/media/adria-sonic-700-sl-2026-precio-ficha-tecnica-interior1.webp", alt: "Adria Sonic 700 SL, interior", ancho: 1200, alto: 799 },
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
    imagenInteriorOficial: "/media/adria-twin-sports-640-sgx-2026-precio-ficha-tecnica-interior1.webp",
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
      "Modelo SUSTITUIDO: el «Twin Plus 640 SGX» asignado corresponde a una línea 2019-2021 que ya no existe; la gama Twin 2026 (nota oficial adria-mobil.com) se compone de Twin Supreme, Twin Sports y Twin. Se documenta el Twin Sports 640 SGX real, verificado en la gama 2026 y en concesionario (swindoncaravansgroup). Dimensiones 6,36 x 2,05 x 2,60 m, MMA 3500 kg y carga útil 600 kg de la ficha técnica oficial Adria (reproducida por fourgonlesite). Motor Fiat Ducato 2.2 de 140 CV. Calefacción Webasto Air Top Evo 40 de gasóleo, frigorífico de 138 l, agua limpia 100 l / grises 70 l, cocina de 2 fuegos a gas (2 x 13 kg) y depósito de combustible de 90 l, todo de la misma ficha. Precio: null (Adria no publica tarifa ES); en Francia se anunció desde 78.800 € en catálogo. Consumo: null (sin dato oficial).",
    curiosidades:
      "La nueva generación de la gama Twin, presentada en Düsseldorf en 2024 y a la que pertenece este Sports 640 SGX, ganó el European Innovation Award 2025 en la categoría de diseño interior. Fuente: https://www.adria-mobil.com/news/new-twins-win-european-innovation-award-2025",
    descripcion: `El Adria Twin Sports 640 SGX es el camper deportivo de la renovada gama Twin 2026, y también aquí toca una aclaración previa: el «Twin Plus 640 SGX» de la asignación original no existe. «Twin Plus» fue una denominación de las temporadas 2019 a 2021; la gama Twin actual, presentada oficialmente por Adria, se articula en Twin Supreme, Twin Sports y Twin a secas. El Sports 640 SGX sí existe, está en la gama 2026 y es el que se documenta en esta ficha, verificado tanto en la comunicación oficial de la marca como en la oferta de concesionarios.

    Con 6,36 metros de largo, 2,05 de ancho y 2,60 de alto según la ficha técnica oficial de Adria, el 640 SGX juega en la liga de los campers grandes: lo bastante compacto para el día a día y para aparcar en una plaza normal, lo bastante amplio para vivir en él durante semanas. La masa máxima autorizada es de 3.500 kg con una carga útil declarada de 600 kg, así que se conduce con el carnet B y queda margen para cuatro ocupantes, el equipaje y el material deportivo que da sentido a la terminación «Sports».

    La distribución SGX es la más versátil del catálogo Twin: cama trasera eléctrica regulable en altura sobre un garaje de volumen variable —capaz de tragar bicicletas e incluso una moto ligera—, techo elevable de serie (PTR: Pop Top Roof) con cama de 200 x 130 cm, y una banqueta delantera convertible en cama de 196 x 195/180 cm. El resultado son cuatro plazas de noche reales sin que el salón de día se resienta, y un interior que cambia de cara según el plan: modo garaje para la etapa deportiva, modo dormitorio para la noche, modo salón para la sobremesa. La cocina monta dos fuegos a gas con dos botellas de 13 kg, el frigorífico es de 138 litros, y los depósitos —100 litros de agua limpia y 70 de grises— están dimensionados para varios días de autonomía.

    Un detalle técnico que dice mucho de la filosofía del modelo: la calefacción es una Webasto Air Top Evo 40 alimentada por el propio gasóleo del depósito de 90 litros. Nada de depender de la botella de gas para no pasar frío en una noche de octubre en los Pirineos: mientras haya gasóleo en el depósito, hay calefacción. El cuarto de baño usa el sistema Vario de Adria, con pared pivotante, y en la serie especial del 60º aniversario la marca mejoró esa zona recortando la parte inferior de la pared para que pase por encima del WC y se gane espacio en la ducha.

    La base es el Fiat Ducato 2.2 de 140 CV con tracción delantera, el furgón grande más vendido de Europa y, por tanto, el que más talleres conocen. En la serie especial del 60º aniversario se ofrecía con cambio automático, carrocería gris metalizada Artense Grey, llantas de aluminio de 16 pulgadas y el pack Anniversaire; la gama 2026 mantiene el 140 CV como motorización de referencia. Del precio español, lo honesto: Adria no publica tarifa para España y el campo queda en null. En Francia, el catálogo lo anunció desde 78.800 euros, una referencia útil como orden de magnitud pero no trasladable tal cual por fiscalidad y equipamiento.

    ¿Para quién es? Para la pareja deportista que quiere dormir cuatro y cargar bicis o moto sin remolque; para la familia joven que necesita un único vehículo que sirva entre semana y se convierta en casa los fines de semana; y para quien valora el diseño, porque esta generación ganó el European Innovation Award 2025 en diseño interior. No es para quien busque una cama fija siempre hecha sin mecanismos (aquí todo se transforma), ni para quien necesite cinco plazas de viaje, ni para quien priorice el precio más bajo: un camper de este nivel de equipamiento compite con perfiladas de acceso.

    En España, el Twin Sports se vende a través de la red de concesionarios Adria, y el consejo de compra es pedir la oferta con el equipamiento desglosado: el cambio automático, el color de carrocería metalizado y las llantas de aluminio pueden venir de serie en una edición especial o costar un extra en la gama regular, y la diferencia se nota en la factura. Conviene también probar en persona los tres modos de la célula —salón, dormitorio y garaje— porque la gracia de este camper está en transformar el espacio, y eso solo se entiende tocándolo.

    Cómo lo verificamos: la existencia del Sports 640 SGX en la gama 2026 se comprobó en la nota oficial de Adria sobre la nueva gama Twin y en la oferta de concesionarios (swindoncaravansgroup, unidad «Twin Sport 640 SGX 2026»). Las dimensiones, la carga útil, las camas, los depósitos y la calefacción proceden de la ficha técnica oficial Adria reproducida por fourgonlesite.com. El premio europeo de innovación consta en la nota de prensa oficial adria-mobil.com. El precio español queda en null porque Adria no lo publica; la referencia francesa se cita con su fuente. Datos verificados el 19/10/2026.`,
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
      { src: "/media/adria-twin-sports-640-sgx-2026-precio-ficha-tecnica-oficial.webp", alt: "Adria Twin Sports 640 SGX, vista exterior", ancho: 1030, alto: 845 },
      { src: "/media/adria-twin-sports-640-sgx-2026-precio-ficha-tecnica-interior1.webp", alt: "Adria Twin Sports 640 SGX, interior", ancho: 1024, alto: 768 },
      { src: "/media/adria-twin-sports-640-sgx-2026-precio-ficha-tecnica-interior2.webp", alt: "Adria Twin Sports 640 SGX, interior", ancho: 576, alto: 768 },
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
