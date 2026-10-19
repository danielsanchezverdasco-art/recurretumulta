// Plantilla Maextro V800 — tipos de datos compartidos.
// (11/10/2026, orden de Daniel) Estructura obligatoria para TODA ficha y blog
// nuevo. Fuente: ~/workspace/recurretumulta-v2/docs/MANDATOS-PERMANENTES.md §1.
//
// Estos tipos son la entrada de los componentes de src/components/maextro/.
// Los scripts scripts/scaffold-ficha.mjs y scripts/scaffold-blog.mjs generan
// esqueletos JSON válidos con esta forma para que los rellenan los workflows.

/** FAQ: 5-6 preguntas por página (mandato). */
export interface MaextroFAQ {
  pregunta: string;
  respuesta: string; // texto plano o con <a>/<strong> — nunca Markdown
}

/** Precio: REAL si hay cifra oficial; orientativo SIEMPRE marcado como tal. */
export interface MaextroPrecio {
  tipo: "real" | "orientativo";
  /** Precio desde, en euros (número). null solo si no existe ni estimación. */
  desde: number | null;
  /** Texto libre opcional, ej. "desde 92.000 € en China" */
  texto?: string;
  /** Fuente del precio, ej. "web oficial Maextro China" */
  fuente?: string;
}

/** Versión / acabado del modelo. */
export interface MaextroVersion {
  nombre: string;
  precioEur: number | null;
  precioOrientativo?: boolean; // true → mostrar con ≈
  texto?: string; // qué incluye, en 1-2 líneas
}

/** EuroNCAP verificado. NUNCA inventar: sin prueba → estrellas null. */
export interface MaextroEuroNCAP {
  estrellas: number | null; // 0-5; null = sin prueba publicada
  ano: number | null;
  url: string | null; // enlace oficial euroncap.com
}

/** Revisión del plan de mantenimiento oficial. */
export interface MaextroRevision {
  nombre: string; // ej. "Revisión anual / 15.000 km"
  queSeCambia: string; // ej. "Aceite + filtro aceite + filtro polen + inspección"
  costeAproxEur: number | null; // null = no publicado
}

/** Plan de mantenimiento verificable (costes/intervalos reales con fuente). */
export interface MaextroMantenimiento {
  intervalo: string; // ej. "15.000 km o 12 meses (lo que ocurra antes)"
  revisiones: MaextroRevision[];
  costeAnualAproxEur?: number | null;
  fuente?: string; // ej. "Manual oficial Toyota España"
}

/** Hito de la historia del modelo (cada hito lleva su foto). */
export interface MaextroHito {
  ano: number;
  titulo: string;
  texto: string;
  /** Foto del hito, ruta en /media/*.webp — verificada en disco, del modelo. */
  foto: string;
  fotoAlt?: string;
}

/** Garantía oficial de la marca. */
export interface MaextroGarantia {
  texto: string; // ej. "5 años o 150.000 km (lo que ocurra antes)"
  bateria?: string; // garantía de batería de tracción, si aplica
  fuente?: string;
}

/** Dato de "En cifras": etiqueta + valor formateado. */
export interface MaextroCifra {
  etiqueta: string;
  valor: string; // ya formateado, ej. "523 CV", "670 km"
}

/** "La nota de Cosa": valoración honesta 0-10 + pros/contras. */
export interface MaextroNotaCosa {
  nota: number; // 0-10
  texto: string; // valoración en 3-6 líneas, cero relleno
  pros: string[];
  contras: string[];
}

/** Fila de la ficha técnica animada. */
export interface MaextroSpec {
  campo: string;
  valor: string;
}

// ─────────────────────────────────────────────────────────────
// FICHA TÉCNICA (/coches/, /motos/, /patinetes/)
// ─────────────────────────────────────────────────────────────

