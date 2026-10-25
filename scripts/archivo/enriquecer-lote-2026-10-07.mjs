#!/usr/bin/env node
// Tanda 3 (2026-10-07): enriquecimiento continuo.
// 8 artículos: 2 blogs de coche (solkuno-b), 1 flash (kia-ev3), 5 de multas (longtail-1 + db).
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

const NL = "\\n"; // en el fichero .ts el contenido usa \n literal

// ============ 1. Denza N9 ============
aplicar("src/lib/blog-posts-solkuno-b.ts", "denza-n9-byd-2026-precio-ficha-tecnica", [
  // 2ª foto antes de Rivales
  [`${NL}${NL}## Rivales${NL}${NL}| Modelo | Potencia | 0-100 km/h | Longitud |`,
   `<img src=/media/denza-n9-byd-2026-precio-ficha-tecnica-oficial.webp alt=Denza N9 en foto oficial del fabricante>${NL}${NL}## Rivales${NL}${NL}| Modelo | Potencia | 0-100 km/h | Longitud |`],
  // barra final comparador
  [`Míralos frente a frente en nuestro <a href=/comparador-coches>comparador de coches</a>.`,
   `Míralos frente a frente en nuestro <a href=/comparador-coches/>comparador de coches</a>.`],
  // enlace interno al Z9 GT
  [`la marca vende aquí el Z9 GT (más de 1.000 CV en su versión tope) y el monovolumen D9`,
   `la marca vende aquí el <a href=/blog/denza-z9-dm-2024-precio-ficha-tecnica/>Z9 GT</a> (más de 1.000 CV en su versión tope) y el monovolumen D9`],
  // sección "Antes de decidir" + FAQ a formato ### + 2 FAQs nuevas
  [`## Preguntas frecuentes${NL}${NL}**¿Qué es Denza?**${NL}La marca premium de BYD. Nació como alianza con Mercedes-Benz y hoy es propiedad total de BYD; es su división de lujo y alta tecnología.${NL}${NL}**¿Qué versiones del N9 existen?**${NL}Híbrida enchufable 2.0T (la documentada: 925 CV, 0-100 en 3,9 s) y una variante 100 % eléctrica cuya ficha detallada no está confirmada en las fuentes consultadas.${NL}${NL}**¿Cuánto cuesta el Denza N9?**${NL}Precio oficial no confirmado en las fuentes consultadas. En retail internacional aparece entre ~57.000 y 66.000 USD, sin valor oficial.${NL}${NL}**¿Se vende en España?**${NL}El N9 no tiene anuncio oficial para Europa, pero Denza ya comercializa en España el Z9 GT y el D9, así que la marca tiene canal abierto.${NL}${NL}**¿Es rival del Range Rover?**${NL}Por tamaño (5,26 m), posicionamiento premium y precio esperado, sí: apunta al cliente del Range Rover, el BMW XM y el Mercedes GLS.${NL}${NL}**¿Qué autonomía eléctrica tiene la versión híbrida?**${NL}Dato no confirmado en las fuentes consultadas; BYD no lo ha publicado de forma verificable para esta versión.${NL}${NL}## Fuentes`,
   `## Antes de decidir: lo que conviene vigilar${NL}${NL}- **Etiqueta DGT:** como híbrido enchufable, aspiraría a la etiqueta Cero si su autonomía eléctrica supera los 40 km (el criterio de la DGT para los PHEV); confírmalo en la <a href=/calculadora-etiqueta-dgt/>calculadora de etiqueta DGT</a> cuando haya datos oficiales.${NL}- **¿Es la mejor compra por ese dinero?** Si llega a España, pásalo por la <a href=/mejor-coche-por-presupuesto/>herramienta de mejor coche por presupuesto</a> y compáralo cara a cara en el <a href=/comparador-coches/>comparador de coches</a>.${NL}- **Zonas de bajas emisiones:** con etiqueta Cero o ECO circularías sin restricciones; revisa la <a href=/guias/zbe/>guía de ZBE</a>.${NL}${NL}## Preguntas frecuentes${NL}${NL}### ¿Qué es Denza?${NL}La marca premium de BYD. Nació como alianza con Mercedes-Benz y hoy es propiedad total de BYD; es su división de lujo y alta tecnología.${NL}${NL}### ¿Qué versiones del N9 existen?${NL}Híbrida enchufable 2.0T (la documentada: 925 CV, 0-100 en 3,9 s) y una variante 100 % eléctrica cuya ficha detallada no está confirmada en las fuentes consultadas.${NL}${NL}### ¿Cuánto cuesta el Denza N9?${NL}Precio oficial no confirmado en las fuentes consultadas. En retail internacional aparece entre ~57.000 y 66.000 USD, sin valor oficial.${NL}${NL}### ¿Se vende en España?${NL}El N9 no tiene anuncio oficial para Europa, pero Denza ya comercializa en España el <a href=/blog/denza-z9-dm-2024-precio-ficha-tecnica/>Z9 GT</a> y el D9, así que la marca tiene canal abierto.${NL}${NL}### ¿Es rival del Range Rover?${NL}Por tamaño (5,26 m), posicionamiento premium y precio esperado, sí: apunta al cliente del Range Rover, el BMW XM y el Mercedes GLS.${NL}${NL}### ¿Qué autonomía eléctrica tiene la versión híbrida?${NL}Dato no confirmado en las fuentes consultadas; BYD no lo ha publicado de forma verificable para esta versión.${NL}${NL}### ¿Qué etiqueta DGT llevaría el Denza N9?${NL}Como híbrido enchufable, le correspondería la etiqueta Cero si su autonomía en modo eléctrico supera los 40 km; si no los alcanza, sería ECO. Compruébalo para tu caso en la <a href=/calculadora-etiqueta-dgt/>calculadora de etiqueta DGT</a>.${NL}${NL}### ¿Dónde comparo el Denza N9 con sus rivales europeos?${NL}En el <a href=/comparador-coches/>comparador de coches</a> y, si buscas la mejor compra por tu presupuesto, en la <a href=/mejor-coche-por-presupuesto/>herramienta de mejor coche por presupuesto</a>.${NL}${NL}## Fuentes`],
  ],
  "denza-n9-byd-2026-precio-ficha-tecnica-oficial.webp"
);

