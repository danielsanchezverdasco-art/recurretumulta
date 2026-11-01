/// <reference types="vite/client" />
// @vitest-environment node
// Prueba de extremo a extremo del endpoint HTTP /stripe/webhook (router → acción Node con
// verificación de firma → mutation → tabla `suscriptores`) con eventos REALES de Stripe (modo prueba)
// firmados localmente con un secreto de prueba inventado (whsec_local_test: no es ningún secreto real).
import { convexTest } from "convex-test";
import Stripe from "stripe";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import schema from "./schema";
import fixtures from "./fixtures/stripe-eventos-reales-test.json";

// La consulta de la suscripción al hacer el alta se simula sin red (devuelve la suscripción real guardada).
vi.mock("stripe", async (orig) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Real = ((await orig()) as any).default;
  class ConSuscripcionSimulada extends Real {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...a: any[]) {
      super(...a);
      this.subscriptions.retrieve = async () =>
        JSON.parse(JSON.stringify(fixtures["customer.subscription.updated"].data.object));
    }
  }
  return { default: ConSuscripcionSimulada };
});

const modules = import.meta.glob("./**/*.ts");
const SECRET = "whsec_local_test";
const stripe = new Stripe("sk_test_local_no_network", { apiVersion: "2026-08-26.dahlia" });

function firmado(evento: unknown) {
  const payload = JSON.stringify(evento);
  const header = stripe.webhooks.generateTestHeaderString({ payload, secret: SECRET });
  return { payload, header };
}
async function post(t: ReturnType<typeof convexTest>, evento: unknown, header?: string) {
  const f = firmado(evento);
  return await t.fetch("/stripe/webhook", {
    method: "POST",
    headers: { "stripe-signature": header ?? f.header, "content-type": "application/json" },
    body: f.payload,
  });
}

describe("/stripe/webhook (HTTP + firma + base de datos)", () => {
  beforeEach(() => {
    vi.useFakeTimers({ toFake: ["setTimeout", "setInterval"] });
    process.env.STRIPE_WEBHOOK_SECRET = SECRET;
    process.env.STRIPE_SECRET_KEY = "sk_test_local_no_network";
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  test("firma inválida → 400 y no se escribe nada", async () => {
    const t = convexTest(schema, modules);
    const res = await post(t, fixtures["checkout.session.completed"], "t=1,v1=firmafalsa");
    expect(res.status).toBe(400);
    expect(await t.run((ctx) => ctx.db.query("suscriptores").collect())).toHaveLength(0);
  });

  test("alta → cambio (cancelar al final) → baja, todo firmado y por HTTP", async () => {
    const t = convexTest(schema, modules);
    const r1 = await post(t, fixtures["checkout.session.completed"]);
    expect(r1.status).toBe(200);
    let f = await t.run((ctx) => ctx.db.query("suscriptores").collect());
    expect(f).toHaveLength(1);
    expect(f[0]).toMatchObject({ email: "test-suscriptor@example.com", estado: "activa" });

    expect((await post(t, fixtures["customer.subscription.updated"])).status).toBe(200);
    f = await t.run((ctx) => ctx.db.query("suscriptores").collect());
    expect(f[0]).toMatchObject({ estado: "activa", cancelaAlFinal: true });

    expect((await post(t, fixtures["customer.subscription.deleted"])).status).toBe(200);
    f = await t.run((ctx) => ctx.db.query("suscriptores").collect());
    expect(f[0].estado).toBe("cancelada");
  });
});
