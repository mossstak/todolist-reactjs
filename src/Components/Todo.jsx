/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPenToSquare,
  faTrash,
  faWarning,
} from '@fortawesome/free-solid-svg-icons'
import '../App.css'

export const Todo = ({
  task,
  editTodo,
  priorityTask,
  removeTodo,
  toggleComplete,
}) => {
  return (
    <div className="flex justify-center m-3">
      {/*Toggles Complete and makes it green*/}
      <p
        className={`${
          task.completed ? 'line-through font-bold bg-green-500 outline-3 outline-dashed outline-black' : ''
        } cursor-pointer w-[100vw] h-[50px] flex justify-center items-center rounded-[30px] outline-3 outline outline-black ${
          task.important ? 'bg-orange-500' : ''
        }`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div className="flex gap-3 p-1 text-[2em] cursor-pointer h-[50px] justify-center items-center">
        {/*Delete To do*/}
        <FontAwesomeIcon icon={faTrash} onClick={() => removeTodo(task.id)} />
        {/*Edits To do*/}
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        {/*Prioritise To do and Make it Orange*/}
        <FontAwesomeIcon
          icon={faWarning}
          onClick={() => priorityTask(task.id)}
          title='Prioritise To do'
        />
      </div>
    </div>
  )
}