// ============ 2. Onvo L90 ============
aplicar("src/lib/blog-posts-solkuno-b.ts", "onvo-l90-nio-2026-precio-ficha-tecnica", [
  [`${NL}${NL}## Rivales${NL}${NL}| Modelo | Potencia | Autonomía | Plazas |`,
   `<img src=/media/onvo-l90-nio-2026-precio-ficha-tecnica-oficial.webp alt=Onvo L90 de NIO en foto oficial del fabricante>${NL}${NL}## Rivales${NL}${NL}| Modelo | Potencia | Autonomía | Plazas |`],
  [`Compáralos en detalle en nuestro <a href=/comparador-coches>comparador de coches</a>.`,
   `Compáralos en detalle en nuestro <a href=/comparador-coches/>comparador de coches</a>.`],
  [`## Preguntas frecuentes${NL}${NL}**¿Qué es Onvo?**${NL}La submarca asequible de NIO, creada para competir en precio sin renunciar a la tecnología del grupo: plataforma NT3, intercambio de baterías y conducción asistida avanzada.${NL}${NL}**¿Cuántas plazas tiene el Onvo L90?**${NL}Se ofrece con 6 o 7 plazas, pensado como SUV familiar grande de tres filas.${NL}${NL}**¿Qué es el BaaS y cuánto cuesta?**${NL}Battery as a Service: en lugar de comprar la batería, la alquilas con cuota mensual. Así el L90 parte de 179.800 yuanes en lugar de 279.900, y puedes usar las estaciones de intercambio de NIO.${NL}${NL}**¿Cuánta autonomía tiene?**${NL}Entre 570 y 605 km según versión, en ciclo CLTC chino. La versión de tracción trasera es la más eficiente (600-605 km).${NL}${NL}**¿Se vende en Europa?**${NL}No confirmado. NIO sí opera en varios países europeos, pero del L90 no hay anuncio oficial de llegada.${NL}${NL}**¿Qué rivales tiene en Europa?**${NL}El Kia EV9, el Hyundai Ioniq 9 y el Volvo EX90: los tres SUV eléctricos familiares de 7 plazas ya a la venta en España.${NL}${NL}## Fuentes`,
   `## Antes de decidir: lo que conviene vigilar${NL}${NL}- **Etiqueta DGT:** al ser 100 % eléctrico llevaría etiqueta Cero; confírmalo en la <a href=/calculadora-etiqueta-dgt/>calculadora de etiqueta DGT</a>.${NL}- **Autonomía real:** la cifra CLTC china no equivale al WLTP europeo; calcúlala para tu uso con la <a href=/calculadora-autonomia-real/>calculadora de autonomía real</a>.${NL}- **¿Es la mejor compra por ese dinero?** Compáralo en el <a href=/comparador-coches/>comparador de coches</a> y pásalo por la <a href=/mejor-coche-por-presupuesto/>herramienta de mejor coche por presupuesto</a>.${NL}${NL}## Preguntas frecuentes${NL}${NL}### ¿Qué es Onvo?${NL}La submarca asequible de NIO, creada para competir en precio sin renunciar a la tecnología del grupo: plataforma NT3, intercambio de baterías y conducción asistida avanzada.${NL}${NL}### ¿Cuántas plazas tiene el Onvo L90?${NL}Se ofrece con 6 o 7 plazas, pensado como SUV familiar grande de tres filas.${NL}${NL}### ¿Qué es el BaaS y cuánto cuesta?${NL}Battery as a Service: en lugar de comprar la batería, la alquilas con cuota mensual. Así el L90 parte de 179.800 yuanes en lugar de 279.900, y puedes usar las estaciones de intercambio de NIO.${NL}${NL}### ¿Cuánta autonomía tiene?${NL}Entre 570 y 605 km según versión, en ciclo CLTC chino. La versión de tracción trasera es la más eficiente (600-605 km).${NL}${NL}### ¿Se vende en Europa?${NL}No confirmado. NIO sí opera en varios países europeos, pero del L90 no hay anuncio oficial de llegada.${NL}${NL}### ¿Qué rivales tiene en Europa?${NL}El Kia EV9, el Hyundai Ioniq 9 y el Volvo EX90: los tres SUV eléctricos familiares de 7 plazas ya a la venta en España.${NL}${NL}### ¿Qué etiqueta DGT tendría el Onvo L90?${NL}Al ser 100 % eléctrico llevaría la **etiqueta Cero**, con acceso libre a las Zonas de Bajas Emisiones. Confírmalo para tu matrícula en la <a href=/calculadora-etiqueta-dgt/>calculadora de etiqueta DGT</a>.${NL}${NL}### ¿Compensa el alquiler de batería (BaaS)?${NL}El BaaS baja el precio de acceso (179.800 yuanes frente a 279.900) a cambio de una cuota mensual por la batería, e incluye el uso de las estaciones de intercambio de NIO. Si haces pocos kilómetros al año, la cuota puede no compensar: haz números con tu uso real antes de decidir.${NL}${NL}## Fuentes`],
  ],
  "onvo-l90-nio-2026-precio-ficha-tecnica-oficial.webp"
);

