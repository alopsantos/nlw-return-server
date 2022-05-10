import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();
const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("Submit feedback", () => {
  it("Should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "Bug",
        comment: "Example commet",
        screenshot: "data:image/png;base64,812egsu8fhasufhn12i3u",
      })
    ).resolves.not.toThrow();
    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("Should not be able to submit feedback without type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "Example commet",
        screenshot: "data:image/png;base64,9asfa08fas0fasdfasdf9a",
      })
    ).rejects.toThrow();
  });

  it("Should not be able to submit feedback without comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64,9asfa08fas0fasdfasdf9a",
      })
    ).rejects.toThrow();
  });

  it("Should not be able to submit feedback with an invalid screenshot", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "Example commet",
        screenshot: "1.jpg",
      })
    ).rejects.toThrow();
  });
});
