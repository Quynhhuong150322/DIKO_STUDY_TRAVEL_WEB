import React from 'react'
import Logo from '../assets/images/Header/Logo.png'
import EL from '../assets/images/Header/England.png'
import { FaRegQuestionCircle } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";

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
        name: 'Flight',
    },
    {
        id: 4,
        name: 'Apartment',
    },
    {
        id: 5,
        name: 'Camper',
    },
]

const Navbar = () => {
    return (
        <div className='bg-neutral py-[24px]'>
            <div className="">
                {/* Header Section  */}
                <div className='flex gap-2 items-center'>
                    <img src={Logo} alt="" />
                    <div className='flex gap-5 items-center'>
                        <div className="flex gap-1 items-center">
                            <FaRegQuestionCircle className='text-primary' />
                            <img src={EL} alt="" className='w-7 h-7' />
                            {/* Search  */}
                            <div className="flex items-center">
                                <input type="text"
                                    placeholder="search"
                                    className="w-[605px] h-[32px] group-hover:w-[300px] rounded-sm border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
                                />
                                <LuSearch className="text-gray-500 group-hover:text-primary  -translate-y-1/2 right-3" />
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
                <div className='py-10'>
                    <div className=' '>
                        <ul className='flex '>
                            {
                                MenuData.map((data) => (
                                    <button key={data.id} className='text-pri tabMenu' >
                                        <a href={data.link} className='inline-block px-4 hover:text-primary '>
                                            {data.name}
                                        </a>
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
