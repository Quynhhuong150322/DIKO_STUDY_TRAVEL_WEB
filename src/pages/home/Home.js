import React from "react";
import FooterImgage from "../../assets/images/LangdingPage/Footer.jpeg";
import { ListMenu, ListImage, ListCard } from "../../dummyData";
import Slider from "../../components/Slider";
import { FaLongArrowAltRight } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { FaRegStar } from "react-icons/fa";
import { AppList } from "../../dummyData";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const FooterImg = {
  backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(169,169,169, 0.7)), url(${FooterImgage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "394px",
  width: "100%",
};

const Home = () => {
  return (
    <div>
      {/* Discover Trip  */}
      <Slider />
      {/* Special Offers */}
      <div className="max-container py-6">
        {/* checkbox  */}
        <div className="flex flex-col gap-6 py-6">
          <h2 className="text-2xl font-bold">Special Offers</h2>
          <div className="flex ">
            <div className="flex justify-center items-center gap-2">
              {ListMenu.map((data) => (
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-[24px] h-[24px] border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
                    key={data.id}
                    id={data.id}
                  />
                  <label for={data.id} className="text-base">
                    {data.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* image  */}
        <div>
          <div className="grid grid-cols-3 gap-2 ">
            {ListImage.map((data) => (
              <div className="relative">
                <img
                  src={data.img}
                  // src="https://plus.unsplash.com/premium_photo-1663119029722-0da758fa1181?q=80&w=2093&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className={`w-full h-full object-cover object-center `}
                />
                <Link to="/">
                  <div className="flex justify-center items-center gap-3 bg-[#0C0C0CB2] w-44 h-10 border rounded absolute bottom-8 left-3 z-40 hover:scale-105 transition-all cursor-pointer">
                    <p className="bg-transparent text-base font-normal text-white">
                      Deals Discover
                    </p>
                    <FaLongArrowAltRight className="bg-transparent text-base font-normal text-white" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Explore Stays In Trending Destinations  */}
      <div className="max-container py-6">
        <div className="flex flex-col gap-4 py-6">
          <h2 className="text-2xl font-bold">
            Explore Stays In Trending Destinations
          </h2>
          <p>Find Hot Stays!</p>
        </div>
        {/* ImageCard */}
        <div className="grid grid-cols-4 place-items-center gap-5 ">
          {ListCard.map((data) => (
            <div className="flex flex-col gap-4 border rounded-sm border-gray-300 p-1 ">
              <div className="relative ">
                <div className="absolute w-[30px] h-[30px] flex items-center justify-center border rounded-full left-2 top-2 bg-[#0C0C0CB2] hover:bg-red-500 transition-all hover:scale-105">
                  <GrFavorite className="bg-transparent w-5 h-5  text-white  " />
                </div>
                <img
                  src={data.img}
                  // src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNofGVufDB8fDB8fHww"
                  alt=""
                  className=" h-[203px] w-full object-cover rounded-sm"
                ></img>
                <div className="flex items-center gap-5 absolute w-full bg-[#202020b5] h-9 bottom-0">
                  <div className="absolute bg-transparent left-3 flex gap-2">
                    <FaRegStar className="bg-transparent text-white hover:text-yellow-400 hover:scale-105 hover:transition-all" />
                    <FaRegStar className="bg-transparent text-white hover:text-yellow-400 hover:scale-105 hover:transition-all" />
                    <FaRegStar className="bg-transparent text-white hover:text-yellow-400 hover:scale-105 hover:transition-all" />
                    <FaRegStar className="bg-transparent text-white hover:text-yellow-400 hover:scale-105 hover:transition-all" />
                    <FaRegStar className="bg-transparent text-white hover:text-yellow-400 hover:scale-105 hover:transition-all" />
                  </div>
                  <div className="absolute bg-transparent flex gap-2 right-5 border rounded p-[2px]">
                    <p className="bg-transparent text-sm text-white hover:text-yellow-400 hover:scale-105 hover:transition-all">
                      8.8
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 pb-4">
                <div className="">
                  <p className="text-xl font-semibold">{data.location}</p>
                  <p className="text-base text-gray-500/100 font-semibold">
                    {data.side}
                  </p>
                </div>
                <p className="text-sm font-medium">{data.time}</p>
                <p className="text-l font-light">{data.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-container py-20">
        <div className="flex flex-col gap-4 py-6">
          <h2 className="text-2xl font-bold">
            Compare The Highest Reviewed Past Offers{" "}
          </h2>
          <p>Browse By Type</p>
        </div>
        <div className="grid grid-cols-4 place-items-center gap-5 ">
          {ListCard.map((data) => (
            <div className="flex flex-col border rounded-sm border-gray-300 p-1 w-[272px] min-h-[231px]">
              <div className="relative">
                <div className="absolute w-[30px] h-[30px] flex items-center justify-center border rounded-full left-2 top-3 bg-[#0C0C0CB2] hover:bg-red-500 transition-all hover:scale-105">
                  <GrFavorite className="bg-transparent w-5 h-5  text-white  " />
                </div>
                <img
                  src={data.img}
                  // src="https://images.unsplash.com/photo-1559494007-9f5847c49d94?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="h-[203px] w-full object-cover rounded-sm"
                ></img>
                <div className="flex items-center gap-5 absolute w-full bg-[#202020b5] h-9 bottom-0">
                  <div className="absolute bg-transparent left-3 flex gap-2">
                    <FaRegStar className="bg-transparent text-white hover:text-yellow-400 hover:scale-105 hover:transition-all" />
                    <FaRegStar className="bg-transparent text-white hover:text-yellow-400 hover:scale-105 hover:transition-all" />
                    <FaRegStar className="bg-transparent text-white hover:text-yellow-400 hover:scale-105 hover:transition-all" />
                    <FaRegStar className="bg-transparent text-white hover:text-yellow-400 hover:scale-105 hover:transition-all" />
                    <FaRegStar className="bg-transparent text-white hover:text-yellow-400 hover:scale-105 hover:transition-all" />
                  </div>
                  <div className="absolute bg-transparent flex gap-2 right-5 border rounded p-[2px]">
                    <p className="bg-transparent text-sm text-white hover:text-yellow-400 hover:scale-105 hover:transition-all">
                      8.8
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 pb-2">
                <div className="">
                  <p className="text-xl font-semibold">{data.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Banner Footer  */}
      <div className="bg-transparent bg--slider__img" style={FooterImg}>
        <div className="bg-transparent flex flex-col gap-28 py-10">
          <div className="bg-transparent font-bold text-white px-20">
            <h1 className="bg-transparent text-3xl">Get Inspirations For Your Next Trip</h1>
            <p className="bg-transparent text-xl text-white">
              Read About Wonderful Adventure We Love Most
            </p>
          </div>
          <div className="bg-transparent text-white px-20 text-right ">
            <h1 className="bg-transparent font-bold text-3xl text-white">
              Difficult Roads Lead To Beautiful Destination .
            </h1>
            <p className="bg-transparent text-x">Read More</p>
          </div>
        </div>
      </div>
      {/* Go Further With The EasySet24 App */}
      <div className="max-container flex items-center justify-between py-7">
        <div className="basis-7/12 flex flex-col gap-1">
          <h2 className="font-bold text-primary text-xl">
            Go Further With The EasySet24 App
          </h2>
          <p className="text-ba ">
            Enjoy savings on chosen hotels and flights when you book through the
            EasySet24 website. Additionally, earn One Key Cash for every booking
            made through the app.
          </p>
          <p className="text-ba text-black/50">Secured By Europe GTP</p>
        </div>
        {/* APP  */}
        <div className="">
          <div className="flex flex-col gap-6">
            {AppList.map((data) => (
              <div className="flex flex-row gap-6 bg-transparent">
                <div className="flex flex-row basis-5/6 gap-2 items-center justify-center text-white bg-black rounded-lg p-1">
                  <data.icon className="text-2xl bg-transparent" />
                  <div className="text-sm bg-transparent flex justify-center items-center flex-col">
                    <div className="bg-transparent flex justify-center py-1">
                      {data.title1}
                    </div>
                    <p className="text-ba font-bold bg-transparent">
                      {data.title2}
                    </p>
                  </div>
                </div>
                <img
                  src={data.QR}
                  alt=""
                  className="bg-transparent object-contain"
                ></img>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
