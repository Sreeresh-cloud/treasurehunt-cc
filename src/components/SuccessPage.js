// SuccessPage.js
import React from 'react';
import qrCode from '../images/qr-code.png';


const SuccessPage = () => {
  return (
    <div className="success-page">
      <h1>Congratulations!</h1>
      <p>You have completed the ARM Movie Treasure Hunt and found the magical lamp.</p>
      <img src={qrCode} alt="QR Code" />
    </div>
  );
};

export default SuccessPage;
