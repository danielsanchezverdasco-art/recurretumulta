// Autocaravanas Hymer — lote Merlín 4 (19/10/2026).
// Fuentes: nota de prensa oficial Hymer «Setting new standards: the compact Hymer ML-T 570»
// (hymer.com), comunicado de novedades Caravan Salon Düsseldorf 2026 (outandaboutlive.co.uk),
// fichas de concesionarios oficiales con datos de catálogo (TruckScout24, Schaffer-Mobil),
// ficha técnica FindMyLeisureVehicle (PDF de catálogo). Verificado el 19/10/2026.
// Notas honestas: Hymer no publica PVP oficial para España → precioDesde null (se cita como
// referencia el precio UK £109.370 de catálogo). La tara exacta depende del equipamiento
// → pesoKg null; la carga útil publicada por la marca no se localizó → cargaUtilKg null.
// Consumo, emisiones y par no publicados por la marca para este conjunto → null.

import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_HYMER_M4: Autocaravana[] = [
  {
    id: "hymer-ml-t-570-xperience-2026-precio-ficha-tecnica",
    marca: "Hymer",
    modelo: "ML-T 570 Xperience",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Hymer no publica PVP oficial ES; ref. UK £109.370 (catálogo 2026)
    potenciaCv: 170,
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
    imagen: "/media/hymer-ml-t-570-xperience-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/hymer-ml-t-570-xperience-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/hymer-ml-t-570-xperience-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6740,
    anchoMm: 2220,
    altoMm: 2920,
    pesoKg: null, // la tara varía según equipamiento; la marca no publica una cifra única
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica carga útil para esta versión; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 3,
    parNm: null,
    traccion: "trasera", // base Mercedes Sprinter 417 CDI de tracción trasera (fichas de catálogo)
    emisionesCo2: null,
    aprox: [],
    notas:
      "Procedencia de los datos: dimensiones 6.740 x 2.220 x 2.920 mm, batalla 3.660 mm, MMA 3.500 kg, " +
      "motor Mercedes Sprinter 417 CDI 2.0 l de 125 kW/170 CV con cambio 9G-TRONIC y 4 plazas de viaje " +
      "proceden de la nota de prensa oficial de Hymer y de las fichas de catálogo 2026 de concesionarios " +
      "(TruckScout24, Schaffer-Mobil). Camas gemelas traseras de 190 y 186 cm, nevera de compresor de 154 l, " +
      "agua limpia 120 l y grises 100 l, según ficha técnica de catálogo (FindMyLeisureVehicle). " +
      "En null: precio ES (Hymer no publica tarifa oficial en España), tara exacta, carga útil, consumo, " +
      "emisiones de CO2 y par motor (la marca no los publica para este conjunto).",
    curiosidades:
      "La edición Xperience del ML-T 570 se presentó en el Caravan Salon de Düsseldorf 2026 con acabado " +
      "exterior Stone Grey y trae de serie el cambio automático 9G-TRONIC, el paquete de asistencia a la " +
      "conducción de Mercedes y el sistema multimedia MBUX — https://www.outandaboutlive.co.uk/motorhomes/news/hymer-unveil-new-b-ml-flagship-caravan-salon",
    descripcion: `La Hymer ML-T 570 Xperience es la versión de edición especial de la perfilada compacta
más vendida de la marca alemana, construida sobre el chasis de la Mercedes-Benz Sprinter 417 CDI. Con
6,74 metros de longitud es 28 centímetros más corta que su hermana mayor, la ML-T 580, una diferencia
que se nota en cada rotonda, en cada aparcamiento de pueblo y en cada carretera de montaña: es una
autocaravana pensada para moverse con agilidad sin renunciar a la sensación de estar en una Hymer de
verdad. La edición Xperience, renovada para la temporada 2026 y presentada en el Caravan Salon de
Düsseldorf, añade un acabado exterior en gris Stone Grey y un nivel de equipamiento de serie que en
otras gamas habría que pagar aparte.

En medidas, hablamos de 6.740 mm de largo, 2.220 mm de ancho y 2.920 mm de alto, con una batalla de
3.660 mm y una altura interior que supera los 1,91 m. La masa máxima autorizada es de 3.500 kg, de modo
que se conduce con el carnet B. La distribución interior apuesta por las camas gemelas traseras —de 190
y 186 cm respectivamente, esta última 7 cm más larga que en generaciones anteriores—, un salón en L con
cuatro plazas de viaje, cocina con tres fogones y nevera de compresor de 154 litros con compartimento
congelador, y un baño compacto con ducha separada. El garaje trasero admite hasta 350 kg de carga, con
450 kg en opción, suficiente para dos bicicletas eléctricas o una moto ligera.

En tecnología y equipamiento, la Xperience se distingue por el sistema Hymer Connect, que permite
controlar los componentes del habitáculo desde el móvil, el Smart Battery System 2.0 para la gestión
inteligente de la energía, iluminación LED ambiental con temperatura de color regulable de forma
individual, claraboya panorámica en el salón y dos paneles solares de 95 W en opción. El aislamiento
está cuidado al detalle: 41 mm en el suelo y 34 mm en paredes y techo con construcción sándwich PUAL,
lo que la hace apta para viajar todo el año. En cabina, Mercedes aporta el volante multifunción en
cuero, el cuadro de instrumentos digital, la cámara de visión trasera y el paquete de asistencia a la
conducción con control de crucero adaptativo.

En camas y plazas, la configuración de serie ofrece dos plazas para dormir en las camas gemelas
traseras, ampliables a tres con la conversión del salón. Las cuatro plazas de viaje con cinturones de
tres puntos la hacen válida para una pareja que viaja con dos niños o con invitados ocasionales. Los
depósitos —120 litros de agua limpia y 100 de grises— y la calefacción diésel de 6 kW con dos baterías
de litio de 80 Ah en opción permiten una autonomía real de varios días sin conexión a red.

En mecánica, el Sprinter 417 CDI entrega 170 CV (125 kW) con la caja automática 9G-TRONIC de nueve
velocidades, una combinación que Hymer reserva para esta edición de serie. La tracción es trasera, lo
que mejora el comportamiento con carga en el eje posterior, y la normativa de emisiones es Euro VI-E.
El depósito de gasóleo y el equipo multimedia original Mercedes con Android Auto y Apple CarPlay
completan un conjunto pensado para devorar kilómetros por autopista con el aplomo de una berlina
alemana.

En precio y red comercial en España, Hymer no publica una tarifa oficial para nuestro mercado, por lo
que no es posible dar una cifra de partida verificada: el precio se negocia en cada concesionario y
depende del equipamiento elegido. Como referencia, en el Reino Unido el catálogo 2026 parte de unas
£109.370. En España la marca cuenta con una red de concesionarios oficiales repartidos por las
principales provincias, con servicio postventa y recambios garantizados por el grupo Erwin Hymer. Es
recomendable pedir presupuesto cerrado por escrito incluyendo toldo, portabicicletas y pack solar, que
son los extras más demandados.

Cómo lo verificamos: los datos de dimensiones, motor, cambio, plazas y MMA proceden de la nota de
prensa oficial de Hymer «Setting new standards: the compact Hymer ML-T 570» (hymer.com) y del
comunicado de novedades del Caravan Salon de Düsseldorf 2026 publicado por Out & About Live; las
cifras de camas, nevera, depósitos y aislamiento, de las fichas técnicas de catálogo 2026
distribuidas por la red de concesionarios (TruckScout24, Schaffer-Mobil, FindMyLeisureVehicle).
Todo verificado el 19/10/2026. Lo que la marca no publica —precio oficial en España, tara exacta,
carga útil, consumo y emisiones— queda declarado en null y en las notas de esta ficha.

Para quién es: es la autocaravana ideal para una pareja viajera que quiere la calidad de
construcción Hymer y la mecánica Mercedes en un formato ágil de menos de 6,8 metros, con
autonomía suficiente para escapadas largas y viajes por Europa. No es para quien necesite cuatro
camas fijas ni para familias numerosas: las dos camas gemelas y la tercera plaza opcional marcan su
límite, y quien busque tracción total deberá mirar a la versión CrossOver en lugar de la Xperience.`,
    pros: [
      "Edición Xperience con 9G-TRONIC, paquete de asistencia Mercedes y MBUX de serie",
      "Solo 6,74 m de largo: agilidad real en pueblos, rotondas y carreteras de montaña",
      "Camas gemelas traseras de 190 y 186 cm con garaje de hasta 350 kg debajo",
      "Aislamiento PUAL de 41/34 mm y calefacción diésel: apta para viajar todo el año",
      "Mecánica Mercedes Sprinter 417 CDI de 170 CV con red de servicio en toda Europa",
    ],
    contras: [
      "Hymer no publica precio oficial en España: hay que negociar cada unidad en concesionario",
      "Solo 2-3 plazas para dormir: insuficiente para familias de cuatro o más",
      "La tracción es trasera; quien quiera 4x4 debe ir a la versión CrossOver, más cara",
      "Con 3.500 kg de MMA, el margen de carga se estrecha si se equipan muchos extras",
      "La anchura de 2,22 m y la altura de 2,92 m la hacen menos discreta que un camper",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/hymer-ml-t-570-xperience-2026-precio-ficha-tecnica-oficial.webp", alt: "Hymer ML-T 570 Xperience, vista exterior", ancho: 1200, alto: 800 },
      { src: "/media/hymer-ml-t-570-xperience-2026-precio-ficha-tecnica-interior1.webp", alt: "Hymer ML-T 570 Xperience, salón interior", ancho: 1200, alto: 800 },
      { src: "/media/hymer-ml-t-570-xperience-2026-precio-ficha-tecnica-interior2.webp", alt: "Hymer ML-T 570 Xperience, zona de camas", ancho: 1200, alto: 800 },
      { src: "/media/hymer-ml-t-570-xperience-2026-precio-ficha-tecnica-detalle.webp", alt: "Hymer ML-T 570 Xperience, detalle", ancho: 1200, alto: 800 },
    ],
    analisisSlug: "hymer-ml-t-570-xperience-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Mercedes Sprinter: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Mercedes Sprinter)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 380 },
        { nombre: "Revisión célula Hymer (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
