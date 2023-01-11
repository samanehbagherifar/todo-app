import React from "react";

function TodoForm({ inputText, setInputText, todos, setTodos, setStatus }) {
  const inputTextHandler = (event) => {
    setInputText(event.target.value);
  };

  const submitToHandler = (event) => {
    event.preventDefault();
    if (inputText) {
      setTodos([
        ...todos,
        { id: Math.random() * 10000, text: inputText, completed: false },
      ]);
      setInputText("");
    }
  };

  const statusHandler = (event) => {
    setStatus(event.target.value);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Add Todo..."
        className="todo-input"
        value={inputText}
        onChange={inputTextHandler}
      />
      <button type="submit" className="todo-btn" onClick={submitToHandler}>
        Add Todo
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todos">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default TodoForm;
