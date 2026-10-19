// Autocaravanas Etrusco — lote Merlín 3 (19/10/2026).
// Fuentes: web oficial etrusco.com (resumen de gama/modeloverview con precios DE,
//   consultado el 19/10/2026), notas de prensa oficiales de Etrusco (serie Campervan Plus
//   2024 y nuevo CV 600 SB 2026), ficha de expositor Etrusco en findmyleisurevehicle.co.uk
//   (NEC 2026, I 7400 QBC), anuncios de distribuidores oficiales europeos con datos
//   técnicos de unidades 2024-2026 (dimensiones, pesos, motores). Verificado el 19/10/2026.
// Notas honestas: Etrusco publica PVP solo para Alemania; no hay tarifa oficial ES,
//   por lo que precioDesde queda en null y las tarifas DE/UK se citan solo como
//   referencia con fuente. Las páginas de detalle de etrusco.com no cargaron el
//   19/10/2026 (fallo reiterado del servicio de lectura), así que los datos técnicos de
//   cada layout se verificaron con la prensa oficial de la marca y fichas de
//   distribuidores; lo no confirmado queda en null. Fotos pendientes: el buscador de
//   imágenes y la lectura de páginas fallaron de forma reiterada; el coordinador deberá
//   aportarlas.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

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
    imagen: "",
    imagenOficial: "",
    imagenInteriorOficial: "",
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
      "Precio null en España: la marca no publica tarifa ES. " +
      "Sin fotos: el servicio de lectura web y el buscador de imágenes fallaron reiteradamente el 19/10/2026; queda pendiente que el coordinador las aporte.",
    curiosidades:
      "Para la temporada 2026 Etrusco amplía su gama camper con el nuevo CV 600 SB —el primer camper de 6 metros de la marca con dos camas individuales de hasta 191 cm— y mantiene el CV 600 DB con su cama doble transversal; la serie Campervan Plus, a la que pertenece, parte de 58.999 € en Alemania (fuente: nota de prensa oficial de Etrusco, 8/5/2025, https://www.etrusco.com/it/it/stampa/articolo-2025/cv-600-sb; y nota de prensa de la serie Plus https://www.etrusco.com/gb/en/press/article-2024/cv-plus).",
    descripcion: `El Etrusco CV 600 DB es el camper de 5,99 metros para quien quiere una cama doble de verdad sin subir a los 6,36 metros. Etrusco, la marca italiana del grupo Erwin Hymer, se ha hecho un hueco en Europa con una receta clara: diseño italiano, construcción con estándar alemán y precios contenidos. El CV 600 DB —donde DB significa Doppelbett, cama doble— aplica esa receta al formato más vendible del mercado: el furgón compacto con cama transversal trasera, cuatro plazas de viaje y todo lo necesario para escapadas largas sin depender de campings.

En medidas y habitabilidad, la ficha del distribuidor para una unidad 2026 anota 5.990 mm de largo, 2.050 mm de ancho y 2.650 mm de alto, con 3.500 kg de MMA. Son las cotas del Ducato L3H2, el «punto dulce» del camper: lo bastante corto para moverse por pueblos y ciudades, lo bastante largo para una cama transversal de adulto y un baño usable. La distribución DB coloca la cama doble al fondo, en sentido transversal, con el baño compacto a un lado y la cocina y el salón en la zona central-delantera. La cama queda siempre hecha —se entra por los pies o por el lateral según la versión— y durante el día el salón con asientos giratorios de cabina funciona como comedor y oficina. Es una implantación pensada para parejas: dos personas viajan y duermen con total comodidad, y las cuatro plazas homologadas permiten llevar invitados de forma legal aunque para dormir solo haya dos camas.

En tecnología y equipamiento, Etrusco articula la gama camper en dos series: la CV Fiat y la CV Plus, y el CV 600 DB se beneficia del famoso paquete «Complete Selection», el «todo incluido» de la marca que agrupa el pack de chasis, el pack de diseño, el pack confort, la edición de diseño type X (ambiente Emilia, puertas de armario en magnolia brillo), el pack multimedia con pantalla y cámara trasera, ventanas con marco, toldo y preinstalación solar. La nota de prensa oficial de la serie Plus detalla además la iluminación LED indirecta, los numerosos puertos USB y las llantas de aleación de 16 pulgadas de serie. El resultado es un camper que sale del concesionario muy completo sin tener que tachar una lista interminable de opciones, que es donde muchos competidores engordan el precio final.

En camas y plazas, la protagonista es la cama doble transversal trasera, con somier de láminas y colchón de buen grosor; la prensa oficial la describe como «cozy transverse bed». Las medidas rondan los 190 x 150 cm según las fichas de los distribuidores, válida para dos adultos. No hay camas adicionales: es un dos plazas para dormir honesto, sin dinette convertible que prometa lo que no cumple. Las cuatro plazas de viaje llevan cinturón y el salón admite cuatro comensales.

En mecánica, el motor de serie es el Fiat Ducato 2.2 MultiJet de 103 kW (140 CV) con cambio manual, y la marca ofrece como opción el 2.2 de 130 kW (180 CV) asociado al cambio automático, según su nota de prensa oficial. El chasis es el Light de Fiat, con los asistentes habituales (ESP, Hill Holder, control de crucero) y el paquete de chasis de Etrusco que añade retrovisores eléctricos y calefactados, Traction+ y preinstalación de radio DAB. Es la mecánica más extendida del sector: recambios y mano de obra en cualquier punto de Europa.

En precio y red comercial en España, Etrusco no publica tarifa oficial española, por lo que el precio de esta ficha queda en null. Como referencia, la web oficial anuncia en Alemania la serie CV Fiat desde 55.799 € y la serie CV Plus desde 58.999 € (PVP recomendado alemán, consultado el 19/10/2026). En España la marca se distribuye a través de concesionarios del grupo Erwin Hymer; el precio final dependerá de si la unidad lleva el Complete Selection y del motor elegido, así que conviene pedir el desglose por escrito y comparar el coste con el Complete Selection frente a una unidad pelada más opciones sueltas.

Cómo lo verificamos: resumen oficial de gama en etrusco.com (modeloverview, con precios DE y número de distribuciones, consultado el 19/10/2026), notas de prensa oficiales de Etrusco sobre la serie Campervan Plus y sobre el nuevo CV 600 SB 2026, y fichas técnicas de distribuidores oficiales europeos para unidades CV 600 DB 2024-2026 (dimensiones, pesos, motor y plazas). Las páginas de detalle de etrusco.com no cargaron ese día por un fallo reiterado del servicio de lectura, así que cada dato lleva su fuente alternativa y lo no confirmado queda en null.

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
    galeria: [],
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
    imagen: "",
    imagenOficial: "",
    imagenInteriorOficial: "",
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
      "Modelo 2026 confirmado: ficha de expositor oficial de Etrusco en la feria NEC 2026 (findmyleisurevehicle.co.uk): gama I, variante 7400 QBC, integral (A Class), 4 plazas de viaje y 4 camas, precio UK desde 72.290 £. " +
      "Dimensiones 7400x2320x2950 mm, MMA 3500 kg (3650 kg opcional), motor Fiat Ducato 2.2 MultiJet 140 CV manual (180 CV automático opcional): fichas de distribuidores oficiales europeos para unidades 2024-2025. " +
      "Distribución QBC: cama queen trasera + gran cama abatible delantera + salón; los distribuidores describen parabrisas panorámico y ambiente Emilia/type X. " +
      "Gama oficial 2026 (etrusco.com): serie I Fiat desde 78.999 € (PVP Alemania, solo referencia; no hay tarifa ES). " +
      "Precio null en España: la marca no publica tarifa ES. " +
      "Sin fotos: el servicio de lectura web y el buscador de imágenes fallaron reiteradamente el 19/10/2026; queda pendiente que el coordinador las aporte.",
    curiosidades:
      "El Etrusco I 7400 QBC figura como modelo 2026 en la ficha oficial de expositor de Etrusco en la feria NEC de Birmingham: integral (clase A) sobre Fiat, con 4 plazas de viaje, 4 camas y precio de partida en Reino Unido de 72.290 £ (fuente: https://findmyleisurevehicle.co.uk/pdf/product/6527?signature=ddafc60dde5b001921aa9a749bba1693508385b8cf56123cd303acdafea1ea06, consultada el 19/10/2026).",
    descripcion: `El Etrusco I 7400 QBC es la puerta de entrada al mundo de las integrales sin salir del universo Etrusco: 7,40 metros de autocaravana integral sobre Fiat Ducato, con cama queen trasera, gran cama abatible delantera y ese parabrisas panorámico que convierte la cabina en un mirador. Si las perfiladas te parecen un compromiso y las integrales alemanas se escapan de presupuesto, el I 7400 QBC juega exactamente en ese hueco: presencia de integral, precio de Etrusco.

