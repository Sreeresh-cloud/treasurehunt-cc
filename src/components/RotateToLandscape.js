// RotateToLandscape.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RotateToLandscape = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleOrientationChange = () => {
      const isPortrait = window.innerHeight > window.innerWidth;
      if (!isPortrait) {
        navigate("/"); // Navigate to home page when rotated to landscape
      }
    };

    window.addEventListener("resize", handleOrientationChange);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <h1 className="text-center text-xl font-bold">
        Please rotate your device to landscape mode.
      </h1>
      <p className="text-center mt-4">
        This application works best in landscape orientation.
      </p>
    </div>
  );
};

export default RotateToLandscape;
