import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import slide1 from '../../../../public/assets/home/slide1.jpg'
import slide2 from '../../../../public/assets/home/slide2.jpg'
import slide3 from '../../../../public/assets/home/slide3.jpg'
import slide4 from '../../../../public/assets/home/slide4.jpg'
import slide5 from '../../../../public/assets/home/slide5.jpg'
// import required modules
import { Pagination } from "swiper";



const OrderOnline = () => {
    return (
        <div>
            <div className="text-yellow-500 font-italic lg:text-3xl text-2xl text-center border-b-2 border-white-200 w-[30%] mx-auto font-nunito">From 9am to 10pm</div>
            <div className="lg:text-5xl  text-3xl text-center text-black font-bold border-b-2 border-white-200 w-[30%] mx-auto font-nunito">Order Online</div>
             <div className='mt-10'>
             <Swiper
              
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>

            <img src={slide1} alt="" />
            <h3 className='text-4xl text-white-600 text-center mr-[15vh] -mt-[12vh] text-uppercase'>salads</h3>

        </SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" />
        <h3 className='text-4xl text-white-600 text-center mr-[15vh] -mt-[12vh] text-uppercase'>Pizzas</h3></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" />
        <h3 className='text-4xl text-white-600 text-center mr-[15vh] -mt-[12vh] text-uppercase'>Soups</h3>
        
        </SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" />
        <h3 className='text-4xl text-white-600 text-center mr-[15vh] -mt-[12vh] text-uppercase'>desserts</h3>
        </SwiperSlide>

      </Swiper>


             </div>

        </div>
    );
};

export default OrderOnline;