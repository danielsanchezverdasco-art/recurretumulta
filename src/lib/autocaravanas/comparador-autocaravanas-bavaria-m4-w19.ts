// Autocaravanas Bavaria — lote Merlín 4 (19/10/2026).
// Fuentes: catálogo oficial Bavaria 2017 (gama INITIAL), páginas LES M 42-43
// (https://www.camperonline.it/magazine/cataloghi/2017-Bavaria.pdf). Verificado el 19/10/2026.
// Notas honestas: el I 700 C es un modelo de la colección 2017, descatalogado; Bavaria no
// publica tarifa oficial vigente ni PVP para España (precioDesde: null); la motorización no
// consta en el catálogo (potenciaCv: null); la anchura no figura en la ficha del modelo
// (anchoMm: null); el PTAC es el estándar de 3.500 kg de la gama. Las fotos interiores del
// catálogo aparecen etiquetadas I701C (versión sobre chasis AL-KO de la misma implantación
// con cama central); se indica en las notas de la ficha.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_BAVARIA_M4: Autocaravana[] = [
  {
    id: "bavaria-i-700-c-2026-precio-ficha-tecnica",
    marca: "Bavaria",
    modelo: "I 700 C",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: null, // Bavaria no publica tarifa oficial vigente ni PVP para España; null = «no publicado»
    potenciaCv: null, // la motorización no consta en el catálogo oficial 2017
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: null, // no publicada por la marca
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/bavaria-i-700-c-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/bavaria-i-700-c-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/bavaria-i-700-c-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6990, // catálogo oficial Bavaria 2017: 6,99 m
    anchoMm: null, // no figura en la ficha del modelo dentro del catálogo
    altoMm: 2850, // catálogo oficial Bavaria 2017: 2,85 m
    pesoKg: null,
    mmaKg: 3500, // PTAC estándar de la gama INITIAL (3,5 t, carnet B)
    carnetNecesario: "B", // mmaKg <= 3500
    cargaUtilKg: 530, // publicada por la marca en el catálogo 2017 (acabado Style; 490 kg en Class, 470 kg en Allure)
    consumo: null, // no publicado por la marca
    consumoUnidad: null,
    plazas: 4, // catálogo oficial: 4 plazas en circulación
    plazasDormir: 4, // 4 plazas de noche (+1 en opción), catálogo oficial
    parNm: null,
    traccion: null, // la marca no lo declara en la ficha técnica
    emisionesCo2: null,
    aprox: [],
    notas:
      "Largo (6,99 m), alto (2,85 m), plazas (4 en circulación, 5 en comedor, 4 para dormir +1 en opción) y carga útil (530 kg en acabado Style) del catálogo oficial Bavaria 2017, páginas LES M 42-43. El I 700 C monta el Double Plancher Service (DPS) con cama central. Precio: Bavaria no publica tarifa oficial vigente ni PVP para España (null). Potencia, anchura, consumo y etiqueta DGT: no publicados (null). Las fotos interiores del catálogo aparecen etiquetadas I701C, la versión sobre chasis AL-KO de la misma implantación con cama central. Precio: se deja sin dato porque Groupe Pilote no publica tarifas/PVP en abierto en sus webs oficiales (Pilote, Bavaria, Le Voyageur, Mooveo, Font Vendôme): los precios se facilitan a través de su red de concesionarios; sin PVP oficial verificable.",
    curiosidades:
      "Bavaria convirtió el doble suelo técnico en la seña de identidad de su gama INITIAL: el catálogo oficial de 2017 presenta el I 700 C afirmando que «le double plancher fait toute la différence», porque aísla del frío y permite guardar el material voluminoso bajo el piso habitable (https://www.camperonline.it/magazine/cataloghi/2017-Bavaria.pdf).",
    descripcion: `La Bavaria I 700 C es una integral de la gama INITIAL correspondiente a la colección 2017 de la marca francesa, hoy descatalogada pero muy presente en el mercado de ocasión. Con 6,99 metros de largo y 2,85 metros de alto, se sitúa en el segmento medio de las integrales: lo bastante compacta para no exigir un carnet superior al B, lo bastante amplia para ofrecer una distribución con cama central, gran salón y cocina funcional. Es el tipo de vehículo que buscan quienes quieren dar el salto desde una perfilada a una integral sin irse a los siete metros y medio ni a presupuestos de gama alta.

La implantación gira en torno a la cama central trasera, la disposición más demandada en las integrales europeas porque permite acceder a la cama por ambos lados y deja dos grandes armarios roperos a los pies. Delante de la zona de noche, el cuarto de baño con ducha separada actúa como esclusa entre la parte íntima y el salón, una solución que aporta privacidad real cuando se viaja en pareja o con invitados. El salón delantero, con banquetas enfrentadas y mesa central, acoge a cinco comensales según la ficha oficial, y la cocina en ele ofrece superficie de trabajo suficiente para cocinar de verdad, no solo para calentar. Las cuatro plazas homologadas en circulación y las cuatro plazas para dormir (ampliables a cinco con la opción correspondiente) la definen como una integral pensada para dos personas que viajan con desahogo y reciben visitas, más que como un vehículo familiar de seis.

El argumento técnico diferencial del I 700 C es el Double Plancher Service (DPS), el doble suelo técnico que Bavaria reservaba a la gama INITIAL. No es un simple falso suelo: es un espacio de almacenamiento de gran volumen integrado en la estructura, accesible desde el exterior y desde el interior, que permite guardar sillas, mesa, calzado y material voluminoso sin invadir el garaje ni el habitáculo. Además, esa cámara de aire entre el suelo habitable y los bajos actúa como aislante térmico, algo que se agradece tanto en las noches frías como bajo el sol del verano. La carga útil publicada por la marca es de 530 kg en el acabado Style (490 kg en Class y 470 kg en Allure), una cifra honesta para una integral de 3,5 toneladas que deja margen para equipar el vehículo sin vivir pendiente de la báscula.

En acabados, la gama INITIAL ofrecía tres niveles —Style, Class y Allure— con diferencias en tapicerías, dotación de cabina y detalles de confort. La construcción seguía la filosofía Timeproof de Bavaria: estructura con aislamiento reforzado, perfiles de aluminio que solidarizan suelo y techo, y pavillón anti-granizo, un conjunto pensado para durar y para mantener el valor en la reventa. La altura interior y la luminosidad, con claraboyas y grandes ventanales, completan un habitáculo que en su época se situaba por encima de la media de su segmento en sensación de espacio.

De la mecánica, el catálogo oficial de 2017 no detalla la motorización del I 700 C, por lo que no incluimos cifra de potencia: las unidades que circulan montan habitualmente el Fiat Ducato diésel de la época, y cada unidad de ocasión deberá verificarse individualmente. El PTAC es el estándar de 3.500 kg, de modo que se conduce con el carnet B, un punto importante para quienes no quieren plantearse el C1.

En cuanto al precio, Bavaria no publica tarifa oficial vigente ni PVP para España de un modelo descatalogado en 2017, así que no ofrecemos cifra de partida: el I 700 C solo existe hoy en el mercado de ocasión, donde su cotización depende del kilometraje, el estado de la célula y el acabado. La red comercial de Bavaria en España, articulada a través de distribuidores, sigue dando servicio a estos vehículos, y el mantenimiento de la base Fiat sigue el plan del fabricante mientras que la célula agradece la revisión anual de estanqueidad.

Cómo lo verificamos: las dimensiones (6,99 × 2,85 m), las plazas (4 en circulación, 5 en comedor, 4 para dormir +1 en opción), la carga útil (530 kg en Style) y el Double Plancher Service proceden del catálogo oficial Bavaria 2017, páginas 42-43 (LES M), consultado el 19/10/2026. Lo que el catálogo no publica —precio, motorización, anchura, consumo— se deja sin dato y se explica en las notas. Las fotografías interiores proceden del mismo catálogo y aparecen etiquetadas I701C, la variante sobre chasis AL-KO de idéntica implantación con cama central.

Para quién es: encaja con parejas que buscan su primera integral con cama central y doble suelo sin asumir el coste de un modelo nuevo, y con compradores del mercado de ocasión que valoran la construcción Timeproof y una carga útil generosa. Es ideal para viajes largos a ritmo tranquilo, con mucho material a bordo (bicicletas plegables, equipo de pesca o de senderismo) gracias al DPS. No encaja con quien necesite camas para más de cuatro o cinco personas, con quien busque las ayudas a la conducción y la eficiencia de un modelo actual, ni con quien quiera estrenar: el I 700 C solo se encuentra de segunda mano y cada unidad exige una revisión a fondo de humedades y estanqueidad antes de comprar.`,
    pros: [
      "Cama central trasera: la distribución más demandada, con acceso por ambos lados",
      "Double Plancher Service: gran volumen de almacenaje bajo el piso habitable más aislamiento térmico",
      "Carga útil de 530 kg en acabado Style, generosa para una integral de 3,5 t",
      "Se conduce con carnet B (PTAC 3.500 kg)",
      "Construcción Timeproof con pavillón anti-granizo: buena reputación de durabilidad en ocasión",
    ],
    contras: [
      "Modelo descatalogado (colección 2017): solo disponible en el mercado de ocasión",
      "La marca no publica precio ni tarifa vigente: cada unidad se negocia por separado",
      "Motorización no detallada en el catálogo oficial: hay que verificarla unidad por unidad",
      "Con 6,99 m y 2,85 m de alto, menos ágil que una perfilada en pueblos y parkings",
      "Las fotos interiores del catálogo corresponden a la variante I701C sobre chasis AL-KO",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/bavaria-i-700-c-2026-precio-ficha-tecnica-oficial.webp", alt: "Bavaria I 700 C, vista exterior", ancho: 1200, alto: 800 },
      { src: "/media/bavaria-i-700-c-2026-precio-ficha-tecnica-interior1.webp", alt: "Bavaria I 700 C, salón interior", ancho: 1200, alto: 800 },
      { src: "/media/bavaria-i-700-c-2026-precio-ficha-tecnica-interior2.webp", alt: "Bavaria I 700 C, zona de noche con cama central (foto oficial del catálogo Bavaria 2017)", ancho: 457, alto: 550 },
      { src: "/media/bavaria-i-700-c-2026-precio-ficha-tecnica-detalle.webp", alt: "Bavaria I 700 C, detalle de la soute/garaje con bicicleta (foto oficial del catálogo Bavaria 2017)", ancho: 285, alto: 278 },
    ],
    analisisSlug: "bavaria-i-700-c-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Bavaria (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
