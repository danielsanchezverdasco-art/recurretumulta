// Autocaravanas McLouis — lote Merlín 5 (19/10/2026).
// Fuentes: página oficial del modelo en mclouis.com/es/tipologia/perfilada/
// mc4-slim-337/ (descripción, dimensiones, motor, plazas, equipamiento),
// ficha técnica oficial McLouis 2026 «Profiles Mc4-Slim-337 Caracteristiques»
// (docs.campingcar-infos.com, 6390/2150 mm, 258/204 cm, 4 plazas, 2(+2)
// camas, basculante 190x142, dinette 201x104(97), frigo 137 l, aguas
// 20/120/100 l), lista oficial de precios McLouis 2026 CZ (2.0 TDI 130 CV,
// MMA 3.500 kg, masa en orden de marcha 2.775 kg, carga útil 725 kg),
// anuncio de distribuidor francés ypocamp.fr (Mc4 Slim 337 nuevo desde
// 64.690 €, Francia), anuncio de distribuidor neerlandés dicar.nl
// (precio base 69.750 €, Países Bajos).
// Verificado el 19/10/2026.
// Notas honestas: McLouis no publica tarifa oficial para España
// (precioDesde = Listino oficial McLouis Italia 2026, 64.750 €, marcado en «aprox»; los precios
// francés y neerlandés citados son de distribuidores extranjeros y no se usan como precio de partida). La
// galería oficial del modelo en mclouis.com no incluye foto exterior: la
// imagen principal es una foto real de una unidad 337 exacta de un
// distribuidor (sin marca de agua ni rótulos), documentada como no oficial;
// los interiores y el plano son oficiales. Carga útil de 725 kg publicada
// por la marca en su lista de precios CZ; varía con opcionales.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_MCLOUIS_M5: Autocaravana[] = [
  {
    id: "mclouis-mc4-slim-337-2026-precio-ficha-tecnica",
    marca: "McLouis",
    modelo: "Mc4 Slim 337",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 64750, // Listino oficial McLouis Italia 2026, IVA incl.
    potenciaCv: 130, // Ford Transit 2.0 TDI EcoBlue de 130 CV; 165 CV opcional
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro 6 sobre Ford Transit
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/mclouis-mc4-slim-337-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/mclouis-mc4-slim-337-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/mclouis-mc4-slim-337-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6390, // ficha técnica oficial McLouis 2026
    anchoMm: 2150, // ficha técnica oficial McLouis 2026 (solo 2,15 m: la gracia del Slim)
    altoMm: 2580, // ficha técnica oficial McLouis 2026 (altura exterior; interior 204 cm)
    pesoKg: 2775, // masa en orden de marcha, lista oficial de precios McLouis 2026 (CZ)
    mmaKg: 3500, // ficha técnica oficial McLouis 2026
    carnetNecesario: "B", // mmaKg <= 3500
    cargaUtilKg: 725, // publicada por McLouis en su lista oficial de precios 2026 (CZ); varía con opcionales
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // ficha técnica oficial McLouis 2026
    plazasDormir: 4, // 2 de serie (basculante) + 2 opcionales en dinette
    parNm: null,
    traccion: "delantera", // Ford Transit, tracción delantera
    emisionesCo2: null,
    aprox: ["precioDesde"],
    notas:
      "Cotas, plazas, camas, frigorífico y depósitos de la ficha técnica oficial McLouis 2026 del Mc4 Slim 337 (6.390/2.150 mm, 258/204 cm de altura ext./int., 4 plazas, 2(+2) camas, basculante de 190x142 cm, cama de dinette opcional de 201x104(97) cm, frigorífico trivalente automático de 137 l, aguas 20/120/100 l —20 l en marcha—, 2 fogones). Motor Ford Transit 2.0 TDI EcoBlue de 130 CV según la página oficial del modelo (165 CV opcional). MMA 3.500 kg, masa en orden de marcha 2.775 kg y carga útil 725 kg de la lista oficial de precios McLouis 2026 (CZ); la carga útil varía con los opcionales. Precio: McLouis no publica tarifa oficial para España; el precio aplicado es el del Listino oficial McLouis Italia 2026 (64.750 €). Como referencia extranjera (no contractual): distribuidor francés desde 64.690 € (ypocamp.fr) y neerlandés desde 69.750 € (dicar.nl). Fotos: la galería oficial del modelo no incluye vista exterior; la imagen principal es una fotografía real de una unidad Mc4 Slim 337 de distribuidor (sin marca de agua ni rótulos), documentada como no oficial; interiores y plano de distribución son oficiales de mclouis.com. Precio: PVP de Italia del Listino oficial McLouis Italia 2026 (precios recomendados, IVA 22% incl., válido desde 01/09/2025), MC4 Slim 337 = 64.750 €; no hay tarifa oficial para España.",
    curiosidades:
      "McLouis respalda la construcción de sus autocaravanas con 10 años de garantía contra las infiltraciones, una de las más largas del segmento, condicionada al mantenimiento periódico en la red oficial. Fuente: página oficial del modelo Mc4 Slim 337 en mclouis.com (sección de garantía de la marca).",
    descripcion: `El McLouis Mc4 Slim 337 es la respuesta italiana a una pregunta muy española: ¿y si una perfilada de verdad cupiera por las calles de un pueblo? Con 6,39 metros de largo y solo 2,15 de ancho —veinte centímetros menos que una perfilada convencional—, el 337 es el miembro más urbano de la Serie 300 Slim, la familia con la que McLouis ha decidido que lo compacto no tiene por qué ser espartano. Sobre el Ford Transit 2.0 TDI EcoBlue de 130 CV, promete lo que su nombre anuncia: agilidad de furgoneta grande y vida a bordo de autocaravana de verdad.

    La clave del 337 está en su cama basculante doble de serie, de 190 x 142 cm, que desciende eléctricamente sobre el comedor y convierte el día en noche sin tocar un solo cojín. Debajo, el comedor maxi con asientos enfrentados acoge a cuatro comensales con holgura —cinco plazas de mesa según la ficha checa—, y la cocina, pensada para cocinar de verdad, combina dos fogones, fregadero redondo de acero y un frigorífico trivalente automático de 137 litros. Al fondo, el aseo maxi con armario ropero resuelve la higiene diaria con ducha de cortina plisada y claraboya de ventilación. Las dos plazas extra opcionales, en una cama convertible en la dinette de 201 x 104 cm, elevan la capacidad a cuatro durmientes cuando vienen los nietos o los amigos.

    En tecnología de a bordo, el Slim 337 viene sorprendentemente cargado para su precio: pantalla táctil de 12 pulgadas con el sistema SYNC 4 de Ford —con Apple CarPlay y Android Auto—, módem 5G, panel de control CP Plus, techo panorámico Skyview, claraboyas con mosquitera y oscurecedor, y un panel solar de 200 W con regulador MPPT que alarga la autonomía fuera de la red. El pack Serie 300 Slim agrupa lo esencial —climatizador automático de cabina, airbags, ESP, asientos giratorios, parachoques en color carrocería, puerta XL de doble cierre con centralizado— y deja como opcionales el motor de 165 CV, los faros «High Series» con luz de curva y la batería de litio. Todo envuelto en el diseño urbano de la serie: paredes Expedition Grey con gráficos antracita fuera, y dentro mobiliario crema brillo con veta horizontal antracita.

    Los números oficiales cuadran para el carnet B: 3.500 kg de MMA, 2.775 kg en orden de marcha y 725 kg de carga útil publicados por la marca en su lista de precios 2026. La altura exterior de 2,58 m —baja para una perfilada— ayuda en parkings y bajo puentes, y los 204 cm de altura interior permiten moverse erguido sin agacharse. Los depósitos (120 litros de limpias en parado, 20 en marcha por normativa de masas, 100 de grises) dan para varios días, y el garaje, con dos bocas de 170 x 68 y 120 x 68 cm, traga sillas, mesa y bicis plegables. El depósito de gasoil de 70 litros marca el ritmo de las etapas.

    Un detalle que dice mucho del enfoque Slim: con solo 2,15 metros de anchura, el 337 entra por calles y caminos donde una perfilada de 2,35 m ya va midiendo retrovisores, y aun así la altura interior de 204 cm y el comedor maxi evitan cualquier sensación de encierro. Es una autocaravana pensada para moverse, no para quedarse quieta: etapas cortas, pueblos con encanto, áreas de autocaravanas pequeñas y parkings donde las grandes ni lo intentan. La calefacción Truma de gas con aire pulsado y el aislamiento de la serie la hacen utilizable todo el año, y el escalón de entrada aislado con detector de movimiento LED es de esos detalles que se agradecen en las noches de invierno.

    En precio, McLouis no publica tarifa oficial para España, así que no damos cifra de partida: el precio se negocia con la red de distribuidores. Como orientación extranjera —no contractual—, en Francia se anuncia nuevo desde 64.690 € y en Países Bajos desde 69.750 €, en ambos casos antes de packs y con el motor de 165 CV en algunas unidades. Conviene pedir presupuesto cerrado con el pack Slim y comparar con y sin el salto a 165 CV.

    Cómo lo verificamos: cotas, alturas, plazas, camas, frigorífico, depósitos y chasis proceden de la ficha técnica oficial McLouis 2026 del Mc4 Slim 337, verificada el 19 de octubre de 2026, con la página oficial del modelo en mclouis.com como respaldo descriptivo. La MMA, la masa en orden de marcha y la carga útil proceden de la lista oficial de precios McLouis 2026 (CZ). La garantía de 10 años contra infiltraciones figura en la web oficial de la marca. Los precios francés y neerlandés son de anuncios de distribuidores y se citan solo como referencia extranjera. Consumo, par y emisiones no los publica el fabricante y quedan sin dato.

    Para quién es: el Mc4 Slim 337 encaja con parejas que quieren estrenarse en el caravaning —o reducir tamaño sin reducir confort— y valoran la maniobrabilidad por encima de todo: pueblos, calas, áreas pequeñas. La cama basculante lo hace ideal para quien no quiere plegar el salón cada noche. No es para familias de cinco (aquí mandan las cuatro plazas), ni para quien necesite un garaje gigante: el Slim prioriza la agilidad, y se nota.`,
    pros: [
      "Solo 2,15 m de ancho y 6,39 m de largo: la perfilada más ágil del segmento, apta para pueblos y áreas pequeñas.",
      "Cama basculante doble de serie (190 x 142 cm): 2 plazas nocturnas sin tocar el salón.",
      "SYNC 4 con pantalla de 12\", módem 5G, solar de 200 W y techo Skyview: tecnología de serie poco habitual en su precio.",
      "725 kg de carga útil publicados por la marca y 10 años de garantía antiinfiltraciones.",
      "MMA de 3.500 kg: carnet B y 2,58 m de altura exterior, contenida para una perfilada.",
    ],
    contras: [
      "Sin tarifa oficial para España: el precio final depende del distribuidor.",
      "La galería oficial no incluye foto exterior del modelo (documentado en notas).",
      "El motor de 130 CV es justo con el vehículo cargado; el 165 CV es opcional.",
      "Garaje de bocas contenidas: no es el modelo para llevar medio trastero.",
      "Depósito de gasoil de 70 l: autonomía de etapas más corta que en rivales con 90 l.",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/mclouis-mc4-slim-337-2026-precio-ficha-tecnica-oficial.webp", alt: "McLouis Mc4 Slim 337, vista exterior", ancho: 800, alto: 600 },
      { src: "/media/mclouis-mc4-slim-337-2026-precio-ficha-tecnica-interior1.webp", alt: "McLouis Mc4 Slim 337, comedor", ancho: 1536, alto: 1025 },
      { src: "/media/mclouis-mc4-slim-337-2026-precio-ficha-tecnica-interior2.webp", alt: "McLouis Mc4 Slim 337, cama basculante", ancho: 1536, alto: 1025 },
      { src: "/media/mclouis-mc4-slim-337-2026-precio-ficha-tecnica-detalle.webp", alt: "McLouis Mc4 Slim 337, plano de distribución oficial", ancho: 1024, alto: 376 },
    ],
    analisisSlug: "mclouis-mc4-slim-337-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Ford Transit: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Ford Transit)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 380 },
        { nombre: "Revisión célula McLouis (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
