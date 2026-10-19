// Backend del sistema de creadores/youtubers — V8 runtime
import { v } from "convex/values";
import { ConvexError } from "convex/values";
import { mutation, query, internalMutation } from "./_generated/server";
import { ADMIN_EMAILS } from "./users.ts";
import { requireUser, getUserFromSession } from "./authSimple";

// ── Validar código de creador (público, sin auth) ─────────────────────────────
export const validarCodigo = query({
  args: { codigo: v.string() },
  handler: async (ctx, { codigo }) => {
    const creador = await ctx.db
      .query("creadores")
      .withIndex("by_codigo", (q) => q.eq("codigo", codigo.toUpperCase().trim()))
      .unique();
    if (!creador || !creador.activo) return null;
    return {
      nombre: creador.nombre,
      canal: creador.canal,
      codigo: creador.codigo,
      comisionPct: creador.comisionPct,
    };
  },
});

// ── Aplicar código al usuario actual ─────────────────────────────────────────
export const aplicarCodigo = mutation({
  args: { sessionToken: v.optional(v.string()), codigo: v.string() },
  handler: async (ctx, args) => {
    const { codigo } = args;
    const user = await requireUser(ctx, args.sessionToken);

    // Ya tiene un código aplicado
    if (user.codigoCreadorUsado) {
      throw new ConvexError({ code: "CONFLICT", message: "Ya tienes un código de creador aplicado" });
    }

    const creador = await ctx.db
      .query("creadores")
      .withIndex("by_codigo", (q) => q.eq("codigo", codigo.toUpperCase().trim()))
      .unique();
    if (!creador || !creador.activo) {
      throw new ConvexError({ code: "NOT_FOUND", message: "Código no válido o inactivo" });
    }

    // Guardar en el usuario
    await ctx.db.patch("users", user._id, { codigoCreadorUsado: creador.codigo });

    // Incrementar usos del creador
    await ctx.db.patch("creadores", creador._id, { totalUsos: creador.totalUsos + 1 });

    return { nombre: creador.nombre, codigo: creador.codigo };
  },
});

// ── Registrar venta atribuida a un creador (llamada desde confirmPayment) ─────
export const registrarVentaCreador = internalMutation({
  args: {
    codigo: v.string(),
    importeCentimos: v.number(),
  },
  handler: async (ctx, { codigo, importeCentimos }) => {
    const creador = await ctx.db
      .query("creadores")
      .withIndex("by_codigo", (q) => q.eq("codigo", codigo))
      .unique();
    if (!creador) return;

    const comision = Math.round(importeCentimos * (creador.comisionPct / 100));
    await ctx.db.patch("creadores", creador._id, {
      totalVentas: creador.totalVentas + 1,
      totalComision: creador.totalComision + comision,
    });
  },
});

// ── Crear creador (solo admin) ────────────────────────────────────────────────

export const crearCreador = mutation({
  args: {
    sessionToken: v.optional(v.string()),
    codigo: v.string(),
    nombre: v.string(),
    canal: v.optional(v.string()),
    email: v.optional(v.string()),
    comisionPct: v.number(),
  },
  handler: async (ctx, args) => {
    const user = await requireUser(ctx, args.sessionToken);
    if (!user.isAdmin && !ADMIN_EMAILS.includes(user.email ?? "")) {
      throw new ConvexError({ code: "FORBIDDEN", message: "Solo admins pueden crear creadores" });
    }

    const codigoNorm = args.codigo.toUpperCase().trim();

    // Verificar que el código no existe
    const existing = await ctx.db
      .query("creadores")
      .withIndex("by_codigo", (q) => q.eq("codigo", codigoNorm))
      .unique();
    if (existing) throw new ConvexError({ code: "CONFLICT", message: "Ese código ya existe" });

    return await ctx.db.insert("creadores", {
      codigo: codigoNorm,
      nombre: args.nombre,
      canal: args.canal,
      email: args.email,
      comisionPct: args.comisionPct,
      totalVentas: 0,
      totalComision: 0,
      totalUsos: 0,
      activo: true,
      createdAt: new Date().toISOString(),
      // Los creadores dados de alta por el admin tienen la descarga gratis automáticamente
      gratisAprobado: true,
    });
  },
});

// ── Listar todos los creadores (solo admin) ───────────────────────────────────
export const listarCreadores = query({
  args: { sessionToken: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const user = await getUserFromSession(ctx, args.sessionToken);
    if (!user || (!user.isAdmin && !ADMIN_EMAILS.includes(user.email ?? ""))) return null;
    return await ctx.db.query("creadores").order("desc").take(100);
  },
});

