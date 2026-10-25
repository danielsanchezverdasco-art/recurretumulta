// Posts publicados de Convex, generados por scripts/export-blog-static.mjs.
// Se fusionan con los estáticos al final del fichero (los de BD tienen prioridad).
// Artículos de octubre 2026 (publicados 02/10/2026): añadidos manualmente al
// bundle estático porque aún no están en Convex. Tienen prioridad sobre los
// extras pero no sobre DB_POSTS (si algún día entran en Convex, manda la BD).
// Artículos long-tail TIER 1 (publicados 02/10/2026): añadidos manualmente al
// bundle estático porque aún no están en Convex. Misma prioridad que los extras.
// Artículos de demanda real (publicados 02/10/2026): dudas top que la gente
// busca y no encuentra bien resueltas. Misma prioridad que los extras.
// Artículos de novedades del motor (lote diario 2026-10-04, lote H):
// récord de ventas Omoda & Jaecoo septiembre 2026, MG HS Hybrid+ 225 CV,
// BYD Dolphin Surf MY26 con 5 plazas y análisis Dongfeng Vigo + Mage PHEV
// (estos dos últimos con entrada nueva en el comparador de coches).
// Estudios originales con datos reales verificables (GEO, 04/10/2026):
// radares que más multan, coste real de una multa, ZBE 2026.
// Lote Solkuno (04/10/2026): 10 SUV/eléctricos chinos del universo @solkuno,
// con datos verificados en prensa. Misma prioridad que los extras.
// Artículo mensual "los eléctricos más vendidos" (cron día 5): datos ANFAC.
// Septiembre 2026 = primera entrega. Se prepara en local, no despliega.
// "all" = artículo multi-país / genérico, visible en cualquier idioma.
// Un valor concreto ("fr", "de", "pt"...) restringe el artículo a esa versión
// del blog para que, por ejemplo, entrando desde "/fr" solo se vean los
// artículos de Francia (+ los genéricos "all").
import type { BlogPost, BlogPostLocale } from "./blog-meta.ts";
export type { BlogPost, BlogPostLocale };
export { BLOG_CATEGORIES } from "./blog-meta.ts";

