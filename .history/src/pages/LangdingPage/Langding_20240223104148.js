import React from 'react'
import Picture from '../../assets/images/LangdingPage/Picture.png'
import { LuHotel } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";
import { SlArrowDown } from "react-icons/sl";
import { FiUserPlus } from "react-icons/fi";
import Img1 from "../../assets/images/LangdingPage/SpecialOffers/Photo 1.png";
import Img2 from "../../assets/images/LangdingPage/SpecialOffers/Photo 2.png"
import Img3 from "../../assets/images/LangdingPage/SpecialOffers/Photo 3.png"
import Img4 from "../../assets/images/LangdingPage/SpecialOffers/Photo 4.png"
import Img5 from "../../assets/images/LangdingPage/SpecialOffers/Photo 5.png"
import Img6 from "../../assets/images/LangdingPage/SpecialOffers/Photo 6.png"


const BannerImg = {
  backgroundImage: `url(${Picture})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "394px",
  width: "100%",
};
const ListMenu = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Hotels",
  },
  {
    id: 3,
    name: "Flights",
  },
  {
    id: 4,
    name: "Multi",
  }
]

const ListImage = [
  {
    id: 1,
    img: Img1,
  },
  {
    id: 2,
    img: Img2,
  },
  {
    id: 3,
    img: Img3,
  },
  {
    id: 4,
    img: Img4,
  },
  {
    id: 5,
    img: Img5,
  },
  {
    id: 6,
    img: Img6,
  },
]


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
      <div className='max-container py-6'>
        {/* checkbox  */}
        <div className='flex flex-col gap-6 py-6'>
          <h2 className='text-2xl font-bold'>Special Offers</h2>
          <div className='flex '>
            <div className='flex justify-center items-center gap-2'>
              {
                ListMenu.map((data) => (
                  <><input
                    type="checkbox"
                    className="w-[24px] h-[24px] border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary" />
                    <label for="checkbox" className='text-base'>{data.name}</label>
                  </>
                ))
              }
            </div>
          </div>
        </div>
        {/* image  */}
        <div>
          <div className='grid grid-cols-3 gap-2'>
            {
              ListImage.map((data) => (
                <img src={data.img} alt="" className='w-full h-full' />
              ))
            }
          </div>
        </div>
      </div>

      {/* Explore Stays In Trending Destinations  */}
      <div className='max-container py-6'>
        <div className='flex flex-col gap-6 py-6'>
          <h2 className='text-2xl font-bold'>Explore Stays In Trending Destinations</h2>
          <p></p>
        </div>
      </div>
      {/* image  */}
      <div>
        <div className='grid grid-cols-3 gap-2'>
          {
            ListImage.map((data) => (
              <img src={data.img} alt="" className='w-full h-full' />
            ))
          }
        </div>
      </div>
    </div>
    </div >
  )
}

export default Langding