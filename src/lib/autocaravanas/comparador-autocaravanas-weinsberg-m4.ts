// Autocaravanas Weinsberg — lote Merlín 4 (19/10/2026). Fusión de w17 + w18.
// Autocaravanas Weinsberg — lote Merlín 4 (19/10/2026).
// Fuentes: configurador oficial de Weinsberg (PDF generado el 05/12/2025 con los
// datos técnicos del CaraCore 650 MEG 2026, vía destinationmotorhomes.co.uk) +
// carablog.weinsberg.com (blog oficial de la marca) + anuncios coherentes de
// unidades 2025/2026 en caraworld.de y TruckScout24. Verificado el 19/10/2026.
// Notas honestas: Weinsberg no publica PVP base oficial accesible para el 650 MEG
// (los precios vistos son de distribuidores con extras): precioDesde queda sin dato.
// La carga útil no la publica la marca (prohibido calcularla). Consumos y emisiones:
// no publicados → null. Plazas de viaje: el configurador oficial indica 3; algunos
// anuncios de distribuidor indican 2 o 4 según configuración: se adopta el dato
// oficial (3) y se declara la discrepancia.

// Autocaravanas Weinsberg — lote Merlín 4 (19/10/2026).
// Fuentes: documento técnico oficial Weinsberg X-Cursion Van 500 LT (datos del fabricante),
// alpacacamping.de (ficha técnica del modelo), camperstyle.com y outandaboutlive.co.uk
// (pruebas y análisis del modelo). Verificado el 19/10/2026.
// Notas honestas: Weinsberg no publica tarifa oficial para España (precioDesde: null);
// la carga útil no la declara la marca como cifra única (cargaUtilKg: null); el consumo y la
// etiqueta DGT no figuran en la documentación oficial (null). La altura exterior varía según
// fuente (284 cm en el documento técnico oficial, 291 cm en anuncios de distribuidores);
// se usa la cifra oficial.

