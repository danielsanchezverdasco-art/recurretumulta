#!/usr/bin/env node
// Revierte los cambios INCORRECTOS de fix-enlaces-rotos-2026-10-09.mjs:
// 49 slugs que SI existen (ficheros con `slug:` sin comillas, que el sweep no
// veia). Sus enlaces originales eran correctos y hay que restaurarlos.
// Usa /tmp/broken.json como registro exacto de cada ocurrencia (fichero,
// linea, href original). Idempotente.
import fs from "node:fs";
import path from "node:path";

const ROOT = "/home/hatch/workspace/recurretumulta-v2";
const libDir = path.join(ROOT, "src/lib");
const broken = JSON.parse(fs.readFileSync("/tmp/broken.json", "utf8"));

// old (kind/slug) -> target que puso el fix (string) o null (desenlazo)
const FIX = {
  "blog/aito-m9-huawei-ficha-tecnica-precio": "/coches/aito-m9-huawei-ficha-tecnica-precio/",
  "blog/byd-atto-3-evo-2026-precio-espana": "/blog/byd-atto-3-evo-2025-precio-ficha-tecnica/",
  "blog/deepal-s05-precio-espana-2026": "/blog/deepal-s05-2026-precio-ficha-tecnica/",
  "blog/cupra-raval-electrico-precio-espana-2026": "/blog/cupra-raval-2026-precio-ficha-tecnica/",
  "blog/volkswagen-id-polo-electrico-precio-espana-2026": "/blog/volkswagen-id-polo-2026-precio-ficha-tecnica/",
  "blog/skoda-epiq-electrico-barato-precio-espana": "/blog/skoda-epiq-2026-precio-ficha-tecnica/",
  "blog/lujo-chino-coches-2026-yangwang-denza-hongqi-maextro": null,
  "blog/denza-z-superdeportivo-electrico-2026": "/blog/denza-z-coupe-2026-precio-ficha-tecnica/",
  "blog/leapmotor-b10-electrico-precio-espana": "/blog/leapmotor-b10-reev-2026-precio-ficha-tecnica/",
  "blog/byd-dolphin-surf-my26-5-plazas-precio-espana": "/blog/byd-dolphin-2025-precio-ficha-tecnica/",
  "blog/renault-5-e-tech-2026-vs-dacia-spring-2026-cual-comprar": null,
  "blog/xpeng-g9l-debut-paris-2026": null,
  "blog/renault-5-e-tech-2026-precio-autonomia": "/blog/renault-5-e-tech-52-kwh-2025-precio-autonomia/",
  "blog/byd-atto-2-precio-ficha-tecnica": "/blog/byd-atto-2-dm-i-2026-precio-ficha-tecnica/",
  "blog/jaecoo-5-precio-ficha-tecnica": "/blog/jaecoo-j5-ev-2025-precio-ficha-tecnica/",
  "blog/skoda-peaq-suv-electrico-7-plazas-precio": null,
  "blog/leapmotor-b03x-suv-electrico-barato-europa": "/blog/leapmotor-b03x-2026-precio-ficha-tecnica/",
  "blog/lepas-l8-chery-hibrido-enchufable-precio-espana": "/blog/lepas-l8-2025-precio-ficha-tecnica/",
  "blog/yangwang-byd-berlina-260000-euros-rolls-royce": "/blog/yangwang-u7-2025-precio-ficha-tecnica/",
  "blog/renault-e-space-concept-paris-2026": "/blog/renault-espace-2026-e-tech-200-precio-ficha-tecnica/",
  "blog/alpine-a390-vs-skoda-peaq-cual-comprar": null,
  "blog/peugeot-e-5008-vs-skoda-peaq-cual-comprar": null,
  "blog/renault-4-e-tech-vs-renault-5-e-tech-cual-comprar": null,
  "blog/byd-atto-2-vs-jaecoo-5-cual-comprar": null,
  "blog/dacia-bigster-hybrid-vs-jaecoo-5-cual-comprar": null,
  "blog/leapmotor-b10-vs-byd-atto-2-cual-comprar": null,
  "blog/bmw-f-450-r-naked-a2-precio-espana-2026": "/motos/bmw-f-450-r-2026-ficha-tecnica-precio/",
  "blog/dacia-spring-2026-nueva-generacion-precio": "/blog/dacia-spring-extreme-2025-precio-ficha-tecnica/",
  "blog/renault-4-e-tech-precio-autonomia": "/blog/renault-4-e-tech-52-kwh-2025-precio-autonomia/",
  "blog/xpeng-g6-2026-restyling-precio-espana": "/blog/xpeng-g6-2025-precio-espana/",
  "blog/alpine-a390-precio-ficha-tecnica": "/blog/alpine-a390-gts-2026-precio-ficha-tecnica/",
  "blog/peugeot-e-5008-electrico-7-plazas-precio": "/blog/peugeot-e-5008-2026-precio-ficha-tecnica/",
  "blog/dacia-bigster-hybrid-precio-espana": "/blog/dacia-bigster-2026-hybrid-155-precio-ficha-tecnica/",
  "blog/hyundai-ioniq-3-precio-espana-2026": null,
  "blog/leapmotor-c10-electrico-precio-ficha-tecnica": "/blog/leapmotor-c10-baja-precio-octubre-2026/",
  "blog/geely-e2-electrico-barato-precio-espana": null,
  "blog/xpeng-p7-electrico-precio-ficha-tecnica": "/blog/xpeng-p7-plus-standard-range-2026-precio-ficha-tecnica/",
  "blog/omoda-jaecoo-record-ventas-septiembre-2026": "/blog/electricos-mas-vendidos-espana-septiembre-2026/",
  "blog/anfac-septiembre-2026-record-electrificacion-model-3-lider": "/blog/electricos-mas-vendidos-espana-septiembre-2026/",
  "blog/flying-flea-c6-moto-electrica-royal-enfield-5990-euros": "/blog/royal-enfield-flying-flea-c6-2026-ficha-tecnica-precio/",
  "blog/honda-wn7-electrica-precio-espana-15000": null,
  "blog/bmw-f-450-r-vs-honda-cb500-hornet-vs-kawasaki-z500": null,
  "blog/salon-paris-2026-estrenos-electricos-guia": null,
  "blog/liux-big-salon-paris-2026": null,
  "blog/mg-hs-hybrid-plus-225-cv-precio-espana": "/blog/mg-hs-hybrid-plus-2025-precio-ficha-tecnica/",
  "blog/renault-600-millones-electricos-espana": null,
  "blog/changan-nevo-q06-suv-electrico-paris-2026": null,
  "blog/xpeng-g6-vs-tesla-model-y-cual-comprar": null,
  "blog/xiaomi-yu7-suv-electrico-llegada-europa": "/blog/xiaomi-yu7-2025-precio-ficha-tecnica/",
};

