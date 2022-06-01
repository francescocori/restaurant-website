import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
const Menu = () => {
  const [menu, setMenu] = useState();

  const getMenuData = () => {
    axios
      .get("https://studiographene-exercise-api.herokuapp.com/foods")
      .then((res) => {
        console.log(res.data);
        setMenu(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMenuData();
  }, []);
  return (
    <div className="menu-section">
      <div className="menu-header">
        <h2>Our Menu</h2>
        <button className="main-button">know more</button>
      </div>
      <div className="menu-main">
        <div className="column">a</div>
        <div className="column">a</div>
        <div className="column">a</div>
        <div className="column">a</div>
      </div>
    </div>
  );
};

export default Menu;
