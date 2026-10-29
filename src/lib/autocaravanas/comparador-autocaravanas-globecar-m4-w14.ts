// Autocaravanas Globecar — lote Merlín 4 (19/10/2026).
// Fuentes: exposés técnicos caraworld.de (Summit 600 Plus, Campscout Einzelbetten),
// catálogo oficial Globecar 2011 (PDF en camperonline.it, "campscout: 6358x2050x2650 mm"),
// fichas de concesionarios (CSL Reisemobile Oberpframmern, truckscout24.fr — Summit 600 Plus MJ 2026;
// CBRW Syke, mobile.de — Campscout B), globecar.co.uk (gama Summit).
// Verificado el 19/10/2026.
// Notas honestas: Globecar (marca del grupo Pössl) no publica tarifa oficial para España;
// los precios que circulan son de concesionarios alemanes. La carga útil no la publica
// la marca y queda sin dato. Fotos: render oficial de concesionario y fotos de prensa del
// modelo exacto; ninguna procede del dominio del fabricante.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_GLOBECAR_M4: Autocaravana[] = [
  {
    id: "globecar-summit-600-plus-2026-precio-ficha-tecnica",
    marca: "Globecar",
    modelo: "Summit 600 Plus",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: null, // Globecar no publica tarifa oficial para España
    potenciaCv: 140, // Citroën Jumper 2.2 MJet 140 CV (CSL MJ 2026); Fiat Ducato 2.2 140 CV
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
    imagen: "/media/globecar-summit-600-plus-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/globecar-summit-600-plus-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/globecar-summit-600-plus-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990, // 5.990 mm (caraworld.de, truckscout24.fr, múltiples concesionarios)
    anchoMm: 2050, // 2.050 mm (caraworld.de exposé)
    altoMm: 2650, // 2.650 mm en la versión MJ 2026 (CSL/truckscout24.fr); un exposé anterior declara 2.580 mm
    pesoKg: null,
    mmaKg: 3500, // 3.500 kg (caraworld.de, truckscout24)
    carnetNecesario: "B",
    cargaUtilKg: null, // no la publica la marca; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas con cinturón (caraworld.de exposé)
    plazasDormir: 3, // cama trasera transversal + 3ª plaza con mesa alternativa (caraworld.de)
    parNm: null,
    traccion: "delantera", // "Frontantrieb"/"traction avant" en las fichas técnicas de concesionario
    emisionesCo2: null,
    aprox: [],
    notas:
      "Medidas 5.990x2.050 mm y MMA 3.500 kg: exposé caraworld.de de una unidad Summit 600 Plus (cw24971274) y múltiples fichas de concesionario " +
      "(truckscout24.fr/es). Altura 2.650 mm: ficha CSL Reisemobile 'Summit 600 Plus MJ 2026' (truckscout24.fr); un exposé de una unidad anterior declara 2.580 mm. " +
      "Motor Citroën Jumper 2.2 MJet 140 CV, chasis ligero 3,5 t, cambio manual de 6 marchas, depósito de 90 l: CSL Reisemobile (truckscout24.fr). " +
      "Camas: trasera transversal 196x160-147 cm y central 196x70 cm; 4 cinturones; calefacción Truma Combi 4; frigorífico 80 l + congelador 10 l; " +
      "agua limpia 105 l y grises 100 l; batería 95 Ah: exposé caraworld.de. " +
      "Baño pivotante ('salle de bain pivotante', seña de la gama Summit) y frigorífico de compresor grande al final de la cocina: CSL Reisemobile. " +
      "Sin dato publicado: precio oficial ES (Globecar no publica tarifa para España; los concesionarios alemanes anuncian el Plus H-Line desde ~58.990 €,  Precio: se deja sin dato porque el precio base de Pössl/Globecar (Pössl Group) solo se ofrece a través de su configurador oficial en línea y no existe una tarifa oficial abierta (PDF o web) verificable para este modelo fuera de España; la tarifa oficial española localizada cubre solo la gama VAN LINE (Vanster/Campster)." +
      "precio de mercado alemán, no tarifa de marca), peso, consumo y carga útil.",
    curiosidades:
      "La seña de identidad de la gama Summit de Globecar es su baño pivotante: en lugar de un cuarto de baño fijo que roba medio metro de pasillo, " +
      "el módulo del WC gira y libera el espacio para ducharse con holgura, una solución que la marca mantiene como rasgo distintivo de la serie. " +
      "Lo describe así el concesionario oficial CSL Reisemobile en su ficha del Summit 600 Plus (año modelo 2026, truckscout24.fr): " +
      "'La particularité de la gamme Summit est la magnifique salle de bain pivotante'. " +
      "https://www.truckscout24.fr/main/search/index?search-word=p%C3%B6ssl+summit+600+plus++%7C+winterpaket+%7C+solar+%7C+markise",
    descripcion: `El Globecar Summit 600 Plus es el camper gran volumen de la marca de acceso del grupo Pössl: 5,99 metros de largo sobre furgón, 2,05 de ancho y 3.500 kg de MMA, lo que permite conducirlo con el carné B. Globecar nació como la puerta de entrada al universo Pössl —el especialista alemán en campers— y el Summit es su serie más equipada, con el acabado H-Line y una lista de equipamiento de serie que en otras marcas sería opcional. El "Plus" añade sobre el Summit 600 estándar elementos como el climatizador automático, las llantas de aleación, el volante de cuero, el cuadro digital y el paquete eléctrico de la célula.

La distribución es la clásica del camper de 6 metros bien resuelta: en la parte trasera, una gran cama transversal de 196x160-147 cm que aprovecha todo el ancho del furgón; en el centro, el bloque de cocina con fregadero, cocina de dos fuegos y un gran frigorífico de compresor instalado al final del mueble, más práctico y eficiente que los de absorción; y delante, la dinette lateral con mesa giratoria y los asientos de cabina giratorios. La tercera plaza para dormir se consigue con la ampliación de la cama y una mesa alternativa, una solución sencilla que evita la cama basculante y su peso. El baño es el famoso módulo pivotante de la gama Summit: el WC gira para dejar paso a una ducha con espacio real, en lugar del habitual cubículo donde apenas caben los codos.

La base mecánica del año modelo 2026 es el Citroën Jumper 2.2 MJet de 140 CV con chasis ligero de 3,5 toneladas y cambio manual de seis marchas, con depósito de 90 litros que da para unos 900 kilómetros entre repostajes a ritmo tranquilo. El equipamiento Plus incluye de serie parachoques pintados, llantas de aleación de 16 pulgadas, faros antiniebla con función de giro, retrovisores eléctricos y calefactados, asientos Captain Chair giratorios, luz diurna LED, Traction+, asistente de viento lateral, oscurecedor de cabina, alternador reforzado y preinstalación de radio con altavoces. La célula suma el panel de control Truma CP Plus, tomas de 12 V y 230 V, ventanas Seitz S4 de lujo y claraboya SkyRoof practicable. La calefacción es una Truma Combi 4 y los depósitos son de 105 litros de agua limpia y 100 de grises, con batería de célula de 95 Ah.

En el día a día, el Summit 600 Plus se vive como un pequeño apartamento rodante. La cama transversal trasera queda siempre hecha y se accede a ella por un lateral, sin escaladas; debajo queda un hueco de almacenaje que, con las camas apilables de la versión Plus, crece aún más para bicicletas plegables o el equipo de playa. Cocinar es cómodo gracias a la encimera corrida y al frigorífico de compresor, que mantiene la temperatura incluso con 35 grados fuera, algo que los de absorción no siempre consiguen. El baño pivotante cambia la experiencia de la ducha: girar el módulo del WC deja un plato de ducha con espacio para moverse, y al terminar todo vuelve a su sitio en segundos. En carretera, el Jumper de 140 CV mueve los 3.500 kg con dignidad; no es un deportivo, pero el par del 2.2 diésel y el cambio de seis marchas permiten cruceros de 110-120 km/h sin forzar, y el Traction+ ayuda en salidas de áreas con gravilla o hierba mojada.

Cómo lo verificamos. Las medidas (5.990x2.050 mm), la MMA de 3.500 kg, las camas, la calefacción Truma Combi 4, el frigorífico de 80+10 l y los depósitos de 105/100 l figuran en el exposé técnico de caraworld.de de una unidad Summit 600 Plus. La ficha del concesionario CSL Reisemobile para el año modelo 2026 (truckscout24.fr) confirma el motor Citroën 2.2 de 140 CV, el chasis ligero, la altura de 2,65 m, el depósito de 90 l, el baño pivotante y el frigorífico de compresor. La dotación del paquete Plus está detallada en una ficha de truckscout24.es. Todo se contrastó el 19 de octubre de 2026. Globecar no publica tarifa oficial para España: el precio queda sin dato y los ~58.990 € que anuncian concesionarios alemanes son precio de mercado alemán, no tarifa de marca.

Para quién es. El Summit 600 Plus encaja con quien quiere un camper de 6 metros "llave en mano": comprarlo, subir las maletas y salir, sin pasar por la lista de opcionales. Es ideal para parejas que viajan a menudo y valoran la cama transversal siempre hecha, el baño pivotante con ducha usable y el frigorífico de compresor que enfría de verdad en verano. La tercera plaza ocasional resuelve escapadas con un nieto o un amigo. No es para quien necesite cuatro plazas reales permanentes: el tercer y cuarto ocupante dependen de la ampliación de la cama. Tampoco para quien busque la máxima discreción urbana: con 2,65 m de alto y la decoración Summit se nota que es una autocaravana. Y ojo a la báscula: con tanto equipamiento de serie sobre 3.500 kg, la carga útil real hay que calcularla unidad por unidad con la ficha del concesionario.`,
    pros: [
      "Baño pivotante, seña de la gama Summit: ducha con espacio real en un camper de 6 m",
      "Cama transversal trasera de 196x160 cm siempre hecha, sin montajes diarios",
      "Gran frigorífico de compresor al final de la cocina, más eficiente que los de absorción",
      "Equipamiento Plus de serie muy completo: llantas, cuadro digital, Traction+, CP Plus",
      "MMA de 3.500 kg con carné B y 90 l de depósito para gran autonomía",
    ],
    contras: [
      "Sin tarifa oficial para España: el precio real depende de cada concesionario y país",
      "Solo 3 plazas para dormir; la cuarta no existe ni en opción",
      "Altura de 2,65 m: poco discreto y a tener en cuenta en parkings con límite",
      "Carga útil a comprobar unidad por unidad con tanto equipamiento de serie",
      "El cambio manual de 6 marchas es el de serie; el automático es un sobreprecio notable",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/globecar-summit-600-plus-2026-precio-ficha-tecnica-oficial.webp", alt: "Globecar Summit 600 Plus, vista exterior", ancho: 1600, alto: 806 },
      { src: "/media/globecar-summit-600-plus-2026-precio-ficha-tecnica-interior1.webp", alt: "Globecar Summit 600 Plus, salón y cocina", ancho: 1200, alto: 800 },
      { src: "/media/globecar-summit-600-plus-2026-precio-ficha-tecnica-interior2.webp", alt: "Globecar Summit 600 Plus, comedor y cocina", ancho: 1200, alto: 800 },
      { src: "/media/globecar-summit-600-plus-2026-precio-ficha-tecnica-detalle.webp", alt: "Globecar Summit 600 Plus, detalle del salón", ancho: 1200, alto: 800 },
    ],
    analisisSlug: "globecar-summit-600-plus-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Stellantis (Citroën Jumper/Fiat Ducato): revisión cada 2 años o 40.000 km según plan del fabricante",
      revisiones: [
        { nombre: "Revisión base (furgón)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Globecar/Pössl (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
  {
    id: "globecar-campscout-b-2026-precio-ficha-tecnica",
    marca: "Globecar",
    modelo: "CampScout B",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: null, // Globecar no publica tarifa oficial para España
    potenciaCv: null, // la marca no publica el motor en el catálogo consultado; las unidades de mercado montan Fiat/Citroën 2.2 de 140-165 CV
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
    imagen: "/media/globecar-campscout-b-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/globecar-campscout-b-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/globecar-campscout-b-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6360, // 6.360 mm en las fichas de mercado (mobile.de); 6.358 mm en el catálogo oficial Globecar 2011
    anchoMm: 2050, // 2.050 mm (catálogo oficial Globecar 2011)
    altoMm: 2650, // 2.650 mm (catálogo oficial Globecar 2011); un exposé declara 2.720 mm
    pesoKg: null, // 2.995 kg es la masa EN ORDEN DE MARCHA (catálogo oficial Globecar 2011), no la carga útil; la marca no publica la carga útil
    mmaKg: 3500, // 3.500 kg (catálogo oficial y fichas de mercado)
    carnetNecesario: "B",
    cargaUtilKg: null, // no la publica la marca; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas homologadas (catálogo oficial y exposé caraworld.de)
    plazasDormir: 3, // 2 camas gemelas + 1 plaza opcional (catálogo oficial: "2 (+1 optional)")
    parNm: null,
    traccion: "delantera", // tracción delantera en las fichas de mercado (Fiat Ducato/Citroën Jumper)
    emisionesCo2: null,
    aprox: [],
    notas:
      "Medidas 6.358x2.050x2.650 mm, altura interior 1.905 mm, 4 plazas, camas gemelas de 2000x800 y 1900x800 mm (unibles en cama doble de " +
      "2000/1900x1900 mm), 2 (+1 opcional) plazas para dormir, agua 100/92 l, gas 2x11 kg, masa en orden de marcha 2.995 kg y MMA 3.500 kg: " +
      "catálogo oficial Globecar 2011 (PDF en camperonline.it). " +
      "Longitud 6.360-6.363 mm y MMA 3.500 kg en unidades de mercado: mobile.de (p. ej. 'Globecar Campscout B Navi, Busbiker Einzelbetten', CBRW Syke) " +
      "y exposé caraworld.de ('Globecar Campscout/Einzelbetten', 636x205x272 cm, 4 cinturones, Fiat Ducato). " +
      "Sin dato publicado: precio oficial ES, potencia (el catálogo 2011 citaba 2.2/2.3 de 120 CV y 3.0 de 157 CV, motores descatalogados; las unidades " +
      "actuales montan Fiat/Citroën 2.2 de 140-165 CV según mercado), consumo y carga útil. " +
      "Verificación 19/10/2026: los 2.995 kg del catálogo oficial son la MASA EN ORDEN DE MARCHA, no la carga útil; la marca no publica la carga útil, " +
      "así que el peso queda sin dato: la marca no lo publica. Fotos: las 4 son del modelo exacto (camas gemelas), 2 de prensa y 2 de anuncios de concesionario " +
      "sin rótulos ni marcas de agua; el catálogo oficial Globecar 2011 (https://www.camperonline.it/magazine/cataloghi/globecar-2011.pdf) solo contiene  Precio: se deja sin dato porque el precio base de Pössl/Globecar (Pössl Group) solo se ofrece a través de su configurador oficial en línea y no existe una tarifa oficial abierta (PDF o web) verificable para este modelo fuera de España; la tarifa oficial española localizada cubre solo la gama VAN LINE (Vanster/Campster)." +
      "miniaturas de ~180 px de los interiores, inutilizables, y una ilustración del exterior, así que se mantienen las mejores fotos reales disponibles.",
    curiosidades:
      "El CampScout B es la versión 'de camas gemelas' del Campscout, y su truco está en el catálogo: las dos camas individuales traseras " +
      "(2000x800 y 1900x800 mm) pueden unirse para formar una única cama doble de hasta 190 cm de ancho, de modo que la misma célula sirve " +
      "para dormir separados o juntos sin cambiar de modelo. Lo publica el catálogo oficial Globecar 2011: 'I letti gemelli possono essere " +
      "uniti a letto matrimoniale' y 'Letti singoli uniti a matrimoniale: 2000/1900 x 1900 mm'. " +
      "https://www.camperonline.it/magazine/cataloghi/globecar-2011.pdf",
    descripcion: `El Globecar CampScout B es el camper de camas gemelas de la marca de acceso del grupo Pössl: 6,36 metros de largo, 2,05 de ancho y 3.500 kg de MMA para conducirlo con el carné B. La letra B identifica la distribución con dos camas individuales longitudinales en la parte trasera, la planta favorita de las parejas que prefieren dormir cada uno en su cama —o unirlas en una gran doble— sin renunciar a un salón completo delante. Es un concepto veterano en el catálogo Globecar que ha sobrevivido a todas las renovaciones de la gama porque resuelve el viaje en pareja mejor que casi ninguna otra planta en 6,36 metros.

La zona de noche es el corazón del B. Las dos camas gemelas miden 2000x800 y 1900x800 mm y, con el suplemento central, se unen en una cama doble de hasta 190 cm de ancho: la misma célula vale para dormir separados o juntos, y el cambio se hace en un minuto. Debajo de las camas queda un gran espacio de almacenaje accesible desde el interior y, en muchas configuraciones, también desde el exterior, que hace las veces de garaje para el equipo de dos personas. Delante, la semidinette con los asientos de cabina giratorios forma el salón-comedor, la cocina equipa lo necesario para cocinar de verdad y el baño, generoso para un camper —el catálogo histórico lo describía como "enorme"—, ofrece la comodidad que en otros campers de esta eslora se sacrifica. La tercera plaza para dormir se resuelve con la mesa alternativa del salón.

En cotas, el catálogo oficial declara 6.358 mm de largo, 2.050 de ancho, 2.650 de alto y una altura interior de 1.905 mm, suficiente para moverse erguido sin agacharse. La masa en orden de marcha declarada es de 2.995 kg para una MMA de 3.500 kg, y los depósitos son de unos 100 litros de agua limpia y 92 de grises, con hueco para dos bombonas de 11 kg. La mecánica actual en el mercado es el Fiat Ducato o el Citroën Jumper 2.2 de 140 a 165 CV según año y configuración; el catálogo histórico citaba los antiguos 2.2/2.3 de 120 CV y el 3.0 de 157 CV, hoy descatalogados, así que la potencia queda sin dato a falta de dato oficial vigente.

Vivir en el B tiene ventajas que solo se aprecian con los kilómetros. Cada uno hace su cama por la mañana sin deshacer la del otro; por la noche, nadie trepa por encima de nadie. El pasillo central entre las camas sirve de vestidor improvisado y de acceso al almacenaje inferior, donde caben dos bicicletas plegables, las sillas y la mesa de exterior sin pelear con el portón. La semidinette delantera, con los asientos de cabina girados, da para comer, jugar a las cartas o teletrabajar con el portátil apoyado en la mesa. Los 100 litros de agua permiten dos o tres días de autonomía siendo razonables, y el baño de buen tamaño —con ducha separada del WC en muchas configuraciones— evita la sensación de aseo de avión que lastra a otros campers. En marcha, los 6,36 metros se notan estables en autopista y aún manejables en pueblos; el 2.2 diésel moderno, con sus 140-165 CV, mueve el conjunto sin agobios incluso cargado. La batalla larga del furgón de 6,36 m da un aplomo notable con viento lateral, y la dirección asistida con el radio de giro del Ducato permite callejear sin dramas.

Cómo lo verificamos. Las medidas, las camas (2000x800, 1900x800 y 2000/1900x1900 unidas), las plazas (4 para viajar, 2+1 para dormir), los depósitos (100/92 l), el gas (2x11 kg), la masa en orden de marcha (2.995 kg) y la MMA (3.500 kg) constan en el catálogo oficial Globecar 2011 (PDF en camperonline.it). La longitud de 6.360-6.363 mm y la MMA de 3.500 kg en unidades reales se confirman en mobile.de ("Globecar Campscout B Navi, Busbiker Einzelbetten") y en el exposé de caraworld.de. Todo se contrastó el 19 de octubre de 2026. Globecar no publica tarifa oficial para España: el precio queda sin dato.

Para quién es. El CampScout B es para parejas que duermen mejor cada uno en su cama —por horarios, por ronquidos o por manías— y no quieren renunciar a la opción de unirlas cuando les apetezca: es la planta más flexible del segmento. También para quien viaja con mucho equipo, porque el hueco bajo las camas gemelas traga lo que en otros campers no cabe. Con 6,36 metros sigue siendo manejable y cabe en la mayoría de áreas. No es para familias: la tercera plaza es ocasional y no hay cama para un cuarto ocupante. Tampoco para quien busque la última tecnología de célula: el concepto es clásico y eficaz, no vanguardista. Y como en todo Globecar, el precio real lo pone cada concesionario: conviene pedir la ficha con la carga útil de la unidad concreta antes de firmar.`,
    pros: [
      "Camas gemelas de 2000x800 y 1900x800 mm unibles en una doble de 190 cm de ancho: la planta más flexible",
      "Gran espacio de almacenaje bajo las camas, accesible desde el interior",
      "Baño generoso para un camper, sin el cubículo mínimo de la competencia",
      "Altura interior de 1.905 mm: se camina erguido",
      "MMA de 3.500 kg con carné B y concepto probado durante años en el catálogo",
    ],
    contras: [
      "Sin tarifa oficial para España: precio a negociar con cada concesionario",
      "Solo 2+1 plazas para dormir; no hay opción para un cuarto ocupante",
      "La marca no publica la potencia vigente en su catálogo (las unidades montan 140-165 CV según mercado)",
      "Diseño de célula clásico, sin las novedades de las gamas superiores del grupo",
      "Con 6,36 m y el equipamiento, la carga útil real hay que comprobarla en la ficha de la unidad",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/globecar-campscout-b-2026-precio-ficha-tecnica-oficial.webp", alt: "Globecar CampScout B, vista exterior", ancho: 1024, alto: 768 },
      { src: "/media/globecar-campscout-b-2026-precio-ficha-tecnica-interior1.webp", alt: "Globecar CampScout B, camas gemelas", ancho: 999, alto: 666 },
      { src: "/media/globecar-campscout-b-2026-precio-ficha-tecnica-interior2.webp", alt: "Globecar CampScout B, dormitorio con camas gemelas", ancho: 1200, alto: 801 },
      { src: "/media/globecar-campscout-b-2026-precio-ficha-tecnica-detalle.webp", alt: "Globecar CampScout B, detalle de las camas traseras", ancho: 1024, alto: 768 },
    ],
    analisisSlug: "globecar-campscout-b-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Stellantis (Fiat Ducato/Citroën Jumper): revisión cada 2 años o 40.000 km según plan del fabricante",
      revisiones: [
        { nombre: "Revisión base (furgón)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Globecar/Pössl (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
