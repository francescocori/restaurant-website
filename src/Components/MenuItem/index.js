import React from "react";
import "./style.css";
const MenuItem = ({ title, description, price, offsetY }) => {
  return (
    <div
      className="menu-item"
      // style={{ transform: `trasnlateY(-${offsetY * 0.5}px)` }}
    >
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="price-box">£{price}</div>
    </div>
  );
};

export default MenuItem;
