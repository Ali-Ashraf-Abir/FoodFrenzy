import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
    return (
        <Carousel>
        <div>
            <img src="/assets/home/01.jpg" />

        </div>
        <div>
            <img src="/assets/home/02.jpg" />

        </div>
        <div>
            <img src="/assets/home/03.png"  />

        </div>
        <div>
            <img src="/assets/home/04.jpg"  />

        </div>
        <div>
            <img src="/assets/home/05.png"  />

        </div>
    </Carousel>
    );
};

export default Banner;