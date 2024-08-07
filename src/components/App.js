import React, { useState, useMemo } from 'react';
import '../styles/App.css'
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';

function App() {
  const [tasks, setTasks] = useState([]); // Tasks from textbox
  const [newTodos, setNewTodos] = useState([]); // New todos from button
  const [inputValue, setInputValue] = useState('');
  const [counter, setCounter] = useState(0);

  const handleAddTodo = () => {
    setNewTodos([...newTodos, 'New todo']);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim().length > 5) {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue('');
    }
  };

  // Memoize the lists to demonstrate useMemo
  const memoizedNewTodos = useMemo(() => newTodos, [newTodos]);
  const memoizedTasks = useMemo(() => tasks, [tasks]);

  return (
    <div>
      <h1>React.useMemo</h1>
      <UseMemo newTodos={memoizedNewTodos} />
      <button onClick={handleAddTodo}>Add Todo</button>
      
      <hr/>
      <p>Counter: {counter}<button onClick={handleIncrement}> + </button></p>
      <br/>
      <h1>Expensive Calculation</h1>
      <p>1000000000</p>
      <hr/>
      {/* UseMemo component displays the list of new todos */}
      
      {/* ReactMemo component displays the list of tasks */}
      
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter custom task"
      />
      <button onClick={handleSubmit}>Submit</button>
      <ReactMemo tasks={memoizedTasks} />
      
    </div>
  );
}

export default App;
