import React from 'react';

const MenuItemCard = ({item}) => {

    const {name,recipe,image,rating,price}=item

    return (
        <div className='flex justify-center items-center font-nunito gap-5 '>
     <div className="">
            <img style={{borderRadius:'0px 200px 200px 200px'}} className='w-[120px]' src={image} alt="" />
            </div>
            <div className="">
            <h1 className='text-uppercase text-2xl'>{name}---------------------</h1>
            <p className='text-gray-500'>{recipe}</p>
            </div>
            <div className="">
            <h1 className='text-yellow-500 text-xl'>${price}</h1>
            </div>
        </div>
    );
};

export default MenuItemCard;