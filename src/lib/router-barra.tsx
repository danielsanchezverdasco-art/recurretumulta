// 13/10/2026 (indexación): react-router-dom con barra final en <Link>/<NavLink>.
// vite.config.ts redirige "react-router-dom" aquí; el resto se reexporta tal cual.
import { forwardRef } from "react";
import { Link as RLink, NavLink as RNavLink } from "react-router";
import type { LinkProps, NavLinkProps } from "react-router";
import { conBarra } from "./barra-final";
export * from "react-router";
export { HydratedRouter, RouterProvider } from "react-router/dom";

const fix = <T,>(to: T): T => (typeof to === "string" ? (conBarra(to) as T) : to);

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(p, ref) {
  return <RLink ref={ref} {...p} to={fix(p.to)} />;
});
export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(function NavLink(p, ref) {
  return <RNavLink ref={ref} {...p} to={fix(p.to)} />;
});
