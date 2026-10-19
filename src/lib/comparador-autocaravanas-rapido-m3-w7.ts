// Autocaravanas Rapido — lote Merlín 3 (19/10/2026).
// Fuentes: https://www.feurs.ypocamp.fr/sites/default/files/node/annonce/field_pdf_vehicule/mb84247.pdf
// (ficha de distribuidor Rapido, modelo 2026), https://www.rapido-autocaravana.es/distributeur-camping-cars-rapido.php/360-2024/666F/360-2024/V55/360-2025/I96M/360-2025/V65-XL/autocaravana_integraux_serie-8f_896f.chtml ,
// https://www.alpacacamping.de/fahrzeuge/en/model/rapido-8f/ ,
// https://nzmcd.co.nz/reviews/motorhomes/rapido-8094df-8096-review/ . Verificado el 19/10/2026.
// Notas honestas: la web oficial rapido.fr no indexa página del 896F en la colección vigente; los datos
// técnicos proceden de la documentación 2026 de la red de distribuidores Rapido (Ypocamp) y de la ficha
// de producto de la serie 8F. Rapido no publica PVP oficial en España (precioDesde = null); la carga
// útil de 400 kg que figura en la ficha del distribuidor no es una publicación oficial de la marca, por
// lo que cargaUtilKg queda en null y se declara en huecos.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_RAPIDO_M3: Autocaravana[] = [
  {
    id: "rapido-896f-2026-precio-ficha-tecnica",
    marca: "Rapido",
    modelo: "896F",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: null, // Rapido no publica PVP oficial en España
    potenciaCv: 140, // Fiat Ducato 2.2 L y 140 CV
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
    imagen: "/media/rapido-896f-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/rapido-896f-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/rapido-896f-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7490, // ficha del distribuidor: 7,49 m
    anchoMm: 2350, // 2,35 m
    altoMm: 2890, // 2,89 m
    pesoKg: 3100, // ficha del distribuidor: peso en vacío 3.100 kg
    mmaKg: 3500, // PTAC 3.500 kg
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no la publica oficialmente (el distribuidor indica 400 kg)
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas en ficha de circulación
    plazasDormir: 4, // cama central + cama de cabina
    parNm: null,
    traccion: "delantera", // alpacacamping.de: "Power transmission: Front-wheel drive"
    emisionesCo2: null,
    aprox: [],
    notas: "Datos de la ficha 2026 de la red de distribuidores Rapido (Ypocamp: Fiat Ducato 2,2 L y 140 CV, integral, 4 plazas, 4 camas —cama central trasera + cama de cabina—, PTAC 3.500 kg, peso en vacío 3.100 kg, cambio automático, 7,49 x 2,35 x 2,89 m, 120 L de agua limpia, 120 L de grises, calefacción Truma) y de la ficha de producto de la serie 8F (carrocería 100 % poliéster antichoque, Truma Combi 6 diésel con mandos iNet X, garaje calefactado, 70 L de almacenaje bajo el suelo, ambientes Palatina/Aurora). La tracción delantera la declara alpacacamping.de para la serie 8F. Precio: Rapido no publica tarifa oficial (null); la ficha del distribuidor parte de 85.360 €, precio no oficial. Carga útil: la marca no la publica (null).",
    curiosidades: "Rapido no nació como fabricante de autocaravanas, sino como ebanistería: la fundó en 1948 el artesano Constant Rousseau, que fabricó su primera caravana extensible —más de 35.000 unidades en 30 años— antes de lanzar su primera autocaravana a principios de los 80; la primera integral de la marca no llegó hasta 1992. El 896F pertenece a la serie 8F, la gama alta de integrales de la casa. Fuente: https://nzmcd.co.nz/reviews/motorhomes/rapido-8094df-8096-review/",
    descripcion: `El Rapido 896F es una autocaravana integral de la serie 8F, la gama alta con la que la marca francesa compite en el segmento de los grandes ruteros: 7,49 metros de longitud, carrocería integral de una sola pieza, cama central trasera y todos los tics de las integrales premium —doble suelo, garaje calefactado y depósitos generosos— manteniendo la MMA en 3.500 kg para poder conducirla con el carnet B. Es el formato para quien quiere el máximo confort de marcha y de vida a bordo sin saltar a los pesos pesados.

    En dimensiones, la ficha 2026 de la red de distribuidores declara 7,49 metros de largo, 2,35 de ancho y 2,89 de alto. Es una integral grande pero todavía contenida: cabe en la mayoría de las áreas de servicio y no obliga a planificar cada rotonda, aunque sus 2,89 metros de altura exigen la atención habitual con ramas y puentes bajos. El PTAC es de 3.500 kg con un peso en vacío documentado de 3.100 kg; la carga útil de 400 kg que indica la ficha del distribuidor no es una publicación oficial de la marca, así que en esta ficha queda en null con la declaración honesta correspondiente: en la práctica, 400 kg para cuatro personas obligan a cargar con cabeza, sobre todo si se viaja con los depósitos llenos.

    La construcción es uno de los argumentos de Rapido: carrocería 100 % poliéster antichoque en techo, paredes y bajos, estructura del suelo de poliuretano y aislamiento de Styrofoam, con el doble suelo técnico que caracteriza a la serie 8F. Ese doble suelo no es un capricho: aísla, protege las instalaciones del frío y crea 70 litros de almacenaje adicional bajo el piso, accesibles desde el interior. El garaje trasero, calefactado e iluminado con barra LED en el techo, completa un conjunto pensado para viajar todo el año.

    La distribución del 896F es la clásica de las integrales familiares premium: salón delantero face-face con cabina integrada —el parabrisas panorámico de la integral convierte la conducción en una experiencia—, cocina en L bien equipada, cuarto de baño transversal con ducha separada y, al fondo, la cama central trasera, la disposición más cómoda para una pareja porque permite levantarse sin molestar al otro. La cuarta cama la aporta la cama de cabina escamoteable sobre el salón, de modo que el vehículo duerme a cuatro con total dignidad. Los ambientes interiores se ofrecen en dos líneas, Palatina —con madera maciza de arce y suelo de parqué oscuro— y Aurora —más clara y contemporánea—, ambas con iluminación ambiental 100 % LED en salón, cocina y dormitorio.

    En mecánica monta el Fiat Ducato 2,2 litros de 140 CV, en la unidad documentada con cambio automático, con pack de ayudas que incluye cámara de marcha atrás con pantalla integrada, Traction+ con control de descenso, station multimédia DAB Pioneer con Apple CarPlay y Android Auto, neumáticos all season 3PMSF y puerta del conductor con cerradura de dos puntos. La calefacción es la Truma Combi 6 —en la ficha de producto figura la versión diésel con mandos iNet X—, con 120 litros de agua limpia y 120 de grises, y arcón de gas para dos botellas de propano de 13 kg. La tracción es delantera, como declara la documentación de la serie.

    En el capítulo de precios, la honestidad de esta ficha es total: Rapido no publica PVP oficial en España y el precio queda en null. La ficha del distribuidor francés para el modelo 2026 parte de 85.360 euros antes de opciones, con la unidad expuesta documentada en 96.630 euros y precio promocional de 92.900 euros; son precios de distribuidor francés, no tarifa oficial, y sirven solo como referencia del posicionamiento: la serie 8F juega en la liga de las integrales premium. En España, Rapido se comercializa a través de su red de distribuidores, con presencia en las principales zonas caravanistas, y el precio final se configura en el concesionario con los packs —Select, Smart Fiat— y las opciones elegidas.

    Cómo lo verificamos: las medidas (7,49 x 2,35 x 2,89 m), las masas (PTAC 3.500 kg, vacío 3.100 kg), las plazas (4 en circulación, 4 para dormir), la mecánica (Fiat Ducato 2,2 L y 140 CV, cambio automático), los depósitos (120/120 L) y la calefacción Truma proceden de la ficha 2026 de la red de distribuidores Rapido (Ypocamp), consultada el 19/10/2026; la construcción (poliéster antichoque, doble suelo, 70 L bajo el piso, garaje calefactado), la Truma Combi 6 diésel con iNet X y los ambientes Palatina/Aurora proceden de la ficha de producto de la serie 8F en rapido-autocaravana.es; la tracción delantera, de alpacacamping.de. La web oficial rapido.fr no indexa página del 896F en la colección vigente, circunstancia que se declara. Precio y carga útil oficiales: la marca no los publica (null).

    Para quién es: ideal para parejas —o familias de cuatro— que quieren una integral premium con cama central, doble suelo y garaje calefactado para viajar todo el año, y que asumen conducir 7,49 metros a cambio del máximo confort. No es para quien busque ligereza de carga útil —los 400 kg oficiosos obligan a ser disciplinado—, ni para quien quiera precio cerrado en web: en Rapido el precio se negocia con el distribuidor y los packs.`,
    pros: [
      "Integral premium de 7,49 m con cama central trasera y cama de cabina: 4 camas cómodas",
      "Doble suelo técnico con 70 L extra y garaje calefactado: pensada para todo el año",
      "Carrocería 100 % poliéster antichoque con aislamiento Styrofoam",
      "Truma Combi 6 (diésel en ficha de producto) con 120/120 L de depósitos",
      "Se conduce con carnet B pese a su tamaño, con cambio automático disponible",
    ],
    contras: [
      "Rapido no publica PVP oficial en España ni carga útil oficial",
      "Carga útil oficiosa de 400 kg: justa para 4 personas con depósitos llenos",
      "Sin página oficial del modelo en la web vigente: conviene confirmar la gama 2026/2027",
      "2,89 m de altura: atención a ramas, puentes y parkings cubiertos",
      "El precio real depende de packs y opciones y se configura en el concesionario",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/rapido-896f-2026-precio-ficha-tecnica-oficial.webp", alt: "Rapido 896F, vista exterior", ancho: 2272, alto: 1096 },
      { src: "/media/rapido-896f-2026-precio-ficha-tecnica-interior1.webp", alt: "Rapido 896F, cama central", ancho: 800, alto: 600 },
      { src: "/media/rapido-896f-2026-precio-ficha-tecnica-interior2.webp", alt: "Rapido 896F, salón", ancho: 1600, alto: 1200 },
      { src: "/media/rapido-896f-2026-precio-ficha-tecnica-detalle.webp", alt: "Rapido 896F, detalle exterior", ancho: 1024, alto: 768 },
    ],
    analisisSlug: "rapido-896f-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato 2.2: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato 2.2)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Rapido (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
