describe("testThatAlwaysPasses", () => {
  it("should return false if objects are different", async () => {
    const object1 = { a: 1, b: 2 };
    const object2 = { a: 1, b: 3 };
    expect(object1 == object2).toBe(false);
  });

  // The first test is not actually testing anything!
  it.skip("should return true if objects are same", async () => {
    const object1 = { a: 1, b: 2 };
    const object2 = { a: 1, b: 2 };
    expect(object1 === object2).toBe(true);
  });
});
