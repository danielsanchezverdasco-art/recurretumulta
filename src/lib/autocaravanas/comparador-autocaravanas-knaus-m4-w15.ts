// Autocaravanas Knaus — lote Merlín 4 (19/10/2026).
// Fuentes: configurador oficial Knaus (ficha de configuración BOXDRIVE 600 XL 2025 generada en
// knaus.com), datos técnicos de la red de distribución (AlpaCamping, fichas de catálogo en
// TruckScout24/Caraworld con datos de fabricante), ficha técnica del L!VE I 700 MEG modelo 2026
// (Caraworld, con datos de catálogo Knaus: 7.510 x 2.320 x 2.790 mm, Ducato 2.2 180 CV).
// Verificado el 19/10/2026.
// Notas honestas: Knaus publica su Preisliste oficial (MJ2027-1, EUR IVA 19% incl.; sin tarifa para
// España): precioDesde del L!VE I 700 MEG = Grundpreis oficial (87.530 €, «aprox»); el BoxDrive 600 XL
// queda sin dato (descatalogado). Se citan como referencia el precio de catálogo del configurador y
// los precios de lista de concesionarios alemanes. La altura del Boxdrive varía entre 2.971 y 3.200 mm según configuración en las fichas
// de la red; se adopta 3.200 mm (valor más repetido) con la variación declarada. La tara exacta
// depende del equipamiento → pesoKg null; la carga útil no la publica la marca como cifra de
// catálogo → cargaUtilKg null. Consumo y emisiones → null.