// ============ 3. Kia EV3 flash ============
aplicar("src/lib/blog-posts-flash-2026.ts", "kia-ev3-baja-precio-octubre-2026", [
  // 2ª foto (interior, ya en disco)
  [`lleva detrás. Tienes la ficha completa en nuestra <a href=/coches/kia-ev3-electrico-precio-ficha-tecnica/>ficha del Kia EV3</a>.${NL}${NL}## Nuestra recomendación honesta`,
   `lleva detrás. Tienes la ficha completa en nuestra <a href=/coches/kia-ev3-electrico-precio-ficha-tecnica/>ficha del Kia EV3</a>.${NL}${NL}<img src=/media/kia-ev3-air-2025-precio-ficha-tecnica-interior-oficial.webp alt=Interior del Kia EV3 en foto oficial>${NL}${NL}## Las dos versiones del EV3, cara a cara${NL}${NL}El EV3 se vende con dos baterías. La diferencia real está en la autonomía:${NL}${NL}| Versión | Batería | Autonomía (WLTP) | Para quién |${NL}|---|---|---|---|${NL}| **Air Standard Range** | 58,3 kWh | 436 km | Ciudad y cercanías; la más barata |${NL}| **Long Range** | 81,4 kWh | 605 km | Autopista y viajes largos |${NL}${NL}La versión Air declara 204 CV y ambas homologan un consumo de **14,9 kWh/100 km**, de los más bajos del segmento. Si haces mucha autopista, la Long Range compensa; para el día a día, la Standard Range basta y sale más barata.${NL}${NL}## Nuestra recomendación honesta`],
  // 2 FAQs nuevas al final
  [`### ¿Dónde comparo el EV3 con sus rivales?${NL}En el <a href=/comparador-coches/>comparador de coches</a> y en la <a href=/mejor-coche-por-presupuesto/>herramienta de mejor coche por presupuesto</a>."`,
   `### ¿Dónde comparo el EV3 con sus rivales?${NL}En el <a href=/comparador-coches/>comparador de coches</a> y en la <a href=/mejor-coche-por-presupuesto/>herramienta de mejor coche por presupuesto</a>.${NL}${NL}### ¿Qué garantía tiene el Kia EV3?${NL}Kia ofrece **7 años o 150.000 km** de garantía en España (lo que ocurra antes), una de las más amplias del mercado. Los detalles, en la <a href=/coches/kia-ev3-electrico-precio-ficha-tecnica/>ficha del Kia EV3</a>.${NL}${NL}### ¿El EV3 es buena compra frente a los SUV eléctricos chinos?${NL}A tarifa oficial (37.020 €) compite de tú a tú con los eléctricos chinos del segmento; con las campañas de financiación el precio real baja mucho. Antes de firmar, pásalo por la <a href=/mejor-coche-por-presupuesto/>herramienta de mejor coche por presupuesto</a>."`],
  // readTime 4 -> 5 (ancla con saltos de línea REALES, no literales)
  [`"readTime": 4,\n    "locale": "all",\n    "keywords": [\n      "Kia EV3 precio"`,
   `"readTime": 5,\n    "locale": "all",\n    "keywords": [\n      "Kia EV3 precio"`],
  ],
  "kia-ev3-air-2025-precio-ficha-tecnica-interior-oficial.webp"
);

