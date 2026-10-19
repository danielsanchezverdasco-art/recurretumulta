// Autocaravanas Laika — lote Merlín 4 (19/10/2026).
// Fuentes: findmyleisurevehicle.co.uk (catálogo NEC 2026), exposé de caraworld.de,
// anuncio de annonces-caravaning.com, ficha de alfacaravan.it, camperlife.it. Verificado el 19/10/2026.
// Notas honestas: Laika no publica PVP oficial para España (precioDesde: null). La marca no publica
// carga útil (cargaUtilKg: null). Solo se localizaron 2 fotos verificables del H 4109 exacto
// (exterior + cocina); no hay interiores verificables del H 4109 no-DS, por eso imagenInteriorOficial queda vacía.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_LAIKA_M4: Autocaravana[] = [
  {
    id: "laika-ecovip-h-4109-2026-precio-ficha-tecnica",
    marca: "Laika",
    modelo: "Ecovip H 4109",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: null, // Laika no publica PVP oficial en España
    potenciaCv: 140, // Fiat Ducato 2.2 MultiJet 140 CV (exposé caraworld.de)
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/laika-ecovip-h-4109-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/laika-ecovip-h-4109-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "", // sin interiores verificables del H 4109 no-DS
    videoId: null,
    videoCanal: null,
    largoMm: 7400, // exposé caraworld.de
    anchoMm: 2250, // exposé caraworld.de
    altoMm: 2960, // exposé caraworld.de (altura interior 205 cm)
    pesoKg: 3344, // masa en orden de marcha según exposé caraworld.de
    mmaKg: 4400, // exposé caraworld.de (existe variante de 3.500 kg)
    carnetNecesario: "C1", // MMA 4.400 kg
    cargaUtilKg: null, // la marca no publica carga útil
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 cinturones (exposé caraworld.de)
    plazasDormir: 4, // camas individuales + abatible (exposé caraworld.de)
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: [],
    notas:
      "Dimensiones (7.400×2.250×2.960 mm), MRO 3.344 kg, MMA 4.400 kg, 4 cinturones, camas (individuales 206×82 y 202×82 + abatible 190×145), Truma Combi 6 E, frigorífico 153 l, agua 100 l / grises 100 l: exposé de caraworld.de. Motor Fiat Ducato 2.2 MultiJet 140 CV y cambio automático: exposé de caraworld.de. Variante de 3.500 kg de PTAC con vacío de 3.004 kg y carnet B: anuncio de annonces-caravaning.com (unidad nueva 2025). Doble suelo pasante y 4/4 plazas: ficha de alfacaravan.it. Precio de referencia £107.300, 3 plazas de viaje y 4 camas: catálogo NEC 2026 de findmyleisurevehicle.co.uk. Precio oficial en España: no publicado por Laika (null). Carga útil: la marca no la publica (null). Fotos: 2 verificables del H 4109 exacto (exterior y cocina); no se localizaron interiores verificables del H 4109 no-DS.",
    curiosidades:
      "Los Ecovip están pensados para el invierno: llevan calefacción canalizada de 6 kW con caldera que llega hasta la cabina, doble suelo, depósitos y garaje, y la instalación de agua va en posición anticongelante dentro del doble suelo calefactado (fuente: https://camperlife.it/notizie/laika-ecovip-un-nome-che-racchiude-tutta-lesperienza-di-laika-nei-camper.html).",
    descripcion: `La Laika Ecovip H 4109 es la integral de referencia de la casa toscana para quien quiere una autocaravana de clase A sin saltar a los tamaños y precios de las gamas altas. Laika, con fábrica en San Casciano in Val di Pesa, lleva décadas construyendo su reputación sobre dos pilares: el diseño italiano y una construcción pensada para usarse todo el año, incluido el invierno. El H 4109 encarna esa filosofía en un formato de 7,40 metros que sigue siendo manejable en carretera y en la mayoría de áreas de servicio europeas.

    Con 7.400 mm de largo, 2.250 mm de ancho y 2.960 mm de alto, el H 4109 se sitúa en el punto dulce de las integrales: lo bastante grande para un dormitorio trasero de verdad y un salón delantero digno de ese nombre, lo bastante compacta para no convertirse en un problema cada vez que hay que aparcar o girar en un pueblo. Al ser una integral pura (clase A), no hay cabina de furgoneta separada: el parabrisas panorámico forma parte del salón, lo que multiplica la sensación de espacio y la luminosidad cuando se está parado. La altura interior de 205 cm permite moverse con comodidad a personas altas.

    La distribución es la clásica que mejor funciona en este tamaño: salón delantero con asientos giratorios de cabina integrados, cocina lateral en el centro, cuarto de baño separado y dormitorio trasero con camas individuales (206×82 cm y 202×82 cm). Sobre el salón, una cama abatible de 190×145 cm completa las cuatro plazas para dormir. Es una configuración pensada para dos personas que viajan con desahogo y pueden recibir a dos invitados —o a dos niños— sin tener que montar y desmontar el salón cada noche, porque las camas traseras quedan siempre hechas. Los cuatro cinturones de seguridad permiten viajar a cuatro ocupantes legalmente.

    Donde el Ecovip H 4109 se distancia de muchas rivales es en la construcción invernal. Laika equipa la gama con calefacción canalizada de 6 kW (Truma Combi 6 E en las unidades documentadas) cuya caldera llega hasta la cabina, doble suelo técnico, depósitos y garaje calefactados, e instalación de agua en posición anticongelante dentro del doble suelo. Traducido a uso real: es una autocaravana con la que se puede plantear una semana de esquí o una ruta por el norte de Europa en febrero sin miedo a que se congelen las tuberías. El frigorífico de 153 litros, los depósitos de 100 litros de agua limpia y 100 litros de grises, y el garaje trasero completan una célula pensada para la autonomía.

    En mecánica, la unidad documentada monta el Fiat Ducato 2.2 MultiJet de 140 CV con cambio automático, la combinación más demandada hoy en el segmento. La masa en orden de marcha declarada es de 3.344 kg y la MMA de 4.400 kg, lo que exige carnet C1. Ojo, porque existe variante homologada en 3.500 kg (un anuncio francés de una unidad nueva de 2025 declara PTAC de 3.500 kg y vacío de 3.004 kg), que sí se puede conducir con el carnet B; conviene confirmar con el concesionario qué homologación trae la unidad concreta, porque cambia el carnet necesario y la carga útil disponible.

    En precio, Laika no publica tarifa oficial para España, así que no hay cifra de partida verificable y el campo queda en null. Como referencia orientativa, el catálogo británico del NEC 2026 lista el Ecovip H 4109 desde 107.300 libras. Es una referencia útil para situarlo —integral italiana de 7,4 m con 140 CV y automático—, pero no es un precio de venta en España: el precio final dependerá del concesionario, del equipamiento y de la homologación de peso elegida. Laika cuenta con red oficial de distribuidores en España, donde se puede configurar y pedir presupuesto cerrado.

    Cómo lo verificamos: las dimensiones, pesos, plazas, camas y equipamiento (Truma Combi 6 E, frigo 153 l, depósitos 100/100 l) proceden del exposé técnico de caraworld.de; el motor Fiat Ducato 2.2 de 140 CV y el cambio automático, de la misma fuente; la variante de 3.500 kg con carnet B, de un anuncio de unidad nueva en annonces-caravaning.com; el doble suelo pasante, de la ficha de alfacaravan.it; y el precio de referencia británico, del catálogo NEC 2026 publicado en findmyleisurevehicle.co.uk. Todo verificado el 19/10/2026. La curiosidad invernal procede de camperlife.it.

    Para quién es: para parejas que viajan mucho y quieren una integral de verdad —con su parabrisas panorámico y su habitabilidad— en un tamaño razonable, y que valoran poder usarla en invierno sin limitaciones. También para quien busca camas individuales traseras siempre hechas y un garaje serio. Para quién no es: para quien solo tenga carnet B y no quiera oír hablar del C1 (deberá buscar expresamente la versión de 3.500 kg y vigilar la carga útil), para quien busque el precio más bajo del segmento —una integral italiana de este nivel no lo es— y para quien necesite cinco o seis plazas: aquí son cuatro y cuatro.`,
    pros: [
      "Integral (clase A) de 7,40 m: parabrisas panorámico y gran sensación de espacio en parado",
      "Construcción pensada para el invierno: calefacción canalizada de 6 kW, doble suelo calefactado e instalación de agua anticongelante",
      "Camas individuales traseras (206×82 y 202×82 cm) siempre hechas + abatible de 190×145: 4 plazas reales para dormir",
      "Fiat Ducato 2.2 MultiJet 140 CV con cambio automático, la mecánica más demandada del segmento",
      "Garaje trasero y depósitos de 100+100 l: buena autonomía para viajar sin depender de áreas",
    ],
    contras: [
      "Laika no publica PVP oficial en España: imposible comparar precio de partida sin pedir presupuesto",
      "Con MMA de 4.400 kg exige carnet C1; la versión de 3.500 kg (carnet B) hay que buscarla expresamente",
      "2.250 mm de ancho y 2,96 m de alto: en ciudad y en carreteras estrechas se nota frente a un camper",
      "Solo 4 cinturones y 4 camas: no sirve para familias numerosas",
      "MRO de 3.344 kg: con la versión de 3.500 kg la carga útil real hay que calcularla con lupa antes de cargar",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/laika-ecovip-h-4109-2026-precio-ficha-tecnica-oficial.webp", alt: "Laika Ecovip H 4109, vista exterior", ancho: 728, alto: 530 },
      { src: "/media/laika-ecovip-h-4109-2026-precio-ficha-tecnica-detalle.webp", alt: "Laika Ecovip H 4109, cocina", ancho: 728, alto: 546 },
    ],
    analisisSlug: "laika-ecovip-h-4109-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Laika (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
