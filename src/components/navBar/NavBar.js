import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <i className="fa-solid fa-dice-d20"></i>
        <span className="logo-text">CreatedbyLukas</span>
      </div>
      <div className="tabs">
        <Link className="link" to="/resume">
          <div className="tab">Home</div>
        </Link>
        <Link className="link" to="/education">
          <div className="tab">Education</div>
        </Link>
        <Link className="link" to="/skills">
          <div className="tab">Skills</div>
        </Link>
        <Link className="link" to="/portfolio">
          <div className="tab">Portfolio</div>
        </Link>
        <Link className="link" to="/contacts">
          <div className="tab">Contacts</div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
