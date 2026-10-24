// Autocaravanas Knaus — lote Merlín 3 (19/10/2026).
// Fuentes: ficha técnica oficial KNAUS (configuración SKY TI 700 MEG Platinum Selection,
// documento del configurador oficial Knaus), ficha de equipamiento oficial Knaus
// (knaus.com, «VAN TI 640 MEG VANSATION — Standard Equipment», verificada el 19/10/2026),
// resumen técnico de distribuidor (alpacacamping.de) y datos de versión IC-Line 2026
// publicados por distribuidor alemán. Verificado el 19/10/2026.
// Notas honestas: Knaus publica su Preisliste oficial (MJ2027-1, EUR IVA 19% incl.; sin tarifa
// para España): precioDesde = Grundpreis oficial (marcado en «aprox»). Se indica además como
// referencia secundaria el PVP que publica un distribuidor alemán para la versión IC-Line 2026. cargaUtilKg solo se informa en el
// Van TI 640 MEG Vansation porque la ficha oficial 2026 publica «Maximum payload»;
// en el Sky TI 700 MEG varía según configuración y queda sin dato. La tracción no se
// declara expresamente en las fichas consultadas (queda sin dato).
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_KNAUS_M3: Autocaravana[] = [
  {
    id: "knaus-sky-ti-700-meg-2026-precio-ficha-tecnica",
    marca: "Knaus",
    modelo: "Sky TI 700 MEG",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 85730, // Preisliste oficial Knaus MJ2026, EUR IVA 19% incl.
    potenciaCv: 140,
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
    imagen: "/media/knaus-sky-ti-700-meg-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/knaus-sky-ti-700-meg-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/knaus-sky-ti-700-meg-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7500, // ficha técnica oficial Knaus (configuración SKY TI 700 MEG)
    anchoMm: 2320,
    altoMm: 2790,
    pesoKg: 3030, // masa en orden de marcha, variante base homologada (ficha oficial Knaus)
    mmaKg: 3500, // 4.000 kg en la versión IC-Line 2026 con chasis Heavy Duty
    carnetNecesario: "B",
    cargaUtilKg: null, // no se publica de forma estable; varía por configuración y equipamiento
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4,
    parNm: null,
    traccion: null, // no declarada expresamente en la ficha oficial consultada
    emisionesCo2: null,
    aprox: ["precioDesde"],
    notas:
      "Datos de la ficha técnica oficial KNAUS (SKY TI 700 MEG Platinum Selection, documento del configurador oficial) y de la ficha de equipamiento de la versión IC-Line 2026 publicada por distribuidor alemán (motor Fiat Ducato 2.2 de 103 kW/140 CV, cambio automático de 8 velocidades, MMA de 4.000 kg con chasis Heavy Duty y PVP indicado de 109.610 € en Alemania). Quedan sin dato: precio oficial ES (la marca no publica tarifa para España), carga útil (depende de la configuración), tracción, consumo y emisiones (no figuran en la ficha consultada). Precio: Grundpreis ab Werk 2026 de la Preisliste oficial de Knaus, SKY TI 700 MEG (FIAT 3.500 kg, 140 CV), en EUR con IVA alemán del 19% incluido; no hay tarifa oficial para España.",
    curiosidades:
      "El año-modelo 2026 es el último Sky TI construido sobre Fiat Ducato: para 2027 Knaus trasladó toda la gama Sky TI al chasis Volkswagen Crafter con vía ancha y cambio automático de serie (fuente: https://donegalmotorhomes.com/news/knaus-at-the-motorhome-and-caravan-show-2026-nec-birmingham/).",
    descripcion: `La Knaus Sky TI 700 MEG es la perfilada grande de la gama Sky TI, el modelo que corona una familia pensada para quienes quieren una autocaravana de verdad sin dar el salto a la integral. Con sus 7,50 metros de longitud es la más larga de la serie —por encima de las 650 MEG y 650 MF—, y esa diferencia se nota sobre todo en el dormitorio trasero y en la amplitud del salón. Es una de esas autocaravanas que se entienden nada más abrir la puerta: distribución clásica de camas gemelas atrás, salón central en L, cocina en esquina y baño completo con ducha separada. Nada experimental, todo en su sitio, y una ejecución que en Knaus Tabbert llevan décadas afinando.

En medidas, el 700 MEG declara 750 cm de largo, 232 cm de ancho y 279 cm de alto exterior, con una altura interior de 200 cm que permite moverse de pie con holgura a casi cualquier viajero. La batalla de 403 cm contribuye a un comportamiento rutero estable, importante en un vehículo que en la versión IC-Line 2026 llega a los 4.000 kg de MMA con el chasis Heavy Duty de Fiat. La variante base homologada parte de 3.030 kg en orden de marcha con 3.500 kg de MMA, de modo que sigue siendo conducible con el carnet B en su configuración estándar, un punto clave para el público español que no quiere sacarse el C1. El ancho de 2,32 m es el habitual en perfiladas de este segmento: se nota en autopista, pero a cambio regala un interior auténticamente espacioso.

La habitabilidad es el argumento de compra. El dormitorio trasero monta dos camas individuales longitudinales (205x78 y 199x78 cm) con gran capacidad de almacenaje debajo, accesible desde el interior y desde las trampillas exteriores. El salón central, disponible en configuración estándar o en L, se transforma en una tercera superficie de descanso de 209x118 cm, de modo que la ficha homologa cuatro plazas para dormir sin necesidad de cama abatible sobre la cabina —algo que muchos viajeros agradecen porque deja la zona delantera despejada y luminosa. La cocina es de tres fuegos con tapa de cristal y fregadero de acero inoxidable encastrado, acompañada de un frigorífico de 142 litros, una capacidad correcta para dos personas en ruta larga. El baño, uno de los puntos fuertes del 700 MEG frente a sus hermanas pequeñas, es amplio, con ducha separada y espacio para moverse, además de WC de casete Thetford. Los muebles visten el decorado roble Nagano con suelo sándwich y revestimiento inferior de GFK, y los colchones son EvoPore HRC en las camas fijas, un detalle de confort que se agradece en viajes de varias semanas.

En tecnología y equipamiento, la ficha oficial detalla un conjunto serio: calefacción Truma Combi 6 con panel digital CP-Plus, batería de habitáculo de 80 Ah con cargador booster, sistema de recirculación de aire a 12 V, iluminación íntegramente LED con luz ambiental, puerta de habitáculo KNAUS PREMIUM con mosquitera, ventanas enmarcadas Seitz S7, peldaño de entrada eléctrico y depósito de aguas grises aislado y calefactado. La versión IC-Line 2026 añade el paquete estético completo —emblemas negros/cromados, paragolpes pintado, llantas de aleación de 16 pulgadas, volante y pomo en cuero técnico— además de claraboya panorámica 70x50 con iluminación y oscurecedores plisados para parabrisas y laterales. Es, en la práctica, un acabado «llave en mano» que evita pasar por la lista de opcionales.

En mecánica, la base es el Fiat Ducato 2.2 Multijet de 103 kW (140 CV), el motor que mueve a media Europa autocaravanista. De serie se ofrece con cambio manual de 6 velocidades; la versión IC-Line 2026 monta el automático de 8 velocidades con convertidor de par, una combinación cada vez más demandada por quienes hacen muchos kilómetros. El chasis Heavy Duty de 4.000 kg de la IC-Line está pensado para uso intensivo y deja un margen de carga generoso (el distribuidor declara 771 kg de carga útil en esa configuración concreta). La dirección, los frenos y las ayudas a la conducción son los del Ducato actual, una base probada con una red de servicio inmensa en toda Europa.

En precio y red comercial en España hay que ser honestos: Knaus publica su Preisliste oficial en Alemania (85.730 € para el Sky TI 700 MEG, IVA 19% incl.) pero no tarifa para España, de modo que el precio aplicado es el alemán («aprox»). Como referencia verificada, un distribuidor alemán anuncia la versión Sky TI 700 MEG IC-Line del año-modelo 2026 con un PVP de 109.610 € antes de descuentos. En España, la marca se comercializa a través de la red de distribuidores oficiales de Knaus Tabbert, donde cada unidad se cotiza según configuración y acabado; conviene pedir presupuesto con la ficha de equipamiento cerrada porque los opcionales (automático, paquetes de chasis, toldo, TV) mueven mucho la cifra final. Es un vehículo de gama media-alta dentro de las perfiladas: no es la más barata del segmento, pero el equipamiento de serie es completo y el valor de reventa de Knaus se mantiene bien.

Cómo lo verificamos: los datos dimensionales, de pesos, motor y equipamiento proceden de la ficha técnica oficial de KNAUS para el SKY TI 700 MEG (documento de configuración Platinum Selection del configurador oficial de la marca) y de la ficha de la versión IC-Line 2026 publicada por un distribuidor alemán, contrastados con el resumen técnico de la gama Sky TI. La información sobre el cambio de chasis a Volkswagen Crafter en 2027 procede de la crónica de la feria de Birmingham de octubre de 2026. Todo verificado el 19/10/2026. Lo que no publica la marca —carga útil exacta por configuración y consumos— queda sin dato y así se declara; el precio aplicado es el de su Preisliste oficial alemana.

Para quién es: encaja con parejas que viajan mucho y quieren una perfilada amplia con camas gemelas de verdad, baño grande y cuatro plazas de dormir sin litera sobre la cabina; también con quienes hacen escapadas largas y valoran el equipamiento de serie completo. No encaja con quien busca una autocaravana compacta para callejear por pueblos (7,5 m y 2,32 m piden espacio), ni con quien necesita 5-6 plazas homologadas, ni con conductores que quieran evitar el salto de peso a 4.000 kg de la versión IC-Line si no tienen claro el margen de carga.`,
    pros: [
      "La más espaciosa de la gama Sky TI: 7,50 m con camas gemelas traseras y baño grande con ducha separada",
      "Cuatro plazas de dormir sin cama abatible sobre la cabina: salón convertible de 209x118 cm",
      "Versión IC-Line 2026 con chasis Heavy Duty de 4.000 kg y cambio automático de 8 velocidades",
      "Equipamiento de serie muy completo: Truma Combi 6 con CP-Plus, LED ambiental, Seitz S7, puerta PREMIUM",
      "Colchones EvoPore HRC en camas fijas y muebles en roble Nagano con suelo sándwich GFK",
    ],
    contras: [
      "Knaus no publica tarifa oficial: el precio real solo se conoce pidiendo presupuesto a distribuidor",
      "Con 7,50 m de largo y 2,32 m de ancho no es ágil en pueblos, parkings ni carreteras estrechas",
      "La versión IC-Line de 4.000 kg exige vigilar la carga útil real según equipamiento",
      "El motor de 140 CV es correcto pero justo con la unidad a plena carga y remolque",
      "El acabado IC-Line dispara el precio frente a la versión base; los opcionales encarecen rápido",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/knaus-sky-ti-700-meg-2026-precio-ficha-tecnica-oficial.webp", alt: "Knaus Sky TI 700 MEG, vista exterior", ancho: 700, alto: 525 },
      { src: "/media/knaus-sky-ti-700-meg-2026-precio-ficha-tecnica-interior1.webp", alt: "Knaus Sky TI 700 MEG, dormitorio con camas gemelas", ancho: 575, alto: 431 },
      { src: "/media/knaus-sky-ti-700-meg-2026-precio-ficha-tecnica-interior2.webp", alt: "Knaus Sky TI 700 MEG, salón comedor", ancho: 1920, alto: 1366 },
      { src: "/media/knaus-sky-ti-700-meg-2026-precio-ficha-tecnica-detalle.webp", alt: "Knaus Sky TI 700 MEG, vista trasera exterior", ancho: 700, alto: 510 },
    ],
    analisisSlug: "knaus-sky-ti-700-meg-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 48.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Knaus (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
  {
    id: "knaus-van-ti-640-meg-vansation-2026-precio-ficha-tecnica",
    marca: "Knaus",
    modelo: "Van TI 640 MEG Vansation",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 85490, // Preisliste oficial Knaus MJ2027-1, EUR IVA 19% incl.
    potenciaCv: 140, // VW Crafter 2.0 TDI de 103 kW; existe variante de 120 kW/163 CV con cambio automático
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
    imagen: "/media/knaus-van-ti-640-meg-vansation-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/knaus-van-ti-640-meg-vansation-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/knaus-van-ti-640-meg-vansation-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6890, // ficha oficial Knaus «VAN TI 640 MEG VANSATION — Standard Equipment» 2026
    anchoMm: 2200,
    altoMm: 2710,
    pesoKg: 2880, // masa en orden de marcha, variante base homologada (ficha oficial Knaus 2026)
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: 129, // «Maximum payload (kg) 129» publicado en la ficha oficial Knaus 2026 (configuración base)
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 2,
    parNm: null,
    traccion: null, // no declarada expresamente en la ficha oficial 2026 consultada
    emisionesCo2: null,
    aprox: ["precioDesde"],
    notas:
      "Datos de la ficha de equipamiento oficial de KNAUS para el VAN TI 640 MEG VANSATION 2026 (knaus.com, verificada el 19/10/2026): chasis VW Crafter 35 de 3.500 kg, motor 2.0 TDI de 103 kW/140 CV con cambio manual de 6 velocidades, dimensiones 689x220x271 cm, masa en orden de marcha 2.880 kg y carga útil máxima publicada de 129 kg en configuración base. La ficha de configuración 2026 del acabado Vansation contempla además la variante de 120 kW/163 CV con cambio automático. Quedan sin dato: precio oficial en España (la marca no publica tarifa para España), consumo y emisiones. Precio: Grundpreis de la Preisliste oficial de Knaus Tabbert, año modelo 2027-1, VAN TI VW VANSATION 640 MEG, en EUR con IVA alemán del 19% incluido; no hay tarifa oficial para España.",
    curiosidades:
      "Con solo 2,20 m de ancho exterior y el concepto de trasera FoldXpand (pared trasera integral de plástico con pilotos integrados), el Van TI Vansation es uno de los perfilados más estrechos del mercado y aun así homologa 4 plazas de viaje (fuente oficial: https://www.knaus.com/en-int/motorhomes/van-ti/vansation/640-meg/standard-equipment/).",
    descripcion: `El Knaus Van TI 640 MEG Vansation es la respuesta de Knaus a una pregunta muy concreta: ¿cuánto espacio vital se puede meter en una perfilada de menos de 6,90 metros y solo 2,20 metros de ancho? La respuesta es este modelo, el «ágil» de la familia Van TI, que presume de ser lo bastante compacto para carreteras de costa con curvas y lo bastante equipado para sentirse como una autocaravana de verdad. El apellido Vansation no es un simple acabado estético: es un paquete de equipamiento cerrado que incluye toldo, cámara trasera, multimedia con DAB+, iluminación ambiental LED completa y detalles de diseño propios, pensado para salir del concesionario sin pasar por la lista de opcionales.

Las medidas son su tarjeta de visita: 689 cm de largo, 220 cm de ancho y 271 cm de alto exterior, con 196 cm de altura interior. Esos 2,20 m de anchura —doce menos que una perfilada convencional— se notan muchísimo al volante: en carreteras secundarias, en pueblos y al aparcar, el Van TI se comporta casi como una furgoneta grande. La contrapartida es un interior que obliga a un diseño inteligente, y ahí es donde entra el concepto FoldXpand de la trasera: una pared posterior integral de plástico con el portapilotos enrasado que maximiza el espacio útil sin renunciar a una estética automovilística, rematada por los pilotos traseros KNAUS CATEYE evolution con firma nocturna exclusiva e intermitente dinámico en LED. La batalla de 364 cm y los neumáticos 235/60 R17 sobre llantas «Lismore» de 17 pulgadas le dan una pisada estable para su tamaño.

La distribución 640 MEG es la clásica de camas gemelas traseras: dos camas individuales de 201x85 y 201x77 cm con colchón EvoPore HRC y posibilidad de unirlas en una gran superficie de descanso. Son dos plazas de dormir reales, sin transformaciones nocturnas, lo que lo orienta claramente a parejas. Delante, el grupo de asientos mono con mesa colgada y extensión giratoria acoge a cuatro personas de día, y las butacas de cabina —las originales de Volkswagen con fundas a medida en tejido Knaus— son giratorias para integrarse al salón. La cocina monta dos fuegos con tapa de cristal y fregadero de acero inoxidable encastrado, y el frigorífico es de compresor de 150 litros con congelador de 17 litros: una elección moderna que enfría bien incluso con calor y no depende del nivelado del gas. El baño confort integra ducha y lavabo con WC de banco Thetford, correcto para dos personas.

En tecnología, la ficha oficial 2026 detalla un equipamiento de alto nivel para el segmento: calefacción diésel Truma Combi 6 D con panel digital CP-Plus (usa el gasóleo del propio depósito, ideal para viajar en invierno sin depender de bombonas), batería de habitáculo LiFePO4 con cargador apto para litio y booster de carga, preinstalación de TV en salón y dormitorio, sistema eléctrico gestionable desde un panel central con display de baterías y niveles de agua, y climatizador «Climatic» en cabina. En el chasis, el acabado Vansation suma suspensión neumática auxiliar de dos canales en el eje trasero, depósito de aguas grises aislado y calefactado, toldo de 405x250 cm en antracita y garantía de estanqueidad de 10 años, un argumento de tranquilidad a largo plazo poco habitual en este precio. Los depósitos son de 95 litros de agua limpia y 95 de grises, y el garaje —con puertas de 80x110 cm a ambos lados— admite hasta 250 kg.

En mecánica, la base 2026 es el Volkswagen Crafter 35 con el 2.0 TDI de 103 kW (140 CV), cambio manual de 6 velocidades y tracción delantera, con la opción del 2.0 TDI de 120 kW (163 CV) con cambio automático para quien quiera más desahogo. El Crafter aporta su dotación de asistentes: control de crucero electrónico con limitador, ESP, asistente de arranque en pendiente, frenada de emergencia, reconocimiento de señales, detector de fatiga y cámara trasera de serie en el acabado Vansation. La masa en orden de marcha declarada es de 2.880 kg para una MMA de 3.500 kg, así que se conduce con el carnet B. Ojo, eso sí, con la carga útil: la ficha oficial publica 129 kg de carga máxima en la configuración base, una cifra ajustada que obliga a calcular bien el equipamiento opcional antes de firmar. Es el peaje de la ligereza: Knaus lo presenta como «el más ligero de su clase», y lo es, pero cada kilo de opcional cuenta.

En precio y red comercial en España, la honestidad obliga: Knaus publica su Preisliste oficial en Alemania (85.490 € para el Van TI 640 MEG Vansation, IVA 19% incl.) pero no tarifa para España, de modo que el precio aplicado es el alemán («aprox»). El Van TI Vansation se vende a través de la red de distribuidores oficiales de Knaus Tabbert en España; al ser un acabado cerrado con mucho equipamiento incluido, el presupuesto suele moverse menos que en gamas con listas de opcionales interminables, pero conviene pedirlo por escrito con la motorización y el cambio elegidos. Como referencia de mercado, las unidades de ocasión del año-modelo 2023-2024 se anuncian en Alemania en el entorno de los 74.000 €, lo que sitúa al nuevo bien por encima de esa cifra.

Cómo lo verificamos: todos los datos técnicos y de equipamiento proceden de la ficha oficial de KNAUS «VAN TI 640 MEG VANSATION — Standard Equipment» (knaus.com, edición 2026, verificada el 19/10/2026), contrastada con la ficha de configuración 2026 del acabado Vansation. Lo que la marca no publica para España —consumos y emisiones— queda sin dato y así se declara; el precio aplicado es el de su Preisliste oficial alemana.

Para quién es: perfecto para parejas que quieren una perfilada ágil y estrecha para viajar por carreteras secundarias y Europa sin sufrir con el tamaño, y que valoran el equipamiento cerrado del acabado Vansation y la calefacción diésel para escapadas de invierno. No es para familias (solo 2 camas), ni para quien necesite mucha carga útil sin hacer números —esos 129 kg de la ficha base hay que vigilarlos—, ni para quien prefiera una célula ancha de 2,32 m con más desahogo interior.`,
    pros: [
      "Solo 2,20 m de ancho y 6,89 m de largo: agilidad de furgoneta grande con interior de autocaravana",
      "Acabado Vansation muy completo de serie: toldo, cámara trasera, DAB+, LED ambiental, suspensión neumática trasera",
      "Calefacción diésel Truma Combi 6 D y batería LiFePO4: gran autonomía invernal sin depender del gas",
      "Trasera FoldXpand con pilotos CATEYE evolution LED y garantía de estanqueidad de 10 años",
      "Se conduce con carnet B (3.500 kg) y la base VW Crafter aporta asistentes modernos de serie",
    ],
    contras: [
      "Carga útil publicada de solo 129 kg en configuración base: hay que calcular cada opcional",
      "Solo 2 plazas de dormir: no sirve para familias ni para llevar invitados",
      "Knaus no publica tarifa oficial: el precio final depende del presupuesto del distribuidor",
      "El baño y la cocina son correctos pero compactos; no es un vehículo para largas estancias de 4 personas",
      "La versión automática de 163 CV encarece notablemente el conjunto",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/knaus-van-ti-640-meg-vansation-2026-precio-ficha-tecnica-oficial.webp", alt: "Knaus Van TI 640 MEG Vansation, vista lateral exterior", ancho: 950, alto: 671 },
      { src: "/media/knaus-van-ti-640-meg-vansation-2026-precio-ficha-tecnica-interior1.webp", alt: "Knaus Van TI 640 MEG Vansation, salón y cocina", ancho: 1200, alto: 1600 },
      { src: "/media/knaus-van-ti-640-meg-vansation-2026-precio-ficha-tecnica-interior2.webp", alt: "Knaus Van TI 640 MEG Vansation, camas gemelas traseras", ancho: 1024, alto: 683 },
      { src: "/media/knaus-van-ti-640-meg-vansation-2026-precio-ficha-tecnica-detalle.webp", alt: "Knaus Van TI 640 MEG Vansation, vista trasera exterior", ancho: 1500, alto: 1125 },
    ],
    analisisSlug: "knaus-van-ti-640-meg-vansation-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base VW Crafter: revisión cada 2 años o 50.000 km (LongLife, según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (VW Crafter)", queSeCambia: "Aceite LongLife + filtros + inspección general", costeAproxEur: 380 },
        { nombre: "Revisión célula Knaus (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
