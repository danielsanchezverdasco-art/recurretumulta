// Lógica PURA del plan anual de vigilancia de multas (sin acceso a Convex ni a la red).
// Se usa desde payments.ts (checkout) y stripeNode.ts (webhook) y se prueba con vitest.
import type Stripe from "stripe";

export const PRODUCTO_SUSCRIPCION = "suscripcion_anual" as const;
export const IMPORTE_SUSCRIPCION_CENTIMOS = 799;

export type EstadoSuscripcion = "pendiente" | "activa" | "impagada" | "cancelada";

// ── Parámetros de la sesión de Checkout (mode: subscription) ─────────────────
export function buildSuscripcionSessionParams(opts: {
  email: string;
  priceId: string;
  origin: string;
}): Stripe.Checkout.SessionCreateParams {
  const meta = { producto: PRODUCTO_SUSCRIPCION, sinRegistro: "true", email: opts.email };
  return {
    mode: "subscription",
    line_items: [{ price: opts.priceId, quantity: 1 }],
    customer_email: opts.email,
    success_url: `${opts.origin}/?pago=ok&producto=${PRODUCTO_SUSCRIPCION}&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${opts.origin}/?pago=cancelado`,
    metadata: meta,
    // El mismo metadata en la suscripción: los webhooks customer.subscription.* lo traen.
    subscription_data: { metadata: meta },
    custom_text: {
      submit: {
        message:
          "Suscripción anual de 7,99 € con renovación automática. Incluye alertas, análisis de tus multas y el recurso preparado con guía paso a paso para que lo presentes tú. No recurrimos en tu nombre. Puedes cancelar cuando quieras.",
      },
    },
    locale: "es",
    allow_promotion_codes: true,
  };
}

// ── Estado Stripe → estado interno ───────────────────────────────────────────
export function mapEstadoStripe(status: string): EstadoSuscripcion {
  switch (status) {
    case "active":
    case "trialing":
      return "activa";
    case "past_due":
    case "unpaid":
    case "paused":
      return "impagada";
    case "canceled":
    case "incomplete_expired":
      return "cancelada";
    default: // incomplete
      return "pendiente";
  }
}

export type AltaSuscripcion = {
  stripeSessionId: string;
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  email?: string;
  estado: EstadoSuscripcion;
  eventoCreated: number;
};

export type CambioSuscripcion = {
  stripeSubscriptionId: string;
  stripeCustomerId?: string;
  estado: EstadoSuscripcion;
  cancelaAlFinal: boolean;
  periodoHasta?: number; // ms epoch
  canceladaEn?: number; // ms epoch
  email?: string; // metadata de la suscripción
  eventoCreated: number;
};

const idDe = (x: string | { id: string } | null | undefined): string | undefined =>
  x == null ? undefined : typeof x === "string" ? x : x.id;

// Fin del periodo actual: desde la API «basil» está en los items; antes, en la suscripción.
export function periodoHasta(sub: Stripe.Subscription): number | undefined {
  const s = sub as unknown as {
    current_period_end?: number;
    items?: { data?: { current_period_end?: number }[] };
  };
  const secs = s.items?.data?.[0]?.current_period_end ?? s.current_period_end;
  return typeof secs === "number" ? secs * 1000 : undefined;
}

export function cambioDesdeSuscripcion(
  sub: Stripe.Subscription,
  eventoCreated: number,
): CambioSuscripcion {
  return {
    stripeSubscriptionId: sub.id,
    stripeCustomerId: idDe(sub.customer as string | { id: string }),
    estado: mapEstadoStripe(sub.status),
    cancelaAlFinal: !!sub.cancel_at_period_end,
    periodoHasta: periodoHasta(sub),
    canceladaEn: sub.canceled_at ? sub.canceled_at * 1000 : undefined,
    email: sub.metadata?.email || undefined,
    eventoCreated,
  };
}

export type AccionEvento =
  | { tipo: "alta"; alta: AltaSuscripcion }
  | { tipo: "cambio"; cambio: CambioSuscripcion }
  | null;

// Traduce un evento de Stripe a la acción que hay que aplicar en la base de datos.
// Solo los 3 eventos del plan: checkout.session.completed, customer.subscription.updated/deleted.
export function accionDesdeEvento(event: Stripe.Event): AccionEvento {
  if (event.type === "checkout.session.completed") {
    const s = event.data.object as Stripe.Checkout.Session;
    if (s.mode !== "subscription") return null;
    const email = (s.customer_details?.email ?? s.customer_email ?? s.metadata?.email ?? "")
      .toLowerCase()
      .trim();
    return {
      tipo: "alta",
      alta: {
        stripeSessionId: s.id,
        stripeCustomerId: idDe(s.customer as string | { id: string } | null),
        stripeSubscriptionId: idDe(s.subscription as string | { id: string } | null),
        email: email || undefined,
        estado: s.payment_status === "paid" || s.payment_status === "no_payment_required" ? "activa" : "pendiente",
        eventoCreated: event.created * 1000,
      },
    };
  }
  if (event.type === "customer.subscription.updated" || event.type === "customer.subscription.deleted") {
    const sub = event.data.object as Stripe.Subscription;
    const cambio = cambioDesdeSuscripcion(sub, event.created * 1000);
    if (event.type === "customer.subscription.deleted") {
      cambio.estado = "cancelada";
      cambio.canceladaEn = cambio.canceladaEn ?? event.created * 1000;
    }
    return { tipo: "cambio", cambio };
  }
  return null;
}

/** Limpia las matrículas que escribe el cliente: mayúsculas, sin espacios ni guiones, máx. 5, sin duplicados. */
export function normalizarMatriculas(entrada: string[]): string[] {
  const limpias = entrada
    .map((m) => m.toUpperCase().replace(/[\s-]/g, ""))
    .filter((m) => /^[A-Z0-9]{4,10}$/.test(m));
  return Array.from(new Set(limpias)).slice(0, 5);
}
