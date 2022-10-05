import React from 'react';
import './Carousel.css';
import { Carousel } from 'react-bootstrap'
import banner from '../../assets/banner.jpg';
import banner2 from '../../assets/banner2.jpg';
import { Logo } from '../Logo/Logo';

export const CarouselComponent = () => {
    return (
        <Carousel align="center">
            <Carousel.Item align="center" >
                <img
                    width="100%"
                    // height="700px"
                    src={banner}
                    alt="First slide"
                    fluid
                />
                <Carousel.Caption>
                    <Logo />
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
                    <Logo />
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default CarouselComponent