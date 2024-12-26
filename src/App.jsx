import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MultiStepForm from "./components/Multistepform";
import DisplayData from "./components/DispalyData";

const App = () => {
  const [formData, setFormData] = useState(null);

  // Handle logout logic
  const handleLogout = () => {
    // Clear any session or local state (if needed)
    setFormData(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MultiStepForm setFormData={setFormData} />} />
        <Route
          path="/display"
          element={<DisplayData formData={formData} handleLogout={handleLogout} />}
        />     
      </Routes>
    </Router>
  );
};

export default App;
