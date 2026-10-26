import type React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Send, AlertCircle } from "lucide-react";
import { useMutation, useAction } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { FormSuccessCheck } from "@/components/motion.tsx";
import { LazyConvexProvider } from "@/components/providers/convex-lazy.tsx";

type Estado = "idle" | "enviando" | "ok" | "ya" | "error";

interface Props {
  /** Origen para analítica interna (ej: "blog-index", "articulo-motor", "comparador"). */
  origen?: string;
  /** Versión compacta para el final de artículos. */
  compact?: boolean;
  /** Textos opcionales de un post concreto; sin ellos se usa el texto común. */
  textos?: { newsletterTitulo?: string; newsletterTexto?: string; newsletterBaja?: string };
}

/**
 * Formulario de suscripción a "La semana del motor en 5 minutos".
 * Sin login: solo email + checkbox de privacidad obligatoria.
 */
function NewsletterSignupSinProvider({ origen = "web", compact = false, textos }: Props) {
  const [email, setEmail] = useState("");
  const [privacidad, setPrivacidad] = useState(false);
  const [estado, setEstado] = useState<Estado>("idle");
  const [mensajeError, setMensajeError] = useState("");

  const suscribir = useMutation(api.newsletterSubs.suscribir);
  const enviarBienvenida = useAction(api.newsletter.enviarBienvenida);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (estado === "enviando") return;
    const limpio = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(limpio)) {
      setMensajeError("Revisa el email: no parece válido.");
      setEstado("error");
      return;
    }
    if (!privacidad) {
      setMensajeError("Tienes que aceptar la política de privacidad para suscribirte.");
      setEstado("error");
      return;
    }
    setEstado("enviando");
    setMensajeError("");
    try {
      const res = await suscribir({ email: limpio, origen });
      // Email de bienvenida en segundo plano: no bloquea el OK si falla
      enviarBienvenida({ email: limpio }).catch(() => {});
      setEstado(res.yaSuscrito ? "ya" : "ok");
    } catch {
      setMensajeError("No se pudo completar la suscripción. Inténtalo de nuevo en unos segundos.");
      setEstado("error");
    }
  }

  if (estado === "ok" || estado === "ya") {
    return (
      <div
        className={`rounded-2xl border-2 border-emerald-200 bg-emerald-50 ${compact ? "p-4" : "p-6"} text-center`}
        role="status"
      >
        <FormSuccessCheck label="¡Suscripción confirmada!" />
        <p className="mt-1 text-sm text-gray-600">
          {estado === "ya"
            ? "Este email ya recibe La semana del motor cada domingo."
            : "Te hemos enviado un email de bienvenida. Cada domingo a las 18:00, la semana del motor en 5 minutos."}
        </p>
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 text-white ${compact ? "p-4" : "p-6"} shadow-lg shadow-red-200`}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20">
          <Mail className="h-5 w-5" />
        </div>
        <div>
          <p className={`font-black ${compact ? "text-base" : "text-lg"} leading-tight`}>
            {textos?.newsletterTitulo ?? "La semana del motor en 5 minutos"}
          </p>
          {textos?.newsletterTexto && (
            <p className="mt-0.5 text-sm text-white/85">{textos.newsletterTexto}</p>
          )}
        </div>
      </div>

      <form onSubmit={onSubmit} className="mt-4 space-y-3" noValidate>
        <Input
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={estado === "enviando"}
          aria-label="Email para la newsletter"
          className="h-11 rounded-xl border-white/30 bg-white text-gray-900 placeholder:text-gray-400"
        />
        <label className="flex cursor-pointer items-start gap-2 text-xs text-white/85">
          <input
            type="checkbox"
            checked={privacidad}
            onChange={(e) => setPrivacidad(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 accent-white"
          />
          <span>
            He leído y acepto la{" "}
            <Link to="/privacidad/" className="font-bold underline">
              política de privacidad
            </Link>
            {textos?.newsletterBaja ?? ". Podré darme de baja en 1 clic desde cualquier email."}
          </span>
        </label>
        <Button
          type="submit"
          disabled={estado === "enviando"}
          className="h-11 w-full rounded-xl bg-white font-black text-red-700 hover:bg-white/90"
        >
          {estado === "enviando" ? (
            "Suscribiendo…"
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Quiero la newsletter
            </>
          )}
        </Button>
        {estado === "error" && (
          <p className="flex items-start gap-1.5 text-xs font-semibold text-white" role="alert">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            {mensajeError}
          </p>
        )}
      </form>
    </div>
  );
}

// 26/10/2026 (fix menú móvil fichas): usa hooks de convex/react; se autoenvuelve en
// LazyConvexProvider para no depender del provider raíz diferido («Could not find Convex client»).
export default function NewsletterSignup(props: React.ComponentProps<typeof NewsletterSignupSinProvider>) {
  return (
    <LazyConvexProvider>
      <NewsletterSignupSinProvider {...props} />
    </LazyConvexProvider>
  );
}
