/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as adminAuth from "../adminAuth.js";
import type * as alertasPrecio from "../alertasPrecio.js";
import type * as audiencia from "../audiencia.js";
import type * as auth from "../auth.js";
import type * as authSimple from "../authSimple.js";
import type * as blog from "../blog.js";
import type * as buscadorCoches from "../buscadorCoches.js";
import type * as buscadorCochesActions from "../buscadorCochesActions.js";
import type * as buscadorCochesScrapers from "../buscadorCochesScrapers.js";
import type * as cazaMonos from "../cazaMonos.js";
import type * as comparador from "../comparador.js";
import type * as comparadorDatos from "../comparadorDatos.js";
import type * as comparadorEmail from "../comparadorEmail.js";
import type * as comparadorEmailInterno from "../comparadorEmailInterno.js";
import type * as comparadorInterno from "../comparadorInterno.js";
import type * as comparadorPatinetes from "../comparadorPatinetes.js";
import type * as comparadorPatinetesDatos from "../comparadorPatinetesDatos.js";
import type * as comparadorPatinetesInterno from "../comparadorPatinetesInterno.js";
import type * as creadores from "../creadores.js";
import type * as crons from "../crons.js";
import type * as deleteFakeHunters from "../deleteFakeHunters.js";
import type * as emails from "../emails.js";
import type * as empresas from "../empresas.js";
import type * as empresasDb from "../empresasDb.js";
import type * as http from "../http.js";
import type * as lanzamientos from "../lanzamientos.js";
import type * as lib_normativaTrafico from "../lib/normativaTrafico.js";
import type * as lib_pdfToImage from "../lib/pdfToImage.js";
import type * as misPagos from "../misPagos.js";
import type * as multas from "../multas.js";
import type * as multasInterno from "../multasInterno.js";
import type * as multas_rate_limit from "../multas_rate_limit.js";
import type * as newsletter from "../newsletter.js";
import type * as newsletterSubs from "../newsletterSubs.js";
import type * as payments from "../payments.js";
import type * as paymentsDb from "../paymentsDb.js";
import type * as pdfEmail from "../pdfEmail.js";
import type * as puntos from "../puntos.js";
import type * as recursos from "../recursos.js";
import type * as resenasVehiculos from "../resenasVehiculos.js";
import type * as sanciones from "../sanciones.js";
import type * as stripeNode from "../stripeNode.js";
import type * as users from "../users.js";
import type * as valoraciones from "../valoraciones.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  adminAuth: typeof adminAuth;
  alertasPrecio: typeof alertasPrecio;
  audiencia: typeof audiencia;
  auth: typeof auth;
  authSimple: typeof authSimple;
  blog: typeof blog;
  buscadorCoches: typeof buscadorCoches;
  buscadorCochesActions: typeof buscadorCochesActions;
  buscadorCochesScrapers: typeof buscadorCochesScrapers;
  cazaMonos: typeof cazaMonos;
  comparador: typeof comparador;
  comparadorDatos: typeof comparadorDatos;
  comparadorEmail: typeof comparadorEmail;
  comparadorEmailInterno: typeof comparadorEmailInterno;
  comparadorInterno: typeof comparadorInterno;
  comparadorPatinetes: typeof comparadorPatinetes;
  comparadorPatinetesDatos: typeof comparadorPatinetesDatos;
  comparadorPatinetesInterno: typeof comparadorPatinetesInterno;
  creadores: typeof creadores;
  crons: typeof crons;
  deleteFakeHunters: typeof deleteFakeHunters;
  emails: typeof emails;
  empresas: typeof empresas;
  empresasDb: typeof empresasDb;
  http: typeof http;
  lanzamientos: typeof lanzamientos;
  "lib/normativaTrafico": typeof lib_normativaTrafico;
  "lib/pdfToImage": typeof lib_pdfToImage;
  misPagos: typeof misPagos;
  multas: typeof multas;
  multasInterno: typeof multasInterno;
  multas_rate_limit: typeof multas_rate_limit;
  newsletter: typeof newsletter;
  newsletterSubs: typeof newsletterSubs;
  payments: typeof payments;
  paymentsDb: typeof paymentsDb;
  pdfEmail: typeof pdfEmail;
  puntos: typeof puntos;
  recursos: typeof recursos;
  resenasVehiculos: typeof resenasVehiculos;
  sanciones: typeof sanciones;
  stripeNode: typeof stripeNode;
  users: typeof users;
  valoraciones: typeof valoraciones;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
