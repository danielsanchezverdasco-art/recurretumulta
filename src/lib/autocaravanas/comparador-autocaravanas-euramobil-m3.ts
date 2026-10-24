// Autocaravanas Euramobil — lote Merlín 3 (19/10/2026). Fusión de
// comparador-autocaravanas-euramobil-m3-w4.ts y
// comparador-autocaravanas-euramobil-m3-w5.ts.
// Fuentes w4: guía de prensa 2027 de Eura Mobil (outandaboutlive.co.uk, con imágenes
//   ©Eura Mobil), anuncios de distribuidores oficiales alemanes para unidades Profila T
//   726 EF 2026 (dimensiones, motor, MMA, equipamiento y precios de distribuidor).
// Fuentes w5: ficha técnica oficial Eura Mobil 2025 reproducida por Motorhomes & Caravans Ltd
//   (motorhomesandcaravansltd.co.uk/product/contura-ct-766-eb-2025/), nota de prensa oficial
//   Eura Mobil «European Innovation Award für den Contura» (euramobil.de/category/2021/),
//   exposé de concesionario con datos técnicos (caraworld.de, ID cw26296545), anuncios de
//   mobile.de para contraste. Verificado el 19/10/2026.
// Notas honestas: Eura Mobil no publica PVP oficial en España: precioDesde queda en
//   null y los precios de distribuidor alemán se citan solo como referencia con fuente.

