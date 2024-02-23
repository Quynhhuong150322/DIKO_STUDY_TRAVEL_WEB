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
          <div class="flex flex-row border-2 border-pri">
            <div class="basis-1/4">01</div>
            <div class="basis-1/4">02</div>
            <div class="basis-1/2">03</div>
            <div class="basis-1/5">03</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Langding