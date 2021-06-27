import React from "react";
import "./_footer.scss";

const Footer = () => {
  return (
    <div className="coder--footer">
      <div className="footer--top"></div>
      <div className="footer--bottom">
        Copyright {new Date().getFullYear()} Coder
      </div>
    </div>
  );
};

export default Footer;
