import React from "react";
import MenuItem from "../MenuItem";

const MenuColumn = ({ menu }) => {
  return (
    <div>
      {menu.length &&
        menu.map((item) => {
          return (
            <MenuItem
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          );
        })}
    </div>
  );
};

export default MenuColumn;
