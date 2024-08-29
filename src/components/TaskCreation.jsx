import React, { useState } from 'react';
import './todo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faArrowsRotate, faCalendar, faCaretDown } from '@fortawesome/free-solid-svg-icons';

function TaskCreation({ onAddTask }) {
  const [newTaskText, setNewTaskText] = useState('');
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(true); // State to manage visibility

  const handleInputChange = (event) => {
    setNewTaskText(event.target.value);
    setError(''); // Clear error message when input changes
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newTaskText.trim() === '') {
      setError('Please enter a task');
      return;
    }

    onAddTask(newTaskText);
    setNewTaskText('');
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Toggle the visibility state
  };

  return (
    <>
      <div className='tc'>
        <p onClick={toggleVisibility} style={{ cursor: 'pointer' }}>
          To Do <FontAwesomeIcon icon={faCaretDown} className={`caret-icon ${isVisible ? '' : 'rotated'}`} />
        </p>
        <hr />
      </div>
      {isVisible && ( // Conditionally render the form
        <div className='taskcreate'>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="newTask"
                value={newTaskText}
                onChange={handleInputChange}
                placeholder="Add a Task:"
              />
              {error && <p className="error">{error}</p>}
            </div>
            <div>
              <span className="icons">
                <FontAwesomeIcon className='icon' icon={faBell} />
                <FontAwesomeIcon className='icon' icon={faArrowsRotate} />
                <FontAwesomeIcon className='icon' icon={faCalendar} />
              </span>
              <button className='sub' type="submit">Add Task</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default TaskCreation;
