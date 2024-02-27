import React from 'react'
import img1 from '../assets/images/Footer/visa-logo.png'
import img2 from '../assets/images/Footer/Amex.png'
import img3 from '../assets/images/Footer/International.png'
import img4 from '../assets/images/Footer/Masterrcard.png'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
// import { CiMail } from "react-icons/ci";


const AboutUsList = [
  {
    id: 1,
    title: "Our Story",
    link: "/#",
  },
  {
    id: 2,
    title: "Work with us",
    link: "/#",
  },
  {
    id: 3,
    title: "Press & media",
    link: "/#",
  },
  {
    id: 4,
    title: "Privacy & Security",
    link: "/#",
  },
]

const ImgList = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img4,
  }
]
const IconsList = [
  {
    id: 1,
    icon: FaFacebookF,
  },
  {
    id: 2,
    icon: FaTwitter,
  },
  {
    id: 3,
    icon: FaSquareInstagram,
  },
  {
    id: 4,
    icon: FaTelegramPlane,
  },
  {
    id: 5,
    icon: FaLinkedinIn,
  },
]

const Footer = () => {
  return (
    <div className='py-11'>
      <div className='flex flex-col gap-16'>
        {/* footer menu  */}
        <div className='grid grid-cols-6 sm:grid-col col-span-2 md:pl-10'>
          <div className="py-8 px-4">
            <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
              About Us
            </h1>
            <ul className="flex flex-col gap-3">
              {AboutUsList.map((link) => (
                <li
                  className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 "
                  key={link.id}
                >
                  <span>{link.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="py-8 px-4">
            <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
              We Offer
            </h1>
            <ul className="flex flex-col gap-3">
              {AboutUsList.map((link) => (
                <li
                  className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 "
                  key={link.id}
                >
                  <span>{link.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="py-8 px-4">
            <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
              Headquarters
            </h1>
            <ul className="flex flex-col gap-3">
              {AboutUsList.map((link) => (
                <li
                  className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 "
                  key={link.id}
                >
                  <span>{link.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="py-8 px-4">
            <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
              Travel Blogs
            </h1>
            <ul className="flex flex-col gap-3">
              {AboutUsList.map((link) => (
                <li
                  className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 "
                  key={link.id}
                >
                  <span>{link.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="py-8 px-4">
            <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
              Activities
            </h1>
            <ul className="flex flex-col gap-3">
              {AboutUsList.map((link) => (
                <li
                  className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 "
                  key={link.id}
                >
                  <span>{link.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="py-8 px-4">
            <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
              Service
            </h1>
            <ul className="flex flex-col gap-3">
              {AboutUsList.map((link) => (
                <li
                  className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 "
                  key={link.id}
                >
                  <span>{link.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* footer logo  */}
        <div>
          <div className='grid grid-cols-3'>
            <div className='flex gap-4 items-center '>
              {
                ImgList.map((data) => (
                  <div className='border rounded-sm border-gray-300 w-[89.25px] h-[48px] flex justify-center items-center'>
                    <img src={data.img} alt=""></img>
                  </div>
                ))
              }
            </div>
            <div className='text-primary flex gap-6 text-xxl items-center justify-center' >
              {
                IconsList.map((data) => (
                  <div >
                    <{data.icon} />
                  </div>
                ))
              }
              <FaFacebookF />
              <FaTwitter />
              <FaTelegramPlane />
              <FaLinkedinIn />
              <FaSquareInstagram />
            </div>
            <div className='flex flex-col gap-1'>
              <h3 className='font-bold '>Email</h3>
              <div className='flex '>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="basis-10/12 h-[32px] rounded-sm border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
                />
                <button className='basis-1/4 h-[32px] button border-primary py-1 px-4 rounded-sm bg-primary text-white'>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright EasySet24 */}
        <div >

        </div>
      </div>
    </div>
  )
}

export default Footer