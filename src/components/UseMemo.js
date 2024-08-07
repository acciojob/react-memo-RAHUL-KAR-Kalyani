import React from 'react';

function UseMemo({ newTodos }) {
  return (
    <div>
      <h2>My Todos</h2>
      <ul>
        {newTodos.map((todo, index) => (
          <li key={index} style={{listStyle:"none"}}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseMemo;
