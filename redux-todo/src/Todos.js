import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo } from "./features/todo/todoSlice";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleSave = () => {
    if (editText.trim()) {
        console.log(editText);
      dispatch(editTodo({ id: editId, text: editText.trim() }));
      setEditId(null);
      setEditText("");
    }
  };

  const handleEditClick = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleCancel = () => {
    setEditId(null);
    setEditText("");
  };

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
              {editId === todo.id ? (
                <div className="d-flex w-100 align-items-center">
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="form-control me-2"
                  />
                  <button
                    onClick={handleSave}
                    className="btn btn-success btn-sm me-2"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="btn btn-secondary btn-sm"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <span>{todo.text}</span>
                  <div>
                    <button
                      onClick={() => handleEditClick(todo.id, todo.text)}
                      className="btn btn-secondary btn-sm me-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => dispatch(removeTodo(todo.id))}
                      className="btn btn-danger btn-sm"
                    >
                      Remove
                    </button>
                  </div>
                </>
              )}
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
