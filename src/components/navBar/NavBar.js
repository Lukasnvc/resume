import React from "react";
import "./navBar.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="nav-container">
      <div className="logo">
        <i class="fa-solid fa-dice-d20"></i>
        <span className="logo-text">CreatedbyLukas</span>
      </div>
      <div className="tabs">
        <div onClick={() => navigate("/")} className="tab">
          Home
        </div>
        <div onClick={() => navigate("/about")} className="tab">
          About
        </div>
        <div onClick={() => navigate("/skills")} className="tab">
          Skills
        </div>
        <div onClick={() => navigate("/portfolio")} className="tab">
          Portfolio
        </div>
        <div onClick={() => navigate("/contacts")} className="tab">
          Contacts
        </div>
      </div>
    </div>
  );
};

export default NavBar;
