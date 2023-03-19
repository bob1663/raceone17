import React, { useState, useEffect } from "react";
import "./Shop.css";
import { ShopCard } from "../../components";
import { data } from "../../constants";

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(
    Number(localStorage.getItem("currentPage")) || 1
  );
  const itemsPerPage = 9;
  // ------------------------------------------------------
  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);
  // ------------------------------------------------------

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < Math.ceil(data.shop.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.shop.slice(indexOfFirstItem, indexOfLastItem);

  const renderItems = currentItems.map((shop) => (
    <ShopCard data={shop} key={shop.titleShop} />
  ));

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.shop.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => (
    <li
      key={number}
      id={number}
      onClick={handleClick}
      style={{
        backgroundColor: number === currentPage ? "#FF0000" : "",
        color: number === currentPage ? "#ffffff" : "",
      }}
    >
      {number}
    </li>
  ));

  return (
    <div className="app__shop">
      <div className="app__shop-container">{renderItems}</div>
      <ul id="page-numbers">
        <li onClick={handlePrevClick} className="special-item">
          Prev
        </li>
        {renderPageNumbers}
        <li onClick={handleNextClick} className="special-item">
          Next
        </li>
      </ul>
    </div>
  );
};

export default Shop;
