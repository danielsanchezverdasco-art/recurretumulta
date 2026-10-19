// Autocaravanas Weinsberg — lote Merlín 4 (19/10/2026).
// Fuentes: documento técnico oficial Weinsberg X-Cursion Van 500 LT (datos del fabricante),
// alpacacamping.de (ficha técnica del modelo), camperstyle.com y outandaboutlive.co.uk
// (pruebas y análisis del modelo). Verificado el 19/10/2026.
// Notas honestas: Weinsberg no publica tarifa oficial para España (precioDesde: null);
// la carga útil no la declara la marca como cifra única (cargaUtilKg: null); el consumo y la
// etiqueta DGT no figuran en la documentación oficial (null). La altura exterior varía según
// fuente (284 cm en el documento técnico oficial, 291 cm en anuncios de distribuidores);
// se usa la cifra oficial.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_WEINSBERG_M4: Autocaravana[] = [
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
    pesoKg: 2595, // masa en orden de marcha, modelo básico (documento técnico oficial)
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
      "Largo, ancho, alto, masa (2.595 kg), MMA (3.200 kg, 3.500 opcional), 4 plazas y 150 CV del documento técnico oficial Weinsberg del X-Cursion Van 500 LT. Techo elevable, baño pivotante (slide-bath), calefacción Truma Combi 4 D, nevera de compresor de 90 l y cocina de 2 fuegos de alpacacamping.de y camperstyle.com. Precio: Weinsberg no publica tarifa oficial ES (null). Carga útil, consumo y etiqueta DGT: no publicados (null).",
    curiosidades:
      "El X-Cursion es el único Weinsberg construido sobre base Volkswagen: es la única autocaravana de la marca con chasis VW T6.1, según la ficha del modelo en alpacacamping.de (https://www.alpacacamping.de/fahrzeuge/en/model/weinsberg-x-cursion-van/).",
    descripcion: `La Weinsberg X-Cursion 500 LT es la propuesta más singular del catálogo de la marca alemana: una perfilada compacta construida sobre el Volkswagen T6.1, algo que ningún otro modelo de Weinsberg puede decir. Presentada en el Caravan Salon de Düsseldorf para la temporada 2023, nació como hermana de la Knaus Tourer CUV —ambas marcas pertenecen al grupo Knaus Tabbert— y desde entonces ocupa un nicho muy concreto: el de quien viene de una furgoneta camper Volkswagen y quiere dar el salto a una autocaravana con baño y ducha sin renunciar a la manejabilidad ni a la imagen Bulli.

Con 5,88 metros de largo y 2,16 metros de ancho, la 500 LT es notablemente estrecha para una perfilada: la mayoría de sus rivales rondan los 2,30 metros. Esa esbeltez se nota al volante, en los pueblos con calles estrechas y al aparcar, y es precisamente su principal argumento comercial. La altura oficial es de 2,84 metros, aunque algunos distribuidores anuncian 2,91 metros con el techo elevable o los extras de techo; conviene verificar la cifra exacta de la unidad concreta antes de preocuparse por un garaje o un parking con límite de altura.

El motor es el 2.0 TDI de Volkswagen con 110 kW (150 CV), disponible con cambio manual de seis velocidades o automático DSG. La masa en orden de marcha del modelo básico es de 2.595 kg y la MMA técnica es de 3.200 kg, ampliable de forma opcional a 3.500 kg. Con cualquiera de las dos cifras se conduce con el carnet B, lo que la mantiene accesible para el gran público. Weinsberg no publica una cifra única de carga útil, así que no la incluimos: cada unidad, según su equipamiento opcional, tendrá la suya y debe consultarse en la ficha de la unidad concreta con el distribuidor.

La distribución LT es la que diferencia a esta versión de la 500 MQ. En la parte trasera se sitúa el cuarto de baño con un concepto de «slide-bath»: un tabique pivotante que separa la zona de ducha de la zona del inodoro, con un lavabo abatible colocado sobre el WC. Delante del baño hay un salón con dos banquetas longitudinales y mesa central; girando los asientos de la cabina, el fabricante asegura que pueden sentarse hasta seis personas alrededor de la mesa. Las banquetas se convierten en una cama doble, y como opción existe una cama deslizante para la cabina que eleva la capacidad nocturna hasta cuatro plazas. La cocina equipa fregadero, cocina de dos fuegos alimentada por una bombona de 5 kg y una nevera de compresor Thetford de 90 litros. La calefacción es una Truma Combi 4 D alimentada con gasóleo, lo que garantiza confort térmico incluso con temperaturas bajas sin depender del gas para calentar. El depósito de aguas grises es de 58 litros.

Entre el equipamiento destacable de la versión Edition [Pepper] —la más habitual en los anuncios— figuran las llantas de aleación de 17 pulgadas, los faros LED, el control de crucero adaptativo, la cámara de visión trasera, la claraboya panorámica Smart Open Sky y el toldo exterior. El techo elevable, disponible como opción, añade una cama alta y transforma la habitabilidad en parado sin penalizar la altura en marcha más de lo imprescindible.

En cuanto al precio, Weinsberg no publica una tarifa oficial para el mercado español, de modo que no ofrecemos cifra de partida: los portales especializados sitúan el modelo nuevo por encima de los 70.000 euros según equipamiento, pero esa es una referencia de mercado, no un PVP del fabricante. La red comercial de Weinsberg en España opera a través de distribuidores del grupo Knaus Tabbert; el mantenimiento de la base Volkswagen sigue el plan del fabricante (revisiones cada dos años o 40.000 km) y la célula requiere la revisión anual de estanqueidad recomendada por la marca.

Cómo lo verificamos: las dimensiones (588 × 216 × 284 cm), la masa en orden de marcha (2.595 kg), la MMA (3.200 kg, 3.500 opcional), las 4 plazas y los 150 CV proceden del documento técnico oficial de Weinsberg para el X-Cursion Van 500 LT. Los detalles de distribución, el baño pivotante, la Truma Combi 4 D y la nevera de 90 litros se contrastaron con las fichas de alpacacamping.de y los análisis de camperstyle.com y outandaboutlive.co.uk. Todo verificado el 19/10/2026. Lo que la marca no publica —precio oficial en España, carga útil única, consumo y etiqueta DGT— queda declarado como null y explicado en las notas.

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
      { src: "/media/weinsberg-x-cursion-500-lt-2026-precio-ficha-tecnica-oficial.webp", alt: "Weinsberg X-Cursion 500 LT, vista exterior", ancho: 1200, alto: 1600 },
      { src: "/media/weinsberg-x-cursion-500-lt-2026-precio-ficha-tecnica-interior1.webp", alt: "Weinsberg X-Cursion 500 LT, interior", ancho: 1200, alto: 800 },
      { src: "/media/weinsberg-x-cursion-500-lt-2026-precio-ficha-tecnica-interior2.webp", alt: "Weinsberg X-Cursion 500 LT, interior", ancho: 1536, alto: 1025 },
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
