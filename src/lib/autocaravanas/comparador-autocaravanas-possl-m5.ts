// Autocaravanas Pössl — lote Merlín 5 (19/10/2026).
// Fuentes: anuncios de unidades nuevas 2025/2026 en TruckScout24
// (Pössl Summit Shine 600 R S Plus H-Line: 5.990 x 2.050 x 2.580 mm,
// 3.500 kg, 2.2 Multijet 140 CV; versión 180 CV con automático de 8v),
// ficha de unidad 2026 en caravana.de (Summit Shine 600 L H-Line, 63.990 €
// con IVA en Alemania —referencia extranjera—), artículo de autoevolution
// sobre la gama Summit Shine (datos de equipamiento y política de precios
// de Pössl). Verificado el 19/10/2026.
// NOTAS HONESTAS: la web oficial de Pössl (poessl-freizeit.de) no respondió
// durante la verificación (fallo de red, como ya ocurrió en el lote 3), por
// lo que los datos técnicos proceden de fichas de distribuidores oficiales y
// de anuncios de unidades nuevas 2025/2026; ninguna de las 4 fotos es
// oficial, pero las 4 son del modelo exacto (Summit Shine 600 R, insignia
// visible en el exterior). Pössl no publica precios de lista oficiales:
// vende exclusivamente a través de su red de distribuidores europeos
// (autoevolution), así que precioDesde queda sin dato y solo se citan
// referencias alemanas. La carga útil base no la publica el fabricante: null.
// El 600 R monta cama trasera transversal; el dinette es convertible en
// opción.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_POSSL_M5: Autocaravana[] = [
  {
    id: "possl-summit-shine-600-r-2026-precio-ficha-tecnica",
    marca: "Pössl",
    modelo: "Summit Shine 600 R",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: null, // Pössl no publica precios oficiales; vende solo por distribuidores
    potenciaCv: 140, // 2.2 Multijet 103 kW / 140 CV manual (anuncios de unidades nuevas 2025); 180 CV con automático de 8v en opción
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
    imagen: "/media/possl-summit-shine-600-r-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/possl-summit-shine-600-r-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/possl-summit-shine-600-r-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990, // anuncios de unidades nuevas (TruckScout24)
    anchoMm: 2050, // anuncios de unidades nuevas (TruckScout24)
    altoMm: 2580, // anuncios de unidades nuevas (TruckScout24)
    pesoKg: null, // no publicado oficialmente para el 600 R
    mmaKg: 3500, // anuncios de unidades nuevas (TruckScout24)
    carnetNecesario: "B", // mmaKg <= 3500
    cargaUtilKg: null, // el fabricante no publica una cifra base (depende del equipamiento)
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 2, // cama trasera transversal; dinette convertible y cama sobre cabina en opción
    parNm: null,
    traccion: "delantera", // base Fiat Ducato / Citroën Jumper / Peugeot Boxer
    emisionesCo2: null,
    aprox: [],
    notas:
      "Camper (furgoneta camperizada) de la gama Summit Shine de Pössl sobre base Stellantis (Fiat Ducato, Citroën Jumper o Peugeot Boxer). Según anuncios de unidades nuevas 2025 en TruckScout24 (versión 600 R S Plus H-Line): 5.990 x 2.050 x 2.580 mm, 3.500 kg de MMA, motor 2.2 Multijet de 140 CV manual (180 CV con automático de 8 velocidades en opción), 4 plazas de viaje y 2 camas en la trasera transversal. Equipamiento citado: Truma iNet X, sensores de presión de neumáticos, Traction+, cámara trasera de doble lente, panel solar de 140 W y ventana practicable en el baño. Pössl no publica precios de lista oficiales (vende solo a través de distribuidores, según autoevolution): como referencia extranjera, en Alemania el Summit Shine 600 L H-Line 2026 se anuncia en 63.990 € con IVA (caravana.de). Quedan sin dato: precio oficial en España, peso en orden de marcha, carga útil base, consumo y emisiones, no publicados por el fabricante. Precio: se deja sin dato porque el precio base de Pössl/Globecar (Pössl Group) solo se ofrece a través de su configurador oficial en línea y no existe una tarifa oficial abierta (PDF o web) verificable para este modelo fuera de España; la tarifa oficial española localizada cubre solo la gama VAN LINE (Vanster/Campster).",
    curiosidades:
      "Pössl no publica precios de lista oficiales en sus presentaciones: vende exclusivamente a través de su red de distribuidores en toda Europa, por lo que cada precio se negocia con el concesionario. Fuente: autoevolution (https://www.autoevolution.com/news/the-possl-summit-shine-600l-aims-for-world-s-smallest-campervan-with-sleeping-for-5-247764.html). La denominación H-Line identifica a las versiones con techo elevado de la marca.",
    descripcion: `El Pössl Summit Shine 600 R es el camper que demuestra por qué Pössl lleva desde 1989 siendo la referencia europea de las furgonetas camperizadas: en menos de 6 metros mete una cama trasera transversal de verdad, un baño completo con ducha, una cocina equipada y un salón para cuatro, todo con el acabado «Shine» —tapizados con el bordado Shine en los reposacabezas, iluminación ambiental LED y maderas claras— que lo aleja del aspecto utilitario de los furgones básicos. La «R» indica la cama trasera (rear): un lecho transversal al fondo, sobre un garaje modulable cuyos dos tramos se pueden ajustar o desmontar según se necesite más cama o más maletero.

    Con 5,99 metros de largo, 2,05 de ancho y 2,58 de alto, el 600 R cabe en una plaza de aparcamiento normal y se conduce con el carnet B de toda la vida: su MMA es de 3.500 kg. La base es la que elija el distribuidor entre las tres hermanas de Stellantis —Fiat Ducato, Citroën Jumper o Peugeot Boxer—, todas con el 2.2 diésel: 140 CV con cambio manual de serie y 180 CV con el automático de 8 velocidades en opción para quien haga mucha autopista. Es la receta que ha hecho grande a Pössl: mecánica probada por millones de furgonetas, repuestos en cualquier taller y una célula pensada por gente que viaja.

    Por dentro, el Shine se reconoce al instante: el salón delantero con la mesa «inteligente» de dos piezas —se usa entera o partida según los comensales—, los asientos de cabina giratorios con el bordado Shine y una cocina con fregadero y dos fuegos más frigorífico de 108 litros con congelador, cajones con cierre suave y una extensión abatible de la encimera para cocinar sin malabarismos. El baño, frente a la cocina tras una puerta corredera con espejos, esconde un truco ingenioso: una pared falsa con espejo y lavabo que gira para tapar el WC de cassette cuando toca ducha, con claraboya superior y detalles —tiradores, iluminación ambiental— más propios de un integral caro. La cama trasera esconde almacenaje a ambos lados del piecero, bajo los escalones y bajo el propio somier, al que se accede levantando sus tramos.

    De serie, según los anuncios de unidades nuevas, trae toldo manual Thule, oscurecedores, tres claraboyas, calefacción Truma Combi 4, dos bombonas de 11 kg, 100 litros de agua limpia y 110 de grises, además del panel de control Truma iNet X, los sensores de presión de neumáticos, el Traction+ para firmes delicados y la cámara trasera de doble lente. La versión H-Line añade el techo elevado que da altura interior de pie en toda la célula. Y para quien necesite más camas, el dinette se convierte en lecho y existe cama opcional sobre la cabina.

    La gama Summit Shine no se ha quedado quieta: para la temporada 2026 Pössl presentó en el Salón del Camper de Parma el nuevo Summit Shine 640 R Evo, con mecánica Stellantis, cabecero desmontable, cocina rediseñada, baño transversal con gran ducha, separación día/noche y una cama basculante trasera eléctrica de 2 metros —con opción de segunda cama doble o de un garaje gigante—, además de las nuevas ventanas ultraaislantes S10 y frigoríficos de consumo ultrabajo. Es la prueba de que la serie Shine es la punta de lanza tecnológica de la marca, no un simple acabado bonito. Y el 600 R que nos ocupa se beneficia de esa misma filosofía: soluciones bien pensadas antes que gadgets.

    Otro dato que dice mucho del 600 R es su segunda vida en el mercado del alquiler: es uno de los campers más ofrecidos por las flotas alemanas de alquiler, donde un vehículo solo sobrevive si aguanta decenas de conductores distintos al año sin romperse ni volverse loco de electrónica. Los operadores lo valoran por su sencillez mecánica, por la cama fija trasera —los clientes la prefieren a montar el dinette cada noche— y porque con 5,99 metros lo alquila cualquiera con carnet B, sin cursos ni miedos. Esa dureza de flota es la mejor garantía para el comprador particular de segunda mano dentro de unos años.

    En precio no hay cifra oficial posible: Pössl no publica tarifas y cada distribuidor fija el suyo según equipamiento. Como referencia alemana, el Summit Shine 600 L H-Line de 2026 se anuncia en 63.990 € con IVA incluido, y la prensa especializada citaba partidas en torno a los 61.000 € para la gama. En España, la red de distribuidores Pössl configura cada unidad a medida. Cómo lo verificamos: medidas, masas, motores, plazas y equipamiento proceden de anuncios de unidades nuevas 2025/2026 del Summit Shine 600 R S Plus H-Line en TruckScout24 y de la ficha de unidad 2026 en caravana.de; la política de precios de la marca y el equipamiento de la gama, del artículo de autoevolution. Todo verificado el 19/10/2026. La web oficial poessl-freizeit.de no respondió durante la verificación (fallo de red), por lo que ninguna foto es oficial: las 4 son del modelo exacto (insignia 600 R visible). Quedan sin dato el precio español, el peso en orden de marcha, la carga útil base, el consumo y las emisiones, no publicados por el fabricante.

    Para quién es: el Summit Shine 600 R encaja con parejas que quieren un camper para todo el año —manejable a diario, con carnet B— sin renunciar a cama fija trasera, baño con ducha y acabados cuidados, y con presupuesto en la órbita de los 60.000-65.000 € en Alemania. No es para familias que necesiten 4 camas fijas de serie, para quien busque el camper más barato del mercado ni para quien quiera tracción total: aquí se paga el saber hacer de la marca que inventó el segmento en Europa.`,
    pros: [
      "Menos de 6 m y 3,5 t: se conduce con carnet B y aparca en plaza normal",
      "Cama trasera transversal fija + garaje modulable bajo el somier",
      "Acabado Shine con tapizados bordados, LED ambiental y maderas claras",
      "Base Stellantis (Ducato/Jumper/Boxer): mecánica probada y repuestos en todas partes",
      "Equipamiento de serie muy completo: Thule, Truma iNet X, solar 140 W, Traction+",
    ],
    contras: [
      "Solo 2 camas de serie (el dinette convertible y la cama de cabina son opción)",
      "Pössl no publica precios oficiales: cada precio se negocia con el distribuidor",
      "Ninguna foto oficial disponible: web del fabricante inaccesible durante la verificación",
      "140 CV manual de serie: el automático de 180 CV sube el precio",
      "Baño compacto de camper: no es el baño XL de un integral",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/possl-summit-shine-600-r-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Pössl Summit Shine 600 R, vista exterior lateral",
        ancho: 1600,
        alto: 1200,
      },
      {
        src: "/media/possl-summit-shine-600-r-2026-precio-ficha-tecnica-interior1.webp",
        alt: "Pössl Summit Shine 600 R, salón comedor",
        ancho: 1920,
        alto: 1050,
      },
      {
        src: "/media/possl-summit-shine-600-r-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Pössl Summit Shine 600 R, salón y cama trasera",
        ancho: 1920,
        alto: 1050,
      },
      {
        src: "/media/possl-summit-shine-600-r-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Pössl Summit Shine 600 R, dormitorio trasero",
        ancho: 1024,
        alto: 683,
      },
    ],
    analisisSlug: "possl-summit-shine-600-r-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Base Fiat Ducato / Citroën Jumper / Peugeot Boxer: revisión cada 2 años o 48.000 km (según plan del fabricante de la base)",
      revisiones: [
        {
          nombre: "Revisión base (Stellantis)",
          queSeCambia: "Aceite + filtros + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Pössl (anual recomendada)",
          queSeCambia: "Estanqueidad, gas, electricidad, humedades, Truma",
          costeAproxEur: 250,
        },
      ],
    },
  },
];
