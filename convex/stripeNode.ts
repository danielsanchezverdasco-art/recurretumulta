"use node";

// Webhook de Stripe — Node.js runtime (verificación criptográfica de la firma).
// Eventos del plan anual: checkout.session.completed, customer.subscription.updated,
// customer.subscription.deleted. La lógica de base de datos vive en
// suscripciones.procesarEvento (V8) para poder probarla sin red.
import { v } from "convex/values";
import Stripe from "stripe";
import { internalAction } from "./_generated/server";
import { internal } from "./_generated/api";

const getStripe = () =>
  new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2026-08-26.dahlia" });

export const verifyAndProcessWebhook = internalAction({
  args: {
    body: v.string(),
    signature: v.string(),
  },
  handler: async (ctx, args): Promise<{ ok: boolean; error?: string }> => {
    const stripe = getStripe();

    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(
        args.body,
        args.signature,
        process.env.STRIPE_WEBHOOK_SECRET!
      );
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      return { ok: false, error: message };
    }

    // En el alta consultamos la suscripción para guardar estado y fin de periodo reales.
    // Si la consulta falla no se pierde nada: customer.subscription.updated lo completa.
    let suscripcion: Stripe.Subscription | undefined;
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const subId = typeof session.subscription === "string" ? session.subscription : session.subscription?.id;
      if (session.mode === "subscription" && subId) {
        try {
          suscripcion = await stripe.subscriptions.retrieve(subId);
        } catch (err) {
          console.error("[stripe-webhook] no se pudo consultar la suscripción", subId, err);
        }
      }
    }

    // Si esta mutation lanza error, el webhook responde 500 y Stripe reintenta.
    await ctx.runMutation(internal.suscripciones.procesarEvento, { event, suscripcion });

    return { ok: true };
  },
});
