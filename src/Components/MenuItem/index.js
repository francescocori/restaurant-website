import React from "react";
import "./style.css";
const MenuItem = ({ title, description, price }) => {
  return (
    <div className="menu__item">
      <h4 className="item__title">{title}</h4>
      <p className="item__description">{description}</p>
      <div className="item__price">£{price}</div>
    </div>
  );
};

export default MenuItem;
