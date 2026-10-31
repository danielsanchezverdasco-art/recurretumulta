"use node";

// Acciones Stripe — Node.js runtime obligatorio para el SDK de Stripe
import { v } from "convex/values";
import Stripe from "stripe";
import { action } from "./_generated/server";
import { ConvexError } from "convex/values";
import { internal } from "./_generated/api";
import { requireUser } from "./authSimple";

const getStripe = () =>
  new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2026-08-26.dahlia" });

// ── Crear sesión de checkout SIN REGISTRO: SUSCRIPCIÓN ANUAL 7,99 € ───────────
// 31/10/2026 (rama suscripcion-multas-mvp): se elimina el pago suelto por PDF.
// El análisis sigue gratis; el PDF solo se entrega con la suscripción anual.
// Flujo: analizar gratis sin cuenta → al pagar se piden nombre, DNI, domicilio
// y email → tras el pago el PDF se envía por email (webhook → sendRecursoPdfEmail).
// No requiere sesión ni usuario.
export const createCheckoutSinRegistro = action({
  args: {
    nombre: v.string(),
    dni: v.string(),
    domicilio: v.string(),
    email: v.string(),
    carta: v.string(),
    expediente: v.string(),
    importe: v.string(),
    infraccion: v.string(),
    fecha: v.string(),
    plazoRecurso: v.string(),
    tipo: v.union(v.literal("multa"), v.literal("sancion")),
  },
  handler: async (ctx, args): Promise<{ url: string }> => {
    const email = args.email.toLowerCase().trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new ConvexError({ code: "INVALID_EMAIL", message: "Email no válido" });
    }
    if (!args.nombre.trim() || !args.dni.trim() || !args.domicilio.trim() || !args.carta.trim()) {
      throw new ConvexError({ code: "INVALID_DATA", message: "Faltan datos para generar el recurso" });
    }

    const stripe = getStripe();
    const origin = process.env.FRONTEND_URL ?? "https://recurretumulta.pages.dev";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: process.env.STRIPE_PRICE_SUSCRIPCION_ANUAL!, quantity: 1 }],
      customer_email: email,
      success_url: `${origin}/?pago=ok&producto=suscripcion_anual&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?pago=cancelado`,
      metadata: {
        producto: "suscripcion_anual",
        sinRegistro: "true",
        email,
      },
      locale: "es",
      allow_promotion_codes: true,
    });

    await ctx.runMutation(internal.paymentsDb.createPendingPaymentSinRegistro, {
      stripeSessionId: session.id,
      email,
      nombre: args.nombre.trim(),
      dni: args.dni.trim().toUpperCase(),
      domicilio: args.domicilio.trim(),
      carta: args.carta,
      expediente: args.expediente,
      multaImporte: args.importe,
      infraccion: args.infraccion,
      fecha: args.fecha,
      plazoRecurso: args.plazoRecurso,
      tipo: args.tipo,
    });

    return { url: session.url! };
  },
});

// ── Verificar sesión Stripe sin registro (fallback si el webhook no llegó) ───
// No requiere sesión de usuario: confirma el pago y dispara el envío del PDF.
export const verifySessionSinRegistro = action({
  args: { sessionId: v.string() },
  handler: async (ctx, args): Promise<{ ok: boolean }> => {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(args.sessionId);

    if (session.payment_status !== "paid") return { ok: false };
    if (session.metadata?.sinRegistro !== "true") return { ok: false };

    await ctx.runMutation(internal.paymentsDb.confirmPayment, {
      stripeSessionId: session.id,
      stripeCustomerId: (session.customer as string) ?? undefined,
    });

    return { ok: true };
  },
});

