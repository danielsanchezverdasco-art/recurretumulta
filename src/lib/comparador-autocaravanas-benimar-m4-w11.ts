// Autocaravanas Benimar — lote Merlín 4 (19/10/2026).
// Fuentes: benimar.es (catálogo oficial 2027, página "Autocaravanas pequeñas 2026",
//   páginas de modelo Benivan 120 y Sport S363 UP), anuncios de concesionarios
//   (motorvision.es/Caravanas Principado, caravanascruz.es, mundovan, libertium.fr,
//   ypocamp.fr, camping-car-evasion.fr, autocaravanasnavarro.com, karavan.es),
//   alpacacamping.de. Verificado el 19/10/2026.
// Notas honestas: Benimar no publica PVP para España (precioDesde=null en ambas).
//   Dimensiones Benivan B120UP (5,99 × 2,05 × 2,65 m) y Sport S363UP (7,43 × 2,32 ×
//   3,10 m): catálogo oficial Benimar. Motor Benivan: Fiat Ducato 2.2 140 CV.
//   Motor Sport 363: Ford Transit 2.0 165 CV (anuncios de unidades 2026).
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_BENIMAR_M4: Autocaravana[] = [
  {
    id: "benimar-benivan-120-up-2026-precio-ficha-tecnica",
    marca: "Benimar",
    modelo: "Benivan 120 UP",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: null, // Benimar no publica PVP oficial para España
    potenciaCv: 140, // Fiat Ducato 2.2 140 CV
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro 6E
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/benimar-benivan-120-up-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/benimar-benivan-120-up-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/benimar-benivan-120-up-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990, // catálogo oficial Benimar: B120UP 5,99 m
    anchoMm: 2050, // catálogo oficial
    altoMm: 2650, // catálogo oficial
    pesoKg: null,
    mmaKg: 3500, // chasis 3,5 t (anuncios de concesionario)
    carnetNecesario: "B",
    cargaUtilKg: null, // no publicada por la marca; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4, // literas traseras 140 × 186 cm; 5.ª plaza opcional en salón
    parNm: null,
    traccion: "delantera", // Fiat Ducato
    emisionesCo2: null,
    aprox: [],
    notas:
      "Dimensiones 5,99 × 2,05 × 2,65 m y denominación B120UP: catálogo oficial " +
      "Benimar 2027 (benimar.es) y página 'Autocaravanas pequeñas 2026' (benimar.es). " +
      "Motor Fiat Ducato 2.2 140 CV, cambio manual 6v (automático opcional), chasis " +
      "3.500 kg, depósito 90 l: anuncios de concesionarios (motorvision.es, " +
      "caravanascruz.es). Literas traseras 140 × 186 cm, 4 viajar / 4 dormir, " +
      "calefacción Truma Combi 4 diésel, frigorífico 80 l: motorvision.es. " +
      "Pack UP (oscurecedores, toldo, solar 120 W, portabicis): clasf.es/mundovan. " +
      "Precio: Benimar no publica tarifa España → null (concesionarios la anuncian " +
      "desde ~61.500 €, solo referencia). MRO, consumo y carga útil: no publicados → null.",
    curiosidades:
      "La Benivan 120 UP mete cuatro plazas para dormir en 5,99 metros gracias a sus " +
      "literas traseras de 140 × 186 cm: es una de las pocas campers del mercado que " +
      "una familia de cuatro puede usar sin montar la cama del salón cada noche. " +
      "Fuente: https://www.benimar.es/autocaravanas-pequenas/ ('Benivan 120 UP... " +
      "4 plazas perfectas para aquellas familias de 2 hijos') y ficha de " +
      "motorvision.es (concesionario Caravanas Principado).",
    descripcion: `La Benimar Benivan 120 UP es la camper con la que la marca de Peñíscola quiere convencer a las familias jóvenes de que no hace falta una autocaravana de siete metros para viajar cuatro personas. Es una furgoneta camperizada de 5,99 metros sobre Fiat Ducato, con la carrocería estrecha de una furgoneta (2,05 m) y el equipamiento de una autocaravana pequeña. Y su argumento estrella cabe en una frase: cuatro para viajar y cuatro para dormir sin desmontar el salón.

La gama Benivan es la puerta de entrada al catálogo Benimar y se vende en dos niveles de acabado, UP y PS, además de la versión US. La 120 UP que nos ocupa es la variante de 5,99 metros con literas traseras, y el apellido UP añade el pack que la hace más autónoma y cómoda: oscurecedores de cabina tipo Remis, toldo exterior, placa solar de 120 W con regulador y portabicis para dos bicis. Todo eso viene de serie en el acabado, no hay que ir tachando opcionales.

Por fuera es una Ducato L3H2 vestida con la decoración específica de Benimar: franjas gráficas, llantas de aluminio y el morro con faros de contorno negro que le dan un aire más moderno que el de una furgoneta de reparto. Por dentro, la distribución es la clásica de camper familiar bien resuelta: delante, cabina con asientos giratorios que se integran al salón; en el centro, el comedor con mesa extensible tipo libro y la cocina de dos fuegos con frigorífico de 80 litros; detrás, el baño con ducha y, al fondo, las literas transversales de 140 × 186 cm. Esas literas son la clave del concepto: dos adultos duermen abajo y dos niños arriba sin tocar el salón, algo que en la mayoría de campers de este tamaño obliga a convertir el comedor cada noche. Si hace falta una quinta plaza, el salón se convierte en cama doble con el opcional correspondiente.

La mecánica es la que manda en el segmento: el Fiat Ducato 2.2 de 140 CV con cambio manual de seis velocidades, con opción al cambio automático de nueve relaciones. Tracción delantera, dirección asistida con el conocido tacto furgoneta y ayudas como el Traction+ con control de descenso, útil cuando la pista se pone fea. El depósito de 90 litros da una autonomía generosa para una camper, y la calefacción Truma Combi 4 funciona con gasoil del propio depósito, así que el invierno no exige cargar bombonas. Con 3.500 kg de MMA se conduce con el carnet B y su altura de 2,65 m le permite entrar en parkings con límite de 2,70 m donde una perfilada no pasa.

En el día a día, la Benivan 120 UP brilla en lo que promete: aparca como una furgoneta grande, gasta como una furgoneta grande y, una vez parada, ofrece cocina, baño con ducha, calefacción y cuatro camas hechas. Los 5,99 metros son también la medida mágica para las áreas de autocaravanas y para los ferries, donde a partir de seis metros el precio sube. Los peros son los inherentes al formato: el baño es compacto, el pasillo es estrecho cuando coinciden dos personas, y el almacenaje, aunque bien pensado con cajones de cierre suave y altillos, no da para llevar la casa a cuestas.

Del precio, lo honesto: Benimar no publica tarifa oficial para España y la casilla queda en null. Como referencia de mercado, concesionarios españoles la anuncian desde unos 61.500 euros (caravanascruz.es), impuestos y matriculación incluidos según el anuncio, pero cada concesionario configura precio con packs y opcionales. Benimar, que fabrica en Peñíscola (Castellón) y lleva más de una década liderando el mercado español de autocaravanas, tiene una de las redes de distribución más densas del país, así que comparar ofertas entre concesionarios es fácil.

Cómo lo verificamos: la existencia del modelo B120 UP y sus dimensiones (5,99 m de largo; 2,65 m de alto y 2,05 m de ancho para la gama) se comprobaron el 19/10/2026 en el catálogo oficial 2027 de benimar.es y en su página "Autocaravanas pequeñas 2026"; el motor Fiat Ducato 2.2 de 140 CV, el chasis de 3.500 kg y el depósito de 90 litros, en anuncios de concesionarios (motorvision.es/Caravanas Principado, caravanascruz.es); las literas de 140 × 186 cm y la calefacción Truma Combi 4 diésel, en la ficha de motorvision.es; el contenido del pack UP, en clasf.es/mundovan.

Para quién es: para familias de cuatro (dos adultos y dos niños como máximo, como dice la propia Benimar) que quieren una camper manejable para escapadas y vacaciones sin renunciar a dormir todos en camas hechas. También para parejas que viajan con mucho material y usan las literas como cama y como "trastero". No es para quien necesite cinco o seis plazas, para quien priorice un baño amplio con ducha separada de verdad, ni para quien busque una camper para dos con cama isla y mucho salón: para eso la propia Benimar tiene la B100 o las gamas perfiladas.`,
    pros: [
      "4 plazas para dormir en 5,99 m gracias a las literas de 140 × 186 cm",
      "Pack UP de serie: toldo, placa solar 120 W, oscurecedores y portabicis",
      "Calefacción Truma Combi 4 a gasoil: sin bombonas de gas en invierno",
      "Solo 2,65 m de alto: entra en parkings donde una perfilada no pasa",
      "Red Benimar en España muy densa: fácil comparar precios entre concesionarios",
    ],
    contras: [
      "Benimar no publica PVP oficial: el precio depende de cada concesionario",
      "Baño y pasillo compactos: justos para cuatro personas en días de lluvia",
      "Almacenaje limitado si se viaja con mucho material deportivo",
      "140 CV con cambio manual: suficiente, pero sin grandes reservas en puertos",
      "Las literas altas son incómodas para personas mayores o con movilidad reducida",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/benimar-benivan-120-up-2026-precio-ficha-tecnica-oficial.webp", alt: "Benimar Benivan 120 UP, vista exterior", ancho: 2924, alto: 1863 },
      { src: "/media/benimar-benivan-120-up-2026-precio-ficha-tecnica-interior1.webp", alt: "Benimar Benivan 120 UP, salón (foto oficial Benimar)", ancho: 1024, alto: 683 },
      { src: "/media/benimar-benivan-120-up-2026-precio-ficha-tecnica-interior2.webp", alt: "Benimar Benivan 120 UP, interior del salón", ancho: 1600, alto: 1067 },
      { src: "/media/benimar-benivan-120-up-2026-precio-ficha-tecnica-detalle.webp", alt: "Benimar Benivan 120 UP, detalle del salón y cabina", ancho: 800, alto: 600 },
    ],
    analisisSlug: "benimar-benivan-120-up-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Benimar (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
  {
    id: "benimar-sport-363-2026-precio-ficha-tecnica",
    marca: "Benimar",
    modelo: "Sport 363",
    tipo: "capuchina",
    categoria: "Autocaravana",
    precioDesde: null, // Benimar no publica PVP oficial para España
    potenciaCv: 165, // Ford Transit 2.0 165 CV (anuncios de unidades 2026)
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
    imagen: "/media/benimar-sport-363-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/benimar-sport-363-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/benimar-sport-363-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7430, // catálogo oficial Benimar: S363UP capuchina 7,43 m
    anchoMm: 2320, // catálogo oficial (gama Sport: 2,32 m)
    altoMm: 3100, // catálogo oficial (gama Sport: 3,10 m)
    pesoKg: null,
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null, // no publicada por la marca; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 6, // capuchina 155 × 206 + gemelas/doble 170 × 210 + salón convertible
    parNm: null,
    traccion: "delantera", // Ford Transit
    emisionesCo2: null,
    aprox: [],
    notas:
      "Dimensiones 7,43 × 2,32 × 3,10 m y denominación S363UP capuchina: catálogo " +
      "oficial Benimar 2027 (benimar.es). Motor Ford Transit 2.0 de 165 CV con " +
      "automática opcional: anuncios de unidades 2026 (ac-llar.com: 'Sport 363 " +
      "automática 165 CV'; truckscout24: Tessoro/Sport 2026 sobre Ford Transit). " +
      "Camas (capuchina 155 × 206, gemelas transformables en doble 170 × 210, salón " +
      "convertible), ducha independiente, Truma Combi diésel 4000 W, frigorífico " +
      "compresor 150 l, aguas 105/105 l, pack UP (solar 200 W MPPT, Smart TV 22', " +
      "toldo 4,5 m, ISOFIX): autocaravanasnavarro.com. Precio: Benimar no publica " +
      "tarifa España → null. MRO, consumo y carga útil: no publicados → null.",
    curiosidades:
      "El acabado UP de la Sport 363 incluye de serie un panel solar de 200 W con " +
      "regulador MPPT y una Smart TV de 22 pulgadas, además de ISOFIX en los asientos " +
      "del comedor: equipamiento pensado para familias que viajan con niños. " +
      "Fuente: https://www.autocaravanasnavarro.com/shop/autocaravanas/autocaravana-benimar-sport-363-up/ " +
      "(ficha de concesionario, consultada el 19/10/2026).",
    descripcion: `La Benimar Sport 363 es la capuchina grande de la marca española para quienes hacen números y descubren que seis plazas para dormir en 3.500 kg no las ofrece casi nadie. Con 7,43 metros de largo, 2,32 de ancho y 3,10 de alto, es la mayor de la gama Sport —junto a sus hermanas S325UP y S344UP— y mantiene la esencia clásica de la autocaravana familiar: la cama siempre hecha sobre la cabina, como las de toda la vida.

La fórmula de la capuchina es la más antigua y la más honesta del caravaning: aprovecha el volumen sobre la cabina para una cama doble permanente y libera el resto de la célula para vivir. En la Sport 363 esa cama mide 155 × 206 cm, una de las más generosas del segmento, y se suma a las camas gemelas traseras —transformables en una doble de 170 × 210 cm— y al salón convertible. Total: cuatro plazas para viajar y seis para dormir, todo dentro de los 3.500 kg que permiten conducirla con el carnet B. Para una familia numerosa o para dos familias que comparten vacaciones, esa cuenta no la iguala ninguna perfilada del mismo precio.

La base es el Ford Transit 2.0 de 165 CV, con cambio automático opcional, una mecánica probada y con una red de talleres inmensa en España, algo que se agradece cuando se viaja con niños y lo último que se quiere es una avería en agosto lejos de casa. La carrocería, con el ambiente interior Pamplona de la colección actual, apuesta por tonos claros y cajones con cierre suave y silencioso. El baño tiene ducha independiente con cesto —no el típico aseo todo-en-uno—, la cocina monta fregadero y dos fuegos encastrados con encendido eléctrico y un gran frigorífico de compresor de 150 litros con cajón botellero, y la calefacción es una Truma Combi diésel de 4.000 W con kit de altitud incluido, así que el invierno y la montaña no son un problema.

El acabado UP, que es como se vende en España, suma el equipo que convierte una capuchina correcta en una muy completa: panel solar de 200 W con regulador MPPT, toldo de 4,5 metros, Smart TV de 22 pulgadas con soporte, preinstalación para segunda batería de célula, ISOFIX en los asientos del comedor y acceso al garaje desde el interior. Los depósitos de aguas limpias y grises son de 105 litros cada uno, y el garaje —con 118 cm de altura máxima y portones de 84 × 104 cm a cada lado— traga bicis, sillas y la compra de una semana.

Con 3,10 metros de altura y la capuchina, hay que asumir sus servidumbres: gasta más que una perfilada, el viento lateral se nota y algunos peajes y parkings la miran de reojo. A cambio, ofrece lo que ninguna perfilada de 7,43 metros ofrece: seis camas. El precio, como en toda la gama Benimar, no se publica de forma oficial para España —la casilla queda en null— y lo fija cada concesionario según acabado y opcionales; la red Benimar, la más extensa del país en autocaravanas, permite comparar.

Cómo lo verificamos: la existencia del modelo S363UP capuchina y sus dimensiones (7,43 m de largo; 3,10 m de alto y 2,32 m de ancho para la gama Sport) se comprobaron el 19/10/2026 en el catálogo oficial 2027 de benimar.es; el motor Ford Transit 2.0 de 165 CV, en anuncios de unidades 2026 (ac-llar.com, truckscout24); las medidas de las camas, la ducha independiente, la Truma Combi diésel, el frigorífico de 150 l, los depósitos de 105 l y el contenido del pack UP, en la ficha del concesionario autocaravanasnavarro.com; las fotos oficiales, en la página del modelo en benimar.es/sport/s363-up/.

Para quién es: para familias de cinco o seis que necesitan dormir todos en camas de verdad sin irse a los 4.400 kg ni al carnet C1. También para grupos de amigos o abuelos con nietos que comparten vehículo. No es para quien busque discreción o aerodinámica —la capuchina se ve y se nota—, ni para quien viaje casi siempre en pareja: tanto volumen para dos es desaprovecharla, y una perfilada más baja gastará menos y se moverá mejor. En carretera, el Transit de 165 CV mueve bien los 3.500 kg y el cambio automático opcional se agradece en atascos y puertos. La posición de conducción es la de una furgoneta grande, con buena visibilidad gracias a los retrovisores amplios. Merece la pena detenerse en el pack UP: además del solar de 200 W y la Smart TV, incluye la puerta de célula con mosquitera y cierre centralizado, los soportes para TV, la preinstalación para la segunda batería y el toldo de 4,5 metros, que en una capuchina familiar se usa a diario. El garaje, accesible también desde dentro, y los cajones con cierre amortiguado redondean un interior pensado para el trote diario de una familia.`,
    pros: [
      "6 plazas para dormir dentro de los 3.500 kg: casi única en el mercado con carnet B",
      "Cama capuchina de 155 × 206 cm, de las más anchas del segmento",
      "Pack UP muy completo: solar 200 W, Smart TV 22', toldo 4,5 m e ISOFIX",
      "Ducha independiente y frigorífico de compresor de 150 l",
      "Ford Transit 165 CV con una red de talleres inmensa en España",
    ],
    contras: [
      "3,10 m de alto y capuchina: más consumo y sensibilidad al viento lateral",
      "Benimar no publica PVP oficial: precio solo en concesionario",
      "La cama capuchina obliga a subir por escalerilla y tiene menos altura libre",
      "Con 7,43 m no es la más ágil en áreas pequeñas y pueblos",
      "Estética clásica: quien busque diseño vanguardista mirará a una perfilada",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/benimar-sport-363-2026-precio-ficha-tecnica-oficial.webp", alt: "Benimar Sport 363, vista lateral (foto oficial Benimar)", ancho: 1024, alto: 682 },
      { src: "/media/benimar-sport-363-2026-precio-ficha-tecnica-interior1.webp", alt: "Benimar Sport 363, cama capuchina", ancho: 1200, alto: 800 },
      { src: "/media/benimar-sport-363-2026-precio-ficha-tecnica-interior2.webp", alt: "Benimar Sport 363, camas gemelas traseras", ancho: 600, alto: 800 },
      { src: "/media/benimar-sport-363-2026-precio-ficha-tecnica-detalle.webp", alt: "Benimar Sport 363, vista frontal (foto oficial Benimar)", ancho: 1024, alto: 515 },
    ],
    analisisSlug: "benimar-sport-363-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Ford Transit: revisión anual o cada 30.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Ford Transit)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Benimar (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
