import React from 'react'

export default function TodoList() {
    const [todos, setTodos] = useState([
        {
          text: 'Learning React-Hooks',
          isCompleted: false
        },
        {
          text: 'Learning Android',
          isCompleted: false
        },
        {
          text: 'Ace life',
          isCompleted: false
        },
        {
            text: 'Exercise',
            isCompleted: false
        }

      ]);
    return (
        <div>
            {todos}
        </div>
    )
}
