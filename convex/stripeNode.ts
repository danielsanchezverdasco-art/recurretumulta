"use node";

// Verificación de firma Stripe — Node.js runtime
// Esta acción interna hace la verificación criptográfica que requiere Node crypto
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

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      await ctx.runMutation(internal.paymentsDb.confirmPayment, {
        stripeSessionId: session.id,
        stripeCustomerId: (session.customer as string) ?? undefined,
      });
    }

    return { ok: true };
  },
});