// ── Crear sesión de checkout para PDF único (4,99€) ───────────────────────────
export const createCheckoutPdfUnico = action({
  args: { sessionToken: v.optional(v.string()), recursoId: v.optional(v.id("recursos")) },
  handler: async (ctx, args): Promise<{ url: string }> => {
    const user = await requireUser(ctx, args.sessionToken);

    const stripe = getStripe();
    const origin = process.env.FRONTEND_URL ?? "https://recurretumulta.pages.dev";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: process.env.STRIPE_PRICE_PDF_UNICO!, quantity: 1 }],
      success_url: `${origin}/?pago=ok&producto=pdf_unico&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?pago=cancelado`,
      metadata: {
        userId: user._id,
        producto: "pdf_unico",
        recursoId: args.recursoId ?? "",
      },
      locale: "es",
      allow_promotion_codes: true,
    });

    await ctx.runMutation(internal.paymentsDb.createPendingPayment, {
      userId: user._id,
      stripeSessionId: session.id,
      producto: "pdf_unico",
      importe: 499,
      recursoId: args.recursoId,
    });

    return { url: session.url! };
  },
});

// ── Crear sesión de checkout para Pack 10 multas (9,99€) ─────────────────────
export const createCheckoutPack10 = action({
  args: { sessionToken: v.optional(v.string()) },
  handler: async (ctx, args): Promise<{ url: string }> => {
    const user = await requireUser(ctx, args.sessionToken);

    const stripe = getStripe();
    const origin = process.env.FRONTEND_URL ?? "https://recurretumulta.pages.dev";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{
        price_data: {
          currency: "eur",
          unit_amount: 999,
          product_data: {
            name: "Pack 10 Recursos PDF",
            description: "Analiza y recurre hasta 10 multas — PDFs listos para firmar",
          },
        },
        quantity: 1,
      }],
      success_url: `${origin}/?pago=ok&producto=pdf_pack_10&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?pago=cancelado`,
      metadata: {
        userId: user._id,
        producto: "pdf_pack_10",
      },
      locale: "es",
      allow_promotion_codes: true,
    });

    await ctx.runMutation(internal.paymentsDb.createPendingPayment, {
      userId: user._id,
      stripeSessionId: session.id,
      producto: "pdf_pack_10",
      importe: 999,
    });

    return { url: session.url! };
  },
});


export const createCheckoutVip = action({
  args: { sessionToken: v.optional(v.string()) },
  handler: async (ctx, args): Promise<{ url: string }> => {
    const user = await requireUser(ctx, args.sessionToken);

    const stripe = getStripe();
    const origin = process.env.FRONTEND_URL ?? "https://recurretumulta.pages.dev";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: process.env.STRIPE_PRICE_VIP_VITALICIO!, quantity: 1 }],
      success_url: `${origin}/?pago=ok&producto=vip_vitalicio&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?pago=cancelado`,
      metadata: {
        userId: user._id,
        producto: "vip_vitalicio",
      },
      locale: "es",
      allow_promotion_codes: true,
    });

    await ctx.runMutation(internal.paymentsDb.createPendingPayment, {
      userId: user._id,
      stripeSessionId: session.id,
      producto: "vip_vitalicio",
      importe: 1499,
    });

    return { url: session.url! };
  },
});

// ── Verificar sesión de Stripe manualmente (fallback sin webhook) ─────────────
// Llamado cuando el usuario vuelve a la app tras pagar, por si el webhook no llegó
export const verifySessionAndConfirm = action({
  args: { sessionToken: v.optional(v.string()), sessionId: v.string() },
  handler: async (ctx, args): Promise<{ ok: boolean; producto?: string }> => {
    await requireUser(ctx, args.sessionToken);

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(args.sessionId);

    if (session.payment_status !== "paid") return { ok: false };

    // Confirmar el pago en base de datos (idempotente — no hace nada si ya está completed)
    await ctx.runMutation(internal.paymentsDb.confirmPayment, {
      stripeSessionId: session.id,
      stripeCustomerId: (session.customer as string) ?? undefined,
    });

    return { ok: true, producto: session.metadata?.producto };
  },
});