export interface MaextroFichaData {
  /** Slug de la ficha, ej. "maextro-v800-huawei-precio-ficha-tecnica" */
  slug: string;
  /** Sección: "coches" | "motos" | "patinetes" */
  seccion: "coches" | "motos" | "patinetes";
  marca: string;
  modelo: string;
  /** H1 = nombre del modelo (mandato). */
  nombreCompleto: string; // ej. "Maextro V800"
  tipo: string; // ej. "Eléctrico"
  categoria: string; // ej. "Berlina"
  /** Foto principal + galería. 3+ fotos REALES verificadas, del modelo. */
  imagenHero: string; // /media/*.webp
  imagenes: string[]; // ≥3, todas en disco y del modelo concreto
  /** Dato clave del title, ej. "523 CV" */
  datoClave: string;
  ano: number; // año de la ficha, ej. 2026
  notaCosa: MaextroNotaCosa;
  enCifras: MaextroCifra[]; // 6-10 cifras
  specs: MaextroSpec[]; // tabla técnica animada
  etiquetaDgt: string | null; // "Cero" | "ECO" | "C" | "B" | null
  /** Texto ZBE de Madrid (derivable de la etiqueta; sobrescribible). */
  zbeTexto?: string;
  precio: MaextroPrecio;
  versiones: MaextroVersion[];
  euroncap: MaextroEuroNCAP;
  mantenimiento: MaextroMantenimiento;
  historia: MaextroHito[]; // timeline con foto en cada hito
  garantia: MaextroGarantia;
  faqs: MaextroFAQ[]; // 5-6
  /** Slug del artículo del blog que acompaña a la ficha (paquete obligatorio). */
  blogSlug?: string;
  description: string; // ≤155 car.
}

// ─────────────────────────────────────────────────────────────
// BLOG (/blog/)
// ─────────────────────────────────────────────────────────────

export interface MaextroCuriosidad {
  titulo: string;
  texto: string;
}

export interface MaextroTecnologia {
  titulo: string; // ej. "Tecnología Huawei: ADS 4.0 y carga en 12 minutos"
  intro: string;
  puntos: string[]; // 4-8 puntos con datos reales
  imagen?: string; // foto que ilustra la tecnología (del modelo)
  imagenAlt?: string;
}

export interface MaextroComparativo {
  titulo: string;
  texto: string; // gancho comparativo: por qué gana/pierde frente a rivales
  rivales: { nombre: string; href?: string }[];
}

/** Fuente oficial citada en el artículo (mandato §3: fuentes oficiales). */
export interface MaextroFuente {
  titulo: string; // ej. "Maextro — web oficial (China)"
  url: string; // URL https oficial
}

export interface MaextroBlogData {
  slug: string;
  marca: string;
  modelo: string;
  nombreCompleto: string;
  /** Ficha técnica enlazada OBLIGATORIA, ej. "/coches/maextro-v800-..." */
  fichaHref: string;
  // El title SEO V800 se DERIVA de datoImpactante + precioTitle
  // (tituloBlogMaextro): "[Modelo]: [dato impactante] por [precio]", ≤60, sin marca.
  description: string; // ≤155 car.
  /** Intro del artículo: qué es el modelo y por qué importa (3-5 líneas). */
  intro: string;
  imagenHero: string; // /media/*.webp, real y del modelo
  imagenes: string[]; // ≥3 fotos reales del modelo (verificadas en disco)
  /** Dato impactante del title, ej. "670 km de autonomía" */
  datoImpactante: string;
  /** Precio como aparece en el title, ej. "~92.000 €" */
  precioTitle: string;
  enCifras: MaextroCifra[]; // 6-10 cifras
  /** "Ficha técnica: [Modelo]" — resumen enlazado a la ficha completa. */
  fichaResumen: MaextroSpec[];
  tecnologia: MaextroTecnologia;
  curiosidades: MaextroCuriosidad[]; // 5+
  comparativo: MaextroComparativo;
  /** Fuentes oficiales del artículo (≥1, mandato §3). Se renderizan al final. */
  fuentes: MaextroFuente[];
  faqs: MaextroFAQ[]; // 5-6
}

// ─────────────────────────────────────────────────────────────
// Helpers SEO (norma de títulos 11/10/2026)
// ─────────────────────────────────────────────────────────────

export const TITLE_MAX = 60;

/** Recorta a ≤60 car. sin cortar palabras a la mitad si es posible. */
export function truncar60(s: string): string {
  if (s.length <= TITLE_MAX) return s;
  const cortado = s.slice(0, TITLE_MAX - 1);
  const ultimoEspacio = cortado.lastIndexOf(" ");
  return (ultimoEspacio > TITLE_MAX - 20 ? cortado.slice(0, ultimoEspacio) : cortado).trimEnd();
}

