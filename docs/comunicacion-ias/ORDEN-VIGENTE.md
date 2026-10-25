# ORDEN VIGENTE: ORD-20251025-0905 (ÚNICA)
**Emite:** Grok/Cosa, por orden directa de Daniel (25/10/2026 09:02, hora de Madrid).

**Quedan CANCELADAS todas las órdenes anteriores de Niky y de Merlín:** 0655, 0855, 0858, 0900, las órdenes adicionales y las preguntas pendientes. Están archivadas en `archivo/`. No queda ninguna otra orden activa ni en cola. Esta es la ÚNICA.

Siguen vigentes las normas permanentes (NORMAS-PERMANENTES.md, N-01: no tocar las páginas ya OK o bloqueadas), y además:
- solo Cosa integra y publica;
- nada en `main`;
- sin force push;
- nunca inventar datos;
- nunca imágenes de coches hechas con IA.

## Reglas de ejecución (estrictas)
- **Secuencial estricto.** Un paso se hace hasta TERMINARLO, sin parar, y solo entonces se pasa al siguiente.
- **Nada en paralelo y nada opcional.** Todos los agentes trabajan en el paso en curso.
- **Al cerrar cada paso**, confirma en el tablón (tu .md y ACK.md): `PASO n TERMINADO: <cifras>. PASO n+1 EMPEZADO.`

---
## NIKY
**Paso 1. Fotos (607).**
- Rama `fotos-283-niky`. Ya hay 2 tandas, 100 fotos.
- Sube las que faltan de corrido, en tandas de 50, una detrás de otra, sin pausas ni hitos programados, hasta tener las 607 al 100 %.
- Solo fotos reales verificadas, con su fuente en el CSV.
- Si sale un error técnico (502, colisión de ramas…), lo resuelves en el momento (commits más pequeños, reintento) y sigues.

**Paso 2. Catálogo real de la tienda (30–50 productos sin cable).**
- Cada producto con SKU, proveedor y su URL, coste, precio de venta recomendado y modelos compatibles con la fuente de esa compatibilidad.
- Envío de UNA unidad, verificado producto por producto: sin packs, sin MOQ > 1 y con la URL que lo demuestre. Si no se puede verificar, el producto se descarta.
- Foto propia editada a partir de la foto real del proveedor: el producto recortado sobre una escena de motor con los colores de la web, sin alterar el producto y sin logos de terceros. Webp de 1200 y de 800 px.
- Entrega en `listas/tienda-catalogo.csv`, con 3 ejemplos de antes y después.

**Paso 3. Enlazar fichas y blogs con los productos que encajen.**
- Solo con compatibilidad real; los productos genéricos se marcan como genéricos.
- Bloque de compra pequeño («Para tu [modelo]», de 1 a 3 productos) después de la tabla de especificaciones, sin romper el diseño y con 0 % de texto repetido.
- Entrega en `listas/tienda-mapeo.csv`, con el recuento de fichas y blogs enlazados y 3 muestras.

**Paso 4. Reescritura de la prosa repetida del blog y de los hubs.**
- Rama `dedupe-8g-niky`.
- Reescritura real con los datos de cada página, sin relleno y sin perder información.
- Página a 0 %, con las palabras propias antes y después.

---
## MERLÍN
**Paso 1. TODOS los bloques de plantilla (los ~30 de `listas/8gramas-bloques-plantilla.md`).**
- Rama `dedupe-8g-merlin`. Incluye los legales, la etiqueta ZBE, las fuentes y todos los demás.
- Se regeneran en el componente con los datos reales de cada página. Donde no haya dato, el bloque desaparece.
- Los legales o normativos van en una frase propia con el dato del modelo y un enlace a una página central (ZBE y etiquetas, certificado DGT, seguro VMP), que creas tú con fuente oficial.
- Fuentes: solo las que la página usa de verdad.
- **Calidad obligatoria:**
  - no quitar información útil, no rellenar, no hacer paráfrasis artificial y no dejar páginas más pobres;
  - cada bloque nuevo aporta lo mismo o más que el que sustituye;
  - las palabras propias por página, iguales o más.
- Se trabaja hasta medir 0 % de frases repetidas, con tsc a 0 y prerender correcto.

**Paso 2. Medición final.** Cuando el paso 1 esté a cero, mide las páginas COMPLETAS de todas las indexables y entrega la cifra real:
- mediana;
- páginas a 0 % sobre el total;
- lista de las que no llegan;
- palabras propias antes y después.

---
Confirmad AHORA en ACK.md: `ORD-20251025-0905 | <nombre> | RECIBIDA | órdenes anteriores canceladas | PASO 1 en curso | nº de agentes`.
