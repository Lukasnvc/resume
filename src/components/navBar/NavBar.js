import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <i class="fa-solid fa-dice-d20"></i>
        <span className="logo-text">CreatedbyLukas</span>
      </div>
      <div className="tabs">
        <div className="tab">
          <Link className="link" to="/">
            Home
          </Link>
        </div>
        <div className="tab">
          <Link className="link" to="/about">
            About
          </Link>
        </div>
        <div className="tab">
          <Link className="link" to="/skills">
            Skills
          </Link>
        </div>
        <div className="tab">
          <Link className="link" to="/portfolio">
            Portfolio
          </Link>
        </div>
        <div className="tab">
          <Link className="link" to="/contacts">
            Contacts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
