// Blog de opinión 14/10/2026 (integración en src, sin publicar).
// «Europa retrasa el coche autónomo, España prueba nivel 4».
// Artículo de OPINIÓN: la queja es opinión; los hechos están verificados en
// ~/workspace/fichas-pendientes-20261013/blog-europa-coche-autonomo-queja/fuentes.txt.
// Revisión de 5 agentes + visto bueno SEO antes de integrar (correcciones aplicadas).
// Foto: Tesla Cybercab reutilizada del archivo del sitio (origen no documentado
// en el repositorio; NO se presenta como foto de prensa ni se inventa crédito).
import type { BlogPost } from "./blog-meta.ts";

export const OPINION_20261014_POSTS: BlogPost[] = [
  {
    slug: "europa-retrasa-coche-autonomo-espana-pruebas",
    title: "Europa retrasa el coche autónomo, España prueba nivel 4",
    excerpt:
      "Tesla cambia FSD por Tesla Assisted Driving, la votación europea se retrasa a diciembre de 2026 y España autoriza pruebas de nivel 4. Probar sí, vender no.",
    category: "Actualidad",
    date: "2026-10-14",
    readTime: 6,
    locale: "all",
    keywords: [
      "coche autónomo",
      "conducción autónoma",
      "Tesla Assisted Driving",
      "FSD Europa",
      "programa ES-AV",
      "robotaxis Madrid",
      "nivel 4",
      "DGT vehículos autónomos",
    ],
    content: `<img src=/media/tesla-cybercab-2026-precio-ficha-tecnica-1.webp alt=Tesla Cybercab, robotaxi biplaza sin volante>

*Foto: archivo de recurretumulta.online (origen no documentado en el repositorio). El Tesla Cybercab, prototipo de robotaxi sin volante: no es una furgoneta WeRide ni un coche a la venta en España.*

Europa regula el nombre y retrasa la tecnología. España abre sus carreteras a las pruebas. Esa es la paradoja: aquí las empresas invierten en probar coches autónomos, pero los europeos todavía no pueden comprar ni usar esa misma tecnología. En mi opinión, tenemos las peores leyes para la automoción, y nos están retrasando el avance.

Por Daniel, fundador y responsable de contenidos de RecurreTuMulta.online.

## El caso Tesla: de Full Self-Driving a Tesla Assisted Driving

El ejemplo más claro acaba de pasar delante de todos. Entre el 8 y el 9 de octubre de 2026, Tesla empezó a sustituir en sus webs europeas (España, Alemania, Francia, Países Bajos, Eslovaquia) la denominación **Full Self-Driving (Supervised)** por **Tesla Assisted Driving**. También renombró el Enhanced Autopilot como **Tesla Assisted Driving Basic** y el Summon como **Dumb Summon**.

¿Por qué? Porque el Ministerio Federal de Transporte de Alemania considera que «Full Self-Driving» es engañoso: el sistema es una ayuda a la conducción de **nivel 2 SAE**, no un coche autónomo. El conductor debe permanecer atento en todo momento y sigue siendo el único responsable legal del vehículo. Alemania apoya una aprobación europea rápida, pero con condiciones: el cambio de nombre y que el sistema solo pueda superar el límite de velocidad señalizado hasta un **10 %**, según lo publicado por Softonic/Invezz sobre el entendimiento Alemania-Tesla. La opción estadounidense «Mad Max», que según esas mismas informaciones permite superar el límite detectado hasta un 50 %, no estará disponible en Europa.

La votación europea para extender la autorización a toda la UE, prevista para octubre, se ha aplazado a **diciembre de 2026 como pronto**. El Consejo Europeo de Seguridad en el Transporte (ETSC) pidió retrasarla hasta que haya un debate público sobre la velocidad, la conducción sin manos y las maniobras iniciadas por el sistema fuera de las autopistas. Mientras tanto, la autoridad neerlandesa RDW ya aprobó el sistema a nivel nacional y 8 o 9 países de la UE lo han autorizado en su territorio. España no está entre los países que lo han autorizado a nivel nacional.

Es decir: Europa lleva meses debatiendo el nombre y la velocidad, mientras la tecnología sigue esperando una decisión europea.

## España, el laboratorio: probar sí se puede

Y mientras Europa debate, España ya está haciendo de campo de pruebas. La DGT tiene en marcha el **Programa ES-AV** (Programa Marco de Evaluación de la Seguridad y Tecnología de Vehículos Automatizados), un marco nacional que autoriza y regula la circulación de vehículos automatizados de **niveles SAE 2 a 5**, incluida la conducción remota, en carreteras abiertas al tráfico. Tres fases de pruebas (controlada, extensiva y pre-despliegue), una ventanilla única (la OFVA) y una **etiqueta roja de la DGT** con código QR para identificar los vehículos en pruebas.

Los hechos de 2026 lo demuestran:

- **Septiembre de 2026:** la DGT concedió la primera autorización nacional en España para probar vehículos autónomos de **nivel 4** en vías públicas, a WeRide, Uber y AVOMO. Es la primera aprobación nacional del vehículo GXR de WeRide en la UE.
- **Octubre de 2026:** una veintena de furgonetas ya mapean Madrid y Alcobendas (M-40, A-1, Hortaleza, unos 25 km) con conductor, preparando un servicio de robotaxis que Uber quiere estrenar comercialmente antes de que termine 2026.
- **Tesla** tiene 25 vehículos autorizados para circular por carreteras españolas entre noviembre de 2025 y noviembre de 2027 dentro del programa ES-AV. **Wayve**, otros 3 turismos automatizados entre octubre de 2025 y octubre de 2027.

España no solo permite probar: las empresas invierten en probar aquí: flotas, mapeo, pilotos y operaciones. Eso es dinero real y tecnología real circulando por nuestras carreteras.

## La queja: probar sí, vender no

Y aquí está la contradicción que no me trago. España sirve para hacer los test. Las empresas vienen, invierten, mapean, prueban y arriesgan su dinero aquí. Pero cuando esa misma tecnología tiene que llegar al conductor europeo, a tu coche, a tu garaje, aparece el muro: votaciones que se aplazan, debates sobre el nombre, límites del 10 %, y un «ya veremos en diciembre».

En Europa, cambiamos el nombre y aplazamos la votación. No digo que no haga falta regular: la seguridad vial es sagrada y el conductor debe saber siempre qué puede y qué no puede hacer el coche. Lo que digo es que regular no puede significar parálisis. Si un sistema ya circula en pruebas por Madrid con la bendición de la DGT, ¿por qué Europa tarda meses en decidir si los europeos pueden usarlo?

Las leyes europeas, tal como funcionan hoy, no protegen el avance: lo retrasan. Protegen el debate, no al conductor. Y mientras tanto, corremos el riesgo de que el talento, la inversión y los puestos de trabajo de la movilidad del futuro se vayan a donde sí les dejan avanzar.

## Qué haría falta

No pido barra libre. Pido lo que España ya demuestra que se puede hacer: un marco claro, una sola aprobación europea, responsabilidad definida (quién responde cuando el sistema conduce: fabricante, conductor, operador), y decisiones con fecha. Que el debate sobre el nombre no tape el debate sobre la tecnología. Que probar en España no sea el final del camino, sino el principio: si pasa las pruebas aquí, que pueda venderse en Europa.

Porque si España vale para los test, Europa debería valer para el avance. Y hoy, no vale.

**¿Tienes una multa y no sabes si se puede recurrir?** Antes de pagar, <a href=/>analiza tu multa gratis con IA</a> y descubre si tiene errores, plazos o motivos de recurso.

**Para seguir leyendo:** ficha del <a href=/coches/tesla-model-y-electrico-precio-ficha-tecnica/>Tesla Model Y</a> y su <a href=/coches/tesla-model-y-performance-2026-precio-ficha-tecnica/>blog</a>, ficha del <a href=/coches/tesla-cybercab-2026-precio-ficha-tecnica/>Tesla Cybercab</a> y su <a href=/blog/tesla-cybercab-2026-precio-ficha/>blog</a>, el <a href=/coches/tesla-roadster-2026-retraso-precio-ficha-tecnica/>blog del Tesla Roadster y su retraso</a>, el <a href=/blog/coches-autonomos-de-nivel-3-y-4-en-espana-quien-asume-la-responsabilidad-legal-en-caso-de-accidente/>blog sobre responsabilidad legal en coches autónomos de nivel 3 y 4</a> y el <a href=/blog/robotaxis-madrid-furgonetas-mapeo-octubre-2026/>blog de los robotaxis mapeando Madrid</a>.

*Fuentes: <a href=https://www.reuters.com/es/negocio/EKGNAU6AEBKQDLOSXIM7PJBLXA-2026-09-11/>Reuters (autorización nivel 4)</a>, <a href=https://cadenaser.com/cmadrid/2026/10/05/una-ventana-de-furgonetas-mapean-madrid-y-alcobendas-para-la-llegada-de-los-primeros-taxis-autonomos-de-espana-ser-madrid-norte/>Cadena SER (mapeo Madrid y Alcobendas)</a>, <a href=https://www.softonic.com/articulos/tesla-renombra-desde-hoy-full-self-driving-en-europa-pasa-a-tesla-assisted-driving>Softonic (renombre FSD a Tesla Assisted Driving)</a>, <a href=https://www.camionactualidad.es/destacadas-noticias/item/11038-programa-es-av-espana-impulsa-la-regulacion-de-vehiculos-autonomos-y-de-conduccion-remota>Camión Actualidad (programa ES-AV)</a>.*

## Preguntas frecuentes

### ¿Tesla Assisted Driving es un coche autónomo?

No. Es el nuevo nombre europeo del sistema Full Self-Driving (Supervised) de Tesla, una ayuda a la conducción de nivel 2 SAE. El conductor debe permanecer atento en todo momento y sigue siendo el responsable legal del vehículo.

### ¿Cuándo se votará la aprobación europea del sistema de Tesla?

La votación, prevista inicialmente para octubre de 2026, se aplazó a diciembre de 2026 como pronto. El ETSC pidió retrasarla hasta debatir públicamente las reglas de velocidad, conducción sin manos y maniobras fuera de autopista.

### ¿Se puede usar el FSD completo en España?

No. En España el sistema aún no tiene la autorización para funcionar con todas sus capacidades. Lo que sí hay son pruebas autorizadas dentro del programa ES-AV de la DGT, como las de Tesla (25 vehículos) o las de WeRide/Uber/AVOMO (nivel 4).

### ¿Qué es el programa ES-AV de la DGT?

El Programa Marco de Evaluación de la Seguridad y Tecnología de Vehículos Automatizados. Es el marco nacional español que autoriza pruebas de vehículos automatizados (niveles SAE 2 a 5, incluida conducción remota) en carreteras abiertas, con tres fases (controlada, extensiva y pre-despliegue), ventanilla única (OFVA) y etiqueta roja identificativa con QR.

### ¿Habrá robotaxis en Madrid?

Uber, WeRide y AVOMO tienen la primera autorización nacional de nivel 4 y están mapeando Madrid y Alcobendas con una veintena de furgonetas. El objetivo declarado es estrenar el servicio comercial antes de que termine 2026, si se cumplen los hitos operativos y normativos.

### ¿Por qué Europa retrasa la aprobación?

Por el debate técnico y de responsabilidad: qué puede hacer el sistema, quién responde, y qué reglas de velocidad aplican. Alemania apoya aprobar rápido con condiciones (cambio de nombre y tope del 10 % sobre el límite), pero la votación comunitaria sigue pendiente.`,
  },
];
