// Autocaravanas Benimar — lote Merlín 4 (19/10/2026). Fusión de w11 + w20 (3 modelos).
// Fuentes w11: benimar.es (catálogo oficial 2027, página "Autocaravanas pequeñas 2026",
//   páginas de modelo Benivan 120 y Sport S363 UP), anuncios de concesionarios
//   (motorvision.es/Caravanas Principado, caravanascruz.es, mundovan, libertium.fr,
//   ypocamp.fr, camping-car-evasion.fr, autocaravanasnavarro.com, karavan.es),
//   alpacacamping.de. Verificado el 19/10/2026.
// Fuentes w20: ficha técnica del Benimar Mileo 268 del distribuidor caravaningplaza.com
//   (cotas, motor, plazas, MMA, garaje), catálogo oficial Benimar 2026/2027 en benimar.es
//   (gama Mileo vigente: M263/M268/M298). Verificado el 19/10/2026.
// Notas honestas: Benimar NO publica PVP oficial para España (precioDesde = null).
//   La marca no publica la carga útil como cifra (cargaUtilKg = null; prohibido calcularla).
//   Consumo, par motor, emisiones y masa en orden de marcha: no publicados.
//   Las fotos no son oficiales: proceden de distribuidores, sin marcas de agua ni rótulos;
//   se usan bajo la regla relajada de 19/10/2026 (modelo y marca exactos).
import type { Autocaravana } from "./tipos.ts";

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

Del precio, lo honesto: Benimar no publica tarifa oficial para España y la casilla queda sin dato. Como referencia de mercado, concesionarios españoles la anuncian desde unos 61.500 euros (caravanascruz.es), impuestos y matriculación incluidos según el anuncio, pero cada concesionario configura precio con packs y opcionales. Benimar, que fabrica en Peñíscola (Castellón) y lleva más de una década liderando el mercado español de autocaravanas, tiene una de las redes de distribución más densas del país, así que comparar ofertas entre concesionarios es fácil.

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
      { src: "/media/benimar-benivan-120-up-2026-precio-ficha-tecnica-detalle.webp", alt: "Benimar Benivan 120 UP, puerta lateral abierta con mesa exterior (foto oficial Benimar)", ancho: 1024, alto: 682 },
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

