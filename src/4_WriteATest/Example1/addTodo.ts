import { randomUUID } from "crypto";
interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export const addTodo1 = (
  currentTodos: Todo[],
  newTodo: { text: string }
): Todo[] => {
  const todo = {
    text: newTodo.text,
    completed: false,
    id: randomUUID(),
  };

  return [...currentTodos, todo];
};
