import React, { useEffect } from "react";

const PersonalDetails = ({ data, updateData }) => {
    useEffect(() => {
        localStorage.setItem("personalDetails", JSON.stringify(data));
      }, [data]);
    
  return (
    <div
      style={{
        backgroundColor: "#f0f8ff", // Light blue background
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
          value={data.name || ""}
          onChange={(e) => updateData({ ...data, name: e.target.value })}
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
          value={data.email || ""}
          onChange={(e) => updateData({ ...data, email: e.target.value })}
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
          value={data.phone || ""}
          onChange={(e) => updateData({ ...data, phone: e.target.value })}
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