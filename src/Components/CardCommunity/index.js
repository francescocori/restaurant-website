import React, { useEffect, useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faHeart } from "@fortawesome/free-solid-svg-icons";
import iceCream from "../../Assets/iceCream.jpeg";

const CardCommunity = ({ id, title, text, image, likes, comments }) => {
  // const [show, setShow] = useState(false);

  // useEffect(() => {
  //   let sceenHigh = offsetY;
  // }, []);
  // const checkCard = () => {
  //   if (offsetY > 300) {
  //     setShow(true);
  //     console.log(offsetY);
  //   } else {
  //     setShow(false);
  //   }
  // };
  return (
    <div className="card-community">
      <div className="card-img">
        <img src={image} alt="food" className="img" />

        <div className="instagram-logo">
          <i className="fab fa-instagram"></i>
        </div>
      </div>
      <div className="card-message">
        <div className="card-message-tag">{title}</div>
        <p className="card-message-post">{text}</p>

        <div className="icon-container">
          <span className="icon">
            <FontAwesomeIcon icon={faMessage} /> {comments}
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faHeart} /> {likes}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardCommunity;
