import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner/Banner';
import Featured from './featured';
import OrderOnline from './OrderOnline/OrderOnline';
import OurMenu from './OurMenu/OurMenu';
import PopularMenus from './PopularMenus/PopularMenus';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Helmet><title>FoodFrenzy || HOME</title></Helmet>
        <Banner></Banner>
        <OrderOnline></OrderOnline>
        <PopularMenus></PopularMenus>
        <OurMenu></OurMenu>
        <Featured></Featured>
        <Testimonials></Testimonials>
        </div>
    );
};

export default Home;