import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "./features/todo/todoSlice";


export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Your Todos</h2>
      {todos.length > 0 ? (
        <ul className="list-group">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>{todo.text}</span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="btn btn-danger btn-sm"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="alert alert-info text-center">
          No todos available. Add some to get started!
        </div>
      )}
    </div>
  );
}