const fmtEur = (v: number) => v.toLocaleString("es-ES") + " €";

/** Plantilla V800 para fichas: "[Modelo]: [dato clave] [Ficha AÑO]" — sin marca, ≤60. */
export function tituloFichaMaextro(nombreCompleto: string, datoClave: string, ano: number): string {
  const candidatos = [
    `${nombreCompleto}: ${datoClave} [Ficha ${ano}]`,
    `${nombreCompleto}: ${datoClave} (${ano})`,
    `${nombreCompleto} (${ano})`,
  ];
  for (const c of candidatos) if (c.length <= TITLE_MAX) return c;
  return truncar60(candidatos[candidatos.length - 1]);
}

/** Plantilla V800 para blogs: "[Modelo]: [dato impactante] por [precio]" — sin marca, ≤60. */
export function tituloBlogMaextro(nombreCompleto: string, datoImpactante: string, precioTitle: string): string {
  const candidatos = [
    `${nombreCompleto}: ${datoImpactante} por ${precioTitle}`,
    `${nombreCompleto}: ${datoImpactante}`,
    `${nombreCompleto} por ${precioTitle}`,
  ];
  for (const c of candidatos) if (c.length <= TITLE_MAX) return c;
  return truncar60(candidatos[candidatos.length - 1]);
}

/** Texto de precio con ≈ si es orientativo (mandato: marcado siempre). */
export function textoPrecio(p: MaextroPrecio): string {
  if (p.desde == null) return "Precio no publicado";
  const cifra = fmtEur(p.desde);
  return p.tipo === "orientativo" ? `≈${cifra}` : cifra;
}

/** Texto ZBE de Madrid derivado de la etiqueta DGT (sobrescribible por dato). */
export function textoZbe(nombreCompleto: string, etiquetaDgt: string | null): string {
  switch (etiquetaDgt) {
    case "Cero":
      return `Sí, sin restricciones: el ${nombreCompleto} lleva etiqueta CERO, así que puede circular por toda la ZBE de Madrid —incluido el interior de la M-30 y la zona de especial protección de Distrito Centro— todos los días y a cualquier hora.`;
    case "ECO":
      return `Sí: el ${nombreCompleto} lleva etiqueta ECO y puede entrar en la ZBE de Madrid sin problema en condiciones normales. Solo en episodios de alta contaminación o en zonas de especial protección podrían aplicarse restricciones puntuales a los ECO.`;
    case "C":
      return `Con matices: el ${nombreCompleto} lleva etiqueta C. Puede circular por la ZBE de Madrid, pero NO puede entrar en la zona de especial protección de Distrito Centro (salvo excepciones como residentes o acceso a parkings), y en los escenarios anticontaminación los etiqueta C son los primeros en quedarse fuera.`;
    case "B":
      return `Con restricciones importantes: el ${nombreCompleto} lleva etiqueta B y ya no puede entrar en la ZBE de Madrid salvo excepciones (residentes, vehículos históricos o autorizaciones puntuales). En episodios de alta contaminación, los etiqueta B quedan fuera.`;
    default:
      return `El ${nombreCompleto} tiene etiqueta DGT «${etiquetaDgt || "no publicada"}»: revisa las restricciones de tu ZBE local antes de entrar, porque cada ciudad aplica sus propias reglas por etiqueta.`;
  }
}

/** Schema.org FAQPage desde las FAQs (rich snippets). */
export function faqSchema(faqs: MaextroFAQ[]): Record<string, unknown> {
  const limpia = (s: string) =>
    s.replace(/<a[^>]*>([^<]*)<\/a>/g, "$1").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: limpia(f.pregunta),
      acceptedAnswer: { "@type": "Answer", text: limpia(f.respuesta) },
    })),
  };
}

/** True si la cadena es un placeholder sin rellenar ("TODO", "", etc.). */
export function esPlaceholder(s: string | null | undefined): boolean {
  if (s == null) return true;
  const t = s.trim();
  return t === "" || /^todo[\s:_-]*$/i.test(t) || /\[rellenar/i.test(t);
}
