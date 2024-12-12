import React from 'react';

function TaskItem({ task, deleteTask }) {
  return (
    <li>
      {task} 
      <button onClick={() => deleteTask(task)}>Удалить</button>
    </li>
  );
}

export default TaskItem;
