// 24/10: el juego de los monos fuera del bundle principal (carga diferida).
import { lazy, Suspense } from "react";
const M = lazy(() => import("./MonoEscondido.tsx"));
export default function MonoEscondidoLazy(props: any) {
  return <Suspense fallback={null}><M {...props} /></Suspense>;
}
