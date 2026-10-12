// "La pregunta del día" — micro-contenido diario (multas, DGT, coches eléctricos).
//
// Los crons automáticos añaden UNA entrada al día respondiendo una pregunta
// REAL que la gente busca (People Also Ask de Google, dudas de conductores).
// Respuestas directas de 150-250 palabras, sin relleno, con fuente oficial.
//
// Las entradas marcadas con `ejemplo: true` NO se muestran en la web: solo
// documentan el formato para los crons. Formato completo en docs/contenido-diario.md.

export interface PreguntaDelDia {
  /** Fecha de publicación, formato YYYY-MM-DD (Europe/Madrid) */
  fecha: string;
  /** La pregunta tal cual la buscaría un usuario */
  pregunta: string;
  /** Respuesta directa, 150-250 palabras, sin relleno */
  respuesta: string;
  /** Fuente oficial que respalda la respuesta */
  fuenteNombre: string;
  /** URL absoluta de la fuente oficial */
  fuenteUrl: string;
  /** true = ejemplo de formato, NO se publica en la web */
  ejemplo?: boolean;
  /** Enlaces internos opcionales a artículos o herramientas relacionadas */
  enlacesInternos?: { texto: string; url: string }[];
}

export const PREGUNTAS_DEL_DIA: PreguntaDelDia[] = [
  {
    fecha: "2026-10-12",
    pregunta: "¿Cuánto cuesta cargar un coche eléctrico?",
    respuesta:
      "Según la tabla oficial de costes de combustibles del Ministerio para la Transición Ecológica (MITECO), actualizada el 23 de septiembre de 2026, recorrer 100 km con un coche eléctrico cargado en casa cuesta de media 3,29 €. Si lo cargas en un punto de recarga rápida pública, el coste sube a 8,11 € por cada 100 km.\n\n" +
      "Para comparar: esos mismos 100 km cuestan 9,82 € con gasolina 95 y 8,20 € con diésel, según el mismo indicador oficial. Cargar en casa sale así unas tres veces más barato que la gasolina; pero si dependes siempre de la carga rápida pública, la ventaja frente al diésel casi desaparece (8,11 € frente a 8,20 €).\n\n" +
      "El MITECO calcula estas cifras con los precios medios de mercado de la energía y los consumos homologados de vehículos comparables por peso y potencia, y advierte de que son estimaciones orientativas: tu coste real dependerá de tu tarifa eléctrica, tu conducción y tu modelo. El truco para pagar menos es programar la carga en las horas más baratas del día (de madrugada con el PVPC) o contratar una tarifa específica para vehículo eléctrico.",
    fuenteNombre: "MITECO",
    fuenteUrl:
      "https://www.miteco.gob.es/es/energia/hidrocarburos-nuevos-combustibles/euros-por-100-km/coste-euro-100km.html",
    enlacesInternos: [
      {
        texto: "¿Cuánto tarda en cargar un coche eléctrico?",
        url: "/la-pregunta-del-dia#2026-10-09",
      },
    ],
  },
  {
    fecha: "2026-10-11",
    pregunta: "¿Qué margen de error tienen los radares de la DGT?",
    respuesta:
      "El margen de error legal de los radares lo fija la Orden ICT/155/2020 y depende del tipo de aparato. En los radares fijos es de 5 km/h en vías con límite de hasta 100 km/h, y del 5 % en vías de más de 100 km/h. En los radares móviles (los instalados en vehículos de la DGT) el margen es mayor: 7 km/h hasta 100 km/h y 7 % por encima de esa cifra. Es la conocida «regla del 7» que aplica la DGT.\n\n" +
      "En la práctica: en una vía limitada a 90 km/h, la multa no llega hasta superar los 95 km/h con un radar fijo (97 km/h si es móvil). En una autopista de 120 km/h, un radar fijo sanciona a partir de 126 km/h y un móvil a partir de unos 128 km/h. Los radares de tramo, que miden la velocidad media entre dos puntos, aplican márgenes aún más ajustados: 3 km/h o 3 %.\n\n" +
      "Importante: ese margen no es una autorización para ir más rápido, sino la tolerancia técnica del aparato, y los equipos más nuevos son más precisos. Si tu multa no descuenta el margen que corresponde al tipo de radar que te denunció, puede ser recurrible: el boletín de denuncia debe indicar el cinemómetro empleado y el margen aplicado. Compruébalo antes de pagar, porque el pronto pago cierra la puerta al recurso.",
    fuenteNombre: "BOE",
    fuenteUrl: "https://www.boe.es/eli/es/o/2020/02/07/ict155",
    enlacesInternos: [
      {
        texto: "Márgenes de error de los radares: tablas oficiales y cómo recurrir",
        url: "/blog/margenes-de-error-de-los-radares-de-la-dgt-te-han-multado-injustamente-tablas-oficiales-multas-falsas-y-como-recurrirlas",
      },
    ],
  },
  {
    fecha: "2026-10-09",
    pregunta: "¿Cuánto tarda en cargar un coche eléctrico?",
    respuesta:
      "Depende del cargador, no del coche. Con un enchufe doméstico normal (2,3 kW, carga lenta) un eléctrico medio de unos 40 kWh tarda entre 15 y 20 horas en cargarse por completo; solo sirve para emergencias o para dejar el coche enchufado toda la noche. La forma normal de cargar es el wallbox de casa: con 7,4 kW un coche como el Hyundai IONIQ 5 se carga entero en unas 6 horas y 10 minutos, perfecto para recargarlo de noche.\n\n" +
      "En carga rápida (50 kW o más, corriente continua, la de las estaciones públicas) se llega al 80 % en unos 30-60 minutos, y en ultrarrápida (150-350 kW, la de autopistas) el IONIQ 5 pasa del 10 % al 80 % en solo 18 minutos. Eso sí: no todos los coches admiten esas potencias, y la velocidad cae en picado a partir del 80 %, así que en viajes largos se carga hasta ese punto y se sigue camino.\n\n" +
      "Para el día a día, lo ideal es cargar en casa manteniendo la batería entre el 20 % y el 80 %, y reservar la carga rápida para los viajes: cargar siempre al 100 % o abusar de la carga rápida degrada la batería más rápido. Si vas a comprar uno, comprueba la potencia máxima de carga en corriente continua que admite tu modelo: es lo que decide si un viaje largo es de 20 minutos o de una hora por parada.",
    fuenteNombre: "Hyundai España",
    fuenteUrl:
      "https://www.hyundai.com/es/es/zonaeco/eco-life/cargador-coche-electrico",
    enlacesInternos: [
      {
        texto: "Qué etiqueta DGT le corresponde a un eléctrico",
        url: "/calculadora-etiqueta-dgt",
      },
      {
        texto: "Cuántos años de garantía tiene la batería: lo que dice la ley",
        url: "/la-pregunta-del-dia#2026-10-07",
      },
    ],
  },
  {
    fecha: "2026-10-08",
    pregunta: "¿Cuánto es la multa por usar el móvil al volante?",
    respuesta:
      "Sujetar el teléfono móvil con la mano mientras conduces te cuesta 200 € y 6 puntos del carnet. Es una infracción grave y una de las detracciones más duras del permiso por puntos: desde la reforma de la Ley de Tráfico (Ley 18/2021, en vigor desde marzo de 2022), el Anexo II retira 6 puntos por «utilizar, sujetando con la mano, dispositivos de telefonía móvil mientras se conduce». Con un saldo ordinario de 12 puntos, basta repetirla dos veces para perder la vigencia del permiso.\n\n" +
      "Si usas el móvil manualmente pero sin sujetarlo con la mano —por ejemplo, toqueteándolo en el soporte— o manipulas el navegador u otro sistema de comunicación, la multa también es de 200 €, pero la detracción baja a 3 puntos.\n\n" +
      "Ojo: detenido en un semáforo o en un atasco también cuenta. La ley distingue entre detención y estacionamiento, y la propia DGT ha aclarado que usar el móvil ante un semáforo en rojo se sanciona igual: 200 € y 6 puntos. No sirve el truco del punto muerto.\n\n" +
      "Con el pronto pago pagas 100 € (50 % en 20 días naturales), pero los puntos se pierden igualmente y pagar cierra la puerta a recurrir. Si te denuncia un agente, su testimonio tiene presunción de veracidad: sin pruebas (foto que no te identifica, error en la matrícula o en el lugar), recurrir es difícil pero no imposible.\n\n" +
      "Además esta semana la DGT tiene en marcha una campaña especial de vigilancia de distracciones (del 5 al 11 de octubre): agentes y cámaras miran justo eso, el móvil en la mano.",
    fuenteNombre: "BOE",
    fuenteUrl:
      "https://www.boe.es/buscar/act.php?id=BOE-A-2021-21006&tn=1&p=20211221",
    enlacesInternos: [
      {
        texto: "Multa por usar el móvil: cómo recurrirla",
        url: "/blog/multa-uso-movil-conduciendo-recurrir",
      },
      {
        texto: "Campaña DGT de distracciones de octubre de 2026",
        url: "/blog/campana-dgt-distracciones-octubre-2026",
      },
    ],
  },
  {
    fecha: "2026-10-07",
    pregunta: "¿Cuántos años de garantía tiene la batería de un coche eléctrico?",
    respuesta:
      "Lo habitual en las marcas es 8 años o 160.000 km, lo primero que se cumpla, con un estado de salud mínimo garantizado del 70 %: si dentro de ese plazo la batería cae por debajo, el fabricante la repara o la sustituye. Es el estándar del sector, y algunos modelos amplían la cobertura.\n\n" +
      "Y no es solo una promesa comercial. El Reglamento Técnico Mundial nº 22 de UNECE, vigente desde 2022, fija mínimos de durabilidad para turismos y furgonetas eléctricos: la batería debe conservar al menos el 80 % de su capacidad a los 5 años o 100.000 km, y el 70 % a los 8 años o 160.000 km.\n\n" +
      "Los datos reales son aún mejores: el Arval Mobility Observatory analizó 24.000 certificados de salud de baterías de 30 marcas en 11 países europeos. A los 70.000 km o 4 años conservan de media el 93 % de la capacidad, y a los 160.000 km o 6 años siguen por encima del 90 %. La degradación media ronda el 1 % cada 25.000 km.\n\n" +
      "Qué la acorta: abusar de la carga rápida, cargar siempre al 100 % o dejarla en 0 %, y el calor extremo. Para alargarla: carga diaria entre el 20 % y el 80 % y reserva la carga rápida para los viajes largos.",
    fuenteNombre: "UNECE",
    fuenteUrl:
      "https://wiki.unece.org/download/attachments/166724120/ECE-TRAN-2005-124-22e.pdf?api=v2&modificationDate=1650892900593&version=2",
    enlacesInternos: [
      {
        texto: "Eléctricos baratos: récord de ventas en Europa en 2026",
        url: "/blog/electricos-baratos-record-europa-2026",
      },
      {
        texto: "Qué etiqueta DGT le corresponde a un eléctrico",
        url: "/calculadora-etiqueta-dgt",
      },
    ],
  },
  {
    fecha: "2026-10-06",
    pregunta: "¿Es obligatorio llevar la pegatina de la DGT en el parabrisas?",
    respuesta:
      "No. La propia DGT lo deja claro en su sede electrónica: la colocación del distintivo ambiental es voluntaria. Ninguna norma estatal te obliga a llevar la pegatina en el parabrisas para circular por España.\n\n" +
      "Eso sí, la DGT recomienda llevarla puesta, y hay un motivo de peso: cada ayuntamiento puede regular la circulación en función de la etiqueta. En las Zonas de Bajas Emisiones y durante los episodios de alta contaminación, el distintivo visible es lo que permite a los agentes distinguir de un vistazo qué vehículos pueden circular. Sin ella a la vista, aunque tu coche tenga derecho a la etiqueta C, B, ECO o CERO, no podrás beneficiarte de sus ventajas: es imposible comprobarlo.\n\n" +
      "Si la pides, va adherida por dentro del coche, en el ángulo inferior derecho del parabrisas delantero, sin tapar el campo de visión del conductor. En las motos, en cualquier punto visible del vehículo. La emisión de la etiqueta cuesta 5 € (más gastos de envío si la pides online) y se consigue en oficinas de Correos, talleres autorizados CETRAA, gestores administrativos e IDEAUTO.\n\n" +
      "Ten en cuenta que la mitad más contaminante del parque no tiene derecho a ningún distintivo: si tu coche es de categoría A, no existe pegatina que ponerle. Y si vas a viajar al extranjero, el distintivo español no vale fuera: Alemania, Austria, Dinamarca o Francia tienen su propio sistema y tendrás que informarte antes.",
    fuenteNombre: "DGT",
    fuenteUrl: "https://sede.dgt.gob.es/es/vehiculos/informacion-de-vehiculos/distintivo-ambiental/index.html?matricula=2521BMB",
    enlacesInternos: [
      {
        texto: "Calcula la etiqueta DGT de tu coche",
        url: "/calculadora-etiqueta-dgt",
      },
      {
        texto: "ZBE en España 2026: qué ciudades multan y cuánto",
        url: "/blog/zbe-espana-2026-ciudades-multan-cuanto-multa",
      },
    ],
  },
  {
    fecha: "2026-10-05",
    pregunta: "¿Cuánto es la multa por saltarse un semáforo en rojo?",
    respuesta:
      "Saltarse un semáforo en rojo te cuesta 200 € y 4 puntos del carnet. Es una infracción grave: el artículo 76.k) de la Ley de Seguridad Vial (Real Decreto Legislativo 6/2015) tipifica «no respetar la luz roja de un semáforo», y las infracciones graves se sancionan con 200 € (art. 80.1). Los 4 puntos los detrae el Anexo II por incumplir la obligación de detenerse ante un semáforo con la luz roja encendida.\n\n" +
      "La sanción puede imponértela un agente en el acto o llegarte después por carta: las cámaras foto-rojo (que deben estar señalizadas) toman varias fotos del coche antes y después de la línea de detención con el semáforo en rojo.\n\n" +
      "Con el ámbar fijo, si puedes detenerte con seguridad debes hacerlo: pasarlo pudiendo parar se sanciona igual que el rojo. Solo hay dos casos sin sanción: que un agente te ordene pasar (sus indicaciones prevalecen sobre la señal) o que cruces para ceder el paso a un vehículo prioritario (ambulancia, policía, bomberos). Si te captó una cámara, tendrás que recurrir con pruebas.\n\n" +
      "El pronto pago (50 % de descuento en 20 días naturales) no te devuelve los puntos, pero sí cierra la puerta al recurso. Si la denuncia tiene defectos (cámara sin señalizar, fotos que no prueban el paso en rojo), la multa se puede anular: analízala gratis antes de pagar.",
    fuenteNombre: "BOE",
    fuenteUrl: "https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722",
    enlacesInternos: [
      {
        texto: "Saltarse un stop: también 200 € y 4 puntos",
        url: "/blog/multa-saltarse-stop",
      },
      {
        texto: "Analizar mi multa gratis con IA",
        url: "/",
      },
    ],
  },
  {
    fecha: "2026-10-04",
    pregunta: "¿Cuánto dinero te dan por comprar un coche eléctrico en 2026?",
    respuesta:
      "Hasta 4.500 € por turismo si eres particular, con el Plan Auto+, el programa que sustituye al MOVES III (Real Decreto 609/2026). La ayuda no es fija: se calcula sumando porcentajes sobre esos 4.500 € según tres criterios (eléctrico, económico y europeo).\n\n" +
      "Por ser eléctrico puro obtienes el 50 % (2.250 €); si es híbrido enchufable o de autonomía extendida, solo el 25 % (1.125 €). Si el coche cuesta hasta 35.000 € (precio de factura sin impuestos, tras descuentos) sumas otro 25 % (1.125 €); entre 35.001 y 45.000 €, solo el 15 % (675 €). Si el montaje final se hizo en la UE, otro 15 % (675 €), y hasta un 10 % más (450 €) si la batería también se fabricó o ensambló en Europa.\n\n" +
      "El tope de 4.500 € solo lo alcanza un eléctrico puro, barato y europeo; los precios por encima de 45.000 € quedan fuera y la etiqueta CERO de la DGT es obligatoria.\n\n" +
      "A diferencia del MOVES, la gestión es estatal a través del IDAE y el descuento se aplica directamente en el concesionario: no adelantas el dinero. El plan es retroactivo al 1 de enero de 2026 y cada particular solo puede pedirlo para un vehículo. Los fondos (400 millones) vuelan: pide la ayuda en cuanto firmes la compra.",
    fuenteNombre: "BOE",
    fuenteUrl: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-16010",
    enlacesInternos: [
      {
        texto: "Plan Auto+ para autónomos y empresas: hasta 12.000 €",
        url: "/blog/plan-auto-ayudas-autonomos-empresas-coche-electrico",
      },
      {
        texto: "Calcula la etiqueta DGT de cualquier coche",
        url: "/calculadora-etiqueta-dgt",
      },
    ],
  },
  {
    fecha: "2026-10-03",
    pregunta: "¿Cuántos puntos te quitan por dar positivo en alcohol?",
    respuesta:
      "Depende de la tasa que des en aire espirado. Según la DGT, si das entre 0,25 y 0,50 mg/l, la multa es de 500 € y te quitan 4 puntos. Si superas los 0,50 mg/l, la sanción sube a 1.000 € y te quitan 6 puntos. En ambos casos es una infracción muy grave.\n\n" +
      "Si ya habías dado positivo en el año anterior (reincidencia), la multa siempre es de 1.000 € y te quitan 4 o 6 puntos según la tasa de esta segunda prueba.\n\n" +
      "Los límites cambian si eres novel (menos de 2 años de carnet) o profesional: tu tasa máxima es 0,15 mg/l en aire (0,30 g/l en sangre), frente a los 0,25 mg/l (0,50 g/l en sangre) del resto de conductores.\n\n" +
      "Si llegas a 0,60 mg/l en aire o 1,2 g/l en sangre ya no es multa: es un delito contra la seguridad vial, con penas de prisión de tres a seis meses, multa o trabajos en beneficio de la comunidad, y retirada del carnet de uno a cuatro años. Negarte a soplar también es delito (prisión de seis meses a un año).\n\n" +
      "Ojo con las noticias: el Gobierno ha propuesto rebajar el límite general a 0,1 mg/l, pero esa reforma aún no se ha aprobado ni está en vigor; hoy nadie puede ser sancionado con ese límite.",
    fuenteNombre: "DGT",
    fuenteUrl: "https://www.dgt.es/comunicacion/noticias/controles-alcohol-drogas",
  },
  {
    fecha: "2026-10-02",
    pregunta: "EJEMPLO — ¿Pregunta de ejemplo que haría un usuario?",
    respuesta:
      "EJEMPLO — Respuesta directa de entre 150 y 250 palabras que resuelve la duda sin rodeos. Este texto es solo un ejemplo de formato y se sustituye por contenido real verificado con fuente oficial. Las entradas marcadas como ejemplo nunca se publican en la web.",
    fuenteNombre: "EJEMPLO",
    fuenteUrl: "https://www.ejemplo.es",
    ejemplo: true,
  },
  {
    fecha: "2026-10-01",
    pregunta: "EJEMPLO — ¿Segunda pregunta de ejemplo?",
    respuesta:
      "EJEMPLO — Segunda respuesta de ejemplo para mostrar el formato del archivo. Cuando los crons empiecen a añadir entradas reales (sin la marca ejemplo), estas desaparecerán de la vista automáticamente.",
    fuenteNombre: "EJEMPLO",
    fuenteUrl: "https://www.ejemplo.es",
    ejemplo: true,
  },
  {
    fecha: "2026-09-30",
    pregunta: "EJEMPLO — ¿Tercera pregunta de ejemplo?",
    respuesta:
      "EJEMPLO — Tercera respuesta de ejemplo. El formato completo está documentado en docs/contenido-diario.md para que los crons automáticos añadan una entrada real al día.",
    fuenteNombre: "EJEMPLO",
    fuenteUrl: "https://www.ejemplo.es",
    ejemplo: true,
  },
];

/** Entradas reales (sin ejemplos), ordenadas de más reciente a más antigua */
export const PREGUNTAS_REALES: PreguntaDelDia[] = PREGUNTAS_DEL_DIA.filter(
  (p) => !p.ejemplo
).sort((a, b) => b.fecha.localeCompare(a.fecha));

/** Fecha de hoy en Europe/Madrid, formato YYYY-MM-DD */
export function hoyES(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Madrid",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

/**
 * La pregunta a destacar como "hoy": la de la fecha actual si existe;
 * si no, la más reciente anterior a hoy. null = aún no hay datos reales.
 */
export function preguntaDeHoy(): PreguntaDelDia | null {
  const hoy = hoyES();
  return PREGUNTAS_REALES.find((p) => p.fecha <= hoy) ?? null;
}

/** Fecha en formato largo español, ej. "3 de octubre de 2026" */
export function fechaLargaES(fechaYYYYMMDD: string): string {
  const [y, m, d] = fechaYYYYMMDD.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
