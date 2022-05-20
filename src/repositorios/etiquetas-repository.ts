import { Etiqueta } from "@prisma/client";

export interface IEtiquetaCreateData {
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

export interface IEtiquetasRepository {
  create: (data: IEtiquetaCreateData) => Promise<void>;
  list(nome?:string, nota?: string, pedido?: string): Promise<Etiqueta[]>;
}
