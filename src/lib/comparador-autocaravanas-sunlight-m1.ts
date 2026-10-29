// Autocaravanas Sunlight — lote Merlín 1 (18/10/2026). Corrección (b)(c)(d) 22:15 — textos lote 3.
// F9 (19/10/2026): fotos oficiales (T 68: 1 ext + 2 int; A 70: 1 ext + 2 int; Cliff 640: 1 ext + 2 int) + curiosidades.
// T 68: datos actualizados a la página oficial vigente (masa 3.007 kg, horquilla 2.857-3.157; «Schlafplätze 2 + 3»).
// Datos verificados: sunlight.de (web oficial). T 68: 741/232/293 cm, Fiat Ducato 2.2 140 CV,
// masa en orden de marcha oficial 2.992 kg (horquilla 2.842-3.142); la marca no publica en la
// página accesible las plazas para dormir: plazasDormir sin dato.
// A 70: página oficial revisada el 18/10 —«Schlafplätze, 6», «Zugelassene Sitzplätze: 5»,
// 726/232/314 cm, Citroën Jumper 2.2 140 CV, masa 3.008 kg (2.858-3.158), PVP actual «ab € 65.299»
// (Alemania, precio recomendado sin compromiso): precioDesde en "aprox" con «precio de tarifa en
// Alemania». Corrección: plazas 6 → 5 (oficial) y precio 66.799 → 65.299 (oficial vigente).
// Cliff 640 Adventure: página oficial sunlight.de/es —60.990 € PVP España publicado—,
// 6360 mm, 2 plazas para dormir de serie (4 con cama central opcional o techo elevable),
// MMA ampliable a 4.250 kg en opción. Carga útil calculada (572 kg) → null (prohibido calcular;
// Sunlight publica 218 kg de equipamiento opcional máximo, que no es carga útil).
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_SUNLIGHT_M1: Autocaravana[] = [
  {
    id: "sunlight-t-68-2026-precio-ficha-tecnica",
    marca: "Sunlight",
    modelo: "T 68",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 69499, // PVP recomendado en Alemania del T 68 Adventure, web oficial Sunlight (oct. 2026); la marca no publica PVP específico para España
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
    imagen: "/media/sunlight-t-68-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/sunlight-t-68-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/sunlight-t-68-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7410,
    anchoMm: 2320,
    altoMm: 2930,
    pesoKg: 3007, // masa en orden de marcha según sunlight.de (horquilla oficial 2.857-3.157, modelo 2026)
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil del modelo
    consumo: null,
    consumoUnidad: null,
    plazas: 5,
    plazasDormir: 5, // oficial sunlight.de («Schlafplätze 2 + 3»)
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde", "etiquetaDgt"],
    pros: [
      "Distribución de camas gemelas sobre un garaje pasante altísimo: el dormitorio trasero más práctico del segmento",
      "Versión Adventure Edition con estética negra y llantas de aleación: la perfilada con más carácter joven",
      "Cama basculante eléctrica sobre el salón de 1,95 x 1,40 m: plaza extra digna, no un apaño",
      "Zona de cocina con horno y frigorífico grande con congelador aparte: nivel de integral",
      "Chasis ligero con MMA de 3.500 kg: se conduce con el carnet B",
    ],
    contras: [
      "Mide 7,41 m: en campings de parcela pequeña y en pueblos con encanto se sufre",
      "El acabado Adventure es vistoso por fuera, pero dentro los materiales son los más sencillos del grupo Hymer",
      "Aislamiento pensado para tres estaciones: en invierno de verdad se echa en falta más calefacción",
      "La ducha separada es cómoda, pero el WC queda al otro lado del pasillo: de noche, paseo obligado",
      "Sin tarifa oficial para España: el importe final depende de cada punto de venta",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/sunlight-t-68-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Sunlight T 68 Adventure, vista exterior oficial",
        ancho: 1200,
        alto: 1200,
      },
      {
        src: "/media/sunlight-t-68-2026-precio-ficha-tecnica-oficial-interior.webp",
        alt: "Interior del Sunlight T 68 Adventure, salón visto de delante hacia atrás (foto oficial)",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/sunlight-t-68-2026-precio-ficha-tecnica-oficial-interior2.webp",
        alt: "Detalle del armario bajo la cama del Sunlight T 68 Adventure (foto oficial)",
        ancho: 1000,
        alto: 1500,
      },
    ],
    descripcion: `La Sunlight T 68 Adventure es la perfilada con la que la marca joven del grupo Hymer se presenta a los que compran su primera autocaravana grande sin querer un vehículo con estética de jubilado: llantas de aleación, detalles en negro, tapicerías con carácter y 7,41 metros de perfilada familiar con camas gemelas traseras. Sunlight viste de Adventure Edition lo que en otras marcas sería una perfilada generalista más, y la fórmula funciona: la T 68 es una de las perfiladas de 7,4 metros más reconocibles del segmento de acceso. No compite por lujo interior ni por equipamiento extremo; compite por imagen, distribución y precio contenido dentro del paraguas Hymer.

Los datos proceden de la página oficial del modelo en sunlight.de, revisada el 18/10/2026. La T 68 mide 7,41 m de largo, 2,32 m de ancho y 2,93 m de alto, con una MMA de 3.500 kg que permite conducirla con el carnet B. La base es el Fiat Ducato 2.2 de 140 CV con cambio manual y tracción delantera, la mecánica que montan la mayoría de las perfiladas europeas de este tamaño. La masa en orden de marcha oficial es de 3.007 kg, dentro de una horquilla de 2.857 a 3.157 kg según equipamiento —Sunlight pesa cada unidad al final de la línea e informa del resultado al concesionario—, y la marca no publica la carga útil como tal, así que la ficha muestra las cifras oficiales sin calcular nada. Las plazas para dormir oficiales son 5 («Schlafplätze 2 + 3»).

El dormitorio trasero es el punto fuerte: camas gemelas sobre un garaje pasante de gran altura, el esquema que permite a cada ocupante tener su cama, su mesilla y su acceso individual sin molestar al otro, con todo el material deportivo debajo sin invadir el salón. Sobre el salón, la cama basculante eléctrica de 195 × 140 cm suma plazas dignas para invitados o niños mayores, que de día desaparece y deja un salón diáfano. La cocina juega en la liga de las integrales, con horno y frigorífico grande con congelador separado, un punto que las familias agradecen en viajes de dos semanas. La ducha es independiente, aunque el WC queda al otro lado del pasillo y de noche toca cruzar: son los compromisos de una distribución familiar en 7,4 metros.

La Adventure Edition es más que una pegatina: llantas de aleación, gráficos específicos, tapicería propia y detalles en negro por fuera y por dentro. Pero conviene decirlo claro: los materiales interiores son los más sencillos del grupo Hymer y el aislamiento está pensado para tres estaciones; en invierno serio se echa en falta más calefacción, así que quien planee esquiar debería mirar otras gamas. Con 7,41 metros, en carretera se mueve con soltura, pero en campings de parcela pequeña y en pueblos con encanto conviene asumir que no es un vehículo ágil: la longitud se nota al aparcar y al girar.

En precio, Sunlight no publica tarifa para España y el importe final depende de cada punto de venta: no hay PVP oficial que dar. Sus rivales son las perfiladas familiares de 7,2 a 7,5 metros de las generalistas europeas, frente a las que la T 68 compite con estética joven y camas gemelas, no con refinamiento interior. Es para parejas jóvenes o familias que se inician, que quieren una perfilada grande con imagen actual y dormitorio práctico, y que priorizan el precio contenido dentro del grupo Hymer. No es para quien viaja en invierno de verdad ni para quien busca materiales nobles: es una autocaravana honesta de gama de acceso con mucha imagen. Cómo lo verificamos: las medidas (7,41 × 2,32 × 2,93 m), el motor Fiat Ducato 2.2 de 140 CV, la MMA de 3.500 kg, la masa en orden de marcha de 3.007 kg con su horquilla oficial, las 5 plazas para dormir («2 + 3»), las camas gemelas traseras y la cama basculante de 195 × 140 cm proceden de la página oficial del modelo en sunlight.de, revisada el 19/10/2026; la marca no publica la carga útil del modelo, por eso ese campo va sin dato; Sunlight no publica tarifa para España, por eso no hay precio. El veredicto es que es la perfilada de imagen joven más redonda del segmento de acceso: distribución familiar bien resuelta y estética Adventure que la distingue, a cambio de materiales sencillos y un aislamiento de tres estaciones que hay que asumir con realismo.

Un detalle que distingue a la T 68 dentro de su franja es la coherencia del conjunto: no intenta ser lo que no es. No hay pantallas táctiles gigantes ni domótica de relumbrón; hay una célula bien distribuida, una mecánica probada y una estética que envejece bien. Para el comprador primerizo, esa honestidad es una virtud: menos sistemas complejos significan menos averías y un mantenimiento más barato a lo largo de los años. Y para el que viene de una camper, el salto a 7,41 metros con garaje pasante se nota desde el primer viaje largo.`,
    analisisSlug: "sunlight-t-68-2026-analisis-opinion",
    curiosidades:
      "Sunlight pesa cada T 68 al salir de la línea de producción y comunica el peso real al concesionario, dentro de una horquilla oficial de 2.857 a 3.157 kg: en esta marca el peso declarado no es una estimación, es una medición por unidad. Fuente: https://www.sunlight.de/en-int/models/motorhomes/low-profile-motorhomes-adventure/t-68-adventure/",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato 2.2: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Fiat)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Sunlight (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Sunlight",
    },
    euroncap: null,
    notas:
      "Plazas para dormir: 5 oficiales («Schlafplätze 2 + 3» en sunlight.de). La marca no publica la carga útil del T 68: ese campo va sin dato. Precio orientativo: 69.499 € es el PVP recomendado en Alemania del T 68 Adventure publicado en la web oficial de Sunlight (octubre de 2026); la marca no publica un PVP específico para España de este modelo, así que la cifra va marcada como aproximada. La etiqueta ambiental DGT «C» es una inferencia editorial (diésel Euro 6), no un dato del fabricante: dato no oficial · en revisión.",
    fuenteNombre: "Sunlight (web oficial)",
    fuenteUrl:
      "https://www.sunlight.de/en-int/models/motorhomes/low-profile-motorhomes-adventure/t-68-adventure/",
  },
  {
    id: "sunlight-a-70-2026-precio-ficha-tecnica",
    marca: "Sunlight",
    modelo: "A 70",
    tipo: "capuchina",
    categoria: "Autocaravana",
    precioDesde: 65299,
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
    imagen: "/media/sunlight-a-70-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/sunlight-a-70-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/sunlight-a-70-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7260,
    anchoMm: 2320,
    altoMm: 3140,
    pesoKg: 3008, // masa en orden de marcha según sunlight.de (horquilla oficial 2.858-3.158)
    mmaKg: 3500, // ampliación opcional a 3.650 kg
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil del modelo
    consumo: null,
    consumoUnidad: null,
    plazas: 5, // oficial («Zugelassene Sitzplätze: 5»)
    plazasDormir: 6, // oficial («Schlafplätze, 6»)
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde", "etiquetaDgt"],
    pros: [
      "Dormir seis por el precio de una perfilada media: la fórmula familiar más económica del catálogo",
      "La cama sobre la cabina no se recoge nunca: los niños la dejan hecha toda la semana",
      "Mesa de comedor para toda la familia: desayunos sin turnos ni taburetes plegables",
      "Mecánica Citroën Jumper emparentada con la Ducato: mantenimiento en cualquier taller",
      "Garantía de estanqueidad de 7 años y ampliación de MMA a 3.650 kg en opción: margen para viajar cargado",
    ],
    contras: [
      "La chepa aerodinámica se paga en el surtidor: gasta más que una perfilada equivalente",
      "Tres metros catorce de altura total: ojo con ramas bajas, puentes y techados",
      "Duermen seis pero las plazas de viaje son cinco: no todos los que duermen pueden viajar",
      "Llena de gente, el peso máximo obliga a elegir bien qué se sube a bordo",
      "La tarifa base es de Alemania: el importador español suma portes, matriculación e impuestos",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/sunlight-a-70-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Sunlight A 70, vista exterior oficial con capuchina",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/sunlight-a-70-2026-precio-ficha-tecnica-oficial-interior.webp",
        alt: "Interior del Sunlight A 70, salón visto de delante hacia atrás (foto oficial)",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/sunlight-a-70-2026-precio-ficha-tecnica-oficial-interior2.webp",
        alt: "Vista panorámica 360° del interior del Sunlight A 70: cocina, baño y cama (foto oficial)",
        ancho: 1200,
        alto: 600,
      },
    ],
    descripcion: `Seis camas por el precio de una perfilada media: el Sunlight A 70 no disimula su propuesta, la pone en el escaparate. La capuchina es el formato que más plazas de noche da por euro en el caravaning europeo, y este A 70 la lleva a su expresión más económica dentro de las marcas generalistas: 7,26 metros, seis plazas oficiales para dormir y un precio publicado en Alemania que parte de 65.299 €. Sunlight, la marca joven del grupo Hymer, lo plantea sin complejos como lo que es: la herramienta para que una familia numerosa duerma junta sin hipotecarse. Quien busque refinamiento o discreción aerodinámica que mire a otro lado; aquí el argumento es la capacidad por euro.

Los datos proceden de la página oficial del modelo en sunlight.de, revisada el 18/10/2026. El A 70 mide 7,26 m de largo, 2,32 m de ancho y 3,14 m de alto: una presencia considerable cuya chepa aerodinámica se paga en el surtidor frente a una perfilada equivalente, y cuyos 3,14 metros obligan a vigilar ramas bajas, puentes y techados de gasolinera. A cambio, la altura interior y la sensación de amplitud son las de una capuchina de verdad. La base puede ser Citroën Jumper o Fiat Ducato, ambos con el 2.2 de 140 CV —mecánicas hermanas con mantenimiento en cualquier taller—, tracción delantera y cambio manual, con 3.500 kg de MMA que permiten el carnet B y una ampliación opcional a 3.650 kg para quien viaje cargado. La masa en orden de marcha oficial es de 3.008 kg, dentro de una horquilla de 2.858 a 3.158 kg, y la marca no publica la carga útil como tal.

La noche se organiza en tres camas: la de la capuchina, de 210 × 160 cm, que no se recoge nunca —los niños la dejan hecha toda la semana—; la trasera, de 210 × 150-135 cm; y una cama central opcional de 185 × 100 cm para llegar a las seis plazas. Y aquí hay que leer la letra pequeña con atención: las plazas de viaje oficiales son cinco, no seis. Duermen seis pero viajan cinco, así que la sexta plaza sirve para la familia que pernocta junta pero se desplaza con un miembro menos o en dos vehículos. No es un defecto, es el formato capuchina familiar llevado al límite, pero conviene tenerlo claro antes de imaginar a seis personas viajando a bordo.

La dotación de serie es honesta y de enfoque familiar: frigorífico grande de 156 litros con congelador de 29, cocina de dos fuegos, depósito de agua limpia de 122 litros, calefacción Truma Combi 6 a gas, batería de 95 Ah y una garantía de estanqueidad de 7 años que está por encima de la media del segmento. Los anclajes Isofix para dos plazas y las redes de seguridad de la capuchina confirman el público objetivo. En precio, la web oficial publica un «ab 65.299 €» como precio recomendado sin compromiso calculado sobre las tarifas alemanas —la propia marca advierte de que en otros países el importe varía por impuestos y tasas—, así que es tarifa alemana y va marcado como aproximado: en España el importador suma portes, matriculación e impuestos.

Sus rivales son las capuchinas familiares de las generalistas europeas, frente a las que el A 70 compite con el precio más agresivo para seis camas. Es para familias numerosas con presupuesto ajustado que necesitan dormir seis sin hipotecarse, que aceptan la aerodinámica de la chepa y que viajan con la casa a cuestas. No es para quien necesita seis plazas de viaje —son cinco— ni para quien busca refinamiento: aquí el argumento es la capacidad por euro y lo demás es secundario. Cómo lo verificamos: las medidas (726 × 232 × 314 cm), las 5 plazas de viaje, las 6 para dormir, el motor de 140 CV, la masa de 3.008 kg con su horquilla, la ampliación a 3.650 kg, las medidas de las tres camas, el frigorífico de 156 litros y la garantía de 7 años proceden de la página oficial del modelo en sunlight.de, revisada el 18/10/2026; el precio de 65.299 € es el «ab» vigente publicado por la marca para Alemania y va marcado como tarifa alemana porque en España el precio lo fija el importador. El veredicto es que no hay fórmula más económica para dormir seis en el catálogo generalista: seis camas reales por precio de perfilada media, a cambio de cinco plazas de viaje, una aerodinámica honesta y unos acabados que recuerdan en cada detalle dónde está el ahorro.

Un aspecto práctico que conviene valorar es la red: al pertenecer al grupo Hymer, la A 70 se beneficia de una de las redes de servicio más densas de Europa, con concesionarios en casi todos los países y recambios garantizados durante años. Para una familia que viaja con niños, saber que cualquier avería en ruta tiene un taller cercano no es un detalle menor. Y en reventa, las capuchinas familiares de seis camas mantienen bien su valor porque la demanda de familias numerosas es constante y la oferta de este formato, limitada.`,
    analisisSlug: "sunlight-a-70-2026-analisis-opinion",
    curiosidades:
      "El A 70 incluye de serie 7 años de garantía de estanqueidad, una cobertura por encima de la media de las capuchinas generalistas y una de las bazas silenciosas de Sunlight dentro del grupo Hymer. Fuente: https://www.sunlight.de/modelle/reisemobile/alkoven/a-70/",
    planMantenimiento: {
      intervalo:
        "Citroën Jumper: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Citroën)",
      revisiones: [
        {
          nombre: "Revisión Citroën Jumper (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Sunlight (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Citroën Jumper + recomendaciones Sunlight",
    },
    euroncap: null,
    notas:
      "«precio de tarifa en Alemania»: 65.299 € es el PVP recomendado sin compromiso publicado por Sunlight para Alemania (la marca advierte de que en otros países varía por impuestos y tasas); en España el precio lo fija el importador. La marca no publica la carga útil del modelo. La etiqueta ambiental DGT «C» es una inferencia editorial (diésel Euro 6), no un dato del fabricante: dato no oficial · en revisión.",
    fuenteNombre: "Sunlight (web oficial)",
    fuenteUrl: "https://www.sunlight.de/modelle/reisemobile/alkoven/a-70/",
  },
  {
    id: "sunlight-cliff-640-2026-precio-ficha-tecnica",
    marca: "Sunlight",
    modelo: "Cliff 640 Adventure",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: 60990, // precio oficial publicado por Sunlight para España (sunlight.de/es)
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
    imagen: "/media/sunlight-cliff-640-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/sunlight-cliff-640-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/sunlight-cliff-640-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6360,
    anchoMm: 2050,
    altoMm: 2610, // 2.810 mm con el techo elevable opcional
    pesoKg: 2928, // masa en orden de marcha según sunlight.de (horquilla oficial 2.782-3.074 kg según equipamiento)
    mmaKg: 3500, // ampliable opcionalmente a 4.250 kg de fábrica
    carnetNecesario: "B",
    cargaUtilKg: null, // era calculada (3.500 − 2.928): prohibido calcular; Sunlight publica 218 kg de equipamiento opcional máximo, que no es carga útil
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 2, // 2 camas de serie; 4 con cama central opcional o techo elevable
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["etiquetaDgt"],
    pros: [
      "Camas gemelas traseras con acceso individual: no hay que hacer ni deshacer la cama cada día, ventaja real frente a las transversales",
      "Garaje trasero de gran volumen con 4 anillas de sujeción: admite bicis y material deportivo (pack Adventure)",
      "MMA ampliable a 4.250 kg como opción de fábrica: resuelve el problema de carga que tienen casi todos los camper de 6,36 m en 3,5 t",
      "Calefacción diésel opcional Combi 4 además de la de gas de serie: permite acampar en invierno sin depender de bombonas",
      "Precio de partida oficial publicado (60.990 € en España): poco común y competitivo para un camper alemán de 6,36 m con 4 plazas",
    ],
    contras: [
      "Solo 2 camas de serie: para dormir 4 hay que pagar la cama central opcional o el techo elevable, que además eleva la altura a 2,81 m",
      "El peso en orden de marcha ya parte de 2.928 kg (hasta 3.074 con opciones): con la MMA de 3.500 kg queda poca carga útil real sin la ampliación a 4.250 kg",
      "Baño compacto con ducha integrada en la misma cabina del inodoro cassette: no hay ducha separada como en rivales franceses",
      "Cambio manual de 6 marchas de serie y automático no publicado en la ficha oficial española, frente a competidores que lo ofrecen de fábrica",
      "Nevera de compresor de 84 l algo justa para 4 personas en viajes largos; la cocina es de solo 2 fuegos a gas",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/sunlight-cliff-640-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Sunlight Cliff 640 Adventure, vista exterior oficial",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/sunlight-cliff-640-2026-precio-ficha-tecnica-oficial-interior.webp",
        alt: "Interior del Sunlight Cliff 640 Adventure, salón visto de delante hacia atrás (foto oficial)",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/sunlight-cliff-640-2026-precio-ficha-tecnica-oficial-interior2.webp",
        alt: "Detalle de la cocina del Sunlight Cliff 640 Adventure (foto oficial)",
        ancho: 1200,
        alto: 1798,
      },
    ],
    descripcion: `Hay un mérito del Sunlight Cliff 640 Adventure que no tiene que ver con cómo duerme ni con cómo anda: publica su precio en España. 60.990 €, negro sobre blanco en la web oficial española de la marca, una transparencia que en este sector es casi una excentricidad y que permite empezar el análisis por donde hay que empezarlo, por lo que cuesta. A partir de ahí, lo que se encuentra es un camper alemán de 6,36 metros sobre Fiat Ducato 2.2 de 140 CV, con cuatro plazas de viaje y dos camas de serie, dentro de la gama Adventure de Sunlight, la marca joven del grupo Hymer. Su baza no es el lujo: es la combinación de camas gemelas traseras y precio publicado.

La distribución es el argumento central: camas gemelas en la parte trasera con acceso individual para cada ocupante, el formato que elimina el ritual diario de hacer y deshacer la cama y que en un furgón de 6,36 metros es un lujo de verdad. Entre ambas camas queda un garaje trasero de gran volumen con cuatro anillas de sujeción para bicicletas y material deportivo. Es el planteamiento ideal para parejas que viajan con equipamiento voluminoso y que ponen dormir en cama hecha por encima de todo lo demás. Las medidas —6,36 m de largo, 2,05 m de ancho y 2,61 m de alto, 2,81 m con el techo elevable opcional— lo mantienen en el terreno de lo manejable: carnet B, aparcamiento donde una autocaravana no entra y consumo de furgón grande, no de capuchina.

Los datos proceden de la página oficial del modelo en sunlight.de/es, revisada el 18/10/2026. La mecánica es la estándar del segmento: Ducato 2.2 de 140 CV con cambio manual de seis marchas y tracción delantera. Y aquí conviene hablar del peso sin rodeos: la masa en orden de marcha oficial parte de 2.928 kg y puede alcanzar los 3.074 kg con opciones, dentro de una horquilla publicada por la marca. Con la MMA de 3.500 kg, el margen para cuatro ocupantes, agua y equipaje es justo, y la propia Sunlight lo reconoce ofreciendo como opción de fábrica la ampliación de la MMA a 4.250 kg, que resuelve el problema de raíz a cambio de sacarse el carnet C1. La marca no publica la carga útil como tal —los 218 kg que aparecen en su documentación son la masa máxima de equipamiento opcional, un concepto distinto—, así que la ficha muestra las cifras oficiales sin calcular.

La vida a bordo es la de un camper alemán honesto: calefacción de gas de serie, con la Truma Combi 4 diésel en opción para el invierno sin depender de bombonas; nevera de compresor de 84 litros —justa para cuatro en viajes largos—; cocina de dos fuegos; y baño compacto con la ducha integrada en la cabina del WC de cassette, sin la ducha separada que ofrecen algunos rivales franceses. Para dormir cuatro hay que pasar por caja: la cama central opcional o el techo elevable —que eleva la altura a 2,81 m— son opcionales de pago, y conviene presupuestarlos desde el principio si la familia es de cuatro.

En precio y rivales, los 60.990 € oficiales para España lo sitúan entre las opciones más competitivas de los campers alemanes de 6,36 m con cuatro plazas de viaje; sus rivales son los campers franceses e italianos de 6 a 6,4 m, frente a los que el Cliff juega la baza del precio publicado y de las camas gemelas. Es para parejas viajeras que quieren un camper manejable con camas siempre hechas, que cargan bicicletas o material deportivo y que valoran saber el precio antes de pisar el concesionario. No es para familias de cuatro sin pasar por los opcionales de cama, ni para quien viaja siempre a plena carga sin querer ampliar la MMA. Cómo lo verificamos: el precio de 60.990 € para España, las medidas, el motor, la horquilla de masa en orden de marcha y la ampliación opcional a 4.250 kg proceden de la página oficial del modelo en sunlight.de/es, revisada el 18/10/2026; la carga útil no consta porque la marca no la publica. El veredicto es que es el camper alemán con mejor relación transparencia-precio de su tamaño: 60.990 € publicados y camas gemelas de verdad, a cambio de un margen de peso justo que casi obliga a valorar la ampliación a 4.250 kg y de unos opcionales de cama que hay que presupuestar aparte.

Otro punto a favor del Cliff es la red del grupo Hymer detrás: concesionarios en toda Europa, recambios garantizados y un valor de reventa que los campers alemanes conservan mejor que la mayoría de sus rivales. Para quien compra su primer camper, esa tranquilidad tiene un precio difícil de cuantificar pero fácil de agradecer cuando surge una avería lejos de casa. Y la opción de la MMA a 4.250 kg, aunque exija el C1, convierte al Cliff en un camper con recorrido: se compra con el B y, si la familia crece o el equipaje aumenta, se amplía sin cambiar de vehículo.`,
    analisisSlug: "sunlight-cliff-640-2026-analisis-opinion",
    curiosidades:
      "Sunlight publica el PVP del Cliff 640 Adventure para España (60.990 €) en su web oficial: una transparencia casi única en el sector, donde lo habitual es remitir al concesionario sin dar cifras. Fuente: https://www.sunlight.de/es/modelos/camper-vans/cliff-adventure/cliff-640-adventure/",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato 2.2: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Fiat)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Sunlight (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Sunlight",
    },
    euroncap: null,
    notas:
      "La carga útil no consta: la marca no la publica para este modelo (los 218 kg de su documentación son masa máxima de equipamiento opcional, otro concepto) y no la calculamos restando masas. Plazas para dormir: 2 de serie (4 con cama central opcional o techo elevable). La etiqueta ambiental DGT «C» es una inferencia editorial (diésel Euro 6), no un dato del fabricante: dato no oficial · en revisión.",
    fuenteNombre: "Sunlight (web oficial)",
    fuenteUrl:
      "https://www.sunlight.de/es/modelos/camper-vans/cliff-adventure/cliff-640-adventure/",
  },
];
