// Autocaravanas LMC — lote Merlín 3 (19/10/2026).
// Fuentes: https://www.lmc-caravan.com/de/en/motorhomes/cruiser (ficha técnica oficial del
// Cruiser 740 EL: medidas, pesos, equipamiento y PVP recomendado Alemania). Verificado el 19/10/2026.
// NOTA DE SUSTITUCIÓN: el modelo asignado "LMC Explorer I 675 G" ya no figura en la gama oficial
// de LMC (la gama Explorer I se descatalogó; la web oficial solo lista Tracer, Tourer y Cruiser).
// Se sustituye por el LMC Cruiser 740 EL, perfilada actual de la marca, con datos oficiales completos.
// Notas honestas: precio 91.990 € = PVP recomendado en Alemania (la marca advierte que puede variar
// por país); cargaUtilKg queda en null porque LMC no publica carga útil como tal (solo la masa para
// equipamiento opcional del fabricante); plazas dormir 2 de serie (hasta 5 con techo elevable opcional);
// consumo, emisiones y autonomía no publicados por la marca.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_LMC_M3: Autocaravana[] = [
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
carga útil queda en null porque LMC no la publica como tal (prohibido calcularla restando masas);
el consumo, las emisiones de CO2 y el par motor no figuran en la documentación oficial y también
quedan en null.

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
