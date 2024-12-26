import React, { useState } from "react";

const Education = ({ data, updateData }) => {
  const [education, setEducation] = useState({
    institution: "",
    degree: "",
    year: "",
  });

  const addEducation = () => {
    updateData([...data, education]);
    setEducation({ institution: "", degree: "", year: "" });
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
      <h3 style={{ color: "#007BFF", textAlign: "center" }}>Education</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          placeholder="Institution"
          value={education.institution}
          onChange={(e) =>
            setEducation({ ...education, institution: e.target.value })
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
          placeholder="Degree"
          value={education.degree}
          onChange={(e) =>
            setEducation({ ...education, degree: e.target.value })
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
          placeholder="Year"
          value={education.year}
          onChange={(e) => setEducation({ ...education, year: e.target.value })}
          style={{
            padding: "10px",
            border: "1px solid #007BFF",
            borderRadius: "4px",
            fontSize: "16px",
            outline: "none",
          }}
        />
        <button
          onClick={addEducation}
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
        {data.map((edu, index) => (
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
            {edu.institution}, {edu.degree} ({edu.year})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
