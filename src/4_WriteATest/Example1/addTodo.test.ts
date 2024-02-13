import { addTodo1 } from "./addTodo";
import { randomUUID } from "crypto";
jest.mock("crypto");

const mockRandomUUID = jest.mocked(randomUUID);

describe("addTodo1", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should add item to empty todo list", () => {
    // ARRANGE
    const fakeUUID = "25EDC755-5DD2-479B-A48F-29866D639BB9";
    mockRandomUUID.mockReturnValueOnce(fakeUUID);

    const newTodo = { text: "Feed the dog" };

    // ACT
    const result = addTodo1([], newTodo);

    // ASSERT
    expect(result).toEqual<Todo[]>([
      {
        id: fakeUUID,
        text: "Feed the dog",
        completed: false,
      },
    ]);
  });
});
