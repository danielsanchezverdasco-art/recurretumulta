// Autocaravanas Hymer — lote Merlín 3 (19/10/2026).
// Fuentes: datos técnicos oficiales de hymer.com para el B-Klasse MasterLine I 780
// (https://www.hymer.com/fr/fr/camping-cars/hymer-b-klasse-masterline, precio base
// 165.600 € en https://www.hymer.com/de/en/motorhomes/class-a-motorhomes),
// página oficial de premios de Hymer (https://www.hymer.com/es/es/premios),
// nota de prensa oficial «Hymer Free 600 Campus» del Caravan Salon 2019
// (https://WWW.HYMER.COM/gb/en/hymer-product-news-caravan-salon-duesseldorf-2019/p/46939),
// exposés de concesionario con datos técnicos del Free 600 Campus (caraworld.de,
// TruckScout24).
// Verificado el 19/10/2026.
// Notas honestas: Hymer publica PVP recomendado para Alemania/Francia, no una
// tarifa oficial para España (el precio del B-ML I 780 se indica con esa
// procedencia; el Free 600 Campus, edición especial de 2019, no tiene PVP
// publicado: queda sin dato). La carga útil no la publica Hymer como cifra
// única en ninguno de los dos (cargaUtilKg = null; prohibido calcularla).
// Consumo, autonomía y par motor no publicados por el fabricante.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_HYMER_M3: Autocaravana[] = [
  {
    id: "hymer-b-klasse-ml-i-780-2026-precio-ficha-tecnica",
    marca: "Hymer",
    modelo: "B-Klasse ML I 780",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: 165600, // PVP recomendado oficial Hymer Alemania (hymer.com); no hay tarifa oficial ES
    potenciaCv: 150, // Mercedes Sprinter 415 CDI de serie (110 kW); opcional 417 CDI de 170 CV
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
    imagen: "/media/hymer-b-klasse-ml-i-780-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/hymer-b-klasse-ml-i-780-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/hymer-b-klasse-ml-i-780-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7890, // datos técnicos oficiales hymer.com
    anchoMm: 2350, // datos técnicos oficiales hymer.com
    altoMm: 2980, // datos técnicos oficiales hymer.com
    pesoKg: 3501, // masa en orden de marcha, datos oficiales hymer.com
    mmaKg: 4430, // datos técnicos oficiales hymer.com
    carnetNecesario: "C1", // mmaKg > 3500 y <= 7500
    cargaUtilKg: null, // Hymer no publica una cifra de carga útil; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4-5 según configuración; 4 de serie
    plazasDormir: 4, // 4-5 según configuración; 4 de serie
    parNm: null,
    traccion: "trasera", // Mercedes Sprinter: propulsión trasera de serie
    emisionesCo2: null,
    aprox: [],
    notas:
      "Cotas, pesos, capacidades y plazas de los datos técnicos oficiales publicados por Hymer en hymer.com para el B-Klasse MasterLine I 780 (789/235/298 cm, 3.501 kg en orden de marcha, 4.430 kg de MMA, camas de 207x90/202x90, frigorífico de 153 l, agua limpia de 180 l, grises de 150 l, gas 2x13 kg, calefacción de agua caliente). Precio: PVP recomendado oficial en Alemania desde 165.600 €; Hymer no publica tarifa oficial para España. Carga útil, consumo, autonomía, par motor y emisiones: no publicados por el fabricante; Las plazas 4-5 y las camas 4-5 dependen de opcionales (cama abatible, quinta plaza).",
    curiosidades:
      "Los lectores de la revista alemana AutoZeitung eligieron al Hymer B-Klasse MasterLine I como ganador del Camping Life Trophy 2022 en la categoría de autocaravanas integrales, por delante de toda su competencia directa: el jurado popular destacó su combinación de tecnología sin concesiones y diseño icónico sobre la cabeza tractora del Mercedes Sprinter. Fuente: página oficial de premios de Hymer (https://www.hymer.com/es/es/premios).",
    descripcion: `El Hymer B-Klasse ML I 780 es la integral con la que Hymer —la marca que inventó la autocaravana moderna en 1957— defiende su trono en el segmento premium. Con 7.890 mm de longitud, 2.350 mm de anchura y 2.980 mm de altura sobre la cabeza tractora del Mercedes-Benz Sprinter y el chasis SLC propio de Hymer, es un vehículo que no pide permiso: entra en el camping y todo el mundo sabe lo que cuesta. Su MMA de 4.430 kg lo sitúa en el territorio del carnet C1, un requisito innegociable que filtra a su clientela tanto como el precio.

    En medidas y habitabilidad, el 780 es un ejercicio de aprovechamiento del espacio que solo un fabricante con décadas de integrales puede firmar. La altura interior de 198 cm y la anchura interior de 218 cm crean una sensación de amplitud real, no de maqueta. La distribución apuesta por dos camas individuales traseras de 207 x 90 y 202 x 90 cm —elevadas para dejar bajo ellas un garaje de gran capacidad con trampilla de 110 x 123 cm—, un baño pasante con ducha separada de 73 x 77 cm frente al aseo, cocina central y salón delantero en L junto a la cabina panorámica. De forma opcional, una cama abatible de 197 x 145 cm sobre la cabina y la transformación del salón (205 x 110-50 cm) elevan la capacidad hasta cinco plazas nocturnas, aunque la configuración de serie, con cuatro cinturones y cuatro camas, es la que mejor le sienta: este no es un vehículo para ir apretados.

    El chasis SLC (Super Light Chassis) de Hymer merece un párrafo propio: un doble suelo completamente nivelado que recorre todo el vehículo y aloja por debajo, protegidos de las heladas, los depósitos de agua limpia (180 litros, 20 en posición de marcha) y grises (150 litros), el sistema de baterías y la calefacción, dejando además un enorme espacio de almacenamiento accesible desde el interior. La carrocería PUAL 2.0 —espuma de poliuretano entre aluminios, sin madera— ofrece un aislamiento de 41/34/34 mm en suelo, paredes y techo, y tanto el techo como el suelo son de GFK, inmunes al granizo. Es ingeniería alemana aplicada al ocio: cada kilo está pensado.

    En tecnología y equipamiento, el MasterLine I 780 juega en otra liga. La cabina Mercedes aporta el sistema MBUX, faros full LED, climatizador Thermotronic, control de crucero adaptativo Distronic y el arsenal completo de asistentes del Sprinter. La célula suma la app Hymer Connect —que permite controlar y monitorizar el vehículo desde el móvil incluso a distancia por red móvil en 30 países europeos—, frigorífico de 153 litros, cocina con amplia superficie de trabajo, 4 enchufes de 230 V, 2 de 12 V y 6 USB, calefacción de agua caliente (el sistema más confortable y silencioso para este tamaño) y dos bombonas de gas de 13 kg. Los «mundos de estilo» premium del interior, con maderas nobles y tapicerías de alta gama, justifican visualmente cada euro del precio.

    En mecánica, el Mercedes Sprinter 415 CDI de 150 CV (110 kW) Euro VI-E con tracción trasera es la motorización de serie, con el 417 CDI de 170 CV y el cambio automático 9G-Tronic como la opción que elige la mayoría de los compradores de este nivel. Con 3.501 kg en orden de marcha, el 150 CV mueve el conjunto con dignidad, pero el 170 CV automático es la combinación redonda para un vehículo que nace para devorar autopistas europeas. La distancia entre ejes de 4.500 mm y la suspensión independiente del SLC proporcionan una estabilidad notable para sus casi 3 metros de altura. El consumo no lo publica Hymer, pero nadie compra una integral de 4,4 toneladas esperando cifras de utilitario.

    En precio y red comercial en España, el PVP recomendado oficial en Alemania parte de 165.600 euros, y en Francia Hymer anuncia 161.870 euros; no existe una tarifa oficial publicada para España, por lo que el precio final se configura con el distribuidor. Hymer cuenta con una red de concesionarios oficiales en España donde se personaliza cada unidad —y la personalización aquí es seria: paquetes de chasis, de estilo, de autonomía con litio, toldos eléctricos—, de modo que el precio de una unidad equipada a gusto del comprador sube con facilidad por encima de los 200.000 euros. Es el segmento donde el descuento se negocia, no se anuncia.

    Cómo lo verificamos: todas las cotas, pesos, capacidades, plazas y el equipamiento citado proceden de los datos técnicos oficiales publicados por Hymer en hymer.com para el B-Klasse MasterLine I 780, verificados el 19 de octubre de 2026. El precio de partida es el PVP recomendado oficial para Alemania publicado por la marca. El galardón Camping Life Trophy 2022 procede de la página oficial de premios de Hymer. Los datos no publicados por el fabricante (carga útil como cifra única, consumo, par motor, emisiones) quedan sin dato y se declaran como tales en lugar de estimarse.

    Para quién es: el B-ML I 780 encaja con viajeros exigentes de alto poder adquisitivo que quieren la referencia del segmento —tecnología Mercedes, chasis SLC, acabados premium— y que ya tienen el carnet C1 o están dispuestos a sacárselo. Es el vehículo del «gran tour» europeo, de los inviernos largos en el sur y de quien valora que cada detalle esté resuelto de fábrica. No es para quien busque su primera autocaravana (hay que empezar por algo más modesto), para quien solo tenga el carnet B, ni para quien priorice la discreción o el bajo consumo: 7,89 metros de integral premium son una declaración de intenciones con ruedas.`,
    pros: [
      "Chasis SLC propio con doble suelo nivelado: almacenamiento, protección antiheladas y estabilidad superiores.",
      "Carrocería PUAL 2.0 sin madera y GFK en techo y suelo: aislamiento y durabilidad de referencia.",
      "Cabina Mercedes con MBUX, faros full LED y asistentes completos; app Hymer Connect de serie.",
      "Camas individuales traseras de 207 x 90 cm, ducha separada y frigorífico de 153 l: habitabilidad de apartamento.",
      "Ganador del Camping Life Trophy 2022 en integrales por votación popular de AutoZeitung.",
    ],
    contras: [
      "MMA de 4.430 kg: exige carnet C1 sin excepción.",
      "Precio de partida de 165.600 € en Alemania y sin tarifa oficial para España: compra solo para presupuestos altos.",
      "7,89 m de longitud: exige experiencia y limita el acceso a pueblos y áreas pequeñas.",
      "El motor de serie de 150 CV se queda corto para muchos; el 170 CV automático encarece la factura.",
      "Consumo no publicado y previsiblemente elevado: el coste por kilómetro es alto.",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/hymer-b-klasse-ml-i-780-2026-precio-ficha-tecnica-oficial.webp", alt: "Hymer B-Klasse ML I 780, vista exterior", ancho: 1600, alto: 1067 },
      { src: "/media/hymer-b-klasse-ml-i-780-2026-precio-ficha-tecnica-interior1.webp", alt: "Hymer B-Klasse ML I 780, interior", ancho: 1920, alto: 1440 },
      { src: "/media/hymer-b-klasse-ml-i-780-2026-precio-ficha-tecnica-interior2.webp", alt: "Hymer B-Klasse ML I 780, interior", ancho: 800, alto: 533 },
      { src: "/media/hymer-b-klasse-ml-i-780-2026-precio-ficha-tecnica-detalle.webp", alt: "Hymer B-Klasse ML I 780, detalle", ancho: 906, alto: 680 },
    ],
    analisisSlug: "hymer-b-klasse-ml-i-780-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Mercedes Sprinter: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Mercedes Sprinter)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 450 },
        { nombre: "Revisión célula Hymer (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 280 },
      ],
    },
  },
  {
    id: "hymer-free-600-campus-2026-precio-ficha-tecnica",
    marca: "Hymer",
    modelo: "Free 600 Campus",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: null, // Hymer no publica PVP del Free 600 Campus (edición especial 2019)
    potenciaCv: 140, // Fiat Ducato 2.2 MultiJet de 140 CV según exposés de concesionario; la nota de prensa no publica la potencia
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro 6 sobre Fiat Ducato
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/hymer-free-600-campus-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/hymer-free-600-campus-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/hymer-free-600-campus-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990, // exposés de concesionario
    anchoMm: 2080, // exposés de concesionario
    altoMm: 2600, // exposés de concesionario
    pesoKg: 3146, // masa en orden de marcha según exposé de concesionario (caraworld.de)
    mmaKg: 3500, // exposés de concesionario
    carnetNecesario: "B", // mmaKg <= 3500
    cargaUtilKg: null, // Hymer no publica una cifra de carga útil; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4, // cama transversal trasera + cama doble del techo elevable
    parNm: null,
    traccion: "delantera", // Fiat Ducato, tracción delantera de serie en la plataforma
    emisionesCo2: null,
    aprox: [],
    notas:
      "El Free 600 Campus es la edición especial que Hymer presentó en el Caravan Salon de Düsseldorf 2019 sobre base Fiat Ducato (no confundir con el posterior Free S 600 Campus sobre Mercedes Sprinter). Los datos de la edición (diseño bicolor, techo elevable negro, 4 plazas, depósito de 90 l, ISOFIX) proceden de la nota de prensa oficial de Hymer. Las cotas (5.990/2.080/2.600 mm), la MMA de 3.500 kg, la masa en orden de marcha de 3.146 kg, el motor 2.2 de 140 CV, la calefacción diésel de 4 kW, el frigorífico de 90 l y los depósitos de 100 l proceden de exposés de concesionarios (caraworld.de, TruckScout24). Precio: Hymer no publica PVP de esta edición especial; Carga útil, consumo y par: no publicados; no existe precio base oficial vigente verificable.",
    curiosidades:
      "El Free 600 Campus nació como una jugada de marketing con fundamento: Hymer lo presentó en el Caravan Salon de Düsseldorf 2019 como edición especial con carrocería bicolor, techo elevable negro y óptica «campus» juvenil, y lo definió como el camper perfecto para iniciarse en el caravaning sin renunciar al equipamiento —incluía de serie anclajes ISOFIX en la banqueta para los más pequeños de la casa—. Fuente: nota de prensa oficial de Hymer (https://WWW.HYMER.COM/gb/en/hymer-product-news-caravan-salon-duesseldorf-2019/p/46939).",
    descripcion: `El Hymer Free 600 Campus es la edición especial con la que Hymer quiso rejuvenecer su gama camper en el Caravan Salon de Düsseldorf de 2019: un Fiat Ducato de menos de 6 metros con carrocería bicolor, techo elevable negro y un equipamiento pensado para que estrenarse en el caravaning no signifique estrenarse en la incomodidad. Con 5.990 mm de longitud, 2.080 mm de anchura y 2.600 mm de altura, mantiene las virtudes de toda camper de 6 metros —aparca en una plaza normal, entra en casi todos los parkings, se conduce con el carnet B— y añade el truco del techo elevable: cuatro plazas para dormir donde una camper convencional ofrece dos.

    La vida a bordo se organiza con la lógica clásica de Hymer: salón delantero con banqueta doble y asientos de cabina giratorios, cocina lateral completa y cama transversal en la parte posterior. El techo elevable, negro en esta edición como seña de identidad, despliega una cama doble superior que convierte la camper en un cuatro plazas familiar sin alargar ni un centímetro la carrocería. Con el techo cerrado, la altura interior es la de un Ducato de techo alto y permite moverse con soltura; con el techo abierto, la cama superior gana luz cenital y ventilación cruzada. El baño, compacto pero completo, resuelve el aseo diario sin obligar a depender de las instalaciones del camping.

    Lo que distingue al Campus de un Free 600 estándar es su dotación de edición. La nota de prensa oficial subraya el depósito de gasóleo de 90 litros —autonomía para cruzar media Europa sin pasar por el surtidor—, el control de crucero, las luces diurnas LED con antinieblas, el toldo de carcasa antracita de 375 x 250 cm con adaptador específico para el techo elevable y, como guiño familiar, los anclajes ISOFIX en la banqueta del salón para las sillas de los niños. El ambiente interior «Home», con sus cojines y la bolsa de tela a juego, y la madera Grand Oak le imprimen un carácter desenfadado que encaja con el público joven al que apunta la edición. Los exposés de concesionario completan el cuadro con el sistema multimedia de Fiat de 10 pulgadas con navegación, DAB+, Apple CarPlay, Android Auto, cámara de marcha atrás y volante multifunción, además del climatizador automático de la cabina.

    Para el confort térmico, la calefacción es una Truma Combi que funciona con diésel y electricidad —una decisión acertada en una camper, porque calienta con el carburante del propio depósito en vez de depender de bombonas de gas—, y el equipamiento eléctrico contempla segundas baterías y preinstalación solar en las unidades más completas. El frigorífico de 90 litros con congelador de 6,5, el depósito de agua limpia de 100 litros y el de grises de otros 100 permiten dos o tres días de autonomía real para dos personas. La cama trasera y la del techo elevable suman cuatro plazas nocturnas, y los cuatro cinturones autorizan a viajar a cuatro, aunque meter el equipaje de cuatro personas en 6 metros obliga a hacer números con el peso.

    Bajo el capó, el Fiat Ducato 2.2 MultiJet de 140 CV con cambio manual de seis marchas —automático de 8 relaciones en las unidades más equipadas— es la configuración que documentan los concesionarios; la nota de prensa de 2019 no detalla la potencia, así que conviene confirmarla en cada unidad concreta. Con 3.146 kg en orden de marcha según exposé y 3.500 kg de MMA, el margen de carga para cuatro ocupantes con equipaje es ajustado pero viable si se viaja ligero. La tracción delantera y el conocido tacto del Ducato —noble, predecible— se apoyan en una red de talleres que cubre toda Europa, una tranquilidad que no tiene precio cuando se rueda lejos de casa.

    En cuanto al precio, Hymer no publicó PVP para esta edición especial de 2019, así que no ofrecemos cifra de partida: el Campus se encuentra hoy sobre todo en el mercado de ocasión, donde los portales españoles y alemanes lo anuncian con frecuencia. Como orientación, las unidades de segunda mano se mueven en una horquilla que depende del año, los kilómetros y la dotación; antes de comprar conviene revisar el estado del techo elevable —lonas, muelles y cierres— con calma. Hymer mantiene red oficial en España para el servicio postventa.

    Cómo lo verificamos: la existencia de la edición, su debut en el Caravan Salon 2019, el diseño bicolor, el techo elevable negro, las cuatro plazas, el depósito de 90 litros y los anclajes ISOFIX proceden de la nota de prensa oficial de Hymer. Las cotas, los pesos, el motor, la calefacción y los depósitos proceden de exposés técnicos de concesionarios (caraworld.de, TruckScout24) de unidades reales del Free 600 Campus sobre Fiat. Advertimos expresamente de no confundirlo con el posterior Hymer Free S 600 Campus sobre Mercedes Sprinter, un modelo distinto. Todo verificado el 19 de octubre de 2026; los datos no publicados (precio oficial, carga útil, consumo, par) quedan sin dato.

    El comprador ideal del Free 600 Campus es la pareja joven o la familia con niños pequeños que busca su primera camper: menos de 6 metros para el día a día, cuatro camas gracias al techo elevable, ISOFIX de serie y la dotación justa para no echar nada en falta. Es la puerta de entrada al universo Hymer sin dar el salto a una integral. En cambio, no es la elección adecuada para quien necesite una carga útil holgada con cuatro ocupantes (el margen es justo), ni para quien quiera estrenar una unidad nueva de esta edición concreta: el Campus de 2019 se compra hoy de ocasión, y su alternativa nueva está en la gama Free actual.`,
    pros: [
      "Techo elevable negro de serie en la edición: cuatro plazas para dormir en menos de 6 metros.",
      "Edición especial con carrocería bicolor y equipamiento ampliado (toldo, ISOFIX, depósito de 90 l).",
      "Calefacción Truma Combi diésel/eléctrica: autonomía térmica sin depender de bombonas de gas.",
      "MMA de 3.500 kg y 5,99 m: carnet B y aparcamiento de furgoneta grande.",
      "Infoentretenimiento Fiat de 10\" con navegación, CarPlay/Android Auto y cámara trasera en las unidades equipadas.",
    ],
    contras: [
      "Edición especial de 2019: hoy solo se encuentra de ocasión; no hay PVP oficial ni unidades nuevas.",
      "Margen de carga ajustado para cuatro ocupantes con equipaje: hay que viajar ligero o pesar la unidad.",
      "La potencia exacta varía según la unidad (la nota de prensa no la publica): verificar en cada anuncio.",
      "El techo elevable exige revisar lonas, muelles y cierres en la compra de ocasión.",
      "No confundir con el Free S 600 Campus sobre Mercedes: son modelos distintos con precios distintos.",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/hymer-free-600-campus-2026-precio-ficha-tecnica-oficial.webp", alt: "Hymer Free 600 Campus, vista exterior", ancho: 1500, alto: 1125 },
      { src: "/media/hymer-free-600-campus-2026-precio-ficha-tecnica-interior1.webp", alt: "Hymer Free 600 Campus, interior", ancho: 1024, alto: 768 },
      { src: "/media/hymer-free-600-campus-2026-precio-ficha-tecnica-interior2.webp", alt: "Hymer Free 600 Campus, interior", ancho: 728, alto: 485 },
      { src: "/media/hymer-free-600-campus-2026-precio-ficha-tecnica-detalle.webp", alt: "Hymer Free 600 Campus, detalle", ancho: 1500, alto: 1000 },
    ],
    analisisSlug: "hymer-free-600-campus-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 48.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Hymer (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades + techo elevable", costeAproxEur: 280 },
      ],
    },
  },
];
