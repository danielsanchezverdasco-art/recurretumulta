// Diccionario visual de señales de tráfico — datos.
// Códigos oficiales del Reglamento General de Circulación (anexo I).
// Las multas indicadas son importes estándar orientativos de la LSV/RGC;
// solo se incluyen cuando el dato es estándar y verificable.

export type CategoriaSenal =
  | "advertencia"
  | "prohibicion"
  | "obligacion"
  | "indicacion"
  | "obras";

export const CATEGORIAS_SENAL: { id: CategoriaSenal; nombre: string; descripcion: string }[] = [
  { id: "advertencia", nombre: "Advertencia de peligro", descripcion: "Triangulares con borde rojo: avisan de un peligro. No multan por sí mismas, pero ignorarlas puede salir caro." },
  { id: "prohibicion", nombre: "Prohibición y restricción", descripcion: "Circulares con borde rojo: prohíben o limitan. Saltárselas es infracción grave: 200 € en la mayoría de los casos." },
  { id: "obligacion", nombre: "Obligación", descripcion: "Circulares azules: indican algo que DEBES hacer (sentido, pasar por un lado, usar la rotonda)." },
  { id: "indicacion", nombre: "Indicación", descripcion: "Cuadradas o rectangulares azules: informan y orientan. No suelen conllevar multa directa." },
  { id: "obras", nombre: "Obras", descripcion: "Fondo amarillo: las mismas señales pero en tramos de obras. La sanción es la misma que la señal equivalente." },
];

export type Senal = {
  id: string;
  codigo: string;
  nombre: string;
  categoria: CategoriaSenal;
  imagen: string;
  significado: string;
  queHacer: string;
  multa?: string;
};

