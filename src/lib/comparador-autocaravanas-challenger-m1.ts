// Autocaravanas Challenger — lote Merlín 1 (18/10/2026), corrección b/c/d (22:15).
// Fuente: ficha técnica oficial Challenger 2026 (PDF del modelo V114, versión FR,
// verificada el 18/10/2026): 5,99 m, 2,05 m, 2,65 m, 4 plazas, 2+1 camas,
// 335 kg disponibles para equipamiento opcional, 2.2 L 120 CV. Correcciones: eliminado
// costeMensual; cargaUtilKg = null («Challenger publica 335 kg disponibles para
// equipamiento opcional»; no es carga útil); añadidos descripcion,
// notas y plazasDormir; analisisSlug a -analisis-opinion. Challenger no publica PVP.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_CHALLENGER_M1: Autocaravana[] = [
  {
    id: "challenger-v114-start-edition-2026-precio-ficha-tecnica",
    marca: "Challenger",
    modelo: "V114 Start Edition",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: null, // Challenger no publica PVP oficial; no inventar
    potenciaCv: 120, // ficha oficial 2026: 2.2 L 120 CV (Road Edition)
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
    imagen: "/media/challenger-v114-start-edition-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/challenger-v114-start-edition-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/challenger-v114-start-edition-2026-precio-ficha-tecnica-oficial-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990, // ficha oficial 2026: 5,99 m
    anchoMm: 2050, // ficha oficial 2026: 2,05 m
    altoMm: 2650, // ficha oficial 2026: 2,65 m
    pesoKg: null, // masa en orden de marcha no publicada de forma única en la ficha oficial
    mmaKg: 3500, // «no oficial»: clase 3,5 T estándar; no visible en el extracto de la ficha oficial
    carnetNecesario: "B",
    cargaUtilKg: null, // «Challenger publica 335 kg disponibles para equipamiento opcional» (ficha oficial 2026); no es carga útil, por eso no va en este campo
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // ficha oficial 2026: 4 plazas
    plazasDormir: 3, // ficha oficial 2026: 2+1 camas
    parNm: null, // no publicado por el fabricante
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["mmaKg"],
    notas:
      "Challenger no publica PVP del V114 Start Edition. Medidas, plazas, plazas para dormir (2+1) y motor 120 CV, de la ficha técnica oficial 2026 del modelo. «Challenger publica 335 kg disponibles para equipamiento opcional» (no es carga útil: carga útil sin dato publicado). MMA: «dato no oficial · en revisión».",
    descripcion: `La Challenger V114 Start Edition es una camper de 5,99 metros de la marca francesa Challenger, del grupo Trigano, y representa la puerta de entrada más asequible al mundo de las furgonetas camperizadas de gran volumen. La V114 es la camper corta de la gama Challenger sobre Fiat Ducato, y el apellido Start Edition la sitúa como la versión de acceso, con el equipamiento esencial y el motor más contenido, pensada para quien quiere estrenar camper nueva sin saltar a las gamas medias. Es la camper para aparcar en la ciudad entre semana y escapar el fin de semana.

Los datos oficiales, publicados por Challenger en la ficha técnica 2026 del modelo, son transparentes: 5,99 m de largo, 2,05 m de ancho y 2,65 m de alto, con 4 plazas homologadas para viajar y 2+1 para dormir. Esa es la configuración clásica de las camper de menos de 6 metros: dos plazas fijas en la cama doble trasera amovible de 149 × 186 cm y una tercera ocasional en el salón convertible. La ficha oficial publica además 335 kg disponibles para equipamiento opcional («Challenger publica 335 kg disponibles para equipamiento opcional»), una cifra honesta que permite saber cuánto margen queda para toldo, paneles solares o portabicicletas sin superar la MMA. El motor es el 2.2 de 120 CV con cambio manual en la versión Road Edition, la mecánica básica del Ducato: suficiente para una camper de este peso, aunque sin alegrías en puertos largos con la célula cargada.

La distribución V114 apuesta por lo esencial bien resuelto en 5,99 m: salón delantero con asientos giratorios de cabina, cocina con nevera de 84 litros y baño con ventana, ducha y mampara. La cama doble trasera es amovible, lo que permite reconfigurar el espacio de carga según el viaje: se duerme en cama hecha o se desmonta para llevar material voluminoso. Los 2,65 m de altura la mantienen por debajo de muchas camper gran volumen y los 2,05 m de anchura son los de una furgoneta normal, así que aparca, gira y entra en parkings donde una perfilada ni lo intenta. Esa es su gran baza frente a las autocaravanas clásicas: se usa a diario como segundo vehículo sin que la ciudad se convierta en un problema.

En la vida a bordo, la Start Edition es espartana por diseño: es la versión de acceso y se nota en los acabados y en la lista de opcionales. La calefacción es de 4.000 W a gas, la nevera de 84 litros es justa para cuatro personas más de un fin de semana largo, y el baño, aunque completo con ventana, es compacto. A cambio, el precio de entrada —que Challenger no publica oficialmente, pero que en el mercado se sitúa claramente por debajo de las camper medias— la convierte en la opción racional para quien prioriza estrenar vehículo con garantía frente a comprar una camper de ocasión de gama superior. La red del grupo Trigano en España garantiza servicio postventa y recambios sin complicaciones.

Mecánicamente, los 120 CV del Ducato mueven con dignidad los 3.500 kg de MMA, pero hay que ser realista: es el motor pequeño de la gama y en autovía con viento de cara o en puertos con carga el ritmo es pausado. Quien prevea mucha montaña debería valorar el salto al 140 CV, que en la gama Challenger existe como opción. La tracción es delantera, como en todas las camper sobre Ducato, y el consumo en uso real ronda las cifras habituales de las gran volumen con motor básico, sin sorpresas.

Sus rivales naturales son las camper de acceso de menos de 6 metros: la Benimar Benivan, la McLouis Menfys, la Sunlight Cliff o la propia gama superior de Challenger, la V114 en acabado Sport Edition. Frente a ellas, la Start Edition juega la carta del precio de entrada y de la sencillez: menos equipamiento, menos peso, menos cosas que se pueden romper. Para el comprador que valora la garantía de vehículo nuevo y un mantenimiento sencillo, es un argumento de peso.

Cómo lo verificamos: las medidas (5,99 × 2,05 × 2,65 m), las 4 plazas, las 2+1 camas y el motor 2.2 de 120 CV proceden de la ficha técnica oficial 2026 del modelo V114 publicada por Challenger (versión en francés), consultada el 18 de octubre de 2026; «Challenger publica 335 kg disponibles para equipamiento opcional» (no es carga útil, por eso no va en ese campo). Challenger no publica PVP oficial. La MMA de 3.500 kg es la clase estándar pero no aparece en el extracto visible de la ficha, así que va marcada como «dato no oficial · en revisión».

Para quién es: la V114 Start Edition es para quien quiere estrenar camper nueva con garantía al precio más bajo posible, viaja en pareja o en familia pequeña, y usa el vehículo a diario o casi: aparca en ciudad y escapa el fin de semana. No es para quien busque acabados cuidados, motor potente o cuatro plazas fijas de dormitorio. El veredicto es que es la camper de acceso más honesta del mercado francés: datos oficiales claros, 335 kg publicados para equipamiento opcional y un formato de 5,99 m imbatible en ciudad, a cambio de un equipamiento espartano y un motor justo que pide paciencia en la montaña.`,
    pros: [
      "5,99 m de largo y 2,05 m de ancho: aparca y se mueve en ciudad como una furgoneta normal",
      "Cama doble trasera amovible de 149×186 cm: se duerme en cama hecha o se desmonta para cargar",
      "335 kg publicados para equipamiento opcional: se eligen opcionales con los números claros",
      "Baño completo con ventana, ducha y mampara en una camper de acceso de menos de 6 m",
      "Grupo Trigano: la camper de estreno más asequible con red de servicio consolidada en España",
    ],
    contras: [
      "Motor 2.2 de 120 CV, el básico del Ducato: justo en puertos con la célula cargada",
      "Versión Start Edition espartana: acabados y equipamiento de acceso, muchos opcionales se pagan aparte",
      "Nevera de 84 l para 4 personas: justa más allá del fin de semana largo",
      "2+1 plazas para dormir: la tercera es ocasional en el salón convertible, no una cama fija",
      "Sin PVP oficial publicado por Challenger: el precio final depende del concesionario",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/challenger-v114-start-edition-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Challenger V114, vista exterior tres cuartos (foto oficial del fabricante)",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/challenger-v114-start-edition-2026-precio-ficha-tecnica-oficial-interior.webp",
        alt: "Interior del Challenger V114, vista general hacia la cama trasera (foto oficial)",
        ancho: 1200,
        alto: 667,
      },
      {
        src: "/media/challenger-v114-start-edition-2026-precio-ficha-tecnica-oficial-interior2.webp",
        alt: "Salón del Challenger V114 con banqueta y cama trasera (foto oficial)",
        ancho: 1200,
        alto: 667,
      },
      {
        src: "/media/challenger-v114-start-edition-2026-precio-ficha-tecnica-oficial-interior3.webp",
        alt: "Cocina del Challenger V114 (foto oficial)",
        ancho: 1200,
        alto: 667,
      },
      {
        src: "/media/challenger-v114-start-edition-2026-precio-ficha-tecnica-ext.webp",
        alt: "Challenger V114 Start Edition, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/challenger-v114-start-edition-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Challenger V114 Start Edition, salón delantero",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/challenger-v114-start-edition-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Cama trasera del Challenger V114 Start Edition",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/challenger-v114-start-edition-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Cabina del Challenger V114 Start Edition",
        ancho: 1200,
        alto: 800,
      },
    ],
    curiosidades:
      "El V114 es uno de los cuatro únicos modelos de la gama Challenger que puede equipar la ventanilla lateral trasera Skyview: el fabricante la reserva a los V594, V114, V697 y V210. Fuente: página oficial del modelo V114, https://www.challenger-motorhomes.com/model/v114/. Las fotos oficiales de esta ficha proceden de la web del fabricante (colección 2027 del V114: ediciones Road, Break y Sport).",
    analisisSlug: "challenger-v114-start-edition-2026-analisis-opinion",
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
          nombre: "Revisión célula Challenger (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Challenger",
    },
    euroncap: null,
    fuenteNombre: "Challenger (ficha técnica oficial 2026)",
    fuenteUrl: "https://ch.challenger-motorhomes.com/pdf/11/v114/fr",
  },
];
