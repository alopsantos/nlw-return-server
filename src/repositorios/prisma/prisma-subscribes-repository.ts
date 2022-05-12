import { prisma } from "../../prisma";
import {
  ISubscribeCreateData,
  ISubscribesRepository
} from "../subscribes-repository";

export class PrismaSubscribeRepository implements ISubscribesRepository {
  async create({
    status,
    subjet,
    email,
    message,
    newsletter,
  }: ISubscribeCreateData) {
    await prisma.subscribe.create({
      data: {
        status,
        subjet,
        email,
        message,
        newsletter,
      },
    });
  }
}
