import React, {useState} from 'react';
import Form from './Form';


export default function TodoApp() {
    const [todos, setTodos] = useState([
        
      ]);

      const addTodo = () => {
          const newTodos = [...todos, {text}];
          setTodos(newTodos);
      }
    return (
        <div className="main">
            <div className="todo-container">
                <div className="todo-list">
                    <h1>My Todo List</h1>
                    {todos}
            <Form/>
            </div>
        </div>
        </div>
    )
}
