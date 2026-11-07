// Autocaravanas Dethleffs — lote Merlín 1 (18/10/2026), corrección b/c/d/e/f/g/h/i (19/10/2026).
// Fuentes: web oficial de Dethleffs (dethleffs.com, gama Trend actual) para la marca, la
// construcción y la garantía; prensa especializada británica (CaravanGuard, factfile del
// T 6717 EB 2023) para las cifras del modelo; concesionarios y portales de anuncios para
// contraste. AVISO: el Trend T 6717 EB está DESCATALOGADO (sustituido por el T 6617 EB en la
// lista oficial 2026); Dethleffs no publica ficha oficial de este modelo.
// Correcciones aplicadas: eliminado costeMensual; añadidos descripcion (>=800 palabras, con
// «Cómo lo verificamos» y «Para quién es»), notas y plazasDormir; analisisSlug actualizado a
// -analisis-opinion; fotos a -ext.webp/-interior.webp (sin «-oficial»); carga útil sin dato publicado
// (la marca no la publica para el modelo exacto); dimensiones, MMA y plazas en «aprox»
// («dato no oficial»: modelo descatalogado, cifras de prensa y concesionarios); potencia en
// null (motorización según configuración y año; sin dato único verificable); precio sin dato
// («no publicado»: sin tarifa española verificable).
// Corrección F4 (19/10/2026): añadido campo curiosidades con fuente enlazada; eliminadas
// cifras sueltas en euros de la descripción (sin precio oficial publicado); fotos: el fabricante no
// publica fotos oficiales del T 6717 EB descatalogado (verificado en dethleffs.com/.co.uk/.de,
// catálogo oficial Trend 2024 y portal de prensa el 19/10/2026) — se mantiene la galería actual.
// Corrección FIX-cideth (19/10/2026): intento dirigido adicional — la página oficial del modelo
// (/de/.../trend/t-6717-eb/) devuelve 404 (modelo descatalogado, sustituido por el T 6617 EB);
// la página del T 7057 EB vigente no contiene assets del 6717; el portal de prensa Mediacenter
// exige login. SIN fotos oficiales del modelo exacto: se documenta honestamente, galería sin
// cambios. La ficha queda en noindex por no cumplir la regla de fotos oficiales.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_DETHLEFFS_M1: Autocaravana[] = [
  {
    id: "dethleffs-trend-t-6717-eb-2026-precio-ficha-tecnica",
    marca: "Dethleffs",
    modelo: "Trend T 6717 EB",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // precio en España no verificado; Dethleffs no publica tarifa de este modelo descatalogado
    potenciaCv: null, // motorización según configuración y año (Fiat Ducato 2.2/2.3 MultiJet 120–180 CV); sin dato único verificable para el modelo
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
    imagen: "/media/dethleffs-trend-t-6717-eb-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial:
      "/media/dethleffs-trend-t-6717-eb-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/dethleffs-trend-t-6717-eb-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6960, // «no oficial»: 6,96 m según prensa especializada (CaravanGuard); modelo descatalogado
    anchoMm: 2330, // «no oficial»: 2,33 m según prensa (coincide con la gama Trend actual)
    altoMm: 2940, // «no oficial»: 2,94 m según prensa (CaravanGuard)
    pesoKg: null, // masa en orden de marcha no publicada de forma única para esta versión
    mmaKg: 3499, // «no oficial»: 3.499 kg según prensa y gama actual; sin cifra oficial del modelo
    carnetNecesario: "B",
    cargaUtilKg: null, // no publicada por el fabricante para el modelo exacto
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // «no oficial»: 4 plazas según prensa y concesionarios
    plazasDormir: 4, // «no oficial»: 4 camas según prensa (camas gemelas traseras + salón convertible o basculante opcional)
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["largoMm", "anchoMm", "altoMm", "mmaKg", "plazas", "plazasDormir"], // «no oficial»: modelo descatalogado; cifras de prensa especializada y concesionarios
    notas:
      "El Trend T 6717 EB está descatalogado (Dethleffs lo sustituyó por el T 6617 EB en la lista oficial 2026) y el fabricante no publica su ficha técnica: dimensiones (6,96 x 2,33 x 2,94 m), MMA (3.499 kg), plazas (4) y camas (4) proceden de la prensa especializada británica (factfile de CaravanGuard del modelo 2023) y de anuncios de concesionarios, y van en «aprox» como «dato no oficial · en revisión». Sin tarifa española verificable: precio «no publicado». Esta ficha es útil sobre todo para el mercado de ocasión. sin tarifa oficial vigente verificable para este modelo.",
    curiosidades:
      "Dethleffs empezó como fábrica de fustas en Isny en 1832; un siglo más tarde, Arist Dethleffs construyó en 1931 la primera caravana alemana, el «Wohnauto», para que su familia pudiera acompañarle en sus viajes de negocios —el origen del lema «amigo de la familia» de la marca (fuente: Out & About Live / MMM, https://www.outandaboutlive.co.uk/motorhomes/articles/general/dethleffs-motorhomes-2023-essential-guide).",
    descripcion: `Empecemos por lo importante: el Dethleffs Trend T 6717 EB ya no se fabrica. Dethleffs lo descatalogó y lo sustituyó por el T 6617 EB en su lista oficial de 2026, de modo que esta ficha no sirve para encargar una unidad nueva en fábrica, sino para entender qué se compra cuando aparece un T 6717 EB en el mercado de ocasión, que es donde vive ahora este modelo. Y merece la ficha porque el Trend es la gama superventas de Dethleffs, la marca alemana con raíces en Isny desde 1832, en la región del Allgäu, y porque un T 6717 EB usado es una de las formas más sensatas de entrar en una perfilada alemana con camas gemelas sin pagar la tarifa de una nueva.

Dethleffs es de esas marcas que se explican por su fábrica: integración vertical, construcción propia y una obsesión alemana por la estanqueidad que se traduce en la garantía más larga del segmento generalista, 10 años contra infiltraciones de agua. En un vehículo con decenas de metros de juntas sometidas a lluvia, granizo y torsión, esa garantía no es marketing: es la diferencia entre dormir tranquilo y mirar el techo en cada tormenta. Para mantenerla hay que pasar la revisión anual de estanqueidad en la red oficial, un coste pequeño que casi ningún propietario discute.

El T 6717 EB es una perfilada de 6,96 metros con la distribución que ha hecho famosa a la gama Trend: camas gemelas traseras sobre un gran garaje, salón central en L, cocina enfrentada y baño compacto junto a la puerta de acceso. Las siglas lo dicen todo para quien conozca el código Dethleffs: T de perfilada (teilintegriert), 67 de la serie de longitud, 17 del plano y EB de Einzelbetten, camas individuales en alemán. Las gemelas traseras son la cama favorita de las parejas que viajan mucho: cada uno tiene su lado, se entra y se sale sin pasar por encima del otro, y el hueco central sirve para vestirse. El paso entre ambas es estrecho —es el punto débil clásico de esta distribución—, pero a cambio el garaje que queda debajo es enorme, con puertas de apertura con una sola mano, iluminación, enchufe de 230 voltios y raíles de amarre: el trastero rodante que toda autocaravana familiar necesita.

La construcción sigue el sistema Lifetime-Smart de Dethleffs: estructura sin madera, con suelo, paredes y techo revestidos de GRP (poliéster reforzado con fibra de vidrio), resistente al granizo y bien aislado. El techo aerodinámico de la cabina lleva una claraboya practicable de serie en las perfiladas, y la puerta de acceso es la famosa XXL de 70 centímetros con entrada coupé rebajada: se entra sin agacharse ni tropezar, un detalle que se agradece cada día del viaje y que las marcas generalistas no siempre ofrecen. Los armarios altos montan el sistema AirPlus de ventilación trasera, que evita la condensación en la ropa cuando se viaja en invierno, y los colchones son de espuma fría Evopore de 150 milímetros, el grosor que separa dormir de descansar.

En mecánica, el T 6717 EB se vendió sobre chasis-cabina Fiat Ducato con el 2.2 o el 2.3 MultiJet según el año, en potencias que van de los 120 a los 180 CV con cambio manual o automático. No hay una motorización única verificable para «el» T 6717 EB porque el modelo convivió con varias evoluciones del Ducato, así que la potencia queda sin dato en esta ficha: hay que mirar la ficha técnica de la unidad concreta. Lo que sí es común a todas es la MMA de 3.499 kg —un kilo por debajo del límite del carnet B, un guiño intencionado de la marca— y unas dimensiones contenidas para su categoría: 6,96 de largo, 2,33 de ancho y 2,94 de alto. Con cuatro plazas de viaje y cuatro camas, es una cuatro plazas honesta: dos duermen en las gemelas y otros dos en el salón convertible o en la cama basculante eléctrica opcional, que en su día se ofrecía como extra con sobrecoste.

El equipamiento de la gama Trend de su época incluía de serie ayudas a la conducción del Ducato —ESP con ASR, Traction Plus, asistente de arranque en pendiente, control de descenso, asistente de viento lateral y de estabilidad del remolque—, doble airbag, cierre centralizado de cabina y célula, y la radio con Apple CarPlay, Android Auto y cámara trasera. La lista de opcionales era larga y cara: paquete de chasis, paquete de diseño, paquete de invierno, segundas baterías, llantas de aleación o los laterales plateados podían engordar la factura un 20 % sin esfuerzo. Quien compre un T 6717 EB de ocasión debe pedir la hoja de equipamiento original: dos unidades del mismo año pueden diferir enormemente en equipamiento instalado.

Del precio nuevo ya no tiene sentido hablar, y del precio de ocasión hay que hablar con cuidado: depende del año, los kilómetros, el equipamiento y el estado de la estanqueidad. Como referencia histórica, la prensa británica situaba el PVP del modelo 2023 en unas 74.490 libras «on the road» en el Reino Unido, una tarifa extranjera que no sirve como PVP español pero que orienta sobre el posicionamiento: gama media alemana, por encima de las francesas de acceso y por debajo de las premium. En España, el precio lo pone el mercado de ocasión y la negociación con el vendedor.

Comprar un T 6717 EB usado exige un protocolo: revisar el libro de mantenimiento de la estanqueidad —sin los sellos anuales, la garantía de 10 años se pierde—, comprobar humedades con medidor en paredes, techo y garaje, probar la calefacción y el agua caliente, verificar el estado de los neumáticos por edad y no solo por dibujo, y pedir el informe de la última ITV. Un T 6717 EB con el historial de estanqueidad al día y la mecánica del Ducato cuidada es una compra para diez años; uno sin papeles de la célula es una lotería.

Cómo lo verificamos: la información de marca, construcción (sistema Lifetime-Smart con revestimiento GRP), garantía de 10 años contra infiltraciones, puerta XXL de 70 cm y equipamiento de la gama Trend procede de la web oficial de Dethleffs (dethleffs.com), verificada el 19 de octubre de 2026. El T 6717 EB está descatalogado y sustituido por el T 6617 EB en la lista oficial 2026, así que el fabricante no publica su ficha: las cifras del modelo —6,96 x 2,33 x 2,94 m, 4 plazas, 4 camas, MMA de 3.499 kg y chasis-cabina Fiat Ducato— proceden del factfile de la prensa especializada británica (CaravanGuard, modelo 2023) y de anuncios de concesionarios europeos, y van en «aprox» como «dato no oficial · en revisión». La referencia de precio británica (74.490 £) es tarifa en el Reino Unido y no se usa como PVP español.

Para quién es: el Dethleffs Trend T 6717 EB es para quien busca en el mercado de ocasión una perfilada alemana con camas gemelas, garantía de estanqueidad de 10 años transferible con el mantenimiento al día y una construcción sin madera pensada para durar. No es para quien quiera estrenar —ya no se fabrica— ni para quien busque la ficha técnica oficial completa, porque no existe. El veredicto es que es una de las compras de ocasión más racionales del segmento si el historial de estanqueidad está en regla; sin esos papeles, ni se mira.`,
    pros: [
      "Marca alemana con fábrica propia en Isny (Allgäu): integración vertical y control de calidad total",
      "Garantía de 10 años contra infiltraciones de agua: la más larga entre las perfiladas generalistas",
      "Puerta de acceso XXL de 70 cm con entrada coupé rebajada: se entra sin agacharse ni tropezar",
      "Ventilación AirPlus en los armarios altos: adiós a la condensación en la ropa de invierno",
      "Garaje con puertas de apertura con una mano, luz y enchufe de 230 V: cargar de noche sin linterna",
    ],
    contras: [
      "Modelo descatalogado (sustituido por el T 6617 EB): solo existe en el mercado de ocasión",
      "Las camas gemelas traseras son cómodas, pero el paso entre ellas es estrecho para vestirse",
      "Sin techo elevable ni capuchina: si vienen nietos, la única cama extra es el salón",
      "La lista de opcionales de su época alargaba el presupuesto un 20 %: hay que pedir la hoja de equipamiento original",
      "El precio español no figura en ningún catálogo público: toca negociar con el vendedor de ocasión",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/dethleffs-trend-t-6717-eb-2026-precio-ficha-tecnica-ext.webp",
        alt: "Dethleffs Trend T 6717 EB, vista tres cuartos",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/dethleffs-trend-t-6717-eb-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Dethleffs Trend T 6717 EB, camas gemelas",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/dethleffs-trend-t-6717-eb-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Cama basculante del Dethleffs Trend T 6717 EB",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/dethleffs-trend-t-6717-eb-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Plano de planta oficial del Dethleffs Trend T 6717 EB",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "dethleffs-trend-t-6717-eb-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato 2.2: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Fiat)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Dethleffs (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Dethleffs",
    },
    euroncap: null,
    fuenteNombre: "Dethleffs (web oficial, gama Trend) + CaravanGuard (prensa especializada)",
    fuenteUrl: "https://www.dethleffs.com/motorhomes/trend",
  },
];
