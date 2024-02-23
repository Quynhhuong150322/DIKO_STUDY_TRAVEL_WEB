import React from 'react';
import Picture from '../../assets/images/LangdingPage/Picture.png';
import { LuHotel } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";
import { SlArrowDown } from "react-icons/sl";
import { FiUserPlus } from "react-icons/fi";

const Langding = () => {
  return (
    <div>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <h1 className='text-[40px] w-1/3 font-bold z-10'>
            Discover Your Trip Worldwide !
          </h1>
        </div>
        <img src={Picture} alt="Background" className='w-full' />
        <div className='max-container'>
          <div className="flex flex-row">
            <div className="w-1/4 tabSearch flex gap-9 items-center">
              <LuHotel className='' size={24} />
              <p className=''>
                Where Are you Going to?
              </p>
            </div>
            <div className="w-1/4 tabSearch flex gap-6 items-center">
              <IoCalendarOutline size={24} />
              <p className=''>
                Check In Date
              </p>
              <p className=''>
                Check Out Date
              </p>
            </div>
            <div className="w-1/3 tabSearch flex gap-8 items-center">
              <FiUserPlus size={24} />
              <p className=''>
                Adults 2
              </p>
              <p className=''>
                Children 3
              </p>
              <p className=''>
                Room
              </p>
              <SlArrowDown size={24} />
            </div>
            <div className="w-1/6  tabSearch items-center">
              <p className='font-bold'>Search</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Langding;
