#!/usr/bin/env node
// Tanda 4b (2026-10-08): enriquecimiento continuo.
// 6 blogs de coche (solkuno-a x3, solkuno-c x3): 2ª foto oficial, sección
// "Antes de decidir", 2 FAQs nuevas, enlaces saneados (barra final,
// home absoluta -> relativa) y 3 ENLACES ROTOS CORREGIDOS:
//   /blog/aito-m9-huawei-ficha-tecnica-precio (no existe) -> ficha /coches/
//   /blog/deepal-s07-precio-espana-ficha-tecnica (no existe) -> slug real.
// Ediciones por segmento de artículo; falla si alguna no casa exactamente.
// Orden: primero los reemplazos de enlaces, luego las inserciones (las
// inserciones ya traen los enlaces con barra final).
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

const NL = "\n"; // OJO: en este script "\n" es salto real; solkuno-a/c usan 0x0A en el contenido

// ============ 1. BYD Tang L (solkuno-a) ============
aplicar("src/lib/blog-posts-solkuno-a.ts", "byd-tang-l-2026-precio-ficha-tecnica", [
  [`<a href=/comparador-coches>`, `<a href=/comparador-coches/>`],
  [`<a href=https://recurretumulta.online/>`, `<a href=/>`],
  [`${NL}${NL}## Rivales`,
   `<img src=/media/byd-tang-l-2026-precio-ficha-tecnica-oficial.webp alt=BYD Tang L en foto oficial del fabricante>${NL}${NL}## Rivales`],
  [`## Preguntas frecuentes`,
   `## Antes de decidir: lo que conviene vigilar${NL}${NL}- **Etiqueta DGT:** al ser 100 % eléctrico llevaría etiqueta Cero, con acceso libre a las Zonas de Bajas Emisiones; confírmalo en la <a href=/calculadora-etiqueta-dgt/>calculadora de etiqueta DGT</a> y revisa la <a href=/guias/zbe/>guía de ZBE</a>.${NL}- **Carga de 1.000 kW:** recuperar 400 km en 5 minutos exige un cargador compatible de 1.000 kW, inexistente en las redes europeas actuales (un Supercharger de Tesla trabaja a unos 250 kW). En España cargarías a la potencia de la red disponible.${NL}- **Autonomía real:** los 670 km son en ciclo CLTC chino, más optimista que el WLTP europeo; estima la cifra real para tu uso con la <a href=/calculadora-autonomia-real/>calculadora de autonomía real</a>.${NL}- **¿Es la mejor compra por ese dinero?** Si llega a Europa, compáralo cara a cara en el <a href=/comparador-coches/>comparador de coches</a> y pásalo por la <a href=/mejor-coche-por-presupuesto/>herramienta de mejor coche por presupuesto</a>.${NL}${NL}## Preguntas frecuentes`],
  [`### ¿El BYD Tang L tiene conducción autónoma?${NL}Monta LiDAR en el techo y un avanzado sistema de asistencia a la conducción (ADAS) con cámaras de alta precisión, entre lo más avanzado que ofrece BYD.${NL}${NL}## Fuentes`,
   `### ¿El BYD Tang L tiene conducción autónoma?${NL}Monta LiDAR en el techo y un avanzado sistema de asistencia a la conducción (ADAS) con cámaras de alta precisión, entre lo más avanzado que ofrece BYD.${NL}${NL}### ¿Qué etiqueta DGT tendría el BYD Tang L?${NL}Al ser 100 % eléctrico le correspondería la **etiqueta Cero**, con acceso libre a las Zonas de Bajas Emisiones. Confírmalo para tu caso en la <a href=/calculadora-etiqueta-dgt/>calculadora de etiqueta DGT</a>.${NL}${NL}### ¿Compro el BYD Tang que ya se vende en España o espero al Tang L?${NL}El <a href=/blog/byd-tang-2024-precio-ficha-tecnica/>BYD Tang</a> ya se vende en España: es un SUV eléctrico de 7 plazas distinto y menos potente que el Tang L. El Tang L no tiene fecha de llegada a Europa; si necesitas el coche ya, el Tang actual es la opción real.${NL}${NL}## Fuentes`],
  ],
  "byd-tang-l-2026-precio-ficha-tecnica-oficial.webp"
);

