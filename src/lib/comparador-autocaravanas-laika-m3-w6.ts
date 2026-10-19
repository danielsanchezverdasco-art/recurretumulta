// Autocaravanas Laika — lote Merlín 3 (19/10/2026).
// Fuentes: web oficial Laika (laika.it — gama Kosmo y gama Kreos, página oficial del
// Kreos H 5109), ficha técnica detallada de distribuidor (documento de exposición
// caraworld para el Kosmo H 1319 y para el Kreos H 5109: dimensiones, pesos, camas,
// equipamiento), prensa especializada (campingcarlesite.com, artículo sobre el nuevo
// Kreos H 5109 MB; alpacacamping.de, resumen de la gama). Verificado el 19/10/2026.
// Notas honestas: Laika no publica tarifa oficial de precios para España;
// precioDesde queda en null en ambos modelos (se citan como referencia los precios
// publicados por prensa/distribuidores europeos, no oficiales ES). cargaUtilKg,
// consumos y emisiones no figuran en las fuentes consultadas y quedan en null.
// La tracción no se declara expresamente en las fichas consultadas.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_LAIKA_M3: Autocaravana[] = [
  {
    id: "laika-kosmo-h-1319-2026-precio-ficha-tecnica",
    marca: "Laika",
    modelo: "Kosmo H 1319",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: null, // Laika no publica tarifa oficial en España
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
    aprox: [],
    notas:
      "Modelo verificado en la gama oficial Kosmo de Laika (laika.it) y en ficha técnica detallada de distribuidor (caraworld): integral de 6.950x2.320x2.950 mm, Fiat Ducato 2.2 de 103 kW/140 CV con cambio manual (opcional 180 CV y automático), MMA de 3.500 kg (opcional 4.400 kg), 4 plazas de viaje y 4 camas (gemelas traseras + abatible de 193x150 cm), calefacción Truma Combi 6 E, frigorífico de 136 l y depósitos de 110/90 l. Quedan en null: precio oficial ES (Laika no publica tarifa), masa en orden de marcha, carga útil, consumo y emisiones.",
    curiosidades:
      "Con solo 6,95 m de longitud, el Kosmo H 1319 homologa 4 plazas para dormir combinando las camas gemelas traseras (200x80 y 195x80 cm) con una cama abatible de 193x150 cm sobre el salón (fuente: ficha técnica de distribuidor, https://caraworld.hst.edition-software.de/fm/e/021/777/788/cw21777788-de-DE1-expose.pdf).",
    descripcion: `El Laika Kosmo H 1319 es la integral de acceso de la marca toscana, y probablemente la forma más asequible de entrar en el mundo de las integrales europeas con un producto serio. La letra H de su nombre indica lo esencial: es una integral pura, con el parabrisas panorámico y la cabina totalmente integrada en la célula, no una perfilada. Y el 1319 resume su propuesta: una integral de menos de siete metros capaz de dormir a cuatro personas sin renunciar a un dormitorio trasero de verdad. En un mercado donde las integrales suelen dispararse de precio y de tamaño, el Kosmo H juega la carta del equilibrio.

En medidas declara 695 cm de largo, 232 cm de ancho y 295 cm de alto, unas cotas contenidas para una integral que le permiten moverse con más soltura que las grandes de ocho metros y pico. La MMA es de 3.500 kg en la configuración estándar —conducible con el carnet B, un requisito irrenunciable para buena parte del público español—, con la opción de elevarla a 4.400 kg con el chasis Heavy para quien viaje cargado o arrastre remolque. El motor de serie es el Fiat Ducato 2.2 Multijet de 103 kW (140 CV) con cambio manual, con la posibilidad de subir al 2.2 de 180 CV con cambio automático de 8 velocidades para quien haga mucha autopista o circule por zonas de montaña. Es la mecánica más extendida del sector, con repuestos y servicio en cualquier punto de Europa.

La distribución es el punto fuerte del 1319. Atrás, dos camas gemelas longitudinales de 200x80 y 195x80 cm con colchones de calidad y almacenaje inferior; delante, un salón lateral con mesa y asientos enfrentados que aprovecha la anchura de la célula; y sobre el salón, una cama abatible de 193x150 cm que se recoge al techo durante el día y deja el salón diáfano. El resultado: cuatro plazas de dormir reales en 6,95 metros, algo que no todas las integrales compactas consiguen sin recurrir a literas incómodas. La cocina es funcional, con fregadero, cocina de gas y frigorífico de 136 litros, y el baño completo con ducha separada cumple para dos personas en ruta. Los tapizados de serie combinan los tejidos Siena y Liguria en tonos beige-marrón, y el Pack Comfort Kosmo H añade detalles como el suelo de ducha de madera, la alfombra de cabina, la campana extractora, el depósito de grises aislado y calefactado, las paredes del dormitorio en ecopiel y la puerta de habitáculo Premium XL con mando a distancia.

En tecnología y equipamiento, el Kosmo H 1319 monta calefacción Truma Combi 6 E —la versión con resistencias eléctricas además del gas—, depósito de agua limpia de 110 litros y de grises de 90, preinstalación de TV a 12 V con soporte, 4 enchufes de 230 V, 4 USB y uno de 12 V. Los paquetes opcionales permiten escalar: el Pack Chassis Pro añade freno de estacionamiento eléctrico, TPMS, climatizador automático, carga inductiva para el móvil y cuadro digital de 7 pulgadas con faros Full LED; el Pack Multimedia suma el sistema de 9 pulgadas con DAB, Apple CarPlay, Android Auto y cámara trasera; y hay preinstalación solar de 120 W con regulador para quien busque autonomía. Todo ello con la construcción típica de Laika: paredes con aislamiento, muebles con herrajes pensados para durar y la prueba de estanqueidad que la marca aplica al 100% de sus vehículos.

En precio y red comercial en España, la honestidad es obligada: Laika no publica tarifa oficial de precios, así que el precio queda en null. Como referencia de mercado —no oficial—, en Italia se anuncian unidades nuevas del año-modelo 2025-2026 en el entorno de los 80.000-90.000 € según equipamiento, y en España la marca se comercializa a través de su red de distribuidores oficiales, donde el presupuesto se cierra por configuración. Es, en cualquier caso, una de las integrales más accesibles del mercado europeo, claramente por debajo de las gamas Ecovip y Kreos de la propia marca.

Cómo lo verificamos: la existencia del modelo y su encuadre en la gama Kosmo se verificó en la web oficial de Laika (laika.it); los datos técnicos —dimensiones, motor, pesos, camas, calefacción, frigorífico, depósitos y equipamiento de los paquetes— proceden de la ficha técnica detallada publicada por un distribuidor (documento de exposición caraworld del Kosmo H 1319), contrastada con anuncios de unidades nuevas del año-modelo 2025-2026. Todo verificado el 19/10/2026. Lo que la marca no publica —precio oficial, masa en orden de marcha exacta, carga útil— queda en null y así se declara.

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
      { src: "/media/laika-kosmo-h-1319-2026-precio-ficha-tecnica-oficial.webp", alt: "Laika Kosmo H 1319, vista exterior delantera", ancho: 640, alto: 480 },
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
    precioDesde: null, // Laika no publica tarifa oficial en España
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
    aprox: [],
    notas:
      "Modelo verificado en la web oficial de Laika (laika.it, página oficial del Kreos H 5109 dentro de la gama Kreos) y en ficha técnica detallada de distribuidor (caraworld): integral de 7.890x2.320x3.030 mm sobre Fiat Ducato 2.2 de 180 CV con cambio automático, MMA de 4.500 kg (carnet C1), masa en orden de marcha de 4.034 kg, 4 plazas y 4 camas (gemelas traseras de 195x80 + abatible eléctrica de 195x140), calefacción por agua caliente, doble suelo calefactado, chasis AL-KO AMC, frigorífico de 153 l y depósitos de 200/146 l. En julio de 2026 Laika lanzó además la versión H 5109 MB sobre Mercedes Sprinter de 170 CV. Quedan en null: precio oficial ES (Laika no publica tarifa), carga útil, consumo y emisiones.",
    curiosidades:
      "En julio de 2026 Laika presentó el Kreos H 5109 MB, la primera versión de la serie H construida sobre Mercedes-Benz Sprinter (170 CV), junto a la variante Fiat de 180 CV (fuente: https://www.autoyas.com/IT/San-Casciano-in-Val-di-Pesa/359787714140588/LAIKA-Caravans y https://www.campingcarlesite.com/camping-car-neuf/76298-nouvel-integral-laika-kreos-luxe-et-raffinement-sur-mercedes-sprinter-exclusivement).",
    descripcion: `El Laika Kreos H 5109 es la integral con la que la marca toscana juega en la liga de las grandes: casi 7,90 metros, 4.500 kg de MMA y un interior que parece diseñado por un estudio de arquitectura más que por un carrocero. La gama Kreos es el buque insignia de Laika —por encima de Kosmo y Ecovip— y el H 5109 es su representante más equilibrado: camas gemelas traseras, salón central generoso y una dotación técnica pensada para vivir a bordo todo el año, no solo en agosto. Es una autocaravana para quien ya sabe lo que quiere y está dispuesto a pagar por no renunciar a nada.

En medidas declara 789 cm de largo, 232 cm de ancho y 303 cm de alto exterior, con 205 cm de altura interior. Son cotas de liner compacto, y se notan en la carretera: este no es un vehículo para callejear, sino para autopista, áreas amplias y parcelas generosas. La MMA de 4.500 kg obliga al carnet C1 en España —un filtro importante: quien solo tenga el B queda fuera—, pero a cambio deja una masa en orden de marcha declarada de 4.034 kg y, por tanto, un margen de carga razonable para un vehículo de este nivel de equipamiento. La batalla de 470 cm y el chasis AL-KO AMC, específico para autocaravanas, le dan una estabilidad rutera muy superior a la de un chasis de furgoneta estándar.

La habitabilidad es de otro nivel. El dormitorio trasero monta dos camas individuales de 195x80 cm con cabecero tapizado, iluminación ambiental regulable y armarios altos a todo lo ancho; sobre el salón, una cama abatible de accionamiento eléctrico de 195x140 cm completa las cuatro plazas de dormir sin esfuerzo. El salón en L con mesa generosa acoge cómodamente a cuatro comensales, y la cocina es de las serias: mueble amplio con encimera de alta calidad, frigorífico de 153 litros, cocina de gas —con opción de versión «Gran Chef» de tres fuegos con horno— y mucho almacenaje. El cuarto de baño es de los que justifican el precio: ducha wellness independiente con efecto lluvia y grifería metálica, zona de lavabo elegante y WC separado frente a la ducha. El doble suelo calefactado no es solo un truco de marketing: crea un plano de vida a una sola altura, aísla del frío y ofrece un espacio de almacenamiento técnico accesible que en invierno marca la diferencia. El garaje trasero, con suelo antideslizante y raíles de amarre, traga bicicletas, muebles de camping y el resto del equipaje de una vida nómada.

En tecnología y equipamiento, el Kreos H 5109 despliega el arsenal completo de Laika: calefacción por agua caliente (el sistema de referencia para el invierno, silencioso y homogéneo), arquitectura TrueClimate para uso en las cuatro estaciones, doble suelo SystemCore, sistema WaterComfort, muebles en nogal auténtico combinados con superficies gris pizarra (Icy Grey) o azul profundo (Deep Ocean) —hasta 150 combinaciones posibles entre muebles, tapicerías y cojines—, techo y paredes acolchadas, y detalles como el revestimiento de la ducha estilo «cubierta de barco». La dotación eléctrica incluye 6 enchufes de 230 V, 3 de 12 V y 4 USB, y la marca somete cada vehículo a prueba de estanqueidad al 100% con 10 años de garantía. En seguridad y confort de marcha, el Fiat Ducato de 180 CV con cambio automático se combina con los asistentes habituales del segmento.

En mecánica, la versión de referencia monta el Fiat Ducato 2.2 Multijet de 132 kW (180 CV) con cambio automático y tracción delantera, una mecánica sobrada para mover los 4.500 kg con soltura incluso en puertos. Y aquí llega la novedad de 2026: en julio Laika presentó el Kreos H 5109 MB sobre Mercedes-Benz Sprinter con 170 CV, la primera incursión de la serie H en la estrella alemana, que aporta la imagen y la red de servicio de Mercedes a cambio de un sobreprecio. Ambas versiones comparten célula y filosofía; la elección es entre la relación valor/precio del Fiat y el prestigio y la reventa del Mercedes.

En precio y red comercial en España, Laika no publica tarifa oficial, así que el precio queda en null. Como referencias verificadas de prensa europea: la gama Kreos parte en Francia de 153.090 € (versión L 5009 MB) y el H 5109 se anuncia desde 173.290 € en Francia y 178.500 € en Alemania según distribuidores. En España, la venta se articula a través de la red oficial de Laika, y cada unidad se cotiza a medida: con este nivel de personalización (150 combinaciones de interior, paquetes, chasis), el presupuesto final puede variar decenas de miles de euros. Es, sin paliativos, una compra de gama alta.

Cómo lo verificamos: la existencia del modelo y su posición en la gama se verificó en la web oficial de Laika (laika.it, página del Kreos H 5109); los datos técnicos —dimensiones, pesos, motor, camas, calefacción, frigorífico, depósitos, doble suelo y chasis AL-KO— proceden de la ficha técnica detallada de distribuidor (documento caraworld del Kreos H 5109); la llegada de la versión Mercedes Sprinter en julio de 2026 se verificó en la prensa especializada (campingcarlesite.com) y en la comunicación oficial de la marca. Todo verificado el 19/10/2026. Lo que la marca no publica —precio oficial ES, carga útil exacta, consumos— queda en null y así se declara.

Para quién es: para viajeros exigentes con carnet C1 que buscan una integral de lujo para viajes largos y vida a bordo durante todo el año, y que valoran el diseño italiano, el doble suelo calefactado y la calefacción por agua caliente. No es para quien solo tenga el carnet B, ni para quien busque una autocaravana ágil de menos de 7 metros, ni para presupuestos ajustados: el H 5109 juega en la franja de los 170.000 € hacia arriba y cada opcional suma.`,
    pros: [
      "Interior de nivel liner: nogal auténtico, 150 combinaciones de personalización y ducha wellness con lluvia",
      "Doble suelo calefactado SystemCore y calefacción por agua caliente: habitable todo el año",
      "4 plazas de dormir con gemelas traseras y abatible eléctrica, sin montajes nocturnos",
      "Chasis AL-KO AMC específico y 4.500 kg de MMA con margen de carga razonable",
      "Dos mecánicas a elegir en 2026: Fiat Ducato 180 CV automático o Mercedes Sprinter 170 CV",
    ],
    contras: [
      "Obliga al carnet C1 (4.500 kg): fuera del alcance de quien solo tenga el B",
      "Precio de gama alta (desde ~173.000 € en Europa) y Laika no publica tarifa oficial ES",
      "7,89 m de largo: exige parcelas grandes y descarta pueblos y carreteras estrechas",
      "El peso y el tamaño penalizan el consumo frente a integrales compactas",
      "La personalización extrema alarga los plazos de entrega de la unidad a medida",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/laika-kreos-h-5109-2026-precio-ficha-tecnica-oficial.webp", alt: "Laika Kreos H 5109, vista exterior delantera", ancho: 1024, alto: 768 },
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
