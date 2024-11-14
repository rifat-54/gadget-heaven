import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    const data=useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <p className='text-4xl font-bold text-center mb-20'>Explore Cutting-Edge Gadgets</p>
            <Categories category={data}></Categories>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;