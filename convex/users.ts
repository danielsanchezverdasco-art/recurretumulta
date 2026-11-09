import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { requireUser } from "./authSimple";

// Email que siempre tiene acceso admin (para pruebas)
export const ADMIN_EMAILS = ["danielsanchezverdasco@gmail.com"];

export const updateCurrentUser = mutation({
  args: {
    email: v.optional(v.string()),
    name: v.optional(v.string()),
    sessionToken: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Con el sistema simple, el usuario ya existe (creado en el login).
    // Esta función sincroniza datos si se proporcionan.
    if (!args.sessionToken) {
      // Sin sesión, no se puede sincronizar; devolver null
      return null;
    }
    const user = await requireUser(ctx, args.sessionToken);
    const email = args.email ?? user.email;
    const name = args.name ?? user.name;

    const isAdmin = ADMIN_EMAILS.includes(email ?? "") || user?.isAdmin === true;

    // Admin: siempre re-sincronizar con máximos privilegios en cada login
    if (isAdmin && !user.isAdmin) {
      await ctx.db.patch("users", user._id, { isAdmin: true, plan: "vip", pdfCredits: 9999, points: 9999 });
    }
    // Actualizar nombre si se proporciona y no lo tenía
    if (name && !user.name) {
      await ctx.db.patch("users", user._id, { name });
    }
    return user._id;
  },
});

export const getCurrentUser = query({
  args: {
    sessionToken: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    if (!args.sessionToken) return null;
    try {
      const user = await requireUser(ctx, args.sessionToken);
      return user;
    } catch {
      return null;
    }
  },
});

export const updateProfile = mutation({
  args: {
    name: v.optional(v.string()),
    phone: v.optional(v.string()),
    dni: v.optional(v.string()),
    domicilio: v.optional(v.string()),
    sessionToken: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const user = await requireUser(ctx, args.sessionToken);
    await ctx.db.patch("users", user._id, {
      ...(args.name !== undefined ? { name: args.name } : {}),
      ...(args.phone !== undefined ? { phone: args.phone } : {}),
      ...(args.dni !== undefined ? { dni: args.dni } : {}),
      ...(args.domicilio !== undefined ? { domicilio: args.domicilio } : {}),
    });
    return { ok: true };
  },
});

