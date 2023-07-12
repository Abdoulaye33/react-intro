import React, { useState } from 'react';

function AddNewTask({ tasks, setTasks }) {
  const [newTask, setNewTask] = useState('');
  const [newDate, setNewDate] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const task = { title: newTask, date: newDate };
      setTasks([...tasks, task]);
      setNewTask('');
      setNewDate('');
    }
  };

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.title} - {task.date}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <strong> From </strong>
      <input
        type="date"
        value={newDate}
        onChange={(e) => setNewDate(e.target.value)}
      />
      <strong> To </strong>
      <input
        type="date"
        value={newDate}
        onChange={(e) => setNewDate(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default AddNewTask;
