import React from 'react'
import { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const TodoList = () => {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    setTodos([...todos, {id: uuidv4(), task: todo,
    completed: false,  isEditing: false}])
    console.log(todos)
  }
  return (
    <div>TodoList
        <AddTodoForm addTodo={addTodo}></AddTodoForm>
    </div>
  )
}

export default TodoList
