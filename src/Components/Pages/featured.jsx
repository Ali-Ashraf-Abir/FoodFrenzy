import React from 'react';
import img from '../../../public/assets/home/featured.jpg'

const Featured = () => {
    return (
        <div >
              
            
                <div className="bg-[url('assets/home/featured.jpg')] relative bg-cover no-repeat bg-fixed">
                <div className="lg:text-5xl  text-3xl text-center text-black font-bold border-b-2 border-white-200 w-[100%] mx-auto font-nunito mt-[50px] bg-[rgb(0,0,0,0.5)] text-white py-[50px]">Check It Out</div>
                    
                    <div className=" z-[100] top-0 flex lg:flex-row flex-col justify-center items-center p-[80px] gap-5 bg-[rgb(0,0,0,0.5)] h-[100%] w-[100%]">
                    
                    <div className="w-[400px]">
                    <img src={img} alt="" />
                    </div>
                    <div className="w-[40%] text-white">
                        <p className='text-xl'>Aug 9,2023</p>
                        <p className='text-xl'>Where can i get some?</p>
                        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className='btn btn-primary'>Shop Now</button>
                    </div>

                    </div>

                   
                </div>
        </div>
    );
};

export default Featured;