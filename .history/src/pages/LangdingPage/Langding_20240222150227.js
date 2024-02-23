import React from 'react'
import Picture from '../../assets/images/LangdingPage/Picture.png'
import { LuHotel } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";

const Langding = () => {
  return (
    <div>
      <div className=''>
        <img src={Picture} alt="" className='' />
        <div className=''>
          <h1 className='text-[40px] w-1/3'>
            Discover Your Trip Worldwide !
          </h1>
          <div class="flex flex-row  ">
            <div class="basis-1/3 tabSearch flex gap-9 items-center">
              <LuHotel className='' />
              <p className=''>
                Where Are you Going to?
              </p>
            </div>
            <div class="basis-1/4 tabSearch ">
              <IoCalendarOutline />
              <p className=''>
                Check In Date
              </p>
              <p className=''>
                Check Out Date
              </p>
            </div>
            <div class="basis-1/3 tabSearch ">
              <IoCalendarOutline />
              <p className=''>
                Adults 2
              </p>
              <p className=''>
                Children 3
              </p>
              <p className=''>
                Room
              </p>

            </div>
            <div class="basis-1/6  tabSearch">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Langding