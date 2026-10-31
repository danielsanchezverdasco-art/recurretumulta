// Autocaravanas Pössl — lote Merlín 3 (19/10/2026).
// Fuentes: https://www.truckscout24.com/campervans-motorhomes-caravans/used/all/poessl?page=3 ,
// https://www.truckscout24.fr/main/search/index?search-word=p%C3%B6ssl+trenta+540+r+%2A+mega+preisvorteil%2A+radio%2Fmarkise ,
// https://www.truckscout24.es/main/search/index?search-word=p%C3%B6ssl+campster+%7C2026%7Cabstandstempomat%7Cahk%7C ,
// https://www.alpacacamping.de/fahrzeuge/en/brands/poessl/ ,
// https://cdn.caraworld.com/bilder/e/024/454/253/cw24454253-de-DE1-expose.pdf . Verificado el 19/10/2026.
// Notas honestas: la web oficial de Pössl (poessl-freizeit.de) no respondió durante la verificación
// (fallo de red), por lo que los datos técnicos proceden de fichas de distribuidores oficiales y de
// documentaciones de venta de unidades nuevas 2026; Pössl no publica PVP oficial para España
// (precioDesde = null) ni carga útil oficial (cargaUtilKg = null). Altura del Summit 540: 2.580 mm en la
// versión Fiat y 2.630 mm en la Citroën 2026 según anuncios; se consigna 2.580 mm con nota.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_POSSL_M3: Autocaravana[] = [
  {
    id: "possl-summit-540-2026-precio-ficha-tecnica",
    marca: "Pössl",
    modelo: "Summit 540",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: null, // Pössl no publica PVP oficial en España
    potenciaCv: 140, // anuncios de unidades nuevas 2026: 103 kW / 140 CV
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
    imagen: "/media/possl-summit-540-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/possl-summit-540-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/possl-summit-540-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5410, // anuncios 2026: 5.410 mm
    anchoMm: 2050, // anuncios 2026: 2.050 mm
    altoMm: 2580, // 2.580 mm en versión Fiat; 2.630 mm en la Citroën 2026 según anuncios
    pesoKg: null,
    mmaKg: 3500, // 3.500 kg
    carnetNecesario: "B",
    cargaUtilKg: null, // Pössl no publica la carga útil oficial
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 2,
    parNm: null,
    traccion: null, // la marca no lo declara en la documentación consultada
    emisionesCo2: null,
    aprox: [],
    notas: "Datos de anuncios de unidades nuevas 2026 en TruckScout24 (5.410 mm de longitud, 2.050 mm de anchura, 2.580/2.630 mm de altura según base, 3.500 kg de MMA, motor de 103 kW/140 CV con cambio automático de 8 relaciones, calefacción Truma Combi 4, panel de control Truma iNet X, decorado de madera San Marco, ambiente interior H-Line Original, ventana en el baño, asistencia Softlock en la puerta corredera) y de la descripción de la gama en alpacacamping.de (Summit: serie premium con diseño interior acogedor). La web oficial de Pössl no respondió durante la verificación. la tarifa oficial española localizada cubre solo la gama VAN LINE (Vanster/Campster).",
    curiosidades: "El Summit 540 de 2026 se ofrece también como Summit 540 Shine con techo elevable opcional: en los mismos 5,41 metros suma una quinta plaza de viaje homologada y dos camas extra en el techo, llegando a 4 plazas para dormir. Fuente: https://www.truckscout24.com/campervans-motorhomes-caravans/used/all/poessl?page=3",
    descripcion: `El Pössl Summit 540 es la respuesta alemana a una pregunta muy concreta: ¿cuánto camper cabe en 5,41 metros sin renunciar a la sensación de estar en casa? Pertenece a la línea Summit, la serie con la que Pössl viste sus furgones de un modo más hogareño —maderas cálidas, tapicerías cuidadas y mucha luz—, y en su versión corta de 5,41 metros se convierte en uno de los campers con baño completo más compactos del mercado europeo. Es el formato que se aparca en una plaza de coche grande, que no asusta en el tráfico diario y que, aun así, duerme a dos personas con total dignidad.

    Las cifras son las de un L2H2 de libro: 5,41 metros de largo, 2,05 de ancho y 2,58 de alto en la versión sobre Fiat (la variante sobre Citroën de 2026 anuncia 2,63 m, una diferencia que viene del techo y los acabados de la base). La masa máxima es de 3.500 kg, así que basta el carnet B, y aunque Pössl no publica la carga útil oficial —de ahí el «sin dato» honesto de esta ficha—, el planteamiento ligero de la marca deja en la práctica un margen razonable para dos viajeros y su equipaje. El motor de las unidades 2026 documentadas es el 2,2 litros de 140 CV con el cambio automático de 8 relaciones, una combinación que en un vehículo de este peso se mueve con soltura y que, con el pack Premium, incluye además ayudas a la conducción modernas como el asistente de viento lateral, el control de crucero adaptativo o el sistema Traction+.

    Por dentro, el Summit 540 apuesta por la calidez. El decorado de madera San Marco y el ambiente interior H-Line Original —el diseño propio de la casa— crean un habitáculo que se parece más a un pequeño apartamento que a un furgón transformado. La distribución es la clásica de camper corto bien resuelto: salón delantero con banqueta y asientos giratorios de cabina, cocina lateral con dos fuegos y fregadero, y un cuarto de baño compacto pero completo, con ventana propia para ventilar —un detalle que no todos los rivales ofrecen— y ducha. La cama, en la parte trasera, aprovecha el ancho del furgón para un descanso de verdad, y los armarios altos con retroiluminación aportan el toque «hogar» que da nombre a la serie.

    En equipamiento, la dotación H-Line de Pössl es generosa: panel de control táctil Truma iNet X para gestionar la calefacción, calefacción Truma Combi 4, cierre asistido Softlock en la puerta corredera lateral —se cierra sola con suavidad, un lujo en el día a día—, mosquitera en la puerta, ventanas con oscurecedores y mosquiteras, y tomas adicionales de 230 V y USB repartidas por la célula. Las unidades con pack Premium añaden climatización automática de cabina, asientos de capitán giratorios, llantas de aleación, volante de cuero, cuadro de instrumentos digital, depósito de 90 litros, booster de carga y preinstalación solar, entre otros. Es un nivel de dotación que explica por qué Pössl presume de relación precio-equipamiento.

    Un apunte importante para familias: el Summit 540 «a secas» es un dos plazas para dormir, pero existe la variante Summit 540 Shine con techo elevable opcional, que en los mismos 5,41 metros añade una quinta plaza de viaje y eleva la capacidad nocturna a cuatro camas. Es la puerta de entrada al mundo Pössl para quien necesita una plaza más sin saltar a un 6 metros. En cuanto al precio, la honestidad obliga: Pössl no publica tarifa oficial para España, así que esta ficha lo deja sin dato; los anuncios alemanes de unidades nuevas 2026 se mueven en la franja de los 60.000 euros con equipamiento medio-alto, pero eso es mercado alemán, no PVP oficial. En España la marca se vende a través de importadores y distribuidores especializados en campers.

    Cómo lo verificamos: las medidas (5.410 mm de longitud, 2.050 mm de anchura, 2.580/2.630 mm de altura según base, 3.500 kg de MMA), el motor (140 CV con cambio automático de 8 relaciones) y el equipamiento (Truma Combi 4, Truma iNet X, decorado San Marco, H-Line Original, ventana en el baño, Softlock) proceden de anuncios de unidades nuevas 2026 publicados en TruckScout24 y consultados el 19/10/2026; la caracterización de la serie Summit como la línea premium de diseño acogedor procede de alpacacamping.de. La web oficial de Pössl (poessl-freizeit.de) no respondió por un fallo de red durante la verificación, circunstancia que se declara aquí. Precio y carga útil: la marca no los publica (sin dato).

    Para quién es: ideal para parejas que quieren el camper más compacto posible con baño completo y ambiente cuidado, para usarlo a diario sin complejos y escapar los fines de semana. La versión Shine con techo elevable lo hace viable para una familia de cuatro en 5,41 metros. No es para quien necesite cuatro camas fijas sin techo elevable, ni para quien busque el precio cerrado en la web del fabricante: en Pössl el precio se construye con el distribuidor.`,
    pros: [
      "Solo 5,41 m con baño completo: de los campers más compactos y habitables",
      "Serie Summit con decorado San Marco y ambiente H-Line: sensación hogareña real",
      "Calefacción Truma Combi 4 con control táctil iNet X y cierre Softlock en la puerta corredera",
      "Motor de 140 CV con cambio automático de 8 relaciones y ayudas como Traction+ y crucero adaptativo",
      "Variante Shine con techo elevable: 5 plazas de viaje y 4 camas en el mismo formato",
    ],
    contras: [
      "Pössl no publica PVP oficial en España ni carga útil oficial",
      "La versión base solo duerme a 2: para 4 hay que irse al Shine con techo elevable",
      "La web oficial no respondió durante la verificación: conviene confirmar la gama 2026 con un distribuidor",
      "La altura varía según la base (2,58-2,63 m): comprobar antes de entrar en parkings limitados",
      "El equipamiento atractivo (Premium, solar, litio) sube rápido el precio final",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/possl-summit-540-2026-precio-ficha-tecnica-oficial.webp", alt: "Pössl Summit 540, vista exterior", ancho: 1000, alto: 667 },
      { src: "/media/possl-summit-540-2026-precio-ficha-tecnica-interior1.webp", alt: "Pössl Summit 540, cocina", ancho: 728, alto: 548 },
      { src: "/media/possl-summit-540-2026-precio-ficha-tecnica-interior2.webp", alt: "Pössl Summit 540, interior", ancho: 728, alto: 548 },
      { src: "/media/possl-summit-540-2026-precio-ficha-tecnica-detalle.webp", alt: "Pössl Summit 540, detalle exterior", ancho: 540, alto: 291 },
    ],
    analisisSlug: "possl-summit-540-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Citroën Jumper / Fiat Ducato 2.2: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (2.2 diésel)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Pössl (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
  {
    id: "possl-trenta-600-r-2026-precio-ficha-tecnica",
    marca: "Pössl",
    modelo: "Trenta 600 R",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: null, // Pössl no publica PVP oficial en España
    potenciaCv: 140, // documentación 2026: 2,2 L y 140 CV (existe opción de 165 CV)
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
    imagen: "/media/possl-trenta-600-r-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/possl-trenta-600-r-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/possl-trenta-600-r-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5998, // anuncios: 5.998 mm (600 cm en la documentación)
    anchoMm: 2050, // 2.050 mm
    altoMm: 2580, // 2.580 mm
    pesoKg: null,
    mmaKg: 3500, // 3.500 kg
    carnetNecesario: "B",
    cargaUtilKg: null, // Pössl no publica la carga útil oficial
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas con cinturón
    plazasDormir: 2, // 2 plazas para dormir
    parNm: null,
    traccion: null, // la marca no lo declara en la documentación consultada
    emisionesCo2: null,
    aprox: [],
    notas: "Datos de la documentación de venta de una unidad nueva 2026 (caraworld.de, PDF del exposé: 600 cm de longitud, 205 cm de anchura, 258 cm de altura, 191 cm de altura interior, 3.500 kg de MMA, 4 plazas con cinturón, 2 para dormir, cama trasera transversal de 196/147x130 cm, calefacción diésel Truma, frigorífico de 100 L + 8 L de congelador, 100 L de agua limpia, 92 L de grises, batería de 95 Ah, motor 2,2/140 CV con cambio automático, tapicería Pacco) y de anuncios en TruckScout24 (5.998 mm, baño transversal amplio, frigorífico de doble apertura interior/exterior, opción de 165 CV). el exposé alemán indica un PVP de distribuidor de 71.390 €, no oficial. la tarifa oficial española localizada cubre solo la gama VAN LINE (Vanster/Campster).",
    curiosidades: "Trenta no es un nombre cualquiera: es el modelo con el que Pössl celebró su 30.º aniversario, combinando diseño moderno y precio atractivo; y el 600 R esconde un guiño muy práctico, su frigorífico de 100 litros se abre por los dos lados, desde dentro y desde fuera del vehículo. Fuentes: https://www.alpacacamping.de/fahrzeuge/en/brands/poessl/ y https://www.truckscout24.fr/main/search/index?search-word=p%C3%B6ssl+trenta+540+r+%2A+mega+preisvorteil%2A+radio%2Fmarkise",
    descripcion: `El Pössl Trenta 600 R es un camper de 6 metros con una historia detrás del nombre: «Trenta» —treinta en italiano— es la serie con la que la marca alemana celebró su 30.º aniversario, una edición que combinaba diseño moderno, equipamiento funcional y un precio especialmente atractivo. La R de 600 R alude a su seña de identidad, el «Raumbad», un cuarto de baño trasero transversal y amplio que en un furgón de 5,99 metros es casi un lujo. Es el camper de Pössl para quien quiere espacio de verdad para la higiene diaria sin renunciar a la agilidad de un 6 metros.

    Con 5.998 mm de longitud, 2.050 mm de anchura y 2.580 mm de altura —191 cm de altura interior libre—, el Trenta 600 R se mueve en el formato L3H2 largo, el más popular del segmento camper en Europa. La MMA es de 3.500 kg, por lo que se conduce con el carnet B, y Pössl no publica la carga útil oficial, de modo que esta ficha la deja sin dato con total honestidad. La base documentada en las unidades 2026 es el Citroën Jumper 2,2 litros de 140 CV con cambio automático —existe además la opción de 165 CV para quien quiera más reserva—, con chasis ligero de 3,5 toneladas.

    La distribución es la que ha hecho famoso a este modelo: salón delantero para cuatro con banqueta ergonómica de espuma moldeada y mesa con extensión giratoria, cocina central completa, y al fondo, en lugar de la cama, un gran baño transversal que ocupa todo el ancho trasero. La cama principal es la transversal trasera de 196 cm de largo (147 cm en su parte más ancha, 130 en la estrecha), una medida generosa que permite dormir a lo ancho con comodidad. Es un planteamiento distinto al de los campers con cama trasera fija: aquí se prioriza el baño, y la cama se resuelve con inteligencia en el espacio restante.

    El equipamiento documentado en las unidades 2026 es abundante: calefacción diésel Truma con panel de control CP Plus, frigorífico de 100 litros con 8 litros de congelador, 100 litros de agua limpia y 92 de grises, batería de 95 Ah, tapicería Pacco de alta gama con el decorado de madera Tiberino, llantas de aleación de 16 pulgadas, pack eléctrico de la célula con tomas adicionales de 230 V, DuoControl CS para el gas, ventana en el baño, toldo exterior, instalación solar y cámara de marcha atrás de doble objetivo. El pack «todo incluido» de las versiones equipadas añade además ayudas como el control de crucero adaptativo o el asistente de mantenimiento de carril.

    Y aquí va el detalle que lo hace especial: el frigorífico es de doble apertura, accesible desde el interior y desde el exterior del vehículo. Parece una tontería hasta que se usa: sacar la bebida fresca sin entrar al camper, con la puerta lateral abierta en una parada, es uno de esos pequeños lujos que se agradecen cada día. Es el tipo de solución práctica y bien pensada que explica la fama de Pössl.

    En precios, la misma honestidad de siempre: Pössl no publica tarifa oficial para España y esta ficha deja el precio sin dato. Como referencia de mercado —no oficial—, la documentación alemana de una unidad nueva 2026 mostraba un PVP de distribuidor de 71.390 euros con el descuento aplicado; en España el precio se configura con el importador o distribuidor. La red comercial de Pössl en España pasa por especialistas en campers y distribuidores multimarca, con buen acceso a recambios al ser una marca del grupo Trigano con gran volumen en Europa.

    Cómo lo verificamos: las medidas (600 cm de longitud, 205 cm de anchura, 258 cm de altura, 191 cm de altura interior), las masas (3.500 kg de MMA), las plazas (4 con cinturón, 2 para dormir), la cama trasera (196/147x130 cm), la calefacción diésel Truma, el frigorífico de 100+8 L, los depósitos (100/92 L), la batería (95 Ah), el motor (2,2/140 CV automático) y la tapicería Pacco proceden del exposé en PDF de una unidad nueva 2026 publicado por caraworld.de, consultado el 19/10/2026; el baño transversal amplio, el frigorífico de doble apertura y la opción de 165 CV proceden de anuncios verificados en TruckScout24; el carácter de serie aniversario por los 30 años de la marca, de alpacacamping.de. Precio y carga útil: la marca no los publica (sin dato).

    Para quién es: perfecto para parejas que ponen el baño amplio por delante de todo y quieren un 6 metros ágil con equipamiento serio y mucha autonomía (calefacción diésel, solar, 100 L de agua). El frigorífico de doble apertura y el baño transversal lo hacen ideal para estancias largas. No es para familias de cuatro —solo duerme a dos—, ni para quien busque cama fija longitudinal o gemelas: aquí la cama es transversal y el baño manda.`,
    pros: [
      "Baño trasero transversal amplio, casi un lujo en 5,99 metros",
      "Frigorífico de 100 L con doble apertura interior y exterior: detalle muy práctico",
      "Serie del 30.º aniversario: diseño moderno con precio contenido",
      "Calefacción diésel Truma, 100 L de agua limpia e instalación solar: gran autonomía",
      "Motor de 140 CV con automático y opción de 165 CV; 4 plazas de viaje",
    ],
    contras: [
      "Solo 2 plazas para dormir: no sirve para familias",
      "Pössl no publica PVP oficial en España ni carga útil oficial",
      "La cama transversal (196/147x130 cm) se estrecha en un extremo",
      "Prioriza el baño sobre la cama: quien quiera cama fija grande debe mirar otro esquema",
      "El precio real depende del distribuidor y del nivel de packs elegido",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/possl-trenta-600-r-2026-precio-ficha-tecnica-oficial.webp", alt: "Pössl Trenta 600 R, vista exterior", ancho: 2073, alto: 1382 },
      { src: "/media/possl-trenta-600-r-2026-precio-ficha-tecnica-interior1.webp", alt: "Pössl Trenta 600 R, dormitorio", ancho: 1200, alto: 800 },
      { src: "/media/possl-trenta-600-r-2026-precio-ficha-tecnica-interior2.webp", alt: "Pössl Trenta 600 R, cama trasera", ancho: 2073, alto: 1382 },
      { src: "/media/possl-trenta-600-r-2026-precio-ficha-tecnica-detalle.webp", alt: "Pössl Trenta 600 R, cuarto de baño", ancho: 1382, alto: 2073 },
    ],
    analisisSlug: "possl-trenta-600-r-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Citroën Jumper 2.2: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Citroën Jumper 2.2)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Pössl (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
