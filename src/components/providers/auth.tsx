import { useEffect, useState, type ReactNode } from "react";
import {
  getConvexClient,
  getConvexProvider,
  isConvexReady,
  loadConvex,
} from "./convex-lazy.tsx";

/**
 * Provider raíz diferido.
 *
 * convex/react (~85 KB) NO va en el bundle inicial: se carga en
 * requestIdleCallback tras el primer paint. Usa el mismo cliente
 * singleton que LazyConvexProvider (un solo WebSocket).
 *
 * Los componentes del primer render que necesiten Convex deben ser
 * lazy (ya lo son: AnalizadorMulta, etc.) o envolverse con
 * LazyConvexProvider.
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  const [, bump] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const onReady = () => {
      if (!cancelled) bump((x) => x + 1);
    };
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const w = window as Window & {
        requestIdleCallback: (cb: () => void) => number;
        cancelIdleCallback?: (id: number) => void;
      };
      const id = w.requestIdleCallback(() => {
        loadConvex().then(onReady);
      });
      return () => {
        cancelled = true;
        w.cancelIdleCallback?.(id);
      };
    }
    const t = setTimeout(() => {
      loadConvex().then(onReady);
    }, 1);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, []);

  const Provider = getConvexProvider();
  const client = getConvexClient();
  if (!isConvexReady() || !Provider || !client) return <>{children}</>;
  return <Provider client={client}>{children}</Provider>;
}
