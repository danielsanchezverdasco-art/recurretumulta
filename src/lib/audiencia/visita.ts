// Cuenta UNA visita por ficha y sesión, después de la carga y sin bloquear nada.
import { api } from "@/convex/_generated/api.js";
import { getConvexClient, loadConvex } from "@/components/providers/convex-lazy.tsx";
import { esAutomatizado, idSesion, trasCarga, type TipoFicha } from "./cliente.ts";

export function contarVisita(tipo: TipoFicha, slug: string): () => void {
  if (esAutomatizado()) return () => {};
  return trasCarga(() => {
    const k = `rtm-visto:${tipo}:${slug}`;
    try {
      if (sessionStorage.getItem(k)) return;
      sessionStorage.setItem(k, "1");
    } catch {
      /* sin sessionStorage: el servidor deduplica igualmente por sesión */
    }
    loadConvex()
      .then(() => getConvexClient()?.mutation(api.audiencia.visita, { tipo, slug, sesion: idSesion() }))
      .catch(() => {
        /* backend sin desplegar o sin red: no se cuenta, sin errores visibles */
      });
  });
}
