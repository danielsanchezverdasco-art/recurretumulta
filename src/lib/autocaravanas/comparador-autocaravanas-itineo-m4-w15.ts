// Autocaravanas Itineo — lote Merlín 4 (19/10/2026).
// Fuentes: catálogo oficial Itineo colección 2026 (ficha técnica CT-2026, datos de dimensiones,
// plazas y MMA), extracto de tarifa oficial via concesionario AJD (Bélgica), análisis de la
// colección 2027 en CampingCarLeSite, presentación de novedades en CamperLife/CamperOnLine,
// prueba en Out & About Live (CJ660). Verificado el 19/10/2026.
// Sustituciones (regla del brief): el modelo «CJ650» no existe en el catálogo oficial de Itineo
// (2025, 2026 ni 2027); se sustituye por el CJ660, el integral estrecho real de la gama Famili
// Compact. El modelo «SB700» no figura en la colección 2026 (fue sustituido por el SBD700 en
// 2024); se sustituye por el SBD700, el integral familiar vigente de la gama Famili.
// Notas honestas: Itineo no publica PVP oficial para España → precioDesde null en ambos
// (se citan como referencia las tarifas francesas publicadas por la prensa especializada).
// La tara exacta depende del equipamiento → pesoKg null; la carga útil no la publica la marca
// como cifra de catálogo para estos acabados → cargaUtilKg null. Consumo y emisiones → null.

