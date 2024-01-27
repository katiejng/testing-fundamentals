import { UserFullname, getUserFullname } from "./testFunction";
import { fetchUser } from "./networkCall";
jest.mock("./networkCall");
const mockFetchUser = jest.mocked(fetchUser);

describe("fetch and map user", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should fetch user and map the name", async () => {
    mockFetchUser.mockResolvedValueOnce({
      id: "1",
      firstName: "Sam",
      lastName: "Smith",
    });

    const mappedUser = await getUserFullname("1234");

    // another way to get the type UserFullname is
    // Awaited<ReturnType<typeof getUserFullname>>
    expect(mappedUser).toEqual<UserFullname>({
      fullname: "Sam Smith",
    });
    expect(mockFetchUser).toHaveBeenCalledTimes(1);
    expect(mockFetchUser).toHaveBeenNthCalledWith(1, "1234");
  });

  it("should throw when fetchUser throws an error", async () => {
    mockFetchUser.mockRejectedValueOnce(new Error("Network error"));

    await expect(getUserFullname("1234")).rejects.toThrow("Network error");

    expect(mockFetchUser).toHaveBeenCalledTimes(1);
    expect(mockFetchUser).toHaveBeenNthCalledWith(1, "1234");
  });
});
