import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const Testimonials = () => {

    const [reviews,setReviews]=useState()

    useEffect(()=>{

        fetch('http://localhost:5000/review')
        .then(res=>res.json())
        .then(data=>setReviews(data))

    },[])

    return (
        <div className='mt-10'>
             <div className="text-yellow-500 font-italic lg:text-3xl text-2xl text-center border-b-2 border-white-200 w-[30%] mx-auto font-nunito">what our clients say</div>
              <div className="lg:text-5xl  text-3xl text-center text-black font-bold border-b-2 border-t-2 border-white-200 w-[30%] mx-auto font-nunito mt-[50px]">Testimonials</div>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews?.map(review=><SwiperSlide>
                        <div className="text-center font-nunito">
                        <Rating style={{ maxWidth: 250,marginLeft:'auto',marginRight:'auto' }} value={review.rating} readOnly />
                        <p className='text-md mt-10'>{review.details}</p>
                        <p className='text-orange-500 text-xl mt-10'>{review.name}</p>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Testimonials;