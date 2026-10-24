// Autocaravanas Rimor — lote Merlín 1 (18/10/2026). Corrección (b)(c)(d) 22:15 — textos lote 3.
// Datos verificados: rimor.it (web oficial, página del modelo 687 TC re-verificada el 18/10:
// 6.968 × 2.340 × 3.080 mm; MMA 3.500/3.550/4.100 kg; 4 (+1 opc.) plazas, 4 camas, cama
// transversal) + lista oficial de precios Rimor 2026-2027 (PVP Alemania con IVA incluido, franco
// fábrica: 70.840 €, en "aprox" porque en España el precio lo fija el importador) + ficha de datos
// oficial Rimor para Reino Unido (carga útil 556 kg manual / 541 kg automática a 3.500 kg).
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_RIMOR_M1: Autocaravana[] = [
  {
    id: "rimor-superbrig-687-tc-2026-precio-ficha-tecnica",
    marca: "Rimor",
    modelo: "SuperBrig 687 TC",
    tipo: "capuchina",
    categoria: "Autocaravana",
    precioDesde: 70840,
    potenciaCv: 130, // 165 CV opcional con cambio automático
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
    imagen: "/media/rimor-superbrig-687-tc-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/rimor-superbrig-687-tc-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/rimor-superbrig-687-tc-2026-precio-ficha-tecnica-oficial-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6968,
    anchoMm: 2340,
    altoMm: 3080,
    pesoKg: 3018, // lista oficial alemana; ficha Reino Unido: 2944 kg (manual) / 2959 kg (automática)
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: 556, // oficial Rimor (ficha de datos Reino Unido: 556 kg manual / 541 kg automática a 3.500 kg)
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4, // oficial rimor.it (4 camas; 5.ª plaza opcional)
    parNm: null, // no publicado por el fabricante
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde", "etiquetaDgt"],
    pros: [
      "PVP oficial publicado de 70.840 €: de las capuchinas con precio de fábrica transparente",
      "Cama de capuchina más cama doble trasera: 4 plazas para dormir siempre hechas, sin transformar el salón",
      "Sistema MEB-300 Smart Energy con control por app: gestión eléctrica moderna de serie en la temporada 2026",
      "Techo Vetroskin de nueva construcción: el techo se renueva en esta temporada",
      "Base Ford Transit con 130 CV y opción de 165 CV con automática: hay alternativa potente para quien remolque",
    ],
    contras: [
      "Capuchina de 3,08 m de alto: el nicho delantero penaliza aerodinámica y consumo frente a una perfilada",
      "La cama de la capuchina se calienta en verano y se accede por escalera: no es para todos los públicos",
      "Masa en orden de marcha oficial de 3.018 kg: con 4 personas y equipaje a bordo, el margen hasta los 3.500 kg de MMA se estrecha y obliga a elegir bien qué se sube",
      "La automática suma 1.685,83 € al PVP: el cambio que casi todos quieren no sale barato",
      "Depósitos de agua no publicados por el fabricante: imposible comparar su autonomía con la competencia",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/rimor-superbrig-687-tc-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Rimor SuperBrig 687 TC, vista frontal (foto del catálogo oficial 2026-27)",
        ancho: 938,
        alto: 1218,
      },
      {
        src: "/media/rimor-superbrig-687-tc-2026-precio-ficha-tecnica-oficial-interior.webp",
        alt: "Salón del Rimor SuperBrig (foto del catálogo oficial 2026-27)",
        ancho: 761,
        alto: 691,
      },
      {
        src: "/media/rimor-superbrig-687-tc-2026-precio-ficha-tecnica-oficial-interior2.webp",
        alt: "Cocina del Rimor SuperBrig (foto del catálogo oficial 2026-27)",
        ancho: 472,
        alto: 691,
      },
      {
        src: "/media/rimor-superbrig-687-tc-2026-precio-ficha-tecnica-oficial-interior3.webp",
        alt: "Cocina y salón del Rimor SuperBrig (foto del catálogo oficial 2026-27)",
        ancho: 761,
        alto: 691,
      },
    ],
    descripcion: `La capuchina es el formato familiar por excelencia de la autocaravana europea, y la Rimor SuperBrig 687 TC es una de sus representantes más honestas: 6,97 metros, cuatro camas siempre hechas y un precio oficial publicado de 70.840 € que pocas marcas se atreven a poner por escrito. Rimor, constructor italiano integrado en el grupo Luano Camp junto a XGO, juega en la liga de las marcas que compiten por relación equipamiento-precio, y la SuperBrig es su gama de capuchinas para familias que quieren dormir cuatro sin transformar el salón cada noche.

La fórmula es la clásica del segmento y funciona: cama sobre la cabina para los niños —siempre hecha, siempre lista— más cama doble transversal trasera para los padres, con un salón central en L y cocina equipada entre medias. Cuatro plazas de viaje, cuatro para dormir y una quinta opcional para la familia numerosa ocasional. Con 6.968 mm de largo, 2.340 mm de ancho y 3.080 mm de alto, es una capuchina de tamaño medio: más manejable que las de 7,4 m pero con la chepa aerodinámica que penaliza el consumo en autopista, el peaje inevitable de este formato. La altura interior y la luminosidad del salón, con la claraboya sobre la cabina, hacen que la vida diurna no se resienta del tamaño contenido.

La base es el Ford Transit 2.0 de 130 CV con cambio manual, con opción de 165 CV asociado al cambio automático para quien remolque o viaje cargado por puertos; la automática suma 1.685,83 € al PVP según la lista oficial, un sobrecoste que conviene tener claro desde el principio porque el cambio que casi todos quieren no sale barato. La MMA es de 3.500 kg —con 3.550 y 4.100 kg disponibles en opción—, así que con la configuración base basta el carnet B y la tracción es delantera. El Transit aporta un chasis de largueros robusto y una dirección precisa que en una capuchina alta se agradece, aunque con viento lateral fuerte los 3,08 m de altura piden reducir el ritmo.

En pesos hay que leer la letra pequeña con atención: la masa en orden de marcha oficial es de 3.018 kg según la lista alemana —la ficha británica declara 2.944 kg en manual y 2.959 kg en automática— y la carga útil oficial es de 556 kg en manual y 541 kg en automática a 3.500 kg, cifras publicadas por la propia Rimor en su ficha de datos para Reino Unido. Son números razonables para una capuchina familiar, aunque con cuatro personas a bordo el margen hasta la MMA se estrecha y obliga a elegir bien el equipaje. La temporada 2026 trae dos novedades técnicas: el sistema MEB-300 Smart Energy con control por aplicación móvil, que gestiona luces y energía desde el teléfono con carga eficiente e integración de paneles solares, y el techo Vetroskin de nueva construcción.

En precio, la transparencia es su mejor argumento: la lista oficial Rimor 2026-2027 fija el PVP en 70.840 € con IVA incluido, franco fábrica, en Alemania. Es precio de tarifa en Alemania, no precio en España —aquí el importador fija el importe final con portes, matriculación e impuestos—, y por eso va marcado como aproximado, pero es una referencia oficial que permite comparar sin adivinanzas, algo raro en un sector donde muchas marcas ni siquiera publican tarifa. Sus rivales son las capuchinas familiares italianas y francesas de 7 metros —las francesas suelen ser más caras a igualdad de equipamiento, las alemanas juegan en otra liga de precio—.

Esta SuperBrig es para familias de cuatro que buscan la fórmula clásica de capuchina sin sorpresas: camas siempre hechas, precio transparente y equipamiento moderno de serie. No es para quien odia la escalera de la capuchina ni para quien cuenta cada litro de gasóleo: la aerodinámica de la chepa se paga en el surtidor. Cómo lo verificamos: las medidas, las MMA opcionales, las plazas y las camas proceden de la página oficial del modelo 687 TC en rimor.it, re-verificada el 18/10/2026; el PVP de 70.840 € sale de la lista oficial de precios Rimor 2026-2027 (Alemania, IVA incluido) y se marca como tarifa alemana porque en España el precio lo fija el importador; la carga útil de 556/541 kg es la publicada por Rimor en su ficha de datos para Reino Unido, no un cálculo nuestro. En definitiva: una capuchina familiar honesta con precio por escrito y 556 kg de carga útil oficial, a cambio de asumir la chepa aerodinámica y el sobrecoste del cambio automático que casi todos acabarán queriendo.

La red de Rimor en España, a través del importador del grupo, cubre las principales provincias, y al pertenecer a un grupo industrial italiano con varias marcas, los recambios de célula están garantizados a largo plazo. Para una capuchina familiar que se compra para diez años, esa continuidad industrial importa tanto como el precio de compra. Y el sistema MEB-300 Smart Energy de la temporada 2026 apunta en la dirección correcta: gestión energética desde el móvil y preparación para solar, justo lo que las familias que pernoctan fuera de camping necesitan.`,
    analisisSlug: "rimor-superbrig-687-tc-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Ford Transit: 2 años / 60.000 km",
      revisiones: [
        {
          nombre: "Revisión Ford Transit (2 años / 60.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de aire + filtro de gasóleo + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Rimor (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Ford Transit + recomendaciones Rimor",
    },
    euroncap: null,
    notas:
      "«precio de tarifa en Alemania»: el PVP de 70.840 € procede de la lista oficial de precios Rimor 2026-2027 (Alemania, IVA incluido, franco fábrica); en España el precio lo fija el importador. La carga útil de 556 kg (manual) / 541 kg (automática) es la publicada por Rimor en su ficha oficial de datos para Reino Unido, no un cálculo: «dato de la ficha oficial de Rimor para Reino Unido; puede variar según el mercado». La etiqueta ambiental DGT «C» es una inferencia editorial (diésel Euro 6), no un dato del fabricante: dato no oficial · en revisión.",
    curiosidades:
      "Rimor fue fundada oficialmente el 17 de enero de 1978 por Luano Niccolai, con el entusiasmo de un pionero; más de 45 años después forma parte del grupo francés Trigano, uno de los líderes europeos del caravaning. Fuente: Rimor (web oficial, «Chi siamo»): https://www.rimor.it/it/es/about/chi-siamo",
    fuenteNombre: "Rimor (web oficial + lista oficial de precios 2026-2027)",
    fuenteUrl: "https://www.rimor.it/at/de/gamma/super-brig/modello/687-tc",
  },
];
