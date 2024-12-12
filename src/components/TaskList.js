import React from 'react';
import TaskItem from './TaskItem';
import { useTaskContext } from '../TaskContext'; // Путь к TaskContext

function TaskList() {
  const { tasks, deleteTask } = useTaskContext(); // Получаем tasks и deleteTask из контекста

  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem 
          key={index} 
          task={task} 
          deleteTask={deleteTask}  // Передаем функцию deleteTask
        />
      ))}
    </ul>
  );
}

export default TaskList;
