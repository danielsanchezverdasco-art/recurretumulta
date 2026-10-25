// Autocaravanas Adria — lote Merlín 5 (19/10/2026).
// Fuentes: web oficial de Adria — Supersonic
// (https://www.adria-mobil.com/motorhomes/supersonic),
// lista oficial de precios Adria 2026 (adria-center.si,
// https://adria-center.si/wp-content/uploads/Cenik-2026-Adria-Avtodomi.pdf),
// noticia oficial «Winner's podium for SUPERSONIC at the Golden Motorhome 2024»
// (https://www.adria-mobil.com/news/winners-podium-for-supersonic-at-the-golden-motorhome-2024),
// ficha del Supersonic 780 SL en alpacacamping.de y prueba del modelo en
// outandaboutlive.co.uk. Verificado el 19/10/2026.
// NOTAS HONESTAS: Adria no publica PVP para España en su web; el precio queda
// sin dato y solo se citan referencias extranjeras con su fuente (Eslovenia:
// 160.795 € con IVA, lista oficial 2026; Alemania: ~153.890 €, alpacacamping;
// Reino Unido: desde 156.690 £, caravanguard). La potencia del 780 SL es
// 150 CV según la lista oficial 2026 (los 890 montan 170 CV). Medidas
// 7,80 x 2,30 x 2,99 m y masa en orden de marcha ~3.650 kg según
// alpacacamping.de (ficha del modelo). Las 4 fotos son oficiales de
// web-cdn.adria-mobil.com, incluida una del interior del 780 SL exacto.
// La carga útil base no la publica el fabricante: null.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_ADRIA_M5: Autocaravana[] = [
  {
    id: "adria-supersonic-780-sl-2026-precio-ficha-tecnica",
    marca: "Adria",
    modelo: "Supersonic 780 SL",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: null, // Adria no publica PVP para España; null = «no publicado»
    potenciaCv: 150, // Mercedes-Benz CDI 2.0 150 CV automático, lista oficial Adria 2026 (los 890 montan 170 CV)
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
    imagen: "/media/adria-supersonic-780-sl-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/adria-supersonic-780-sl-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/adria-supersonic-780-sl-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7800, // alpacacamping.de, ficha del Supersonic 780
    anchoMm: 2300, // alpacacamping.de
    altoMm: 2990, // alpacacamping.de
    pesoKg: 3650, // masa en orden de marcha aprox., alpacacamping.de
    mmaKg: 4500, // camprest.com / outandaboutlive.co.uk
    carnetNecesario: "C1", // mmaKg entre 3500 y 7500
    cargaUtilKg: null, // el fabricante no publica una cifra base (depende del equipamiento)
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4, // camas gemelas traseras (unibles en doble) + cama basculante eléctrica sobre la cabina
    parNm: null,
    traccion: "delantera", // Mercedes-Benz Sprinter de tracción delantera en esta configuración
    emisionesCo2: null,
    aprox: [],
    notas:
      "Integral insignia de Adria sobre Mercedes-Benz Sprinter con chasis AL-KO y carrocería Comprex (fibra de vidrio + aluminio). Según la lista oficial de precios Adria 2026 (Eslovenia): Supersonic 780 SL con Mercedes CDI 2.0 de 150 CV y cambio automático, 160.795 € con IVA incluido. Medidas 7,80 x 2,30 x 2,99 m, masa en orden de marcha aprox. 3.650 kg y MMA de 4.500 kg (alpacacamping.de, camprest.com). Camas gemelas traseras de 198 x 81 cm unibles en doble y cama basculante eléctrica de 190 x 150 cm sobre la cabina (camprest.com). Calefacción Alde de serie, frigorífico de 177 l, garaje de 1,20 m de alto y app MACH 2.0 según adria-mobil.com. Quedan sin dato: precio oficial en España, carga útil base, consumo y emisiones, no publicados por el fabricante.",
    curiosidades:
      "El Supersonic acumula 6 premios internacionales: 1.º en el Golden Motorhome 2023 y 2024 de AUTO BILD Reisemobil, Red Dot Design Award 2023, German Design Award 2023 (Winner) y Motorhome of the Year 2023 y 2024 de promobil en la categoría de integrales de más de 95.000 €. Fuente: noticia oficial de Adria Mobil (https://www.adria-mobil.com/news/winners-podium-for-supersonic-at-the-golden-motorhome-2024).",
    descripcion: `El Adria Supersonic 780 SL es la respuesta eslovena a una pregunta que casi nadie se atrevía a hacer en voz alta: ¿puede una autocaravana integral ganar los mismos premios de diseño que un yate o un coche de lujo? La respuesta, con el Red Dot Design Award 2023, el German Design Award 2023 y dos Golden Motorhome consecutivos de AUTO BILD en la vitrina, es que sí. El 780 SL es la puerta de entrada a esa gama insignia: el integral «corto» de 7,80 metros sobre Mercedes-Benz Sprinter, con la trasera inclinada, la carrocería de aluminio plateado y los pilotos full LED que lo hacen inconfundible en cualquier área de servicio.

    Las siglas SL describen el dormitorio: camas individuales (single beds) longitudinales en la parte trasera, de 198 x 81 cm cada una, unibles en una gran cama doble con el suplemento central. Es el plano clásico de parejas que duermen mejor cada uno en su cama pero quieren la opción de juntarlas. Detrás del dormitorio no hay pared ciega sino un baño de inspiración spa: ducha separada con torre de calefacción Alde, lavabo con espejo iluminado y ventana para ventilar, todo cerrado con puertas que permiten combinar aseo y ducha en un solo espacio. Delante, el salón abierto con la mesa extensible y giratoria de nuevo diseño, la cocina en L con encimera de aspecto mineral, fregadero de acero y un frigorífico por compresor de 177 litros —de los grandes de verdad—, y sobre la cabina, la cama basculante eléctrica de 190 x 150 cm con el bajo esculpido que desaparece en el techo cuando se recoge.

    Construir un 4,5 toneladas que se sienta ligero exige ingeniería seria: Adria usa su construcción Comprex —techo y trasera de fibra de vidrio, paredes de aluminio, aislamiento de poliuretano— sobre chasis AL-KO con doble suelo técnico, y el resultado es una carrocería rígida, bien aislada y pensada para todo el año, con la calefacción por agua caliente Alde de serie eliminando los puntos fríos. El garaje de doble puerta, con 1,20 m de alto y 1,13 m de ancho, traga bicicletas eléctricas sin desmontar nada, y la caja central de servicios concentra todos los registros en un solo punto accesible.

    Mecánicamente, el 780 SL monta el Mercedes Sprinter 2.0 CDI de 150 CV con el cambio automático 9G-Tronic y todo el arsenal de asistentes de la estrella: control de crucero adaptativo, mantenimiento de carril, reconocimiento de señales y la pantalla MBUX de 10,25 pulgadas. Con 4.500 kg de MMA, el carnet C1 es obligatorio, pero a cambio la carga útil da para viajar a cuatro con todo. La app MACH 2.0 permite controlar calefacción, agua caliente, nevera, iluminación y nivel de la batería desde el móvil, y el aire acondicionado Truma Aventa viene de serie para los veranos del sur.

    En carretera, las pruebas de la prensa británica destacan lo fácil que resulta pilotar un 4,5 toneladas con la estrella al frente: asientos Aguti de cuero perforado con calefacción, volante de cuero, retrovisores dobles tipo autobús y una postura de conducción alta con el salpicadero cayendo hacia el parabrisas para una visibilidad excelente. El Sprinter aporta además freno de estacionamiento eléctrico, arranque en pendiente, sensor de lluvia y parabrisas calefactado, y la única puerta de cabina —en el lado del acompañante, como manda la tradición de los integrales continentales— no empaña un puesto de conducción que los probadores describen como lo más parecido a una berlina grande que existe en este segmento.

    De cara a la temporada 2027, Adria ha anunciado mejoras para toda la gama Supersonic sin subir los precios: butacas de cabina Aguti mejoradas, sistema de agua renovado con racores premium, climatizador Truma Aventa de nueva generación de serie, ventanas Squinzi enrasadas e integración digital MACH 2.0 también de serie, además de una versión sobre chasis Fiat Ducato con el 2.2 de 180 CV y cambio de 9 velocidades para quien prefiera la base italiana. La gama completa 2027 ofrece cinco distribuciones de cuatro plazas entre 7,8 y 8,9 metros y 4,5 a 5,5 toneladas, con precios en el Reino Unido entre 165.499 y 181.499 £.

    En precio, Adria no publica tarifa para España —cada mercado tiene la suya—, así que no hay cifra oficial: la lista eslovena de 2026 fija el 780 SL en 160.795 € con IVA, en Alemania se anuncia desde unos 153.890 € y en el Reino Unido partía de 156.690 £. En España, la red de distribuidores Adria configura cada unidad a medida. Cómo lo verificamos: medidas, masas, motor, camas, baño, calefacción y equipamiento proceden de la web oficial adria-mobil.com, de la lista oficial de precios Adria 2026 (Eslovenia) y de las fichas del modelo en alpacacamping.de, camprest.com y outandaboutlive.co.uk; los premios, de la noticia oficial de Adria Mobil. Todo verificado el 19/10/2026. Quedan sin dato el precio español, la carga útil base, el consumo y las emisiones, no publicados por el fabricante.

    Para quién es: el Supersonic 780 SL encaja con parejas viajeras de presupuesto alto, con carnet C1, que hacen largas estancias y quieren el integral con más pedigrí de diseño del mercado —baño spa, camas gemelas, doble suelo— sin llegar a los 8,9 metros de los 890. No es para quien tenga solo el carnet B, para quien busque algo discreto o barato, ni para familias de cinco o seis: aquí se pagan 150.000 € largos por diseño, y se notan en cada detalle.`,
    pros: [
      "Diseño premiado: Red Dot, German Design Award y dos Golden Motorhome",
      "Camas gemelas de 198 x 81 cm unibles en doble + cama basculante eléctrica",
      "Baño spa con ducha separada y calefacción Alde de serie",
      "Carrocería Comprex con doble suelo técnico y gran aislamiento",
      "Mercedes Sprinter 150 CV automático con MBUX y app MACH 2.0",
    ],
    contras: [
      "Exige carnet C1: 4.500 kg de MMA",
      "Precio de lista por encima de los 150.000 € sin contar extras",
      "Adria no publica tarifa para España: precio a negociar con el distribuidor",
      "7,80 m de largo: hay que planificar dónde se pernocta",
      "Solo 4 plazas de viaje y 4 camas: sin opción familiar numerosa",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/adria-supersonic-780-sl-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Adria Supersonic 780 SL, vista exterior trasera",
        ancho: 1920,
        alto: 1280,
      },
      {
        src: "/media/adria-supersonic-780-sl-2026-precio-ficha-tecnica-interior1.webp",
        alt: "Adria Supersonic 780 SL, salón y cocina",
        ancho: 1920,
        alto: 1280,
      },
      {
        src: "/media/adria-supersonic-780-sl-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Adria Supersonic 780 SL, comedor",
        ancho: 1920,
        alto: 1280,
      },
      {
        src: "/media/adria-supersonic-780-sl-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Adria Supersonic 780 SL, vista frontal nocturna",
        ancho: 1920,
        alto: 1280,
      },
    ],
    analisisSlug: "adria-supersonic-780-sl-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Base Mercedes-Benz Sprinter: revisión cada 2 años o 40.000 km (según plan del fabricante de la base)",
      revisiones: [
        {
          nombre: "Revisión base (Mercedes-Benz)",
          queSeCambia: "Aceite + filtros + inspección general",
          costeAproxEur: 450,
        },
        {
          nombre: "Revisión célula Adria (anual recomendada)",
          queSeCambia: "Estanqueidad, gas, electricidad, humedades, Alde",
          costeAproxEur: 300,
        },
      ],
    },
  },
];
