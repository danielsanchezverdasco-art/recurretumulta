// 21/10/2026 (dedupe campers, Niky): retirado el registro «adria-twin-supreme-640-sgx-2026-precio-ficha-tecnica» de este fichero.
// Era la copia en /autocaravanas/ de una furgoneta camperizada: la versión canónica
// vive en /campers/adria-twin-supreme-640-sgx-2026-precio-ficha-tecnica/ y la URL vieja redirige con 301 (public/_redirects).
// Autocaravanas Adria — lote Merlín 1 (18/10/2026), corrección b/c/d (22:15).
// Fuentes: catálogos oficiales Adria 26/27 (Campervans y Motorhomes), adria-mobil.com.
// Adria no publica PVP ni fichas por modelo en web: fuente = catálogo oficial con
// los datos del modelo. Correcciones: eliminado costeMensual; ancho 640 SGX
// corregido a 2.100 mm (oficial); largo 640 SGX 6.363 mm y 670 SL 7.495 mm (oficiales);
// campos sin fuente oficial en «aprox» con nota; añadidos descripcion, notas y plazasDormir;
// analisisSlug actualizado a -analisis-opinion.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_ADRIA_M1: Autocaravana[] = [
  {
  id: "adria-coral-plus-670-sl-2026-precio-ficha-tecnica",
  marca: "Adria",
  modelo: "Coral Plus 670 SL",
  tipo: "perfilada",
  categoria: "Autocaravana",
  precioDesde: null, // Adria no publica PVP oficial; no inventar
  potenciaCv: 140, // «no oficial»: ficha técnica oficial Adria UK consultada en octubre de 2026, ya no disponible en la web actual
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
  imagen: "/media/adria-coral-plus-670-sl-2026-precio-ficha-tecnica-oficial.webp",
  imagenOficial:
  "/media/adria-coral-plus-670-sl-2026-precio-ficha-tecnica-oficial.webp",
  imagenInteriorOficial:
  "/media/adria-coral-plus-670-sl-2026-precio-ficha-tecnica-oficial-interior.webp",
  curiosidades:
    "Curiosidad: la Coral equipa de serie un doble techo panorámico practicable (Skyroof): dos grandes cristales abatibles sobre el salón que inundan de luz cenital una perfilada de 7,49 m, la seña de identidad más reconocible de la gama (fuente: https://www.adria-mobil.com/motorhomes/coral).",
  videoId: null,
  videoCanal: null,
  largoMm: 7495, // catálogo oficial Motorhomes 26/27 (7.495 mm)
  anchoMm: 2299, // catálogo oficial Motorhomes 26/27 (2.299 mm)
  altoMm: 2905, // «no oficial»: ficha técnica oficial Adria UK consultada en octubre de 2026, ya no disponible en la web actual
  pesoKg: 3204, // «no oficial»: MiRO según ficha técnica oficial Adria UK (octubre 2026)
  mmaKg: 3500, // «no oficial»: ficha técnica oficial Adria UK (octubre 2026)
  carnetNecesario: "B",
  cargaUtilKg: null, // el payload publicado (509 kg) no cuadra con MTPLM − MiRO; sin cifra fiable
  consumo: null,
  consumoUnidad: null,
  plazas: 4,
  plazasDormir: 4, // catálogo oficial Motorhomes 26/27 (B 3+1)
  parNm: null, // no publicado por el fabricante
  traccion: "Delantera",
  emisionesCo2: null,
  aprox: ["altoMm", "pesoKg", "mmaKg", "potenciaCv"],
  notas:
      "Adria no publica PVP del Coral Plus 670 SL. Longitud, anchura, plazas y plazas para dormir, del catálogo oficial Adria Motorhomes 26/27. Altura, masa en orden de marcha, MMA y potencia, de la ficha técnica oficial Adria UK consultada en octubre de 2026 (página retirada en la web actual): «dato no oficial · en revisión».",
    descripcion: `La Adria Coral Plus 670 SL es una autocaravana perfilada de 7,49 metros que representa el corazón de la gama Coral, la familia de perfiladas más vendida de la marca eslovena. El acabado Plus es el intermedio de los tres que ofrece Adria —Axess, Plus y Supreme—, y el código 670 SL describe la distribución: camas gemelas traseras (single beds) sobre un gran garaje, salón delantero en L y baño central. Es la perfilada clásica para parejas que quieren dormir cada noche en camas hechas, sin montar ni desmontar nada, y que valoran el garaje pasante para bicicletas o equipo voluminoso.

Las medidas oficiales, tomadas del catálogo Adria Motorhomes 2026-2027, son 7.495 mm de longitud y 2.299 mm de anchura, con cuatro plazas homologadas para viajar y cuatro para dormir (tres fijas más una opcional). La altura, la masa en orden de marcha (3.204 kg), la MMA (3.500 kg) y la potencia (140 CV) proceden de la ficha técnica oficial que Adria UK publicaba hasta octubre de 2026; la página fue retirada con la renovación de la web para la temporada 2027, así que esas cifras van marcadas como «dato no oficial · en revisión» aunque su origen sea el propio fabricante. Con 3.500 kg de MMA se conduce con el carnet B, pero hay que hacer números con frialdad: con 3.204 kg de masa en orden de marcha, cuatro adultos a bordo dejan un margen de carga útil muy justo, en torno a los 100-150 kg reales una vez sumados agua, gas y equipaje. Es el punto débil clásico de las perfiladas grandes de 3,5 toneladas y conviene tenerlo claro antes de firmar.

La distribución 670 SL es una de las más demandadas de Europa por una razón sencilla: las camas gemelas traseras, que pueden unirse para formar una gran superficie de descanso, dejan debajo un garaje pasante accesible desde ambos laterales, ideal para dos bicicletas sin desmontar ruedas. El baño central, con ducha separada, puede cerrarse tanto desde el salón como desde el dormitorio, funcionando como un aseo en suite cuando se viaja en pareja. El salón delantero en L, con los asientos de cabina giratorios, acoge cómodamente a cuatro comensales, y el Skyroof panorámico sobre el salón —una seña de identidad de Adria— inunda de luz cenital una célula que de otro modo se sentiría larga y estrecha. La cocina en L monta un frigorífico de gran capacidad y tres fuegos, pensada para cocinar de verdad y no solo calentar.

Mecánicamente, la base es el Fiat Ducato 2.2 MultiJet de 140 CV, con cambio manual de serie y automático opcional, y tracción delantera. Adria ofrece la Coral Plus con calefacción Truma diésel o de gas; en el acabado Plus la calefacción es Truma de aire, mientras que la más homogénea Alde por agua caliente queda reservada al acabado Supreme, un dato a valorar si se planea viajar en invierno con frecuencia. La construcción sigue el sistema de Adria: muebles ensamblados con tacos de madera en lugar de grapas y una garantía de 10 años contra humedades en la carrocería, argumentos de durabilidad que la marca esgrime frente a la competencia generalista.

En la vida a bordo, la Coral Plus 670 SL convence por la sensación de amplitud: los 7,49 m se notan en el garaje y en el dormitorio, y el baño central evita el pasillo estrecho de las perfiladas con baño trasero. Los contras son los propios del formato: 7,49 m de eslora se notan al maniobrar en pueblos y en áreas pequeñas, y la ausencia de cama basculante o literas la deja en tres plazas fijas de dormitorio, así que no es la perfilada para familias numerosas. El equipamiento de seguridad del Ducato —ayudas a la conducción, control de crucero adaptativo en los packs— está al nivel de un turismo moderno.

Del precio, como siempre con Adria, no hay cifra oficial: la marca no publica PVP y el precio lo fija cada concesionario según packs y promociones. Como referencia, en Reino Unido la Coral Plus partía de unas 61.325 libras en versiones de acceso. Sus rivales directas son la Dethleffs Trend con camas gemelas, la Bürstner Lyseo TD 690 G, la Benimar Mileo con distribución similar y la Chausson 777 Titanium Line, todas en la franja de los 7-7,5 m con garaje. Frente a ellas, la Adria se defiende con el Skyroof, la calidad de los muebles y una reventa sólida en el mercado de ocasión.

Cómo lo verificamos: longitud, anchura, plazas y plazas para dormir proceden del catálogo oficial Adria Motorhomes 2026-2027 (centro de descargas de adria-mobil.com), donde el 670 SL figura con 7.495 mm, 2.299 mm, 4 plazas y 3+1 camas en acabados Select y Supreme. El resto de cifras vienen de la ficha técnica oficial de Adria UK, consultada en octubre de 2026 y retirada después; al no poder re-verificarlas en una fuente oficial actual, van marcadas como aproximadas. Adria no publica precios oficiales en ningún mercado.

Para quién es: la Coral Plus 670 SL es para parejas viajeras que quieren una perfilada grande con camas siempre hechas, garaje de verdad y baño en suite, y que aceptan vigilar el peso con la calculadora en la mano. No es para familias de cuatro ni para quien busque el precio más bajo del segmento. El veredicto es que es una de las perfiladas de camas gemelas más equilibradas de su tamaño, con un interior luminoso que envejece bien, lastrada únicamente por la política de precios opaca de la marca y por una carga útil realista más justa de lo que sugiere la ficha.`,
    pros: [
  "Skyroof panorámico sobre el salón: luz cenital en una perfilada de 7,49 m",
  "Camas gemelas traseras unibles en una gran doble con garaje pasante debajo",
  "Baño central con ducha separada que se cierra desde el salón y desde el dormitorio",
  "Fiat Ducato 2.2 de 140 CV con cambio automático y packs de seguridad Fiat disponibles",
  "Muebles ensamblados con tacos de madera y 10 años de garantía anti-humedades en carrocería",
  ],
  contras: [
  "MiRO de 3.204 kg con MMA de 3.500 kg: con 4 adultos a bordo la carga útil real se queda en 100-150 kg",
  "Sin cama basculante ni literas: tres plazas fijas de dormitorio, no es para familias numerosas",
  "Calefacción Alde por agua caliente reservada al acabado Supreme: el Plus monta Truma de aire",
  "Adria no publica PVP en España: el precio final depende del concesionario y de los packs",
  "7,49 m de eslora: en áreas pequeñas y pueblos de calles estrechas cada centímetro se nota",
  ],
  opiniones: [],
  galeria: [
  {
  src: "/media/adria-coral-plus-670-sl-2026-precio-ficha-tecnica-oficial.webp",
  alt: "Adria Coral Plus 670 SL, vista exterior tres cuartos",
  ancho: 1200,
  alto: 675,
  },
  {
  src: "/media/adria-coral-plus-670-sl-2026-precio-ficha-tecnica-oficial-ext2.webp",
  alt: "Adria Coral 670 SL, cabina y puerta de acceso",
  ancho: 1200,
  alto: 800,
  },
  {
  src: "/media/adria-coral-plus-670-sl-2026-precio-ficha-tecnica-oficial-interior.webp",
  alt: "Interior de la Adria Coral 670 SL: salón con Skyroof panorámico",
  ancho: 1200,
  alto: 800,
  },
  {
  src: "/media/adria-coral-plus-670-sl-2026-precio-ficha-tecnica-oficial-interior2.webp",
  alt: "Interior de la Adria Coral 670 SL: salón y cabina con techo panorámico",
  ancho: 1200,
  alto: 800,
  },
  {
  src: "/media/adria-coral-plus-670-sl-2026-precio-ficha-tecnica-ext.webp",
  alt: "Adria Coral Plus 670 SL, vista tres cuartos delantera",
  ancho: 1200,
  alto: 800,
  },
  {
  src: "/media/adria-coral-plus-670-sl-2026-precio-ficha-tecnica-interior.webp",
  alt: "Interior de la Adria Coral Plus 670 SL, salón en L y camas gemelas",
  ancho: 1200,
  alto: 800,
  },
  ],
  analisisSlug: "adria-coral-plus-670-sl-2026-analisis-opinion",
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
  nombre: "Revisión célula Adria (anual recomendada)",
  queSeCambia:
  "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
  costeAproxEur: 250,
  },
  ],
  costeAnualAproxEur: 600,
  fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Adria",
  },
  euroncap: null,
  fuenteNombre: "Adria (catálogo oficial Motorhomes 26/27)",
  fuenteUrl: "https://web-cdn.adria-mobil.com/5531/INT_Motorhomes_2027-08-WEB.pdf",
  }
];
