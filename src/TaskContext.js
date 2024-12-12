import React, { createContext, useState, useContext } from 'react';


const TaskContext = createContext();

// Хук для использования TaskContext
export function useTaskContext() {
  return useContext(TaskContext);
}

// Кастомный хук для управления задачами
export function useTaskManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task) {
      setTasks((prevTasks) => [...prevTasks, task]);
    }
  };

  const deleteTask = (taskToDelete) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task !== taskToDelete));
  };

  return { tasks, addTask, deleteTask };
}

// Компонент-поставщик контекста
export function TaskProvider({ children }) {
  const taskManager = useTaskManager(); // Используем кастомный хук внутри TaskProvider

  return (
    <TaskContext.Provider value={taskManager}>
      {children}
    </TaskContext.Provider>
  );
}
