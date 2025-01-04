import React, { useState } from "react";
import { useDispatch } from "react-redux";
import api from "../api/api";
const Card = ({ todo }) => {
  const [newValue, setNewValue] = useState(todo.value);

  const dispatch = useDispatch();

  const deleteTodo = (id) => {
    api
      .delete(`/todo/${id}`)
      .then(() => {
        dispatch({ type: "delete", payload: id });
      })
      .catch((err) => console.log(err));
  };
  const updateTodo = (todo) => {
    api.patch(`/todo/${todo.id}`, {
      value: newValue,
      isUpdated: !todo.isUpdated,
    });
    dispatch({
      type: "update",
      payload: { id: todo.id, value: newValue, isUpdated: !todo.isUpdated },
    });
  };

  const completeChange = (e) => {
    api
      .patch(`/todo/${todo.id}`, {
        isCompleted: e.target.checked,
      })
      .then(() => {});

    dispatch({
      type: "complete_change",
      payload: { id: todo.id, isCompleted: e.target.checked },
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
        onChange={(e) => completeChange(e)}
      />
    </div>
  );
};

export default Card;
