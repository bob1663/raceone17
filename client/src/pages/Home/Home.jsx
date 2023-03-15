import React from "react";
import "./Home.css";
import NextButton from "../../assets/NextButton.png";
import PrevButton from "../../assets/PrevButton.png";
import { MainCarousel } from "../../components";

const Home = () => {
  return (
    <div className="app__home">
      <div className="app__carousel-buttons">
        <div className="app__carousel-buttons-content">
          <img src={PrevButton} alt="Previous" className="app__prev-button" />
        </div>
        <div className="app__carousel-buttons-content">
          <img src={NextButton} alt="Next" className="app__next-button" />
        </div>
      </div>
      <MainCarousel />
    </div>
  );
};

export default Home;
