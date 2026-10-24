// Autocaravanas Mobilvetta — lote Merlín 1 (18/10/2026). Corrección (b)(c)(d) 22:15 — textos lote 3.
// Datos verificados: mobilvetta.it (web oficial del modelo; la web muestra la temporada anterior,
// pero la ficha del K-Yacht Tekno Line 86 sigue vigente). Motor Fiat Ducato de 140 CV y longitud
// oficial de 7,45 m (corrección 4, 18/10/2026: la cifra de 180 CV era de anuncios, no oficial).
// Mobilvetta no publica PVP: sin precio oficial publicado, sin inventar. Carga útil no publicada: null.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_MOBILVETTA_M1: Autocaravana[] = [
  {
    id: "mobilvetta-k-yacht-tekno-line-86-2026-precio-ficha-tecnica",
    marca: "Mobilvetta",
    modelo: "K-Yacht Tekno Line 86",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: null, // Mobilvetta no publica PVP (anuncios 2026: 109.888–121.050 € según equipamiento)
    potenciaCv: 140, // oficial mobilvetta.it (Fiat Ducato 140 CV); la cifra de 180 CV era de anuncios, no oficial
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
    imagen: "/media/mobilvetta-k-yacht-tekno-line-86-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/mobilvetta-k-yacht-tekno-line-86-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/mobilvetta-k-yacht-tekno-line-86-2026-precio-ficha-tecnica-oficial-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7450, // oficial mobilvetta.it (7,45 m)
    anchoMm: 2350, // oficial mobilvetta.it (2,35 m)
    altoMm: 2980,
    pesoKg: null, // masa en orden de marcha no publicada
    mmaKg: 3500, // opcional chasis pesado AL-KO de 4.500 kg
    carnetNecesario: "B",
    cargaUtilKg: null, // no publicada por la marca
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // oficial mobilvetta.it (4 pasajeros)
    plazasDormir: 4, // oficial mobilvetta.it (4 camas)
    parNm: null, // no publicado por el fabricante
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["etiquetaDgt"],
    pros: [
      "Motor Fiat Ducato de 140 CV (oficial): mecánica probada y consumo contenido para una integral de 7,45 m",
      "Techo panorámico SkyDome de 100 × 80 cm de serie: luz cenital en el salón sin pagar extra",
      "Frigorífico de compresor de 174 l: enfría rápido y rinde bien con calor, ideal para el sur de Europa",
      "Sistema Truma iNetX con app: control de clima y niveles de la célula desde el móvil",
      "Garantía de estanqueidad de 10 años: la más larga de las fichas publicadas hasta ahora",
    ],
    contras: [
      "7,45 m de largo y 2,98 m de alto: la más grande del lote, solo para conductores acostumbrados",
      "Masa en orden de marcha no publicada: con 3.500 kg de MMA y ese tamaño, la carga útil es una incógnita",
      "Mobilvetta no publica PVP: los anuncios 2026 se mueven entre ~110.000 y ~121.000 €",
      "Chasis pesado AL-KO de 4.500 kg como opción: tienta, pero obliga a sacarse el carnet C1",
      "Tekni-Box y electrónica embarcada: más sistemas que pueden fallar lejos del servicio oficial",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/mobilvetta-k-yacht-tekno-line-86-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Mobilvetta K-Yacht Tekno Line 86, vista trasera (foto oficial)",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/mobilvetta-k-yacht-tekno-line-86-2026-precio-ficha-tecnica-oficial-interior.webp",
        alt: "Salón comedor del Mobilvetta K-Yacht Tekno Line 86 (foto oficial)",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/mobilvetta-k-yacht-tekno-line-86-2026-precio-ficha-tecnica-oficial-interior2.webp",
        alt: "Cama basculante del Mobilvetta K-Yacht Tekno Line 86 (foto oficial)",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/mobilvetta-k-yacht-tekno-line-86-2026-precio-ficha-tecnica-oficial-interior3.webp",
        alt: "Cocina del Mobilvetta K-Yacht Tekno Line 86 (foto oficial)",
        ancho: 1200,
        alto: 960,
      },
    ],
    descripcion: "La Mobilvetta K-Yacht Tekno Line 86 es una autocaravana integral italiana de 7,45 metros que juega en la liga de las grandes: frontal de una sola pieza sin cabina separada, parabrisas panorámico y una célula pensada para que cuatro personas vivan a bordo con holgura de verdad, no con la holgura de catálogo que luego se queda en nada. Mobilvetta la encuadra en su gama K-Yacht Tekno Line, la familia más tecnológica de la marca, donde el apellido «Tekno» no es decorativo: de serie trae el sistema Truma iNetX con control por aplicación móvil, techo panorámico SkyDome de 100 × 80 cm sobre el salón y una dotación electrónica que la acerca más a un apartamento conectado que a la autocaravana clásica. Es, en definitiva, la propuesta de Mobilvetta para quien quiere una integral de presencia y equipamiento sin saltar a las marcas alemanas de precio inalcanzable. Con 7,45 m de largo, 2,35 m de ancho y 2,98 m de alto, la 86 impone respeto en la carretera y exige un conductor que ya sepa lo que es mover casi siete metros y medio. A cambio, el interior respira: la distribución apuesta por camas gemelas traseras de tamaño generoso y un salón cara a cara con sofás grandes que, según la propia marca, se transforman en dos plazas de viaje orientadas hacia delante, de modo que la zona de día no es un salón de mentira sino el corazón social del vehículo. Los colchones son de espuma con memoria sobre somieres de láminas, un detalle que se agradece en viajes largos porque la espalda nota la diferencia entre dormir bien y «dormir en la auto». La cocina presume de encimera de piedra acrílica de una sola pieza y cajones bien resueltos, y el baño apuesta por una bandeja de ducha sobredimensionada en ABS reforzado con espacio para moverse sin contorsionismos. El techo panorámico practicable de 100 × 80 cm con mosquitera, de serie, inunda el salón de luz cenital y ventila sin necesidad de abrir ventanas laterales: en verano marca la diferencia entre una célula habitable y un invernadero. En marcha, la base es el Fiat Ducato 2.2 de 140 CV con chasis AL-KO, una combinación sobradamente probada en el sector. Los 140 CV son la potencia oficial que publica Mobilvetta para este modelo —conviene decirlo claro porque durante un tiempo circularon por anuncios de concesionarios cifras de 180 CV que no están confirmadas por la marca— y mueven con dignidad los 3.500 kg de MMA, aunque nadie debería esperar prestaciones deportivas: es un vehículo para viajar a ritmo tranquilo, que es como se viaja bien en autocaravana. La tracción es delantera y con esos 3.500 kg basta el carnet B, un punto importante porque su rivalidad natural está llena de integrales que coquetean con los 4.000 kg. Eso sí, existe la opción del chasis pesado AL-KO de 4.500 kg para quien necesite más margen de carga, con la contrapartida conocida: a partir de 3.500 kg hace falta el carnet C1. La masa en orden de marcha no la publica Mobilvetta, así que la carga útil real es una incógnita que cada comprador debería despejar pidiendo el pesaje de la unidad concreta antes de firmar; con este tamaño y este nivel de equipamiento, es el dato que más conviene verificar. La vida a bordo está marcada por los packs opcionales, que merecen un repaso porque definen el precio final tanto como la base: el Pack Visio incluye radio 2DIN con Apple CarPlay y Android Auto más cámara trasera; el Pack Arctic monta la calefacción Truma Combi 6D E diésel con parabrisas calefactado para el invierno de verdad; el Pack Media añade router wifi y televisor inteligente de 32 pulgadas; y el Pack Energy Plus suma inversor de 2.000 W, dos baterías de litio de 100 Ah y alimentador de 22 A para una autonomía eléctrica seria. De serie, la garantía de estanqueidad «Mobilvetta 10 Years Body Integrity Privilege» cubre diez años contra infiltraciones siempre que se pase por la red autorizada en los plazos del libro de garantía: es una de las coberturas más largas del mercado y dice mucho de la confianza de la marca en su construcción de fibra de vidrio y aluminio. En precio, Mobilvetta no publica PVP oficial y remite a su red, así que no hay cifra de fábrica que dar: los anuncios de unidades 2026 en concesionarios se mueven entre unos 109.888 y unos 121.050 € según equipamiento, una horquilla orientativa del mercado, no una tarifa. Sus rivales naturales son las integrales europeas de 7,3 a 7,6 m sobre Ducato —las alemanas suelen pedir más dinero por menos equipamiento de serie, y las francesas compiten en precio pero rara vez ofrecen diez años de garantía de estanqueidad—. Esta K-Yacht es para parejas o familias de cuatro que buscan una integral con presencia, mucha luz interior y tecnología de serie, que ya tienen experiencia con vehículos grandes y que valoran la garantía a largo plazo por encima de la última moda estética. No es para quien empieza: 7,45 m y casi 3 m de alto piden manos curtidas, y quien dude entre esta y una perfilada más manejable probablemente sea más feliz con la perfilada. Cómo lo verificamos: los datos técnicos —140 CV, 7,45 × 2,35 m, 4 pasajeros y 4 camas, chasis AL-KO, SkyDome de 100 × 80 cm y garantía de diez años— proceden de la página oficial del modelo en mobilvetta.it, revisada el 18/10/2026; la horquilla de precios orientativa sale de anuncios coincidentes de concesionarios de unidades 2026 y se presenta como tal, no como tarifa oficial, porque la marca no publica PVP.",
    analisisSlug: "mobilvetta-k-yacht-tekno-line-86-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato: 2 años / 48.000 km",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 48.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de aire + filtro de gasóleo + inspección general",
          costeAproxEur: 400,
        },
        {
          nombre: "Revisión célula Mobilvetta (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 650,
      fuente: "Plan de mantenimiento Fiat Professional Ducato + recomendaciones Mobilvetta",
    },
    euroncap: null,
    notas:
      "La etiqueta ambiental DGT «C» es una inferencia editorial (diésel Euro 6), no un dato publicado por el fabricante: dato no oficial · en revisión.",
    curiosidades:
      "La familia K-Yacht Tekno de Mobilvetta fue seleccionada en 2018 para el ADI Design Index —el anuario del diseño industrial italiano— en la categoría Mobility Design, codeándose con Ferrari, Alfa Romeo, Ducati, Maserati y Vespa, y quedó nominada al prestigioso premio Compasso d'Oro 2020. Fuente: Mobilvetta (web oficial): https://mobilvetta.it/es/estilo-italiano-mobilvetta-producto-seleccionado-por-adi/",
    fuenteNombre: "Mobilvetta (web oficial)",
    fuenteUrl: "https://mobilvetta.it/en/tipologia/a-class/k-yacht-tekno-line-86/",
  },
];
