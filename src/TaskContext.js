import React, { createContext, useState, useContext } from 'react';

// Создаем контекст
const TaskContext = createContext();

// Хук для использования TaskContext
export function useTaskContext() {
  return useContext(TaskContext);
}

// Компонент-поставщик контекста
export function TaskProvider({ children }) {
  // Состояние для задач
  const [tasks, setTasks] = useState([]);

  // Функция для добавления новой задачи
  const addTask = (task) => {
    if (task) {
      setTasks((prevTasks) => [...prevTasks, task]);
    }
  };

  // Функция для удаления задачи
  const deleteTask = (taskToDelete) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task !== taskToDelete));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}
