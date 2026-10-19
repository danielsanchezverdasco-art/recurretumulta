// Tanda 7 — enriquecimiento continuo 2026-10-12.
// A: blog-posts-patinetes-exp-p10.ts (5 artículos): añaden las fotos oficiales
//    que faltaban (0 <img> en el fichero), sección de rivales con cross-links,
//    2 FAQs nuevas, CTA relativo, barras finales, fix "ailleurs".
// B: blog-posts-motos-exp-m9.ts (voge-625dsx, silence-s04-l7e,
//    rieju-aventura-rally-307-r): cross-links misma marca, 2 FAQs nuevas,
//    barras finales, fix fuente errónea en voge-625dsx.
// C: blog-posts-motos-exp-m13.ts (honda-crf450rx): barras finales, 2 FAQs.
// Convención de estos ficheros: \n como DOS caracteres (0x5C 0x6E) en disco,
// </a> plano. NL representa esos dos caracteres.
import fs from "fs";

const NL = "\\n";
const stats = { files: 0, edits: 0 };

function read(p) { return fs.readFileSync(p, "utf8"); }
function write(p, t) { fs.writeFileSync(p, t); stats.files++; }

function mustContain(block, anchor, what) {
  if (!block.includes(anchor)) throw new Error("ANCLA NO ENCONTRADA [" + what + "]: " + anchor.slice(0, 90));
}

// Reemplazo dentro del bloque del artículo con slug dado. Lanza si no hay
// exactamente 1 bloque.
function inBlock(text, slug, fn) {
  const re = new RegExp('"slug": "' + slug + '",[\\s\\S]*?(?=\\n  \\},\\n  \\{|\\n  \\}\\n\\];)');
  let n = 0;
  const out = text.replace(re, (m) => { n++; return fn(m); });
  if (n !== 1) throw new Error("bloque no único para " + slug + " (n=" + n + ")");
  return out;
}

function repAll(block, anchor, repl, what) {
  mustContain(block, anchor, what);
  const n = block.split(anchor).length - 1;
  stats.edits += n;
  return block.split(anchor).join(repl);
}

function repOnce(block, anchor, repl, what) {
  mustContain(block, anchor, what);
  const n = block.split(anchor).length - 1;
  if (n !== 1) throw new Error("ancla no única [" + what + "]: " + anchor.slice(0, 90) + " (n=" + n + ")");
  stats.edits++;
  return block.replace(anchor, repl);
}

// Normalización global segura: todo enlace interno absoluto -> relativo.
function fixAbsolutes(text) {
  const before = text;
  text = text.split("https://recurretumulta.online/").join("/");
  if (text !== before) stats.edits++;
  return text;
}

