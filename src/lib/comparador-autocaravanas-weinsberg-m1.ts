// Autocaravanas Weinsberg — lote Merlín 1 (18/10/2026). Corrección (b)(c)(d) 22:15 — textos lote 3.
// Datos verificados: weinsberg.com (web oficial, página del modelo 600 MQ revisada el 18/10:
// 599 × 205 × 258 cm, 140 CV, 4 personas, 3 camas —4 máx.—, masa en orden de marcha 2.750 kg,
// MMA 3.500 kg, «Maximum payload» 241 kg publicado por la marca con nota al pie, garantía de
// estanqueidad de 10 años, frigorífico de compresor de 95 l, Truma Combi 4, agua 102/90 l).
// Weinsberg no publica PVP: sin precio oficial publicado (remite al configurador/concesionario).
// F9b (19/10/2026): 4 fotos oficiales (2 ext + 2 int, web oficial weinsberg.com) + curiosidades.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_WEINSBERG_M1: Autocaravana[] = [
  {
    id: "weinsberg-carabus-grey-edition-fire-600-mq-2026-precio-ficha-tecnica",
    marca: "Weinsberg",
    modelo: "CaraBus Grey Edition [FIRE] 600 MQ",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: null, // Weinsberg no publica PVP oficial; remite al configurador/concesionario
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
    imagen: "/media/weinsberg-carabus-grey-edition-fire-600-mq-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/weinsberg-carabus-grey-edition-fire-600-mq-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/weinsberg-carabus-grey-edition-fire-600-mq-2026-precio-ficha-tecnica-oficial-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990,
    anchoMm: 2050,
    altoMm: 2580,
    pesoKg: 2750, // modelo base sin equipamiento opcional, con equipamiento básico (oficial)
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: 241, // "Maximum payload" publicado por Weinsberg para el 600 MQ (con nota al pie en su ficha)
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // oficial («Number of persons allowed in driving operation: 4»)
    plazasDormir: 3, // oficial («Beds: 3»; 4 máx. con cama de invitada opcional)
    parNm: null, // no publicado por Weinsberg
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["etiquetaDgt"],
    pros: [
      "Edición especial FIRE con equipamiento completo de serie: llantas de aleación, climatizador de cabina, mosquitera y escalón eléctrico sin pagar extras",
      "Con 5,99 m cabe en una plaza de aparcamiento larga: la camper que se usa a diario sin sufrir",
      "Batería de habitáculo de 95 Ah y nevera de compresor de 95 l: equilibrio razonable para escapadas de fin de semana",
      "Neumáticos all-season de serie: sale del asfalto sin pasar por el taller a cambiar ruedas",
      "Cama doble trasera de 194 × 152 cm más cama en el grupo de asientos: 3 camas de serie en menos de 6 metros",
    ],
    contras: [
      "Sin PVP oficial publicado: Weinsberg remite al configurador y el precio final lo marca cada concesionario",
      "Baño compacto de camper de 5,99 m: la ducha es más un apaño que un cuarto de baño de verdad",
      "Calefacción Truma Combi 4 de gas: suficiente en otoño, justa en pleno invierno de montaña",
      "Carga útil publicada de solo 241 kg: con 4 ocupantes y la edición FIRE equipada hay que mirar la báscula",
      "Depósito de gasóleo de 60 l de serie, ampliable a 90 l solo como opción: de serie la autonomía entre repostajes es menor",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/weinsberg-carabus-grey-edition-fire-600-mq-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Weinsberg CaraBus Grey Edition [FIRE] 600 MQ, vista exterior tres cuartos",
        ancho: 1200,
        alto: 515,
      },
      {
        src: "/media/weinsberg-carabus-grey-edition-fire-600-mq-2026-precio-ficha-tecnica-oficial-ext2.webp",
        alt: "Weinsberg CaraBus Grey Edition [FIRE] 600 MQ, vista frontal exterior",
        ancho: 1200,
        alto: 630,
      },
      {
        src: "/media/weinsberg-carabus-grey-edition-fire-600-mq-2026-precio-ficha-tecnica-oficial-interior.webp",
        alt: "Interior del Weinsberg CaraBus Grey Edition [FIRE] 600 MQ, salón con tapicería bordada [FIRE]",
        ancho: 1200,
        alto: 833,
      },
      {
        src: "/media/weinsberg-carabus-grey-edition-fire-600-mq-2026-precio-ficha-tecnica-oficial-interior2.webp",
        alt: "Interior del Weinsberg CaraBus Grey Edition [FIRE] 600 MQ, cocina y cama trasera",
        ancho: 1200,
        alto: 833,
      },
    ],
    descripcion: `El Weinsberg CaraBus Grey Edition [FIRE] 600 MQ se resume en una frase: una edición especial que viene llena de serie. Weinsberg, la marca de acceso del grupo Knaus Tabbert, ha cogido su furgón de 5,99 metros y le ha colgado el apellido FIRE para cargarlo de equipamiento sin pasar por la lista de opcionales: llantas de aleación, climatizador manual de cabina, puerta mosquitera, escalón eléctrico de 70 cm, neumáticos all-season, cámara trasera y centro multimedia de 7 pulgadas con Apple CarPlay y Android Auto. Es la estrategia de las ediciones especiales bien hechas: pagar una vez y no volver a pensar en extras.

Los datos proceden de la página oficial del modelo 600 MQ en weinsberg.com, revisada el 18/10/2026. El CaraBus mide 5,99 m de largo, 2,05 m de ancho y 2,58 m de alto: cabe en una plaza de aparcamiento larga y se usa a diario sin sufrir, para ir a comprar, aparcar en el centro o salir el viernes sin planificar. La base es el Fiat Ducato 2.2 de 140 CV con cambio manual de seis marchas y tracción delantera, con 3.500 kg de MMA que lo dejan en el carnet B. La distribución apuesta por la cama doble transversal trasera de 194 × 152/140 cm —siempre hecha— más la cama del grupo de asientos de 180 × 70 cm: tres camas de serie según la ficha oficial, cuatro como máximo con la cama de invitada opcional, para cuatro plazas de viaje oficiales. Es el esquema clásico del camper familiar compacto y funciona porque no pide nada al usuario: de día salón, de noche camas hechas.

La vida a bordo tiene el equipamiento justo y bien elegido: frigorífico de compresor de 95 litros con congelador de 12,8 —eficiente y sin rejillas exteriores—, batería de habitáculo de 95 Ah, cocina de dos fuegos, depósito de agua limpia de 102 litros y de grises de 90, y calefacción Truma Combi 4 a gas con mando digital CP Plus. El baño es el compromiso inevitable de los 5,99 m: compacto, con ducha más apañada que espaciosa, aunque con detalles cuidados como la bandeja con textura y el tendedero plegable.

Y aquí hay que hablar del dato que define a este modelo: la carga útil. Weinsberg publica para el 600 MQ un «Maximum payload» de 241 kg, con nota al pie en su ficha —es un concepto propio de la marca, con su definición particular—, sobre una masa en orden de marcha oficial de 2.750 kg y una MMA de 3.500 kg. Son 241 kg oficiales, no calculados, pero son pocos: con cuatro ocupantes y la edición FIRE equipada, la báscula manda y hay que elegir bien el equipaje. Es el peaje de un camper equipado hasta arriba en 3,5 toneladas, y el comprador debe asumirlo con los ojos abiertos. A cambio, Weinsberg ofrece una garantía de estanqueidad de 10 años, una de las más largas del mercado, que dice mucho de la confianza en la construcción.

En precio, la marca no publica PVP y remite al configurador y a la red de concesionarios: no hay cifra oficial que dar y el importe final lo marca cada punto de venta. Sus rivales son los campers de 6 metros de las generalistas —franceses, italianos y alemanes—, frente a los que el FIRE compite con su dotación de serie y su estética gris con gráficos de la edición. Es para parejas o familias pequeñas que quieren un camper de uso diario muy equipado de serie, que valoran la garantía de diez años y que viajan ligeros de equipaje. No es para quien carga con todo —esos 241 kg son un techo bajo— ni para quien necesita ducha separada o calefacción diésel de serie. Cómo lo verificamos: las medidas (599 × 205 × 258 cm), los 140 CV, las 4 plazas de viaje, las 3 camas de serie, la masa de 2.750 kg, la MMA de 3.500 kg, el «Maximum payload» de 241 kg, el frigorífico de 95 litros, la Truma Combi 4 y la garantía de 10 años proceden de la página oficial del modelo 600 MQ en weinsberg.com, revisada el 18/10/2026; la carga útil es la publicada por la marca con su definición particular, no un cálculo nuestro; Weinsberg no publica PVP, por eso la ficha no incluye precio. La conclusión es que el FIRE es la edición especial honesta: todo el equipamiento de serie y diez años de garantía de estanqueidad, a cambio de una carga útil de 241 kg que obliga a viajar ligero y a contar cada kilo.

La red del grupo Knaus Tabbert es otro argumento silencioso: concesionarios por toda Europa y recambios garantizados durante años, algo que las marcas pequeñas no pueden ofrecer. Y la garantía de estanqueidad de 10 años no es marketing: es el fabricante poniendo por escrito su confianza en la construcción, y en un vehículo donde la humedad es el enemigo número uno, ese papel vale dinero. Para el comprador que piensa en la reventa, un Weinsberg con historial de mantenimiento y garantía vigente se vende con facilidad.`,
    analisisSlug: "weinsberg-carabus-grey-edition-fire-600-mq-2026-analisis-opinion",
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
          nombre: "Revisión célula Weinsberg (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 650,
      fuente: "Plan de mantenimiento Fiat Professional Ducato + recomendaciones Weinsberg",
    },
    euroncap: null,
    notas:
      "El «Maximum payload» de 241 kg es el publicado por Weinsberg para el 600 MQ, con nota al pie y definición particular de la marca en su ficha oficial; no es un cálculo. Plazas para dormir: 3 de serie (4 máx. con cama de invitada opcional). La etiqueta ambiental DGT «C» es una inferencia editorial (diésel Euro 6), no un dato del fabricante: dato no oficial · en revisión.",
    curiosidades:
      "Hasta la tapicería lleva el apellido de la edición: la Grey Edition [FIRE] incluye de serie la tapicería especial «FUSION GREY» con el bordado [FIRE] en los respaldos, además de los gráficos exteriores específicos «EDITION [FIRE]». Fuente: ficha oficial del modelo 600 MQ en weinsberg.com (https://weinsberg.com/en-uk/camper-vans/grey-edition-fire/layout-plans/600-mq/).",
    fuenteNombre: "Weinsberg (web oficial)",
    fuenteUrl: "https://weinsberg.com/en-uk/camper-vans/grey-edition-fire/layout-plans/600-mq/",
  },
];
