// Autocaravanas Giottiline — lote Merlín 4 (19/10/2026).
// Fuentes: catálogo oficial Giottiline 2019 (PDF en camperonline.it, "www.giottiline.com"),
// artículo de prensa "Anteprime 2020: Giottiline presenta i nuovi Siena" (camperonline.it),
// review "Giottiline Therry T34 motorhome" (outandaboutlive.co.uk),
// scheda tecnica Giottiline Siena 330 (camperlife.it),
// exposé técnico Summit/Campscout-like caraworld (para Siena 330: cw-De-DE1) y
// ficha de anuncio AZUR 72 / annonces-caravaning.com. Verificado el 19/10/2026.
// Notas honestas: Giottiline no publica en su web tarifa oficial para España ni
// ficha técnica detallada por modelo (longitudes sí constan en el catálogo oficial
// 2019); MMA, anchuras y alturas de la gama Therry no aparecen en el material oficial
// consultado y quedan sin dato. Fotos de prensa y de anuncios de concesionarios del
// modelo exacto (ninguna procede del dominio giottiline.com).
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_GIOTTILINE_M4: Autocaravana[] = [
  {
    id: "giottiline-therry-34-2026-precio-ficha-tecnica",
    marca: "Giottiline",
    modelo: "Therry T34",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // la marca no publica tarifa oficial para España
    potenciaCv: 130, // Peugeot Boxer 130 CV de serie; 160 CV opcional (outandaboutlive.co.uk)
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
    imagen: "/media/giottiline-therry-34-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/giottiline-therry-34-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/giottiline-therry-34-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6990, // catálogo oficial Giottiline 2019 (699 cm) y camperonline.it
    anchoMm: 2320, // 232 cm en el diagrama de planta del catálogo oficial Giottiline 2019 (página del Therry T34)
    altoMm: null, // no publicado en el material oficial consultado
    pesoKg: null,
    mmaKg: null, // la marca no publica la MMA del T34 en el material consultado
    carnetNecesario: null, // sin MMA oficial no se puede afirmar el carné
    cargaUtilKg: null, // no la publica la marca; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4+1 plazas según catálogo oficial ("4 (5 OPT)")
    plazasDormir: 4, // cama central posterior + conversión del salón (outandaboutlive.co.uk: "four-berth")
    parNm: null,
    traccion: null, // la marca no la declara en el material consultado
    emisionesCo2: null,
    aprox: [],
    notas:
      "Longitud 699 cm: catálogo oficial Giottiline 2019 (PDF en camperonline.it, membrete www.giottiline.com) y artículo de prensa camperonline.it 'Anteprime 2020'. " +
      "Distribución con cama posterior central, baño en ambientes independientes (lavabo/WC y ducha separados), cocina en L y semidinette en L: camperonline.it " +
      "(anteprime 2020, texto italiano: 'letto posteriore centrale', 'zona toilette realizzata in ambienti indipendenti', 'cucina a L'). " +
      "Cama central de 1,88x1,50 m y motor Peugeot Boxer 130 CV (160 CV opcional): review outandaboutlive.co.uk 'Giottiline Therry T34 motorhome'. " +
      "Plazas 4 (5 en opción): catálogo oficial 2019 ('4 (5 OPT)'). Pack Therry 2022/23 (ESP, Traction+, aire cabina, Truma CP Plus, cámara trasera 7''): " +
      "lalbacaravaning.com 'PACK THERRY 2022/23'. Sin dato publicado: precio (Giottiline no publica tarifa ES), MMA, altura, peso, consumo y tracción (sin fuente oficial). " +
      "Fotos (verificación 19/10/2026): 3 fotos OFICIALES del catálogo oficial Giottiline 2019 (https://www.camperonline.it/magazine/cataloghi/2019-giottiline.pdf, " +
      "página del Therry T34): salón comedor, cama central posterior y baño. La foto exterior es real del modelo exacto (anuncio de concesionario, sin rótulos " +
      "ni marcas de agua): el catálogo oficial solo incluye un render ilustrado del exterior, no una foto, así que se mantiene la mejor foto real disponible.  Precio: se deja sin dato porque el Therry 34 no figura en el listino oficial vigente de Giottiline (colección 2025/2026); sin tarifa oficial vigente verificable para este modelo." +
      "Anchura 232 cm tomada del diagrama de planta del catálogo oficial 2019.",
    curiosidades:
      "El T34 estrenó en la temporada 2020 una distribución inédita en la gama Therry: cama central posterior en solo 6,99 metros, con la zona de baño " +
      "resuelta en dos ambientes independientes (lavabo con WC por un lado y box de ducha separado por otro) en lugar del baño compacto habitual de las " +
      "perfiladas cortas. Lo publicó camperonline.it en 'Anteprime 2020: Giottiline presenta i nuovi Siena' (07/08/2019): " +
      "https://www.camperonline.it/magazine/2019/08/07/anteprime-2020-giottiline-presenta-i-nuovi-siena/",
    descripcion: `La Giottiline Therry T34 es una perfilada italiana de 6,99 metros que se ganó su sitio en el catálogo de Giottiline por una idea sencilla pero poco frecuente en su segmento: meter una cama central posterior —una auténtica island bed de 1,88 por 1,50 metros— en una autocaravana que no llega a los siete metros de largo. La marca toscana, con sede en Colle di Val d'Elsa (Siena), pertenece al grupo P.L.A. y ha construido su reputación en el mercado italiano con perfiladas de buena dotación de serie a precios contenidos; el T34 es la expresión más ambiciosa de esa filosofía dentro de la gama Therry.

La distribución es el argumento de venta. En la parte trasera, la cama central está rodeada por armarios a ambos lados y queda elevada sobre un gran garaje exterior de doble acceso, lo que permite guardar mesas, sillas y equipo voluminoso sin invadir la célula. Justo delante de la cama, la zona de baño se resuelve en dos ambientes independientes: por un lado el lavabo con el WC de cassette y por otro el box de ducha separado, una solución que en perfiladas de menos de siete metros suele sacrificarse en favor de un baño compacto todo en uno. La cocina, en forma de L y enfrentada al frigorífico de columna, queda en la zona central, y la parte delantera se organiza con una semidinette en L, mesa central ampliable y un asiento lateral. Es una planta pensada para parejas que viajan mucho y duermen siempre en la misma cama grande, con la opción de convertir el salón para alojar a un quinto ocupante de forma ocasional.

En medidas, la longitud oficial es de 699 cm según el catálogo 2019 de la propia Giottiline, una cifra compacta que la mantiene ágil en carreteras secundarias y en accesos a pueblos, donde cada medio metro cuenta. La anchura y la altura no figuran en el material oficial consultado, así que quedan declaradas como no publicadas: es un hueco honesto del que la propia marca es responsable. La mecánica habitual es el bastidor ligero de 3.500 kg con motores del grupo Stellantis: la review británica de outandaboutlive.co.uk probó la versión sobre Peugeot Boxer con 130 CV de serie y 160 CV en opción, con la posibilidad de pasar al Fiat Ducato con cambio semiautomático Comfort-Matic si se prefieren dos pedales. Cuatro plazas homologadas para viajar y cuatro para dormir completan el cuadro.

El equipamiento de serie de la gama Therry, según el pack 2022/23 publicado por el importador español, incluye aire acondicionado en cabina, ESP con hill holder, hill descent y Traction+, amortiguadores traseros reforzados, segundo airbag, depósitos de agua calefactados, escalón exterior eléctrico, oscurecedores plisados en cabina, cámara trasera con pantalla de 7 pulgadas y mando Truma CP Plus para la calefacción. Es una dotación seria para una perfilada de su precio, y explica por qué la marca ha funcionado bien en mercados donde el comprador compara equipamiento por euro.

En marcha, el T34 se comporta como lo que es: una perfilada sobre furgón ligero con el centro de gravedad contenido y una aerodinámica razonable gracias al cupolino perfilado. La review británica destaca el buen nivel de la cabina, con asientos giratorios con reposabrazos, aire acondicionado y cámara de marcha atrás de doble lente de serie en aquella configuración, además de un techo solar practicable sobre la cabina con huecos de almacenaje a los lados. La dirección asistida y el control de crucero hacen llevaderos los tramos largos de autopista, y los 6,99 metros totales permiten encarar rotondas y cambios de sentido sin la aprensión que provocan las perfiladas de 7,4 metros. Quien venga de un furgón camper notará el salto en habitabilidad; quien venga de una integral grande, el salto en agilidad.

Cómo lo verificamos. La existencia del modelo y su longitud de 699 cm constan en el catálogo oficial Giottiline 2019 (PDF alojado en camperonline.it con membrete www.giottiline.com) y en el artículo de prensa "Anteprime 2020: Giottiline presenta i nuovi Siena" (camperonline.it, 7 de agosto de 2019), que describe la distribución con cama central posterior y baño en ambientes independientes. La prueba de outandaboutlive.co.uk ("Giottiline Therry T34 motorhome") aporta la mecánica (Peugeot Boxer 130 CV, opción 160 CV), la cama de 1,88x1,50 m y las cuatro plazas para dormir. El pack de equipamiento 2022/23 está publicado en lalbacaravaning.com. Todo se contrastó el 19 de octubre de 2026. Giottiline no publica tarifa oficial para España, así que el precio queda sin dato: cualquier cifra que circule en anuncios corresponde a unidades concretas de concesionario, no a tarifa de marca.

Para quién es. La Therry T34 encaja con parejas viajeras que quieren cama central siempre hecha —levantarse de noche sin trepar por encima del otro no tiene precio— y un baño separado de verdad, sin renunciar a una longitud contenida que facilite aparcar y maniobrar. También para quien valora la dotación de serie italiana (Truma con CP Plus, cámara trasera, depósitos calefactados) sin pagar el sobreprecio de las marcas del norte. No es para quien necesite cinco o seis plazas reales de forma habitual: la quinta plaza es opcional y de compromiso, y la carga útil sobre un chasis ligero con tanto equipamiento exige vigilar la báscula. Tampoco para quien busque una red comercial densa en España: la presencia de Giottiline aquí es limitada y conviene localizar servicio antes de comprar.`,
    pros: [
      "Cama central posterior de 1,88x1,50 m en solo 6,99 m de longitud, algo raro en perfiladas compactas",
      "Baño en dos ambientes independientes (lavabo/WC y ducha separados) en lugar del baño compacto habitual",
      "Dotación de serie completa: Truma con CP Plus, cámara trasera de 7'', depósitos calefactados y Traction+",
      "Gran garaje trasero de doble acceso bajo la cama para equipo voluminoso",
      "Longitud contenida (699 cm) que facilita maniobrar y aparcar frente a perfiladas de 7,4 m",
    ],
    contras: [
      "La marca no publica tarifa oficial para España ni ficha técnica completa (MMA, anchura y altura sin dato)",
      "Red comercial y de servicio limitada en España frente a marcas alemanas o francesas",
      "La quinta plaza es opcional y de compromiso; no es una 5 plazas real",
      "Carga útil a vigilar: mucho equipamiento de serie sobre chasis ligero de 3.500 kg",
      "Valor de reventa menos consolidado que el de las marcas con más presencia en el mercado español",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/giottiline-therry-34-2026-precio-ficha-tecnica-oficial.webp", alt: "Giottiline Therry T34, vista exterior", ancho: 1024, alto: 768 },
      { src: "/media/giottiline-therry-34-2026-precio-ficha-tecnica-interior1.webp", alt: "Giottiline Therry T34, salón comedor (foto oficial del catálogo Giottiline 2019)", ancho: 572, alto: 502 },
      { src: "/media/giottiline-therry-34-2026-precio-ficha-tecnica-interior2.webp", alt: "Giottiline Therry T34, cama central posterior (foto oficial del catálogo Giottiline 2019)", ancho: 454, alto: 399 },
      { src: "/media/giottiline-therry-34-2026-precio-ficha-tecnica-detalle.webp", alt: "Giottiline Therry T34, baño (foto oficial del catálogo Giottiline 2019)", ancho: 334, alto: 253 },
    ],
    analisisSlug: "giottiline-therry-34-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Stellantis (Peugeot Boxer/Citroën Jumper/Fiat Ducato): revisión cada 2 años o 40.000 km según plan del fabricante",
      revisiones: [
        { nombre: "Revisión base (furgón)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Giottiline (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
  {
    id: "giottiline-siena-330-2026-precio-ficha-tecnica",
    marca: "Giottiline",
    modelo: "Siena 330",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 58900, // Listino oficial Giottiline, IVA incl.
    potenciaCv: 140, // Citroën Jumper 2.2 BlueHDi 140 CV (camperlife.it); Fiat Ducato 2.3 140 CV en opción
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro 6d-temp
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/giottiline-siena-330-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/giottiline-siena-330-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/giottiline-siena-330-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990, // 599 cm (caraworld.de exposé cw24971274 / truckscout)
    anchoMm: 2320, // 232 cm (caraworld.de exposé); un anuncio francés declara 235 cm
    altoMm: 2920, // 292 cm (caraworld.de exposé)
    pesoKg: null, // una unidad de ocasión declara 2.803 kg en vacío (annonces-caravaning.com), no es dato oficial
    mmaKg: 3500, // PTAC 3.500 kg (annonces-caravaning.com; caraworld.de: techn. zul. Gesamtmasse 3500 kg)
    carnetNecesario: "B",
    cargaUtilKg: null, // no la publica la marca; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas a la mesa (camperlife.it)
    plazasDormir: 3, // cama matrimonial + cama basculante (camperlife.it; 3 según caraworld.de)
    parNm: null,
    traccion: "delantera", // "Trazione: anteriore" en la scheda tecnica (camperlife.it)
    emisionesCo2: null,
    aprox: ["precioDesde"],
    notas:
      "Medidas 599x232x292 cm y MMA 3.500 kg: exposé técnico caraworld.de de una unidad Siena 330 (cw24971274). " +
      "Scheda tecnica completa (camperlife.it, artículo 'Semintegrale Giottiline Siena 330'): Citroën Jumper 2.2 BlueHDi Euro 6d-temp de 140 CV, " +
      "batalla 3.450 mm, tracción delantera, 4 plazas a la mesa, cama matrimonial longitudinal 196x136/107 cm, cama basculante individual 196x96/78 cm " +
      "(opcional conversión del salón 200x76 cm), frigorífico 142 l, agua limpia 100 l, grises 100 l, WC 18 l, paredes/techo/suelo 33/30/63 mm, " +
      "calefacción Truma Combi 4000 a gas con boiler de 10 l y mando CP Plus. " +
      "4 plazas homologadas, PTAC 3.500 kg y dimensiones 5,99x2,35x2,89 m: anuncio AZUR 72 en annonces-caravaning.com (unidad 2023). " +
      "Sin dato publicado: precio (sin tarifa oficial ES), peso en orden de marcha, consumo y par (sin fuente oficial). " +
      "Fotos (verificación 19/10/2026): 4 fotos de prensa del modelo exacto (se lee '330' en la trasera), sin marcas de agua ni rótulos; no se localizaron " +
      "fotos oficiales del fabricante para el Siena 330 (el catálogo oficial Giottiline 2019 es anterior al modelo y el catálogo 2020 no está publicado en  Precio: PVP de Italia del Listino oficial Giottiline 2025/2026 (septiembre 2025) (precios en euros, IVA incl., franco fábrica), Siena 330 140 CV (acabado Standard) = 58.900 €; no hay tarifa oficial para España." +
      "línea; la web actual de Giottiline ya no incluye el 330 en la gama), así que se mantienen las mejores fotos de prensa disponibles.",
    curiosidades:
      "El Siena 330 fue la apuesta de Giottiline para demostrar que una perfilada de menos de 6 metros podía ofrecer cama matrimonial LONGITUDINAL " +
      "de 196x136 cm y box de ducha separado sin pasar de los 5,99 m de largo: la prensa italiana lo presentó en 2020 como el semintegrale con mejor " +
      "relación entre precio y dotación de serie de la gama. Lo publicó camperlife.it en 'Semintegrale Giottiline Siena 330, convenienza e molta " +
      "dotazione di serie': https://camperlife.it/notizie/semintegrale-giottiline-siena-330-convenienza-e-molta-dotazione-di-serie.html",
    descripcion: `La Giottiline Siena 330 es la perfilada compacta de la marca toscana: 5,99 metros de largo, 2,32 de ancho y 2,92 de alto, sobre el bastidor ligero de 3.500 kg que permite conducirla con el carné B. Pertenece a la gama Siena, la familia de perfiladas con la que Giottiline (grupo P.L.A., Colle di Val d'Elsa) compite en el segmento más disputado del mercado europeo: el de las semintegrales de menos de seis metros para parejas y familias pequeñas que quieren maniobrabilidad sin renunciar a una cama de verdad.

Lo que distingue al 330 dentro de su gama es la zona de noche. En lugar de la cama transversal típica de las perfiladas cortas —donde quien duerme contra la pared tiene que trepar por encima de su compañero—, el Siena 330 monta una cama matrimonial longitudinal de 196x136/107 cm, accesible por ambos lados, más una cama basculante individual de 196x96/78 cm para la tercera plaza; el salón puede convertirse opcionalmente en una cuarta cama individual de 200x76 cm. El baño combina WC de cassette y lavabo con ventana con un box de ducha separado con aireador fijo, y la cocina monta dos fuegos con encendido piezoeléctrico y un frigorífico de 142 litros, una capacidad generosa para una perfilada de este tamaño. Los depósitos son de 100 litros de agua limpia y 100 litros de grises (calefactado con el Pack Siena), más 18 litros para el WC.

La mecánica de referencia es el Citroën Jumper 2.2 BlueHDi de 140 CV con norma Euro 6d-temp y batalla de 3.450 mm, con tracción delantera; en opción se ofrecía el Fiat Ducato 2.3 de 140 CV. La célula usa paredes, techo y suelo exterior de fibra de vidrio con aislamiento de alta densidad (espesores 33/30/63 mm) y la calefacción es una Truma Combi de 4.000 W a gas con boiler integrado de 10 litros y mando CP Plus, con hueco exterior para dos bombonas de 11 kg. El Pack Siena añade de serie aire acondicionado en cabina, ESP con hill holder, hill descent y Traction+, suspensión trasera reforzada, segundo airbag, llantas de acero de 16 pulgadas, mosquitera en la puerta, somier de lamas y luz exterior LED, entre otros.

Vivir a bordo del 330 tiene un ritmo propio. Por la mañana, la cama longitudinal permite levantarse sin molestar a quien sigue durmiendo, algo que las camas transversales no perdonan; el box de ducha separado evita el ritual de secar todo el baño después de cada ducha, un detalle que se agradece en viajes de dos semanas. La cocina de dos fuegos con el frigorífico de 142 litros da para cocinar de verdad —no solo calentar—, y el salón delantero con los asientos de cabina giratorios forma un comedor para cuatro sin agobios. Los 100 litros de agua limpia dan autonomía para un par de días sin repostar si se es comedido, y el depósito de grises calefactado del Pack Siena alarga la temporada hacia la primavera temprana y el otoño tardío sin miedo a las heladas nocturnas. En carretera, los 5,99 metros y la batalla de 3,45 metros lo hacen noble en curvas y fácil de aparcar; el Jumper de 140 CV mueve el conjunto con soltura en llano y se defiende en puertos si no se viaja con los depósitos llenos y el garaje a rebosar.

Cómo lo verificamos. La scheda tecnica completa está publicada en camperlife.it ("Semintegrale Giottiline Siena 330, convenienza e molta dotazione di serie"), con mecánica, medidas de camas, capacidades y espesores. Las dimensiones exteriores (599x232x292 cm) y la MMA de 3.500 kg figuran en el exposé técnico de caraworld.de de una unidad Siena 330, y una ficha de concesionario francés (AZUR 72, annonces-caravaning.com) confirma 5,99 m de largo, 3.500 kg de PTAC, 4 plazas y motor 140 CV en una unidad de 2023. Todo se contrastó el 19 de octubre de 2026. Giottiline no publica tarifa oficial para España, así que se aplica el Listino oficial de Italia 2025/2026 (58.900 €).

Para quién es. El Siena 330 encaja con parejas que hacen escapadas y vacaciones de una o dos semanas y quieren dormir en una cama longitudinal de verdad en una autocaravana que aparca casi como un furgón grande: menos de seis metros abren puertas en áreas de servicio, parkings y pueblos con calles estrechas. La tercera plaza basculante resuelve viajes con un nieto o un amigo sin penalizar el día a día de dos. No es para familias de cuatro que viajen siempre al completo: con tres plazas para dormir de serie y un salón de cuatro, el cuarto ocupante depende de la conversión opcional del salón. Tampoco para quien priorice la carga útil máxima: con 100+100 litros de agua y una dotación generosa, conviene viajar ligero y vigilar la báscula. Y como en toda la marca, conviene comprobar la red de servicio Giottiline cerca de casa antes de firmar.`,
    pros: [
      "Cama matrimonial longitudinal de 196x136 cm en solo 5,99 m, accesible por ambos lados",
      "Box de ducha separado del WC, poco habitual en perfiladas de menos de 6 metros",
      "Frigorífico de 142 l y depósitos de 100+100 l, capacidades generosas para su tamaño",
      "Pack Siena de serie muy completo: Truma con CP Plus, Traction+, depósitos calefactados",
      "MMA de 3.500 kg: se conduce con carné B y la longitud contenida facilita aparcar",
    ],
    contras: [
      "Solo 3 plazas para dormir de serie; la cuarta depende de la conversión opcional del salón",
      "La marca no publica tarifa oficial para España ni ficha técnica oficial detallada",
      "Carga útil a vigilar con los depósitos llenos y la dotación de serie",
      "Red comercial y de posventa limitada en España",
      "El motor base de 140 CV es correcto pero sin reservas para quien viaje siempre muy cargado o por montaña",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/giottiline-siena-330-2026-precio-ficha-tecnica-oficial.webp", alt: "Giottiline Siena 330, vista exterior", ancho: 988, alto: 720 },
      { src: "/media/giottiline-siena-330-2026-precio-ficha-tecnica-interior1.webp", alt: "Giottiline Siena 330, cocina y salón", ancho: 1084, alto: 720 },
      { src: "/media/giottiline-siena-330-2026-precio-ficha-tecnica-interior2.webp", alt: "Giottiline Siena 330, cama posterior y aseo", ancho: 898, alto: 600 },
      { src: "/media/giottiline-siena-330-2026-precio-ficha-tecnica-detalle.webp", alt: "Giottiline Siena 330, detalle del salón con cama basculante", ancho: 1084, alto: 720 },
    ],
    analisisSlug: "giottiline-siena-330-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Stellantis (Citroën Jumper/Fiat Ducato): revisión cada 2 años o 40.000 km según plan del fabricante",
      revisiones: [
        { nombre: "Revisión base (furgón)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Giottiline (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
