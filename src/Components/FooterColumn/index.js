import React from "react";
import "./style.css";
const FooterColumn = ({ Section }) => {
  return (
    <div className="footer__column">
      <h4 className="footer__column__header">{Section}</h4>
      <ul className="column__list__items">
        <li className="column__item">Subsection</li>
        <li className="column__item">Subsection</li>
        <li className="column__item">Subsection</li>
        <li className="column__item">Subsection</li>
      </ul>
    </div>
  );
};

export default FooterColumn;
