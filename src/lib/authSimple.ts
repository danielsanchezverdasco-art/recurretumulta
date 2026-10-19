import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useCallback, useEffect } from "react";

const TOKEN_KEY = "rtm_session_token";

// ─── Token storage ───

export function getSessionToken(): string | null {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

export function setSessionToken(token: string): void {
  try {
    localStorage.setItem(TOKEN_KEY, token);
  } catch {}
}

export function clearSessionToken(): void {
  try {
    localStorage.removeItem(TOKEN_KEY);
  } catch {}
}

// ─── Hook principal ───

export function useAuthSimple() {
  const token = getSessionToken();
  const user = useQuery(api.authSimple.obtenerUsuarioActual, {
    sessionToken: token ?? undefined,
  });
  const cerrarSesionMutation = useMutation(api.authSimple.cerrarSesion);

  const isLoading = user === undefined;
  const isAuthenticated = !!user;

  // Si hay token pero el backend dice que no hay usuario, el token es inválido.
  // Lo limpiamos para que no cause rebotes ni fallos en el analizador.
  useEffect(() => {
    if (!isLoading && !user && token) {
      clearSessionToken();
    }
  }, [isLoading, user, token]);

  const logout = useCallback(async () => {
    const t = getSessionToken();
    if (t) {
      try {
        await cerrarSesionMutation({ sessionToken: t });
      } catch {}
      clearSessionToken();
    }
    // Recargar para limpiar el estado
    window.location.href = "/";
  }, [cerrarSesionMutation]);

  return {
    user: user ?? null,
    isLoading,
    isAuthenticated,
    sessionToken: token,
    logout,
  };
}

// ─── Helpers para llamadas autenticadas ───

// Añade el sessionToken a los args de una mutación/query protegida
export function withSession<T extends Record<string, any>>(args: T): T & { sessionToken?: string } {
  const token = getSessionToken();
  if (token) {
    return { ...args, sessionToken: token };
  }
  return args;
}
