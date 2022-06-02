import React, { useEffect, useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faHeart } from "@fortawesome/free-solid-svg-icons";
import iceCream from "../../Assets/iceCream.jpeg";

const CardCommunity = ({ id, title, text, image, likes, comments }) => {
  const [offsetY, setOffsetY] = useState(0);
  const [show, setShow] = useState(false);

  //calculate scroll
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
    if (offsetY > 200) {
      setShow(true);
      console.log("over 200");
    } else if (offsetY < 200) {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log("show", show);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [show]);

  return (
    <div className={`card-community ${show ? "show" : ""}`}>
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
          {/* <p>{offsetY}</p> */}
        </div>
      </div>
    </div>
  );
};

export default CardCommunity;