// ── Toggle activo/inactivo (solo admin) ───────────────────────────────────────
export const toggleCreador = mutation({
  args: { sessionToken: v.optional(v.string()), creadorId: v.id("creadores") },
  handler: async (ctx, args) => {
    const { creadorId } = args;
    const user = await requireUser(ctx, args.sessionToken);
    if (!user.isAdmin && !ADMIN_EMAILS.includes(user.email ?? "")) {
      throw new ConvexError({ code: "FORBIDDEN", message: "Solo admins" });
    }
    const creador = await ctx.db.get("creadores", creadorId);
    if (!creador) throw new ConvexError({ code: "NOT_FOUND", message: "Creador no encontrado" });
    await ctx.db.patch("creadores", creadorId, { activo: !creador.activo });
  },
});

// ── Stats del creador (público con código) ────────────────────────────────────
export const statsCreador = query({
  args: { sessionToken: v.optional(v.string()), codigo: v.string() },
  handler: async (ctx, args) => {
    const { codigo } = args;
    const user = await getUserFromSession(ctx, args.sessionToken);
    if (!user) return null;
    const creador = await ctx.db
      .query("creadores")
      .withIndex("by_codigo", (q) => q.eq("codigo", codigo.toUpperCase()))
      .unique();
    if (!creador) return null;
    // Solo el admin o si el email del creador coincide
    const isOwner = creador.email === user.email || user.isAdmin || ADMIN_EMAILS.includes(user.email ?? "");
    if (!isOwner) return null;
    return creador;
  },
});

// ── Programa "Gana dinero con nosotros" — auto-registro público ──────────────
// Comisión fija del 20% para cualquier usuario que se auto-registre como
// creador/afiliado desde la sección pública "Gana dinero".
const COMISION_AFILIADO_PCT = 20;

function generarCodigoDesdeNombre(nombre: string): string {
  const base = nombre
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, 10);
  const sufijo = Math.floor(1000 + Math.random() * 9000);
  return `${base || "AFILIADO"}${sufijo}`;
}

// Devuelve el perfil de creador/afiliado del usuario actual (o null si no tiene).
// Busca primero por userId (auto-registrados) y si no, por email (creadores
// dados de alta manualmente por el admin con el mismo email que el usuario).
export const miPerfilCreador = query({
  args: { sessionToken: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const user = await getUserFromSession(ctx, args.sessionToken);
    if (!user) return null;

    const porUsuario = await ctx.db
      .query("creadores")
      .withIndex("by_user", (q) => q.eq("userId", user._id))
      .unique();
    if (porUsuario) return porUsuario;

    if (user.email) {
      const porEmail = await ctx.db
        .query("creadores")
        .withIndex("by_email", (q) => q.eq("email", user.email))
        .first();
      if (porEmail) return porEmail;
    }

    return null;
  },
});

// Auto-registro público: cualquier usuario autenticado puede unirse al
// programa de afiliados y recibir un código + enlace único al instante.
export const registrarAfiliado = mutation({
  args: { sessionToken: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const user = await requireUser(ctx, args.sessionToken);

    const existing = await ctx.db
      .query("creadores")
      .withIndex("by_user", (q) => q.eq("userId", user._id))
      .unique();
    if (existing) return existing;

    // Generar un código único (reintentar si colisiona)
    let codigo = generarCodigoDesdeNombre(user.name ?? "AFILIADO");
    for (let i = 0; i < 5; i++) {
      const clash = await ctx.db
        .query("creadores")
        .withIndex("by_codigo", (q) => q.eq("codigo", codigo))
        .unique();
      if (!clash) break;
      codigo = generarCodigoDesdeNombre(user.name ?? "AFILIADO");
    }

    const creadorId = await ctx.db.insert("creadores", {
      codigo,
      nombre: user.name ?? "Afiliado",
      email: user.email,
      userId: user._id,
      comisionPct: COMISION_AFILIADO_PCT,
      totalVentas: 0,
      totalComision: 0,
      totalUsos: 0,
      activo: true,
      createdAt: new Date().toISOString(),
      // Los afiliados auto-registrados necesitan aprobación manual del admin
      // para desbloquear el recurso/descarga gratis
      gratisAprobado: false,
    });

    return await ctx.db.get("creadores", creadorId);
  },
});

