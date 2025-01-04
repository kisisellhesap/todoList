import { useDispatch } from "react-redux";
import api from "../api/api";
import { v4 as uuidv4 } from "uuid";

const Header = () => {
  const dispatch = useDispatch();

  const addTodo = (e) => {
    e.preventDefault();
    const inputValue = e.target[0].value.trim();

    if (inputValue !== "") {
      const newTodo = {
        id: uuidv4(),
        value: inputValue,
        isCompleted: false,
        isUpdated: false,
      };

      api
        .post("/todo", newTodo)
        .then(() => {
          dispatch({ type: "add", payload: newTodo });
        })
        .catch((err) => console.log(err));

      e.target.reset();
    }
  };

  return (
    <form onSubmit={addTodo}>
      <input type="text" />
      <button>Add</button>
    </form>
  );
};

export default Header;
