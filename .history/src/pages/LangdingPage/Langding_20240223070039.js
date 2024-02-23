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
      <div className='relative background bg-gray-100 text-white' style={BannerImg}>
        {/* <img src={Picture} alt="" className='w-full z-0' /> */}
        <div className='max-container  z-20  backdrop-blur-sm'>
          <h1 className='text-[40px] w-1/3 font-bold '>
            Discover Your Trip Worldwide !
          </h1>
          <div class="flex flex-row  ">
            <div class="basis-1/4 tabSearch flex gap-9 items-center">
              <LuHotel className='' size={24} />
              <p className=''>
                Where Are you Going to?
              </p>
            </div>
            <div class="basis-1/4 tabSearch flex gap-6 items-center">
              <IoCalendarOutline size={24} />
              <p className=''>
                Check In Date
              </p>
              <p className=''>
                Check Out Date
              </p>
            </div>
            <div class="basis-1/3 tabSearch flex gap-8 items-center">
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
            <div class="basis-1/6  tabSearch ">
              <p className='font-bold'>Search</p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        className="mb-20 bg-gray-100 dark:bg-gray-800 text-white "
        style={BannerImg}
      >
        <div className="container backdrop-blur-sm py-10">
          <div className="space-y-6 max-w-xl mx-auto">
            <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
              Get Notified About New Products
            </h1>
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter your email"
              className="w-full p-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Langding