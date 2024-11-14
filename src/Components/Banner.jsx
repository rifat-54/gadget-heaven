import React from 'react';
import bannerImg from '../assets/banner.jpg'
const Banner = () => {
    return (<div>
        <div className='bg-[#9538E2] pb-44 rounded-b-lg '>
            <div className='text-center text-white'>
                <h2 className='text-4xl py-8'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h2>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <button className='btn my-4'>Shop Now</button>
            </div>
            <div className='absolute right-[15%] w-2/3 border border-white rounded-lg p-3 mx-auto'>
                <img className='rounded-lg w-full h-[280px] md:h-[390px]' src={bannerImg} alt="" />
            </div>
        </div>
        <div className='h-[390px]'></div>
    </div>
    ); 
};

export default Banner;