import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_KNAUS_M4: Autocaravana[] = [
  {
    id: "knaus-boxdrive-600-xl-2026-precio-ficha-tecnica",
    marca: "Knaus",
    modelo: "Boxdrive 600 XL",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: null, // Knaus no publica PVP oficial ES; ref. configurador knaus.com: £80.768 GBP (2025)
    potenciaCv: 163, // configurador oficial Knaus 2025: MAN TGE 2.0 TDI 120 kW/163 CV con cambio automático de 8 vel.
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
    imagen: "/media/knaus-boxdrive-600-xl-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/knaus-boxdrive-600-xl-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/knaus-boxdrive-600-xl-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5986,
    anchoMm: 2040,
    altoMm: 3200, // configurador oficial Knaus 2025: 3.090 mm; fichas de la red varían entre 2.971 y 3.200 mm según configuración
    pesoKg: null, // la tara varía según equipamiento; la marca no publica una cifra única
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica carga útil de catálogo; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4,
    parNm: null,
    traccion: "delantera", // base MAN TGE de tracción delantera (fichas de catálogo)
    emisionesCo2: null,
    aprox: [],
    notas:
      "Procedencia de los datos: 5.986 x 2.040 x 3.200 mm, MMA 3.500 kg, base MAN TGE 35, motor 2.0 TDI  Precio: se deja sin dato porque el BoxDrive (MAN TGE) está descatalogado y no consta Grundpreis EUR en la lista oficial vigente de Knaus (sustituido); la única referencia oficial localizada es el configurador Knaus UK en GBP, no convertible a tarifa EUR." +
      "de 120 kW/163 CV (opcional 130 kW/177 CV), cambio automático de 8 velocidades, 4 plazas de viaje " +
      "y 4 de noche según fichas de catálogo de la red de distribución (AlpaCamping, TruckScout24, " +
      "Caraworld) y ficha de configuración oficial del configurador de knaus.com (modelo 2025). Camas: " +
      "trasera de 194x145 cm y basculante delantera de 186x124 cm (opcional). Calefacción Truma Combi 6 D " +
      "(diésel), nevera de 69 l, agua limpia 100 l y grises 80 l, batería de 92 Ah, altura interior " +
      "225 cm, batalla 364 cm y capacidad de remolque frenado de 3.000 kg según fichas de catálogo. " +
      "La altura total varía en las fichas de la red entre 2.971 y 3.200 mm según configuración " +
      "(techo alto, 4x4); se adopta 3.200 mm por ser el valor más repetido. Sin dato publicado: precio ES (Knaus " +
      "no publica tarifa oficial en España), tara exacta, carga útil, consumo y emisiones.",
    curiosidades:
      "El Boxdrive es uno de los pocos camper del mercado construido sobre el MAN TGE en lugar del " +
      "habitual Fiat Ducato, y su techo alto de serie deja una altura interior de 2,25 m, casi la de " +
      "una autocaravana — https://www.alpacacamping.de/fahrzeuge/en/model/knaus-boxdrive/",
    descripcion: `El Knaus Boxdrive 600 XL es el camper con techo alto de la marca alemana, y su principal
seña de identidad está bajo el capó y sobre el techo: en lugar del omnipresente Fiat Ducato, utiliza
la base del MAN TGE 35, y en lugar del techo estándar de furgoneta, monta un techo alto que deja una
altura interior de 2,25 metros. El resultado es un camper de 5,99 metros que se conduce como una
furgoneta grande pero se habita casi como una autocaravana, con cuatro plazas para dormir gracias a
su cama basculante delantera opcional.

En medidas y habitabilidad, hablamos de 5.986 mm de largo, 2.040 mm de ancho y 3.200 mm de alto, con
una batalla de 364 cm y una MMA de 3.500 kg que lo mantiene en el carnet B. La distribución aprovecha
el techo alto: en la parte trasera, una cama transversal fija de 194x145 cm sobre un maletero de buen
tamaño; en el centro, una dinette para cuatro con cocina lateral equipada con dos fogones, fregadero
y nevera de 69 litros; y en la zona delantera, la cama basculante opcional de 186x124 cm que se
despliega sobre la cabina y completa las cuatro plazas de noche. El cuarto de baño, compacto pero
completo, incluye WC de casete y ducha. La altura interior permite estar de pie con holgura en toda
la célula, algo que los camper de techo estándar no pueden ofrecer.

En tecnología y equipamiento, el pack Boxdrive de serie concentra lo esencial: escalón de entrada
eléctrico de 70 cm, puerta con mosquitera, preinstalación de radio con dos altavoces, panel de
control digital Truma CP-Plus para la calefacción, funda aislante calefactada para el depósito de
aguas grises y sistema de filtrado de agua. El pack Styling añade faros principales LED con luz
diurna, retrovisores abatibles eléctricamente y llantas de aleación de 17 pulgadas de origen MAN. El
pack Energy Basic incorpora cargador inteligente de 25 A, tomas Schuko adicionales en cocina y
garaje, y un panel táctil con conectividad para controlar los sistemas desde el móvil. La tapicería
Active Rock y los muebles en diseño moderno completan un ambiente más cercano a una autocaravana
premium que a una furgoneta camperizada.

En camas y plazas, la configuración de serie con la cama basculante duerme a cuatro: la cama trasera
fija y la delantera escamoteable. Las cuatro plazas de viaje con cinturones lo hacen válido para dos
adultos y dos niños, y la posibilidad de remolcar hasta 3.000 kg frenados abre la puerta a llevar un
remolque con motos o un pequeño barco. Los 100 litros de agua limpia y 80 de grises, junto a la
calefacción diésel Truma Combi 6 D que no depende de las botellas de gas, le dan una autonomía real
para escapadas largas.

En mecánica, el MAN TGE 35 monta el 2.0 TDI de 163 CV (120 kW) de serie, con la opción del 177 CV
(130 kW), siempre con cambio automático de 8 velocidades y tracción delantera. Es una mecánica
robusta y probada en el mundo profesional, con la red de servicio de MAN disponible en toda Europa.
Existe además una variante 4x4 para quien busque salir del asfalto, aunque eleva el precio y el
consumo. La normativa de emisiones es Euro 6d.

En precio y red comercial en España, Knaus no publica tarifa oficial para nuestro mercado, por lo que
no es posible dar un precio de partida verificado: cada distribuidor presupuesta según
equipamiento. Como referencia, una configuración 2025 generada en el configurador oficial de knaus.com
partía de £80.768 solo en equipamiento de serie. En España la marca se comercializa a través de su
red de distribuidores oficiales, con servicio postventa y garantía europea. Conviene pedir el
presupuesto con los packs Boxdrive, Styling y Energy ya incluidos, porque por separado salen más
caros.

Cómo lo verificamos: dimensiones, motor, cambio, plazas, camas y equipamiento proceden de la ficha
de configuración oficial generada en el configurador de knaus.com y de las fichas técnicas de
catálogo distribuidas por la red (AlpaCamping, TruckScout24, Caraworld). Todo verificado el
19/10/2026. Lo que la marca no publica —precio oficial en España, tara exacta, carga útil, consumo
y emisiones— queda declarado sin dato y en las notas de esta ficha. La altura total varía según
configuración en las fichas de la red (2.971–3.200 mm); se adopta 3.200 mm con la variación
declarada.

Para quién es: es el camper ideal para quien quiere la discreción y agilidad de una furgoneta de
menos de 6 metros pero necesita estar de pie dentro y dormir a cuatro, con la solidez de la base MAN
y una autonomía que no depende del gas. No es para quien busque el precio más bajo del segmento
—los packs lo encarecen frente a camper más básicos— ni para quien necesite un gran garaje trasero:
la cama transversal fija limita ese espacio, y para cargar motos grandes hay que mirar a
autocaravanas con garaje pasante.`,
    pros: [
      "Base MAN TGE en lugar de Fiat: alternativa sólida con red de servicio profesional",
      "Techo alto de serie con 2,25 m de altura interior: se está de pie en toda la célula",
      "Cuatro plazas para dormir en menos de 6 metros gracias a la cama basculante delantera",
      "Calefacción diésel Truma Combi 6 D: autonomía sin depender de botellas de gas",
      "Capacidad de remolque de 3.000 kg frenados, rara en un camper de este tamaño",
    ],
    contras: [
      "Knaus no publica precio oficial en España: cada distribuidor presupuesta a su criterio",
      "Los packs Boxdrive, Styling y Energy encarecen notablemente el precio final",
      "La cama trasera fija limita el garaje frente a soluciones con camas gemelas",
      "Con 3,20 m de alto no entra en muchos parkings cubiertos ni garajes",
      "La nevera de 69 l es justa para cuatro personas en viajes largos",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/knaus-boxdrive-600-xl-2026-precio-ficha-tecnica-oficial.webp", alt: "Knaus Boxdrive 600 XL, vista exterior", ancho: 1200, alto: 800 },
      { src: "/media/knaus-boxdrive-600-xl-2026-precio-ficha-tecnica-interior1.webp", alt: "Knaus Boxdrive 600 XL, salón interior", ancho: 1200, alto: 800 },
      { src: "/media/knaus-boxdrive-600-xl-2026-precio-ficha-tecnica-interior2.webp", alt: "Knaus Boxdrive 600 XL, zona de camas", ancho: 1200, alto: 800 },
      { src: "/media/knaus-boxdrive-600-xl-2026-precio-ficha-tecnica-detalle.webp", alt: "Knaus Boxdrive 600 XL, detalle", ancho: 1200, alto: 800 },
    ],
    analisisSlug: "knaus-boxdrive-600-xl-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base MAN TGE: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (MAN TGE)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Knaus (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 240 },
      ],
    },
  },
  {
    id: "knaus-live-i-700-meg-2026-precio-ficha-tecnica",
    marca: "Knaus",
    modelo: "Live I 700 MEG",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: 87530, // Preisliste oficial Knaus MJ2027-1, EUR IVA 19% incl.
    potenciaCv: 180, // fichas de catálogo de la red: Fiat Ducato de 180 CV en la variante alta
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
    imagen: "/media/knaus-live-i-700-meg-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/knaus-live-i-700-meg-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/knaus-live-i-700-meg-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7510,
    anchoMm: 2320,
    altoMm: 2790,
    pesoKg: null, // la tara varía según equipamiento; la marca no publica una cifra única
    mmaKg: 4000, // ampliable a 4.400 kg en opción
    carnetNecesario: "C1", // MMA superior a 3.500 kg
    cargaUtilKg: null, // la marca no publica carga útil de catálogo; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4,
    parNm: null,
    traccion: "delantera", // base Fiat Ducato de tracción delantera (fichas de catálogo)
    emisionesCo2: null,
    aprox: ["precioDesde"],
    notas:
      "Procedencia de los datos: 7.510 x 2.320 x 2.790 mm, altura interior 200 cm, batalla 403 cm,  Precio: Grundpreis de la Preisliste oficial de Knaus Tabbert, año modelo 2027-1, L!VE I 700 MEG, en EUR con IVA alemán del 19% incluido; no hay tarifa oficial para España." +
      "MMA 4.000 kg (ampliable a 4.400 kg), base Fiat Ducato 2.2 l Multijet de 132 kW/180 CV Euro 6e " +
      "(también disponible 103 kW/140 CV), cambio automático de 8 velocidades con convertidor en " +
      "opción, 4 plazas de viaje y 4 de noche según fichas técnicas de catálogo 2026 de la red de " +
      "distribución (Caraworld, TruckScout24). Camas: gemelas traseras de 199x78/205x78 cm, basculante " +
      "de 193x150 cm y cama de cabina de 205x118/88 cm. Calefacción Truma Combi 6, nevera de 142 l " +
      "(177 l en algunas configuraciones), agua limpia 100 l y grises 95 l, batería de 80 Ah y " +
      "cargador de 25 A. Masa en orden de marcha 3.098-3.122 kg y carga útil de 1.278-1.302 kg según " +
      "fichas de distribuidor; no se trasladan a los campos por ser cifras de unidades concretas. " +
      "Sin dato publicado: precio ES (Knaus no publica tarifa oficial en España), tara exacta, consumo y emisiones. " +
      "ATENCIÓN: con 4.000 kg de MMA requiere carnet C1.",
    curiosidades:
      "El L!VE I 700 MEG equipa de serie fijaciones Isofix para dos sillas infantiles y colchón EvoPore " +
      "HRC con sobrecolchón WaterGEL, un nivel de descanso más propio de la gama alta — " +
      "https://www.truckscout24.fr/main/search/index?search-word=knaus+l%21ve+i+700+meg+mit+top+ausstattung+lp+118.337+%C2%A4%21",
    descripcion: `El Knaus L!VE I 700 MEG es el integral grande de la gama de acceso de la marca alemana: un
auténtico clase A de 7,51 metros con camas gemelas traseras, cama basculante y un nivel de
equipamiento que incluye detalles poco habituales en su segmento, como las fijaciones Isofix para
dos sillas infantiles o el colchón EvoPore HRC con sobrecolchón WaterGEL. Es la puerta de entrada al
mundo de los integrales Knaus sin saltar a las gamas premium.

En medidas y habitabilidad, hablamos de 7.510 mm de largo, 2.320 mm de ancho y 2.790 mm de alto, con
una altura interior de 2,00 metros y una batalla de 403 cm. La distribución MEG —la clásica de camas
gemelas— sitúa en la parte trasera dos camas individuales de 199x78 y 205x78 cm sobre un garaje
pasante de gran tamaño, con puerta de 80x110 cm en el lateral izquierdo. En el centro, el cuarto de
baño con ducha y WC de casete; delante, un salón en L con mesa telescópica de una columna para
cuatro comensales; y sobre la cabina, la cama basculante de 193x150 cm con accionamiento eléctrico.
La cama de la cabina delantera (205x118/88 cm) completa un conjunto que duerme a cuatro personas en
camas de verdad, sin dinettes que montar.

En tecnología y equipamiento, el pack L!VE I de serie incluye fundas a medida para los asientos de
cabina, iluminación ambiental, panel digital Truma CP-Plus para la calefacción, funda aislante
calefactada para el depósito de grises y claraboya de 70x50 cm con iluminación. El pack Styling suma
detalles cromados en la calandra, cristales laterales de cabina con marco negro y llantas de
aleación de 16 pulgadas. El pack Media aporta navegador todo en uno y cámara de marcha atrás, y el
pack de TV de 27 pulgadas incluye antena exterior LTE/Wi-Fi. La cocina equipa nevera de 142 litros
—177 en algunas configuraciones—, y el toldo de 500x250 cm viene de serie en la mayoría de las
unidades de stock.

En camas y plazas, la configuración duerme a cuatro en tres camas diferenciadas: las gemelas
traseras, la basculante de cabina y la cama delantera. Las cuatro plazas de viaje con cinturones, el
Isofix para dos sillas infantiles y la extensión de cama que convierte la zona trasera en una gran
superficie lo hacen apto para una familia con dos niños que viaja cómoda y segura. Los 100 litros de
agua limpia y 95 de grises dan para varios días, y la calefacción Truma Combi 6 con el sistema
DuoControl CS permite usar el gas en marcha con seguridad.

En mecánica, el Fiat Ducato 2.2 Multijet se ofrece en 140 CV (103 kW) y 180 CV (132 kW), este último
con cambio automático de 8 velocidades con convertidor de par en opción, freno de estacionamiento
eléctrico y depósito de 90 litros. La tracción es delantera y la normativa de emisiones es Euro 6e.
La MMA de 4.000 kg —ampliable a 4.400 kg— deja un margen de carga generoso (las fichas de
distribuidor hablan de 1.278 a 1.302 kg de carga útil según configuración), pero obliga al carnet
C1: es el peaje ineludible de un integral de este tamaño y equipamiento.

En precio y red comercial en España, Knaus no publica tarifa oficial para nuestro mercado, por lo que
no es posible dar un precio de partida verificado. Como referencia, una unidad modelo 2026 con el
2.2 de 180 CV, cambio automático y los principales packs tenía un precio de lista en Alemania de
114.753 € con extras incluidos. En España la marca cuenta con red de distribuidores oficiales y
servicio postventa con garantía europea. Dado el salto de precio entre el 140 y el 180 CV con
automático, conviene valorar el uso real: para viajar cargado por autopista el 180 CV automático se
agradece, mientras que el 140 CV manual resulta más económico de compra y mantenimiento.

Cómo lo verificamos: dimensiones, motor, cambio, plazas, camas, depósitos y equipamiento proceden
de las fichas técnicas de catálogo del modelo 2026 distribuidas por la red (Caraworld, TruckScout24)
con datos de fabricante. Todo verificado el 19/10/2026. Lo que la marca no publica —precio oficial
en España, consumo y emisiones— queda declarado sin dato y en las notas de esta ficha.

Para quién es: es el integral ideal para una familia o una pareja que quiere el espacio y el confort
de un clase A de 7,5 metros con camas gemelas y garaje pasante, y que ya tiene —o está dispuesta a
sacarse— el carnet C1. No es para quien solo tenga el carnet B: con 4.000 kg de MMA queda
automáticamente descartado, y en ese caso hay que mirar al L!VE TI o a integrales de 3.500 kg. Tampoco
es para quien busque un vehículo ágil para pueblos: sus 7,51 metros piden carreteras amplias y
campings con parcelas generosas.`,
    pros: [
      "Camas gemelas traseras sobre garaje pasante con puerta de 80x110 cm",
      "Isofix para dos sillas infantiles y colchón EvoPore HRC con WaterGEL de serie",
      "MMA de 4.000 kg (ampliable a 4.400): margen de carga de más de 1.200 kg",
      "Motor Fiat Ducato 2.2 de hasta 180 CV con automático de 8 velocidades",
      "Nivel de equipamiento alto de serie: toldo, TV 27\", packs L!VE I y Styling",
    ],
    contras: [
      "Requiere carnet C1: descartado automáticamente para quien solo tenga el B",
      "Knaus no publica precio oficial en España: cada distribuidor presupuesta a su criterio",
      "7,51 metros de largo: poco ágil en pueblos y carreteras estrechas",
      "El salto al 180 CV con cambio automático encarece notablemente la unidad",
      "El consumo de un integral de 4 toneladas con 180 CV hay que asumirlo",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/knaus-live-i-700-meg-2026-precio-ficha-tecnica-oficial.webp", alt: "Knaus Live I 700 MEG, vista exterior", ancho: 1200, alto: 800 },
      { src: "/media/knaus-live-i-700-meg-2026-precio-ficha-tecnica-interior1.webp", alt: "Knaus Live I 700 MEG, salón interior", ancho: 1200, alto: 800 },
      { src: "/media/knaus-live-i-700-meg-2026-precio-ficha-tecnica-interior2.webp", alt: "Knaus Live I 700 MEG, zona de camas", ancho: 1200, alto: 800 },
      { src: "/media/knaus-live-i-700-meg-2026-precio-ficha-tecnica-detalle.webp", alt: "Knaus Live I 700 MEG, detalle", ancho: 1200, alto: 800 },
    ],
    analisisSlug: "knaus-live-i-700-meg-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Knaus (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 240 },
      ],
    },
  },
];