En medidas y habitabilidad, las fichas de los distribuidores anotan 7.400 mm de largo, 2.320 mm de ancho y 2.950 mm de alto, con 3.500 kg de MMA de serie (3.650 kg opcional). Son las cotas típicas de una integral familiar europea: se nota el salto desde un furgón, pero sigue siendo manejable con el carnet B. La distribución QBC combina una cama queen en la parte trasera —la «Q» de queen bed— con un salón central y una gran cama abatible sobre la cabina, además de cocina completa y un baño espacioso con ducha separada que los distribuidores describen como «baño de ambiente» con mampara y espacios de almacenaje. El parabrisas panorámico de la integral, sin el escalón de la perfilada, da una luminosidad y una sensación de amplitud que ninguna otra carrocería ofrece: conduces dentro de un ventanal.

En tecnología y equipamiento, la serie I de Etrusco comparte la filosofía de la marca: el paquete Complete Selection agrupa chasis, diseño, confort, edición type X con ambiente Emilia, multimedia con cámara trasera, ventanas con marco y preinstalación solar. Los distribuidores detallan además el salpicadero con inserciones Techno-Trim, el volante multifunción, el sistema Traction+ con ayuda al descenso y la calefacción Truma Combi 6 (versión E con apoyo eléctrico en algunas configuraciones). La célula, con paredes de 30 mm y buen aislamiento, está pensada para uso en tres estaciones sin complejos, y la marca ofrece el depósito de grises aislado como opción para quien viaje en invierno.

