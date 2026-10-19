// Captura silenciosa de enlaces de creador (?ref=CODIGO).
// Guarda el código en el navegador y lo aplica automáticamente en cuanto
// el usuario inicia sesión, sin necesidad de que lo escriba a mano.
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import { toast } from "sonner";
import { useCurrentUser } from "@/lib/useCurrentUser.ts";
import { useAuthSimple, withSession } from "@/lib/authSimple.ts";

const STORAGE_KEY = "rtm_ref_code";

export default function ReferralCapture() {
  const [searchParams] = useSearchParams();
  const { isAuthenticated } = useAuthSimple();
  const currentUser = useCurrentUser();
  const aplicarCodigo = useMutation(api.creadores.aplicarCodigo);
  const appliedRef = useRef(false);

  // Guardar el código de la URL (?ref=CODIGO) para poder aplicarlo más
  // tarde, incluso si el usuario todavía no ha iniciado sesión.
  useEffect(() => {
    const ref = searchParams.get("ref");
    if (ref && ref.trim()) {
      localStorage.setItem(STORAGE_KEY, ref.trim().toUpperCase());
    }
  }, [searchParams]);

  // En cuanto haya un usuario autenticado sin código ya aplicado, y exista
  // un código pendiente guardado, se aplica automáticamente.
  useEffect(() => {
    if (appliedRef.current) return;
    if (!isAuthenticated || currentUser === undefined || currentUser === null) return;
    if (currentUser.codigoCreadorUsado) return;
    const pending = localStorage.getItem(STORAGE_KEY);
    if (!pending) return;

    appliedRef.current = true;
    aplicarCodigo(withSession({ codigo: pending }))
      .then((result) => {
        toast.success(`¡Gracias por apoyar a ${result.nombre}!`);
        localStorage.removeItem(STORAGE_KEY);
      })
      .catch(() => {
        // Código inválido/inactivo — no molestamos al usuario, solo limpiamos
        localStorage.removeItem(STORAGE_KEY);
      });
  }, [isAuthenticated, currentUser, aplicarCodigo]);

  return null;
}
