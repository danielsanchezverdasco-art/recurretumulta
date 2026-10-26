import type React from "react";
import { useEffect, useRef } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import { LazyConvexProvider } from "@/components/providers/convex-lazy.tsx";

/* ── Sincroniza el progreso de la caza con el ranking (Convex) ───────── */
// Extraído de CazaMonosContext (07/10/2026, PageSpeed): el `useMutation` metía
// convex/react en el chunk inicial de TODAS las páginas. Este componente solo
// se monta cuando el usuario ya cazó ≥1 mono. Throttle: máximo 1 llamada/5s.
// Silencioso: si el backend no responde, el juego local sigue igual.
function ScoreReporterSinProvider({ total, apodo, uuid }: {
  total: number; apodo: string; uuid: string;
}) {
  const reportScore = useMutation(api.cazaMonos.reportScore);
  const ultimoEnvio = useRef(0);
  const timerEnvio = useRef<number | null>(null);
  const ultimoEstado = useRef({ total, apodo, uuid });
  ultimoEstado.current = { total, apodo, uuid };

  useEffect(() => {
    if (total === 0) return;
    const enviar = () => {
      ultimoEnvio.current = Date.now();
      timerEnvio.current = null;
      const { total: t, apodo: a, uuid: u } = ultimoEstado.current;
      reportScore({ hunterId: u, nickname: a || undefined, found: t }).catch(() => {});
    };
    const espera = 5000 - (Date.now() - ultimoEnvio.current);
    if (espera <= 0) {
      if (timerEnvio.current) window.clearTimeout(timerEnvio.current);
      enviar();
    } else if (timerEnvio.current == null) {
      timerEnvio.current = window.setTimeout(enviar, espera);
    }
    return () => {
      if (timerEnvio.current) window.clearTimeout(timerEnvio.current);
    };
  }, [total, uuid, apodo, reportScore]);

  return null;
}

// 26/10/2026 (fix menú móvil fichas): usa hooks de convex/react; se autoenvuelve en
// LazyConvexProvider para no depender del provider raíz diferido («Could not find Convex client»).
export default function ScoreReporter(props: React.ComponentProps<typeof ScoreReporterSinProvider>) {
  return (
    <LazyConvexProvider>
      <ScoreReporterSinProvider {...props} />
    </LazyConvexProvider>
  );
}
