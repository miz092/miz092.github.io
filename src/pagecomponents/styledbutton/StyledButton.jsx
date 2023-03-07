import React from "react";
import "./StyledButton.css";
function StyledButton({ text }) {
  return (
    <button href="#" className="styledButton">
      {text}
    </button>
  );
}

export default StyledButton;
