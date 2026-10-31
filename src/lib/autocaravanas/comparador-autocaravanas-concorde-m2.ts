// Autocaravanas Concorde — lote Merlín 2 (19/10/2026).
// Datos de la lista oficial de precios Concorde 2027 (Credo/Carver/Charisma):
// fuenteNombre/fuenteUrl con la URL exacta del PDF oficial.
// Precio: tarifa oficial en Alemania (desde 212.250 €, IVA 19 % incl.), marcado
// en `aprox`; Concorde España no publica PVP. Sin portada+3 no entra: 4 fotos
// webp de un anuncio real de una Credo 791 LI (Autohaus Pauli, vía caraworld).
// Curiosidad con fuente en `curiosidades`. noindex lo gestiona Grok al integrar.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_CONCORDE_M2: Autocaravana[] = [
  {
    id: "concorde-credo-791-li-2026-precio-ficha-tecnica",
    marca: "Concorde",
    modelo: "Credo 791 LI",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: 212250, // tarifa oficial en Alemania (desde 212.250 €, IVA 19 % incl.); Concorde España no publica PVP
    potenciaCv: 156, // Iveco Daily 50C16 2.3 de 156 CV (115 kW), de serie
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
      "/media/concorde-credo-791-li-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial:
      "/media/concorde-credo-791-li-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/concorde-credo-791-li-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7990, // lista oficial de precios Concorde 2027 (7,99 m)
    anchoMm: 2330, // lista oficial de precios Concorde 2027 (2,33 m)
    altoMm: 3210, // lista oficial de precios Concorde 2027 (3,21 m)
    pesoKg: 4260, // masa en orden de marcha, lista oficial de precios 2027
    mmaKg: 5200, // lista oficial de precios Concorde 2027
    carnetNecesario: "C1",
    cargaUtilKg: 940, // Zuladung publicada en la lista oficial de precios 2027
    consumo: null,
    consumoUnidad: null,
    plazas: 2, // lista oficial: 2 de serie / 3 o 4 opcionales
    plazasDormir: 2, // camas individuales traseras de 2 x 2.000 x 1.010 mm; cama basculante opcional de 2.000 x 1.200 mm
    parNm: 380, // Iveco Daily 2.3: 380 Nm (dato oficial Iveco/Concorde)
    traccion: "Trasera", // Iveco Daily, tracción trasera con ruedas gemelas
    emisionesCo2: null,
    aprox: ["Precio de tarifa en Alemania: desde 212.250 € (IVA 19 % incluido)"],
    notas:
      "El precio (212.250 €) es la tarifa oficial «desde» en Alemania de la lista de precios Concorde 2027 para la Credo 791 LI (IVA del 19 % incluido); Concorde España no publica PVP, así que el precio final en España lo fija cada concesionario. Medidas, masas, plazas, motor y equipamiento proceden de la lista oficial de precios 2027. El cambio es manual de 6 velocidades de serie; el automático es opcional.",
    descripcion: `La Concorde Credo 791 LI es la puerta de entrada al mundo de los liners de Concorde, la marca alemana que lleva más de cuatro décadas definiendo lo que significa viajar en una autocaravana de lujo. Con 7,99 metros de largo, la 791 LI es el liner más compacto del catálogo de Schlüsselfeld: una integral de gran formato que concentra en menos de ocho metros la filosofía constructiva de sus hermanos mayores —el Carver, el Charisma o el imponente Centurion— pero con una masa máxima de 5.200 kg y un precio de tarifa que parte de 212.250 euros en Alemania, muy por debajo de lo que cuesta entrar en la gama alta de la marca. Es, en la práctica, el Concorde para quien quiere el escudo de la marca y su calidad de construcción sin saltar a los camiones de 7,5 toneladas.

La distribución 791 LI apuesta por la fórmula que nunca falla en el segmento premium: camas individuales longitudinales traseras de 2.000 x 1.010 mm cada una, salón central con cocina en L y baño completo, y cabina integrada con el parabrisas panorámico característico de la marca. Las dos camas traseras pueden unirse con un colchón adicional para formar una gran superficie de descanso, y Concorde ofrece como opción la cama basculante eléctrica delantera de 2.000 x 1.200 mm, que eleva las plazas para dormir a cuatro sin robar un centímetro al salón durante el día. Las plazas de viaje homologadas son dos de serie, ampliables a tres o cuatro con las banquetas opcionales, un planteamiento pensado para parejas que viajan con la casa a cuestas y, ocasionalmente, con nietos o amigos.

La base es el Iveco Daily 50C16 con el motor turbodiésel de 2,3 litros y cuatro cilindros: 115 kW (156 CV) y 380 Nm de par, homologado Euro VI e, con cambio manual de seis velocidades y tracción trasera con ruedas gemelas. Es una mecánica de origen industrial, pensada para trabajar cargada durante cientos de miles de kilómetros, y Concorde la completa con un arsenal de ayudas a la conducción que viene de serie: control de crucero adaptativo con Stop & Go, asistente de mantenimiento de carril, frenada de emergencia con detección de peatones, control de presión de neumáticos, asistente de cansancio del conductor y el sistema Traction Plus con ayuda al descenso. La masa en orden de marcha declarada es de 4.260 kg y la carga útil oficial de 940 kg, una cifra generosa para un liner de este tamaño que permite cargar el garaje —con puertas de 1.170 x 950 mm a la derecha y 500 x 750 mm a la izquierda— sin andar haciendo equilibrios con la báscula. Con 5.200 kg de MMA, en España se necesita el carnet C1.

Donde la Credo 791 LI se distancia de cualquier integral generalista es en la construcción. La célula emplea la técnica de sándwich de aluminio Solidtherm de Concorde, con uniones de pared totalmente aisladas y sin puentes térmicos, y —esto es lo que la marca considera su firma— el concepto One-Level: un suelo continuo y sin escalones desde la cabina hasta el dormitorio, posible gracias al doble suelo técnico que recorre todo el vehículo y que alberga los depósitos y las instalaciones protegidos del frío. El depósito de combustible es de 90 litros y el sistema eléctrico incluye alternador de 220 A con convertidor de carga de 45 A para las baterías de la célula. El parabrisas es de vidrio laminado con lámina PVB que filtra hasta el 98 % de los rayos UV y amortigua el ruido, y la puerta de entrada, de 630 mm de ancho, se abre con código numérico y mando a distancia integrado en la llave de contacto.

Por dentro, la 791 LI respira el lujo discreto de Concorde: muebles de madera con frentes altos en acabado brillante, encimera de cocina mineral con fregadero de acero inoxidable integrado, cajones con servo-soft, el práctico mueble extraíble de farmacia bajo la encimera y una vitrina de cristal iluminada para la cristalería. El baño apuesta por el inodoro de porcelana con cisterna fija de 160 litros —una rareza en el segmento que elimina el trasiego del cassette— y la ducha separada con puerta corredera de cristal esmerilado. La calefacción corre a cargo del sistema de agua caliente, dimensionado para el uso invernal serio: la Credo está concebida como un vehículo de cuatro estaciones, no como una autocaravana de agosto.

Con 7,99 m de largo, 2,33 m de ancho y 3,21 m de alto, la 791 LI se mueve con una agilidad impropia de un liner: su anchura, 50 mm inferior a la de los Concorde grandes, se nota en carreteras secundarias y al aparcar. Sus rivales naturales son el Morelo Loft 78 L, el Carthago liner-for-two y el Niesmann+Bischoff Flair en su versión más corta: frente a ellos, la Credo juega la baza del precio de acceso a la marca y de una red de servicio que en Alemania es legendaria. En España, eso sí, hay que contar con la realidad de la marca: Concorde no publica tarifa española y cada unidad se configura a medida, por lo que el precio final depende del concesionario y del equipamiento elegido.

Verificación de fuentes: medidas (7,99 x 2,33 x 3,21 m), batalla (4,10 m), masas (5.200 kg de MMA, 4.260 kg en orden de marcha, 940 kg de carga útil), motor Iveco Daily 50C16 de 115 kW/156 CV y 380 Nm, camas traseras de 2 x 2.000 x 1.010 mm, cama basculante opcional de 2.000 x 1.200 mm y precio de 212.250 € (IVA alemán del 19 % incluido) proceden de la lista oficial de precios Concorde 2027 (Credo/Carver/Charisma). El equipamiento de serie y las ayudas a la conducción se han contrastado con la misma lista y con la página oficial del modelo. La marca no publica tarifa para España: el precio final lo fija cada concesionario. Las fotos corresponden a una Concorde Credo 791 LI real anunciada en Alemania.

Perfil de comprador: la Credo 791 LI encaja con parejas que buscan su primer liner —o su último, el definitivo— y que valoran la calidad constructiva alemana por encima de los gadgets: viajeros de larga distancia, usuarios de invierno y quienes hacen del vehículo su segunda residencia. No encaja con quien necesite cuatro plazas de viaje de serie, ni con quien busque una integral de menos de 7,5 metros para moverse por pueblos. Tampoco con quien exija carnet B: los 5.200 kg obligan al C1. Balance: el acceso más racional al universo Concorde, con construcción de liner auténtico y una carga útil que pocos rivales igualan, a cambio de asumir la motorización de 156 CV —suficiente, pero sin alardes— y la opacidad de precios habitual en el segmento premium alemán.`,
    pros: [
      "Liner auténtico Concorde por 212.250 € de tarifa: el acceso más asequible a la marca",
      "Carga útil oficial de 940 kg: de las mejores del segmento en menos de 8 metros",
      "Concepto One-Level con doble suelo técnico: sin escalones y apta para invierno serio",
      "Iveco Daily 50C16 de 156 CV con tracción trasera y ayudas a la conducción de serie",
      "Inodoro de porcelana con cisterna fija de 160 l y camas individuales traseras",
    ],
    contras: [
      "5.200 kg de MMA: exige carnet C1, no vale el B",
      "156 CV justos para 5,2 toneladas cargadas en puertos largos",
      "Sin PVP oficial en España: el precio final lo fija cada concesionario",
      "Solo 2 plazas de viaje de serie; la 3ª y 4ª son opcionales",
      "El cambio automático es opcional con sobreprecio",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/concorde-credo-791-li-2026-precio-ficha-tecnica-ext.webp",
        alt: "Concorde Credo 791 LI, vista delantera tres cuartos",
        ancho: 1024,
        alto: 768,
      },
      {
        src: "/media/concorde-credo-791-li-2026-precio-ficha-tecnica-ext-2.webp",
        alt: "Concorde Credo 791 LI, vista lateral",
        ancho: 1024,
        alto: 768,
      },
      {
        src: "/media/concorde-credo-791-li-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Concorde Credo 791 LI, pasillo hacia la cocina y el dormitorio",
        ancho: 1024,
        alto: 1365,
      },
      {
        src: "/media/concorde-credo-791-li-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Baño de la Concorde Credo 791 LI con inodoro de porcelana y lavabo",
        ancho: 1024,
        alto: 768,
      },
    ],
    analisisSlug: "concorde-credo-791-li-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Iveco Daily: 1 años / 40.000 km",
      revisiones: [
        {
          nombre: "Revisión Iveco Daily (1 año / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de combustible + inspección general",
          costeAproxEur: 400,
        },
        {
          nombre: "Revisión célula Concorde (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 300,
        },
      ],
      costeAnualAproxEur: 700,
      fuente: "Plan de mantenimiento Iveco Daily + recomendaciones Concorde",
    },
    euroncap: null,
    curiosidades:
      "La Credo 791 LI mantiene el concepto «One-Level» de Concorde: un suelo continuo sin escalones desde la cabina hasta el dormitorio, algo inusual en un liner de menos de 8 metros, posible gracias al doble suelo técnico que recorre todo el vehículo y protege del frío las instalaciones. Fuente: página oficial del modelo (https://www.concorde.eu/en/models/credo/).",
    fuenteNombre: "Concorde Reisemobile GmbH — Lista de precios oficial 2027",
    fuenteUrl:
      "https://www.concorde.eu/wp-content/uploads/2026/08/concorde-pl-2027-credo-carver-charisma-de.pdf",
  },
];
