import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import StaticList from './staticList.jsx';
import AddNewTask from './AddNewTask';
import DeleteTask from './DeleteTask';


function App() {
  const [tasks, setTasks] = useState(['Task 1', 'Task 2', 'Task 3']);

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <>
      <StaticList />
      <div>
        <DeleteTask tasks={tasks} deleteTask={deleteTask} />
        <AddNewTask tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
}

export default App;
