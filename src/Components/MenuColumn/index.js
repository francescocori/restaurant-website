import React from "react";
import MenuItem from "../MenuItem";

import "./style.css";

const MenuColumn = ({ menu }) => {
  return (
    <div className="menu-column">
      {/* <h3>{menu[0].type}</h3>   */}

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
