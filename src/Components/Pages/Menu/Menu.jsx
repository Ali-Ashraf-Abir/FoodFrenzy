import React from 'react';
import { Helmet } from 'react-helmet-async';
import PopularMenus from '../PopularMenus/PopularMenus';
import Cover from '../Shared/Cover';
import menuimg from '/assets/menu/banner3.jpg'
import pizzaimg from '/assets/menu/pizza-bg.jpg'
import saladimg from '/assets/menu/salad-bg.jpg'
import soupimg from '/assets/menu/soup-bg.jpg'
import dessertimg from '/assets/menu/dessert-bg.jpeg'
import { Parallax } from 'react-parallax';
import useMenu from '../../../Hooks/UseMenu/UseMenu';
import MenuItemCard from '../../MenuItemCard/MenuItemCard';
import { Link } from 'react-router-dom';
const Menu = () => {
    const [menu]=useMenu()

    return (
        <div>
            <Helmet><title>FoodFrenzy || Menu</title></Helmet>
            {/* our menuuu */}
            <Cover 
            img={menuimg}
            title={'our menu'}></Cover>
             <div className="grid md:grid-cols-2 gap-5 mt-[50px] my-[20px]">
                {
                   menu.slice(0,8).map(item=><MenuItemCard
                    
                    key={item._id}
                    item={item}
                    ></MenuItemCard>)
                }
            </div>
            <div className="">
            {
            menu.length>6 && <div className="text-center my-[20px]"><Link><button className='btn btn-ghost border-b-2 border-black'>Order Your Food</button></Link></div>
            }
            </div>
            {/* desserts */}

            <Cover 
            img={dessertimg}
            title={'desserts'}></Cover>
             <div className="grid md:grid-cols-2 gap-5 mt-[50px] my-[20px]">
                {
                   menu.filter(item=>item.category==='dessert').slice(0,8).map(item=><MenuItemCard
                    
                    key={item._id}
                    item={item}
                    ></MenuItemCard>)
                }
            </div>
            <div className="">
            {
            menu.length>6 && <div className="text-center my-[20px]"><Link><button className='btn btn-ghost border-b-2 border-black'>Order Your Food</button></Link></div>
            }
            </div>
            {/* pizzas */}
            <Cover 
            img={pizzaimg}
            title={'pizzas'}></Cover>
             <div className="grid md:grid-cols-2 gap-5 mt-[50px] my-[20px]">
                {
                   menu.filter(item=>item.category==='pizza').slice(0,8).map(item=><MenuItemCard
                    
                    key={item._id}
                    item={item}
                    ></MenuItemCard>)
                }
            </div>
            <div className="">
            {
            menu.length>6 && <div className="text-center my-[20px]"><Link><button className='btn btn-ghost border-b-2 border-black'>Order Your Food</button></Link></div>
            }
            </div>
            {/* soups */}
            <Cover 
            img={soupimg}
            title={'soups'}></Cover>
             <div className="grid md:grid-cols-2 gap-5 mt-[50px] my-[20px]">
                {
                   menu.filter(item=>item.category==='soup').slice(0,8).map(item=><MenuItemCard
                    
                    key={item._id}
                    item={item}
                    ></MenuItemCard>)
                }
            </div>
            <div className="">
            {
            menu.length>6 && <div className="text-center my-[20px]"><Link><button className='btn btn-ghost border-b-2 border-black'>Order Your Food</button></Link></div>
            }
            </div>
            {/* salad */}
            <Cover 
            img={saladimg}
            title={'salad'}></Cover>
             <div className="grid md:grid-cols-2 gap-5 mt-[50px] my-[20px]">
                {
                   menu.filter(item=>item.category==='dessert').slice(0,8).map(item=><MenuItemCard
                    
                    key={item._id}
                    item={item}
                    ></MenuItemCard>)
                }
            </div>
            <div className="">
            {
            menu.length>6 && <div className="text-center my-[20px]"><Link><button className='btn btn-ghost border-b-2 border-black'>Order Your Food</button></Link></div>
            }
            </div>
        </div>
    );
};

export default Menu;