// anclas originales de los desenlazados (verificadas una a una)
const ANCHORS = {
  "blog/lujo-chino-coches-2026-yangwang-denza-hongqi-maextro": {
    "blog-posts-lote-oct-c.ts:45": ["el lujo chino en Europa"],
    "blog-posts-lote-oct-c.ts:65": ["las cuatro marcas de lujo chinas que quieren hacer temblar a los alemanes"],
    "blog-posts-maextro-a.ts:19": ["nuestro especial de berlinas chinas de lujo"],
    "blog-posts-maextro-a.ts:30": ["nuestro especial de berlinas chinas de lujo"],
    "blog-posts-motor-chinos-d.ts:501": ["el desembarco del lujo chino en Europa"],
  },
  "blog/renault-5-e-tech-2026-vs-dacia-spring-2026-cual-comprar": {
    "blog-posts-flash-2026.ts:40": ["duelo Renault 5 E-Tech vs Dacia Spring", "duelo Renault 5 E-Tech vs Dacia Spring"],
    "blog-posts-motor-2026.ts:249": ["Duelo Renault 5 E-Tech vs Dacia Spring"],
    "blog-posts-motor-chinos-e.ts:369": ["Duelo Renault 5 E-Tech vs Dacia Spring"],
  },
  "blog/xpeng-g9l-debut-paris-2026": {
    "blog-posts-lote-oct-b.ts:426": ["XPeng G9L"],
    "blog-posts-lote-oct-c.ts:65": ["XPeng G9L"],
    "blog-posts-motor-2026-j.ts:63": ["XPeng G9L"],
    "blog-posts-motor-2026-k.ts:374": ["XPeng G9L"],
  },
  "blog/skoda-peaq-suv-electrico-7-plazas-precio": {
    "blog-posts-duelos.ts:617": ["análisis completo del Skoda Peaq"],
    "blog-posts-duelos.ts:726": ["análisis completo del Skoda Peaq"],
  },
  "blog/alpine-a390-vs-skoda-peaq-cual-comprar": {
    "blog-posts-motor-2026.ts:146": ["Duelo Alpine A390 vs Skoda Peaq"],
    "blog-posts-motor-chinos-e.ts:66": ["Duelo Alpine A390 vs Skoda Peaq"],
  },
  "blog/peugeot-e-5008-vs-skoda-peaq-cual-comprar": {
    "blog-posts-motor-2026.ts:146": ["Duelo Peugeot E-5008 vs Skoda Peaq"],
    "blog-posts-motor-chinos-e.ts:270": ["Duelo Peugeot E-5008 vs Skoda Peaq"],
  },
  "blog/renault-4-e-tech-vs-renault-5-e-tech-cual-comprar": {
    "blog-posts-motor-2026.ts:249": ["Duelo Renault 4 E-Tech vs Renault 5 E-Tech"],
    "blog-posts-motor-chinos-e.ts:168": ["Duelo Renault 4 E-Tech vs Renault 5 E-Tech"],
  },
  "blog/byd-atto-2-vs-jaecoo-5-cual-comprar": {
    "blog-posts-motor-chinos-b.ts:156": ["Duelo BYD Atto 2 vs Jaecoo 5"],
    "blog-posts-motor-chinos-b.ts:353": ["Duelo BYD Atto 2 vs Jaecoo 5"],
  },
  "blog/dacia-bigster-hybrid-vs-jaecoo-5-cual-comprar": {
    "blog-posts-motor-chinos-b.ts:156": ["Duelo Dacia Bigster Hybrid vs Jaecoo 5"],
    "blog-posts-motor-chinos-c.ts:477": ["Duelo Dacia Bigster Hybrid vs Jaecoo 5"],
  },
  "blog/leapmotor-b10-vs-byd-atto-2-cual-comprar": {
    "blog-posts-motor-chinos-b.ts:256": ["Duelo Leapmotor B10 vs BYD Atto 2"],
    "blog-posts-motor-chinos-b.ts:353": ["Duelo Leapmotor B10 vs BYD Atto 2"],
  },
  "blog/hyundai-ioniq-3-precio-espana-2026": {
    "blog-posts-duelos.ts:1059": ["análisis completos del Hyundai Ioniq 3"],
  },
  "blog/geely-e2-electrico-barato-precio-espana": {
    "blog-posts-lote-oct-b.ts:200": ["Geely E2"],
  },
  "blog/honda-wn7-electrica-precio-espana-15000": {
    "blog-posts-motor-2026-j.ts:138": ["análisis de la Honda WN7"],
  },
  "blog/bmw-f-450-r-vs-honda-cb500-hornet-vs-kawasaki-z500": {
    "blog-posts-motor-2026-k.ts:126": ["F 450 R vs Hornet vs Z500"],
  },
  "blog/salon-paris-2026-estrenos-electricos-guia": {
    "blog-posts-motor-2026-k.ts:245": ["guía de todos los eléctricos del Salón de París 2026"],
  },
  "blog/liux-big-salon-paris-2026": {
    "blog-posts-motor-2026-k.ts:374": ["Liux BIG"],
  },
  "blog/renault-600-millones-electricos-espana": {
    "blog-posts-motor-2026-m.ts:123": ["analizamos aquí"],
  },
  "blog/changan-nevo-q06-suv-electrico-paris-2026": {
    "blog-posts-motor-2026.ts:489": ["Te lo contamos aquí"],
  },
  "blog/xpeng-g6-vs-tesla-model-y-cual-comprar": {
    "blog-posts-motor-chinos-c.ts:70": ["Duelo XPeng G6 vs Tesla Model Y"],
  },
};

