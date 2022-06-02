import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const CardRecipe = ({ image, text, title }) => {
  return (
    <div className="card-recipe-container">
      <div className="img-container">
        <img src={image} alt="food" className="img" />
        <div className="servings">
          <div>
            <span>4</span> <br /> Serving
          </div>
        </div>
        <div className="arrow-back">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      <div className="text-container">
        <span>difficulty</span>
        <div className="item-name">{title}</div>
        <p className="item-description">{text}</p>
      </div>
    </div>
  );
};

export default CardRecipe;
