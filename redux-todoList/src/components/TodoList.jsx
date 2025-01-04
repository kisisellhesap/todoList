import React, { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useSelector } from "react-redux";
const TodoList = () => {
  const state = useSelector((store) => store.todoReducer);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className="todolist-wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default TodoList;
