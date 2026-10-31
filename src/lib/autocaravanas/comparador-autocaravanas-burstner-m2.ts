// Autocaravanas Bürstner — lote Merlín 2 (19/10/2026).
// Datos de las fichas oficiales de buerstner.com (catálogo vigente 2025/2026):
// fuenteNombre/fuenteUrl con la URL exacta de la página oficial de cada gama.
// Precio: tarifa oficial en Francia (Campeo C 600), Países Bajos (Lyseo TD 744)
// y Bélgica (Eliseo C 644), marcado en `aprox`; Bürstner España no publica PVP.
// 4 fotos webp por ficha inspeccionadas visualmente (sin marcas de agua, sin
// campas, sin rótulos): exteriores de anuncios reales del modelo exacto e
// interiores del modelo exacto. Curiosidad con fuente en `curiosidades`.
// noindex lo gestiona Grok al integrar.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_BURSTNER_M2: Autocaravana[] = [
  {
    id: "burstner-campeo-c-600-2026-precio-ficha-tecnica",
    marca: "Bürstner",
    modelo: "Campeo C 600",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: 61480, // tarifa oficial en Francia (desde 61.480 €); Bürstner España no publica PVP
    potenciaCv: 140, // Fiat Ducato 2.2 Multijet de 140 CV (103 kW)
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
    imagen:
      "/media/burstner-campeo-c-600-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial:
      "/media/burstner-campeo-c-600-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/burstner-campeo-c-600-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990, // ficha oficial Campeo C: 5,99 m
    anchoMm: 2050, // ficha oficial Campeo C: 2,05 m
    altoMm: 2650, // ficha oficial Campeo C: 2,65 m
    pesoKg: 2755, // masa en orden de marcha oficial (+/-5%)
    mmaKg: 3500, // ficha oficial
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil de esta versión
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // ficha oficial: 4 plazas de viaje
    plazasDormir: 5, // ficha oficial: 2 de serie, hasta 5 con techo elevable y cama de dinette opcionales
    parNm: 350, // Fiat Ducato 2.2 Multijet 140: 350 Nm (dato oficial Fiat)
    traccion: "Delantera", // Fiat Ducato, tracción delantera
    emisionesCo2: null,
    aprox: ["Precio de tarifa en Francia: desde 61.480 €"],
    notas:
      "El precio (61.480 €) es la tarifa oficial «desde» en Francia que publica Bürstner para el Campeo C 600; Bürstner España no publica PVP, así que el precio final en España lo fija cada concesionario. Medidas, plazas, MMA y masa en orden de marcha proceden de la ficha oficial de la gama Campeo C en buerstner.com.",
    descripcion: `El Bürstner Campeo C 600 es el camper con techo elevable de la marca de Kehl, y probablemente la puerta de entrada más razonable a todo el universo Bürstner. Con 5,99 metros de largo sobre base Fiat Ducato, el C 600 juega en la liga de los campers de formato «grande» —los de seis metros—, donde ya se puede hablar de una célula habitable de verdad y no de un furgón apañado. La distribución es la clásica que funciona: cama transversal trasera de 197 x 157-149 cm, bloque de cocina central con fregadero y cocina de dos fuegos, baño compacto con ducha y, en el centro, la dinette con banqueta para cuatro y mesa extensible. Cuatro plazas de viaje homologadas y dos para dormir de serie, ampliables hasta cinco con el techo elevable —con su cama de 209 x 143 cm— y la cama adicional de la dinette.

Lo que distingue al Campeo C 600 dentro de su segmento es que el techo elevable forma parte de su identidad: Bürstner lo presenta como «nuestro camper con techo elevable», y la versión con techo de serie convierte un camper de dos plazas en uno familiar sin añadir ni un centímetro de longitud. Con el techo cerrado, el C 600 mantiene sus 2,65 m de altura y entra en parkings y peajes de clase 1 como cualquier furgoneta; con el techo abierto, la zona delantera gana altura de pie completa y una segunda cama de matrimonio. Es el truco que permite a una pareja viajar en modo «dos» once meses al año y recibir a los nietos —o a los amigos— en agosto.

La base es el Fiat Ducato 2.2 Multijet de 140 CV (103 kW) y 350 Nm, con tracción delantera y cambio manual de seis velocidades de serie —el automático de nueve relaciones está en opción—. Es el motor que mueve prácticamente todo el segmento camper europeo, y en un vehículo de 3.500 kg de MMA con una aerodinámica de furgoneta se defiende con soltura: cruceros de 120 km/h sin agobios y recuperaciones dignas en puertos. De serie trae lo que hoy se espera de un camper moderno: control de crucero con limitador, Traction Plus, climatización manual en cabina, airbags de conductor y acompañante, ESP con asistente de arranque en pendiente y el kit de ayuda a la conducción habitual de la plataforma Ducato. La célula suma ventanas con marco de aluminio, mosquitera plisada para la puerta corredera, peldaño de entrada eléctrico y claraboya de 50 x 70 cm en la zona de estar.

Por dentro, el Campeo apuesta por un mobiliario claro y funcional, con la cocina en el lateral izquierdo y el frigorífico por compresor de 84 litros —suficiente para una semana de dos personas sin comprar hielo—. El depósito de agua limpia es de 91 litros, una cifra honesta para un camper de seis metros que permite dos o tres días de autonomía real sin repostar. La calefacción es la Truma Combi a gas, y el baño —compacto, como manda el formato— integra WC de cassette, lavabo fijo y ducha. No es un baño para darse un spa, pero cumple su función y, sobre todo, evita depender de las áreas de servicio.

Con 5,99 m de largo, 2,05 m de ancho y 2,65 m de alto, el C 600 se conduce como lo que es: una furgoneta grande. Aparca en batería donde una perfilada ni lo intenta, y su radio de giro permite callejear por pueblos medievales sin sudar. Los 3.500 kg de MMA lo dejan en el carnet B, y la masa en orden de marcha oficial de 2.755 kg deja un margen teórico generoso para equipaje, agua y ocupantes —aunque, como siempre, conviene pesar el vehículo una vez equipado con toldo, portabicis y depósito lleno antes de dar por hecho el margen.

Del precio en España no hay cifra oficial: Bürstner no publica PVP y cada concesionario fija el suyo. Como referencia, la tarifa oficial en Francia parte de 61.480 €, lo que lo sitúa en la franja media del segmento camper de seis metros: por encima de las gamas de acceso y por debajo de los premium alemanes. Sus rivales naturales son el Pössl Summit 600 Plus, el Adria Twin 600 y el Hymer Free 600 Campus, todos sobre la misma base Ducato y con distribuciones gemelas; el Bürstner se defiende con el techo elevable como argumento diferencial y con la red de servicio de la marca, una de las más densas de Europa.

Verificación de fuentes: medidas (5,99 x 2,05 x 2,65 m), plazas (4 de viaje / 2-5 para dormir), MMA (3.500 kg), masa en orden de marcha (2.755 kg), medidas de camas, frigorífico (84 l) y depósito de agua (91 l) proceden de la ficha oficial de la gama Campeo C publicada en buerstner.com. La motorización Fiat Ducato 2.2 Multijet de 140 CV es la de las unidades 2025/2026 anunciadas por la red oficial. La tarifa «desde 61.480 €» es la oficial en Francia; Bürstner España no publica PVP. La marca no publica la carga útil de esta versión: ese campo queda sin dato y no se calcula. Las fotos corresponden a un Bürstner Campeo C 600 real (edición B66) anunciado en Europa.

Perfil de comprador: el Campeo C 600 encaja con parejas que quieren su primer camper «de verdad» sin saltar a una perfilada, valoran el techo elevable como segunda cama y necesitan un vehículo utilizable a diario —5,99 m aparcan en casi cualquier sitio—. También encaja con familias jóvenes que aceptan la dinette como cama infantil ocasional. No encaja con quien necesite cuatro camas fijas ni con quien busque el camper más barato del segmento: hay opciones más económicas, aunque con menos equipamiento de serie. Balance: el camper equilibrado de Bürstner, con el techo elevable como baza y una relación equipamiento-precio honesta dentro de su franja.`,
    pros: [
      "Techo elevable con cama de 209 x 143 cm: de 2 a 5 plazas sin crecer ni un centímetro",
      "Formato de 5,99 m: se conduce y aparca como una furgoneta grande",
      "Fiat Ducato 2.2 de 140 CV con 350 Nm: la mecánica más probada del segmento",
      "Masa en orden de marcha oficial de 2.755 kg: buen margen hasta los 3.500 kg de MMA",
      "3.500 kg de MMA: se conduce con el carnet B",
    ],
    contras: [
      "Sin PVP oficial en España: cada concesionario fija su precio",
      "De serie solo 2 plazas para dormir; la 3.ª, 4.ª y 5.ª son opcionales con sobreprecio",
      "Baño compacto de camper: funcional, pero sin lujos",
      "El cambio automático de 9 velocidades es opcional",
      "La marca no publica la carga útil de esta versión",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/burstner-campeo-c-600-2026-precio-ficha-tecnica-ext.webp",
        alt: "Bürstner Campeo C 600, vista delantera tres cuartos",
        ancho: 1280,
        alto: 960,
      },
      {
        src: "/media/burstner-campeo-c-600-2026-precio-ficha-tecnica-ext-2.webp",
        alt: "Bürstner Campeo C 600, vista delantera tres cuartos en aparcamiento",
        ancho: 1200,
        alto: 900,
      },
      {
        src: "/media/burstner-campeo-c-600-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Bürstner Campeo C 600: cocina, dinette y cama trasera",
        ancho: 1800,
        alto: 1350,
      },
      {
        src: "/media/burstner-campeo-c-600-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Interior del Bürstner Campeo C 600: dinette y zona de estar",
        ancho: 1600,
        alto: 1036,
      },
    ],
    analisisSlug: "burstner-campeo-c-600-2026-analisis-opinion",
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
          nombre: "Revisión célula Bürstner (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Bürstner",
    },
    euroncap: null,
    curiosidades:
      "En 2026 Bürstner celebró su 66.º aniversario con la edición especial B66: una serie limitada de modelos —entre ellos el Campeo C 600— con equipamiento completo de serie (cambio automático, llantas de 16\", toldo, multimedia con cámara trasera) a precio cerrado. Fuente: Out and About Live, prueba del Bürstner B66 (https://www.outandaboutlive.co.uk/motorhomes/reviews/burstner-b66-644-td-motorhome).",
    fuenteNombre: "Bürstner — datos técnicos oficiales Campeo C (buerstner.com)",
    fuenteUrl:
      "https://www.buerstner.com/fr/fr/fourgons-amenages/fourgons-amenages/campeo-c",
  },
  {
    id: "burstner-lyseo-td-744-2026-precio-ficha-tecnica",
    marca: "Bürstner",
    modelo: "Lyseo TD 744",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 103540, // tarifa oficial en Países Bajos (desde 103.540 €); Bürstner España no publica PVP
    potenciaCv: 140, // Fiat Ducato 2.2 Multijet de 140 CV (103 kW)
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
    imagen:
      "/media/burstner-lyseo-td-744-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial:
      "/media/burstner-lyseo-td-744-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/burstner-lyseo-td-744-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7360, // ficha oficial Lyseo TD: 7,36 m
    anchoMm: 2300, // ficha oficial Lyseo TD: 2,30 m
    altoMm: 2990, // ficha oficial Lyseo TD: 2,99 m
    pesoKg: 3120, // masa en orden de marcha oficial (+/-5%)
    mmaKg: 3500, // ficha oficial
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil de esta versión
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // ficha oficial: 4-5 plazas de viaje
    plazasDormir: 5, // ficha oficial: 2 de serie, hasta 5 con camas basculantes opcionales
    parNm: 350, // Fiat Ducato 2.2 Multijet 140: 350 Nm (dato oficial Fiat)
    traccion: "Delantera", // Fiat Ducato, tracción delantera
    emisionesCo2: null,
    aprox: ["Precio de tarifa en Países Bajos: desde 103.540 €"],
    notas:
      "El precio (103.540 €) es la tarifa oficial «desde» en Países Bajos que publica Bürstner para el Lyseo TD 744; Bürstner España no publica PVP, así que el precio final en España lo fija cada concesionario. Medidas, plazas, MMA y masa en orden de marcha proceden de la ficha oficial de la gama Lyseo TD en buerstner.com.",
    descripcion: `El Bürstner Lyseo TD 744 es la perfilada que mejor representa lo que la marca alemana entiende por «vivir a gusto»: un salón trasero de verdad, de esos en los que apetece quedarse a leer cuando fuera llueve, coronado por una cama basculante eléctrica que baja del techo al anochecer. Con 7,36 metros, el 744 es la distribución estrella de la gama Lyseo TD Harmony Line, y su planteamiento es radicalmente distinto al de las perfiladas de camas gemelas: aquí el dormitorio desaparece de día y el salón manda. La zona trasera combina un sofá en L con un aparador corrido bajo la ventana panorámica —mesa de apoyo, sitio para la tele y almacenaje—, mientras que la cama de 199 x 140 cm duerme pegada al techo, invisible, hasta que se pulsa el botón.

El segundo acto de la obra está en la dinette delantera: mesa extensible, asientos de cabina giratorios y, en opción, una segunda cama basculante eléctrica de 199 x 134-125 cm sobre la zona de estar. Con las dos camas opcionales, el 744 duerme hasta cinco personas; de serie, la ficha oficial habla de dos plazas para dormir, porque la cama trasera basculante cuenta como equipamiento de la distribución y la segunda es opcional. En la práctica, la mayoría de las unidades que se venden llevan al menos la cama trasera eléctrica, que es el alma del modelo. La cocina central, con tres fuegos, horno en opción y frigorífico de 133 litros, queda entre la dinette y el baño; y el baño —dividido en la filosofía Bürstner— ofrece WC de cassette a un lado y ducha separada al otro, una configuración que las parejas que viajan largo agradecen cada mañana.

El Lyseo TD se construye sobre el chasis rebajado de Fiat con el motor 2.2 Multijet de 140 CV (103 kW) y 350 Nm, cambio manual de seis velocidades de serie y el automático de ocho relaciones en opción —una combinación que en una perfilada de 7,36 m se nota en autopista—. El equipamiento de serie de la Harmony Line es generoso: faros diurnos LED, llantas de aleación, aire acondicionado en cabina, control de crucero con limitador, asientos de cabina giratorios y regulables, y el paquete de ayudas a la conducción del Ducato (frenada de emergencia, aviso de cambio de carril, reconocimiento de señales). Pero el argumento técnico que de verdad distingue al Lyseo TD es el doble suelo técnico calefactado: un falso suelo donde viajan las instalaciones de agua y electricidad, protegido del frío y accesible desde el interior. En invierno, con la Truma Combi 6 en marcha, las tuberías no se congelan y el suelo no transmite el frío del asfalto; es la diferencia entre una autocaravana de verano y una de doce meses.

Con 7,36 m de largo, 2,30 m de ancho y 2,99 m de alto, el TD 744 se mueve en la franja de las perfiladas familiares espaciosas: necesita sus metros en el área, pero a cambio el salón trasero no tiene rival en el segmento por luminosidad y amplitud. Los 3.500 kg de MMA lo mantienen en el carnet B, aunque la masa en orden de marcha oficial de 3.120 kg deja un margen justo: con cuatro ocupantes, agua, toldo y equipamiento, conviene hacer números antes de cargar las bicicletas eléctricas. Bürstner ofrece la homologación a masas superiores para quien necesite más margen, con el correspondiente cambio de carnet.

Del precio en España no hay cifra oficial: Bürstner no publica PVP. Como referencia de posicionamiento, la tarifa oficial en Países Bajos parte de 103.540 €, lo que lo coloca en la gama media-alta de las perfiladas: por encima de las series de acceso y en plena pelea con la Adria Matrix Plus, la Dethleffs Trend y la Chausson Titanium en distribuciones equivalentes. El Bürstner se defiende con el doble suelo técnico de serie, el salón trasero con cama basculante —una distribución que casi nadie más ofrece en este formato— y una calidad de acabados que la prensa especializada lleva años elogiando.

Verificación de fuentes: medidas (7,36 x 2,30 x 2,99 m), plazas (4-5 de viaje / 2-5 para dormir), MMA (3.500 kg), masa en orden de marcha (3.120 kg), medidas de camas basculantes, frigorífico (133 l) y depósito de agua (105 l) proceden de la ficha oficial de la gama Lyseo TD publicada en buerstner.com. La motorización Fiat Ducato 2.2 Multijet de 140 CV es la de las unidades 2025/2026. La tarifa «desde 103.540 €» es la oficial en Países Bajos; Bürstner España no publica PVP. La marca no publica la carga útil de esta versión: ese campo queda sin dato y no se calcula. Las fotos corresponden a un Bürstner Lyseo TD 744 Harmony Line real anunciado en Europa.

Perfil de comprador: el Lyseo TD 744 encaja con parejas que viajan mucho y quieren un salón trasero luminoso para vivir de día —teletrabajo, lectura, siestas— sin renunciar a una cama de matrimonio que aparece por la noche. También encaja con quienes hacen escapadas de invierno y valoran el doble suelo calefactado. No encaja con familias que necesiten camas fijas para niños cada noche ni con quien busque la perfilada más compacta: 7,36 m se notan en pueblos pequeños. Balance: la perfilada del salón trasero por excelencia, con el doble suelo como argumento técnico y un precio acorde a su posicionamiento premium dentro de la gama media.`,
    pros: [
      "Salón trasero en L con cama basculante eléctrica de 199 x 140 cm: el salón manda de día",
      "Doble suelo técnico calefactado de serie: autocaravana de doce meses, no solo de verano",
      "Segunda cama basculante opcional sobre la dinette: hasta 5 plazas para dormir",
      "Fiat Ducato 2.2 de 140 CV con 350 Nm y automático de 8 relaciones en opción",
      "Baño dividido con ducha separada y 3.500 kg de MMA (carnet B)",
    ],
    contras: [
      "Sin PVP oficial en España: cada concesionario fija su precio",
      "Masa en orden de marcha de 3.120 kg: el margen hasta 3.500 kg hay que vigilarlo",
      "7,36 m de largo: no es la perfilada más ágil en áreas pequeñas",
      "La segunda cama basculante es opcional con sobreprecio",
      "La marca no publica la carga útil de esta versión",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/burstner-lyseo-td-744-2026-precio-ficha-tecnica-ext.webp",
        alt: "Bürstner Lyseo TD 744, vista delantera tres cuartos",
        ancho: 1280,
        alto: 960,
      },
      {
        src: "/media/burstner-lyseo-td-744-2026-precio-ficha-tecnica-ext-2.webp",
        alt: "Bürstner Lyseo TD 744 Harmony Line, vista lateral",
        ancho: 1024,
        alto: 683,
      },
      {
        src: "/media/burstner-lyseo-td-744-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Bürstner Lyseo TD 744: cocina y salón trasero",
        ancho: 1024,
        alto: 683,
      },
      {
        src: "/media/burstner-lyseo-td-744-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Interior del Bürstner Lyseo TD 744: pasillo hacia la cabina",
        ancho: 1024,
        alto: 683,
      },
    ],
    analisisSlug: "burstner-lyseo-td-744-2026-analisis-opinion",
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
          nombre: "Revisión célula Bürstner (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Bürstner",
    },
    euroncap: null,
    curiosidades:
      "El 744 es la distribución más carismática del Lyseo TD: su salón trasero en L con la cama basculante de 2 metros pegada al techo es una de las configuraciones más imitadas del segmento, y la prensa británica lo describe como «una de las versiones más intrigantes» de la gama por ese salón trasero con cama escamoteable. Fuente: Out and About Live, guía de compra Bürstner (https://www.outandaboutlive.co.uk/motorhomes/articles/practical-advice/burstner-motorhome-buying-guide).",
    fuenteNombre: "Bürstner — datos técnicos oficiales Lyseo TD (buerstner.com)",
    fuenteUrl:
      "https://www.buerstner.com/nl/nl/campers/halfintegrale/lyseo-td",
  },
  {
    id: "burstner-eliseo-c-644-2026-precio-ficha-tecnica",
    marca: "Bürstner",
    modelo: "Eliseo C 644",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: 69510, // tarifa oficial en Bélgica (desde 69.510 €); Bürstner España no publica PVP
    potenciaCv: 140, // Fiat Ducato 2.2 Multijet de 140 CV (103 kW)
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
    imagen:
      "/media/burstner-eliseo-c-644-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial:
      "/media/burstner-eliseo-c-644-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/burstner-eliseo-c-644-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6360, // ficha oficial Eliseo C: 6,36 m
    anchoMm: 2050, // ficha oficial Eliseo C: 2,05 m
    altoMm: 2650, // ficha oficial Eliseo C: 2,65 m
    pesoKg: 2940, // masa en orden de marcha oficial (+/-5%)
    mmaKg: 3500, // ficha oficial
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil de esta versión
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // ficha oficial: 4 plazas de viaje
    plazasDormir: 4, // ficha oficial: 4 plazas para dormir de serie
    parNm: 350, // Fiat Ducato 2.2 Multijet 140: 350 Nm (dato oficial Fiat)
    traccion: "Delantera", // Fiat Ducato, tracción delantera
    emisionesCo2: null,
    aprox: ["Precio de tarifa en Bélgica: desde 69.510 €"],
    notas:
      "El precio (69.510 €) es la tarifa oficial «desde» en Bélgica que publica Bürstner para el Eliseo C 644; Bürstner España no publica PVP, así que el precio final en España lo fija cada concesionario. Medidas, plazas, MMA y masa en orden de marcha proceden de la ficha oficial de la gama Eliseo C en buerstner.com.",
    descripcion: `El Bürstner Eliseo C 644 es el camper que rompe la regla no escrita del segmento: en vez de la cama fija trasera de siempre, monta un salón trasero curvo con una cama basculante encima. Con 6,36 metros sobre base Fiat Ducato, el C 644 es el «quinto layout» de la gama Eliseo, presentado en la primavera de 2022 como la propuesta más habitable de la familia: un camper sin techo elevable que, sin embargo, duerme a cuatro personas con camas de verdad. La idea es sencilla y brillante: la zona trasera es un salón en U con dos plazas de viaje, y sobre él desciende una cama basculante de 204 x 135-156 cm; el propio salón, además, se convierte en una segunda cama de 183 x 138-147 cm. Dos parejas duermen en literas improvisadas, cada una con su espacio, sin necesidad de techo de lona ni de montajes nocturnos complicados.

La distribución invierte el orden habitual del camper: el baño —el práctico baño Vario de Bürstner, con el lavabo en una pared pivotante que al girarse deja paso a la ducha— y la cocina quedan en la zona delantera y central, junto a la puerta corredera, mientras que el fondo del vehículo se reserva íntegramente para estar y dormir. La cocina monta fregadero, cocina de dos fuegos y un frigorífico por compresor de 138 litros con congelador separado, una capacidad más propia de una perfilada que de un camper. El depósito de agua limpia es de 97 litros y la calefacción, la Truma Combi a gasoil en las versiones con paquete de invierno, permite usar el C 644 todo el año sin depender de las bombonas.

Un detalle que dice mucho del planteamiento: la mesa del salón trasero es de nuevo diseño y está pensada para usarse también fuera del vehículo, y la zona trasera esconde un espacio de almacenamiento adicional junto a las puertas batientes —el C 644 lleva portón trasero de dos hojas, no portón elevable—, de modo que las bicicletas y el material voluminoso tienen su sitio sin invadir la zona de estar. Es un camper pensado para parejas a las que les gusta recibir: de día, el salón trasero es un comedor con vistas; de noche, dos camas independientes.

La mecánica corre a cargo del conocido Fiat Ducato 2.2 Multijet con 140 CV (103 kW) y 350 Nm de par, en configuración de tracción delantera con cambio manual de seis marchas de serie y la automática como alternativa en el configurador. El dotación de serie contempla llantas de aleación de 16 pulgadas, climatizador de cabina, ESP con Traction Plus, tempomat con limitador, volante forrado en cuero y el conjunto de asistentes del Ducato. En la célula destacan las ventanas con marco, la mosquitera de la corredera, las claraboyas y una iluminación LED indirecta muy trabajada, seña de identidad de la familia Eliseo.

En cotas, el C 644 declara 6,36 m de longitud, 2,05 m de anchura y 2,65 m de altura: son 37 cm más que un camper convencional de seis metros, centímetros que se disfrutan en el salón posterior. A cambio sigue siendo un vehículo manejable para sus dimensiones, homologado en 3.500 kg de MMA para el permiso B. La tara oficial en orden de marcha es de 2.940 kg, así que con cuatro pasajeros y equipaje queda un margen sensato, aunque —como en cualquier camper— conviene no darlo por sentado y pesar el conjunto una vez equipado.

En cuanto al precio en nuestro mercado, no existe una cifra de fábrica: Bürstner no difunde PVP para España y son los distribuidores quienes fijan el importe final. Como orden de magnitud, la tarifa belga arranca en 69.510 €, una cantidad que lo ubica en la zona alta de los campers, codeándose con el Pössl Summit 640, el Adria Twin Supreme 640 SGX o el Hymer Free 640, todos alrededor de los 6,36-6,40 m. Su baza frente a ellos es una implantación sin equivalente —nadie más propone el salón trasero con litera escamoteable en este formato— y unos acabados que la prensa especializada coloca entre lo mejor del segmento.

Verificación de fuentes: las cotas (6,36 x 2,05 x 2,65 m), las plazas (4 en ruta / 4 para pernoctar), la MMA (3.500 kg), la tara en orden de marcha (2.940 kg), las medidas de las camas, el frigo (138 l) y el agua limpia (97 l) salen de la ficha técnica oficial de la gama Eliseo C en buerstner.com. Que el C 644 llegara como quinto plano de la gama en la primavera de 2022 lo confirma la nota de prensa oficial de la marca. El motor Fiat Ducato 2.2 Multijet de 140 CV corresponde a las unidades de los años modelo 2025/2026. La tarifa «desde 69.510 €» es la vigente en Bélgica; para España no hay PVP de fábrica. La carga útil de esta versión no la publica la marca: el campo queda sin dato sin calcularse. Las imágenes muestran un Eliseo C 644 auténtico fotografiado en Europa.

Perfil de comprador: este C 644 está pensado para parejas que viajan acompañadas —otra pareja, hijos ya crecidos— y quieren dos áreas de noche independientes sin dar el salto a una gran autocaravana, así como para quienes disfrutan de un salón trasero panorámico los días de mal tiempo. No es la elección de quien priorice el precio más bajo ni de quien exija un garaje trasero XXL: el almacenaje está bien resuelto, pero no es una perfilada. En resumen: el camper más singular del catálogo Bürstner, con una implantación sin competencia directa y un precio en consonancia con su posicionamiento.`,
    pros: [
      "Salón trasero curvo con cama basculante de 204 x 135-156 cm: distribución única en el segmento",
      "4 plazas para dormir de serie sin techo elevable: dos camas independientes",
      "Frigorífico por compresor de 138 l y cocina delantera completa",
      "Fiat Ducato 2.2 de 140 CV con 350 Nm y automático en opción",
      "3.500 kg de MMA: se conduce con el carnet B",
    ],
    contras: [
      "Sin PVP oficial en España: cada concesionario fija su precio",
      "6,36 m de largo: 37 cm más que un camper estándar, se notan al aparcar",
      "Sin techo elevable: la altura interior es la de la furgoneta",
      "El cambio automático es opcional con sobreprecio",
      "La marca no publica la carga útil de esta versión",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/burstner-eliseo-c-644-2026-precio-ficha-tecnica-ext.webp",
        alt: "Bürstner Eliseo C 644, vista delantera tres cuartos",
        ancho: 1600,
        alto: 1200,
      },
      {
        src: "/media/burstner-eliseo-c-644-2026-precio-ficha-tecnica-ext-2.webp",
        alt: "Bürstner Eliseo C 644, vista trasera tres cuartos",
        ancho: 728,
        alto: 546,
      },
      {
        src: "/media/burstner-eliseo-c-644-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Bürstner Eliseo C 644: salón trasero con cama basculante",
        ancho: 1280,
        alto: 960,
      },
      {
        src: "/media/burstner-eliseo-c-644-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Interior del Bürstner Eliseo C 644: zona de descanso trasera",
        ancho: 1000,
        alto: 563,
      },
    ],
    analisisSlug: "burstner-eliseo-c-644-2026-analisis-opinion",
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
          nombre: "Revisión célula Bürstner (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Bürstner",
    },
    euroncap: null,
    curiosidades:
      "El C 644 nació en la primavera de 2022 como el quinto layout de la gama Eliseo: Bürstner lo presentó como la distribución «más habitable» de la familia, con su salón trasero curvo y la cama basculante encima, y una mesa de nuevo diseño pensada para usarse también fuera del vehículo. Fuente: comunicado oficial de Bürstner (https://www.buerstner.com/de/en/press-release/25-03-22_new-compact-vans-2022).",
    fuenteNombre: "Bürstner — datos técnicos oficiales Eliseo C (buerstner.com)",
    fuenteUrl:
      "https://www.buerstner.com/be/nl/campervans/campervans/eliseo-c",
  },
];
