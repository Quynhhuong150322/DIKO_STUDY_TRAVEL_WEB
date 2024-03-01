import React from 'react';
import HeaderImage from '../../assets/images/AboutUs/HeaderAboutUs.jpg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { SlArrowRight } from "react-icons/sl";
import {ImgAboutUsList, AboutUsCard} from '../../dummyData';
import { Gallery } from "react-grid-gallery";
import FooterImage from '../../assets/images/AboutUs/FooterAboutUs.jpg'
import Map from '../../components/Map';


const HeaderImg = {
  backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(169,169,169, 0.8)), url(${HeaderImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "664px",
  width: "100%",
};
const FooterImg = {
  backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(169,169,169, 0.2)), url(${FooterImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "609px",
  width: "100%",
};

const AboutUs = () => {
  const images = ImgAboutUsList.map((data) => ({
    src: data.img,
    thumbnail: data.img,
    // thumbnailWidth: 320,
    // thumbnailHeight: 250,
  }));
  return (
    <div className=''>
      <div className='flex flex-col gap-12'>
        {/* where Is Your next Dream Place */}
        <div className='max-container'>
          <div className=' flex flex-col gap-10'>
            <div className="flex flex-col gap-1 py-6 text-primary">
              <h2 className="text-xxl font-bold">
                Where Is Your Next Dream Place?
              </h2>
              <p className='text-ba'>Find Exclusive genius Rewards In Every Corner Of The World!</p>
            </div>
            {/* Search Place */}
            <div className=''>
              Search Dream Place O Day
            </div>
          </div>
        </div>
        {/* Exclusive Hotel Search! */}
        <div>
          <div className='bg-transparent' style={HeaderImg}>
            <div className='bg-transparent font-bold text-white px-20 flex flex-col gap-5 justify-center items-center py-[128px]'>
              <h1 className='bg-transparent text-black font-bold text-3xl '>
                Why Choose Us?
              </h1>
              <Link to="/#">
                <button className=' rounded w-[200px] h-[32px] text-white text-base font-medium bg-primary '>
                  <div className='flex bg-transparent justify-center gap-4 items-center'>
                    <p className='bg-transparent'>Explore More</p>
                    <SlArrowRight className='bg-transparent'/>
                  </div>
                </button>
              </Link>
              <h1 className='bg-transparent text-[64px] font-normal pt-40'>
                Exclusive Hotel Search!
              </h1>
            </div>
            <div className=''>
        
            </div>
          </div>
          <div className=''>
            <Map/>
          </div>
        </div>
        {/* Special Offers */}
        <div classname='flex flex-row gap-8'>
          <div className=' max-container font-bold text-2xl'>
            Special Offers
          </div>
          <div className='max-container '>
            <Gallery images={images}
            rowHeight={280}/>
          </div>
        </div>
        {/* Make A comprasion */}
        <div classname='flex flex-row gap-8'>
          <div className=' max-container font-bold text-2xl'>
            Make A Comprasin 
          </div>
          <div className='max-container flex gap-3 '>
            {AboutUsCard.map((data) => (
              <div className='basic-1/2'>
                <img src={data.img} alt="" className='rounded-lg w-full h-[400px]'/>
                <p className='text-base font-bold pb-[-20px]'>{data.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/*  */}
        <div className='h-[609px] bg-transparent' style={FooterImg}>
          <div className='bg-transparent flex gap-[100px]'>
              <div className='bg-gray-400 opacity-75 h-[252px] w-[290px]'>
                <p className='bg-transparent'>Teachr Terece</p>
              </div>
          </div>
        </div>
        {/*  */}
        <div >
          <div className='max-container flex gap-3 '>
            {AboutUsCard.map((data) => (
              <div className='basic-1/2'>
                <img src={data.img} alt="" className=' w-full h-[400px]'/>
                <p className='text-base font-bold'>{data.title}
                </p>
              </div>
            ))}
          </div>
          <div className='max-container flex gap-3 '>
            {AboutUsCard.map((data) => (
              <div className='basic-1/2'>
                <img src={data.img} alt="" className=' w-full h-[400px]'/>
                <p className='text-base font-bold '>{data.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs