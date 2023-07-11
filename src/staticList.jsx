import React from 'react';



function StaticList() {
  const tasks = ['Task 1', 'Task 2', 'Task 3'];

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}


export default StaticList;