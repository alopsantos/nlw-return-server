import SES from "aws-sdk/clients/ses";

class SendMessageService {
  private client: SES;

  constructor() {
    this.client = new SES({
      region: "us-east-1",
      accessKeyId: process.env.AWS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });
  }

  async run(): Promise<void> {
    await this.client
      .sendEmail({
        Source: "Anderson Lopes <contato@plantaosti.com.br>",
        Destination: {
          ToAddresses: ["Anderson Lopes <lopscorporation@gmail.com>"],
        },
        Message: {
          Subject: {
            Data: "Ola Mundo",
          },
          Body: {
            Text: {
              Data: "Envio de email feito com sucesso",
            },
          },
        },
        ConfigurationSetName: "serveremail",
      })
      .promise();
  }
}

export default SendMessageService;
