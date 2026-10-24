// Autocaravanas Niesmann+Bischoff — lote Merlín 3 (19/10/2026).
// Fuentes: lista oficial de precios y datos Arto (Niesmann+Bischoff, «Arto Preisliste
// Januar 2026», niesmann-bischoff-liner.com), web oficial de la marca
// (niesmann-bischoff.com — galería oficial de imágenes del Arto 88), prensa
// especializada (tourstory.de, prueba del Arto 88; camperonline.it, prueba del
// Arto 88 LF; camping-world.at, ficha de unidad nueva) y fichas técnicas de
// distribuidor (caraworld). Verificado el 19/10/2026.
// Notas honestas: la marca no publica una tarifa «desde» oficial para España;
// precioDesde queda sin dato (se citan como referencia el PVP de fabricante indicado
// por un distribuidor austriaco para una unidad configurada). La masa en orden de
// marcha (~4.500 kg) es una cifra aproximada publicada por prensa especializada.
// cargaUtilKg, consumo y emisiones no figuran en las fuentes consultadas.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_NIESMANNBISCHOFF_M3: Autocaravana[] = [
  {
    id: "niesmann-bischoff-arto-88-lf-2026-precio-ficha-tecnica",
    marca: "Niesmann+Bischoff",
    modelo: "Arto 88 LF",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: null, // la marca no publica tarifa oficial «desde» para España
    potenciaCv: 170, // Mercedes Sprinter 2.0 de 125 kW
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
    imagen: "/media/niesmann-bischoff-arto-88-lf-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/niesmann-bischoff-arto-88-lf-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/niesmann-bischoff-arto-88-lf-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 9060, // ficha de distribuidor y prensa (generación actual sobre Mercedes Sprinter)
    anchoMm: 2400,
    altoMm: 3030,
    pesoKg: null, // ~4.500 kg en orden de marcha según prensa especializada (tourstory.de), no dato oficial
    mmaKg: 5000, // ampliable a 5.500 kg de fábrica
    carnetNecesario: "C1", // MMA de 5.000 kg
    cargaUtilKg: null, // no publicada por la marca
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4,
    parNm: null,
    traccion: null, // no declarada expresamente en la ficha consultada
    emisionesCo2: null,
    aprox: [],
    notas:
      "Modelo verificado en la documentación oficial de Niesmann+Bischoff (lista de precios y datos Arto, enero 2026) y en prensa especializada: integral de la gama Arto sobre Mercedes-Benz Sprinter, motor 2.0 de 125 kW/170 CV con cambio automático 9G-Tronic, 9.060x2.400x3.030 mm, MMA de 5.000 kg (ampliable a 5.500 kg, carnet C1), 4 plazas y 4 camas (cama trasera longitudinal de 202x201 cm + abatible de 188x128 cm), calefacción por agua caliente, doble suelo aislado y calefactado, frigorífico de 177 l + congelador de 35 l y depósitos de 300/200 l. La generación anterior (2022) montaba base Fiat Ducato con 8.760 mm; los datos de esta ficha corresponden a la generación actual sobre Sprinter. Quedan sin dato: precio oficial ES, carga útil, consumo y emisiones. Precio: se deja sin dato porque Niesmann+Bischoff no publica lista de precios abierta verificable: el precio base solo se obtiene en su configurador oficial en línea y vía red de concesionarios; sin tarifa oficial en abierto.",
    curiosidades:
      "El Arto es el primer liner de Niesmann+Bischoff construido sobre chasis Mercedes-Benz Sprinter; las generaciones anteriores usaban base Fiat (fuente: https://tourstory.de/arto-88-niesmann-bischoff-liner-sprinter-residenz/).",
    descripcion: `El Niesmann+Bischoff Arto 88 LF es una residencia sobre ruedas con todas las letras. Niesmann+Bischoff no fabrica autocaravanas para iniciarse en el caravaning: fabrica liners para gente que ya lo ha probado todo y quiere lo mejor, y el Arto es su puerta de entrada a ese mundo. Con 9,06 metros de largo, tres ejes y 2,40 metros de ancho, el 88 es el grande de la gama Arto —por encima del 84—, y el acabado LF (camas longitudinales traseras fijas) es la distribución favorita de quienes duermen a bordo muchas noches al año. Aquí no hay concesiones al «casi»: todo es de verdad, desde el doble suelo hasta la grifería.

En medidas, el Arto 88 declara 906 cm de largo, 240 cm de ancho y 303 cm de alto. Son cifras de camión pequeño, y hay que asumirlo: este vehículo pide autopista, áreas de servicio amplias y parcelas de las grandes. A cambio, el interior es un apartamento: la anchura de 2,40 m se nota en cada estancia, y el tercer eje (tándem trasero) reparte el peso y estabiliza la marcha de un modo que un dos ejes no puede igualar. La MMA es de 5.000 kg de serie, ampliable a 5.500 kg de fábrica —la prensa especializada recomienda la ampliación porque la masa en orden de marcha ronda las 4,5 toneladas con el equipamiento habitual—, y lógicamente exige el carnet C1. Quien venga del carnet B tiene aquí una barrera de entrada real: sin C1 no hay Arto 88.

La distribución LF gira en torno al dormitorio trasero con cama longitudinal fija de 202x201 cm, una superficie enorme con colchón de calidad, cabecero tapizado e iluminación ambiental regulable; las imágenes oficiales de la marca muestran el cuidado obsesivo por el detalle, con la pared del dormitorio disponible en varios acabados y lectura individual. Sobre el salón, una cama abatible de 188x128 cm completa las cuatro plazas de dormir. El salón central es amplio y luminoso, con asientos enfrentados y mesa generosa; la cocina monta un bloque completo con la opción de sustituir un cajón por lavavajillas —sí, lavavajillas en una autocaravana—, y el frigorífico es de 177 litros con congelador separado de 35. El baño, con ducha independiente y WC, está a la altura del resto. El doble suelo, aislado y calefactado, crea un plano de vida continuo, protege las instalaciones del frío y suma un almacenamiento técnico que, junto al garaje trasero, eleva la capacidad total de carga a unos 4.500 litros según la prensa especializada.

En tecnología y equipamiento, el Arto 88 juega en otra división. La base Mercedes-Benz Sprinter aporta el cambio automático 9G-Tronic de serie, el sistema multimedia MBUX de 10,25 pulgadas con navegación, control por voz, DAB+ y cámara trasera, el asistente de distancia activo Distronic, el asistente de mantenimiento de carril, el asistente de señales de tráfico, climatizador automático Thermotronic, freno de estacionamiento eléctrico, eje delantero reforzado y carga inalámbrica para el móvil. Sobre eso, Niesmann+Bischoff construye sus paquetes: el Fahr-Comfort Paket, el Liner Paket (con doble acristalamiento en cabina, retrovisores gran angular eléctricos, puerta mosquitera y plisado aislante eléctrico para el parabrisas) y el diseño ClouLine con parrilla negra y detalles en carbono. La calefacción es por agua caliente —silenciosa, homogénea, la referencia para el invierno—, los depósitos son de 300 litros de agua limpia y 200 de grises, y la app My NiBi permite controlar funciones del vehículo desde el móvil. Es el nivel de equipamiento que justifica el precio.

En mecánica, el 2.0 diésel de Mercedes con 125 kW (170 CV) y el 9G-Tronic mueven las cinco toneladas con una suavidad que los motores de furgoneta no alcanzan: el cambio de nueve velocidades mantiene el motor siempre en su zona buena y la insonorización de un liner de este nivel hace el resto. No es un vehículo rápido —ni lo pretende—, pero en autopista viaja relajado y con reservas. El depósito de 92 litros da una autonomía correcta para su consumo, y la dirección y los asistentes de Mercedes hacen que, pese al tamaño, sea menos intimidante de lo que parece una vez en marcha.

En precio y red comercial en España, la marca no publica una tarifa «desde» oficial para España, así que el precio queda sin dato. Como referencias verificadas: la lista oficial de precios y datos de enero de 2026 existe en Alemania, y un distribuidor austriaco anuncia una unidad nueva del Arto 88 con un PVP de fabricante de 345.829 € antes de su descuento (unidad muy equipada). En España, Niesmann+Bischoff se vende a través de distribuidores especializados en liners, y cada Arto 88 se configura a medida con decenas de opcionales: el precio final depende enormemente de la configuración elegida. Hablamos, en todo caso, de la franja de los 300.000 € hacia arriba para una unidad bien equipada.

Cómo lo verificamos: la existencia del modelo y sus datos base se verificaron en la documentación oficial de Niesmann+Bischoff (lista de precios y datos Arto, enero 2026, niesmann-bischoff-liner.com) y en la galería oficial de la marca (niesmann-bischoff.com); las dimensiones, pesos, motor, camas, calefacción, depósitos y equipamiento de la generación actual sobre Sprinter se contrastaron con la prueba de tourstory.de, la prueba del Arto 88 LF de camperonline.it y fichas de distribuidor. Todo verificado el 19/10/2026. Lo que la marca no publica —precio oficial ES, carga útil exacta, consumos— queda sin dato y así se declara.

Para quién es: para viajeros con carnet C1 y presupuesto de liner que quieren una residencia móvil para largas estancias y vida a bordo todo el año, con el mejor aislamiento, la mejor calefacción y el mejor servicio posventa del segmento. No es para quien tenga solo el carnet B, ni para quien busque agilidad o discreción (9 metros no pasan desapercibidos), ni para presupuestos por debajo de los 250.000 €. Es, sencillamente, otro deporte.`,
    pros: [
      "Liner de verdad: 9,06 m, 2,40 m de ancho, tres ejes y doble suelo aislado y calefactado",
      "Primera generación Arto sobre Mercedes Sprinter: 170 CV, 9G-Tronic y MBUX 10,25\" de serie",
      "Cama trasera longitudinal fija de 202x201 cm + abatible: dormir de hotel, no de camping",
      "Calefacción por agua caliente, 300/200 l de agua y unos 4.500 l de almacenamiento total",
      "Opción de lavavajillas en cocina y app My NiBi: nivel de equipamiento de apartamento",
    ],
    contras: [
      "Exige carnet C1 (5.000 kg): barrera de entrada total para quien solo tenga el B",
      "La marca no publica tarifa oficial ES; una unidad equipada supera los 300.000 €",
      "9 metros de largo: solo autopista, áreas grandes y parcelas generosas",
      "La masa en orden de marcha (~4,5 t) deja poco margen sin la ampliación a 5.500 kg",
      "Costes de mantenimiento, seguro y neumáticos de nivel camión, no de turismo",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/niesmann-bischoff-arto-88-lf-2026-precio-ficha-tecnica-oficial.webp", alt: "Niesmann+Bischoff Arto 88 LF, vista exterior delantera", ancho: 1536, alto: 864 },
      { src: "/media/niesmann-bischoff-arto-88-lf-2026-precio-ficha-tecnica-interior1.webp", alt: "Niesmann+Bischoff Arto 88 LF, dormitorio (foto oficial)", ancho: 1024, alto: 819 },
      { src: "/media/niesmann-bischoff-arto-88-lf-2026-precio-ficha-tecnica-interior2.webp", alt: "Niesmann+Bischoff Arto 88 LF, dormitorio acabado claro (foto oficial)", ancho: 1280, alto: 1024 },
      { src: "/media/niesmann-bischoff-arto-88-lf-2026-precio-ficha-tecnica-detalle.webp", alt: "Niesmann+Bischoff Arto 88 LF, cocina (foto oficial de prensa)", ancho: 1400, alto: 875 },
    ],
    analisisSlug: "niesmann-bischoff-arto-88-lf-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Mercedes Sprinter: revisión según plan del fabricante (hasta 60.000 km o 2 años)",
      revisiones: [
        { nombre: "Revisión base (Mercedes Sprinter)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 450 },
        { nombre: "Revisión célula Niesmann+Bischoff (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades, calefacción agua caliente", costeAproxEur: 350 },
      ],
    },
  },
];
