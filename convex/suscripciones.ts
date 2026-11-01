// Tabla de suscriptores del plan anual de vigilancia de multas — V8 runtime.
// Los webhooks de Stripe (stripeNode.ts) llaman a estas mutations internas.
import { v } from "convex/values";
import { ConvexError } from "convex/values";
import type Stripe from "stripe";
import { internalMutation, internalQuery } from "./_generated/server";
import { internal } from "./_generated/api";
import { accionDesdeEvento, cambioDesdeSuscripcion } from "./lib/suscripcion";

const estadoV = v.union(
  v.literal("pendiente"),
  v.literal("activa"),
  v.literal("impagada"),
  v.literal("cancelada"),
);

// ── checkout.session.completed (mode: subscription) → alta del suscriptor ────
export const registrarAlta = internalMutation({
  args: {
    stripeSessionId: v.string(),
    stripeCustomerId: v.optional(v.string()),
    stripeSubscriptionId: v.optional(v.string()),
    email: v.optional(v.string()),
    estado: estadoV,
    eventoCreated: v.number(),
    // Estado real de la suscripción si el webhook pudo consultarla en Stripe
    periodoHasta: v.optional(v.number()),
    livemode: v.optional(v.boolean()),
  },
  handler: async (ctx, a): Promise<{ id: string; accion: "creada" | "actualizada" }> => {
    const ahora = new Date().toISOString();
    // Datos que el cliente dio al contratar (se guardaron al crear la sesión de pago)
    const pago = await ctx.db
      .query("payments")
      .withIndex("by_session", (q) => q.eq("stripeSessionId", a.stripeSessionId))
      .unique();
    const email = (a.email ?? pago?.email ?? "").toLowerCase().trim();

    let fila = a.stripeSubscriptionId
      ? await ctx.db
          .query("suscriptores")
          .withIndex("by_subscription", (q) => q.eq("stripeSubscriptionId", a.stripeSubscriptionId))
          .unique()
      : null;
    if (!fila) {
      fila = await ctx.db
        .query("suscriptores")
        .withIndex("by_session", (q) => q.eq("stripeSessionId", a.stripeSessionId))
        .unique();
    }

    if (fila) {
      // Alta repetida (Stripe reintenta) o cambio llegado antes: solo completamos datos.
      const patch: Record<string, unknown> = { updatedAt: ahora, stripeSessionId: a.stripeSessionId };
      if (!fila.email && email) patch.email = email;
      if (!fila.nombre && pago?.nombre) patch.nombre = pago.nombre;
      if (!fila.dni && pago?.dni) patch.dni = pago.dni;
      if (!fila.domicilio && pago?.domicilio) patch.domicilio = pago.domicilio;
      if (!fila.stripeCustomerId && a.stripeCustomerId) patch.stripeCustomerId = a.stripeCustomerId;
      if (!fila.stripeSubscriptionId && a.stripeSubscriptionId) patch.stripeSubscriptionId = a.stripeSubscriptionId;
      if (fila.periodoHasta === undefined && a.periodoHasta !== undefined) patch.periodoHasta = a.periodoHasta;
      // Un estado más antiguo que el ya guardado, o una baja ya registrada, no se pisan.
      if (a.eventoCreated > fila.ultimoEvento && fila.estado !== "cancelada") {
        patch.estado = a.estado;
        patch.ultimoEvento = a.eventoCreated;
      }
      await ctx.db.patch("suscriptores", fila._id, patch);
      return { id: fila._id, accion: "actualizada" };
    }

    if (!email) {
      throw new ConvexError({ code: "SIN_EMAIL", message: "La sesión de Stripe no trae email" });
    }
    const id = await ctx.db.insert("suscriptores", {
      email,
      nombre: pago?.nombre,
      dni: pago?.dni,
      domicilio: pago?.domicilio,
      matriculas: pago?.matriculas ?? [],
      estado: a.estado,
      cancelaAlFinal: false,
      periodoHasta: a.periodoHasta,
      stripeCustomerId: a.stripeCustomerId,
      stripeSubscriptionId: a.stripeSubscriptionId,
      stripeSessionId: a.stripeSessionId,
      ultimoEvento: a.eventoCreated,
      livemode: a.livemode,
      createdAt: ahora,
      updatedAt: ahora,
    });
    return { id, accion: "creada" };
  },
});

