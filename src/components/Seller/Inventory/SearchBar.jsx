import React from "react";
import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="container py-3 my-3">
      <div className="flex items-center gap-3 w-full flex-wrap">
        <div className="max-w-[348px] w-full relative">
          <input
            type="text"
            placeholder="Search SKU, Title"
            className=" py-3 pl-8 border-[#CFCFCF] border outline-none rounded-[4px] w-full"
          />
          <span className="absolute left-2 top-3">
            <IoMdSearch size={22} color="#929292" />
          </span>
        </div>
        <button className="max-w-[120px] w-full bg-primary text-white hover:bg-white hover:text-primary border border-primary py-2 rounded-[33px] transition-all ease-in duration-200">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
