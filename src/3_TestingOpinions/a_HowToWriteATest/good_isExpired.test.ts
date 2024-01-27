import { isExpired } from "./isExpired";
import MockDate from "mockdate";

describe("isExpired", () => {
  beforeEach(() => {
    MockDate.set("2021-01-01T00:00:00Z");
  });

  afterEach(() => {
    MockDate.reset();
  });

  it("should return true if expiry date in the past", () => {
    const expiryDate = new Date("2020-12-31T23:59:59Z");

    expect(isExpired(expiryDate)).toEqual(true);
  });

  it("should return false if expiry date is the current time", () => {
    const expiryDate = new Date("2022-01-01T00:00:00Z");

    expect(isExpired(expiryDate)).toEqual(false);
  });

  it("should return false if expiry date in the future", () => {
    const expiryDate = new Date("2022-01-01T00:00:01Z");

    expect(isExpired(expiryDate)).toEqual(false);
  });
});
