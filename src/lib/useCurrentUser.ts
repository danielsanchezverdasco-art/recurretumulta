import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { getSessionToken } from "./authSimple.ts";

// Hook que obtiene el usuario actual usando el sistema de auth simple.
export function useCurrentUser() {
  const token = getSessionToken();
  return useQuery(
    api.users.getCurrentUser,
    token ? { sessionToken: token } : "skip"
  );
}
