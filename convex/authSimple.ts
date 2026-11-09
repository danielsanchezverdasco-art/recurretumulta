import { mutation, query, action, internalMutation, internalQuery } from "./_generated/server";
import { v } from "convex/values";
import { ConvexError } from "convex/values";
import { Resend } from "resend";
import { internal } from "./_generated/api";

// ─── Helpers ───

function getResend() {
  return new Resend(process.env.AUTH_RESEND_KEY);
}

const FROM =
  process.env.AUTH_EMAIL_FROM ?? "RecurreTuMulta.online <onboarding@resend.dev>";

// Genera un token de sesión aleatorio y seguro
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

// Duración de la sesión: 30 días
const SESSION_DURATION_MS = 30 * 24 * 60 * 60 * 1000;

// Busca o crea un usuario por email. Devuelve el user.
async function findOrCreateUser(ctx: any, email: string, name?: string) {
  const normalizedEmail = email.toLowerCase().trim();
  // first() en vez de unique(): tolera duplicados históricos sin romper el login
  let user = await ctx.db
    .query("users")
    .withIndex("email", (q: any) => q.eq("email", normalizedEmail))
    .first();
  if (!user) {
    const userId = await ctx.db.insert("users", {
      email: normalizedEmail,
      name: name ?? "",
    });
    user = await ctx.db.get(userId);
  }
  return user;
}

// Crea una sesión para un usuario y devuelve el token
async function createSession(ctx: any, userId: any): Promise<string> {
  const token = generateSessionToken();
  const now = Date.now();
  await ctx.db.insert("sessions", {
    token,
    userId,
    createdAt: now,
    expiresAt: now + SESSION_DURATION_MS,
  });
  return token;
}

// ─── Email OTP ───

// Límites anti-abuso
const OTP_MAX_SENDS_PER_HOUR = 5;   // máx. emails de código por email y hora
const OTP_MAX_ATTEMPTS = 5;         // máx. intentos de verificación por código
const OTP_DURATION_MS = 10 * 60 * 1000; // el código caduca en 10 minutos

// Paso 1: solicitar código por email (action: el envío es un efecto no determinista)
export const solicitarCodigo = action({
  args: { email: v.string() },
  handler: async (ctx, args): Promise<{ ok: true; debugCode?: string }> => {
    const email = args.email.toLowerCase().trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new ConvexError({ code: "INVALID_EMAIL", message: "Email no válido" });
    }

    // Rate limiting: máx. 5 códigos por hora y email
    const recentCount: number = await ctx.runQuery(internal.authSimple.contarCodigosRecientes, { email });
    if (recentCount >= OTP_MAX_SENDS_PER_HOUR) {
      throw new ConvexError({
        code: "RATE_LIMITED",
        message: "Has pedido demasiados códigos. Espera una hora e inténtalo de nuevo.",
      });
    }

    // Generar código de 6 dígitos con aleatoriedad criptográfica
    const randArray = new Uint32Array(1);
    crypto.getRandomValues(randArray);
    const code = String(100000 + (randArray[0] % 900000));
    const now = Date.now();

    // Persistir (invalida códigos anteriores)
    await ctx.runMutation(internal.authSimple.guardarCodigo, {
      email,
      code,
      expiresAt: now + OTP_DURATION_MS,
      createdAt: now,
    });

    // Enviar por email (respuesta genérica: no revela si el email existe)
    try {
      const { error } = await getResend().emails.send({
        from: FROM,
        to: email,
        subject: "Tu código de acceso — RecurreTuMulta.online",
        html: `
<div style="font-family:Arial,sans-serif;max-width:480px;margin:0 auto;padding:24px;">
  <h2 style="color:#111;">Tu código de acceso</h2>
  <p>Usa este código para entrar en RecurreTuMulta.online. Caduca en 10 minutos.</p>
  <p style="font-size:32px;font-weight:bold;letter-spacing:8px;color:#111;">${code}</p>
  <p style="color:#666;font-size:12px;">Si no has sido tú, ignora este correo.</p>
</div>`.trim(),
        text: `Tu código de acceso a RecurreTuMulta.online es: ${code}. Caduca en 10 minutos. Si no has sido tú, ignora este correo.`,
      });
      if (error) {
        console.error("[auth] Error enviando código OTP:", error);
      }
    } catch (e) {
      console.error("[auth] Excepción enviando código OTP:", e);
    }

    return { ok: true };
  },
});

