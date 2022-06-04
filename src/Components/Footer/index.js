import React from "react";
import "./style.css";
import FooterColumn from "../FooterColumn";
import FooterData from "../../Data/FooterData";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left__side">
        {FooterData.map((section) => {
          return <FooterColumn Section={section.section} />;
        })}
      </div>
      <div className="footer__right__side">
        <h2>This is the Logo</h2>
        <div className="footer__social__icons">
          <ul>
            <li>
              <i className="fab fa-instagram"></i>
            </li>
            <li>
              <i className="fab fa-github"></i>
            </li>
            <li>
              <i className="fab fa-linkedin"></i>
            </li>
            <li>
              <i className="fab fa-twitter"></i>
            </li>
            <li>
              <i className="fab fa-facebook"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
