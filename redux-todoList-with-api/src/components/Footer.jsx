import React from "react";
import { useDispatch } from "react-redux";
import api from "../api/api";

const Footer = () => {
  const dispatch = useDispatch();

  const clearTodo = () => {
    dispatch({ type: "clear" });
  };
  const changeFilter = (e) => {
    const filter = e.target.textContent.toLowerCase();

    api.put("/filter", { filter }).then((res) => {
      dispatch({ type: "change_filter", payload: res.data.filter });
    });
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
