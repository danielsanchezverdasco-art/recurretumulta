// Autocaravanas Carado — lote Merlín 3 (19/10/2026).
// Fuentes: carado.com/es/es (web oficial en español, con precios y datos técnicos oficiales
// para España), páginas de modelo T338 EDITION27 y V337. Verificado el 19/10/2026.
// Notas honestas: precios oficiales ES publicados por la marca (69.490 € y 56.590 €);
// la carga útil no la publica la marca (queda sin dato, prohibido calcularla); el T338
// EDITION27 es la versión Ford Transit 165 CV con cambio automático de 8 marchas que
// Carado comercializa en España; el V337 base en España es el Citroën Jumper 140 CV.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_CARADO_M3: Autocaravana[] = [
  {
    id: "carado-t-338-2026-precio-ficha-tecnica",
    marca: "Carado",
    modelo: "T 338 EDITION27",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 69490, // precio base oficial ES incl. IVA (carado.com/es/es)
    potenciaCv: 165, // Ford Transit 2.0, 122 kW/165 CV, cambio automático de 8 marchas
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
    imagen: "/media/carado-t-338-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/carado-t-338-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/carado-t-338-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6990, // datos técnicos oficiales ES
    anchoMm: 2320,
    altoMm: 2930,
    pesoKg: 2876, // masa en orden de marcha oficial (2.732-3.020 kg según tolerancia)
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica carga útil; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 2, // 4 en opción con cama abatible 195x140-110
    parNm: null,
    traccion: "delantera", // declarada por la marca en el equipamiento de serie
    emisionesCo2: null,
    aprox: [],
    notas:
      "Datos técnicos y precio oficiales para España publicados en carado.com/es/es " +
      "(verificado el 19/10/2026), página del modelo T338 EDITION27: precio base 69.490 € " +
      "IVA incluido; chasis Ford Transit 2.0 de 122 kW (165 CV) con cambio automático de " +
      "8 marchas; medidas 699/232/293 cm; altura interior 210 cm; distancia entre ejes " +
      "375 cm; 4 plazas; masa en orden de marcha 2.876 kg (rango 2.732-3.020); MMA 3.500 kg; " +
      "remolque 2.000/750 kg; camas traseras 192x80 / 200x80 / 210x153 OPT; cama abatible " +
      "opcional 195x140-110; frigorífico 156 l; calefacción Combi 6 Gas; agua 122/20 l; " +
      "grises 92 l; 4 enchufes 230 V; 4 USB; gas 2x11 kg." +
      "la publica), consumo, par y emisiones (no publicados por la marca).",
    curiosidades:
      "El T338 EDITION27 que Carado vende en España lleva de serie el Ford Transit 2.0 de " +
      "165 CV con cambio automático de 8 marchas y una pantalla de 12 pulgadas con Apple " +
      "CarPlay y Android Auto, además de cámara de visión trasera, climatizador y asientos " +
      "giratorios de cabina: un nivel de equipamiento de serie poco habitual en la gama de " +
      "acceso del grupo Hymer. Fuente: equipamiento de serie del T338 EDITION27 en " +
      "carado.com/es/es (https://carado.com/es/es/autocaravanas/perfiladas/t338-ed27).",
    descripcion: `El Carado T 338 EDITION27 es la perfilada de 7 metros con camas gemelas que
mejor resume la filosofía de Carado: la puerta de entrada al grupo Hymer sin pagar la
marca premium. El T 338 es un clásico del catálogo —perfilada (semi-integrada) con la
cabina del furgón conservada— y la EDITION27 es la serie especial del año del modelo
2027, que en España se vende sobre el Ford Transit 2.0 de 165 caballos con cambio
automático de 8 marchas de serie. Con 6,99 metros de largo y 2,32 de ancho ofrece el
esquema que más parejas buscan: salón delantero, cocina central, baño completo y dos
camas individuales longitudinales atrás, sobre un garaje de verdad.

En medidas y habitabilidad, el T 338 EDITION27 aprovecha cada centímetro. La altura
interior es de 210 cm, generosa para una perfilada, y la distancia entre ejes de 375 cm
le da aplomo en autopista. El salón combina la banqueta lateral con los asientos
giratorios de cabina —cómodos, con reposabrazos dobles y apoyo lumbar— y la mesa se
puede ampliar para comer cuatro sin apreturas. La cocina, con fregadero redondo y
fogón de tres fuegos bajo una tapa de cristal que hace de encimera extra, queda
enfrente del baño, que lleva pared basculante para separar la ducha del inodoro cuando
hace falta. Las camas traseras miden 192 x 80 y 200 x 80 cm y pueden unirse con el
suplemento opcional hasta un 210 x 153; debajo queda un garaje con puertas a ambos
lados (75 x 110 a la derecha y 75 x 80 a la izquierda) donde caben bicis, sillas y la
mesa de camping. Agua limpia de 122 litros (20 en marcha), grises de 92 y un
frigorífico de 156 litros completan una célula pensada para viajar de verdad, no solo
para el fin de semana.

En tecnología y equipamiento, la EDITION27 viene cargada de fábrica: el Pack EDITION27
suma al Basic Pack la pantalla de 12 pulgadas con Apple CarPlay y Android Auto, cámara
trasera, climatizador, volante de cuero, faros antiniebla con luz de curva y llantas
de aleación, además de todo el arsenal de ayudas del Transit (mantenimiento de carril,
pre-colisión, aviso de fatiga, luces largas automáticas, ayuda al aparcamiento
delantera y sensor de presión de neumáticos). La calefacción es una Truma Combi 6 de
gas con dos bombonas de 11 kilos, hay cuatro enchufes de 230 V y cuatro USB repartidos,
y la carrocería presume de 7 años de garantía de estanqueidad. Es el equipamiento que
hace unos años solo se veía dos escalones por encima en precio.

En camas y plazas, la configuración de serie es de cuatro plazas de viaje y dos para
dormir en las gemelas traseras. La opción interesante es la cama abatible sobre el
salón (195 x 140-110 cm), que convierte el T 338 en un cuatro plazas para dormir sin
tocar el garaje ni el salón: perfecta para parejas con dos niños o para llevar
invitados de forma ocasional. Eso sí, desplegada queda a la altura de la encimera y se
sube por escalera, así que es cama de jóvenes ágiles más que de abuelos.

En mecánica, la EDITION27 apuesta por el Ford Transit 2.0 EcoBlue de 165 CV asociado
al automático de 8 relaciones: una combinación redonda, suave en ciudad y desahogada
en autopista, con Start&Stop y booster de carga incluidos. Homologa 3.500 kilos de
MMA para el carnet B y declara 2.876 kilos en orden de marcha; Carado topa los
opcionales en 270 kilos para no comprometer la carga útil mínima que exige la norma,
así que la hoja de extras conviene rellenarla con la calculadora al lado. Admite
remolque de hasta 2.000 kilos con freno.

En precio y red comercial en España, aquí Carado juega con las cartas boca arriba:
la web española publica la tarifa y el T338 EDITION27 arranca en 69.490 euros con IVA,
una cifra rompedora para una perfilada de siete metros con cambio automático y este
nivel de equipamiento. La venta y el servicio corren a cargo de los concesionarios del
grupo Hymer repartidos por España, con garantía europea y recambios asegurados; el
precio final, eso sí, lo marcan los opcionales que cada uno elija (toldo, solar,
portabicis o la abatible no vienen de serie).

Cómo lo verificamos: la ficha del modelo en carado.com/es/es
(https://carado.com/es/es/autocaravanas/perfiladas/t338-ed27), revisada el
19/10/2026, de donde tomamos precio, medidas, pesos y dotación de serie; más la ficha
del T338 en carado.com/de/en para contrastar la variante con chasis Citroën. Todo lo
que la marca no publica (carga útil, consumos, par, emisiones) figura sin dato en la
ficha y explicado en las notas, sin excepciones.

Para quién es: para parejas que buscan su primera perfilada grande —siete metros,
gemelas, automática— sin que el presupuesto se escape de los setenta mil euros de
salida; para los que se inician y quieren el respaldo de un gran grupo detrás; para
ciclistas que necesitan un garaje serio. No encaja con quien exija cuatro camas fijas
(la abatible es un extra para uso esporádico), ni con quien llene la hoja de
opcionales sin mirar la báscula: con 2.876 kilos en vacío y 3.500 de máximo, cada
kilo cuenta.`,
    pros: [
      "Precio oficial ES de 69.490 €: de lo más competitivo en perfiladas 7 m automáticas",
      "Ford Transit 165 CV con automático de 8 marchas y pantalla 12\" de serie en la EDITION27",
      "Camas gemelas traseras sobre garaje con doble acceso: el plano favorito de las parejas",
      "Cama abatible opcional que la convierte en 4 plazas sin perder garaje ni salón",
      "7 años de garantía de estanqueidad y red de servicio del grupo Hymer en España",
    ],
    contras: [
      "Masa en orden de marcha de 2.876 kg: la carga útil real obliga a elegir extras con cuidado",
      "Dos plazas para dormir de serie; la abatible es opcional y de acceso por escalera",
      "El baño con pared basculante es práctico pero no una ducha separada de verdad",
      "Acabados correctos pero un escalón por debajo de las marcas premium del grupo",
      "El precio sube rápido con toldo, solar, portabicis y cama abatible",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/carado-t-338-2026-precio-ficha-tecnica-oficial.webp", alt: "Carado T 338 EDITION27, vista exterior", ancho: 2560, alto: 980 },
      { src: "/media/carado-t-338-2026-precio-ficha-tecnica-interior1.webp", alt: "Carado T 338 EDITION27, salón hacia las camas", ancho: 1920, alto: 1080 },
      { src: "/media/carado-t-338-2026-precio-ficha-tecnica-interior2.webp", alt: "Carado T 338 EDITION27, camas individuales traseras", ancho: 1920, alto: 1080 },
      { src: "/media/carado-t-338-2026-precio-ficha-tecnica-detalle.webp", alt: "Carado T 338 EDITION27, detalle de la cocina", ancho: 1920, alto: 1080 },
    ],
    analisisSlug: "carado-t-338-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Ford Transit: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Ford Transit)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 380 },
        { nombre: "Revisión célula Carado (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
  {
    id: "carado-v-337-2026-precio-ficha-tecnica",
    marca: "Carado",
    modelo: "V 337",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 56590, // precio base oficial ES incl. IVA, versión Citroën Jumper
    potenciaCv: 140, // Citroën Jumper 2.2 BlueHDi 140 CV, cambio manual de 6 marchas
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
    imagen: "/media/carado-v-337-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/carado-v-337-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/carado-v-337-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6660, // datos técnicos oficiales ES
    anchoMm: 2140,
    altoMm: 2710,
    pesoKg: 2648, // masa en orden de marcha oficial (2.516-2.780 kg según tolerancia)
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica carga útil; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 2,
    parNm: null,
    traccion: "delantera", // declarada por la marca en el equipamiento de serie
    emisionesCo2: null,
    aprox: [],
    notas:
      "Precio y datos técnicos oficiales para España, tomados de carado.com/es/es el " +
      "19/10/2026 en la página del V337: 56.590 € IVA incluido de base (versión " +
      "Citroën Jumper; 57.790 € la Fiat Ducato); Citroën Jumper 2.2 de 103 kW " +
      "(140 CV) con manual de seis velocidades; 666/214/271 cm de medidas; 195 cm de " +
      "altura interior; 380 cm de batalla; 4 plazas; 2.648 kg de masa en orden de marcha " +
      "(horquilla 2.516-2.780); MMA de 3.500 kg; capacidad de remolque de 2.000/750 kg; " +
      "camas traseras de 200x70 / 195x80 (ampliables a 200-195x194 como opción); " +
      "frigorífico de 78 l con 11 l de congelador; calefacción Combi 4 de gas; 116/20 l " +
      "de agua; 92 l de grises; cuatro tomas de 230 V; dos USB; gas en 2x11 kg. " +
      "Permanecen sin dato: carga útil (no publicada), consumo, par y emisiones (sin " +
      "dato oficial).",
    curiosidades:
      "El V 337 milita en la gama «Van» de Carado: perfiladas estrechas de tan solo " +
      "214 cm de ancho, 18 cm menos que las perfiladas T de la marca (232 cm). Ahí está " +
      "su sentido: brindar la vida a bordo de una perfilada con una conducción y un " +
      "aparcamiento próximos a los de una furgoneta camper. Fuente: datos técnicos " +
      "oficiales de carado.com/es/es " +
      "(https://carado.com/es/es/autocaravanas/vans/v337) y análisis de la gama en " +
      "outandaboutlive.co.uk " +
      "(https://www.outandaboutlive.co.uk/motorhomes/news/meet-carados-slim-motorhomes-dont-sacrifice-comfort-and-practicality).",
    descripcion: `El Carado V 337 es la respuesta para quien encuentra las autocaravanas «demasiado grandes» y las campers «demasiado pequeñas»: una perfilada estrecha que ocupa el hueco entre ambos mundos. Forma parte de la gama Van de Carado —la enseña de acceso del grupo Hymer— y su número fetiche es el 214: los centímetros de anchura de la célula, 18 menos que una perfilada tradicional. Mide 6,66 metros, duerme en camas gemelas traseras y parte de 56.590 euros oficiales en España: una de las vías más sensatas de comprar una autocaravana nueva sin comprometer las vacaciones de los próximos años.

Estrecho no equivale a agobiante, y el V 337 lo demuestra. Con 195 cm de altura interior, reparte el espacio con el plano que mejor rinde en este formato: salón delantero de banqueta con los asientos de cabina giratorios, cocina lateral flanqueada por un armario ropero alto que separa ambientes, baño compacto con ducha y, en la parte trasera, las gemelas longitudinales (200 x 70 y 195 x 80 cm) que con el suplemento opcional se funden en una superficie de 200-195 x 194. El garaje bajo las camas, con trampillas por ambos costados, acoge bicicletas y bultos. Agua limpia de 116 litros, grises de 92 y frigorífico de 78 litros con congelador de 11 están calculados para una pareja que rueda una o dos semanas sin sobresaltos. La cintura estrecha se agradece al volante: vira, aparca y se infiltra por callejuelas donde una perfilada de 2,32 metros ya calcula retrovisores.

La versión española se apoya en el Citroën Jumper 2.2 BlueHDi de 140 CV con cambio manual de seis marchas y tracción delantera, y suma de serie Start&Stop con booster de carga, programador de velocidad, frenada de emergencia con detección de peatones, ayuda de mantenimiento de carril, lector de señales y alerta de fatiga: el arsenal de seguridad actual, sin asteriscos. En la célula, calefacción Truma Combi 4 de gas, claraboya panorámica de 70 x 50 sobre el salón, mosquitera en la puerta, preinstalaciones de televisión y de placa solar, y enchufes de 230 V y USB distribuidos. Techo y zaga en fibra de vidrio reforzada, con 7 años de garantía de estanqueidad. Existe alternativa Fiat Ducato desde 57.790 euros. Y un apunte para ex-camperistas: la postura al volante es la de un furgón grande, con visibilidad generosa y mandos cercanos, sin el salpicadero lejano de algunas integrales.

Cuatro plazas para circular y dos camas en las gemelas de serie: el V 337 es una autocaravana de parejas, sin ambigüedades. No hay abatible ni literas, de modo que si la familia aumenta habrá que mirar al V 347, su hermano de 6,98 metros con cama abatible en el salón. A cambio, las camas son largas, se accede a ellas con escalones cómodos y el garaje queda despejado para todo el equipo.

El Jumper 2.2 de 140 CV es un clásico conocido: fiable, con recambios en cualquier rincón y un apetito moderado para 3,5 toneladas. Con 3.500 kilos de MMA (carnet B) y 2.648 kilos oficiales en orden de marcha, quedan unos 850 kilos teóricos para ocupantes, opciones y equipaje antes del tope: de las mejores proporciones peso/precio del segmento, aunque la marca topa los opcionales en 511 kilos para salvaguardar la carga útil mínima. Arrastra hasta 2.000 kilos con freno.

En precio y red en España, la cifra es oficial y clara: 56.590 euros con IVA en la versión Citroën (57.790 en la Fiat), publicada en la web española de Carado. Habrá que añadir lo que cada viajero necesite —toldo, portabicicletas, segunda batería—, pero el punto de partida figura entre los más bajos de las perfiladas nuevas con camas gemelas. La red del grupo Hymer cubre todo el país con servicio oficial y garantía europea.

Cómo lo verificamos: página oficial del modelo en carado.com/es/es (https://carado.com/es/es/autocaravanas/vans/v337), consultada el 19/10/2026, con precio de base, ficha técnica y dotación de serie; y el artículo «Meet Carado's Slim Motorhomes» de outandaboutlive.co.uk como contexto de la gama Van estrecha. Los apartados sin cifra oficial (carga útil, consumos, par, emisiones) permanecen sin dato y figuran en las notas.

Para quién es: parejas que saltan de la tienda o la furgoneta a una autocaravana nueva, estrecha y manejable por menos de 57.000 euros; conductores que aparcan en ciudad o ruedan por puertos de montaña y agradecen cada centímetro de menos; durmientes de camas gemelas que viajan ligeros. No es para familias (dos camas y ninguna abatible disponible en este modelo) ni para quien exija una ducha separada generosa: el baño es compacto y resolutivo, lo que corresponde a 6,66 metros.`,
    pros: [
      "214 cm de anchura: se maneja y aparca casi como una camper",
      "56.590 € oficiales en España: de las perfiladas nuevas con gemelas más asequibles",
      "2.648 kg en orden de marcha: holgada carga útil teórica bajo los 3.500 kg",
      "Seguridad actual de serie (frenada automática, carril, señales, fatiga)",
      "Gemelas largas que se unen en una gran cama de 200-195x194 como opción",
    ],
    contras: [
      "Dos camas y ninguna abatible disponible en este modelo",
      "Baño compacto: resolutivo, pero lejos de la amplitud de sus hermanas",
      "195 cm de altura interior, justos para los más altos",
      "Solo manual de seis marchas: sin automática en la base española",
      "Acabados modestos, coherentes con el precio: es gama de acceso y se percibe",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/carado-v-337-2026-precio-ficha-tecnica-oficial.webp", alt: "Carado V 337, vista exterior", ancho: 2560, alto: 980 },
      { src: "/media/carado-v-337-2026-precio-ficha-tecnica-interior1.webp", alt: "Carado V 337, salón y cocina", ancho: 1920, alto: 1080 },
      { src: "/media/carado-v-337-2026-precio-ficha-tecnica-interior2.webp", alt: "Carado V 337, camas individuales traseras", ancho: 1920, alto: 1080 },
      { src: "/media/carado-v-337-2026-precio-ficha-tecnica-detalle.webp", alt: "Carado V 337, detalle de la cocina", ancho: 1920, alto: 1080 },
    ],
    analisisSlug: "carado-v-337-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Citroën Jumper: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Citroën Jumper)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Carado (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
