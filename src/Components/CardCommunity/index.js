import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faHeart } from "@fortawesome/free-solid-svg-icons";

const CardCommunity = ({ title, text, image, likes, comments }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="card__community" data-aos="fade-up">
      <div className="card__img__wrapper">
        <img src={image} alt="food" className="card__img" />

        <div className="card__instagram__logo">
          <i className="fab fa-instagram"></i>
        </div>
      </div>
      <div className="card__message__wrapper">
        <div className="card__title">{title}</div>
        <p className="card_text">{text}</p>

        <div className="card__icon_wrapper">
          <span className="card__social__icon">
            <FontAwesomeIcon icon={faMessage} /> {comments}
          </span>
          <span className="card__social__icon">
            <FontAwesomeIcon icon={faHeart} /> {likes}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardCommunity;
