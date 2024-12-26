import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import PersonalDetails from "./PersonalDetails";
import SocialLinks from "./SocialLinks";
import Skills from "./Skills";
import Address from "./Address";
import Education from "./Education";
import Experience from "./Experience";
import Verification from "./Verification";
import { db } from "../firebase";

const MultiStepForm = ({ setFormData }) => {
  const steps = [
    PersonalDetails,
    SocialLinks,
    Skills,
    Address,
    Education,
    Experience,
    Verification,
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setLocalFormData] = useState({
    personalDetails: {},
    socialLinks: {},
    skills: [],
    address: "",
    education: [],
    experience: [],
  });

  const navigate = useNavigate();
  const auth = getAuth();

  const StepComponent = steps[currentStep];

  const updateData = (newData) => {
    const keys = Object.keys(formData);
    setLocalFormData({ ...formData, [keys[currentStep]]: newData });
  };

  const handleSubmit = async () => {
    try {
      // Add form data to Firestore
      const docRef = await addDoc(collection(db, "multiLoginUsers"), formData);
      console.log("Document written with ID: ", docRef.id);

      // Redirect to the display data page after successful submission
      setFormData(formData);
      navigate("/display");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-400 text-white py-8 px-6 flex flex-col items-center justify-start">
      <div className="w-full max-w-4xl mb-6">
        <div className="flex justify-between">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`text-center py-2 px-6 rounded-full font-semibold transition-all duration-300 ${
                index <= currentStep
                  ? "bg-white text-black"
                  : "bg-gray-600 text-gray-400"
              }`}
            >
              {`Step ${index + 1}`}
            </div>
          ))}
        </div>
      </div>

      {/* Form Step */}
      <div className="bg-white text-black mt-9 p-8 rounded-lg shadow-lg w-full max-w-3xl">
        {currentStep < steps.length - 1 ? (
          <StepComponent
            data={formData[Object.keys(formData)[currentStep]]}
            updateData={updateData}
          />
        ) : (
          <Verification onConfirm={handleSubmit} />
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-6">
          {currentStep > 0 && (
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="bg-gray-600 text-white py-2 px-6 rounded-md shadow-md hover:bg-gray-500 transition-all duration-200"
            >
              Previous
            </button>
          )}
          {currentStep < steps.length - 1 ? (
            <button
              onClick={() => setCurrentStep(currentStep + 1)}
              className="bg-gray-600 text-white py-2 px-6 rounded-md shadow-md hover:bg-gray-500 transition-all duration-200"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-green-400 transition-all duration-200"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
