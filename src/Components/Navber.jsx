import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

const Navber = () => {
    const {pathname}=useLocation();
   
  return (
    <div className="mt-0 pt-0">
      <div className={pathname==='/'?'bg-[#9538E2] navbar text-white':"navbar"}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu space-x-5 menu-sm dropdown-content bg-[#b238e2] rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/statistics"}>Statistics</NavLink>
              </li>
              <li>
                <NavLink to={"/dashbord"}>Dashbord</NavLink>
              </li>
              <li>
                <NavLink to={"/faq"}>Faq</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to={"/"} className="btn btn-ghost text-xl">
            Gadget Heaven
          </NavLink>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu md:text-xl  space-x-5 menu-horizontal px-1">
             <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/statistics"}>Statistics</NavLink>
              </li>
              <li>
                <NavLink to={"/dashbord"}>Dashbord</NavLink>
              </li>
              <li>
                <NavLink to={"/faq"}>Faq</NavLink>
              </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-3 text-2xl mr-2 items-center md:mr-4">
          <BsCart3 />
          <FaRegHeart />
        </div>
      </div>
    </div>
  );
};

export default Navber;
