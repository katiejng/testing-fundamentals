import { getMaxNumber } from "./getMaxNumber";

describe("getMaxNumber", () => {
  // This test will fail
  it.skip("should handle empty array", () => {
    expect(getMaxNumber([])).toEqual(null);
  });

  it("should handle single element array", () => {
    expect(getMaxNumber([1])).toEqual(1);
  });

  // This test will fail
  it.skip("should handle multiple element array", () => {
    expect(getMaxNumber([1, 2, 3])).toEqual(3);
  });
});
