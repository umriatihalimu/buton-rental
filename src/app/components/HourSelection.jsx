"use client";

// headless ui
import { Menu } from "@headlessui/react";
import { useState } from "react";

import { FaClock } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Hours = ["09.00 AM", "11.00 AM", "02.00 PM", "05.00 PM"];

const HourSelection = () => {
  const [hour, setHour] = useState("09.00 AM");
  return (
    <Menu as="div" className="w-full h-full flex xl:flex-row">
      <div className="xl:mx-0 mx-auto ">
        <Menu.Button className="dropdown-btn w-full h-full flex items-center xl:items-start flex-col justify-center xl:pl-8">
          <div className="w-full h-16 flex justify-center xl:justify-start items-center ">
            <div className="flex flex-col ">
              <div className="flex flex-row gap-x-2 gap-y-2  items-center xl:justify-start justify-center ">
                <FaClock className="text-accent" />
                <div className="font-semibold text-[15px] uppercase ">
                  Waktu Sewa
                </div>
              </div>
              <div className="flex items-center justify-center gap-x-2 text-[13px]">
                <div className="uppercase font-medium text-secondary text-center xl:ml-6 text-[13px] xl:text-left">
                  {hour}
                </div>
                <FaArrowRightLong className="text-accent " />
                <div className="uppercase font-medium text-secondary text-center text-[13px] xl:text-left">
                  {hour}
                </div>
              </div>
            </div>
          </div>
        </Menu.Button>
        <Menu.Items className="dropdown-btn shadow-lg absolute xl:top-[100px]  top-[320px] z-50 left-1/2 xl:left-2/4 xl:ml-28 transform -translate-x-1/2 xl:-translate-x-0  bg-white w-full xl:max-w-[270px] max-w-[280px] py-6 rounded-[10px]  ">
          {Hours.map((Hour, i) => {
            return (
              <div
                onClick={() => setHour(Hour)}
                className=" py-1 cursor-pointer hover:bg-gray-200 text-[13px] xl:text-[15px] xl:pl-7"
                key={i}
              >
                {Hour}
              </div>
            );
          })}
        </Menu.Items>
      </div>
    </Menu>
  );
};

export default HourSelection;
