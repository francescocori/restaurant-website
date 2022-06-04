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
      <nav className="navbar">
        <div className="logo">Logo</div>

        <FontAwesomeIcon
          className="toggle-button"
          icon={faCutlery}
          onClick={handleClick}
        />
        <div className={`nav-links ${isActive ? "active" : ""}`}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#community">Community</a>
            </li>
            <li>
              <a href="#location">Location</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#recipies">Recipies</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