import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_EURAMOBIL_M3: Autocaravana[] = [
  {
    id: "euramobil-profila-t-726-ef-2026-precio-ficha-tecnica",
    marca: "Euramobil",
    modelo: "Profila T 726 EF",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Eura Mobil no publica PVP oficial en España
    potenciaCv: 170, // Mercedes Sprinter 2.0 de 125 kW (fichas de distribuidor)
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
    imagen: "/media/euramobil-profila-t-726-ef-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/euramobil-profila-t-726-ef-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/euramobil-profila-t-726-ef-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7441, // mobile.de (unidad 2026): 7.441 mm; el distribuidor anota 7.450 mm
    anchoMm: 2330, // fichas de distribuidor: 2.330 mm
    altoMm: 2920, // fichas de distribuidor: 2.920 mm
    pesoKg: null,
    mmaKg: 4500, // fichas de distribuidor: 4.500 kg
    carnetNecesario: "C1", // MMA 4500 kg > 3500 kg
    cargaUtilKg: null, // la marca no la publica; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // salón cara a cara con 4 plazas de viaje (prensa especializada)
    plazasDormir: 4, // camas individuales traseras + plazas complementarias (distribuidor: 4 camas)
    parNm: null,
    traccion: null, // la marca no lo declara en las fuentes consultadas
    emisionesCo2: null,
    aprox: [],
    notas:
      "Modelo 2026 verificado en anuncios de distribuidores oficiales alemanes (Reisemobile Dülmen, MS-Reisemobile Münster): Mercedes Sprinter 2.0 de 125 kW (170 CV), cambio automático 9G-Tronic, 7.441 mm de largo, 2.330 mm de ancho, 2.920 mm de alto y MMA de 4.500 kg. " +
      "Distribución EF: camas individuales traseras de más de 2 m, salón cara a cara y baño con zona de vestidor (guía de prensa Eura Mobil 2027, outandaboutlive.co.uk). " +
      "Construcción: doble suelo calefactado, paneles GRP sin madera y calefacción de agua caliente Alde (prensa). " +
      "Precio null en España: Eura Mobil no publica tarifa ES; como referencia, los distribuidores alemanes anuncian unidades 2026 Comfort Level Edition en torno a 129.850-129.950 €. " +
      "Discrepancia menor: un anuncio (modix) anota 3 plazas para dormir frente a 4 en la mayoría de fichas; se adopta 4 y se declara aquí.  Precio: se deja sin dato porque Eura Mobil no publica una lista de precios abierta verificable: el precio base de sus modelos solo se ofrece a través de su configurador oficial en línea; sin tarifa oficial abierta verificable." +
      "Fotos verificadas visualmente el 19/10/2026 (worker V3-05): 3 fotos oficiales de prensa de Eura Mobil; la 4ª (trasera) es foto limpia del modelo exacto sin marcas.",
    curiosidades:
      "La gama Profila T existe también en versión «Freestyle»: el mismo concepto Mercedes pero aligerado hasta 3.500 kg de MMA sobre chasis Al-Ko optimizado, de modo que puede conducirse con el carnet B sin renunciar a las camas individuales traseras (fuente: guía de prensa Eura Mobil 2027, https://www.outandaboutlive.co.uk/motorhomes/news/buying-advice/eura-mobil-motorhomes-and-campervans-2027-essential-guide, consultada el 19/10/2026).",
    descripcion: `El Euramobil Profila T 726 EF es la perfilada alemana para quien no quiere oír hablar de compromisos: chasis Mercedes Sprinter, 170 CV con cambio automático de 9 velocidades, 4.500 kg de MMA y una célula construida como las grandes —doble suelo calefactado, paneles sin madera y calefacción de agua caliente Alde—. Eura Mobil lleva décadas en el segmento medio-alto alemán y la Profila T es su superventas: la perfilada de los que viajan mucho, en cualquier estación, y quieren que el vehículo aguante el ritmo durante años.

En medidas y habitabilidad, las fichas de los distribuidores para unidades 2026 anotan 7.441 mm de largo, 2.330 mm de ancho y 2.920 mm de alto, con una MMA de 4.500 kg que exige el carnet C1. Son cotas de perfilada grande, y se notan para bien dentro: la distribución EF combina un salón cara a cara —dos banquetas enfrentadas que la prensa destaca por su sensación de amplitud— con camas individuales traseras de poco más de dos metros de largo, un gran garaje bajo ellas y un baño que puede cerrarse para formar una zona de vestidor independiente. Es la implantación clásica centroeuropea para parejas exigentes: cada uno tiene su cama, su armario y su lado, sin tener que deshacer nada por la mañana, y el salón cara a cara invita a las sobremesas largas que en una dinette lateral no caben.

En tecnología y equipamiento, la Profila T 726 EF juega en otra liga respecto a las perfiladas de entrada. La construcción incluye doble suelo aislado y calefactado de 30 cm —el secreto para viajar en invierno sin que los pies se congelen—, paneles de carrocería en GRP sin madera (no hay madera que se pudra si entra humedad) y calefacción de agua caliente Alde, el sistema por radiadores que los caravanistas del norte consideran el mejor para el frío serio. El paquete Mondial para Mercedes añade los asientos Captain Chair de Aguti, la integración de smartphone con carga inalámbrica, el climatizador de cabina, el techo panorámico practicable Sun Roof, la claraboya Heki y la preinstalación solar, entre otros. Las unidades 2026 Comfort Level Edition que anuncian los distribuidores suman además batería de litio, toldo, cámara trasera y estabilizadores, configurando un vehículo listo para salir sin pasar por el taller de accesorios.

En camas y plazas, la ficha es de cuatro y cuatro: cuatro plazas de viaje en el salón cara a cara y cuatro para dormir. Las camas individuales traseras, de más de dos metros, son la cama principal —firme, siempre hecha, con colchones independientes—; las dos plazas restantes se obtienen del salón o de la cama abatible según configuración, válidas para nietos o invitados ocasionales. El garaje trasero, de generosa altura gracias a las camas elevadas, traga bicicletas, sillas y todo el equipo de invierno sin desmontar nada.

En mecánica no hay discusión: Mercedes Sprinter 2.0 diésel de 125 kW (170 CV) con el cambio automático 9G-Tronic. Es el conjunto que ha convertido a las perfiladas Mercedes en las favoritas de los grandes viajeros: empuje de sobra para los 4.500 kg incluso en puertos, cambio suave que no cansa en atascos y una red de servicio Mercedes en toda Europa. El chasis es el Al-Ko rebajado específico para autocaravanas, que baja el centro de gravedad y el escalón de acceso. El depósito de 92 litros y el consumo contenido del 2.0 le dan una autonomía digna para cruzar Europa sin repostar cada día.

En precio y red comercial en España, Eura Mobil no publica tarifa oficial española y el precio de esta ficha queda sin dato. Como referencia con fuente: los distribuidores alemanes anuncian unidades 2026 Comfort Level Edition entre 129.850 y 129.950 €. En España la marca tiene distribuidores oficiales —conviene localizar el más cercano porque el servicio postventa de una perfilada de este nivel importa tanto como el precio— y el presupuesto final variará mucho según los paquetes (Mondial, Mondial Plus, S) y el nivel Comfort. Quien venga de una perfilada de 3.500 kg debe tener claro el salto: aquí hace falta el C1 y el presupuesto de compra y mantenimiento es superior, pero a cambio se obtiene una autocaravana sin los límites de peso que asfixian a las de 3,5 toneladas.

Cómo lo verificamos: guía de prensa 2027 de Eura Mobil publicada por outandaboutlive.co.uk (con imágenes ©Eura Mobil, consultada el 19/10/2026), de donde salen la distribución, las medidas de las camas, el doble suelo, los paneles GRP y la calefacción Alde; y anuncios de distribuidores oficiales alemanes (Reisemobile Dülmen, MS-Reisemobile Münster) para unidades 2026, con motor, cambio, dimensiones, MMA, tapicería, decoración y precios. Las páginas de euramobil.de no cargaron el 19/10/2026 por un fallo reiterado del servicio de lectura; cada dato lleva su fuente y lo no confirmado queda sin dato.

Para quién es: para parejas viajeras de alto kilometraje que quieren una perfilada Mercedes para todo el año —incluido invierno serio—, con camas individuales de verdad, gran garaje y sin agobios de peso gracias a los 4.500 kg; y que ya tienen (o van a sacarse) el carnet C1. No es para quien solo tenga el carnet B —entonces la opción es la Profila T Freestyle de 3.500 kg—, ni para quien busque la perfilada más barata: esto es gama media-alta alemana y se paga. Tampoco para uso urbano: 7,44 m y 4,5 toneladas piden carretera abierta.`,
    pros: [
      "Mercedes Sprinter 170 CV + 9G-Tronic: la mecánica favorita de los grandes viajeros europeos.",
      "Doble suelo calefactado, paneles GRP sin madera y Alde: construida para el invierno de verdad.",
      "Camas individuales traseras de más de 2 m + salón cara a cara: la distribución centroeuropea perfecta para parejas.",
      "4.500 kg de MMA: se acabaron los agobios de peso de las perfiladas de 3,5 t.",
      "Paquetes Mondial muy completos: sale del concesionario lista para viajar sin taller de accesorios.",
    ],
    contras: [
      "Exige carnet C1: quien solo tenga el B no puede conducirla (existe la Freestyle de 3.500 kg).",
      "La marca no publica PVP en España: el precio se negocia con el distribuidor.",
      "7,44 m y 4,5 t: ni ciudad ni pistas; pide carretera y áreas amplias.",
      "Precio de distribuidor alemán en torno a 130.000 €: gama media-alta, no apta para todos los bolsillos.",
      "El mantenimiento Mercedes y los repuestos específicos cuestan más que en una Fiat.",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/euramobil-profila-t-726-ef-2026-precio-ficha-tecnica-oficial.webp", alt: "Eura Mobil Profila T 726 EF, vista exterior", ancho: 1800, alto: 1200 },
      { src: "/media/euramobil-profila-t-726-ef-2026-precio-ficha-tecnica-interior1.webp", alt: "Eura Mobil Profila T 726 EF, salón", ancho: 1400, alto: 934 },
      { src: "/media/euramobil-profila-t-726-ef-2026-precio-ficha-tecnica-interior2.webp", alt: "Eura Mobil Profila T 726 EF, baño", ancho: 1400, alto: 934 },
      { src: "/media/euramobil-profila-t-726-ef-2026-precio-ficha-tecnica-detalle.webp", alt: "Eura Mobil Profila T 726 EF, vista trasera", ancho: 728, alto: 546 },
    ],
    analisisSlug: "euramobil-profila-t-726-ef-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Mercedes Sprinter: revisión según indicador del vehículo (aprox. cada 2 años o 40.000 km)",
      revisiones: [
        { nombre: "Revisión base (Mercedes Sprinter 2.0)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 450 },
        { nombre: "Revisión célula Eura Mobil (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades, circuito Alde", costeAproxEur: 300 },
      ],
    },
  },
{
    id: "euramobil-contura-766-eb-2026-precio-ficha-tecnica",
    marca: "Eura Mobil",
    modelo: "Contura 766 EB",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Eura Mobil no publica PVP oficial para España
    potenciaCv: 170, // Mercedes-Benz Sprinter 2.0 (125 kW), cambio 9G-Tronic, según exposé técnico
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro 6 sobre Mercedes Sprinter
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/euramobil-contura-766-eb-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/euramobil-contura-766-eb-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/euramobil-contura-766-eb-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7844, // ficha técnica oficial Eura Mobil 2025
    anchoMm: 2322, // ficha técnica oficial Eura Mobil 2025
    altoMm: 2920, // ficha técnica oficial Eura Mobil 2025
    pesoKg: 3430, // masa en orden de marcha, ficha técnica oficial 2025
    mmaKg: 4500, // ficha técnica oficial Eura Mobil 2025
    carnetNecesario: "C1", // mmaKg > 3500 y <= 7500
    cargaUtilKg: null, // la marca no publica una cifra de carga útil; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4, // camas individuales traseras + transformación del salón
    parNm: null,
    traccion: null, // la ficha oficial no declara el tipo de tracción
    emisionesCo2: null,
    aprox: [],
    notas:
      "Datos de la ficha técnica oficial Eura Mobil 2025 (modelo Contura CT/T 766 EB), reproducida en motorhomesandcaravansltd.co.uk. Potencia 170 CV (125 kW) del Mercedes Sprinter 2.0 con cambio automático 9G-Tronic según exposé técnico de concesionario (caraworld.de). Precio: Eura Mobil no publica PVP oficial para España; queda sin dato. Carga útil: la marca no publica una cifra única; queda sin dato. Consumo, autonomía, par motor, emisiones de CO2 y capacidad de maletero: no publicados por el fabricante; quedan sin dato. Tracción: no declarada en la ficha oficial; queda sin dato. La garantía de 10 años de estanqueidad y 3 años de construcción de muebles procede de la nota de prensa oficial de Eura Mobil. Precio: se deja sin dato porque Eura Mobil no publica una lista de precios abierta verificable: el precio base de sus modelos solo se ofrece a través de su configurador oficial en línea; sin tarifa oficial abierta verificable.",
    curiosidades:
      "El Eura Mobil Contura sobre chasis Mercedes Sprinter ganó en 2021 el European Innovation Award en la categoría «Gesamtkonzept Reisemobil» (mejor concepto global de autocaravana): un jurado de 17 revistas especializadas de 15 países europeos lo eligió como el vehículo más innovador de su clase nada más presentarse. Fuente: nota de prensa oficial de Eura Mobil (https://www.euramobil.de/category/2021/).",
    descripcion: `El Eura Mobil Contura 766 EB es una perfilada de gama alta construida sobre la base del Mercedes-Benz Sprinter con chasis AL-KO, y representa la apuesta de Eura Mobil por llevar el lujo de sus integrales a un formato semi-integrado más aerodinámico y manejable. Con 7.844 mm de longitud, 2.322 mm de anchura y 2.920 mm de altura, se sitúa en el segmento superior del mercado: no es una autocaravana para quien busque discreción en un pueblo medieval, sino un salón rodante pensado para viajar largo y tendido por autopista con el confort de un pequeño apartamento. Su masa máxima autorizada de 4.500 kg la coloca irremediablemente en el terreno del carnet C1, un dato que conviene tener clarísimo antes de enamorarse de ella: con el carnet B no se puede conducir.

    En medidas y habitabilidad, el 766 EB juega sus cartas con inteligencia. La altura interior de 1.975 mm permite moverse con holgura incluso a personas altas, y el doble suelo continuo y calefactado —una seña de identidad de Eura Mobil— no solo aísla del frío, sino que aloja todas las instalaciones técnicas en un «sótano» protegido contra heladas, además de ofrecer huecos de almacenamiento accesibles desde el interior. La distribución EB apuesta por dos camas individuales traseras de 1.950 x 800 mm y 2.000 x 800 mm, la configuración favorita de las parejas que duermen a horas distintas o que simplemente valoran no tener que trepar por encima del otro a las tres de la mañana. Bajo esas camas, el garaje trasero de generosa altura admite bicicletas y todo el equipaje voluminoso de un viaje largo. El salón delantero, con su grupo de asientos de 1.150 x 1.050 mm, se transforma en una cama adicional de 1.900 x 1.000 mm, lo que eleva la capacidad nocturna a cuatro plazas y las diurnas con cinturón a cuatro.

    En tecnología y equipamiento, el Contura presume de un nivel impropio de su época de lanzamiento. La cabina Mercedes aporta el sistema multimedia MBUX de 10 pulgadas con navegación y cámara de marcha atrás de doble óptica, freno de estacionamiento eléctrico, climatizador automático Climatronic, control de distancia activo Distronic, asistente de mantenimiento de carril, asistente de señales de tráfico y faros LED de alto rendimiento. El paquete Luminary CT suma detalles como llantas de aleación de 17 pulgadas, retrovisores eléctricos, parrilla cromada, depósito de diésel de 92 litros, cristales aislantes con filtro de banda, la cúpula panorámica Starlight-Dome, ventilador de techo eléctrico, puerta de la célula con cierre centralizado en dos puntos y mosquitera, preinstalación solar y campana extractora. La calefacción es de agua caliente a gas, el sistema que mejor reparte el calor en vehículos de este tamaño, y el depósito de agua limpia es de 140 litros (100 litros en posición de marcha) con 88 litros de aguas grises.

    La cocina y el baño siguen la misma filosofía de «apartamento compacto». El baño cuenta con ventana propia, columna de ducha retroiluminada y puerta con inserción de caña, un guiño de diseño que Eura Mobil destaca en sus comunicados. Los armarios altos con formas cóncavas hacia el centro del vehículo y el revestimiento de la pared trasera del dormitorio con elementos cromados e iluminación indirecta crean un ambiente nocturno cuidado, muy lejos del plástico blanco funcional de las gamas de acceso. Los muebles, con refuerzos de perfiles de aluminio y construcción sin madera en paredes (tecnología de encolado de la «Sealed Structure»), explican la garantía de 10 años de estanqueidad de la célula y 3 años en la construcción del mobiliario, cifras que pocos fabricantes se atreven a firmar.

    En mecánica, el Mercedes Sprinter 2.0 de 170 CV asociado al cambio automático 9G-Tronic de nueve relaciones mueve con solvencia los 3.430 kg de masa en orden de marcha. No es un vehículo para correr —tampoco lo pretende—, pero el par del diésel Mercedes y la suavidad del convertidor de par hacen que los 4.500 kg de MMA se gestionen sin dramatismo en puertos y adelantamientos. La distancia entre ejes de 4.450 mm y los neumáticos 225/75 R16C contribuyen a una pisada estable, algo que se agradece cuando el viento lateral pega en una mole de 2,92 metros de alto. El consumo no lo publica el fabricante, pero con este peso y frontal conviene presupuestar cifras de dos dígitos por cada cien kilómetros.

    En precio y red comercial en España, hay que ser honestos: Eura Mobil no publica una tarifa oficial para el mercado español, por lo que no ofrecemos una cifra de partida. Como referencia, los concesionarios alemanes anuncian unidades nuevas del Contura 766 EB entre aproximadamente 119.800 y 153.579 euros según equipamiento y paquetes (precios de exposición y feria consultados en octubre de 2026, sin validez contractual para España). Eura Mobil cuenta con red de distribuidores oficiales en España, donde se puede configurar el vehículo con los paquetes Luminary, Luminary Plus y de asistentes a la conducción. Dado el posicionamiento premium y el precio, negociar la configuración exacta —tapicerías, toldo, batería de litio, aire acondicionado de techo— forma parte del proceso de compra.

    Cómo lo verificamos: las dimensiones, pesos, capacidades y distribución proceden de la ficha técnica oficial de Eura Mobil para el modelo 2025 (Contura CT/T 766 EB), contrastada con exposés técnicos de concesionarios alemanes que reproducen los datos de fábrica (motor 125 kW/170 CV, cambio 9G-Tronic, depósito de 92 litros, agua limpia de 140 litros). La información sobre el premio, la garantía y el concepto de construcción procede de notas de prensa oficiales de Eura Mobil. Todo verificado el 19 de octubre de 2026. Donde el fabricante no publica un dato (precio oficial en España, carga útil como cifra única, consumo, par motor, emisiones), lo hemos dejado sin dato y lo declaramos aquí en lugar de estimarlo.

    Para quién es: el Contura 766 EB encaja con parejas viajeras de poder adquisitivo alto que quieren una perfilada premium con camas gemelas, doble suelo calefactado y toda la tecnología de asistencia del Sprinter, y que ya tienen (o van a sacarse) el carnet C1. Es ideal para el «gran viaje» —una vuelta a Europa de meses, inviernos en el sur— donde el confort térmico y el espacio de almacenamiento marcan la diferencia. No es para quien busque una primera autocaravana económica, para quien solo tenga el carnet B, ni para quien priorice la agilidad en carreteras secundarias estrechas: 7,84 metros y 4,5 toneladas piden autopista y áreas amplias.`,
    pros: [
      "Camas individuales traseras de hasta 2.000 x 800 mm con gran garaje debajo: la distribución favorita de las parejas viajeras.",
      "Doble suelo continuo y calefactado con instalaciones protegidas contra heladas: confort térmico real en invierno.",
      "Base Mercedes Sprinter con MBUX, cambio 9G-Tronic y paquete completo de asistentes (Distronic, mantenimiento de carril).",
      "Garantía de 10 años de estanqueidad de la célula y 3 años en muebles, muy por encima de la media del sector.",
      "Galardonado con el European Innovation Award 2021 al mejor concepto global de autocaravana.",
    ],
    contras: [
      "MMA de 4.500 kg: exige carnet C1; queda descartada para conductores solo con el B.",
      "Eura Mobil no publica PVP oficial para España: el precio real solo se conoce configurando en concesionario.",
      "7,84 m de longitud y 2,92 m de altura: maniobrar y aparcar fuera de áreas preparadas exige experiencia.",
      "El consumo no está publicado y con este peso será elevado: hay que presupuestarlo en viajes largos.",
      "Los paquetes que la hacen brillar (Luminary Plus, asistentes, litio) encarecen notablemente la factura final.",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/euramobil-contura-766-eb-2026-precio-ficha-tecnica-oficial.webp", alt: "Eura Mobil Contura 766 EB, vista exterior", ancho: 1024, alto: 684 },
      { src: "/media/euramobil-contura-766-eb-2026-precio-ficha-tecnica-interior1.webp", alt: "Eura Mobil Contura 766 EB, interior", ancho: 800, alto: 600 },
      { src: "/media/euramobil-contura-766-eb-2026-precio-ficha-tecnica-interior2.webp", alt: "Eura Mobil Contura 766 EB, interior", ancho: 800, alto: 600 },
      { src: "/media/euramobil-contura-766-eb-2026-precio-ficha-tecnica-detalle.webp", alt: "Eura Mobil Contura 766 EB, detalle", ancho: 800, alto: 600 },
    ],
    analisisSlug: "euramobil-contura-766-eb-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Mercedes Sprinter: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Mercedes Sprinter)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 450 },
        { nombre: "Revisión célula Eura Mobil (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 280 },
      ],
    },
  },
];
