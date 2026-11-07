// La ficha, el blog y la tarjeta leen la misma entrada. La genera
// scripts/gen-fotos-modelo.py a partir de la foto que esa ficha ya tenía,
// si el archivo existe y el crédito es una licencia abierta.
import { ALIAS_FOTO, FOTOS_MODELO } from "./fotos-modelo.generated.ts";

export type FotoModelo = {
  id: string;
  src: string;
  fuente: string;
  licencia: string;
  autor: string;
  nota: string;
  origen: string;
};

export function fotoModelo(id?: string | null): FotoModelo | null {
  if (!id) return null;
  const canon = ALIAS_FOTO[id] ?? id;
  const row = FOTOS_MODELO[canon];
  if (!row) return null;
  return { id: canon, ...row };
}
