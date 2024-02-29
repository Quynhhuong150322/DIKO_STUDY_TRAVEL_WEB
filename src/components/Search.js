import React, { useState } from 'react';
import { MdOutlineHomeWork } from 'react-icons/md';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { GoPersonAdd } from 'react-icons/go';
import { RiArrowDropDownLine } from 'react-icons/ri';
const Search = () => {
    const [showDateIn, setShowDateIn] = useState(true);
    const [showDateOut, setShowDateOut] = useState(true);
    return (
        <div className="flex justify-center w-full border-2 rounded border-[#A6A6A6] h-14 overflow-hidden relative z-auto">
            <div className="flex items-center gap-4 flex-1">
                <label htmlFor="search" className="px-4">
                    <MdOutlineHomeWork className="w-6 h-6 text-[#07689F]" />
                </label>
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Where Are you Going to?"
                    className="w-full outline-none text-xs font-normal placeholder-black pr-4"
                />
            </div>
            <div className="flex items-center gap-4 flex-1 border-l-2 border-[#A6A6A6]">
                <label htmlFor="date" className="px-4">
                    <FaRegCalendarAlt className="w-6 h-6 text-[#07689F]" />
                </label>
                <div className="pr-4 relative cursor-pointer">
                    <label
                        htmlFor="checkInDate"
                        className="text-xs font-normal"
                        onClick={() => setShowDateIn(!showDateIn)}
                        hidden={!showDateIn}
                    >
                        Check In Date
                    </label>
                    <input
                        type="date"
                        name="checkInDate"
                        id="checkInDate"
                        hidden={showDateIn}
                        className="outline-none checkInDate text-xs"
                    />
                </div>
                <div className="relative cursor-pointer">
                    <label
                        htmlFor="checkOutDate"
                        className="text-xs font-normal"
                        onClick={() => setShowDateOut(!showDateOut)}
                        hidden={!showDateOut}
                    >
                        Check Out Date
                    </label>
                    <input
                        type="date"
                        name="checkOutDate"
                        id="checkOutDate"
                        hidden={showDateOut}
                        className="outline-none checkInDate text-xs"
                    />
                </div>
            </div>
            <div className="flex items-center gap-4 flex-1 border-l-2 border-[#A6A6A6] person cursor-pointer">
                <label htmlFor="" className="px-4 cursor-pointer">
                    <GoPersonAdd className="w-6 h-6 text-[#07689F]" />
                </label>
                <div className="">
                    <label htmlFor="adults" className="text-xs font-normal cursor-pointer">
                        Adults
                    </label>
                </div>
                <div className="px-4 ">
                    <label htmlFor="children" className="text-xs font-normal cursor-pointer">
                        Children
                    </label>
                </div>
                <div className="">
                    <label htmlFor="room" className="text-xs font-normal cursor-pointer">
                        Room
                    </label>
                </div>
                <div className="px-4 cursor-pointer">
                    <RiArrowDropDownLine className="w-10 h-10 text-[#07689F]" />
                </div>
            </div>

            <div className="flex items-center gap-4 bg-[#07689F]">
                <button className="text-base font-bold text-white px-9">Search</button>
            </div>
        </div>
    );
};

export default Search;
