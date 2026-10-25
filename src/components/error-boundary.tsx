import { Component, type ErrorInfo, type ReactNode } from "react";
import { AlertTriangleIcon, RefreshCwIcon } from "lucide-react";
import {
  ErrorState,
  ErrorStateHeader,
  ErrorStateMedia,
  ErrorStateTitle,
  ErrorStateDescription,
  ErrorStateContent,
} from "@/components/ui/error-state.tsx";
import { Button } from "@/components/ui/button.tsx";

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

// Red de seguridad de toda la app: si cualquier componente lanza un error
// inesperado durante el renderizado, mostramos una pantalla amigable en vez
// de dejar la pantalla en blanco.
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[ErrorBoundary] Error inesperado en la interfaz:", error, info.componentStack);
    // 20/10/2026 (arreglos borrador 2 — fallo de navegación): si el error es
    // un chunk diferido que no cargó (despliegue nuevo, chunk caducado o
    // ausente), la salida es recargar LA URL ACTUAL una sola vez: al
    // recargar, el navegador pide la página pedida y su HTML prerenderizado.
    // Antes, el boundary repintaba el HTML prerenderizado DE LA PÁGINA DE
    // ENTRADA y el usuario se quedaba viendo el listado anterior aunque la
    // URL ya era la de la ficha («la ficha solo sale tras recargar»).
    const msg = `${error?.name ?? ""} ${error?.message ?? ""}`;
    if (/Loading chunk|dynamically imported module|Failed to fetch|Importing a module script failed/i.test(msg)) {
      try {
        const K = "rtm-reload-chunk";
        const last = Number(sessionStorage.getItem(K) ?? 0);
        if (Date.now() - last > 15000) {
          sessionStorage.setItem(K, String(Date.now()));
          window.location.reload();
        }
      } catch {
        /* sessionStorage no disponible: se muestra la pantalla de error */
      }
    }
  }

  handleReload = () => {
    // Recargar la URL actual (antes mandaba a la portada y se perdía la ficha).
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      const w = window as unknown as {
        __HTML_PRERENDER__?: string;
        __SEO_INICIAL__?: { path: string };
      };
      const prerender = w.__HTML_PRERENDER__;
      // El HTML prerenderizado guardado es el de la página de ENTRADA: solo
      // sirve de red si el error ocurre en esa misma página (montaje
      // inicial). Tras una navegación, repintarlo dejaría al usuario viendo
      // la página anterior con la URL de la nueva.
      const esPaginaEntrada =
        !w.__SEO_INICIAL__?.path ||
        window.location.pathname === w.__SEO_INICIAL__.path ||
        window.location.pathname + "/" === w.__SEO_INICIAL__.path;
      if (prerender && esPaginaEntrada) {
        // Conserva el contenido prerenderizado (h1, texto) para usuarios y buscadores.
        return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: prerender }} />;
      }
      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-6">
          <ErrorState className="max-w-md border-none">
            <ErrorStateHeader>
              <ErrorStateMedia variant="icon">
                <AlertTriangleIcon />
              </ErrorStateMedia>
              <ErrorStateTitle>Algo salió mal</ErrorStateTitle>
              <ErrorStateDescription>
                Ha ocurrido un error inesperado. Prueba a recargar la página; si el problema persiste,
                escríbenos desde la página de contacto.
              </ErrorStateDescription>
            </ErrorStateHeader>
            <ErrorStateContent>
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold" onClick={this.handleReload}>
                <RefreshCwIcon className="w-4 h-4 mr-2" />
                Recargar página
              </Button>
            </ErrorStateContent>
          </ErrorState>
        </div>
      );
    }

    return this.props.children;
  }
}
