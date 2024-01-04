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
  return (
    <div className='TodoList'>
        <h1>Get Things done!</h1>
        <AddTodoForm addTodo={addTodo}></AddTodoForm>
        {todos.map((todo, index) => (
          <Todo task={todo} key={index} />
        ))}
        <Todo></Todo>
    </div>
  )
}

export default TodoList