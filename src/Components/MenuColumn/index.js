import { faMultiply } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import MenuItem from "../MenuItem";

import "./style.css";

const MenuColumn = ({ menu, offsetY, index }) => {
  const alternateParallax = index % 2 === 0 ? -0.1 : 0.1;
  return (
    <div
      className="menu-column"
      // style={{ transform: `translateY(${offsetY * alternateParallax}px)` }}
    >
      {/* <h3>{menu[0].type}</h3>   */}

      {menu.map((item, index) => {
        return (
          <MenuItem
            // offsetY={offsetY}
            title={menu[index].title}
            description={menu[index].description}
            price={menu[index].price}
            offsetY={offsetY}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default MenuColumn;
