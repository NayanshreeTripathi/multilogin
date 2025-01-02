import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, data } from "react-router-dom";
import MultiStepForm from "./components/Multistepform";
import DisplayData from "./components/DispalyData";

const App = () => {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true)

  const fetchData = async() => {
    try {
      const storedData = window.localStorage.getItem("personalDetails");
      if(storedData){
        setFormData(JSON.parse(storedData));
      }else{
        console.log("no data in local storage")
      }
    } catch (error) {
      console.error(error);
    }finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])
  
  
  const handleLogout = () => {
      setFormData(null);
  };

  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MultiStepForm setFormData={setFormData} />} />
        <Route
          path="/display"
          element={<DisplayData formData={formData} handleLogout={handleLogout} loading={loading}/>}
        />     
      </Routes>
    </Router>
  );
};

export default App;
