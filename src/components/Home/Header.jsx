import React from "react";
import { DownArrow, IndiaIcon, SearchIcon } from "../Common/Icons";
import { CiGlobe } from "react-icons/ci";

const Header = () => {
  return (
    <div className=" flex py-5 gap-16 w-full flex-wrap xl:flex-nowrap">
      <div className="flex items-center gap-10 w-full">
        <h1 className=" text-white font-bold text-5xl">LOGO</h1>
        <div className="flex-1 hidden md:block w-full relative">
          <input
            type="text"
            required
            className="w-full outline-none p-[14px_5px_14px_65px] rounded-3xl"
            placeholder="Search an item..."
          />
          <button className=" outline-none px-8 py-2 rounded-3xl bg-primary absolute text-white right-2 top-1/2 -translate-y-1/2 border border-primary hover:bg-white hover:text-primary transition-all ease-in duration-200">
            Search
          </button>
          <span className=" absolute left-8 top-1/2 -translate-y-1/2">
            <SearchIcon />
          </span>
        </div>
      </div>
      <div className="hidden lg:flex justify-end items-center w-full gap-4 cursor-pointer">
        <div className=" max-w-[200px] flex items-center gap-4 w-full whitespace-nowrap">
          <span>
            <IndiaIcon />
          </span>
          <h3 className=" text-white">Deliver in India</h3>
          <span>
            <DownArrow />
          </span>
        </div>
        <div className=" flex items-center gap-2">
          <span className=" text-2xl text-white">
            <CiGlobe />
          </span>
          <h3 className=" text-white font-medium">Language</h3>
        </div>
        <button className="max-w-[150px] text-center w-full py-2 text-white font-semibold">
          Login
        </button>
        <button className="max-w-[150px] text-center w-full py-2 rounded-3xl bg-secondary hover:bg-white border border-secondary transition-all ease-in duration-200 font-semibold">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Header;
