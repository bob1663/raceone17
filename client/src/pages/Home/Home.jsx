import React, { useRef, useState, useEffect } from "react";
import "./Home.css";
import NextButton from "../../assets/NextButton.png";
import PrevButton from "../../assets/PrevButton.png";
import { MainCarousel } from "../../components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../../constants";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  nextArrow: <img src={NextButton} alt="Next" className="app__next-button" />,
  prevArrow: (
    <img src={PrevButton} alt="Previous" className="app__prev-button" />
  ),
  appendDots: (dots) => (
    <div
      style={{
        position: "absolute",
        bottom: "100px",
        textAlign: "center",
        width: "100%",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ul
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          gap: "16px",
        }}
      >
        {dots.map((dot, index) => {
          const className = dot.props.className || "";
          return (
            <li
              key={index}
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                borderRadius: "50%",
                width: "12px",
                height: "12px",
                
                border: className.includes("slick-active")
                  ? "2px solid #FFFFFF"
                  : "none",  
                background: className.includes("slick-active")
                  ? "black"
                  : "rgba(255, 255, 255, 0.3)",  

              }}
            />
          );
        })}
      </ul>
    </div>
  ),
};

const Home = () => {
 
  const [isHomeHovered, setIsHomeHovered] = useState(false);

  const handleHomeMouseEnter = () => {
    setIsHomeHovered(true); // встановлюємо стан, що курсор знаходиться на компоненті Home
  };

  const handleHomeMouseLeave = () => {
    setIsHomeHovered(false); // встановлюємо стан, що курсор не знаходиться на компоненті Home
  };
  // ------------------------------------------
  const sliderRef = useRef(null);

  const handleNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const handlePrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  // -------------------------------------------
    const [currentSlide,setCurrentSlide] = useState(0);
  // -------------------------------------------

  return (
    <div
      className="app__home"
      onMouseEnter={handleHomeMouseEnter}
      onMouseLeave={handleHomeMouseLeave}
    >
      <div
        className="app__carousel-buttons"
        style={{ opacity: isHomeHovered ? 1 : 0, transition: "0.5s ease" }}
      >
        <div
          className="app__carousel-buttons-content"
          onClick={handlePrevSlide}
        >
          <img src={PrevButton} alt="Previous" className="app__prev-button" />
        </div>
        <div
          className="app__carousel-buttons-content"
          onClick={handleNextSlide}
        >
          <img src={NextButton} alt="Next" className="app__next-button" />
        </div>
      </div>
      <Slider ref={sliderRef} {...settings} afterChange={(currentSlide)=> setCurrentSlide(currentSlide)}>
        {data.home.map((home, index) => (
          <MainCarousel data={home} key={home.title} index={index} currentSlide={currentSlide}/>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
