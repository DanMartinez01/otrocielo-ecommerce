import React from 'react';
import './Carousel.css';
import banner from '../../assets/banner.jpg'
export const Carousel = () => {


    return (
        <div className="bannerContainer">
            <img className="imgBanner"
                src={banner}
                width="100%"
                alt="banner"
            />
            {/* <div className="banner">Welcome!</div> */}
        </div>

    )
}

export default Carousel