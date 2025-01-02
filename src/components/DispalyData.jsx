import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";


const DisplayData = ({ formData, handleLogout, loading }) => {
  const navigate = useNavigate();
  const auth = getAuth();
  const userId = auth.currentUser?.uid;
  console.log("Fetched User ID:", userId);

  const handleLogoutClick = () => {

    handleLogout();
    navigate("/");
  };

  const handleUpdateClick = () => {
    navigate("/", { state: { formData } });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  
  if (!formData) {
    return <div>No data available.</div>;
  }


  const userName = formData.name || "User";

  return (
    <div className="min-h-screen bg-gradient-to-bl from-slate-800 to-slate-600 py-8 px-6 flex flex-col items-center justify-center">
      <div className="bg-white text-black mt-9 p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-2xl font-semibold mb-4">Welcome, {userName}!</h1>

        <div className="flex justify-between p-2 items-center">
          <button
            onClick={handleLogoutClick}
            className="mt-4 bg-red-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-red-400 transition-all duration-200"
          >
            Logout
          </button>

          <button
            onClick={handleUpdateClick}
            className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-blue-400 transition-all duration-200"
          >
            Update
          </button>
        </div>

      </div>
    </div>
  );
};

export default DisplayData;
