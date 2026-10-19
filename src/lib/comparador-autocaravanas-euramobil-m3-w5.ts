// Autocaravanas Eura Mobil — lote Merlín 3 (19/10/2026).
// Fuentes: ficha técnica oficial Eura Mobil 2025 reproducida por Motorhomes & Caravans Ltd
// (https://motorhomesandcaravansltd.co.uk/product/contura-ct-766-eb-2025/),
// nota de prensa oficial Eura Mobil «European Innovation Award für den Contura»
// (https://www.euramobil.de/category/2021/), exposé de concesionario con datos
// técnicos (caraworld.de, ID cw26296545), anuncios de mobile.de para contraste.
// Verificado el 19/10/2026.
// Notas honestas: Eura Mobil no publica PVP oficial para España (precioDesde = null;
// los concesionarios alemanes anuncian unidades nuevas entre 119.800 € y 153.579 €).
// La carga útil no la publica la marca como cifra única (cargaUtilKg = null; prohibido
// calcularla). Consumo, autonomía y par motor no publicados por el fabricante.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_EURAMOBIL_M3: Autocaravana[] = [
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
      "Datos de la ficha técnica oficial Eura Mobil 2025 (modelo Contura CT/T 766 EB), reproducida en motorhomesandcaravansltd.co.uk. Potencia 170 CV (125 kW) del Mercedes Sprinter 2.0 con cambio automático 9G-Tronic según exposé técnico de concesionario (caraworld.de). Precio: Eura Mobil no publica PVP oficial para España; queda en null. Carga útil: la marca no publica una cifra única; queda en null. Consumo, autonomía, par motor, emisiones de CO2 y capacidad de maletero: no publicados por el fabricante; quedan en null. Tracción: no declarada en la ficha oficial; queda en null. La garantía de 10 años de estanqueidad y 3 años de construcción de muebles procede de la nota de prensa oficial de Eura Mobil.",
    curiosidades:
      "El Eura Mobil Contura sobre chasis Mercedes Sprinter ganó en 2021 el European Innovation Award en la categoría «Gesamtkonzept Reisemobil» (mejor concepto global de autocaravana): un jurado de 17 revistas especializadas de 15 países europeos lo eligió como el vehículo más innovador de su clase nada más presentarse. Fuente: nota de prensa oficial de Eura Mobil (https://www.euramobil.de/category/2021/).",
    descripcion: `El Eura Mobil Contura 766 EB es una perfilada de gama alta construida sobre la base del Mercedes-Benz Sprinter con chasis AL-KO, y representa la apuesta de Eura Mobil por llevar el lujo de sus integrales a un formato semi-integrado más aerodinámico y manejable. Con 7.844 mm de longitud, 2.322 mm de anchura y 2.920 mm de altura, se sitúa en el segmento superior del mercado: no es una autocaravana para quien busque discreción en un pueblo medieval, sino un salón rodante pensado para viajar largo y tendido por autopista con el confort de un pequeño apartamento. Su masa máxima autorizada de 4.500 kg la coloca irremediablemente en el terreno del carnet C1, un dato que conviene tener clarísimo antes de enamorarse de ella: con el carnet B no se puede conducir.

    En medidas y habitabilidad, el 766 EB juega sus cartas con inteligencia. La altura interior de 1.975 mm permite moverse con holgura incluso a personas altas, y el doble suelo continuo y calefactado —una seña de identidad de Eura Mobil— no solo aísla del frío, sino que aloja todas las instalaciones técnicas en un «sótano» protegido contra heladas, además de ofrecer huecos de almacenamiento accesibles desde el interior. La distribución EB apuesta por dos camas individuales traseras de 1.950 x 800 mm y 2.000 x 800 mm, la configuración favorita de las parejas que duermen a horas distintas o que simplemente valoran no tener que trepar por encima del otro a las tres de la mañana. Bajo esas camas, el garaje trasero de generosa altura admite bicicletas y todo el equipaje voluminoso de un viaje largo. El salón delantero, con su grupo de asientos de 1.150 x 1.050 mm, se transforma en una cama adicional de 1.900 x 1.000 mm, lo que eleva la capacidad nocturna a cuatro plazas y las diurnas con cinturón a cuatro.

    En tecnología y equipamiento, el Contura presume de un nivel impropio de su época de lanzamiento. La cabina Mercedes aporta el sistema multimedia MBUX de 10 pulgadas con navegación y cámara de marcha atrás de doble óptica, freno de estacionamiento eléctrico, climatizador automático Climatronic, control de distancia activo Distronic, asistente de mantenimiento de carril, asistente de señales de tráfico y faros LED de alto rendimiento. El paquete Luminary CT suma detalles como llantas de aleación de 17 pulgadas, retrovisores eléctricos, parrilla cromada, depósito de diésel de 92 litros, cristales aislantes con filtro de banda, la cúpula panorámica Starlight-Dome, ventilador de techo eléctrico, puerta de la célula con cierre centralizado en dos puntos y mosquitera, preinstalación solar y campana extractora. La calefacción es de agua caliente a gas, el sistema que mejor reparte el calor en vehículos de este tamaño, y el depósito de agua limpia es de 140 litros (100 litros en posición de marcha) con 88 litros de aguas grises.

    La cocina y el baño siguen la misma filosofía de «apartamento compacto». El baño cuenta con ventana propia, columna de ducha retroiluminada y puerta con inserción de caña, un guiño de diseño que Eura Mobil destaca en sus comunicados. Los armarios altos con formas cóncavas hacia el centro del vehículo y el revestimiento de la pared trasera del dormitorio con elementos cromados e iluminación indirecta crean un ambiente nocturno cuidado, muy lejos del plástico blanco funcional de las gamas de acceso. Los muebles, con refuerzos de perfiles de aluminio y construcción sin madera en paredes (tecnología de encolado de la «Sealed Structure»), explican la garantía de 10 años de estanqueidad de la célula y 3 años en la construcción del mobiliario, cifras que pocos fabricantes se atreven a firmar.

    En mecánica, el Mercedes Sprinter 2.0 de 170 CV asociado al cambio automático 9G-Tronic de nueve relaciones mueve con solvencia los 3.430 kg de masa en orden de marcha. No es un vehículo para correr —tampoco lo pretende—, pero el par del diésel Mercedes y la suavidad del convertidor de par hacen que los 4.500 kg de MMA se gestionen sin dramatismo en puertos y adelantamientos. La distancia entre ejes de 4.450 mm y los neumáticos 225/75 R16C contribuyen a una pisada estable, algo que se agradece cuando el viento lateral pega en una mole de 2,92 metros de alto. El consumo no lo publica el fabricante, pero con este peso y frontal conviene presupuestar cifras de dos dígitos por cada cien kilómetros.

    En precio y red comercial en España, hay que ser honestos: Eura Mobil no publica una tarifa oficial para el mercado español, por lo que no ofrecemos una cifra de partida. Como referencia, los concesionarios alemanes anuncian unidades nuevas del Contura 766 EB entre aproximadamente 119.800 y 153.579 euros según equipamiento y paquetes (precios de exposición y feria consultados en octubre de 2026, sin validez contractual para España). Eura Mobil cuenta con red de distribuidores oficiales en España, donde se puede configurar el vehículo con los paquetes Luminary, Luminary Plus y de asistentes a la conducción. Dado el posicionamiento premium y el precio, negociar la configuración exacta —tapicerías, toldo, batería de litio, aire acondicionado de techo— forma parte del proceso de compra.

    Cómo lo verificamos: las dimensiones, pesos, capacidades y distribución proceden de la ficha técnica oficial de Eura Mobil para el modelo 2025 (Contura CT/T 766 EB), contrastada con exposés técnicos de concesionarios alemanes que reproducen los datos de fábrica (motor 125 kW/170 CV, cambio 9G-Tronic, depósito de 92 litros, agua limpia de 140 litros). La información sobre el premio, la garantía y el concepto de construcción procede de notas de prensa oficiales de Eura Mobil. Todo verificado el 19 de octubre de 2026. Donde el fabricante no publica un dato (precio oficial en España, carga útil como cifra única, consumo, par motor, emisiones), lo hemos dejado en null y lo declaramos aquí en lugar de estimarlo.

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
