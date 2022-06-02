import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import axios from "axios";
import MenuColumn from "../../Components/MenuColumn";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [offsetY, setOffsetY] = useState(0);
  const getMenuData = () => {
    axios
      .get("https://studiographene-exercise-api.herokuapp.com/foods")
      .then((res) => {
        setMenu((prevMenu) => {
          return res.data;
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMenuData();
  }, []);

  const sortByTypes = (menu) => {
    const starters = [];
    const mains = [];
    const sides = [];
    const desserts = [];

    for (let i = 0; i < menu.length; i++) {
      if (menu[i].type === "starters") {
        starters.push(menu[i]);
      } else if (menu[i].type === "main_courses") {
        mains.push(menu[i]);
      } else if (menu[i].type === "sides") {
        sides.push(menu[i]);
      } else if (menu[i].type === "desserts") {
        desserts.push(menu[i]);
      }
    }

    return [starters, mains, sides, desserts];
  };
  const arraySorted = sortByTypes(menu);
  //////////////////////////////////////////////////

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="menu-section" id="menu">
      <div className="menu-header">
        <h2>Our Menu</h2>
        <button className="main-button">know more</button>
      </div>
      <div className="menu-main">
        {arraySorted.map((item, index) => {
          return (
            <MenuColumn
              menu={arraySorted[index]}
              offsetY={offsetY}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
