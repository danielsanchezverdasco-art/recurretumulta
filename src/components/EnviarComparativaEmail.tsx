import type React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AlertCircle, CheckCircle2, Mail, Send } from "lucide-react";
import { useAction } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import { getAnonymousFingerprint } from "@/lib/analisis-libre.ts";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { LazyConvexProvider } from "@/components/providers/convex-lazy.tsx";

export interface FilaEmail {
  label: string;
  valorA: string;
  valorB: string;
  ganador: "a" | "b" | "empate";
}

type Estado = "idle" | "enviando" | "ok" | "error";

/**
 * Bloque discreto bajo el resultado de un comparador: "¿Te lo enviamos por
 * email?". Envía el resumen de la comparativa (ganador por apartado y
 * veredicto) a través de la action convex/comparadorEmail.ts.
 * Email y privacidad se validan igual que en NewsletterSignup.
 */
function EnviarComparativaEmailSinProvider({
  tipo,
  nombreA,
  nombreB,
  filas,
  veredicto,
}: {
  tipo: "coches" | "motos" | "patinetes";
  nombreA: string;
  nombreB: string;
  filas: FilaEmail[];
  veredicto: string;
}) {
  const [email, setEmail] = useState("");
  const [privacidad, setPrivacidad] = useState(false);
  const [estado, setEstado] = useState<Estado>("idle");
  const [mensajeError, setMensajeError] = useState("");

  const enviar = useAction(api.comparadorEmail.enviarComparativa);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (estado === "enviando") return;
    const limpio = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(limpio)) {
      setMensajeError("Revisa el email: no parece válido.");
      setEstado("error");
      return;
    }
    if (!privacidad) {
      setMensajeError("Tienes que aceptar la política de privacidad para recibir el email.");
      setEstado("error");
      return;
    }
    setEstado("enviando");
    setMensajeError("");
    try {
      await enviar({
        email: limpio,
        fingerprint: getAnonymousFingerprint(),
        tipo,
        nombreA,
        nombreB,
        url: window.location.href,
        filas,
        veredicto,
      });
      setEstado("ok");
    } catch (err) {
      setMensajeError(
        err instanceof Error
          ? err.message.replace(/^.*?:\s*/, "")
          : "No se pudo enviar el email. Inténtalo de nuevo en unos segundos."
      );
      setEstado("error");
    }
  }

  if (estado === "ok") {
    return (
      <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-5 text-center" role="status">
        <CheckCircle2 className="mx-auto h-9 w-9 text-emerald-600" />
        <p className="mt-2 font-black text-gray-900">¡Enviado! Revisa tu bandeja</p>
        <p className="mt-1 text-sm text-gray-600">
          Te hemos mandado el resumen de {nombreA} vs {nombreB} a {email}.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100">
          <Mail className="h-5 w-5 text-red-600" />
        </div>
        <div>
          <p className="font-black text-gray-900">¿Te lo enviamos por email?</p>
          <p className="mt-0.5 text-sm text-gray-600">
            Recibe el resumen de esta comparativa (ganador por apartado y veredicto) en tu correo.
            Sin spam, solo este email.
          </p>
        </div>
      </div>
      <form onSubmit={onSubmit} className="mt-4 space-y-3" noValidate>
        <div className="grid gap-2 sm:grid-cols-[1fr_auto]">
          <Input
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={estado === "enviando"}
            aria-label="Email para recibir la comparativa"
            className="h-11 rounded-xl border-gray-300 bg-white text-gray-900 placeholder:text-gray-400"
          />
          <Button
            type="submit"
            disabled={estado === "enviando"}
            className="h-11 rounded-xl bg-red-600 px-6 font-bold text-white hover:bg-red-700"
          >
            {estado === "enviando" ? (
              "Enviando…"
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Enviarme la comparativa
              </>
            )}
          </Button>
        </div>
        <label className="flex cursor-pointer items-start gap-2 text-xs text-gray-600">
          <input
            type="checkbox"
            checked={privacidad}
            onChange={(e) => setPrivacidad(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 accent-red-600"
          />
          <span>
            He leído y acepto la{" "}
            <Link to="/privacidad/" className="font-bold text-red-600 underline">
              política de privacidad
            </Link>
            . Solo recibirás este email con tu comparativa.
          </span>
        </label>
        {estado === "error" && (
          <p className="flex items-start gap-1.5 text-xs font-semibold text-red-700" role="alert">
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
export default function EnviarComparativaEmail(props: React.ComponentProps<typeof EnviarComparativaEmailSinProvider>) {
  return (
    <LazyConvexProvider>
      <EnviarComparativaEmailSinProvider {...props} />
    </LazyConvexProvider>
  );
}
