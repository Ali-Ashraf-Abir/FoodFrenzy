import React from 'react';
import Banner from './Banner/Banner';
import OrderOnline from './OrderOnline/OrderOnline';
import OurMenu from './OurMenu/OurMenu';
import PopularMenus from './PopularMenus/PopularMenus';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <OrderOnline></OrderOnline>
        <PopularMenus></PopularMenus>
        <OurMenu></OurMenu>
        </div>
    );
};

export default Home;