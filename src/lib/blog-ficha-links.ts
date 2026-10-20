// 19/10/2026 (merlin-rutas-cableadas, agente enlaces 9/9): mapeo bidireccional
// blog <-> ficha de autocaravanas y campers.
//
// BLOG -> FICHA: el equipo de BlogPostPage (src/pages/blog/[slug].tsx) debe usar
// BLOG_FICHA_LINKS para pintar el CTA "Ver la ficha técnica" cuando el slug del
// artículo tenga entrada aquí. Los 50 blogs merlin ya enlazan a su ficha dentro
// del contenido; los 3 blogs de campers eu2 con ficha NO enlazaban: este mapa es
// la fuente de verdad para añadir el enlace sin tocar el contenido del post.
// NO modificar BlogPostPage desde este agente (es de otro equipo).
//
// FICHA -> BLOG: AutocaravanasFicha.tsx y CampersFicha.tsx usan FICHA_BLOG_LINKS
// (derivado) para la sección "Review en vídeo / artículo": solo se muestra si la
// ficha tiene blog.
//
// 25 blogs de campers (niky x10, nuevos-7 x7, vw x3, eu2 x5) no tienen ficha en
// esta rama todavía (los crean los agentes de datos): sin entrada hasta que exista.

export interface FichaBlogLink {
  /** Slug del artículo de blog (URL: /blog/<blogSlug>/). */
  blogSlug: string;
  /** Título del artículo, para la sección de la ficha. */
  blogTitulo: string;
  /** URL canónica de la ficha (/autocaravanas/<slug>/ o /campers/<slug>/). */
  fichaUrl: string;
}

