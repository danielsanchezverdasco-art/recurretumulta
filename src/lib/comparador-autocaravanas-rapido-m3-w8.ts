// Autocaravanas Rapido — lote Merlín 3 (19/10/2026).
// Fuentes: rapido-camping-car.fr (web oficial FR), rando-moto.be (gama y precios 2025),
// espritcampingcar.com y camperlife.it (lanzamiento serie C 2021), campingcarlesite.com,
// alpacacamping.de (datos técnicos serie C), outandaboutlive.co.uk (prueba del C55).
// Verificado el 19/10/2026.
// Notas honestas: Rapido no publica tarifa oficial en abierto (precioDesde en null; se citan
// precios de concesionarios 2025 con fuente). Masa en orden de marcha no publicada para el C55
// perfilado (pesoKg en null). Capacidad de aguas no verificada en fuente oficial (null).
// Tracción no declarada por la marca en la documentación consultada (null).
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_RAPIDO_M3: Autocaravana[] = [
  {
    id: "rapido-c55-2026-precio-ficha-tecnica",
    marca: "Rapido",
    modelo: "C55",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Rapido no publica tarifa oficial en abierto; no inventar
    potenciaCv: 140, // Peugeot Boxer 2.2 l 140 CV (gama 2025, fuente: rando-moto.be)
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
    imagen: "/media/rapido-c55-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/rapido-c55-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/rapido-c55-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6720, // 6,72 m (espritcampingcar.com, camperlife.it, campingcarlesite.com)
    anchoMm: 2170, // 2,17 m, serie C "slim" (oficial rapido-camping-car.fr)
    altoMm: 2750, // 2,75 m (camprest.com, lanzamiento serie C)
    pesoKg: null, // masa en orden de marcha no publicada por la marca; no inventar
    mmaKg: 3500, // PTAC 3.500 kg (ypocamp.fr, alpacacamping.de)
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no la publica; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 places carte grise (espritcampingcar.com)
    plazasDormir: 3, // 2 camas gemelas + salón convertible (espritcampingcar.com)
    parNm: null,
    traccion: null, // no declarada por la marca en la documentación consultada
    emisionesCo2: null,
    aprox: [],
    notas:
      "Largo 6,72 m, ancho 2,17 m y alto 2,75 m: prensa especializada del lanzamiento de la serie C (espritcampingcar.com, camperlife.it, 2021) y comparador alpacacamping.de. Motor Peugeot Boxer 2.2 140 CV en la colección 2025 (rando-moto.be); temporadas anteriores pudieron usar otra base, no verificado. PTAC 3.500 kg (ypocamp.fr, alpacacamping.de). Plazas: 4 homologadas, 5 comensales, 3 camas (espritcampingcar.com). Camas gemelas de 80x199 y 80x185 cm convertibles en doble transversal (campingcarlesite.com). Baño Duo'Space con tabique pivotante (camperlife.it, campingcarlesite.com). Frigorífico de compresión de 90 l en 2021 (espritcampingcar.com) y 140 l en la Night Edition 2025 (rando-moto.be). Calefacción Truma Combi 4 diésel (alpacacamping.de) / Combi 4EH diésel+eléctrica en Night Edition (rando-moto.be). Precio: Rapido no publica tarifa oficial en abierto; la colección 2025 se anunciaba desde 74.200 € en versión estándar y 79.100 € en Night Edition (rando-moto.be, precios de red comercial, no oficiales). En null: precioDesde, pesoKg (masa en orden de marcha no publicada), cargaUtilKg (no publicada; prohibido calcularla), consumo, capacidades de agua (no verificadas en fuente oficial para el perfilado), tracción.",
    curiosidades:
      "El techo panorámico Skyview del C55, de cristal laminado con tratamiento anti-UV y estor integrado, va calefactado por una canalización del propio circuito de calefacción Truma: Rapido lo calienta a propósito para limitar las pérdidas térmicas por el cristal en invierno. Fuente: https://espritcampingcar.com/nouveaute-2021-rapido-lance-sa-gamme-compacte-la-serie-c/",
    descripcion: `La Rapido C55 es la propuesta de la marca francesa para quien quiere una perfilada de verdad —con su garaje, su salón en L y sus camas gemelas— pero sin cargar con los 2,35 metros de ancho de una perfilada grande. Pertenece a la serie C, la gama "slim" que Rapido lanzó en 2021 con una anchura exterior de solo 2,17 metros, y con 6,72 metros de largo se coloca justo en el punto dulce: lo bastante larga para ofrecer una distribución completa de pareja con visitas ocasionales, y lo bastante estrecha para moverse con soltura por carreteras secundarias, pueblos y áreas donde una autocaravana ancha empieza a dar pereza. Es, en esencia, la respuesta francesa a la demanda de "menos es más" sin renunciar al confort de una gran serie.

En medidas, el C55 declara 6,72 metros de largo, 2,17 de ancho y 2,75 de alto, con un PTAC de 3.500 kilos que permite conducirla con el carnet B. Esos 18 centímetros menos de anchura respecto a una perfilada convencional se notan en dos sitios: en carretera, donde la carrocería estrecha se deja llevar con menos esfuerzo y sufre menos con el viento lateral, y en el interior, donde Rapido ha tenido que trabajar la distribución al milímetro para que no se perciba estrechez. El truco está en el techo panorámico Skyview, un gran cristal laminado con tratamiento anti-UV y estor de oscurecimiento integrado que inunda de luz el salón y elimina la sensación de tubo. No es un simple tragaluz decorativo: va calefactado por una canalización del circuito Truma para no convertirse en un puente térmico en invierno, un detalle de ingeniería que dice mucho de cómo piensa esta marca.

La distribución es la clásica de pareja exigente: salón en L delantero con asientos de cabina giratorios, cocina lateral a la izquierda de la puerta de entrada, baño con el sistema Duo'Space y dormitorio trasero con camas gemelas sobre garaje. Las camas miden 80x199 y 80x185 centímetros y pueden unirse para formar una gran doble transversal, y bajo ellas queda un garaje pasante con 1,20 metros de altura libre y puertas de carga a ambos lados, más que suficiente para dos bicicletas o todo el material de playa y montaña. Los pies de las camas esconden armarios roperos inteligentes y una puerta corredera separa la zona de noche del resto, de modo que uno puede acostarse mientras el otro sigue leyendo en el salón. El salón, con su banqueta en L, se convierte además en una tercera cama de unos 188x110 centímetros, útil para un nieto o una visita esporádica, aunque el proceso de montaje es el habitual de este tipo de transformaciones y conviene reservarlo para uso ocasional.

El baño merece capítulo aparte porque concentra una de las innovaciones que Rapido estrenó con la serie C: el Duo'Space. Es un tabique pivotante que permite aislar la zona del inodoro y el lavabo para dejar al descubierto una ducha de tamaño digno, sin salpicar lo que no se debe. En una perfilada de 6,72 metros, donde cada centímetro cuenta, esta solución evita el típico baño-todo-en-uno en el que te duchas encima del váter. La cocina, por su parte, apuesta por lo práctico: placa de dos fuegos con tapa de cristal serigrafiado, gran superficie de trabajo y frigorífico de compresión, de 90 litros en las primeras series y de 140 litros en las versiones más recientes como la Night Edition.

En mecánica, la colección 2025 monta el Peugeot Boxer 2.2 de 140 CV, disponible con cambio manual o automático, una base probadísima en el sector y con una red de servicio inmensa en España y Francia. La calefacción es una Truma Combi 4 diésel, que calienta habitáculo y agua con el propio gasóleo del depósito, eliminando la dependencia de las bombonas de gas para el invierno. El chasis admite el PTAC de 3.500 kilos sin ampliaciones, así que el carnet B basta, aunque conviene vigilar la carga útil real una vez equipada con toldo, portabicis y depósito lleno, porque las perfiladas ligeras andan justas en este capítulo y Rapido no publica la carga útil oficial.

En precio, hay que ser honesto: Rapido no publica tarifa oficial en abierto y el precio final depende del concesionario, los packs y las opciones. Como referencia verificable, la colección 2025 se anunciaba en la red comercial francesa desde unos 74.200 euros en versión estándar y desde unos 79.100 euros en la serie especial Night Edition, que añade los packs Select, Smart y Relax, la cabina en negro metalizado, la multimedia con pantalla táctil y la combinación Truma Combi 4EH diésel-eléctrica. Son precios de red comercial, no tarifa oficial, y en España pueden variar; lo sensato es pedir oferta cerrada en al menos dos concesionarios. La red Rapido en España es amplia y con solera, y la marca, empresa familiar francesa con más de 60 años, tiene fama de construcción cuidada y buen valor de reventa.

Cómo lo verificamos: las medidas (6,72 x 2,17 x 2,75 m), la distribución con camas gemelas y el baño Duo'Space proceden de la prensa especializada que cubrió el lanzamiento de la serie C en 2021 (espritcampingcar.com, camperlife.it) y del comparador técnico alpacacamping.de; el motor Peugeot Boxer 2.2 de 140 CV y los precios orientativos de 2025, del análisis de gama de rando-moto.be; la prueba dinámica y los detalles de habitabilidad, de la review del C55 en outandaboutlive.co.uk. Todo verificado el 19/10/2026. Quedan en null el precio oficial (no publicado), la masa en orden de marcha (no publicada), la carga útil (no publicada y con cálculo prohibido), el consumo y las capacidades de agua.

Para quién es: para parejas que viajan mucho a dúo y quieren una perfilada completa —garaje, camas gemelas, baño digno— en un formato manejable de 6,72 metros y 2,17 de ancho, con la calidad de construcción francesa y una red de servicio seria detrás. Para quién no es: para familias que necesiten cuatro camas fijas de verdad (la tercera plaza es un salón convertible), para quien priorice la carga útil máxima (aquí hay que pesar cada extra) ni para quien busque el precio más bajo del segmento, porque Rapido juega en la liga premium y se paga.`,
    pros: [
      "Serie C 'slim' de 2,17 m de ancho: se conduce y se aparca con mucha menos pereza que una perfilada ancha",
      "Camas gemelas de 80x199/80x185 cm convertibles en doble transversal, sobre garaje pasante de 1,20 m de altura",
      "Baño Duo'Space con tabique pivotante: ducha de tamaño digno sin mojar el inodoro",
      "Techo panorámico Skyview calefactado por el circuito Truma: luz sin puente térmico",
      "Base Peugeot Boxer 2.2 de 140 CV con cambio automático opcional y red de servicio inmensa",
    ],
    contras: [
      "Precio oficial no publicado: hay que pedir oferta en varios concesionarios y comparar packs",
      "La tercera cama es el salón en L convertido (188x110 cm): vale para uso ocasional, no para diario",
      "Carga útil no publicada por la marca: con toldo y extras hay que vigilar el peso real en báscula",
      "Los 2,17 m de ancho se agradecen fuera, pero el pasillo interior es más justo que en una 2,35 m",
      "Frigorífico de 90 l en las primeras series: algo corto para estancias largas sin reponer",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/rapido-c55-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Rapido C55, vista exterior de la perfilada",
        ancho: 600,
        alto: 354,
      },
      {
        src: "/media/rapido-c55-2026-precio-ficha-tecnica-interior1.webp",
        alt: "Rapido C55, salón en L con asientos de cabina giratorios",
        ancho: 800,
        alto: 600,
      },
      {
        src: "/media/rapido-c55-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Rapido C55, pasillo interior hacia la cocina",
        ancho: 1200,
        alto: 1600,
      },
      {
        src: "/media/rapido-c55-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Rapido C55, baño Duo'Space con tabique pivotante",
        ancho: 1600,
        alto: 896,
      },
    ],
    analisisSlug: "rapido-c55-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Base Peugeot Boxer: revisión según plan del fabricante (consultar manual; orientativo cada 2 años o 40.000 km)",
      revisiones: [
        {
          nombre: "Revisión base Peugeot Boxer",
          queSeCambia: "Aceite + filtros + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Rapido (anual recomendada)",
          queSeCambia: "Estanqueidad, gas, electricidad, humedades",
          costeAproxEur: 250,
        },
      ],
    },
  },
];
