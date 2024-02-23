import React from 'react'
import Picture from '../../assets/images/LangdingPage/Picture.png'
import { LuHotel } from "react-icons/lu";

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
              <LuHotel className='w-3 h-3' />
              <p className=''>
                Where Are you Going to?
              </p>
            </div>
            <div class="basis-1/4 tabSearch ">02</div>
            <div class="basis-1/3 tabSearch ">03</div>
            <div class="basis-1/6  tabSearch">03</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Langding