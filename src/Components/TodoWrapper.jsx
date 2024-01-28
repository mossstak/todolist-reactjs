/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo'
import { EditTodoForm } from './EditTodoForm'
import '../App.css'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

export const TodoWrapper = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (savedTodos) {
      return JSON.parse(savedTodos)
    } else {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const addTodos = (todo) => {
    //console.log(todo);
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
        important: false,
        isEditing: false,
      },
    ])
  }

  const removeTodos = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const removeAllTodos = (id) => {
    setTodos([]);
  }

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    )
  }

  const editTasks = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    )
  }

  const priorityTask = (id) => {
    setTodos(
      todos
        .map((todo) =>
          todo.id === id ? { ...todo, important: !todo.important } : todo
        )
        .sort((a, b) => b.important - a.important)
    )
  }

  return (
    <div className='h-[100vh] p-5 bg-gray-300'>
      <p className="text-[20pt] md:text-[24pt] text-center">
        Mostak's List of things To do!
      </p>
      <div className="m-2">
        <TodoForm addTodo={addTodos} removeAllTodos={removeAllTodos}/>
        {/*Display Todos*/}
        <div className="">
          {todos.map((todo) =>
            todo.isEditing ? (
              <EditTodoForm key={todo.id} editTodo={editTasks} task={todo} />
            ) : (
              <li key={todo.id} className="list-none">
                <Todo
                  task={todo}
                  removeTodo={removeTodos}
                  editTodo={editTodo}
                  priorityTask={priorityTask}
                  toggleComplete={completeTodo}
                />
              </li>
            )
          )}
          <div className="flex justify-center items-center h-[50px] bg-[]">
            {todos.filter((todo) => !todo.completed).length} Task Left to do{' '}
          </div>
        </div>
      </div>
    </div>
  )
}
