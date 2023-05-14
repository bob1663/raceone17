import React, { useState, useEffect } from "react";
import "./Shop.css";
import { Loader, ShopCard } from "../../components";
import { data } from "../../constants";
import axios from "../../axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/slices/cars";

const Shop = () => {
  const dispatch = useDispatch();
  const { cars } = useSelector((state) => state.cars);

  const isCarsLoading = cars.status === "loading";

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  console.log(cars);

  if (isCarsLoading) {
    return <Loader />;
  }

  return (
    <div className="app__shop">
      <div className="app__shop-container">
        {cars &&
          cars.items.map((obj, index) => (
            <ShopCard data={obj} id={obj._id} key={obj._id} />
          ))}
      </div>
    </div>
  );
};

export default Shop;