const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const issues = [];
let revertedHref = 0, revertedUnlink = 0;
const touched = new Set();

// agrupar ocurrencias FP por (file, line, key)
const occ = new Map();
for (const x of broken) {
  const key = x.kind + "/" + x.key;
  if (!(key in FIX)) continue;
  const k = `${x.file}:${x.line}:${key}`;
  if (!occ.has(k)) occ.set(k, []);
  occ.get(k).push(x);
}

const fileCache = new Map();
const getLines = f => {
  if (!fileCache.has(f)) fileCache.set(f, fs.readFileSync(path.join(libDir, f), "utf8").split("\n"));
  return fileCache.get(f);
};

for (const [k, xs] of occ) {
  const [file, lineStr, key] = [xs[0].file, xs[0].line, xs[0].kind + "/" + xs[0].key];
  const line = lineStr;
  const lines = getLines(file);
  let ln = lines[line - 1];
  const target = FIX[key];
  const forms = xs.map(x => x.href); // hrefs originales exactos

  if (target) {
    // revertir href=T -> href=FORM (tantas veces como ocurrencias)
    let idx = 0;
    for (const form of forms) {
      const re = new RegExp(`href=${esc(target)}(?=[\\s>])`);
      if (!re.test(ln)) { issues.push(`${file}:${line} NO ENCONTRADO href=${target} para revertir a ${form}`); continue; }
      ln = ln.replace(re, `href=${form}`);
      idx++;
    }
    revertedHref += idx;
  } else {
    // re-enlazar: ANCHOR pelado -> <a href=FORM>ANCHOR</a>
    const anchors = ANCHORS[key]?.[`${file}:${line}`];
    if (!anchors || anchors.length !== forms.length) {
      issues.push(`${file}:${line} anclas no cuadran para ${key}`);
      continue;
    }
    // segmentar la linea: no tocar dentro de <a>...</a> existentes
    const parts = ln.split(/(<a\s+href=[^>]+>.*?<\\?\/a>)/g);
    let ai = 0;
    const out = parts.map((p, i) => {
      if (i % 2 === 1) return p; // es un enlace existente
      if (ai >= anchors.length) return p;
      const anchor = anchors[ai];
      const re = new RegExp(esc(anchor));
      if (!re.test(p)) return p;
      ai++;
      return p.replace(re, `<a href=${forms[ai - 1]}>${anchor}</a>`);
    });
    if (ai !== anchors.length) issues.push(`${file}:${line} solo re-enlazadas ${ai}/${anchors.length} para ${key}`);
    else { ln = out.join(""); revertedUnlink += ai; }
  }
  lines[line - 1] = ln;
  touched.add(file);
}

for (const f of touched) fs.writeFileSync(path.join(libDir, f), getLines(f).join("\n"));
console.log(`Ficheros restaurados: ${touched.size}`);
console.log(`hrefs revertidos: ${revertedHref} | re-enlazados: ${revertedUnlink}`);
if (issues.length) { console.log("INCIDENCIAS:"); issues.forEach(i => console.log("  " + i)); }
else console.log("Sin incidencias.");
