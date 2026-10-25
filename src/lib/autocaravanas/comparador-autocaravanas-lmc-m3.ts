// Autocaravanas LMC — lote Merlín 3 (19/10/2026).
// Fuentes: prueba en profundidad del LMC Tourer Lift Ford H 664 G en camperstyle.de
// (Stefan Blanz, con la colaboración de LMC; incluye datos técnicos del modelo),
// alpacacamping.de (ficha técnica de la serie Tourer Lift Ford), camprest.com y
// truckscout24 (anuncios de unidades del modelo exacto, solo como contraste).
// Verificado el 19/10/2026.
// Notas honestas: LMC no publica PVP oficial para España (precioDesde=null; la prensa
// alemana cita 83.500 € de partida en Alemania, no oficial ES); la masa en orden de
// marcha varía según fuente (3.035 kg en la prueba de camperstyle, 3.048 kg en
// alpacacamping); motor de serie Ford Transit 2.0 EcoBlue de 130 CV (170 CV y automático
// opcionales); la carga útil no la publica la marca (null, prohibido calcularla).
// Fusión -w9 + -w10: un solo export AUTOCARAVANAS_LMC_M3.
// Autocaravanas LMC — lote Merlín 3 (19/10/2026).
// Fuentes: https://www.lmc-caravan.com/de/en/motorhomes/cruiser (ficha técnica oficial del
// Cruiser 740 EL: medidas, pesos, equipamiento y PVP recomendado Alemania). Verificado el 19/10/2026.
// NOTA DE SUSTITUCIÓN: el modelo asignado "LMC Explorer I 675 G" ya no figura en la gama oficial
// de LMC (la gama Explorer I se descatalogó; la web oficial solo lista Tracer, Tourer y Cruiser).
// Se sustituye por el LMC Cruiser 740 EL, perfilada actual de la marca, con datos oficiales completos.
// Notas honestas: precio 91.990 € = PVP recomendado en Alemania (la marca advierte que puede variar
// por país); cargaUtilKg queda sin dato porque LMC no publica carga útil como tal (solo la masa para
// equipamiento opcional del fabricante); plazas dormir 2 de serie (hasta 5 con techo elevable opcional);
// consumo, emisiones y autonomía no publicados por la marca.

