// 21/10/2026 (dedupe campers, Niky): retirado el registro «sunlight-cliff-640-2026-precio-ficha-tecnica» de este fichero.
// Era la copia en /autocaravanas/ de una furgoneta camperizada: la versión canónica
// vive en /campers/sunlight-cliff-640-2026-precio-ficha-tecnica/ y la URL vieja redirige con 301 (public/_redirects).
// Autocaravanas Sunlight — lote Merlín 1 (18/10/2026). Corrección (b)(c)(d) 22:15 — textos lote 3.
// F9 (19/10/2026): fotos oficiales (T 68: 1 ext + 2 int; A 70: 1 ext + 2 int; Cliff 640: 1 ext + 2 int) + curiosidades.
// T 68: datos actualizados a la página oficial vigente (masa 3.007 kg, horquilla 2.857-3.157; «Schlafplätze 2 + 3»).
// Datos verificados: sunlight.de (web oficial). T 68: 741/232/293 cm, Fiat Ducato 2.2 140 CV,
// masa en orden de marcha oficial 2.992 kg (horquilla 2.842-3.142); la marca no publica en la
// página accesible las plazas para dormir: plazasDormir en null.
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
    precioDesde: null, // precio en España no verificado; no inventar
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
    aprox: ["etiquetaDgt"],
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

En precio, Sunlight no publica tarifa para España y el importe final depende de cada punto de venta: no hay PVP oficial que dar. Sus rivales son las perfiladas familiares de 7,2 a 7,5 metros de las generalistas europeas, frente a las que la T 68 compite con estética joven y camas gemelas, no con refinamiento interior. Es para parejas jóvenes o familias que se inician, que quieren una perfilada grande con imagen actual y dormitorio práctico, y que priorizan el precio contenido dentro del grupo Hymer. No es para quien viaja en invierno de verdad ni para quien busca materiales nobles: es una autocaravana honesta de gama de acceso con mucha imagen. Cómo lo verificamos: las medidas (7,41 × 2,32 × 2,93 m), el motor Fiat Ducato 2.2 de 140 CV, la MMA de 3.500 kg, la masa en orden de marcha de 3.007 kg con su horquilla oficial, las 5 plazas para dormir («2 + 3»), las camas gemelas traseras y la cama basculante de 195 × 140 cm proceden de la página oficial del modelo en sunlight.de, revisada el 19/10/2026; la marca no publica la carga útil del modelo, por eso ese campo va en null; Sunlight no publica tarifa para España, por eso no hay precio. El veredicto es que es la perfilada de imagen joven más redonda del segmento de acceso: distribución familiar bien resuelta y estética Adventure que la distingue, a cambio de materiales sencillos y un aislamiento de tres estaciones que hay que asumir con realismo.

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
      "Plazas para dormir: 5 oficiales («Schlafplätze 2 + 3» en sunlight.de). La marca no publica la carga útil del T 68: ese campo va en null. La etiqueta ambiental DGT «C» es una inferencia editorial (diésel Euro 6), no un dato del fabricante: dato no oficial · en revisión.",
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
];
