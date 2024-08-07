import React from 'react';

const TaskItem = React.memo(({ task }) => {
  console.log('Rendering:', task); // Log to understand re-renders
  return <li>{task}</li>;
});

function ReactMemo({ tasks }) {
  return (
    <div>
      <h2>React.memo</h2>
      <ul>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default ReactMemo;
