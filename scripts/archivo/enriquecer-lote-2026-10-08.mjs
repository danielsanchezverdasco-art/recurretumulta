#!/usr/bin/env node
// Tanda 4 (2026-10-08): enriquecimiento continuo.
// 2 blogs de coche (solkuno-b): stelato-s9 y luxeed-r7 — réplica del patrón de la tanda 3
// (FAQ **¿?** -> ### para recuperar el schema FAQPage, 2ª foto oficial, sección
// "Antes de decidir", 2 FAQs nuevas, enlaces internos saneados, cross-links HIMA).
// Ediciones por segmento de artículo; falla si alguna no casa exactamente.
import fs from "node:fs";

const ROOT = "/home/hatch/workspace/recurretumulta-v2";

function segmento(file, slug) {
  const t = fs.readFileSync(`${ROOT}/${file}`, "utf8");
  const i = t.indexOf(`"${slug}"`);
  if (i < 0) throw new Error(`slug no encontrado: ${slug}`);
  const start = t.lastIndexOf("{", i);
  const next = t.indexOf('"slug":', i + slug.length + 10);
  return { t, file, start, end: next > 0 ? next : i + 60000 };
}

function aplicar(file, slug, cambios, doneMarker) {
  const { t, start, end } = segmento(file, slug);
  let seg = t.slice(start, end);
  if (doneMarker && seg.includes(doneMarker)) { console.log(`SKIP ${slug}: ya aplicado`); return; }
  for (const [old, nw, count = 1] of cambios) {
    const n = seg.split(old).length - 1;
    if (n !== count) throw new Error(`[${slug}] "${old.slice(0, 60)}..." aparece ${n} veces (esperado ${count})`);
    seg = seg.split(old).join(nw);
  }
  const out = t.slice(0, start) + seg + t.slice(end);
  fs.writeFileSync(`${ROOT}/${file}`, out);
  console.log(`OK ${slug}: ${cambios.length} cambios`);
}

const NL = "\\n"; // en el fichero .ts el contenido usa \\n literal

