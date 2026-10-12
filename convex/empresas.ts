"use node";

// Acciones Stripe para el Plan Empresas (150€/mes) — Node.js runtime obligatorio
import { v } from "convex/values";
import Stripe from "stripe";
import { action, type ActionCtx } from "./_generated/server";
import { ConvexError } from "convex/values";
import { internal } from "./_generated/api";
import { requireUser, getUserFromSession } from "./authSimple";

const getStripe = () =>
  new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2026-08-26.dahlia" });

// Features del Plan Empresas: se conceden todas mientras la suscripción esté activa
const FEATURES = [
  "feat_recursos_ilimitados",
  "feat_asistencia_prioritaria",
  "feat_panel_empresas",
];

type DbUser = {
  _id: any;
  name?: string;
  email?: string;
  stripeCustomerId?: string;
} | null;

async function getOrCreateCustomer(
  ctx: ActionCtx,
  stripe: Stripe,
  user: DbUser,
  empresaNombre?: string,
): Promise<string> {
  if (!user) throw new ConvexError({ code: "NOT_FOUND", message: "Usuario no encontrado" });
  if (user.stripeCustomerId) return user.stripeCustomerId;
  const customer = await stripe.customers.create({
    name: user.name ?? "Empresa",
    email: user.email ?? undefined,
    metadata: {
      userId: user._id,
      empresaNombre: empresaNombre ?? "",
    },
  });
  await ctx.runMutation(internal.empresasDb.saveStripeCustomerId, {
    userId: user._id,
    stripeCustomerId: customer.id,
    empresaNombre,
  });
  return customer.id;
}

// ── Crear checkout del Plan Empresas (150€/mes, suscripción) ────────────────
export const checkoutEmpresasPlan = action({
  args: {
    sessionToken: v.optional(v.string()),
    successUrl: v.string(),
    cancelUrl: v.string(),
    empresaNombre: v.optional(v.string()),
  },
  handler: async (ctx, args): Promise<{ url: string }> => {
    const user = await requireUser(ctx, args.sessionToken);

    const stripe = getStripe();
    const customerId = await getOrCreateCustomer(ctx, stripe, user, args.empresaNombre);

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer: customerId,
      line_items: [{ price: process.env.STRIPE_PRICE_EMPRESAS_MONTHLY!, quantity: 1 }],
      success_url: args.successUrl,
      cancel_url: args.cancelUrl,
      locale: "es",
      allow_promotion_codes: true,
      metadata: {
        userId: user._id,
        producto: "plan_empresas",
      },
    });

    if (!session.url) throw new ConvexError({ code: "EXTERNAL_SERVICE_ERROR", message: "No se pudo crear el checkout" });
    return { url: session.url };
  },
});

// ── Comprobar si el usuario tiene Plan Empresas activo ───────────────────────
export const checkEmpresasPlan = action({
  args: { sessionToken: v.optional(v.string()) },
  handler: async (ctx, args): Promise<{ active: boolean; features: string[] }> => {
    const user = await getUserFromSession(ctx, args.sessionToken);
    if (!user) return { active: false, features: [] };

    if (!user?.stripeCustomerId) return { active: false, features: [] };

    const stripe = getStripe();
    const subs = await stripe.subscriptions.list({
      customer: user.stripeCustomerId,
      status: "all",
      limit: 10,
    });

    const active = subs.data.some((s) => s.status === "active" || s.status === "trialing");
    return { active, features: active ? FEATURES : [] };
  },
});

// ── Abrir portal de facturación para gestionar/cancelar la suscripción ───────
export const getBillingPortalUrl = action({
  args: { sessionToken: v.optional(v.string()), returnUrl: v.string() },
  handler: async (ctx, args): Promise<{ url: string }> => {
    const user = await requireUser(ctx, args.sessionToken);

    if (!user?.stripeCustomerId) throw new ConvexError({ code: "NOT_FOUND", message: "No tienes una suscripción activa" });

    const stripe = getStripe();
    const portal = await stripe.billingPortal.sessions.create({
      customer: user.stripeCustomerId,
      return_url: args.returnUrl,
    });

    return { url: portal.url };
  },
});