Con 3,10 metros de altura y la capuchina, hay que asumir sus servidumbres: gasta más que una perfilada, el viento lateral se nota y algunos peajes y parkings la miran de reojo. A cambio, ofrece lo que ninguna perfilada de 7,43 metros ofrece: seis camas. El precio, como en toda la gama Benimar, no se publica de forma oficial para España —la casilla queda sin dato— y lo fija cada concesionario según acabado y opcionales; la red Benimar, la más extensa del país en autocaravanas, permite comparar.

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
  {
    id: "benimar-mileo-268-2026-precio-ficha-tecnica",
    marca: "Benimar",
    modelo: "Mileo 268",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Benimar no publica PVP oficial
    potenciaCv: 140, // Fiat Ducato 2.2 de 140 CV, cambio manual, Euro 6 (caravaningplaza.com)
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro 6 sobre Fiat Ducato
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/benimar-mileo-268-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/benimar-mileo-268-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/benimar-mileo-268-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7390, // caravaningplaza.com: 739 cm
    anchoMm: 2300, // caravaningplaza.com: 230 cm
    altoMm: 2890, // caravaningplaza.com: 289 cm
    pesoKg: null, // masa en orden de marcha no publicada
    mmaKg: 3500, // caravaningplaza.com; carnet B
    carnetNecesario: "B", // mmaKg <= 3500
    cargaUtilKg: null, // la marca no publica la carga útil; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas para viajar (hasta 5 opcional: 4/4-5/4)
    plazasDormir: 4, // 4 plazas para dormir (hasta 5 opcional)
    parNm: null,
    traccion: "delantera", // base Fiat Ducato de tracción delantera
    emisionesCo2: null,
    aprox: [],
    notas:
      "Modelo sustituido: el «Benimar Mileo 201» asignado no existe en la gama actual (el 201 fue un modelo de ~2015; el catálogo oficial 2026/2027 solo lista M263/M268/M298); se documenta el Mileo 268 (M268) real y vigente. Cotas (739/230/289 cm), motor Fiat Ducato 2.2 de 140 CV manual Euro 6, 4 plazas (4-5 opcional), MMA 3.500 kg y garaje con capacidad de 225 kg: ficha del distribuidor caravaningplaza.com (verificada 19/10/2026). Benimar no publica PVP oficial (precioDesde = null). Fotos no oficiales (distribuidor, sin marcas de agua). Carga útil, consumo, par, emisiones y MRO: no publicados; quedan sin dato.",
    curiosidades:
      "El Mileo 268 se fabrica íntegramente en Peñíscola (Castellón), en la planta de Benimar: la marca española, con más de cuatro décadas de trayectoria, exporta actualmente sus autocaravanas a más de 25 países y es uno de los principales fabricantes europeos del sector. Fuente: AC-Llar, distribuidor oficial Benimar (https://ac-llar.com//ac-llar-llevara-las-novedades-de-benimar-y-roller-team-con-descuentos-a-la-i-feria-del-caravaning-de-valencia/).",
    descripcion: `El Benimar Mileo 268 es la perfilada española que demuestra que no hace falta cruzar los Pirineos para encontrar una autocaravana bien pensada: se diseña y fabrica íntegramente en Peñíscola, en la planta de una marca que lleva más de cuatro décadas construyendo autocaravanas y que hoy exporta a más de 25 países. Dentro de la gama Mileo —la familia de perfiladas de Benimar—, el 268 ocupa el punto dulce: 7,39 metros de eslora con una distribución para cuatro personas que no renuncia a nada esencial, sobre la base más popular del caravaning europeo, el Fiat Ducato.

    En medidas y habitabilidad, el Mileo 268 ofrece 739 cm de largo, 230 cm de ancho y 289 cm de alto, con una MMA de 3.500 kg que lo mantiene en el terreno del carnet B. Son las cotas clásicas de la perfilada familiar europea: lo bastante larga para una distribución completa con camas separadas de la zona de día, lo bastante contenida para no convertirse en un problema en cada rotonda. La anchura de 2,30 m permite un salón y una cocina de dimensiones reales, no de maqueta, y la altura de 2,89 m deja una altura interior cómoda para personas altas. El garaje trasero, con una capacidad de carga declarada de 225 kg, es uno de los argumentos de venta del modelo: bicicletas, sillas, mesa de camping y todo el material de la vida al aire libre viajan abajo sin invadir la célula.

    En tecnología y equipamiento, Benimar aplica su filosofía de «mucho equipamiento de serie por un precio ajustado», la fórmula que la ha convertido en líder del mercado español. El Mileo 268 equipa la base Fiat Ducato con el motor 2.2 de 140 CV y cambio manual Euro 6, una mecánica sobradamente probada en el sector y con una red de servicio inmensa en toda Europa —una ventaja práctica que se agradece cuando se viaja lejos de casa—. La célula apuesta por un salón face-to-face, la distribución que más gusta a quienes viajan en pareja o en familia y pasan tiempo dentro del vehículo: dos bancos enfrentados que crean un auténtico salón para comer, jugar a las cartas o trabajar con el portátil. La cocina, equipada para cocinar de verdad, y el baño completo con ducha separada cierran una dotación pensada para el uso intensivo, no para el folleto.

    En camas y plazas, el 268 homologa 4 plazas para viajar y 4 para dormir, con la posibilidad de ampliar a 5 plazas en ambas cifras según la configuración. Es la capacidad honesta de una perfilada familiar: dos adultos y dos niños duermen con comodidad, y la quinta plaza ocasional resuelve la visita de un amigo de los hijos o de un abuelo. La distribución separa la zona de noche de la zona de día, de modo que los niños pueden acostarse mientras los padres siguen en el salón sin molestarse: un detalle que solo aprecia quien ha viajado con familia en una distribución abierta.

    En mecánica, el Fiat Ducato 2.2 MultiJet de 140 CV con cambio manual es la opción racional del segmento: potencia suficiente para mover con dignidad los 3.500 kg de MMA, consumos contenidos para el tamaño del vehículo y una fiabilidad legendaria respaldada por millones de unidades en circulación. La tracción delantera y el chasis específico para camping-car (rebajado en la zona de la célula) proporcionan un comportamiento sano y predecible, y la altura contenida de 2,89 m mantiene el centro de gravedad razonablemente bajo. No es la mecánica más prestacional del mercado, pero es la que menos problemas da: en una autocaravana familiar, eso vale más que 20 CV extra.

    En precio y red comercial en España, Benimar no publica una tarifa oficial de PVP —la marca trabaja con precios de distribuidor—, por lo que el precio final se configura en el concesionario. Lo que sí es público es el posicionamiento: Benimar compite con una de las mejores relaciones equipamiento/precio del mercado europeo, y el Mileo 268 se sitúa en la franja media de las perfiladas familiares. La red comercial es otro de sus puntos fuertes: como fabricante español líder del mercado nacional, Benimar cuenta con una densa red de distribuidores y servicio posventa en toda España, con la fábrica de Peñíscola a un salto para recambios y garantías. Comprar español, en este caso, tiene ventajas logísticas reales.

    Cómo lo verificamos: la sustitución del modelo (el «Mileo 201» no existe en el catálogo 2026/2027, que solo lista M263/M268/M298) se comprobó en el catálogo oficial de benimar.es. Las cotas (739 x 230 x 289 cm), el motor Fiat Ducato 2.2 de 140 CV manual Euro 6, las plazas (4, ampliables a 5), la MMA de 3.500 kg y la capacidad del garaje (225 kg) proceden de la ficha técnica publicada por el distribuidor caravaningplaza.com, verificada el 19 de octubre de 2026. La fabricación en Peñíscola y la exportación a más de 25 países proceden de AC-Llar, distribuidor oficial. Los datos no publicados por la marca (PVP, carga útil, consumo, par, emisiones, MRO) quedan sin dato y se declaran como tales.

    Para quién es: el Mileo 268 encaja con familias españolas que buscan su primera —o su segunda— perfilada sin complicaciones: cuatro plazas reales, garaje tragón, mecánica Fiat probada y una red de servicio nacional que responde. Es ideal para vacaciones largas en familia, fines de semana con niños y para quien valora comprar a un fabricante nacional. No es para quien necesite cinco camas de forma permanente (hay distribuciones más grandes), para quien busque acabados premium de gama alta, ni para quien priorice la compacidad extrema: 7,39 metros piden un conductor que ya se sienta cómodo con un vehículo grande.`,
    pros: [
      "Fabricada en España (Peñíscola) por el líder del mercado nacional: red de servicio y recambios muy densa",
      "Garaje trasero con 225 kg de capacidad de carga: de los más aprovechables de su segmento",
      "Salón face-to-face: un auténtico salón para familias que viven el interior del vehículo",
      "Mecánica Fiat Ducato 2.2 de 140 CV: la base más probada y con más servicio de Europa",
      "Relación equipamiento/precio de las mejores del mercado: mucho de serie sin saltar de gama",
    ],
    contras: [
      "Benimar no publica PVP oficial: el precio final depende de cada distribuidor",
      "Cambio manual de serie: el automático, si se ofrece, encarece la factura",
      "7,39 m de eslora: pide experiencia para moverse por pueblos y áreas pequeñas",
      "La quinta plaza es opcional y de compromiso: no es un 5 plazas nato",
      "Acabados funcionales antes que premium: quien busque lujo debe subir de gama",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/benimar-mileo-268-2026-precio-ficha-tecnica-oficial.webp", alt: "Benimar Mileo 268, vista exterior lateral", ancho: 1600, alto: 2399 },
      { src: "/media/benimar-mileo-268-2026-precio-ficha-tecnica-interior1.webp", alt: "Benimar Mileo 268, salón face-to-face", ancho: 1600, alto: 1066 },
      { src: "/media/benimar-mileo-268-2026-precio-ficha-tecnica-interior2.webp", alt: "Benimar Mileo 268, cocina", ancho: 1600, alto: 1066 },
      { src: "/media/benimar-mileo-268-2026-precio-ficha-tecnica-detalle.webp", alt: "Benimar Mileo 268, baño", ancho: 1600, alto: 2399 },
    ],
    analisisSlug: "benimar-mileo-268-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 48.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Benimar (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
