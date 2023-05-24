import React from 'react';
import Cover from '../Shared/Cover';
import orderCover from '/assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/UseMenu/UseMenu';
import ShopCard from './ShopCard';

const OurShop = () => {
    const [menu]=useMenu()

    return (
        <div>
            <Cover img={orderCover} title={'Order Food'}></Cover>
            <Tabs>
                <div className="text-center mt-[50px]">
                <TabList>
                    <Tab>Soup</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Soup</Tab>
                </TabList>
                </div>

                <TabPanel>
                    <div className=" grid lg:grid-cols-3 mx-auto grid-cols-1">
                        {menu.filter(item=>item.category==='soup').map(item=><ShopCard key={item._id} item={item}></ShopCard>)}
                    </div>
                </TabPanel>
                <TabPanel>
                <div className=" grid lg:grid-cols-3 mx-auto grid-cols-1">
                        {menu.filter(item=>item.category==='pizza').map(item=><ShopCard key={item._id} item={item}></ShopCard>)}
                    </div>
                </TabPanel>
                <TabPanel>
                <div className=" grid lg:grid-cols-3 mx-auto grid-cols-1">
                        {menu.filter(item=>item.category==='salad').map(item=><ShopCard key={item._id} item={item}></ShopCard>)}
                    </div>
                </TabPanel>
                <TabPanel>
                <div className=" grid lg:grid-cols-3 mx-auto grid-cols-1">
                        {menu.filter(item=>item.category==='dessert').map(item=><ShopCard key={item._id} item={item}></ShopCard>)}
                    </div>
                </TabPanel>
                <TabPanel>
                <div className=" grid lg:grid-cols-3 mx-auto grid-cols-1">
                        {menu.filter(item=>item.category==='soup').map(item=><ShopCard key={item._id} item={item}></ShopCard>)}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default OurShop;