// Autocaravanas Etrusco — lote Merlín 3 (19/10/2026).
// Fuentes: web oficial etrusco.com (resumen de gama/modeloverview con precios DE,
//   consultado el 19/10/2026), notas de prensa oficiales de Etrusco (serie Campervan Plus
//   2024 y nuevo CV 600 SB 2026), ficha de expositor Etrusco en findmyleisurevehicle.co.uk
//   (NEC 2026, I 7400 QBC), anuncios de distribuidores oficiales europeos con datos
//   técnicos de unidades 2024-2026 (dimensiones, pesos, motores). Verificado el 19/10/2026.
// Notas honestas: Etrusco publica PVP solo para Alemania; no hay tarifa oficial ES,
//   por lo que precioDesde queda sin dato y las tarifas DE/UK se citan solo como
//   referencia con fuente. Las páginas de detalle de etrusco.com no cargaron el
//   19/10/2026 (fallo reiterado del servicio de lectura), así que los datos técnicos de
//   cada layout se verificaron con la prensa oficial de la marca y fichas de
//   distribuidores; lo no confirmado queda sin dato. Fotos verificadas el 19/10/2026
//   (verificación visual 1x1, worker V3-05): CV 600 DB con 4 fotos reales del modelo
//   exacto (1 oficial de la galería etrusco.com); I 7400 QBC con 4 fotos oficiales
//   del PDF del expositor Etrusco en el NEC 2026.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_ETRUSCO_M3: Autocaravana[] = [
  {
    id: "etrusco-cv-600-db-2026-precio-ficha-tecnica",
    marca: "Etrusco",
    modelo: "CV 600 DB",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: null, // Etrusco no publica PVP oficial en España
    potenciaCv: 140, // Fiat Ducato 2.2 MultiJet 103 kW de serie (nota de prensa oficial Etrusco)
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
    imagen: "/media/etrusco-cv-600-db-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/etrusco-cv-600-db-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/etrusco-cv-600-db-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990, // ficha de distribuidor (unidad 2026): 599 cm
    anchoMm: 2050, // ficha de distribuidor: 205 cm
    altoMm: 2650, // ficha de distribuidor (unidad 2026): 265 cm
    pesoKg: null, // tara de 2.807 kg según distribuidor (2026), no dato oficial de marca
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no la publica; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // ficha de distribuidor: 4 asientos
    plazasDormir: 2, // DB = Doppelbett: cama doble transversal trasera
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: [],
    notas:
      "Dimensiones 5990x2050x2650 mm, MMA 3500 kg, motor Fiat Ducato 2.2 140 CV y 2 plazas para dormir: ficha de distribuidor oficial para una unidad CV 600 DB 2026. " +
      "Motor de serie 103 kW (140 CV) y opcional 130 kW (180 CV) con cambio automático: nota de prensa oficial de Etrusco sobre la serie Campervan Plus. " +
      "La sigla DB identifica la cama doble transversal trasera («cozy transverse bed», nota de prensa oficial). " +
      "Gama oficial 2026 (etrusco.com, modeloverview): serie CV Fiat desde 55.799 € y serie CV Plus desde 58.999 € (PVP Alemania, solo referencia; no hay tarifa ES). " +
      "Precio null en España: la marca no publica tarifa ES.  Precio: se deja sin dato porque no se ha podido localizar una tarifa oficial abierta y verificable de Etrusco para este modelo (la marca no expone el PVP por modelo en su web oficial); sin PVP oficial verificable." +
      "Fotos verificadas visualmente el 19/10/2026 (worker V3-05): 4 fotos reales del modelo exacto, sin marcas de agua ni concesionario; el baño es foto oficial de la galería de etrusco.com.",
    curiosidades:
      "Para la temporada 2026 Etrusco amplía su gama camper con el nuevo CV 600 SB —el primer camper de 6 metros de la marca con dos camas individuales de hasta 191 cm— y mantiene el CV 600 DB con su cama doble transversal; la serie Campervan Plus, a la que pertenece, parte de 58.999 € en Alemania (fuente: nota de prensa oficial de Etrusco, 8/5/2025, https://www.etrusco.com/it/it/stampa/articolo-2025/cv-600-sb; y nota de prensa de la serie Plus https://www.etrusco.com/gb/en/press/article-2024/cv-plus).",
    descripcion: `El Etrusco CV 600 DB es el camper de 5,99 metros para quien quiere una cama doble de verdad sin subir a los 6,36 metros. Etrusco, la marca italiana del grupo Erwin Hymer, se ha hecho un hueco en Europa con una receta clara: diseño italiano, construcción con estándar alemán y precios contenidos. El CV 600 DB —donde DB significa Doppelbett, cama doble— aplica esa receta al formato más vendible del mercado: el furgón compacto con cama transversal trasera, cuatro plazas de viaje y todo lo necesario para escapadas largas sin depender de campings.

En medidas y habitabilidad, la ficha del distribuidor para una unidad 2026 anota 5.990 mm de largo, 2.050 mm de ancho y 2.650 mm de alto, con 3.500 kg de MMA. Son las cotas del Ducato L3H2, el «punto dulce» del camper: lo bastante corto para moverse por pueblos y ciudades, lo bastante largo para una cama transversal de adulto y un baño usable. La distribución DB coloca la cama doble al fondo, en sentido transversal, con el baño compacto a un lado y la cocina y el salón en la zona central-delantera. La cama queda siempre hecha —se entra por los pies o por el lateral según la versión— y durante el día el salón con asientos giratorios de cabina funciona como comedor y oficina. Es una implantación pensada para parejas: dos personas viajan y duermen con total comodidad, y las cuatro plazas homologadas permiten llevar invitados de forma legal aunque para dormir solo haya dos camas.

En tecnología y equipamiento, Etrusco articula la gama camper en dos series: la CV Fiat y la CV Plus, y el CV 600 DB se beneficia del famoso paquete «Complete Selection», el «todo incluido» de la marca que agrupa el pack de chasis, el pack de diseño, el pack confort, la edición de diseño type X (ambiente Emilia, puertas de armario en magnolia brillo), el pack multimedia con pantalla y cámara trasera, ventanas con marco, toldo y preinstalación solar. La nota de prensa oficial de la serie Plus detalla además la iluminación LED indirecta, los numerosos puertos USB y las llantas de aleación de 16 pulgadas de serie. El resultado es un camper que sale del concesionario muy completo sin tener que tachar una lista interminable de opciones, que es donde muchos competidores engordan el precio final.

En camas y plazas, la protagonista es la cama doble transversal trasera, con somier de láminas y colchón de buen grosor; la prensa oficial la describe como «cozy transverse bed». Las medidas rondan los 190 x 150 cm según las fichas de los distribuidores, válida para dos adultos. No hay camas adicionales: es un dos plazas para dormir honesto, sin dinette convertible que prometa lo que no cumple. Las cuatro plazas de viaje llevan cinturón y el salón admite cuatro comensales.

En mecánica, el motor de serie es el Fiat Ducato 2.2 MultiJet de 103 kW (140 CV) con cambio manual, y la marca ofrece como opción el 2.2 de 130 kW (180 CV) asociado al cambio automático, según su nota de prensa oficial. El chasis es el Light de Fiat, con los asistentes habituales (ESP, Hill Holder, control de crucero) y el paquete de chasis de Etrusco que añade retrovisores eléctricos y calefactados, Traction+ y preinstalación de radio DAB. Es la mecánica más extendida del sector: recambios y mano de obra en cualquier punto de Europa.

En precio y red comercial en España, Etrusco no publica tarifa oficial española, por lo que el precio de esta ficha queda sin dato. Como referencia, la web oficial anuncia en Alemania la serie CV Fiat desde 55.799 € y la serie CV Plus desde 58.999 € (PVP recomendado alemán, consultado el 19/10/2026). En España la marca se distribuye a través de concesionarios del grupo Erwin Hymer; el precio final dependerá de si la unidad lleva el Complete Selection y del motor elegido, así que conviene pedir el desglose por escrito y comparar el coste con el Complete Selection frente a una unidad pelada más opciones sueltas.

Cómo lo verificamos: resumen oficial de gama en etrusco.com (modeloverview, con precios DE y número de distribuciones, consultado el 19/10/2026), notas de prensa oficiales de Etrusco sobre la serie Campervan Plus y sobre el nuevo CV 600 SB 2026, y fichas técnicas de distribuidores oficiales europeos para unidades CV 600 DB 2024-2026 (dimensiones, pesos, motor y plazas). Las páginas de detalle de etrusco.com no cargaron ese día por un fallo reiterado del servicio de lectura, así que cada dato lleva su fuente alternativa y lo no confirmado queda sin dato.

Para quién es: para parejas que buscan un camper compacto de verdad —5,99 m— con cama doble siempre hecha, que valoran salir del concesionario con el equipamiento resuelto (Complete Selection) y que prefieren el diseño italiano al funcionalismo alemán puro. No es para familias: solo duermen dos. Tampoco para quien quiera la cama más grande del mercado: la transversal de un 5,99 m es cómoda pero no es una queen de perfilada.`,
    pros: [
      "Cama doble transversal siempre hecha en solo 5,99 m: el formato más ágil con cama de verdad.",
      "Paquete Complete Selection: el camper sale muy equipado sin una lista interminable de opciones.",
      "Motor Fiat 2.2 de 140 CV de serie con opción de 180 CV automático: mecánica probada y extendida.",
      "Diseño italiano (ambiente Emilia, type X) a precio de gama media: la propuesta de valor de Etrusco.",
      "Con 3.500 kg basta el carnet B y se mueve bien por ciudad y carreteras secundarias.",
    ],
    contras: [
      "Solo 2 plazas para dormir: las 4 plazas de viaje no se traducen en camas.",
      "La marca no publica PVP en España: el precio final depende del distribuidor.",
      "La cama transversal de un 5,99 m es justa para personas muy altas: probar antes de comprar.",
      "El baño compacto lateral no es un baño de perfilada: ducha de compromiso.",
      "Carga útil a vigilar si se carga el Complete Selection más toldo, solar y batería extra.",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/etrusco-cv-600-db-2026-precio-ficha-tecnica-oficial.webp", alt: "Etrusco CV 600 DB, vista exterior", ancho: 1500, alto: 833 },
      { src: "/media/etrusco-cv-600-db-2026-precio-ficha-tecnica-interior1.webp", alt: "Etrusco CV 600 DB, salón", ancho: 1600, alto: 1200 },
      { src: "/media/etrusco-cv-600-db-2026-precio-ficha-tecnica-interior2.webp", alt: "Etrusco CV 600 DB, baño", ancho: 1600, alto: 2398 },
      { src: "/media/etrusco-cv-600-db-2026-precio-ficha-tecnica-detalle.webp", alt: "Etrusco CV 600 DB, lateral con techo elevable", ancho: 1600, alto: 1200 },
    ],
    analisisSlug: "etrusco-cv-600-db-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato 2.2)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Etrusco (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
  {
    id: "etrusco-i-7400-qbc-2026-precio-ficha-tecnica",
    marca: "Etrusco",
    modelo: "I 7400 QBC",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: null, // Etrusco no publica PVP oficial en España
    potenciaCv: 140, // Fiat Ducato 2.2 MultiJet 103 kW de serie (fichas de distribuidor)
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
    imagen: "/media/etrusco-i-7400-qbc-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/etrusco-i-7400-qbc-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/etrusco-i-7400-qbc-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7400, // fichas de distribuidor: 7.400 mm
    anchoMm: 2320, // fichas de distribuidor: 2.320 mm
    altoMm: 2950, // fichas de distribuidor: 2.950 mm
    pesoKg: null, // tara media de 3.017 kg según distribuidor, no dato oficial de marca
    mmaKg: 3500, // de serie; 3.650 kg opcional según distribuidor
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no la publica; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // ficha de expositor NEC 2026: 4 plazas de viaje
    plazasDormir: 4, // ficha de expositor NEC 2026: 4 camas (queen trasera + abatible delantera)
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: [],
    notas:
      "Modelo 2026 confirmado por la ficha de expositor de Etrusco en la feria NEC 2026 (findmyleisurevehicle.co.uk): gama I, variante 7400 QBC, integral (A Class), con 4 plazas de viaje y 4 camas; tarifa en Reino Unido desde 72.290 £. " +
      "Medidas 7400x2320x2950 mm, MMA de 3500 kg, ampliable a 3650 kg, y propulsor Fiat Ducato 2.2 MultiJet de 140 CV con cambio manual (180 CV con automático bajo pedido): datos de fichas de la red europea de unidades 2024-2025. " +
      "La distribución QBC monta cama queen posterior y una gran cama abatible delantera junto a la zona de día; la red resalta el parabrisas panorámico y la decoración Emilia/type X. " +
      "En la web de la marca (etrusco.com) la serie I Fiat parte de 78.999 € en Alemania, cifra solo orientativa porque no existe tarifa ES. " +
      "En España: null, sin tarifa publicada.  Precio: se deja sin dato porque no se ha podido localizar una tarifa oficial abierta y verificable de Etrusco para este modelo (la marca no expone el PVP por modelo en su web oficial); sin PVP oficial verificable." +
      "Fotos: 4 fotos oficiales del PDF del expositor Etrusco en el NEC 2026 (contenido del fabricante), verificadas visualmente el 19/10/2026 (worker V3-05).",
    curiosidades:
      "La ficha de expositor de Etrusco en la feria NEC de Birmingham recoge el I 7400 QBC como modelo 2026: integral de clase A sobre Fiat con 4 plazas de viaje, 4 camas y tarifa de salida en Reino Unido de 72.290 £ (origen: https://findmyleisurevehicle.co.uk/pdf/product/6527?signature=ddafc60dde5b001921aa9a749bba1693508385b8cf56123cd303acdafea1ea06, consultada el 19/10/2026).",
    descripcion: `La integral más asequible con pedigrí europeo se llama Etrusco I 7400 QBC. Con 7,40 m de largo y carrocería de clase A sobre Fiat Ducato, ofrece lo que muchas perfiladas prometen y no cumplen: 4 camas de adulto de verdad —una queen fija atrás y otra abatible delante— más el parabrisas panorámico que convierte el frontal en un mirador. Es la vía de acceso al formato integral para el que ve las perfiladas como un apaño y las alemanas premium como un imposible: estética de integral, factura de Etrusco.

4 camas sin trucos. El I 7400 QBC homologa 4 plazas de viaje y 4 para dormir, según la ficha de expositor de la NEC 2026. Atrás, la cama queen —la «Q» del código QBC— es fija y va hecha, y descansa sobre somier de láminas. Delante, sobre el puesto de conducción, desciende por la noche una gran cama abatible, también de dimensiones queen y con somier de láminas de madera, que de día se pliega en el techo con un mecanismo fácil de accionar; la red la presenta como «despertar como en una suite de hotel». Nada de dinettes convertibles: 2 parejas —o padres con 2 hijos ya crecidos— tienen su propia cama.

El mirador delantero. Al ser una integral pura, desaparece el escalón entre la zona de conducción y la célula que tienen las perfiladas: el parabrisas panorámico recorre el frontal y la luz inunda el estar delantero. La distribución coloca la queen posterior, la zona de día en el centro y la cocina completa, además de un baño generoso con ducha separada que la red presenta como «baño de ambiente», con mampara y huecos de almacenaje.

Medidas y carnet. Las fichas de la red anotan 7.400 mm de largo, 2.320 mm de ancho y 2.950 mm de alto, con 3.500 kg de MMA de serie y 3.650 kg bajo pedido. Es una integral familiar de tamaño europeo estándar: se nota el salto frente a un furgón, pero sigue entrando en el carnet B. Los 3.650 kg tienen sentido si se viaja a 4 con el garaje lleno y a tope de extras.

El pack todo incluido. La serie I comparte la filosofía de la casa: el pack todo incluido concentra el pack de chasis, el de diseño, el de confort, la edición type X con ambiente Emilia, la multimedia con cámara de marcha atrás, las ventanas con marco y la preinstalación solar. La red añade el salpicadero con inserciones Techno-Trim, volante multifunción, Traction+ con ayuda al descenso y calefacción Truma Combi 6 (en algunas configuraciones, la versión E con apoyo eléctrico). La célula, con paredes de 30 mm y buen aislamiento, aguanta tres estaciones sin dramas; los que viajen en invierno pueden pedir el depósito de grises aislado.

Propulsor. De serie lleva el Fiat Ducato 2.2 MultiJet de 103 kW (140 CV) con cambio manual, y bajo pedido el 2.2 de 180 CV con cambio automático para el que busque más fondo en autopista y puertos. Chasis Light de Fiat: la mecánica más extendida del sector, con recambios y talleres en cualquier rincón de Europa.

Tarifas y red en España. Etrusco no publica tarifa española, así que esta ficha deja la tarifa sin dato. Como referencias documentadas: la web de la marca anuncia la serie I Fiat desde 78.999 € en Alemania, y la ficha británica de la NEC parte de 72.290 £. En España la venden los concesionarios del grupo Erwin Hymer; al pedir presupuesto conviene dejar por escrito tres cosas —si incluye el pack todo incluido, qué propulsor monta y qué MMA lleva (3.500 o 3.650 kg)—, porque esas tres variables son las que mueven la factura final.

Cómo lo verificamos: ficha de expositor de Etrusco en la NEC 2026 (findmyleisurevehicle.co.uk, consultada el 19/10/2026), que acredita el I 7400 QBC como modelo 2026, integral, 4+4 plazas y tarifa UK; resumen de gama en etrusco.com (precios DE y distribuciones); y fichas técnicas de la red europea de unidades 2024-2025 (dimensiones, pesos, propulsores y dotación). Las páginas de detalle de etrusco.com no cargaron el 19/10/2026 por un fallo reiterado del servicio de lectura, así que todos los datos llevan su origen y lo no confirmado queda sin dato.

Perfil de comprador: el que sueña con una integral auténtica —parabrisas panorámico, presencia, espacio— sin pagar la prima alemana, y parejas dobles o familias que necesitan 4 camas reales con la queen posterior preparada. No encaja con el que priorice callejear (7,40 x 2,32 m se hacen notar en pueblos y parkings) ni con el que viaje solo o en pareja y no vaya a desplegar la abatible: en ese caso una perfilada más corta y económica rinde mejor.`,
    pros: [
      "Clase A auténtica —parabrisas panorámico y célula integral— a tarifa de marca generalista.",
      "Queen posterior fija más abatible delantera de tamaño queen: 4 camas de verdad, sin dinettes.",
      "Acreditado como modelo 2026 en la feria NEC: gama viva, con red y repuestos asegurados.",
      "Pack todo incluido: la dotación queda resuelta en fábrica, sin peregrinar por extras.",
      "MMA de 3.500 kg de serie, 3.650 kg bajo pedido: se conduce con el carnet B.",
    ],
    contras: [
      "Sin tarifa publicada en España: la tarifa se negocia unidad a unidad con la red.",
      "7,40 m de integral: maniobrar y aparcar piden práctica; no es para callejear.",
      "La cama abatible hay que plegarla por la mañana para recuperar el estar.",
      "El 140 CV de serie puede ir justo con carga completa en puertos: conviene valorar el 180 CV.",
      "Con 4 ocupantes y el pack todo incluido, la MMA de 3.650 kg se vuelve recomendable.",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/etrusco-i-7400-qbc-2026-precio-ficha-tecnica-oficial.webp", alt: "Etrusco I 7400 QBC, vista exterior", ancho: 1000, alto: 639 },
      { src: "/media/etrusco-i-7400-qbc-2026-precio-ficha-tecnica-interior1.webp", alt: "Etrusco I 7400 QBC, salón", ancho: 1000, alto: 667 },
      { src: "/media/etrusco-i-7400-qbc-2026-precio-ficha-tecnica-interior2.webp", alt: "Etrusco I 7400 QBC, cocina", ancho: 1000, alto: 667 },
      { src: "/media/etrusco-i-7400-qbc-2026-precio-ficha-tecnica-detalle.webp", alt: "Etrusco I 7400 QBC, dormitorio", ancho: 1000, alto: 667 },
    ],
    analisisSlug: "etrusco-i-7400-qbc-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato 2.2)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Etrusco (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 280 },
      ],
    },
  },
];
