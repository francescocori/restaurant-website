import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CardRecipe = ({ image, text, title, serving }) => {
  return (
    <div className="card__recipe ">
      <div className="recipe__img__wrapper">
        <img src={image} alt="food" className="recipe__img" />
        <div className="recipe__servings__wrapper">
          <div>
            <span>{serving}</span> <br /> Serving
          </div>
        </div>
        <div className="recipe__arrow__back">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      <div className="recipe__text__wrapper">
        <span className="recipe__difficulty">difficulty</span>
        <div className="recipe__title">{title}</div>
        <p className="recipe__text">{text}</p>
      </div>
    </div>
  );
};

export default CardRecipe;