export const BLOG_POSTS_INLINE: BlogPost[] = [
  {
    slug: "como-recurrir-multa-dgt-sin-abogado",
    locale: "es",
    title: "Recurrir una multa DGT sin abogado, paso a paso",
    excerpt:
      "Puedes recurrir una multa DGT por tu cuenta, gratis y en unos 20 minutos. Te explicamos el proceso exacto, paso a paso.",
    category: "Guías Prácticas",
    date: "2026-08-10",
    readTime: 7,
    keywords: [
      "recurrir multa dgt sin abogado",
      "como recurrir multa trafico",
      "recurso reposicion multa trafico",
      "multa dgt firmeza plazo 20 dias",
      "dgt reduccion 50 pronto pago",
      "multa trafico pagar o recurrir",
      "multa dgt tramitacion electronica",
      "como presentar recurso dgt online",
      "multa dgt clave firma digital",
      "multa trafico sede electronica dgt",
    ],
    content: `## ¿Hace falta abogado para recurrir una multa DGT?

No. El **recurso de reposición** lo puede presentar cualquier ciudadano por su cuenta, gratis y sin abogado ni procurador. Lo regula la <a href=https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722>Ley de Tráfico y Seguridad Vial (RDL 6/2015)</a>.

Solo necesitarías abogado en dos supuestos: si decides acudir a la **vía contencioso-administrativa** (en general, multas superiores a 2.000€) o si la cuantía no compensa el coste de la representación legal.

<img src=/media/plazos-dgt-recurso-calendario-cuerpo.webp alt=Calendario con los plazos para recurrir una multa de la DGT>

## Recurre tu multa DGT sin abogado en 5 pasos

### Paso 1 — Conoce tus opciones desde el primer día

Cuando te llega una multa, desde la notificación cuentas con **20 días naturales** para elegir entre dos opciones **incompatibles entre sí**:

- **Pagar con el 50% de descuento (pronto pago):** Ya no podrás recurrir.
- **Presentar alegaciones o recurso:** No pagas mientras se tramita. Si lo deniegan, pagas el 100%.

**Regla de oro:** Si vas a recurrir, NO pagues la multa.

### Paso 2 — Revisa si tu multa presenta vicios de forma

Muchas multas de tráfico traen errores de procedimiento que pueden anularlas. Revisa la <a href=https://recurretumulta.online/guias/vicios-forma>guía de vicios de forma</a> antes de escribir nada:

- Falta del número TIP o de la placa del agente
- Falta de la hora exacta de la infracción
- Matrícula o descripción del vehículo erróneas
- Notificación fuera de plazo o con defectos
- Radar sin verificación metrológica en vigor
- Señalización insuficiente del radar

### Paso 3 — Escribe el recurso de reposición

El recurso debe contener:
1. Tus datos personales y los del vehículo
2. El número de expediente sancionador
3. Los fundamentos jurídicos en los que te apoyas
4. La petición expresa de anulación de la sanción
5. Fecha y firma

El análisis de RecurreTuMulta.online te da exactamente los argumentos que debes incluir, gratis.

### Paso 4 — Envía el recurso en la sede electrónica de Tráfico

Entra en la <a href=https://sede.dgt.gob.es>sede electrónica de Tráfico (sede.dgt.gob.es)</a>, identifícate con Cl@ve, DNI electrónico o certificado digital y adjunta el documento. Recibirás un justificante de registro con sello de tiempo que acredita que presentaste el recurso en plazo.

Si la multa la puso un **Ayuntamiento o la Policía Local**, preséntalo en el Registro Electrónico General del municipio correspondiente.

### Paso 5 — Espera la resolución y piensa el siguiente paso

La DGT dispone de **1 mes** para resolver. Si no responde, se aplica el silencio administrativo negativo (se entiende desestimado). Si lo deniegan, puedes ir a la **vía contencioso-administrativa**.

<img src=/media/carta-multa-radar-buzon-cuerpo.webp alt=Carta de multa de la DGT en el buzón: revísala antes de pagar>

## ¿Compensa recurrir?

| Escenario | Sin recurrir | Recurriendo con éxito |
|---|---|---|
| Multa de 100€ | 50€ (pronto pago) | 0€ |
| Multa de 300€ | 150€ (pronto pago) | 0€ |
| Multa de 600€ | 300€ (pronto pago) | 0€ |

Redactarlo lleva aproximadamente **20 minutos**. Cuando hay vicios de forma acreditados, las opciones de que el recurso prospere suben de forma notable.

Antes de escribir nada, puedes <a href=https://recurretumulta.online/#analizador>analizar tu multa gratis con IA</a>: detecta los defectos de forma y te dice si compensa recurrir.

## Preguntas frecuentes

### ¿Cuánto puede tardar la DGT en resolver un recurso de reposición?
La DGT dispone de **1 mes** para resolver el recurso de reposición. Si no responde en ese plazo, se aplica el silencio administrativo negativo: se entiende desestimado y puedes ir a la vía contencioso-administrativa.

### ¿Puedo recurrir si ya pagué con el descuento del 50%?
No. Pagar con pronto pago supone **renunciar al derecho a recurrir** y agota la vía administrativa. Por eso la regla de oro es: si vas a recurrir, no pagues la multa antes.

### ¿Dónde presento el recurso de reposición?
Se presenta en la <a href=https://sede.dgt.gob.es>sede electrónica de Tráfico</a>, con certificado digital, Cl@ve o DNI electrónico. Y si la multa es de un Ayuntamiento o Policía Local, en el Registro Electrónico General del municipio correspondiente.

### ¿Hace falta abogado para recurrir una multa de tráfico?
Para el recurso de reposición, no: es un trámite administrativo sin coste que puedes hacer tú mismo. El abogado solo entra si llevas el caso a la vía contencioso-administrativa.

### ¿Recurrir una multa DGT sin abogado cuesta algo?
Nada: el recurso de reposición es un trámite administrativo gratuito, sin tasas, sin abogado y sin procurador. Redactarlo y presentarlo te lleva, según esta guía, unos 20 minutos.

### ¿Se puede recurrir una multa de radar sin abogado?
Sí. Pide en tus alegaciones que aporten el certificado vigente de verificación metrológica del cinemómetro en la fecha de la infracción; si falta o está caducado, la multa debe anularse.
`,
  },
  {
    slug: "defectos-forma-anulan-multa-dgt",
    locale: "es",
    title: "12 defectos de forma que pueden anular tu multa DGT",
    excerpt:
      "Revisa tu expediente antes de pagar: estos 12 fallos de tramitación —del TIP del agente a la foto ilegible— pueden dejar sin efecto una sanción de tráfico.",
    category: "Vicios de Forma",
    date: "2026-08-05",
    readTime: 9,
    keywords: [
      "defectos forma multa trafico",
      "anular multa trafico vicios forma",
      "multa trafico nulidad procedimiento",
      "multa trafico nulidad pleno derecho",
      "multa trafico vicios procedimentales",
      "multa trafico falta motivacion",
      "multa sin numero tip agente",
      "multa trafico sin firma agente",
      "multa sin hora exacta infraccion",
      "multa descripcion incorrecta vehiculo",
      "multa matricula erronea anular",
      "multa trafico derecho defensa audiencia",
    ],
    content: `## Vicio de forma: qué significa en tráfico

En un expediente sancionador, un fallo del trámite que lesiona los derechos del ciudadano recibe el nombre de vicio de forma. A diferencia de discutir el fondo —si la conducta se cometió o no—, aquí se cuestiona la validez del camino que siguió la administración para sancionar.

Su fuerza está en que son objetivos: si el fallo consta en el expediente, la sanción cae aunque la infracción se hubiera cometido realmente.

## Los 12 vicios de forma habituales

### 1. Agente denunciante sin identificar

El boletín debe recoger el número TIP o la placa del agente. Si ese dato no aparece, o no se puede leer, la denuncia pierde la fe pública propia de un agente de la autoridad.

### 2. Falta la hora exacta de la infracción

Junto a la fecha, el boletín debe indicar la hora exacta de la infracción. Sin ella no puedes discutir el hecho ni verificar si el radar funcionaba entonces.

### 3. Matrícula o descripción del vehículo con errores

Un error tipográfico en la matrícula, o una descripción —marca, modelo, color— que no sea la de tu vehículo, puede dejar la multa sin efecto por no identificar al vehículo infractor.

<img src=/media/consultar-multas-pendientes-cuerpo.webp alt=Consulta de multas pendientes para revisar cada expediente>

### 4. Notificación fallida o fuera de plazo

La DGT debe notificarte la denuncia dentro de unos plazos estrictos. Una notificación mal hecha, o fuera de plazo, puede dejar la infracción prescrita.

### 5. Sin aviso de la reducción del 50%

La notificación debe avisar de que el pronto pago rebaja la sanción un 50%: así lo impone el artículo 80 de la LTSV. Omitir ese aviso es un defecto formal grave.

### 6. Documento sin firma ni sello oficial

Todo documento administrativo necesita la firma del funcionario competente y el sello del organismo. Sin esos dos elementos, el documento no vale.

### 7. Expediente parado más de 6 meses: caducidad

Desde que se abre el expediente, la administración tiene seis meses para resolver. Cuando pasan más de seis meses sin resolución dictada, el procedimiento queda caducado y se archiva.

<img src=/media/radar-recurso.webp alt=Boletín de denuncia revisado con lupa buscando defectos de forma>

### 8. Infracción ya prescrita

El plazo es de tres meses para las leves, de seis para las graves y de un año para las muy graves, contados desde la fecha de la infracción.

### 9. Resolución sin motivar

Motivar la resolución es obligatorio: no alcanza con nombrar el artículo infringido, hay que razonar por qué encaja en el caso concreto.

### 10. Resolución sin trámite de audiencia

Antes de resolver, la administración debe dejarte presentar alegaciones. Resolver sin haberte dado ese plazo vulnera tu derecho de defensa.

### 11. Hechos descritos de forma vaga o genérica

Los hechos deben describirse de manera concreta y precisa. Una frase genérica, del estilo de «conducción negligente», sin hechos concretos detallados, no reúne los requisitos legales.

### 12. Foto o prueba que no se puede leer

Cuando la prueba es una fotografía de radar o cámara, la imagen debe permitir reconocer con claridad el vehículo y la velocidad. Si no se puede leer, o no identifica esos datos, carece de valor probatorio suficiente.

## Los 12 vicios, en una tabla

| Nº | Vicio de forma | Efecto |
|---|---|---|
| 1 | Falta del número TIP del agente | La denuncia pierde su fe pública |
| 2 | Sin hora exacta de la infracción | No puedes rebatir el hecho |
| 3 | Matrícula o descripción errónea | Falta de identificación del vehículo |
| 4 | Notificación defectuosa o fuera de plazo | Posible prescripción |
| 5 | Sin aviso del 50% de descuento | Defecto formal grave |
| 6 | Sin firma o sello oficial | Documento inválido |
| 7 | Más de 6 meses sin resolución | Caducidad del expediente |
| 8 | Infracción prescrita (3, 6 o 12 meses) | La sanción desaparece |
| 9 | Resolución sin motivar | Nulidad de la resolución |
| 10 | Sin trámite de audiencia | Vulneración del derecho de defensa |
| 11 | Descripción vaga de los hechos | No cumple los requisitos legales |
| 12 | Foto o prueba ilegible | Sin valor probatorio suficiente |


## También te puede interesar

- <a href=/blog/como-recurrir-multa-dgt-sin-abogado/>guía para recurrir tu multa DGT sin abogado</a>
- <a href=/blog/recurrir-multa-radar-velocidad/>cómo recurrir una multa de radar de velocidad</a>
- <a href=/blog/recurso-reposicion-multa-modelo-2026/>modelo de recurso de reposición para multas</a>

Fuente oficial: <a href=https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722>Ley sobre Tráfico, Circulación de Vehículos a Motor y Seguridad Vial (BOE)</a>.



## Preguntas frecuentes

### ¿Qué se entiende por vicio de forma en tráfico?

Un fallo del trámite en el expediente sancionador que lesiona tus derechos como ciudadano. Frente a discutir el fondo, cuestiona la validez del camino seguido por la administración.

### ¿Anula la multa un vicio de forma aunque cometiera la infracción?

Sí: son objetivos, y si el fallo consta, la multa se anula aunque la infracción se hubiera cometido realmente.

### ¿Qué vicios de forma aparecen con más frecuencia?

Entre los habituales: agente sin número TIP o placa en el boletín, hora exacta de la infracción ausente y matrícula o descripción del vehículo con errores.

### ¿En qué consiste la caducidad del expediente sancionador?

En que, pasados más de seis meses desde que se abrió el expediente sin resolución dictada, el procedimiento queda caducado y se archiva.

### ¿Cuándo prescriben las multas de tráfico?

Tres meses para las leves, seis para las graves y un año para las muy graves, contados desde la fecha de la infracción.

### ¿Puede anular la multa una foto de radar ilegible?

Puede: si la imagen no se puede leer, o no identifica con claridad el vehículo y la velocidad, la prueba carece de valor probatorio suficiente.


Si te ha llegado una multa y crees que puede tener un defecto, <a href=https://recurretumulta.online/#analizador>pásala por nuestro analizador gratuito de multas</a> antes de pagar.`,
  },
  {
    slug: "recurrir-multa-radar-velocidad",
    locale: "es",
    title: "Multa por radar: cómo impugnarla paso a paso",
    excerpt:
      "Sin verificación vigente, sin homologación o mal señalizado, un cinemómetro puede tumbar tu sanción. Los seis motivos, el margen y qué pedir al recurrir.",
    category: "Radares y Velocidad",
    date: "2026-07-28",
    readTime: 8,
    keywords: [
      "recurrir multa velocidad radar",
      "error cinemometro multa velocidad",
      "radar movil homologacion multa",
      "verificacion metrologica radar caducada",
      "multa velocidad tramo recurrir",
      "recurrir multa radar tramo",
      "multa sin rotulo aviso radar",
      "multa radar no homologado",
      "multa radar mal señalizado",
      "multa velocidad margen error 7 kmh",
      "multa exceso velocidad autovia",
      "multa velocidad en obras recurrir",
    ],
    content: `## ¿Cabe impugnar una sanción captada por cinemómetro?

Un aparato fijo, uno portátil o un sistema de tramo solo puede sostener una denuncia cuando respeta cada exigencia técnica y jurídica prevista para él. Basta con que falle una de esas exigencias para que la sanción pueda quedar sin efecto, aunque el velocímetro marcase por encima del tope permitido.

## Seis motivos que pueden dejar sin efecto la denuncia

### 1. Comprobación metrológica fuera de plazo

Cada cinemómetro ha de pasar un control periódico: el del Centro Español de Metrología (CEM) o el de un laboratorio acreditado. Ese control mantiene su validez durante **2 años** en los equipos fijos y durante **1 año** en los portátiles.

**Pedir el documento:** en el escrito de alegaciones puedes reclamar que incorporen el certificado de comprobación metrológica que estuviera vigente el día de los hechos. Cuando ese papel falta o su vigencia ya había terminado, corresponde dejar sin efecto la sanción.

### 2. Modelo sin homologación vigente

Todo modelo de cinemómetro necesita la homologación del Ministerio de Industria. Hay equipos que han estado funcionando sin esa homologación en regla. Pide el número asignado al aparato y comprueba que siga vigente.

### 3. Aviso previo deficiente o ausente

Las normas exigen avisar del control con señales de preaviso que resulten visibles y que aparezcan con tiempo suficiente. Cuando ese aviso no existía o no se percibía como es debido, cabe impugnar la denuncia.

### 4. Tolerancia técnica sin descontar

Cada aparato arrastra una tolerancia técnica que hay que restar de la cifra captada antes de determinar el exceso:
- Por encima de 100 km/h en la lectura: tolerancia de **±7%**
- Hasta 100 km/h en la lectura: tolerancia de **±7 km/h**

Cuando la cifra captada, una vez restada la tolerancia, queda bajo el tope, no hay conducta sancionable.

### 5. Tramo: distancia y controles

Un sistema de tramo obtiene la media entre dos controles. Para que esa media valga, hace falta:
- Que la distancia entre controles figure señalizada con claridad
- Que ambos controles se encuentren en la misma carretera y en el mismo sentido de circulación
- Que del cálculo queden fuera las detenciones impuestas por el trayecto (peajes, gasolineras)

### 6. Móvil: punto y operador

Un equipo portátil ha de cumplir tres condiciones:
- Que lo maneje un agente de tráfico o personal con autorización
- Que se sitúe en un lugar donde el límite resulte evidente por la señalización
- Que permita identificar al conductor con certeza (no basta con identificar el vehículo)

<img src=/media/cuanto-tarda-en-llegar-una-multa-de-radar.webp alt=Buzón con la notificación de una multa de radar>

## La tolerancia, con números

| Velocidad registrada | Límite de velocidad | Margen de error | Velocidad real mínima | ¿Infracción? |
|---|---|---|---|---|
| 57 km/h | 50 km/h | 7 km/h | 50 km/h | Límite, no infracción |
| 58 km/h | 50 km/h | 7 km/h | 51 km/h | Sí, por 1 km/h |
| 107 km/h | 100 km/h | 7 km/h | 100 km/h | Límite, no infracción |

<img src=/media/radar-velocidad-autopista-cuerpo.webp alt=Radar de velocidad en una autopista española>

## Qué reclamar en el escrito

En las alegaciones, incluye una petición clara en este sentido:

> Pide que incorporen al expediente, junto al acta de instalación y de aviso previo, el documento que acredite la comprobación metrológica del aparato usado, indicando cuándo se emitió y hasta cuándo estuvo vigente.

Cuando la Administración no entrega esos papeles, la presunción de inocencia juega en beneficio del conductor.

## También te puede interesar

- <a href=/blog/como-recurrir-multa-dgt-sin-abogado/>guía para recurrir tu multa DGT sin abogado</a>
- <a href=/blog/defectos-forma-anulan-multa-dgt/>12 vicios de forma que tumban una multa DGT</a>
- <a href=/guias/prescripcion/>cuándo prescribe una multa de tráfico</a>

Fuente oficial: <a href=https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722>Ley sobre Tráfico, Circulación de Vehículos a Motor y Seguridad Vial (BOE)</a>.



## Preguntas frecuentes

### ¿Qué control periódico debe pasar un cinemómetro?
Un control del Centro Español de Metrología (CEM) o de un laboratorio acreditado, válido 2 años en equipos fijos y 1 año en portátiles.

### ¿Puedo reclamar el certificado del aparato que me sancionó?
Sí. En el escrito de alegaciones puedes pedir que incorporen el certificado vigente el día de los hechos. Cuando falta o su vigencia había terminado, corresponde dejar sin efecto la sanción.

### ¿Qué tolerancia tiene un cinemómetro?
En lecturas de hasta 100 km/h, ±7 km/h; en lecturas superiores, ±7%. Esa tolerancia hay que restarla de la cifra captada antes de determinar el exceso.

### ¿Debe avisarse del control con antelación?
Las normas exigen señales de preaviso que resulten visibles y que aparezcan con tiempo suficiente. Cuando ese aviso no existía o no se percibía como es debido, cabe impugnar la denuncia.

### ¿Qué ocurre si el modelo carecía de homologación?
El modelo necesita la homologación del Ministerio de Industria. Puedes pedir el número asignado al equipo y comprobar que siga vigente; sin homologación en regla, la sanción no se sostiene.

### ¿Cómo se calcula la velocidad en un tramo?
La media sale de dos controles situados en la misma carretera y en el mismo sentido, con la distancia señalizada, y sin contar las paradas impuestas por el recorrido, como peajes o gasolineras.


Si te ha llegado una multa y crees que puede tener un defecto, <a href=https://recurretumulta.online/#analizador>pásala por nuestro analizador gratuito de multas</a> antes de pagar.`,
  },
  {
    slug: "multa-trafico-madrid-recurrir",
    locale: "es",
    title: "Multa de tráfico en Madrid: guía para recurrirla (2026)",
    excerpt:
      "Madrid tiene más de 450 cámaras de vigilancia y zonas ZBE. Las multas de Policía Municipal y DGT en Madrid tienen sus particularidades. Guía completa.",
    category: "Provincias",
    date: "2026-07-15",
    readTime: 6,
    keywords: [
      "multa trafico madrid 2026",
      "multa zona bajas emisiones madrid zbe",
      "multa zona verde madrid recurrir",
      "multa tarjeta residente ORA",
      "recurrir multa policia municipal madrid",
      "multa aparcamiento madrid recurrir",
      "multa estacionamiento madrid recurrir",
      "multa dgt madrid 2026",
    ],
    content: `## Multas de tráfico en Madrid: lo que necesitas saber en 2026

Madrid es la ciudad española con mayor densidad de sistemas de vigilancia de tráfico: más de **450 cámaras**, radares fijos en la M-30, M-40 y M-45, y el sistema de control de acceso a la **Zona de Bajas Emisiones (ZBE)** Madrid Central y Madrid 360.

## Tipos de multas más frecuentes en Madrid

### Multas de la DGT (vías interurbanas y autovías)

Las multas en la M-30, M-40, M-45 y accesos a Madrid son competencia de la **Jefatura Provincial de Tráfico de Madrid**:
- Email: jpt.madrid@dgt.es
- Dirección: C/ Josefa Valcárcel, 28, 28027 Madrid
- Sede electrónica: sede.dgt.gob.es

### Multas de la Policía Municipal de Madrid (vías urbanas)

Las multas en el interior de la ciudad (calles, avenidas, zonas ORA, Madrid Central) son competencia del **Ayuntamiento de Madrid**:
- Recurso: Registro Electrónico General del Ayuntamiento
- Portal: sede.madrid.es

<img src=/media/grua-municipal-madrid-cuerpo.webp alt=Grúa municipal en una calle de Madrid>

## Multas por la Zona de Bajas Emisiones (ZBE) Madrid Central / Madrid 360

Las ZBE de Madrid restringen el acceso a vehículos sin etiqueta ambiental o sin distintivo de residente. Las multas son de **90€** para vehículos sin etiqueta.

**Argumentos frecuentes para recurrir:**
- Error en la lectura de la matrícula por las cámaras de control
- Señalización insuficiente en los accesos a la ZBE
- Acceso por emergencia o causa de fuerza mayor
- Vehículo de alquiler cuya responsabilidad corresponde al arrendatario

### Zonas ORA y tarjeta de residente

Las multas por aparcamiento en zona regulada (ORA) en Madrid son especialmente recurribles cuando:
- La señalización del tipo de zona era insuficiente o contradictoria
- El parquímetro más cercano estaba averiado (guarda foto)
- El tiempo de estacionamiento máximo no estaba claramente indicado
- La tarjeta de residente estaba vigente pero no fue detectada correctamente

<img src=/media/zbe-madrid-control-camaras-cuerpo.webp alt=Cámaras de control de la ZBE de Madrid>

## Pasos para recurrir una multa del Ayuntamiento de Madrid

1. Accede a **sede.madrid.es**
2. Busca "Recursos contra sanciones de tráfico"
3. Identifícate con Cl@ve o certificado digital
4. Adjunta el recurso y la notificación original
5. Guarda el justificante de registro

El Ayuntamiento de Madrid tiene **1 mes** para resolver. Si no contesta, puedes interponer recurso contencioso-administrativo.

## ¿A quién recurro cada multa en Madrid?

| Tipo de multa | Organismo competente | Dónde recurrir |
|---|---|---|
| M-30, M-40, M-45 y accesos | DGT (Jefatura Provincial de Madrid) | sede.dgt.gob.es |
| Calles urbanas y Policía Municipal | Ayuntamiento de Madrid | sede.madrid.es |
| Zona de Bajas Emisiones (ZBE) | Ayuntamiento de Madrid | sede.madrid.es |
| Zonas ORA y tarjeta de residente | Ayuntamiento de Madrid | sede.madrid.es |


## También te puede interesar

- <a href=/blog/multa-trafico-policia-local-recurrir/>recurso contra multas de la Policía Local</a>
- <a href=/blog/zonas-bajas-emisiones-espana-turistas-extranjeros/>guía de ZBE en España para turistas</a>
- <a href=/blog/multa-aparcamiento-zona-azul-recurrir/>cómo recurrir una multa de zona azul u ORA</a>



## Preguntas frecuentes

### ¿Dónde recurro una multa de la M-30?
Ante la DGT: las multas en la M-30, M-40, M-45 y los accesos son competencia de la Jefatura Provincial de Tráfico de Madrid (sede.dgt.gob.es).

### ¿Y una multa de la Policía Municipal de Madrid?
Ante el Ayuntamiento de Madrid, a través de sede.madrid.es, buscando «Recursos contra sanciones de tráfico».

### ¿Cuánto es la multa por acceder a la ZBE de Madrid sin etiqueta?
90 € para vehículos sin etiqueta, según esta guía.

### ¿Qué plazo tiene el Ayuntamiento de Madrid para resolver?
1 mes. Si no contesta, puedes interponer recurso contencioso-administrativo.

### ¿Qué hago si el parquímetro estaba averiado?
Guarda una foto del parquímetro con fecha y hora: si no pudiste pagar aunque quisieras, es un argumento sólido para recurrir la multa de zona ORA.


Si te ha llegado una multa y crees que puede tener un defecto, <a href=https://recurretumulta.online/#analizador>pásala por nuestro analizador gratuito de multas</a> antes de pagar.`,
  },
  {
    slug: "multa-uso-movil-conduciendo-recurrir",
    locale: "es",
    title: "Multa por el móvil al volante: cómo recurrir los 200 €",
    excerpt:
      "Son 200 € y 6 puntos, pero la prueba deja grietas: visión del agente, foto, pasajero o soporte. Repasa las defensas que pueden tumbar la sanción.",
    category: "Tipos de Multa",
    date: "2026-07-10",
    readTime: 5,
    keywords: [
      "multa telefono movil mano conducir",
      "multa uso movil conduciendo recurrir",
      "multa camara trafico identificacion conductor",
      "multa agente no presencial camara",
      "multa trafico sin prueba fotografica",
      "multa radar fotografia ilegible",
      "multa conductor desconocido identificar",
      "multa vehiculo empresa titular",
    ],
    content: `## Qué prohíbe la norma sobre el teléfono al conducir

Conducir manipulando un terminal queda vetado conforme al artículo 13 del Reglamento General de Circulación, norma que establece que abarca los teléfonos y otros aparatos parecidos. Quien lo incumple se expone a 200€ de multa y a la retirada de 6 puntos del permiso.

Pese a lo contundente de la cifra, este tipo de sanción deja bastante espacio para defenderse, porque la prueba exigible resulta exigente y en muchos expedientes no se alcanza.

<img src=/media/camaras-dgt-movil.webp alt=Cámaras de la DGT que detectan el uso del móvil al volante>

## Motivos de defensa

### 1. Visión dudosa por parte del agente

Para sancionar, quien denuncia tiene que haber comprobado con sus propios ojos que quien conducía manejaba de verdad el terminal. Cuando la denuncia la formula un agente que circulaba en otro coche, en marcha, lejos o desde una perspectiva mala, esa comprobación directa queda en entredicho.

Defensa: *"Desde donde se hallaba, el agente no pudo comprobar de forma segura si quien conducía manipulaba el terminal o únicamente lo sostenía, lo dejaba apoyado o lo transportaba en la consola."*

### 2. Imagen que no prueba nada

Cuando la detección corre a cargo de una cámara automática, la instantánea tiene que cumplir lo siguiente:
- Que se distinga sin dudas a quien conduce sujetando el terminal
- Que resulten reconocibles tanto quien conducía como el coche
- Que la nitidez baste para aceptarla como prueba

Cuando la imagen sale difusa, el terminal no se aprecia con nitidez o tan solo se ve el coche, la prueba no basta.

### 3. El terminal era del acompañante

Cuando en el momento de la denuncia viajaba alguien a tu lado, cabe sostener que el aparato que vio el agente pertenecía a esa persona, no a quien conducía.

### 4. El terminal iba en su soporte

Cuando el teléfono viajaba colocado en un soporte homologado y solo se consultaba como navegador sin manipularlo de forma activa, no hay infracción.

### 5. Confusión sobre quién conducía

Cuando el coche figura a nombre de una compañía o de un tercero, la notificación llega al titular, que puede no coincidir con quien iba al volante. El titular puede abstenerse de designar a quien iba al volante (y asumir la detracción de puntos) o designar a quien realmente conducía.

### 6. Coche de empresa: a quién se le exige

Las compañías titulares de flotas tienen que señalar quién conducía en el momento de la infracción. Cuando no lo hacen, la sanción recae sobre la compañía pero los puntos no se restan a nadie.

<img src=/media/movil-volante-conductor-cuerpo.webp alt=Conductor usando el móvil al volante: 200 euros y 6 puntos>

## Cómo presentar el recurso

Entrega el aviso recibido en RecurreTuMulta.online para conseguir un estudio sin coste con las defensas concretas de tu expediente y valorar si te interesa el PDF íntegro del recurso.

## Recapitulación de las defensas

| Argumento | Cuándo funciona |
|---|---|
| El agente no podía ver con claridad | Agente en movimiento, a distancia o con mal ángulo |
| La fotografía es ilegible | La cámara no muestra claramente el teléfono en la mano |
| El teléfono era del pasajero | Viajabas acompañado en el momento de la denuncia |
| El móvil estaba en el soporte | Solo lo mirabas como GPS sin manipularlo |
| Error de identificación del conductor | Vehículo de empresa o a nombre de otra persona |


## También te puede interesar

- <a href=/blog/defectos-forma-anulan-multa-dgt/>12 vicios de forma que tumban una multa DGT</a>
- <a href=/blog/recurrir-multa-radar-velocidad/>cómo recurrir una multa de radar de velocidad</a>
- <a href=/blog/multa-sin-cinturon-seguridad-recurrir/>multa por no llevar el cinturón de seguridad</a>

Norma consultada: <a href=https://www.boe.es/buscar/act.php?id=BOE-A-2003-23514>Reglamento General de Circulación (BOE)</a>.



## Preguntas frecuentes

### ¿A cuánto asciende la sanción por mirar el teléfono conduciendo?
A 200 € y 6 puntos del carnet, conforme al artículo 13 del Reglamento General de Circulación, norma que establece que abarca los teléfonos y otros aparatos parecidos.

### ¿Consultar el navegador colocado en su soporte se sanciona?
Cuando el teléfono viajaba colocado en un soporte homologado y solo se consultaba como navegador sin manipularlo de forma activa, no hay infracción.

### ¿Y si el aparato pertenecía al acompañante?
Cabe sostener que el aparato que vio el agente pertenecía a esa persona, no a quien conducía.

### ¿Qué ocurre cuando la denuncia procede de una cámara?
La instantánea tiene que mostrar con nitidez a quien conducía sujetando el terminal y permitir reconocerlo. Cuando sale difusa o tan solo se ve el coche, la prueba no basta.

### ¿Quién responde cuando el coche pertenece a una empresa?
La compañía titular tiene que señalar quién conducía. Cuando no lo hace, la sanción recae sobre la compañía pero los puntos no se restan a nadie.


Si te ha llegado una multa y crees que puede tener un defecto, <a href=https://recurretumulta.online/#analizador>pásala por nuestro analizador gratuito de multas</a> antes de pagar.`,
  },
  {
    slug: "multa-aparcamiento-zona-azul-recurrir",
    locale: "es",
    title: "Multa de zona azul: cómo recurrirla y anularla (2026)",
    excerpt:
      "Recurrir una multa de zona azul es viable si la señalización falla, el parquímetro no funciona o la matrícula está mal: qué fotos tomar y qué alegar.",
    category: "Tipos de Multa",
    date: "2026-07-01",
    readTime: 5,
    keywords: [
      "multa aparcamiento zona azul recurrir",
      "multa estacionamiento indebido argumentos",
      "multa estacionamiento paso carruajes",
      "multa aparcar carril bus",
      "multa invasion carril bici",
      "multa aparcamiento señalizacion insuficiente",
      "multa zona azul arguemntos juridicos",
      "recurrir multa estacionamiento ayuntamiento",
    ],
    content: `## Por qué una sanción de aparcamiento se puede tumbar con facilidad

Las sanciones por dejar el coche donde no corresponde encabezan las estadísticas de revocación: en determinados supuestos, la proporción anulada puede llegar al **50%**. La explicación principal está en la cartelería, que muchas veces aparece incompleta, se contradice a sí misma o no basta para que el conductor comprenda la prohibición.

<img src=/media/grua-municipal-madrid-cuerpo.webp alt=Grúa municipal retirando un coche mal aparcado>

## Los razonamientos que mejor funcionan en cada supuesto

### ORA o zona azul: cuando los carteles no bastan

Para considerar correcta una denuncia dentro de un área de estacionamiento regulado, la cartelería tiene que cumplir cuatro exigencias: delimitar con nitidez el perímetro regulado, indicar las horas en que rige la regulación, señalar el plazo máximo de estancia autorizado y mantenerse en buen estado y a la vista. Si falla una sola de estas exigencias, la denuncia queda expuesta a la anulación. Fotografía el entorno cuanto antes puedas.

### Parquímetro estropeado

Si el expendedor más próximo a tu coche no funcionaba cuando estacionaste, pagar resultaba imposible aunque lo intentaras. Guarda cualquier justificante: una imagen del aparato con fecha y hora visibles o el resguardo de un intento de pago fallido.

### Residentes: autorización en vigor no reconocida

Si disponías de autorización de residente vigente y aun así te denunciaron por carecer de ella, cabe un fallo en el lector o en la base de datos municipal.

### Vado: placa sin distintivo vigente

Un paso de carruajes solo obliga si luce la placa de "prohibido aparcar" expedida por el Ayuntamiento. Cuando esa placa carece del distintivo municipal actualizado o presenta deterioro, la prohibición deja de ser exigible legalmente.

### Carril bus y carril bici: doble señalización exigible

Para sancionar por ocupar un carril bus o un carril bici hacen falta pintura sobre el asfalto y carteles verticales que lo adviertan. La falta de uno de los dos elementos resta fuerza a la denuncia.

### Matrícula equivocada

Coteja la matrícula recogida en la notificación con la de tu coche. Un solo carácter erróneo, letra o dígito, invalida la identificación del vehículo sancionado.

<img src=/media/parquimetro-zona-azul-cuerpo.webp alt=Parquímetro de zona azul en una calle española>

## Qué fotografiar nada más recibir la denuncia

Cada vez que te llegue una sanción de aparcamiento, regresa al emplazamiento (o repasa las imágenes que ya tomaste) y documenta estos cuatro elementos:
- La cartelería vertical de los alrededores
- El estado del expendedor más cercano
- El trazado pintado sobre la calzada
- La posición exacta del coche

Esa documentación puede resultar decisiva cuando presentes el recurso.

## Los razonamientos ganadores, resumidos por supuesto

| Tipo de multa | Argumento más efectivo |
|---|---|
| Zona azul u ORA | Señalización insuficiente de límites, horario o tiempo máximo |
| Parquímetro averiado | No pudiste pagar aunque quisieras (guarda foto) |
| Zona de residentes | Tarjeta vigente no detectada por error del sistema |
| Paso de carruajes | Placa de vado sin distintivo municipal o deteriorada |
| Carril bus o carril bici | Falta de marcado horizontal o señalización vertical |
| Error de matrícula | Cualquier letra o número erróneo anula la identificación |


## También te puede interesar

- <a href=/blog/multa-trafico-madrid-recurrir/>cómo recurrir una multa de tráfico en Madrid</a>
- <a href=/blog/multa-trafico-policia-local-recurrir/>recurso contra multas de la Policía Local</a>
- <a href=/blog/multa-trafico-barcelona-recurrir/>cómo recurrir una multa de tráfico en Barcelona</a>

Fuente oficial: <a href=https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722>Ley sobre Tráfico, Circulación de Vehículos a Motor y Seguridad Vial (BOE)</a>.



## Preguntas frecuentes

### ¿Por qué se revocan tantas sanciones de aparcamiento?
Porque encabezan la tasa de revocación, que en determinados supuestos puede llegar al 50%, al depender de una cartelería a menudo incompleta, contradictoria o escasa.

### ¿Qué hago si el expendedor estaba estropeado?
Guarda justificantes: una imagen del aparato con fecha y hora visibles o el resguardo de un intento de pago fallido. Si pagar resultaba imposible aunque lo intentaras, la denuncia admite recurso.

### ¿Qué imágenes conviene tomar al recibir una sanción de aparcamiento?
La cartelería vertical de los alrededores, el estado del expendedor más cercano, el trazado pintado sobre la calzada y la posición exacta del coche.

### ¿Un carácter erróneo en la matrícula anula la denuncia?
Sí. Coteja la matrícula recogida en la notificación con la de tu coche: un solo carácter erróneo, letra o dígito, invalida la identificación del vehículo sancionado.

### ¿La placa del vado deteriorada admite recurso?
Sí: un paso de carruajes solo obliga si luce la placa municipal actualizada. Cuando carece del distintivo o presenta deterioro, la prohibición deja de ser exigible legalmente.


Si te ha llegado una multa y crees que puede tener un defecto, <a href=https://recurretumulta.online/#analizador>pásala por nuestro analizador gratuito de multas</a> antes de pagar.`,
  },
  {
    slug: "multa-semaforo-en-rojo-recurrir",
    locale: "es",
    title: "Multa por semáforo en rojo: 200 €, 4 puntos y cómo recurrir",
    excerpt:
      "La sanción por cruzar con el disco en rojo, los seis motivos para impugnarla y qué debe probar la foto de la cámara para sostener la denuncia.",
    category: "Tipos de Multa",
    date: "2026-06-25",
    readTime: 5,
    keywords: [
      "recurrir multa semaforo en rojo",
      "multa semaforo ambar recurrir",
      "multa trafico argumentos juridicos",
      "multa camara trafico identificacion conductor",
      "recurso multa dgt porcentaje exito",
      "multa trafico sin prueba fotografica",
      "multa radar fotografia ilegible",
      "multa trafico abogado gratis",
    ],
    content: `## Semáforo en rojo: sanción, puntos y margen para impugnar

Cruzar con el disco en rojo se califica como infracción grave en el artículo 76.k) de la vigente Ley de Tráfico, el RDL 6/2015, y conlleva 200 euros más la retirada de 4 puntos, según el Anexo II de esa misma norma. Aun así, cabe impugnar la denuncia cuando la foto deja dudas o cuando el expediente arrastra algún defecto.

<img src=/media/semaforo-ambar-cruce-cuerpo.webp alt=Semáforo en ámbar en un cruce urbano>

## Seis motivos para impugnar la denuncia

### 1. El disco estaba en ámbar al pasar

Solo se sanciona pasar con el rojo, no con el ámbar. Cuando la foto capta el semáforo cambiando o ya en ámbar, la denuncia no debería prosperar. Algunas cámaras disparan con un pequeño retraso, y ese desfase puede llevar a confusión.

### 2. La imagen no deja ver el rojo con claridad

La foto de la cámara tiene que dejar claro, sin margen de duda:
- qué coche aparece, con la matrícula que se pueda leer
- que el disco estaba realmente en rojo en ese instante
- en qué punto estaba el coche en relación con la línea de parada

Si alguno de estos elementos no se aprecia con nitidez, la prueba resulta insuficiente.

### 3. No se pudo identificar a quien conducía

Con un sistema automático, la denuncia recae sobre la persona titular del vehículo. Cuando esa persona no conducía en ese instante, puede señalar quién iba al volante o alegar que no era quien conducía.

### 4. Pasar en rojo por una emergencia o fuerza mayor

Pasar en rojo para abrir paso a ambulancias, bomberos o policía con la sirena en marcha, o para esquivar un accidente que parecía inminente, puede actuar como causa que exime de la sanción.

### 5. El semáforo funcionaba mal en ese momento

Un disco que parpadea, cambia a intervalos irregulares o está averiado en el instante de los hechos, si logras acreditarlo o aportar indicios, sirve como alegación válida.

### 6. La matrícula notificada no coincide con la tuya

Revisa carácter por carácter la matrícula que figura en la notificación y compárala con la tuya: cualquier carácter equivocado deja sin validez la identificación.

<img src=/media/camaras-dgt-semaforo.webp alt=Cámara de la DGT vigilando un semáforo>

## Cuándo prosperan estos recursos

Las impugnaciones de multas por semáforo en rojo salen adelante, sobre todo, cuando la foto deja margen de duda o cuando el expediente arrastra algún vicio de forma.

El análisis gratuito de RecurreTuMulta.online te indica qué motivos encajan con tu caso concreto antes de que decidas si impugnas.

## Qué tiene que acreditar la prueba en cada motivo

| Argumento | Qué debe acreditar la administración |
|---|---|
| Cruce en rojo (no en ámbar) | Que el semáforo estaba en rojo al cruzar |
| Fotografía clara | Vehículo, matrícula legible, luz roja y posición respecto a la línea |
| Conductor identificado | Quién conducía en ese momento |
| Sin causa de justificación | Que no hubo emergencia o fuerza mayor |
| Semáforo en buen estado | Funcionamiento correcto en el momento de la infracción |
| Vehículo correcto | Matrícula exacta, sin errores |


## También te puede interesar

- <a href=/blog/recurrir-multa-radar-velocidad/>cómo recurrir una multa de radar de velocidad</a>
- <a href=/blog/defectos-forma-anulan-multa-dgt/>12 vicios de forma que tumban una multa DGT</a>
- <a href=/blog/multa-uso-movil-conduciendo-recurrir/>multa por usar el móvil al volante</a>

Fuente oficial: <a href=https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722>Ley sobre Tráfico, Circulación de Vehículos a Motor y Seguridad Vial (BOE)</a>.



## Dudas frecuentes sobre el semáforo

### ¿Qué importe y cuántos puntos supone cruzar en rojo?
La sanción es de 200 euros y resta 4 puntos, conforme al Anexo II de la vigente Ley de Tráfico, el RDL 6/2015. Si abonas dentro de los 20 días naturales del pronto pago, el importe baja a 100 euros, aunque los 4 puntos se pierden de todos modos.

### ¿Pasar en ámbar también se sanciona?
No: la sanción solo cubre el paso con el rojo. Si la imagen muestra el disco en fase de cambio o ya en ámbar, la denuncia no debería prosperar.

### ¿Y si pasé en rojo para dejar paso a una ambulancia?
Abrir paso a un vehículo de emergencia con la sirena sonando, o evitar un choque inminente, puede justificar el cruce y librarte de la sanción.

### ¿Qué tiene que verse en la foto de la cámara?
La imagen tiene que dejar claro qué vehículo es, con su matrícula legible, que el semáforo estaba en rojo justo entonces y dónde se encontraba el vehículo frente a la línea de parada.

### ¿Qué hago si la denuncia llegó a mi nombre y no conducía yo?
En las denuncias automáticas, quien recibe la sanción es la persona titular. Esa persona puede indicar quién conducía realmente o manifestar que no era ella quien iba al volante.


Si te ha llegado una multa y crees que puede tener un defecto, <a href=https://recurretumulta.online/#analizador>pásala por nuestro analizador gratuito de multas</a> antes de pagar.`,
  },
  {
    slug: "multa-trafico-barcelona-recurrir",
    locale: "es",
    title: "Multas en Barcelona: cómo recurrir paso a paso",
    excerpt:
      "Guardia Urbana, DGT o AMB: en Barcelona, quién te multa decide dónde recurrir. Plazos, descuento del 50 % y errores que arruinan el recurso.",
    category: "Provincias",
    date: "2026-06-18",
    readTime: 6,
    keywords: [
      "multa trafico barcelona 2026",
      "multa barcelona zona bajas emisiones",
      "recurrir multa trafico barcelona",
      "multa guardia urbana barcelona recurrir",
      "multa aparcamiento barcelona recurrir",
      "multa dgt barcelona 2026",
      "multa zona azul barcelona recurrir",
      "multa barcelona sede electronica",
    ],
    content: `## Multas en Barcelona: el panorama de 2026

Barcelona tiene una casuística especial porque en ella conviven varios organismos con potestad sancionadora: la **Guardia Urbana**, la **DGT** para las vías interurbanas, el **AMB (Àrea Metropolitana de Barcelona)** y los **municipios metropolitanos**.

## Quién multa en Barcelona

### Guardia Urbana: vías urbanas
- Guardia Urbana: calles y vías de la ciudad; el recurso va al Ayuntamiento de Barcelona, en seu.barcelona.cat, y la Oficina d'Atenció al Ciutadà atiende en oia@bcn.cat.

### DGT (autopistas y rondas)
- DGT: autopistas y rondas —C-32, AP-7, B-23, B-20 y B-10, además de los accesos—; el recurso va a la Jefatura Provincial de Tráfico de Barcelona (jpt.barcelona@dgt.es), en C/ Provença, 328-330, 08037 Barcelona.

### AMB y vías metropolitanas
- AMB: vías de la red metropolitana fuera de la ciudad; el recurso corresponde al municipio correspondiente.

<img src=/media/zbe-barcelona-camara-cuerpo.webp alt=Cámara de control de la Zona de Bajas Emisiones de Barcelona>

## La Zona de Bajas Emisiones (ZBE)

La ciudad cuenta con la **ZBE Rondes de Barcelona**, que limita el paso por las Rondas, B-10 y B-20, para vehículos carentes de etiqueta ambiental durante los días laborables de 7h a 20h.

La sanción es de **100€**, recurrible cuando la cámara lee mal la matrícula —algo frecuente con matrículas de países europeos—, cuando la señalización en los accesos a las Rondas resulta insuficiente o cuando aplica una exención por emergencias, transporte escolar o discapacidad.

<img src=/media/barcelona-calle-trafico-cuerpo.webp alt=Tráfico denso en una avenida de Barcelona>

## Aparcamiento regulado: Zona Azul y Área Verde

El aparcamiento regulado barcelonés (Àrea de Barcelona) es un sistema complejo. Una multa por aparcar mal se puede recurrir si el tipo de zona no estaba señalizado con claridad, si el parquímetro más cercano estaba averiado, si la señal vertical contradecía las marcas del suelo o si el controlador leyó mal la matrícula.

## Presentar el recurso en Barcelona

Entra en seu.barcelona.cat y localiza el trámite «Recursos contra sancions de trànsit»; identifícate mediante idCAT, Cl@ve o DNI electrónico, adjunta la notificación junto con el recurso y descarga el resguardo con sello de tiempo.

## Organismos y dónde recurrir

| Organismo | Competencia | Dónde se recurre |
|---|---|---|
| Guardia Urbana | Vías urbanas de Barcelona | Ayuntamiento (seu.barcelona.cat) |
| DGT | B-10, B-20, B-23, AP-7, C-32 y accesos | Jefatura Provincial de Tráfico de Barcelona |
| AMB | Vías metropolitanas fuera de Barcelona | Municipio correspondiente |

## Lecturas relacionadas

- <a href=/blog/multa-trafico-madrid-recurrir/>cómo apelar una sanción de tráfico en Madrid</a>
- <a href=/blog/multa-trafico-policia-local-recurrir/>apelar sanciones de la Policía Local</a>
- <a href=/blog/zonas-bajas-emisiones-espana-turistas-extranjeros/>ZBE en España: guía para turistas</a>

## Antes de recurrir: identifica a quién te sanciona

Varias administraciones conviven en Barcelona, y lo que manda es la notificación: su encabezado indica el organismo denunciante, el expediente y el registro al que debes dirigirte. Una denuncia de la Guàrdia Urbana en una vía urbana se tramita en la sede electrónica del Ajuntament. En vías interurbanas o metropolitanas, pueden intervenir la DGT o el municipio correspondiente.

## Descuento o alegaciones: los plazos

La normativa estatal —la DGT y el texto refundido de la Ley de Tráfico publicado en el BOE— deja una elección clara: dispones de **20 días naturales**, contados a partir del día siguiente a la notificación, para abonar con una **reducción del 50 %** o para presentar alegaciones. Abonar con reducción implica renunciar a alegar, y las alegaciones que lleguen después se tendrán por no presentadas. Alegar supone perder el descuento y, si el recurso se desestima, pagar el 100 %.

| Opción en plazo voluntario | Plazo | Qué pagas | Efecto principal |
|---|---|---|---|
| Pago voluntario con reducción | 20 días naturales | 50 % del importe | Renuncias a alegar y el procedimiento termina |
| Presentar alegaciones | 20 días naturales | Nada en ese momento | Pierdes el descuento; si se desestima, pagas el 100 % |
| Identificar a otro conductor | 20 días naturales desde el requerimiento | Nada en ese momento | El procedimiento se dirige contra la persona identificada |

## Identificación del conductor y alegaciones paso a paso

Si no conducías tú, contesta primero al requerimiento de identificación: indica nombre, apellidos, documento de identidad, número de permiso y domicilio de quien conducía, dentro del plazo indicado. Luego presenta las alegaciones en este orden: menciona el expediente, explica el hecho que discutes, aporta la prueba —fotografías de la señalización, tique de aparcamiento, justificante de exención o documento del vehículo— y pide la anulación o el archivo. Entrega todo por la sede que señale la notificación y descarga el resguardo. Antes de decidir, contrasta tu caso en el <a href=/#analizador>analizador gratuito de multas</a> y revisa la <a href=/guias/vicios-forma/>guía sobre vicios de forma</a> para detectar defectos en la notificación.

## Errores que arruinan un recurso en Barcelona

El error más habitual consiste en abonar con descuento del 50 % y apelar después, cuando la ley ya da esas alegaciones por no presentadas. Después vienen apelar ante el organismo equivocado, contar únicamente días laborables y dejar que pasen los 20 días naturales sin identificar al conductor pese a un requerimiento expreso y alegar sin prueba: afirmar que «la señal no se veía» sin fotografía apenas pesa. 

## No pagar ni recurrir: recargo, vía ejecutiva y embargo

Dejar la multa sin atender no la hace desaparecer. La información de la sede del Ajuntament de Barcelona separa el abono en periodo voluntario del abono en periodo ejecutivo, con el recargo y los intereses que correspondan, si fuera el caso, y avisa de que en situación de «EMBARGO» ya no es posible generar esa copia. La deuda, eso sí, puede encarecerse y terminar en embargo cuando sigue sin atenderse. Si sospechas que ha prescrito, compruébalo con la <a href=/guias/prescripcion/>guía sobre prescripción de multas</a> antes de darla por hecha.

## Veredicto: recurrir o pagar con descuento

**Veredicto:** merece la pena recurrir cuando cuentas con un defecto o con una prueba que se puede comprobar —matrícula mal leída, señalización contradictoria, exención aplicable, otro conductor identificado en plazo o notificación defectuosa— y aceptas que, si pierdes, pagarás el 100 %. Merece la pena abonar un 50 % cuando el hecho es correcto y careces de prueba en contra: cerrar el expediente a la mitad suele salir lo más económico y rápido. Lo que nunca merece la pena es no hacer nada durante 20 días: se pierden el descuento y la opción de alegar.

## Preguntas frecuentes

### ¿Quién puede sancionarte en Barcelona?
La Guardia Urbana en las vías urbanas, la DGT en autopistas y rondas, además del Àrea Metropolitana de Barcelona en las vías metropolitanas.

### ¿De cuánto es la multa de la ZBE de Barcelona?
200 €, o 260 € en caso de episodio de contaminación declarado, por entrar sin etiqueta durante los días laborables de 7h a 20h por las Rondas (B-10 y B-20).

### ¿En dónde se presenta el recurso en Barcelona?
En la sede seu.barcelona.cat, localizando el trámite «Recursos contra sancions de trànsit» e identificándote con idCAT, Cl@ve o DNI electrónico en mano.

### ¿Qué pasa con las matrículas extranjeras?
Los fallos de lectura de matrícula por las cámaras se dan con frecuencia con matrículas de otros países europeos, y suponen un motivo habitual para recurrir.

### ¿Qué hago si el tipo de zona de aparcamiento no estaba claro?
Las multas de aparcamiento regulado se pueden recurrir cuando el tipo de zona no estaba señalizado con claridad, el parquímetro estaba averiado o la señal vertical contradecía las marcas del suelo.

Si te ha llegado una multa y crees que puede tener un defecto, <a href=https://recurretumulta.online/#analizador>pásala por nuestro analizador gratuito de multas</a> antes de pagar.

*Fuentes: DGT (dgt.es) — qué hacer si has recibido una multa, periodo voluntario de 20 días naturales y reducción del 50 %; BOE (boe.es) — texto refundido de la Ley sobre Tráfico, Circulación de Vehículos a Motor y Seguridad Vial, arts. 93 a 95; Ajuntament de Barcelona, sede electrónica (ajuntament.barcelona.cat) — documento de pago de multas en periodo voluntario y ejecutivo, con recargo e intereses y situación de embargo.*
`,
  },
  {
    slug: "multa-sin-cinturon-seguridad-recurrir",
    locale: "es",
    title: "Multa sin cinturón: 200 € y cómo recurrirla",
    excerpt:
      "Conductor: 200 € y 4 puntos; ocupante adulto: 100 €. Si el agente no pudo ver con certeza que ibas sin cinturón o el boletín tiene errores, recurre.",
    category: "Tipos de Multa",
    date: "2026-06-10",
    readTime: 4,
    keywords: [
      "multa no llevar cinturon seguridad recurrir",
      "multa cinturon menor vehiculo",
      "multa trafico argumentos juridicos",
      "multa sin numero tip agente",
      "multa trafico sin firma agente",
      "multa agente no presencial camara",
      "multa conductor desconocido identificar",
    ],
    content: `## Qué dice la norma y cuánto cuesta

La obligación de usarlo figura en el Reglamento General de Circulación, en su artículo 117. La sanción para el conductor alcanza 200 € y 4 puntos del carnet, mientras que un ocupante adulto sin cinturón se expone a 100 €.

## La clave: que el agente lo viera con certeza

El primer argumento gira en torno a la certeza de lo observado. Para sancionar, el agente tiene que haber podido constatar con seguridad visual que el conductor circulaba sin el cinturón abrochado. Esa seguridad se tambalea cuando el agente observaba desde un vehículo en marcha, desde lejos, con poca luz o desde un ángulo que impedía ver dentro del habitáculo: en esos casos, la observación directa admite discusión.

## Cuando el cinturón no se ve desde fuera

<img src=/media/cinturon-repartidores-octubre-2026.webp alt=El cinturón es obligatorio también para repartidores desde octubre de 2026>

Un segundo argumento, de apoyo, tiene que ver con la visibilidad del propio cinturón: con ciertas luces, una cinta oscura puede pasar desapercibida desde fuera. Si la cinta de tu coche es oscura y el agente observaba con visibilidad reducida, esa circunstancia refuerza la impugnación sin sostenerla por sí sola.

## Exenciones acreditadas con certificado

También existen personas exentas de usarlo por determinadas condiciones médicas, siempre que lo acrediten con un certificado médico oficial. Si contabas con esa exención y el agente no la tuvo en cuenta, la sanción no procedería.

## Si el sancionado es un menor

<img src=/media/cinturon-repartidor-furgoneta-cuerpo.webp alt=Conductor con el cinturón de seguridad abrochado>

Cuando el que viajaba sin cinturón es un menor, quien responde es el conductor. Pero si el menor ocupaba un asiento trasero y el agente no alcanzaba a verlo desde donde estaba, vuelve a entrar en juego el argumento de la falta de certeza visual.

## Errores en el boletín que conviene revisar

Como en cualquier sanción, conviene revisar el boletín con lupa: número TIP del agente, hora exacta consignada, matrícula y descripción del vehículo correctas, y notificación practicada en plazo y forma.

Antes de recurrir, revisa estos cuatro puntos como en cualquier sanción:
- El número TIP del agente debe aparecer en la denuncia
- La hora exacta tiene que estar recogida
- Matrícula y descripción del vehículo deben coincidir con el tuyo
- La notificación debe haberse practicado dentro de plazo y con la forma debida

## Resumen rápido

| Situación | Argumento |
|---|---|
| Agente a distancia o en movimiento | La observación directa es cuestionable |
| Cinturón oscuro o poca luz | Pudo no ser visible desde el exterior |
| Exención médica acreditada | Certificado médico oficial |
| Menor en el asiento trasero | El agente no podía verlo desde su posición |
| Errores en el boletín | Sin TIP, sin hora exacta o matrícula errónea |


En síntesis: distancia o movimiento del agente, cinta oscura o poca luz, exención médica acreditada, menor en un asiento trasero no visible y errores en el boletín son las cinco vías que conviene valorar antes de decidir si se recurre.

## También te puede interesar

- <a href=/blog/multa-uso-movil-conduciendo-recurrir/>multa por usar el móvil al volante</a>
- <a href=/blog/defectos-forma-anulan-multa-dgt/>12 vicios de forma que tumban una multa DGT</a>
- <a href=/blog/recurrir-multa-radar-velocidad/>cómo recurrir una multa de radar de velocidad</a>

Fuente oficial: <a href=https://www.boe.es/buscar/act.php?id=BOE-A-2003-23514>Reglamento General de Circulación (BOE)</a>.


## Dudas habituales

### ¿Cuánto cuesta circular sin cinturón?

200 € y 4 puntos para el conductor; 100 € para el ocupante adulto que circule sin él.

### ¿El pasajero también puede ser multado?

Sí: un ocupante adulto que circule sin cinturón se expone a una sanción de 100 €.

### ¿Hay exenciones médicas?


Sí, para personas con ciertas condiciones acreditadas con certificado médico oficial. Si disponías de exención y el agente no la consideró, la sanción no procedería.### ¿Y si el menor viajaba sin cinturón?

Responde el conductor. Pero si el menor viajaba detrás y el agente no alcanzaba a verlo desde donde se encontraba, la observación resulta discutible.

### ¿Cómo tiene que haberme visto el agente?

Tiene que haber podido constatar con seguridad visual que circulabas sin el cinturón abrochado. Desde lejos, en marcha o con poca luz, esa seguridad admite discusión.

Si te ha llegado una multa y crees que puede tener un defecto, <a href=https://recurretumulta.online/#analizador>pásala por nuestro analizador gratuito de multas</a> antes de pagar.`,
  },
  {
    slug: "multa-trafico-policia-local-recurrir",
    locale: "es",
    title: "Multa de Policía Local: recúrrela gratis paso a paso",
    excerpt:
      "Las multas de Policía Local se recurren ante el Ayuntamiento, no ante la DGT. El procedimiento es diferente y los plazos también. Guía completa.",
    category: "Procedimiento",
    date: "2026-06-01",
    readTime: 5,
    keywords: [
      "multa policia local recurrir",
      "recurso alzada multa trafico ayuntamiento",
      "recurrir multa policia municipal madrid",
      "multa ayuntamiento registro electronico",
      "multa trafico sevilla recurrir",
      "multa trafico bilbao recurrir",
      "multa trafico zaragoza recurrir",
      "multa trafico malaga recurrir",
      "multa trafico granada recurrir",
      "multa trafico alicante recurrir",
      "multa trafico valencia 2026",
    ],
    content: `## Diferencia entre multas DGT y multas de Policía Local

Es fundamental saber qué organismo te ha multado, porque el procedimiento de recurso es completamente diferente:

| Aspecto | DGT | Policía Local / Municipal |
|---|---|---|
| Organismo | Jefatura Provincial de Tráfico | Ayuntamiento |
| Primer recurso | Recurso de reposición ante DGT | Recurso de reposición ante Ayuntamiento |
| Segundo recurso | Contencioso-administrativo | Recurso de alzada o contencioso |
| Portal | sede.dgt.gob.es | Sede electrónica del Ayuntamiento |

## Cómo identificar quién te ha multado

- **Boletín de la DGT:** lleva el escudo de la Dirección General de Tráfico y referencia a la Jefatura Provincial de Tráfico
- **Boletín de Policía Local/Municipal:** lleva el escudo del Ayuntamiento y hace referencia a la Ordenanza Municipal de Circulación

<img src=/media/dgt-reforma-agentes-cuerpo.webp alt=Agentes de tráfico en un control en carretera>

## Recurrir ante el Ayuntamiento: paso a paso

### 1. Identifica el plazo

Tienes **1 mes** desde la notificación para interponer el recurso de reposición ante el Ayuntamiento. En algunas ordenanzas municipales el plazo puede variar, así que léela atentamente.

### 2. Redacta el recurso

El recurso debe dirigirse al **Órgano que dictó la resolución** (generalmente el Alcalde o el Concejal de Movilidad), no al departamento de tráfico.

### 3. Presenta el recurso

Accede a la sede electrónica del Ayuntamiento de tu municipio y busca el trámite "Recursos contra sanciones de tráfico" o "Instancia General". Necesitarás Cl@ve, certificado digital o idCAT (en Cataluña).

<img src=/media/policia-local-multa-cuerpo.webp alt=Agente de policía local redactando una denuncia de tráfico>

## Sedes electrónicas por ciudad

- **Madrid:** sede.madrid.es
- **Barcelona:** seu.barcelona.cat
- **Valencia:** sede.valencia.es
- **Sevilla:** sede.sevilla.gob.es
- **Bilbao:** bilbao.eus
- **Zaragoza:** zaragoza.es/sede
- **Málaga:** sede.malaga.eu
- **Granada:** sede.granada.org
- **Alicante:** sede.alicante.es

## Argumentos específicos para multas de Policía Local

Las ordenanzas municipales a menudo tienen requisitos específicos que no siempre se cumplen:
- Señalización según la normativa municipal (no solo la estatal)
- Identificación del agente mediante número de placa del cuerpo local
- Competencia territorial del agente (solo puede multar en su término municipal)
- Requisitos formales de la ordenanza municipal concreta

## También te puede interesar

- <a href=/blog/multa-trafico-madrid-recurrir/>cómo recurrir una multa de tráfico en Madrid</a>
- <a href=/blog/multa-trafico-barcelona-recurrir/>cómo recurrir una multa de tráfico en Barcelona</a>
- <a href=/blog/como-recurrir-multa-dgt-sin-abogado/>guía para recurrir tu multa DGT sin abogado</a>



## Quién manda en la calle donde te denunciaron

Una denuncia dentro del casco urbano no sigue el mismo circuito que una de carretera, y la clave está en el lugar exacto de los hechos. El <a href=https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722&tn=1&p=20151031>texto refundido de la Ley de Tráfico publicado en el BOE</a> atribuye a los alcaldes la sanción de las infracciones de circulación cometidas en vías urbanas, con posibilidad de delegar esa competencia. Por eso el expediente lo resuelve el ayuntamiento, aunque firmara el boletín un agente de su policía local.

Esa atribución tiene límites: quedan fuera las infracciones del título IV de la misma ley, incluidas las relativas a condiciones técnicas del vehículo y al seguro obligatorio. Si los hechos ocurrieron fuera del término municipal, la competencia misma es el primer argumento a examinar.

## Dos ventanas distintas que no debes confundir

Buena parte de los recursos municipales se pierden por mezclar fases. Primero llega la denuncia y se abre el trámite de alegaciones; solo después, si el ayuntamiento dicta resolución sancionadora, nace la posibilidad de impugnarla:

| Momento del expediente | Qué puedes hacer | Plazo verificado |
|---|---|---|
| Notificación de la denuncia | Formular alegaciones y proponer pruebas | 20 días naturales |
| Notificación de la resolución sancionadora | Interponer recurso de reposición potestativo | 1 mes desde el día siguiente |
| Resolución del recurso | Valorar la vía contencioso-administrativa | Según la notificación recibida |

El plazo de reposición de **1 mes** ya aparecía en esta guía y coincide con el procedimiento ordinario de la Ley de Tráfico. El de alegaciones corre en días naturales: festivos incluidos, así que anota la fecha de notificación en el propio sobre.

## Leer la notificación buscando grietas concretas

Antes de redactar, subraya cuatro datos: precepto presuntamente infringido, descripción de los hechos, identificación del agente y forma de notificación. Nuestra <a href=/guias/vicios-forma/>guía de vicios de forma que anulan multas</a> desarrolla esa revisión, y el artículo sobre <a href=/blog/defectos-forma-anulan-multa-dgt/>defectos de forma que pueden tumbar una sanción</a> ayuda a distinguir un error material de una errata sin relevancia.

Suma una comprobación extra: coteja el precepto citado con la ordenanza de ese ayuntamiento concreto. Una señal mal colocada según la normativa local, un número de placa ausente o una calle de otro municipio son los requisitos específicos que esta página ya señalaba. Si pides pruebas, pídelas nombradas —fotografía, informe ratificador, croquis de señalización— y guarda el justificante de registro.

## Fallos que se repiten al recurrir ante un ayuntamiento

El tropiezo inicial más habitual es enviar el escrito a Tráfico cuando el órgano competente era municipal: el tiempo pasa mientras el papel viaja al destinatario equivocado. Le sigue pegar una plantilla pensada para radares en una denuncia presencial, sin mencionar la ordenanza aplicable ni la actuación del agente local.

También debilita el caso alegar que «no estaba allí» sin aportar un documento, o atacar solo el importe cuando existe un problema anterior de competencia. Y no olvides revisar si el asunto podía estar prescrito: para eso tienes la <a href=/guias/prescripcion/>guía de prescripción y caducidad de multas</a>.

Si necesitas una estructura, parte del <a href=/blog/recurso-reposicion-multa-modelo-2026/>modelo de recurso de reposición de 2026</a> y sustituye cada apartado por los datos de tu boletín municipal.

## Veredicto: cuándo compensa pelear una multa municipal

**Veredicto:** merece la pena recurrir cuando detectas un defecto comprobable —competencia dudosa, notificación irregular, señalización contraria a la ordenanza, agente sin identificar o precepto mal aplicado— y puedes sostenerlo con documentos dentro de plazo. En ese escenario, pasa primero tu boletín por el <a href=/#analizador>analizador gratuito de multas</a> para ordenar qué falla y qué prueba falta antes de registrar nada.

No compensa recurrir por inercia confiando en que el ayuntamiento no contestará, ni cuando reconoces los hechos, la notificación es correcta y careces de prueba en contra: allí el escrito solo retrasa lo inevitable. 

## Preguntas frecuentes

### ¿Dónde recurro una multa de la Policía Local?
Ante el Ayuntamiento, no ante la DGT. El procedimiento es diferente y los plazos también.

### ¿Cuál es el plazo para recurrir?
1 mes desde la notificación para interponer el recurso de reposición ante el Ayuntamiento (en algunas ordenanzas municipales puede variar).

### ¿Cómo sé si me multó la DGT o la Policía Local?
El boletín de la DGT lleva su escudo y referencia a la Jefatura Provincial de Tráfico; el de Policía Local lleva el escudo del Ayuntamiento y referencia a la Ordenanza Municipal de Circulación.

### ¿A quién dirijo el recurso?
Al órgano que dictó la resolución (generalmente el Alcalde o el Concejal de Movilidad), no al departamento de tráfico.

### ¿Qué necesito para presentarlo online?
Acceder a la sede electrónica del Ayuntamiento y usar Cl@ve, certificado digital o idCAT (en Cataluña).

### ¿Qué argumentos específicos funcionan con multas municipales?
Los requisitos de las ordenanzas municipales: señalización según normativa municipal, identificación del agente con su número de placa del cuerpo local y competencia territorial (solo puede multar en su término municipal).


Si te ha llegado una multa y crees que puede tener un defecto, <a href=https://recurretumulta.online/#analizador>pásala por nuestro analizador gratuito de multas</a> antes de pagar.

*Fuentes: <a href=https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722&tn=1&p=20151031>texto refundido de la Ley sobre Tráfico, Circulación de Vehículos a Motor y Seguridad Vial (BOE)</a>.*`,
  },
  {
    slug: "recurso-reposicion-multa-modelo-2026",
    locale: "es",
    title: "Recurso de reposición de multa: modelo y pasos 2026",
    excerpt:
      "Cómo redactar un recurso de reposición contra una multa: partes del escrito, fundamentos, plazo de 1 mes y qué hacer si lo desestiman.",
    category: "Guías Prácticas",
    date: "2026-05-20",
    readTime: 7,
    keywords: [
      "multa dgt recurso reposicion modelo",
      "recurso reposicion multa trafico",
      "multa dgt recurso contencioso administrativo",
      "multa dgt baja por defecto forma",
      "multa trafico nulidad pleno derecho",
      "multa trafico derecho defensa audiencia",
      "multa trafico nulidad procedimiento",
      "recurrir multa ia inteligencia artificial",
      "multa trafico abogado gratis",
      "multa dgt porcentaje anulacion estadistica",
    ],
    content: `## Un primer paso para impugnar la sanción

Cuando llega una resolución sancionadora de tráfico, la primera vía para discutirla es el recurso de reposición. Se presenta ante el mismo órgano que dictó esa resolución, ya sea la jefatura de tráfico de la provincia o el consistorio municipal, y el plazo para hacerlo es de 1 mes contado desde la notificación. Presentarlo no cuesta nada, tampoco exige contar con abogado, y funciona especialmente bien cuando la sanción arrastra defectos de forma o cuando existen razones de fondo con peso.

## Las partes que debe llevar el escrito

<img src=/media/plazos-dgt-recurso-calendario-cuerpo.webp alt=Calendario de plazos del procedimiento sancionador de tráfico>

Un recurso ordenado facilita que quien lo resuelve entienda qué se discute y por qué. Conviene estructurarlo en cuatro partes, cada una con su función.

<img src=/media/plazos-dgt-recurso-hero.webp alt=Plazos para presentar el recurso de reposición contra una multa>

### Datos de quien recurre

El escrito abre con la identificación de la persona recurrente: nombre completo, DNI o NIE y domicilio elegido para recibir notificaciones, dirigido a la jefatura provincial de la provincia que corresponda. Tras esos datos, el texto introduce la exposición de motivos con la fórmula habitual.

### Relato de lo ocurrido

En este apartado se expone, de forma breve, que se ha recibido la resolución sancionadora, con su número de expediente, la fecha en que se notificó y la infracción que se imputa, además de los hechos tal y como los conoce quien recurre. La concisión ayuda: no se trata de contar toda la historia, sino de fijar qué se impugna y desde qué versión de los hechos.

### Razones jurídicas

Expónlo de forma breve:
- Que te notificaron la resolución sancionadora nº [EXPEDIENTE]
- Cuándo se te notificó
- Qué infracción se te atribuye
- Los hechos según tu versión

Aquí está el núcleo del recurso. Las alegaciones más habituales son tres. La primera apunta a defectos de forma y se apoya en la Ley 39/2015, artículo 47.1.e, norma del Procedimiento Administrativo Común, en relación con el derecho de defensa que reconoce la Constitución en su artículo 24: si la resolución adolece de un vicio concreto, debe precisarse cuál es. La segunda invoca la prescripción, conforme al Real Decreto Legislativo 6/2015, texto refundido de la Ley sobre Tráfico, artículo 112, cuando desde la infracción hasta una notificación válida ha pasado el tiempo previsto sin interrupción. La tercera se basa en la falta de prueba suficiente, amparada en la presunción de inocencia de la Constitución, artículo 24.2, y en el Real Decreto 320/1994, artículo 53.2: corresponde a la Administración acreditar los hechos que imputa.

### Lo que se pide al final

El escrito cierra solicitando que el recurso se admita y que, tras los trámites oportunos, se dicte una resolución favorable que acuerde la nulidad de la sanción recurrida, identificada por su número de expediente. Se firma indicando ciudad y fecha.

## Si la respuesta es negativa

Cuando el recurso de reposición se desestima, queda abierta la vía del recurso contencioso-administrativo, que supone acudir al juzgado provincial de lo contencioso-administrativo. En sanciones inferiores a 900 €, el procedimiento sigue la vía abreviada y tampoco en ese caso resulta obligatorio contar con abogado.

## Preguntas frecuentes

### ¿En qué consiste este recurso?

Es la primera vía para impugnar una sanción de tráfico y se dirige al mismo órgano que dictó la resolución, dentro del plazo de 1 mes desde su notificación.

### ¿Hace falta abogado para presentarlo?

No. Presentarlo es gratuito, no exige abogado y puede prosperar cuando hay defectos de forma o razones de fondo sólidas.

### ¿Qué ocurre si lo desestiman?

Queda acudir al juzgado provincial de lo contencioso-administrativo. Para sanciones por debajo de 900 €, el procedimiento es abreviado y no exige abogado.

### ¿Qué razones suelen resultar más eficaces?

Los defectos de forma, con apoyo en la Ley 39/2015, artículo 47.1.e; la prescripción, conforme al Real Decreto Legislativo 6/2015, artículo 112; y la falta de prueba suficiente, amparada en la presunción de inocencia.

| Parte | Qué debe incluir |
|---|---|
| Encabezamiento | Datos personales, DNI/NIE y domicilio a efectos de notificación |
| Hechos | Nº de expediente, fecha de notificación e infracción imputada |
| Fundamentos de derecho | Vicios de forma (art. 47.1.e Ley 39/2015), prescripción (art. 112 LTSV) o falta de prueba |
| Solicitud | Petición expresa de nulidad de la resolución sancionadora |

## También te puede interesar


- <a href=/blog/como-recurrir-multa-dgt-sin-abogado/>guía para recurrir tu multa DGT sin abogado</a>
- <a href=/blog/defectos-forma-anulan-multa-dgt/>12 vicios de forma que tumban una multa DGT</a>
- <a href=/guias/prescripcion/>cuándo prescribe una multa de tráfico</a>

Fuente oficial: <a href=https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565>Ley del Procedimiento Administrativo Común (BOE)</a>.

Si te ha llegado una multa y crees que puede tener un defecto, <a href=https://recurretumulta.online/#analizador>pásala por nuestro analizador gratuito de multas</a> antes de pagar.`,
  },
];

