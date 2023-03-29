import React, { useRef } from "react";
import "./Cars.css";

import { images, data } from "../../constants";

const Cars = () => {
  // -------------------------------------------------------------------------
  const gtCarElements = data.gtCars.map((gtCar) => {
    return (
      <div className="app__cars-bottomDiv_content-item" key={gtCar.id}>
        <p>In stock</p>
        <h3>{gtCar.name}</h3>
        <h3>{gtCar.power}</h3>
        <h3>{gtCar.weight}</h3>
        <h3>March 25, 2023</h3>
      </div>
    );
  });

  const f1CarElements = data.openWheel.map((openW) => {
    return (
      <div className="app__cars-bottomDiv_content-item" key={openW.id}>
        <p>In stock</p>
        <h3>{openW.name}</h3>
        <h3>{openW.power}</h3>
        <h3>{openW.weight}</h3>
        <h3>March 25, 2023</h3>
      </div>
    );
  });
  // -------------------------------------------------------------------------
  const openWheelRef = useRef(null); // add a ref for the open-wheel h1 element
  const gtRef = useRef(null); // add a ref for the gt h1 element
  // add a function to handle scrolling to the open-wheel h1 element
  const handleOpenWheelClick = () => {
    openWheelRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // add a function to handle scrolling to the gt h1 element
  const handleGtClick = () => {
    gtRef.current.scrollIntoView({ behavior: "smooth" });
  };
  // -------------------------------------------------------------------------

  return (
    <div className="app__cars">
      <div className="app__cars_topDiv">
        <div
          className="app__cars_topDiv-openWheel"
          onClick={handleOpenWheelClick}
        >
          <h1>open-wheel cars</h1>
        </div>
        <div className="app__cars_topDiv-GT" onClick={handleGtClick}>
          <h1>gt cars</h1>
        </div>
      </div>
      <div className="app__cars-bottomDiv">
        <div className="app__cars-bottomDiv_content" ref={openWheelRef}>
          <h1>open-wheel car list</h1>
          <span></span>
          <div className="app__cars-bottomDiv_content-categories">
            <h3>
              Status <img src={images.CarsIconArrow} alt="CarsIconArrow" />
            </h3>
            <h3>
              Name <img src={images.CarsIconArrow} alt="CarsIconArrow" />
            </h3>
            <h3>
              Power <img src={images.CarsIconArrow} alt="CarsIconArrow" />
            </h3>
            <h3>
              Weight <img src={images.CarsIconArrow} alt="CarsIconArrow" />
            </h3>
            <h3>
              Created <img src={images.CarsIconArrow} alt="CarsIconArrow" />
            </h3>
          </div>
          {f1CarElements}
        </div>
        <div
          className="app__cars-bottomDiv_content"
          style={{ paddingBottom: "100px" }}
          ref={gtRef}
        >
          <h1>gt car list</h1>
          <span></span>
          <div className="app__cars-bottomDiv_content-categories">
            <h3>
              Status <img src={images.CarsIconArrow} alt="CarsIconArrow" />
            </h3>
            <h3>
              Name <img src={images.CarsIconArrow} alt="CarsIconArrow" />
            </h3>
            <h3>
              Power <img src={images.CarsIconArrow} alt="CarsIconArrow" />
            </h3>
            <h3>
              Weight <img src={images.CarsIconArrow} alt="CarsIconArrow" />
            </h3>
            <h3>
              Created <img src={images.CarsIconArrow} alt="CarsIconArrow" />
            </h3>
          </div>
          {gtCarElements}
        </div>
      </div>
    </div>
  );
};

export default Cars;
