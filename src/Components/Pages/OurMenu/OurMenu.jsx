import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuItemCard from '../../MenuItemCard/MenuItemCard';

const OurMenu = () => {
    const [menu,setMenu]=useState([])


    useEffect(()=>{

        fetch('/menu.json')
        .then(res=>res.json())
        .then(data=>{

            setMenu(data)
        })
    },[])
    
    return (
        <div className="">
      <div className="lg:text-5xl  text-3xl text-center text-black font-bold border-b-2 border-white-200 w-[30%] mx-auto font-nunito mt-[50px]">Our Menu</div>


        <div className='grid md:grid-cols-2 gap-5 mt-[50px]'>

            {
                menu.slice(0,6).map(item=><MenuItemCard
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

export default OurMenu;