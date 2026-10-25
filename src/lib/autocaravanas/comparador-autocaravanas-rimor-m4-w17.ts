// Autocaravanas Rimor — lote Merlín 4 (19/10/2026).
// Fuentes: rimor.it (web oficial, fichas de modelo Kilig 69 Plus y Kilig 66 Plus)
// + lista oficial de precios Rimor 2026-2027 (edición 08/2026, PVP Alemania con IVA,
// franco fábrica) + vanvango.es (distribuidor España) + annonces-caravaning.com
// (ficha de distribuidor francés del Kilig 66 Plus). Verificado el 19/10/2026.
// Notas honestas: «rimor-superbrig-69-plus» no existe en la gama 2026-2027 (Super Brig
// solo ofrece 677 TC, 687 TC, 695 TC y Suite, todos capuchina); se sustituye por el
// Rimor Kilig 69 Plus, el único «69 Plus» real de la marca. «rimor-koev-66» no existe
// en ninguna gama Rimor (no aparece en la lista oficial ni en rimor.it); se sustituye
// por el Rimor Kilig 66 Plus. Precios: Rimor no publica tarifa oficial para España;
// se usa el PVP oficial alemán como referencia orientativa (campo «aprox»).
// Carga útil: la marca no la publica (prohibido calcularla). Consumos, emisiones y
// volúmenes de depósitos: no publicados por el fabricante → null.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_RIMOR_M4: Autocaravana[] = [
  {
    id: "rimor-kilig-69-plus-2026-precio-ficha-tecnica",
    marca: "Rimor",
    modelo: "Kilig 69 Plus",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 57960, // lista oficial Rimor 2026-2027 (Alemania, IVA incl., franco fábrica); en España el distribuidor anuncia desde 63.586 €
    potenciaCv: 130, // Ford Transit 2.0 de 130 CV de serie (96 kW); 165 CV opcional con cambio automático
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
    imagen: "/media/rimor-kilig-69-plus-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/rimor-kilig-69-plus-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/rimor-kilig-69-plus-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7308, // rimor.it + lista oficial de precios 2026-2027
    anchoMm: 2340,
    altoMm: 2845,
    pesoKg: 2998, // MIFZ (masa en orden de marcha) según lista oficial 2026-2027
    mmaKg: 3500, // 3.550 y 4.100 kg opcionales
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil; prohibido calcularla
    consumo: null, // no publicado por el fabricante
    consumoUnidad: null,
    plazas: 5, // rimor.it indica «5 / 4»: quinta plaza opcional
    plazasDormir: 4, // 4 de serie; quinta plaza de pernocta opcional
    parNm: null,
    traccion: "delantera", // FWD declarado en la lista oficial de precios
    emisionesCo2: null,
    aprox: ["precioDesde"],
    notas:
      "Modelo asignado como «SuperBrig 69 Plus»: no existe en la gama Rimor 2026-2027; sustituido por el Kilig 69 Plus (único «69 Plus» real de la marca). Dimensiones, MMA, plazas y motor de rimor.it y de la lista oficial de precios 2026-2027 (ed. 08/2026). Precio: PVP oficial alemán con IVA, franco fábrica; en España el distribuidor Van Vango anuncia el modelo desde 63.586 €. Carga útil, consumos, emisiones y depósitos: no publicados por el fabricante.",
    curiosidades:
      "El Kilig 69 Plus monta de serie la calefacción Truma Combi C4 en versión diésel —la que toma el gasóleo directamente del depósito del Ford Transit—, una solución pensada para viajar todo el año sin depender de las botellas de gas. Fuente: distribuidor español Van Vango (https://vanvango.es/autocaravanas-rimor-en-venta).",
    descripcion: `La Rimor Kilig 69 Plus es la perfilada con cama central de la gama de acceso de Rimor para la temporada 2026-2027, y conviene aclarar desde el principio una confusión frecuente: no existe ninguna «SuperBrig 69 Plus». En la gama 2026-2027 la familia Super Brig queda reservada a las capuchinas (677 TC, 687 TC, 695 TC y Suite), mientras que el «69 Plus» real de la marca vive en la gama Kilig, la puerta de entrada al catálogo del fabricante italiano del grupo Trigano. Es una perfilada de 7,31 metros construida sobre el Ford Transit de vía ensanchada, con una distribución que gira en torno a una cama central trasera, el formato que más parejas demandan hoy en Europa porque permite levantarse por cualquiera de los dos lados sin molestar a quien duerme al lado.

En medidas, la ficha oficial de rimor.it declara 7.308 mm de largo, 2.340 mm de ancho exterior (2.200 mm interior) y 2.845 mm de alto exterior con 2.060 mm de altura interior útil, unas cotas generosas para una perfilada que se traducen en pasillos despejados y un salón delantero amplio. La masa máxima autorizada es de 3.500 kg en la configuración base —conducible por tanto con el carnet B—, con la posibilidad de homologarla a 3.550 o 4.100 kg si se necesita más margen de carga; la masa en orden de marcha declarada en la lista oficial es de 2.998 kg. Rimor homologa cinco plazas de viaje (la quinta como opción, según el «5/4» de su ficha) y cuatro plazas para dormir de serie, con una quinta cama opcional: la cama central trasera más la cama basculante eléctrica sobre el salón, que en esta generación viene incluida según la lista de precios.

La habitabilidad es el argumento central del 69 Plus. La cama central trasera deja dos pasillos laterales que facilitan el acceso al baño y a los armarios roperos, y bajo ella se abre un garaje trasero de 750 x 850 mm, una boca de carga notable para una perfilada de este precio, apta para bicicletas plegables, sillas de camping voluminosas o el equipo de esquí. El salón delantero, con asientos de cabina giratorios, acoge con holgura a cuatro comensales, y la cocina en L equipa lo esencial para cocinar en ruta. El baño, según la documentación de la gama, recibió un rediseño específico en la versión 69 Plus, con ducha separada, un detalle que no todas las perfiladas de acceso ofrecen.

En tecnología y equipamiento, la temporada 2026-2027 trae a la gama el sistema MEB-300 Smart Energy, que permite controlar luces y funciones eléctricas del habitáculo desde el móvil, además de frigorífico de compresor de serie en lugar del tradicional trivalente de absorción: enfría mejor con calor exterior y no exige nivelar el vehículo. La calefacción corre a cargo de una Truma Combi —en las unidades españolas que anuncia el distribuidor Van Vango se monta la Combi C4 diésel, que se alimenta del propio depósito del Transit y libera al viajero de la logística de las botellas de gas en invierno—. El equipamiento de la versión Plus incluye cama basculante eléctrica, claraboyas panorámicas y la preinstalación multimedia, con paquetes opcionales como el Camper Premium Pack (faros High Series, paragolpes en color carrocería) y el Dat Pack 6P con asistentes de conducción (frenada de emergencia, mantenimiento de carril, reconocimiento de señales).

En el apartado de camas y plazas, el esquema es el clásico de las perfiladas familiares de dos ambientes: la cama central trasera queda siempre hecha y lista, la cama basculante eléctrica desciende sobre el salón en segundos para dos ocupantes más, y con la quinta cama opcional el conjunto puede acoger hasta cinco personas. Es una distribución pensada para parejas que viajan con hijos o nietos de forma ocasional: en modo pareja, el salón queda libre y la cama central hace la vida a bordo tan cómoda como en casa.

Mecánicamente, la base es el Ford Transit 2.0 turbodiésel de 130 CV con tracción delantera y cambio manual, una mecánica probada y con una red de servicio inmensa en España. Quien quiera más brío o piense en remolcar puede optar al 2.0 de 165 CV asociado al cambio automático, la combinación que anuncian los distribuidores españoles y que eleva el precio pero transforma el confort en autopista. El chasis es la versión camper específica de vía ensanchada, con 3.954 mm de batalla, lo que aporta estabilidad en curva y aplomo con viento lateral, el punto débil tradicional de las carrocerías altas.

En precio y red comercial en España, Rimor no publica una tarifa oficial española, así que la referencia sólida es la lista oficial alemana de agosto de 2026: 57.960 euros con IVA incluido, franco fábrica, para el 69 Plus con el 130 CV manual. En España, el distribuidor Van Vango anuncia el modelo desde 63.586 euros, ya con el 165 CV automático y un nivel de equipamiento concreto; la diferencia se explica por el motor superior, el cambio automático, el transporte y la preparación del concesionario. Rimor se vende en España a través de la red de distribuidores del grupo Trigano, con presencia en las principales provincias, y ofrece la garantía legal de dos años más la garantía de estanqueidad de la célula según condiciones de la marca.

Cómo lo verificamos: las dimensiones (7.308 x 2.340 x 2.845 mm), la MMA (3.500/3.550/4.100 kg), las plazas (5/4 de viaje, 4+1 de pernocta), la cama central y el garaje de 750 x 850 mm proceden de la ficha oficial del modelo en rimor.it, consultada el 19/10/2026; el precio de 57.960 €, la masa en orden de marcha de 2.998 kg, el motor Ford Transit 130 CV de tracción delantera y la cama basculante eléctrica de serie proceden de la lista oficial de precios Rimor 2026-2027 (edición 08/2026); los datos de la versión española (165 CV automático, Combi C4 diésel, precio desde 63.586 €) proceden del distribuidor Van Vango. La carga útil, los consumos y las emisiones no los publica el fabricante y quedan sin dato, como exige el criterio de datos reales.

Para quién es: la Kilig 69 Plus encaja con parejas viajeras que quieren cama central y garaje serio sin subir al presupuesto de una gama media-alta, y con familias que necesitan cuatro o cinco plazas reales en una perfilada ágil de 7,3 metros. No es para quien busque una capuchina barata con seis camas (ese papel lo cubre la Super Brig), ni para quien priorice el lujo interior: los materiales de la Kilig son honestos y funcionales, no premium. Y si el carnet B con 3.500 kg se queda justo de carga con cinco ocupantes y equipaje completo, conviene valorar la homologación a 4.100 kg, que eso sí exige el C1.`,
    pros: [
      "Cama central trasera siempre hecha con dos pasillos laterales: el formato más cómodo para parejas en 7,31 m",
      "Garaje trasero de 750 x 850 mm: boca de carga grande para una perfilada de su precio",
      "PVP oficial publicado de 57.960 €: transparencia de fábrica poco común en el segmento de acceso",
      "Cama basculante eléctrica incluida según la lista oficial: cuatro camas sin transformar el salón cada noche",
      "Base Ford Transit 130 CV con opción de 165 CV automático: mecánica probada y red de talleres enorme en España",
    ],
    contras: [
      "No existe como «SuperBrig»: quien busque ese nombre acabará en la Kilig, con acabados más sencillos que la Super Brig",
      "Masa en orden de marcha de 2.998 kg: con cinco ocupantes y equipaje, los 3.500 kg del carnet B quedan justos",
      "El 165 CV con cambio automático encarece notablemente la factura: el precio de acceso es con el 130 CV manual",
      "Carga útil, consumos y depósitos sin publicar: imposible comparar con rigor frente a rivales que sí los declaran",
      "Perfilada de 2,85 m de alto y 2,34 m de ancho: ágil para su tamaño, pero no es un vehículo para callejear por pueblos",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/rimor-kilig-69-plus-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Rimor Kilig 69 Plus, vista exterior de la perfilada",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/rimor-kilig-69-plus-2026-precio-ficha-tecnica-interior1.webp",
        alt: "Rimor Kilig 69 Plus, interior del salón",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/rimor-kilig-69-plus-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Rimor Kilig 69 Plus, cama central trasera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/rimor-kilig-69-plus-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Rimor Kilig 69 Plus, detalle del habitáculo",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "rimor-kilig-69-plus-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Base Ford Transit: revisión cada 2 años o 60.000 km (lo que ocurra antes, según plan Ford)",
      revisiones: [
        {
          nombre: "Revisión Ford Transit (2 años / 60.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de aire + filtro de gasóleo + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Rimor (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
    },
  },
  {
    id: "rimor-kilig-66-plus-2026-precio-ficha-tecnica",
    marca: "Rimor",
    modelo: "Kilig 66 Plus",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 58300, // lista oficial Rimor 2026-2027 (Alemania, IVA incl., franco fábrica)
    potenciaCv: 130, // Ford Transit 2.0 de 130 CV de serie (96 kW); 165 CV opcional con cambio automático
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
    imagen: "/media/rimor-kilig-66-plus-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/rimor-kilig-66-plus-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/rimor-kilig-66-plus-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7338, // rimor.it + lista oficial de precios 2026-2027
    anchoMm: 2340,
    altoMm: 2845,
    pesoKg: 3017, // MIFZ según lista oficial 2026-2027
    mmaKg: 3500, // 3.550 y 4.100 kg opcionales
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no la publica; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4,
    parNm: null,
    traccion: "delantera", // FWD declarado en la lista oficial de precios
    emisionesCo2: null,
    aprox: ["precioDesde"],
    notas:
      "Modelo asignado como «Koev 66»: no existe ninguna gama ni modelo «Koev» en Rimor (verificado en rimor.it y en la lista oficial de precios 2026-2027); sustituido por el Kilig 66 Plus, perfilada real de la marca con cama central. Dimensiones, MMA, plazas y motor de rimor.it y de la lista oficial de precios 2026-2027 (ed. 08/2026). Equipamiento de la unidad francesa (cama central regulable en altura, cama basculante opcional, Truma Combi 4, placa solar, batería AGM 95 Ah) según distribuidor Mobilcar/annonces-caravaning.com. Precio: PVP oficial alemán con IVA, franco fábrica; Rimor no publica tarifa oficial para España.",
    curiosidades:
      "La cama central del Kilig 66 Plus es regulable en altura: se eleva para ganar volumen de garaje bajo ella o se baja para facilitar el acceso al colchón. Además admite como opción una cama basculante sobre el salón. Fuente: ficha del distribuidor francés Mobilcar (https://www.annonces-caravaning.com/annonce-camping-car/rimor-kilig-66-plus/385027.html).",
    descripcion: `La Rimor Kilig 66 Plus es la hermana mayor de la Kilig 69 Plus dentro de la gama de acceso de Rimor para 2026-2027: tres centímetros más larga (7.338 mm frente a 7.308 mm), mismo ancho de 2,34 metros, misma altura de 2,845 metros y la misma filosofía de perfilada familiar con cama central trasera sobre base Ford Transit. La asignación original mencionaba un «Rimor Koev 66» que no existe —no hay ninguna gama ni modelo «Koev» en el catálogo de Rimor, ni en su web oficial ni en su lista de precios—, así que este 66 Plus es su sustituto natural: mismo número, misma marca, modelo real y verificable con datos oficiales completos.

En medidas y habitabilidad, la ficha oficial de rimor.it declara 7.338 mm de largo, 2.340 mm de ancho exterior (2.200 mm interior) y 2.845 mm de alto exterior con 2.060 mm de altura interior, cotas que la sitúan entre las perfiladas más espaciosas de su precio. La masa máxima es de 3.500 kg de serie —carnet B—, ampliable a 3.550 o 4.100 kg, con una masa en orden de marcha de 3.017 kg según la lista oficial. Homologa cuatro plazas de viaje y cuatro para dormir, sin quinta cama opcional en la ficha: es una cuatro plazas pura, pensada para dos parejas o para una familia de cuatro que quiera camas siempre hechas.

La distribución gira en torno a la cama central trasera, el formato estrella del segmento. La particularidad del 66 Plus, documentada en la ficha del distribuidor francés, es que esa cama es regulable en altura: se puede elevar para ganar un garaje más capaz bajo el somier o bajarla para que subir al colchón no requiera esfuerzo, un detalle práctico que no todas las camas centrales ofrecen. Bajo la cama se abre el garaje trasero de 750 x 850 mm de serie, ampliable a 1.150 x 850 mm en opción, una boca de carga que admite bicicletas y equipamiento voluminoso sin desmontar nada. El salón delantero con asientos giratorios de cabina y la cocina en L completan un habitáculo de dos ambientes bien separados: zona de día delante, zona de noche detrás, con el baño en posición central.

En tecnología y equipamiento, el 66 Plus comparte la dotación 2026-2027 de la gama: sistema MEB-300 Smart Energy con control desde el smartphone, frigorífico de compresor de serie, cama basculante eléctrica sobre el salón incluida según la lista de precios y la estética interior renovada con maderas oscuras e iluminación LED indirecta. La unidad francesa documentada añade una fotografía interesante del equipamiento real con el que se entrega: placa solar de 140 W, batería AGM de 95 Ah, calefacción Truma Combi 4, chasis de vía ensanchada, llantas de 16 pulgadas, ESP, doble airbag, climatización automática de cabina y puerta de célula con ventana y mosquitera de una pieza. Son los extras que convierten una perfilada de acceso en un vehículo listo para salir de viaje sin pasar por el taller del concesionario.

En camas y plazas, el esquema es de cuatro camas fijas: la central trasera regulable en altura y la basculante eléctrica sobre el salón, ambas siempre disponibles sin transformar el comedor. Es la configuración ideal para quienes viajan en pareja y reciben visitas ocasionales, o para familias de cuatro que no quieren montar y desmontar camas cada noche. La ausencia de quinta plaza la hace menos versátil que su hermana 69 Plus para grupos de cinco, pero a cambio el interior respira con más desahogo para cuatro.

Mecánicamente no hay sorpresas: Ford Transit 2.0 turbodiésel de 130 CV, tracción delantera, cambio manual y chasis camper de vía ensanchada con 3.954 mm de batalla. La lista oficial contempla el salto al 2.0 de 165 CV con cambio automático para quien arrastre remolque o haga mucha autopista de montaña, con un sobreprecio publicado en la tarifa de opciones del chasis. Es la misma base que mueve a media Europa camperizada, con recambios y servicio en cualquier provincia española.

En precio y red comercial en España, la referencia oficial es la lista alemana de agosto de 2026: 58.300 euros con IVA, franco fábrica, apenas 340 euros por encima del 69 Plus, lo que deja la elección entre ambos en una cuestión de distribución y de esos tres centímetros extra, no de presupuesto. Rimor no publica tarifa española; el precio final en nuestro país lo fija cada distribuidor de la red Trigano según motor, cambio y paquetes elegidos. La garantía es la legal europea de dos años más la de estanqueidad de la célula en las condiciones de la marca.

Cómo lo verificamos: dimensiones (7.338 x 2.340 x 2.845 mm), plazas (4/4), cama central y garaje (750 x 850 mm, 1.150 x 850 mm en opción) de la ficha oficial en rimor.it, consultada el 19/10/2026; precio de 58.300 €, masa en orden de marcha de 3.017 kg, motor Ford Transit 130 CV de tracción delantera y cama basculante eléctrica incluida, de la lista oficial de precios Rimor 2026-2027 (edición 08/2026); el detalle de la cama central regulable en altura y el equipamiento de la unidad (placa solar 140 W, AGM 95 Ah, Truma Combi 4) de la ficha del distribuidor francés Mobilcar. Carga útil, consumos, emisiones y depósitos: no publicados por el fabricante → null.

Para quién es: el Kilig 66 Plus encaja con parejas que quieren la cama central más cómoda posible —la regulable en altura marca la diferencia con la espalda— y con familias de cuatro que priorizan camas siempre hechas sobre plazas extra. No es para grupos de cinco (para eso está el 69 Plus con su quinta cama opcional) ni para quien busque acabados premium: la Kilig es honesta y funcional, y lo dice su precio. Y si la carga con cuatro ocupantes, agua llena y equipaje roza los 3.500 kg, la homologación opcional a 4.100 kg existe, pero pide el carnet C1.`,
    pros: [
      "Cama central regulable en altura: se adapta al acceso al colchón o al volumen del garaje según necesidad",
      "Garaje ampliable a 1.150 x 850 mm en opción: de los más capaces entre las perfiladas de acceso",
      "PVP oficial de 58.300 € publicado: solo 340 € más que el 69 Plus, con 3 cm extra y la misma dotación",
      "Cuatro camas fijas sin transformar el salón: central trasera más basculante eléctrica incluida",
      "Equipamiento real documentado (solar 140 W, AGM 95 Ah, Truma Combi 4): sale del concesionario lista para viajar",
    ],
    contras: [
      "Solo cuatro plazas de pernocta: sin quinta cama opcional, menos versátil que el 69 Plus para grupos",
      "Masa en orden de marcha de 3.017 kg: el margen hasta los 3.500 kg del carnet B se estrecha con equipaje completo",
      "El 165 CV automático es opcional con sobreprecio: la versión de acceso monta el 130 CV manual",
      "Sin datos oficiales de consumos, emisiones ni depósitos: comparación a ciegas frente a rivales transparentes",
      "Acabados de gama de acceso: funcionales y correctos, pero sin el tacto premium de gamas superiores",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/rimor-kilig-66-plus-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Rimor Kilig 66 Plus, vista exterior de la perfilada",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/rimor-kilig-66-plus-2026-precio-ficha-tecnica-interior1.webp",
        alt: "Rimor Kilig 66 Plus, interior del salón",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/rimor-kilig-66-plus-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Rimor Kilig 66 Plus, cama central trasera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/rimor-kilig-66-plus-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Rimor Kilig 66 Plus, cama central trasera regulable en altura",
        ancho: 1920,
        alto: 1281,
      },
    ],
    analisisSlug: "rimor-kilig-66-plus-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Base Ford Transit: revisión cada 2 años o 60.000 km (lo que ocurra antes, según plan Ford)",
      revisiones: [
        {
          nombre: "Revisión Ford Transit (2 años / 60.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de aire + filtro de gasóleo + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Rimor (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
    },
  },
];
