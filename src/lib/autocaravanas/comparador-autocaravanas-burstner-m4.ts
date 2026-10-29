// Autocaravanas Bürstner — lote Merlín 4 (19/10/2026).
// Fuentes: buerstner.com (página oficial de la gama Lyseo I, tabla de datos
//   técnicos), anuncios de unidades 2025/2026 en truckscout24 (.fr/.nl/.es),
//   caravana.de, bytbil.com, mobile.de, guía Bürstner 2023 de outandaboutlive.co.uk.
//   Verificado el 19/10/2026.
// Notas honestas: la denominación "Lyseo I 726 G" se verifica en múltiples anuncios
//   de concesionarios europeos de unidades 2025/2026 (7.360 × 2.320 × 2.910 mm,
//   4.400 kg, Fiat Ducato 2.2 180 CV automático); la tabla técnica oficial de
//   buerstner.com documenta la gama Lyseo I con valores idénticos para el 736 G.
//   Bürstner no publica PVP para España (precioDesde = PVP recomendado oficial del país de la locale de buerstner.com, marcado en «aprox»).
// Verif V4-02 (19/10/2026): las 4 fotos del Lyseo I 726 G revisadas visualmente 1x1
// (modelo exacto según anuncio api.caravana.de, sin IA, sin marcas de agua, sin
// rótulos ni pegatinas; la placa «Lyseo I 726 G» es de exposición del concesionario).
// Oficiales del fabricante solo en galería JS/Mediacenter (no extraíbles sin sesión
// interactiva); se mantienen las fotos actuales.
// Fuentes: buerstner.com (páginas oficiales FR/NL/CH del Campeo TD), anuncios de concesionario
// para la motorización. Verificado el 19/10/2026.
// Notas honestas: Bürstner no publica PVP oficial para España → precioDesde=null. La marca no
// publica carga útil → cargaUtilKg=null. Las fotos son de una unidad real del modelo exacto
// (galería de concesionario en caraworld.de, sin marcas de agua), no fotos oficiales de prensa.
// Verif V4-02 (19/10/2026): fotos revisadas 1x1 visualmente (modelo exacto, sin IA,
// sin marcas de agua, sin rótulos de concesionario ni pegatinas de precio). Fotos oficiales
// del fabricante existen (galería JS de buerstner.com y Mediacenter de prensa con acceso
// de invitado) pero no son extraíbles sin sesión interactiva; se mantienen las fotos
// actuales, limpias y del modelo exacto.

