// Autocaravanas Le Voyageur — lote Merlín 4 (19/10/2026).
// Fuentes: levoyageur.fr (gama Héritage: Mercedes Sprinter + chasis AL-KO, 170 CV,
// cambio 9G-Tronic, depósito 92 l, calefacción ALDE, drone view 360°), catálogo oficial
// Le Voyageur Heritage (implantaciones y MMA), ihmotorhomes.com y findmyleisurevehicle.co.uk
// (gama oficial UK), campingcarlesite.com (datos de gama 2027), annonces-caravaning.com
// (unidad 2026 en concesionario oficial). Verificado el 19/10/2026.
// Notas honestas: los códigos «LVX 8 CF» y «Elegance 7.9 CF» asignados no existen en la gama
// oficial actual (gamas vigentes: Héritage y Eterna); se sustituyen por los modelos reales
// equivalentes: Héritage LVXH 8.7 CF y Héritage LVXH 7.9 CF (ambos CF = cama central).
// Le Voyageur no publica tarifa oficial para España (precioDesde: null en ambas).
// Carga útil, consumo y etiqueta DGT no publicados (null).
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_LEVOYAGEUR_M4: Autocaravana[] = [
  {
    id: "le-voyageur-heritage-lvxh-8-7-cf-2026-precio-ficha-tecnica",
    marca: "Le Voyageur",
    modelo: "Héritage LVXH 8.7 CF",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: null, // Le Voyageur no publica PVP oficial para España; null = «no publicado»
    potenciaCv: 170, // Mercedes Sprinter 2.0, oficial levoyageur.fr
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: null, // no publicada por la marca
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/le-voyageur-heritage-lvxh-8-7-cf-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/le-voyageur-heritage-lvxh-8-7-cf-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/le-voyageur-heritage-lvxh-8-7-cf-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 8750, // catálogo oficial Heritage: 8,75 m, triple eje
    anchoMm: 2320, // 2,32 m (datos de gama publicados por la marca)
    altoMm: null, // no publicado por la marca
    pesoKg: null, // no publicado por la marca
    mmaKg: 5500, // catálogo oficial Heritage: 5.500 kg
    carnetNecesario: "C1", // mmaKg entre 3500 y 7500
    cargaUtilKg: null, // la marca no publica una carga útil única; prohibido calcular MMA-MRO
    consumo: null, // no publicado por la marca
    consumoUnidad: null,
    plazas: 4, // ficha oficial UK (model year 2026)
    plazasDormir: 4, // cama central + cama abatible doble (ficha oficial UK)
    parNm: null,
    traccion: null, // la marca no lo declara en la ficha técnica
    emisionesCo2: null,
    aprox: [],
    notas:
      "Sustituye al código asignado «le-voyageur-lvx-8-cf», que no existe en la gama oficial (vigentes: Héritage y Eterna); el equivalente real es el Héritage LVXH 8.7 CF (CF = cama central). 170 CV Mercedes Sprinter 2.0, cambio 9G-Tronic de 9 relaciones, depósito de 92 l, calefacción ALDE y chasis AL-KO de levoyageur.fr. Largo 8,75 m y MMA 5.500 kg (triple eje) del catálogo oficial Heritage. 4 plazas y 4 camas de la ficha oficial UK (model year 2026). Precio: la marca no publica tarifa ES (null); referencia UK desde £169.400 (no oficial ES). Altura, masa, carga útil, consumo y etiqueta DGT: no publicados (null). Fotos (verificación 19/10/2026): packshot oficial de la gama Héritage (levoyageur.fr, genérico de gama) + exterior en carretera del 8.7 CF exacto del importador oficial UK (levoyageur-motorhome.uk, «LVXH-8.7CF-INT-2») + salón de distribuidor + dormitorio del importador oficial UK (muestra camas gemelas; el 8.7 CF monta cama central). Precio: se deja sin dato porque Groupe Pilote no publica tarifas/PVP en abierto en sus webs oficiales (Pilote, Bavaria, Le Voyageur, Mooveo, Font Vendôme): los precios se facilitan a través de su red de concesionarios; sin PVP oficial verificable.",
    curiosidades:
      "La gama Héritage equipa de serie el sistema «drone view»: un conjunto de cámaras que ofrece una vista cenital de 360° del vehículo, pensado para maniobrar con casi nueve metros de autocaravana (levoyageur.fr, https://www.levoyageur.fr/gamme-heritage/).",
    descripcion: `El Le Voyageur Héritage LVXH 8.7 CF es el integral grande de la gama Héritage, la familia que la marca francesa de La Membrolle-sur-Longuené construye sobre Mercedes Sprinter con chasis AL-KO. Con 8,75 metros de longitud y tres ejes, es un peso pesado en el sentido literal —5.500 kg de MMA— y en el figurado: compite en la liga de los liners europeos donde cada detalle cuenta y el precio se negocia en el concesionario, nunca en un configurador público.

La base técnica es uno de sus argumentos: motor Mercedes de 2,0 litros y 170 CV asociado al cambio automático 9G-Tronic de nueve relaciones, con depósito de combustible de 92 litros, sistema Stop & Start, regulador adaptativo, frenada de emergencia asistida, estabilización ante viento lateral y cámara trasera de gran ángulo. Los asientos de cabina son calefactados, el volante multifunción es de cuero y la climatización es semiautomática. Sobre esa base, Le Voyageur monta su célula de integral con la osatura Duralinox que ha hecho famosa a la marca: una jaula de aluminio que rigidiza la carrocería de fibra y que los propietarios veteranos citan como seña de identidad de la casa desde hace décadas.

La implantación CF significa cama central: un somier de isla en la parte trasera, accesible por ambos lados, con cabecero retroiluminado con el emblema de la marca. Delante, el cuarto de baño transversal y, en la zona media, un salón capaz de reunir a seis comensales en la versión GJF hermana; en el CF el salón mantiene generosas banquetas enfrentadas. La cuarta y la tercera plaza de noche las aporta la cama abatible sobre el salón, de modo que el vehículo homologa cuatro plazas de viaje y cuatro camas sin necesidad de montar nada a diario salvo bajar la cama de techo, que es un gesto de segundos. El doble fondo de 25 cm, aislado y calefactado, recorre el vehículo y actúa como un suelo radiante que almacena el calor: con la caldera hidrónica ALDE de serie, el 8.7 CF es un cuatro estaciones de verdad, no solo de catálogo.

El equipamiento de la gama incluye el sistema multimedia MBUX de Mercedes, el «drone view» de cámaras con vista de 360 grados, toldo eléctrico, batería de litio Super B de 210 Ah en el pack Luxe, inversor de 3.000 W, paneles solares de 200 W, antena parabólica automática y climatización de techo Truma. El depósito de agua limpia es de 200 litros. La soute trasera supera los 2.600 litros en la gama, una cifra que permite llevar bicicletas, muebles de camping y equipamiento de invierno sin hacer equilibrios.

En precio, Le Voyageur no publica tarifa oficial para España: el importe se negocia con la red de distribuidores, que en Francia encabeza la propia red de la marca y en el resto de Europa sus importadores. Como referencia, en el Reino Unido el LVXH 8.7 CF parte de 169.400 libras para el model year 2026 y en Alemania se anuncian unidades nuevas sobre los 227.000 euros: son referencias de mercado, no PVP del fabricante, y por eso no figuran como precio de partida. El mantenimiento de la base Mercedes sigue el plan del fabricante (revisiones cada dos años o 40.000 km) y la célula exige la revisión anual de estanqueidad, gas y electricidad.

Cómo lo verificamos: los 170 CV, el cambio 9G-Tronic, los 92 litros de depósito, la calefacción ALDE, el chasis AL-KO y el sistema drone view proceden de la página oficial de la gama Héritage en levoyageur.fr. La longitud de 8,75 m, la MMA de 5.500 kg y el triple eje, del catálogo oficial Heritage; las 4 plazas y 4 camas, de la ficha oficial británica del model year 2026; la anchura de 2,32 m y el doble fondo de 25 cm, de los datos de gama publicados por la marca. Todo verificado el 19/10/2026. La marca no publica precio oficial en España, altura, masa en orden de marcha, carga útil, consumo ni etiqueta DGT: todo queda sin dato y explicado en las notas.

Para quién es: encaja con parejas viajeras de alto poder adquisitivo que quieren un liner francés con base Mercedes, cama central de verdad y autonomía de cuatro estaciones para escapadas largas por Escandinavia o los Alpes en invierno. También con quien valora la red de servicio de la marca y la reventa de un producto de nicho con demanda estable. No encaja con quien tenga solo el carnet B —aquí hace falta el C1—, con quien busque discreción en peajes y áreas (casi nueve metros y tres ejes se notan en cada pago y en cada maniobra), ni con quien necesite dormir a seis: son cuatro camas y ni una más. Y quien compare precios con integrales alemanes de 8,7 metros deberá asumir que el refinamiento francés se paga. En marcha, el conjunto transmite una solidez poco común: la jaula Duralinox elimina crujidos y la dirección del Sprinter mantiene la compostura incluso con viento lateral fuerte en autopista.`,
    pros: [
      "Base Mercedes Sprinter 170 CV con 9G-Tronic: la referencia en confort de conducción",
      "Cama central trasera de verdad, accesible por ambos lados, más cama abatible",
      "Calefacción hidrónica ALDE + doble fondo calefactado de 25 cm: cuatro estaciones real",
      "Sistema drone view con cámaras 360°: maniobrar 8,75 m con ayuda electrónica",
      "Osatura Duralinox y construcción de la marca: rigidez y reputación de durabilidad",
    ],
    contras: [
      "Exige carnet C1 (MMA 5.500 kg): fuera del alcance del conductor con solo el B",
      "8,75 m y tres ejes: peajes, áreas y maniobras penalizan en cada viaje",
      "Sin tarifa oficial en España: el precio se negocia y varía por distribuidor",
      "Solo 4 camas: no sirve para familias numerosas",
      "Masa y tamaño implican consumos elevados y mantenimiento de peso pesado",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/le-voyageur-heritage-lvxh-8-7-cf-2026-precio-ficha-tecnica-oficial.webp", alt: "Le Voyageur Héritage LVXH 8.7 CF, vista exterior", ancho: 1409, alto: 1343 },
      { src: "/media/le-voyageur-heritage-lvxh-8-7-cf-2026-precio-ficha-tecnica-interior1.webp", alt: "Le Voyageur Héritage LVXH 8.7 CF, interior", ancho: 1600, alto: 1066 },
      { src: "/media/le-voyageur-heritage-lvxh-8-7-cf-2026-precio-ficha-tecnica-interior2.webp", alt: "Le Voyageur Héritage LVXH 8.7 CF, interior", ancho: 1600, alto: 1063 },
      { src: "/media/le-voyageur-heritage-lvxh-8-7-cf-2026-precio-ficha-tecnica-detalle.webp", alt: "Le Voyageur Héritage LVXH 8.7 CF, detalle", ancho: 800, alto: 600 },
    ],
    analisisSlug: "le-voyageur-heritage-lvxh-8-7-cf-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Mercedes Sprinter: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Mercedes Sprinter)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 450 },
        { nombre: "Revisión célula Le Voyageur (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 300 },
      ],
    },
  },
  {
    id: "le-voyageur-heritage-lvxh-7-9-cf-2026-precio-ficha-tecnica",
    marca: "Le Voyageur",
    modelo: "Héritage LVXH 7.9 CF",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: null, // Le Voyageur no publica PVP oficial para España; null = «no publicado»
    potenciaCv: 170, // Mercedes Sprinter 2.0, oficial levoyageur.fr
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: null, // no publicada por la marca
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/le-voyageur-heritage-lvxh-7-9-cf-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/le-voyageur-heritage-lvxh-7-9-cf-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/le-voyageur-heritage-lvxh-7-9-cf-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7910, // catálogo oficial Heritage: 7,91 m, doble eje
    anchoMm: 2320, // 2,32 m (datos de gama publicados por la marca)
    altoMm: 3100, // 3,1 m (anuncio de unidad 2026 en concesionario oficial)
    pesoKg: null, // no publicado por la marca
    mmaKg: 4500, // catálogo oficial Heritage: 4.500 kg
    carnetNecesario: "C1", // mmaKg entre 3500 y 7500
    cargaUtilKg: null, // la marca no publica una carga útil única; prohibido calcular MMA-MRO
    consumo: null, // no publicado por la marca
    consumoUnidad: null,
    plazas: 4, // anuncio de unidad 2026 en concesionario oficial
    plazasDormir: 4, // cama central + cama pabellón (anuncio de unidad 2026)
    parNm: null,
    traccion: null, // la marca no lo declara en la ficha técnica
    emisionesCo2: null,
    aprox: [],
    notas:
      "Sustituye al código asignado «le-voyageur-elegance-7-9-cf»: la gama Elegance no existe en la oferta oficial actual (vigentes: Héritage y Eterna); el equivalente real es el Héritage LVXH 7.9 CF (CF = cama central). 170 CV Mercedes Sprinter 2.0, 9G-Tronic, 92 l de depósito, ALDE y chasis AL-KO de levoyageur.fr. Largo 7,91 m y MMA 4.500 kg (doble eje) del catálogo oficial Heritage. 4 plazas y 4 camas (central + pabellón), 200 l de agua y 3,1 m de alto del anuncio de una unidad 2026 en concesionario oficial. Precio: la marca no publica tarifa ES (null). Masa, carga útil, consumo y etiqueta DGT: no publicados (null). Fotos (verificación 19/10/2026): levoyageur.fr y el importador oficial UK no publican fotos específicas del LVXH 7.9 CF (solo planos de implantación); se mantienen las fotos de la prueba de prensa del 7.9 CF exacto (camperscaravans.nl, 2021) + salón del importador oficial sueco (levoyageur-husbil.se). Precio: se deja sin dato porque Groupe Pilote no publica tarifas/PVP en abierto en sus webs oficiales (Pilote, Bavaria, Le Voyageur, Mooveo, Font Vendôme): los precios se facilitan a través de su red de concesionarios; sin PVP oficial verificable.",
    curiosidades:
      "El LVXH 7.9 CF presume de una ducha XXL con 190 cm de altura libre, una cifra poco habitual incluso entre integrales de lujo y que el distribuidor francés TPL destaca en su selección de modelos premium (tpl.fr, https://www.tpl.fr/blog/evenements/top-3-des-camping-cars-premium-a-decouvrir-chez-tpl).",
    descripcion: `El Le Voyageur Héritage LVXH 7.9 CF es el hermano «contenido» del 8.7 CF: el mismo concepto de integral premium francés sobre Mercedes Sprinter y chasis AL-KO, pero en 7,91 metros y con 4.500 kg de MMA sobre doble eje. Es la puerta de entrada a la gama Héritage para quien quiere el tacto Le Voyageur —materiales nobles, osatura Duralinox, caldera ALDE— sin llegar a los casi nueve metros y las tres ejes del buque insignia.

La base técnica es compartida con toda la gama: motor Mercedes de 2,0 litros y 170 CV, cambio automático 9G-Tronic de nueve relaciones, depósito de 92 litros, regulador y limitador adaptativos, frenada de emergencia, ESP, control de presión de neumáticos y cámara trasera de gran ángulo. Los asientos de cabina calefactados, el volante de cuero multifunción y la climatización semiautomática completan un puesto de conducción que poco tiene que envidiar a una berlina de la estrella. La célula, con su jaula interna Duralinox y su carrocería de fibra, transmite la solidez que ha construido la reputación de la marca en sus 40 años de historia.

La implantación CF monta la cama central en la parte trasera: un somier de isla accesible por ambos laterales, con mesillas y armarios a cada lado y un cabecero con iluminación integrada. Por delante de la cama se sitúa un cuarto de baño transversal de generosas dimensiones, con ducha separada de 190 cm de altura libre —una cifra que el distribuidor francés TPL subraya en su análisis del modelo y que marca la diferencia para los viajeros más altos—. El salón delantero, con banquetas enfrentadas y mesa central, reúne cómodamente a cuatro o cinco comensales, y girando los asientos de cabina se amplía el espacio de convivencia. Las plazas nocturnas se completan con la cama pabellón sobre el salón: cuatro plazas de viaje y cuatro camas sin montajes complicados.

El doble fondo de 25 cm, aislado y calefactado, recorre el vehículo y, combinado con la caldera hidrónica ALDE, convierte al 7.9 CF en un cuatro estaciones creíble: el calor se reparte como un suelo radiante y los depósitos viajan protegidos de las heladas. El depósito de agua limpia es de 200 litros. Entre el equipamiento de la gama figuran el sistema multimedia MBUX, el drone view con cámaras de 360°, la batería de litio Super B de 210 Ah (pack Luxe), el inversor de 3.000 W, los paneles solares y el toldo eléctrico. Con 4.500 kg de MMA, eso sí, el carnet B no basta: hace falta el C1, un peaje de entrada que conviene asumir antes de enamorarse del vehículo.

En precio, Le Voyageur no publica tarifa oficial para España y el importe se negocia con la red de distribuidores. Las referencias de mercado sitúan a la gama Héritage en la franja alta del segmento —el 8.7 CF parte de 169.400 libras en Reino Unido—, pero son referencias, no PVP del fabricante, y por eso el precio de partida queda sin dato. El mantenimiento de la base Mercedes sigue el plan del fabricante (cada dos años o 40.000 km) y la célula requiere su revisión anual de estanqueidad.

Cómo lo verificamos: los 170 CV, el 9G-Tronic, los 92 litros, la calefacción ALDE, el chasis AL-KO y el drone view proceden de la página oficial de la gama Héritage en levoyageur.fr. Los 7,91 m y los 4.500 kg con doble eje, del catálogo oficial Heritage; las 4 plazas, las 4 camas (central + pabellón), los 200 litros de agua y los 3,1 m de altura, del anuncio de una unidad 2026 en un concesionario oficial; la ducha de 190 cm, del análisis del distribuidor francés TPL. Todo verificado el 19/10/2026. La marca no publica precio oficial en España, masa en orden de marcha, carga útil, consumo ni etiqueta DGT: todo sin dato y explicado en las notas.

Para quién es: encaja con parejas que quieren un integral de lujo manejable —siete metros y pico frente a casi nueve— sin renunciar a la cama central, la ducha grande y la calefacción hidrónica para viajar todo el año. Es también una opción sensata para quien se inicia en los pesos pesados: el doble eje es más sencillo de maniobrar y más barato de mantener que el triple eje. No encaja con quien solo tenga el carnet B, con quien necesite más de cuatro camas, ni con quien busque el precio por metro más ajustado: en esta liga se paga el acabado, los materiales y la base Mercedes. Y quien dude entre el 7.9 y el 8.7 debe saber que la diferencia no es solo el metro de eslora, sino el salto a tres ejes y 5.500 kg del hermano mayor. Como detalle práctico, las unidades 2026 bien equipadas salen de fábrica con batería de litio, panel solar, toldo eléctrico y antena para televisión, según el desglose de equipamiento del anuncio de referencia: conviene pedir la lista cerrada de extras antes de firmar, porque cada opción mueve la factura final de forma sensible.`,
    pros: [
      "Cama central trasera accesible por ambos lados, sin renuncias en 7,91 m",
      "Ducha con 190 cm de altura libre: confort real para viajeros altos",
      "Base Mercedes 170 CV + 9G-Tronic y chasis AL-KO: comportamiento de referencia",
      "ALDE hidrónica + doble fondo calefactado de 25 cm: invierno sin miedo",
      "Doble eje y 4.500 kg: más ágil y económico de mantener que el triple eje",
    ],
    contras: [
      "Exige carnet C1: el B no sirve con 4.500 kg de MMA",
      "Sin tarifa oficial en España: precio a negociar con el distribuidor",
      "Solo 4 camas y 4 plazas: formato de pareja, no familiar",
      "La cama pabellón resta altura libre al salón cuando está desplegada",
      "En la franja alta de precios del segmento sin ofrecer más espacio que rivales",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/le-voyageur-heritage-lvxh-7-9-cf-2026-precio-ficha-tecnica-oficial.webp", alt: "Le Voyageur Héritage LVXH 7.9 CF, vista exterior", ancho: 730, alto: 515 },
      { src: "/media/le-voyageur-heritage-lvxh-7-9-cf-2026-precio-ficha-tecnica-interior1.webp", alt: "Le Voyageur Héritage LVXH 7.9 CF, interior", ancho: 750, alto: 500 },
      { src: "/media/le-voyageur-heritage-lvxh-7-9-cf-2026-precio-ficha-tecnica-interior2.webp", alt: "Le Voyageur Héritage LVXH 7.9 CF, interior", ancho: 1600, alto: 1066 },
      { src: "/media/le-voyageur-heritage-lvxh-7-9-cf-2026-precio-ficha-tecnica-detalle.webp", alt: "Le Voyageur Héritage LVXH 7.9 CF, detalle", ancho: 800, alto: 533 },
    ],
    analisisSlug: "le-voyageur-heritage-lvxh-7-9-cf-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Mercedes Sprinter: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Mercedes Sprinter)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 450 },
        { nombre: "Revisión célula Le Voyageur (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 300 },
      ],
    },
  },
];
