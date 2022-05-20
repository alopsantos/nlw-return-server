import { IEtiquetasRepository } from "../../repositorios/etiquetas-repository";

interface IListEtiquetaUseCaseRequest {
  nota: string;
}

export class ListEtiquetasUseCase {
  constructor(private etiquetasRepository: IEtiquetasRepository) {}

  async execute(request: IListEtiquetaUseCaseRequest) {
    const { nota } = request;

    const etiquetas = await this.etiquetasRepository.list(nota);

    return etiquetas;
  }
}
