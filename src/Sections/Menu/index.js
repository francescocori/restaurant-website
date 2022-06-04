import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import MenuColumn from "../../Components/MenuColumn";

const Menu = () => {
  const [menu, setMenu] = useState([]);

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

  const getMenuType = (menuType) => {
    switch (menuType) {
      case "starters":
        return "starters";
      case "main_courses":
        return "main courses";
      case "sides":
        return "sides";
      case "desserts":
        return "desserts";
      default:
        return null;
    }
  };
  return (
    <div className="menu__section " id="menu">
      <div className="menu__header__wrapper">
        <h2 className="menu__title">Our Menu</h2>
        <button className="menu__button">know more</button>
      </div>
      <div className="menu__main__content">
        {arraySorted.length &&
          arraySorted.map((item, index) => {
            if (item.length) {
              return (
                <div className="column" key={index}>
                  <h3 className="menu__type">
                    {getMenuType(arraySorted[index][0].type)}
                  </h3>
                  <MenuColumn
                    menu={arraySorted[index]}
                    index={index}
                    item={item}
                  />
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default Menu;
