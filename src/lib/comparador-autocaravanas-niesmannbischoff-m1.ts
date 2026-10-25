// Autocaravanas Niesmann+Bischoff — lote Merlín 4 (18/10/2026). Corrección (b)(c)(d) 22:15 — textos lote 3.
// Datos verificados: web oficial niesmann-bischoff.com (página oficial del modelo iSmove; la marca
// no publica página dedicada a la implantación 6.9 E ni las plazas: plazas en «no oficial» desde
// distribuidores, plazasDormir sin dato). Precio base de prensa alemana ~114.850 € en Alemania
// MY2026, no oficial: sin precio oficial publicado.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_NIESMANNBISCHOFF_M1: Autocaravana[] = [
  {
    id: "niesmann-bischoff-ismove-69-e-2026-precio-ficha-tecnica",
    marca: "Niesmann+Bischoff",
    modelo: "iSmove 6.9 E",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // N+B no publica PVP oficial; no inventar
    potenciaCv: 180,
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
    imagen: "/media/niesmann-bischoff-ismove-69-e-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/niesmann-bischoff-ismove-69-e-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/niesmann-bischoff-ismove-69-e-2026-precio-ficha-tecnica-oficial-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6995,
    anchoMm: 2278,
    altoMm: 2835,
    pesoKg: null,
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // consenso de distribuidores («no oficial» en aprox); el fabricante no lo publica en su web
    plazasDormir: null, // la marca no publica las plazas para dormir
    parNm: null,
    traccion: null, // no publicada por el fabricante
    emisionesCo2: null,
    aprox: ["plazas", "etiquetaDgt"], // «no oficial»: plazas no publicadas por el fabricante, dato de distribuidores
    pros: [
      "Menos de 7 m y menos de 3,5 t con 7 soluciones patentadas: la premium compacta",
      "Cocina extensible y ducha corredera que duplica el baño: ingeniería alemana de verdad",
      "Cama basculante que desaparece en el techo: salón despejado durante el día",
      "Chasis AL-KO rebajado: centro de gravedad bajo y mejor comportamiento en carretera",
      "180 CV con cambio automático de 8 marchas: la más potente y refinada de la tanda",
    ],
    contras: [
      "Precio base de prensa ~114.850 € en Alemania: la más cara con diferencia",
      "Número de plazas no publicado por el fabricante: dato de distribuidores",
      "Mantenimiento premium: cada revisión cuesta más que en una generalista",
      "Sin PVP oficial en la web del fabricante",
      "Exclusividad con poca red: menos talleres familiarizados con sus sistemas",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/niesmann-bischoff-ismove-69-e-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Niesmann+Bischoff iSmove 6.9 E, vista tres cuartos (foto oficial de prensa)",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/niesmann-bischoff-ismove-69-e-2026-precio-ficha-tecnica-oficial-ext2.webp",
        alt: "Niesmann+Bischoff iSmove 6.9 E, vista frontal (foto oficial de prensa)",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/niesmann-bischoff-ismove-69-e-2026-precio-ficha-tecnica-oficial-interior.webp",
        alt: "Interior del Niesmann+Bischoff iSmove 6.9 E, salón y cocina (foto oficial de prensa)",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/niesmann-bischoff-ismove-69-e-2026-precio-ficha-tecnica-oficial-interior2.webp",
        alt: "Cocina del Niesmann+Bischoff iSmove 6.9 E (foto oficial de prensa)",
        ancho: 1200,
        alto: 800,
      },
    ],
    descripcion: "Hay marcas que hacen autocaravanas y marcas que hacen ingeniería con ruedas encima. Niesmann+Bischoff pertenece sin discusión al segundo grupo, y el iSmove 6.9 E es su demostración más elocuente: una perfilada de 6,99 metros y menos de 3,5 toneladas que presume de siete soluciones patentadas y de un lema que resume su filosofía, «menos de 3,5 toneladas, más allá de lo esperado». La marca alemana, integrada en el grupo Hymer, lleva décadas construyendo liners de precio astronómico; el iSmove es su intento de condensar esa obsesión por el detalle en un formato compacto que se conduce con el carnet B y se aparca sin pedir perdón. El 6.9 E es una de sus implantaciones, y conviene aclarar desde el principio un matiz importante: Niesmann+Bischoff publica una página oficial del modelo iSmove, pero no una ficha dedicada a la implantación 6.9 E ni el número de plazas, así que algunos datos de esta ficha —como las cuatro plazas de viaje— proceden del consenso de distribuidores y van marcados como no oficiales. Lo que sí publica la marca, y con orgullo, es el concepto. La cocina es el mejor ejemplo: en lugar de una cocina fija que ocupa sitio las 24 horas, el iSmove monta una cocina extensible con estante elevable eléctrico, superficie de trabajo ampliable y tabla de cortar extraíble, más un frigorífico de compresor de 138 litros integrado en un cajón con contenedores de tamaño estándar de restaurante. La idea es radical y sensata a la vez: una cocina que solo muestra su grandeza cuando se necesita y desaparece el resto del día. El baño sigue la misma lógica con una ducha corredera patentada que duplica el espacio disponible usando la misma superficie para dos cosas, y la cama basculante de diseño ultrafino se funde con el techo de antracita cuando no se usa, dejando un salón diáfano durante el día. Hasta el asiento trasero es un invento propio: una banqueta giratoria patentada que pasa de asiento de viaje seguro a sofá con un solo gesto, creando un salón cara a cara abierto, con opción de una quinta plaza enfrente. Son detalles que ninguna generalista ofrece, y que explican por qué esta marca tiene legión de seguidores dispuestos a pagar el sobreprecio. En dimensiones, los 6,99 m de largo, 2,28 m de ancho y 2,84 m de alto la sitúan en el segmento de las perfiladas compactas premium, manejable en carretera secundaria y en campings donde una integral de 7,5 m ya sufre. La mecánica declarada es un 180 CV con cambio automático de 8 marchas, la combinación más potente y refinada de esta tanda de fichas, sobre un chasis AL-KO rebajado que baja el centro de gravedad y mejora el comportamiento en curva y con viento lateral. La autonomía fuera de camping está cuidada al detalle alemán: depósito de agua limpia de 200 litros de serie, batería de litio de la célula de 150 Ah, depósito fijo de gas de 50 litros y panel solar opcional de 110 W con regulador MPPT. No es una autocaravana para ir de camping en camping enchufado: es para quien quiere perderse varios días por su cuenta. El interiorismo huye del plástico brillante: techo en antracita —que contra el tópico no empequeñece sino que acoge—, paredes de fieltro que mejoran la acústica y una puerta de entrada sin ventana, una decisión de diseño deliberada que la marca defiende como más elegante por dentro y por fuera. En precio hay que ser honestos: Niesmann+Bischoff no publica PVP en su web y la compra pasa por su red de distribuidores; la prensa alemana sitúa la base del iSmove en torno a 114.850 € en Alemania para el año modelo 2026, una cifra orientativa del mercado alemán, no una tarifa oficial, y en España el importe final lo marca cada distribuidor. Es, con diferencia, la propuesta más cara de esta tanda, y no pretende disimularlo: compite con las perfiladas premium centroeuropeas donde el argumento no es el precio sino la ingeniería. Esta iSmove es para el viajero exigente que ya ha tenido autocaravana, que sabe exactamente qué le molestaba de la anterior —la cocina que estorbaba, el baño enano, la cama que había que montar cada noche— y que está dispuesto a pagar por soluciones patentadas a problemas reales. No es para estrenarse en el mundillo ni para quien mira primero la etiqueta del precio: el mantenimiento premium y una red de talleres más reducida que la de las generalistas forman parte del peaje. Cómo lo verificamos: las medidas, el concepto de cocina extensible, la ducha corredera, la cama basculante, la banqueta giratoria, los 200 litros de agua, la batería de 150 Ah y el depósito fijo de gas proceden de la página oficial del modelo iSmove en niesmann-bischoff.com, revisada el 18/10/2026; las plazas de viaje son consenso de distribuidores y van marcadas como no oficiales porque la marca no las publica; el precio orientativo alemán es de prensa especializada, no tarifa oficial.",
    analisisSlug: "niesmann-bischoff-ismove-69-e-2026-analisis-opinion",
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
          nombre: "Revisión célula Niesmann+Bischoff (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 400,
        },
      ],
      costeAnualAproxEur: 800,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones del sector",
    },
    euroncap: null,
    notas:
      "«dato no oficial · en revisión»: las plazas de viaje (4) son consenso de distribuidores del modelo exacto; el fabricante no las publica. La marca tampoco publica página dedicada a la implantación 6.9 E (la fuente es la página oficial del modelo iSmove) ni las plazas para dormir. La etiqueta ambiental DGT «C» es una inferencia editorial (diésel Euro 6), no un dato del fabricante.",
    curiosidades:
      "En los premios Promobil readers' choice 2026 —votados por los lectores de la revista alemana—, Niesmann+Bischoff logró un triplete: el iSmove quedó segundo en la categoría premium, acompañando al Arto, que ganó la suya. Fuente: Niesmann+Bischoff (nota de prensa oficial): https://www.niesmann-bischoff.com/en/presse/promobil-readers-choice-awards-2026/",
    fuenteNombre: "Niesmann+Bischoff (web oficial) («no oficial»: plazas, dato de distribuidores; el fabricante no lo publica)",
    fuenteUrl: "https://www.niesmann-bischoff.com/en/models/ismove/",
  },
];
