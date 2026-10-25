import { lazy, Suspense } from "react";
import { AuthProvider } from "./auth.tsx";
import { ThemeProvider } from "./theme.tsx";

const Toaster = lazy(() =>
  import("../ui/sonner").then((m) => ({ default: m.Toaster }))
);

export function DefaultProviders({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Suspense fallback={null}>
          <Toaster />
        </Suspense>
        {children}
      </ThemeProvider>
    </AuthProvider>
  );
}
