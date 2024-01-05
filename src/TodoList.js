import React from 'react'
import { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
uuidv4();

const TodoList = () => {
  const [todos, setTodos] = useState([{}])

  const addTodo = todo => {
    setTodos([...todos, {id: uuidv4(), task: todo,
    completed: false,  isEditing: false}])
    console.log(todos)
  }

  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? {todo, completed: !todo.completed} : todo))
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  return (
    <div className='TodoList'>
        <h1>Get Things done!</h1>
        <AddTodoForm addTodo={addTodo}></AddTodoForm>
        {todos.map((todo, index) => (
          <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
        ))}
        <Todo></Todo>
    </div>
  )
}

export default TodoList
