// Autocaravanas Benimar — lote Merlín 4 (19/10/2026).
// Fuentes: ficha técnica del Benimar Mileo 268 publicada por el distribuidor
// caravaningplaza.com (cotas, motor, plazas, MMA, garaje), catálogo oficial Benimar 2026/2027
// en benimar.es (la gama Mileo vigente: M263/M268/M298; el «Mileo 201» asignado no existe en
// la gama actual —era un modelo de ~2015— y se sustituye por el Mileo 268).
// Verificado el 19/10/2026.
// Notas honestas: Benimar NO publica PVP oficial (precioDesde = null). La marca no publica
// la carga útil como cifra (cargaUtilKg = null; prohibido calcularla). Consumo, par motor,
// emisiones y masa en orden de marcha: no publicados. Las fotos no son oficiales: proceden
// del distribuidor caravaningplaza.com, sin marcas de agua ni rótulos; se usan bajo la regla
// relajada de 19/10/2026 (modelo y marca exactos).
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_BENIMAR_M4: Autocaravana[] = [
  {
    id: "benimar-mileo-268-2026-precio-ficha-tecnica",
    marca: "Benimar",
    modelo: "Mileo 268",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Benimar no publica PVP oficial
    potenciaCv: 140, // Fiat Ducato 2.2 de 140 CV, cambio manual, Euro 6 (caravaningplaza.com)
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
    imagen: "/media/benimar-mileo-268-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/benimar-mileo-268-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/benimar-mileo-268-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7390, // caravaningplaza.com: 739 cm
    anchoMm: 2300, // caravaningplaza.com: 230 cm
    altoMm: 2890, // caravaningplaza.com: 289 cm
    pesoKg: null, // masa en orden de marcha no publicada
    mmaKg: 3500, // caravaningplaza.com; carnet B
    carnetNecesario: "B", // mmaKg <= 3500
    cargaUtilKg: null, // la marca no publica la carga útil; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas para viajar (hasta 5 opcional: 4/4-5/4)
    plazasDormir: 4, // 4 plazas para dormir (hasta 5 opcional)
    parNm: null,
    traccion: "delantera", // base Fiat Ducato de tracción delantera
    emisionesCo2: null,
    aprox: [],
    notas:
      "Modelo sustituido: el «Benimar Mileo 201» asignado no existe en la gama actual (el 201 fue un modelo de ~2015; el catálogo oficial 2026/2027 solo lista M263/M268/M298); se documenta el Mileo 268 (M268) real y vigente. Cotas (739/230/289 cm), motor Fiat Ducato 2.2 de 140 CV manual Euro 6, 4 plazas (4-5 opcional), MMA 3.500 kg y garaje con capacidad de 225 kg: ficha del distribuidor caravaningplaza.com (verificada 19/10/2026). Benimar no publica PVP oficial (precioDesde = null). Fotos no oficiales (distribuidor, sin marcas de agua). Carga útil, consumo, par, emisiones y MRO: no publicados; quedan en null.",
    curiosidades:
      "El Mileo 268 se fabrica íntegramente en Peñíscola (Castellón), en la planta de Benimar: la marca española, con más de cuatro décadas de trayectoria, exporta actualmente sus autocaravanas a más de 25 países y es uno de los principales fabricantes europeos del sector. Fuente: AC-Llar, distribuidor oficial Benimar (https://ac-llar.com//ac-llar-llevara-las-novedades-de-benimar-y-roller-team-con-descuentos-a-la-i-feria-del-caravaning-de-valencia/).",
    descripcion: `El Benimar Mileo 268 es la perfilada española que demuestra que no hace falta cruzar los Pirineos para encontrar una autocaravana bien pensada: se diseña y fabrica íntegramente en Peñíscola, en la planta de una marca que lleva más de cuatro décadas construyendo autocaravanas y que hoy exporta a más de 25 países. Dentro de la gama Mileo —la familia de perfiladas de Benimar—, el 268 ocupa el punto dulce: 7,39 metros de eslora con una distribución para cuatro personas que no renuncia a nada esencial, sobre la base más popular del caravaning europeo, el Fiat Ducato.

    En medidas y habitabilidad, el Mileo 268 ofrece 739 cm de largo, 230 cm de ancho y 289 cm de alto, con una MMA de 3.500 kg que lo mantiene en el terreno del carnet B. Son las cotas clásicas de la perfilada familiar europea: lo bastante larga para una distribución completa con camas separadas de la zona de día, lo bastante contenida para no convertirse en un problema en cada rotonda. La anchura de 2,30 m permite un salón y una cocina de dimensiones reales, no de maqueta, y la altura de 2,89 m deja una altura interior cómoda para personas altas. El garaje trasero, con una capacidad de carga declarada de 225 kg, es uno de los argumentos de venta del modelo: bicicletas, sillas, mesa de camping y todo el material de la vida al aire libre viajan abajo sin invadir la célula.

    En tecnología y equipamiento, Benimar aplica su filosofía de «mucho equipamiento de serie por un precio ajustado», la fórmula que la ha convertido en líder del mercado español. El Mileo 268 equipa la base Fiat Ducato con el motor 2.2 de 140 CV y cambio manual Euro 6, una mecánica sobradamente probada en el sector y con una red de servicio inmensa en toda Europa —una ventaja práctica que se agradece cuando se viaja lejos de casa—. La célula apuesta por un salón face-to-face, la distribución que más gusta a quienes viajan en pareja o en familia y pasan tiempo dentro del vehículo: dos bancos enfrentados que crean un auténtico salón para comer, jugar a las cartas o trabajar con el portátil. La cocina, equipada para cocinar de verdad, y el baño completo con ducha separada cierran una dotación pensada para el uso intensivo, no para el folleto.

    En camas y plazas, el 268 homologa 4 plazas para viajar y 4 para dormir, con la posibilidad de ampliar a 5 plazas en ambas cifras según la configuración. Es la capacidad honesta de una perfilada familiar: dos adultos y dos niños duermen con comodidad, y la quinta plaza ocasional resuelve la visita de un amigo de los hijos o de un abuelo. La distribución separa la zona de noche de la zona de día, de modo que los niños pueden acostarse mientras los padres siguen en el salón sin molestarse: un detalle que solo aprecia quien ha viajado con familia en una distribución abierta.

    En mecánica, el Fiat Ducato 2.2 MultiJet de 140 CV con cambio manual es la opción racional del segmento: potencia suficiente para mover con dignidad los 3.500 kg de MMA, consumos contenidos para el tamaño del vehículo y una fiabilidad legendaria respaldada por millones de unidades en circulación. La tracción delantera y el chasis específico para camping-car (rebajado en la zona de la célula) proporcionan un comportamiento sano y predecible, y la altura contenida de 2,89 m mantiene el centro de gravedad razonablemente bajo. No es la mecánica más prestacional del mercado, pero es la que menos problemas da: en una autocaravana familiar, eso vale más que 20 CV extra.

    En precio y red comercial en España, Benimar no publica una tarifa oficial de PVP —la marca trabaja con precios de distribuidor—, por lo que el precio final se configura en el concesionario. Lo que sí es público es el posicionamiento: Benimar compite con una de las mejores relaciones equipamiento/precio del mercado europeo, y el Mileo 268 se sitúa en la franja media de las perfiladas familiares. La red comercial es otro de sus puntos fuertes: como fabricante español líder del mercado nacional, Benimar cuenta con una densa red de distribuidores y servicio posventa en toda España, con la fábrica de Peñíscola a un salto para recambios y garantías. Comprar español, en este caso, tiene ventajas logísticas reales.

    Cómo lo verificamos: la sustitución del modelo (el «Mileo 201» no existe en el catálogo 2026/2027, que solo lista M263/M268/M298) se comprobó en el catálogo oficial de benimar.es. Las cotas (739 x 230 x 289 cm), el motor Fiat Ducato 2.2 de 140 CV manual Euro 6, las plazas (4, ampliables a 5), la MMA de 3.500 kg y la capacidad del garaje (225 kg) proceden de la ficha técnica publicada por el distribuidor caravaningplaza.com, verificada el 19 de octubre de 2026. La fabricación en Peñíscola y la exportación a más de 25 países proceden de AC-Llar, distribuidor oficial. Los datos no publicados por la marca (PVP, carga útil, consumo, par, emisiones, MRO) quedan en null y se declaran como tales.

    Para quién es: el Mileo 268 encaja con familias españolas que buscan su primera —o su segunda— perfilada sin complicaciones: cuatro plazas reales, garaje tragón, mecánica Fiat probada y una red de servicio nacional que responde. Es ideal para vacaciones largas en familia, fines de semana con niños y para quien valora comprar a un fabricante nacional. No es para quien necesite cinco camas de forma permanente (hay distribuciones más grandes), para quien busque acabados premium de gama alta, ni para quien priorice la compacidad extrema: 7,39 metros piden un conductor que ya se sienta cómodo con un vehículo grande.`,
    pros: [
      "Fabricada en España (Peñíscola) por el líder del mercado nacional: red de servicio y recambios muy densa",
      "Garaje trasero con 225 kg de capacidad de carga: de los más aprovechables de su segmento",
      "Salón face-to-face: un auténtico salón para familias que viven el interior del vehículo",
      "Mecánica Fiat Ducato 2.2 de 140 CV: la base más probada y con más servicio de Europa",
      "Relación equipamiento/precio de las mejores del mercado: mucho de serie sin saltar de gama",
    ],
    contras: [
      "Benimar no publica PVP oficial: el precio final depende de cada distribuidor",
      "Cambio manual de serie: el automático, si se ofrece, encarece la factura",
      "7,39 m de eslora: pide experiencia para moverse por pueblos y áreas pequeñas",
      "La quinta plaza es opcional y de compromiso: no es un 5 plazas nato",
      "Acabados funcionales antes que premium: quien busque lujo debe subir de gama",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/benimar-mileo-268-2026-precio-ficha-tecnica-oficial.webp", alt: "Benimar Mileo 268, vista exterior lateral", ancho: 1600, alto: 2399 },
      { src: "/media/benimar-mileo-268-2026-precio-ficha-tecnica-interior1.webp", alt: "Benimar Mileo 268, salón face-to-face", ancho: 1600, alto: 1066 },
      { src: "/media/benimar-mileo-268-2026-precio-ficha-tecnica-interior2.webp", alt: "Benimar Mileo 268, cocina", ancho: 1600, alto: 1066 },
      { src: "/media/benimar-mileo-268-2026-precio-ficha-tecnica-detalle.webp", alt: "Benimar Mileo 268, baño", ancho: 1600, alto: 2399 },
    ],
    analisisSlug: "benimar-mileo-268-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 48.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Benimar (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
