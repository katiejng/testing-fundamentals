import { getFullname } from "./snapshot";

jest.mock("./snapshot");
const mockGetFullname = jest.mocked(getFullname);

describe("Ugly mocks", () => {
  it("should return a name that doesn't look like one", () => {
    mockGetFullname.mockReturnValueOnce({
      fullname: "123 123",
    });

    expect(getFullname()).toEqual({
      fullname: "123 123",
    });
  });
});
