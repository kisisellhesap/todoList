import { useDispatch } from "react-redux";
import { add } from "../redux/slices/todoSlice";
const Header = () => {
  const dispatch = useDispatch();

  const addTodo = (e) => {
    e.preventDefault();
    const inputValue = e.target[0].value;
    if (inputValue !== "") {
      dispatch(add(inputValue));
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