import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_LMC_M3: Autocaravana[] = [
  {
    id: "lmc-tourer-lift-h-664-g-2026-precio-ficha-tecnica",
    marca: "LMC",
    modelo: "Tourer Lift H 664 G",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // LMC no publica PVP oficial para España
    potenciaCv: 130, // Ford Transit 2.0 EcoBlue de serie; 170 CV opcional
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
    imagen: "/media/lmc-tourer-lift-h-664-g-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "", // portada de prensa (camperstyle.de): modelo exacto, no oficial
    imagenInteriorOficial: "", // interiores de prensa: modelo exacto, no oficiales
    videoId: null,
    videoCanal: null,
    largoMm: 7060, // prueba camperstyle.de y alpacacamping.de
    anchoMm: 2320,
    altoMm: 2830,
    pesoKg: 3035, // masa en orden de marcha según la prueba de camperstyle (alpacacamping cita 3.048 kg)
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica carga útil; prohibido calcularla
    consumo: null, // la prueba de camperstyle midió 9,6 l/100 km de media (dato de prensa, no oficial)
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4, // camas individuales traseras + cama abatible eléctrica sobre el salón
    parNm: null,
    traccion: null, // la marca no declara la tracción en la ficha del modelo
    emisionesCo2: null,
    aprox: [],
    notas:
      "Fuentes empleadas: análisis a fondo del LMC Tourer Lift Ford H 664 G en " +
      "camperstyle.de (Stefan Blanz, 2024, con la autocaravana cedida por la propia LMC), " +
      "página de la gama Tourer Lift Ford en alpacacamping.de y anuncios de ejemplares " +
      "idénticos al modelo en truckscout24 y camprest.com. Dimensiones 706/232/283 cm, " +
      "198 cm de altura interior, 395,4 cm de batalla, 4 plazas y MMA de 3.500 kg; " +
      "motorización Ford Transit 2.0 EcoBlue de 130 CV de serie con el 170 CV opcional " +
      "(manual o automático); camas: abatible delantera de 213x110-55, individuales " +
      "centrales de 200x88 y traseras de 185x88/200x88 según la configuración; depósitos " +
      "de 100 l de agua y 90 l de grises, batería de 95 Ah y calefacción Truma Combi de " +
      "gas. Quedan sin dato precioDesde (la marca no publica PVP para España; la prensa " +
      "alemana habla de 83.500 € de base en Alemania), cargaUtilKg, par, tracción y " +
      "emisiones. La masa en orden de marcha varía entre fuentes: 3.035 kg según " +
      "camperstyle y 3.048 kg según alpacacamping. Imágenes de la prueba de prensa de " +
      "camperstyle.de con la unidad exacta (no son fotos oficiales de fábrica), sin  Precio: se deja sin dato porque no se ha localizado lista de precios oficial abierta de LMC (Erwin Hymer Group): la marca no expone PVP por modelo en su web oficial y el precio base solo se obtiene en su configurador en línea; solo constan precios de concesionarios y portales, que no se usan como oficiales." +
      "marcas de agua ni imágenes de concesionario.",
    curiosidades:
      "El «Lift» de su denominación se toma al pie de la letra: una cama abatible " +
      "eléctrica sobre el salón desciende hasta su posición con una simple pulsación. " +
      "LMC desveló esta versión sobre Ford Transit en el Caravan Salon de Düsseldorf " +
      "como «First Edition» del año de modelo 2024, con el Transit de 170 CV, caja " +
      "automática y una dotación de serie amplísima en relación con su precio. Fuente: " +
      "prueba «LMC Tourer Lift Ford H 664 G» en camperstyle.de " +
      "(https://camperstyle.de/lmc-tourer-lift-ford-h-664-g-wohnmobil-test-erfahrung-272322/).",
    descripcion: `El LMC Tourer Lift H 664 G nació con una misión clara: demostrar que una perfilada familiar puede ofrecer cuatro camas de verdad sin sacrificar ni el salón ni el garaje. Es la primera incursión de la marca alemana —integrada en el grupo Hymer y con siete décadas de trayectoria— sobre el Ford Transit. La nomenclatura lo cuenta todo: la H delata la base Ford (las T son las Fiat), el 664 redondea la longitud, la G promete garaje bajo las camas gemelas y el «Lift» describe la cama abatible eléctrica del salón, el ingenio que multiplica las plazas de noche. Debutó en el Caravan Salon de Düsseldorf como First Edition del año de modelo 2024, con el Transit de 170 caballos y una dotación de serie cuyo mejor argumento era la relación entre precio y equipamiento.

En medidas y espacio, el H 664 G se mueve en 7,06 metros de largo por 2,32 de ancho, cifras de manual del segmento medio. Lo que la distingue está en los detalles de acceso y altura: 198 cm de altura interior y una puerta de entrada XXL de 70 cm, de las más amplias del mercado, que hacen que moverse dentro resulte más holgado de lo que sugieren las cotas. El plano es el clásico de las familiares: salón en L al frente con asientos de cabina giratorios, cocina en L en la zona central con frigorífico de compresor de 141 litros, baño con ducha independiente justo enfrente y, en la zaga, las dos camas gemelas longitudinales sobre el garaje. La abatible eléctrica desciende sobre el salón y despliega unos 213 x 110 cm en su zona más ancha. Armarios altos, cajones de cierre amortiguado e iluminación LED indirecta en cocina y dormitorio componen un ambiente contemporáneo y discreto; la prueba de camperstyle subrayó lo bien pensados que están los gestos diarios: mesa ampliable, enchufes colocados donde se necesitan y el puesto de mando del Transit con pantalla Zenec, Apple CarPlay y Android Auto.

La First Edition salió del concesionario con un equipamiento notable: paquete Tourer (puerta con mosquitera, preinstalación de satélite y de placa solar, climatizador con refuerzo de techo, claraboya panorámica sobre el salón, ventana panorámica sobre la cabina, oscurecimiento de cabina y luz indirecta), llantas negras de aluminio de 16 pulgadas, faros bixenón, sensores de aparcamiento, asistentes de carril y de cansancio, y calefacción Truma Combi 6 de gas con el depósito de grises aislado y calefactado para rodar en invierno. La célula sigue la filosofía LLT de LMC (Long Life Technologie): 12 años de garantía contra filtraciones, suelo de espuma XPS y ausencia de madera en las zonas delicadas. Una autocaravana concebida para circular los doce meses, no solo en agosto.

Dormir y viajar: cuatro plazas homologadas con ISOFIX en la banqueta y cuatro camas: las gemelas traseras de 200 x 88 cm, convertibles en una gran cama doble con el colchón central adicional, más la abatible eléctrica delantera. El planteamiento ideal para una familia de cuatro o para parejas que reciben visitas: de día, la abatible se esconde en el techo y el salón queda despejado. Bajo las camas de la zaga se abre un garaje generoso, con acceso por los dos laterales, para bicicletas y material.

En mecánica, el Ford Transit 2.0 EcoBlue de 130 CV con caja manual de seis velocidades es la motorización de serie; el 170 CV —manual o automático—, que montaba la unidad probada, es la opción sensata para mover 3,5 toneladas con desahogo. La MMA se queda en 3.500 kilos (carnet B) y la masa en orden de marcha se sitúa en torno a los 3.035 kilos según la prueba de camperstyle, de modo que conviene dosificar la lista de extras para no apurar la carga útil. En el ensayo, el consumo medio real fue de 9,6 litros cada cien kilómetros, una marca muy contenida para una 7 metros. Admite remolque y calza neumáticos de 16 pulgadas.

En precio y red comercial en España, LMC no publica tarifa oficial para nuestro país, así que el precio figura como «no publicado». Como orientación —alemana, sin validez oficial para España—, la prensa especializada menciona un precio de salida de 83.500 euros en Alemania para la First Edition. En España la marca se comercializa a través de concesionarios multimarca y de la red del grupo Hymer; merece la pena pedir presupuesto cerrado, porque el paso del 130 al 170 CV, la caja automática y los paquetes modifican sensiblemente la factura final.

Cómo lo verificamos: prueba exhaustiva «LMC Tourer Lift Ford H 664 G» de Stefan Blanz en camperstyle.de (consultada el 19/10/2026), con mediciones técnicas propias y vehículo facilitado por LMC; ficha de la serie Tourer Lift Ford en alpacacamping.de para cotejar medidas, pesos y depósitos; y anuncios de unidades del modelo exacto en truckscout24 y camprest.com para confirmar motores y plazas. Lo que la marca no publica (precio en España, carga útil, par, emisiones) permanece sin dato y queda declarado en las notas.

Para quién es: familias de cuatro que buscan una perfilada con camas gemelas y abatible eléctrica a un precio de partida contenido; conductores que aprecian el Ford Transit actual con sus asistentes de conducción; viajeros de todo el año que valoran la calefacción Truma, el depósito de grises calefactado y los 12 años de garantía de estanqueidad. No encaja con quien necesite cinco plazas (no existen en este modelo) ni con quien desee una automática sin pagarla: el cambio automático solo se combina con el motor de 170 CV y siempre como opción.`,
    pros: [
      "Cama abatible eléctrica sobre el salón: dormir cuatro sin renunciar al salón ni al garaje",
      "Acceso XXL de 70 cm y 198 cm de altura interior: sensación de desahogo",
      "First Edition generosa (pantalla Zenec con CarPlay, bixenón, llantas de 16, asistentes del Transit)",
      "Garantía de estanqueidad de 12 años y construcción LLT orientada a durar",
      "9,6 l/100 km medidos en prueba real: consumo contenido para 7 metros",
    ],
    contras: [
      "Sin tarifa oficial para España: el precio real solo aparece en el concesionario",
      "El 130 CV de serie va justo de potencia; el 170 CV y el automático son opciones",
      "Unos 3.035 kg en orden de marcha: la carga útil obliga a moderar los extras",
      "La abatible delantera cubre la puerta de entrada al bajarla (habitual en este esquema)",
      "La red de LMC en España es más reducida que la de otras marcas del grupo",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/lmc-tourer-lift-h-664-g-2026-precio-ficha-tecnica-oficial.webp", alt: "LMC Tourer Lift H 664 G, vista lateral exterior", ancho: 1600, alto: 1066 },
      { src: "/media/lmc-tourer-lift-h-664-g-2026-precio-ficha-tecnica-interior1.webp", alt: "LMC Tourer Lift H 664 G, salón", ancho: 1600, alto: 1066 },
      { src: "/media/lmc-tourer-lift-h-664-g-2026-precio-ficha-tecnica-interior2.webp", alt: "LMC Tourer Lift H 664 G, cocina", ancho: 1600, alto: 1066 },
      { src: "/media/lmc-tourer-lift-h-664-g-2026-precio-ficha-tecnica-detalle.webp", alt: "LMC Tourer Lift H 664 G, cama abatible eléctrica", ancho: 1600, alto: 1066 },
    ],
    analisisSlug: "lmc-tourer-lift-h-664-g-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Ford Transit: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Ford Transit)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 380 },
        { nombre: "Revisión célula LMC (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
  {
    id: "lmc-cruiser-740-el-2026-precio-ficha-tecnica",
    marca: "LMC",
    modelo: "Cruiser 740 EL",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 91990, // PVP recomendado oficial en Alemania (lmc-caravan.com); puede variar por país
    potenciaCv: 140, // 103 kW de serie, automático, Euro 6E; opcional 132 kW (180 CV) con chasis Maxi
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
    imagen: "/media/lmc-cruiser-740-el-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/lmc-cruiser-740-el-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/lmc-cruiser-740-el-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7380, // ficha oficial: "Length from 738 cm"
    anchoMm: 2320, // ficha oficial: 232 cm
    altoMm: 2760, // ficha oficial: 276 cm
    pesoKg: null,
    mmaKg: 3500, // ficha oficial; ampliable a 3,65/4,25/4,4 t como opción
    carnetNecesario: "B",
    cargaUtilKg: null, // LMC no publica carga útil; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // "Licensed seat no. 2 - 4 (○)"
    plazasDormir: 2, // de serie; hasta 5 con techo elevable opcional
    parNm: null,
    traccion: "delantera", // base Fiat Ducato
    emisionesCo2: null,
    aprox: [],
    notas:
      "Datos de la ficha técnica oficial de lmc-caravan.com (gama Cruiser, modelo 740 EL), verificada el 19/10/2026. " +
      "Sustitución documentada: el 'Explorer I 675 G' asignado ya no existe en la gama oficial de LMC " +
      "(la web del fabricante solo lista Tracer, Tourer y Cruiser para 2026). " +
      "Precio 91.990 €: PVP recomendado en Alemania; la propia LMC advierte de que varía según país por IVA, " +
      "transporte e impuestos. Medidas oficiales: 738 x 232 x 276 cm, batalla 403,5 cm, MMA 3.500 kg. " +
      "Camas traseras individuales de 202 x 74 / 202 x 74,5 cm, convertibles en doble. " +
      "Motor Fiat Ducato 103 kW (140 CV) automático Euro 6E de serie; opcional 132 kW (180 CV) con chasis Maxi " +
      "y elevación de MMA a 3,65/4,25/4,4 t. En null: carga útil (la marca no la publica como tal), consumo, " +
      "emisiones CO2, par motor y autonomía (ninguno publicado en la ficha oficial).",
    curiosidades:
      "A diferencia de la inmensa mayoría de perfiladas, el Cruiser sale de fábrica con calefacción de gasóleo " +
      "de aire canalizado de 6 kW (con caldera de 10 l) en lugar de la clásica Truma de gas: LMC la monta de serie " +
      "en toda la gama Cruiser. Fuente: equipamiento oficial en https://www.lmc-caravan.com/de/en/motorhomes/cruiser",
    descripcion: `La LMC Cruiser 740 EL es la perfilada con la que el fabricante alemán de Sassenberg abre su gama
más reciente de autocaravanas: la familia Cruiser, presentada para los años-modelo 2026/2027 con tres
distribuciones (750 EL, 750 EF y esta 740 EL) y un planteamiento claro de diseño y confort a precio
contenido dentro del segmento premium. Con 7,38 metros de longitud, 2,32 de anchura y 2,76 de altura,
se sitúa en el formato medio que en España funciona para parejas que viajan mucho y quieren espacio
real sin subir a los 7,5 metros. Su PVP recomendado en Alemania parte de 91.990 euros, una cifra que
la propia LMC matiza: es una recomendación basada en precios alemanes y puede variar según país por el
IVA, los gastos de transporte y los impuestos locales, así que en España conviene pedir la tarifa del
importador antes de hacer números.

La distribución EL significa camas gemelas traseras: dos individuales de 202 x 74 y 202 x 74,5
centímetros que, con el sistema de conversión de serie, se unen para formar una gran cama doble. Es
la solución favorita de quienes duermen con horarios o posturas distintas y no quieren molestarse
mutuamente, y aquí viene con colchón premium modular de 150 mm sobre somier de muelles de disco,
respaldo regulable en la zona de camas, tres cajones de gran extensión bajo ellas e iluminación en la
pared trasera y dentro del armario. El salón es un grupo en L con mesa de columna abatible y tablero
deslizante, y la cocina apuesta por una placa combinada de un fuego de inducción y dos de gas, algo
poco habitual en este precio, junto a fregadero encastrado con grifo negro, cajones con cierre suave
y frigorífico de compresor de 132 litros con compartimento de congelación.

En técnica, el Cruiser 740 EL se apoya en el Fiat Ducato con el motor 2.2 de 103 kW (140 CV), cambio
automático y homologación Euro 6E de serie. Quien necesite más reserva puede optar por el 132 kW
(180 CV) ligado al chasis Maxi, que además permite elevar la MMA de 3.500 a 3,65, 4,25 o incluso 4,4
toneladas. Con 3.500 kg de serie se conduce con el carnet B, un argumento de peso en España frente a
rivales que obligan al C1. La construcción sigue la tecnología Long Life de LMC: bajos de espuma XPS
de alto rendimiento con PRFV, techo y frontales en PRFV, y 12 años de garantía de estanqueidad, una
de las más largas del mercado. El equipamiento de serie es generoso: faros Full LED, cuadro digital
de 7 pulgadas, pantalla de 10 pulgadas con radio, navegación, Android Auto y Apple CarPlay,
climatizador automático de cabina, control de crucero adaptativo, sensor de lluvia y luz, llantas de
aluminio de 16 pulgadas bitono con neumáticos todotiempo, toldo negro mate de 4,5 x 2,5 metros con
tiras LED y ventana panorámica extragrande sobre la cabina con estor.

Un detalle que la distingue: la calefacción es de gasóleo, un equipo de aire canalizado de 6 kW con
caldera de 10 litros y panel digital, en lugar de la habitual Truma de gas. Para viajar en invierno
o en zonas sin suministro de gas es una ventaja práctica, y reduce la dependencia de las bombonas
(hay cofre para 1 x 11 kg). Los depósitos son de 100 litros de aguas limpias y 98 de grises, ambos
aislados y calefactados, y la batería de habitáculo es una AGM de 95 Ah gestionada por el sistema
LMC Home con pantalla de 4 pulgadas; en opción hay baterías de litio de 150 Ah y hasta techo
elevable calefactado con cama de 234 x 133 cm, que eleva las plazas de 2 a 5.

Cómo lo verificamos: todos los datos técnicos, medidas y precios proceden de la ficha oficial del
Cruiser 740 EL publicada en lmc-caravan.com, consultada el 19/10/2026. El modelo asignado
originalmente (Explorer I 675 G) no aparece en la gama oficial actual de LMC —la marca solo lista
Tracer, Tourer y Cruiser—, por lo que se sustituyó por este modelo vigente con datos completos. La
carga útil queda sin dato porque LMC no la publica como tal (prohibido calcularla restando masas);
el consumo, las emisiones de CO2 y el par motor no figuran en la documentación oficial y también
quedan sin dato.

Para quién es: parejas viajeras que quieren una perfilada de 7,4 metros con camas gemelas
convertibles, carnet B y un equipamiento de serie muy completo por unos 92.000 euros de base en
Alemania. Encaja si valoras la garantía de estanqueidad de 12 años, la calefacción de gasóleo y el
diseño moderno con paneles de fieltro e iluminación LED indirecta. No encaja si necesitas cuatro
plazas de serie sin recurrir al techo elevable opcional, si buscas una integral pura o si tu
presupuesto exige quedarse muy por debajo de los 90.000 euros, porque con opciones la factura sube
rápido.`,
    pros: [
      "Carnet B con 3.500 kg de MMA de serie, con opción de chasis Maxi hasta 4,4 t",
      "Camas gemelas traseras convertibles en doble, con colchón premium de 150 mm",
      "Calefacción de gasóleo de 6 kW de serie, ideal para invierno y autonomía del gas",
      "12 años de garantía de estanqueidad y construcción Long Life con PRFV",
      "Equipamiento de serie muy completo: Full LED, pantalla de 10'', toldo con LED, llantas bitono",
    ],
    contras: [
      "Solo 2 plazas para dormir de serie; las 5 exigen el techo elevable opcional",
      "Depósitos justos para su tamaño: 100 l de limpias y 98 l de grises",
      "El motor de 140 CV puede quedarse corto a plena carga; el de 180 CV es opción de pago",
      "Precio de 91.990 € es PVP alemán: en España puede variar por IVA, transporte e impuestos",
      "Batería de habitáculo AGM de 95 Ah de serie; el litio es opción",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/lmc-cruiser-740-el-2026-precio-ficha-tecnica-oficial.webp", alt: "LMC Cruiser 740 EL, vista exterior", ancho: 1600, alto: 1200 },
      { src: "/media/lmc-cruiser-740-el-2026-precio-ficha-tecnica-interior1.webp", alt: "LMC Cruiser 740 EL, salón interior", ancho: 1600, alto: 1066 },
      { src: "/media/lmc-cruiser-740-el-2026-precio-ficha-tecnica-interior2.webp", alt: "LMC Cruiser 740 EL, interior", ancho: 1600, alto: 1140 },
      { src: "/media/lmc-cruiser-740-el-2026-precio-ficha-tecnica-detalle.webp", alt: "LMC Cruiser 740 EL, detalle de cocina", ancho: 1600, alto: 900 },
    ],
    analisisSlug: "lmc-cruiser-740-el-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 48.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato 2.2)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula LMC (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
