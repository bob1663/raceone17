import React from "react";
import "./Home.css";
import NextButton from "../../assets/NextButton.png";
import PrevButton from "../../assets/PrevButton.png";
import { MainCarousel } from "../../components";

const Home = () => {
  return <div className="app__home">
      <MainCarousel />
      
  </div>;
};

export default Home;