// ============ 4. multa-saltarse-stop ============
aplicar("src/lib/blog-posts-longtail-1.ts", "multa-saltarse-stop", [
  [`<a href=https://recurretumulta.online/blog/me-ha-llegado-una-multa-de-la-dgt-pero-el-conductor-no-era-yo-quien-paga-como-identificarlo-y-plazos-para-evitar-multas-triplicadas>`,
   `<a href=/blog/me-ha-llegado-una-multa-de-la-dgt-pero-el-conductor-no-era-yo-quien-paga-como-identificarlo-y-plazos-para-evitar-multas-triplicadas/>`],
  [`<a href=https://recurretumulta.online/>analiza tu multa gratis con IA</a>`,
   `<a href=/#analizador>analiza tu multa gratis con IA</a>`],
  [`<a href=https://recurretumulta.online/>Analiza tu multa gratis con IA</a>`,
   `<a href=/#analizador>Analiza tu multa gratis con IA</a>`],
  [`Si la multa viene de una cámara o de un agente que no te detuvo, revisa además la notificación: los defectos en la notificación son otro motivo habitual para recurrir.`,
   `Si la multa viene de una cámara o de un agente que no te detuvo, revisa además la notificación: los defectos en la notificación son otro motivo habitual para recurrir. Puedes consultar el importe y los puntos de esta y otras infracciones en el <a href=/multas/>buscador de multas</a>.`],
  [`### ¿Puedo recurrir una multa por saltarse un stop?${NL}Sí. Las vías más habituales son la **señalización deficiente** (señal no visible) y la **descripción genérica** de los hechos en la denuncia. <a href=/#analizador>Analiza tu multa gratis con IA</a> antes de pagar."`,
   `### ¿Puedo recurrir una multa por saltarse un stop?${NL}Sí. Las vías más habituales son la **señalización deficiente** (señal no visible) y la **descripción genérica** de los hechos en la denuncia. <a href=/#analizador>Analiza tu multa gratis con IA</a> antes de pagar.${NL}${NL}### ¿Me pueden multar en un stop si no hay línea blanca pintada?${NL}Sí. La obligación es detenerte ante la línea; si no hay línea pintada, debes hacerlo inmediatamente antes de la calzada a la que te incorporas (art. 145 del Reglamento General de Circulación). La falta de línea no anula la multa por sí sola, pero una señalización deficiente en conjunto sí es un motivo habitual de recurso."`],
  ],
  "¿Me pueden multar en un stop si no hay línea blanca pintada?"
);

