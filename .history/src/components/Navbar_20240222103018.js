import React from 'react'
import Logo from '../assets/images/Header/Logo.png'
import EL from '../assets/images/Header/England.png'
import { FaRegQuestionCircle } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='bg-neutral '>
            <div className="px-[108px] py-[24px]">
                {/* Header Section  */}
                <div className="flex gap-3 ">
                    <img src={Logo} alt="" />
                    <FaRegQuestionCircle />
                    <img src={EL} alt="" />
                </div>
                {/* Upper Nav  */}
                <div className=''>

                </div>
            </div>
        </div>
    )
}

export default Navbar