export const SENALES: Senal[] = [
  // ── ADVERTENCIA ──
  {
    id: "p-1", codigo: "P-1", nombre: "Semáforos", categoria: "advertencia",
    imagen: "/media/senales/p-1.webp",
    significado: "Advierte de que más adelante hay un cruce regulado por semáforos. Es de las señales que más se pasan por alto en travesías.",
    queHacer: "Reduce la velocidad y prepárate para detenerte: el semáforo puede estar en ámbar o rojo al llegar.",
  },
  {
    id: "p-4", codigo: "P-4", nombre: "Intersección con circulación giratoria", categoria: "advertencia",
    imagen: "/media/senales/p-4.webp",
    significado: "Avisa de que se aproxima una rotonda. No da la prioridad: solo advierte de que la hay.",
    queHacer: "Reduce la velocidad, cede el paso a quien ya circula dentro y entra solo cuando haya hueco.",
  },
  {
    id: "p-13", codigo: "P-13", nombre: "Curva peligrosa", categoria: "advertencia",
    imagen: "/media/senales/p-13.webp",
    significado: "Advierte de una curva cerrada a la derecha (existe la versión a la izquierda). Es una de las causas clásicas de salidas de vía.",
    queHacer: "Frena ANTES de entrar en la curva, no dentro. Si llueve o es de noche, extrema la precaución.",
  },
  {
    id: "p-15a", codigo: "P-15a", nombre: "Resalto en la calzada", categoria: "advertencia",
    imagen: "/media/senales/p-15a.webp",
    significado: "Avisa de un badén o resalto (lomo de asno). Suelen estar en travesías y zonas 30.",
    queHacer: "Reduce a la velocidad indicada (normalmente 30 km/h o menos) para no dañar la suspensión ni perder el control.",
  },
  {
    id: "p-16a", codigo: "P-16a", nombre: "Bajada con fuerte pendiente", categoria: "advertencia",
    imagen: "/media/senales/p-16a.webp",
    significado: "Advierte de un descenso pronunciado. El peligro real es el sobrecalentamiento de los frenos.",
    queHacer: "Baja una o dos marchas y usa el freno motor; evita pisar el freno de forma continua durante toda la bajada.",
  },
  {
    id: "p-17", codigo: "P-17", nombre: "Estrechamiento de calzada", categoria: "advertencia",
    imagen: "/media/senales/p-17.webp",
    significado: "La calzada se estrecha por ambos lados (hay versiones de estrechamiento por un solo lado).",
    queHacer: "Modera la velocidad y, si el estrechamiento solo permite un vehículo, cede el paso al que ya esté dentro.",
  },
  {
    id: "p-20", codigo: "P-20", nombre: "Peatones", categoria: "advertencia",
    imagen: "/media/senales/p-20.webp",
    significado: "Zona con presencia habitual de peatones en la calzada o sus inmediaciones. Muy común en travesías.",
    queHacer: "Reduce la velocidad y estate atento a los arcenes: el peatón siempre tiene prioridad si va a cruzar por un paso.",
  },
  {
    id: "p-21", codigo: "P-21", nombre: "Niños", categoria: "advertencia",
    imagen: "/media/senales/p-21.webp",
    significado: "Proximidad de un colegio o zona frecuentada por niños. Los niños son impredecibles: pueden cruzar corriendo.",
    queHacer: "Circula despacio y con el pie cerca del freno, sobre todo a la entrada y salida del colegio.",
  },
  {
    id: "p-22", codigo: "P-22", nombre: "Ciclistas", categoria: "advertencia",
    imagen: "/media/senales/p-22.webp",
    significado: "Tramo frecuentado por ciclistas. Recuerda: al adelantarlos debes dejar 1,5 m de separación lateral.",
    queHacer: "Aumenta la distancia lateral, reduce la velocidad al adelantar y no los adelantes si viene alguien de frente.",
  },
  {
    id: "p-24", codigo: "P-24", nombre: "Animales domésticos", categoria: "advertencia",
    imagen: "/media/senales/p-24.webp",
    significado: "La famosa señal de la vaca: advierte de animales domésticos sueltos o cruzando (ganado). Típica de carreteras secundarias y puertos.",
    queHacer: "Reduce la velocidad y no uses el claxon cerca del ganado: puedes asustarlo y provocar que invada la calzada.",
  },
  {
    id: "p-25", codigo: "P-25", nombre: "Circulación en los dos sentidos", categoria: "advertencia",
    imagen: "/media/senales/p-25.webp",
    significado: "Avisa de que termina un tramo de sentido único (o una autovía) y empieza la circulación en doble sentido.",
    queHacer: "Colócate en tu carril derecho y extrema la atención: es un punto típico de colisiones frontales por despiste.",
  },
  {
    id: "p-33", codigo: "P-33", nombre: "Visibilidad reducida", categoria: "advertencia",
    imagen: "/media/senales/p-33.webp",
    significado: "Tramo con niebla frecuente o visibilidad reducida. Con niebla densa, la distancia de seguridad debe multiplicarse.",
    queHacer: "Enciende el alumbrado de cruce y el antiniebla trasero si la niebla es densa, reduce la velocidad y aumenta la distancia.",
  },
  // ── OBRAS ──
  {
    id: "tp-18", codigo: "TP-18", nombre: "Obras", categoria: "obras",
    imagen: "/media/senales/tp-18.webp",
    significado: "Tramo en obras: la calzada puede estar cortada parcialmente, con desvíos, gravilla o maquinaria.",
    queHacer: "Respeta la señalización provisional (fondo amarillo) por encima de la fija y reduce la velocidad: hay trabajadores en la vía.",
    multa: "La misma que la señal equivalente fuera de obras.",
  },
  {
    id: "tp-31", codigo: "TP-31", nombre: "Congestión", categoria: "obras",
    imagen: "/media/senales/tp-31.webp",
    significado: "Advierte de retenciones probables, típica en tramos de obras o accesos a ciudades.",
    queHacer: "Reduce la velocidad con antelación y mantén la distancia: los alcances por detrás son el accidente más común en retenciones.",
  },
  // ── PROHIBICIÓN ──
  {
    id: "r-1", codigo: "R-1", nombre: "Ceda el paso", categoria: "prohibicion",
    imagen: "/media/senales/r-1.webp",
    significado: "Debes ceder el paso a los vehículos que circulen por la vía a la que te incorporas. No es obligatorio detenerse si no viene nadie.",
    queHacer: "Mira, valora y entra solo con hueco suficiente. Si dudas, para: es preferible perder 3 segundos que provocar un accidente.",
    multa: "200 € y 4 puntos si no cedes el paso cuando debías.",
  },
  {
    id: "r-2", codigo: "R-2", nombre: "Detención obligatoria (STOP)", categoria: "prohibicion",
    imagen: "/media/senales/r-2.webp",
    significado: "Obliga a DETENERSE siempre, aunque no venga nadie. Es la señal que más puntos quita por despiste.",
    queHacer: "Para por completo (que el coche se quede quieto de verdad), mira a ambos lados y reanuda la marcha con seguridad.",
    multa: "200 € y 4 puntos.",
  },
  {
    id: "r-5", codigo: "R-5", nombre: "Prioridad en sentido contrario", categoria: "prohibicion",
    imagen: "/media/senales/r-5.webp",
    significado: "En un estrechamiento, tienes prioridad sobre los que vienen de frente: ellos deben cederte el paso.",
    queHacer: "Pasa con precaución igualmente: tener prioridad no te exime de evitar el accidente si el otro no cede.",
  },
  {
    id: "r-6", codigo: "R-6", nombre: "Prioridad respecto al sentido contrario", categoria: "prohibicion",
    imagen: "/media/senales/r-6.webp",
    significado: "Lo contrario de la R-5: en el estrechamiento, la prioridad es del sentido contrario. Tú debes ceder.",
    queHacer: "Detente antes del estrechamiento y deja pasar a los que vienen de frente.",
    multa: "200 € si no cedes el paso.",
  },
  {
    id: "r-100", codigo: "R-100", nombre: "Circulación prohibida", categoria: "prohibicion",
    imagen: "/media/senales/r-100.webp",
    significado: "Prohíbe la circulación a TODOS los vehículos en ambos sentidos. Más restrictiva que la de dirección prohibida.",
    queHacer: "No entres bajo ningún concepto, ni siquiera «un momentito». Busca una vía alternativa.",
    multa: "200 €.",
  },
  {
    id: "r-101", codigo: "R-101", nombre: "Entrada prohibida (dirección prohibida)", categoria: "prohibicion",
    imagen: "/media/senales/r-101.webp",
    significado: "Prohíbe la entrada en ese sentido: la calle es de sentido contrario. Es la clásica señal de «dirección prohibida».",
    queHacer: "No entres. Si te equivocas, da la vuelta en un lugar permitido; entrar «solo unos metros» ya es infracción.",
    multa: "200 €.",
  },
  {
    id: "r-301", codigo: "R-301", nombre: "Velocidad máxima", categoria: "prohibicion",
    imagen: "/media/senales/r-301.webp",
    significado: "Prohíbe superar la velocidad indicada (en la imagen, 50 km/h como ejemplo). Es la señal que más multas genera en España.",
    queHacer: "Ajusta la velocidad al límite ANTES de la señal, no después. Recuerda los márgenes de error de los radares.",
    multa: "De 100 € a 600 € según el exceso, más 2 a 6 puntos.",
  },
  {
    id: "r-302", codigo: "R-302", nombre: "Giro a la derecha prohibido", categoria: "prohibicion",
    imagen: "/media/senales/r-302.webp",
    significado: "Prohíbe girar a la derecha en la próxima intersección. No prohíbe seguir de frente ni girar a la izquierda.",
    queHacer: "Sigue de frente o gira a la izquierda; si necesitas ir a la derecha, rodea la manzana.",
    multa: "200 €.",
  },
  {
    id: "r-303", codigo: "R-303", nombre: "Giro a la izquierda prohibido", categoria: "prohibicion",
    imagen: "/media/senales/r-303.webp",
    significado: "Prohíbe girar a la izquierda en la próxima intersección.",
    queHacer: "Sigue de frente o gira a la derecha para rodear.",
    multa: "200 €.",
  },
  {
    id: "r-304", codigo: "R-304", nombre: "Media vuelta prohibida", categoria: "prohibicion",
    imagen: "/media/senales/r-304.webp",
    significado: "Prohíbe dar la vuelta (cambio de sentido) donde está la señal. No prohíbe girar a izquierda o derecha.",
    queHacer: "Continúa y cambia de sentido donde esté permitido (una rotonda, por ejemplo).",
    multa: "200 €.",
  },
  {
    id: "r-305", codigo: "R-305", nombre: "Adelantamiento prohibido", categoria: "prohibicion",
    imagen: "/media/senales/r-305.webp",
    significado: "Prohíbe adelantar a vehículos de motor (sí se puede adelantar a bicis, ciclomotores o vehículos parados, con precaución).",
    queHacer: "Quédate detrás hasta que termine la prohibición (señal R-502 o fin de la zona).",
    multa: "200 € y 4 puntos.",
  },
  {
    id: "r-307", codigo: "R-307", nombre: "Parada y estacionamiento prohibidos", categoria: "prohibicion",
    imagen: "/media/senales/r-307.webp",
    significado: "Prohíbe parar Y aparcar (el aspa). Es más restrictiva que la R-308: ni siquiera puedes detenerte un momento.",
    queHacer: "No te detengas ni para dejar a alguien: busca un lugar permitido.",
    multa: "200 €.",
  },
  {
    id: "r-308", codigo: "R-308", nombre: "Estacionamiento prohibido", categoria: "prohibicion",
    imagen: "/media/senales/r-308.webp",
    significado: "Prohíbe aparcar, pero SÍ permite parar brevemente (para subir o bajar pasajeros, por ejemplo). La diferencia con la R-307 es justo esa.",
    queHacer: "Puedes detenerte lo imprescindible para que suba o baje alguien, pero no dejar el coche solo.",
    multa: "De 80 € a 200 € según la ordenanza municipal.",
  },
  {
    id: "r-310", codigo: "R-310", nombre: "Advertencias acústicas prohibidas", categoria: "prohibicion",
    imagen: "/media/senales/r-310.webp",
    significado: "Prohíbe usar el claxon salvo para evitar un accidente. Típica cerca de hospitales y de noche en poblado.",
    queHacer: "No toques el claxon para saludar, protestar o avisar: solo ante un peligro inminente.",
  },
  {
    id: "r-500", codigo: "R-500", nombre: "Fin de prohibiciones", categoria: "prohibicion",
    imagen: "",
    significado: "Indica el fin de TODAS las prohibiciones anteriores (velocidad, adelantamiento…). Vuelven los límites genéricos de la vía.",
    queHacer: "A partir de aquí aplican los límites generales según el tipo de vía.",
  },
  {
    id: "r-501", codigo: "R-501", nombre: "Fin de limitación de velocidad", categoria: "prohibicion",
    imagen: "/media/senales/r-501.webp",
    significado: "Termina el límite de velocidad específico anterior; vuelve el límite genérico de la vía.",
    queHacer: "Ajusta tu velocidad al límite general (90 en convencional, 120 en autovía/autopista, salvo otra señal).",
  },
  {
    id: "r-502", codigo: "R-502", nombre: "Fin de prohibición de adelantamiento", categoria: "prohibicion",
    imagen: "",
    significado: "A partir de aquí se puede volver a adelantar.",
    queHacer: "Adelanta solo cuando sea seguro: que la señal lo permita no obliga a hacerlo.",
  },
  // ── OBLIGACIÓN ──
  {
    id: "r-400a", codigo: "R-400a", nombre: "Sentido obligatorio", categoria: "obligacion",
    imagen: "",
    significado: "Obliga a seguir de frente en la dirección de la flecha. Típica en carriles de incorporación y desvíos.",
    queHacer: "Sigue la dirección marcada; no gires donde la señal no lo permite.",
    multa: "200 €.",
  },
  {
    id: "r-401a", codigo: "R-401a", nombre: "Paso obligatorio por la derecha", categoria: "obligacion",
    imagen: "",
    significado: "Obliga a pasar por el lado derecho del obstáculo o isleta (existe la versión por la izquierda).",
    queHacer: "Rodea el obstáculo por la derecha sin invadir el sentido contrario.",
    multa: "200 €.",
  },
  {
    id: "r-402", codigo: "R-402", nombre: "Intersección de sentido giratorio obligatorio", categoria: "obligacion",
    imagen: "",
    significado: "La rotonda azul: obliga a circular girando en el sentido de las flechas. En España, siempre en sentido antihorario.",
    queHacer: "Entra cediendo el paso, circula por tu carril y señaliza la salida con el intermitente derecho.",
    multa: "200 €.",
  },
  {
    id: "r-407a", codigo: "R-407a", nombre: "Vía reservada para ciclos", categoria: "obligacion",
    imagen: "",
    significado: "Carril bici obligatorio para ciclos… y prohibido para el resto de vehículos.",
    queHacer: "Si vas en coche o moto, no lo invadas ni aparques en él.",
    multa: "200 € por invadirlo o estacionar en él.",
  },
  // ── INDICACIÓN ──
  {
    id: "s-1", codigo: "S-1", nombre: "Autopista", categoria: "indicacion",
    imagen: "",
    significado: "Indica el inicio de una autopista: prohibida para peatones, bicis, ciclomotores y vehículos que no superen 60 km/h.",
    queHacer: "Velocidad máxima 120 km/h, mínima 60 km/h. Prohibido parar salvo emergencia.",
  },
  {
    id: "s-1a", codigo: "S-1a", nombre: "Autovía", categoria: "indicacion",
    imagen: "",
    significado: "Indica el inicio de una autovía. Mismas normas básicas que la autopista en cuanto a vehículos permitidos.",
    queHacer: "Máxima 120 km/h (salvo señal), mínima 60 km/h. Atención a las incorporaciones.",
  },
  {
    id: "s-7", codigo: "S-7", nombre: "Velocidad máxima aconsejada", categoria: "indicacion",
    imagen: "",
    significado: "RECOMIENDA una velocidad (en la imagen, 80 km/h), pero no obliga: no multa superarla si no hay una R-301.",
    queHacer: "Es un consejo serio: en ese tramo, ir más rápido es peligroso aunque sea legal.",
  },
  {
    id: "s-13", codigo: "S-13", nombre: "Situación de un paso para peatones", categoria: "indicacion",
    imagen: "",
    significado: "Indica dónde está el paso de peatones. El peatón que va a cruzar por él tiene prioridad.",
    queHacer: "Reduce y detente si un peatón muestra intención de cruzar.",
    multa: "200 € y 4 puntos si no respetas la prioridad del peatón.",
  },
  {
    id: "s-17", codigo: "S-17", nombre: "Estacionamiento", categoria: "indicacion",
    imagen: "",
    significado: "La P azul: indica un lugar donde está permitido aparcar.",
    queHacer: "Aparca dentro de la zona marcada y respeta las condiciones (zona azul/verde, parquímetro) si las hay.",
  },
  {
    id: "s-19", codigo: "S-19", nombre: "Teléfono de emergencia", categoria: "indicacion",
    imagen: "",
    significado: "Indica la situación de un poste SOS en autopistas y autovías.",
    queHacer: "En caso de avería o accidente sin cobertura móvil, úsalo para pedir ayuda.",
  },
  {
    id: "s-28", codigo: "S-28", nombre: "Calle residencial", categoria: "indicacion",
    imagen: "",
    significado: "Zona donde los peatones pueden usar toda la calzada y tienen prioridad. Velocidad máxima: 20 km/h.",
    queHacer: "Circula a paso de peatón (máx. 20 km/h) y cede siempre el paso a los peatones.",
    multa: "Superar los 20 km/h se sanciona como exceso de velocidad (desde 100 €).",
  },
  {
    id: "s-30", codigo: "S-30", nombre: "Zona a 30", categoria: "indicacion",
    imagen: "",
    significado: "Zona urbana con velocidad máxima de 30 km/h en todas sus calles.",
    queHacer: "No superes los 30 km/h en ninguna calle de la zona.",
    multa: "El exceso se sanciona como velocidad: desde 100 €.",
  },
];

export function buscarSenales(texto: string, categoria: CategoriaSenal | "todas"): Senal[] {
  const q = texto.trim().toLowerCase();
  return SENALES.filter((s) => {
    if (categoria !== "todas" && s.categoria !== categoria) return false;
    if (!q) return true;
    return (
      s.nombre.toLowerCase().includes(q) ||
      s.codigo.toLowerCase().includes(q) ||
      s.significado.toLowerCase().includes(q)
    );
  });
}
