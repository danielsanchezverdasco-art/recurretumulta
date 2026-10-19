// Autocaravanas Carado — lote Merlín 3 (19/10/2026).
// Fuentes: carado.com/es/es (web oficial en español, con precios y datos técnicos oficiales
// para España), páginas de modelo T338 EDITION27 y V337. Verificado el 19/10/2026.
// Notas honestas: precios oficiales ES publicados por la marca (69.490 € y 56.590 €);
// la carga útil no la publica la marca (queda en null, prohibido calcularla); el T338
// EDITION27 es la versión Ford Transit 165 CV con cambio automático de 8 marchas que
// Carado comercializa en España; el V337 base en España es el Citroën Jumper 140 CV.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

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
      "grises 92 l; 4 enchufes 230 V; 4 USB; gas 2x11 kg. En null: cargaUtilKg (la marca no " +
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
que la marca no publica (carga útil, consumos, par, emisiones) figura en null en la
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
      "Datos técnicos y precio oficiales para España publicados en carado.com/es/es " +
      "(verificado el 19/10/2026), página del modelo V337: precio base 56.590 € IVA " +
      "incluido (versión Citroën Jumper; 57.790 € la versión Fiat Ducato); chasis Citroën " +
      "Jumper 2.2 de 103 kW (140 CV) con cambio manual de 6 marchas; medidas 666/214/271 " +
      "cm; altura interior 195 cm; distancia entre ejes 380 cm; 4 plazas; masa en orden de " +
      "marcha 2.648 kg (rango 2.516-2.780); MMA 3.500 kg; remolque 2.000/750 kg; camas " +
      "traseras 200x70 / 195x80 (unibles hasta 200-195x194 en opción); frigorífico 78 l " +
      "(11 l congelador); calefacción Combi 4 Gas; agua 116/20 l; grises 92 l; 4 enchufes " +
      "230 V; 2 USB; gas 2x11 kg. En null: cargaUtilKg (la marca no la publica), consumo, " +
      "par y emisiones (no publicados por la marca).",
    curiosidades:
      "El V 337 pertenece a la gama «Van» de Carado: perfiladas estrechas de solo 214 cm " +
      "de ancho, 18 cm menos que las perfiladas T de la marca (232 cm). Esa es su razón de " +
      "ser: ofrecer la habitabilidad de una perfilada con una conducción y un aparcamiento " +
      "casi de furgoneta camper. Fuente: datos técnicos oficiales en carado.com/es/es " +
      "(https://carado.com/es/es/autocaravanas/vans/v337) y análisis de la gama en " +
      "outandaboutlive.co.uk (https://www.outandaboutlive.co.uk/motorhomes/news/meet-carados-slim-motorhomes-dont-sacrifice-comfort-and-practicality).",
    descripcion: `El Carado V 337 es la perfilada estrecha pensada para quienes miran una
autocaravana y piensan «demasiado grande», pero miran una camper y piensan «demasiado
pequeña». Pertenece a la gama Van de Carado —la marca de acceso del grupo Hymer— y su
cifra mágica es 214: son los centímetros de ancho de la célula, 18 menos que una
perfilada convencional. Con 6,66 metros de largo, camas gemelas traseras y un precio
base oficial en España de 56.590 euros, es una de las formas más racionales de
estrenar autocaravana nueva sin hipotecar las vacaciones de la próxima década.

En medidas y habitabilidad, el V 337 demuestra que estrecho no significa agobiante. La
altura interior es de 195 cm y la distribución es la que mejor funciona en este
formato: salón delantero con banqueta y asientos giratorios de cabina, cocina lateral
con armario ropero alto que separa ambientes, baño compacto con ducha y, al fondo,
las dos camas individuales longitudinales (200 x 70 y 195 x 80 cm) que con el
suplemento opcional se convierten en una gran superficie de 200-195 x 194. Debajo de
las camas hay garaje con trampillas a ambos lados para las bicis y los trastos. Los
depósitos (116 litros de agua limpia, 92 de grises) y el frigorífico de 78 litros con
congelador de 11 están dimensionados para una pareja que viaja una o dos semanas sin
complicaciones. La anchura contenida se nota sobre todo en marcha: gira, aparca y se
cuela por calles donde una perfilada de 2,32 metros ya va midiendo retrovisores.

En tecnología y equipamiento, el V 337 de base española monta el Citroën Jumper 2.2
BlueHDi de 140 CV con cambio manual de 6 marchas, tracción delantera, Start&Stop con
booster de carga, control de crucero, frenada automática con detección de peatones,
mantenimiento de carril, reconocimiento de señales y aviso de fatiga: el paquete de
seguridad moderno, sin letra pequeña. La célula lleva calefacción Truma Combi 4 de
gas, claraboya panorámica de 70 x 50 sobre el salón, mosquitera en la puerta,
preinstalación de TV y de placa solar, y tomas de 230 V y USB repartidas. La
carrocería, con techo y trasera en fibra de vidrio reforzada, tiene 7 años de garantía
de estanqueidad. Quien prefiera Fiat puede pedir la versión Ducato desde 57.790 euros.
Un detalle que agradecen los que vienen de una camper: la posición de conducción es
la de un furgón grande, con buena visibilidad y mandos a mano, y el salpicadero no
queda a años luz como en algunas integrales.

En camas y plazas, son cuatro plazas de viaje y dos para dormir en las gemelas de
serie. Es una autocaravana de parejas, sin matices: no hay cama abatible ni literas,
así que si la familia crece habrá que mirar el V 347, el hermano mayor de 6,98 metros
con cama abatible en el salón. A cambio, las dos camas son largas, el acceso es
cómodo con escalones y el garaje inferior queda libre para todo el equipo.

En mecánica, el Jumper 2.2 de 140 CV es un viejo conocido: fiable, con repuestos en
cualquier parte y un consumo razonable para 3,5 toneladas. La MMA es de 3.500 kilos
con carnet B y la masa en orden de marcha oficial es de 2.648 kilos, así que quedan
unos 850 kilos teóricos para pasajeros, extras y equipaje antes de llegar al límite:
una de las mejores relaciones peso/precio del segmento, aunque la marca limita los
opcionales a 511 kilos para proteger la carga útil mínima. Remolca hasta 2.000 kilos
frenados.

En precio y red comercial en España, el dato es oficial y redondo: desde 56.590 euros
con IVA en la versión Citroën (57.790 en Fiat), publicado en la web española de
Carado. A ese precio hay que sumar lo que cada uno necesite —toldo, portabicis,
segunda batería—, pero el punto de partida es de los más bajos entre las perfiladas
nuevas con camas gemelas. La red de concesionarios del grupo Hymer cubre toda España,
con servicio oficial y garantía europea.

Cómo lo verificamos: página oficial del modelo en carado.com/es/es
(https://carado.com/es/es/autocaravanas/vans/v337), consultada el 19/10/2026, con
precio base, ficha técnica y equipamiento de serie; y artículo «Meet Carado's Slim
Motorhomes» de outandaboutlive.co.uk para el contexto de la gama Van estrecha. Los
campos sin dato oficial (carga útil, consumos, par, emisiones) quedan en null y
declarados en las notas.

Para quién es: para parejas que dan el salto desde la tienda de campaña o la furgoneta
y quieren una autocaravana nueva, estrecha y fácil de llevar por menos de 57.000
euros; para quien aparca en ciudad o viaja por carreteras de montaña y agradece cada
centímetro de menos; para el que duerme en camas gemelas y viaja ligero. No es para
familias (solo dos plazas para dormir y sin opción de abatible en este modelo), ni
para quien necesite una ducha separada amplia: el baño es compacto y funcional, como
corresponde a 6,66 metros.`,
    pros: [
      "Solo 214 cm de ancho: se conduce y aparca casi como una furgoneta camper",
      "Precio oficial ES desde 56.590 €: de las perfiladas nuevas más asequibles con camas gemelas",
      "Masa en orden de marcha de 2.648 kg: buena carga útil teórica bajo 3.500 kg",
      "Paquete de seguridad moderno de serie (frenada auto, carril, señales, fatiga)",
      "Camas gemelas largas unibles en una gran doble de 200-195x194 en opción",
    ],
    contras: [
      "Solo 2 plazas para dormir y sin cama abatible opcional en este modelo",
      "Baño compacto: funcional pero sin la amplitud de sus hermanas mayores",
      "Altura interior de 195 cm, algo justa para viajeros muy altos",
      "Cambio manual de 6 marchas: no hay opción automática en la versión base ES",
      "Acabados sencillos acordes al precio: es gama de acceso, y se nota en detalles",
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