// ============ 2. NIO ES9 (solkuno-a) ============
aplicar("src/lib/blog-posts-solkuno-a.ts", "nio-es9-2026-precio-ficha-tecnica", [
  [`<a href=/comparador-coches>`, `<a href=/comparador-coches/>`],
  [`<a href=https://recurretumulta.online/>`, `<a href=/>`],
  [`${NL}${NL}## Rivales`,
   `<img src=/media/nio-es9-2026-precio-ficha-tecnica-oficial.webp alt=NIO ES9 en foto oficial del fabricante>${NL}${NL}## Rivales`],
  [`## Preguntas frecuentes`,
   `## Antes de decidir: lo que conviene vigilar${NL}${NL}- **Etiqueta DGT:** al ser 100 % eléctrico llevaría etiqueta Cero, con acceso libre a las Zonas de Bajas Emisiones; confírmalo en la <a href=/calculadora-etiqueta-dgt/>calculadora de etiqueta DGT</a> y revisa la <a href=/guias/zbe/>guía de ZBE</a>.${NL}- **Batería en propiedad o BaaS:** el BaaS baja el precio de 498.000 a 390.000 yuanes a cambio de una cuota mensual por la batería; haz números con tus kilómetros anuales antes de decidir.${NL}- **Autonomía real:** unos 635 km en ciclo CLTC con 102 kWh; estima la cifra WLTP real para tu uso con la <a href=/calculadora-autonomia-real/>calculadora de autonomía real</a>.${NL}- **¿Es la mejor compra por ese dinero?** Compáralo cara a cara en el <a href=/comparador-coches/>comparador de coches</a> y pásalo por la <a href=/mejor-coche-por-presupuesto/>herramienta de mejor coche por presupuesto</a>.${NL}${NL}## Preguntas frecuentes`],
  [`### ¿De verdad compite con Maybach?${NL}Es el ángulo de @solkuno, y tiene base: por tamaño, lujo interior y tecnología, el ES9 juega en la liga de las marcas más exclusivas, a una fracción de su precio. Maybach no tiene ningún SUV eléctrico equivalente.${NL}${NL}## Fuentes`,
   `### ¿De verdad compite con Maybach?${NL}Es el ángulo de @solkuno, y tiene base: por tamaño, lujo interior y tecnología, el ES9 juega en la liga de las marcas más exclusivas, a una fracción de su precio. Maybach no tiene ningún SUV eléctrico equivalente.${NL}${NL}### ¿Qué etiqueta DGT tendría el NIO ES9?${NL}Al ser 100 % eléctrico le correspondería la **etiqueta Cero**, con acceso libre a las Zonas de Bajas Emisiones. Confírmalo para tu caso en la <a href=/calculadora-etiqueta-dgt/>calculadora de etiqueta DGT</a>.${NL}${NL}### ¿Compensa el BaaS frente a comprar la batería?${NL}El BaaS baja el precio de acceso (390.000 yuanes frente a 498.000 con batería en propiedad) a cambio de una cuota mensual por la batería, con intercambios incluidos. NIO ya lo ofrece en otros modelos como el <a href=/blog/onvo-l90-nio-2026-precio-ficha-tecnica/>Onvo L90</a>. Si haces pocos kilómetros al año, la cuota puede no compensar: haz números con tu uso real.${NL}${NL}## Fuentes`],
  ],
  "nio-es9-2026-precio-ficha-tecnica-oficial.webp"
);

