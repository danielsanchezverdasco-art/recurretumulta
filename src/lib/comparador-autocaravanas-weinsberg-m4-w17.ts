// Autocaravanas Weinsberg — lote Merlín 4 (19/10/2026).
// Fuentes: configurador oficial de Weinsberg (PDF generado el 05/12/2025 con los
// datos técnicos del CaraCore 650 MEG 2026, vía destinationmotorhomes.co.uk) +
// carablog.weinsberg.com (blog oficial de la marca) + anuncios coherentes de
// unidades 2025/2026 en caraworld.de y TruckScout24. Verificado el 19/10/2026.
// Notas honestas: Weinsberg no publica PVP base oficial accesible para el 650 MEG
// (los precios vistos son de distribuidores con extras): precioDesde queda en null.
// La carga útil no la publica la marca (prohibido calcularla). Consumos y emisiones:
// no publicados → null. Plazas de viaje: el configurador oficial indica 3; algunos
// anuncios de distribuidor indican 2 o 4 según configuración: se adopta el dato
// oficial (3) y se declara la discrepancia.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_WEINSBERG_M4: Autocaravana[] = [
  {
    id: "weinsberg-caracore-650-meg-2026-precio-ficha-tecnica",
    marca: "Weinsberg",
    modelo: "CaraCore 650 MEG",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: null, // Weinsberg no publica PVP base oficial; los precios vistos (p. ej. 91.500 €) son de distribuidores para otras versiones/con extras
    potenciaCv: 140, // Fiat Ducato 2.2 de 103 kW de serie; 180 CV opcional
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
    imagen: "/media/weinsberg-caracore-650-meg-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/weinsberg-caracore-650-meg-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/weinsberg-caracore-650-meg-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6990, // configurador oficial Weinsberg (PDF 05/12/2025)
    anchoMm: 2320, // 2.180 mm interior
    altoMm: 2790, // 2.000 mm interior
    pesoKg: 2928, // masa en orden de marcha según configurador (rango con tolerancia: 2.781–3.074 kg)
    mmaKg: 3500, // aumento a 3.650 kg posible
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no la publica; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 3, // configurador oficial: 3 personas en circulación (algunos distribuidores anuncian 2 o 4 según configuración)
    plazasDormir: 4, // camas gemelas traseras 2 x 201x87 + cama basculante 193x150
    parNm: null,
    traccion: "delantera", // front-wheel drive en el configurador oficial
    emisionesCo2: null,
    aprox: [],
    notas:
      "Datos técnicos del configurador oficial de Weinsberg para el CaraCore 650 MEG 2026 (PDF generado el 05/12/2025): 6.990 x 2.320 x 2.790 mm, 3.500 kg, masa en orden de marcha 2.928 kg (rango 2.781–3.074), 3 plazas de viaje, 4 de pernocta, batalla 380 cm, Fiat Ducato 140 CV. Camas (2 x 201x87 traseras + basculante 193x150), Truma Combi 6 (+E), frigo 142 l, agua 100 l, grises 95 l y batería 80 Ah verificados en anuncios coherentes de unidades 2025/2026. Weinsberg no publica PVP base oficial: precioDesde en null (el LP de 91.500 € visto en distribuidor corresponde al 650 MF con extras). Plazas de viaje: se adopta el dato oficial (3) frente a anuncios que indican 2 o 4.",
    curiosidades:
      "El CaraCore fue el primer integral de la historia de Weinsberg: la marca, conocida por sus perfiladas asequibles, se estrenó en el segmento de los totalmente carrozados con este modelo, pensado como «el mejor perfilado» por dentro y por fuera. Fuente: blog oficial de Weinsberg (https://carablog.weinsberg.com/der-caracore-moderner-vollintegrierter-fuer-alle-die-mehr-als-einen-ti-wollen/).",
    descripcion: `La Weinsberg CaraCore 650 MEG es la integral compacta de la marca alemana del grupo Knaus Tabbert, y tiene un lugar propio en la historia de la casa: fue el primer vehículo totalmente carrozado —integral de verdad, del paragolpes al capó— que Weinsberg puso en el mercado, como cuenta su blog oficial. La filosofía declarada era ambiciosa y muy Weinsberg a la vez: ofrecer la habitabilidad y la presencia de una integral con el manejo sencillo y la relación precio-equipamiento de una perfilada. El 650 MEG es la versión de 6,99 metros con camas gemelas traseras y cama basculante, el formato más demandado del segmento familiar.

En medidas y habitabilidad, el configurador oficial declara 6.990 mm de largo, 2.320 mm de ancho exterior (2.180 mm interior) y 2.790 mm de alto, con 2.000 mm de altura interior útil: veinte centímetros más baja por fuera que muchas integrales de la competencia, lo que se nota en los puentes, en el consumo y en la estabilidad con viento lateral. La masa máxima es de 3.500 kg —carnet B— con posibilidad de aumento a 3.650 kg, y la masa en orden de marcha oficial es de 2.928 kg con una tolerancia de producción declarada de ±5% (rango 2.781–3.074 kg), un ejercicio de transparencia poco habitual que Weinsberg publica en su configurador. La batalla es de 380 cm, generosa para 6,99 metros, lo que promete un buen aplomo en carretera.

La distribución MEG combina lo mejor de dos mundos: detrás, dos camas gemelas longitudinales de 201 x 87 cm cada una, siempre hechas y con acceso individual; delante, sobre el salón, la cama basculante de 193 x 150 cm que desciende por la noche. Entre medias, salón en L con asientos de cabina giratorios, cocina lateral completa y baño central con ducha separada. Es el esquema que permite viajar en pareja con camas de hotel cada noche y acoger a dos invitados más sin transformar nada: las cuatro plazas de pernocta están siempre disponibles. El garaje bajo las camas gemelas, con trampillas exteriores a ambos lados (80 x 110 cm de boca según distribuidor), traga el equipamiento voluminoso.

En tecnología y equipamiento, la lista del configurador 2026 es extensa y honesta. La calefacción y el agua caliente corren a cargo de la Truma Combi 6, con la variante E (mixta gas+electricidad) disponible; el frigorífico es de 142 litros; el agua limpia es de 100 litros y la grise de 95; la batería del habitáculo, de 80 Ah. El chasis Fiat incluye ESP, Hill Holder, ABS, control de estabilidad del remolque, frenada post-colisión, asistente de viento lateral y ayuda de tracción Traction+ con control de descenso. Los paquetes estructuran la oferta: el Pack Fiat-Weinsberg (llantas de 16'', asientos Captainchair giratorios, volante multifunción), el Styling Pack CaraCore (marco de faros y parrilla en negro brillo, llantas de aleación, adhesivos de diseño), el Smart Pack IV (claraboya de 70 x 50 con iluminación, oscurecedores de parabrisas y laterales, fundas a medida) y el Pack Media (navegador todo en uno, cámara trasera, head-up display). La puerta de célula es la Weinsberg Komfort, con cierre centralizado de una sola llave para todo el vehículo.

En camas y plazas hay un matiz que conviene declarar: el configurador oficial homologa 3 plazas de viaje, mientras que algunos distribuidores anuncian unidades con 2 o 4 cinturones según la configuración elegida. Es una horquilla real del modelo —la cuarta plaza suele ir ligada a opciones de banqueta— y conviene verificarla en la ficha de la unidad concreta antes de firmar. Las plazas para dormir son cuatro sin discusión: las gemelas traseras más la basculante delantera.

Mecánicamente, la base es el Fiat Ducato 2.2 de 140 CV (103 kW) con homologación Euro 6e-bis, disponible con cambio manual o con la automática de 8 velocidades por convertidor de par, la opción que elige la mayoría de compradores de integrales. Quien necesite más músculo tiene el 2.2 de 180 CV, también con automática, y la posibilidad de chasis de 4.000 kg ampliable a 4.400 kg para los que viajan muy cargados —eso sí, a partir de 3.500 kg entra en juego el carnet C1—. El depósito de gasóleo es de 90 litros en las unidades equipadas y la carga de remolque admitida es de 2.000 kg.

En precio y red comercial en España, Weinsberg no publica un PVP base oficial accesible para el 650 MEG, así que el precio queda honestamente en null: los 91.500 euros que algún distribuidor anuncia como «LP» corresponden al 650 MF (cama francesa) con un equipamiento concreto, no al MEG base, y mezclarlos sería faltar a la verdad. En España, Weinsberg se vende a través de la red de distribuidores del grupo Knaus Tabbert, con presencia en las principales provincias; como siempre en este segmento, el precio final depende del motor, el cambio y los paquetes, y conviene pedir oferta cerrada por escrito. La garantía es la legal europea más la de estanqueidad de la célula.

Cómo lo verificamos: las dimensiones (6.990 x 2.320 x 2.790 mm, interior 2.180 x 2.000 mm), la MMA (3.500 kg, ampliable a 3.650), la masa en orden de marcha (2.928 kg, rango 2.781–3.074), las plazas de viaje (3), las de pernocta (4), la batalla (380 cm), el motor (Fiat Ducato 140 CV, tracción delantera) y la dotación de chasis proceden del configurador oficial de Weinsberg (PDF generado el 05/12/2025 con datos versión 2025.12.04); las medidas de las camas (2 x 201x87 y basculante 193x150), la Truma Combi 6, el frigorífico de 142 l, los depósitos (100/95 l) y la batería de 80 Ah se verifican en anuncios coherentes de unidades 2025/2026 en caraworld.de y TruckScout24; el dato histórico (primer integral de Weinsberg) procede de su blog oficial. Carga útil, consumos y emisiones: no publicados → null.

Para quién es: la CaraCore 650 MEG encaja con parejas que quieren estrenarse en el mundo integral sin pagar una premium y sin renunciar a camas gemelas de verdad, y con familias de cuatro que valoran tener las cuatro camas siempre hechas en menos de 7 metros. Su altura contenida (2,79 m) la hace más llevadera que otras integrales en ruta. No es para quien necesite cinco plazas homologadas de viaje —el configurador dice tres y hay que verificar la unidad—, ni para quien busque el máximo lujo interior: el planteamiento Weinsberg es equipamiento inteligente a precio sensato, no maderas nobles ni tapicerías de diseño italiano. Y si se viaja con la célula a tope de extras, vigilar la báscula: con 3.500 kg de MMA y 2.928 kg en orden de marcha, el margen real lo marcan los ocupantes y el equipaje.`,
    pros: [
      "Primer integral de la historia de Weinsberg: estreno de la marca en el segmento con planteamiento de precio sensato",
      "Solo 2,79 m de alto exterior: más ágil y estable que la mayoría de integrales, mejor consumo teórico",
      "Camas gemelas de 201 x 87 siempre hechas más basculante de 193 x 150: cuatro camas sin transformar nada",
      "Transparencia en pesos: masa en orden de marcha con rango de tolerancia publicado en el configurador oficial",
      "Arsenal electrónico del Ducato de serie: ESP, asistente de viento lateral, control de remolque, frenada post-colisión",
    ],
    contras: [
      "3 plazas de viaje según el configurador oficial: verificar los cinturones de la unidad concreta antes de comprar",
      "Sin PVP base oficial publicado: el precio real lo fija cada distribuidor y hay que negociarlo",
      "80 Ah de batería de habitáculo: justos para viajar sin conexión eléctrica si no se amplía",
      "Menos de 7 metros con 4 camas: el baño y la cocina son correctos, no espaciosos",
      "Acabados funcionales de gama de acceso: bien resueltos, pero sin el refinamiento de integrales premium",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/weinsberg-caracore-650-meg-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Weinsberg CaraCore 650 MEG, vista exterior de la integral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/weinsberg-caracore-650-meg-2026-precio-ficha-tecnica-interior1.webp",
        alt: "Weinsberg CaraCore 650 MEG, salón delantero",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/weinsberg-caracore-650-meg-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Weinsberg CaraCore 650 MEG, camas gemelas traseras",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/weinsberg-caracore-650-meg-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Weinsberg CaraCore 650 MEG, detalle del habitáculo",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "weinsberg-caracore-650-meg-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Base Fiat Ducato: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de aire + filtro de gasóleo + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Weinsberg (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
    },
  },
];
