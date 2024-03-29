import React from 'react';

const ShopCard = ({item}) => {
    const {name,image,recipe}=item
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions text-center">
                        <button className="btn btn-ghost border-b-2 border-black">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;