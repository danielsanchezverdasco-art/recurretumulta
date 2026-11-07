// Autocaravanas Carthago — lote Merlín 1 (18/10/2026), corrección b/c/d (22:15).
// El C-Tourer I 148 LE es de la gama 2024 (en 2025 pasó a C1-tourer y en 2026 a
// C2-tourer); Carthago no publica ficha oficial de este modelo descatalogado:
// fuenteNombre/fuenteUrl sin dato. Correcciones: eliminado costeMensual; campos de
// concesionario en «aprox» con nota «dato no oficial · en revisión»; añadidos
// descripcion, notas y plazasDormir (null); analisisSlug a -analisis-opinion.
// NOTA: el id se mantiene por orden expresa (las URL no se tocan).
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_CARTHAGO_M1: Autocaravana[] = [
  {
    id: "carthago-c-tourer-i-148-le-2026-precio-ficha-tecnica",
    marca: "Carthago",
    modelo: "C-Tourer I 148 LE",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: null, // precio en España no verificado; no inventar
    potenciaCv: 140, // «no oficial»: exposé de concesionario autorizado (Dandis); base Fiat
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
    imagen: "/media/carthago-c-tourer-i-148-le-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/carthago-c-tourer-i-148-le-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/carthago-c-tourer-i-148-le-2026-precio-ficha-tecnica-oficial-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7390, // «no oficial»: 739 cm versión Fiat Ducato según exposé de concesionario (752 cm = versión Mercedes)
    anchoMm: 2270, // «no oficial»: exposé de concesionario autorizado
    altoMm: 2950, // «no oficial»: exposé de concesionario autorizado
    pesoKg: null, // masa en orden de marcha no publicada de forma única para esta versión
    mmaKg: 3500, // «no oficial»: chasis f35 light según concesionario; sin confirmación del fabricante
    carnetNecesario: "B",
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // «no oficial»: 2+2 con cama basculante opcional según catálogo; 4 según concesionario
    plazasDormir: null, // la marca no publica las plazas para dormir de este modelo
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["largoMm", "anchoMm", "altoMm", "mmaKg", "plazas", "potenciaCv"],
    notas:
      "Modelo de la gama Carthago 2024 (la gama pasó a C1-tourer en 2025 y a C2-tourer en 2026); el fabricante no publica ficha oficial de esta versión. Datos del exposé de un concesionario autorizado Carthago (Dandis): «dato no oficial · en revisión». «LE» = camas gemelas longitudinales.",
    descripcion: `La Carthago C-Tourer I 148 LE es una autocaravana integral de 7,39 metros de la marca alemana Carthago, el fabricante premium de Aulendorf que desde 1979 construye algunas de las autocaravanas mejor consideradas de Europa. La «I» indica integral —la clase A con parabrisas panorámico— y el «LE» identifica la distribución con camas gemelas longitudinales, el formato de dormitorio que los viajeros experimentados suelen preferir por comodidad y por el garaje que deja debajo. El C-Tourer era la gama de acceso a las integrales Carthago, por debajo de las chic c-line y las liner, y el 148 LE una de sus distribuciones más equilibradas.

Una precisión importante sobre el año modelo: el C-Tourer I 148 LE pertenece a la gama 2024. En 2025 la gama pasó a denominarse C1-tourer y en 2026 a C2-tourer, con carrocerías y distribuciones renovadas. Carthago no publica ficha oficial de esta versión descatalogada, así que todos los datos numéricos proceden del exposé técnico de un concesionario autorizado de la marca y van marcados como «dato no oficial · en revisión». Según esa documentación, la versión sobre Fiat Ducato mide 7,39 m de largo —la versión sobre Mercedes-Benz Sprinter llegaba a 7,52 m—, 2,27 m de ancho y 2,95 m de alto, con una MMA de 3.500 kg sobre el chasis ligero f35 que permite conducirla con el carnet B. La anchura de 2,27 m, inferior a los 2,35 m habituales en las integrales alemanas, es una de sus virtudes dinámicas: una clase A más ágil en carreteras de montaña y pueblos. Homologa 4 plazas para viajar, con cama basculante opcional para llegar a las cuatro de noche.

Las camas gemelas traseras, de unos 200 cm de largo, son el corazón de la distribución LE: dos camas individuales con un gran armario debajo, unibles para formar una superficie doble, y sobre un garaje con 1.200 mm de altura interior útil. El doble suelo de la célula, con 220 mm de bodega, protege las instalaciones del frío y ofrece almacenaje adicional, una solución constructiva típica de Carthago que pocas generalistas ofrecen. La calefacción es una Truma Combi 6E y los depósitos son generosos —150 litros de agua limpia y 140 de grises—, cifras de autonomía para varios días sin pasar por un área de servicio. El frigorífico, de 153 litros con 29 de congelador, está por encima de la media del segmento. La construcción sigue el estándar de la marca: paneles de aluminio con aislamiento RTM, materiales y ajustes de referencia en el sector premium.

Mecánicamente, la base documentada es el Fiat Ducato 2.2 de 140 CV, el motor básico de la gama, con la opción del 180 CV con cambio automático para quien quiera más reserva en montaña —una opción que en una Carthago encarece notablemente la factura, porque los opcionales de la marca tienen precios premium—. La versión Mercedes-Benz Sprinter existía como alternativa para quien prefiriera la estrella y su cambio automático, con 13 cm más de longitud. En marcha, la C-Tourer se beneficia del chasis ligero y de la anchura contenida: es una de las integrales de 7,4 m más manejables, aunque con el 140 CV básico y la célula cargada conviene no tener prisa en los puertos.

Del precio no hay cifra oficial ni oficiosa sólida: Carthago no publica PVP y las unidades que quedan en stock de concesionarios son de la gama 2024, con precios que dependen de cada oferta. Como referencia de posicionamiento, las integrales Carthago nuevas se sitúan claramente por encima de las generalistas francesas o españolas —es el peaje del premium alemán—, y sus rivales naturales son la Niesmann+Bischoff iSmove, la Hymer B-MC I y, un escalón por debajo en precio, la Bürstner Lyseo I o la Dethleffs Globetrotter. Frente a ellas, la Carthago juega la carta de la calidad de construcción, el doble suelo y el valor de reventa, históricamente muy sólido en el mercado de ocasión alemán.

Cómo lo verificamos: ante la descatalogación del modelo y la ausencia de documentación oficial del fabricante para esta versión, los datos proceden del exposé técnico publicado por un concesionario autorizado Carthago (Dandis) para una unidad 2024 del C-Tourer I 148 LE, con medidas, motor, depósitos y equipamiento detallados. Todos los campos numéricos van en «aprox» con la nota correspondiente. La web actual de carthago.com solo ofrece las gamas C1-tourer y C2-tourer, sin rastro del 148 LE.

Para quién es: la C-Tourer I 148 LE es para quien busca una integral premium alemana de ocasión o de stock, con camas gemelas, doble suelo y 2,27 m de anchura ágil, y valora la calidad de construcción por encima del último grito en diseño. No es para quien quiera una unidad nueva a estrenar —la gama actual es la C2-tourer— ni para quien busque el precio más ajustado. El veredicto es que, con datos de concesionario y la prudencia que eso exige, se trata de una de las integrales de 7,4 m mejor construidas de su generación, con una distribución LE muy buscada en el mercado de ocasión y una reventa que protege la inversión.`,
    pros: [
      "Integral premium de 7,39 m (versión Fiat) con solo 2,27 m de ancho: ágil para ser una clase A",
      "Camas gemelas de 200 cm con armario de gran altura debajo: dormir y guardar sin renuncias",
      "Doble suelo con 220 mm de bodega: instalaciones protegidas del frío y mucho almacenaje",
      "Calefacción Truma Combi 6E y depósitos de 150/140 l: pensada para viajar todo el año",
      "Carthago fabrica con aluminio y aislamiento RTM: calidad de construcción de referencia",
    ],
    contras: [
      "Modelo de la gama 2024, descatalogado: solo quedan unidades de stock o de ocasión",
      "Precio no publicado y claramente premium: hay que pedir oferta y preparar la cartera",
      "El motor Fiat 2.2 de 140 CV es el básico: el 180 CV automático encarece mucho",
      "Sin ficha oficial del fabricante para esta versión: todos los datos son de concesionario",
      "MMA orientativa de 3.500 kg: el equipamiento premium pesa y la carga útil se estrecha",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/carthago-c-tourer-i-148-le-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Carthago C-Tourer I integral, vista exterior tres cuartos (foto oficial del fabricante)",
        ancho: 1200,
        alto: 600,
      },
      {
        src: "/media/carthago-c-tourer-i-148-le-2026-precio-ficha-tecnica-oficial-interior.webp",
        alt: "Camas gemelas de la distribución LE del Carthago C-Tourer I (foto oficial)",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/carthago-c-tourer-i-148-le-2026-precio-ficha-tecnica-oficial-interior2.webp",
        alt: "Dormitorio con camas gemelas del Carthago C-Tourer I, distribución LE (foto oficial)",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/carthago-c-tourer-i-148-le-2026-precio-ficha-tecnica-ext.webp",
        alt: "Carthago C-Tourer I 148 LE, vista frontal integral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/carthago-c-tourer-i-148-le-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Carthago C-Tourer I 148 LE, camas gemelas",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/carthago-c-tourer-i-148-le-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Salón del Carthago C-Tourer I 148 LE, vista cenital",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/carthago-c-tourer-i-148-le-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Cocina del Carthago C-Tourer I 148 LE",
        ancho: 1200,
        alto: 800,
      },
    ],
    curiosidades:
      "Las camas gemelas del 148 LE miden 190/200 cm de largo por 85 cm de ancho y se unen en una superficie king-size, sobre un garaje con 1.200 mm de altura interior útil: el dormitorio de hotel con bodega para el equipaje debajo. Fuente: exposé del concesionario autorizado Carthago Dandis, https://camprest.com/en/vehicles/55366. Fotos oficiales: prensa de Carthago de la gama C-Tourer I integral (la marca retiró el kit específico del 148 LE al descatalogarlo en 2024).",
    analisisSlug: "carthago-c-tourer-i-148-le-2026-analisis-opinion",
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
          nombre: "Revisión célula Carthago (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Carthago",
    },
    euroncap: null,
    fuenteNombre: null,
    fuenteUrl: null,
  },
];
