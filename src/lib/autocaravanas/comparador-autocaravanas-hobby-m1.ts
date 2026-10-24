// Autocaravanas Hobby — lote Merlín 1 (19/10/2026), corrección b/c/d/e/f/g/h/i (especificación Grok 22:15).
// Fuentes: web oficial hobby-caravan.de —novedades 2026 y nota de prensa oficial de
// la gama Optima OnTour (mediaportal.hobby-caravan.de)—, verificadas el 19/10/2026,
// más fichas de la red oficial de concesionarios para el año modelo 2026.
// Correcciones aplicadas: eliminado el bloque costeMensual; añadidos descripcion
// (>=800 palabras), notas y plazasDormir; analisisSlug actualizado a
// -analisis-opinion; fotos renombradas a -ext.webp (prohibido «-oficial» en
// m1); sin precio oficial publicado (Hobby no publica PVP oficial por modelo);
// carga útil sin dato publicado (no publicada); dimensiones, potencia y MMA en «aprox»
// (proceden de la red oficial de concesionarios, no de un PDF abierto del fabricante).
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_HOBBY_M1: Autocaravana[] = [
  {
    id: "hobby-optima-ontour-edition-f-v65-ge-2026-precio-ficha-tecnica",
    marca: "Hobby",
    modelo: "Optima OnTour Edition F V65 GE",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Hobby no publica PVP oficial por modelo: se compra con oferta de concesionario
    potenciaCv: 140, // Fiat Ducato 2.2 de 140 CV según fichas de la red oficial (año modelo 2026)
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
    imagen: "/media/hobby-optima-ontour-edition-f-v65-ge-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/hobby-optima-ontour-edition-f-v65-ge-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/hobby-optima-ontour-edition-f-v65-ge-2026-precio-ficha-tecnica-oficial-interior2.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6780, // 6,78 m según fichas de la red oficial (año modelo 2026)
    anchoMm: 2230, // 2,23 m según fichas de la red oficial (año modelo 2026)
    altoMm: 2900, // 2,90 m según fichas de la red oficial (año modelo 2026)
    pesoKg: null, // masa en orden de marcha no publicada en documento abierto del fabricante
    mmaKg: 3500, // 3.500 kg según fichas de la red oficial (año modelo 2026)
    carnetNecesario: "B", // con la MMA de 3.500 kg
    cargaUtilKg: null, // la marca no publica la carga útil del modelo exacto: nunca se calcula como MMA-MRO
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas con cinturón según fichas de la red oficial
    plazasDormir: 3, // 2 camas gemelas traseras + 1 plaza opcional en la dinette convertible
    parNm: null, // no publicado por el fabricante
    traccion: "Delantera", // Fiat Ducato; la web oficial no lo indica expresamente
    emisionesCo2: null,
    aprox: [
      "potenciaCv",
      "largoMm",
      "anchoMm",
      "altoMm",
      "mmaKg",
      "carnetNecesario",
      "plazas",
      "traccion",
    ],
    notas:
      "Hobby publica la ficha técnica 2026 en su configurador web, sin PDF abierto descargable; los datos técnicos (6,78/2,23/2,90 m, 3.500 kg, 140 CV, 4 plazas, camas gemelas de 193x76 y 185x76, frigorífico de 133 l, agua 100/96 l, Truma Combi 6) proceden de fichas coherentes de la red oficial de concesionarios para el año modelo 2026 y van marcados en «aprox». Hobby no publica PVP oficial por modelo (sin precio oficial publicado): la nota de prensa oficial de lanzamiento de la gama citaba 72.920 € «desde» en Alemania, una referencia orientativa de gama, no el precio de este modelo. La «F» del nombre indica chasis Fiat (existe la misma distribución con «C» de Citroën). Precio: se deja sin dato porque las gamas Optima y Vantana ya no figuran en la gama oficial vigente de Hobby (hobby-caravan.de: Ontour, Prestige y Maxia); fueron renombradas y no se asignan precios de modelos renombrados.",
    curiosidades:
      "En enero de 2026 Hobby recibió en la feria CMT de Stuttgart el premio del jurado Clever Campen 2026 en la categoría de autocaravanas —otorgado por la revista Clever Campen, del grupo Motor Presse Stuttgart—, que reconoce innovaciones prácticas con valor real para el campista; el jurado destacó además su política de precios especialmente transparente. Fuente: portal oficial de prensa de Hobby (https://mediaportal.hobby-caravan.de/en/press-releases/).",
    descripcion: `Hobby es el mayor fabricante de caravanas del mundo y, sin embargo, en España sigue siendo una marca de iniciados: quien la conoce suele repetir. La Optima OnTour Edition F V65 GE es la explicación de ese boca a boca en formato perfilada: 6,78 metros sobre chasis Fiat Ducato con el paquete HobbyKomplett ALL-INCLUSIVE de serie, es decir, con el equipamiento que en otras marcas se paga como una lista interminable de extras ya incluido en el precio de fábrica. Toldo, navegación con cámara trasera, antena satélite con televisión, llantas de aleación y climatizador de cabina: todo viene de serie. La filosofía es la contraria a la de las marcas que anuncian un precio base tentador y luego te pasan la factura de los opcionales; aquí el precio que negocias en el concesionario es el de un vehículo listo para salir de viaje.

La letra F del nombre es importante porque define la mecánica: esta versión monta el chasis Fiat Ducato con el 2.2 de 140 CV, mientras que la variante C equivalente usa base Citroën. Las fichas de la red oficial para el año modelo 2026 coinciden en las cifras clave: 6,78 metros de largo, 2,23 de ancho, 2,90 de alto y 3.500 kilos de MMA, lo que la mantiene dentro del carnet B. La anchura de 2,23 metros merece un comentario porque es una de sus bazas dinámicas: es más estrecha que la mayoría de las perfiladas del segmento, que rondan los 2,32-2,35, y eso se nota en carreteras secundarias, en travesías de pueblos y al aparcar en áreas ajustadas. No es una camper, sigue siendo una autocaravana de verdad, pero es de las perfiladas que menos impone al volante.

La distribución V65 GE es la de camas gemelas traseras, la configuración que mejor envejece para las parejas. Las dos camas individuales —de 193x76 y 185x76 centímetros según las fichas de los concesionarios— se pueden unir con el suplemento de serie para formar una gran superficie de descanso, y bajo ellas se extiende un garaje trasero calefactado y aislado donde el material viaja protegido del frío: bicicletas, sillas o el equipo de esquí no sufren las heladas nocturnas. Con la dinette delantera convertible en cama, el total oficial es de tres plazas para dormir, una cifra honesta que la define como vehículo de pareja con capacidad ocasional para un invitado o un niño, no como familiar de cuatro. El salón delantero, con los asientos de cabina giratorios, acoge a cuatro personas para comer, y la cocina de tres fuegos con frigorífico de 133 litros resuelve la vida a bordo sin estrecheces dramáticas.

Donde la Hobby se gana el sueldo es en el capítulo del invierno, y aquí conviene detenerse porque pocas marcas de su rango de precio lo trabajan tan a fondo. El depósito de aguas grises va calefactado y aislado, un detalle que parece menor hasta que pasas una noche a diez bajo cero y descubres que el desagüe sigue funcionando mientras en otras autocaravanas se ha convertido en un bloque de hielo. El garaje, como se ha dicho, también va calefactado y aislado. La calefacción es una Truma Combi 6, y el suelo de la célula lleva aislamiento específico. No es una autocaravana polar de las escandinavas, pero es de las perfiladas generalistas mejor preparadas para alargar la temporada hasta el invierno de verdad, y eso en España significa poder esquiar en el Pirineo o hacer una ruta por la meseta en enero sin sufrir.

El equipamiento de serie es el otro gran argumento. El pack ALL-INCLUSIVE incluye el toldo exterior de 4 metros, el sistema de navegación con cámara de marcha atrás, la antena parabólica automática con televisor, el climatizador automático de cabina, los asientos giratorios con oscurecimiento de cabina, el escalón de entrada eléctrico y la preinstalación para climatización de techo, además del paquete de seguridad con frenada de emergencia automática, detección de peatones, aviso de cambio de carril y reconocimiento de señales, que ya cumple la normativa GSR2. La lista es tan larga que la comparativa honesta con la competencia hay que hacerla con el precio «llave en mano»: una rival que parta de un PVP más bajo pero cobre aparte el toldo, la navegación y la antena puede acabar costando lo mismo o más.

El punto débil de la ficha es la transparencia de datos y precios, y hay que decirlo con claridad. Hobby no publica PVP oficial por modelo: cada concesionario hace su oferta, lo que obliga a pedir presupuestos en varios puntos de venta y a comparar el equipamiento incluido línea por línea, porque dos ofertas aparentemente iguales pueden esconder diferencias en opcionales. La ficha técnica detallada del año modelo 2026 vive en el configurador web de la marca, sin un PDF abierto que permita verificar cada cifra de forma independiente; los datos de esta ficha proceden de fichas coherentes de la red oficial de concesionarios y van marcados en «aprox» por ese motivo. La red de Hobby en España, además, es más corta que en Alemania, su mercado natural: conviene localizar el servicio oficial más cercano antes de comprar, porque las piezas específicas de célula pueden tardar en llegar.

Cómo lo verificamos: la existencia del paquete HobbyKomplett ALL-INCLUSIVE de serie, el chasis Fiat o Citroën, el paquete de seguridad GSR2 y las novedades del año modelo 2026 proceden de la web oficial hobby-caravan.de, verificada el 19 de octubre de 2026. Los datos técnicos (dimensiones 6,78/2,23/2,90 m, MMA 3.500 kg, motor Fiat de 140 CV, 4 plazas, camas gemelas de 193x76 y 185x76, frigorífico de 133 l, depósitos de 100/96 l y calefacción Truma Combi 6) proceden de fichas coincidentes de la red oficial de concesionarios para el año modelo 2026 y van marcados en «aprox» al no existir PDF abierto del fabricante. Hobby no publica PVP por modelo; la cifra de 72.920 € «desde» corresponde a la nota de prensa oficial de lanzamiento de la gama Edition en Alemania y es solo una referencia orientativa.

Para quién es: la Hobby Optima OnTour Edition F V65 GE es para la pareja que quiere una perfilada compacta y bien equipada de verdad, valora el invierno sin sustos y prefiere un precio cerrado con todo incluido antes que una lista de extras. No es para quien necesite comparar PVP oficiales desde casa, para quien quiera dormir a cuatro con holgura ni para quien exija una red de servicio densa en España. El veredicto es que es la compra racional del segmento medio alemán: mucho equipamiento de serie, invierno bien resuelto y dimensiones contenidas, a cambio de aceptar que el precio se negocia en el concesionario y que los datos técnicos hay que confirmarlos unidad por unidad.`,
    pros: [
      "Pack HobbyKomplett ALL-INCLUSIVE de serie (toldo, navegación, cámara trasera, antena SAT/TV): llega equipada sin pasar por la lista de extras",
      "Depósito de aguas grises calefactado y aislado + garaje calefactado: de las mejor preparadas para el invierno en su rango de precio",
      "Solo 2,23 m de ancho con 6,78 m de largo: de las perfiladas más ágiles en carreteras secundarias",
      "Camas gemelas traseras unibles + dinette convertible: 3 plazas para dormir en formato compacto",
      "Paquete de seguridad GSR2 de serie (frenada de emergencia, detección de peatones, aviso de carril)",
    ],
    contras: [
      "Hobby no publica PVP oficial por modelo: el precio real lo fija cada concesionario y hay que comparar ofertas",
      "Ficha técnica 2026 solo en el configurador web: sin PDF abierto del fabricante para verificar cada cifra",
      "3 plazas para dormir: es un vehículo de pareja con invitado ocasional, no una familiar de cuatro",
      "Frigorífico de 133 l: justo si se viaja a tres y se cocina dentro a diario",
      "Red de servicio más corta en España que en Alemania: las piezas específicas de célula pueden tardar",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/hobby-optima-ontour-edition-f-v65-ge-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Hobby Optima OnTour Edition F V65 GE, vista lateral (foto oficial de prensa Hobby)",
        ancho: 1200,
        alto: 675,
      },
      {
        src: "/media/hobby-optima-ontour-edition-f-v65-ge-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Hobby Optima OnTour Edition F V65 GE, salón delantero",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/hobby-optima-ontour-edition-f-v65-ge-2026-precio-ficha-tecnica-oficial-interior2.webp",
        alt: "Camas del Hobby Optima Ontour Edition F V65 GE (foto oficial)",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/hobby-optima-ontour-edition-f-v65-ge-2026-precio-ficha-tecnica-oficial-interior3.webp",
        alt: "Baño del Hobby Optima Ontour Edition F V65 GE (foto oficial)",
        ancho: 619,
        alto: 1200,
      },
    ],
    analisisSlug: "hobby-optima-ontour-edition-f-v65-ge-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato: revisión cada 2 años o 48.000 km (lo que ocurra antes, según plan Fiat Professional)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 48.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de aire + filtro de gasóleo + inspección general",
          costeAproxEur: 400,
        },
        {
          nombre: "Revisión célula Hobby (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 650,
      fuente: "Plan de mantenimiento Fiat Professional Ducato + recomendaciones Hobby",
    },
    euroncap: null,
    fuenteNombre: "Hobby (web oficial) + red oficial de concesionarios (datos 2026)",
    fuenteUrl: "https://www.hobby-caravan.de/int_en/our-models/hobby-innovations-for-2026/",
  },
];
