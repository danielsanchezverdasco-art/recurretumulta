import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAction } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import { toast } from "sonner";

/* ── Verificación post-pago Stripe (fallback sin webhook) ───────────── */
// Extraído de Index.tsx (07/10/2026, PageSpeed): el `useAction` de convex/react
// metía todo el cliente Convex en el chunk inicial de la portada. Este
// componente solo se carga cuando la URL trae ?pago= (vuelta de Stripe),
// que es <0,1% de las visitas. El 99,9% no descarga convex/react en la home.
export default function VerificadorPago() {
  const [searchParams, setSearchParams] = useSearchParams();
  const verifySessionSinRegistro = useAction(api.payments.verifySessionSinRegistro);

  useEffect(() => {
    const pago = searchParams.get("pago");
    const sessionId = searchParams.get("session_id");
    if (pago === "ok" && sessionId) {
      verifySessionSinRegistro({ sessionId }).
      then((result) => {
        if (result.ok) {
          toast.success("¡Pago completado! Te hemos enviado el PDF a tu email.", { duration: 8000 });
        }
      }).
      catch(() => {
        // Silencioso — el webhook puede haberlo procesado ya
      }).finally(() => {
        // Limpiar los parámetros de la URL para no re-verificar en recarga
        setSearchParams({}, { replace: true });
      });
    } else if (pago === "cancelado") {
      toast.info("Pago cancelado. Puedes intentarlo de nuevo cuando quieras.");
      setSearchParams({}, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
