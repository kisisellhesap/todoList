import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
const Main = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.todoReducer);

  return (
    <main>
      <div className="main-header">
        <h1>{state.filter.toUpperCase()}</h1>
        <p>todoList length : {state.todoList.length}</p>
      </div>
      <div className="todo-list">
        {state.todoList.length === 0 && "Henüz gösterilecek bir şey yok."}
        {state.filter === "all" &&
          state.todoList.map((todo) => {
            return <Card key={todo.id} todo={todo} dispatch={dispatch} />;
          })}

        {state.filter === "incomplete" &&
          state.todoList.map((todo) => {
            return (
              todo.isCompleted === false && (
                <Card key={todo.id} todo={todo} dispatch={dispatch} />
              )
            );
          })}

        {state.filter === "completed" &&
          state.todoList.map((todo) => {
            return (
              todo.isCompleted === true && (
                <Card key={todo.id} todo={todo} dispatch={dispatch} />
              )
            );
          })}
      </div>
    </main>
  );
};

export default Main;
