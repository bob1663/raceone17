import React from "react";
import "./ShopCard.css";

const formatPrice = (price) => {
  if (price < 1000000) {
    return `${price / 1000}K`;
  } else {
    return `${price / 1000000}M`;
  }
};

const ShopCard = ({ data: { imgUrl, name, price, sellfyLink } }) => {
  const formattedPrice = formatPrice(price);

  return (
    <div className="app__shopCard">
      <img src={imgUrl} alt="ShopCardImg" />
      <p style={{ marginTop: "15px" }}>{name}</p>
      <div className="app__shopCard-price">
        <p style={{ fontWeight: "500" }}>£{formattedPrice}</p>
        <a href={sellfyLink} target="_blank" rel="noopener noreferrer">
          Purchase
        </a>
      </div>
    </div>
  );
};

export default ShopCard;
