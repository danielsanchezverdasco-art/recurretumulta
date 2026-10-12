#!/usr/bin/env node
// Tanda 2026-10-09: corrige los 163 enlaces internos rotos detectados por
// scripts/sweep-enlaces-rotos.mjs. Idempotente: si ya está aplicado, no toca nada.
//  - string  -> sustituye el href por el destino correcto (relativo + barra final)
//  - null    -> desenlaza: <a href=X>texto</a> pasa a ser solo "texto"
import fs from "node:fs";
import path from "node:path";

const ROOT = "/home/hatch/workspace/recurretumulta-v2";
const libDir = path.join(ROOT, "src/lib");
const files = fs.readdirSync(libDir).filter(f => f.startsWith("blog-posts-") && f.endsWith(".ts"));

// old (slug o kind/slug) -> nuevo href relativo, o null para desenlazar
const FIX = {
  "blog/aito-m9-huawei-ficha-tecnica-precio": "/coches/aito-m9-huawei-ficha-tecnica-precio/",
  "blog/byd-atto-3-evo-2026-precio-espana": "/blog/byd-atto-3-evo-2025-precio-ficha-tecnica/",
  "blog/deepal-s05-precio-espana-2026": "/blog/deepal-s05-2026-precio-ficha-tecnica/",
  "blog/cupra-raval-electrico-precio-espana-2026": "/blog/cupra-raval-2026-precio-ficha-tecnica/",
  "blog/volkswagen-id-polo-electrico-precio-espana-2026": "/blog/volkswagen-id-polo-2026-precio-ficha-tecnica/",
  "blog/skoda-epiq-electrico-barato-precio-espana": "/blog/skoda-epiq-2026-precio-ficha-tecnica/",
  "blog/lujo-chino-coches-2026-yangwang-denza-hongqi-maextro": null,
  "blog/defectos-forma-anulan-multa-dgt": "/guias/vicios-forma/",
  "blog/denza-z-superdeportivo-electrico-2026": "/blog/denza-z-coupe-2026-precio-ficha-tecnica/",
  "blog/leapmotor-b10-electrico-precio-espana": "/blog/leapmotor-b10-reev-2026-precio-ficha-tecnica/",
  "blog/byd-dolphin-surf-my26-5-plazas-precio-espana": "/blog/byd-dolphin-2025-precio-ficha-tecnica/",
  "blog/renault-5-e-tech-2026-vs-dacia-spring-2026-cual-comprar": null,
  "blog/xpeng-g9l-debut-paris-2026": null,
  "blog/renault-5-e-tech-2026-precio-autonomia": "/blog/renault-5-e-tech-52-kwh-2025-precio-autonomia/",
  "blog/recurrir-multa-radar-velocidad": "/blog/margenes-de-error-de-los-radares-de-la-dgt-te-han-multado-injustamente-tablas-oficiales-multas-falsas-y-como-recurrirlas/",
  "blog/como-recurrir-multa-dgt-sin-abogado": "/blog/pagar-multa-con-descuento-y-recurrir/",
  "blog/recurso-reposicion-multa-modelo-2026": null,
  "blog/multa-sin-cinturon-seguridad-recurrir": "/blog/camaras-ocultas-de-la-dgt-para-movil-y-cinturon-como-funciona-el-gran-ojo-invisible-multas-de-200-euros-y-trucos-legales-para-recurrirlas-con-exito/",
  "blog/multa-uso-movil-conduciendo-recurrir": "/blog/camaras-ocultas-de-la-dgt-para-movil-y-cinturon-como-funciona-el-gran-ojo-invisible-multas-de-200-euros-y-trucos-legales-para-recurrirlas-con-exito/",
  "blog/multa-trafico-madrid-recurrir": "/multas/madrid/",
  "blog/multa-trafico-barcelona-recurrir": "/multas/barcelona/",
  "blog/multa-aparcamiento-zona-azul-recurrir": "/blog/multas-de-aparcamiento-y-grua-en-madrid-como-recuperar-tu-coche-y-recurrir-la-sancion-con-exito/",
  "blog/multa-semaforo-en-rojo-recurrir": null,
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
  "blog/land-rover-defender-2026-precio-ficha-tecnica": "/coches/land-rover-defender-110-d350-2025-precio-ficha-tecnica/",
  "blog/bmw-f-450-r-naked-a2-precio-espana-2026": "/motos/bmw-f-450-r-2026-ficha-tecnica-precio/",
  "blog/dacia-spring-2026-nueva-generacion-precio": "/blog/dacia-spring-extreme-2025-precio-ficha-tecnica/",
  "blog/renault-4-e-tech-precio-autonomia": "/blog/renault-4-e-tech-52-kwh-2025-precio-autonomia/",
  "blog/xpeng-g6-2026-restyling-precio-espana": "/blog/xpeng-g6-2025-precio-espana/",
  "blog/alpine-a390-precio-ficha-tecnica": "/blog/alpine-a390-gts-2026-precio-ficha-tecnica/",
  "blog/peugeot-e-5008-electrico-7-plazas-precio": "/blog/peugeot-e-5008-2026-precio-ficha-tecnica/",
  "blog/dacia-bigster-hybrid-precio-espana": "/blog/dacia-bigster-2026-hybrid-155-precio-ficha-tecnica/",
  "blog/hyundai-ioniq-3-precio-espana-2026": null,
  "blog/jeep-avenger-electrico-156": "/coches/jeep-avenger-electric-156-2026-precio-ficha-tecnica/",
  "blog/jeep-compass-2025-precio-ficha-tecnica": "/coches/jeep-compass-electrico-231-long-range-2026-precio-ficha-tecnica/",
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
  "coches/citroen-c3-aircross-2026-precio-ficha-tecnica": "/coches/citroen-c3-aircross-hibrido-2026-precio-ficha-tecnica/",
  "coches/toyota-rav4-hybrid-2025-precio-ficha-tecnica": "/coches/renault-austral-2026-e-tech-200-precio-ficha-tecnica/",
  "coches/skoda-kamiq-2026-precio-ficha-tecnica": "/coches/volkswagen-t-cross-15-tsi-2026-precio-ficha-tecnica/",
  "coches/volkswagen-t-roc-2026-precio-ficha-tecnica": "/coches/volkswagen-taigo-15-tsi-2026-precio-ficha-tecnica/",
  "coches/toyota-c-hr-140h-2025-precio-ficha-tecnica": "/coches/renault-arkana-2026-tce-140-precio-ficha-tecnica/",
  "coches/volkswagen-id-3-2026-precio-ficha-tecnica": "/coches/renault-megane-e-tech-2026-lfp-67-kwh-precio-ficha-tecnica/",
  "coches/peugeot-e-2008-2026-precio-ficha-tecnica": "/coches/renault-4-e-tech-52-kwh-2026-precio-ficha-tecnica/",
  "coches/peugeot-e-3008-2026-precio-ficha-tecnica": "/coches/renault-scenic-e-tech-60-kwh-2026-precio-ficha-tecnica/",
  "coches/skoda-enyaq-85-2025-precio-ficha-tecnica": "/coches/renault-scenic-e-tech-60-kwh-2026-precio-ficha-tecnica/",
  "coches/toyota-yaris-cross-2025-precio-ficha-tecnica": "/coches/dacia-duster-2026-hybrid-155-precio-ficha-tecnica/",
  "coches/kia-niro-hev-2025-precio-ficha-tecnica": "/coches/kia-niro-hev-129/",
  "coches/ford-explorer-ev-2025-precio-ficha-tecnica": "/coches/ford-explorer-electrico-2025-precio-ficha-tecnica/",
  "guias/vmp": "/patinetes/urban-glide-e-cross-pro-2/",
};

