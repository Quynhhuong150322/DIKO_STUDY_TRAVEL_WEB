import React from "react";
import ErrorImg from "../assets/images/Error/Error.avif";
import { IoIosReturnLeft } from "react-icons/io";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Error = () => {
  return (
    <div className="w-full h-[750px] relative">
      <img
        src="https://images.unsplash.com/photo-1606230144598-ed5d503a4c43?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="404 Error"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-[25%] left-1/2 transform translate-x-[-50%] z-50 bg-transparent flex flex-col gap-10 justify-center items-center">
        <h1 className="bg-transparent text-8xl font-bold text-[#D9D9D9]">
          404
        </h1>
        <h3 className="bg-transparent text-[24px] font-bold text-[#FFFFFF]">
          The page Was not Found ,Sorry!
        </h3>
        <Link to="/">
          <button className="flex items-center w-[238px] h-12 bg-[#07689F] border rounded gap-2 text-base font-medium text-[#ffffff] hover:scale-105 hover:transition-all">
            <IoIosReturnLeft className="bg-transparent text-xl text-[#ffffff] ml-2" />
            Return To Home Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
