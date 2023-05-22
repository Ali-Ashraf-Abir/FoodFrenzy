import React, { useEffect, useState } from 'react';
import MenuItemCard from '../../MenuItemCard/MenuItemCard';

const PopularMenus = () => {
    const [menu,setMenu]=useState([])


    useEffect(()=>{

        fetch('/menu.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            const popularItems=data.filter(item=>item.category=='popular')
            setMenu(popularItems)
            console.log(popularItems)
        })
    },[])




    return (
        <div className='mt-[50px]'>

            <div className="lg:text-5xl  text-3xl text-center text-black font-bold border-b-2 border-white-200 w-[30%] mx-auto font-nunito">Popular Items</div>
            <div className="grid md:grid-cols-2 gap-5 mt-[50px]">
                {
                    menu.map(item=><MenuItemCard
                    
                    key={item._id}
                    item={item}
                    ></MenuItemCard>)
                }
            </div>
        </div>
    );
};

export default PopularMenus;