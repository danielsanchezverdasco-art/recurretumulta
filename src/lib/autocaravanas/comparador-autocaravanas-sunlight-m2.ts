// Autocaravanas Sunlight — lote Merlín 2 (19/10/2026).
// Datos de la gama 2026 (tarifas y equipamientos publicados en Alemania):
// T 67 Adventure Edition: 7,37 m, camas gemelas traseras + cama abatible,
// Fiat Ducato 2.2 Multijet 140 CV; tarifa de fabricante en Alemania desde
// 75.015 € (anuncio de Freizeitcenter Adolph, modelo 2026). Cliff 602
// Adventure Edition: camper de 5,99 m con camas gemelas y baño Vario, Fiat
// Ducato 2.2 Multijet 140 CV; tarifa de fabricante en Alemania desde
// 61.848,62 € (anuncio de unidad nueva modelo 2026). Sunlight España no
// publica PVP: precio final lo fija cada concesionario. Fotos: 4 webp por
// ficha, modelo exacto verificado visualmente (T 67: exterior de flota de
// alquiler baewo.de y goboony.it; interiores de un T 67 anunciado en
// Finlandia; Cliff 602: exteriores de un 602 RT anunciado en Reino Unido e
// interiores de unidades 602 anunciadas en Alemania). noindex lo gestiona
// Grok al integrar.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_SUNLIGHT_M2: Autocaravana[] = [
  {
    id: "sunlight-t-67-2026-precio-ficha-tecnica",
    marca: "Sunlight",
    modelo: "T 67",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 75015, // tarifa de fabricante en Alemania (desde 75.015 €, unidad nueva modelo 2026); Sunlight España no publica PVP
    potenciaCv: 140, // Fiat Ducato 2.2 Multijet de 140 CV (103 kW) Euro 6e
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
    imagen:
      "/media/sunlight-t-67-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial:
      "/media/sunlight-t-67-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/sunlight-t-67-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7370, // anuncios de unidades nuevas modelo 2026 (7,37 m)
    anchoMm: 2330, // anuncios de unidades nuevas modelo 2026 (2,33 m)
    altoMm: 2910, // anuncios de unidades nuevas modelo 2026 (2,91 m)
    pesoKg: null, // masa en orden de marcha no publicada para esta versión
    mmaKg: 3500, // 3.499 kg en documentación de las unidades 2026
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil de esta versión
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas de viaje homologadas
    plazasDormir: 4, // camas gemelas traseras + cama abatible sobre el salón
    parNm: 350, // Fiat Ducato 2.2 Multijet 140: 350 Nm (dato oficial Fiat)
    traccion: "Delantera", // Fiat Ducato (también se ofrece sobre Citroën Jumper según mercado), tracción delantera
    emisionesCo2: null,
    aprox: ["Precio de tarifa en Alemania: desde 75.015 €"],
    notas:
      "El precio (75.015 €) es la tarifa de fabricante «desde» en Alemania para una unidad nueva del modelo 2026 (anuncio de Freizeitcenter Adolph); Sunlight España no publica PVP, así que el precio final en España lo fija cada concesionario. Medidas, plazas, MMA, motorización y equipamiento proceden de anuncios de unidades nuevas del modelo 2026 con la ficha técnica del fabricante. El vehículo base puede ser Fiat Ducato o Citroën Jumper según el mercado y la edición. La masa en orden de marcha y la carga útil de esta versión no están publicadas: quedan sin dato y no se calculan.",
    descripcion: `La Sunlight T 67 es la perfilada con la que la marca alemana explica por qué lleva años siendo la puerta de entrada más popular al caravaning en Europa: 7,37 metros de largo, distribución de camas gemelas traseras y cama abatible sobre el salón, y un precio que en Alemania parte de 75.015 € según la tarifa de fabricante para el modelo 2026. No es la perfilada más barata del mercado, pero sí una de las que mejor equilibran habitabilidad, equipamiento de serie y red de servicio, con el respaldo del grupo Erwin Hymer detrás.

La distribución de la T 67 es la que Sunlight lleva perfeccionando generación tras generación y la razón por la que este número se mantiene en catálogo año tras año. Atrás, dos camas individuales sobre un garaje de doble acceso: se pueden unir para formar una gran superficie de descanso o mantenerse separadas para dormir cada uno en su cama, y bajo ellas cabe todo lo que una familia necesita llevarse —bicicletas, sillas, mesa de camping— sin tener que hacer tetris cada mañana. Sobre el salón delantero, la cama abatible eléctrica aprovecha el volumen del techo alto para sumar dos plazas más sin robar ni un centímetro a la zona de día. En total, cuatro plazas de viaje homologadas y cuatro para dormir: la fórmula que convierte a la T 67 en candidata para parejas que viajan con hijos o con amigos, sin saltar a los 7,5 metros de las perfiladas grandes.

La Adventure Edition, que es como se comercializa la inmensa mayoría de las T 67, no es un simple paquete estético: agrupa los extras que casi todos los compradores piden —toldo, portabicicletas para tres bicis, llantas de aleación de 16 pulgadas, ventanas con marco, segunda trampilla exterior de almacenamiento, frigorífico grande de 156 litros con congelador independiente de 29 litros y la conversión de camas individuales en cama doble— en un precio cerrado que sale más a cuenta que pedirlos sueltos. A eso se suman el paquete Basic (claraboya panorámica de 70 x 50 cm, puerta con mosquitera, preinstalación de cámara trasera) y detalles que se agradecen en ruta: panel solar de 100 W con regulador MPPT de serie, depósito de diésel de 90 litros, depósito de aguas grises aislado y calefacción Truma Combi 6E (gas con apoyo eléctrico) con panel de control digital.

El vehículo base es el Fiat Ducato de 3.500 kg con el 2.2 Multijet de 140 CV (103 kW) y 350 Nm de par, homologado Euro 6e, con cambio manual de 6 velocidades de serie y el automático de 8 relaciones como opción —la combinación que montan la mayoría de las unidades del modelo 2026—. Con 3.499 kg de MMA se conduce con el carnet B, aunque con cuatro ocupantes y el garaje lleno conviene hacer números con la carga útil real, que la marca no publica para esta versión. En marcha, la T 67 se beneficia de la batalla larga del Ducato: estable en autopista y sorprendentemente noble en carreteras de montaña para un vehículo de 7,37 metros. El puesto de conducción, con asientos de cabina giratorios, se integra en el salón en parado y suma dos plazas más a la mesa.

Por dentro respira el diseño funcional que caracteriza a Sunlight: muebles en tonos claros con frentes altos, tapicería gris de la edición Adventure y mucha luz natural gracias a la claraboya panorámica y a la ventana delantera sobre la cabina. La cocina, en el lateral, monta fregadero, cocina de tres fuegos y ese frigorífico de 156 litros que es de los grandes de su segmento. El baño, con ducha separada y rejilla de madera, está dimensionado para usarlo a diario sin contorsionismos. Y un detalle que las fichas no siempre cuentan: la preinstalación de TV de 12 V con soporte para pantalla plana viene de serie, así que el salón se convierte en cine en dos minutos.

Con 7,37 m de largo, 2,33 m de ancho y 2,91 m de alto, la T 67 se mueve en la franja media-alta de las perfiladas familiares: pide su sitio en el área de servicio, pero a cambio ofrece un interior que en invierno se defiende gracias a la calefacción Combi 6E y al depósito de grises aislado. No es una autocaravana de cuatro estaciones extrema —para eso están las gamas altas del grupo—, pero aguanta escapadas de otoño y primavera sin pasar frío.

En precio, la referencia alemana de 75.015 € la coloca por encima de las perfiladas de acceso chinas y coreanas que empiezan a llegar, y por debajo de las Dethleffs, Bürstner o Hymer equivalentes con la misma distribución. Sus rivales naturales en España son la Carado T 447 —su gemela técnica, fabricada en la misma planta—, la Dethleffs Trend y la Bürstner Lyseo TD en versiones de camas gemelas: frente a ellas, la Sunlight juega la baza del precio cerrado de la Adventure Edition y de una de las redes de concesionarios más densas de Europa.

Verificación de fuentes: medidas (7,37 x 2,33 x 2,91 m), MMA (3.499 kg), plazas (4 de viaje / 4 para dormir), motorización Fiat Ducato 2.2 Multijet 140 CV Euro 6 y equipamiento de la Adventure Edition proceden de anuncios de unidades nuevas del modelo 2026 que reproducen la ficha técnica del fabricante (Freizeitcenter Adolph, Alemania). La tarifa «desde 75.015 €» es la de fabricante en Alemania; Sunlight España no publica PVP. La marca no publica la masa en orden de marcha ni la carga útil de esta versión: esos campos quedan sin dato y no se calculan. Las fotos corresponden a una Sunlight T 67 real (exteriores de flota de alquiler e interiores de una unidad anunciada en Finlandia).

Perfil de comprador: la T 67 encaja con parejas con uno o dos hijos —o con amigos— que buscan su primera perfilada seria: camas gemelas de verdad, cama abatible para no pelearse por el salón, garaje grande y un precio cerrado sin sorpresas en la factura de extras. También encaja con quien alquila antes de comprar y quiere probar el formato más vendido de Europa. No encaja con quien necesite dormir a cinco o seis personas, ni con quien busque una perfilada de menos de 7 metros para moverse por pueblos pequeños. Balance: la perfilada familiar más redonda del catálogo Sunlight, con la distribución que nunca falla y el argumento imbatible de la Adventure Edition a precio cerrado, lastrada solo por la opacidad habitual de la marca con la carga útil y el PVP en España.`,
    pros: [
      "Distribución probadísima: camas gemelas traseras convertibles + cama abatible = 4 plazas para dormir",
      "Adventure Edition a precio cerrado: toldo, portabicis, llantas de 16\", frigorífico de 156 l y más",
      "Fiat Ducato 2.2 de 140 CV con 350 Nm; automático de 8 velocidades opcional",
      "Panel solar de 100 W con MPPT y depósito de diésel de 90 l de serie",
      "3.499 kg de MMA: se conduce con el carnet B",
    ],
    contras: [
      "Sin PVP oficial en España: cada concesionario fija su precio",
      "7,37 m de largo: pide sitio en áreas y pueblos pequeños",
      "La marca no publica la masa en orden de marcha ni la carga útil de esta versión",
      "El cambio automático y el motor de 180 CV son opcionales con sobreprecio",
      "Con cuatro ocupantes y el garaje lleno hay que vigilar la carga útil real",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/sunlight-t-67-2026-precio-ficha-tecnica-ext.webp",
        alt: "Sunlight T 67 Adventure Edition, vista delantera tres cuartos",
        ancho: 4000,
        alto: 2667,
      },
      {
        src: "/media/sunlight-t-67-2026-precio-ficha-tecnica-ext-2.webp",
        alt: "Sunlight T 67 Adventure Edition, vista lateral tres cuartos",
        ancho: 1830,
        alto: 1029,
      },
      {
        src: "/media/sunlight-t-67-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Sunlight T 67, camas gemelas traseras",
        ancho: 1440,
        alto: 1080,
      },
      {
        src: "/media/sunlight-t-67-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Interior de la Sunlight T 67, cama abatible sobre el salón",
        ancho: 1440,
        alto: 1080,
      },
    ],
    analisisSlug: "sunlight-t-67-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato 2.2: revisión cada 2 años o 48.000 km (lo que ocurra antes, según plan Fiat)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 48.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Sunlight (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Sunlight",
    },
    euroncap: null,
    curiosidades:
      "Sunlight y Carado son marcas gemelas del grupo Erwin Hymer: comparten plataforma técnica y salen de las mismas líneas de producción —las perfiladas de la serie T se fabrican en la planta de Capron en Neustadt (Sajonia, Alemania)—, y se diferencian sobre todo en el diseño interior y el posicionamiento comercial. Fuente: análisis de la gama Sunlight (https://www.alpacacamping.de/fahrzeuge/en/brands/sunlight/page/2/).",
    fuenteNombre: "Sunlight — datos de gama 2026 (vía anuncios oficiales de concesionarios, DE)",
    fuenteUrl: "https://www.sunlight.de/",
  },
  {
    id: "sunlight-cliff-602-2026-precio-ficha-tecnica",
    marca: "Sunlight",
    modelo: "Cliff 602",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: 61849, // tarifa de fabricante en Alemania (desde 61.848,62 €, unidad nueva modelo 2026); Sunlight España no publica PVP
    potenciaCv: 140, // Fiat Ducato 2.2 Multijet de 140 CV (103 kW) Euro 6
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
    imagen:
      "/media/sunlight-cliff-602-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial:
      "/media/sunlight-cliff-602-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/sunlight-cliff-602-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990, // anuncios de unidades nuevas modelo 2026 (5,99 m)
    anchoMm: 2050, // anuncios de unidades nuevas modelo 2026 (2,05 m)
    altoMm: 2610, // anuncios de unidades nuevas modelo 2026 (2,61 m)
    pesoKg: null, // masa en orden de marcha no publicada por la marca para esta versión
    mmaKg: 3500, // 3.500 kg en documentación de las unidades 2026
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil de esta versión
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas de viaje homologadas
    plazasDormir: 2, // camas gemelas traseras; 4 con el techo elevable RT opcional
    parNm: 350, // Fiat Ducato 2.2 Multijet 140: 350 Nm (dato oficial Fiat)
    traccion: "Delantera", // Fiat Ducato, tracción delantera
    emisionesCo2: null,
    aprox: ["Precio de tarifa en Alemania: desde 61.848,62 €"],
    notas:
      "El precio (61.848,62 €) es la tarifa de fabricante «desde» en Alemania para una unidad nueva del modelo 2026; Sunlight España no publica PVP, así que el precio final en España lo fija cada concesionario. Medidas, plazas, MMA, motorización y equipamiento proceden de la ficha oficial del modelo en sunlight.de y de anuncios de unidades nuevas del modelo 2026. Las fotos de exterior e interior-2 muestran una unidad con el techo elevable RT opcional (cerrado); la base es la misma Cliff 602. La masa en orden de marcha y la carga útil de esta versión no están publicadas: quedan sin dato y no se calculan.",
    descripcion: `La Sunlight Cliff 602 es el camper con el que la marca alemana ha reinventado su gama de furgonetas: 5,99 metros sobre Fiat Ducato, camas gemelas traseras en lugar de la clásica cama transversal y el baño Vario que tanto echaban en falta los que vienen de campers pequeños. Con una tarifa de fabricante en Alemania desde 61.848,62 € para el modelo 2026, se coloca en el corazón del segmento camper familiar: más cara que una 540 básica, más barata que las camper gran volumen, y con una distribución que en la práctica se usa mejor que las dos.

La gran novedad de la 602 está en la parte trasera. Donde la Cliff 600 monta la cama transversal de toda la vida —cómoda, pero que obliga a escalar por encima de tu pareja para salir—, la 602 apuesta por dos camas individuales longitudinales que se pueden unir para formar una superficie doble. Dormir cada uno en su cama, levantarse sin molestar al otro y tener paso libre al baño por la noche son de esas cosas que no aparecen en la ficha técnica y deciden si un camper se usa o se queda en el garaje. Sobre las camas, armarios altos a ambos lados; debajo, el acceso al almacenamiento desde el interior. Y el baño Vario: un módulo compacto con ducha que se despliega cuando hace falta y se recoge para no robar espacio el resto del día, una solución que Sunlight ha ido refinando y que en la 602 llega a su versión más madura.

Delante, el planteamiento es el clásico camper bien resuelto: salón con mesa para cuatro aprovechando los asientos giratorios de cabina, cocina lateral con fregadero, cocina de dos o tres fuegos según configuración y el frigorífico grande de 156 litros con congelador independiente de 29 litros —el mismo que montan las perfiladas de la marca, y una gozada en un camper de menos de 6 metros—. La calefacción es la Truma Combi 4, suficiente para el volumen de una furgoneta y rápida en calentar, con la opción de la Combi 6 para quien la use en invierno de verdad. La Adventure Edition, de serie en la mayoría de los mercados, añade los vinilos, el ambiente interior específico, el toldo, la claraboya panorámica de 70 x 50 cm, el equipamiento de ducha, la ventana en el baño y las llantas de aleación de 16 pulgadas.

El vehículo base es el Fiat Ducato de 3.500 kg con el 2.2 Multijet de 140 CV (103 kW), cambio manual de 6 velocidades de serie y el automático de 8 relaciones como opción —el que montan cada vez más unidades, porque en un camper que se usa a diario el automático se agradece—. Con 5,99 m de largo, 2,05 m de ancho y 2,61 m de alto, la 602 cabe en una plaza de aparcamiento normal alargada, entra en la mayoría de parkings subterráneos con límite de 2,70 m y se conduce como lo que es: una furgoneta grande, no un camión. Los 3.500 kg de MMA la dejan en el carnet B con margen, y la carga útil —que la marca no publica para esta versión— es de las más sanas del segmento precisamente porque el camper pesa menos que una perfilada equivalente.

La opción que más se pide en la 602 es el techo elevable RT: suma dos plazas para dormir arriba y convierte el camper de 2 en un 4 plazas real para familias con niños, a cambio de unos centímetros más de altura y de un sobreprecio que hay que negociar con el concesionario. Las fotos de exterior de esta ficha muestran precisamente una unidad con el techo RT cerrado: con él bajado, la silueta es idéntica a la de la 602 base.

En precio, los 61.848,62 € de tarifa alemana la sitúan por encima de la Cliff 600 de acceso y claramente por debajo de las camper premium de Hymer o Westfalia con distribución equivalente. Sus rivales naturales son la Carado CV 600 —su gemela técnica—, la Dethleffs Globetrail 600 y la Pössl Summit 600: frente a ellas, la Sunlight juega con el equipamiento Adventure de serie y con el argumento de las camas gemelas, que ninguna de sus rivales directas ofrecía hasta hace poco en este formato.

Verificación de fuentes: medidas (5,99 x 2,05 x 2,61 m), MMA (3.500 kg), plazas (4 de viaje / 2 para dormir, 4 con techo RT), motorización Fiat Ducato 2.2 Multijet 140 CV y equipamiento de la Adventure Edition proceden de la ficha oficial del modelo en sunlight.de y de anuncios de unidades nuevas del modelo 2026 que reproducen la tarifa de fabricante en Alemania («desde 61.848,62 €»). Sunlight España no publica PVP. La marca no publica la masa en orden de marcha ni la carga útil de esta versión: esos campos quedan sin dato y no se calculan. Las fotos corresponden a una Sunlight Cliff 602 real (exteriores e interior-2 de una unidad con techo RT anunciado en Reino Unido; interior de una unidad base anunciada en Alemania).

Perfil de comprador: la Cliff 602 encaja con parejas activas que quieren un camper para usar todo el año —escapadas de fin de semana, viajes largos en verano y uso diario sin dramas de aparcamiento—, valoran dormir cada uno en su cama y no quieren una cama transversal. Con el techo RT, encaja también con familias con dos niños que necesitan cuatro plazas para dormir sin saltar a una perfilada. No encaja con quien necesite cinco plazas de viaje ni con quien busque el camper más barato del segmento: la 600 de acceso cuesta menos. Balance: el camper más inteligente del catálogo Sunlight, con la distribución de camas gemelas que sus rivales aún no ofrecen y un precio contenido para lo que equipa, lastrado solo por la falta de PVP oficial en España.`,
    pros: [
      "Camas gemelas traseras: se duerme y se sale de la cama sin molestar a nadie",
      "Baño Vario: ducha que se despliega solo cuando hace falta",
      "5,99 m: cabe en plaza de aparcamiento y en la mayoría de parkings subterráneos",
      "Frigorífico de 156 l con congelador de 29 l, de los grandes del segmento camper",
      "Techo elevable RT opcional: 4 plazas para dormir en menos de 6 metros",
    ],
    contras: [
      "Sin PVP oficial en España: cada concesionario fija su precio",
      "De serie solo 2 plazas para dormir: el techo RT es opcional con sobreprecio",
      "La marca no publica la masa en orden de marcha ni la carga útil de esta versión",
      "El cambio automático de 8 velocidades es opcional",
      "Baño Vario compacto: no es el baño amplio de una perfilada",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/sunlight-cliff-602-2026-precio-ficha-tecnica-ext.webp",
        alt: "Sunlight Cliff 602 Adventure, vista delantera tres cuartos",
        ancho: 1536,
        alto: 1152,
      },
      {
        src: "/media/sunlight-cliff-602-2026-precio-ficha-tecnica-ext-2.webp",
        alt: "Sunlight Cliff 602 Adventure, vista trasera tres cuartos",
        ancho: 1536,
        alto: 1152,
      },
      {
        src: "/media/sunlight-cliff-602-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Sunlight Cliff 602, cocina lateral",
        ancho: 1600,
        alto: 1067,
      },
      {
        src: "/media/sunlight-cliff-602-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Interior de la Sunlight Cliff 602, camas gemelas traseras",
        ancho: 1536,
        alto: 1152,
      },
    ],
    analisisSlug: "sunlight-cliff-602-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato 2.2: revisión cada 2 años o 48.000 km (lo que ocurra antes, según plan Fiat)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 48.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Sunlight (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Sunlight",
    },
    euroncap: null,
    curiosidades:
      "Las camper Sunlight Cliff comparten fábrica y plataforma técnica con las Carado de Hymer: son gemelas mecánicas y solo se diferencian en el diseño interior y el enfoque comercial —Sunlight es la marca joven de Dethleffs y Carado la de Hymer dentro del mismo grupo—. Fuente: prueba de la Sunlight Cliff 600 (https://www.outandaboutlive.co.uk/reviews/campervans/sunlight-cliff-600-campervan-2).",
    fuenteNombre: "Sunlight — ficha oficial del modelo Cliff 602 Adventure",
    fuenteUrl: "https://www.sunlight.de/en-int/models/camper-vans/cliff-adventure/cliff-602-adventure/",
  },
];
