import React, { useState, useEffect } from "react";
import MenuItem from "../MenuItem";

import "./style.css";

const MenuColumn = ({ menu }) => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="menu-column">
      {/* <h3>{menu[0].type}</h3>   */}

      {menu.map((item, index) => {
        return (
          <MenuItem
            offsetY={offsetY}
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