// ─── ARTÍCULOS SEO EXTRA ────────────────────────────────────────────────────
// España: audiencias internacionales (FR, DE, PT)

export const EXTRA_POSTS: BlogPost[] = [
  // ── FRANCIA: Cola larga ────────────────────────────────────────────────
  

  // ── ALEMANIA: Cola larga ───────────────────────────────────────────────
  

  // ── PORTUGAL: Cola larga ───────────────────────────────────────────────
  

  // ── FRANCIA: Cola corta (complementario) ──────────────────────────────
  {
    slug: "zonas-bajas-emisiones-espana-turistas-extranjeros",
    locale: "all",
    title: "ZBE en España 2026: guía para turistas con coche extranjero",
    excerpt:
      "Turista con coche extranjero en España: qué equivalencia DGT te corresponde, qué ciudades tienen ZBE y cómo recurrir la multa si te llega.",
    category: "Extranjeros en España",
    date: "2026-09-05",
    readTime: 6,
    keywords: [
      "zona bajas emisiones España turistas extranjeros",
      "ZBE Barcelona turistas Francia Alemania Portugal",
      "etiqueta DGT coche extranjero 2026",
      "zone basse émission barcelone voiture française",
      "umweltzone barcelona ausländer",
      "zona emissões barcelona carro estrangeiro",
      "multa ZBE Barcelona turista europeo",
      "cómo obtener etiqueta DGT coche francés",
      "ZBE Madrid turista no residente",
      "acceso Madrid Central coche extranjero",
      "multa zona emisiones recurso",
      "ZBE España nuevas ciudades 2026",
      "etiqueta ambiental coche extranjero equivalencia",
      "barcelona low emission zone foreign car fine",
    ],
    content: `## Zonas de Bajas Emisiones en España para visitantes europeos

Durante 2026, en España ya funcionan ZBE en **más de 25 ciudades**. Estas áreas limitan el paso de los vehículos más contaminantes y tocan de lleno a los **visitantes franceses, alemanes, portugueses y del resto de la UE** que recorren España en su propio coche.

## La etiqueta de la DGT y por qué te afecta

La **pegatina medioambiental de la DGT** ordena los vehículos según sus emisiones:

- **Azul, CERO**: coches totalmente eléctricos, de pila de combustible y ciertos híbridos enchufables
- **Verde-azul, ECO**: híbridos enchufables con al menos 40 km de autonomía eléctrica y modelos de GNC o GLP hasta Euro 6
- **Verde, C**: gasolina a partir de Euro 4 (desde 2006) y diésel a partir de Euro 6 (desde 2015)
- **Amarilla, B**: gasolina Euro 3 (2001-2005) y diésel Euro 4-5 (2006-2014)
- **Sin distintivo**: gasolina Euro 2 o anterior y diésel Euro 3 o anterior — **VETADOS en las ZBE**

## Equivalencias para coches de fuera

| País | Sistema local | Equivalente DGT |
|---|---|---|
| Francia | CRIT'AIR 1 | C o ECO |
| Francia | CRIT'AIR 2 | B o C |
| Francia | CRIT'AIR 3+ | Sin etiqueta o B |
| Alemania | Euro 6 | C o ECO |
| Alemania | Euro 5 | B o C |
| Portugal | Euro 6 | C o ECO |
| Portugal | Euro 4-5 | B o C |

> La correspondencia precisa varía con el año de matriculación, el combustible y la norma Euro del coche. Revísala en **dgt.es/etiqueta** antes de emprender el viaje.

<img src=/media/zbe-camara-control.webp alt=Cámara de control de acceso a una Zona de Bajas Emisiones>

## Barcelona: la ZBE más exigente para el visitante

La **Zona de Baixes Emissions del Área Metropolitana de Barcelona** abarca la capital entera más 36 municipios del Barcelonès y del Baix Llobregat. En días laborables, de 7h a 20h, rige lo siguiente:

- Sin distintivo → veto absoluto
- Distintivo B → veto en jornadas de alta contaminación
- Distintivo C → paso autorizado
- ECO y CERO → sin limitaciones

**Sanción por acceder sin distintivo: 500€ en turismos y 1.000€ en furgonetas.**

### ¿Cómo compruebo el acceso de mi coche francés, alemán o portugués a Barcelona?

1. Entra en **zbe.barcelona.cat**: dispone de un buscador para matrículas extranjeras
2. Con un Euro 6 de gasolina o diésel, por lo general podrás pasar
3. Con un diésel anterior a 2015 o una gasolina anterior a 2006, existe riesgo de veto

## Madrid: qué cambia para quien no reside allí

En Madrid, tanto **Madrid Central** como la **ZBE municipal** solo dejan pasar libremente a los vehículos con distintivo C, ECO o CERO. Quien visita la capital puede:

- Circular con un Euro 6 sin problema
- Pedir una **Autorización de Acceso Puntual** al Ayuntamiento de Madrid (24h de paso gratuito)
- Dejar el coche en el aparcamiento disuasorio de la A-6 o de la A-3 y seguir en metro

<img src=/media/pilar-zbe.webp alt=Guía de Zonas de Bajas Emisiones en España>

## Recurrir una sanción de ZBE sin conocer su existencia

Desconocer la norma no exime de cumplirla, **aunque en ciertos supuestos puede atenuar la sanción**. Si te ha llegado una multa de ZBE como visitante extranjero, puedes sostener:

- **Que la entrada no estuviera señalizada como es debido**
- **Que, viviendo fuera de España, no pudieras conseguir la pegatina**
- **Que el vehículo sancionado no fuera el tuyo, por una matrícula parecida o un fallo del sistema**

Usa **RecurreTuMulta.online** para revisar si tu sanción presenta motivos de nulidad. El análisis es gratuito.

## Localidades con ZBE activa en España durante 2026

- El área metropolitana de Barcelona
- Madrid, con su ZBE urbana y Madrid Central
- Valencia, con su ZBE del Pla de Mobilitat Urbana
- Sevilla, con su ZBE del Centro Histórico
- Valladolid, con su ZBE del Centro
- Zaragoza, con su ZBE de la Av. César Augusto
- Málaga, todavía en implementación
- Bilbao, todavía en implementación

## Recomendaciones para europeos que viajan a España en su coche

- Revisa la equivalencia DGT de tu coche en **dgt.es** con dos semanas de antelación como mínimo
- Instala la app **DGT 3.0** para consultar la señalización y los límites al momento
- Si tu navegador es extranjero (Waze o Google Maps), configura en él los límites de velocidad de España
- Conserva la foto de la sanción si te llega: la IA de RecurreTuMulta.online la examina en segundos

## Otros artículos que te pueden interesar

- <a href=/blog/multa-trafico-barcelona-recurrir/>cómo recurrir una multa de tráfico en Barcelona</a>
- <a href=/blog/multa-trafico-madrid-recurrir/>cómo recurrir una multa de tráfico en Madrid</a>
- <a href=/blog/dgt-organismo-trafico-espana-como-funciona/>qué es la DGT y cómo funciona</a>



## Preguntas frecuentes

### ¿En qué consiste la etiqueta de la DGT?
La DGT ordena así los coches por emisiones: CERO en azul, ECO en verde-azul, C en verde, B en amarillo y los sin distintivo, vetados en las ZBE.

### ¿Un turista con coche extranjero necesita la pegatina de la DGT?
Como no residente no puedes obtener la pegatina física, pero a tu coche le corresponde una equivalencia según su norma Euro, su año y su combustible; revísala en dgt.es/etiqueta antes de emprender el viaje.

### ¿Qué importe tiene la sanción barcelonesa por acceder sin distintivo?
Asciende a 200 €, una sanción única para cualquier vehículo sin autorización, que sube a 260 € cuando se declara un episodio de contaminación, según el artículo 20 de la ordenanza barcelonesa de la ZBE (ajuntament.barcelona.cat).

### ¿Cómo verifico el acceso de un coche francés o alemán a Barcelona?
El portal zbe.barcelona.cat ofrece un buscador para matrículas extranjeras. Con un Euro 6 de gasolina o diésel, por lo general podrás pasar.

### ¿Cabe recurrir una sanción de ZBE siendo turista?
Puedes sostener que la entrada no estuviera señalizada como es debido, que viviendo fuera de España no pudieras conseguir la pegatina, o que el vehículo sancionado no fuera el tuyo por un error de identificación.

### ¿Qué localidades españolas cuentan con ZBE en 2026?
Superan las 25: Barcelona y su área metropolitana, Zaragoza, Valencia, Sevilla, Valladolid, Madrid, Bilbao y Málaga.


Antes de abonar una sanción que sospeches defectuosa, <a href=https://recurretumulta.online/#analizador>pásala por nuestro analizador gratuito de multas</a>.`,
  },
];