// ---------------------------------------------------------------- A: patinetes
const P10 = [
  {
    slug: "fiat-500-iride", name: "Fiat 500 Iride",
    photos: 3,
    precioSection: "## Precio del Fiat 500 Iride en España",
    readTime: ["6", "7"],
    rivals: [
      "- <a href=/blog/ducati-pro-3/>Ducati Pro-III</a>: 799 € con desbloqueo NFC y chasis de magnesio; tecnología frente al diseño italiano del Iride.",
      "- <a href=/blog/aprilia-esr2-evo/>Aprilia eSR2 EVO</a>: 500 W y 691 Wh por 786,10 €, la opción deportiva si buscas más potencia.",
      "- <a href=/blog/cecotec-bongo-serie-a-plus-max-45-connected/>Cecotec Bongo Serie A+ Max 45 Connected</a>: 449 € con batería extraíble y homologación DGT, el práctico superventas español.",
      "- <a href=/blog/acer-es-series-5-advance/>Acer ES Series 5 Advance</a>: 677,59 €, homologado DGT con intermitentes LED y 60 km declarados.",
    ],
    faqs: [
      ["¿Tiene certificado DGT el Fiat 500 Iride?",
       "**No verificado** en las fuentes consultadas: confírmalo con el vendedor antes de comprar. Circular con un VMP sin certificado puede acarrear multa: <a href=/blog/como-recurrir-multa-de-patinete-electrico-vmp-modelo-gratis/>cómo recurrir una multa de patinete eléctrico</a>."],
      ["¿Cuánto tarda en cargarse el Fiat 500 Iride?",
       "Unas **4,5 horas** con el cargador estándar. Además incluye un **cargador de 12 V** para recargarlo en el mechero del coche."],
    ],
  },
  {
    slug: "ducati-pro-3", name: "Ducati Pro-III",
    photos: 3,
    precioSection: "## Precio del Ducati Pro-III en España",
    readTime: ["7", "8"],
    rivals: [
      "- <a href=/blog/fiat-500-iride/>Fiat 500 Iride</a>: 699 €, diseño del Centro Stile Fiat y solo 15 kg; estilo frente a tecnología.",
      "- <a href=/blog/aprilia-esr2-evo/>Aprilia eSR2 EVO</a>: 786,10 € con 500 W y doble suspensión, el rival deportivo directo.",
      "- <a href=/blog/cecotec-bongo-serie-a-plus-max-45-connected/>Cecotec Bongo Serie A+ Max 45 Connected</a>: 449 € con batería extraíble; mucho más barato, menos tecnológico.",
      "- <a href=/blog/acer-es-series-5-advance/>Acer ES Series 5 Advance</a>: 677,59 € con homologación DGT verificada y 60 km declarados.",
    ],
    faqs: [
      ["¿Qué es el sistema KERS del Ducati Pro-III?",
       "La **frenada regenerativa**: al frenar, el motor recupera energía y recarga la batería, alargando la autonomía real."],
      ["¿Cuánto tarda en cargarse el Ducati Pro-III?",
       "Unas **9 horas**, de las cargas más largas de su categoría: lo suyo es cargarlo toda la noche."],
    ],
  },
  {
    slug: "aprilia-esr2-evo", name: "Aprilia eSR2 EVO",
    photos: 3,
    precioSection: "## Precio del Aprilia eSR2 EVO en España",
    readTime: ["7", "8"],
    rivals: [
      "- <a href=/blog/ducati-pro-3/>Ducati Pro-III</a>: 799 € con NFC y tubeless; el premium tecnológico frente a los 500 W del Aprilia.",
      "- <a href=/blog/fiat-500-iride/>Fiat 500 Iride</a>: 699 € y 15 kg, diseño italiano para la última milla.",
      "- <a href=/blog/cecotec-bongo-serie-a-plus-max-45-connected/>Cecotec Bongo Serie A+ Max 45 Connected</a>: 449 € con homologación DGT, la opción racional española.",
      "- <a href=/blog/acer-es-series-5-advance/>Acer ES Series 5 Advance</a>: 677,59 €, 500 W como el Aprilia pero con homologación DGT verificada.",
    ],
    faqs: [
      ["¿Se puede usar el Aprilia eSR2 EVO con lluvia?",
       "Tiene protección **IPX4** contra salpicaduras, pero no es sumergible: evita charcos profundos y la lluvia intensa."],
      ["¿Cuánto tarda en cargarse el eSR2 EVO?",
       "Unas **7 horas** por su batería de 691 Wh: carga nocturna recomendada."],
    ],
  },
  {
    slug: "cecotec-bongo-serie-a-plus-max-45-connected", name: "Cecotec Bongo Serie A+ Max 45 Connected",
    photos: 2,
    precioSection: "## Precio del Bongo Serie A+ Max 45 en España",
    readTime: ["7", "8"],
    rivals: [
      "- <a href=/blog/acer-es-series-5-advance/>Acer ES Series 5 Advance</a>: 677,59 € con 60 km declarados e intermitentes LED, si buscas más autonomía con homologación.",
      "- <a href=/blog/ducati-pro-3/>Ducati Pro-III</a>: 799 €, NFC y chasis de magnesio para quien priorice la tecnología.",
      "- <a href=/blog/aprilia-esr2-evo/>Aprilia eSR2 EVO</a>: 786,10 € con 500 W y doble suspensión, el salto deportivo.",
      "- <a href=/blog/fiat-500-iride/>Fiat 500 Iride</a>: 699 €, diseño italiano y 15 kg para la última milla con estilo.",
    ],
    faqs: [
      ["¿Cuánto cuesta una batería de repuesto del Bongo Max 45?",
       "Unos **150 €**: con dos baterías duplicas la autonomía en ruta sin esperar a cargar."],
      ["¿Qué modos de conducción tiene?",
       "Tres, gestionados desde la app Cecotec: **6, 15 y 25 km/h**, además del bloqueo antirrobo."],
    ],
  },
  {
    slug: "acer-es-series-5-advance", name: "Acer ES Series 5 Advance",
    photos: 2,
    precioSection: "## Precio del Acer ES Series 5 Advance en España",
    readTime: ["7", "8"],
    rivals: [
      "- <a href=/blog/cecotec-bongo-serie-a-plus-max-45-connected/>Cecotec Bongo Serie A+ Max 45 Connected</a>: 449 € con batería extraíble, el superventas español más barato.",
      "- <a href=/blog/ducati-pro-3/>Ducati Pro-III</a>: 799 € con desbloqueo NFC y tubeless, la alternativa premium.",
      "- <a href=/blog/aprilia-esr2-evo/>Aprilia eSR2 EVO</a>: 786,10 €, 500 W como el Acer y doble suspensión.",
      "- <a href=/blog/fiat-500-iride/>Fiat 500 Iride</a>: 699 €, el capricho de diseño del Centro Stile Fiat.",
    ],
    faqs: [
      ["¿Qué es el eABS del Acer ES Series 5 Advance?",
       "El **freno electrónico antibloqueo** delantero: evita que la rueda se bloquee en frenadas fuertes y complementa al freno de disco trasero."],
      ["¿Por qué es importante la homologación DGT?",
       "Porque circular con un VMP sin certificado puede costarte una multa. Con la homologación verificada, circulas tranquilo: <a href=/blog/como-recurrir-multa-de-patinete-electrico-vmp-modelo-gratis/>qué hacer si te multan en patinete</a>."],
    ],
  },
];

