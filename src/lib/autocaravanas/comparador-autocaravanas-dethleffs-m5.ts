// Autocaravanas Dethleffs — lote Merlín 5 (19/10/2026).
// Fuentes: página oficial del modelo en dethleffs.com
// (https://www.dethleffs.com/motorhomes/globebus-performance-4x4/t-46: 163 CV,
// cambio automático de 8 velocidades, 685/220/288 cm, camas de 202x80/192x75,
// precio 105.999 € en el JSON-LD oficial),
// página oficial en español dethleffs.es
// (https://dethleffs.es/autocaravanas/globebus-performance-4x4: MTMA de 3.500 kg
// disponible, GERMAN DESIGN AWARD 2026, datos de tracción y equipamiento),
// nota de prensa oficial «Globebus Performance 4x4 – The first all-wheel drive
// motorhome from Dethleffs» (https://www.dethleffs.com/motorhomes/globebus-performance),
// exposés de concesionario (TruckScout24) para las homologaciones de 3.880/4.500 kg
// y Travelworld (distribuidor oficial Dethleffs en Reino Unido) para plazas de viaje.
// Verificado el 19/10/2026.
// Notas honestas: el precio oficial (105.999 €) es el publicado por Dethleffs en su
// web internacional. La MTMA: Dethleffs anuncia en dethleffs.es la disponibilidad con
// MTMA de 3.500 kg (carnet B); existen homologaciones de 3.880 y 4.500 kg según
// versión y equipamiento (exposés de concesionario), que exigirían carnet C1.
// La masa en orden de marcha y la carga útil no las publica Dethleffs como cifras
// únicas en la web del modelo (cargaUtilKg = null; prohibido calcularla).
// Consumo, autonomía, par motor y emisiones: no publicados.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_DETHLEFFS_M5: Autocaravana[] = [
  {
    id: "dethleffs-globebus-performance-4x4-t-46-2026-precio-ficha-tecnica",
    marca: "Dethleffs",
    modelo: "Globebus Performance 4x4 T 46",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 105999, // PVP oficial publicado por Dethleffs en dethleffs.com (JSON-LD del modelo)
    potenciaCv: 163, // VW Crafter 2.0 TDI de 120 kW, datos oficiales dethleffs.com
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro 6 sobre VW Crafter
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/dethleffs-globebus-performance-4x4-t-46-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/dethleffs-globebus-performance-4x4-t-46-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/dethleffs-globebus-performance-4x4-t-46-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6850, // datos oficiales dethleffs.com
    anchoMm: 2200, // datos oficiales dethleffs.com
    altoMm: 2880, // datos oficiales dethleffs.com
    pesoKg: null, // Dethleffs no publica la masa en orden de marcha en la web del modelo
    mmaKg: 3500, // dethleffs.es: «ahora también disponible con una MTMA de 3.500 kg»; existen homologaciones de 3.880/4.500 kg según versión
    carnetNecesario: "B", // MTMA de 3.500 kg disponible según dethleffs.es (las versiones de 3.880/4.500 kg exigirían C1)
    cargaUtilKg: null, // Dethleffs no publica una cifra de carga útil; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 2-4 plazas de viaje según distribuidor oficial Dethleffs en Reino Unido (Travelworld)
    plazasDormir: 2, // 2 camas gemelas; convertibles en cama doble para 2 adultos y un niño
    parNm: null,
    traccion: "total", // 4Motion: tracción total con bloqueo del diferencial, datos oficiales
    emisionesCo2: null,
    aprox: [],
    notas:
      "Datos técnicos oficiales de dethleffs.com/dethleffs.es para el Globebus Performance 4x4 T 46 (685/220/288 cm, altura interior 190 cm, batalla 3.640 mm, VW Crafter 2.0 TDI de 163 CV/120 kW con cambio automático de 8 velocidades, tracción total 4Motion con bloqueo del diferencial, eje delantero reforzado de 2,1 t, suspensión neumática en el eje trasero de serie en el T 46, ángulos de ataque 18°/salida 12°/ventral 19°, puerta del habitáculo de 70 cm, garaje con portón de 700x1.100 mm, camas gemelas de 202x80 y 192x75 convertibles en cama doble, frigorífico de compresor de 83 l de serie —131 l opcional con congelador de 15 l—, calefacción diésel de aire caliente de 6 kW con caldera de agua caliente y kit de altura, batería de litio de 150 Ah con booster de 45 A, toldo de 4,0 m con LED, router 5G opcional, TV Smart de 32\" opcional, masa remolcable de 2.500 kg). Precio: 105.999 € publicados oficialmente por Dethleffs en su web internacional. MTMA: Dethleffs anuncia la disponibilidad con 3.500 kg (carnet B); los exposés de concesionario documentan homologaciones de 3.880 y 4.500 kg según equipamiento, que exigirían carnet C1. Carga útil, consumo, autonomía, par motor y emisiones: no publicados por el fabricante;",
    curiosidades:
      "El Globebus Performance 4x4 es la primera autocaravana con tracción total de la historia de Dethleffs —una marca que fabrica casas rodantes desde 1931— y llegó pisando fuerte: la propia Dethleffs anuncia en su web oficial española que ha ganado el prestigioso GERMAN DESIGN AWARD 2026, un premio de diseño que casi nunca cae en manos de un vehículo de 6,85 metros pensado para salir del asfalto. Fuente: nota de prensa oficial «Globebus Performance 4x4 – The first all-wheel drive motorhome from Dethleffs» (https://www.dethleffs.com/motorhomes/globebus-performance) y https://dethleffs.es/autocaravanas/globebus-performance-4x4 («ha sido galardonada con el prestigioso premio GERMAN DESIGN AWARD 2026»).",
    descripcion: `El Dethleffs Globebus Performance 4x4 T 46 es la respuesta alemana a una pregunta que casi nadie se había atrevido a hacer en serio: ¿y si una autocaravana de verdad pudiera salir del asfalto sin dramas? Dethleffs, que lleva fabricando casas rodantes desde 1931, ha convertido su compacta Globebus en la primera 4x4 de su historia sobre la base del Volkswagen Crafter, con tracción total 4Motion, bloqueo del diferencial, suspensión neumática en el eje trasero, eje delantero reforzado de 2,1 toneladas y una altura libre al suelo elevada. Con 6.850 mm de longitud y solo 2.200 mm de anchura, es más estrecha que la mayoría de sus rivales, y esa es precisamente su baza: por donde pasa una furgoneta grande, pasa ella, pero con la célula completa de una autocaravana de verdad.

    En medidas y distribución, el T 46 es el layout largo de la gama Performance —el T 16, más corto, apuesta por cama francesa—, y su esquema es el que mejor funciona para dos: salón delantero con mesa extensible junto a la cabina del Crafter, cocina central compacta pero completa, baño con pared basculante que se convierte en ducha cerrada revestida de PVC, y dormitorio trasero con dos camas gemelas de 202 x 80 y 192 x 75 cm sobre somieres de láminas de madera con colchones de espuma fría de 15 cm y 7 zonas. Las dos camas se transforman en segundos en una gran superficie de descanso a todo lo ancho del vehículo, donde caben dos adultos y un niño sin apreturas. La altura interior de 190 cm es suficiente para la mayoría, y la puerta del habitáculo de 70 cm con entrada tipo coupé facilita la vida diaria más de lo que sugiere la ficha.

    La parte ciclo es donde el T 46 se desmarca de todo lo demás. El chasis 4x4 incluye de serie en esta versión la suspensión neumática del eje trasero —regulable en presión y altura según la carga o el terreno—, el bloqueo del diferencial, la elevación del chasis y unos ángulos de ataque de 18°, salida de 12° y ventral de 19° que, sin convertirla en un todoterreno extremo, le permiten afrontar pistas forestales, prados húmedos y accesos a playas donde una autocaravana convencional se quedaría clavada o, peor, rompería algo caro. La masa remolcable de 2.500 kg deja además margen para llevar un remolque con las motos, las bicis eléctricas o la zodiac. Es, en definitiva, la autocaravana para quien mira el mapa y se pregunta qué habrá más allá de donde termina la carretera.

    En tecnología y equipamiento, Dethleffs no ha escatimado en la parte de «performance» del nombre. La cabina del Crafter aporta una experiencia de conducción casi turismal: asistente de mantenimiento de carril, control de crucero, asistente de arranque y descenso en pendiente, freno de estacionamiento electrónico, climatizador AirCare Climatronic y la radio Composition con pantalla de 10 pulgadas —con el DiscoverPro de 12 pulgadas y navegación como opción—. La célula suma la unidad de control SCU lite con la app Dethleffs Connect para gestionar luz, calefacción y frigorífico desde el móvil, la calefacción diésel de aire caliente de 6 kW con caldera de agua caliente y kit de altura (imprescindible si se sube a puertos de montaña), la batería de litio de 150 Ah con booster de 45 A, el frigorífico de compresor —83 litros de serie, 131 litros opcional— y detalles prácticos como el toldo de 4 metros con LED integrado, el router 5G con antena de techo o el filtro de agua Grünbeck opcional. Todo pensado para la autonomía lejos de los campings.

    En mecánica, el 2.0 TDI de 163 CV (120 kW) con el cambio automático de 8 velocidades de serie es una combinación redonda para este concepto: entrega suficiente para mover el conjunto con soltura, el automático evita el sufrimiento del embrague en las maniobras camperas y el consumo —que Dethleffs no publica— debería mantenerse en cifras razonables gracias a la anchura contenida de 2,20 metros. La tracción total 4Motion reparte el par según el agarre y el bloqueo del diferencial saca las castañas del fuego cuando una rueda patina en barro o nieve. No es un Land Cruiser: es una autocaravana con capacidades reales fuera del asfalto, que es exactamente lo que promete su nombre sin pasarse de frenada.

    En precio y red comercial en España, el PVP oficial publicado por Dethleffs en su web internacional es de 105.999 euros, una cifra contenida para lo que ofrece —una 4x4 de verdad con este equipamiento no tiene rival directo en su rango—. Dethleffs anuncia en su web española la disponibilidad con MTMA de 3.500 kg, lo que la deja al alcance del carnet B, aunque conviene confirmar la homologación de la unidad concreta: los exposés de concesionario documentan versiones de 3.880 y 4.500 kg según equipamiento, que exigirían el carnet C1. Dethleffs cuenta con red oficial en España para la venta y el servicio, y el modelo, como novedad 2026, está en plena rampa comercial: pedir oferta cerrada con el equipamiento deseado es el movimiento sensato.

    Cómo lo verificamos: todas las cotas, pesos, capacidades, camas y el equipamiento citado proceden de las páginas oficiales del modelo en dethleffs.com y dethleffs.es, verificadas el 19 de octubre de 2026. El precio de 105.999 € es el publicado oficialmente por Dethleffs en el JSON-LD de su web internacional. La primicia de la tracción total procede de la nota de prensa oficial de Dethleffs, y el German Design Award 2026 de la propia web oficial española de la marca. Las homologaciones de 3.880/4.500 kg proceden de exposés de concesionario (TruckScout24) y las plazas de viaje del distribuidor oficial Dethleffs en Reino Unido (Travelworld). Los datos no publicados por el fabricante (masa en orden de marcha, carga útil como cifra única, consumo, par motor, emisiones) quedan sin dato y se declaran como tales.

    Para quién es: el Globebus Performance 4x4 T 46 encaja con la pareja aventurera que quiere una autocaravana de verdad —no una furgoneta camperizada— capaz de salir del asfalto: pistas, nieve, prados embarrados y esos rincones donde no llega nadie. Es ideal para quien viaja todo el año, para quien remolca juguetes (2.500 kg de capacidad) y para quien valora la estrechez de 2,20 m para moverse por carreteras secundarias. No es para quien busque el máximo espacio interior por euro (una perfilada convencional de 7 metros ofrece más salón por menos dinero), para quien necesite cuatro plazas nocturnas fijas, ni para quien solo pise autopistas y campings de asfalto: la tracción total y la suspensión neumática se pagan, y solo compensan si se usan.`,
    pros: [
      "Primera 4x4 de Dethleffs: tracción total 4Motion, bloqueo del diferencial y suspensión neumática trasera de serie.",
      "German Design Award 2026: diseño premiado oficialmente por la propia marca.",
      "Solo 2,20 m de anchura y 6,85 m de longitud: agilidad de furgoneta grande con célula completa.",
      "Calefacción diésel de 6 kW con kit de altura, batería de litio de 150 Ah y depósito de grises aislado: apta para invierno real.",
      "Masa remolcable de 2.500 kg y garaje de doble portón: lista para llevar juguetes.",
    ],
    contras: [
      "Solo 2 plazas nocturnas fijas: no es una familiar.",
      "La MTMA de 3.500 kg hay que confirmarla por unidad: las versiones de 3.880/4.500 kg exigen carnet C1.",
      "Altura interior de 190 cm: justa para los más altos.",
      "Precio de 105.999 € oficial: la tracción total y el equipamiento se pagan.",
      "Red de servicio 4x4 camperizada más limitada que la de una Fiat Ducato convencional.",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/dethleffs-globebus-performance-4x4-t-46-2026-precio-ficha-tecnica-oficial.webp", alt: "Dethleffs Globebus Performance 4x4 T 46, vista exterior trasera", ancho: 1200, alto: 800 },
      { src: "/media/dethleffs-globebus-performance-4x4-t-46-2026-precio-ficha-tecnica-interior1.webp", alt: "Dethleffs Globebus Performance 4x4 T 46, salón", ancho: 1620, alto: 1080 },
      { src: "/media/dethleffs-globebus-performance-4x4-t-46-2026-precio-ficha-tecnica-interior2.webp", alt: "Dethleffs Globebus Performance 4x4 T 46, cocina", ancho: 720, alto: 1080 },
      { src: "/media/dethleffs-globebus-performance-4x4-t-46-2026-precio-ficha-tecnica-detalle.webp", alt: "Dethleffs Globebus Performance 4x4 T 46, baño", ancho: 720, alto: 1080 },
    ],
    analisisSlug: "dethleffs-globebus-performance-4x4-t-46-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base VW Crafter: revisión según plan del fabricante (aceite y filtros)",
      revisiones: [
        { nombre: "Revisión base (VW Crafter 2.0 TDI)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 380 },
        { nombre: "Revisión célula Dethleffs (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 260 },
      ],
    },
  },
];
