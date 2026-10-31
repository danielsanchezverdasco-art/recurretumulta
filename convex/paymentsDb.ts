// Mutations y queries de pagos — V8 runtime (sin "use node")
import { v } from "convex/values";
import { ConvexError } from "convex/values";
import { internalMutation, internalQuery, mutation, query } from "./_generated/server";
import { internal } from "./_generated/api";
import { requireUser } from "./authSimple";

// ── Mutation interna: registrar pago pendiente ────────────────────────────────
export const createPendingPayment = internalMutation({
  args: {
    userId: v.id("users"),
    stripeSessionId: v.string(),
    producto: v.union(v.literal("pdf_unico"), v.literal("pdf_pack_10"), v.literal("vip_vitalicio"), v.literal("suscripcion_anual")),
    importe: v.number(),
    recursoId: v.optional(v.id("recursos")),
  },
  handler: async (ctx, args): Promise<void> => {
    const user = await ctx.db.get("users", args.userId);
    if (!user) throw new ConvexError({ code: "NOT_FOUND", message: "Usuario no encontrado" });

    await ctx.db.insert("payments", {
      userId: user._id,
      stripeSessionId: args.stripeSessionId,
      producto: args.producto,
      importe: args.importe,
      status: "pending",
      createdAt: new Date().toISOString(),
      // Guardar el código del creador que el usuario tenía aplicado
      codigoCreador: user.codigoCreadorUsado,
      recursoId: args.recursoId,
    });

    // Programar email de carrito abandonado a los 15 minutos
    if (user.email) {
      await ctx.scheduler.runAfter(
        15 * 60 * 1000, // 15 minutos
        internal.emails.sendAbandonoCarrito,
        {
          stripeSessionId: args.stripeSessionId,
          to: user.email,
          nombre: user.name,
          producto: args.producto,
          importe: args.importe,
        },
      );
    }
  },
});

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

// ── Mutation interna: confirmar pago completado (desde webhook) ───────────────
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

    const user = await ctx.db.get("users", payment.userId);
    if (!user) {
      console.error("[payments] confirmPayment: user not found for payment", payment._id, "session", args.stripeSessionId);
      return;
    }

    const updates: {
      plan?: "premium" | "vip";
      pdfCredits?: number;
      stripeCustomerId?: string;
    } = {};

    if (args.stripeCustomerId) updates.stripeCustomerId = args.stripeCustomerId;

    if (payment.producto === "vip_vitalicio") {
      updates.plan = "vip";
    } else if (payment.producto === "pdf_pack_10") {
      updates.plan = user.plan === "vip" ? "vip" : "premium";
      updates.pdfCredits = (user.pdfCredits ?? 0) + 10;
    } else {
      updates.plan = user.plan === "vip" ? "vip" : "premium";
      updates.pdfCredits = (user.pdfCredits ?? 0) + 1;
    }

    await ctx.db.patch("users", user._id, updates);

    console.log("[payments] confirmPayment: success", {
      sessionId: args.stripeSessionId,
      userId: user._id,
      producto: payment.producto,
      importe: payment.importe,
    });

    // Si el usuario tenía un código de creador aplicado, registrar la comisión
    if (payment.codigoCreador) {
      await ctx.runMutation(internal.creadores.registrarVentaCreador, {
        codigo: payment.codigoCreador,
        importeCentimos: payment.importe,
      });
    }

    // Enviar el PDF del recurso comprado por email, si tenemos el recurso y el email del usuario
    if (payment.recursoId && user.email) {
      const recurso = await ctx.db.get("recursos", payment.recursoId);
      if (recurso && recurso.carta) {
        await ctx.scheduler.runAfter(0, internal.pdfEmail.sendRecursoPdfEmail, {
          to: user.email,
          nombre: user.name,
          carta: recurso.carta,
          expediente: recurso.expediente ?? "No encontrado",
          importe: recurso.importe ?? "No especificado",
          infraccion: recurso.infraccion ?? "Infracción DGT",
          fecha: recurso.fecha ?? "No especificada",
          plazoRecurso: recurso.plazo ?? "20 días hábiles",
        });
      }
    }
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
