// Autocaravanas Autostar — lote Merlín 4 (19/10/2026).
// Fuentes: ficha oficial del modelo Autostar Passion P730LC Lift (PDF del fabricante,
// autostar.fr): 7,39 × 2,31 × 2,92 m, Fiat Ducato 2,2 L 140 CV, PTAC 3.500 kg,
// PVOM 3.090 kg, 4/4/6 plazas, cama central XXL 150×198, frigo 175 L AES, Truma 6000;
// campingcarlesite.com (artículo «Autostar P730LC Lift Passion: le confort grand format»,
// 14/09/2017: precio de lanzamiento 64.990 € y ficha técnica de prensa).
// Verificado el 19/10/2026.
// Notas honestas: el P730LC Lift es un modelo de la colección 2018, descatalogado en la
// gama 2027 (sustituido por la gama NAEOS); no hay tarifa oficial vigente ni PVP para
// España, por lo que el precio indicado (64.990 €) es el precio de lanzamiento de 2017
// publicado por la prensa y no una tarifa actual (precioDesde con nota). La carga útil no
// la publica la marca como cifra única (cargaUtilKg: null; prohibido calcular PTAC-PVOM).
// La altura oficial de la ficha (2,92 m) difiere de la publicada por la prensa en 2017
// (2,79 m); se usa la cifra oficial. Las fotos son de prensa especializada
// (campingcarlesite.com), no fotos oficiales de la marca.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_AUTOSTAR_M4: Autocaravana[] = [
  {
    id: "autostar-passion-p-730-lc-2026-precio-ficha-tecnica",
    marca: "Autostar",
    modelo: "Passion P730LC Lift",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 64990, // precio de lanzamiento 2017 publicado por campingcarlesite.com; no hay tarifa oficial vigente (modelo descatalogado)
    potenciaCv: 140, // Fiat Ducato 2,2 L 140 CV (ficha oficial Autostar)
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: null, // no publicada por la marca
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/autostar-passion-p-730-lc-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/autostar-passion-p-730-lc-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/autostar-passion-p-730-lc-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7390, // ficha oficial: 7,39 m
    anchoMm: 2310, // ficha oficial: 2,31 m
    altoMm: 2920, // ficha oficial: 2,92 m (la prensa de 2017 publicó 2,79 m; se usa la oficial)
    pesoKg: 3090, // PVOM 3.090 kg (ficha oficial)
    mmaKg: 3500, // PTAC 3.500 kg (ficha oficial)
    carnetNecesario: "B", // mmaKg <= 3500
    cargaUtilKg: null, // la marca no publica una carga útil única; prohibido calcular PTAC-PVOM
    consumo: null, // no publicado por la marca
    consumoUnidad: null,
    plazas: 4, // ficha oficial: 4 plazas en circulación
    plazasDormir: 4, // ficha oficial: 4 plazas para dormir (cama central + lit de pavillon)
    parNm: null,
    traccion: null, // la marca no lo declara en la ficha técnica
    emisionesCo2: null,
    aprox: [],
    notas:
      "Dimensiones (7,39 × 2,31 × 2,92 m), base (Fiat Ducato 2,2 L 140 CV), PTAC (3.500 kg), PVOM (3.090 kg), PTRA (5.500 kg), plazas (4 en circulación, 4 para dormir, 6 en comedor), cama central XXL (150×198 cm con memoria de forma), frigorífico (175 L AES), calefacción (Truma 6000) y garaje (1,50×1,98 m) de la ficha oficial Autostar del Passion P730LC Lift. Precio: 64.990 € fue el precio de lanzamiento en 2017 (campingcarlesite.com); no existe tarifa oficial vigente porque el modelo está descatalogado en la gama 2027. Carga útil, consumo y etiqueta DGT: no publicados (null). Fotos de prensa especializada, no oficiales de la marca.",
    curiosidades:
      "El apellido «Lift» no es decorativo: el P730LC monta el sistema LIFT de Autostar, que permite regular la altura del somier de la cama central en 25 cm para acceder al garaje y al almacenaje inferior, según la ficha oficial del modelo (autostar.fr).",
    descripcion: `La Autostar Passion P730LC Lift fue la gran novedad de la colección 2018 de la marca bretona: una perfilada de 7,39 metros que presumía, con razón, de ofrecer «l'agencement le plus spacieux du marché», la distribución más espaciosa del mercado. Hoy está descatalogada —la gama 2027 la sustituye por la nueva familia NAEOS—, pero sigue siendo una referencia muy buscada en el mercado de ocasión por una razón sencilla: fue una de las primeras perfiladas en generalizar la cama central XXL con el nivel de acabado Passion.

La distribución es la clásica de las grandes perfiladas con cama central, ejecutada con generosidad. Detrás, la cama central de 150 × 198 cm con colchón de memoria de forma descansa sobre un somier de altura regulable: el sistema LIFT permite variar la altura en 25 cm, de modo que el garaje inferior —de 1,50 × 1,98 metros, apto para bicicletas— se adapta a lo que se necesite guardar. Delante de la cama, el cuarto de baño separado con ducha sin escalón (el doble suelo técnico elimina el desnivel) y doble tabique para independizar la zona de noche. El salón rompe con la banqueta en ele tradicional: dos banquetas enfrentadas con mesa central acogen a seis comensales y esconden dos asientos de automóvil escamoteables con cinturones, de modo que dos pasajeros más pueden viajar con seguridad. La cocina, con frigorífico de 175 litros de selección automática de energía (AES) y extractor, está dimensionada para cocinar en ruta sin renuncias.

El doble suelo técnico de serie es otro de los pilares del modelo: además de mejorar el aislamiento térmico y acústico, deja el piso de la célula a un único nivel, sin el escalón habitual para acceder a la cabina, lo que se nota en la comodidad diaria. La calefacción Truma 6000 garantiza confort en invierno, y el conjunto de tecnologías de la marca —Protec-Star para la protección de la célula, Ventil'Plus para la ventilación permanente del mobiliario, Bedliner para el suelo del garaje— redondea un nivel de dotación que en 2018 estaba por encima de la media del segmento.

La base es el Fiat Ducato 2,2 litros de 140 CV, con un PTAC de 3.500 kg que permite conducirla con el carnet B y un PTRA de 5.500 kg que deja margen para remolcar. La marca no publica una cifra única de carga útil, así que no la incluimos: con un PVOM de 3.090 kg, cada unidad tendrá la suya según su equipamiento opcional y debe consultarse en la báscula antes de cargar. La altura oficial es de 2,92 metros, aunque la prensa de la época publicó 2,79 metros; usamos la cifra de la ficha del fabricante.

El precio de lanzamiento fue de 64.990 € en 2017, según publicó campingcarlesite.com. No existe tarifa oficial vigente: el P730LC Lift solo se encuentra hoy de ocasión, donde su cotización depende del estado, el kilometraje y el nivel de equipamiento. La red de distribuidores Autostar en España sigue dando servicio a estos vehículos, y el mantenimiento combina el plan Fiat para la base con la revisión anual de la célula.

El nivel de acabado Passion, el intermedio-alto de la marca por encima del Privilège, se reconoce en el mobiliario de puertas barnizadas bicolores, la iluminación LED de bajo consumo y detalles como el compartimento para una segunda casete de WC, pensado para quienes viajan lejos de las áreas de servicio. La cabina Fiat, con doble airbag, regulador y limitador de velocidad, climatización y estación multimedia con cámara de marcha atrás, completa una dotación de serie que en 2018 pocos rivales igualaban sin pasar por la lista de opciones. En carretera, el conjunto Ducato de 140 CV con la célula de 2,31 metros de ancho se muestra estable y predecible; no es un vehículo deportivo, pero su aplomo en autopista y su dirección precisa lo hacen descansado en etapas largas, que es para lo que está pensado.

Cómo lo verificamos: dimensiones, motorización, masas (PTAC 3.500 kg, PVOM 3.090 kg, PTRA 5.500 kg), plazas, cama XXL, frigorífico, calefacción, garaje y sistema LIFT proceden de la ficha oficial de Autostar para el Passion P730LC Lift, consultada el 19/10/2026. El precio de lanzamiento (64.990 €) y los detalles de la presentación los publicó campingcarlesite.com el 14/09/2017. Lo que la marca no publica —carga útil única, consumo, etiqueta DGT, tarifa vigente— queda declarado como null y explicado en las notas.

Para quién es: encaja con parejas que quieren una perfilada grande con cama central de verdad y garaje capaz, sin subir a una integral, y con compradores de ocasión que buscan el acabado Passion (mobiliario bicolor, iluminación LED, segundo casete de WC) a precio de segunda mano. Es ideal para viajes largos con mucho material gracias al garaje regulable en altura. No encaja con quien necesite más de cuatro plazas para dormir, con quien busque un modelo nuevo con garantía de fábrica —habrá que mirar la gama NAEOS—, ni con quien priorice la compacidad: 7,39 metros exigen planificar parkings y accesos.`,
    pros: [
      "Cama central XXL de 150×198 cm con colchón de memoria de forma, generalizada en la gama 2018",
      "Sistema LIFT: el somier regula su altura en 25 cm para adaptar el garaje a la carga",
      "Garaje de 1,50×1,98 m apto para bicicletas, sobre doble suelo técnico sin escalones",
      "Salón para 6 comensales con dos banquetas enfrentadas y asientos escamoteables con cinturones",
      "Ducha sin escalón y doble tabique: la zona de noche se independiza por completo",
    ],
    contras: [
      "Modelo descatalogado (colección 2018): solo disponible de ocasión, sin tarifa vigente",
      "El precio de 64.990 € es el de lanzamiento de 2017, no una referencia actual",
      "La marca no publica la carga útil: hay que pesar cada unidad antes de cargar",
      "Con 7,39 m y 2,92 m de alto, exige planificar accesos y estacionamiento",
      "Discrepancia en la altura publicada (2,92 m oficial frente a 2,79 m en prensa de la época)",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/autostar-passion-p-730-lc-2026-precio-ficha-tecnica-oficial.webp", alt: "Autostar Passion P730LC Lift, vista exterior", ancho: 1200, alto: 800 },
      { src: "/media/autostar-passion-p-730-lc-2026-precio-ficha-tecnica-interior1.webp", alt: "Autostar Passion P730LC Lift, salón interior", ancho: 1200, alto: 800 },
      { src: "/media/autostar-passion-p-730-lc-2026-precio-ficha-tecnica-interior2.webp", alt: "Autostar Passion P730LC Lift, cama central", ancho: 1200, alto: 800 },
      { src: "/media/autostar-passion-p-730-lc-2026-precio-ficha-tecnica-detalle.webp", alt: "Autostar Passion P730LC Lift, detalle de cocina", ancho: 1200, alto: 800 },
    ],
    analisisSlug: "autostar-passion-p-730-lc-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Autostar (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
