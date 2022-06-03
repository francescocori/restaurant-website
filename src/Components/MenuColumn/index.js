import React from "react";
import MenuItem from "../MenuItem";

import "./style.css";

const MenuColumn = ({ menu, offsetY, index, item, menu2 }) => {
  return (
    <div className="menu-column">
      {menu.length &&
        menu.map((item, index) => {
          return (
            <MenuItem
              key={menu[index].id}
              type={menu[index].type}
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
