import React, { useState } from 'react';
import { useTaskContext } from '../TaskContext';  // Импортируйте useTaskContext

function AddTask() {
  const [newTask, setNewTask] = useState('');
  const { addTask } = useTaskContext();  // Получаем addTask из контекста

  const handleAddTask = () => {
    if (newTask) {
      addTask(newTask);  // Добавляем задачу
      setNewTask('');  // Очищаем поле ввода
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default AddTask;
