import React from "react";
import {
  MenuList,
  AboutUsList,
  WeOfferList,
  HeadquartersList,
  ActivitiesList,
  ServiceList,
  ImgList,
  IconsList,
  AppList,
} from "../dummyData";
import MenuFooterList from "./MenuFooterItem";
import { FaStarOfDavid } from "react-icons/fa";

const Footer = ({ Links, title }) => {
  return (
    <div className="">
      <div className="">
        <hr class="w-full h-px  bg-gray-300 border-0 dark:bg-gray-700"></hr>
      </div>
      <div className="max-container py-11 flex flex-col  gap-16">
        {/* footer menu  */}
        <div className="grid grid-cols-6 sm:grid-col col-span-2 md:pl-10">
          <MenuFooterList Name={MenuList} title="About Us" />
          <MenuFooterList Name={AboutUsList} title="We Offer" />
          <MenuFooterList Name={WeOfferList} title="Headquarters" />
          <MenuFooterList Name={HeadquartersList} title="Travel Blogs" />
          <MenuFooterList Name={ActivitiesList} title="Activities" />
          <MenuFooterList Name={ServiceList} title="Service" />
        </div>
        {/* footer logo  */}
        <div>
          <div className="grid grid-cols-3">
            <div className="flex gap-4 items-center ">
              {ImgList.map((data) => (
                <div className="border rounded-sm border-gray-300 w-[89.25px] h-[48px] flex justify-center items-center">
                  <img src={data.img} alt=""></img>
                </div>
              ))}
            </div>
            <div className="text-primary flex gap-6 text-xxl items-center justify-center">
              {IconsList.map((data) => (
                <div key={data.id}>
                  <data.icon />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold ">Email</h3>
              <div className="flex ">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="basis-10/12 h-[32px] rounded-sm border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
                />
                <button className="basis-1/4 h-[32px] button border-primary py-1 px-4 rounded-sm bg-primary text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
