/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrash,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import "../App.css";

export const Todo = ({
  task,
  editTodo,
  priorityTask,
  removeTodo,
  toggleComplete,
}) => {
  return (
    <div className="flex justify-center m-3">
      <p
        className={`${
          task.completed ? "line-through font-bold bg-green-500" : ""
        } cursor-pointer w-[100vw] h-[50px] flex justify-center items-center rounded-[30px] ${
          task.important ? "bg-orange-500" : ""
        }`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div className="flex gap-3 p-1 text-[2em] cursor-pointer h-[50px] justify-center items-center">
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={() => removeTodo(task.id)} />
        <FontAwesomeIcon
          icon={faWarning}
          onClick={() => priorityTask(task.id)}
        />
      </div>
    </div>
  );
};
