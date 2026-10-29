// Autocaravanas Malibu — lote Merlín 3 (19/10/2026).
// Fuentes: malibu-carthago.com (web oficial), catálogo oficial Malibu 2024 (derfreistaat.de,
// dominio oficial de la marca), outandaboutlive.co.uk (prueba del I 500 QB por Peter Vaughan),
// alpacacamping.de y truckscout24.es (anuncios de concesionarios, solo como contraste).
// Verificado el 19/10/2026.
// Notas honestas: Malibu no publica PVP oficial para España (precioDesde=null en ambas fichas);
// la masa en orden de marcha del 640 LE K no figura en la web oficial (los anuncios de
// concesionarios citan 3.144 kg, sin confirmación de fábrica); la anchura del 640 LE K es
// 2.050 mm con chasis f35 y 2.100 mm con chasis f40 heavy; el I 500 QB figura en el catálogo
// 2024 y en la gama 2026 como «I 500 RB-QB comfort 4.2 t» en el configurador oficial.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_MALIBU_M3: Autocaravana[] = [
  {
    id: "malibu-van-diversity-640-le-k-2026-precio-ficha-tecnica",
    marca: "Malibu",
    modelo: "Van diversity 640 LE K",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: null, // Malibu no publica PVP oficial para España
    potenciaCv: 140, // Fiat Ducato 2.2 Multijet 140 de serie; opcional 180 CV
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
    imagen: "/media/malibu-van-diversity-640-le-k-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/malibu-van-diversity-640-le-k-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/malibu-van-diversity-640-le-k-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6363, // anuncios de concesionarios sobre Fiat Ducato (truckscout24.es)
    anchoMm: 2050, // 2.050 mm con chasis f35; 2.100 mm con chasis f40 heavy
    altoMm: 2590,
    pesoKg: null, // la marca no publica la masa en orden de marcha; un anuncio cita 3.144 kg
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica carga útil; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 2, // 4 con el techo elevable opcional family-for-4
    parNm: null,
    traccion: null, // la marca no declara la tracción en la ficha del modelo
    emisionesCo2: null,
    aprox: [],
    notas:
      "Datos de la web oficial malibu-carthago.com (verificada el 19/10/2026) y de anuncios " +
      "de concesionarios alemanes/españoles (truckscout24) usados solo como contraste: " +
      "longitud 6.363 mm, anchura 2.050 mm (f35) / 2.100 mm (f40 heavy), altura 2.590 mm, " +
      "MMA 3.500 kg, Fiat Ducato 2.2 Multijet de 140 CV de serie (180 CV opcional), camas " +
      "individuales de 202/189 x 90/102 cm, depósito de agua 100 l, aguas grises 90 l, " +
      "frigorífico de compresor Thetford de 84 l y calefacción Truma Combi 6 E. Sin dato publicado: " +
      "precio (Malibu no publica PVP para España; el portal alemán alpacacamping.de " +
      "sitúa el precio de partida en torno a 65.000 € en Alemania, cifra aproximada y no " +
      "oficial), peso (sin dato oficial; un anuncio cita 3.144 kg), carga útil, consumo, " +
      "par, tracción y emisiones (la marca no los publica). Plazas para dormir: 2 de serie,  Precio: se deja sin dato porque Malibu (grupo Carthago) solo ofrece el precio base por modelo en su configurador en línea; sin PVP abierto verificable por modelo." +
      "4 con el techo elevable opcional family-for-4.",
    curiosidades:
      "El Van diversity coupé 640 LE K puede pedirse con unos característicos «ojos de buey» " +
      "(portholes redondos) en la trasera, un guiño de diseño que la propia Malibu destaca " +
      "como seña de identidad de la gama: «los portholes traseros opcionales añaden un toque " +
      "de estilo que hace la camper aún más distintiva». Fuente: web oficial de Malibu, " +
      "página de la gama Van diversity (https://www.malibu-carthago.com/en/camper-van/diversity-camper-van/).",
    descripcion: `La Malibu Van diversity 640 LE K es la camper grande de la familia diversity,
la gama que la marca del grupo Carthago define como «la todoterreno con confort de cocina XL
y una generosa sensación de espacio». Sobre base Fiat Ducato y con 6,36 metros de largo, es
una furgoneta camperizada de techo alto pensada para parejas que quieren viajar con el
tamaño de una furgo pero con el acabado de una autocaravana premium. Las siglas lo dicen
todo: 640 son los centímetros aproximados, LE alude a las camas individuales longitudinales
(Einzelbetten) y la K indica la versión coupé, con la trasera redondeada que le da ese aire
tan reconocible.

En medidas y habitabilidad, el 640 LE K juega en la liga de las campers grandes. Con 2,05
metros de ancho (2,10 en la versión con chasis pesado f40) y 2,59 de alto, cabe en una plaza
de aparcamiento normal con algo de holgura y pasa por túneles y parkings donde una
perfilada de 2,32 metros ya tendría que pensárselo. Dentro, la distribución es la clásica
de camas gemelas traseras: dos individuales de 202 y 189 centímetros de largo que se pueden
unir con el suplemento opcional para formar una gran superficie de descanso. Entre la zona
de día y la de noche se sitúan la cocina y el cuarto de baño con ducha separada, de modo que
el paso hacia las camas no obliga a cruzar toda la célula. La altura interior ronda los
1,90 metros, suficiente para moverse con comodidad. El depósito de agua limpia es de 100
litros y el de grises de 90, cifras honestas para una camper de este tamaño, y el
frigorífico de compresor Thetford de 84 litros enfría de verdad incluso con calor, algo que
se agradece en ruta por el sur.

En tecnología y equipamiento, Malibu traslada a la camper parte del ADN Carthago: muebles
con acabado bicolor en cerezo premium, claraboyas Heki y Mini-Heki, oscurecedores con
mosquitera en todas las ventanas y un puesto de conducción que, con los paquetes de chasis,
puede llevar instrumentación digital, climatizador automático, asistente de aparcamiento y
pantalla multimedia. La calefacción es una Truma Combi 6 E con panel digital CP Plus, el
mismo equipo que montan autocaravanas mucho más grandes, y la cocina crece con la
extensión de encimera para quien cocine en serio. Como en toda la marca, el precio de
partida es solo el principio: los paquetes (Chassis, Chassis Plus, Superestructura,
Style) y la lista de opcionales permiten configurar la camper casi a la carta, pero cada
extra suma kilos y euros.

En camas y plazas, la configuración de serie es clara: cuatro plazas de viaje con
cinturón y dos camas individuales traseras. La gracia del 640 LE K es que esas camas son
largas de verdad (más de dos metros una de ellas) y quedan sobre un maletero accesible
desde el exterior. Quien viaje con niños o con invitados ocasionales puede pedir el techo
elevable family-for-4, que añade una cama doble arriba y convierte la camper en un cuatro
plazas para dormir sin tocar la distribución de abajo.

En mecánica, la base es el Fiat Ducato 2.2 Multijet con 140 CV de serie, el motor que
mueve a media Europa camperizada, con la opción del 180 CV para quien arrastre carga o
pida el cambio automático de 8 velocidades. La MMA se queda en 3.500 kilos, así que basta
el carnet B, y el conjunto promete consumos contenidos para su tamaño. Es tracción
delantera, como manda la tradición Ducato, y el chasis admite el paquete de ayudas a la
conducción de Fiat (control de crucero adaptativo, mantenimiento de carril o frenada de
emergencia según configuración).

En precio y red comercial en España, hay que ser honestos: Malibu no publica una tarifa
oficial para el mercado español, de modo que el precio de partida queda en «no
publicado». Como referencia orientativa —no oficial—, el portal alemán alpacacamping.de
sitúa el 640 LE K en torno a los 65.000 euros en Alemania antes de opcionales, y los
anuncios de unidades matriculadas que se ven en España se mueven por encima de esa cifra
según equipamiento. Malibu se vende a través de la red de concesionarios del grupo
Carthago, con presencia en las principales provincias españolas; conviene pedir
presupuesto cerrado por escrito porque la lista de extras puede mover el precio final
decenas de miles de euros.

Cómo lo verificamos: consultamos la web oficial malibu-carthago.com (página de la gama
Van diversity y ficha del modelo 640 LE K) el 19/10/2026 y contrastamos medidas,
motorizaciones y equipamiento con anuncios detallados de concesionarios alemanes en
truckscout24 (unidades nuevas y matriculadas del modelo exacto). Los datos sin respaldo
oficial —precio para España, masa en orden de marcha, carga útil, consumos— quedan
declarados sin dato en la ficha técnica y explicados en las notas.

Para quién es: para parejas viajeras que quieren una camper grande, bien aislada y con
acabado premium sin saltar a una perfilada; para quien duerme mejor en camas gemelas
largas que en una transversal; para el que valora poder aparcar en ciudad y aun así
cocinar y ducharse como en casa. No es para familias de cuatro que necesiten cuatro camas
fijas (ahí el techo elevable es obligatorio), ni para quien busque el precio más bajo del
segmento: Malibu juega en la parte alta y lo cobra.`,
    pros: [
      "Camas individuales traseras de 202/189 cm: de las más largas del segmento camper",
      "Acabado premium heredado de Carthago (muebles bicolor, Truma Combi 6 E, Heki)",
      "Con 6,36 m y 2,05 m de ancho sigue siendo manejable en ciudad y parkings",
      "Calefacción Truma Combi 6 E y depósitos de 100/90 l: apta para viajar todo el año",
      "Techo elevable family-for-4 opcional que la convierte en 4 plazas sin cambiar el plano",
    ],
    contras: [
      "Sin PVP oficial para España: el precio real solo se conoce pidiendo presupuesto",
      "La lista de opcionales es larguísima y el precio final puede dispararse",
      "Dos plazas para dormir de serie: las familias necesitan el techo elevable sí o sí",
      "Masa en orden de marcha no publicada por la marca: hay que vigilar la carga útil real",
      "Los 140 CV de serie pueden quedarse justos a plena carga; el 180 CV es opcional",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/malibu-van-diversity-640-le-k-2026-precio-ficha-tecnica-oficial.webp", alt: "Malibu Van diversity 640 LE K, vista exterior", ancho: 1500, alto: 876 },
      { src: "/media/malibu-van-diversity-640-le-k-2026-precio-ficha-tecnica-interior1.webp", alt: "Malibu Van diversity 640 LE K, salón", ancho: 1080, alto: 806 },
      { src: "/media/malibu-van-diversity-640-le-k-2026-precio-ficha-tecnica-interior2.webp", alt: "Malibu Van diversity 640 LE K, cocina", ancho: 1080, alto: 720 },
      { src: "/media/malibu-van-diversity-640-le-k-2026-precio-ficha-tecnica-detalle.webp", alt: "Malibu Van diversity 640 LE K, detalle del techo con microfibra climática", ancho: 1080, alto: 720 },
    ],
    analisisSlug: "malibu-van-diversity-640-le-k-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Malibu (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
  {
    id: "malibu-i-500-qb-2026-precio-ficha-tecnica",
    marca: "Malibu",
    modelo: "I 500 QB",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: null, // Malibu no publica PVP oficial para España
    potenciaCv: 140, // Fiat Ducato 2.2 Multijet 140 de serie según catálogo y pruebas
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
    imagen: "/media/malibu-i-500-qb-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "", // portada de prensa (Out & About Live): modelo exacto, no oficial
    imagenInteriorOficial: "", // interiores de prensa: modelo exacto, no oficiales
    videoId: null,
    videoCanal: null,
    largoMm: 7480, // catálogo oficial Malibu 2024
    anchoMm: 2270,
    altoMm: 2940,
    pesoKg: 3095, // catálogo 2023 (3.095 kg en orden de marcha)
    mmaKg: 3500, // opcional 4.250 kg (confort plus fuera de la clase 3,5 t)
    carnetNecesario: "B", // C1 si se opta por la MMA de 4.250 kg
    cargaUtilKg: null, // la marca no publica carga útil; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 5 en opción
    plazasDormir: 4, // cama queen 195x160 + cama abatible 195x160
    parNm: null,
    traccion: null, // la marca no declara la tracción en la ficha del modelo
    emisionesCo2: null,
    aprox: [],
    notas:
      "Datos del catálogo oficial Malibu 2024 (derfreistaat.de, dominio oficial de la marca), " +
      "de la prueba del I 500 QB Touring en outandaboutlive.co.uk (Peter Vaughan) y de la " +
      "guía Malibu 2026 del mismo medio. Medidas oficiales: 748 x 227 x 294 cm; camas: queen " +
      "195 x 160 cm + cama abatible sobre el salón 195 x 160 cm; plazas 4/5 y 2/4 para dormir " +
      "según configuración; baño comfort luxury con ducha separada y vestidor separable; " +
      "doble suelo calefactado; garaje 112 cm (124 cm con la opción Pedelec). Sin dato publicado: " +
      "precio (Malibu no publica PVP para España; la guía 2026 británica parte de " +
      "74.340 £, precio de otro mercado), carga útil, consumo, par, tracción y emisiones " +
      "(la marca no los publica). En la gama 2026 el modelo figura en el configurador " +
      "oficial como «I 500 RB-QB comfort 4.2 t». Fotos: prueba de prensa de Out & About Live  Precio: se deja sin dato porque Malibu (grupo Carthago) solo ofrece el precio base por modelo en su configurador en línea; sin PVP abierto verificable por modelo." +
      "sobre la unidad exacta (no oficiales de fábrica), sin marcas de agua ni concesionario.",
    curiosidades:
      "Malibu diseñó un garaje específico para los modelos con cama queen como el I 500 QB: " +
      "el «Malibu Pedelec scooter garage». La cama trasera se levanta desde el exterior con " +
      "una sola maniobra manual, la rueda delantera de la bici encaja en un hueco del suelo " +
      "y la altura de carga crece hasta 124 cm; si no se transportan bicis, una tapa deja el " +
      "suelo del garaje completamente plano. Fuente: catálogo oficial Malibu 2024, páginas " +
      "41-42 (https://derfreistaat.de/katalogePDFs_en/malibu/malibu-motorcaravans-catalogue-2024-english.pdf).",
    descripcion: `El Malibu I 500 QB es la integral con cama queen de la marca «hermana pequeña»
de Carthago, y probablemente la forma más asequible de entrar en el mundo de las integrales
premium alemanas sin renunciar al apellido. La I es de integral —la cabina forma parte de
la célula, sin el capó del furgón— y la QB es de queen bed: una cama de matrimonio de
195 x 160 centímetros en la trasera, orientada a lo largo, con acceso por ambos lados.
Con 7,48 metros de largo y 2,27 de ancho es una integral de tamaño medio-grande, más
estrecha que la media del segmento, lo que se nota para bien en carreteras secundarias.

En medidas y habitabilidad, el I 500 QB pertenece a la «Comfort Plus class» de Malibu:
modelos de 7,20 a 7,50 metros pensados para quienes ponen el confort por delante de la
barrera de las 3,5 toneladas. El salón en L con mesa giratoria 360° es amplio y luminoso,
con asientos de cabina giratorios que se integran en la zona de día, y la cocina de
rincón comfort ofrece una encimera curva extragrande, cajones profundos con cierre
suave y un frigorífico de 153 litros a la altura de la mano. El baño es de los puntos
fuertes: un «comfort luxury bathroom» con ducha redonda separada de 198 cm de altura
libre, lavabo e inodoro, que con la puerta de lujo y la pared de TV extraíble se
convierte en un vestidor completamente separable del resto. El doble suelo calefactado
—seña de identidad de la marca— aporta efecto suelo radiante y un enorme espacio de
carga con 48 cm de altura útil, accesible desde fuera por varias trampillas.

En tecnología y equipamiento, el I 500 QB respira Carthago por los cuatro costados:
muebles con tecnología de doble ensamblaje (atornillados y encolados), estructura de
poliéster sin madera, paredes laterales de aluminio y garantía de seis años contra
filtraciones. La cabina presume del mejor concepto de visibilidad de su clase según la
marca, con espejos tipo autobús y un parabrisas panorámico bajo que deja ver la
carretera a solo 2,77 metros. De serie trae cama abatible sobre el salón —de 195 x 160
cm y acceso sin escalera—, claraboyas, iluminación LED ambiental y preinstalación
multimedia; la lista de opcionales (paquetes Touring, Media con TV y satélite, horno,
aire acondicionado de techo) permite dejarlo a capricho.

En camas y plazas, la dotación estándar es de cuatro plazas de viaje (cinco en opción)
y cuatro para dormir: la queen trasera y la abatible delantera. La queen tiene
somieres ventilados y calefactados, colchón de espuma fría de 7 zonas y cabecero
regulable, con cajones grandes debajo y armarios a ambos lados; además, el tramo final
del colchón se abate para dejar un paso más ancho hacia el baño por la noche. Es una
distribución pensada para parejas que viajan mucho y duermen bien, con la abatible
como recurso para nietos o invitados ocasionales.

En mecánica, la base es el Fiat Ducato 2.2 Multijet de 140 CV, con posibilidad de
subir de potencia y de pedir el cambio automático. La MMA de serie es de 3.500 kilos
(carnet B), pero la filosofía Comfort Plus contempla la opción de 4.250 kilos para
quienes carguen la lista de extras sin miedo: en ese caso hace falta el C1. La masa en
orden de marcha ronda los 3.095 kilos según el catálogo 2023, así que la carga útil
real hay que calcularla con la báscula de la ITV y la lista de opcionales en la mano.

En precio y red comercial en España, Malibu no publica tarifa oficial para nuestro
mercado y el precio queda en «no publicado». Como referencia de otro mercado, la guía
Malibu 2026 de Out & About Live parte de 74.340 libras en Reino Unido, y la prueba del
I 500 QB Touring situó una unidad bien equipada cerca de las 99.000 libras con el
chasis pesado. En España se vende a través de la red de concesionarios del grupo
Carthago: lo sensato es pedir oferta cerrada con la configuración deseada, porque entre
el modelo base y uno con paquetes Touring y Media la diferencia es notable.

Cómo lo verificamos: catálogo oficial Malibu 2024 en inglés (derfreistaat.de, dominio
oficial de la marca), consultado el 19/10/2026, para medidas, camas, baño, doble suelo
y garaje Pedelec; prueba «Malibu I 500 QB Touring» de Peter Vaughan en
outandaboutlive.co.uk para comportamiento, precios británicos y equipamiento opcional;
y guía «Malibu motorhomes: 2026 essential guide» del mismo medio para el precio de
partida 2026. Lo no publicado por la marca (precio en España, carga útil, consumos)
queda sin dato y declarado en las notas.

Para quién es: para parejas que quieren una integral premium con cama queen accesible
por los dos lados y baño de verdad, sin pagar lo que cuesta una Carthago; para quien
valora el doble suelo calefactado y el garaje grande para bicis o moto pequeña; para
el que viaja todo el año y aprecia una célula bien aislada. No es para quien necesite
cinco o seis plazas fijas (la abatible es para uso ocasional), ni para conductores que
quieran quedarse sí o sí bajo 3.500 kilos con la lista de extras llena: con tanto
equipamiento, la opción de 4.250 kilos y el C1 acaban siendo la compra sensata.`,
    pros: [
      "Cama queen de 195x160 cm accesible por ambos lados, con somier ventilado y colchón 7 zonas",
      "Baño comfort luxury con ducha separada que se convierte en vestidor independiente",
      "Doble suelo calefactado con 48 cm de altura útil: carga y confort térmico",
      "Cama abatible de serie de 195x160 cm: cuatro plazas reales para dormir",
      "Garaje Pedelec opcional: la bici entra sin desmontar la cama ni agacharse",
    ],
    contras: [
      "Sin PVP oficial para España: hay que pedir presupuesto a cada concesionario",
      "Con extras, superar los 3.500 kg es fácil y entonces hace falta el carnet C1",
      "Los 140 CV de serie se quedan justos para 7,5 m a plena carga; conviene más potencia",
      "Con 7,48 m de largo no es la integral más manejable en pueblos y parkings",
      "La lista de opcionales (Touring, Media, horno) encarece mucho el precio final",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/malibu-i-500-qb-2026-precio-ficha-tecnica-oficial.webp", alt: "Malibu I 500 QB, vista exterior en carretera", ancho: 1000, alto: 1158 },
      { src: "/media/malibu-i-500-qb-2026-precio-ficha-tecnica-interior1.webp", alt: "Malibu I 500 QB, salón con mesa", ancho: 1000, alto: 645 },
      { src: "/media/malibu-i-500-qb-2026-precio-ficha-tecnica-interior2.webp", alt: "Malibu I 500 QB, cama queen trasera", ancho: 1000, alto: 703 },
      { src: "/media/malibu-i-500-qb-2026-precio-ficha-tecnica-detalle.webp", alt: "Malibu I 500 QB, cocina de rincón", ancho: 1000, alto: 1108 },
    ],
    analisisSlug: "malibu-i-500-qb-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Malibu (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
