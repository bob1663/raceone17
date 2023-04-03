import React, { useRef, useEffect } from "react";
import "./CarPage.css";
import { images } from "../../constants";

const CarPage = () => {
  const handleScroll = () => {
    document
      .querySelector(".app__carPage-purchase")
      .scrollIntoView({ behavior: "smooth" });
  };
  // -------------------------------------------------------
  
  return (
    <div className="app__carPage">
      <div
        className="app__carPage-topImage"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images.f12017})`,
        }}
      >
        <div className="app__carPage-topImage_wrapper">
          <div className="app__carPage-topImage_container">
            <h1>formula 1 2017</h1>
          </div>
          <div className="app__carPage-topImage_container">
            <div
              className="app__carPage-image_downArrow"
              onClick={handleScroll}
            >
              <img src={images.DownArrowIcon} alt="DownArrowIcon" />
            </div>
          </div>
        </div>
      </div>
      <div className="app__carPage-purchase">
        <p>
          <img src={images.PurchaseIcon} alt="PurchaseIcon" /> purchase now!
        </p>
      </div>
      <div className="app__carPage-specs">
        <h2>
          INFO <span>CAR SPECIFICATIONS</span>{" "}
        </h2>
        <div className="app__carPage-specs_row">
          <h3>Peak power: </h3>
          <h3 className="animateNumber">980</h3>
          <h3>hp</h3>
        </div>
        <div className="app__carPage-specs_row">
          <h3>Wheelbase: </h3>
          <h3 className="animateNumber">3594</h3>
          <h3>mm</h3>
        </div>
        <div className="app__carPage-specs_row">
          <h3>Weight: </h3>
          <h3 className="animateNumber">728</h3>
          <h3>kg</h3>
        </div>
      </div>
      <div
        className="app__carPage-template"
        style={{ backgroundImage: `url(${images.f12017temp})` }}
      ></div>
    </div>
  );
};

export default CarPage;
