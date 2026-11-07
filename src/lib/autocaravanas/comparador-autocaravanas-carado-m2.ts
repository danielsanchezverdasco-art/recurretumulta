// Autocaravanas Carado — lote Merlín 2 (19/10/2026).
// Datos de la ficha oficial de la gama 2026 (comparador oficial carado.com,
// catálogo alemán, consultado el 19/10/2026): fuenteNombre/fuenteUrl con la
// URL exacta del comparador oficial.
// Precio: tarifa oficial en Alemania (T 447 desde 62.599 €, A 361 PRO desde
// 65.499 €), marcado en `aprox`; Carado España no publica PVP.
// 4 fotos webp por ficha (todas ≥1200 px, inspeccionadas visualmente):
// T 447: portada del banco oficial de imágenes Carado + unidad real
// Clever Edition (erento) + 2 interiores de un anuncio real (niese-caravan.de).
// A 361 PRO: 2 exteriores + 2 interiores de un anuncio real de un A 361 PRO
// (GleMée Caravanes, FR) y un A 361 real (Goboony, NL).
// Curiosidades con fuente en `curiosidades`. noindex lo gestiona Grok al integrar.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_CARADO_M2: Autocaravana[] = [
  {
    id: "carado-t-447-2026-precio-ficha-tecnica",
    marca: "Carado",
    modelo: "T 447",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 62599, // tarifa oficial en Alemania (desde 62.599 €, IVA incl.); Carado España no publica PVP
    potenciaCv: 140, // Citroën Jumper 2.2 BlueHDi de 140 CV (103 kW), de serie
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
    imagen: "/media/carado-t-447-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial: "/media/carado-t-447-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/carado-t-447-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7410, // ficha oficial Carado 2026 (7,41 m)
    anchoMm: 2320, // ficha oficial Carado 2026 (2,32 m)
    altoMm: 2900, // ficha oficial Carado 2026 (2,90 m)
    pesoKg: 2911, // masa en orden de marcha oficial (2.911 kg; rango 2.765-3.057)
    mmaKg: 3500, // ficha oficial de gama
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil de esta versión
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // ficha oficial: 4 plazas de viaje (5.ª en opción)
    plazasDormir: 2, // ficha oficial: 2 plazas de serie (camas gemelas); hasta 5 con cama basculante y conversión del salón en opción
    parNm: null, // Citroën no publica el par en la ficha de Carado: no se inventa
    traccion: "Delantera", // Citroën Jumper, tracción delantera
    emisionesCo2: null,
    aprox: ["Precio de tarifa en Alemania: desde 62.599 €"],
    notas:
      "El precio (62.599 €) es la tarifa oficial «desde» en Alemania con IVA que publica Carado en su comparador de modelos 2026; Carado España no publica PVP, así que el precio final en España lo fija cada concesionario. Medidas, plazas, MMA, masa en orden de marcha y equipamiento proceden del comparador oficial. Las plazas para dormir de serie son 2 (camas gemelas traseras); la ficha oficial contempla hasta 5 con las opciones de cama basculante/Clever-lift y conversión del salón. En el Reino Unido el T 447 se ha comercializado sobre base Ford Transit (edición especial Edition26), mientras que la gama 2026 continental usa Citroën Jumper.",
    descripcion: `La Carado T 447 es la perfilada que mejor explica por qué la marca alemana del grupo Erwin Hymer se ha convertido en la puerta de entrada al caravaning para miles de familias europeas: 7,41 metros de semi-integrada con camas gemelas traseras, garaje de doble acceso y un precio de partida de 62.599 euros que la sitúa entre las perfiladas familiares más asequibles del mercado. No pretende ser la más lujosa ni la más equipada de serie; es exactamente lo que promete, una base honesta, una distribución que lleva años funcionando y detrás la red de servicio de uno de los mayores grupos caravaning de Europa.

La distribución es la clásica de camas gemelas longitudinales traseras sobre garaje, la que más se vende en Europa en este formato, y hay motivos para ello. Las dos camas individuales, de 210 x 80 cm cada una en su configuración de serie, pueden pedirse en 215 x 80 o unirse con el panel central para formar una gran superficie de 210 x 168 cm. Cada ocupante tiene su cama sin tener que hacer y deshacer el salón cada noche, y el garaje que queda debajo, accesible desde ambos lados —la segunda puerta de garaje forma parte del acabado PRO—, traga bicicletas, sillas y mesa de camping con trampillas de 95 x 110 cm a la derecha y 75 x 80 cm a la izquierda. Es el esquema que nunca falla en una familiar.

Delante del dormitorio, el cuarto de baño y la cocina ocupan la zona central, y el salón delantero aprovecha los asientos giratorios de la cabina para montar un comedor para cuatro personas. De serie, la T 447 duerme a dos personas en las gemelas traseras; la ficha oficial contempla hasta cinco plazas para dormir combinando la cama basculante o la Clever-lift sobre el salón (195 x 140 cm, ampliable en anchura hasta 110 cm en opción), la conversión de la dinette central (210 x 65 cm en opción) y la quinta plaza de viaje, también opcional. Es un planteamiento modular y honesto: se pagan las camas que se necesitan y la ficha puede crecer con la familia sin cambiar de vehículo.

La base mecánica es el Citroën Jumper 2.2 BlueHDi de 140 CV (103 kW), el motor que Carado monta de serie en la gama 2026 para el mercado alemán, con tracción delantera y cambio manual. La masa en orden de marcha declarada es de 2.911 kg, de modo que la T 447 se queda en 3.500 kg de MMA y se conduce con el carnet B, con un margen oficial de 225 kg para equipamiento opcional antes de rozar el límite. Puede remolcar hasta 2.000 kg con freno (750 kg sin freno), una cifra generosa para un pequeño remolque o un portamotos, y calza neumáticos 215/70 R 15 CP sobre una batalla de 404 cm que le da buen aplomo en autopista.

En la célula, la calefacción es la Truma Combi 6 de gas, el estándar del sector, alimentada por dos bombonas de 11 kg alojadas en su cofre exterior. El frigorífico de serie es de 78 litros con congelador de 11, ampliable al de 156 litros con congelador separado de 29 litros que montan los acabados superiores. El depósito de agua limpia suma 122 litros totales, con 20 litros en modo marcha como exige la normativa europea de pesos, y el de aguas grises es de 92 litros. Hay cinco enchufes de 230 V y cuatro tomas USB repartidos por la célula, y la altura interior de 210 cm permite moverse erguido por el pasillo incluso a los más altos.

Con 7,41 m de largo y 2,32 m de ancho, la T 447 se mueve en la talla media-alta de las perfiladas: cabe sin dramas en la mayoría de áreas de servicio, se defiende en carreteras secundarias y sus 2,90 m de altura la mantienen por debajo de la barrera de los tres metros en peajes y parkings. No es la más ágil en pueblos de calles estrechas, pero los retrovisores de brazo largo y la cámara trasera ayudan.

Del precio en España no hay cifra oficial: Carado no publica PVP y cada concesionario fija el suyo. Como referencia de posicionamiento, la tarifa oficial en Alemania parte de 62.599 € con IVA incluido, lo que la coloca por debajo de las perfiladas de gemelas de Dethleffs, Bürstner o Sunlight con distribuciones equivalentes (Trend T 6717, Lyseo TD 690 G, T 69 L). Frente a ellas, la Carado juega la baza del precio de acceso y de pertenecer al grupo Erwin Hymer, con la red de concesionarios y servicio más extensa de Europa, un argumento que pesa mucho a la hora de venderla de segunda mano.

Un detalle curioso de su historia reciente: en el Reino Unido el T 447 se ha vendido sobre base Ford Transit en ediciones especiales como la Edition26, con claraboya sobre la cabina, toldo, depósito de grises aislado, segunda puerta de garaje, ventanas con marco, oscurecedores de cabina, frigorífico grande y llantas negras. En la Europa continental, la gama 2026 apuesta por el Citroën Jumper.

Verificación de fuentes: medidas (7,41 x 2,32 x 2,90 m), plazas (4 de viaje / 2-5 para dormir), MMA (3.500 kg), masa en orden de marcha (2.911 kg), motorización Citroën Jumper 2.2 de 140 CV, capacidades de agua y gas, y equipamiento proceden del comparador oficial de modelos Carado 2026 (carado.com, catálogo alemán, consultado el 19/10/2026). La tarifa «desde 62.599 €» es la oficial en Alemania con IVA; Carado España no publica PVP. La marca no publica la carga útil de esta versión: ese campo queda sin dato y no se calcula. Las fotos corresponden a una Carado T 447 real: la portada procede del banco oficial de imágenes de Carado y el resto de unidades reales anunciadas.

Perfil de comprador: la T 447 encaja con parejas o familias de hasta cuatro miembros que buscan su primera perfilada o una segunda sin sustos: distribución de gemelas que no pasa de moda, garaje grande de doble acceso, 3.500 kg con carnet B y el respaldo del grupo Hymer a la hora de mantenerla y revenderla. No encaja con quien necesite cinco o seis plazas de viaje de serie ni con quien busque una perfilada compacta de menos de 7 metros para moverse por ciudad. Balance: la forma más racional de estrenar perfilada familiar en 2026, con un precio de partida muy competitivo y una modularidad de camas que permite que la ficha crezca con la familia.`,
    pros: [
      "Distribución de camas gemelas traseras sobre garaje de doble acceso: la que más se vende en Europa por algo",
      "Citroën Jumper 2.2 de 140 CV con 3.500 kg de MMA: carnet B y 2.000 kg de remolque con freno",
      "Precio de partida de 62.599 € en tarifa oficial: de las perfiladas familiares más asequibles",
      "Modularidad real: de 2 a 5 plazas para dormir con cama basculante y conversión del salón en opción",
      "Respaldo del grupo Erwin Hymer: la mayor red de servicio de Europa",
    ],
    contras: [
      "Sin PVP oficial en España: cada concesionario fija su precio y comparar cuesta",
      "De serie solo duerme a 2: las camas extra son opcionales con sobreprecio",
      "7,41 m de largo: no es la perfilada más manejable en pueblos y áreas pequeñas",
      "Frigorífico de serie de 78 l: el grande de 156 l es opcional",
      "La marca no publica la carga útil de esta versión",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/carado-t-447-2026-precio-ficha-tecnica-ext.webp",
        alt: "Carado T 447, vista trasera tres cuartos del banco oficial de imágenes",
        ancho: 2560,
        alto: 1706,
      },
      {
        src: "/media/carado-t-447-2026-precio-ficha-tecnica-ext-2.webp",
        alt: "Carado T 447 Clever Edition real, trasera con portabicicletas",
        ancho: 2224,
        alto: 1668,
      },
      {
        src: "/media/carado-t-447-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Carado T 447: camas gemelas traseras",
        ancho: 1536,
        alto: 1152,
      },
      {
        src: "/media/carado-t-447-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Interior de la Carado T 447: cocina, salón y cabina vistos desde atrás",
        ancho: 1536,
        alto: 1152,
      },
    ],
    analisisSlug: "carado-t-447-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Citroën Jumper 2.2 BlueHDi: revisión principal cada 2 años o 30.000 km (según manual del propietario; el kilometraje exacto lo fija el libro de servicio)",
      revisiones: [
        {
          nombre: "Revisión Citroën Jumper (2 años / 30.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Carado (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Manual del propietario Citroën Jumper + recomendaciones Carado",
    },
    euroncap: null,
    curiosidades:
      "En el Reino Unido el T 447 se ha vendido sobre base Ford Transit: la edición especial Edition26 (Transit 2.0 de 130 CV manual) añadía de serie claraboya sobre la cabina, toldo, depósito de aguas grises aislado, segunda puerta de garaje, ventanas con marco, oscurecedores de cabina, frigorífico de 156 l con congelador separado de 29 l y llantas de aleación negras, además de los packs Chassis y Basic. Fuente: prueba de Out & About Live (https://www.outandaboutlive.co.uk/motorhomes/reviews/carado-t447-motorhome).",
    fuenteNombre: "Carado — comparador oficial de modelos 2026 (carado.com, DE)",
    fuenteUrl: "https://carado.com/de/en/wls/compare/models/pdf?modelIds=3782789",
  },
  {
    id: "carado-a-361-pro-2026-precio-ficha-tecnica",
    marca: "Carado",
    modelo: "A 361 PRO",
    tipo: "capuchina",
    categoria: "Autocaravana",
    precioDesde: 65499, // tarifa oficial en Alemania (desde 65.499 €, IVA incl.); Carado España no publica PVP
    potenciaCv: 140, // Fiat Ducato 2.2 Multijet de 140 CV (103 kW), de serie según catálogo DE 2026
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
    imagen: "/media/carado-a-361-pro-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial: "/media/carado-a-361-pro-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/carado-a-361-pro-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6610, // ficha oficial Carado 2026 (6,61 m)
    anchoMm: 2320, // ficha oficial Carado 2026 (2,32 m)
    altoMm: 3140, // ficha oficial Carado 2026 (3,14 m)
    pesoKg: 2937, // masa en orden de marcha oficial (2.937 kg; rango 2.790-3.084)
    mmaKg: 3500, // ficha oficial de gama
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil de esta versión
    consumo: null,
    consumoUnidad: null,
    plazas: 6, // ficha oficial Carado España: 6 plazas de viaje con el pack de seguridad PRO
    plazasDormir: 6, // ficha oficial: cama de capuchina + dinette convertible + literas traseras
    parNm: 350, // Fiat Ducato 2.2 Multijet 140: 350 Nm (dato oficial Fiat)
    traccion: "Delantera", // Fiat Ducato, tracción delantera
    emisionesCo2: null,
    aprox: ["Precio de tarifa en Alemania: desde 65.499 €"],
    notas:
      "El precio (65.499 €) es la tarifa oficial «desde» en Alemania con IVA que publica Carado en su comparador de modelos 2026; Carado España no publica PVP, así que el precio final en España lo fija cada concesionario. Medidas, plazas, MMA, masa en orden de marcha y equipamiento proceden del comparador oficial. El catálogo alemán 2026 homologa el A 361 PRO sobre Fiat Ducato 2.2 de 140 CV; Carado también ha comercializado el A 361 sobre Citroën Jumper según mercado y año de modelo (ficha oficial de Carado España y unidades reales del año 2026). Las 6 plazas de viaje requieren el pack de seguridad PRO (reposacabezas y cinturones en la banqueta central).",
    descripcion: `La Carado A 361 PRO es la demostración de que una capuchina familiar no necesita siete metros para dormir a seis personas: con 6,61 metros de largo, esta alcoba alemana homologa seis plazas de viaje y seis para dormir, una combinación que muy pocas rivales ofrecen en este tamaño. Es la capuchina de acceso del grupo Erwin Hymer, y se nota en el planteamiento: todo lo que una familia necesita para viajar, nada de lo que encarece la factura sin aportar.

La clave está en cómo reparte las seis camas. Arriba, en la capuchina, una cama doble de 210 x 160 cm, de las más generosas del segmento, siempre hecha y siempre disponible: los niños suben por la escalerilla y los padres no tienen que montar nada al llegar de noche. En el centro, la dinette enfrentada se convierte en una cama de 175 x 100 cm para un quinto ocupante. Y atrás, dos literas de 210 x 85 y 205 x 80 cm que hacen las delicias de los más jóvenes y que, entre viaje y viaje, sirven como trastero para lo que no cabe en el garaje. Seis camas reales, sin colchones hinchables ni inventos.

Las seis plazas de viaje se consiguen con el pack de seguridad que el acabado PRO incluye: dos reposacabezas y dos cinturones en la banqueta central orientada en el sentido de la marcha, de modo que la dinette viaja completa y homologada. Es un detalle que no todas las capuchinas de este precio ofrecen, y que convierte a la A 361 PRO en una de las pocas opciones para familias numerosas que no quieren subir a 7 metros ni a otro carnet.

El acabado PRO, que es como Carado vende la gama 2026, suma el equipamiento que antes se pagaba aparte: el Optic Pack 1 con parachoques pintado, el Optic Pack 2 con llantas de aluminio bicolor de 16 pulgadas, el Basic Pack de habitabilidad, la segunda puerta exterior del garaje y el grafismo PRO de la carrocería. El frigorífico grande de 156 litros con congelador separado de 29 litros viene de serie en el PRO, un acierto para una familiar que viaja con niños y necesita nevera de verdad, no un cofre.

La base mecánica, según el catálogo alemán 2026, es el Fiat Ducato 2.2 Multijet de 140 CV (103 kW) con 350 Nm de par, tracción delantera y cambio manual, el tándem más probado del caravaning europeo. La masa en orden de marcha declarada es de 2.937 kg para 3.500 kg de MMA, así que se conduce con el carnet B, y puede remolcar hasta 2.000 kg con freno. Conviene saber, eso sí, que Carado ha montado el A 361 también sobre Citroën Jumper según el mercado y el año de modelo —la ficha oficial española y unidades reales del año 2026 circulan con la base francesa—, de modo que conviene confirmar la base de la unidad concreta en el concesionario; mecánicamente son primos hermanos del mismo grupo Stellantis.

En la célula, la calefacción es la Truma Combi 6 de gas con dos bombonas de 11 kg, el agua limpia suma 122 litros (20 en modo marcha, como manda la normativa de pesos) y el depósito de grises es de 92 litros. Hay cinco enchufes de 230 V y dos tomas USB, y el garaje trasero, con trampillas de 65 x 120 cm a la derecha y 60 x 100 cm a la izquierda, da para las bicicletas de los niños y el avance. La altura total de 3,14 m es la servidumbre clásica de las capuchinas: hay que vigilar ramas, parkings y peajes, pero a cambio la cama de arriba no roba ni un centímetro a la zona de día.

Con 6,61 m, la A 361 PRO es de las capuchinas más compactas del mercado, y eso se nota al aparcar y al maniobrar: entra en áreas donde una integral de 7,4 m ni lo intenta. La batalla de 380 cm y los neumáticos 225/75 R 16 C le dan un rodar estable para su altura.

Del precio en España no hay cifra oficial: Carado no publica PVP. Como referencia, la tarifa oficial en Alemania parte de 65.499 € con IVA, lo que la sitúa claramente por debajo de las capuchinas familiares de Dethleffs, Bürstner o Weinsberg con seis plazas equivalentes. Es, de hecho, uno de sus argumentos comerciales más fuertes: seis plazas de viaje y seis camas por el precio al que otras marcas venden una perfilada de cuatro.

Verificación de fuentes: medidas (6,61 x 2,32 x 3,14 m), plazas (6 de viaje / 6 para dormir), MMA (3.500 kg), masa en orden de marcha (2.937 kg), motorización Fiat Ducato 2.2 de 140 CV, dimensiones de camas, capacidades y equipamiento del acabado PRO proceden del comparador oficial de modelos Carado 2026 (carado.com, catálogo alemán, consultado el 19/10/2026) y de la ficha oficial de Carado España. La tarifa «desde 65.499 €» es la oficial en Alemania con IVA; Carado España no publica PVP. La marca no publica la carga útil de esta versión: ese campo queda sin dato y no se calcula. Las fotos corresponden a un Carado A 361 PRO real anunciado en Francia y a un Carado A 361 real anunciado en los Países Bajos.

Perfil de comprador: la A 361 PRO encaja con familias de 4 a 6 miembros que necesitan seis plazas de verdad sin subir a 7 metros ni a otro carnet, y que valoran la cama de capuchina siempre hecha y el precio de acceso del grupo Hymer. No encaja con parejas que viajan solas —para dos, una perfilada aprovecha mejor el espacio— ni con quien mida más de 1,90 y duerma en las literas traseras. Balance: la capuchina familiar más racional del catálogo 2026, con seis plazas homologadas y un precio que no tiene rival directo en su tamaño.`,
    pros: [
      "6 plazas de viaje y 6 para dormir en solo 6,61 m: casi ninguna rival lo ofrece",
      "Cama de capuchina de 210 x 160 cm siempre hecha + literas traseras: ideal con niños",
      "Acabado PRO con packs incluidos: llantas de 16\", parachoques pintado, frigorífico de 156 l y segunda puerta de garaje",
      "Fiat Ducato 2.2 de 140 CV con 350 Nm y 3.500 kg de MMA: carnet B",
      "Precio de partida de 65.499 € en tarifa oficial: la capuchina familiar más asequible de su tamaño",
    ],
    contras: [
      "Sin PVP oficial en España: cada concesionario fija su precio",
      "3,14 m de altura: la servidumbre clásica de las capuchinas en parkings y ramas",
      "La base varía según mercado y año (Fiat Ducato o Citroën Jumper): confirmar la unidad concreta",
      "Con seis ocupantes y equipaje, los 3.500 kg hay que vigilarlos de cerca",
      "La marca no publica la carga útil de esta versión",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/carado-a-361-pro-2026-precio-ficha-tecnica-ext.webp",
        alt: "Carado A 361 PRO real, vista lateral tres cuartos",
        ancho: 2560,
        alto: 1920,
      },
      {
        src: "/media/carado-a-361-pro-2026-precio-ficha-tecnica-ext-2.webp",
        alt: "Carado A 361 real, trasera tres cuartos con portabicicletas",
        ancho: 1830,
        alto: 1029,
      },
      {
        src: "/media/carado-a-361-pro-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Carado A 361 PRO: dinette enfrentada con mesa",
        ancho: 2016,
        alto: 1512,
      },
      {
        src: "/media/carado-a-361-pro-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Interior del Carado A 361 PRO: cocina con frigorífico grande",
        ancho: 2016,
        alto: 1512,
      },
    ],
    analisisSlug: "carado-a-361-pro-2026-analisis-opinion",
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
          nombre: "Revisión célula Carado (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Carado",
    },
    euroncap: null,
    curiosidades:
      "El A 361 PRO es una de las pocas capuchinas de 6,61 metros homologada para viajar con seis personas y dormir a seis: a la cama de capuchina de 210 x 160 cm suma la dinette central convertible (175 x 100 cm) y las literas traseras, con el pack de seguridad PRO (reposacabezas y cinturones en la banqueta central). Fuentes: comparador oficial Carado 2026 (https://carado.com/de/en/wls/compare/models/pdf?modelIds=3773303) y página oficial de la gama (https://carado.com/de/en/variants/series).",
    fuenteNombre: "Carado — comparador oficial de modelos 2026 (carado.com, DE)",
    fuenteUrl: "https://carado.com/de/en/wls/compare/models/pdf?modelIds=3773303",
  },
];
