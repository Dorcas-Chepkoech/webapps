import React from 'react';
import './main.css';
import Slider from '../Carousel/Carousel';
import About from './About/About';
import Navigation from '../Navbar/Navbar';
import CarouselOne from '../Carousel/Carousel';

function MainPage() {
    return (
        <div>
        
            <Navigation/>
            <CarouselOne/>
            {/* <Slider/> */}
            <About/>
        </div>
    )
}
export default MainPage;
