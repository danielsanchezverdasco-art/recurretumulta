declare module "virtual:analisis-loaders" {
  import type { AnalisisEditorial } from "./lib/analisis-editorial-tipos";
  const loaders: Array<() => Promise<{ default: Record<string, AnalisisEditorial> }>>;
  export default loaders;
}
