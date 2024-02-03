"use client";

import React, { useState } from "react";

// headless ui
import { Menu } from "@headlessui/react";

// icons
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

// react date
import { DateRange } from "react-date-range";
import { format, addDays } from "date-fns";

//react date range css
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DateSelection = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  return (
    <Menu as="div" className="w-full h-full flex xl:flex-row">
      <div className="xl:mx-0 mx-auto ">
        <Menu.Button className="dropdown-btn w-full h-full flex items-center xl:items-start flex-col justify-center xl:pl-8">
          <div className="flex flex-row gap-x-2 gap-y-2   xl:justify-start  ">
            <div className="flex flex-col xl:gap-y-0 gap-y-1  gap-x-2 xl:items-start items-center">
              <div className="flex flex-row gap-x-2">
                <FaCalendarAlt className="text-accent text-[15px]  " />
                <div className="font-semibold text-[15px] uppercase ">
                  Pilih tanggal
                </div>
              </div>

              {/* rentang tanggal */}
              <div className="flex  gap-x-1 items-center  justify-center text-[13px] text-secondary">
                <div className="xl:border-none border border-gray-300 xl:p-0 p-1 rounded-[5px] shadow xl:shadow-none ">
                  {format(date[0].startDate, "dd/MM/yyy")}
                </div>

                <FaArrowRightLong className="text-accent " />

                <div className="xl:border-none  border border-gray-300 xl:p-0 p-1  rounded-[5px] shadow xl:shadow-none">
                  {date[0].endDate ? (
                    <div>{format(date[0].endDate, "dd/MM/yyy")}</div>
                  ) : (
                    <div>{format(date[0].startDate, "dd/MM/yyy")}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Menu.Button>
        <Menu.Items className="dropdown-btn shadow-lg absolute xl:top-[100px]  top-[45px] z-50 xl:left-1/4 xl:ml-24 ml-0 left-1/2 transform -translate-x-1/2 xl:-translate-x-0  bg-white w-full xl:max-w-[332px] max-w-[300px] py-6 rounded-[10px]  ">
          <DateRange
            onChange={(item) => setDate([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={date}
            rangeColors={["#075798"]}
            minDate={addDays(new Date(), 0)}
          />
        </Menu.Items>
      </div>
    </Menu>
  );
};

export default DateSelection;
