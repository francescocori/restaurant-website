import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import MenuColumn from "../../Components/MenuColumn";
import menu from "../../Data/MenuData";
const Menu = () => {
  // const menu = [
  //   {
  //     id: 12,
  //     title: "pizza",
  //     description: "asdasd",
  //     price: 99,
  //     type: "starters",
  //   },
  //   {
  //     id: 13,
  //     title: "pizzaz",
  //     description: "asdasd",
  //     price: 99,
  //     type: "main_courses",
  //   },
  //   {
  //     id: 14,
  //     title: "pizza",
  //     description: "asdasd",
  //     price: 99,
  //     type: "sides",
  //   },
  //   {
  //     id: 15,
  //     title: "pizzaz",
  //     description: "asdasd",
  //     price: 99,
  //     type: "desserts",
  //   },
  //   {
  //     id: 1233,
  //     title: "pizza",
  //     description: "asdasd",
  //     price: 99,
  //     type: "starters",
  //   },
  //   {
  //     id: 133,
  //     title: "pizzaz",
  //     description: "asdasd",
  //     price: 99,
  //     type: "main_courses",
  //   },
  //   {
  //     id: 141,
  //     title: "pizza",
  //     description: "asdasd",
  //     price: 99,
  //     type: "sides",
  //   },
  //   {
  //     id: 151,
  //     title: "pizzaz",
  //     description: "asdasd",
  //     price: 99,
  //     type: "desserts",
  //   },
  // ];

  console.log("hello");
  // const getMenuData = () => {
  //   axios
  //     .get("https://studiographene-exercise-api.herokuapp.com/foods")
  //     .then((res) => {
  //       setMenu((prevMenu) => {
  //         return res.data;
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   getMenuData();
  // }, []);

  const sortMenuByTypes = (menu) => {
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
  const menuTypesArray = sortMenuByTypes(menu);

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
        <h2 className="section__title title__line__through">Our Menu</h2>
        <button className="main__button">know more</button>
      </div>
      <div className="menu__main__content">
        {menuTypesArray.length &&
          menuTypesArray.map((item, index) => {
            if (item.length) {
              return (
                <div className="menu__column__wrapper" key={index}>
                  <h3 className="menu__type">
                    {getMenuType(menuTypesArray[index][0].type)}
                  </h3>
                  <MenuColumn menu={item} />
                </div>
              );
            } else {
              return null;
            }
          })}
      </div>
    </div>
  );
};

export default Menu;