let t = read("src/lib/blog-posts-patinetes-exp-p10.ts");
t = fixAbsolutes(t);
for (const a of P10) {
  t = inBlock(t, a.slug, (b) => {
    // 1. Foto hero oficial al inicio del contenido.
    b = repOnce(b,
      '"content": "**¿Buscas solo los datos?**',
      '"content": "<img src=/media/patinetes/' + a.slug + '.webp alt=' + a.name + ' patinete eléctrico>' + NL + NL + '**¿Buscas solo los datos?**',
      a.slug + " hero");
    // 2. Barras finales en la ficha y el comparador.
    b = repAll(b, "<a href=/patinetes/" + a.slug + ">", "<a href=/patinetes/" + a.slug + "/>", a.slug + " ficha/");
    // 3. Segunda foto antes de la sección de precio.
    b = repOnce(b, a.precioSection,
      "<img src=/media/patinetes/" + a.slug + "-2.webp alt=" + a.name + ", vista en detalle>" + NL + NL + a.precioSection,
      a.slug + " foto2");
    // 4. Tercera foto (si existe) antes de pros/contras.
    if (a.photos === 3) {
      b = repOnce(b, "## Pros y contras",
        "<img src=/media/patinetes/" + a.slug + "-3.webp alt=" + a.name + " patinete eléctrico, imagen oficial>" + NL + NL + "## Pros y contras",
        a.slug + " foto3");
    }
    // 5. Sección de rivales antes de FAQ.
    b = repOnce(b, "## Preguntas frecuentes",
      "## Rivales que también analizamos" + NL + NL + a.rivals.join(NL) + NL + NL + "## Preguntas frecuentes",
      a.slug + " rivales");
    // 6. FAQs nuevas antes del CTA.
    const cta = "Si te han multado circulando en patinete, <a href=/#analizador>analiza tu multa gratis con nuestra IA</a> antes de pagar.";
    const faqs = a.faqs.map(([q, ans]) => "### " + q + NL + NL + ans).join(NL + NL);
    b = repOnce(b, cta, faqs + NL + NL + cta, a.slug + " faqs");
    // 7. readTime.
    b = repOnce(b, '"readTime": ' + a.readTime[0] + ",", '"readTime": ' + a.readTime[1] + ",", a.slug + " readTime");
    return b;
  });
}
// Fix puntual: "ailleurs" en fiat-500-iride.
t = inBlock(t, "fiat-500-iride", (b) =>
  repOnce(b, "Quien busque potencia debe mirar ailleurs.", "Quien busque potencia debe mirar a otra parte.", "ailleurs"));