// ============ 5. multa-conducir-sin-seguro ============
aplicar("src/lib/blog-posts-longtail-1.ts", "multa-conducir-sin-seguro", [
  // enlace roto -> artículo existente
  [`<a href=https://recurretumulta.online/blog/como-recurrir-multa-dgt-sin-abogado>cómo recurrir sin abogado</a>`,
   `<a href=/blog/pagar-multa-con-descuento-y-recurrir/>cómo recurrir (y qué no hacer antes de impugnar)</a>`],
  [`<a href=https://recurretumulta.online/>analiza tu multa gratis con IA</a>`,
   `<a href=/#analizador>analiza tu multa gratis con IA</a>`],
  [`- Los competentes para sancionar son los **Jefes Provinciales de Tráfico** (u órganos autonómicos con competencias transferidas), según el art. 3.2.`,
   `- Los competentes para sancionar son los **Jefes Provinciales de Tráfico** (u órganos autonómicos con competencias transferidas), según el art. 3.2. Consulta el importe de esta y otras sanciones en el <a href=/multas/>buscador de multas</a>.`],
  [`### ¿Cómo recupero el coche inmovilizado por falta de seguro?${NL}Contratando el seguro obligatorio, acreditándolo ante la autoridad y **pagando o garantizando los gastos del depósito**. Sin eso no hay devolución."`,
   `### ¿Cómo recupero el coche inmovilizado por falta de seguro?${NL}Contratando el seguro obligatorio, acreditándolo ante la autoridad y **pagando o garantizando los gastos del depósito**. Sin eso no hay devolución.${NL}${NL}### ¿Me pueden multar por ir sin seguro aunque no me pare la policía?${NL}Sí. La DGT cruza los datos con el FIVA (Fichero Informativo de Vehículos Asegurados) y la denuncia puede llegarte por correo sin que te hayan detenido en un control. Por eso conviene comprobar que la póliza está en vigor, no solo que el coche la tuvo alguna vez."`],
  ],
  "¿Me pueden multar por ir sin seguro aunque no me pare la policía?"
);

