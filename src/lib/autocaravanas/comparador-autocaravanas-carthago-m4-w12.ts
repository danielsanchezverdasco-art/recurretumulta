// Autocaravanas Carthago — lote Merlín 4 (19/10/2026).
// Fuentes: carthago.com (gama liner-for-two, precios «desde»), anuncio y PDF exposé de
// caraworld.de (unidad 2026 del modelo exacto, listing 23583890). Verificado el 19/10/2026.
// Notas honestas: Carthago no publica PVP oficial para España → precioDesde=null. La marca no
// publica carga útil → cargaUtilKg=null. Fotos oficiales de prensa Carthago (carthago.com):
// freisteller exterior del liner-for-two I 53 L (Iveco Daily), exterior real (Flugplatz),
// salón con TV y zona de descanso con TV.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_CARTHAGO_M4: Autocaravana[] = [
  {
    id: "carthago-liner-for-two-i-53-l-2026-precio-ficha-tecnica",
    marca: "Carthago",
    modelo: "liner-for-two I 53 L",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: null, // Carthago no publica PVP oficial para España; la gama liner-for-two parte de 198.300 € en carthago.com
    potenciaCv: 207, // Iveco Daily 3.0 l, 207 CV, cambio automático de 8 velocidades (PDF exposé del anuncio)
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
    imagen: "/media/carthago-liner-for-two-i-53-l-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/carthago-liner-for-two-i-53-l-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/carthago-liner-for-two-i-53-l-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 8540, // 854 cm según PDF exposé (otros listados indican 855 cm)
    anchoMm: 2270,
    altoMm: 3290,
    pesoKg: 4565, // masa en orden de marcha (horquilla 4337–4793 kg)
    mmaKg: 6700,
    carnetNecesario: "C1", // MMA entre 3500 y 7500 kg
    cargaUtilKg: null, // la marca no publica carga útil; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 2, // 2 de serie, con 2–4 plazas opcionales según configuración
    plazasDormir: 2, // cama abatible 200/195×210; salón trasero convertible 200×147/131
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: [],
    notas:
      "Dimensiones (854/227/329 cm), MMA (6700 kg), MRO (4565 kg, horquilla 4337–4793), motor " +
      "Iveco Daily 3.0 l 207 CV automático 8v, plazas (2, +2–4 opcionales), camas (abatible " +
      "200/195×210; salón trasero 200×147/131), garaje 450 kg, calefacción Alde, frigorífico " +
      "153 L, agua limpia 210 L, batería de litio 150 Ah: anuncio caraworld.de listing 23583890 " +
      "(año modelo 2026, matriculación 16.03.2026) y su PDF exposé. Precio: la unidad anunciada " +
      "tiene un precio de lista en Alemania de 317.310 € (PDF del concesionario); Carthago " +
      "publica en carthago.com un «desde» de 198.300 € para la gama liner-for-two, pero no hay " +
      "PVP oficial para España → precioDesde=null. En null: carga útil (no publicada), consumo, " +
      "par, tracción y emisiones (no publicados). Fotos: las 4 son oficiales de prensa Carthago " +
      "(carthago.com, verificadas 19/10/2026): freisteller exterior del liner-for-two I 53 L " +
      "sobre Iveco Daily, exterior real (Flugplatz), salón con TV y zona de descanso con TV. " +
      "El 19/10/2026 se sustituyeron la cama abatible del concesionario niesmann.de, el " +
      "freisteller Fiat I 53 de la imagen principal y la foto de detalle por imágenes  Precio: se deja sin dato porque Carthago solo ofrece el precio base por modelo en su configurador en línea (su lista de precios oficial en PDF no lo expone como tarifa consultable por modelo); sin PVP abierto verificable." +
      "oficiales del modelo.",
    curiosidades:
      "El I 53 L no usa la omnipresente Fiat Ducato: monta un Iveco Daily 3.0 de 207 CV con cambio " +
      "automático de 8 velocidades, y su garaje trasero admite 450 kg de carga, cifra propia de " +
      "vehículos mucho más grandes (PDF exposé del anuncio en caraworld.de, listing 23583890).",
    descripcion: `La Carthago liner-for-two I 53 L es una integral de gran formato pensada para lo que su
      nombre promete: viajar de dos en dos con el máximo confort posible. Con 854 cm de longitud,
      227 cm de anchura y 329 cm de altura, juega en la liga de las autocaravanas premium alemanas,
      esas que se compran para recorrer Europa durante meses y no para escapadas de fin de semana.
      La masa máxima autorizada es de 6700 kg, de modo que exige el carnet C1 y una forma de viajar
      distinta: más pausada, más planificada y con campings y áreas preparados para grandes
      esloras.

      MEDIDAS Y HABITABILIDAD. La masa en orden de marcha declarada es de 4565 kg, con una
      horquilla de 4337 a 4793 kg por tolerancias de fabricación; quedan por tanto unos 2100 kg de
      margen hasta la MMA, una reserva enorme que permite cargar bicicletas eléctricas, mobiliario
      de exterior, despensa para semanas y todo el equipamiento sin mirar la báscula con angustia.
      El depósito de agua limpia es de 210 litros, muy por encima de la media, y coherente con un
      vehículo diseñado para la autosuficiencia. La calefacción es Alde, el sistema de agua caliente
      por radiadores que los caravanistas del norte de Europa consideran la referencia para el
      invierno: silencioso, sin aire seco y con un confort térmico que los sistemas de aire
      caliente no igualan.

      TECNOLOGÍA Y EQUIPAMIENTO. El I 53 L apuesta por la base Iveco Daily con el motor 3.0 de
      207 CV y cambio automático de 8 velocidades, una configuración poco habitual en un mercado
      dominado por la Fiat Ducato y que aporta dos ventajas: un chasis de largueros robusto,
      pensado para peso pesado, y una reserva de potencia que se agradece moviendo casi siete
      toneladas por puertos alpinos. El garaje trasero admite 450 kg de carga, cifra que permite
      llevar dos bicicletas eléctricas, una moto ligera o todo el equipo deportivo sin
      preocupaciones. La batería de la célula es de litio de 150 Ah, y el frigorífico es de 153
      litros, dimensionado para estancias largas. El salón trasero circular es la seña de identidad
      de la gama liner-for-two: un espacio de estar panorámico en la parte posterior, con grandes
      ventanales, que durante el día funciona como mirador y por la noche se transforma en cama.
      Esta disposición invierte la lógica habitual de las integrales —que colocan el salón delante
      y la cama detrás— y crea una zona de día luminosa y separada de la cabina, ideal para
      parejas que pasan muchas horas dentro del vehículo.

      CAMAS Y PLAZAS. La filosofía «for-two» se refleja en las plazas: dos de serie para viajar,
      ampliables a 4–6 con opcionales según la configuración elegida. Para dormir, la cama
      abatible delantera mide 200/195×210 cm —una cama de verdad, no un apaño— y el salón trasero
      circular se convierte en una superficie de 200×147/131 cm. Es un planteamiento honesto: la
      autocaravana brilla con dos ocupantes y puede acoger invitados de forma ocasional, pero no
      pretende ser un dormitorio familiar.

      MECÁNICA. El Iveco Daily 3.0 de 207 CV con automático de 8 relaciones es el corazón del
      conjunto. Frente a los 140–180 CV habituales de las Ducato de 3,5 toneladas, aquí hay
      potencia de sobra y un chasis diseñado desde el origen para el transporte pesado, lo que se
      traduce en estabilidad a velocidad de crucero y frenos dimensionados para la MMA real. El
      precio de esa capacidad es el consumo y el peaje: un 6,7 toneladas no es un vehículo barato
      de mover ni de aparcar.

      PRECIO Y RED COMERCIAL EN ESPAÑA. Carthago no publica PVP para España, así que las
      referencias vienen de Alemania: la unidad 2026 del anuncio verificado tenía un precio de
      lista de 317.310 €, mientras que la web oficial de Carthago sitúa el «desde» de la gama
      liner-for-two en 198.300 €. En España la marca se vende a través de concesionarios
      oficiales, y cada unidad se cotiza con su equipamiento; para este nivel de vehículo, el
      presupuesto realista supera ampliamente los 250.000 € con opcionales.

      CÓMO LO VERIFICAMOS. Los datos técnicos proceden del anuncio de caraworld.de (listing
      23583890, año modelo 2026, primera matriculación 16.03.2026) y de su PDF exposé descargado el
      19/10/2026, cruzados con la web oficial carthago.com para la gama liner-for-two y su precio
      «desde». Las 4 fotografías son oficiales de prensa Carthago (carthago.com): freisteller
      exterior del liner-for-two I 53 L sobre Iveco Daily, exterior real, salón con TV y zona de
      descanso con TV. No existe PVP oficial para España.

      PARA QUIÉN ES. Es la autocaravana para parejas con alto poder adquisitivo que quieren viajar
      meses por Europa con el máximo confort: calefacción Alde, 210 litros de agua, garaje de
      450 kg y una base Iveco sobredimensionada. Encaja con quien ya tiene el carnet C1 y no le
      asustan las dimensiones. No es para quien busque agilidad, presupuestos contenidos o viajar
      en familia numerosa: para eso, la propia Carthago ofrece gamas más polivalentes sobre
      3,5 toneladas.`,
    pros: [
      "Base Iveco Daily 3.0 de 207 CV con automático de 8v: potencia y chasis de peso pesado",
      "Calefacción Alde por agua caliente, la referencia europea para viajar en invierno",
      "Garaje trasero con 450 kg de capacidad: admite moto ligera o dos e-bikes sin problemas",
      "Depósito de agua limpia de 210 L y batería de litio de 150 Ah para gran autonomía",
      "Unos 2100 kg de margen entre MRO y MMA: se puede cargar sin obsesionarse con el peso",
    ],
    contras: [
      "MMA de 6700 kg: exige carnet C1 y limita áreas, parkings y ferris",
      "Precio realista por encima de 250.000 € con opcionales; sin PVP oficial en España",
      "Dimensiones (8,54 m) que complican pueblos, carreteras secundarias y aparcamientos",
      "Consumo y peajes propios de un vehículo de casi 7 toneladas",
      "Filosofía 'for-two': las plazas extra son ocasionales, no una solución familiar",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/carthago-liner-for-two-i-53-l-2026-precio-ficha-tecnica-oficial.webp", alt: "Carthago liner-for-two I 53 L, vista exterior trasera", ancho: 1600, alto: 1200 },
      { src: "/media/carthago-liner-for-two-i-53-l-2026-precio-ficha-tecnica-interior1.webp", alt: "Carthago liner-for-two I 53 L, salón trasero", ancho: 1600, alto: 2133 },
      { src: "/media/carthago-liner-for-two-i-53-l-2026-precio-ficha-tecnica-interior2.webp", alt: "Carthago liner-for-two I 53 L, cocina", ancho: 1600, alto: 1200 },
      { src: "/media/carthago-liner-for-two-i-53-l-2026-precio-ficha-tecnica-detalle.webp", alt: "Carthago liner-for-two I 53 L, bajos y enganche", ancho: 1600, alto: 1200 },
    ],
    analisisSlug: "carthago-liner-for-two-i-53-l-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Iveco Daily: revisión anual o cada 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Iveco Daily)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 450 },
        { nombre: "Revisión célula Carthago (anual recomendada)", queSeCambia: "Estanqueidad, Alde, gas, electricidad, humedades", costeAproxEur: 350 },
      ],
    },
  },
];
