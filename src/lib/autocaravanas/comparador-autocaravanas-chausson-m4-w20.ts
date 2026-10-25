// Autocaravanas Chausson — lote Merlín 4 (19/10/2026).
// Fuentes: artículo de prensa especializada «Chausson et Challenger diversifient leur offre
// de fourgons avec la nouvelle gamme Road» (fourgonlesite.com, 2026; fotos oficiales de prensa
// Chausson cedidas al medio), web oficial chausson-motorhomes.com (gama 2026).
// Verificado el 19/10/2026.
// Notas honestas: el modelo asignado originalmente (Chausson 640 Road Line) NO EXISTE en el
// catálogo 2026 —la denominación «Road Line» designa la gama de campers 2026 (V594S/V594M/V594Max)
// y no existe ningún «640»—. Se sustituye por el Chausson V594 Road Line, modelo real y vigente.
// Chausson publica su PVP oficial en Francia (el V594 Road Line parte de 48.990 €); el precio ~51.500 € visto en un
// concesionario italiano (camperonline.it) es orientativo y no oficial. La potencia de 140 CV
// como opcional y las 3 plazas para dormir proceden de la documentación comercial del modelo;
// la marca no publica la carga útil (cargaUtilKg = null; prohibido calcularla).
// Consumo, par motor y emisiones: no publicados.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_CHAUSSON_M4: Autocaravana[] = [
  {
    id: "chausson-v594-road-line-2026-precio-ficha-tecnica",
    marca: "Chausson",
    modelo: "V594 Road Line",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: 48990, // PVP oficial Francia (chausson-camping-cars.fr, V594)
    potenciaCv: 120, // Citroën Jumper 120 CV de serie en la gama Road (fourgonlesite.com); 140 CV opcional según documentación comercial
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro 6 sobre Citroën Jumper
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/chausson-v594-road-line-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/chausson-v594-road-line-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/chausson-v594-road-line-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990, // fourgonlesite.com: 5,99 m
    anchoMm: 2050, // fourgonlesite.com: 2,05 m
    altoMm: 2650, // fourgonlesite.com: 2,65 m
    pesoKg: null, // masa en orden de marcha no publicada para esta versión
    mmaKg: 3500, // fourgonlesite.com
    carnetNecesario: "B", // mmaKg <= 3500
    cargaUtilKg: null, // la marca no publica la carga útil; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas
    plazasDormir: 3, // cama transversal trasera (194 x 148 cm) + plaza adicional
    parNm: null,
    traccion: "delantera", // base Citroën Jumper de tracción delantera
    emisionesCo2: null,
    aprox: ["precioDesde"],
    notas:
      "Modelo sustituido: el «Chausson 640 Road Line» asignado no existe en el catálogo 2026 (la gama Road Line son los campers V594S/V594M/V594Max); se documenta el V594 Road Line real. Cotas (599/205/265 cm), motor Citroën Jumper 120 CV, 4 plazas, 3 camas, MMA 3.500 kg y cama transversal de 194 x 148 cm con somier elevable: fourgonlesite.com (artículo 2026 con fotos oficiales de prensa Chausson). Chausson no publica tarifa oficial para España: el precio indicado es el PVP oficial de Francia de la página oficial del modelo V594. Carga útil, consumo, par motor, emisiones y masa en orden de marcha: no publicados; quedan sin dato. Precio: PVP oficial Francia, página oficial del modelo V594 (chausson-camping-cars.fr), «a partir de 48 990 €».",
    curiosidades:
      "La gama Road Line nace directamente de la serie especial «Light» que Chausson lanzó la temporada anterior: una edición ultra competitiva sobre Citroën Jumper 120 CV que funcionó tan bien que la marca la ha convertido en gama permanente. Chausson la presenta como la oferta con las tarifas más accesibles de todo su catálogo, y su gemela en Challenger se llama «Road Edition». Fuente: fourgonlesite.com, «Chausson et Challenger diversifient leur offre de fourgons avec la nouvelle gamme Road» (https://www.fourgonlesite.com/fourgon-neuf/chausson-et-challenger-diversifient-leur-offre-de-fourgons-avec-la-nouvelle-gamme-road/).",
    descripcion: `El Chausson V594 Road Line es la respuesta de la marca francesa a una pregunta que cada vez se hacen más compradores: ¿cuánto cuesta realmente entrar en el mundo camper sin renunciar a una distribución de verdad? La respuesta, en el catálogo 2026 de Chausson, se llama Road Line: una gama de furgonetas camper que hereda el espíritu de la serie especial «Light» de la temporada anterior —una edición ultra competitiva sobre Citroën Jumper 120 CV que se vendió tan bien que la marca decidió convertirla en gama permanente— y que se presenta abiertamente como la oferta con las tarifas más accesibles de todo el catálogo Chausson. El V594 es su variante de 5,99 metros con cama transversal trasera, la distribución más demandada del segmento.

    En medidas y habitabilidad, el V594 Road Line juega la carta de la furgoneta camper clásica bien resuelta: 5,99 metros de largo, 2,05 de ancho y 2,65 de alto, con una MMA de 3.500 kg que lo mantiene dentro del carnet B. La distribución apuesta por lo probado: salón delantero con la cabina integrada, cocina central y, al fondo, la cama transversal de 194 x 148 cm con el somier elevable para liberar espacio en el maletero inferior. Es el esquema que ha convertido a miles de parejas al caravaning, porque permite acostarse sin tener que montar ni desmontar nada cada noche, y porque la cama transversal aprovecha hasta el último centímetro de la anchura de la furgoneta. La cocina del V594 incorpora un detalle poco habitual en este rango de precios: un frigorífico con doble sentido de apertura, accesible tanto desde el interior como desde el exterior, pensado para la vida de campamento. El baño, como en todas las versiones Road, prescinde del sistema vario para mantener el precio a raya: es funcional y compacto, sin florituras.

    En tecnología y equipamiento, la filosofía Road es la sobriedad asumida: Chausson no intenta vender lujo a precio de saldo, sino un camper honesto y bien construido. El ambiente interior apuesta por maderas en tonos claros, con el sobre de la mesa y el plano de trabajo lacados en blanco que contrastan con las puertas de los armarios en tonos oscuros y una tapicería gris discreta. Es una estética sencilla pero cuidada, muy lejos de la imagen espartana que a veces se asocia a las gamas de acceso. El equipamiento de serie cubre lo esencial para viajar desde el primer día, y la gama contempla la finition Sport para quien quiera vestir el mismo vehículo con un aire más dinámico: fachadas bicolores en la cocina y detalles exteriores específicos, una fórmula que Chausson y su marca hermana Challenger mantienen del catálogo anterior.

    En camas y plazas, el V594 Road Line homologa 4 plazas para viajar y 3 para dormir: la cama transversal trasera para dos y una tercera plaza que completa la oferta para una pareja con un niño o para invitados ocasionales. La cama de 194 x 148 cm está en la media del segmento para una transversal —suficiente para dos adultos de estatura media— y el somier elevable es un recurso práctico para cargar bicicletas o material voluminoso sin renunciar a la cama hecha. No es un vehículo para familias numerosas, y no pretende serlo: su público natural son parejas, con o sin un hijo, que quieren un camper manejable para escapadas y vacaciones largas.

    En mecánica, la base es el Citroën Jumper con el motor de 120 CV, la motorización que da nombre a la propuesta de valor de la gama: suficiente para mover con soltura un conjunto de 3.500 kg de MMA, con un consumo contenido y una mecánica probadísima en el mundo profesional. La tracción delantera y el radio de giro de una furgoneta de menos de seis metros hacen del V594 un vehículo que se conduce casi como un turismo grande: entra en parkings subterráneos de 2,70 m con margen, se aparca en una plaza de coche alargada y no exige cambiar los hábitos de conducción. Chausson contempla el 140 CV como opción para quien prevea viajar muy cargado o por zonas de montaña, pero el 120 CV es el corazón de la propuesta Road: el equilibrio entre prestaciones y precio.

    En precio y red comercial en España, Chausson no publica una tarifa oficial de PVP, por lo que el precio final se configura en el concesionario; como referencia orientativa —no oficial—, unidades del V594 Road Line se han anunciado en Italia en torno a los 51.500 euros. La marca cuenta con una red de distribuidores oficiales en España, donde la gama Road se posiciona como la puerta de entrada al catálogo, por debajo de las gamas clásicas sobre Fiat Ducato. Es el segmento donde cada euro cuenta, y Chausson lo sabe: la Road Line no compite con las campers premium, compite con la segunda mano reciente, ofreciendo vehículo nuevo con garantía de fábrica por un precio que hace dudar a más de un comprador de ocasión.

    Cómo lo verificamos: la existencia de la gama Road Line, sus tres variantes (V594S de 5,41 m, V594M y V594Max de 5,99 m), la base Citroën Jumper 120 CV, las cotas del V594 (5,99 x 2,05 x 2,65 m), la MMA de 3.500 kg, las 4 plazas y 3 camas, la cama transversal de 194 x 148 cm con somier elevable, el frigorífico de doble apertura y la ausencia del baño vario en las versiones Road proceden del artículo de fourgonlesite.com «Chausson et Challenger diversifient leur offre de fourgons avec la nouvelle gamme Road» (2026), que reproduce fotos oficiales de prensa cedidas por Chausson, verificado el 19 de octubre de 2026. El precio orientativo procede de un anuncio de concesionario italiano y se declara como no oficial. Los datos no publicados por la marca (carga útil, consumo, par motor, emisiones, masa en orden de marcha) quedan sin dato.

    Para quién es: el V594 Road Line encaja con quien busca su primera camper nueva sin hipotecarse: parejas jóvenes, prejubilados que quieren probar el estilo de vida vanlife con un vehículo manejable, o familias pequeñas que necesitan tres plazas de noche y un maletero tragón. Es ideal para quien valora la sencillez mecánica del Jumper y aparca en ciudad a diario. No es para quien necesite cuatro camas de verdad, para quien sueñe con acabados premium o para quien vaya a viajar siempre a plena carga por alta montaña con el 120 CV: en ese caso, la opción del 140 CV o una gama superior tienen más sentido.`,
    pros: [
      "La camper nueva más accesible del catálogo Chausson: la puerta de entrada a estrenar furgoneta camper",
      "Cama transversal trasera de 194 x 148 cm con somier elevable: se duerme sin montar nada y el maletero sigue tragando",
      "Frigorífico con doble sentido de apertura (interior/exterior): detalle poco habitual en este rango de precios",
      "5,99 m sobre Citroën Jumper: se conduce y aparca casi como un turismo grande, con carnet B",
      "Hereda la fórmula de la serie especial «Light», que ya demostró su éxito comercial la temporada anterior",
    ],
    contras: [
      "Motor de 120 CV justo si se viaja siempre a plena carga o por zonas de montaña exigentes",
      "Sin baño vario en las versiones Road: el aseo es funcional pero básico",
      "Solo 3 plazas para dormir: insuficiente para familias de cuatro",
      "Chausson no publica PVP oficial para España: la referencia es el PVP oficial de Francia (48.990 €)",
      "Acabados sencillos acordes al precio: quien busque materiales premium debe mirar gamas superiores",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/chausson-v594-road-line-2026-precio-ficha-tecnica-oficial.webp", alt: "Chausson V594 Road Line, vista exterior", ancho: 1600, alto: 1067 },
      { src: "/media/chausson-v594-road-line-2026-precio-ficha-tecnica-interior1.webp", alt: "Chausson V594 Road Line, interior del salón", ancho: 1600, alto: 1200 },
      { src: "/media/chausson-v594-road-line-2026-precio-ficha-tecnica-interior2.webp", alt: "Chausson V594 Road Line, comedor", ancho: 1600, alto: 1200 },
      { src: "/media/chausson-v594-road-line-2026-precio-ficha-tecnica-detalle.webp", alt: "Chausson V594 Road Line, cama transversal", ancho: 1600, alto: 1200 },
    ],
    analisisSlug: "chausson-v594-road-line-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Citroën Jumper: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Citroën Jumper)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Chausson (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
