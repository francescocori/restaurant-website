import React from "react";
import "./style.css";

const Banner = () => {
  return (
    <div className="banner__section section" id="home">
      <div className="banner__header__wrapper">
        <h1>
          <span className="benner__title__sub">THE BEST FOODIE</span>
          <span className="benner__title__main">EXPERIENCE</span>
          <span className="benner__title__location">NOW IN LONDON</span>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
