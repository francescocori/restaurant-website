import React from "react";
import "./style.css";
import PopularRecipesData from "../../Data/PopularRecipesData";
import CardRecipe from "../../Components/CardRecipe";
const PopularReceipes = () => {
  return (
    <div className="popular-recipes-container">
      {PopularRecipesData.map((item) => {
        return (
          <div>
            <CardRecipe
              image={item.image}
              title={item.title}
              text={item.text}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PopularReceipes;