// ─── ARTÍCULOS SEO: ORGANISMOS DE TRÁFICO POR PAÍS ─────────────────────────
// Francia (ONISR / ANTAI), Alemania (KBA / Bußgeldstelle), Portugal (IMT / ANSR), España DGT

export const COUNTRY_AUTHORITY_POSTS: BlogPost[] = [
  // ── ESPAÑA: DGT a fondo ───────────────────────────────────────────────────
  {
    slug: "dgt-organismo-trafico-espana-como-funciona",
    locale: "es",
    title: "DGT en España: funciones, trámites y recursos",
    excerpt:
      "Qué es la DGT, qué sanciones gestiona y cuáles no, sus 50 jefaturas, los plazos para recurrir y cómo usar la sede electrónica y miDGT.",
    category: "Guías Prácticas",
    date: "2026-09-10",
    readTime: 8,
    keywords: [
      "DGT organismo tráfico España",
      "Dirección General de Tráfico multas",
      "recurrir multa DGT 2026",
      "sede electronica DGT",
      "DGT jefatura provincial trafico",
      "multa DGT plazo alegaciones",
      "DGT notificaciones electronicas",
      "DGT carnet puntos España",
      "jefatura trafico provincial contacto",
      "DGT recurso reposicion plazo",
    ],
    content: `Si conduces en España, tarde o temprano te cruzarás con estas siglas. La Dirección General de Tráfico depende del Ministerio del Interior y se ocupa de ordenar el tráfico y de velar por la seguridad en las carreteras del país. Su oficina central se encuentra en Madrid, y en cada provincia trabaja a través de su Jefatura Provincial de Tráfico.

Entre sus cometidos están expedir y renovar permisos de conducir, inscribir vehículos cuando se matriculan o cambian de titular, administrar el saldo de puntos —todo conductor parte de 12—, instruir expedientes por infracciones y vigilar los radares fijos cuyas denuncias luego tramita.

## Qué sanciones gestiona y cuáles quedan fuera

No toda sanción que recibes en España la firma Tráfico. La DGT se queda con las infracciones cometidas en carreteras nacionales y autonómicas y con las que captan sus propios radares; el resto pertenece a otros organismos, como resume la tabla.

| Organismo | Tipo de multa |
|---|---|
| Ayuntamientos | Aparcamiento, vías urbanas, ORA/zona azul |
| Policía Local | Infracciones en vías urbanas |
| Guardia Civil | Algunas denuncias en carretera (delegadas en DGT) |
| Comunidades Autónomas | Cataluña, Euskadi y Galicia tienen policía de tráfico propia (Mossos, Ertzaintza, Guardia Civil Galicia) |

Una pista sencilla: cuando el remitente es una Jefatura Provincial de Tráfico, quien está detrás del expediente es la DGT.

## Una jefatura por provincia

El mapa se organiza con 50 jefaturas provinciales, una en cada provincia, más una delegación que cubre Ceuta y Melilla. Cada jefatura resuelve los recursos de las sanciones impuestas dentro de su territorio. En 2026, las que mueven más expedientes son las de Madrid, Barcelona, Valencia, Sevilla y Málaga.

## Los plazos que no puedes dejar pasar

El calendario manda tanto como el fondo del asunto. Desde que te notifican la denuncia empieza a correr el tiempo, y cada fase tiene su propio margen, como recoge la tabla.

| Momento | Plazo | Qué tienes que hacer |
|---|---|---|
| Notificación de la denuncia | Día 0 | Abre el plazo |
| Alegaciones / Recurso de reposición | **20 días naturales** | Presentar escrito |
| Pronto pago (50% descuento) | 20 días naturales | Pagar y perder el derecho a recurrir |
| Resolución de la DGT | **Hasta 1 año** | La DGT tiene hasta 1 año para resolver |
| Recurso contencioso-administrativo | **2 meses** desde la resolución | Solo si la DGT desestima |

<img src=/media/analizar-multa-ia-guia-legal.webp alt=Analizar una multa con IA antes de decidir si recurrirla>

## La sede electrónica: trámites sin ir a la oficina

La web sede.dgt.gob.es concentra buena parte de la gestión: desde allí se consultan las denuncias que tienes pendientes, se presentan alegaciones y recursos por internet con Cl@ve o DNIe, se abonan sanciones con la rebaja del 50% y se revisa cuántos puntos te quedan. Incluso sin certificado puedes entrar con el número de expediente y tu NIF para ver en qué punto está una denuncia.

## Siete fallos formales que pueden tumbar la sanción

Hay siete defectos de forma que aparecen una y otra vez: que no figure el número TIP del agente, lo que dejaría la denuncia sin validez; que falte la hora exacta, un dato esencial del boletín; que el radar carezca de verificación metrológica, lo que invalida por completo la prueba; que la señalización previa al radar móvil sea insuficiente —debe avisarse a 150 m—; que la notificación llegue con un plazo o una dirección equivocados; que la matrícula tenga algún dígito erróneo; y que la infracción se haya tipificado con un artículo de la LSV que no corresponde.

## Recurrir paso a paso, sin pagar antes

Si decides recurrir, el orden importa: primero, no abones la sanción, porque pagar equivale a aceptarla; después, revisa el boletín punto por punto —el análisis gratuito de RecurreTuMulta.online te ayuda a detectar los fallos—; con esos argumentos, redacta el recurso de reposición; preséntalo en la jefatura provincial que corresponda o en la sede electrónica; y luego espera: la Administración dispone de hasta un año para resolver, y si calla, el silencio se entiende desestimatorio.

Un recurso con vicios acreditados y bien argumentado tiene muchas más posibilidades de acabar en anulación o en una rebaja de la sanción que uno genérico.

| Fase | Plazo | Dónde se presenta |
|---|---|---|
| Alegaciones | 20 días naturales desde la notificación | Jefatura Provincial o Sede Electrónica |
| Recurso de reposición | 20 días naturales | Misma Jefatura que sancionó |
| Recurso contencioso-administrativo | 2 meses desde la resolución | Juzgado de lo contencioso |

No apures los plazos: presenta el recurso cuanto antes y guarda el justificante. ¿No sabes por dónde empezar? <a href=https://recurretumulta.online/#analizador>Analiza tu multa gratis con nuestra IA</a> y recibe los argumentos más sólidos para tu caso.

<img src=/media/dgt-reforma-agentes-cuerpo.webp alt=Agentes de tráfico de la DGT en un control en carretera>

## Cataluña, Euskadi y Navarra van por otro lado

En Cataluña, Euskadi y Navarra el esquema cambia. En Cataluña, los Mossos d'Esquadra llevan la policía de tráfico y las denuncias de autopistas y calles catalanas se canalizan por el Servei Català de Trànsit, no por la DGT. En Euskadi manda la Ertzaintza y el trámite pasa por el Departamento de Seguridad del Gobierno Vasco. En Navarra, la Policía Foral se ocupa de las vías navarras. En los tres casos, el recurso hay que dirigirlo al organismo autonómico, no a Tráfico.

## Sanción de la DGT frente a sanción municipal

La diferencia práctica entre una sanción y otra se ve de un vistazo en la tabla: cambia quién la impone, dónde se comete, ante quién se recurre y con qué margen.

| Característica | Multa DGT | Multa municipal |
|---|---|---|
| Organismo | Jefatura Provincial de Tráfico | Ayuntamiento |
| Vía donde se impone | Carretera / vía interurbana | Vía urbana |
| Recurso ante | Jefe Provincial de Tráfico | Alcalde / Tribunal económico-administrativo |
| Plazo recurso | 20 días naturales | 30 días hábiles (en muchos ayuntamientos) |
| Pronto pago | 50% descuento | 50% descuento (en la mayoría) |

Antes de pagar, comprueba gratis qué organismo firmó tu sanción y qué argumentos tienes según su tipo.

## DGT 3.0 y miDGT: la parte digital

Queda la parte digital, que es la que más confusión genera. DGT 3.0 no es una aplicación: es la plataforma en la nube que reúne al instante datos procedentes de balizas V16 conectadas, de vehículos y de aplicaciones de navegación para gestionar incidentes y avisar a quienes conducen. Las balizas V16 conectadas, que ya sustituyen a los triángulos, mandan su posición solas en cuanto se activan, algo obligatorio desde el 1 de enero de 2026. La aplicación, en cambio, es miDGT: la app oficial donde llevas el permiso de conducir y el de circulación en el móvil con validez legal, miras tus puntos, recibes avisos de sanciones y notificaciones electrónicas, y pagas y consultas expedientes.

| Herramienta | Qué es | Para qué te sirve |
|---|---|---|
| DGT 3.0 | Plataforma de datos en tiempo real | Recibe tu posición si activas la baliza V16 |
| miDGT | App oficial del conductor | Carnet digital, puntos, avisos de multas |
| Sede Electrónica | Web de trámites | Recursos, alegaciones, pagos |

Esto afecta directamente a los recursos: el aviso de una sanción te puede entrar por miDGT o como notificación electrónica en la sede, y el margen de 20 días naturales para alegar corre desde esa notificación. Tener la aplicación instalada es, en la práctica, la forma de no perder un plazo por no haberte enterado.

## También te puede interesar

- <a href=/blog/como-recurrir-multa-dgt-sin-abogado/>guía para recurrir tu multa DGT sin abogado</a>
- <a href=/blog/multa-trafico-policia-local-recurrir/>recurso contra multas de la Policía Local</a>
- <a href=/blog/defectos-forma-anulan-multa-dgt/>12 vicios de forma que tumban una multa DGT</a>

## Preguntas frecuentes

### ¿Qué organismo es la DGT?

El organismo del Ministerio del Interior que ordena el tráfico y la seguridad vial en España, con una jefatura provincial en cada provincia.

### ¿Me puede multar la DGT por aparcar mal?

No. Aparcar, circular por calles urbanas y las zonas ORA son competencia municipal: esas sanciones las ponen los ayuntamientos. La DGT se queda con la carretera y con sus radares.

### ¿Qué gestiones resuelvo en la sede electrónica?

Ver tus denuncias pendientes, presentar alegaciones y recursos con Cl@ve o DNIe, pagar con el 50% de descuento y mirar tu saldo de puntos.

### ¿Para qué sirve la aplicación miDGT?

Es la app oficial de Tráfico: permiso de conducir y de circulación en el móvil, puntos y avisos de sanciones, todo en formato digital válido.

### ¿En qué consiste DGT 3.0?

En un sistema en la nube que recoge información al instante procedente de balizas V16, de coches conectados y de aplicaciones de ruta. Una baliza V16 conectada transmite dónde está nada más activarse, algo en vigor desde el primer día de 2026.

### ¿Quién multa en Cataluña y en Euskadi?

En Cataluña, el Servei Català de Trànsit con los Mossos d'Esquadra; en Euskadi, la Ertzaintza. El recurso va al organismo autonómico, no a la DGT.

Si te ha llegado una multa y crees que puede tener un defecto, <a href=https://recurretumulta.online/#analizador>pásala por nuestro analizador gratuito de multas</a> antes de pagar.
`,
  },

  // ── FRANCIA: ONISR / ANTAI / Officiers de Police Judiciaire ──────────────
  

  // ── ALEMANIA: KBA / Bußgeldstelle / Kraftfahrt-Bundesamt ─────────────────
  

  // ── PORTUGAL: IMT / ANSR / GNR ────────────────────────────────────────────
  
];

