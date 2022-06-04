import React from "react";
import MenuItem from "../MenuItem";

const MenuColumn = ({ menu }) => {
  return (
    <div>
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
