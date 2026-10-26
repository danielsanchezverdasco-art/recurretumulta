import type React from "react";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle2, AlertCircle, Loader2, MailX } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import { useSeo } from "@/hooks/use-seo.ts";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import { Button } from "@/components/ui/button.tsx";
import { LazyConvexProvider } from "@/components/providers/convex-lazy.tsx";

type Estado = "cargando" | "ok" | "error";

function AlertasBajaPageSinProvider() {
  useSeo({
    title: "Darse de baja de las alertas de precio",
    description:
      "Date de baja en 1 clic de las alertas de bajadas de precio (Cazachollos) de RecurreTuMulta.online.",
    canonical: "/alertas/baja",
    noindex: true, // página de utilidad solo accesible desde el email
  });

  const [params] = useSearchParams();
  const token = params.get("token") ?? "";
  const darDeBaja = useMutation(api.alertasPrecio.darseDeBaja);
  const [estado, setEstado] = useState<Estado>("cargando");
  const [email, setEmail] = useState("");
  const [servidorCaido, setServidorCaido] = useState(false);

  useEffect(() => {
    if (!token) {
      setEstado("error");
      return;
    }
    let cancelado = false;
    // Si el backend no responde (red caída, etc.), no dejar el spinner eterno
    const timeout = setTimeout(() => {
      if (!cancelado) {
        setServidorCaido(true);
        setEstado("error");
      }
    }, 12000);
    darDeBaja({ token })
      .then((res) => {
        if (cancelado) return;
        clearTimeout(timeout);
        setEmail(res.email);
        setEstado("ok");
      })
      .catch(() => {
        if (cancelado) return;
        clearTimeout(timeout);
        setEstado("error");
      });
    return () => {
      cancelado = true;
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SharedNavbar />
      <div className="pt-[57px]">
        <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 py-16 text-center">
          {estado === "cargando" && (
            <>
              <Loader2 className="h-10 w-10 animate-spin text-amber-600" />
              <p className="mt-4 font-bold text-gray-900">Procesando tu baja…</p>
            </>
          )}

          {estado === "ok" && (
            <>
              <MailX className="h-12 w-12 text-gray-400" />
              <h1 className="mt-4 text-2xl font-black text-gray-900">Baja confirmada</h1>
              <p className="mt-2 text-sm text-gray-600">
                {email ? (
                  <>
                    El email <strong>{email}</strong> ya no recibirá alertas de bajadas de precio.
                  </>
                ) : (
                  "Ya no recibirás alertas de bajadas de precio."
                )}{" "}
                Si ha sido un error, puedes activar la alerta de nuevo desde la ficha del coche.
              </p>
              <Link to="/comparador-coches/" className="mt-6">
                <Button className="rounded-xl bg-amber-500 font-bold text-white hover:bg-amber-600">
                  Volver al comparador
                </Button>
              </Link>
            </>
          )}

          {estado === "error" && (
            <>
              <AlertCircle className="h-12 w-12 text-red-500" />
              <h1 className="mt-4 text-2xl font-black text-gray-900">Enlace no válido</h1>
              <p className="mt-2 text-sm text-gray-600">
                {servidorCaido ? (
                  <>
                    No hemos podido contactar con el servidor para procesar tu baja. Comprueba tu
                    conexión e inténtalo de nuevo en unos segundos.
                  </>
                ) : (
                  <>
                    Este enlace de baja no es válido o ya se ha usado. Si sigues recibiendo
                    alertas y quieres darte de baja, responde a cualquiera de nuestros emails.
                  </>
                )}
              </p>
              <Link
                to="/comparador-coches/"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-amber-700 underline"
              >
                <CheckCircle2 className="h-4 w-4" /> Ir al comparador
              </Link>
            </>
          )}
        </main>
      </div>
      <SharedFooter editorial={false} />
    </div>
  );
}

// 26/10/2026 (fix menú móvil fichas): usa hooks de convex/react; se autoenvuelve en
// LazyConvexProvider para no depender del provider raíz diferido («Could not find Convex client»).
export default function AlertasBajaPage() {
  return (
    <LazyConvexProvider>
      <AlertasBajaPageSinProvider />
    </LazyConvexProvider>
  );
}
