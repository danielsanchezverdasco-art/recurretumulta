import { lazy, Suspense } from "react";
const B = lazy(() => import("./BannerJuegoMonos"));
export default function BannerJuegoMonosLazy(props: any) {
  return <Suspense fallback={null}><B {...props} /></Suspense>;
}
