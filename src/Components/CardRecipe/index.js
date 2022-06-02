import React from "react";
import "./style.css";
const CardRecipe = ({ image, text, title }) => {
  return (
    <div className="card-recipe">
      <div className="card-recipe-img">
        <img src={image} alt="food" className="img" />
      </div>
      <div className="card-recipe-text">
        <div className="g">{title}</div>
        <p className="t">{text}</p>
      </div>
    </div>
  );
};

export default CardRecipe;
