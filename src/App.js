// App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskCreation from './components/TaskCreation';
import TaskManagementControls from './components/TaskManagementControls';
import SideNavbar from './components/SideNavbar';
import TodayTasksList from './components/TodayTasksList';
import RightNavbar from './components/RightNavbar';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showSidebar, setShowSidebar] = useState(true);
  const [selectedTask, setSelectedTask] = useState(null);
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      date: new Date().toISOString().split('T')[0],
      due: 'Today',
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleListItemClick = (task) => {
    setSelectedTask(task);
  };

  const closeRightSidebar = () => {
    setSelectedTask(null);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-theme', !darkMode); // Toggle dark theme class on body
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Header toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} />
      <div className="main-content">
        {showSidebar && (
          <section className="sidebar-section">
            <SideNavbar />
            <ul className="navbar-menu">
              <li className='listicon'>
                <TodayTasksList tasks={tasks} />
              </li>
            </ul>
          </section>
        )}
        <section className="task-section">
          <TaskCreation onAddTask={addTask} />
          <TaskList tasks={tasks} onToggleTask={toggleTask} onListItemClick={handleListItemClick} />
        </section>
        {selectedTask && (
          <RightNavbar selectedTask={selectedTask} onClose={closeRightSidebar} />
        )}
      </div>
      <TaskManagementControls />
    </div>
  );
}

export default App;