// ============ 3. Lotus Eletre R+ (solkuno-a) ============
aplicar("src/lib/blog-posts-solkuno-a.ts", "lotus-eletre-r-plus-2026-precio-ficha-tecnica", [
  [`<a href=/comparador-coches>`, `<a href=/comparador-coches/>`],
  [`<a href=https://recurretumulta.online/>`, `<a href=/>`],
  [`${NL}${NL}## Rivales`,
   `<img src=/media/lotus-eletre-r-plus-2026-precio-ficha-tecnica-oficial.webp alt=Lotus Eletre R+ en foto oficial del fabricante>${NL}${NL}## Rivales`],
  [`## Preguntas frecuentes`,
   `## Antes de decidir: lo que conviene vigilar${NL}${NL}- **Etiqueta DGT:** al ser 100 % eléctrico lleva etiqueta Cero, con acceso libre a las Zonas de Bajas Emisiones; confírmalo en la <a href=/calculadora-etiqueta-dgt/>calculadora de etiqueta DGT</a> y revisa la <a href=/guias/zbe/>guía de ZBE</a>.${NL}- **Precio real en España:** la gama Eletre parte de unos 98.600 € y el R+ se mueve en la horquilla de 130.000-160.000 €; pásalo por la <a href=/mejor-coche-por-presupuesto/>herramienta de mejor coche por presupuesto</a> antes de decidir.${NL}- **Carga a 350 kW:** comprueba que tu punto de carga habitual aproveche esa potencia; si no, es capacidad que no vas a usar.${NL}- **¿Es la mejor compra por ese dinero?** Míralo cara a cara con el Urus y el Model X Plaid en el <a href=/comparador-coches/>comparador de coches</a>.${NL}${NL}## Preguntas frecuentes`],
  [`### ¿Qué significa Eletre?${NL}Viene del húngaro "életre", que significa "cobrando vida": el renacer eléctrico de la marca.${NL}${NL}## Fuentes`,
   `### ¿Qué significa Eletre?${NL}Viene del húngaro "életre", que significa "cobrando vida": el renacer eléctrico de la marca.${NL}${NL}### ¿Qué etiqueta DGT lleva el Lotus Eletre R+?${NL}Al ser 100 % eléctrico lleva la **etiqueta Cero**, con acceso libre a las Zonas de Bajas Emisiones. Confírmalo para tu matrícula en la <a href=/calculadora-etiqueta-dgt/>calculadora de etiqueta DGT</a>.${NL}${NL}### ¿De verdad el Eletre R+ supera al Lamborghini Urus?${NL}En potencia eléctrica pura y aceleración, sí, según los datos publicados, y con un precio muy inferior al del Urus. El Urus SE es híbrido enchufable; el Lotus es 100 % eléctrico con 918 CV y carga a 350 kW. Míralos cara a cara en el <a href=/comparador-coches/>comparador de coches</a>.${NL}${NL}## Fuentes`],
  ],
  "lotus-eletre-r-plus-2026-precio-ficha-tecnica-oficial.webp"
);

// ============ 4. Aito M8 (solkuno-c) — incluye ENLACE ROTO corregido ============
aplicar("src/lib/blog-posts-solkuno-c.ts", "aito-m8-huawei-2026-precio-ficha-tecnica", [
  [`<a href=/comparador-coches>`, `<a href=/comparador-coches/>`],
  [`<a href=https://recurretumulta.online/>`, `<a href=/>`],
  // ENLACE ROTO: /blog/aito-m9-huawei-ficha-tecnica-precio no existe -> ficha /coches/
  [`<a href=/blog/aito-m9-huawei-ficha-tecnica-precio>Aito M9 de Huawei</a>`,
   `<a href=/coches/aito-m9-huawei-ficha-tecnica-precio/>Aito M9 de Huawei</a>`],
  [`${NL}${NL}## Rivales`,
   `<img src=/media/aito-m8-huawei-2026-precio-ficha-tecnica-oficial.webp alt=Aito M8 en foto oficial del fabricante>${NL}${NL}## Rivales`],
  [`## Preguntas frecuentes`,
   `## Antes de decidir: lo que conviene vigilar${NL}${NL}- **Etiqueta DGT:** como EREV con 201-310 km de autonomía eléctrica, aspiraría a etiqueta Cero (la DGT pide más de 40 km eléctricos a los enchufables); confírmalo en la <a href=/calculadora-etiqueta-dgt/>calculadora de etiqueta DGT</a> y revisa la <a href=/guias/zbe/>guía de ZBE</a>.${NL}- **Hermano mayor:** si buscas más tamaño y lujo, el <a href=/coches/aito-m9-huawei-ficha-tecnica-precio/>Aito M9 de Huawei</a> juega en la liga superior.${NL}- **¿Es la mejor compra por ese dinero?** Si llega a Europa, compáralo cara a cara en el <a href=/comparador-coches/>comparador de coches</a> y pásalo por la <a href=/mejor-coche-por-presupuesto/>herramienta de mejor coche por presupuesto</a>.${NL}${NL}## Preguntas frecuentes`],
  [`### ¿Qué diferencia hay entre el Aito M8 y el Aito M9?${NL}El M8 es el hermano menor: más compacto, más barato y enfocado a familias. El M9 es el buque insignia de la marca, más grande y caro.${NL}${NL}## Fuentes`,
   `### ¿Qué diferencia hay entre el Aito M8 y el Aito M9?${NL}El M8 es el hermano menor: más compacto, más barato y enfocado a familias. El <a href=/coches/aito-m9-huawei-ficha-tecnica-precio/>M9</a> es el buque insignia de la marca, más grande y caro.${NL}${NL}### ¿Qué etiqueta DGT tendría el Aito M8?${NL}Como EREV con 201-310 km de autonomía eléctrica, aspiraría a la **etiqueta Cero** (la DGT pide más de 40 km eléctricos a los enchufables). Confírmalo para tu caso en la <a href=/calculadora-etiqueta-dgt/>calculadora de etiqueta DGT</a>.${NL}${NL}### ¿Un EREV como el M8 gasta menos que un híbrido enchufable normal?${NL}En el día a día, sí: con 201-310 km de autonomía eléctrica cubres la semana sin arrancar el motor de gasolina, que solo actúa como generador. En viajes largos el consumo se acerca al de un híbrido convencional.${NL}${NL}## Fuentes`],
  ],
  "aito-m8-huawei-2026-precio-ficha-tecnica-oficial.webp"
);