import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_ITINEO_M4: Autocaravana[] = [
  {
    id: "itineo-cj660-2026-precio-ficha-tecnica",
    marca: "Itineo",
    modelo: "CJ660",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: null, // Itineo no publica PVP oficial ES; ref. tarifa FR 2027: hasta 83.900 € ed. 20 años
    potenciaCv: 140,
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
    imagen: "/media/itineo-cj660-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/itineo-cj660-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/itineo-cj660-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6610,
    anchoMm: 2190,
    altoMm: 2800,
    pesoKg: null, // la tara varía según equipamiento; la marca no publica una cifra única
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica carga útil de catálogo; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4,
    parNm: null,
    traccion: "delantera", // base Peugeot Boxer de tracción delantera (catálogo oficial)
    emisionesCo2: null,
    aprox: [],
    notas:
      "El «Itineo CJ650» no existe en el catálogo oficial de Itineo " +
      "(colecciones 2025, 2026 y 2027 verificadas); esta ficha cubre el CJ660, el integral estrecho " +
      "real de la gama Famili Compact. Datos: 6.610 x 2.190 x 2.800 mm, MMA 3.500 kg, 4 plazas de viaje " +
      "y 4 de noche según la ficha técnica oficial de la colección 2026 (ITINEO_CT-2026). Motor Peugeot " +
      "Boxer 2.2 l de 140 CV, camas gemelas de 80x210/190 cm con extensión king-size de 150x202 cm en " +
      "opción y cama de cabina basculante de 140x188 cm según extracto de tarifa oficial (concesionario " +
      "AJD). Nevera 128 l, agua limpia 110 l y grises 90 l, batería 2x100 Ah, calefacción Truma Combi 4, " +
      "según fichas de catálogo de la red de distribución. Sin dato publicado: precio ES (Itineo no publica tarifa  Precio: se deja sin dato porque Itineo (Groupe Rapido) no publica PVP en su web oficial (los precios se obtienen en su red de concesionarios); sin tarifa oficial abierta verificable." +
      "oficial en España), tara exacta, carga útil, consumo y emisiones.",
    curiosidades:
      "Con solo 2,19 m de anchura de carrocería, el CJ660 es uno de los integrales más estrechos del " +
      "mercado europeo: Itineo lo diseñó así para ganar agilidad en marcha sin renunciar al espacio " +
      "interior de un integral — https://camperlife.it/notizie/novita-itineo.html",
    descripcion: `El Itineo CJ660 es el integral estrecho de la gama Famili Compact, la respuesta de la
marca francesa del grupo Rapido a quienes quieren un integral de verdad —con su parabrisas panorámico
y su cama basculante sobre la cabina— pero en un formato que se mueve por carreteras secundarias con
la soltura de una perfilada. Mide 6,61 metros de largo y solo 2,19 metros de ancho, dieciséis
centímetros menos que un integral convencional, y esa estrechez es su seña de identidad: entra por
donde otros no pasan y aparca donde otros no caben.

En medidas y habitabilidad, hablamos de 6.610 mm de longitud, 2.190 mm de anchura y 2.800 mm de
altura, con una MMA de 3.500 kg que permite conducirlo con el carnet B. La distribución apuesta por
las camas gemelas traseras —de 80x210 y 80x190 cm— sobre un garaje de buen tamaño, con la posibilidad
de unirlas mediante la extensión king-size de 150x202 cm que se ofrece en opción. El salón delantero
acoge cuatro plazas de viaje y se completa con la cama basculante de cabina de 140x188 cm, de modo
que el CJ660 duerme a cuatro personas sin necesidad de montar y desmontar la dinette cada noche. La
cocina en línea incluye fregadero de inox, placa de dos o tres fuegos según acabado y nevera de 128
litros con selección automática de energía, mientras que el cuarto de baño recurre al sistema
Duo'Space: una pared pivotante que transforma el espacio del WC en una ducha amplia cuando se
necesita.

En tecnología y equipamiento, la construcción Itineo Life merece mención propia: techo, paredes,
bajos y caras internas de las puertas del garaje son de poliéster (GRP), un material insensible al
granizo que además permite una garantía de estanqueidad de siete años. El aislamiento es de
Styrofoam en techo, paredes y suelo. De serie incluye cámara de marcha atrás, cierre centralizado de
cabina y célula, climatizador de cabina, elevalunas eléctricos y calefacción Truma Combi 4 utilizable
en marcha. El pack Life, el más demandado, añade llantas de aleación de 16 pulgadas, faros LED
delanteros, volante de cuero, radio multimedia de 9 pulgadas, ducha exterior y segunda batería de
célula, entre otros elementos.

En camas y plazas, la configuración de serie duerme a cuatro: las dos camas gemelas traseras y la
cama basculante de cabina. La extensión king-size opcional convierte la zona trasera en una gran
superficie de 150x202 cm para quienes prefieren dormir juntos. Las cuatro plazas de viaje con
cinturones lo hacen apto para dos adultos y dos niños, y el depósito de agua limpia de 110 litros
—con 90 de grises— da para varios días de autonomía con un uso razonable.

En mecánica, el Peugeot Boxer 2.2 litros entrega 140 CV con tracción delantera, una mecánica probada
y con servicio en cualquier punto de Europa. Para la colección 2027 la marca ha anunciado además una
motorización de 160 CV en opción, aunque en la gama 2026 el 140 CV es el motor de referencia. El
depósito de gasóleo es de 90 litros y el conjunto se mueve con soltura gracias a un peso contenido
propio de su carrocería estrecha.

En precio y red comercial en España, Itineo no publica tarifa oficial para nuestro mercado, por lo
que no es posible dar un precio de partida verificado: cada distribuidor aplica la tarifa francesa
con sus adaptaciones. Como referencia, la prensa especializada francesa sitúa la gama Famili Compact
2027 entre 75.900 € (CM660) y 83.900 € (CJ660 edición 20.º aniversario). En España la marca se
comercializa a través de la red de distribuidores del grupo Rapido, con presencia en las principales
zonas caravanistas. Conviene pedir presupuesto con el pack Life incluido, porque concentra los
extras que casi todos los compradores acaban pidiendo por separado.

Cómo lo verificamos: dimensiones, plazas, MMA y gama proceden de la ficha técnica oficial de la
colección 2026 de Itineo (documento ITINEO_CT-2026); el detalle de camas, medidas de colchones y
equipamiento opcional, del extracto de tarifa oficial distribuido por la red de concesionarios; los
precios de referencia franceses, del análisis de la colección 2027 en CampingCarLeSite; y la
descripción de la gama estrecha, de la presentación oficial recogida por CamperLife. Todo verificado
el 19/10/2026. Lo que la marca no publica —precio oficial en España, tara exacta, carga útil,
consumo y emisiones— queda declarado sin dato y en las notas de esta ficha.

Para quién es: es el integral ideal para una pareja —o una pareja con dos niños pequeños— que
prioriza la maniobrabilidad y quiere aparcar y circular sin el estrés de un 2,35 m de ancho, sin
renunciar a dormir en camas fijas traseras. No es para quien necesite cinco o seis plazas ni para
quien busque un gran salón enfrentado: la estrechez se paga en amplitud interior, y para familias
numerosas la propia Itineo ofrece el SBD700 o el SB740 en la gama Famili de anchura estándar.`,
    pros: [
      "Solo 2,19 m de ancho: el integral más ágil para carreteras estrechas y aparcamientos",
      "Camas gemelas traseras fijas más cama basculante de cabina: 4 plazas sin montar dinette",
      "Carrocería 100% poliéster anti-granizo con garantía de estanqueidad de 7 años",
      "Baño Duo'Space con pared pivotante: ducha amplia en un integral compacto",
      "Mecánica Peugeot Boxer 140 CV probada, con servicio en toda Europa",
    ],
    contras: [
      "Itineo no publica precio oficial en España: cada distribuidor aplica su tarifa",
      "La estrechez resta amplitud al salón frente a integrales de 2,32-2,35 m",
      "Solo 4 plazas: insuficiente para familias de cinco o más",
      "El depósito de agua limpia de 110 l es justo para cuatro personas varios días",
      "Algunos extras casi imprescindibles (pack Life) encarecen el precio final",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/itineo-cj660-2026-precio-ficha-tecnica-oficial.webp", alt: "Itineo CJ660, vista exterior", ancho: 800, alto: 600 },
      { src: "/media/itineo-cj660-2026-precio-ficha-tecnica-interior1.webp", alt: "Itineo CJ660, salón y cocina (foto oficial Itineo)", ancho: 2000, alto: 1490 },
      { src: "/media/itineo-cj660-2026-precio-ficha-tecnica-interior2.webp", alt: "Itineo CJ660, dormitorio (foto oficial Itineo)", ancho: 1572, alto: 2000 },
      { src: "/media/itineo-cj660-2026-precio-ficha-tecnica-detalle.webp", alt: "Itineo CJ660, camas gemelas (foto oficial Itineo)", ancho: 2000, alto: 1334 },
    ],
    analisisSlug: "itineo-cj660-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Peugeot Boxer: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Peugeot Boxer)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 320 },
        { nombre: "Revisión célula Itineo (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 220 },
      ],
    },
  },
  {
    id: "itineo-sbd700-2026-precio-ficha-tecnica",
    marca: "Itineo",
    modelo: "SBD700",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: null, // Itineo no publica PVP oficial ES; ref. tarifa FR 2027 desde 78.900 €
    potenciaCv: 140,
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
    imagen: "/media/itineo-sbd700-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/itineo-sbd700-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/itineo-sbd700-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6990,
    anchoMm: 2340,
    altoMm: 2940,
    pesoKg: null, // la tara varía según equipamiento; la marca no publica una cifra única
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica carga útil de catálogo; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 6,
    plazasDormir: 6,
    parNm: null,
    traccion: "delantera", // base Fiat Ducato de tracción delantera (catálogo oficial)
    emisionesCo2: null,
    aprox: [],
    notas:
      "El «Itineo SB700» no figura en la colección oficial 2026 de Itineo " +
      "(la gama Famili vigente incluye SBD700, JC740, MC740 y SB740); esta ficha cubre el SBD700, el " +
      "integral familiar vigente de la marca, lanzado en 2024. Datos: 6.990 x 2.340 x 2.940 mm, MMA " +
      "3.500 kg, 6 plazas de viaje y 6 de noche según la ficha técnica oficial de la colección 2026 " +
      "(ITINEO_CT-2026). Motor Fiat Ducato 2.0 l de 140 CV. Masa en orden de marcha 2.995 kg y carga " +
      "útil de catálogo UK 505 kg según ficha técnica de distribuidor (FindMyLeisureVehicle); no se " +
      "aplica como carga útil de esta ficha por ser cifra de mercado británico. Literas traseras, cama basculante de " +
      "cabina de 140x190 cm y cama de dinette según documentación de la red. Sin dato publicado: precio ES (Itineo  Precio: se deja sin dato porque Itineo (Groupe Rapido) no publica PVP en su web oficial (los precios se obtienen en su red de concesionarios); sin tarifa oficial abierta verificable." +
      "no publica tarifa oficial en España), tara exacta, consumo y emisiones.",
    curiosidades:
      "El SBD700 se lanzó en 2024 como el primer integral Itineo de menos de 7 metros capaz de dormir " +
      "a seis personas: su litera inferior se pliega para liberar un garaje amplio, accesible tanto " +
      "desde el exterior como desde el interior de la célula — http://magazine.camperonline.it/category/itineo/",
    descripcion: `El Itineo SBD700 es el integral familiar de la marca francesa: un auténtico clase A de
menos de siete metros capaz de llevar y dormir a seis personas con el carnet B. Lanzado en 2024 para
la colección 2025 y confirmado en la gama 2026, nació con una idea clara: demostrar que para viajar
en familia no hace falta un mastodonte de 7,40 metros. Con 6,99 metros de longitud concentra lo
esencial —literas para los niños, cama basculante para los padres, gran salón y baño con ducha
separada— en un formato que se conduce sin miedo.

En medidas y habitabilidad, hablamos de 6.990 mm de largo, 2.340 mm de ancho y 2.940 mm de alto, con
una MMA de 3.500 kg. La distribución es un ejercicio de aprovechamiento: en la parte trasera, dos
literas de generosas dimensiones para los niños; en el centro, un cuarto de baño con ducha separada
de la zona del WC, algo poco habitual en esta longitud; y delante, un salón amplio con banqueta en L
capaz de acoger a seis comensales, coronado por la cama basculante eléctrica de cabina de 140x190
cm. La sexta plaza de noche se obtiene de la dinette. Un detalle inteligente: la litera inferior se
pliega hacia arriba y libera un garaje de buen tamaño, accesible desde una trampilla exterior y
también desde dentro de la célula, perfecto para bicicletas, sillas o el equipamiento de esquí.

En tecnología y equipamiento, el SBD700 comparte la construcción Itineo Life —carrocería de
poliéster insensible al granizo y aislamiento Styrofoam— y la garantía de estanqueidad de siete años
que caracteriza a la marca. La dotación de serie incluye cocina equipada con frigorífico de 145
litros, banqueta con fijaciones Isofix para las sillas infantiles, iluminación LED ambiental,
mosquitera en la puerta de la célula y preinstalación para panel solar. El puesto de conducción del
Fiat Ducato aporta ergonomía de turismo, con asientos giratorios que se integran en el salón cuando
se está acampado.

En camas y plazas, la configuración duerme a seis sin trucos: dos literas traseras fijas, la cama
basculante de cabina y la cama de la dinette. Las seis plazas de viaje con cinturones permiten llevar
a toda la familia legalmente, y la banqueta con Isofix resuelve el eterno problema de las sillas de
los más pequeños. Es, en la práctica, uno de los pocos integrales del mercado que ofrece seis plazas
reales de viaje y noche por debajo de los siete metros.

En mecánica, el Fiat Ducato con el motor de 140 CV y tracción delantera mueve el conjunto con
soltura; la masa en orden de marcha declarada en ficha británica es de 2.995 kg, lo que deja un
margen de carga razonable dentro de los 3.500 kg de MMA para una familia equipada. Para la colección
2027 la marca ha anunciado una motorización de 160 CV en opción. El depósito de gasóleo y un
comportamiento rutero noble —propio de la base Ducato, la más extendida del caravaning europeo—
completan un conjunto pensado para viajar cargado sin agobios. El puesto de conducción elevado,
típico de un integral, ofrece una visibilidad excelente que facilita la conducción a quienes dan el
salto desde un turismo, y el radio de giro contenido para sus casi siete metros permite maniobrar en
campings sin ayuda externa.

En precio y red comercial en España, Itineo no publica tarifa oficial para nuestro mercado, por lo
que no es posible dar un precio de partida verificado. Como referencia, la prensa francesa lo situó
en su lanzamiento en torno a los 76.600 € y la tarifa 2027 de la gama Famili parte de 78.900 € para
el SBD700. En España se comercializa a través de la red de distribuidores del grupo Rapido. Merece
la pena negociar el pack de equipamiento familiar —que suele incluir toldo, portabicicletas y panel
solar— porque son los tres extras que casi todas las familias acaban montando.

Cómo lo verificamos: dimensiones, plazas, MMA y pertenencia a la colección 2026 proceden de la ficha
técnica oficial de Itineo (documento ITINEO_CT-2026); la masa en orden de marcha y la carga útil, de
la ficha técnica de distribuidor británico; el lanzamiento y enfoque familiar, de la cobertura de
CamperOnLine Magazine y CamperLife; y los precios franceses de referencia, del análisis de la
colección 2027 en CampingCarLeSite. Todo verificado el 19/10/2026. Lo que la marca no publica
—precio oficial en España, consumo y emisiones— queda declarado sin dato y en las notas.

Para quién es: es el integral perfecto para una familia de cuatro a seis miembros que quiere un
clase A auténtico sin saltar a los 7,40 metros ni al carnet C1, con camas fijas para los niños y
autonomía para viajar todo el año. No es para parejas que viajan solas —para ellas el CJ660 estrecho
o un perfilado resultan más lógicos y económicos— ni para quien necesite un garaje trasero pasante
de gran altura: las literas condicionan ese espacio, aunque el truco de la litera plegable lo
compensa en parte.`,
    pros: [
      "Seis plazas reales de viaje y noche en menos de 7 metros con carnet B",
      "Literas traseras fijas más cama basculante de cabina: los niños duermen sin montar nada",
      "La litera inferior se pliega y libera un garaje accesible desde dentro y fuera",
      "Baño con ducha separada del WC, raro en esta longitud",
      "Banqueta con Isofix y construcción de poliéster anti-granizo con 7 años de estanqueidad",
    ],
    contras: [
      "Itineo no publica precio oficial en España: cada distribuidor aplica su tarifa",
      "Las literas restan altura útil al garaje trasero frente a un integral con camas gemelas",
      "Con seis ocupantes y equipaje, el margen hasta los 3.500 kg exige controlar el peso",
      "El motor de 140 CV es justo si se viaja siempre a plena carga por autopista",
      "Para parejas sin niños hay opciones más baratas y ágiles dentro de la propia gama",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/itineo-sbd700-2026-precio-ficha-tecnica-oficial.webp", alt: "Itineo SBD700, vista exterior", ancho: 1200, alto: 800 },
      { src: "/media/itineo-sbd700-2026-precio-ficha-tecnica-interior1.webp", alt: "Itineo SBD700, salón interior", ancho: 1200, alto: 800 },
      { src: "/media/itineo-sbd700-2026-precio-ficha-tecnica-interior2.webp", alt: "Itineo SBD700, zona de literas", ancho: 1200, alto: 800 },
      { src: "/media/itineo-sbd700-2026-precio-ficha-tecnica-detalle.webp", alt: "Itineo SBD700, detalle", ancho: 1200, alto: 800 },
    ],
    analisisSlug: "itineo-sbd700-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Itineo (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 220 },
      ],
    },
  },
];
