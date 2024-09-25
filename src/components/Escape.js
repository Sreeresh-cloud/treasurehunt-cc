import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
//import './Escape.css'; // Import CSS for the escape page

const Escape = () => {
  const [inputValue, setInputValue] = useState(''); // To store user input
  const navigate = useNavigate(); // For page navigation

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toLowerCase()); // Convert input to lowercase to allow both 'escape' or 'esc'
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (inputValue === 'escape' || inputValue === 'esc'|| inputValue === 'ESCAPE' || inputValue === 'ESC') {
      navigate('/escaped'); // Navigate to the 'Escaped' page if the input is correct
    } else {
      alert('Incorrect input! Try "escape" or "esc".'); // Alert if the input is incorrect
    }
  };

  return (
    <div className="escape-container">
      <h1>Escape: The Attack</h1>
      <p>
        Maniyan is surrounded by a group of attacking villagers! 
        He needs to escape before it's too late. Help Maniyan find a way out...
      </p>
      
      {/* Form for entering escape input */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="A keyword to go back"
          value={inputValue}
          onChange={handleInputChange}
          className="escape-input"
        />
        <button type="submit" className="escape-button">Submit</button>
      </form>
    </div>
  );
};

export default Escape;
