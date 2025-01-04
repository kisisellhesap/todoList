import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todoSlice = createSlice({
  name: "todo",
  initialState: { todoList: [], filter: "all" },
  reducers: {
    add: (state, action) => {
      const item = {
        id: uuidv4(),
        value: action.payload,
        isCompleted: false,
        isUpdated: false,
      };

      state.todoList.push(item);
    },
    deleted: (state, action) => {
      const filtered = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );

      state.todoList = filtered;
    },
    update: (state, action) => {
      const updated = state.todoList.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              value: action.payload.value,
              isUpdated: action.payload.isUpdated,
            }
          : todo
      );
      state.todoList = updated;
    },
    clear: (state) => {
      state.todoList = [];
    },
    complete_change: (state, action) => {
      const todo = state.todoList.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isCompleted: action.payload.isCompleted }
          : todo
      );

      state.todoList = todo;
    },
    change_filter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { add, deleted, update, clear, complete_change, change_filter } =
  todoSlice.actions;
export default todoSlice.reducer;
