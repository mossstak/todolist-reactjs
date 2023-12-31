/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import '../App.css'

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    
    e.preventDefault();
    if (value) {
      //add todo
      addTodo(value);
      //clear form after submit button is clicked.
      setValue('');
    }
  };
  return (
    <div>
      {/* Add Task Form */}
      <form onSubmit={handleSubmit} className="flex gap-3 justify-center">
        <input
          className="outline rounded w-[500px] h-[50px] bg-gray-300"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add Tasks"
        />
        <button type="submit" className="bg-gray-300 outline rounded w-[100px] h-[50px]">Add Task</button>
      </form>
    </div>
  );
};
