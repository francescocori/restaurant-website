import React, { useRef } from "react";
import "./style.css";
import PopularRecipesData from "../../Data/PopularRecipesData";
import CardRecipe from "../../Components/CardRecipe";
const PopularReceipes = () => {
  return (
    <div className="popular-recipes-section section" id="recipies">
      <div className=" section-header">
        <h2 className="section-title">
          popular <br />
          <span className="title-line-through">recipes</span>
        </h2>
        <button className="main-button">see all</button>
      </div>
      <div className="horizontal-scroll">
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
      {/* <div className="arrows-container">
        <button onClick={() => handleScroll(-100)}>right</button>
        <button onClick={() => handleScroll(100)}>left</button>
      </div> */}
    </div>
  );
};

export default PopularReceipes;
