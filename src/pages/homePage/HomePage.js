import pic from "../../IMG_4886.JPG";
import "./home.scss";

const HomePage = () => {
  return (
    <div className="main-container">
      <div className="home-container">
        <div className="top">
          <h1>Lukas Novickas</h1>
        </div>
        <div className="bottom">
          <h2>Front-End Developer</h2>
        </div>
        <img className="avatar" src={pic} alt="avatar" />
      </div>
    </div>
  );
};

export default HomePage;
