// Autocaravanas Knaus — lote Merlín 5 (19/10/2026).
// Fuentes: resumen técnico oficial de la gama SKY TI (documento del configurador oficial
// Knaus, ediciones 2025/2026, alojado por distribuidor), catálogo Knaus 2024 (leisurekingdom.co.uk,
// «one of the best-selling vehicles in its class»), crónica de la feria de Birmingham octubre 2026
// (donegalmotorhomes.com, cambio de chasis a VW Crafter en 2027) y anuncios de distribuidores
// alemanes con datos de la unidad IC-Line 2026. Verificado el 19/10/2026.
// Notas honestas: Knaus no publica tarifa oficial de precios para España ni Alemania;
// precioDesde queda sin dato y se indica como referencia el precio de entrada que publica un
// distribuidor alemán (desde 81.000 €). cargaUtilKg queda sin dato: la cifra varía por
// configuración (el distribuidor declara 381 kg de carga máxima en una unidad IC-Line 2026
// concreta). Las medidas 695x230x280 cm proceden del resumen técnico de distribuidor.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_KNAUS_M5: Autocaravana[] = [
  {
    id: "knaus-sky-ti-650-meg-2026-precio-ficha-tecnica",
    marca: "Knaus",
    modelo: "Sky TI 650 MEG",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Knaus no publica tarifa oficial en España/Alemania; distribuidor alemán indica precio de entrada desde 81.000 € para el 650 MEG
    potenciaCv: 140,
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
    imagen: "/media/knaus-sky-ti-650-meg-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/knaus-sky-ti-650-meg-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/knaus-sky-ti-650-meg-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6950, // resumen técnico de distribuidor alemán (gama SKY TI 2026)
    anchoMm: 2300,
    altoMm: 2800,
    pesoKg: 2960, // masa en vacío declarada en el resumen técnico de distribuidor (la unidad IC-Line 2026 declara 2.990 kg en vacío / 3.119 kg en orden de marcha)
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null, // no se publica de forma estable; el distribuidor declara 381 kg de carga máxima en una unidad IC-Line 2026 concreta
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 2,
    parNm: null,
    traccion: "delantera", // resumen técnico de distribuidor: tracción delantera (base Fiat Ducato)
    emisionesCo2: null,
    aprox: [],
    notas:
      "Datos del resumen técnico oficial de la gama SKY TI (documento del configurador oficial Knaus, ediciones 2025/2026): base Fiat Ducato 2.2 Multijet de 103 kW/140 CV con cambio manual de 6 velocidades (automático de 8 velocidades opcional), tracción delantera, dimensiones 695x230x280 cm, batería de habitáculo de 80 Ah, aguas grises de unos 95 litros y calefacción Truma Combi 6. Distribución 650 MEG: 4 plazas de viaje y 2 camas individuales traseras. Peso: el resumen de distribuidor declara 2.960 kg en vacío; una unidad Sky TI 650 MEG IC-Line 2026 anunciada por un distribuidor alemán declara 2.990 kg en vacío, 3.119 kg en orden de marcha y 381 kg de carga máxima.",
    curiosidades:
      "El catálogo oficial Knaus 2024 describe al Sky TI como «one of the best-selling vehicles in its class», uno de los más vendidos de su segmento (fuente: https://www.leisurekingdom.co.uk/resources/851f96204b50c4370b73eaba/2023/12/knaus-motorhomes-2024-brochure_compressed.pdf). El año-modelo 2026 es el último Sky TI sobre Fiat Ducato: para 2027 toda la gama pasa al chasis Volkswagen Crafter (fuente: https://donegalmotorhomes.com/news/knaus-at-the-motorhome-and-caravan-show-2026-nec-birmingham/).",
    descripcion: `El Knaus Sky TI 650 MEG es el punto de equilibrio de la gama Sky TI: la perfilada que se queda justo por debajo de los siete metros y que, con sus camas gemelas traseras, resume la filosofía de Knaus de ofrecer mucho espacio sin obligar al cliente a dar el salto a una integral. Es el modelo intermedio de la familia —entre el 650 MF de cama francesa y el 700 MEG de siete metros y medio— y probablemente el más sensato de los tres para quien viaja en pareja y quiere una autocaravana completa sin llevarse un vehículo excesivamente largo. El apellido MEG lo dice todo: camas individuales traseras (las «single beds» de la nomenclatura anglosajona), la distribución que más se vende en Europa para dos personas.

Con 6,95 metros de longitud, 2,30 de ancho y 2,80 de alto exterior, el 650 MEG se mueve en las medidas clásicas de la perfilada europea de gama media. No es estrecho como los slim de 2,10 o 2,20 metros, y eso se agradece dentro: la célula respira, el salón tiene anchura de verdad y el baño no obliga a contorsionismos. La altura interior ronda los dos metros, de modo que la mayoría de los viajeros se mueven de pie sin agacharse. El precio de esa amplitud se paga al volante —2,30 metros piden atención en pueblos y carreteras secundarias—, pero a cambio el interior es el de una autocaravana «de verdad», no el de una furgoneta vitaminada.

La distribución es la clásica de camas gemelas: dos camas individuales longitudinales en la parte trasera, con un gran garaje debajo accesible desde el interior y desde las trampillas exteriores. Es la configuración favorita de las parejas porque cada uno tiene su cama, nadie tiene que trepar por encima del otro para ir al baño de noche y el garaje queda libre para bicicletas, sillas y todo el equipaje voluminoso. Delante, el salón con asientos enfrentados acoge a cuatro personas de día, y las butacas de la cabina —las originales del Ducato con fundas a medida— giran para integrarse al conjunto. La cocina es de tres fuegos con fregadero encastrado y el frigorífico ronda una capacidad correcta para dos personas en ruta. El baño, situado en posición central, combina ducha, lavabo y WC de casete en un espacio razonable para un vehículo de estas medidas.

En mecánica no hay sorpresas, y eso es una virtud: la base es el Fiat Ducato 2.2 Multijet de 103 kW (140 CV), el motor que mueve a media Europa autocaravanista, con cambio manual de seis velocidades de serie y el automático de ocho relaciones con convertidor de par como opción cada vez más demandada. La tracción es delantera, la MMA es de 3.500 kg —se conduce con el carnet B— y la masa en vacío declarada ronda los 2.960 kg, lo que deja un margen de carga razonable para una pareja con equipamiento normal. La dotación de serie incluye batería de habitáculo de 80 Ah, calefacción Truma Combi 6 y depósito de aguas grises de unos 95 litros: lo esencial bien resuelto, sin experimentos.

Donde el Sky TI 650 MEG marca diferencias es en el acabado y en la construcción. Knaus Tabbert lleva décadas afinando sus células: muebles con tecnología de espigado, paredes sándwich con revestimiento inferior de GFK resistente a la humedad, ventanas enmarcadas y una garantía de estanqueidad que da tranquilidad a largo plazo. El diseño interior, con su iluminación ambiental y sus maderas claras, tiene ese aire «apartamento» que la marca cultiva desde hace años. No es el interior más vanguardista del mercado, pero es cálido, funcional y envejece bien, que es lo que importa cuando el vehículo va a hacer decenas de miles de kilómetros.

En precio hay que ser honestos: Knaus no publica tarifa oficial, ni en España ni en Alemania, así que el campo de precio queda sin dato. Como referencia verificada, un distribuidor alemán sitúa el precio de entrada del Sky TI 650 MEG desde 81.000 euros, y una unidad IC-Line 2026 —el acabado especial con estética negra/cromada, automático de ocho velocidades y paquete completo— se anuncia en el entorno de los 105.000 euros antes de descuentos. En España se vende a través de la red de distribuidores oficiales de Knaus Tabbert, donde cada unidad se cotiza según configuración: conviene pedir el presupuesto por escrito con la motorización y los paquetes cerrados, porque los opcionales mueven mucho la cifra final.

Cómo lo verificamos: los datos técnicos proceden del documento del configurador oficial de Knaus para la gama SKY TI (ediciones 2025/2026), del catálogo oficial Knaus 2024 y de los resúmenes técnicos publicados por distribuidores alemanes, contrastados con la crónica de la feria de Birmingham de octubre de 2026 para el cambio de chasis de 2027. Todo verificado el 19/10/2026. Lo que la marca no publica —precio oficial, carga útil exacta por configuración, consumos— queda sin dato y así se declara.

Para quién es: ideal para parejas que quieren una perfilada de tamaño medio con camas gemelas de verdad, garaje grande y cuatro plazas de viaje, sin llegar a los 7,5 metros del 700 MEG. También para quienes valoran la red de servicio del Fiat Ducato y una marca con gran valor de reventa. No es para familias (solo dos camas), ni para quien necesite una célula estrecha para callejear —con 2,30 metros de ancho hay que elegir bien las rutas—, ni para quien busque el precio más bajo del segmento: el Sky TI se posiciona en la gama media-alta y lo refleja en la tarifa.`,
    pros: [
      "El equilibrio de la gama Sky TI: 6,95 m con camas gemelas traseras y garaje grande",
      "Uno de los modelos más vendidos de su clase según el catálogo oficial Knaus 2024",
      "Base Fiat Ducato 140 CV con enorme red de servicio en toda Europa; se conduce con carnet B",
      "Construcción Knaus Tabbert contrastada: sándwich con GFK, ventanas enmarcadas, garantía de estanqueidad",
      "Automático de 8 velocidades opcional y acabado especial IC-Line muy equipado",
    ],
    contras: [
      "Knaus no publica tarifa oficial: el precio real solo se conoce pidiendo presupuesto",
      "Con 2,30 m de ancho no es la más ágil en pueblos y carreteras estrechas",
      "Solo 2 plazas para dormir: no sirve para familias ni para invitados",
      "La carga útil varía mucho según configuración; hay que calcularla antes de firmar",
      "El modelo 2026 es el último sobre Fiat: en 2027 la gama pasa al VW Crafter",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/knaus-sky-ti-650-meg-2026-precio-ficha-tecnica-oficial.webp", alt: "Knaus Sky TI 650 MEG, vista exterior", ancho: 1600, alto: 1064 },
      { src: "/media/knaus-sky-ti-650-meg-2026-precio-ficha-tecnica-interior1.webp", alt: "Knaus Sky TI 650 MEG, cocina y camas vistas desde el salón", ancho: 800, alto: 600 },
      { src: "/media/knaus-sky-ti-650-meg-2026-precio-ficha-tecnica-interior2.webp", alt: "Knaus Sky TI 650 MEG, dormitorio con camas gemelas", ancho: 1600, alto: 1200 },
      { src: "/media/knaus-sky-ti-650-meg-2026-precio-ficha-tecnica-detalle.webp", alt: "Knaus Sky TI 650 MEG, plano de distribución", ancho: 776, alto: 341 },
    ],
    analisisSlug: "knaus-sky-ti-650-meg-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 48.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Knaus (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
