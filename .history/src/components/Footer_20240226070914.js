import React from 'react'
import img1 from '../assets/images/Footer/visa-logo.png'
import img2 from '../assets/images/Footer/Amex.png'
import img3 from '../assets/images/Footer/International.png'
import img4 from '../assets/images/Footer/Masterrcard.png'
import { FaFacebookF } from "react-icons/fa6";


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

const Footer = () => {
  return (
    <div>
      <div>
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
          <div>
            <div className='flex gap-3 items-center '>
              {
                ImgList.map((data) => (
                  <div className=''>
                    <img src={data.img} alt=""></img>
                  </div>
                ))
              }
            </div>
            <div className='text-primary flex gap-6' >
              <FaFacebookF />
              <FaFacebookF />
              <FaFacebookF />
              <FaFacebookF />
              <FaFacebookF />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer