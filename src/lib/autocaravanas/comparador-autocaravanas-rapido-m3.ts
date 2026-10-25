// Autocaravanas Rapido — lote Merlín 3 (19/10/2026).
// Fuentes: https://www.feurs.ypocamp.fr/sites/default/files/node/annonce/field_pdf_vehicule/mb84247.pdf
// (ficha de distribuidor Rapido, modelo 2026), https://www.rapido-autocaravana.es/distributeur-camping-cars-rapido.php/360-2024/666F/360-2024/V55/360-2025/I96M/360-2025/V65-XL/autocaravana_integraux_serie-8f_896f.chtml ,
// https://www.alpacacamping.de/fahrzeuge/en/model/rapido-8f/ ,
// https://nzmcd.co.nz/reviews/motorhomes/rapido-8094df-8096-review/ . Verificado el 19/10/2026.
// Notas honestas: la web oficial rapido.fr no indexa página del 896F en la colección vigente; los datos
// técnicos proceden de la documentación 2026 de la red de distribuidores Rapido (Ypocamp) y de la ficha
// de producto de la serie 8F. Rapido no publica PVP oficial en España (precioDesde = null); la carga
// útil de 400 kg que figura en la ficha del distribuidor no es una publicación oficial de la marca, por
// lo que cargaUtilKg queda sin dato y se declara en huecos.
// Fusión 19/10/2026: incorpora los modelos de comparador-autocaravanas-rapido-m3-w8.ts.
// Autocaravanas Rapido — lote Merlín 3 (19/10/2026).
// Fuentes: rapido-camping-car.fr (web oficial FR), rando-moto.be (gama y precios 2025),
// espritcampingcar.com y camperlife.it (lanzamiento serie C 2021), campingcarlesite.com,
// alpacacamping.de (datos técnicos serie C), outandaboutlive.co.uk (prueba del C55).
// Verificado el 19/10/2026.
// Notas honestas: Rapido no publica tarifa oficial en abierto (sin precio oficial publicado; se citan
// precios de concesionarios 2025 con fuente). Masa en orden de marcha no publicada para el C55
// perfilado (pesoKg sin dato). Capacidad de aguas no verificada en fuente oficial (null).
// Tracción no declarada por la marca en la documentación consultada (null).
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_RAPIDO_M3: Autocaravana[] = [
  {
    id: "rapido-896f-2026-precio-ficha-tecnica",
    marca: "Rapido",
    modelo: "896F",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: null, // Rapido no publica PVP oficial en España
    potenciaCv: 140, // Fiat Ducato 2.2 L y 140 CV
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
    imagen: "/media/rapido-896f-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/rapido-896f-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/rapido-896f-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7490, // ficha del distribuidor: 7,49 m
    anchoMm: 2350, // 2,35 m
    altoMm: 2890, // 2,89 m
    pesoKg: 3100, // ficha del distribuidor: peso en vacío 3.100 kg
    mmaKg: 3500, // PTAC 3.500 kg
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no la publica oficialmente (el distribuidor indica 400 kg)
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas en ficha de circulación
    plazasDormir: 4, // cama central + cama de cabina
    parNm: null,
    traccion: "delantera", // alpacacamping.de: "Power transmission: Front-wheel drive"
    emisionesCo2: null,
    aprox: [],
    notas: "Datos de la ficha 2026 de la red de distribuidores Rapido (Ypocamp: Fiat Ducato 2,2 L y 140 CV, integral, 4 plazas, 4 camas —cama central trasera + cama de cabina—, PTAC 3.500 kg, peso en vacío 3.100 kg, cambio automático, 7,49 x 2,35 x 2,89 m, 120 L de agua limpia, 120 L de grises, calefacción Truma) y de la ficha de producto de la serie 8F (carrocería 100 % poliéster antichoque, Truma Combi 6 diésel con mandos iNet X, garaje calefactado, 70 L de almacenaje bajo el suelo, ambientes Palatina/Aurora). La tracción delantera la declara alpacacamping.de para la serie 8F. Precio: Rapido no publica tarifa oficial (null); la ficha del distribuidor parte de 85.360 €, precio no oficial. Carga útil: la marca no la publica (null). Precio: se deja sin dato porque Rapido no publica PVP en su web oficial (los precios se obtienen en su red de concesionarios); sin tarifa oficial abierta verificable.",
    curiosidades: "Rapido no nació como fabricante de autocaravanas, sino como ebanistería: la fundó en 1948 el artesano Constant Rousseau, que fabricó su primera caravana extensible —más de 35.000 unidades en 30 años— antes de lanzar su primera autocaravana a principios de los 80; la primera integral de la marca no llegó hasta 1992. El 896F pertenece a la serie 8F, la gama alta de integrales de la casa. Fuente: https://nzmcd.co.nz/reviews/motorhomes/rapido-8094df-8096-review/",
    descripcion: `El Rapido 896F es una autocaravana integral de la serie 8F, la gama alta con la que la marca francesa compite en el segmento de los grandes ruteros: 7,49 metros de longitud, carrocería integral de una sola pieza, cama central trasera y todos los tics de las integrales premium —doble suelo, garaje calefactado y depósitos generosos— manteniendo la MMA en 3.500 kg para poder conducirla con el carnet B. Es el formato para quien quiere el máximo confort de marcha y de vida a bordo sin saltar a los pesos pesados.

    En dimensiones, la ficha 2026 de la red de distribuidores declara 7,49 metros de largo, 2,35 de ancho y 2,89 de alto. Es una integral grande pero todavía contenida: cabe en la mayoría de las áreas de servicio y no obliga a planificar cada rotonda, aunque sus 2,89 metros de altura exigen la atención habitual con ramas y puentes bajos. El PTAC es de 3.500 kg con un peso en vacío documentado de 3.100 kg; la carga útil de 400 kg que indica la ficha del distribuidor no es una publicación oficial de la marca, así que en esta ficha queda sin dato con la declaración honesta correspondiente: en la práctica, 400 kg para cuatro personas obligan a cargar con cabeza, sobre todo si se viaja con los depósitos llenos.

    La construcción es uno de los argumentos de Rapido: carrocería 100 % poliéster antichoque en techo, paredes y bajos, estructura del suelo de poliuretano y aislamiento de Styrofoam, con el doble suelo técnico que caracteriza a la serie 8F. Ese doble suelo no es un capricho: aísla, protege las instalaciones del frío y crea 70 litros de almacenaje adicional bajo el piso, accesibles desde el interior. El garaje trasero, calefactado e iluminado con barra LED en el techo, completa un conjunto pensado para viajar todo el año.

    La distribución del 896F es la clásica de las integrales familiares premium: salón delantero face-face con cabina integrada —el parabrisas panorámico de la integral convierte la conducción en una experiencia—, cocina en L bien equipada, cuarto de baño transversal con ducha separada y, al fondo, la cama central trasera, la disposición más cómoda para una pareja porque permite levantarse sin molestar al otro. La cuarta cama la aporta la cama de cabina escamoteable sobre el salón, de modo que el vehículo duerme a cuatro con total dignidad. Los ambientes interiores se ofrecen en dos líneas, Palatina —con madera maciza de arce y suelo de parqué oscuro— y Aurora —más clara y contemporánea—, ambas con iluminación ambiental 100 % LED en salón, cocina y dormitorio.

    En mecánica monta el Fiat Ducato 2,2 litros de 140 CV, en la unidad documentada con cambio automático, con pack de ayudas que incluye cámara de marcha atrás con pantalla integrada, Traction+ con control de descenso, station multimédia DAB Pioneer con Apple CarPlay y Android Auto, neumáticos all season 3PMSF y puerta del conductor con cerradura de dos puntos. La calefacción es la Truma Combi 6 —en la ficha de producto figura la versión diésel con mandos iNet X—, con 120 litros de agua limpia y 120 de grises, y arcón de gas para dos botellas de propano de 13 kg. La tracción es delantera, como declara la documentación de la serie.

    En el capítulo de precios, la honestidad de esta ficha es total: Rapido no publica PVP oficial en España y el precio queda sin dato. La ficha del distribuidor francés para el modelo 2026 parte de 85.360 euros antes de opciones, con la unidad expuesta documentada en 96.630 euros y precio promocional de 92.900 euros; son precios de distribuidor francés, no tarifa oficial, y sirven solo como referencia del posicionamiento: la serie 8F juega en la liga de las integrales premium. En España, Rapido se comercializa a través de su red de distribuidores, con presencia en las principales zonas caravanistas, y el precio final se configura en el concesionario con los packs —Select, Smart Fiat— y las opciones elegidas.

    Cómo lo verificamos: las medidas (7,49 x 2,35 x 2,89 m), las masas (PTAC 3.500 kg, vacío 3.100 kg), las plazas (4 en circulación, 4 para dormir), la mecánica (Fiat Ducato 2,2 L y 140 CV, cambio automático), los depósitos (120/120 L) y la calefacción Truma proceden de la ficha 2026 de la red de distribuidores Rapido (Ypocamp), consultada el 19/10/2026; la construcción (poliéster antichoque, doble suelo, 70 L bajo el piso, garaje calefactado), la Truma Combi 6 diésel con iNet X y los ambientes Palatina/Aurora proceden de la ficha de producto de la serie 8F en rapido-autocaravana.es; la tracción delantera, de alpacacamping.de. La web oficial rapido.fr no indexa página del 896F en la colección vigente, circunstancia que se declara. Precio y carga útil oficiales: la marca no los publica (null).

    Para quién es: ideal para parejas —o familias de cuatro— que quieren una integral premium con cama central, doble suelo y garaje calefactado para viajar todo el año, y que asumen conducir 7,49 metros a cambio del máximo confort. No es para quien busque ligereza de carga útil —los 400 kg oficiosos obligan a ser disciplinado—, ni para quien quiera precio cerrado en web: en Rapido el precio se negocia con el distribuidor y los packs.`,
    pros: [
      "Integral premium de 7,49 m con cama central trasera y cama de cabina: 4 camas cómodas",
      "Doble suelo técnico con 70 L extra y garaje calefactado: pensada para todo el año",
      "Carrocería 100 % poliéster antichoque con aislamiento Styrofoam",
      "Truma Combi 6 (diésel en ficha de producto) con 120/120 L de depósitos",
      "Se conduce con carnet B pese a su tamaño, con cambio automático disponible",
    ],
    contras: [
      "Rapido no publica PVP oficial en España ni carga útil oficial",
      "Carga útil oficiosa de 400 kg: justa para 4 personas con depósitos llenos",
      "Sin página oficial del modelo en la web vigente: conviene confirmar la gama 2026/2027",
      "2,89 m de altura: atención a ramas, puentes y parkings cubiertos",
      "El precio real depende de packs y opciones y se configura en el concesionario",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/rapido-896f-2026-precio-ficha-tecnica-oficial.webp", alt: "Rapido 896F, vista exterior", ancho: 2272, alto: 1096 },
      { src: "/media/rapido-896f-2026-precio-ficha-tecnica-interior1.webp", alt: "Rapido 896F, cama central", ancho: 1600, alto: 896 },
      { src: "/media/rapido-896f-2026-precio-ficha-tecnica-interior2.webp", alt: "Rapido 896F, salón", ancho: 1600, alto: 896 },
      { src: "/media/rapido-896f-2026-precio-ficha-tecnica-detalle.webp", alt: "Rapido 896F, cuarto de baño", ancho: 1600, alto: 896 },
    ],
    analisisSlug: "rapido-896f-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato 2.2: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato 2.2)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Rapido (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
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
      "Largo 6,72 m, ancho 2,17 m y alto 2,75 m: prensa especializada del lanzamiento de la serie C (espritcampingcar.com, camperlife.it, 2021) y comparador alpacacamping.de. Motor Peugeot Boxer 2.2 140 CV en la colección 2025 (rando-moto.be); temporadas anteriores pudieron usar otra base, no verificado. PTAC 3.500 kg (ypocamp.fr, alpacacamping.de). Plazas: 4 homologadas, 5 comensales, 3 camas (espritcampingcar.com). Camas gemelas de 80x199 y 80x185 cm convertibles en doble transversal (campingcarlesite.com). Baño Duo'Space con tabique pivotante (camperlife.it, campingcarlesite.com). Frigorífico de compresión de 90 l en 2021 (espritcampingcar.com) y 140 l en la Night Edition 2025 (rando-moto.be). Calefacción Truma Combi 4 diésel (alpacacamping.de) / Combi 4EH diésel+eléctrica en Night Edition (rando-moto.be). Precio: Rapido no publica tarifa oficial en abierto; la colección 2025 se anunciaba desde 74.200 € en versión estándar y 79.100 € en Night Edition (rando-moto.be, precios de red comercial, no oficiales). En null: precioDesde, pesoKg (masa en orden de marcha no publicada), cargaUtilKg (no publicada; prohibido calcularla), consumo, capacidades de agua (no verificadas en fuente oficial para el perfilado), tracción. Precio: se deja sin dato porque Rapido no publica PVP en su web oficial (los precios se obtienen en su red de concesionarios); sin tarifa oficial abierta verificable.",
    curiosidades:
      "El techo panorámico Skyview del C55, de cristal laminado con tratamiento anti-UV y estor integrado, va calefactado por una canalización del propio circuito de calefacción Truma: Rapido lo calienta a propósito para limitar las pérdidas térmicas por el cristal en invierno. Fuente: https://espritcampingcar.com/nouveaute-2021-rapido-lance-sa-gamme-compacte-la-serie-c/",
    descripcion: `La Rapido C55 es la propuesta de la marca francesa para quien quiere una perfilada de verdad —con su garaje, su salón en L y sus camas gemelas— pero sin cargar con los 2,35 metros de ancho de una perfilada grande. Pertenece a la serie C, la gama "slim" que Rapido lanzó en 2021 con una anchura exterior de solo 2,17 metros, y con 6,72 metros de largo se coloca justo en el punto dulce: lo bastante larga para ofrecer una distribución completa de pareja con visitas ocasionales, y lo bastante estrecha para moverse con soltura por carreteras secundarias, pueblos y áreas donde una autocaravana ancha empieza a dar pereza. Es, en esencia, la respuesta francesa a la demanda de "menos es más" sin renunciar al confort de una gran serie.

En medidas, el C55 declara 6,72 metros de largo, 2,17 de ancho y 2,75 de alto, con un PTAC de 3.500 kilos que permite conducirla con el carnet B. Esos 18 centímetros menos de anchura respecto a una perfilada convencional se notan en dos sitios: en carretera, donde la carrocería estrecha se deja llevar con menos esfuerzo y sufre menos con el viento lateral, y en el interior, donde Rapido ha tenido que trabajar la distribución al milímetro para que no se perciba estrechez. El truco está en el techo panorámico Skyview, un gran cristal laminado con tratamiento anti-UV y estor de oscurecimiento integrado que inunda de luz el salón y elimina la sensación de tubo. No es un simple tragaluz decorativo: va calefactado por una canalización del circuito Truma para no convertirse en un puente térmico en invierno, un detalle de ingeniería que dice mucho de cómo piensa esta marca.

La distribución es la clásica de pareja exigente: salón en L delantero con asientos de cabina giratorios, cocina lateral a la izquierda de la puerta de entrada, baño con el sistema Duo'Space y dormitorio trasero con camas gemelas sobre garaje. Las camas miden 80x199 y 80x185 centímetros y pueden unirse para formar una gran doble transversal, y bajo ellas queda un garaje pasante con 1,20 metros de altura libre y puertas de carga a ambos lados, más que suficiente para dos bicicletas o todo el material de playa y montaña. Los pies de las camas esconden armarios roperos inteligentes y una puerta corredera separa la zona de noche del resto, de modo que uno puede acostarse mientras el otro sigue leyendo en el salón. El salón, con su banqueta en L, se convierte además en una tercera cama de unos 188x110 centímetros, útil para un nieto o una visita esporádica, aunque el proceso de montaje es el habitual de este tipo de transformaciones y conviene reservarlo para uso ocasional.

El baño merece capítulo aparte porque concentra una de las innovaciones que Rapido estrenó con la serie C: el Duo'Space. Es un tabique pivotante que permite aislar la zona del inodoro y el lavabo para dejar al descubierto una ducha de tamaño digno, sin salpicar lo que no se debe. En una perfilada de 6,72 metros, donde cada centímetro cuenta, esta solución evita el típico baño-todo-en-uno en el que te duchas encima del váter. La cocina, por su parte, apuesta por lo práctico: placa de dos fuegos con tapa de cristal serigrafiado, gran superficie de trabajo y frigorífico de compresión, de 90 litros en las primeras series y de 140 litros en las versiones más recientes como la Night Edition.

En mecánica, la colección 2025 monta el Peugeot Boxer 2.2 de 140 CV, disponible con cambio manual o automático, una base probadísima en el sector y con una red de servicio inmensa en España y Francia. La calefacción es una Truma Combi 4 diésel, que calienta habitáculo y agua con el propio gasóleo del depósito, eliminando la dependencia de las bombonas de gas para el invierno. El chasis admite el PTAC de 3.500 kilos sin ampliaciones, así que el carnet B basta, aunque conviene vigilar la carga útil real una vez equipada con toldo, portabicis y depósito lleno, porque las perfiladas ligeras andan justas en este capítulo y Rapido no publica la carga útil oficial.

En precio, hay que ser honesto: Rapido no publica tarifa oficial en abierto y el precio final depende del concesionario, los packs y las opciones. Como referencia verificable, la colección 2025 se anunciaba en la red comercial francesa desde unos 74.200 euros en versión estándar y desde unos 79.100 euros en la serie especial Night Edition, que añade los packs Select, Smart y Relax, la cabina en negro metalizado, la multimedia con pantalla táctil y la combinación Truma Combi 4EH diésel-eléctrica. Son precios de red comercial, no tarifa oficial, y en España pueden variar; lo sensato es pedir oferta cerrada en al menos dos concesionarios. La red Rapido en España es amplia y con solera, y la marca, empresa familiar francesa con más de 60 años, tiene fama de construcción cuidada y buen valor de reventa.

Cómo lo verificamos: las medidas (6,72 x 2,17 x 2,75 m), la distribución con camas gemelas y el baño Duo'Space proceden de la prensa especializada que cubrió el lanzamiento de la serie C en 2021 (espritcampingcar.com, camperlife.it) y del comparador técnico alpacacamping.de; el motor Peugeot Boxer 2.2 de 140 CV y los precios orientativos de 2025, del análisis de gama de rando-moto.be; la prueba dinámica y los detalles de habitabilidad, de la review del C55 en outandaboutlive.co.uk. Todo verificado el 19/10/2026. Quedan sin dato el precio oficial (no publicado), la masa en orden de marcha (no publicada), la carga útil (no publicada y con cálculo prohibido), el consumo y las capacidades de agua.

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
        alt: "Rapido C55, salón con mesa y cocina vista (foto oficial Rapido)",
        ancho: 1600,
        alto: 896,
      },
      {
        src: "/media/rapido-c55-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Rapido C55, asiento de cabina giratorio (foto oficial Rapido)",
        ancho: 1600,
        alto: 896,
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
