import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      alert("Please enter a valid todo!");
      return;
    }
    console.log("Added value:", input);
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Todo App</h2>
      <form onSubmit={addTodoHandler} className="d-flex justify-content-center gap-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Add a todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
}
