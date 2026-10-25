// Autocaravanas Adria — lote Merlín 2 (19/10/2026).
// Datos de la ficha oficial de la gama Matrix Plus 2026 (vía concesionario
// Vanomobil, BE): fuenteNombre/fuenteUrl con la URL exacta del PDF oficial.
// Precio: tarifa oficial en Bélgica (desde 92.490 €), marcado en `aprox`;
// Adria España no publica PVP. Sin portada+3 no entra: 4 fotos webp 1440px
// de un anuncio real de un Matrix Plus 670 SL (Rinta-Jouppi, Finlandia).
// Curiosidad con fuente en `curiosidades`. noindex lo gestiona Grok al integrar.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_ADRIA_M2: Autocaravana[] = [
  {
    id: "adria-matrix-plus-670-sl-2026-precio-ficha-tecnica",
    marca: "Adria",
    modelo: "Matrix Plus 670 SL",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 92490, // tarifa oficial en Bélgica (desde 92.490 €); Adria España no publica PVP
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
      "/media/adria-matrix-plus-670-sl-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial:
      "/media/adria-matrix-plus-670-sl-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/adria-matrix-plus-670-sl-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7480, // ficha oficial de gama Matrix Plus 2026 (7,48 m)
    anchoMm: 2290, // ficha oficial de gama Matrix Plus 2026 (2,29 m)
    altoMm: 2900, // ficha oficial de gama Matrix Plus 2026 (2,90 m)
    pesoKg: null, // masa en orden de marcha no publicada para esta versión
    mmaKg: 3500, // ficha oficial de gama
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil de esta versión
    consumo: null,
    consumoUnidad: null,
    plazas: 5, // ficha oficial de gama: 5 plazas de viaje
    plazasDormir: 6, // ficha oficial de gama: camas gemelas traseras + cama basculante eléctrica delantera
    parNm: 350, // Fiat Ducato 2.2 Multijet 140: 350 Nm (dato oficial Fiat)
    traccion: "Delantera", // Fiat Ducato, tracción delantera
    emisionesCo2: null,
    aprox: ["Precio de tarifa en Bélgica: desde 92.490 €"],
    notas:
      "El precio (92.490 €) es la tarifa oficial «desde» en Bélgica que publica el concesionario Vanomobil para la gama Matrix Plus 2026; Adria España no publica PVP, así que el precio final en España lo fija cada concesionario. Medidas, plazas, MMA y equipamiento proceden de la ficha oficial de gama. La masa en orden de marcha y la carga útil de esta versión concreta no están publicadas: quedan sin dato y no se calculan.",
    descripcion: `La Adria Matrix Plus 670 SL es la perfilada que más vende Adria en Europa, y con razón: es la versión que mejor resume la filosofía de la nueva generación Matrix. Con 7,48 metros de largo, la 670 SL es una semiintegrada de formato familiar que apuesta por la distribución que nunca falla: camas gemelas traseras sobre un garaje de doble acceso, cocina central, baño dividido con ducha separada y un salón delantero en L coronado por la cama basculante eléctrica. Cinco plazas de viaje homologadas y seis para dormir la convierten en una de las perfiladas con mejor ratio de habitabilidad por euro de su segmento.

El salto de la gama Plus respecto a la Matrix a secas está en el equipamiento y en los detalles de construcción. La carrocería mantiene la estructura «Comprex» de Adria —paneles de poliéster con aislamiento y suelo de madera contrachapada sellada—, pero la Plus añade la nueva pared trasera con iluminación LED, la gran ventana panorámica y, sobre todo, el doble suelo técnico: un falso suelo calefactado donde van las instalaciones de agua y electricidad, accesible desde dentro y desde el garaje. En invierno marca la diferencia: las tuberías no se congelan y el suelo no transmite el frío del asfalto. El techo panorámico sobre la cabina y las ventanas con marco de la zona habitable completan una célula pensada para usarse los doce meses del año, no solo en agosto.

La base es el Fiat Ducato 2.2 Multijet de 140 CV (103 kW) con 350 Nm de par, cambio manual de 6 velocidades y tracción delantera, homologado Euro 6e. Es la motorización que Adria monta de serie en la Plus: suficiente para mover con soltura los 3.500 kg de MMA con la célula cargada, y con el conocido ECO-PACK de Fiat (start-stop y alternador inteligente) para contener el consumo en ruta. Quien quiera más puede optar al 180 CV y al cambio automático de 9 velocidades, una combinación que en una perfilada de este tamaño se nota sobre todo en autopista y en puertos largos. De serie trae un arsenal de ayudas que hace cinco años era opcional: airbags de conductor y acompañante, ABS con EBD, ESP con asistente de arranque en pendiente, control de tracción, control de crucero, aire acondicionado en cabina, asientos de cabina giratorios y regulables en altura, y cámara trasera. La tapicería de serie es la textil «Arno», con opciones de cuero en catálogo.

Por dentro, la 670 SL respira el diseño escandinavo que Adria lleva años perfeccionando: muebles altos con frentes brillantes, iluminación LED indirecta, y la cocina en L con fregadero, cocina de tres fuegos y frigorífico de 142 litros con congelador separado. El baño dividido —WC con cassette de descarga eléctrica a un lado y ducha separada al otro— permite que una persona se duche mientras otra usa el lavabo, un detalle que las familias agradecen cada mañana. Las camas gemelas traseras (convertibles en cama doble transversal) descansan sobre somieres de láminas con colchones Evopore, y el garaje bajo ellas, calefactado y con toma de 230 V, traga bicicletas, sillas y la mesa de camping sin pelearse con las cinchas. La calefacción es la Truma Combi 6E (gas + eléctrica), con la opción del suelo radiante eléctrico para quien la use en invierno de verdad.

Con 7,48 m de largo, 2,29 m de ancho y 2,90 m de alto, la 670 SL se mueve en la franja alta de las perfiladas familiares: necesita sus metros en el área, pero a cambio ofrece un interior que no pide nada a una integral. Los 3.500 kg de MMA la dejan en el carnet B, aunque conviene vigilar la carga útil real una vez equipada con toldo, portabicis y depósito de agua lleno: con seis plazas para dormir, la tentación de cargarla hasta arriba es real. Adria ofrece la homologación a 3.650 o 4.400 kg para quien necesite más margen, con el correspondiente cambio de carnet.

Del precio en España no hay cifra oficial: Adria no publica PVP y cada concesionario fija el suyo. Como referencia de posicionamiento, la tarifa oficial en Bélgica parte de 92.490 € para la gama Matrix Plus 2026, lo que la sitúa por encima de la Matrix Axess (la gama de acceso) y por debajo de la Matrix Supreme con chasis Mercedes. Sus rivales naturales en el mercado español son la Dethleffs Trend 6717, la Bürstner Lyseo TD 690 G y la Chausson 640 Titanium en distribuciones de camas gemelas equivalentes: la Adria se defiende con el doble suelo técnico de serie y una de las mejores redes de servicio de Europa.

Verificación de fuentes: medidas (7,48 x 2,29 x 2,90 m), plazas (5 de viaje / 6 para dormir), MMA (3.500 kg), motorización Fiat Ducato 140 CV y equipamiento de serie proceden de la ficha oficial de la gama Matrix Plus 2026 publicada por el concesionario Vanomobil (Bélgica) y de anuncios de unidades nuevas del modelo 2026 con el mismo equipamiento. La tarifa «desde 92.490 €» es la oficial en Bélgica; Adria España no publica PVP. La marca no publica la masa en orden de marcha ni la carga útil de esta versión: esos campos quedan sin dato y no se calculan. Las fotos corresponden a un Adria Matrix Plus 670 SL real anunciado en Finlandia.

Perfil de comprador: la Matrix Plus 670 SL encaja con familias de 4 a 6 miembros que buscan una perfilada para usar todo el año, valoran el doble suelo calefactado y las camas gemelas traseras, y prefieren la red de servicio de Adria —la marca eslovena del grupo Trigano con más de medio siglo fabricando—. No encaja con quien busque una perfilada compacta de menos de 7 metros ni con quien necesite un PVP cerrado de fábrica para comparar. Balance: la perfilada familiar más equilibrada del catálogo Adria, con el argumento diferencial del doble suelo técnico de serie, lastrada únicamente por la opacidad de precios habitual en la marca.`,
    pros: [
      "Distribución 670 SL probadísima: camas gemelas traseras + cama basculante eléctrica = 6 plazas para dormir",
      "Doble suelo técnico calefactado de serie: instalaciones protegidas del frío, ideal para uso invernal",
      "Fiat Ducato 2.2 de 140 CV con 350 Nm y arsenal de ayudas a la conducción de serie",
      "Baño dividido con ducha separada y cocina en L con frigorífico de 142 l",
      "3.500 kg de MMA: se conduce con el carnet B",
    ],
    contras: [
      "Sin PVP oficial en España: cada concesionario fija su precio y comparar cuesta",
      "7,48 m de largo: no es la perfilada más manejable en pueblos y áreas pequeñas",
      "La marca no publica la masa en orden de marcha ni la carga útil de esta versión",
      "El cambio automático y el motor de 180 CV son opcionales con sobreprecio",
      "Con seis ocupantes, la carga útil real hay que vigilarla de cerca",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/adria-matrix-plus-670-sl-2026-precio-ficha-tecnica-ext.webp",
        alt: "Adria Matrix Plus 670 SL, vista delantera tres cuartos",
        ancho: 1440,
        alto: 1080,
      },
      {
        src: "/media/adria-matrix-plus-670-sl-2026-precio-ficha-tecnica-ext-2.webp",
        alt: "Adria Matrix Plus 670 SL, vista trasera tres cuartos con portabicicletas",
        ancho: 1440,
        alto: 1080,
      },
      {
        src: "/media/adria-matrix-plus-670-sl-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Adria Matrix Plus 670 SL, salón con mesa y asientos giratorios",
        ancho: 1440,
        alto: 1080,
      },
      {
        src: "/media/adria-matrix-plus-670-sl-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Salón de la Adria Matrix Plus 670 SL visto desde la zona de descanso",
        ancho: 1440,
        alto: 1080,
      },
    ],
    analisisSlug: "adria-matrix-plus-670-sl-2026-analisis-opinion",
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
          nombre: "Revisión célula Adria (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Adria",
    },
    euroncap: null,
    curiosidades:
      "La Matrix es la autocaravana más vendida de Adria en Europa y la 670 SL su distribución estrella: con la nueva generación, la gama Plus estrenó una pared trasera rediseñada con iluminación LED y ventana panorámica, además del doble suelo técnico calefactado que antes solo montaban las gamas altas. Fuente: ficha oficial de la gama Matrix Plus 2026 (https://ct.vanomobil.be/api/products/78/pdf/en).",
    fuenteNombre: "Adria Mobil — ficha oficial de gama (vía Vanomobil, BE)",
    fuenteUrl: "https://ct.vanomobil.be/api/products/78/pdf/en",
  },
];
