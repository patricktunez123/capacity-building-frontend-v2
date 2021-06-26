import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { menus } from "../Menus/Menus";
import "./_header.scss";

const Header = () => {
  return (
    <div className="coder--header">
      <div className="left">
        <img src={logo} alt="Coder" />
        <ul>
          {menus.map((menu) => (
            <li key={menu.id}>
              <Link to="/">{menu.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="right">
        <button>Sign or Signup</button>
        <button>Donate</button>
      </div>
    </div>
  );
};

export default Header;
