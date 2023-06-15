import "./index.css";
import Navbar from "../navbar";
import TodoList from "../todolist/TodoList";

const SingleTodo = () => {
  return (
    <div className="Single__Todo">
      <Navbar />
      <TodoList />
    </div>
  );
};

export default SingleTodo;
