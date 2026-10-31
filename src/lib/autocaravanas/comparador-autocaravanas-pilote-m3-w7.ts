// Autocaravanas Pilote — lote Merlín 3 (19/10/2026).
// Fuentes: https://www.pilote.fr/profile/p720fgj-evidence/ , https://www.pilote.fr/camping-cars/camping-car-evidence/ ,
// https://www.pilote.fr/camping-cars/profiles/ , https://www.pilote-motorhome.uk/panel-van/v630j/ ,
// https://www.outandaboutlive.co.uk/campervans/reviews/pilote-vega-v630j-campervan . Verificado el 19/10/2026.
// NOTA DE SUSTITUCIÓN: el modelo asignado "Pilote P726FGJ Evidence" ya no figura en el catálogo oficial
// vigente de Pilote (la página oficial devuelve 404; la gama Evidence 2027 la forman P690D, P720FC, P720FGJ,
// P740FC y P740FGJ). Se sustituye por el Pilote P720FGJ Evidence, misma familia Pacific Evidence, mismo
// esquema (salón face-face + camas gemelas sobre garaje) y ficha oficial completa.
// Notas honestas: Pilote no publica PVP oficial en España (precioDesde = null); la carga útil del P720FGJ
// Evidence (391 kg) sí la publica pilote.fr; la del V630J (555 kg) la publica pilote-motorhome.uk.
// Altura del V630J: 2,67 m según pilote-motorhome.uk.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_PILOTE_M3: Autocaravana[] = [
  {
    id: "pilote-p720fgj-evidence-2026-precio-ficha-tecnica",
    marca: "Pilote",
    modelo: "P720FGJ Evidence",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Pilote no publica PVP oficial en España; solo a través de concesionario/configurador
    potenciaCv: 140, // pilote.fr: motorisation 2,2 L - 140 ch
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
    imagen: "/media/pilote-p720fgj-evidence-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/pilote-p720fgj-evidence-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/pilote-p720fgj-evidence-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7220, // pilote.fr (página oficial del modelo, 19/10/2026: 7,22 m)
    anchoMm: 2300, // pilote.fr
    altoMm: 2850, // pilote.fr
    pesoKg: null,
    mmaKg: 3500, // châssis Fiat 3T5
    carnetNecesario: "B",
    cargaUtilKg: 391, // pilote.fr la publica: "Charge utile, 391 kg" (página oficial del modelo, 19/10/2026)
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // pilote.fr: places assises 4
    plazasDormir: 2, // pilote.fr: "Places couchage, 2" de serie; 4 con la cama de cabina opcional
    parNm: null,
    traccion: null, // la marca no lo declara en la ficha del modelo
    emisionesCo2: null,
    aprox: [],
    notas: "Datos de la página oficial del modelo en pilote.fr (longitud 7,22 m, anchura 2,30 m, altura 2,85 m, 4 plazas de viaje, 5 de comedor, 2 para dormir de serie —4 con la cama de cabina opcional—, carga útil 391 kg, motor 2,2 L 140 CV con caja automática, chasis Fiat 3T5, depósito diésel 90 L) y de la página oficial de la gama Evidence (5 modelos, cabina negra, llantas de aleación de 16\", volante soft touch, cajón bajo de carrocería, ducha exterior en el garaje, autorradio Fiat de 7\" con DAB, Apple CarPlay/Android Auto y cámara de marcha atrás). Datos actualizados el 19/10/2026 por la tarde según la página oficial vigente del modelo (longitud 7,22 m, carga útil 391 kg y 2 plazas de noche de serie; valores anteriores 7,20 m / 356 kg / 4 plazas de la ficha técnica consultada por la mañana). sin PVP oficial verificable.",
    curiosidades: "La edición Evidence de Pilote es una serie especial de fábrica pensada como «llave en mano»: solo 5 implantaciones (P690D, P720FC, P720FGJ, P740FC y P740FGJ) que salen de la cadena con caja de cambios automática, cabina negra, llantas de aleación de 16 pulgadas y el pack multimedia Fiat de 7 pulgadas con Apple CarPlay y cámara de marcha atrás, sin necesidad de opciones. Fuente: https://www.pilote.fr/camping-cars/camping-car-evidence/",
    descripcion: `El Pilote P720FGJ Evidence es una autocaravana perfilada de la gama Pacific que se ha convertido en una de las referencias francesas del segmento de los 7,22 metros: el formato que cabe en casi cualquier parcela, que se conduce con carnet B y que, gracias a su esquema de camas gemelas sobre garaje, resuelve para una pareja el eterno dilema entre dormir bien y llevar de todo. La edición Evidence no es un acabado más del catálogo, sino una serie especial de fábrica: Pilote selecciona cinco implantaciones de su gama —entre ellas este P720FGJ— y las equipa de serie con todo lo que normalmente habría que pedir como opción, con la idea de entregar un vehículo «listo para salir» sin pasar por la lista de extras.

    En medidas, el P720FGJ Evidence declara 7,22 metros de longitud según la ficha oficial del modelo, 2,30 metros de anchura de célula y 2,85 metros de altura total. Son las dimensiones clásicas de una perfilada de gama media-alta sobre chasis Fiat: lo bastante contenida como para no sufrir en pueblos ni en parkings de supermercado, y lo bastante ancha como para que el salón delantero resulte habitable de verdad. La masa máxima autorizada es de 3.500 kg, por lo que se conduce con el carnet B de toda la vida, y la carga útil oficial que publica Pilote es de 391 kg, una cifra honesta para un vehículo que sale de fábrica ya muy equipado.

    La habitabilidad gira en torno a un salón face-face delantero para cinco comensales, con mesa plegable y banquetas enfrentadas que aprovechan la anchura completa de la célula. La cocina, en el lateral, es generosa para lo que se estila en 7,22 metros: plano de trabajo amplio, grandes cajoneras y frigorífico de compresión, con el plus de que la edición Evidence incluye detalles pensados para el día a día, como el cajón bajo de carrocería —ideal para calzas, mangueras o el calzado sucio— y una ducha exterior con agua caliente y fría instalada en el garaje, perfecta para aclarar bicicletas, al perro o las botas de montaña sin meter barro dentro. El cuarto de baño, de tipo transversal e independiente, separa con puertas la zona de día de la zona de noche y aporta la intimidad que en una perfilada de este tamaño no siempre se consigue.

    Donde el P720FGJ Evidence marca la diferencia es en la zona de noche trasera: dos camas gemelas elevadas sobre un garaje de gran altura, con colchones confortables sobre somieres de lamas y la posibilidad de unirlas mediante la extensión central para formar una cama XXL. Debajo, el garaje pasante con doble portón lateral ofrece una altura excelente para transportar bicicletas, sillas o material voluminoso, y queda aislado térmicamente para no penalizar la calefacción. Con las dos camas gemelas de serie (más la cama de cabina opcional, que eleva la capacidad a cuatro plazas), es una de las perfiladas favoritas de las parejas que viajan con hijos o nietos de forma ocasional.

    En mecánica, la ficha oficial es clara: motor Fiat de 2,2 litros y 140 CV asociado de serie a la caja de cambios automática sobre el chasis Fiat de 3,5 toneladas, con depósito de gasóleo de 90 litros. La dotación de seguridad de la cabina incluye ABS, ASR, ESP y el sistema Traction+ con control de descenso, además de airbags de conductor y acompañante, regulador y limitador de velocidad y climatización manual. La edición Evidence añade la cabina en negro —un guiño estético que la distingue a primera vista—, llantas de aleación de 16 pulgadas, volante «soft touch» y aireadores con acabado aluminio, además del pack multimedia completo: autorradio Fiat de 7 pulgadas con DAB, conectividad Apple CarPlay y Android Auto, cámara de marcha atrás y altavoces repartidos entre cabina y célula.

    En el capítulo de precios hay que ser honestos: Pilote no publica una tarifa oficial para España, de modo que el precio de partida queda sin dato en esta ficha. La marca trabaja con configurador y red de concesionarios, y el precio final depende del mercado, las opciones y las campañas. Como referencia orientativa —no oficial— los anuncios de unidades nuevas de la gama Evidence se mueven en el entorno de los 80.000 euros en Francia, pero cada comprador deberá pedir presupuesto a un distribuidor. En España, Pilote cuenta con una red de concesionarios repartida por las principales comunidades autónomas, y el servicio postventa lo prestan esos mismos puntos de venta con el respaldo de la fábrica francesa.

    Cómo lo verificamos: los datos técnicos (7,22 m de longitud, 2,30 m de anchura, 2,85 m de altura, 4 plazas de viaje, 5 de comedor y 2 para dormir de serie —4 con la cama de cabina opcional—, carga útil de 391 kg, motor 2,2 L de 140 CV con cambio automático y chasis Fiat de 3,5 t) proceden de la página oficial del modelo en pilote.fr, consultada el 19/10/2026 (actualizados esa misma tarde; la ficha consultada por la mañana indicaba 7,20 m / 356 kg / 4 plazas); la descripción de la edición Evidence (cinco modelos, cabina negra, llantas de 16", pack multimedia de 7" con CarPlay y cámara trasera, cajón bajo de carrocería y ducha exterior en el garaje) procede de la página oficial de la gama Evidence en pilote.fr. La versión P726FGJ Evidence ya no aparece en el catálogo oficial vigente (su página devuelve error); esta ficha cubre el P720FGJ Evidence, de la misma familia y con ficha oficial completa.

    Para quién es: encaja con parejas que quieren una perfilada manejable pero sin renunciar a dormir en camas separadas de verdad, y que valoran salir del concesionario sin pelearse con la lista de opciones. Es también una buena candidata para quien alquila su autocaravana o la usa con nietos, con dos plazas de noche de serie (cuatro con la cama de cabina opcional). No encaja, en cambio, con quien busque una cama central isla (aquí las camas son gemelas), con quien necesite cinco plazas de viaje homologadas o con quien quiera el precio cerrado en web: en Pilote el precio se negocia en el concesionario.`,
    pros: [
      "Edición Evidence «llave en mano»: cambio automático, cabina negra y pack multimedia de serie sin pasar por opciones",
      "Camas gemelas traseras sobre garaje de gran altura, unibles en cama XXL (2 plazas de serie, 4 con cama de cabina opcional)",
      "Carga útil oficial de 391 kg publicada por la marca, honesta para un vehículo tan equipado",
      "Detalles prácticos de serie: cajón bajo de carrocería y ducha exterior con agua caliente en el garaje",
      "Motor Fiat 2,2 L de 140 CV con cambio automático y chasis de 3,5 t: se conduce con carnet B",
    ],
    contras: [
      "Pilote no publica PVP oficial en España: el precio hay que pedirlo en concesionario",
      "Sin cama central isla: quien busque ese esquema debe mirar el P720FC",
      "La cabina negra de la edición Evidence, estética, se calienta más al sol en verano",
      "Con 2,85 m de altura total, ojo con ramas bajas y parkings cubiertos",
      "El P726FGJ desapareció del catálogo: conviene confirmar stock de esta versión",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/pilote-p720fgj-evidence-2026-precio-ficha-tecnica-oficial.webp", alt: "Pilote P720FGJ Evidence, vista exterior", ancho: 2048, alto: 2048 },
      { src: "/media/pilote-p720fgj-evidence-2026-precio-ficha-tecnica-interior1.webp", alt: "Pilote P720FGJ Evidence, camas gemelas", ancho: 730, alto: 512 },
      { src: "/media/pilote-p720fgj-evidence-2026-precio-ficha-tecnica-interior2.webp", alt: "Pilote P720FGJ Evidence, salón", ancho: 768, alto: 512 },
      { src: "/media/pilote-p720fgj-evidence-2026-precio-ficha-tecnica-detalle.webp", alt: "Pilote P720FGJ Evidence, detalle exterior", ancho: 768, alto: 512 },
    ],
    analisisSlug: "pilote-p720fgj-evidence-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato 2.2: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato 2.2)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Pilote (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
  {
    id: "pilote-vega-v630j-2026-precio-ficha-tecnica",
    marca: "Pilote",
    modelo: "Vega V630J",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: null, // Pilote no publica PVP oficial en España
    potenciaCv: 140, // pilote-motorhome.uk: motor 2,2 L y 140 CV
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
    imagen: "/media/pilote-vega-v630j-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/pilote-vega-v630j-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/pilote-vega-v630j-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6360, // pilote-motorhome.uk: 6,36 m
    anchoMm: 2050, // pilote-motorhome.uk: 2,05 m
    altoMm: 2670, // pilote-motorhome.uk: 2,67 m
    pesoKg: null,
    mmaKg: 3500, // chasis ligero de 3.500 kg
    carnetNecesario: "B",
    cargaUtilKg: 555, // pilote-motorhome.uk la publica: "Payload, 555 kg"
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // pilote-motorhome.uk: 4 plazas con cinturón
    plazasDormir: 2, // pilote-motorhome.uk: 2 plazas para dormir
    parNm: null,
    traccion: null, // la marca no lo declara en la ficha del modelo
    emisionesCo2: null,
    aprox: [],
    notas: "Datos de la ficha oficial en pilote-motorhome.uk (6,36 m de longitud, 2,05 m de anchura, 2,67 m de altura, 4 plazas de viaje, 2 para dormir, carga útil 555 kg, motor 2,2 L de 140 CV con cambio manual, depósito de 90 L, Traction+) y del análisis de la gama Vega 2026 en outandaboutlive.co.uk (rediseño de asientos, Isofix de serie, calefacción diésel Truma D4, gas solo para cocinar, pack de litio de 210 Ah opcional, garaje de 1,80 x 0,72 x 0,77 m, 110 L de agua limpia, depósito de grises aislado). El acabado Evidence del V630J existe en la gama 2027 con 3 plazas para dormir. sin PVP oficial verificable.",
    curiosidades: "Para 2026 Pilote reinventó su gama de furgones Vega y el V630J recibió una atención especial: los asientos se rediseñaron con materiales de estilo automovilístico, el Isofix pasó a ser de serie y la calefacción diésel Truma D4 hace que el gas solo se use para cocinar, por lo que basta una bombona pequeña; además, el pack de litio opcional añade 210 Ah de batería y doble panel solar para una autonomía fuera de red muy seria. Fuente: https://www.outandaboutlive.co.uk/campervans/reviews/pilote-vega-v630j-campervan",
    descripcion: `El Pilote Vega V630J es un camper sobre furgón de 6,36 metros que demuestra que no hace falta una autocaravana de siete metros para viajar cómodo: con el esquema de camas gemelas traseras más popular del continente, cuatro plazas de viaje y una carga útil oficial de 555 kg, es uno de los furgones gran volumen más equilibrados de la gama Vega de Pilote, la línea de campers del fabricante francés. Para la colección 2026, Pilote asegura haber reinventado su gama de furgones con el confort, la innovación y el diseño depurado como palabras clave, y el V630J fue uno de los modelos que más atención recibió.

    Con 6,36 metros de largo, 2,05 de ancho y 2,67 de alto, el V630J se mueve en el segmento de los furgones L4H2, el formato largo y alto del Fiat Ducato (también disponible sobre Citroën Jumper según mercado). Es un vehículo que se aparca donde aparca un furgón de reparto grande, que entra en la mayoría de los parkings disuasorios y que, con sus 3.500 kg de MMA, se conduce con el carnet B. La carga útil de 555 kg que publica la web oficial británica de Pilote es una de las más generosas del segmento y deja margen real para equipaje, bicicletas y depósitos llenos sin ir justo de peso, algo que en los campers no siempre ocurre.

    La distribución es la que ha convertido a este esquema en un superventas europeo: salón delantero con banqueta trasera ancha y asientos de cabina giratorios para cuatro comensales, cocina central bien equipada, cuarto de baño compacto 3 en 1 y, al fondo, dos camas gemelas longitudinales sobre un garaje de gran capacidad. Al abrir los portones traseros la sorpresa es el espacio: el hueco bajo las camas mide 1,80 metros de largo por 72 centímetros de ancho y 77 de alto, recorre todo el ancho del vehículo y permite, abatiendo el extremo del colchón, crear un garaje de altura completa. El depósito de agua limpia, de generosos 110 litros, queda accesible desde ese mismo espacio, junto a la batería auxiliar.

    El rediseño de 2026 se nota sobre todo en los detalles que se tocan cada día. Los asientos se han rediseñado por completo con un apoyo mejorado y materiales de estilo automovilístico, disponibles en tela gris o en combinación de tela y polipiel en gris o negro; el Isofix para sillas infantiles pasa a ser de serie; los armarios altos incorporan retroiluminación suave y una tira continua de LED; y el paso a la cabina a plena altura entra también en la dotación estándar. La cocina mantiene su planteamiento funcional: cinco cajones compartimentados con freno de fin de carrera, papelera integrada, placa de dos fuegos con encendido piezoeléctrico y un frigorífico de compresión de 90 litros que enfría mejor que los de absorción cuando aprieta el calor.

    Uno de los cambios con más calado es invisible: la calefacción. El V630J monta de serie la Truma D4 diésel de 4.000 W, de modo que el gas queda reservado exclusivamente para cocinar y el armario del gas se reduce para una sola bombona pequeña. Eso, sumado al depósito de aguas grises aislado y a la ducha exterior ubicada en el garaje —otra novedad—, lo convierte en un candidato serio para viajar todo el año. Y para quien quiera ir más lejos fuera de la red, existe el pack de litio opcional con 210 Ah de batería y doble panel solar, una dotación que hace unos años solo se veía en preparaciones artesanales.

    En mecánica, la ficha oficial británica declara el motor de 2,2 litros y 140 CV con cambio manual sobre el chasis ligero de 3.500 kg, con llantas de acero de 15 pulgadas, depósito de gasóleo de 90 litros, ABS, ESP, control de crucero con limitador, retrovisores eléctricos calefactados con gran angular y ángulo muerto, y el sistema Traction+ que mejora la motricidad en terrenos deslizantes. También hay opción de cambio automático según mercado y acabado. Como en toda la gama Pilote, no hay precio oficial publicado para España: la marca vende a través de su red de concesionarios y el precio se configura con el distribuidor. En el Reino Unido la prensa especializada situaba el punto de partida en torno a las 68.400 libras para el manual, una referencia meramente orientativa para otro mercado.

    Cómo lo verificamos: las medidas (6,36 x 2,05 x 2,67 m), las plazas (4 de viaje, 4 de comedor, 2 para dormir), la carga útil (555 kg) y la mecánica (2,2 L y 140 CV, cambio manual, chasis ligero de 3.500 kg, depósito de 90 L, Traction+) proceden de la ficha oficial del modelo en pilote-motorhome.uk, consultada el 19/10/2026; la descripción del rediseño 2026 (asientos nuevos, Isofix de serie, calefacción diésel Truma D4 con gas solo para cocinar, pack de litio de 210 Ah con doble solar, garaje de 1,80 x 0,72 x 0,77 m, 110 L de agua limpia y grises aislado) procede del análisis publicado por outandaboutlive.co.uk. La web de Pilote no publica PVP oficial (null).

    Para quién es: perfecto para parejas que quieren un camper ágil para el día a día y escapadas largas, que duermen en camas separadas y que valoran la autonomía (calefacción diésel, litio opcional, 110 L de agua). También encaja como único vehículo familiar gracias a sus 4 plazas con Isofix. No es para quien necesite dormir a cuatro: con dos plazas de noche se queda corto para familias, ni para quien busque cama central o un salón enorme: en 6,36 metros las prioridades están claras.`,
    pros: [
      "Carga útil oficial de 555 kg, de las mejores del segmento camper",
      "Calefacción diésel Truma D4 de serie: el gas solo se usa para cocinar",
      "Rediseño 2026 con asientos nuevos, Isofix de serie y paso a cabina a plena altura",
      "Garaje trasero de 1,80 m de largo a todo el ancho, convertible en altura completa",
      "Pack de litio opcional de 210 Ah con doble panel solar para autonomía real",
    ],
    contras: [
      "Solo 2 plazas para dormir: insuficiente para familias de cuatro",
      "Pilote no publica PVP oficial en España",
      "El acabado Evidence con 3 plazas para dormir pertenece a la gama 2027, no a la 2026 base",
      "Sin cama central ni gran salón: en 6,36 m hay que priorizar",
      "La versión con cambio automático encarece y no está disponible en todos los mercados",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/pilote-vega-v630j-2026-precio-ficha-tecnica-oficial.webp", alt: "Pilote Vega V630J, vista exterior", ancho: 1024, alto: 1024 },
      { src: "/media/pilote-vega-v630j-2026-precio-ficha-tecnica-interior1.webp", alt: "Pilote Vega V630J, salón", ancho: 750, alto: 500 },
      { src: "/media/pilote-vega-v630j-2026-precio-ficha-tecnica-interior2.webp", alt: "Pilote Vega V630J, dormitorio", ancho: 774, alto: 512 },
      { src: "/media/pilote-vega-v630j-2026-precio-ficha-tecnica-detalle.webp", alt: "Pilote Vega V630J, garaje trasero", ancho: 768, alto: 512 },
    ],
    analisisSlug: "pilote-vega-v630j-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato 2.2: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato 2.2)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Pilote (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