// ============ 1. Stelato S9 ============
aplicar("src/lib/blog-posts-solkuno-b.ts", "stelato-s9-huawei-2026-precio-ficha-tecnica", [
  // 2ª foto (oficial, en disco) antes de Rivales
  [`${NL}${NL}## Rivales${NL}${NL}| Modelo | Potencia | Autonomía | Precio orientativo |`,
   `<img src=/media/stelato-s9-huawei-2026-precio-ficha-tecnica-oficial.webp alt=Stelato S9 en foto oficial del fabricante>${NL}${NL}## Rivales${NL}${NL}| Modelo | Potencia | Autonomía | Precio orientativo |`],
  // barra final comparador
  [`¿Dudas entre eléctricos grandes? Pásalos por nuestro <a href=/comparador-coches>comparador de coches</a> y míralos cara a cara.`,
   `¿Dudas entre eléctricos grandes? Pásalos por nuestro <a href=/comparador-coches/>comparador de coches</a> y míralos cara a cara.`],
  // enlace interno absoluto de la home -> relativo
  [`<a href=https://recurretumulta.online/>analízala gratis con nuestra IA</a>`,
   `<a href=/>analízala gratis con nuestra IA</a>`],
  // sección "Antes de decidir" + FAQ a formato ### + 2 FAQs nuevas
  [`## Preguntas frecuentes${NL}${NL}**¿Qué es el Stelato S9?**${NL}Una berlina premium 100 % eléctrica fruto de la alianza entre Huawei y BAIC Motor, dentro del ecosistema HIMA. Huawei aporta software, semiconductores y conducción inteligente; BAIC, plataforma y fabricación.${NL}${NL}**¿Cuánta autonomía real tiene?**${NL}Homologa 816 km (monomotor) y 721 km (bimotor) en ciclo CLTC chino, más optimista que el WLTP europeo. La cifra WLTP equivalente sería sensiblemente menor.${NL}${NL}**¿Cuánto cuesta el Stelato S9?**${NL}Desde 399.800 yuanes en China (unos 50.000-51.000 € al cambio) y 449.800 yuanes la versión Ultra. Sin precio confirmado para España o Europa.${NL}${NL}**¿Se vende en España?**${NL}No confirmado. Por ahora solo se comercializa en China y no hay anuncio oficial de llegada a Europa.${NL}${NL}**¿Qué tecnología de conducción lleva?**${NL}El Huawei Qiankun ADS 3.0, con LiDAR y el sistema omnidireccional anticolisión CAS 3.0. Fue el primer coche del mundo en estrenarlo.${NL}${NL}**¿La batería es de 100 kWh o de 79,9/97,6 kWh?**${NL}La marca anunció 100 kWh en el lanzamiento, pero algunas homologaciones posteriores citan 79,9 y 97,6 kWh según versión. Es una discrepancia real entre fuentes y la dejamos indicada.${NL}${NL}## Fuentes`,
   `## Antes de decidir: lo que conviene vigilar${NL}${NL}- **Etiqueta DGT:** al ser 100 % eléctrico llevaría etiqueta Cero, con acceso libre a las Zonas de Bajas Emisiones; confírmalo en la <a href=/calculadora-etiqueta-dgt/>calculadora de etiqueta DGT</a> y revisa la <a href=/guias/zbe/>guía de ZBE</a>.${NL}- **Autonomía real:** los 816 km son en ciclo CLTC chino, más optimista que el WLTP europeo; estima la cifra real para tu uso con la <a href=/calculadora-autonomia-real/>calculadora de autonomía real</a>.${NL}- **¿Es la mejor compra por ese dinero?** Si llega a España, compáralo cara a cara en el <a href=/comparador-coches/>comparador de coches</a> y pásalo por la <a href=/mejor-coche-por-presupuesto/>herramienta de mejor coche por presupuesto</a>.${NL}- **¿Berlina o SUV?** Dentro del ecosistema Huawei-HIMA también tienes el <a href=/blog/luxeed-r7-huawei-2026-precio-ficha-tecnica/>Luxeed R7</a>, un SUV coupé de 4,98 m con el sistema ADS 4 más moderno.${NL}${NL}## Preguntas frecuentes${NL}${NL}### ¿Qué es el Stelato S9?${NL}Una berlina premium 100 % eléctrica fruto de la alianza entre Huawei y BAIC Motor, dentro del ecosistema HIMA. Huawei aporta software, semiconductores y conducción inteligente; BAIC, plataforma y fabricación.${NL}${NL}### ¿Cuánta autonomía real tiene?${NL}Homologa 816 km (monomotor) y 721 km (bimotor) en ciclo CLTC chino, más optimista que el WLTP europeo. La cifra WLTP equivalente sería sensiblemente menor.${NL}${NL}### ¿Cuánto cuesta el Stelato S9?${NL}Desde 399.800 yuanes en China (unos 50.000-51.000 € al cambio) y 449.800 yuanes la versión Ultra. Sin precio confirmado para España o Europa.${NL}${NL}### ¿Se vende en España?${NL}No confirmado. Por ahora solo se comercializa en China y no hay anuncio oficial de llegada a Europa.${NL}${NL}### ¿Qué tecnología de conducción lleva?${NL}El Huawei Qiankun ADS 3.0, con LiDAR y el sistema omnidireccional anticolisión CAS 3.0. Fue el primer coche del mundo en estrenarlo.${NL}${NL}### ¿La batería es de 100 kWh o de 79,9/97,6 kWh?${NL}La marca anunció 100 kWh en el lanzamiento, pero algunas homologaciones posteriores citan 79,9 y 97,6 kWh según versión. Es una discrepancia real entre fuentes y la dejamos indicada.${NL}${NL}### ¿Qué etiqueta DGT tendría el Stelato S9?${NL}Al ser 100 % eléctrico le correspondería la **etiqueta Cero**, con acceso libre a las Zonas de Bajas Emisiones. Confírmalo para tu caso en la <a href=/calculadora-etiqueta-dgt/>calculadora de etiqueta DGT</a>.${NL}${NL}### ¿Berlina o SUV dentro de la alianza Huawei: Stelato S9 o Luxeed R7?${NL}Depende de lo que busques: el S9 es una berlina de hasta 516 CV y 816 km CLTC con el sistema ADS 3.0; el <a href=/blog/luxeed-r7-huawei-2026-precio-ficha-tecnica/>Luxeed R7</a> es un SUV coupé de 4,98 m con el ADS 4 más moderno. Ambos son 100 % eléctricos del ecosistema HIMA; compáralos cara a cara en el <a href=/comparador-coches/>comparador de coches</a>.${NL}${NL}## Fuentes`],
  ],
  "stelato-s9-huawei-2026-precio-ficha-tecnica-oficial.webp"
);

