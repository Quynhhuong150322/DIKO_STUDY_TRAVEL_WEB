import React from 'react'
import Logo from '../assets/images/Header/Logo.png'
import EL from '../assets/images/Header/England.png'
import { FaRegQuestionCircle } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { MenuData } from "."

const MenuData = [
    {
        id: 1,
        name: 'Trip',
    },
    {
        id: 2,
        name: '%Deals',
    },
    {
        id: 3,
        name: 'Hotel',
    },
    {
        id: 4,
        name: 'Flight',
    },
    {
        id: 5,
        name: 'Apartment',
    },
    {
        id: 6,
        name: 'Camper',
    },
]

const Navbar = () => {
    return (
        <div className='bg-neutral py-[24px]'>
            <div className="flex flex-col gap-10">
                {/* Header Section  */}
                <div className='flex gap-2 items-center'>
                    <img src={Logo} alt="" />
                    <div className='flex gap-7 items-center'>
                        <div className="flex gap-1 items-center">
                            <FaRegQuestionCircle className='text-primary' />
                            <img src={EL} alt="" className='w-7 h-7' />
                            {/* Search  */}
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    placeholder="search"
                                    className="w-[605px] h-[32px] rounded-sm border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
                                />
                                <LuSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer" />
                            </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <button className='button border-primary bg-neutral hover:scale-105 py-2 px-4 rounded-sm'>
                                Sing In
                            </button>
                            <button className='button border-primary bg-neutral hover:scale-105 py-2 px-4 rounded-sm'>
                                Register
                            </button>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                {/* Upper Nav  */}
                <div className=''>
                    <div className=' '>
                        <ul className='flex justify-center gap-4'>
                            {
                                MenuData.map((data) => (
                                    <button key={data.id} className='text-pri tabMenu focus:bg-primary focus:text-white focus:font-bold focus:border-primary inline-block hover:text-primary' >
                                        {data.name}
                                    </button>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
