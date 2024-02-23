import React from 'react';
import Picture from '../../assets/images/LangdingPage/Picture.png';
import { LuHotel } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";
import { SlArrowDown } from "react-icons/sl";
import { FiUserPlus } from "react-icons/fi";

const BannerImg = {
  backgroundImage: `url(${Picture})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "394px",
  width: "100%",
};

const Langding = () => {
  return (
    <div>
      <div className='relative background' style={BannerImg}>
        <div className='max-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 backdrop-blur-sm p-8'>
          <h1 className='text-[40px] w-1/3 font-bold text-white'>
            Discover Your Trip Worldwide !
          </h1>
          <div className="flex flex-row mt-6">
            <div className="w-1/4 tabSearch flex gap-9 items-center">
              <LuHotel className='' size={24} />
              <p className='text-white'>
                Where Are you Going to?
              </p>
            </div>
            <div className="w-1/4 tabSearch flex gap-6 items-center">
              <IoCalendarOutline size={24} />
              <p className='text-white'>
                Check In Date
              </p>
              <p className='text-white'>
                Check Out Date
              </p>
            </div>
            <div className="w-1/3 tabSearch flex gap-8 items-center">
              <FiUserPlus size={24} />
              <p className='text-white'>
                Adults 2
              </p>
              <p className='text-white'>
                Children 3
              </p>
              <p className='text-white'>
                Room
              </p>
              <SlArrowDown size={24} />
            </div>
            <div className="w-1/6  tabSearch">
              <button className='font-bold bg-white text-primary px-4 py-2 rounded-lg'>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Langding;
