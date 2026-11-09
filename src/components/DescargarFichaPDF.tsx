import { Printer } from "lucide-react";
import "./ficha-pdf-print.css";

/**
 * Botón "Descargar ficha en PDF" para la ficha de coche.
 * Usa la hoja de impresión del navegador: el CSS (ficha-pdf-print.css)
 * deja visible solo la ficha técnica y window.print() abre el diálogo
 * (el usuario elige "Guardar como PDF"). Sin librerías externas.
 */
export default function DescargarFichaPDF({ nombre }: { nombre: string }) {
  const imprimir = () => {
    // El título del documento se usa como nombre del PDF al guardar
    const original = document.title;
    document.title = `Ficha técnica ${nombre}`;
    const restaurar = () => {
      document.title = original;
      window.removeEventListener("afterprint", restaurar);
    };
    window.addEventListener("afterprint", restaurar);
    window.print();
  };

  return (
    <button
      type="button"
      onClick={imprimir}
      className="descargar-ficha-pdf-btn inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-bold text-white shadow transition hover:bg-gray-700 active:scale-95"
      aria-label={`Descargar ficha técnica del ${nombre} en PDF`}
    >
      <Printer className="h-4 w-4" aria-hidden="true" />
      Descargar ficha en PDF
    </button>
  );
}
