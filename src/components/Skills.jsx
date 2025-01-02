import React, { useState } from "react";

const Skills = ({ data, updateData }) => {
  const [skill, setSkill] = useState("");

  const addSkill = () => {
    if (skill.trim() && !data.includes(skill)) {
      updateData([...data, skill]);
      setSkill("");
    }
  };

  const deleteSkill = (skillToDelete) => {
    updateData(data.filter((item) => item !== skillToDelete));
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
      <h3 style={{ color: "#007BFF", textAlign: "center" }}>Skills</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            placeholder="Add a skill"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            style={{
              flex: 1,
              padding: "10px",
              border: "1px solid #007BFF",
              borderRadius: "4px",
              fontSize: "16px",
              outline: "none",
            }}
          />
          <button
            onClick={addSkill}
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
            margin: "0",
          }}
        >
          {data.map((item, index) => (
            <li
              key={index}
              style={{
                padding: "10px",
                backgroundColor: "#e6f7ff",
                marginBottom: "5px",
                borderRadius: "4px",
                color: "#333",
                fontSize: "16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {item}
              <button
                onClick={() => deleteSkill(item)}
                style={{
                  backgroundColor: "#ff4d4d",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "4px",
                  padding: "5px 10px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
