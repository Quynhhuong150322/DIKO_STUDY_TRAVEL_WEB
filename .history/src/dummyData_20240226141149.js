import img1 from '../assets/images/Footer/visa-logo.png'
import img2 from '../assets/images/Footer/Amex.png'
import img3 from '../assets/images/Footer/International.png'
import img4 from '../assets/images/Footer/Masterrcard.png'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaApple } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa6";
import QR from "../assets/images/Footer/icons/Vector.png";
import QR2 from "../assets/images/Footer/icons/Vector.png";

export const MenuData = [
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
// Footer 
export const MenuList = [
    {
        id: 1,
        title: 'About Us',
    },
    {
        id: 2,
        title: 'We Offer',
    },
    {
        id: 3,
        title: 'Headquarters',
    },
    {
        id: 4,
        title: 'Travel Blogs',
    },
    {
        id: 5,
        title: 'Activities',
    },
    {
        id: 6,
        title: 'Service',
    },
]

export const AboutUsList = [
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
export const ImgList = [
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
export const IconsList = [
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
export const AppList = [
    {
        id: 1,
        icon: FaApple,
        title1: 'Download on the',
        title2: 'APP STORE',
        QR: QR,
    },
    {
        id: 2,
        icon: FaGooglePlay,
        title1: '.',
        title2: 'Google Play',
        QR: QR2,
    },
]