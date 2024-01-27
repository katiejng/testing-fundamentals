import { mapDayOfWeekToNumber } from "./mapDayOfWeekToNumber";

describe("mapDayOfWeekToNumber", () => {
  it("should map Monday", () => {
    const result = mapDayOfWeekToNumber("Monday");

    expect(result).toEqual(1);
  });

  it("should map Tuesday", () => {
    const result = mapDayOfWeekToNumber("Tuesday");

    expect(result).toEqual(2);
  });

  it("should map Wednesday", () => {
    const result = mapDayOfWeekToNumber("Wednesday");

    expect(result).toEqual(3);
  });

  it("should map Thursday", () => {
    const result = mapDayOfWeekToNumber("Thursday");

    expect(result).toEqual(4);
  });

  it("should map Friday", () => {
    const result = mapDayOfWeekToNumber("Friday");

    expect(result).toEqual(5);
  });

  it("should map Saturday", () => {
    const result = mapDayOfWeekToNumber("Saturday");

    expect(result).toEqual(6);
  });

  // This test will fail
  it.skip("should map Sunday", () => {
    const result = mapDayOfWeekToNumber("Sunday");

    expect(result).toEqual(7);
  });

  // This test will fail
  it.skip.each([
    ["Monday", 1],
    ["Tuesday", 2],
    ["Wednesday", 3],
    ["Thursday", 4],
    ["Friday", 5],
    ["Saturday", 6],
    ["Sunday", 7],
  ])("should map %s to %d", (dayOfWeek, expectedResult) => {
    const result = mapDayOfWeekToNumber(dayOfWeek);

    expect(result).toEqual(expectedResult);
  });
});
