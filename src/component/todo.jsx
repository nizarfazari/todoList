import React, { useState } from "react";
import { FaEdit, FaWindowClose, FaCheck } from "react-icons/fa";
import TodoForm from "./todoForm";
const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => {
    return (
      <div className={todo.isComplete ? "todo-row complete" : "todo-row"} key={index}>
        <div key={todo.id}>{todo.text}</div>
        <div className="icons">
          <FaCheck onClick={() => completeTodo(todo.id)} className="success-icon" />
          <FaEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className="edit-icon" />
          <FaWindowClose onClick={() => removeTodo(todo.id)} className="delete-icon" />
        </div>
      </div>
    );
  });
};

export default Todo;
