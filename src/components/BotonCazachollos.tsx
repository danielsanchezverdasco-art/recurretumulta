import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bell, X, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api.js";

interface Props {
  cocheId: string;
  nombre: string;
  precioActual?: number | null;
}

import { fmtEur } from "@/lib/formato.ts";

type Estado = "cerrado" | "form" | "enviando" | "ok" | "ya" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function fmtPrecio(n: number): string {
  return fmtEur(n); // 18/10/2026: «8.299 €» (es-ES no agrupa 4 cifras)
}

/**
 * Cazachollos: botón "Avísame si baja" en la ficha del coche.
 * Abre un modal donde el usuario deja su Gmail (+ precio objetivo opcional)
 * con consentimiento GDPR. Llama a la mutación pública alertasPrecio:suscribirse.
 */
export default function BotonCazachollos({ cocheId, nombre, precioActual }: Props) {
  const [estado, setEstado] = useState<Estado>("cerrado");
  const [email, setEmail] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [acepto, setAcepto] = useState(false);
  const [mensajeError, setMensajeError] = useState("");
  const suscribirse = useMutation(api.alertasPrecio.suscribirse);

  // Cerrar con Escape y bloquear el scroll del fondo mientras el modal está abierto
  useEffect(() => {
    if (estado === "cerrado" || estado === "ok" || estado === "ya") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setEstado("cerrado");
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [estado]);

  function abrir() {
    setEstado("form");
    setMensajeError("");
  }

  async function onConfirmar() {
    const limpio = email.trim();
    if (!EMAIL_RE.test(limpio)) {
      setMensajeError("Revisa el email: no parece válido.");
      setEstado("error");
      return;
    }
    const objNum = objetivo.trim() === "" ? undefined : Number(objetivo.replace(/\./g, "").replace(",", "."));
    if (objNum !== undefined && (!Number.isFinite(objNum) || objNum <= 0)) {
      setMensajeError("El precio objetivo no es válido.");
      setEstado("error");
      return;
    }
    if (!acepto) {
      setMensajeError("Tienes que aceptar recibir los avisos para activar la alerta.");
      setEstado("error");
      return;
    }
    setEstado("enviando");
    setMensajeError("");
    try {
      const res = await suscribirse({ email: limpio, cocheId, precioObjetivo: objNum });
      setEstado(res.yaSuscrito ? "ya" : "ok");
    } catch {
      setMensajeError("No se pudo activar la alerta. Inténtalo de nuevo en unos segundos.");
      setEstado("error");
    }
  }

  const modalAbierto = estado === "form" || estado === "enviando" || estado === "error";

  return (
    <>
      <button
        type="button"
        onClick={abrir}
        className="inline-flex items-center gap-1.5 rounded-xl bg-amber-100 px-3 py-2 text-sm font-bold text-amber-900 transition hover:bg-amber-200"
        aria-haspopup="dialog"
      >
        <Bell className="h-4 w-4" />
        Avísame si baja
      </button>

      {modalAbierto && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label={`Alerta de bajada de precio del ${nombre}`}
          onClick={() => estado === "form" && setEstado("cerrado")}
        >
          <div
            className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-extrabold text-gray-900">
                  🔔 Cazachollos
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Te avisamos por email cuando el <strong>{nombre}</strong> baje de precio.
                  {precioActual != null && (
                    <> Hoy parte de <strong>{fmtPrecio(precioActual)}</strong>.</>
                  )}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setEstado("cerrado")}
                className="rounded-lg p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                aria-label="Cerrar"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {estado === "error" && mensajeError && (
              <p className="mt-4 flex items-start gap-2 rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-700" role="alert">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                {mensajeError}
              </p>
            )}

            <label className="mt-4 block">
              <span className="text-sm font-bold text-gray-900">Tu email</span>
              <input
                type="email"
                inputMode="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tucorreo@gmail.com"
                className="mt-1 w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
              />
            </label>

            <label className="mt-3 block">
              <span className="text-sm font-bold text-gray-900">
                Avísame solo si baja de <span className="font-normal text-gray-500">(opcional)</span>
              </span>
              <div className="relative mt-1">
                <input
                  type="text"
                  inputMode="decimal"
                  value={objetivo}
                  onChange={(e) => setObjetivo(e.target.value.replace(/[^0-9.,]/g, ""))}
                  placeholder="p. ej. 25000"
                  className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 pr-10 text-sm text-gray-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                />
                <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-400">
                  €
                </span>
              </div>
            </label>

            <label className="mt-4 flex cursor-pointer items-start gap-2.5 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={acepto}
                onChange={(e) => setAcepto(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 accent-amber-600"
              />
              <span>
                Acepto recibir avisos de bajadas de precio de este modelo por email. Puedo darme
                de baja cuando quiera. Ver{" "}
                <Link to="/privacidad/" className="font-bold text-amber-700 underline">
                  política de privacidad
                </Link>
                .
              </span>
            </label>

            <button
              type="button"
              onClick={onConfirmar}
              disabled={estado === "enviando"}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-3 text-sm font-extrabold text-white transition hover:bg-amber-600 disabled:opacity-60"
            >
              {estado === "enviando" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Activando alerta…
                </>
              ) : (
                <>
                  <Bell className="h-4 w-4" />
                  Activar alerta
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {(estado === "ok" || estado === "ya") && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label="Alerta activada"
          onClick={() => setEstado("cerrado")}
        >
          <div
            className="w-full max-w-md rounded-3xl bg-white p-6 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500" />
            <h3 className="mt-3 text-lg font-extrabold text-gray-900">¡Listo! Te avisaremos.</h3>
            <p className="mt-1 text-sm text-gray-600">
              {estado === "ya"
                ? "Este email ya tenía activa la alerta para este modelo."
                : `Cuando el ${nombre} baje de precio te mandamos un email. Sin spam: solo bajadas de este modelo.`}
            </p>
            <button
              type="button"
              onClick={() => setEstado("cerrado")}
              className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-gray-900 px-4 py-3 text-sm font-extrabold text-white transition hover:bg-gray-700"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
