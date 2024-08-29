import React from 'react';
import photo from './images/photo.png'
import './todo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faClipboardList,faCalendar,faClipboard,faUser,faPlus } from '@fortawesome/free-solid-svg-icons';

function SideNavbar() {
  return (
    <nav className="side-navbar">
      <div className="navbar-header">
        <img src={photo} alt="Logo" />
        <p>Hey,ABCD</p>
      </div>
      <ul className="navbar-menu">
        <li><FontAwesomeIcon className='listicon' icon={ faClipboardList} />All Tasks</li>
        <li><FontAwesomeIcon className='listicon' icon={faCalendar} />Today</li>
        <li><FontAwesomeIcon className='listicon' icon={faStar} />Important</li>
        <li><FontAwesomeIcon className='listicon' icon={faClipboard} />Planned</li>
        <li><FontAwesomeIcon className='listicon' icon={faUser} />Assigned to me</li>
        {/* Add other navigation items based on the image */}
      </ul>
      <ul className="navbar-menu">
        <li className='addlist'><FontAwesomeIcon className='listicon' icon={faPlus} />Add list</li>
      </ul>
    </nav>
  );
}

export default SideNavbar;
