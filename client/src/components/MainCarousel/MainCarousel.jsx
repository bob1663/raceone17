import React, {useState, useEffect} from "react";
import "./MainCarousel.css";


const MainCarousel = ({
  data: {imgUrl, title, description},
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
        <h1 className="app__mc-title">{title}</h1>
        <h3 className="app__mc-subtitle">{description}</h3>
        <div className="app__mc-content_buttons">
          <button className="app__mc-button">buy now</button>
          <button className="app__mc-button">read more</button>
        </div>
      </div>
    </div>
  );
};

export default MainCarousel;
