import React from 'react';
import './todo.css'
function TodayTasksList({ tasks }) {
  const todayTasks = tasks.filter((task) => task.due === 'Today');
  const completedTasks = todayTasks.filter((task) => task.completed);
  const totalTasks = todayTasks.length;
  const completionPercentage = (completedTasks.length / totalTasks) * 100;

  return (
    <div className="today-tasks">
      <p>Today Tasks</p>
      <h2>{todayTasks.length}</h2>
      <div className="task-circle">
      </div>
      <div class="status-container">
  <p class="dot1"><span class="dot"></span>Pending</p>
  <p class="dot2"><span class="dot"></span>Done</p>


</div>
    </div>
  );
}

export default TodayTasksList;