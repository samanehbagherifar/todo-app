import React from "react";
import { BsTrash } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";

function Todo({ id, text, completed, todo, todos, setTodos }) {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button className="complete-btn" onClick={completeHandler}>
        <i>
          <BsCheckCircle />
        </i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i>
          <BsTrash />
        </i>
      </button>
    </div>
  );
}

export default Todo;
