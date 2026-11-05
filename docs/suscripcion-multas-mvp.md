# Plan anual de vigilancia de multas (7,99 €/año) — rama suscripcion-multas-mvp

Sin desplegar a Netlify. Stripe solo en **modo prueba**. Nada de datos reales de Daniel.

## 1. Estado final
**Un solo plan de pago:** «Plan anual de vigilancia de multas», 7,99 €/año, suscripción con renovación automática. Se han retirado el PDF de 4,99 €, el Pack 10 (9,99 €) y el VIP vitalicio (14,99 €) de la web, del analizador y del backend (se mantienen solo los literales del esquema para no romper pagos históricos).

Qué incluye (misma redacción en web, analizador, Stripe Checkout y términos):
1. Alertas de multas nuevas a tu nombre o matrícula.
2. Análisis de cada multa antes de que te llegue, para no perder ni un día de plazo.
3. Recurso preparado con una guía paso a paso para que lo envíes tú mismo.
4. **No recurrimos en tu nombre**: lo dejamos todo listo para que tú solo tengas que enviarlo.

### Flujo
1. Analizador (`AnalizadorMulta.tsx`/`AnalizadorSancion.tsx`) → diálogo (nombre, DNI, domicilio, email, matrículas opcionales, casilla de consentimiento) → `payments.createCheckoutSinRegistro`.
2. Stripe Checkout `mode: "subscription"` con `STRIPE_PRICE_SUSCRIPCION_ANUAL` (falla con `SIN_PRECIO` si no está definido). Plantilla en `convex/lib/suscripcion.ts#buildSuscripcionSessionParams`.
3. Webhook `POST /stripe/webhook` (`convex/http.ts` → `stripeNode.ts`, verifica firma) → mutación `suscripciones.procesarEvento`:
   - `checkout.session.completed` → alta (fila en `suscriptores`, idempotente por suscripción/sesión; copia las matrículas del pago).
   - `customer.subscription.updated` → estado/periodo/cancelación al final del periodo.
   - `customer.subscription.deleted` → `cancelada` (estado terminal).
   - Protección ante eventos desordenados (`ultimoEvento`); un cambio llegado antes del alta lanza `SUSCRIPCION_NO_ENCONTRADA` → el webhook devuelve no-200 y Stripe reintenta.
4. Respaldo sin webhook: `VerificadorPago.tsx` → `verifySessionSinRegistro` (usa el mismo `procesarEvento`).

### Tabla `suscriptores` (`convex/schema.ts`)
email, stripeCustomerId, stripeSubscriptionId, estado (`activa`/`impagada`/`cancelada`/…), periodoHasta, cancelaAlFinal, matrículas, nombre/DNI/domicilio (copiados del pago), timestamps. Índices por email, suscripción y estado.

## 2. Configuración DEV (solo nombres de variables; los valores nunca van al repo)
| Variable (entorno de Convex) | Valor / origen |
|---|---|
| `STRIPE_PRICE_SUSCRIPCION_ANUAL` | `price_1UWp4lBomNciCoxskXo1IjEQ` (modo prueba, 799 EUR/año, producto `prod_VXuuSlaccuZeLg`) |
| `STRIPE_SECRET_KEY` | clave secreta **de prueba** (`sk_test_…`) |
| `STRIPE_WEBHOOK_SECRET` | secreto del endpoint de webhook **de prueba** |
| `FRONTEND_URL` | URL del front de DEV |
| `RESEND_API_KEY` | ya existente |

Eventos del endpoint: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`.
En Stripe (prueba) solo existe ese precio; no había ningún precio antiguo que archivar.

## 3b. Pruebas realizadas
Ver `docs/suscripcion-pruebas-evidencia.md` (checkout real en modo prueba con la tarjeta 4242, eventos reales reproducidos en los manejadores, cancelación; `tsc` y vitest en verde; límites honestos).

## 3. Monitor TEU (nuevo): `scripts/teu-monitor/`
- `parser.ts`: índice diario `https://www.boe.es/boe_n/dias/AAAA/MM/DD/index.php?l=N` → anuncios sancionadores de Tráfico → PDF (`not.php?id=BOE-N-…`) → filas: expediente, matrícula, DNI (como lo publica el BOE, a veces enmascarado), organismo, fecha de publicación, plazo (20 días naturales desde el día siguiente), importe. Lo que no se extrae = `"FALTA"` y se lista en `faltan`.
- Cruce con suscriptores (`mock-suscriptores.ts`, ficticios): por matrícula exacta o DNI enmascarado compatible (mín. 4 caracteres visibles).
- `monitor.ts`: comprueba el día con la API oficial `https://boe.es/datosabiertos/api/boe/sumario/AAAAMMDD` (el TEU no tiene API propia), descarga y lee PDFs con `pdftotext`. Imprime solo recuentos y coincidencias mock.
- Tests: `node --test scripts/teu-monitor/test/parser.test.ts` (sin dependencias, Node ≥ 22).
- Prueba real 30/10/2026: 213 anuncios de tráfico; 5 procesados → 629 filas; faltan matrícula 9, DNI 78, importe 35; 0 coincidencias mock.

## 4. Pendiente para salir a producción
1. Claves y precio **live**: producto/precio anual live, `STRIPE_SECRET_KEY` live, endpoint de webhook live + `STRIPE_WEBHOOK_SECRET` live.
2. Un despliegue Convex **DEV** real con clave de prueba para probar la acción `createCheckoutSinRegistro` y el webhook entregado de verdad por Stripe (no se ha podido: ver pruebas).
3. Revisión por abogado de `docs/suscripcion-textos-legales.md` y de `Terminos.tsx`/`Privacidad.tsx` (desistimiento, renovación, RGPD, casilla).
4. Portal de cliente de Stripe / cancelación autoservicio (hoy solo cancelación desde Stripe).
5. Cifrado en reposo del DNI.
6. Job de vigilancia (cron de Convex): el monitor TEU de `scripts/teu-monitor/` sigue siendo un script con datos mock; la promesa de «alertas y análisis previo» **no tiene todavía el proceso que la cumple** (solo la tabla y las matrículas).
7. Emails de la suscripción (confirmación/renovación) y email de carrito abandonado: revisar textos.
8. Decisión de Daniel sobre **/empresas** (Plan Empresas 70 €/mes · 700 €/año, y `convex/empresas.ts` 150 €/mes): se ha quitado de la tarjeta de precios de la portada, pero la página, el enlace del menú y el backend siguen. Si debe desaparecer del todo, es otro cambio.
9. Dependencia `jspdf` y el generador de PDF del recurso: revisar si el recurso se sigue enviando por email tras el alta.
