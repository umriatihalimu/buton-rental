import React from "react";
import LocationSelection from "./LocationSelection";
import DateSelection from "./DateSelection";
import HourSelection from "./HourSelection";

const SearchMobile = () => {
  return (
    <div className="xl:hidden font-medium">
      <div className="container mx-auto flex flex-col gap-y-3  item-center">
        {/* location selection */}
        <LocationSelection />

        {/* data selection  */}
        <DateSelection />

        {/* hours selection */}
        <HourSelection />

        {/* btn */}
        <div className=" flex items-center">
          <button className="btn btn-accent p-2 mx-auto w-[164px]">
            search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchMobile;
