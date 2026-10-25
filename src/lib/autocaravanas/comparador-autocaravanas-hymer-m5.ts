// Autocaravanas Hymer — lote Merlín 5 (19/10/2026).
// Fuentes: lista oficial de precios Hymer 2027 (PDF int_de_en_hymer_motorhomes_preisliste.pdf:
// B-MC I 600: 142.500 €, Sprinter 315 CDI 110 kW/150 CV, 719/229/298 cm, MMA 3.500 kg),
// nota de prensa oficial «The Hymer B-Class ModernComfort I 550 and 600 ... as
// "WhiteLine" edition model» (https://www.hymer.com/gb/en/hymer-b-klasse-moderncomfort-als-editionsmodell-whiteline/p/40986),
// nota de prensa oficial «The Art of Comfort: The new Hymer B-MC»
// (https://www.hymer.com/gb/en/the-new-hymer-b-mc/p/3580703),
// prueba del B-MC I 600 WhiteLine en la web oficial de Hymer Reino Unido
// (https://www.motorhomes.co.uk/blog/hymer-bmc-i-600-whiteline-review),
// página oficial de la gama B-MC I en hymer.com
// (https://www.hymer.com/de/en/motorhomes/class-a-motorhomes: B-MC I desde 139.900 € Alemania).
// Verificado el 19/10/2026.
// Notas honestas: el PVP citado es el recomendado oficial de Hymer para Alemania
// (la edición WhiteLine se configura sobre la base del B-MC I 600); Hymer no publica
// tarifa oficial para España. La carga útil no la publica Hymer como cifra única
// (cargaUtilKg = null; prohibido calcularla). El motor de 170 CV/125 kW es opcional
// (la prueba de motorhomes.co.uk cita la edición WhiteLine con 177 CV y cambio de
// 9 velocidades). Consumo, autonomía, par motor y emisiones: no publicados.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_HYMER_M5: Autocaravana[] = [
  {
    id: "hymer-b-mc-i-600-whiteline-2026-precio-ficha-tecnica",
    marca: "Hymer",
    modelo: "B-MC I 600 WhiteLine",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: 142500, // PVP recomendado oficial Hymer Alemania, lista 2027, para el B-MC I 600 (la edición WhiteLine se configura sobre esta base); no hay tarifa oficial ES
    potenciaCv: 150, // Mercedes Sprinter 315 CDI de serie (110 kW); opcional 417 CDI de 170 CV
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro VI-E sobre Mercedes Sprinter
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/hymer-b-mc-i-600-whiteline-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/hymer-b-mc-i-600-whiteline-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/hymer-b-mc-i-600-whiteline-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7190, // lista oficial de precios Hymer 2027
    anchoMm: 2290, // lista oficial de precios Hymer 2027
    altoMm: 2980, // lista oficial de precios Hymer 2027
    pesoKg: 3139, // masa en orden de marcha, lista oficial de precios Hymer 2027 (rango 2.982-3.296)
    mmaKg: 3500, // lista oficial de precios Hymer 2027
    carnetNecesario: "B", // mmaKg <= 3500
    cargaUtilKg: null, // Hymer no publica una cifra de carga útil; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 3-5 según configuración, lista oficial de precios Hymer 2027
    plazasDormir: 4, // 4-5 según configuración; 4 de serie
    parNm: null,
    traccion: "delantera", // Mercedes Sprinter de tracción delantera
    emisionesCo2: null,
    aprox: [],
    notas:
      "Cotas, pesos, plazas y capacidades de la lista oficial de precios Hymer 2027 para el B-MC I 600 (719/229/298 cm, 3.139 kg en orden de marcha, 3.500 kg de MMA, camas traseras de 195x84/187x84, cama abatible opcional de 194x145, frigorífico de 150 l con congelador de 17 l, agua limpia de 180 l —20 l en posición de marcha—, grises de 150 l, gas 2x11 kg, calefacción de aire caliente a gas de 6 kW, aislamiento 41/34/34 mm). Precio: PVP recomendado oficial en Alemania desde 142.500 € (lista 2027); la edición WhiteLine se configura sobre esta base con su dotación específica. Hymer no publica tarifa oficial para España. La prueba de la web oficial de Hymer Reino Unido documenta la edición WhiteLine con motor de 177 CV, cambio automático de 9 velocidades, toldo, MBUX, cámara trasera, tapicería de cuero Napoli, llantas negras de 16\", TV de 32\" y climatizador TEMPMATIK. Carga útil, consumo, autonomía, par motor y emisiones: no publicados por el fabricante; quedan sin dato.",
    curiosidades:
      "La WhiteLine no es un simple acabado: es la edición especial con la que Hymer viste de gala su integral más equilibrada, el B-MC I 600, sumando a la dotación de serie un paquete de opciones Mercedes y Hymer que la propia marca cifra en un ahorro notable frente a pedirlas por separado —la prueba publicada en la web oficial de Hymer Reino Unido habla de extras por valor de unas 7.000 libras incluidas en la edición, desde el motor más potente hasta la tapicería de cuero Napoli—. Fuente: nota de prensa oficial «The Hymer B-Class ModernComfort I 550 and 600 ... as WhiteLine edition model» (https://www.hymer.com/gb/en/hymer-b-klasse-moderncomfort-als-editionsmodell-whiteline/p/40986) y prueba oficial en https://www.motorhomes.co.uk/blog/hymer-bmc-i-600-whiteline-review.",
    descripcion: `El Hymer B-MC I 600 WhiteLine es la prueba de que una edición especial puede ser algo más que un puñado de adhesivos: es la integral con la que Hymer convierte su B-Klasse ModernComfort de 7,19 metros en la compra redonda del segmento. La base es el B-MC I 600, el layout intermedio de la familia ModernComfort integral —ni el compacto 550 ni el alargado 680—, y la edición WhiteLine le añade de una tacada el paquete de opciones que la mayoría de los compradores acabaría pidiendo de todos modos: motor más potente, cambio automático, toldo, multimedia MBUX con cámara trasera, cuero Napoli, llantas negras de 16 pulgadas, televisor de 32 pulgadas y climatización TEMPMATIK. El resultado es un vehículo que sale del concesionario prácticamente sin lista de extras pendiente, algo raro en una marca donde la personalización es casi una religión.

    En medidas y distribución, el 600 es el punto dulce de la gama. Con 7.190 mm de longitud, 2.290 mm de anchura y 2.980 mm de altura sobre el Mercedes Sprinter 315 CDI y el chasis SLC de Hymer, ofrece la habitabilidad de una integral grande sin llegar a los casi 7,4 metros del 680, que ya empieza a complicar la vida en áreas y pueblos. La distribución apuesta por el esquema clásico que funciona: salón delantero en L junto a la cabina panorámica, cocina central completa, baño compacto con ducha separada de 70 x 65 cm y dormitorio trasero con dos camas individuales de 195 x 84 y 187 x 84 cm, elevadas sobre un garaje de gran capacidad con trampilla de 99 x 123 cm. La altura interior de 198 cm y la anchura interior de 212 cm evitan cualquier sensación de encierro, y la cama abatible opcional de 194 x 145 cm sobre la cabina —más la transformación del salón— eleva la capacidad hasta cinco plazas nocturnas cuando vienen los nietos o los amigos.

    El chasis SLC (Super Light Chassis) es la firma técnica de Hymer y aquí se nota en cada kilómetro: doble suelo nivelado que recorre todo el vehículo, bajo el cual viajan protegidos de las heladas los depósitos de agua limpia (180 litros, 20 en posición de marcha) y grises (150 litros), además de un enorme espacio de almacenamiento accesible desde el interior. La carrocería PUAL —espuma de poliuretano entre aluminios, sin madera— con aislamiento de 41/34/34 mm en suelo, paredes y techo, y techo y suelo de GFK inmunes al granizo, es la receta con la que Hymer lleva décadas ganando pruebas de invierno. Sobre el papel, la masa en orden de marcha de 3.139 kg deja, con la MMA de 3.500 kg, un margen de carga razonable para dos personas bien equipadas, aunque conviene hacer números si se abusa de los opcionales: la propia lista oficial reserva 69 kg para equipamiento opcional.

    En tecnología y equipamiento, la edición WhiteLine es donde el 600 se despega del B-MC I estándar. La cabina Mercedes aporta el sistema MBUX con navegación integrada, faros con asistentes, control de crucero y el arsenal de ayudas del Sprinter; la prueba de la web oficial británica destaca el motor de 177 CV con el cambio automático de 9 velocidades como el corazón de la edición, una combinación que transforma la conducción de un 3,5 toneladas. La célula suma el frigorífico de 150 litros con congelador de 17, la cocina con cierre centralizado eléctrico —novedad de la renovada gama B-MC—, la bomba de agua presurizada, el indicador capacitivo del nivel de agua con precisión del 1 %, la app Hymer Connect para controlar el vehículo desde el móvil y la calefacción de aire caliente a gas de 6 kW con sus dos bombonas de 11 kg. El toldo exterior, incluido en la edición, alarga la vida hacia fuera en cuanto sale el sol.

    En mecánica, el Sprinter 315 CDI de 150 CV (110 kW) Euro VI-E con tracción delantera es la motorización de serie, y es suficiente para mover con dignidad los 3.139 kg en orden de marcha; pero la gracia de la WhiteLine está en el salto al motor de 177 CV con el automático de 9 relaciones, que es lo que montaba la unidad probada por la red oficial británica y lo que convierte los viajes largos en un trámite placentero en lugar de una penitencia. La distancia entre ejes de 4.000 mm y el bajo centro de gravedad del SLC le dan una estabilidad notable para sus casi 3 metros de altura, y la dirección precisa del Sprinter hace que los 7,19 metros se gestionen mejor de lo que sugiere la ficha. El consumo no lo publica Hymer —y con la aerodinámica de una integral nadie debería esperarse milagros—, pero el depósito generoso y la red Mercedes permiten planificar etapas largas sin ansiedad.

    En precio y red comercial en España, el PVP recomendado oficial en Alemania parte de 142.500 euros para el B-MC I 600 según la lista oficial de 2027, y la edición WhiteLine se configura sobre esa base añadiendo su dotación específica; en Reino Unido, la lista oficial de 2026 lo cotizaba desde 124.820 libras. No existe tarifa oficial publicada para España, de modo que el precio final se negocia con el distribuidor y depende de los paquetes elegidos. Hymer mantiene una red de concesionarios oficiales en España donde se personaliza cada unidad, y conviene pedir oferta cerrada con la edición WhiteLine desglosada: el argumento de la edición es precisamente que los extras salen más baratos en paquete que por separado, así que la negociación debe partir de esa base y no del precio del modelo estándar.

    Cómo lo verificamos: todas las cotas, pesos, plazas, camas y capacidades proceden de la lista oficial de precios Hymer 2027 para el B-MC I 600, verificada el 19 de octubre de 2026. La existencia y el planteamiento de la edición WhiteLine proceden de la nota de prensa oficial de Hymer, y su dotación concreta (177 CV, automático de 9 velocidades, toldo, MBUX, cámara trasera, cuero Napoli, llantas de 16\", TV de 32\", TEMPMATIK) de la prueba publicada en la web oficial de Hymer Reino Unido. Las novedades de la gama B-MC renovada (frigorífico de compresor, cierre centralizado de cocina, bomba presurizada, indicador capacitivo) proceden de la nota de prensa oficial «The new Hymer B-MC». Los datos no publicados por el fabricante (carga útil como cifra única, consumo, par motor, emisiones) quedan sin dato y se declaran como tales.

    Para quién es: el B-MC I 600 WhiteLine encaja con la pareja viajera que quiere una integral premium de tamaño contenido y prefiere que la edición especial le resuelva de golpe la lista de extras: se compra, se engancha el toldo y a rodar, sin meses de configuración ni sorpresas en la factura. Es ideal para quien valora la red Mercedes, el chasis SLC y el aislamiento PUAL para viajar todo el año, y para quien necesita cuatro o cinco plazas reales sin subir a los 7,4 metros. No es para quien busque el precio más bajo del segmento (la WhiteLine se paga), para quien priorice una carga útil enorme con la MMA de 3,5 toneladas justa, ni para quien quiera una camper discreta: 7,19 metros de integral blanca con llantas negras no pasan desapercibidos en ningún camping.`,
    pros: [
      "Edición WhiteLine con paquete de extras (177 CV, automático 9V, toldo, MBUX, cuero Napoli, TV 32\"): sale más barato que pedirlos por separado.",
      "Medidas equilibradas: 7,19 m con dormitorio de camas gemelas, ducha separada y garaje de gran capacidad.",
      "Chasis SLC con doble suelo y carrocería PUAL sin madera: aislamiento y protección antiheladas de referencia.",
      "Cabina Mercedes Sprinter con MBUX, cámara trasera y asistentes; app Hymer Connect de serie en la gama.",
      "MMA de 3.500 kg: se conduce con el carnet B.",
    ],
    contras: [
      "Precio de partida de 142.500 € en Alemania y sin tarifa oficial para España: hay que negociar con el distribuidor.",
      "La motorización de serie de 150 CV se queda justa para muchos; la gracia de la edición es el 177 CV, que encarece.",
      "Margen de carga ajustado si se abusa de los opcionales: la lista oficial solo reserva 69 kg para equipamiento.",
      "7,19 m de integral: exige experiencia y limita el acceso a pueblos y áreas pequeñas.",
      "Consumo no publicado y previsiblemente alto: el coste por kilómetro no es su fuerte.",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/hymer-b-mc-i-600-whiteline-2026-precio-ficha-tecnica-oficial.webp", alt: "Hymer B-MC I 600 WhiteLine, vista exterior", ancho: 1600, alto: 900 },
      { src: "/media/hymer-b-mc-i-600-whiteline-2026-precio-ficha-tecnica-interior1.webp", alt: "Hymer B-MC I 600 WhiteLine, cocina", ancho: 920, alto: 690 },
      { src: "/media/hymer-b-mc-i-600-whiteline-2026-precio-ficha-tecnica-interior2.webp", alt: "Hymer B-MC I 600 WhiteLine, cocina detalle", ancho: 920, alto: 690 },
      { src: "/media/hymer-b-mc-i-600-whiteline-2026-precio-ficha-tecnica-detalle.webp", alt: "Hymer B-MC I 600 WhiteLine, baño detalle", ancho: 920, alto: 690 },
    ],
    analisisSlug: "hymer-b-mc-i-600-whiteline-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Mercedes Sprinter: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Mercedes Sprinter)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 450 },
        { nombre: "Revisión célula Hymer (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 280 },
      ],
    },
  },
];
