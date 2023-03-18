import React, { useState, useEffect } from "react";
import "./MainCarousel.css";

const MainCarousel = ({
  data: { imgUrl, title, description },
  index,
  currentSlide,
}) => {
  // -----------------------
  // -----------------------

  return (
    <div
      className="app__mc"
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
    >
      <div className="app__mc-content">
        <h1 className={`${index == currentSlide ? "app__mc-title" : "zeroOp"}`}>
          {title}
        </h1>
        <h3 className={`${index == currentSlide ? "app__mc-subtitle" : "zeroOp"}`}>
          {description}
        </h3>
        <div
          className={`${
            index == currentSlide ? "app__mc-content_buttons" : "zeroOp"
          }`}
        >
          <button className="app__mc-button">buy now</button>
          <button className="app__mc-button">read more</button>
        </div>
      </div>
    </div>
  );
};

export default MainCarousel;
