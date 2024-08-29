// TaskList.jsx
import React, { useState, useEffect } from 'react';
import './todo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'; 
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'; 

function TaskList({ tasks, onToggleTask }) {
  const [allTasks, setAllTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    setAllTasks(tasks.filter((task) => !task.completed));
    setCompletedTasks(tasks.filter((task) => task.completed));
  }, [tasks]);

  const handleToggleTask = (taskId) => {
    onToggleTask(taskId);
  };

  const handleToggleStar = (taskId) => {
    const updatedTasks = allTasks.map((task) => {
      if (task.id === taskId) {
        task.starred = !task.starred;
      }
      return task;
    });

    setAllTasks(updatedTasks.filter((task) => !task.completed));
    setCompletedTasks(updatedTasks.filter((task) => task.completed));
  };

  const renderTaskItem = (task) => (
    <li key={task.id}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => handleToggleTask(task.id)}
      />
      {task.text}
      <FontAwesomeIcon
        icon={task.starred ? faStarSolid : faStarRegular}
        className="star-icon"
        onClick={() => handleToggleStar(task.id)}
        style={{ marginLeft: '10px', cursor: 'pointer' }}
      />
    </li>
  );

  return (
    <div className="tc">
      <ul>
        {allTasks.map((task) => renderTaskItem(task))}
      </ul>

      <p>Completed Tasks</p>
      <ul>
        {completedTasks.map((task) => renderTaskItem(task))}
      </ul>
    </div>
  );
}

export default TaskList;
