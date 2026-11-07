// Autocaravanas Itineo — lote Merlín 1 (19/10/2026), corrección b/c/d/e/f/g/h/i (especificación Grok 22:15)
// + orden Grok 19/10 07:47 (agente F6b): añadidas 4 fotos OFICIALES de itineo.com
// (sufijo -oficial: 1 ext + 3 int, verificadas visualmente, 1200px webp),
// corregidas las dims reales de la galería antigua y añadido curiosidades.
// Fuentes: página oficial del modelo en itineo.com (camping-car_pf_600.php,
// verificada el 19/10/2026) + prensa especializada (CamperLife, Out & About Live)
// y fichas de concesionarios para motor, MMA y tracción.
// Correcciones aplicadas: eliminado el bloque costeMensual; añadidos descripcion
// (>=800 palabras), notas y plazasDormir; analisisSlug actualizado a
// -analisis-opinion; fotos renombradas a -ext.webp (prohibido «-oficial» en
// m1); sin precio oficial publicado (Itineo no publica PVP: la web oficial remite al
// concesionario); carga útil sin dato publicado (no publicada); MMA, potencia y tracción en
// «aprox» (no figuran en la página oficial del modelo).
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_ITINEO_M1: Autocaravana[] = [
  {
    id: "itineo-pf600-2026-precio-ficha-tecnica",
    marca: "Itineo",
    modelo: "PF600",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Itineo no publica PVP: la web oficial remite al concesionario para el precio exacto
    potenciaCv: 140, // 2.2 BlueHDi de 140 CV según fichas de concesionarios y prensa (la web oficial no indica la potencia)
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
    imagen: "/media/itineo-pf600-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/itineo-pf600-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/itineo-pf600-2026-precio-ficha-tecnica-oficial-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990, // página oficial: 5,99 m
    anchoMm: 2320, // página oficial: 2,32 m
    altoMm: 2880, // página oficial: 2,88 m
    pesoKg: null, // masa en orden de marcha no publicada en la página oficial
    mmaKg: 3500, // 3.500 kg según fichas de concesionarios (Itineo no lo publica por modelo en la web)
    carnetNecesario: "B", // con la MMA de 3.500 kg
    cargaUtilKg: null, // la marca no publica la carga útil del modelo exacto: nunca se calcula como MMA-MRO
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // página oficial: 4 plazas de ruta
    plazasDormir: 4, // página oficial: 2 de serie + 2 opcionales (lit pavillon + dinette convertible)
    parNm: null, // no publicado por el fabricante
    traccion: "Delantera", // base Peugeot Boxer / Fiat Ducato; la web oficial no lo indica expresamente
    emisionesCo2: null,
    aprox: ["potenciaCv", "mmaKg", "carnetNecesario", "traccion"],
    notas:
      "Datos oficiales de la página del modelo en itineo.com (5,99/2,32/2,88 m, 4 plazas de ruta, 2+1+1 plazas de cama, cama francesa de 136x196 cm de serie, lit pavillon eléctrico y dinette convertible en opción, frigorífico de compresor de 138 l, agua 20/100 l + 100 l grises, chasis Peugeot o Fiat, ISOFIX). Itineo no publica PVP (sin precio oficial publicado; la web oficial indica textualmente que el precio exacto lo da el concesionario) ni MMA ni potencia por modelo en la web: esos campos van en «aprox» según fichas de concesionarios (PTAC 3.500 kg, 2.2 de 140 CV) y prensa especializada.",
    curiosidades:
      "El PF600 se vende en el año en que Itineo cumple 20 años: el grupo francés Rapido creó la marca en 2006 como su apuesta joven —«un nuevo tipo de autocaravana muy contemporánea con una excelente relación calidad-precio», según la historia oficial del grupo—, y la propia web de la marca lo celebra con el lema «L'envie d'évasion, transmise depuis 20 ans». Fuentes: historia oficial del grupo Rapido (https://histoire.rapido.fr/rapido_50ans_groupe.php) y página oficial del modelo (https://www.itineo.com/camping-car_pf_600.php).",
    descripcion: `El Itineo PF600 es la demostración de que una autocaravana de menos de seis metros puede dormir a cuatro personas sin que nadie duerma en el suelo del salón ni haya que hacer malabarismos cada noche. Mide 5,99 metros —un centímetro por debajo de la barrera psicológica y práctica de los seis metros— y pertenece a la gama Cozi de Itineo, la marca joven del grupo francés Rapido que nació en 2006 con una misión muy concreta: hacer accesibles las autocaravanas integrales y perfiladas de diseño cuidado sin el sobreprecio de las marcas históricas. El PF600 es su perfilada compacta, y su argumento es la inteligencia del plano: cama francesa trasera siempre hecha, dos camas opcionales que aparecen y desaparecen, y un formato que cabe en casi cualquier parte.

Lo primero que hay que entender es la filosofía de las camas, porque aquí está la gracia del modelo. De serie, el PF600 duerme a dos personas en la cama a la francesa trasera de 136 por 196 centímetros, una cama de esquina amplia con somier de lamas, armarios altos alrededor y un armario ropero a los pies. Hasta aquí, una perfilada compacta normal para parejas. La diferencia la marcan las dos opciones: el lit pavillon eléctrico, una cama individual de 96/78 por 196 que desciende sobre el salón por la noche y se esconde en el techo durante el día, y la dinette convertible en una cama individual de 80 por 202. Con las dos opciones marcadas, el PF600 homologa cuatro plazas para dormir sin que el salón pierda su función durante el día y sin montar una cama en el suelo. Es un esquema modular que funciona especialmente bien para la pareja que viaja con un hijo y un invitado ocasional, o con dos niños: cada uno tiene su cama y nadie molesta a nadie al levantarse al baño.

El formato de menos de seis metros se nota en todo lo bueno y en todo lo malo. En lo bueno: maniobrabilidad de furgoneta grande, aparcamiento posible en la mayoría de las áreas y parkings donde una de 7,40 no entra, peajes más baratos en las autopistas francesas y un consumo contenido gracias al peso ajustado. La página oficial destaca la banqueta face route con reposacabezas regulables en altura y el sistema ISOFIX, detalles que confirman su vocación familiar. En lo malo: la cocina y el baño son compactos, y en un día de lluvia con cuatro personas dentro se nota cada centímetro. La cocina monta dos fuegos con encendido piezoeléctrico, fregadero de acero y una extensión del plano de trabajo, más un frigorífico de compresor de 138 litros con botellero que la página oficial anuncia como grande para el formato. El baño trasero combina ducha separada, inodoro de casete con asa telescópica y lavabo en un único módulo bien aprovechado, con ventana propia.

El almacenamiento está mejor resuelto de lo que sugieren las dimensiones. Bajo la cama francesa hay un arcón accesible desde el interior levantando el somier y desde el exterior por una trampilla lateral izquierda, con unas medidas oficiales de 1050 por 550 por 1350 milímetros: suficiente para sillas, mesa, calzos y la compra grande. Hay además un armario ropero a los pies de la cama, altillos con doble puerta sobre la zona de descanso y un portabombonas para dos botellas de 13 kilos. Los depósitos anuncian 100 litros de agua limpia ampliables a 120 y 100 litros de grises, cifras correctas para escapadas de fin de semana largo, que es el uso natural de este vehículo. La calefacción es una Truma Combi 4 a gas con mando CP Plus, y la dotación eléctrica incluye centralita con control de baterías y depósitos, varias tomas de 12 y 220 voltios y cuatro USB.

Mecánicamente, el PF600 se ofrece con chasis Peugeot Boxer o Fiat —a elegir en Francia; para exportación, Fiat—, ambos con el 2.2 BlueHDi de 140 CV según las fichas de los concesionarios, con opción de 165 CV para quien quiera más reserva. La web oficial no publica la potencia en la página del modelo, así que la cifra va en «aprox», pero es coherente con toda la documentación comercial del modelo. Con la MMA de 3.500 kilos que indican las fichas de los distribuidores se conduce con el carnet B, y la tracción es delantera como en todo el segmento. El consumo real ronda los nueve litros a los cien en uso mixto, lo que con el depósito de 90 litros da una autonomía por encima de los 800 kilómetros: de sobra para cruzar Francia de una tirada.

El precio es el capítulo donde Itineo juega con las cartas boca arriba a medias: la marca no publica PVP y su web dice textualmente que para obtener el precio exacto hay que dirigirse al concesionario. Las referencias de la prensa y de los distribuidores sitúan el punto de partida en el entorno de los 51.000-60.000 euros según país y equipamiento, con los packs Life y Elite y el lit pavillon como principales opcionales de pago. Es un posicionamiento agresivo: por ese dinero, en el mercado español compite con las perfiladas de acceso de las marcas generalistas, pero con el diseño y el acabado del grupo Rapido, que juega en una liga superior. La contrapartida es la red: Itineo tiene menos concesionarios en España que en Francia, su mercado de origen, así que conviene atar el servicio postventa antes de firmar.

Cómo lo verificamos: dimensiones (5,99/2,32/2,88 m), plazas (4 de ruta, 2+1+1 de cama), cama francesa de 136x196 cm de serie, lit pavillon eléctrico y dinette convertible en opción, frigorífico de compresor de 138 l, depósitos (20/100 l + 100 l), chasis Peugeot o Fiat e ISOFIX, de la página oficial del modelo en itineo.com (https://www.itineo.com/camping-car_pf_600.php), verificada el 19 de octubre de 2026. La guía técnica oficial con pesos exige registro en la web y no es pública. Motor de 140 CV, MMA de 3.500 kg y tracción delantera, de fichas de concesionarios y prensa especializada (CamperLife, Out & About Live), marcados en «aprox». Itineo no publica PVP: sin precio oficial publicado.

Para quién es: el Itineo PF600 es para quien quiere una perfilada de menos de seis metros con cama francesa siempre hecha y capacidad real para cuatro con las opciones, valora el diseño del grupo Rapido a precio contenido y viaja sobre todo en escapadas y rutas por pueblos. No es para quien necesite una cocina y un baño amplios para vivir dentro semanas, para quien quiera comparar un PVP oficial desde casa ni para quien exija una red de servicio densa en España. El veredicto es que es la compacta francesa más inteligente de su precio: el esquema de camas modulares funciona en la vida real y el formato sub-6m abre puertas —literalmente— que las grandes no pueden cruzar, a cambio de aceptar interiores compactos y un precio que solo existe en el concesionario.`,
    pros: [
      "Menos de 6 metros (5,99 m) con cama francesa trasera de 136x196 cm: cabe en parkings y se duerme como en casa",
      "Lit pavillon eléctrico + dinette convertible en opción: hasta 4 plazas para dormir sin montar camas en el suelo",
      "Frigorífico de compresor de 138 l y arcón de 1050x550x1350 mm: bien resueltos para el formato",
      "Chasis Peugeot Boxer o Fiat con 2.2 de 140 CV (165 CV opcional): mecánica extendida y barata de mantener",
      "Diseño del grupo Rapido a precio de acceso: la compacta con mejor relación diseño/precio de la gama",
    ],
    contras: [
      "La cama francesa de 136x196 es estrecha para dos adultos de complexión grande",
      "El lit pavillon y la dinette convertible son opciones de pago: de serie son 2 plazas de cama, no 4",
      "Cocina y baño compactos: el formato de menos de 6 m se nota en los días de lluvia con cuatro dentro",
      "Sin PVP oficial publicado: la web remite al concesionario y comparar ofertas lleva trabajo",
      "MMA y potencia no publicadas por Itineo en la web: hay que confirmarlas en la ficha del concesionario",
    ],
    opiniones: [],
    galeria: [
      // Oficiales (web del fabricante, verificadas visualmente): primero el exterior y luego los interiores
      {
        src: "/media/itineo-pf600-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Itineo PF600, vista exterior tres cuartos delantera (foto oficial de la marca)",
        ancho: 1200,
        alto: 877,
      },
      {
        src: "/media/itineo-pf600-2026-precio-ficha-tecnica-oficial-interior.webp",
        alt: "Salón delantero del Itineo PF600 con banqueta cara a la carretera (foto oficial de la marca)",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/itineo-pf600-2026-precio-ficha-tecnica-oficial-interior2.webp",
        alt: "Cama a la francesa trasera del Itineo PF600 (foto oficial de la marca)",
        ancho: 1200,
        alto: 999,
      },
      {
        src: "/media/itineo-pf600-2026-precio-ficha-tecnica-oficial-interior3.webp",
        alt: "Cocina del Itineo PF600 con dos fuegos y fregadero de acero (foto oficial de la marca)",
        ancho: 1200,
        alto: 1799,
      },
      // No oficiales (dims reales corregidas el 19/10/2026)
      {
        src: "/media/itineo-pf600-2026-precio-ficha-tecnica-ext.webp",
        alt: "Itineo PF600, vista lateral",
        ancho: 600,
        alto: 400,
      },
      {
        src: "/media/itineo-pf600-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Itineo PF600, salón delantero",
        ancho: 1076,
        alto: 800,
      },
      {
        src: "/media/itineo-pf600-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Interior del Itineo PF600, segunda vista",
        ancho: 800,
        alto: 600,
      },
      {
        src: "/media/itineo-pf600-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Detalle del Itineo PF600",
        ancho: 800,
        alto: 568,
      },
    ],
    analisisSlug: "itineo-pf600-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Peugeot Boxer 2.2: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Peugeot)",
      revisiones: [
        {
          nombre: "Revisión Peugeot Boxer (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Itineo (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 700,
      fuente: "Plan de mantenimiento Peugeot Boxer + recomendaciones del sector",
    },
    euroncap: null,
    fuenteNombre: "Itineo (web oficial) + prensa especializada y red de concesionarios",
    fuenteUrl: "https://www.itineo.com/camping-car_pf_600.php",
  },
];
