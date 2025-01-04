import React, { useState } from "react";
import { useDispatch } from "react-redux";
const Card = ({ todo }) => {
  const [newValue, setNewValue] = useState(todo.value);

  const dispatch = useDispatch();

  const deleteTodo = (id) => {
    dispatch({ type: "delete", payload: id });
  };
  const updateTodo = (todo) => {
    dispatch({
      type: "update",
      payload: { id: todo.id, value: newValue, isUpdated: !todo.isUpdated },
    });
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
          dispatch({
            type: "complete_change",
            payload: { id: todo.id, isCompleted: e.target.checked },
          });
        }}
      />
    </div>
  );
};

export default Card;