// ============ 2. Luxeed R7 ============
aplicar("src/lib/blog-posts-solkuno-b.ts", "luxeed-r7-huawei-2026-precio-ficha-tecnica", [
  // 2ª foto (oficial, en disco) antes de Rivales
  [`${NL}${NL}## Rivales${NL}${NL}| Modelo | Potencia | Autonomía | Dimensiones |`,
   `<img src=/media/luxeed-r7-huawei-2026-precio-ficha-tecnica-oficial.webp alt=Luxeed R7 en foto oficial del fabricante>${NL}${NL}## Rivales${NL}${NL}| Modelo | Potencia | Autonomía | Dimensiones |`],
  // barra final comparador
  [`Enfréntalos dato a dato en nuestro <a href=/comparador-coches>comparador de coches</a>.`,
   `Enfréntalos dato a dato en nuestro <a href=/comparador-coches/>comparador de coches</a>.`],
  // enlace interno al rival declarado Xiaomi YU7
  [`Su rival declarado: el Xiaomi YU7.`,
   `Su rival declarado: el <a href=/blog/xiaomi-yu7-2025-precio-ficha-tecnica/>Xiaomi YU7</a>.`],
  // enlace interno absoluto de la home -> relativo
  [`<a href=https://recurretumulta.online/>analízala gratis con nuestra IA</a>`,
   `<a href=/>analízala gratis con nuestra IA</a>`],
  // sección "Antes de decidir" + FAQ a formato ### + 2 FAQs nuevas
  [`## Preguntas frecuentes${NL}${NL}**¿Qué es Luxeed?**${NL}La marca de Chery con Huawei como socio tecnológico, integrada en el ecosistema HIMA junto a Aito, Stelato, Maextro y SAIC. Chery fabrica; Huawei pone la tecnología.${NL}${NL}**¿Cuánta autonomía tiene el Luxeed R7?**${NL}Hasta 802 km en ciclo CLTC en las versiones eléctricas puras, y más de 1.670 km combinados en las versiones con extensor de autonomía (EREV).${NL}${NL}**¿Cuánto cuesta?**${NL}Precio no confirmado en las fuentes consultadas para la renovación de 2026. No hay precio europeo anunciado.${NL}${NL}**¿Llegará a Europa?**${NL}No hay confirmación oficial, pero Luxeed prepara versiones con volante a la derecha y su objetivo es la expansión internacional dentro del ecosistema HIMA.${NL}${NL}**¿Qué es el ADS 4 de Huawei?**${NL}La cuarta generación del sistema de conducción asistida de Huawei: LiDAR de 192 líneas de serie, segundo LiDAR sólido trasero y cinco radares 4D, con funciones de asistencia en ruta y aparcamiento inteligente.${NL}${NL}**¿Es rival del Xiaomi YU7?**${NL}Directo: mismo tamaño (4,98 frente a 4,99 m), mismo segmento de SUV coupé eléctrico grande y mismo rango de potencia. La prensa china los enfrenta abiertamente.${NL}${NL}## Fuentes`,
   `## Antes de decidir: lo que conviene vigilar${NL}${NL}- **Etiqueta DGT:** las versiones 100 % eléctricas llevarían etiqueta Cero; las EREV con extensor de autonomía aspiran a Cero si su autonomía en modo eléctrico supera los 40 km y a ECO si no. Confírmalo en la <a href=/calculadora-etiqueta-dgt/>calculadora de etiqueta DGT</a> y revisa la <a href=/guias/zbe/>guía de ZBE</a>.${NL}- **Autonomía real:** los 802 km son en ciclo CLTC chino, más optimista que el WLTP europeo; estima la cifra real para tu uso con la <a href=/calculadora-autonomia-real/>calculadora de autonomía real</a>.${NL}- **¿Es la mejor compra por ese dinero?** Compáralo cara a cara en el <a href=/comparador-coches/>comparador de coches</a> y pásalo por la <a href=/mejor-coche-por-presupuesto/>herramienta de mejor coche por presupuesto</a>.${NL}${NL}## Preguntas frecuentes${NL}${NL}### ¿Qué es Luxeed?${NL}La marca de Chery con Huawei como socio tecnológico, integrada en el ecosistema HIMA junto a Aito, Stelato, Maextro y SAIC. Chery fabrica; Huawei pone la tecnología.${NL}${NL}### ¿Cuánta autonomía tiene el Luxeed R7?${NL}Hasta 802 km en ciclo CLTC en las versiones eléctricas puras, y más de 1.670 km combinados en las versiones con extensor de autonomía (EREV).${NL}${NL}### ¿Cuánto cuesta?${NL}Precio no confirmado en las fuentes consultadas para la renovación de 2026. No hay precio europeo anunciado.${NL}${NL}### ¿Llegará a Europa?${NL}No hay confirmación oficial, pero Luxeed prepara versiones con volante a la derecha y su objetivo es la expansión internacional dentro del ecosistema HIMA.${NL}${NL}### ¿Qué es el ADS 4 de Huawei?${NL}La cuarta generación del sistema de conducción asistida de Huawei: LiDAR de 192 líneas de serie, segundo LiDAR sólido trasero y cinco radares 4D, con funciones de asistencia en ruta y aparcamiento inteligente.${NL}${NL}### ¿Es rival del <a href=/blog/xiaomi-yu7-2025-precio-ficha-tecnica/>Xiaomi YU7</a>?${NL}Directo: mismo tamaño (4,98 frente a 4,99 m), mismo segmento de SUV coupé eléctrico grande y mismo rango de potencia. La prensa china los enfrenta abiertamente.${NL}${NL}### ¿Qué etiqueta DGT llevaría el Luxeed R7?${NL}Las versiones 100 % eléctricas llevarían la **etiqueta Cero**, con acceso libre a las Zonas de Bajas Emisiones. Las EREV con extensor de autonomía aspiran a Cero si su autonomía eléctrica supera los 40 km (el criterio de la DGT para los enchufables) y a ECO si no. Confírmalo para tu caso en la <a href=/calculadora-etiqueta-dgt/>calculadora de etiqueta DGT</a>.${NL}${NL}### ¿Luxeed R7 o Stelato S9: SUV coupé o berlina?${NL}El R7 es un SUV coupé de 4,98 m con el ADS 4 más moderno; el <a href=/blog/stelato-s9-huawei-2026-precio-ficha-tecnica/>Stelato S9</a> es la berlina de la misma alianza Huawei, con ADS 3.0, 516 CV y hasta 816 km CLTC. Enfréntalos dato a dato en el <a href=/comparador-coches/>comparador de coches</a>.${NL}${NL}## Fuentes`],
  ],
  "luxeed-r7-huawei-2026-precio-ficha-tecnica-oficial.webp"
);

console.log("Tanda 4 completa.");
