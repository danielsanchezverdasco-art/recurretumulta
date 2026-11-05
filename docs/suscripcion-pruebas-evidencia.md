# Pruebas del plan anual 7,99 €/año — evidencia (modo prueba de Stripe)

Sin secretos. Todo en **modo prueba**; no se usó la clave live ni el despliegue de producción de Convex.

## A. Stripe real (modo prueba, cuenta acct_1HiTSPBomNciCoxs)
- Producto `prod_VXuuSlaccuZeLg`, precio `price_1UWp4lBomNciCoxskXo1IjEQ` (799 EUR, anual). No existía ningún otro precio/producto en modo prueba (nada que archivar).
- Sesión de Checkout `cs_test_b1oJRhI7JaM7MIFV5K5xfuisUr3zfopnvkDIRjrk6clhIsFECX781hPKlr` (799 EUR, `mode: subscription`), creada con los mismos parámetros que genera `buildSuscripcionSessionParams`. Pantalla: `evidencia-suscripcion/checkout-1.png`.
- Pagada en la página alojada de Stripe con la tarjeta de prueba 4242 (navegador headless) → redirección a `?pago=ok&producto=suscripcion_anual&session_id=…` (`checkout-3-final.png`).
- Eventos reales generados: `customer.created`, `payment_intent.succeeded`, `invoice.paid`, `customer.subscription.created` (`sub_1UWpCoBomNciCoxs3E4FAzxv`), `checkout.session.completed` (`evt_1UWpCpBomNciCoxsTChChxmY`).
- Cancelación: `cancel_at_period_end=true` → `customer.subscription.updated` (`evt_1UWpD2BomNciCoxsCMoBBzLa`); después cancelación inmediata → `customer.subscription.deleted` (`evt_1UWpD7BomNciCoxsTKlZvYzI`).
- Los eventos reales (email ficticio test-suscriptor@example.com) están en `convex/fixtures/stripe-eventos-reales-test.json`.

## B. Convex (convex-test, en memoria)
- `convex/suscripciones.test.ts` (15 tests): parámetros del checkout, mapeo de estados, alta desde el evento real (fila en `suscriptores`), idempotencia, `updated` (cancela al final), `deleted` (cancelada, terminal), eventos desordenados, cambio antes del alta → reintento, normalización de matrículas y copia al alta.
- `convex/stripeWebhook.test.ts` (2 tests): POST firmado al endpoint HTTP `/stripe/webhook` con los eventos reales → fila creada; firma inválida rechazada. Se usa un secreto falso local y `vi.mock("stripe")` para la recuperación de la suscripción.

## C. Compilación y tests
- `tsc -p tsconfig.app.json`, `tsc -p convex/tsconfig.json` y `tsc -b`: sin errores.
- `npm test` (`vitest run` + `node --test scripts/teu-monitor/test/parser.test.ts`): vitest 6 ficheros / 38 tests OK; monitor TEU 5/5 OK. Se ha excluido `scripts/teu-monitor` de vitest (usa `node:test`; antes vitest lo marcaba como suite fallida).

## D. Web
Portada renderizada en local (Vite): una sola tarjeta de precio (7,99 €/año) con las cuatro frases; 0 apariciones de 4,99 / 9,99 / 14,99 / Pack / 70€ en el texto visible de la portada; sin errores de página (`home-plan.png`). Barrido de `git grep` en `src/`, `public/`, `index.html`, `convex/`: solo quedan literales del esquema (pagos históricos) y comentarios.

## E. Límites — lo que NO está probado
- La acción Convex `createCheckoutSinRegistro` **no se ejecutó contra Stripe**: no hay clave secreta de prueba ni despliegue Convex DEV en la caja (solo había una clave live restringida y una de producción, que no se usaron).
- El webhook se probó con eventos reales de Stripe **firmados localmente** e inyectados; no hay entrega real Stripe → Convex.
- El envío real de emails (Resend) no se ejercitó, solo su programación.
- La vigilancia/alertas (cron, BOE/TEU, DGT) no está implementada más allá de la tabla y las matrículas.
- Los textos legales son borrador, pendientes de abogado.
