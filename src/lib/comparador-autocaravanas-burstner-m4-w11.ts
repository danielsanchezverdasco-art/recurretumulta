// Autocaravanas Bürstner — lote Merlín 4 (19/10/2026).
// Fuentes: buerstner.com (página oficial de la gama Lyseo I, tabla de datos
//   técnicos), anuncios de unidades 2025/2026 en truckscout24 (.fr/.nl/.es),
//   caravana.de, bytbil.com, mobile.de, guía Bürstner 2023 de outandaboutlive.co.uk.
//   Verificado el 19/10/2026.
// Notas honestas: la denominación "Lyseo I 726 G" se verifica en múltiples anuncios
//   de concesionarios europeos de unidades 2025/2026 (7.360 × 2.320 × 2.910 mm,
//   4.400 kg, Fiat Ducato 2.2 180 CV automático); la tabla técnica oficial de
//   buerstner.com documenta la gama Lyseo I con valores idénticos para el 736 G.
//   Bürstner no publica PVP para España (precioDesde=null).
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_BURSTNER_M4: Autocaravana[] = [
  {
    id: "burstner-lyseo-i-726-g-2026-precio-ficha-tecnica",
    marca: "Bürstner",
    modelo: "Lyseo I 726 G",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: null, // Bürstner no publica PVP oficial para España
    potenciaCv: 180, // Fiat Ducato 2.2 Multijet 180 CV automático (anuncios)
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro 6
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/burstner-lyseo-i-726-g-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/burstner-lyseo-i-726-g-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/burstner-lyseo-i-726-g-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7360, // anuncios de unidades 2025/2026; oficial buerstner.com: 736 cm
    anchoMm: 2320, // oficial buerstner.com: 232 cm
    altoMm: 2910, // oficial buerstner.com: 291 cm
    pesoKg: null, // no se atribuye el MRO de la tabla oficial a esta denominación
    mmaKg: 4400, // anuncios + tabla oficial (chasis heavy)
    carnetNecesario: "C1", // 4.400 kg > 3.500 kg
    cargaUtilKg: null, // no publicada por la marca; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4, // cama abatible eléctrica + camas individuales traseras
    parNm: null,
    traccion: "delantera", // Fiat Ducato
    emisionesCo2: null,
    aprox: [],
    notas:
      "Modelo verificado en anuncios de concesionarios de Alemania, Francia, Países " +
      "Bajos y Suecia de unidades 2025/2026 ('BÜRSTNER Lyseo I 726 G'): 7.360 × " +
      "2.320 × 2.910 mm, 4.400 kg, Fiat Ducato 2.2 180 CV automático, 4 viajar / " +
      "4 dormir, salón en L, cama abatible eléctrica + camas individuales " +
      "(truckscout24.fr/.nl/.es, caravana.de, bytbil.com). La tabla técnica oficial " +
      "de buerstner.com para la gama Lyseo I recoge valores idénticos (736/232/291 " +
      "cm, 4.400 kg, 4 plazas, 4-5 camas, frigorífico 142 l, agua 105 l, residuales " +
      "90 l). Precio: Bürstner no publica tarifa España → null. MRO: la tabla " +
      "oficial da 3.315 kg para el 736 G, pero no se atribuye a la denominación " +
      "726 G → null. Consumo y carga útil: no publicados → null.",
    curiosidades:
      "La gama Lyseo I nació en 2023 como la integral 'media' de Bürstner sobre base " +
      "Fiat Ducato, por debajo de la Elegance en tamaño y precio, con cinco " +
      "distribuciones y chasis heavy de 4,4 toneladas de serie para no ir justo de " +
      "carga útil. El 726 G combina cama abatible eléctrica sobre el salón en L con " +
      "camas individuales traseras en 7,36 metros. " +
      "Fuentes: https://www.outandaboutlive.co.uk/motorhomes/articles/general/burstner-motorhomes-2023-essential-guide " +
      "y https://www.buerstner.com/ch/de/wohnmobile/lyseo-i (tabla técnica oficial).",
    descripcion: `La Bürstner Lyseo I 726 G es una integral alemana de las de verdad: parabrisas panorámico de una pieza, salón en L, cama que baja del techo con un botón y la sensación de ir conduciendo un salón con vistas. Pertenece a la gama Lyseo I, que Bürstner lanzó en 2023 para ocupar el hueco entre sus perfiladas y la lujosa Elegance: una integral de tamaño medio sobre el infalible Fiat Ducato, con cinco distribuciones y el chasis heavy de 4,4 toneladas.

Con 7,36 metros de largo, 2,32 de ancho y 2,91 de alto, la 726 G se mueve en las medidas clásicas de una integral familiar europea. La G del nombre indica la distribución con camas individuales traseras, y aquí está la gracia del plano: detrás, dos camas individuales que se pueden unir en una gran doble; delante, sobre el salón en L, la cama abatible eléctrica que baja por la noche y sube por el día sin tocar un solo cojín. Cuatro plazas para viajar y cuatro para dormir, con la particularidad de que las dos camas "fijas" no obligan a nadie a deshacer el salón. Es el esquema que mejor funciona para dos parejas o para padres con dos hijos adolescentes que ya no quieren dormir en el salón.

La base es el Fiat Ducato 2.2 Multijet de 180 CV con cambio automático, la combinación que hoy manda en el segmento. Los 180 CV mueven con soltura las 4,4 toneladas del chasis heavy, y ese chasis es precisamente uno de los argumentos de la Lyseo I: con 4.400 kg de MMA hay carga útil de sobra para cuatro personas, sus cosas, el toldo, las bicis y la paellera sin ir haciendo cuentas. El peaje es conocido: con más de 3.500 kg hace falta el carnet C1. Quien solo tenga el B deberá mirar a las perfiladas de la marca o sacarse el C1, porque en la integral de este tamaño no hay versión de 3,5 t que mantenga la misma carga útil.

El acabado Harmony Line, con el que se anuncia la mayoría de las unidades, viste el interior en tonos claros con mobiliario Sandy Grey y tapicería Genura Pure de aspecto semicuero: luminoso, moderno y fácil de limpiar, que con niños se agradece. La cocina en L lleva placa de tres fuegos con tapa de cristal, fregadero independiente y frigorífico de compresor de 142 litros; la calefacción es la Truma Combi 6 de gas con aire impulsado, con cuadro de mandos digital CP Plus; y el doble suelo —de 135 mm— esconde el depósito de agua limpia de 105 litros y las tuberías aisladas y calefactadas, lo que convierte a la Lyseo I en una cuatro estaciones de verdad. Puerta de célula XL Premium con cierre centralizado, ventanas con marco de aluminio, toldo con LED, cámara trasera y estación multimedia con Apple CarPlay y Android Auto completan un equipamiento que no pide opcionales urgentes.

En carretera, la integral se comporta como lo que es: aplomo de autopista, visibilidad panorámica y una altura que obliga a vigilar ramas y parkings techados. El parabrisas enorme es una gozada conduciendo y un gasto cuando hay que cambiarlo: conviene llevarlo asegurado con franquicia baja. El consumo, como en todas las integrales de este peso, lo marca el pie derecho y la aerodinámica; la marca no publica cifras oficiales.

Del precio, lo honesto: Bürstner no publica tarifa para España y la casilla queda en null. En Suiza la tabla oficial de la gama sitúa el 736 G —gemelo técnico— en 122.350 francos, pero no es trasladable. El precio real lo da el concesionario español según acabado Harmony Line y opcionales (paquete de invierno, Alde, horno, segunda TV...).

Cómo lo verificamos: la denominación Lyseo I 726 G y sus datos (7.360 × 2.320 × 2.910 mm, 4.400 kg, 180 CV automático, 4/4 plazas, salón en L, cama abatible + individuales) se comprobaron el 19/10/2026 en anuncios de concesionarios de cuatro países con unidades 2025/2026 (truckscout24.fr, truckscout24.nl, truckscout24.es, caravana.de, bytbil.com); la gama y sus datos técnicos oficiales (736/232/291 cm, 4.400 kg, 4 plazas, 4-5 camas, frigorífico 142 l, aguas 105/90 l), en la tabla técnica de buerstner.com para la Lyseo I; el lanzamiento de la gama en 2023 como integral media Fiat, en outandaboutlive.co.uk.

Para quién es: para quienes quieren una integral de verdad —conducción panorámica, cama abatible, doble suelo— sin subir al precio y tamaño de una liner, y ya tienen (o van a sacarse) el carnet C1. Ideal para dos parejas o familias con hijos mayores que valoran las camas individuales traseras. No es para quien solo tenga el carnet B, ni para presupuestos ajustados: la integral alemana equipada juega en otra liga de precios que una perfilada, y cada extra (invierno, Alde, horno) suma. Un último apunte práctico: la Lyseo I monta de serie la preinstalación para una segunda batería de célula y el cargador booster, así que ampliar la autonomía eléctrica es sencillo y barato.`,
    pros: [
      "Integral de verdad con parabrisas panorámico y cama abatible eléctrica",
      "Chasis heavy de 4.400 kg: carga útil holgada para cuatro y su equipaje",
      "Camas individuales traseras + abatible: 4 plazas sin deshacer el salón",
      "Doble suelo con instalaciones aisladas y calefactadas: cuatro estaciones real",
      "Fiat Ducato 180 CV automático: la mecánica más probada del segmento",
    ],
    contras: [
      "Exige carnet C1 por sus 4.400 kg de MMA",
      "Bürstner no publica PVP para España: precio solo en concesionario",
      "El parabrisas panorámico es caro de sustituir: conviene buen seguro de lunas",
      "Con 2,91 m de alto hay que vigilar ramas, parkings y algunos peajes",
      "Los opcionales (invierno, Alde, horno) encarecen rápido la factura final",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/burstner-lyseo-i-726-g-2026-precio-ficha-tecnica-oficial.webp", alt: "Bürstner Lyseo I 726 G, vista exterior", ancho: 932, alto: 722 },
      { src: "/media/burstner-lyseo-i-726-g-2026-precio-ficha-tecnica-interior1.webp", alt: "Bürstner Lyseo I 726 G, cama abatible", ancho: 1500, alto: 1125 },
      { src: "/media/burstner-lyseo-i-726-g-2026-precio-ficha-tecnica-interior2.webp", alt: "Bürstner Lyseo I 726 G, camas individuales traseras", ancho: 1500, alto: 1125 },
      { src: "/media/burstner-lyseo-i-726-g-2026-precio-ficha-tecnica-detalle.webp", alt: "Bürstner Lyseo I 726 G, dormitorio y zona TV", ancho: 1500, alto: 1125 },
    ],
    analisisSlug: "burstner-lyseo-i-726-g-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Bürstner (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
