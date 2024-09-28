import React from 'react';
import qrCode from '../images/qrcode.png';
import bgImage from '../images/introductionBg.jpg'; // Import your background image
import './SuccessPage.css'; // Import CSS for styling

const SuccessPage = () => {
  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center text-center p-4 bg-opacity-50 fade-in">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      />

      {/* Content */}
      <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-md text-white">
        <strong>
          <h1 className="text-3xl font-bold mb-4">
            Congratulations! You have successfully completed the Treasure Hunt conducted by Coding Club TKMCE.
          </h1>
          <h2 className="text-xl mb-4">
            We take this moment to appreciate your efforts for winning this Treasure Hunt.
          </h2>
        </strong>
        <p className="text-lg mb-6">Scan the QR code below to grab the "ARM" movie ticket.</p>
        <img src={qrCode} alt="QR Code" className="qr-code w-40 mx-auto" /> {/* Adjust size and alignment with Tailwind classes */}
      </div>
    </div>
  );
};

export default SuccessPage;