const PARES: FichaBlogLink[] = [
  // 50 blogs merlin (lotes 1-5): el slug del post ES el slug de la ficha.
  { blogSlug: "hymer-grand-canyon-s-2026-precio-ficha-tecnica", blogTitulo: "Hymer Grand Canyon S 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/hymer-grand-canyon-s-2026-precio-ficha-tecnica/" },
  { blogSlug: "hymer-b-mc-i-600-2026-precio-ficha-tecnica", blogTitulo: "Hymer B-MC I 600 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/hymer-b-mc-i-600-2026-precio-ficha-tecnica/" },
  { blogSlug: "adria-twin-supreme-640-sgx-2026-precio-ficha-tecnica", blogTitulo: "Adria Twin Supreme 640 SGX 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/adria-twin-supreme-640-sgx-2026-precio-ficha-tecnica/" },
  { blogSlug: "chausson-640-titanium-2026-precio-ficha-tecnica", blogTitulo: "Chausson 640 Titanium 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/chausson-640-titanium-2026-precio-ficha-tecnica/" },
  { blogSlug: "sunlight-t-68-2026-precio-ficha-tecnica", blogTitulo: "Sunlight T 68 2026: precio, ficha técnica y 5 plazas", fichaUrl: "/autocaravanas/sunlight-t-68-2026-precio-ficha-tecnica/" },
  { blogSlug: "sunlight-a-70-2026-precio-ficha-tecnica", blogTitulo: "Sunlight A 70 2026: precio, ficha técnica y 6 plazas", fichaUrl: "/autocaravanas/sunlight-a-70-2026-precio-ficha-tecnica/" },
  { blogSlug: "carthago-c-tourer-i-148-le-2026-precio-ficha-tecnica", blogTitulo: "Carthago C-Tourer I 148 LE 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/carthago-c-tourer-i-148-le-2026-precio-ficha-tecnica/" },
  { blogSlug: "roller-team-auto-roller-746-2026-precio-ficha-tecnica", blogTitulo: "Roller Team Auto-Roller 746 2026: precio, ficha técnica y 6 plazas", fichaUrl: "/autocaravanas/roller-team-auto-roller-746-2026-precio-ficha-tecnica/" },
  { blogSlug: "benimar-mileo-243-2026-precio-ficha-tecnica", blogTitulo: "Benimar Mileo 243 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/benimar-mileo-243-2026-precio-ficha-tecnica/" },
  { blogSlug: "dethleffs-trend-t-6717-eb-2026-precio-ficha-tecnica", blogTitulo: "Dethleffs Trend T 6717 EB 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/dethleffs-trend-t-6717-eb-2026-precio-ficha-tecnica/" },
  { blogSlug: "knaus-boxlife-600-mq-2026-precio-ficha-tecnica", blogTitulo: "Knaus BoxLife 600 MQ 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/knaus-boxlife-600-mq-2026-precio-ficha-tecnica/" },
  { blogSlug: "possl-2win-plus-2026-precio-ficha-tecnica", blogTitulo: "Pössl 2Win Plus 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/possl-2win-plus-2026-precio-ficha-tecnica/" },
  { blogSlug: "globecar-globescout-plus-2026-precio-ficha-tecnica", blogTitulo: "Globecar GlobeScout Plus 2026: precio de ocasión, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/globecar-globescout-plus-2026-precio-ficha-tecnica/" },
  { blogSlug: "westfalia-columbus-600d-2026-precio-ficha-tecnica", blogTitulo: "Westfalia Columbus 600 D 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/westfalia-columbus-600d-2026-precio-ficha-tecnica/" },
  { blogSlug: "dreamer-d55-fun-up-2026-precio-ficha-tecnica", blogTitulo: "Dreamer D55 UP 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/dreamer-d55-fun-up-2026-precio-ficha-tecnica/" },
  { blogSlug: "challenger-v114-start-edition-2026-precio-ficha-tecnica", blogTitulo: "Challenger V114 Road Edition 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/challenger-v114-start-edition-2026-precio-ficha-tecnica/" },
  { blogSlug: "sunlight-cliff-640-2026-precio-ficha-tecnica", blogTitulo: "Sunlight Cliff 640 Adventure 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/sunlight-cliff-640-2026-precio-ficha-tecnica/" },
  { blogSlug: "rapido-v55-2026-precio-ficha-tecnica", blogTitulo: "Rapido V55 Optimum Line 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/rapido-v55-2026-precio-ficha-tecnica/" },
  { blogSlug: "pilote-v600g-2026-precio-ficha-tecnica", blogTitulo: "Pilote V600G 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/pilote-v600g-2026-precio-ficha-tecnica/" },
  { blogSlug: "laika-ecovip-600-2026-precio-ficha-tecnica", blogTitulo: "Laika Ecovip 600 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/laika-ecovip-600-2026-precio-ficha-tecnica/" },
  { blogSlug: "burstner-lyseo-td-690-g-2026-precio-ficha-tecnica", blogTitulo: "Bürstner Lyseo TD 690 G 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/burstner-lyseo-td-690-g-2026-precio-ficha-tecnica/" },
  { blogSlug: "hobby-optima-ontour-edition-f-v65-ge-2026-precio-ficha-tecnica", blogTitulo: "Hobby Optima OnTour Edition F V65 GE 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/hobby-optima-ontour-edition-f-v65-ge-2026-precio-ficha-tecnica/" },
  { blogSlug: "weinsberg-carabus-grey-edition-fire-600-mq-2026-precio-ficha-tecnica", blogTitulo: "Weinsberg CaraBus Grey Edition (FIRE) 600 MQ 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/weinsberg-carabus-grey-edition-fire-600-mq-2026-precio-ficha-tecnica/" },
  { blogSlug: "mclouis-mc4-231-2026-precio-ficha-tecnica", blogTitulo: "McLouis MC4 231 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/mclouis-mc4-231-2026-precio-ficha-tecnica/" },
  { blogSlug: "euramobil-integra-line-gt-il-726-ef-2026-precio-ficha-tecnica", blogTitulo: "Eura Mobil Integra Line GT IL 726 EF 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/euramobil-integra-line-gt-il-726-ef-2026-precio-ficha-tecnica/" },
  { blogSlug: "rimor-superbrig-687-tc-2026-precio-ficha-tecnica", blogTitulo: "Rimor SuperBrig 687 TC 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/rimor-superbrig-687-tc-2026-precio-ficha-tecnica/" },
  { blogSlug: "frankia-neo-i-7-gdk-2026-precio-ficha-tecnica", blogTitulo: "Frankia Neo I 7 GDK 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/frankia-neo-i-7-gdk-2026-precio-ficha-tecnica/" },
  { blogSlug: "giottiline-siena-322-2026-precio-ficha-tecnica", blogTitulo: "Giottiline Siena 322 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/giottiline-siena-322-2026-precio-ficha-tecnica/" },
  { blogSlug: "mobilvetta-k-yacht-tekno-line-86-2026-precio-ficha-tecnica", blogTitulo: "Mobilvetta K-Yacht Tekno Line 86 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/mobilvetta-k-yacht-tekno-line-86-2026-precio-ficha-tecnica/" },
  { blogSlug: "ahorncamp-t-690-2026-precio-ficha-tecnica", blogTitulo: "Ahorn Camp T 690 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/ahorncamp-t-690-2026-precio-ficha-tecnica/" },
  { blogSlug: "itineo-pf600-2026-precio-ficha-tecnica", blogTitulo: "Itineo PF600 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/itineo-pf600-2026-precio-ficha-tecnica/" },
  { blogSlug: "font-vendome-mondea-2026-precio-ficha-tecnica", blogTitulo: "Font Vendôme Mondéa 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/font-vendome-mondea-2026-precio-ficha-tecnica/" },
  { blogSlug: "campereve-magellan-643-2026-precio-ficha-tecnica", blogTitulo: "Campérêve Magellan 643 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/campereve-magellan-643-2026-precio-ficha-tecnica/" },
  { blogSlug: "mooveo-tei-60fb-2026-precio-ficha-tecnica", blogTitulo: "Mooveo TEI-60FB 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/mooveo-tei-60fb-2026-precio-ficha-tecnica/" },
  { blogSlug: "xgo-x-van-104-2026-precio-ficha-tecnica", blogTitulo: "XGO X Van 104 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/xgo-x-van-104-2026-precio-ficha-tecnica/" },
  { blogSlug: "elnagh-baron-565-2026-precio-ficha-tecnica", blogTitulo: "Elnagh Baron 565 2026: precio, ficha técnica y 5 plazas", fichaUrl: "/autocaravanas/elnagh-baron-565-2026-precio-ficha-tecnica/" },
  { blogSlug: "niesmann-bischoff-ismove-69-e-2026-precio-ficha-tecnica", blogTitulo: "Niesmann+Bischoff iSmove 6.9 E 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/niesmann-bischoff-ismove-69-e-2026-precio-ficha-tecnica/" },
  { blogSlug: "bavaria-i740fgj-nomade-2026-precio-ficha-tecnica", blogTitulo: "Bavaria I740FGJ Nomade 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/bavaria-i740fgj-nomade-2026-precio-ficha-tecnica/" },
  { blogSlug: "ci-horon-84-xt-2026-precio-ficha-tecnica", blogTitulo: "CI Horon 84 XT 2026: precio, ficha técnica y 5 plazas", fichaUrl: "/autocaravanas/ci-horon-84-xt-2026-precio-ficha-tecnica/" },
  { blogSlug: "fleurette-baxter-68-lmc-2026-precio-ficha-tecnica", blogTitulo: "Fleurette Baxter 68 LMC 2026: precio, ficha técnica y plazas", fichaUrl: "/autocaravanas/fleurette-baxter-68-lmc-2026-precio-ficha-tecnica/" },
  { blogSlug: "rapido-606f-2026-precio-ficha-tecnica", blogTitulo: "Rapido 606F 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/rapido-606f-2026-precio-ficha-tecnica/" },
  { blogSlug: "pilote-g740fgj-evidence-2026-precio-ficha-tecnica", blogTitulo: "Pilote G740FGJ ÉVIDENCE 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/pilote-g740fgj-evidence-2026-precio-ficha-tecnica/" },
  { blogSlug: "adria-coral-plus-670-sl-2026-precio-ficha-tecnica", blogTitulo: "Adria Coral Plus 670 SL 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/adria-coral-plus-670-sl-2026-precio-ficha-tecnica/" },
  { blogSlug: "hymer-ml-t-580-4x4-2026-precio-ficha-tecnica", blogTitulo: "Hymer ML-T 580 4x4 2026: precio, ficha técnica y 4x4", fichaUrl: "/autocaravanas/hymer-ml-t-580-4x4-2026-precio-ficha-tecnica/" },
  { blogSlug: "knaus-sky-ti-650-meg-2026-precio-ficha-tecnica", blogTitulo: "Knaus Sky TI 650 MEG 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/knaus-sky-ti-650-meg-2026-precio-ficha-tecnica/" },
  { blogSlug: "etrusco-t-7400-sb-2026-precio-ficha-tecnica", blogTitulo: "Etrusco T 7400 SB 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/etrusco-t-7400-sb-2026-precio-ficha-tecnica/" },
  { blogSlug: "benimar-amphitryon-940-2026-precio-ficha-tecnica", blogTitulo: "Benimar Amphitryon 940 2026: precio, ficha técnica y 5 plazas", fichaUrl: "/autocaravanas/benimar-amphitryon-940-2026-precio-ficha-tecnica/" },
  { blogSlug: "benimar-sport-340-up-2026-precio-ficha-tecnica", blogTitulo: "Benimar Sport 340 UP 2026: precio, ficha técnica y 5 plazas", fichaUrl: "/autocaravanas/benimar-sport-340-up-2026-precio-ficha-tecnica/" },
  { blogSlug: "chausson-777-titanium-line-2026-precio-ficha-tecnica", blogTitulo: "Chausson 777 Titanium Line 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/chausson-777-titanium-line-2026-precio-ficha-tecnica/" },
  { blogSlug: "laika-kosmo-l-319-2026-precio-ficha-tecnica", blogTitulo: "Laika Kosmo L 319 2026: precio, ficha técnica y 4 plazas", fichaUrl: "/autocaravanas/laika-kosmo-l-319-2026-precio-ficha-tecnica/" },
  // 3 blogs de campers eu2 cuya ficha existe en esta rama (tipo camper -> /campers/).
  { blogSlug: "pilote-v630j-2026-precio-ficha-tecnica-analisis-opinion", blogTitulo: "Pilote V630J 2026: ficha técnica, 140 CV y camas gemelas", fichaUrl: "/campers/pilote-v630j-2026-precio-ficha-tecnica/" },
  { blogSlug: "rapido-v55-2026-precio-ficha-tecnica-analisis-opinion", blogTitulo: "Rapido V55 2026: precio desde 63.350 € y ficha técnica", fichaUrl: "/campers/rapido-v55-2026-precio-ficha-tecnica/" },
  { blogSlug: "font-vendome-mondea-2026-precio-ficha-tecnica-analisis-opinion", blogTitulo: "Font Vendôme Mondéa 2026: ficha técnica y camper de 5,99 m", fichaUrl: "/campers/font-vendome-mondea-2026-precio-ficha-tecnica/" },
];

/** Blog -> ficha: { blogSlug: fichaUrl }. Lo usa BlogPostPage para el CTA a la ficha. */
export const BLOG_FICHA_LINKS: Record<string, string> = Object.fromEntries(
  PARES.map((p) => [p.blogSlug, p.fichaUrl])
);

/** Ficha -> blog: { fichaSlug: { blogSlug, blogTitulo } }. Lo usan las páginas de ficha.
 * 2 fichas (rapido-v55, font-vendome-mondea) tienen 2 blogs: se prefiere el
 * "-analisis-opinion" (formato review/opinión) para la sección "Review". */
export const FICHA_BLOG_LINKS: Record<string, { blogSlug: string; blogTitulo: string }> =
  Object.fromEntries(
    PARES.map((p) => {
      const fichaSlug = p.fichaUrl.replace(/^\/(autocaravanas|campers)\//, "").replace(/\/$/, "");
      return [fichaSlug, { blogSlug: p.blogSlug, blogTitulo: p.blogTitulo }];
    })
  );

/** URL pública de un artículo de blog a partir de su slug. */
export const blogUrl = (slug: string): string => `/blog/${slug}/`;
