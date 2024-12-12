import React, { useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { useTaskContext } from './TaskContext'; 

function App() {
  const { tasks, addTask, deleteTask } = useTaskContext(); // Используем контекст для получения данных и функций
  const [newTask, setNewTask] = useState('');

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <AddTask newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
