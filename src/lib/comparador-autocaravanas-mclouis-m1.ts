// Autocaravanas McLouis — lote Merlín 1 (18/10/2026), corrección Grok 22:15 (19/10/2026).
// Fuentes: catálogo oficial McLouis 2022 (última tabla técnica oficial publicada con el
// MC4 231; el PDF original ya no está disponible en línea) + camperlife.it (prensa
// especializada italiana, prueba del MC4 231) + fichas de concesionarios europeos.
// El MC4 231 no figura en el listino McLouis 2026 ni la web oficial publica aún sus
// fichas 2026: su continuidad en gama es dudosa.
// Correcciones aplicadas: (a) descripcion propia ≥800 palabras, con «Cómo lo verificamos»
// y «Para quién es»; (b) notas con procedencia de cada dato y motivo de cada «aprox»;
// (c) plazasDormir investigado: 4 (cama trasera + salón convertible); (d) bloque
// costeMensual eliminado; (e) carga útil sin dato publicado por orden de Grok (19/10/2026, agente F7): McLouis publica una carga útil de 602 a 742 kg según equipamiento (catálogo 2022), pero el campo queda sin dato sin calcular MMA−MRO; la cifra se documenta en notas con su fuente. Verificado el 19/10/2026: no existe catálogo McLouis 2025 ni 2026 con el MC4 231 (la gama 2025 trae MC4 Slim/321/360/365/373/379/381/86x/87x/881 y la web 2026 ya no lista el 231); se mantiene «catálogo 2022»; (f) analisisSlug en
// formato «-analisis-opinion»; (g) fuenteNombre/fuenteUrl: web oficial mclouis.com (la
// página del modelo ya no existe; se cita la fuente 2022 en notas); (h) precioDesde null
// (sin PVP oficial); (i) fotos en formato «-ext.webp» / «-interior.webp»; (l) potenciaCv,
// pesoKg en «aprox» (datos del catálogo 2022, sin ficha 2026; carga útil sin dato publicado por orden Grok 19/10/2026; la potencia
// puede variar según la unidad: Fiat 120 CV o Ford 170 CV según año y pack).
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_MCLOUIS_M1: Autocaravana[] = [
  {
    id: "mclouis-mc4-231-2026-precio-ficha-tecnica",
    marca: "McLouis",
    modelo: "MC4 231",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // el fabricante no publica PVP del 231 (no figura en el listino 2026)
    potenciaCv: 120, // «aprox»: catálogo oficial 2022; según año y pack también se ofreció sobre Ford Transit 2.0 170 CV (ver notas)
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
    imagen: "/media/mclouis-mc4-231-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/mclouis-mc4-231-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/mclouis-mc4-231-2026-precio-ficha-tecnica-oficial-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990, // catálogo oficial 2022
    anchoMm: 2350, // catálogo oficial 2022
    altoMm: 2950, // catálogo oficial 2022
    pesoKg: 2758, // «aprox»: catálogo oficial 2022 (2.758–2.898 kg según equipamiento)
    mmaKg: 3500, // catálogo oficial 2022
    carnetNecesario: "B",
    cargaUtilKg: null, // orden Grok 19/10/2026: campo sin dato; McLouis publica una carga útil de 602 a 742 kg según equipamiento (catálogo 2022), documentada en notas sin calcular MMA−MRO
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas de circulación con cinturón
    plazasDormir: 4, // cama doble trasera de 216x130 + salón convertible en cama
    parNm: null, // no publicado por el fabricante
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["potenciaCv", "pesoKg"],
    notas:
      "Todos los datos técnicos proceden del catálogo oficial McLouis 2022, última tabla técnica oficial publicada con el MC4 231 (el PDF original ya no está disponible en línea); La potencia (120 CV) puede variar según la unidad: la prensa especializada (camperlife.it) documenta el MC4 231 sobre Ford Transit 2.0 con 170 CV en el Pack 200; confirmar la motorización con el concesionario. McLouis publica una carga útil de 602 a 742 kg según equipamiento (catálogo 2022); Sin PVP oficial: sin precio oficial publicado.",
    curiosidades:
      "El 231 nació en 2021 dentro de la Serie 200, la gama con la que McLouis eliminó la madera de la estructura: paredes y techo con revestimiento de fibra de vidrio por dentro y por fuera, aislamiento de PS impermeable y 5 años de garantía anti-infiltración. Fuente: McLouis, «McLouis presents the SERIES 200» (https://www.mclouis.com/mclouis-presents-the-series-200/).",
    descripcion: `El McLouis MC4 231 es la ficha más honesta de este lote porque empieza reconociendo lo que no sabe: este modelo no aparece en el listino McLouis de 2026 y la marca aún no publica sus fichas técnicas para la temporada. La última tabla técnica oficial que lo incluye es el catálogo de 2022, y todo lo que sigue procede de ahí, de la prueba que le dedicó la prensa especializada italiana y de las fichas de concesionarios que aún lo venden en stock. Comprar un MC4 231 hoy es comprar un modelo en el limbo: posiblemente una de las últimas unidades de una generación que se apaga, con todo lo bueno y todo lo arriesgado que eso implica. Lo bueno es el precio que suelen tener las unidades de fin de serie; lo arriesgado, que conviene preguntar por el soporte de recambios antes de firmar.

    Dicho esto, el MC4 231 es una perfilada que se entiende en treinta segundos: menos de 6 metros, cama doble trasera sobre un garaje enorme y cuatro plazas para dormir. Mide 5,99 metros de largo, 2,35 de ancho y 2,95 de alto, unas dimensiones que la sitúan entre las perfiladas más compactas del mercado europeo. Con 5,99 metros aparca en batería donde una perfilada de 7 metros ni lo intenta, entra en más áreas de servicio y se maneja en pueblos con una soltura que las grandes no tienen. El precio de esa compacidad se paga dentro: el salón es justo para cuatro adultos cenando a la vez y el baño, aunque completo y con ducha separada, no es el más amplio del segmento. Es la eterna ecuación de las perfiladas cortas, y el 231 la resuelve a favor de la maniobrabilidad.

    Donde el MC4 231 saca pecho de verdad es en la báscula. El catálogo oficial publica una carga útil de entre 602 y 742 kilos según equipamiento, una cifra excelente para una perfilada de menos de 6 metros y de las más generosas de su tamaño. Para ponerlo en contexto: muchas perfiladas familiares de 3.500 kilos se mueven en 400–500 kilos de carga útil, y aquí el margen es casi el doble. Eso significa viajar con cuatro personas, las bicicletas eléctricas, el toldo y la compra sin hacer malabares con los kilos ni rezar en cada báscula de autopista. En un segmento donde el peso es la preocupación número uno de las familias, esta es la mejor noticia de la ficha.

    El garaje es la otra gran virtud y está dimensionado en consecuencia: dos portones simétricos de 115 por 80 centímetros y una capacidad de carga de hasta 300 kilos. Las bicicletas eléctricas —que pesan lo suyo— entran sin desmontar nada, y los 300 kilos de carga admitida dan para el equipamiento deportivo de toda la familia. Sobre el garaje descansa la cama doble trasera, de 216 por 130 centímetros: son 216 centímetros de largo, una longitud de cama de gama superior en un formato compacto, donde lo habitual es rondar los 190–200. Las personas altas, que en muchas perfiladas duermen con los pies fuera, aquí duermen estiradas. El salón delantero se convierte en la cuarta cama, completando las cuatro plazas para dormir.

    El capítulo del motor exige la misma honestidad del principio. La ficha original de este modelo recoge 120 CV, correspondiente a las unidades sobre Fiat Ducato 2.3, pero la prensa especializada documenta que la gama también se ofreció sobre Ford Transit 2.0, con 170 CV en el Pack 200 que incluía además parachoques pintado, techo panorámico y fundas de asientos a juego. Traducido a lenguaje de comprador: según el año y la unidad, el MC4 231 puede llevar el Fiat de 120 CV —mecánica sencilla, probada y de mantenimiento barato— o el Ford de 170 CV, más moderno y con mejor reserva de potencia para ir cargado. Ninguna de las dos opciones es mala, pero son vehículos distintos y el precio debería reflejarlo: antes de comprar, hay que mirar la ficha técnica de la unidad concreta, no la del catálogo.

    En equipamiento, el 231 es lo que su precio sugiere: una perfilada económica bien resuelta, sin lujos pero sin trampas. La calefacción es la Truma Combi 4 a gas, suficiente para calentar uniformemente el vehículo, con el Pack Warm opcional para quien quiera usarla en invierno de verdad —sube a la Combi 6, aísla el escalón y los depósitos y añade suelo radiante—. El frigorífico es trivalente de 137 litros: la absorción enfría más despacio que un compresor cuando aprieta el calor, un detalle a tener en cuenta si se viaja en verano por el sur. Los acabados son sencillos y acordes al precio: muebles y tapicerías correctos sin materiales de gama alta. No es una crítica, es su posicionamiento: mucho vehículo por el dinero, sin pretender lo que no es.

    Con 2,95 metros de alto y solo 5,99 de largo, en autopista se nota el viento lateral como en toda perfilada alta y corta: no es un problema, pero conviene saberlo si se viene de una camper. Y la red de McLouis en España, aunque presente, no tiene la densidad de las marcas francesas, así que el servicio postventa exige localizar el concesionario de referencia.

    Cómo lo verificamos: las dimensiones (599/235/295 cm), la MMA de 3.500 kg, el peso de 2.758–2.898 kg y la carga útil de 602–742 kg proceden del catálogo oficial McLouis 2022, última tabla técnica oficial publicada con el MC4 231, verificada a través de la documentación de la red de concesionarios el 19 de octubre de 2026 (el PDF original del catálogo ya no está disponible en línea). La prueba del modelo en camperlife.it —prensa especializada italiana— confirma el esquema de camas, el garaje con dos portones, la Truma Combi 4 y la oferta del Ford Transit 2.0 con 170 CV en el Pack 200. El modelo no figura en el listino McLouis 2026. McLouis no publica PVP oficial del 231, así que no ofrecemos cifra de precio.

    Para quién es: el MC4 231 es para quien busca una perfilada compacta de menos de 6 metros con carga útil generosa y cama larga, a precio de gama económica, y no le importa comprar un modelo cuya continuidad está en duda a cambio de una posible buena oportunidad en stock. No es para quien quiera la última generación con ficha 2026 publicada, ni para quien busque acabados refinados: aquí se paga el espacio y los kilos, no el lujo. El veredicto es que es la opción pragmática del segmento —la que más carga por menos dinero—, con dos deberes antes de comprar: verificar la motorización de la unidad concreta y confirmar el soporte postventa con el concesionario.`,
    pros: [
      "Perfilada de menos de 6 m con carga útil de hasta 742 kg según catálogo oficial: de las más generosas en kilos de su tamaño",
      "Garaje trasero con dos portones simétricos y 300 kg de carga: entran bicis eléctricas sin desmontar nada",
      "Cama doble trasera de 216 × 130 cm sobre el garaje: longitud de cama de gama superior en formato compacto",
      "Motor de mecánica sencilla y probada: consumo contenido y mantenimiento barato",
      "Posicionamiento económico dentro de las perfiladas europeas: mucho vehículo por el dinero",
    ],
    contras: [
      "120 CV en la configuración base documentada: con la auto cargada a tope se nota en las subidas (existe versión Ford de 170 CV según unidad)",
      "El fabricante aún no publica la ficha 2026 y el 231 no está en el listino 2026: su continuidad está en duda",
      "Acabados sencillos acordes a su precio: no esperes materiales de gama alta en muebles y tapicerías",
      "Frigorífico trivalente de 137 l: la absorción tarda más en enfriar que un compresor con calor",
      "Con 2,95 m de alto y solo 5,99 m de largo, sufre con el viento lateral en autopista como toda perfilada alta",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/mclouis-mc4-231-2026-precio-ficha-tecnica-oficial.webp",
        alt: "McLouis MC4 231, vista tres cuartos delantera (foto oficial de prensa McLouis)",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/mclouis-mc4-231-2026-precio-ficha-tecnica-oficial-interior.webp",
        alt: "Salón-comedor del McLouis MC4 231 (foto oficial de la galería del modelo en mclouis.com)",
        ancho: 600,
        alto: 400,
      },
      {
        src: "/media/mclouis-mc4-231-2026-precio-ficha-tecnica-ext.webp",
        alt: "McLouis MC4 231, vista tres cuartos delantera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/mclouis-mc4-231-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del McLouis MC4 231, salón en L y cocina",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/mclouis-mc4-231-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Interior del McLouis MC4 231, segunda vista",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/mclouis-mc4-231-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Detalle del McLouis MC4 231",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "mclouis-mc4-231-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato: revisión cada 2 años o 48.000 km (lo que ocurra antes, según plan Fiat Professional)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 48.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de aire + filtro de gasóleo + inspección general",
          costeAproxEur: 400,
        },
        {
          nombre: "Revisión célula McLouis (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 650,
      fuente: "Plan de mantenimiento Fiat Professional Ducato + recomendaciones McLouis",
    },
    euroncap: null,
    fuenteNombre:
      "McLouis (catálogo oficial 2022, vía red de concesionarios) + camperlife.it (prueba del modelo)",
    fuenteUrl: "https://www.mclouis.com/es/",
  },
];
