import React, { useState } from "react";

const Experience = ({ data, updateData }) => {
  const [experience, setExperience] = useState({
    company: "",
    role: "",
    years: "",
  });

  const addExperience = () => {
    updateData([...data, experience]);
    setExperience({ company: "", role: "", years: "" });
  };

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
      <h3 style={{ color: "#007BFF", textAlign: "center" }}>Experience</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          placeholder="Company"
          value={experience.company}
          onChange={(e) =>
            setExperience({ ...experience, company: e.target.value })
          }
          style={{
            padding: "10px",
            border: "1px solid #007BFF",
            borderRadius: "4px",
            fontSize: "16px",
            outline: "none",
          }}
        />
        <input
          type="text"
          placeholder="Role"
          value={experience.role}
          onChange={(e) =>
            setExperience({ ...experience, role: e.target.value })
          }
          style={{
            padding: "10px",
            border: "1px solid #007BFF",
            borderRadius: "4px",
            fontSize: "16px",
            outline: "none",
          }}
        />
        <input
          type="text"
          placeholder="Years"
          value={experience.years}
          onChange={(e) =>
            setExperience({ ...experience, years: e.target.value })
          }
          style={{
            padding: "10px",
            border: "1px solid #007BFF",
            borderRadius: "4px",
            fontSize: "16px",
            outline: "none",
          }}
        />
        <button
          onClick={addExperience}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "#ffffff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Add
        </button>
      </div>
      <ul
        style={{
          listStyleType: "none",
          padding: "0",
          marginTop: "15px",
        }}
      >
        {data.map((exp, index) => (
          <li
            key={index}
            style={{
              padding: "10px",
              backgroundColor: "#e6f7ff", // Light blue background for list items
              marginBottom: "5px",
              borderRadius: "4px",
              color: "#333",
              fontSize: "16px",
            }}
          >
            {exp.company}, {exp.role} ({exp.years} years)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
