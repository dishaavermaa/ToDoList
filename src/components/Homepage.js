// ParentContainerComponent.jsx
import React, { useState } from 'react';
import './Homepage.css'; // Import CSS file for styling
import Calendar from './Calendar';

const Homepage = () => {
  const [listItems, setListItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setListItems([...listItems, inputValue]);
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddItem();
    }
  };

  return (
    <div className="parent-container" style={{backgroundColor: '#FFD1D1'}}>
      <div className="nav-menu" style={{backgroundColor: '#FF9494'}}>
        {/* Your navigation/menu bar component */}
        <nav >
          <ul>
            <li><a href="#tasks-card">Home</a></li>
            <li><a href="/signup">Register</a></li>
            <li><a href="/signin">Sign Out</a></li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <h1>TaskVault</h1>
        <p>Organize your life, one task at a time.</p>
        <div className="cards-container">
          <div id="tasks-card" className='tasks-card dib br3 pa3 ma2 bw2 shadow-5'>
            <h2>Tasks</h2>
            <p>View your tasks here</p>
            <ul>
              {listItems.map((item, index) => (
                <li key={index}>
                  <input type="checkbox" />
                  {item}
                </li>
              ))}
            </ul>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Add a new task"
              onKeyPress={handleKeyPress}
            />
          </div>
          <div id="calendar-card" className='calendar-card tc dib br3 pa3 ma2 bw2 shadow-5'>
            {/* <h2>Calendar</h2>
            <p>View your calendar here</p> */}
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

