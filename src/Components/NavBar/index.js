import React from "react";
import "./style.css";
const NavBar = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div className="navBar">
        <a href="#home">Home</a>
        <a href="#community">Community</a>
        <a href="#location">Location</a>
        <a href="#menu">Menu</a>
        <a href="#recipies">Recipies</a>
      </div>
    </>
  );
};

export default NavBar;
