import { Etiqueta } from "@prisma/client";
import { prisma } from "../../prisma";
import {
  IEtiquetaCreateData,
  IEtiquetasRepository
} from "../etiquetas-repository";

export class PrismaEtiquetaRepository implements IEtiquetasRepository {
  async list(nota?: string): Promise<Etiqueta[]> {
    const etiquetas = await prisma.etiqueta.findMany({
      where: {
        nota,
      },
    });

    return etiquetas
  }
  async create({
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
  }: IEtiquetaCreateData) {
    await prisma.etiqueta.create({
      data: {
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
      },
    });
  }
}
