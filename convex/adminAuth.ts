import { v } from "convex/values";
import { action, internalMutation } from "./_generated/server";
import { internal } from "./_generated/api";

const ADMIN_EMAIL = "danielsanchezverdasco@gmail.com";
const SESSION_DURATION_MS = 30 * 24 * 60 * 60 * 1000;

function generateSessionToken(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";
  const array = new Uint8Array(48);
  crypto.getRandomValues(array);
  for (let i = 0; i < array.length; i++) {
    token += chars[array[i] % chars.length];
  }
  return token;
}

/**
 * Acceso solo-admin al panel (/admin/*). Verifica la contraseña contra
 * ADMIN_PASSWORD (variable de entorno de Convex) y crea una sesión normal
 * para el usuario administrador, reutilizando el sistema de sesiones
 * existente (isAdminSession la reconoce por email o flag isAdmin).
 */
export const adminLogin = action({
  args: { password: v.string() },
  handler: async (ctx, args): Promise<{ ok: boolean; sessionToken?: string }> => {
    const expected = process.env.ADMIN_PASSWORD;
    if (!expected || args.password.length === 0 || args.password !== expected) {
      await new Promise((r) => setTimeout(r, 600));
      return { ok: false };
    }
    const sessionToken: string = await ctx.runMutation(internal.adminAuth.crearSesionAdmin, {});
    return { ok: true, sessionToken };
  },
});

export const crearSesionAdmin = internalMutation({
  args: {},
  handler: async (ctx): Promise<string> => {
    let user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), ADMIN_EMAIL))
      .first();
    if (!user) {
      const userId = await ctx.db.insert("users", {
        email: ADMIN_EMAIL,
        name: "Daniel",
        isAdmin: true,
      });
      user = (await ctx.db.get(userId))!;
    } else if (!user.isAdmin) {
      await ctx.db.patch(user._id, { isAdmin: true });
    }
    const token = generateSessionToken();
    const now = Date.now();
    await ctx.db.insert("sessions", {
      token,
      userId: user._id,
      createdAt: now,
      expiresAt: now + SESSION_DURATION_MS,
    });
    return token;
  },
});