En camas y plazas, el I 7400 QBC homologa cuatro plazas de viaje y cuatro para dormir, según la ficha de expositor de la feria NEC 2026. La cama queen trasera es fija y siempre hecha, con somier de láminas; la cama abatible delantera, también de tamaño queen con somier de láminas de madera, se recoge en el techo durante el día y se baja por la noche con un mecanismo sencillo —los distribuidores la describen como «despertar como en una suite de hotel»—. Es la combinación ideal para dos parejas o para padres con dos hijos mayores: cada pareja tiene su cama de verdad y nadie duerme en la dinette.

En mecánica, el motor de serie es el Fiat Ducato 2.2 MultiJet de 103 kW (140 CV) con cambio manual, y existe la opción del 2.2 de 180 CV con cambio automático para quien quiera más reserva en autopista y puertos. El chasis es el Light de Fiat con la opción de subir la MMA a 3.650 kg, recomendable si se viaja a cuatro con el garaje lleno y el Complete Selection completo. Como en toda la gama, la mecánica es la más común del sector y el mantenimiento no tiene misterios.

En precio y red comercial en España, Etrusco no publica tarifa oficial española y el precio de esta ficha queda en null. Como referencias con fuente: la web oficial anuncia en Alemania la serie I Fiat desde 78.999 €, y la ficha de expositor británica parte de 72.290 £. En España los distribuidores del grupo Erwin Hymer trabajan la marca; al pedir presupuesto conviene aclarar si la unidad incluye el Complete Selection, qué motor monta y si la MMA es la de 3.500 o la de 3.650 kg, porque esas tres variables mueven el precio final de forma significativa.

Cómo lo verificamos: ficha oficial de expositor de Etrusco en la feria NEC 2026 (findmyleisurevehicle.co.uk, consultada el 19/10/2026), que confirma el I 7400 QBC como modelo 2026, integral, 4+4 plazas y precio UK; resumen oficial de gama en etrusco.com (precios DE y número de distribuciones); y fichas técnicas de distribuidores oficiales europeos para unidades 2024-2025 (dimensiones, pesos, motores y equipamiento). Las páginas de detalle de etrusco.com no cargaron el 19/10/2026 por un fallo reiterado del servicio de lectura; cada dato lleva su fuente y lo no confirmado queda en null.

Para quién es: para quien quiere una integral de verdad —parabrisas panorámico, presencia, habitabilidad— sin pagar el precio de una integral alemana premium, y para dos parejas o familias que necesitan cuatro camas reales con la queen trasera siempre hecha. No es para quien priorice la maniobrabilidad: 7,40 x 2,32 m se notan en pueblos y parkings. Tampoco para quien viaje casi siempre solo o en pareja y no vaya a usar la cama abatible: entonces una perfilada más corta y barata tiene más sentido.`,
    pros: [
      "Integral de verdad (parabrisas panorámico, célula completa) a precio de marca generalista.",
      "Cama queen trasera fija + gran cama abatible delantera: cuatro camas reales, cero dinettes.",
      "Modelo 2026 confirmado en la feria NEC: gama vigente con repuestos y red garantizados.",
      "Paquete Complete Selection: equipamiento resuelto de fábrica sin lista interminable de opciones.",
      "MMA de 3.500 kg de serie (3.650 kg opcional): se conduce con el carnet B.",
    ],
    contras: [
      "La marca no publica PVP en España: el precio hay que negociarlo con el distribuidor.",
      "7,40 m de integral se notan maniobrando: no es un vehículo para callejear.",
      "La cama abatible delantera, aunque amplia, obliga a recogerla cada mañana.",
      "El motor base de 140 CV puede quedarse justo a plena carga en puertos: valorar el 180 CV.",
      "Con el Complete Selection y cuatro ocupantes, conviene la MMA opcional de 3.650 kg.",
    ],
    opiniones: [],
    galeria: [],
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