// ─── ARTÍCULOS VIRALES: PRECIO GASOLINA 2026 ─────────────────────────────────
// Creados 2026-09-12. Capturan tráfico de búsqueda sobre el precio de la
// gasolina (tendencia viral en España y Europa) y lo convierten en visitas
// cualificadas hacia la herramienta de recurso de multas.
export const GASOLINA_POSTS: BlogPost[] = [
  {
    slug: "precio-gasolina-europa-2026-comparativa-paises",
    locale: "all",
    title: "Gasolina en Europa 2026: precios por país y dónde ahorrar",
    excerpt:
      "Países Bajos roza los 2,12 € y España queda en 1,82 €: comparativa de gasolina en Europa en 2026, impuestos, fronteras y cómo gastar menos.",
    category: "Actualidad",
    date: "2026-09-12",
    readTime: 8,
    keywords: [
      "precio gasolina europa 2026",
      "gasolina mas cara europa",
      "comparativa precio combustible europa",
      "precio gasolina alemania 2026",
      "precio gasolina francia 2026",
      "precio gasolina portugal 2026",
      "impuestos gasolina europa",
      "gasolina barata europa",
      "precio diesel europa 2026",
      "combustible caro ue",
    ],
    content: `## Europa 2026: el combustible por las nubes

Llenar el depósito en Europa se ha vuelto carísimo en 2026, con precios que marcan máximos históricos. Lo que antes afectaba sobre todo a los países nórdicos ahora alcanza a toda la Unión Europea. Repasamos país por país, con cifras actualizadas de septiembre de 2026.

---

## Tabla: gasolina en Europa en septiembre de 2026

| País | Gasolina 95 | Gasóleo | Impuestos s/ precio total |
|---|---|---|---|
| Países Bajos | 2,12 € | 1,66 € | 63% |
| Finlandia | 2,06 € | 1,70 € | 65% |
| **Alemania** | **1,95 €** | **1,80 €** | **60%** |
| Bélgica | 1,93 € | 1,68 € | 62% |
| **Francia** | **1,89 €** | **1,74 €** | **61%** |
| Italia | 1,88 € | 1,72 € | 60% |
| **España** | **1,82 €** | **1,71 €** | **55%** |
| Reino Unido | 1,78 € | 1,84 € | 58% |
| **Portugal** | **1,71 €** | **1,62 €** | **52%** |
| Grecia | 1,88 € | 1,42 € | 57% |
| Polonia | 1,42 € | 1,38 € | 48% |
| Hungría | 1,35 € | 1,32 € | 45% |
| Luxemburgo | 1,64 € | 1,49 € | 47% |
| Noruega (no UE) | 2,20 € | 2,05 € | 67% |

> Nota de elaboración: cifras propias con la AIE (Agencia Internacional de la Energía) y el Boletín Semanal de Precios (Comisión Europea); corresponden a la primera semana de septiembre de 2026.

---

## Alemania, cerca de los 2 € por litro

Alemania tiene el carburante más caro entre los grandes países de la Europa continental. Los motivos principales son:

- **Energiesteuer (impuesto sobre la energía)**: 65,45 céntimos por cada litro de gasolina 95
- **IVA del 19%** que se aplica sobre el precio total
- **Fuerte dependencia del crudo ruso** antes de 2022, con los costes de diversificación que llegaron después
- **Las últimas centrales nucleares cerraron en 2023**, lo que empujó al alza el uso de gas natural.

Un **50% de los conductores alemanes** acude a estaciones de bajo coste (freie Tankstellen) o tira de aplicaciones como **Clever Tanken** o **Tank-App** para localizar el precio más bajo en tiempo real.

### Velocidad y multas en Alemania cuando el litro está caro

Con el carburante caro, muchos conductores alemanes regulan más la velocidad para gastar menos. Aun así, la **Bußgeldstelle** alemana es especialmente severa con el exceso de velocidad. Si te han multado en Alemania y resides en España:

- Solo dispones de **2 semanas** para el Einspruch (recurso)
- Las multas de más de 70 € se pueden ejecutar en España por acuerdo de la UE
- El KBA (Kraftfahrt-Bundesamt) se encarga de cruzar los datos de matrículas

---

<img src=/media/gasolina-surtidor-precio-cuerpo.webp alt=Surtidor de gasolina: los precios varían mucho entre países europeos>

## Francia: 1,89 € y al alza

Francia ha vivido en 2026 la mayor subida relativa del combustible en Europa occidental. La supresión del **ristourne carburant** dejó uno de los precios más elevados en Francia: aquella bonificación de 10-18 céntimos estuvo vigente en 2022-2023.

| Departamento | Gasolina 95 media |
|---|---|
| Île-de-France (París) | 1,95 € |
| PACA (Provence-Alpes-Côte d'Azur) | 1,91 € |
| Bretagne | 1,87 € |
| Nouvelle-Aquitaine (Burdeos) | 1,86 € |
| Normandie | 1,84 € |

Las **grandes superficies** (Leclerc, Intermarché, Carrefour) continúan siendo la opción más económica en Francia, hasta 0,12 €/litro por debajo de las petroleras. El Gobierno francés dispone de la plataforma **prix-carburants.gouv.fr** con los precios oficiales de todas las estaciones.

### Multas francesas: lo esencial

Con la gasolina cara, más conductores circulan apurados y los excesos de velocidad crecen. Las multas de radar francesas las tramita de forma automática la **ANTAI**, la Agence Nationale de Traitement Automatisé des Infractions. Si te llega una multa francesa:

- Para la **requête en exonération** (recurso) hay **45 días** de plazo
- Pagar pronto descuenta un **25%** durante los primeros 15 días
- A España llegan por EUCARIS las multas de más de 70 €

---

## Portugal, lo más barato del oeste europeo

En el oeste europeo, Portugal tiene la gasolina más económica, gracias a una imposición algo menor y a los márgenes más ajustados de las distribuidoras. El litro de **gasolina 95 pasa de 1,70 €**, un nivel que tensiona muchísimo las rentas más bajas.

### Frontera: aprovechar la diferencia

Esa diferencia (unos 0,10-0,15 €/litro) empuja a muchos conductores españoles de las zonas fronterizas a llenar el depósito en Portugal. Entre los puntos clásicos para ahorrar están Badajoz-Elvas, Ayamonte-Vila Real y Tui-Valença.

---

<img src=/media/gasolinera-autopista-cuerpo.webp alt=Estación de servicio en una autopista europea>

## Por qué el litro sale tan caro en Europa

### Impuestos: el factor que más separa

Lo que más separa el precio europeo del de EE.UU. o Arabia Saudí es la fiscalidad. En Europa los impuestos pesan entre un **45% y un 65%** del precio final, frente a solo el **16%** en EE.UU.

Esos impuestos sobre el combustible persiguen un doble objetivo en Europa:
1. **Recaudatorio**: sostener el gasto público
2. **Ambiental**: que se use menos el coche y que la transición energética tenga financiación

### CO₂ y el mercado ETS

El transporte por carretera entró en 2024 en el ETS2, el mercado europeo de emisiones de CO₂. Esto suma un coste adicional al combustible que antes no existía y que seguirá subiendo hasta 2035.

### El horizonte 2035

En 2035 llega el **veto a los coches de combustión**, ya aprobado por la UE. Las petroleras están invirtiendo menos en ampliar el refino de gasolina y gasóleo, lo que recorta la oferta y mantiene los precios altos.

---

## Ahorro por ir más despacio en autopista

| Velocidad | Consumo medio | Coste por 100 km (a 1,85 €/l) |
|---|---|---|
| 90 km/h | 5,8 l | 10,73 € |
| 110 km/h | 7,2 l | 13,32 € |
| 120 km/h | 8,3 l | 15,36 € |
| 130 km/h | 9,5 l | 17,58 € |

En un viaje de **500 km** (por ejemplo, Madrid-Málaga), la diferencia entre circular a 90 o a 130 km/h ronda los **35 €** únicamente en carburante, sin sumar el riesgo de multa.

---

## Multa de velocidad más depósito caro: el golpe al bolsillo

Una multa de **300 €** por circular a 118 km/h donde se permite 100 km/h equivale a:
- **163 litros** al precio actual
- **3.270 km** circulando a 90 km/h
- También más de dos meses de repostajes para un conductor medio

Si la multa es grave y además conlleva **puntos**, el golpe puede multiplicarse con lo que cuesta el curso de recuperación de puntos.

### Analiza tu multa antes de pagar

Dentro de la UE, cualquier multa se puede impugnar por **vicios de forma**. En los radares automáticos, los más habituales son:

- Radar sin **verificación metrológica** en vigor (calibración)
- Señal previa escasa o ausente
- Fallo al identificar el vehículo o su matrícula
- Aviso fuera de plazo

**RecurreTuMulta.online** revisa multas españolas, francesas, alemanas y portuguesas. El análisis no cuesta nada y en menos de un minuto sabrás si hay motivos para anular tu multa.

---

## También te puede interesar

- <a href=/blog/gasolina-cara-como-evitar-multas-velocidad-que-cuestan-mas-que-un-deposito/>multas de velocidad más caras que un depósito</a>
- <a href=/blog/evolucion-multas-trafico-2020-2026-espana-francia-alemania-portugal-italia/>cómo han cambiado las multas europeas desde 2020</a>

Fuente oficial: <a href=https://energy.ec.europa.eu/data-and-analysis/weekly-oil-bulletin_en>Boletín semanal del petróleo de la Comisión Europea</a>.

## Dudas frecuentes sobre la gasolina en Europa

### ¿Dónde sale más barata la gasolina en Europa?
Los precios más bajos están en el Este (Bulgaria, Rumanía, Polonia) y en Luxemburgo, con tasas distintas. Dentro de Europa occidental, los más asequibles son Portugal y España.

### ¿Por qué es tan cara la gasolina en Alemania?
Sobre todo por la Energiesteuer, el impuesto sobre la energía, y por no producir crudo propio. A eso se suman el IVA del 19% y la transición energética.

### ¿Cuándo bajará la gasolina en Europa?
Nadie espera un descenso importante antes de 2027: el crudo sigue alto, la fiscalidad ambiental no deja de crecer y se invierte menos en refino, así que la tendencia sigue al alza.

### ¿Compensa el eléctrico o la gasolina con estos precios?
Quien supere los 15.000 km al año ya rentabiliza el eléctrico en gran parte del oeste europeo, incluso con la electricidad a los precios actuales.

### ¿Qué parte del precio son impuestos en España?
La tabla de esta guía da un 55% para España, frente al 63-67% que soportan Países Bajos, Finlandia y Noruega.

### ¿Qué es el ETS2 y cómo encarece el combustible?
El transporte por carretera está dentro del ETS2 desde 2024, el sistema europeo que comercia con derechos de emisión, lo que encarece el combustible con un coste extra que seguirá subiendo hasta 2035.


Si te ha llegado una multa y crees que puede tener un defecto, <a href=https://recurretumulta.online/#analizador>pásala por nuestro analizador gratuito de multas</a> antes de pagar.
`,
  },

  {
    slug: "gasolina-cara-como-evitar-multas-velocidad-que-cuestan-mas-que-un-deposito",
    locale: "es",
    title: "Multas de velocidad: lo que cuestan frente a un depósito",
    excerpt:
      "Con el litro a 1,85 €, una sanción de 300 € supone 162 litros. Conduce con menos gasto, evita radares y revisa cualquier multa antes de pagarla.",
    category: "Actualidad",
    date: "2026-09-12",
    readTime: 7,
    keywords: [
      "gasolina cara multas velocidad",
      "multa velocidad autopista 2026",
      "como evitar multas trafico 2026",
      "conduccion eficiente ahorrar gasolina",
      "multa radar autopista recurrir",
      "precio gasolina multa equivalente",
      "como ahorrar combustible conduciendo",
      "multa dgt 300 euros recurrir",
      "radar movil multa recurrir 2026",
      "gasolina mas cara que multa",
    ],
    content: `## Gasolina por las nubes y radares en cada esquina: el gasto doble de 2026

El 2026 combina dos facturas para quien usa el coche en España: el litro de gasolina se mueve en torno a 1,85 € y la Dirección General de Tráfico ha reforzado la vigilancia de la velocidad con más equipos fijos, de tramo y móviles.

El efecto en el bolsillo es directo: una sanción media por velocidad puede suponer lo mismo que entre dos y tres meses de combustible. Y si la infracción resta puntos, el coste total crece todavía más.

## Lo que vale cada sanción medido en litros (precio de septiembre de 2026)

| Multa DGT | Importe | Litros de gasolina equivalentes |
|---|---|---|
| Exceso velocidad <20 km/h | 100 € | 54 litros |
| Exceso velocidad 20-40 km/h | 300 € | 162 litros |
| Exceso velocidad 40-60 km/h | 400 € | 216 litros |
| Exceso velocidad >60 km/h | 600 € | 324 litros |
| Uso del móvil al volante | 200 € | 108 litros |
| Sin cinturón | 200 € | 108 litros |
| Semáforo en rojo | 200 € | 108 litros |

> A 1,85 € el litro, abonar 300 € de multa sale como repostar tres veces el depósito de un turismo medio de 50 litros.

---

<img src=/media/gasolinera-autopista-cuerpo.webp alt=Estación de servicio en autopista al atardecer>

## Más radares en 2026 y menos margen de error

España supera en 2026 los 1.200 radares fijos homologados y cuenta con más de 500 radares de tramo en servicio. A ellos se suman los furgones de la DGT equipados con radar móvil, que recorren las vías de gran capacidad.

### Dónde se multa más en España

1. **N-II (Madrid-Barcelona)** — entre los tramos que más sancionan de Europa
2. **A-4 (Madrid-Cádiz)** — muchos radares de tramo concentrados
3. **AP-7 (Costa del Sol)** — control de velocidad media por cámaras
4. **Circunvalaciones de Madrid y Barcelona** — equipos fijos en vías urbanas con límite de 70 km/h

### El tramo vigilado: el más difícil de esquivar

Un radar de tramo calcula la velocidad media entre dos puntos distantes varios kilómetros. Frenar al divisarlo no sirve: si la media rebasa el límite, llega la sanción. Su eficacia es alta y también concentran buena parte de los recursos que prosperan, porque el sistema exige un protocolo técnico muy riguroso.

---

## Conducir gastando menos y sin sanciones

Lo positivo: las formas de ahorrar combustible también bajan la probabilidad de sanción. Anticiparse, evitar acelerones bruscos y respetar los límites forman la mezcla adecuada.

### Anticiparse al tráfico: la técnica que más ahorra

1. **Levanta el pie 200-300 metros antes** de un semáforo rojo, una curva o un radar. Con el pie levantado, el motor queda en ralentí y el gasto se reduce a cero.
2. **Deja una distancia de seguridad amplia** — ese hueco con el vehículo de delante te da margen para no frenar de golpe.
3. **Retén con el motor reduciendo marchas** en bajadas largas, en lugar de pisar el freno.

### La velocidad con menos gasto

El gasto de un turismo moderno de gasolina toca su mínimo entre 80 y 100 km/h. Pasados los 100 km/h, la resistencia del aire crece de forma exponencial y el consumo se dispara.

| Velocidad | Consumo relativo |
|---|---|
| 80 km/h | 100% (base) |
| 90 km/h | +12% |
| 100 km/h | +27% |
| 110 km/h | +45% |
| 120 km/h | +65% |
| 130 km/h | +90% |

Bajar de 120 km/h a 100 km/h recorta el consumo un 23%. En un viaje de 500 km, ese cambio supone entre 25 y 35 litros menos.

### Otros gastos ocultos

- **Climatizador al máximo** — puede elevar el gasto hasta un 15%
- **Presión baja en las ruedas** — con 0,3 bar por debajo de lo recomendado, el gasto sube un 3%
- **Bacas o cofres vacíos** — la resistencia del aire suma un 8-10% al consumo
- **Carga innecesaria** — 100 kg más suponen 0,4 litros extra cada 100 km

---

<img src=/media/gasolina-surtidor-precio-cuerpo.webp alt=Repostando gasolina: con los precios actuales, una multa de velocidad cuesta más que un depósito>

## Antes de pagar, revisa si la multa se puede recurrir

Con la gasolina por las nubes, abonar 300 € de sanción sin examinarla antes es un gasto evitable. Antes de cualquier pago, verifica si tu multa presenta defectos de forma que permitan recurrirla.

### Qué significa vicio de forma

Significa un fallo en la tramitación de la sanción que puede llevar a anularla. No se trata de un "truco legal": es aplicar bien la normativa en vigor: la LTSV y la Ley 39/2015.

Los vicios más habituales en sanciones de radar:

### 1. Radar sin verificación metrológica en vigor
Cada radar debe superar una verificación metrológica cada cierto tiempo, según su tipo. Si el equipo que te sancionó tiene la certificación caducada, la multa se puede impugnar.

### 2. Señalización previa escasa
En un radar móvil, la norma pide una señal previa visible con antelación suficiente. Que falten esas señales o estén en mal estado es un vicio habitual.

### 3. Falta el número TIP del agente
En denuncias puestas por un agente de circulación, el boletín debe recoger el número TIP (identificación) del agente. Sin ese dato, la sanción es recurrible.

### 4. Vehículo mal identificado
Un solo dígito equivocado en la matrícula puede bastar para anular la sanción.

### 5. Notificación fuera de plazo
El plazo de prescripción es de 3 meses para las leves, 6 meses para las graves y un año para las muy graves. Si la notificación llega pasado ese plazo, la sanción ha prescrito.

---

## Cómo comprobar si tu multa tiene vicios de forma

**RecurreTuMulta.online** revisa tu sanción con IA en menos de 60 segundos:

1. Sube una foto o el PDF del boletín de denuncia
2. La IA examina cada campo y busca posibles vicios
3. Te llega gratis un informe con los argumentos de nulidad detectados
4. Para presentar el recurso, te generamos el PDF completo: **4,99 €**

> Con una sanción anulada recuperas lo mismo que varios meses de combustible.

---

## También te puede interesar

- <a href=/blog/precio-gasolina-europa-2026-comparativa-paises/>precio de la gasolina en Europa en 2026</a>
- <a href=/blog/recurrir-multa-radar-velocidad/>cómo recurrir una multa de radar de velocidad</a>

Fuente oficial: <a href=https://www.idae.es>IDAE: consejos de conducción eficiente</a>.

## Preguntas frecuentes

### ¿Se puede recurrir una sanción de radar de tramo?
Sí, y con más opciones que otros: su complejidad técnica hace que los vicios de forma sean frecuentes. La verificación metrológica, la longitud exacta del tramo y la señalización son los motivos habituales de impugnación.

### ¿Qué ocurre si ni pago ni recurro la multa?
La sanción pasa a vía ejecutiva. La DGT puede ordenar el embargo de tu cuenta, de la devolución de la renta o incluso del vehículo. Siempre compensa más recurrir cuando hay argumentos; si no, pagar con el descuento del 50%.

### ¿Compensa recurrir una sanción de 100 €?
Depende de si hay argumentos. Con un vicio de forma claro, recurrir sale gratis y la relación entre coste y beneficio es excelente. Revisar tu caso en RecurreTuMulta.online no cuesta nada, así que siempre vale la pena comprobarlo.

### ¿Cuánto plazo tengo para recurrir?
Tienes 20 días naturales contados desde la notificación. Ojo: si pagas acogiéndote al 50% de descuento, renuncias a recurrir.

### ¿A qué velocidad gasta menos un coche de gasolina?
El gasto de un turismo moderno de gasolina toca su mínimo entre 80 y 100 km/h. Bajar de 120 km/h a 100 km/h recorta el consumo un 23%, como recoge la tabla anterior.

### ¿Qué sube el consumo sin que lo notes?
El climatizador al máximo (hasta un 15% más), la presión baja en las ruedas (un 3% más con 0,3 bar por debajo), la baca vacía (un 8-10% extra) y llevar 100 kg de más añade 0,4 litros por cada 100 km.


Si te ha llegado una multa y crees que puede tener un defecto, <a href=https://recurretumulta.online/#analizador>pásala por nuestro analizador gratuito de multas</a> antes de pagar.
`,
  },
];

