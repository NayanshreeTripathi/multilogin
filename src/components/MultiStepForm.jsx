import React, { useState, useEffect } from "react";
import { collection, doc, addDoc, updateDoc, getDocs, query, where } from "firebase/firestore";
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
    personalDetails: {
      email: "",
    },
    socialLinks: {},
    skills: [],
    address: "",
    education: [],
    experience: [],
  });
  const [isUpdateMode, setIsUpdateMode] = useState(false); // New state to track update mode
  const navigate = useNavigate();
  const StepComponent = steps[currentStep];

  const updateData = (newData) => {
    const keys = Object.keys(formData);
    setLocalFormData({ ...formData, [keys[currentStep]]: newData });
  };

  // Check if a document exists for the provided email
  const checkUpdateMode = async () => {
    try {
      const email = formData.personalDetails.email;
      if (email) {
        const usersRef = collection(db, "multiLoginUsers");
        const q = query(usersRef, where("personalDetails.email", "==", email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          setIsUpdateMode(true); // Document exists, enable update mode
        } else {
          setIsUpdateMode(false); // No matching document, create a new one
        }
      }
    } catch (error) {
      console.error("Error checking update mode:", error);
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      const email = formData.personalDetails.email;
      if (!email) {
        alert("Email is required to submit the form.");
        return;
      }

      const usersRef = collection(db, "multiLoginUsers");
      const q = query(usersRef, where("personalDetails.email", "==", email));
      const querySnapshot = await getDocs(q);

      let docRef;
      if (!querySnapshot.empty) {
        const docId = querySnapshot.docs[0].id;
        docRef = doc(db, "multiLoginUsers", docId);
        await updateDoc(docRef, formData);
        console.log("Document updated with ID: ", docId);
      } else {
        docRef = await addDoc(usersRef, formData);
        console.log("New document created with ID: ", docRef.id);
      }

      setFormData(formData);
      navigate("/display");
    } catch (error) {
      console.error("Error saving document:", error);
      alert("Failed to save data. Please try again.");
    }
  };

  useEffect(() => {
    checkUpdateMode(); // Check update mode whenever the formData changes
  }, [formData.personalDetails.email]);

  return (
    <div className="min-h-screen bg-gradient-to-bl from-slate-800 to-slate-600 text-white py-8 px-6 flex flex-col items-center justify-start">
      <div className="w-full max-w-4xl mb-6">
        <div className="flex justify-between">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`text-center py-2 px-6 rounded-full font-semibold transition-all duration-300 ${
                index <= currentStep
                  ? "bg-white text-black"
                  : "bg-slate-700 text-gray-200"
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
              className={`py-2 px-6 rounded-md shadow-md transition-all duration-200 ${
                isUpdateMode
                  ? "bg-blue-600 hover:bg-blue-400 text-white"
                  : "bg-green-500 hover:bg-green-400 text-white"
              }`}
            >
              {isUpdateMode ? "Update" : "Submit"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
