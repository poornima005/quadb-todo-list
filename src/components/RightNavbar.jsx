import React from 'react';
import './todo.css';

function RightNavbar({ selectedTask, onClose }) {
    if (!selectedTask) return null;

    return (
      <div className="right-sidebar open">
        <button className="close-button" onClick={onClose}>×</button>
        <div className="sidebar-content">
          <h2>{selectedTask.text}</h2>
          <p>Status: {selectedTask.completed ? 'Completed' : 'Pending'}</p>
          {/* Add more details as needed */}
        </div>
      </div>
    );
  }
  

export default RightNavbar;
