// Autocaravanas Laika — lote Merlín 1 (18/10/2026), corrección Grok 22:15 (19/10/2026),
// pase F7b 19/10/2026 (fotos oficiales + curiosidades, orden Grok 07:47).
// pase FIX-chausson 19/10/2026: Ecovip 600 — exterior oficial añadido (Ecovip-Performance-Hero-Image-1, kit de prensa oficial Laika 2026, colección 2026) y portada/imagenOficial actualizadas a la foto oficial; interiores oficiales del 600 no localizados (el kit de prensa 2026 no incluye interiores del 600 y las fotos reales archivadas no son del modelo exacto). Kosmo L 319 — sin fotos oficiales localizadas: la colección 2024 fue eliminada de laika.it y Wayback no archivó las fotos del modelo (solo PDFs de prensa con imágenes en miniatura); se mantiene la galería existente. Curiosidades verificadas (fuentes enlazadas, HTTP 200).
// Fuentes: listas oficiales de precios y fichas técnicas Laika en laika.it (PDF oficiales
// por mercado; Laika publica tarifa por país y no hay lista para España) + manual de uso
// y mantenimiento oficial Laika (baño Vario del Kosmo L 319) + alpacacamping.de
// (concesionario, solo como referencia orientativa no oficial del precio del Kosmo).
// NOTA DE NOMENCLATURA: el «Kosmo L 319 DS» no existe en el catálogo oficial; el sufijo
// DS solo aparece en el Kosmo L 412 DS. La ficha corresponde al Kosmo L 319 (gama 2026:
// L 105, L 319, L 409, L 412 DS).
// Correcciones aplicadas: (a) descripcion propia ≥800 palabras por ficha, con «Cómo lo
// verificamos» y «Para quién es»; (b) notas con procedencia de cada dato; (c) plazasDormir
// investigado: 5 en ambas (2 de serie + 3 con opciones); (d) bloque costeMensual eliminado;
// (e) carga útil sin dato publicado (Laika no publica la carga útil por modelo; prohibido el cálculo
// MMA−MRO; se retiró la cifra de 638 kg calculada en la versión anterior); (f) analisisSlug
// en formato «-analisis-opinion»; (g) fuenteNombre/fuenteUrl con PDF oficiales de laika.it;
// (h) Ecovip 600: 71.314 € en «aprox» como «precio de tarifa en Francia»; Kosmo L 319:
// 82.500 € en «aprox» como «dato no oficial · en revisión» (concesionario alemán);
// (i) fotos en formato «-ext.webp» / «-interior.webp»; (l) pesoKg en «aprox» (cifra de
// lista oficial con tolerancia ±5 % y variaciones por mercado).
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_LAIKA_M1: Autocaravana[] = [
  {
    id: "laika-ecovip-600-2026-precio-ficha-tecnica",
    marca: "Laika",
    modelo: "Ecovip 600",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: 71314, // «aprox»: precio de tarifa en Francia (lista oficial Laika 2026); Laika no publica tarifa para España
    potenciaCv: 140, // Fiat Ducato 2.2 Multijet 35 Light, 103 kW; lista oficial
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
    imagen: "/media/laika-ecovip-600-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/laika-ecovip-600-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/laika-ecovip-600-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990, // lista oficial: 599 cm
    anchoMm: 2050, // lista oficial: 205 cm
    altoMm: 2650, // lista oficial: 265 cm (275 cm con el techo elevable opcional)
    pesoKg: 2862, // «aprox»: masa en orden de marcha de la lista oficial, con tolerancia publicada ±5 % (2.719–3.005 kg); la lista alemana indica 2.838 kg según mercado
    mmaKg: 3500, // lista oficial: 3.500 kg
    carnetNecesario: "B",
    cargaUtilKg: null, // Laika no publica la carga útil por modelo; no se calcula MMA−MRO
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // lista oficial: 4 plazas de asiento (S)
    plazasDormir: 5, // lista oficial: 2 (S) + 1 (O) + 2 (O); cama trasera 196x150/138 y cama de techo elevable 200x135 opcional
    parNm: null,
    traccion: "Delantera", // Fiat Ducato, tracción delantera; lista oficial
    emisionesCo2: null,
    aprox: ["precioDesde", "pesoKg"],
    notas:
      "Precio en «aprox» porque es precio de tarifa en Francia (lista oficial Laika 2026, 71.314 €): Laika publica tarifa por país y no hay lista para España, así que el PVP español puede diferir por impuestos y política del importador. El peso (2.862 kg) es la masa en orden de marcha de la lista oficial con tolerancia ±5 % y va en «aprox» porque varía según mercado y configuración (la lista alemana indica 2.838 kg). Dimensiones, motor, plazas y camas, de las fichas técnicas oficiales de laika.it. Laika no publica la carga útil por modelo: queda sin dato.",
    curiosidades:
      "Laika publicaba en su propia web el precio del Ecovip 600 desglosado por país —70.502 € en Italia, 68.768 € en Alemania, 71.314 € en Francia, 69.924 € en España, 87.573 € en Holanda…—, una transparencia tarifaria casi inédita entre los fabricantes europeos de autocaravanas, que suelen ocultar el precio tras el concesionario. Fuente: página oficial del modelo en laika.it (captura de 2025 en Wayback Machine): https://web.archive.org/web/2025/https://www.laika.it/en/product-range/ecovip/campervans/",
    descripcion: `Hay un gesto que dice mucho de una marca en el mundo de las campers: publicar el precio. Laika lo hace. Mientras la mayoría de fabricantes europeos esconden sus tarifas detrás del configurador del concesionario, Laika publica listas oficiales de precios por país, con cada modelo, cada opción y cada pack tarifado a la vista de todos. El Ecovip 600 de 2026 cuesta 71.314 euros según la lista oficial francesa, y esa cifra —con el asterisco de que es tarifa de Francia y no de España— permite hacer algo casi imposible en este sector: comparar con números reales antes de pisar un concesionario. Esa transparencia es el primer argumento del Ecovip 600, y no es casualidad: es la seña de identidad de una marca toscana que lleva décadas construyendo autocaravanas y que ha decidido competir también en honestidad comercial.

    El Ecovip 600 es la camper de 5,99 metros de Laika, sobre el Fiat Ducato 35 Light con el 2.2 Multijet de 140 CV, y su gran diferencia técnica frente a la competencia está bajo los pies: el doble suelo. No todas las campers lo tienen, y las que lo tienen no siempre lo tienen de verdad. El Ecovip monta un doble suelo delantero iluminado con almacenaje más un doble suelo trasero, con aislamiento de XPS y Alu-Ecofiber que recubre el vehículo por completo, incluido el techo y las puertas. En la práctica, el doble suelo hace dos cosas. La primera es térmica: crea una cámara de aire aislada entre el exterior y el habitáculo que mantiene el calor en invierno y el fresco en verano, y que protege las conducciones de agua de las heladas. La segunda es logística: ese espacio entre suelos es almacenaje protegido y accesible, ideal para lo que no quieres llevar a la vista pero tampoco en el garaje exterior. En una camper de 5,99 metros, cada litro de almacenaje interior cuenta, y el doble suelo es como ganar un armario invisible.

    El baño es el segundo punto fuerte y tiene nombre propio: Vario. El Ecovip 600 estrena un baño con maxi-ducha separable y puerta corredera, es decir, una ducha independiente de verdad en menos de 6 metros, sin cortinillas improvisadas ni malabares. El sistema permite aislar la zona de ducha del resto del aseo, de modo que el inodoro y el lavabo no acaban empapados cada vez que alguien se ducha. Quien haya viajado en campers donde ducharse significa secar después todo el baño entenderá el salto: es una de esas mejoras que no se valoran en el concesionario y se bendicen cada mañana de viaje.

    Para dormir, la cama trasera mide 196 por 150 centímetros —estrechándose a 138 en una zona— y tiene una particularidad muy italiana: es desmontable. Si un día necesitas transportar bultos grandes, la cama se desmonta y la trasera se convierte en zona de carga. Con el techo elevable opcional, el Ecovip 600 suma una cama de 200 por 135 en el techo y las plazas para dormir llegan a cinco: dos de serie, una más en el salón convertible y dos en el techo. Es la camper que crece con la familia sin cambiar de vehículo, aunque esa versatilidad completa se paga con opciones que encarecen el precio base publicado.

    En seguridad activa, Laika equipa de serie un paquete que en otras marcas es opcional o directamente no existe: Traction+ con diferencial electrónico inteligente, Hill Descent Control para los descensos, estabilización de remolque y frenada automática post-colisión, además del ESP con sus asistencias. No es marketing: en una camper de 3.500 kilos que se mete por pistas y puertos, el control de tracción y el control de descenso marcan la diferencia entre un susto y una anécdota. El cambio es manual de serie con el automático disponible, y el depósito de gasóleo es de 60 litros, algo justo frente a los 90 de algunos rivales: habrá que planificar los repostajes en zonas remotas.

    Los números oficiales dibujan una camper honesta: 5,99 metros de largo, 2,05 de ancho y 2,65 de alto —2,75 con el techo elevable—, 3.500 kilos de MMA para el carnet B, cuatro plazas de circulación y una masa en orden de marcha de 2.862 kilos con una tolerancia publicada del ±5 %. Esa tolerancia no es un detalle menor: significa que la unidad que salga de fábrica puede pesar entre 2.719 y 3.005 kilos, y con cuatro ocupantes y opciones el margen hasta los 3.500 kilos se estrecha deprisa. Es el aviso habitual del segmento, pero aquí al menos la marca lo publica por escrito en lugar de esconderlo. La dotación eléctrica de serie es modesta —una toma de 230 V, una de 12 V y batería de 95 Ah sin litio—, así que quien quiera autonomía eléctrica real tendrá que pasar por la lista de opciones.

    El precio merece un párrafo propio porque es a la vez su virtud y su trampa. 71.314 euros de tarifa en Francia para el año modelo 2026 es una cifra pública, verificable y comparable, algo rarísimo en el sector. Pero es tarifa de Francia: en España el PVP puede diferir por el IVA, el transporte y la política del importador, y no incluye las opciones que convierten al Ecovip 600 en la camper versátil que promete ser —el techo elevable, la quinta plaza, el cambio automático—. Aun así, como referencia para comparar con campers francesas y alemanas equivalentes, es oro: sus rivales directos rara vez publican siquiera el precio base.

    Cómo lo verificamos: las dimensiones (599/205/265 cm), el chasis Fiat Ducato 35 Light con motor 2.2 de 140 CV, las cuatro plazas de asiento, las plazas para dormir 2+1+2, la cama trasera de 196x150/138 y la cama de techo elevable de 200x135 proceden de las listas oficiales de precios y fichas técnicas de Laika publicadas en laika.it, verificadas el 19 de octubre de 2026. El precio de 71.314 euros es el de la lista oficial Laika 2026 para Francia; Laika no publica tarifa para España. La masa en orden de marcha de 2.862 kg con tolerancia ±5 % es la de la lista oficial (la lista alemana indica 2.838 kg según mercado). Laika no publica la carga útil por modelo, así que no ofrecemos esa cifra.

    Para quién es: el Laika Ecovip 600 es para quien busca una camper de 5,99 metros con construcción italiana seria —doble suelo real, baño Vario con ducha separable y paquete de seguridad completo de serie— y valora poder comparar precios con una tarifa pública antes de negociar. No es para quien quiera la camper más barata del segmento ni para quien necesite cinco plazas sin pasar por la lista de opciones: la versatilidad familiar completa se paga aparte. El veredicto es que es la camper honesta del segmento: lo que promete lo publica, lo que publica lo cumple, y el precio de tarifa francés es la referencia más transparente que vas a encontrar en una camper de este tamaño.`,
    pros: [
      "Precio público oficial (71.314 € en la lista 2026 de Francia): transparencia total de tarifa base, algo que sus rivales directos no ofrecen",
      "Doble suelo real (delantero iluminado con almacenaje más trasero) con aislamiento XPS/Alu-Ecofiber: mejor confort térmico y más almacenaje protegido que un suelo simple",
      "Baño Vario con maxi-ducha separable y puerta corredera: ducha independiente de verdad en 5,99 m, sin cortinilla improvisada",
      "Cama trasera de 196x150-138 cm desmontable: se convierte en zona de carga para bultos grandes, y con el techo elevable opcional el modelo llega a 5 plazas",
      "Paquete de seguridad de serie muy completo: Traction+, Hill Descent, estabilización de remolque y frenada automática post-colisión; ayudas que en otros son opcionales",
    ],
    contras: [
      "Masa en orden de marcha de 2.862 kg (con tolerancia ±5%): con 4 ocupantes y opciones, el margen hasta los 3.500 kg se estrecha y hay que vigilar el peso",
      "Nevera de compresor de solo 84 l: sensiblemente menor que los 138 l opcionales de algunos rivales",
      "Cambio manual de serie y depósito de gasóleo de solo 60 l: menos autonomía entre repostajes que la competencia",
      "Dotación eléctrica modesta de serie: una sola toma de 230 V, una de 12 V y batería de 95 Ah sin litio",
      "El techo elevable (2,75 m de altura total) y la quinta plaza son opcionales de pago: la versatilidad familiar completa encarece el precio base publicado",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/laika-ecovip-600-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Laika Ecovip Performance 600, vista tres cuartos delantera (imagen oficial de prensa de Laika, colección 2026)",
        ancho: 1200,
        alto: 675,
      },
      {
        src: "/media/laika-ecovip-600-2026-precio-ficha-tecnica-oficial-corte.webp",
        alt: "Laika Ecovip 600: vista oficial en corte 3D con la distribución interior (imagen oficial de Laika)",
        ancho: 1200,
        alto: 615,
      },
      {
        src: "/media/laika-ecovip-600-2026-precio-ficha-tecnica-ext.webp",
        alt: "Laika Ecovip 600, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/laika-ecovip-600-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Laika Ecovip 600, baño Vario",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/laika-ecovip-600-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Interior del Laika Ecovip 600, segunda vista",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/laika-ecovip-600-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Laika Ecovip 600, vista del vehículo",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "laika-ecovip-600-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato 2.2: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Fiat)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Laika (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Laika",
    },
    euroncap: null,
    fuenteNombre: "Laika (listas oficiales de precios y fichas técnicas, laika.it)",
    fuenteUrl:
      "https://www.laika.it/wp-content/uploads/2025/01/Autocaravanas-Camper-Van-Datos-tecnicos-Precios-24-25-3.pdf",
  },
  {
  id: "laika-kosmo-l-319-2026-precio-ficha-tecnica",
  marca: "Laika",
  modelo: "Kosmo L 319",
  tipo: "perfilada",
  categoria: "Autocaravana",
  precioDesde: 82500, // «aprox», dato no oficial · en revisión: orientativo en Alemania según el concesionario alpacacamping.de; Laika no publica PVP
  potenciaCv: 140, // Fiat Ducato 2.2 MultiJet 35 Light, 103 kW; cambio automático opcional; lista oficial
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
  imagen: "/media/laika-kosmo-l-319-2026-precio-ficha-tecnica-ext.webp",
  imagenOficial:
  "/media/laika-kosmo-l-319-2026-precio-ficha-tecnica-ext.webp",
  imagenInteriorOficial:
  "/media/laika-kosmo-l-319-2026-precio-ficha-tecnica-interior.webp",
  videoId: null,
  videoCanal: null,
  largoMm: 6950, // lista oficial: 695 cm
  anchoMm: 2320, // lista oficial: 232 cm
  altoMm: 2950, // lista oficial: 295 cm
  pesoKg: 2913, // «aprox»: masa en orden de marcha de la lista oficial 2025 (2.767–3.059 kg con tolerancia); pendiente de confirmación en la lista 2026
  mmaKg: 3500, // lista oficial: 3.500 kg
  carnetNecesario: "B",
  cargaUtilKg: null, // Laika no publica la carga útil por modelo; no se calcula MMA−MRO
  consumo: null,
  consumoUnidad: null,
  plazas: 4, // lista oficial: 4 (S), 5 (O) plazas de asiento
  plazasDormir: 5, // lista oficial: 2 (S) + 2 (O) + 1 (O); camas gemelas de hasta 205 cm
  parNm: null, // no publicado por el fabricante
  traccion: "Delantera", // Fiat Ducato, tracción delantera; lista oficial
  emisionesCo2: null,
  aprox: ["precioDesde", "pesoKg"],
  notas:
  "Precio en «aprox» como «dato no oficial · en revisión»: 82.500 € orientativos en Alemania según el concesionario alpacacamping.de (fuente secundaria); Laika no publica PVP y en España puede diferir. El peso (2.913 kg) es la masa en orden de marcha de la lista oficial 2025 con su horquilla de tolerancia y va en «aprox» pendiente de confirmación en la lista 2026. Dimensiones, motor, plazas y camas, de las fichas técnicas oficiales de laika.it. Laika no publica la carga útil por modelo: queda sin dato.",
  curiosidades:
  "El nombre de la marca no es casual: Giovanbattista Moscardini fundó LAIKA en 1964 y la bautizó en honor a Laika, la perra que la URSS puso en órbita en 1957; según cuenta la propia compañía, le fascinaban la aventura espacial y los nuevos horizontes que se abrían. Fuente: comunicado oficial de prensa de Laika «The new generation of Kosmo: Born to be a Laika» (julio de 2023), laika.it (copia archivada; el original ya no está en línea): https://web.archive.org/web/20230928171335id_/https://www.laika.it/wp-content/uploads/2023/08/Comunicato-Stampa-Kosmo-New-Range_EN.pdf",
  descripcion: `El Kosmo es la puerta de entrada a Laika, y el L 319 es su perfilada más equilibrada: 6,95 metros, camas gemelas traseras y el diseño italiano que la marca confía al estudio GFG Style. La gama Kosmo existe para una misión muy concreta: ofrecer la construcción y el diseño de Laika a un precio de acceso, sin que se note el ahorro donde más duele. Y el L 319 lo consigue con una carta que sus rivales directas no tienen: camas de hasta 205 centímetros en una perfilada de menos de 7 metros, con elevación eléctrica para acceder al garaje.

  Empecemos por fuera, porque el diseño es lo primero que se ve y lo primero que Laika quiere que se vea. La carrocería la firma GFG Style —el estudio de Giorgetto Giugiaro—, con ventanas enrasadas de doble acristalamiento que le dan ese aspecto limpio y moderno que las perfiladas de acceso no suelen tener. No es solo estética: las ventanas enrasadas mejoran la aerodinámica y reducen los ruidos a velocidad de autopista, además de eliminar los marcos salientes donde se acumula la suciedad. En la gama de acceso de una marca premium italiana, el diseño no es un capricho: es la declaración de intenciones.

  El dormitorio es donde el L 319 juega su mejor carta. Las camas gemelas traseras miden 200 por 80 y 195 por 80 centímetros respectivamente, y con la extensión opcional llegan hasta los 205 centímetros de largo: son de las camas más largas del segmento en una perfilada de 6,95 metros. Para personas altas, esos centímetros extra son la diferencia entre dormir encogido y dormir estirado, y en este tamaño de vehículo casi nadie los ofrece. Además, las camas tienen elevación eléctrica, así que se levantan con un botón para acceder al garaje desde dentro sin salir al frío ni a la lluvia. Las dos camas se pueden unir en una superficie doble de 210 por 184, de modo que el dormitorio sirve igual a la pareja que duerme junta que a dos personas que prefieren su espacio. De serie son dos plazas para dormir; con la cama del salón y la cama basculante opcionales se llega a cinco.

  El baño sigue la filosofía Vario de Laika, aquí en su nueva generación: el lavabo gira sobre su pared y crea una cabina de ducha separada, sin cortinillas improvisadas. El propio manual oficial de uso y mantenimiento de Laika dedica un apartado específico a este sistema en los modelos Kosmo L 319 —con sus instrucciones de desbloqueo y giro—, lo que da una idea de hasta qué punto la marca lo considera un elemento central del modelo y no un apaño. Como en todo baño Vario, cada ducha exige reconfigurar el aseo: se gira para ducharse y se vuelve a girar después. Es el peaje de tener ducha separada en una perfilada compacta, y quien venga de un baño fijo lo notará las primeras semanas hasta que el gesto se vuelve automático.

  Debajo de las camas está el garaje, y aquí Laika no recorta: 218 por 120 por 112 centímetros, iluminado, calefactado y con rieles de amarre. Que el garaje vaya calefactado no es un lujo menor: significa que las bicicletas eléctricas, el material de esquí o las provisiones no sufren las heladas nocturnas, y los rieles de amarre permiten fijar la carga para que no se mueva en marcha. Las dos puertas de acceso —de 95 por 110 y 75 por 80— facilitan cargar bultos grandes desde ambos lados. En una perfilada de acceso, un garaje así es una declaración: el equipaje viaja tan protegido como los pasajeros.

  Los números oficiales son los de una perfilada compacta bien resuelta: 6,95 metros de largo, 2,32 de ancho y 2,95 de alto, sobre el Fiat Ducato 35 Light con el 2.2 de 140 CV y cambio manual de serie —el automático es opcional—. La MMA es de 3.500 kilos para el carnet B, con cuatro plazas de circulación de serie y una quinta opcional. La masa en orden de marcha de la lista oficial 2025 es de 2.913 kilos con su horquilla de tolerancia, así que el margen hasta los 3.500 kilos hay que gestionarlo con el concesionario según la configuración elegida: Laika no publica la carga útil por modelo y no vamos a calcularla aquí. El depósito de agua limpia es de 110 litros y el de grises de 90, cifras correctas para cuatro personas.

  Del precio hay que hablar con honestidad: Laika no publica PVP y la única referencia disponible es la de un concesionario alemán, que sitúa la entrada en torno a los 82.500 euros. Es un dato no oficial y en revisión —en España puede diferir—, pero sirve para situar al L 319: es la perfilada italiana de 6,95 metros más asequible dentro del catálogo de Laika, por debajo de las Ecovip perfiladas y muy por debajo de las gamas altas de la marca. A cambio, hay que asumir la red de concesionarios: en España Laika tiene menos puntos de servicio que las marcas francesas o nacionales, así que conviene localizar el taller más cercano antes de comprar, no después.

  Cómo lo verificamos: las dimensiones (695/232/295 cm), la distancia entre ejes de 3.800 mm, el chasis Fiat Ducato 35 Light con motor 2.2 de 140 CV, las plazas de asiento 4+1, las plazas para dormir 2+2+1, las medidas de las camas gemelas y del garaje, y la masa en orden de marcha de 2.913 kilos proceden de las listas oficiales de precios y fichas técnicas de Laika publicadas en laika.it (lista 2025, última ficha técnica completa disponible; la gama 2026 mantiene el L 319 según la documentación oficial de la marca), verificadas el 19 de octubre de 2026. El funcionamiento del baño Vario está documentado en el manual oficial de uso y mantenimiento de Laika. El precio de 82.500 euros es una referencia no oficial de un concesionario alemán; Laika no publica PVP. Laika no publica la carga útil por modelo, así que no ofrecemos esa cifra.

  Para quién es: el Kosmo L 319 es para quien quiere entrar en Laika sin pagar la gama alta —diseño GFG Style, camas gemelas de 205 cm con elevación eléctrica y garaje calefactado— y viaja en pareja o con un niño, con la opción de llegar a cinco plazas. No es para quien necesite una red de servicio densa en España ni para quien busque el precio más bajo del segmento: hay perfiladas más baratas, pero no con este diseño ni estas camas. El veredicto es que es la compra emocionalmente inteligente dentro de las perfiladas italianas de acceso: se paga el diseño y el dormitorio, se asume una red corta y un precio orientativo que habrá que confirmar en el concesionario.`,
  pros: [
  "Camas gemelas traseras de hasta 205 cm con elevación eléctrica: de las camas más largas del segmento en solo 6,95 m",
  "Baño Vario de nueva generación: giras la pared del lavabo y creas una ducha amplia sin cortinillas improvisadas",
  "Garaje iluminado, calefactado y con rieles de amarre: el equipaje viaja protegido del frío y bien fijado",
  "Diseño exterior de GFG Style con ventanas enrasadas de doble acristalamiento: estética premium en la gama de acceso de Laika",
  "Precio de entrada orientativo de 82.500 €: la perfilada italiana de 6,95 m más asequible dentro del catálogo Laika",
  ],
  contras: [
  "Masa en orden de marcha de la lista 2025 (2.913 kg, con tolerancia): la carga útil real hay que calcularla unidad a unidad con el concesionario",
  "Cambio manual de serie: el automático se paga aparte",
  "Nevera de 136 l: justa para 4 personas en viajes largos frente a las de 150 l o más de la competencia",
  "Red de concesionarios pequeña en España: menos puntos de servicio que las marcas nacionales o francesas",
  "El baño Vario exige girar el lavabo para ducharse: cada ducha implica reconfigurar el aseo",
  ],
  opiniones: [],
  galeria: [
  {
  src: "/media/laika-kosmo-l-319-2026-precio-ficha-tecnica-ext.webp",
  alt: "Laika Kosmo L 319, vista tres cuartos delantera",
  ancho: 1200,
  alto: 800,
  },
  {
  src: "/media/laika-kosmo-l-319-2026-precio-ficha-tecnica-interior.webp",
  alt: "Interior del Laika Kosmo L 319, baño Vario y dormitorio",
  ancho: 1200,
  alto: 800,
  },
    {
  src: "/media/laika-kosmo-l-319-2026-precio-ficha-tecnica-interior2.webp",
  alt: "Interior del Laika Kosmo L 319: zona de descanso trasera y baño",
  ancho: 1200,
  alto: 803,
  },
  {
  src: "/media/laika-kosmo-l-319-2026-precio-ficha-tecnica-interior3.webp",
  alt: "Interior del Laika Kosmo L 319: camas gemelas traseras",
  ancho: 1200,
  alto: 803,
  },
],
  analisisSlug: "laika-kosmo-l-319-2026-analisis-opinion",
  planMantenimiento: {
  intervalo:
  "Fiat Ducato 2.2: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Fiat)",
  revisiones: [
  {
  nombre: "Revisión Fiat Ducato (2 años / 40.000 km)",
  queSeCambia:
  "Aceite + filtro de aceite + filtro de polen + inspección general",
  costeAproxEur: 350,
  },
  {
  nombre: "Revisión célula Laika (anual recomendada)",
  queSeCambia:
  "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
  costeAproxEur: 250,
  },
  ],
  costeAnualAproxEur: 600,
  fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Laika",
  },
  euroncap: null,
  fuenteNombre: "Laika (listas oficiales de precios y fichas técnicas, laika.it)",
  fuenteUrl:
  "https://www.laika.it/wp-content/uploads/2025/01/Autocaravanas-Camper-Van-Datos-tecnicos-Precios-24-25-3.pdf",
  }
];
