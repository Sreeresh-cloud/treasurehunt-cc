import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import './Escaped.css'; // Add custom CSS

const Escaped = () => {
 const navigate = useNavigate(); // Initialize navigate

  const handleNext = () => {
    // You can navigate to the next page or action
    navigate('/shrine-door'); // Navigate to the ShrineDoor component
  };

  return (
    <div className="escaped-container">
      <h1>Maniyan Escaped!</h1>
      <p>Maniyan successfully escaped from the attacking crowd.</p>
      
      {/* Next button for further action */}
      <button onClick={handleNext} className="next-button">Next</button>
    </div>
  );
};

export default Escaped;
