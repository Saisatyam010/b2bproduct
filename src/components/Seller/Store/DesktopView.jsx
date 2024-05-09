import React from "react";
import Webbanner from "../../../assets/images/webbg.png";
const DesktopView = () => {
  return (
    <div className=" mx-auto py-10  ">
      <img src={Webbanner} alt="Web banner" className="bg-cover" />
      <div className="flex py-2 mt-4 bg-[#D9D9D9]">
        <button className="focus:bg-[#390E44] focus:text-white py-3 px-6 rounded-md font-bold  ">
          Home
        </button>
        <button className="focus:bg-[#390E44] focus:text-white py-3 px-6 rounded-md font-bold  ">
          Page2
        </button>
        <button className="focus:bg-[#390E44] focus:text-white py-3 px-6 rounded-md font-bold  ">
          Page3
        </button>
        <button className="focus:bg-[#390E44] focus:text-white py-3 px-6 rounded-md font-bold  ">
          Page4
        </button>
        <button className="focus:bg-[#390E44] focus:text-white py-3 px-6 rounded-md font-bold  ">
          Page5
        </button>
      </div>
      <div className="h-72 bg-[#D9D9D9] mt-5"></div>

      <div className="grid grid-cols-3 gap-5">
        <div className="h-72 bg-[#D9D9D9] mt-5"></div>
        <div className="h-72 bg-[#D9D9D9] mt-5"></div>
        <div className="h-72 bg-[#D9D9D9] mt-5"></div>
      </div>
    </div>
  );
};

export default DesktopView;
