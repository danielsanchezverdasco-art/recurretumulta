// Autocaravanas Morelo — lote Merlín 3 (19/10/2026).
// Fuentes: https://www.morelo-reisemobile.de/en/models/loft (página oficial de la gama Loft:
// chasis, motores, pesos, medidas y precios "desde"); https://www.alpacacamping.de/fahrzeuge/en/model/morelo-loft-liner/
// (layouts de la serie, plazas y tipos de cama). Verificado el 19/10/2026.
// NOTA DE SUSTITUCIÓN: el layout asignado "Loft 82 LB" no figura entre los layouts oficiales
// actuales (la web de Morelo lista 78 L, 81 LB, 82 LS, 82 M, 85 LSB, 85 MB, 87 G y Alkoven).
// Se sustituye por el Morelo Loft 82 M, layout vigente y documentado oficialmente.
// Notas honestas: la longitud exacta por layout no la publica Morelo (rango oficial de la gama
// Loft: 7,99–8,39 m); la altura total tampoco se publica por layout; el precio "desde 244.900 €"
// es el base de la gama Loft en Alemania; carga útil no publicada por la marca.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_MORELO_M3: Autocaravana[] = [
  {
    id: "morelo-loft-82-m-2026-precio-ficha-tecnica",
    marca: "Morelo",
    modelo: "Loft 82 M",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: 244900, // "Available from € 244,900.00" (gama Loft, web oficial)
    potenciaCv: 175, // 129 kW, Iveco Daily 70 C 18, 3.0 turbodiésel
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: null, // Euro VI e; etiqueta no declarada por la marca
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/morelo-loft-82-m-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/morelo-loft-82-m-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/morelo-loft-82-m-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: null, // Morelo no publica la longitud por layout; rango oficial de la gama: 7,99–8,39 m
    anchoMm: 2400, // 2,40 m (web oficial)
    altoMm: null, // no publicado por layout
    pesoKg: null,
    mmaKg: 7490, // 7.490 kg (web oficial, chasis Iveco Daily 70 C 18)
    carnetNecesario: "C1",
    cargaUtilKg: null, // no publicada por la marca
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4, // serie Loft: hasta 4 personas (camprest/alpacacamping)
    parNm: 430, // dato de prensa especializada para la serie (alpacacamping)
    traccion: "trasera", // Iveco Daily: propulsión trasera (web oficial)
    emisionesCo2: null,
    aprox: [],
    notas:
      "Datos de la página oficial de Morelo (morelo-reisemobile.de/en/models/loft), verificada el 19/10/2026, " +
      "y de la ficha de la serie Loft Liner en alpacacamping.de. Sustitución documentada: el layout '82 LB' " +
      "asignado no figura entre los layouts oficiales actuales de la gama Loft (78 L, 81 LB, 82 LS, 82 M, " +
      "85 LSB, 85 MB, 87 G y versiones Alkoven); se sustituye por el Loft 82 M, vigente y con plano oficial. " +
      "Chasis Iveco Daily 70 C 18: 3.0 turbodiésel de 129 kW (175 CV), cambio manual de 6 velocidades " +
      "(automático ZF de 8 relaciones en opción), MMA 7.490 kg, 2,40 m de ancho, depósitos de ~300 l de " +
      "aguas limpias y ~200 l de grises y ~200 l de negras. Precio 'desde 244.900 €' = base de la gama Loft " +
      "en Alemania. Sin dato publicado: longitud exacta del layout (la marca solo da el rango 7,99–8,39 m), altura total, " +
      "carga útil, consumo y emisiones (no publicados). Carnet C1 obligatorio por superar los 3.500 kg.",
    curiosidades:
      "El Loft estrena un parabrisas curvado que se prolonga sobre los pilares A hasta las paredes laterales: " +
      "mejora la aerodinámica, amplía el campo de visión y reduce el peso, además de darle ese aire futurista " +
      "que Morelo buscaba para la nueva generación. Fuente: https://www.morelo-reisemobile.de/en/models/loft",
    descripcion: `El Morelo Loft 82 M es la puerta de entrada al universo de los liners de Schlüsselfeld: la gama
con la que Morelo democratiza —dentro de lo que cabe en este segmento— el concepto de land yacht
alemán. Tras la pausa de la gama Home, el Loft se ha convertido en el Morelo más accesible, con un
precio de partida oficial de 244.900 euros en Alemania, y el layout 82 M es una de sus
distribuciones de unos 8,2 metros sobre el chasis Iveco Daily 70 C 18. Hablamos de una integral de
verdad, de las que se construyen sobre un bastidor de largueros galvanizado en caliente y con un
módulo frontal de PRFV desarrollado junto a Fahrzeugbau Meier, no de una furgoneta vestida de
domingo.

La base mecánica es el conocido 3.0 turbodiésel del Daily con 129 kW (175 CV), cambio manual de
seis velocidades de serie y la posibilidad de montar el automático ZF de 8 relaciones con convertidor
de par, que transforma por completo la experiencia de conducir un vehículo de 7.490 kg de MMA. La
propulsión es trasera, como manda la tradición de los liners, y el depósito de gasóleo es de 90
litros con 20 litros de AdBlue. Con 7.490 kilos de masa máxima, en España exige el carnet C1: es el
peaje innegociable de entrar en el mundo liner, a cambio de una carga útil y una estabilidad que una
3.500 kg no puede ofrecer.

Por dentro, el Loft 2025/2026 estrena un interior completamente rediseñado con muebles de
construcción ligera de paneles modernos con estructura de nido de abeja para ahorrar peso en toda
la carrocería. La cocina monta frigorífico doméstico BSH de 172 litros con congelador de 15 (ampliable
a 200 + 60 en opción), placa de gas de dos fuegos de lujo con encendido automático y tapa de cristal,
y horno de serie. El baño apuesta por la ducha con puerta de cristal real e iluminación LED,
lavabo con válvula push-open y desagüe doméstico, y un armario con iluminación. Para dormir hay
libre elección: camas gemelas, queen size accesible por ambos lados o cama a la francesa, todas con
colchones de espuma fría; la serie admite hasta cuatro plazas. Los depósitos (unos 300 litros de
limpias, 200 de grises y 200 de negras) permiten una autonomía de varios días sin depender de áreas
de servicio.

En tecnología, el Loft incorpora el sistema Morelo Connect: pantalla táctil central sobre la puerta
para controlar todos los sistemas, control por voz de luces, calefacción y multimedia, y control por
app desde el móvil, con interruptores de cristal con sensor de proximidad. La seguridad incluye de
serie faros LED, asistente de frenada de emergencia, control de crucero adaptativo, asistente de
mantenimiento de carril con detección de peatones y limpiaparabrisas tipo autobús que limpia todo
el parabrisas curvo. En opción, cámara Birdview de 360°, suspensión neumática VB ActiveAir,
retarder Telma y patas hidráulicas de nivelación. Merece mención la central eléctrica testada por
VDE que reúne en un solo punto todos los puntos de suministro, medición y seguridad, como la
domótica de una vivienda, y el enganche de remolque opcional de hasta 3,5 toneladas para quien
viaje con remolque o portamotos pesado. Quien necesite más plazas tiene la variante Loft Alkoven,
con capuchina de PRFV y doble suelo extraalto de 460 mm, pensada para familias sin renunciar al
concepto liner. Y por encima del Loft, la escalera Morelo sigue con el Palace y el Empire, que
suben a chasis Eurocargo y Mercedes Atego hasta las 15 toneladas: el Loft es, literalmente, el
primer peldaño de una de las gamas más exclusivas de Europa, y comparte con sus hermanos mayores
la filosofía constructiva y buena parte de la tecnología.

Cómo lo verificamos: chasis, motor, pesos, medidas, depósitos y precio de partida proceden de la
página oficial de la gama Loft en morelo-reisemobile.de, consultada el 19/10/2026; los layouts de
la serie y las plazas, de la ficha de alpacacamping.de. El layout "82 LB" asignado no existe en la
documentación oficial actual, por lo que se sustituyó por el 82 M, con plano oficial publicado. La
longitud exacta del layout y la altura total no las publica Morelo (solo el rango de la gama,
7,99–8,39 m) y quedan sin dato, igual que la carga útil, el consumo y las emisiones.

Para quién es: para quien sueña con un liner alemán de verdad —construcción de bastidor, doble
suelo técnico, central eléctrica testada por VDE— sin subir al medio millón de euros de las gamas
Palace o Empire. Encaja si tienes el C1 (o piensas sacártelo), viajas en pareja con escapadas largas
y valoras la autonomía de agua y la calidad de rodadura del Daily. No encaja si tu carnet es solo el
B, si buscas algo ágil para pueblos con calles estrechas —2,40 m de ancho y más de 8 m de largo se
notan— o si el presupuesto no admite ni el precio base ni el coste de mantener un 7,5 toneladas
(neumáticos, revisiones y seguro de camión ligero).`,
    pros: [
      "Construcción de liner auténtica: bastidor galvanizado, módulo frontal de PRFV, doble suelo",
      "Automático ZF de 8 velocidades en opción y chasis Iveco Daily de probada fiabilidad",
      "Interior 2025 rediseñado con muebles ligeros de nido de abeja y Morelo Connect con control por voz",
      "Depósitos generosos: ~300 l de limpias, 200 de grises y 200 de negras",
      "Seguridad de serie: frenada de emergencia, crucero adaptativo, mantenimiento de carril, faros LED",
    ],
    contras: [
      "Obliga al carnet C1: 7.490 kg de MMA, nada de carnet B",
      "El precio 'desde' es solo la base: un Loft equipado se dispara muy por encima",
      "Cambio manual de serie; el automático ZF es opción de pago",
      "2,40 m de ancho y más de 8 m de largo: maniobrar y aparcar exige planificación",
      "Morelo no publica longitud exacta por layout ni carga útil: hay que pedir la ficha al concesionario",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/morelo-loft-82-m-2026-precio-ficha-tecnica-oficial.webp", alt: "Morelo Loft 82 M, vista exterior", ancho: 1600, alto: 707 },
      { src: "/media/morelo-loft-82-m-2026-precio-ficha-tecnica-interior1.webp", alt: "Morelo Loft 82 M, salón interior", ancho: 1600, alto: 707 },
      { src: "/media/morelo-loft-82-m-2026-precio-ficha-tecnica-interior2.webp", alt: "Morelo Loft 82 M, dormitorio", ancho: 1600, alto: 707 },
      { src: "/media/morelo-loft-82-m-2026-precio-ficha-tecnica-detalle.webp", alt: "Morelo Loft 82 M, detalle de cocina", ancho: 1600, alto: 707 },
    ],
    analisisSlug: "morelo-loft-82-m-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Iveco Daily: revisión anual o cada 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Iveco Daily 3.0)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 450 },
        { nombre: "Revisión célula Morelo (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades, doble suelo", costeAproxEur: 350 },
      ],
    },
  },
];