// ============ 6. cuanto-tarda-en-llegar-una-multa-de-radar ============
aplicar("src/lib/blog-posts-longtail-1.ts", "cuanto-tarda-en-llegar-una-multa-de-radar", [
  [`<a href=https://recurretumulta.online/blog/multa-fantasma-testra-dgt-que-hacer>`,
   `<a href=/blog/multa-fantasma-testra-dgt-que-hacer/>`],
  [`<a href=https://recurretumulta.online/blog/prescripcion-y-caducidad-de-las-multas-de-trafico-cuando-expira-una-sancion-de-la-dgt-plazos-legales-mitos-y-como-anular-expedientes-fuera-de-plazo>`,
   `<a href=/blog/prescripcion-y-caducidad-de-las-multas-de-trafico-cuando-expira-una-sancion-de-la-dgt-plazos-legales-mitos-y-como-anular-expedientes-fuera-de-plazo/>`],
  [`<a href=https://recurretumulta.online/blog/falsa-multa-dgt-sms-correo-phishing>`,
   `<a href=/blog/falsa-multa-dgt-sms-correo-phishing/>`],
  [`<a href=https://recurretumulta.online/>`, `<a href=/#analizador>`, 2],
  [`Si han pasado **más de 2 meses** y no has recibido nada, no des por hecho que te has librado: la notificación puede estar intentándose por otras vías. Y aquí entran los plazos que de verdad importan: los legales.`,
   `Si han pasado **más de 2 meses** y no has recibido nada, no des por hecho que te has librado: la notificación puede estar intentándose por otras vías. Y aquí entran los plazos que de verdad importan: los legales. Si quieres entender cómo funcionan los radares que te pueden haber pillado, tenemos una <a href=/guias/radares/>guía completa de radares de la DGT</a>.`],
  [`### ¿La DGT avisa por SMS o email de las multas?${NL}Cuidado: la DGT **no notifica multas por SMS ni por email con enlaces de pago**. Esos mensajes son <a href=/blog/falsa-multa-dgt-sms-correo-phishing/>falsas multas por phishing</a>. Las notificaciones oficiales van por correo postal, DEV o TEU."`,
   `### ¿La DGT avisa por SMS o email de las multas?${NL}Cuidado: la DGT **no notifica multas por SMS ni por email con enlaces de pago**. Esos mensajes son <a href=/blog/falsa-multa-dgt-sms-correo-phishing/>falsas multas por phishing</a>. Las notificaciones oficiales van por correo postal, DEV o TEU.${NL}${NL}### ¿Puedo consultar mis multas sin certificado digital?${NL}El TEU (<a href=https://www.boe.es/notificaciones/>boe.es/notificaciones</a>) es de consulta pública: puedes buscar por tus datos sin certificado. Para la DEV y la sede electrónica de la DGT necesitarás Cl@ve o certificado digital; la app miDGT también exige identificación."`],
  ],
  "¿Puedo consultar mis multas sin certificado digital?"
);

// ============ 7. radares-velolaser ============
aplicar("src/lib/blog-posts-db.ts", "radares-velolaser-dgt-2026-que-son-donde-los-colocan-como-recurrir-multas", [
  [`<a href=https://recurretumulta.online/blog/margenes-de-error-de-los-radares-de-la-dgt-te-han-multado-injustamente-tablas-oficiales-multas-falsas-y-como-recurrirlas>`,
   `<a href=/blog/margenes-de-error-de-los-radares-de-la-dgt-te-han-multado-injustamente-tablas-oficiales-multas-falsas-y-como-recurrirlas/>`],
  [`<a href=https://recurretumulta.online/blog/prescripcion-y-caducidad-de-las-multas-de-trafico-cuando-expira-una-sancion-de-la-dgt-plazos-legales-mitos-y-como-anular-expedientes-fuera-de-plazo>`,
   `<a href=/blog/prescripcion-y-caducidad-de-las-multas-de-trafico-cuando-expira-una-sancion-de-la-dgt-plazos-legales-mitos-y-como-anular-expedientes-fuera-de-plazo/>`],
  [`<a href=https://recurretumulta.online/>analízala gratis con nuestra IA</a>`,
   `<a href=/#analizador>analízala gratis con nuestra IA</a>`],
  // tabla comparativa de radares + enlace a la guía
  [`<h2>Cuánto multa un Veloláser</h2>`,
   `| Tipo de radar | Cómo funciona | Qué lo delata |${NL}|---|---|---|${NL}| **Fijo** | Cabina o pórtico en un punto concreto | Señalización previa |${NL}| **De tramo** | Velocidad media entre dos puntos | Pórticos de entrada y salida |${NL}| **Móvil** | Coche de la Guardia Civil, parado o en marcha | Vehículo camuflado o visible |${NL}| **Veloláser** | Láser portátil sin flash visible | Casi nada: trípode tras el quitamiedos |${NL}${NL}La <a href=/guias/radares/>guía de radares de la DGT</a> explica cada tipo al detalle.${NL}${NL}<h2>Cuánto multa un Veloláser</h2>`],
  [`### ¿Cómo puedo recurrir una multa de un Veloláser?${NL}Como cualquier multa de velocidad: verifica la verificación metrológica del cinemómetro, la señalización previa del control, la identificación del vehículo y la notificación.`,
   `### ¿Cómo puedo recurrir una multa de un Veloláser?${NL}Como cualquier multa de velocidad: verifica la verificación metrológica del cinemómetro, la señalización previa del control, la identificación del vehículo y la notificación.${NL}${NL}### ¿Son legales los avisadores y detectores de radar?${NL}Los **avisadores** (apps o navegadores con base de datos de ubicaciones) son legales. Los **detectores** están prohibidos: 200 € y 3 puntos. Los **inhibidores**, que interfieren en la medición, son infracción muy grave con multas de miles de euros.`],
  ],
  "¿Son legales los avisadores y detectores de radar?"
);

