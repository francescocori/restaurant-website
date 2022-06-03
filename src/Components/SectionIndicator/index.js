import React from "react";
import "./style.css";
const SectionIndicator = ({ isCurrentSection }) => {
  return (
    <div>
      <ul className="navigation">
        <li className={`${isCurrentSection ? "selected" : ""}`}></li>
        <li className={`${isCurrentSection ? "selected" : ""}`}></li>
        <li className={`${isCurrentSection ? "selected" : ""}`}></li>
        <li className={`${isCurrentSection ? "selected" : ""}`}></li>
      </ul>
    </div>
  );
};

export default SectionIndicator;
