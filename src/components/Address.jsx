import React from "react";

const Address = ({ data, updateData }) => {
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
      <h3 style={{ color: "#007BFF", textAlign: "center" }}>Address</h3>
      <textarea
        placeholder="Enter your address"
        value={data || ""}
        onChange={(e) => updateData(e.target.value)}
        style={{
          width: "100%",
          padding: "9px",
          border: "1px solid #007BFF",
          borderRadius: "4px",
          fontSize: "16px",
          outline: "none",
          minHeight: "100px", // Adds height for the text area
          resize: "vertical", // Allows vertical resizing of the text area
        }}
      />
    </div>
  );
};

export default Address;
