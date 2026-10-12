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
  }

  handleReload = () => {
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
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
