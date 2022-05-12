export interface ISubscribeCreateData {
  status: number;
  subjet: string;
  email: string;
  message: string;
  newsletter: boolean;
}

export interface ISubscribesRepository {
  create: (data: ISubscribeCreateData) => Promise<void>;
}
