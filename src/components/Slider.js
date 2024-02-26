import React from "react";
import SliderImg from "../assets/images/Slider/slider.png";
import Search from "./Search";
const Slider = () => {
  return (
    <div>
      <div className="w-full ">
        <div className="bg--slider__img">
          <img src={SliderImg} alt="Slider" className="w-full " />
        </div>
        <div className="mt-[-200px] max-container relative bg-transparent">
          <h1 className="text-[44px] pb-10 font-bold text-[#EFEFEF] bg-transparent">
            Discover Your Trip <br />
            Worldwide !
          </h1>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Slider;
