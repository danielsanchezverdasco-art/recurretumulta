// Autocaravanas Bürstner — lote Merlín 1 (18/10/2026), corrección b/c/d (22:15).
// Fuente: página oficial del modelo en buerstner.com (verificada el 18/10/2026) con
// tabla técnica oficial: 699 cm, 230 cm, 295 cm, 3.500 kg, MRO 2.990 kg ±5 %,
// 160 kg de masa para equipamiento opcional, 4-5 plazas, 2-5 camas, 82.530 CHF.
// Correcciones: eliminado costeMensual; pesoKg corregido a 2.990; cargaUtilKg = 160
// (publicada por la marca); precio en «aprox» con nota «precio de tarifa en Suiza»;
// añadidos descripcion, notas y plazasDormir; analisisSlug a -analisis-opinion.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_BURSTNER_M1: Autocaravana[] = [
  {
    id: "burstner-lyseo-td-690-g-2026-precio-ficha-tecnica",
    marca: "Bürstner",
    modelo: "Lyseo TD 690 G",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 82530, // PVP en Suiza (82.530 CHF) publicado en buerstner.com; puede diferir en España
    potenciaCv: 140, // «no oficial»: motorización estándar; no visible en el extracto de la página oficial
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
    imagen: "/media/burstner-lyseo-td-690-g-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial: "/media/burstner-lyseo-td-690-g-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/burstner-lyseo-td-690-g-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6990, // página oficial: 699 cm
    anchoMm: 2300, // página oficial: 230 cm
    altoMm: 2950, // página oficial: 295 cm
    pesoKg: 2990, // página oficial: masa en orden de marcha 2.990 kg (±5 %; rango 2.841–3.140 kg)
    mmaKg: 3500, // página oficial: 3.500 kg
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca publica 160 kg de masa para equipamiento opcional, que no es carga útil: va en null
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // página oficial: 4-5 plazas
    plazasDormir: 2, // página oficial: 2 camas de serie (máx. 5 con opcionales)
    parNm: null, // no publicado por Bürstner
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde", "potenciaCv"],
    notas:
      "Precio de tarifa en Suiza (82.530 CHF, PVP publicado en buerstner.com); puede diferir en España. Medidas, masas y plazas, de la tabla técnica oficial del modelo. Los 160 kg publicados son masa para equipamiento opcional, no carga útil: el campo cargaUtilKg va en null. Potencia: «dato no oficial · en revisión».",
    descripcion: `La Bürstner Lyseo TD 690 G es una autocaravana perfilada de 6,99 metros que ocupa un lugar especial en el catálogo de la marca alemana: la gama Lyseo TD es la perfilada con cama basculante sobre el salón, el formato que permite dormir hasta cinco personas en menos de 7 metros sin recurrir a la capuchina. La «G» de la denominación identifica la distribución con camas gemelas traseras, la más demandada por las parejas que quieren dormir cada noche en camas hechas. Es una perfilada pensada para viajar todo el año, con el aislamiento «winterproof» y el suelo Thermofloor que Bürstner ofrece de serie y que pocas generalistas incluyen sin pasar por caja.

Los datos oficiales, publicados por Bürstner en la página del modelo, son completos y permiten comprar con la calculadora en la mano: 699 cm de largo, 230 cm de ancho y 295 cm de alto, con una MMA de 3.500 kg que permite conducirla con el carnet B. La masa en orden de marcha es de 2.990 kg con una tolerancia de ±5 % (rango real entre 2.841 y 3.140 kg según la configuración), y la marca publica además la masa reservada para equipamiento opcional: 160 kg. Ojo: esos 160 kg son la masa máxima para opcionales, un concepto distinto de la carga útil, así que la ficha no calcula ni publica carga útil y ese campo va en null. Con 160 kg de margen para extras hay que elegir el equipamiento con la calculadora en la mano, porque entre el toldo, la batería auxiliar, el portabicicletas y el aire acondicionado el margen se agota deprisa. Las plazas homologadas son de 4 a 5 para viajar y de 2 a 5 para dormir: de serie duermen dos en las camas gemelas traseras, y con la cama basculante sobre el salón y la quinta plaza opcionales se llega a cinco.

Las camas gemelas traseras, de 199 y 190 cm con colchones de espuma multizona, son el corazón de la distribución: se duerme sin montar ni desmontar nada, y debajo queda un garaje generoso para el equipo voluminoso. El baño combina un diseño inteligente con mampara pivotante que mantiene seca la zona de cambio durante la ducha, y la cocina monta un frigorífico de 142 litros más 15 de congelador, una capacidad de nevera grande en una perfilada de menos de 7 metros. El depósito de agua limpia es de 100 litros y la calefacción es combinada de gas y agua caliente, un conjunto pensado para aguantar varios días lejos de áreas de servicio. El techo y el suelo son de GRP (poliéster reforzado con fibra de vidrio), materiales que resisten el granizo y envejecen mejor que el aluminio tradicional.

Mecánicamente, la base es el Fiat Ducato 2.2 de 140 CV, el motor estándar de la gama, con tracción delantera. Es el único motor de serie, y con la autocaravana cargada y un remolque detrás se puede quedar justo en puertos de montaña exigentes; quien prevea ese uso debería valorar las opciones de mayor potencia en el pedido. El puesto de conducción del Ducato, con sus ayudas electrónicas modernas, hace que los 6,99 m se lleven con soltura en carretera, aunque los 2,30 m de anchura y 2,95 m de altura obligan a planificar la ruta en cascos antiguos y bajo techados bajos.

Del precio hay que hablar con precisión geográfica: Bürstner publica en su web un PVP de 82.530 francos suizos para este modelo, así que va marcado como «precio de tarifa en Suiza» y puede diferir en España por impuestos y política comercial. Como referencia, la tarifa alemana verificada anteriormente se situaba en 80.750 euros, lo que coloca a la Lyseo TD 690 G por encima de muchas perfiladas equivalentes de generalistas francesas o españolas: se paga el plus alemán de aislamiento, construcción y equipamiento de serie para todo el año. Sus rivales directas son la Dethleffs Trend 690 con camas gemelas, la Adria Coral 670 SL y la Benimar Mileo equivalente, todas en la franja de los 7 metros.

Cómo lo verificamos: las medidas, las masas (2.990 kg en orden de marcha, 3.500 kg de MMA), los 160 kg de masa para equipamiento opcional, las plazas (4-5) y las camas (2 de serie, 5 máximo) proceden de la tabla técnica oficial publicada por Bürstner en la página del modelo en buerstner.com, consultada el 18 de octubre de 2026. El precio es el PVP publicado por la marca para Suiza. La potencia de 140 CV es la motorización estándar de la gama pero no aparece en el extracto visible de la página, así que va marcada como «dato no oficial · en revisión».

Para quién es: la Lyseo TD 690 G es para parejas —o familias que acepten la cama basculante— que quieren una perfilada alemana pensada para viajar todo el año de verdad, con aislamiento serio y garaje grande, y que están dispuestas a pagar el plus frente a las generalistas. No es para quien busque el precio más bajo del segmento ni para quien necesite cinco plazas de serie sin opcionales. El veredicto es que es una de las perfiladas de 7 metros mejor resueltas para el uso invernal, con datos oficiales transparentes que permiten comprar sin sorpresas de peso, lastrada solo por un precio superior a la media y un motor base justo para los usos más exigentes.`,
    pros: [
      "Aislamiento «winterproof» y suelo Thermofloor de serie: de las pocas perfiladas pensadas para rodar todo el año en serio",
      "Dos camas individuales traseras (199 y 190 cm) con colchones de espuma multizona: se duerme sin montar ni desmontar nada",
      "Frigorífico de 142 l más 15 l de congelador: capacidad de nevera grande en una perfilada de menos de 7 m",
      "Agua limpia de 100 l y calefacción combinada de gas y agua caliente: aguanta varios días lejos de áreas de servicio",
      "Techo y suelo de GRP con 5.ª plaza y cama basculante disponibles como opción: crece con la familia",
    ],
    contras: [
      "Precio de tarifa en Suiza (82.530 CHF): la factura la sitúa por encima de muchas perfiladas equivalentes",
      "El motor de 140 CV es el único de serie: con la auto cargada se queda justo en puertos de montaña",
      "Con 2,30 m de ancho y 2,95 m de alto, aparcar en cascos antiguos o bajo techados bajos exige planificar la ruta",
      "La 5.ª plaza y la cama basculante son opcionales: la configuración familiar completa encarece bastante el precio final",
      "160 kg para equipamiento opcional según el fabricante: hay que elegir extras con calculadora en mano para no pasarse de 3.500 kg",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/burstner-lyseo-td-690-g-2026-precio-ficha-tecnica-ext.webp",
        alt: "Bürstner Lyseo TD 690 G, vista tres cuartos delantera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/burstner-lyseo-td-690-g-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Bürstner Lyseo TD 690 G, salón y dormitorio",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "burstner-lyseo-td-690-g-2026-analisis-opinion",
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
          nombre: "Revisión célula Bürstner (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 650,
      fuente: "Plan de mantenimiento Fiat Professional Ducato + recomendaciones Bürstner",
    },
    euroncap: null,
    fuenteNombre: "Bürstner (web oficial)",
    fuenteUrl: "http://www.buerstner.com/ch/de/wohnmobile/teilintegrierte/lyseo-td",
  },
];
