# PROYECTO APARTE: TIENDA en /tienda (anotado 24/10 15:18, orden de Daniel)
NO mezclar con la reescritura de texto único en curso, que tiene prioridad máxima. No empezar hasta que Cosa lo ordene. No publicar.
- Productos: aspiradoras de coche y accesorios de coche. Producto estrella: el PDF del analizador de multas.
- Acceso desde el menú superior.
- Carrito visible en todas las páginas, sin romper el diseño del blog.
- Fichas de producto con schema Product, precio y offers para los resultados enriquecidos. Solo datos reales.
- Banner al final del resultado del analizador que empuje al PDF.
- Pasarela de pago: la misma que usa ya el PDF.
## Detalles nuevos (24/10 15:18, Daniel)
- Catálogo: aspiradoras de agua, aspiradoras de batería (en España casi no se venden, es una oportunidad), aspiradoras normales de batería y todo tipo de accesorios de coche de Alibaba con compra mínima de 1 unidad, para hacer dropshipping.
- Envío de hasta 2 semanas: es aceptable, pero hay que indicarlo en la ficha de cada producto.
- Todo lo anterior se mantiene, y sigue siendo un proyecto aparte: nadie empieza hasta que esté terminado el texto único.
## Tecnología (24/10 15:22, Daniel)
- Ni WooCommerce ni Shopify. Se hace con la misma base de la web: Vite + React + Convex y el mismo prerender que genera las fichas, adaptado a fichas de producto con precio, fotos reales, schema Product y el envío cobrado aparte.
- Envío directo desde el proveedor chino a casa del cliente. Márgenes: 50-60 % en lo barato y 30-40 % en lo caro. Prioridad a lo inalámbrico. Embudo de 5 fases. Licencias revisadas por categoría.
- No se empieza hasta terminar el texto único.
- Pila (24/10 15:23): hosting en Netlify, repositorio en GitHub y pagos con Scalapay, la misma pasarela del PDF.
## FASE 2 (24/10 15:35, Daniel): productos específicos por modelo
Cuando la tienda esté lista y los productos enlazados, buscar accesorios compatibles con cada modelo concreto (por ejemplo el Seat León, BYD, Tesla o cada patinete) y meterlos en su ficha y en su post como un bloque de "Te recomendamos para este modelo", con enlaces a la tienda.
- La compatibilidad tiene que ser real y estar comprobada con el proveedor; nada inventado.
- El texto de ese bloque es único en cada página (regla del 0 %).
- No se empieza hasta terminar el texto único y la fase 1.
- Regla (24/10 15:36, Daniel): en cada ficha y post, buscar primero gadgets para esa marca y ese modelo exactos. Solo si no hay, poner genéricos (aspiradoras y otros gadgets universales).

# PLAN DE EJECUCIÓN (cuando el texto único esté terminado y publicado)
Se reparte entre Niky y Merlín con 100 agentes cada una. Cosa revisa y publica con el método seguro.
1. **Catálogo inicial (Niky):** 30-50 productos sin cable de CJdropshipping, Banggood y Chinabrands que envíen 1 unidad sin marca. Cada uno con coste, envío, precio mínimo y PVP según la regla del informe, CE, GPSR y UN38.3. Antes de la ficha se compra una unidad de prueba (Daniel).
2. **Sistema de fichas (Merlín):** la ruta /tienda y /tienda/<producto> en el mismo prerender; la cabecera idéntica más "Tienda" y el carrito; el JSON-LD Product con offers y shippingDetails; el checkout con Scalapay y el envío aparte; los textos legales (devolución en 14 días, GPSR, envío en ≤2 semanas). Partir de la maqueta /workspace/tienda-maqueta.
3. **Fichas (Niky):** texto 100 % único, materiales, resistencia y horas de batería del proveedor real, y fotos propias o con permiso.
4. **Embudo:** banner al final del analizador hacia el PDF; enlaces desde el blog y las fichas hacia la tienda.
5. **Fase 2 (ambas):** por cada marca y modelo, primero gadgets compatibles exactos y, si no hay, genéricos; un bloque único "Te recomendamos para este modelo" en su ficha y su post.
6. **Revisión de Cosa:** 0 % de texto compartido, schema válido, PageSpeed > 80, cumplimiento de AdSense y una sola publicación segura.
