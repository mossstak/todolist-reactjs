/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import '../App.css';

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    //edit todo
    editTodo(value, task.id);
  };
  return (
    <div className="flex justify-center items-center">
      {/* Edit Task Form */}
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="text"
          className="outline outline-3 rounded p-2"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Edit Task"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};
