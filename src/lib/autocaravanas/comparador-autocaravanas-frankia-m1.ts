// Autocaravanas Frankia — lote Merlín 1 (18/10/2026).
// Datos verificados: folleto oficial Frankia NEO (temporada 2027, frankia.com).
// CORRECCIÓN 5 (18/10/2026): fuenteUrl concreta mantenida (folleto oficial del modelo);
// eliminado el bloque `costeMensual`; `analisisSlug` nuevo; añadidos `descripcion`,
// `plazasDormir` y `notas`. Corregido escape «\"» en contras (pulgadas).
// Frankia publica su PVP de fábrica en su Preisliste oficial 2026 (el Neo I 7 GDK parte de
// 122.490 €, «aprox»; sin tarifa para España). El indicativo ~142.000 € es de unidades
// equipadas de concesionario alemán (dato no oficial) y se documenta solo en `notas`.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_FRANKIA_M1: Autocaravana[] = [
  {
    id: "frankia-neo-i-7-gdk-2026-precio-ficha-tecnica",
    marca: "Frankia",
    modelo: "NEO I 7 GDK",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: 122490, // Preisliste oficial Frankia 2026 (Alemania), IVA incl.
    potenciaCv: 150, // Mercedes Sprinter 315 CDI de 150 CV (170 CV opcional)
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
    imagen: "/media/frankia-neo-i-7-gdk-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/frankia-neo-i-7-gdk-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/frankia-neo-i-7-gdk-2026-precio-ficha-tecnica-oficial-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7050,
    anchoMm: 2240,
    altoMm: 2960,
    pesoKg: null, // sin cifra única de fábrica por variante
    mmaKg: 3500, // 4.500 kg opcional
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil del modelo exacto
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4, // camas individuales traseras + cama abatible delantera
    parNm: null, // no publicado por el fabricante
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde"],
    pros: [
      "Camas individuales traseras convertibles en doble de 1,60 m: flexibilidad para dormir solo o en pareja a lo ancho",
      "Doble suelo calefactado con 2,05 m de altura interior: almacenaje protegido del frío y sensación de amplitud",
      "Mercedes Sprinter con cambio automático 9G-Tronic: la base rutera más refinada del segmento",
      "Baño combinado XL, el más grande de su clase según la marca: ducha y WC sin agobios en una integral de 7 m",
      "7 años de garantía de estanqueidad: la marca respalda su construcción ligera con hechos",
    ],
    contras: [
      "Sin PVP oficial para España: la referencia es la Preisliste oficial alemana (desde 122.490 €); las unidades equipadas rondan los 142.000 €",
      "Masa en orden de marcha no publicada por variante: hay que pesar la unidad concreta antes de firmar",
      "La cama basculante obliga a recoger el salón cada noche si se usa a diario",
      "Con 7,05 m y 2,96 m de alto, no entra en todos los parkings ni áreas pequeñas",
      "Sistema multimedia MBUX de 10,25 pulgadas solo como opción: la pantalla moderna de Mercedes se paga aparte",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/frankia-neo-i-7-gdk-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Frankia NEO I 7 GDK, vista exterior de la integral en marcha",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/frankia-neo-i-7-gdk-2026-precio-ficha-tecnica-oficial-interior.webp",
        alt: "Salón del Frankia NEO I 7 GDK con dinette y asientos giratorios",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/frankia-neo-i-7-gdk-2026-precio-ficha-tecnica-oficial-interior2.webp",
        alt: "Camas individuales traseras del Frankia NEO I 7 GDK",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/frankia-neo-i-7-gdk-2026-precio-ficha-tecnica-oficial-interior3.webp",
        alt: "Cocina del Frankia NEO I 7 GDK con fogones de gas y fregadero",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "frankia-neo-i-7-gdk-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Mercedes Sprinter: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Mercedes-Benz)",
      revisiones: [
        {
          nombre: "Revisión Mercedes Sprinter (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de aire + inspección general",
          costeAproxEur: 450,
        },
        {
          nombre: "Revisión célula Frankia (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 700,
      fuente: "Plan de mantenimiento Mercedes-Benz Sprinter + recomendaciones Frankia",
    },
    euroncap: null,
    fuenteNombre: "Frankia (folleto oficial NEO, temporada 2027)",
    fuenteUrl: "https://www.frankia.com/fileadmin/user_upload/infomaterial/neo_2027_englisch.pdf",
    notas:
      "Frankia publica su PVP de fábrica en su Preisliste oficial 2026 (el MI 7 GDK Neo parte de 122.490 €); el indicativo de ~142.000 € corresponde a unidades equipadas de concesionario alemán, no al precio base. La masa en orden de marcha no tiene cifra única por variante y la carga útil no está publicada por la marca. Datos técnicos del folleto oficial NEO 2027. 4 plazas para dormir: camas individuales traseras + cama abatible delantera. Precio: PVP de Alemania de la Preisliste oficial de Frankia 2026 (Alemania) (precios base, IVA 19% incl.), MI 7 GDK Neo (integral) = 122.490 €; no hay tarifa oficial para España.",
    curiosidades:
      "La edición Black Line del NEO MI 7 incluye de serie placa solar y batería de litio (LiFePO4) de 105 Ah, un equipamiento que la mayoría de rivales cobra como opción. Lo publica la propia Frankia en la página oficial del modelo: https://www.frankia.com/wohnmobile-reisemobile/neo/frankia-neo-mi-7.",
    descripcion: `Hay una frase que resume al Frankia NEO I 7 GDK mejor que cualquier ficha técnica: «ligera» y «premium» en la misma frase. Frankia, el fabricante de Marktschorgast con más de seis décadas construyendo autocaravanas y hoy dentro del grupo Pilote, diseñó la gama NEO con una obsesión muy concreta: una integral sobre Mercedes Sprinter que no supere los 3.500 kg sin renunciar al espacio ni al equipamiento. El I 7 GDK es la versión de 7,05 metros con camas gemelas traseras y funciona como puerta de entrada al mundo Frankia sin saltar a los liner de la casa.

La documentación de partida es el folleto oficial de la gama NEO para la temporada 2027 publicado en frankia.com, que detalla distribuciones, medidas, pesos y garantías, revisado el 18/10/2026. Lo que la marca no publica —masa en orden de marcha por variante y carga útil— queda sin dato y se dice abiertamente; el precio aplicado es el de su Preisliste oficial 2026. El NEO es la integral «ligera» de Frankia, disponible como Cruiser (perfilada) o como Liner (integral de clase A); el I 7 GDK es el Liner de 7,05 metros. Su propuesta es singular: construcción con materiales ligeros especiales, doble suelo y un diseño interior de altura continua de 2 metros, todo ello manteniendo la MMA en 3.500 kg para que baste el carnet B. Es la integral para quien quiere presencia y espacio de liner sin el carnet C1 ni los 4.500 kg.

Las cotas son 7.050 mm de largo, 2.240 mm de ancho y 2.960 mm de alto, con 2 metros de altura interior continua que se agradecen desde el primer minuto: no hay zonas donde agachar la cabeza. La noche se organiza con dos camas individuales traseras que se transforman en una gran cama doble de 1,60 m de ancho en segundos —flexibilidad total para dormir solo, en pareja a lo ancho o separado—, salón delantero con asientos giratorios de cabina, cocina lateral y el baño combinado que la marca presenta como el más espacioso de su clase, con ducha, WC y lavabo deslizante. Las cuatro plazas de viaje y las cuatro de noche (las traseras más la cama abatible sobre el salón) la plantean para parejas con invitados ocasionales o familias pequeñas que prioricen el confort de los dos ocupantes principales. El doble suelo calefactado aporta almacenaje protegido del frío y eleva la sensación de calidad general.

La base es el Mercedes Sprinter 315 CDI de 150 CV —170 CV en opción— con el cambio automático 9G-Tronic, la combinación rutera más refinada que se puede pedir en una integral: suave, silenciosa y con los asistentes de conducción de Mercedes. La tracción es delantera y el conjunto, pese a los 7 metros, se maneja con un aplomo notable gracias al chasis bien tarado y al centro de gravedad contenido. No es una 4x4 ni pretende serlo: su territorio es la autopista y la nacional, donde rinde al nivel de un turismo grande.

Frankia equipa el NEO con su filosofía de «lujo ligero»: cinco estilos de interior combinables, iluminación indirecta, maderas claras y una cocina bien resuelta. El baño combinado XL es el argumento de venta frente a rivales con baños más justos, y los 7 años de garantía de estanqueidad respaldan la construcción. En el debe: el sistema multimedia MBUX de 10,25 pulgadas es opcional —la pantalla moderna de Mercedes se paga aparte—, y la cama abatible delantera obliga a recoger el salón cada noche si viajan cuatro a diario.

Frankia publica su PVP de fábrica en su Preisliste oficial 2026: el Neo I 7 GDK parte de 122.490 €; los distribuidores anuncian unidades equipadas en torno a 142.000 €. Sus rivales son la Hymer B-MC I, la Eura Mobil Integra Line GT y la Carthago C-Tourer: frente a ellas, el NEO juega la carta del peso —3.500 kg con carnet B donde otras piden C1— y del baño XL. Fuentes y verificación: hemos trabajado sobre el folleto oficial de la gama NEO 2027 en frankia.com; lo no publicado por la marca (precio, masa en orden de marcha por variante, carga útil) va sin dato. Es la integral para la pareja que quiere espacio de liner, base Mercedes y carnet B, sin renunciar a dormir bien: las camas gemelas convertibles son de lo mejor del segmento. No es para quien busque el precio más bajo —una integral alemana sobre Sprinter nunca lo será—, ni para quien necesite cuatro camas fijas. Si el presupuesto llega y el plan es viajar a dos con comodidad de hotel, el NEO I 7 GDK es una de las integrales de 7 metros más coherentes del mercado: ligera de papeles, grande por dentro y respaldada por 7 años de garantía de estanqueidad.

La red Frankia en Europa es sólida y el respaldo del grupo Pilote garantiza recambios y servicio durante años, un aspecto que en una integral de este precio pesa tanto como la ficha técnica. Para quien viaja mucho, saber que hay un taller de la marca en cada país no es un detalle menor. Y los 7 años de garantía de estanqueidad, por encima de la media del segmento, son la prueba de que Frankia confía en su construcción ligera: en una integral donde cada kilo cuenta, esa garantía es la firma del fabricante.`,
  },
];
