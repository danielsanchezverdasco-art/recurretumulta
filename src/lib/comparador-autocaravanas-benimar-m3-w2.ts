// Autocaravanas Benimar — lote Merlín 3 (19/10/2026).
// Fuentes: review de Caravan Club con cifras de la literatura del fabricante
// (https://www.caravanclub.co.uk/blog/product-and-outfit-reviews/motorhome-reviews/benimar-mileo-286/),
// ficha de unidad 2016 en Gumtree (https://www.gumtree.com/p/campervans-motorhomes/2016-benimar-mileo-286-4-berth-4-belt-habcheck-inverter/1801632439),
// web oficial de Benimar — gama Mileo (https://www.benimar.es/en/low-profile-motorhomes/),
// CaravanTimes sobre la gama Mileo 2017 (https://www.caravantimes.co.uk/save%20for%20laters-brand/newsletter-the-all-new-benimar-mileo-from-marquis-leisure/).
// Verificado el 19/10/2026.
// NOTAS HONESTAS: el modelo asignado (benimar-first-332) no existe —sin resultados en
// catálogos ni prensa— y se sustituye por el Benimar Mileo 286, modelo real y documentado.
// Benimar no publica tarifa oficial para España: precioDesde queda en null. La potencia de
// 180 CV y la caja automática de 9 velocidades corresponden a la variante 2.2 Multijet
// (literatura del fabricante); las primeras unidades (2016) montaban el 2.3 de 150 CV manual
// con MMA de 3.650 kg. La carga útil de 1.269 kg es la publicada por el fabricante en su
// literatura (vía Caravan Club), no un cálculo. Fotos de anuncio de unidad real 2016
// (modelo exacto, sin marcas de agua); resolución 768 px, la disponible.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_BENIMAR_M3: Autocaravana[] = [
  {
    id: "benimar-mileo-286-2026-precio-ficha-tecnica",
    marca: "Benimar",
    modelo: "Mileo 286",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Benimar no publica tarifa oficial para España
    potenciaCv: 180, // 2.2 Multijet 180 CV (variante 2021+); las 2016 llevaban el 2.3 de 150 CV
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro 6
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/benimar-mileo-286-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/benimar-mileo-286-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/benimar-mileo-286-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6950, // 6,95 m según literatura del fabricante (vía Caravan Club)
    anchoMm: 2300,
    altoMm: 2890, // 2,89 m; Benimar anuncia perfiladas de 289 cm de altura
    pesoKg: 3131, // MRO según literatura del fabricante
    mmaKg: 4400, // MTPLM; las unidades 2016 se matriculaban en 3.650 kg
    carnetNecesario: "C1", // mmaKg > 3500
    cargaUtilKg: 1269, // «user payload» publicado por el fabricante en su literatura (vía Caravan Club)
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4, // cama basculante eléctrica doble + salón convertible
    parNm: 450, // 450 Nm entre 1.500 y 1.750 rpm (2.2 Multijet 180 CV)
    traccion: "delantera",
    emisionesCo2: null,
    aprox: [],
    notas:
      "Motor 2.2 Multijet de 180 CV con cambio automático de 9 velocidades y 450 Nm según la literatura del fabricante recogida por Caravan Club (MRO 3.131 kg, MTPLM 4.400 kg, 6,95 x 2,30 x 2,89 m, depósito de 90 l). Las primeras unidades del modelo (2016) se vendían con el 2.3 Multijet de 150 CV manual y MMA de 3.650 kg, según ficha de distribuidor. La carga útil de 1.269 kg es la cifra de «user payload» publicada por el fabricante, no un cálculo. Quedan en null: precio oficial en España (Benimar no publica tarifa), consumo, emisiones de CO2 y autonomía.",
    curiosidades:
      "Desde la temporada 2017, toda la gama Mileo se fabrica con construcción completamente sin madera («wood free»), una decisión de Benimar para proteger mejor la célula de la humedad y las filtraciones. Fuente: CaravanTimes, «The all new Benimar Mileo» (https://www.caravantimes.co.uk/save%20for%20laters-brand/newsletter-the-all-new-benimar-mileo-from-marquis-leisure/).",
    descripcion: `La Benimar Mileo 286 es una autocaravana perfilada de 6,95 metros que resume muy bien por qué la marca de Peñíscola se ha ganado fama de ofrecer la mejor relación calidad-precio del mercado europeo. Pertenece a la gama Mileo, la familia de perfiladas sobre chasis Fiat Ducato con la que Benimar ataca el segmento medio: ni la más barata ni la más lujosa, pero con un equipamiento de serie tan completo que en otros fabricantes habría que pagarlo como un largo listado de extras. La 286 es, dentro de esa gama, la versión pensada para parejas que quieren viajar con desahogo y recibir invitados de vez en cuando sin renunciar a una cama siempre hecha.

    En medidas, la 286 se mueve en el punto dulce de las perfiladas familiares: 6,95 metros de largo, 2,30 de ancho y 2,89 de alto. Son cotas que permiten aparcarla y maniobrar con ella sin el respeto que imponen las integrales de ocho metros, pero con un interior que no se siente estrecho. La altura de 289 centímetros —la que Benimar anuncia para sus perfiladas— deja una sensación de amplitud notable en el salón y permite una cama basculante de techo con recorrido generoso. El peso también está bien resuelto: la masa en orden de marcha declarada por el fabricante es de 3.131 kg y la masa máxima autorizada de 4.400 kg, lo que deja una carga útil teórica de 1.269 kg, una cifra muy holgada para llevar bicicletas, toldo, menaje completo y depósitos llenos sin ir justo. Ojo, eso sí: con 4.400 kg de MMA hace falta el carnet C1; las primeras unidades de 2016 se matriculaban en 3.650 kg (también C1 en la práctica británica, pero rebajables a 3.500 kg), así que conviene comprobar la ficha técnica de cada unidad concreta antes de comprar de ocasión.

    La distribución es el gran argumento de la 286. Delante, un salón amplísimo con sofá doble en L, otro sofá doble lateral y los dos asientos de cabina giratorios, con mesa exenta que se monta en el centro: caben cuatro adultos a comer con comodidad real, no de mentirijilla. Detrás del salón, la cocina está sorprendentemente equipada para una perfilada de este precio: horno, grill, dos fuegos de gas más una placa eléctrica, microondas, frigorífico grande con congelador independiente y hasta cajón botellero. El baño, con ducha separada, cumple sin agobios, y al fondo hay un garaje de buen tamaño, algo que no todas las perfiladas de menos de siete metros pueden decir. La cama principal es una gran cama doble basculante eléctrica situada en el centro del vehículo: baja con solo pulsar un botón y no hay que hacerla ni deshacerla cada día, que es justo lo que buscan las parejas viajeras. Las otras dos plazas salen del salón convertible.

    En tecnología y equipamiento, la 286 de las últimas series viene con un nivel de dotación que explica su éxito en Reino Unido, donde se vendió mucho: faros y limpiaparabrisas automáticos, navegador, cámara trasera, llantas de aleación, ESP, Traction+, control de descenso, panel solar, punto de barbacoa exterior y hasta sistema de seguimiento. La calefacción es de gas con 6 kW, suficiente para alargar la temporada. Y un detalle constructivo que merece mención: desde 2017 Benimar fabrica la gama Mileo completamente sin madera en su estructura, buscando una mejor protección contra la humedad y las filtraciones, el enemigo número uno de cualquier autocaravana con años.

    Mecánicamente, la unidad de referencia monta el Fiat Ducato 2.2 Multijet de 180 CV con cambio automático de nueve velocidades y tracción delantera, que entrega 450 Nm entre 1.500 y 1.750 rpm: empuje de sobra para mover los 4.400 kg con soltura en autopista y puertos. Las unidades de 2016, las más abundantes en el mercado de ocasión, llevan el anterior 2.3 Multijet de 150 CV con cambio manual de seis velocidades, un motor reputadísimo por su fiabilidad aunque menos refinado. El depósito de combustible es de 90 litros.

    En precio, Benimar no publica tarifa oficial para España, así que no hay cifra de catálogo que dar: el precio lo pone cada concesionario según equipamiento y promociones. Como referencia, en Reino Unido la versión 180 CV automática se anunciaba en torno a las 88.000 libras. En España, la red de distribuidores Benimar es amplia —la fábrica está en Peñíscola (Castellón) y la marca pertenece al grupo Trigano—, por lo que pedir presupuesto y probar la 286 (o su equivalente actual en la gama) es sencillo en casi cualquier provincia. En el mercado de ocasión, las 286 de 2016-2019 con el 2.3 de 150 CV son una de las compras más razonables del segmento: mecánica probada, célula sin madera y un precio contenido.

    Cómo lo verificamos: las dimensiones, pesos, motor y par proceden de la literatura del fabricante recogida en la prueba de Caravan Club; los datos de la variante 2016 (2.3 de 150 CV, MMA de 3.650 kg, distribución detallada) de la ficha de un distribuidor británico; la descripción de la gama Mileo (chasis Fiat, perfiladas de 289 cm) de la web oficial benimar.es; y el dato de la construcción sin madera desde 2017 de CaravanTimes. Todo verificado el 19/10/2026. Quedan en null el precio oficial español, el consumo y las emisiones, que el fabricante no publica.

    Para quién es: la Mileo 286 encaja con parejas viajeras que quieren una cama siempre hecha, un salón de verdad para cuatro y un garaje sin subir a los siete metros y medio. También con quien busca una ocasión fiable y bien equipada sin pagar el sobreprecio de las marcas premium alemanas. No es para quien solo tenga el carnet B y no quiera sacarse el C1 (necesario con sus 4.400 kg de MMA), ni para quien necesite cinco o seis plazas: aquí hay cuatro, y punto.`,
    pros: [
      "Cama doble basculante eléctrica que no hay que hacer ni deshacer a diario",
      "Salón delantero amplísimo con capacidad real para cuatro comensales",
      "Carga útil teórica de 1.269 kg, muy holgada para su segmento",
      "Construcción sin madera desde 2017, mejor defensa contra la humedad",
      "Equipamiento de serie muy completo (solar, cámara, navegador, Traction+)",
    ],
    contras: [
      "Con 4.400 kg de MMA exige carnet C1, no vale el B",
      "Benimar no publica tarifa oficial en España: el precio depende del concesionario",
      "Las unidades de 2016 con el 2.3 de 150 CV manual son menos refinadas que la 180 CV automática",
      "Marca española con gran red, pero valor de reventa inferior al de las premium alemanas",
      "Solo cuatro plazas: no sirve para familias numerosas",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/benimar-mileo-286-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Benimar Mileo 286, vista exterior",
        ancho: 768,
        alto: 608,
      },
      {
        src: "/media/benimar-mileo-286-2026-precio-ficha-tecnica-interior1.webp",
        alt: "Benimar Mileo 286, salón interior",
        ancho: 768,
        alto: 576,
      },
      {
        src: "/media/benimar-mileo-286-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Benimar Mileo 286, cuarto de baño",
        ancho: 768,
        alto: 576,
      },
      {
        src: "/media/benimar-mileo-286-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Benimar Mileo 286, detalle de la cocina",
        ancho: 768,
        alto: 576,
      },
    ],
    analisisSlug: "benimar-mileo-286-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Base Fiat Ducato: revisión cada 2 años o 48.000 km (lo que antes ocurra, según plan Fiat)",
      revisiones: [
        {
          nombre: "Revisión base (Fiat Ducato)",
          queSeCambia: "Aceite + filtros + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Benimar (anual recomendada)",
          queSeCambia: "Estanqueidad, gas, electricidad, humedades",
          costeAproxEur: 250,
        },
      ],
    },
  },
];
