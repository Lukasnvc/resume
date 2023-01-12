import React from "react";
import "./navBar.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="nav-container fourth-color">
      <div className="logo">Luko</div>
      <div className="tabs">
        <div onClick={() => navigate("/")} className="tab">
          Home
        </div>
        <div className="tab">Details</div>
        <div className="tab">Portfolio</div>
        <div onClick={() => navigate("/contacts")} className="tab">
          Contacts
        </div>
      </div>
    </div>
  );
};

export default NavBar;