// ============ 5. Deepal S09 (solkuno-c) — incluye ENLACE ROTO corregido ============
aplicar("src/lib/blog-posts-solkuno-c.ts", "deepal-s09-2026-precio-ficha-tecnica", [
  [`<a href=/comparador-coches>`, `<a href=/comparador-coches/>`],
  [`<a href=https://recurretumulta.online/>`, `<a href=/>`],
  // ENLACE ROTO: /blog/deepal-s07-precio-espana-ficha-tecnica no existe -> slug real
  [`<a href=/blog/deepal-s07-precio-espana-ficha-tecnica>Deepal S07</a>`,
   `<a href=/blog/deepal-s07-2025-precio-ficha-tecnica/>Deepal S07</a>`],
  [`${NL}${NL}## Rivales`,
   `<img src=/media/deepal-s09-2026-precio-ficha-tecnica-oficial.webp alt=Deepal S09 en foto oficial del fabricante>${NL}${NL}## Rivales`],
  [`## Preguntas frecuentes`,
   `## Antes de decidir: lo que conviene vigilar${NL}${NL}- **Etiqueta DGT:** como EREV con hasta 220 km de autonomía eléctrica, aspiraría a etiqueta Cero; confírmalo en la <a href=/calculadora-etiqueta-dgt/>calculadora de etiqueta DGT</a> y revisa la <a href=/guias/zbe/>guía de ZBE</a>.${NL}- **Alternativa real hoy:** el <a href=/blog/deepal-s07-2025-precio-ficha-tecnica/>Deepal S07</a> ya se vende en España: más pequeño y barato, disponible ya.${NL}- **¿Es la mejor compra por ese dinero?** Si llega, compáralo cara a cara en el <a href=/comparador-coches/>comparador de coches</a> y pásalo por la <a href=/mejor-coche-por-presupuesto/>herramienta de mejor coche por presupuesto</a>.${NL}${NL}## Preguntas frecuentes`],
  [`### ¿Qué garantía ofrece?${NL}5 años o 100.000 km para el vehículo, 150.000 km para componentes clave como la suspensión neumática y garantía de por vida para el sistema eléctrico y la batería.${NL}${NL}## Fuentes`,
   `### ¿Qué garantía ofrece?${NL}5 años o 100.000 km para el vehículo, 150.000 km para componentes clave como la suspensión neumática y garantía de por vida para el sistema eléctrico y la batería.${NL}${NL}### ¿Qué etiqueta DGT tendría el Deepal S09?${NL}Como EREV con hasta 220 km de autonomía eléctrica, aspiraría a la **etiqueta Cero**. Confírmalo para tu caso en la <a href=/calculadora-etiqueta-dgt/>calculadora de etiqueta DGT</a> y revisa la <a href=/guias/zbe/>guía de ZBE</a>.${NL}${NL}### ¿El Deepal S07 que ya se vende en España es una buena alternativa?${NL}Sí: el <a href=/blog/deepal-s07-2025-precio-ficha-tecnica/>Deepal S07</a> ya se vende en España; es más pequeño y barato que el S09. Si necesitas el coche ya, es la opción real hoy; el S09 no tiene fecha de llegada.${NL}${NL}## Fuentes`],
  ],
  "deepal-s09-2026-precio-ficha-tecnica-oficial.webp"
);

