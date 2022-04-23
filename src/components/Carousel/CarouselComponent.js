import React from 'react';
import './Carousel.css';
import { Carousel } from 'react-bootstrap'
import banner from '../../assets/banner.jpg';
import banner2 from '../../assets/banner2.jpg';

export const CarouselComponent = () => {
    return (
        <Carousel>
            <Carousel.Item align="center" >
                <img
                    width="100%"
                    // height="700px"
                    src={banner}
                    alt="First slide"
                    fluid
                />
                <Carousel.Caption>
                    <h3>Spring-Summer Collection</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item align="center">
                <img
                    width="100%"
                    // height="700px"
                    src={banner2}
                    alt="Second slide"
                    fluid
                />
                <Carousel.Caption>
                    <h3>Spring-Summer Collection</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default CarouselComponent