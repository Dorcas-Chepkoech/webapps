import React, { useState } from 'react'
import './css/Form.css'

export default function Form (addTodo) {
  const [value, setValue] = useState('')

  const handleChange = (e) => {
      e.preventDefault();
      setValue({
          [e.target.name]: e.target.value
      })
      console.log(value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  }
  return (
    <div className='todo-container'>
      <div className='todo-wrapper'>
        <form className='todo-form'
              onSubmit={handleSubmit}>
          <input 
                type='text' 
                className='input' 
                placeholder='Add Todo Here'
                onChange={handleChange} />
          <button className='btn'>Add</button>
        </form>
      </div>
    </div>
  )
}
