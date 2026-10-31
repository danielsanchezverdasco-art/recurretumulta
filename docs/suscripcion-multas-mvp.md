# Suscripción «Asistente de multas» (MVP) — rama suscripcion-multas-mvp

Sin desplegar. Solo datos MOCK. Nada de datos reales de Daniel.

## 1. Cómo funciona hoy (main, 16a6aea48)
- **No hay Netlify Functions**: Netlify solo sirve el estático (`netlify.toml`). Todo el backend está en **Convex** (`convex/`).
- **Analizador**: `src/pages/index/_components/AnalizadorMulta.tsx` y `AnalizadorSancion.tsx` → acciones Convex de `convex/multas.ts` / `convex/sanciones.ts` (análisis gratis, con rate limit en `multas_rate_limit.ts`).
- **Pago por PDF (4,99 €, el «5 €»)**:
  1. UI: botón «PAGAR 4,99€» → `createCheckoutSinRegistro` (pide nombre, DNI, domicilio, email).
  2. `convex/payments.ts` → Stripe Checkout `mode: "payment"`, precio `STRIPE_PRICE_PDF_UNICO` (env de Convex).
  3. `convex/paymentsDb.ts#createPendingPaymentSinRegistro` guarda el pago `pending` (`producto: "pdf_unico"`, `importe: 499`) y programa el email de carrito abandonado (`convex/emails.ts`).
  4. Webhook `POST /stripe/webhook` (`convex/http.ts`) → `convex/stripeNode.ts` verifica firma y, con `checkout.session.completed`, llama a `paymentsDb.confirmPayment`.
  5. `confirmPayment` → `pdfEmail.sendRecursoPdfEmail` genera y envía el PDF por email. Respaldo sin webhook: `VerificadorPago.tsx` + `verifySessionAndConfirm`.
  - También existen Pack 10 (9,99 €, `price_data` 999) y VIP vitalicio (14,99 €, `STRIPE_PRICE_VIP_VITALICIO`).

## 2. Lista exacta de sitios del pago de 4,99 €
| Sitio | Qué hay | Estado en esta rama |
|---|---|---|
| Stripe (dashboard) | Price `STRIPE_PRICE_PDF_UNICO` | **Crear** producto «Asistente de multas» con price recurrente anual 7,99 € y ponerlo en env `STRIPE_PRICE_SUSCRIPCION_ANUAL` (Convex) |
| `convex/payments.ts` createCheckoutSinRegistro | `mode: "payment"` + PDF_UNICO | **Cambiado** a `mode: "subscription"` + SUSCRIPCION_ANUAL |
| `convex/paymentsDb.ts` | `pdf_unico`, 499 | **Cambiado** a `suscripcion_anual`, 799 |
| `convex/schema.ts`, `emails.ts` (validadores) | union de productos | **Añadido** `suscripcion_anual` (se mantienen los antiguos por los pagos históricos) |
| `convex/emails.ts` l.41, 177, 354 | textos «4,99€», «Sin suscripción» | etiqueta nueva añadida; textos del email de abandono: PENDIENTE |
| `convex/stripeNode.ts` | solo `checkout.session.completed` | PENDIENTE: `invoice.paid`, `customer.subscription.deleted` (renovación/baja) |
| `src/locales/es/analyzer.json` l.63, 64, 74, 77, 81 | «PAGAR 4,99€», Pack 10 | PENDIENTE (copy) |
| `src/locales/es/common.json` l.20, 30, 51 | «PDF por 4,99€», Pack 10 | PENDIENTE |
| `AnalizadorMulta.tsx` l.441-1000, `AnalizadorSancion.tsx` l.229-676 | modos `pdf_unico`/`pdf_pack_10` | PENDIENTE: un solo modo suscripción, quitar Pack 10 |
| `src/pages/Index.tsx` l.421, 748 (JSON-LD `price: 4.99`), 1437 | precio | PENDIENTE (JSON-LD → 7.99, `priceSpecification` anual) |
| `index.html` l.279, 297 | FAQ prerender «4,99€» | PENDIENTE |
| `src/pages/Terminos.tsx` l.59 | «4,99 € por documento» | **Cambiado** a suscripción anual 7,99 € con renovación |
| `Comparativa.tsx` l.36, 75, 102; `comunidades/[ccaa].tsx` l.248; `blog/[slug].tsx` l.814; `empresas/page.tsx` l.305; `SobreNosotros.tsx` (FAQ y principios) | textos 4,99 € | PENDIENTE |
| `src/content/seo/titulos.csv` l.2, 89 | metas con 4,99 € | PENDIENTE |
| `Privacidad.tsx`, `Cookies.tsx` | mencionan Stripe | revisar: añadir cobro recurrente |

## 3. Monitor TEU (nuevo): `scripts/teu-monitor/`
- `parser.ts`: índice diario `https://www.boe.es/boe_n/dias/AAAA/MM/DD/index.php?l=N` → anuncios sancionadores de Tráfico → PDF (`not.php?id=BOE-N-…`) → filas: expediente, matrícula, DNI (como lo publica el BOE, a veces enmascarado), organismo, fecha de publicación, plazo (20 días naturales desde el día siguiente), importe. Lo que no se extrae = `"FALTA"` y se lista en `faltan`.
- Cruce con suscriptores (`mock-suscriptores.ts`, ficticios): por matrícula exacta o DNI enmascarado compatible (mín. 4 caracteres visibles).
- `monitor.ts`: comprueba el día con la API oficial `https://boe.es/datosabiertos/api/boe/sumario/AAAAMMDD` (el TEU no tiene API propia), descarga y lee PDFs con `pdftotext`. Imprime solo recuentos y coincidencias mock.
- Tests: `node --test scripts/teu-monitor/test/parser.test.ts` (sin dependencias, Node ≥ 22).
- Prueba real 30/10/2026: 213 anuncios de tráfico; 5 procesados → 629 filas; faltan matrícula 9, DNI 78, importe 35; 0 coincidencias mock.

## 4. Siguientes pasos
1. Stripe: producto/price anual 7,99 € y env; webhooks `invoice.paid` / `customer.subscription.deleted`; tabla `suscriptores` (email, whatsapp, matrículas, DNI cifrados, estado).
2. PDF tras el primer pago: comprobar suscripción activa por email/customer en vez de cobrar.
3. Pasar el monitor a cron de Convex (`convex/crons.ts`) con extracción PDF en JS (pdfjs) y guardar coincidencias.
4. Webhook firmado hacia Merlín (resultado + PDF → WhatsApp del cliente). Riesgo de bloqueo del número normal.
5. Fase 2: DEV como representante, probando primero con la matrícula de Daniel.
