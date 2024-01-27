import { getPerson } from "./getPerson";

describe("getPerson", () => {
  it("should get person full name", () => {
    // Arrange
    const personId = 1;

    // Act
    const person = getPerson(personId);

    // Assert
    expect(person.fullName).toEqual("Sam Smith");
  });
});
