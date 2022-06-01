import React from "react";
import "./style.css";
import bannerImg from "../../Assets/bannerImg2.jpg";
const Banner = () => {
  return (
    <div className="banner-section">
      <div className="header">
        <h1>
          <span className="header-sub">THE BEST FOODIE</span>
          <span className="header-main">EXPERIENCE</span>
          <span className="header-location">NOW IN LONDON</span>
        </h1>
      </div>
    </div>
  );
};

export default Banner;