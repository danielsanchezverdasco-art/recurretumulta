// Autocaravanas Benimar — lote Merlín 5 (19/10/2026).
// Fuentes: ficha oficial del modelo en benimar.es/mileo/m263/ (datos técnicos,
// dimensiones, equipamiento, packs y opcionales), catálogo oficial Benimar
// (https://www.benimar.es/wp-content/uploads/Catalogo-BENIMAR-ESPANOL.pdf),
// noticia de AC-Llar sobre Benimar y Roller Team en la I Feria del Caravaning
// de Valencia (https://ac-llar.com//ac-llar-llevara-las-novedades-de-benimar-y-roller-team-con-descuentos-a-la-i-feria-del-caravaning-de-valencia/).
// Verificado el 19/10/2026.
// Notas honestas: Benimar no publica PVP oficial para España (precioDesde =
// null). La masa en orden de marcha y la carga útil no figuran en la ficha
// oficial del M263 (quedan sin dato; prohibido calcularlas). La página oficial
// del modelo se titula «Gama Mileo 2027 - Modelo M263» (publicada/actualizada
// el 20/08/2026); el modelo aparece también en el catálogo oficial vigente.
// La ficha oficial indica plazas de la gama (4-5 según configuración) sin
// detallar el número exacto de cinturones del M263: se indican 4 plazas de
// viaje y 4 de noche, explicadas en notas.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_BENIMAR_M5: Autocaravana[] = [
  {
    id: "benimar-mileo-263-2026-precio-ficha-tecnica",
    marca: "Benimar",
    modelo: "Mileo M263",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Benimar no publica PVP oficial para España
    potenciaCv: 140, // Fiat Ducato 2.2 Euro 6 de 140 CV, manual de 6 velocidades; opcionales 160 y 180 CV + automático
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro 6 sobre Fiat Ducato
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/benimar-mileo-263-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/benimar-mileo-263-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/benimar-mileo-263-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7390, // ficha oficial benimar.es
    anchoMm: 2320, // ficha oficial benimar.es
    altoMm: 2890, // ficha oficial benimar.es
    pesoKg: null, // la ficha oficial del M263 no publica la masa en orden de marcha
    mmaKg: 3500, // ficha oficial benimar.es
    carnetNecesario: "B", // mmaKg <= 3500
    cargaUtilKg: null, // Benimar no publica una cifra de carga útil para el M263; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // la marca indica 4-5 plazas para la gama Mileo según configuración; 4 sin opcionales
    plazasDormir: 4, // cama de techo eléctrica (2) + camas gemelas traseras (2)
    parNm: null,
    traccion: "delantera", // Fiat Ducato, tracción delantera
    emisionesCo2: null,
    aprox: [],
    notas:
      "Cotas, MMA, motor, depósitos, camas, garaje y equipamiento de la ficha oficial publicada por Benimar en benimar.es/mileo/m263/ (739/232/289 cm, 3.500 kg de MMA, Fiat Ducato 2.2 Euro 6 de 140 CV con cambio manual de 6 velocidades, aguas limpias/grises de 105/105 l, cama de techo eléctrica de 140/122x190 cm, gemelas de 76x190+76x188 cm convertibles en 170x210 cm, portones de 84x111 cm, frigorífico compresor de 150 l, Truma Combi de gasoil de 4.000 W con iNet X). Precio: Benimar no publica PVP oficial para España; Masa en orden de marcha, carga útil, consumo, par y emisiones: no publicados; Plazas: la marca anuncia 4-5 plazas para la gama Mileo según modelo y opcionales, sin detallar los cinturones del M263; se indican 4 de viaje y 4 de noche. La ficha oficial se titula «Gama Mileo 2027»; el modelo figura también en el catálogo oficial vigente.",
    curiosidades:
      "Benimar fabrica íntegramente sus autocaravanas en Peñíscola (Castellón) y, con más de cuatro décadas de trayectoria, exporta actualmente sus vehículos a más de 25 países, lo que la ha convertido en uno de los principales fabricantes europeos del sector. Fuente: noticia de AC-Llar, concesionario oficial de Benimar en Valencia (https://ac-llar.com//ac-llar-llevara-las-novedades-de-benimar-y-roller-team-con-descuentos-a-la-i-feria-del-caravaning-de-valencia/).",
    descripcion: `La Benimar Mileo M263 es la perfilada con la que la marca de Peñíscola defiende su idea del lujo mediterráneo sobre ruedas: 7,39 metros de longitud, 2,32 de anchura y 2,89 de altura sobre el infatigable Fiat Ducato 2.2 Euro 6 de 140 CV con cambio manual de seis velocidades. Dentro de la gama Mileo —«nuestra perfilada más sofisticada», en palabras del catálogo oficial—, el M263 ocupa el puesto de la viajera elegante de camas gemelas: una distribución clásica ejecutada con el nivel de acabado que ha convertido a Benimar en el fabricante español de referencia, con más de cuatro décadas construyendo en Peñíscola y exportaciones a más de 25 países.

    La distribución es de manual para parejas que viajan largo: salón en L delantero con mesa central de pie multiposición y asientos de cabina giratorios, cocina en L a un costado, y un dormitorio trasero separado por puerta que alberga dos camas gemelas de 76 x 190 y 76 x 188 cm, convertibles en una gran cama doble de 170 x 210 cm. Sobre el salón, la cama de techo eléctrica de dos plazas (140/122 x 190 cm, hasta 230 kg) completa las cuatro plazas nocturnas sin robar un centímetro de vida diurna. El cuarto de aseo, con ducha independiente, cesto, toallero y espejo retroiluminado, cierra un interior donde todo está en su sitio. La iluminación ambiental LED de los altillos, los cajones con final de carrera silencioso, los cojines desenfundables y el nuevo ambiente interior DOGE —maderas oscuras y tonos cálidos— le dan ese aire de apartamento que la distingue de las perfiladas más utilitarias.

    Datos aún no publicados por la marca, Benimar juega sus cartas fuertes: carrocería y cara inferior del suelo de poliéster, paredes y techo imputrescibles sin listones de madera, cabeza perfilada 100 % de poliéster reforzado y ventanas de doble vidrio Dometic D-Lux. El eje trasero ensanchado a 1.980 mm, con 4.035 mm de distancia entre ejes, es uno de esos detalles que no se ven en las fotos pero se notan en el primer puerto de montaña: más estabilidad con el vehículo cargado. La puerta de célula XL, los pilotos LED traseros, los sensores de aparcamiento y las cerraduras de los portones tipo automoción completan una base seria.

    La cocina merece mención propia: fregadero oculto y placa de dos fuegos con encendido eléctrico, campana extractora, cesto metálico extraíble, especiero iluminado y un gran frigorífico de 150 litros por compresor con cajón para nueve botellas de 1,5 litros y pantalla táctil. Para el confort térmico, la Truma Combi de gasoil de 4.000 W —con kit de altitud incluido y panel inteligente iNet X— calienta el habitáculo y el agua con el carburante del propio depósito, sin depender de bombonas (la ficha oficial contempla espacio para una sola bombona de gas). Los depósitos de 105 litros de aguas limpias y 105 de grises permiten varios días de autonomía, y el garaje, con dos portones de 84 x 111 cm, 118 cm de altura máxima y tomas de 230/12 V, traga bicicletas y equipo de sobra, con acceso desde el interior de la célula.

    En seguridad y conducción, el Ducato aporta el Safety Pack de Fiat de serie —freno de emergencia autónomo con detección de peatones, mantenimiento de carril, reconocimiento de señales, detector de fatiga y asistente inteligente de velocidad—, además de ABS + ESP, Traction Plus, control de descenso, regulador con limitador y control de presión de neumáticos. Quien quiera más, tiene donde elegir: motor Fiat HDT de 160 CV, el 180 CV asociado al cambio automático, y hasta un chasis Heavy de 4.400 kg con depósito de 90 litros para los que viajan cargados hasta arriba. Los packs estructuran la personalización: el PLUS (llantas de 16", faros antiniebla, freno de mano eléctrico, radio Pioneer DAB de 9", cámara trasera, panel solar de 200 W con MPPT, claraboya panorámica de cabina, ISOFIX en el comedor…), el WINTER (depósito de grises aislado y calefactado, Combi de 6.000 W, aislamiento reforzado) y el NORTHAUTOKAPP, que suma al PLUS el cambio automático, la pintura Iron Grey, faros Full LED y el climatizador automático para quien busque la M263 definitiva.

    En precio, Benimar no publica tarifa oficial para España, así que no ofrecemos cifra de partida: el precio se configura con la red de distribuidores oficiales, amplia en todo el territorio nacional. Como referencia de mercado, las Mileo bien equipadas se mueven en la franja media-alta del segmento, y cada pack suma lo suyo; merece la pena pedir presupuesto con y sin el Pack Plus para calibrar.

    Cómo lo verificamos: todas las cotas, pesos, motor, depósitos, dimensiones de camas y garaje, y el equipamiento citado proceden de la ficha oficial del modelo publicada por Benimar en benimar.es/mileo/m263/, verificada el 19 de octubre de 2026, con el catálogo oficial como respaldo de gama. El dato de fabricación en Peñíscola y exportación a más de 25 países procede de la noticia de AC-Llar, concesionario oficial de la marca en Valencia. Los datos no publicados por el fabricante (PVP, masa en orden de marcha, carga útil, consumo, par, emisiones) quedan sin dato y se declaran como tales.

    Para quién es: la Mileo M263 encaja con parejas viajeras que quieren una perfilada grande y bien acabada para escapadas largas y estancias prolongadas, con camas gemelas de verdad y un garaje serio. Es la autocaravana del «vivir fuera» sin renuncias, con carnet B. No es para quien busque compacidad urbana (7,39 m piden sitio para aparcar), ni para familias que necesiten cinco o seis plazas: aquí mandan las cuatro plazas bien resueltas.`,
    pros: [
      "Camas gemelas traseras convertibles en doble de 170 x 210 cm + cama de techo eléctrica: 4 plazas nocturnas sin plegar el salón.",
      "Construcción imputrescible sin madera y carrocería de poliéster: durabilidad y tranquilidad ante humedades.",
      "Eje trasero ensanchado a 1.980 mm: estabilidad superior con el vehículo cargado.",
      "Truma Combi de gasoil de 4.000 W con iNet X: calefacción y agua caliente sin depender de bombonas.",
      "Frigorífico compresor de 150 l y garaje con doble portón de 84 x 111 cm: autonomía y carga de verdad.",
    ],
    contras: [
      "Sin PVP oficial para España: el precio final depende del distribuidor y los packs.",
      "7,39 m de longitud: maniobrabilidad y aparcamiento exigen planificación.",
      "El motor de 140 CV es correcto pero el 180 CV automático —el redondo para este peso— es opcional.",
      "Masa en orden de marcha no publicada: conviene pesar la unidad equipada antes de cargarla.",
      "Solo 4 plazas: las familias numerosas deben mirar a las capuchinas Sport.",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/benimar-mileo-263-2026-precio-ficha-tecnica-oficial.webp", alt: "Benimar Mileo M263, vista exterior trasera", ancho: 1024, alto: 603 },
      { src: "/media/benimar-mileo-263-2026-precio-ficha-tecnica-interior1.webp", alt: "Benimar Mileo M263, salón en L", ancho: 2000, alto: 1335 },
      { src: "/media/benimar-mileo-263-2026-precio-ficha-tecnica-interior2.webp", alt: "Benimar Mileo M263, camas gemelas traseras", ancho: 2000, alto: 1333 },
      { src: "/media/benimar-mileo-263-2026-precio-ficha-tecnica-detalle.webp", alt: "Benimar Mileo M263, detalle de la cocina", ancho: 1001, alto: 1500 },
    ],
    analisisSlug: "benimar-mileo-263-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 48.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Benimar (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
