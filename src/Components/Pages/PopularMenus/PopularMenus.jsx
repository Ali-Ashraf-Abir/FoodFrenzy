import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import useMenu from '../../../Hooks/UseMenu/UseMenu';
import MenuItemCard from '../../MenuItemCard/MenuItemCard';

const PopularMenus = () => {
    // const [menu,setMenu]=useState([])


    // useEffect(()=>{

    //     fetch('/menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //         const popularItems=data.filter(item=>item.category=='popular')
    //         setMenu(popularItems)
    //         console.log(popularItems)
    //     })
    // },[])


    const [menu]=useMenu()
    const popularItems=menu.filter(item=>item.category==='popular')



    return (
        <div className='mt-[50px]'>

            <div className="lg:text-5xl  text-3xl text-center text-black font-bold border-b-2 border-white-200 w-[30%] mx-auto font-nunito">Popular Items</div>
            <div className="grid md:grid-cols-2 gap-5 mt-[50px]">
                {
                    popularItems.slice(0,6).map(item=><MenuItemCard
                    
                    key={item._id}
                    item={item}
                    ></MenuItemCard>)
                }
            </div>
            <div className="">
            {
            menu.length>6 && <div className="text-center"><Link><button className='btn btn-warning'>See More</button></Link></div>
            }
            </div>
        </div>
    );
};

export default PopularMenus;