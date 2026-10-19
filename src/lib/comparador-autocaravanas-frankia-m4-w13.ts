// Autocaravanas Frankia — lote Merlín 4 (19/10/2026).
// Fuentes: folleto oficial Frankia Titan (copia en readkong.com),
//   exposés de caraworld.de y alpacacamping.de (Titan I 840 GD),
//   catálogo oficial Frankia Platin 2022 (camperonline.it),
//   listados de Reisemobile Dülmen en truckscout24 (Platin I 8400 QD).
// Verificado el 19/10/2026.
// Notas honestas: el «Frankia I 8400 GD» sin apellido Titan es denominación
//   antigua (2007/2017); el integral de 8,4 m actual es el Titan I 840 GD →
//   sustituido y anotado. precioDesde=null en ambos (Frankia no publica tarifa
//   oficial ES). Ambos exigen carnet C1 (MMA 5.000/5.500 kg).
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_FRANKIA_M4: Autocaravana[] = [
  {
    id: "frankia-titan-i-840-gd-2026-precio-ficha-tecnica",
    marca: "Frankia",
    modelo: "Titan I 840 GD",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: null, // Frankia no publica PVP oficial en España
    potenciaCv: 180, // Fiat Ducato 2.2 Multijet 180 CV, cambio manual de 6 v.
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
    imagen: "/media/frankia-titan-i-840-gd-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/frankia-titan-i-840-gd-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/frankia-titan-i-840-gd-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 8460, // Exposés caraworld.de / alpacacamping.de
    anchoMm: 2300, // Folleto oficial Frankia Titan
    altoMm: 3180, // Exposés caraworld.de / alpacacamping.de
    pesoKg: null,
    mmaKg: 5000, // Folleto Titan: 5,0 t (5,5 t opcional)
    carnetNecesario: "C1", // mmaKg entre 3500 y 7500
    cargaUtilKg: null, // La marca no publica la carga útil
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4/5 según configuración
    plazasDormir: 4, // Camas gemelas + cama basculante opcional (2/4/5 en folleto)
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: [],
    notas:
      "El modelo asignado («Frankia I 8400 GD») corresponde a una denominación " +
      "antigua de la marca (unidades 2007/2017); el integral de 8,4 m con camas " +
      "gemelas que Frankia comercializa actualmente es el Titan I 840 GD, verificado " +
      "en el folleto oficial Frankia Titan (https://www.readkong.com/page/experience-the-frankia-titan-6316875). " +
      "Dimensiones 8,46×2,30×3,18 m, MMA 5,0 t (5,5 t opcional), motor Fiat Ducato " +
      "180 CV manual de 6 velocidades, 4/6 plazas de noche y 4/5 plazas homologadas, " +
      "depósito diésel 90 L, agua limpia 150 L / residuales 130 L: exposés de " +
      "caraworld.de y alpacacamping.de de unidades del modelo. precioDesde=null: " +
      "Frankia no publica tarifa oficial en España. carnetNecesario=C1 por la MMA " +
      "de 5.000 kg. cargaUtilKg=null: no publicada por la marca. Fotos: 4 oficiales " +
      "del folleto Frankia Titan 2023.",
    curiosidades:
      "Frankia es una empresa del grupo Pilote, el gigante francés de las " +
      "autocaravanas: así lo indica el pie del folleto oficial del Titan. Fuente: " +
      "folleto «Experience the Frankia Titan» " +
      "(https://www.readkong.com/page/experience-the-frankia-titan-6316875).",
    descripcion: `El Frankia Titan I 840 GD es un integral alemán de 8,46 metros que
      representa la puerta de entrada al mundo de los grandes integrales de la marca
      de Marktschorgast: camas gemelas traseras, salón en herradura, cocina MaxiFlex
      y un baño de generosas dimensiones, todo sobre chasis Fiat Ducato con una MMA
      de 5 toneladas que exige el carnet C1. La gama Titan es la apuesta de Frankia
      por el segmento de los integrales de gran volumen a un precio más accesible
      que su buque insignia Platin, sin renunciar al doble suelo calefactado ni a
      la construcción Thermo Guard que caracteriza a la casa.

      En cifras, el I 840 GD declara 8.460 mm de largo, 2.300 mm de ancho y 3.180 mm
      de alto, con una masa máxima autorizada de 5.000 kg de serie y 5.500 kg en
      opción. El motor es el Fiat Ducato 2.2 Multijet de 180 CV con cambio manual de
      seis velocidades, una combinación que mueve con solvencia las cinco toneladas
      y que mantiene el mantenimiento en niveles razonables gracias a la ubicuidad
      del Ducato en Europa. El depósito de diésel es de 90 litros y los de agua, de
      150 litros de limpia y 130 de residuales, cifras pensadas para viajar en
      autonomía varios días. Las plazas homologadas son cuatro o cinco según
      configuración, y las de noche van de dos a seis: las gemelas traseras de serie,
      más la cama basculante opcional sobre el salón.

      La implantación GD (camas gemelas) es la favorita de las parejas que duermen
      mejor cada uno en su cama y de quienes usan el hueco central entre ambas como
      vestidor o zona de paso. Las camas gemelas del Titan, con colchones de
      varias zonas de serie en la gama, se unen en una gran superficie doble mediante
      la extensión opcional. Delante, el salón en herradura con mesa extensible acoge
      cómodamente a cinco comensales, y la cocina MaxiFlex —el sistema modular de
      Frankia— ofrece una encimera ampliable de HPL de alta gama, un bloque de
      cocción completo y la torre TecTower con frigorífico accesible por ambos lados.
      El baño, con ducha separada de generosas dimensiones, y el doble suelo
      calefactado con 126/348 mm de altura útil completan un interior donde se nota
      la mano de una marca que lleva más de 60 años construyendo en la misma fábrica.

      En equipamiento, el Titan incluye de serie el toldo Thule de 5,5 m, televisor
      de 24 pulgadas, claraboya con ventilador, peldaño eléctrico, preinstalación de
      cámara trasera y el sistema de calefacción por aire caliente, con la calefacción
      hidrónica Alde disponible en opción para quien viaje en invierno. La
      carrocería combina paredes Thermo Guard Plus con revestimiento de gelcoat
      resistente al granizo y una garantía de estanqueidad de once años, un argumento
      de peso en vehículos de este precio.

      Cómo lo verificamos: la existencia del modelo y sus características generales
      se verificaron en el folleto oficial Frankia Titan, consultado el 19/10/2026 a
      través de su copia en readkong.com; las dimensiones exactas, la MMA, el motor
      de 180 CV, las plazas y las capacidades de agua proceden de exposés de
      caraworld.de y alpacacamping.de de unidades del I 840 GD. La denominación
      «I 8400 GD» sin apellido corresponde a generaciones antiguas de la marca, por
      lo que se sustituyó por el Titan I 840 GD actual, como consta en el manifest.
      El precio queda en null porque Frankia no publica tarifa oficial en España.

      Para quién es: el Titan I 840 GD encaja con parejas o familias que quieren un
      integral grande con camas gemelas, doble suelo y 5 toneladas de MMA sin subir
      al precio del Platin, y que disponen del carnet C1. Es una compra para
      viajeros de larga estancia que valoran la autonomía y el espacio interior.
      No es para quien solo tenga el carnet B —aquí es imprescindible el C1—,
      ni para quien busque agilidad: 8,46 m y 3,18 m de alto exigen planificar
      rutas, parkings y áreas con antelación.`,
    pros: [
      "Camas gemelas traseras con opción de unirlas en gran cama doble",
      "Doble suelo calefactado y construcción Thermo Guard con 11 años de garantía de estanqueidad",
      "Cocina MaxiFlex modular con encimera ampliable y TecTower de doble acceso",
      "MMA de 5.000 kg (5.500 en opción): margen de carga generoso para viajes largos",
      "Motor Fiat Ducato 180 CV con red de servicio en toda Europa",
    ],
    contras: [
      "Carnet C1 obligatorio: no vale el B",
      "Precio sin publicar en España: presupuesto a medida por concesionario",
      "8,46 m de largo y 3,18 m de alto: exige planificar rutas y áreas",
      "Cama basculante opcional: las 4-6 plazas de noche dependen de opciones",
      "Consumo y mantenimiento de un 5 toneladas: peajes y combustible de categoría superior",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/frankia-titan-i-840-gd-2026-precio-ficha-tecnica-oficial.webp", alt: "Frankia Titan I 840 GD, vista exterior frontal", ancho: 870, alto: 1174 },
      { src: "/media/frankia-titan-i-840-gd-2026-precio-ficha-tecnica-interior1.webp", alt: "Frankia Titan I 840 GD, salón", ancho: 830, alto: 1145 },
      { src: "/media/frankia-titan-i-840-gd-2026-precio-ficha-tecnica-interior2.webp", alt: "Frankia Titan I 840 GD, dormitorio", ancho: 831, alto: 1145 },
      { src: "/media/frankia-titan-i-840-gd-2026-precio-ficha-tecnica-detalle.webp", alt: "Frankia Titan I 840 GD, ducha", ancho: 830, alto: 1145 },
    ],
    analisisSlug: "frankia-titan-i-840-gd-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato 2.2)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 400 },
        { nombre: "Revisión célula Frankia (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades, doble suelo", costeAproxEur: 300 },
      ],
    },
  },
  {
    id: "frankia-platin-i-8400-qd-2026-precio-ficha-tecnica",
    marca: "Frankia",
    modelo: "Platin I 8400 QD",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: null, // Frankia no publica PVP oficial en España
    potenciaCv: 190, // Mercedes-Benz Sprinter 190 CV, automático
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
    imagen: "/media/frankia-platin-i-8400-qd-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/frankia-platin-i-8400-qd-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/frankia-platin-i-8400-qd-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 8620, // Listados Reisemobile Dülmen / catálogo Platin 2022
    anchoMm: 2300, // Catálogo oficial Frankia Platin 2022
    altoMm: 3230, // Listados Reisemobile Dülmen / catálogo Platin 2022
    pesoKg: null,
    mmaKg: 5500, // 5.500 kg
    carnetNecesario: "C1", // mmaKg entre 3500 y 7500
    cargaUtilKg: null, // La marca no publica la carga útil
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4, // Cama queen trasera + cama basculante eléctrica
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: [],
    notas:
      "Dimensiones 8.620×2.300×3.230 mm, MMA 5.500 kg, motor Mercedes-Benz Sprinter " +
      "190 CV con cambio automático, 4 plazas homologadas y 4 de noche (cama queen " +
      "trasera + cama basculante eléctrica), calefacción hidrónica Alde, depósito de " +
      "agua limpia de 270 L y 130 L de residuales: catálogo oficial Frankia Platin " +
      "2022 (https://www.camperonline.it/magazine/cataloghi/2022-Frankia-Platin.pdf) " +
      "y listados de unidades nuevas 2026 de Reisemobile Dülmen en truckscout24 " +
      "(exposé de caraworld.de: masa en orden de marcha 4.753 kg, 747 kg de carga). " +
      "precioDesde=null: Frankia no publica tarifa oficial en España. " +
      "carnetNecesario=C1 por la MMA de 5.500 kg. cargaUtilKg=null: no publicada " +
      "por la marca. Fotos: 4 oficiales del catálogo Frankia Platin 2022, incluidas " +
      "dos de la sección dedicada al I 8400 QD.",
    curiosidades:
      "Para el año modelo 2024, el Platin —el buque insignia de Frankia sobre " +
      "Mercedes Sprinter de tracción trasera— estrenó un logotipo propio que " +
      "fusiona todas las letras de su nombre en una firma distintiva, y la gama " +
      "partía de 196.400 € en el I 7000 DG. Fuente: freenet.de, «Frankia Platin " +
      "und Platin Pure (2024)» " +
      "(https://mail.freenet.de/auto/wohnmobile/frankia-platin-und-platin-pure-2024-technisch-top-ausgestatteter-integrierter-40462426.html).",
    descripcion: `El Frankia Platin I 8400 QD es el buque insignia de la marca alemana:
      un integral de 8,62 metros sobre Mercedes-Benz Sprinter de tracción trasera,
      con 190 CV, cambio automático y una MMA de 5.500 kg que lo sitúa en la liga de
      los grandes tourers europeos. La implantación QD combina una cama queen
      trasera con un baño completo delante de ella y una cama basculante eléctrica
      sobre el salón, de modo que cuatro personas duermen en camas fijas sin montar
      nada. Es el Frankia más lujoso y equipado de la gama, y se nota en cada
      detalle: del doble suelo calefactado de altura continua a la calefacción
      hidrónica Alde de serie.

      Las cifras impresionan: 8.620 mm de largo, 2.300 mm de ancho y 3.230 mm de
      alto, con 5.500 kg de masa máxima autorizada —carnet C1 obligatorio— y una
      masa en orden de marcha de 4.753 kg según el exposé de una unidad 2026,
      lo que deja unos 747 kg de carga útil para equipaje, agua y pasajeros. El
      motor es el Mercedes Sprinter 2.0 de 190 CV con cambio automático de 9
      velocidades y tracción trasera, la configuración que los caravanistas
      experimentados prefieren para remolcar y para la estabilidad en autopista.
      El depósito de diésel es de 93 litros y el de agua limpia, de 270 litros
      (limitado a 50 en marcha por normativa), con 130 litros de residuales:
      autonomía para varios días sin depender de áreas.

      El interior del QD está pensado para vivir, no solo para dormir. La cama
      queen trasera, con colchones de varias zonas, se acompaña de un baño
      transversal completo con ducha separada, WC de cerámica y doble cassette
      Thetford de serie. El salón delantero, con banquetas enfrentadas y mesa
      extensible, integra el televisor y el sistema multimedia MBUX de Mercedes con
      pantalla de 10,25 pulgadas, cámara trasera y sonido envolvente Alpine. La
      cocina MaxiFlex con encimera ampliable, el frigorífico de gran capacidad y el
      horno Thetford con grill completan una dotación de apartamento. De serie,
      además, el Platin incluye el paquete de autonomía: batería LiFePO4 de 300 Ah,
      cuatro paneles solares de 115 W con visualización remota, inversor de 1.700 W
      y booster de carga de 90 A, más climatización de techo Truma Aventa para el
      habitáculo. Con 2,03 m de altura interior continua y el suelo radiante del
      doble suelo, el invierno deja de ser un límite.

      El precio es la gran incógnita oficial: Frankia no publica tarifa en España y
      cada unidad se presupuesta según una lista de opciones casi infinita
      (suspensión neumática integral, toldo eléctrico de 5,5 m, faros LED de
      Mercedes, asientos Deluxe...). Como referencia del mercado, la prensa alemana
      situaba la gama Platin 2024 desde 196.400 € en el I 7000 DG, y en los
      portales de ocasión una unidad de exposición del Platin I 8400 GD con 2.447 km
      declaraba un precio de compra original de 224.500 € en noviembre de 2025.
      Son cifras de otro planeta respecto a una perfilada media, pero también lo es
      el producto.

      Cómo lo verificamos: las dimensiones, la MMA, el motor, las plazas y el
      equipamiento de serie proceden del catálogo oficial Frankia Platin 2022 y de
      los listados de unidades nuevas 2026 de Reisemobile Dülmen en truckscout24,
      consultados el 19/10/2026; la masa en orden de marcha (4.753 kg) figura en el
      exposé de caraworld.de. La curiosidad sobre el logotipo propio de 2024 y el
      precio de partida procede del artículo de freenet.de. El precio queda en null
      porque Frankia no publica tarifa oficial en España.

      Para quién es: el Platin I 8400 QD encaja con viajeros de alto poder
      adquisitivo que hacen largas estancias o viven a bordo parte del año, que
      valoran la tracción trasera de Mercedes, la calefacción Alde y la autonomía
      eléctrica total, y que disponen del carnet C1. No es para quien busque una
      primera autocaravana —ni por precio ni por tamaño—, ni para quien solo tenga
      el carnet B, ni para rutas con limitaciones de 3,5 toneladas, que en Europa
      son cada vez más frecuentes.`,
    pros: [
      "Mercedes Sprinter 190 CV automático con tracción trasera: el referente del segmento",
      "Cama queen trasera + cama basculante eléctrica: cuatro plazas fijas sin montar nada",
      "Calefacción hidrónica Alde y doble suelo calefactado: confort invernal total",
      "Paquete de autonomía de serie: litio 300 Ah, 4 paneles solares e inversor 1.700 W",
      "270 litros de agua limpia y 2,03 m de altura interior: autonomía y habitabilidad máximas",
    ],
    contras: [
      "Precio sin publicar y en la órbita de los 200.000 €: solo para presupuestos altos",
      "Carnet C1 obligatorio y 5.500 kg: peajes, restricciones y consumo acordes",
      "8,62 m de largo: imposible aparcar fuera de áreas y campings adaptados",
      "La lista de opciones encarece rápidamente una factura ya elevada",
      "Mantenimiento de lujo: Alde, neumática y electrónica exigen servicio especializado",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/frankia-platin-i-8400-qd-2026-precio-ficha-tecnica-oficial.webp", alt: "Frankia Platin I 8400 QD, vista exterior", ancho: 830, alto: 1145 },
      { src: "/media/frankia-platin-i-8400-qd-2026-precio-ficha-tecnica-interior1.webp", alt: "Frankia Platin I 8400 QD, salón con TV", ancho: 840, alto: 1153 },
      { src: "/media/frankia-platin-i-8400-qd-2026-precio-ficha-tecnica-interior2.webp", alt: "Frankia Platin I 8400 QD, salón y cama queen", ancho: 840, alto: 1153 },
      { src: "/media/frankia-platin-i-8400-qd-2026-precio-ficha-tecnica-detalle.webp", alt: "Frankia Platin I 8400 QD, ducha", ancho: 830, alto: 1145 },
    ],
    analisisSlug: "frankia-platin-i-8400-qd-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Mercedes Sprinter: revisión anual o cada 30.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Mercedes Sprinter)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 500 },
        { nombre: "Revisión célula Frankia (anual recomendada)", queSeCambia: "Estanqueidad, gas, Alde, electricidad, humedades", costeAproxEur: 350 },
      ],
    },
  },
];
