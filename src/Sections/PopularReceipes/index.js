import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import PopularRecipesData from "../../Data/PopularRecipesData";
import CardRecipe from "../../Components/CardRecipe";
const PopularReceipes = () => {
  // const ref = useRef(!null);
  // const handleScroll = (scrollOffset) => {
  //   aref.current.scrollLeft += scrollOffset;
  // };
  // const scroll = (scrollOffset) => {
  //   ref.current.scrollLeft += scrollOffset;
  // };

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
      {/* <div className="arrows-container">
        <button onClick={() => handleScroll(-20)}>left</button>
        <button onClick={() => handleScroll(20)}>right</button>
      </div> */}
    </div>
  );
};

export default PopularReceipes;
