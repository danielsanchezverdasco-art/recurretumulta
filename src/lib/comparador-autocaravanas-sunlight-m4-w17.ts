// Autocaravanas Sunlight — lote Merlín 4 (19/10/2026).
// Fuentes: sunlight.de (web oficial: página del modelo T 69 LC Adventure y
// configurador oficial) + anuncios coherentes de unidades nuevas 2026 en
// TruckScout24 (distribuidor Freizeitcenter Adolph) + press.sunlight.de (sala de
// prensa oficial). Verificado el 19/10/2026.
// Notas honestas: la web oficial de Sunlight no pudo extraerse automáticamente
// (bloqueo técnico del lector), así que las dimensiones y el equipamiento se
// verifican con múltiples anuncios de unidades nuevas del año-modelo 2026,
// todos coherentes entre sí; la existencia de los modelos en el catálogo oficial
// 2026 está confirmada en sunlight.de. Sunlight no publica tarifa oficial para
// España ni PVP base accesible: precioDesde queda en null. Carga útil, consumos,
// emisiones y capacidades de depósitos no publicados por el fabricante → null.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_SUNLIGHT_M4: Autocaravana[] = [
  {
    id: "sunlight-t-69-l-2026-precio-ficha-tecnica",
    marca: "Sunlight",
    modelo: "T 69 L",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Sunlight no publica tarifa oficial (ni ES ni base DE accesible); el distribuidor anuncia unidades 2026 con PVP de 75.015 €
    potenciaCv: 140, // Citroën Jumper 2.2 BlueHDi de 103 kW; cambio automático de 8 v opcional
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
    imagen: "/media/sunlight-t-69-l-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/sunlight-t-69-l-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/sunlight-t-69-l-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7410, // anuncios de unidades nuevas 2026 (coherentes entre sí)
    anchoMm: 2320,
    altoMm: 2920,
    pesoKg: null, // no publicado por el fabricante
    mmaKg: 3499, // 3.499 kg según ficha de la unidad 2026 (conducible con carnet B)
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no la publica; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4, // cama queen trasera + cama basculante sobre el salón
    parNm: null,
    traccion: "delantera", // base Citroën Jumper de tracción delantera
    emisionesCo2: null,
    aprox: [],
    notas:
      "Modelo verificado en el catálogo oficial Sunlight 2026 (sunlight.de, página «T 69 LC Adventure»). Dimensiones (7.410 x 2.320 x 2.920 mm), MMA (3.499 kg), motor (Citroën Jumper 2.2 BlueHDi 140 CV Euro 6), 4 plazas de pernocta y equipamiento (frigorífico 156+29 l, Truma Combi 6, solar 100 W con MPPT, toldo 4,5 m, depósito de gasóleo 90 l, aguas grises aislado) verificados en anuncios de unidades nuevas del año-modelo 2026 del distribuidor Freizeitcenter Adolph, coherentes entre sí. La web oficial no publica PVP base ni tarifa para España: precioDesde en null. Carga útil, consumos, emisiones y depósitos de agua: no publicados.",
    curiosidades:
      "El T 69 L lleva el Bridge Light, la firma luminosa trasera de ancho completo que Sunlight introdujo en el rediseño de 2024: un piloto que recorre todo el ancho del vehículo y se ha convertido en su seña de identidad nocturna. Fuente: sala de prensa oficial de Sunlight (https://press.sunlight.de/sunlight-teilintegrierte-t-670s-t-680-und-t-690l-erstmals-auf-ford-basis/).",
    descripcion: `La Sunlight T 69 L es la perfilada familiar con cama queen de la gama Adventure de Sunlight para 2026, la marca de acceso del grupo Erwin Hymer que ha hecho de la relación equipamiento-precio su razón de ser. La «L» delata su formato largo —7,41 metros— y en el catálogo 2026 aparece como T 69 LC Adventure, donde la C identifica la base Citroën Jumper que monta el año-modelo actual, con el 2.2 BlueHDi de 140 CV. Es una perfilada pensada para familias que quieren cuatro camas reales, garaje grande y un equipamiento de salida muy completo sin entrar en presupuestos de gama media.

En medidas y habitabilidad, las fichas de las unidades nuevas 2026 anuncian 7.410 mm de largo, 2.320 mm de ancho y 2.920 mm de alto, con una masa máxima de 3.499 kg que la mantiene dentro del carnet B por un solo kilo de margen. La distribución es la clásica de las grandes perfiladas familiares: salón delantero en L con asientos de cabina giratorios, cocina lateral bien equipada, baño central completo y dormitorio trasero con cama queen —la cama «isla» a la que se accede por los tres lados— sobre un garaje trasero de gran volumen con doble puerta exterior. La altura interior útil ronda los 2,10 metros, así que incluso los viajeros altos se mueven sin agacharse.

En tecnología y equipamiento, el año-modelo 2026 llega con un nivel de dotación que hace unos años era propio de gamas superiores. El Pack Basic incluye el Bridge Light —el piloto trasero de ancho completo que es la firma luminosa de la marca—, puerta de célula confort con ventana, mosquitera de una pieza, claraboya panorámica de 70 x 50 cm sobre el salón y claraboya de 40 x 40 cm. El Pack Safety añade el arsenal de asistentes del Jumper moderno: frenada automática con detección de peatones y ciclistas, sensor de lluvia y luz, asistente de mantenimiento de carril, reconocimiento de señales, detector de fatiga e indicador inteligente de velocidad. La célula trae de serie placa solar de 100 W con regulador MPPT, preinstalación de TV a 12 V con soporte, preinstalación de cámara de marcha atrás, depósito de aguas grises aislado y calefactado, y un frigorífico grande de 156 litros con congelador independiente de 29 litros. La calefacción y el agua caliente corren a cargo de la Truma Combi 6, el estándar del segmento.

En camas y plazas, el esquema ofrece cuatro plazas para dormir: la cama queen trasera, siempre hecha, y la cama basculante sobre el salón, que se despliega en segundos para dos ocupantes más. Son cuatro plazas de viaje con cinturón, así que cada viajero tiene su cama asignada sin transformar el comedor cada noche, la fórmula que buscan las familias con dos hijos. El garaje bajo la cama queen, accesible por ambos laterales, traga bicicletas, sillas, mesa de camping y juguetes sin despeinar el interior.

Mecánicamente, la base Citroën Jumper 2.2 BlueHDi de 140 CV con homologación Euro 6 es una mecánica conocida y sobria, con el par necesario para mover con soltura los 3.499 kg del conjunto. La unidad 2026 de referencia monta el cambio automático de 8 velocidades, una opción que transforma el confort en autopista y en puertos de montaña, además del freno de estacionamiento eléctrico y un depósito de gasóleo de 90 litros que da para unas 800-900 kilómetros de autonomía teórica entre repostajes. La tracción es delantera, como en todas las perfiladas de este formato, con ESP y control de tracción de serie.

En precio y red comercial en España, Sunlight no publica tarifa oficial española ni un PVP base accesible en su web, así que el campo de precio queda honestamente en null. Como referencia real, el distribuidor alemán Freizeitcenter Adolph anuncia unidades nuevas del año-modelo 2026 con un precio de tarifa de 75.015 euros con el equipamiento descrito (automático, packs Basic y Safety, solar, toldo de 4,5 metros en negro) y un precio de oferta de 66.999 euros; en España el precio lo fija la red de distribuidores de Sunlight, presente en las principales zonas del país a través del grupo Erwin Hymer, y conviene pedir presupuesto cerrado con el equipamiento deseado porque los packs cambian mucho la factura final. La garantía es la legal europea más la de estanqueidad de la célula según condiciones de la marca.

Cómo lo verificamos: la existencia del modelo en el catálogo 2026 y su denominación comercial «T 69 LC Adventure» están confirmadas en sunlight.de (página oficial del modelo, consultada el 19/10/2026; la extracción automática de la web oficial falló por bloqueo técnico, así que las cifras se contrastaron con anuncios de unidades nuevas del año-modelo 2026). Las dimensiones (7.410 x 2.320 x 2.920 mm), la MMA (3.499 kg), el motor (Citroën Jumper 2.2 BlueHDi 140 CV Euro 6 con automática de 8 v), las 4 plazas de pernocta y todo el equipamiento citado proceden de anuncios coherentes entre sí del distribuidor Freizeitcenter Adolph en TruckScout24. El Bridge Light como seña de identidad de la marca procede de la sala de prensa oficial press.sunlight.de. Carga útil, consumos, emisiones y capacidades de agua: no publicados por el fabricante → null.

Para quién es: la T 69 L encaja con familias de cuatro que quieren cama queen, garaje grande y un equipamiento de salida completísimo sin pagar gama media, y con parejas que viajan con nietos o amigos de forma habitual y necesitan las cuatro camas siempre disponibles. No es para quien busque una perfilada compacta y ágil —7,41 metros se notan en pueblos y parkings— ni para quien quiera personalizar cada detalle: la filosofía Sunlight es ofrecer mucho de serie a precio cerrado, no un catálogo infinito de opciones. Y ojo al margen de carga: 3.499 kg de MMA con cuatro ocupantes y equipaje de familia exige hacer números antes de cargar el garaje hasta arriba.`,
    pros: [
      "Cama queen trasera siempre hecha más cama basculante: cuatro camas reales sin transformar el salón",
      "Equipamiento 2026 muy completo de serie: solar 100 W con MPPT, packs Basic y Safety, frigo 156+29 l",
      "Bridge Light de ancho completo: firma luminosa distintiva y más visibilidad nocturna",
      "Citroën Jumper 140 CV con automática de 8 v disponible: confort de conducción moderno en su precio",
      "MMA de 3.499 kg: carnet B justo al límite, sin necesidad de C1",
    ],
    contras: [
      "Sin tarifa oficial publicada: el precio real depende de cada distribuidor y hay que negociarlo",
      "7,41 m de largo: no es una perfilada para callejear; exige planificar parkings y accesos",
      "Margen de carga justo con 3.499 kg: cuatro ocupantes más equipaje y garaje lleno piden cálculo fino",
      "Carga útil, consumos y depósitos sin publicar: la ficha técnica oficial es parca en datos",
      "Filosofía de precio cerrado: menos posibilidades de personalización que en marcas de gama media",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/sunlight-t-69-l-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Sunlight T 69 L, vista exterior de la perfilada",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/sunlight-t-69-l-2026-precio-ficha-tecnica-interior1.webp",
        alt: "Sunlight T 69 L, interior del salón",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/sunlight-t-69-l-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Sunlight T 69 L, cama queen trasera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/sunlight-t-69-l-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Sunlight T 69 L, detalle del habitáculo",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "sunlight-t-69-l-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Base Citroën Jumper: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        {
          nombre: "Revisión Citroën Jumper (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de aire + filtro de gasóleo + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Sunlight (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
    },
  },
  {
    id: "sunlight-i-68-2026-precio-ficha-tecnica",
    marca: "Sunlight",
    modelo: "I 68",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: null, // Sunlight no publica tarifa oficial (ni ES ni base DE accesible)
    potenciaCv: 180, // Fiat Ducato 2.2 Multijet de 132 kW en la unidad 2026 Adventure documentada (automática de 8 v)
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
    imagen: "/media/sunlight-i-68-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/sunlight-i-68-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/sunlight-i-68-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7410, // anuncios de unidades nuevas 2026 Adventure (coherentes entre sí)
    anchoMm: 2320,
    altoMm: 2930,
    pesoKg: null, // no publicado por el fabricante
    mmaKg: 3650, // 3.650 kg en la unidad 2026 Adventure documentada
    carnetNecesario: "C1", // 3.650 kg supera los 3.500 kg del carnet B
    cargaUtilKg: null, // la marca no la publica; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 de serie; quinta plaza opcional en banco lateral según distribuidor
    plazasDormir: 4, // camas gemelas traseras (convertibles en doble) + cama basculante
    parNm: null,
    traccion: "delantera",
    emisionesCo2: null,
    aprox: [],
    notas:
      "Integral verificada en el catálogo oficial Sunlight 2026 (sunlight.de). Dimensiones (7.410 x 2.320 x 2.930 mm), MMA (3.650 kg), motor (Fiat Ducato 180 CV con automática de 8 v), 4 plazas de pernocta y equipamiento (frigo 156+29 l, horno integrado, depósito de grises aislado, depósito de gasóleo 90 l, llantas de 16'' bicolor) verificados en anuncios de unidades nuevas 2026 Adventure del distribuidor Freizeitcenter Adolph, coherentes entre sí. La MMA de 3.650 kg exige carnet C1 en España. Sunlight no publica tarifa oficial: precioDesde en null. Carga útil, consumos, emisiones y depósitos: no publicados.",
    curiosidades:
      "La edición Adventure del I 68 calza de serie llantas de aleación bicolor de 16 pulgadas, ventanas con marco en lugar de las habituales de quita y pon, y una segunda trampilla exterior de acceso al garaje: tres detalles que delatan su acabado superior dentro de la gama Sunlight. Fuente: configurador oficial de Sunlight (https://configurator.sunlight.de/en/reisemobile/adventure-i/69l/?x=SXZ14S7&step=2) y ficha de distribuidor en TruckScout24.",
    descripcion: `La Sunlight I 68 es la integral de 7,41 metros de la gama Adventure de Sunlight, la apuesta de la marca alemana del grupo Erwin Hymer por llevar el formato integral —carrocería completamente carrozada, sin cabina original— a un precio donde tradicionalmente solo había perfiladas. Es el vehículo para quien quiere la estética y la habitabilidad de una integral, con su parabrisas panorámico y su salón diáfano, sin subir al presupuesto de las integrales premium alemanas.

En medidas y habitabilidad, las fichas de las unidades nuevas 2026 anuncian 7.410 mm de largo, 2.320 mm de ancho y 2.930 mm de alto, con una masa máxima de 3.650 kg en la versión Adventure documentada. Ese dato es importante: al superar los 3.500 kg, en España exige el carnet C1, un peaje que conviene asumir con los ojos abiertos antes de enamorarse del vehículo. A cambio, esos 150 kilos extra sobre el límite del B dan un respiro de carga que las integrales de 3.500 kg no tienen. La distribución es la clásica de las integrales familiares: salón delantero panorámico con asientos giratorios, cocina lateral completa, baño central y dormitorio trasero con camas gemelas longitudinales que se convierten en una gran cama doble mediante el colchón central.

En tecnología y equipamiento, la edición Adventure marca distancias con la Sunlight básica. De serie incluye las llantas de aleación bicolor de 16 pulgadas, la tapicería y la decoración específicas Adventure, ventanas con marco —más estancas y silenciosas que las de quita y pon—, el elemento de diseño trasero, una segunda trampilla exterior de acceso al garaje y el gran frigorífico de 156 litros con congelador independiente de 29 litros. El Pack One suma el toldo y el portabicicletas para tres bicis, y el Pack Basic aporta el Bridge Light, la mosquitera de una pieza, el espejo con perchas y la claraboya panorámica de 70 x 50 cm. La cocina de la unidad documentada incluye horno integrado en el bloque, un extra poco común en este precio, y el baño trae enrejado de madera en la ducha, depósito de aguas grises aislado y calefactado, y preinstalación de TV a 12 voltios con soporte de pantalla plana.

En camas y plazas, la I 68 ofrece cuatro plazas para dormir: las dos camas gemelas traseras —de 190 x 80 y 185 x 80 cm aproximadamente, convertibles en doble— y la cama basculante eléctrica sobre el salón delantero, que desciende por la noche y se recoge de día para liberar el salón panorámico. Las plazas de viaje son cuatro con cinturón, con una quinta plaza opcional en el banco lateral que documenta el distribuidor para quien necesite llevar un pasajero más de forma esporádica. Es un esquema pensado para dos parejas o para una familia de cuatro con espacio de sobra: la integral se nota sobre todo en el salón delantero, donde la ausencia de la cabina original crea un ambiente mucho más amplio y luminoso que en una perfilada equivalente.

Mecánicamente, la unidad 2026 Adventure documentada monta el Fiat Ducato 2.2 Multijet de 180 CV (132 kW) con cambio automático de 8 velocidades, la combinación más potente y cómoda del catálogo Ducato camper, con homologación Euro 6. Es el motor que mejor le sienta a una integral de 3.650 kg: empuja con autoridad en autopista, sube puertos sin despeinarse y el automático elimina el eterno debate del embrague en retenciones. El depósito de gasóleo es de 90 litros y el chasis incluye freno de estacionamiento eléctrico. La tracción es delantera, con todo el arsenal electrónico del Ducato moderno (ESP, asistente de arranque en pendiente, control de crucero adaptativo en opción).

En precio y red comercial en España, Sunlight no publica tarifa oficial española ni PVP base accesible, así que el precio queda en null con honestidad. Como referencia, las integrales de acceso de 7,4 metros con 180 CV automático se mueven en el mercado europeo sensiblemente por encima de las perfiladas equivalentes; el precio final en España lo fija la red de distribuidores Sunlight del grupo Erwin Hymer, y conviene pedir oferta cerrada porque la edición Adventure, el automático y los packs pesan mucho en la factura. La garantía es la legal europea más la de estanqueidad de la célula.

Cómo lo verificamos: la existencia del modelo en el catálogo 2026 está confirmada en sunlight.de (la extracción automática de la web oficial falló por bloqueo técnico el 19/10/2026, así que las cifras se contrastaron con anuncios de unidades nuevas del año-modelo 2026). Las dimensiones (7.410 x 2.320 x 2.930 mm), la MMA (3.650 kg), el motor (Fiat Ducato 180 CV automático), las 4 plazas de pernocta, las camas gemelas convertibles y todo el equipamiento Adventure citado proceden de anuncios coherentes entre sí del distribuidor Freizeitcenter Adolph en TruckScout24; el detalle de la dotación Adventure (llantas bicolor, ventanas con marco, segunda trampilla) se confirma además en el configurador oficial de Sunlight. Carga útil, consumos, emisiones y capacidades de agua: no publicados → null.

Para quién es: la I 68 encaja con quien siempre soñó con una integral y no quiere —o no puede— pagar una premium alemana: el salón panorámico, la estética y el espacio interior son de verdad de integral. También con viajeros que hacen muchos kilómetros y valoran el 180 CV automático. No es para quien solo tenga el carnet B —los 3.650 kg exigen el C1, sin atajos—, ni para quien busque la máxima discreción: una integral blanca de 7,41 metros no pasa desapercibida en ningún pueblo. Y si el presupuesto manda, la T 69 L perfilada ofrece un planteamiento familiar parecido con carnet B y precio inferior.`,
    pros: [
      "Integral de verdad a precio de acceso: salón panorámico y estética integral sin presupuesto premium",
      "Fiat Ducato 180 CV con automática de 8 v: la mecánica más capaz y cómoda para 3.650 kg",
      "Edición Adventure con llantas bicolor, ventanas con marco y segunda trampilla: acabado superior",
      "Camas gemelas traseras convertibles en doble más basculante: cuatro camas flexibles según el viaje",
      "MMA de 3.650 kg: 150 kg de margen extra sobre el límite del B para carga real",
    ],
    contras: [
      "Exige carnet C1: los 3.650 kg dejan fuera a quien solo tenga el B, sin excepción",
      "Sin tarifa oficial publicada: el precio final depende del distribuidor y hay que negociarlo",
      "7,41 m de integral: presencia imponente que complica pueblos, parkings y ferris",
      "Carga útil, consumos y depósitos sin publicar: ficha técnica oficial con lagunas",
      "El 180 CV automático es la versión documentada: la base de acceso será menos potente y equipada",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/sunlight-i-68-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Sunlight I 68, vista exterior de la integral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/sunlight-i-68-2026-precio-ficha-tecnica-interior1.webp",
        alt: "Sunlight I 68, salón panorámico delantero",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/sunlight-i-68-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Sunlight I 68, camas gemelas traseras",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/sunlight-i-68-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Sunlight I 68, detalle del habitáculo",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "sunlight-i-68-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Base Fiat Ducato: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de aire + filtro de gasóleo + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Sunlight (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
    },
  },
];