// ── customer.subscription.updated / deleted → estado, renovación y baja ──────
export const aplicarCambio = internalMutation({
  args: {
    stripeSubscriptionId: v.string(),
    stripeCustomerId: v.optional(v.string()),
    estado: estadoV,
    cancelaAlFinal: v.boolean(),
    periodoHasta: v.optional(v.number()),
    canceladaEn: v.optional(v.number()),
    email: v.optional(v.string()),
    eventoCreated: v.number(),
    livemode: v.optional(v.boolean()),
  },
  handler: async (ctx, a): Promise<{ resultado: "aplicado" | "ignorado_viejo" | "creado" }> => {
    const ahora = new Date().toISOString();
    const fila = await ctx.db
      .query("suscriptores")
      .withIndex("by_subscription", (q) => q.eq("stripeSubscriptionId", a.stripeSubscriptionId))
      .unique();

    if (!fila) {
      const email = (a.email ?? "").toLowerCase().trim();
      if (!email) {
        // El alta (checkout.session.completed) aún no ha llegado: se falla para que Stripe reintente.
        throw new ConvexError({ code: "SUSCRIPCION_NO_ENCONTRADA", message: a.stripeSubscriptionId });
      }
      await ctx.db.insert("suscriptores", {
        email,
        matriculas: [],
        estado: a.estado,
        cancelaAlFinal: a.cancelaAlFinal,
        periodoHasta: a.periodoHasta,
        canceladaEn: a.canceladaEn,
        stripeCustomerId: a.stripeCustomerId,
        stripeSubscriptionId: a.stripeSubscriptionId,
        ultimoEvento: a.eventoCreated,
        livemode: a.livemode,
        createdAt: ahora,
        updatedAt: ahora,
      });
      return { resultado: "creado" };
    }

    // Evento más viejo que el último aplicado, o intento de reactivar una baja (Stripe no lo permite): se ignora.
    if (a.eventoCreated < fila.ultimoEvento) return { resultado: "ignorado_viejo" };
    if (fila.estado === "cancelada" && a.estado !== "cancelada") return { resultado: "ignorado_viejo" };

    await ctx.db.patch("suscriptores", fila._id, {
      estado: a.estado,
      cancelaAlFinal: a.cancelaAlFinal,
      periodoHasta: a.periodoHasta ?? fila.periodoHasta,
      canceladaEn: a.canceladaEn ?? fila.canceladaEn,
      stripeCustomerId: fila.stripeCustomerId ?? a.stripeCustomerId,
      ultimoEvento: a.eventoCreated,
      updatedAt: ahora,
    });
    return { resultado: "aplicado" };
  },
});

// ── Consultas internas (monitor TEU, panel, pruebas) ─────────────────────────
export const porEmail = internalQuery({
  args: { email: v.string() },
  handler: async (ctx, a) =>
    await ctx.db
      .query("suscriptores")
      .withIndex("by_email", (q) => q.eq("email", a.email.toLowerCase().trim()))
      .collect(),
});

export const porSuscripcion = internalQuery({
  args: { stripeSubscriptionId: v.string() },
  handler: async (ctx, a) =>
    await ctx.db
      .query("suscriptores")
      .withIndex("by_subscription", (q) => q.eq("stripeSubscriptionId", a.stripeSubscriptionId))
      .unique(),
});

// Suscriptores con servicio vigente: los que el monitor del BOE debe vigilar.
export const listarActivos = internalQuery({
  args: {},
  handler: async (ctx) => {
    const ahora = Date.now();
    const activas = await ctx.db
      .query("suscriptores")
      .withIndex("by_estado", (q) => q.eq("estado", "activa"))
      .collect();
    return activas.filter((s) => !s.periodoHasta || s.periodoHasta > ahora);
  },
});

// ── Punto de entrada del webhook (ya verificada la firma en stripeNode.ts) ────
// Solo procesa los 3 eventos del plan; cualquier otro se ignora con 200.
// `suscripcion` es la suscripción consultada a Stripe al hacer el alta (opcional:
// si no está, el estado y el periodo los completan los eventos customer.subscription.updated).
export const procesarEvento = internalMutation({
  args: {
    event: v.any(),
    suscripcion: v.optional(v.any()),
  },
  handler: async (ctx, a): Promise<{ tipo: "alta" | "cambio" | "ignorado"; detalle?: string }> => {
    const event = a.event as Stripe.Event;
    const accion = accionDesdeEvento(event);
    if (!accion) return { tipo: "ignorado" };

    if (accion.tipo === "alta") {
      const al = accion.alta;
      // Recurso preparado de la multa analizada → email (idempotente)
      await ctx.runMutation(internal.paymentsDb.confirmPayment, {
        stripeSessionId: al.stripeSessionId,
        stripeCustomerId: al.stripeCustomerId,
      });
      const sub = a.suscripcion as Stripe.Subscription | undefined;
      const real = sub ? cambioDesdeSuscripcion(sub, al.eventoCreated) : undefined;
      const r = await ctx.runMutation(internal.suscripciones.registrarAlta, {
        ...al,
        estado: real?.estado ?? al.estado,
        periodoHasta: real?.periodoHasta,
        livemode: event.livemode,
      });
      return { tipo: "alta", detalle: r.accion };
    }

    const r = await ctx.runMutation(internal.suscripciones.aplicarCambio, {
      ...accion.cambio,
      livemode: event.livemode,
    });
    return { tipo: "cambio", detalle: r.resultado };
  },
});
