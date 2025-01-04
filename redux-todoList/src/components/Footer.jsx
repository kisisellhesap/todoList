import React from "react";
import { useDispatch } from "react-redux";

const Footer = () => {
  const dispatch = useDispatch();

  const clearTodo = () => {
    dispatch({ type: "clear" });
  };
  const changeFilter = (e) => {
    const filter = e.target.textContent.toLowerCase();
    dispatch({ type: "change_filter", payload: filter });
  };

  return (
    <footer>
      <div className="todo-filter">
        <button onClick={changeFilter}>All</button>
        <button onClick={changeFilter}>Completed</button>
        <button onClick={changeFilter}>InComplete</button>
      </div>
      <button onClick={clearTodo}>Clear All</button>
    </footer>
  );
};

export default Footer;
