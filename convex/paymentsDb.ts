// Mutations y queries de pagos — V8 runtime (sin "use node")
import { v } from "convex/values";
import { ConvexError } from "convex/values";
import { internalMutation, internalQuery, query } from "./_generated/server";
import { internal } from "./_generated/api";
import { requireUser } from "./authSimple";

// ── Mutation interna: registrar pago pendiente SIN REGISTRO ───────────────────
// Guarda todos los datos necesarios para generar y enviar el PDF tras el pago.
export const createPendingPaymentSinRegistro = internalMutation({
  args: {
    stripeSessionId: v.string(),
    email: v.string(),
    nombre: v.string(),
    dni: v.string(),
    domicilio: v.string(),
    carta: v.string(),
    expediente: v.string(),
    multaImporte: v.string(),
    infraccion: v.string(),
    fecha: v.string(),
    plazoRecurso: v.string(),
    tipo: v.union(v.literal("multa"), v.literal("sancion")),
    matriculas: v.optional(v.array(v.string())),
  },
  handler: async (ctx, args): Promise<void> => {
    await ctx.db.insert("payments", {
      stripeSessionId: args.stripeSessionId,
      producto: "suscripcion_anual",
      importe: 799,
      status: "pending",
      createdAt: new Date().toISOString(),
      sinRegistro: true,
      email: args.email,
      nombre: args.nombre,
      dni: args.dni,
      domicilio: args.domicilio,
      carta: args.carta,
      expediente: args.expediente,
      multaImporte: args.multaImporte,
      infraccion: args.infraccion,
      fecha: args.fecha,
      plazoRecurso: args.plazoRecurso,
      tipo: args.tipo,
      matriculas: args.matriculas,
    });

    // Programar email de carrito abandonado a los 15 minutos
    await ctx.scheduler.runAfter(
      15 * 60 * 1000, // 15 minutos
      internal.emails.sendAbandonoCarrito,
      {
        stripeSessionId: args.stripeSessionId,
        to: args.email,
        nombre: args.nombre,
        producto: "suscripcion_anual",
        importe: 799,
      },
    );
  },
});

// ── Mutation interna: confirmar pago completado (webhook o verificación al volver de Stripe) ──
// Envía por email el recurso preparado (PDF + guía paso a paso) de la multa analizada.
export const confirmPayment = internalMutation({
  args: {
    stripeSessionId: v.string(),
    stripeCustomerId: v.optional(v.string()),
  },
  handler: async (ctx, args): Promise<void> => {
    const payment = await ctx.db
      .query("payments")
      .withIndex("by_session", (q) => q.eq("stripeSessionId", args.stripeSessionId))
      .unique();
    if (!payment) return;
    if (payment.status === "completed") return;

    await ctx.db.patch("payments", payment._id, { status: "completed" });

    // ── Flujo sin registro: no hay usuario ni créditos; enviar el PDF por email ──
    if (payment.sinRegistro || !payment.userId) {
      if (payment.email && payment.carta) {
        await ctx.scheduler.runAfter(0, internal.pdfEmail.sendRecursoPdfEmail, {
          to: payment.email,
          nombre: payment.nombre,
          carta: payment.carta,
          expediente: payment.expediente ?? "No encontrado",
          importe: payment.multaImporte ?? "No especificado",
          infraccion: payment.infraccion ?? "Infracción",
          fecha: payment.fecha ?? "No especificada",
          plazoRecurso: payment.plazoRecurso ?? "20 días hábiles",
        });
        console.log("[payments] confirmPayment sin-registro: PDF programado para", payment.email);
      } else {
        console.error("[payments] confirmPayment sin-registro sin email/carta", payment._id);
      }
      return;
    }

    // Pagos históricos con usuario (PDF único, Pack 10, VIP): ya no se venden y su
    // lógica de créditos se ha retirado. Solo quedan marcados como completados.
  },
});

// ── Query interna: obtener pago por session ID (para carrito abandonado) ────────
export const getPaymentBySession = internalQuery({
  args: { stripeSessionId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("payments")
      .withIndex("by_session", (q) => q.eq("stripeSessionId", args.stripeSessionId))
      .unique();
  },
});

// ── Mutation interna: marcar email de abandono como enviado ───────────────────
export const markAbandonmentEmailSent = internalMutation({
  args: { stripeSessionId: v.string() },
  handler: async (ctx, args) => {
    const payment = await ctx.db
      .query("payments")
      .withIndex("by_session", (q) => q.eq("stripeSessionId", args.stripeSessionId))
      .unique();
    if (payment) {
      await ctx.db.patch("payments", payment._id, { abandonmentEmailSent: true });
    }
  },
});

// ── Query: historial de pagos del usuario ──────────────────────────────────────
export const getMyPayments = query({
  args: { sessionToken: v.optional(v.string()) },
  handler: async (ctx, args) => {
    let user;
    try {
      user = await requireUser(ctx, args.sessionToken);
    } catch {
      return [];
    }
    return await ctx.db
      .query("payments")
      .withIndex("by_user", (q) => q.eq("userId", user._id))
      .order("desc")
      .take(20);
  },
});
