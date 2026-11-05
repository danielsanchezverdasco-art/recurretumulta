/// <reference types="vite/client" />
// @vitest-environment edge-runtime
// Pruebas de la tabla `suscriptores` y de la lógica de webhook del plan anual (7,99 €/año).
// Los eventos de `fixtures/stripe-eventos-reales-test.json` son EVENTOS REALES de Stripe en
// modo prueba (checkout con tarjeta 4242, cancelación al final de periodo y baja).
import { convexTest } from "convex-test";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { internal } from "./_generated/api";
import schema from "./schema";
import fixtures from "./fixtures/stripe-eventos-reales-test.json";
import {
  buildSuscripcionSessionParams,
  cambioDesdeSuscripcion,
  mapEstadoStripe,
  accionDesdeEvento,
  normalizarMatriculas,
} from "./lib/suscripcion";

const modules = import.meta.glob("./**/*.ts");
const PRICE = "price_1UWp4lBomNciCoxskXo1IjEQ";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const clon = (x: any) => JSON.parse(JSON.stringify(x));
const evAlta = fixtures["checkout.session.completed"];
const evCambio = fixtures["customer.subscription.updated"];
const evBaja = fixtures["customer.subscription.deleted"];
const SESSION = evAlta.data.object.id as string;
const SUB = evCambio.data.object.id as string;
const EMAIL = "test-suscriptor@example.com";

async function sembrarPagoPendiente(t: ReturnType<typeof convexTest>, matriculas?: string[]) {
  await t.mutation(internal.paymentsDb.createPendingPaymentSinRegistro, {
    stripeSessionId: SESSION,
    email: EMAIL,
    nombre: "Test Suscriptor",
    dni: "00000000T",
    domicilio: "Calle Falsa 123, Madrid",
    carta: "Carta de recurso de prueba",
    expediente: "EXP-TEST-1",
    multaImporte: "200 €",
    infraccion: "Infracción de prueba",
    fecha: "01/10/2026",
    plazoRecurso: "20 días hábiles",
    tipo: "multa",
    matriculas,
  });
}

const filas = (t: ReturnType<typeof convexTest>) => t.run((ctx) => ctx.db.query("suscriptores").collect());

describe("plan anual: parámetros del checkout", () => {
  test("es una suscripción (mode subscription) al precio anual y solo a ese", () => {
    const p = buildSuscripcionSessionParams({ email: EMAIL, priceId: PRICE, origin: "https://x.test" });
    expect(p.mode).toBe("subscription");
    expect(p.line_items).toEqual([{ price: PRICE, quantity: 1 }]);
    expect(p.metadata?.producto).toBe("suscripcion_anual");
    expect(p.subscription_data?.metadata?.email).toBe(EMAIL);
    expect(p.success_url).toContain("session_id={CHECKOUT_SESSION_ID}");
    const msg = (p.custom_text?.submit as { message: string } | undefined)?.message ?? "";
    expect(msg).toContain("7,99");
    expect(msg).toContain("No recurrimos en tu nombre");
  });
  test("mapeo de estados de Stripe", () => {
    expect(mapEstadoStripe("active")).toBe("activa");
    expect(mapEstadoStripe("past_due")).toBe("impagada");
    expect(mapEstadoStripe("canceled")).toBe("cancelada");
    expect(mapEstadoStripe("incomplete")).toBe("pendiente");
  });
  test("eventos reales: se traducen a la acción correcta y los demás se ignoran", () => {
    expect(accionDesdeEvento(clon(evAlta))?.tipo).toBe("alta");
    expect(accionDesdeEvento(clon(evCambio))?.tipo).toBe("cambio");
    expect(accionDesdeEvento(clon(evBaja))?.tipo).toBe("cambio");
    expect(accionDesdeEvento({ ...clon(evAlta), type: "invoice.paid" })).toBeNull();
    const pago = clon(evAlta);
    pago.data.object.mode = "payment";
    expect(accionDesdeEvento(pago)).toBeNull();
  });
  test("fin de periodo: lee current_period_end de la suscripción real", () => {
    const c = cambioDesdeSuscripcion(clon(evCambio.data.object), 1);
    expect(c.periodoHasta).toBe(evCambio.data.object.items.data[0].current_period_end * 1000);
    expect(c.cancelaAlFinal).toBe(true);
  });
});

