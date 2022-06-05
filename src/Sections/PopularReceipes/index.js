import React from "react";
import "./style.css";
import { CardRecipe } from "../../Components";
import PopularRecipesData from "../../Data/PopularRecipesData";

const PopularReceipes = () => {
  return (
    <div className="recipes__section " id="recipies">
      <div className=" recipes__header__wrapper">
        <h2 className="section__title ">
          popular <br />
          <span className="title__line__through">recipes</span>
        </h2>
        <button className="main__button">see all</button>
      </div>
      <div className="recipes__horizontal__scroll">
        {PopularRecipesData.map((item) => {
          return (
            <div key={item.id}>
              <CardRecipe
                image={item.image}
                title={item.title}
                text={item.text}
                serving={item.serving}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularReceipes;
