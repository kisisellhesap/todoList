import React, { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import api from "../api/api";
const TodoList = () => {
  const state = useSelector((store) => store.todoReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    api.get("/todo").then((res) => {
      dispatch({ type: "display_data", payload: res.data });
    });

    api.get("/filter").then((res) => {
      dispatch({ type: "display_filter", payload: res.data.filter });
    });
  }, []);

  useEffect(() => {
    console.log(state.filter);
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
