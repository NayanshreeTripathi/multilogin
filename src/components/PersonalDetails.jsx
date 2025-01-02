import React, { useEffect, useState } from "react";

const PersonalDetails = ({ data, updateData }) => {
  const [localData, setLocalData] = useState(() => {
    // Initialize from localStorage or fallback to passed data
    const storedData = window.localStorage.getItem("personalDetails");
    return storedData ? JSON.parse(storedData) : data || {};
  });

  // Save data to localStorage whenever it changes
  useEffect(() => {
    window.localStorage.setItem("personalDetails", JSON.stringify(localData));
    // Notify parent of changes
    updateData(localData);
  }, [localData]);

  const handleChange = (key, value) => {
    setLocalData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <div
      style={{
        backgroundColor: "#f0f8ff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <h3 style={{ color: "#007BFF", textAlign: "center" }}>Personal Details</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          placeholder="Full Name"
          value={localData.name || ""}
          onChange={(e) => handleChange("name", e.target.value)}
          required
          style={{
            padding: "10px",
            border: "1px solid #007BFF",
            borderRadius: "4px",
            fontSize: "16px",
            outline: "none",
          }}
        />
        <input
          type="email"
          placeholder="Email"
          value={localData.email || ""}
          onChange={(e) => handleChange("email", e.target.value)}
          required
          style={{
            padding: "10px",
            border: "1px solid #007BFF",
            borderRadius: "4px",
            fontSize: "16px",
            outline: "none",
          }}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={localData.phone || ""}
          onChange={(e) => handleChange("phone", e.target.value)}
          required
          style={{
            padding: "10px",
            border: "1px solid #007BFF",
            borderRadius: "4px",
            fontSize: "16px",
            outline: "none",
          }}
        />
      </div>
    </div>
  );
};

export default PersonalDetails;
