import { SubmitSubscribeUseCase } from "./submit-subscribe-use-case";

const createSubscribeSpy = jest.fn()
const submitSubscribe = new SubmitSubscribeUseCase({
  create: createSubscribeSpy,
});

describe("Submit subscribe", () => {
  it("Shoud be able to submit a subscribe", async() => {
    await expect (
      submitSubscribe.execute({
        status: 0,
        subjet: "Anderson",
        email: "anderson_lops@hotmail.com",
        message: "Olá, estou entrando em contato",
        newsletter: false
      })
    ).resolves.not.toThrow();
    expect(createSubscribeSpy).toHaveBeenCalled();
  });

  it("Should not be able to submit feedback without email", async() => {
    await expect (
      submitSubscribe.execute({
        status: 0,
        subjet: "Anderson",
        email: "",
        message: "Olá, estou entrando em contato",
        newsletter: false
      })
    ).rejects.toThrow();
  })
})