// Query interna: contar códigos generados en la última hora (rate limiting)
export const contarCodigosRecientes = internalQuery({
  args: { email: v.string() },
  handler: async (ctx, args): Promise<number> => {
    const codes = await ctx.db
      .query("emailCodes")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .collect();
    const oneHourAgo = Date.now() - 60 * 60 * 1000;
    return codes.filter((c) => (c.createdAt ?? 0) >= oneHourAgo).length;
  },
});

// Mutación interna: invalida códigos anteriores y guarda el nuevo
export const guardarCodigo = internalMutation({
  args: {
    email: v.string(),
    code: v.string(),
    expiresAt: v.number(),
    createdAt: v.number(),
  },
  handler: async (ctx, args): Promise<void> => {
    const oldCodes = await ctx.db
      .query("emailCodes")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .collect();
    for (const c of oldCodes) {
      if (!c.used) {
        await ctx.db.patch(c._id, { used: true });
      }
    }
    await ctx.db.insert("emailCodes", {
      email: args.email,
      code: args.code,
      expiresAt: args.expiresAt,
      used: false,
      attempts: 0,
      createdAt: args.createdAt,
    });
  },
});

// Paso 2: verificar código y crear sesión
export const verificarCodigo = mutation({
  args: { email: v.string(), code: v.string() },
  handler: async (ctx, args) => {
    const email = args.email.toLowerCase().trim();
    const code = args.code.trim();
    const now = Date.now();

    const record = await ctx.db
      .query("emailCodes")
      .withIndex("by_email", (q) => q.eq("email", email))
      .order("desc")
      .first();

    // Respuesta genérica para no dar pistas a atacantes
    const invalid = () =>
      new ConvexError({ code: "INVALID_CODE", message: "Código incorrecto o caducado" });

    if (!record || record.used || record.expiresAt < now) {
      throw invalid();
    }
    if ((record.attempts ?? 0) >= OTP_MAX_ATTEMPTS) {
      // Bloquear el código tras demasiados intentos fallidos
      await ctx.db.patch(record._id, { used: true });
      throw invalid();
    }
    if (record.code !== code) {
      await ctx.db.patch(record._id, { attempts: (record.attempts ?? 0) + 1 });
      throw invalid();
    }

    // Código correcto: marcar como usado e invalidar el resto de este email
    await ctx.db.patch(record._id, { used: true });
    const others = await ctx.db
      .query("emailCodes")
      .withIndex("by_email", (q) => q.eq("email", email))
      .collect();
    for (const c of others) {
      if (!c.used && c._id !== record._id) {
        await ctx.db.patch(c._id, { used: true });
      }
    }

    // Buscar o crear usuario
    const user = await findOrCreateUser(ctx, email);

    // Crear sesión
    const token = await createSession(ctx, user._id);

    return {
      token,
      user: { _id: user._id, email: user.email, name: user.name ?? "" },
    };
  },
});

// ─── Google OAuth ───

// Devuelve la URL de autorización de Google
export const googleAuthUrl = query({
  args: { redirectUri: v.string() },
  handler: async (_ctx, args) => {
    const clientId = process.env.AUTH_GOOGLE_ID;
    if (!clientId) {
      return null;
    }
    const params = new URLSearchParams({
      client_id: clientId,
      redirect_uri: args.redirectUri,
      response_type: "code",
      scope: "openid email profile",
      access_type: "offline",
      prompt: "select_account",
    });
    return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
  },
});

