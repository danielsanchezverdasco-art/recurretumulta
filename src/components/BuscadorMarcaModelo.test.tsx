/**
 * @vitest-environment jsdom
 */
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

afterEach(() => cleanup());
import userEvent from "@testing-library/user-event";
import BuscadorMarcaModelo, {
  type OpcionBuscador,
} from "@/components/BuscadorMarcaModelo.tsx";

const OPCIONES: OpcionBuscador[] = [
  { id: "dacia-bigster", marca: "Dacia", modelo: "Bigster Hybrid 155", detalle: "Híbrido" },
  { id: "dacia-spring", marca: "Dacia", modelo: "Spring", detalle: "Eléctrico" },
  { id: "fiat-grande-panda", marca: "Fiat", modelo: "Grande Panda", detalle: "Eléctrico" },
  { id: "toyota-bz4x", marca: "Toyota", modelo: "bZ4X", detalle: "Eléctrico" },
];

function renderBuscador(overrides = {}) {
  return render(
    <BuscadorMarcaModelo
      opciones={OPCIONES}
      valueId="dacia-bigster"
      onSelect={() => {}}
      bordeClase="border-gray-300"
      etiquetaLado="Coche A"
      estadoIA={{ disponible: true, investigando: false, error: null }}
      onInvestigarIA={() => {}}
      {...overrides}
    />
  );
}

describe("BuscadorMarcaModelo", () => {
  it("muestra la marca y el modelo seleccionados", () => {
    renderBuscador();
    expect((screen.getByLabelText("Marca (Coche A)") as HTMLInputElement).value).toBe("Dacia");
    expect((screen.getByLabelText("Modelo (Coche A)") as HTMLInputElement).value).toBe(
      "Bigster Hybrid 155"
    );
  });

  it("filtra modelos al escribir (insensible a mayúsculas)", async () => {
    const user = userEvent.setup();
    renderBuscador({ valueId: "" });
    const modelo = screen.getByLabelText("Modelo (Coche A)");
    await user.click(modelo);
    await user.type(modelo, "panda");
    expect(await screen.findByRole("option", { name: /Grande Panda/ })).toBeTruthy();
    expect(screen.queryByRole("option", { name: /Bigster/ })).toBeNull();
  });

  it("filtra sin tildes", async () => {
    const user = userEvent.setup();
    renderBuscador({ valueId: "" });
    const modelo = screen.getByLabelText("Modelo (Coche A)");
    await user.click(modelo);
    await user.type(modelo, "electrico");
    // bZ4X no tiene "eléctrico" en modelo pero sí en detalle
    expect(await screen.findByRole("option", { name: /Grande Panda/ })).toBeTruthy();
  });

  it("llama a onSelect al elegir una opción", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    renderBuscador({ valueId: "", onSelect });
    const modelo = screen.getByLabelText("Modelo (Coche A)");
    await user.click(modelo);
    await user.click(await screen.findByRole("option", { name: /Grande Panda/ }));
    expect(onSelect).toHaveBeenCalledWith("fiat-grande-panda");
  });

  it("ofrece 'Investigar con IA' cuando no hay coincidencias", async () => {
    const user = userEvent.setup();
    const onInvestigarIA = vi.fn();
    renderBuscador({ valueId: "", onInvestigarIA });
    const marca = screen.getByLabelText("Marca (Coche A)");
    const modelo = screen.getByLabelText("Modelo (Coche A)");
    await user.type(marca, "Kia");
    await user.type(modelo, "EV9");
    const filaIA = await screen.findByRole("option", { name: /Investigar «Kia EV9» con IA/ });
    await user.click(filaIA);
    expect(onInvestigarIA).toHaveBeenCalledWith("Kia", "EV9");
  });

  it("no ofrece IA y muestra aviso cuando no está disponible (motos)", async () => {
    const user = userEvent.setup();
    render(
      <BuscadorMarcaModelo
        opciones={OPCIONES}
        valueId=""
        onSelect={() => {}}
        bordeClase="border-gray-300"
        etiquetaLado="Moto A"
        estadoIA={{ disponible: false, investigando: false, error: null }}
        onInvestigarIA={() => {}}
      />
    );
    const modelo = screen.getByLabelText("Modelo (Moto A)");
    await user.click(modelo);
    await user.type(modelo, "ZZZ999");
    expect(screen.queryByRole("option", { name: /Investigar/ })).toBeNull();
    expect(await screen.findByText(/No tenemos «ZZZ999» en la base/)).toBeTruthy();
  });

  it("navega con el teclado y selecciona con Enter", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    renderBuscador({ valueId: "", onSelect });
    const modelo = screen.getByLabelText("Modelo (Coche A)");
    await user.click(modelo);
    await user.keyboard("{ArrowDown}");
    await user.keyboard("{Enter}");
    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  it("muestra el error de IA con aria-live", () => {
    renderBuscador({
      estadoIA: { disponible: true, investigando: false, error: "Límite diario alcanzado" },
    });
    expect(screen.getByText("Límite diario alcanzado")).toBeTruthy();
  });
});
