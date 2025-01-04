import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleted, update, complete_change } from "../redux/slices/todoSlice";
const Card = ({ todo }) => {
  const [newValue, setNewValue] = useState(todo.value);

  const dispatch = useDispatch();

  const deleteTodo = (id) => {
    dispatch(deleted(id));
  };
  const updateTodo = (todo) => {
    dispatch(
      update({ id: todo.id, value: newValue, isUpdated: !todo.isUpdated })
    );
  };

  return (
    <div className="todo-card">
      <input
        type="text"
        defaultValue={todo.value}
        readOnly={todo.isUpdated ? false : true}
        disabled={todo.isUpdated ? false : true}
        onChange={(e) => {
          setNewValue(e.target.value);
        }}
      />
      <button onClick={() => updateTodo(todo)}>
        {todo.isUpdated ? "Done" : "Update"}
      </button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={(e) => {
          dispatch(
            complete_change({ id: todo.id, isCompleted: e.target.checked })
          );
        }}
      />
    </div>
  );
};

export default Card;
