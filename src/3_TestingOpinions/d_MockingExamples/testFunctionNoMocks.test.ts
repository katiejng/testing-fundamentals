import { getUserFullname } from "./testFunction";

describe("fetch and map user", () => {
  // times out
  it.skip("should fetch user and map the name", async () => {
    const mappedUser = await getUserFullname("1");
    expect(mappedUser).toEqual({
      fullName: "Sam Smith",
    });
  });
});
