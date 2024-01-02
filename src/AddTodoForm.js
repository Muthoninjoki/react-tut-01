import React from 'react'
import { useState } from 'react'

const AddTodoForm = ({addTodo}) => {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault();

    addTodo(value)
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input 
        type="text" 
        className='todo-input'
        placeholder='Add a task'
        onChange={(e) => setValue(e.target.value)}
        />
        <button
        type='submit'
        className='todo-btn'>Add Task
        </button>
    </form>
  )
}

export default AddTodoForm
