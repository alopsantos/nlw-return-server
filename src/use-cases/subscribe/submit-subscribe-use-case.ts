import { ISubscribesRepository } from "../../repositorios/subscribes-repository";
interface ISubmitSubscribeUseCaseRequest {
  status: number;
  subjet: string;
  email: string;
  message: string;
  newsletter: boolean;
}

export class SubmitSubscribeUseCase {
  constructor(private subscribersRepository: ISubscribesRepository) {}

  async execute(request: ISubmitSubscribeUseCaseRequest) {
    const { status, subjet, email, message, newsletter } = request;

    if (!email) {
      throw new Error("Email é required.");
    }

    const subscribe = await this.subscribersRepository.create({
      status,
      subjet,
      email,
      message,
      newsletter,
    });

    return subscribe;
  }
}
