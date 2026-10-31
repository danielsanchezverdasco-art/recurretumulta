// Enriquecimiento de fichas de coche (rama enriquecer-coches-3110).
// Cada fila lleva valor, fuente (nombre + enlace) y año. Los datos no oficiales
// se marcan con orientativo: true y se muestran con el aviso de «dato orientativo».
export interface FilaVerificada {
  etiqueta: string;
  valor: string;
  fuente: string;
  url: string;
  anio: string;
  orientativo?: boolean;
}

export interface EnriquecimientoFicha {
  titulo: string;
  parrafos: string[];
  filas: FilaVerificada[];
}

export type MapaEnriquecimiento = Record<string, EnriquecimientoFicha>;

export const AVISO_ORIENTATIVO = "Dato orientativo, no oficial: puede contener errores";
