import React from "react";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import pic from "../../IMG_4886.JPG";
import "./home.css";

const HomePage = () => {
  return (
    <div className="main-container">
      <NavBar />

      <div className="about-container">
        <div className="top">
          <h1>Lukas Novickas</h1>
        </div>
        <div className="bottom">
          <h2>Front-End Developer</h2>
        </div>
        <img className="avatar" src={pic} alt="avatar" />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