// Barra final del comparador (global en el fichero).
t = t.split("<a href=/comparador-patinetes>").join("<a href=/comparador-patinetes/>");
write("src/lib/blog-posts-patinetes-exp-p10.ts", t);

// ---------------------------------------------------------------- B: motos m9
const M9 = [
  {
    slug: "voge-625dsx-2025-ficha-tecnica-precio", name: "Voge 625DSX",
    cta: "En tus rutas, ante una multa, <a href=/#analizador>analízala gratis con nuestra IA</a>.",
    rivals: [
      "- <a href=/blog/voge-ds525x-2025-ficha-tecnica-precio/>Voge 525DSX</a>: la trail A2 de la marca (47,6 CV) desde 5.392 €, más tecnológica pero menos potente.",
      "- <a href=/blog/voge-525acx-2025-ficha-tecnica-precio/>Voge 525ACX</a>: la scrambler A2 con espíritu aventurero, desde 6.317 €.",
    ],
    faqs: [
      ["¿La Voge 625DSX sirve para viajar?",
       "Sí: el bicilíndrico de 581 cc tiene **buenos bajos** y es una trail pensada para la ruta. Limitada a 47 CV sigue siendo una trail A2 muy capaz."],
      ["¿Qué rivales tiene la 625DSX por precio?",
       "La **Kawasaki Versys 650** ronda los 10.000 €: la Voge cuesta **6.592 €** con 5 años de garantía, unos 3.400 € menos."],
    ],
    extra: (b) => repOnce(b,
      '*Fuentes: <a href=https://www.motorbikemag.es/rieju-xplora-557-xplora-707-2025-prueba-opiniones/>Motorbike Magazine</a>.*',
      '*Fuentes: <a href=https://vogespain.es>Voge España</a>.*',
      "voge fuente"),
  },
  {
    slug: "silence-s04-l7e-2025-ficha-tecnica-precio", name: "Silence S04 L7e",
    cta: "Ante una multa, <a href=/#analizador>analízala gratis con nuestra IA</a>.",
    rivals: [
      "- <a href=/blog/silence-s04-l6e-2025-ficha-tecnica-precio/>Silence S04 L6e</a>: la versión de 45 km/h del mismo NanoCar, para quien se mueva solo por ciudad.",
    ],
    faqs: [
      ["¿Dónde se fabrica el Silence S04?",
       "En la **Zona Franca de Barcelona**, por la empresa española Silence (del grupo ACCIONA)."],
      ["¿Se pueden cargar las baterías en casa?",
       "Sí: las baterías de **11,2 kWh son extraíbles** y se cargan en cualquier enchufe doméstico, sin punto de recarga."],
    ],
  },
  {
    slug: "rieju-aventura-rally-307-r-2026-ficha-tecnica-precio", name: "Rieju Aventura Rally 307 R",
    cta: "Ante una multa en ruta, <a href=/#analizador>analízala gratis con nuestra IA</a>.",
    rivals: [
      "- <a href=/blog/rieju-xplora-557-2025-ficha-tecnica-precio/>Rieju Xplora 557</a>: 554 cc y 47 CV por 5.999 €, la trail grande de la casa para el A2.",
      "- <a href=/blog/rieju-xplora-707-x-2025-ficha-tecnica-precio/>Rieju Xplora 707 X</a>: 700 cc y 70 CV por 7.749 €, un escalón más arriba en la gama trail de Rieju.",
    ],
    faqs: [
      ["¿La Rieju Aventura Rally 307 R es española?",
       "Sí: **Rieju es una marca española** y la Aventura es su trail ligera de referencia."],
      ["¿Merece la pena la versión R sobre la estándar?",
       "Cuesta **450 € más** (5.099 € frente a 4.649 €) a cambio de la estética rally y el plus de equipamiento off-road."],
    ],
  },
];

