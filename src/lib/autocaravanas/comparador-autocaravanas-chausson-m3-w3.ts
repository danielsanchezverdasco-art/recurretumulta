// Autocaravanas Chausson — lote Merlín 3 (19/10/2026).
// Fuentes: web oficial chausson-motorhomes.com (páginas de los modelos 630 y 720),
// web oficial chausson-camping-cars.fr (precios "à partir de" de la gama),
// fichas de concesionario YpoCamp (medidas y pesos del 630 First Line),
// exposé caraworld y anuncios (serie especial 720 Etape).
// Verificado el 19/10/2026.
// Notas honestas: las fotos oficiales del 630 y del 720 publicadas por la marca en
// su web son interiores (la marca no publica exteriores de estos modelos en sus
// páginas de modelo); todas corresponden al floor plan exacto (el 630 Titanium 2026
// comparte implantación con el 630 First Line 2025; el 720 Titanium 2026 con el
// 720 Etape). Precios: tarifa oficial FR "à partir de" (66.990 € el 630 y
// 67.490 € el 720 titanium line); la serie especial Etape no tiene PVP separado
// publicado. cargaUtilKg: ninguna de las fuentes oficiales la publica → null.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_CHAUSSON_M3: Autocaravana[] = [
  {
    id: "chausson-630-first-line-2026-precio-ficha-tecnica",
    marca: "Chausson",
    modelo: "630 First Line",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 66990, // tarifa oficial FR "À partir de 66 990 EUR" (chausson-camping-cars.fr/modele/630/)
    potenciaCv: 130, // Ford Transit 2.0L de 130 CV, cambio manual (ficha YpoCamp)
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro 6; criterio general DGT para este tipo de vehículo
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/chausson-630-first-line-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/chausson-630-first-line-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/chausson-630-first-line-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6990, // 6,99 m (web oficial chausson-camping-cars.fr/modele/630/)
    anchoMm: 2350, // 2,35 m (ficha YpoCamp)
    altoMm: 2920, // 2,92 m (ficha YpoCamp)
    pesoKg: 3006, // peso en vacío 3.006 kg (ficha YpoCamp)
    mmaKg: 3500, // PTAC 3.500 kg (ficha YpoCamp)
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no la publica; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas en circulación (web oficial)
    plazasDormir: 4, // 2 camas gemelas abatibles independientes + cama abatible (web oficial)
    parNm: null,
    traccion: null, // la marca no la declara de forma verificable
    emisionesCo2: null,
    aprox: [],
    notas:
      "Procedencia de los datos: precio «À partir de 66 990 EUR», longitud 6,99 m, " +
      "4 plazas en circulación, 4 en couchage y el concepto de 2 lits de pavillon " +
      "indépendants proceden de la web oficial chausson-camping-cars.fr/modele/630/; " +
      "anchura 2,35 m, altura 2,92 m, peso en vacío 3.006 kg, PTAC 3.500 kg, motor " +
      "Ford Transit 2.0L de 130 CV con cambio manual, camas de 190x90 y 198x90 cm " +
      "más cama abatible de 195x121 cm, agua limpia 105 L y grises 100 L proceden " +
      "de la ficha del concesionario YpoCamp. Las fotos son oficiales de la marca " +
      "(web chausson-motorhomes.com, páginas del modelo 630): corresponden al floor " +
      "plan exacto del 630; la decoración mostrada es la Titanium 2026, idéntica " +
      "implantación que el First Line 2025. En null: consumo, par, tracción y " +
      "emisiones (no publicados de forma verificable).",
    curiosidades:
      "El Chausson 630 es, según la propia marca, la única perfilada del mercado " +
      "con dos camas abatibles gemelas independientes: cada ocupante baja su cama " +
      "sin molestar al otro, y de día ambas desaparecen en el techo. Fuente: web " +
      "oficial https://www.chausson-motorhomes.com/model/630/ («UNIQUE: the low " +
      "profile with two independent roof beds!»).",
    descripcion: `El Chausson 630 First Line es una de esas perfiladas que se entienden en cuanto ves su plano: mide 6,99 metros —ni uno más— y dentro caben un gran salón, una gran ducha con aseo separado, dos camas gemelas abatibles independientes y hasta un vestidor sobre el garaje. La propia marca lo resume con una frase que es también su seña de identidad: es la única perfilada con dos camas abatibles gemelas independientes. Y no es un eslogan vacío: es la solución a la discusión más vieja de las parejas que viajan en autocaravana, la de quién duerme pegado a la pared y quién se levanta primero.

    Las medidas explican por qué este modelo funciona tan bien. Con 6,99 metros de largo se queda justo por debajo de la barrera psicológica de los siete metros: entra en más áreas, aparca con menos drama y paga menos en los ferris que una de 7,40. La anchura es de 2,35 metros y la altura de 2,92, proporciones clásicas de perfilada europea. El peso en vacío declarado es de 3.006 kg para un PTAC de 3.500 kg, así que viaja con carnet B y deja un margen de carga razonable para dos personas con su equipaje, la compra y el agua. Como siempre, el consejo sensato es pesar la unidad cargada como se viaja antes de un gran viaje: los opcionales (toldo, placa solar, portabicis) comen kilos deprisa.

    La habitabilidad es el capítulo donde el 630 se gana el sueldo. El concepto es sencillo y brillante: dos camas abatibles gemelas independientes —de 190 x 90 y 198 x 90 cm— que de noche bajan a su altura y de día se recogen en el techo, liberando por completo la zona de día. Cada ocupante acciona la suya sin depender del otro, y al recogerse dejan un salón amplio y luminoso. Es una idea distinta a la cama abatible única central: aquí cada uno tiene su cama, su lectura nocturna y su intimidad, sin escaleras ni contorsionismos. Además hay una cama abatible adicional de 195 x 121 cm, lo que eleva la capacidad total a cuatro plazas para dormir. El salón delantero es generoso, con dinette y asientos de cabina giratorios que se integran en la zona de estar. Y el baño es otra sorpresa para una perfilada de menos de siete metros: ducha grande separada del aseo, algo que normalmente exige subir a los 7,40 m. El vestidor sobre el garaje trasero remata un interior que se siente más grande de lo que el metro dice.

    En tecnología y equipamiento, el acabado First Line es la puerta de entrada a la gama Chausson, pero viene bien resuelto: chasis Ford en blanco, climatización automática de cabina, doble airbag, freno de mano eléctrico, asientos de cabina pivotantes y regulables en altura, retrovisores eléctricos con descongelación, control y limitador de velocidad, ESP, arranque y parada automáticos, techo panorámico de cabina practicable, ventanas de doble acristalamiento con oscurecedores y mosquiteras combinados, construcción IRP con techo, suelo y paredes de poliéster, puerta de célula con cierre centralizado, preinstalación de placa solar y de cámara de marcha atrás, y calefacción a gasóleo utilizable en marcha. La lista de opcionales permite escalar: cámara trasera, multimedia con mandos en el volante, pack invierno con depósito aislado y calefactado, toldo exterior, placa solar de 140 W y llantas de aleación negras de 16 pulgadas, entre otros.

    Las camas y plazas merecen un párrafo propio porque son el argumento de compra. Cuatro plazas en circulación con cinturón y cuatro para dormir: las dos gemelas abatibles independientes más la cama abatible de 195 x 121 cm. La gracia del sistema es la independencia total: si uno se acuesta antes, el otro puede seguir en el salón sin atravesar su cama ni despertarlo al subir. Para parejas con horarios distintos —el lector nocturno y el madrugador— es una diferencia que se nota cada noche del viaje. El garaje trasero, coronado por el vestidor, ofrece un volumen de carga serio para sillas, mesa exterior y material deportivo.

    La mecánica corre a cargo del Ford Transit 2.0L diésel de 130 CV con cambio manual, una combinación honesta y probada para una perfilada de 3.500 kg. No es un motor para ir con prisa, pero empuja con solvencia en autopista y se defiende en puertos si se juega bien con el cambio. El consumo no lo publica la marca de forma verificable, así que no lo incluimos; en uso real, una perfilada de este tamaño y peso con 130 CV se mueve en cifras razonables si se viaja a ritmos legales. La base Ford garantiza una red de talleres inmensa en toda Europa, un argumento de peso para quien planea grandes rutas.

    El precio oficial en Francia parte de 66.990 €, una cifra competitiva para una perfilada de menos de siete metros con este nivel de ingenio interior. En España, la red de concesionarios Chausson —dentro del grupo Trigano— comercializa la gama con sus propias tarifas y campañas, así que conviene pedir oferta en varios distribuidores y comparar el equipamiento incluido: los packs y opcionales cambian mucho el precio final. Como referencia, el First Line es el acabado de acceso, por debajo del Titanium, y su filosofía es ofrecer lo esencial bien hecho a un precio contenido.

    Cómo lo verificamos (19/10/2026): el precio de partida, la longitud de 6,99 m, las 4 plazas en circulación y el concepto de dos camas abatibles gemelas independientes proceden de la web oficial chausson-camping-cars.fr/modele/630/; las medidas de detalle (2,35 x 2,92 m), los pesos (3.006 kg en vacío, 3.500 kg de PTAC), el motor Ford Transit 2.0L de 130 CV manual, las medidas de las camas y las capacidades de agua (105 L limpias, 100 L grises) proceden de la ficha técnica del concesionario YpoCamp. Las fotos son oficiales de la marca y corresponden al floor plan exacto del 630. Lo no publicado queda sin dato y así se declara.

    Para quién es: el 630 First Line encaja con parejas que quieren una perfilada compacta (menos de 7 m) sin renunciar a dormir cada uno en su cama ni a una ducha grande, y con presupuestos que miran el acabado de acceso sin complejos. No es para familias de cinco (solo cuatro plazas), ni para quien necesita una cama central fija siempre hecha, ni para conductores que exijan 160 CV y cambio automático: aquí la mecánica es sencilla y honesta. Si las camas gemelas abatibles te han convencido, pruébalas en el concesionario bajándolas y subiédolas tú mismo: el gesto diario debe resultarte cómodo.`,
    pros: [
      "Única perfilada con dos camas abatibles gemelas independientes: cada uno maneja la suya sin molestar al otro",
      "Menos de 7 metros (6,99 m) con ducha grande separada y vestidor: aprovechamiento excepcional del espacio",
      "Precio de partida oficial de 66.990 €, competitivo para su nivel de ingenio interior",
      "Acabado First Line bien equipado de serie: clima automático, doble airbag, preinstalación solar y de cámara",
      "Base Ford Transit 2.0L de 130 CV con una red de talleres inmensa en toda Europa",
    ],
    contras: [
      "Solo 4 plazas en circulación y 4 para dormir: no sirve para familias de cinco",
      "Motor de 130 CV con cambio manual: honesto pero sin la soltura de las versiones de 165 CV automáticas",
      "Las fotos oficiales de la marca son todas interiores; no publica exterior del 630 en su web",
      "El acabado First Line es el de acceso: los packs (invierno, multimedia, toldo) encarecen la unidad real",
      "Camas abatibles de accionamiento diario: hay que probar en persona que el gesto resulte cómodo a largo plazo",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/chausson-630-first-line-2026-precio-ficha-tecnica-oficial.webp", alt: "Chausson 630 First Line, camas gemelas abatibles", ancho: 1080, alto: 600 },
      { src: "/media/chausson-630-first-line-2026-precio-ficha-tecnica-interior1.webp", alt: "Chausson 630 First Line, salón delantero", ancho: 1080, alto: 600 },
      { src: "/media/chausson-630-first-line-2026-precio-ficha-tecnica-interior2.webp", alt: "Chausson 630 First Line, vestidor y armario", ancho: 1080, alto: 600 },
      { src: "/media/chausson-630-first-line-2026-precio-ficha-tecnica-detalle.webp", alt: "Chausson 630 First Line, detalle de las camas gemelas", ancho: 1080, alto: 600 },
    ],
    analisisSlug: "chausson-630-first-line-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Ford Transit: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Ford Transit)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Chausson (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
  {
    id: "chausson-720-etapa-2026-precio-ficha-tecnica",
    marca: "Chausson",
    modelo: "720 Etapa",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 67490, // tarifa oficial FR "Dès 67 490 EUR" del 720 titanium line (base de la serie especial Etape); la serie Etape no tiene PVP separado publicado
    potenciaCv: 165, // Ford Transit 2.0L de 165 CV, cambio automático de 8 velocidades (dotación de la serie Etape)
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro 6; criterio general DGT para este tipo de vehículo
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/chausson-720-etapa-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/chausson-720-etapa-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/chausson-720-etapa-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7190, // 7,19 m (web oficial chausson-camping-cars.fr)
    anchoMm: null, // no publicado de forma verificable para la serie Etape
    altoMm: null, // no publicado de forma verificable para la serie Etape
    pesoKg: null, // no publicado de forma verificable
    mmaKg: 3500, // PTAC 3.500 kg, carnet B (estándar de la gama)
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no la publica; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 5, // 5 plazas en circulación (web oficial: "5 6 5")
    plazasDormir: 6, // 6 plazas en couchage (web oficial)
    parNm: null,
    traccion: null, // la marca no la declara de forma verificable
    emisionesCo2: null,
    aprox: [],
    notas:
      "Procedencia de los datos: longitud 7,19 m, 5 plazas en circulación, 6 en " +
      "couchage, 5 en mesa y precio «Dès 67 490 EUR» del 720 titanium line proceden " +
      "de la web oficial chausson-camping-cars.fr; la dotación de la serie especial " +
      "Etape (Ford Transit 2.0L de 165 CV con cambio automático de 8 velocidades, " +
      "llantas de 16\", pack de accesorios y elementos interiores específicos, con " +
      "unos 8.000 € de equipamiento incluido) procede del exposé de caraworld y de " +
      "anuncios de unidades de la serie. El 720 Etape es una serie especial sobre " +
      "la base del 720: comparte floor plan (cama abatible + literas traseras, maxi " +
      "salón cara a cara familiar). Las fotos son oficiales de la marca " +
      "(chausson-motorhomes.com, página del modelo 720): corresponden al floor " +
      "plan exacto; la decoración mostrada es la Titanium 2026. En null: anchura, " +
      "altura, peso en vacío, consumo, par, tracción y emisiones (no publicados de " +
      "forma verificable para la serie Etape).",
    curiosidades:
      "La serie especial Etape del Chausson 720 incluye unos 8.000 € de " +
      "equipamiento de serie: motor Ford de 165 CV con cambio automático de 8 " +
      "velocidades, llantas de 16 pulgadas, pack de accesorios y elementos " +
      "interiores específicos Etape. Fuente: exposé de la unidad en caraworld " +
      "(https://caraworld.de) y anuncios de la serie.",
    descripcion: `El Chausson 720 Etapa es la respuesta de la marca francesa a una pregunta muy concreta de las familias numerosas: ¿cómo se duerme a seis personas en una perfilada de 7,19 metros sin que el salón parezca un dormitorio? La respuesta combina una cama abatible delantera con literas traseras y un maxi salón cara a cara, y la serie especial Etape le añade la guinda: unos 8.000 € de equipamiento incluido de serie, con el motor Ford de 165 CV y el cambio automático de ocho velocidades como platos fuertes.

    Empecemos por situar el modelo. El 720 es la perfilada familiar grande de Chausson, con 7,19 metros de largo, y la serie Etape es una edición especial que la marca lanza con una dotación cerrada y ventajosa: en lugar de configurar la unidad opcional a opcional, el cliente Etape recibe de una vez el motor más potente, el cambio automático, las llantas de 16 pulgadas, el pack de accesorios y una serie de elementos interiores con identidad propia. Es la fórmula clásica de las series especiales: más equipamiento por menos dinero que si se pidiera por separado, a cambio de renunciar a elegir cada detalle. Para quien tiene claro que quiere una familiar equipada para viajar desde el primer día, la cuenta sale a favor.

    La habitabilidad gira en torno a la noche y al día a partes iguales. De noche, la combinación es cama abatible delantera más literas traseras, con capacidad total para seis personas: dos adultos delante y hasta cuatro niños o jóvenes detrás, según configuración. Las literas son la solución favorita de las familias porque cada niño tiene su cama siempre hecha, sin mecanismos que accionar cada noche, y porque la zona trasera queda delimitada como el rincón de los pequeños. De día, el maxi salón cara a cara —la marca lo describe como "maxi salon face/face familial"— ofrece una mesa grande con banquetas enfrentadas donde caben cinco comensales, más los asientos giratorios de cabina que amplían el espacio de convivencia. Es un salón pensado para cenar todos juntos, jugar a las cartas o trabajar con el portátil mientras fuera llueve.

    En tecnología y equipamiento, la serie Etape marca la diferencia respecto a un 720 pelado. El cambio automático de ocho velocidades asociado al Ford Transit 2.0L de 165 CV transforma la experiencia de conducción: en una perfilada de 3.500 kg y 7,19 m, el automático no es un capricho, es descanso para el conductor en atascos, puertos y maniobras. Las llantas de 16 pulgadas mejoran la pisada y la estética, y el pack de accesorios redondea la dotación de viaje. A esto se suma la base Chausson de la gama: construcción IRP, ventanas de doble acristalamiento con oscurecedores y mosquiteras, preinstalación solar y de cámara trasera, y calefacción utilizable en marcha. Los elementos interiores específicos Etape le dan un aire propio frente a las series estándar.

    Las camas y plazas son el corazón de la ficha: cinco plazas en circulación con cinturón y seis para dormir. Es una de las pocas perfiladas del mercado que homologa seis couchages sin recurrir a transformaciones incómodas del salón cada noche: la cama abatible y las literas son camas de verdad, siempre listas. El matiz importante es el de todas las familiares de seis: con el agua, el equipaje y seis personas a bordo, el margen hasta los 3.500 kg del PTAC se estrecha, así que conviene viajar ligero y pesar la unidad en orden de marcha real. Para familias de cuatro, en cambio, el 720 Etape es un palacio: sobra espacio por todas partes.

    La mecánica es uno de los argumentos de la serie Etape. El Ford Transit 2.0L diésel de 165 CV con cambio automático de ocho velocidades es la combinación más deseada de la gama Chausson: potencia de sobra para mover 3.500 kg con alegría, subidas de puerto sin agobios y un cambio moderno que gestiona bien el par en cualquier situación. Frente al manual de 130 CV de las versiones de acceso, el salto se nota cada día, y en reventa las automáticas de 165 CV son las que mejor aguantan el precio. El consumo no lo publica la marca de forma verificable; en uso real dependerá mucho del ritmo y de la carga, como en todas las perfiladas grandes.

    El precio oficial del 720 titanium line en Francia parte de 67.490 €, y la serie Etape, con sus 8.000 € de equipamiento incluido, se posiciona como la opción con mejor relación dotación-precio para quien quiere una familiar equipada sin volverse loco configurando opcionales. En España, la red de concesionarios Chausson aplica sus propias tarifas y campañas sobre la base francesa, así que la recomendación es pedir oferta cerrada con la dotación Etape detallada por escrito: como es una serie especial con equipamiento paquetizado, es fácil comparar entre concesionarios. Conviene también preguntar por la disponibilidad: las series especiales suelen tener producción limitada en el tiempo.

    Cómo lo verificamos (19/10/2026): la longitud de 7,19 m, las 5 plazas en circulación, las 6 en couchage y el precio de partida del 720 proceden de la web oficial chausson-camping-cars.fr; la dotación específica de la serie Etape (165 CV, automático de 8 velocidades, llantas de 16", pack de accesorios, unos 8.000 € de equipamiento) procede del exposé de caraworld y de anuncios de unidades de la serie; las fotos son oficiales de la marca y corresponden al floor plan exacto del 720. Lo no publicado queda sin dato y así se declara.

    Para quién es: el 720 Etapa encaja con familias de cuatro a seis miembros que buscan una perfilada grande, equipada y con cambio automático, y que valoran las series especiales por su relación dotación-precio. No es para parejas (es mucho barco para dos), ni para quien necesita moverse por pueblos con calles estrechas a diario, ni para presupuestos ajustados que encajan mejor en un 630. Si las literas traseras te han conquistado, comprueba en persona la altura libre de la litera superior y el acceso: con niños pequeños, una barrera o red de seguridad es casi obligatoria.`,
    pros: [
      "Serie especial Etape con unos 8.000 € de equipamiento incluido: 165 CV, automático de 8 velocidades y llantas de 16\"",
      "Seis plazas reales para dormir (cama abatible + literas) sin transformar el salón cada noche",
      "Maxi salón cara a cara familiar con mesa para cinco comensales más asientos giratorios",
      "Cambio automático de 8 velocidades: descanso real para el conductor en una perfilada de 7,19 m",
      "Precio de partida oficial de 67.490 € para el 720, competitivo entre las familiares grandes equipadas",
    ],
    contras: [
      "La serie Etape no tiene PVP separado publicado: el precio final depende de la tarifa del concesionario",
      "Con 7,19 m y seis ocupantes potenciales, el margen de carga hasta los 3.500 kg exige viajar ligero",
      "Las fotos oficiales de la marca son todas interiores; no publica exterior del 720 en su web",
      "Serie especial con producción limitada en el tiempo: la disponibilidad puede ser un problema",
      "Para parejas o familias de tres es excesiva: hay perfiladas más compactas y baratas que cumplen igual",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/chausson-720-etapa-2026-precio-ficha-tecnica-oficial.webp", alt: "Chausson 720 Etapa, literas traseras", ancho: 1080, alto: 600 },
      { src: "/media/chausson-720-etapa-2026-precio-ficha-tecnica-interior1.webp", alt: "Chausson 720 Etapa, maxi salón cara a cara", ancho: 1080, alto: 600 },
      { src: "/media/chausson-720-etapa-2026-precio-ficha-tecnica-interior2.webp", alt: "Chausson 720 Etapa, literas en detalle", ancho: 1080, alto: 600 },
      { src: "/media/chausson-720-etapa-2026-precio-ficha-tecnica-detalle.webp", alt: "Chausson 720 Etapa, detalle de las literas", ancho: 1080, alto: 600 },
    ],
    analisisSlug: "chausson-720-etapa-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Ford Transit: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Ford Transit)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Chausson (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
