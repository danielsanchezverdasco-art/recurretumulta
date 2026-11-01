"use node";

// Acciones Stripe — Node.js runtime obligatorio para el SDK de Stripe
import { v } from "convex/values";
import Stripe from "stripe";
import { action } from "./_generated/server";
import { ConvexError } from "convex/values";
import { internal } from "./_generated/api";
import { buildSuscripcionSessionParams, normalizarMatriculas } from "./lib/suscripcion";

const getStripe = () =>
  new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2026-08-26.dahlia" });

// ── Crear sesión de checkout SIN REGISTRO: SUSCRIPCIÓN ANUAL 7,99 € ───────────
// 31/10/2026 (rama suscripcion-multas-mvp): se elimina el pago suelto por PDF.
// El análisis sigue gratis; el PDF solo se entrega con la suscripción anual.
// Flujo: analizar gratis sin cuenta → al pagar se piden nombre, DNI, domicilio
// y email → tras el pago el recurso preparado se envía por email y el cliente queda
// en la tabla `suscriptores` (webhook checkout.session.completed).
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
    // Matrículas a vigilar (opcional, máx. 5).
    matriculas: v.optional(v.array(v.string())),
  },
  handler: async (ctx, args): Promise<{ url: string }> => {
    const email = args.email.toLowerCase().trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new ConvexError({ code: "INVALID_EMAIL", message: "Email no válido" });
    }
    if (!args.nombre.trim() || !args.dni.trim() || !args.domicilio.trim() || !args.carta.trim()) {
      throw new ConvexError({ code: "INVALID_DATA", message: "Faltan datos para generar el recurso" });
    }

    const priceId = process.env.STRIPE_PRICE_SUSCRIPCION_ANUAL;
    if (!priceId) {
      throw new ConvexError({ code: "SIN_PRECIO", message: "Falta STRIPE_PRICE_SUSCRIPCION_ANUAL en la configuración" });
    }
    const matriculas = normalizarMatriculas(args.matriculas ?? []);

    const stripe = getStripe();
    const origin = process.env.FRONTEND_URL ?? "https://recurretumulta.pages.dev";

    const session = await stripe.checkout.sessions.create(
      buildSuscripcionSessionParams({
        email,
        origin,
        priceId,
      }),
    );

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
      matriculas,
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
    const session = await stripe.checkout.sessions.retrieve(args.sessionId, { expand: ["subscription"] });

    if (session.payment_status !== "paid") return { ok: false };
    if (session.metadata?.sinRegistro !== "true") return { ok: false };

    // Mismo camino que el webhook (idempotente): recurso por email + alta del suscriptor.
    await ctx.runMutation(internal.suscripciones.procesarEvento, {
      event: {
        id: `verify_${session.id}`,
        type: "checkout.session.completed",
        created: Math.floor(Date.now() / 1000),
        livemode: session.livemode,
        data: { object: { ...session, subscription: typeof session.subscription === "string" ? session.subscription : session.subscription?.id } },
      },
      suscripcion: typeof session.subscription === "object" ? session.subscription ?? undefined : undefined,
    });

    return { ok: true };
  },
});
