const initialState = {
  todoList: [],
  filter: "all",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "display_data":
      return { ...state, todoList: action.payload };
    case "add":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "delete":
      const filtered = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
      return { ...state, todoList: filtered };
    case "update":
      const updated = state.todoList.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              value: action.payload.value,
              isUpdated: action.payload.isUpdated,
            }
          : todo
      );
      return { ...state, todoList: updated };
    case "clear":
      return { ...state, todoList: [] };
    case "complete_change":
      const todo = state.todoList.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isCompleted: action.payload.isCompleted }
          : todo
      );
      return { ...state, todoList: todo };

    case "display_filter":
      return { ...state, filter: action.payload };

    case "change_filter":
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};

export default todoReducer;
