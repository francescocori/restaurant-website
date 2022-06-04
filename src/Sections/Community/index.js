import React from "react";
import "./style.css";
import CardCommunity from "../../Components/CardCommunity";
import communityData from "../../Data/CommunityData";

const Community = () => {
  return (
    <div className="community__section section" id="community">
      <div className=" community__header__wrapper">
        <h2 className="community__title">
          meet our <br />
          <span className="community__title__line__through">community</span>
        </h2>
        <button className="community__title__button">know more</button>
        <p className="community__title__text">
          Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit.
        </p>
      </div>

      {communityData.map((card) => {
        return (
          <div className="community__section__row" key={card.id}>
            <CardCommunity {...card} />
          </div>
        );
      })}
    </div>
  );
};

export default Community;
