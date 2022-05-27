import { SubmitEtiquetaUseCase } from "./submt-etiquetas-use-case";

const createEtiquetaSpy = jest.fn();
const listEtiquetaSpy = jest.fn();

const submitEtiqueta = new SubmitEtiquetaUseCase({
  create: createEtiquetaSpy,
  list: listEtiquetaSpy,
});

describe("Sumit etiquetas", () => {
  it("Shoud be able to submit a subscribe", async () => {
    await expect(
      submitEtiqueta.execute({
        nome: "VICTORIA BRITO",
        endereco: "RUA SALVADOR DALI, 199",
        complemento: "APTO 44 COND LEDA VIEIRALVES",
        observacoes: "",
        telefone: "(92) 994781604",
        bairro: "PARQUE 10 DE NOVEMBRO",
        cidade: "MANAUS",
        estado: "AM",
        cep: "69054332",
        aeroporto: "MAO",
        nota: "1350",
        peso: "0,238",
        minuta: "66061317982",
        pedido: "610423",
      })
    ).resolves.not.toThrow();
    expect(createEtiquetaSpy).toHaveBeenCalled();
  });

  it("Shoud be able to submit a subscribe", async () => {
    await expect(
      submitEtiqueta.execute({
        nome: "VICTORIA BRITO",
        endereco: "RUA SALVADOR DALI, 199",
        complemento: "APTO 44 COND LEDA VIEIRALVES",
        observacoes: "",
        telefone: "(92) 994781604",
        bairro: "PARQUE 10 DE NOVEMBRO",
        cidade: "MANAUS",
        estado: "AM",
        cep: "69054332",
        aeroporto: "MAO",
        nota: "1350",
        peso: "0,238",
        minuta: "66061317982",
        pedido: "610423",
      })
    ).resolves.not.toThrow();
    expect(createEtiquetaSpy).toHaveBeenCalled();
  });
});