// ============ 8. multas en el extranjero ============
aplicar("src/lib/blog-posts-db.ts", "multas-de-trafico-en-el-extranjero-francia-portugal-italia-alemania-como-recurrir-multa-radar-extranjero-en-espana-conductor-extranjero-multado-en-espana-dgt-anular-multa-ztl-italia-antai-francia-convenio-intercambio-datos-trafico-union-europea", [
  [`<a href=https://recurretumulta.online/blog/normas-de-trafico-mas-raras-y-estrictas-en-europa-delito-penal-en-francia-prohibicion-del-movil-en-semaforos-y-multas-absurdas-al-volante>`,
   `<a href=/blog/normas-de-trafico-mas-raras-y-estrictas-en-europa-delito-penal-en-francia-prohibicion-del-movil-en-semaforos-y-multas-absurdas-al-volante/>`],
  [`<a href=https://recurretumulta.online/blog/te-ha-llegado-una-multa-de-la-dgt-o-de-un-pais-europeo-como-francia-alemania-italia-o-portugal>`,
   `<a href=/blog/te-ha-llegado-una-multa-de-la-dgt-o-de-un-pais-europeo-como-francia-alemania-italia-o-portugal/>`],
  [`En <a href=https://recurretumulta.online>recurretumulta.online</a> puedes analizar gratis si tu multa es recurrible, estés donde estés."`,
   `En <a href=/#analizador>recurretumulta.online</a> puedes analizar gratis si tu multa es recurrible, estés donde estés."`],
  [`- **20 días naturales**: desde la notificación dispones de 20 días naturales para presentar alegaciones.`,
   `- **20 días naturales**: desde la notificación dispones de 20 días naturales para presentar alegaciones. Los plazos de prescripción y caducidad, al detalle, en la <a href=/guias/prescripcion/>guía de prescripción de multas</a>.`],
  [`### ¿Puedo recurrir sin hablar español?${NL}${NL}Sí, aunque te recomendamos traducir bien la notificación y, si el caso lo requiere, buscar ayuda para redactar las alegaciones.`,
   `### ¿Puedo recurrir sin hablar español?${NL}${NL}Sí, aunque te recomendamos traducir bien la notificación y, si el caso lo requiere, buscar ayuda para redactar las alegaciones.${NL}${NL}### ¿En qué idioma me llegará la multa?${NL}${NL}La Directiva (UE) 2015/413 exige que la notificación incluya la información esencial en un idioma que puedas comprender, no solo en el del país que sanciona. Si te llega únicamente en un idioma que no entiendes, es un defecto de notificación que puede dar pie a recurso.${NL}${NL}### ¿Cuánto tarda en llegar una multa del extranjero?${NL}${NL}Suele tardar más que una nacional: el intercambio de datos entre países y el envío postal internacional alargan el proceso a varias semanas o incluso meses. Mientras tanto, si la sanción es española puedes consultar el TEU para ver si ya está publicada.`],
  ],
  "¿En qué idioma me llegará la multa?"
);

console.log("\nTanda 3 completada.");