const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
let totalFix = 0, totalUnlink = 0;
const perFile = {};

for (const f of files) {
  const p = path.join(libDir, f);
  let t = fs.readFileSync(p, "utf8");
  let changed = 0;
  for (const [old, neu] of Object.entries(FIX)) {
    // formas del href roto: /X y https://recurretumulta.online/X
    const olds = [`/${old}`, `https://recurretumulta.online/${old}`];
    for (const o of olds) {
      if (neu) {
        const re = new RegExp(`(<a\\s+href=)["']?${esc(o)}["']?(?=[\\s>])`, "g");
        const n = (t.match(re) || []).length;
        if (n) { t = t.replace(re, `$1${neu}`); changed += n; totalFix += n; }
      } else {
        // desenlazar: <a href=o>texto</a> -> texto (también <\/a> escapado)
        const re = new RegExp(`<a\\s+href=["']?${esc(o)}["']?>(.*?)<\\\\?/a>`, "g");
        const n = (t.match(re) || []).length;
        if (n) { t = t.replace(re, "$1"); changed += n; totalUnlink += n; }
      }
    }
  }
  if (changed) { fs.writeFileSync(p, t); perFile[f] = changed; }
}

console.log(`Ficheros tocados: ${Object.keys(perFile).length}`);
for (const [f, n] of Object.entries(perFile)) console.log(`  ${f}: ${n}`);
console.log(`Enlaces corregidos: ${totalFix} | desenlazados: ${totalUnlink}`);
