import React from "react";
import { useNavigate } from "react-router-dom";

const DisplayData = ({ formData, handleLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    // Handle logout (e.g., clear session, reset state)
    handleLogout();
    navigate("/"); // Redirect to login page after logout
  };

  // Extract name from formData for personalized greeting
  const userName = formData?.name || "User"; // Fallback to "User" if name is not available

  return (
    <div className="min-h-screen bg-slate-400 py-8 px-6 flex flex-col items-center justify-center">
      <div className="bg-white text-black mt-9 p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-2xl font-semibold mb-4">Welcome, {userName}!</h1> {/* Personalized greeting */}

       {/* Logout Button */}
        <button
          onClick={handleLogoutClick}
          className="mt-4 bg-red-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-red-400 transition-all duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default DisplayData;
