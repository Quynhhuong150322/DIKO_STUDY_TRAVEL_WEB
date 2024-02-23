import React from 'react'
import Logo from '../assets/images/Header/Logo.png'
import EL from '../assets/images/Header/England.png'
import { FaRegQuestionCircle } from "react-icons/fa";

const Navbar = () => {
    return (
        <div>
            <div className="">
                {/* Header Section  */}
                <div className="">
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
