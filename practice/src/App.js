import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  console.log(count);

  const reset = () => {
    setCount(0)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>My first React Hook.</h1>
        <p>Not perfect but getting there!!!</p>
  <p>You have clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Add</button>
        <button onClick={() => setCount(count - 1)}>Minus</button>
        <button onClick={reset}>Reset</button>
        
      </header>
    </div>
  );
}

export default App;
