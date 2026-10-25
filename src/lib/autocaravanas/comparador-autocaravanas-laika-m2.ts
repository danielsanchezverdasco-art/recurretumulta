// Autocaravanas Laika — lote Merlín 2 (19/10/2026).
// Datos de la ficha técnica oficial del Kreos L 5009 (modelo 2024/2025, base Fiat)
// publicada por el distribuidor Polski Caravaning, y del Kosmo H 1409 (ficha de
// distribuidor Brault Loisirs, FR + comunicado oficial de Laika).
// Precio: sin tarifa oficial en España. Kreos L 5009: UVP oficial en Alemania
// (166.797 €) marcado en `aprox`; Kosmo H 1409: precio de catálogo en Francia
// (99.415 €) marcado en `aprox`.
// 8 fotos webp (4 por ficha) de anuncios reales de unidades de los modelos exactos.
// Curiosidades con fuente en `curiosidades`. noindex lo gestiona Grok al integrar.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_LAIKA_M2: Autocaravana[] = [
  {
    id: "laika-kreos-l-5009-2026-precio-ficha-tecnica",
    marca: "Laika",
    modelo: "Kreos L 5009",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 166797, // UVP oficial en Alemania (166.797 €); Laika España no publica PVP
    potenciaCv: 140, // Fiat Ducato 2.2 Multijet de 140 CV de serie (180 CV opcional)
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
      "/media/laika-kreos-l-5009-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial:
      "/media/laika-kreos-l-5009-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/laika-kreos-l-5009-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7890, // ficha técnica oficial Kreos L 5009 (7,89 m)
    anchoMm: 2320, // ficha técnica oficial (2,32 m)
    altoMm: 3030, // ficha técnica oficial (3,03 m)
    pesoKg: 3742, // masa en orden de marcha: valor por defecto de homologación (rango 3.555-3.929 kg)
    mmaKg: 4500, // ficha técnica oficial
    carnetNecesario: "C1", // 4.500 kg de MMA: Laika confirma que el Kreos supera las 3,5 t y exige categoría superior
    cargaUtilKg: null, // la marca no publica la carga útil por versión: no se calcula
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // ficha oficial: 4 plazas de viaje de serie (5ª opcional)
    plazasDormir: 4, // camas gemelas traseras + cama basculante eléctrica delantera (opcional)
    parNm: 350, // Fiat Ducato 2.2 Multijet 140 CV: 350 Nm (dato oficial Fiat)
    traccion: "Delantera", // Fiat Ducato, tracción delantera
    emisionesCo2: null,
    aprox: ["Precio de tarifa en Alemania (UVP): 166.797 €"],
    notas:
      "El precio (166.797 €) es el UVP (precio de tarifa recomendado) oficial en Alemania para una unidad Kreos L 5009 de 2024; Laika España no publica PVP y el precio final lo fija cada concesionario. Medidas, MMA, plazas, chasis y equipamiento proceden de la ficha técnica oficial del modelo publicada por el distribuidor. La masa en orden de marcha indicada (3.742 kg) es el valor por defecto de homologación con rango 3.555-3.929 kg; la carga útil por versión no la publica la marca y queda sin dato sin calcularse. Desde la temporada 2026/27 la gama Kreos pasa a base Mercedes-Benz Sprinter; esta ficha describe la versión Fiat Ducato (colección 2025).",
    descripcion: `El Laika Kreos L 5009 es el buque insignia de la marca toscana y la perfilada que mejor resume lo que Laika entiende por lujo italiano sobre ruedas. Con 7,89 metros de largo, el L 5009 no es una perfilada más: es el modelo con el que Laika encargó al estudio GFG Style, la casa de Giorgetto y Fabrizio Giugiaro, redefinir el concepto de autocaravana de lujo. El resultado es una semiintegrada de líneas automovilísticas, con la cabina Fiat perfectamente integrada en la célula y una carrocería sin madera donde cada panel tiene una función estructural o térmica. Es, en la práctica, la puerta de entrada a la gama más exclusiva de Laika sin dar el salto a la integral.

La base mecánica es el Fiat Ducato Heavy en versión 44, sobre el chasis rebajado AL-KO AMC con suspensión reforzada y vía trasera ensanchada, una combinación que Laika reserva para su gama alta y que se nota en la estabilidad en autopista y en el comportamiento con viento lateral. El motor de serie es el 2.2 Multijet de 140 CV con cambio manual de seis velocidades, suficiente para mover con dignidad los 4.500 kg de MMA, aunque la opción lógica para quien viaje cargado es el 180 CV, disponible también con cambio automático. La dotación de seguridad de serie está al nivel de un turismo moderno: ESC, ABS, ASR, Hill Holder, mitigación de vuelco, asistente de viento lateral, control de estabilidad del remolque, frenada post-colisión, tempomat y Eco-Pack con Start&Stop. La cabina, con asientos Captain Chair giratorios, se integra en el salón sin escalones gracias al suelo plano continuo.

Por dentro, la distribución L 5009 es la que ha convertido a este modelo en un icono: camas gemelas traseras elevadas sobre el garaje, de 195 x 80 cm cada una, con somieres de muelles, cabeceros regulables, calefacción perimetral y la posibilidad de unirlas en una gran cama doble. Delante, el salón en L con sofá lateral acoge hasta siete personas alrededor de la mesa redonda de Corian, y la cama basculante eléctrica opcional (195 x 140 cm) eleva la capacidad nocturna a cuatro plazas sin robar ni un centímetro de día, ya que desaparece en el techo. La cocina monta encimera y mesa de Corian, cocina de tres fuegos, horno de gas y frigorífico de 153 litros con selección automática de energía (AES). El baño es de los que se recuerdan: ducha Wellness separada con doble rociador y función de lluvia, lavabo de Corian y un sistema de puertas que permite convertir toda la zona en un gran cuarto de baño privado.

La construcción es donde el Kreos justifica su precio. Paredes de 44 mm de aluminio/XPS/aluminio, techo y suelo de fibra de vidrio, y sobre todo el doble suelo técnico de 250 mm, calefactado e iluminado, que recorre todo el vehículo: aloja los depósitos de agua (200 litros de limpias y 146 de grises, ambos calefactados), las instalaciones y un generoso espacio de almacenaje accesible desde dentro y desde fuera. El garaje trasero, con doble puerta, suelo antideslizante, calefacción, tomas de 12 y 230 V y anclajes regulables, admite 250 kg de carga; Laika incluso ofrece como guiño una bodega para una docena de botellas de Chianti con iluminación dedicada. La calefacción es por radiadores de agua caliente Alde de 6 kW con intercambiador para calentar en marcha, el sistema que los caravanistas del norte de Europa consideran la referencia para el invierno de verdad.

Con 7,89 m de largo, 2,32 m de ancho y 3,03 m de alto, el Kreos L 5009 es una perfilada de gran formato: necesita sus metros en el área y 4.500 kg de MMA que exigen el carnet C1, así que no es la opción para quien busque viajar con el B. A cambio ofrece un interior sin escalones de 2,05 m de altura libre y un aislamiento pensado para usarse los doce meses del año. Las cuatro plazas de viaje de serie (con quinta opcional) lo orientan a parejas que viajan con invitados o a familias pequeñas que priorizan el confort sobre el número de camas.

Del precio en España no hay cifra oficial: Laika trabaja con red de concesionarios y no publica PVP. Como referencia de posicionamiento, el UVP oficial en Alemania para una unidad de 2024 era de 166.797 €, lo que lo sitúa en la liga de las perfiladas premium europeas, frente a rivales como la Hymer B-MC, la Dethleffs Globetrotter o la Adria Matrix Supreme. En el mercado de ocasión alemán las unidades de 2024 se mueven entre 110.000 y 135.000 € según equipamiento, un dato útil para calibrar la depreciación real del modelo.

Verificación de fuentes: medidas (7,89 x 2,32 x 3,03 m), MMA (4.500 kg), plazas (4 de viaje / 2+2 para dormir), chasis AL-KO AMC, motor Fiat Ducato 2.2 de 140 CV, camas gemelas de 195 x 80 cm, cama basculante opcional de 195 x 140 cm, frigorífico de 153 l, depósitos de 200/146 l, doble suelo de 250 mm y garaje de 250 kg proceden de la ficha técnica oficial del Kreos L 5009 publicada por el distribuidor y de la documentación de prensa de Laika. El UVP de 166.797 € es la tarifa oficial en Alemania para una unidad de 2024. La marca no publica la carga útil por versión: ese campo queda sin dato y no se calcula. Las fotos corresponden a un Laika Kreos L 5009 real de 2023 anunciado en Alemania y al dormitorio del modelo.

Perfil de comprador: el Kreos L 5009 encaja con parejas viajeras de alto poder adquisitivo que quieren la mejor perfilada del mercado, usan la autocaravana todo el año (incluido invierno) y valoran el diseño italiano firmado por Giugiaro, el doble suelo calefactado y la calefacción Alde por encima del precio. No encaja con quien necesite conducir con el carnet B, con quien busque una perfilada compacta de menos de 7 metros ni con quien quiera un PVP cerrado de fábrica para comparar entre marcas. Balance: la perfilada más deseable del catálogo Laika y una de las mejores semiintegradas premium de Europa, lastrada únicamente por los 4.500 kg que exigen el C1 y por la opacidad de precios habitual en la marca.`,
    pros: [
      "Diseño firmado por GFG Style (Giugiaro): la perfilada con más carácter del mercado",
      "Doble suelo técnico calefactado de 250 mm + calefacción Alde de 6 kW: inviernos sin miedo",
      "Camas gemelas de 195 x 80 cm con somieres de muelles, convertibles en gran cama doble",
      "Chasis AL-KO AMC rebajado con vía trasera ensanchada: estabilidad de referencia",
      "Garaje calefactado de 250 kg con doble acceso, tomas de 12/230 V y hasta bodega de vinos",
    ],
    contras: [
      "4.500 kg de MMA: exige el carnet C1, no vale el B",
      "Sin PVP oficial en España: cada concesionario fija su precio",
      "7,89 m de largo: hay que planificar áreas y accesos",
      "El motor de 180 CV y el cambio automático son opcionales con sobreprecio",
      "La marca no publica la carga útil por versión: hay que pesar la unidad equipada",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/laika-kreos-l-5009-2026-precio-ficha-tecnica-ext.webp",
        alt: "Laika Kreos L 5009, vista delantera tres cuartos con cabina blanca",
        ancho: 1500,
        alto: 930,
      },
      {
        src: "/media/laika-kreos-l-5009-2026-precio-ficha-tecnica-ext-2.webp",
        alt: "Laika Kreos L 5009, vista trasera tres cuartos con el galgo de Laika",
        ancho: 1500,
        alto: 1000,
      },
      {
        src: "/media/laika-kreos-l-5009-2026-precio-ficha-tecnica-interior.webp",
        alt: "Dormitorio del Laika Kreos L 5009 con camas gemelas unidas en cama doble",
        ancho: 1201,
        alto: 799,
      },
      {
        src: "/media/laika-kreos-l-5009-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Garaje trasero del Laika Kreos L 5009 con raíles de amarre",
        ancho: 1500,
        alto: 1000,
      },
    ],
    analisisSlug: "laika-kreos-l-5009-2026-analisis-opinion",
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
          nombre: "Revisión célula Laika (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción Alde",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Laika",
    },
    euroncap: null,
    curiosidades:
      "El Kreos no lo diseñó un carrocero cualquiera: Laika encargó la redefinición de su gama insignia a GFG Style, el estudio de Giorgetto Giugiaro —el diseñador italiano del siglo XX, padre de iconos como el Volkswagen Golf Mk1 o el DeLorean— y su hijo Fabrizio. Dos años de trabajo para darle a una autocaravana alma de automóvil. Fuente: dossier de prensa de Laika (https://www.caravantrends.com/new-kreos-motorhome/).",
    fuenteNombre: "Laika Caravans — datos técnicos oficiales del Kreos L 5009 (vía Polski Caravaning)",
    fuenteUrl: "https://polskicaravaning.pl/kamper/laika-kreos-l-5009-2024,4929",
  },
  {
    id: "laika-kosmo-h-1409-2026-precio-ficha-tecnica",
    marca: "Laika",
    modelo: "Kosmo H 1409",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: 99415, // precio de catálogo en Francia (99.415 €); Laika España no publica PVP
    potenciaCv: 140, // Fiat Ducato 2.2 Multijet III de 140 CV con cambio manual, de serie
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
      "/media/laika-kosmo-h-1409-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial:
      "/media/laika-kosmo-h-1409-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/laika-kosmo-h-1409-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7400, // ficha de distribuidor: 7,40 m
    anchoMm: 2320, // ficha de distribuidor: 2,32 m
    altoMm: 2950, // ficha de distribuidor: 2,95 m
    pesoKg: null, // masa en orden de marcha no publicada por la marca para esta versión
    mmaKg: 4400, // Fiat Ducato Heavy 4.400 kg
    carnetNecesario: "C1", // 4.400 kg de MMA: exige categoría superior al B
    cargaUtilKg: null, // la marca no publica la carga útil de esta versión: no se calcula
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas de viaje homologadas
    plazasDormir: 4, // camas gemelas traseras + cama basculante delantera
    parNm: 350, // Fiat Ducato 2.2 Multijet 140 CV: 350 Nm (dato oficial Fiat)
    traccion: "Delantera", // Fiat Ducato, tracción delantera
    emisionesCo2: null,
    aprox: ["Precio de catálogo en Francia: 99.415 €"],
    notas:
      "El precio (99.415 €) es el precio de catálogo en Francia publicado por el distribuidor Brault Loisirs para una unidad Kosmo H 1409; Laika España no publica PVP y el precio final lo fija cada concesionario. Medidas (7,40 x 2,32 x 2,95 m), plazas (4/4), MMA (4.400 kg) y motorización (Fiat Ducato 2.2 de 140 CV) proceden de la ficha del distribuidor y del comunicado oficial de Laika. La masa en orden de marcha y la carga útil de esta versión no están publicadas: quedan sin dato y no se calculan.",
    descripcion: `El Laika Kosmo H 1409 es la integral que puso a la gama Kosmo en el mapa de las autocaravanas de diseño. Presentado en primicia mundial en el CMT de Stuttgart de enero de 2024, el H 1409 es el buque insignia de la nueva generación Kosmo: un motorhome de 7,40 metros con camas gemelas traseras que demuestra que una integral no necesita ser enorme ni carísima para tener presencia. Con su frontal monobloque de fibra de vidrio, la bicromía blanco y negro que recorre los flancos y la firma luminosa full LED, el H 1409 se reconoce a cien metros en cualquier área.

Técnicamente, el H 1409 es un motorhome de última generación construido sobre base "scudata": un Fiat Ducato del que Laika solo aprovecha el chasis, sin cabina ni piso, para construir encima su propia célula integral. Esa es la diferencia entre una perfilada y una integral de verdad: aquí no hay cabina Fiat, sino un frontal diseñado por Laika con parabrisas panorámico, faros full LED con intermitentes y DRL integrados, y una calandra monobloque que le da ese aire automovilístico que la marca toscana persigue desde hace años. El motor de serie es el 2.2 Multijet III de 140 CV con cambio manual de seis velocidades, sobre el chasis Heavy de 4.400 kg que deja margen de carga para viajar con todo.

La distribución es la clásica que nunca falla en este formato: salón delantero con los asientos de cabina giratorios integrados, cocina central bien equipada, baño con ducha separada y, al fondo, las camas gemelas sobre el garaje. Son cuatro plazas de viaje homologadas y cuatro para dormir: las dos gemelas traseras más la cama basculante delantera, que de día desaparece en el techo y deja el salón diáfano con la gran luna delantera como protagonista. La cocina monta frigorífico de 140 litros, y los depósitos (110 litros de aguas limpias y 90 de grises) van protegidos en el doble fondo, con calefacción de aire caliente de 6 kW para alargar la temporada más allá del verano.

Por dentro se respira el nuevo lenguaje de diseño de Laika: muebles de líneas limpias, iluminación LED indirecta, tapicerías en tonos equilibrados y ese cuidado del detalle que la marca resume como "diseño italiano". No es el nivel de materiales del Kreos —el Kosmo es la gama de acceso a las integrales de Laika—, pero el salto frente a la competencia generalista se nota en el tacto de los muebles, en la solidez de la puerta de la célula y en la insonorización de la cabina. El puesto de conducción, con los asientos tapizados con el galgo de Laika bordado, recuerda en todo momento que esto no es un Ducato con una caja detrás, sino un vehículo concebido como un todo.

Con 7,40 m de largo, 2,32 m de ancho y 2,95 m de alto, el H 1409 se mueve en la franja contenida de las integrales: más manejable que las grandes integrales de 7,5-8 metros, pero con la habitabilidad y la luminosidad que solo da un frontal integral. Los 4.400 kg de MMA exigen el carnet C1 —el peaje habitual de las integrales con chasis Heavy—, así que conviene tenerlo claro antes de enamorarse. A cambio, el margen de carga es generoso y permite equiparla con toldo, portabicicletas y aire acondicionado sin ir justo de peso.

Del precio en España no hay cifra oficial: Laika no publica PVP y cada concesionario fija el suyo. Como referencia, el precio de catálogo en Francia para una unidad del modelo es de 99.415 €, lo que lo posiciona como una de las integrales con mejor relación diseño/precio del mercado, frente a rivales como la Dethleffs Globebus, la Bürstner Lyseo o la Adria Matrix en sus versiones integrales equivalentes. En el mercado de ocasión europeo las unidades de 2024-2025 se mueven entre 75.000 y 95.000 € según equipamiento.

Verificación de fuentes: medidas (7,40 x 2,32 x 2,95 m), plazas (4 de viaje / 4 para dormir), MMA (4.400 kg sobre Fiat Ducato Heavy), motorización 2.2 Multijet de 140 CV con cambio manual y la construcción sobre base "scudata" proceden del comunicado oficial de Laika con motivo de su presentación en el CMT 2024 y de la ficha del distribuidor. El precio de catálogo de 99.415 € es el publicado en Francia. La masa en orden de marcha y la carga útil de esta versión no están publicadas: quedan sin dato y no se calculan. Las fotos corresponden a un Laika Kosmo H 1409 real.

Perfil de comprador: el Kosmo H 1409 encaja con parejas que quieren estrenarse en el mundo de las integrales sin hipotecarse, valoran el diseño italiano y la imagen (la bicromía blanco/negro no pasa desapercibida), y viajan dos con escapadas ocasionales de cuatro. No encaja con quien necesite conducir con el carnet B, con familias que necesiten cinco o seis plazas, ni con quien busque una integral para vivir a bordo todo el año en climas duros (la calefacción es de aire, no por radiadores como en el Kreos). Balance: la integral con más estilo por menos de 100.000 € de catálogo, con el único peaje de los 4.400 kg que exigen el C1.`,
    pros: [
      "Diseño integral con frontal monobloque y firma full LED: presencia de gama alta",
      "Camas gemelas traseras + cama basculante: 4 plazas para dormir en 7,40 m",
      "Chasis Heavy de 4.400 kg: margen de carga generoso para equiparla a fondo",
      "Base 'scudata': integral de verdad, sin cabina Fiat postiza",
      "Precio de catálogo contenido para una integral de diseño italiano",
    ],
    contras: [
      "4.400 kg de MMA: exige el carnet C1",
      "Calefacción de aire caliente, no por radiadores de agua como el Kreos",
      "Sin PVP oficial en España: cada concesionario fija su precio",
      "La marca no publica la masa en orden de marcha ni la carga útil de esta versión",
      "Gama Kosmo: materiales un peldaño por debajo del Kreos",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/laika-kosmo-h-1409-2026-precio-ficha-tecnica-ext.webp",
        alt: "Laika Kosmo H 1409, vista delantera tres cuartos con frontal integral",
        ancho: 1400,
        alto: 1050,
      },
      {
        src: "/media/laika-kosmo-h-1409-2026-precio-ficha-tecnica-ext-2.webp",
        alt: "Laika Kosmo H 1409, vista trasera tres cuartos",
        ancho: 1400,
        alto: 1050,
      },
      {
        src: "/media/laika-kosmo-h-1409-2026-precio-ficha-tecnica-interior.webp",
        alt: "Cocina y puesto de conducción del Laika Kosmo H 1409",
        ancho: 1600,
        alto: 1067,
      },
      {
        src: "/media/laika-kosmo-h-1409-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Dormitorio del Laika Kosmo H 1409 con camas gemelas",
        ancho: 1920,
        alto: 1280,
      },
    ],
    analisisSlug: "laika-kosmo-h-1409-2026-analisis-opinion",
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
          nombre: "Revisión célula Laika (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Laika",
    },
    euroncap: null,
    curiosidades:
      "El Kosmo H 1409 se presentó en primicia mundial en el CMT de Stuttgart de enero de 2024 como el modelo estrella de la renovada gama Kosmo: Laika lo definió como un 'motorhome di ultima generazione' construido sobre base 'scudata', es decir, sobre un chasis Fiat del que solo se aprovecha el bastidor, sin cabina ni piso, para levantar encima una célula integral auténtica. Fuente: comunicado oficial de Laika / presentación del modelo (https://espritcampingcar.com/laika-kosmo-h1409-la-nouveaute/).",
    fuenteNombre: "Laika — ficha del Kosmo H 1409 (vía Brault Loisirs, FR)",
    fuenteUrl: "https://www.braultloisirs.com/sites/default/files/commerce_product/field_pdf_vehicule/kosmoh1409_zfa25000002z02612_1.pdf",
  },
];
