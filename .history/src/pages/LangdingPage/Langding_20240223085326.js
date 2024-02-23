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
      <div className='relative background ' style={BannerImg}>
        {/* <img src={Picture} alt="" className='w-full z-0' /> */}
        <div className=' absolute bottom-[-30px] left-1/2 transform -translate-x-1/3 '>
          <h1 className='text-[40px] w-1/3 font-bold text-white bg-opacity-0'>
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

    </div>
  )
}

export default Langding