describe("plan anual: webhook → tabla suscriptores", () => {
  beforeEach(() => {
    vi.useFakeTimers(); // no ejecutar el envío de email programado
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  test("checkout.session.completed crea el suscriptor activo con los datos del cliente y programa el recurso", async () => {
    const t = convexTest(schema, modules);
    await sembrarPagoPendiente(t);
    const r = await t.mutation(internal.suscripciones.procesarEvento, { event: clon(evAlta) });
    expect(r).toEqual({ tipo: "alta", detalle: "creada" });
    const f = await filas(t);
    expect(f).toHaveLength(1);
    expect(f[0]).toMatchObject({
      email: EMAIL,
      nombre: "Test Suscriptor",
      dni: "00000000T",
      estado: "activa",
      cancelaAlFinal: false,
      stripeSessionId: SESSION,
      stripeSubscriptionId: SUB,
      livemode: false,
    });
    // el pago queda completado y se programa el email con el recurso preparado
    const pagos = await t.run((ctx) => ctx.db.query("payments").collect());
    expect(pagos[0].status).toBe("completed");
    const prog = await t.run((ctx) => ctx.db.system.query("_scheduled_functions").collect());
    expect(prog.some((p) => p.name.includes("sendRecursoPdfEmail"))).toBe(true);
  });

  test("es idempotente: Stripe reenvía el mismo evento y no se duplica la fila", async () => {
    const t = convexTest(schema, modules);
    await sembrarPagoPendiente(t);
    await t.mutation(internal.suscripciones.procesarEvento, { event: clon(evAlta) });
    const r2 = await t.mutation(internal.suscripciones.procesarEvento, { event: clon(evAlta) });
    expect(r2.detalle).toBe("actualizada");
    expect(await filas(t)).toHaveLength(1);
    const prog = await t.run((ctx) => ctx.db.system.query("_scheduled_functions").collect());
    expect(prog.filter((p) => p.name.includes("sendRecursoPdfEmail"))).toHaveLength(1); // un solo email
  });

  test("alta con la suscripción consultada guarda el fin de periodo real", async () => {
    const t = convexTest(schema, modules);
    await sembrarPagoPendiente(t);
    await t.mutation(internal.suscripciones.procesarEvento, {
      event: clon(evAlta),
      suscripcion: clon(evCambio.data.object),
    });
    const f = await filas(t);
    expect(f[0].periodoHasta).toBe(evCambio.data.object.items.data[0].current_period_end * 1000);
  });

  test("subscription.updated con cancel_at_period_end: sigue activa hasta fin de periodo", async () => {
    const t = convexTest(schema, modules);
    await sembrarPagoPendiente(t);
    await t.mutation(internal.suscripciones.procesarEvento, { event: clon(evAlta) });
    const r = await t.mutation(internal.suscripciones.procesarEvento, { event: clon(evCambio) });
    expect(r.detalle).toBe("aplicado");
    const f = await filas(t);
    expect(f[0]).toMatchObject({ estado: "activa", cancelaAlFinal: true });
    expect(f[0].periodoHasta).toBeGreaterThan(Date.now());
    expect(await t.query(internal.suscripciones.listarActivos, {})).toHaveLength(1);
  });

  test("subscription.deleted: marca cancelada y sale de los suscriptores vigilados", async () => {
    const t = convexTest(schema, modules);
    await sembrarPagoPendiente(t);
    await t.mutation(internal.suscripciones.procesarEvento, { event: clon(evAlta) });
    await t.mutation(internal.suscripciones.procesarEvento, { event: clon(evCambio) });
    await t.mutation(internal.suscripciones.procesarEvento, { event: clon(evBaja) });
    const f = await filas(t);
    expect(f[0].estado).toBe("cancelada");
    expect(f[0].canceladaEn).toBeGreaterThan(0);
    expect(await t.query(internal.suscripciones.listarActivos, {})).toHaveLength(0);
  });

  test("eventos fuera de orden: un 'updated' viejo no resucita una baja", async () => {
    const t = convexTest(schema, modules);
    await sembrarPagoPendiente(t);
    await t.mutation(internal.suscripciones.procesarEvento, { event: clon(evAlta) });
    await t.mutation(internal.suscripciones.procesarEvento, { event: clon(evBaja) });
    const r = await t.mutation(internal.suscripciones.procesarEvento, { event: clon(evCambio) });
    expect(r.detalle).toBe("ignorado_viejo");
    expect((await filas(t))[0].estado).toBe("cancelada");
  });

  test("un cambio que llega antes del alta usa el email de la suscripción y el alta lo completa", async () => {
    const t = convexTest(schema, modules);
    await sembrarPagoPendiente(t);
    const r1 = await t.mutation(internal.suscripciones.procesarEvento, { event: clon(evCambio) });
    expect(r1.detalle).toBe("creado");
    await t.mutation(internal.suscripciones.procesarEvento, { event: clon(evAlta) });
    const f = await filas(t);
    expect(f).toHaveLength(1);
    expect(f[0]).toMatchObject({ nombre: "Test Suscriptor", stripeSessionId: SESSION });
  });

  test("un cambio sin alta previa y sin email falla (Stripe reintentará)", async () => {
    const t = convexTest(schema, modules);
    const ev = clon(evCambio);
    ev.data.object.metadata = {};
    await expect(t.mutation(internal.suscripciones.procesarEvento, { event: ev })).rejects.toThrow(/SUSCRIPCION_NO_ENCONTRADA/);
  });

  test("eventos que no son del plan se ignoran", async () => {
    const t = convexTest(schema, modules);
    const r = await t.mutation(internal.suscripciones.procesarEvento, { event: { ...clon(evAlta), type: "invoice.paid" } });
    expect(r.tipo).toBe("ignorado");
    expect(await filas(t)).toHaveLength(0);
  });
});

describe("plan anual: matrículas a vigilar", () => {
  test("se normalizan: mayúsculas, sin espacios/guiones, sin duplicados, máx. 5, descarta basura", () => {
    expect(normalizarMatriculas(["1234 abc", "1234-ABC", "5678DEF", "<script>", "ab"])).toEqual(["1234ABC", "5678DEF"]);
    expect(normalizarMatriculas(["1111AAA", "2222BBB", "3333CCC", "4444DDD", "5555EEE", "6666FFF"])).toHaveLength(5);
  });
  test("el alta copia las matrículas del pago a la fila del suscriptor", async () => {
    const t = convexTest(schema, modules);
    await sembrarPagoPendiente(t, ["1234ABC", "5678DEF"]);
    await t.mutation(internal.suscripciones.procesarEvento, { event: clon(evAlta) });
    const f = await filas(t);
    expect(f).toHaveLength(1);
    expect(f[0].matriculas).toEqual(["1234ABC", "5678DEF"]);
  });
});
