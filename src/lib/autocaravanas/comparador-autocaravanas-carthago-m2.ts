// Autocaravanas Carthago — lote Merlín 2 (19/10/2026).
// Ficha 1: C-Compactline I 138 DB — datos de la página oficial del modelo en
// carthago.com (archivo web, modelo del catálogo 2025; la gama c-compactline
// salió del catálogo 2026). Tarifa oficial en Reino Unido: desde £106.990.
// Ficha 2: C-Tourer T 145 RB LE — datos de la página oficial de la gama
// C1-tourer T (el modelo se renombró C1-tourer T 145 RB-LE para 2025/2026;
// es el mismo vehículo y distribución). Tarifa oficial en Reino Unido:
// desde £96.040 (Fiat Ducato lightweight 3,5 t). Fotos inspeccionadas
// visualmente: sin marcas de agua, sin campas, sin rótulos ni pegatinas.
// Curiosidades con fuente oficial. noindex lo gestiona Grok al integrar.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_CARTHAGO_M2: Autocaravana[] = [
  {
    id: "carthago-c-compactline-i-138-db-2026-precio-ficha-tecnica",
    marca: "Carthago",
    modelo: "C-Compactline I 138 DB",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: 106990, // tarifa oficial en Reino Unido: desde £106.990 (carthago.com)
    potenciaCv: 140, // Fiat Ducato 2.2 Multijet de 140 CV (103 kW), de serie
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
    imagen:
      "/media/carthago-c-compactline-i-138-db-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial:
      "/media/carthago-c-compactline-i-138-db-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/carthago-c-compactline-i-138-db-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6410, // página oficial del modelo: 6.410 mm
    anchoMm: 2120, // página oficial del modelo: 2.120 mm (carrocería)
    altoMm: 2890, // página oficial del modelo: 2.890 mm
    pesoKg: 2830, // masa en orden de marcha oficial: 2.830 kg (tolerancia 2.689-2.972)
    mmaKg: 3500, // MMA oficial: 3.500 kg
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil de esta versión
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // página oficial: 4 plazas de viaje (serie/opcional)
    plazasDormir: 4, // página oficial: 4 plazas para dormir (5 máx. con opción)
    parNm: 350, // Fiat Ducato 2.2 Multijet 140: 350 Nm (dato oficial Fiat)
    traccion: "Delantera", // Fiat Ducato AL-KO, tracción delantera
    emisionesCo2: null,
    aprox: ["Precio de tarifa en Reino Unido: desde £106.990"],
    notas:
      "El precio (£106.990) es la tarifa oficial «desde» que Carthago publicaba en su web británica para el C-Compactline I 138 DB; Carthago España no publica PVP, así que el precio final en España lo fija cada concesionario. La gama c-compactline formó parte del catálogo hasta el año modelo 2025 y salió de la gama 2026, por lo que las unidades nuevas disponibles son de stock. Medidas, pesos, plazas y equipamiento proceden de la página oficial del modelo en carthago.com (consultada vía archivo web).",
    descripcion: `La Carthago C-Compactline I 138 DB es la demostración de que una integral premium no tiene por qué medir ocho metros: con 6,41 metros de largo es la autocaravana más compacta de la clase premium de Carthago, y sin embargo viaja con todo lo que la marca alemana pone en sus hermanas mayores. La distribución DB —cama doble transversal en la parte trasera— es la que mejor aprovecha cada centímetro de una carrocería de solo 2,12 metros de ancho: una cama de matrimonio de 1.960/1.470 x 1.350 mm sobre el garaje trasero y, delante, la cama basculante de 1.800 x 1.600 mm que desciende sobre la cabina. Cuatro plazas para dormir de serie y una quinta opcional, en una integral que cabe en casi cualquier área.

El apellido Super-Lightweight no es marketing: la masa en orden de marcha oficial es de 2.830 kg (con una tolerancia legal de 2.689 a 2.972 kg), lo que deja un margen generoso hasta los 3.500 kg de MMA. Es la integral ligera por excelencia de la clase liner premium, y la receta es la construcción ligera de Carthago sobre el chasis rebajado especial AL-KO con el Fiat Ducato: paneles optimizados en peso, doble suelo técnico de 220/460 mm calefactado y una altura interior habitable de 1.980 mm que no hace sentir el vehículo pequeño por dentro. El garaje trasero, con 1.200 mm de altura interior y puertas de 925/1.140 mm en el lado del acompañante, traga bicicletas y el equipamiento de una familia sin pedir favores.

La base es el Fiat Ducato 2.2 Multijet de 140 CV (103 kW) con 350 Nm de par y tracción delantera, homologado Euro 6. Es la motorización de serie que Carthago monta en la gama: suficiente para mover con soltura una integral que en orden de marcha no llega a las tres toneladas, y con el consumo contenido que se espera de un conjunto ligero. La calefacción es la Truma Combi 6 de gas, el agua limpia viaja en un depósito de 150 litros y las grises en uno de 140, y la batería del habitáculo es de gel de 80 Ah. Todo pensado para la autonomía de fin de semana largo sin depender de la red eléctrica del área.

Por dentro, la 138 DB respira el ADN Carthago: muebles de líneas limpias, iluminación cuidada y la sensación de que cada armario está donde tiene que estar. La cocina, la zona de estar con asientos de cabina giratorios y el baño completan una célula que no renuncia a nada por ser compacta: frigorífico grande con congelador separado, ducha separada y un salón donde cuatro personas comen cómodas. Con 6,41 m de largo y 2,12 m de ancho, aparcar y maniobrar es otra historia respecto a una integral de siete metros y medio: entra en parkings, gira en pueblos y no exige planificar cada repostaje.

Del precio en España no hay cifra oficial: Carthago no publica PVP y cada concesionario fija el suyo. Como referencia de posicionamiento, la tarifa oficial en el Reino Unido partía de £106.990, lo que la situaba como la puerta de entrada a la integral premium alemana, muy por debajo de una chic c-line. Sus rivales naturales son la Hymer B-MC I 600 o la Dethleffs Globebus I 6 en formato compacto: la Carthago se defiende con el doble suelo calefactado de serie, la garantía de estanqueidad de diez años de la marca y una calidad de acabados que se nota al primer portazo.

Verificación de fuentes: medidas (6.410 x 2.120 x 2.890 mm), batalla (3.525 mm), pesos (2.830 kg en orden de marcha, 3.500 kg de MMA), plazas (4 de viaje / 4 para dormir, 5 máx.), camas (trasera 1.960/1.470 x 1.350 mm, basculante 1.800 x 1.600 mm), motorización Fiat Ducato 2.2 de 140 CV, calefacción Truma Combi 6, depósitos (150/140 l) y batería (80 Ah gel) proceden de la página oficial del modelo en carthago.com, consultada a través de archivo web al estar la gama descatalogada en 2026. La tarifa «desde £106.990» es la oficial británica; Carthago España no publica PVP. La marca no publica la carga útil de esta versión: ese campo queda sin dato y no se calcula. Las fotos corresponden a unidades reales del C-Compactline I 138 DB.

Perfil de comprador: la C-Compactline I 138 DB encaja con parejas o familias pequeñas que quieren una integral premium de verdad pero sin el tamaño —ni el precio— de las gamas altas, valoran poder conducirla con el carnet B con margen de carga de sobra y la usarán todo el año gracias al doble suelo calefactado. No encaja con quien necesite cinco plazas de viaje homologadas de serie ni con quien busque una integral nueva a estrenar del catálogo 2026, porque la gama ya no se fabrica: hay que buscar stock de 2025 o mercado de ocasión. Balance: la integral premium más racional del mercado de segunda mano, con el argumento imbatible de pesar 2.830 kg en orden de marcha, lastrada únicamente por su descatalogación.`,
    pros: [
      "La integral premium más compacta: 6,41 m de largo y solo 2.830 kg en orden de marcha",
      "Cama doble transversal trasera (1.960/1.470 x 1.350 mm) + cama basculante (1.800 x 1.600 mm): 4-5 plazas para dormir",
      "Doble suelo técnico calefactado (220/460 mm) y garaje de 1.200 mm de altura: uso invernal real",
      "Fiat Ducato 2.2 de 140 CV con 350 Nm: conjunto ligero, consumo contenido",
      "3.500 kg de MMA: se conduce con el carnet B con amplio margen de carga",
    ],
    contras: [
      "Gama descatalogada en 2026: solo stock de 2025 o mercado de ocasión",
      "Sin PVP oficial en España: cada concesionario fija su precio",
      "La marca no publica la carga útil de esta versión",
      "Batería del habitáculo de solo 80 Ah en la dotación de serie",
      "2,12 m de ancho: el pasillo y el baño son justos para personas corpulentas",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/carthago-c-compactline-i-138-db-2026-precio-ficha-tecnica-ext.webp",
        alt: "Carthago C-Compactline I 138 DB, vista delantera tres cuartos",
        ancho: 2560,
        alto: 1920,
      },
      {
        src: "/media/carthago-c-compactline-i-138-db-2026-precio-ficha-tecnica-ext-2.webp",
        alt: "Carthago C-Compactline I 138 DB, puerta del habitáculo abierta con insignia Carthago",
        ancho: 2560,
        alto: 1441,
      },
      {
        src: "/media/carthago-c-compactline-i-138-db-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del C-Compactline I 138 DB, puesto de conducción Fiat Ducato",
        ancho: 2560,
        alto: 1442,
      },
      {
        src: "/media/carthago-c-compactline-i-138-db-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Dormitorio del C-Compactline I 138 DB, cama doble transversal trasera",
        ancho: 2560,
        alto: 1442,
      },
    ],
    analisisSlug: "carthago-c-compactline-i-138-db-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato 2.2: revisión cada 2 años o 48.000 km (lo que ocurra antes, según plan Fiat)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 48.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Carthago (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Carthago",
    },
    euroncap: null,
    curiosidades:
      "La c-compactline es la autocaravana que el dos veces ganador del Tour de Francia Tadej Pogačar usa como campamento base en las carreras: Carthago le prepara una unidad de la serie especialmente decorada para descansar entre etapas y entrenar lejos del bullicio. Fuente: Carthago, «Winner Tour de France» (https://www.carthago.com/en/cooperations/tour-de-france-winner-tadej-pogacar/winner-tour-de-france/).",
    fuenteNombre:
      "Carthago Reisemobilbau — datos técnicos oficiales del modelo (vía archivo web de carthago.com)",
    fuenteUrl:
      "https://web.archive.org/web/20230325100803/https://www.carthago.com/en/motorhomes/find-model/c-compactline_i-138-db-super-lightweight/",
  },
  {
    id: "carthago-c-tourer-t-145-rb-le-2026-precio-ficha-tecnica",
    marca: "Carthago",
    modelo: "C-Tourer T 145 RB LE",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 96040, // tarifa oficial en Reino Unido: desde £96.040 (Fiat lightweight 3,5 t)
    potenciaCv: 140, // Fiat Ducato 2.2 Multijet de 140 CV (103 kW), de serie
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
    imagen:
      "/media/carthago-c-tourer-t-145-rb-le-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial:
      "/media/carthago-c-tourer-t-145-rb-le-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/carthago-c-tourer-t-145-rb-le-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6990, // carthago.com (C1-tourer T 145 RB-LE lightweight): 6,99 m
    anchoMm: 2270, // ficha de concesionario del modelo 2025: 2.270 mm
    altoMm: 2920, // ficha de concesionario del modelo 2025: 2.920 mm
    pesoKg: null, // masa en orden de marcha no publicada por la marca para esta versión
    mmaKg: 3500, // versión lightweight: 3.500 kg
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil de esta versión
    consumo: null,
    consumoUnidad: null,
    plazas: null, // plazas de viaje no publicadas por la marca para esta versión
    plazasDormir: 2, // camas individuales longitudinales traseras (200/190 x 85 cm)
    parNm: 350, // Fiat Ducato 2.2 Multijet 140: 350 Nm (dato oficial Fiat)
    traccion: "Delantera", // Fiat Ducato, tracción delantera
    emisionesCo2: null,
    aprox: ["Precio de tarifa en Reino Unido: desde £96.040"],
    notas:
      "El precio (£96.040) es la tarifa oficial «desde» que Carthago publica en su web británica para el C1-tourer T 145 RB-LE lightweight 3,5 t con base Fiat Ducato; Carthago España no publica PVP, así que el precio final en España lo fija cada concesionario. Nota de nomenclatura: este modelo se lanzó en 2023 como c-tourer I/T 145 RB LE y desde el año modelo 2025/2026 Carthago lo denomina C1-tourer T 145 RB-LE (versión Fiat) / C2-tourer T 145 RB-LE (versión Mercedes Sprinter, 7,16 m). Es el mismo vehículo y la misma distribución.",
    descripcion: `El Carthago C-Tourer T 145 RB LE es la perfilada que le valió a Carthago el European Innovation Award 2024 en la categoría de distribución, y basta mirar su plano para entender por qué: en 6,99 metros de largo combina un baño de lujo con ducha separada y vestidor con camas individuales longitudinales traseras, una combinación que hasta su llegada no existía en un vehículo tan corto. Es la distribución que demuestra que no hace falta una integral de ocho metros para viajar con genes de liner.

La T del nombre indica lo esencial: es una perfilada (Teilintegriert), con la cabina original del Fiat Ducato y la célula construida encima. Eso le da la silueta dinámica y el precio de acceso de la gama, pero Carthago no recorta donde importa: el doble suelo técnico calefactado con hasta 55,5 cm de altura útil recorre el vehículo, con acceso desde varias trampillas exteriores y desde el interior a través del banco del salón en L. En invierno marca la diferencia: agua, electricidad y calefacción viajan protegidas del frío y el suelo no transmite el hielo del asfalto. Los depósitos son generosos para el formato: 150 litros de agua limpia y 140 de grises, con la calefacción Truma Combi 6 de serie y la Alde de agua caliente como opción.

La distribución RB-LE se lee de delante atrás como un apartamento: salón en L con banco lateral abatible, cocina de esquina confort con frigorífico de 133 litros y la zona de noche con las camas individuales longitudinales de 200/190 x 85 cm. Entre medias, el baño de lujo con la ducha en el lado opuesto y el vestidor con armario de suelo a techo: intimidad real para cambiarse sin contorsionismos, algo insólito en una perfilada de menos de siete metros. Es un vehículo pensado para dos personas que viajan mucho y bien, no para llevar a toda la familia: las dos plazas para dormir son camas de verdad, de 200 cm de largo, no un apaño.

La base es el Fiat Ducato 2.2 Multijet de 140 CV (103 kW) con 350 Nm, tracción delantera y cambio manual de serie, en versión lightweight de 3.500 kg de MMA que se conduce con el carnet B. Quien quiera más puede optar al motor de 180 CV y al cambio automático de convertidor de par de 8 velocidades —la combinación que montan muchas unidades de exposición— y a la versión comfort de 4,25/4,5 toneladas para quien necesite más margen de carga. Con 6,99 m de largo, 2,27 m de ancho y 2,92 m de alto, es una perfilada que se mueve con soltura por carreteras secundarias y entra en áreas donde una integral lo pasa mal.

Del precio en España no hay cifra oficial: Carthago no publica PVP y cada concesionario fija el suyo. Como referencia de posicionamiento, la tarifa oficial británica parte de £96.040 para la versión Fiat lightweight 3,5 t, lo que la sitúa como la puerta de entrada a la filosofía Carthago por debajo de la chic c-line. Sus rivales naturales son la Hymer B-MC T 680 o la Dethleffs Trend T 7057 EB en distribuciones equivalentes: la Carthago se defiende con el doble suelo calefactado, el baño de lujo con vestidor y un premio europeo de diseño que ninguna rival puede enseñar.

Verificación de fuentes: denominación y versiones (lightweight 3,5 t / comfort 4,2 t, Fiat Ducato o Mercedes Sprinter), longitud (6,99 m Fiat), distribución (salón en L, cocina de esquina, baño de lujo con ducha y vestidor), doble suelo calefactado (55,5 cm), depósitos (150/140 l) y calefacción Truma Combi 6 proceden de la página oficial de la gama C1-tourer T en carthago.com. Medidas (6.990 x 2.270 x 2.920 mm), motorización Fiat Ducato 2.2 Multijet de 140 CV, camas individuales (200/190 x 85 cm), 2 plazas para dormir y MMA (3.500 kg) proceden de la ficha de una unidad 2025 del modelo publicada por un concesionario oficial. La tarifa «desde £96.040» es la oficial británica; Carthago España no publica PVP. La marca no publica la masa en orden de marcha, las plazas de viaje ni la carga útil de esta versión: esos campos quedan sin dato y no se calculan. Las fotos corresponden al C1-tourer T 145 RB-LE, denominación 2025/2026 del mismo modelo.

Perfil de comprador: el C-Tourer T 145 RB LE encaja con parejas viajeras que hacen kilómetros de verdad —escapadas largas, invernaje en el sur, rutas por Escandinavia— y quieren el confort de una integral (doble suelo calefactado, baño de lujo, camas de 200 cm) en un formato de 6,99 m que se conduce con el carnet B y se aparca sin dramas. No encaja con familias que necesiten cuatro plazas para dormir ni con quien busque el precio más bajo del segmento: es una Carthago, y se paga. Balance: la perfilada con la distribución más inteligente del mercado europeo —avalada por un premio internacional—, lastrada solo por la opacidad de precios habitual en la marca.`,
    pros: [
      "Distribución premiada: baño de lujo con ducha y vestidor + camas longitudinales en solo 6,99 m (European Innovation Award 2024)",
      "Doble suelo técnico calefactado con 55,5 cm de altura útil: uso invernal sin concesiones",
      "Camas individuales traseras de 200/190 x 85 cm: se duerme como en casa, no como en un apaño",
      "Versión lightweight de 3.500 kg: se conduce con el carnet B",
      "Fiat Ducato 2.2 de 140 CV con 350 Nm; opcional de 180 CV y automático de 8 velocidades",
    ],
    contras: [
      "Solo 2 plazas para dormir: no es un vehículo familiar",
      "Sin PVP oficial en España: cada concesionario fija su precio",
      "La marca no publica masa en orden de marcha, plazas de viaje ni carga útil de esta versión",
      "El cambio automático y el motor de 180 CV son opcionales con sobreprecio",
      "Nomenclatura confusa: c-tourer T 145 RB LE (2023-2024) = C1-tourer T 145 RB-LE (2025-2026)",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/carthago-c-tourer-t-145-rb-le-2026-precio-ficha-tecnica-ext.webp",
        alt: "Carthago C-Tourer T 145 RB LE, foto oficial en carretera",
        ancho: 1354,
        alto: 608,
      },
      {
        src: "/media/carthago-c-tourer-t-145-rb-le-2026-precio-ficha-tecnica-ext-2.webp",
        alt: "Carthago C-Tourer T 145 RB LE, foto oficial en paisaje",
        ancho: 2540,
        alto: 1817,
      },
      {
        src: "/media/carthago-c-tourer-t-145-rb-le-2026-precio-ficha-tecnica-interior.webp",
        alt: "Garaje trasero del C-Tourer T 145 RB LE, trampilla abierta",
        ancho: 1200,
        alto: 960,
      },
      {
        src: "/media/carthago-c-tourer-t-145-rb-le-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Garaje trasero del C-Tourer T 145 RB LE visto desde la trampilla opuesta",
        ancho: 1200,
        alto: 960,
      },
    ],
    analisisSlug: "carthago-c-tourer-t-145-rb-le-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato 2.2: revisión cada 2 años o 48.000 km (lo que ocurra antes, según plan Fiat)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 48.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Carthago (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Carthago",
    },
    euroncap: null,
    curiosidades:
      "El c-tourer 145 RB LE ganó en 2024 el European Innovation Award en la categoría «Layout» (distribución) que otorga la revista Reisemobil International: el jurado premió su concepto de habitáculo, que combina un baño de lujo con vestidor y camas individuales longitudinales en menos de 7 metros, algo inédito en esa longitud. Fuente: Carthago, página oficial de historia de la marca (https://www.carthago.com/en/about-carthago/history/?chash=62375ffe005cca33c21d5f27a07842fc&l=8&cHash=879ffe15fb6e90d00a45e96b5cb0705a).",
    fuenteNombre: "Carthago Reisemobilbau — página oficial de la gama C1-tourer T",
    fuenteUrl:
      "https://www.carthago.com/en/motorhomes/semi-integrated-motorhomes/c1-tourer-t/",
  },
];
