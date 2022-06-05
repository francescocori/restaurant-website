import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCutlery } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  return (
    <>
      <nav className="nav">
        <h2 className="nav__logo">Logo</h2>

        <FontAwesomeIcon
          className="nav__icon__mobile"
          icon={faCutlery}
          onClick={handleClick}
        />
        <div
          className={`nav__links__wrapper ${
            isActive ? "nav__link__active" : ""
          }`}
        >
          <ul>
            <li className="nav__item">
              <a href="#home">Home</a>
            </li>
            <li className="nav__item">
              <a href="#community">Community</a>
            </li>
            <li className="nav__item">
              <a href="#location">Location</a>
            </li>
            <li className="nav__item">
              <a href="#menu">Our Menu</a>
            </li>
            <li className="nav__item">
              <a href="#recipies">Recipes</a>
            </li>
          </ul>
          <div className="nav__items_right">
            <a href="#contact">Contact</a>
            <a href="#">Login</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
