import { getPerson } from "./snapshot";

describe("Snapshot test", () => {
  it("should match snapshot", () => {
    // Act
    const person = getPerson();

    // Assert
    expect(person).toMatchInlineSnapshot(`
{
  "age": {
    "dob": "01/01/1990",
    "startDate": "01/01/2010",
  },
  "company": {
    "name": "SEEK",
    "phone": "1234567890",
  },
  "firstName": "Sam",
  "fullName": "Sam Smith",
  "id": 1,
  "lastName": "Smith",
}
`);
  });
});
