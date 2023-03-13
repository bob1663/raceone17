import React from 'react';
import './MainCarousel.css';
import MCBg from '../../assets/MainCarouselBg.png';

const MainCarousel = () => {
  return (
    <div className='app__mc'
        style={{
            backgroundImage: `url(${MCBg})`
        }}
    >
        <div className="app__mc-content">
            <h1>protech p91</h1>
            <h3>now availale</h3>
            <div className="app__mc-content_buttons">
                <button>buy now</button>
                <button>read more</button>
            </div>
        </div>
    </div>
  )
}

export default MainCarousel