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
    <div>
      {/* Edit Task Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Edit Task"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};