// ─── ARTÍCULO INVESTIGACIÓN: EVOLUCIÓN MULTAS 2020-2026 ──────────────────────
// Creado 2026-09-12. Comparativa de la subida de multas de tráfico en España,
// Francia, Alemania, Portugal e Italia desde 2020 hasta 2026. Alto potencial
// viral: dato de "usura" (multas suben más que la inflación) + tablas comparativas.
export const EVOLUCION_MULTAS_POST: BlogPost[] = [
  {
    slug: "evolucion-multas-trafico-2020-2026-espana-francia-alemania-portugal-italia",
    locale: "all",
    title: "Multas europeas 2020-2026: subidas de hasta el 67%",
    excerpt:
      "De 2020 a 2026, las multas europeas subieron hasta un 67%, por encima de la inflación. Comparativa en España, Francia, Alemania, Portugal e Italia.",
    category: "Actualidad",
    date: "2026-09-12",
    readTime: 12,
    keywords: [
      "multas trafico 2026 cuanto cuestan",
      "subida multas trafico espana",
      "multas trafico aumento 2020 2026",
      "multas de trafico europa comparativa",
      "cuanto cuesta multa velocidad 2026",
      "multas trafico inflacion",
      "multas trafico alemania 2026",
      "multas trafico francia 2026",
      "multas trafico portugal 2026",
      "multas trafico italia 2026",
      "evolucion multas dgt",
      "multas trafico han subido",
    ],
    content: `## Sanciones al alza: lo que pagas hoy por la misma infracción

Entre 2020 y la actualidad, los ejecutivos del continente han ido endureciendo de manera constante el coste de infringir las normas de circulación, y en bastantes ocasiones ese endurecimiento ha dejado atrás al índice de precios. Una falta que en territorio español rondaba los 100 € al inicio de la década puede suponer ahora el doble en algún estado vecino.

Este repaso reúne, en castellano y con cifras oficiales, la trayectoria de las sanciones viales en cinco estados entre 2020 y 2026: España con la DGT, Francia con la ANTAI, Alemania con su Bußgeldkatalog, Portugal con la ANSR e Italia con el Codice della Strada.

> **El resumen, por adelantado:** durante estos seis años, las sanciones viales crecieron del 15% al 67% según el estado y la falta, frente a un **28%** acumulado de inflación en la zona euro. Hay estados donde la presión sancionadora prácticamente se duplica.

---

## España: la reforma de 2021 marcó el rumbo

### Cuánto cuesta cada falta en España, año a año

| Infracción | 2020 | 2022 | 2024 | **2026** | Subida total |
|---|---|---|---|---|---|
| Exceso velocidad <20 km/h | 100 € | 100 € | 100 € | **100 €** | 0% |
| Exceso velocidad 20-40 km/h | 300 € | 300 € | 300 € | **300 €** | 0% |
| Exceso velocidad 40-60 km/h | 300 € | 400 € | 400 € | **400 €** | +33% |
| Exceso velocidad >60 km/h | 500 € | 600 € | 600 € | **600 €** | +20% |
| Uso del móvil al volante | 200 € | 200 € | 200 € | **200 €** | 0% |
| Sin cinturón de seguridad | 200 € | 200 € | 200 € | **200 €** | 0% |
| Semáforo en rojo | 200 € | 200 € | 200 € | **200 €** | 0% |
| Conducir bajo efectos del alcohol (0,5-0,8) | 500 € | 500 € | 500 € | **500 €** | 0% |
| Conducir bajo efectos del alcohol (>0,8) | 1.000 € | 1.000 € | 1.000 € | **1.000 €** | 0% |
| Usar carril BUS sin autorización (ciudad) | 200 € | 200 € | 200 € | **200 €** | 0% |
| Aparcar en zona de carga/descarga | 100 € | 100 € | 100 € | **100 €** | 0% |
| Vehículo sin ITV en vigor | 200 € | 200 € | 200 € | **200 €** | 0% |
| No llevar triángulos/chaleco reflectante | 200 € | 200 € | 200 € | **200 €** | 0% |
| Circular sin seguro obligatorio | 600 € | 600 € | 600 € | **600 €** | 0% |

### El giro que trajo la reforma de 2021

La reforma de la Ley de Tráfico que entró en vigor en 2021 supuso un antes y un después. Sus novedades principales:

- Nació un escalón nuevo para los excesos de entre 40 y 60 km/h, catalogado como grave; antes, la escala pasaba sin parada intermedia de leve a muy grave
- Las sanciones por rebasar el límite en más de 40 km/h pasaron de **300 a 400 €**, y las de más de 60 km/h, de **500 a 600 €**
- El régimen de puntos se hizo más severo: excesos que restaban 4 puntos pasaron a restar 6
- Aparecieron faltas nuevas ligadas a los **vehículos de movilidad personal (VMP)**, como los patinetes eléctricos

### Por qué en España las cuantías parecen congeladas

Las cuantías base de la DGT **no se ligan de forma automática al IPC**. De ahí que, cuando el Ejecutivo «no toca» las sanciones, el ingreso real por este concepto caiga. Y sin embargo la caja total ha engordado, porque hay más radares y se detectan más infracciones.

> En 2020, la DGT tramitó 6,8 millones de multas. Cinco años después, los expedientes sancionadores superaron los **8,2 millones**. No subió tanto la sanción aislada como la vigilancia.

---

## Francia: subidas constantes año tras año

Ningún otro estado del continente ha elevado tanto, en euros contantes, sus sanciones entre 2020 y 2026 como Francia.

### Las sanciones francesas, año a año

| Infracción | 2020 | 2022 | 2024 | **2026** | Subida total |
|---|---|---|---|---|---|
| Exceso velocidad <20 km/h (autopista) | 68 € | 68 € | 68 € | **90 €** | +32% |
| Exceso velocidad 20-29 km/h | 135 € | 135 € | 135 € | **150 €** | +11% |
| Exceso velocidad 30-39 km/h | 135 € | 135 € | 180 € | **180 €** | +33% |
| Exceso velocidad 40-49 km/h | 375 € | 375 € | 375 € | **450 €** | +20% |
| Exceso velocidad 50+ km/h | 1.500 € | 1.500 € | 1.500 € | **1.500 €** | 0% |
| Semáforo en rojo | 135 € | 135 € | 135 € | **135 €** | 0% |
| Uso del teléfono al volante | 135 € | 135 € | 135 € | **150 €** | +11% |
| Sin cinturón | 135 € | 135 € | 135 € | **135 €** | 0% |
| Conducir borracho (>0,5 g/l) | 135 € | 135 € | 135 € | **135 €** | 0% |
| Conducir borracho (>0,8 g/l) | 750 € | 750 € | 750 € | **750 €** | 0% |
| Sin seguro | 500 € | 500 € | 500 € | **750 €** | +50% |
| Aparcar en carril bus/bici | 135 € | 135 € | 135 € | **135 €** | 0% |

### Qué trajo el baremo francés de 2024-2026

En Francia, los importes fijos —las «forfaitaires»— se revisan mediante decreto ministerial. Desde 2024, los cambios principales han sido estos:

- La falta leve de velocidad en autopista pasó de 68 € a **90 €** (+32%)
- Circular sin seguro saltó de 500 € a **750 €** en 2026 (+50%)
- Llegaron sanciones propias para la **ZFE (Zone à Faibles Émissions)**: de 68 € a 450 € según el vehículo

### El radar francés, una fuente de ingresos

Francia canaliza sus cinemómetros automáticos a través de la **ANTAI** y mantiene en funcionamiento más de **4.200 radares**. En 2025, esos aparatos dejaron más de **1.000 millones de euros**. Parte del presupuesto de conservación de carreteras se nutre de estas sanciones, y eso genera un estímulo permanente para seguir colocando aparatos.

---

## Alemania: la reforma de 2021, la más profunda del continente

En noviembre de 2021, Alemania acometió la mayor revisión de su catálogo de sanciones desde 1990.

### Las sanciones alemanas, año a año

| Infracción | 2020 | 2021 (reforma) | 2024 | **2026** | Subida total |
|---|---|---|---|---|---|
| Exceso velocidad <10 km/h (ciudad) | 15 € | 30 € | 30 € | **30 €** | +100% |
| Exceso velocidad 10-15 km/h (ciudad) | 25 € | 50 € | 50 € | **50 €** | +100% |
| Exceso velocidad 16-20 km/h (ciudad) | 35 € | 70 € | 70 € | **70 €** | +100% |
| Exceso velocidad 21-25 km/h (ciudad) | 80 € | 115 € | 115 € | **115 €** | +44% |
| Exceso velocidad 26-30 km/h (ciudad) | 100 € | 180 € | 180 € | **180 €** | +80% |
| Exceso velocidad 31-40 km/h (ciudad) | 160 € | 260 € | 260 € | **260 €** | +63% |
| Exceso velocidad 41-50 km/h (ciudad) | 200 € | 400 € | 400 € | **400 €** | +100% |
| Exceso velocidad >70 km/h (ciudad) | 600 € | 800 € | 800 € | **800 €** | +33% |
| Exceso velocidad <10 km/h (autopista) | 10 € | 20 € | 20 € | **20 €** | +100% |
| Exceso velocidad 21-30 km/h (autopista) | 70 € | 100 € | 100 € | **100 €** | +43% |
| Exceso velocidad 41-50 km/h (autopista) | 120 € | 200 € | 200 € | **200 €** | +67% |
| Uso del móvil al volante | 60 € | 100 € | 100 € | **100 €** | +67% |
| Sin cinturón | 30 € | 30 € | 30 € | **30 €** | 0% |
| Conducir bajo efectos del alcohol (>0,5‰) | 500 € | 500 € | 500 € | **500 €** | 0% |

### En qué consistió la reforma alemana de 2021

La cuarta modificación del Bußgeldkatalog, vigente a partir del 9 de noviembre de 2021 y considerada la más dura de las últimas décadas:

- En ciudad, las sanciones por velocidad crecieron al doble en la mayoría de tramos
- Se estableció la **retirada automática del permiso** (1 mes) cuando se superan los 26 km/h en ciudad
- Nacieron **sanciones nuevas** para coches mal estacionados que taponan carriles bici: hasta 110 €
- El sistema de puntos de Flensburg se volvió más estricto

> Circular a 55 km/h por una vía urbana con límite de 30 km/h: en 2020 costaba **160 €**; en 2026, **260 €** y, además, supone perder el permiso durante 1 mes.

---

<img src=/media/cuanto-tarda-en-llegar-una-multa-de-radar.webp alt=Multa de radar: los plazos de notificación varían por país>

## Portugal: la reforma discreta de 2023

Portugal retocó su código de circulación en 2023, con ajustes más suaves que los alemanes pero igualmente relevantes.

### Las sanciones portuguesas, año a año

| Infracción | 2020 | 2023 (reforma) | **2026** | Subida total |
|---|---|---|---|---|
| Exceso velocidad <20 km/h | 120-600 € | 120-600 € | **120-600 €** | 0% |
| Exceso velocidad 20-40 km/h | 300-1.500 € | 300-1.500 € | **300-1.500 €** | 0% |
| Exceso velocidad >40 km/h | 500-2.500 € | 500-2.500 € | **500-2.500 €** | 0% |
| Uso del teléfono al volante | 120-600 € | 250-1.250 € | **250-1.250 €** | +108% |
| Sin cinturón | 120-600 € | 250-1.250 € | **250-1.250 €** | +108% |
| Semáforo en rojo | 250-1.250 € | 250-1.250 € | **250-1.250 €** | 0% |
| Conducir con alcohol (>0,5 g/l) | 250-1.250 € | 250-1.250 € | **250-1.250 €** | 0% |
| Conducir con alcohol (>1,2 g/l) | 500-2.500 € | 1.000-5.000 € | **1.000-5.000 €** | +100% |
| Sin seguro obligatorio | 500-2.500 € | 500-2.500 € | **500-2.500 €** | 0% |

### Un sistema de horquillas, no de importes cerrados

El modelo luso no fija una cantidad única: cada sanción se mueve entre un **mínimo y un máximo**, y quien instruye el expediente la gradúa según las circunstancias. En la práctica, quien no tiene antecedentes suele quedarse cerca del mínimo.

La subida grande de 2023 afectó al **teléfono al volante y al cinturón**: el mínimo subió de 120 a 250 € (+108%).

> Portugal presume del control de velocidad media más amplio del continente: más de 35 corredores, sobre todo en el Eixo Norte-Sul y en las autopistas hacia el Algarve.

---

## Italia: la reforma de noviembre de 2024, la más contestada

En noviembre de 2024, Italia dio luz verde al **Nuovo Codice della Strada**, vigente a partir del 14 de diciembre de 2024 y considerado la reforma más severa del continente desde la alemana de 2021.

### Las sanciones italianas, año a año

| Infracción | 2020 | 2022 | 2024 (antes NCS) | **2026 (Nuovo CdS)** | Subida total |
|---|---|---|---|---|---|
| Exceso velocidad <10 km/h | 41-168 € | 41-168 € | 41-168 € | **173-694 €** | **+313%** |
| Exceso velocidad 10-40 km/h | 173-694 € | 173-694 € | 173-694 € | **220-880 €** | +27% |
| Exceso velocidad >40 km/h | 543-2.170 € | 543-2.170 € | 543-2.170 € | **845-3.382 €** | +56% |
| Uso del teléfono al volante | 161-647 € | 250-1.000 € | 422-1.697 € | **422-1.697 €** | **+162%** desde 2020 |
| Sin cinturón | 83-332 € | 83-332 € | 83-332 € | **83-332 €** | 0% |
| Conducir borracho (>0,5 g/l) | 543-2.170 € | 543-2.170 € | 543-2.170 € | **573-2.170 €** | +5% |
| Conducir borracho (>0,8 g/l) | 800-3.200 € | 800-3.200 € | 800-3.200 € | **1.500-6.000 €** | **+88%** |
| Conducción temeraria | 430-1.731 € | 430-1.731 € | 430-1.731 € | **845-3.382 €** | +96% |
| Uso de drogues al volante | 1.500-6.000 € | 1.500-6.000 € | 1.500-6.000 € | **2.000-8.000 €** | +33% |

### Las medidas italianas que más debate generaron

El nuevo código italiano ha levantado una polémica enorme:

1. **Tres positivos en alcohol o drogas en 10 años**: pérdida definitiva del permiso, sin posibilidad de renovarlo durante 3 años
2. **Teléfono al volante en reincidencia**: suspensión del permiso de 7 días a 2 meses ya desde la primera reincidencia
3. **Sanción novedosa para conductores extranjeros**: quien no reside en Italia debe abonar la multa en el momento o dejar el coche inmovilizado
4. **Velocidad por debajo de 10 km/h**: la falta «mínima» triplicó su mínimo, hasta 173 € (desde 41 €)

> Italia es el único estado del continente que distingue según la **hora del día**: algunas sanciones nocturnas (de diez de la noche a siete de la mañana) llevan un recargo del 30%.

---

## El cuadro general: ¿quién endurece más?

### Subida acumulada 2020-2026 por país y falta clave

| Infracción | España | Francia | Alemania | Portugal | Italia |
|---|---|---|---|---|---|
| Velocidad leve (ciudad) | **+0%** | **+32%** | **+100%** | **0%** | **+313%** |
| Velocidad moderada (ciudad) | **+33%** | **+33%** | **+63%** | **0%** | **+56%** |
| Uso del móvil al volante | **0%** | **+11%** | **+67%** | **+108%** | **+162%** |
| Sin cinturón | **0%** | **0%** | **0%** | **+108%** | **0%** |
| Sin seguro | **0%** | **+50%** | **0%** | **0%** | **0%** |
| Alcohol (nivel alto) | **0%** | **0%** | **0%** | **+100%** | **+88%** |

### ¿Qué estado castiga con más dureza en 2026?

Tomando como referencia un **exceso de 30 km/h en ciudad**:

| País | Multa en 2026 | Equivale a |
|---|---|---|
| Italia | 220-880 € | 119-476 litros de gasolina |
| Alemania | 180 € + pérdida carnet 1 mes | 97 litros + coste desplazamiento |
| Francia | 180 € | 97 litros de gasolina |
| España | 300 € | 162 litros de gasolina |
| Portugal | 300-1.500 € | 162-811 litros de gasolina |

> España presenta las cuantías más elevadas en el tramo medio, pero con un abanico mucho más estrecho: la horquilla portuguesa puede salir todavía más cara para quien reincide.

---

<img src=/media/carta-multa-extranjero-cuerpo.webp alt=Notificación de multa de tráfico de otro país europeo>

## ¿Las multas crecen más que los precios? Los números

### Inflación acumulada en Europa 2020-2026

| País | Inflación acumulada 2020-2026 |
|---|---|
| España | +29,4% |
| Francia | +22,8% |
| Alemania | +31,2% |
| Portugal | +25,1% |
| Italia | +24,3% |
| Zona euro media | +28,0% |

### Sanciones frente a inflación: el dictamen

| País | Subida media de multas | Inflación acumulada | ¿Multas > Inflación? |
|---|---|---|---|
| España | **~10%** (solo en velocidad media-alta) | 29,4% | No (en términos reales, bajaron) |
| Francia | **~20%** (promedio ponderado) | 22,8% | Aproximadamente igual |
| Alemania | **~65%** (promedio reforma 2021) | 31,2% | **Sí, dobla la inflación** |
| Portugal | **~25%** (en infracciones clave) | 25,1% | Aproximadamente igual |
| Italia | **~60%** (promedio NCS 2024) | 24,3% | **Sí, más que dobla la inflación** |

**Conclusión:** España es el único gran estado del continente donde las sanciones han crecido **por debajo** del IPC. Alemania e Italia son los estados donde las sanciones han escalado con más agresividad, con alzas que superan el doble del IPC.

---

## Los motivos que no se anuncian detrás del encarecimiento

### 1. Dinero público: la sanción como impuesto disimulado

Los ejecutivos del continente ingresan todos los años miles de millones de euros en sanciones viales. Es un ingreso estable y políticamente «aceptable», porque recae sobre quien «ha hecho algo mal». En 2025:

- España: alrededor de 720 millones € en sanciones viales
- Francia: cerca de 1.100 millones € solo con los radares automáticos
- Alemania: unos 800 millones € según estudios del ADAC
- Italia: en torno a 1.600 millones €, récord tras su reforma

### 2. El efecto disuasorio: ¿de verdad funciona?

Los ejecutivos defienden los aumentos alegando disuasión. Los datos, sin embargo, son desiguales:

- Tras la reforma alemana de 2021, los fallecidos en carretera bajaron un **8%** durante 2022
- En Italia, los fallecidos en carretera no se movieron, pero las sanciones se dispararon
- En España, la siniestralidad continúa en mínimos históricos pese a que las sanciones no subieron

### 3. La trampa de los cinemómetros automáticos

Los radares automáticos no conllevan coste de «factor humano»: trabajan 24 h, 365 días. Cada infracción que detectan es ingreso casi limpio, descontado el mantenimiento. Eso genera un incentivo perverso para:

- Colocar radares en puntos con límite fijado pero sin siniestralidad registrada
- Rebajar los límites en vías seguras para elevar las infracciones detectadas
- Dejar los límites sin revisar cuando las vías mejoran

### 4. La presión de las aseguradoras

Las compañías de seguros empujan para que las sanciones ligadas a conductas de riesgo (teléfono, alcohol, velocidad) sean más elevadas, porque van asociadas a mayor siniestralidad y a indemnizaciones más altas. En Francia y Portugal, los lobbies del sector financiaron estudios que avalaron las subidas de 2023-2024.

---

## Cómo defenderte: la sanción cara también admite recurso

Con las sanciones más elevadas que nunca en términos absolutos, revisar si presentan **vicios de forma** antes de pagar cobra la máxima importancia.

### ¿Compensa recurrir con sanciones de hasta 800 €?

Rotundamente sí. La relación entre coste y beneficio del recurso mejora conforme crece la sanción:

| Multa | Coste del recurso (RecurreTuMulta.online) | Ahorro si se anula | ROI |
|---|---|---|---|
| 100 € | 4,99 € (PDF) o 0 € (análisis) | 100 € | 2.000% |
| 300 € | 4,99 € | 300 € | 6.012% |
| 600 € | 4,99 € | 600 € | 12.024% |
| 800 € | 4,99 € | 800 € | 16.032% |

### Los defectos de forma más habituales en 2026

Siguen siendo los de 2020, pero pesan más ahora, porque las sanciones son más caras:

1. **Falta de verificación metrológica vigente del radar** — el motivo más empleado y con más éxito
2. **Señalización insuficiente** — sobre todo en zonas de 30 km/h de implantación reciente
3. **Agente sin identificar** — número TIP ausente o ilegible
4. **Plazo de notificación incumplido** — los ayuntamientos son los que más tardan
5. **Matrícula o vehículo mal identificados** — un solo dígito equivocado en la matrícula puede dejar sin efecto la sanción

> **RecurreTuMulta.online** revisa sanciones de España, Francia, Alemania y Portugal. El examen de los vicios de forma es gratuito. Solo se pagan 4,99 € cuando quieres el PDF del recurso ya redactado.

---

## También te puede interesar

- <a href=/blog/precio-gasolina-europa-2026-comparativa-paises/>precio de la gasolina en Europa en 2026</a>
- <a href=/blog/gasolina-cara-como-evitar-multas-velocidad-que-cuestan-mas-que-un-deposito/>multas de velocidad que cuestan más que un depósito</a>
- <a href=/blog/recurrir-multa-radar-velocidad/>cómo recurrir una multa de radar de velocidad</a>

Fuente oficial: <a href=https://www.dgt.es>DGT (datos oficiales)</a>.

## Preguntas frecuentes sobre cómo han cambiado las sanciones en Europa

### ¿Seguirán subiendo las sanciones en España?

El Ministerio del Interior estudia una revisión del baremo para 2027, con posibles alzas del 15-20% en las faltas de velocidad y alcohol. Todavía no hay una fecha oficial confirmada.

### ¿Dónde son más altas las sanciones europeas?

En la práctica, **Suiza** (fuera de la UE) aplica las sanciones más elevadas, con castigos por velocidad que pueden alcanzar varios miles de euros. Dentro de la UE, **Finlandia** calcula la sanción en proporción al salario (el célebre caso del millonario sancionado con 100.000 € por circular a 80 km/h). Mirando solo las cantidades fijas, Italia y Alemania son los más severos en ciudad.

### ¿Se puede recurrir desde España una sanción de otro país?

Sí. Si te llega una sanción de Francia, Alemania o Portugal residiendo en España, puedes recurrirla siguiendo el procedimiento de cada estado. Los plazos son breves: en Francia, 45 días; en Alemania, 2 semanas; en Portugal, 20 días útiles. **RecurreTuMulta.online** te acompaña con sanciones de todos estos estados.

### ¿En autopista se paga más que en ciudad?

Depende del estado. En Alemania, circular por autopista sale más barato que hacerlo en ciudad ante el mismo exceso, ya que la referencia de velocidad es mayor. En España, la cuantía es la misma con independencia del tipo de vía. En Francia y en Italia, la clase de vía sí cambia la categoría de la falta.

### ¿Qué ocurre si una sanción extranjera llega a España?

Las sanciones comunitarias por encima de **70 €** se pueden ejecutar en España a través del mecanismo de asistencia mutua entre administraciones, previsto en la Directiva 2015/413/UE y en sus transposiciones. La DGT puede cobrarlas mediante la Agencia Tributaria. Por debajo de esa cantidad, ejecutarlas es posible en teoría, pero poco frecuente en la práctica.

Si te ha llegado una sanción y sospechas que puede tener un defecto, <a href=https://recurretumulta.online/#analizador>pásala por nuestro revisor gratuito de sanciones</a> antes de pagar.`,
  },
];

// ─── ARTÍCULOS SEO: CIUDADES CON MÁS MULTAS POR PAÍS (DE / PT) ─────────────
// Creados 2026-09-13. SEO programático sutil orientado a tráfico orgánico
// alemán y portugués: ciudades/municipios con mayores tasas de multas,
// combinando keywords de cola corta (alto volumen) y cola larga (alta intención).
export const CIUDADES_MULTAS_POSTS: BlogPost[] = [
  // ── ALEMANIA: Ciudades con más multas de tráfico ────────────────────────
  

  // ── PORTUGAL: Municípios com mais multas de trânsito ────────────────────
  
];

// Nota 05/10/2026: la agregación de todos los posts se eliminó (rendimiento).
// Cada página de blog carga su módulo vía BLOG_POST_LOADERS (data-loaders.generated.ts).
// Los posts literales de este fichero siguen disponibles en BLOG_POSTS_INLINE.

