import React from 'react';
import './ShopCard.css';

const ShopCard = ({
    data: {imgShop, titleShop, priceShop}
}) => {
  return (
    <div className='app__shopCard'>
        <img src={imgShop} alt="ShopCardImg" />
        <p style={{marginTop:'15px'}}>{titleShop}</p>
        <div className="app__shopCard-price">
            <p style={{fontWeight:"500"}}>{priceShop}</p>
            <button>Add to cart</button>
        </div>
    </div>
  )
}

export default ShopCard