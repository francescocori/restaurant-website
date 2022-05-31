import React from "react";
import "./style.css";
import CardCommunity from "../../Components/CardCommunity";
const Community = () => {
  return (
    <div className="community-section">
      <div className="community-message">
        <h2>meet our community</h2>

        <button>know more</button>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <CardCommunity />
        <CardCommunity />
        <CardCommunity />
      </div>
    </div>
  );
};

export default Community;