t = read("src/lib/blog-posts-motos-exp-m9.ts");
t = fixAbsolutes(t);
t = t.split("<a href=/comparador-motos>").join("<a href=/comparador-motos/>");
t = t.split("<a href=/calculadora-etiqueta-dgt>").join("<a href=/calculadora-etiqueta-dgt/>");
for (const a of M9) {
  t = inBlock(t, a.slug, (b) => {
    b = repAll(b, "<a href=/motos/" + a.slug + ">", "<a href=/motos/" + a.slug + "/>", a.slug + " ficha/");
    b = repOnce(b, "## Preguntas frecuentes",
      "## Rivales de la misma marca" + NL + NL + a.rivals.join(NL) + NL + NL + "## Preguntas frecuentes",
      a.slug + " rivales");
    const faqs = a.faqs.map(([q, ans]) => "### " + q + NL + NL + ans).join(NL + NL);
    b = repOnce(b, a.cta, faqs + NL + NL + a.cta, a.slug + " faqs");
    b = repOnce(b, '"readTime": 7,', '"readTime": 8,', a.slug + " readTime");
    if (a.extra) b = a.extra(b);
    return b;
  });
}
write("src/lib/blog-posts-motos-exp-m9.ts", t);

// ---------------------------------------------------------------- C: motos m13
t = read("src/lib/blog-posts-motos-exp-m13.ts");
t = fixAbsolutes(t);
t = inBlock(t, "honda-crf450rx-2025-ficha-tecnica-precio", (b) => {
  b = repAll(b, "<a href=/motos/honda-crf450rx-2025-ficha-tecnica-precio>",
    "<a href=/motos/honda-crf450rx-2025-ficha-tecnica-precio/>", "crf ficha/");
  for (const r of ["ktm-500-exc-f-2025-ficha-tecnica-precio", "beta-rr-480-2025-ficha-tecnica-precio", "yamaha-wr450f-2025-ficha-tecnica-precio"]) {
    b = repAll(b, "<a href=/motos/" + r + ">", "<a href=/motos/" + r + "/>", "crf rival " + r);
  }
  const cta = "**¿Te han puesto una multa?** Antes de pagarla o recurrirla, <a href=/#analizador>analízala gratis con nuestra IA</a> y descubre si es recurrible.";
  const faqs = [
    ["¿Qué mantenimiento necesita la CRF450RX?",
     "Como moto de competición, exige **revisiones frecuentes según el manual de Honda**: cambios de aceite y filtros mucho más a menudo que una moto de calle."],
    ["¿Puedo usar la CRF450RX para ir al trabajo?",
     "No: al **no ser matriculable**, solo puede circular en circuito cerrado o terrenos privados habilitados."],
  ].map(([q, ans]) => "### " + q + NL + NL + ans).join(NL + NL);
  b = repOnce(b, cta, faqs + NL + NL + cta, "crf faqs");
  b = repOnce(b, '"readTime": 6,', '"readTime": 7,', "crf readTime");
  return b;
});
write("src/lib/blog-posts-motos-exp-m13.ts", t);

console.log("OK. Ficheros:", stats.files, "| ediciones:", stats.edits);
