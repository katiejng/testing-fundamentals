interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
interface Platform {
  generateTodoId: () => string;
}

let todoList2: Todo[] = [];

const platform: Platform = {
  generateTodoId: () => {
    return "123";
  },
};

const addTodo2 =
  (platform: Platform) =>
  (newTodo: { text: string; completed: boolean }): Todo[] => {
    return [];
  };