// ============ 6. IM LS9 (solkuno-c) — incluye ENLACE ROTO corregido ============
aplicar("src/lib/blog-posts-solkuno-c.ts", "im-ls9-2026-precio-ficha-tecnica", [
  [`<a href=/comparador-coches>`, `<a href=/comparador-coches/>`],
  [`<a href=https://recurretumulta.online/>`, `<a href=/>`],
  // ENLACE ROTO: /blog/aito-m9-huawei-ficha-tecnica-precio no existe -> ficha /coches/
  [`<a href=/blog/aito-m9-huawei-ficha-tecnica-precio>Aito M9 de Huawei</a>`,
   `<a href=/coches/aito-m9-huawei-ficha-tecnica-precio/>Aito M9 de Huawei</a>`],
  [`${NL}${NL}## Rivales`,
   `<img src=/media/im-ls9-2026-precio-ficha-tecnica-oficial.webp alt=IM LS9 en foto oficial del fabricante>${NL}${NL}## Rivales`],
  [`## Preguntas frecuentes`,
   `## Antes de decidir: lo que conviene vigilar${NL}${NL}- **Etiqueta DGT:** como EREV con hasta 402 km de autonomía eléctrica, aspiraría a etiqueta Cero; confírmalo en la <a href=/calculadora-etiqueta-dgt/>calculadora de etiqueta DGT</a> y revisa la <a href=/guias/zbe/>guía de ZBE</a>.${NL}- **Red de servicio:** IM ya vende en Europa (IM5 e IM6) a través de la red de MG, que daría el servicio postventa si el LS9 llega al continente.${NL}- **Rival a vigilar:** el <a href=/coches/aito-m9-huawei-ficha-tecnica-precio/>Aito M9 de Huawei</a> juega en el mismo segmento de SUV grandes premium.${NL}- **¿Es la mejor compra por ese dinero?** Compáralo cara a cara en el <a href=/comparador-coches/>comparador de coches</a> y pásalo por la <a href=/mejor-coche-por-presupuesto/>herramienta de mejor coche por presupuesto</a>.${NL}${NL}## Preguntas frecuentes`],
  [`### ¿Qué es la versión Hyper del IM LS9?${NL}Una variante de altas prestaciones anunciada para el primer trimestre de 2026: tres motores con 550 kW, 0-100 en 3,9 s, dirección por cable y chip Nvidia Thor para conducción asistida avanzada.${NL}${NL}## Fuentes`,
   `### ¿Qué es la versión Hyper del IM LS9?${NL}Una variante de altas prestaciones anunciada para el primer trimestre de 2026: tres motores con 550 kW, 0-100 en 3,9 s, dirección por cable y chip Nvidia Thor para conducción asistida avanzada.${NL}${NL}### ¿Qué etiqueta DGT tendría el IM LS9?${NL}Como EREV con hasta 402 km de autonomía eléctrica, aspiraría a la **etiqueta Cero**. Confírmalo para tu caso en la <a href=/calculadora-etiqueta-dgt/>calculadora de etiqueta DGT</a>.${NL}${NL}### ¿Quién daría servicio al IM LS9 en España?${NL}IM ya vende en Europa (IM5 e IM6) a través de la red de MG, que sería la encargada del servicio postventa si el LS9 llega al continente. De momento no hay fecha oficial de llegada.${NL}${NL}## Fuentes`],
  ],
  "im-ls9-2026-precio-ficha-tecnica-oficial.webp"
);

console.log("Tanda 4b completa.");
