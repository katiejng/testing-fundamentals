import { getPerson } from "./getPerson";
const fullName = "Sam Smith";

describe("getPerson", () => {
  const firstName = "Sam";

  it("should get person", () => {
    expect(getPerson(1)).toEqual({
      id: 1,
      firstName,
      lastName: "Smith",
      fullName,
    });
  });
});
