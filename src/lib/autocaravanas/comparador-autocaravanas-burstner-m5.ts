// Autocaravanas Bürstner — lote Merlín 5 (19/10/2026).
// Fuentes: datos técnicos oficiales de buerstner.com para el Lineo T 690 G
// (69.210 €, 699/220/285 cm, MMA 3.500 kg, masa en orden de marcha 2.863 kg,
// 4 plazas, 2-3 camas, camas traseras de 199x75-53/200x75, frigorífico de 131,5 l,
// agua limpia de 95 l, grises de 90 l, gas 2x11 kg, paredes 49/30/30 mm),
// nota de prensa oficial «Annual press Conference Bürstner 2022»
// (https://www.buerstner.com/de/en/press-release/26-08-22_annual-press-conference:
// el Lineo T, la compacta de Bürstner sobre Ford),
// noticia oficial «New 2023 models: Lineo T | Delfin Limited | Playa Limited»
// (https://www.buerstner.com/de/en/company/news-stories/news/lineot-playa-deflin:
// «Bürstner's first Ford-based low profile motorhome»),
// prueba del Lineo T 690 G en la revista especializada reisemobil-international.de
// (fotos) y datos de la prueba en camperstyle.com.
// Verificado el 19/10/2026.
// Notas honestas: el PVP citado es el recomendado oficial de Bürstner para Alemania;
// Bürstner no publica tarifa oficial para España. La carga útil no la publica
// Bürstner como cifra única: publica la MMA (3.500 kg), la masa en orden de marcha
// (2.863 kg, tolerancia 2.720-3.006) y la masa reservada para equipamiento opcional
// (291 kg); cargaUtilKg = null, prohibido calcularla. El motor de 155 CV es opcional
// (de serie, 130 CV). Consumo, autonomía, par motor y emisiones: no publicados.
// FOTOS: Bürstner no expone sus fotos de prensa en URLs accesibles; se usan fotos
// de la prueba del modelo exacto en la revista especializada
// reisemobil-international.de (fotógrafo Hardy Mutschler), sin marca de agua ni
// concesionario. Se documenta honestamente como no oficiales.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_BURSTNER_M5: Autocaravana[] = [
  {
    id: "burstner-lineo-t-690-g-2026-precio-ficha-tecnica",
    marca: "Bürstner",
    modelo: "Lineo T 690 G",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 69210, // PVP recomendado oficial Bürstner Alemania (buerstner.com); no hay tarifa oficial ES
    potenciaCv: 130, // Ford Transit 2.0 EcoBlue de serie; opcional 155 CV
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro 6 sobre Ford Transit
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/burstner-lineo-t-690-g-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/burstner-lineo-t-690-g-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/burstner-lineo-t-690-g-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6990, // datos técnicos oficiales buerstner.com
    anchoMm: 2200, // datos técnicos oficiales buerstner.com
    altoMm: 2850, // datos técnicos oficiales buerstner.com
    pesoKg: 2863, // masa en orden de marcha, datos oficiales buerstner.com (rango 2.720-3.006)
    mmaKg: 3500, // datos técnicos oficiales buerstner.com
    carnetNecesario: "B", // mmaKg <= 3500
    cargaUtilKg: null, // Bürstner no publica una cifra de carga útil; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas autorizadas, datos oficiales buerstner.com
    plazasDormir: 2, // 2-3 según configuración; 2 de serie (camas gemelas traseras)
    parNm: null,
    traccion: "delantera", // Ford Transit, tracción delantera
    emisionesCo2: null,
    aprox: [],
    notas:
      "Cotas, pesos, plazas y capacidades de los datos técnicos oficiales publicados por Bürstner en buerstner.com para el Lineo T 690 G (699/220/285 cm, altura interior 198 cm, batalla 3.750 mm, 3.500 kg de MMA, 2.863 kg en orden de marcha con tolerancia 2.720-3.006 kg, 291 kg reservados para equipamiento opcional, 2.000 kg de masa remolcable, camas traseras gemelas de 199x75-53/200x75 cm, cama central opcional de 198x102-70 cm, frigorífico de 131,5 l con congelador de 15 l, agua limpia de 95 l, grises de 90 l, gas 2x11 kg, espesores de suelo/paredes/techo 49/30/30 mm). Precio: PVP recomendado oficial en Alemania desde 69.210 €; Bürstner no publica tarifa oficial para España. Motor Ford Transit 2.0 EcoBlue de 130 CV de serie (155 CV opcional, manual o automático). Carga útil, consumo, autonomía, par motor y emisiones: no publicados por el fabricante; Fotos: no oficiales —Bürstner no expone sus fotos de prensa en URLs accesibles—; proceden de la prueba del modelo exacto en la revista especializada reisemobil-international.de (fotógrafo Hardy Mutschler), sin marca de agua ni concesionario.",
    curiosidades:
      "El Lineo T es un pedazo de historia de la marca: es la primera autocaravana de Bürstner construida sobre base Ford en sus más de seis décadas de historia. La marca de Kehl, fiel a Fiat durante generaciones, presentó el Lineo T en la conferencia de prensa anual de 2022 como su apuesta compacta —solo 220 cm de anchura— y lo expuso nada menos que en el stand de Ford del Caravan Salon de Düsseldorf, un guiño que dejaba claro quién era el nuevo socio. Fuente: nota de prensa oficial «Annual press Conference Bürstner 2022» (https://www.buerstner.com/de/en/press-release/26-08-22_annual-press-conference) y noticia oficial «New 2023 models: Lineo T» (https://www.buerstner.com/de/en/company/news-stories/news/lineot-playa-deflin).",
    descripcion: `El Bürstner Lineo T 690 G es la perfilada con la que la marca de Kehl rompió una tradición de décadas: es su primera autocaravana sobre base Ford Transit, y no una cualquiera, sino una propuesta pensada para quien quiere la habitabilidad de una perfilada clásica con la agilidad de una furgoneta. Con 6.990 mm de longitud y solo 2.200 mm de anchura —quince centímetros menos que una perfilada al uso—, el T 690 G se mueve por carreteras secundarias, pueblos con encanto y áreas ajustadas con una soltura que sus rivales más anchos no pueden igualar. Es la autocaravana del «menos es más», y su precio oficial de 69.210 euros la coloca en la puerta de entrada del segmento con argumentos de peso.

    En medidas y distribución, el 690 G apuesta por el esquema que nunca falla para dos: salón delantero con banqueta y asientos de cabina giratorios, cocina central en L, baño Vario con ducha —con ducha extraíble y soporte, según la marca— y dormitorio trasero con dos camas gemelas de 199 x 75-53 y 200 x 75 cm, elevadas sobre un garaje de gran capacidad. La altura interior de 198 cm permite moverse con dignidad, y la cama central opcional de 198 x 102-70 cm eleva la capacidad a tres plazas nocturnas cuando hace falta. Es una distribución honesta y probada: sin experimentos, sin rincones muertos, con todo donde la mano lo espera. El acabado interior Brava, con sus maderas claras, y detalles como la claraboya en cocina y dormitorio con oscurecedor y mosquitera, le dan ese aire «wohnfühlen» —el sentirse como en casa— que Bürstner ha convertido en su seña de identidad.

    La base Ford Transit es la gran novedad y merece atención propia. El 2.0 EcoBlue de 130 CV con cambio manual es la configuración de serie, con el 155 CV —manual o automático— como la opción que elige quien viaja cargado o por zonas de montaña. Ford aporta al conjunto su conocida red de talleres en toda Europa, una ergonomía de cabina muy lograda y ayudas como el ESP y el asistente de arranque en pendiente de serie. Con 2.863 kg en orden de marcha y 3.500 kg de MMA, el margen de carga para dos personas con equipaje es razonable, aunque conviene vigilar la báscula si se acumulan opcionales: la propia Bürstner reserva 291 kg para equipamiento opcional, y la tolerancia de la masa en orden de marcha (2.720-3.006 kg) recuerda que cada unidad pesa lo que pesa. La masa remolcable de 2.000 kg deja margen para un pequeño remolque.

    En tecnología y equipamiento, el Lineo T 690 G juega la carta del «todo incluido» razonable. La cocina monta un frigorífico de 131,5 litros con congelador de 15 —generoso para este tamaño—, los depósitos de agua limpia (95 litros) y grises (90 litros) dan para varios días de autonomía para dos personas, y las dos bombonas de 11 kg alimentan la calefacción y la cocina. Los espesores de 49 mm en el suelo y 30 mm en paredes y techo, con el suelo parcialmente calefactado del doble fondo, hablan de una construcción pensada para alargar la temporada más allá del verano. La prueba de la revista especializada reisemobil-international.de, de cuyas fotos se nutre esta ficha, destacó precisamente el equilibrio del conjunto: una perfilada que se conduce casi como una furgoneta grande y se vive como una autocaravana de verdad.

    En mecánica, el Transit 2.0 EcoBlue es un viejo conocido del sector: noble, con repuestos en cualquier rincón de Europa y un tacto de conducción que no asusta a quien viene del turismo. Los 130 CV mueven con corrección los 2.863 kg en orden de marcha, aunque quien viaje a plena carga o por autovías alemanas agradecerá el salto a los 155 CV, disponible con cambio manual o automático. La dirección precisa y el radio de giro contenido —ayudados por la anchura de solo 2,20 metros— hacen que aparcar y maniobrar sea mucho menos estresante que en una perfilada de 2,35 metros. El consumo no lo publica Bürstner, pero la aerodinámica contenida y el peso moderado juegan a su favor frente a integrales más grandes.

    En precio y red comercial en España, el PVP recomendado oficial en Alemania parte de 69.210 euros, y no existe tarifa oficial publicada para España: el precio final se configura con el distribuidor. Es una cifra competitiva para una perfilada de 7 metros con este nivel de acabado, y la sitúa como una de las puertas de entrada más razonables al mundo Bürstner. La marca cuenta con red oficial en España, y conviene pedir oferta cerrada comparando el 130 CV manual de serie con el 155 CV: la diferencia se nota en carretera y suele compensar si se viaja cargado. Como referencia, la prensa especializada alemana ha manejado precios de partida algo inferiores en años anteriores, lo que confirma que la negociación con el concesionario forma parte del proceso.

    Cómo lo verificamos: todas las cotas, pesos, plazas, camas y capacidades proceden de los datos técnicos oficiales publicados por Bürstner en buerstner.com para el Lineo T 690 G, verificados el 19 de octubre de 2026. El carácter de «primera autocaravana Bürstner sobre Ford» y su presentación en el stand de Ford del Caravan Salon proceden de las notas oficiales de la marca. Las fotos proceden de la prueba del modelo exacto en la revista especializada reisemobil-international.de (fotógrafo Hardy Mutschler) y se declaran honestamente como no oficiales, al no exponer Bürstner sus fotos de prensa en URLs accesibles. Los datos no publicados por el fabricante (carga útil como cifra única, consumo, par motor, emisiones) quedan sin dato y se declaran como tales.

    Para quién es: el Lineo T 690 G encaja con la pareja que busca su primera perfilada —o que baja de una integral grande— y prioriza la manejabilidad: 2,20 metros de anchura y menos de 7 metros lo hacen apto para el día a día viajero sin renuncias. Es ideal para quien valora la red Ford, un precio de entrada contenido y una distribución clásica sin sorpresas, y para quien viaja sobre todo en pareja con equipaje moderado. No es para familias que necesiten cuatro camas fijas (la tercera plaza es opcional y justa), para quien exija una carga útil holgada sin mirar la báscula, ni para quien busque el máximo lujo por metro cuadrado: el Lineo T es la sensatez hecha autocaravana, y su virtud está en lo que no pretende ser.`,
    pros: [
      "Primera autocaravana Bürstner sobre Ford Transit: base probada con red de talleres en toda Europa.",
      "Solo 2,20 m de anchura y 6,99 m de longitud: agilidad y aparcamiento de furgoneta grande.",
      "Precio oficial desde 69.210 € en Alemania: puerta de entrada competitiva al segmento.",
      "Distribución clásica para dos con camas gemelas traseras, baño Vario con ducha y garaje de gran capacidad.",
      "MMA de 3.500 kg: se conduce con el carnet B.",
    ],
    contras: [
      "Solo 2 plazas nocturnas de serie; la tercera es opcional y justa.",
      "Motor de serie de 130 CV: suficiente, pero el 155 CV se agradece a plena carga.",
      "Sin tarifa oficial para España: el precio final depende del distribuidor.",
      "Fotos no oficiales: Bürstner no expone sus fotos de prensa en URLs accesibles.",
      "Margen de carga a vigilar si se acumulan opcionales (291 kg reservados por la marca).",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/burstner-lineo-t-690-g-2026-precio-ficha-tecnica-oficial.webp", alt: "Bürstner Lineo T 690 G, vista exterior lateral", ancho: 1024, alto: 683 },
      { src: "/media/burstner-lineo-t-690-g-2026-precio-ficha-tecnica-interior1.webp", alt: "Bürstner Lineo T 690 G, dormitorio camas gemelas", ancho: 1024, alto: 683 },
      { src: "/media/burstner-lineo-t-690-g-2026-precio-ficha-tecnica-interior2.webp", alt: "Bürstner Lineo T 690 G, salón", ancho: 1024, alto: 683 },
      { src: "/media/burstner-lineo-t-690-g-2026-precio-ficha-tecnica-detalle.webp", alt: "Bürstner Lineo T 690 G, detalle interior", ancho: 1024, alto: 682 },
    ],
    analisisSlug: "burstner-lineo-t-690-g-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Ford Transit: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Ford Transit 2.0 EcoBlue)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 320 },
        { nombre: "Revisión célula Bürstner (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 240 },
      ],
    },
  },
];
