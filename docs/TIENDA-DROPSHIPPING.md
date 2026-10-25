# Tienda con dropshipping automático (rama tienda-2510, 25/10/2026)

Estado: **circuito montado en modo prueba, SIN cobros activos.** No hay cuentas creadas ni claves en el código.
En producción el botón de compra sale como «Compra próximamente» mientras `VITE_TIENDA_CHECKOUT` no valga `1`.

## Qué hay
- `/tienda/` (noindex): misma cabecera/menú/pie. 1 producto real (recurso PDF 4,99 €, se compra desde el analizador con el pago que ya existe) y 6 gadgets «Próximamente» **sin precio ni foto** (no hay informe de catálogo con coste/PVP verificados; los precios de la maqueta eran de ejemplo y no se publican).
- `/tienda/carrito/` (noindex): carrito en localStorage y checkout (desactivado por defecto).
- Menú: «Tienda» en escritorio y móvil; icono de carrito en la cabecera de todas las páginas (componente de ~1 KB, sin dependencias nuevas).
- Embudo: barra «Tienda RecurreTuMulta» en el resultado del analizador, debajo del CTA del PDF.
- `netlify/functions/tienda-checkout.mjs`: crea una sesión de Stripe Checkout. **Rechaza cualquier clave que no sea `sk_test_`** (salvo `TIENDA_PERMITIR_LIVE=1`). Precios solo del catálogo del servidor.
- `netlify/functions/tienda-webhook.mjs`: verifica la firma de Stripe, registra el pedido en Netlify Blobs (`tienda-pedidos`), idempotente por `session.id`, calcula la comisión `precio − coste proveedor − envío − comisión pasarela`, llama a CJ Dropshipping (adaptador genérico HTTP de respaldo), 3 intentos con espera exponencial y aviso por email (Resend) si falla.
- `netlify/functions/_tienda/catalogo.mjs`: catálogo del servidor. Todos los productos `activo: false` y con datos `null`.
- Prueba local: `node scripts/test-tienda.mjs` (firma válida/ inválida, reintento, idempotencia, cálculo de margen, aviso de fallo).

## Cuentas y claves que necesita Daniel (variables de entorno en Netlify, nunca en el repo)
| Variable | Para qué |
|---|---|
| `STRIPE_SECRET_KEY` | `sk_test_…` para probar; la live solo cuando todo lo legal esté listo |
| `STRIPE_WEBHOOK_SECRET` | `whsec_…` del endpoint `https://recurretumulta.online/.netlify/functions/tienda-webhook` (evento `checkout.session.completed`) |
| `VITE_TIENDA_CHECKOUT=1` | activa el botón de pago (requiere rebuild) |
| `TIENDA_URL` | `https://recurretumulta.online` |
| `CJ_API_KEY` (+ `CJ_LOGISTICA`) | cuenta de CJ Dropshipping con saldo/tarjeta para pagar al proveedor |
| `PROVEEDOR_GENERICO_URL` / `_TOKEN` | opcional, proveedor de respaldo |
| `RESEND_API_KEY`, `TIENDA_AVISO_EMAIL`, `TIENDA_AVISO_FROM` | aviso por email de pedidos fallidos (dominio verificado en Resend) |
| `TIENDA_PASARELA_PCT` / `_FIJO` | comisión real de su cuenta Stripe (por defecto 1,5 % + 0,25 €) |
Además: `npm i @netlify/blobs` y desplegar con funciones (el método actual `deploy_api.py` solo sube estáticos; hay que añadir la subida de funciones zip o desplegar desde Git en Netlify).

## Datos que faltan por producto (activar en `catalogo.mjs` y `src/lib/tienda-catalogo.ts`)
precio de venta, coste del proveedor, envío, `vid` de CJ, foto propia o con permiso, CE/GPSR/UN38.3 (baterías), plazo de envío (≤2 semanas, visible en la ficha) y unidad de prueba comprada.

## Texto legal que falta (sin él no se activa el checkout)
- **Condiciones generales de venta**: vendedor (identidad, NIF, domicilio), precios con IVA, envío aparte y plazo, garantía legal de 3 años (RDL 1/2007), atención al cliente.
- **Derecho de desistimiento de 14 días** con formulario modelo, quién paga la devolución y a qué dirección (en dropshipping: China o un almacén en la UE).
- **Privacidad**: cesión de nombre, dirección, teléfono y email al proveedor (CJ, China = transferencia internacional fuera del EEE; requiere cláusulas contractuales tipo e informar en la política) y a Stripe; base legal (ejecución del contrato) y plazos de conservación.
- Aviso legal actualizado con la actividad de venta; GPSR: persona responsable en la UE para cada producto.

## Qué no es viable o tiene riesgo
- La comisión exacta de Stripe solo se conoce después (balance_transaction); aquí se estima con % + fijo.
- Dropshipping desde China: IVA de importación/IOSS y aduanas; sin IOSS el cliente pagaría al recibir. Hay que confirmarlo con CJ.
- Devoluciones automáticas al proveedor: no; se gestionan a mano.
- Scalapay (pasarela que pedía el plan): esta implementación es Stripe por petición de Daniel del 25/10; Scalapay no está integrado.
- No se ha creado ninguna cuenta ni activado ningún cobro.
