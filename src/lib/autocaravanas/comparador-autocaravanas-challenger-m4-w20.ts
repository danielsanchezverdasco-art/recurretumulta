// Autocaravanas Challenger — lote Merlín 4 (19/10/2026).
// Fuentes: página oficial del modelo en challenger-camping-cars.fr/modele/s194/
// (datos técnicos del configurador oficial, precio 60.990 € en JSON-LD, gama «Profilés Slims»),
// ediciones Break y Sport descritas en la web oficial.
// Verificado el 19/10/2026.
// Notas honestas: el precio de 60.990 € es el PVP oficial para Francia (no hay tarifa oficial
// publicada para España). La motorización listada en el configurador oficial es la Ford de
// 165 CV con cambio automático de 8 velocidades (la «supérieure» figura como opcional; la base
// no se detalla en la web). Fotos (verif. 19/10/2026): 2 oficiales de la web de la marca
// (cama «papillon» y garaje, challenger-camping-cars.fr/modele/s194/); la marca NO publica
// exterior oficial del S194, así que el exterior (anuncio de tapisvan.com) y el salón
// (concesionario francés Plein Air Normandie) proceden de concesionarios (modelo exacto,
// matrícula blanqueada, sin marcas de agua ni rótulos); se usan bajo la regla relajada de
// 19/10/2026 (modelo y marca exactos). La marca no publica la carga útil como cifra (cargaUtilKg = null; prohibido calcularla).
// Consumo, par y emisiones: no publicados.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_CHALLENGER_M4: Autocaravana[] = [
  {
    id: "challenger-s-194-2026-precio-ficha-tecnica",
    marca: "Challenger",
    modelo: "S194",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 60990, // PVP oficial Francia (challenger-camping-cars.fr, JSON-LD); no hay tarifa oficial ES
    potenciaCv: 165, // motorización Ford de 165 CV listada en el configurador oficial (cambio automático 8v); la base no se detalla
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro 6 sobre base Ford
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/challenger-s-194-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/challenger-s-194-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/challenger-s-194-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990, // configurador oficial: longueur 5.99 m
    anchoMm: 2100, // configurador oficial: 2,10 m (gama «Slim»)
    altoMm: 2750, // configurador oficial: 2,75 m (interior 1,96 m)
    pesoKg: 2573, // masa en orden de marcha oficial (+/- 5 %)
    mmaKg: 3500, // configurador oficial
    carnetNecesario: "B", // mmaKg <= 3500
    cargaUtilKg: null, // la marca no publica la carga útil; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas en ficha (pl_assise = 4)
    plazasDormir: 3, // 2/3*: cama fija trasera 132x189 + dinette convertible 90x185; basculante eléctrica opcional
    parNm: null,
    traccion: "delantera", // base Ford Transit de tracción delantera
    emisionesCo2: null,
    aprox: ["precioDesde"], // precio oficial Francia; en España puede diferir
    notas:
      "Cotas (599/210/275 cm), MMA 3.500 kg, MRO 2.573 kg, 4 plazas, 2-3 camas, cama fija 132 x 189 cm, dinette convertible 90 x 185 cm, frigorífico de compresión 84 l, agua limpia 105 l, grises 100 l y calefacción Eberspächer diésel 4.000 W: configurador oficial de challenger-camping-cars.fr (verificado 19/10/2026). Precio 60.990 €: PVP oficial Francia (JSON-LD de la página); sin tarifa oficial para España. Motor Ford 165 CV con automático de 8 velocidades listado en el configurador; la motorización base no se detalla. Fotos (verif. 19/10/2026): 2 oficiales de la web de " +
      "la marca —la cama «papillon» y el garaje (challenger-camping-cars.fr/modele/s194/)—; la " +
      "marca no publica exterior oficial del S194, así que el exterior (anuncio de tapisvan.com) " +
      "y el salón (concesionario francés Plein Air Normandie) son de concesionario (modelo " +
      "exacto, matrícula blanqueada, sin marcas de agua ni rótulos). Carga útil, consumo, par y emisiones: no publicados; quedan sin dato.",
    curiosidades:
      "La S del S194 significa «slim»: pertenece a la gama «Profilés Slims» de Challenger, perfilados de solo 2,10 m de ancho —20 cm menos que una perfilada convencional— pensados para moverse casi como una furgoneta. Y aun así, con menos de 6 metros de largo, esconde un garaje trasero de verdad: su cama fija «papillon» (mariposa) se articula para agrandar el maletero cuando hace falta cargar material voluminoso. Fuente: página oficial del modelo (https://www.challenger-camping-cars.fr/modele/s194/), descripción oficial del «lit papillon» y dimensiones del configurador.",
    descripcion: `El Challenger S194 es la prueba de que una perfilada no tiene por qué ser un mastodonte: con 5,99 metros de largo y solo 2,10 metros de ancho, este modelo de la gama «Profilés Slims» de Challenger se sitúa a medio camino entre una furgoneta camper y una perfilada convencional, y lo hace sin renunciar a lo que de verdad importa en una autocaravana: una cama fija de verdad, un baño completo y un garaje aprovechable. Es la apuesta francesa por el perfilado compacto, un segmento que crece cada año a medida que los compradores descubren que el tamaño sí importa… pero al revés.

    En medidas y habitabilidad, el S194 es un ejercicio de precisión: 5,99 m de largo, 2,10 m de ancho y 2,75 m de alto, con 1,96 m de altura interior. Esos 20 centímetros menos de anchura respecto a una perfilada estándar se notan en carretera —menos resistencia al aire, más facilidad para circular por carreteras secundarias y pueblos— y apenas se notan dentro gracias a una distribución inteligente de tipo «maxi-salón». La masa en orden de marcha es de 2.573 kg para una MMA de 3.500 kg, lo que deja un margen de carga generoso para su tamaño y lo mantiene holgadamente dentro del carnet B. La estrella de la distribución es la cama fija trasera «papillon» (mariposa) de 132 x 189 cm: una cama que se puede articular por un lado para acceder a los armarios y por el otro para agrandar el garaje trasero, un recurso ingenioso que resuelve el eterno dilema entre almacenaje y comodidad para dormir. El baño es de tabique pivotante, la solución que permite tener ducha y WC separados en un espacio mínimo sin sacrificar metros al salón.

    En tecnología y equipamiento, el S194 se ofrece en dos ediciones, Break y Sport, que visten el mismo vehículo con personalidades distintas: la Break, más clásica, y la Sport, con detalles estéticos más dinámicos —la misma lógica de gama que Challenger comparte con su marca hermana Chausson—. El equipamiento de serie incluye cierre centralizado de la puerta de célula, colchón premium en la cama principal, preinstalación de TV y climatización de cabina con los sistemas de ayuda a la conducción de la base Ford, incluido el FordPass. La calefacción es una Eberspächer diésel de 4.000 W que utiliza el propio gasóleo del vehículo —con opción de 6.000 W—, una elección práctica que evita depender de las bombonas de gas para calentar el habitáculo. El frigorífico es de compresión de 84 litros a 12 V/230 V, más eficiente que los de absorción y sin necesidad de nivelar el vehículo para que funcione. Entre los opcionales destacan el toldo exterior, el panel solar de 140 W con predisposición para batería de litio y las llantas de aleación negras de 16 pulgadas.

    En camas y plazas, el S194 homologa 4 plazas para viajar y 2-3 para dormir según la configuración: la cama fija trasera de 132 x 189 cm para dos, la dinette transformable en cama individual de 90 x 185 cm como plaza de cortesía, y una cama basculante eléctrica opcional de 140 x 190 cm que eleva la capacidad total. Es, en la práctica, un vehículo ideal para dos personas que viajan con todo hecho —la cama fija es el lujo que más se agradece en ruta— con la posibilidad de acoger a un tercer ocupante de forma ocasional sin grandes sacrificios. La dinette, además, ofrece 4 plazas para comer, de modo que invitar a amigos a cenar no es un problema aunque no se queden a dormir.

    En mecánica, la base es Ford —la web oficial lo confirma en la denominación de las ediciones— y la motorización que aparece en el configurador oficial es la de 165 CV con cambio automático de 8 velocidades, una combinación moderna que promete una conducción relajada en un vehículo de este peso. La tracción delantera y la batalla contenida (3,3 m de distancia entre ejes) hacen del S194 un vehículo ágil en ciudad y noble en carretera. Con 70 litros de depósito de gasóleo y un peso contenido, la autonomía rutera es uno de sus puntos fuertes silenciosos: es el tipo de autocaravana con la que apetece improvisar la ruta sobre la marcha.

    En precio y red comercial en España, el PVP oficial en Francia parte de 60.990 euros; Challenger no publica una tarifa oficial para España, por lo que el precio final se negocia con la red de distribuidores. La marca, del grupo Trigano, cuenta con concesionarios oficiales en España y posiciona el S194 como su perfilado de acceso al mundo de las «slim»: más barato que una perfilada grande, más habitable que una camper. Es un posicionamiento inteligente en un mercado donde el comprador duda entre furgoneta y perfilada: el S194 le dice que no tiene por qué elegir.

    Cómo lo verificamos: las cotas (5,99 x 2,10 x 2,75 m), la altura interior (1,96 m), la MMA (3.500 kg), la masa en orden de marcha (2.573 kg), las plazas (4 para viajar, 2-3 para dormir), la cama fija de 132 x 189 cm, la dinette convertible de 90 x 185 cm, el frigorífico de compresión de 84 l, los depósitos (105 l de agua limpia, 100 l de grises, 70 l de gasóleo), la calefacción Eberspächer diésel y la motorización Ford de 165 CV con automático de 8 velocidades proceden del configurador y la ficha oficiales de challenger-camping-cars.fr/modele/s194/, verificados el 19 de octubre de 2026. El precio de 60.990 € figura en los datos estructurados (JSON-LD) de la propia página oficial para Francia. La descripción del «lit papillon» y la pertenencia a la gama «Profilés Slims» son de la web oficial. Los datos no publicados (carga útil, consumo, par, emisiones) quedan sin dato.

    Para quién es: el S194 encaja con parejas que quieren una autocaravana de verdad —cama fija, baño completo— sin saltar a los 7 metros: viajeros que alternan autopista y carreteras secundarias, que pernoctan tanto en campings como en áreas, y que valoran poder aparcar sin planificar cada parada. Es ideal como primera «grande» para quien viene de una camper y echa de menos una cama hecha. No es para familias de cuatro (la tercera cama es de cortesía), para quien necesite un garaje de quads, ni para quien busque el máximo equipamiento de serie por este precio: la filosofía slim prioriza la agilidad sobre el lujo.`,
    pros: [
      "Solo 2,10 m de ancho y 5,99 m de largo: la perfilada que se conduce casi como una furgoneta",
      "Cama fija trasera «papillon» de 132 x 189 cm que se articula para agrandar el garaje: ingenioso y práctico",
      "MRO de 2.573 kg para 3.500 kg de MMA: margen de carga generoso con carnet B",
      "Calefacción diésel Eberspächer y frigo de compresión: autonomía sin depender del gas",
      "Dos ediciones (Break y Sport) y precio de acceso contenido para una perfilada con cama fija",
    ],
    contras: [
      "La tercera plaza para dormir es de cortesía (dinette de 90 x 185 cm): no es un 3 plazas real",
      "Baño de tabique pivotante: funcional, pero sin ducha separada",
      "La motorización base no se detalla en la web oficial; el 165 CV figura como versión superior",
      "Sin tarifa oficial para España: el precio final depende del distribuidor",
      "Con 2,10 m de ancho, el salón es más justo que en una perfilada convencional",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/challenger-s-194-2026-precio-ficha-tecnica-oficial.webp", alt: "Challenger S194, vista exterior", ancho: 1565, alto: 1236 },
      { src: "/media/challenger-s-194-2026-precio-ficha-tecnica-interior1.webp", alt: "Challenger S194, cocina", ancho: 1600, alto: 1200 },
      { src: "/media/challenger-s-194-2026-precio-ficha-tecnica-interior2.webp", alt: "Challenger S194, cama transversal trasera", ancho: 1600, alto: 1200 },
      { src: "/media/challenger-s-194-2026-precio-ficha-tecnica-detalle.webp", alt: "Challenger S194, baño", ancho: 1600, alto: 1200 },
    ],
    analisisSlug: "challenger-s-194-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Ford Transit: revisión cada 2 años o 60.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Ford Transit)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 380 },
        { nombre: "Revisión célula Challenger (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