// Intercambia el código de Google por una sesión (llamado desde el callback HTTP)
export const googleCallback = action({
  args: { code: v.string(), redirectUri: v.string() },
  handler: async (ctx, args) => {
    const clientId = process.env.AUTH_GOOGLE_ID;
    const clientSecret = process.env.AUTH_GOOGLE_SECRET;
    if (!clientId || !clientSecret) {
      throw new ConvexError({ code: "NO_GOOGLE", message: "Google no configurado" });
    }

    // Intercambiar código por tokens
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code: args.code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: args.redirectUri,
        grant_type: "authorization_code",
      }).toString(),
    });
    if (!tokenRes.ok) {
      throw new ConvexError({ code: "GOOGLE_TOKEN", message: "No se pudo validar con Google" });
    }
    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;
    if (!accessToken) {
      throw new ConvexError({ code: "GOOGLE_TOKEN", message: "Google no devolvió token" });
    }

    // Obtener datos del usuario
    const userRes = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (!userRes.ok) {
      throw new ConvexError({ code: "GOOGLE_USER", message: "No se pudo obtener datos de Google" });
    }
    const googleUser = await userRes.json();
    const email = (googleUser.email ?? "").toLowerCase().trim();
    const name = googleUser.name ?? "";
    if (!email) {
      throw new ConvexError({ code: "GOOGLE_USER", message: "Google no devolvió email" });
    }

    // Buscar o crear usuario y sesión (vía mutación interna)
    const result: { token: string; user: any } = await ctx.runMutation(
      internal.authSimple.crearSesionGoogle,
      { email, name }
    );
    return result;
  },
});

// Mutación interna: crea usuario/sesión tras Google (llamada desde googleCallback)
export const crearSesionGoogle = internalMutation({
  args: { email: v.string(), name: v.string() },
  handler: async (ctx, args) => {
    const user = await findOrCreateUser(ctx, args.email, args.name);
    // Actualizar nombre si viene de Google y no lo teníamos
    if (args.name && !user.name) {
      await ctx.db.patch(user._id, { name: args.name });
    }
    const token = await createSession(ctx, user._id);
    return {
      token,
      user: { _id: user._id, email: user.email as string, name: (user.name as string) ?? "" },
    };
  },
});

// ─── Sesión ───

// Obtener usuario actual a partir del token
export const obtenerUsuarioActual = query({
  args: { sessionToken: v.optional(v.string()) },
  handler: async (ctx, args) => {
    if (!args.sessionToken) return null;
    const session = await ctx.db
      .query("sessions")
      .withIndex("by_token", (q) => q.eq("token", args.sessionToken!))
      .unique();
    if (!session || session.expiresAt < Date.now()) return null;
    const user = await ctx.db.get(session.userId);
    if (!user) return null;
    // Devolver el documento completo del usuario
    return user;
  },
});

// Cerrar sesión
export const cerrarSesion = mutation({
  args: { sessionToken: v.string() },
  handler: async (ctx, args) => {
    const session = await ctx.db
      .query("sessions")
      .withIndex("by_token", (q) => q.eq("token", args.sessionToken))
      .unique();
    if (session) {
      await ctx.db.delete(session._id);
    }
    return { ok: true };
  },
});

// ─── Helper para funciones protegidas ───
// Uso: const user = await requireUser(ctx, args.sessionToken);

export async function requireUser(ctx: any, sessionToken?: string) {
  if (!sessionToken) {
    throw new ConvexError({ code: "UNAUTHENTICATED", message: "Debes iniciar sesión" });
  }
  const session = await ctx.db
    .query("sessions")
    .withIndex("by_token", (q: any) => q.eq("token", sessionToken))
    .unique();
  if (!session || session.expiresAt < Date.now()) {
    throw new ConvexError({ code: "UNAUTHENTICATED", message: "Sesión caducada, vuelve a entrar" });
  }
  const user = await ctx.db.get(session.userId);
  if (!user) {
    throw new ConvexError({ code: "UNAUTHENTICATED", message: "Usuario no encontrado" });
  }
  return user;
}

// Versión que no lanza: devuelve el usuario o null (para rate limiting opcional,
// análisis anónimo, etc.)
export async function getUserFromSession(ctx: any, sessionToken?: string) {
  if (!sessionToken) return null;
  try {
    const session = await ctx.db
      .query("sessions")
      .withIndex("by_token", (q: any) => q.eq("token", sessionToken))
      .unique();
    if (!session || session.expiresAt < Date.now()) return null;
    return await ctx.db.get(session.userId);
  } catch {
    return null;
  }
}
