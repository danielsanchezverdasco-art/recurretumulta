// Autocaravanas Laika — lote Merlín 3 (19/10/2026).
// Fuentes: web oficial Laika (laika.it — gama Kosmo y gama Kreos, página oficial del
// Kreos H 5109), ficha técnica detallada de distribuidor (documento de exposición
// caraworld para el Kosmo H 1319 y para el Kreos H 5109: dimensiones, pesos, camas,
// equipamiento), prensa especializada (campingcarlesite.com, artículo sobre el nuevo
// Kreos H 5109 MB; alpacacamping.de, resumen de la gama). Verificado el 19/10/2026.
// Notas honestas: Laika publica sus precios en su documento oficial de precios públicos 2026
// (edición francesa; sin tarifa para España): precioDesde = precio oficial (marcado en «aprox»;
// Kosmo H 1319 91.287 €, Kreos H 5109 181.667 €). cargaUtilKg,
// consumos y emisiones no figuran en las fuentes consultadas y quedan sin dato.
// La tracción no se declara expresamente en las fichas consultadas.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_LAIKA_M3: Autocaravana[] = [
  {
    id: "laika-kosmo-h-1319-2026-precio-ficha-tecnica",
    marca: "Laika",
    modelo: "Kosmo H 1319",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: 91287, // Precios públicos oficiales Laika 2026 (ed. francesa).
    potenciaCv: 140, // Fiat Ducato 2.2 de 103 kW; opcional 180 CV
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
    imagen: "/media/laika-kosmo-h-1319-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/laika-kosmo-h-1319-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/laika-kosmo-h-1319-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6950, // ficha técnica de distribuidor (documento caraworld Kosmo H 1319)
    anchoMm: 2320,
    altoMm: 2950,
    pesoKg: null, // la marca no publica la masa en orden de marcha de forma estable
    mmaKg: 3500, // opcional 4.400 kg con chasis Heavy
    carnetNecesario: "B",
    cargaUtilKg: null, // no publicada por la marca
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4,
    parNm: null,
    traccion: null, // no declarada expresamente en la ficha consultada
    emisionesCo2: null,
    aprox: ["precioDesde"],
    notas:
      "Modelo verificado en la gama oficial Kosmo de Laika (laika.it) y en ficha técnica detallada de distribuidor (caraworld): integral de 6.950x2.320x2.950 mm, Fiat Ducato 2.2 de 103 kW/140 CV con cambio manual (opcional 180 CV y automático), MMA de 3.500 kg (opcional 4.400 kg), 4 plazas de viaje y 4 camas (gemelas traseras + abatible de 193x150 cm), calefacción Truma Combi 6 E, frigorífico de 136 l y depósitos de 110/90 l. Quedan sin dato: precio oficial ES (Laika no publica tarifa), masa en orden de marcha, carga útil, consumo y emisiones. Precio: precio público del documento oficial de precios públicos y datos técnicos de Laika 2026 (válido desde 01/08/2025), Kosmo H 1319 = 91.287 €; no hay tarifa oficial para España.",
    curiosidades:
      "Con solo 6,95 m de longitud, el Kosmo H 1319 homologa 4 plazas para dormir combinando las camas gemelas traseras (200x80 y 195x80 cm) con una cama abatible de 193x150 cm sobre el salón (fuente: ficha técnica de distribuidor, https://caraworld.hst.edition-software.de/fm/e/021/777/788/cw21777788-de-DE1-expose.pdf).",
    descripcion: `El Laika Kosmo H 1319 es la integral de acceso de la marca toscana, y probablemente la forma más asequible de entrar en el mundo de las integrales europeas con un producto serio. La letra H de su nombre indica lo esencial: es una integral pura, con el parabrisas panorámico y la cabina totalmente integrada en la célula, no una perfilada. Y el 1319 resume su propuesta: una integral de menos de siete metros capaz de dormir a cuatro personas sin renunciar a un dormitorio trasero de verdad. En un mercado donde las integrales suelen dispararse de precio y de tamaño, el Kosmo H juega la carta del equilibrio.

En medidas declara 695 cm de largo, 232 cm de ancho y 295 cm de alto, unas cotas contenidas para una integral que le permiten moverse con más soltura que las grandes de ocho metros y pico. La MMA es de 3.500 kg en la configuración estándar —conducible con el carnet B, un requisito irrenunciable para buena parte del público español—, con la opción de elevarla a 4.400 kg con el chasis Heavy para quien viaje cargado o arrastre remolque. El motor de serie es el Fiat Ducato 2.2 Multijet de 103 kW (140 CV) con cambio manual, con la posibilidad de subir al 2.2 de 180 CV con cambio automático de 8 velocidades para quien haga mucha autopista o circule por zonas de montaña. Es la mecánica más extendida del sector, con repuestos y servicio en cualquier punto de Europa.

La distribución es el punto fuerte del 1319. Atrás, dos camas gemelas longitudinales de 200x80 y 195x80 cm con colchones de calidad y almacenaje inferior; delante, un salón lateral con mesa y asientos enfrentados que aprovecha la anchura de la célula; y sobre el salón, una cama abatible de 193x150 cm que se recoge al techo durante el día y deja el salón diáfano. El resultado: cuatro plazas de dormir reales en 6,95 metros, algo que no todas las integrales compactas consiguen sin recurrir a literas incómodas. La cocina es funcional, con fregadero, cocina de gas y frigorífico de 136 litros, y el baño completo con ducha separada cumple para dos personas en ruta. Los tapizados de serie combinan los tejidos Siena y Liguria en tonos beige-marrón, y el Pack Comfort Kosmo H añade detalles como el suelo de ducha de madera, la alfombra de cabina, la campana extractora, el depósito de grises aislado y calefactado, las paredes del dormitorio en ecopiel y la puerta de habitáculo Premium XL con mando a distancia.

En tecnología y equipamiento, el Kosmo H 1319 monta calefacción Truma Combi 6 E —la versión con resistencias eléctricas además del gas—, depósito de agua limpia de 110 litros y de grises de 90, preinstalación de TV a 12 V con soporte, 4 enchufes de 230 V, 4 USB y uno de 12 V. Los paquetes opcionales permiten escalar: el Pack Chassis Pro añade freno de estacionamiento eléctrico, TPMS, climatizador automático, carga inductiva para el móvil y cuadro digital de 7 pulgadas con faros Full LED; el Pack Multimedia suma el sistema de 9 pulgadas con DAB, Apple CarPlay, Android Auto y cámara trasera; y hay preinstalación solar de 120 W con regulador para quien busque autonomía. Todo ello con la construcción típica de Laika: paredes con aislamiento, muebles con herrajes pensados para durar y la prueba de estanqueidad que la marca aplica al 100% de sus vehículos.

En precio y red comercial en España, la honestidad es obligada: Laika publica sus precios en su documento oficial de precios públicos 2026 (edición francesa): el Kosmo H 1319 parte de 91.287 €; no hay tarifa oficial para España. Como referencia de mercado —no oficial—, en Italia se anuncian unidades nuevas del año-modelo 2025-2026 en el entorno de los 80.000-90.000 € según equipamiento, y en España la marca se comercializa a través de su red de distribuidores oficiales, donde el presupuesto se cierra por configuración. Es, en cualquier caso, una de las integrales más accesibles del mercado europeo, claramente por debajo de las gamas Ecovip y Kreos de la propia marca.

Cómo lo verificamos: la existencia del modelo y su encuadre en la gama Kosmo se verificó en la web oficial de Laika (laika.it); los datos técnicos —dimensiones, motor, pesos, camas, calefacción, frigorífico, depósitos y equipamiento de los paquetes— proceden de la ficha técnica detallada publicada por un distribuidor (documento de exposición caraworld del Kosmo H 1319), contrastada con anuncios de unidades nuevas del año-modelo 2025-2026. Todo verificado el 19/10/2026. Lo que la marca no publica —masa en orden de marcha exacta y carga útil— queda sin dato y así se declara; el precio aplicado es el de su documento oficial de precios públicos 2026.

Para quién es: ideal para parejas o familias de cuatro que quieren una integral de verdad —parabrisas panorámico, presencia, habitabilidad— sin subir a los 7,5-8 metros ni a los precios de las gamas altas, y sin sacarse el carnet C1. También para quien valora la red de servicio del Fiat Ducato y un equipamiento opcional escalable. No es para quien necesite cinco o seis plazas, ni para quien busque el lujo de materiales de una Kreos, ni para viajeros que prioricen la carga útil máxima sin mirar la báscula: con 3.500 kg de MMA y cuatro ocupantes, el equipaje hay que calcularlo.`,
    pros: [
      "Integral de verdad por debajo de los 7 metros: parabrisas panorámico y presencia de gama alta",
      "4 plazas de dormir reales (gemelas traseras + abatible 193x150) en solo 6,95 m",
      "MMA de 3.500 kg de serie: se conduce con el carnet B",
      "Calefacción Truma Combi 6 E (gas + eléctrica) y depósito de grises aislado y calefactado",
      "Base Fiat Ducato 140 CV con opcional de 180 CV automático: mecánica probada y servicio en toda Europa",
    ],
    contras: [
      "Laika no publica tarifa oficial: el precio solo se conoce en el distribuidor",
      "Con 3.500 kg de MMA y 4 ocupantes, la carga útil exige hacer números",
      "El motor de 140 CV con cambio manual es justo para quien viaje muy cargado o con remolque",
      "Acabados correctos pero lejos del nivel de materiales de las gamas Ecovip y Kreos",
      "El baño, aunque completo, es compacto para una integral",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/laika-kosmo-h-1319-2026-precio-ficha-tecnica-oficial.webp", alt: "Laika Kosmo H 1319, vista exterior delantera", ancho: 1024, alto: 683 },
      { src: "/media/laika-kosmo-h-1319-2026-precio-ficha-tecnica-interior1.webp", alt: "Laika Kosmo H 1319, cocina", ancho: 640, alto: 853 },
      { src: "/media/laika-kosmo-h-1319-2026-precio-ficha-tecnica-interior2.webp", alt: "Laika Kosmo H 1319, salón y dormitorio", ancho: 728, alto: 552 },
      { src: "/media/laika-kosmo-h-1319-2026-precio-ficha-tecnica-detalle.webp", alt: "Laika Kosmo H 1319, vista trasera exterior", ancho: 1024, alto: 683 },
    ],
    analisisSlug: "laika-kosmo-h-1319-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 48.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Laika (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
  {
    id: "laika-kreos-h-5109-2026-precio-ficha-tecnica",
    marca: "Laika",
    modelo: "Kreos H 5109",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: 181667, // Precios públicos oficiales Laika 2026 (ed. francesa).
    potenciaCv: 180, // Fiat Ducato 2.2 de 132 kW; existe versión H 5109 MB sobre Mercedes Sprinter de 170 CV
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
    imagen: "/media/laika-kreos-h-5109-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/laika-kreos-h-5109-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/laika-kreos-h-5109-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7890, // ficha técnica de distribuidor (documento caraworld Kreos H 5109)
    anchoMm: 2320,
    altoMm: 3030,
    pesoKg: 4034, // masa en orden de marcha publicada en la ficha de distribuidor
    mmaKg: 4500,
    carnetNecesario: "C1", // MMA de 4.500 kg
    cargaUtilKg: null, // no publicada por la marca
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4,
    parNm: null,
    traccion: null, // no declarada expresamente en la ficha consultada
    emisionesCo2: null,
    aprox: ["precioDesde"],
    notas:
      "Modelo contrastado en la web oficial de Laika (laika.it, página del Kreos H 5109 " +
      "en la gama Kreos) y en la ficha técnica pormenorizada de un distribuidor " +
      "(caraworld): integral de 7.890x2.320x3.030 mm con Fiat Ducato 2.2 de 180 CV y " +
      "cambio automático, MMA de 4.500 kg (carnet C1), 4.034 kg de masa en orden de " +
      "marcha, 4 plazas y 4 camas (gemelas traseras de 195x80 más abatible eléctrica " +
      "de 195x140), calefacción de agua caliente, doble suelo calefactado, chasis " +
      "AL-KO AMC, frigorífico de 153 l y depósitos de 200/146 l. En julio de 2026 " +
      "Laika sumó además la variante H 5109 MB con Mercedes Sprinter de 170 CV. En " +
      "null: precio oficial en España (Laika no publica tarifa), carga útil, consumo  Precio: precio público del documento oficial de precios públicos y datos técnicos de Laika 2026 (válido desde 01/08/2025), Kreos H 5109 = 181.667 €; no hay tarifa oficial para España." +
      "y emisiones.",
    curiosidades:
      "En julio de 2026 Laika desveló el Kreos H 5109 MB, la primera variante de la " +
      "serie H montada sobre Mercedes-Benz Sprinter (170 CV), en paralelo a la versión " +
      "Fiat de 180 CV (fuentes: " +
      "https://www.autoyas.com/IT/San-Casciano-in-Val-di-Pesa/359787714140588/LAIKA-Caravans " +
      "y " +
      "https://www.campingcarlesite.com/camping-car-neuf/76298-nouvel-integral-laika-kreos-luxe-et-raffinement-sur-mercedes-sprinter-exclusivement).",
    descripcion: `El Laika Kreos H 5109 es la integral con la que la casa toscana compite entre las grandes: rozando los 7,90 metros, con 4.500 kg de MMA y un interior que recuerda más a un estudio de diseño que a un carrocero. La gama Kreos corona el catálogo de Laika —un peldaño por encima de Kosmo y Ecovip— y el H 5109 es su propuesta más equilibrada: gemelas traseras, salón central amplio y una dotación técnica concebida para residir a bordo los doce meses, no solo en agosto. Una autocaravana para quien tiene las ideas claras y acepta pagar por no prescindir de nada.

Declara 789 cm de largo, 232 de ancho y 303 de alto exterior, con 205 cm de altura interior: dimensiones de liner compacto que se dejan sentir en carretera. No es un vehículo para perderse por cascos antiguos, sino para autopista, áreas espaciosas y parcelas holgadas. La MMA de 4.500 kg exige el carnet C1 en España —una criba relevante: con solo el B no hay opción—, pero a cambio la masa en orden de marcha declarada es de 4.034 kg, lo que deja un margen de carga digno para este nivel de dotación. La batalla de 470 cm y el chasis AL-KO AMC, desarrollado para autocaravanas, proporcionan una estabilidad en ruta muy por encima de la de un bastidor de furgoneta convencional.

La vida interior está a otro nivel. El dormitorio trasero equipa dos camas individuales de 195x80 cm con cabecero tapizado, luz ambiental regulable y armarios altos de lado a lado; sobre el salón, una abatible de accionamiento eléctrico de 195x140 cm redondea las cuatro camas sin ningún esfuerzo. El salón en L, con mesa amplia, sienta a cuatro comensales con comodidad, y la cocina es de las de verdad: mueble generoso con encimera de primera, frigorífico de 153 litros, cocina de gas —con la variante «Gran Chef» de tres fuegos y horno como opción— y abundante almacenaje. El baño justifica por sí solo el precio: ducha wellness independiente con efecto lluvia y grifería metálica, lavabo elegante y WC separado frente a la ducha. El doble suelo calefactado es mucho más que un argumento comercial: genera un plano habitable a una sola cota, aísla del frío y esconde un hueco técnico accesible que en invierno se convierte en un aliado. El garaje trasero, con piso antideslizante y carriles de sujeción, engulle bicicletas, mobiliario de camping y el equipaje de una vida nómada.

En dotación, el Kreos H 5109 despliega todo el repertorio de Laika: calefacción por agua caliente (la referencia invernal, silenciosa y uniforme), arquitectura TrueClimate para las cuatro estaciones, doble suelo SystemCore, sistema WaterComfort, mobiliario en nogal macizo combinado con frentes gris pizarra (Icy Grey) o azul profundo (Deep Ocean) —hasta 150 combinaciones entre muebles, tapicerías y cojines—, techo y paredes acolchados y guiños como el revestimiento de la ducha con aire de «cubierta de barco». La instalación eléctrica suma 6 tomas de 230 V, 3 de 12 V y 4 USB, y cada unidad pasa por la prueba de estanqueidad integral de la marca, con 10 años de garantía. Para rodar con aplomo, el Ducato de 180 CV con cambio automático se rodea de los asistentes habituales del segmento.

En el apartado mecánico, la versión de referencia recurre al Fiat Ducato 2.2 Multijet de 132 kW (180 CV) con caja automática y tracción delantera, una mecánica holgada para desplazar los 4.500 kg con brío incluso en puertos. Y llega la novedad de 2026: en julio, Laika presentó el Kreos H 5109 MB sobre Mercedes-Benz Sprinter de 170 CV, el debut de la serie H con la estrella alemana, que suma la imagen y la red de talleres de Mercedes a cambio de un precio superior. Ambas variantes comparten célula y filosofía; la disyuntiva está entre la relación valor/precio del Fiat y el prestigio y la reventa del Mercedes.

En precio y red comercial en España, Laika no publica tarifa oficial, así que el precio permanece sin dato. Como referencias contrastadas de la prensa europea: la gama Kreos arranca en Francia en 153.090 € (versión L 5009 MB) y el H 5109 se oferta desde 173.290 € en Francia y 178.500 € en Alemania según distribuidores. En España la venta se canaliza por la red oficial de Laika y cada unidad se presupuesta a medida: con semejante personalización (150 combinaciones de interior, paquetes, chasis), la factura final puede oscilar decenas de miles de euros. Una compra de gama alta, sin matices.

Cómo lo verificamos: la existencia del modelo y su lugar en la gama se comprobaron en la web oficial de Laika (laika.it, página del Kreos H 5109); los datos técnicos —cotas, pesos, motor, camas, calefacción, frigorífico, depósitos, doble suelo y chasis AL-KO— vienen de la ficha técnica detallada de un distribuidor (documento caraworld del Kreos H 5109); la llegada de la variante Mercedes Sprinter en julio de 2026 se contrastó en la prensa especializada (campingcarlesite.com) y en la comunicación oficial de la marca. Todo verificado el 19/10/2026. Lo que la marca no publica —precio oficial en España, carga útil exacta, consumos— queda sin dato y así se declara.

Para quién es: viajeros exigentes con carnet C1 que buscan una integral de lujo para rutas largas y vida a bordo todo el año, y que aprecian el diseño italiano, el doble suelo calefactado y la calefacción por agua caliente. No es para quien solo disponga del carnet B, ni para quien quiera una autocaravana manejable de menos de 7 metros, ni para presupuestos ceñidos: el H 5109 se mueve por encima de los 170.000 € y cada opcional engorda la cuenta.`,
    pros: [
      "Interior de categoría liner: nogal macizo, 150 combinaciones a medida y ducha wellness con lluvia",
      "Doble suelo calefactado SystemCore y calefacción de agua caliente: para vivir a bordo todo el año",
      "Cuatro camas con gemelas traseras y abatible eléctrica, sin rituales nocturnos",
      "Chasis AL-KO AMC específico y 4.500 kg de MMA con un margen de carga digno",
      "Doble oferta mecánica en 2026: Ducato de 180 CV automático o Sprinter de 170 CV",
    ],
    contras: [
      "Exige el carnet C1 (4.500 kg): inalcanzable con solo el B",
      "Tarifa de gama alta (desde unos 173.000 € en Europa) y sin precio oficial en España",
      "7,89 m de largo: pide parcelas amplias y descarta pueblos y vías estrechas",
      "Peso y tamaño lastran el consumo frente a las integrales compactas",
      "La personalización a medida dilata los plazos de entrega",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/laika-kreos-h-5109-2026-precio-ficha-tecnica-oficial.webp", alt: "Laika Kreos H 5109, vista exterior delantera", ancho: 1000, alto: 666 },
      { src: "/media/laika-kreos-h-5109-2026-precio-ficha-tecnica-interior1.webp", alt: "Laika Kreos H 5109, salón comedor", ancho: 800, alto: 533 },
      { src: "/media/laika-kreos-h-5109-2026-precio-ficha-tecnica-interior2.webp", alt: "Laika Kreos H 5109, cocina", ancho: 1600, alto: 1200 },
      { src: "/media/laika-kreos-h-5109-2026-precio-ficha-tecnica-detalle.webp", alt: "Laika Kreos H 5109, vista trasera exterior", ancho: 1279, alto: 854 },
    ],
    analisisSlug: "laika-kreos-h-5109-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 48.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Laika (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 280 },
      ],
    },
  },
];
