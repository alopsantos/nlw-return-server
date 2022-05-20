import express from "express";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";
import { PrismaEtiquetaRepository } from "./repositorios/prisma/prisma-etiquetas-repository";
import { PrismaFeedbacksRepository } from "./repositorios/prisma/prisma-feedbacks-repository";
import { PrismaSubscribeRepository } from "./repositorios/prisma/prisma-subscribes-repository";
import {
  ListEtiquetasUseCase
} from "./use-cases/etiquetas/list-etiquetas-use-case";
import { SubmitEtiquetaUseCase } from "./use-cases/etiquetas/submt-etiquetas-use-case";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";
import { SubmitSubscribeUseCase } from "./use-cases/subscribe/submit-subscribe-use-case";

export const routes = express.Router();

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodemailerMailAdapter = new NodemailerMailAdapter();

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  );

  const feedback = await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });

  return res.status(201).json({ data: feedback });
});

routes.post("/subscribes", async (req, res) => {
  const { status, subjet, email, message, newsletter } = req.body;

  const primsasubscriberepository = new PrismaSubscribeRepository();

  const submitSubscribeUseCase = new SubmitSubscribeUseCase(
    primsasubscriberepository
  );

  const subscribe = await submitSubscribeUseCase.execute({
    status,
    subjet,
    email,
    message,
    newsletter,
  });

  return res.status(201).json({ data: subscribe });
});

routes.get("/etiquetas/:nota", async (req, res) => {
  const { nota } = req.params;

  const prismaetiquetasrepository = new PrismaEtiquetaRepository();
  const listEtiquetasUseCase = new ListEtiquetasUseCase(
    prismaetiquetasrepository
  );

  const etiquetas = await listEtiquetasUseCase.execute({ nota });

  return res.status(201).json(etiquetas);
});

routes.post("/etiquetas", async (req, res) => {
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
  } = req.body;

  const prismaetiquetasrepository = new PrismaEtiquetaRepository();
  const submitEtiquetaUseCase = new SubmitEtiquetaUseCase(
    prismaetiquetasrepository
  );

  await submitEtiquetaUseCase.execute({
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

  return res.status(201).json({ Ok: "Cadastro Ok" });
});
