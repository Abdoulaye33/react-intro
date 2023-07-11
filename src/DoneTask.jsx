import React from 'react';

function DoneTask({ tasks }) {
  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              listStyleImage: task.completed
                ? 'url(https://gclabels.net/image/cache/data/new/inv/new/Blank-Fluorescent-Green-Square-Labels-s1g-600x600.png)'
                : 'none',
              textDecoration: task.completed ? 'line-through' : 'none',
              opacity: task.completed ? '0.2' : '1',
            }}
            onClick={() => toggleTaskCompletion(task.id)}
          >
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoneTask;
