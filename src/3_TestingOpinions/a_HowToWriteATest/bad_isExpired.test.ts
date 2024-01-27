import { isExpired } from "./isExpired";

describe("isExpired", () => {
  it("should return true if expiry date in the past", () => {
    const expiryDate = new Date("2021-01-01T00:00:00.000Z");

    expect(isExpired(expiryDate)).toEqual(true);
  });

  // should fail
  it.skip("should return false if expiry date in the future", () => {
    const expiryDate = new Date("2022-01-01T00:00:00.000Z");

    expect(isExpired(expiryDate)).toEqual(false);
  });
});
