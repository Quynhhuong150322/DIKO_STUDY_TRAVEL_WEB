import React from "react";
import logoImg from "../assets/images/Header/Logo.png";
import englandImg from "../assets/images/Header/England.png";
import { useLocation } from "react-router-dom";
import { FaRegQuestionCircle } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { MenuData } from "../dummyData";

import { IoIosSearch } from "react-icons/io";
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  let location = useLocation();
  if (location.pathname === "/login" || location.pathname === "/register") {
    return (
      <div>
        <div className='bg-neutral py-[24px]'>
            <div className="flex flex-col gap-10">
                {/* Header Section  */}
                <div className='flex gap-2 items-center'>
                    <Link to='/home'>
                        <img link='./login' src={Logo} alt="" />
                    </Link>
                    <div className='flex gap-7 items-center'>
                        <div className="flex gap-1 items-center">
                            <FaRegQuestionCircle className='text-primary' />
                            <img src={EL} alt="" className='w-7 h-7' />
                            {/* Search  */}
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    placeholder="search"
                                    className="w-[605px] h-[32px] rounded-sm border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
                                />
                                <LuSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer" />
                            </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <button className='button border-primary bg-neutral hover:scale-105 py-2 px-4 rounded-sm' >
                                <Link to='/login'>Sing In</Link>
                            </button>
                            <button className='button border-primary bg-neutral hover:scale-105 py-2 px-4 rounded-sm'>
                                <Link to='/register'>Register</Link>
                            </button>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                {/* Upper Nav  */}
                <div className=''>
                    <div className=' '>
                        <ul className='flex justify-center gap-4'>
                            {
                                MenuData.map((data) => (
                                    <button key={data.id} className='text-pri tabMenu focus:bg-primary focus:text-white focus:font-bold focus:border-primary inline-block hover:text-primary' >
                                        {data.name}
                                    </button>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <img src={englandImg} alt="England" />
          <FaRegQuestionCircle className="text-2xl" />
        </div>
      </div>
    );
  }
  return (
    <div className="w-full h-[209px] flex flex-col justify-around ">
      <div className="flex items-center gap-3">
        <Link to="/">
          <div className="cursor-pointer">
            <img src={logoImg} alt="Logo" />
          </div>
        </Link>
        <div className="flex items-center gap-3 cursor-pointer">
          <img src={englandImg} alt="England" />
          <FaRegQuestionCircle className="text-2xl" />
        </div>
        <div className="flex-1 flex items-center px-2 py-1 border rounded border-[#D9D9D9]">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className="w-full outline-none"
          />
          <IoIosSearch className="text-2xl text-[#A6A6A6]" />
        </div>
        <div className="flex items-center gap-2">
          <Link to="/login">
            <button className="border rounded w-[189px] h-[40px] border-[#07689F] text-[#07689F] text-base font-medium hover:bg-[#07689F] hover:text-white">
              Sign in
            </button>
          </Link>
          <Link to="/register">
            <button className="border rounded w-[189px] h-[40px] border-[#07689F] text-[#07689F] text-base font-medium hover:bg-[#07689F] hover:text-white">
              Register
            </button>
          </Link>
        </div>
      </div>
      <div className="">
        <div className="flex gap-4 justify-center">
          <NavLink
            to="/trip"
            activeClassName="bg-[#07689F] text-white"
            className="w-[121px] h-10 text-center leading-10 border rounded-full text-base text-[#A6A6A6] font-medium hover:bg-[#07689F] hover:text-white"
          >
            Trip
          </NavLink>
          <NavLink
            to="/deal"
            activeClassName="bg-[#07689F] text-white"
            className="w-[121px] h-10 text-center leading-10 border rounded-full text-base text-[#A6A6A6] font-medium hover:bg-[#07689F] hover:text-white"
          >
            %Deal
          </NavLink>
          <NavLink
            to="/hotel"
            activeClassName="bg-[#07689F] text-white"
            className="w-[121px] h-10 text-center leading-10 border rounded-full text-base text-[#A6A6A6] font-medium hover:bg-[#07689F] hover:text-white"
          >
            Hotel
          </NavLink>
          <NavLink
            to="/flight"
            activeClassName="bg-[#07689F] text-white"
            className="w-[121px] h-10 text-center leading-10 border rounded-full text-base text-[#A6A6A6] font-medium hover:bg-[#07689F] hover:text-white"
          >
            Flight
          </NavLink>
          <NavLink
            to="/apartment"
            activeClassName="bg-[#07689F] text-white"
            className="w-[121px] h-10 text-center leading-10 border rounded-full text-base text-[#A6A6A6] font-medium hover:bg-[#07689F] hover:text-white"
          >
            Apartment
          </NavLink>
          <NavLink
            to="/camper"
            activeClassName="bg-[#07689F] text-white"
            className="w-[121px] h-10 text-center leading-10 border rounded-full text-base text-[#A6A6A6] font-medium hover:bg-[#07689F] hover:text-white"
          >
            Camper
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
