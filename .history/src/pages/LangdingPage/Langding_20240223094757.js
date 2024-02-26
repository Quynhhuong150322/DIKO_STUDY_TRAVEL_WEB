import React from 'react'
import Picture from '../../assets/images/LangdingPage/Picture.png'
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
    <div >
      {/* Discover Trip  */}
      <div className=' background ' style={BannerImg}>
        <div className=' '>
          <h1 className='text-3xl w-1/3 font-bold text-white bg-opacity-0'>
            Discover Your Trip Worldwide !
          </h1>
          <div class="flex flex-row  bg-white">
            <div class="basis-1/4 tabSearch flex gap-9 items-center">
              <LuHotel className='text-primary' size={24} />
              <p className=''>
                Where Are you Going to?
              </p>
            </div>
            <div class="basis-1/4 tabSearch flex gap-6 items-center">
              <IoCalendarOutline size={24} className='text-primary' />
              <p className=''>
                Check In Date
              </p>
              <p className=''>
                Check Out Date
              </p>
            </div>
            <div class="basis-1/3 tabSearch flex gap-8 items-center">
              <FiUserPlus size={24} className='text-primary' />
              <p className=''>
                Adults 2
              </p>
              <p className=''>
                Children 3
              </p>
              <p className=''>
                Room
              </p>
              <SlArrowDown size={24} className='text-primary' />
            </div>
            <div class="basis-1/6  tabSearch bg-primary flex justify-center items-center">
              <p className='font-bold text-white'>Search</p>
            </div>
          </div>
        </div>
      </div>
      {/* Special Offers */}
      <div className='max-container py-12'>
        <div className=''>
          <h2 className='text-2xl font-bold'>Special Offers</h2>
          <div className=''>
            <input type="checkbox" class="appearance-none checked:bg-blue-500 " />
            <input
              type="checkbox"
              className="w-[30px] h-[30px] rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Langding