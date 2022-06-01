import React from "react";
import MenuItem from "../MenuItem";

import "./style.css";

const MenuColumn = ({ menu }) => {
  return (
    <div className="menu-column">
      <h2>starters</h2>

      {menu.map((item, index) => {
        return (
          <MenuItem
            title={menu[index].title}
            description={menu[index].description}
            price={menu[index].price}
          />
        );
      })}
    </div>
  );
};

export default MenuColumn;
