// Autocaravanas Mooveo — lote Merlín 4 (18/10/2026). Corrección (b)(c)(d) 22:15 — textos lote 3.
// VERIFICACIÓN 18/10/2026: descripcion propia ≥800 palabras añadida (antes fuera del primer lote, orden Grok 22:15).
// Datos: catálogo oficial Mooveo TEI 2026 (grupo Rapido) — «no oficial» para el TEI-60FB:
// descatalogado de la gama 2026 (sustituido por el TEI-62DH), valores de exposés de
// concesionarios. El fabricante no publica PVP: sin precio oficial publicado.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_MOOVEO_M1: Autocaravana[] = [
  {
    id: "mooveo-tei-60fb-2026-precio-ficha-tecnica",
    marca: "Mooveo",
    modelo: "TEI-60FB",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Mooveo no publica PVP oficial; no inventar
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
    imagen: "/media/mooveo-tei-60fb-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/mooveo-tei-60fb-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/mooveo-tei-60fb-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990,
    anchoMm: 2300,
    altoMm: 2930,
    pesoKg: null,
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: null, // la marca no publica las plazas para dormir del TEI-60FB (descatalogado)
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["potenciaCv", "largoMm", "anchoMm", "altoMm", "mmaKg", "plazas", "carnetNecesario", "traccion", "etiquetaDgt"],
    pros: [
      "Menos de 6 m con baño trasero completo separado: el formato más difícil de encontrar",
      "Gran garaje accesible desde dentro y desde fuera: bicis y material sin pelearte",
      "MMA de 3.500 kg con opción a 3.650 kg: margen de carga realista para viajar cargado",
      "Citroën Jumper 2.2 de 140 CV (también disponible sobre Fiat Ducato): eliges tu mecánica",
      "Perfilada corta que aparca donde una integral no entra: ideal como vehículo de uso frecuente",
    ],
    contras: [
      "Modelo descatalogado de la gama 2026 (sustituido por el TEI-62DH): solo ocasión o stock",
      "Cama trasera de 140×200 cm: justa para parejas altas",
      "Tres plazas de cama: el cuarto ocupante viaja pero no duerme",
      "Sin PVP oficial de nueva: el precio lo marca el mercado de ocasión",
      "Marca del grupo Rapido menos conocida en España: menos concesionarios que Chausson",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/mooveo-tei-60fb-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Mooveo TEI-60FB, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/mooveo-tei-60fb-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Mooveo TEI-60FB, salón delantero",
        ancho: 1200,
        alto: 800,
      },
    ],
    descripcion: `El Mooveo TEI-60FB es una perfilada que ya no se puede comprar nueva, y conviene decirlo desde la primera línea: el modelo está descatalogado de la gama Mooveo 2026, sustituido por el TEI-62DH, así que esta ficha documenta un vehículo del mercado de ocasión y del stock remanente de concesionarios. Dicho esto, merece la pena conocerlo, porque el 60FB resolvía en menos de 6 metros uno de los formatos más difíciles de encontrar en el caravaning europeo: una perfilada corta con baño trasero completo y separado, gran garaje y cuatro plazas de viaje. Mooveo es la marca del grupo Rapido orientada a la relación equipamiento-precio, menos conocida en España que su prima Chausson pero con la misma ingeniería francesa detrás.

La honestidad sobre las fuentes es obligada: el fabricante no publica ficha del TEI-60FB al estar descatalogado, así que todos los datos numéricos proceden de exposés de concesionarios del modelo exacto y van marcados como «dato no oficial · en revisión». Las cifras coincidentes dibujan una perfilada de 5,99 m de largo, 2,30 m de ancho y 2,93 m de alto, con una MMA de 3.500 kg —ampliable a 3.650 kg en opción— que permite conducirla con el carnet B. La base es el Citroën Jumper 2.2 de 140 CV, también disponible sobre Fiat Ducato según mercado, con tracción delantera. Homologa 4 plazas para viajar; para dormir, la configuración de serie ofrece la cama trasera y la transformable del salón.

La distribución es su gran argumento y explica por qué este modelo tiene seguidores: en 5,99 metros encaja un baño trasero completo y separado, con ducha independiente, algo que la mayoría de las perfiladas cortas resuelve con un baño compacto integrado o con la ducha en la cabina del WC. Aquí el baño es una estancia de verdad al fondo del vehículo, y delante de él, la cama trasera de 140 × 200 cm, una medida generosa para una perfilada de este tamaño, con una segunda cama de 90 × 200 cm procedente de la transformación del salón. El garaje, accesible desde el interior y desde el exterior, admite bicicletas y material voluminoso sin pelearse con el dormitorio, y la cocina con extensión extraíble del plano de trabajo resuelve la vida diaria. Los depósitos —unos 130 litros de agua limpia y 95 de grises según los exposés— están por encima de la media de las perfiladas de 6 metros, un detalle que se agradece en autonomía.

El equipamiento documentado en las fichas de la época incluye la calefacción Truma Combi 6000 EH, que combina gas y electricidad, frigorífico de unos 138 litros, batería de célula de 95 Ah con booster de carga, panel solar de 100 W con regulador, instalación Duo Control para el gas y depósito de grises aislado y calefactado. Son los ingredientes de una perfilada pensada para usarse también fuera de temporada, sin el equipamiento espartano de las gamas de acceso. En marcha, el Jumper 2.2 de 140 CV es la mecánica estándar del segmento: suficiente en llano y autovía, justa con la célula cargada en puertos largos, el peaje habitual de las 3,5 toneladas con motor base.

En precio no hay cifra oficial posible: Mooveo no publica PVP y, al estar descatalogado, el precio lo marca el mercado de ocasión según año, kilometraje y equipamiento. Como referencia de segmento, las perfiladas cortas francesas de ocasión con baño trasero mantienen bien su valor porque el formato es escaso. Sus rivales conceptuales son las perfiladas de menos de 6 metros con baño trasero —un club muy pequeño— y, en general, las Chausson y Challenger equivalentes del mismo grupo. Es para parejas que buscan en el mercado de ocasión una perfilada corta y completa, que valoran el baño separado y el garaje grande por encima de la novedad, y que aceptan comprar un modelo descatalogado a cambio de un formato difícil de encontrar nuevo. No es para quien quiera garantía de fábrica y red oficial de modelo en vigor ni para familias de cuatro que necesiten cuatro camas fijas. Cómo lo verificamos: las medidas (5,99 × 2,30 × 2,93 m), la MMA de 3.500 kg con opción a 3.650 kg, las 4 plazas de viaje, la base Citroën Jumper 2.2 de 140 CV, la cama de 140 × 200 cm, la segunda cama de 90 × 200 cm, la Truma Combi 6000EH y los depósitos de 130/95 litros proceden de exposés coincidentes de concesionarios europeos del modelo exacto, contrastados con el catálogo oficial Mooveo TEI 2026 —donde el 60FB ya no figura, sustituido por el TEI-62DH—; todos los valores numéricos van marcados como «dato no oficial · en revisión». El veredicto es que es una ocasión interesante para quien busque el formato: baño trasero separado y garaje grande en menos de 6 metros no se encuentran fácilmente, y el 60FB lo ofrecía con la ingeniería del grupo Rapido detrás, a cambio de asumir la compra de un descatalogado con la documentación que el mercado de ocasión pueda aportar.`,
    analisisSlug: "mooveo-tei-60fb-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Citroën Jumper 2.2: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Citroën)",
      revisiones: [
        {
          nombre: "Revisión Citroën Jumper (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Mooveo (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Citroën Jumper + recomendaciones del sector",
    },
    euroncap: null,
    notas:
      "«dato no oficial · en revisión»: potencia, medidas, MMA, plazas, carnet y tracción proceden de exposés de concesionarios del modelo exacto (Mooveo TEI-60FB, descatalogado de la gama 2026); el fabricante no los publica. La etiqueta ambiental DGT «C» es una inferencia editorial (diésel Euro 6), no un dato del fabricante. Precio: se deja sin dato porque Groupe Pilote no publica tarifas/PVP en abierto en sus webs oficiales (Pilote, Bavaria, Le Voyageur, Mooveo, Font Vendôme): los precios se facilitan a través de su red de concesionarios; sin PVP oficial verificable.",
    curiosidades:
      "Mooveo se relanzó con el lema «All in One»: todo el equipamiento importante viene de serie, de modo que el precio de partida puede ser el precio final, sin la lista de opcionales habitual del sector. Fuente: https://camprest.com/en/blog/motorhome-caravan-news/mooveo-enters-poland",
    fuenteNombre: "Mooveo (catálogo oficial TEI 2026) («no oficial» para el TEI-60FB: descatalogado de la gama 2026, datos de exposés de concesionarios)",
    fuenteUrl: "https://www.mooveo.fr/",
  },
];
