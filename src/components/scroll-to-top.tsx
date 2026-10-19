import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Lleva el scroll al inicio de la página cada vez que cambia la ruta.
 * React Router no hace esto automáticamente, así que sin este componente
 * cada página nueva conserva la posición de scroll de la página anterior.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