// ── Aprobar/revocar la descarga gratis de un afiliado auto-registrado (solo admin) ─
export const toggleGratisAprobado = mutation({
  args: { sessionToken: v.optional(v.string()), creadorId: v.id("creadores") },
  handler: async (ctx, args) => {
    const { creadorId } = args;
    const user = await requireUser(ctx, args.sessionToken);
    if (!user.isAdmin && !ADMIN_EMAILS.includes(user.email ?? "")) {
      throw new ConvexError({ code: "FORBIDDEN", message: "Solo admins" });
    }
    const creador = await ctx.db.get("creadores", creadorId);
    if (!creador) throw new ConvexError({ code: "NOT_FOUND", message: "Creador no encontrado" });
    await ctx.db.patch("creadores", creadorId, { gratisAprobado: !creador.gratisAprobado });
  },
});

// ── Guardar los datos de pago del creador/afiliado (IBAN + titular) ──────────
// Solo el propio creador (dueño del perfil) puede guardar sus datos de cobro.
export const guardarDatosPago = mutation({
  args: { sessionToken: v.optional(v.string()), iban: v.string(), titular: v.string() },
  handler: async (ctx, args) => {
    const { iban, titular } = args;
    const user = await requireUser(ctx, args.sessionToken);

    const creador = await ctx.db
      .query("creadores")
      .withIndex("by_user", (q) => q.eq("userId", user._id))
      .unique();
    if (!creador) throw new ConvexError({ code: "NOT_FOUND", message: "No tienes perfil de afiliado" });

    const ibanNorm = iban.trim().toUpperCase().replace(/\s/g, "");
    if (ibanNorm.length < 15 || ibanNorm.length > 34) {
      throw new ConvexError({ code: "BAD_REQUEST", message: "IBAN no válido" });
    }
    if (!titular.trim()) {
      throw new ConvexError({ code: "BAD_REQUEST", message: "El titular es obligatorio" });
    }

    await ctx.db.patch("creadores", creador._id, { iban: ibanNorm, titular: titular.trim() });
  },
});

// ── Registrar un pago de comisión a un creador (solo admin) ──────────────────
// El pago se realiza manualmente por transferencia fuera de la web; esto solo
// deja constancia en el sistema de que ya se pagó ese importe.
export const registrarPagoAfiliado = mutation({
  args: {
    sessionToken: v.optional(v.string()),
    creadorId: v.id("creadores"),
    importeCentimos: v.number(),
    notas: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { creadorId, importeCentimos, notas } = args;
    const user = await requireUser(ctx, args.sessionToken);
    if (!user.isAdmin && !ADMIN_EMAILS.includes(user.email ?? "")) {
      throw new ConvexError({ code: "FORBIDDEN", message: "Solo admins" });
    }
    if (importeCentimos <= 0) {
      throw new ConvexError({ code: "BAD_REQUEST", message: "El importe debe ser mayor que 0" });
    }
    const creador = await ctx.db.get("creadores", creadorId);
    if (!creador) throw new ConvexError({ code: "NOT_FOUND", message: "Creador no encontrado" });

    const yaPagado = creador.comisionPagada ?? 0;
    const pendiente = creador.totalComision - yaPagado;
    if (importeCentimos > pendiente) {
      throw new ConvexError({ code: "BAD_REQUEST", message: "El importe supera la comisión pendiente" });
    }

    await ctx.db.patch("creadores", creadorId, { comisionPagada: yaPagado + importeCentimos });
    await ctx.db.insert("pagosAfiliados", {
      creadorId,
      importeCentimos,
      notas,
      createdAt: new Date().toISOString(),
    });
  },
});

// ── Listar el historial de pagos de un creador (admin, o el propio creador) ──
export const listarPagosCreador = query({
  args: { sessionToken: v.optional(v.string()), creadorId: v.id("creadores") },
  handler: async (ctx, args) => {
    const { creadorId } = args;
    const user = await getUserFromSession(ctx, args.sessionToken);
    if (!user) return null;
    const creador = await ctx.db.get("creadores", creadorId);
    if (!creador) return null;
    const isOwner = creador.email === user.email || user.isAdmin || ADMIN_EMAILS.includes(user.email ?? "");
    if (!isOwner) return null;
    return await ctx.db
      .query("pagosAfiliados")
      .withIndex("by_creador", (q) => q.eq("creadorId", creadorId))
      .order("desc")
      .take(50);
  },
});
