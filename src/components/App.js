// src/App.js
import React, { useState, useMemo } from 'react';
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(0);
  const [customTask, setCustomTask] = useState('');

  const handleAddTodo = () => {
    setTasks([...tasks, 'New todo']);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleCustomTaskChange = (e) => {
    setCustomTask(e.target.value);
  };

  const handleAddCustomTask = () => {
    if (customTask.length > 5) {
      setTasks([...tasks, customTask]);
      setCustomTask('');
    }
  };

  // Memoize tasks to avoid unnecessary re-renders
  const memoizedTasks = useMemo(() => tasks, [tasks]);

  return (
    <div>
      <h1>Task Manager</h1>
      <button onClick={handleAddTodo}>Add todo</button>
      <button onClick={handleIncrement}>Increment Counter</button>
      <p>Counter: {counter}</p>

      <UseMemo tasks={memoizedTasks} />
      <ReactMemo />

      <input
        type="text"
        value={customTask}
        onChange={handleCustomTaskChange}
        placeholder="Enter custom task (more than 5 characters)"
      />
      <button onClick={handleAddCustomTask}>Submit</button>
    </div>
  );
};

export default App;
