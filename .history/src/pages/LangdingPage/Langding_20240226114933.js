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
import Img7 from "../../assets/images/LangdingPage/ExploreStays/Image1.jpg"
import Img8 from "../../assets/images/LangdingPage/ExploreStays/Image2.jpg"
import Img9 from "../../assets/images/LangdingPage/ExploreStays/Image3.jpg"
import Footer from "../../assets/images/LangdingPage/Footer.jpeg"
// import Img11 from "../../assets/images/LangdingPage/SpecialOffers/Photo 6.png"



const BannerImg = {
  backgroundImage: `url(${Picture})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "394px",
  width: "100%",
};
const FooterImg = {
  backgroundImage: `url(${Footer})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "394px",
  width: "100%",
}
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
const ListCard = [
  {
    id: 1,
    img: Img1,
    location: "Berlin",
    side: "SIDE",
    time: "Wed 25 Jan-Fri 27 Jan",
    title: "A tour of the city and its surroundings led by a professional guide ..."
  },
  {
    id: 2,
    img: Img2,
    location: "Paris",
    side: "SIDE",
    time: "Wed 25 Jan-Fri 27 Jan",
    title: "A tour of the city and its surroundings led by a professional guide ..."

  },
  {
    id: 3,
    img: Img3,
    location: "Madrid",
    side: "SIDE",
    time: "Wed 25 Jan-Fri 27 Jan",
    title: "A tour of the city and its surroundings led by a professional guide ..."

  },
  {
    id: 4,
    img: Img4,
    location: "Barcelona",
    side: "SIDE",
    time: "Wed 25 Jan-Fri 27 Jan",
    title: "A tour of the city and its surroundings led by a professional guide ..."

  },
  {
    id: 5,
    img: Img5,
    location: "Rom",
    side: "SIDE",
    time: "Wed 25 Jan-Fri 27 Jan",
    title: "A tour of the city and its surroundings led by a professional guide ..."

  },
  {
    id: 6,
    img: Img6,
    location: "Milan",
    side: "SIDE",
    time: "Wed 25 Jan-Fri 27 Jan",
    title: "A tour of the city and its surroundings led by a professional guide ..."

  },
  {
    id: 7,
    img: Img7,
    location: "Istanbul",
    side: "SIDE",
    time: "Wed 25 Jan-Fri 27 Jan",
    title: "A tour of the city and its surroundings led by a professional guide ..."

  },
  {
    id: 8,
    img: Img8,
    location: "Dubai",
    side: "SIDE",
    time: "Wed 25 Jan-Fri 27 Jan",
    title: "A tour of the city and its surroundings led by a professional guide ..."

  },
  {
    id: 9,
    img: Img9,
    location: "Amesterdam",
    side: "SIDE",
    time: "Wed 25 Jan-Fri 27 Jan",
    title: "A tour of the city and its surroundings led by a professional guide ..."

  },
  {
    id: 10,
    img: Img1,
    location: "New York",
    side: "SIDE",
    time: "Wed 25 Jan-Fri 27 Jan",
    title: "A tour of the city and its surroundings led by a professional guide ..."

  },
  {
    id: 11,
    img: Img2,
    location: "Marollca",
    side: "SIDE",
    time: "Wed 25 Jan-Fri 27 Jan",
    title: "A tour of the city and its surroundings led by a professional guide ..."

  },
  {
    id: 12,
    img: Img3,
    location: "Teneriffa",
    side: "SIDE",
    time: "Wed 25 Jan-Fri 27 Jan",
    title: "A tour of the city and its surroundings led by a professional guide ..."

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
        <div className='flex flex-col gap-4 py-6'>
          <h2 className='text-2xl font-bold'>Explore Stays In Trending Destinations</h2>
          <p>Find Hot Stays!</p>
        </div>
        {/* ImageCard */}
        <div className='grid grid-cols-4 place-items-center gap-5 '>
          {
            ListCard.map((data) => (
              <div className='flex flex-col gap-4 border rounded-sm border-gray-300 p-1'>
                <img src={data.img} alt="" className=' h-[272px] w-full object-cover rounded-sm'>
                </img>
                <div className='flex flex-col gap-4 pb-4'>
                  <div className=''>
                    <p className='text-xl font-semibold'>{data.location}</p>
                    <p className='text-base text-gray-500/100 font-semibold'>{data.side}</p>
                  </div>
                  <p className='text-sm font-medium'>{data.time}</p>
                  <p className='text-l font-light'>{data.title}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='max-container py-20'>
        <div className='flex flex-col gap-4 py-6'>
          <h2 className='text-2xl font-bold'>Compare The Highest Reviewed Past Offers </h2>
          <p>Browse By Type</p>
        </div>
        <div className='grid grid-cols-4 place-items-center gap-5 '>
          {
            ListCard.map((data) => (
              <div className='flex flex-col gap-4 border rounded-sm border-gray-300 p-1'>
                <img src={data.img} alt="" className=' h-[272px] w-full object-cover rounded-sm'>
                </img>
                <div className='flex flex-col gap-2 pb-2'>
                  <div className=''>
                    <p className='text-xl font-semibold'>{data.location}</p>
                    {/* <p className='text-base text-gray-500/100 font-semibold'>{data.side}</p> */}
                  </div>
                  {/* <p className='text-sm font-medium'>{data.time}</p> */}
                  {/* <p className='text-l font-light'>{data.title}</p> */}
                </div>
              </div>
            ))
          }
        </div>
      </div>
      {/* Banner Footer  */}
      <div className='background  bg-gradient-to-t from-white  to-black mix-blend-overlay' style={FooterImg}>
      </div>
    </div>
  )
}

export default Langding