import React from "react";
import "./style.css";
const MenuItem = ({ title, description, price }) => {
  return (
    <div className="menu-item">
      <h4>{title}</h4>
      <p>{description}</p>
      <div>{price}</div>
    </div>
  );
};

export default MenuItem;