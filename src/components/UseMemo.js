// src/UseMemo.js
import React from 'react';

const UseMemo = ({ tasks }) => {
  console.log('Rendering UseMemo');
  
  return (
    <div>
      <h2>Task List:</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(UseMemo);
