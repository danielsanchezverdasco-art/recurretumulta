// Autocaravanas Eura Mobil — lote Merlín 1 (18/10/2026).
// Datos verificados: folleto oficial Eura Mobil Integra Line GT (temporada 2025/2026,
// euramobil.de) + prensa especializada (outandaboutlive.co.uk, What Motorhome).
// CORRECCIÓN 5 (18/10/2026): fuenteUrl concreta (folleto oficial del modelo, no la
// portada de la marca); eliminado el bloque `costeMensual`; `cargaUtilKg` a null
// (la marca no publica la carga útil del modelo exacto); `analisisSlug` nuevo;
// añadidos `descripcion`, `plazasDormir` y `notas`.
// NOTA DE NOMENCLATURA: el «726 EB» no existe en la gama Integra Line GT (el EB es de la Profila T);
// el integral de camas gemelas oficial 2026 es el IL 726 EF, que es el que se ficha aquí.
// Eura Mobil no publica PVP de fábrica: precioDesde en null, sin inventar.
// FOTOS OFICIALES + curiosidades (agente F5, 19/10/2026): 1 ext + 2 int oficiales de prensa del fabricante.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_EURAMOBIL_M1: Autocaravana[] = [
  {
    id: "euramobil-integra-line-gt-il-726-ef-2026-precio-ficha-tecnica",
    marca: "Eura Mobil",
    modelo: "Integra Line GT IL 726 EF",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: null, // Eura Mobil no publica PVP de fábrica
    potenciaCv: 150, // 170 CV opcional
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
    imagen: "/media/euramobil-integra-line-gt-il-726-ef-2026-precio-ficha-tecnica-oficial.webp", // F5 19/10: portada oficial (prensa Eura Mobil)
    imagenOficial:
      "/media/euramobil-integra-line-gt-il-726-ef-2026-precio-ficha-tecnica-oficial.webp", // F5 19/10: foto oficial de prensa del fabricante
    imagenInteriorOficial:
      "/media/euramobil-integra-line-gt-il-726-ef-2026-precio-ficha-tecnica-oficial-interior.webp", // F5 19/10: interior oficial (prensa Eura Mobil)
    videoId: "c1jLraRP4_A",
    videoCanal: "CamperOnLine",
    largoMm: 7471,
    anchoMm: 2322,
    altoMm: 2980,
    pesoKg: null, // sin cifra única de fábrica; la masa en orden de marcha varía según equipamiento
    mmaKg: 4500,
    carnetNecesario: "C1",
    cargaUtilKg: null, // Eura Mobil no publica la carga útil del modelo exacto; la cifra de 1.054 kg era especificación de Reino Unido vía prensa
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4, // camas gemelas traseras + cama abatible delantera
    parNm: null, // no publicado por el fabricante
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Calefacción central de agua caliente Alde de serie: calor uniforme y silencioso, el sistema que montan las gamas altas",
      "Doble suelo calefactado de 30 cm: las instalaciones viajan protegidas del frío y suma almacenaje accesible",
      "Certificada para invierno según la norma EN 1646-1: homologada para usarse con temperaturas bajo cero",
      "Depósito de 150 l de agua limpia, aislado y calefactado: autonomía real fuera de temporada",
      "Chasis Mercedes Sprinter con cambio automático 9G-Tronic: refinamiento de turismo en una integral de 7,5 m",
    ],
    contras: [
      "MMA de 4.500 kg: exige carnet C1 y cambia peajes, ITV y limitaciones de circulación frente a una de 3.500 kg",
      "Sin PVP oficial de fábrica: los precios de concesionario bailan entre ~140.000 y ~177.000 €",
      "Masa en orden de marcha de hasta 3.620 kg según equipamiento: hay que vigilar qué extras se piden",
      "Con 7,47 m de largo y 2,98 m de alto, el acceso a pueblos y áreas pequeñas se complica",
      "El tercer y cuarto ocupante duermen en la cama delantera abatible: hay que recogerla cada mañana si se usa a diario",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/euramobil-integra-line-gt-il-726-ef-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Eura Mobil Integra Line GT IL 726 EF, vista exterior oficial de prensa",
        ancho: 1200,
        alto: 686,
      },
      {
        src: "/media/euramobil-integra-line-gt-il-726-ef-2026-precio-ficha-tecnica-oficial-interior.webp",
        alt: "Interior oficial de la Eura Mobil Integra Line GT IL 726 EF, salón cara a cara",
        ancho: 1200,
        alto: 801,
      },
      {
        src: "/media/euramobil-integra-line-gt-il-726-ef-2026-precio-ficha-tecnica-oficial-interior2.webp",
        alt: "Interior oficial de la Eura Mobil Integra Line GT IL 726 EF, cocina y comedor",
        ancho: 1200,
        alto: 801,
      },
      {
        src: "/media/euramobil-integra-line-gt-il-726-ef-2026-precio-ficha-tecnica-ext.webp",
        alt: "Eura Mobil Integra Line GT IL 726 EF, vista frontal integral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/euramobil-integra-line-gt-il-726-ef-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Eura Mobil Integra Line GT IL 726 EF, salón cara a cara",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/euramobil-integra-line-gt-il-726-ef-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Salón del Eura Mobil Integra Line GT IL 726 EF",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/euramobil-integra-line-gt-il-726-ef-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Dormitorio del Eura Mobil Integra Line GT IL 726 EF",
        ancho: 1200,
        alto: 800,
      },
    ],
    curiosidades: "Eura Mobil no se llamó así desde el principio: nació en 1959 como Blessing KG fabricando caravanas y solo adoptó el nombre Eura Mobil en 1983, cuando empezó a producir autocaravanas; desde 2005 forma parte del grupo Trigano y fabrica en Sprendlingen (Alemania). Fuente: The Caravan and Motorhome Club, https://www.caravanclub.co.uk/whats-on/awards/motorhome-design-awards/eura-mobil/", // F5 19/10: curiosidad real con fuente
    analisisSlug: "euramobil-integra-line-gt-il-726-ef-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Mercedes Sprinter: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Mercedes-Benz)",
      revisiones: [
        {
          nombre: "Revisión Mercedes Sprinter (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de aire + inspección general",
          costeAproxEur: 450,
        },
        {
          nombre: "Revisión célula Eura Mobil (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 700,
      fuente: "Plan de mantenimiento Mercedes-Benz Sprinter + recomendaciones Eura Mobil",
    },
    euroncap: null,
    fuenteNombre: "Eura Mobil (folleto oficial Integra Line GT, temporada 2025/2026)",
    fuenteUrl: "https://www.euramobil.de/wp-content/uploads/2025/09/EURA_ILGT_Broschuere_EN_2025.pdf",
    notas:
      "Eura Mobil no publica PVP de fábrica ni la carga útil del modelo exacto (la cifra de 1.054 kg era especificación de Reino Unido vía prensa especializada). La masa en orden de marcha no tiene cifra única de fábrica: varía según equipamiento. Medidas y MMA del folleto oficial Integra Line GT 2025/2026.",
    descripcion:
      "La Eura Mobil Integra Line GT IL 726 EF es la apuesta de la marca alemana por una integral «gran turismo»: una autocaravana de 7,47 metros sobre chasis Mercedes Sprinter que concentra el equipamiento de un liner —calefacción central de agua caliente, doble suelo calefactado, electrónica de a bordo— en un formato que sigue siendo manejable en carretera. Dentro de la gama Integra Line GT, que solo ofrece dos distribuciones, la IL 726 EF es la de camas gemelas traseras; su hermana, la IL 726 QF, monta cama isla central. Eura Mobil, con más de seis décadas fabricando en Sprendlingen y hoy dentro del grupo Trigano, juega en la liga premium alemana junto a Hymer, Carthago o Dethleffs, y la Integra Line GT es su argumento para quien quiere una integral sin subir a los ocho metros de un liner. Cómo lo verificamos: hemos trabajado sobre el folleto oficial de la gama Integra Line GT para la temporada 2025/2026 publicado en euramobil.de, cruzado con la prensa especializada británica (Out & About Live, What Motorhome). Lo que Eura Mobil no publica —precio de fábrica, masa en orden de marcha única, carga útil— lo decimos abiertamente en la ficha en vez de rellenarlo. Qué es y gama: la Integra Line GT es una integral de clase A sobre base Mercedes Sprinter con chasis especial rebajado AL-KO, pensada como «gran turismo» del caravaning: comportamiento rutero por encima de la media de las integrales y nivel de equipamiento de liner. La IL 726 EF organiza la zona de noche con dos camas individuales traseras, salón cara a cara con mesa de ala abatible, baño con ducha separada y cocina lateral. Las cuatro plazas de viaje y las cuatro de noche la plantean como vehículo de pareja con capacidad ocasional para cuatro, no como familiar de uso intensivo a cuatro. Medidas y habitabilidad: mide 7.471 mm de largo, 2.322 mm de ancho y 2.980 mm de alto, con una altura interior de 2,05 m que se nota nada más entrar: se camina erguido sin agachar la cabeza, algo que no todas las integrales de 7,5 metros ofrecen. El doble suelo calefactado de 30 cm crea tres niveles de almacenaje e incorpora una bandeja extraíble accesible por ambos lados, de modo que el material voluminoso —sillas, calzos, mangueras— viaja protegido del frío sin llenar el garaje trasero. La MMA es de 4.500 kg, y aquí viene la primera decisión importante: esta integral exige el carnet C1. No es un detalle administrativo menor: con 4.500 kg cambian los peajes en varios países, la ITV y las limitaciones de circulación respecto a una de 3.500 kg. A cambio, el margen de carga deja de ser el quebradero de cabeza habitual de las integrales «al límite». Las camas gemelas traseras, convertibles en una superficie doble, dan flexibilidad a la pareja, y la cama abatible sobre el salón resuelve la tercera y cuarta plaza con el peaje de recogerla cada mañana si se usa a diario. Mecánica y conducción: la base es el Mercedes Sprinter con el motor de 150 CV —170 CV en opción— y el cambio automático 9G-Tronic, una combinación que en una integral de este tamaño se traduce en refinamiento de turismo: sube de vueltas con suavidad, el cambio apenas se nota y los asistentes de conducción de Mercedes (asistente de velocidad inteligente, MBUX, asistente de viento lateral, mantenimiento de carril) vienen de serie según el folleto. El chasis especial rebajado AL-KO baja el centro de gravedad y, junto a la cabina corta de Eura Mobil con parabrisas panorámico, mejora el campo de visión respecto a una integral convencional. No es un vehículo para meterse por pistas —la tracción es delantera y el voladizo trasero manda respeto—, pero en autopista y nacional es de lo más aplomado de su segmento. Equipamiento y vida a bordo: el punto fuerte es la calefacción central de agua caliente Alde de serie, el sistema silencioso y uniforme que montan las gamas altas, frente a las calefacciones de aire pulsado de las gamas medias. Suma el depósito de 150 litros de agua limpia, aislado y calefactado, el vaciado eléctrico del depósito de grises y la certificación de resistencia invernal según la norma EN 1646-1: es una autocaravana pensada para usarse en enero en los Alpes, no solo en agosto en la costa. La carrocería, de material compuesto de fibra de vidrio sin madera, tiene 10 años de garantía de estanqueidad y 3 años en el mueble, cifras que hablan del posicionamiento premium. En el debe del equipamiento: el tercer y cuarto ocupante dependen de la cama abatible, y la lista de opcionales —doble acristalamiento de cabina, toldo, paneles solares— engorda rápido tanto el precio como la masa. Precio y rivales: Eura Mobil no publica PVP de fábrica, así que el precio real lo pone cada concesionario; en el mercado británico el precio guía ronda las 144.995 libras según el expositor del salón, y en Alemania las unidades en stock se mueven en una horquilla amplia. Sus rivales naturales son la Hymer B-MC I, la Carthago C-Tourer y la Dethleffs Globetrotter: todas integrales premium de 7 a 7,5 metros. Frente a ellas, la Eura Mobil juega la carta del doble suelo de 30 cm y la calefacción Alde de serie, donde algunas rivales la ofrecen en opción. Para quién es y veredicto: es la integral para la pareja que viaja mucho, también en invierno, y que valora el confort térmico y el silencio de marcha por encima de la discreción dimensional. No es para quien tenga solo el carnet B —los 4.500 kg son innegociables—, ni para quien busque la integral más barata de 7,5 metros: aquí se paga construcción alemana, chasis Mercedes y equipamiento de liner. Si el C1 no es un problema y el presupuesto lo permite, la IL 726 EF es de las integrales de camas gemelas más redondas de su precio: bien construida, bien calefactada y con un comportamiento en carretera que justifica el apellido Gran Turismo.",
  },
];
