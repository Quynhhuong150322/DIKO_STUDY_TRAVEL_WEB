import React, { useState } from 'react';
import { MdOutlineHomeWork } from 'react-icons/md';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { GoPersonAdd } from 'react-icons/go';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { BiChild } from 'react-icons/bi';
import { FaPerson } from 'react-icons/fa6';
import { MdOutlineBedroomParent } from 'react-icons/md';

const Search = () => {
    const [showDateIn, setShowDateIn] = useState(true);
    const [showDateOut, setShowDateOut] = useState(true);
    const [showPerson, setShowPerson] = useState(true);
    const [seachValue, setSearchValue] = useState({
        searchInput: '',
        dateIn: '',
        dateOut: '',
        numberAdults: 1,
        numberChildren: 1,
        numberRoom: 1,
    });
    return (
        <div className="relative">
            <div className="flex justify-center w-full border-2 rounded border-[#A6A6A6] h-14 overflow-hidden  z-auto ">
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
                <div
                    className="flex items-center gap-4 flex-1 border-l-2 border-[#A6A6A6] person cursor-pointer"
                    onClick={() => setShowPerson(!showPerson)}
                >
                    <label htmlFor="" className="px-4 cursor-pointer">
                        <GoPersonAdd className="w-6 h-6 text-[#07689F]" />
                    </label>
                    <div className="flex items-center gap-2">
                        <label htmlFor="adults" className="text-xs font-normal cursor-pointer">
                            Adults
                        </label>
                        <div className="text-xs">{seachValue.numberAdults}</div>
                    </div>
                    <div className="px-4 flex items-center gap-2">
                        <label htmlFor="children" className="text-xs font-normal cursor-pointer">
                            Children
                        </label>
                        <div className="text-xs">{seachValue.numberChildren}</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <label htmlFor="room" className="text-xs font-normal cursor-pointer">
                            Room
                        </label>
                        <div className="text-xs">{seachValue.numberRoom}</div>
                    </div>
                    <div className="px-4 cursor-pointer">
                        <RiArrowDropDownLine className="w-10 h-10 text-[#07689F]" />
                    </div>
                </div>
                <div
                    className={`absolute z-50 rounded-lg border shadow-2xl w-1/4 right-[130px] h-[250px] top-[52px] ${
                        showPerson ? 'hidden' : 'flex'
                    } flex-col gap-6 pr-3`}
                >
                    <div className="flex items-center gap-12 pt-5 justify-around">
                        <div className="flex gap-2 items-center">
                            <FaPerson className="text-2xl text-blue-500" />
                            <p>Adults</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <FaMinus
                                className="cursor-pointer"
                                onClick={() =>
                                    setSearchValue({ ...seachValue, numberAdults: seachValue.numberAdults - 1 })
                                }
                            />
                            <span className="text-xl text-blue-500 border-b border-black w-14 text-center bg-white">
                                {seachValue.numberAdults}
                            </span>
                            <FaPlus
                                className="text-blue-500 cursor-pointer"
                                onClick={() =>
                                    setSearchValue({ ...seachValue, numberAdults: seachValue.numberAdults + 1 })
                                }
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-8 justify-around">
                        <div className="flex gap-2 items-center">
                            <BiChild className="text-2xl text-blue-500" />
                            <p>Children</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <FaMinus
                                className="cursor-pointer"
                                onClick={() =>
                                    setSearchValue({ ...seachValue, numberChildren: seachValue.numberChildren - 1 })
                                }
                            />
                            <span className="text-xl text-blue-500 border-b border-black w-14 text-center bg-white">
                                {seachValue.numberChildren}
                            </span>
                            <FaPlus
                                className="text-blue-500 cursor-pointer"
                                onClick={() =>
                                    setSearchValue({ ...seachValue, numberChildren: seachValue.numberChildren + 1 })
                                }
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-12 justify-around">
                        <div className="flex gap-2 items-center">
                            <MdOutlineBedroomParent className="text-2xl text-blue-500" />
                            <p>Room</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <FaMinus
                                className="cursor-pointer"
                                onClick={() => setSearchValue({ ...seachValue, numberRoom: seachValue.numberRoom - 1 })}
                            />
                            <span className="text-xl text-blue-500 border-b border-black w-14 text-center bg-white">
                                {seachValue.numberRoom}
                            </span>
                            <FaPlus
                                className="text-blue-500 cursor-pointer"
                                onClick={() => setSearchValue({ ...seachValue, numberRoom: seachValue.numberRoom + 1 })}
                            />
                        </div>
                    </div>
                    <div className="flex w-full justify-end pr-4">
                        <button
                            className="rounded-lg font-medium bg-blue-100 text-blue-500 px-6 py-3 hover:bg-blue-500 hover:text-white"
                            onClick={() => setShowPerson(!showPerson)}
                        >
                            Oke
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-4 bg-[#07689F]">
                    <button className="text-base font-bold text-white px-9">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Search;
