import React from "react";

const Verification = ({ onConfirm }) => {
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
      <h3 style={{ color: "#007BFF", textAlign: "center" }}>Review and Confirm</h3>
      <p style={{ fontSize: "16px", color: "#333", textAlign: "center" }}>
        Please review all the details you have entered before submitting.
      </p>
      <div style={{ textAlign: "center" }}>
        <button
          onClick={onConfirm}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "#ffffff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
            marginTop: "20px",
          }}
        >
          Confirm and Submit
        </button>
      </div>
    </div>
  );
};

export default Verification;


