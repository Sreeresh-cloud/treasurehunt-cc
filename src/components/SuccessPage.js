import React from 'react';
import qrCode from '../images/qr-code.png';
import './SuccessPage.css'; // Import CSS for styling

const SuccessPage = () => {
  return (
    <div className="success-page">
      <strong>
        <h1>Congratulations! You have successfully completed the Treasure Hunt conducted by Coding Club TKMCE. </h1>
        <h2>We take this moment to appreciate your efforts for winning this Treasure Hunt.</h2>
      </strong>
      <p>Scan the QR code below to grab the "ARM" movie ticket.</p>
      <img src={qrCode} alt="QR Code" className="qr-code" /> {/* Add class for styling */}
    </div>
  );
};

export default SuccessPage;