import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_WEINSBERG_M4: Autocaravana[] = [
  {
    id: "weinsberg-caracore-650-meg-2026-precio-ficha-tecnica",
    marca: "Weinsberg",
    modelo: "CaraCore 650 MEG",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: null, // Weinsberg no publica PVP base oficial; los precios vistos (p. ej. 91.500 €) son de distribuidores para otras versiones/con extras
    potenciaCv: 140, // Fiat Ducato 2.2 de 103 kW de serie; 180 CV opcional
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
    imagen: "/media/weinsberg-caracore-650-meg-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/weinsberg-caracore-650-meg-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/weinsberg-caracore-650-meg-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6990, // configurador oficial Weinsberg (PDF 05/12/2025)
    anchoMm: 2320, // 2.180 mm interior
    altoMm: 2790, // 2.000 mm interior
    pesoKg: null, // masa en orden de marcha oficial 2.928 kg (rango 2.781-3.074 kg, configurador Weinsberg); no es carga útil -> campo vacío
    mmaKg: 3500, // aumento a 3.650 kg posible
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no la publica; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 3, // configurador oficial: 3 personas en circulación (algunos distribuidores anuncian 2 o 4 según configuración)
    plazasDormir: 4, // camas gemelas traseras 2 x 201x87 + cama basculante 193x150
    parNm: null,
    traccion: "delantera", // front-wheel drive en el configurador oficial
    emisionesCo2: null,
    aprox: [],
    notas:
      "Datos técnicos del configurador oficial de Weinsberg para el CaraCore 650 MEG 2026 (PDF generado el 05/12/2025): 6.990 x 2.320 x 2.790 mm, 3.500 kg, masa en orden de marcha 2.928 kg (rango 2.781–3.074), 3 plazas de viaje, 4 de pernocta, batalla 380 cm, Fiat Ducato 140 CV. Camas (2 x 201x87 traseras + basculante 193x150), Truma Combi 6 (+E), frigo 142 l, agua 100 l, grises 95 l y batería 80 Ah verificados en anuncios coherentes de unidades 2025/2026. Weinsberg no publica PVP base oficial: sin precio oficial publicado (el LP de 91.500 € visto en distribuidor corresponde al 650 MF con extras). Plazas de viaje: se adopta el dato oficial (3) frente a anuncios que indican 2 o 4. solo constan precios de concesionarios y portales, que no se usan como oficiales.",
    curiosidades:
      "El CaraCore fue el primer integral de la historia de Weinsberg: la marca, conocida por sus perfiladas asequibles, se estrenó en el segmento de los totalmente carrozados con este modelo, pensado como «el mejor perfilado» por dentro y por fuera. Fuente: blog oficial de Weinsberg (https://carablog.weinsberg.com/der-caracore-moderner-vollintegrierter-fuer-alle-die-mehr-als-einen-ti-wollen/).",
    descripcion: `La Weinsberg CaraCore 650 MEG es la integral compacta de la marca alemana del grupo Knaus Tabbert, y tiene un lugar propio en la historia de la casa: fue el primer vehículo totalmente carrozado —integral de verdad, del paragolpes al capó— que Weinsberg puso en el mercado, como cuenta su blog oficial. La filosofía declarada era ambiciosa y muy Weinsberg a la vez: ofrecer la habitabilidad y la presencia de una integral con el manejo sencillo y la relación precio-equipamiento de una perfilada. El 650 MEG es la versión de 6,99 metros con camas gemelas traseras y cama basculante, el formato más demandado del segmento familiar.

En medidas y habitabilidad, el configurador oficial declara 6.990 mm de largo, 2.320 mm de ancho exterior (2.180 mm interior) y 2.790 mm de alto, con 2.000 mm de altura interior útil: veinte centímetros más baja por fuera que muchas integrales de la competencia, lo que se nota en los puentes, en el consumo y en la estabilidad con viento lateral. La masa máxima es de 3.500 kg —carnet B— con posibilidad de aumento a 3.650 kg, y la masa en orden de marcha oficial es de 2.928 kg con una tolerancia de producción declarada de ±5% (rango 2.781–3.074 kg), un ejercicio de transparencia poco habitual que Weinsberg publica en su configurador. La batalla es de 380 cm, generosa para 6,99 metros, lo que promete un buen aplomo en carretera.

La distribución MEG combina lo mejor de dos mundos: detrás, dos camas gemelas longitudinales de 201 x 87 cm cada una, siempre hechas y con acceso individual; delante, sobre el salón, la cama basculante de 193 x 150 cm que desciende por la noche. Entre medias, salón en L con asientos de cabina giratorios, cocina lateral completa y baño central con ducha separada. Es el esquema que permite viajar en pareja con camas de hotel cada noche y acoger a dos invitados más sin transformar nada: las cuatro plazas de pernocta están siempre disponibles. El garaje bajo las camas gemelas, con trampillas exteriores a ambos lados (80 x 110 cm de boca según distribuidor), traga el equipamiento voluminoso.

En tecnología y equipamiento, la lista del configurador 2026 es extensa y honesta. La calefacción y el agua caliente corren a cargo de la Truma Combi 6, con la variante E (mixta gas+electricidad) disponible; el frigorífico es de 142 litros; el agua limpia es de 100 litros y la grise de 95; la batería del habitáculo, de 80 Ah. El chasis Fiat incluye ESP, Hill Holder, ABS, control de estabilidad del remolque, frenada post-colisión, asistente de viento lateral y ayuda de tracción Traction+ con control de descenso. Los paquetes estructuran la oferta: el Pack Fiat-Weinsberg (llantas de 16'', asientos Captainchair giratorios, volante multifunción), el Styling Pack CaraCore (marco de faros y parrilla en negro brillo, llantas de aleación, adhesivos de diseño), el Smart Pack IV (claraboya de 70 x 50 con iluminación, oscurecedores de parabrisas y laterales, fundas a medida) y el Pack Media (navegador todo en uno, cámara trasera, head-up display). La puerta de célula es la Weinsberg Komfort, con cierre centralizado de una sola llave para todo el vehículo.

En camas y plazas hay un matiz que conviene declarar: el configurador oficial homologa 3 plazas de viaje, mientras que algunos distribuidores anuncian unidades con 2 o 4 cinturones según la configuración elegida. Es una horquilla real del modelo —la cuarta plaza suele ir ligada a opciones de banqueta— y conviene verificarla en la ficha de la unidad concreta antes de firmar. Las plazas para dormir son cuatro sin discusión: las gemelas traseras más la basculante delantera.

Mecánicamente, la base es el Fiat Ducato 2.2 de 140 CV (103 kW) con homologación Euro 6e-bis, disponible con cambio manual o con la automática de 8 velocidades por convertidor de par, la opción que elige la mayoría de compradores de integrales. Quien necesite más músculo tiene el 2.2 de 180 CV, también con automática, y la posibilidad de chasis de 4.000 kg ampliable a 4.400 kg para los que viajan muy cargados —eso sí, a partir de 3.500 kg entra en juego el carnet C1—. El depósito de gasóleo es de 90 litros en las unidades equipadas y la carga de remolque admitida es de 2.000 kg.

En precio y red comercial en España, Weinsberg no publica un PVP base oficial accesible para el 650 MEG, así que el precio queda honestamente sin dato: los 91.500 euros que algún distribuidor anuncia como «LP» corresponden al 650 MF (cama francesa) con un equipamiento concreto, no al MEG base, y mezclarlos sería faltar a la verdad. En España, Weinsberg se vende a través de la red de distribuidores del grupo Knaus Tabbert, con presencia en las principales provincias; como siempre en este segmento, el precio final depende del motor, el cambio y los paquetes, y conviene pedir oferta cerrada por escrito. La garantía es la legal europea más la de estanqueidad de la célula.

Cómo lo verificamos: las dimensiones (6.990 x 2.320 x 2.790 mm, interior 2.180 x 2.000 mm), la MMA (3.500 kg, ampliable a 3.650), la masa en orden de marcha (2.928 kg, rango 2.781–3.074), las plazas de viaje (3), las de pernocta (4), la batalla (380 cm), el motor (Fiat Ducato 140 CV, tracción delantera) y la dotación de chasis proceden del configurador oficial de Weinsberg (PDF generado el 05/12/2025 con datos versión 2025.12.04); las medidas de las camas (2 x 201x87 y basculante 193x150), la Truma Combi 6, el frigorífico de 142 l, los depósitos (100/95 l) y la batería de 80 Ah se verifican en anuncios coherentes de unidades 2025/2026 en caraworld.de y TruckScout24; el dato histórico (primer integral de Weinsberg) procede de su blog oficial. Carga útil, consumos y emisiones: no los publica la marca.

Para quién es: la CaraCore 650 MEG encaja con parejas que quieren estrenarse en el mundo integral sin pagar una premium y sin renunciar a camas gemelas de verdad, y con familias de cuatro que valoran tener las cuatro camas siempre hechas en menos de 7 metros. Su altura contenida (2,79 m) la hace más llevadera que otras integrales en ruta. No es para quien necesite cinco plazas homologadas de viaje —el configurador dice tres y hay que verificar la unidad—, ni para quien busque el máximo lujo interior: el planteamiento Weinsberg es equipamiento inteligente a precio sensato, no maderas nobles ni tapicerías de diseño italiano. Y si se viaja con la célula a tope de extras, vigilar la báscula: con 3.500 kg de MMA y 2.928 kg en orden de marcha, el margen real lo marcan los ocupantes y el equipaje.`,
    pros: [
      "Primer integral de la historia de Weinsberg: estreno de la marca en el segmento con planteamiento de precio sensato",
      "Solo 2,79 m de alto exterior: más ágil y estable que la mayoría de integrales, mejor consumo teórico",
      "Camas gemelas de 201 x 87 siempre hechas más basculante de 193 x 150: cuatro camas sin transformar nada",
      "Transparencia en pesos: masa en orden de marcha con rango de tolerancia publicado en el configurador oficial",
      "Arsenal electrónico del Ducato de serie: ESP, asistente de viento lateral, control de remolque, frenada post-colisión",
    ],
    contras: [
      "3 plazas de viaje según el configurador oficial: verificar los cinturones de la unidad concreta antes de comprar",
      "Sin PVP base oficial publicado: el precio real lo fija cada distribuidor y hay que negociarlo",
      "80 Ah de batería de habitáculo: justos para viajar sin conexión eléctrica si no se amplía",
      "Menos de 7 metros con 4 camas: el baño y la cocina son correctos, no espaciosos",
      "Acabados funcionales de gama de acceso: bien resueltos, pero sin el refinamiento de integrales premium",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/weinsberg-caracore-650-meg-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Weinsberg CaraCore 650 MEG, vista exterior de la integral",
        ancho: 1200,
        alto: 675,
      },
      {
        src: "/media/weinsberg-caracore-650-meg-2026-precio-ficha-tecnica-interior1.webp",
        alt: "Weinsberg CaraCore 650 MEG, salón delantero",
        ancho: 1200,
        alto: 900,
      },
      {
        src: "/media/weinsberg-caracore-650-meg-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Weinsberg CaraCore 650 MEG, camas gemelas traseras",
        ancho: 1200,
        alto: 900,
      },
      {
        src: "/media/weinsberg-caracore-650-meg-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Weinsberg CaraCore 650 MEG, detalle del habitáculo",
        ancho: 1024,
        alto: 683,
      },
    ],
    analisisSlug: "weinsberg-caracore-650-meg-analisis-opinion",
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
          nombre: "Revisión célula Weinsberg (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
    },
  },
  {
    id: "weinsberg-x-cursion-500-lt-2026-precio-ficha-tecnica",
    marca: "Weinsberg",
    modelo: "X-Cursion 500 LT",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Weinsberg no publica PVP oficial para España; null = «no publicado»
    potenciaCv: 150, // 110 kW, VW T6.1 2.0 TDI (documento técnico oficial Weinsberg)
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
    imagen: "/media/weinsberg-x-cursion-500-lt-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/weinsberg-x-cursion-500-lt-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/weinsberg-x-cursion-500-lt-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5880, // documento técnico oficial Weinsberg: 588 cm
    anchoMm: 2160, // documento técnico oficial Weinsberg: 216 cm
    altoMm: 2840, // documento técnico oficial Weinsberg: 284 cm
    pesoKg: null, // masa en orden de marcha oficial 2.595 kg (documento técnico Weinsberg); no es carga útil -> campo vacío
    mmaKg: 3200, // MMA técnica; 3.500 kg opcional (documento técnico oficial)
    carnetNecesario: "B", // mmaKg <= 3500
    cargaUtilKg: null, // la marca no publica una carga útil única; prohibido calcular MMA-MRO
    consumo: null, // no publicado por la marca
    consumoUnidad: null,
    plazas: 4, // documento técnico oficial
    plazasDormir: 4, // 2 de serie + cama deslizante de cabina opcional (fuente: outandaboutlive.co.uk)
    parNm: null,
    traccion: null, // la marca no lo declara en la ficha técnica
    emisionesCo2: null,
    aprox: [],
    notas:
      "Largo, ancho, alto, masa (2.595 kg), MMA (3.200 kg, 3.500 opcional), 4 plazas y 150 CV del documento técnico oficial Weinsberg del X-Cursion Van 500 LT. Techo elevable, baño pivotante (slide-bath), calefacción Truma Combi 4 D, nevera de compresor de 90 l y cocina de 2 fuegos de alpacacamping.de y camperstyle.com. solo constan precios de concesionarios y portales, que no se usan como oficiales.",
    curiosidades:
      "El X-Cursion es el único Weinsberg construido sobre base Volkswagen: es la única autocaravana de la marca con chasis VW T6.1, según la ficha del modelo en alpacacamping.de (https://www.alpacacamping.de/fahrzeuge/en/model/weinsberg-x-cursion-van/).",
    descripcion: `La Weinsberg X-Cursion 500 LT es la propuesta más singular del catálogo de la marca alemana: una perfilada compacta construida sobre el Volkswagen T6.1, algo que ningún otro modelo de Weinsberg puede decir. Presentada en el Caravan Salon de Düsseldorf para la temporada 2023, nació como hermana de la Knaus Tourer CUV —ambas marcas pertenecen al grupo Knaus Tabbert— y desde entonces ocupa un nicho muy concreto: el de quien viene de una furgoneta camper Volkswagen y quiere dar el salto a una autocaravana con baño y ducha sin renunciar a la manejabilidad ni a la imagen Bulli.

Con 5,88 metros de largo y 2,16 metros de ancho, la 500 LT es notablemente estrecha para una perfilada: la mayoría de sus rivales rondan los 2,30 metros. Esa esbeltez se nota al volante, en los pueblos con calles estrechas y al aparcar, y es precisamente su principal argumento comercial. La altura oficial es de 2,84 metros, aunque algunos distribuidores anuncian 2,91 metros con el techo elevable o los extras de techo; conviene verificar la cifra exacta de la unidad concreta antes de preocuparse por un garaje o un parking con límite de altura.

El motor es el 2.0 TDI de Volkswagen con 110 kW (150 CV), disponible con cambio manual de seis velocidades o automático DSG. La masa en orden de marcha del modelo básico es de 2.595 kg y la MMA técnica es de 3.200 kg, ampliable de forma opcional a 3.500 kg. Con cualquiera de las dos cifras se conduce con el carnet B, lo que la mantiene accesible para el gran público. Weinsberg no publica una cifra única de carga útil, así que no la incluimos: cada unidad, según su equipamiento opcional, tendrá la suya y debe consultarse en la ficha de la unidad concreta con el distribuidor.

La distribución LT es la que diferencia a esta versión de la 500 MQ. En la parte trasera se sitúa el cuarto de baño con un concepto de «slide-bath»: un tabique pivotante que separa la zona de ducha de la zona del inodoro, con un lavabo abatible colocado sobre el WC. Delante del baño hay un salón con dos banquetas longitudinales y mesa central; girando los asientos de la cabina, el fabricante asegura que pueden sentarse hasta seis personas alrededor de la mesa. Las banquetas se convierten en una cama doble, y como opción existe una cama deslizante para la cabina que eleva la capacidad nocturna hasta cuatro plazas. La cocina equipa fregadero, cocina de dos fuegos alimentada por una bombona de 5 kg y una nevera de compresor Thetford de 90 litros. La calefacción es una Truma Combi 4 D alimentada con gasóleo, lo que garantiza confort térmico incluso con temperaturas bajas sin depender del gas para calentar. El depósito de aguas grises es de 58 litros.

Entre el equipamiento destacable de la versión Edition [Pepper] —la más habitual en los anuncios— figuran las llantas de aleación de 17 pulgadas, los faros LED, el control de crucero adaptativo, la cámara de visión trasera, la claraboya panorámica Smart Open Sky y el toldo exterior. El techo elevable, disponible como opción, añade una cama alta y transforma la habitabilidad en parado sin penalizar la altura en marcha más de lo imprescindible.

En cuanto al precio, Weinsberg no publica una tarifa oficial para el mercado español, de modo que no ofrecemos cifra de partida: los portales especializados sitúan el modelo nuevo por encima de los 70.000 euros según equipamiento, pero esa es una referencia de mercado, no un PVP del fabricante. La red comercial de Weinsberg en España opera a través de distribuidores del grupo Knaus Tabbert; el mantenimiento de la base Volkswagen sigue el plan del fabricante (revisiones cada dos años o 40.000 km) y la célula requiere la revisión anual de estanqueidad recomendada por la marca.

Cómo lo verificamos: las dimensiones (588 × 216 × 284 cm), la masa en orden de marcha (2.595 kg), la MMA (3.200 kg, 3.500 opcional), las 4 plazas y los 150 CV proceden del documento técnico oficial de Weinsberg para el X-Cursion Van 500 LT. Los detalles de distribución, el baño pivotante, la Truma Combi 4 D y la nevera de 90 litros se contrastaron con las fichas de alpacacamping.de y los análisis de camperstyle.com y outandaboutlive.co.uk. Todo verificado el 19/10/2026. Lo que la marca no publica —precio oficial en España, carga útil única, consumo y etiqueta DGT— la marca no lo publica y se explica en las notas.

Para quién es: encaja con parejas o familias de hasta cuatro miembros que vienen del mundo camper Volkswagen y quieren una autocaravana de verdad —con baño separado y ducha— sin saltar a los 7 metros ni a los 2,30 de ancho. Es ideal como vehículo de uso casi diario por su tamaño contenido y como compañera de escapadas largas gracias a la calefacción diésel y al equipamiento de la Edition [Pepper]. No encaja, en cambio, con quien necesite cuatro camas fijas sin montajes diarios, con quien busque un garaje trasero grande para bicicletas eléctricas o motos —el «garaje» aquí es un armario vertical alto y estrecho—, ni con quien quiera el precio más bajo del segmento: la base Volkswagen y el posicionamiento de la marca la sitúan por encima de las perfiladas de entrada sobre Fiat.`,
    pros: [
      "Única Weinsberg sobre base Volkswagen T6.1: tacto de conducción y red de servicio VW",
      "Solo 5,88 m de largo y 2,16 m de ancho: manejable en ciudad y carreteras estrechas",
      "Baño con tabique pivotante (slide-bath): ducha e inodoro separados en poco espacio",
      "Calefacción Truma Combi 4 D diésel: autonomía térmica sin depender del gas",
      "Se conduce con carnet B (MMA 3.200 kg, ampliable a 3.500 kg)",
    ],
    contras: [
      "Sin garaje trasero convencional: solo un armario vertical alto y estrecho",
      "Las 4 plazas de noche exigen convertir el salón a diario o pagar la cama de cabina opcional",
      "Precio elevado frente a perfiladas de entrada sobre Fiat con más espacio",
      "La marca no publica tarifa oficial en España: el precio final depende del distribuidor",
      "Anchura de 2,16 m: pasillo y baño más justos que en una perfilada estándar de 2,30 m",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/weinsberg-x-cursion-500-lt-2026-precio-ficha-tecnica-oficial.webp", alt: "Weinsberg X-Cursion 500 LT, vista exterior", ancho: 1024, alto: 768 },
      { src: "/media/weinsberg-x-cursion-500-lt-2026-precio-ficha-tecnica-interior1.webp", alt: "Weinsberg X-Cursion 500 LT, interior", ancho: 1200, alto: 800 },
      { src: "/media/weinsberg-x-cursion-500-lt-2026-precio-ficha-tecnica-interior2.webp", alt: "Weinsberg X-Cursion 500 LT, interior zona delantera", ancho: 1600, alto: 900 },
      { src: "/media/weinsberg-x-cursion-500-lt-2026-precio-ficha-tecnica-detalle.webp", alt: "Weinsberg X-Cursion 500 LT, detalle", ancho: 427, alto: 639 },
    ],
    analisisSlug: "weinsberg-x-cursion-500-lt-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Volkswagen T6.1: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Volkswagen T6.1)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Weinsberg (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
