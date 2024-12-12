import React, { useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = (task) => {
    if (task) {
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <AddTask newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
