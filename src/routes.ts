import express from "express";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";
import { PrismaFeedbacksRepository } from "./repositorios/prisma/prisma-feedbacks-repository";
import { PrismaSubscribeRepository } from "./repositorios/prisma/prisma-subscribes-repository";
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
