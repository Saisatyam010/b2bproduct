import React from "react";
import { Link } from "react-router-dom";

const Template = () => {
  return (
    <div className="container w-full mx-auto">
      <div className="flex justify-between p-3 items-center mb-3">
        <h2 className="text-3xl font-semibold">Templates</h2>
        <Link
          to="#"
          className="text-xl text-[#390E44] font-medium underline underline-offset-4"
        >
          Customise Store
        </Link>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-5 w-full py-4 mb-5">
        <div className="max-w-[600px] md:w-full bg-[#adadad] h-[500px] cursor-pointer"></div>
        <div className="max-w-[600px] md:w-full bg-[#adadad] h-[500px] cursor-pointer"></div>
        <div className="max-w-[600px] md:w-full bg-[#adadad] h-[500px] cursor-pointer"></div>
        <div className="max-w-[600px] md:w-full bg-[#adadad] h-[500px] cursor-pointer"></div>
      </div>
    </div>
  );
};

export default Template;
