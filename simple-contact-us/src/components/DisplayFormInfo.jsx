import React from "react";

const DisplayFormInfo = ({ formData }) => {
  if (!formData.name && !formData.email && !formData.text) {
    return null;
  }

  return (
    <div style={{ marginTop: "25px" }}>
      <ul style={{ listStyle: "circle" }}>
        <li>Name: {formData.name}</li>
        <li>Email: {formData.email}</li>
        <li>Text: {formData.text}</li>
      </ul>
    </div>
  );
};

export default DisplayFormInfo;
