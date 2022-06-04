import React from "react";
import "./style.css";
const MenuItem = ({ title, description, price, type }) => {
  return (
    <div className="menu-item">
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="price-box">£{price}</div>
    </div>
  );
};

export default MenuItem;
