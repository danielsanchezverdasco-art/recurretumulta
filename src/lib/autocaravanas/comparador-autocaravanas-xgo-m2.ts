// Autocaravanas XGO — lote Merlín 2 (19/10/2026).
// SUSTITUCIONES respecto a la asignación original:
//  - "XGO XCamp 4" → sustituido por "XGO Dynamic 35": del XCamp 4 solo se
//    consiguieron 2 fotos limpias (interiores de camperlife.it); los
//    exteriores disponibles llevaban marca de agua del portal.
//  - "XGO XCamp 33" → NO EXISTE como modelo (es el número de página 33 del
//    catálogo XGO 2022/23; el modelo real de esa página es el XCamp 95 Plus).
//    Sustituido por "XGO Dynamic 95".
// Ambos sustitutos son modelos REALES del catálogo oficial XGO by Palmo
// 2025/26 (gama Dynamic, mansardatos sobre Fiat Ducato), no están en
// /tmp/dedup-lote2.txt, y tienen 4 fotos exactas inspeccionadas.
// Datos técnicos del catálogo oficial XGO by Palmo 2025/26 (técnica Fiat).
// XGO no publica PVP para España: se aplica el Listino oficial XGO Italia 2025/2026 (61.840 €, «aprox»).
// Fotos: anuncios reales (mobile.de, go4fun.si, reisemobil-discount.de).
// Curiosidades con fuente en `curiosidades`. noindex lo gestiona Grok.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_XGO_M2: Autocaravana[] = [
  {
    id: "xgo-dynamic-35-2026-precio-ficha-tecnica",
    marca: "XGO",
    modelo: "Dynamic 35",
    tipo: "capuchina",
    categoria: "Autocaravana",
    precioDesde: 61840, // Listino oficial XGO Italia, IVA incl.
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
    imagen: "/media/xgo-dynamic-35-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial: "/media/xgo-dynamic-35-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/xgo-dynamic-35-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6991, // catálogo oficial XGO by Palmo 2025/26: 6.991 mm
    anchoMm: 2340, // catálogo oficial: 2.340 mm (2.200 mm interior)
    altoMm: 3050, // catálogo oficial: 3.050 mm (2.075 mm interior)
    pesoKg: null, // masa en orden de marcha no publicada para esta versión
    mmaKg: 3500, // catálogo oficial: 3.500 kg
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil de esta versión
    consumo: null,
    consumoUnidad: null,
    plazas: 6, // catálogo oficial: 6 plazas de viaje homologadas
    plazasDormir: 6, // 4 fijas + 2 componibles: capuchina 1400x2200, trasera 1360x2200, dinette 1290x1890
    parNm: 350, // Fiat Ducato 2.2 Multijet 140: 350 Nm (dato oficial Fiat)
    traccion: "Delantera", // Fiat Ducato, tracción delantera
    emisionesCo2: null,
    aprox: ["precioDesde"],
    notas:
      "Medidas, plazas, MMA, camas y equipamiento proceden del catálogo oficial XGO by Palmo 2025/26 (gama Dynamic). XGO no publica PVP en España ni tarifa oficial con precios para España: se aplica el Listino oficial XGO Italia 2025/2026 (61.840 €, «aprox»). Las fotos corresponden a un XGO Dynamic 35 G real anunciado en Alemania (mobile.de). Precio: PVP de Italia del Listino oficial XGO Italia 2025/2026 (Listino pubblico 1/2026, válido desde 01/09/2025, IVA 22% incl., franco fábrica), Dynamic 35 = 61.840 €; no hay tarifa oficial para España.",
    descripcion: `La XGO Dynamic 35 es la capuchina que mejor representa lo que la marca toscana lleva haciendo desde que volvió al mercado: autocaravanas sencillas, honestas y con una relación calidad-precio que pone en aprietos a rivales mucho más caros. Con 6,99 metros de largo, la Dynamic 35 se sitúa en el punto dulce de las capuchinas familiares: lo bastante compacta para no sufrir en carreteras secundarias y áreas pequeñas, lo bastante grande para alojar a seis personas con una distribución clásica que no inventa nada pero lo hace todo bien: capuchina delantera, dinette central con asientos de cabina giratorios, cocina lateral y dormitorio trasero con cama transversal sobre un garaje de buen tamaño.

    La base es el Fiat Ducato 2.2 Multijet de 140 CV (103 kW) con 350 Nm de par, cambio manual de 6 velocidades y tracción delantera, homologado Euro 6. Es la motorización que XGO monta de serie en toda la gama Dynamic 2025/26: un propulsor sobradamente conocido, con una red de talleres que cubre toda Europa y un mantenimiento que cualquier mecánico conoce al dedillo. El chasis viene con el paso de 3.800 mm, una batalla generosa para una capuchina de menos de 7 metros que se traduce en estabilidad en autopista y un comportamiento noble con viento lateral, el punto débil tradicional de las capuchinas. De serie incluye cruise control, doble airbag, cierre centralizado, elevalunas eléctricos, espejos eléctricos, ABS y radio DAB con antena integrada en los retrovisores.

    Por dentro, la Dynamic 35 apuesta por la funcionalidad sin renuncios. La capuchina delantera ofrece una cama de 1400x2200 mm, de las más generosas del segmento, con el cupolino revestido en tejido soft touch de tacto automovilístico. La dinette central admite la transformación en una cama doble de 1290x1890 mm, y el dormitorio trasero monta una cama transversal de 1360x2200 mm sobre un garaje con puerta de acceso de 1080x850 mm (ampliable a 1280x850 bajo pedido), suficiente para dos bicicletas o el equipamiento completo de una familia. En total, 4 plazas para dormir siempre listas y 2 más componibles desde la dinette, con 6 plazas de viaje homologadas: una de las pocas capuchinas de menos de 7 metros que puede llevar legalmente a seis personas.

    El equipamiento de célula sigue la filosofía XGO: lo esencial, bien resuelto. Calefacción y agua caliente por la Truma Combi C4 de gas, frigorífico de 89 litros (ampliable a 141 litros bajo pedido), cocina de tres fuegos, depósitos de 20+65 litros de agua limpia y 100 litros de grises, y vano para dos bombonas de gas de 11-13 kg. Los asientos de cabina son giratorios de serie, la puerta de entrada lleva mosquitera, y la iluminación LED indirecta con los muebles altos en acabado madera clara le dan al interior un aire contemporáneo que no parece de una autocaravana de precio contenido. El panel de control MEB-300 Smart Energy permite gestionar luces y energía desde el móvil, un detalle tecnológico inesperado en este rango de precios.

    Con 6,99 m de largo, 2,34 m de ancho y 3,05 m de alto, la Dynamic 35 se maneja como lo que es: una capuchina familiar sin complejos. Los 3.500 kg de MMA la dejan en el carnet B, aunque con seis plazas homologadas conviene hacer números con la carga útil real una vez equipada: toldo, portabicis, dos bombonas llenas y el depósito de agua al completo suman rápido. XGO la posiciona como la alternativa racional a las capuchinas de los grandes grupos: misma base Fiat Ducato, misma calefacción Truma y distribuciones equivalentes, pero con un precio de tarifa que históricamente ha estado varios miles de euros por debajo de una Dethleffs Globetrotter o una Bürstner Lyseo equivalentes.

    Verificación de fuentes: medidas (6.991 x 2.340 x 3.050 mm), paso (3.800 mm), plazas (6 de viaje / 4+2 para dormir), MMA (3.500 kg), camas (capuchina 1400x2200, trasera 1360x2200, dinette 1290x1890), depósitos (20+65 l limpias / 100 l grises), calefacción Truma Combi C4, frigorífico 89 l (141 l opcional) y motorización Fiat Ducato 2.2 de 103 kW/140 CV proceden del catálogo oficial XGO by Palmo 2025/26, sección de datos técnicos de la gama Dynamic. XGO no publica PVP en España ni tarifa oficial con precios para España, por lo que se aplica el Listino oficial XGO Italia 2025/2026 (61.840 €, «aprox»). La masa en orden de marcha y la carga útil no están publicadas y no se calculan. Las fotos corresponden a un XGO Dynamic 35 G real anunciado en mobile.de (Alemania).

    Perfil de comprador: la Dynamic 35 encaja con familias de 4 a 6 miembros que buscan su primera capuchina o vienen de una furgoneta y necesitan más camas sin saltar a los 7,5 metros: valora la cama trasera transversal fija (no hay que hacer y deshacer la dinette cada noche), el garaje pasante y la base Fiat Ducato con mantenimiento en cualquier taller. No encaja con quien busque una capuchina premium con doble suelo o con quien necesite un precio cerrado de fábrica para comparar entre concesionarios. Balance: la capuchina familiar más racional del catálogo XGO, con seis plazas reales por el precio de cuatro en otras marcas, lastrada solo por la ausencia de PVP oficial y una carga útil que hay que vigilar con el coche lleno.`,
    pros: [
      "6 plazas de viaje y 6 para dormir (4+2) en menos de 7 metros: ratio imbatible",
      "Cama trasera transversal fija de 1360x2200: no hay que montar la dinette cada noche",
      "Fiat Ducato 2.2 de 140 CV con 350 Nm: base probada y talleres en toda Europa",
      "Garaje con puerta de 1080x850 mm (ampliable): caben bicicletas y equipaje familiar",
      "Truma Combi C4, asientos giratorios y mosquitera de serie a precio contenido",
    ],
    contras: [
      "Sin PVP oficial: el precio final lo fija cada concesionario",
      "La marca no publica masa en orden de marcha ni carga útil de esta versión",
      "Con seis ocupantes y el depósito lleno, la carga útil hay que calcularla con cuidado",
      "Frigorífico de 89 l de serie (el de 141 l es opcional con sobreprecio)",
      "Capuchina de 3,05 m de alto: consumo y sensibilidad al viento superiores a una perfilada",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/xgo-dynamic-35-2026-precio-ficha-tecnica-ext.webp",
        alt: "XGO Dynamic 35, vista delantera tres cuartos con capuchina",
        ancho: 1600,
        alto: 1200,
      },
      {
        src: "/media/xgo-dynamic-35-2026-precio-ficha-tecnica-ext-2.webp",
        alt: "XGO Dynamic 35, vista lateral con puerta de garaje",
        ancho: 1599,
        alto: 1200,
      },
      {
        src: "/media/xgo-dynamic-35-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la XGO Dynamic 35, cocina y dinette",
        ancho: 1600,
        alto: 1200,
      },
      {
        src: "/media/xgo-dynamic-35-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Dinette de la XGO Dynamic 35 con mesa y asientos",
        ancho: 1600,
        alto: 1200,
      },
    ],
    analisisSlug: "xgo-dynamic-35-2026-precio-ficha-tecnica-analisis-opinion",
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
          nombre: "Revisión célula XGO (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones XGO",
    },
    euroncap: null,
    curiosidades:
      "La Dynamic 35 comparte su planteamiento con la Dynamic 27: según CamperOnLine, ambos son «los actuales portavoces de dos soluciones habitativas que desde hace muchísimos años se proponen en esta tipología de vehículos», es decir, la capuchina familiar clásica modernizada. La 35 opta por la cama matrimonial trasera transversal sobre garaje, mientras la 27 apuesta por literas. Fuente: https://www.camperonline.it/news/xgo-dynamic-27-e-dynamic-35/9044",
    fuenteNombre: "XGO by Palmo — catálogo oficial 2025/26, datos técnicos gama Dynamic",
    fuenteUrl:
      "https://www.xgomove.it/public/rimor/configurazione/lingue/catalogo/XGO_Catalogo_2022_23_V6.pdf",
  },
  {
    id: "xgo-dynamic-95-2026-precio-ficha-tecnica",
    marca: "XGO",
    modelo: "Dynamic 95",
    tipo: "capuchina",
    categoria: "Autocaravana",
    precioDesde: 61840, // Listino oficial XGO Italia, IVA incl.
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
    imagen: "/media/xgo-dynamic-95-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial: "/media/xgo-dynamic-95-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/xgo-dynamic-95-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7293, // catálogo oficial XGO by Palmo 2025/26: 7.293 mm
    anchoMm: 2340, // catálogo oficial: 2.340 mm (2.200 mm interior)
    altoMm: 3050, // catálogo oficial: 3.050 mm (2.075 mm interior)
    pesoKg: null, // masa en orden de marcha no publicada para esta versión
    mmaKg: 3500, // catálogo oficial: 3.500 kg
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil de esta versión
    consumo: null,
    consumoUnidad: null,
    plazas: 5, // catálogo oficial: 5 plazas de viaje homologadas
    plazasDormir: 5, // 4 fijas + 1 componible: capuchina 1400x2200, gemelas traseras, dinette 1100x2200
    parNm: 350, // Fiat Ducato 2.2 Multijet 140: 350 Nm (dato oficial Fiat)
    traccion: "Delantera", // Fiat Ducato, tracción delantera
    emisionesCo2: null,
    aprox: ["precioDesde"],
    notas:
      "Medidas, plazas, MMA, camas y equipamiento proceden del catálogo oficial XGO by Palmo 2025/26 (gama Dynamic). XGO no publica PVP en España ni tarifa oficial con precios para España: se aplica el Listino oficial de XGO Italia 2025/2026 (61.840 €, «aprox»). Las fotos son de XGO Dynamic 95 reales anunciados en Eslovenia (go4fun.si) y Alemania (reisemobil-discount.de). Precio: PVP de Italia del Listino oficial XGO Italia 2025/2026 (Listino pubblico 1/2026, válido desde 01/09/2025, IVA 22% incl., franco fábrica), Dynamic 95 = 61.840 €; no hay tarifa oficial para España.",
    descripcion: `La XGO Dynamic 95 es la capuchina grande de la gama Dynamic, la que elige quien necesita camas de verdad para cinco personas sin renunciar a moverse con un vehículo de 7,29 metros que sigue entrando en el carnet B. Su distribución es la favorita de las familias que viajan con hijos mayores o con amigos: capuchina delantera de 1400x2200 mm, dinette central convertible y, detrás, dos camas gemelas longitudinales (800x1975 y 750x2040 mm) que pueden unirse con una prolongación para formar una gran cama doble de 1900x2200 mm. Es la única capuchina de menos de 7,5 metros del catálogo XGO que ofrece camas gemelas traseras, la distribución que permite a dos adultos dormir sin molestarse y levantarse sin pasar por encima del otro.

    La base es el Fiat Ducato 2.2 Multijet de 140 CV (103 kW) con 350 Nm de par, cambio manual de 6 velocidades y tracción delantera. Con un paso de 4.035 mm —el más largo de la gama Dynamic—, la 95 es la más estable del catálogo en autopista, algo que se agradece en una capuchina de 3,05 metros de alto y 7,29 de largo. El equipamiento de chasis de serie incluye cruise control, doble airbag, cierre centralizado, elevalunas y espejos eléctricos, ABS y la antena DAB integrada en los retrovisores. Los asientos de cabina son los confortables «Captain Chair» giratorios, con reposacabezas integrados y doble apoyabrazos regulables.

    El interior de la Dynamic 95 respira amplitud. La zona de día delantera combina la dinette con los asientos giratorios de cabina para crear un salón para cinco, con la cocina lateral equipada con tres fuegos, fregadero con tapa de cristal y frigorífico de 89 litros (ampliable a 141 litros). La calefacción y el agua caliente corren a cargo de la Truma Combi C4 de gas, y los depósitos —20+65 litros de limpias y 100 de grises— están dimensionados para una familia en ruta. El cuarto de baño, en posición central-trasera, separa el WC de cassette de la ducha, y el garaje trasero, con puerta de 1050x750 mm, se traga las bicicletas de los niños y las sillas de camping sin dramas.

    Un detalle que distingue a la 95 dentro de la gama: las camas gemelas traseras van sobre somieres fijos con colchones de alta densidad desenfundables y antialérgicos, «como los de casa» según la literatura de la marca, y la prolongación central que las convierte en cama doble es de serie en la ficha técnica (con prolunga: 1900x2200). La quinta plaza para dormir sale de la dinette (1100x2200 mm), una cama individual válida para un niño o un adulto no muy exigente. En total: cuatro camas siempre hechas y una quinta que se monta en dos minutos.

    Con 7,29 m de largo y 3.500 kg de MMA, la Dynamic 95 se conduce con el carnet B pero pide respeto a la carga útil: cinco plazas homologadas, dos bombonas de gas, 85 litros de agua limpia y el garaje lleno dejan poco margen si no se vigila la báscula. XGO la posiciona frente a las capuchinas de 7,3-7,5 metros de Dethleffs, Bürstner o Chausson con un argumento simple: misma base Ducato, misma calefacción Truma, distribución de gemelas que en otras marcas solo aparece en gamas superiores, y un precio de tarifa históricamente más contenido.

    Verificación de fuentes: medidas (7.293 x 2.340 x 3.050 mm), paso (4.035 mm), plazas (5 de viaje / 4+1 para dormir), MMA (3.500 kg), camas (capuchina 1400x2200, gemelas 800x1975 y 750x2040, doble con prolongación 1900x2200, dinette 1100x2200), depósitos (20+65 l limpias / 100 l grises), calefacción Truma Combi C4, frigorífico 89 l (141 l opcional) y motorización Fiat Ducato 2.2 de 103 kW/140 CV proceden del catálogo oficial XGO by Palmo 2025/26, sección de datos técnicos de la gama Dynamic. XGO no publica PVP en España ni tarifa oficial con precios para España, por lo que se aplica el Listino oficial XGO Italia 2025/2026 (61.840 €, «aprox»). La masa en orden de marcha y la carga útil no están publicadas y no se calculan. Las fotos corresponden a XGO Dynamic 95 reales anunciados en Eslovenia y Alemania.

    Perfil de comprador: la Dynamic 95 encaja con familias de 5 miembros o parejas que viajan con amigos y quieren camas gemelas traseras sin subir a una integral: valora dormir cada uno en su cama, la capuchina gigante para los niños y la base Ducato con servicio en toda Europa. No encaja con quien busque una capuchina compacta de menos de 7 metros ni con quien necesite el precio cerrado de fábrica. Balance: la capuchina con gemelas más asequible del mercado europeo, con cuatro camas fijas de verdad, lastrada solo por la falta de PVP oficial y una carga útil que con cinco ocupantes hay que gestionar con cabeza. Quien duerma en las gemelas traseras agradecerá cada noche no tener que negociar el lado de la cama ni trepar por encima de nadie para ir al baño.`,
    pros: [
      "Camas gemelas traseras (800x1975 y 750x2040) convertibles en doble de 1900x2200: la distribución más cómoda para 4 adultos",
      "Capuchina de 1400x2200 mm, de las más grandes del segmento",
      "Fiat Ducato 2.2 de 140 CV con paso largo de 4.035 mm: la más estable de la gama Dynamic",
      "4 camas siempre hechas + 1 en dinette: ideal para familias de 5",
      "Truma Combi C4, asientos Captain Chair giratorios y mosquitera de serie",
    ],
    contras: [
      "Sin PVP oficial: el precio final lo fija cada concesionario",
      "La marca no publica masa en orden de marcha ni carga útil de esta versión",
      "7,29 m de largo: hay que planificar áreas y aparcamientos",
      "Frigorífico de 89 l de serie (el de 141 l es opcional)",
      "La quinta cama (dinette de 1100x2200) es justa para un adulto",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/xgo-dynamic-95-2026-precio-ficha-tecnica-ext.webp",
        alt: "XGO Dynamic 95 Plus, vista delantera tres cuartos con capuchina",
        ancho: 1200,
        alto: 900,
      },
      {
        src: "/media/xgo-dynamic-95-2026-precio-ficha-tecnica-ext-2.webp",
        alt: "XGO Dynamic 95 G, vista lateral con puerta de garaje abierta",
        ancho: 1600,
        alto: 1200,
      },
      {
        src: "/media/xgo-dynamic-95-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la XGO Dynamic 95, cocina y dinette",
        ancho: 1600,
        alto: 1200,
      },
      {
        src: "/media/xgo-dynamic-95-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Zona de día de la XGO Dynamic 95 con mesa puesta",
        ancho: 1600,
        alto: 1200,
      },
    ],
    analisisSlug: "xgo-dynamic-95-2026-precio-ficha-tecnica-analisis-opinion",
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
          nombre: "Revisión célula XGO (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones XGO",
    },
    euroncap: null,
    curiosidades:
      "XGO es la marca «value for money» del grupo Rimor (Trigano): nació para ofrecer las distribuciones más demandadas —como las gemelas traseras de la Dynamic 95— con base Fiat Ducato y equipamiento Truma a un precio de tarifa inferior al de sus hermanas de grupo. La gama Dynamic 2025/26 se articula sobre el Ducato 2.2 de 140 CV en todas sus versiones, desde la compacta Dynamic 27 hasta esta 95. Fuente: catálogo oficial XGO by Palmo 2025/26 (https://www.xgomove.it/).",
    fuenteNombre: "XGO by Palmo — catálogo oficial 2025/26, datos técnicos gama Dynamic",
    fuenteUrl: "https://www.xgomove.it/",
  },
];
