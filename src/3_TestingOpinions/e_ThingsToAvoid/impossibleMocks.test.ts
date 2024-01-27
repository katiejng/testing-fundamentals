import { getPerson } from "./snapshot";

jest.mock("./snapshot");

describe("Unrealistic mocks", () => {
  it("should return something crazy", () => {
    (getPerson as jest.Mock).mockReturnValueOnce({
      whateverIWant: 123,
    });

    expect(getPerson()).toEqual({
      whateverIWant: 123,
    });
  });
});
