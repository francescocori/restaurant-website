import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faHeart } from "@fortawesome/free-solid-svg-icons";
import iceCream from "../../Assets/iceCream.jpeg";

const CardCommunity = () => {
  return (
    <div className="card">
      <div className="card-img">
        <div className="instagram-logo">
          <i className="fab fa-instagram"></i>
        </div>
        {/* <img src={iceCream} alt="icecream" /> */}
      </div>
      <div className="card-message">
        <div className="card-message-tag">@hello</div>
        <p className="card-message-post">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <span className="icon">
          <FontAwesomeIcon icon={faMessage} /> 20
        </span>
        <span className="icon">
          <FontAwesomeIcon icon={faHeart} /> 15K
        </span>
      </div>
    </div>
  );
};

export default CardCommunity;
