import { useEffect, useState, type ReactNode } from "react";
import { esAutomatizado, trasCarga, type TipoFicha } from "@/lib/audiencia/cliente.ts";

/** Pinta children solo en el navegador del usuario, con la página ya cargada.
 *  En el prerender y en bots no pinta nada (ni descarga el chunk). */
export function Diferido({ children }: { children: ReactNode }) {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    if (esAutomatizado()) return;
    return trasCarga(() => setOk(true));
  }, []);
  return ok ? <>{children}</> : null;
}

/** Cuenta la visita de la ficha (1 por sesión) tras la carga, sin bloquear. */
export function useVisitaFicha(tipo: TipoFicha, slug: string) {
  useEffect(() => {
    if (esAutomatizado()) return;
    let vivo = true;
    let cancelar = () => {};
    cancelar = trasCarga(() => {
      import("@/lib/audiencia/visita.ts").then((m) => {
        if (vivo) cancelar = m.contarVisita(tipo, slug);
      });
    });
    return () => {
      vivo = false;
      cancelar();
    };
  }, [tipo, slug]);
}
