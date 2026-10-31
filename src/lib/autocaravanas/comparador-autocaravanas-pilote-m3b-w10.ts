// Autocaravanas Pilote — lote Merlín 3 (19/10/2026). Fichero "b" para evitar colisión con W7.
// Fuentes: https://www.pilote-motorhome.uk/motorhomes/compact-low-profile/ (gama Atlas oficial UK);
// https://www.outandaboutlive.co.uk/motorhomes/news/pilote-essential-guide-2024 (presentación de la
// gama 2024 con A656D y A696G: medidas, plazas, motor, precio UK); review del A696G en
// https://www.outandaboutlive.co.uk/reviews/motorhomes/pilote-atlas-a696g-low-profile-motorhome.
// Verificado el 19/10/2026.
// El modelo existe y está documentado en prensa especializada y en la web oficial de Pilote UK
// (gama Atlas 2024/2025); en la gama 2026 ha sido renombrado, pero el A696G es un modelo real con
// datos verificables, por lo que se mantiene (la verificación por nota de prensa está permitida).
// Notas honestas: precio ES no publicado (en UK partía de £84.500-85.000 en 2024); altura total no
// publicada para este layout; carga útil de 485 kg publicada por la prensa (MMM), no por la marca,
// por lo que cargaUtilKg queda sin dato.
// Fotos: imágenes de marketing oficiales de Pilote reutilizadas en el anuncio de alquiler verificado
// del modelo exacto (2024 Pilote A696G Atlas); se marcan como no oficiales por honestidad.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_PILOTE_M3B: Autocaravana[] = [
  {
    id: "pilote-atlas-a696g-2026-precio-ficha-tecnica",
    marca: "Pilote",
    modelo: "Atlas A696G",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // sin tarifa ES publicada; en UK partía de £84.500 (2024)
    potenciaCv: 170, // Ford Transit Trail 170 CV (170 PS), automático de serie
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
    imagen: "/media/pilote-atlas-a696g-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/pilote-atlas-a696g-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/pilote-atlas-a696g-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6990, // 6,99 m (prensa especializada)
    anchoMm: 2190, // 2,19 m (prensa especializada)
    altoMm: null, // no publicado para este layout
    pesoKg: null,
    mmaKg: 3500, // 3.500 kg (prensa especializada)
    carnetNecesario: "B",
    cargaUtilKg: null, // 485 kg según la prensa (MMM); la marca no la publica
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas de viaje con cinturón
    plazasDormir: 4, // cama doble transversal + cama abatible doble sobre el salón
    parNm: null,
    traccion: "delantera", // Ford Transit
    emisionesCo2: null,
    aprox: [],
    notas:
      "Modelo verificado en la web oficial de Pilote UK (gama Atlas) y en la prensa especializada " +
      "(Out & About Live: presentación de la gama 2024 y prueba completa del A696G), el 19/10/2026. " +
      "El A696G es el layout largo de la gama Atlas (6,99 m, 2,19 m de ancho, 3.500 kg): cama doble " +
      "transversal fija sobre el garaje más cama doble abatible eléctrica sobre el salón, 4 plazas de " +
      "viaje y 4 para dormir. Base Ford Transit Trail con motor de 170 CV y cambio automático de serie, " +
      "diferencial de deslizamiento limitado mecánico, llantas negras de 16'' y neumáticos de cuatro " +
      "estaciones. Sin dato publicado: precio en España (no publicado; en UK partía de £84.500 en 2024), altura total, " +
      "carga útil (485 kg según la prensa, no dato de marca), consumo y emisiones. Fotos: imágenes de " +
      "marketing de Pilote del modelo exacto, obtenidas del anuncio verificado de una unidad 2024; sin PVP oficial verificable." +
      "marcan como no oficiales.",
    curiosidades:
      "El Atlas nació para celebrar el 60.º aniversario de Pilote en 2023 y supuso el regreso de la marca " +
      "francesa a los chasis Ford tras décadas: en los años 80 Pilote ya fue líder europeo con Ford gracias " +
      "al mítico R360. Fuente: https://www.pilote-motorhome.uk/motorhomes/compact-low-profile/",
    descripcion: `El Pilote Atlas A696G es la perfilada con la que la marca de Nantes decidió romper su imagen
conservadora: un modelo de estética aventurera sobre Ford Transit Trail, estrecho (2,19 metros), de menos
de 7 metros y con un aire SUV que no se parece a nada de lo que Pilote había hecho antes. Nació en
2023 para celebrar el 60.º aniversario de la marca y fue su primer Ford en muchísimos años, un guiño
a los tiempos del R360 con el que Pilote lideró Europa en los 80. El A696G es la versión larga de la
gama Atlas: 6,99 metros con cama doble transversal fija sobre un gran garaje, mientras su hermano
pequeño, el A656D, apuesta por vestidor trasero y cama abatible.

La base es el Transit en acabado Trail: motor de 170 CV con cambio automático de seis velocidades de
serie, diferencial de deslizamiento limitado mecánico, llantas negras de 16 pulgadas con neumáticos
de cuatro estaciones, parrilla Trail con la marca Ford bien visible, faros antiniebla, freno de
estacionamiento eléctrico, climatizador automático, luces y limpiaparabrisas automáticos y pantalla
táctil SYNC4 de 12 pulgadas con cámara de marcha atrás. En seguridad lleva ESP, asistente de arranque
en pendiente, alerta de cambio de carril, alerta de colisión y frenada de emergencia. Con 3.500 kg
de MMA se conduce con el carnet B, y su anchura contenida lo hace mucho más ágil que una perfilada
convencional en carreteras de montaña y pueblos.

La célula usa la construcción Isotek de Pilote, con ventanas enrasadas, techo resistente al granizo,
doble junta en las trampillas y bajos de poliéster. El salón delantero tiene sofás enfrentados que se
convierten en asientos de viaje (uno mirando al frente y otro a contramarcha en el lado del
copiloto) y sobre él baja una cama doble eléctrica, un lujo raro en un vehículo tan compacto. La
cocina es ingeniosa y compacta, con frigorífico de 142 litros (ampliable a compresor en opción),
placa de dos fuegos y cajón portacacerolas. El baño, separado y con claraboya, se transforma con un
tabique extraíble que convierte la zona de WC y lavabo en una ducha amplia. Detrás, la cama
transversal de matrimonio sobre el garaje, con colchón sobre somier de lamas, ventanas, luces de
lectura y cortina de separación. El garaje, accesible por ambos lados y desde el interior, ofrece
1,10 m de altura libre, puntos de amarre regulables, enchufe de 230 V y ducha exterior.

De serie trae toldo, dos paneles solares de 100 W y claraboya Skydome practicable en la capuchina
angulosa que le da su carácter. La batería de habitáculo es AGM, con paquete de litio en opción.
La gama Atlas ha seguido evolucionando: para 2026 Pilote la ha ampliado a cuatro modelos (A630G,
A650D, A690G y A690GJ), manteniendo la receta de anchura contenida (2,20 m), base Ford y precios
ajustados, con el A690GJ apostando por camas gemelas para quien no quiere cama transversal. El
A696G que nos ocupa fue el layout largo original de la hornada 2023-2025, y su planteamiento sigue
vigente: es la opción Atlas para quien prioriza la cama doble fija trasera y el garaje grande. En
España, Pilote trabaja con una red de concesionarios que cubre las principales zonas caravaning, y
la base Ford Transit garantiza recambios y servicio mecánico en cualquier taller de la marca del
óvalo, una ventaja práctica frente a bases menos extendidas cuando se viaja lejos de casa. Como en
toda la gama Pilote, la célula admite personalización en tapicerías y ambientes, y el configurador
oficial permite componer la unidad con paquetes de equipamiento antes de pedir precio al
concesionario, algo recomendable porque la factura final varía mucho según opciones.

Cómo lo verificamos: la existencia del modelo, las medidas (6,99 m, 2,19 m, 3.500 kg), las 4+4
plazas, el motor Ford de 170 CV con automático y el precio de partida en UK (£84.500-85.000 en
2024) proceden de la presentación de la gama en Out & About Live y de su prueba completa del
A696G, contrastadas con la web oficial de Pilote UK, todo el 19/10/2026. La altura total y la
carga útil de marca no están publicadas (la prensa cita 485 kg de carga útil) y quedan sin dato;
tampoco hay tarifa oficial para España. Las fotos son imágenes oficiales de marketing de Pilote del
A696G exacto, localizadas en el anuncio verificado de una unidad de 2024, y se marcan como no
oficiales por honestidad.

Para quién es: para parejas o familias de cuatro que quieren una perfilada manejable, con estética
diferente y capacidad real de salir del asfalto sin ser un 4x4. Encaja si valoras el carnet B, el
automático de serie, el garaje grande bajo cama transversal y el equipamiento aventurero de serie
(solar, toldo, diferencial autoblocante). No encaja si necesitas más de 4 plazas para dormir, si
buscas una anchura habitable generosa —2,19 m se notan frente a los 2,30 habituales— o si quieres
precio cerrado en España: aquí la referencia es el mercado británico y cada importador cotiza la
suya.`,
    pros: [
      "Carnet B con solo 6,99 m y 2,19 m de ancho: agilidad impropia de una perfilada",
      "Motor Ford de 170 CV con cambio automático de serie y diferencial autoblocante",
      "Cama transversal fija sobre garaje grande + cama abatible doble sobre el salón: 4 plazas reales",
      "Equipamiento aventurero de serie: 2 paneles solares de 100 W, toldo y Skydome",
      "Estética diferenciadora 'baroudeur' con cabina gris Magnetic y llantas negras",
    ],
    contras: [
      "Anchura de 2,19 m: menos espacio interior que una perfilada convencional de 2,30 m",
      "Sin tarifa oficial en España: el precio de referencia es británico (£84.500 en 2024)",
      "La marca no publica altura total ni carga útil para este layout",
      "Tracción delantera con autoblocante, no 4x4: el 'look' aventurero tiene límites",
      "Red de servicio Ford para la base, pero la célula depende de la red Pilote",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/pilote-atlas-a696g-2026-precio-ficha-tecnica-oficial.webp", alt: "Pilote Atlas A696G, vista exterior", ancho: 1600, alto: 1067 },
      { src: "/media/pilote-atlas-a696g-2026-precio-ficha-tecnica-interior1.webp", alt: "Pilote Atlas A696G, cama abatible", ancho: 1600, alto: 1066 },
      { src: "/media/pilote-atlas-a696g-2026-precio-ficha-tecnica-interior2.webp", alt: "Pilote Atlas A696G, dormitorio", ancho: 1600, alto: 1066 },
      { src: "/media/pilote-atlas-a696g-2026-precio-ficha-tecnica-detalle.webp", alt: "Pilote Atlas A696G, garaje", ancho: 1600, alto: 1200 },
    ],
    analisisSlug: "pilote-atlas-a696g-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Ford Transit: revisión cada 2 años o 60.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Ford Transit 2.0)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 320 },
        { nombre: "Revisión célula Pilote (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
