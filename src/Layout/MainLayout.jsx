import React from 'react';
import Navber from '../Components/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import toast, { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div  className="max-w-7xl  mx-auto px-5">
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default MainLayout;