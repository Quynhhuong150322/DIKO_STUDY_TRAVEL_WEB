import React from 'react'
import { MenuList, AboutUsList, WeOfferList, HeadquartersList, ImgList, IconsList, AppList } from '../dummyData'

// import { CiMail } from "react-icons/ci";




const Footer = () => {
  return (
    <div className=''>
      {/* Go Further With The EasySet24 App */}
      <div className='flex items-center justify-between py-7'>
        <div className='basis-7/12 flex flex-col gap-1'>
          <h2 className='font-bold text-primary text-xl'>
            Go Further With The EasySet24 App
          </h2>
          <p className='text-ba '>
            Enjoy savings on chosen hotels and flights when you book through the EasySet24 website. Additionally, earn One Key Cash for every booking made through the app.
          </p>
          <p className='text-ba text-black/50'>
            Secured By Europe GTP
          </p>
        </div>
        {/* APP  */}
        <div className=''>
          <div className='flex flex-col gap-6'>
            {AppList.map((data) => (
              <div className='flex flex-row gap-6'>
                <div className='flex flex-row basis-5/6 gap-2 items-center justify-center text-white bg-black rounded-lg p-1'>
                  <data.icon className='text-2xl' />
                  <div className='text-sm'>
                    <p>{data.title1} </p>
                    <p className='text-ba font-bold'>{data.title2}</p>
                  </div>
                </div>
                <img src={data.QR} alt="" className=''></img>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=''>
        <hr class="w-full h-px  bg-gray-300 border-0 dark:bg-gray-700"></hr>
      </div>
      <div className='py-11 flex flex-col  gap-16'>
        {/* footer menu  */}
        <div className='grid grid-cols-6 sm:grid-col col-span-2 md:pl-10'>
          <div className="py-8 px-4">
            {
              MenuList.map((data) => (
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  {data.title}
                </h1>
              ))
            }
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
              {IconsList.map((data) => (
                <div key={data.id}>
                  <data.icon />
                </div>
              ))}
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
      </div>
    </div>
  )
}

export default Footer