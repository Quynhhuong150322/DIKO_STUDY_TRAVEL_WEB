import React from "react";
import logoImg from "../assets/images/Header/Logo.png";
import englandImg from "../assets/images/Header/England.png";
import { useLocation } from "react-router-dom";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";
const Navbar = () => {
  let location = useLocation();
  if (location.pathname === "/login" || location.pathname === "/register") {
    return (
      <div className="w-full h-[108px] flex items-center  ">
        <div className="flex-1 cursor-pointer">
          <Link to="/">
            <img src={logoImg} alt="Logo" />
          </Link>
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
