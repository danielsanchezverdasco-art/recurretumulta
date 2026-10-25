import { convexAuth } from "@convex-dev/auth/server";
import { Email } from "@convex-dev/auth/providers/Email";
import Google from "@auth/core/providers/google";
import { Resend } from "resend";

// Cliente Resend creado de forma perezosa: instanciarlo a nivel de módulo
// rompería el análisis del bundle cuando la variable de entorno aún no existe.
function getResend() {
  return new Resend(process.env.AUTH_RESEND_KEY);
}

// Remitente configurable: en producción es login@recurretumulta.online
// (requiere el dominio verificado en Resend). Para pruebas sin dominio
// verificado se usa el remitente de test de Resend:
// (en modo test solo entrega al email de la cuenta de Resend).
const FROM =
  process.env.AUTH_EMAIL_FROM ?? "RecurreTuMulta.online <onboarding@resend.dev>";

// Google OAuth solo se activa si hay credenciales configuradas.
const googleProvider =
  process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET
    ? [
        Google({
          clientId: process.env.AUTH_GOOGLE_ID,
          clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
      ]
    : [];

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [
    Email({
      id: "email-otp",
      from: FROM,
      // El código caduca en 15 minutos
      maxAge: 15 * 60,
      // Código de 6 dígitos en lugar del token largo por defecto
      async generateVerificationToken() {
        return String(Math.floor(100000 + Math.random() * 900000));
      },
      async sendVerificationRequest({ identifier: email, token }) {
        await getResend().emails.send({
          from: FROM,
          to: email,
          subject: "Tu código de acceso — RecurreTuMulta.online",
          html: `
<div style="font-family:Arial,sans-serif;max-width:480px;margin:0 auto;padding:24px;">
  <h2 style="color:#111;">Tu código de acceso</h2>
  <p>Usa este código para entrar en RecurreTuMulta.online. Caduca en 15 minutos.</p>
  <p style="font-size:32px;font-weight:bold;letter-spacing:8px;color:#111;">${token}</p>
  <p style="color:#666;font-size:12px;">Si no has sido tú, ignora este correo.</p>
</div>`.trim(),
          text: `Tu código de acceso a RecurreTuMulta.online es: ${token}. Caduca en 15 minutos. Si no has sido tú, ignora este correo.`,
        });
      },
    }),
    // Login con Google (OAuth). Requiere AUTH_GOOGLE_ID y AUTH_GOOGLE_SECRET
    // en Convex y registrar como URI de redirección autorizada en Google Cloud:
    // https://handsome-rhinoceros-259.eu-west-1.convex.site/api/auth/callback/google
    ...googleProvider,
  ],
});
