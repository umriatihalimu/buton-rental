"use client";

import React, { useState } from "react";

// headless ui
import { Menu } from "@headlessui/react";

import { FaMapMarkerAlt } from "react-icons/fa";

// array location
const locations = [
  "Tanah abang, Baubau",
  "Pasar Wajo, Buton Selatan",
  "Batauga, Buton ",
];

const LocationSelection = () => {
  const [location, setLocation] = useState("Pilih Lokasi");

  return (
    <Menu as="div" className="w-full h-full flex xl:flex-row">
      <div className="xl:mx-0 mx-auto ">
        <Menu.Button className="dropdown-btn w-full h-full flex items-center xl:items-start flex-col justify-center xl:pl-8">
          <div className="w-full h-16 flex justify-center xl:justify-start items-center ">
            <div className="flex flex-col">
              <div className="flex flex-row gap-x-2 gap-y-2 items-center xl:justify-start justify-center ">
                <FaMapMarkerAlt className="text-accent" />
                <div className="font-semibold text-[15px] uppercase ">
                  Pilih lokasi
                </div>
              </div>
              <div className="uppercase font-medium text-secondary text-center xl:ml-6 ml-3 text-[13px] xl:text-left">
                {location}
              </div>
            </div>
          </div>
        </Menu.Button>
        <Menu.Items className="dropdown-btn shadow-lg absolute  xl:top-[100px]  left-1/2 xl:left-10 z-10 transform -translate-x-1/2 xl:-translate-x-0  bg-white w-full max-w-[332px] py-6 rounded-[10px] ">
          {locations.map((location, i) => {
            return (
              <div
                onClick={() => setLocation(location)}
                key={i}
                className="py-3 cursor-pointer hover:bg-gray-200 text-[13px] xl:text-[15px] xl:pl-7"
              >
                {location}
              </div>
            );
          })}
        </Menu.Items>
      </div>
    </Menu>
  );
};

export default LocationSelection;