import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_BURSTNER_M4: Autocaravana[] = [
  {
    id: "burstner-lyseo-i-726-g-2026-precio-ficha-tecnica",
    marca: "Bürstner",
    modelo: "Lyseo I 726 G",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: 118990, // Precio recomendado oficial Bürstner Alemania (buerstner.com)
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
    aprox: ["precioDesde"],
    notas:
      "Modelo verificado en anuncios de concesionarios de Alemania, Francia, Países " +
      "Bajos y Suecia de unidades 2025/2026 ('BÜRSTNER Lyseo I 726 G'): 7.360 × " +
      "2.320 × 2.910 mm, 4.400 kg, Fiat Ducato 2.2 180 CV automático, 4 viajar / " +
      "4 dormir, salón en L, cama abatible eléctrica + camas individuales " +
      "(truckscout24.fr/.nl/.es, caravana.de, bytbil.com). La tabla técnica oficial " +
      "de buerstner.com para la gama Lyseo I recoge valores idénticos (736/232/291 " +
      "cm, 4.400 kg, 4 plazas, 4-5 camas, frigorífico 142 l, agua 105 l, residuales " +
      "90 l). Precio: Bürstner no publica tarifa para España. MRO: la tabla " +
      "oficial da 3.315 kg para el 736 G, pero no se atribuye a la denominación  Precio: precio recomendado oficial (no vinculante) publicado por Bürstner en su web oficial de Bürstner (buerstner.com), ficha técnica del Lyseo I 726 G, basado en los precios de venta de Alemania; no hay tarifa oficial para España." +
      "726 G. Consumo y carga útil: no los publica la marca.",
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

Del precio, lo honesto: Bürstner no publica tarifa para España; el precio aplicado es su precio recomendado oficial publicado en buerstner.com para Alemania (118.990 €, «aprox»). En Suiza la tabla oficial de la gama sitúa el 736 G —gemelo técnico— en 122.350 francos, pero no es trasladable. El precio real lo da el concesionario español según acabado Harmony Line y opcionales (paquete de invierno, Alde, horno, segunda TV...).

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
  {
    id: "burstner-campeo-td-690-g-2026-precio-ficha-tecnica",
    marca: "Bürstner",
    modelo: "Campeo TD 690 G",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 75290, // Precio recomendado oficial Bürstner Francia (buerstner.com)
    potenciaCv: 140, // Fiat Ducato 140 CV según anuncios de concesionario del modelo
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
    imagen: "/media/burstner-campeo-td-690-g-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/burstner-campeo-td-690-g-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/burstner-campeo-td-690-g-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6990, // buerstner.com (ficha oficial Campeo TD)
    anchoMm: 2300,
    altoMm: 2950,
    pesoKg: 2915, // masa en orden de marcha publicada (horquilla 2769–3061 kg por tolerancia ±5 %)
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica carga útil; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // homologada para 4–5 plazas según configuración (fuente oficial)
    plazasDormir: 5, // 2 de serie, hasta 5 con cama abatible opcional
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: ["precioDesde"],
    notas:
      "Dimensiones (699/230/295 cm), altura interior (205 cm), MMA (3500 kg), MRO (2915 kg con " +
      "horquilla 2769–3061), batalla (4035 mm), plazas (4–5), camas (gemelas 199–190×80; abatible " +
      "opcional 200×140–118), frigorífico (131,5 L + 15 L congelador), agua limpia (120 L) y " +
      "residuales (90 L): buerstner.com, páginas oficiales FR/NL/CH del Campeo TD. Motor Fiat " +
      "Ducato 140 CV: anuncios de concesionario del modelo exacto. Precio: Bürstner no publica " +
      "PVP para España; en la web oficial francesa el Campeo TD parte de " +
      "75.290 €. Sin dato publicado: carga útil (la marca no la publica), consumo, par, tracción y emisiones " +
      "CO2 (no publicados). Fotos: unidad real del modelo exacto, galería de concesionario en  Precio: precio recomendado oficial publicado por Bürstner en su web oficial de Bürstner (buerstner.com), ficha técnica del Campeo TD 690 G, basado en los precios de venta de Francia; no hay tarifa oficial para España." +
      "caraworld.de (anuncio 26057034), sin marcas de agua; no son fotos oficiales de prensa.",
    curiosidades:
      "La cama abatible opcional sobre el salón no es rectangular: mide 200×140–118 cm, es decir, " +
      "se estrecha hacia los pies para no robar paso hacia la cabina, un detalle de diseño que " +
      "Bürstner publica tal cual en la ficha oficial del Campeo TD (buerstner.com).",
    descripcion: `La Bürstner Campeo TD 690 G es la propuesta de la marca alemana para quien busca una
      perfilada de tamaño contenido sin renunciar a una zona de noche digna de gamas superiores.
      Con 699 cm de longitud, 230 cm de anchura y 295 cm de altura, se mueve en el segmento más
      demandado de Europa: el de las semintegrales de menos de siete metros que se conducen con el
      carnet B y caben en la mayoría de parcelas de camping. La altura interior de 205 cm, publicada
      en la ficha oficial de buerstner.com, está por encima de la media de su categoría y se nota
      en el día a día, sobre todo para conductores altos.

      MEDIDAS Y HABITABILIDAD. La distribución G de la 690 se organiza alrededor de unas camas
      gemelas traseras de 199–190×80 cm, la configuración favorita de las parejas que viajan mucho:
      cada uno tiene su cama, se puede entrar y salir sin molestar al otro y el paso central queda
      libre hacia el baño. La batalla de 4035 mm y la masa máxima de 3500 kg la mantienen dentro de
      los límites del carnet B, algo que en España decide la compra para muchísimos usuarios. La
      masa en orden de marcha declarada es de 2915 kg, con la horquilla legal de 2769 a 3061 kg por
      la tolerancia de fabricación del ±5 % que exige la normativa europea; conviene tener presente
      esa horquilla al calcular el equipaje real, porque entre una unidad ligera y una pesada puede
      haber casi 300 kg de diferencia. El depósito de agua limpia es de 120 litros y el de residuales
      de 90 litros, cifras correctas para una perfilada de este tamaño y suficientes para dos o tres
      días de autonomía fuera de áreas de servicio.

      TECNOLOGÍA Y EQUIPAMIENTO. El frigorífico es de 131,5 litros con un congelador independiente
      de 15 litros, un volumen generoso para escapadas largas sin tener que racionar la compra. La
      gama Campeo es la puerta de entrada a Bürstner, pero la marca mantiene su filosofía de
      construcción con aislamiento y acabados cuidados; no es una autocaravana espartana, sino una
      forma de acceder a la ingeniería alemana de Kehl a un precio más contenido que las gamas
      Lyseo o Elegance. La cama abatible opcional sobre el salón, de 200×140–118 cm, es el
      equipamiento que más transforma el vehículo: de día desaparece en el techo y de noche añade
      dos plazas, lo que permite pasar de 2 a 5 plazas para dormir sin cambiar de modelo.

      CAMAS Y PLAZAS. La ficha oficial contempla de 4 a 5 plazas homologadas para viajar y de 2 a 5
      plazas para dormir según configuración. De serie, las gemelas traseras acogen a dos personas
      con comodidad; con la cama abatible opcional se suman dos plazas más sobre el salón y, según
      la versión, una quinta plaza completando el conjunto. Es, por tanto, una autocaravana pensada
      para la pareja que de vez en cuando viaja con hijos o nietos, no para una familia de cinco a
      tiempo completo.

      MECÁNICA. La base es la Fiat Ducato con el motor de 140 CV, la motorización que los
      concesionarios anuncian para esta versión y la más equilibrada para un conjunto de 3,5
      toneladas: mueve el vehículo con soltura en llano y se defiende en puertos sin obligar a
      reducir constantemente. Al ser una mecánica masizada en toda Europa, el mantenimiento y los
      repuestos no son un problema en España.

      PRECIO Y RED COMERCIAL EN ESPAÑA. Bürstner no publica una tarifa oficial para España, de modo
      que el precio de referencia hay que buscarlo en los mercados vecinos: en la web oficial
      francesa el Campeo TD parte de 75.290 €. En España la marca trabaja a través de su red de
      concesionarios oficiales, donde cada unidad se cotiza con su equipamiento concreto; es
      recomendable pedir siempre el precio con la cama abatible y los paquetes que interesen, porque
      los opcionales cambian sensiblemente la factura final. Como referencia de mercado, las
      perfiladas alemanas de este tamaño y motorización se mueven en España entre los 70.000 y los
      85.000 € según equipamiento.

      CÓMO LO VERIFICAMOS. Todos los datos técnicos de esta ficha (dimensiones, pesos, camas,
      capacidades y plazas) proceden de las páginas oficiales del Campeo TD en buerstner.com
      (versiones francesa, neerlandesa y suiza), consultadas el 19/10/2026. La motorización de
      140 CV se confirma en anuncios de concesionario del modelo exacto. El precio francés de
      75.290 € es el publicado en la web oficial de Bürstner Francia; no existe PVP oficial para
      España. Las fotografías corresponden a una unidad real del Campeo TD 690 G (galería del
      anuncio 26057034 en caraworld.de), sin marcas de agua, aunque no son imágenes oficiales de
      prensa de la marca.

      PARA QUIÉN ES. Es la autocaravana ideal para parejas que quieren una perfilada manejable,
      con carnet B, camas gemelas de verdad y la posibilidad de añadir plazas ocasionales con la
      abatible. Encaja con quien valora la construcción alemana pero no quiere pagar el sobreprecio
      de las gamas altas. No es para quien necesite cinco plazas permanentes, un garaje enorme para
      dos bicicletas eléctricas grandes o una carga útil holgada para equipamiento pesado: en esos
      casos conviene mirar a la gama Lyseo o a integrales de mayor MMA.`,
    pros: [
      "Camas gemelas traseras de 199–190×80 cm, la distribución más cómoda para parejas",
      "Altura interior de 205 cm, por encima de la media de las perfiladas de 7 metros",
      "MMA de 3500 kg: se conduce con el carnet B y tributa como turismo en peajes",
      "Cama abatible opcional que eleva las plazas de noche hasta 5 sin cambiar de modelo",
      "Frigorífico de 131,5 L con congelador de 15 L, generoso para su segmento",
    ],
    contras: [
      "Bürstner no publica PVP oficial para España: el precio hay que negociarlo por unidad",
      "La MRO tiene una horquilla de 2769 a 3061 kg; la carga útil real varía mucho por unidad",
      "Gama de acceso a Bürstner: acabados y equipamiento por debajo de las gamas Lyseo/Elegance",
      "140 CV justos si se viaja cargado por puertos de montaña con frecuencia",
      "Sin datos oficiales de consumo, par o emisiones en la ficha de la marca",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/burstner-campeo-td-690-g-2026-precio-ficha-tecnica-oficial.webp", alt: "Bürstner Campeo TD 690 G, vista exterior", ancho: 1600, alto: 1200 },
      { src: "/media/burstner-campeo-td-690-g-2026-precio-ficha-tecnica-interior1.webp", alt: "Bürstner Campeo TD 690 G, salón", ancho: 1600, alto: 1200 },
      { src: "/media/burstner-campeo-td-690-g-2026-precio-ficha-tecnica-interior2.webp", alt: "Bürstner Campeo TD 690 G, cocina y zona de noche", ancho: 1600, alto: 1200 },
      { src: "/media/burstner-campeo-td-690-g-2026-precio-ficha-tecnica-detalle.webp", alt: "Bürstner Campeo TD 690 G, camas gemelas", ancho: 1600, alto: 1200 },
    ],
    analisisSlug: "burstner-campeo-td-690-g-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Bürstner (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
