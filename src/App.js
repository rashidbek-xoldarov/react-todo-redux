import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons/Buttons";
import Form from "./components/Form/Form";
import TodoList from "./components/Todo/TodoList";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_TODO, EDIT_TODO } from "./redux/todo/TodoType";
import { delTodo, editTodo } from "./redux/todo/TodoActions";

function App() {
  const todo = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();
  const [showList, setShowList] = useState([]);
  const [showTodo, setShowTodo] = useState(true);

  const deleteTodoHandler = (id) => {
    const filteredArr = todo.filter((item) => item.id !== id);
    dispatch(delTodo(filteredArr));
    toast.error("Deleted");
  };

  const editTodoHandler = (id) => {
    const newTodo = [...todo];
    const item = newTodo.find((item) => item.id === id);
    const text = prompt("Enter text", item.title);
    item.title = text;
    dispatch(editTodo(newTodo));
    toast.warning("Edited");
  };

  const checkTodoHandler = (id) => {
    const checkedTodo = [...todo];
    const item = checkedTodo.find((item) => item.id === id);
    item.isCompleted = !item.isCompleted;
    dispatch({ type: "CHECK_TODO", payload: checkedTodo });
  };

  return (
    <div className="app">
      <Form />
      {showTodo ? (
        <TodoList
          data={todo}
          onDeleteTodo={deleteTodoHandler}
          onEditTodo={editTodoHandler}
          onCheckTodo={checkTodoHandler}
        />
      ) : (
        ""
      )}
      {showList.length ? (
        <ol>
          {showList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      ) : (
        ""
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
