import { useEffect, useState, type ComponentType, type ReactNode } from "react";
import type { ConvexReactClient } from "convex/react";

/**
 * Cliente Convex compartido (singleton).
 *
 * Tanto el AuthProvider diferido de la raíz como los LazyConvexProvider
 * de las rutas lazy usan ESTA MISMA instancia: un solo WebSocket en
 * toda la app, aunque haya providers anidados.
 *
 * NOTA (08/10/2026): los componentes que usan useQuery/useMutation de
 * "convex/react" (NO de @tanstack/react-query) necesitan un ConvexProvider
 * ancestro. Como el provider raíz se carga diferido (requestIdleCallback
 * para sacarlo del bundle inicial), las rutas lazy se envuelven con
 * LazyConvexProvider para no depender del timing del provider raíz.
 */
const convexUrl = import.meta.env.VITE_CONVEX_URL ?? "http://localhost:3000";

type ConvexProviderComponent = ComponentType<{
  client: ConvexReactClient;
  children?: ReactNode;
}>;

let clientSingleton: ConvexReactClient | null = null;
let providerSingleton: ConvexProviderComponent | null = null;
let loadPromise: Promise<void> | null = null;

export function loadConvex(): Promise<void> {
  if (!loadPromise) {
    loadPromise = import("convex/react").then((m) => {
      if (!clientSingleton) {
        clientSingleton = new m.ConvexReactClient(convexUrl);
      }
      providerSingleton =
        m.ConvexProvider as unknown as ConvexProviderComponent;
    });
  }
  return loadPromise;
}

export function getConvexClient(): ConvexReactClient | null {
  return clientSingleton;
}

export function getConvexProvider(): ConvexProviderComponent | null {
  return providerSingleton;
}

export function isConvexReady(): boolean {
  return clientSingleton !== null && providerSingleton !== null;
}

/**
 * Provider Convex autónomo para rutas/componentes lazy.
 * No depende del AuthProvider raíz: carga convex/react bajo demanda
 * y comparte el mismo cliente singleton (un solo WebSocket).
 * Mientras carga, renderiza el fallback (null por defecto).
 */
export function LazyConvexProvider({
  children,
  fallback = null,
}: {
  children: ReactNode;
  fallback?: ReactNode;
}) {
  const [, bump] = useState(0);

  useEffect(() => {
    let cancelled = false;
    // Si el root ya lo cargó, no hay espera.
    loadConvex().then(() => {
      if (!cancelled) bump((x) => x + 1);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const Provider = getConvexProvider();
  const client = getConvexClient();
  if (!Provider || !client) return <>{fallback}</>;
  return <Provider client={client}>{children}</Provider>;
}
