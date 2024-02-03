"use client";
import { useContext } from "react";
import { SearchContext } from "../context/search";
import LocationSelection from "./LocationSelection";
import DateSelection from "./DateSelection";
import HourSelection from "./HourSelection";

const Search = () => {
  const { searchActive } = useContext(SearchContext);
  return (
    <div
      className={`${
        searchActive
          ? "bg-white rounded-none xl:h-[80px] "
          : "bg-white rounded-[10px] py-6 xl:pr-10 xl:pl-10 xl:h-[95px]"
      } hidden xl:block w-full relative shadow-md `}
    >
      <div
        className={`h-full flex justify-center items-center px-6 xl:px-0 ${
          searchActive && "container mx-auto ml-8"
        }`}
      >
        <LocationSelection />
        <DateSelection />
        <HourSelection />
        <div className="xl:h-full flex items-center px-6 xl:px-0 ">
          <button
            className={`${
              searchActive
                ? "btn btn-sm btn-accent w-[110px] h-[37px] -mr-6"
                : "btn btn-sm btn-accent w-[110px] h-[37px] "
            }`}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;

{
  /* <div className="xl:h-full btn btn-accent btn-sm max-w-[110px] max-h-[37px] mr-10">
          <button className="btn btn-accent ">Search</button>
        </div> */
}
