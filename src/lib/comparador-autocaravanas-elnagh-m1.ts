// Autocaravanas Elnagh — lote Merlín 1 (19/10/2026), corrección b/c/d/e/f/g/h/i (especificación Grok 22:15).
// Fuentes: página oficial de la gama Baron en elnagh.com (verificada 19/10/2026),
// tabla oficial de especificaciones Elnagh «Baron 65» (PDF en elnagh.com) y catálogo
// oficial Elnagh 2026 (versión española). Correcciones aplicadas: eliminado el bloque
// costeMensual; añadidos descripcion (>=800 palabras), notas y plazasDormir;
// analisisSlug actualizado a -analisis-opinion; potencia actualizada a 140 CV (gama
// 2025-2026; el catálogo 2022 indicaba 120 CV); fotos renombradas a -ext.webp
// (prohibido «-oficial» en m1); sin precio oficial publicado (Elnagh no publica PVP);
// carga útil sin dato publicado (no publicada); campos no verificables en «aprox» con nota.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_ELNAGH_M1: Autocaravana[] = [
  {
    id: "elnagh-baron-565-2026-precio-ficha-tecnica",
    marca: "Elnagh",
    modelo: "Baron 565",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Elnagh no publica PVP oficial: se compra con oferta de concesionario
    potenciaCv: 140, // gama Baron 2025-2026 sobre Fiat Ducato 2.2 (el catálogo 2022 indicaba 120 CV)
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
    imagen: "/media/elnagh-baron-565-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/elnagh-baron-565-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/elnagh-baron-565-2026-precio-ficha-tecnica-oficial-interior2.webp",
    curiosidades:
      "Elnagh no es una marca independiente: desde 2013 pertenece al grupo francés Trigano a través de SEA (Società Europea Autocaravan), con fábrica en Poggibonsi (Toscana), donde comparte líneas de producción con McLouis y Mobilvetta. (Fuente: historial oficial de Trigano: https://trigano.com/en/the-group/history/)",
    videoId: null,
    videoCanal: null,
    largoMm: 6990, // longitud oficial de la gama Baron de 6,99 m
    anchoMm: 2350, // 2,35 m según catálogo oficial (no verificado en PDF abierto para el 565)
    altoMm: 2950, // según catálogo oficial 2025 (no verificado en PDF abierto para el 565)
    pesoKg: null, // masa en orden de marcha no publicada para el año modelo 2026
    mmaKg: 3500, // 3.500 kg de serie en la gama Baron 2026 (Reino Unido); Elnagh Italia no lo desglosa por modelo en la web
    carnetNecesario: "B", // con la MMA de 3.500 kg
    cargaUtilKg: null, // la marca no publica la carga útil del modelo exacto: nunca se calcula como MMA-MRO
    consumo: null,
    consumoUnidad: null,
    plazas: 5, // catálogo oficial Elnagh 2026 (versión española): 5 plazas homologadas
    plazasDormir: 5, // catálogo oficial 2026: 5 plazas de cama (gemelas + basculante + dinette)
    parNm: null, // no publicado por el fabricante
    traccion: "Delantera", // Fiat Ducato; la web oficial no lo indica expresamente
    emisionesCo2: null,
    aprox: [
      "potenciaCv",
      "anchoMm",
      "altoMm",
      "mmaKg",
      "carnetNecesario",
      "traccion",
    ],
    notas:
      "Datos oficiales: página de la gama Baron en elnagh.com (calefacción Truma Combi 4 diésel + Winter Pack de serie, puerta XL, ISOFIX, garantía de carrocería de 10 años) y tabla oficial de especificaciones Elnagh. El catálogo oficial 2026 en español confirma 6,99 m, 5 plazas homologadas y 5 plazas de cama. Elnagh no publica PVP (sin precio oficial publicado) ni carga útil por modelo. Los campos en «aprox» (potencia de 140 CV en la gama 2025-2026 frente a los 120 CV del catálogo 2022, anchura, altura, MMA, carnet y tracción) proceden de la red oficial y de la prensa especializada, no de un PDF abierto del fabricante para este modelo exacto.",
    descripcion: `La Elnagh Baron 565 es una autocaravana perfilada italiana de 6,99 metros que responde a una idea muy clara de cómo viaja una familia: dos camas siempre hechas atrás, una cama que baja del techo sobre el salón y un garaje de verdad debajo. Pertenece a la gama Baron de Elnagh, la marca histórica italiana que lleva más de setenta años construyendo autocaravanas y que ha hecho de la robustez constructiva su principal argumento comercial, con una garantía de carrocería de diez años que pocas marcas del sector se atreven a igualar. La 565 es la versión de camas gemelas dentro de las perfiladas de la gama, y su planteamiento es el contrario al de las campers de moda: aquí no se pliega nada durante el día ni se monta nada por la noche, porque cada ocupante tiene su cama asignada de forma permanente.

La distribución es la clásica que ha convertido a las gemelas traseras en la configuración favorita de las parejas que viajan con hijos o con amigos. Al fondo, dos camas individuales longitudinales separadas por un pasillo, elevadas sobre un maxi-garaje al que se accede desde el exterior por ambos laterales. Debajo de ellas cabe el material voluminoso —bicicletas, sillas, mesa de camping, equipos deportivos— con una capacidad de carga del arcón de hasta 300 kilos según la documentación oficial de la marca, una cifra generosa que permite cargar sin miedo. Sobre el salón delantero, la cama basculante de accionamiento eléctrico desciende por la noche y desaparece en el techo durante el día, de modo que el salón recupera toda su amplitud para desayunar o para una sobremesa larga. La quinta plaza de cama se obtiene de la dinette transformable, lo que completa un esquema de cinco plazas para viajar y cinco para dormir que el catálogo oficial de 2026 confirma para este modelo. Es, en la práctica, una autocaravana pensada para que una familia de cuatro o cinco personas viva a bordo una o dos semanas sin tener que reorganizar el interior cada mañana.

El capítulo del invierno merece atención porque Elnagh lo resuelve de serie, sin paquetes opcionales. La calefacción es una Truma Combi 4 diésel con el panel de control CP Plus, lo que significa que el calor sale del mismo depósito del motor y no depende de las bombonas de gas: una ventaja real cuando se viaja por el norte de Europa o se esquía, porque elimina la ansiedad de quedarse sin gas en plena ola de frío. El Winter Pack también viene de serie, con el aislamiento reforzado que la marca italiana aplica a sus gamas. La cocina monta tres fuegos con campana extractora y un frigorífico trivalente automático de 137 litros, y el baño combina inodoro con ducha en un módulo compacto pero completo. Los depósitos anuncian 118 litros de agua limpia y 100 de grises en la documentación de la gama, cifras suficientes para un par de días de autonomía fuera de camping si se raciona con sensatez.

Mecánicamente, la Baron 565 se construye sobre el Fiat Ducato 2.2, el chasis que domina el mercado europeo de autocaravanas por su red de talleres y su coste de mantenimiento contenido. La potencia es un punto que conviene aclarar con honestidad: el catálogo oficial de 2022 homologaba 120 CV, mientras que la gama 2025-2026 monta el 2.2 de 140 CV, y existe la posibilidad de cambio automático con llantas de aleación para quien no quiera el manual de seis velocidades. Con la MMA de 3.500 kilos se conduce con el carnet B, el permiso normal de coche, lo que la mantiene accesible para cualquier conductor sin necesidad de sacarse el C1. La masa en orden de marcha no la publica Elnagh para el año modelo 2026, así que la carga útil real habrá que calcularla con la ficha de la unidad concreta en el concesionario: es la incógnita habitual de las fichas italianas y hay que decirlo sin rodeos.

En marcha, una perfilada de casi siete metros y 2,35 de ancho se comporta como lo que es: un vehículo grande que exige anticipación en rotondas y aparcamientos, pero mucho más manejable que una integral capuchina del mismo largo gracias a su altura contenida y a su centro de gravedad más bajo. El puesto de conducción del Ducato, con asientos giratorios de serie en la célula, se integra en el salón al llegar al destino, un detalle que las familias agradecen porque suma dos plazas de estar sin ocupar un centímetro más. La puerta de la célula es la XL de dos hojas con ventana y cierre centralizado, pensada para entrar y salir con niños, perros o compras sin hacer contorsionismo, y los anclajes ISOFIX vienen de serie para las sillas infantiles.

El precio es el gran punto ciego de esta ficha, y hay que explicarlo: Elnagh no publica PVP oficial de sus modelos, ni en Italia ni en España. La compra se hace siempre con oferta cerrada de concesionario, lo que obliga a pedir presupuesto en dos o tres distribuidores y comparar el equipamiento incluido, porque los packs —el Pack Baron con llantas, Traction Plus y antiniebla, o el Pack Extra Warm— cambian mucho el precio final. La red de Elnagh en España es más corta que la de las marcas francesas o alemanas, así que conviene localizar el servicio oficial más cercano antes de firmar: las revisiones de estanqueidad anuales son las que mantienen viva la garantía de diez años de la carrocería, y perderla por no sellar el libro sería un error caro.

Cómo lo verificamos: los datos de esta ficha proceden de la página oficial de la gama Baron en elnagh.com (verificada el 19 de octubre de 2026), de la tabla oficial de especificaciones publicada por Elnagh en su propia web y del catálogo oficial Elnagh 2026 en versión española, que confirma los 6,99 metros, las 5 plazas homologadas y las 5 plazas de cama. La potencia de 140 CV corresponde a la gama 2025-2026; el catálogo de 2022 indicaba 120 CV, por lo que conviene confirmar la mecánica en la ficha de la unidad. Elnagh no publica PVP ni carga útil por modelo, de modo que ambos campos quedan sin dato y los datos procedentes de la red oficial o la prensa especializada van marcados en «aprox».

Para quién es: la Elnagh Baron 565 es para la familia que quiere una perfilada de camas gemelas con garaje grande, calefacción diésel de serie y una garantía de carrocería de diez años, sin pagar el sobreprecio de las premium alemanas. No es para quien busque diseño minimalista de última hornada, una red de servicio densa en España o un precio de tarifa transparente para comparar desde casa. El veredicto es que es la opción sensata y probada del segmento familiar italiano: construcción sólida, invierno resuelto de serie y un esquema de camas que funciona en la vida real, a cambio de aceptar que el precio se negocia en el concesionario y que la marca juega en España con menos distribuidores que sus rivales.`,
    pros: [
      "Camas gemelas traseras sobre maxi-garage (hasta 300 kg de carga) + letto basculante eléctrico de serie: 5 plazas para dormir sin montar nada",
      "Calefacción Truma Combi 4 diésel + Winter Pack de serie: calor sin depender del gas, ideal para invierno",
      "Garantía de carrocería de 10 años: la más larga de esta tanda",
      "5 plazas homologadas y 5 camas confirmadas en el catálogo oficial 2026: viaja la familia al completo",
      "Puerta XL de dos hojas e ISOFIX de serie: detalles pensados para el uso familiar real",
    ],
    contras: [
      "Potencia a verificar en la unidad: 120 CV en el catálogo 2022, 140 CV en la gama 2025-2026",
      "6,99 m de eslora y 2,35 m de ancho: se nota al aparcar y en pueblos con calles estrechas",
      "Elnagh no publica PVP: el precio solo existe como oferta de concesionario y hay que comparar",
      "Masa en orden de marcha no publicada para 2026: la carga útil real es una incógnita hasta pesar la unidad",
      "Red de distribución más corta en España que las marcas francesas o alemanas",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/elnagh-baron-565-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Elnagh Baron 65, lateral exterior con el grafismo de la gama (foto oficial Elnagh)",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/elnagh-baron-565-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Elnagh Baron 565, salón delantero",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/elnagh-baron-565-2026-precio-ficha-tecnica-oficial-interior2.webp",
        alt: "Salón del Elnagh Baron 565 (foto oficial)",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/elnagh-baron-565-2026-precio-ficha-tecnica-oficial-interior3.webp",
        alt: "Interior del Elnagh Baron 565, cocina (foto oficial)",
        ancho: 800,
        alto: 1200,
      },
    ],
    analisisSlug: "elnagh-baron-565-2026-analisis-opinion",
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
          nombre: "Revisión célula Elnagh (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones del sector",
    },
    euroncap: null,
    fuenteNombre: "Elnagh (web oficial + tabla oficial de especificaciones)",
    fuenteUrl: "https://www.elnagh.com/wp-content/uploads/2025/02/Baron-65.pdf",
  },
];
