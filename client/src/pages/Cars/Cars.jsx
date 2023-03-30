import React, { useRef, useState } from "react";
import "./Cars.css";

import { images, data } from "../../constants";

const Cars = () => {
  const [gtSortCriteria, setGtSortCriteria] = useState(null);
  const [gtSortDirection, setGtSortDirection] = useState("asc");
  const [openWheelSortCriteria, setOpenWheelSortCriteria] = useState(null);
  const [openWheelSortDirection, setOpenWheelSortDirection] = useState("asc");

  const handleGtSortClick = (criteria) => {
    if (gtSortCriteria === criteria) {
      setGtSortDirection(gtSortDirection === "asc" ? "desc" : "asc");
    } else {
      setGtSortCriteria(criteria);
      setGtSortDirection("asc");
    }
  };

  const handleOpenWheelSortClick = (criteria) => {
    if (openWheelSortCriteria === criteria) {
      setOpenWheelSortDirection(
        openWheelSortDirection === "asc" ? "desc" : "asc"
      );
    } else {
      setOpenWheelSortCriteria(criteria);
      setOpenWheelSortDirection("asc");
    }
  };

  const sortCars = (cars, sortCriteria, sortDirection) => {
    return [...cars].sort((a, b) => {
      if (sortCriteria === "name") {
        return sortDirection === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      } else if (sortCriteria === "power") {
        return sortDirection === "asc"
          ? Number(a.power) - Number(b.power)
          : Number(b.power) - Number(a.power);
      } else if (sortCriteria === "weight") {
        return sortDirection === "asc"
          ? Number(a.weight) - Number(b.weight)
          : Number(b.weight) - Number(a.weight);
      } else {
        return 0;
      }
    });
  };

  const sortedGtCars = sortCars(data.gtCars, gtSortCriteria, gtSortDirection);
  const gtCarElements = sortedGtCars.map((gtCar) => {
    return (
      <div className="app__cars-bottomDiv_content-item" key={gtCar.id}>
        <p>In stock</p>
        <h3>{gtCar.name} </h3>
        <h3>{gtCar.power} hp</h3>
        <h3>{gtCar.weight} kg</h3>
        <h3>March 25, 2023</h3>
      </div>
    );
  });

  const sortedOpenWheelCars = sortCars(
    data.openWheel,
    openWheelSortCriteria,
    openWheelSortDirection
  );
  const f1CarElements = sortedOpenWheelCars.map((openW) => {
    return (
      <div className="app__cars-bottomDiv_content-item" key={openW.id}>
        <p>In stock</p>
        <h3>{openW.name}</h3>
        <h3>{openW.power} hp</h3>
        <h3>{openW.weight} kg</h3>
        <h3>March 25, 2023</h3>
      </div>
    );
  });
  // -------------------------------------------------------------------------
  const openWheelRef = useRef(null);
  const gtRef = useRef(null);

  const handleOpenWheelClick = () => {
    openWheelRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleGtClick = () => {
    gtRef.current.scrollIntoView({ behavior: "smooth" });
  };
  // -------------------------------------------------------------------------
  const [rotate1, setRotate1] = useState(false);
  const [rotate2, setRotate2] = useState(false);
  const [rotate3, setRotate3] = useState(false);
  const [rotate4, setRotate4] = useState(false);
  const [rotate5, setRotate5] = useState(false);
  const [rotate6, setRotate6] = useState(false);

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
            <h3
              onClick={() => {
                handleOpenWheelSortClick("name");
                setRotate1(!rotate1);
              }}
            >
              Name{" "}
              <img
                src={images.CarsIconArrow}
                alt="CarsIconArrow"
                className={`sort-image1 ${rotate1 ? "rotate" : ""}`}
              />
            </h3>
            <h3
              onClick={() => {
                handleOpenWheelSortClick("power");
                setRotate2(!rotate2);
              }}
            >
              Power{" "}
              <img
                src={images.CarsIconArrow}
                alt="CarsIconArrow"
                className={`sort-image2 ${rotate2 ? "rotate" : ""}`}
              />
            </h3>
            <h3
              onClick={() => {
                handleOpenWheelSortClick("weight");
                setRotate3(!rotate3);
              }}
            >
              Weight{" "}
              <img
                src={images.CarsIconArrow}
                alt="CarsIconArrow"
                className={`sort-image3 ${rotate3 ? "rotate" : ""}`}
              />
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
            <h3
              onClick={() => {
                handleGtSortClick("name");
                setRotate4(!rotate4);
              }}
            >
              Name{" "}
              <img
                src={images.CarsIconArrow}
                alt="CarsIconArrow"
                className={`sort-image4 ${rotate4 ? "rotate" : ""}`}
              />
            </h3>
            <h3
              onClick={() => {
                handleGtSortClick("power");
                setRotate5(!rotate5);
              }}
            >
              Power{" "}
              <img
                src={images.CarsIconArrow}
                alt="CarsIconArrow"
                className={`sort-image5 ${rotate5 ? "rotate" : ""}`}
              />
            </h3>
            <h3
              onClick={() => {
                handleGtSortClick("weight");
                setRotate6(!rotate6);
              }}
            >
              Weight{" "}
              <img
                src={images.CarsIconArrow}
                alt="CarsIconArrow"
                className={`sort-image6 ${rotate6 ? "rotate" : ""}`}
              />
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
