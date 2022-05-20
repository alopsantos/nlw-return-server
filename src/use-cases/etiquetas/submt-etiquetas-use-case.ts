import { IEtiquetasRepository } from "../../repositorios/etiquetas-repository";

interface ISubmitEtiquetaUseCaseRequest {
  nome: string;
  endereco: string;
  complemento: string;
  observacoes: string;
  telefone: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  aeroporto: string;
  nota: string;
  peso: string;
  minuta: string;
  pedido: string;
}

export class SubmitEtiquetaUseCase {
  constructor(private etiquetasRepository: IEtiquetasRepository) {}

  async execute(request: ISubmitEtiquetaUseCaseRequest) {
    const {
      nome,
      endereco,
      complemento,
      observacoes,
      telefone,
      bairro,
      cidade,
      estado,
      cep,
      aeroporto,
      nota,
      peso,
      minuta,
      pedido,
    } = request;

    await this.etiquetasRepository.create({
      nome,
      endereco,
      complemento,
      observacoes,
      telefone,
      bairro,
      cidade,
      estado,
      cep,
      aeroporto,
      nota,
      peso,
      minuta,
      pedido,
    });
  }
}
