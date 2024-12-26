import React from "react";

const SocialLinks = ({ data, updateData }) => {
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
      <h3 style={{ color: "#007BFF", textAlign: "center" }}>Social Links</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="url"
          placeholder="LinkedIn Profile"
          value={data.linkedin || ""}
          onChange={(e) => updateData({ ...data, linkedin: e.target.value })}
          style={{
            padding: "10px",
            border: "1px solid #007BFF",
            borderRadius: "4px",
            fontSize: "16px",
            outline: "none",
          }}
        />
        <input
          type="url"
          placeholder="GitHub Profile"
          value={data.github || ""}
          onChange={(e) => updateData({ ...data, github: e.target.value })}
          style={{
            padding: "10px",
            border: "1px solid #007BFF",
            borderRadius: "4px",
            fontSize: "16px",
            outline: "none",
          }}
        />
        <input
          type="url"
          placeholder="Portfolio"
          value={data.portfolio || ""}
          onChange={(e) => updateData({ ...data, portfolio: e.target.value })}
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

export default SocialLinks;
