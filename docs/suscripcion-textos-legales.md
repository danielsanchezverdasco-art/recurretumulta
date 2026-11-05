# Textos legales del plan anual de vigilancia de multas — BORRADOR

> **PENDIENTE DE REVISIÓN POR ABOGADO.** Ninguno de estos textos está validado jurídicamente. No publicar como definitivos hasta la revisión. Los textos de la web (`Terminos.tsx`, `Privacidad.tsx`) se han adaptado solo en lo mínimo para que sean coherentes con el plan único; la redacción final debe sustituirse por la revisada.

Titular, NIF, domicilio, correo de soporte y datos de contacto: **[completar]**.

## 1. Términos y condiciones del plan anual

**1.1 Objeto.** El «Plan anual de vigilancia de multas» (en adelante, el «Plan») es el único plan de pago de RecurreTuMulta.online. El análisis de una multa con IA sigue siendo gratuito y no exige registro.

**1.2 Qué incluye.** Durante el periodo contratado:
1. Alertas de multas nuevas a nombre del suscriptor o de las matrículas que haya indicado (hasta 5).
2. Análisis de cada multa detectada antes de que llegue al suscriptor, para no perder ni un día del plazo.
3. El recurso preparado, con una guía paso a paso para que el suscriptor lo presente por sí mismo.

**1.3 Qué NO incluye.** **No recurrimos en nombre del suscriptor.** Preparamos el recurso y la guía; la presentación ante la Administración la hace siempre el propio suscriptor. No es asesoramiento jurídico ni garantiza el resultado de ningún recurso. La vigilancia depende de las fuentes públicas disponibles (p. ej. BOE/TEU) y no puede garantizar la detección de todas las notificaciones **[revisar alcance y redacción]**.

**1.4 Precio y renovación.** 7,99 € al año, IVA incluido **[confirmar tratamiento fiscal]**. Se renueva automáticamente cada año por el mismo importe salvo que el suscriptor cancele antes de la fecha de renovación. Cualquier cambio de precio se avisará con antelación razonable **[definir plazo]**.

**1.5 Cancelación.** El suscriptor puede cancelar en cualquier momento; la cancelación evita la siguiente renovación y mantiene el servicio hasta el final del periodo ya pagado. Vía de cancelación: **[pendiente: portal de cliente de Stripe o correo de soporte]**.

**1.6 Pagos.** Procesados por Stripe Payments Europe, Ltd. No almacenamos datos de tarjeta.

**1.7 Responsabilidad.** Limitada en lo permitido por la ley; el suscriptor actúa bajo su responsabilidad en la presentación de recursos y el cumplimiento de plazos **[revisar]**.

## 2. Desistimiento (consumidores)

Texto propuesto, **a validar**:

> Tienes derecho a desistir de este contrato en un plazo de 14 días naturales sin necesidad de justificación, contados desde la fecha de contratación. Para ejercerlo, escribe a [correo de soporte] indicando tu email de suscripción. Si el servicio ya se ha empezado a prestar a petición tuya durante ese plazo (p. ej., ya has recibido un recurso preparado), podremos descontar la parte proporcional ya prestada **[revisar con abogado la aplicación del art. 103 TRLGDCU y la exigencia de consentimiento expreso y reconocimiento de pérdida del desistimiento para servicios digitales]**.

La web ya contiene una política de reembolso previa (reembolso si el análisis no detecta defectos, 14 días); **debe armonizarse** con el desistimiento anterior o eliminarse **[decisión del abogado]**.

## 3. Casilla de consentimiento previa al pago

Casilla obligatoria en el diálogo de suscripción (`analyzer.json` → `dialog.consent` / `dialog.terms` / `dialog.privacyLink`). Texto actual, **a validar**: aceptación de términos y política de privacidad, y conocimiento de que es una suscripción anual con renovación automática. Falta decidir si se añade la renuncia expresa al desistimiento.

## 4. Privacidad específica del plan (RGPD) — BORRADOR

- **Responsable:** [completar].
- **Datos tratados:** email, nombre, DNI/NIE y domicilio (para preparar el recurso), matrículas a vigilar, datos de la multa que el usuario suba, identificadores de Stripe (cliente, suscripción), estado y fechas de la suscripción.
- **Finalidades y bases:** ejecución del contrato (alertas, análisis, recurso, cobro y gestión de la suscripción); obligación legal (facturación); interés legítimo (seguridad y prevención de fraude) **[revisar]**.
- **Cruce con fuentes públicas:** comparamos matrículas/DNI con anuncios públicos (BOE/TEU). Los anuncios del TEU pueden contener datos de terceros: tratar solo coincidencias del suscriptor y no conservar el resto **[revisar con abogado, minimización]**.
- **Encargados / transferencias:** Stripe, Convex, Resend, proveedor de IA (EE. UU., con garantías adecuadas) **[confirmar DPA y cláusulas]**.
- **Conservación:** mientras dure la suscripción y los plazos legales posteriores **[definir plazos]**.
- **Derechos:** acceso, rectificación, supresión, oposición, limitación, portabilidad; reclamación ante la AEPD.
- **Seguridad:** el DNI **todavía no está cifrado en reposo** en la base de datos; es un requisito pendiente antes de producción.
- **Cookies:** sin cambios por el plan; Stripe Checkout es una página de Stripe.

## 5. Pendientes legales antes de producción
1. Revisión íntegra por abogado de todo lo anterior.
2. Información precontractual y botón de compra con obligación de pago clara (art. 98 TRLGDCU) — comprobar que el texto del botón es válido.
3. Aviso previo de renovación y vía de cancelación equivalente al alta.
4. Registro de actividades de tratamiento y, si procede, EIPD por el cruce con datos del TEU.
5. Aviso legal con identificación completa del prestador.
